/* =========== SHOW MENU  ========= */
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav__toggle'),
   navClose = document.getElementById('nav__close');

// Menue Show
if (navToggle) {
	navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu');
	})
}

// Close Show
if (navClose) {
	navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu');
	})
}

//Remove Menu Mobile
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));


/* =========== BACKGROUND HEADER  ========= */
function scrollHeader(){
  const header = document.getElementById('header');

if (this.scrollY >= 50) header.classList.add('scroll-header');
else header.classList.remove('scroll-header');
}


window.addEventListener("scroll", scrollHeader);

 /* =========== CONTACT FORM  ========= */
 const contactMe = document.getElementById('contact-form'),
 nameMe = document.getElementById('contact-name'),
 emailMe = document.getElementById('contact-email'),
 messageMe = document.getElementById('message'),
 contactMessage = document.getElementById('contact-message');

 const sendEmail = (e) => {
 	e.preventDefault();

 	if (contactMe.value === "" || emailMe.value === ""|| messageMe.value === "" ) {
 		contactMessage.classList.remove('color-light');
 		contactMessage.classList.add('color-dark');

 		contactMessage.textContent = 'Write all the input fields';
 	}else{
 		emailjs
 		.sendForm('service_chjjpwm', 
 			'template_xytd55m',
 			 '#contact-form', 
 			 'NaW_rbPGSaRfoK4kr')
 		.then(
 			() =>{
 			contactMessage.classList.add('color-light');
 			contactMessage.textContent = 'Message sent';

 			setTimeout(() =>{
 				contactMessage.textContent = '';
 			}, 5000);
 		},
 		 (error) => {
 			alert('OOPs! SOMETHING WENT WRONG...', error);
 		}
 		);
 		nameMe.value = '';
 		emailMe.value = '';
 		messageMe.value = '';
 	}
 };

 contactMe.addEventListener('submit', sendEmail);

 /* ========= STYLE SWITCHER ============== */
 const styleSwitcherToggle = document.querySelector('.style__switcher-toggle'),
    styleSwitcher = document.querySelector('.style__switcher');

styleSwitcherToggle.addEventListener('click', () =>{
	styleSwitcher.classList.toggle('open');
})

// Hide Switcher On Scroll
window.addEventListener('scroll', () =>{
	if (styleSwitcher.classList.contains('open')) {
		styleSwitcher.classList.remove('open');
	}
})

const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color){
	alternateStyles.forEach((style) => {
     if (color === style.getAttribute('title')) {
     	style.removeAttribute('disabled');
     } else{
     	style.setAttribute('disabled', 'true')
     }
	});
}