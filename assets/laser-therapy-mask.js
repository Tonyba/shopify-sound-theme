(function () {

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    var faceMaskInput = document.querySelector('label[for="swatch-template--16709282136217__main-product-form-7998517149849-template--16709282136217__main--option1-face-mask"]');
    var neckMaskInput = document.querySelector('label[for="swatch-template--16709282136217__main-product-form-7998517149849-template--16709282136217__main--option1-neck-mask"]');
    var bothInput =  document.querySelector('label[for="swatch-template--16709282136217__main-product-form-7998517149849-template--16709282136217__main--option1-both"]');

    var neckMaskId = '44439074668697';

    var price = document.querySelector('.rating-with-text');
    var quantity = document.querySelector('.product-info__quantity-selector ');
    var add_to_cart = document.querySelector('.shopify-product-form');

    var opts = Array.from(document.querySelectorAll('.opt-item'));

    opts.map(function(opt) {
        opt.addEventListener('click', () => selectLogic(opt));
    });

    searchParamLogic();


    console.log(isAllOutofStock())

    if(isAllOutofStock()) {
        console.log('pasando')
        console.log(price)
        price.innerHTML = '<p>No Stock for this product.</p>';
        opts.map(function(opt) { opt.classList.remove('selected') });
        add_to_cart.classList.add('disabled');
        
        console.log(add_to_cart)
    }

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
        if(isAllSelected()) bothInput.click();

        

    }



    function isAllOutofStock() {
        var noStock = false;
        var noStockOpts = document.querySelectorAll('.out-of-stock');

        if(noStockOpts.length === opts.length) noStock = true;

        return noStock;
    }

    function checkSelected() {
        
        var selectedOpt = document.querySelectorAll('.opt-item.selected:not(out-of-stock)');
        
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