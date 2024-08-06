(function () {


    setInterval(function() {
        const checkpoints = document.querySelectorAll('.lb-cpb-marker-container');
        const checkIcon = Array.from (document.querySelectorAll('.progress-checkpoint'));

        console.log(checkIcon)
        if(!checkIcon.length) {

            if(checkpoints.length) {

                Array.from(checkpoints).map(function(cpoint, i) {
        
                    cpoint.append(checkIcon[i]);
        
                });
        
           } 

        } 
    }, 250);
}());