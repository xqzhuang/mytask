<?php
	class User {
		private $username;
		private $password;
				
		public function getUsername(){
			return $this->username;
		}		
		
		public function getPassword(){
			return $this->password;
		}	

		public function setUsername($username){
			$this->username = $username;
		}		
		
		public function setPassword($password){
			$this->password = $password;
		}
		
		// If javascript is disabled in browser, we will do validation here.
		public function validate(){
			if(empty($this->username)){
				echo "User name is mandatory - from PHP";
				exit();
			}
			else if(empty($this->password)){
				echo "Password is mandatory - from PHP";
				exit();						
			}
		}
	}
?>