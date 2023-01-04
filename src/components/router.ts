import { basketLayout } from "../templates/basket";
import { cardsTemplates } from "../templates/cards";
import { errorPageLayout } from "../templates/error-page";
import modalWindowTemplate from "../templates/modal-window";
import { productInfo } from "../templates/product-info";
import { Cards } from "./appView";

type IRouter = {
    path: string | RegExp;
    cb: (path: string[]) => void,
}

class Router {
    routes: IRouter[];
    options: {
        root: string;
        404: string;
        appDOM: HTMLElement;
    };
    current: string | null;
    interval;
    listen;

    constructor(options: {root: string; 404: string; appDOM: HTMLElement}) {
        this.routes = [];
        this.options = options;
        this.current = '';

        this.interval = (): string | number | undefined => {
            if (this.current === this.getFragment()) { 
                return;
            }
            this.current = this.getFragment();

            this.routes.some(route => {  
                const match = this.current?.match(route.path);
                if (match) {
                    match.shift();
                    
                    route.cb.call({}, [...match]);
                    
                    return match;
                }
                return false;
            });

            if (!this.routes.map((x) => x.path).some((path) => this.current?.match(path))) {
                this.options.appDOM.innerHTML = this.options[404];
                return;
            }
        };

        
        this.listen = () => {
            clearInterval(this.interval());
            window.setInterval(this.interval, 50);
        };

        this.listen();
    }

    add(path: string | RegExp, cb: () => void) {
        this.routes.push({
            path,
            cb
        });
        
        return this;
    }
    
    clearSlashes(path: string) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }

    getFragment() {
        let fragment = '';

        fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
        fragment = fragment.replace(/\?(.*)$/, '');
        fragment = this.options.root !== '/' ? fragment.replace(this.options.root, '') : fragment;
        this.clearSlashes(fragment);
        
        return this.clearSlashes(fragment);
    }

    navigate(path = '', title = 'Secret Shop') {
        document.title = title;
        window.history.pushState({}, title, this.options.root + this.clearSlashes(path));
        return this;
    }
}

const router = new Router({
    root: '/',
    404: errorPageLayout,
    appDOM: document.querySelector('.main') as HTMLElement,
  });
  
  router
    .add('basket', () => {
        router.options.appDOM.innerHTML = basketLayout;
    })
    .add('form', () => {
        router.options.appDOM.innerHTML = modalWindowTemplate;
    })
    .add(/products\/(.*)/, () => {
        router.options.appDOM.innerHTML = productInfo;
    })
    .add('home', () => {     
        router.options.appDOM.innerHTML = cardsTemplates;
        new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
    })
    .navigate('home');

document.addEventListener('popstate', () => {
    console.log(`location: ${document.location}`);
});

document.addEventListener('load', () => {
    history.pushState({}, '', 'home');
});

document.querySelector('.header__logo')?.addEventListener('click', (e) => {
    e.preventDefault();
    router.navigate('home');
});

document.querySelector('.header__basket')?.addEventListener('click', (e) => {
    e.preventDefault();
    router.navigate('basket', 'Secret Shop - Корзина');
});

router.options.appDOM.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('.card__buy')) {
        return false;
    }
    if (target.closest('.goods-cards__item')) {
        e.preventDefault();
        router.navigate(`products/${target.dataset.id}`, 'Secret Shop - Товар');
    }
});

export default router;
