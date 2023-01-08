import MainPage from "./mainPage";
import router from "./router";
import { QString } from "./qString";
import { Product } from "./product";

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
            document.querySelector('.goods-cards__head-type-btn--3')?.classList.add('goods-cards__head-type-btn--active');
        } else {
            document.querySelector('.goods-cards__list')?.classList.add('goods-cards__list--4');
            document.querySelector('.goods-cards__head-type-btn--4')?.classList.add('goods-cards__head-type-btn--active');
        }
        let result = '';
        if (this.mainPage.filterTest().length === 0) {
            document.querySelector('.goods-cards__not-found')?.classList.add('goods-cards__not-found--active');
            return;
        }
        document.querySelector('.goods-cards__not-found')?.classList.remove('goods-cards__not-found--active');
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
    product;
    constructor() {
        this.qString = new QString();
        this.product = new Product();
    }

    filterChecker() {
        const obj = this.qString.hasQuery() ? this.qString.getQueryObject() : this.qString.result;
        Object.entries(obj).forEach((item) => {
            item[1].forEach((value) => {
                const input = document.querySelector(`input[value="${value}"]`) as HTMLInputElement;
                input.checked = true;
            });
        });
    }

    typeView() {
        if (localStorage.getItem('view-column') === '3') {
            document.querySelector('.goods-cards__list')?.classList.add('goods-cards__list--3');
            document.querySelector('.goods-cards__head-type-btn--3')?.classList.add('goods-cards__head-type-btn--active');
        } else {
            document.querySelector('.goods-cards__list')?.classList.add('goods-cards__list--4');
            document.querySelector('.goods-cards__head-type-btn--4')?.classList.add('goods-cards__head-type-btn--active');
        }
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.qString.resetQueryString();
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
            this.qString.resetQueryString();
            router.navigate('home', 'Secret Shop - Главная');
            localStorage.setItem('lastPath', 'home');
            new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
            this.typeView();
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
                const id = Number(target.dataset.id);
                this.product.render(id);
            }

            if(target.closest('.goods-filter-input')) {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                    target.checked = true;
                    this.qString.setQueryParams(target.name, target.value);
                } else {
                    target.checked = false;
                    this.qString.delQueryParams(target.name, target.value);
                }
                new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
            }

            if (target.closest('.goods-filter-radio__input')) {
                const target = e.target as HTMLInputElement;
                this.qString.delQueryKey('sort');
                this.qString.setQueryParams(target.name, target.value);
                new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
            }

            if (target.closest('.goods-cards__head-type-btn--4')) {         
                document.querySelector('.goods-cards__head-type-btn--4')?.classList.add('goods-cards__head-type-btn--active');
                document.querySelector('.goods-cards__head-type-btn--3')?.classList.remove('goods-cards__head-type-btn--active');

                document.querySelector('.goods-cards__list')?.classList.add('goods-cards__list--4');
                document.querySelector('.goods-cards__list')?.classList.remove('goods-cards__list--3');

                localStorage.setItem('view-column', '4');
            }

            if (target.closest('.goods-cards__head-type-btn--3')) {
                document.querySelector('.goods-cards__head-type-btn--3')?.classList.add('goods-cards__head-type-btn--active');
                document.querySelector('.goods-cards__head-type-btn--4')?.classList.remove('goods-cards__head-type-btn--active');

                document.querySelector('.goods-cards__list')?.classList.add('goods-cards__list--3');
                document.querySelector('.goods-cards__list')?.classList.remove('goods-cards__list--4');

                localStorage.setItem('view-column', '3');
            }

            if (target.closest('.goods-filter__reset')) {
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
            }

            if (target.closest('.goods-filter__copy')) {
                navigator.clipboard.writeText(`${window.location.href}`)
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
        });

        router.options.appDOM.addEventListener('keyup', (e) => {
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
        });
    }
}


export {AppView, Cards};