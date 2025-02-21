let username;
let password;

function checkcredential(){
	username = document.getElementById("form2Example18").value;
	password =  document.getElementById("form2Example28").value;
	console.log(username,password);
	if(username === "admin" && password === "thisisnottheflag" ){
	sessionStorage.setItem("user",username);
	window.location.href = "secret.html";
	}else{
		window.location.href = "bye.html"
	}
}

