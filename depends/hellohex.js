
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
	localStorage.setItem('Hextab_version', '2.0');
	localStorage.setItem('clockStyle', 'pure');
	localStorage.setItem('fontFamily', 'Helvetica');
	console.log("All set.");
}

if (storageAvailable('localStorage')) {
	setDefaults();
}
else {
	alert("Your browser does not support localStorage, so you can't customize the clock :(");
}