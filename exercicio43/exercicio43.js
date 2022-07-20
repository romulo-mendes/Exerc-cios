var $txt = document.querySelector("#txt");
var $ul = document.querySelector("#ul");

var lis = [];
function sendBtn() {
	lis.push($txt.value);
	$ul.innerHTML = "";
	lis.forEach((element, index) => {
		var $li = document.createElement("li");
		console.log(index);
		if (index % 2 === 0) $li.style.backgroundColor = "#777";
		$li.appendChild(document.createTextNode(element));
		$ul.appendChild($li);
	});
	$txt.value = "";
	$txt.focus();
}
