var $form = document.querySelector("form");
var $higherAge = document.querySelector("#higherAge");
var $lowerAge = document.querySelector("#lowerAge");
var $age = document.querySelector("#age");
var $clear_btn = document.querySelector("#clear")
var agesH = [];
var agesL = [];

$form.addEventListener("submit", function (e) {
	if ($age.value === "") {
		alert("Preencha o campo antes de continuar");
		e.preventDefault();
	} else if (parseInt($age.value) >= 18) {
		agesH.push(parseInt($age.value));
		$higherAge.innerHTML =
			"Existe(m) " + agesH.length + " maior de idade: <br>" + agesH;
		$age.value = "";
		console.log(agesH);
		e.preventDefault();
	} else {
		agesL.push(parseInt($age.value));
		$lowerAge.innerHTML =
			"Existe(m) " + agesL.length + " maior de idade: <br>" + agesL;
		$age.value = "";
		e.preventDefault();
	}
});
$clear_btn.addEventListener("click", function(){
	$higherAge.innerHTML = ""
	$lowerAge.innerHTML = ""
	agesH=[]
	agesL=[]
})
