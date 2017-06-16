$(document).ready(function () {


	// $(window).resize(function(){

	// 	$('.inner-wrapper').css({
	// 		position:'absolute',
	// 		left: ($(window).width() - $('.inner-wrapper').outerWidth())/2,
	// 		top: ($(window).height() - $('.inner-wrapper').outerHeight())/2
	// 	});

	// });

	// // To initially run the function:
	// $(window).resize();

	$(".icon").click(function () {
		$(".main-nav").fadeToggle(500);
		$(".top-menu").toggleClass("top-animate");
		$(".mid-menu").toggleClass("mid-animate");
		$(".bottom-menu").toggleClass("bottom-animate");
		$(".hamburger-bg").toggleClass("bg-toggle");

	});

    $(function() {
        $('.lazy').Lazy({
          effect: "fadeIn",
          effectTime: 1500,
          threshold: 0
        });
    });

});
