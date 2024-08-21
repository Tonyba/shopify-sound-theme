(function(){
    const bundles = document.querySelector('.product-custom-bundle-container');
    const bundlesItems = Array.from(bundles.children);
    const includedContainer = document.querySelector('.product-custom-bundle-included');

    const variantPickersOpts = document.querySelectorAll('.variant-picker .variant-picker__option .block-swatch');

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

 
    const varientValue = params.get('variant');


    init();
    
    function appendBundles() {
       const title = document.querySelector('.product-info-title');
       title.after(bundles);
       bundles.after(includedContainer);
    }

    function init() {
        if(bundlesItems.length) {
            appendBundles();
            selectDefaultVariant();

            bundlesItems[0].classList.add('is-selected');
        
            bundlesItems.map(function(item, index) {
                const bundleIncluded = item.querySelector('.what-included-wrapper');

                if(index === 0) bundleIncluded.classList.remove('hidden');
               
                includedContainer.append(bundleIncluded);
                item.addEventListener('click', () => handleClick(item, index, bundleIncluded));


            });
        }  
    }

    function selectDefaultVariant() {
        if(varientValue) {
            
        }
    }

    function handleClick(item, index, bundleIncluded) {
        
        Array.from(document.querySelectorAll('.what-included-wrapper')).map(function(wi) {
            wi.classList.add('hidden');
        });

        bundleIncluded.classList.remove('hidden');

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