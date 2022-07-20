var $show = document.querySelector("#show");
var $light = document.querySelector("#light");

var change = true;
function onOff() {
	if (change === true) {
		$light.src = "/exercicio19/img/lampada-on.jpg";
	} else {
		$light.src = "/exercicio19/img/lampada.jpg";
	}
	change = !change;
}
