(function () {

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    var faceMaskInput = document.querySelector('#swatch-template--16709282136217__main-product-form-7998517149849-template--16709282136217__main--option1-face-mask');
    var neckMaskInput = document.querySelector('#swatch-template--16709282136217__main-product-form-7998517149849-template--16709282136217__main--option1-neck-mask');
    var bothInput =  document.querySelector('#swatch-template--16709282136217__main-product-form-7998517149849-template--16709282136217__main--option1-both');

    var opts = Array.from(document.querySelectorAll('.opt-item'));

    opts.map(function(opt) {
        opt.addEventListener('click', selectLogic(opt));
    });

    function selectLogic(selectedOpt) {
        selectedOpt.classList.toggle('selected');
    }

  }

})();