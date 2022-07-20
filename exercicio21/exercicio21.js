var $form = document.querySelector("form");
var $name = document.querySelector("#name");
var $lastName = document.querySelector("#lastName");

$form.addEventListener("submit", (e) => {
	e.preventDefault();
	alert("Olá " + $name.value + " " + $lastName.value);
	$name.value = "";
	$lastName.value = "";
	$name.focus();
});
