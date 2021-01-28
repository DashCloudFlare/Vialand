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
