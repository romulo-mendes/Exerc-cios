function changeColor(element) {
	var $body = document.querySelector("body");
	if (element.innerHTML == "Vermelho") {
		$body.classList.toggle("red");
		element.classList.toggle("red");
	} else if (element.innerHTML == "Verde") {
		$body.classList.toggle("green");
		element.classList.toggle("green");
	}
}
