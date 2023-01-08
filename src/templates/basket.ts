const basketTemplate = `
<section class="basket">
    <div class="basket__wrap container">
      <div class="basket-items">
        <div class="basket-items__head">
          <h2 class="basket-items__title">Корзина</h2>
          <div class="basket-items__per-page">
            <span class="basket-items__per-page-text">Кол-во:</span>
            <input data-operator="quantity" class="basket-items__per-page-num" value="5" type="number" min="1" max="9">
          </div>
          <div class="basket-items__slider">
            <span class="basket-items__slider-text">Страница:</span>
            <button data-operator="previous" class="basket-items__slider-btn basket-items__slider-btn--prev" aria-label="предыдущая страница">
              <svg data-operator="previous" class="basket-items__slider-btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23">
                <path data-operator="previous" d="M1.0314 10.5383C0.450569 11.1291 0.45857 12.0788 1.04927 12.6596L10.6753 22.1238C11.266 22.7046 12.2157 22.6965 12.7965 22.1057C13.3774 21.5149 13.3694 20.5652 12.7787 19.9845L4.2222 11.5718L12.6357 3.0145C13.2165 2.42374 13.2085 1.47403 12.6178 0.893253C12.0271 0.31248 11.0774 0.320576 10.4966 0.911336L1.0314 10.5383ZM23.1761 9.91018L2.08832 10.0899L2.11359 13.0898L23.2014 12.9101L23.1761 9.91018Z" fill=""></path>
              </svg>
            </button>
            <span class="basket-items__slider-count">1</span>
            <button data-operator="next" class="basket-items__slider-btn basket-items__slider-btn--next" aria-label="следующая страница">
              <svg data-operator="next" class="basket-items__slider-btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23">
                <path data-operator="next" d="M23.0728 12.0147C23.6518 11.4221 23.6408 10.4724 23.0483 9.89354L13.3926 0.459892C12.8001 -0.119004 11.8504 -0.107896 11.2715 0.484703C10.6925 1.0773 10.7035 2.02699 11.296 2.60588L19.8788 10.9913L11.4921 19.5753C10.9132 20.1679 10.9242 21.1176 11.5167 21.6965C12.1092 22.2754 13.0589 22.2643 13.6378 21.6717L23.0728 12.0147ZM0.930181 12.7131L22.0173 12.4664L21.9826 9.46664L0.895503 9.7133L0.930181 12.7131Z" fill=""></path>
              </svg>
            </button>
          </div>
        </div>
        <ol class="basket-items__list">
<div style="font-size: 30px; color: white; padding: 0px;">В корзине нет товаров</div>
        </ol>
      </div>
      <div class="basket-pay">
        <div class="basket-pay__price">
          <span class="basket-pay__price-text">Сумма</span>
          <span class="basket-pay__price-num">0 руб.</span>
        </div>
        <div class="basket-pay__amount">
          <span class="basket-pay__amount-text">Кол-во</span>
          <span class="basket-pay__amount-num">0</span>
        </div>
        <input type="text" class="basket-pay__promo-code" placeholder="Enter secret code">
        <button class="basket-pay__btn">Купить</button>
      </div>
    </div>
  </section>
`;
export {basketTemplate};