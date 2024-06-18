(function () {

  document.addEventListener('DOMContentLoaded', init);

  function init() {

    var variantPicker = document.querySelector('.variant-picker > .variant-picker__option:first-child .variant-picker__option-values');

    var labels = variantPicker.querySelectorAll('label');

    labels = Array.from(labels);

  

    var faceMaskInput = labels[0];
    var neckMaskInput = labels[1];
    var bothInput =  labels[2];

    var neckMaskId = '48299091591500';
    var bothId = '48299091624268';

    var price = document.querySelector('.rating-with-text');
    var quantity = document.querySelector('.product-info__quantity-selector ');
 
    var submitBtn = document.querySelector('.product-info__buy-buttons button');

    var opts = Array.from(document.querySelectorAll('.opt-item:not(.mask-opt)'));

    opts.map(function(opt) {
        opt.addEventListener('click', () => selectLogic(opt));
    });

    searchParamLogic();

    if(isAnyOutOfStock()) {
        var optWithStock = siblings(document.querySelector('.out-of-stock:not(.mask-opt)'));
        if(optWithStock) selectLogic(optWithStock[0]);
    }

    if(isAllOutofStock()) {
        price.innerHTML = '<p>No Stock for this product.</p>';
        opts.map(function(opt) { opt.classList.remove('selected') });
        submitBtn.setAttribute('disabled', true);
        quantity.classList.add('disabled');
        submitBtn.innerHTML = 'No Stock'
    }

    function searchParamLogic() {
        var urlParams = new URLSearchParams(window.location.search);
        var variant = urlParams.get('variant');


        if(variant) {
            
            opts.map(function(opt) {
                opt.classList.remove('selected');
            });
            
            switch (variant) {
                case neckMaskId:
                    variant = 'Neck Mask';
                    break;

                case bothId:
                    selectAll();
                    break;
                default:
                    variant = 'Face Mask';
                    break;
            }
            
            var selectedOpt = document.querySelector(`.opt-item[data-value="${variant}"]:not(.out-of-stock):not(.mask-opt)`);

            if(selectedOpt) selectLogic(selectedOpt);
        }
    }

    function siblings(ele) { 
        return [].slice.call(ele.parentNode.children).filter((child) => (child !== ele)) 
    };

    function selectLogic(selectedOpt) {
    
        if(!selectedOpt.classList.contains('out-of-stock')) selectedOpt.classList.toggle('selected');
       
        checkSelected();

        if(noneSelected()) {
            if(!opts[0].classList.contains('out-of-stock')) {
                faceMaskInput.click();
            }
        }
        if(isAllSelected()) bothInput.click();

        

    }


    function selectAll() {
        var allOpts = document.querySelectorAll('.opt-item:not(.out-of-stock):not(.mask-opt)');
        bothInput.click();

        Array.from(allOpts).map(function(opt) { opt.classList.add('selected') })
        
    }


    function isAnyOutOfStock() {
        var isAnyofStock = false;
        var noStockOpts = document.querySelectorAll('.out-of-stock:not(.mask-opt)');

        if( noStockOpts.length == 1 ) isAnyofStock = true;


        return isAnyofStock;
    }

    function isAllOutofStock() {
        var noStock = false;
        var noStockOpts = document.querySelectorAll('.out-of-stock:not(.mask-opt)');

        if(noStockOpts.length === opts.length) noStock = true;

        return noStock;
    }

    function checkSelected() {
        
        var selectedOpt = document.querySelectorAll('.opt-item.neck-opt.selected:not(.out-of-stock)');
        
        if(selectedOpt.length == 1) {

            selectedOpt = Array.from(selectedOpt)[0];

            switch (selectedOpt.getAttribute('data-variant-id')) {
                case neckMaskId:
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
        var currentOpts = document.querySelectorAll('.opt-item:not(.out-of-stock)');
        var selectedOpts = document.querySelectorAll('.opt-item.selected:not(.out-of-stock)');

        if(selectedOpts.length === currentOpts.length) allSelected = true; 

        return allSelected;
    }

    function noneSelected() {
        var nonSelected = false;
        var selectedOpts = document.querySelectorAll('.opt-item.neck-opt.selected:not(.out-of-stock)');

     
        if(!selectedOpts.length) nonSelected = true; 
        

        return nonSelected;
    }

//     function addBothToCart(items){
    
//      $.ajax({
//          type: "POST",
//          url: '/cart/add.json',
//          data: { items: items },
//          success: function(data) {
//                 console.log('success');
//                 updateCart();
//              },
//          dataType: 'application/json'
//       });
      
      
//   }


//   function updateCart() {
//     setTimeout(function() {
//         jQuery.getJSON('/cart.js', function(cart) {
//              let cartData = cart.items;
//              document.dispatchEvent(new CustomEvent('cart:build' , {bubbles: true})); 
//              document.dispatchEvent(new CustomEvent('cart:refresh', {
//                  bubbles: true,
//                   detail: cartData
//              })); 
//         });
//         }, 400); 
//   }

  }

})();