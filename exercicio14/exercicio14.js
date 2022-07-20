var $num = document.querySelector("#number");
var $form = document.querySelector("form");
var $show = document.querySelector("#show");

$form.addEventListener("submit", function (e) {
	e.preventDefault();
	$show.innerHTML = "";
	for (let i = 0; i <= parseInt($num.value); i++) {
		if (i === parseInt($num.value)) {
			$show.innerHTML += i;
		} else {
			$show.innerHTML += i + ", ";
		}
	}
	$num.value = "";
	$num.focus();
});
