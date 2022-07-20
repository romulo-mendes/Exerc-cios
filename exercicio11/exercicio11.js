var $main = document.querySelector("#txtMain");
var $all = document.querySelectorAll("textarea");

$all.forEach((element) => {
	element.addEventListener("click", function () {
		if ($main !== document.activeElement) {
			alert("Perdeu o foco");
		}
	});
});
