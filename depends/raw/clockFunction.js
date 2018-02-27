var clockStyle = localStorage.getItem('clockStyle');
var colourMode = localStorage.getItem('colourMode');
var showSeconds = localStorage.getItem('showSeconds');

function pageLoad() {
	var fontFamily = localStorage.getItem('fontFamily');
	var clockSize = localStorage.getItem('clockSize');
	$("h1").css({'font-family' : fontFamily + ', Roboto', 'font-size' : clockSize});
}

function runApp()
{
	var x = 1;  // x = seconds
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	
	if (h<=9) {h = '0'+h}
	if (m<=9) {m = '0'+m}
	if (s<=9) {s = '0'+s}

		var hexCode="#"+h+m+s;
		var divided = "#"+h+":"+m+":"+s;
		var noHex = h+" "+m+" "+s;
	
	//Get settings from local storage...

	//... and apply
	if (clockStyle === 'divided') {
		$("h1.pure-clock").text(divided);
	}

	else if (clockStyle === 'no-hex') {
		$("h1.pure-clock").text(noHex);
	}

	else {
		$("h1.pure-clock").text(hexCode);
	}

	//Background requires pure hex or rgb for colorful
	if (colourMode === 'true') {
		$("body").css("background-color","rgb("+h+"0,"+m+"0,"+s+"0)");
	}

	else {
		$("body").css("background-color",hexCode);
	}

	setTimeout(runApp, x*1000);
}

/*function copyHex() {
	$("hexcode").click().select();
	document.execCommand('Copy');
	console.log("Hex copied!");
}*/

// execute functions
pageLoad();
runApp();

//    For a rainy day
//		$("span#h").text(t),
//		$("span#m").text(s),
//		$("span#s").text(n),