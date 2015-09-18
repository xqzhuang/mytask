$(document).ready(function(){
	$(".btn-login").click(function(){
		var username = $(".user").val();
		var password = $(".pass").val();

		// Check if username or password is empty 
		if(username == ""){
			$(".result").empty();
			$(".error").text("Please Enter Username");
			return false;
		}
		else if(password == ""){
			$(".result").empty();
			$(".error").text("Please Enter Password");
			return false;
		}
		else{
			$(".form-login").submit( function(event) {			
			
				// Stop form from submitting normally
				event.preventDefault();	
				
				// Setup some local variables
				var $form = $(this);

				var url = $form.attr( "action" );

				// Serialize the data in the form
				var serializedData = $form.serialize();
				
				// Send the data using post, it's a shorthand Ajax function
				var posting = $.post( url, serializedData );
				
				posting.done(function( data ) {
					$(".error").empty();
					$(".result").text(data);
					alert(data);
				})
				.fail(function (data){
					// Log the error to the page
					$(".error").text("The following error occurred: " + data);
				})
			});
		}
	});
});
