var $txt = document.querySelector("#txt");
var $show = document.querySelector("#show");
var lis = [];
function sendBtn() {
	lis.push($txt.value);
	$show.innerHTML = "";
	lis.forEach((element) => {
		$show.innerHTML += "<li>" + element + "</li>";
	});
	$txt.value = "";
	$txt.focus();
}
