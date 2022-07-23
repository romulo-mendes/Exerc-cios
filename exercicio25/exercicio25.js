var $form = document.querySelector("form");
var $num1 = document.querySelector("#num1");
var $num2 = document.querySelector("#num2");
var $resp = document.querySelector("#resp");

$form.addEventListener("submit", function (e) {
	e.preventDefault();
	$resp.value = calc($num1.value, $num2.value);
	$num1.value = "";
	$num1.focus();
	$num2.value = "";
});
function calc(a, b) {
	return a * b;
}
