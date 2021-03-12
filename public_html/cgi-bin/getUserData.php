#!/usr/local/bin/php
<?php
	
	if (!$_POST["user"]) exit;
	if (!$_POST["ticket"]) exit;
	
	$user=$_POST["user"];
	$ticket=$_POST["ticket"];
	$target=$_POST["target"];
	
	$dataBase=mysql_connect("ihomedb.ust.hk","82467","folktopia2016");
	mysql_select_db("82467db");
	
	$userDataSQL=mysql_query("SELECT * FROM `userData` WHERE `user`='".$user."' AND `ticket`='".$ticket."';");
	$userData=mysql_fetch_array($userDataSQL,MYSQL_ASSOC);
	if (!$userData["user"] || ($userData["place"]!="E" && $target!==false)) {
		echo "<script> userLoginInvalid(); </script>";
		mysql_close();
		exit;
	}
	
	$time0=time();
	$time1=date("ymdHis",$time0-28800);
	if ($userData["loginT"]<$time1) {
		echo "<script> userLoginTimeOut(); </script>";
		mysql_close();
		exit;
	}
	
	
	if ($target!==false) {
		
		$targetDataSQL=mysql_query("SELECT * FROM `userData` WHERE `user`='".$target."';");
		$targetData=mysql_fetch_array($targetDataSQL,MYSQL_ASSOC);
		if (!$targetData["user"]) {
			mysql_close();
			echo "<script> getTargetDataFail(); </script>";
			exit;
		}
		
		$user=$target;
		$dataReceiver="getTargetData";
		
	}
	
	require "returnUserData.php";
	mysql_close();
	
	
?>