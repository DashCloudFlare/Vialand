const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {

//Toggle_Nav
		nav.classList.toggle('nav-active');

//Animate_Links
		navLinks.forEach((link, index) => {
		     if (link.style.animation) {
			 link.style.animation = '';
		     } else {
			   link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
			    }
	});
   });
}
navSlide();





var tab_selection = document.querySelectorAll('.tphcm-tab, .hanoi-tab');
var khuvuc_list = document.querySelectorAll('.khuvuc-list');

	tab_selection.forEach(function(tab, tab_index){
		tab.addEventListener('click', function(){
							tab_selection.forEach(function(tab){
											   tab.classList.remove('active');
											   })
											   tab.classList.add('active');
											   khuvuc_list.forEach(function(content, content_index){
		if(content_index == tab_index) {
						content.style.display = "flex";
						}
						else{
						    content.style.display = "none";
						    }
						})
					})
				})
//Phuong_index.html
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Image_Slider_Auto
setInterval(function(){
			plusSlides(1)
			}, 5000);
