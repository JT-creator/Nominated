<?php
	
	if (empty($_SERVER["QUERY_STRING"])) exit;
	$userP=strpos($_SERVER["QUERY_STRING"],"user=");
	$userCodeP=strpos($_SERVER["QUERY_STRING"],"userCode=");
	$ticketLP=strpos($_SERVER["QUERY_STRING"],"ticketL=");
	$ticketP=strpos($_SERVER["QUERY_STRING"],"ticket=");
	if ($userP===false) exit;
	if ($userCodeP===false) exit;
	if ($ticketLP===false) exit;
	if ($ticketP===false) exit;
	
	$user=substr($_SERVER["QUERY_STRING"],$userP+5,$userCodeP-$userP-6);
	$userCode=substr($_SERVER["QUERY_STRING"],$userCodeP+9,$ticketLP-$userCodeP-10);
	$ticketL=substr($_SERVER["QUERY_STRING"],$ticketLP+8,$ticketP-$ticketLP-9);
	$ticket=substr($_SERVER["QUERY_STRING"],$ticketP+7,32);
	
	if ($ticketL=="NULL") {
		$data=fopen("Data/User/".$ticket.".xml","a");
		fwrite($data,'<?xml version="1.0" encoding="UTF-8" ?>
<data
	userCode="'.$userCode.'">
	
</data>');
	} else {
		rename("Data/User/".$ticketL.".xml","Data/User/".$ticket.".xml");
	}
	
	echo "<script> location.href='http://127.0.0.1:88/CFASWebsite/loginCookie.php?user=".$user."&ticket=".$ticket."' </script>";
	
?>