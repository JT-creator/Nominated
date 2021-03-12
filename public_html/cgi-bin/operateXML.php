#!/usr/local/bin/php
<?php
	
	function getNodeByName($data,$name) {
		if (gettype($data)=="array") $data=$data["inner"];
		$nameL=strlen($name);
		$start=strpos($data,"<".$name);
		$s=0;
		for ($p=$start;;) {
			$s1=strpos($data,"</",$p+1);
			$s11=strpos($data,"/>",$p+1);
			if ($s1!==false && $s11!==false && $s11<$s1) $s1=$s11;
			for ($s2=strpos($data,"<",$p+1);$s2!==false && $data[$s2+1]=='/';$s2=strpos($data,"<",$s2+1));
			if ($s==0 && ($s2===false || $s2>$s1)) break;
			if ($s1<$s2) {
				$s--;
				$p=$s1;
			} else {
				$s++;
				$p=$s2;
			}
		}
		$ret=array();
		if ($data[$s1]=='<') {
			$end=$s1;
			$data=substr($data,$start,$end-$start);
			$ret["attribute"]=substr($data,$nameL+1,strpos($data,">")-$nameL-1);
			$ret["inner"]=substr($data,strpos($data,">")+1,$end-$start-$nameL+1-$nameL+6);
		} else {
			$data=substr($data,$start);
			$ret["attribute"]=substr($data,$nameL+1,strpos($data,">")-$nameL-2);
			$ret["inner"]="";
		}
		return $ret;
	}
	
	function getAttribute($data,$name) {
		if (gettype($data)=="array") $data=$data["attribute"];
		$start=strpos($data,$name.'="');
		if ($start===false) return;
		$start+=strlen($name)+2;
		$end=strpos($data,'"',$start+1);
		return substr($data,$start,$end-$start);
	}
	
?>