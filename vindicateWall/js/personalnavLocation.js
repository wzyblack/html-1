var navcurrent = null;
var headernav = document.getElementById("nav_right").getElementsByTagName("a");
navcurrent = headernav[0];
for(var i = 0; i < headernav.length; i++){
	if(window.location.href.indexOf(headernav[i].href) >= 0){
		navcurrent  = headernav[i];
	}
}
navcurrent.id = "nav_right_current"; 