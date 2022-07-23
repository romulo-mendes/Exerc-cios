var $form = document.querySelector("form");
var $text = document.querySelector("#text");

$form.addEventListener("submit", (e) => {
	e.preventDefault();
	assim($text.value);
});

function assim(text) {
	if (text.toLowerCase().includes("assim")) {
		alert("'Assim' encontrado");
	} else {
		alert("'Assim' não encontrado");
	}
}
