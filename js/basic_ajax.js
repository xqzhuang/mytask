$(document).ready(function(){
	$(".btn-login").click(function(){
		var username = $(".user").val();
		var password = $(".pass").val();

		if(username == ""){
			$(".error").text("Please Enter Username");
			return false;
		}
		else if(password == ""){
			$(".error").text("Please Enter Password");
			return false;
		}
		else{
			$(".form-login").submit( function(event) {			
			
				// Stop form from submitting normally
				event.preventDefault();	
				
				// setup some local variables
				var $form = $(this);

				var $inputs = $form.find("input,button");
				var url = $form.attr( "action" );

				// Serialize the data in the form
				var serializedData = $form.serialize();
				
				// Fire off the request to /login.php
				request = $.ajax({
					url: "login.php",
					type: "post",
					data: serializedData,
					success: function() { 
						alert("succcess");}
				});		

				// Callback handler that will be called on success
				request.done(function (response, textStatus, jqXHR){
				
					// Log a message to the console
					$(".error").text(response);
				});

				// Callback handler that will be called on failure
				request.fail(function (jqXHR, textStatus, errorThrown){
					// Log the error to the console
					$(".error").text(
						"The following error occurred: "+
						textStatus, errorThrown
					);
				});

				// Callback handler that will be called regardless
				// if the request failed or succeeded
				request.always(function () {
					// Reenable the inputs
					$inputs.prop("disabled", false);
				});		
			});
		}
	});
});