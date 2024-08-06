(function () {


    waitForElm('.lb-cpb-marker-container').then((elm) => {
        const checkpoints = document.querySelectorAll('.lb-cpb-marker-container');
  
        if(checkpoints.length) {
             const checkIcon = Array.from (document.querySelectorAll('.progress-checkpoint'));

             Array.from(checkpoints).map(function(cpoint, i) {
     
                 cpoint.append(checkIcon[i]);
     
             });
     
        } 
    });




   function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
    }

}());