import MainPage from "./mainPage";
import router from "./router";
import { QString } from "./qString";

class Cards {
    mainPage;
    cardsDOM;
    constructor(cardsDOM: HTMLElement) {
        this.mainPage = new MainPage();
        this.cardsDOM = cardsDOM;
    }

    render() {
        let result = '';
        // this.mainPage.getCards().forEach((card) => {
        this.mainPage.filterTest().forEach((card) => {
            result += `
            <li class="goods-cards__item card" data-id="${card.id}" style="background: no-repeat center url(${card.img1}) var(--color-dark); background-size: cover">
                <div class="card__hero hero" data-id="${card.id}">
                <img
                    src=${card["hero-icon"]}
                    alt="" class="hero__avatar" data-id="${card.id}">
                <span class="hero__rareness ${card.rarity.toLowerCase()}" data-id="${card.id}">${card.rarity}</span>
                <span class="hero__name" data-id="${card.id}">${card.hero}</span>
                </div>
                <div class="card__price" data-id="${card.id}">
                <span class="card__price-val" data-id="${card.id}">${card.price}</span>
                <span class="card__price-cur" data-id="${card.id}">руб</span>
                </div>
                <h3 class="card__name" data-id="${card.id}">${card['item-name']}</h3>
                <button class="card__buy">В&nbsp;корзину</button>
            </li>
            `;
        });
        this.cardsDOM.innerHTML = result;
        const findDOM = document.querySelector('.goods-cards__head-find-num') as HTMLElement;
        findDOM.textContent = `${this.mainPage.filterTest().length}`;
    }
}

class AppView {
    qString;
    constructor() {
        this.qString = new QString;
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            router.navigate(localStorage.getItem('lastPath') ?? 'home', 'Secret Shop - Главная');
            router.init();
        });
        
        window.addEventListener('popstate', () => {
            router.init();
        });
        
        document.querySelector('.header__logo')?.addEventListener('click', (e) => {
            e.preventDefault();
            router.navigate(`home${this.qString.getQueryString()}`, 'Secret Shop - Главная');
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
                router.navigate(`products/${target.dataset.id}`, `Secret Shop - Товар`);
            }
        });
    }
}


export {AppView, Cards};