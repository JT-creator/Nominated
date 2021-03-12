#!/usr/local/bin/php
<?php
	
	$code=$_POST["ticket"];
	$content=$_POST["content"];
	
	$file=fopen("../Data/Email/".$code.".txt","w");
	fwrite($file,$content);
	fclose($file);
	
?>