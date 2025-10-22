
  (function ($) {
    "use strict";
  
    function mediaSize() {
      if ($(window).width() > 1199) {
        if ($('#pagepiling').length > 0) {
          $('#pagepiling').pagepiling({
            menu: '#onePageMenu',
            anchors: ['cases', 'about', 'services', 'projects', 'skills', 'testimonial', 'contact'],
            navigation: {
              'position': 'right',
              'tooltips': ['Cases', 'About', 'Services', 'Projects', 'Testimonial', 'Contact']
            },
            afterRender: function () {
              $('#pp-nav').addClass('custom');
              pageScrollIndecator();
            },
            onLeave: function () {
              pageScrollIndecator();
            },
            afterLoad: function (anchorLink, index) {
              if (index > 1) {
                $('#pp-nav').removeClass('custom');
              } else {
                $('#pp-nav').addClass('custom');
              }
  
            }
          });
  
          function pageScrollIndecator() {
            var allSection = $('#pagepiling .section');
            var sectionCount = parseInt(allSection.length);
  
            var activeSection = $('#pagepiling').children('.section.active');
            var activeCount = allSection.index(activeSection);
  
            var activeIndex = parseInt(activeCount) + 1;
            var scale = (activeIndex / sectionCount).toFixed(3);
  
            $('.pagescroll-indication span').css({
              'transform': 'scaleY(' + scale + ')'
            });
          }
  
        }
  
      };
    }
    mediaSize();
    window.addEventListener('resize', mediaSize, false)
  
  })(jQuery);