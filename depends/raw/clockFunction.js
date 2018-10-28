
var clockStyle = localStorage.getItem('clockStyle');
function pageLoad() {
	var clockFont = localStorage.getItem('clockFont');
	var clockSize = localStorage.getItem('clockSize');
	$("h1").css({'font-family' : clockFont + ', Roboto', 'font-size' : clockSize});
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
	switch (clockStyle) {
		case clockStyle = 'styled':
			$("h1.clock").text(divided);
			break;

		case clockStyle = 'clean':
			$("h1.clock").text(noHex);
			break;

		case clockStyle = 'hex':
			$("h1.clock").text("#"+h+m+s);
			break;

		default:
		$("h1.clock").text(hexCode);
	}

	$("body").css("background-color","#"+h+m+s);

	setTimeout(runApp, x*1000);


// End op App
}


// execute functions
pageLoad();
runApp();

/*    For a rainy day

function copyHex() {
	navigator.clipboard.write("hexCode").then(function() {
		console.log('Hex code copied!');
	}, function(err) {
		console.error('Hextab: Could not copy text: ', err);
	});
};

*/
