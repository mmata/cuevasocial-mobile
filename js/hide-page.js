$(document).ready(function() {
	document.body.className += " js";
	$(".content").hide();
});
$(window).load(function() {
	$(".content").fadeIn("slow");
}); 