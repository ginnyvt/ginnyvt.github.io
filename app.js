/*------------------------
   Scroll to top
-------------------------- */
$(function () {
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 400) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
});
$('#back-to-top').on('click', function () {
	$('html, body').animate({ scrollTop: 0 }, 'slow');
	return false;
});

const siteHeader = document.getElementById('site-header');
const menuBars = document.getElementById('menu-bars');
console.log(menuBars);

menuBars.addEventListener('click', () => {
	menuBars.classList.toggle('active');
	siteHeader.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-link');
console.log(navLinks);
navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		menuBars.classList.remove('active');
		siteHeader.classList.remove('active');
	});
});
