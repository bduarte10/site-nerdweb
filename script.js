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

let menu = document.getElementById('menu-bar');
let toggle = document.querySelector('.mobile-menu');
let close = document.querySelector('.close-btn');

menu.addEventListener('click', () => {
	toggle.classList.add('active');
});
close.addEventListener('click', () => {
	toggle.classList.remove('active');
});
window.onscroll = () => {
	toggle.classList.remove('active');
};
