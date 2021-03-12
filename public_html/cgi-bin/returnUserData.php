<?php
	$dataList=array(
		"user"=>"db",
		"ticket"=>"db",
		"studentID"=>"db",
		"place"=>"db",
		"post"=>"db",
		"name"=>"db",
		"nickname"=>"db",
		"sex"=>"db",
		"phone"=>"db",
		"school"=>"db",
	);
	$userDataSQL=mysql_query("SELECT * FROM `userData` WHERE `user`='".$user."';");
	$userDataB=mysql_fetch_array($userDataSQL,MYSQL_ASSOC);
	
	$js="<script> var data={}; data.payto=[]; ";
	foreach ($dataList as $data=>$type) {
		if ($type=="db") {
			$js.='data.'.$data.'="'.$userDataB[$data].'"; ';
		}
	}
	
	$funcDataList=array(
		"user"=>"db",
		"ticket"=>"db",
		"studentID"=>"db",
		"place"=>"db",
		"post"=>"db",
		"name"=>"db",
		"nickname"=>"db",
		"sex"=>"db",
		"phone"=>"db",
		"school"=>"db",
	);
	$js.='data.function={};';
	$functionDataSQL=mysql_query("SELECT * FROM `functionData` WHERE `user`='".$user."';");
	for ($functionDataR=mysql_fetch_array($functionDataSQL,MYSQL_ASSOC);$functionDataR;$functionDataR=mysql_fetch_array($functionDataSQL,MYSQL_ASSOC)) {
		$js.='data.function["'.$functionDataR["id"].'"]={"'.$functionDataR["payto"].'"; ';
	}
	
	if (!$dataReceiver) $dataReceiver="getUserData";
	$js.=$dataReceiver."(data); </script>";
	
	echo $js;
	

?>