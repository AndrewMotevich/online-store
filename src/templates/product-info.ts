const productTemplate = `<div class="goods-details_wrapper container">
<nav class="goods-details_navigation">
  <ul>
    <li class="navigation_path">
      <a href="#">Secret Shop</a>
    </li>
    <li class="navigation_path">
      <a href="#">Наборы</a>
    </li>
    <li class="navigation_path">
      <a href="#">PrimalBeast</a>
    </li>
    <li class="navigation_path">
      <a href="#">Dark Behemoth</a>
    </li>
  </ul>
</nav>
<section class="goods-details_info-field">
  <h2 class="visually-hidden">описание товара</h2>
  <div class="info-field_img">
    <img class="info-field_img-img" src="https://collectorsshop.ru/img/catalog/items/main_images/2022/11/625.png"
      alt="goods image">
    <div class="arrows">
      <button class="arrow-left">&#8592</button>
      <button class="arrow-right">&#8594</button>
    </div>
  </div>
  <div class="info-field_description">
    <h3>Dark Behemoth</h3>
    <span class="label label_price">1999 руб.</span>
    <button class="label description_modal-button">Купить в один клик</button>
    <div class="description_labels">
      <div class="label label_hero">
        <img class="label_hero-icon"
          src="https://collectorsshop.ru/img/catalog/heroes/mini/2022/11/123.jpeg" alt="">
          <span class="label_hero-name">Primal Beast</span>
        </div>
      <p class="label label_type">Набор</p>
      <div class="label label_rarity mythical-border">
        <div class="label_rarity-icon mythical-border">
          <div class="label_rarity-icon-dot mythical-bg"></div>
        </div>
        <span class="label_rarity-name mythical">Mythical</span>
      </div>
      <p class="label label_stock">На складе:&nbsp<span class="label_stock-count">1</span></p>
    </div>
    <h4>Описание товара</h4>
    <div class="line"></div>
    <p class="description_text">Содержит загрузочный экран и все предметы из набора Dark Behemoth для Primal
      Beast.</p>
    <button class="description_button">В корзину</button>
  </div>
</section>
</div>`;
export {productTemplate};