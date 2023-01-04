import MainPage from "./mainPage";
import { cardsTemplates } from "../templates/cards";
import { productInfo } from "../templates/product-info";

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
                <div class="card__hero hero">
                <img
                    src=${card["hero-icon"]}
                    alt="" class="hero__avatar">
                <span class="hero__name">${card.hero}</span>
                <span class="hero__rareness ${card.rarity.toLowerCase()}">${card.rarity}</span>
                </div>
                <div class="card__price">
                <span class="card__price-val">${card.price}</span>
                <span class="card__price-cur">руб</span>
                </div>
                <h3 class="card__name">${card['item-name']}</h3>
                <button class="card__buy">В&nbsp;корзину</button>
            </li>
            `;
        });
        this.cardsDOM.innerHTML = result;
        const findDOM = document.querySelector('.goods-cards__head-find-num') as HTMLElement;
        findDOM.textContent = `${this.mainPage.getCards().length}`;
    }
}

class AppView {
    title;
    location;
    appDOM;
    constructor (title: string, location: string, appDOM: HTMLElement) {
        this.title = title;
        this.location = location;
        this.appDOM = appDOM;
    }

    init() {
        history.pushState({}, this.title, this.location);

        switch (this.location) {
            case '/':
                document.title = this.title;
                this.appDOM.innerHTML = cardsTemplates;
                new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
            break;
            case '/product-details':
                this.appDOM.innerHTML = productInfo;
            break;
        }
    }
}

// example:
// const app = new AppView('Secret Shop - Product', '/product', document.querySelector('.main') as HTMLElement).init();
// const app = new AppView('Secret Shop', '/', document.querySelector('.main') as HTMLElement).init();

export {AppView};