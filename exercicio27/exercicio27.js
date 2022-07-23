var $form = document.querySelector("form");
var $year = document.querySelector("#year");
var $show = document.querySelector("#show");
var date = new Date();
var yearNow = date.getFullYear();
var age = 0;

$form.addEventListener("submit", (e) => {
	e.preventDefault();
	getAge($year.value);
	$show.innerHTML = overUnder(age);
	$year.value = "";
	$year.focus();
});
function getAge(year) {
	age = yearNow - year;
}
function overUnder(age) {
	if (age < 18) {
		return "Menor de idade";
	} else if (age >= 18) {
		return "Maior de idade";
	}
}
