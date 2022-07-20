var $form = document.querySelector("form");
var $cpf = document.querySelector("#cpf");
var $show = document.querySelector("#show");

$form.addEventListener("submit", (e) => {
	e.preventDefault();
	let cpf = $cpf.value.replace(/[^\d]/g, "");
	$show.innerHTML = "CPF Formatado: " + cpf;
	$cpf.focus();
});
