(function () {

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    var faceMaskInput = document.querySelector('label[for="swatch-template--16709282136217__main-product-form-7998517149849-template--16709282136217__main--option1-face-mask"]');
    var neckMaskInput = document.querySelector('label[for="swatch-template--16709282136217__main-product-form-7998517149849-template--16709282136217__main--option1-neck-mask"]');
    var bothInput =  document.querySelector('label[for="swatch-template--16709282136217__main-product-form-7998517149849-template--16709282136217__main--option1-both"]');

    var faceMaskId = '44439074668697';
    var neckMaskId = '44439074635929';

    searchParamLogic();

    var opts = Array.from(document.querySelectorAll('.opt-item'));

    opts.map(function(opt) {
        opt.addEventListener('click', () => selectLogic(opt));
    });



    function searchParamLogic() {
        const urlParams = new URLSearchParams(window.location.search);
        const variant = urlParams.get('variant');

        if(variant) {
            switch (variant) {
                case neckMaskId:
                    variant = 'Neck Mask';
                    break;
            
                default:
                    variant = 'Face Mask';
                    break;
            }
            
            var selectedOpt = document.querySelector(`opt-item[data-value="${variant}"]`);

            selectLogic(selectedOpt);
        }
    }

    function selectLogic(selectedOpt) {
        selectedOpt.classList.toggle('selected');

        checkSelected();
        if(noneSelected()) {
            faceMaskInput.click();
            opts[0].classList.add('selected');
        }
        if(isAllSelected()) bothInput.click();

 

    }





    function checkSelected() {
        
        var selectedOpt = document.querySelectorAll('.opt-item.selected');
        
        if(selectedOpt.length == 1) {

            selectedOpt = Array.from(selectedOpt)[0];

            switch (selectedOpt.getAttribute('data-value')) {
                case 'Neck Mask':
                    neckMaskInput.click();
                 break;
                default:
                    faceMaskInput.click();
                    break;
            }
        }


    }


    function isAllSelected() {
        var allSelected = false;
        var selectedOpts = document.querySelectorAll('.opt-item.selected');

        if(selectedOpts.length === opts.length) allSelected = true; 

        return allSelected;
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