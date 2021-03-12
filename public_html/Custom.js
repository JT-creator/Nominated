

	var ASSourceNameList=[
		{src:"Image/Page/radioPoint.png"},
		{src:"Image/Page/checkBox.png"},
		{src:"Image/Page/basicTitleBottom.jpg"},
		{src:"Image/Page/loadingBottom.png"},
		{src:"Image/Page/loadingCover.png"},
		{src:"Image/Page/loadingSucceed.png"},
		{src:"Image/Page/loadingFail.png"},
		{src:"Image/TopLogo/TopLogo.png"},
		{name:"startScene",src:"Image/Scene/Origin/main.png"},
		{name:"userHead1",src:"Image/User/logo1.png"},
		{name:"userHead2",src:"Image/User/logo2.png"},
		{name:"cardBoardSearch1",src:"Image/CardBoard/search1.png"},
		{name:"cardBoardSearch2",src:"Image/CardBoard/search2.png"},
		{name:"cardBoardBack1",src:"Image/CardBoard/back1.png"},
		{name:"cardBoardBack2",src:"Image/CardBoard/back2.png"},
		{name:"cardBoardBack3",src:"Image/CardBoard/back3.png"},
		{src:"Image/Search/bihuaCover.png"},
		{name:"searchLight",src:"Image/Search/light.png"},
		{name:"searchFold1",src:"Image/Search/fold1.png"},
		{name:"searchFold2",src:"Image/Search/fold2.png"},
		{name:"searchSearch1",src:"Image/Search/search1.png"},
		{name:"searchSearch2",src:"Image/Search/search2.png"},
		{name:"headBack",src:"Image/Head/background.jpg"},
		{name:"icon_back",src:"Image/Head/Icon/back.png"},
		{name:"icon_backL",src:"Image/Head/Icon/backL.png"},
		{name:"shellClose1",src:"Image/Shell/close1.png"},
		{name:"shellClose2",src:"Image/Shell/close2.png"},
		{name:"frameDivideBar",src:"Image/Frame/divideBar.png"},
		{name:"frameDivideLine",src:"Image/Frame/divideLine.png"},
		{name:"anchorListPointCover",src:"Image/Frame/jumpPointCover.png"},
		{name:"anchorListEndCover",src:"Image/Frame/jumpEndCover.png"},
		{name:"anchorListLineCover",src:"Image/Frame/jumpLineCover.png"},
		{name:"anchorListLight",src:"Image/Frame/jumpLight.png"},
		{name:"pageListLine",src:"Image/Frame/jumpLine.png"},
		{name:"pageListBlock",src:"Image/Frame/jumpBlock.png"},
		{name:"frameLinkLineB",src:"Image/Frame/linkLineB.png"},
		{name:"frameLinkLineW",src:"Image/Frame/linkLineW.png"},
		{name:"CFASQrcode",src:"Image/Page/Wechat/qrcode.jpg"},
		{name:"emailListClose",src:"Image/Page/Email/close.png"},
		{name:"enroll_past",src:"Image/Page/Function/past.png"},
		{name:"enroll_waiting",src:"Image/Page/Function/waiting.png"},
		{name:"enroll_available",src:"Image/Page/Function/available.png"},
		{name:"enroll_full",src:"Image/Page/Function/full.png"},
		{name:"enroll_ban",src:"Image/Page/Function/ban.png"},
		{name:"enroll_paying",src:"Image/Page/Function/paying.png"},
		{name:"enroll_success",src:"Image/Page/Function/success.png"},
		{name:"enroll_check",src:"Image/Page/Function/check.png"},
		{name:"enroll_change",src:"Image/Page/Function/change.png"},
		{name:"editorToolIcon",src:"Image/Page/Email/toolIcon.png"},
		{name:"editorToolRegion",src:"Image/Page/Email/toolRegion.png"},
	];


	var ASSourceLoadList=[
		{src:"Data/data0.xml"},
		{name:"loadingScene",src:"Image/Scene/main.png"},
		{src:"Image/logo.png"},
		{src:"Image/logoL.png"},
		{src:"Image/loadingCircle.png"},
		{src:"Image/loadingLight.png"},
	];


	var ASSourceBuildList=[

	];


	var ASSourceWaitList=[

	];


	//Component
	var BasicWordStr=new function() {

		BasicWordList=[];

		this.setLang=function(l) {
			if (!this["word"+l] && (this.wordC || this.wordE)) {
				if (l=="C") this.setLang("E");
				else this.setLang("C");
				return;
			}
			this.lang=l;
			this.word.set({innerHTML:this["word"+this.lang]});
			this.value=this["word"+this.lang];
			if (this.width=="max") this.set({style:{width:ASGetWordWidth(this.word)+2}});
			if (this.giveupExtra) return;
			var dx=0,dy=0;
			if (this.lang=="C" && this.word.style.fontFamily.indexOf("Microsoft Yahei")>-1) {
				dy-=this.size*0.06;
				dx-=this.size*0.06;
			}
			if (this.word.style.fontFamily.indexOf("Droid Sans Fallback")>-1) {
				dy+=this.size*0.07;
			}
			if (this.lang=="E" && this.sizeE) {
				this.word.set({style:{fontSize:this.sizeE}});
			} else {
				this.word.set({style:{fontSize:this.size}});
			}
			if (this.lang=="C" && this.letterSpacingC) {
				dx+=this.letterSpacingC/2;
				this.word.set({style:{letterSpacing:this.letterSpacingC,}});
			} else {
				this.word.set({style:{letterSpacing:0,}});
			}
			this.word.set({style:{
				top:dy,
				left:dx,
			}});
		}

		this.setWord=function(typeP) {
			if ("wordC" in typeP) this.wordC=typeP.wordC;
			if ("wordE" in typeP) this.wordE=typeP.wordE;
			this.widthA=0;
			this.heightA=0;
			this.word.set({innerHTML:this.wordC}),
			this.widthA=Math.max(this.widthA,ASGetWordWidth(this.word));
			this.heightA=Math.max(this.heightA,ASGetWordHeight(this.word));
			this.word.set({innerHTML:this.wordE}),
			this.widthA=Math.max(this.widthA,ASGetWordWidth(this.word));
			this.heightA=Math.max(this.heightA,ASGetWordHeight(this.word));
			this.setLang(this.lang);
		}

		this.getValue=function() {
			return(this.value);
		}

	}


	function BasicWord(buildP) {

		if (!buildP.size) buildP.size=18;
		if (!buildP.font) buildP.font=DEFAULT_FONT;
		if (!buildP.wordC) buildP.wordC="";
		if (!buildP.wordE) buildP.wordE="";
		if (!buildP.color) buildP.color="black";
		if (!buildP.defaultL) buildP.defaultL=ASLang;

		var target=ASElement({
			nodeName:"div",
		});
		target.size=buildP.size;
		target.lang=buildP.defaultL;
		target.wordC=buildP.wordC;
		target.wordE=buildP.wordE;
		target.sizeE=buildP.sizeE;
		target.letterSpacingC=buildP.letterSpacingC;
		target.giveupExtra=buildP.giveupExtra;
		BasicWordList[BasicWordList.length]=target;
			target.word=ASElement({
				nodeName:"p",
				style:{
					position:"relative",
					fontSize:buildP.size,
					fontFamily:buildP.font,
					color:buildP.color,
				},
			});
			target.appendChild(target.word);

		target.setLang=BasicWordStr.setLang;
		target.setWord=BasicWordStr.setWord;
		target.getValue=BasicWordStr.getValue;

		target.width=buildP.width;
		target.setWord({
			wordC:buildP.wordC,
			wordE:buildP.wordE,
		});

		target.set(buildP);
		return(target);

	}


	function BasicTitle(buildP) {

		if (!buildP.size) buildP.size=30;

		// Default Title Color
		if (!buildP.color) buildP.color="rgb(230,0,0)";

		var target=ASElement({
			nodeName:"div",
			style:{
				backgroundImage:"url('"+ASGetSrcByName("basicTitleBottom")+"')",
				backgroundPosition:"0 0",
				backgroundSize:buildP.size*0.18+"px 100%",
				backgroundRepeat:"no-repeat",
			},
		});
		target.word=BasicWord({
			size:buildP.size,
			sizeE:buildP.sizeE,
			font:buildP.font,
			wordC:buildP.wordC,
			wordE:buildP.wordE,
			color:buildP.color,
			defaultL:buildP.defaultL,
			letterSpacingC:buildP.letterSpacingC,
			style:{
				position:"relative",
				marginLeft:buildP.size*0.5,
			},
		});
		target.appendChild(target.word);
		if (buildP.widthA) {
			target.set({style:{
				width:buildP.widthA,
			}});
		}

		target.set(buildP);
		return(target);

	}


	var BasicButtonStr=new function() {

		this.onmouseover=function() {
			this.bottom.setTarget({
				transform:{scale:1},
			});
			this.bottom.light.setTarget({
				opacity:1,
			});
			this.bottom.shade.setTarget({
				opacity:0,
			});
			this.word.setTarget({
				transform:{
					translateX:-2,
					translateY:-1,
				},
			});
		}
		this.onmouseout=function() {
			this.bottom.setTarget({
				transform:{scale:1},
			});
			this.bottom.light.setTarget({
				opacity:0,
			});
			this.bottom.shade.setTarget({
				opacity:0,
			});
			this.word.setTarget({
				transform:"translate(0,0)",
			});
		}
		this.onmousedown=function() {
			this.bottom.setTarget({
				transform:{scale:1},
			});
			this.bottom.light.setTarget({
				opacity:0,
			});
			this.bottom.shade.setTarget({
				opacity:1,
			});
			this.word.setTarget({
				transform:{
					translateX:2,
					translateY:1,
				},
			});
		}
		this.onmouseup=function() {
			this.bottom.setTarget({
				transform:{scale:1},
			});
			this.bottom.light.setTarget({
				opacity:1,
			});
			this.bottom.shade.setTarget({
				opacity:0,
			});
			this.word.setTarget({
				transform:{
					translateX:-2,
					translateY:-1,
				},
			});
		}

		this.resize=function(typeP) {
			if (typeP.widthA) {
				this.width0=typeP.widthA;
				this.word.set({style:{width:typeP.widthA}});
				this.set({style:{width:typeP.widthA}});
			}
		}

	}


	function BasicButton(buildP) {

		// Default Button Color

		if (!buildP.size) buildP.size=18;
		if (!buildP.color) buildP.color="rgb(240,0,0)";
		if (!buildP.colorW) buildP.colorW="white";
		if (!buildP.colorL) buildP.colorL="rgb(255,145,0)";

		var target=ASElement({
			nodeName:"div",
			style:{
				position:"relative",
				borderRadius:buildP.size*0.15,
				textAlign:"center",
				cursor:"pointer",
			},
			onmouseover:BasicButtonStr.onmouseover,
			onmouseout:BasicButtonStr.onmouseout,
			onmousedown:BasicButtonStr.onmousedown,
			onmouseup:BasicButtonStr.onmouseup,
			resize:BasicButtonStr.resize,
		});
		target.size=buildP.size;

			target.word=BasicWord({
				font:buildP.font,
				size:buildP.size,
				color:buildP.colorW,
				wordC:buildP.wordC,
				wordE:buildP.wordE,
				wCenter:true,
				style:{
					position:"absolute",
					pointerEvents:"none",
				},
			});

		target.width0=target.word.widthA+buildP.size*1;
		target.height0=target.word.heightA+buildP.size*0.5;
		if (buildP.widthA) target.width0=buildP.widthA;

			target.word.set({style:{
				top:buildP.size*0.25,
				width:"100%",
			}});

			target.bottom=ASElement({
				nodeName:"div",
				style:{
					position:"absolute",
					left:0,
					top:0,
					transformOrigin:"50% 50%",
					backgroundColor:buildP.color,
					borderRadius:buildP.size*0.15,
					width:"100%",
					height:"100%",
					boxShadow:"0 0 "+target.size*0.5+"px "+buildP.colorL+" inset",
				},
			});
				target.bottom.light=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						top:0,
						left:0,
						borderRadius:buildP.size*0.15,
						width:"100%",
						height:"100%",
						opacity:0,
						boxShadow:(-target.size*0.1)+"px "+(-target.size*0.1)+"px "+target.size*0.4+"px rgba(255,255,255,1) inset",
					},
				});
				target.bottom.appendChild(target.bottom.light);
				target.bottom.shade=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						top:0,
						left:0,
						borderRadius:buildP.size*0.15,
						width:"100%",
						height:"100%",
						opacity:0,
						boxShadow:(target.size*0.1)+"px "+(target.size*0.1)+"px "+target.size*0.4+"px rgba(0,0,0,0.8) inset",
					},
				});
				target.bottom.appendChild(target.bottom.shade);
			target.appendChild(target.bottom);
			target.appendChild(target.word);

		target.set({style:{
			width:target.width0,
			height:target.height0,
		}});

		target.set(buildP);
		return(target);

	}


	var BasicDoubleButtonStr=new function() {

		this.button0Onclick=function() {
			if (!this.root.wOpen) {
				this.root.open();
			} else {
				if (this.root.confirm) this.root.confirm();
				this.root.close();
			}
			this.onmouseout();
		}

		this.button1Onclick=function() {
			this.root.close();
		}

		this.onmouseoutdown=function() {
			this.close();
		}

		this.open=function() {
			if (this.wOpen) return;
			this.wOpen=true;
			this.floor1.set({style:{display:"inline-block"}});
			this.floor1.setTarget({opacity:1});
			switch (this.fx) {
				case "left": this.floor0.setTarget({transform:{translateX:-ASGetElementWidth(this.button0)+this.dx}}); break;
				case "right": this.floor0.setTarget({transform:{translateX:ASGetElementWidth(this.button1)+this.dx}}); break;
				case "up": this.floor0.setTarget({transform:{translateY:-ASGetElementHeight(this.button0)}}); break;
				case "down": this.floor0.setTarget({transform:{translateY:ASGetElementHeight(this.button1)}}); break;
			}
			this.button1.onmouseover();
		}

		this.close=function() {
			if (!this.wOpen) return;
			this.wOpen=false;
			this.floor1.setTarget({opacity:0});
			switch (this.fx) {
				case "left": this.floor0.setTarget({transform:{translateX:0}}); break;
				case "right": this.floor0.setTarget({transform:{translateX:0}}); break;
				case "up": this.floor0.setTarget({transform:{translateY:0}}); break;
				case "down": this.floor0.setTarget({transform:{translateY:0}}); break;
			}
			this.setTimeout(function() {
				if (!this.wOpen) this.floor1.set({style:{display:"none"}});
			},300);
		}

	}


	function BasicDoubleButton(buildP) {

		if (!buildP.fx) buildP.fx="up";

		var target=ASElement({
			nodeName:"div",
			style:{
				position:"relative",
			},
			onmouseoutdown:BasicDoubleButtonStr.onmouseoutdown,
			open:BasicDoubleButtonStr.open,
			close:BasicDoubleButtonStr.close,
		});
		target.fx=buildP.fx;

		target.floor0=ASElement({
			nodeName:"div",
			style:{
				position:"relative",
			},
		});
		if (!buildP.button0) buildP.button0={};
		if (!buildP.button0.size) buildP.button0.size=buildP.size;
		target.button0=BasicButton(buildP.button0);
		target.floor0.appendChild(target.button0);
		target.button0.onclick=BasicDoubleButtonStr.button0Onclick;
		target.button0.root=target;

		target.floor1=ASElement({
			nodeName:"div",
			style:{
				position:"absolute",
				opacity:0,
			},
		});
		if (!buildP.button1) buildP.button1={};
		if (!buildP.button1.size) buildP.button1.size=buildP.button0.size;
		if (!buildP.button1.color) buildP.button1.color="rgb(200,200,200)";
		if (!buildP.button1.colorL) buildP.button1.colorL="rgba(230,230,230,0.3)";
		if (!buildP.button1.colorW) buildP.button1.colorW="black";
		target.button1=BasicButton(buildP.button1);
		target.floor1.appendChild(target.button1);
		target.button1.root=target;
		target.button1.onclick=BasicDoubleButtonStr.button1Onclick;

		target.appendChild(target.floor1);
		target.appendChild(target.floor0);

		if (buildP.wAequilate) {
			var width=Math.max(ASGetElementWidth(target.button0),ASGetElementWidth(target.button1));
			target.button0.resize({widthA:width});
			target.button1.resize({widthA:width});
		}

		target.dx=(ASGetElementWidth(target.button0)-ASGetElementWidth(target.button1))/2;
		target.floor1.set({style:{left:target.dx,display:"none"}});

		delete buildP.button0;
		delete buildP.button1;
		target.set(buildP);
		return(target);

	}


	var BasicLoadingStr=new function() {

		this.restart=function() {
			this.set({style:{opacity:0}});
			this.bottom.set({style:{opacity:1}});
			this.cover.set({style:{opacity:1}});
			this.success.set({style:{opacity:0}});
			this.failed.set({style:{opacity:0}});
		}

		this.start=function() {
			this.setTarget({opacity:1});
		}

		this.succeed=function() {
			this.success.setTarget({opacity:1});
			this.bottom.setTarget({opacity:0});
			this.cover.setTarget({opacity:0});
		}

		this.fail=function() {
			this.failed.setTarget({opacity:1});
			this.bottom.setTarget({opacity:0});
			this.cover.setTarget({opacity:0});
		}

		this.end=function() {
			this.setTarget({opacity:0,speed_alpha:0.05});
		}

	}


	function BasicLoading(buildP) {

		var target=ASElement({
			nodeName:"div",
			style:{
				position:"relative",
				width:100,
				height:100,
				opacity:0,
			},
		});

		target.bottom=ASElement({
			nodeName:"img",
			src:ASGetSrcByName("loadingBottom"),
			style:{
				position:"absolute",
				width:"100%",
				height:"100%",
			},
		});
		target.appendChild(target.bottom);

		target.cover=ASElement({
			nodeName:"img",
			src:ASGetSrcByName("loadingCover"),
			style:{
				position:"absolute",
				left:0,
				top:0,
				width:"100%",
				height:"100%",
				animation:"basicLoadingRotate 0.5s linear infinite",
			},
		});
		target.appendChild(target.cover);

		target.success=ASElement({
			nodeName:"img",
			src:ASGetSrcByName("loadingSucceed"),
			style:{
				position:"absolute",
				left:0,
				top:0,
				opacity:0,
				height:"100%",
			},
		});
		target.appendChild(target.success);

		target.failed=ASElement({
			nodeName:"img",
			src:ASGetSrcByName("loadingFail"),
			style:{
				position:"absolute",
				left:0,
				top:0,
				opacity:0,
				height:"100%",
			},
		});
		target.appendChild(target.failed);

		target.restart=BasicLoadingStr.restart;
		target.start=BasicLoadingStr.start;
		target.succeed=BasicLoadingStr.succeed;
		target.fail=BasicLoadingStr.fail;
		target.end=BasicLoadingStr.end;

		target.set(buildP);
		return(target);

	}


	var BasicInputStr=new function() {

		this.inputOnfocus=function() {
			this.root.alarm.setTarget({opacity:0});
			var width1=Math.min(ASGetWordWidth(this),ASGetElementWidth(this))+6;
			if (this.root.hint) width1=Math.max(width1,ASGetElementWidth(this.root.hint)+6);
			if (this.root.wWrong) {
				this.root.notice.set({style:{left:width1+11}});
			}

		}

		this.inputOnblur=function() {
			this.root.check();
			if (this.root.onblur1) this.root.onblur1();
		}

		this.inputOninput=function() {
			var width1=Math.min(ASGetWordWidth(this),ASGetElementWidth(this))+6;
			if (this.root.hint) width1=Math.max(width1,ASGetElementWidth(this.root.hint)+6);
			this.root.wWrong=false;
			this.root.alarm.set({style:{width:width1}});
			this.root.notice.set({style:{left:width1+11}});
			for (var i=0;i<this.root.wrong.length;i++) {
				if (this.root.wrong[i].type=="onblur") continue;
				this.judge=this.root.wrong[i].judge;
				if (this.judge()) {
					this.root.wWrong=true;
					this.root.alarm.setTarget({opacity:1});
					this.root.alarm.setTimeout(function() {this.setTarget({opacity:0});},150);
					this.root.notice.setWord({
						wordC:this.root.wrong[i].wordC,
						wordE:this.root.wrong[i].wordE,
					});
					this.root.notice.setTarget({opacity:1});
					break;
				}
			}
			if (!this.root.wWrong) {
				this.root.alarm.setTarget({opacity:0});
				this.root.notice.setTarget({opacity:0});
			}
			if (this.value) {
				if (this.root.hint) this.root.hint.set({style:{opacity:0}});
			} else {
				if (this.root.hint) this.root.hint.setTarget({opacity:1});
			}
		}

		this.inputClearWrong=function() {
			var width1=Math.min(ASGetWordWidth(this.input),ASGetElementWidth(this.input))+6;
			this.alarm.set({style:{width:width1}});
			this.notice.set({style:{left:width1+11}});
			this.alarm.setTarget({opacity:0});
			this.notice.setTarget({opacity:0});
			this.wWrong=false;
		}

		this.inputCheck=function() {
			var width1=ASGetWordWidth(this.input)+6;
			if (!this.value) width1=ASGetElementWidth(this.hint)+6;
			this.wWrong=false;
			for (var i=0;i<this.wrong.length;i++) {
				this.input.judge=this.wrong[i].judge;
				if (this.input.judge()) {
					this.wWrong=true;
					this.alarm.set({style:{width:width1}});
					this.alarm.setTarget({opacity:1});
					this.notice.setWord({
						wordC:this.wrong[i].wordC,
						wordE:this.wrong[i].wordE,
					});
					this.notice.set({style:{left:width1+11}});
					this.notice.setTarget({opacity:1});
					break;
				}
			}
			if (!this.wWrong) {
				this.alarm.setTarget({opacity:0});
				this.notice.setTarget({opacity:0});
			}
		}

		this.inputFocus=function() {
			this.input.focus();
		}

		this.inputSetValue=function(str) {
			this.input.value=str;
			if (str) {
				if (this.hint) this.hint.set({style:{opacity:0}});
			} else {
				if (this.hint) this.hint.setTarget({opacity:1});
			}
			this.clearWrong();
		}

		this.inputGetValue=function() {
			return(this.input.value);
		}

		this.textSetValue=function(str) {
			for (var i=0;i<this.text.length;i++) {
				if (this.text[i].value==str) {
					this.textF.setWord({
						wordC:this.text[i].wordC,
						wordE:this.text[i].wordE,
					});
					this.textC=i;
					return;
				}
			}
		}

		this.textGetValue=function(typeP) {
			return(this.text[this.textC].value);
		}

		this.popBlockOnmouseover=function() {
			this.word.setTarget({transform:{translateX:3}});
			this.line.setTarget({opacity:1});
		}

		this.popBlockOnmouseout=function() {
			this.word.setTarget({transform:{translateX:0}});
			this.line.setTarget({opacity:0});
		}

		this.popBlockOnmousedown=function() {
			this.word.setTarget({transform:{translateX:1}});
			this.line.setTarget({opacity:1});
		}

		this.popBlockOnmouseup=function() {
			this.word.setTarget({transform:{translateX:3}});
			this.line.setTarget({opacity:1});
		}

		this.popBlockOnclick=function() {
			if (this.num==this.root.blockC) {
				if (this.root.status=="close") {
					this.root.open();
				} else {
					this.root.close();
				}
			} else {
				this.root.change(this.num);
				this.onmouseout();
			}
		}

		this.popBlockSetBlock=function(w) {
			this.blockC=w;
			this.content.appendChild(this.block[w]);
			this.block[w].set({style:{
				opacity:1,
				left:0,
				pointerEvents:"auto",
			}});
			this.block[w].bottom.set({style:{opacity:0}});
			for (var i=0;i<this.block.length;i++) {
				if (i==w) continue;
				this.block[i].set({style:{
					opacity:0,
					left:0,
					pointerEvents:"none",
				}});
			}
		}

		this.popBlockOpen=function() {
			this.status="open";
			var x0=Math.round(ASGetElementWidth(this.block[this.blockC].word)+this.size*0.8);
			for (var i=0;i<this.block.length;i++) {
				this.block[i].bottom.setTarget({opacity:1});
				if (i==this.blockC) continue;
				this.block[i].setTarget({
					left:x0,
					opacity:1,
				});
				this.block[i].set({style:{
					pointerEvents:"auto",
				}});
				x0=Math.round(x0+ASGetElementWidth(this.block[i].word)+this.size*0.8);
			}
		}

		this.popBlockClose=function() {
			this.status="close";
			for (var i=0;i<this.block.length;i++) {
				this.block[i].bottom.setTarget({opacity:0});
				if (i==this.blockC) continue;
				this.block[i].setTarget({
					left:0,
					opacity:0,
				});
				this.block[i].set({style:{
					pointerEvents:"none",
				}});
				this.block[i].onmouseout();
			}
		}

		this.popBlockChange=function(w) {
			this.status="close";
			this.blockC=w;
			this.content.appendChild(this.block[w]);
			for (var i=0;i<this.block.length;i++) {
				this.block[i].bottom.setTarget({opacity:0});
				if (i==this.blockC) {
					this.block[i].setTarget({
						left:0,
						opacity:1,
					});
					this.block[i].set({style:{
						pointerEvents:"auto",
					}});
					continue;
				}
				this.block[i].setTarget({
					left:0,
					opacity:0,
				});
				this.block[i].set({style:{
					pointerEvents:"none",
				}});
			}
		}

		this.popBlockSetValue=function(str) {
			for (var i=0;i<this.block.length;i++) {
				if (this.block[i].value==str) {
					this.setBlock(i);
					return;
				}
			}
			return(false);
		}

		this.popBlockGetValue=function() {
			return(this.block[this.blockC].value);
		}

		this.radioPointOnmouseover=function() {
			this.setTarget({transform:{scale:1.2}});
		}

		this.radioPointOnmouseout=function() {
			this.setTarget({transform:{scale:1}});
		}

		this.radioPointOnmousedown=function() {
			this.setTarget({transform:{scale:0.9}});
		}

		this.radioPointOnmouseup=function() {
			this.setTarget({transform:{scale:1.2}});
		}

		this.radioPointOnclick=function() {
			this.root.setBlock(this.num);
			if (this.root.onchoose) this.root.onchoose();
		}

		this.radioPointSetBlock=function(w) {
			this.blockC=w;
			for (var i=0;i<this.block.length;i++) {
				if (i==w) continue;
				this.block[i].point.pic.setTarget({opacity:0});
			}
			this.block[w].point.pic.setTarget({opacity:1});
		}

		this.radioPointSetValue=function(str) {
			for (var i=0;i<this.block.length;i++) {
				if (this.block[i].value==str) {
					this.setBlock(i);
					return;
				}
			}
			return(false);
		}

		this.radioPointGetValue=function() {
			return(this.block[this.blockC].value);
		}

		this.checkBoxOnmouseover=function() {
			this.setTarget({transform:{scale:1.1}});
		}

		this.checkBoxOnmouseout=function() {
			this.setTarget({transform:{scale:1}});
		}

		this.checkBoxOnmousedown=function() {
			this.setTarget({transform:{scale:0.95}});
		}

		this.checkBoxOnmouseup=function() {
			this.setTarget({transform:{scale:1.1}});
		}

		this.checkBoxOnclick=function() {
			this.root.changeABlock(this.num);
			if (this.root.block[this.num].wChosen) {
				for (var i=0;i<this.root.block.length;i++) {
					if (this.root.block[i].belong==this.root.block[this.num].value) {
						this.root.chooseABlock(i);
					}
				}
			} else {
				for (var i=0;i<this.root.block.length;i++) {
					if (this.root.block[i].belong==this.root.block[this.num].value) {
						this.root.cancelABlock(i);
					}
				}
			}
			if (this.root.onchoose) this.root.onchoose();
		}

		this.checkBoxChangeABlock=function(w) {
			if (this.block[w].wChosen) {
				this.cancelABlock(w);
			} else {
				this.chooseABlock(w);
			}
		}

		this.checkBoxChooseABlock=function(w) {
			if (typeof(w)=="string") {
				for (var i=0;i<this.block.length;i++) {
					if (this.block[i].value==w) break;
				}
				if (i>=this.block.length) return;
				w=i;
			}
			if (this.block[w].wChosen) return;
			this.block[w].wChosen=true;
			this.block[w].point.pic.setTarget({opacity:1});
			if (this.block[w].belong) {
				var yes=true;
				for (var i=0;i<this.block.length;i++) {
					if (this.block[i].belong==this.block[w].belong && !this.block[i].wChosen) {
						yes=false;
						break;
					}
				}
				if (yes) {
					this.chooseABlock(this.block[w].belong);
				}
			}
		}

		this.checkBoxCancelABlock=function(w) {
			if (typeof(w)=="string") {
				for (var i=0;i<this.block.length;i++) {
					if (this.block[i].value==w) break;
				}
				if (i>=this.block.length) return;
				w=i;
			}
			if (!this.block[w].wChosen) return;
			this.block[w].wChosen=false;
			this.block[w].point.pic.setTarget({opacity:0});
			if (this.block[w].belong) {
				this.cancelABlock(this.block[w].belong);
			}
		}

		this.checkBoxSetValue=function(a) {
			if (typeof(a)!="object") {
				this.chooseABlock(a);
				return;
			}
			var w=[];
			for (var i=0;i<this.block.length;i++) {
				this.cancelABlock(i);
			}
			for (var i=0;i<a.length;i++) {
				this.chooseABlock(a[i]);
			}
		}

		this.checkBoxGetValue=function() {
			var a=[];
			for (var i=0;i<this.block.length;i++) {
				if (this.block[i].wChosen) a[a.length]=this.block[i].value;
			}
			return(a);
		}

	}


	function BasicInput(buildP) {

		var buildP1={};

		if (buildP.model=="nickname") {
			buildP1.type="input";
			buildP1.wordC="暱   稱";
			buildP1.wordE="Nickname";
			buildP1.hintC="沒想好- -";
			buildP1.hintE="Undefined";
			buildP1.maxLength=50;
			buildP1.wrong=[{
				wordC:"太長了",
				wordE:"It's too long",
				judge:function() {
					if (encodeWord(this.value).length>50) return(true);
					return(false);
				},
			}];
		}
		if (buildP.model=="name") {
			buildP1.type="input";
			buildP1.wordC="姓   名";
			buildP1.wordE="Name";
			buildP1.hintC="不告訴你→ →";
			buildP1.hintE="Undefined";
			buildP1.maxLength=30;
			buildP1.wrong=[{
				wordC:"太長了",
				wordE:"It's too long",
				judge:function() {
					if (encodeWord(this.value).length>30) return(true);
					return(false);
				},
			}];
		}
		if (buildP.model=="place") {
			buildP1.type="text";
			buildP1.wordC="身   份";
			buildP1.wordE="Status";
			buildP1.wReadonly=true;
			buildP1.text=[{
				wordC:"朋   友",
				wordE:"Friend",
				value:"N",
			},{
				wordC:"會員朋友",
				wordE:"Member",
				value:"m",
			},{
				wordC:"會員朋友（四年）",
				wordE:"Full Member",
				value:"M",
			},{
				wordC:"附屬執行委員會成員",
				wordE:"Subcom",
				value:"S",
			},{
				wordC:"執行委員會成員",
				wordE:"Exco",
				value:"E",
			}];
		}
		if (buildP.model=="sex") {
			buildP1.type="popBlock";
			buildP1.wordC="性   別";
			buildP1.wordE="Gender";
			buildP1.block=[{
				wordC:"漢   子",
				wordE:"Male",
				value:"M",
			},{
				wordC:"妹   子",
				wordE:"Female",
				value:"F",
			},{
				wordC:"保   密",
				wordE:"Secret",
				color:"rgba(150,150,150,0.8)",
				value:"U",
			}];
			buildP1.firstBlock=2;
		}
		if (buildP.model=="studentID") {
			buildP1.type="input";
			buildP1.wordC="學   號";
			buildP1.wordE="StudentID";
			buildP1.hintC="保   密";
			buildP1.hintE="Secret";
			buildP1.maxLength=8;
			buildP1.wrong=[{
				wordC:"只能是數字噢",
				wordE:"Should be 0~9",
				judge:function() {
					for (var i=0;i<this.value.length;i++) {
						if (this.value.charCodeAt(i)<48 || this.value.charCodeAt(i)>57) return(true);
					}
					return(false);
				}
			},{
				wordC:"需要8位数字",
				wordE:"Should be 8 numbers",
				type:"onblur",
				judge:function() {
					if (this.value.length!=0 && this.value.length!=8) return(true);
					return(false);
				}
			}];
		}
		if (buildP.model=="school") {
			buildP1.type="popBlock";
			buildP1.wordC="學   院";
			buildP1.wordE="School";
			buildP1.block=[{
				wordC:"SBM",
				wordE:"SBM",
				value:"SBM",
			},{
				wordC:"SENG",
				wordE:"SENG",
				value:"SENG",
			},{
				wordC:"SSCI",
				wordE:"SSCI",
				value:"SSCI",
			},{
				wordC:"SHSS",
				wordE:"SHSS",
				value:"SHSS",
			},{
				wordC:"IPO",
				wordE:"IPO",
				value:"IPO",
			},{
				wordC:"保   密",
				wordE:"Secret",
				color:"rgba(150,150,150,0.8)",
				value:"",
			}];
			buildP1.firstBlock=5;
		}
		if (buildP.model=="phone") {
			buildP1.type="input";
			buildP1.wordC="電   話";
			buildP1.wordE="Phone";
			buildP1.hintC="保   密";
			buildP1.hintE="Secret";
			buildP1.maxLength=8;
			buildP1.wrong=[{
				wordC:"只能是數字噢",
				wordE:"Should be 0~9",
				judge:function() {
					for (var i=0;i<this.value.length;i++) {
						if (this.value.charCodeAt(i)<48 || this.value.charCodeAt(i)>57) return(true);
					}
					return(false);
				}
			},{
				wordC:"需要8位数字",
				wordE:"Should be 8 numbers",
				type:"onblur",
				judge:function() {
					if (this.value.length!=0 && this.value.length!=8) return(true);
					return(false);
				}
			}];
		}
		if (buildP.model=="lang") {
			buildP1.type="radioPoint";
			buildP1.wordC="语   言<br>Language";
			buildP1.wordE="语   言<br>Language";
			buildP1.widthB=1000;
			buildP1.block=[{
				wordC:"中文",
				wordE:"中文",
				value:"C",
			},{
				wordC:"English",
				wordE:"English",
				value:"E",
			}];
			buildP1.onchoose=function() {
				setLang(this.block[this.blockC].value);
				addACookie("cfas_lang",this.getValue(),30*365*24*60);
			}
		}
		if (buildP.model=="itsc") {
			buildP1.type="input";
			buildP1.wordC="ITSC";
			buildP1.hintC="例如：fwuae";
			buildP1.hintE="E.g. fwuae";
			buildP1.wrong=[{
				wordC:"只能是小寫字母噢",
				wordE:"Should be 'a'-'z'",
				judge:function() {
					for (var i=0;i<this.value.length;i++) {
						if (this.value.charCodeAt(i)<97 || this.value.charCodeAt(i)>122) return(true);
					}
					return(false);
				},
			},{
				type:"onblur",
				wordC:"必填",
				wordE:"Compulsory",
				judge:function() {
					if (this.value.length==0) return(true);
					return(false);
				},
			}];
		}
		if (buildP.model=="payway") {
			buildP1.type="text";
			buildP1.wordC="付款方式";
			buildP1.wordE="How to pay";
			buildP1.text=[{
				wordC:"於民藝櫃檯付款",
				wordE:"Pay on CFAS counter",
				value:"E",
			},{
				wordC:"交予熟悉的民藝Exco",
				wordE:"Pay to our Exco",
				value:"N",
			}];
		}
		if (buildP.model=="excoList") {
			buildP1.type="radioPoint";
			buildP1.block=[];
			var data=ASGetSourceByName("data0").getNodeByName("exco14");
			for (var i=0;i<data.node.length;i++) {
				buildP1.block[i]={
					wordC:data.node[i].getAttribute("nameC"),
					wordE:data.node[i].getAttribute("nameE"),
					value:data.node[i].getAttribute("itsc"),
				}
			}
		}

		for (var item in buildP1) {
			if (!(item in buildP)) buildP[item]=buildP1[item];
		}

		if (!buildP.type) buildP.type="input";
		if (!buildP.size) buildP.size=24;
		if (!buildP.widthL) {
			if (buildP.wordC || buildP.wordE) buildP.widthL=150;
		}
		if (!buildP.widthA) buildP.widthA=DEFAULT_PAGE_WIDTHL;

		var target=ASElement({
			nodeName:"div",
			style:{
				position:"relative",
				width:buildP.widthA,
			},
		});

		if (buildP.wordC || buildP.wordE) {
			if (!buildP.colorW) buildP.colorW="rgb(200,0,0)";
			if (!buildP.sizeW) buildP.sizeW=buildP.size*0.9;
			target.word=BasicWord({
				size:buildP.size,
				wordC:buildP.wordC,
				wordE:buildP.wordE,
			});
			var height1=target.word.heightA;
			target.word=BasicWord({
				size:buildP.sizeW,
				color:buildP.colorW,
				wordC:buildP.wordC,
				wordE:buildP.wordE,
				giveupExtra:true,
				style:{
					position:"absolute",
				},
			});
			var height2=target.word.heightA;
			target.word.set({style:{
				top:(height1-height2),
			}});
			if (buildP.widthL!=0) {
				target.word.set({style:{
					width:buildP.widthL,
				}});
			}
			target.appendChild(target.word);
		}

		var width1=buildP.widthA-buildP.widthL-10;
		if (buildP.widthL==0 && target.word) width1=buildP.widthA-target.word.widthA-10;
		if (buildP.wBr || (!target.word && !buildP.widthL)) width1=buildP.widthA;
		var top=0;
		if (buildP.wBr) top=ASGetElementHeight(target.word)*1.2;
		target.content=ASElement({
			nodeName:"div",
			style:{
				position:"relative",
				marginTop:top,
				left:buildP.widthA-width1,
				width:width1,
			},
		});
		target.appendChild(target.content);

		if (buildP.type=="input") {
			if (!buildP.wrong) buildP.wrong=[];
			if (buildP.wCompulsory) {
				buildP.wrong[buildP.wrong.length]={
					wordC:"必填",
					wordE:"Compulsory",
					type:"onblur",
					judge:function() {
						if (this.value.length==0) return(true);
						return(false);
					},
				};
			};
			target.alarm=ASElement({
				nodeName:"div",
				style:{
					position:"absolute",
					backgroundColor:"rgba(255,0,0,0.3)",
					marginTop:-1,
					left:-3,
					opacity:0,
					maxWidth:width1+6,
					pointerEvents:"none",
				},
			});
			target.content.appendChild(target.alarm);
			if (buildP.hintC || buildP.hintE) {
				if (!buildP.hintColor) buildP.hintColor="rgba(150,150,150,0.8)";
				target.hint=BasicWord({
					position:"absolute",
					left:0,
					top:0,
					size:buildP.size,
					color:buildP.hintColor,
					wordC:buildP.hintC,
					wordE:buildP.hintE,
					width:"max",
					giveupExtra:true,
					style:{
						position:"absolute",
						pointerEvents:"none",
					},
				});
				target.content.appendChild(target.hint);
			}
			target.input=ASElement({
				nodeName:"input",
				type:"text",
				style:{
					fontSize:buildP.size,
					fontFamily:DEFAULT_FONT,
					width:width1,
					borderStyle:"none",
					outline:"none",
					backgroundColor:"rgba(0,0,0,0)",
				},
				root:target,
				onfocus:BasicInputStr.inputOnfocus,
				onblur:BasicInputStr.inputOnblur,
				oninput:BasicInputStr.inputOninput,
			});
			target.content.appendChild(target.input);
			if (buildP.wReadonly) target.input.set({readOnly:true});
			if (buildP.maxLength) target.input.set({maxLength:buildP.maxLength});
			if (buildP.onblur) {
				target.onblur1=buildP.onblur;
				delete buildP.onblur;
			}
			target.alarm.set({style:{height:ASGetElementHeight(target.input)}});
			if (!buildP.noticeColor) buildP.noticeColor="rgb(130,130,130)";
			target.notice=BasicWord({
				size:buildP.size*0.8,
				color:buildP.noticeColor,
				wordC:"&#8203;",
				wordE:"&#8203;",
				width:"max",
				style:{
					position:"absolute",
					pointerEvents:"none",
				},
			});
			target.notice.set({style:{
				top:target.notice.heightA/4,
			}});
			target.content.appendChild(target.notice);
			target.clearWrong=BasicInputStr.inputClearWrong;
			target.check=BasicInputStr.inputCheck;
			target.setValue=BasicInputStr.inputSetValue;
			target.getValue=BasicInputStr.inputGetValue;
			target.focus=BasicInputStr.inputFocus;
		}
		if (buildP.type=="text") {
			target.textF=BasicWord({
				width:"max",
				size:buildP.size,
				wordC:buildP.text[0].wordC,
				wordE:buildP.text[0].wordE,
				giveupExtra:true,
			});
			target.content.appendChild(target.textF);
			if (buildP.wReadonly) target.textF.set({
				style:{cursor:"default"},
			});
			target.textC=0;
			target.setValue=BasicInputStr.textSetValue;
			target.getValue=BasicInputStr.textGetValue;
		}
		if (buildP.type=="popBlock") {
			target.filler=BasicWord({
				size:buildP.size,
				wordC:"&#8203;",
				giveupExtra:true,
				style:{
					pointerEvents:"none",
				},
			});
			target.content.appendChild(target.filler);
			target.block=[];
			target.status="close";
			for (var i=0;i<buildP.block.length;i++) {
				target.block[i]=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						opacity:0,
						left:0,
						cursor:"pointer",
					},
					onmouseover:BasicInputStr.popBlockOnmouseover,
					onmouseout:BasicInputStr.popBlockOnmouseout,
					onmousedown:BasicInputStr.popBlockOnmousedown,
					onmouseup:BasicInputStr.popBlockOnmouseup,
					onclick:BasicInputStr.popBlockOnclick,
					num:i,
					root:target,
					value:buildP.block[i].value,
				});
				var block=target.block[i];
				target.content.appendChild(block);
					if (!buildP.block[i].color) buildP.block[i].color="black";
					block.word=BasicWord({
						size:buildP.size,
						wordC:buildP.block[i].wordC,
						wordE:buildP.block[i].wordE,
						color:buildP.block[i].color,
						width:"max",
						giveupExtra:true,
						ignoreM:true,
						style:{
							position:"absolute",
							cursor:"pointer",
						},
					});
					block.appendChild(block.word);
					block.bottom=ASElement({
						nodeName:"div",
						style:{
							position:"relative",
							left:-buildP.size*0.4,
							width:buildP.size*0.15,
							height:block.word.heightA,
							backgroundColor:"rgba(150,150,150,0.8)",
						},
					});
					block.appendChild(block.bottom);
					block.line=ASElement({
						nodeName:"div",
						style:{
							position:"absolute",
							left:-buildP.size*0.4,
							width:buildP.size*0.15,
							height:block.word.heightA,
							backgroundColor:"rgb(230,0,0)",
							opacity:0,
						},
					});
					block.appendChild(block.line);
			}
			if (!buildP.firstBlock) buildP.firstBlock=0;
			target.setBlock=BasicInputStr.popBlockSetBlock;
			target.setBlock(buildP.firstBlock);
			target.open=BasicInputStr.popBlockOpen;
			target.close=BasicInputStr.popBlockClose;
			target.change=BasicInputStr.popBlockChange;
			target.setValue=BasicInputStr.popBlockSetValue;
			target.getValue=BasicInputStr.popBlockGetValue;
			delete buildP.block;
		}
		if (buildP.type=="radioPoint") {
			target.block=[];
			if (buildP.col) buildP.widthB=width1/buildP.col;
			if (!buildP.space && !buildP.widthB) buildP.space=buildP.size*2;
			if (buildP.space) target.content.set({style:{width:width1+buildP.space}});
			for (var i=0;i<buildP.block.length;i++) {
				target.block[i]=ASElement({
					nodeName:"div",
					value:buildP.block[i].value,
					num:i,
					style:{
						position:"relative",
						left:buildP.size,
					},
				});
				target.content.appendChild(target.block[i]);
				if (buildP.space) target.block[i].set({style:{marginRight:buildP.space}});
				if (buildP.widthB) target.block[i].set({style:{width:buildP.widthB}});
				var block=target.block[i];
					if (!buildP.block[i].color) buildP.block[i].color="black";
					block.word=BasicWord({
						size:buildP.size,
						wordC:buildP.block[i].wordC,
						wordE:buildP.block[i].wordE,
						color:buildP.block[i].color,
						ignoreM:true,
						width:"max",
						giveupExtra:true,
					});
					block.appendChild(block.word);
					block.point=ASElement({
						nodeName:"div",
						root:target,
						num:i,
						style:{
							position:"absolute",
							left:-buildP.size*1,
							bottom:buildP.size*0.25,
							borderRadius:buildP.size*0.7,
							width:buildP.size*0.7,
							height:buildP.size*0.7,
							cursor:"pointer",
							boxShadow:"0 0 0px "+buildP.size*0.1+"px rgba(150,150,150,0.8) inset",
						},
						onmouseover:BasicInputStr.radioPointOnmouseover,
						onmouseout:BasicInputStr.radioPointOnmouseout,
						onmousedown:BasicInputStr.radioPointOnmousedown,
						onmouseup:BasicInputStr.radioPointOnmouseup,
						onclick:BasicInputStr.radioPointOnclick,
					});
					block.appendChild(block.point);
						block.point.pic=ASElement({
							nodeName:"img",
							src:ASGetSrcByName("radioPoint"),
							style:{
								width:"100%",
								height:"100%",
								opacity:0,
							},
						});
						block.point.appendChild(block.point.pic);
			}
			if (!buildP.firstBlock) buildP.firstBlock=0;
			target.setBlock=BasicInputStr.radioPointSetBlock;
			target.setValue=BasicInputStr.radioPointSetValue;
			target.getValue=BasicInputStr.radioPointGetValue;
			target.onchoose=buildP.onchoose;
			target.setBlock(buildP.firstBlock);
			delete buildP.block;
		}
		if (buildP.type=="checkBox") {
			target.block=[];
			if (buildP.col) buildP.widthB=width1/buildP.col;
			if (!buildP.space && !buildP.widthB) buildP.space=buildP.size*2;
			if (buildP.space) target.content.set({style:{width:width1+buildP.space}});
			for (var i=0;i<buildP.block.length;i++) {
				target.block[i]=ASElement({
					nodeName:"div",
					value:buildP.block[i].value,
					belong:buildP.block[i].belong,
					num:i,
					style:{
						position:"relative",
						left:buildP.size,
					},
				});
				target.content.appendChild(target.block[i]);
				if (buildP.space) target.block[i].set({style:{marginRight:buildP.space}});
				if (buildP.widthB) target.block[i].set({style:{width:buildP.widthB}});
				var block=target.block[i];
					if (!buildP.block[i].color) buildP.block[i].color="black";
					block.word=BasicWord({
						size:buildP.size,
						wordC:buildP.block[i].wordC,
						wordE:buildP.block[i].wordE,
						color:buildP.block[i].color,
						ignoreM:true,
						width:"max",
						giveupExtra:true,
					});
					block.appendChild(block.word);
					block.point=ASElement({
						nodeName:"div",
						root:target,
						num:i,
						style:{
							position:"absolute",
							left:-buildP.size*1,
							bottom:buildP.size*0.25,
							borderRadius:buildP.size*0.15,
							width:buildP.size*0.7,
							height:buildP.size*0.7,
							cursor:"pointer",
							boxShadow:"0 0 0px "+buildP.size*0.1+"px rgba(150,150,150,0.8) inset",
						},
						onmouseover:BasicInputStr.checkBoxOnmouseover,
						onmouseout:BasicInputStr.checkBoxOnmouseout,
						onmousedown:BasicInputStr.checkBoxOnmousedown,
						onmouseup:BasicInputStr.checkBoxOnmouseup,
						onclick:BasicInputStr.checkBoxOnclick,
					});
					block.appendChild(block.point);
						block.point.pic=ASElement({
							nodeName:"img",
							src:ASGetSrcByName("checkBox"),
							style:{
								width:"100%",
								height:"100%",
								opacity:0,
							},
						});
						block.point.appendChild(block.point.pic);
			}
			target.changeABlock=BasicInputStr.checkBoxChangeABlock;
			target.chooseABlock=BasicInputStr.checkBoxChooseABlock;
			target.cancelABlock=BasicInputStr.checkBoxCancelABlock;
			target.getValue=BasicInputStr.checkBoxGetValue;
			target.onchoose=buildP.onchoose;
			delete buildP.block;
		}

		target.set(buildP);
		if (buildP.value) target.setValue(buildP.value);
		return(target);

	}


	var BasicSelectStr=new function() {

		this.entryOnmousedown=function() {
			this.root.downTimeS=ASGetTime();
			this.wDown=true;
			if (this.root.pressTime) this.setTimeout(this.onclick,this.root.pressTime);
		}

		this.entryOnmouseup=function() {
			this.setTimeout(function() {this.wDown=false;},0);
		}

		this.entryOnclick=function() {
			if (!this.wDown) return;
			if (this.root.pressTime && ASGetTime()-this.root.downTimeS<this.root.pressTime) {
				if (this.root.entryOnclick) this.root.entryOnclick();
				if (this.root.wOpen) {
					this.root.close();
				}
			} else {
				if (!this.root.wOpen
					|| (this.root.pressTime && ASGetTime()-this.root.downTimeS>=this.root.pressTime)) {
					this.root.open();
				} else {
					this.root.close();
				}
			}
		}

		this.blockOnmouseover=function() {
			this.bottom.setTarget({opacity:1});
			this.setTarget({transform:{scale:1}});
		}

		this.blockOnmouseout=function() {
			this.bottom.setTarget({opacity:0});
			this.setTarget({transform:{scale:1}});
		}

		this.blockOnmousedown=function() {
			this.bottom.setTarget({opacity:1});
			this.setTarget({transform:{scale:0.9}});
		}

		this.blockOnmouseup=function() {
			this.bottom.setTarget({opacity:0});
			this.setTarget({transform:{scale:1}});
		}

		this.blockOnclick=function() {
			this.root.value=this.value;
			this.root.blockC=this.num;
			this.root.close();
			if (this.root.onchoose) this.root.onchoose();
		}

		this.onmouseoutdown=function() {
			this.close();
		}

		this.open=function() {
			if (this.wOpen) return;
			this.wOpen=true;
			this.appendChild(this.menuF);
			this.menuF.set({style:{opacity:0}});
			this.menuF.setTimeout(function() {this.setTarget({opacity:1});},10);
			if (this.onopen) this.onopen();
		}

		this.close=function() {
			this.wOpen=false;
			this.menuF.setTarget({opacity:0});
			this.menuF.setTimeout(function() {
				if (!this.root.wOpen) {
					this.root.removeChild(this);
				}
			},150);
			if (this.onclose) this.onclose();
		}

	}


	function BasicSelect(buildP) {

		if (!buildP.fx) buildP.fx="down";
		var target=ASElement({
			nodeName:"div",
			style:{
				position:"relative",
			},
		});
		target.fx=buildP.fx;
		target.wOpen=false;
		target.blockC=-1;
		target.value="";
		if (buildP.firstBlock) {
			target.blockC=buildP.firstBlock;
			target.value=buildP.block[target.blockC].value;
		}

		ASOutdownList[ASOutdownList.length]=target;
		target.onmouseoutdown=BasicSelectStr.onmouseoutdown;

		target.entryF=ASElement({
			nodeName:"div",
			root:target,
			onmousedown:BasicSelectStr.entryOnmousedown,
			onmouseup:BasicSelectStr.entryOnmouseup,
			onclick:BasicSelectStr.entryOnclick,
			style:{
				cursor:"pointer",
			},
		});
		target.appendChild(target.entryF);
			target.entry=buildP.entry;
			target.entryF.appendChild(target.entry);
			if (buildP.entryOnclick) {
				if (!buildP.pressTime) buildP.pressTime=300;
			}

		if (!buildP.col) buildP.col=1;
		target.col=buildP.col;
		target.menuF=ASElement({
			nodeName:"div",
			style:{
				position:"absolute",
			},
			root:target,
		});
		switch (target.fx) {
			case "up": target.menuF.set({style:{bottom:ASGetElementHeight(target.entry)*1.1,left:0}}); break;
			case "down": target.menuF.set({style:{top:ASGetElementHeight(target.entry)*1.1,left:0}}); break;
			case "upRight": target.menuF.set({style:{bottom:ASGetElementHeight(target.entry)*1.1,right:0}}); break;
		}
			if (!buildP.widthA) {
				buildP.widthA=0;
				for (var i=0;i<buildP.block.length;i++) {
					buildP.widthA=Math.max(buildP.widthA,ASGetElementWidth(buildP.block[i]));
				}
				buildP.widthA++;
			}
			if (!buildP.heightA) {
				buildP.heightA=0;
				var h1=0;
				for (var i=0;i<buildP.block.length;i++) {
					h1=Math.max(ASGetElementHeight(buildP.block[i]),h1);
					if ((i+1)%target.col==0) {
						buildP.heightA+=h1+0.5;
						h1=0;
					}
				}
			}
			if (!buildP.BGC) buildP.BGC="rgb(250,250,250)";
			if (!buildP.menuPadding) buildP.menuPadding=0;
			target.menu=BasicScroll({
				widthA:buildP.widthA*target.col+buildP.menuPadding*2,
				heightA:buildP.heightA+buildP.menuPadding*2,
				style:{
					boxShadow:"0 0 10px rgba(0,0,0,0.8)",
					backgroundColor:buildP.BGC,
				},
			});
			target.menuF.appendChild(target.menu);
			target.menu.container.set({style:{padding:buildP.menuPadding}});
			if (!buildP.align) buildP.align="left";
			target.menu.block=[];
			for (var i=0;i<buildP.block.length;i++) {
				target.menu.block[i]=ASElement({
					nodeName:"div",
					style:{
						position:"relative",
						width:buildP.widthA,
					},
					root:target,
					value:buildP.block[i].value,
				});
				target.menu.container.appendChild(target.menu.block[i]);
				if (!buildP.giveupMenuExtra && !buildP.block[i].giveupMenuExtra) {
					target.menu.block[i].set({
						style:{
							cursor:"pointer",
						},
						onmouseover:BasicSelectStr.blockOnmouseover,
						onmouseout:BasicSelectStr.blockOnmouseout,
						onmousedown:BasicSelectStr.blockOnmousedown,
						onmouseup:BasicSelectStr.blockOnmouseup,
						onclick:BasicSelectStr.blockOnclick,
					});
				}
				var block=target.menu.block[i];
				block.bottom=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						width:"100%",
						height:"100%",
						backgroundColor:"rgba(200,0,0,0.2)",
						opacity:0,
					},
				});
				block.appendChild(block.bottom);
				block.content=buildP.block[i];
				block.appendChild(buildP.block[i]);
				buildP.block[i].set({style:{position:"absolute"}});
				switch (buildP.align) {
					case "left": break;
					case "center": buildP.block[i].set({wCenter:true}); break;
				}
				block.set({style:{height:ASGetElementHeight(buildP.block[i])}});
				if (!buildP.giveupMenuExtra && !buildP.block[i].giveupMenuExtra && !buildP.block[i].giveupMenuImg) {
					block.region=ASElement({
						nodeName:"img",
						src:ASGetSrcByName("editorToolRegion"),
						style:{
							position:"absolute",
							width:"100%",
							height:"100%",
						},
						ondragstart:banFunction,
					});
					block.appendChild(block.region);
				}
			}
		delete buildP.block;
		if (buildP.menuP) target.menuF.set(buildP.menuP);

		target.open=BasicSelectStr.open;
		target.close=BasicSelectStr.close;

		target.set(buildP);
		return(target);

	}


	var BasicListStr=new function() {

		this.titleOnmouseover=function() {
			this.setTarget({transform:{translateY:-5}});
		}

		this.titleOnmouseout=function() {
			this.setTarget({transform:{translateY:0}});
		}

		this.titleOnmousedown=function() {
			this.setTarget({transform:{translateY:0}});
		}

		this.titleOnmouseup=function() {
			this.setTarget({transform:{translateY:-5}});
		}

		this.titleOnclick=function() {
			this.root.setKeyCol(this.name);
		}

		this.tideRow=function() {
			var color1=["rgba(50,0,0,0.2)","rgba(0,0,0,0)"];
			var color2=["rgba(255,255,255,0.8)","rgba(50,0,0,0.4)"];
			for (var i=0;i<this.row.length;i++) {
				this.row[i].set({style:{backgroundColor:color1[i%2]}});
				for (var j=1;j<this.col.length;j++) {
					this.row[i].line[j].set({style:{backgroundColor:color2[i%2]}});
				}
			}
		}

		this.addARow=function(data) {
			this.row[this.row.length]=ASElement({
				nodeName:"div",
				style:{
					position:"relative",
					paddingTop:this.size*0.2,
					paddingBottom:this.size*0.2,
					width:this.widthA,
				},
			});
			var row=this.row[this.row.length-1];
			row.col=[];
			row.colF=[];
			row.line=[];
			var heightA=0,x1=0;
			for (var i=0;i<this.col.length;i++) {
				row.colF[i]=ASElement({
					nodeName:"div",
					style:{
						width:this.col[i].width,
					}
				});
				row.appendChild(row.colF[i]);
				var p=data[this.col[i].name];
				p.size=this.size;
				if (p.listType=="basicWord") {
					if (!p.style) p.style={};
					p.style.width="100%";
					p.style.textAlign="center";
					row.col[i]=BasicWord(p);
				}
				if (p.listType=="basicInput") {
					row.col[i]=BasicInput(p);
					if (!p.style) p.style={};
					p.style.top=-this.size;
				}
				row.colF[i].appendChild(row.col[i]);
				if (ASGetElementHeight(row.colF[i])>heightA) heightA=ASGetElementHeight(row.colF[i]);
				if (i>0) {
					row.line[i]=ASElement({
						nodeName:"div",
						style:{
							position:"absolute",
							width:1,
							left:x1-0.5,
							top:0,
						},
					});
					row.appendChild(row.line[i]);
				}
				x1+=this.col[i].width;
			}
			for (var i=0;i<this.col.length;i++) {
				row.colF[i].set({style:{transform:{
					translateY:(ASGetElementHeight(row.colF[i])-heightA)/2,
				}}});
				if (i>0) row.line[i].set({style:{height:heightA+this.size*0.4}});
			}
			if (!this.keyCol) {
				this.listF.appendChild(row);
				this.listF.appendChild(ASElement("br"));
			} else {
				var k=-1;
				for (var i=0;i<this.col.length;i++) {
					if (this.col[i].name==this.keyCol) {
						k=i;
						break;
					}
				}
				for (var i=this.row.length-1;i>0;i--) {
					if (this.fx==1) {
						if (this.row[i].col[k].getValue()>=this.row[i-1].col[k].getValue()) break;
					} else {
						if (this.row[i].col[k].getValue()<=this.row[i-1].col[k].getValue()) break;
					}
					var aa=this.row[i];
					this.row[i]=this.row[i-1];
					this.row[i-1]=aa;
				}
				if (i==this.row.length-1) {
					this.listF.appendChild(row);
					this.listF.appendChild(ASElement("br"));
				} else {
					this.listF.insertBefore(row,this.row[i+1]);
					this.listF.insertBefore(ASElement("br"),this.row[i+1]);
				}
			}
			this.tideRow();
		}

		this.clearRow=function() {
			this.listF.clearChild();
			this.row=[];
		}

		this.setKeyCol=function(name) {
			if (this.keyCol==name) this.fx*=-1;
			else this.fx=1;
			this.keyCol=name;
			var key=-1;
			for (var i=0;i<this.col.length;i++) {
				if (this.col[i].name==this.keyCol) {
					key=i;
					break;
				}
			}
			for (var i=0;i<this.row.length-1;i++) {
				var k=i;
				for (var j=i+1;j<this.row.length;j++) {
					if (this.fx==1) {
						if (this.row[j].col[key].getValue()<this.row[k].col[key].getValue()) k=j;
					} else {
						if (this.row[j].col[key].getValue()>this.row[k].col[key].getValue()) k=j;
					}
				}
				var aa=this.row[i];
				this.row[i]=this.row[k];
				this.row[k]=aa;
			}
			this.listF.clearChild();
			for (var i=0;i<this.row.length;i++) {
				this.listF.appendChild(this.row[i]);
				this.listF.appendChild(ASElement("br"));
			}
			this.tideRow();
		}

	}


	function BasicList(buildP) {

		if (!buildP.size) buildP.size=24;

		var target=ASElement({
			nodeName:"div",
		});
		target.col=buildP.col;
		target.widthA=0;
		target.keyCol=null;
		target.fx=1;

			target.titleF=ASElement({
				nodeName:"div",
				style:{
					position:"relative",
					marginTop:buildP.size*0.3,
					marginBottom:buildP.size*0.3,
				},
			});
			target.appendChild(target.titleF);
			target.titleF.word=[];
			target.titleF.line=[];
			for (var i=0;i<target.col.length;i++) {
				target.titleF.word[i]=BasicWord({
					size:buildP.size,
					color:"rgb(230,0,0)",
					wordC:target.col[i].wordC,
					wordE:target.col[i].wordE,
					ignoreM:true,
					style:{
						textAlign:"center",
						width:target.col[i].width,
						cursor:"pointer",
					},
					name:target.col[i].name,
					root:target,
					onmouseover:BasicListStr.titleOnmouseover,
					onmouseout:BasicListStr.titleOnmouseout,
					onmousedown:BasicListStr.titleOnmousedown,
					onmouseup:BasicListStr.titleOnmouseup,
					onclick:BasicListStr.titleOnclick,
				});
				target.titleF.appendChild(target.titleF.word[i]);
				target.titleF.line[i]=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						backgroundColor:"rgba(255,0,0,0.7)",
						width:1,
						left:target.widthA-0.5,
					},
				});
				target.titleF.appendChild(target.titleF.line[i]);
				target.widthA+=target.col[i].width;
			}
			target.titleF.set({style:{width:target.widthA}});
			target.titleF.line[i]=ASElement({
				nodeName:"div",
				style:{
					position:"absolute",
					backgroundColor:"rgba(255,0,0,0.5)",
					width:1,
					left:target.widthA-0.5,
				},
			});
			target.titleF.appendChild(target.titleF.line[i]);
			var height=ASGetElementHeight(target.titleF);
			for (var i=0;i<=target.col.length;i++) {
				target.titleF.line[i].set({style:{height:height}});
			}

		target.set({style:{width:target.widthA}});
		target.appendChild(ASElement("br"));

			target.listF=ASElement({
				nodeName:"div",
				style:{
					width:target.widthA,
				},
			});
			target.appendChild(target.listF);
			target.row=[];

		target.tideRow=BasicListStr.tideRow;
		target.addARow=BasicListStr.addARow;
		target.clearRow=BasicListStr.clearRow;
		target.setKeyCol=BasicListStr.setKeyCol;

		target.set(buildP);
		return(target);

	}


	var BasicScrollStr=new function() {

		this.resize=function(typeP) {
			if (typeP.widthA) {
				this.set({style:{width:typeP.widthA}});
				this.container.set({style:{width:typeP.widthA+DEFAULT_SCROLLBAR_WIDTH}});
				this.context.set({style:{width:typeP.widthA}});
			}
			if (typeP.heightA) {
				this.set({style:{height:typeP.heightA}});
				this.container.set({style:{height:typeP.heightA}});
			}
		}

		this.resizeT=function(typeP) {
			if (typeP.widthA) {
				this.setTarget({width:typeP.widthA});
				this.container.setTarget({width:typeP.widthA+DEFAULT_SCROLLBAR_WIDTH});
				this.context.setTarget({width:typeP.widthA});
			}
			if (typeP.heightA) {
				this.setTarget({height:typeP.heightA});
				this.container.setTarget({height:typeP.heightA});
			}
		}

		this.changeScroll=function() {
			if (this.targetScroll<0) return;
			if (wSame(this.container.scrollTop,this.targetScroll,1)) {
				this.targetScroll=-1;
				return;
			}
			if (this.targetScroll>this.container.scrollTop) {
				this.container.scrollTop+=Math.pow(this.targetScroll-this.container.scrollTop,0.65);
			} else {
				this.container.scrollTop-=Math.pow(this.container.scrollTop-this.targetScroll,0.65);
			}
			this.setTimeout(this.changeScroll,16);
		}

		this.scrollTo=function(s) {
			if (s>this.container.scrollHeight-this.offsetHeight) {
				s=this.container.scrollHeight-this.offsetHeight;
			}
			if (s<0) s=0;
			if (this.targetScroll>0) {
				this.targetScroll=s;
			} else {
				this.targetScroll=s;
				this.changeScroll();
			}

		}

		this.containerOnscroll=function() {
			if (this.parentNode.onscroll) this.parentNode.onscroll();
		}

		this.onmousewheel=function() {
			this.targetScroll=-1;
		}

	}


	function BasicScroll(buildP) {

		if (!buildP.widthA) buildP.widthA=0;
		if (!buildP.heightA) buildP.heightA=0;
		var target=ASElement({
			nodeName:"div",
			style:{
				position:"relative",
				overflow:"hidden",
				width:buildP.widthA,
				height:buildP.heightA,
			},
			onmousewheel:BasicScrollStr.onmousewheel,
		});
		target.targetScroll=-1;

			target.container=ASElement({
				nodeName:"div",
				style:{
					position:"relative",
					overflowX:"hidden",
					overflowY:"scroll",
					width:buildP.widthA+DEFAULT_SCROLLBAR_WIDTH,
					height:buildP.heightA,
				},
				onscroll:BasicScrollStr.containerOnscroll,
			});
			target.appendChild(target.container);

				target.context=ASElement({
					nodeName:"div",
					style:{
						width:buildP.widthA,
					},
				});
				target.container.appendChild(target.context);

		target.resize=BasicScrollStr.resize;
		target.resizeT=BasicScrollStr.resizeT;
		target.changeScroll=BasicScrollStr.changeScroll;
		target.scrollTo=BasicScrollStr.scrollTo;

		target.set(buildP);
		return(target);

	}


	var BasicEditToolStr=new function() {

		BasicEditToolList=[];

		BasicEditToolIconList={
			help:{
				titleC:"幫助",
				titleE:"Help",
				pos:0,
			},
			font:{
				pos:1,
				titleC:"字體",
				titleE:"Font",
				onpressC:"選擇并應用字體",
				onpressE:"Select and apply a font",
				onclickC:"應用上一次選擇的字體",
				onclickE:"Apply the font selected",
			},
			size:{
				pos:2,
				titleC:"字號",
				titleE:"Size",
				onpressC:"選擇并應用字號",
				onpressE:"Select and apply a font size",
				onclickC:"應用上一次選擇的字號",
				onclickE:"Apply the font size selected",
			},
			bold:{
				pos:3,
				titleC:"加粗",
				titleE:"Bold",
				onclickC:"使用或取消粗體",
				onclickE:"Use or cancel bold",
			},
			italic:{
				pos:4,
				titleC:"傾斜",
				titleE:"Italic",
				onclickC:"使用或取消斜體",
				onclickE:"Use or cancel italics",
			},
			underline:{
				pos:5,
				titleC:"下劃線",
				titleE:"Underline",
				onclickC:"使用或取消下劃線",
				onclickE:"Use or cancel underline",
			},
			colorW:{
				pos:6,
				titleC:"文字顏色",
				titleE:"Font Color",
				onpressC:"選擇并应用文字顏色",
				onpressE:"Select and apply a text color",
				onclickC:"應用上一次選擇的文字顏色",
				onclickE:"Apply the text color selected",
			},
			colorB:{
				pos:7,
				titleC:"背景顏色",
				titleE:"Back Color",
				onpressC:"選擇并应用背景顏色",
				onpressE:"Select and apply a background color",
				onclickC:"應用上一次選擇的背景顏色",
				onclickE:"Apply the background color selected",
			},
			left:{
				pos:8,
				titleC:"向左對齊",
				titleE:"Align Left",
				onclickC:"向左對齊",
				onclickE:"Align left",
			},
			center:{
				pos:9,
				titleC:"居中對齊",
				titleE:"Align Center",
				onclickC:"居中",
				onclickE:"Align center",
			},
			right:{
				pos:10,
				titleC:"向右對齊",
				titleE:"Align Right",
				onclickC:"向右對齊",
				onclickE:"Align right",
			},
			full:{
				pos:11,
				titleC:"兩邊對齊",
				titleE:"Align on Both Side",
				onclickC:"兩邊對齊",
				onclickE:"Align on both side",
			},
			divideline:{
				pos:12,
				titleC:"分割線",
				titleE:"Divide Line",
				onclickC:"添加一條分割線",
				onclickE:"Add a divide line",
			},
			img:{
				pos:13,
				titleC:"插入圖片",
				titleE:"Insert Image",
				onclickC:"插入本地或網絡圖片",
				onclickE:"Insert local or online image",
			},
			createlink:{
				pos:14,
				titleC:"超鏈接",
				titleE:"Hyperlink",
				onclickC:"將選中的文字作為超鏈接地址",
				onclickE:"Change the selected word to a hyperlink",
				onpressC:"為選中的文字添加超鏈接地址",
				onpressE:"Add a hyperlink for selected word",
			},
			unlink:{
				pos:15,
				titleC:"取消超鏈接",
				titleE:"Cancel Hyperlink",
				onclickC:"取消超鏈接",
				onclickE:"Cancel the hyperlink",
			},
		}

		this.iconOnmouseover=function() {
			this.light.setTarget({opacity:1});
		}

		this.iconOnmouseout=function() {
			this.light.setTarget({opacity:0});
		}

		this.iconOnmousedown=function() {
			this.light.setTarget({opacity:1,transform:{scale:0.9}});
			this.pic.setTarget({transform:{scale:0.9}});
		}

		this.iconOnmouseup=function() {
			this.light.setTarget({opacity:1,transform:{scale:1}});
			this.pic.setTarget({transform:{scale:1}});
		}

		this.simpleOnclick=function() {
			document.execCommand(this.action,false,"");
			this.root.content.focus();
		}

		this.statusOnclick=function() {
			document.execCommand(this.action,false,"");
			this.root.content.updateSel();
			if (!this.wDetect) {
				this.wDetect=true;
				this.icon.bottom.setTarget({opacity:1});
			} else {
				this.wDetect=false;
				this.icon.bottom.setTarget({opacity:0});
			}
			this.root.content.focus();
		}

		this.statusDetectStatus=function() {
			var yes=true;
			for (var i=0;i<this.root.content.sel.node.length;i++) {
				var yes2=0;
				for (var c=this.root.content.sel.node[i];c!=this.root.content;c=c.parentNode) {
					if (!c || c.nodeType!=1) continue;
					if (c.nodeName==this.labelName) yes2=1;
					if (c.style[this.styleName]==this.styleValue) yes2=1;
					if (c.style[this.styleName] && c.style[this.styleName]!=this.styleValue) yes2=-1;
					if (yes2!=0) break;
				}
				if (yes2!=1) {
					yes=false;
					break;
				}
			}
			if (yes) {
				this.wDetect=true;
				this.icon.bottom.setTarget({opacity:1});
			} else {
				this.wDetect=false;
				this.icon.bottom.setTarget({opacity:0});
			}
		}

		this.sizeAction=function(node,value) {
			node.style.fontSize=value+"px";
		}

		this.selectOnclick=function() {
			this.onchoose();
		}

		this.selectOnchoose=function() {
			if (typeof(this.action)=="string") {
				document.execCommand(this.action,false,this.value);
			} else {
				this.root.content.advanceCommand(this.action,this.value);
			}
			this.root.content.focus();
		}

		this.sizeOnchoose=function() {
			if (this.root.content.sel && this.root.content.sel.isCollapsed) {
				var aa=ASElement({
					nodeName:"span",
					innerHTML:"&#8203;",
					id:"insert_"+ASGetTime(),
					style:{
						fontSize:this.value,
						display:"inline_block",
					},
				});
				document.execCommand("InsertHtml",false,aa.outerHTML);
				var aa=document.getElementById(aa.id);
				if (aa.parentNode && aa.nextSibling && aa.nextSibling.nodeName=="BR") {
					aa.parentNode.removeChild(aa.nextSibling);
				}
			} else {
				this.root.content.advanceCommand(this.action,this.value);
			}
			this.root.content.focus();
		}

		this.imgOnchoose=function() {
			if (this.value=="local") return;
			this.root.content.recoverSel();
			var img=ASElement({
				nodeName:"img",
				src:this.value,
				style:{
					maxWidth:"100%",
				},
			});
			document.execCommand("InsertHtml",false,img.outerHTML);
		}

		this.imgOnopen=function() {
			this.menu.block[0].content.removeChild(this.menu.block[0].content.input);
			this.menu.block[0].content.input=BasicEditToolStr.imgFileInput({root:this.root});
			this.menu.block[0].content.appendChild(this.menu.block[0].content.input);
			this.menu.block[1].content.input.setValue("");
		}

		this.imgFileInput=function(buildP) {
			var target=ASElement({
				nodeName:"input",
				type:"file",
				multiple:"true",
				accept:"image/gif,image/jpeg,image/png",
				style:{
					position:"absolute",
					left:0,
					top:-20,
					width:"100%",
					height:50+20,
					opacity:0,
					cursor:"pointer",
				},
				root:buildP.root,
				onchange:function() {
					this.root.content.recoverSel();
					this.file=[];
					this.fileDoneN=0;
					this.img=[];
					for (var i=0;i<this.files.length;i++) {
						this.img[i]=ASElement({
							nodeName:"img",
							id:"img"+i+"_"+ASGetTime(),
							style:{
								maxWidth:"100%",
							},
						});
						this.file[i]=new FileReader();
						this.file[i].num=i;
						this.file[i].root=this;
						this.file[i].readAsDataURL(this.files[i]);
						this.file[i].onload=function() {
							this.root.fileDoneN++;
							var img=document.getElementById(this.root.img[this.num].id);
							img.src=this.result;
						}
						document.execCommand("InsertHtml",false,this.img[i].outerHTML);
						this.root.content.updateSel();
					}
					this.root.content.focus();
				},
			});
			return(target);
		}

		this.createlinkOnclick=function() {
			if (this.root.content.sel) {
				document.execCommand("CreateLink",false,this.root.content.sel.toString());
			}
		}

		this.createlinkOnchoose=function() {
			this.root.content.recoverSel();
			document.execCommand("CreateLink",false,this.value);
		}

		this.createlinkOnopen=function() {
			this.menu.block[0].content.input.setValue("");
			this.menu.block[0].content.input.focus();
		}

		this.onselchange=function() {
			for (var item in this.tool) {
				if (this.tool[item].type=="status") {
					this.tool[item].detectStatus();
				}
			}
		}

		this.setLang=function() {
			for (var item in this.tool) {
				if (this.tool[item].type=="select") {
					this.tool[item].icon.title=this.tool[item]["title"+ASLang];
				} else {
					this.tool[item].title=this.tool[item]["title"+ASLang];
				}
			}
		}

	}


	function BasicEditTool(buildP) {

		if (!buildP.size) buildP.size=35;
		if (!buildP.tool) buildP.tool={
			font:true,
			size:true,
			bold:true,
			italic:true,
			underline:true,
			colorW:true,
			colorB:true,
			left:true,
			center:true,
			right:true,
			full:true,
			divideline:true,
			img:true,
			createlink:true,
			unlink:true,
			help:true,
		};

		var n=0;
		for (var item in buildP.tool) n++;
		var target=ASElement({
			nodeName:"div",
			style:{
				position:"relative",
				width:buildP.size*1.1*n,
				height:buildP.size,
			},
			onselchange:BasicEditToolStr.onselchange,
		});
		if (buildP.widthA) target.set({style:{width:buildP.widthA}});

		BasicEditToolList[BasicEditToolList.length]=target;

		target.toolList=buildP.tool;
		target.tool={};
		for (var item in target.toolList) {
			var i=BasicEditToolIconList[item];
			var icon=ASElement({
				nodeName:"div",
				style:{
					position:"relative",
					width:buildP.size,
					height:buildP.size,
				},
				onmouseover:BasicEditToolStr.iconOnmouseover,
				onmouseout:BasicEditToolStr.iconOnmouseout,
				onmousedown:BasicEditToolStr.iconOnmousedown,
				onmouseup:BasicEditToolStr.iconOnmouseup,
			});
				icon.bottom=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						width:"90%",
						height:"90%",
						margin:"5%",
						backgroundColor:"rgba(200,0,0,0.2)",
						opacity:0,
					},
				});
				icon.appendChild(icon.bottom);
				icon.light=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						width:"100%",
						height:"100%",
						boxShadow:"0 0 3px rgba(200,0,0,0.8)",
						opacity:0,
					},
				});
				icon.appendChild(icon.light);
				icon.pic=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						left:"2%",
						top:"2%",
						width:"96%",
						height:"96%",
						overflow:"hidden",
					},
				});
				icon.appendChild(icon.pic);
				icon.picC=ASElement({
					nodeName:"img",
					src:ASGetSrcByName("editorToolIcon"),
					onselectstart:emptyFunction,
					style:{
						position:"absolute",
						height:buildP.size*0.96,
						left:-BasicEditToolIconList[item].pos*buildP.size*0.96,
					},
				});
				icon.pic.appendChild(icon.picC);
			var p={
				root:target,
				titleC:BasicEditToolIconList[item].titleC,
				titleE:BasicEditToolIconList[item].titleE,
				style:{
					marginLeft:buildP.size*0.1,
				},
			};
			if (item=="font") {
				p.type="select";
				var block=[];
				for (var j=0;j<DEFAULT_FONTLIST.length;j++) {
					block[block.length]=BasicWord({
						size:24*DEFAULT_FONTLIST[j][2],
						wordC:DEFAULT_FONTLIST[j][1],
						wordE:DEFAULT_FONTLIST[j][0],
						width:"max",
						font:DEFAULT_FONTLIST[j][0],
						style:{
							padding:"3px 10px",
							pointerEvents:"none",
						},
						value:DEFAULT_FONTLIST[j][0],
					});
				}
				p.block=block;
				p.value=DEFAULT_FONT;
				p.action="FontName";
				p.entryOnclick=BasicEditToolStr.selectOnclick;
			}
			if (item=="size") {
				p.type="select";
				p.heightA=300;
				var block=[BasicWord({
					size:48,
					wordC:"極大",
					wordE:"Huge",
					style:{
						padding:"3px 10px",
						pointerEvents:"none",
					},
					value:48,
				}),BasicWord({
					size:32,
					wordC:"大",
					wordE:"Large",
					style:{
						padding:"3px 10px",
						pointerEvents:"none",
					},
					value:32,
				}),BasicWord({
					size:18,
					wordC:"正常",
					wordE:"Normal",
					style:{
						padding:"3px 10px",
						pointerEvents:"none",
					},
					value:18,
				}),BasicWord({
					size:12,
					wordC:"小",
					wordE:"Small",
					style:{
						padding:"3px 10px",
						pointerEvents:"none",
					},
					value:12,
				})];
				for (var j=4;j<=15;j++) {
					block[block.length]=BasicWord({
						size:j*2,
						wordE:j*2+" px",
						style:{
							padding:"3px 10px",
							pointerEvents:"none",
						},
						value:j*2,
					});
				}
				for (var j=1;j<=5;j++) {
					block[block.length]=BasicWord({
						size:30+j*3,
						wordE:(30+j*3)+" px",
						style:{
							padding:"3px 10px",
							pointerEvents:"none",
						},
						value:30+j*3,
					});
				}
				p.block=block;
				p.value=18;
				p.action=BasicEditToolStr.sizeAction;
				p.entryOnclick=BasicEditToolStr.selectOnclick;
				p.onchoose=BasicEditToolStr.sizeOnchoose;
			}
			if (item=="bold") {
				p.type="status";
				p.action="Bold";
				p.labelName="B";
				p.styleName="fontWeight";
				p.styleValue="bold";
			}
			if (item=="italic") {
				p.type="status";
				p.action="Italic";
				p.labelName="I";
				p.styleName="fontStyle";
				p.styleValue="italic";
			}
			if (item=="underline") {
				p.type="status";
				p.action="Underline";
				p.labelName="U";
				p.styleName="textDecoration";
				p.styleValue="underline";
			}
			if (item=="colorW" || item=="colorB") {
				p.type="select";
				var block=[];
				p.col=6;
				p.menuPadding=5;
				var color=["#000000","#00C000","#0000C0","#8000FF","#FF8000","#C0C0C0","#FF0000","#00FF00","#0000FF","#FF00FF","#FFFF00","#FFFFFF"];
				for (var i=0;i<color.length;i++) {
					block[i]=ASElement({
						nodeName:"div",
						style:{
							padding:6,
						},
						value:color[i],
					});
						block[i].pic=ASElement({
							nodeName:"div",
							style:{
								backgroundColor:color[i],
								width:35,
								height:35,
							},
						});
						block[i].appendChild(block[i].pic);
				}
				p.block=block;
				if (item=="colorW") {
					p.action="ForeColor";
					p.value="black";
				} else {
					p.action="BackColor";
					p.value="white";
				}
				p.entryOnclick=BasicEditToolStr.selectOnclick;
			}
			if (item=="left") {
				p.type="simple";
				p.action="JustifyLeft";
			}
			if (item=="center") {
				p.type="simple";
				p.action="JustifyCenter";
			}
			if (item=="right") {
				p.type="simple";
				p.action="JustifyRight";
			}
			if (item=="full") {
				p.type="simple";
				p.action="JustifyFull";
			}
			if (item=="divideline") {
				p.type="simple";
				p.action="InsertHorizontalRule";
			}
			if (item=="img") {
				p.type="select";
				p.fx="upRight";
				var block=[];
				block[0]=ASElement({
					nodeName:"div",
					style:{
						position:"relative",
						width:230,
						height:50,
						overflow:"hidden",
					},
					giveupMenuImg:true,
					value:"local",
				});
					block[0].word=BasicWord({
						size:24,
						wordC:"本地圖片",
						wordE:"Local Image",
						style:{
							position:"relative",
							width:"100%",
							textAlign:"center",
							top:7.5,
						},
					});
					block[0].appendChild(block[0].word);
					block[0].input=BasicEditToolStr.imgFileInput({root:target});
					block[0].appendChild(block[0].input);
				block[1]=ASElement({
					nodeName:"div",
					style:{
						position:"relative",
						width:230,
						height:120,
					},
					giveupMenuExtra:true,
				});
					block[1].word=BasicWord({
						size:24,
						wordC:"網絡圖片",
						wordE:"Online Image",
						style:{
							position:"relative",
							width:"100%",
							textAlign:"center",
							top:5,
						},
					});
					block[1].appendChild(block[1].word);
					block[1].input=BasicInput({
						type:"input",
						hintC:"請輸入鏈接",
						hintE:"Hyperlink",
						widthA:200,
						style:{
							position:"relative",
							left:15,
							marginTop:7,
						},
					});
					block[1].appendChild(block[1].input);
					block[1].confirm=BasicButton({
						wordC:"導   入",
						wordE:"Import",
						size:18,
						style:{
							position:"relative",
							left:72,
							marginTop:5,
						},
						root:block[1],
						onclick:function() {
							var aa=this.root.parentNode.root;
							aa.value=this.root.input.getValue();
							aa.onchoose();
							aa.close();
						},
					});
					block[1].appendChild(block[1].confirm);
				p.block=block;
				p.onchoose=BasicEditToolStr.imgOnchoose;
				p.onopen=BasicEditToolStr.imgOnopen;
			}
			if (item=="createlink") {
				p.type="select";
				p.fx="upRight";
				p.action="CreateLink";
				var block=ASElement({
					nodeName:"div",
					style:{
						position:"relative",
						width:330,
						height:50,
					},
				});
					block.input=BasicInput({
						type:"input",
						hintC:"請輸入鏈接",
						hintE:"Hyperlink",
						widthA:200,
						style:{
							position:"absolute",
							left:15,
							top:7.5,
						},
					});
					block.appendChild(block.input);
					block.confirm=BasicButton({
						wordC:"確   認",
						wordE:"Confirm",
						size:18,
						style:{
							position:"absolute",
							right:10,
							top:7.5,
						},
						root:block,
						onclick:function() {
							var aa=this.root.parentNode.root;
							aa.value=this.root.input.getValue();
							aa.onchoose();
							aa.close();
						},
					});
					block.appendChild(block.confirm);
				p.block=[block];
				p.entryOnclick=BasicEditToolStr.createlinkOnclick;
				p.onchoose=BasicEditToolStr.createlinkOnchoose;
				p.onopen=BasicEditToolStr.createlinkOnopen;
				p.giveupMenuExtra=true;
			}
			if (item=="unlink") {
				p.type="simple";
				p.action="Unlink";
			}
			if (item=="help") {
				p.type="select";
				p.fx="upRight";
				p.heightA=400;
				p.BGC="rgba(0,0,0,0.7)";
				p.giveupMenuExtra=true;
				var block=[ASElement({
					nodeName:"div",
					style:{
						paddingTop:5,
						paddingBottom:5,
					},
				})];
				for (var item1 in buildP.tool) {
					if (item1=="help") continue;
					if (block[0].childNodes.length>0) {
						block[0].appendChild(ASElement({
							nodeName:"hr",
							style:{
								color:"white",
								marginLeft:5,
								marginRight:5,
								marginTop:5,
								marginBottom:5,
								opacity:0.2,
							},
						}));
					}
					var b=ASElement({
						nodeName:"table",
						style:{
							width:400,
							minHeight:50,
						},
					});
					block[0].appendChild(b);
					b.r1=ASElement({
						nodeName:"tr",
					});
					b.appendChild(b.r1);
						b.r1.appendChild(ASElement({
							nodeName:"td",
							align:"center",
							valign:"middle",
							style:{
								width:55,
							},
						}));
						b.pic=ASElement({
							nodeName:"div",
							style:{
								position:"relative",
								width:35,
								height:35,
								overflow:"hidden",
								backgroundColor:"white",
							},
						});
						b.r1.lastChild.appendChild(b.pic);
							b.picC=ASElement({
								nodeName:"img",
								src:ASGetSrcByName("editorToolIcon"),
								style:{
									position:"relative",
									height:35,
									left:-BasicEditToolIconList[item1].pos*35,
								}
							});
							b.pic.appendChild(b.picC);
						b.r1.appendChild(ASElement("td"));
						for (var con in BasicEditToolIconList[item1]) {
							if (con=="onclickC") {
								b.r1.lastChild.appendChild(BasicWord({
									color:"white",
									size:18,
									wordC:"點  擊：",
									wordE:"Click:",
									style:{
										verticalAlign:"top",
										width:70,
									},
								}));
								b.r1.lastChild.appendChild(BasicWord({
									color:"white",
									size:18,
									wordC:BasicEditToolIconList[item1].onclickC,
									wordE:BasicEditToolIconList[item1].onclickE,
									style:{
										width:250,
									},
								}));
								b.r1.lastChild.appendChild(ASElement("br"));
							}
							if (con=="onpressC") {
								b.r1.lastChild.appendChild(BasicWord({
									color:"white",
									size:18,
									wordC:"長  按：",
									wordE:"Press:",
									style:{
										verticalAlign:"top",
										width:70,
									},
								}));
								b.r1.lastChild.appendChild(BasicWord({
									color:"white",
									size:18,
									wordC:BasicEditToolIconList[item1].onpressC,
									wordE:BasicEditToolIconList[item1].onpressE,
									style:{
										width:250,
									},
								}));
								b.r1.lastChild.appendChild(ASElement("br"));
							}
						}
				}
				p.block=block;
			}

			if (p.type=="simple") {
				p.nodeName="div";
				p.style.width=buildP.size;
				p.style.height=buildP.size;
				p.style.cursor="pointer";
				p.onclick=BasicEditToolStr.simpleOnclick;
				target.tool[item]=ASElement(p);
				target.tool[item].appendChild(icon);
			}
			if (p.type=="select") {
				p.entry=icon;
				if (!p.fx) p.fx="up";
				if (!p.onchoose) p.onchoose=BasicEditToolStr.selectOnchoose;
				target.tool[item]=BasicSelect(p);
				target.tool[item].icon=icon;
			}
			if (p.type=="status") {
				p.nodeName="div",
				p.style.width=buildP.size;
				p.style.height=buildP.size;
				p.style.cursor="pointer";
				p.onclick=BasicEditToolStr.statusOnclick;
				p.detectStatus=BasicEditToolStr.statusDetectStatus;
				p.wDetect=false;
				target.tool[item]=ASElement(p);
				target.tool[item].icon=icon;
				target.tool[item].appendChild(icon);
			}
			if (p.type=="input_image") {
				p.nodeName="div";
				p.style.position="relative",
				p.style.width=buildP.size;
				p.style.height=buildP.size;
				p.style.overflow="hidden";
				p.onchange=BasicEditToolStr.imgOnchange;
				p.onmouseover=BasicEditToolStr.iconOnmouseover;
				p.onmouseout=BasicEditToolStr.iconOnmouseout;
				p.onmousedown=BasicEditToolStr.iconOnmousedown;
				p.onmouseup=BasicEditToolStr.iconOnmouseup;
				target.tool[item]=ASElement(p);
				target.tool[item].appendChild(icon);
				target.tool[item].pic=icon.pic;
				target.tool[item].input=ASElement({
					nodeName:"input",
					type:"file",
					accept:"image/gif,image/jpeg,image/png",
					style:{
						position:"absolute",
						left:0,
						top:-20,
						width:"100%",
						height:buildP.size+20,
						opacity:0,
						cursor:"pointer",
					},
				});
				target.tool[item].appendChild(target.tool[item].input);
			}
			target.appendChild(target.tool[item]);
		}
		if (target.tool.help) {
			target.tool.help.set({style:{
				position:"absolute",
				right:0,
			}});
		}

		target.setLang=BasicEditToolStr.setLang;
		target.setLang();

		delete buildP.tool;
		target.set(buildP);
		return(target);

	}


	var BasicEditorStr=new function() {

		this.resize=function(typeP) {
			if ("widthA" in typeP) {
				this.set({style:{width:typeP.widthA}});
				this.contentF.set({style:{width:typeP.widthA}});
				this.content.set({style:{width:typeP.widthA}});
				this.toolF.set({style:{width:typeP.widthA}});
			}
			if ("heightA" in typeP) {
				this.contentF.set({style:{height:typeP.heightA-this.iconSize*1.2}});
			}
		}

		this.contentAdvanceCommand=function(action,value) {
			document.execCommand("FontSize",false,7);
			this.tide(null,action,value);
		}

		this.contentGetSel=function(node) {
			if (!node) {
				if (this.sel.anchorNode==this.sel.focusNode) {
					this.sel.node[0]=this.sel.anchorNode;
					return;
				}
				this.checkStatus="before";
				node=this;
			}
			var yes=true;
			for (var i=0;i<node.childNodes.length;i++) {
				var c=node.childNodes[i];
				if (c==this.sel.anchorNode || c==this.sel.focusNode) {
					if (this.checkStatus=="before") this.checkStatus="on";
					else this.checkStatus="end";
				}
				if (this.checkStatus!="before" && c.nodeType==3) this.sel.node[this.sel.node.length]=c.parentNode;
				if (c.nodeType!=1) continue;
				yes=false;
				this.getSel(c);
				if (this.checkStatus=="end") return;
			}
		}

		this.contentUpdateSel=function() {
			var sel=window.getSelection();
			this.sel={
				anchorNode:sel.anchorNode,
				anchorOffset:sel.anchorOffset,
				focusNode:sel.focusNode,
				focusOffset:sel.focusOffset,
				isCollapsed:sel.isCollapsed,
				node:[],
				range:[],
			};
			for (var i=0;i<sel.rangeCount;i++) {
				this.sel.range[i]=sel.getRangeAt(i);
			}
			this.getSel();
		}

		this.contentRecoverSel=function() {
			if (!this.sel) return;
			var sel=window.getSelection();
			sel.removeAllRanges();
			for (var i=0;i<this.sel.range.length;i++) {
				sel.addRange(this.sel.range[i]);
			}
		}

		this.contentTide=function(node,action,value) {
			if (!node) {
				node=this;
			}
			if (node.size=="7") {
				action(node,value);
				node.size="";
			}
			for (var i=0;i<node.childNodes.length;i++) {
				var c=node.childNodes[i];
				if (c.nodeType!=1) continue;
				this.tide(c,action,value);
			}
		}

		this.contentChangeSel=function() {
			this.updateSel();
			this.root.tool.onselchange();
		}

		this.contentOnpaste=function(e) {
			ASPasteData={
				item:[],
				itemDoneN:0,
				root:this,
				onfinish:function() {
					var html="";
					for (var i=0;i<ASPasteData.item.length;i++) {
						if (ASPasteData.item[i].html) html+=ASPasteData.item[i].html;
					}
					document.execCommand("InsertHtml",false,escapeHtml(html));
				},
			};
			var data=e.clipboardData;
			for (var i=0;i<data.items.length;i++) {
				ASPasteData.item[i]={
					type:data.items[i].type,
				};
				if (data.items[i].type=="text/plain") {
					if (!(i+1<data.items.length && data.items[i+1].type=="text/html")) {
						data.items[i].getAsString(function(e) {
							for (var i=0;i<ASPasteData.item.length;i++) {
								if (ASPasteData.item[i].type=="text/plain" && !ASPasteData.item[i].html) {
									ASPasteData.item[i].html=e;
									ASPasteData.itemDoneN++;
									if (ASPasteData.itemDoneN>=ASPasteData.item.length) ASPasteData.onfinish();
									break;
								}
							}
						});
					} else {
						ASPasteData.itemDoneN++;
						continue;
					}
					continue;
				}
				if (data.items[i].type=="text/html") {
					data.items[i].getAsString(function(e) {
						for (var i=0;i<ASPasteData.item.length;i++) {
							if (ASPasteData.item[i].type=="text/html" && !ASPasteData.item[i].html) {
								var start=e.indexOf("<!--StartFragment-->")+20;
								var end=e.indexOf("<!--EndFragment-->");
								ASPasteData.item[i].html=e.slice(start,end);
								ASPasteData.itemDoneN++;
								if (ASPasteData.itemDoneN>=ASPasteData.item.length) ASPasteData.onfinish();
								break;
							}
						}
					});
					continue;
				}
				if (data.items[i].type.indexOf("image")!=-1) {
					var blob=data.items[i].getAsFile();
					var file=new FileReader();
					file.readAsDataURL(blob);
					file.root=ASPasteData.item[i];
					file.onloadend=function(e) {
						var img=ASElement({
							nodeName:"img",
							src:this.result,
						});
						for (var i=0;i<ASPasteData.item.length;i++) {
							if (ASPasteData.item[i].type.indexOf("image")!=-1 && !ASPasteData.item[i].html) {
								ASPasteData.item[i].html=img.outerHTML;
								ASPasteData.itemDoneN++;
								if (ASPasteData.itemDoneN>=ASPasteData.item.length) ASPasteData.onfinish();
								break;
							}
						}
					}
					continue;
				}
				ASPasteData.itemDoneN++;
			}
			return false;
		}

	}


	function BasicEditor(buildP) {

		if (!buildP.widthA) buildP.widthA=DEFAULT_PAGE_WIDTHL;
		if (!buildP.heightA) buildP.heightA=500;
		if (!buildP.iconSize) buildP.iconSize=35;

		var target=ASElement({
			nodeName:"div",
			style:{
				position:"relative",
				width:buildP.widthA,
				border:"2px solid rgba(180,180,180,0.5)",
			},
		});

		target.contentF=ASElement({
			nodeName:"div",
			style:{
				width:buildP.widthA,
				height:buildP.heightA-buildP.iconSize*1.2,
				overflowX:"hidden",
				overflowY:"auto",
				backgroundColor:"white",
			},
		});
		target.appendChild(target.contentF);
			target.content=ASElement({
				nodeName:"div",
				root:target,
				contentEditable:true,
				style:{
					fontFamily:DEFAULT_FONT,
					fontSize:18,
					width:buildP.widthA-16-DEFAULT_SCROLLBAR_WIDTH,
					minHeight:buildP.heightA-buildP.iconSize*1.2-16,
					borderStyle:"none",
					outline:"none",
					margin:8,
				},
				advanceCommand:BasicEditorStr.contentAdvanceCommand,
				getSel:BasicEditorStr.contentGetSel,
				updateSel:BasicEditorStr.contentUpdateSel,
				recoverSel:BasicEditorStr.contentRecoverSel,
				tide:BasicEditorStr.contentTide,
				changeSel:BasicEditorStr.contentChangeSel,
				onpaste:BasicEditorStr.contentOnpaste,
			});
			target.contentF.appendChild(target.content);
			target.content.onclick=target.content.changeSel;
			target.content.onkeydown=target.content.changeSel;
			target.content.onkeyup=target.content.changeSel;

		target.appendChild(ASElement({
			nodeName:"hr",
			style:{
				marginLeft:5,
				marginRight:5,
			},
		}));
		target.toolF=ASElement({
			nodeName:"div",
			style:{
				width:buildP.widthA,
			},
		});
		target.appendChild(target.toolF);
			target.tool=BasicEditTool({
				size:buildP.iconSize,
				content:target.content,
				widthA:buildP.widthA-buildP.iconSize*0.3,
				tool:{
					font:true,
					size:true,
					bold:true,
					italic:true,
					underline:true,
					colorW:true,
					colorB:true,
					left:true,
					center:true,
					right:true,
					full:true,
					divideline:true,
					img:true,
					createlink:true,
					unlink:true,
					help:true,
				},
				style:{
					marginLeft:buildP.iconSize*0.1,
					marginTop:buildP.iconSize*0.1,
					marginBottom:buildP.iconSize*0.1,
				},
			});
			target.toolF.appendChild(target.tool);

		target.resize=BasicEditorStr.resize;
		target.set(buildP);
		return(target);

	}


	var FlashImgStr=new function() {

		this.getPicScale=function() {
			switch (this.imgSize) {
				case "integral":
					return(Math.min(this.widthA/this.pic.naturalWidth,this.heightA/this.pic.naturalHeight));
				break;
				case "full":
					return(Math.max(this.widthA/this.pic.naturalWidth,this.heightA/this.pic.naturalHeight));
				break;
				case "intelligent":
					var size1=Math.min(this.widthA/this.pic.naturalWidth,this.heightA/this.pic.naturalHeight);
					var size2=Math.max(this.widthA/this.pic.naturalWidth,this.heightA/this.pic.naturalHeight);
					if (size2<size1*1.25) {
						return(size2);
					} else {
						return(size1);
					}
				break;
			}
			return(1);
		}

		this.firstLoad=function() {
			var scale=this.getPicScale();
			this.picF1.set({
				style:{
					backgroundPosition:"center",
					backgroundImage:"url('"+this.pic.src+"')",
					backgroundSize:this.pic.naturalWidth*scale+"px "+this.pic.naturalHeight*scale+"px",
				},
			});
			if (this.img.length>1) this.reload();
		}

		this.reload=function() {
			this.imgC=(this.imgC+1)%this.img.length;
			this.pic=ASElement({
				nodeName:"img",
				src:this.img[this.imgC],
			});
		}

		this.nextAppear=function() {
			this.picF1.setTarget({
				opacity:0,
			});
			var scale=this.getPicScale();
			this.picF2=ASElement({
				nodeName:"div",
				style:{
					position:"relative",
					overflow:"hidden",
					width:this.widthA,
					height:this.heightA,
					top:-this.heightA+this.heightA%2*0.4,
					opacity:0,
					backgroundPosition:"center",
					backgroundImage:"url('"+this.pic.src+"')",
					backgroundSize:this.pic.naturalWidth*scale+"px "+this.pic.naturalHeight*scale+"px",
					backgroundRepeat:"no-repeat",

				},
			});
			if (ASBrowser!="Mobile") {
				this.picF2.set({style:{
					transform:{
						translateX:-this.widthA,
					},
				}});
			}
			this.appendChild(this.picF2);
			this.setTimeout(function() {this.picF2.setTarget({
				opacity:1,
				time:400,
				transform:{
					translateX:0,
				},
			})},10);
			this.setTimeout(this.switchPic,510);
		}

		this.switchPic=function() {
			this.picF1.set({style:{
				opacity:1,
				backgroundPosition:this.picF2.style.backgroundPosition,
				backgroundImage:this.picF2.style.backgroundImage,
				backgroundSize:this.picF2.style.backgroundSize,
			}});
			this.removeChild(this.picF2);
		}

		this.change=function() {
			if (this.type=="response") {
				if (!this.wOn) {
					this.wPlaying=false;
					return;
				}
			}
			if (this.pic.complete) {
				this.nextAppear();
			}
			this.reload();
			var time=ASGetTime()-this.startTime-this.delay;
			this.setTimeout(this.change,this.timeSpace-time%this.timeSpace);
		}

		this.onmouseover=function() {
			if (this.type=="response") {
				this.wOn=true;
				if (this.img.length>1 && !this.wPlaying) {
					this.wPlaying=true;
					this.setTimeout(this.change,this.timeSpace);
					this.startTime=ASGetTime();
					this.delay=0;
				}
			}
		}

		this.onmouseout=function() {
			if (this.type=="response") {
				this.wOn=false;
			}
		}

	}


	function FlashImg(buildP) {

		if (!buildP.type) buildP.type="auto";
		if (!buildP.delay) buildP.delay=0;
		if (!buildP.timeSpace) buildP.timeSpace=DEFAULT_FLASHIMG_TIMESPACE;

		var target=ASElement({
			nodeName:"div",
			style:{
				overflow:"hidden",
				width:buildP.widthA,
				height:buildP.heightA,
			},
			onmouseover:FlashImgStr.onmouseover,
			onmouseout:FlashImgStr.onmouseout,
			onclick:FlashImgStr.onclick,
		});
		target.type=buildP.type;
		target.widthA=buildP.widthA;
		target.heightA=buildP.heightA;
		target.imgSize=buildP.imgSize;
		target.img=buildP.img;
		target.imgC=0;
		target.timeSpace=buildP.timeSpace;
		if (target.type=="response") {
			target.wPlaying=false;
			target.wOn=false;
		}
		if (target.type=="auto") {
			target.startTime=ASGetTime();
			target.delay=buildP.delay;
		}

			target.picF1=ASElement({
				nodeName:"div",
				style:{
					overflow:"hidden",
					width:target.widthA,
					height:target.heightA,
					backgroundRepeat:"no-repeat",
				},
			});
			target.appendChild(target.picF1);

			target.pic=ASElement({
				nodeName:"img",
				src:target.img[0],
				father:target,
				onload:function() {
					this.father.firstLoad();
				},
			});

		target.getPicScale=FlashImgStr.getPicScale;
		target.firstLoad=FlashImgStr.firstLoad;
		target.reload=FlashImgStr.reload;
		target.nextAppear=FlashImgStr.nextAppear;
		target.switchPic=FlashImgStr.switchPic;
		target.change=FlashImgStr.change;
		target.onmouseover=FlashImgStr.onmouseover;
		target.onmouseout=FlashImgStr.onmouseout;

		if (target.img.length>1) target.setTimeout(target.change,target.delay+target.timeSpace);

		target.set(buildP);
		return(target);

	}


	var AnchorListStr=new function() {

		AnchorListList=[];

		this.resize=function() {

			for (var i=0;i<this.block.length;i++) {
				this.block[i].set({style:{
					height:ASGetElementHeight(this.block[i].wordR)+this.size*0.3,
				}});
				this.block[i].content.set({style:{
					top:-ASGetElementHeight(this.block[i].wordR),
				}});
			}

			this.blockPos=[];
			this.lightL[0].set({style:{
				height:ASGetElementHeight(this.block[0])/2-23+this.size*1.28+this.space,
			}});
			var y0=ASGetElementHeight(this.block[0])/2-23+this.size*1.28+this.space;
			for (var i=1;i<this.lightL.length-1;i++) {
				if (i-1==this.blockNum) {
					this.light.set({style:{
						top:y0+21-25+2,
					}});
				}
				this.blockPos[i-1]=y0;
				this.lightL[i].set({style:{
					height:(ASGetElementHeight(this.block[i-1])+ASGetElementHeight(this.block[i]))/2+this.size*0.2-8+this.space,
				}});
				y0+=(ASGetElementHeight(this.block[i-1])+ASGetElementHeight(this.block[i]))/2+this.size*0.2+this.space;
			}
			this.blockPos[i-1]=y0;
			this.lightL[this.lightL.length-1].set({style:{
				height:ASGetElementHeight(this.block[this.block.length-1])/2-23+this.size*1.28+this.space,
			}});
			y0+=(ASGetElementHeight(this.block[i-1])+ASGetElementHeight(this.block[i]))/2+this.size*0.2+this.space;

			this.lightC.set({style:{
				height:y0+45,
			}});

		}

		this.changeBlock=function(w) {
			for (var i=0;i<this.block.length;i++) {
				if (i==w) continue;
				this.block[i].bottom.setTarget({opacity:0});
				this.block[i].wordW.setTarget({opacity:0});
			}
			this.block[w].bottom.setTarget({opacity:1});
			this.block[w].wordW.setTarget({opacity:1});
			this.light.setTarget({
				top:this.blockPos[w]+21-25+2,
				time:200,
			});
			this.blockNum=w;
			if (this.parentNode.parentNode.scrollTo) {
				this.parentNode.parentNode.scrollTo(this.blockPos[w]+21-25+2+ASGetElementHeight(this.block[w])/2-15);
			}
		}

		this.blockOnmouseover=function() {
			this.word.setTarget({transform:{translateX:5}});
		}

		this.blockOnmouseout=function() {
			this.word.setTarget({transform:{translateX:0}});
		}

		this.blockOnmousedown=function() {
			this.word.setTarget({transform:{translateX:2}});
		}

		this.blockOnmouseup=function() {
			this.word.setTarget({transform:{translateX:5}});
		}

		this.blockOnclick=function() {
			if (this.parentNode.parentNode.onchoose) this.parentNode.parentNode.onchoose(this.num);
		}

	}


	function AnchorList(buildP) {

		if (!buildP.size) buildP.size=20;
		if (!buildP.widthA) buildP.widthA=140;
		if (!buildP.space) buildP.space=0;

		var target=ASElement({
			nodeName:"div",
		});
		target.size=buildP.size;
		target.blockNum=0;
		target.space=buildP.space;
		if (buildP.startBlock) target.blockNum=buildP.startBlock;
		AnchorListList[AnchorListList.length]=target;

			target.lightC=ASElement({
				nodeName:"div",
				style:{
					position:"absolute",
					width:19,
					backgroundColor:"rgb(230,230,230)",
				},
			});
			target.appendChild(target.lightC);
				target.light=ASElement({
					nodeName:"img",
					src:ASGetSrcByName("anchorListLight"),
					style:{
						position:"absolute",
						width:"100%",
					},
					onload:function() {
						this.set({style:{height:this.naturalHeight}});
					}
				});
				target.lightC.appendChild(target.light);
				target.lightF=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						width:"100%",
						top:0,
					},
				});
				target.lightC.appendChild(target.lightF);
				target.lightE1=ASElement({
					nodeName:"img",
					src:ASGetSrcByName("anchorListEndCover"),
					style:{
						marginBottom:-2,
					},
				});
				target.lightF.appendChild(target.lightE1);
				target.lightL=[];
				target.lightP=[];
				for (var i=0;i<=buildP.block.length;i++) {
					if (i!=0) {
						target.lightP[i]=ASElement({
							nodeName:"img",
							src:ASGetSrcByName("anchorListPointCover"),
							style:{
								marginTop:-2,
								marginBottom:-2,
							},
						});
						target.lightF.appendChild(target.lightP[i]);
					}
					target.lightL[i]=ASElement({
						nodeName:"img",
						src:ASGetSrcByName("anchorListLineCover"),
						style:{
							width:"100%",
						},
					});
					target.lightF.appendChild(target.lightL[i]);
				}
				target.lightE2=ASElement({
					nodeName:"img",
					src:ASGetSrcByName("anchorListEndCover"),
					style:{
						marginTop:-2,
						marginBottom:-1,
						transformOrigin:"50% 50%",
						transform:{
							rotate:180,
						},
					},
				});
				target.lightF.appendChild(target.lightE2);

			target.blockC=ASElement({
				nodeName:"div",
				style:{
					position:"relative",
					top:buildP.size*1.1,
					left:14,
				},
			});
			target.appendChild(target.blockC);
			target.block=[];
			for (var i=0;i<buildP.block.length;i++) {

				var alpha=0;
				if (i==target.blockNum) alpha=1;

				target.block[target.block.length]=ASElement({
					nodeName:"div",
					style:{
						display:"block",
						marginTop:buildP.size*0.2+target.space,
						cursor:"pointer",
						overflow:"hidden",
					},
					onmouseover:AnchorListStr.blockOnmouseover,
					onmouseout:AnchorListStr.blockOnmouseout,
					onmousedown:AnchorListStr.blockOnmousedown,
					onmouseup:AnchorListStr.blockOnmouseup,
					onclick:AnchorListStr.blockOnclick,
					num:i,
				});
				var block=target.block[target.block.length-1];
				target.blockC.appendChild(block);

					block.bottom=ASElement({
						nodeName:"div",
						style:{
							position:"relative",
							borderRadius:"0 "+buildP.size*0.3+"px "+buildP.size*0.3+"px 0",
							backgroundColor:"rgb(240,0,0)",
							width:"100%",
							height:"100%",
							opacity:alpha,
						},
					})
					block.appendChild(block.bottom);

					block.content=ASElement({
						nodeName:"div",
						style:{
							position:"relative",
							left:0,
							width:"100%",
						},
					});
					block.appendChild(block.content);

					block.word=ASElement({
						nodeName:"div",
						style:{
							position:"relative",
							top:-target.size*0.12,
							left:target.size*0.1,
							marginLeft:buildP.size*0.2,
							marginRight:buildP.size*0.6,
						}
					});
					block.content.appendChild(block.word);
						block.wordR=BasicWord({
							size:buildP.size,
							sizeE:buildP.size*0.8,
							wordC:buildP.block[i].wordC,
							wordE:buildP.block[i].wordE,
							color:"rgb(200,0,0)",
							style:{
								maxWidth:buildP.widthA-40,
								display:"block",
								pointerEvents:"none",
							}
						});
						block.word.appendChild(block.wordR);
						block.wordW=BasicWord({
							size:buildP.size,
							sizeE:buildP.size*0.8,
							wordC:buildP.block[i].wordC,
							wordE:buildP.block[i].wordE,
							color:"white",
							style:{
								top:0,
								position:"absolute",
								opacity:alpha,
								maxWidth:buildP.widthA-40,
								pointerEvents:"none",
							},
						});
						block.word.appendChild(block.wordW);

			}

		target.resize=AnchorListStr.resize;
		target.resize();
		target.changeBlock=AnchorListStr.changeBlock;

		delete buildP.block;
		target.set(buildP);
		return(target);

	}


	var PageListStr=new function() {

		PageListList=[];

		this.resize=function() {
			for (var i=0;i<this.block.length;i++) {
				this.block[i].set({style:{
					height:ASGetElementHeight(this.block[i].wordR)+15,
				}});
				this.block[i].word.set({style:{
					top:-ASGetElementHeight(this.block[i].wordR)-7.5,
				}});
			}
		}

		this.changeBlock=function(w) {
			if (this.blockNum==w) return;
			for (var i=0;i<this.block.length;i++) {
				if (i==w) continue;
				this.block[i].bottom.setTarget({opacity:0});
				this.block[i].wordW.setTarget({opacity:0});
			}
			this.block[w].bottom.setTarget({opacity:1});
			this.block[w].wordW.setTarget({opacity:1});
			this.blockNum=w;
		}

		this.blockOnmouseover=function() {
			this.word.setTarget({transform:{translateX:5}});
		}

		this.blockOnmouseout=function() {
			this.word.setTarget({transform:{translateX:0}});
		}

		this.blockOnmousedown=function() {
			this.word.setTarget({transform:{translateX:2}});
		}

		this.blockOnmouseup=function() {
			this.word.setTarget({transform:{translateX:5}});
		}

		this.blockOnclick=function() {
			if (this.parentNode.onchoose) this.parentNode.onchoose(this.num);
			this.parentNode.changeBlock(this.num);
		}

	}


	function PageList(buildP) {

		if (!buildP.size) buildP.size=24;
		if (!buildP.widthA) buildP.widthA=140;

		var target=ASElement({
			nodeName:"div",
			style:{
				width:buildP.widthA,
			},
		});
		PageListList[PageListList.length]=target;

		target.block=[];
		for (var i=0;i<buildP.block.length;i++) {
			target.appendChild(ASElement({
				nodeName:"img",
				src:ASGetSrcByName("pageListLine"),
				style:{
					width:"100%",
				},
			}));
			target.block[i]=ASElement({
				nodeName:"div",
				style:{
					cursor:"pointer",
				},
				onmouseover:PageListStr.blockOnmouseover,
				onmouseout:PageListStr.blockOnmouseout,
				onmousedown:PageListStr.blockOnmousedown,
				onmouseup:PageListStr.blockOnmouseup,
				onclick:PageListStr.blockOnclick,
				num:i,
				value:buildP.block[i],
			});
			target.appendChild(target.block[i]);
			var block=target.block[i];
				block.bottom=ASElement({
					nodeName:"img",
					src:ASGetSrcByName("pageListBlock"),
					style:{
						width:"100%",
						height:"100%",
						opacity:0,
					},
				});
				block.appendChild(block.bottom);
				block.word=ASElement({
					nodeName:"div",
					style:{
						position:"relative",
						left:12,
					},
				});
				block.appendChild(block.word);
					block.wordR=BasicWord({
						size:buildP.size,
						sizeE:buildP.size*0.75,
						color:"rgb(200,0,0)",
						wordC:buildP.block[i].nameC,
						wordE:buildP.block[i].nameE,
						style:{
							maxWidth:buildP.widthA-20,
							display:"block",
							pointerEvents:"none",
						},
					});
					block.word.appendChild(block.wordR);
					block.wordW=BasicWord({
						size:buildP.size,
						sizeE:buildP.size*0.75,
						color:"white",
						wordC:buildP.block[i].nameC,
						wordE:buildP.block[i].nameE,
						style:{
							position:"absolute",
							top:0,
							maxWidth:buildP.widthA-20,
							opacity:0,
							cursor:"pointer",
							pointerEvents:"none",
						},
					});
					block.word.appendChild(block.wordW);
		}
		target.appendChild(ASElement({
			nodeName:"img",
			src:ASGetSrcByName("pageListLine"),
			style:{
				width:"100%",
			},
		}));

		target.resize=PageListStr.resize;
		target.resize();
		target.changeBlock=PageListStr.changeBlock;
		target.changeBlock(0);

		delete buildP.block;
		target.set(buildP);
		return(target);

	}


	var HeadIconStr=new function() {

		this.onmouseover=function() {
			this.setTarget({transform:{scale:1}});
			this.pic.setTarget({opacity:1});
			this.wMouseOver=true;
			INTERFACE_L.head.changeLabel(this);
		}

		this.onmouseout=function() {
			this.setTarget({transform:{scale:1}});
			this.pic.setTarget({opacity:0});
			this.wMouseOver=false;
			INTERFACE_L.head.changeLabel(null);
		}

		this.onmousedown=function() {
			this.setTarget({transform:{scale:0.9}});
			this.pic.setTarget({opacity:1});
		}

		this.onmouseup=function() {
			this.setTarget({transform:{scale:1}});
			this.pic.setTarget({opacity:1});
		}

		this.onclick=function() {
			this.onmouseout();
			changeURL(this.linkTo);
		}

	}


	function HeadIcon(buildP) {

		var target=ASElement({
			nodeName:"div",
			style:{
				width:DEFAULT_HEAD_ICON_SIZE,
				height:DEFAULT_HEAD_ICON_SIZE,
				backgroundImage:"url('"+buildP.src+".png"+"')",
				backgroundSize:"100% 100%",
				transformOrigin:"50% 50%",
				cursor:"pointer",
			},
		});
			target.pic=ASElement({
				nodeName:"img",
				src:buildP.src+"L.png",
				style:{
					opacity:0,
					width:"100%",
					height:"100%",
					cursor:"pointer",
				},
			});
			target.appendChild(target.pic);

		if (buildP.nameC) {
			target.word=BasicWord({
				wordC:buildP.nameC,
				wordE:buildP.nameE,
				color:"white",
				style:{
					pointerEvents:"none",
				},
			});
		}

		if (buildP.hyperlink) {
			target.region=ASElement({
				nodeName:"a",
				href:buildP.hyperlink,
				target:"_blank",
			});
			target.appendChild(target.region);
			target.region.appendChild(target.pic);
		}

		target.onmouseover=HeadIconStr.onmouseover;
		target.onmouseout=HeadIconStr.onmouseout;
		target.onmousedown=HeadIconStr.onmousedown;
		target.onmouseup=HeadIconStr.onmouseup;
		if (buildP.linkTo) target.onclick=HeadIconStr.onclick;

		target.set(buildP);
		return(target);

	}


	//Component(end)


	function ASInitialize() {

		UserDataList=[
			"user",
			"ticket",
			"target",
			"studentID",
			"place",
			"post",
			"name",
			"nickname",
			"sex",
			"phone",
			"school",
			"enroll",
			"addEnroll",
			"payto",
		];
		USERDATA="NULL";
		TARGETDATA="NULL";
		FUNCDATA=[];
		RequestTargetDataCallbackS=null;
		RequestTargetDataCallbackF=null;
		FUNCDATA={};
		RequestFunctionDataCallbackS=null;
		RequestFunctionDataCallbackF=null;
		PostDataR={};
		PostDataCallback=null;
		JumpPros={};
		JumpProsF={};
		JumpProsL={};

		var data=ASGetSourceByName("data0");

		var data_head=data.getNodeByName("head");
		var data_head_icon=data_head.getNodeByName("icon");
		for (var i=0;i<data_head_icon.getNodeByName("left").node.length;i++) {
			ASAddASourceName({name:"icon_"+data_head_icon.getNodeByName("left").node[i].getAttribute("name"),src:data_head_icon.getAttribute("root")+data_head_icon.getNodeByName("left").node[i].getAttribute("name")+".png"});
			ASAddASourceName({name:"icon_"+data_head_icon.getNodeByName("left").node[i].getAttribute("name")+"L",src:data_head_icon.getAttribute("root")+data_head_icon.getNodeByName("left").node[i].getAttribute("name")+"L.png"});
		}
		for (var i=0;i<data_head_icon.getNodeByName("right").node.length;i++) {
			ASAddASourceName({name:"icon_"+data_head_icon.getNodeByName("right").node[i].getAttribute("name"),src:data_head_icon.getAttribute("root")+data_head_icon.getNodeByName("right").node[i].getAttribute("name")+".png"});
			ASAddASourceName({name:"icon_"+data_head_icon.getNodeByName("right").node[i].getAttribute("name")+"L",src:data_head_icon.getAttribute("root")+data_head_icon.getNodeByName("right").node[i].getAttribute("name")+"L.png"});
		}

		var data_cardBoard=data.getNodeByName("cardBoard");

		ASAddASourceBuild({src:data_cardBoard.getAttribute("sceneRoot")+data_cardBoard.getNodeByName("main").getAttribute("scene")});
		for (var i=0;i<data_cardBoard.node.length;i++) {
			var cardBoard=data_cardBoard.node[i];
			for (var j=0;j<cardBoard.getNodeByName("card").node.length;j++) {
				var img=cardBoard.getNodeByName("card").node[j].getNodeByName("img");
				ASAddASourceName({src:img.getAttribute("root")+img.node[0].getAttribute("name")});
			}
		}

		for (var i=0;i<data_cardBoard.node.length;i++) {
			if (data_cardBoard.node[i].nodeName=="main") continue;
			ASAddASourceWait({src:data_cardBoard.getAttribute("sceneRoot")+data_cardBoard.node[i].getAttribute("scene")});
		}

		var data_frame=data.getNodeByName("frame");
		for (var i=0;i<data_frame.node.length;i++) {
			ASAddASourceBuild({src:data_frame.node[i].getAttribute("titleImg")});
			ASAddASourceBuild({src:data_frame.node[i].getAttribute("titleImg").replace("title","title2")});
			if (data_frame.node[i].getAttribute("scene")) {
				ASAddASourceWait({src:data_frame.getAttribute("sceneRoot")+data_frame.node[i].getAttribute("scene")});
			}
		}

		var data_functionC=data.getNodeByName("functionC");
		// console.log(data_functionC.getAttribute("root"));
		for (var i=0;i<data_functionC.node.length;i++) {
			var src = data_functionC.getAttribute("root")+ data_functionC.node[i].getAttribute("img");
			// var src=data_functionC.node[i].getNodeByName("imgB").getAttribute("root")+"(1).jpg";
			ASAddASourceName({src:src});
		}

		var data_sponsor=data.getNodeByName("sponsor");
		for (var i=0;i<data_sponsor.node.length;i++) {
			var src=data_sponsor.getAttribute("root")+data_sponsor.node[i].getAttribute("pic");
			ASAddASourceWait({src:src});
		}

		DEFAULT_LANG="C";
		DEFAULT_FONT="Microsoft Yahei";
		if (ASDetectFont("Microsoft Yahei")) {
			DEFAULT_FONTLIST=[
				["Microsoft Yahei","微軟雅黑",1],
				["SimHei","黑體",1],
				["SimSun","宋體",1],
				["KaiTi","楷體",1],
				["Arial","Arial",1],
				["Verdana","Verdana",0.95],
				["Times New Roman","Times New Roman",0.95],
				["Comic Sans MS","Comic Sans MS",0.85],
			];
		} else {
			DEFAULT_FONT="Microsoft Yahei";
			DEFAULT_FONTLIST=[
				["STHeiti","黑體",1],
				["STSong","宋體",1],
				["BiauKai","楷體",1],
				["Arial","Arial",1],
				["Verdana","Verdana",0.95],
				["Times New Roman","Times New Roman",0.95],
				["Comic Sans MS","Comic Sans MS",0.85],
			];
		}
		if (ASBrowser=="Mobile") {
			DEFAULT_FONT="Droid Sans Fallback";
		}
		DEFAULT_WORD_WIDTH=180;
		DEFAULT_SCROLLBAR_WIDTH=15;
		DEFAULT_ROLLBAR_WIDTH=7;
		DEFAULT_TOPLOGO_WIDTH=606;
		DEFAULT_TOPLOGO_HEIGHT=231;
		DEFAULT_USER_IMG_WIDTH=121;
		DEFAULT_USER_IMG_HEIGHT=150;
		DEFAULT_CARDBOARD_WIDTH_L=100;
		DEFAULT_CARDBOARD_HEIGHT_L=100;
		DEFAULT_CARDBOARD_SPACE=10;
		DEFAULT_CARD_RADIUS=2;
		DEFAULT_FLASHIMG_TIMESPACE=6000;
		DEFAULT_SEARCHER_SIZE=60;
		DEFAULT_SEARCHER_RADIUS=6;
		DEFAULT_SEARCHER_SPACE=8;
		DEFAULT_CARDBOARD_APPEAR_WAITING=7;
		DEFAULT_SCENE=data_cardBoard.getAttribute("sceneRoot")+data_cardBoard.getNodeByName("main").getAttribute("scene");
		DEFAULT_CARDBOARD_BACK_X=15;
		DEFAULT_CARDBOARD_BACK_Y=11;
		DEFAULT_HEAD_HEIGHT=45;
		DEFAULT_HEAD_ICON_SIZE=42;
		DEFAULT_NOTICE_WIDTH=500;
		DEFAULT_SHELL_WIDTH=870;
		DEFAULT_SHELL_HEAD_HEIGHT=150;
		DEFAULT_SHELL_CLOSE_SIZE=45;
		DEFAULT_SHELL_BOTTOM_HEIGHT=65;
		DEFAULT_FRAME_WIDTH=1064;
		DEFAULT_FRAME_HEAD_MINHEIGHT=160;
		DEFAULT_FRAME_LINK_HEIGHT=45;
		DEFAULT_FRAME_JUMP_WIDTHL=30;
		DEFAULT_FRAME_JUMP_WIDTHA=145;
		DEFAULT_FRAME_BOTTOM_HEIGHT=80;
		DEFAULT_PAGE_WIDTH=870;
		DEFAULT_PAGE_WIDTHH=975;
		DEFAULT_PAGE_WIDTHM=910;
		DEFAULT_PAGE_WIDTHL=770;
		DEFAULT_EDITOR_ICON_SIZE0=98;
		DEFAULT_EDITOR_ICON_SIZE=45;

		VERTICAL_SHELL_WIDTH=820;
		VERTICAL_SHELL_HEAD_HEIGHT=250;
		VERTICAL_SHELL_CLOSE_SIZE=80;
		VERTICAL_SHELL_BOTTOM_HEIGHT=80;
		VERTICAL_HEAD_HEIGHT=80;
		VERTICAL_HEAD_ICON_SIZE=72;
		VERTICAL_FRAME_WIDTH=980;
		VERTICAL_FRAME_HEAD_MINHEIGHT=260;
		VERTICAL_FRAME_DIVIDEBAR_HEIGHT=20;
		VERTICAL_FRAME_LINK_HEIGHT=75;
		VERTICAL_FRAME_JUMP_WIDTHL=30;
		VERTICAL_FRAME_JUMP_WIDTHA=260;
		VERTICAL_FRAME_BOTTOM_HEIGHT=80;
		VERTICAL_PAGE_WIDTH=900;
		VERTICAL_PAGE_WIDTHH=950;
		VERTICAL_PAGE_WIDTHL=800;

	}


	function buildScene() {

		SCENE=ASElement({
			nodeName:"div",
			style:{
				position:"absolute",
			},
		});
		SCENE.currentPic="main.png";
			SCENE.pic0=ASElement({
				nodeName:"img",
				src:"Image/Scene/main.png",
				onload:function() {
					SCENE.reload(this.src);
				},
			});
			SCENE.picF=ASElement({
				nodeName:"div",
			});
			SCENE.appendChild(SCENE.picF);
			SCENE.copyright=ASElement({
				nodeName:"p",
				innerHTML:"©2019-2020 Chinese Folk Art Society, HKUSTSU. All Right Reserved.",
				style:{
					position:"absolute",
					transformOrigin:"50% 100%",
					fontFamily:DEFAULT_FONT,
					fontSize:15,
					color:"white",
					width:1000,
					left:ASWindowWidth/2-500,
					top:ASWindowHeight-30,
					textAlign:"center",
					textShadow:"2px 2px 5px rgba(0,0,0,0.8)",
					pointerEvents:"none",
				},
			});
			SCENE.appendChild(SCENE.copyright);
			if (ASVersion=="vertical") SCENE.copyright.set({style:{transform:{scale:1.6}}});

		SCENE.reload=function(src) {
			if (this.pic) {
				this.picF.removeChild(this.pic);
				this.pic0=this.pic;
				this.pic=null;
			}
			ROOT.set({style:{
				backgroundImage:"url("+src+")",
			}});
			this.resize();
		}

		SCENE.resize=function() {
			var width=ASWindowWidth,height=ASWindowHeight;
			var scale=Math.max(width/this.pic0.naturalWidth,height/this.pic0.naturalHeight);
			ROOT.set({style:{
				width:width,
				height:height,
				backgroundSize:this.pic0.naturalWidth*scale+"px "+this.pic0.naturalHeight*scale+"px",
				backgroundPosition:"center",
			}});
			if (this.pic) {
				var scale=Math.max(width/this.pic.naturalWidth,height/this.pic.naturalHeight);
				this.pic.set({wPrint:true,style:{
					left:(width-this.pic.naturalWidth*scale)/2,
					top:(height-this.pic.naturalHeight*scale)/2,
					width:this.pic.naturalWidth*scale,
					height:this.pic.naturalHeight*scale,
				}});
			}
			this.copyright.set({style:{
				left:ASWindowWidth/2-500,
				top:ASWindowHeight-30,
			}});
		}

		SCENE.changeVersion=function() {
			if (ASVersion=="horizon") {
				this.copyright.set({style:{transform:{scale:1}}});
			} else {
				this.copyright.set({style:{transform:{scale:1.6}}});
			}
		}

		SCENE.nextAppear=function() {
			this.setTimeout(function() {this.pic.setTarget({
				opacity:1,
				speed_alpha:0.05,
			});},10);
			this.resize();
			this.setTimeout(function() {
				if (!this.pic) return;
				this.reload(this.pic.src);
			},1000);
		}

		SCENE.change=function(pic) {
			if (pic==this.currentPic) return;
			this.currentPic=pic;
			if (this.pic) this.picF.removeChild(this.pic);
			this.pic=ASElement({
				nodeName:"img",
				src:"Image/Scene/"+pic,
				onload:function() {
					SCENE.nextAppear();
				},
				style:{
					position:"relative",
					opacity:0,
				},
			});
			this.picF.appendChild(this.pic);
		}

		ROOT.appendChild(SCENE);

	}


	function buildPage_News() {

		PAGE["news"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:DEFAULT_PAGE_WIDTHL,
				marginBottom:30,
			},
		});
		PAGE["news"].build=function() {

			this.wBuild=true;

			var y0=0;
			var data=ASGetSourceByName("data0").getNodeByName("news");
			this.block=[];
			for (var i=0;i<data.node.length;i++) {
				if (i>0) {
					this.appendChild(ASElement({nodeName:"hr"}));
				}
				this.block[i]=ASElement({
					nodeName:"div",
					style:{
						width:DEFAULT_PAGE_WIDTH,
						marginTop:40,
						marginBottom:40,
					},
				});
				this.appendChild(this.block[i]);
				var block=this.block[i];
					block.titleF=BasicTitle({
						size:28,
						wordC:data.node[i].getAttribute("titleC"),
						wordE:data.node[i].getAttribute("titleE"),
						widthA:DEFAULT_PAGE_WIDTHL-150,
					});
					block.appendChild(block.titleF);
					block.time=BasicWord({
						size:25,
						wordC:data.node[i].getAttribute("timeY")+"/"+data.node[i].getAttribute("timeD"),
						color:"rgb(200,0,0)",
						style:{

						},
					});
					block.appendChild(block.time);
					block.word=BasicWord({
						size:24,
						wordC:data.node[i].getAttribute("wordC"),
						wordE:data.node[i].getAttribute("wordE"),
						style:{
							width:DEFAULT_PAGE_WIDTHL-40,
							marginTop:20,
							marginLeft:20,
						},
					});
					block.appendChild(block.word);

				this.anchor[i].pos0=y0;
				this.anchor[i].pos1=y0+ASGetElementHeight(block);
				y0+=ASGetElementHeight(block)+80;

			}

		}

		var data=ASGetSourceByName("data0").getNodeByName("news");
		var page=PAGE["news"];
		page.anchor=[];
		for (var i=0;i<data.node.length;i++) {
			page.anchor[i]={
				wordC:data.node[i].getAttribute("titleC"),
				wordE:data.node[i].getAttribute("titleE"),
			};
		}

	}


	function buildPageV_News() {

		PAGE_V["news"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:VERTICAL_PAGE_WIDTHL,
				marginBottom:30,
			},
		});
		PAGE_V["news"].build=function() {

			this.wBuild=true;

			var y0=0;
			var data=ASGetSourceByName("data0").getNodeByName("news");
			this.block=[];
			for (var i=0;i<data.node.length;i++) {
				if (i>0) {
					this.appendChild(ASElement({nodeName:"hr"}));
				}
				this.block[i]=ASElement({
					nodeName:"div",
					style:{
						width:DEFAULT_PAGE_WIDTH,
						marginTop:40,
						marginBottom:40,
					},
				});
				this.appendChild(this.block[i]);
				var block=this.block[i];
					block.titleF=BasicTitle({
						size:60,
						wordC:data.node[i].getAttribute("titleC"),
						wordE:data.node[i].getAttribute("titleE"),
						widthA:VERTICAL_PAGE_WIDTHL,
					});
					block.appendChild(block.titleF);
					block.time=BasicWord({
						size:40,
						wordC:data.node[i].getAttribute("timeY")+"/"+data.node[i].getAttribute("timeD"),
						color:"rgb(200,0,0)",
						style:{
							marginTop:20,
							marginLeft:33,
						},
					});
					block.appendChild(block.time);
					block.word=BasicWord({
						size:45,
						wordC:data.node[i].getAttribute("wordC"),
						wordE:data.node[i].getAttribute("wordE"),
						style:{
							width:DEFAULT_PAGE_WIDTHL-40,
							marginTop:20,
							marginLeft:20,
						},
					});
					block.appendChild(block.word);

				this.anchor[i].pos0=y0;
				this.anchor[i].pos1=y0+ASGetElementHeight(block);
				y0+=ASGetElementHeight(block)+80;

			}

		}

		var data=ASGetSourceByName("data0").getNodeByName("news");
		var page=PAGE_V["news"];
		page.anchor=[];
		for (var i=0;i<data.node.length;i++) {
			page.anchor[i]={
				wordC:data.node[i].getAttribute("titleC"),
				wordE:data.node[i].getAttribute("titleE"),
			};
		}

	}


	function buildPage_FunctionC() {

		// functionC (現在的活動的製作頁面)

		PAGE["functionC"]=ASElement({
			nodeName:"div",
			style:{
				width:DEFAULT_PAGE_WIDTH,
				marginTop:30,
				marginBottom:20,
			},
		});
		PAGE["functionC"].build=function() {

			this.wBuild=true;

			var data=ASGetSourceByName("data0").getNodeByName("functionC");

			this.block=[];
			for (var i=0;i<data.node.length;i++) {

				this.block[this.block.length]=ASElement({
					nodeName:"div",
					style:{
						position:"relative",
						width:DEFAULT_PAGE_WIDTH,
						height:360,
					},
				});
				var block=this.block[this.block.length-1];
				this.appendChild(block);
					// 标题
					block.titleC=ASElement({
						nodeName:"div",
						style:{
							minWidth:300,
							height:40,
							backgroundColor:"rgb(220,0,0)",
							borderRadius:"0 4px 4px 0",
							boxShadow:"3px 3px 5px rgba(0,0,0,0.8)",
							cursor:"default",
							paddingRight:40,
						},
						// 获取活动名字，存到funcName
						funcName:data.node[i].getAttribute('name'),
						onmouseover:function() {
							// this.word.setTarget({transform:{translateX:5}});
						},
						onmouseout:function() {
							// this.word.setTarget({transform:{translateX:0}});
						},
						onmousedown:function() {
							// this.word.setTarget({transform:{translateX:2}});
						},
						onmouseup:function() {
							// this.word.setTarget({transform:{translateX:5}});
						},
						onclick:function() {
							// changeURL(this.funcName);
						},
					});
					block.appendChild(block.titleC);
						block.titleC.word=BasicWord({
							size:26,
							color:"white",
							wordC:data.node[i].getAttribute("nameC"),
							wordE:data.node[i].getAttribute("nameE"),
							width:"max",
							style:{
								position:"relative",
								left:20,
								top:3.5,
								pointerEvents:"none",
							},
						});
						block.titleC.appendChild(block.titleC.word);

					block.enroll=ASElement({
						nodeName:"div",
						style:{
							position:"relative",
							width:DEFAULT_PAGE_WIDTH-ASGetElementWidth(block.titleC)-10,
							height:28,
						},
					});
					block.appendChild(block.enroll);
						block.enroll.pic=ASElement({
							nodeName:"div",
							style:{
								position:"absolute",
								height:45,
								left:30,
							},
						});
						block.enroll.appendChild(block.enroll.pic);
						var name=data.node[i].getAttribute("enroll");
						var id=data.node[i].nodeName;
						if (USERDATA!="NULL" && USERDATA.func[id]) {
							if (USERDATA.func[id].status==",") name="paying";
							if (USERDATA.func[id].status==".") name="success";
						}
						block.enroll.pic.appendChild(ASElement({
							nodeName:"img",
							src:ASGetSrcByName("enroll_"+name),
							style:{
								height:"100%",
							},
						}));
						var wordC="",wordE="",color="";
						switch (name) {
							case "ban":
								wordC="非報名活動";
								wordE="Not available";
								color="rgb(200,200,200)";
							break;
							case "past":
								wordC="已結束";
								wordE="Past";
								color="rgb(150,150,150)";
							break;
							case "waiting":
								color="rgb(200,0,0)";
								wordC="即將到來";
								wordE="Incoming";
							break;
							case "available":
								wordC="快來報名！";
								wordE="Sign Up Now!";
								color="rgb(230,0,0)";
							break;
							case "full":
								wordC="名額已滿";
								wordE="Places are full";
								color="rgb(230,0,0)";
							break;
							case "paying":
								wordC="等待付款";
								wordE="Paying";
								color="rgb(200,0,0)";
							break;
							case "success":
								wordC="已報名";
								wordE="Registered";
								color="rgb(0,200,0)";
							break;
						}
						block.enroll.word=BasicWord({
							size:25,
							wordC:wordC,
							wordE:wordE,
							color:color,
							style:{
								position:"absolute",
								left:80,
								top:7,
							},
						});
						block.enroll.appendChild(block.enroll.word);

					block.date=BasicWord({
						size:25,
						color:"rgb(230,0,0)",
						wordC:data.node[i].getAttribute("date"),
						wordE:data.node[i].getAttribute("date"),
						style:{
							position:"absolute",
							right:0,
							top:5,
						},
					});
					block.appendChild(block.date);

					//介紹信息
					block.intro=BasicWord({
						size:22,
						wordC:data.node[i].getAttribute("briefC"),
						wordE:data.node[i].getAttribute("briefE"),
						style:{
							width:"48%",
							marginLeft:30,
							marginTop:20,
							textAlign:"justify",
							lineHeight:1.5,
						},
					});
					block.appendChild(block.intro);

					var img=[];
					// var imgN=parseInt(data.node[i].getNodeByName("imgB").getAttribute("imgN"));

					img[0] = data.getAttribute("root")+ data.node[i].getAttribute("img");

					// var imageURL = ;
					

					// for (var j=1;j<=imgN;j++) {
					// 	img[img.length]=data.node[i].getNodeByName("imgB").getAttribute("root")+"("+j+").jpg";
					// }
					block.imgC=ASElement({
						nodeName:"div",
						imageURL:data.getAttribute("root")+ data.node[i].getAttribute("img"),
						imageNameC:data.getAttribute("root")+ data.node[i].getAttribute("nameC"),
						imageNameE:data.getAttribute("root")+ data.node[i].getAttribute("nameE"),
						style:{
							float:"right",
							width:390,
							height:260,
							marginTop:15,
						},
						onmouseover:function() {
							this.style.cursor = 'pointer';
						},
						onclick:function() {
							
							changeURL("image?imageURL="+this.imageURL+"&nameC="+this.imageNameC+"&nameE="+this.imageNameE);
						},
					});
					block.appendChild(block.imgC);

					if (data.node[i].getAttribute("facebookL")) {
						block.imgA=ASElement({
							nodeName:"a",
							href:data.node[i].getAttribute("facebookL").replace("%26","&"),
							target:"_blank",
							title:"facebook",
						});
						block.imgC.appendChild(block.imgA);
					}

					block.img=FlashImg({
						type:"response",
						widthA:390,
						heightA:260,
						imgSize:"intelligent", // 活動照片比例
						img:img,
						timeSpace:1500,
						style:{
							backgroundColor:"#fafafa",
						},
					});
					if (data.node[i].getAttribute("facebookL")) block.imgA.appendChild(block.img);
					else block.imgC.appendChild(block.img);

			}

			this.anchor=[];
			var data=ASGetSourceByName("data0").getNodeByName("functionC");
			for (var i=0;i<data.node.length;i++) {
				this.anchor[i]={
					wordC:data.node[i].getAttribute("nameC"),
					wordE:data.node[i].getAttribute("nameE"),
					pos0:i*ASGetElementHeight(this.block[i]),
					pos1:(i+1)*ASGetElementHeight(this.block[i]),
				};
			}

		}

		PAGE["functionC"].anchor=[];
		var data=ASGetSourceByName("data0").getNodeByName("functionC");
		for (var i=0;i<data.node.length;i++) {
			PAGE["functionC"].anchor[i]={
				wordC:data.node[i].getAttribute("nameC"),
				wordE:data.node[i].getAttribute("nameE"),
			};
		}

	}


	function buildPageV_FunctionC() {

		PAGE_V["functionC"]=ASElement({
			nodeName:"div",
			style:{
				width:VERTICAL_PAGE_WIDTH,
				marginTop:30,
				marginBottom:20,
			},
		});
		PAGE_V["functionC"].build=function() {

			this.wBuild=true;

			var data=ASGetSourceByName("data0").getNodeByName("functionC");
			this.block=[];
			for (var i=0;i<data.node.length;i++) {

				this.block[this.block.length]=ASElement({
					nodeName:"div",
					style:{
						position:"relative",
						width:VERTICAL_PAGE_WIDTH,
					},
				});
				var block=this.block[this.block.length-1];
				this.appendChild(block);

					block.titleC=ASElement({
						nodeName:"div",
						style:{
							position:"relative",
							top:15,
							minWidth:400,
							height:80,
							backgroundColor:"rgb(220,0,0)",
							borderRadius:"0 4px 4px 0",
							boxShadow:"3px 3px 5px rgba(0,0,0,0.8)",
							cursor:"pointer",
							paddingRight:40,
						},
						funcID:data.node[i].nodeName,
						onmouseover:function() {
							// this.word.setTarget({transform:{translateX:10}});
						},
						onmouseout:function() {
							// this.word.setTarget({transform:{translateX:0}});
						},
						onmousedown:function() {
							// this.word.setTarget({transform:{translateX:4}});
						},
						onmouseup:function() {
							// this.word.setTarget({transform:{translateX:10}});
						},
						onclick:function() {
							// changeURL(this.funcID);
						},
					});
					block.appendChild(block.titleC);
						block.titleC.word=BasicWord({
							size:50,
							color:"white",
							wordC:data.node[i].getAttribute("nameC"),
							wordE:data.node[i].getAttribute("nameE"),
							width:"max",
							style:{
								position:"relative",
								left:20,
								top:5,
								pointerEvents:"none",
							},
						});
						block.titleC.appendChild(block.titleC.word);

					block.date=BasicWord({
						size:55,
						color:"rgb(230,0,0)",
						wordC:data.node[i].getAttribute("date"),
						wordE:data.node[i].getAttribute("date"),
						style:{
							position:"absolute",
							right:0,
							top:17,
						},
					});
					block.appendChild(block.date);

					block.appendChild(ASElement("br"));

					block.enroll=ASElement({
						nodeName:"div",
						style:{
							marginTop:35,
							marginleft:70,
							height:56,
						},
					});
					block.appendChild(block.enroll);
						block.enroll.pic=ASElement({
							nodeName:"div",
							style:{
								position:"absolute",
								height:65,
								left:25,
							},
						});
						block.enroll.appendChild(block.enroll.pic);
						var name=data.node[i].getAttribute("enroll");
						if (USERDATA!="NULL" && USERDATA.func[data.node[i].nodeName]) {
							if (USERDATA.func[data.node[i].nodeName].status==",") name="paying";
							if (USERDATA.func[data.node[i].nodeName].status==".") name="success";
						}
						block.enroll.pic.appendChild(ASElement({
							nodeName:"img",
							src:ASGetSrcByName("enroll_"+name),
							style:{
								height:"100%",
							},
						}));
						var wordC="",wordE="",color="";
						switch (name) {
							case "ban":
								wordC="非報名活動";
								wordE="Not available";
								color="rgb(200,200,200)";
							break;
							case "past":
								wordC="已結束";
								wordE="Past";
								color="rgb(150,150,150)";
							break;
							case "waiting":
								color="rgb(200,0,0)";
								wordC="即將到來";
								wordE="Incoming";
							break;
							case "available":
								wordC="快來報名！";
								wordE="Sign Up Now!";
								color="rgb(230,0,0)";
							break;
							case "paying":
								wordC="等待付款";
								wordE="Paying";
								color="rgb(200,0,0)";
							break;
							case "success":
								wordC="已報名";
								wordE="Registered";
								color="rgb(0,200,0)";
							break;
						}
						block.enroll.word=BasicWord({
							size:45,
							wordC:wordC,
							wordE:wordE,
							color:color,
							style:{
								position:"relative",
								marginLeft:80,
								top:-3,
							},
						});
						block.enroll.appendChild(block.enroll.word);

					var img=[];
					img[0] = data.getAttribute("root")+ data.node[i].getAttribute("img");

					//-----

					block.imgC=ASElement({
						nodeName:"div",
						style:{
							width:750,
							height:500,
							marginTop:40,
							marginLeft:90,
						},
					});
					block.appendChild(block.imgC);
						block.img=FlashImg({
							widthA:750,
							heightA:500,
							imgSize:"intelligent",
							img:img,
							delay:(i-1)*250,
							style:{
								backgroundColor:"#fafafa",
							},
						});
						block.imgC.appendChild(block.img);

					block.intro=BasicWord({
						size:45,
						wordC:data.node[i].getAttribute("briefC"),
						wordE:data.node[i].getAttribute("briefE"),
						style:{
							width:VERTICAL_PAGE_WIDTH-150,
							marginLeft:90,
							marginTop:40,
							textAlign:"justify",
							lineHeight:1.5,
						},
					});
					block.appendChild(block.intro);

				this.appendChild(ASElement({
					nodeName:"hr",
					style:{
						marginTop:50,
						marginBottom:20,
					},
				}));

			}

			this.anchor=[];
			var data=ASGetSourceByName("data0").getNodeByName("functionC");
			var y0=0;
			for (var i=0;i<data.node.length;i++) {
				this.anchor[i]={
					wordC:data.node[i].getAttribute("nameC"),
					wordE:data.node[i].getAttribute("nameE"),
					pos0:y0,
					pos1:y0+ASGetElementHeight(this.block[i]),
				};
				y0+=ASGetElementHeight(this.block[i])+72;
			}

		}

		PAGE_V["functionC"].anchor=[];
		var data=ASGetSourceByName("data0").getNodeByName("functionC");
		for (var i=0;i<data.node.length;i++) {
			PAGE_V["functionC"].anchor[i]={
				wordC:data.node[i].getAttribute("nameC"),
				wordE:data.node[i].getAttribute("nameE"),
			};
		}

	}


	// Brief
	function buildPage_FunctionB() {

		var data=ASGetSourceByName("data0").getNodeByName("functionC");
		for (var o=0;o<data.node.length;o++) {
			PAGE[data.node[o].nodeName+"Brief"]=ASElement({
				nodeName:"div",
				wCenter:true,
				style:{
					width:DEFAULT_PAGE_WIDTHL,
					marginTop:30,
					marginBottom:40,
				},
				o:o,
			});
			PAGE[data.node[o].nodeName+"Brief"].build=function() {

				this.wBuild=true;

				var data=ASGetSourceByName("data0").getNodeByName("functionC").node[this.o];

				this.title1=BasicTitle({
					wordC:"活動信息",
					wordE:"Information",
					style:{
						marginBottom:15,
					},
				});
				this.appendChild(this.title1);

				if (data.getAttribute("date")) {
					this.date=BasicInput({
						type:"text",
						wordC:"日   期",
						wordE:"Date",
						text:[{
							wordC:data.getAttribute("date"),
							wordE:data.getAttribute("date"),
						}],
						style:{
							marginLeft:30,
						},
					});
					this.appendChild(this.date);
				}
				if (data.getAttribute("time")) {
					this.time=BasicInput({
						type:"text",
						wordC:"時   間",
						wordE:"Time",
						text:[{
							wordC:data.getAttribute("time"),
							wordE:data.getAttribute("time"),
						}],
						style:{
							marginLeft:30,
						},
					});
					this.appendChild(this.time);
				}
				if (data.getAttribute("venue")) {
					this.venue=BasicInput({
						type:"text",
						wordC:"地   點",
						wordE:"Venue",
						text:[{
							wordC:data.getAttribute("venue"),
							wordE:data.getAttribute("venue"),
						}],
						style:{
							marginLeft:30,
						},
					});
					this.appendChild(this.venue);
				}
                if(data.getAttribute("info")){
                    this.info=BasicInput({
                        type:"text",
                        wordC:"简   介",
                        wordE:"Brief",
                        text:[{
                            wordC:data.getAttribute("info"),
                            wordE:data.getAttribute("info"),
                        }],
                        style:{
                            marginLeft:30,
                        },
                    });
                    this.appendChild(this.info);
                }
			}
		}

	}

	function buildPageV_FunctionB() {

		var data=ASGetSourceByName("data0").getNodeByName("functionC");
		for (var o=0;o<data.node.length;o++) {
			PAGE_V[data.node[o].nodeName+"Brief"]=ASElement({
				nodeName:"div",
				wCenter:true,
				style:{
					width:DEFAULT_PAGE_WIDTHL,
					marginTop:30,
					marginBottom:40,
				},
				o:o,
			});
			PAGE_V[data.node[o].nodeName+"Brief"].build=function() {

				this.wBuild=true;

				var data=ASGetSourceByName("data0").getNodeByName("functionC").node[this.o];

				this.title1=BasicTitle({
					size:60,
					wordC:"活動信息",
					wordE:"Information",
					style:{
						marginBottom:15,
					},
				});
				this.appendChild(this.title1);

				if (data.getAttribute("date")) {
					this.date=BasicInput({
						size:45,
						type:"text",
						wordC:"日   期",
						wordE:"Date",
						text:[{
							wordC:data.getAttribute("date"),
							wordE:data.getAttribute("date"),
						}],
						style:{
							marginLeft:30,
						},
					});
					this.appendChild(this.date);
				}
				if (data.getAttribute("time")) {
					this.time=BasicInput({
						size:45,
						type:"text",
						wordC:"時   間",
						wordE:"Time",
						text:[{
							wordC:data.getAttribute("time"),
							wordE:data.getAttribute("time"),
						}],
						style:{
							marginLeft:30,
						},
					});
					this.appendChild(this.time);
				}
				if (data.getAttribute("venue")) {
					this.venue=BasicInput({
						type:"text",
						wordC:"地   點",
						wordE:"Venue",
						text:[{
							wordC:data.getAttribute("venue"),
							wordE:data.getAttribute("venue"),
						}],
						style:{
							marginLeft:30,
						},
					});
					this.appendChild(this.venue);

				}
                if (data.getAttribute("info")){
                    this.info=BasicInput({
                        type:"text",
                        wordC:"简   介",
                        wordE:"Brief",
                        text:[{
                            wordC:data.getAttribute("info"),
                            wordE:data.getAttribute("info"),
                        }],
                        style:{
                            marginLeft:30,
                        },
                    });
                    this.appendChild(this.info);
                }
			}
		}

	}


	// 好像是个用来做 signup form 的
	function buildPage_FunctionS() {

		var data=ASGetSourceByName("data0").getNodeByName("functionC");
		for (var o=0;o<data.node.length;o++) {
			PAGE[data.node[o].nodeName+"Signup"]=ASElement({
				nodeName:"div",
				wCenter:true,
				style:{
					position:"relative",
					width:DEFAULT_PAGE_WIDTHL,
					marginTop:30,
					marginBottom:30,
				},
				o:o,
				funcID:data.node[o].nodeName,
			});
			var page=PAGE[data.node[o].nodeName+"Signup"];
			page.appear=function() {

			}
			page.update=function() {
				this.clearChild();
				if (USERDATA=="NULL") {
					this.appendChild(this.page[0]);
					return;
				}
				if (USERDATA.place=="E") {
					this.appendChild(this.page[2]);
				} else {
					this.appendChild(this.page[1]);
					var page=this.page[1];
					page.input["itsc"].setValue(USERDATA.user);
					page.input["name"].setValue(USERDATA.name);
					page.input["place"].setValue(USERDATA.place);
					page.input["studentID"].setValue(USERDATA.studentID);
					page.input["phone"].setValue(USERDATA.phone);
					if (USERDATA.place!="N") {
						page.input["studentID"].input.set({readOnly:true});
					} else {
						page.input["studentID"].input.set({readOnly:false});
					}
					if (USERDATA.func[this.funcID]) {
						page.save.word.setWord({
							wordC:"更   改",
							wordE:"Update",
						});
						if (USERDATA.func[this.funcID].status==",") {
							page.status.img.src=ASGetSrcByName("enroll_paying");
							page.status.word.setWord({
								wordC:"等待付款",
								wordE:"Paying",
							});
						} else {
							page.status.img.src=ASGetSrcByName("enroll_success");
							page.status.word.setWord({
								wordC:"已报名",
								wordE:"Registered",
							});
						}
						page.input["role"].setValue(USERDATA.func[this.funcID].role);
						page.input["excoList"].setValue(USERDATA.func[this.funcID].payto);
					} else {
						page.save.word.setWord({
							wordC:"提   交",
							wordE:"Submit",
						});
						page.status.img.src=ASGetSrcByName("enroll_available");
						page.status.word.setWord({
							wordC:"正在報名",
							wordE:"Registering",
						});
					}
				}
				this.dealFee();
				this.setTimeout(function(){if (this.root) this.root.pageResize(this);},30);
			}
			page.dealFee=function() {

				var page=this.page[1];
				var place="N";
				if (USERDATA!="NULL" && USERDATA.place!="N") place="M";
				page.input["fee"].setValue(page.input["role"].getValue()+place);
				if (page.input["fee"].text[page.input["fee"].textC].wordE=="Free") {
					page.inputF.removeChild(page.input["payway"]);
					page.inputF.removeChild(page.input["payway"].br);
					page.inputF.removeChild(page.input["excoList"]);
					page.inputF.removeChild(page.input["excoList"].br);
				} else {
					page.inputF.appendChild(page.input["payway"]);
					page.inputF.appendChild(page.input["payway"].br);
					page.inputF.appendChild(page.input["excoList"]);
					page.inputF.appendChild(page.input["excoList"].br);
				}

				var page=this.page[2];
				var place="N";
				if (TARGETDATA!="NULL" && TARGETDATA.place!="N") place="M";
				page.input["fee"].setValue(page.input["role"].getValue()+place);
				if (page.input["fee"].text[page.input["fee"].textC].wordE=="Free") {
					page.inputF.removeChild(page.input["payway"]);
					page.inputF.removeChild(page.input["payway"].br);
				} else {
					page.inputF.appendChild(page.input["payway"]);
					page.inputF.appendChild(page.input["payway"].br);
				}

				if (this.root) this.root.pageResize(this);

			}
			page.updateTargetData=function() {
				if (USERDATA=="NULL" || USERDATA.place!="E") return;
				var page=this.page[2];
				if (TARGETDATA=="NULL") {
					page.input["name"].setValue("");
					page.input["studentID"].setValue("");
					page.input["studentID"].input.set({readOnly:false});
					page.input["phone"].setValue("");
					page.input["place"].setValue("N");
				} else {
					page.input["name"].setValue(TARGETDATA.name);
					page.input["studentID"].setValue(TARGETDATA.studentID);
					if (TARGETDATA.place!="N") {
						page.input["studentID"].input.set({readOnly:true});
					} else {
						page.input["studentID"].input.set({readOnly:false});
					}
					page.input["phone"].setValue(TARGETDATA.phone);
					page.input["place"].setValue(TARGETDATA.place);
				}
				this.dealFee();
			}
			page.build=function() {

				this.wBuild=true;

				this.page=[];

				this.page[0]=ASElement({
					nodeName:"div",
					root:this,
					style:{
						width:DEFAULT_PAGE_WIDTHL,
					},
				});
				var page=this.page[0];
					page.word=BasicWord({
						size:60,
						wordC:"請先登錄",
						wordE:"Please log in first.",
						style:{
							width:"100%",
							textAlign:"center",
							marginTop:50,
						},
					});
					page.appendChild(page.word);
					page.log=BasicButton({
						size:24,
						wordC:"登   入",
						wordE:"Log in",
						wCenter:true,
						style:{
							marginTop:30,
						},
						onclick:function() {
							changeURL("login");
						},
					});
					page.appendChild(page.log);

				this.page[1]=ASElement({
					nodeName:"div",
					root:this,
					style:{
						width:DEFAULT_PAGE_WIDTHL,
					},
				});
				var page=this.page[1];

					page.succeed=function(type) {
						if (type=="user") {
							this.succeedU=true;
						}
						if (type=="func") {
							this.succeedS=true;
						}
						if (this.succeedU && this.succeedS) {
							this.loading.succeed();
							this.root.setTimeout(function() {
								USERDATA.func[SignupPagePostFuncData_ID]=SignupPagePostFuncData_DATA;
								delete PostDataR.banDefault;
								postUserDataSucceed();
								this.loading.end();
							},1000);
						}
					}

					var data=ASGetSourceByName("data0").getNodeByName("functionC").node[this.o];
					page.inputList=["itsc","name","studentID","phone","place","role","fee","payway","excoList"];

					page.titleF=BasicTitle({
						wordC:data.getAttribute("nameC")+" 報名表",
						wordE:"Registration Form of<br>"+data.getAttribute("nameE"),
						style:{
							marginBottom:15,
						},
					});
					page.appendChild(page.titleF);

					page.status=ASElement({
						nodeName:"div",
						style:{
							float:"right",
						},
					});
					page.appendChild(page.status);
						page.status.img=ASElement({
							nodeName:"img",
							style:{
								height:45,
							},
						});
						page.status.appendChild(page.status.img);
						page.status.word=BasicWord({
							size:28,
							wordC:"aa",
							wordE:"aa",
							color:"rgb(230,0,0)",
							style:{
								position:"relative",
								top:-10,
								left:5
							},
						});
						page.status.appendChild(page.status.word);

					page.input=[];
					page.inputF=ASElement({
						nodeName:"div",
					});
					page.appendChild(page.inputF);
					for (var i=0;i<page.inputList.length;i++) {
						var p={
							model:page.inputList[i],
							style:{
								marginTop:2,
								marginBottom:2,
								marginLeft:30,
							},
						};
						if (page.inputList[i]=="itsc") {
							p.hintC="";
							p.hintE="";
							p.wReadonly=true;
							p.wCompulsory=true;
						}
						if (page.inputList[i]=="name") {
							p.hintC="例如：LI Hua";
							p.hintE="E.g. Jarvis";
							p.wCompulsory=true;
						}
						if (page.inputList[i]=="studentID") {
							p.hintC="例如：20326666";
							p.hintE="E.g. 20326666";
							p.wCompulsory=true;
						}
						if (page.inputList[i]=="phone") {
							p.hintC="例如：23586666";
							p.hintE="E.g. 23586666";
							p.wCompulsory=true;
						}
						if (page.inputList[i]=="role") {
							p.model="";
							p.type="radioPoint";
							p.wordC="角   色";
							p.wordE="Role";
							p.root=page;
							p.block=[];
							var data1=data.getNodeByName("role");
							for (var j=0;j<data1.node.length;j++) {
								if (data1.node[j].getAttribute("counterOnly")) continue;
								p.block[p.block.length]={
									wordC:data1.node[j].getAttribute("nameC"),
									wordE:data1.node[j].getAttribute("nameE"),
									value:j,
								}
							}
							p.onchoose=function() {
								this.root.root.dealFee();
							}
						}
						if (page.inputList[i]=="fee") {
							p.wordC="費   用";
							p.wordE="Fee";
							p.model="";
							p.type="text";
							p.text=[];
							var data1=data.getNodeByName("role");
							for (var j=0;j<data1.node.length;j++) {
								var str1C=data1.node[j].getAttribute("feeN");
								var str1E=data1.node[j].getAttribute("feeN");
								if (str1C=="0") {
									str1C="免   費";
									str1E="Free";
								} else {
									str1C+="HKD";
									str1E+="HKD";
								}
								var str2C=data1.node[j].getAttribute("feeM");
								var str2E=data1.node[j].getAttribute("feeM");
								if (str2C=="0") {
									str2C="免   費";
									str2E="Free";
								} else {
									str2C+="HKD";
									str2E+="HKD";
								}
								p.text[p.text.length]={
									wordC:str1C,
									wordE:str1E,
									value:j+"N",
								};
								p.text[p.text.length]={
									wordC:str2C,
									wordE:str2E,
									value:j+"M",
								};
							}
						}
						if (page.inputList[i]=="payway") {
							p.value="N";
						}
						if (page.inputList[i]=="excoList") {
							p.wordC="交   予";
							p.wordE="Pay to";
							p.firstBlock=3;
						}
						page.input[page.inputList[i]]=BasicInput(p);
						page.inputF.appendChild(page.input[page.inputList[i]]);
						page.input[page.inputList[i]].br=ASElement("br")
						page.inputF.appendChild(page.input[page.inputList[i]].br);
					}
					if (page.input["fee"].text[page.input["fee"].textC].wordE=="Free") {
						page.inputF.removeChild(page.input["payway"]);
						page.inputF.removeChild(page.input["excoList"]);
					}
					if (data.getNodeByName("role").node.length<=1) {
						page.inputF.removeChild(page.input["role"]);
					}

					page.loading=BasicLoading({
						style:{
							marginLeft:580,
							width:44,
							height:44,
						},
					});
					page.appendChild(page.loading);

					page.save=BasicButton({
						size:24,
						wordC:"提   交",
						wordE:"Submit",
						root:page,
						style:{
							marginTop:30,
							marginLeft:30,
						},
						onclick:function() {
							var wWrong=false;
							for (var i=0;i<this.root.inputList.length;i++) {
								if (this.root.input[this.root.inputList[i]].check) this.root.input[this.root.inputList[i]].check();
								if (this.root.input[this.root.inputList[i]].wWrong) {
									wWrong=true;
								}
							}
							if (wWrong) return;
							this.root.loading.restart();
							this.root.loading.setTimeout(function(){this.start();},30);
							this.root.succeedU=false;
							this.root.succeedF=false;
							var data={};
							data.user=USERDATA.user;
							data.ticket=USERDATA.ticket;
							data.action="postUserData";
							data.name=this.root.input["name"].getValue();
							data.studentID=this.root.input["studentID"].getValue();
							data.phone=this.root.input["phone"].getValue();
							SignupPagePostFuncData_PAGE=this.root;
							PostDataR=data;
							PostDataR.banDefault=true;
							sendAJAX({
								type:"POST",
								src:"cgi-bin/operateData.php",
								data:data,
								callback:"SignupPagePostFuncData_PAGE.succeed('user');",
							});
							var data={};
							data.user=USERDATA.user;
							data.ticket=USERDATA.ticket;
							data.action="postUserFuncData";
							data.id=this.root.root.funcID;
							data.role=this.root.input["role"].getValue();
							if (this.root.input["fee"].text[this.root.input["fee"].textC].wordE=="Free") {
								data.status=".";
								data.payto="free";
							} else {
								data.status=",";
								data.payto=this.root.input["excoList"].getValue();
							}
							SignupPagePostFuncData_ID=data.id;
							SignupPagePostFuncData_DATA={
								id:data.id,
								user:data.user,
								status:data.status,
								payto:data.payto,
								role:data.role,
							};
							sendAJAX({
								type:"POST",
								src:"cgi-bin/operateData.php",
								data:data,
								callback:"SignupPagePostFuncData_PAGE.succeed('func');",
							});
						},
					});
					page.appendChild(page.save);

				this.page[2]=ASElement({
					nodeName:"div",
					root:this,
					style:{
						width:DEFAULT_PAGE_WIDTHL,
					},
				});
				var page=this.page[2];

					page.succeed=function(type) {
						if (type=="user") {
							this.succeedU=true;
						}
						if (type=="func") {
							this.succeedS=true;
						}
						if (this.succeedU && this.succeedS) {
							this.loading.succeed();
						}
					}

					var data=ASGetSourceByName("data0").getNodeByName("functionC").node[this.o];
					page.inputList=["itsc","name","studentID","phone","place","role","fee","payway"];

					page.titleF=BasicTitle({
						widthA:DEFAULT_PAGE_WIDTHL-300,
						wordC:data.getAttribute("nameC")+" 報名表",
						wordE:"Registration Form of<br>"+data.getAttribute("nameE"),
						style:{
							marginBottom:15,
						},
					});
					page.appendChild(page.titleF);

					page.input=[];
					page.inputF=ASElement({
						nodeName:"div",
					});
					page.appendChild(page.inputF);
					for (var i=0;i<page.inputList.length;i++) {
						var p={
							model:page.inputList[i],
							style:{
								marginTop:2,
								marginBottom:2,
								marginLeft:30,
							},
						};
						if (page.inputList[i]=="itsc") {
							p.wCompulsory=true;
							p.root=this;
							p.onblur=function() {
								if (!this.wWrong) {
									SignupPageRequestTargetData_PAGE=this.root;
									requestTargetData(this.input.value,"SignupPageRequestTargetData_PAGE.updateTargetData();");
								}
							}
						}
						if (page.inputList[i]=="name") {
							p.hintC="例如：LI Hua";
							p.hintE="E.g. Jarvis";
							p.wCompulsory=true;
						}
						if (page.inputList[i]=="studentID") {
							p.hintC="例如：20326666";
							p.hintE="E.g. 20326666";
							p.wCompulsory=true;
						}
						if (page.inputList[i]=="phone") {
							p.hintC="例如：23586666";
							p.hintE="E.g. 23586666";
							p.wCompulsory=true;
						}
						if (page.inputList[i]=="role") {
							p.model="";
							p.type="radioPoint";
							p.wordC="角   色";
							p.wordE="Role";
							p.root=page;
							p.block=[];
							var data1=data.getNodeByName("role");
							for (var j=0;j<data1.node.length;j++) {
								p.block[j]={
									wordC:data1.node[j].getAttribute("nameC"),
									wordE:data1.node[j].getAttribute("nameE"),
									value:j,
								}
							}
							p.onchoose=function() {
								this.root.root.dealFee();
							}
						}
						if (page.inputList[i]=="fee") {
							p.wordC="費   用";
							p.wordE="Fee";
							p.model="";
							p.type="text";
							p.text=[];
							var data1=data.getNodeByName("role");
							for (var j=0;j<data1.node.length;j++) {
								var str1C=data1.node[j].getAttribute("feeN");
								var str1E=data1.node[j].getAttribute("feeN");
								if (str1C=="0") {
									str1C="免   費";
									str1E="Free";
								} else {
									str1C+="HKD";
									str1E+="HKD";
								}
								var str2C=data1.node[j].getAttribute("feeM");
								var str2E=data1.node[j].getAttribute("feeM");
								if (str2C=="0") {
									str2C="免   費";
									str2E="Free";
								} else {
									str2C+="HKD";
									str2E+="HKD";
								}
								p.text[p.text.length]={
									wordC:str1C,
									wordE:str1E,
									value:j+"N",
								};
								p.text[p.text.length]={
									wordC:str2C,
									wordE:str2E,
									value:j+"M",
								};
							}
						}
						if (page.inputList[i]=="payway") {
							p.value="E";
						}
						page.input[page.inputList[i]]=BasicInput(p);
						page.inputF.appendChild(page.input[page.inputList[i]]);
						page.input[page.inputList[i]].br=ASElement("br")
						page.inputF.appendChild(page.input[page.inputList[i]].br);
					}

					page.switchLang=BasicButton({
						size:24,
						wordC:"English Version",
						wordE:"切換至中文",
						color:"rgb(240,240,240)",
						colorL:"rgb(250,250,250)",
						colorW:"rgb(230,0,0)",
						style:{
							position:"absolute",
							top:0,
							right:0,
						},
						onclick:function() {
							if (ASLang=="C") setLang("E");
							else setLang("C");
						},
					});
					page.appendChild(page.switchLang);

					page.loading=BasicLoading({
						style:{
							marginLeft:480,
							width:44,
							height:44,
						},
					});
					page.appendChild(page.loading);

					page.save=BasicButton({
						size:24,
						wordC:"提   交",
						wordE:"Submit",
						root:page,
						style:{
							marginTop:30,
							marginLeft:20,
						},
						onclick:function() {
							var wWrong=false;
							for (var i=0;i<this.root.inputList.length;i++) {
								if (this.root.input[this.root.inputList[i]].check) this.root.input[this.root.inputList[i]].check();
								if (this.root.input[this.root.inputList[i]].wWrong) {
									wWrong=true;
								}
							}
							if (wWrong) return;
							this.root.loading.restart();
							this.root.loading.setTimeout(function(){this.start();},30);
							this.root.succeedU=false;
							this.root.succeedF=false;
							var data={};
							data.user=USERDATA.user;
							data.ticket=USERDATA.ticket;
							data.target=this.root.input["itsc"].getValue();
							data.action="postTargetData";
							data.name=this.root.input["name"].getValue();
							data.studentID=this.root.input["studentID"].getValue();
							data.phone=this.root.input["phone"].getValue();
							SignupPagePostTargetFuncData_PAGE=this.root;
							sendAJAX({
								type:"POST",
								src:"cgi-bin/operateData.php",
								data:data,
								callback:"SignupPagePostTargetFuncData_PAGE.succeed('user');",
							});
							var data={};
							data.user=USERDATA.user;
							data.ticket=USERDATA.ticket;
							data.target=this.root.input["itsc"].getValue();
							data.action="postTargetFuncData";
							data.id=this.root.root.funcID;
							data.role=this.root.input["role"].getValue();
							data.status=".";
							data.payto="counter";
							sendAJAX({
								type:"POST",
								src:"cgi-bin/operateData.php",
								data:data,
								callback:"SignupPagePostTargetFuncData_PAGE.succeed('func');",
							});
						},
					});
					page.appendChild(page.save);

					page.clear=BasicButton({
						size:24,
						wordC:"清   空",
						wordE:"Clear",
						color:"rgb(200,200,200)",
						colorW:"black",
						colorL:"rgb(230,230,230)",
						root:page,
						style:{
							marginTop:30,
							marginLeft:10,
						},
						onclick:function() {
							TARGETDATA="NULL";
							this.root.input["itsc"].setValue("");
							this.root.input["name"].setValue("");
							this.root.input["studentID"].setValue("");
							this.root.input["phone"].setValue("");
							this.root.input["place"].setValue("N");
							this.root.input["role"].setValue(0);
							this.root.root.dealFee();
							this.root.loading.end();
						},
					});
					page.appendChild(page.clear);

				this.update();

			}
		}

	}


	function buildPageV_FunctionS() {

		var data=ASGetSourceByName("data0").getNodeByName("functionC");
		for (var o=0;o<data.node.length;o++) {
			PAGE_V[data.node[o].nodeName+"Signup"]=ASElement({
				nodeName:"div",
				wCenter:true,
				style:{
					position:"relative",
					width:VERTICAL_PAGE_WIDTHL,
					marginTop:50,
					marginBottom:50,
				},
				o:o,
				funcID:data.node[o].nodeName,
			});
			var page=PAGE_V[data.node[o].nodeName+"Signup"];
			page.appear=PAGE[data.node[o].nodeName+"Signup"].appear;
			page.update=PAGE[data.node[o].nodeName+"Signup"].update;
			page.dealFee=PAGE[data.node[o].nodeName+"Signup"].dealFee;
			page.updateTargetData=PAGE[data.node[o].nodeName+"Signup"].updateTargetData;
			page.build=function() {

				this.wBuild=true;

				this.page=[];

				this.page[0]=ASElement({
					nodeName:"div",
					root:this,
					style:{
						width:VERTICAL_PAGE_WIDTHL,
					},
				});
				var page=this.page[0];
					page.word=BasicWord({
						size:60,
						wordC:"請先登錄",
						wordE:"Please log in first.",
						style:{
							width:"100%",
							textAlign:"center",
							marginTop:50,
						},
					});
					page.appendChild(page.word);
					page.log=BasicButton({
						size:45,
						wordC:"登   入",
						wordE:"Log in",
						wCenter:true,
						style:{
							marginTop:30,
						},
						onclick:function() {
							changeURL("login");
						},
					});
					page.appendChild(page.log);

				this.page[1]=ASElement({
					nodeName:"div",
					root:this,
					style:{
						width:VERTICAL_PAGE_WIDTHL,
					},
				});
				var page=this.page[1];

					page.succeed=function(type) {
						if (type=="user") {
							this.succeedU=true;
						}
						if (type=="func") {
							this.succeedS=true;
						}
						if (this.succeedU && this.succeedS) {
							this.loading.succeed();
							this.root.setTimeout(function() {
								USERDATA.func[SignupPagePostFuncData_ID]=SignupPagePostFuncData_DATA;
								delete PostDataR.banDefault;
								postUserDataSucceed();
								this.loading.end();
							},1000);
						}
					}

					var data=ASGetSourceByName("data0").getNodeByName("functionC").node[this.o];
					page.inputList=["itsc","name","studentID","phone","place","role","fee","payway","excoList"];

					page.titleF=BasicTitle({
						size:60,
						wordC:data.getAttribute("nameC")+" 報名表",
						wordE:"Registration Form of<br>"+data.getAttribute("nameE"),
						style:{
							marginBottom:15,
						},
					});
					page.appendChild(page.titleF);

					page.status=ASElement({
						nodeName:"div",
						style:{
							float:"right",
						},
					});
					page.appendChild(page.status);
						page.status.img=ASElement({
							nodeName:"img",
							style:{
								height:75,
							},
						});
						page.status.appendChild(page.status.img);
						page.status.word=BasicWord({
							size:45,
							wordC:"aa",
							wordE:"aa",
							color:"rgb(230,0,0)",
							style:{
								position:"relative",
								top:-10,
								left:5
							},
						});
						page.status.appendChild(page.status.word);

					page.input=[];
					page.inputF=ASElement({
						nodeName:"div",
					});
					page.appendChild(page.inputF);
					for (var i=0;i<page.inputList.length;i++) {
						var p={
							size:45,
							model:page.inputList[i],
							widthL:270,
							widthA:VERTICAL_PAGE_WIDTHL,
							style:{
								marginTop:20,
								marginBottom:2,
								marginLeft:30,
							},
						};
						if (page.inputList[i]=="itsc") {
							p.hintC="";
							p.hintE="";
							p.wReadonly=true;
							p.wCompulsory=true;
						}
						if (page.inputList[i]=="name") {
							p.hintC="例如：LI Hua";
							p.hintE="E.g. Jarvis";
							p.wCompulsory=true;
						}
						if (page.inputList[i]=="studentID") {
							p.hintC="例如：20326666";
							p.hintE="E.g. 20326666";
							p.wCompulsory=true;
						}
						if (page.inputList[i]=="phone") {
							p.hintC="例如：23586666";
							p.hintE="E.g. 23586666";
							p.wCompulsory=true;
						}
						if (page.inputList[i]=="role") {
							p.model="";
							p.type="radioPoint";
							p.wordC="角   色";
							p.wordE="Role";
							p.root=page;
							p.block=[];
							var data1=data.getNodeByName("role");
							for (var j=0;j<data1.node.length;j++) {
								if (data1.node[j].getAttribute("counterOnly")) continue;
								p.block[p.block.length]={
									wordC:data1.node[j].getAttribute("nameC"),
									wordE:data1.node[j].getAttribute("nameE"),
									value:j,
								}
							}
							p.onchoose=function() {
								this.root.root.dealFee();
							}
						}
						if (page.inputList[i]=="fee") {
							p.wordC="費   用";
							p.wordE="Fee";
							p.model="";
							p.type="text";
							p.text=[];
							var data1=data.getNodeByName("role");
							for (var j=0;j<data1.node.length;j++) {
								var str1C=data1.node[j].getAttribute("feeN");
								var str1E=data1.node[j].getAttribute("feeN");
								if (str1C=="0") {
									str1C="免   費";
									str1E="Free";
								} else {
									str1C+="HKD";
									str1E+="HKD";
								}
								var str2C=data1.node[j].getAttribute("feeM");
								var str2E=data1.node[j].getAttribute("feeM");
								if (str2C=="0") {
									str2C="免   費";
									str2E="Free";
								} else {
									str2C+="HKD";
									str2E+="HKD";
								}
								p.text[p.text.length]={
									wordC:str1C,
									wordE:str1E,
									value:j+"N",
								};
								p.text[p.text.length]={
									wordC:str2C,
									wordE:str2E,
									value:j+"M",
								};
							}
						}
						if (page.inputList[i]=="payway") {
							p.value="N";
						}
						if (page.inputList[i]=="excoList") {
							p.wordC="交   予";
							p.wordE="Pay to";
							p.firstBlock=3;
						}
						page.input[page.inputList[i]]=BasicInput(p);
						page.inputF.appendChild(page.input[page.inputList[i]]);
						page.input[page.inputList[i]].br=ASElement("br")
						page.inputF.appendChild(page.input[page.inputList[i]].br);
					}
					if (page.input["fee"].text[page.input["fee"].textC].wordE=="Free") {
						page.inputF.removeChild(page.input["payway"]);
						page.inputF.removeChild(page.input["excoList"]);
					}
					if (data.getNodeByName("role").node.length<=1) {
						page.inputF.removeChild(page.input["role"]);
					}

					page.loading=BasicLoading({
						style:{
							marginLeft:430,
							width:88,
							height:88,
						},
					});
					page.appendChild(page.loading);

					page.save=BasicButton({
						size:45,
						wordC:"提   交",
						wordE:"Submit",
						root:page,
						style:{
							marginTop:30,
							marginLeft:30,
						},
						onclick:function() {
							var wWrong=false;
							for (var i=0;i<this.root.inputList.length;i++) {
								if (this.root.input[this.root.inputList[i]].check) this.root.input[this.root.inputList[i]].check();
								if (this.root.input[this.root.inputList[i]].wWrong) {
									wWrong=true;
								}
							}
							if (wWrong) return;
							this.root.loading.restart();
							this.root.loading.setTimeout(function(){this.start();},30);
							this.root.succeedU=false;
							this.root.succeedF=false;
							var data={};
							data.user=USERDATA.user;
							data.ticket=USERDATA.ticket;
							data.action="postUserData";
							data.name=this.root.input["name"].getValue();
							data.studentID=this.root.input["studentID"].getValue();
							data.phone=this.root.input["phone"].getValue();
							SignupPagePostFuncData_PAGE=this.root;
							PostDataR=data;
							PostDataR.banDefault=true;
							sendAJAX({
								type:"POST",
								src:"cgi-bin/operateData.php",
								data:data,
								callback:"SignupPagePostFuncData_PAGE.succeed('user');",
							});
							var data={};
							data.user=USERDATA.user;
							data.ticket=USERDATA.ticket;
							data.action="postUserFuncData";
							data.id=this.root.root.funcID;
							data.role=this.root.input["role"].getValue();
							if (this.root.input["fee"].text[this.root.input["fee"].textC].wordE=="Free") {
								data.status=".";
								data.payto="free";
							} else {
								data.status=",";
								data.payto=this.root.input["excoList"].getValue();
							}
							SignupPagePostFuncData_ID=data.id;
							SignupPagePostFuncData_DATA={
								id:data.id,
								user:data.user,
								status:data.status,
								payto:data.payto,
								role:data.role,
							};
							sendAJAX({
								type:"POST",
								src:"cgi-bin/operateData.php",
								data:data,
								callback:"SignupPagePostFuncData_PAGE.succeed('func');",
							});
						},
					});
					page.appendChild(page.save);

				this.page[2]=ASElement({
					nodeName:"div",
					root:this,
					style:{
						width:VERTICAL_PAGE_WIDTHL,
					},
				});
				var page=this.page[2];

					page.succeed=function(type) {
						if (type=="user") {
							this.succeedU=true;
						}
						if (type=="func") {
							this.succeedS=true;
						}
						if (this.succeedU && this.succeedS) {
							this.loading.succeed();
						}
					}

					var data=ASGetSourceByName("data0").getNodeByName("functionC").node[this.o];
					page.inputList=["itsc","name","studentID","phone","place","role","fee","payway"];

					page.titleF=BasicTitle({
						size:60,
						widthA:VERTICAL_PAGE_WIDTH,
						wordC:data.getAttribute("nameC")+" 報名表",
						wordE:"Registration Form of<br>"+data.getAttribute("nameE"),
						style:{
							marginBottom:15,
						},
					});
					page.appendChild(page.titleF);

					page.input=[];
					page.inputF=ASElement({
						nodeName:"div",
					});
					page.appendChild(page.inputF);
					for (var i=0;i<page.inputList.length;i++) {
						var p={
							size:50,
							model:page.inputList[i],
							widthL:270,
							widthA:VERTICAL_PAGE_WIDTHL,
							style:{
								marginTop:20,
								marginBottom:2,
								marginLeft:30,
							},
						};
						if (page.inputList[i]=="itsc") {
							p.wCompulsory=true;
							p.root=this;
							p.onblur=function() {
								if (!this.wWrong) {
									SignupPageRequestTargetData_PAGE=this.root;
									requestTargetData(this.input.value,"SignupPageRequestTargetData_PAGE.updateTargetData();");
								}
							}
						}
						if (page.inputList[i]=="name") {
							p.hintC="例如：LI Hua";
							p.hintE="E.g. Jarvis";
							p.wCompulsory=true;
						}
						if (page.inputList[i]=="studentID") {
							p.hintC="例如：20326666";
							p.hintE="E.g. 20326666";
							p.wCompulsory=true;
						}
						if (page.inputList[i]=="phone") {
							p.hintC="例如：23586666";
							p.hintE="E.g. 23586666";
							p.wCompulsory=true;
						}
						if (page.inputList[i]=="role") {
							p.model="";
							p.type="radioPoint";
							p.wordC="角   色";
							p.wordE="Role";
							p.root=page;
							p.block=[];
							var data1=data.getNodeByName("role");
							for (var j=0;j<data1.node.length;j++) {
								p.block[j]={
									wordC:data1.node[j].getAttribute("nameC"),
									wordE:data1.node[j].getAttribute("nameE"),
									value:j,
								}
							}
							p.onchoose=function() {
								this.root.root.dealFee();
							}
						}
						if (page.inputList[i]=="fee") {
							p.wordC="費   用";
							p.wordE="Fee";
							p.model="";
							p.type="text";
							p.text=[];
							var data1=data.getNodeByName("role");
							for (var j=0;j<data1.node.length;j++) {
								var str1C=data1.node[j].getAttribute("feeN");
								var str1E=data1.node[j].getAttribute("feeN");
								if (str1C=="0") {
									str1C="免   費";
									str1E="Free";
								} else {
									str1C+="HKD";
									str1E+="HKD";
								}
								var str2C=data1.node[j].getAttribute("feeM");
								var str2E=data1.node[j].getAttribute("feeM");
								if (str2C=="0") {
									str2C="免   費";
									str2E="Free";
								} else {
									str2C+="HKD";
									str2E+="HKD";
								}
								p.text[p.text.length]={
									wordC:str1C,
									wordE:str1E,
									value:j+"N",
								};
								p.text[p.text.length]={
									wordC:str2C,
									wordE:str2E,
									value:j+"M",
								};
							}
						}
						if (page.inputList[i]=="payway") {
							p.value="E";
						}
						page.input[page.inputList[i]]=BasicInput(p);
						page.inputF.appendChild(page.input[page.inputList[i]]);
						page.input[page.inputList[i]].br=ASElement("br")
						page.inputF.appendChild(page.input[page.inputList[i]].br);
					}

					page.loading=BasicLoading({
						style:{
							marginLeft:300,
							width:88,
							height:88,
						},
					});
					page.appendChild(page.loading);

					page.save=BasicButton({
						size:45,
						wordC:"提   交",
						wordE:"Submit",
						root:page,
						style:{
							marginTop:30,
							marginLeft:20,
						},
						onclick:function() {
							var wWrong=false;
							for (var i=0;i<this.root.inputList.length;i++) {
								if (this.root.input[this.root.inputList[i]].check) this.root.input[this.root.inputList[i]].check();
								if (this.root.input[this.root.inputList[i]].wWrong) {
									wWrong=true;
								}
							}
							if (wWrong) return;
							this.root.loading.restart();
							this.root.loading.setTimeout(function(){this.start();},30);
							this.root.succeedU=false;
							this.root.succeedF=false;
							var data={};
							data.user=USERDATA.user;
							data.ticket=USERDATA.ticket;
							data.target=this.root.input["itsc"].getValue();
							data.action="postTargetData";
							data.name=this.root.input["name"].getValue();
							data.studentID=this.root.input["studentID"].getValue();
							data.phone=this.root.input["phone"].getValue();
							SignupPagePostTargetFuncData_PAGE=this.root;
							sendAJAX({
								type:"POST",
								src:"cgi-bin/operateData.php",
								data:data,
								callback:"SignupPagePostTargetFuncData_PAGE.succeed('user');",
							});
							var data={};
							data.user=USERDATA.user;
							data.ticket=USERDATA.ticket;
							data.target=this.root.input["itsc"].getValue();
							data.action="postTargetFuncData";
							data.id=this.root.root.funcID;
							data.role=this.root.input["role"].getValue();
							data.status=".";
							data.payto="counter";
							sendAJAX({
								type:"POST",
								src:"cgi-bin/operateData.php",
								data:data,
								callback:"SignupPagePostTargetFuncData_PAGE.succeed('func');",
							});
						},
					});
					page.appendChild(page.save);

					page.clear=BasicButton({
						size:45,
						wordC:"清   空",
						wordE:"Clear",
						color:"rgb(200,200,200)",
						colorW:"black",
						colorL:"rgb(230,230,230)",
						root:page,
						style:{
							marginTop:30,
							marginLeft:10,
						},
						onclick:function() {
							TARGETDATA="NULL";
							this.root.input["itsc"].setValue("");
							this.root.input["name"].setValue("");
							this.root.input["studentID"].setValue("");
							this.root.input["phone"].setValue("");
							this.root.input["place"].setValue("N");
							this.root.input["role"].setValue(0);
							this.root.root.dealFee();
							this.root.loading.end();
						},
					});
					page.appendChild(page.clear);

				this.update();

			}
		}

	}

	// List
	function buildPage_FunctionL() {

		var data=ASGetSourceByName("data0").getNodeByName("functionC");
		for (var o=0;o<data.node.length;o++) {
			PAGE[data.node[o].nodeName+"List"]=ASElement({
				nodeName:"div",
				wCenter:true,
				style:{
					position:"relative",
					width:DEFAULT_PAGE_WIDTHM,
					marginTop:15,
					marginBottom:30,
				},
				o:o,
				funcID:data.node[o].nodeName,
			});
			PAGE[data.node[o].nodeName+"List"].updateList=function() {
				var data=ASGetSourceByName("data0").getNodeByName("functionC").getNodeByName(this.funcID);
				var dataE=ASGetSourceByName("data0").getNodeByName("exco14");
				this.list.clearRow();
				for (var i=0;i<FUNCDATA.length;i++) {
					var time=FUNCDATA[i].time;
					var p={
						time:{
							listType:"basicWord",
							wordE:time.substr(2,2)+"/"+time.substr(4,2)+"  "+time.substr(6,2)+":"+time.substr(8,2)+":"+time.substr(10,2),
						},
						name:{
							listType:"basicWord",
							wordE:FUNCDATA[i].name,
						},
						place:{
							listType:"basicWord",
							wordC:"是",
							wordE:"Yes",
						},
						role:{
							listType:"basicWord",
							wordC:data.getNodeByName("role").node[FUNCDATA[i].role].getAttribute("nameC"),
							wordE:data.getNodeByName("role").node[FUNCDATA[i].role].getAttribute("nameE"),
						},
						extra:{
							listType:"basicWord",
							wordC:"&nbsp;",
							wordE:"&nbsp;",
						},
						payto:{
							listType:"basicWord",
							wordC:"&nbsp;",
							wordE:"&nbsp;",
						},
						wPay:{
							listType:"basicWord",
							wordC:"是",
							wordE:"Yes",
						}
					};
					if (FUNCDATA[i].place=="N") {
						p.place.wordC="否";
						p.place.wordE="No";
					}
					if (FUNCDATA[i].status==",") {
						p.wPay.wordC="否";
						p.wPay.wordE="No";
					}
					for (var j=0;j<dataE.node.length;j++) {
						if (FUNCDATA[i].payto==dataE.node[j].getAttribute("itsc")) {
							p.payto.wordC=dataE.node[j].getAttribute("nickname");
							p.payto.wordE=dataE.node[j].getAttribute("nameE");
							break;
						}
					}
					if (FUNCDATA[i].payto==USERDATA.user) {
						p.payto.wordC="我";
						p.payto.wordE="Me";
						p.wPay={
							listType:"basicInput",
							type:"radioPoint",
							block:[{
								wordC:"是",
								wordE:"Yes",
								value:"Yes",
							},{
								wordC:"否",
								wordE:"No",
								value:"No",
							}],
							space:30,
							widthA:80,
							style:{
								left:15,
							},
							funcID:FUNCDATA[i].id,
							funcTarget:FUNCDATA[i].user,
							onchoose:function() {
								var status=",";
								if (this.blockC==0) status=".";
								sendAJAX({
									type:"POST",
									src:"cgi-bin/operateData.php",
									data:{
										user:USERDATA.user,
										ticket:USERDATA.ticket,
										action:"postTargetFuncData",
										id:this.funcID,
										target:this.funcTarget,
										status:status,
									},
								});
							},
						};
						if (FUNCDATA[i].status==",") p.wPay.firstBlock=1;
					}
					this.list.addARow(p);
				}
				if (this.root) this.root.pageResize();
			}
			PAGE[data.node[o].nodeName+"List"].refresh=function() {
				var data={};
				data.user=USERDATA.user;
				data.ticket=USERDATA.ticket;
				data.action="getFuncData";
				data.funcID=this.funcID;
				FuncListGetFuncData_PAGE=this;
				sendAJAX({
					type:"POST",
					src:"cgi-bin/operateData.php",
					data:data,
					callback:"FuncListGetFuncData_PAGE.updateList();",
				});
			}
			PAGE[data.node[o].nodeName+"List"].appear=function() {
				this.clearChild();
				this.appendChild(this.page[0]);
				this.code.setValue("");
			}
			PAGE[data.node[o].nodeName+"List"].build=function() {

				this.wBuild=true;

				var data=ASGetSourceByName("data0").getNodeByName("functionC").getNodeByName(this.funcID);
				if (data.getNodeByName("role").node.length>1) this.wRole=true;

				this.page=[];
				this.page[0]=ASElement({
					nodeName:"div",
					style:{
						width:"100%",
					},
				});

				this.code=BasicInput({
					type:"input",
					wordC:"驗證碼",
					wordE:"Check Code",
					maxLength:8,
					hintC:"輸入後才可查看",
					hintE:"Enter to view",
					style:{
						marginTop:15,
						marginLeft:85,
					},
				});
				this.page[0].appendChild(this.code);
				this.page[0].appendChild(ASElement("br"));
				this.check=BasicButton({
					wordC:"確   認",
					wordE:"Confirm",
					size:24,
					root:this,
					style:{
						marginTop:15,
						marginLeft:80,
					},
					onclick:function() {
						if (this.root.code.getValue()=="cfas6666") {
							this.root.clearChild();
							this.root.appendChild(this.root.page[1]);
							this.root.refresh();
						}
					},
				});
				this.page[0].appendChild(this.check);

				this.page[1]=ASElement({
					nodeName:"div",
					style:{
						width:"100%",
					},
				});
				this.refreshB=BasicButton({
					size:24,
					wordC:"刷   新",
					wordE:"Refresh",
					style:{
						position:"absolute",
						top:0,
						right:0,
					},
					root:this,
					onclick:function() {
						this.root.refresh();
					}
				});
				this.page[1].appendChild(this.refreshB);

				var col=[{
					name:"time",
					wordC:"時   間",
					wordE:"Time",
					width:180,
				},{
					name:"name",
					wordC:"姓   名",
					wordE:"Name",
					width:195,
				},{
					name:"place",
					wordC:"會   員",
					wordE:"Member",
					width:80,
				}];
				if (this.wRole) {
					col[col.length]={
						name:"role",
						wordC:"角   色",
						wordE:"Role",
						width:80,
					};
				}
				col[col.length]={
					name:"payto",
					wordC:"收款人",
					wordE:"Payee",
					width:100,
				};
				col[col.length]={
					name:"wPay",
					wordC:"支   付",
					wordE:"Payed",
					width:80,
				};
				col[col.length]={
					name:"extra",
					wordC:"備   註",
					wordE:"Remarks",
					width:150,
				};
				this.list=BasicList({
					col:col,
					root:this,
					keyCol:"time",
					fx:-1,
					wCenter:true,
					size:22,
					style:{
						marginTop:50,
					},
				});
				this.page[1].appendChild(this.list);

			}
		}

	}


	function buildPageV_FunctionL() {

		var data=ASGetSourceByName("data0").getNodeByName("functionC");
		for (var o=0;o<data.node.length;o++) {
			PAGE[data.node[o].nodeName+"List"]=ASElement({
				nodeName:"div",
				wCenter:true,
				style:{
					position:"relative",
					width:DEFAULT_PAGE_WIDTHM,
					marginTop:30,
					marginBottom:30,
				},
				o:o,
				funcID:data.node[o].nodeName,
			});
			PAGE[data.node[o].nodeName+"List"].updateList=function() {
				var data=ASGetSourceByName("data0").getNodeByName("functionC").getNodeByName(this.funcID);
				var dataE=ASGetSourceByName("data0").getNodeByName("exco14");
				this.list.clearRow();
				for (var i=0;i<FUNCDATA.length;i++) {
					var time=FUNCDATA[i].time;
					var p={
						time:{
							listType:"basicWord",
							wordE:time.substr(2,2)+"/"+time.substr(4,2)+"  "+time.substr(6,2)+":"+time.substr(8,2)+":"+time.substr(10,2),
						},
						name:{
							listType:"basicWord",
							wordE:FUNCDATA[i].name,
						},
						place:{
							listType:"basicWord",
							wordC:"是",
							wordE:"Yes",
						},
						role:{
							listType:"basicWord",
							wordC:data.getNodeByName("role").node[FUNCDATA[i].role].getAttribute("nameC"),
							wordE:data.getNodeByName("role").node[FUNCDATA[i].role].getAttribute("nameE"),
						},
						extra:{
							listType:"basicWord",
							wordC:"&nbsp;",
							wordE:"&nbsp;",
						},
						payto:{
							listType:"basicWord",
							wordC:"&nbsp;",
							wordE:"&nbsp;",
						},
						wPay:{
							listType:"basicWord",
							wordC:"是",
							wordE:"Yes",
						}
					};
					if (FUNCDATA[i].place=="N") {
						p.place.wordC="否";
						p.place.wordE="No";
					}
					if (FUNCDATA[i].status==",") {
						p.wPay.wordC="否";
						p.wPay.wordE="No";
					}
					for (var j=0;j<dataE.node.length;j++) {
						if (FUNCDATA[i].payto==dataE.node[j].getAttribute("itsc")) {
							p.payto.wordC=dataE.node[j].getAttribute("nickname");
							p.payto.wordE=dataE.node[j].getAttribute("nameE");
							break;
						}
					}
					if (FUNCDATA[i].payto==USERDATA.user) {
						p.payto.wordC="我";
						p.payto.wordE="Me";
						p.wPay={
							listType:"basicInput",
							type:"radioPoint",
							block:[{
								wordC:"是",
								wordE:"Yes",
								value:"Yes",
							},{
								wordC:"否",
								wordE:"No",
								value:"No",
							}],
							space:30,
							widthA:80,
							style:{
								left:15,
							},
							funcID:FUNCDATA[i].id,
							funcTarget:FUNCDATA[i].user,
							onchoose:function() {
								var status=",";
								if (this.blockC==0) status=".";
								sendAJAX({
									type:"POST",
									src:"cgi-bin/operateData.php",
									data:{
										user:USERDATA.user,
										ticket:USERDATA.ticket,
										action:"postTargetFuncData",
										id:this.funcID,
										target:this.funcTarget,
										status:status,
									},
								});
							},
						};
						if (FUNCDATA[i].status==",") p.wPay.firstBlock=1;
					}
					this.list.addARow(p);
				}
				if (this.root) this.root.pageResize();
			}
			PAGE[data.node[o].nodeName+"List"].refresh=function() {
				var data={};
				data.user=USERDATA.user;
				data.ticket=USERDATA.ticket;
				data.action="getFuncData";
				data.funcID=this.funcID;
				FuncListGetFuncData_PAGE=this;
				sendAJAX({
					type:"POST",
					src:"cgi-bin/operateData.php",
					data:data,
					callback:"FuncListGetFuncData_PAGE.updateList();",
				});
			}
			PAGE[data.node[o].nodeName+"List"].appear=function() {
				this.clearChild();
				this.appendChild(this.page[0]);
				this.code.setValue("");
			}
			PAGE[data.node[o].nodeName+"List"].build=function() {

				this.wBuild=true;

				var data=ASGetSourceByName("data0").getNodeByName("functionC").getNodeByName(this.funcID);
				if (data.getNodeByName("role").node.length>1) this.wRole=true;

				this.page=[];
				this.page[0]=ASElement({
					nodeName:"div",
					style:{
						width:"100%",
					},
				});

				this.code=BasicInput({
					type:"input",
					wordC:"驗證碼",
					wordE:"Check Code",
					maxLength:8,
					hintC:"輸入後才可查看",
					hintE:"Enter to view",
					style:{
						marginTop:15,
						marginLeft:85,
					},
				});
				this.page[0].appendChild(this.code);
				this.page[0].appendChild(ASElement("br"));
				this.check=BasicButton({
					wordC:"確   認",
					wordE:"Confirm",
					size:24,
					root:this,
					style:{
						marginTop:15,
						marginLeft:80,
					},
					onclick:function() {
						if (this.root.code.getValue()=="cfas6666") {
							this.root.clearChild();
							this.root.appendChild(this.root.page[1]);
							this.root.refresh();
						}
					},
				});
				this.page[0].appendChild(this.check);

				this.page[1]=ASElement({
					nodeName:"div",
					style:{
						width:"100%",
					},
				});

				var col=[{
					name:"time",
					wordC:"時   間",
					wordE:"Time",
					width:180,
				},{
					name:"name",
					wordC:"姓   名",
					wordE:"Name",
					width:195,
				},{
					name:"place",
					wordC:"會   員",
					wordE:"Member",
					width:80,
				}];
				if (this.wRole) {
					col[col.length]={
						name:"role",
						wordC:"角   色",
						wordE:"Role",
						width:80,
					};
				}
				col[col.length]={
					name:"payto",
					wordC:"收款人",
					wordE:"Payee",
					width:100,
				};
				col[col.length]={
					name:"wPay",
					wordC:"支   付",
					wordE:"Payed",
					width:80,
				};
				col[col.length]={
					name:"extra",
					wordC:"備   註",
					wordE:"Remarks",
					width:150,
				};
				this.list=BasicList({
					col:col,
					root:this,
					keyCol:"time",
					fx:-1,
					wCenter:true,
					size:22,
				});
				this.page[1].appendChild(this.list);

			}
		}

	}

	// 老的活動
	function buildPage_FunctionO() {

		var data=ASGetSourceByName("data0").getNodeByName("functionO");

		for (var o=0;o<data.node.length;o++) {

			PAGE[data.node[o].nodeName]=ASElement({
				nodeName:"div",
				wCenter:true,
				style:{
					marginBottom:30,
					width:DEFAULT_PAGE_WIDTH,
				},
				num:o,
			});

			PAGE[data.node[o].nodeName].build=function() {

				this.wBuild=true;

				var o=this.num;
				var data=ASGetSourceByName("data0").getNodeByName("functionO");

				this.block=[];
				for (var i=0;i<data.node[o].node.length;i++) {
					var pageDetailURL = data.node[o].nodeName + "Detail" + i;
					this.block[i]=ASElement({
						pageDetailURL: pageDetailURL,
						nodeName:"div",
						style:{
							width:290,
							height:312,
						},
						onmouseover:function() {
							this.style.cursor = 'pointer';
							this.style.backgroundColor = '#efefef';
						},
						onmouseout:function() {
							this.style.backgroundColor = '#fff';
						},
						onclick: function(){
							changeURL(this.pageDetailURL);
						},
					});
					var block=this.block[i];
					this.appendChild(block);

					// 活動照片
						block.pic=ASElement({
							nodeName:"img",
							src:data.node[o].getAttribute("root")+data.node[o].node[i].getAttribute("img"),
							style:{
								width:256,
								height:171,
								margin:17,
								objectFit:'contain'
							},
						});
						block.appendChild(block.pic);
						var nameE=data.node[o].node[i].getAttribute("nameE");
						if (nameE.length<=22) nameE+="<br>&nbsp;";
						block.name=BasicWord({
							size:25,
							sizeE:22,
							color:"rgb(200,0,0)",
							wordC:data.node[o].node[i].getAttribute("nameC")+"<br>&nbsp;",
							wordE:nameE,
							style:{
								marginTop:-5,
								marginLeft:20,
								width:250,
							}
						});
						block.appendChild(block.name);
						// 活動時間
						var timeStr = data.node[o].node[i].getAttribute("time");
						if (timeStr.length > 10) timeStr = timeStr.substring(0, 10);
						block.date=BasicWord({
							size:20,
							color:"rgb(200,0,0)",
							wordC:timeStr,
							style:{
								marginLeft:20,
								marginTop:10,
								width:115,
							},
						});
						block.appendChild(block.date);

						if (data.node[o].node[i].getAttribute("linkF")) {
							block.facebook=ASElement({
								nodeName:"a",
								href:data.node[o].node[i].getAttribute("linkF"),
								target:"_blank",
								style:{
									marginLeft:20,
									color:"rgb(150,150,150)",
									fontFamily:DEFAULT_FONT,
									fontSize:20,
								},
								innerHTML:"Facebook",
							})
							block.appendChild(block.facebook);
						}
				}
			}
		}

	}

	// 老活動詳情 
	function buildPage_FunctionODetail() {
		
		var data=ASGetSourceByName("data0").getNodeByName("functionO");

		for (var o=0;o<data.node.length;o++) {

			var exco = data.node[o]

			for (var i=0; i < exco.node.length; i++) {
				
				var func = exco.node[i]
				var pageName = exco.nodeName + "Detail" + i;

				PAGE[pageName]=ASElement({
					nodeName:"div",
					wCenter:true,
					id : i,
					style:{
						// marginBottom:30,
						width:DEFAULT_PAGE_WIDTH,
						// height:'auto',
					},
					num:o,
				});
	
				PAGE[pageName].build=function() {
	
					this.wBuild=true;
	
					var o = this.num;
					var i = this.id;
					var data=ASGetSourceByName("data0").getNodeByName("functionO");

					var event = data.node[o].node[i];
					
					// 頁面 div
					this.block=ASElement({
						nodeName:"div",
						style:{
							width:'100%',
							padding:25,
							boxSizing:'border-box',
						},
					});
					var block=this.block;
					this.appendChild(block);

					// 圖片
					block.pic=ASElement({
						nodeName:"img",
						src:data.node[o].getAttribute("root")+event.getAttribute("img"),
						style:{
							width:'100%',
							height:'auto',
						},
					});
					block.appendChild(block.pic);
					
					// The time of the event
					block.date=BasicWord({
						size:22,
						color:"rgb(150,0,0)",
						wordC:event.getAttribute("time"),
						style:{
							// marginLeft:20,
							marginTop:10,
							width:115,
						},
					});
					block.appendChild(block.date);

					// Optional facebook link
					if (event.getAttribute("linkF")) {
						block.facebook=ASElement({
							nodeName:"a",
							href:event.getAttribute("linkF"),
							target:"_blank",
							style:{
								marginLeft:20,
								color:"rgb(150,150,150)",
								fontFamily:DEFAULT_FONT,
								fontSize:20,
							},
							innerHTML:"Facebook",
						})
						block.appendChild(block.facebook);
					}

					// Main Cotent
					var briefC, briefE;
					if (event.getAttribute('briefC')) {
						briefC = event.getAttribute('briefC')
					}

					if (event.getAttribute('briefE')) {
						briefE = event.getAttribute('briefE')
					}

					if (briefC || briefE) {
						block.content=BasicWord({
							size: 20,
							// sizeE: 22,
							color: "rgb(0,0,0)",
							wordC: briefC,
							wordE: briefE,
							style: {
								marginTop: 30,
								width: '100%',
								// marginLeft:20,
								// width:250,
							}
						});
						block.appendChild(block.content);
					}
				}
			}			

		}
	}

	// buildPageV
	// 所有這裡的 buildPageV 都代表豎版的時候（手機）頁面的顯示邏輯

	function buildPageV_FunctionO() {

		var data=ASGetSourceByName("data0").getNodeByName("functionO");

		for (var o=0;o<data.node.length;o++) {

			PAGE_V[data.node[o].nodeName]=ASElement({
				nodeName:"div",
				wCenter:true,
				style:{
					marginBottom:60,
					width:VERTICAL_PAGE_WIDTHL,
				},
				num:o,
			});
			PAGE_V[data.node[o].nodeName].build=function() {

				this.wBuild=true;

				var o=this.num;
				var data=ASGetSourceByName("data0").getNodeByName("functionO");

				this.block=[];
				for (var i=0;i<data.node[o].node.length;i++) {
					this.block[i]=ASElement({
						nodeName:"div",
						style:{
							width:800,
						},
					});
					var block=this.block[i];
					this.appendChild(block);
						block.pic=ASElement({
							nodeName:"img",
							src:data.node[o].getAttribute("root")+data.node[o].node[i].getAttribute("img"),
							style:{
								width:690,
								height:460,
								margin:"30px 55px",
							},
						});
						block.appendChild(block.pic);
						var nameE=data.node[o].node[i].getAttribute("nameE");
						block.name=BasicWord({
							size:60,
							sizeE:55,
							color:"rgb(200,0,0)",
							wordC:data.node[o].node[i].getAttribute("nameC"),
							wordE:nameE,
							style:{
								marginTop:-5,
								marginLeft:50,
							}
						});
						block.appendChild(block.name);
						block.appendChild(ASElement("br"));
						block.date=BasicWord({
							size:50,
							color:"rgb(200,0,0)",
							wordC:data.node[o].node[i].getAttribute("time"),
							width:"max",
							style:{
								float:"right",
								marginRight:50,
								marginTop:20,
							},
						});
						block.appendChild(block.date);
						block.facebook=ASElement({
							nodeName:"a",
							href:data.node[o].node[i].getAttribute("linkF"),
							target:"_blank",
							style:{
								position:"relative",
								marginLeft:50,
								top:17,
								color:"rgb(150,150,150)",
								fontFamily:DEFAULT_FONT,
								fontSize:50,
							},
							innerHTML:"Facebook",
						})
						block.appendChild(block.facebook);
					this.appendChild(ASElement({
						nodeName:"hr",
						style:{
							marginTop:30,
							marginBottom:10,
						},
					}));
				}
			}
		}

	}


	// Helper for parsing query
	function parse_query_string(query) {
		var vars = query.split("&");
		var query_string = {};
		for (var i = 0; i < vars.length; i++) {
		  var pair = vars[i].split("=");
		  var key = decodeURIComponent(pair[0]);
		  var value = decodeURIComponent(pair[1]);
		  // If first entry with this name
		  if (typeof query_string[key] === "undefined") {
			query_string[key] = decodeURIComponent(value);
			// If second entry with this name
		  } else if (typeof query_string[key] === "string") {
			var arr = [query_string[key], decodeURIComponent(value)];
			query_string[key] = arr;
			// If third or later entry with this name
		  } else {
			query_string[key].push(decodeURIComponent(value));
		  }
		}
		return query_string;
	  }


	function buildPage_Image() {

		PAGE["image"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:DEFAULT_PAGE_WIDTHL,
			},
		});
		PAGE["image"].build=function() {

			const urlString = window.location.href
			const paramIndex = urlString.indexOf("?");
			const queryString = urlString.substring(paramIndex + 1, urlString.length)
			
			const params = parse_query_string(queryString);

			var url = params.imageURL;
			var nameC = params.nameC;
			var nameE = params.nameE;
			
			if (!url) {
				// No Param
				// changeURL("main");
				goBack();
			}

			this.wBuild=false;
			this.clearChild();
			
			this.pic=ASElement({
				nodeName:"img",
				src:url,
				style:{
					display:"block",
					width:'100%',
					height:'auto',
					marginLeft:"auto",
					marginRight:"auto",
					marginTop:50,
					marginBottom:60,
				},
			});
			this.appendChild(this.pic);

			// this.word=BasicWord({
			// 	size:30,
			// 	wordC:"掃碼關注民藝公眾號吧~",
			// 	wordE:"Scan the QR code to get our news on Wechat~",
			// 	style:{
			// 		width:"100%",
			// 		marginTop:25,
			// 		marginBottom:70,
			// 		textAlign:"center",
			// 	},
			// }),
			// this.appendChild(this.word);

		}
	}

	// 庄员介绍页面，每一桩都有自己的一个function，应该可以简化，但是我当时是复制黏贴的
	// 添加的 funcion 要在后面 buildPage() 添加
	function buildPage_Exco16() {

        PAGE["exco16"]=ASElement({
            nodeName:"div",
            style:{
                display:"block",
                width:DEFAULT_PAGE_WIDTH,
                height:650,
            },
        });
        PAGE["exco16"].build=function() {

            this.wBuild=true;

            var data=ASGetSourceByName("data0").getNodeByName("exco16");
            var block=[];
            for (var i=0;i<data.node.length;i++) {
                block[i]={
                    wordC:data.node[i].getAttribute("nameC")+"<span style='font-size:15px;'>&nbsp;&nbsp;"+data.node[i].getAttribute("postC")+"</span>",
                    wordE:data.node[i].getAttribute("nameE")+"<br><span style='font-size:13px;'>"+data.node[i].getAttribute("postE")+"</span",
                };
            }
            this.jump=AnchorList({
                size:22,
                sizeE:20,
                widthA:210,
                block:block,
                space:-5.5,
                style:{
                    position:"relative",
                    left:10,
                    top:5,
                },
                onchoose:function(w) {
                    this.root.changeBlock(w);
                },
                root:this,
            });
            this.appendChild(this.jump);

            this.blockF=ASElement({
                nodeName:"div",
                style:{
                    position:"absolute",
                    left:200,
                    width:620,
                },
            });
            this.appendChild(this.blockF);

            this.block=[];
            for (var i=0;i<data.node.length;i++) {
				// Image name
				// console.log(data.getAttribute("root")+data.node[i].nodeName+".jpg")

                this.block[i]=ASElement({
                    nodeName:"div",
                    style:{
                        position:"absolute",
                        width:700,
                    },
                });
                var block=this.block[i];
                block.picF=ASElement({
                    nodeName:"div",
                    style:{
                        marginTop:30,
                        marginLeft:50,
                        width:350,
                        height:450,
                        overflow:"hidden",
                        boxShadow:"0 0 10px rgba(0,0,0,0.8)",
                    },
                });
                block.appendChild(block.picF);
                block.pic=ASElement({
                    nodeName:"img",
                    src:data.getAttribute("root")+data.node[i].nodeName+".jpg",
                    style:{
                        display:"block",
                        marginLeft:-50,
                        height:"100%",
                    },
				});
                block.picF.appendChild(block.pic);
                block.brief=ASElement({
                    nodeName:"div",
                    style:{
                        position:"absolute",
                        top:30,
                        left:430,
                        width:260,
                    },
                });
                block.appendChild(block.brief);
                block.name=BasicWord({
                    size:50,
                    wordC:data.node[i].getAttribute("nameC"),
                    wordE:data.node[i].getAttribute("nameE"),
                    style:{
                        marginTop:20,
                        marginBottom:15,
                        width:"100%",
                        textAlign:"center",
                    },
                });
                block.brief.appendChild(block.name);
                block.brief.appendChild(ASElement({nodeName:"hr"}));
                block.post=BasicWord({
                    size:40,
                    sizeE:35,
                    wordC:data.node[i].getAttribute("postC"),
                    wordE:data.node[i].getAttribute("postE"),
                    color:"rgb(200,0,0)",
                    style:{
                        marginTop:15,
                        marginBottom:15,
                        width:"100%",
                        textAlign:"center",
                    },
                });
                block.brief.appendChild(block.post);
                block.brief.appendChild(ASElement({nodeName:"hr"}));
                block.intro=BasicWord({
                    size:20,
                    wordC:data.node[i].getAttribute("word"),
                    style:{
                        marginTop:15,
                        width:240,
                        marginLeft:10,
                        //textAlign:"center",
                    },
                });
                block.brief.appendChild(block.intro);
                block.contact=ASElement({
                    nodeName:"div",
                    style:{
                        position:"absolute",
                        top:480,
                        left:50,
                        width:350,
                    },
                });
                block.appendChild(block.contact);
                block.contactW=BasicWord({
                    size:23,
                    sizeE:20,
                    color:"rgb(200,0,0)",
                    wordC:"聯繫方式",
                    wordE:"Contact Information",
                    style:{
                        display:"block",
                        marginTop:12,
                        marginBottom:6,
                    },
                });
                block.contact.appendChild(block.contactW);
                block.contact.appendChild(ASElement({nodeName:"hr"}));
                /*block.emailW=BasicWord({
                    size:21,
                    sizeE:18,
                    color:"rgb(200,0,0)",
                    wordC:"郵  件：",
                    wordE:"Email:",
                    style:{
                        marginTop:6,
                        marginRight:8,
                    },
                });
                block.contact.appendChild(block.emailW);
                block.email=ASElement({
                    nodeName:"p",
                    style:{
                        display:"inline-block",
                        fontFamily:DEFAULT_FONT,
                        fontSize:18,
                        color:"rgb(100,100,100)",
                        textDecoration:"underline",
                        cursor:"pointer",
                    },
                    innerHTML:data.node[i].getAttribute("email"),
                });
                block.contact.appendChild(block.email);*/
                block.contact.appendChild(ASElement("br"));
                block.phoneW=BasicWord({
                    size:21,
                    sizeE:18,
                    color:"rgb(200,0,0)",
                    wordC:"電  話：",
                    wordE:"Phone:",
                    style:{
                        marginTop:6,
                        marginRight:8,
                    },
                });
                block.contact.appendChild(block.phoneW);
                block.phone=ASElement({
                    nodeName:"p",
                    style:{
                        display:"inline-block",
                        fontFamily:DEFAULT_FONT,
                        fontSize:18,
                    },
                    innerHTML:data.node[i].getAttribute("phone"),
                });
                block.contact.appendChild(block.phone);
            }

            this.blockF.appendChild(this.block[0]);
            this.blockC=0;

            this.changeBlock=function(w) {
                if (w==this.blockC) return;
                this.block[this.blockC].setTarget({opacity:0});
                this.block[this.blockC].setTimeout(function() {this.parentNode.removeChild(this);},200);
                this.blockC=w;
                this.blockF.appendChild(this.block[this.blockC]);
                this.block[this.blockC].set({style:{opacity:0}});
                this.block[this.blockC].setTarget({opacity:1});
                this.jump.changeBlock(w);
            }
        }
  }

  function buildPage_Exco15() {

      PAGE["exco15"]=ASElement({
          nodeName:"div",
          style:{
              display:"block",
              width:DEFAULT_PAGE_WIDTH,
              height:650,
          },
      });
      PAGE["exco15"].build=function() {

          this.wBuild=true;

          var data=ASGetSourceByName("data0").getNodeByName("exco15");
          var block=[];
          for (var i=0;i<data.node.length;i++) {
              block[i]={
                  wordC:data.node[i].getAttribute("nameC")+"<span style='font-size:15px;'>&nbsp;&nbsp;"+data.node[i].getAttribute("postC")+"</span>",
                  wordE:data.node[i].getAttribute("nameE")+"<br><span style='font-size:13px;'>"+data.node[i].getAttribute("postE")+"</span",
              };
          }
          this.jump=AnchorList({
              size:22,
              sizeE:20,
              widthA:210,
              block:block,
              space:-5.5,
              style:{
                  position:"relative",
                  left:10,
                  top:5,
              },
              onchoose:function(w) {
                  this.root.changeBlock(w);
              },
              root:this,
          });
          this.appendChild(this.jump);

          this.blockF=ASElement({
              nodeName:"div",
              style:{
                  position:"absolute",
                  left:200,
                  width:620,
              },
          });
          this.appendChild(this.blockF);

          this.block=[];
          for (var i=0;i<data.node.length;i++) {

              this.block[i]=ASElement({
                  nodeName:"div",
                  style:{
                      position:"absolute",
                      width:700,
                  },
              });
              var block=this.block[i];
              block.picF=ASElement({
                  nodeName:"div",
                  style:{
                      marginTop:30,
                      marginLeft:50,
                      width:350,
                      height:450,
                      overflow:"hidden",
                      boxShadow:"0 0 10px rgba(0,0,0,0.8)",
                  },
              });
              block.appendChild(block.picF);
              block.pic=ASElement({
                  nodeName:"img",
                  src:data.getAttribute("root")+data.node[i].nodeName+".jpg",
                  style:{
                      display:"block",
                      marginLeft:-50,
                      height:"100%",
                  },
              });
              block.picF.appendChild(block.pic);
              block.brief=ASElement({
                  nodeName:"div",
                  style:{
                      position:"absolute",
                      top:30,
                      left:430,
                      width:260,
                  },
              });
              block.appendChild(block.brief);
              block.name=BasicWord({
                  size:50,
                  wordC:data.node[i].getAttribute("nameC"),
                  wordE:data.node[i].getAttribute("nameE"),
                  style:{
                      marginTop:20,
                      marginBottom:15,
                      width:"100%",
                      textAlign:"center",
                  },
              });
              block.brief.appendChild(block.name);
              block.brief.appendChild(ASElement({nodeName:"hr"}));
              block.post=BasicWord({
                  size:40,
                  sizeE:35,
                  wordC:data.node[i].getAttribute("postC"),
                  wordE:data.node[i].getAttribute("postE"),
                  color:"rgb(200,0,0)",
                  style:{
                      marginTop:15,
                      marginBottom:15,
                      width:"100%",
                      textAlign:"center",
                  },
              });
              block.brief.appendChild(block.post);
              block.brief.appendChild(ASElement({nodeName:"hr"}));
              block.intro=BasicWord({
                  size:20,
                  wordC:data.node[i].getAttribute("word"),
                  style:{
                      marginTop:15,
                      width:240,
                      marginLeft:10,
                      //textAlign:"center",
                  },
              });
              block.brief.appendChild(block.intro);
              block.contact=ASElement({
                  nodeName:"div",
                  style:{
                      position:"absolute",
                      top:480,
                      left:50,
                      width:350,
                  },
              });
              block.appendChild(block.contact);
              block.contactW=BasicWord({
                  size:23,
                  sizeE:20,
                  color:"rgb(200,0,0)",
                  wordC:"聯繫方式",
                  wordE:"Contact Information",
                  style:{
                      display:"block",
                      marginTop:12,
                      marginBottom:6,
                  },
              });
              block.contact.appendChild(block.contactW);
              block.contact.appendChild(ASElement({nodeName:"hr"}));
              /*block.emailW=BasicWord({
                  size:21,
                  sizeE:18,
                  color:"rgb(200,0,0)",
                  wordC:"郵  件：",
                  wordE:"Email:",
                  style:{
                      marginTop:6,
                      marginRight:8,
                  },
              });
              block.contact.appendChild(block.emailW);
              block.email=ASElement({
                  nodeName:"p",
                  style:{
                      display:"inline-block",
                      fontFamily:DEFAULT_FONT,
                      fontSize:18,
                      color:"rgb(100,100,100)",
                      textDecoration:"underline",
                      cursor:"pointer",
                  },
                  innerHTML:data.node[i].getAttribute("email"),
              });
              block.contact.appendChild(block.email);*/
              block.contact.appendChild(ASElement("br"));
              block.phoneW=BasicWord({
                  size:21,
                  sizeE:18,
                  color:"rgb(200,0,0)",
                  wordC:"電  話：",
                  wordE:"Phone:",
                  style:{
                      marginTop:6,
                      marginRight:8,
                  },
              });
              block.contact.appendChild(block.phoneW);
              block.phone=ASElement({
                  nodeName:"p",
                  style:{
                      display:"inline-block",
                      fontFamily:DEFAULT_FONT,
                      fontSize:18,
                  },
                  innerHTML:data.node[i].getAttribute("phone"),
              });
              block.contact.appendChild(block.phone);
          }

          this.blockF.appendChild(this.block[0]);
          this.blockC=0;

          this.changeBlock=function(w) {
              if (w==this.blockC) return;
              this.block[this.blockC].setTarget({opacity:0});
              this.block[this.blockC].setTimeout(function() {this.parentNode.removeChild(this);},200);
              this.blockC=w;
              this.blockF.appendChild(this.block[this.blockC]);
              this.block[this.blockC].set({style:{opacity:0}});
              this.block[this.blockC].setTarget({opacity:1});
              this.jump.changeBlock(w);
          }

      }

  }

	function buildPage_Exco14() {

		PAGE["exco14"]=ASElement({
			nodeName:"div",
			style:{
				display:"block",
				width:DEFAULT_PAGE_WIDTH,
				height:650,
			},
		});
		PAGE["exco14"].build=function() {

			this.wBuild=true;

			var data=ASGetSourceByName("data0").getNodeByName("exco14");
			var block=[];
			for (var i=0;i<data.node.length;i++) {
				block[i]={
					wordC:data.node[i].getAttribute("nameC")+"<span style='font-size:15px;'>&nbsp;&nbsp;"+data.node[i].getAttribute("postC")+"</span>",
					wordE:data.node[i].getAttribute("nameE")+"<br><span style='font-size:13px;'>"+data.node[i].getAttribute("postE")+"</span",
				};
			}
			this.jump=AnchorList({
				size:22,
				sizeE:20,
				widthA:210,
				block:block,
				space:-5.5,
				style:{
					position:"relative",
					left:10,
					top:5,
				},
				onchoose:function(w) {
					this.root.changeBlock(w);
				},
				root:this,
			});
			this.appendChild(this.jump);

			this.blockF=ASElement({
				nodeName:"div",
				style:{
					position:"absolute",
					left:200,
					width:620,
				},
			});
			this.appendChild(this.blockF);

			this.block=[];
			for (var i=0;i<data.node.length;i++) {

				this.block[i]=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						width:700,
					},
				});
				var block=this.block[i];
					block.picF=ASElement({
						nodeName:"div",
						style:{
							marginTop:30,
							marginLeft:50,
							width:350,
							height:450,
							overflow:"hidden",
							boxShadow:"0 0 10px rgba(0,0,0,0.8)",
						},
					});
					block.appendChild(block.picF);
						block.pic=ASElement({
							nodeName:"img",
							src:data.getAttribute("root")+data.node[i].nodeName+".jpg",
							style:{
								display:"block",
								marginLeft:-50,
								height:"100%",
							},
						});
						block.picF.appendChild(block.pic);
					block.brief=ASElement({
						nodeName:"div",
						style:{
							position:"absolute",
							top:30,
							left:430,
							width:260,
						},
					});
					block.appendChild(block.brief);
						block.name=BasicWord({
							size:50,
							wordC:data.node[i].getAttribute("nameC"),
							wordE:data.node[i].getAttribute("nameE"),
							style:{
								marginTop:20,
								marginBottom:15,
								width:"100%",
								textAlign:"center",
							},
						});
						block.brief.appendChild(block.name);
						block.brief.appendChild(ASElement({nodeName:"hr"}));
						block.post=BasicWord({
							size:40,
							sizeE:35,
							wordC:data.node[i].getAttribute("postC"),
							wordE:data.node[i].getAttribute("postE"),
							color:"rgb(200,0,0)",
							style:{
								marginTop:15,
								marginBottom:15,
								width:"100%",
								textAlign:"center",
							},
						});
						block.brief.appendChild(block.post);
						block.brief.appendChild(ASElement({nodeName:"hr"}));
						block.intro=BasicWord({
							size:20,
							wordC:data.node[i].getAttribute("word"),
							style:{
								marginTop:15,
								width:240,
								marginLeft:10,
								//textAlign:"center",
							},
						});
						block.brief.appendChild(block.intro);
					block.contact=ASElement({
						nodeName:"div",
						style:{
							position:"absolute",
							top:480,
							left:50,
							width:350,
						},
					});
					block.appendChild(block.contact);
						block.contactW=BasicWord({
							size:23,
							sizeE:20,
							color:"rgb(200,0,0)",
							wordC:"聯繫方式",
							wordE:"Contact Information",
							style:{
								display:"block",
								marginTop:12,
								marginBottom:6,
							},
						});
						block.contact.appendChild(block.contactW);
						block.contact.appendChild(ASElement({nodeName:"hr"}));
						/*block.emailW=BasicWord({
							size:21,
							sizeE:18,
							color:"rgb(200,0,0)",
							wordC:"郵  件：",
							wordE:"Email:",
							style:{
								marginTop:6,
								marginRight:8,
							},
						});
						block.contact.appendChild(block.emailW);
						block.email=ASElement({
							nodeName:"p",
							style:{
								display:"inline-block",
								fontFamily:DEFAULT_FONT,
								fontSize:18,
								color:"rgb(100,100,100)",
								textDecoration:"underline",
								cursor:"pointer",
							},
							innerHTML:data.node[i].getAttribute("email"),
						});
						block.contact.appendChild(block.email);*/
						block.contact.appendChild(ASElement("br"));
						block.phoneW=BasicWord({
							size:21,
							sizeE:18,
							color:"rgb(200,0,0)",
							wordC:"電  話：",
							wordE:"Phone:",
							style:{
								marginTop:6,
								marginRight:8,
							},
						});
						block.contact.appendChild(block.phoneW);
						block.phone=ASElement({
							nodeName:"p",
							style:{
								display:"inline-block",
								fontFamily:DEFAULT_FONT,
								fontSize:18,
							},
							innerHTML:data.node[i].getAttribute("phone"),
						});
						block.contact.appendChild(block.phone);
			}

			this.blockF.appendChild(this.block[0]);
			this.blockC=0;

			this.changeBlock=function(w) {
				if (w==this.blockC) return;
				this.block[this.blockC].setTarget({opacity:0});
				this.block[this.blockC].setTimeout(function() {this.parentNode.removeChild(this);},200);
				this.blockC=w;
				this.blockF.appendChild(this.block[this.blockC]);
				this.block[this.blockC].set({style:{opacity:0}});
				this.block[this.blockC].setTarget({opacity:1});
				this.jump.changeBlock(w);
			}

		}

	}


	function buildPageV_Exco14() {

		PAGE_V["exco14"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:VERTICAL_PAGE_WIDTHL,
				marginBottom:30,
			},
		});
		PAGE_V["exco14"].build=function() {

			this.wBuild=true;

			var data=ASGetSourceByName("data0").getNodeByName("exco14");

			this.block=[];
			for (var i=0;i<data.node.length;i++) {

				this.block[i]=ASElement({
					nodeName:"div",
					style:{
						width:VERTICAL_PAGE_WIDTHL,
					},
				});
				var block=this.block[i];
				this.appendChild(block);
					block.pic=ASElement({
						nodeName:"img",
						src:data.getAttribute("root")+data.node[i].nodeName+".jpg",
						style:{
							display:"block",
							marginLeft:"auto",
							marginRight:"auto",
							marginTop:45,
							marginBottom:30,
							width:"90%",
						},
					});
					block.appendChild(block.pic);
					block.post=BasicWord({
						size:65,
						sizeE:60,
						wordC:data.node[i].getAttribute("postC"),
						wordE:data.node[i].getAttribute("postE"),
						color:"rgb(200,0,0)",
						style:{
							marginBottom:15,
							width:"100%",
							textAlign:"center",
						},
					});
					block.appendChild(block.post);
					block.name=BasicWord({
						size:100,
						wordC:data.node[i].getAttribute("nameC"),
						wordE:data.node[i].getAttribute("nameE"),
						style:{
							marginBottom:25,
							width:"100%",
							textAlign:"center",
						},
					});
					block.appendChild(block.name);
					block.intro=BasicWord({
						size:45,
						wordC:data.node[i].getAttribute("word"),
						style:{
							width:"80%",
							marginLeft:"10%",
							marginTop:5,
							marginBottom:30,
							textAlign:"justify",
						},
					});
					block.appendChild(block.intro);
					block.contact=ASElement({
						nodeName:"div",
						wCenter:true,
						style:{
							width:"85%",
							marginBottom:45,
						},
					});
					block.appendChild(block.contact);
						block.emailW=BasicWord({
							size:40,
							color:"rgb(200,0,0)",
							wordC:"郵  件：",
							wordE:"Email:",
							style:{
								marginTop:6,
								marginRight:8,
							},
						});
						block.contact.appendChild(block.emailW);
						block.email=ASElement({
							nodeName:"p",
							style:{
								display:"inline-block",
								fontFamily:DEFAULT_FONT,
								fontSize:40,
								color:"rgb(100,100,100)",
								textDecoration:"underline",
								cursor:"pointer",
							},
							innerHTML:data.node[i].getAttribute("email"),
						});
						block.contact.appendChild(block.email);
						block.contact.appendChild(ASElement("br"));
						block.phoneW=BasicWord({
							size:40,
							color:"rgb(200,0,0)",
							wordC:"電  話：",
							wordE:"Phone:",
							style:{
								marginTop:6,
								marginRight:8,
							},
						});
						block.contact.appendChild(block.phoneW);
						block.phone=ASElement({
							nodeName:"p",
							style:{
								display:"inline-block",
								fontFamily:DEFAULT_FONT,
								fontSize:40,
							},
							innerHTML:data.node[i].getAttribute("phone"),
						});
						block.contact.appendChild(block.phone);

				this.appendChild(ASElement({nodeName:"hr"}));

			}

		}

	}

	function buildPageV_Exco16() {

      PAGE_V["exco16"]=ASElement({
          nodeName:"div",
          wCenter:true,
          style:{
              width:VERTICAL_PAGE_WIDTHL,
              marginBottom:30,
          },
      });
      PAGE_V["exco16"].build=function() {

          this.wBuild=true;

          var data=ASGetSourceByName("data0").getNodeByName("exco16");

          this.block=[];
          for (var i=0;i<data.node.length;i++) {

              this.block[i]=ASElement({
                  nodeName:"div",
                  style:{
                      width:VERTICAL_PAGE_WIDTHL,
                  },
              });
              var block=this.block[i];
              this.appendChild(block);
              block.pic=ASElement({
                  nodeName:"img",
                  src:data.getAttribute("root")+data.node[i].nodeName+".jpg",
                  style:{
                      display:"block",
                      marginLeft:"auto",
                      marginRight:"auto",
                      marginTop:45,
                      marginBottom:30,
                      width:"90%",
                  },
              });
              block.appendChild(block.pic);
              block.post=BasicWord({
                  size:65,
                  sizeE:60,
                  wordC:data.node[i].getAttribute("postC"),
                  wordE:data.node[i].getAttribute("postE"),
                  color:"rgb(200,0,0)",
                  style:{
                      marginBottom:15,
                      width:"100%",
                      textAlign:"center",
                  },
              });
              block.appendChild(block.post);
              block.name=BasicWord({
                  size:100,
                  wordC:data.node[i].getAttribute("nameC"),
                  wordE:data.node[i].getAttribute("nameE"),
                  style:{
                      marginBottom:25,
                      width:"100%",
                      textAlign:"center",
                  },
              });
              block.appendChild(block.name);
              block.intro=BasicWord({
                  size:45,
                  wordC:data.node[i].getAttribute("word"),
                  style:{
                      width:"80%",
                      marginLeft:"10%",
                      marginTop:5,
                      marginBottom:30,
                      textAlign:"justify",
                  },
              });
              block.appendChild(block.intro);
              block.contact=ASElement({
                  nodeName:"div",
                  wCenter:true,
                  style:{
                      width:"85%",
                      marginBottom:45,
                  },
              });
              block.appendChild(block.contact);
              block.emailW=BasicWord({
                  size:40,
                  color:"rgb(200,0,0)",
                  wordC:"郵  件：",
                  wordE:"Email:",
                  style:{
                      marginTop:6,
                      marginRight:8,
                  },
              });
              block.contact.appendChild(block.emailW);
              block.email=ASElement({
                  nodeName:"p",
                  style:{
                      display:"inline-block",
                      fontFamily:DEFAULT_FONT,
                      fontSize:40,
                      color:"rgb(100,100,100)",
                      textDecoration:"underline",
                      cursor:"pointer",
                  },
                  innerHTML:data.node[i].getAttribute("email"),
              });
              block.contact.appendChild(block.email);
              block.contact.appendChild(ASElement("br"));
              block.phoneW=BasicWord({
                  size:40,
                  color:"rgb(200,0,0)",
                  wordC:"電  話：",
                  wordE:"Phone:",
                  style:{
                      marginTop:6,
                      marginRight:8,
                  },
              });
              block.contact.appendChild(block.phoneW);
              block.phone=ASElement({
                  nodeName:"p",
                  style:{
                      display:"inline-block",
                      fontFamily:DEFAULT_FONT,
                      fontSize:40,
                  },
                  innerHTML:data.node[i].getAttribute("phone"),
              });
              block.contact.appendChild(block.phone);

              this.appendChild(ASElement({nodeName:"hr"}));

          }

      }

  }
  
  function buildPageV_Exco15() {

      PAGE_V["exco15"]=ASElement({
          nodeName:"div",
          wCenter:true,
          style:{
              width:VERTICAL_PAGE_WIDTHL,
              marginBottom:30,
          },
      });
      PAGE_V["exco15"].build=function() {

          this.wBuild=true;

          var data=ASGetSourceByName("data0").getNodeByName("exco15");

          this.block=[];
          for (var i=0;i<data.node.length;i++) {

              this.block[i]=ASElement({
                  nodeName:"div",
                  style:{
                      width:VERTICAL_PAGE_WIDTHL,
                  },
              });
              var block=this.block[i];
              this.appendChild(block);
              block.pic=ASElement({
                  nodeName:"img",
                  src:data.getAttribute("root")+data.node[i].nodeName+".jpg",
                  style:{
                      display:"block",
                      marginLeft:"auto",
                      marginRight:"auto",
                      marginTop:45,
                      marginBottom:30,
                      width:"90%",
                  },
              });
              block.appendChild(block.pic);
              block.post=BasicWord({
                  size:65,
                  sizeE:60,
                  wordC:data.node[i].getAttribute("postC"),
                  wordE:data.node[i].getAttribute("postE"),
                  color:"rgb(200,0,0)",
                  style:{
                      marginBottom:15,
                      width:"100%",
                      textAlign:"center",
                  },
              });
              block.appendChild(block.post);
              block.name=BasicWord({
                  size:100,
                  wordC:data.node[i].getAttribute("nameC"),
                  wordE:data.node[i].getAttribute("nameE"),
                  style:{
                      marginBottom:25,
                      width:"100%",
                      textAlign:"center",
                  },
              });
              block.appendChild(block.name);
              block.intro=BasicWord({
                  size:45,
                  wordC:data.node[i].getAttribute("word"),
                  style:{
                      width:"80%",
                      marginLeft:"10%",
                      marginTop:5,
                      marginBottom:30,
                      textAlign:"justify",
                  },
              });
              block.appendChild(block.intro);
              block.contact=ASElement({
                  nodeName:"div",
                  wCenter:true,
                  style:{
                      width:"85%",
                      marginBottom:45,
                  },
              });
              block.appendChild(block.contact);
              block.emailW=BasicWord({
                  size:40,
                  color:"rgb(200,0,0)",
                  wordC:"郵  件：",
                  wordE:"Email:",
                  style:{
                      marginTop:6,
                      marginRight:8,
                  },
              });
              block.contact.appendChild(block.emailW);
              block.email=ASElement({
                  nodeName:"p",
                  style:{
                      display:"inline-block",
                      fontFamily:DEFAULT_FONT,
                      fontSize:40,
                      color:"rgb(100,100,100)",
                      textDecoration:"underline",
                      cursor:"pointer",
                  },
                  innerHTML:data.node[i].getAttribute("email"),
              });
              block.contact.appendChild(block.email);
              block.contact.appendChild(ASElement("br"));
              block.phoneW=BasicWord({
                  size:40,
                  color:"rgb(200,0,0)",
                  wordC:"電  話：",
                  wordE:"Phone:",
                  style:{
                      marginTop:6,
                      marginRight:8,
                  },
              });
              block.contact.appendChild(block.phoneW);
              block.phone=ASElement({
                  nodeName:"p",
                  style:{
                      display:"inline-block",
                      fontFamily:DEFAULT_FONT,
                      fontSize:40,
                  },
                  innerHTML:data.node[i].getAttribute("phone"),
              });
              block.contact.appendChild(block.phone);

              this.appendChild(ASElement({nodeName:"hr"}));

          }

      }

  }


	function buildPage_ExcoB() {

		var pageName=["exco13","exco12","exco11","exco10","exco09"];

		for (var o=0;o<pageName.length;o++) {

			PAGE[pageName[o]]=ASElement({
				nodeName:"div",
				wCenter:true,
				style:{
					width:DEFAULT_PAGE_WIDTH,
					marginBottom:30,
				},
				num:o,
			});
			PAGE[pageName[o]].build=function() {

				this.wBuild=true;

				var o=this.num;
				var data=ASGetSourceByName("data0").getNodeByName(pageName[o]);

				this.block=[];
				for (var i=0;i<data.node.length;i++) {
					this.block[i]=ASElement({
						nodeName:"div",
						style:{
							width:290,
							height:420,
						},
					});
					this.appendChild(this.block[i]);
					var block=this.block[i];
						block.pic=ASElement({
							nodeName:"img",
							src:data.getAttribute("root")+data.node[i].nodeName+".jpg",
							style:{
								margin:15,
								width:260,
								height:260,
							},
						});
						block.appendChild(block.pic);
						block.name=BasicWord({
							size:30,
							sizeE:28,
							wordC:data.node[i].getAttribute("nameC"),
							wordE:data.node[i].getAttribute("nameE"),
							color:"rgb(200,0,0)",
							style:{
								marginLeft:20,
							},
						});
						block.appendChild(block.name);
						block.appendChild(ASElement("br"));
						block.post=BasicWord({
							size:24,
							sizeE:20,
							wordC:data.node[i].getAttribute("postC"),
							wordE:data.node[i].getAttribute("postE"),
							color:"rgb(200,0,0)",
							style:{
								marginLeft:20,
								marginTop:5,
							},
						});
						block.appendChild(block.post);
						block.appendChild(ASElement("br"));
					if (data.node[i].getAttribute("email")) {
						block.email=ASElement({
							nodeName:"p",
							style:{
								fontFamily:DEFAULT_FONT,
								fontSize:18,
								color:"rgb(100,100,100)",
								textDecoration:"underline",
								marginTop:5,
								marginLeft:20,
								cursor:"pointer",
							},
							innerHTML:data.node[i].getAttribute("email"),
						});
						block.appendChild(block.email);
					}
				}

			}

		}

	}


	function buildPageV_ExcoB() {

		var pageName=["exco13","exco12","exco11","exco10","exco09"];

		for (var o=0;o<pageName.length;o++) {

			PAGE_V[pageName[o]]=ASElement({
				nodeName:"div",
				wCenter:true,
				style:{
					width:VERTICAL_PAGE_WIDTH,
					marginBottom:70,
				},
				num:o,
				pageName:pageName[o],
			});
			PAGE_V[pageName[o]].build=function() {

				this.wBuild=true;

				var o=this.num;
				var data=ASGetSourceByName("data0").getNodeByName(this.pageName);

				this.block=[];
				for (var i=0;i<data.node.length;i++) {
					this.block[i]=ASElement({
						nodeName:"div",
						style:{
							width:VERTICAL_PAGE_WIDTH/2,
						},
					});
					this.appendChild(this.block[i]);
					var block=this.block[i];
						block.pic=ASElement({
							nodeName:"img",
							src:data.getAttribute("root")+data.node[i].nodeName+".jpg",
							style:{
								margin:25,
								width:425,
							},
						});
						block.appendChild(block.pic);
						block.name=BasicWord({
							size:55,
							sizeE:42,
							wordC:data.node[i].getAttribute("nameC"),
							wordE:data.node[i].getAttribute("nameE"),
							color:"rgb(200,0,0)",
							style:{
								marginLeft:20,
							},
						});
						block.appendChild(block.name);
						block.appendChild(ASElement("br"));
						block.post=BasicWord({
							size:50,
							sizeE:36,
							wordC:data.node[i].getAttribute("postC"),
							wordE:data.node[i].getAttribute("postE"),
							color:"rgb(200,0,0)",
							style:{
								marginLeft:20,
								marginTop:5,
							},
						});
						block.appendChild(block.post);
						block.appendChild(ASElement("br"));
					if (data.node[i].getAttribute("email")) {
						block.email=ASElement({
							nodeName:"p",
							style:{
								fontFamily:DEFAULT_FONT,
								fontSize:30,
								color:"rgb(100,100,100)",
								textDecoration:"underline",
								marginTop:30,
								marginLeft:20,
								marginBottom:30,
								cursor:"pointer",
							},
							innerHTML:data.node[i].getAttribute("email"),
						});
						block.appendChild(block.email);
					}
				}

			}

		}

	}


	function buildPage_SocietyIntroduction() {

		PAGE["societyIntroduction"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:DEFAULT_PAGE_WIDTHL,
			},
		});
		PAGE["societyIntroduction"].build=function() {

			this.wBuild=true;

			var data=ASGetSourceByName("data0").getNodeByName("societyIntroduction");

			this.headline=BasicTitle({
				wordC:data.getAttribute("titleC"),
				wordE:data.getAttribute("titleE"),
				style:{
					marginTop:50,
				},
			});
			this.appendChild(this.headline);

			this.word=BasicWord({
				size:22,
				wordC:data.getAttribute("wordC"),
				wordE:data.getAttribute("wordE"),
				style:{
					display:"block",
					width:DEFAULT_PAGE_WIDTHL-50,
					textAlign:"justify",
					marginTop:50,
					marginLeft:"auto",
					marginRight:"auto",
					marginBottom:50,
				},
			});
			this.appendChild(this.word);

		}

	}


	function buildPageV_SocietyIntroduction() {

		PAGE_V["societyIntroduction"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:VERTICAL_PAGE_WIDTHL,
			},
		});
		PAGE_V["societyIntroduction"].build=function() {

			this.wBuild=true;

			var data=ASGetSourceByName("data0").getNodeByName("societyIntroduction");

			this.headline=BasicTitle({
				size:60,
				wordC:data.getAttribute("titleC"),
				wordE:data.getAttribute("titleE"),
				style:{
					marginTop:100,
				},
			});
			this.appendChild(this.headline);

			this.word=BasicWord({
				size:45,
				wordC:data.getAttribute("wordC"),
				wordE:data.getAttribute("wordE"),
				style:{
					display:"block",
					width:VERTICAL_PAGE_WIDTHL-50,
					textAlign:"justify",
					marginTop:70,
					marginLeft:"auto",
					marginRight:"auto",
					marginBottom:100,
				},
			});
			this.appendChild(this.word);

		}

	}


	function buildPage_SocietyMission() {

		PAGE["societyMission"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:DEFAULT_PAGE_WIDTHL,
			},
		});
		PAGE["societyMission"].build=function() {

			this.wBuild=true;

			var data=ASGetSourceByName("data0").getNodeByName("societyMission");

			this.headline=BasicTitle({
				wordC:data.getAttribute("titleC"),
				wordE:data.getAttribute("titleE"),
				style:{
					marginTop:50,
				},
			});
			this.appendChild(this.headline);

			this.word=BasicWord({
				size:25,
				sizeE:22,
				wordC:data.getAttribute("wordC"),
				wordE:data.getAttribute("wordE"),
				style:{
					display:"block",
					width:DEFAULT_PAGE_WIDTHL-50,
					textAlign:"justify",
					marginTop:50,
					marginLeft:"auto",
					marginRight:"auto",
					marginBottom:70,
				},
			});
			this.appendChild(this.word);

		}

	}


	function buildPageV_SocietyMission() {

		PAGE_V["societyMission"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:DEFAULT_PAGE_WIDTHL,
			},
		});
		PAGE_V["societyMission"].build=function() {

			this.wBuild=true;

			var data=ASGetSourceByName("data0").getNodeByName("societyMission");

			this.headline=BasicTitle({
				size:60,
				wordC:data.getAttribute("titleC"),
				wordE:data.getAttribute("titleE"),
				style:{
					marginTop:100,
				},
			});
			this.appendChild(this.headline);

			this.word=BasicWord({
				size:55,
				sizeE:45,
				wordC:data.getAttribute("wordC"),
				wordE:data.getAttribute("wordE"),
				style:{
					display:"block",
					width:DEFAULT_PAGE_WIDTHL-50,
					textAlign:"justify",
					marginTop:70,
					marginLeft:"auto",
					marginRight:"auto",
					marginBottom:100,
				},
			});
			this.appendChild(this.word);

		}

	}

	DOCUMENT_NAMES = ["Document/Constitution.pdf", "Document/YearPlan2020-2021.pdf","Document/AnnualFinancialPlan2020_2021.pdf"]

	function buildPage_Document() {

		var pageName=["constitution","yearPlan","financialPlan"];
        var dataName = DOCUMENT_NAMES;

		for (var o=0;o<pageName.length;o++) {

			PAGE[pageName[o]]=ASElement({
				nodeName:"div",
				wCenter:true,
				style:{
					width:695,
					height:ASWindowHeight-DEFAULT_HEAD_HEIGHT-DEFAULT_FRAME_HEAD_MINHEIGHT-DEFAULT_FRAME_BOTTOM_HEIGHT,
				},
				num:o,
			});
			PAGE[pageName[o]].build=function() {

				this.wBuild=true;

				var o=this.num;
				this.scrollB=1000,

				this.resize=function() {
					this.set({style:{
						height:ASWindowHeight-DEFAULT_HEAD_HEIGHT-DEFAULT_FRAME_HEAD_MINHEIGHT-DEFAULT_FRAME_BOTTOM_HEIGHT,
					}});
					this.content.set({style:{
						height:ASWindowHeight-DEFAULT_HEAD_HEIGHT-DEFAULT_FRAME_HEAD_MINHEIGHT-DEFAULT_FRAME_BOTTOM_HEIGHT,
					}});
				}
				this.content=ASElement({
					nodeName:"object",
					data:dataName[o],
					type:"application/pdf",
					style:{
						width:695,
						height:ASWindowHeight-DEFAULT_HEAD_HEIGHT-DEFAULT_FRAME_HEAD_MINHEIGHT-DEFAULT_FRAME_BOTTOM_HEIGHT,
					},
				});
				this.appendChild(this.content);

			}

		}

	}


	function buildPageV_Document() {

		var pageName=["constitution","yearPlan","financialPlan"];
        var dataName = DOCUMENT_NAMES;
		var pageN=[23,90,15];

		for (var o=0;o<pageName.length;o++) {

			PAGE_V[pageName[o]]=ASElement({
				nodeName:"div",
				wCenter:true,
				style:{
					position:"relative",
					width:VERTICAL_PAGE_WIDTHH,
					backgroundColor:"rgb(50,50,50)",
				},
				num:o,
				dataName:dataName[o],
				pageN:pageN[o],
			});
			PAGE_V[pageName[o]].resize=function() {
				this.heightA=Math.min(1200,ASWindowHeight-VERTICAL_HEAD_HEIGHT-VERTICAL_FRAME_BOTTOM_HEIGHT-VERTICAL_FRAME_HEAD_MINHEIGHT);
				this.pageF.set({style:{
					height:this.heightA-185,
				}});
				this.next.set({style:{
					right:((VERTICAL_PAGE_WIDTHH-(this.heightA-185)/1.414)/2-79)/2,
					top:this.heightA/2-55,
				}});
				this.previous.set({style:{
					left:((VERTICAL_PAGE_WIDTHH-(this.heightA-185)/1.414)/2-79)/2,
					top:this.heightA/2-55,
				}});
			}
			PAGE_V[pageName[o]].build=function() {

				this.wBuild=true;

				var o=this.num;
				this.heightA=Math.min(1200,ASWindowHeight-VERTICAL_HEAD_HEIGHT-VERTICAL_FRAME_BOTTOM_HEIGHT-VERTICAL_FRAME_HEAD_MINHEIGHT);

				this.titleF=BasicWord({
					size:35,
					color:"white",
					wordC:this.dataName+".pdf",
					style:{
						width:"100%",
						textAlign:"center",
						marginTop:20,
					},
				});
				this.appendChild(this.titleF);

				this.pageF=ASElement({
					nodeName:"div",
					style:{
						position:"relative",
						marginTop:20,
						height:this.heightA-185,
						width:"100%",
					}
				});
				this.appendChild(this.pageF);

				this.pageNum=0;
				this.pageC=ASElement({
					nodeName:"img",
					src:"Document/"+this.dataName+"/"+this.dataName+"-"+"01"+".png",
					style:{
						display:"block",
						marginLeft:"auto",
						marginRight:"auto",
						height:"100%",
					},
				});
				this.pageF.appendChild(this.pageC);

				this.fileF=ASElement({
					nodeName:"a",
					href:"Document/"+this.dataName+".pdf",
					target:"_blank",
					style:{
						width:"100%",
					},
				});
				this.appendChild(this.fileF);
					this.file=BasicWord({
						size:35,
						color:"white",
						wordC:"查看原文檔",
						wordE:"View the original document",
						style:{
							width:"100%",
							marginTop:18,
							marginBottom:35,
							textAlign:"center",
							textDecoration:"underline",
							color:"white",
						},
					});
					this.fileF.appendChild(this.file);

				this.next=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						width:79,
						height:110,
						right:((VERTICAL_PAGE_WIDTHH-(this.heightA-185)/1.414)/2-79)/2,
						top:this.heightA/2-55,
						backgroundImage:"url('Image/Page/Document/pageFlip.png')",
						backgroundSize:"100%",
						cursor:"pointer",
					},
					root:this,
					onclick:function() {
						this.root.pageC.setTarget({
							transform:{translateX:-VERTICAL_PAGE_WIDTHH},
							opacity:0,
						});
						this.root.pageNum=(this.root.pageNum+1)%this.root.pageN;
						var name=this.root.pageNum+1;
						if (this.root.pageNum<9) name="0"+name;
						name="0"+name;
						this.root.pageF.removeChild(this.root.pageC);
						this.root.pageC=ASElement({
							nodeName:"img",
							src:"Document/"+this.root.dataName+"/"+this.root.dataName+"-"+name+".png",
							style:{
								display:"block",
								marginLeft:"auto",
								marginRight:"auto",
								height:"100%",
							},
						});
						this.root.pageF.appendChild(this.root.pageC);
					},
				});
				this.appendChild(this.next);

				this.previous=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						width:79,
						height:110,
						left:((VERTICAL_PAGE_WIDTHH-(this.heightA-185)/1.414)/2-79)/2,
						top:this.heightA/2-55,
						backgroundImage:"url('Image/Page/Document/pageFlip.png')",
						backgroundSize:"100%",
						cursor:"pointer",
						transform:{
							scaleX:-1,
						},
					},
					root:this,
					onclick:function() {
						this.root.pageC.setTarget({
							transform:{translateX:-VERTICAL_PAGE_WIDTHH},
							opacity:0,
						});
						this.root.pageNum--;
						if (this.root.pageNum<0) this.root.pageNum=this.root.pageN-1;
						var name=this.root.pageNum+1;
						if (this.root.pageNum<9) name="0"+name;
						name="0"+name;
						this.root.pageF.removeChild(this.root.pageC);
						this.root.pageC=ASElement({
							nodeName:"img",
							src:"Document/"+this.root.dataName+"/"+this.root.dataName+"-"+name+".png",
							style:{
								display:"block",
								marginLeft:"auto",
								marginRight:"auto",
								height:"100%",
							},
						});
						this.root.pageF.appendChild(this.root.pageC);
					},
				});
				this.appendChild(this.previous);

			}

		}

	}


	function buildPage_MailCuisine() {

		var data=ASGetSourceByName("data0").getNodeByName("email").getNodeByName("cuisine");

		for (var o=0;o<data.node.length;o++) {
			PAGE["cuisine"+o]=ASElement({
				nodeName:"div",
				wCenter:true,
				style:{
					width:DEFAULT_PAGE_WIDTH,
					minHeight:1500,
					marginBottom:25,
				},
				o:o,
			});
			PAGE["cuisine"+o].setLang=function() {
				if (!this.wBuild) return;
				var str="content"+ASLang;
				sendAJAX({
					type:"GET",
					src:"Data/Email/"+data.node[this.o].getAttribute(str)+".txt",
					root:this,
					succeed:function() {
						var str=this.responseText;
						if (str.indexOf("<content>")>-1) {
							this.root.innerHTML=str.slice(str.indexOf("<content>")+9,str.indexOf("</content>"));
						} else {
							this.root.innerHTML=str;
						}
					}
				});
			}
			PAGE["cuisine"+o].build=function() {

				this.wBuild=true;

				var data=ASGetSourceByName("data0").getNodeByName("email").getNodeByName("cuisine");
				var str="content"+ASLang;
				sendAJAX({
					type:"GET",
					src:"Data/Email/"+data.node[this.o].getAttribute(str)+".txt",
					root:this,
					succeed:function() {
						var str=this.responseText;
						if (str.indexOf("<content>")>-1) {
							this.root.innerHTML=str.slice(str.indexOf("<content>")+9,str.indexOf("</content>"));
						} else {
							this.root.innerHTML=str;
						}
					}
				});

			}
		}

	}


	function buildPageV_MailCuisine() {

		var data=ASGetSourceByName("data0").getNodeByName("email").getNodeByName("cuisine");

		for (var o=0;o<data.node.length;o++) {
			PAGE_V["cuisine"+o]=ASElement({
				nodeName:"div",
				wCenter:true,
				style:{
					width:VERTICAL_PAGE_WIDTH,
				},
				o:o,
			});
			PAGE_V["cuisine"+o].setLang=function() {
				if (!this.wBuild) return;
				var str="content"+ASLang;
				sendAJAX({
					type:"GET",
					src:"Data/Email/"+data.node[this.o].getAttribute(str)+".txt",
					root:this,
					succeed:function() {
						var str=this.responseText;
						if (str.indexOf("<content>")>-1) {
							this.root.innerHTML=str.slice(str.indexOf("<content>")+9,str.indexOf("</content>"));
						} else {
							this.root.innerHTML=str;
						}
					}
				});
			}
			PAGE_V["cuisine"+o].build=function() {

				this.wBuild=true;

				var data=ASGetSourceByName("data0").getNodeByName("email").getNodeByName("cuisine");
				var str="content"+ASLang;
				sendAJAX({
					type:"GET",
					src:"Data/Email/"+data.node[this.o].getAttribute(str)+".txt",
					root:this,
					succeed:function() {
						var str=this.responseText;
						if (str.indexOf("<content>")>-1) {
							this.root.innerHTML=str.slice(str.indexOf("<content>")+9,str.indexOf("</content>"));
						} else {
							this.root.innerHTML=str;
						}
					}
				});

			}
		}

	}


	function buildPage_Sponsor() {

		PAGE["sponsor"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:DEFAULT_PAGE_WIDTHH,
				marginBottom:30,
			},
		});
		PAGE["sponsor"].build=function() {

			this.wBuild=true;

			var data=ASGetSourceByName("data0").getNodeByName("sponsor");

			this.block=[];
			for (var i=0;i<data.node.length;i++) {

				this.block[i]=ASElement({
					nodeName:"div",
					style:{
						width:325,
						height:270,
					},
				});
				var block=this.block[i];
				this.appendChild(this.block[i]);
					block.pic=ASElement({
						nodeName:"img",
						src:data.getAttribute("root")+data.node[i].getAttribute("pic"),
						style:{
							display:"block",
							margin:"auto",
						},
						onload:function() {
							var scale=Math.min(300/this.naturalWidth,240/this.naturalHeight);
							this.set({style:{
								width:this.naturalWidth*scale,
								height:this.naturalHeight*scale,
								marginTop:(240-this.naturalHeight*scale)/2,
							}});
						},
					});
					block.appendChild(block.pic);

			}

		}

	}


	function buildPageV_Sponsor() {

		PAGE_V["sponsor"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:VERTICAL_PAGE_WIDTH,
				marginBottom:30,
			},
		});
		PAGE_V["sponsor"].build=function() {

			this.wBuild=true;

			var data=ASGetSourceByName("data0").getNodeByName("sponsor");

			this.block=[];
			for (var i=0;i<data.node.length;i++) {

				this.block[i]=ASElement({
					nodeName:"div",
					style:{
						width:410,
						height:345,
						margin:20,
					},
				});
				var block=this.block[i];
				this.appendChild(this.block[i]);
					block.pic=ASElement({
						nodeName:"img",
						src:data.getAttribute("root")+data.node[i].getAttribute("pic"),
						style:{
							display:"block",
							margin:"auto",
						},
						onload:function() {
							var scale=Math.min(410/this.naturalWidth,345/this.naturalHeight);
							this.set({style:{
								width:this.naturalWidth*scale,
								height:this.naturalHeight*scale,
								marginTop:(345-this.naturalHeight*scale)/2,
							}});
						},
					});
					block.appendChild(block.pic);

			}

		}

	}


	function buildPage_Wechat() {

		PAGE["wechat"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:DEFAULT_PAGE_WIDTHL,
			},
		});
		PAGE["wechat"].build=function() {

			this.wBuild=true;

			this.pic=ASElement({
				nodeName:"img",
				src:ASGetSrcByName("CFASQrcode"),
				style:{
					display:"block",
					width:360,
					height:360,
					marginLeft:"auto",
					marginRight:"auto",
					marginTop:70,
				},
			});
			this.appendChild(this.pic);

			this.word=BasicWord({
				size:30,
				wordC:"掃碼關注民藝公眾號吧~",
				wordE:"Scan the QR code to get our news on Wechat~",
				style:{
					width:"100%",
					marginTop:25,
					marginBottom:70,
					textAlign:"center",
				},
			}),
			this.appendChild(this.word);

		}

	}

	function buildPageV_Wechat() {

		PAGE_V["wechat"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:VERTICAL_PAGE_WIDTHL,
			},
		});
		PAGE_V["wechat"].build=function() {

			this.wBuild=true;

			this.pic=ASElement({
				nodeName:"img",
				src:ASGetSrcByName("CFASQrcode"),
				style:{
					display:"block",
					width:600,
					height:600,
					marginLeft:"auto",
					marginRight:"auto",
					marginTop:70,
				},
			});
			this.appendChild(this.pic);

			this.word=BasicWord({
				size:60,
				wordC:"掃碼關注民藝公眾號吧~",
				wordE:"Scan the QR code to get our news on Wechat~",
				style:{
					width:"100%",
					marginTop:25,
					marginBottom:70,
					textAlign:"center",
				},
			}),
			this.appendChild(this.word);

		}

	}


	function buildPage_Email() {

		PAGE["email"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				marginTop:20,
				marginBottom:15,
				width:DEFAULT_PAGE_WIDTHL,
			},
		});
		PAGE["email"].resize=function() {
			if (USERDATA=="NULL") {

			} else {
				if (USERDATA.place!="E") {
					var page=this.page[1];
					page.editor.resize({heightA:ASWindowHeight-DEFAULT_SHELL_HEAD_HEIGHT-DEFAULT_SHELL_BOTTOM_HEIGHT-80});
				} else {
					var page=this.page[2];
					page.editor.resize({heightA:ASWindowHeight-DEFAULT_SHELL_HEAD_HEIGHT-DEFAULT_SHELL_BOTTOM_HEIGHT-80});
				}
			}
		}
		PAGE["email"].update=function() {
			this.clearChild();
			if (USERDATA=="NULL") {
				this.appendChild(this.page[0]);
			} else {
				if (USERDATA.place!="E") {
					this.appendChild(this.page[1]);
				} else {
					this.appendChild(this.page[2]);
				}
			}
			this.setTimeout(function(){if (this.root) this.root.pageResize(this);},30);
		}
		PAGE["email"].build=function() {

			this.wBuild=true;

			this.page=[];

			this.page[0]=ASElement({
				nodeName:"div",
				root:this,
				style:{
					width:DEFAULT_PAGE_WIDTHL,
				},
			});
			var page=this.page[0];
				page.word=BasicWord({
					size:60,
					wordC:"請先登錄",
					wordE:"Please log in first.",
					style:{
						width:"100%",
						textAlign:"center",
						marginTop:50,
					},
				});
				page.appendChild(page.word);
				page.log=BasicButton({
					size:24,
					wordC:"登   入",
					wordE:"Log in",
					wCenter:true,
					style:{
						marginTop:30,
					},
					onclick:function() {
						changeURL("login");
					},
				});
				page.appendChild(page.log);

			this.page[2]=ASElement({
				nodeName:"div",
				style:{
					position:"relative",
					width:"100%",
				},
			});
			var page=this.page[2];

				var re=[{
					wordC:"全體用戶",
					wordE:"All users",
					value:"allUser",
				},{
					wordC:"全體會員",
					wordE:"All members",
					value:"allMember",
				},{
					wordC:"全體Exco",
					wordE:"All excos",
					value:"allExco",
				},{
					wordC:"全體Subcom",
					wordE:"All subcoms",
					value:"allSubcom",
				}];
				var data=ASGetSourceByName("data0").getNodeByName("exco14");
				for (var i=0;i<data.node.length;i++) {
					re[re.length]={
						wordC:data.node[i].getAttribute("nameC"),
						wordE:data.node[i].getAttribute("nameE"),
						value:data.node[i].getAttribute("itsc")+"@connect.ust.hk",
						belong:"allExco",
					};
				}
				var data=ASGetSourceByName("data0").getNodeByName("subcom12");
				for (var i=0;i<data.node.length;i++) {
					re[re.length]={
						wordC:data.node[i].getAttribute("nameC"),
						wordE:data.node[i].getAttribute("nameE"),
						value:data.node[i].getAttribute("itsc")+"@connect.ust.hk",
						belong:"allSubcom",
					};
				}
				page.recipent=BasicInput({
					size:22,
					sizeW:24*0.9,
					type:"checkBox",
					wordC:"收件人",
					wordE:"Recipent",
					widthL:100,
					block:re,
					col:4,
					style:{
						marginTop:10,
						marginBottom:10,
					},
				});
				page.appendChild(page.recipent);

				page.appendChild(ASElement({nodeName:"hr",style:{opacity:0.5}}));

				page.subject=BasicInput({
					type:"input",
					wordC:"主   題",
					wordE:"Subject",
					widthL:100,
					hintC:"未填写",
					hintE:"Undefined",
					wCompulsory:true,
					style:{
						marginTop:8,
						marginBottom:8,
					},
				});
				page.appendChild(page.subject);

				page.editor=BasicEditor({
					heightA:ASWindowHeight-DEFAULT_SHELL_HEAD_HEIGHT-DEFAULT_SHELL_BOTTOM_HEIGHT-113,
				});
				page.appendChild(page.editor);

				page.appendChild(ASElement("br"));
				page.send=BasicDoubleButton({
					fx:"up",
					wAequilate:true,
					size:20,
					button0:{
						wordC:"發   送",
						wordE:"Send",
					},
					button1:{
						wordC:"取   消",
						wordE:"Cancel",
					},
					style:{
						marginLeft:5,
						marginTop:8,
					},
				});
				page.appendChild(page.send);

			this.appendChild(this.page[0]);

		}

	}


	function buildPage_Setting() {

		PAGE["setting"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				marginTop:50,
				marginBottom:50,
				width:DEFAULT_PAGE_WIDTHL-100,
			},
		});
		PAGE["setting"].build=function() {

			this.wBuild=true;

			this.title1=BasicTitle({
				wordC:"基本设置",
				wordE:"Basic Setting",
				style:{
					marginBottom:20,
				}
			});
			this.appendChild(this.title1);

			this.inputList=["lang"];
			this.input=[];
			for (var i=0;i<this.inputList.length;i++) {
				var p={
					model:this.inputList[i],
					style:{
						marginLeft:30,
					},
				};
				this.input[this.inputList[i]]=BasicInput(p);
				this.appendChild(this.input[this.inputList[i]]);
			}
			this.input["lang"].setValue(ASLang);

		}

	}


	function buildPageV_Setting() {

		PAGE_V["setting"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				marginTop:60,
				marginBottom:60,
				width:VERTICAL_PAGE_WIDTHL,
			},
		});
		PAGE_V["setting"].build=function() {

			this.wBuild=true;

			this.title1=BasicTitle({
				size:60,
				wordC:"基本设置",
				wordE:"Basic Setting",
				style:{
					marginLeft:50,
					marginBottom:30,
				}
			});
			this.appendChild(this.title1);

			this.inputList=["lang"];
			this.input=[];
			for (var i=0;i<this.inputList.length;i++) {
				var p={
					model:this.inputList[i],
					size:50,
					widthL:300,
					widthA:VERTICAL_PAGE_WIDTHL,
					style:{
						marginLeft:80,
					},
				};
				this.input[this.inputList[i]]=BasicInput(p);
				this.appendChild(this.input[this.inputList[i]]);
			}
			this.input["lang"].setValue(ASLang);

		}

	}


	function buildPage_Login() {

		PAGE["login"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:DEFAULT_PAGE_WIDTHL,
			},
		});
		PAGE["login"].build=function() {

			this.wBuild=true;

			this.content=ASElement({
				nodeName:"iframe",
                src:"https://cas.ust.hk/cas/login?service=http://ihome.ust.hk/~su_cfas/cgi-bin/",
				style:{
					display:"block",
					marginLeft:"auto",
					marginRight:"auto",
					marginBottom:30,
					width:550,
					height:680,
				},
			});
			this.appendChild(this.content);

		}
		PAGE["login"].appear=function() {
			this.appendChild(this.content);
		}

	}


	function buildPageV_Login() {

		PAGE_V["login"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:DEFAULT_PAGE_WIDTHL,
			},
		});
		PAGE_V["login"].build=function() {

			this.wBuild=true;

			this.content=ASElement({
				nodeName:"iframe",
                src:"https://cas.ust.hk/cas/login?service=http://ihome.ust.hk/~su_cfas/cgi-bin/",
				style:{
					display:"block",
					marginLeft:"auto",
					marginRight:"auto",
					marginBottom:30,
					width:550,
					height:680,
					transformOrigin:"50% 0",
					transform:{
						scale:VERTICAL_PAGE_WIDTHL/550,
					},
				},
			});
			this.appendChild(this.content);

		}
		PAGE_V["login"].appear=function() {
			this.appendChild(this.content);
		}

	}


	function buildPage_Logout() {

		PAGE["logout"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:DEFAULT_PAGE_WIDTHL,
			},
		});
		PAGE["logout"].build=function() {

			this.wBuild=true;

			this.content=ASElement({
				nodeName:"iframe",
				src:"https://cas.ust.hk/cas/logout",
				style:{
					display:"block",
					marginLeft:"auto",
					marginRight:"auto",
					marginBottom:30,
					width:550,
					height:390,
				},
			});
			this.appendChild(this.content);

		}
		PAGE["logout"].appear=function() {
			this.appendChild(this.content);
			removeACookie("cfas_user");
			removeACookie("cfas_ticket");
			USERDATA="NULL";
			updateUserData();
		}

	}


	function buildPageV_Logout() {

		PAGE_V["logout"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:DEFAULT_PAGE_WIDTHL,
			},
		});
		PAGE_V["logout"].build=function() {

			this.wBuild=true;

			this.content=ASElement({
				nodeName:"iframe",
				src:"https://cas.ust.hk/cas/logout",
				style:{
					display:"block",
					marginLeft:"auto",
					marginRight:"auto",
					marginBottom:30,
					width:550,
					height:390,
					transformOrigin:"50% 0",
					transform:{
						scale:VERTICAL_PAGE_WIDTHL/550,
					},
				},
			});
			this.appendChild(this.content);

		}
		PAGE_V["logout"].appear=function() {
			this.appendChild(this.content);
			removeACookie("cfas_user");
			removeACookie("cfas_ticket");
			USERDATA="NULL";
			updateUserData();
		}

	}


	function buildPage_UserProfile() {

		PAGE["userProfile"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:DEFAULT_PAGE_WIDTHL,
				marginTop:30,
				marginBottom:30,
			},
		});
		PAGE["userProfile"].inputList=["nickname","name","place","sex","studentID","school","phone"];
		PAGE["userProfile"].build=function() {

			this.wBuild=true;

			this.titleF=BasicTitle({
				wordC:"基本信息",
				wordE:"Basic Information",
				style:{
					marginBottom:20,
				},
			});
			this.appendChild(this.titleF);

			this.input={};
			for (var i=0;i<this.inputList.length;i++) {
				this.input[this.inputList[i]]=BasicInput({
					model:this.inputList[i],
					widthA:800,
					style:{
						marginTop:2,
						marginBottom:2,
						marginLeft:30,
					},
				});
				if (USERDATA!="NULL") {
					this.input[this.inputList[i]].setValue(USERDATA[this.inputList[i]]);
				}
				this.appendChild(this.input[this.inputList[i]]);
				this.appendChild(ASElement("br"));
			}

			this.save=BasicButton({
				size:24,
				wordC:"保  存",
				wordE:"Save",
				style:{
					position:"relative",
					left:DEFAULT_PAGE_WIDTHL-100,
					marginTop:10,
					visibility:"hidden",
				},
				root:this,
				onclick:function() {
					var data={};
					for (var i=0;i<this.root.inputList.length;i++) {
						data[this.root.inputList[i]]=this.root.input[this.root.inputList[i]].getValue();
					}
					postUserData(data);
				}
			});
			this.appendChild(this.save);
			if (USERDATA!="NULL") this.save.set({style:{visibility:"visible"}});

		}

		PAGE["userProfile"].update=function() {
			if (!this.wBuild) return;
			if (USERDATA=="NULL") {
				this.input["nickname"].setValue("");
				this.input["name"].setValue("");
				this.input["place"].setValue("N");
				this.input["sex"].setValue("U");
				this.input["studentID"].setValue("");
				this.input["school"].setValue("");
				this.input["phone"].setValue("");
				this.save.set({style:{visibility:"hidden"}});
			} else {
				for (var i=0;i<this.inputList.length;i++) {
					this.input[this.inputList[i]].setValue(USERDATA[this.inputList[i]]);
				}
				this.save.set({style:{visibility:"visible"}});
			}
		}

	}


	function buildPageV_UserProfile() {

		PAGE_V["userProfile"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:VERTICAL_PAGE_WIDTHL,
				marginTop:50,
				marginBottom:50,
			},
		});
		PAGE_V["userProfile"].inputList=["nickname","name","place","sex","studentID","school","phone"];
		PAGE_V["userProfile"].build=function() {

			this.wBuild=true;

			this.titleF=BasicTitle({
				size:60,
				wordC:"基本信息",
				wordE:"Basic Information",
				widthA:VERTICAL_PAGE_WIDTHL,
				style:{
					marginBottom:30,
				},
			});
			this.appendChild(this.titleF);

			this.input={};
			for (var i=0;i<this.inputList.length;i++) {
				var p={
					size:50,
					model:this.inputList[i],
					widthA:VERTICAL_PAGE_WIDTHL-150,
					widthL:270,
					style:{
						position:"relative",
						left:30,
						marginTop:20,
					},
				};
				if (this.inputList[i]=="school") {
					p.type="radioPoint";
					p.col=2;
				}
				this.input[this.inputList[i]]=BasicInput(p);
				if (USERDATA!="NULL") {
					this.input[this.inputList[i]].setValue(USERDATA[this.inputList[i]]);
				}
				this.appendChild(this.input[this.inputList[i]]);
				this.appendChild(ASElement("br"));
			}

			this.save=BasicButton({
				size:45,
				wordC:"保  存",
				wordE:"Save",
				style:{
					position:"relative",
					left:VERTICAL_PAGE_WIDTHL-140,
					marginTop:40,
					visibility:"hidden",
				},
				root:this,
				onclick:function() {
					var data={};
					for (var i=0;i<this.root.inputList.length;i++) {
						data[this.root.inputList[i]]=this.root.input[this.root.inputList[i]].getValue();
					}
					postUserData(data);
				}
			});
			this.appendChild(this.save);
			if (USERDATA!="NULL") this.save.set({style:{visibility:"visible"}});

		}

		PAGE_V["userProfile"].update=function() {
			if (!this.wBuild) return;
			if (USERDATA=="NULL") {
				this.input["nickname"].setValue("");
				this.input["name"].setValue("");
				this.input["place"].setValue("N");
				this.input["sex"].setValue("U");
				this.input["studentID"].setValue("");
				this.input["school"].setValue("");
				this.input["phone"].setValue("");
				this.save.set({style:{visibility:"hidden"}});
			} else {
				for (var i=0;i<this.inputList.length;i++) {
					this.input[this.inputList[i]].setValue(USERDATA[this.inputList[i]]);
				}
				this.save.set({style:{visibility:"visible"}});
			}
		}

	}


	function buildPageV_CookGame() {

		PAGE_V["cookGame"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:VERTICAL_SHELL_WIDTH,
				paddingTop:40,
				paddingBottom:70,
				backgroundColor:"#1A00AC",
			},
		});
		PAGE_V["cookGame"].build=function() {

			this.wBuild=true;

			setLang("C");

			this.status="normal";
			this.set({style:{minHeight:ASWindowHeight-VERTICAL_SHELL_HEAD_HEIGHT-VERTICAL_SHELL_BOTTOM_HEIGHT}});

			this.intro=BasicWord({
				size:45,
				color:"rgb(255,255,0)",
				wordC:"        對於廚師而言，良好的刀工是非常重要的。試著將胡蘿蔔切成厚度相同的八片，看看你是否有做神廚的潛力吧~",
				wordE:"For a chef, the skill of using knife is very important. Try to cut the carrot into eight pieces of same thickness, to see whether you have the potential to be a great chef~",
				wCenter:true,
				style:{
					marginTop:30,
					width:"85%",
				},
			});
			this.appendChild(this.intro);

			this.title1=BasicTitle({
				size:60,
				color:"rgb(255,255,0)",
				wordC:"玩   法",
				wordE:"How to Play",
				style:{
					marginTop:40,
					marginLeft:"5%",
				},
			});
			this.appendChild(this.title1);
			this.way=BasicWord({
				size:45,
				color:"rgb(255,255,0)",
				wordC:"        點擊按鈕開始遊戲或下刀（共七刀）",
				wordE:"Click the button to start or cut (7 times in total).",
				wCenter:true,
				style:{
					marginTop:15,
					width:"85%",
				},
			});
			this.appendChild(this.way);

			this.title2=BasicTitle({
				size:60,
				color:"rgb(255,255,0)",
				wordC:"提   醒",
				wordE:"Remind",
				style:{
					marginTop:40,
					marginLeft:"5%",
				},
			});
			this.appendChild(this.title2);
			this.buttonW2=BasicWord({
				size:45,
				wordC:"        IPhone用戶請交替點擊按鈕與其他空白區域（推薦用兩根手指hh），防止連點手勢",
				color:"rgb(255,255,0)",
				wCenter:true,
				style:{
					width:"80%",
					marginTop:20,
				},
			});
			this.appendChild(this.buttonW2);

			this.content=ASElement({
				nodeName:"div",
				wCenter:"true",
				style:{
					position:"relative",
					width:"90%",
					height:600,
				},
			});
			this.appendChild(this.content);
				this.content.plant=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						width:"100%",
						height:30,
						backgroundImage:"url('Image/Page/cookGame/plant.png')",
						backgroundSize:"100% 100%",
						backgroundRepeat:"no-repeat",
						bottom:60,
					},
				});
				this.content.appendChild(this.content.plant);
				this.content.carrot0=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						width:245,
						height:80,
						backgroundImage:"url('Image/Page/cookGame/carrot.png')",
						backgroundSize:"245px 100%",
						backgroundRepeat:"no-repeat",
						bottom:90,
						left:125,
						transformOrigin:"0 100%",
					},
				});
				this.content.appendChild(this.content.carrot0);
				this.content.carrot=[];
				this.content.knife=ASElement({
					nodeName:"img",
					src:"Image/Page/cookGame/knife.png",
					style:{
						position:"absolute",
						width:75,
						left:"50%",
						bottom:200,
						transform:{
							translateX:-34,
						},
					},
				});
				this.content.appendChild(this.content.knife);
				this.content.percentW=BasicWord({
					size:60,
					wordC:"aa",
					wordE:"aa",
					color:"rgb(255,255,100)",
					wCenter:true,
					style:{
						position:"absolute",
						top:60,
						width:"100%",
						textAlign:"center",
						opacity:0,
					},
				});
				this.content.appendChild(this.content.percentW);
				this.content.failW=BasicWord({
					size:80,
					wordC:"您未能完成",
					wordE:"You failed",
					color:"rgb(255,0,0)",
					wCenter:true,
					style:{
						position:"absolute",
						top:160,
						width:"100%",
						textAlign:"center",
						opacity:0,
					},
				});
				this.content.appendChild(this.content.failW);
				this.content.successW=BasicWord({
					size:60,
					wordC:"aa",
					wordE:"aa",
					wCenter:true,
					color:"rgb(255,255,100)",
					style:{
						position:"absolute",
						top:160,
						width:"100%",
						textAlign:"center",
						opacity:0,
					},
				});
				this.content.appendChild(this.content.successW);

			this.over=function() {
				if (this.clickTime<8) {
					this.status="fail";
					this.content.knife.set({style:{opacity:0.5}});
					this.content.failW.set({style:{opacity:1}});
					this.clickTime=8;
				} else {
					this.content.carrot0.set({style:{opacity:0}});
					this.widthN[8]=245;
					for (var i=1;i<=8;i++) {
						this.content.carrot[i]=ASElement({
							nodeName:"div",
							i:i,
							style:{
								position:"absolute",
								height:80,
								width:this.widthN[i]-this.widthN[i-1],
								backgroundImage:"url('Image/Page/cookGame/carrot.png')",
								backgroundSize:"245px 100%",
								backgroundRepeat:"no-repeat",
								backgroundPosition:-(245-this.widthN[i])+"px 0",
								bottom:90,
								left:ASGetElementWidth(this.content)/2+245-this.widthN[i],
								transformOrigin:"0 100%",
							},
						});
						this.content.appendChild(this.content.carrot[i]);
						this.content.carrot[i].setTimeout(function() {this.setTarget({
							opacity:1,
							speed_alpha:0.1,
							bottom:90,
							left:90*(9-this.i),
							transform:{
								rotate:-90,
							},
						});},300);
					}
					this.content.carrot0.setTimeout(function() {this.setTarget({
						left:90*8,
						transform:{
							rotate:-90,
						},
					});},300);
					var mean=245/8;
					var sq=0;
					for (var i=1;i<=8;i++) {
						sq+=Math.pow(this.widthN[i]-this.widthN[i-1]-mean,2);
					}
					this.content.percentW.set({style:{
						opacity:1,
					}});
					var point=105-Math.min(105,Math.sqrt(sq)*1.3);
					var str=point+"";
					str=str.substr(0,5);
					this.content.percentW.setWord({
						wordC:"相似度："+str+"%",
					});
					if (point<60) {
						this.content.successW.setWord({
							wordC:"您的刀法...還是來當評委吧^^",
						});
						document.title=str+"%！我在民藝坊廚神爭霸之刀工測試中，達到了“评委”水准！";
					} else {
						if (point<80) {
							this.content.successW.setWord({
								wordC:"不錯哦，可以試試當helper~",
							});
							document.title=str+"%！我在民藝坊廚神爭霸之刀工測試中，達到了“Helper”水准！";
						} else {
							if (point<90) {
								this.content.successW.setWord({
									wordC:"哇塞，您一定是做菜好手，可以報名副廚了hh",
								});
								document.title=str+"%！我在民藝坊廚神爭霸之刀工測試中，達到了“副厨”水准！";
							} else {
								this.content.successW.setWord({
									wordC:"天啊，您一定是骨骼精奇之人，快來挑戰主廚吧！",
								});
								document.title=str+"%！我在民藝坊廚神爭霸之刀工測試中，達到了“主厨”水准！";
							}
						}
					}
					this.content.knife.set({style:{opacity:0.5}});
					this.content.successW.set({style:{opacity:1}});
				}
				this.setTimeout(function() {
					this.status="normal";
					this.buttonW.setWord({
						wordC:"再來一次",
						wordE:"Restart",
					});
				},500);

			}


			this.buttonW=BasicWord({
				size:45,
				wordC:"點擊按鈕開始",
				wordE:"Click the button to start",
				color:"rgb(255,255,0)",
				style:{
					textAlign:"center",
					width:"100%",
					marginTop:20,
					marginBottom:20,
				},
			});
			this.appendChild(this.buttonW);

			this.clickTime=0;
			this.button=ASElement({
				nodeName:"div",
				wCenter:true,
				style:{
					width:120,
					height:120,
					borderRadius:60,
					boxShadow:"0 0 0px 10px rgb(255,255,100) inset",
				},
				root:this,
				onmouseover:function() {return false;},
				onmousemove:function() {return false;},
				onmouseup:function() {return false;},
				onselectstart:function() {return false;},
				ondragstart:function() {return false;},
				onmousedown:function() {
					if (this.root.status!="normal") return;
					var timeA=2000;
					if (this.root.clickTime==0) {
						this.root.startTime=ASGetTime();
						this.root.widthN=[0];
						this.root.content.carrot0.setTarget({
							type:"linear",
							left:"50%",
							time:timeA,
						});
						this.root.setTimeout(this.root.over,timeA);
					}
					if (this.root.clickTime>0 && this.root.clickTime<8) {
						this.root.content.knife.set({style:{transform:{
							translateY:120,
						}}});
						this.root.content.knife.setTimeout(function() {this.setTarget({
							transform:{
								translateY:0,
							},
							time:50,
							type:"linear",
						});},0);
						var time1=ASGetTime()-this.root.startTime;
						var width1=time1/timeA*245;
						this.root.widthN[this.root.clickTime]=width1;
					}
					if (this.root.clickTime==7) {
						this.root.status="pause";
					}
					if (this.root.clickTime==8) {
						for (var i=1;i<=8;i++) {
							if (this.root.content.carrot[i]) {
								this.root.content.removeChild(this.root.content.carrot[i]);
								this.root.content.carrot[i]=null;
							}
						}
						this.root.content.carrot0.set({style:{
							transition:"",
						}});
						this.root.content.carrot0.setTimeout(function() {this.set({style:{
							left:125,
							width:245,
							transform:{
								rotate:0,
							},
							opacity:1,
						}});},10);
						this.root.content.knife.set({style:{opacity:1}});
						this.root.content.percentW.set({style:{opacity:0}});
						this.root.content.failW.set({style:{opacity:0}});
						this.root.content.successW.set({style:{opacity:0}});
					}
					this.root.clickTime++;
					if (this.root.clickTime>8) this.root.clickTime=0;
					if (this.root.clickTime==0) {
						if (this.root.clickTime==0) {
							this.root.buttonW.setWord({
								wordC:"點擊按鈕開始",
								wordE:"Click the button to start",
							});
						}
					} else {
						this.root.buttonW.setWord({
							wordC:(this.root.clickTime-1)+"/7",
							wordE:(this.root.clickTime-1)+"/7",
						});
					}
				},
			});
			this.appendChild(this.button);
				this.button.pic=ASElement({
					nodeName:"div",
					style:{
						marginLeft:20,
						marginTop:20,
						width:80,
						height:80,
						borderRadius:40,
						backgroundColor:"rgb(255,255,100)",
					},
				});
				this.button.appendChild(this.button.pic);

		}

	}


	function buildPageV_CookGame2() {

		PAGE_V["cookGame2"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:VERTICAL_SHELL_WIDTH,
				paddingTop:40,
				paddingBottom:70,
				backgroundColor:"black",
			},
		});
		PAGE_V["cookGame2"].build=function() {

			this.wBuild=true;

			setLang("C");

			this.status="normal";
			this.set({style:{minHeight:ASWindowHeight-VERTICAL_SHELL_HEAD_HEIGHT-VERTICAL_SHELL_BOTTOM_HEIGHT}});

			this.intro=BasicWord({
				size:45,
				color:"rgb(255,255,0)",
				wordC:"        在菜餚烹調過程中，火候的掌控至關重要。一個優秀的廚師，不僅需要調整火力的大小，還需要準確把控加熱時間，才能烹飪出美味可口的菜品。",
				wCenter:true,
				style:{
					marginTop:30,
					width:"85%",
				},
			});
			this.appendChild(this.intro);

			this.content=ASElement({
				nodeName:"div",
				wCenter:true,
				style:{
					position:"relative",
					width:345,
					overflow:"hidden",
				},
			});
			this.appendChild(this.content);
				this.fire=ASElement({
					nodeName:"img",
					src:"Image/Page/cookGame2/fire.gif",
					wCenter:true,
					style:{
						position:"relative",
						left:-2.5,
						width:350,
						opacity:0,
					},
					ontouchstart:function() {return false;},
					ontouchend:function() {return false;},
				});
				this.content.appendChild(this.fire);
					var ontouchstart=function() {
						this.root.fire.setTarget({opacity:1,speed_alpha:0.1});
						return false;
					};
					var ontouchend=function() {
						this.root.fire.setTarget({opacity:0,speed_alpha:0.05});
						return false;
					}
				this.button=ASElement({
					nodeName:"div",
					wCenter:true,
					style:{
						position:"relative",
						width:100,
						height:100,
						top:-155,
						left:-2,
						borderRadius:60,
						boxShadow:"0 0 0px 10px rgba(255,150,50,0.5) inset",
						backgroundColor:"rgba(255,200,100,0.2)",
					},
					root:this,
					ontouchstart:ontouchstart,
					ontouchend:ontouchend,
					onmousedown:ontouchstart,
					onmouseup:ontouchend,
				});
				this.content.appendChild(this.button);

		}

	}


	function buildPageV_LanternGame() {

		PAGE_V["lanternGame"]=ASElement({
			nodeName:"div",
			wCenter:true,
			style:{
				width:VERTICAL_SHELL_WIDTH,
				paddingTop:40,
				paddingBottom:70,
				backgroundColor:"black",
			},
		});
		PAGE_V["lanternGame"].build=function() {

			this.wBuild=true;

			setLang("C");

			this.status="normal";
			this.set({style:{minHeight:ASWindowHeight-VERTICAL_SHELL_HEAD_HEIGHT-VERTICAL_SHELL_BOTTOM_HEIGHT}});

			var stageH=VERTICAL_SHELL_WIDTH*1.1;

			this.stage=ASElement({
				nodeName:"div",
				style:{
					position:"relative",
					width:VERTICAL_SHELL_WIDTH,
					height:stageH,
				},
				ontouchmove:function(e) {
					if (!this.bd1 || !this.bd2) return;
					//alert(e.targetTouches[0].);
				},
			});
			this.appendChild(this.stage);

			var size=200;
			this.button1=ASElement({
				nodeName:"div",
				style:{
					position:"absolute",
					x:VERTICAL_SHELL_WIDTH/2-size-size/20,
					y:stageH-size,
					left:VERTICAL_SHELL_WIDTH/2-size-size/20,
					top:stageH-size,
					width:size,
					height:size,
					borderRadius:size,
					backgroundColor:"rgba(200,0,0,0.3)",
					boxShadow:"0 0 0 "+size/10+"px rgba(150,0,0,0.8) inset",
				},
				stage:this.stage,
				ontouchstart:function() {
					this.stage.bd1=true;
				},
			});
			this.stage.appendChild(this.button1);
				this.button1.light=ASElement({
					nodeName:"div",
					style:{
						width:size,
						height:size,
						borderRadius:size,
						backgroundColor:"rgba(200,0,0,0.2)",
						boxShadow:"0 0 25px 10px rgba(200,0,0,1)",
						opacity:0,
					},
				});
				this.button1.appendChild(this.button1.light);

			this.button2=ASElement({
				nodeName:"div",
				style:{
					position:"absolute",
					x:VERTICAL_SHELL_WIDTH/2+size/20,
					y:stageH-size,
					left:VERTICAL_SHELL_WIDTH/2+size/20,
					top:stageH-size,
					width:size,
					height:size,
					borderRadius:size,
					backgroundColor:"rgba(200,0,0,0.3)",
					boxShadow:"0 0 0 "+size/10+"px rgba(150,0,0,0.8) inset",
				},
				stage:this.stage,
				ontouchstart:function() {
					this.stage.bd2=true;
				},
			});
			this.stage.appendChild(this.button2);
				this.button2.light=ASElement({
					nodeName:"div",
					style:{
						width:size,
						height:size,
						borderRadius:size,
						backgroundColor:"rgba(200,0,0,0.2)",
						boxShadow:"0 0 25px 10px rgba(200,0,0,1)",
						opacity:0,
					},
				});
				this.button2.appendChild(this.button2.light);

			window.addEventListener("touchstart",function(e) {
				if (e.targetTouches.length>1) alert(e.targetTouches.length);
			});

		}

	}

	// 添加的 buildPage function 要在这里添加
	function buildPage() {

		PAGE=[];
		buildPage_Image(); // 測試中的一個功能

		buildPage_News();
		buildPage_FunctionC();
		buildPage_FunctionB();
		buildPage_FunctionS();
		buildPage_FunctionL();
		buildPage_FunctionO();

		buildPage_FunctionODetail(); // 讓老的 Function 可以有一個 Shell 展示活動詳情
		
		buildPage_Exco14();
    buildPage_Exco15();
    buildPage_Exco16(); // 后添加的两个
		buildPage_ExcoB();
		
		buildPage_Document();
		buildPage_SocietyIntroduction();
		buildPage_SocietyMission();
		buildPage_MailCuisine();
		buildPage_Sponsor();
		buildPage_Wechat();
		buildPage_Email();
		buildPage_Setting();
		buildPage_Login();
		buildPage_Logout();
		buildPage_UserProfile();

		PAGE_V=[];
		buildPageV_News();
		buildPageV_FunctionC();
		buildPageV_FunctionB();
		buildPageV_FunctionS();
		buildPageV_FunctionO();
		
		buildPageV_Exco14();
		buildPageV_Exco15();
		buildPageV_Exco16();
		buildPageV_ExcoB();
		
		buildPageV_Document();
		buildPageV_SocietyIntroduction();
		buildPageV_SocietyMission();
		buildPageV_MailCuisine();
		buildPageV_Sponsor();
		buildPageV_Wechat();
		buildPageV_Setting();
		buildPageV_Login();
		buildPageV_Logout();
		buildPageV_UserProfile();
		buildPageV_CookGame();
		buildPageV_CookGame2();
		buildPageV_LanternGame();

		for (var page in PAGE) PAGE[page].name=page;
		for (var page in PAGE_V) PAGE_V[page].name=page;

		// console.log("PAGE", PAGE);
	}


	var ShellStr=new function() {

		this.closeOnmouseover=function() {
			this.setTarget({transform:{scale:1}});
			this.pic.setTarget({opacity:1});
		}

		this.closeOnmouseout=function() {
			this.setTarget({transform:{scale:1}});
			this.pic.setTarget({opacity:0});
		}

		this.closeOnmousedown=function() {
			this.setTarget({transform:{scale:0.9}});
			this.pic.setTarget({opacity:1});
		}

		this.closeOnmouseup=function() {
			this.setTarget({transform:{scale:1}});
			this.pic.setTarget({opacity:1});
		}

		this.closeOnclick=function() {
			goBack();
		}

		this.removeSelf=function() {
			this.slideC.scrollTopB=this.slideC.scrollTop;
			if (this.parentNode) this.parentNode.removeChild(this);
		}

		this.resize=function() {
			this.set({style:{
				width:ASWindowWidth,
				height:ASWindowHeight,
				left:-ASWindowWidth/2,
				top:-ASWindowHeight/2,
			}});
			this.slide.resize({heightA:ASWindowHeight-DEFAULT_SHELL_HEAD_HEIGHT});
			this.head.set({style:{
				left:(ASWindowWidth-this.widthA)/2,
			}});
			this.slide.set({style:{
				left:(ASWindowWidth-this.widthA)/2,
			}});
			this.bottom.set({style:{
				minHeight:ASWindowHeight-DEFAULT_SHELL_HEAD_HEIGHT-DEFAULT_SHELL_BOTTOM_HEIGHT,
				maxHeight:ASWindowHeight-DEFAULT_SHELL_HEAD_HEIGHT,
				left:(ASWindowWidth-this.widthA)/2,
			}});
			this.copyright.set({style:{
				left:ASWindowWidth/2-500,
				top:ASWindowHeight-30,
			}});

		}

		this.pageResize=function() {
			this.slide.onscroll();
		}

		this.slideOnscroll=function() {
			this.root.bottom.set({style:{
				height:ASGetElementHeight(this.root.context)-this.container.scrollTop-DEFAULT_SHELL_BOTTOM_HEIGHT,
			}});
		}

		this.appear=function() {
			if (!this.page.wBuild) this.page.build();
			if (this.page.appear) this.page.appear();
			this.set({style:{
				opacity:1,
			}});
			this.bottom.setTarget({
				opacity:1,
				transform:{
					translateY:0,
				}
			});
			this.setTimeout(function(){
				this.head.setTarget({opacity:1,speed_alpha:0.07});
			},500);
			this.setTimeout(function(){
				this.slideC.setTarget({opacity:1,speed_alpha:0.1});
			},750);
			this.slideC.scrollTop=this.slideC.scrollTopB;
		}

		this.appearFromBottom=function() {
			this.set({style:{
				opacity:0,
			}});
			this.bottom.set({style:{transform:{
				translateY:ASWindowHeight,
			}}});
			this.head.set({style:{
				opacity:0,
			}});
			this.slideC.set({style:{
				opacity:0,
			}});
		}

		this.appearEasy=function() {
			this.set({style:{
				opacity:0,
			}});
			this.bottom.set({style:{
				opacity:0,
				transform:{
					translateY:0,
				}
			}});
			this.head.set({style:{
				opacity:0,
			}});
			this.slideC.set({style:{
				opacity:0,
			}});
		}

		this.disappear=function() {
			this.setTarget({
				opacity:0,
			});
			if (this.page.disappear) this.page.disappear();
			this.setTimeout(this.removeSelf,500);
		}

		this.disappearEasy=function() {
			this.head.setTarget({
				opacity:0,
			});
			this.bottom.setTarget({
				opacity:0,
			});
			this.slideC.setTarget({
				opacity:0,
			});
			if (this.page.disappear) this.page.disappear();
			this.setTimeout(this.removeSelf,500);
		}

	}


	function Shell(buildP) {

		if (!("widthA" in buildP)) buildP.widthA=DEFAULT_SHELL_WIDTH;

		var currentShellHeight;
		if (!buildP.titleC) {
			// console.log("No Title")
			currentShellHeight = DEFAULT_SHELL_HEAD_HEIGHT/4;
			// currentShellHeight = DEFAULT_SHELL_HEAD_HEIGHT;
		} else {
			currentShellHeight = DEFAULT_SHELL_HEAD_HEIGHT;
		}

		var target=ASElement({
			nodeName:"div",
			style:{
				position:"absolute",
				left:-ASWindowWidth/2,
				top:-ASWindowHeight/2,
				width:ASWindowWidth,
				height:ASWindowHeight,
				backgroundColor:"rgba(100,100,100,0.8)",
			},
		});
		
		target.type="shell";
		target.widthA=buildP.widthA;
		target.name=buildP.name;
		target.backTo=buildP.backTo;
		target.page=buildP.pageD;
		target.page.root=target;

			target.copyright=ASElement({
				nodeName:"p",
				innerHTML:"©2019-2020 Chinese Folk Art Society, HKUSTSU. All Right Reserved.",
				style:{
					position:"absolute",
					fontFamily:DEFAULT_FONT,
					fontSize:15,
					color:"white",
					width:1000,
					left:ASWindowWidth/2-500,
					top:ASWindowHeight-30,
					textAlign:"center",
					textShadow:"2px 2px 5px rgba(0,0,0,0.8)",
					pointerEvents:"none",
				},
			});
			target.appendChild(target.copyright);

			target.bottom=ASElement({
				nodeName:"div",
				style:{
					position:"relative",
					left:(ASWindowWidth-target.widthA)/2,
					top:currentShellHeight,
					backgroundColor:"rgb(250,250,250)",
					width:target.widthA,
					minHeight:ASWindowHeight-currentShellHeight-DEFAULT_SHELL_BOTTOM_HEIGHT,
					maxHeight:ASWindowHeight-currentShellHeight,
					boxShadow:"0px 0px 20px rgba(0,0,0,0.8)",
				}
			});
			target.appendChild(target.bottom);

			target.slide=BasicScroll({
				widthA:target.widthA,
				heightA:ASWindowHeight-currentShellHeight,
				style:{
					position:"absolute",
					top:currentShellHeight,
					left:(ASWindowWidth-target.widthA)/2,
				},
				onscroll:ShellStr.slideOnscroll,
			});
			target.appendChild(target.slide);
			target.slide.root=target;
			target.slideC=target.slide.container;
			target.context=target.slide.context;
				target.container=ASElement({
					nodeName:"div",
					style:{
						width:"100%",
						marginBottom:DEFAULT_SHELL_BOTTOM_HEIGHT,
					},
				});
				target.context.appendChild(target.container);
				if (target.page) {
					target.container.appendChild(target.page);
				}

			target.head=ASElement({
				nodeName:"div",
				style:{
					position:"absolute",
					left:(ASWindowWidth-target.widthA)/2,
					top:0,
					width:target.widthA,
					height:DEFAULT_SHELL_HEAD_HEIGHT,
					pointerEvents:"none",
				},
			});
			target.appendChild(target.head);

				target.head.word=BasicWord({
					size:75,
					color:"white",
					font:"YouYuan",
					wordC:buildP.titleC,
					wordE:buildP.titleE,
					style:{
						position:"absolute",
						fontWeight:"bold",
						left:30,
						bottom:20,
						textShadow:"0px 0px 8px rgba(0,0,0,0.8)",
						letterSpacingC:25,
						pointerEvents:"none",
					},
				});
				target.head.appendChild(target.head.word);

			target.close=ASElement({
				nodeName:"div",
				style:{
					position:"absolute",
					right:20,
					top:20,
					transformOrigin:"50% 50%",
					width:45,
					height:45,
					backgroundImage:"url('"+ASGetSrcByName("shellClose1")+"')",
					backgroundSize:"100% 100%",
					cursor:"pointer",
				},
				onmouseover:ShellStr.closeOnmouseover,
				onmouseout:ShellStr.closeOnmouseout,
				onmousedown:ShellStr.closeOnmousedown,
				onmouseup:ShellStr.closeOnmouseup,
				onclick:ShellStr.closeOnclick,
			});
			target.appendChild(target.close);
				target.close.pic=ASElement({
					nodeName:"img",
					src:ASGetSrcByName("shellClose2"),
					style:{
						width:"100%",
						height:"100%",
						opacity:0,
					},
				});
				target.close.appendChild(target.close.pic);

		target.removeSelf=ShellStr.removeSelf;
		target.resize=ShellStr.resize;
		target.pageResize=ShellStr.pageResize;
		target.appear=ShellStr.appear;
		target.appearFromBottom=ShellStr.appearFromBottom;
		target.appearEasy=ShellStr.appearEasy;
		target.disappear=ShellStr.disappear;
		target.disappearEasy=ShellStr.disappearEasy;

		delete buildP.page;
		target.set(buildP);
		return(target);

	}


	var ShellVStr=new function() {

		this.resize=function() {
			this.set({style:{
				width:ASWindowWidth,
				height:ASWindowHeight,
				left:-ASWindowWidth/2,
				top:-ASWindowHeight/2,
			}});
			this.slide.resize({heightA:ASWindowHeight-VERTICAL_SHELL_HEAD_HEIGHT-VERTICAL_SHELL_BOTTOM_HEIGHT});
			this.head.set({style:{
				left:(ASWindowWidth-this.widthA)/2,
			}});
			this.slide.set({style:{
				left:(ASWindowWidth-this.widthA)/2,
			}});
			this.bottom.set({style:{
				height:ASWindowHeight-VERTICAL_SHELL_HEAD_HEIGHT-VERTICAL_SHELL_BOTTOM_HEIGHT,
				left:(ASWindowWidth-this.widthA)/2,
			}});
			this.copyright.set({style:{
				left:ASWindowWidth/2-500,
				top:ASWindowHeight-30,
			}});

		}

	}


	function ShellV(buildP) {

		if (!("widthA" in buildP)) buildP.widthA=VERTICAL_SHELL_WIDTH;

		var target=ASElement({
			nodeName:"div",
			style:{
				position:"absolute",
				left:-ASWindowWidth/2,
				top:-ASWindowHeight/2,
				width:ASWindowWidth,
				height:ASWindowHeight,
				backgroundColor:"rgba(100,100,100,0.8)",
			},
		});
		target.type="shell";
		target.widthA=buildP.widthA;
		target.name=buildP.name;
		target.backTo=buildP.backTo;
		target.page=buildP.pageV;
		target.page.root=target;

			target.copyright=ASElement({
				nodeName:"p",
				innerHTML:"©2019-2020 Chinese Folk Art Society, HKUSTSU. All Right Reserved.",
				style:{
					position:"absolute",
					fontFamily:DEFAULT_FONT,
					fontSize:15,
					color:"white",
					width:1000,
					left:ASWindowWidth/2-500,
					top:ASWindowHeight-30,
					textAlign:"center",
					textShadow:"2px 2px 5px rgba(0,0,0,0.8)",
					pointerEvents:"none",
				},
			});
			target.appendChild(target.copyright);

			target.bottom=ASElement({
				nodeName:"div",
				style:{
					position:"relative",
					left:(ASWindowWidth-target.widthA)/2,
					top:VERTICAL_SHELL_HEAD_HEIGHT,
					backgroundColor:"rgb(250,250,250)",
					width:target.widthA,
					height:ASWindowHeight-VERTICAL_SHELL_HEAD_HEIGHT-VERTICAL_SHELL_BOTTOM_HEIGHT,
					boxShadow:"0px 0px 20px rgba(0,0,0,0.8)",
				}
			});
			target.appendChild(target.bottom);

			target.slide=BasicScroll({
				widthA:target.widthA,
				heightA:ASWindowHeight-VERTICAL_SHELL_HEAD_HEIGHT-VERTICAL_SHELL_BOTTOM_HEIGHT,
				style:{
					position:"absolute",
					top:VERTICAL_SHELL_HEAD_HEIGHT,
					left:(ASWindowWidth-target.widthA)/2,
				},
			});
			target.appendChild(target.slide);
			target.slide.root=target;
			target.slideC=target.slide.container;
			target.context=target.slide.context;
				target.container=ASElement({
					nodeName:"div",
					style:{
						width:"100%",
					},
				});
				target.context.appendChild(target.container);
				if (target.page) {
					target.container.appendChild(target.page);
				}

			target.head=ASElement({
				nodeName:"div",
				style:{
					position:"absolute",
					left:(ASWindowWidth-target.widthA)/2,
					top:0,
					width:target.widthA,
					height:VERTICAL_SHELL_HEAD_HEIGHT,
					pointerEvents:"none",
				},
			});
			target.appendChild(target.head);

				target.head.word=BasicWord({
					size:100,
					color:"white",
					font:"YouYuan",
					wordC:buildP.titleC,
					wordE:buildP.titleE,
					style:{
						position:"absolute",
						fontWeight:"bold",
						left:50,
						bottom:40,
						textShadow:"0px 0px 8px rgba(0,0,0,0.8)",
						letterSpacingC:25,
						pointerEvents:"none",
					},
				});
				target.head.appendChild(target.head.word);

			target.close=ASElement({
				nodeName:"div",
				style:{
					position:"absolute",
					right:20,
					top:20,
					transformOrigin:"50% 50%",
					width:VERTICAL_SHELL_CLOSE_SIZE,
					height:VERTICAL_SHELL_CLOSE_SIZE,
					backgroundImage:"url('"+ASGetSrcByName("shellClose1")+"')",
					backgroundSize:"100% 100%",
					cursor:"pointer",
				},
				onmouseover:ShellStr.closeOnmouseover,
				onmouseout:ShellStr.closeOnmouseout,
				onmousedown:ShellStr.closeOnmousedown,
				onmouseup:ShellStr.closeOnmouseup,
				onclick:ShellStr.closeOnclick,
			});
			target.appendChild(target.close);
				target.close.pic=ASElement({
					nodeName:"img",
					src:ASGetSrcByName("shellClose2"),
					style:{
						width:"100%",
						height:"100%",
						opacity:0,
					},
				});
				target.close.appendChild(target.close.pic);

		target.removeSelf=ShellStr.removeSelf;
		target.resize=ShellVStr.resize;
		target.pageResize=ShellStr.pageResize;
		target.appear=ShellStr.appear;
		target.appearFromBottom=ShellStr.appearFromBottom;
		target.appearEasy=ShellStr.appearEasy;
		target.disappear=ShellStr.disappear;
		target.disappearEasy=ShellStr.disappearEasy;

		var page1=target.page;
		target.set(buildP);
		target.page=page1;
		return(target);

	}


	function buildShell_FunctionO() {
		var data=ASGetSourceByName("data0").getNodeByName("functionO");

		for (var o=0;o<data.node.length;o++) {

			var year = data.node[o]

			for (var i=0; i < year.node.length; i++) {
				
				var func = year.node[i];
				
				var pageName = year.nodeName + "Detail" + i;
			
				// 這裡是這個 Shell 的信息，標題在此處修改
				// 內容是在 buildPage_FunctionODetail 裡面
				var buildP={
					name:"Function Detail",
					titleC:func.getAttribute('nameC'),
					titleE:func.getAttribute('nameE'),
					pageD:PAGE[pageName],
					pageV:PAGE_V[pageName],
				};

				SHELL_P[pageName]=buildP;
			
			}
		}
	}

	function buildShell() {

		SHELL={};
		SHELL_V={};
		SHELL_P={};
		var data=ASGetSourceByName("data0").getNodeByName("shell");

		for (var i=0;i<data.node.length;i++) {
			var shell=data.node[i];
			var name=shell.nodeName;
			var buildP={
				name:name,
				titleC:shell.getAttribute("titleC"),
				titleE:shell.getAttribute("titleE"),
				pageD:PAGE[shell.getAttribute("page")],
				pageV:PAGE_V[shell.getAttribute("page")],
			};
			if (shell.getAttribute("wLogin")=="true") buildP.wLogin=true;

			SHELL_P[name]=buildP;

		}

		buildShell_FunctionO();

		// console.log("SHELL_P:", SHELL_P);

	}


	var FrameStr=new function() {

		this.linkOnmouseover=function() {
			this.bottom.setTarget({opacity:1});
			this.lineW.setTarget({opacity:1});
			this.lineB.setTarget({opacity:0});
		}

		this.linkOnmouseout=function() {
			this.bottom.setTarget({opacity:0});
			this.lineW.setTarget({opacity:1});
			this.lineB.setTarget({opacity:0});
		}

		this.linkOnmousedown=function() {
			this.bottom.setTarget({opacity:0});
			this.lineW.setTarget({opacity:0});
			this.lineB.setTarget({opacity:1});
		}

		this.linkOnmouseup=function() {
			this.bottom.setTarget({opacity:1});
			this.lineW.setTarget({opacity:1});
			this.lineB.setTarget({opacity:0});
		}

		this.linkOnclick=function() {
			this.onmouseout();
			changeURL(this.linkTo);
		}

		this.removeSelf=function() {
			this.slideC.scrollTopB=this.slideC.scrollTop;
			if (this.parentNode) this.parentNode.removeChild(this);
		}

		this.resize=function() {
			this.set({style:{
				width:this.widthA,
				height:ASWindowHeight-DEFAULT_HEAD_HEIGHT,
				left:-this.widthA/2,
				top:-ASWindowHeight/2+DEFAULT_HEAD_HEIGHT,
			}});
			this.slide.resize({heightA:ASWindowHeight-DEFAULT_HEAD_HEIGHT});
			this.bottom.set({style:{
				minHeight:ASWindowHeight-DEFAULT_HEAD_HEIGHT-DEFAULT_FRAME_BOTTOM_HEIGHT,
				maxHeight:ASWindowHeight-DEFAULT_HEAD_HEIGHT,
			}});
			this.jump.set({style:{
				maxHeight:ASWindowHeight-DEFAULT_FRAME_HEAD_MINHEIGHT,
				height:ASGetElementHeight(this.bottom)-ASGetElementHeight(this.head),
			}});
			this.jumpC.set({style:{
				height:ASGetElementHeight(this.bottom)-ASGetElementHeight(this.head),
			}});
		}

		this.setPage=function(page) {
			if (this.pageC==page) return;
			if (this.pageC) this.pageC.scrollB=this.slideC.scrollTop;
			if (!page.scrollB) page.scrollB=0;
			if (this.ASRoot!=ROOT) this.pageC=null;
			if (!this.pageC) {
				this.container.clearChild();
				this.container.appendChild(page);
				this.bottom.set({style:{
					height:ASGetElementHeight(this.context)-this.slideC.scrollTop-DEFAULT_FRAME_BOTTOM_HEIGHT,
				}});
				this.jump.set({style:{
					height:ASGetElementHeight(this.bottom)-ASGetElementHeight(this.head),
				}});
				this.jumpC.set({style:{
					height:ASGetElementHeight(this.bottom)-ASGetElementHeight(this.head),
				}});
				if (this.jumpType=="anchor") {
					this.jump.content.posB=[];
					for (var i=0;i<page.anchor.length;i++) {
						this.jump.content.posB[i]=page.anchor[i].pos;
					}
				}
			} else {
				if (!page.wBuild) page.build();
				if (page.appear) page.appear();
				if (this.pageC.disappear) this.pageC.disappear();
				this.pageC.setTarget({opacity:0});
				var ruler=ASElement({nodeName:"div",});
				ruler.appendChild(page);
				var heightB=ASGetElementHeight(ruler)+this.head.height0-page.scrollB;
				heightB=Math.max(heightB,ASWindowHeight-DEFAULT_HEAD_HEIGHT-DEFAULT_FRAME_BOTTOM_HEIGHT);
				heightB=Math.min(heightB,ASWindowHeight-DEFAULT_HEAD_HEIGHT);
				this.bottom.setTarget({
					height:heightB,
				});
				var heightH=this.head.height0-page.scrollB;
				heightH=Math.max(heightH,DEFAULT_FRAME_HEAD_MINHEIGHT);
				this.head.setTarget({
					height:heightH,
				});
				this.jump.setTarget({
					top:heightH,
					height:heightB-heightH,
				});
				this.jumpC.setTarget({
					height:heightB-heightH,
				});
				this.setTimeout(function() {
					this.head.style.transition="";
					this.jump.style.transition="";
					this.jumpC.style.transition="";
					this.bottom.style.transition="";
					this.container.clearChild();
					this.container.appendChild(this.pageC);
					this.pageC.set({style:{opacity:0}});
					this.slideC.scrollTop=this.pageC.scrollB;
					this.pageC.setTimeout(function(){this.setTarget({opacity:1});},10);
				},550);
			}
			this.pageC=page;
			this.pageC.root=this;
		}

		this.pageResize=function(page) {
			if (!page) page=this.pageC;
			if (page!=this.pageC) return;
			this.slideC.onscroll();
		}

		this.updatePage=function() {
			var block=[];
			for (var i=0;i<this.page.length;i++) {
				if (!this.page[i].wHide) {
					block[block.length]=this.page[i];
				}
			}
			if (this.jump.content) this.jumpC.removeChild(this.jump.content);
			this.jump.content=PageList({
				block:block,
				style:{
					position:"relative",
					left:2.5,
					top:0,
				},
				onchoose:function(w) {
					this.root.setPage(this.block[w].value);
				},
				root:this,
			});
			this.jumpC.appendChild(this.jump.content);
			var k=-1;
			for (var i=0;i<this.jump.content.block.length;i++) {
				if (this.jump.content.block[i].value==this.pageC) {
					k=i;
					break;
				}
			}
			if (k==-1) this.setPage(this.jump.content.block[0].value);
			else this.jump.content.changeBlock(k);
		}

		this.slideOnscroll=function() {
			this.root.bottom.set({style:{
				height:ASGetElementHeight(this.root.context)-this.container.scrollTop-DEFAULT_FRAME_BOTTOM_HEIGHT,
			}});
			this.root.head.set({style:{
				height:this.root.head.height0-this.container.scrollTop,
			}});
			if (this.root.head.link) {
				var s=Math.max(DEFAULT_FRAME_HEAD_MINHEIGHT,this.root.head.height0-this.container.scrollTop);
				this.root.head.link.set({style:{
					backgroundPosition:"50% "+(DEFAULT_FRAME_LINK_HEIGHT-s)+"px",
				}});
			}
			this.root.jump.set({style:{
				top:this.root.head.offsetHeight,
			}});
			this.root.jump.resize({
				heightA:ASGetElementHeight(this.root.bottom)-ASGetElementHeight(this.root.head),
			});
			if (this.root.jumpType=="anchor") {
				for (var i=0;i<this.root.pageC.anchor.length;i++) {
					if (this.root.pageC.anchor[i].pos0-this.container.scrollTop<0 && this.root.pageC.anchor[i].pos1-this.container.scrollTop>0) {
						this.root.jump.content.changeBlock(i);
					}
				}
			}
		}

		this.dealJumpPros=function() {
			if (this.jumpType=="page" && JumpPros["page"]) {
				var k=-1;
				for (var i=0;i<this.page.length;i++) {
					if (this.page[i].name==JumpPros["page"]) {
						k=i;
						break;
					}
				}
				if (k==-1) return;
				if (this.page[k].wHide) return;
				this.setPage(this.page[k]);
				if (this.jumpType=="page") {
					for (var i=0;i<this.jump.content.block.length;i++) {
						if (this.jump.content.block[i].value==this.pageC) {
							this.jump.content.changeBlock(i);
							break;
						}
					}
				}
			}
		}

		this.appear=function() {

			INTERFACE_L.appear();
			this.setTarget({
				transform:{
					rotateY:0,
					scaleX:1,
					scaleY:1,
					translateX:0,
					translateY:0,
				},
				opacity:1,
				time:1000,
			});
			this.bottom.setTarget({transform:{
				translateY:0,
			}});
			this.setTimeout(function(){
				this.head.setTarget({opacity:1,speed_alpha:0.07});
			},500);
			this.setTimeout(function(){
				this.jump.setTarget({opacity:1,speed_alpha:0.1});
			},1000);
			this.setTimeout(function(){
				this.slideC.setTarget({opacity:1,speed_alpha:0.1});
			},1250);
			this.slideC.scrollTop=this.slideC.scrollTopB;

			if (this.scene) this.setTimeout(function() {
				SCENE.change(this.scene);
			},800);

		}

		this.appearFromTop=function() {
			this.set({style:{
				top:-ASWindowHeight/2+DEFAULT_HEAD_HEIGHT,
				transform:{
					translateX:0,
					translateY:0,
					scaleX:1,
					scaleY:1,
					rotateY:0,
				},
			}});
			this.bottom.set({style:{transform:{
				translateY:-ASWindowHeight,
			}}});
			this.head.set({style:{
				opacity:0,
			}});
			this.jump.set({style:{
				opacity:0,
			}});
			this.slideC.set({style:{
				opacity:0,
			}});
		}

		this.appearRolling=function(target) {
			this.set({style:{
				top:-ASWindowHeight/2+DEFAULT_HEAD_HEIGHT,
				transform:{
					translateX:target.x0+target.widthA/2,
					translateY:target.y0+target.heightA/2,
					scaleX:target.widthA/this.widthA,
					scaleY:target.heightA/(ASWindowHeight-DEFAULT_HEAD_HEIGHT),
					rotateY:-179,
				},
			}});
			this.jump.set({style:{
				opacity:0,
			}});
			this.slideC.set({style:{
				opacity:0,
			}});
		}

		this.appearTurning=function() {
			this.set({style:{
				top:-ASWindowHeight/2+DEFAULT_HEAD_HEIGHT,
				transform:{
					translateX:-300,
					translateY:0,
					scaleX:0.6,
					scaleY:0.6,
					rotateY:30,
				},
				opacity:0,
			}});
			this.jump.set({style:{
				opacity:0,
			}});
			this.slideC.set({style:{
				opacity:0,
			}});
		}

		this.disappearToTop=function() {
			this.setTarget({
				top:-ASWindowHeight*1.6,
			});
			this.setTimeout(this.removeSelf,500);
		}

		this.disappearRolling=function(target) {
			this.set({style:{
				transform:{
					rotateY:0,
				},
			}});
			this.setTimeout(function() {this.setTarget({
				transform:{
					translateX:target.x0+target.widthA/2,
					translateY:target.y0+target.heightA/2-DEFAULT_HEAD_HEIGHT*0.5,
					scaleX:target.widthA/this.widthA,
					scaleY:target.heightA/(ASWindowHeight-DEFAULT_HEAD_HEIGHT),
					rotateY:-179,
				},
				time:1000,
			})},30);
			this.setTimeout(this.removeSelf,130);
		}

		this.disappearTurning=function() {
			this.setTarget({
				transform:{
					translateX:300,
					rotateY:-30,
					scaleX:0.6,
					scaleY:0.6,
				},
				opacity:0,
			});
			this.setTimeout(this.removeSelf,250);
		}

	}


	function Frame(buildP) {

		var widthA=buildP.widthA;
		if (!widthA) widthA=DEFAULT_FRAME_WIDTH;

		var target=ASElement({
			nodeName:"div",
			style:{
				position:"absolute",
				transformOrigin:"50% 50%",
				transform:{
					perspective:ASPerspective,
				},
				left:-widthA/2,
				top:-ASWindowHeight/2+DEFAULT_HEAD_HEIGHT,
				width:widthA,
				height:ASWindowHeight-DEFAULT_HEAD_HEIGHT,
			},
		});
		target.type="frame";
		target.name=buildP.name;
		target.widthA=widthA;
		target.backTo=buildP.backTo;
		target.jumpType=buildP.jumpType;
		target.page=buildP.pageD;

			target.bottom=ASElement({
				nodeName:"div",
				style:{
					position:"relative",
					backgroundColor:"rgb(250,250,250)",
					overflowX:"hidden",
					width:target.widthA,
					minHeight:ASWindowHeight-DEFAULT_HEAD_HEIGHT-DEFAULT_FRAME_BOTTOM_HEIGHT,
					maxHeight:ASWindowHeight-DEFAULT_HEAD_HEIGHT,
					boxShadow:"0px 0px 20px rgba(0,0,0,0.8)",
				}
			});
			target.appendChild(target.bottom);

			target.slide=BasicScroll({
				heightA:ASWindowHeight-DEFAULT_HEAD_HEIGHT,
				style:{
					position:"absolute",
					top:0,
				},
				onscroll:FrameStr.slideOnscroll,
			});
			target.appendChild(target.slide);
			target.slide.root=target;
			target.slideC=target.slide.container;
			target.context=target.slide.context;
				target.container=ASElement({
					nodeName:"div",
					style:{
						width:"100%",
						marginTop:DEFAULT_FRAME_HEAD_MINHEIGHT,
						marginBottom:DEFAULT_FRAME_BOTTOM_HEIGHT,
					},
				});
				target.context.appendChild(target.container);

			target.head=ASElement({
				nodeName:"div",
				style:{
					position:"absolute",
					left:0,
					top:0,
					width:target.widthA,
					minHeight:DEFAULT_FRAME_HEAD_MINHEIGHT,
				},
			});
			target.appendChild(target.head);

				target.head.pic=ASElement({
					nodeName:"img",
					src:buildP.titleImg,
					onload:function() {
						var scale=this.root.widthA/this.naturalWidth;
						this.root.head.set({style:{
							backgroundImage:"url("+this.src+")",
							backgroundSize:this.naturalWidth*scale+"px "+this.naturalHeight*scale+"px",
							height:this.naturalHeight*scale,
						}});
						this.root.head.height0=this.naturalHeight*scale;
						this.root.container.set({style:{
							marginTop:this.root.head.height0,
						}});
						this.root.bottom.set({style:{
							height:ASGetElementHeight(this.root.context)-DEFAULT_FRAME_BOTTOM_HEIGHT,
						}});
						this.root.jump.set({style:{
							top:this.root.head.height0,
							height:ASGetElementHeight(this.root.bottom)-this.root.head.height0,
						}});
						this.root.jumpC.set({style:{
							height:ASGetElementHeight(this.root.bottom)-this.root.head.height0,
						}});

					}
				});
				target.head.pic.root=target;

				target.head.divideLine=ASElement({
					nodeName:"img",
					src:ASGetSrcByName("frameDivideBar"),
					style:{
						position:"absolute",
						bottom:-1,
						width:"100%",
					},
				});
				target.head.appendChild(target.head.divideLine);

				target.head.word=BasicWord({
					size:65,
					color:"white",
					font:"YouYuan",
					wordC:buildP.titleC,
					wordE:buildP.titleE,
					style:{
						position:"absolute",
						fontWeight:"bold",
						right:60,
						marginBottom:5,
						bottom:20,
						textShadow:"0px 0px 8px rgba(0,0,0,0.8)",
						letterSpacingC:25,
						pointerEvents:"none",
					},
				});
				target.head.appendChild(target.head.word);

			var wLink=false;
			for (;;) {
				if (!target.backTo) break;
				var cardBoard=ASGetSourceByName("data0").getNodeByName("cardBoard").getNodeByName(target.backTo);
				if (!cardBoard) break;
				var yes=false;
				var cards=cardBoard.getNodeByName("card");
				for (var i=0;i<cards.node.length;i++) {
					if (cards.node[i].getAttribute("linkTo")==target.name) {
						yes=true;
						break;
					}
				}
				if (!yes) break;
				wLink=true;
				break;
			}
			if (wLink) {

				target.head.word.set({style:{
					bottom:65,
				}});

				target.head.link=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						width:target.widthA,
						height:DEFAULT_FRAME_LINK_HEIGHT,
						bottom:12,
					},
				});
				target.head.appendChild(target.head.link);

					target.head.pic2=ASElement({
						nodeName:"img",
						src:buildP.titleImg.replace("title","title2"),
						onload:function() {
							var scale=this.root.widthA/this.naturalWidth;
							this.root.head.link.set({style:{
								backgroundImage:"url("+this.src+")",
								backgroundSize:this.naturalWidth*scale+"px "+this.naturalHeight*scale+"px",
								backgroundPosition:"50% 100%",
							}});
						}
					});
					target.head.pic2.root=target;

					target.head.linkC=[];
					var cardBoard=ASGetSourceByName("data0").getNodeByName("cardBoard").getNodeByName(target.backTo);
					var cards=cardBoard.getNodeByName("card");
					var widthA=0;
					for (var i=0,w=-1;i<cards.node.length;i++) {

						if (!cards.node[i].getAttribute("linkTo")) continue;
						if (!ASGetSourceByName("data0").getNodeByName("frame").getNodeByName(cards.node[i].getAttribute("linkTo"))
							&& !ASGetSourceByName("data0").getNodeByName("cardBoard").getNodeByName(cards.node[i].getAttribute("linkTo"))) continue;
						w++;
						target.head.linkC[w]=ASElement({
							nodeName:"div",
							style:{
								position:"relative",
								height:DEFAULT_FRAME_LINK_HEIGHT,
								textAlign:"center",
								backgroundColor:"rgba(0,0,0,0.4)",
							},
						});
						target.head.link.appendChild(target.head.linkC[w]);

							target.head.linkC[w].bottom=ASElement({
								nodeName:"div",
								style:{
									position:"absolute",
									left:0,
									opacity:0,
									width:"100%",
									height:"100%",
									backgroundColor:"rgba(255,255,255,0.2)",
								},
							});
							target.head.linkC[w].appendChild(target.head.linkC[w].bottom);
							target.head.linkC[w].lineW=ASElement({
								// nodeName:"img",
								// src:ASGetSrcByName("frameLinkLineW"),
								// style:{
								// 	position:"absolute",
								// 	left:0,
								// 	opacity:1,
								// 	width:"100%",
								// 	height:"40%",
								// },
								nodeName:"div",
								style:{
									position:"absolute",
									left:0,
									opacity:1,
									width:"100%",
									height:"100%",
									backgroundColor:"rgba(255,255,255,0.2)",
								},
							});
							target.head.linkC[w].appendChild(target.head.linkC[w].lineW);
							target.head.linkC[w].lineB=ASElement({
								// nodeName:"img",
								// src:ASGetSrcByName("frameLinkLineB"),
								// style:{
								// 	position:"absolute",
								// 	left:0,
								// 	opacity:0,
								// 	width:"100%",
								// 	height:"100%",
								// },
								style:{
									position:"absolute",
									left:0,
									opacity:0,
									width:"100%",
									height:"100%",
									backgroundColor:"rgba(0,0,0,0.2)",
								},
							});
							target.head.linkC[w].appendChild(target.head.linkC[w].lineB);
							target.head.linkC[w].word=BasicWord({
								size:26,
								wordC:cards.node[i].getAttribute("titleC"),
								wordE:cards.node[i].getAttribute("titleE"),
								color:"white",
								letterSpacingC:15,
								ignoreM:true,
								style:{
									position:"relative",
									cursor:"pointer",
									top:7,
								}
							});
							target.head.linkC[w].appendChild(target.head.linkC[w].word);

						widthA+=target.head.linkC[w].word.widthA;

						if (cards.node[i].getAttribute("linkTo")!=target.name) {
							target.head.linkC[w].onmouseover=FrameStr.linkOnmouseover;
							target.head.linkC[w].onmouseout=FrameStr.linkOnmouseout;
							target.head.linkC[w].onmousedown=FrameStr.linkOnmousedown;
							target.head.linkC[w].onmouseup=FrameStr.linkOnmouseup;
							target.head.linkC[w].onclick=FrameStr.linkOnclick;
							target.head.linkC[w].linkTo=cards.node[i].getAttribute("linkTo");
							target.head.linkC[w].set({style:{cursor:"pointer"}});
						} else {
							target.head.linkC[w].lineB.set({style:{opacity:1}});
							target.head.linkC[w].lineW.set({style:{opacity:0}});
						}

					}
					for (var i=0;i<target.head.linkC.length;i++) {
						target.head.linkC[i].set({style:{
							width:target.widthA/target.head.linkC.length,
						}});
					}

			}

			target.jump=BasicScroll({
				widthA:DEFAULT_FRAME_JUMP_WIDTHL,
				style:{
					position:"absolute",
					left:0,
				},
			});
			target.appendChild(target.jump);
				target.jumpC=target.jump.container;
				target.jumpL=ASElement({
					nodeName:"img",
					src:ASGetSrcByName("frameDivideLine"),
					style:{
						position:"absolute",
						width:3,
						height:"100%",
						right:0,
						top:0,
					},
				});
				target.jump.appendChild(target.jumpL);
			if (buildP.jumpType=="anchor") {
				target.jump.resize({
					widthA:DEFAULT_FRAME_JUMP_WIDTHA,
				});
				target.jump.content=AnchorList({
					block:target.page[0].anchor,
					style:{
						position:"relative",
						left:5,
						top:0,
					},
					onchoose:function(w) {
						this.root.slide.scrollTo((this.root.pageC.anchor[w].pos0+this.root.pageC.anchor[w].pos1)/2);
					},
					root:target,
				});
				target.jumpC.appendChild(target.jump.content);
			}
			if (buildP.jumpType=="page") {
				target.jump.resize({
					widthA:DEFAULT_FRAME_JUMP_WIDTHA,
				});
				target.updatePage=FrameStr.updatePage;
			}

			target.slide.resize({widthA:target.widthA-ASGetElementWidth(target.jump)});
			target.slide.set({style:{left:ASGetElementWidth(target.jump)}});

		target.removeSelf=FrameStr.removeSelf;
		target.resize=FrameStr.resize;
		target.dealJumpPros=FrameStr.dealJumpPros;
		target.appear=FrameStr.appear;
		target.appearFromTop=FrameStr.appearFromTop;
		target.appearRolling=FrameStr.appearRolling;
		target.appearTurning=FrameStr.appearTurning;
		target.disappearToTop=FrameStr.disappearToTop;
		target.disappearRolling=FrameStr.disappearRolling;
		target.disappearTurning=FrameStr.disappearTurning;
		target.setPage=FrameStr.setPage;
		target.pageResize=FrameStr.pageResize;

		if (target.page[0]) target.setPage(target.page[0]);
		if (target.jumpType=="page") target.updatePage();

		target.set(buildP);
		return(target);

	}


	var FrameVStr=new function() {

		this.resize=function() {
			this.set({style:{
				width:this.widthA,
				height:ASWindowHeight-VERTICAL_HEAD_HEIGHT,
				left:-this.widthA/2,
				top:-ASWindowHeight/2+VERTICAL_HEAD_HEIGHT,
			}});
			this.slide.resize({heightA:ASWindowHeight-VERTICAL_HEAD_HEIGHT-VERTICAL_FRAME_BOTTOM_HEIGHT});
			this.bottom.set({style:{
				height:ASWindowHeight-VERTICAL_HEAD_HEIGHT-VERTICAL_FRAME_BOTTOM_HEIGHT,
			}});
			this.jump.set({style:{
				height:ASGetElementHeight(this.bottom)-ASGetElementHeight(this.head),
			}});
			this.jumpC.set({style:{
				height:ASGetElementHeight(this.bottom)-ASGetElementHeight(this.head),
			}});
		}

		this.setPage=function(page) {
			if (this.pageC==page) return;
			if (this.pageC) this.pageC.scrollB=this.slideC.scrollTop;
			if (!page.scrollB) page.scrollB=0;
			if (!this.pageC) {
				this.container.appendChild(page);
				if (this.jumpType=="anchor") {
					this.jump.content.posB=[];
					for (var i=0;i<page.anchor.length;i++) {
						this.jump.content.posB[i]=page.anchor[i].pos;
					}
				}
			} else {
				if (!page.wBuild) page.build();
				if (page.appear) page.appear();
				if (this.pageC.disappear) this.pageC.disappear();
				this.pageC.setTarget({opacity:0});
				this.setTimeout(function() {
					this.container.clearChild();
					this.container.appendChild(this.pageC);
					this.pageC.set({style:{opacity:0}});
					this.slideC.scrollTop=this.pageC.scrollB;
					this.pageC.setTimeout(function(){this.setTarget({opacity:1});},10);
				},550);
			}
			this.pageC=page;
			this.pageC.frame=this;
		}

		this.updatePage=function() {
			var block=[];
			for (var i=0;i<this.page.length;i++) {
				if (!this.page[i].wHide) {
					block[block.length]=this.page[i];
				}
			}
			if (this.jump.content) this.jumpC.removeChild(this.jump.content);
			this.jump.content=PageList({
				size:45,
				widthA:VERTICAL_FRAME_JUMP_WIDTHA,
				block:block,
				style:{
					position:"relative",
					left:8,
					top:0,
					transform:{
						translateX:-10,
					},
				},
				onchoose:function(w) {
					this.root.setPage(this.root.page[w]);
				},
				root:this,
			});
			this.jumpC.appendChild(this.jump.content);
			var k=-1;
			for (var i=0;i<this.jump.content.block.length;i++) {
				if (this.jump.content.block[i].value==this.pageC) {
					k=i;
					break;
				}
			}
			if (k==-1) this.setPage(this.jump.content.block[0].value);
			else this.jump.content.changeBlock(k);
		}

		this.jumpOnmouseover=function() {
			this.setTarget({
				width:VERTICAL_FRAME_JUMP_WIDTHA,
			});
			this.root.container.setTarget({
				left:VERTICAL_FRAME_JUMP_WIDTHA-VERTICAL_FRAME_JUMP_WIDTHL,
				width:this.root.widthA-VERTICAL_FRAME_JUMP_WIDTHA,
			});
		}

		this.jumpOnmouseout=function() {
			this.setTarget({
				width:VERTICAL_FRAME_JUMP_WIDTHL,
			});
			this.root.container.setTarget({
				left:0,
				width:"100%",
			});
		}

		this.appear=function() {

			INTERFACE_L.appear();
			this.setTarget({
				transform:{
					rotateY:0,
					scaleX:1,
					scaleY:1,
					translateX:0,
					translateY:0,
				},
				opacity:1,
				time:1000,
			});
			this.bottom.setTarget({transform:{
				translateY:0,
			}});
			this.setTimeout(function(){
				this.head.setTarget({opacity:1,speed_alpha:0.07});
			},500);
			this.setTimeout(function(){
				this.jump.setTarget({opacity:1,speed_alpha:0.1});
			},1000);
			this.setTimeout(function(){
				this.slideC.setTarget({opacity:1,speed_alpha:0.1});
			},1250);
			this.slideC.scrollTop=this.slideC.scrollTopB;

			if (this.scene) this.setTimeout(function() {
				SCENE.change(this.scene);
			},800);

		}

		this.appearFromTop=function() {
			this.set({style:{
				top:-ASWindowHeight/2+VERTICAL_HEAD_HEIGHT,
				transform:{
					translateX:0,
					translateY:0,
					scaleX:1,
					scaleY:1,
					rotateY:0,
				},
			}});
			this.bottom.set({style:{transform:{
				translateY:-ASWindowHeight,
			}}});
			this.head.set({style:{
				opacity:0,
			}});
			this.jump.set({style:{
				opacity:0,
			}});
			this.slideC.set({style:{
				opacity:0,
			}});
		}

		this.appearRolling=function(target) {
			this.set({style:{
				top:-ASWindowHeight/2+VERTICAL_HEAD_HEIGHT,
				transform:{
					translateX:target.x0+target.widthA/2,
					translateY:target.y0+target.heightA/2,
					scaleX:target.widthA/this.widthA,
					scaleY:target.heightA/(ASWindowHeight-VERTICAL_HEAD_HEIGHT),
					rotateY:-179,
				},
			}});
			this.jump.set({style:{
				opacity:0,
			}});
			this.slideC.set({style:{
				opacity:0,
			}});
		}

		this.appearTurning=function() {
			this.set({style:{
				top:-ASWindowHeight/2+VERTICAL_HEAD_HEIGHT,
				transform:{
					translateX:-300,
					translateY:0,
					scaleX:0.6,
					scaleY:0.6,
					rotateY:30,
				},
				opacity:0,
			}});
			this.jump.set({style:{
				opacity:0,
			}});
			this.slideC.set({style:{
				opacity:0,
			}});
		}

		this.disappearToTop=function() {
			this.setTarget({
				top:-ASWindowHeight*1.6,
			});
			this.setTimeout(this.removeSelf,500);
		}

		this.disappearRolling=function(target) {
			this.set({style:{
				transform:{
					rotateY:0,
				},
			}});
			this.setTimeout(function() {this.setTarget({
				transform:{
					translateX:target.x0+target.widthA/2,
					translateY:target.y0+target.heightA/2-DEFAULT_HEAD_HEIGHT*0.5,
					scaleX:target.widthA/this.widthA,
					scaleY:target.heightA/(ASWindowHeight-DEFAULT_HEAD_HEIGHT),
					rotateY:-179,
				},
				time:1000,
			})},30);
			this.setTimeout(this.removeSelf,130);
		}

		this.disappearTurning=function() {
			this.setTarget({
				transform:{
					translateX:300,
					rotateY:-30,
					scaleX:0.6,
					scaleY:0.6,
				},
				opacity:0,
			});
			this.setTimeout(this.removeSelf,250);
		}

	}


	function FrameV(buildP) {

		var widthA=buildP.widthA;
		if (!widthA) widthA=VERTICAL_FRAME_WIDTH;

		var target=ASElement({
			nodeName:"div",
			style:{
				position:"absolute",
				transformOrigin:"50% 50%",
				transform:{
					perspective:ASPerspective,
				},
				left:-widthA/2,
				top:-ASWindowHeight/2+VERTICAL_HEAD_HEIGHT,
				width:widthA,
				height:ASWindowHeight-VERTICAL_HEAD_HEIGHT,
			},
		});
		target.type="frame";
		target.name=buildP.name;
		target.widthA=widthA;
		target.backTo=buildP.backTo;
		target.jumpType=buildP.jumpType;
		target.page=buildP.pageV;

			target.bottom=ASElement({
				nodeName:"div",
				style:{
					position:"relative",
					backgroundColor:"rgb(250,250,250)",
					overflowX:"hidden",
					width:target.widthA,
					height:ASWindowHeight-VERTICAL_HEAD_HEIGHT-VERTICAL_FRAME_BOTTOM_HEIGHT,
					boxShadow:"0px 0px 20px rgba(0,0,0,0.8)",
				}
			});
			target.appendChild(target.bottom);

			target.slide=BasicScroll({
				heightA:ASWindowHeight-VERTICAL_HEAD_HEIGHT-VERTICAL_FRAME_BOTTOM_HEIGHT,
				style:{
					position:"absolute",
					top:0,
				},
			});
			target.appendChild(target.slide);
			target.slide.root=target;
			target.slideC=target.slide.container;
			target.context=target.slide.context;
				target.container=ASElement({
					nodeName:"div",
					style:{
						position:"relative",
						left:0,
						width:"100%",
					},
				});
				target.context.appendChild(target.container);

			target.head=ASElement({
				nodeName:"div",
				style:{
					position:"absolute",
					left:0,
					top:0,
					width:target.widthA,
				},
			});
			target.appendChild(target.head);

				target.head.pic=ASElement({
					nodeName:"img",
					src:buildP.titleImg,
					onload:function() {
						var scale=Math.max(this.root.widthA/this.naturalWidth,VERTICAL_FRAME_HEAD_MINHEIGHT/this.naturalHeight);
						this.root.head.set({style:{
							backgroundImage:"url("+this.src+")",
							backgroundSize:this.naturalWidth*scale+"px "+this.naturalHeight*scale+"px",
							height:this.naturalHeight*scale,
						}});
						this.root.head.height0=this.naturalHeight*scale;
						this.root.container.set({style:{
							marginTop:this.root.head.height0,
						}});
						this.root.jump.set({style:{
							top:this.root.head.height0,
							height:ASGetElementHeight(this.root.bottom)-this.root.head.height0,
						}});
						this.root.jumpC.set({style:{
							height:ASGetElementHeight(this.root.bottom)-this.root.head.height0,
						}});
					}
				});
				target.head.pic.root=target;

				target.head.divideLine=ASElement({
					nodeName:"img",
					src:ASGetSrcByName("frameDivideBar"),
					style:{
						position:"absolute",
						bottom:-1,
						width:"100%",
					},
				});
				target.head.appendChild(target.head.divideLine);

				target.head.word=BasicWord({
					size:130,
					color:"white",
					font:"YouYuan",
					wordC:buildP.titleC,
					wordE:buildP.titleE,
					style:{
						position:"absolute",
						fontWeight:"bold",
						right:60,
						marginBottom:5,
						bottom:20,
						textShadow:"0px 0px 8px rgba(0,0,0,0.8)",
						letterSpacingC:25,
						pointerEvents:"none",
					},
				});
				target.head.appendChild(target.head.word);

			var wLink=false;
			for (;;) {
				if (!target.backTo) break;
				var cardBoard=ASGetSourceByName("data0").getNodeByName("cardBoard").getNodeByName(target.backTo);
				if (!cardBoard) break;
				var yes=false;
				var cards=cardBoard.getNodeByName("card");
				for (var i=0;i<cards.node.length;i++) {
					if (cards.node[i].getAttribute("linkTo")==target.name) {
						yes=true;
						break;
					}
				}
				if (!yes) break;
				wLink=true;
				break;
			}
			if (wLink) {

				target.head.word.set({style:{
					bottom:VERTICAL_FRAME_LINK_HEIGHT+20,
				}});

				target.head.link=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						width:target.widthA,
						height:VERTICAL_FRAME_LINK_HEIGHT,
						bottom:12,
					},
				});
				target.head.appendChild(target.head.link);

					target.head.pic2=ASElement({
						nodeName:"img",
						src:buildP.titleImg.replace("title","title2"),
						onload:function() {
							var scale=this.root.widthA/this.naturalWidth;
							this.root.head.link.set({style:{
								backgroundImage:"url("+this.src+")",
								backgroundSize:this.naturalWidth*scale+"px "+this.naturalHeight*scale+"px",
								backgroundPosition:"50% 100%",
							}});
						}
					});
					target.head.pic2.root=target;

					target.head.linkC=[];
					var cardBoard=ASGetSourceByName("data0").getNodeByName("cardBoard").getNodeByName(target.backTo);
					var cards=cardBoard.getNodeByName("card");
					var widthA=0;
					for (var i=0,w=-1;i<cards.node.length;i++) {

						if (!cards.node[i].getAttribute("linkTo")) continue;
						if (!ASGetSourceByName("data0").getNodeByName("frame").getNodeByName(cards.node[i].getAttribute("linkTo"))
							&& !ASGetSourceByName("data0").getNodeByName("cardBoard").getNodeByName(cards.node[i].getAttribute("linkTo"))) continue;
						w++;
						target.head.linkC[w]=ASElement({
							nodeName:"div",
							style:{
								position:"relative",
								height:VERTICAL_FRAME_LINK_HEIGHT,
								textAlign:"center",
								backgroundColor:"rgba(0,0,0,0.4)",
							},
						});
						target.head.link.appendChild(target.head.linkC[w]);

							target.head.linkC[w].bottom=ASElement({
								nodeName:"div",
								style:{
									position:"absolute",
									left:0,
									opacity:0,
									width:"100%",
									height:"100%",
									backgroundColor:"rgba(255,255,255,0.2)",
								},
							});
							target.head.linkC[w].appendChild(target.head.linkC[w].bottom);
							target.head.linkC[w].lineW=ASElement({
								nodeName:"img",
								src:ASGetSrcByName("frameLinkLineW"),
								style:{
									position:"absolute",
									left:0,
									opacity:1,
									width:"100%",
									height:"40%",
								},
							});
							target.head.linkC[w].appendChild(target.head.linkC[w].lineW);
							target.head.linkC[w].lineB=ASElement({
								nodeName:"img",
								src:ASGetSrcByName("frameLinkLineB"),
								style:{
									position:"absolute",
									left:0,
									opacity:0,
									width:"100%",
									height:"100%",
								},
							});
							target.head.linkC[w].appendChild(target.head.linkC[w].lineB);
							target.head.linkC[w].word=BasicWord({
								size:40,
								wordC:cards.node[i].getAttribute("titleC"),
								wordE:cards.node[i].getAttribute("titleE"),
								color:"white",
								letterSpacingC:15,
								ignoreM:true,
								style:{
									position:"relative",
									cursor:"pointer",
									top:10,
								}
							});
							target.head.linkC[w].appendChild(target.head.linkC[w].word);

						widthA+=target.head.linkC[w].word.widthA;

						if (cards.node[i].getAttribute("linkTo")!=target.name) {
							target.head.linkC[w].onmouseover=FrameStr.linkOnmouseover;
							target.head.linkC[w].onmouseout=FrameStr.linkOnmouseout;
							target.head.linkC[w].onmousedown=FrameStr.linkOnmousedown;
							target.head.linkC[w].onmouseup=FrameStr.linkOnmouseup;
							target.head.linkC[w].onclick=FrameStr.linkOnclick;
							target.head.linkC[w].linkTo=cards.node[i].getAttribute("linkTo");
							target.head.linkC[w].set({style:{cursor:"pointer"}});
						} else {
							target.head.linkC[w].lineB.set({style:{opacity:1}});
							target.head.linkC[w].lineW.set({style:{opacity:0}});
						}

					}
					for (var i=0;i<target.head.linkC.length;i++) {
						target.head.linkC[i].set({style:{
							width:target.widthA/target.head.linkC.length,
						}});
					}

			}

			target.jump=BasicScroll({
				widthA:VERTICAL_FRAME_JUMP_WIDTHL,
				style:{
					left:0,
					backgroundColor:"rgb(250,250,250)",
				},
				root:target,
			});
			target.appendChild(target.jump);
				target.jumpC=target.jump.container;
				target.jumpL=ASElement({
					nodeName:"img",
					src:ASGetSrcByName("frameDivideLine"),
					style:{
						position:"absolute",
						width:3,
						height:"100%",
						right:0,
						top:0,
					},
				});
				target.jump.appendChild(target.jumpL);
			if (buildP.jumpType=="anchor") {
				target.jump.resize({
					widthA:VERTICAL_FRAME_JUMP_WIDTHA,
				});
				target.jump.content=AnchorList({
					size:40,
					widthA:VERTICAL_FRAME_JUMP_WIDTHA,
					block:target.page[0].anchor,
					style:{
						position:"relative",
						left:5,
						top:0,
					},
					onchoose:function(w) {
						this.changeBlock(w);
						this.root.slide.scrollTo(this.root.pageC.anchor[w].pos0-30);
					},
					root:target,
				});
				target.jumpC.appendChild(target.jump.content);
				target.jump.onmouseover=FrameVStr.jumpOnmouseover;
				target.jump.onmouseout=FrameVStr.jumpOnmouseout;
			}
			if (buildP.jumpType=="page") {
				target.jump.resize({
					widthA:VERTICAL_FRAME_JUMP_WIDTHA,
				});
				target.updatePage=FrameVStr.updatePage;
				target.jump.onmouseover=FrameVStr.jumpOnmouseover;
				target.jump.onmouseout=FrameVStr.jumpOnmouseout;
			}

			target.jump.set({style:{width:VERTICAL_FRAME_JUMP_WIDTHL}});
			target.slide.resize({widthA:target.widthA-ASGetElementWidth(target.jump)});
			target.slide.set({style:{left:ASGetElementWidth(target.jump)}});

		target.removeSelf=FrameStr.removeSelf;
		target.resize=FrameVStr.resize;
		target.dealJumpPros=FrameStr.dealJumpPros;
		target.appear=FrameVStr.appear;
		target.appearFromTop=FrameVStr.appearFromTop;
		target.appearRolling=FrameVStr.appearRolling;
		target.appearTurning=FrameVStr.appearTurning;
		target.disappearToTop=FrameVStr.disappearToTop;
		target.disappearRolling=FrameVStr.disappearRolling;
		target.disappearTurning=FrameVStr.disappearTurning;
		target.setPage=FrameVStr.setPage;
		target.pageResize=FrameStr.pageResize;

		if (target.page[0]) target.setPage(target.page[0]);
		if (target.jumpType=="page") target.updatePage();

		target.set(buildP);
		return(target);

	}

	// 这里是创建 Frame 的地方
	function buildFrame() {

		FRAME={};
		FRAME_V={};
		FRAME_P={};
		var data=ASGetSourceByName("data0").getNodeByName("frame");

		//buildFrameContent
		for (var i=0;i<data.node.length;i++) {

			var frame=data.node[i];
			var name=frame.nodeName;
			var buildP={
				name:name,
				titleC:frame.getAttribute("titleC"),
				titleE:frame.getAttribute("titleE"),
				titleImg:frame.getAttribute("titleImg"),
				jumpType:data.node[i].getAttribute("jumpType"),
			};

			if (frame.getAttribute("backTo")) buildP.backTo=frame.getAttribute("backTo");
			if (frame.getAttribute("scene")) buildP.scene=frame.getAttribute("scene");
			if (frame.getAttribute("wLogin")=="true") buildP.wLogin=true;
			if (buildP.jumpType=="page") buildP.jumpData=data.node[i].getNodeByName("page");

			buildP.pageD=[];
			buildP.pageV=[];
			for (var j=0;j<frame.getNodeByName("page").node.length;j++) {
				buildP.pageD[j]=PAGE[frame.getNodeByName("page").node[j].getAttribute("name")];
				if (!buildP.pageD[j]) buildP.pageD[j]=ASElement({nodeName:"div"});
				buildP.pageD[j].nameC=frame.getNodeByName("page").node[j].getAttribute("nameC");
				buildP.pageD[j].nameE=frame.getNodeByName("page").node[j].getAttribute("nameE");
				buildP.pageV[j]=PAGE_V[frame.getNodeByName("page").node[j].getAttribute("name")];
				if (!buildP.pageV[j]) buildP.pageV[j]=ASElement({nodeName:"div"});
				buildP.pageV[j].nameC=frame.getNodeByName("page").node[j].getAttribute("nameC");
				buildP.pageV[j].nameE=frame.getNodeByName("page").node[j].getAttribute("nameE");
			}

			// console.log(buildP);

			FRAME_P[name]=buildP;

		}

		//test
		
			var data=ASGetSourceByName("data0").getNodeByName("functionC");
			var i = 0;
			var name=data.node[i].nodeName;
			var buildP={
				name:name,
				titleC:"測試",
				titleE:"Test",
				titleImg:"Image/Function/O/title.jpg",
				backTo:"current",
				scene:ASGetSourceByName("data0").getNodeByName("frame").getNodeByName("current").getAttribute("scene"),
				jumpType:"page",
				pageD:[
					PAGE[name+"Brief"],
					PAGE[name+"Brief"],
					PAGE[name+"Brief"],
				],
				pageV:[
					PAGE_V[name+"Brief"],
				],
				jumpData:data.node[i].getNodeByName("page"),
				funcID:data.node[i].nodeName,
			};

			buildP.pageD[0].nameC="活動詳情";
			buildP.pageD[0].nameE="Details";
			buildP.pageV[0].nameC="活動詳情";
			buildP.pageV[0].nameE="Details";
			
			buildP.update=function() {
				// var data=ASGetSourceByName("data0").getNodeByName("functionC").getNodeByName(this.funcID);
				// if (data.getAttribute("enroll")=="available" || data.getAttribute("enroll")=="full") {
				// 	if (ASVersion=="horizon") {
				// 		if (USERDATA=="NULL" || USERDATA.place!="E") {
				// 			this.page[2].wHide=true;
				// 		} else {
				// 			this.page[2].wHide=false;
				// 		}
				// 	}
				// }
				// console.log("Updating Page")
				this.updatePage();
			}

			FRAME_P["test"]=buildP;

		//function
			// var data=ASGetSourceByName("data0").getNodeByName("functionC");
			// for (var i=0;i<data.node.length;i++) {

			// 	var name=data.node[i].nodeName;
			// 	var buildP={
			// 		name:name,
			// 		titleC:data.node[i].getAttribute("nameC"),
			// 		titleE:data.node[i].getAttribute("nameE"),
			// 		titleImg:"Image/Function/"+data.node[i].getAttribute("name")+"/title.jpg",
			// 		backTo:"current",
			// 		scene:ASGetSourceByName("data0").getNodeByName("frame").getNodeByName("current").getAttribute("scene"),
			// 		jumpType:"page",
			// 		pageD:[
			// 			PAGE[name+"Brief"],
			// 		],
			// 		pageV:[
			// 			PAGE_V[name+"Brief"],
			// 		],
			// 		jumpData:data.node[i].getNodeByName("page"),
			// 		funcID:data.node[i].nodeName,
			// 	};

			// 	buildP.pageD[0].nameC="活動詳情";
			// 	buildP.pageD[0].nameE="Details";
			// 	buildP.pageV[0].nameC="活動詳情";
			// 	buildP.pageV[0].nameE="Details";
			// 	if (data.node[i].getAttribute("enroll")=="available" || data.node[i].getAttribute("enroll")=="full") {
			// 		buildP.pageD[1]=PAGE[name+"Signup"],
			// 		buildP.pageD[1].nameC="報名表";
			// 		buildP.pageD[1].nameE="Registration";
			// 		buildP.pageV[1]=PAGE_V[name+"Signup"],
			// 		buildP.pageV[1].nameC="報名表";
			// 		buildP.pageV[1].nameE="Registration";
			// 		buildP.pageD[2]=PAGE[name+"List"],
			// 		buildP.pageD[2].nameC="報名情況";
			// 		buildP.pageD[2].nameE="Registration Status";
			// 		buildP.pageD[2].wHide=true;
			// 	}
			// 	buildP.update=function() {
			// 		var data=ASGetSourceByName("data0").getNodeByName("functionC").getNodeByName(this.funcID);
			// 		if (data.getAttribute("enroll")=="available" || data.getAttribute("enroll")=="full") {
			// 			if (ASVersion=="horizon") {
			// 				if (USERDATA=="NULL" || USERDATA.place!="E") {
			// 					this.page[2].wHide=true;
			// 				} else {
			// 					this.page[2].wHide=false;
			// 				}
			// 			}
			// 		}
			// 		this.updatePage();
			// 	}

			// 	FRAME_P[name]=buildP;

			// }

		//mail
		var data=ASGetSourceByName("data0").getNodeByName("email").getNodeByName("cuisine");
		for (var i=0;i<data.node.length;i++) {
			FRAME_P["mailCuisine"].pageD[i]=PAGE["cuisine"+i];
			FRAME_P["mailCuisine"].pageD[i].nameC=data.node[i].getAttribute("nameC");
			FRAME_P["mailCuisine"].pageD[i].nameE=data.node[i].getAttribute("nameE");
			FRAME_P["mailCuisine"].pageV[i]=PAGE_V["cuisine"+i];
			FRAME_P["mailCuisine"].pageV[i].nameC=data.node[i].getAttribute("nameC");
			FRAME_P["mailCuisine"].pageV[i].nameE=data.node[i].getAttribute("nameE");
		}

		// console.log("FRAME_P", FRAME_P);

	}


	var CardStr=new function() {

		// Card Mouse Interaction Animations

		this.recover=function() {
			// this.bottomR.set({style:{
			// 	transform:{
			// 		translateY:this.bottomR.y0,
			// 		scaleX:this.bottomR.scaleX0,
			// 		scaleY:this.bottomR.scaleY0,
			// 	},
			// }});
			// this.bottomC.set({style:{
			// 	opacity:0,
			// }});
			// if (this.titleR) this.titleR.set({style:{
			// 	opacity:1,
			// }});
		}

		this.onmouseover=function() {
			if (this.wBanMouse) return;
			this.setTarget({
				transform:{
					scaleX:.95,
					scaleY:.95,
				}
			});
			// this.bottomR.setTarget({
			// 	transform:{
			// 		translateY:0,
			// 		scaleX:1,
			// 		scaleY:1,
			// 	},
			// });
			// this.bottomC.setTarget({
			// 	opacity:0,
			// });
			// if (this.titleR) this.titleR.setTarget({
			// 	opacity:0,
			// });
		}

		this.onmouseout=function() {
			if (this.wBanMouse) return;
			this.setTarget({
				transform:{
					scaleX:1,
					scaleY:1,
				}
			});
			// this.bottomR.setTarget({
			// 	transform:{
			// 		translateY:this.bottomR.y0,
			// 		scaleX:this.bottomR.scaleX0,
			// 		scaleY:this.bottomR.scaleY0,
			// 	},
			// });
			// this.bottomC.setTarget({
			// 	opacity:0,
			// });
			// if (this.titleR) this.titleR.setTarget({
			// 	opacity:1,
			// });
		}

		this.onmousedown=function() {
			if (this.wBanMouse) return;
			this.setTarget({
				transform:{
					scaleX:0.95,
					scaleY:0.95,
				}
			});
			// this.bottomR.setTarget({
			// 	transform:{
			// 		translateY:0,
			// 		scaleX:1,
			// 		scaleY:1,
			// 	},
			// });
			// this.bottomC.setTarget({
			// 	opacity:1,
			// });
			// if (this.titleR) this.titleR.setTarget({
			// 	opacity:0,
			// });
		}

		this.onmouseup=function() {
			if (this.wBanMouse) return;
			this.setTarget({
				transform:{
					scaleX:1,
					scaleY:1,
				}
			});
			// this.bottomR.setTarget({
			// 	transform:{
			// 		translateY:0,
			// 		scaleX:1,
			// 		scaleY:1,
			// 	},
			// });
			// this.bottomC.setTarget({
			// 	opacity:0,
			// });
			// if (this.titleR) this.titleR.setTarget({
			// 	opacity:0,
			// });
		}

		this.onclick=function() {
			if (this.wBanMouse) return;
			changeURL(this.linkTo);
		}

		this.banMouse=function() {
			this.wBanMouse=true;
		}

		this.allowMouse=function() {
			this.wBanMouse=false;
		}

	}


	function Card(buildP) {

		if (!buildP.size) buildP.size=26;
		if (!buildP.timeDelay) buildP.timeDelay=0;

		var target=ASElement({
			nodeName:"div",
			style:{
				position:"absolute",
				left:buildP.x,
				top:buildP.y,
				width:buildP.widthA,
				height:buildP.heightA,
				borderRadius:4,
				overflow:"hidden",
				transformOrigin:"50% 50%",
				transform:{
					perspective:ASPerspective,
				},
				boxShadow:"0 0 10px rgba(0,0,0,0.5)",
				cursor:"pointer",
			},
		});
		target.x0=buildP.x;
		target.y0=buildP.y;
		target.widthA=buildP.widthA;
		target.heightA=buildP.heightA;
		target.edge=0;
		target.titleHeight=0;
		target.linkTo=buildP.linkTo;
		target.hyperlink=buildP.hyperlink;
		target.wBanMouse=false;

		target.recover=CardStr.recover;
		target.onmouseover=CardStr.onmouseover;
		target.onmouseout=CardStr.onmouseout;
		target.onmousedown=CardStr.onmousedown;
		target.onmouseup=CardStr.onmouseup;
		target.banMouse=CardStr.banMouse;
		target.allowMouse=CardStr.allowMouse;

		if (buildP.titleC || buildP.titleE) {

			target.titleHeight=8;
			target.titleF=ASElement({
				nodeName:"div",
				style:{
					position:"absolute",
					width:target.widthA-target.edge*2-5,
					left:target.edge+buildP.size/5,
					top:target.edge,
					pointerEvents:"none",
					margin: 8
				},
			});


				target.titleW=BasicWord({
					wordC:buildP.titleC,
					wordE:buildP.titleE,
					font:"FZYaoti",
					size:buildP.size,
					color: COLOR_MUTEDRED, // On Hover Card Title Text Color
					style:{
						position:"absolute",
					},
				});
				target.titleF.appendChild(target.titleW);
				target.titleR=BasicWord({
					wordC:buildP.titleC,
					wordE:buildP.titleE,
					font:"FZYaoti",
					size:buildP.size,
					color: COLOR_MUTEDRED, // Basic Card Title Text Color
					style:{
						position:"absolute",
					},
				});
				target.titleF.appendChild(target.titleR);

			target.titleHeight+=target.titleR.heightA+4;

		}

			target.bottom=ASElement({
				nodeName:"div",
				style:{
					width:target.widthA,
					height:target.heightA,
					borderRadius:target.edge,
					overflow:"hidden",
					background: COLOR_SOFTWHITE,
				},
			});
			target.appendChild(target.bottom);

			target.img=FlashImg({
				widthA:target.widthA-target.edge*2,
				heightA:target.heightA-target.edge-target.titleHeight,
				imgSize:buildP.imgSize,
				img:buildP.img,
				delay:buildP.timeDelay*50,
				style:{
					position:"absolute",
					left:target.edge,
					top:target.titleHeight,
				},
			});
			target.appendChild(target.img);

		if (target.linkTo) {
			target.onclick=CardStr.onclick;
		}

		if (target.hyperlink) {
			target.region=ASElement({
				nodeName:"a",
				href:target.hyperlink,
				target:"_blank",
				style:{
					position:"absolute",
					left:0,
				},
			});
			target.region.appendChild(ASElement({
				nodeName:"div",
				style:{
					width:target.widthA,
					height:target.heightA,
				},
			}));
			target.appendChild(target.region);
		}

		if (buildP.titleC || buildP.titleE) {
			target.appendChild(target.titleF);
		}

		target.set(buildP);
		return(target);

	}


	var CardBoardStr=new function() {

		this.removeSelf=function() {
			this.parentNode.removeChild(this);
		}

		this.appear=function() {

			this.status="appearing";

			INTERFACE_H.appear();
			INTERFACE_H.topLogo.setTarget({
				opacity:1,
				transform:{
					translateX:this.buildP.topLogoPos.x,
					translateY:-this.buildP.topLogoPos.y,
					scale:this.buildP.topLogoScale,
				},
				time:400,
			});

			this.setTarget({
				opacity:1,
				transform:{
					scale:1,
				},
				time:600,
			});

			this.onCard=null;
			for (var i=0;i<this.card.length;i++) {
				this.card[i].recover();
				this.card[i].setTimeout(this.card[i].allowMouse,50);
				if (this.card[i].jumpTarget) {
					this.card[i].jumpTarget=false;
					continue;
				}
				this.card[i].setTarget({
					transform:{
						rotateY:0,
						scaleX:1,
						scaleY:1,
						translateX:0,
						translateY:0,
					},
					opacity:1,
					time:400,
				});
			}

			var time=800;
			if (ASBrowser=="Mobile") time=1500;
			if (this.scene) this.setTimeout(function() {
				SCENE.change(this.scene);
			},time);

		}

		this.appearFromBack=function() {

			this.set({style:{
				opacity:0,
				transform:{
					scale:0.4,
				},
			}});
			for (var i=0;i<this.card.length;i++) {
				this.card[i].set({style:{
					transform:{
						rotateY:0,
						scaleX:1,
						scaleY:1,
						translateX:0,
						translateY:0,
					},
					opacity:1,
				}});
			}

		}

		this.appearRolling=function(w) {

			for (var i=0;i<this.card.length;i++) {
				if (i==w) continue;
				this.card[i].set({style:{
					transform:{
						translateX:-this.card[i].x0*0.6-this.card[i].widthA*0.6/2,
						translateY:-this.card[i].y0*0.6-this.card[i].heightA*0.6/2,
						scaleX:0.4,
						scaleY:0.4,
					},
					opacity:0,
				}});
			}
			this.card[w].jumpTarget=true;
			this.card[w].set({style:{
				transform:{
					translateX:-this.card[w].x0-this.card[w].widthA/2,
					translateY:-this.card[w].y0-this.card[w].heightA/2,
					scaleX:DEFAULT_FRAME_WIDTH/this.card[w].widthA,
					scaleY:(ASWindowHeight-DEFAULT_HEAD_HEIGHT)/this.card[w].heightA,
					rotateY:179,
				},
				opacity:1,
				visibility:"hidden",
			}});
			this.card[w].setTimeout(function() {this.setTarget({
				transform:{
					scaleX:1,
					scaleY:1,
					translateX:0,
					translateY:0,
					rotateY:0,
				},
				time:1000,
			});},10);
			this.card[w].setTimeout(function() {this.set({style:{visibility:"visible"}});},125);

		}

		this.wDisappear=function() {

			if (this.style.opacity=="0") return(true);
			for (var i=0;i<this.cardN;i++) {
				if (this.card[i].pos.vz.z<0) return(true);
			}
			return(false);

		}

		this.disappearToBack=function() {

			this.setTarget({
				opacity:0,
				transform:{
					scale:0.4,
				},
			});
			this.setTimeout(this.removeSelf,200);

		}

		this.disappearRolling=function(w) {

			for (var i=0;i<this.card.length;i++) {
				this.card[i].banMouse();
				if (i==w) continue;
				this.card[i].setTarget({
					transform:{
						translateX:-this.card[i].x0*0.6-this.card[i].widthA*0.6/2,
						translateY:-this.card[i].y0*0.6-this.card[i].heightA*0.6/2,
						scaleX:0.4,
						scaleY:0.4,
					},
					opacity:0,
					time:400,
				});
			}
			this.card[w].setTarget({
				transform:{
					translateX:-this.card[w].x0-this.card[w].widthA/2,
					translateY:-this.card[w].y0-this.card[w].heightA/2,
					scaleX:DEFAULT_FRAME_WIDTH/this.card[w].widthA,
					scaleY:(ASWindowHeight-DEFAULT_HEAD_HEIGHT)/this.card[w].heightA,
					rotateY:-180,
				},
				time:1000,
			});
			this.setTimeout(this.removeSelf,105);

		}

	}


	function CardBoard(buildP) {

		if (!("wLogo" in buildP)) buildP.wLogo=true;
		if (!("widthL" in buildP)) buildP.widthL=DEFAULT_CARDBOARD_WIDTH_L;
		if (!("heightL" in buildP)) buildP.heightL=DEFAULT_CARDBOARD_HEIGHT_L;
		if (!("space" in buildP)) buildP.space=DEFAULT_CARDBOARD_SPACE;
		if (!("cardPos" in buildP)) buildP.cardPos=new PointO(0,0);
		if (!("topLogoScale" in buildP)) buildP.topLogoScale=1;
		if (!("topLogoPos" in buildP)) buildP.topLogoPos=new PointO(0,0);

		var target=ASElement({
			nodeName:"div",
			style:{
				position:"absolute",
			},
		});
		target.type="cardBoard";
		target.status="disappear";
		target.buildP=buildP;
		target.name=buildP.name;
		target.backTo=buildP.backTo;

		target.onCard=null;
		target.card=[];
		var card1;
		for (card1 in buildP){
			if (typeof(buildP[card1])!="object" ||
				(!(
				("widthA" in buildP[card1])
				&& ("heightA" in buildP[card1])
				&& ("blockX" in buildP[card1])
				&& ("blockY" in buildP[card1])))) {
				continue;
			}
			buildP[card1].name=card1;
			buildP[card1].x=buildP[card1].blockX*(buildP.widthL+buildP.space)+buildP.space*0.5+buildP.cardPos.x;
			buildP[card1].y=-(buildP[card1].blockY*(buildP.heightL+buildP.space)+buildP.space*0.5+buildP.cardPos.y);
			buildP[card1].widthA=buildP[card1].widthA*buildP.widthL+(buildP[card1].widthA-1)*buildP.space;
			buildP[card1].heightA=buildP[card1].heightA*buildP.heightL+(buildP[card1].heightA-1)*buildP.space;
			target[card1]=Card(buildP[card1]);
			target.appendChild(target[card1]);
			target.card[target.card.length]=target[card1];
		}

		target.removeSelf=CardBoardStr.removeSelf;
		target.appear=CardBoardStr.appear;
		target.appearFromBack=CardBoardStr.appearFromBack;
		target.appearRolling=CardBoardStr.appearRolling;
		target.wDisappear=CardBoardStr.wDisappear;
		target.disappearToBack=CardBoardStr.disappearToBack;
		target.disappearRolling=CardBoardStr.disappearRolling;

		target.set(buildP);
		target.topLogoScale=buildP.topLogoScale;
		target.topLogoPos=buildP.topLogoPos;
		return(target);

	}


	function CardBoardV(buildP) {

		if (!("wLogo" in buildP)) buildP.wLogo=true;
		if (!("widthL" in buildP)) buildP.widthL=DEFAULT_CARDBOARD_WIDTH_L;
		if (!("heightL" in buildP)) buildP.heightL=DEFAULT_CARDBOARD_HEIGHT_L;
		if (!("space" in buildP)) buildP.space=DEFAULT_CARDBOARD_SPACE;
		if (!("cardPos" in buildP)) buildP.cardPos=new PointO(0,0);
		if (!("topLogoScale" in buildP)) buildP.topLogoScale=1.3;
		if (!("topLogoPos" in buildP)) buildP.topLogoPos=new PointO(0,0);

		var target=ASElement({
			nodeName:"div",
			style:{
				position:"absolute",
			},
		});
		target.type="cardBoard";
		target.status="disappear";
		target.buildP=buildP;
		target.name=buildP.name;
		target.backTo=buildP.backTo;

		target.onCard=null;
		target.card=[];
		var card1;
		for (card1 in buildP){
			if (typeof(buildP[card1])!="object" ||
				(!(
				("widthA" in buildP[card1])
				&& ("heightA" in buildP[card1])
				&& ("blockX" in buildP[card1])
				&& ("blockY" in buildP[card1])))) {
				continue;
			}
			buildP[card1].name=card1;
			buildP[card1].size=50;
			buildP[card1].x=buildP[card1].blockX*(buildP.widthL+buildP.space)+buildP.space*0.5+buildP.cardPos.x;
			buildP[card1].y=-(buildP[card1].blockY*(buildP.heightL+buildP.space)+buildP.space*0.5+buildP.cardPos.y);
			buildP[card1].widthA=buildP[card1].widthA*buildP.widthL+(buildP[card1].widthA-1)*buildP.space;
			buildP[card1].heightA=buildP[card1].heightA*buildP.heightL+(buildP[card1].heightA-1)*buildP.space;
			target[card1]=Card(buildP[card1]);
			target.appendChild(target[card1]);
			target.card[target.card.length]=target[card1];
		}

		target.removeSelf=CardBoardStr.removeSelf;
		target.appear=CardBoardStr.appear;
		target.appearFromBack=CardBoardStr.appearFromBack;
		target.appearRolling=CardBoardStr.appearRolling;
		target.wDisappear=CardBoardStr.wDisappear;
		target.disappearToBack=CardBoardStr.disappearToBack;
		target.disappearRolling=CardBoardStr.disappearRolling;

		target.set(buildP);
		target.topLogoScale=buildP.topLogoScale;
		target.topLogoPos=buildP.topLogoPos;
		return(target);

	}

	// 創建 Cardboard 類型的頁面（首頁等）
	function buildCardBoard() {


		CARDBOARD={};
		CARDBOARD_V={};
		CARDBOARD_P={};
		CARDBOARD_PV={};

		var data=ASGetSourceByName("data0").getNodeByName("cardBoard");
		var cardAttribute=["widthA","heightA","blockX","blockY","imgSize","timeDelay","titleC","titleE","linkTo","hyperlink"];
		var cardAttributeType=["num","num","num","num","str","num","str","str","str","str"];

		//buildCardBoardContent
		for (var i=0;i<data.node.length;i++) {

			var cardBoard=data.node[i];
			var name=cardBoard.nodeName;
			var buildP={
				name:name,
				scene:cardBoard.getAttribute("scene"),
				widthL:parseFloat(cardBoard.getAttribute("widthL")),
				heightL:parseFloat(cardBoard.getAttribute("heightL")),
				space:parseFloat(cardBoard.getAttribute("space")),
				cardPos:new PointO(parseFloat(cardBoard.getAttribute("cardPosX")),parseFloat(cardBoard.getAttribute("cardPosY"))),
				topLogoPos:new PointO(parseFloat(cardBoard.getAttribute("topLogoPosX")),parseFloat(cardBoard.getAttribute("topLogoPosY"))),
			};
			if (cardBoard.getAttribute("backTo")) buildP.backTo=cardBoard.getAttribute("backTo");
			for (var j=0;j<cardBoard.getNodeByName("card").node.length;j++) {
				var card=cardBoard.getNodeByName("card").node[j];
				var nameC=card.nodeName;
				buildP[nameC]={};
				for (var k=0;k<cardAttribute.length;k++) {
					if (card.getAttribute(cardAttribute[k])) {
						if (cardAttributeType[k]=="str") {
							buildP[nameC][cardAttribute[k]]=card.getAttribute(cardAttribute[k]);
						}
						if (cardAttributeType[k]=="num") {
							buildP[nameC][cardAttribute[k]]=parseFloat(card.getAttribute(cardAttribute[k]));
						}
					}
				}
				buildP[nameC].img=[];
				for (var k=0;k<card.getNodeByName("img").node.length;k++) {
					buildP[nameC].img[k]=card.getNodeByName("img").getAttribute("root")+card.getNodeByName("img").node[k].getAttribute("name");
				}
			}

			CARDBOARD_P[name]=buildP;

		}

		var data=ASGetSourceByName("data0").getNodeByName("cardBoardV");
		var cardAttribute=["widthA","heightA","blockX","blockY","imgSize","timeDelay","titleC","titleE","linkTo","hyperlink"];
		var cardAttributeType=["num","num","num","num","str","num","str","str","str","str"];

		//buildCardBoardContent
		for (var i=0;i<data.node.length;i++) {

			var cardBoard=data.node[i];
			var name=cardBoard.nodeName;
			var buildP={
				name:name,
				scene:cardBoard.getAttribute("scene"),
				widthL:parseFloat(cardBoard.getAttribute("widthL")),
				heightL:parseFloat(cardBoard.getAttribute("heightL")),
				space:parseFloat(cardBoard.getAttribute("space")),
				cardPos:new PointO(parseFloat(cardBoard.getAttribute("cardPosX")),parseFloat(cardBoard.getAttribute("cardPosY"))),
				topLogoPos:new PointO(parseFloat(cardBoard.getAttribute("topLogoPosX")),parseFloat(cardBoard.getAttribute("topLogoPosY"))),
			};
			if (cardBoard.getAttribute("backTo")) buildP.backTo=cardBoard.getAttribute("backTo");
			for (var j=0;j<cardBoard.getNodeByName("card").node.length;j++) {
				var card=cardBoard.getNodeByName("card").node[j];
				var nameC=card.nodeName;
				buildP[nameC]={};
				for (var k=0;k<cardAttribute.length;k++) {
					if (card.getAttribute(cardAttribute[k])) {
						if (cardAttributeType[k]=="str") {
							buildP[nameC][cardAttribute[k]]=card.getAttribute(cardAttribute[k]);
						}
						if (cardAttributeType[k]=="num") {
							buildP[nameC][cardAttribute[k]]=parseFloat(card.getAttribute(cardAttribute[k]));
						}
					}
				}
				buildP[nameC].img=[];
				for (var k=0;k<card.getNodeByName("img").node.length;k++) {
					buildP[nameC].img[k]=card.getNodeByName("img").getAttribute("root")+card.getNodeByName("img").node[k].getAttribute("name");
				}
			}

			CARDBOARD_PV[name]=buildP;

		}


	}


	function buildInterfaceH() {

		INTERFACE_H=ASElement({
			nodeName:"div",
			style:{
				position:"absolute",
				opacity:0,
				display:"none",
				left:ASWindowWidth/2,
				top:ASWindowHeight/2,
			},
		});
		ROOT.appendChild(INTERFACE_H);

		INTERFACE_H.resize=function() {
			this.set({style:{
				left:ASWindowWidth/2,
				top:ASWindowHeight/2,
			}});
			this.back.set({style:{
				left:-ASWindowWidth/2+20,
				top:-ASWindowHeight/2+20,
			}});
			// this.user.set({style:{
			// 	right:-ASWindowWidth/2+10,
			// 	top:-ASWindowHeight/2+10,
			// }});
		}

		INTERFACE_H.changeVersion=function() {
			if (ASVersion=="horizon") {
				this.back.set({style:{
					width:89,
					height:62,
				}});
				// this.user.set({style:{
				// 	transform:{
				// 		translateX:0,
				// 	}
				// }});
				// this.user.word.set({style:{
				// 	top:0,
				// 	transform:{scale:1},
				// }});
				// this.user.log.set({style:{
				// 	top:0,
				// 	transform:{scale:1},
				// }});
			} else {
				this.back.set({style:{
					width:120,
					height:84,
				}});
				// this.user.set({style:{
				// 	transform:{
				// 		translateX:120,
				// 	}
				// }});
				// this.user.word.set({style:{
				// 	top:-30,
				// 	transform:{scale:2},
				// }});
				// this.user.log.set({style:{
				// 	top:-30,
				// 	transform:{scale:2},
				// }});
			}
		}

		INTERFACE_H.appear=function() {
			this.set({style:{
				display:"inline-block",
			}});
			this.setTarget({
				opacity:1,
				speed_alpha:0.15,
			});
			if (INTERFACE_C.active.name=="main") {
				this.back.set({style:{
					visibility:"hidden",
				}});
			} else {
				this.back.set({style:{
					visibility:"visible",
				}});
			}
		}

		INTERFACE_H.hide=function() {
			if (this.style.opacity=="0") this.set({style:{display:"none"}});
		}

		INTERFACE_H.disappear=function() {
			this.setTarget({
				opacity:0,
				speed_alpha:0.15,
			});
			this.setTimeout(this.hide,500);
		}

			INTERFACE_H.topLogo=ASElement({
				nodeName:"img",
				src:ASGetSrcByName("TopLogo"),
				style:{
					position:"absolute",
					left:-DEFAULT_TOPLOGO_WIDTH/2,
					top:-DEFAULT_TOPLOGO_HEIGHT/2,
					width:DEFAULT_TOPLOGO_WIDTH,
					height:DEFAULT_TOPLOGO_HEIGHT,
				},
			});
			INTERFACE_H.appendChild(INTERFACE_H.topLogo);

			INTERFACE_H.back=ASElement({
				nodeName:"div",
				style:{
					position:"absolute",
					left:-ASWindowWidth/2+20,
					top:-ASWindowHeight/2+20,
					width:89,
					height:62,
					backgroundImage:"url('"+ASGetSrcByName("cardBoardBack1")+"')",
					backgroundSize:"100% 100%",
					transformOrigin:"50% 50%",
					cursor:"pointer",
				},
				onmouseover:function() {
					this.setTarget({transform:{scale:1}});
					this.pic1.setTarget({opacity:1});
					this.pic2.setTarget({opacity:0});
				},
				onmouseout:function() {
					this.setTarget({transform:{scale:1}});
					this.pic1.setTarget({opacity:0});
					this.pic2.setTarget({opacity:0});
				},
				onmousedown:function() {
					this.setTarget({transform:{scale:0.9}});
					this.pic1.setTarget({opacity:1});
					this.pic2.setTarget({opacity:1});
				},
				onmouseup:function() {
					this.setTarget({transform:{scale:1}});
					this.pic1.setTarget({opacity:1});
					this.pic2.setTarget({opacity:0});
				},
				onclick:function() {
					changeURL(INTERFACE_C.active.backTo);
				},
			});
			INTERFACE_H.appendChild(INTERFACE_H.back);
				INTERFACE_H.back.pic1=ASElement({
					nodeName:"img",
					src:ASGetSrcByName("cardBoardBack2"),
					style:{
						opacity:0,
						width:"100%",
						height:"100%",
					},
				});
				INTERFACE_H.back.appendChild(INTERFACE_H.back.pic1);
				INTERFACE_H.back.pic2=ASElement({
					nodeName:"img",
					src:ASGetSrcByName("cardBoardBack3"),
					style:{
						position:"relative",
						top:"-100%",
						opacity:0,
						width:"100%",
						height:"100%",
						cursor:"pointer",
					},
				});
				INTERFACE_H.back.appendChild(INTERFACE_H.back.pic2);

			// INTERFACE_H.user=ASElement({
			// 	nodeName:"div",
			// 	style:{
			// 		position:"absolute",
			// 		width:500,
			// 		height:150,
			// 		right:-ASWindowWidth/2+10,
			// 		top:-ASWindowHeight/2+10,
			// 	},
			// });
			// INTERFACE_H.appendChild(INTERFACE_H.user);
			// 	INTERFACE_H.user.head=ASElement({
			// 		nodeName:"div",
			// 		style:{
			// 			float:"right",
			// 			width:DEFAULT_USER_IMG_WIDTH,
			// 			height:DEFAULT_USER_IMG_HEIGHT,
			// 			backgroundImage:"url('"+ASGetSrcByName("userHead1")+"')",
			// 			backgroundSize:"100% 100%",
			// 			cursor:"pointer",
			// 		},
			// 		onmouseover:function() {
			// 			this.setTarget({transform:{scale:1.05}});
			// 			this.pic.setTarget({opacity:1});
			// 		},
			// 		onmouseout:function() {
			// 			this.setTarget({transform:{scale:1}});
			// 			this.pic.setTarget({opacity:0});
			// 		},
			// 		onmousedown:function() {
			// 			this.setTarget({transform:{scale:0.95}});
			// 			this.pic.setTarget({opacity:1});
			// 		},
			// 		onmouseup:function() {
			// 			this.setTarget({transform:{scale:1.05}});
			// 			this.pic.setTarget({opacity:1});
			// 		},
			// 		onclick:function() {
			// 			changeURL("myspace");
			// 		},

			// 	});
			// 	INTERFACE_H.user.appendChild(INTERFACE_H.user.head);
			// 		INTERFACE_H.user.head.pic=ASElement({
			// 			nodeName:"img",
			// 			src:ASGetSrcByName("userHead2"),
			// 			style:{
			// 				width:"100%",
			// 				height:"100%",
			// 				opacity:0,
			// 				cursor:"pointer",
			// 			},
			// 		});
			// 		INTERFACE_H.user.head.appendChild(INTERFACE_H.user.head.pic);
			// 	INTERFACE_H.user.word=BasicWord({
			// 		size:28,
			// 		color:"white",
			// 		wordC:"遊   客",
			// 		wordE:"Visitor",
			// 		style:{
			// 			position:"relative",
			// 			float:"right",
			// 			marginTop:68,
			// 			width:350,
			// 			textAlign:"right",
			// 			textShadow:"0 0 5px rgba(0,0,0,0.8)",
			// 			transformOrigin:"100% 100%",
   //                      cursor: "pointer",
   //                      visibility: "hidden"
			// 		},
			// 		onclick:function() {
			// 			changeURL("myspace");
			// 		},
			// 	});
			// 	INTERFACE_H.user.appendChild(INTERFACE_H.user.word);
			// 	INTERFACE_H.user.log=BasicWord({
			// 		size:20,
			// 		color:"white",
			// 		wordC:"登   入",
			// 		wordE:"Log in",
			// 		ignoreM:true,
			// 		style:{
			// 			position:"relative",
			// 			float:"right",
			// 			textShadow:"0 0 5px rgba(0,0,0,0.8)",
			// 			cursor:"pointer",
   //                      transformOrigin: "100% 0",
   //                      visibility: "hidden"
			// 		},
			// 		onclick:function() {
			// 			changeURL("login");
			// 		},
			// 	});
			// 	INTERFACE_H.user.appendChild(INTERFACE_H.user.log);

			// INTERFACE_H.user.update=function() {
			// 	if (USERDATA=="NULL") {
			// 		this.word.setWord({
			// 			wordC:"遊   客",
			// 			wordE:"Visitor",
			// 		});
			// 		this.log.setWord({
			// 			wordC:"登   入",
			// 			wordE:"Log in",
			// 		});
			// 		this.log.onclick=function() {
			// 			changeURL("login");
			// 		};
			// 	} else {
			// 		var name=USERDATA.name;
			// 		if (USERDATA.nickname) name=USERDATA.nickname;
			// 		this.word.setWord({
			// 			wordC:name,
			// 			wordE:name,
			// 		});
			// 		this.log.setWord({
			// 			wordC:"登   出",
			// 			wordE:"Log out",
			// 		});
			// 		this.log.onclick=function() {
			// 			changeURL("logout");
			// 		};
			// 	}
			// }

		INTERFACE_H.changeVersion();

	}

	// Reworked Color Palette

	COLOR_MUTEDRED = '#c80000'
	COLOR_LIGHTRED = '#ff3333'
	COLOR_SOFTWHITE = '#fff7f0'


	function buildInterfaceL() {

		INTERFACE_L=ASElement({
			nodeName:"div",
			style:{
				position:"absolute",
				display:"none",
			},
		});
		ROOT.appendChild(INTERFACE_L);

		INTERFACE_L.resize=function() {
			this.head.set({style:{
				width:ASWindowWidth,
			}});
			var width=DEFAULT_FRAME_WIDTH;
			if (ASVersion=="vertical") width=VERTICAL_FRAME_WIDTH;
			this.head.backF.set({style:{
				width:(ASWindowWidth-width)/2,
			}});
			this.head.userF.set({style:{
				minWidth:(ASWindowWidth-width)/2,
			}});
		}

		INTERFACE_L.changeVersion=function() {
			if (ASVersion=="horizon") {
				this.head.set({style:{
					height:DEFAULT_HEAD_HEIGHT,
				}});
				this.head.backF.set({style:{
					minWidth:DEFAULT_HEAD_ICON_SIZE,
				}});
				for (var item in this.head.icon) {
					this.head.icon[item].set({style:{
						width:DEFAULT_HEAD_ICON_SIZE,
						height:DEFAULT_HEAD_ICON_SIZE,
						marginTop:0,
					}});
				}
				this.head.label.set({style:{
					transform:{
						scale:1,
						translateY:0,
					},
				}});
			} else {
				this.head.set({style:{
					height:VERTICAL_HEAD_HEIGHT,
				}});
				this.head.backF.set({style:{
					minWidth:VERTICAL_HEAD_ICON_SIZE,
				}});
				for (var item in this.head.icon) {
					this.head.icon[item].set({style:{
						width:VERTICAL_HEAD_ICON_SIZE,
						height:VERTICAL_HEAD_ICON_SIZE,
						marginTop:1,
					}});
				}
				this.head.label.set({style:{
					transform:{
						scale:2,
						translateY:15,
					},
				}});
			}
		}

		INTERFACE_L.appear=function() {
			this.set({style:{
				display:"inline-block",
			}});
			this.head.setTarget({
				top:0,
			});
		}

		INTERFACE_L.hide=function() {
			if (this.head.style.top==(-DEFAULT_HEAD_HEIGHT*2)+"px") this.set({style:{display:"none"}});
		}

		INTERFACE_L.disappear=function() {
			this.head.setTarget({
				top:-DEFAULT_HEAD_HEIGHT*2,
			});
			this.setTimeout(this.hide,500);
		}

			// Interface HEAD

			INTERFACE_L.head=ASElement({
				nodeName:"div",
				style:{
					position:"relative",
					top:-DEFAULT_HEAD_HEIGHT*2,
					width:ASWindowWidth,
					height:DEFAULT_HEAD_HEIGHT,
					backgroundColor:COLOR_MUTEDRED,
					// backgroundImage:"url('"+ASGetSrcByName("headBack")+"')",
					backgroundSize:"100% 100%",
					// boxShadow:"0 0 15px rgba(0,0,0,0.8)",
				},
			});
			INTERFACE_L.appendChild(INTERFACE_L.head);
			var head=INTERFACE_L.head;
			var data=ASGetSourceByName("data0").getNodeByName("head").getNodeByName("icon");
			head.icon={};

				head.backF=ASElement({
					nodeName:"div",
					style:{
						marginTop:3,
						width:(ASWindowWidth-DEFAULT_FRAME_WIDTH)/2,
						minWidth:DEFAULT_HEAD_ICON_SIZE,
					},
				});
				head.appendChild(head.backF);
					head.icon.back=HeadIcon({
						src:data.getAttribute("root")+"back",
						onclick:function() {
							if (INTERFACE_C.active.type=="frame") {
								changeURL(INTERFACE_C.active.backTo);
							}
						}
					});
					head.backF.appendChild(head.icon.back);

				head.leftF=ASElement({
					nodeName:"div",
					style:{
						marginTop:4,
					}
				});
				head.appendChild(head.leftF);
				for (var i=0;i<data.getNodeByName("left").node.length;i++) {
					var name=data.getNodeByName("left").node[i].getAttribute("name");
					head.icon[name]=HeadIcon({
						src:data.getAttribute("root")+name,
						nameC:data.getNodeByName("left").node[i].getAttribute("nameC"),
						nameE:data.getNodeByName("left").node[i].getAttribute("nameE"),
						linkTo:data.getNodeByName("left").node[i].getAttribute("linkTo"),
						hyperlink:data.getNodeByName("left").node[i].getAttribute("hyperlink"),
					});
					head.leftF.appendChild(head.icon[name]);
				}

				head.userF=ASElement({
					nodeName:"div",
					style:{
						marginTop:3,
						float:"right",
						minWidth:(ASWindowWidth-DEFAULT_FRAME_WIDTH)/2,
					},
				});
				head.appendChild(head.userF);
					head.userF.log=BasicWord({
						size:18,
						color:"white",
						wordC:"登  入",
						wordE:"Log in",
						ignoreM:true,
						style:{
							float:"right",
							marginRight:15,
							marginTop:9,
                            cursor: "pointer",
                            visibility: "hidden"
						},
						onclick:function() {
							changeURL("login");
						},
					});
					head.userF.appendChild(head.userF.log);
					head.userF.user=BasicWord({
						size:26,
						color:"white",
						wordC:"遊   客",
						wordE:"Visitor",
						ignoreM:true,
						style:{
							float:"right",
							marginTop:3.5,
							marginRight:15,
							marginLeft:20,
                            cursor: "pointer",
                            visibility: "hidden"
						},
						onclick:function() {
							changeURL("myspace");
						},
					});
					head.userF.appendChild(head.userF.user);
				head.userF.update=function() {
					if (USERDATA=="NULL") {
						this.log.setWord({
							wordC:"登  入",
							wordE:"Log in",
						});
						this.user.setWord({
							wordC:"遊   客",
							wordE:"Visitor",
						});
						this.log.onclick=function() {
							changeURL("login");
						};
						this.user.onclick=function() {
							changeURL("login");
						};
					} else {
						this.log.setWord({
							wordC:"登  出",
							wordE:"Log out",
						});
						var name=USERDATA.name;
						if (USERDATA.nickname) name=USERDATA.nickname;
						this.user.setWord({
							wordC:name,
							wordE:name,
						});
						this.log.onclick=function() {
							changeURL("logout");
						};
						this.user.onclick=function() {
							changeURL("myspace");
						};
					}
				}

				head.rightF=ASElement({
					nodeName:"div",
					style:{
						marginTop:4,
						float:"right",
					},
				});
				head.appendChild(head.rightF);
				for (var i=0;i<data.getNodeByName("right").node.length;i++) {
					var name=data.getNodeByName("right").node[i].getAttribute("name");
					head.icon[name]=HeadIcon({
						src:data.getAttribute("root")+name,
						nameC:data.getNodeByName("right").node[i].getAttribute("nameC"),
						nameE:data.getNodeByName("right").node[i].getAttribute("nameE"),
						linkTo:data.getNodeByName("right").node[i].getAttribute("linkTo"),
						hyperlink:data.getNodeByName("right").node[i].getAttribute("hyperlink"),
					});
					head.rightF.appendChild(head.icon[name]);
				}


				head.label=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						transformOrigin:"50% 0",
						backgroundColor:"rgb(230,0,0)", // Label Tooltip Color
						padding:"3px 10px",
						borderRadius:3,
						visibility:"hidden",
						opacity:0,
					},
				});
				head.appendChild(head.label);
					head.label.word=ASElement({
						nodeName:"div",
					});
					head.label.appendChild(head.label.word);
					head.label.point=ASElement({
						nodeName:"div",
						style:{
							position:"absolute",
							left:"50%",
							top:-5,
							width:10,
							height:10,
							backgroundColor:"rgb(230,0,0)", // Label Tooltip Diamond Color
							transformOrigin:"0 0",
							transform:{
								rotate:45,
							},
						},
					});
					head.label.appendChild(head.label.point);
				head.changeLabel=function(target) {
					if (target && !target.nameC) target=null;
					if (!target) {
						this.label.setTimeout(function() {
							for (var item in INTERFACE_L.head.icon) {
								if (INTERFACE_L.head.icon[item].nameC && INTERFACE_L.head.icon[item].wMouseOver) return;
							}
							this.setTarget({opacity:0});
						},100);
						this.label.setTimeout(function() {
							for (var item in INTERFACE_L.head.icon) {
								if (INTERFACE_L.head.icon[item].nameC && INTERFACE_L.head.icon[item].wMouseOver) return;
							}
							if (this.style.opacity=="0") this.style.visibility="hidden";
						},400);
						return;
					}
					this.label.removeChild(this.label.word);
					this.label.word=target.word;
					this.label.appendChild(this.label.word);
					var top=DEFAULT_HEAD_HEIGHT-5;
					if (this.label.style.visibility=="visible") top=DEFAULT_HEAD_HEIGHT+5;
					this.label.set({style:{
						left:target.offsetLeft+ASGetElementWidth(target)/2-ASGetElementWidth(this.label)/2+3,
						top:top,
						visibility:"visible",
					}});
					this.label.setTimeout(function() {this.setTarget({
						opacity:1,
						top:DEFAULT_HEAD_HEIGHT+5,
					})},10);
				}

		INTERFACE_L.changeVersion();

	}

	// 管理整體顯示 INTERFACE_C
	function buildInterfaceC() {


		INTERFACE_C=ASElement({
			nodeName:"div",
			style:{
				position:"absolute",
				left:ASWindowWidth/2,
				top:ASWindowHeight/2,
			},
		});
		ROOT.appendChild(INTERFACE_C);
		INTERFACE_C.active=null;
		INTERFACE_C.wait=null;
		INTERFACE_C.history=[];
		INTERFACE_C.maxHistoryLength = 5;

		INTERFACE_C.resize=function() {
			this.set({style:{
				left:ASWindowWidth/2,
				top:ASWindowHeight/2,
			}});
			for (var item in FRAME) FRAME[item].resize();
			for (var item in SHELL) SHELL[item].resize();
			for (var item in FRAME_V) FRAME_V[item].resize();
			for (var item in SHELL_V) SHELL_V[item].resize();
		}

		// 主要的页面构筑逻辑
		INTERFACE_C.call=function(name) {

			var target;
			if (ASVersion=="horizon") {
				if (CARDBOARD[name]) target=CARDBOARD[name];
				if (FRAME[name]) target=FRAME[name];
				if (SHELL[name]) target=SHELL[name];
				if (!target) {
					if (CARDBOARD_P[name]) {
						CARDBOARD[name]=CardBoard(CARDBOARD_P[name]);
						target=CARDBOARD[name];
					}
					if (FRAME_P[name]) {
						FRAME[name]=Frame(FRAME_P[name]);
						target=FRAME[name];
					}
					if (SHELL_P[name]) {
						SHELL[name]=Shell(SHELL_P[name]);
						target=SHELL[name];
					}
				}
			}
			if (ASVersion=="vertical") {
				if (CARDBOARD_V[name]) target=CARDBOARD_V[name];
				if (FRAME_V[name]) target=FRAME_V[name];
				if (SHELL_V[name]) target=SHELL_V[name];
				if (!target) {
					if (CARDBOARD_PV[name]) {
						CARDBOARD_V[name]=CardBoardV(CARDBOARD_PV[name]);
						target=CARDBOARD_V[name];
					}
					if (FRAME_P[name]) {
						FRAME_V[name]=FrameV(FRAME_P[name]);
						target=FRAME_V[name];
					}
					if (SHELL_P[name]) {
						SHELL_V[name]=ShellV(SHELL_P[name]);
						target=SHELL_V[name];
					}
				}
			}
			if (!target) return;
			if (target.update) target.update();

			if (this.active && this.active==target) {
				if (this.active.dealJumpPros) this.active.dealJumpPros();
				return;
			}

			if (target.type=="frame") {
				target.dealJumpPros();
				if (!target.pageC.wBuild) {
					target.pageC.build();
				}
			}
			if (target.type=="shell") {
				if (!target.page.wBuild) {
					target.page.build();
					target.slideC.onscroll();
				}
			}

			if (!this.active) {
				if (target.type=="cardBoard") {
					this.appendChild(target);
					target.appearFromBack();
				}
				if (target.type=="frame") {
					this.appendChild(target);
					target.appearFromTop();
				}
				if (target.type=="shell") {
					this.appendChild(target);
					target.appearFromBottom();
				}
				target.setTimeout(function(){this.appear();},10);
				this.active=target;
				return;
			}

			if (this.active.type=="cardBoard" && target.type=="cardBoard") {
				this.active.disappearToBack();
				this.appendChild(target);
				target.appearFromBack();
				target.setTimeout(function(){this.appear();},200);
			}
			if (this.active.type=="cardBoard" && target.type=="frame") {
				INTERFACE_H.disappear();
				var k=-1;
				for (var i=0;i<this.active.card.length;i++) {
					if (this.active.card[i].linkTo==target.name) {
						k=i;
						break;
					}
				}
				if (k==-1 || ASBrowser=="Mobile") {
					this.active.disappearToBack();
					this.appendChild(target);
					target.appearFromTop();
					this.setTimeout(function() {this.active.appear();},250);
				} else {
					this.active.disappearRolling(k);
					this.appendChild(target);
					target.appearRolling(this.active.card[k]);
					target.set({style:{visibility:"hidden"}});
					target.appear();
					this.setTimeout(function() {this.active.set({style:{visibility:"visible"}});},125);
				}
			}
			if (this.active.type=="cardBoard" && target.type=="shell") {
				INTERFACE_H.disappear();
				target.appearFromBottom();
				this.appendChild(target);
				this.setTimeout(function() {this.active.appear();},10);
			}
			if (this.active.type=="frame" && target.type=="cardBoard") {
				INTERFACE_L.disappear();
				var k=-1;
				for (var i=0;i<target.card.length;i++) {
					if (target.card[i].linkTo==this.active.name) {
						k=i;
						break;
					}
				}
				if (k==-1 || ASBrowser=="Mobile") {
					this.active.disappearToTop();
					this.appendChild(target);
					target.appearFromBack();
					this.setTimeout(function() {this.active.appear();},250);
				} else {
					this.active.disappearRolling(target.card[k]);
					this.appendChild(target);
					target.appearRolling(k);
					this.setTimeout(function() {this.active.appear();},10);
				}
			}
			if (this.active.type=="frame" && target.type=="frame") {
				if (this.active.backTo && target.backTo && this.active.backTo==target.backTo) {
					this.active.disappearTurning();
					this.appendChild(target);
					target.appearTurning();
					this.setTimeout(function() {this.active.appear();},200);
				} else {
					this.active.disappearToTop();
					this.appendChild(target);
					target.appearFromTop();
					this.setTimeout(function() {this.active.appear();},250);
				}
			}
			if (this.active.type=="frame" && target.type=="shell") {
				INTERFACE_L.disappear();
				target.appearFromBottom();
				this.appendChild(target);
				this.setTimeout(function() {this.active.appear();},10);
			}

			if (this.active.type=="shell" && target.type=="cardBoard") {
				this.setTimeout(function() {INTERFACE_H.appear();},10);
				this.active.disappear();
				if (target.parentNode!=this) {
					this.appendChild(target);
					target.appearFromBack();
					this.setTimeout(function() {this.active.appear();},150);
				}
			}
			if (this.active.type=="shell" && target.type=="frame") {
				this.setTimeout(function() {INTERFACE_L.appear();},10);
				this.active.disappear();
				if (target.parentNode!=this) {
					this.appendChild(target);
					target.appearFromTop();
					this.setTimeout(function() {this.active.appear();},150);
				}
			}
			if (this.active.type=="shell" && target.type=="shell") {
				this.active.disappearEasy();
				if (target.parentNode!=this) {
					this.appendChild(target);
					target.appearEasy();
					this.setTimeout(function() {this.active.appear();},250);
				}
			}

			this.active=target;

		}

			buildPage();
			buildShell();
			buildFrame();
			buildCardBoard();

	}


	function setLang(l) {
		ASLang=l;
		if (ASLang=="C") {
			document.title="中國民間藝術坊";
		} else {
			document.title="Chinese Folk Art Society";
		}
		for (var i=0;i<BasicWordList.length;i++) BasicWordList[i].setLang(l);
		for (var i=0;i<BasicEditToolList.length;i++) BasicEditToolList[i].setLang(l);
		for (var i=0;i<AnchorListList.length;i++) AnchorListList[i].resize();
		for (var i=0;i<PageListList.length;i++) PageListList[i].resize();
		if (typeof(PAGE)!="undefined") for (var page in PAGE) {
			if (PAGE[page].setLang) PAGE[page].setLang();
		}
		if (typeof(PAGE_V)!="undefined") for (var page in PAGE_V) {
			if (PAGE_V[page].setLang) PAGE_V[page].setLang();
		}
		if (typeof(INTERFACE_C)!="undefined" && INTERFACE_C.active && INTERFACE_C.active.type=="frame") {
			if (INTERFACE_C.active.pageResize) INTERFACE_C.active.pageResize();
		}
	}


	function ASChangeVersion() {

		if (typeof(SCENE)!="undefined") SCENE.changeVersion();
		if (typeof(INTERFACE_L)!="undefined") INTERFACE_L.changeVersion();
		if (typeof(INTERFACE_H)!="undefined") INTERFACE_H.changeVersion();
		if (INTERFACE_C.active) {
			ROOT.setTimeout(function() {INTERFACE_C.call(INTERFACE_C.active.name);},500);
		}

	}


	function ASResize() {

		if (typeof(SCENE)!="undefined") SCENE.resize();
		if (typeof(INTERFACE_H)!="undefined") INTERFACE_H.resize();
		if (typeof(INTERFACE_C)!="undefined") INTERFACE_C.resize();
		if (typeof(INTERFACE_L)!="undefined") INTERFACE_L.resize();
		if (typeof(PAGE)!="undefined") for (var item in PAGE) {
			if (PAGE[item].wBuild && PAGE[item].resize) PAGE[item].resize();
		}
		if (typeof(PAGE_V)!="undefined") for (var item in PAGE_V) {
			if (PAGE_V[item].wBuild && PAGE_V[item].resize) PAGE_V[item].resize();
		}

	}


	function userLogin(user,ticket) {
		addACookie("cfas_user",user,8*3600);
		addACookie("cfas_ticket",ticket,8*3600);
		sendAJAX({
			type:"POST",
			src:"cgi-bin/operateData.php",
			data:{
				user:user,
				ticket:ticket,
				action:"getUserData",
			},
		});
	}


	function userComeback(user,ticket) {
		sendAJAX({
			type:"POST",
			src:"cgi-bin/operateData.php",
			data:{
				user:user,
				ticket:ticket,
				action:"getUserData",
			},
		});
	}


	function getUserData(data) {

		USERDATA=data;
		for (var item in USERDATA) {
			if (item=="func") continue;
			USERDATA[item]=decodeWord(USERDATA[item]);
		}
		for (var item in USERDATA.func) {
			for (var itemS in USERDATA.func[item]) {
				USERDATA.func[item][itemS]=decodeWord(USERDATA.func[item][itemS]);
			}
		}
		updateUserData();
		if (location.href.indexOf("#!login")!=-1) {
			goBack();
			setTimeout(function(){
				if (location.href.indexOf("#!login")!=-1) goBack();
			},50);
		}

	}


	function getTargetData(data) {

		if (!data) {
			TARGETDATA="NULL";
		} else {
			TARGETDATA=data;
			for (var item in TARGETDATA) {
				if (item=="func") continue;
				TARGETDATA[item]=decodeWord(TARGETDATA[item]);
			}
			for (var item in TARGETDATA.func) {
				for (var itemS in TARGETDATA.func[item]) {
					TARGETDATA.func[item][itemS]=decodeWord(TARGETDATA.func[item][itemS]);
				}
			}
		}

	}


	function getFuncData(data) {
		FUNCDATA=data;
		for (var i=0;i<FUNCDATA.length;i++) {
			var data=FUNCDATA[i];
			for (var item in data) {
				data[item]=decodeWord(data[item]);
			}
		}
	}


	function requestTargetData(target,callback) {
		if (USERDATA=="NULL") return;
		if (!callback) callback="";
		sendAJAX({
			type:"POST",
			src:"cgi-bin/operateData.php",
			callback:callback,
			data:{
				user:USERDATA.user,
				ticket:USERDATA.ticket,
				target:target,
				action:"getTargetData",
			},
		});
	}


	function userLoginTimeIn() {
		USERDATA.wChecking=false;
	}


	function userLoginTimeout(wHide) {
		USERDATA="NULL";
		updateUserData();
		if (!wHide) location.href="#loginTimeout";
	}


	function checkUserLogin() {

		var user=getACookie("cfas_user");
		var ticket=getACookie("cfas_ticket");
		if (!user || !ticket) return(false);

		sendAJAX({
			type:"POST",
			data:{
				user:user,
				ticket:ticket,
			},
			src:"cgi-bin/checkUserLogin.php",
		});

	}


	function updateUserData() {

		INTERFACE_H.user.update();
		INTERFACE_L.head.userF.update();
		if (typeof(FRAME)!="undefined") {
			for (var page in FRAME) {
				if (FRAME[page].update) FRAME[page].update();
			}
		}
		if (typeof(FRAME_V)!="undefined") {
			for (var page in FRAME_V) {
				if (FRAME_V[page].update) FRAME_V[page].update();
			}
		}
		if (typeof(PAGE)!="undefined") {
			for (var page in PAGE) {
				if (PAGE[page].update && PAGE[page].wBuild) PAGE[page].update();
			}
		}
		if (typeof(PAGE_V)!="undefined") {
			for (var page in PAGE_V) {
				if (PAGE_V[page].update && PAGE_V[page].wBuild) PAGE_V[page].update();
			}
		}

	}


	function postUserDataFail() {
		alert("postUserDataFail!");
	}


	function postUserDataSucceed() {
		if (PostDataR.banDefault) return;
		for (var item in PostDataR) USERDATA[item]=PostDataR[item];
		updateUserData();
		PostDataR=null;
	}


	function postUserData(data,callback) {

		if (USERDATA=="NULL") return;
		if (!callback) callback="";
		var data1={};
		data1.user=USERDATA.user;
		data1.ticket=USERDATA.ticket;
		data1.action="postUserData";
		for (var i=0;i<UserDataList.length;i++) {
			if (UserDataList[i] in data) {
				data1[UserDataList[i]]=data[UserDataList[i]];
			}
		}
		PostDataR=data1;
		sendAJAX({
			type:"POST",
			src:"cgi-bin/operateData.php",
			data:data1,
			callback:callback,
		});

	}

	// 这里是有关于页面 URL 更改，怎么改变页面显示的逻辑
	window.onhashchange=function() {

		var href=location.href;
		var target="main";
		JumpPros={};
		var typeP={};
		for (;;) {
			var s1=href.indexOf("#");
			if (s1<0) break;
			if (href.charAt(s1+1)=="!") s1++;
			var code=href.substr(s1+1);
			var s2=code.indexOf("?");
			if (s2<0) {
				target=code;
				break;
			}
			target=code.substr(0,s2);
			var pros=code.substr(s2+1);
			for (;pros.length>0;) {
				var s3=pros.indexOf("=");
				var s4=pros.indexOf("&");
				if (s4<0) s4=pros.length;
				JumpPros[pros.substr(0,s3)]=pros.substr(s3+1,s4-s3-1);
				pros=pros.substr(s4+1);
			}
			break;
		}

		var yes=false;
		// 检测页面是否存在，是那种页面
		if (CARDBOARD_P[target]) yes=true;
		if (FRAME_P[target]) yes=true;
		if (SHELL_P[target]) yes=true;
		if (yes) {
			// 添加到歷史裡面
			INTERFACE_C.history.push(target);
			if (INTERFACE_C.history.length > INTERFACE_C.maxHistoryLength) {
				INTERFACE_C.history.shift()
			}
			// 构筑那个页面
			INTERFACE_C.call(target,typeP);
		} else {
			// 返回主界面
			INTERFACE_C.call("main");
		}

	}


	function goBack() {

		// if (history.length>ASHistoryStartN) {
			// history.back();
		// } else {
			// changeURL("main");
		// }

		var current = INTERFACE_C.history.pop()

		// SHELL_P[current] = null;
		// SHELL[current] = null;

		var last = INTERFACE_C.history.pop()

		if (last)
			changeURL(last)
		else 
			changeURL("main")

	}


	function changeURL(url) {
		location.href="#!"+url;
	}


	function ASCustomF() {

		buildScene();

	}

	// 一切的接入口
	function ASCustom() {

		// 构造一切的开始
		buildMain=function() {

			//if (location.href.indexOf("#")==-1) SCENE.change("autumn1.jpg");
			// 这里几种不同的构筑是针对不同屏幕大小的……吧？
			buildInterfaceC();
			buildInterfaceL();
			buildInterfaceH();

		}

		checkUserLogin();

		if (!getACookie("cfas_lang")) {

			// Default to Chinese
			addACookie("cfas_lang","C",10*365*24*3600);
			setLang("C");
			buildMain();
			window.onhashchange();

			// Old Splash Page

				// SCENE.change("Origin/main.png");

				// FORE=ASElement({
				// 	nodeName:"div",
				// 	style:{
				// 		position:"absolute",
				// 		width:"100%",
				// 		height:"100%",
				// 	},
				// });
				// ROOT.appendChild(FORE);
				// FORE.clearSelf=function() {
				// 	this.setTarget({
				// 		opacity:0,
				// 		speed_alpha:0.05,
				// 	});
				// 	FORE.setTimeout(function(){
				// 		this.parentNode.removeChild(this);
				// 	},1000);
				// }

				// 	FORE.logo=ASElement({
				// 		nodeName:"img",
				// 		src:ASGetSrcByName("logo"),
				// 		style:{
				// 			marginLeft:25,
				// 			marginTop:25,
				// 			width:100,
				// 			opacity:0,
				// 			pointerEvents:"none",
				// 			transformOrigin:"0 0",
				// 		},
				// 	});
				// 	FORE.appendChild(FORE.logo);
				// 	FORE.logo.setTarget({
				// 		opacity:1,
				// 		speed_alpha:0.05,
				// 	});
				// 	if (ASVersion=="vertical") {
				// 		FORE.logo.set({style:{transform:{scale:1.5}}});
				// 	}

				// 	FORE.wordF=ASElement({
				// 		nodeName:"div",
				// 		style:{
				// 			position:"absolute",
				// 			width:500,
				// 			height:360,
				// 			right:0,
				// 			bottom:0,
				// 			transformOrigin:"100% 100%",
				// 		},
				// 	})
				// 	FORE.appendChild(FORE.wordF);
				// 	if (ASVersion=="vertical") {
				// 		FORE.wordF.set({style:{transform:{scale:1.5}}});
				// 	}

				// 		FORE.word1=ASElement({
				// 			nodeName:"p",
				// 			innerHTML:"民   藝<br><span style='font-size:40px'>Folk Art</span>",
				// 			style:{
				// 				position:"relative",
				// 				textAlign:"right",
				// 				right:-400,
				// 				fontFamily:DEFAULT_FONT,
				// 				fontSize:50,
				// 				color:"white",
				// 				textShadow:"0 0 15px rgba(0,0,0,0.8)",
				// 				pointerEvents:"none",
				// 			},
				// 		});
				// 		FORE.wordF.appendChild(FORE.word1);
				// 		FORE.word1.setTimeout(function(){
				// 			this.setTarget({
				// 				right:40,
				// 				time:500,
				// 			});
				// 		},1000);

				// 		FORE.word2=ASElement({
				// 			nodeName:"p",
				// 			innerHTML:"其實並不遙遠<br><span style='font-size:40px'>Is on our side</span>",
				// 			style:{
				// 				position:"relative",
				// 				textAlign:"right",
				// 				right:-400,
				// 				fontFamily:DEFAULT_FONT,
				// 				fontSize:50,
				// 				color:"white",
				// 				textShadow:"0 0 15px rgba(0,0,0,0.8)",
				// 				pointerEvents:"none",
				// 			},
				// 		});
				// 		FORE.wordF.appendChild(FORE.word2);
				// 		FORE.word2.setTimeout(function(){
				// 			this.setTarget({
				// 				right:40,
				// 				time:500,
				// 			});
				// 		},1500);

				// 		FORE.buttonC=BasicButton({
				// 			size:30,
				// 			wordC:"進  入",
				// 			style:{
				// 				marginTop:20,
				// 				marginLeft:230,
				// 				opacity:0,
				// 			},
				// 			onclick:function() {
				// 				addACookie("cfas_lang","C",10*365*24*3600);
				// 				setLang("C");
				// 				FORE.clearSelf();
				// 				buildMain();
				// 				window.onhashchange();
				// 			},
				// 		});
				// 		FORE.wordF.appendChild(FORE.buttonC);
				// 		FORE.buttonC.setTimeout(function(){
				// 			this.setTarget({
				// 				opacity:1,
				// 				speed_alpha:0.05,
				// 			});
				// 		},2000);

				// 		FORE.buttonE=BasicButton({
				// 			size:30,
				// 			wordE:"Enter",
				// 			style:{
				// 				marginLeft:15,
				// 				opacity:0,
				// 			},
				// 			onclick:function() {
				// 				addACookie("cfas_lang","E",10*365*24*3600);
				// 				setLang("E");
				// 				FORE.clearSelf();
				// 				buildMain();
				// 				window.onhashchange();
				// 			},
				// 		});
				// 		FORE.wordF.appendChild(FORE.buttonE);
				// 		FORE.buttonE.setTimeout(function(){
				// 			this.setTarget({
				// 				opacity:1,
				// 				speed_alpha:0.05,
				// 			});
				// 		},2500);

		} else {

			/*
			sendAJAX({
				type:"GET",
				src:"functionC.html",
				succeed:function() {
					var str=this.responseText;
					var s=str.indexOf("<noscript>")+10;
					var e=str.indexOf("</noscript>");
					str=str.slice(s,e);
					var dom=(new DOMParser()).parseFromString(str,"text/xml");
					console.log(dom);
				},
			});
			*/
			var lang=getACookie("cfas_lang");
			if (lang!="C" && lang!="E") lang="C";
			setLang(lang);
			if (location.href.indexOf("cookGame")!=-1) {
				var titleImgC=ASElement({
					nodeName:"div",
					style:{
						position:"absolute",
						display:"none",
					},
				});
				ROOT.appendChild(titleImgC);
				var titleImg=ASElement({
					nodeName:"img",
					src:"Image/Page/cookGame/title.jpg?aa=233",
					style:{
						position:"absolute",
						opacity:0.5,
					},
				});
				titleImgC.appendChild(titleImg);
			}
			buildMain();
			// changeURL("lanternGame");
			window.onhashchange();

		}

	}
