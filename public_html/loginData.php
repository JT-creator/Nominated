<?php
	
	if (empty($_SERVER["QUERY_STRING"])) exit;
	$userP=strpos($_SERVER["QUERY_STRING"],"user=");
	$dataStrP=strpos($_SERVER["QUERY_STRING"],"data=");
	$ticketLP=strpos($_SERVER["QUERY_STRING"],"ticketL=");
	$ticketP=strpos($_SERVER["QUERY_STRING"],"ticket=");
	if ($userP===false) exit;
	if ($dataStrP===false) exit;
	if ($ticketLP===false) exit;
	if ($ticketP===false) exit;
	
	$user=substr($_SERVER["QUERY_STRING"],$userP+5,$dataStrP-$userP-6);
	$dataStr=substr($_SERVER["QUERY_STRING"],$dataStrP+8,$ticketLP-$dataStrP-9);
	$ticketL=substr($_SERVER["QUERY_STRING"],$ticketLP+8,$ticketP-$ticketLP-9);
	$ticket=substr($_SERVER["QUERY_STRING"],$ticketP+7,32);
	
	unlink("Data/User/".$ticketL.".xml");
	$dataStr=str_replace("%22",'"',$dataStr);
	$dataStr=str_replace("%20",' ',$dataStr);
	$xmlDoc=fopen("Data/User/".$ticket.".xml","w");
	fwrite($xmlDoc,'<?xml version="1.0" encoding="UTF-8" ?> <data '.$dataStr.' />');
	fclose($xmlDoc);
	
	$time=time();
	setcookie("user",$user,$time+7200);
	setcookie("ticket",$ticket,$time+7200);
	
?>