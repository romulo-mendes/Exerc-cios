var people = [];
			var males = [];
			var females = [];
			var $form = document.querySelector("form");
			var $height = document.querySelector("#height");
			var $gender = document.querySelector("#gender");
			var $male = document.querySelector("#male");
			var $female = document.querySelector("#female");
			var $higher = document.querySelector("#higher");
			var $clear_btn = document.querySelector("#clear");

			$form.addEventListener("submit", function (e) {
				e.preventDefault();
				var height = parseInt($height.value);
				var gender = $gender.value.toString().toLowerCase();
				if (!gender === "m" || !gender === "f") {
					alert("Preencha o sexo com 'M' ou 'F'!");
				} else if (!$gender.value || !$height.value) {
					alert("Preencha todos os campos antes de continuar!");
				} else if (people.length <= 4) {
					var dados = { gender: gender == "m" ? "Masculino" : "Feminino", height };
					people.push(dados);
					males = people.filter((element) => element.gender === "Masculino").length;
					$male.innerHTML = "<h3>Masculino:</h3>" + males;
					females = people.filter((element) => element.gender === "Feminino").length;
					$female.innerHTML = "<h3>Feminino:</h3>" + females;
					people.sort((a, b) => b.height - a.height);
					console.log(people);
					$higher.innerHTML =
						"<h3>Maior pessoa:</h3>Sexo:" +
						people[0].gender +
						"<br>Altura:" +
						people[0].height +
						"cm";
					$gender.value = "";
					$height.value = "";
				} else {
					alert("Todos os valores foram digitados");
				}
			});
			$clear_btn.addEventListener("click", function () {
				$male.innerHTML = "";
				$female.innerHTML = "";
				people = [];
				males = [];
				females = [];
				$higher.innerHTML = "";
			});