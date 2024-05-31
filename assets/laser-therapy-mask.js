(function () {

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    var faceMaskInput = document.querySelector('label[for="swatch-template--16709282136217__main-product-form-7998517149849-template--16709282136217__main--option1-face-mask"]');
    var neckMaskInput = document.querySelector('label[for="swatch-template--16709282136217__main-product-form-7998517149849-template--16709282136217__main--option1-neck-mask"]');
    var bothInput =  document.querySelector('label[for="swatch-template--16709282136217__main-product-form-7998517149849-template--16709282136217__main--option1-both"]');

    console.log(neckMaskInput)

    var opts = Array.from(document.querySelectorAll('.opt-item'));

    opts.map(function(opt) {
        opt.addEventListener('click', () => selectLogic(opt));
    });

    function selectLogic(selectedOpt) {
        selectedOpt.classList.toggle('selected');
        var isSelected = selectedOpt.classList.contains('selected');
        if(noneSelected()) opts[0].classList.add('selected');

        if(isSelected) {
            switch (selectedOpt.getAttribute('data-value')) {
                case 'Face Mask':
                    faceMaskInput.dispatchEvent(new Event('click'));
                    break;
    
                case 'Neck Mask':
                    console.log('pasando')
                    neckMaskInput.dispatchEvent(new Event('click'));
                default:
                    faceMaskInput.dispatchEvent(new Event('click'));
                break;
            }
        }

        

    }

    function noneSelected() {
        var nonSelected = false;
        var selectedOpts = document.querySelectorAll('.opt-item.selected');

        console.log(selectedOpts)

        if(!selectedOpts.length) nonSelected = true; 
        

        return nonSelected;
    }

  }

})();