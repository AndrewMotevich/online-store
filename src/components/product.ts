import { Controller } from "./controller";
import { ICard } from "./types";
import router from "./router";

class Product{
    controller;
    constructor() {
        this.controller = new Controller();
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
            <img src="${productObj.img1}"
                alt="">
            <div class="arrows">
                <button class="arrow-left">&#8592</button>
                <button class="arrow-right">&#8594</button>
            </div>
            </div>
            <div class="info-field_description">
            <h3>${productObj['item-name']}</h3>
            <span class="label label_price">${productObj.price} руб.</span>
            <button class="label description_modal-button">Купить в один клик</button>
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
            <button class="description_button">В корзину</button>
            </div>
        `;

        productInfoDOM.innerHTML = productInfo;
        navInfoDOM.innerHTML = navInfo;
    }
}

export {Product};