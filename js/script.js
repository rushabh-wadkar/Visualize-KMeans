
function checkornotfunc(){
	var el = document.getElementById('ViewMoreSwitch');
	if(el.checked){
		$('#moreKnowledge').show();
	} else {
		$('#moreKnowledge').hide();
	}
}

function visualize(){
	$('#controller').css("-webkit-filter", "blur(2px)");
	$('#controller').css("filter", "blur(2px)");

	$('.opt').attr('disabled', true);
	$('#visualizeBtn').attr('disabled', true);
}
