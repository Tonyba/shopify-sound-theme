(function () {

    const cartDrawer = document.querySelector('.cart-drawer');

    // Options for the observer (which mutations to observe)
    var config = {  childList: true };

    // Callback function to execute when mutations are observed
    var callback = function(mutationsList) {
        for(var mutation of mutationsList) {
            if (mutation.type == 'childList') {
                
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
      const itemList = Array.from(cartDrawer.querySelectorAll('.list-item'));
      itemList.map(function(item) {
            const price = item.querySelector('.text-on-sale');
            console.log(price.textContent)
      });
   }

}());