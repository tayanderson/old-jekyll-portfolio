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

	$(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

});
