var feeling = function(){
	var answer = prompt("Hi say anything something might happen")
	if (answer === "Great") {
		document.getElementById("demo").innerHTML = "Greattastic"
	};
	if (answer === "date") {
		document.getElementById("demo").innerHTML = Date();
	};
};
