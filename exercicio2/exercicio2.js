/* criação de variáveis */
var num_arr = [];
var show_number = 2;
var $number = document.querySelector("#number");
var $form = document.querySelector("form");
var $show = document.querySelector("#show");
var $total = document.querySelector("#total");
var $send = document.querySelector("#send");

/* Evento de envio de números */
$form.addEventListener("submit", function (e) {
	/* Verifica o conteúdo do botão de envio, se = novo da reset no cálculo */
	if ($send.textContent == "Novo") {
		$send.textContent = "Enviar";
		$total.innerHTML = "";
		$show.innerHTML = "";
		show_number = 2;
		$number.placeholder = "Digite o 1º valor";
		e.preventDefault();
		/* Se vazio pede pra preencher o campo */
	} else if (!$number.value) {
		alert("Preencha o campo antes de continuar");
		e.preventDefault();
		/* Se preenchido armazena o valor na array e mostra na tela os valores */
	} else {
		num_arr.push(parseInt($number.value));
		$show.innerHTML = num_arr;
		$number.value = "";
		$total.innerHTML = "";
		/* Loop para mudar o placeholder */
		num_arr.forEach((element, indice) => {
			show_number = indice + 2;
			$number.placeholder = "Digite o " + show_number + "º valor";
		});
		e.preventDefault();
	}
});
/* Function com o calculo de todos os valores do array */
function square() {
	num_arr.forEach((element) => {
		$total.innerHTML +=
			"Raiz quadrada de:" + element + " é = " + Math.sqrt(element) + "<br>";
		$number.value = "";
		num_arr = [];
		/* Muda o botão de Enviar para resetar os valores */
		$send.textContent = "Novo";
	});
}
