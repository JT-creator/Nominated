#!/usr/local/bin/php
<?php
	
	$pageList=array(
		"zh",
		"en",
		"news",
		"function",
		"current",
		"past",
		"past/functionO11",
		"past/functionO10",
		"past/functionO09",
		"mail",
		"mailCuisine",
		"mailCuisine/cuisine0",
		"mailCuisine/cuisine1",
		"mailCuisine/cuisine2",
		"mailCuisine/cuisine3",
		"mailCuisine/cuisine4",
		"mailCuisine/cuisine5",
		"mailCuisine/cuisine6",
		"mailCuisine/cuisine7",
		"aboutus",
		"society",
		"society/societyIntroduction",
		"society/societyMission",
		"society/constitution",
		"exco12",
		"exco12/exco12",
		"exco12/yearPlan",
		"exco12/financialPlan",
		"excoB",
		"excoB/exco11",
		"excoB/exco10",
		"excoB/exco09",
		"sponsor",
		"myspace",
		"wechat",
	);
	
	$pageListLen=count($pageList);
	for ($i=0;$i<$pageListLen;$i++) {
		for ($j=0;$j<2;$j++) {
			if ($j==0) $lang="zh";
			if ($j==1) $lang="en";
			if ($pageList[$i]=="zh" || $pageList[$i]=="en") {
				mkdir("../".$pageList[$i]."/",0755);
				$file=fopen("../".$pageList[$i]."/index.html","w");
			} else {
				mkdir("../".$lang."/".$pageList[$i]."/",0755);
				$file=fopen("../".$lang."/".$pageList[$i]."/index.html","w");
			}
			fwrite($file,'
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title></title>
    <meta http-equiv="content" content="text/html" charset="utf-8"/>
	<style type="text/css">
		@keyframes basicLoadingRotate{
			from {transform:rotate(0);}
			to {transform:rotate(360deg);}
		}
	</style>
</head>

<script>
	var time=new Date(); 
	document.write("<script src='."'".'"+"http://ihome.ust.hk/~su_cfas/ASFrame.js?version="+time.toGMTString()+"'."'".'><\/script>");
	document.write("<script src='."'".'"+"http://ihome.ust.hk/~su_cfas/Custom.js?version="+time.toGMTString()+"'."'".'><\/script>");
</script>

<body>
	<script>
		
		if (location.href.indexOf("https")!=-1) {
			var str=location.href;
			location.href="http"+str.substr(5);
		} else {
			ASBGC="#FFFFFF";
			ASPerspective=1000;
			ASWidth=980;
			ASRoot="http://ihome.ust.hk/~su_cfas/";
			ASOrigin();
		}
		
	</script>
	
</body>

</html>
			');
			fclose($file);
			if ($pageList[$i]=="zh" || $pageList[$i]=="en") {
				chmod("../".$pageList[$i]."/index.html",0755);
				chmod("../".$pageList[$i]."/",0755);
				break;
			} else {
				chmod("../".$lang."/".$pageList[$i]."/index.html",0755);
				chmod("../".$lang."/".$pageList[$i]."/",0755);
			}
		}
		
	}
	
?>