// Check off Items by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Text Input
$("input").keypress(function(event){
	if (event.which == 13){
		var todoTask = $(this).val();
		$("input").val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoTask + "</li>");
	}
});

// Click X and delete todo task
$("ul").on("click", "li span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$(".fa-plus").click(function(){
	$("input").fadeToggle(500);
});