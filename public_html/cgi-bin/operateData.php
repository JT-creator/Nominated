#!/usr/local/bin/php
<?php
	
	if (!$_POST["user"] || !$_POST["ticket"]) exit('<script> alert("Need user and action!"); </script>');
	
	function preventSQLInject($str) {
		$str=mysql_real_escape_string($str);
		str_replace("--","==",$str);
		return $str;
	}
	
	$dataBase=mysql_connect("ihomedb.ust.hk","82467","folktopia2016");
	mysql_select_db("82467db");
	
	$user=preventSQLInject($_POST["user"]);
	$ticket=preventSQLInject($_POST["ticket"]);
	$userDataSQL=mysql_query(sprintf("SELECT * FROM `userData` WHERE `user`='%s' AND `ticket`='%s';",$user,$ticket));
	$userData=mysql_fetch_assoc($userDataSQL);
	if (!$userData["user"]) {
		mysql_close();
		exit('<script> alert("User or ticket wrong!"); </script>');
	}
	
	$time0=time();
	$time1=date("ymdHis",$time0-28800);
	if ($userData["loginT"]<$time1) {
		mysql_close();
		exit("<script> userLoginTimeOut(); </script>");
	}
	
	if (!$_POST["action"]) {
		mysql_close();
		exit('<script> alert("Need action!"); </script>');
	}
	$action=$_POST["action"];
	$place=$userData["place"];
	
	if ($action=="getUserData") {
		echo '<script> data={}; ';
		foreach ($userData as $data=>$value) {
			echo 'data.'.$data.'="'.$value.'"; ';
		}
		echo 'data.func={}; ';
		$funcDataSQL=mysql_query(sprintf("SELECT * FROM `funcData` WHERE `user`='%s'",$user));
		for ($funcData=mysql_fetch_assoc($funcDataSQL);$funcData;$funcData=mysql_fetch_assoc($funcDataSQL)) {
			$funcID=$funcData["id"];
			echo 'data.func.'.$funcID.'={}; ';
			foreach ($funcData as $data=>$value) {
				if ($data=="id") continue;
				echo 'data.func.'.$funcID.'.'.$data.'="'.$value.'"; ';
			}
		}
		echo 'getUserData(data); </script>';
	}
	
	if ($action=="getTargetData") {
		if ($place!="E") {
			mysql_close();
			exit('<script> alert("No authority!"); </script>');
		}
		if (!$_POST["target"]) {
			mysql_close();
			exit('<script> alert("Need target!"); </script>');
		}
		$target=$_POST["target"];
		$targetDataSQL=mysql_query(sprintf("SELECT * FROM `userData` WHERE `user`='%s';",$target));
		$targetData=mysql_fetch_assoc($targetDataSQL);
		if (!$targetData["user"]) {
			mysql_close();
			exit('<script> getTargetData(null); </script>');
		}
		echo '<script> data={}; ';
		foreach ($targetData as $data=>$value) {
			echo 'data.'.$data.'="'.$value.'"; ';
		}
		echo 'data.func={}; ';
		$funcDataSQL=mysql_query(sprintf("SELECT * FROM `funcData` WHERE `user`='%s'",$target));
		for ($funcData=mysql_fetch_assoc($funcDataSQL);$funcData;$funcData=mysql_fetch_assoc($funcDataSQL)) {
			$funcID=$funcData["id"];
			echo 'data.func.'.$funcID.'={}; ';
			foreach ($funcData as $data=>$value) {
				if ($data=="id") continue;
				echo 'data.func.'.$funcID.'.'.$data.'="'.$value.'"; ';
			}
		}
		echo 'getTargetData(data); </script>';
	}
	
	if ($action=="getFuncData") {
		if ($place!="E") {
			mysql_close();
			exit('<script> alert("No authority!"); </script>');
		}
		if (!$_POST["funcID"]) {
			mysql_close();
			exit('<script> alert("Need function!"); </script>');
		}
		echo '<script> data=[]; ';
		$funcDataSQL=mysql_query(sprintf("SELECT * FROM `funcData` WHERE `id`='%s'",$_POST["funcID"]));
		for ($i=0,$funcData=mysql_fetch_assoc($funcDataSQL);$funcData;$funcData=mysql_fetch_assoc($funcDataSQL),$i++) {
			echo 'data['.$i.']={}; ';
			foreach ($funcData as $data=>$value) {
				echo 'data['.$i.'].'.$data.'="'.$value.'"; ';
			}
			$targetDataSQL=mysql_query(sprintf("SELECT * FROM `userData` WHERE `user`='%s'",$funcData["user"]));
			$targetData=mysql_fetch_assoc($targetDataSQL);
			echo sprintf('data['.$i.'].name="%s"; data['.$i.'].studentID="%s"; data['.$i.'].place="%s"; ',$targetData["name"],$targetData["studentID"],$targetData["place"]);
		}
		echo 'getFuncData(data); </script>';
	}
	
	if ($action=="postUserData") {
		$authority=array(
			"studentID"=>"EN",
			"place"=>"E",
			"name"=>"ESMmN",
			"nickname"=>"ESMmN",
			"sex"=>"ESMmN",
			"phone"=>"ESMmN",
			"school"=>"ESMmN",
		);
		$sqlStr="";
		foreach ($authority as $item=>$value) {
			if (!$_POST[$item]) continue;
			if ($_POST[$item]==$userData[$item]) continue;
			if ($value.strpos($place)===false) {
				mysql_close();
				exit('<script> alert("No authority!"); postUserDataFail(); </script>');
			}
			if ($sqlStr) $sqlStr.=",";
			$sqlStr.="`".$item."`='".$_POST[$item]."'";
		}
		mysql_query("UPDATE `userData` SET ".$sqlStr." WHERE `user`='".$user."' AND `ticket`='".$ticket."';");
		echo '<script> postUserDataSucceed(); </script>';
	}
	
	if ($action=="postTargetData") {
		if ($place!="E") {
			mysql_close();
			exit('<script> alert("No authority!"); </script>');
		}
		if (!$_POST["target"]) {
			mysql_close();
			exit('<script> alert("Need target!"); </script>');
		}
		$authority=array(
			"studentID"=>"EN",
			"place"=>"E",
			"name"=>"ESMmN",
			"nickname"=>"ESMmN",
			"sex"=>"ESMmN",
			"phone"=>"ESMmN",
			"school"=>"ESMmN",
		);
		$targetDataSQL=mysql_query("SELECT * FROM `userData` WHERE `user`='".$_POST["target"]."';");
		$targetData=mysql_fetch_assoc($targetDataSQL);
		if (!$targetData["user"]) {
			$sqlStr1="`user`";
			$sqlStr2="'".$_POST["target"]."'";
			foreach ($authority as $item=>$value) {
				if (!$_POST[$item]) continue;
				if ($value.strpos($place)===false) {
					mysql_close();
					exit('<script> alert("No authority!"); </script>');
				}
				if ($sqlStr1) $sqlStr1.=",";
				if ($sqlStr2) $sqlStr2.=",";
				$sqlStr1.="`".$item."`";
				$sqlStr2.="'".$_POST[$item]."'";
			}
			mysql_query("INSERT INTO `userData`(".$sqlStr1.") VALUES(".$sqlStr2.");");
		} else {
			$sqlStr="";
			foreach ($authority as $item=>$value) {
				if (!$_POST[$item]) continue;
				if ($value.strpos($place)===false) {
					mysql_close();
					exit('<script> alert("No authority!"); </script>');
				}
				if ($sqlStr) $sqlStr.=",";
				$sqlStr.="`".$item."`='".$_POST[$item]."'";
			}
			mysql_query("UPDATE `userData` SET ".$sqlStr." WHERE `user`='".$_POST["target"]."';");
		}
	}
	
	if ($action=="postUserFuncData") {
		require "operateXML.php";
		$data0=file_get_contents("../Data/data0.xml");
		$feeC=getNodeByName(getNodeByName(getNodeByName(getNodeByName($data0,"functionC"),$_POST["id"]),"role"),"role".$_POST["role"]);
		if ($place=="N") $fee=getAttribute($feeC,"feeN");
		else $fee=getAttribute($feeC,"feeM");
		if ($fee!="0" && $_POST["status"]==".") {
			mysql_close();
			exit('<script> alert("Normal user cannot signup pay function directly!"); </script>');
		}
		$funcDataSQL=mysql_query(sprintf("SELECT * FROM `funcData` WHERE `id`='%s' AND `user`='%s';",$_POST["id"],$user));
		$funcData=mysql_fetch_assoc($funcDataSQL);
		if ($funcData["user"]) {
			mysql_query(sprintf("UPDATE `funcData` SET `status`='%s',`payto`='%s',`role`='%s',`extra`='%s' WHERE `id`='%s' AND `user`='%s';",$_POST['status'],$_POST['payto'],$_POST["role"],"",$_POST["id"],$user));
		} else {
			mysql_query(sprintf("INSERT INTO `funcData`(`id`,`user`,`status`,`payto`,`role`,`extra`) VALUES('%s','%s','%s','%s','%s','%s');",$_POST["id"],$user,$_POST['status'],$_POST['payto'],$_POST["role"],""));
		}
	}
	
	if ($action=="postTargetFuncData") {
		if ($place!="E") {
			mysql_close();
			exit('<script> alert("No authority!"); </script>');
		}
		require "operateXML.php";
		$data0=file_get_contents("../Data/data0.xml");
		$feeC=getNodeByName(getNodeByName(getNodeByName(getNodeByName($data0,"functionC"),$_POST["id"]),"role"),"role".$_POST["role"]);
		if ($place=="N") $fee=getAttribute($feeC,"feeN");
		else $fee=getAttribute($feeC,"feeM");
		$funcDataSQL=mysql_query(sprintf("SELECT * FROM `funcData` WHERE `id`='%s' AND `user`='%s';",$_POST["id"],$_POST["target"]));
		$funcData=mysql_fetch_assoc($funcDataSQL);
		if ($funcData["user"]) {
			if (!$_POST["status"]) $_POST["status"]=$funcData["status"];
			if (!$_POST["payto"]) $_POST["payto"]=$funcData["payto"];
			if (!$_POST["role"]) $_POST["role"]=$funcData["role"];
			mysql_query(sprintf("UPDATE `funcData` SET `status`='%s',`payto`='%s',`role`='%s',`extra`='%s' WHERE `id`='%s' AND `user`='%s';",$_POST['status'],$_POST['payto'],$_POST["role"],"",$_POST["id"],$_POST["target"]));
		} else {
			mysql_query(sprintf("INSERT INTO `funcData`(`id`,`user`,`status`,`payto`,`role`,`extra`) VALUES('%s','%s','%s','%s','%s','%s');",$_POST["id"],$_POST["target"],$_POST['status'],$_POST['payto'],$_POST["role"],""));
		}
	}
	
	if ($action=="uploadImg") {
		if (!is_dir("../Data/Image/".$user)) {
			mkdir("../Data/Image/".$user,0755);
		}
		$file=$_POST["file"];
		$fileType=substr($file,strpos($file,"/")+1,strpos($file,";")-strpos($file,"/")-1);
		$file=substr($file,strpos($file,",")+1);
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
			//$fileName="../Data/Image/".$user."/".$ticket.".".$fileType;
			$fileName=$ticket.".".$fileType;
			if (!file_exists($fileName)) break;
		}
		$f=fopen($fileName,"w");
		fwrite($f,base64_decode($file));
		fclose($f);
		chmod($fileName,0755);
	}
	
	mysql_close();
	
?>