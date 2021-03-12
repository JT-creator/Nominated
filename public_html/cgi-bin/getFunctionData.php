#!/usr/local/bin/php
<?php
	
	if (!$_POST["type"] || !$_POST["user"] || !$_POST["ticket"] || !$_POST["function"]) {
		echo "<script> getFunctionDataFail(); </script>";
		exit;
	}
	
	$type=$_POST["type"];
	$user=$_POST["user"];
	$ticket=$_POST["ticket"];
	$function=$_POST["function"];
	
	$dataBase=mysql_connect("ihomedb.ust.hk","82467","folktopia2016");
	mysql_select_db("82467db");
	
	$userDataSQL=mysql_query("SELECT * FROM `userData` WHERE `user`='".$user."' AND `ticket`='".$ticket."';");
	$userData=mysql_fetch_array($userDataSQL,MYSQL_ASSOC);
	if (!$userData["user"] || $userData["place"]!="E") {
		echo "<script> ".$_POST["callbackF"]." </script>";
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
	
	
	require "functionList.php";
	if (!$funcList[$function]) {
		echo "<script> ".$_POST["callbackF"]." </script>";
		mysql_close();
		exit;
	}
	
	
	$js="<script> ";
	
	if ($type=="getFunctionData") {
		$funcDataSQL=mysql_query("SELECT * FROM `functionData` WHERE `id`='".$function."';");
		$js.="data=[]; id='".$function."'; ";
		for ($i=0,$funcDataR=mysql_fetch_array($funcDataSQL,MYSQL_ASSOC);$funcDataR;$funcDataR=mysql_fetch_array($funcDataSQL,MYSQL_ASSOC),$i++) {
			$itsc=$funcDataR["user"];
			$userDataSQL=mysql_query("SELECT `name`,`studentID`,`place` FROM `userData` WHERE `user`='".$itsc."';");
			$userData=mysql_fetch_array($userDataSQL,MYSQL_ASSOC);
			$js.='data['.$i.']={user:"'.$itsc.'",name:"'.$userData["name"].'",studentID:"'.$userData["studentID"].'",place:"'.$userData["place"].'",status:"'.$funcDataR["status"].'",payto:"'.$funcDataR["payto"].'"}; ';
		}
		$js.=$_POST["callbackS"]."(data,id); ";
	}
	if ($type=="getPaymentData") {
		$funcDataSQL=mysql_query("SELECT * FROM `functionData` WHERE `payto`='".$user."' AND `id`='".$function."';");
		$js.="data=[]; id='".$function."'; ";
		for ($i=0,$funcDataR=mysql_fetch_array($funcDataSQL,MYSQL_ASSOC);$funcDataR;$funcDataR=mysql_fetch_array($funcDataSQL,MYSQL_ASSOC),$i++) {
			$itsc=$funcDataR["user"];
			$userDataSQL=mysql_query("SELECT `name`,`place` FROM `userData` WHERE `user`='".$itsc."';");
			$userData=mysql_fetch_array($userDataSQL,MYSQL_ASSOC);
			$js.='data['.$i.']={user:"'.$itsc.'",name:"'.$userData["name"].'",place:"'.$userData["place"].'",status:"'.$funcDataR["status"].'"}; ';
		}
		$js.=$_POST["callbackS"]."(data,id); ";
	}
	
	$js.="</script>";
	echo $js;
	
	mysql_close();
	
	
?>