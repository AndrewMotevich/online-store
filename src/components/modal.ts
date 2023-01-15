import { modalWindowTemplate } from "../templates/modal-window";
import router from "./router";
import { BasketMemory, Basket } from "./basketLogic";

class Modal{
    form;
    modalDOM;
    basket;
    basketMemory;
    constructor() {
        this.form = modalWindowTemplate;
        this.modalDOM = document.querySelector('.modal-wrap') as Element;
        this.basket = new Basket();
        this.basketMemory = new BasketMemory();

    }

    render() {
        if (this.basketMemory.getAllItemsInBasket().length === 0) {
            return;
        }
        this.modalDOM.classList.add('modal-wrap--active');
        this.modalDOM.innerHTML = this.form;
    }

    close(){
        this.modalDOM.classList.remove('modal-wrap--active');
        this.modalDOM.innerHTML = '';
    }

    checkName(value: string) {  
        const nameArr = value.replace(/\s{2,}/g, ' ').trim().split(' ');
        let bool = false;
        
        if (nameArr.length >= 2) {
            if (nameArr.filter((x) => x.length >= 3).length === nameArr.length) {
                bool = true;
            }
        }

        return bool;
    }

    checkPhone(value: string) {
        let phoneValue = value;

        if (phoneValue[0] !== '+') {
            return false;
        }

        phoneValue = phoneValue.slice(1);
        
        if (isNaN(+phoneValue)) {
            return false;
        }

        if (phoneValue.length >= 9) {
            return true;
        }
        return false;
    }

    checkAddress(value: string) {
        const addressValue = value.replace(/\s{2,}/g, ' ').trim().split(' ');
        let bool = false;

        if (addressValue.length >= 3) {
            if (addressValue.filter((x) => x.length >= 5).length === addressValue.length) {
                bool = true;
            }
        }

        return bool;
    }

    checkEmail(value: string) {
        const emailValue = value;

        return /^(.+)@(.+)\.(.+)$/.test(emailValue);
    }

    checkCardNumber(value: string) {
        const cardNUmberValue = value.replace(/ /g, '');
        let bool = false;
        
        if (cardNUmberValue.length >= 16) {
            if (!isNaN(+cardNUmberValue)) {
                bool = true;
            }
        }

        return bool;
    }

    checkCardMonth(value: string) {
        const cardMonthValue = value;
        let bool = false;
        
        if (cardMonthValue.length >= 2) {
            if (!isNaN(+cardMonthValue)) {
                if (12 >= +cardMonthValue && +cardMonthValue > 0) {
                    bool = true;
                }
            }
        }

        return bool;
    }

    checkCardYear(value: string) {
        const cardYearValue = value;
        let bool = false;
        
        if (cardYearValue.length >= 2) {
            if (!isNaN(+cardYearValue)) {
                if (99 >= +cardYearValue && +cardYearValue > 0) {
                    bool = true;
                }
            }
        }

        return bool;
    }

    checkCardCVV(value: string) {
        const cardCVVValue = value;
        let bool = false;

        if (cardCVVValue.length === 3) {
            if (!isNaN(+cardCVVValue)) {
                if (+cardCVVValue >= 0) {
                    bool = true;
                }
            }
        }

        return bool;
    }

    validate(){
        const nameInput = document.querySelector('#name') as HTMLInputElement;
        const phoneInput = document.querySelector('#phone') as HTMLInputElement;
        const addressInput = document.querySelector('#address') as HTMLInputElement;
        const emailInput = document.querySelector('#email') as HTMLInputElement;

        const cardNumber = document.querySelector('#card-number') as HTMLInputElement;
        const dateInput = document.querySelector('.card_date');
        const cardMonth = document.querySelector('#card-month') as HTMLInputElement;
        const cardYear = document.querySelector('#card-year') as HTMLInputElement;
        const cardCVV = document.querySelector('#cvv') as HTMLInputElement;
        const arrBool = [false, false, false, false, false, false, false, false];

        if (!this.checkName(nameInput.value)) {
            nameInput?.classList.add('form-input--wrong');
            arrBool[0] = false;
        } else {
            nameInput?.classList.remove('form-input--wrong');
            arrBool[0] = true;
        }

        if (!this.checkPhone(phoneInput.value)) {
            phoneInput?.classList.add('form-input--wrong');
            arrBool[1] = false;
        } else {
            phoneInput?.classList.remove('form-input--wrong');
            arrBool[1] = true;
        }

        if (!this.checkAddress(addressInput.value)) {
            addressInput?.classList.add('form-input--wrong');
            arrBool[2] = false;
        } else {
            addressInput?.classList.remove('form-input--wrong');
            arrBool[2] = true;
        }

        if (!this.checkEmail(emailInput.value)) {
            emailInput?.classList.add('form-input--wrong');
            arrBool[3] = false;
        } else {
            emailInput?.classList.remove('form-input--wrong');
            arrBool[3] = true;
        }

        if (!this.checkCardNumber(cardNumber.value)) {
            cardNumber?.classList.add('form-input--wrong');
            arrBool[4] = false;
        } else {
            cardNumber?.classList.remove('form-input--wrong');
            arrBool[4] = true;
        }

        if (!this.checkCardYear(cardYear.value)) {
            dateInput?.classList.add('form-input--wrong');
            arrBool[6] = false;
        } else {
            dateInput?.classList.remove('form-input--wrong');
            arrBool[6] = true;
        }

        if (!this.checkCardMonth(cardMonth.value)) {
            dateInput?.classList.add('form-input--wrong');
            console.log('test');
            
            arrBool[5] = false;
        } else {
            dateInput?.classList.remove('form-input--wrong');
            arrBool[5] = true;
        }

        if (!this.checkCardCVV(cardCVV.value)) {
            cardCVV?.classList.add('form-input--wrong');
            arrBool[7] = false;
        } else {
            cardCVV?.classList.remove('form-input--wrong');
            arrBool[7] = true;
        }
        
        return arrBool.every((x) => x);
    }

    submit() {
        if (!this.validate()) {
            return;
        }

        const modalDOM = document.querySelector('.modal-window') as HTMLElement;
        const textEl = `
            <p class="modal-window__final">Спасибо за заказ!</p>
        `;
        modalDOM.style.padding = '0';
        modalDOM.innerHTML = `${textEl}`;

        const modalWrap = document.querySelector('.modal-wrap') as HTMLElement;

        setTimeout(() => {
            modalWrap.classList.remove('modal-wrap--active');
            modalWrap.innerHTML = '';
            this.basketMemory.removeAllItems();
            this.basket.drawItems();
            this.basketMemory.putDataToHeader();
            router.navigate('home', 'Secret Shop - Главная');
        }, 3000);
    }
}

export {Modal};