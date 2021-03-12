#!/usr/local/bin/php
<?php
	
	if (!$_POST["ticket"]) exit;
	
	$ticket=substr($_POST["ticket"],0,32);
	
	$dataBase=mysql_connect("ihomedb.ust.hk","82467","folktopia2016");
	mysql_select_db("82467db");
	
	$emailDataSQL=mysql_query("SELECT * from `emailData` WHERE `ticket`='".$ticket."';");
	$emailData=mysql_fetch_array($emailDataSQL,MYSQL_ASSOC);
	if (!$emailData["ticket"] || $emailData["status"]!='b') {
		echo "wrong";
		mysql_close();
		exit;
	}
	
	mysql_query("UPDATE `emailData` SET `status`='w' WHERE `ticket`='".$ticket."';");
	
	
	$file=file_get_contents("../Data/Email/".md5($ticket."a3d3g3j3l3").".txt");
	
	$addressS=strpos($file,"<2sdw81hs>")+10;
	$addressE=strpos($file,"</2sdw81hs>");
	echo substr($file,0,$addressS);
	
	$addressStr=substr($file,$addressS,$addressE-$addressS);
	$addressList=array();
	for (;$addressStr;$addressStr=substr($addressStr,$p+1)) {
		$p=strpos($addressStr,"|");
		$address=substr($addressStr,0,$p);
		if (strpos($address,"@")!==false && !$addressList[$address]) {
			$addressList[$address]=true;
			echo $address."|";
			continue;
		}
		if (strpos($address,"allUser")===0) $listSQL=mysql_query("SELECT * FROM `userData`");
		if (strpos($address,"allMember")===0) $listSQL=mysql_query("SELECT * FROM `userData` WHERE `place`='M' OR `place`='m' OR `place`='E' OR `place`='S'");
		if (strpos($address,"allExco")===0) $listSQL=mysql_query("SELECT * FROM `userData` WHERE `place`='E'");
		if (strpos($address,"allSubcom")===0) $listSQL=mysql_query("SELECT * FROM `userData` WHERE `place`='S'");
		$condition=array();
		if (strpos($address,":")!==false) {
			$conditionStr=substr($address,strpos($address,":")+1);
			if (strpos($conditionStr,"function>")!==false) {
				$condition["function"]=substr($conditionStr,strpos($conditionStr,"function>")+9);
			}
		}
		for (;;) {
			$list=mysql_fetch_array($listSQL,MYSQL_ASSOC);
			if (!$list["user"]) break;
			if ($addressList[$list["user"]."@connect.ust.hk"]) continue;
			if ($condition["function"]) {
				if (strpos($list["enroll"],$condition["function"])===false) continue;
			}
			$addressList[$list["user"]."@connect.ust.hk"]=true;
			echo $list["user"]."@connect.ust.hk|";
		}
		
	}
	
	echo substr($file,$addressE);
	
	mysql_close();
	
	
?>