var $nomes = document.querySelector("#nomes");
var deuses = ["Aegir", "Aud", "Balder", "Bragi", "Búri", "Dag", "Dellingr"];
deuses.forEach((element) => {
	$nomes.innerHTML += "<li>" + element + "</li>";
});
