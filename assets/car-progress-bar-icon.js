(function () {


    setInterval(function() {
        const checkpoints = document.querySelectorAll('.lb-cpb-marker-container');
        const checkIcon = Array.from (document.querySelectorAll('.progress-checkpoint'));

        const hasIcon = document.querySelector('.lb-cpb-progress-bar-container .progress-checkpoint') ?  document.querySelector('.lb-cpb-progress-bar-container .progress-checkpoint') .length : 0;

        
        if(hasIcon == 0 ) {
            if(checkpoints.length) {
                Array.from(checkpoints).map(function(cpoint, i) {
                    cpoint.append(checkIcon[i]);
                    checkIcon[i].classList.add('added');
                });
           } 

        } 
    }, 100);
}());