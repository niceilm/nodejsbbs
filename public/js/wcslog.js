if(typeof wcs=="undefined"){wcs={}}if(!wcs_SerName){var wcs_SerName="wcs.naver.com"}var wcs_add={};(function(){var h={},A="0.4.12",K=navigator,af=window.location,i=af.href,aa=af.search,ag=af.hostname,aj=document.referrer,S=K.appName,z=K.appVersion,X=K.userAgent,O=(S=="Microsoft Internet Explorer"),B=(z.indexOf("Opera")>=0),o=(X.indexOf("MAC")>=0),Z=0,Q=-1,g=encodeURIComponent,t=decodeURIComponent,m=(af.protocol=="https:")?"https:":"http:",ar="NA_SA",ak="NA_SAC",J="NA_SAS",c="NA_MI",G="NA_CO",E="CPAValidator",M=["xxx.com","yyy.com"],I="wcs.cr.shopping.naver.com";function N(){s();C();am();ad();at();ap();w();U();ac();T();R()}function s(){h.os=K.platform?K.platform:""}function C(){var au="";au=K.userLanguage?K.userLanguage:(K.language?K.language:"");h.ln=au}function am(){var av="";if(window.screen&&screen.width&&screen.height){av=screen.width+"x"+screen.height}else{if(window.java||self.java){var au=java.awt.Toolkit.getDefaultToolkit().getScreenSize();av=au.width+"x"+au.height}}h.sr=av}function ad(){try{h.bw=document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth;h.bh=document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight}catch(au){}}function at(){h.c="";if(window.screen){h.c=screen.colorDepth?screen.colorDepth:screen.pixelDepth}else{if(window.java||self.java){var au=java.awt.Toolkit.getDefaultToolkit().getColorModel().getPixelSize();h.c=au}}}function ap(){h.j="";try{h.j=K.javaEnabled()?"Y":"N"}catch(au){}}function U(){if(K.cookieEnabled){h.k="Y"}else{h.k="N"}}function ac(){var au="";try{if(O&&!o&&document.body){var ax=document.body.addBehavior("#default#clientCaps");if(document.body.connectionType){au=document.body.connectionType}document.body.removeBehavior(ax)}else{if(navigator.connection&&typeof navigator.connection.type!="undefined"){var av=navigator.connection;switch(av.type){case av.CELL_2G:au="2g";break;case av.CELL_3G:au="3g";break;case av.CELL_4G:au="4g";break;case av.WIFI:au="wifi";break;case av.ETHERNET:au="eth";break;case av.NONE:au="none";break;case av.UNKNOWN:au="unknown";break;default:au=""}}else{if(typeof blackberry!="undefined"&&typeof blackberry.network!="undefined"){if(blackberry.network=="Wi-Fi"){au="wifi"}else{if(blackberry.network=="3G"){au="3g"}else{au=blackberry.network}}}}}}catch(aw){}h.ct=au}function w(){var aw="1.0";try{if(String&&String.prototype){aw="1.1";if(aw.search){aw="1.2";var av=new Date,aC=0;if(av.getUTCDate){aw="1.3";var ay,au=z.indexOf("MSIE");if(au>0){var aD=parseInt(ay=z.substring(au+5));if(aD>3){aD=parseFloat(ay)}}if(O&&o&&aD>=5){aw="1.4"}if(aC.toFixed){aw="1.5";var aB=new Array;if(aB.every){aw="1.6";ay=0;var ax=new Object;var aA=function(aG){var aE=0;try{aE=new Iterator(aG)}catch(aF){}return aE};ay=aA(ax);if(ay&&ay.next){aw="1.7"}if(aB.reduce){aw="1.8"}}}}}}}catch(az){}h.jv=aw}function T(){h.cs=document.characterSet||document.charset||"-"}function R(){h.tl=g(document.title)}function b(au){return au.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function ai(aA){var aB="wcs_bt";var ax="";var aD=ag.toLowerCase();var au=new Date();var ay="";var aE="/";var aC=-1;var aw;aw=l(aB,1);if(aw){var av=aw.length;for(var az=0;az<av;az++){if(typeof aw[az]!="function"&&aC<aw[az]){aC=aw[az]}}}au.setDate(aA.getDate()+200*365);ay=au.toGMTString();ax=parseInt(aA.getTime()/1000);x(aB,ax,aD,ay,aE);return aC}function l(aB,aA){var aw="";var av=[];var aD=document.cookie.split(";");var aC=aD.length;var ax=false;var ay="";var au;for(var az=0;az<aC;az++){ay=b(aD[az]);if(ay.indexOf(aB+"=")==0){aw=ay.substring(ay.indexOf("=")+1);av.push(aw);ax=true;if(aA!=1){break}}}if(ax&&aA==1){au=av}else{if(ax){au=aw}else{au=false}}return au}function x(ay,ax,au,av,aw){document.cookie=ay+"="+ax+((!av)?"":"; expires="+av)+"; path="+((!aw)?"/":aw)+((!au)?"":"; domain="+au)}function an(ay,au,ax){if(!ax){ax="/"}if(!au){au=ag}var aw=new Date();aw.setDate(aw.getDate()-1);var av=aw.toGMTString();x(ay,"",au,av,ax)}var p;if(!p){p={}}(function(){function ax(aD){return aD<10?"0"+aD:aD}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(aD){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+ax(this.getUTCMonth()+1)+"-"+ax(this.getUTCDate())+"T"+ax(this.getUTCHours())+":"+ax(this.getUTCMinutes())+":"+ax(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(aD){return this.valueOf()}}var aw=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,az=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,aA,av,aC={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},aB;function au(aD){az.lastIndex=0;return az.test(aD)?'"'+aD.replace(az,function(aE){var aF=aC[aE];return typeof aF==="string"?aF:"\\u"+("0000"+aE.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+aD+'"'}function ay(aK,aH){var aF,aE,aL,aD,aI=aA,aG,aJ=aH[aK];if(aJ&&typeof aJ==="object"&&typeof aJ.toJSON==="function"){aJ=aJ.toJSON(aK)}if(typeof aB==="function"){aJ=aB.call(aH,aK,aJ)}switch(typeof aJ){case"string":return au(aJ);case"number":return isFinite(aJ)?String(aJ):"null";case"boolean":case"null":return String(aJ);case"object":if(!aJ){return"null"}aA+=av;aG=[];if(Object.prototype.toString.apply(aJ)==="[object Array]"){aD=aJ.length;for(aF=0;aF<aD;aF+=1){aG[aF]=ay(aF,aJ)||"null"}aL=aG.length===0?"[]":aA?"[\n"+aA+aG.join(",\n"+aA)+"\n"+aI+"]":"["+aG.join(",")+"]";aA=aI;return aL}if(aB&&typeof aB==="object"){aD=aB.length;for(aF=0;aF<aD;aF+=1){if(typeof aB[aF]==="string"){aE=aB[aF];aL=ay(aE,aJ);if(aL){aG.push(au(aE)+(aA?": ":":")+aL)}}}}else{for(aE in aJ){if(Object.prototype.hasOwnProperty.call(aJ,aE)){aL=ay(aE,aJ);if(aL){aG.push(au(aE)+(aA?": ":":")+aL)}}}}aL=aG.length===0?"{}":aA?"{\n"+aA+aG.join(",\n"+aA)+"\n"+aI+"}":"{"+aG.join(",")+"}";aA=aI;return aL}}if(typeof p.stringify!=="function"){p.stringify=function(aG,aE,aF){var aD;aA="";av="";if(typeof aF==="number"){for(aD=0;aD<aF;aD+=1){av+=" "}}else{if(typeof aF==="string"){av=aF}}aB=aE;if(aE&&typeof aE!=="function"&&(typeof aE!=="object"||typeof aE.length!=="number")){throw new Error("JSON.stringify")}return ay("",{"":aG})}}}());var ao={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(aw){var au="";var aD,aB,az,aC,aA,ay,ax;var av=0;aw=ao._utf8_encode(aw);while(av<aw.length){aD=aw.charCodeAt(av++);aB=aw.charCodeAt(av++);az=aw.charCodeAt(av++);aC=aD>>2;aA=((aD&3)<<4)|(aB>>4);ay=((aB&15)<<2)|(az>>6);ax=az&63;if(isNaN(aB)){ay=ax=64}else{if(isNaN(az)){ax=64}}au=au+this._keyStr.charAt(aC)+this._keyStr.charAt(aA)+this._keyStr.charAt(ay)+this._keyStr.charAt(ax)}return au},decode:function(aw){var au="";var aD,aB,az;var aC,aA,ay,ax;var av=0;aw=aw.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(av<aw.length){aC=this._keyStr.indexOf(aw.charAt(av++));aA=this._keyStr.indexOf(aw.charAt(av++));ay=this._keyStr.indexOf(aw.charAt(av++));ax=this._keyStr.indexOf(aw.charAt(av++));aD=(aC<<2)|(aA>>4);aB=((aA&15)<<4)|(ay>>2);az=((ay&3)<<6)|ax;au=au+String.fromCharCode(aD);if(ay!=64){au=au+String.fromCharCode(aB)}if(ax!=64){au=au+String.fromCharCode(az)}}au=ao._utf8_decode(au);return au},_utf8_encode:function(av){av=av.replace(/\r\n/g,"\n");var au="";for(var ax=0;ax<av.length;ax++){var aw=av.charCodeAt(ax);if(aw<128){au+=String.fromCharCode(aw)}else{if((aw>127)&&(aw<2048)){au+=String.fromCharCode((aw>>6)|192);au+=String.fromCharCode((aw&63)|128)}else{au+=String.fromCharCode((aw>>12)|224);au+=String.fromCharCode(((aw>>6)&63)|128);au+=String.fromCharCode((aw&63)|128)}}}return au},_utf8_decode:function(au){var av="";var ax=0;var az=0,ay=0,aw=0;while(ax<au.length){az=au.charCodeAt(ax);if(az<128){av+=String.fromCharCode(az);ax++}else{if((az>191)&&(az<224)){aw=au.charCodeAt(ax+1);av+=String.fromCharCode(((az&31)<<6)|(aw&63));ax+=2}else{aw=au.charCodeAt(ax+1);c3=au.charCodeAt(ax+2);av+=String.fromCharCode(((az&15)<<12)|((aw&63)<<6)|(c3&63));ax+=3}}}return av}};function v(au){var av=new Image(1,1);av.src=au;av.onload=function(){av.onload=null;return};av.onerror=function(){av.onerror=null;return};return true}function d(aA,az){var av=new Date();var au=[];var ay;au.push(m+"//"+az+"/m?");au.push("u="+g(i)+"&e="+(aj?g(aj):""));for(ay in wcs_add){if(typeof wcs_add[ay]!="function"&&(ay=="i"||ay=="wa")){au.push("&"+ay+"="+g(wcs_add[ay]))}}if(Z<1){N();Q=ai(av)}au.push("&bt="+Q);for(ay in aA){var ax=typeof ay;var aw=typeof aA[ay];if((ax=="string"&&ay.length>=3&&aw!="function")||ay=="qy"){if(aw=="string"){au.push("&"+ay+"="+g(aA[ay]))}else{if(aw=="object"){au.push("&"+ay+"="+g(p.stringify(aA[ay])))}}}}for(ay in h){if(typeof h[ay]!="function"){au.push("&"+ay+"="+g(h[ay]))}}au.push("&vs="+A+"&nt="+av.getTime());Z++;return au.join("")}wcs.pageview=function(av){var aw={};for(var ax in av){if(ax=="order"||ax=="chn"){continue}if(av[ax]){aw[ax]=av[ax]}}var au=d(aw,wcs_SerName);au+="&EOU";v(au)};wcs.event=function(au,av){var aw=[];aw.push(m+"//"+wcs_SerName+"/m?");if(au==""||av==""||typeof au=="undefined"||typeof av=="undefined"){return}aw.push("u="+g(i));aw.push("&t=event");aw.push("&e_cat="+g(au));aw.push("&e_act="+g(av));aw.push("&nt="+(new Date().getTime()));v(aw.join(""));return true};function n(){if(aa.length<=0||aa.split("?").length<2){return false}var av=aa.split("?")[1].split("&");var ax=av.length;var au;for(var aw=0;aw<ax;aw++){au=av[aw].split("=");if(au[0]=="NaPm"&&b(au[1])!=""){return au[1]}}return false}function ab(au){var aw="/";var av=au.indexOf("/");if(av>0){aw=au.substring(av);au=au.substring(0,av);return[au,aw]}return false}function F(aC,az,aE,aA,av,aB,aD){var aw=[];aw[0]="NVKWD="+az;aw[1]="NVADKWD="+aE;aw[2]="NVAR="+aA;aw[3]="NVADID="+av;aw[4]="t="+Math.round(aB.getTime()/1000);aw[5]="u="+g(i);aw[6]="r="+g(aj);var ax=aw.join("|");ax=ao.encode(ax);var au=new Date();au.setDate(aB.getDate()+15);var ay=au.toGMTString();x(ar,ax,aC,ay,aD);x(J,"1",aC,0,aD)}function f(av){if(!av){return false}av=ao.decode(av);var ay=av.split("|");var ax=ay.length;var az;var au=0;for(var aw=0;aw<ax;aw++){az=ay[aw].split("=");if(az[0]=="u"){if(t(az[1])==i){au++}}else{if(az[0]=="r"){if(t(az[1])==aj){au++}}}}if(au==2){return true}return false}function k(aF){var aD=new Date();var aG="/";if(!aF){aF=ag.toLowerCase()}else{var aE=ab(aF);if(aE!=false){aF=aE[0];aG=aE[1]}if(ag.indexOf(aF)<0){aF=ag.toLowerCase()}}var av="",aH="",aw="",au="";var aC="",aB;if(aa.length<=0||aa.split("?").length<2){return false}var aA=aa.split("?")[1].split("&");var az=aA.length;var ay;for(var ax=0;ax<az;ax++){ay=aA[ax].split("=");if(ay[0]=="NaPm"){aC=ay[1]}else{if(ay[0]=="NVKWD"){av=ay[1]}else{if(ay[0]=="NVADKWD"){aH=ay[1]}else{if(ay[0]=="NVAR"){aw=ay[1]}else{if(ay[0]=="NVADID"){au=ay[1]}}}}}}if(aC!=""){aB=H(aC);if(aB.NVKWD){av=aB.NVKWD}if(aB.NVADKWD){av=aB.NVADKWD}if(aB.NVAR){av=aB.NVAR}if(aB.NVADID){av=aB.NVADID}}if(au!=""&&aw!=""){F(aF,av,aH,aw,au,aD,aG)}}function al(ay,aI){var aG=new Date();var aD=[];var aH=l(ar);if(aH==false){return""}var aE=l(ak);if(f(aE)){return""}var aF="0";if(l(J)=="1"){aF="1"}var az=ao.decode(aH).split("|");var aC=az.length;var av;var aw="";for(var aA=0;aA<aC;aA++){av=az[aA].split("=");if(av[0]=="NVKWD"){aD.push("NVKWD="+av[1])}else{if(av[0]=="NVADKWD"){aD.push("NVADKWD="+av[1])}else{if(av[0]=="NVAR"){aD.push("NVAR="+av[1])}else{if(av[0]=="NVADID"){aD.push("NVADID="+av[1])}else{if(av[0]=="t"){aD.push("t="+av[1]);var aJ="";var ax=parseInt(av[1]);var aB=Math.round(aG.getTime()/1000);var au=aB-ax;if(au<60*30&&aF=="1"){aJ="D"}else{if(au<60*60*24*15){aJ="I"}}if(au<60*60*24*7){aJ+="C"}aD.push("isDirect="+aJ)}else{if(av[0]=="u"){aD.push("u="+av[1])}else{if(av[0]=="r"){aD.push("r="+av[1])}}}}}}}}aD.push("cnvType="+ay);aD.push("cnvValue="+aI);if(aJ.indexOf("D")>=0||aJ.indexOf("I")>=0||aJ.indexOf("C")>=0){aw=aD.join("|")}x(ak,ao.encode("u="+g(i)+"|r="+g(aj)),"",0);return aw}wcs.mileageWhitelist=[];function r(){var av=aa?aa.split("?")[1].split("&"):"";var ax=av.length;var au;var ay="Ncisy";for(var aw=0;aw<ax;aw++){au=av[aw].split("=");if(au[0]==ay){return au[1]}}return false}function ah(){if(aj.indexOf("naver.com")>0){return true}return false}function Y(au){if(!aj){return true}var aw;if(au=="m"){aw=wcs.mileageWhitelist}else{if(au=="c"){aw=wcs.checkoutWhitelist}}var ax=aw.length;aw[ax]="naver.com";aw[ax+1]=ag;for(var av=0;av<ax+2;av++){if(aj.indexOf(aw[av])>=0){return true}}return false}function V(au,av,ax){var aw;aw=parseInt(av,ax);if(ax==36){aw=aw/1000}if(Math.round(au.getTime()/1000)>aw){return true}return false}function ae(){var au=l(c);return au}function y(au,aw,ax){var ay=ao.encode(aw);var av=0;x(c,ay,au,av,ax)}function P(av,aB){var au,ay,aA,az;au=av.split(".");ay=au.length;for(var ax=0;ax<ay-1;ax++){aA="";az=[];for(var aw=ax;aw<ay;aw++){az.push(au[aw])}aA=az.join(".");an(c,aA,aB)}}function j(au){return decodeURIComponent(au.replace(/\+/g," "))}function H(az){var au,ay,av;var ax={};az=j(az);if(az.length>0){au=az.split("|");ay=au.length;for(var aw=0;aw<ay;aw++){av=au[aw].split("=");ax[av[0]]=av[1]}}return ax}function u(aD){var az=new Date();var ax=r();var aA=n();var av,ay,aw;var au="",aE="",aC=0;var aF="/";if(!aD){aD=ag.toLowerCase()}else{var aB=ab(aD);if(aB!=false){aD=aB[0];aF=aB[1]}if(ag.indexOf(aD)<0){aD=ag.toLowerCase()}}if((aA||ax)&&ah()){if(aA){ay=H(aA);if(ay.et){au=ay.et;aC=36}ncisy_napm=g("tr="+ay.tr+"|et="+ay.et+"|ba="+ay.ba+"|aa="+ay.aa+"|ci="+ay.ci+"|ct="+ay.ct+"|hk="+ay.hk)}else{if(ax){av=H(ax);if(av.e){au=av.e;aC=10}}}if(au){if(!V(az,au,aC)){if(aA){y(aD,ncisy_napm,aF)}else{if(ax){y(aD,ax,aF)}}}else{P(aD,aF)}}}else{aE=ae();if(aE){aE=ao.decode(aE);if(Y("m")){aw=H(aE);if(aw.v&&aw.e){au=aw.e;aC=10}else{if(aw.et){au=aw.et;aC=36}}if(V(az,au,aC)){P(aD,aF)}}else{P(aD,aF)}}}}function L(aD){var aB=false;var ax=new Date();ax.setTime(ax.getTime()+1000*60*60*24);var au="naver_influx";var av="shopping.naver.com";var aA=n();var az;var aE="/";if(!aD){aD=ag.toLowerCase()}else{var aC=ab(aD);if(aC!=false){aD=aC[0];aE=aC[1]}if(ag.indexOf(aD)<0){aD=ag.toLowerCase()}}var aw=M.length;for(var ay=0;ay<aw;ay++){if(aj.indexOf(M[ay].replace("www.",""))>=0){aB=true;break}}if(aB){an(E,aD,aE)}else{if(aA){az=H(aA);au=g("ct="+az.ct+"|ci="+az.ci+"|tr="+az.tr+"|sn="+az.sn+"|hk="+az.hk)}if(aj.indexOf(av)>=0){x(E,au,aD,ax.toGMTString(),aE)}}}function D(){var av=l(E);if(av){av=j(av);if(av=="naver_influx"){return av}else{var au=H(av);if(au.sn&&au.ct&&au.ci&&au.hk){return"&sn="+au.sn+"&st="+au.ct+"&si="+au.ci+"&hk="+au.hk}}}return false}function a(aw){var av="";var au=D();av=d(aw,I);if(au!="naver_influx"){av+=au}av+="&EOU";v(av)}wcs.isCPA=l(E);wcs.CPAOrder=a;wcs.checkoutWhitelist=[];function e(au,ax,aw){var av=0;x(G,ax,au,av,aw)}function W(){var au=l(G);return au}function aq(au,av){an(G,au,av)}function q(au){var ay="";var ax="/";if(!au){au=ag.toLowerCase()}else{var aw=ab(au);if(aw!=false){au=aw[0];ax=aw[1]}if(ag.indexOf(au)<0){au=ag.toLowerCase()}}var av=n();if(av){napmObj=H(av);ay=g("ct="+napmObj.ct+"|ci="+napmObj.ci+"|tr="+napmObj.tr+"|hk="+napmObj.hk);e(au,ay,ax)}else{ay=W();if(ay&&!Y("c")){aq(au,ax)}}}wcs.inflow=function(au){k(au);u(au);L(au);q(au)};wcs.cnv=al;wcs.getBaseAccumRate=function(){var au=ae();if(au){au=ao.decode(au);ncisyObj=H(au);if(ncisyObj.ba){return ncisyObj.ba}}return 0};wcs.getAddAccumRate=function(){var au=ae();if(au){au=ao.decode(au);ncisyObj=H(au);if(ncisyObj.aa){return ncisyObj.aa}}return 0};wcs.getMileageInfo=function(){var au=ae();if(au){au=ao.decode(au);return au}return false};wcs.getClickTime=function(){var au=W();if(au){var av=H(au);if(av.ct){return av.ct}}return false};wcs.getClickID=function(){var au=W();if(au){var av=H(au);if(av.ci){return av.ci}}return false};wcs.getInflowRoute=function(){var au=W();if(au){var av=H(au);if(av.tr){return av.tr}}return false}})();var wcs_do=wcs.pageview;