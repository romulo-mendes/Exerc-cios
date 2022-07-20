var $show = document.querySelector("#show");
var deuses = ["Aegir", "Aud", "Balder"];
deuses.push("Loki", "Odin", "Frey");
deuses.forEach((element) => {
	$show.innerHTML += element + "<br>";
});
