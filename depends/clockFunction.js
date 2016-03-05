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
		var spaced = "#"+h+" "+m+" "+s;
	
	//Get settings from local storage...
	var clockStyle = localStorage.getItem('clockStyle');
	var fontFamily = localStorage.getItem('fontFamily');

	//... and apply
	if (clockStyle === 'fancy') {
		$("h1.pure-clock").text(spaced);
	}

	else {
		$("h1.pure-clock").text(hexCode);
	}

	//Background requires pure hex
	$("body").css("background-color",hexCode);
	$("h1").css("font-family",fontFamily);

	setTimeout(runApp, x*1000);
}

runApp(); // execute function

//    For a rainy day
//		$("span#h").text(t),
//		$("span#m").text(s),
//		$("span#s").text(n),