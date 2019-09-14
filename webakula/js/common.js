$(function() {

	//Open menu
	function openHamburgerMenu() {
		$(".hamburger").on("click", function() {
			$('.menu').toggleClass('is-active');
	   		$('.ishome').toggleClass('is-active');
	   		$('.hamburger').toggleClass('is-active');
		});
	}openHamburgerMenu();

	//Header carousel
	$('.carousel').owlCarousel({
		items: 1,
		lazyLoad: true,
		loop: true,
		margin: 10,
		dotsContainer: "#carousel-dots",
		autoplay: true,
		autoplayTimeout: 8000,
		smartSpeed: 1000,
	});

	//Tours carousel
	$('.tours-carousel').owlCarousel({
		loop: false,
		margin: 50,
		dots: false,
		dotsContainer: "#tours-dots",
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		URLhashListener: true,
        startPosition: 'URLHash',
		responsive:{
	        0:{
	            items:1,
	            nav: false,
	        },
	        768:{
	        	items:1,
	        	nav: true,
	        },
	        1000:{
	            items:2
	        },
	        1600:{
	        	items:3
	        }
	    }
	});

	$('#tours-dots').on('click', function(){
		$('#tours-dots .owl-dot').removeClass('active');
	});


});
