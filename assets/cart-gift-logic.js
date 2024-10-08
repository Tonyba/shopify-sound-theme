(function () {

    const cartDrawer = document.querySelector('.cart-drawer');


    detectGift();
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };


    // Callback function to execute when mutations are observed
    var callback = function(mutationsList) {
        for(var mutation of mutationsList) {
            if (mutation.type == 'childList') {
                detectGift();
            }
          
        }
    };

    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(cartDrawer, config);

    // Later, you can stop observing
   // observer.disconnect();

   function detectGift() {
      const itemList = Array.from(document.querySelectorAll('.cart-drawer .line-item'));
      itemList.map(function(item) {
            const price = item.querySelector('.text-on-sale');
            if(price?.textContent?.includes('$0.00')) {
                item.classList.add('gift');
            }
      });
   }

}());