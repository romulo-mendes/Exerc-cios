var $form = document.querySelector("form");
var $date = document.querySelector("#date");
var $show = document.querySelector("#show");
var $clear = document.querySelector("#clear");

$form.addEventListener("submit", function (e) {
	e.preventDefault();
	var date = $date.value;
	$date.value = "";
	var [year, month, day] = date.split("-");
	$show.innerHTML = "Dia: " + day + "</br>Mês: " + month + "</br>Ano: " + year;
});
$clear.addEventListener("click", function () {
	$date.value = "";
	$show.innerHTML = " ";
	data = " ";
	var [year, month, day] = " ";
});
