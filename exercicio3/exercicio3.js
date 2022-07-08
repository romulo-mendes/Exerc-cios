var higher_num = 0;
var max_num = 0;
var $form = document.querySelector("form");
var $clear = document.querySelector("#clear");
var $number = document.querySelector("#number");
var $show = document.querySelector("#show");

$form.addEventListener("submit", function (e) {
	if (!$number.value) {
		alert("Preencha o campo antes de continuar");
		e.preventDefault();
	} else if (max_num >= 5) {
		e.preventDefault();
		alert("Números máximo atingido, se quiser continuar clique em 'Limpar'");
	} else if (parseInt($number.value) >= higher_num) {
		e.preventDefault();
		max_num += 1;
		higher_num = parseInt($number.value);
		$show.innerHTML = "O maior número digita é: " + higher_num;
		$number.value = "";
	} else {
		$show.innerHTML = "O maior número digita é: " + higher_num;
		$number.value = "";
		max_num += 1;
		e.preventDefault();
	}
});
$clear.addEventListener("click", function () {
	higher_num = 0;
	$show.innerHTML = "";
	$number.value = "";
	max_num = 0;
});
