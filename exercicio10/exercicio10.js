var $box = document.querySelectorAll(".box");
console.log($box);
$box.forEach((element) => {
	element.addEventListener("click", function () {
		element.classList.toggle("phide");
	});
});
