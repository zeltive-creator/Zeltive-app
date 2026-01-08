(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


     // Fact Counter
     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

    // Service collapse chevron rotation and accordion behavior
    $(document).ready(function(){
        // Accordion behavior: close other collapses when opening a new one
        $('.collapse').on('show.bs.collapse', function(e) {
            var $currentCollapse = $(this);
            var currentId = $currentCollapse.attr('id');
            
            // Find the parent section (Services or AI Services)
            var $parentSection = $currentCollapse.closest('.services-inner');
            if ($parentSection.length === 0) {
                $parentSection = $currentCollapse.closest('.services');
            }
            
            // Close all other open collapses in this section
            $parentSection.find('.collapse.show').not($currentCollapse).each(function() {
                var $otherCollapse = $(this);
                // Use Bootstrap's collapse method to properly close
                if (typeof bootstrap !== 'undefined') {
                    var bsCollapse = bootstrap.Collapse.getInstance($otherCollapse[0]);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    } else {
                        $otherCollapse.collapse('hide');
                    }
                } else {
                    $otherCollapse.collapse('hide');
                }
            });
            
            // Rotate chevron for current collapse
            $('[data-bs-target="#' + currentId + '"]').find('i.fa-chevron-down').css('transform', 'rotate(180deg)');
        });
        
        // Handle Bootstrap collapse events for chevron rotation
        $('.collapse').on('hide.bs.collapse', function() {
            var targetId = $(this).attr('id');
            $('[data-bs-target="#' + targetId + '"]').find('i.fa-chevron-down').css('transform', 'rotate(0deg)');
        });
    });

})(jQuery);

