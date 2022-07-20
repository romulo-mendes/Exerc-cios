var people = [];
var males = [];
var females = [];
var totalF = 0;
var $form = document.querySelector("form");
var $height = document.querySelector("#height");
var $gender = document.querySelector("#gender");
var $highLow = document.querySelector("#high-low");
var $averageF = document.querySelector("#averageF");
var $numberM = document.querySelector("#numberM");
var $clear_btn = document.querySelector("#clear");

$form.addEventListener("submit", function (e) {
	e.preventDefault();
	var height = parseInt($height.value);
	var gender = $gender.value.toString().toLowerCase();
	if (gender != "m" && gender != "f") {
		alert("Preencha o sexo com 'M' ou 'F'!");
	} else if (!$gender.value || !$height.value) {
		alert("Preencha todos os campos antes de continuar!");
	} else if (people.length <= 15) {
		var dados = { gender: gender == "m" ? "Masculino" : "Feminino", height };
		people.push(dados);
		people.sort((a, b) => b.height - a.height);
		$highLow.innerHTML =
			"<h3>Maior altura: </h3>" +
			people[0].height +
			"<br><h3>Menor altura: </h3>" +
			people[people.length - 1].height;
		males = people.filter((element) => element.gender === "Masculino").length;
		females = people.filter((element) => element.gender === "Feminino");
		females.forEach((element) => {
			totalF += element.height;
		});
		totalF = totalF / females.length;
		$averageF.innerHTML = "<h3>Média de altura das mulheres: </h3>" + totalF;

		if (males > 0) {
			$numberM.innerHTML = "<h3>Número de homens: </h3>" + males;
		}
		$gender.value = "";
		$height.value = "";
		$height.focus();
	} else {
		alert("Todos os valores foram digitados");
	}
});
$clear_btn.addEventListener("click", function () {
	$gender.value = "";
	$height.value = "";
	$highLow.innerHTML = "";
	$averageF.innerHTML = "";
	people = [];
	males = [];
	females = [];
	totalF = 0;
	$numberM.innerHTML = "";
	$height.focus();
});
