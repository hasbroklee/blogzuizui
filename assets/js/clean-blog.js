(function() {
  "use strict";

  
  var MQL = 992;
  var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  var mainNav = document.querySelector('#mainNav');

  
  if (mainNav && vw > MQL) {
    var headerHeight = mainNav.offsetHeight;
    var previousTop = window.pageYOffset;
    
    window.addEventListener('scroll', function() {
      var currentTop = window.pageYOffset;
      
      if (currentTop < previousTop) {
      
        if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
          mainNav.classList.add('is-visible');
        } else {
          mainNav.classList.remove('is-visible', 'is-fixed');
        }
      } else if (currentTop > previousTop) {
      
        mainNav.classList.remove('is-visible');

        if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
          mainNav.classList.add('is-fixed');
        }
      }
      previousTop = currentTop;
    });
  }

})(); 
