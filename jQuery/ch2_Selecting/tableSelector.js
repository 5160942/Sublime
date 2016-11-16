$(document).ready(function() {
	console.log($('#celebs tbody tr:even').length + ' elements');
});


$(document).ready(function() {
	$('#news').addClass('zebra');
	$('#news .spoiler').css('font-size','20px');
});

/*
$(document).ready(function() {
	$('#toggleButton').click(function() {
		$('#disclaimer').toggle();
		if($('#disclaimer').is(':visible')){
			$(this).val('Hide');
		} else {
			$(this).val('Show');
		}
	});
});
*/
$(document).ready(function() {
	$('<p>A New Paragrap from jquery!!</p>').addClass('new').insertAfter('#footer');
	$('<input type="button" value="Hide" id="toggleButton">').insertAfter("#disclaimer");
	$('#toggleButton').click(function() {
		$('#disclaimer').slideToggle(function () {
			alert('finished slidetoggling');
		});
		if($('#disclaimer').is(':visible')) {
			$(this).val("Hide");
		} else {
			$(this).val("Show");
		}
	});
	$('<strong>START!</strong>').prependTo('#disclaimer');
	$('<strong>END!</strong>').appendTo('#disclaimer');
	
});

$(document).ready(function() {
	$('#no-script').remove();
	$('#celebs tr').remove(':contains("DJ")');
	$('#celebtitle').html('good bye, cruel paragraphs!');
})

$(document).ready(function() {
	$('#celebs tbody tr:even').addClass('zebra');
	$('#celebs tbody tr').mouseover(function(){
		$(this).addClass('zebraHover');
	});
	$('#celebs tbody tr').mouseout(function(){
		$(this).removeClass('zebraHover');
	});
});