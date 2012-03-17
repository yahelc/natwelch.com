/* Copyright 2005-2007 Google. To use maps on your own site, visit http://code.google.com/apis/maps/. */ __gjsload__('var aH={SERVER:0,VML:1,SVG:2,CANVAS:3};nw.determineRenderingMethod=function(a){if(!m(a.Iva)){var b=kw(),c=lw(),d=mw();if(a.At()){b=false;c=false;d=false}a.Iva=d?aH.CANVAS:c?aH.SVG:b?aH.VML:aH.SERVER}return a.Iva};nw.expandBounds=function(a,b){var c,d;if(b!=aH.SERVER){c=ag(1000,screen.width);d=ag(1000,screen.height)}else{var e=a.qa();c=bg(e.width,1800);d=bg(e.height,1800)}var f=a.mid(),g=new O(f.x-c,f.y+d),h=new O(f.x+c,f.y-d),i=new no([h,g]);return i};nw.computeMapDivBounds=function(a){var b=a.qa(),c=a.Qd(),d=c.x-Ne(b.width/2),e=c.y-Ne(b.height/2);return new no([new O(d,e),new O(d+b.width,e+b.height)])};nw.polyRedrawHelper=function(a,b){var c,d,e=nw.computeMapDivBounds(a.j);if(!b&&a.EQ&&a.EQ.Dg(e))return;var f=nw.determineRenderingMethod(a),g=a.EQ=nw.expandBounds(e,f);a.Dv();var h=a.j.Td(1);if(f!=aH.SERVER){var i=nw.uFa(a,h,f,b);a.Sa=i.Sa}else if(a instanceof xw){var j=null,l=null;if(a.fill){j=a.color;l=a.opacity}for(c=0,d=A(a.O);c<d;++c){var n=a.O[c],o=null;if(a.outline)o=n.weight;var s=nw.createRasterGraphic(a,h,g,o,n.color,n.opacity,j,l,n.vi(),b);n.Sa=s.Sa}}else if(a instanceof U){var s=nw.createRasterGraphic(a,h,g,a.weight,a.color,a.opacity,null,null,a.vi(),b);a.Sa=s.Sa}H(a,al,a.Sa)};nw.sFa=function(a,b,c){var d=document.createElement("canvas");c.appendChild(d);var e=this.F7(a,b);Ie(d,new O(e.vbMinX,e.vbMinY));r(d,"width",Me(e.vbSizeX));r(d,"height",Me(e.vbSizeY));var f=d.getContext("2d");f.translate(-e.vbMinX,-e.vbMinY);return d};nw.rFa=function(a,b,c,d){var e=a instanceof xw,f=a,g=0;if(e)f=a.outline&&A(a.O)>0?a.O[0]:null;if(f)g=f.weight;var h=this.sFa(c,g,d),i=h.getContext("2d");if(e)for(var j=0;j<A(b);++j)this.polylineCanvasPath(b[j],i);else this.polylineCanvasPath(b,i);if(f){i.strokeStyle=f.color;i.globalAlpha=f.opacity;i.lineWidth=f.weight;i.lineCap="round";i.lineJoin="round";i.stroke()}if(a.fill){i.fillStyle=a.color;i.globalAlpha=a.opacity;i.fill()}return h};nw.polylineCanvasPath=function(a,b){var c,d;for(var e=0;e<A(a);){var f=a[e++],g=a[e++],h=a[e++],i=a[e++];if(f!=d||g!=c)b.moveTo(f,g);b.lineTo(h,i);c=i;d=h}};nw.F7=function(a,b){var c={};c.vbMinX=a.min().x-b;c.vbMinY=a.min().y-b;c.vbSizeX=a.max().x+b-c.vbMinX;c.vbSizeY=a.max().y+b-c.vbMinY;return c};nw.uFa=function(a,b,c,d){var e=a instanceof xw,f=nw.computeDivVectorsAndBounds(a,null,d),g=f.Wk,h=f.za,i=null;if(A(g)>0&&!h.Ob())if(c==aH.SVG){ff(b);i=document.createElementNS(fw,"svg");r(i,"version","1.1");r(i,"overflow","visible");var j=document.createElementNS(fw,"path");r(j,"stroke-linejoin","round");r(j,"stroke-linecap","round");var l=a,n=null;if(e){n=nw.tta(g);l=a.outline&&A(a.O)>0?a.O[0]:null}else n=nw.polylineVmlPath(g);if(n)r(j,"d",n.toUpperCase().replace("E",""));var o=0;if(l){r(j,"stroke",l.color);r(j,"stroke-opacity",l.opacity);r(j,"stroke-width",Me(l.weight));o=l.weight}var s=this.F7(h,o);Ie(i,new O(s.vbMinX,s.vbMinY));r(i,"width",Me(s.vbSizeX));r(i,"height",Me(s.vbSizeY));r(i,"viewBox",s.vbMinX+" "+s.vbMinY+" "+s.vbSizeX+" "+s.vbSizeY);if(a.fill){r(j,"fill",a.color);r(j,"fill-opacity",a.opacity);r(j,"fill-rule","evenodd")}else r(j,"fill","none");Ke(i,j);Ke(b,i)}else if(c==aH.VML){r(b,"dir","ltr");var w=a.j.Qd();i=nw.FP("v:shape",b,w,new t(1,1));pf(i);i.coordorigin=w.x+" "+w.y;i.coordsize="1 1";if(a.fill){var D=nw.FP("v:fill",i);D.color=a.color;D.opacity=a.opacity}else i.filled=false;var I=nw.FP("v:stroke",i);I.joinstyle="round";I.endcap="round";var l=a;if(e){i.path=nw.tta(g);l=a.outline&&A(a.O)>0?a.O[0]:null}else i.path=nw.polylineVmlPath(g);if(l){I.color=l.color;I.opacity=l.opacity;I.weight=Me(l.weight)}else I.opacity=0}else i=this.rFa(a,g,h,b);if(i)kf(i,1000);else g=null;var R={Sa:i,Wk:g};return R};nw.clipSingle=function(a,b,c,d,e,f){var g=-1;if(b!=null)g=0;if(c!=null)g=1;if(d!=null)g=2;if(e!=null)g=3;if(g==-1)return[];var h=null,i=[];for(var j=0;j<A(a);j+=2){var l=a[j],n=a[j+1];if(l.x==n.x&&l.y==n.y)continue;var o,s;switch(g){case 0:o=l.y>=b;s=n.y>=b;break;case 1:o=l.y<=c;s=n.y<=c;break;case 2:o=l.x>=d;s=n.x>=d;break;case 3:o=l.x<=e;s=n.x<=e;break}if(!o&&!s)continue;if(o&&s){i.push(l);i.push(n);continue}var w;switch(g){case 0:var D=l.x+(b-l.y)*(n.x-l.x)/(n.y-l.y);w=new L(b,D,true);break;case 1:var D=l.x+(c-l.y)*(n.x-l.x)/(n.y-l.y);w=new L(c,D,true);break;case 2:var I=l.y+(d-l.x)*(n.y-l.y)/(n.x-l.x);w=new L(I,d,true);break;case 3:var I=l.y+(e-l.x)*(n.y-l.y)/(n.x-l.x);w=new L(I,e,true);break}if(o){i.push(l);i.push(w);h=w}else if(s){if(h){i.push(h);i.push(w);h=null}i.push(w);i.push(n)}}if(f&&h){i.push(h);i.push(i[0]);h=null}return i};nw.FP=function(a,b,c,d){var e=He(b).createElement(a);if(b)Ke(b,e);jw(e);if(c)Ie(e,c);if(d)Je(e,d);return e};nw.polylineVmlPath=function(a){var b=[],c,d;for(var e=0;e<A(a);){var f=a[e++],g=a[e++],h=a[e++],i=a[e++];if(g!=c||f!=d){b.push("m");b.push(f);b.push(g);b.push("l")}b.push(h);b.push(i);c=i;d=h}b.push("e");return b.join(" ")};nw.tta=function(a){var b=[];for(var c=0;c<A(a);++c){var d=nw.polylineVmlPath(a[c]);b.push(d.replace(/e$/,""))}b.push("e");return b.join(" ")};nw.rta=function(a,b){var c=0,d=0,e=255;try{if(a.charAt(0)=="#")a=a.substring(1);c=parseInt(a.substring(0,2),16);d=parseInt(a.substring(2,4),16);e=parseInt(a.substring(4,6),16)}catch(f){}var g=(1-b)*255;return c+","+d+","+e+","+g};nw.createRasterGraphic=function(a,b,c,d,e,f,g,h,i,j){var l=null,n=nw.CGa(a,c,d,e,f,g,h,i,j),o=n.vectors;if(A(n.src)>0){var s=Th(H,a,cl),w=new Do;w.alpha=true;w.onLoadCallback=s;l=fj(n.src,b,n.origin,null,w);if(nw.PEa())ff(l)}if(l)kf(l,1000);else o=null;var D={Sa:l,Wk:o};return D};nw.CGa=function(a,b,c,d,e,f,g,h,i){var j="",l=null,n,o;for(var s=false;!s&&h<=a.Qt();++h){var w=nw.computeDivVectorsAndBounds(a,h,i),D=w.Wk,I=w.za,R=A(D);if(R>0&&A(D[0])){R=0;for(var pa=0,Ra=A(D);pa<Ra;++pa)R+=A(D[pa])}if(R>900)continue;if(A(D)&&A(D[0])){var mb=[];for(var pa=0,Ra=A(D);pa<Ra;pa++)Jg(mb,D[pa]);D=mb}I.minX-=c;I.minY-=c;I.maxX+=c;I.maxY+=c;o=no.intersection(b,I);n=dw.polylineEncodedImageSource(D,new O(o.minX,o.minY),new O(o.maxX,o.maxY));if(A(n)<=900)s=true}if(n&&A(n)>0){var Fb=Yf(o.maxX-o.minX),Xb=Yf(o.maxY-o.minY);j="http://mt.google.com/mld?width="+Fb+"&height="+Xb+"&path="+n;if(c&&d)j+="&color="+nw.rta(d,e)+"&weight="+c;if(f)j+="&fill="+nw.rta(f,g);l=new O(o.minX,o.minY)}return{vectors:D,origin:l,src:j}};nw.PEa=function(){return q.nb()||q.type==1};nw.computeDivVectorsAndBounds=function(a,b,c){var d=b||a.vi(),e=a.j,f=nw.computeMapDivBounds(e),g=e.R();if(!a.bn[d])a.bn[d]={};var h=a.bn[d];if(c||!h.kna||!h.kna.Dg(g)){var i=nw.expandBounds(f,nw.determineRenderingMethod(a)),j=new O(i.min().x,i.max().y),l=new O(i.max().x,i.min().y),n=e.FR(l,j);a.EQ=i;h.kna=n;var o=h.Wk=[],f=h.za=new no,s=a.qq(n,d),w=F(e,e.Z),D=e.xc().x+e.qa().width/2,I=e.Kl();if(a.na()==we)nw.rda(s,o,f,a.qh(s),w,D,I);else for(var R=0,pa=A(s);R<pa;++R){var Ra=s[R],mb=a.O[R],Fb=[],Xb=new no;nw.rda(Ra,Fb,Xb,mb.qh(Ra),w,D,I);o.push(Fb);f.gca(Xb)}}return h};nw.rda=function(a,b,c,d,e,f,g){var h=null,i=A(a);for(var j=0;j<i;++j){var l=(j+d)%i;h=e(a[l],h);b.push(Ne(h.x));b.push(Ne(h.y));c.extend(h)}var n=(c.minX+c.maxX)/2,o=Ne(Ne((f-n)/g)*g);if(o==0)return;for(var j=0;j<i;++j)b[2*j]+=o;c.minX+=o;c.maxX+=o};U.prototype.v$=function(a){var b=this,c=0,d=3;if(b.Za()<a)return b.copy();var e=[];for(var f=c+1;f<=d;f++){var g=b.qq(null,f),h=A(g),i=h/2+1;if(i<a){for(var f=0;f<h;f+=2)e.push(g[f]);e.push(g[h-1]);return new U(e)}}return null};U.prototype.qq=function(a,b){var c=this,d=[];c.OT(a,0,A(c.G)-1,c.$g-1,b,d);if(c.eG){var e=c.j.X(),f=c.j.sa().Af(),g=function(s){return f.Bd(s,e)},h=Ng(d);Bh(d);for(var i=0,j=A(h);i<j;i+=2){var l=bH([h[i],h[i+1]],g,c.ms,a);for(var n=0,o=A(l);n<o;n+=2)cH(d,a,l[n],l[n+1])}}return d};U.prototype.OT=function(a,b,c,d,e,f){var g=this,h=null,i=g.j.sa().Af();if(a){var j=i.Bd(a.Bf(),17),l=i.Bd(a.zf(),17),n=g.As*Math.pow(g.Om,d);j=new O(j.x-n,j.y+n);l=new O(l.x+n,l.y-n);j=i.fg(j,17,true);l=i.fg(l,17,true);h=new lj(j,l)}var o=b,s=g.G[o],w=g.my(o,d);while(w<=c){var D=g.G[w],I;if(g.eG)I=qw([s,D]);else{I=new lj;I.extend(s);I.extend(D)}if(h==null||h.intersects(I))if(d>e)g.OT(a,o,w,d-1,e,f);else cH(f,g.eG?null:h,s,D);var R=s;s=D;D=R;o=w;d?(w=g.my(o,d)):++w}};U.prototype.my=function(a,b){var c=this.Ca,d=A(c),e=this.fm,f=a+1;while(f<d&&c[f]<b)f=e[f];return f};U.prototype.Le=function(a){var b=this;if(!b.hb())return;if(b.Q==a)return;b.Q=a;var c=b.El();if(a){b.redraw(false);if(c)y(c)}else if(c)x(c);H(b,mm,a)};U.prototype.YF=function(a,b){var c=this,d=c.j,e=nw.computeDivVectorsAndBounds(c).Wk;if(!e||!d)return null;if(c.Sf.Wk!=e){c.Sf.Wk=e;c.Sf.z4=dH(e,0,A(e))}var f=c.Sf.z4,g=d.Z(a),h=c.UH(b),i=new no(g.x-h,g.y-h,g.x+h,g.y+h);return eH(f,e,g,i,h)};function eH(a,b,c,d,e){var f=null;if(no.intersects(a.bounds,d))if(a.leaf)for(var g=a.start;g<a.start+a.len;g+=4){var h=fH(c,b[g],b[g+1],b[g+2],b[g+3],e);if(h&&(!f||h.distSq<f.distSq)){f=h;f.segmentIndex=g/4}}else{var i=eH(a.a,b,c,d,e),j=eH(a.b,b,c,d,e);f=!i||j&&j.distSq<i.distSq?j:i}return f}function fH(a,b,c,d,e,f){var g=d-b,h=e-c,i=a.x-b,j=a.y-c,l=g*g+h*h,n=0;if(l!=0){var o=g*i+h*j;n=o/l}if(n<0)n=0;else if(n>1)n=1;var s=b+g*n,w=c+h*n,D=(s-a.x)*(s-a.x)+(w-a.y)*(w-a.y),I=null;if(D<f*f)I={point:new O(s,w),distSq:D};return I}function cH(a,b,c,d){if(c.lat()==d.lat()&&c.lng()==d.lng())return;if(b==null||b.contains(c)&&b.contains(d)){a.push(c);a.push(d);return}c=c.copy();d=d.copy();var e=b.Bf().y,f=b.zf().y,g=b.zf().x,h=b.Bf().x;if(g<h)g+=360;var i=(g+h)/2;while(d.lng()>c.lng()+180)d.Jk(d.lng()-360);while(d.lng()<c.lng()-180)d.Jk(d.lng()+360);var j=(c.lng()+d.lng())/2;while(j>i+180){j-=360;c.Jk(c.lng()-360);d.Jk(d.lng()-360)}while(j<i-180){j+=360;c.Jk(c.lng()+360);d.Jk(d.lng()+360)}var l=[c,d];l=nw.clipSingle(l,e,null,null,null,false);l=nw.clipSingle(l,null,f,null,null,false);if(!b.kb.Pz()){l=nw.clipSingle(l,null,null,h,null,false);l=nw.clipSingle(l,null,null,null,g,false)}Jg(a,l)}U.prototype.UH=function(a){var b=Math.ceil(ew.weight/2),c=a||b;return ag(c,Ne(this.weight/2))};U.prototype.Ica=function(a,b){var c=null,d=this.YF(a,b||10);if(d){c={};c.IFa=eg(d.distSq);c.pb=d.point;c.mb=d.segmentIndex}return c};U.prototype.Hn=function(a){var b=this,c=b.j,d=c.X();if(!b.To)b.To=[];var e=b.To[d];if(!e){var f=b.R();if(!f)return null;var g=b.UH(a),h=c.Z(f.Bf()),i=c.Z(f.zf());e=new lj(c.Oa(new O(h.x-g,h.y+g)),c.Oa(new O(i.x+g,i.y-g)));b.To[d]=e}return e};U.prototype.vi=function(){var a=this;if(a.eFa)return 0;else{var b=17-a.j.X(),c=a.As*Math.pow(2,-b),d=0;do{++d;c*=a.Om}while(d<a.$g&&c<=1);return d-1}};U.prototype.qh=function(a){if(!a||A(a)==0)return 0;if(!a[0].equals(a[a.length-1]))return 0;if(this.H4==0)return 0;var b=this.j.$(),c=0,d=0;for(var e=0;e<A(a);e+=2){var f=ng(a[e].lng()-b.lng(),-180,180)*this.H4;if(f<d){d=f;c=e}}return c};function dH(a,b,c){var d;if(c<=40){var e=new no;for(var f=b;f<b+c;f+=4){e.extend(new O(a[f],a[f+1]));e.extend(new O(a[f+2],a[f+3]))}d={leaf:true,start:b,len:c,bounds:e}}else{var g=$f(c/8)*4,h=dH(a,b,g),i=dH(a,b+g,c-g),e=new no;e.extend(h.bounds.min());e.extend(h.bounds.max());e.extend(i.bounds.min());e.extend(i.bounds.max());d={leaf:false,a:h,b:i,bounds:e}}return d}U.prototype.xk=function(a,b){var c=this.Ica(a,b);if(!c)return null;return c.IFa<this.UH(b)?c:null};U.prototype.redraw=function(a){var b=this;if(b.nA)return;if(a)b.We=true;if(b.Q){nw.polyRedrawHelper(b,b.We);b.We=false}};U.prototype.Dv=function(){var a=this;if(a.Sa){xk(a.Sa);a.Sa=null;a.bn={};a.Sf={};return true}return false};U.prototype.remove=function(){if(this.Dv())H(this,$k)};dw.polylineEncodedImageSource=function(a,b,c){if(b.x==cc||b.y==cc)return"";var d=[],e;for(var f=0;f<A(a);f+=4){var g=new O(a[f],a[f+1]),h=new O(a[f+2],a[f+3]);if(g.equals(h))continue;if(c){dw.s8(g,h,b.x,c.x,b.y,c.y);dw.s8(h,g,b.x,c.x,b.y,c.y)}if(!g.equals(e)){if(A(d)>0)dw.po(9999,d);dw.po(g.x-b.x,d);dw.po(g.y-b.y,d)}dw.po(h.x-g.x,d);dw.po(h.y-g.y,d);e=h}dw.po(9999,d);return d.join("")};dw.polylineEncodeStyleAsString=function(a){var b=[],c=ow(a.color);if(c==null)c=ow(ew.color);dw.jr(c.r,b);dw.jr(c.g,b);dw.jr(c.b,b);var d=Ne(a.weight*4);dw.jr(d,b);var e=Ne(a.opacity*255);dw.jr(e,b);return b.join("")};dw.s8=function(a,b,c,d,e,f){if(a.x>d)dw.t8(a,b,d,e,f);if(a.x<c)dw.t8(a,b,c,e,f);if(a.y>f)dw.u8(a,b,f,c,d);if(a.y<e)dw.u8(a,b,e,c,d)};dw.t8=function(a,b,c,d,e){var f=b.y+(c-b.x)/(a.x-b.x)*(a.y-b.y);if(f<=e&&f>=d){a.x=c;a.y=Ne(f)}};dw.u8=function(a,b,c,d,e){var f=b.x+(c-b.y)/(a.y-b.y)*(a.x-b.x);if(f<=e&&f>=d){a.x=Ne(f);a.y=c}};dw.polylineEncodeLevels=function(a){var b=[];for(var c=0;c<A(a);++c)dw.jr(a[c],b);return b.join("")};xw.prototype.qq=function(a,b){var c=[];for(var d=0;d<A(this.O);++d)c.push(gH(this.O[d],a,b));return c};function hH(a){var b=180,c=-180,d=0,e,f=A(a);if(f==0)return{Q3:false,VX:0};for(e=0;e<f;++e){var g=a[e],h=g.lng();if(h>c){c=h;d=e}if(h<b)b=h}if(c-b<180)return{Q3:false,VX:(b+c)/2};var i=d,j=d+f,l=a[i].lng();b=c=l;for(e=i;e<j;++e){var g=a[e%f],h=g.lng();while(h>l+180)h-=360;while(h<l-180)h+=360;g.Jk(h);l=h;if(h<b)b=h;if(h>c)c=h}return{Q3:true,VX:(b+c)/2}}function iH(a){B(a,function(b){var c=b.lng();while(c>180)c-=360;while(c<-180)c+=360;b.Jk(c)})}function gH(a,b,c){var d=a.qq(null,c),e=b.Bf().y,f=b.zf().y,g=b.zf().x,h=b.Bf().x;d=nw.clipSingle(d,e,null,null,null,true);d=nw.clipSingle(d,null,f,null,null,true);var i=hH(d),j=i.VX;if(g<h)g+=360;var l=(g+h)/2;while(l<j-180){l+=360;g+=360;h+=360}while(l>j+180){l-=360;g-=360;h-=360}if(!b.kb.Pz()){d=nw.clipSingle(d,null,null,h,null,true);d=nw.clipSingle(d,null,null,null,g,true)}if(i.Q3)iH(d);return d}xw.prototype.Le=function(a){var b=this;if(!b.hb())return;if(b.Q==a)return;b.Q=a;var c=b.El();if(a){b.redraw(false);if(c)y(c)}else if(c)x(c);if(b.zDa()&&c)return;for(var d=0;d<A(b.O);++d)if(a)b.O[d].show();else b.O[d].hide();H(b,mm,a)};xw.prototype.Hn=function(a){var b=this,c=b.j,d=c.X(),e=b.To[d];if(!e){e=new lj;for(var f=0;f<b.O.length;++f){var g=b.O[f].Hn(a);if(g!=null)e.union(g)}b.To[d]=e}return e};xw.prototype.DJ=function(a){var b=this,c=b.j,d=nw.computeDivVectorsAndBounds(b).Wk;if(!d||!c)return null;var e;if(b.Sf.Wk!=d){e=Dh(d);b.Sf.Wk=d;b.Sf.fGa=e;b.Sf.z4=dH(e,0,A(e))}e=b.Sf.fGa;var f=b.Sf.z4,g=c.Z(a);return!!(jH(f,e,g)%2)};function jH(a,b,c){var d=0;if(a.bounds.v9(c))if(a.leaf){var e=c.x,f=c.y;for(var g=a.start;g<a.start+a.len;){var h=b[g++],i=b[g++],j=b[g++],l=b[g++];if(l<i){var n=h;h=j;j=n;n=i;i=l;l=n}if(i<=f&&f<l&&(e-h)*(l-i)<(f-i)*(j-h))++d}}else{d+=jH(a.a,b,c);d+=jH(a.b,b,c)}return d}xw.prototype.vi=function(){var a=100;for(var b=0;b<A(this.O);++b){var c=this.O[b].vi();if(a>c)a=c}return a};xw.prototype.zDa=function(){if(this.bG)return true;if(lw()||mw())return false;return q.type!=1||!hw()};xw.prototype.xk=function(a,b){return this.O[0].xk(a,b)};xw.prototype.redraw=function(a){var b=this;if(b.nA)return;if(a)b.We=true;if(b.Q){nw.polyRedrawHelper(b,b.We);b.We=false}};xw.prototype.Dv=function(){var a=this,b=false;for(var c=0;c<A(a.O);++c){if(a.O[c].Sa)b=true;a.O[c].remove()}if(a.Sa){b=true;xk(a.Sa);a.Sa=null;a.bn={};a.Sf={}}return b};xw.prototype.remove=function(){if(this.Dv())H(this,$k)};function bH(a,b,c,d){var e=new kH(b,c,d),f=[];f[0]=new tw(a[0]);wo(f[0].latlng,f[0].r3);f[1]=new tw(a[1]);wo(f[1].latlng,f[1].r3);var g=e.aE(f,0),h=[];for(var i=0,j=A(g);i<j;++i)h.push(g[i].latlng);return h}function kH(a,b,c){var d=this;d.PJ=a;var e=b||0;if(e<3)e=3;d.kCa=e;d.za=c||null}kH.prototype.aE=function(a,b){var c=this;if(b>10)return a;var d=qw([a[0].latlng,a[1].latlng]);if(c.za&&!c.za.intersects(d))return[];var e=c.PJ(a[0].latlng),f=c.PJ(a[1].latlng),g=new tw;if(!lH(a,g))return a;c.PJ(g.latlng);var h=[];for(var i=1;i<4;++i){var j=i/4;h.push(new O(e.x*(1-j)+f.x*j,e.y*(1-j)+f.y*j))}var l=[];l[0]=new tw;if(!lH([a[0],g],l[0]))return a;l[1]=g;l[2]=new tw;if(!lH([g,a[1]],l[2]))return a;B(l,function(pa,Ra){l[Ra]=c.PJ(pa.latlng)});var n=false;for(var i=0;i<3;++i){var o=h[i],s=l[i];if(!(Uf(o.x-s.x)<c.kCa&&Uf(o.y-s.y)<c.kCa)){n=true;break}}if(!n)return a;else{var w=[a[0],g],D=[g,a[1]],I=c.aE(w,b+1),R=c.aE(D,b+1);Jg(I,R);return I}};function lH(a,b){b.r3[0]=(a[0].r3[0]+a[1].r3[0])/2;b.r3[1]=(a[0].r3[1]+a[1].r3[1])/2;b.r3[2]=(a[0].r3[2]+a[1].r3[2])/2;yo(b.r3);xo(b.r3,b.latlng);var c=bg(a[0].latlng.Ug,a[1].latlng.Ug),d=ag(a[0].latlng.Ug,a[1].latlng.Ug);while(b.latlng.Ug>d)b.latlng.Ug-=360;while(b.latlng.Ug<c)b.latlng.Ug+=360;if(b.latlng.Ug>d)return false;return true}J(Et,Gt,{});J(Et,Ft,nw);J(Et,Ht,{});J(Et);')