import { basketTemplate } from '../templates/basket';
import { cardsTemplate } from '../templates/cards';
import { errorPageTemplate } from '../templates/error-page';
import { modalWindowTemplate } from '../templates/modal-window';
import { productTemplate } from '../templates/product-info';
import { Cards } from './appView';

type IRouter = {
    path: string | RegExp;
    cb: (path: string[]) => void;
};

class Router {
    routes: IRouter[];
    options: {
        root: string;
        404: string;
        appDOM: HTMLElement;
    };
    current: string | null;

    constructor(options: { root: string; 404: string; appDOM: HTMLElement }) {
        this.routes = [];
        this.options = options;
        this.current = '';
    }

    add(path: string | RegExp, cb: () => void) {
        this.routes.push({
            path,
            cb,
        });

        return this;
    }

    clearSlashes(path: string) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }

    getFragment() {
        let fragment = '';
        const match = window.location.href.match(/#(.*)$/);
        fragment = match ? match[1] : '';

        return this.clearSlashes(fragment);
    }

    navigate(path = '', title = 'Secret Shop') {
        localStorage.setItem('lastURLStart', path);
        document.title = title;
        window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
        return this;
    }

    init() {
        if (this.current === this.getFragment()) {
            return;
        }
        this.current = this.getFragment();
        localStorage.setItem('lastPath', this.getFragment());

        this.routes.some((route) => {
            const match = this.current?.match(route.path);
            if (match) {
                match.shift();

                route.cb.call({}, [...match]);

                return match;
            }
            return false;
        });

        if (
            !this.routes
                .map((x) => x.path)
                .map((y) => this.current?.split('?')[0].replace(y, ''))
                .some((path) => path === '')
        ) {
            this.options.appDOM.innerHTML = this.options[404];
            return;
        }
    }
}

const router = new Router({
    root: '/',
    404: errorPageTemplate,
    appDOM: document.querySelector('.main') as HTMLElement,
});

router
    .add('basket', () => {
        router.options.appDOM.innerHTML = basketTemplate;
    })
    .add('form', () => {
        router.options.appDOM.innerHTML = modalWindowTemplate;
    })
    .add(/products\/\d{1,2}/, () => {
        router.options.appDOM.innerHTML = productTemplate;
    })
    .add('home', () => {
        router.options.appDOM.innerHTML = cardsTemplate;
        new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
    })
    .navigate('home', 'Secret Shop - Главная');

export default router;
