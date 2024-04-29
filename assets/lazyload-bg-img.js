document.addEventListener("DOMContentLoaded", function() {
    var lazyLoadImages = document.querySelectorAll(".lazyload-bg ");

    var lazyLoad = function() {
        lazyLoadImages.forEach(function(image) {
            if (image.offsetTop < window.innerHeight + window.pageYOffset) {
                var src = image.getAttribute('data-src');
                if (src) {
                    image.style.backgroundImage = "url('" + src + "')";
                    image.removeAttribute('data-src');
                }
            }
        });
    };

    lazyLoad();

    window.addEventListener("scroll", lazyLoad);
});