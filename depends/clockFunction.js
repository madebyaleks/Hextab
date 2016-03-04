function getTime()
{
  x = 1;  // x = seconds
 	var d = new Date();
 	var h = d.getHours();
 	var m = d.getMinutes();
 	var s = d.getSeconds();
 	
 	if (h<=9) {h = '0'+h};
 	if (m<=9) {m = '0'+m};
	if (s<=9) {s = '0'+s};
	
		var hexCode="#"+h+m+s;
		var spaced = "#"+h+" "+m+" "+s;

		$("body").css("background-color",hexCode),
		//$("span#h").text(t),
		//$("span#m").text(s),
		//$("span#s").text(n),

		//Pure hex
		$("h1.pure-clock").text(hexCode);

    setTimeout(getTime, x*1000);
}
  
getTime(); // execute function