var feeling = function(){
	var answer = prompt("Hi say anything something might happen")
	if (answer === "great") {
		document.getElementById("demo").innerHTML = "Greattastic"
	};
	
	if (answer === "date") {
		document.getElementById("demo").innerHTML = Date();
	};
	
	if (answer === "DLC") {
		var div = document.getElementById("demo");
		var img = document.createElement('img');

		img.src = 'http://www.gametrailers.com/side-mission/files/2012/05/ea_money.jpg';
  		div.appendChild(img);
	}

	if (answer === "mario party") {
		var div = document.getElementById("demo");
		var img = document.createElement('img');

		img.src = 'http://upload.inven.co.kr/upload/2014/11/25/bbs/i0904982209.gif';
  		div.appendChild(img);
	}
};