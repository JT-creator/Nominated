#!/usr/local/bin/php
<?php
	
	if (strpos($_SERVER["QUERY_STRING"],"ticket")===false) exit;
	
	$ticket=substr($_SERVER["QUERY_STRING"],7);
	$dataBase=mysql_connect("ihomedb.ust.hk","82467","folktopia2016");
	mysql_select_db("82467db");
	
	$emailDataSQL=mysql_query("SELECT * FROM `emailData` WHERE `ticket`='".$ticket."';");
	$emailData=mysql_fetch_array($emailDataSQL,MYSQL_ASSOC);
	if (!$emailData["ticket"]) {
		mysql_close();
		exit;
	}
	
	echo $emailData["status"];
	mysql_close();
	
	
?>