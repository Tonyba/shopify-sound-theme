(function () {

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    var faceMaskInput = document.querySelector('label[for="swatch-template--16709282136217__main-product-form-7998517149849-template--16709282136217__main--option1-face-mask"]');
    var neckMaskInput = document.querySelector('label[for="swatch-template--16709282136217__main-product-form-7998517149849-template--16709282136217__main--option1-neck-mask"]');
    var bothInput =  document.querySelector('label[for="swatch-template--16709282136217__main-product-form-7998517149849-template--16709282136217__main--option1-both"]');

    var neckMaskId = '44439074668697';

   

    var opts = Array.from(document.querySelectorAll('.opt-item'));

    opts.map(function(opt) {
        opt.addEventListener('click', () => selectLogic(opt));
    });

    searchParamLogic();

    function searchParamLogic() {
        var urlParams = new URLSearchParams(window.location.search);
        var variant = urlParams.get('variant');

        opts.map(function(opt) {
            opt.classList.remove('selected');
        });

        if(variant) {
            switch (variant) {
                case neckMaskId:
                    variant = 'Neck Mask';
                    break;
            
                default:
                    variant = 'Face Mask';
                    break;
            }
            
            var selectedOpt = document.querySelector(`.opt-item[data-value="${variant}"]`);

            selectLogic(selectedOpt);
        }
    }

    function selectLogic(selectedOpt) {
        
        if(!selectedOpt.classList.contains('out-of-stock')) selectedOpt.classList.toggle('selected');

        checkSelected();
        if(noneSelected()) {
            faceMaskInput.click();
            opts[0].classList.add('selected');
        }
        if(isAllSelected()) addToCart()

 

    }





    function checkSelected() {
        
        var selectedOpt = document.querySelectorAll('.opt-item.selected:not(.out-of-stock)');
        
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
        var selectedOpts = document.querySelectorAll('.opt-item.selected:not(.out-of-stock)');

        if(selectedOpts.length === opts.length) allSelected = true; 

        return allSelected;
    }

    function noneSelected() {
        var nonSelected = false;
        var selectedOpts = document.querySelectorAll('.opt-item.selected:not(.out-of-stock)');

        console.log(selectedOpts)

        if(!selectedOpts.length) nonSelected = true; 
        

        return nonSelected;
    }

    function addToCart(id, quantity) {
        jQuery.ajax({
            url: '/cart/add.js',
            type: 'post',
            dataType: 'json',
            data: `quantity=${quantity}&id=${id}`,
            success: function (){
                document.dispatchEvent(new Event('cart:change'));
            }
        });
    }

  }

})();