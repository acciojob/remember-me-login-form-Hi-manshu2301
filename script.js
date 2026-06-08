//your JS code here. If required.
const existing = document.getElementById("existing");
existing.style.display = "none";
 const name = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submit");
const checkBox = document.getElementById("checkbox");

const saveUser = localStorage.getItem("username");
const savePassword = localStorage.getItem("password");

if(saveUser && savePassword){
	existing.style.display = "block";
}

submitBtn.addEventListener("click",function(e){
	e.preventDefault();
	const username = name.value;
	const password = passwordInput.value;
	alert(`Logged in as ${username}`);
	if(checkBox.checked){
		localStorage.setItem("username",username);
		localStorage.setItem("password",password);
		existing.style.display = "block";
	}else{
		localStorage.removeItem("username");
		localStorage.removeItem("password");
		existing.style.display = "none";
	}
	
});
existing.addEventListener("click",funntion(){
	const savedUser = loacalStorage.getItem("username");
	alert(`Loggen in as ${savedUser}`);
})










