<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'admin');
define('DB_PASSWORD', 'admin');
define('DB_DATABASE', 'task');

$db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);

if(!$db) {
	echo 'Could not connect: ' . mysql_error();
}

/*
$db_selected = mysql_select_db(DB_DATABASE, $db);
if(!$db_selected){
	echo 'Could not use: ' . DB_DATABASE . ': ' . mysql_error();
}
*/

?>