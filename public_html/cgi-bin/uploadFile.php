#!/usr/local/bin/php
<?php
	
	$file=$_POST["file"];
	$fileType=substr($file,strpos($file,"/")+1,strpos($file,";")-strpos($file,"/")-1);
	
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
	}
	
	echo "<script> alert('".$fileType."'); </script>";
	
?>