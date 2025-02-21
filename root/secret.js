let session ;
session = sessionStorage.user

async function CheckSession(){
	if(session != "admin"){
		window.location.href = "bye.html";
	}
	else{
		let hash = document.getElementById("secretPhrase").value;

		let response = await fetch("https://0zpmoln5wj.loclx.io/checkPassword",{
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
		
