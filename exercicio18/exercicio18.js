var $form = document.querySelector("form");
var $age = document.querySelector("#age");
var $weight = document.querySelector("#weight");
var $gender = document.querySelector("#gender");
var $show1 = document.querySelector("#show1");
var $show2 = document.querySelector("#show2");
var $show3 = document.querySelector("#show3");
var $show4 = document.querySelector("#show4");

var males = [];
var malesTotal = 0;
var females = [];
var femalesTotal = 0;

$form.addEventListener("submit", function (e) {
	e.preventDefault();
	var gender = $gender.value.toString().toLowerCase();
	if (!$age.value || !$weight.value || !$gender.value) {
		alert("Preencha todos os campos!");
	} else if (gender != "m" && gender != "f") {
		alert("Digite 'M' para masculino ou 'F' para feminino");
	} else if (gender == "m") {
		males.push({
			age: parseInt($age.value),
			wight: parseInt($weight.value),
			gender,
		});
	} else {
		females.push({
			age: parseInt($age.value),
			weight: parseInt($weight.value),
			gender,
		});
	}
	$age.value = "";
	$gender.value = "";
	$weight.value = "";
	$age.focus();
});
function calc() {
	$show1.innerHTML = "Total de homens: " + males.length;
	$show2.innerHTML = "Total de mulheres: " + females.length;
	males.forEach((element) => {
		malesTotal += element.age;
	});
	$show3.innerHTML = "Média de idade dos homens: " + malesTotal / males.length;
	females.forEach((element) => {
		femalesTotal += element.weight;
	});
	$show4.innerHTML = "Média de peso das mulheres: " + femalesTotal / females.length;
}
function clearAll() {
	$show1.innerHTML = "";
	$show2.innerHTML = "";
	$show3.innerHTML = "";
	$show4.innerHTML = "";
	$age.value = "";
	$gender.value = "";
	$weight.value = "";
	$age.focus();
	males = [];
	malesTotal = 0;
	females = [];
	femalesTotal = 0;
}
