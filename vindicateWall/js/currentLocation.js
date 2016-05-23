
var navcurrent = null;
var headernav = document.getElementById("change").getElementsByTagName("a");
navcurrent = headernav[0];
for(var i = 0; i < headernav.length; i++){
	if(window.location.href.indexOf(headernav[i].href) >= 0){
		navcurrent  = headernav[i];
	}
}
navcurrent.id = "headernav_current"; 

var obj = null;
var As = document.getElementById("sidebar").getElementsByTagName("a");
obj = As[0];
for(var i = 0; i < As.length; i++){
	if(window.location.href.indexOf(As[i].href) >= 0){
		obj = As[i];
	}
}
obj.id = "sidebar_current"; 


