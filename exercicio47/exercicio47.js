var $clock = document.querySelector("#clock");
setInterval(() => {
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	$clock.textContent =
		hour +
		":" +
		minute.toString().padStart(2, "0") +
		":" +
		second.toString().padStart(2, "0");
}, 1000);
