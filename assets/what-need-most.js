(function(){
    const bundles = document.querySelector('.product-custom-bundle-container');
    const bundlesItems = Array.from(bundles.children);

    const variantPickersOpts = document.querySelectorAll('.variant-picker .variant-picker__option .block-swatch');

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

 
    const varientValue = params.get('variant');



    init();
    
    function appendBundles() {
       const title = document.querySelector('.product-info-title');
       title.after(bundles);
    }

    function init() {
        if(bundlesItems.length) {
            appendBundles();
            selectDefaultVariant();

            bundlesItems[0].classList.add('is-selected');
        
            bundlesItems.map(function(item, index) {
                item.addEventListener('click', () => handleClick(item, index));
            });
        }  
    }

    function selectDefaultVariant() {
        if(varientValue) {
            
        }
    }

    function handleClick(item, index) {

        variantPickersOpts[index].click();

        addSelected(item);
    }

    function addSelected(item) {
        removeSelected();
        item.classList.add('is-selected');
    }

    function removeSelected() {
        bundlesItems.map(function(item) {
            item.classList.remove('is-selected');
        });
    }

}());