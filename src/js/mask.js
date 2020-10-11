import IMask from "imask";

IMask(
  document.querySelector('.product__inputs-wrapper input[type="tel"]'), {
    mask: '+{7}(000)000-00-00'
  });
