$(function() {

	//Mmenu
	$('#my-menu').mmenu({
		extensions: [
			'theme-black',
			'pagedim-black',
			'position-right',
			'fx-listitems-slide',
		],
		navbar: {
			title: '<img src="img/logo.png" alt="Логотип">'
		},
		offCanvas: {
			position: 'right'
		},
		pageScroll: {
			scroll: true,
			update: true
		},
	});

	//Применяем выравнивание высоты для OwlCarousel после того как все прогрузится. В нашем слчае просто просто с задержкой
	$('.carousel-services').on('initialized.owl.carousel', function(){
		setTimeout(function(){
			carouselService()
		}, 100);
	});

	//Owl-carousel для услуг
	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items :3
			}
		}
	});

	//Выравниваю высоту картинки и блока в карусели
	function carouselService() {
		$('.carousel-services-item').each(function() {
			var ths = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
			ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselService();

	//Делаю второе слово в h3 маленьким
	$('.carousel-services-composition .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	//Меняю цвет второго слова в загаловках
	$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	//Делаю высоту блоков одинаковой при ресайзе экрана
	function onResize() {
		_eqh('.carousel-services-content',{});
	}onResize();
	window.onresize = function(){onResize()};

	//Fotorama-carousel для секции "о нас" с изменением высоты при ресайзе экрана
	$(window).on('load resize', function() {
		$('.fotorama').fotorama({
		  autoplay: true,
		  stopautoplayontouch: true,
		  maxwidth: '100%',
		  ratio: 16/9,
		  nav: 'thumbs',
		  navwidth: '100%',
		  thumbwidth: '105',
		  thumbheight: '66',
		  thumbborderwidth: '4',
		  fit: 'cover',
		  shuffle: true,
		  height: '650'
		});
        if ($(window).width() < 1200) {
            $('.fotorama').fotorama({
			  height: '550'
			});
        };
        if ($(window).width() < 768) {
            $('.fotorama').fotorama({
			  height: '400'
			});
        };
        if ($(window).width() < 420) {
            $('.fotorama').fotorama({
			  height: '250',
			  nav: 'dots'
			});
        };
	});

	//Owl-carousel для отзывов
	$('.feedback-carousel').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false
	});

	//Owl-carousel для партнеров
	$('.carousel-partners').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		reponsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	//Масштабирует кнопку карты при наведении и открытие карты
	$('.collapsible').on({
		'mouseover' : function(){
			$('.collapsible .fas').css({'transform' : 'scale(1.3)'});
		},
		'mouseout' : function(){
			$('.collapsible .fas').css({'transform' : 'scale(1)'});
		},
		'click' : function(){
			$(".collapsible .fas").toggleClass("active");
			$(".content").toggleClass("active");
			var content = this.nextElementSibling;
			if (content.style.maxHeight){
		      content.style.maxHeight = null;
		    } else {
		      content.style.maxHeight = content.scrollHeight + "px";
		    }
		}
	});

});

$(window).on('load', function(){

	//Прелоадер на странице
	$('.preloader').delay(600).fadeOut('slow');

	//Анимация прискролле
	setTimeout(function(){

		anime({
		  targets: '.welcome .soc__item',
		  translateY: [-65, 0],
		  opacity: [0, 1],
		  delay: anime.stagger(450),
		});

		var elements = document.querySelectorAll('.welcome .h1, .welcome p, .welcome strong, .welcome__text, .top-line, .header-contacts, .header-contacts .col-lg-4, .header-contacts .col-sm-6');

		anime({
		  targets: elements,
		  translateY: [-65, 0],
		  opacity: [0, 1],
		  delay: anime.stagger(100, {start: 1900}),
		  easing: 'easeOutCirc',
		});

	}, 900);
	
});
