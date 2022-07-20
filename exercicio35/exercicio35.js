var $show = document.querySelector("#show");
var deuses = ["Aegir", "Aud", "Balder"];

$show.innerHTML = deuses.length + "<br>";
deuses.forEach((element) => {
	$show.innerHTML += element + " tem " + element.length + " de comprimento.<br>";
});
