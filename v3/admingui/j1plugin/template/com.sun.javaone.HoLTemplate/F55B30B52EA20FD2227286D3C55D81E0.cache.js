(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,xx='com.google.gwt.core.client.',yx='com.google.gwt.http.client.',zx='com.google.gwt.lang.',Ax='com.google.gwt.user.client.',Bx='com.google.gwt.user.client.impl.',Cx='com.google.gwt.user.client.ui.',Dx='com.sun.javaone.client.',Ex='java.lang.',Fx='java.util.';function wx(){}
function zr(a){return this===a;}
function Ar(){return ws(this);}
function xr(){}
_=xr.prototype={};_.eQ=zr;_.hC=Ar;_.tI=1;function o(){return u();}
var p=null;function s(a){return a==null?0:a.$H?a.$H:(a.$H=v());}
function t(a){return a==null?0:a.$H?a.$H:(a.$H=v());}
function u(){var b=$doc.location.href;var a=b.indexOf('#');if(a!= -1)b=b.substring(0,a);a=b.indexOf('?');if(a!= -1)b=b.substring(0,a);a=b.lastIndexOf('/');if(a!= -1)b=b.substring(0,a);return b.length>0?b+'/':'';}
function v(){return ++w;}
var w=0;function ys(b,a){a;return b;}
function As(b,a){if(b.a!==null){throw gr(new fr(),"Can't overwrite cause");}if(a===b){throw dr(new cr(),'Self-causation not permitted');}b.a=a;return b;}
function xs(){}
_=xs.prototype=new xr();_.tI=3;_.a=null;function ar(b,a){ys(b,a);return b;}
function Fq(){}
_=Fq.prototype=new xs();_.tI=4;function Cr(b,a){ar(b,a);return b;}
function Br(){}
_=Br.prototype=new Fq();_.tI=5;function y(c,b,a){Cr(c,'JavaScript '+b+' exception: '+a);return c;}
function x(){}
_=x.prototype=new Br();_.tI=6;function C(b,a){if(!kd(a,2)){return false;}return bb(b,jd(a,2));}
function D(a){return s(a);}
function E(){return [];}
function F(){return function(){};}
function ab(){return {};}
function cb(a){return C(this,a);}
function bb(a,b){return a===b;}
function db(){return D(this);}
function A(){}
_=A.prototype=new xr();_.eQ=cb;_.hC=db;_.tI=7;function ec(b,d,c,a){if(d===null){throw new qr();}if(a===null){throw new qr();}if(c<0){throw new cr();}b.a=c;b.c=d;if(c>0){b.b=lb(new kb(),b,a);eg(b.b,c);}else{b.b=null;}return b;}
function gc(a){var b;if(a.c!==null){b=a.c;a.c=null;vc(b);fc(a);}}
function fc(a){if(a.b!==null){bg(a.b);}}
function ic(e,a){var b,c,d,f;if(e.c===null){return;}fc(e);f=e.c;e.c=null;b=wc(f);if(b!==null){c=Cr(new Br(),b);a.C(e,c);}else{d=kc(f);a.F(e,d);}}
function jc(b,a){if(b.c===null){return;}gc(b);a.C(b,bc(new ac(),b,b.a));}
function kc(b){var a;a=gb(new fb(),b);return a;}
function lc(a){var b;b=p;{ic(this,a);}}
function eb(){}
_=eb.prototype=new xr();_.q=lc;_.tI=0;_.a=0;_.b=null;_.c=null;function mc(){}
_=mc.prototype=new xr();_.tI=0;function gb(a,b){a.a=b;return a;}
function ib(a){return yc(a.a);}
function jb(a){return xc(a.a);}
function fb(){}
_=fb.prototype=new mc();_.tI=0;function cg(){cg=wx;kg=dv(new bv());{jg();}}
function ag(a){cg();return a;}
function bg(a){if(a.c){fg(a.d);}else{gg(a.d);}mv(kg,a);}
function dg(a){if(!a.c){mv(kg,a);}a.hb();}
function eg(b,a){if(a<=0){throw dr(new cr(),'must be positive');}bg(b);b.c=false;b.d=hg(b,a);fv(kg,b);}
function fg(a){cg();$wnd.clearInterval(a);}
function gg(a){cg();$wnd.clearTimeout(a);}
function hg(b,a){cg();return $wnd.setTimeout(function(){b.r();},a);}
function ig(){var a;a=p;{dg(this);}}
function jg(){cg();pg(new Cf());}
function Bf(){}
_=Bf.prototype=new xr();_.r=ig;_.tI=8;_.c=false;_.d=0;var kg;function mb(){mb=wx;cg();}
function lb(b,a,c){mb();b.a=a;b.b=c;ag(b);return b;}
function nb(){jc(this.a,this.b);}
function kb(){}
_=kb.prototype=new Bf();_.hb=nb;_.tI=9;function ub(){ub=wx;xb=qb(new pb(),'GET');qb(new pb(),'POST');yb=Fh(new Eh());}
function sb(b,a,c){ub();tb(b,a===null?null:a.a,c);return b;}
function tb(b,a,c){ub();qc('httpMethod',a);qc('url',c);b.a=a;b.c=c;return b;}
function vb(g,d,a){var b,c,e,f,h;h=bi(yb);{b=zc(h,g.a,g.c,true);}if(b!==null){e=Eb(new Db(),g.c);As(e,Bb(new Ab(),b));throw e;}wb(g,h);c=ec(new eb(),h,g.b,a);f=Ac(h,c,d,a);if(f!==null){throw Bb(new Ab(),f);}return c;}
function wb(a,b){{Bc(b,'Content-Type','text/plain; charset=utf-8');}}
function ob(){}
_=ob.prototype=new xr();_.tI=0;_.a=null;_.b=0;_.c=null;var xb,yb;function qb(b,a){b.a=a;return b;}
function pb(){}
_=pb.prototype=new xr();_.tI=0;_.a=null;function Bb(b,a){ar(b,a);return b;}
function Ab(){}
_=Ab.prototype=new Fq();_.tI=10;function Eb(a,b){Bb(a,'The URL '+b+' is invalid or violates the same-origin security restriction');return a;}
function Db(){}
_=Db.prototype=new Ab();_.tI=11;function bc(b,a,c){Bb(b,dc(c));return b;}
function dc(a){return 'A request timeout has expired after '+nr(a)+' ms';}
function ac(){}
_=ac.prototype=new Ab();_.tI=12;function qc(a,b){rc(a,b);if(0==gs(ns(b))){throw dr(new cr(),a+' can not be empty');}}
function rc(a,b){if(null===b){throw rr(new qr(),a+' can not be null');}}
function vc(a){a.onreadystatechange=di;a.abort();}
function wc(b){try{if(b.status===undefined){return 'XmlHttpRequest.status == undefined, please see Safari bug '+'http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';}return null;}catch(a){return 'Unable to read XmlHttpRequest.status; likely causes are a '+'networking error or bad cross-domain request. Please see '+'https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more '+'details';}}
function xc(a){return a.responseText;}
function yc(a){return a.status;}
function zc(e,c,d,b){try{e.open(c,d,b);return null;}catch(a){return a.message||a.toString();}}
function Ac(e,c,d,b){e.onreadystatechange=function(){if(e.readyState==uc){e.onreadystatechange=di;c.q(b);}};try{e.send(d);return null;}catch(a){e.onreadystatechange=di;return a.message||a.toString();}}
function Bc(d,b,c){try{d.setRequestHeader(b,c);return null;}catch(a){return a.message||a.toString();}}
var uc=4;function Dc(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function Fc(a,b,c){return a[b]=c;}
function ad(b,a){return b[a];}
function bd(a){return a.length;}
function dd(e,d,c,b,a){return cd(e,d,c,b,0,bd(b),a);}
function cd(j,i,g,c,e,a,b){var d,f,h;if((f=ad(c,e))<0){throw new or();}h=Dc(new Cc(),f,ad(i,e),ad(g,e),j);++e;if(e<a){j=ks(j,1);for(d=0;d<f;++d){Fc(h,d,cd(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){Fc(h,d,b);}}return h;}
function ed(a,b,c){if(c!==null&&a.b!=0&& !kd(c,a.b)){throw new vq();}return Fc(a,b,c);}
function Cc(){}
_=Cc.prototype=new xr();_.tI=0;function hd(b,a){return !(!(b&&nd[b][a]));}
function id(a){return String.fromCharCode(a);}
function jd(b,a){if(b!=null)hd(b.tI,a)||md();return b;}
function kd(b,a){return b!=null&&hd(b.tI,a);}
function md(){throw new Bq();}
function ld(a){if(a!==null){throw new Bq();}return a;}
function od(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var nd;function rd(a){if(kd(a,3)){return a;}return y(new x(),td(a),sd(a));}
function sd(a){return a.message;}
function td(a){return a.name;}
function xd(){if(wd===null||Ad()){wd=uw(new Av());zd(wd);}return wd;}
function yd(b){var a;a=xd();return jd(Aw(a,b),1);}
function zd(e){var b=$doc.cookie;if(b&&b!=''){var a=b.split('; ');for(var d=0;d<a.length;++d){var f,g;var c=a[d].indexOf('=');if(c== -1){f=a[d];g='';}else{f=a[d].substring(0,c);g=a[d].substring(c+1);}f=decodeURIComponent(f);g=decodeURIComponent(g);e.eb(f,g);}}}
function Ad(){var a=$doc.cookie;if(a!=''&&a!=Bd){Bd=a;return true;}else{return false;}}
function Cd(a){$doc.cookie=a+"='';expires='Fri, 02-Jan-1970 00:00:00 GMT'";}
function Ed(a,b){Dd(a,b,0,null,null,false);}
function Dd(d,g,c,b,e,f){var a=encodeURIComponent(d)+'='+encodeURIComponent(g);if(c)a+=';expires='+new Date(c).toGMTString();if(b)a+=';domain='+b;if(e)a+=';path='+e;if(f)a+=';secure';$doc.cookie=a;}
var wd=null,Bd=null;function ae(){ae=wx;De=dv(new bv());{ye=new Eg();jh(ye);}}
function be(b,a){ae();mh(ye,b,a);}
function ce(a,b){ae();return eh(ye,a,b);}
function de(){ae();return oh(ye,'A');}
function ee(){ae();return oh(ye,'div');}
function fe(){ae();return oh(ye,'tbody');}
function ge(){ae();return oh(ye,'td');}
function he(){ae();return oh(ye,'tr');}
function ie(){ae();return oh(ye,'table');}
function le(b,a,d){ae();var c;c=p;{ke(b,a,d);}}
function ke(b,a,c){ae();var d;if(a===Ce){if(ne(b)==8192){Ce=null;}}d=je;je=b;try{c.B(b);}finally{je=d;}}
function me(b,a){ae();ph(ye,b,a);}
function ne(a){ae();return qh(ye,a);}
function oe(a){ae();fh(ye,a);}
function pe(b,a){ae();return rh(ye,b,a);}
function qe(a){ae();return sh(ye,a);}
function se(a,b){ae();return uh(ye,a,b);}
function re(a,b){ae();return th(ye,a,b);}
function te(a){ae();return vh(ye,a);}
function ue(a){ae();return gh(ye,a);}
function ve(a){ae();return wh(ye,a);}
function we(a){ae();return hh(ye,a);}
function xe(a){ae();return ih(ye,a);}
function ze(c,a,b){ae();kh(ye,c,a,b);}
function Ae(a){ae();var b,c;c=true;if(De.b>0){b=ld(iv(De,De.b-1));if(!(c=null.lb())){me(a,true);oe(a);}}return c;}
function Be(b,a){ae();xh(ye,b,a);}
function Ee(a,b,c){ae();yh(ye,a,b,c);}
function Fe(a,b){ae();zh(ye,a,b);}
function af(a,b){ae();Ah(ye,a,b);}
function bf(a,b){ae();Bh(ye,a,b);}
function cf(b,a,c){ae();Ch(ye,b,a,c);}
function df(a,b){ae();lh(ye,a,b);}
function ef(){ae();return ah(ye);}
function ff(){ae();return bh(ye);}
var je=null,ye=null,Ce=null,De;function jf(a){if(kd(a,4)){return ce(this,jd(a,4));}return C(od(this,gf),a);}
function kf(){return D(od(this,gf));}
function gf(){}
_=gf.prototype=new A();_.eQ=jf;_.hC=kf;_.tI=13;function of(a){return C(od(this,lf),a);}
function pf(){return D(od(this,lf));}
function lf(){}
_=lf.prototype=new A();_.eQ=of;_.hC=pf;_.tI=14;function sf(){sf=wx;xf=dv(new bv());{yf=gi(new fi());if(!ji(yf)){yf=null;}}}
function tf(a){sf();fv(xf,a);}
function uf(){sf();$wnd.history.back();}
function vf(a){sf();var b,c;for(b=ot(xf);ht(b);){c=jd(it(b),5);c.D(a);}}
function wf(){sf();return yf!==null?ti(yf):'';}
function zf(a){sf();if(yf!==null){li(yf,a);}}
function Af(b){sf();var a;a=p;{vf(b);}}
var xf,yf=null;function Ef(){while((cg(),kg).b>0){bg(jd(iv((cg(),kg),0),6));}}
function Ff(){return null;}
function Cf(){}
_=Cf.prototype=new xr();_.bb=Ef;_.cb=Ff;_.tI=15;function og(){og=wx;rg=dv(new bv());Bg=dv(new bv());{xg();}}
function pg(a){og();fv(rg,a);}
function qg(a){og();fv(Bg,a);}
function sg(){og();var a,b;for(a=ot(rg);ht(a);){b=jd(it(a),7);b.bb();}}
function tg(){og();var a,b,c,d;d=null;for(a=ot(rg);ht(a);){b=jd(it(a),7);c=b.cb();{d=c;}}return d;}
function ug(){og();var a,b;for(a=ot(Bg);ht(a);){b=jd(it(a),8);b.db(wg(),vg());}}
function vg(){og();return ef();}
function wg(){og();return ff();}
function xg(){og();__gwt_initHandlers(function(){Ag();},function(){return zg();},function(){yg();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function yg(){og();var a;a=p;{sg();}}
function zg(){og();var a;a=p;{return tg();}}
function Ag(){og();var a;a=p;{ug();}}
function Cg(a){og();$doc.title=a;}
var rg,Bg;function mh(c,b,a){b.appendChild(a);}
function oh(b,a){return $doc.createElement(a);}
function ph(c,b,a){b.cancelBubble=a;}
function qh(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function rh(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function sh(c,b){var a=$doc.getElementById(b);return a||null;}
function uh(d,a,b){var c=a[b];return c==null?null:String(c);}
function th(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function vh(b,a){return a.__eventBits||0;}
function wh(d,b){var c='',a=b.firstChild;while(a){if(a.nodeType==1){c+=d.s(a);}else if(a.nodeValue){c+=a.nodeValue;}a=a.nextSibling;}return c;}
function xh(c,b,a){b.removeChild(a);}
function yh(c,a,b,d){a[b]=d;}
function zh(c,a,b){a.__listener=b;}
function Ah(c,a,b){if(!b){b='';}a.innerHTML=b;}
function Bh(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function Ch(c,b,a,d){b.style[a]=d;}
function Dh(a){return wh(this,a);}
function Dg(){}
_=Dg.prototype=new xr();_.s=Dh;_.tI=0;function eh(c,a,b){return a==b;}
function fh(b,a){a.preventDefault();}
function gh(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function hh(c,a){var b=a.nextSibling;while(b&&b.nodeType!=1)b=b.nextSibling;return b||null;}
function ih(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function jh(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){le(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!Ae(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)le(b,a,c);};$wnd.__captureElem=null;}
function kh(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function lh(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function ch(){}
_=ch.prototype=new Dg();_.tI=0;function ah(a){return $wnd.innerHeight;}
function bh(a){return $wnd.innerWidth;}
function Eg(){}
_=Eg.prototype=new ch();_.tI=0;function Fh(a){di=F();return a;}
function bi(a){return ci(a);}
function ci(a){return new XMLHttpRequest();}
function Eh(){}
_=Eh.prototype=new xr();_.tI=0;var di=null;function ti(a){return $wnd.__gwt_historyToken;}
function ui(a){Af(a);}
function ei(){}
_=ei.prototype=new xr();_.tI=0;function qi(d){$wnd.__gwt_historyToken='';var c=$wnd.location.hash;if(c.length>0)$wnd.__gwt_historyToken=c.substring(1);$wnd.__checkHistory=function(){var b='',a=$wnd.location.hash;if(a.length>0)b=a.substring(1);if(b!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=b;ui(b);}$wnd.setTimeout('__checkHistory()',250);};$wnd.__checkHistory();return true;}
function ri(b,a){if(a==null){a='';}$wnd.location.hash=encodeURIComponent(a);}
function oi(){}
_=oi.prototype=new ei();_.tI=0;function hi(){hi=wx;ni=mi();}
function gi(a){hi();return a;}
function ji(a){if(ni){ii(a);return true;}return qi(a);}
function ii(b){$wnd.__gwt_historyToken='';var a=$wnd.location.hash;if(a.length>0)$wnd.__gwt_historyToken=decodeURIComponent(a.substring(1));ui($wnd.__gwt_historyToken);}
function li(b,a){if(ni){ki(b,a);return;}ri(b,a);}
function ki(d,a){var b=$doc.createElement('meta');b.setAttribute('http-equiv','refresh');var c=$wnd.location.href.split('#')[0]+'#'+encodeURIComponent(a);b.setAttribute('content','0.01;url='+c);$doc.body.appendChild(b);window.setTimeout(function(){$doc.body.removeChild(b);},1);$wnd.__gwt_historyToken=a;ui($wnd.__gwt_historyToken);}
function mi(){hi();var a=/ AppleWebKit\/([\d]+)/;var b=a.exec(navigator.userAgent);if(b){if(parseInt(b[1])>=522){return false;}}if(navigator.userAgent.indexOf('iPhone')!= -1){return false;}return true;}
function fi(){}
_=fi.prototype=new oi();_.tI=0;var ni;function jm(b,a){km(b,nm(b)+id(45)+a);}
function km(b,a){zm(b.i,a,true);}
function mm(a){return re(a.i,'offsetWidth');}
function nm(a){return xm(a.i);}
function om(b,a){pm(b,nm(b)+id(45)+a);}
function pm(b,a){zm(b.i,a,false);}
function qm(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function rm(b,a){if(b.i!==null){qm(b,b.i,a);}b.i=a;}
function sm(b,a){ym(b.i,a);}
function tm(b,a){Am(b.i,a);}
function um(a,b){Bm(a.i,b);}
function vm(b,a){df(b.i,a|te(b.i));}
function wm(a){return se(a,'className');}
function xm(a){var b,c;b=wm(a);c=ds(b,32);if(c>=0){return ls(b,0,c);}return b;}
function ym(a,b){Ee(a,'className',b);}
function zm(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw Cr(new Br(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=ns(j);if(gs(j)==0){throw dr(new cr(),'Style names cannot be empty');}i=wm(c);e=es(i,j);while(e!=(-1)){if(e==0||Fr(i,e-1)==32){f=e+gs(j);g=gs(i);if(f==g||f<g&&Fr(i,f)==32){break;}}e=fs(i,j,e+1);}if(a){if(e==(-1)){if(gs(i)>0){i+=' ';}Ee(c,'className',i+j);}}else{if(e!=(-1)){b=ns(ls(i,0,e));d=ns(ks(i,e+gs(j)));if(gs(b)==0){h=d;}else if(gs(d)==0){h=b;}else{h=b+' '+d;}Ee(c,'className',h);}}}
function Am(a,b){if(a===null){throw Cr(new Br(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}b=ns(b);if(gs(b)==0){throw dr(new cr(),'Style names cannot be empty');}Cm(a,b);}
function Bm(a,b){a.style.display=b?'':'none';}
function Cm(b,f){var a=b.className.split(/\s+/);if(!a){return;}var g=a[0];var h=g.length;a[0]=f;for(var c=1,d=a.length;c<d;c++){var e=a[c];if(e.length>h&&(e.charAt(h)=='-'&&e.indexOf(g)==0)){a[c]=f+e.substring(h);}}b.className=a.join(' ');}
function im(){}
_=im.prototype=new xr();_.tI=0;_.i=null;function xn(a){if(a.g){throw gr(new fr(),"Should only call onAttach when the widget is detached from the browser's document");}a.g=true;Fe(a.i,a);a.n();a.E();}
function yn(a){if(!a.g){throw gr(new fr(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.ab();}finally{a.o();Fe(a.i,null);a.g=false;}}
function zn(a){if(a.h!==null){a.h.gb(a);}else if(a.h!==null){throw gr(new fr(),"This widget's parent does not implement HasWidgets");}}
function An(b,a){if(b.g){Fe(b.i,null);}rm(b,a);if(b.g){Fe(a,b);}}
function Bn(c,b){var a;a=c.h;if(b===null){if(a!==null&&a.g){yn(c);}c.h=null;}else{if(a!==null){throw gr(new fr(),'Cannot set a new parent without first clearing the old parent');}c.h=b;if(b.g){xn(c);}}}
function Cn(){}
function Dn(){}
function En(a){}
function Fn(){}
function ao(){}
function fn(){}
_=fn.prototype=new im();_.n=Cn;_.o=Dn;_.B=En;_.E=Fn;_.ab=ao;_.tI=16;_.g=false;_.h=null;function dl(b,a){Bn(a,b);}
function fl(b,a){Bn(a,null);}
function gl(){var a,b;for(b=this.y();b.x();){a=jd(b.A(),9);xn(a);}}
function hl(){var a,b;for(b=this.y();b.x();){a=jd(b.A(),9);yn(a);}}
function il(){}
function jl(){}
function cl(){}
_=cl.prototype=new fn();_.n=gl;_.o=hl;_.E=il;_.ab=jl;_.tI=17;function bj(a){a.f=nn(new gn(),a);}
function cj(a){bj(a);return a;}
function dj(c,a,b){zn(a);on(c.f,a);be(b,a.i);dl(c,a);}
function ej(d,b,a){var c;gj(d,a);if(b.h===d){c=ij(d,b);if(c<a){a--;}}return a;}
function fj(b,a){if(a<0||a>=b.f.b){throw new ir();}}
function gj(b,a){if(a<0||a>b.f.b){throw new ir();}}
function jj(b,a){return qn(b.f,a);}
function ij(b,a){return rn(b.f,a);}
function kj(e,b,c,a,d){a=ej(e,b,a);zn(b);sn(e.f,b,a);if(d){ze(c,b.i,a);}else{be(c,b.i);}dl(e,b);}
function lj(b,a){return b.gb(jj(b,a));}
function mj(b,c){var a;if(c.h!==b){return false;}fl(b,c);a=c.i;Be(xe(a),a);vn(b.f,c);return true;}
function nj(){return tn(this.f);}
function oj(a){return mj(this,a);}
function aj(){}
_=aj.prototype=new cl();_.y=nj;_.gb=oj;_.tI=18;function wi(a){cj(a);An(a,ee());cf(a.i,'position','relative');cf(a.i,'overflow','hidden');return a;}
function xi(a,b){dj(a,b,a.i);}
function zi(a){cf(a,'left','');cf(a,'top','');cf(a,'position','');}
function Ai(b){var a;a=mj(this,b);if(a){zi(b.i);}return a;}
function vi(){}
_=vi.prototype=new aj();_.gb=Ai;_.tI=19;function Ci(a){cj(a);a.e=ie();a.d=fe();be(a.e,a.d);An(a,a.e);return a;}
function Ei(c,b,a){Ee(b,'align',a.a);}
function Fi(c,b,a){cf(b,'verticalAlign',a.a);}
function Bi(){}
_=Bi.prototype=new aj();_.tI=20;_.d=null;_.e=null;function qj(a){cj(a);An(a,ee());return a;}
function rj(a,b){dj(a,b,a.i);tj(a,b);}
function tj(b,c){var a;a=c.i;cf(a,'width','100%');cf(a,'height','100%');um(c,false);}
function uj(a,b){cf(b.i,'width','');cf(b.i,'height','');um(b,true);}
function vj(b,a){fj(b,a);if(b.a!==null){um(b.a,false);}b.a=jj(b,a);um(b.a,true);}
function wj(b){var a;a=mj(this,b);if(a){uj(this,b);if(this.a===b){this.a=null;}}return a;}
function pj(){}
_=pj.prototype=new aj();_.gb=wj;_.tI=21;_.a=null;function Fk(a){An(a,ee());vm(a,131197);sm(a,'gwt-Label');return a;}
function bl(a){switch(ne(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function Ek(){}
_=Ek.prototype=new fn();_.B=bl;_.tI=22;function yj(a){Fk(a);An(a,ee());vm(a,125);sm(a,'gwt-HTML');return a;}
function zj(b,a){yj(b);Bj(b,a);return b;}
function Bj(b,a){af(b.i,a);}
function xj(){}
_=xj.prototype=new Ek();_.tI=23;function bk(){bk=wx;Fj(new Ej(),'center');ck=Fj(new Ej(),'left');Fj(new Ej(),'right');}
var ck;function Fj(b,a){b.a=a;return b;}
function Ej(){}
_=Ej.prototype=new xr();_.tI=0;_.a=null;function hk(){hk=wx;ik=fk(new ek(),'bottom');fk(new ek(),'middle');jk=fk(new ek(),'top');}
var ik,jk;function fk(a,b){a.a=b;return a;}
function ek(){}
_=ek.prototype=new xr();_.tI=0;_.a=null;function nk(a){a.a=(bk(),ck);a.c=(hk(),jk);}
function ok(a){Ci(a);nk(a);a.b=he();be(a.d,a.b);Ee(a.e,'cellSpacing','0');Ee(a.e,'cellPadding','0');return a;}
function pk(b,c){var a;a=rk(b);be(b.b,a);dj(b,c,a);}
function rk(b){var a;a=ge();Ei(b,a,b.a);Fi(b,a,b.c);return a;}
function sk(c,d,a){var b;gj(c,a);b=rk(c);ze(c.b,b,a);kj(c,d,b,a,false);}
function tk(c,d){var a,b;b=xe(d.i);a=mj(c,d);if(a){Be(c.b,b);}return a;}
function uk(b,a){b.c=a;}
function vk(a){return tk(this,a);}
function mk(){}
_=mk.prototype=new Bi();_.gb=vk;_.tI=24;_.b=null;function xk(a){An(a,ee());be(a.i,a.a=de());vm(a,1);sm(a,'gwt-Hyperlink');return a;}
function yk(c,b,a){xk(c);Bk(c,b);Ak(c,a);return c;}
function Ak(b,a){b.b=a;Ee(b.a,'href','#'+a);}
function Bk(b,a){bf(b.a,a);}
function Ck(a){if(ne(a)==1){zf(this.b);oe(a);}}
function wk(){}
_=wk.prototype=new fn();_.B=Ck;_.tI=25;_.a=null;_.b=null;function ql(){ql=wx;vl=uw(new Av());}
function pl(b,a){ql();wi(b);if(a===null){a=rl();}An(b,a);xn(b);return b;}
function sl(){ql();return tl(null);}
function tl(c){ql();var a,b;b=jd(Aw(vl,c),10);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=qe(c))){return null;}}if(vl.c==0){ul();}Bw(vl,c,b=pl(new kl(),a));return b;}
function rl(){ql();return $doc.body;}
function ul(){ql();pg(new ll());}
function kl(){}
_=kl.prototype=new vi();_.tI=26;var vl;function nl(){var a,b;for(b=hu(vu((ql(),vl)));ou(b);){a=jd(pu(b),10);if(a.g){yn(a);}}}
function ol(){return null;}
function ll(){}
_=ll.prototype=new xr();_.bb=nl;_.cb=ol;_.tI=27;function Dl(a){El(a,ee());return a;}
function El(b,a){An(b,a);return b;}
function Fl(a,b){if(a.a!==null){throw gr(new fr(),'SimplePanel can only contain one child widget');}cm(a,b);}
function bm(a,b){if(a.a!==b){return false;}fl(a,b);Be(a.i,b.i);a.a=null;return true;}
function cm(a,b){if(b===a.a){return;}if(b!==null){zn(b);}if(a.a!==null){bm(a,a.a);}a.a=b;if(b!==null){be(a.i,a.a.i);dl(a,b);}}
function dm(){return zl(new xl(),this);}
function em(a){return bm(this,a);}
function wl(){}
_=wl.prototype=new cl();_.y=dm;_.gb=em;_.tI=28;_.a=null;function yl(a){a.a=a.b.a!==null;}
function zl(b,a){b.b=a;yl(b);return b;}
function Bl(){return this.a;}
function Cl(){if(!this.a||this.b.a===null){throw new sx();}this.a=false;return this.b.a;}
function xl(){}
_=xl.prototype=new xr();_.x=Bl;_.A=Cl;_.tI=0;function Em(a){a.a=(bk(),ck);a.b=(hk(),jk);}
function Fm(a){Ci(a);Em(a);Ee(a.e,'cellSpacing','0');Ee(a.e,'cellPadding','0');return a;}
function an(b,d){var a,c;c=he();a=cn(b);be(c,a);be(b.d,c);dj(b,d,a);}
function cn(b){var a;a=ge();Ei(b,a,b.a);Fi(b,a,b.b);return a;}
function dn(c,e,a){var b,d;gj(c,a);d=he();b=cn(c);be(d,b);ze(c.d,d,a);kj(c,e,b,a,false);}
function en(c){var a,b;b=xe(c.i);a=mj(this,c);if(a){Be(this.d,xe(b));}return a;}
function Dm(){}
_=Dm.prototype=new Bi();_.gb=en;_.tI=29;function nn(b,a){b.a=dd('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[4],null);return b;}
function on(a,b){sn(a,b,a.b);}
function qn(b,a){if(a<0||a>=b.b){throw new ir();}return b.a[a];}
function rn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function sn(d,e,a){var b,c;if(a<0||a>d.b){throw new ir();}if(d.b==d.a.a){c=dd('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ed(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ed(d.a,b,d.a[b-1]);}ed(d.a,a,e);}
function tn(a){return jn(new hn(),a);}
function un(c,b){var a;if(b<0||b>=c.b){throw new ir();}--c.b;for(a=b;a<c.b;++a){ed(c.a,a,c.a[a+1]);}ed(c.a,c.b,null);}
function vn(b,c){var a;a=rn(b,c);if(a==(-1)){throw new sx();}un(b,a);}
function gn(){}
_=gn.prototype=new xr();_.tI=0;_.a=null;_.b=0;function jn(b,a){b.b=a;return b;}
function ln(){return this.a<this.b.b-1;}
function mn(){if(this.a>=this.b.b){throw new sx();}return this.b.a[++this.a];}
function hn(){}
_=hn.prototype=new xr();_.x=ln;_.A=mn;_.tI=0;_.a=(-1);function ip(){ip=wx;zp=ms('abcdefghijklmnopqrstuvwxyz');}
function fp(a){a.a=bq(new Cp());}
function gp(a){ip();fp(a);return a;}
function hp(a){qg(eo(new co(),a));}
function jp(c,a){var b;b=jb(a);return (ib(a)==200||ib(a)==203||ib(a)<100)&&b!==null&& !cs(b,'');}
function kp(e,d){var a,c,f;f=o()+'/appendix'+id(zp[d])+'.html';c=sb(new ob(),(ub(),xb),f);try{vb(c,null,Co(new Bo(),e,d,f));}catch(a){a=rd(a);if(kd(a,14)){}else throw a;}}
function lp(e,d){var a,c,f;f=o()+'/exercise'+d+'.html';c=sb(new ob(),(ub(),xb),f);try{vb(c,null,io(new ho(),e,d,f));}catch(a){a=rd(a);if(kd(a,14)){a;op(e);}else throw a;}}
function mp(d){var a,c,e;e=o()+'/intro.html';c=sb(new ob(),(ub(),xb),e);try{vb(c,null,so(new ro(),d,e));}catch(a){a=rd(a);if(kd(a,14)){a;lp(d,0);}else throw a;}}
function np(e,d){var a,c,f;f=o()+'/solution'+d+'.html';c=sb(new ob(),(ub(),xb),f);try{vb(c,null,no(new mo(),e,d,f));}catch(a){a=rd(a);if(kd(a,14)){a;lp(e,d+1);}else throw a;}}
function op(d){var a,c,e;e=o()+'/summary.html';c=sb(new ob(),(ub(),xb),e);try{vb(c,null,xo(new wo(),d,e));}catch(a){a=rd(a);if(kd(a,14)){a;xp(d);kp(d,0);}else throw a;}}
function pp(e,d,f){var a,c;c=sb(new ob(),(ub(),xb),f);try{vb(c,null,bp(new ap(),e,d));}catch(a){a=rd(a);if(kd(a,14)){}else throw a;}}
function qp(d,c){var a,b,e,f;b=hs(c,',');for(a=0;a<b.a;a++){if(!cs(b[a],'')){e=vp(d,b[a]);f=wp(d,b[a]);gq(d.a,b[a],e,null);if(f!==null&& !cs(f,'')){pp(d,b[a],f);}}}}
function rp(b,a){if(cs(a,'Clear')){tp(b);}nq(b.a,a);}
function sp(c){var a,b;a=tl('j1holframe');if(a===null){a=sl();}tm(c.a.e,'j1holtabbar');km(c.a.e,'d7v0');xi(a,c.a.e);xi(a,c.a.a);tf(c);b=null;if(cs(wf(),'Clear')){tp(c);}else{b=up(c);}if(b!==null&& !cs(b,'')){qp(c,b);xp(c);}else{mp(c);}hp(c);}
function tp(d){var a,b,c;c=yd('j1holtablist');if(c!==null&& !cs(c,'')){b=hs(c,',');for(a=0;a<b.a;a++){if(!cs(b[a],'')){Cd('j1holtab.'+b[a]);}}Cd('j1holtablist');}}
function up(b){var a;a=yd('j1holtablist');return a;}
function vp(d,c){var a,b;a=yd('j1holtab.'+c);b=ds(a,124);if(b==(-1)){b=gs(a);}return ls(a,0,b);}
function wp(d,c){var a,b;a=yd('j1holtab.'+c);b=ds(a,124)+1;if(b==(-1)){b=0;}return ks(a,b);}
function xp(a){var b;b=wf();if(gs(b)>0){rp(a,b);}else{mq(a.a,0);}Ap();}
function yp(f,c,a){var b,d,e,g;e=yd('j1holtablist');d=null;if(e===null||cs(e,'')){d=','+c+',';}else if(es(e,','+c+',')<0){d=e+c+',';}b=jq(f.a,c);g=c;if(b>=0){g=kq(f.a,b);}if(d!==null){Ed('j1holtablist',d);Ed('j1holtab.'+c,g+'|'+a);}}
function Ap(){ip();var f=$doc.getElementsByTagName('span');for(var c=0;c<f.length;c++){var e=f[c];if(e.className=='collapsed'||e.classname=='uncollapsed'){var b=$doc.createElement('div');var a=$doc.createElement('div');var d=e.parentNode;if(e.className=='collapsed'){e.className='xcollapsed';}else{e.className='xuncollapsed';}b.spanElement=e;b.className='collapseboxclosed';b.onclick=function(){if(this.spanElement.className=='xcollapsed'){this.spanElement.className='xuncollapsed';this.className='collapseboxopen';}else if(this.spanElement.className=='xuncollapsed'){this.spanElement.className='xcollapsed';this.className='collapseboxclosed';}};a.className='collapsewidget';b.appendChild(a);d.insertBefore(b,e);}}}
function Bp(a){rp(this,a);}
function bo(){}
_=bo.prototype=new xr();_.D=Bp;_.tI=30;_.b=0;var zp;function eo(b,a){b.a=a;return b;}
function go(b,a){if(b!=this.a.b){lq(this.a.a,false);this.a.b=b;}}
function co(){}
_=co.prototype=new xr();_.db=go;_.tI=31;function io(b,a,c,d){b.a=a;b.b=c;b.c=d;return b;}
function ko(a,b){op(this.a);}
function lo(a,b){if(jp(this.a,b)){dq(this.a.a,'Exercise_'+this.b,jb(b));yp(this.a,'Exercise_'+this.b,this.c);np(this.a,this.b);}else{op(this.a);}}
function ho(){}
_=ho.prototype=new xr();_.C=ko;_.F=lo;_.tI=0;function no(b,a,c,d){b.a=a;b.b=c;b.c=d;return b;}
function po(a,b){lp(this.a,this.b+1);}
function qo(a,b){if(jp(this.a,b)){dq(this.a.a,'Solution_'+this.b,jb(b));yp(this.a,'Solution_'+this.b,this.c);}lp(this.a,this.b+1);}
function mo(){}
_=mo.prototype=new xr();_.C=po;_.F=qo;_.tI=0;function so(b,a,c){b.a=a;b.b=c;return b;}
function uo(a,b){lp(this.a,0);}
function vo(b,c){var a,d;if(jp(this.a,c)){dq(this.a.a,'Intro',jb(c));yp(this.a,'Intro',this.b);a=qe('j1holtitleid');if(a!==null){d=ve(a);if(d!==null&& !cs(d,'')){Cg(d);}}}lp(this.a,0);}
function ro(){}
_=ro.prototype=new xr();_.C=uo;_.F=vo;_.tI=0;function xo(b,a,c){b.a=a;b.b=c;return b;}
function zo(a,b){xp(this.a);kp(this.a,0);}
function Ao(a,b){if(jp(this.a,b)){dq(this.a.a,'Summary',jb(b));yp(this.a,'Summary',this.b);}xp(this.a);kp(this.a,0);}
function wo(){}
_=wo.prototype=new xr();_.C=zo;_.F=Ao;_.tI=0;function Co(b,a,c,d){b.a=a;b.b=c;b.c=d;return b;}
function Eo(a,b){}
function Fo(a,b){if(jp(this.a,b)){dq(this.a.a,'Appendix_'+id(Aq((ip(),zp)[this.b])),jb(b));yp(this.a,'Appendix_'+id(Aq((ip(),zp)[this.b])),this.c);}kp(this.a,this.b+1);}
function Bo(){}
_=Bo.prototype=new xr();_.C=Eo;_.F=Fo;_.tI=0;function bp(b,a,c){b.a=a;b.b=c;return b;}
function dp(a,b){}
function ep(a,b){if(jp(this.a,b)){oq(this.a.a,this.b,jb(b));Ap();}}
function ap(){}
_=ap.prototype=new xr();_.C=dp;_.F=ep;_.tI=0;function aq(a){a.e=Fm(new Dm());a.a=qj(new pj());a.c=dv(new bv());a.d=dv(new bv());}
function bq(b){var a;aq(b);a=ok(new mk());uk(a,(hk(),ik));fv(b.d,a);an(b.e,a);return b;}
function dq(c,b,a){eq(c,b,a,c.c.b);}
function gq(d,b,e,a){var c;c=a;if(c===null){c='<p class="xxbig j1holwarn centertext">LOADING...<\/p>';}hq(d,b,e,c,d.c.b);}
function eq(e,d,a,c){var b,f;b=pq(a);f=sq(b);if(f===null){f=tq(d);}fq(e,d,f,b,c);}
function hq(d,c,e,a,b){fq(d,c,e,pq(a),b);}
function fq(f,c,g,a,b){var d,e;d=qq(a);e=rq(g,c);cq(f,e);rj(f.a,d);ev(f.c,b,Ep(new Dp(),c,g,e,d,a,f));if(f.c.b==1){jm(e,'selected');vj(f.a,0);}else{om(e,'selected');}}
function cq(b,a){pk(jd(iv(b.d,b.d.b-1),15),a);lq(b,true);}
function jq(d,c){var a,b;b=(-1);for(a=0;a<d.c.b;a++){if(cs(jd(iv(d.c,a),16).b,c)){b=a;break;}else if(js(c,jd(iv(d.c,a),16).b+'=')){b=a;break;}}return b;}
function kq(b,a){return jd(iv(b.c,a),16).d;}
function lq(f,c){var a,b,d,e,g;for(b=f.d.b-1;b>=0;b--){a=jd(iv(f.d,b),15);if(mm(a)>wg()){e=null;if(b>0){e=jd(iv(f.d,b-1),15);}else if(a.f.b>1){e=ok(new mk());ev(f.d,0,e);dn(f.e,e,0);b++;}while(a.f.b>1&&mm(a)>wg()){g=jj(a,0);lj(a,0);pk(e,g);}}else if(!c){e=null;d=b-1;if(d>=0){e=jd(iv(f.d,d),15);}else{break;}while(mm(a)<wg()){if(e.f.b>0){g=jj(e,e.f.b-1);tk(e,g);sk(a,g,0);}else if(d>0){d--;e=jd(iv(f.d,d),15);}else{break;}}if(mm(a)>wg()){g=jj(a,0);lj(a,0);pk(e,g);}}else{break;}}while(!c){if(jd(iv(f.d,0),15).f.b==0){lv(f.d,0);lj(f.e,0);}else{break;}}}
function nq(d,b){var a,c;a=jq(d,b);if(a>=0){mq(d,a);c=ds(b,61);if(c>=1){uf();zf(ks(b,c+1));}}}
function mq(d,b){var a,c;if(d.b!=b){a=jd(iv(d.c,d.b),16);om(a.c,'selected');d.b=b;c=jd(iv(d.c,b),16);jm(c.c,'selected');vj(d.a,b);}}
function oq(e,d,a){var b,c;c=jq(e,d);if(c>=0){b=jd(iv(e.c,c),16);Bj(b.a,a);}}
function pq(a){var b;b=zj(new xj(),a);sm(b,'j1holpanel');return b;}
function qq(a){var b,c,d,e;d=Dl(new wl());e=Dl(new wl());b=Dl(new wl());c=Dl(new wl());sm(d,'d7');sm(e,'d7v4');sm(b,'cornerBL');sm(c,'cornerBR');Fl(c,a);Fl(b,c);Fl(e,b);Fl(d,e);return d;}
function rq(b,d){var a,c;c=Dl(new wl());a=yk(new wk(),b,d);sm(c,'j1holtab');Fl(c,a);sm(a,'j1holtablink');return c;}
function sq(d){var a,b,c,e;e=null;a=d.i;b=ue(a);while(b!==null){c=pe(b,'name');if(c!==null&&bs(c,'j1holtabname')){e=pe(b,'content');break;}else{b=we(b);}}return e;}
function tq(c){var a,b;b=c;a=(-1);while((a=ds(b,95))>=0){if(a==0){b=ks(b,1);}else{b=ls(b,0,a)+id(32)+ks(b,a+1);}}return b;}
function Cp(){}
_=Cp.prototype=new xr();_.tI=0;_.b=0;function Ep(f,b,g,d,c,a,e){f.b=b;f.d=g;f.c=d;f.a=a;return f;}
function Dp(){}
_=Dp.prototype=new xr();_.tI=32;_.a=null;_.b=null;_.c=null;_.d=null;function vq(){}
_=vq.prototype=new Br();_.tI=33;function Aq(a){return String.fromCharCode(a).toUpperCase().charCodeAt(0);}
function Bq(){}
_=Bq.prototype=new Br();_.tI=34;function dr(b,a){Cr(b,a);return b;}
function cr(){}
_=cr.prototype=new Br();_.tI=35;function gr(b,a){Cr(b,a);return b;}
function fr(){}
_=fr.prototype=new Br();_.tI=36;function jr(b,a){Cr(b,a);return b;}
function ir(){}
_=ir.prototype=new Br();_.tI=37;function ur(){ur=wx;{wr();}}
function wr(){ur();vr=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var vr=null;function mr(){mr=wx;ur();}
function nr(a){mr();return ts(a);}
function or(){}
_=or.prototype=new Br();_.tI=38;function rr(b,a){Cr(b,a);return b;}
function qr(){}
_=qr.prototype=new Br();_.tI=39;function Fr(b,a){return b.charCodeAt(a);}
function cs(b,a){if(!kd(a,1))return false;return ps(b,a);}
function bs(b,a){if(a==null)return false;return b==a||b.toLowerCase()==a.toLowerCase();}
function ds(b,a){return b.indexOf(String.fromCharCode(a));}
function es(b,a){return b.indexOf(a);}
function fs(c,b,a){return c.indexOf(b,a);}
function gs(a){return a.length;}
function hs(b,a){return is(b,a,0);}
function is(j,i,g){var a=new RegExp(i,'g');var h=[];var b=0;var k=j;var e=null;while(true){var f=a.exec(k);if(f==null||(k==''||b==g-1&&g>0)){h[b]=k;break;}else{h[b]=k.substring(0,f.index);k=k.substring(f.index+f[0].length,k.length);a.lastIndex=0;if(e==k){h[b]=k.substring(0,1);k=k.substring(1);}e=k;b++;}}if(g==0){for(var c=h.length-1;c>=0;c--){if(h[c]!=''){h.splice(c+1,h.length-(c+1));break;}}}var d=os(h.length);var c=0;for(c=0;c<h.length;++c){d[c]=h[c];}return d;}
function js(b,a){return es(b,a)==0;}
function ks(b,a){return b.substr(a,b.length-a);}
function ls(c,a,b){return c.substr(a,b-a);}
function ms(d){var a,b,c;c=gs(d);a=dd('[C',[0],[(-1)],[c],0);for(b=0;b<c;++b)a[b]=Fr(d,b);return a;}
function ns(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function os(a){return dd('[Ljava.lang.String;',[0],[1],[a],null);}
function ps(a,b){return String(a)==b;}
function qs(a){return cs(this,a);}
function ss(){var a=rs;if(!a){a=rs={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function ts(a){return ''+a;}
_=String.prototype;_.eQ=qs;_.hC=ss;_.tI=2;var rs=null;function ws(a){return t(a);}
function Cs(b,a){Cr(b,a);return b;}
function Bs(){}
_=Bs.prototype=new Br();_.tI=40;function Fs(d,a,b){var c;while(a.x()){c=a.A();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function bt(a){throw Cs(new Bs(),'add');}
function ct(b){var a;a=Fs(this,this.y(),b);return a!==null;}
function Es(){}
_=Es.prototype=new xr();_.k=bt;_.m=ct;_.tI=0;function nt(b,a){throw jr(new ir(),'Index: '+a+', Size: '+b.b);}
function ot(a){return ft(new et(),a);}
function pt(b,a){throw Cs(new Bs(),'add');}
function qt(a){this.j(this.jb(),a);return true;}
function rt(e){var a,b,c,d,f;if(e===this){return true;}if(!kd(e,17)){return false;}f=jd(e,17);if(this.jb()!=f.jb()){return false;}c=ot(this);d=f.y();while(ht(c)){a=it(c);b=it(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function st(){var a,b,c,d;c=1;a=31;b=ot(this);while(ht(b)){d=it(b);c=31*c+(d===null?0:d.hC());}return c;}
function tt(){return ot(this);}
function ut(a){throw Cs(new Bs(),'remove');}
function dt(){}
_=dt.prototype=new Es();_.j=pt;_.k=qt;_.eQ=rt;_.hC=st;_.y=tt;_.fb=ut;_.tI=41;function ft(b,a){b.c=a;return b;}
function ht(a){return a.a<a.c.jb();}
function it(a){if(!ht(a)){throw new sx();}return a.c.v(a.b=a.a++);}
function jt(a){if(a.b<0){throw new fr();}a.c.fb(a.b);a.a=a.b;a.b=(-1);}
function kt(){return ht(this);}
function lt(){return it(this);}
function et(){}
_=et.prototype=new xr();_.x=kt;_.A=lt;_.tI=0;_.a=0;_.b=(-1);function tu(f,d,e){var a,b,c;for(b=pw(f.p());iw(b);){a=jw(b);c=a.t();if(d===null?c===null:d.eQ(c)){if(e){kw(b);}return a;}}return null;}
function uu(b){var a;a=b.p();return xt(new wt(),b,a);}
function vu(b){var a;a=zw(b);return fu(new eu(),b,a);}
function wu(a){return tu(this,a,false)!==null;}
function xu(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!kd(d,18)){return false;}f=jd(d,18);c=uu(this);e=f.z();if(!Eu(c,e)){return false;}for(a=zt(c);au(a);){b=bu(a);h=this.w(b);g=f.w(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function yu(b){var a;a=tu(this,b,false);return a===null?null:a.u();}
function zu(){var a,b,c;b=0;for(c=pw(this.p());iw(c);){a=jw(c);b+=a.hC();}return b;}
function Au(){return uu(this);}
function Bu(a,b){throw Cs(new Bs(),'This map implementation does not support modification');}
function vt(){}
_=vt.prototype=new xr();_.l=wu;_.eQ=xu;_.w=yu;_.hC=zu;_.z=Au;_.eb=Bu;_.tI=42;function Eu(e,b){var a,c,d;if(b===e){return true;}if(!kd(b,19)){return false;}c=jd(b,19);if(c.jb()!=e.jb()){return false;}for(a=c.y();a.x();){d=a.A();if(!e.m(d)){return false;}}return true;}
function Fu(a){return Eu(this,a);}
function av(){var a,b,c;a=0;for(b=this.y();b.x();){c=b.A();if(c!==null){a+=c.hC();}}return a;}
function Cu(){}
_=Cu.prototype=new Es();_.eQ=Fu;_.hC=av;_.tI=43;function xt(b,a,c){b.a=a;b.b=c;return b;}
function zt(b){var a;a=pw(b.b);return Et(new Dt(),b,a);}
function At(a){return this.a.l(a);}
function Bt(){return zt(this);}
function Ct(){return this.b.a.c;}
function wt(){}
_=wt.prototype=new Cu();_.m=At;_.y=Bt;_.jb=Ct;_.tI=44;function Et(b,a,c){b.a=c;return b;}
function au(a){return a.a.x();}
function bu(b){var a;a=b.a.A();return a.t();}
function cu(){return au(this);}
function du(){return bu(this);}
function Dt(){}
_=Dt.prototype=new xr();_.x=cu;_.A=du;_.tI=0;function fu(b,a,c){b.a=a;b.b=c;return b;}
function hu(b){var a;a=pw(b.b);return mu(new lu(),b,a);}
function iu(a){return yw(this.a,a);}
function ju(){return hu(this);}
function ku(){return this.b.a.c;}
function eu(){}
_=eu.prototype=new Es();_.m=iu;_.y=ju;_.jb=ku;_.tI=0;function mu(b,a,c){b.a=c;return b;}
function ou(a){return a.a.x();}
function pu(a){var b;b=a.a.A().u();return b;}
function qu(){return ou(this);}
function ru(){return pu(this);}
function lu(){}
_=lu.prototype=new xr();_.x=qu;_.A=ru;_.tI=0;function cv(a){{gv(a);}}
function dv(a){cv(a);return a;}
function ev(c,a,b){if(a<0||a>c.b){nt(c,a);}nv(c.a,a,b);++c.b;}
function fv(b,a){wv(b.a,b.b++,a);return true;}
function gv(a){a.a=E();a.b=0;}
function iv(b,a){if(a<0||a>=b.b){nt(b,a);}return sv(b.a,a);}
function jv(b,a){return kv(b,a,0);}
function kv(c,b,a){if(a<0){nt(c,a);}for(;a<c.b;++a){if(rv(b,sv(c.a,a))){return a;}}return (-1);}
function lv(c,a){var b;b=iv(c,a);uv(c.a,a,1);--c.b;return b;}
function mv(c,b){var a;a=jv(c,b);if(a==(-1)){return false;}lv(c,a);return true;}
function ov(a,b){ev(this,a,b);}
function pv(a){return fv(this,a);}
function nv(a,b,c){a.splice(b,0,c);}
function qv(a){return jv(this,a)!=(-1);}
function rv(a,b){return a===b||a!==null&&a.eQ(b);}
function tv(a){return iv(this,a);}
function sv(a,b){return a[b];}
function vv(a){return lv(this,a);}
function uv(a,c,b){a.splice(c,b);}
function wv(a,b,c){a[b]=c;}
function xv(){return this.b;}
function bv(){}
_=bv.prototype=new dt();_.j=ov;_.k=pv;_.m=qv;_.v=tv;_.fb=vv;_.jb=xv;_.tI=45;_.a=null;_.b=0;function ww(){ww=wx;Dw=dx();}
function tw(a){{vw(a);}}
function uw(a){ww();tw(a);return a;}
function vw(a){a.a=E();a.d=ab();a.b=od(Dw,A);a.c=0;}
function xw(b,a){if(kd(a,1)){return hx(b.d,jd(a,1))!==Dw;}else if(a===null){return b.b!==Dw;}else{return gx(b.a,a,a.hC())!==Dw;}}
function yw(a,b){if(a.b!==Dw&&fx(a.b,b)){return true;}else if(cx(a.d,b)){return true;}else if(ax(a.a,b)){return true;}return false;}
function zw(a){return nw(new ew(),a);}
function Aw(c,a){var b;if(kd(a,1)){b=hx(c.d,jd(a,1));}else if(a===null){b=c.b;}else{b=gx(c.a,a,a.hC());}return b===Dw?null:b;}
function Bw(c,a,d){var b;if(kd(a,1)){b=kx(c.d,jd(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=jx(c.a,a,d,a.hC());}if(b===Dw){++c.c;return null;}else{return b;}}
function Cw(c,a){var b;if(kd(a,1)){b=nx(c.d,jd(a,1));}else if(a===null){b=c.b;c.b=od(Dw,A);}else{b=mx(c.a,a,a.hC());}if(b===Dw){return null;}else{--c.c;return b;}}
function Ew(e,c){ww();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.k(a[f]);}}}}
function Fw(d,a){ww();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=Ev(c.substring(1),e);a.k(b);}}}
function ax(f,h){ww();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.u();if(fx(h,d)){return true;}}}}return false;}
function bx(a){return xw(this,a);}
function cx(c,d){ww();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(fx(d,a)){return true;}}}return false;}
function dx(){ww();}
function ex(){return zw(this);}
function fx(a,b){ww();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function ix(a){return Aw(this,a);}
function gx(f,h,e){ww();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(fx(h,d)){return c.u();}}}}
function hx(b,a){ww();return b[':'+a];}
function lx(a,b){return Bw(this,a,b);}
function jx(f,h,j,e){ww();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(fx(h,d)){var i=c.u();c.ib(j);return i;}}}else{a=f[e]=[];}var c=Ev(h,j);a.push(c);}
function kx(c,a,d){ww();a=':'+a;var b=c[a];c[a]=d;return b;}
function mx(f,h,e){ww();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(fx(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.u();}}}}
function nx(c,a){ww();a=':'+a;var b=c[a];delete c[a];return b;}
function Av(){}
_=Av.prototype=new vt();_.l=bx;_.p=ex;_.w=ix;_.eb=lx;_.tI=46;_.a=null;_.b=null;_.c=0;_.d=null;var Dw;function Cv(b,a,c){b.a=a;b.b=c;return b;}
function Ev(a,b){return Cv(new Bv(),a,b);}
function Fv(b){var a;if(kd(b,20)){a=jd(b,20);if(fx(this.a,a.t())&&fx(this.b,a.u())){return true;}}return false;}
function aw(){return this.a;}
function bw(){return this.b;}
function cw(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function dw(a){var b;b=this.b;this.b=a;return b;}
function Bv(){}
_=Bv.prototype=new xr();_.eQ=Fv;_.t=aw;_.u=bw;_.hC=cw;_.ib=dw;_.tI=47;_.a=null;_.b=null;function nw(b,a){b.a=a;return b;}
function pw(a){return gw(new fw(),a.a);}
function qw(c){var a,b,d;if(kd(c,20)){a=jd(c,20);b=a.t();if(xw(this.a,b)){d=Aw(this.a,b);return fx(a.u(),d);}}return false;}
function rw(){return pw(this);}
function sw(){return this.a.c;}
function ew(){}
_=ew.prototype=new Cu();_.m=qw;_.y=rw;_.jb=sw;_.tI=48;function gw(c,b){var a;c.c=b;a=dv(new bv());if(c.c.b!==(ww(),Dw)){fv(a,Cv(new Bv(),null,c.c.b));}Fw(c.c.d,a);Ew(c.c.a,a);c.a=ot(a);return c;}
function iw(a){return ht(a.a);}
function jw(a){return a.b=jd(it(a.a),20);}
function kw(a){if(a.b===null){throw gr(new fr(),'Must call next() before remove().');}else{jt(a.a);Cw(a.c,a.b.t());a.b=null;}}
function lw(){return iw(this);}
function mw(){return jw(this);}
function fw(){}
_=fw.prototype=new xr();_.x=lw;_.A=mw;_.tI=0;_.a=null;_.b=null;function sx(){}
_=sx.prototype=new Br();_.tI=49;function uq(){sp(gp(new bo()));}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{uq();}catch(a){b(d);}else{uq();}}
var nd=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{6:1},{6:1},{3:1,14:1},{3:1,14:1},{3:1,14:1},{2:1,4:1},{2:1},{7:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1,15:1},{9:1,11:1,12:1,13:1},{9:1,10:1,11:1,12:1,13:1},{7:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{5:1},{8:1},{16:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{17:1},{18:1},{19:1},{19:1},{17:1},{18:1},{20:1},{19:1},{3:1}];if (com_sun_javaone_HoLTemplate) {  var __gwt_initHandlers = com_sun_javaone_HoLTemplate.__gwt_initHandlers;  com_sun_javaone_HoLTemplate.onScriptLoad(gwtOnLoad);}})();