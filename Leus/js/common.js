function openCurtain() {

    anime({
		targets: '.left .outer',
		translateX: [0, -350],
		opacity: 0,
		duration: 450,
		easing: 'easeOutSine',
	});
	anime({
		targets: '.right .outer',
		translateX: [0, 350],
		opacity: 0,
		duration: 450,
		easing: 'easeOutSine',
	});

    setTimeout(function(){
		$('.left').css({
	    	'transform' : 'translateX(-100%)',
			'transition' : 'transform 1s ease',
	    });
	    $('.right').css({
	    	'transform' : 'translateX(100%)',
			'transition' : 'transform 1s ease',
	    });
	}, 200);

};

function closeCurtain() {
	
	$('.left').css({
		'transform' : 'translateX(0%)',
		'transition' : 'transform 1s ease',
	});
	$('.right').css({
		'transform' : 'translateX(0%)',
		'transition' : 'transform 1s ease',
	});

	setTimeout(function(){
		anime({
			targets: '.left .outer',
			translateX: [-350, 0],
			opacity: 1,
			duration: 450,
			easing: 'easeOutSine',
		});
		anime({
			targets: '.right .outer',
			translateX: [350, 0],
			opacity: 1,
			duration: 450,
			easing: 'easeOutSine',
		});
	}, 800);

};

function animeLeft() {

	$('.left').hover(
		function() {
			$('.left').css({
				'clip-path' : 'polygon(0 0, 70% 0, 40% 100%, 0 100%)',
				'transition' : 'all .6s cubic-bezier(.99,.01,.49,1.07)',
			});
	     	$('.right').css({
	     		'clip-path' : 'polygon(100% 0, 70% 0, 40% 100%, 100% 100%)',
	     		'transition' : 'all .6s cubic-bezier(.99,.01,.49,1.07)',
	     	});
		}, function() {
			$('.left').css({'clip-path' : 'polygon(0 0, 65% 0, 35% 100%, 0 100%)'});
	    	$('.right').css({'clip-path' : 'polygon(100% 0, 65% 0, 35% 100%, 100% 100%)'});				
		}
	);

};

function animeRight() {

	$('.right').hover(
		function() {
			$('.left').css({
				'clip-path' : 'polygon(0 0, 60% 0, 30% 100%, 0 100%)',
				'transition' : 'all .6s cubic-bezier(.92,.01,.68,.99)',
			});
	     	$('.right').css({
	     		'clip-path' : 'polygon(100% 0, 60% 0, 30% 100%, 100% 100%)',
	     		'transition' : 'all .6s cubic-bezier(.92,.01,.68,.99)',
	     	});
		}, function() {
			$('.left').css({'clip-path' : 'polygon(0 0, 65% 0, 35% 100%, 0 100%)'});
	    	$('.right').css({'clip-path' : 'polygon(100% 0, 65% 0, 35% 100%, 100% 100%)'});				
		}
	);

};

function arrowLeft(){

	$(".left .outer").on({
	    mouseenter: function () {
			anime({
			    targets: '.polymorph-left',
			    points: [
			    	{ value: '38.4,13 3.8,13 12.7,4 11.3,2.6 0,14 0,14 0,14 11.3,25.4 12.7,24 3.8,15 38.4,15'}
			    ],
			    easing: 'easeOutQuad',
			    duration: 600,
			    loop: false
			});
	    },
	    mouseleave: function () {
			anime({
			    targets: '.polymorph-left',
			    points: [
			    	{ value: '98.4,13 3.8,13 12.7,4.1 11.3,2.6 0,13.9 0.1,14 0,14.1 11.3,25.4 12.7,23.9 3.8,15 98.4,15'}
			    ],
			    easing: 'easeOutQuad',
			    duration: 600,
			    loop: false
			});
	    }
	});

};

function arrowRight(){

	$(".right .outer").on({
	    mouseenter: function () {
			anime({
			    targets: '.polymorph-right',
			    points: [
			    	{ value: '61.6,13 96.2,13 87.3,4 88.7,2.6 100,14 100,14 100,14 88.7,25.4 87.3,24 96.2,15 61.6,15'}
			    ],
			    easing: 'easeOutQuad',
			    duration: 600,
			    loop: false
			});
	    },
	    mouseleave: function () {
			anime({
			    targets: '.polymorph-right',
			    points: [
			    	{ value: '1.6,13 96.2,13 87.3,4.1 88.7,2.6 100,13.9 99.9,14 100,14.1 88.7,25.4 87.3,23.9 96.2,15 1.6,15'}
			    ],
			    easing: 'easeOutQuad',
			    duration: 600,
			    loop: false
			});
	    }
	});

};

function toggleMenu() {

	if ( $('.hamburger').hasClass('is-active') ){
		anime({
			targets: '.menu__item',
			opacity: 0,
			translateX: [0, 40],
			delay: anime.stagger(100)
		});
		setTimeout(function(){
			$('.hamburger').removeClass('is-active');
			$('.menu').removeClass('is-active');
		}, 100);
	} else {
		$('.hamburger').addClass('is-active');
		$('.menu').addClass('is-active');
		anime({
			targets: '.menu__item',
			opacity: 1,
			translateX: [40, 0],
			delay: anime.stagger(100, {start: 400})
		});
	};

	$('#activeSoc').on('click', function(){
		$('.hamburger').removeClass('is-active');
		$('.menu').removeClass('is-active');
		$('.socials__item').addClass('is-active');
		$('.close-socials').addClass('is-active');
	});

	$('.close-socials').on('click', function(){
		$('.socials__item').removeClass('is-active');
		$('.close-socials').removeClass('is-active');
	});

};

function toggleMenuSmall() {

	if ( $('.hamburger').hasClass('is-active') ){
		anime({
			targets: '.menu__item',
			opacity: 0,
			translateX: [0, 40],
			delay: anime.stagger(100)
		});
		setTimeout(function(){
			$('.hamburger').removeClass('is-active');
			$('.menu').removeClass('is-active');
		}, 100);
	} else {
		$('.hamburger').addClass('is-active');
		$('.menu').addClass('is-active');
		anime({
			targets: '.menu__item',
			opacity: 1,
			translateX: [40, 0],
			delay: anime.stagger(100, {start: 400})
		});
	};

	$('.socials__btn').on('click', function(){
		$('.socials').removeClass('is-active');
	});

	$('#activeSoc').on('click', function(){
		$('.socials').addClass('is-active');
	});

};


$(function() {

	$('.header').addClass('open');
	setTimeout(function(){
		closeCurtain();
	}, 400);

	function checkWidth() {

		var url = $(location).attr('pathname');
		var width = $(window).width();
		if( url == "Leus/index.html" || url == "Leus/" && width > 768) {

			$('.hamburger').on('click', toggleMenu);
			setTimeout(function(){
				animeLeft();
				animeRight();
				arrowLeft();
				arrowRight();
			}, 1600);

		} else if ( url == "Leus/index.html" || url == "Leus/" && width < 768 ) {
			$('.hamburger').on('click', toggleMenuSmall);
		}

	}checkWidth();

});