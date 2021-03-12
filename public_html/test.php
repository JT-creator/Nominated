<?php
header("content-type:text/html;charset=utf-8"); 
ini_set("magic_quotes_runtime",0); 
include 'class.phpmailer.php';

$mail = new PHPMailer(true); 
$mail->IsSMTP(); 
$mail->CharSet='UTF-8'; //设置邮件的字符编码，这很重要，不然中文乱码 
$mail->SMTPAuth = true; //开启认证 
$mail->Port = 25; 
$mail->Host = "smtp.ust.hk"; 
$mail->Username = "fwuae";
$mail->Password = "a0d0g0j0l0";
//$mail->IsSendmail(); //如果没有sendmail组件就注释掉，否则出现“Could not execute: /var/qmail/bin/sendmail ”的错误提示 
$mail->AddReplyTo("fwuae@connect.ust.hk","wufan");//回复地址 
$mail->From = "fwuae@connect.ust.hk"; 
$mail->FromName = "WU Fan";
$mail->AddAddress("fwuae@ust.hk");
$mail->Subject = "嘿嘿嘿";
$mail->Body = "
	<h1>Test</h1>
";
$mail->AltBody = "To view the message, please use an HTML compatible email viewer!"; //当邮件不支持html时备用显示，可以省略 
$mail->WordWrap = 80; // 设置每行字符串的长度
//$mail->AddAttachment("f:/test.png"); //可以添加附件
$mail->IsHTML(true);
if(!$mail->Send()) {
  echo "Mailer Error: " . $mail->ErrorInfo;
} else {
  echo "Message sent!";
}

?> 