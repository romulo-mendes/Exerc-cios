var notas = [];
document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault();
});
function send() {
	var $nota = document.querySelector("#nota").value;
	var $mostrar = document.querySelector("#mostrar");
	document.querySelector("#total").innerHTML = "";

	notas.push($nota);
	document.querySelector("#nota").value = "";
	$mostrar.innerHTML = notas;
	document.querySelector("#nota").focus();
}
function calc() {
	var $total = document.querySelector("#total");
	document.querySelector("#nota").value = "";
	document.querySelector("#mostrar").innerHTML = " ";
	var soma = 0;
	for (var i = 0; i < notas.length; i++) {
		soma += parseInt(notas[i]);
	}
	var total = soma / notas.length;
	$total.innerHTML = total;
	notas = [];
}
