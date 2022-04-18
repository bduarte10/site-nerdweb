const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 5,
	grabCursor: true,

	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 640px
		640: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
