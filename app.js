var wrapperDiv = document.querySelector("#wrapper");
var loginDiv = document.querySelector("#login_div");
var heroText = document.querySelector("#hero_text");
var heroGreeting = document.querySelector("#hero_greeting");

var navigation = document.querySelector("#navbar");
var firstInput = document.querySelector("#first_input");
var lastInput = document.querySelector("#last_input");
var middleInput = document.querySelector("#middle_input");
var submitButton = document.querySelector("#submit_button");


heroText.style.display = "none";
wrapperDiv.style.display = "none";
navigation.style.display = "none";

var checkSignUp = function() {
	if (firstInput.value == ""){
		return false;
	}
	else if (lastInput.value == "") {
		return false;
	}
	else if (middleInput.value == "") {
		return false;
	}
	return true;
}

submitButton.onclick = function() {
	var isSignedUp = checkSignUp();
	if(isSignedUp == true){
		changeGreeting();
		fade(loginDiv);
		setTimeout(unfade, 3000);
		wrapperDiv.style.display = "block";
	} else {
		window.alert("Please fill out required fields.");
		wrapperDiv.style.display = "none";
	}
}

function fade(element) {
	var op = 1;
	var timer = setInterval(function () {
		if (op <= 0.1){
			clearInterval(timer);
			element.style.display = "none";
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op -= op * 0.1;

	}, 50);
}

function unfade(){
	var op = 0.1;
	heroText.style.display = 'block';
	var timer = setInterval(function () {
		if (op >= 1){
			clearInterval(timer);
		}
		heroText.style.opacity = op;
		heroText.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op += op * 0.1;
	}, 10);
}

var changeGreeting = function() {
	var name = firstInput.value;
	var hello = "Hello ";
	var newGreeting = hello.concat(name);
	heroGreeting.innerHTML = newGreeting;

}
