const cardsTemplates = `
<div class="goods">
  <div class="goods__wrap container">
    <aside class="goods-filter">
      <ul class="goods-filter__list">
        <li class="goods-filter__item">
          <button class="goods-filter__btn">
            <span class="goods-filter__btn-text">Цена</span>
            <span class="goods-filter__btn-symbol">-</span>
          </button>
          <ul class="goods-filter__sublist">
            <li class="goods-filter__subitem">
              <!-- TODO: replace with 2 digits -->
              <input class="goods-filter__range" type="range" id="price">
            </li>
          </ul>
        </li>
        <li class="goods-filter__item">
          <button class="goods-filter__btn">
            <span class="goods-filter__btn-text">В наличии</span>
            <span class="goods-filter__btn-symbol">-</span>
          </button>
          <ul class="goods-filter__sublist">
            <li class="goods-filter__subitem">
              <!-- TODO: replace with 2 digits -->
              <input class="goods-filter__range" type="range" id="stock">
            </li>
          </ul>
        </li>
        <li class="goods-filter__item">
          <button class="goods-filter__btn">
            <span class="goods-filter__btn-text">Сортировка</span>
            <span class="goods-filter__btn-symbol">-</span>
          </button>
          <ul class="goods-filter__sublist">
            <li class="goods-filter__subitem">
              <button class="goods-filter__subitem-btn">По убыванию цены</button>
            </li>
            <li class="goods-filter__subitem">
              <button class="goods-filter__subitem-btn">По возрастанию цены</button>
            </li>
          </ul>
        </li>
        <li class="goods-filter__item">
          <button class="goods-filter__btn">
            <span class="goods-filter__btn-text">Тип</span>
            <span class="goods-filter__btn-symbol">-</span>
          </button>
          <ul class="goods-filter__sublist">
            <li class="goods-filter__subitem">
              <div class="goods-filter-checkbox">
                <label class="goods-filter-checkbox__label">Набор
                  <input type="checkbox"  class="goods-filter-checkbox__input">
                  <span class="goods-filter-checkbox__checkmark"></span>
                </label>
              </div>
            </li>
            <li class="goods-filter__subitem">
              <div class="goods-filter-checkbox">
                <label class="goods-filter-checkbox__label">Предмет
                  <input type="checkbox"  class="goods-filter-checkbox__input">
                  <span class="goods-filter-checkbox__checkmark"></span>
                </label>
              </div>
            </li>
          </ul>
        </li>
        <li class="goods-filter__item">
          <button class="goods-filter__btn">
            <span class="goods-filter__btn-text">Редкость</span>
            <span class="goods-filter__btn-symbol">-</span>
          </button>
          <ul class="goods-filter__sublist">
            <li class="goods-filter__subitem">
              <div class="goods-filter-checkbox">
                <label class="goods-filter-checkbox__label">Common
                  <input type="checkbox"  class="goods-filter-checkbox__input">
                  <span class="goods-filter-checkbox__checkmark"></span>
                </label>
              </div>
            </li>
            <li class="goods-filter__subitem">
              <div class="goods-filter-checkbox">
                <label class="goods-filter-checkbox__label">Uncommon
                  <input type="checkbox"  class="goods-filter-checkbox__input">
                  <span class="goods-filter-checkbox__checkmark"></span>
                </label>
              </div>
            </li>
            <li class="goods-filter__subitem">
              <div class="goods-filter-checkbox">
                <label class="goods-filter-checkbox__label">Mythical
                  <input type="checkbox"  class="goods-filter-checkbox__input">
                  <span class="goods-filter-checkbox__checkmark"></span>
                </label>
              </div>
            </li>
            <li class="goods-filter__subitem">
              <div class="goods-filter-checkbox">
                <label class="goods-filter-checkbox__label">Rare
                  <input type="checkbox"  class="goods-filter-checkbox__input">
                  <span class="goods-filter-checkbox__checkmark"></span>
                </label>
              </div>
            </li>
            <li class="goods-filter__subitem">
              <div class="goods-filter-checkbox">
                <label class="goods-filter-checkbox__label">Immortal
                  <input type="checkbox"  class="goods-filter-checkbox__input">
                  <span class="goods-filter-checkbox__checkmark"></span>
                </label>
              </div>
            </li>
            <li class="goods-filter__subitem">
              <div class="goods-filter-checkbox">
                <label class="goods-filter-checkbox__label">Legendary
                  <input type="checkbox"  class="goods-filter-checkbox__input">
                  <span class="goods-filter-checkbox__checkmark"></span>
                </label>
              </div>
            </li>
            <li class="goods-filter__subitem">
              <div class="goods-filter-checkbox">
                <label class="goods-filter-checkbox__label">Arcana
                  <input type="checkbox"  class="goods-filter-checkbox__input">
                  <span class="goods-filter-checkbox__checkmark"></span>
                </label>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
    <section class="goods-cards">
      <h2 class="visually-hidden">Товары</h2>
      <div class="goods-cards__head">
        <div class="goods-cards__head-find">
          <span class="goods-cards__head-find-text">Нашлось:</span>
          <span class="goods-cards__head-find-num">42</span>
        </div>
        <input type="search" class="goods-cards__head-search" placeholder="Поиск по названию">
        <div class="goods-cards__head-type">
          <span class="goods-cards__head-type-text">Вид</span>
          <button class="goods-cards__head-type-btn goods-cards__head-type-btn--4" aria-label="4 на 4">
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
          </button>
          <button class="goods-cards__head-type-btn goods-cards__head-type-btn--3" aria-label="3 на 3">
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
            <span class="goods-cards__head-type-btn-symbol"></span>
          </button>
        </div>
      </div>
      <ul class="goods-cards__list">
        <li class="goods-cards__item card">
          <div class="card__hero hero">
            <img
              src="https://s3-alpha-sig.figma.com/img/e2c1/7f50/bb040d2c866e3bc6b7c2958854abdc43?Expires=1673222400&Signature=fyaWCoo0grTmQyPbIyk~f3UWoYJ7kibcwrYPkIrRrVi4tu1k2xczyiL8uaCvnxmwcUt7s69-zWphqdEEG2sdFgvqg60KISNJz3tS-6X4uzZorXAbbjcrnYJ1zS5pjZ3i0kv6bHCc1lIzv0u-TxyKAqlALNAqiHfeErlSPaFlNu83TPBSRFBXCEQiT5WjQLP3YJmEKVmsE4mpNKClDwd-k0vaLw5RcsATKKS2kgF1s6rOmXn1wVESUKT0XyyTW5tuSZSvP60kTjj8bE6Y~jcqPv77DDbUe62xNqToCP4ZAzwagr7A0TgP3gGkQzfNsZ1c55HC30LadIu~-AeqeIAaGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="" class="hero__avatar">
            <span class="hero__name">Primal Beast</span>
            <span class="hero__rareness mythical">Mythical</span>
          </div>
          <div class="card__price">
            <span class="card__price-val">1299</span>
            <span class="card__price-cur">руб</span>
          </div>
          <h3 class="card__name">Dark Behemoth</h3>
          <button class="card__buy">В&nbsp;корзину</button>
        </li>
        <li class="goods-cards__item card">
          <div class="card__hero hero">
            <img
              src="https://s3-alpha-sig.figma.com/img/e2c1/7f50/bb040d2c866e3bc6b7c2958854abdc43?Expires=1673222400&Signature=fyaWCoo0grTmQyPbIyk~f3UWoYJ7kibcwrYPkIrRrVi4tu1k2xczyiL8uaCvnxmwcUt7s69-zWphqdEEG2sdFgvqg60KISNJz3tS-6X4uzZorXAbbjcrnYJ1zS5pjZ3i0kv6bHCc1lIzv0u-TxyKAqlALNAqiHfeErlSPaFlNu83TPBSRFBXCEQiT5WjQLP3YJmEKVmsE4mpNKClDwd-k0vaLw5RcsATKKS2kgF1s6rOmXn1wVESUKT0XyyTW5tuSZSvP60kTjj8bE6Y~jcqPv77DDbUe62xNqToCP4ZAzwagr7A0TgP3gGkQzfNsZ1c55HC30LadIu~-AeqeIAaGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="" class="hero__avatar">
            <span class="hero__name">Primal Beast</span>
            <span class="hero__rareness mythical">Mythical</span>
          </div>
          <div class="card__price">
            <span class="card__price-val">1299</span>
            <span class="card__price-cur">руб</span>
          </div>
          <h3 class="card__name">Dark Behemoth</h3>
          <button class="card__buy">В&nbsp;корзину</button>
        </li>
        <li class="goods-cards__item card">
          <div class="card__hero hero">
            <img
              src="https://s3-alpha-sig.figma.com/img/e2c1/7f50/bb040d2c866e3bc6b7c2958854abdc43?Expires=1673222400&Signature=fyaWCoo0grTmQyPbIyk~f3UWoYJ7kibcwrYPkIrRrVi4tu1k2xczyiL8uaCvnxmwcUt7s69-zWphqdEEG2sdFgvqg60KISNJz3tS-6X4uzZorXAbbjcrnYJ1zS5pjZ3i0kv6bHCc1lIzv0u-TxyKAqlALNAqiHfeErlSPaFlNu83TPBSRFBXCEQiT5WjQLP3YJmEKVmsE4mpNKClDwd-k0vaLw5RcsATKKS2kgF1s6rOmXn1wVESUKT0XyyTW5tuSZSvP60kTjj8bE6Y~jcqPv77DDbUe62xNqToCP4ZAzwagr7A0TgP3gGkQzfNsZ1c55HC30LadIu~-AeqeIAaGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="" class="hero__avatar">
            <span class="hero__name">Primal Beast</span>
            <span class="hero__rareness mythical">Mythical</span>
          </div>
          <div class="card__price">
            <span class="card__price-val">1299</span>
            <span class="card__price-cur">руб</span>
          </div>
          <h3 class="card__name">Dark Behemoth</h3>
          <button class="card__buy">В&nbsp;корзину</button>
        </li>
        <li class="goods-cards__item card">
          <div class="card__hero hero">
            <img
              src="https://s3-alpha-sig.figma.com/img/e2c1/7f50/bb040d2c866e3bc6b7c2958854abdc43?Expires=1673222400&Signature=fyaWCoo0grTmQyPbIyk~f3UWoYJ7kibcwrYPkIrRrVi4tu1k2xczyiL8uaCvnxmwcUt7s69-zWphqdEEG2sdFgvqg60KISNJz3tS-6X4uzZorXAbbjcrnYJ1zS5pjZ3i0kv6bHCc1lIzv0u-TxyKAqlALNAqiHfeErlSPaFlNu83TPBSRFBXCEQiT5WjQLP3YJmEKVmsE4mpNKClDwd-k0vaLw5RcsATKKS2kgF1s6rOmXn1wVESUKT0XyyTW5tuSZSvP60kTjj8bE6Y~jcqPv77DDbUe62xNqToCP4ZAzwagr7A0TgP3gGkQzfNsZ1c55HC30LadIu~-AeqeIAaGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="" class="hero__avatar">
            <span class="hero__name">Primal Beast</span>
            <span class="hero__rareness mythical">Mythical</span>
          </div>
          <div class="card__price">
            <span class="card__price-val">1299</span>
            <span class="card__price-cur">руб</span>
          </div>
          <h3 class="card__name">Dark Behemoth</h3>
          <button class="card__buy">В&nbsp;корзину</button>
        </li>
        <li class="goods-cards__item card">
          <div class="card__hero hero">
            <img
              src="https://s3-alpha-sig.figma.com/img/e2c1/7f50/bb040d2c866e3bc6b7c2958854abdc43?Expires=1673222400&Signature=fyaWCoo0grTmQyPbIyk~f3UWoYJ7kibcwrYPkIrRrVi4tu1k2xczyiL8uaCvnxmwcUt7s69-zWphqdEEG2sdFgvqg60KISNJz3tS-6X4uzZorXAbbjcrnYJ1zS5pjZ3i0kv6bHCc1lIzv0u-TxyKAqlALNAqiHfeErlSPaFlNu83TPBSRFBXCEQiT5WjQLP3YJmEKVmsE4mpNKClDwd-k0vaLw5RcsATKKS2kgF1s6rOmXn1wVESUKT0XyyTW5tuSZSvP60kTjj8bE6Y~jcqPv77DDbUe62xNqToCP4ZAzwagr7A0TgP3gGkQzfNsZ1c55HC30LadIu~-AeqeIAaGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="" class="hero__avatar">
            <span class="hero__name">Primal Beast</span>
            <span class="hero__rareness mythical">Mythical</span>
          </div>
          <div class="card__price">
            <span class="card__price-val">1299</span>
            <span class="card__price-cur">руб</span>
          </div>
          <h3 class="card__name">Dark Behemoth</h3>
          <button class="card__buy">В&nbsp;корзину</button>
        </li>
        <li class="goods-cards__item card">
          <div class="card__hero hero">
            <img
              src="https://s3-alpha-sig.figma.com/img/e2c1/7f50/bb040d2c866e3bc6b7c2958854abdc43?Expires=1673222400&Signature=fyaWCoo0grTmQyPbIyk~f3UWoYJ7kibcwrYPkIrRrVi4tu1k2xczyiL8uaCvnxmwcUt7s69-zWphqdEEG2sdFgvqg60KISNJz3tS-6X4uzZorXAbbjcrnYJ1zS5pjZ3i0kv6bHCc1lIzv0u-TxyKAqlALNAqiHfeErlSPaFlNu83TPBSRFBXCEQiT5WjQLP3YJmEKVmsE4mpNKClDwd-k0vaLw5RcsATKKS2kgF1s6rOmXn1wVESUKT0XyyTW5tuSZSvP60kTjj8bE6Y~jcqPv77DDbUe62xNqToCP4ZAzwagr7A0TgP3gGkQzfNsZ1c55HC30LadIu~-AeqeIAaGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="" class="hero__avatar">
            <span class="hero__name">Primal Beast</span>
            <span class="hero__rareness mythical">Mythical</span>
          </div>
          <div class="card__price">
            <span class="card__price-val">1299</span>
            <span class="card__price-cur">руб</span>
          </div>
          <h3 class="card__name">Dark Behemoth</h3>
          <button class="card__buy">В&nbsp;корзину</button>
        </li>
        <li class="goods-cards__item card">
          <div class="card__hero hero">
            <img
              src="https://s3-alpha-sig.figma.com/img/e2c1/7f50/bb040d2c866e3bc6b7c2958854abdc43?Expires=1673222400&Signature=fyaWCoo0grTmQyPbIyk~f3UWoYJ7kibcwrYPkIrRrVi4tu1k2xczyiL8uaCvnxmwcUt7s69-zWphqdEEG2sdFgvqg60KISNJz3tS-6X4uzZorXAbbjcrnYJ1zS5pjZ3i0kv6bHCc1lIzv0u-TxyKAqlALNAqiHfeErlSPaFlNu83TPBSRFBXCEQiT5WjQLP3YJmEKVmsE4mpNKClDwd-k0vaLw5RcsATKKS2kgF1s6rOmXn1wVESUKT0XyyTW5tuSZSvP60kTjj8bE6Y~jcqPv77DDbUe62xNqToCP4ZAzwagr7A0TgP3gGkQzfNsZ1c55HC30LadIu~-AeqeIAaGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="" class="hero__avatar">
            <span class="hero__name">Primal Beast</span>
            <span class="hero__rareness mythical">Mythical</span>
          </div>
          <div class="card__price">
            <span class="card__price-val">1299</span>
            <span class="card__price-cur">руб</span>
          </div>
          <h3 class="card__name">Dark Behemoth</h3>
          <button class="card__buy">В&nbsp;корзину</button>
        </li>
        <li class="goods-cards__item card">
          <div class="card__hero hero">
            <img
              src="https://s3-alpha-sig.figma.com/img/e2c1/7f50/bb040d2c866e3bc6b7c2958854abdc43?Expires=1673222400&Signature=fyaWCoo0grTmQyPbIyk~f3UWoYJ7kibcwrYPkIrRrVi4tu1k2xczyiL8uaCvnxmwcUt7s69-zWphqdEEG2sdFgvqg60KISNJz3tS-6X4uzZorXAbbjcrnYJ1zS5pjZ3i0kv6bHCc1lIzv0u-TxyKAqlALNAqiHfeErlSPaFlNu83TPBSRFBXCEQiT5WjQLP3YJmEKVmsE4mpNKClDwd-k0vaLw5RcsATKKS2kgF1s6rOmXn1wVESUKT0XyyTW5tuSZSvP60kTjj8bE6Y~jcqPv77DDbUe62xNqToCP4ZAzwagr7A0TgP3gGkQzfNsZ1c55HC30LadIu~-AeqeIAaGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="" class="hero__avatar">
            <span class="hero__name">Primal Beast</span>
            <span class="hero__rareness mythical">Mythical</span>
          </div>
          <div class="card__price">
            <span class="card__price-val">1299</span>
            <span class="card__price-cur">руб</span>
          </div>
          <h3 class="card__name">Dark Behemoth</h3>
          <button class="card__buy">В&nbsp;корзину</button>
        </li>
      </ul>
    </section>
  </div>
</div>
`;
export default cardsTemplates;