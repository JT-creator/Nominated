#!/usr/local/bin/php
<?php
	
	$dataBase=mysql_connect("ihomedb.ust.hk","82467","cfas2016")
		or die("Could not connect : ".mysql_error());
	mysql_select_db("82467db");
	
	$keyWord=$_POST["ticket"];
	$checkStr=mysql_query("SELECT * FROM `loginList` WHERE `key`='".$keyWord."';");
	$check=mysql_fetch_array($checkStr,MYSQL_ASSOC);
	if ($check["user"]!=$_POST["user"]) exit;
	
	$str="UPDATE `userData` SET ";
	$wStart=true;
	foreach ($_POST as $data=>$value) {
		if ($data=="user" || $data=="ticket") continue;
		if (!$wStart) {
			$str.=",";
		} else {
			$wStart=false;
		}
		$str.="`".$data."`='".$value."'";
	}
	$str.=" WHERE `user`='".$_POST["user"]."';";
	echo $str;
	mysql_query($str);
	
	mysql_close();
	
?>