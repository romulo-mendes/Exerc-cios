var $form = document.querySelector("form");
var $age = document.querySelector("#age");
var $grade = document.querySelector("#grade");
var $show1 = document.querySelector("#show1");
var $show2 = document.querySelector("#show2");
var $show3 = document.querySelector("#show3");
var $calcBtn = document.querySelector("#calcBtn");

var views = [];
var ageA = 0;
var ageAc = 0;
var ageT = 0;
var ageP = 0;
var y = 0;

$form.addEventListener("submit", function (e) {
	e.preventDefault();
	let grade = parseInt($grade.value);
	if (!$age.value || !$grade.value) {
		alert("Preencha todos os campos");
	} else if (grade < 1 || grade > 3) {
		alert("A nota precisa ser entre 1 e 3, sendo 1-regular, 2-bom, 3-ótimo");
	} else if (views.length > 14) {
		alert("Número de espectadores, clique em 'Calcular'");
	} else {
		views.push({ age: $age.value, grade: $grade.value });
		$age.value = "";
		$grade.value = "";
		$age.focus();
		if (views.length == 15) {
			$calcBtn.disabled = false;
		}
	}
});
function calc() {
	views.forEach((element) => {
		if (element.grade == 3) {
			ageA += parseInt(element.age);
			ageAc += 1;
		} else if (element.grade == 1) {
			ageT += 1;
		} else if (element.grade == 2) {
			ageP += 1;
		}
	});
	y = (ageP * 100) / views.length;
	$show1.innerHTML =
		"A média de idade das pessoas que responderam 'ótimo' foi: " +
		(ageA / ageAc).toFixed(2);
	$show2.innerHTML =
		"A quantidade de pessoas que responderam regular' foi: " + ageT.toFixed(2);
	$show3.innerHTML =
		"A porcentagem de pessoas que responderam 'bom' foi: " + y.toFixed(2) + "%";
}

function clearAll() {
	$show1.innerHTML = "";
	$show2.innerHTML = "";
	$show3.innerHTML = "";
	views = [];
	ageA = 0;
	ageAc = 0;
	ageT = 0;
	ageP = 0;
	y = 0;
	$age.value = "";
	$grade.value = "";
}
