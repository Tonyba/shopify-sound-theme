if ('IntersectionObserver' in window) {
    document.addEventListener("DOMContentLoaded", function() {
  
      function handleIntersection(entries) {
        entries.map((entry) => {
          if (entry.isIntersecting) {
            // Item has crossed our observation
            // threshold - load src from data-src
            entry.target.style.backgroundImage = "url('"+entry.target.dataset.src+"')";
            // Job done for this item - no need to watch it!
            observer.unobserve(entry.target);
          }
        });
      }
  
      const headers = document.querySelectorAll('.lazyload-bg');
      const observer = new IntersectionObserver(
        handleIntersection,
        { rootMargin: "100px" }
      );
      headers.forEach(header => observer.observe(header));
    });
  } else {
    // No interaction support? Load all background images automatically
    const headers = document.querySelectorAll('.lazyload-bg');
    headers.forEach(header => {
      header.style.backgroundImage = "url('"+header.dataset.src+"')";
    });
  }

// document.addEventListener("DOMContentLoaded", function() {
//     var lazyLoadImages = document.querySelectorAll(".lazyload-bg");

//     var lazyLoad = function() {
//         lazyLoadImages.forEach(function(image) {
//             if (image.offsetTop < window.innerHeight + window.scrollY) {
//                 var src = image.getAttribute('data-src');
//                 if (src) {
//                     image.style.backgroundImage = "url('" + src + "')";
//                     image.removeAttribute('data-src');
//                 }
//             }
//         });
//     };

//     lazyLoad();

//     window.addEventListener("scroll", lazyLoad);
// });