<?php
	include "user.php";
	include_once "config/config.php";
	
	// object of user
	$user = new User;
	
	if($_SERVER["REQUEST_METHOD"] == "POST"){

		$username = mysqli_real_escape_string($db,$_POST['username']); 
		$password = mysqli_real_escape_string($db,$_POST['password']); 
		
		$user->setUsername($username);
		$user->setPassword($password);
		
		//validation in server side
		$user->validate();
		
		$sql = "SELECT id FROM user WHERE username='$username' and password='$password'";
		$result = mysqli_query($db,$sql);
		$row = mysqli_fetch_array($result,MYSQLI_ASSOC);

		$count = mysqli_num_rows($result);

		if($count == 1){
			echo "Login succeed!";
		}
		else
		{
			echo "User is not existed!";
		}
	}
?>