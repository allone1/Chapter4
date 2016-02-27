// JavaScript Document for Chapter4/Example2
var main = function () {
	"use strict";
	
	var addCommentFromInputBox = function () {
		var $new_comment;
		
		if ($(".comment-input input").val() !== "") {
			$new_comment = $("<p>").text($(".comment-input input").val()); //adds new jquery element p and assigns it value user entered in input field.
			$new_comment.hide();
			$(".comments").append($new_comment);  //appends new comment to comments element
			$new_comment.fadeIn();
			$(".comment-input input").val(""); //clears out the input field text
		
		} 
	};
	
	
	$(".comment-input button").on("click", function (event) {
		addCommentFromInputBox ();			
				
	});
		
	$(".comment-input input").on("keypress", function (event) {
		if (event.keyCode === 13) {
			addCommentFromInputBox ();
				
		}
							
	});
	
};

$(document).ready(main);

   