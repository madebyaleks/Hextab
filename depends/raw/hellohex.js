
function storageAvailable(type) {
	try {
		var storage = window[type],
			x = 'Storage test';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}

function setDefaults()
{
	localStorage.setItem('Hextab_version', '1.0');
	localStorage.setItem('clockStyle', 'pure');
	localStorage.setItem('clockSize', '120px');
	localStorage.setItem('fontFamily', 'Roboto');
	console.log("All set. Have fun :)");
}

if (storageAvailable('localStorage')) {
	setDefaults();
}
else {
	alert("Your browser does not support localStorage, so you can't customize the clock :(");
	console.log("Note: localStorage API either disabled or unsupported. You're stuck with the defaults bro.");
}

/*function currentSettings() {

var currentTypeface = localStorage.getItem('fontFamily');
var currentTypeface = localStorage.getItem('clockStyle');

	$("input.fontFamily").text(currentTypeface);
	$("select.clockStyle").text(currentTypeface);

}*/