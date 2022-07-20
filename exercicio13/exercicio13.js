var $txt = document.querySelector("#txt");
var $show = document.querySelector("#show");
function show(text) {
	text = $txt.value;
	$show.innerHTML = "</br>AIA " + text;
}
