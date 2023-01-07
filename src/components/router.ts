import { basketTemplate } from '../templates/basket';
import { cardsTemplate } from '../templates/cards';
import { errorPageTemplate } from '../templates/error-page';
import { modalWindowTemplate } from '../templates/modal-window';
import { productTemplate } from '../templates/product-info';
import { Cards } from './appView';
import { BasketMemory } from './basketLogic';

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
        document.title = title;
        window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
        return this;
    }

    init() {
        new BasketMemory().putDataToHeader();
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
        const basket = new BasketMemory();
        basket.putDataToBasketTotal();
        document.body.addEventListener('click',(event) => {
                if (((event.target) as HTMLElement).dataset.operator === 'plus'){
                    basket.increaseItemQnt(((event.target) as HTMLElement).dataset.id as string);
                }
                else if (((event.target) as HTMLElement).dataset.operator === 'minus'){
                    basket.decreaseItemQnt(((event.target) as HTMLElement).dataset.id as string);
                }
                else if (((event.target) as HTMLElement).dataset.operator === 'delete'){
                    basket.removeItemFromBasket(((event.target) as HTMLElement).dataset.id as string);
                }
        });
    })
    .add('form', () => {
        router.options.appDOM.innerHTML = modalWindowTemplate;
    })
    .add(/products\/\d{1,2}/, () => {
        router.options.appDOM.innerHTML = productTemplate;
    })
    .add('home', () => {
        document.body.addEventListener('click', (event) => {
            const basket = new BasketMemory();
            if (((event.target)as HTMLElement).className === 'card__buy' || ((event.target)as HTMLElement).className === 'card__buy card__buy--in-basket'){
                if (((event.target)as HTMLElement).classList.value.split(' ').includes('card__buy--in-basket')){
                    ((event.target)as HTMLElement).innerHTML = 'В&nbsp;корзину';
                    ((event.target)as HTMLElement).classList.remove('card__buy--in-basket');
                    basket.removeItemFromBasket(((event.target)as HTMLElement).dataset.id as string);
                }
                else {
                    ((event.target)as HTMLElement).innerText = 'Добавлено';
                    ((event.target)as HTMLElement).classList.add('card__buy--in-basket');
                    basket.addItemToBasket(((event.target)as HTMLElement).dataset.id as string);
                }
                new BasketMemory().putDataToHeader();
            }
        });
        router.options.appDOM.innerHTML = cardsTemplate;
        new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
    })
    .navigate('home', 'Secret Shop - Главная');

export default router;
