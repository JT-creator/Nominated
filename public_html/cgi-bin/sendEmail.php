#!/usr/local/bin/php
<?php
	
	if (!$_POST["user"] || !$_POST["ticket"] || !$_POST["from"] || !$_POST["fromName"] || !$_POST["address"] || !$_POST["bcc"] || !$_POST["subject"] || !$_POST["context"]) exit;
	
	$user=$_POST["user"];
	$ticket=$_POST["ticket"];
	
	$dataBase=mysql_connect("ihomedb.ust.hk","82467","folktopia2016");
	mysql_select_db("82467db");
	
	$userDataSQL=mysql_query("SELECT * FROM `userData` WHERE `user`='".$user."' AND `ticket`='".$ticket."';");
	$userData=mysql_fetch_array($userDataSQL,MYSQL_ASSOC);
	if (!$userData["user"]) {
		echo "<script> userLoginInvalid(); </script>";
		mysql_close();
		exit;
	}
	$time0=time();
	$time1=date("ymdHis",$time0-28800);
	$time2=date("ymdHis",$time0-7200);
	if ($userData["loginT"]<$time1 || $userData["loginLT"]<$time2) {
		echo "<script> userLoginTimeOut(); </script>";
		mysql_close();
		exit;
	}
	
	if ($userData["place"]!="E") {
		if (strpos($_POST["address"],"allUser")!==false
			|| strpos($_POST["address"],"allMember")!==false) {
			echo "<script> sendEmailFail(); </script>";
			mysql_close();
			exit;
		}
	}
	
	
	for (;;) {
		$ticket="";
		for ($i=0;$i<32;$i++) {
			$s=rand(1,36);
			if ($s<=10) {
				$s+=47;
			} else {
				$s+=86;
			}
			$ticket.=chr($s);
		}
		$emailDataSQL=mysql_query("SELECT `ticket` from `emailData` WHERE `ticket`='".$ticket."';");
		$emailData=mysql_fetch_array($emailDataSQL,MYSQL_ASSOC);
		if (!$emailData["ticket"]) break;
	}
	mysql_query("INSERT INTO `emailData`(`user`,`ticket`,`status`) VALUES('".$user."','".$ticket."','b');");
	
	$file=fopen("../Data/Email/".md5($ticket."a3d3g3j3l3").".txt","w");
	fwrite($file,"<8ac2jd3k>".$_POST["from"]."</8ac2jd3k>"."<w9xk02zc>".$_POST["fromName"]."</w9xk02zc>"."<2sdw81hs>".$_POST["address"]."</2sdw81hs>"."<d7gw2a8c>".$_POST["bcc"]."</d7gw2a8c>"."<1s9w3acd>".$_POST["subject"]."</1s9w3acd>"."<w0dj34xz>".$_POST["context"]."</w0dj34xz>");
	fclose($file);
	
	
	echo "<script> transmitEmail('".$ticket."'); </script>";
	mysql_close();
	
	
?>