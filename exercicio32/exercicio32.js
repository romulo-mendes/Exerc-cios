function chkSort() {
	var sort = Math.round(Math.random());
	var num = parseInt(document.querySelector("#num").value);
	console.log(sort);
	if (sort == num) {
		alert("Você acertou!");
	} else {
		alert("Você errou!");
	}
}
