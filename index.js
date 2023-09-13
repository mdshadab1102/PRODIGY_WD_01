  // nav menu hover effect

const navLi = document.querySelectorAll('#navli');
const anchor = document.querySelectorAll('.navbar-link');
for(let i=0; i<navLi.length;i++){
	navLi[i].addEventListener("mouseover", function(){
		navLi[i].style.backgroundColor = "#e7e7e7";
		anchor[i].style.color = "#000";
	});
	navLi[i].addEventListener("mouseout", function(){
		navLi[i].style.backgroundColor = "";
		anchor[i].style.color = "#fff";
	});
}








