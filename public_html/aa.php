#!/usr/local/bin/php
<?php
	
	//第一行是学校ihome服务器必需的。如果你有私服就不需要了
	
	$num=$_POST["num"];
	$num1=$_POST["num1"];
	$num2=$_POST["num2"];
	$num3=$_POST["num3"];
	$num4=$_POST["num4"];
	
	//连接 82467是数据库用户，你可以申请一个，然后更换下就好
	//https://ihome.ust.hk/phpMyAdmin/index.php，这个是一个可视化管理数据库的页面，用用户名（像82467）和数据库密码（不是itsc账号的密码）登录
	$dataBase=mysql_connect("ihomedb.ust.hk","82467","password");
	mysql_select_db("82467db");
	
	//插入
	mysql_query("INSERT INTO `fieldName`(`num`,`num1`,`num2`) VALUES('".$num."','".$num1."','".$num2."');");
	//修改
	mysql_query("UPDATE `fieldName` SET `num`='".$num."',`num1`='".$num1."';");
	
	mysql_close();//这个是必需的，否则所有操作可能不生效
	
	
?>