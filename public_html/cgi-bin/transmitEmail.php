<?php
	
	if (strpos($_SERVER["QUERY_STRING"],"ticket")===false) exit;
	//ini_set('display_errors', '2');
	
	$ticket=substr($_SERVER["QUERY_STRING"],7);
	
	$options=array('http'=>array(
		'method'=>'POST',
		'header'=>'Content-type:application/x-www-form-urlencoded',
		'content'=>"ticket=".$ticket."q92xmc2k",
		'timeout'=>1000,
	));
	$file=file_get_contents("http://ihome.ust.hk/~su_cfas/cgi-bin/getEmailContent.php",false,stream_context_create($options));
	if ($file=="wrong") exit;
	
	$fromS=strpos($file,"<8ac2jd3k>")+10;
	$fromE=strpos($file,"</8ac2jd3k>");
	$from=substr($file,$fromS,$fromE-$fromS);
	$fromNameS=strpos($file,"<w9xk02zc>")+10;
	$fromNameE=strpos($file,"</w9xk02zc>");
	$fromName=substr($file,$fromNameS,$fromNameE-$fromNameS);
	$addressS=strpos($file,"<2sdw81hs>")+10;
	$addressE=strpos($file,"</2sdw81hs>");
	$addressStr=substr($file,$addressS,$addressE-$addressS);
	$bccS=strpos($file,"<d7gw2a8c>")+10;
	$bccE=strpos($file,"</d7gw2a8c>");
	$bcc=substr($file,$bccS,$bccE-$bccS);
	$subjectS=strpos($file,"<1s9w3acd>")+10;
	$subjectE=strpos($file,"</1s9w3acd>");
	$subject=substr($file,$subjectS,$subjectE-$subjectS);
	$contextS=strpos($file,"<w0dj34xz>")+10;
	$contextE=strpos($file,"</w0dj34xz>");
	$context=substr($file,$contextS,$contextE-$contextS);
	
	
	include 'class.phpmailer.php';
	$mail=new PHPMailer(true);
	//$mail->SMTPDebug =1;
	$mail->IsSMTP(); 
	$mail->CharSet='UTF-8';
	$mail->SMTPAuth=true;
	$mail->SMTPSecure='tls';
	$mail->Port=587;
	$mail->Host="smtp.ust.hk"; 
	if ($from=="su_cfas@connect.ust.hk") {
		$mail->Username="su_cfas";
		$mail->Password="folktopia2016";
	} else {
		$mail->Username="fwuae";
		$mail->Password="a0d0g0j0l0";
	}
	$mail->AddReplyTo($from,$fromName);
	$mail->From=$from;
	$mail->FromName=$fromName;
	for ($addressN=1;$addressStr;$addressN++) {
		$p=strpos($addressStr,"|");
		$address=substr($addressStr,0,$p);
		if ($bcc=="y") {
			$mail->AddBCC($address);
		} else {
			$mail->AddAddress($address);
		}
		$addressStr=substr($addressStr,$p+1);
	}
	$mail->Subject=$subject;
	$mail->Body=$context;
	//$mail->AddAttachment("f:/test.png");
	$mail->IsHTML(true);
	if(!$mail->Send()) {
		file_get_contents("http://ihome.ust.hk/~su_cfas/cgi-bin/sendEmailFail.php?ticket=".$ticket);
	} else {
		//echo $context;
		file_get_contents("http://ihome.ust.hk/~su_cfas/cgi-bin/sendEmailSucceed.php?ticket=".$ticket);
	}
	
?>