import MainPage from './mainPage';
import router from './router';
import { QString } from './qString';
import { Basket, BasketMemory } from './basketLogic';
import { Product } from './product';
import { Controller } from './controller';
import { ICard, basketItem } from './types';
import { basketTemplate } from '../templates/basket';
import { Modal } from './modal';
import { DualSlider } from './dualSlider';
import { checkPromo } from './promoBlock';

class Cards {
    mainPage;
    cardsDOM;
    constructor(cardsDOM: HTMLElement) {
        this.mainPage = new MainPage();
        this.cardsDOM = cardsDOM;
    }

    render() {
        if (localStorage.getItem('view-column') === '3') {
            document.querySelector('.goods-cards__list')?.classList.add('goods-cards__list--3');
            document
                .querySelector('.goods-cards__head-type-btn--3')
                ?.classList.add('goods-cards__head-type-btn--active');
        } else {
            document.querySelector('.goods-cards__list')?.classList.add('goods-cards__list--4');
            document
                .querySelector('.goods-cards__head-type-btn--4')
                ?.classList.add('goods-cards__head-type-btn--active');
        }
        let result = '';
        if (this.mainPage.filterTest().length === 0) {
            document.querySelector('.goods-cards__not-found')?.classList.add('goods-cards__not-found--active');
            return;
        }
        document.querySelector('.goods-cards__not-found')?.classList.remove('goods-cards__not-found--active');
        this.mainPage.filterTest().forEach((card) => {
            const basketItems = new BasketMemory().getAllItemsInBasket();
            const buttonTexts = ['В&nbsp;корзину', 'Добавлено'];
            const buttonClass = ['card__buy', 'card__buy card__buy--in-basket'];
            let text = buttonTexts[0];
            let className = buttonClass[0];
            basketItems.forEach((item) => {
                if (item.id === card.id) {
                    text = buttonTexts[1];
                    className = buttonClass[1];
                }
            });
            result += `
            <li class="goods-cards__item card" data-id="${card.id}" style="background: no-repeat center url(${
                card.img1
            }) var(--color-dark); background-size: cover">
                <div class="card__hero hero" data-id="${card.id}">
                <img
                    src=${card['hero-icon']}
                    alt="" class="hero__avatar" data-id="${card.id}">
                <span class="hero__rareness ${card.rarity.toLowerCase()}" data-id="${card.id}">${card.rarity}</span>
                <span class="hero__name" data-id="${card.id}">${card.hero}</span>
                </div>
                <div class="card__price" data-id="${card.id}">
                <span class="card__price-val" data-id="${card.id}">${card.price}</span>
                <span class="card__price-cur" data-id="${card.id}">руб</span>
                </div>
                <h3 class="card__name" data-id="${card.id}">${card['item-name']}</h3>
                <button class="${className}" data-id="${card.id}">${text}</button>
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
    product;
    basketMemory;
    controller;
    modal;
    dualSliderPrice;
    dualSliderStock;
    constructor() {
        this.qString = new QString();
        this.product = new Product();
        this.basketMemory = new BasketMemory();
        this.controller = new Controller();
        this.modal = new Modal();
        this.dualSliderPrice = new DualSlider('price-range');
        this.dualSliderStock = new DualSlider('stock-range');
    }

    filterChecker() {
        const obj = this.qString.hasQuery() ? this.qString.getQueryObject() : this.qString.result;
        Object.entries(obj).forEach((item) => {
            item[1].forEach((value, indexArr) => {
                const input = document.querySelector(`input[value="${value}"]`) as HTMLInputElement;
                try {
                    input.checked = true;
                } catch (e) {
                    console.log(e);
                }

                if (item[0] === 'price-range') {
                    console.log(value, indexArr);
                    if (indexArr === 0) {
                        const rangeMin = document.querySelector('#priceRangeMin') as HTMLInputElement;
                        const numberMin = document.querySelector('#priceNumMin') as HTMLInputElement;

                        rangeMin.value = `${value}`;
                        numberMin.value = `${value}`;
                    }

                    if (indexArr === 1) {
                        const rangeMax = document.querySelector('#priceRangeMax') as HTMLInputElement;
                        const numberMax = document.querySelector('#priceNumMax') as HTMLInputElement;

                        rangeMax.value = `${value}`;
                        numberMax.value = `${value}`;
                    }
                }

                if (item[0] === 'stock-range') {
                    console.log(value, indexArr);
                    if (indexArr === 0) {
                        const rangeMin = document.querySelector('#stockRangeMin') as HTMLInputElement;
                        const numberMin = document.querySelector('#stockNumMin') as HTMLInputElement;

                        rangeMin.value = `${value}`;
                        numberMin.value = `${value}`;
                    }

                    if (indexArr === 1) {
                        const rangeMax = document.querySelector('#stockRangeMax') as HTMLInputElement;
                        const numberMax = document.querySelector('#stockNumMax') as HTMLInputElement;

                        rangeMax.value = `${value}`;
                        numberMax.value = `${value}`;
                    }
                }
            });
        });
    }

    typeView() {
        if (localStorage.getItem('view-column') === '3') {
            document.querySelector('.goods-cards__list')?.classList.add('goods-cards__list--3');
            document
                .querySelector('.goods-cards__head-type-btn--3')
                ?.classList.add('goods-cards__head-type-btn--active');
        } else {
            document.querySelector('.goods-cards__list')?.classList.add('goods-cards__list--4');
            document
                .querySelector('.goods-cards__head-type-btn--4')
                ?.classList.add('goods-cards__head-type-btn--active');
        }
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.qString.resetQueryString();
            if (!localStorage.getItem('basketArray')) {
                const arr: basketItem[] = [];
                const stringify = JSON.stringify(arr);
                localStorage.setItem('basketArray', stringify);
            }
            new BasketMemory().putDataToHeader();
            router.navigate(`${localStorage.getItem('lastPath') ?? 'home'}`, 'Secret Shop - Главная');
            router.init();
            this.filterChecker();
            this.typeView();

            if (localStorage.getItem('lastPath')?.includes('products/')) {
                const id = Number(localStorage.getItem('lastPath')?.split('/')[1]);
                this.product.render(id);
            }
        });

        window.addEventListener('popstate', () => {
            router.init();
            if (router.getFragment().includes('products/')) {
                const id = Number(router.getFragment().split('/')[1]);
                this.product.render(id);
            }
        });

        document.querySelector('.header__logo')?.addEventListener('click', (e) => {
            e.preventDefault();
            router.navigate('home', 'Secret Shop - Главная');
            localStorage.setItem('lastPath', 'home');
            new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
            this.filterChecker();
            this.typeView();
        });

        document.querySelector('.header__basket')?.addEventListener('click', (e) => {
            const basket = new BasketMemory();
            e.preventDefault();
            router.navigate('basket', 'Secret Shop - Корзина');
            if (basket.getAllItemsInBasket().length === 0) {
                router.options.appDOM.innerHTML = basketTemplate;
                basket.putDataToHeader();
            } else {
                basket.putDataToBasketTotal();
                new Basket().restorePaginationValues();
                new Basket().drawItems();
                (document.querySelector('.basket-pay__promo-code') as HTMLInputElement).addEventListener(
                    'keyup',
                    () => {
                        const promoBlock = document.querySelector('.basket-pay__promo-code') as HTMLInputElement;
                        checkPromo(promoBlock.value);
                    }
                );
            }
        });

        const bodyDOM = document.querySelector('body') as HTMLElement;

        bodyDOM.addEventListener('keyup', (e) => {
            const basket = new BasketMemory();
            if ((e.target as HTMLElement).dataset.operator === 'quantity') {
                basket.putDataToBasketTotal();
                basket.putDataToHeader();
                new Basket().drawItems();
                basket.putDataToBasketTotal();
                basket.putDataToHeader();
                new Basket().drawItems();
            }
        });

        bodyDOM.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const basket = new BasketMemory();
            //basket pagination
            if (target.closest('.basket-items__head')) {
                if ((e.target as HTMLElement).dataset.operator === 'next') {
                    if (
                        (document.querySelector('.basket-items__slider-count') as HTMLElement).innerText >= '1' &&
                        (document.querySelector('.basket-items__slider-count') as HTMLElement).innerText <
                            Math.ceil(
                                new Basket().getPaginationValues()[2] / new Basket().getPaginationValues()[0]
                            ).toString()
                    ) {
                        const pageNumber =
                            Number((document.querySelector('.basket-items__slider-count') as HTMLElement).innerText) +
                            1;
                        (document.querySelector('.basket-items__slider-count') as HTMLElement).innerText =
                            pageNumber.toString();
                    }
                    basket.putDataToBasketTotal();
                    basket.putDataToHeader();
                    new Basket().drawItems();
                }
                if ((e.target as HTMLElement).dataset.operator === 'previous') {
                    if ((document.querySelector('.basket-items__slider-count') as HTMLElement).innerText > '1') {
                        const pageNumber =
                            Number((document.querySelector('.basket-items__slider-count') as HTMLElement).innerText) -
                            1;
                        (document.querySelector('.basket-items__slider-count') as HTMLElement).innerText =
                            pageNumber.toString();
                    }
                    basket.putDataToBasketTotal();
                    basket.putDataToHeader();
                    new Basket().drawItems();
                }
                // if ((e.target as HTMLElement).dataset.operator === 'quantity') {
                //     basket.putDataToBasketTotal();
                //     basket.putDataToHeader();
                //     new Basket().drawItems();
                // }
                basket.putDataToBasketTotal();
                basket.putDataToHeader();
                new Basket().drawItems();
                const getCurrentPaginationValues = new Basket().getPaginationValues();
                new Basket().putPaginationValues(getCurrentPaginationValues[0], getCurrentPaginationValues[1]);
            }
            //basket navigate to product
            if (target.closest('.basket-items__item')) {
                if ((e.target as HTMLElement).dataset.operator === 'plus') {
                    e.preventDefault();
                    basket.increaseItemQnt((e.target as HTMLElement).dataset.id as string);
                    basket.putDataToBasketTotal();
                    basket.putDataToHeader();
                    new Basket().drawItems();
                } else if ((e.target as HTMLElement).dataset.operator === 'minus') {
                    e.preventDefault();
                    basket.decreaseItemQnt((e.target as HTMLElement).dataset.id as string);
                    basket.putDataToBasketTotal();
                    basket.putDataToHeader();
                    new Basket().drawItems();
                } else if ((e.target as HTMLElement).dataset.operator === 'delete') {
                    e.preventDefault();
                    basket.removeItemFromBasket((e.target as HTMLElement).dataset.id as string);
                    new Basket().restorePaginationValues();
                    if (basket.getAllItemsInBasket().length === 0) {
                        router.options.appDOM.innerHTML = basketTemplate;
                        basket.putDataToHeader();
                    } else if ((document.querySelectorAll('.basket-items__item') as NodeList).length === 1) {
                        const pageNumber =
                            Number((document.querySelector('.basket-items__slider-count') as HTMLElement).innerText) -
                            1;
                        (document.querySelector('.basket-items__slider-count') as HTMLElement).innerText =
                            pageNumber.toString();
                        basket.putDataToBasketTotal();
                        basket.putDataToHeader();
                        new Basket().drawItems();
                        const getCurrentPaginationValues = new Basket().getPaginationValues();
                        new Basket().putPaginationValues(getCurrentPaginationValues[0], getCurrentPaginationValues[1]);
                    } else {
                        basket.putDataToBasketTotal();
                        basket.putDataToHeader();
                        new Basket().drawItems();
                    }
                } else {
                    e.preventDefault();
                    router.navigate(`products/${target.dataset.id}`, `Secret Shop - Товар`);
                    const id = Number(target.dataset.id);
                    this.product.render(id);
                }
            }
            //main page add to basket
            if (
                (e.target as HTMLElement).className === 'card__buy' ||
                (e.target as HTMLElement).className === 'card__buy card__buy--in-basket'
            ) {
                if ((e.target as HTMLElement).classList.value.split(' ').includes('card__buy--in-basket')) {
                    (e.target as HTMLElement).innerHTML = 'В&nbsp;корзину';
                    (e.target as HTMLElement).classList.remove('card__buy--in-basket');
                    basket.removeItemFromBasket((e.target as HTMLElement).dataset.id as string);
                } else {
                    (e.target as HTMLElement).innerText = 'Добавлено';
                    (e.target as HTMLElement).classList.add('card__buy--in-basket');
                    basket.addItemToBasket((e.target as HTMLElement).dataset.id as string);
                }
                new BasketMemory().putDataToHeader();
            }

            if (target.closest('.card__buy')) {
                return false;
            }
            if (target.closest('.goods-cards__item')) {
                e.preventDefault();
                router.navigate(`products/${target.dataset.id}`, `Secret Shop - Товар`);
                const id = Number(target.dataset.id);
                this.product.render(id);
            }

            if (target.closest('.goods-filter-input')) {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                    target.checked = true;
                    this.qString.setQueryParams(target.name, target.value);
                } else {
                    target.checked = false;
                    this.qString.delQueryParams(target.name, target.value);
                }
                new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
                router.navigate('home', 'Secret Shop - Главная');
            }

            if (target.closest('.goods-filter-radio__input')) {
                const target = e.target as HTMLInputElement;
                this.qString.delQueryKey('sort');
                this.qString.setQueryParams(target.name, target.value);
                new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
            }

            if (target.closest('.goods-cards__head-type-btn--4')) {
                document
                    .querySelector('.goods-cards__head-type-btn--4')
                    ?.classList.add('goods-cards__head-type-btn--active');
                document
                    .querySelector('.goods-cards__head-type-btn--3')
                    ?.classList.remove('goods-cards__head-type-btn--active');

                document.querySelector('.goods-cards__list')?.classList.add('goods-cards__list--4');
                document.querySelector('.goods-cards__list')?.classList.remove('goods-cards__list--3');

                localStorage.setItem('view-column', '4');
            }

            if (target.closest('.goods-cards__head-type-btn--3')) {
                document
                    .querySelector('.goods-cards__head-type-btn--3')
                    ?.classList.add('goods-cards__head-type-btn--active');
                document
                    .querySelector('.goods-cards__head-type-btn--4')
                    ?.classList.remove('goods-cards__head-type-btn--active');

                document.querySelector('.goods-cards__list')?.classList.add('goods-cards__list--3');
                document.querySelector('.goods-cards__list')?.classList.remove('goods-cards__list--4');

                localStorage.setItem('view-column', '3');
            }

            if (target.closest('.goods-filter__reset')) {
                localStorage.setItem('basketArray', '');
                basket.putDataToHeader();
                this.qString.resetQueryString();
                router.navigate('home', 'Secret Shop - Главная');
                localStorage.setItem('lastPath', 'home');
                this.typeView();
                new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
                const checkeds: NodeListOf<HTMLInputElement> = document.querySelectorAll('input:checked');

                checkeds.forEach((item) => {
                    item.checked = false;
                });

                const searchBar = document.querySelector('.goods-cards__head-search') as HTMLInputElement;
                searchBar.value = '';

                const priceRangeMin = document.querySelector('#priceRangeMin') as HTMLInputElement;
                const priceRangeMax = document.querySelector('#priceRangeMax') as HTMLInputElement;
                const priceNumMin = document.querySelector('#priceNumMin') as HTMLInputElement;
                const priceNumMax = document.querySelector('#priceNumMax') as HTMLInputElement;

                const stockRangeMin = document.querySelector('#stockRangeMin') as HTMLInputElement;
                const stockRangeMax = document.querySelector('#stockRangeMax') as HTMLInputElement;
                const stockNumMin = document.querySelector('#stockNumMin') as HTMLInputElement;
                const stockNumMax = document.querySelector('#stockNumMax') as HTMLInputElement;

                priceRangeMin.value = '0';
                priceRangeMax.value = '10000';
                priceNumMin.value = '0';
                priceNumMax.value = '10000';

                stockRangeMin.value = '0';
                stockRangeMax.value = '10000';
                stockNumMin.value = '0';
                stockNumMax.value = '10000';
            }

            if (target.closest('.goods-filter__copy')) {
                navigator.clipboard
                    .writeText(`${window.location.href}`)
                    .then(() => {
                        target.classList.add('goods-filter__btns-btn--active');
                        target.textContent = 'Скопировано';

                        setTimeout(() => {
                            target.classList.remove('goods-filter__btns-btn--active');
                            target.textContent = 'Копировать фильтры';
                        }, 1000);
                    })
                    .catch((err) => {
                        target.classList.add('goods-filter__btns-btn--error');
                        target.textContent = 'Ошибка';
                        console.log(err);

                        setTimeout(() => {
                            target.classList.remove('goods-filter__btns-btn--error');
                            target.textContent = 'Копировать фильтры';
                        }, 1000);
                    });
            }

            if (target.closest('.basket-items__item-delete')) {
                new Basket().drawItems();
            }

            if (target.closest('.description_button')) {
                const id = target.dataset.id as string;
                if (target.classList.contains('description_button--not-add')) {
                    this.basketMemory.addItemToBasket(id);
                    target.textContent = 'Добавлено';
                } else if (target.classList.contains('description_button--add')) {
                    this.basketMemory.removeItemFromBasket(id);
                    target.textContent = 'В корзину';
                }
                target.classList.toggle('description_button--add');
                target.classList.toggle('description_button--not-add');
                new BasketMemory().putDataToHeader();
            }

            if (target.closest('.info-field_img-img')) {
                const target = e.target as HTMLImageElement;
                const src = target.src;
                this.product.renderBigImg(src);
            }

            if (target.closest('.arrow-right')) {
                const id = Number(target.dataset.id);
                const img = document.querySelector('.info-field_img-img') as HTMLImageElement;
                const productObj = this.controller.getCardById(id) as ICard;
                if (img.src === productObj.img1) {
                    img.src = productObj.img2;
                } else if (img.src === productObj.img2) {
                    img.src = productObj.img1;
                }
            }

            if (target.closest('.arrow-left')) {
                const id = Number(target.dataset.id);
                const img = document.querySelector('.info-field_img-img') as HTMLImageElement;
                const productObj = this.controller.getCardById(id) as ICard;
                if (img.src === productObj.img1) {
                    img.src = productObj.img2;
                } else if (img.src === productObj.img2) {
                    img.src = productObj.img1;
                }
            }

            if (target.closest('.info-field__video')) {
                target.classList.toggle('info-field__video--active');
                target.classList.toggle('info-field__video--not-active');
                const id = Number(target.dataset.id);
                const productObj = this.controller.getCardById(id) as ICard;
                const video = document.createElement('video');
                video.src = productObj['video-link'];
                video.classList.add('info-field__video-video');
                video.loop = true;
                video.autoplay = true;
                video.muted = true;

                if (target.classList.contains('info-field__video--active')) {
                    target.textContent = 'Остановить';
                    document.querySelector('.info-field_img')?.append(video);
                }

                if (target.classList.contains('info-field__video--not-active')) {
                    target.textContent = 'Видео';
                    document.querySelector('.info-field__video-video')?.remove();
                }
            }

            if (target.closest('.basket-pay__btn')) {
                this.modal.render();
            }

            if (target.closest('.modal-overlay')) {
                this.modal.close();
            }

            if (target.closest('.modal-window__close')) {
                this.modal.close();
            }

            if (target.closest('.form-button')) {
                this.modal.submit();
            }

            if (target.closest('.buy-one-click')) {
                let isInBasket = false;
                const targetID = target.dataset.id as string;
                this.basketMemory.getAllItemsInBasket().forEach((item) => {
                    if (item.id === Number(targetID)) {
                        isInBasket = true;
                        return;
                    }
                });

                if (isInBasket) {
                    router.navigate('basket', 'Secret Shop - Корзина');
                    new Basket().drawItems();
                    this.modal.render();
                } else {
                    new BasketMemory().addItemToBasket(targetID);
                    router.navigate('basket', 'Secret Shop - Корзина');
                    new Basket().drawItems();
                    this.modal.render();
                }
            }
        });

        bodyDOM.addEventListener('keyup', (e) => {
            e.preventDefault();
            const target = e.target as HTMLInputElement;
            if (target.closest('.goods-cards__head-search')) {
                this.qString.delQueryKey('search');
                this.qString.setQueryParams(target.name, target.value);
                if (target.value === '') {
                    this.qString.delQueryKey('search');
                }
                new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
            }

            if (target.closest('.modal-window_forms')) {
                this.modal.validate();
            }

            if (target.closest('#card-number')) {
                const img = document.querySelector('.card-number-icon') as HTMLImageElement;
                if (target.value.startsWith('4')) {
                    img.src = 'https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png';
                } else if (target.value.startsWith('5')) {
                    img.src = 'https://www.mastercard.hu/content/dam/public/mastercardcom/eu/hu/images/mc-logo-52.svg';
                } else if (target.value.startsWith('2')) {
                    img.src = 'http://evgenykatyshev.ru/projects/mir-logo/mir-logo.svg';
                } else {
                    img.src =
                        'https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71';
                }
            }

            if (target.closest('#card-month')) {
                target.value = target.value.replace(/[^\d]/g, '');
                const yearInput = document.querySelector('#card-year') as HTMLInputElement;
                if (target.value.length === 2) {
                    yearInput.focus();
                }
            }

            if (target.closest('#card-year')) {
                target.value = target.value.replace(/[^\d]/g, '');
                const cvvInput = document.querySelector('#cvv') as HTMLInputElement;
                if (target.value.length === 2) {
                    cvvInput.focus();
                }
            }

            if (target.closest('#cvv')) {
                target.value = target.value.replace(/[^\d]/g, '');
            }

            if (target.closest('#card-number')) {
                let value = target.value.replace(/[^\d]/g, '').substring(0, 16);
                let arr;
                if (value !== '') {
                    arr = value.match(/.{1,4}/g) as RegExpMatchArray;
                    value = arr.join(' ');
                }

                target.value = value;
            }
        });

        bodyDOM.addEventListener('input', (e) => {
            const target = e.target as HTMLInputElement;
            const priceRangeMin = document.querySelector('#priceRangeMin') as HTMLInputElement;
            const priceRangeMax = document.querySelector('#priceRangeMax') as HTMLInputElement;
            const priceNumMin = document.querySelector('#priceNumMin') as HTMLInputElement;
            const priceNumMax = document.querySelector('#priceNumMax') as HTMLInputElement;

            const stockRangeMin = document.querySelector('#stockRangeMin') as HTMLInputElement;
            const stockRangeMax = document.querySelector('#stockRangeMax') as HTMLInputElement;
            const stockNumMin = document.querySelector('#stockNumMin') as HTMLInputElement;
            const stockNumMax = document.querySelector('#stockNumMax') as HTMLInputElement;

            if (target.closest('#priceRangeMin')) {
                this.dualSliderPrice.init(priceRangeMin, priceRangeMax);
                this.dualSliderPrice.controlMinRange(priceRangeMin, priceRangeMax, priceNumMin, priceNumMax);
                new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
            }

            if (target.closest('#priceRangeMax')) {
                this.dualSliderPrice.init(priceRangeMin, priceRangeMax);
                this.dualSliderPrice.controlMaxRange(priceRangeMin, priceRangeMax, priceNumMax, priceNumMin);
                new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
            }

            if (target.closest('#priceNumMin')) {
                this.dualSliderPrice.init(priceRangeMin, priceRangeMax);
                this.dualSliderPrice.controlMinInput(priceRangeMin, priceNumMin, priceNumMax, priceRangeMax);
                new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
            }

            if (target.closest('#priceNumMax')) {
                this.dualSliderPrice.init(priceRangeMin, priceRangeMax);
                this.dualSliderPrice.controlMaxInput(priceRangeMax, priceNumMin, priceNumMax, priceRangeMax);
                new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
            }

            //

            if (target.closest('#stockRangeMin')) {
                this.dualSliderStock.init(stockRangeMin, stockRangeMax);
                this.dualSliderStock.controlMinRange(stockRangeMin, stockRangeMax, stockNumMin, stockNumMax);
                new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
            }

            if (target.closest('#stockRangeMax')) {
                this.dualSliderStock.init(stockRangeMin, stockRangeMax);
                this.dualSliderStock.controlMaxRange(stockRangeMin, stockRangeMax, stockNumMax, stockNumMin);
                new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
            }

            if (target.closest('#stockNumMin')) {
                this.dualSliderStock.init(stockRangeMin, stockRangeMax);
                this.dualSliderStock.controlMinInput(stockRangeMin, stockNumMin, stockNumMax, stockRangeMax);
                new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
            }

            if (target.closest('#stockNumMax')) {
                this.dualSliderStock.init(stockRangeMin, stockRangeMax);
                this.dualSliderStock.controlMaxInput(stockRangeMax, stockNumMin, stockNumMax, stockRangeMax);
                new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
            }
        });
    }
}

export { AppView, Cards };
