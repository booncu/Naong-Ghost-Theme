/********************************
 *** Main JS file for Naong behaviours***
 ********************************/


(function ($, sr, undefined) {
    "use strict";
	
	 var $document = $(document),

        // debouncing function from John Hann
        // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
        debounce = function (func, threshold, execAsap) {
            var timeout;

            return function debounced () {
                var obj = this, args = arguments;
                function delayed () {
                    if (!execAsap) {
                        func.apply(obj, args);
                    }
                    timeout = null;
                }

                if (timeout) {
                    clearTimeout(timeout);
                } else if (execAsap) {
                    func.apply(obj, args);
                }

                timeout = setTimeout(delayed, threshold || 100);
            };
        };


	 /* ==============================================
    VIDEO FIT
    =============================================== */
	
	$document.ready(function () {
	
        var $postContent = $(".ng_post_content");
        $postContent.fitVids();
		
		 var $postContent = $(".main-header");
        $postContent.fitVids();			
    });
	
	
	/* ==============================================
   TYPED ANIMATION 404
    =============================================== */
	
	$document.ready(function () {
		$("#typed").typed({
				strings: ["Oops","Page Not Found!", "Surry!", "try using the menu on below","Page Not Found!"], // insert your text if you want here change 
				typeSpeed: 100,
				backDelay: 400,
				loop: false,
				// defaults to false for infinite loop
				loopCount: false,
				callback: function(){ foo(); }
			});

			function foo(){ console.log("Callback"); }
					
	});
	
	
	/* ==============================================
   ScrollUP 
    =============================================== */
	
	$document.ready(function () {
		$(function () {
                        $.scrollUp({
                            animation: 'fade',
                            scrollImg: {
                                active: true,
                                type: 'background',
                                src: 'img/top.png'
                            }
                        });
			});
	
	});
	

 })(jQuery);