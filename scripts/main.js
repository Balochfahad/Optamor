/**
*  main.js
*  Requires: jQuery
*  Copyright 2015 Ph.Creative
*  Some core common js functions (usage based on html classes)
*  REMEMBER to remove any functions and their associated plugins from app.js 
*  if not needed at the end of build
**/


/**
  * Check an href for an anchor. If exists, and in document, scroll to it.
  * If href argument omitted, assumes context (this) is HTML Element,
  * which will be the case when invoked by jQuery after an event
*/
function scroll_if_anchor(href) {
    href = typeof(href) == "string" ? href : $(this).attr("href");

    // If href missing, ignore
    if(!href) return;

    // You could easily calculate this dynamically if you prefer
    var fromTop = 120;

    // If our Href points to a valid, non-empty anchor, and is on the same page (e.g. #foo)
    // Legacy jQuery and IE7 may have issues: http://stackoverflow.com/q/1593174
    var $target = $(href);

    // Older browsers without pushState might flicker here, as they momentarily
    // jump to the wrong position (IE < 10)
    if($target.length) {
        $('html, body').animate({ scrollTop: $target.offset().top - fromTop });
    }
} 

define(['jquery'], function ($) {
  'use strict';
	
	/* Closes any open separate (Bootstrap) collapsable items before opening the next one */
	$('.header').on('show.bs.collapse', function () {
	    var actives = $(this).find('.collapse.in'),
	        hasData;
	    
	    if (actives && actives.length) {
	        hasData = actives.data('collapse');
	        if (hasData && hasData.transitioning) {
	        	return;
	        }
	        actives.collapse('hide');
	        actives.data('collapse', null);
	    }
	});

	$('body').on('click', function (e) {
        if (!$('.navbar').is(e.target) && $('.navbar').has(e.target).length === 0 && $('.in').has(e.target).length === 0) {
            $('.navbar .navbar-collapse').removeClass('in');
            $('.navbar .navbar-toggle').addClass('collapsed');
        }
    });



    // Match heights: by row
    if ($('.js-match-height').length) {
    	require(['matchHeight'], function () {
            $('.js-match-height').matchHeight();
        });	
    }

    // Match heights: NOT by row
    
    $(window).resize(function () {
    	if ($('.team-style .js-match-height').length) {
	    	require(['matchHeight'], function () {
		        if (Modernizr.mq('(max-width:767px)')) {
		            $('.team-style .js-match-height').matchHeight('remove');
		        } else if (Modernizr.mq('(min-width:768px)')) {	
		            $('.team-style .js-match-height').matchHeight({
					    byRow: false
					});                  
		        } 
	        });	
	    } 
    }).trigger('resize');

    $(window).resize(function () {
    	if ($('.course-item a.js-match-height').length) {
	    	require(['matchHeight'], function () {
		        if (Modernizr.mq('(max-width:767px)')) {
				    $('.course-item a.js-match-height').matchHeight('remove');	
		        } else if (Modernizr.mq('(min-width:768px)')) {
		        	
		            $('.course-item a.js-match-height').matchHeight({
					    byRow: false
					});
				                           
		        } 
        	});	
	    }
    }).trigger('resize');

    // Match heights: by row
    if ($('.course-item h3').length) {
        require(['matchHeight'], function () {
            $('.course-item h3').matchHeight();
        });
    }

    // Match heights: by row
    if ($('.grid .col-lg-4.grid-item h3').length) {
        require(['matchHeight'], function () {
            $('.grid .grid-item h3').matchHeight();
        });
    }

    $(window).resize(function () {
    	if ($('.solution-card .js-match-height').length) {
	    	require(['matchHeight'], function () {
		        if (Modernizr.mq('(max-width:767px)')) {
				    $('.solution-card .js-match-height').matchHeight('remove');	
		        } else if (Modernizr.mq('(min-width:768px)')) {
		        	
		            $('.solution-card .js-match-height').matchHeight({
					    byRow: false
					});
				                           
		        } 
        	});	
	    }
    }).trigger('resize');

    $(window).resize(function () {
    	if ($('.casestudy-style-portrait .js-match-height').length) {
	    	require(['matchHeight'], function () {
		        if (Modernizr.mq('(max-width:767px)')) {
				    $('.casestudy-style-portrait .js-match-height').matchHeight('remove');	
		        } else if (Modernizr.mq('(min-width:768px)')) {
		        	
		            $('.casestudy-style-portrait .js-match-height').matchHeight({
					    byRow: false
					});
				                           
		        } 
        	});	
	    }
    }).trigger('resize');

    $(document).on("mousemove", function(e){
  
	  $(".spotlight").css("left",e.clientX-100).css("top", e.clientY-100);
	  
	});



    //lightbox: image
	if ($('.js-image-lightbox').length) {
	    require(['magnific'], function () {
	      $('.js-image-lightbox').magnificPopup({
			  delegate: 'a', // child items selector, by clicking on it popup will open
			  tLoading: 'Loading image #%curr%...',
			  type: 'image',
			  gallery: {
	            enabled: true,
	            navigateByImgClick: true,
	            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	          },
	          image: {
	            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	            titleSrc: function(item) {
	              return item.el.attr('title');
	            }
	          }
			});
	    });
    }

    //lightbox: video
	if ($('.js-video-lightbox').length) {
	    require(['magnific'], function () {
	      	$('.js-video-lightbox').magnificPopup({
		      	delegate: 'a', // child items selector, by clicking on it popup will open
				tLoading: 'Loading video #%curr%...',
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false,
				gallery: {
		            enabled: true,
		            navigateByImgClick: true,
		            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		        }
			});
    	});
    }
    
    // brands carousel
    if ($('.js-multi-carousel').length) {
	  require(['owlcarousel'], function () {	    	     
	    $(".js-multi-carousel").owlCarousel({
	      items : 2,
	      itemsDesktop : [1199,2],
	      itemsDesktopSmall : [980,2],
	      itemsTablet: [768,2],
	      itemsTabletSmall: [600,2],
	      itemsMobile : [479,1]
	    });
	  });
	}

	// mobile only carousel
	if ($('.js-mobile-carousel').length) {
        require(['owlcarousel'], function () {
            $(window).resize(function () {
                    var owl = $('.js-mobile-carousel').data('owlCarousel');
                    if (Modernizr.mq('(max-width:767px)') && !owl) {
                        $('.js-mobile-carousel').owlCarousel({
                            navigation: true,
                            pagination: true,
                            slideSpeed: 300,
                            paginationSpeed: 400,
                            singleItem: true,
                            navigationText : false
                        });
                    } else if (Modernizr.mq('(min-width:768px)') && owl) {
                        owl.destroy();                       
                    } 
            }).trigger('resize');
        });
    }
    
    // single item carousel
	if ($('.js-single-carousel').length) {
        require(['owlcarousel'], function () {
	        var owl = $('.js-single-carousel').data('owlCarousel');
	        $('.js-single-carousel').owlCarousel({
	            navigation: true,
	            pagination: false,
	            slideSpeed: 300,
	            paginationSpeed: 400,
	            singleItem: true,
	            navigationText : false
	        });       
        });
    }

    //select2 plugin
    if ($('.js-select').length) {
    	require(['select2'], function () {
            $(".js-select").select2();
        });	
    }

    //sticky sidebar
    if ($('.js-sticky').length) {
    	require(['sticky'], function () {
            $(".js-sticky").stickyfloat( {duration: 400} );
        });	
    }

    // Responsive Tables
    if ($('.cms-content table').length) {
		$('.cms-content table').addClass('table');
		$('.cms-content table').wrap('<div class="table-responsive"></div>');
	}

	// isotope layout
	if ($('#js-isotope').length) {		
		require(['isotope'], function (Isotope) {
			var elem = document.querySelector('.grid');

			var iso = new Isotope( elem, {
			  // options
			  itemSelector: '.grid-item',
			  layoutMode: 'masonry'
			});			

			$('.filter-button-group').on( 'click', 'button', function() {
			  var filterValue = $(this).attr('data-filter');
			  iso.arrange({ 
			  	filter: filterValue 
			  });
			});
		});
	}

	// disable toggle nav on desktop
    if ($('.dropdown-control').length) {
		
		$(window).resize(function () {
 
            if (Modernizr.mq('(min-width:992px)')) {
                $('.dropdown-control').removeAttr('data-toggle');
                $('.dropdown-control').removeClass('dropdown-toggle');
            }
            else if (Modernizr.mq('(max-width:991px)')) {
            	$('.dropdown-control').addClass('dropdown-toggle');
            	$('.dropdown-control').attr("data-toggle", "dropdown");
                
            }
             
        }).trigger('resize');		
	}

	// thank you modal popup
	var url = window.location.search;
	if (url != null) {
		if (url.indexOf("modal=thankyou") >= 0) {
		    require(['modal'], function () {
		    	$('#thankyou').modal('show');
		    	$('#thankyou').on('hidden.bs.modal', function (e) {
				  window.location.href = window.location.href.split('?')[0];
				});
	    	});
		}
	}


	if (Modernizr.mq('(min-width:992px)')) {		   
		// When our page loads, check to see if it contains and anchor
		scroll_if_anchor(window.location.hash);

		// Intercept all anchor clicks
		$("body").on("click", "a.anchor[href^='#']", scroll_if_anchor);
    }	
// end doc ready	
});

