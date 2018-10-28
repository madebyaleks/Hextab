
$.notifyDefaults({
	type: 'success',
	delay: '2000',
	placement: {
		align: "center"
	},
});

function readOptions() {

	var firstRun = localStorage.getItem('firstRun');

 if (firstRun !== null) {

	 $("#clockStyle").val(localStorage.getItem('clockStyle'));
	 $("#clockSize").val(localStorage.getItem('clockSize'));
	 $("#clockFont").attr("placeholder", localStorage.getItem('clockFont'));

 } else {
	 localStorage.setItem('clockStyle', 'hex');
	 localStorage.setItem('clockSize', '19em');
	 localStorage.setItem('clockFont', 'Roboto');
	 localStorage.setItem('firstRun', 'false');
	 $("#clockStyle").val('hex');
	 $("#clockSize").val('11em');
	 $("#clockFont").attr("placeholder", "Roboto");
 }
}

readOptions();

$('button#btn-save').click(function() {
	var new_clockStyle = $("#clockStyle").val();
	var new_clockSize = $("#clockSize").val();
	var new_clockFont = $("#clockFont").val();

	localStorage.setItem('clockStyle', new_clockStyle);
	localStorage.setItem('clockSize', new_clockSize);
	localStorage.setItem('clockFont', new_clockFont);

	$.notify('<strong>Gotcha!</strong> We saved your preferences');

});

$('button#btn-reset').click(function() {
	localStorage.setItem('clockStyle', 'hex');
	localStorage.setItem('clockSize', '11em');
	localStorage.setItem('clockFont', 'Roboto');

	$.notify('<strong>Done!</strong> Default it is.');
});
