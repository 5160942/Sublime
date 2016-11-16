$(document).ready(function() {
	$('#celebs tbody tr').hover(function() {
		$(this).addClass('zebraHover');
	}, function() {
			$(this).removeClass('zebraHover');
		}
	);
});


$(document).ready(function() {
	$('#navigation li').hover(function() {
		$(this).animate({paddingLeft: '+15px'}, 200, 'linear');
	},	function() {
			$(this).animate({paddingLeft: '-15px'},200, 'swing');
		}
	);
});

$(document).ready(function() {
  $('p:first')
	.hide()
	.slideDown('slow')


	$('<div id="navigation_blob"></div>').css({
width: $('#navigation li:first a').width() + 10,
height: $('#navigation li:first a').height() + 10
}).appendTo('#navigation');



});
