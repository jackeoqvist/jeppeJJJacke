var feeling = function(){
	var answer = prompt("Hi say anything something might happen")
	if (answer === "great") {
		document.getElementById("demo").innerHTML = "Greattastic"
	};
	
	if (answer === "date") {
		document.getElementById("demo").innerHTML = Date();
	};
	
	if (answer === "dlc") {
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

	if (answer === "spin") {
		var div = document.getElementById("iframe")
		var iframe = document.createElement('iframe')
	
		iframe.src = "https://www.youtube.com/embed/B-N1yJyrQRY?autoplay=1";
		iframe.width = 500;
		iframe.height = 500;
		iframe.allowfullscreen = true;
		div.appendChild(iframe);
		
				
	};

	if (answer === "bees") {
		var div = document.getElementById("iframe")
		var iframe = document.createElement('iframe')
	
		iframe.src = "https://www.youtube.com/embed/-1GadTfGFvU?autoplay=1";
		iframe.width = 500;
		iframe.height = 500;
		iframe.allowfullscreen = true;
		div.appendChild(iframe);
		
				
	};

	if (answer === "sax") {
		var div = document.getElementById("iframe")
		var iframe = document.createElement('iframe')
	
		iframe.src = "https://www.youtube.com/embed/kxopViU98Xo?autoplay=1";
		iframe.width = 500;
		iframe.height = 500;
		iframe.allowfullscreen = true;
		div.appendChild(iframe);

	};

	if (answer === "rmnt") {
		document.getElementById("demo").innerHTML = "<a href=http://clanremnant.weebly.com/>ReMNanT</a>"
	};

	if (answer === "soup") {
		var div = document.getElementById("iframe")
		var iframe = document.createElement('iframe')
	
		iframe.src = "https://www.youtube.com/embed/4kqbKEqzsAI?autoplay=1";
		iframe.width = 500;
		iframe.height = 500;
		iframe.allowfullscreen = true;
		div.appendChild(iframe);

	};

	if (answer === "blarg") {
		var div = document.getElementById("demo");
		var img = document.createElement('img');

		img.src = 'http://33.media.tumblr.com/tumblr_m9y2vaYRJ81r9yglbo1_r1_500.gif';
  		div.appendChild(img);
	}

	if (answer === "havel") {
		var div = document.getElementById("demo");
		var img = document.createElement('img');

		img.src = 'https://38.media.tumblr.com/b0e9d28cc08fa308b53b951023ad4754/tumblr_n7gaukAhyg1sr72rzo1_400.gif';
  		div.appendChild(img);
	}

	if (answer === "gravity") {
		var gravity = document.createElement("script");
		gravity.src = "http://gravityscript.googlecode.com/svn/trunk/gravityscript.js";
		document.body.appendChild(gravity);
	}

	if (answer === "shake") {
		javascript:(function(){function c(){var e=document.createElement("link");e.setAttribute("type","text/css");e.setAttribute("rel","stylesheet");e.setAttribute("href",f);e.setAttribute("class",l);document.body.appendChild(e)}function h(){var e=document.getElementsByClassName(l);for(var t=0;t<e.length;t++){document.body.removeChild(e[t])}}function p(){var e=document.createElement("div");e.setAttribute("class",a);document.body.appendChild(e);setTimeout(function(){document.body.removeChild(e)},100)}function d(e){return{height:e.offsetHeight,width:e.offsetWidth}}function v(i){var s=d(i);return s.height>e&&s.height<n&&s.width>t&&s.width<r}function m(e){var t=e;var n=0;while(!!t){n+=t.offsetTop;t=t.offsetParent}return n}function g(){var e=document.documentElement;if(!!window.innerWidth){return window.innerHeight}else if(e&&!isNaN(e.clientHeight)){return e.clientHeight}return 0}function y(){if(window.pageYOffset){return window.pageYOffset}return Math.max(document.documentElement.scrollTop,document.body.scrollTop)}function E(e){var t=m(e);return t>=w&&t<=b+w}function S(){var e=document.createElement("audio");e.setAttribute("class",l);e.src=i;e.loop=false;e.addEventListener("canplay",function(){setTimeout(function(){x(k)},500);setTimeout(function(){N();p();for(var e=0;e<O.length;e++){T(O[e])}},15500)},true);e.addEventListener("ended",function(){N();h()},true);e.innerHTML=" <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";document.body.appendChild(e);e.play()}function x(e){e.className+=" "+s+" "+o}function T(e){e.className+=" "+s+" "+u[Math.floor(Math.random()*u.length)]}function N(){var e=document.getElementsByClassName(s);var t=new RegExp("\\b"+s+"\\b");for(var n=0;n<e.length;){e[n].className=e[n].className.replace(t,"")}}var e=30;var t=30;var n=350;var r=350;var i="audio/shake.mp3";var s="mw-harlem_shake_me";var o="im_first";var u=["im_drunk","im_baked","im_trippin","im_blown"];var a="mw-strobe_light";var f="harlem.css";var l="mw_added_css";var b=g();var w=y();var C=document.getElementsByTagName("*");var k=null;for(var L=0;L<C.length;L++){var A=C[L];if(v(A)){if(E(A)){k=A;break}}}if(A===null){console.warn("Could not find a node of the right size. Please try a different page.");return}c();S();var O=[];for(var L=0;L<C.length;L++){var A=C[L];if(v(A)){O.push(A)}}})()
	}
};
