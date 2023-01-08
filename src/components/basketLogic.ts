import { Controller } from './controller';
import { QString } from './qString';
import { ICard, basketItem, QueryParams } from './types';

class Basket {
    data: ICard[];
    controller;
    testQueryParameters: QueryParams;
    qString: QString;
    constructor() {
        this.controller = new Controller();
        this.data = this.controller.getAllCards();
        this.qString = new QString();
        this.testQueryParameters = this.qString.hasQuery() ? this.qString.getQueryObject() : this.qString.result;
    }
    drawItems() {
        const basketMemory = new BasketMemory();
        const itemsList = basketMemory.getAllItemsInBasket();
        const appDom = document.querySelector('.basket-items__list') as HTMLElement;
        appDom.innerHTML = '';
        itemsList.forEach((item) => {
            const itemData = new Controller().getCardById(item.id) as ICard;
            const li = document.createElement('li');
            li.classList.add('basket-items__item');
            li.innerHTML = `
        <div class="basket-items__item-card">
          <img class="basket-items__item-card-img" src=${itemData.img1} alt="">
          <div class="basket-items__item-card-hero hero">
            <img
              src=${itemData['hero-icon']}
              alt="" class="hero__avatar">
            <span class="basket-items__item-card-hero-name hero__name">${itemData.hero}</span>
            <span class="basket-items__item-card-hero-rareness hero__rareness mythical">${itemData.rarity}</span>
          </div>
        </div>
        <h3 class="basket-items__item-name">${itemData['item-name']}</h3>
        <div class="basket-items__item-bottom">
          <div class="basket-items__item-price">
            <span class="basket-items__item-price-text">Итог:</span>
            <span class="basket-items__item-price-num">${item.itemPricesSum} руб.</span>
          </div>
          <div class="basket-items__item-btns">
            <button class="basket-items__item-btn basket-items__item-btn--minus"  aria-label="убрать">
              <svg data-id="${itemData.id}" data-operator="minus" width="32" height="32" viewBox="0 0 32 32" class="basket-items__item-btn-icon">
                <rect x="10" y="15" width="12" height="2"></rect>
              </svg>
            </button>
            <span class="basket-items__item-count">${item.itemQnt}</span>
            <button class="basket-items__item-btn basket-items__item-btn--plus"  aria-label="добавить">
              <svg data-id="${itemData.id}" data-operator="plus" width="32" height="32" viewBox="0 0 32 32" class="basket-items__item-btn-icon">
                <rect x="10" y="15" width="12" height="2"></rect>
                <rect x="17" y="10" width="12" height="2" transform="rotate(90 17 10)"></rect>
              </svg>
            </button>
          </div>
          <button data-id="${itemData.id}" data-operator="delete" class="basket-items__item-delete"  aria-label="удалить">
            <svg data-id="${itemData.id}" data-operator="delete" width="30" height="30" viewBox="0 0 30 30" class="basket-items__item-delete-icon">
              <path d="M21.5 8.875H17.75L17.4563 8.36368C17.394 8.25436 17.2982 8.16241 17.1795 8.09816C17.0608 8.03391 16.9239 7.99992 16.7844 8H13.2125C13.0732 7.99954 12.9367 8.0334 12.8184 8.09772C12.7001 8.16204 12.6049 8.25421 12.5437 8.36368L12.25 8.875H8.5C8.36739 8.875 8.24021 8.9211 8.14645 9.00315C8.05268 9.08519 8 9.19647 8 9.3125V10.1875C8 10.3035 8.05268 10.4148 8.14645 10.4969C8.24021 10.5789 8.36739 10.625 8.5 10.625H21.5C21.6326 10.625 21.7598 10.5789 21.8536 10.4969C21.9473 10.4148 22 10.3035 22 10.1875V9.3125C22 9.19647 21.9473 9.08519 21.8536 9.00315C21.7598 8.9211 21.6326 8.875 21.5 8.875ZM9.6625 20.7695C9.68635 21.1027 9.85443 21.4155 10.1325 21.6441C10.4106 21.8727 10.7778 22 11.1594 22H18.8406C19.2222 22 19.5894 21.8727 19.8675 21.6441C20.1456 21.4155 20.3137 21.1027 20.3375 20.7695L21 11.5H9L9.6625 20.7695Z" fill=""></path>
            </svg>
          </button>
        </div>`;
            appDom?.appendChild(li);
        });
    }
    pagination(limit = 3, page = 1) {
        const itemQnt = document.querySelector('.basket-items__per-page-num') as HTMLInputElement;
        const currentPage = document.querySelector('.basket-items__slider-count') as HTMLInputElement;
        this.qString.setQueryParams('limit', `${limit}`);
        this.qString.setQueryParams('currentPage', `${page}`);
        this.testQueryParameters = this.qString.getQueryObject();
        itemQnt.value = this.testQueryParameters['limit'][0];
        currentPage.innerText = this.testQueryParameters['currentPage'][0];
    }
}

class BasketMemory {
    basketArray: basketItem[];
    order: number;
    constructor() {
        this.order = 1;
        this.basketArray = [];
    }
    addItemToBasket(id: string) {
        const itemData = new Controller().getCardById(Number(id)) as ICard;
        this.getAllItemsInBasket();
        const item: basketItem = {
            id: Number(id),
            order: this.order,
            itemQnt: 1,
            itemPrice: itemData.price,
            itemPricesSum: itemData.price,
            stock: itemData.stock
        };
        this.basketArray.push(item);
        const stringify = JSON.stringify(this.basketArray);
        localStorage.setItem('basketArray', stringify);
        this.order += 1;
    }
    getAllItemsInBasket() {
        const parsData = localStorage.getItem('basketArray');
        if (parsData === '') return this.basketArray;
        this.basketArray = JSON.parse(parsData as string);
        return this.basketArray;
    }
    removeItemFromBasket(id: string) {
        const data: basketItem[] = this.getAllItemsInBasket();
        const tempResult: basketItem[] = [];
        data.forEach((elem) => {
            if (elem.id != Number(id)) {
                tempResult.push(elem);
            }
        });
        this.basketArray = tempResult;
        const stringify = JSON.stringify(this.basketArray);
        localStorage.setItem('basketArray', stringify);
        new Basket().drawItems();
    }
    increaseItemQnt(id: string) {
        const data = this.getAllItemsInBasket();
        data.forEach((elem)=>{
          if (elem.id === Number(id) && elem.itemQnt < elem.stock && elem.itemQnt >= 1){
            elem.itemQnt += 1;
            elem.itemPricesSum = elem.itemPrice * elem.itemQnt;
          }
        });
        this.basketArray = data;
        const stringify = JSON.stringify(data);
        localStorage.setItem('basketArray', stringify);
        new Basket().drawItems();
    }
    decreaseItemQnt(id: string) {
      const data = this.getAllItemsInBasket();
      data.forEach((elem)=>{
        if (elem.id === Number(id) && elem.itemQnt <= elem.stock && elem.itemQnt >= 2){
          elem.itemQnt -= 1;
          elem.itemPricesSum = elem.itemPrice * elem.itemQnt;
        }
      });
      this.basketArray = data;
      const stringify = JSON.stringify(data);
      localStorage.setItem('basketArray', stringify);
      new Basket().drawItems();
    }
    getAllQntAndSum(){
      const data = this.getAllItemsInBasket();
      const result: number[] = [0,0];
      data.forEach((elem)=>{
        result[0] += elem.itemPricesSum;
        result[1] += elem.itemQnt;
      });
      return result;
    }
    putDataToHeader(){
      const data = this.getAllQntAndSum();
      const headerPrice = document.querySelector('.header__cost-num') as HTMLElement;
      const headerQnt = document.querySelector('.header__basket-count') as HTMLElement;
      headerPrice.innerHTML = data[0].toString();
      headerQnt.innerHTML = data[1].toString();
    }
    putDataToBasketTotal(){
      const resultData = this.getAllQntAndSum();
      const basketTotalPrice = document.querySelector('.basket-pay__price-num') as HTMLElement;
      const basketQnt = document.querySelector('.basket-pay__amount-num') as HTMLElement;
      basketTotalPrice.innerHTML = resultData[0].toString();
      basketQnt.innerHTML = resultData[1].toString();
    }
}

export { Basket, BasketMemory };
