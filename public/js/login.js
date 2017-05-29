/*
$(document).ready(function(){

	// Animation
	$("#login-button").click(function(event){
		event.preventDefault();
		 
		 //$('form').fadeOut(500);
		 //$('.wrapper').addClass('form-success');

		 var data {
	 		uname: $('#uname').val(),
	 		pass: $('#pass').val(),
	 	}

	 	//Send Ajax
	 	$.ajax({
	 		url: "/login",
	 		type: "POST",
	 		data: {data: data},
	 		error: function(error){
	 			//window.location('/');
	 		}
	 	});

	});

});

*/



$(document).ready(function(){
	
	//Fire ajax call to the server here
	$('#log').submit(function(e){
		e.preventDefault();

		var data = {
	 		uname: $('#uname').val(),
	 		pass: $('#pass').val(),
	 	}

		if ($('#uname').val() === "admin" && $('#pass').val() === "admin") {


			$.ajax({
			url: '/login',
			method: 'POST',
			data: {data: data},
			error: function(error){
				console.log(error);
			},
			success: function(data){
				window.location.href = "http://localhost:3000/admin";
			}
		});

		} else {
			//return false;
			window.location.href = "http://localhost:3000/";
		}

	});

});