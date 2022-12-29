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
            <button class="basket-items__slider-btn basket-items__slider-btn--prev" aria-label="предыдущая страница">
              <svg class="basket-items__slider-btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23">
                <path d="M1.0314 10.5383C0.450569 11.1291 0.45857 12.0788 1.04927 12.6596L10.6753 22.1238C11.266 22.7046 12.2157 22.6965 12.7965 22.1057C13.3774 21.5149 13.3694 20.5652 12.7787 19.9845L4.2222 11.5718L12.6357 3.0145C13.2165 2.42374 13.2085 1.47403 12.6178 0.893253C12.0271 0.31248 11.0774 0.320576 10.4966 0.911336L1.0314 10.5383ZM23.1761 9.91018L2.08832 10.0899L2.11359 13.0898L23.2014 12.9101L23.1761 9.91018Z" fill=""></path>
              </svg>
            </button>
            <span class="basket-items__slider-count">1</span>
            <button class="basket-items__slider-btn basket-items__slider-btn--next" aria-label="следующая страница">
              <svg class="basket-items__slider-btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23">
                <path d="M23.0728 12.0147C23.6518 11.4221 23.6408 10.4724 23.0483 9.89354L13.3926 0.459892C12.8001 -0.119004 11.8504 -0.107896 11.2715 0.484703C10.6925 1.0773 10.7035 2.02699 11.296 2.60588L19.8788 10.9913L11.4921 19.5753C10.9132 20.1679 10.9242 21.1176 11.5167 21.6965C12.1092 22.2754 13.0589 22.2643 13.6378 21.6717L23.0728 12.0147ZM0.930181 12.7131L22.0173 12.4664L21.9826 9.46664L0.895503 9.7133L0.930181 12.7131Z" fill=""></path>
              </svg>
            </button>
          </div>
        </div>
        <ol class="basket-items__list">
          <li class="basket-items__item">
            <div class="basket-items__item-card">
              <img class="basket-items__item-card-img" src="https://s3-alpha-sig.figma.com/img/3a12/c8cf/8c3f545a52ba44e9a96556effbcab236?Expires=1673222400&Signature=IDmTnxfmZhvsVCuycw-JcEUWUy8gi9XtPAQpQ4ZNS3kT09Qo1UDlbe4iENBtG-dX1Di1bpQwNdEwWB4FFy5HX1zlxHfquNucOHADJeUTaNQdPueFxscH6hpF8dyHFnIGW0ttVpn8rwGDmKIx3bPiO~Jf-NZWWgTrN4qJ2HbIsKrQYtzLG8N8I2xrylhvgDcdho7Rv0ERykCQtKXR4GHbmr6KnFj-YBjWRsJOtb~dDL86kwRdcz3ZDiA5oRp89mmzItIOaD893P7E0iSLVzIYwd36v3JDoPgjMi2nWmSOrGDMkSktMDDIjDDx9M1uinId3vlmZoLSYyYHftdEB7--OQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
              <div class="basket-items__item-card-hero hero">
                <img
                  src="https://s3-alpha-sig.figma.com/img/e2c1/7f50/bb040d2c866e3bc6b7c2958854abdc43?Expires=1673222400&Signature=fyaWCoo0grTmQyPbIyk~f3UWoYJ7kibcwrYPkIrRrVi4tu1k2xczyiL8uaCvnxmwcUt7s69-zWphqdEEG2sdFgvqg60KISNJz3tS-6X4uzZorXAbbjcrnYJ1zS5pjZ3i0kv6bHCc1lIzv0u-TxyKAqlALNAqiHfeErlSPaFlNu83TPBSRFBXCEQiT5WjQLP3YJmEKVmsE4mpNKClDwd-k0vaLw5RcsATKKS2kgF1s6rOmXn1wVESUKT0XyyTW5tuSZSvP60kTjj8bE6Y~jcqPv77DDbUe62xNqToCP4ZAzwagr7A0TgP3gGkQzfNsZ1c55HC30LadIu~-AeqeIAaGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="" class="hero__avatar">
                <span class="basket-items__item-card-hero-name hero__name">Primal Beast</span>
                <span class="basket-items__item-card-hero-rareness hero__rareness mythical">Mythical</span>
              </div>
            </div>
            <h3 class="basket-items__item-name">Dark Behemoth</h3>
            <div class="basket-items__item-bottom">
              <div class="basket-items__item-price">
                <span class="basket-items__item-price-text">Итог:</span>
                <span class="basket-items__item-price-num">1999 руб.</span>
              </div>
              <div class="basket-items__item-btns">
                <button class="basket-items__item-btn basket-items__item-btn--minus" aria-label="убрать">
                  <svg width="32" height="32" viewBox="0 0 32 32" class="basket-items__item-btn-icon">
                    <rect x="10" y="15" width="12" height="2"></rect>
                  </svg>
                </button>
                <span class="basket-items__item-count">1</span>
                <button class="basket-items__item-btn basket-items__item-btn--plus" aria-label="добавить">
                  <svg width="32" height="32" viewBox="0 0 32 32" class="basket-items__item-btn-icon">
                    <rect x="10" y="15" width="12" height="2"></rect>
                    <rect x="17" y="10" width="12" height="2" transform="rotate(90 17 10)"></rect>
                  </svg>
                </button>
              </div>
              <button class="basket-items__item-delete" aria-label="удалить">
                <svg width="30" height="30" viewBox="0 0 30 30" class="basket-items__item-delete-icon">
                  <path d="M21.5 8.875H17.75L17.4563 8.36368C17.394 8.25436 17.2982 8.16241 17.1795 8.09816C17.0608 8.03391 16.9239 7.99992 16.7844 8H13.2125C13.0732 7.99954 12.9367 8.0334 12.8184 8.09772C12.7001 8.16204 12.6049 8.25421 12.5437 8.36368L12.25 8.875H8.5C8.36739 8.875 8.24021 8.9211 8.14645 9.00315C8.05268 9.08519 8 9.19647 8 9.3125V10.1875C8 10.3035 8.05268 10.4148 8.14645 10.4969C8.24021 10.5789 8.36739 10.625 8.5 10.625H21.5C21.6326 10.625 21.7598 10.5789 21.8536 10.4969C21.9473 10.4148 22 10.3035 22 10.1875V9.3125C22 9.19647 21.9473 9.08519 21.8536 9.00315C21.7598 8.9211 21.6326 8.875 21.5 8.875ZM9.6625 20.7695C9.68635 21.1027 9.85443 21.4155 10.1325 21.6441C10.4106 21.8727 10.7778 22 11.1594 22H18.8406C19.2222 22 19.5894 21.8727 19.8675 21.6441C20.1456 21.4155 20.3137 21.1027 20.3375 20.7695L21 11.5H9L9.6625 20.7695Z" fill=""></path>
                </svg>
              </button>
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