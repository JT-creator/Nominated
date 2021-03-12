<?php
	
	if (empty($_SERVER["QUERY_STRING"])) exit;
	$userP=strpos($_SERVER["QUERY_STRING"],"user");
	$ticketP=strpos($_SERVER["QUERY_STRING"],"ticket");
	if ($userP===false) exit;
	if ($ticketP===false) exit;
	
	$user=substr($_SERVER["QUERY_STRING"],$userP+5,$ticketP-$userP-6);
	$ticket=substr($_SERVER["QUERY_STRING"],$ticketP+7,32);
	
	$time=time();
	setcookie("user",$user,$time+7200);
	setcookie("ticket",$ticket,$time+7200);
	
?>