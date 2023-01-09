const modalWindowTemplate = `
<div class="modal-overlay"></div>
<div class="modal-info-wrap">
  <button class="modal-window__close">
    <svg fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" class="modal-window__close-icon">
        <path fill-rule="evenodd" clip-rule="evenodd" d="m7.426 6 4.279-4.278A1.008 1.008 0 1 0 10.278.295L6 4.574 1.721.295A1.008 1.008 0 1 0 .295 1.722L4.574 6 .295 10.278a1.008 1.008 0 0 0 1.426 1.427L6 7.426l4.278 4.279a1.008 1.008 0 1 0 1.427-1.427L7.426 6Z" fill=""></path>
    </svg>
  </button>
  <div class="modal-window">
    <div class="modal-window_forms">
    <form class="modal-window_personal-data-form" action="#">
      <p class="modal-window_title">Personal details</p>
      <input class="form-input" type="text" name="name" id="name" placeholder="Name">
      <input class="form-input" type="tel" name="phone" id="phone" placeholder="Phone number">
      <input class="form-input" type="text" name="address" id="address" placeholder="Adress">
      <input class="form-input" type="email" name="email" id="email" placeholder="E-mail">
    </form>
    <form class="modal-window_card-data-form" action="#">
      <p class="modal-window_title">Cards details</p>
      <div class="card-number-wrap">
        <img alt="" src="https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71" class="card-number-icon">
        <input class="form-input card-number-input" type="tel" id="card-number" name="card-number" inputmode="numeric" pattern="[0-9]{13,19}" maxlength="19" placeholder="Card number">
      </div>
      <div class="card_date form-input">
        <input type="tel" pattern="[0-9]{1,2}" maxlength="2" max="12" name="card-month" id="card-month" placeholder="MM">
        /
        <input type="tel" pattern="[0-9]{1,2}" maxlength="2" max="99" name="card-year" id="card-year" placeholder="YY">
      </div>
      <input class="form-input" type="password" inputmode="numeric" pattern="[0-9]{3,4}" maxlength="3" name="cvv" id="cvv" placeholder="CVV">
    </form>
    <button class="button form-button" type="submit">Купить</button>
    </div>
    <img class="modal-window_img" src="assets/img/sven.png" alt="sven">
  </div>
</div>`;
export {modalWindowTemplate};