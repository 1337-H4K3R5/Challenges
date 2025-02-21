let session ;
session = sessionStorage.user

async function CheckSession(){
	if(session != "admin" || session==""){
		window.location.href = "bye.html";
	}
	else{
		let hash = document.getElementById("secretPhrase").value;

		let response = await fetch("https://c9e5-60-254-81-203.ngrok-free.app/checkPassword",{
			method:"POST",
			headers: { "Content-Type": "application/json" },
			body:JSON.stringify({ "hash": hash })
		})
	//console.log(data.correct,data.flag)
	let data = await response.json();
	if(data.correct){
		let messageDiv = document.getElementById("message");
		messageDiv.innerHTML=`<div class='alert alert-success'>Correct! Here is your flag:${data.flag}</div>`;
	

	}
	else{
		let messageDiv = document.getElementById("message");
		 messageDiv.innerHTML = `<div class='alert alert-success'>Incorrect! Here is your flag: <strong>${data.flag}</strong></div>`;
		}

	}	
}

;(()=>{
	let user = sessionStorage.user;
	if(user !="admin"){
		window.location.href="bye.html";
	}
})()
