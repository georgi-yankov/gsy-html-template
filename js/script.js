/*==================================================================================================
	SEARCH INPUT
==================================================================================================*/

$(document).ready(function() {

	/* Shows or hides #search-input when click on #search */
	$('#search').click(function(e) {
		$('#search-input').toggle(300);
		e.stopPropagation();
	});
	 
	/* Hides #search-input if click anywhere on the page */
	$('html').click(function() {
		$('#search-input').hide(300);
	});
	
	/* Keeps #search-input shown if write on it */
 	$('#search-input').click(function(e){
		e.stopPropagation();
	});
	
});

/*==================================================================================================
	ROTATOR - changes images on loop
		- Used tutorial: Create Featured Content Slider Using jQuery UI
		- http://webdeveloperplus.com/jquery/featured-content-slider-using-jquery-ui/
==================================================================================================*/

$(document).ready(function(){
	$("#rotator").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 5000, true);
	$("#rotator").hover(
		function() {
			$("#rotator").tabs("rotate", 0, true);
		},
		function() {
			$("#rotator").tabs("rotate", 5000, true);
		}
	);
});