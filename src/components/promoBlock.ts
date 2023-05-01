import { BasketMemory } from "./basketLogic";

function checkPromo(value = '') {
    const basketPay = document.querySelector('.basket-pay') as HTMLElement;
    const promoBlock = document.querySelector('.basket-pay__promo-code') as HTMLInputElement;
    let addButton = '';

    switch (value.toLocaleLowerCase()) {
        case 'roshan':
            if ((document.querySelector('.basket-pay__btn-add-span') as HTMLElement)?.innerText === 'Dota2 -10%') {
                (document.querySelector('.basket-pay__btn-add-span') as HTMLElement).innerText = 'Roshan -10%';
            }
            else if ((document.querySelector('.basket-pay__btn-add-span') as HTMLElement)?.innerText === 'Roshan -10%'){
              break;
            }
            else {
                addButton = `
          <span class="basket-pay__btn-add-span" style="align-self: center; font-size: 14px; color: white; grid-row: 7; grid-column: 1;">Roshan -10%</span>
          <button class="basket-pay__btn-add">Добавить</button>`;
                basketPay.innerHTML += addButton;
                addPromo();
            }
            break;
        case 'dota2':
            if ((document.querySelector('.basket-pay__btn-add-span') as HTMLElement)?.innerText === 'Roshan -10%') {
                (document.querySelector('.basket-pay__btn-add-span') as HTMLElement).innerText = 'Dota2 -10%';
            }
            else if ((document.querySelector('.basket-pay__btn-add-span') as HTMLElement)?.innerText === 'Dota2 -10%'){
              break;
            }
            else {
                addButton = `
          <span class="basket-pay__btn-add-span" style="align-self: center; font-size: 14px; color: white; grid-row: 7; grid-column: 1;">Dota2 -10%</span>
          <button class="basket-pay__btn-add">Добавить</button>`;
                basketPay.innerHTML += addButton;
                addPromo();
            }
            break;
          }


    //recursion
    promoBlock.addEventListener('keyup', () => {
        const promoBlock = document.querySelector('.basket-pay__promo-code') as HTMLInputElement;
        checkPromo(promoBlock.value);
    });
}

function addPromo() {
    const remove1Button = `<span class="basket-pay__btn-remove1-span" style="align-self: center; font-size: 14px; color: white; grid-row: 3; grid-column: 1;">Roshan -10%</span>
  <button class="basket-pay__btn-remove1">Удалить</button>`;
    const remove2Button = `<span class="basket-pay__btn-remove2-span" style="align-self: center; font-size: 14px; color: white; grid-row: 4; grid-column: 1;">Dota2 -10%</span>
  <button class="basket-pay__btn-remove2">Удалить</button>`;
    const basketPay = document.querySelector('.basket-pay') as HTMLElement;


    basketPay.addEventListener('click', addRemove);
    function addRemove (event: Event) {
        if ((event.target as HTMLElement).className === 'basket-pay__btn-add') {
          if ((document.querySelector('.basket-pay__btn-add-span') as HTMLElement)?.innerText === 'Roshan -10%') {
            if ((document.querySelector('.basket-pay__btn-remove1') as HTMLElement)!= null){
              return;
            } else {
              basketPay.innerHTML += remove1Button;
              resolveSum();
              deletePromo();
              checkPromo();
            }
          }
          else if ((document.querySelector('.basket-pay__btn-add-span') as HTMLElement)?.innerText === 'Dota2 -10%') {
            if ((document.querySelector('.basket-pay__btn-remove2') as HTMLElement) != null){
              return;
            }
            else {
              basketPay.innerHTML += remove2Button;
              resolveSum();
              deletePromo();
              checkPromo();
            }
         }
        }
    }

}

function resolveSum(discont = 10){
  const basketTotalPrice = document.querySelector('.basket-pay__price-num') as HTMLElement;
  const currentPrice = new BasketMemory().getAllQntAndSum()[0];
  let newPrice = currentPrice - (currentPrice * discont / 100);
  const basketPay = document.querySelector('.basket-pay') as HTMLElement;
  const newPriceHTML = document.querySelector('.basket-pay__price-num2') as HTMLElement;
  if (newPriceHTML != null){
      const newDiscont = Number(newPriceHTML.dataset.discont) + discont;
      newPrice = currentPrice - (currentPrice * newDiscont / 100);
      (document.querySelector('.basket-pay__price-num2') as HTMLElement).innerText = `${newPrice} руб.`;
      newPriceHTML.dataset.discont = newDiscont.toString();
  }
  else {
    basketTotalPrice.style.textDecoration = "line-through";
    const newPriceBlock = `<span data-discont="${discont}" class="basket-pay__price-num2">${newPrice} руб.</span>`;
    basketPay.innerHTML += newPriceBlock;
  }
}

function deletePromo(){
  const basketPay = document.querySelector('.basket-pay') as HTMLElement;
  const newPriceHTML = document.querySelector('.basket-pay__price-num2') as HTMLElement;
  const basketTotalPrice = document.querySelector('.basket-pay__price-num') as HTMLElement;

    basketPay.addEventListener('click', remove);
    function remove (event: Event) {
      if ((event.target as HTMLElement).className === 'basket-pay__btn-remove1'){
        newPriceHTML.dataset.discont = '0';
        if ((document.querySelector('.basket-pay__btn-remove2') as HTMLElement) != null){
          resolveSum();
        }
        else {
          newPriceHTML?.remove();
          basketTotalPrice.style.textDecoration = "none";
        }
        (document.querySelector('.basket-pay__btn-remove1') as HTMLElement)?.remove();
        (document.querySelector('.basket-pay__btn-remove1-span') as HTMLElement)?.remove();
      }
      else if ((event.target as HTMLElement).className === 'basket-pay__btn-remove2'){
        newPriceHTML.dataset.discont = '0';
        if ((document.querySelector('.basket-pay__btn-remove1') as HTMLElement) != null){
          resolveSum();
        }
        else {
          newPriceHTML?.remove();
          basketTotalPrice.style.textDecoration = "none";
        }
        (document.querySelector('.basket-pay__btn-remove2') as HTMLElement)?.remove();
        (document.querySelector('.basket-pay__btn-remove2-span') as HTMLElement)?.remove();
      }
    }
}
export { checkPromo };
