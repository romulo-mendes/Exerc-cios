var $resultado = document.querySelector("#resultado");
var repeticao = Array(5).fill("Repetição");
$resultado.innerHTML = "Manual: Repetição";
$resultado.innerHTML += "<br>Manual: Repetição";

for (let index = 0; index < 20; index++) {
	$resultado.innerHTML += "<br>For: Repetição";
}
repeticao.forEach((element) => {
	$resultado.innerHTML += "<br>ForEach: " + element;
});
var x = 0;
while (x < 5) {
	$resultado.innerHTML += "<br>While: Repetição";
	x++;
}
var n = 0;
do {
	n++;
	$resultado.innerHTML += "<br>DoWhile: Repetição";
} while (n < 5);
