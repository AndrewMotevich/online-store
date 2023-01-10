// const cardsTemplate = `
// <div class="goods">
//   <div class="goods__wrap container">
//     <aside class="goods-filter">
//       <div class="goods-filter__btns">
//         <button class="goods-filter__btns-btn goods-filter__copy">Копировать фильтры</button>
//         <button class="goods-filter__btns-btn goods-filter__reset">Сбросить фильтры</button>
//       </div>
//       <ul class="goods-filter__list">
//         <li class="goods-filter__item">
//           <button class="goods-filter__btn">
//             <span class="goods-filter__btn-text">Цена</span>
//             <span class="goods-filter__btn-symbol">-</span>
//           </button>
//           <ul class="goods-filter__sublist">
//             <li class="goods-filter__subitem">
//               <!-- TODO: replace with 2 digits -->
//               <div class="range_container">
//                 <div class="sliders_control">
//                   <input id="fromSlider" type="range" value="0" min="0" max="10000"/>
//                   <input id="toSlider" type="range" value="3000" min="0" max="10000"/>
//                 </div>
//                 <div class="form_control">
//                   <input class="form_control_container__time__input" type="number" id="fromInput" value="10" min="0" max="10000"/>
//                   <input class="form_control_container__time__input" type="number" id="toInput" value="3000" min="0" max="10000"/>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </li>
//         <li class="goods-filter__item">
//           <button class="goods-filter__btn">
//             <span class="goods-filter__btn-text">В наличии</span>
//             <span class="goods-filter__btn-symbol">-</span>
//           </button>
//           <ul class="goods-filter__sublist">
//             <li class="goods-filter__subitem">
//               <!-- TODO: replace with 2 digits -->
//               <input class="goods-filter__range" type="range" id="stock">
//             </li>
//           </ul>
//         </li>
//         <li class="goods-filter__item">
//           <button class="goods-filter__btn">
//             <span class="goods-filter__btn-text">Сортировка</span>
//             <span class="goods-filter__btn-symbol">-</span>
//           </button>
//           <ul class="goods-filter__sublist">
//             <li class="goods-filter__subitem">
//               <label class="goods-filter-radio__label">По убыванию цены
//                 <input class="goods-filter-radio__input goods-filter-input" type="radio" name="sort" value="descendingPrice">
//                 <span class="goods-filter-radio__checkmark"></span>
//               </label>
//             </li>
//             <li class="goods-filter__subitem">
//               <label class="goods-filter-radio__label">По возрастанию цены
//                 <input class="goods-filter-radio__input goods-filter-input" type="radio" name="sort" value="ascendingPrice">
//                 <span class="goods-filter-radio__checkmark"></span>
//               </label>
//             </li>
//             <li class="goods-filter__subitem">
//               <label class="goods-filter-radio__label">По убыванию кол-ва
//                 <input class="goods-filter-radio__input goods-filter-input" type="radio" name="sort" value="descendingStock">
//                 <span class="goods-filter-radio__checkmark"></span>
//               </label>
//             </li>
//             <li class="goods-filter__subitem">
//               <label class="goods-filter-radio__label">По возрастанию кол-ва
//                 <input class="goods-filter-radio__input goods-filter-input" type="radio" name="sort" value="ascendingStock">
//                 <span class="goods-filter-radio__checkmark"></span>
//               </label>
//             </li>
//           </ul>
//         </li>
//         <li class="goods-filter__item">
//           <button class="goods-filter__btn">
//             <span class="goods-filter__btn-text">Тип</span>
//             <span class="goods-filter__btn-symbol">-</span>
//           </button>
//           <ul class="goods-filter__sublist">
//             <li class="goods-filter__subitem">
//               <div class="goods-filter-checkbox">
//                 <label class="goods-filter-checkbox__label">Набор
//                   <input type="checkbox" name="type" value="bundle" class="goods-filter-checkbox__input goods-filter-input">
//                   <span class="goods-filter-checkbox__checkmark"></span>
//                 </label>
//               </div>
//             </li>
//             <li class="goods-filter__subitem">
//               <div class="goods-filter-checkbox">
//                 <label class="goods-filter-checkbox__label">Предмет
//                   <input type="checkbox" name="type" value="item" class="goods-filter-checkbox__input goods-filter-input">
//                   <span class="goods-filter-checkbox__checkmark"></span>
//                 </label>
//               </div>
//             </li>
//           </ul>
//         </li>
//         <li class="goods-filter__item">
//           <button class="goods-filter__btn">
//             <span class="goods-filter__btn-text">Редкость</span>
//             <span class="goods-filter__btn-symbol">-</span>
//           </button>
//           <ul class="goods-filter__sublist">
//             <li class="goods-filter__subitem">
//               <div class="goods-filter-checkbox">
//                 <label class="goods-filter-checkbox__label">Common
//                   <input type="checkbox" name="rarity" value="Common" class="goods-filter-checkbox__input goods-filter-input">
//                   <span class="goods-filter-checkbox__checkmark"></span>
//                 </label>
//               </div>
//             </li>
//             <li class="goods-filter__subitem">
//               <div class="goods-filter-checkbox">
//                 <label class="goods-filter-checkbox__label">Uncommon
//                   <input type="checkbox" name="rarity" value="Uncommon" class="goods-filter-checkbox__input goods-filter-input">
//                   <span class="goods-filter-checkbox__checkmark"></span>
//                 </label>
//               </div>
//             </li>
//             <li class="goods-filter__subitem">
//               <div class="goods-filter-checkbox">
//                 <label class="goods-filter-checkbox__label">Mythical
//                   <input type="checkbox" name="rarity" value="Mythical" class="goods-filter-checkbox__input goods-filter-input">
//                   <span class="goods-filter-checkbox__checkmark"></span>
//                 </label>
//               </div>
//             </li>
//             <li class="goods-filter__subitem">
//               <div class="goods-filter-checkbox">
//                 <label class="goods-filter-checkbox__label">Rare
//                   <input type="checkbox" name="rarity" value="Rare" class="goods-filter-checkbox__input goods-filter-input">
//                   <span class="goods-filter-checkbox__checkmark"></span>
//                 </label>
//               </div>
//             </li>
//             <li class="goods-filter__subitem">
//               <div class="goods-filter-checkbox">
//                 <label class="goods-filter-checkbox__label">Immortal
//                   <input type="checkbox" name="rarity" value="Immortal" class="goods-filter-checkbox__input goods-filter-input">
//                   <span class="goods-filter-checkbox__checkmark"></span>
//                 </label>
//               </div>
//             </li>
//             <li class="goods-filter__subitem">
//               <div class="goods-filter-checkbox">
//                 <label class="goods-filter-checkbox__label">Legendary
//                   <input type="checkbox" name="rarity" value="Legendary" class="goods-filter-checkbox__input goods-filter-input">
//                   <span class="goods-filter-checkbox__checkmark"></span>
//                 </label>
//               </div>
//             </li>
//             <li class="goods-filter__subitem">
//               <div class="goods-filter-checkbox">
//                 <label class="goods-filter-checkbox__label">Arcana
//                   <input type="checkbox" name="rarity" value="Arcana" class="goods-filter-checkbox__input goods-filter-input">
//                   <span class="goods-filter-checkbox__checkmark"></span>
//                 </label>
//               </div>
//             </li>
//           </ul>
//         </li>

//         <li class="goods-filter__item">
//           <button class="goods-filter__btn">
//             <span class="goods-filter__btn-text">The International</span>
//             <span class="goods-filter__btn-symbol">-</span>
//           </button>
//           <ul class="goods-filter__sublist">
//             <li class="goods-filter__subitem">
//               <div class="goods-filter-checkbox">
//                 <label class="goods-filter-checkbox__label">The International 2022
//                   <input type="checkbox" name="category" value="The-International-2022" class="goods-filter-checkbox__input goods-filter-input">
//                   <span class="goods-filter-checkbox__checkmark"></span>
//                 </label>
//               </div>
//             </li>
//             <li class="goods-filter__subitem">
//               <div class="goods-filter-checkbox">
//                 <label class="goods-filter-checkbox__label">The International 2021
//                   <input type="checkbox" name="category" value="The-International-2021" class="goods-filter-checkbox__input goods-filter-input">
//                   <span class="goods-filter-checkbox__checkmark"></span>
//                 </label>
//               </div>
//             </li>
//             <li class="goods-filter__subitem">
//               <div class="goods-filter-checkbox">
//                 <label class="goods-filter-checkbox__label">The International 2020
//                   <input type="checkbox" name="category" value="The-International-2020" class="goods-filter-checkbox__input goods-filter-input">
//                   <span class="goods-filter-checkbox__checkmark"></span>
//                 </label>
//               </div>
//             </li>
//             <li class="goods-filter__subitem">
//               <div class="goods-filter-checkbox">
//                 <label class="goods-filter-checkbox__label">The International 2019
//                   <input type="checkbox" name="category" value="The-International-2019" class="goods-filter-checkbox__input goods-filter-input">
//                   <span class="goods-filter-checkbox__checkmark"></span>
//                 </label>
//               </div>
//             </li>
//             <li class="goods-filter__subitem">
//               <div class="goods-filter-checkbox">
//                 <label class="goods-filter-checkbox__label">The International 2018
//                   <input type="checkbox" name="category" value="The-International-2018" class="goods-filter-checkbox__input goods-filter-input">
//                   <span class="goods-filter-checkbox__checkmark"></span>
//                 </label>
//               </div>
//             </li>
//             <li class="goods-filter__subitem">
//               <div class="goods-filter-checkbox">
//                 <label class="goods-filter-checkbox__label">The International 2017
//                   <input type="checkbox" name="category" value="The-International-2017" class="goods-filter-checkbox__input goods-filter-input">
//                   <span class="goods-filter-checkbox__checkmark"></span>
//                 </label>
//               </div>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </aside>
//     <section class="goods-cards">
//       <h2 class="visually-hidden">Товары</h2>
//       <div class="goods-cards__head">
//         <div class="goods-cards__head-find">
//           <span class="goods-cards__head-find-text">Нашлось:</span>
//           <span class="goods-cards__head-find-num">0</span>
//         </div>
//         <input type="search" name="search" class="goods-cards__head-search" placeholder="Поиск по названию">
//         <div class="goods-cards__head-type">
//           <span class="goods-cards__head-type-text">Вид</span>
//           <button class="goods-cards__head-type-btn goods-cards__head-type-btn--4" aria-label="4 на 4">
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//           </button>
//           <button class="goods-cards__head-type-btn goods-cards__head-type-btn--3" aria-label="3 на 3">
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//             <span class="goods-cards__head-type-btn-symbol"></span>
//           </button>
//         </div>
//       </div>
//       <ul class="goods-cards__list">
//         <h3 class="goods-cards__not-found">Такого нет даже у нас &#128552;</h3>
//       </ul>
//     </section>
//   </div>
// </div>
// `;
// export {cardsTemplate};
const cardsTemplate = `
<div class="goods">
<div class="goods__wrap container">
  <aside class="goods-filter">
    <div class="goods-filter__btns">
      <button class="goods-filter__btns-btn goods-filter__copy">Копировать фильтры</button>
      <button class="goods-filter__btns-btn goods-filter__reset">Сбросить фильтры</button>
    </div>
    <ul class="goods-filter__list">
      <li class="goods-filter__item">
        <button class="goods-filter__btn">
          <span class="goods-filter__btn-text">Цена</span>
          <span class="goods-filter__btn-symbol">-</span>
        </button>
        <ul class="goods-filter__sublist">
          <li class="goods-filter__subitem">
            <!-- <input class="goods-filter__range" type="range" id="price"> -->
            <div class="range-wrap">
              <div class="range__control-wrap">
                <input id="priceRangeMin" class="range__control-input" type="range" value="0" min="0" max="10000"/>
                <input id="priceRangeMax" class="range__control-input" type="range" value="10000" min="0" max="10000"/>
              </div>
              <div class="range__num-wrap">
                <input class="range__num-input" type="number" id="priceNumMin" value="0" min="0" max="10000"/>
                <input class="range__num-input" type="number" id="priceNumMax" value="10000" min="0" max="10000"/>
              </div>
            </div>
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
            <!-- <input class="goods-filter__range" type="range" id="stock"> -->
            <div class="range-wrap">
              <div class="range__control-wrap">
                <input id="stockRangeMin" class="range__control-input" type="range" value="0" min="0" max="100"/>
                <input id="stockRangeMax" class="range__control-input" type="range" value="100" min="0" max="100"/>
              </div>
              <div class="range__num-wrap">
                <input class="range__num-input" type="number" id="stockNumMin" value="0" min="0" max="100"/>
                <input class="range__num-input" type="number" id="stockNumMax" value="100" min="0" max="100"/>
              </div>
            </div>
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
            <label class="goods-filter-radio__label">По убыванию цены
              <input class="goods-filter-radio__input goods-filter-input" type="radio" name="sort" value="descendingPrice">
              <span class="goods-filter-radio__checkmark"></span>
            </label>
          </li>
          <li class="goods-filter__subitem">
            <label class="goods-filter-radio__label">По возрастанию цены
              <input class="goods-filter-radio__input goods-filter-input" type="radio" name="sort" value="ascendingPrice">
              <span class="goods-filter-radio__checkmark"></span>
            </label>
          </li>
          <li class="goods-filter__subitem">
            <label class="goods-filter-radio__label">По убыванию кол-ва
              <input class="goods-filter-radio__input goods-filter-input" type="radio" name="sort" value="descendingStock">
              <span class="goods-filter-radio__checkmark"></span>
            </label>
          </li>
          <li class="goods-filter__subitem">
            <label class="goods-filter-radio__label">По возрастанию кол-ва
              <input class="goods-filter-radio__input goods-filter-input" type="radio" name="sort" value="ascendingStock">
              <span class="goods-filter-radio__checkmark"></span>
            </label>
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
                <input type="checkbox" name="type" value="bundle" class="goods-filter-checkbox__input goods-filter-input">
                <span class="goods-filter-checkbox__checkmark"></span>
              </label>
            </div>
          </li>
          <li class="goods-filter__subitem">
            <div class="goods-filter-checkbox">
              <label class="goods-filter-checkbox__label">Предмет
                <input type="checkbox" name="type" value="item" class="goods-filter-checkbox__input goods-filter-input">
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
                <input type="checkbox" name="rarity" value="Common" class="goods-filter-checkbox__input goods-filter-input">
                <span class="goods-filter-checkbox__checkmark"></span>
              </label>
            </div>
          </li>
          <li class="goods-filter__subitem">
            <div class="goods-filter-checkbox">
              <label class="goods-filter-checkbox__label">Uncommon
                <input type="checkbox" name="rarity" value="Uncommon" class="goods-filter-checkbox__input goods-filter-input">
                <span class="goods-filter-checkbox__checkmark"></span>
              </label>
            </div>
          </li>
          <li class="goods-filter__subitem">
            <div class="goods-filter-checkbox">
              <label class="goods-filter-checkbox__label">Mythical
                <input type="checkbox" name="rarity" value="Mythical" class="goods-filter-checkbox__input goods-filter-input">
                <span class="goods-filter-checkbox__checkmark"></span>
              </label>
            </div>
          </li>
          <li class="goods-filter__subitem">
            <div class="goods-filter-checkbox">
              <label class="goods-filter-checkbox__label">Rare
                <input type="checkbox" name="rarity" value="Rare" class="goods-filter-checkbox__input goods-filter-input">
                <span class="goods-filter-checkbox__checkmark"></span>
              </label>
            </div>
          </li>
          <li class="goods-filter__subitem">
            <div class="goods-filter-checkbox">
              <label class="goods-filter-checkbox__label">Immortal
                <input type="checkbox" name="rarity" value="Immortal" class="goods-filter-checkbox__input goods-filter-input">
                <span class="goods-filter-checkbox__checkmark"></span>
              </label>
            </div>
          </li>
          <li class="goods-filter__subitem">
            <div class="goods-filter-checkbox">
              <label class="goods-filter-checkbox__label">Legendary
                <input type="checkbox" name="rarity" value="Legendary" class="goods-filter-checkbox__input goods-filter-input">
                <span class="goods-filter-checkbox__checkmark"></span>
              </label>
            </div>
          </li>
          <li class="goods-filter__subitem">
            <div class="goods-filter-checkbox">
              <label class="goods-filter-checkbox__label">Arcana
                <input type="checkbox" name="rarity" value="Arcana" class="goods-filter-checkbox__input goods-filter-input">
                <span class="goods-filter-checkbox__checkmark"></span>
              </label>
            </div>
          </li>
        </ul>
      </li>

      <li class="goods-filter__item">
        <button class="goods-filter__btn">
          <span class="goods-filter__btn-text">The International</span>
          <span class="goods-filter__btn-symbol">-</span>
        </button>
        <ul class="goods-filter__sublist">
          <li class="goods-filter__subitem">
            <div class="goods-filter-checkbox">
              <label class="goods-filter-checkbox__label">The International 2022
                <input type="checkbox" name="category" value="The-International-2022" class="goods-filter-checkbox__input goods-filter-input">
                <span class="goods-filter-checkbox__checkmark"></span>
              </label>
            </div>
          </li>
          <li class="goods-filter__subitem">
            <div class="goods-filter-checkbox">
              <label class="goods-filter-checkbox__label">The International 2021
                <input type="checkbox" name="category" value="The-International-2021" class="goods-filter-checkbox__input goods-filter-input">
                <span class="goods-filter-checkbox__checkmark"></span>
              </label>
            </div>
          </li>
          <li class="goods-filter__subitem">
            <div class="goods-filter-checkbox">
              <label class="goods-filter-checkbox__label">The International 2020
                <input type="checkbox" name="category" value="The-International-2020" class="goods-filter-checkbox__input goods-filter-input">
                <span class="goods-filter-checkbox__checkmark"></span>
              </label>
            </div>
          </li>
          <li class="goods-filter__subitem">
            <div class="goods-filter-checkbox">
              <label class="goods-filter-checkbox__label">The International 2019
                <input type="checkbox" name="category" value="The-International-2019" class="goods-filter-checkbox__input goods-filter-input">
                <span class="goods-filter-checkbox__checkmark"></span>
              </label>
            </div>
          </li>
          <li class="goods-filter__subitem">
            <div class="goods-filter-checkbox">
              <label class="goods-filter-checkbox__label">The International 2018
                <input type="checkbox" name="category" value="The-International-2018" class="goods-filter-checkbox__input goods-filter-input">
                <span class="goods-filter-checkbox__checkmark"></span>
              </label>
            </div>
          </li>
          <li class="goods-filter__subitem">
            <div class="goods-filter-checkbox">
              <label class="goods-filter-checkbox__label">The International 2017
                <input type="checkbox" name="category" value="The-International-2017" class="goods-filter-checkbox__input goods-filter-input">
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
        <span class="goods-cards__head-find-num">0</span>
      </div>
      <input type="search" name="search" class="goods-cards__head-search" placeholder="Поиск по названию">
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
      <h3 class="goods-cards__not-found">Такого нет даже у нас &#128552;</h3>
    </ul>
  </section>
</div>
</div>
`;
export {cardsTemplate};


