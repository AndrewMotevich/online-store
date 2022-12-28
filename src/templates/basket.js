const basketLayout = `
<section class="basket">
<div class="basket__wrap container">
  <div class="basket-items">
    <div class="basket-items__head">
      <h2 class="basket-items__title">Корзина</h2>
      <div class="basket-items__per-page">
        <span class="basket-items__per-page-text">Кол-во:</span>
        <input class="basket-items__per-page-num" value="5" type="number" min="1" max="99">
      </div>
      <div class="basket-items__slider">
        <span class="basket-items__slider-text">Страница:</span>
        <button class="basket-items__slider basket-items__slider--prev" aria-label="предыдущая страница"></button>
        <span class="basket-items__slider-count">1</span>
        <button class="basket-items__slider basket-items__slider--next" aria-label="следующая страница"></button>
      </div>
    </div>
    <ol class="basket-items__list">
      <li class="basket-items__item">
        <div class="basket-items__item-card">
          <img class="basket-items__item-card-img" src="https://s3-alpha-sig.figma.com/img/3a12/c8cf/8c3f545a52ba44e9a96556effbcab236?Expires=1673222400&Signature=IDmTnxfmZhvsVCuycw-JcEUWUy8gi9XtPAQpQ4ZNS3kT09Qo1UDlbe4iENBtG-dX1Di1bpQwNdEwWB4FFy5HX1zlxHfquNucOHADJeUTaNQdPueFxscH6hpF8dyHFnIGW0ttVpn8rwGDmKIx3bPiO~Jf-NZWWgTrN4qJ2HbIsKrQYtzLG8N8I2xrylhvgDcdho7Rv0ERykCQtKXR4GHbmr6KnFj-YBjWRsJOtb~dDL86kwRdcz3ZDiA5oRp89mmzItIOaD893P7E0iSLVzIYwd36v3JDoPgjMi2nWmSOrGDMkSktMDDIjDDx9M1uinId3vlmZoLSYyYHftdEB7--OQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
          <!-- TODO: take from goods branch -->
          <div class="basket-items__item-card-info" style="width: 100%;height: 32px;background-color: #000;align-self: end;"></div>
        </div>
        <h3 class="basket-items__item-name">Dark Behemoth</h3>
        <div class="basket-items__item-bottom">
          <div class="basket-items__item-price">
            <span class="basket-items__item-price-text">Итог:</span>
            <span class="basket-items__item-price-num">1999 руб.</span>
          </div>
          <div class="basket-items__item-btns">
            <button class="basket-items__item-btn basket-items__item-btn--minus" aria-label="убрать">-</button>
            <span class="basket-items__item-count">1</span>
            <button class="basket-items__item-btn basket-items__item-btn--plus" aria-label="добавить">+</button>
          </div>
          <button class="basket-items__item-delete" aria-label="удалить"></button>
        </div>
      </li>
    </ol>
  </div>
  <div class="basket-pay">
    <div class="basket-pay__price">
      <span class="basket-pay__price-text">Сумма</span>
      <span class="basket-pay__price-num">1999 руб.</span>
    </div>
    <div class="basket-pay__amount">
      <span class="basket-pay__amount-text">Кол-во</span>
      <span class="basket-pay__amount-num">2</span>
    </div>
    <input type="text" class="basket-pay__promo-code" placeholder="Enter secret code">
    <button class="basket-pay__btn">Купить</button>
  </div>
</div>
</section>
`;
export default basketLayout;