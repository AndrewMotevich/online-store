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
                <div class="card__hero hero" data-id="${card.id}">
                <img
                    src="https://s3-alpha-sig.figma.com/img/e2c1/7f50/bb040d2c866e3bc6b7c2958854abdc43?Expires=1673222400&Signature=fyaWCoo0grTmQyPbIyk~f3UWoYJ7kibcwrYPkIrRrVi4tu1k2xczyiL8uaCvnxmwcUt7s69-zWphqdEEG2sdFgvqg60KISNJz3tS-6X4uzZorXAbbjcrnYJ1zS5pjZ3i0kv6bHCc1lIzv0u-TxyKAqlALNAqiHfeErlSPaFlNu83TPBSRFBXCEQiT5WjQLP3YJmEKVmsE4mpNKClDwd-k0vaLw5RcsATKKS2kgF1s6rOmXn1wVESUKT0XyyTW5tuSZSvP60kTjj8bE6Y~jcqPv77DDbUe62xNqToCP4ZAzwagr7A0TgP3gGkQzfNsZ1c55HC30LadIu~-AeqeIAaGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="" class="hero__avatar" data-id="${card.id}">
                <span class="hero__name" data-id="${card.id}">${card.hero}</span>
                <span class="hero__rareness ${card.rarity.toLowerCase()}" data-id="${card.id}">${card.rarity}</span>
                    src=${card["hero-icon"]}
                    alt="" class="hero__avatar">
                <span class="hero__name">${card.hero}</span>
                <span class="hero__rareness ${card.rarity.toLowerCase()}">${card.rarity}</span>
                </div>
                <div class="card__price" data-id="${card.id}">
                <span class="card__price-val" data-id="${card.id}">${card.price}</span>
                <span class="card__price-cur" data-id="${card.id}">руб</span>
                </div>
                <h3 class="card__name" data-id="${card.id}">${card.itemName}</h3>
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

export {AppView, Cards};