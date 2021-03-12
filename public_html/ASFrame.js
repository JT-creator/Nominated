	
	
	var oo=1000000000;
	var emptyFunction=function() {};
	var banFunction=function() {return false;};
	
	
	//basic
	
	
	function combine() {
		
		var a={};
		for (var i=0;i<arguments.length;i++) {
			for (var item in arguments[i]) {
				if (!(item in a)) {
					a[item]=arguments[i][item];
				}
			}
		}
		return(a);
		
	}
	
	
	function clone(target) {
		var o1={};
		for (var item in target) {
			if (typeof(target[item])!="object") {
				o1[item]=target[item];
			} else {
				o1[item]=clone(target[item]);
			}
		}
		return(o1);
	}
	
	
	function copy(a,b) {
		for (var item in b) {
			if (typeof(b[item])!="object") {
				a[item]=b[item];
			} else {
				a[item]={};
				copy(a[item],b[item]);
			}
		}
	}
	
	
	function wSame(a,b,d) {
		if (typeof(a)=="undefined" || typeof(b)=="undefined") return(false);
		if (typeof(a)!=typeof(b)) return(false);
		if (!d) d=0.0001;
		if (typeof(a)=="string" || typeof(a)=="boolean" || typeof(a)=="function") {
			return(a==b);
		}
		if (typeof(a)=="number") {
			if (a-b>d || a-b<-d) return(false);
			return(true);
		}
		for (var item in a) {
			if (!(item in b)) return(false);
			if (typeof(a)!=typeof(b)) return(false);
			if (typeof(a[item])=="string" || typeof(a[item])=="boolean" || typeof(a[item])=="function") {
				if (a[item]!=b[item]) return(false);
			}
			if (typeof(a[item])=="number") {
				if (a[item]-b[item]>d || a[item]-b[item]<-d) return(false);
			}
			if (typeof(a[item])=="object") {
				if (!wSame(a[item],b[item],d)) return(false);
			}
		}
		return(true);
	}
	
	
	var PointOStr=new function() {
		
		
		this.set=function(x,y) {
			this.x=x;
			this.y=y;
		}
		
		
		this.copy=function(p1) {
			this.x=p1.x;
			this.y=p1.y;
		}
		
		
		this.clone=function() {
			var target=new PointO(0,0);
			target.copy(this);
			return(target);
		}
		
		
		this.wSame=function() {
			var target=arguments[0];
			var d=0.0001;
			if (arguments.length>1) d=arguments[1];
			if (wSame(this.x,target.x,d) && wSame(this.y,target.y,d)) return(true);
			return(false);
		}
		
		
		this.printS=function() {
			return("("+this.x+","+this.y+")");
		}
		
		
		this.print=function() {
			alert(this.printS());
		}
		
		
		this.plus=function(p) {
			this.x+=p.x;
			this.y+=p.y;
			return(this);
		}
		
		
		this.plusNew=function(p) {
			p1=new PointO(this.x,this.y);
			p1.plus(p);
			return(p1);
		}
		
		
		this.sub=function(p) {
			this.x-=p.x;
			this.y-=p.y;
			return(this);
		}
		
		
		this.subNew=function(p) {
			p1=new PointO(this.x,this.y);
			p1.sub(p);
			return(p1);
		}
		
		
		this.multi=function(s) {
			this.x*=s;
			this.y*=s;
			return(this);
		}
		
		
		this.multiNew=function(s) {
			p1=new PointO(this.x,this.y);
			p1.multi(s);
			return(p1);
		}
		
		
		this.getIntoMatrixO=function(v0) {
			if (!v0.wBeing()) return;
			aa=v0.vx.y*v0.vy.x-v0.vx.x*v0.vy.y;
			this.sub(v0.p);
			this.set((v0.vy.x*this.y-v0.vy.y*this.x)/aa,(v0.vx.y*this.x-v0.vx.x*this.y)/aa);
		}
		
		
		this.getFromMatrixO=function(v0) {
			if (!v0.wBeing()) return;
			this.set(v0.p.x+v0.vx.x*this.x+v0.vy.x*this.y,v0.p.y+v0.vx.y*this.x+v0.vy.y*this.y);
		}
		
		
		this.getIntoMatrixONew=function(v0) {
			p1=new PointO(0,0);
			if (!v0.wBeing()) return(p1);
			p1.copy(this);
			p1.getIntoMatrixO(v0);
			return(p1);
		}
		
		
		this.getFromMatrixONew=function(v0) {
			p1=new PointO(0,0);
			if (!v0.wBeing()) return(p1);
			p1.copy(this);
			p1.getFromMatrixO(v0);
			return(p1);
		}
		
		
		this.getLength=function() {
			return(Math.sqrt(this.x*this.x+this.y*this.y));
		}
		
		
		this.setLength=function(s) {
			this.multi(s/this.getLength());
		}
		
		
		this.rotate=function(s) {
			this.set(this.x*Math.cos(s)-this.y*Math.sin(s),this.x*Math.sin(s)+this.y*Math.cos(s));
		}
		
		
		this.setRotation=function(s) {
			var l=this.getLength();
			this.set(l*Math.cos(s),l*Math.sin(s));
		}
		
	}
	
	
	function PointO(x1,y1) {
		
		this.x=x1;
		this.y=y1;
		
		this.set=PointOStr.set;
		this.copy=PointOStr.copy;
		this.clone=PointOStr.clone;
		this.wSame=PointOStr.wSame;
		this.printS=PointOStr.printS;
		this.print=PointOStr.print;
		this.plus=PointOStr.plus;
		this.plusNew=PointOStr.plusNew;
		this.sub=PointOStr.sub;
		this.subNew=PointOStr.subNew;
		this.multi=PointOStr.multi;
		this.multiNew=PointOStr.multiNew;
		this.getIntoMatrixO=PointOStr.getIntoMatrixO;
		this.getFromMatrixO=PointOStr.getFromMatrixO;
		this.getIntoMatrixONew=PointOStr.getIntoMatrixONew;
		this.getFromMatrixONew=PointOStr.getFromMatrixONew;
		this.getLength=PointOStr.getLength;
		this.setLength=PointOStr.setLength;
		this.rotate=PointOStr.rotate;
		this.setRotation=PointOStr.setRotation;
		
	}
		
	
	var VectorOStr=new function() {
		
		
		this.wBeing=function() {
			if (wSame(this.p1.x,0) && wSame(this.p1.y,0)) return(false);
			return(true);
		}
		
		
		this.setEmpty=function() {
			this.p1.x=0;
			this.p1.y=0;
		}
		
		
		this.copy=function(v0) {
			this.p.copy(v0.p);
			this.p1.copy(v0.p1);
		}
		
		
		this.clone=function() {
			var target=new VectorO(0,0,0,0);
			target.copy(this);
			return(target);
		}
		
		
		this.print=function() {
			alert(this.p.printS()+" "+this.p1.printS());
		}
		
		
		this.rotate=function(s) {
			this.p1.rotate(s);
			return(this);
		}
		
		
		this.rotation=function() {
			return(Math.atan2(this.p1.y,this.p1.x));
		}
		
		
		this.setRotation=function(rota) {
			this.p1.x=Math.cos(rota);
			this.p1.y=Math.sin(rota);
			return(this);
		}
		
		
		this.move=function(s) {
			var p=new PointO(this.p1.x,this.p1.y);
			p.rotate(90/180*Math.PI);
			p.setLength(s);
			this.p.plus(p);
			return(this);
		}
		
		
		this.getIntoMatrixO=function(v0) {
			if (!v0.wBeing()) return;
			var aa=v0.p1.y*v0.vy.x-v0.p1.x*v0.vy.y;
			if (wSame(aa,0)) {
				this.setEmpty();
				return;
			}
			this.p.sub(v0.p);
			this.p.set((v0.vy.x*this.p.y-v0.vy.y*this.p.x)/aa,(v0.p1.y*this.p.x-v0.p1.x*this.p.y)/aa);
			this.p1.set((v0.vy.x*this.p1.y-v0.vy.y*this.p1.x)/aa,(v0.p1.y*this.p1.x-v0.p1.x*this.p1.y)/aa);
			return(this);
		}
		
		
		this.getFromMatrixO=function(v0) {
			if (!v0.wBeing()) return;
			this.p.set(v0.p.x+v0.p1.x*this.p.x+v0.vy.x*this.p.y,v0.p.y+v0.p1.y*this.p.x+v0.vy.y*this.p.y);
			this.p1.set(v0.p1.x*this.p1.x+v0.vy.x*this.p1.y,v0.p1.y*this.p1.x+v0.vy.y*this.p1.y);
			return(this);
		}
		
		
		this.getIntoMatrixONew=function(v0) {
			var v1=new VectorO(this.p.x,this.p.y,this.p1.x,this.p1.y);
			v1.getIntoMatrixO(v0);
			return(v1);
		}
		
		
		this.getFromMatrixONew=function(v0) {
			var v1=new VectorO(this.p.x,this.p.y,this.p1.x,this.p1.y);
			v1.getFromMatrixO(v0);
			return(v1);
		}
		
		
		this.countPointDis=function(p) {
			return(Math.abs(((p.x-this.p.x)*this.p1.y-(p.y-this.p.y)*this.p1.x)/this.p1.getLength()));
		}
		
	}
	
	
	function VectorO(x0,y0,x1,y1) {
		
		this.p=new PointO(x0,y0);
		this.p1=new PointO(x1,y1);
		
		this.wBeing=VectorOStr.wBeing;
		this.setEmpty=VectorOStr.setEmpty;
		this.copy=VectorOStr.copy;
		this.clone=VectorOStr.clone;
		this.print=VectorOStr.print;
		this.rotate=VectorOStr.rotate;
		this.rotation=VectorOStr.rotation;
		this.setRotation=VectorOStr.setRotation;
		this.move=VectorOStr.move;
		this.getIntoMatrixO=VectorOStr.getIntoMatrixO;
		this.getFromMatrixO=VectorOStr.getFromMatrixO;
		this.getIntoMatrixONew=VectorOStr.getIntoMatrixONew;
		this.getFromMatrixONew=VectorOStr.getFromMatrixONew;
		this.countPointDis=VectorOStr.countPointDis;
		
	}
		
	
	var MatrixOStr=new function() {
		
		this.wBeing=function() {
			//if (wSame(this.vx.x,0) && wSame(this.vx.y,0)) return(false);
			return(true);
		}
		
		this.wSame=function() {
			var target=arguments[0];
			var d1=0.01,d2=0.0001;
			if (arguments.length>1) d1=arguments[1];
			if (arguments.length>2) d2=arguments[2];
			if (this.p.wSame(target.p,d1) && this.vx.wSame(target.vx,d2) && this.vy.wSame(target.vy,d2)) return(true);
			return(false);
		}
		
		
		this.setEmpty=function() {
			//this.vx.x=0;
			//this.vx.y=0;
		}
		
		
		this.copy=function(v0) {
			this.p.copy(v0.p);
			this.vx.copy(v0.vx);
			this.vy.copy(v0.vy);
		}
		
		
		this.clone=function() {
			var target=new MatrixO(0,0,0,0,0,0);
			target.copy(this);
			return(target);
		}
		
		
		this.print=function() {
			alert(this.p.printS()+" "+this.vx.printS()+" "+this.vy.printS());
		}
		
		
		this.rotate=function(s) {
			this.vx.rotate(s);
			this.vy.rotate(s);
			return(this);
		}
		
		
		this.rotation=function() {
			return(Math.atan2(this.vx.y,this.vx.x));
		}
		
		
		this.setRotation=function(rota) {
			this.vx.x=Math.cos(rota);
			this.vx.y=Math.sin(rota);
			this.vy.x=-this.vx.y;
			this.vy.y=this.vx.x;
			return(this);
		}
		
		
		this.getIntoMatrixO=function(v0) {
			if (!v0.wBeing()) return;
			var aa=v0.vx.y*v0.vy.x-v0.vx.x*v0.vy.y;
			if (wSame(aa,0)) {
				this.setEmpty();
				return;
			}
			this.p.sub(v0.p);
			this.p.set((v0.vy.x*this.p.y-v0.vy.y*this.p.x)/aa,(v0.vx.y*this.p.x-v0.vx.x*this.p.y)/aa);
			this.vx.set((v0.vy.x*this.vx.y-v0.vy.y*this.vx.x)/aa,(v0.vx.y*this.vx.x-v0.vx.x*this.vx.y)/aa);
			this.vy.set((v0.vy.x*this.vy.y-v0.vy.y*this.vy.x)/aa,(v0.vx.y*this.vy.x-v0.vx.x*this.vy.y)/aa);
			return(this);
		}
		
		
		this.getFromMatrixO=function(v0) {
			if (!v0.wBeing()) return;
			this.p.set(v0.p.x+v0.vx.x*this.p.x+v0.vy.x*this.p.y,v0.p.y+v0.vx.y*this.p.x+v0.vy.y*this.p.y);
			this.vx.set(v0.vx.x*this.vx.x+v0.vy.x*this.vx.y,v0.vx.y*this.vx.x+v0.vy.y*this.vx.y);
			this.vy.set(v0.vx.x*this.vy.x+v0.vy.x*this.vy.y,v0.vx.y*this.vy.x+v0.vy.y*this.vy.y);
			return(this);
		}
		
		
		this.getIntoMatrixONew=function(v0) {
			var v1=new MatrixO(this.p.x,this.p.y,this.vx.x,this.vx.y,this.vy.x,this.vy.y);
			v1.getIntoMatrixO(v0);
			return(v1);
		}
		
		
		this.getFromMatrixONew=function(v0) {
			var v1=new MatrixO(this.p.x,this.p.y,this.vx.x,this.vx.y,this.vy.x,this.vy.y);
			v1.getFromMatrixO(v0);
			return(v1);
		}
		
		
		this.negativeNew=function() {
			var v1=new MatrixO(0,0,1,0,0,1);
			v1.getIntoMatrixO(this);
			return(v1);
		}
		
	}
	
	
	function MatrixO(x0,y0,x1,y1,x2,y2) {
		
		this.p=new PointO(x0,y0);
		this.vx=new PointO(x1,y1);
		this.vy=new PointO(x2,y2);
		
		this.wBeing=MatrixOStr.wBeing;
		this.wSame=MatrixOStr.wSame;
		this.setEmpty=MatrixOStr.setEmpty;
		this.copy=MatrixOStr.copy;
		this.clone=MatrixOStr.clone;
		this.print=MatrixOStr.print;
		this.rotate=MatrixOStr.rotate;
		this.rotation=MatrixOStr.rotation;
		this.setRotation=MatrixOStr.setRotation;
		this.getIntoMatrixO=MatrixOStr.getIntoMatrixO;
		this.getFromMatrixO=MatrixOStr.getFromMatrixO;
		this.getIntoMatrixONew=MatrixOStr.getIntoMatrixONew;
		this.getFromMatrixONew=MatrixOStr.getFromMatrixONew;
		this.negativeNew=MatrixOStr.negativeNew;
		
	}
		
	
	var RectangleOAStr=new function() {
		
		
		this.set=function(x0,y0,x1,y1) {
			this.x0=x0;
			this.y0=y0;
			this.x1=x1;
			this.y1=y1;
		}
		
		
		this.setByPointSet=function(p) {
			this.set(oo,oo,-oo,-oo);
			for (var i=0;i<4;i++) {
				if (Math.floor(p[i].x)<this.x0) this.x0=Math.floor(p[i].x);
				if (Math.floor(p[i].y)<this.y0) this.y0=Math.floor(p[i].y);
				if (Math.ceil(p[i].x)>this.x1) this.x1=Math.ceil(p[i].x);
				if (Math.ceil(p[i].y)>this.y1) this.y1=Math.ceil(p[i].y);
			}
		}
		
		
		this.copy=function(target) {
			this.x0=target.x0;
			this.y0=target.y0;
			this.x1=target.x1;
			this.y1=target.y1;
		}
		
		
		this.wBeing=function() {
			if (this.x0>=this.x1 || this.y0>=this.y1) return(false);
			return(true);
		}
		
		
		this.wOut=function(target) {
			if (!target.wBeing()) return(true);
			if (this.x0>=target.x1 || this.x1<=target.x0 || this.y0>=target.y1 || this.y1<=target.y0) return(true);
			return(false);
		}
		
		
		this.printS=function() {
			return("("+this.x0+","+this.y0+") ("+this.x1+","+this.y1+")");
		}
		
		
		this.print=function() {
			alert(this.printS());
		}
		
		
		this.unionWRecOA=function(target) {
			if (target.x0<this.x0) this.x0=target.x0;
			if (target.y0<this.y0) this.y0=target.y0;
			if (target.x1>this.x1) this.x1=target.x1;
			if (target.y1>this.y1) this.y1=target.y1;
		}
		
		
		this.unionWRecOANew=function(target) {
			var rec=new RectangleOA(this.x0,this.y0,this.x1,this.y1);
			rec.unionWRecOA(target);
			return(rec);
		}
		
		
		this.intersectWRecOA=function(target) {
			if (target.x0>this.x0) this.x0=target.x0;
			if (target.y0>this.y0) this.y0=target.y0;
			if (target.x1<this.x1) this.x1=target.x1;
			if (target.y1<this.y1) this.y1=target.y1;
		}
		
		
		this.intersectWRecOANew=function(target) {
			var rec=new RectangleOA(this.x0,this.y0,this.x1,this.y1);
			rec.intersectWRecOA(target);
			return(rec);
		}
		
		
		this.addAPoint=function(target) {
			if (target.x<this.x0) this.x0=target.x;
			if (target.y<this.y0) this.y0=target.y;
			if (target.x>this.x1) this.x1=target.x;
			if (target.y>this.y1) this.y1=target.y;
		}
		
		
	}
	
	
	function RectangleOA(x0,y0,x1,y1) {
		
		this.x0=x0;
		this.y0=y0;
		this.x1=x1;
		this.y1=y1;
		
		this.set=RectangleOAStr.set;
		this.setByPointSet=RectangleOAStr.setByPointSet;
		this.copy=RectangleOAStr.copy;
		this.wBeing=RectangleOAStr.wBeing;
		this.wOut=RectangleOAStr.wOut;
		this.printS=RectangleOAStr.printS;
		this.print=RectangleOAStr.print;
		this.unionWRecOA=RectangleOAStr.unionWRecOA;
		this.unionWRecOANew=RectangleOAStr.unionWRecOANew;
		this.intersectWRecOA=RectangleOAStr.intersectWRecOA;
		this.intersectWRecOANew=RectangleOAStr.intersectWRecOANew;
		this.addAPoint=RectangleOAStr.addAPoint;
		
	}
		
	
	var PolygonOStr=new function() {
		
		
		this.set=function(p) {
			this.pN=0;
			this.p=[];
			this.pS=[];
			this.x0=oo;
			this.y0=oo;
			this.x1=-oo;
			this.y1=-oo;
			for (var i=0;i<p.length;) {
				if (p[i]=="border") {
					i+=2;
					continue;
				}
				this.pN++;
				this.p[this.pN]=new PointO(p[i],p[i+1]);
				this.pS[this.pN]=null;
				if (this.p[this.pN].x<this.x0) this.x0=this.p[this.pN].x;
				if (this.p[this.pN].y<this.y0) this.y0=this.p[this.pN].y;
				if (this.p[this.pN].x>this.x1) this.x1=this.p[this.pN].x;
				if (this.p[this.pN].y>this.y1) this.y1=this.p[this.pN].y;
				i+=2;
				if (i>=p.length) return;
				if (p[i]=="a") {
					this.pS[this.pN]={
						type:"arc",
						radius:p[i+1],
					};
					i+=2;
				}
			}
		}
		
		
		this.printS=function() {
			var str=this.pN+"\n";
			for (var i=1;i<=this.pN;i++) str+=this.p[i].printS()+" ";
			str+="\n";
			str+=this.x0+" "+this.y0+" "+this.x1+" "+this.y1;
			return(str);
		}
		
		
		this.print=function() {
			alert(this.printS());
		}
		
		
		this.wBeing=function() {
			if (this.x0>=this.x1 || this.y0>=this.y1) return(false);
			return(true);
		}
		
		
		this.wOut=function(target) {
			if (!target.wBeing()) return(true);
			if (this.x0>=target.x1 || this.x1<=target.x0 || this.y0>=target.y1 || this.y1<=target.y0) return(true);
			return(false);
		}
		
		
		this.copy=function(target) {
			this.pN=target.pN;
			for (var i=1;i<=this.pN;i++) this.p[i]=new PointO(target.p[i].x,target.p[i].y);
			this.x0=target.x0;
			this.y0=target.y0;
			this.x1=target.x1;
			this.y1=target.y1;
		}
		
		
		this.getIntoMatrixO=function(v0) {
			this.x0=oo;
			this.y0=oo;
			this.x1=-oo;
			this.y1=-oo;
			for (var i=1;i<=this.pN;i++) {
				this.p[i].getIntoMatrixO(v0);
				if (Math.floor(this.p[i].x)<this.x0) this.x0=Math.floor(this.p[i].x);
				if (Math.floor(this.p[i].y)<this.y0) this.y0=Math.floor(this.p[i].y);
				if (Math.ceil(this.p[i].x)>this.x1) this.x1=Math.ceil(this.p[i].x);
				if (Math.ceil(this.p[i].y)>this.y1) this.y1=Math.ceil(this.p[i].y);
			}
		}
		
		
		this.getFromMatrixO=function(v0) {
			this.x0=oo;
			this.y0=oo;
			this.x1=-oo;
			this.y1=-oo;
			for (var i=1;i<=this.pN;i++) {
				this.p[i].getFromMatrixO(v0);
				if (Math.floor(this.p[i].x)<this.x0) this.x0=Math.floor(this.p[i].x);
				if (Math.floor(this.p[i].y)<this.y0) this.y0=Math.floor(this.p[i].y);
				if (Math.ceil(this.p[i].x)>this.x1) this.x1=Math.ceil(this.p[i].x);
				if (Math.ceil(this.p[i].y)>this.y1) this.y1=Math.ceil(this.p[i].y);
			}
		}
		
		
		this.getIntoMatrixONew=function(v0) {
			var poly1=new PolygonO([]);
			poly1.copy(this);
			poly1.getIntoMatrixO(v0);
			return(poly1);
		}
		
		
		this.getFromMatrixONew=function(v0) {
			var poly1=new PolygonO([]);
			poly1.copy(this);
			poly1.getFromMatrixO(v0);
			return(poly1);
		}
		
		
		this.intersectW=function(target) {
			if (target.x0>this.x0) this.x0=target.x0;
			if (target.y0>this.y0) this.y0=target.y0;
			if (target.x1<this.x1) this.x1=target.x1;
			if (target.y1<this.y1) this.y1=target.y1;
		}
		
		
		this.getIntegerPoint=function() {
			var pm=new PointO(0,0);
			for (var i=1;i<=this.pN;i++) pm.plus(this.p[i]);
			pm.multi(1/this.pN);
			for (var i=1;i<=this.pN;i++) {
				if (this.p[i].x<pm.x) this.p[i].x=Math.floor(this.p[i].x);
				else this.p[i].x=Math.ceil(this.p[i].x);
				if (this.p[i].y<pm.y) this.p[i].y=Math.floor(this.p[i].y);
				else this.p[i].y=Math.ceil(this.p[i].y);
			}
			this.x0=Math.floor(this.x0);
			this.y0=Math.floor(this.y0);
			this.x1=Math.ceil(this.x1);
			this.y1=Math.ceil(this.y1);
		}
		
		
		this.expend=function(s) {
			var line=new VectorO(this.p[this.pN].x,this.p[this.pN].y,this.p[1].x-this.p[this.pN].x,this.p[1].y-this.p[this.pN].y);
			line.move(-s);
			var line1;
			var p1=[];
			var p2;
			for (var i=1;i<=this.pN;i++) {
				if (i<this.pN) {
					line1=new VectorO(this.p[i].x,this.p[i].y,this.p[i+1].x-this.p[i].x,this.p[i+1].y-this.p[i].y);
				} else {
					line1=new VectorO(this.p[i].x,this.p[i].y,this.p[1].x-this.p[i].x,this.p[1].y-this.p[i].y);
				}
				line1.move(-s);
				p2=countVOwVO(line,line1);
				p1[i*2-2]=p2.x
				p1[i*2-1]=p2.y;
				line=line1;
			}
			for (var i=1;i<=this.pN;i++) {
				this.p[i].set(p1[i*2-2],p1[i*2-1]);
			}
		}
		
		
		this.wPointIn=function(p) {
			var xx=function(p) {
				if (p.x>=0 && p.y<0) return(0);
				if (p.x>=0 && p.y>=0) return(1);
				if (p.x<0 && p.y>=0) return(2);
				if (p.x<0 && p.y<0) return(3);
			}
			var p1=this.p[this.pN].subNew(p);
			var p2=new PointO(0,0);
			var xx1=xx(p1),xx2;
			var h=0,s;
			for (var i=1;i<=this.pN;i++) {
				p2=this.p[i].subNew(p);
				xx2=xx(p2);
				if (xx2==xx1) continue;
				if (xx2==(xx1+1)%4) h++;
				if (xx1==(xx2+1)%4) h--;
				if (xx2==(xx1+2)%4) {
					s=p1.x*p2.y-p1.y*p2.x;
					if (wSame(s,0)) return(true);
					if (s>0) h+=2;
					if (s<0) h-=2;
				}
				p1=p2;
				xx1=xx2;
			}
			if (h==4) return(true);
			return(false);
		}
		
		
	}
	
	
	function PolygonO(p) {
		
		this.ASType="polygonO";
		this.pN=0;
		this.p=[];
		this.pS=[];
		this.x0=oo;
		this.y0=oo;
		this.x1=-oo;
		this.y1=-oo;
		
		this.set=PolygonOStr.set;
		this.printS=PolygonOStr.printS;
		this.print=PolygonOStr.print;
		this.wBeing=PolygonOStr.wBeing;
		this.wOut=PolygonOStr.wOut;
		this.copy=PolygonOStr.copy;
		this.getIntoMatrixO=PolygonOStr.getIntoMatrixO;
		this.getFromMatrixO=PolygonOStr.getFromMatrixO;
		this.getIntoMatrixONew=PolygonOStr.getIntoMatrixONew;
		this.getFromMatrixONew=PolygonOStr.getFromMatrixONew;
		this.intersectW=PolygonOStr.intersectW;
		this.getIntegerPoint=PolygonOStr.getIntegerPoint;
		this.expend=PolygonOStr.expend;
		this.wPointIn=PolygonOStr.wPointIn;
		
		this.set(p);
		
	}
	
	
	var CircleOStr=new function() {
		
		
		this.set=function(px,py,r) {
			this.pos0.p.set(px,py);
			this.r=r;
			this.x0=this.pos0.p.x-r;
			this.y0=this.pos0.p.y-r;
			this.x1=this.pos0.p.x+r;
			this.y1=this.pos0.p.y+r;
		}
		
		
		this.printS=function() {
			var str=this.pos0.p.x+" "+this.pos0.p.y+" "+this.r;
			return(str);
		}
		
		
		this.print=function() {
			alert(this.printS());
		}
		
		
		this.wBeing=function() {
			if (this.r<=0) return(false);
			return(true);
		}
		
		
		this.wOut=function(target) {
			if (!target.wBeing()) return(true);
			if (this.x0>=target.x1 || this.x1<=target.x0 || this.y0>=target.y1 || this.y1<=target.y0) return(true);
			return(false);
		}
		
		
		this.copy=function(target) {
			this.r=target.r;
			this.pos0.copy(target.pos0);
			this.x0=target.x0;
			this.y0=target.y0;
			this.x1=target.x1;
			this.y1=target.y1;
		}
		
		
		this.getIntoMatrixO=function(v0) {
			this.r/=(v0.vx.getLength()+v0.vy.getLength())/2;
			this.pos0.getIntoMatrixO(v0);
			this.x0=this.pos0.p.x-this.r;
			this.y0=this.pos0.p.y-this.r;
			this.x1=this.pos0.p.x+this.r;
			this.y1=this.pos0.p.y+this.r;
		}
		
		
		this.getFromMatrixO=function(v0) {
			this.r*=(v0.vx.getLength()+v0.vy.getLength())/2;
			this.pos0.getFromMatrixO(v0);
			this.x0=this.pos0.p.x-this.r;
			this.y0=this.pos0.p.y-this.r;
			this.x1=this.pos0.p.x+this.r;
			this.y1=this.pos0.p.y+this.r;
		}
		
		
		this.getIntoMatrixONew=function(v0) {
			var poly1=new CircleO([]);
			poly1.copy(this);
			poly1.getIntoMatrixO(v0);
			return(poly1);
		}
		
		
		this.getFromMatrixONew=function(v0) {
			var poly1=new CircleO([]);
			poly1.copy(this);
			poly1.getFromMatrixO(v0);
			return(poly1);
		}
		
		
		this.intersectW=function(target) {
			if (target.x0>this.x0) this.x0=target.x0;
			if (target.y0>this.y0) this.y0=target.y0;
			if (target.x1<this.x1) this.x1=target.x1;
			if (target.y1<this.y1) this.y1=target.y1;
		}
		
		
		this.getIntegerPoint=function() {
			
		}
		
		
		this.expend=function(s) {
			this.r+=s;
		}
		
		
		this.wPointIn=function(p) {
			var p1=p.getIntoMatrixONew(this.pos0);
			if (p1.getLength()<=this.r) return(true);
			return(false);
		}
		
		
	}
	
	
	function CircleO(px,py,r) {
		
		this.ASType="circleO";
		this.r=r;
		this.pos0=new MatrixO(px,py,1,0,0,1);
		this.x0=px-r;
		this.y0=py-r;
		this.x1=px+r;
		this.y1=py+r;
		
		this.set=CircleOStr.set;
		this.printS=CircleOStr.printS;
		this.print=CircleOStr.print;
		this.wBeing=CircleOStr.wBeing;
		this.wOut=CircleOStr.wOut;
		this.copy=CircleOStr.copy;
		this.getIntoMatrixO=CircleOStr.getIntoMatrixO;
		this.getFromMatrixO=CircleOStr.getFromMatrixO;
		this.getIntoMatrixONew=CircleOStr.getIntoMatrixONew;
		this.getFromMatrixONew=CircleOStr.getFromMatrixONew;
		this.intersectW=CircleOStr.intersectW;
		this.getIntegerPoint=CircleOStr.getIntegerPoint;
		this.expend=CircleOStr.expend;
		this.wPointIn=CircleOStr.wPointIn;
		
	}
		
	
	var PolygonOSetStr=new function() {
		
		
		this.wBeing=function() {
			if (this.x0>=this.x1 || this.y0>=this.y1) return(false);
			return(true);
		}
		
		
		this.printS=function() {
			var str=this.polyN+"\n";
			for (var i=1;i<=this.polyN;i++) {
				str+=this.poly[i].printS()+"\n";
			}
			str+=this.x0+" "+this.y0+" "+this.x1+" "+this.y1;
			return(str);
		}
		
		
		this.print=function() {
			alert(this.printS());
		}
		
		
		this.wOut=function(target) {
			if (!target.wBeing()) return(true);
			if (this.x0>=target.x1 || this.x1<=target.x0 || this.y0>=target.y1 || this.y1<=target.y0) return(true);
			return(false);
		}
		
		
		this.copy=function(target) {
			this.polyN=target.polyN;
			this.poly=[];
			for (var i=1;i<=this.polyN;i++) {
				if (target.poly[i].ASType=="polygonO") {
					this.poly[i]=new PolygonO([]);
					this.poly[i].copy(target.poly[i]);
				}
				if (target.poly[i].ASType=="circleO") {
					this.poly[i]=new CircleO(0,0,0);
					this.poly[i].copy(target.poly[i]);
				}
			}
		}
		
		
		this.addAPolygonO=function(target) {
			this.addAPolygonOE(target);
			this.x0=Math.min(this.x0,target.x0);
			this.y0=Math.min(this.y0,target.y0);
			this.x1=Math.max(this.x1,target.x1);
			this.y1=Math.max(this.y1,target.y1);
		}
		
		
		this.addAPolygonOE=function(target) {
			this.polyN++;
			this.poly[this.polyN]=target;
		}
		
		
		this.getIntoMatrixO=function(v0) {
			this.x0=oo;
			this.y0=oo;
			this.x1=-oo;
			this.y1=-oo;
			for (var i=1;i<=this.polyN;i++) {
				this.poly[i].getIntoMatrixO(v0);
				this.x0=Math.min(this.x0,this.poly[i].x0);
				this.y0=Math.min(this.y0,this.poly[i].y0);
				this.x1=Math.max(this.x1,this.poly[i].x1);
				this.y1=Math.max(this.y1,this.poly[i].y1);
			}
		}
		
		
		this.getIntoMatrixONew=function(v0) {
			var aa=new PolygonOSet();
			aa.copy(this);
			aa.getIntoMatrixO(v0);
			return(aa);
		}
		
		
		this.getFromMatrixO=function(v0) {
			this.x0=oo;
			this.y0=oo;
			this.x1=-oo;
			this.y1=-oo;
			for (var i=1;i<=this.polyN;i++) {
				this.poly[i].getFromMatrixO(v0);
				this.x0=Math.min(this.x0,this.poly[i].x0);
				this.y0=Math.min(this.y0,this.poly[i].y0);
				this.x1=Math.max(this.x1,this.poly[i].x1);
				this.y1=Math.max(this.y1,this.poly[i].y1);
			}
		}
		
		
		this.getFromMatrixONew=function(v0) {
			var aa=new PolygonOSet();
			aa.copy(this);
			aa.getFromMatrixO(v0);
			return(aa);
		}
		
		
		this.clear=function() {
			this.poly=[];
			this.polyN=0;
			this.x0=oo;
			this.y0=oo;
			this.x1=-oo;
			this.y1=-oo;
		}
		
		
		this.unionW=function(target) {
			if (target.ASType=="polygonO" || target.ASType=="circleO") {
				this.addAPolygonO(target);
				return;
			}
			for (var i=1;i<=target.polyN;i++) {
				this.addAPolygonOE(target.poly[i]);
			}
			this.x0=Math.min(this.x0,target.x0);
			this.y0=Math.min(this.y0,target.y0);
			this.x1=Math.max(this.x1,target.x1);
			this.y1=Math.max(this.y1,target.y1);
		}
		
		
		this.intersectW=function(target) {
			this.x0=Math.max(this.x0,target.x0);
			this.y0=Math.max(this.y0,target.y0);
			this.x1=Math.min(this.x1,target.x1);
			this.y1=Math.min(this.y1,target.y1);
		}
		
		
		this.wPointIn=function(p) {
			for (var i=1;i<=this.polyN;i++) {
				if (this.poly[i].wPointIn(p)) return(true);
			}
			return(false);
		}
		
	}
	
	
	function PolygonOSet() {
		
		this.ASType="polygonOSet";
		this.polyN=0;
		this.poly=[];
		this.x0=oo;
		this.y0=oo;
		this.x1=-oo;
		this.y1=-oo;
		
		this.wBeing=PolygonOSetStr.wBeing;
		this.printS=PolygonOSetStr.printS;
		this.print=PolygonOSetStr.print;
		this.wOut=PolygonOSetStr.wOut;
		this.copy=PolygonOSetStr.copy;
		this.addAPolygonO=PolygonOSetStr.addAPolygonO;
		this.addAPolygonOE=PolygonOSetStr.addAPolygonOE;
		this.getIntoMatrixO=PolygonOSetStr.getIntoMatrixO;
		this.getIntoMatrixONew=PolygonOSetStr.getIntoMatrixONew;
		this.getFromMatrixO=PolygonOSetStr.getFromMatrixO;
		this.getFromMatrixONew=PolygonOSetStr.getFromMatrixONew;
		this.clear=PolygonOSetStr.clear;
		this.unionW=PolygonOSetStr.unionW;
		this.intersectW=PolygonOSetStr.intersectW;
		this.wPointIn=PolygonOSetStr.wPointIn;
		
	}
	
	
	function polygon(poly,basicP) {
		
		if (!("colorL" in basicP)) basicP.colorL="#000000";
		if (!("widthL" in basicP)) basicP.widthL=0;
		if (!("cap" in basicP)) basicP.cap="butt";
		if (!("colorE" in basicP)) basicP.colorE="#000000";
		
		var cav=document.createElement('canvas');
		cav.width=poly.x1-poly.x0;
		cav.height=poly.y1-poly.y0;
		cav.x0=poly.x0;
		cav.y0=poly.y0;
		var con=cav.getContext('2d');
		
		poly.expend(-basicP.widthL);
		
		con.beginPath();
		
		if (poly.ASType=="polygonO") {
			con.moveTo(poly.p[poly.pN].x-cav.x0,poly.p[poly.pN].y-cav.y0);
			for (var i=1;i<=poly.pN;i++) {
				if (!poly.pS[i]) {
					con.lineTo(poly.p[i].x-cav.x0,poly.p[i].y-cav.y0);
					continue;
				}
				if (poly.pS[i].type=="arc") {
					con.arcTo(poly.p[i].x-cav.x0,poly.p[i].y-cav.y0,poly.p[i%poly.pN+1].x-cav.x0,poly.p[i%poly.pN+1].y-cav.y0,poly.pS[i].radius);
				}
			}
		}
		if (poly.ASType=="circleO") {
			var pos2=poly.pos0.negativeNew();
			con.translate(-cav.x0,-cav.y0);
			con.transform(poly.pos0.vx.x,poly.pos0.vx.y,poly.pos0.vy.x,poly.pos0.vy.y,poly.pos0.p.x,poly.pos0.p.y);
			con.arc(0,0,poly.r,0,Math.PI*2);
			con.transform(pos2.vx.x,pos2.vx.y,pos2.vy.x,pos2.vy.y,pos2.p.x,pos2.p.y);
			con.translate(cav.x0,cav.y0);
		}
		
		con.closePath();
		
		if (basicP.widthL>0) {
			con.lineWidth=basicP.widthL*2;
			con.strokeStyle=getFillStyle(basicP.colorL);
			con.lineCap=basicP.cap;
			con.stroke();
		}
		
		con.fillStyle=getFillStyle(basicP.colorE);
		con.fill();
		
		poly.expend(basicP.widthL);
		
		if (cav.width<1) cav.width=1;
		if (cav.height<1) cav.height=1;
		return(cav);
		
	}
	
	
	//basic(end)
	
	
	//color
	
	
	function wSameColor(c1,c2) {
		var c1=getColor(c1);
		var c2=getColor(c2);
		if (c1.R==c2.R && c1.G==c2.G && c1.B==c2.B) return(true);
		return(false);
	}
	
	
	function getColorType(str) {
		if ((str.charAt(0)=='0' && str.charAt(1)=='x') || str.charAt(0)=='#') return("hex");
		if (str.charAt(0)=='r' && str.charAt(1)=='g' && str.charAt(2)=='b') return("rgb");
		if (str.charAt(0)=='r' && str.charAt(1)=='g' && str.charAt(2)=='b' && str.charAt(3)=='a') return("rgba");		
	}
	
	
	function getColor(str) {
		var s1;
		var k=0;
		switch (getColorType(str)) {
			case "hex":
				s1=countHex(str);
				return({R:getColorR(s1),G:getColorG(s1),B:getColorB(s1),A:1});
			break;
			case "rgb":
				var a=[];
				s1=0;
				for (var i=0,k=0;i<str.length;i++) {
					if (str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57) {
						s1=s1*10+str.charCodeAt(i)-48;
					}
					if (str.charAt(i)==',' || str.charAt(i)==")") {
						a[k++]=s1;
						s1=0;
					}
				}
				return({R:a[0],G:a[1],B:a[2],A:1});
			break;
			case "rgba":
				var a=[];
				s1=0;
				for (var i=0,k=0;i<str.length;i++) {
					if (str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57) {
						s1=s1*10+str.charCodeAt(i)-48;
					}
					if (str.charAt(i)==',' || str.charAt(i)==")") {
						a[k++]=s1;
						s1=0;
					}
				}
				return({R:a[0],G:a[1],B:a[2],A:a[3]});
			break;
		}
		return({R:0,G:0,B:0,A:0});
	}
	
	
	function countHex(s) {
		var h=0;
		var s1;
		for (var i=s.length-1,bs=1;i>=0;i--,bs*=16) {
			s1=s.charCodeAt(i);
			if (s1>=48 && s1<=57) s1-=48;
			if (s1>=65 && s1<=70) s1-=55;
			if (s1>=97 && s1<=102) s1-=87;
			if (s1>15) s1=0;
			h+=s1*bs;
		}
		return(h);
	}
	
	
	function getColorR(s) {
		return(Math.floor(s/256/256));
	}
	
	
	function getColorG(s) {
		return(Math.floor(s/256)%256);
	}
	
	
	function getColorB(s) {
		return(s%256);
	}
	
	
	function getNegativeColor(s) {
		var R=255-Math.floor(s/256/256);
		var G=255-Math.floor(s/256)%256;
		var B=255-s%256;
		return(R*256*256+G*256+B);
	}
	
	
	function getStrColor(s) {
		var R=Math.floor(s/256/256);
		var G=Math.floor(s/256)%256;
		var B=s%256;
		return("rgb("+R+","+G+","+B+")");
	}
	
	
	function getFillStyle(typeP) {
		if ((typeof typeP)=="string") {
			if (typeP.charAt(0)=='0' && typeP.charAt(1)=='x') return(getStrColor(countHex(typeP)));
			if (typeP.charAt(0)=='#') return(getStrColor(countHex(typeP)));
			return(typeP);
		}
		if ((typeof typeP)=="object") {
			switch (typeP[0]) {
				case "linear":
					style=ASCon.createLinearGradient(typeP[1],typeP[2],typeP[3],typeP[4]);
					for (var i=5;i<typeP.length;i+=2) {
						style.addColorStop(typeP[i],getFillStyle(typeP[i+1]));
					}
					return(style);
			}
		}
		return(typeP);
	}
	
	
	//color(end)
	
	
	//mathematical
	
	
	function countPORange(p1,p2) {
		return(Math.sqrt((p1.x-p2.x)*(p1.x-p2.x)+(p1.y-p2.y)*(p1.y-p2.y)));
	}
	
	
	function countPTRange(p1,p2) {
		return(Math.sqrt((p1.x-p2.x)*(p1.x-p2.x)+(p1.y-p2.y)*(p1.y-p2.y)+(p1.z-p2.z)*(p1.z-p2.z)));
	}
	
	
	function countVOwVO(v1,v2) {
		var aa=v2.p1.x*v1.p1.y-v1.p1.x*v2.p1.y;
		if (wSame(aa,0)) {
			alert("You try to count the intersect point of two parallel VectorO");
			return(null);
		}
		var t2=(v1.p1.x*(v2.p.y-v1.p.y)-v1.p1.y*(v2.p.x-v1.p.x))/aa;
		return(new PointO(v2.p.x+v2.p1.x*t2,v2.p.y+v2.p1.y*t2));
	}
	
	
	function countStoS(s0,s1,contentT) {
		switch (contentT.type) {
			case "linear":
				s0+=(s1-s0)/(contentT.targetF-contentT.nowF+1);
			break;
			case "exp":
				s0+=(s1-s0)*contentT.bs;
			break;
			case "jump":
				if (Math.abs(s1-s0)<contentT.speed) {
					s0=s1;
					break;
				}
				if (s1>s0) s0+=contentT.speed;
				else s0-=contentT.speed;
			break;
			case "sin":
				var s=(s1-s0)/(1-Math.sin((contentT.nowF-1)/contentT.targetF*Math.PI/2));
				s0-=s;
				s0+=(s1-s0)*Math.sin(contentT.nowF/contentT.targetF*Math.PI/2);
			break;
			case "cos":
				var s=(s1-s0)/Math.cos((contentT.nowF-1)/contentT.targetF*Math.PI/2);
				s0-=s;
				s0+=(s1-s0)*(1-Math.cos(contentT.nowF/contentT.targetF*Math.PI/2));
			break;
		}
		return(s0);
	}
	
	
	function countPOtoPO(p0,p1,contentT) {
		
		if (contentT.type_move=="point") {
			var range=p0.getLength();
			var range1=p1.getLength();
			var angle=Math.atan2(p0.y,p0.x);
			var angle1=Math.atan2(p1.y,p1.x);
			if (wSame(p0.getLength(),0)) angle=angle1;
			if (wSame(p1.getLength(),0)) angle1=angle;
			angle1-=angle;
			if (angle1>Math.PI) angle1-=Math.PI*2;
			if (angle1<-Math.PI) angle1+=Math.PI*2;
			angle1+=angle;
			range=countStoS(range,range1,contentT);
			angle=countStoS(angle,angle1,contentT);
			var p2=new PointO(1,0);
			p2.setRotation(angle);
			p2.setLength(range);
			return(p2);
		}
		if (contentT.type_move=="linear") {
			if (contentT.type=="exp") return(p1.subNew(p0).multi(contentT.bs).plus(p0));
			if (contentT.type=="jump") {
				var p2=p1.subNew(p0);
				if (p2.getLength()<=contentT.speed_move) return(p1);
				p2.setLength(contentT.speed_move);
				return(p2.plus(p1));
			}
			
		}
		
	}
	
	
	//mathematical(end)
	
	
	//cookie
	
	
	function addACookie(name,value,time) {
		var exp=new Date(); 
		exp.setSeconds(exp.getSeconds()+time);
		var str=name+"="+escape(value);
		if (time!=0) str+=";expires="+exp.toGMTString();
		document.cookie=str;
	}
	
	
	function getACookie(name) {
		var reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		var arr=document.cookie.match(reg);
		if (arr) {
			return unescape(arr[2]);
		} else {
			return null;
		}
	}
	
	
	function removeACookie(name) { 
		var exp=new Date(); 
		exp.setDate(exp.getDate()-1); 
		var cval=getACookie(name);
		if(cval!=null) {
			document.cookie=name+"="+cval+";expires="+exp.toGMTString();
		}
	}
	
	
	//cookie(end)
	
	
	//xml
	
	
	function sendAJAX(buildP) {
		
		if (!("succeed" in buildP)) buildP.succeed=function() {
			var str=this.responseText;
			for (var k=0;;) {
				k=str.indexOf("<script>",k);
				if (k<0) break;
				var s1=str.indexOf("</script>",k);
				if (s1<0) alert(str);
				if (this.banEncode) {
					eval(str.substr(k+8,s1-k-8));
				} else {
					eval(decodeWord(str.substr(k+8,s1-k-8)));
				}
				k=s1;
			}
			if (this.callback) eval(this.callback);
		};
		if (!("fail" in buildP)) buildP.fail=function() {};
		
		var xmlHttp;
		if (ASBrowser=="IE") {
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		} else {
			xmlHttp=new XMLHttpRequest();
		}
		xmlHttp.src=buildP.src;
		xmlHttp.name=buildP.name;
		xmlHttp.root=buildP.root;
		xmlHttp.banEncode=buildP.banEncode;
		xmlHttp.succeed=buildP.succeed;
		xmlHttp.fail=buildP.fail;
		xmlHttp.callback=buildP.callback;
		xmlHttp.open(buildP.type,buildP.src);
		xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		var str="";
		var wStart=true;
		if (!buildP.data) buildP.data={};
		for (var item in buildP.data) {
			if (typeof(buildP.data[item])=="object") continue;
			if (wStart) wStart=false;
			else str+="&";
			str+=item+"=";
			if (buildP.banEncode) {
				str+=encodeURIComponent(buildP.data[item]);
			} else {
				str+=encodeWord(buildP.data[item]);
			}
		}
		xmlHttp.send(str);
		xmlHttp.onreadystatechange=function() {
			if (this.readyState==4) {
				if (this.status==200) {
					this.succeed();
				} else {
					this.fail();
				}
			}
		}
		
	}
	
	
	var XMLStr=new function() {
		
		this.getNodeByName=function(name) {
			for (var i=0;i<this.node.length;i++) {
				if (this.node[i].nodeName==name) return(this.node[i]);
			}
		}
		return(null);
		
	}
	
	
	function resolveXML(target) {
		
		target.node=[];
		target.getNodeByName=XMLStr.getNodeByName;
		for (var i=0;i<target.childNodes.length;i++) {
			if (target.childNodes[i].nodeName!="#text") {
				target.node[target.node.length]=resolveXML(target.childNodes[i]);
			}
		}
		return(target);
		
	}
	
	
	function regularXMLStr(str) {
		
		return(str.replace(/%26/g,"&"));
		
	}
	
	
	function checkEmailAddress(str) {
		
		if (str.indexOf("allExco")>=0) return(true);
		if (USERDATA!="NULL" && USERDATA.place=="E") {
			if (str.indexOf("allUser")>=0
				|| str.indexOf("allMember")>=0
				|| str.indexOf("allSubcom")>=0) {
				return(true);
			}
		}
		
		var atPos=str.indexOf("@");
		if (atPos==-1 || atPos==0 || atPos==str.length-1) return(false);
		
		var wAt=false;
		for (var i=0;i<str.length;i++) {
			if (str.charAt(i)=='@') {
				if (wAt) return(false);
				wAt=true;
				continue;
			}
			var s=str.charCodeAt(i);
			if (!wAt) {
				if (!((s>=48 && s<=57) || (s>=65 && s<=90) || (s>=97 && s<=122) || s==95)) {
					return(false);
				}
			} else {
				if (!((s>=48 && s<=57) || (s>=65 && s<=90) || (s>=97 && s<=122) || s==95 || s==46)) {
					return(false);
				}
			}
		}
		return(true);
		
	}
	
	
	function hex(s) {
		var str="";
		var w;
		if (s==0) str="0";
		for (;s>0;s>>=4) {
			w=s-((s>>4)<<4);
			if (w<=9) str=w+str;
			else str=String.fromCharCode(w+55)+str;
		}
		return(str);
	}
	
	
	function dechex(str) {
		
		var s=0;
		for (var i=0;i<str.length;i++) {
			s<<=4;
			if (str.charCodeAt(i)<=57) s+=str.charCodeAt(i)-48;
			else s+=str.charCodeAt(i)-55;
		}
		return(s);
		
	}
	
	
	function compressChar(s) {
		if (s<=9) return(""+s);
		if (s<=35) return(String.fromCharCode(s+55));
		if (s<=61) return(String.fromCharCode(s+61));
		if (s==62) return(".");
		if (s==63) return("!");
	}
	
	
	function uncompressChar(c) {
		if (c==".") return(62);
		if (c=="!") return(63);
		c=c.charCodeAt(0);
		if (c<=57) return(c-48);
		if (c<=90) return(c-55);
		if (c<=122) return(c-61);
	}
	
	
	function encodeWord(word) {
		
		word=encodeURIComponent(word);
		word.replace(/%20/g," ").replace(/-/g,"%2D").replace(/_/g,"%5F").replace(/./g,"%2E").replace(/!/g,"%21").replace(/~/g,"%7E").replace(/\*/g,"%2A").replace(/'/g,"%27");
		var str="";
		var status="waiting";
		var s=0,es=0,ew=0;
		
		for (var i=0;i<word.length;i++) {
			if (word.charAt(i)=="%") {
				if (status=="counting") {
					es=0;
				}
				if (status=="judging") {
					es=0;
					ew=0;
					s=0;
					str+="~";
					status="counting";
					i-=3;
				}
				if (status=="waiting") {
					status="judging";
				}
			} else {
				if (status=="waiting") {
					str+=word.charAt(i);
				}
				if (status=="judging") {
					es++;
					if (es>2) {
						es=0;
						status="waiting";
						str+="%";
						i-=3;
					}
				}
				if (status=="counting") {
					es++;
					if (es>2) {
						es=0;
						status="waiting";
						str+=compressChar(s);
						if (ew==0) str+="~";
						if (ew==2) str+="_";
						if (ew==4) str+="*";
						str+=word.charAt(i);
					} else {
						s=(s<<4)+dechex(word.charAt(i));
						ew+=4;
						if (ew==8) {str+=compressChar(s>>2); s%=4; ew-=6;}
						if (ew==6) {str+=compressChar(s); s=0; ew-=6;}
					}
				}
			}
		}
		if (status=="judging") {
			str+="%"+word.charAt(word.length-2)+word.charAt(word.length-1);
		}
		if (status=="counting") {
			str+=compressChar(s);
			if (ew==0) str+="~";
			if (ew==2) str+="_";
			if (ew==4) str+="*";
		}
		return(str);
		
	}
	
	
	function decodeWord(word) {
		
		var str="";
		var s=0,ew=0,es=0;
		var wEncoding=false;
		
		for (var i=0;i<word.length;i++) {
			if (word.charAt(i)=="~" || word.charAt(i)=="_" || word.charAt(i)=="*") {
				if (wEncoding) {
					if (ew==2) str+=hex(s);
					wEncoding=false;
				} else {
					ew=0;
					es=0;
					s=0;
					wEncoding=true;
				}
			} else {
				if (wEncoding) {
					if (i<word.length-1 && (word.charAt(i+1)=="~" || word.charAt(i+1)=="_" || word.charAt(i+1)=="*")) {
						if (word.charAt(i+1)=="~") {}
						if (word.charAt(i+1)=="_") {s=(s<<2)+uncompressChar(word.charAt(i)); ew+=2;}
						if (word.charAt(i+1)=="*") {s=(s<<4)+uncompressChar(word.charAt(i)); ew+=4;}
					} else {
						s=(s<<6)+uncompressChar(word.charAt(i));
						ew+=6;
					}
					for (;ew>=4;ew-=4) {
						if (es==0) str+="%";
						str+=hex(s>>(ew-4));
						s=s-((s>>(ew-4))<<(ew-4));
						es++;
						if (es>=2) es=0;
					}
				} else {
					str+=word.charAt(i);
				}
			}
		}
		
		str=decodeURI(str);
		return(str);
		
	}
	
	
	function escapeHtml(word) {
		return word.replace(/&/g,"&amp;").replace(/ /g,"&nbsp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
	}
	
	
	function ASFetchParameter(str) {
		var p1=str.indexOf("=");
		var p2=str.indexOf("&");
		var name=str.substr(0,p1);
		var value=str.slice(p1+1,p2);
		var str=str.substr(p2+1);
		return({name:name,value:value,str:str});
	}
	
	
	//xml(end)
	
	
	//Component
	
	
	function ASSchedule(obj,func,time) {
		
		this.obj=obj;
		this.func=func;
		this.time=time;
		this.timeB=ASGetTime();
		this.status="normal";
		
	}
	
	
	var ASElementStr=new function() {
		
		this.set=function(buildP) {
			
			if (buildP.style && !buildP.ignoreTransition) {
				var str=this.style.transition+",";
				for (var itemS in buildP.style) {
					var s=str.indexOf(itemS);
					if (s==-1) continue;
					var e=str.indexOf(",",s);
					str=str.substring(0,s)+str.substring(e+1);
				}
				if (!str) this.style.transition="";
				else this.style.transition=str.substring(0,str.length-1);
				this.style.WebkitTransition=this.style.transition;
				this.style.mozTransition=this.style.transition;
				this.style.OTransition=this.style.transition;
				this.style.MsTransition=this.style.transition;
			}
			
			if (buildP.ignoreM) {
				this.onselectstart=function() {return false;};
				this.ondragstart=function() {return false;};
				if (!this.style.cursor) this.style.cursor="default";
			}
			if (!this.giveupExtra 
				&& (buildP.nodeName=="div")) {
				this.style.display="inline-block";
			}
			if (buildP.wCenter) {
				if (!buildP.style) buildP.style={};
				buildP.style.display="block";
				buildP.style.marginLeft="auto";
				buildP.style.marginRight="auto";
			}
			
			for (var item in buildP) {
				if (item=="nodeName" || item=="ignoreM" || item=="ignoreTransition" || item=="wCenter") {
					continue;
				}
				if (item=="style") {
					for (var itemS in buildP.style) {
						if (itemS=="transform" && typeof(buildP.style.transform)=="object") {
							var str=this.style.transform;
							str+=" ";
							for (var itemT in buildP.style.transform) {
								var s=str.indexOf(itemT);
								if (s!=-1) {
									var e=str.indexOf(" ",s);
									var str0=str;
									str=str.substring(0,s)+str.substring(e+1);
								}
								str+=itemT+"(";
								if (typeof(buildP.style.transform[itemT])=="object") {
									for (var i=0;i<buildP.style.transform[itemT].length;i++) {
										if (i>0) str+=",";
										str+=buildP.style.transform[itemT][i];
										if (typeof(buildP.style.transform[itemT][i])!="number") continue;
										if (itemT=="translate" || itemT=="translate3d")
											str+="px";
										if (itemT=="rotate" || itemT=="rotate3d")
											str+="deg";
									}
								} else {
									str+=buildP.style.transform[itemT];
									if (typeof(buildP.style.transform[itemT])=="number") {
										if (itemT=="translateX" || itemT=="translateY" || itemT=="translateZ" || itemT=="perspective")
											str+="px";
										if (itemT=="rotate" || itemT=="rotateX" || itemT=="rotateY" || itemT=="rotateZ"
											|| itemT=="skewX" || itemT=="skewY")
											str+="deg";
									}
								}
								str+=") ";
							}
							this.style.transform=str;
							continue;
						}
						if (typeof(buildP.style[itemS])=="number"
							&& itemS!="lineHeight" && itemS!="opacity") buildP.style[itemS]+="px";
						this.style[itemS]=buildP.style[itemS];
					}
					continue;
				}
				if (item=="innerHTML" && buildP[item]) {
					this[item]=buildP[item].replace(/  /g," &nbsp;");
					this[item]=this[item].replace(/\\n/g,"<br>");
					continue;
				}
				this[item]=buildP[item];
			}
			this.style.WebkitTransform=this.style.transform;
			this.style.mozTransform=this.style.transform;
			this.style.OTransform=this.style.transform;
			this.style.MsTransform=this.style.transform;
			
		}
		
		this.setTarget=function(buildP) {
			
			if (!buildP.time) buildP.time=500;
			if (!buildP.type) {
				buildP.type="cubic-bezier(0.15,1,0.3,1)";
			}
			
			this.styleT={};
			var wStart=true;
			var str="";
			for (var item in buildP) {
				if (item=="time" || item=="type" || item=="delay" || item=="times" || item=="speed_alpha") continue;
				this.styleT[item]=buildP[item];
				if (typeof(buildP[item])=="number" && item!="opacity") buildP[item]+="px";
				if (!wStart) str+=","; else wStart=false;
				if (item=="opacity") {
					if (!buildP.speed_alpha) buildP.speed_alpha=0.2;
					var time=Math.abs(this.style.opacity-this.styleT.opacity)/buildP.speed_alpha*40;
					str+=item+" "+time+"ms linear";
				} else {
					str+=item+" "+buildP.time+"ms "+buildP.type;
				}
			}
			this.style.transition=str;
			this.style.WebkitTransition=this.style.transition;
			this.style.mozTransition=this.style.transition;
			this.style.OTransition=this.style.transition;
			this.style.MsTransition=this.style.transition;
			this.setTimeout(function(){
				this.set({ignoreTransition:true,style:this.styleT});
			},10);
			
		}
		
		this.draw=function(typeP) {
			
			var con=this.getContext("2d");
			var paint;
			
			if (!("x" in typeP)) typeP.x=0;
			if (!("y" in typeP)) typeP.y=0;
			
			if (typeP.type=="img") {
				paint=typeP.img;
			}
			if (typeP.type=="polygon") {
				paint=polygon(new PolygonO(typeP.polygon),typeP);
			}
			if (typeP.type=="text") {
				if (!typeP.word) return;
				if (!("font" in typeP)) typeP.font="Microsoft YaHei";
				if (!("size" in typeP)) typeP.size=10;
				if (!("weight" in typeP)) typeP.weight="normal";
				if (!("rowSpace" in typeP)) typeP.rowSpace=typeP.size;
				if (!("color" in typeP)) typeP.color="black";
				if (!("width" in typeP)) typeP.width=oo;
				var str=typeP.weight+" "+typeP.size+"px "+typeP.font;
				paint=document.createElement("canvas");
				var paintCon=paint.getContext("2d");
				paintCon.font=str;
				var lineC="";
				var divide=[0];
				var divideN=0;
				for (var i=1;i<=typeP.word.length;i++) {
					if (typeP.word.charAt(i-1)=='\n') {
						divide[++divideN]=i;
						lineC="";
						continue;
					}
					lineC+=typeP.word.charAt(i-1);
					if (paintCon.measureText(lineC).width>typeP.width) {
						divide[++divideN]=i-1;
						lineC=typeP.word.charAt(i-1);
					}
				}
				divide[++divideN]=typeP.word.length;
				paint.width=Math.min(paintCon.measureText(typeP.word).width,typeP.width);
				paint.height=typeP.rowSpace*(divideN-1)+Math.max(typeP.size,typeP.rowSpace)+10;
				if ("shadeR" in typeP) {
					paint.width+=typeP.shadeR*2;
					paint.height+=typeP.shadeR*2;
					typeP.x+=typeP.shadeR;
					typeP.y+=typeP.shadeR;
					paintCon.translate(typeP.shadeR,typeP.shadeR);
				}
				paintCon.font=str;
				if ("shadeC" in typeP) paintCon.shadowColor=typeP.shadeC;
				if ("shadeV" in typeP) {
					paintCon.shadowOffsetX=typeP.shadeV.x;
					paintCon.shadowOffsetY=typeP.shadeV.y;
				}
				if ("shadeR" in typeP) paintCon.shadowBlur=typeP.shadeR;
				paintCon.fillStyle=typeP.color;
				for (var i=1;i<=divideN;i++) {
					paintCon.fillText(typeP.word.substring(divide[i-1],divide[i]),0,typeP.rowSpace*(i-1)+Math.max(typeP.size,typeP.size+(typeP.rowSpace-typeP.size)/2));
				}
			}
			
			con.drawImage(paint,typeP.x,typeP.y);
			
		}
		
		this.onappend=function() {
			for (var i=0,k=0;i<this.ASSchedule.length;i++) {
				ASPlaySchedule(this.ASSchedule[i].listNum);
			}
		}
		
		
		this.onremove=function() {
			for (var i=0;i<this.ASSchedule.length;i++) {
				ASPauseSchecule(this.ASSchedule[i].listNum);
			}
		}
		
		this.changeRoot=function(root) {
			if (this.ASRoot==root) return;
			for (var i=0;i<this.childNodes.length;i++) {
				if (!this.childNodes[i].changeRoot) continue;
				this.childNodes[i].changeRoot(root);
			}
			if (this.ASRoot==ROOT && root!=ROOT) {
				this.onremove();
			}
			if (this.ASRoot!=ROOT && root==ROOT) {
				this.onappend();
			}
			this.ASRoot=root;
		}
		
		this.appendChild=function(target) {
			this.appendChild0(target);
			if (target.changeRoot) target.changeRoot(this.ASRoot);
		}
		
		this.removeChild=function(target) {
			if (target.parentNode!=this) return;
			this.removeChild0(target);
			if (target.changeRoot) target.changeRoot(target);
		}
		
		this.insertBefore=function(target,old) {
			if (old.parentNode!=this) return;
			this.insertBefore0(target,old);
			if (target.changeRoot) target.changeRoot(this.ASRoot);
		}
		
		this.clearChild=function() {
			for (;this.childNodes.length;) this.removeChild(this.childNodes[0]);
		}
		
		this.setTimeout=function(func,time) {
			this.ASSchedule[this.ASSchedule.length]=new ASSchedule(this,func,time);
			ASAddSchedule(this.ASSchedule[this.ASSchedule.length-1]);
			if (this.ASRoot==ROOT) ASPlaySchedule(this.ASSchedule[this.ASSchedule.length-1].listNum);
		}
		
		this.removeSchedule=function(target) {
			for (var i=0;i<this.ASSchedule.length;i++) {
				if (this.ASSchedule[i]==target) break;
			}
			if (i>=this.ASSchedule.length) return;
			for (;i<this.ASSchedule.length-1;i++) this.ASSchedule[i]=this.ASSchedule[i+1];
			this.ASSchedule.length--;
		}
		
		this.hyperlinkOnclick=function() {
			window.history.pushState(null,null,this.href);
			window.onpopstate();
			return false;
		}
		
		this.contains=function(target) {
			for (;target && target!=ROOT;target=target.parentNode) {
				if (target==this) return(true);
			}
			return(false);
		}
		
	}
	
	
	function ASElement(buildP,giveupExtra) {
		
		var target=document.createElement(buildP.nodeName);
		if (!giveupExtra) target.style.margin="0";
		
		target.set=ASElementStr.set;
		target.setTarget=ASElementStr.setTarget;
		if (buildP.nodeName=="canvas") target.draw=ASElementStr.draw;
		target.giveupExtra=giveupExtra;
		target.transitionEnd=ASElementStr.transitioneEnd;
		
		target.ASRoot=target;
		target.changeRoot=ASElementStr.changeRoot;
		target.onappend=ASElementStr.onappend;
		target.appendChild0=document.body.appendChild;
		target.appendChild=ASElementStr.appendChild;
		target.onremove=ASElementStr.onremove;
		target.removeChild0=document.body.removeChild;
		target.removeChild=ASElementStr.removeChild;
		target.insertBefore0=document.body.insertBefore;
		target.insertBefore=ASElementStr.insertBefore;
		target.clearChild=ASElementStr.clearChild;
		target.contains=ASElementStr.contains;
		
		target.ASSchedule=[];
		target.setTimeout=ASElementStr.setTimeout;
		target.removeSchedule=ASElementStr.removeSchedule;
		
		target.set(buildP);
		if (!target.style.opacity) target.style.opacity=1;
		if (buildP.nodeName=="a" && !giveupExtra) target.onclick=ASElementStr.hyperlinkOnclick;
		
		return(target);
		
	}
	
	
	//Component(end)
	
	
	function ASJudgeBrowser() {
		
		var agent=navigator.userAgent;
		if (agent.indexOf("Mobile")>0) {
			ASBrowser="Mobile";
			return;
		}
		if (agent.indexOf("Chrome")>0) {
			ASBrowser="Chrome";
			return;
		}
		if (agent.indexOf("Firefox")>0) {
			ASBrowser="Firefox";
			return;
		}
		if (agent.indexOf("Safari")>0) {
			ASBrowser="Safari";
			return;
		}
		ASBrowser="unknown";
		
	}
	
	
	function ASGetTime() {
		var date=new Date();
		return(Date.UTC(date.getFullYear(),date.getMonth(),date.getDay(),date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds()));
	}
	
	
	function ASGetElementWidth(target) {
		if (!target) return(0);
		if (target.offsetWidth) return(target.offsetWidth);
		document.body.appendChild(target.ASRoot);
		var s=target.offsetWidth;
		document.body.removeChild(target.ASRoot);
		return(s);
	}
	
	
	function ASGetElementHeight(target) {
		if (!target) return(0);
		if (target.offsetHeight) return(target.offsetHeight);
		document.body.appendChild(target.ASRoot);
		var s=target.offsetHeight;
		document.body.removeChild(target.ASRoot);
		return(s);
	}
	
	
	function ASGetWordWidth(target) {
		
		var t=ASElement({
			nodename:"p",
			style:{
				fontFamily:target.style.fontFamily,
				fontSize:target.style.fontSize,
				fontWeight:target.style.fontWeight,
				width:10000,
			},
			innerHTML:target.innerHTML,
		});
		if (target.nodeName=="INPUT") {
			t.innerHTML=target.value;
		}
		t.innerHTML=t.innerHTML.replace(/ /g,"&nbsp;");
		document.body.appendChild(t);
		var s=t.offsetWidth;
		document.body.removeChild(t);
		return(s);
		
	}
	
	
	function ASGetWordHeight(target) {
		
		var t=ASElement({
			nodename:"p",
			style:{
				fontFamily:target.style.fontFamily,
				fontSize:target.style.fontSize,
				fontWeight:target.style.fontWeight,
				width:10000,
			},
			innerHTML:target.innerHTML,
		});
		if (target.nodeName=="INPUT") {
			t.innerHTML=target.value;
		}
		t.innerHTML=t.innerHTML.replace(/ /g,"&nbsp;");
		document.body.appendChild(t);
		var s=t.offsetHeight;
		document.body.removeChild(t);
		return(s);
		
	}
	
	
	function ASDetectFont(font) {
		
		var str="有AaWwLl ."
		var sample=ASElement({
			nodeName:"span",
			style:{
				fontSize:100,
			},
			innerHTML:str,
		});
		var aa=ASElement({
			nodeName:"span",
			style:{
				fontFamily:font,
				fontSize:100,
			},
			innerHTML:str,
		});
		if (ASGetElementWidth(sample)!=ASGetElementWidth(aa)) {
			return(true);
		}
		return(false);
		
	}
	
	
	function ASJudgeSourceType(src) {
		if (src.indexOf(".xml")>-1) return("xml");
		if (src.indexOf(".jpg")>-1) return("img");
		if (src.indexOf(".png")>-1) return("img");
		if (src.indexOf(".mp3")>-1) return("audio");
		if (src.indexOf(".wav")>-1) return("audio");
		if (src.indexOf(".mp4")>-1) return("video");
		if (src.indexOf(".mov")>-1) return("video");
	}
	
	
	function ASAddASource(type,target,src,name) {
		if (!src) src=target.src;
		if (!name) name=src.slice(src.lastIndexOf("/")+1,src.lastIndexOf("."));
		ASSource[ASSource.length]={
			type:type.toLowerCase(),
			source:target,
			src:src,
			name:name,
		};
	}
	
	
	function ASAddASourceName(buildP) {
		ASSourceNameList[ASSourceNameList.length]=buildP;
	}
	
	
	function ASAddASourceBuild(buildP) {
		ASSourceBuildList[ASSourceBuildList.length]=buildP;
	}
	
	
	function ASAddASourceWait(buildP) {
		ASSourceWaitList[ASSourceWaitList.length]=buildP;
	}
	
	
	function ASGetSourceByName(name) {
		for (var i=0;i<ASSource.length;i++) {
			if (ASSource[i].name==name) {
				if (ASSource[i].type=="xml") return(ASSource[i].source.node[0]);
				return(ASElement({
					nodeName:ASSource[i].type,
					src:ASSource[i].src,
				}));
			}
		}
	}
	
	
	function ASGetSrcByName(name) {
		for (var i=0;i<ASSource.length;i++) {
			if (ASSource[i].name==name) {
				return(ASSource[i].src);
			}
		}
		for (var i=0;i<ASSourceNameList.length;i++) {
			if (ASSourceNameList[i].name==name) {
				return(ASSourceNameList[i].src);
			}
		}
	}
	
	
	function ASOrigin() {
		
		ASJudgeBrowser();
		ASSource=[];
		ASSourceT=[];
		ASSourceLoadN=0;
		if (ASSourceLoadN>=ASSourceLoadList.length) setTimeout("ASLoad()",10);
		ASLoadXMLSucceed=function() {
			ASAddASource("xml",resolveXML(this.responseXML),this.src,this.name);
			ASSourceLoadN++;
			if (ASSourceLoadN>=ASSourceLoadList.length) setTimeout("ASLoad()",10);
		}
		ASLoadSucceed=function() {
			ASAddASource(this.nodeName,null,this.src,this.name);
			ASSourceT[this.num]=null;
			ASSourceLoadN++;
			if (ASSourceLoadN>=ASSourceLoadList.length) setTimeout("ASLoad()",10);
		}
		for (var i=0;i<ASSourceNameList.length;i++) {
			if (!ASSourceNameList[i].name) {
				var src=ASSourceNameList[i].src;
				ASSourceNameList[i].name=src.slice(src.lastIndexOf("/")+1,src.indexOf("."));
			}
		}
		for (var i=0;i<ASSourceLoadList.length;i++) {
			var src=ASSourceLoadList[i].src;
			var type=ASJudgeSourceType(src);
			if (type=="xml") {
				sendAJAX({
					type:"GET",
					src:src+"?version="+Math.floor(Math.random()*1000),
					succeed:ASLoadXMLSucceed,
					name:ASSourceLoadList[i].name,
				});
				continue;
			}
			ASSourceT[i]=ASElement({
				nodeName:type,
				src:src,
				num:i,
				name:src.slice(src.lastIndexOf("/")+1,src.indexOf(".")),
				onload:ASLoadSucceed,
			});
		}
		
	}
	
	
	function ASLoad() {
		
		ASBuild();
		if (typeof(ASCustomF)!="undefined") ASInitialize();
		if (typeof(ASCustomF)!="undefined") ASCustomF();
		
		ASSourceBuildN=0;
		ASLoadXMLSucceed=function() {
			ASAddASource("xml",resolveXML(this.responseXML),this.src,this.name);
			ASSourceBuildN++;
			if (ASSourceBuildN>=ASSourceBuildList.length) setTimeout("ASCustom()",10);
		}
		ASLoadSucceed=function() {
			ASAddASource(this.nodeName,null,this.src,this.name);
			ASSourceT[this.num]=null;
			ASSourceBuildN++;
			if (ASSourceBuildN>=ASSourceBuildList.length) setTimeout("ASCustom()",10);
		}
		for (var i=0;i<ASSourceBuildList.length;i++) {
			var src=ASSourceBuildList[i].src;
			var type=ASJudgeSourceType(src);
			if (type=="xml") {
				sendAJAX({
					type:"GET",
					src:src+"?version="+Math.floor(Math.random()*1000),
					succeed:ASLoadXMLSucceed,
					name:ASSourceBuildList[i].name,
				});
				continue;
			}
			var name=src.slice(src.lastIndexOf("/")+1,src.indexOf("."));
			if (ASSourceBuildList[i].name) name=ASSourceBuildList[i].name;
			ASSourceT[i]=ASElement({
				nodeName:type,
				src:src,
				num:i,
				name:name,
				onload:ASLoadSucceed,
			});
		}
		
	}
	
	
	function ASBuild() {
		
		ASSourceWaitN=0;
		ASLoadXMLSucceed=function() {
			ASAddASource("xml",resolveXML(this.responseXML),this.src,this.name);
		}
		ASLoadSucceed=function() {
			ASAddASource(this.nodeName,null,this.src,this.name);
			ASSourceT[this.num]=null;
		}
		for (var i=0;i<ASSourceWaitList.length;i++) {
			var src=ASSourceWaitList[i].src;
			var type=ASJudgeSourceType(src);
			if (type=="xml") {
				sendAJAX({
					type:"GET",
					src:src,
					succeed:ASLoadXMLSucceed,
					name:ASSourceWaitList[i].name,
				});
				continue;
			}
			ASSourceT[i]=ASElement({
				nodeName:type,
				src:src,
				num:i,
				name:src.slice(src.lastIndexOf("/")+1,src.indexOf(".")),
				onload:ASLoadSucceed,
			});
		}
		
		document.body.style.margin="0px";
		document.body.style.overflow="hidden";
		document.body.style.background=ASBGC;
		
		window.addEventListener("resize",function() {
			var widthB=ASWindowWidth,heightB=ASWindowHeight;
			ASWindowWidth=document.documentElement.clientWidth;
			ASWindowHeight=document.documentElement.clientHeight;
			if (ASBrowser=="Mobile"
				&& ASWindowWidth==widthB && Math.abs(ASWindowHeight-heightB)/heightB>0.2) {
				return;
			}
			var bs=1;
			var versionB=ASVersion;
			if (ASWindowWidth>ASWindowHeight) {
				ASVersion="horizon";
			} else {
				ASVersion="vertical";
			}
			if (ASVersion=="vertical") {
				if (typeof(ASWidth)!="undefined") {
					var bs=ASWidth/ASWindowWidth;
					ASWindowWidth*=bs;
					ASWindowHeight*=bs;
				}
			}
			ROOT.set({style:{
				width:ASWindowWidth,
				height:ASWindowHeight,
				transform:{scale:1/bs},
			}});
			if (ASVersion!=versionB && typeof(ASChangeVersion)!="undefined") ASChangeVersion();
			if (typeof(ASResize)!="undefined") ASResize();
		});
		
		ASOutdownList=[];
		window.addEventListener("mousedown",function(e) {
			var target=e.srcElement;
			if (!target) target=e.target;
			for (var i=0;i<ASOutdownList.length;i++) {
				if (ASOutdownList[i].ASRoot!=ROOT) continue;
				if (ASOutdownList[i].onmouseoutdown && !ASOutdownList[i].contains(target)) {
					ASOutdownList[i].onmouseoutdown();
				}
			}
		});
		
		ASHistoryStartN=history.length;
		ASLang="C";
		
		ASWindowWidth=document.documentElement.clientWidth;
		ASWindowHeight=document.documentElement.clientHeight;
		if (ASWindowWidth>ASWindowHeight) {
			ASVersion="horizon";
		} else {
			ASVersion="vertical";
		}
		
		ROOT=ASElement({
			nodeName:"div",
			style:{
				position:"relative",
				overflow:"hidden",
				transformOrigin:"0 0",
				width:ASWindowWidth,
				height:ASWindowHeight,
			},
		});
		document.body.appendChild(ROOT);
		if (ASVersion=="vertical") {
			var bs=1;
			if (typeof(ASWidth)!="undefined") {
				var bs=ASWidth/ASWindowWidth;
				ASWindowWidth*=bs;
				ASWindowHeight*=bs;
			}
			ROOT.set({style:{
				width:ASWindowWidth,
				height:ASWindowHeight,
				transform:{scale:1/bs},
			}});
		}
		
		ASStyle=document.createElement("style");
		document.head.appendChild(ASStyle);
		ASStyleSheet=ASStyle.sheet;
		
		ASCav=document.createElement("canvas");
		ASCon=ASCav.getContext("2d");
		
		ASScheduleList=[];
		ASAddSchedule=function(target) {
			for (var i=0;ASScheduleList[i];i++);
			ASScheduleList[i]=target;
			target.listNum=i;
		}
		ASPlaySchedule=function(w) {
			ASScheduleList[w].id=setTimeout("ASExecuteSchedule("+w+")",ASScheduleList[w].time);
		}
		ASPauseSchecule=function(w) {
			clearTimeout(ASScheduleList[w].id);
			var time=ASGetTime();
			ASScheduleList[w].time-=time-ASScheduleList[w].timeB;
			ASScheduleList[w].timeB=time;
			ASScheduleList[w].id=null;
		}
		ASExecuteSchedule=function(w) {
			if (!ASScheduleList[w]) return;
			if (ASScheduleList[w].obj) {
				var obj=ASScheduleList[w].obj;
				obj.funcT=ASScheduleList[w].func;
				obj.funcT();
				obj.removeSchedule(ASScheduleList[w]);
				obj.removeAttribute("funcT");
			}
			ASScheduleList[w]=null;
		}
		
		
	}
	
	