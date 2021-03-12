#!/usr/local/bin/php
<?php
	
	if (!$_POST["user"] || !$_POST["ticket"]) exit;
	
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
	
	
	$dataList=array(
		"studentID"=>"db",
		"place"=>"db",
		"post"=>"db",
		"name"=>"db",
		"nickname"=>"db",
		"sex"=>"db",
		"phone"=>"db",
		"school"=>"db",
	);
	$dataSource=array();
	foreach ($dataList as $data=>$value) {
		if (!$_POST[$data]) continue;
		$dataSource[$data]=$_POST[$data];
	}
	
	
	$target=$user;
	$place=$userData["place"];
	switch ($place) {
		case "E":
			$authority=array(
				"target"=>"true",
				"studentID"=>"true",
				"place"=>"true",
				"post"=>"true",
				"name"=>"true",
				"nickname"=>"true",
				"sex"=>"true",
				"phone"=>"true",
				"school"=>"true",
			);
			if ($dataSource["target"]) {
				$target=$dataSource["target"];
				$targetDataSQL=mysql_query("SELECT * FROM `userData` WHERE `user`='".$target."';");
				$targetData=mysql_fetch_array($targetDataSQL,MYSQL_ASSOC);
				if (!$targetData["user"]) {
					mysql_query("INSERT INTO `userData`(`user`) VALUES('".$target."';");
					mysql_close();
					$dataBase=mysql_connect("ihomedb.ust.hk","82467","folktopia2016");
					mysql_select_db("82467db");
				}
			}
		break;
		case "N":
			$authority=array(
				"studentID"=>"true",
				"place"=>"false",
				"post"=>"false",
				"name"=>"true",
				"nickname"=>"true",
				"sex"=>"true",
				"phone"=>"true",
				"school"=>"true",
			);
		break;
		default:
			$authority=array(
				"studentID"=>"false",
				"place"=>"false",
				"post"=>"false",
				"name"=>"false",
				"nickname"=>"true",
				"sex"=>"true",
				"phone"=>"true",
				"school"=>"true",
			);
	}
	
	
	foreach ($dataSource as $data=>$value) {
		if (!$authority[$data] || $authority[$data]==="false") {
			echo "<script> postUserDataFail(); alert('不允许修改".$data."'); </script>";
			mysql_close();
			exit;
		}
	}
	
	
	$targetDataSQL=mysql_query("SELECT * FROM `userData` WHERE `user`='".$target."';");
	$targetData=mysql_fetch_array($targetDataSQL,MYSQL_ASSOC);
	if (!$targetData["user"]) {
		$ticket="";
		for ($i=0;$i<32;$i++) {
			$s=rand(1,36);
			if ($s<=10) {
				$s+=47;
			} else {
				$s+=86;
			}
			$ticket=$ticket.chr($s);
		}
		mysql_query("INSERT INTO `userData`(`user`,`ticket`) VALUES('".$target."','".$ticket."');");
		mysql_close();
		$dataBase=mysql_connect("ihomedb.ust.hk","82467","folktopia2016")
			or die("Could not connect : ".mysql_error());
		mysql_select_db("82467db");
	}
	
	foreach ($dataSource as $data=>$value) {
		if ($dataList[$data]=="db") {
			mysql_query("UPDATE `userData` SET `".$data."`='".$value."' WHERE `user`='".$target."';");
		}
	}
	
	
	if ($dataSource["addEnroll"]) {
		$funcStr=$dataSource["addEnroll"];
		require "functionList.php";
		$enroll=$targetData["enroll"];
		$payto=$dataSource["payto"];
		foreach ($funcList as $func=>$type) {
			
			if ($type=="past") continue;
			
			$p1=strpos($funcStr,$func);
			if ($p1===false) continue;
			
			$c=$funcStr[$p1+strlen($func)];
			if (($c!="," && $c!=".") || ($type=="pay" && $place!="E" && $c=='.') || ($type=="pay" && $place!="E" && !$payto)) {
				echo "<script> postUserDataFail(); alert('添加Function无效！'); </script>";
				mysql_close();
				exit;
			}
			if (strpos($enroll,$func)!==false) {
				$enroll[strpos($enroll,$func)+strlen($func)]=$c;
			} else {
				$enroll.=$func.$c;
			}
			
			$funcDataSQL=mysql_query("SELECT * FROM `functionData` WHERE `user`='".$target."' AND `id`='".$func."';");
			$funcData=mysql_fetch_array($funcDataSQL,MYSQL_ASSOC);
			if (!$funcData["id"]) {
				mysql_query("INSERT INTO `functionData`(`id`,`user`) VALUES('".$func."','".$target."');");
				mysql_close();
				$dataBase=mysql_connect("ihomedb.ust.hk","82467","folktopia2016");
				mysql_select_db("82467db");
			}
			
			$payto1=$payto;
			if ($type=="free") $payto1="";
			mysql_query("UPDATE `functionData` SET `status`='".$c."',`payto`='".$payto1."' WHERE `user`='".$target."' AND `id`='".$func."';");
			
		}
		mysql_query("UPDATE `userData` SET `enroll`='".$enroll."' WHERE `user`='".$target."';");
		
	}
	
	
	echo "<script> postUserDataSucceed(); </script>";
	if ($_POST["callback"]) echo "<script> ".$_POST["callback"]."(); </script>";
	
	mysql_close();
	
	
?>