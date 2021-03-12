#!/usr/local/bin/php
<?php
	
	$dataBase=mysql_connect("ihomedb.ust.hk","82467","cfas2016")
		or die("Could not connect : ".mysql_error());
	mysql_select_db("82467db");
	
	$date=date("YmdHis",time()-7200);
	mysql_query("DELETE FROM `loginList` WHERE `time`<".$date.";");
	
	mysql_close();
	
?>