var $form = document.querySelector("form");
var $name = document.querySelector("#name");
var $show = document.querySelector("#show");
var $clear = document.querySelector("#clear");
var names = [];

$form.addEventListener("submit", function (e) {
	e.preventDefault();
	names.unshift($name.value);
	$name.value = "";
	$show.innerHTML = "<h3>Nomes:</h3>" + names;
});

$clear.addEventListener("click", function () {
	$name.value = "";
	$show.innerHTML = "";
	names = [];
});
