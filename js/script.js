
//Scroll Spy
// document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
//     el.addEventListener('shown.bs.tab', () => {
//       const target = el.getAttribute('data-bs-target')
//       const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`)
//       bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
//     })
//   })

//Scroll To Top 
var scrTop = document.getElementById("scrTop");

window.onscroll = function () {
	'use strict';
	
	if(window.pageYOffset >= 100){
		
		scrTop.style.display="block";
	}	
	else{
		scrTop.style.display="none";
	}
};

scrTop.onclick = function () {
		'use strict';
		window.scrollTo({
		top:0,
		left:0,
		behavior:"smooth",
	});
};


