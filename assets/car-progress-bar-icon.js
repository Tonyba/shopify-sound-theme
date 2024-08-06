(function () {


    setInterval(function() {
        const checkpoints = document.querySelectorAll('.lb-cpb-marker-container');
        const checkIcon = Array.from (document.querySelectorAll('.progress-checkpoint'));

        const hasIcon = document.querySelector('.lb-cpb-progress-bar-container .progress-checkpoint') ?  document.querySelector('.lb-cpb-progress-bar-container .progress-checkpoint') .length : false;


        if(hasIcon == false) {
            if(checkpoints.length) {
                Array.from(checkpoints).map(function(cpoint, i) {
                    cpoint.append(checkIcon[i]);
                });
           } 

        } 
    }, 100);
}());