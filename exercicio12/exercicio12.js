var $num = document.querySelector("#number");
var $form = document.querySelector("form");
var $show = document.querySelector("#show");

$form.addEventListener("submit", function (e) {
	e.preventDefault();
	if ($num.value < 10) {
		$show.innerHTML = "Insuficiente";
		$num.value = "";
	} else if ($num.value < 14) {
		$show.innerHTML = "Bom";
		$num.value = "";
	} else {
		$show.innerHTML = "Muito bom";
		$num.value = "";
	}
});
