<?php
include_once('funcs.php');

if (isset ( $_GET ['userName'] )) {
	$getUser = $_GET ['userName'];
}
if (isset ( $_GET ['userPassword'] )) {
	$getPass = $_GET ['userPassword'];
}
if (isset ( $_GET ['logout'] )) {
	session_destroy();
	header('Location: http://'.$_SERVER['HTTP_HOST'].'/scweb/login.htm');
	exit;
}


if (doLogin($getUser,$getPass))
{
	session_start();
	$_SESSION['userName'] = $_GET ['userName'];
	header('Location: http://'.$_SERVER['HTTP_HOST'].'/scweb/scweb.php');

}
else {
	session_destroy();
	header('Location: http://'.$_SERVER['HTTP_HOST'].'/scweb/login.htm');
}



?>
