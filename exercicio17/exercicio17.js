var $form = document.querySelector("form");
var $num = document.querySelector("#num");
var $show = document.querySelector("#show");

var total = 0;
var cont = 0;

$form.addEventListener("submit", function (e) {
	e.preventDefault();
	if (!$num.value) {
		alert("Preencha o campo antes de continuar!");
	} else if (cont >= 10) {
		alert("Você já digitou o máximo de números, clique em Limpar para continuar");
	} else if (parseInt($num.value) % 2 == 0) {
		total += parseInt($num.value);
		$num.value = "";
		cont++;
		$show.innerHTML = "Soma dos números pares é igual a: " + total;
	} else {
		$num.value = "";
		cont++;
	}
});

function ClearAll() {
	total = 0;
	cont = 0;
	$show.innerHTML = "";
	$num.value = "";
}
