var $resultado = document.querySelector("#resultado");

for (let index = 0; index <= 10; index++) {
	$resultado.innerHTML += "<br>" + index;
}

for (let index = 0; index <= 20; index++) {
	if (index % 2 == 0) {
		$resultado.innerHTML += "<br>" + index;
	}
}
