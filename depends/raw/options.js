function readOptions() {

	$("#clockStyle").val(localStorage.getItem('clockStyle'));
	$("#clockSize").val(localStorage.getItem('clockSize'));
	$("#fontFamily").val(localStorage.getItem('fontFamily'));

};

readOptions();

$('button#update').click(function() {
	var new_clockStyle = $("#clockStyle").val();
	var new_clockSize = $("#clockSize").val();
	var new_fontFamily = $("#fontFamily").val();

	//var new_Hextab_version = $.parseJSON('https://simmple-labs.s3.amazonaws.com/hextab/version.json');
	//localStorage.setItem('Hextab_version', 'new_Hextab_version');
	
	localStorage.setItem('clockStyle', new_clockStyle);
	localStorage.setItem('clockSize', new_clockSize);
	localStorage.setItem('fontFamily', new_fontFamily);
	
	console.log("All set. Have fun :)");
	window.close();
	//Fire Bootstrap alert

});$('button#reset').click(function() {
	localStorage.setItem('clockStyle', 'pure');
	localStorage.setItem('clockSize', '100px');
	localStorage.setItem('fontFamily', 'Roboto');
	
	console.log("All set. Have fun :)");
	//Fire Bootstrap alert
});