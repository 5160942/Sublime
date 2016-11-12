$(document).ready(function() {
	console.log($('#celebs tbody tr:even').length + ' elements');
});

$(document).ready(function() {
	/*var backgroundColor = [];
	backgroundColor = $('#celebs tbody tr:first').css('background-color');
	console.log(backgroundColor);
	$('#celebs tbody tr:even').css('background-color','#D3D3D3');
	backgroundColor = $('#celebs tbody tr:even').css('background-color');
	console.log(backgroundColor);
	$('#celebs tbody tr:even').css('color', 'white');
	$('#celebs tbody tr:even').css({
		'background-color': '#dddddd', 
		'color': '#666666',
		'font-size' : '14px',
		'line-height' : '2.5em'
	});*/
	$('#celebs tbody tr:even').addClass('zebra');
});

$(document).ready(function() {
	$('#news').addClass('zebra');
	$('#news .spoiler').css('font-size','20px');
});
