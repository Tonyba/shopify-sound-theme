(function () {

   const checkpoints = document.querySelectorAll('.lb-cpb-marker-container')
   console.log(checkpoints)
   if(checkpoints.length) {
        const checkIcon = Array.from (document.querySelectorAll('.progress-checkpoint'));

        

        Array.from(checkpoints).map(function(cpoint, i) {

            cpoint.append(checkIcon[i]);

        });

   } 

}());