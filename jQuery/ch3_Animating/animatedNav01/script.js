$(document).ready(function() {
  $('<li><a heref="#">Careers</a></li>').appendTo('#innerNavigation');
  $('<input type="Button" value="hide" id="toggleButton">').insertAfter("#intro");
  $('#toggleButton').click(function() {
  	 $('p:first').toggle().effect('shake', {times:3}, 300).effect('highlight', {}, 3000).hide('explode', {}, 1000); 
 	 if($('p:first').is(':visible')) {
  		$(this).val("hide");
 	 } else {
 	 	$(this).val("show");
 	 }
  });

});
