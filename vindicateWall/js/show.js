function show(box){ 
	var text = box.innerHTML; 
	var newBox = document.createElement("div"); 
	var btn = document.createElement("a"); 
	newBox.innerHTML = text.substring(0,220); 
	btn.innerHTML = text.length > 220 ? "显示全部" : ""; 
	btn.href = "###"; 
	btn.style.float = "right";
	btn.style.width = '100px';
	btn.style.marginRight = "120px";
	btn.style.textDecoration= "none";
	btn.style.fontSize = "12px";
	btn.style.zIndex = '999';
	btn.style.bgColor= 'red';
	btn.onclick = function(){ 
		if (btn.innerHTML == "显示全部"){ 
			btn.innerHTML = "收起"; 
			newBox.innerHTML = text; 
		}else{ 
			btn.innerHTML = "显示全部"; 
			newBox.innerHTML = text.substring(0,220); 
		} 
	} 
	box.innerHTML = ""; 
	box.appendChild(newBox); 
	box.appendChild(btn); 
} 
var divs = document.getElementsByTagName('div')
for (var i = 0; i < divs.length; i++) {
    if (divs[i].className == 'box') show(divs[i]);
}
