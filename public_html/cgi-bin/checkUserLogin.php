#!/usr/local/bin/php
<?php
	
	if (!$_POST["user"] || !$_POST["ticket"]) exit('<script> alert("Need user and ticket!"); </script>');
	
	$user=$_POST["user"];
	$ticket=$_POST["ticket"];
	
	$dataBase=mysql_connect("ihomedb.ust.hk","82467","folktopia2016");
	mysql_select_db("82467db");
	
	$userDataSQL=mysql_query("SELECT * FROM `userData` WHERE `user`='".$user."' AND `ticket`='".$ticket."';");
	$userData=mysql_fetch_array($userDataSQL,MYSQL_ASSOC);
	if ($userData["user"]) {
		$time0=time();
		$time1=date("ymdHis",$time0-28800);
		if ($userData["loginT"]>=$time1) {
			mysql_close();
			exit('<script> userComeback("'.$user.'","'.$ticket.'"); </script>');
		}
	}
	
	mysql_close();
	
?>