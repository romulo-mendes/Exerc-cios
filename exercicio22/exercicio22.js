var $form = document.querySelector("form");
var $cpf = document.querySelector("#cpf");
var $show = document.querySelector("#show");

$form.addEventListener("submit", (e) => {
	e.preventDefault();
	let cpf = $cpf.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
	$show.innerHTML = "CPF Formatado: " + cpf;
	$cpf.focus();
});
