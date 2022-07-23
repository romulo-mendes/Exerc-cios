var $form = document.querySelector("form");
var $value = document.querySelector("#value");
var $show = document.querySelector("#show");

$form.addEventListener("submit", (e) => {
	e.preventDefault();
	$show.innerHTML = "<p>Valor do desconto: </p>" + percentOff($value.value);
});
function percentOff(value) {
	return value * 0.05;
}
