var options = ["clockStyle", "clockSize", "fontFamily", "displaySeconds", "colourMode"];
function readOptions() {

	$("#clockStyle").val(localStorage.getItem('clockStyle'));
	$("#clockSize").val(localStorage.getItem('clockSize'));
	$("#fontFamily").val(localStorage.getItem('fontFamily'));
	//var secondsSwitch = $("#secondsSwitch").val(localStorage.getItem('displaySeconds'));
	var colourSwitch = localStorage.getItem('colourMode');
	//$("#version_num").text(localStorage.getItem('Hextab_version'));

	console.log(colourSwitch);

	if (colourSwitch === false) {
		document.getElementById("colourDark").checked = true;
	}
	else {
		//$("#colourBright").prop("checked", true);
		document.getElementById("colourBright").checked = true;

	}
};

readOptions();

$('button#update').click(function() {
	var new_clockStyle = $("#clockStyle").val();
	var new_clockSize = $("#clockSize").val();
	var new_fontFamily = $("#fontFamily").val();
	var new_displaySeconds = $("input[name=secondsToggle]:checked").val()
	var new_colourMode = $("input[name=colourToggle]:checked").val()
	
	localStorage.setItem('clockStyle', new_clockStyle);
	localStorage.setItem('clockSize', new_clockSize);
	localStorage.setItem('fontFamily', new_fontFamily);
	localStorage.setItem('showSeconds', new_displaySeconds);
	localStorage.setItem('colourMode', new_colourMode);
 	
	$('button#update').addClass('btn-success');
	$('span#savestate-new-ok').removeClass('hidden');
	
	console.log("All set. Have fun :)");

});

$('button#reset').click(function() {
	localStorage.setItem('clockStyle', 'pure');
	localStorage.setItem('clockSize', '150px');
	localStorage.setItem('fontFamily', '');
	localStorage.setItem('displaySeconds', true);
	
	$('button#reset').addClass('btn-success');
	$('span#savestate-def-ok').removeClass('hidden');

	console.log("Done. Back to basics.");
	//Fire Bootstrap alert
});