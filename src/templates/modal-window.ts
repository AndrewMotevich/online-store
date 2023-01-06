const modalWindowTemplate = `    <div class="modal-window">
<div class="modal-window_forms">
  <form class="modal-window_personal-data-form" action="#">
    <p class="modal-window_title">Personal details</p>
    <input type="text" name="name" id="name" placeholder="Name">
    <input type="tel" name="phone" id="phone" placeholder="Phone number">
    <input type="text" name="address" id="address" placeholder="Adress">
    <input type="email" name="email" id="email" placeholder="email">
  </form>
  <form class="modal-window_card-data-form" action="#">
    <p class="modal-window_title">Cards details</p>
    <input type="tel" name="card-number" inputmode="numeric" pattern="[0-9]{13,19}" maxlength="19" placeholder="Card number">
    <div class="card_date">
      <input type="tel" name="card-month" id="card-month" placeholder="MM">
      /
      <input type="tel" name="card-year" id="card-year" placeholder="YY">
    </div>
    <input type="tel" inputmode="numeric" pattern="[0-9]*" name="cvv" id="cvv" maxlength="3" placeholder="CVV">
  </form>
  <button class="button" type="submit">Купить</button>
</div>
<img class="modal-window_img" src="../src/assets/img/sven.png" alt="sven">
</div>`;
export {modalWindowTemplate};