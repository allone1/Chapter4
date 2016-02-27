// JavaScript Document for Chapter4/Example2
var main = function () {
	"use strict";
		
	$(".comment-input button").on("click", function (event) {
		var $new_comment;
		
		if ($(".comment-input input").val() !== "") {
			$new_comment = $("<p>").text($(".comment-input input").val()); //adds new jquery element p and assigns it value user entered in input field.
			$(".comments").append($new_comment);  //appends new comment to comments element
			$(".comment-input input").val(""); //clears out the input field text
		} 
		
		
	});
	
	$(".comment-input input").on("keypress", function (event) {
		var $new_comment;
		
		if (event.keyCode === 13) {
		
			if	($(".comment-input input").val() !== "") {
				$new_comment = $("<p>").text($(".comment-input input").val()); //adds new jquery element p and assigns it value user entered in input field.
				$(".comments").append($new_comment);  //appends new comment to comments element
				$(".comment-input input").val(""); //clears out the input field text
			}
		}
		
	});
	
};

$(document).ready(main);

   