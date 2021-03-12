#!/usr/local/bin/php
<?php
	
	
	$dataBase=mysql_connect("ihomedb.ust.hk","82467","folktopia2016");
	mysql_select_db("82467db");
	
	
	mysql_query("DELETE FROM `userData` WHERE `place`<>'E';");
	
	
	$file=file_get_contents("../Data/CFASMemberList.txt");
	
	for ($row=0;$file;$row++) {
		
		$data=array();
		for ($i=1;$i<=9;$i++,$file=substr($file,$p+1)) {
			$p=min(strpos($file,"\t"),strpos($file,"\n"));
			$str=substr($file,0,$p);
			if ($i!=1 && $i!=9) $str=str_replace(" ","",$str);
			switch ($i) {
				case 1: $data["name"]=$str; break;
				case 2: $data["school"]=$str; break;
				case 3: $data["user"]=$str; break;
				case 4: $data["type"]=$str; break;
				case 5: $data["year"]=$str; break;
				case 7: $data["studentID"]=$str; break;
				case 8: $data["phone"]=$str; break;
				case 9: $data["nickname"]=$str; break;
			}
		}
		
		if ($data["type"]=="Full") $data["place"]="M";
		else $data["place"]="m";
		if ($data["school"]!="SBM" && $data["school"]!="SENG" && $data["school"]!="SSCI" && $data["school"]!="SHSS" && $data["school"]!="IPO") {
			//echo $data["user"]." ".$data["school"]."<br>";
			$data["school"]="";
		}
		
		$userDataSQL=mysql_query("SELECT * FROM `userData` WHERE `user`='".$data["user"]."';");
		$userData=mysql_fetch_array($userDataSQL,MYSQL_ASSOC);
		if ($userData["user"]) {
			if ($userData["place"]) $data["place"]=$userData["place"];
			if ($data["year"]=="2015") {
				mysql_query("DELECT FROM `userData` WHERE `user`='".$data["user"]."';");
			} else {
				mysql_query("UPDATE `userData` SET `user`='".$data["user"]."',`name`='".$data["name"]."',`nickname`='".$data["nickname"]."',`studentID`='".$data["studentID"]."',`school`='".$data["school"]."',`phone`='".$data["phone"]."',`place`='".$data["place"]."' WHERE `user`='".$data["user"]."';");
			}
		} else {
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
				$historySQL=mysql_query("SELECT * FROM `userData` WHERE `ticket`='".$ticket."'");
				$history=mysql_fetch_array($historySQL,MYSQL_ASSOC);
				if ($history["user"]) continue;
				break;
			}
			mysql_query("INSERT INTO `userData`(`user`,`ticket`,`name`,`nickname`,`studentID`,`school`,`phone`,`place`) VALUES('".$data["user"]."','".$ticket."','".$data["name"]."','".$data["nickname"]."','".$data["studentID"]."','".$data["school"]."','".$data["phone"]."','".$data["place"]."');");
		}
		
	}
	echo $row;
	
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='wsongaf';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='ydual';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='jyuar';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='steng';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='pwangah';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='lpanaf';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='zhuangbc';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='ychends';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='ychendm';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='yfanaj';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='yzhangfg';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='qzhuangaa';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='sliuaz';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='dkongad';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='hzhual';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='kkongaa';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='zrong';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='khouab';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='lcaoaj';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='yzhangfc';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='yyubc';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='vstao';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='szhangbi';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='xzhuang';");
	mysql_query("UPDATE `userData` SET `place`='S' WHERE `user`='xliuce';");
	
	mysql_close();
	
	
?>