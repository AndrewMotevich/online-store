import { Controller } from "./controller";
import { ICard } from "./types";
import router from "./router";
import { BasketMemory } from "./basketLogic";

class Product{
    controller;
    basketMemory;
    constructor() {
        this.controller = new Controller();
        this.basketMemory = new BasketMemory();
    }

    renderBigImg(src: string) {
        const bigImg = document.createElement('div');
        bigImg.classList.add('big-img');
        bigImg.innerHTML = `
            <div class="big-img__overlay"></div>
            <div class="big-img__img-wrap">
                <button class="big-img__close">
                <svg fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" class="big-img__close-icon">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="m7.426 6 4.279-4.278A1.008 1.008 0 1 0 10.278.295L6 4.574 1.721.295A1.008 1.008 0 1 0 .295 1.722L4.574 6 .295 10.278a1.008 1.008 0 0 0 1.426 1.427L6 7.426l4.278 4.279a1.008 1.008 0 1 0 1.427-1.427L7.426 6Z" fill=""></path>
                </svg>
                </button>
                <img class="big-img__img" src="${src}">
            </div>
        `;

        const bodyDOM = document.querySelector('body') as Element;
        bodyDOM.append(bigImg);

        document.querySelector('.big-img__close')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.big-img')?.remove();
        });

        document.querySelector('.big-img__overlay')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.big-img')?.remove();
        });
    }

    render(id: number) {
        
        if (id > this.controller.getAllCards().length) {
            router.options.appDOM.innerHTML = router.options[404];
            return;
        }

        const productObj = this.controller.getCardById(id) as ICard;
        const productInfoDOM = document.querySelector('.goods-details_info-field') as Element;
        const navInfoDOM = document.querySelector('.goods-details_navigation') as Element;

        let type;
        if (productObj.type === 'bundle') {
            type = 'Набор';
        } else if(productObj.type === 'item') {
            type = 'Предмет';
        } else {
            type = null;
        }

        let isInBasket = false;
        this.basketMemory.getAllItemsInBasket().forEach((item) => {
            if (item.id === id) {
                isInBasket = true;
                return;
            }
        });
        

        const navInfo = `
        <ul>
            <li class="navigation_path">
                <a href="#">Secret Shop</a>
            </li>
            <li class="navigation_path">
                <a href="#">${type}</a>
            </li>
            <li class="navigation_path">
                <a href="#">${productObj.hero}</a>
            </li>
            <li class="navigation_path">
                <a href="#">${productObj['item-name']}</a>
            </li>
        </ul>
        `;

        const productInfo = `
            <h2 class="visually-hidden">описание товара</h2>
            <div class="info-field_img">
                ${productObj["video-link"] ? `<button data-id="${productObj.id}" class="info-field__video info-field__video--not-active">Видео</button>` : ''}
                <img class="info-field_img-img" data-id="${productObj.id}" src="${productObj.img1}" alt="">
                <div class="arrows">
                    <button data-id="${productObj.id}" class="arrow-left">&#8592</button>
                    <button data-id="${productObj.id}" class="arrow-right">&#8594</button>
                </div>
            </div>
            <div class="info-field_description">
            <h3>${productObj['item-name']}</h3>
            <span class="label label_price">${productObj.price} руб.</span>
            <button class="label description_modal-button buy-one-click" data-id="${productObj.id}">Купить в один клик</button>
            <div class="description_labels">
                <div class="label label_hero">
                <img class="label_hero-icon"
                    src="${productObj['hero-icon']}" alt="">
                    <span class="label_hero-name">${productObj.hero}</span>
                </div>
                <p class="label label_type">${type}</p>
                <div class="label label_rarity ${productObj.rarity.toLowerCase()}-border">
                <div class="label_rarity-icon ${productObj.rarity.toLowerCase()}-border">
                    <div class="label_rarity-icon-dot ${productObj.rarity.toLowerCase()}-bg"></div>
                </div>
                <span class="label_rarity-name ${productObj.rarity.toLowerCase()}">${productObj.rarity}</span>
                </div>
                <p class="label label_stock">На складе:&nbsp<span class="label_stock-count ${productObj.stock > 5 ? 'label_stock-count--good' : 'label_stock-count--bad'}">${productObj.stock}</span></p>
            </div>
            <h4>Описание товара</h4>
            <div class="line"></div>
            <p class="description_text">${productObj.description}</p>
            <button class="description_button ${isInBasket ? 'description_button--add' : 'description_button--not-add'}" data-id="${id}">${isInBasket ? 'Добавлено' : 'В корзину'}</button>
            </div>
        `;

        productInfoDOM.innerHTML = productInfo;
        navInfoDOM.innerHTML = navInfo;
        
    }
}

export {Product};