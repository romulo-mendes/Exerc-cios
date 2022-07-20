/* Criação de Variáveis */
var $formSearch = document.querySelector("#formSearch");
var $txt = document.querySelector("#txt");
var $ul = document.querySelector("#ul");
var $order = document.querySelector("#order");
var $formAdd = document.querySelector("#formAdd");
var $name = document.querySelector("#name");
var $power = document.querySelector("#power");

var gods = [
	{ name: "Aegir", power: 10 },
	{ name: "Aud", power: 5 },
	{ name: "Balder", power: 7 },
	{ name: "Bragi", power: 4 },
	{ name: "Búri", power: 9 },
	{ name: "Dag", power: 10 },
	{ name: "Dellingr", power: 3 },
];
var godsFiltered = gods;

/* Evento para o select */
$order.addEventListener("change", (e) => {
	reOrderGods();
});
/* Evento de busca */
$formSearch.addEventListener("submit", (e) => {
	e.preventDefault();
	$ul.innerHTML = "";
	var txt = $txt.value.toString().toLowerCase();

	godsFiltered = gods.filter((element) => element.name.toLowerCase().includes(txt));
	reOrderGods();
});
/* Evento de cadastro */
$formAdd.addEventListener("submit", (e) => {
	e.preventDefault();
	if (!$name.value || !$power.value) {
		alert("Preencha os campos antes de continuar");
	} else {
		gods.push({
			name: $name.value,
			power: parseInt($power.value),
		});
		$name.value = "";
		$power.value = "";
	}
	reOrderGods();
});
/* Função de Limpar */
function clearAll() {
	find = [];
	$ul.innerHTML = "";
	$txt.value = "";
	$txt.focus();
}
/* Função para mostrar */
function showGods() {
	$ul.innerHTML = "";
	godsFiltered.forEach((element, index) => {
		var $li = document.createElement("li");
		var $btnDlt = document.createElement("button");
		var $btnEdt = document.createElement("button");
		var $nameEdit = document.createElement("input");
		var $powerEdit = document.createElement("input");
		var $saveEdit = document.createElement("button");
		$li.appendChild(
			document.createTextNode("Nome: " + element.name + " - Poder: " + element.power)
		);
		/* Delete Button */
		$btnDlt.textContent = "Deletar";
		$btnDlt.onclick = function (e) {
			gods.forEach((godElement, godIndex) => {
				if (element.name == godElement.name) {
					gods.splice(godIndex, 1);
				}
			});
			$ul.removeChild($li);
		};
		/* Edit Button */
		$btnEdt.textContent = "Editar";
		$nameEdit.value = element.name;
		$powerEdit.value = element.power;
		$powerEdit.type = "number";
		$saveEdit.textContent = "Salvar";
		$btnEdt.onclick = function (e) {
			$li.innerHTML = "";
			$li.appendChild($nameEdit);
			$li.appendChild($powerEdit);
			$li.appendChild($saveEdit);
		};
		/* Save Button */
		$saveEdit.onclick = function (e) {
			element.name = $nameEdit.value;
			element.power = parseInt($powerEdit.value);
			showGods();
		};

		$li.appendChild($btnEdt);
		$li.appendChild($btnDlt);
		$ul.appendChild($li);
		$txt.value = "";
		$txt.focus();
	});
}
/* Função para ordenar */
function reOrderGods() {
	if ($order.value == "highToLow") {
		godsFiltered.sort((a, b) => b.power - a.power);
	} else if ($order.value == "lowToHigh") {
		godsFiltered.sort((a, b) => a.power - b.power);
	}
	showGods();
}
