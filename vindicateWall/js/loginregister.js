function initiateOne(){
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	username.addEventListener("input",validation,false);
	password.addEventListener("input",validation,false);
	validation();
}

function validation(){
	if(username.value == ''){
		username.setCustomValidity('用户名不能为空！');
		username.style.borderColor = '#ffffff';
	}else{
		username.setCustomValidity('');	
		username.style.borderColor = 'rgba(153,154,151,0.5)';
	}
	if(password.value == ''){
		password.setCustomValidity('密码不能为空！');
		password.style.borderColor = '#ffffff';
	}else{
		password.setCustomValidity('');
		password.style.borderColor = 'rgba(153,154,151,0.5)';
	}
}


window.addEventListener("load",initiateOne,false);

function initiateTwo(){
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var myemail = document.getElementById("myemail");
	var againpassword = document.getElementById("againpassword");
	username.addEventListener("input",validationTwo,false);
	password.addEventListener("input",validationTwo,false);
	myemail.addEventListener("input",validationTwo,false);
	againpassword.addEventListener("input",validationTwo,false);
	validationTwo();
}


function validationTwo(){
	if(username.value == ''){
		username.setCustomValidity('用户名不能为空！');
		username.style.borderColor = '#ffffff';
	}else{
		username.setCustomValidity('');	
		username.style.borderColor = 'rgba(153,154,151,0.5)';
	}
	if(password.value == ''){
		password.setCustomValidity('密码不能为空！');
		password.style.borderColor = '#ffffff';
	}else{
		password.setCustomValidity('');
		password.style.borderColor = 'rgba(153,154,151,0.5)';
	}
	if(myemail.value == ''){
		myemail.setCustomValidity('邮箱不能为空！');
		myemail.style.borderColor = '#ffffff';
	}else{
		myemail.setCustomValidity('');
		myemail.style.borderColor = 'rgba(153,154,151,0.5)';
	}
	if(againpassword.value == ''){
		againpassword.setCustomValidity('邮箱不能为空！');
		againpassword.style.borderColor = '#ffffff';
	}else{
		againpassword.setCustomValidity('');
		againpassword.style.borderColor = 'rgba(153,154,151,0.5)';
	}

}

window.addEventListener("load",initiateTwo,false);

function initiateThree(){
	var myemail = document.getElementById("myemail");
	var number = document.getElementById("number");
	var newpassword = document.getElementById("newpassword");
	myemail.addEventListener("input",validationThree,false);
	number.addEventListener("input",validationThree,false);
	newpassword.addEventListener("input",validationTwo,false);
	validationThree();
}

function validationThree(){
	if(myemail.value == ''){
		myemail.setCustomValidity('邮箱不能为空！');
		myemail.style.borderColor = '#ffffff';
	}else{
		myemail.setCustomValidity('');
		myemail.style.borderColor = 'rgba(153,154,151,0.5)';
	}
	if(number.value == ''){
		number.setCustomValidity('邮箱不能为空！');
		number.style.borderColor = '#ffffff';
	}else{
		number.setCustomValidity('');
		number.style.borderColor = 'rgba(153,154,151,0.5)';
	}
	if(newpassword.value == ''){
		newpassword.setCustomValidity('邮箱不能为空！');
		newpassword.style.borderColor = '#ffffff';
	}else{
		newpassword.setCustomValidity('');
		newpassword.style.borderColor = 'rgba(153,154,151,0.5)';
	}
}


window.addEventListener("load",initiateThree,false);