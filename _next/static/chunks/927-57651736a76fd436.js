(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[927],{622:function(e,i,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=r(2265),a=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function q(e,i,r){var o,t={},l=null,w=null;for(o in void 0!==r&&(l=""+r),void 0!==i.key&&(l=""+i.key),void 0!==i.ref&&(w=i.ref),i)n.call(i,o)&&!b.hasOwnProperty(o)&&(t[o]=i[o]);if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===t[o]&&(t[o]=i[o]);return{$$typeof:a,type:e,key:l,ref:w,props:t,_owner:s.current}}i.Fragment=t,i.jsx=q,i.jsxs=q},7437:function(e,i,r){"use strict";e.exports=r(622)},1095:function(e,i,r){"use strict";var o,a,t,n,s,b,l=r(2265);l&&"object"==typeof l&&"default"in l&&l.default;var w=r(6565),u=new w,d=u.getBrowser(),c=u.getCPU(),p=u.getDevice(),m=u.getEngine(),f=u.getOS(),h=u.getUA(),g={Mobile:"mobile",Tablet:"tablet",SmartTv:"smarttv",Console:"console",Wearable:"wearable",Embedded:"embedded",Browser:void 0},v={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},setDefaults=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},getNavigatorInstance=function(){return!!("undefined"!=typeof window&&(window.navigator||navigator))&&(window.navigator||navigator)},isIOS13Check=function(e){var i=getNavigatorInstance();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)},isBrowserType=function(e){return e.type===g.Browser},isEdgeType=function(e){return e.name===v.Edge},isEdgeChromiumType=function(e){return"string"==typeof e&&-1!==e.indexOf("Edg/")},getIPad13=function(){return isIOS13Check("iPad")};p.type,g.SmartTv,p.type,g.Console,p.type,g.Wearable,p.type,g.Embedded,d.name===v.MobileSafari||getIPad13(),d.name,v.Chromium;var y=(o=p.type)===g.Mobile||o===g.Tablet||getIPad13();p.type,g.Mobile,p.type===g.Tablet||getIPad13(),isBrowserType(p),isBrowserType(p),f.name,f.name,"iOS"===f.name||getIPad13(),d.name,v.Chrome,d.name,v.Firefox,(a=d.name)===v.Safari||v.MobileSafari,d.name,v.Opera,(t=d.name)===v.InternetExplorer||v.Ie,setDefaults(f.version),setDefaults(f.name),setDefaults(d.version),setDefaults(d.major),setDefaults(d.name),setDefaults(p.vendor),setDefaults(p.model),setDefaults(m.name),setDefaults(m.version),setDefaults(h),isEdgeType(d)||isEdgeChromiumType(h),d.name,v.Yandex,setDefaults(p.type,"browser"),(n=getNavigatorInstance())&&(/iPad|iPhone|iPod/.test(n.platform)||"MacIntel"===n.platform&&n.maxTouchPoints>1)&&window.MSStream,getIPad13(),isIOS13Check("iPhone"),isIOS13Check("iPod"),"string"==typeof(b=(s=getNavigatorInstance())&&s.userAgent&&s.userAgent.toLowerCase())&&/electron/.test(b),isEdgeChromiumType(h),isEdgeType(d)&&isEdgeChromiumType(h),f.name,f.name,d.name,v.MIUI,d.name,v.SamsungBrowser,i.tq=y},7673:function(e,i){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),o=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),a=Object.assign,t={};function E(e,i,r){this.props=e,this.context=i,this.refs=t,this.updater=r||o}function F(){}function G(e,i,r){this.props=e,this.context=i,this.refs=t,this.updater=r||o}E.prototype.isReactComponent={},E.prototype.setState=function(e,i){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,i,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},F.prototype=E.prototype;var n=G.prototype=new F;n.constructor=G,a(n,E.prototype),n.isPureReactComponent=!0;var s=Object.prototype.hasOwnProperty,b={key:!0,ref:!0,__self:!0,__source:!0};i.createElement=function(e,i,o){var a,t={},n=null,l=null;if(null!=i)for(a in void 0!==i.ref&&(l=i.ref),void 0!==i.key&&(n=""+i.key),i)s.call(i,a)&&!b.hasOwnProperty(a)&&(t[a]=i[a]);var w=arguments.length-2;if(1===w)t.children=o;else if(1<w){for(var u=Array(w),d=0;d<w;d++)u[d]=arguments[d+2];t.children=u}if(e&&e.defaultProps)for(a in w=e.defaultProps)void 0===t[a]&&(t[a]=w[a]);return{$$typeof:r,type:e,key:n,ref:l,props:t,_owner:null}}},952:function(e,i,r){"use strict";e.exports=r(7673)},6565:function(e,i,r){var o;!function(a,t){"use strict";var n="function",s="undefined",b="object",l="string",w="major",u="model",d="name",c="type",p="vendor",m="version",f="architecture",h="console",g="mobile",v="tablet",y="smarttv",x="wearable",k="embedded",S="Amazon",_="Apple",P="ASUS",T="BlackBerry",U="Browser",A="Chrome",C="Firefox",O="Google",I="Huawei",M="Microsoft",z="Motorola",N="Opera",j="Samsung",B="Sharp",D="Sony",R="Xiaomi",L="Zebra",V="Facebook",$="Chromium OS",W="Mac OS",extend=function(e,i){var r={};for(var o in e)i[o]&&i[o].length%2==0?r[o]=i[o].concat(e[o]):r[o]=e[o];return r},enumerize=function(e){for(var i={},r=0;r<e.length;r++)i[e[r].toUpperCase()]=e[r];return i},has=function(e,i){return typeof e===l&&-1!==lowerize(i).indexOf(lowerize(e))},lowerize=function(e){return e.toLowerCase()},trim=function(e,i){if(typeof e===l)return e=e.replace(/^\s\s*/,""),typeof i===s?e:e.substring(0,500)},rgxMapper=function(e,i){for(var r,o,a,s,l,w,u=0;u<i.length&&!l;){var d=i[u],c=i[u+1];for(r=o=0;r<d.length&&!l&&d[r];)if(l=d[r++].exec(e))for(a=0;a<c.length;a++)w=l[++o],typeof(s=c[a])===b&&s.length>0?2===s.length?typeof s[1]==n?this[s[0]]=s[1].call(this,w):this[s[0]]=s[1]:3===s.length?typeof s[1]!==n||s[1].exec&&s[1].test?this[s[0]]=w?w.replace(s[1],s[2]):t:this[s[0]]=w?s[1].call(this,w,s[2]):t:4===s.length&&(this[s[0]]=w?s[3].call(this,w.replace(s[1],s[2])):t):this[s]=w||t;u+=2}},strMapper=function(e,i){for(var r in i)if(typeof i[r]===b&&i[r].length>0){for(var o=0;o<i[r].length;o++)if(has(i[r][o],e))return"?"===r?t:r}else if(has(i[r],e))return"?"===r?t:r;return e},H={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Y={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,m],[/opios[\/ ]+([\w\.]+)/i],[m,[d,N+" Mini"]],[/\bopr\/([\w\.]+)/i],[m,[d,N]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[m,[d,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[d,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[d,"UC"+U]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[m,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[d,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[m,[d,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[m,[d,"Smart Lenovo "+U]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure "+U],m],[/\bfocus\/([\w\.]+)/i],[m,[d,C+" Focus"]],[/\bopt\/([\w\.]+)/i],[m,[d,N+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[d,N+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[d,"MIUI "+U]],[/fxios\/([-\w\.]+)/i],[m,[d,C]],[/\bqihu|(qi?ho?o?|360)browser/i],[[d,"360 "+U]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1 "+U],m],[/samsungbrowser\/([\w\.]+)/i],[m,[d,j+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],m],[/metasr[\/ ]?([\d\.]+)/i],[m,[d,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[d,"Sogou Mobile"],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[d,m],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,V],m],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[d,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[d,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[m,[d,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[d,A+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,A+" WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[d,"Android "+U]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,m],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[m,[d,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[m,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[m,strMapper,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[d,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[d,C+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[d,m],[/(cobalt)\/([\w\.]+)/i],[d,[m,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows (ce|mobile); ppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[f,/ower/,"",lowerize]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[u,[p,j],[c,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[u,[p,j],[c,g]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[u,[p,_],[c,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[u,[p,_],[c,v]],[/(macintosh);/i],[u,[p,_]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[u,[p,B],[c,g]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[u,[p,I],[c,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[u,[p,I],[c,g]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[u,/_/g," "],[p,R],[c,g]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[u,/_/g," "],[p,R],[c,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[u,[p,"OPPO"],[c,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[u,[p,"Vivo"],[c,g]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[u,[p,"Realme"],[c,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[u,[p,z],[c,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[u,[p,z],[c,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[u,[p,"LG"],[c,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[u,[p,"LG"],[c,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[u,[p,"Lenovo"],[c,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[u,/_/g," "],[p,"Nokia"],[c,g]],[/(pixel c)\b/i],[u,[p,O],[c,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[u,[p,O],[c,g]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[p,D],[c,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[u,"Xperia Tablet"],[p,D],[c,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[u,[p,"OnePlus"],[c,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[u,[p,S],[c,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[u,/(.+)/g,"Fire Phone $1"],[p,S],[c,g]],[/(playbook);[-\w\),; ]+(rim)/i],[u,p,[c,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[u,[p,T],[c,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[u,[p,P],[c,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[u,[p,P],[c,g]],[/(nexus 9)/i],[u,[p,"HTC"],[c,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[p,[u,/_/g," "],[c,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[u,[p,"Acer"],[c,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[u,[p,"Meizu"],[c,g]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[u,[p,"Ulefone"],[c,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[p,u,[c,g]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[p,u,[c,v]],[/(surface duo)/i],[u,[p,M],[c,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[u,[p,"Fairphone"],[c,g]],[/(u304aa)/i],[u,[p,"AT&T"],[c,g]],[/\bsie-(\w*)/i],[u,[p,"Siemens"],[c,g]],[/\b(rct\w+) b/i],[u,[p,"RCA"],[c,v]],[/\b(venue[\d ]{2,7}) b/i],[u,[p,"Dell"],[c,v]],[/\b(q(?:mv|ta)\w+) b/i],[u,[p,"Verizon"],[c,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[u,[p,"Barnes & Noble"],[c,v]],[/\b(tm\d{3}\w+) b/i],[u,[p,"NuVision"],[c,v]],[/\b(k88) b/i],[u,[p,"ZTE"],[c,v]],[/\b(nx\d{3}j) b/i],[u,[p,"ZTE"],[c,g]],[/\b(gen\d{3}) b.+49h/i],[u,[p,"Swiss"],[c,g]],[/\b(zur\d{3}) b/i],[u,[p,"Swiss"],[c,v]],[/\b((zeki)?tb.*\b) b/i],[u,[p,"Zeki"],[c,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[p,"Dragon Touch"],u,[c,v]],[/\b(ns-?\w{0,9}) b/i],[u,[p,"Insignia"],[c,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[u,[p,"NextBook"],[c,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[p,"Voice"],u,[c,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[p,"LvTel"],u,[c,g]],[/\b(ph-1) /i],[u,[p,"Essential"],[c,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[u,[p,"Envizen"],[c,v]],[/\b(trio[-\w\. ]+) b/i],[u,[p,"MachSpeed"],[c,v]],[/\btu_(1491) b/i],[u,[p,"Rotor"],[c,v]],[/(shield[\w ]+) b/i],[u,[p,"Nvidia"],[c,v]],[/(sprint) (\w+)/i],[p,u,[c,g]],[/(kin\.[onetw]{3})/i],[[u,/\./g," "],[p,M],[c,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[u,[p,L],[c,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[u,[p,L],[c,g]],[/smart-tv.+(samsung)/i],[p,[c,y]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[p,j],[c,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[p,"LG"],[c,y]],[/(apple) ?tv/i],[p,[u,_+" TV"],[c,y]],[/crkey/i],[[u,A+"cast"],[p,O],[c,y]],[/droid.+aft(\w+)( bui|\))/i],[u,[p,S],[c,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[u,[p,B],[c,y]],[/(bravia[\w ]+)( bui|\))/i],[u,[p,D],[c,y]],[/(mitv-\w{5}) bui/i],[u,[p,R],[c,y]],[/Hbbtv.*(technisat) (.*);/i],[p,u,[c,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[p,trim],[u,trim],[c,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[c,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[p,u,[c,h]],[/droid.+; (shield) bui/i],[u,[p,"Nvidia"],[c,h]],[/(playstation [345portablevi]+)/i],[u,[p,D],[c,h]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[u,[p,M],[c,h]],[/((pebble))app/i],[p,u,[c,x]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[u,[p,_],[c,x]],[/droid.+; (glass) \d/i],[u,[p,O],[c,x]],[/droid.+; (wt63?0{2,3})\)/i],[u,[p,L],[c,x]],[/(quest( 2| pro)?)/i],[u,[p,V],[c,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[p,[c,k]],[/(aeobc)\b/i],[u,[p,S],[c,k]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[u,[c,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[u,[c,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[c,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[c,g]],[/(android[-\w\. ]{0,9});.+buil/i],[u,[p,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[d,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[d,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,m],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[d,[m,strMapper,H]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[m,strMapper,H],[d,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,W],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[m,d],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[d,m],[/\(bb(10);/i],[m,[d,T]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[d,C+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[d,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[m,[d,"watchOS"]],[/crkey\/([\d\.]+)/i],[m,[d,A+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[d,$],m],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,m],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[d,m]]},UAParser=function(e,i){if(typeof e===b&&(i=e,e=t),!(this instanceof UAParser))return new UAParser(e,i).getResult();var r=typeof a!==s&&a.navigator?a.navigator:t,o=e||(r&&r.userAgent?r.userAgent:""),h=r&&r.userAgentData?r.userAgentData:t,y=i?extend(Y,i):Y,x=r&&r.userAgent==o;return this.getBrowser=function(){var e,i={};return i[d]=t,i[m]=t,rgxMapper.call(i,o,y.browser),i[w]=typeof(e=i[m])===l?e.replace(/[^\d\.]/g,"").split(".")[0]:t,x&&r&&r.brave&&typeof r.brave.isBrave==n&&(i[d]="Brave"),i},this.getCPU=function(){var e={};return e[f]=t,rgxMapper.call(e,o,y.cpu),e},this.getDevice=function(){var e={};return e[p]=t,e[u]=t,e[c]=t,rgxMapper.call(e,o,y.device),x&&!e[c]&&h&&h.mobile&&(e[c]=g),x&&"Macintosh"==e[u]&&r&&typeof r.standalone!==s&&r.maxTouchPoints&&r.maxTouchPoints>2&&(e[u]="iPad",e[c]=v),e},this.getEngine=function(){var e={};return e[d]=t,e[m]=t,rgxMapper.call(e,o,y.engine),e},this.getOS=function(){var e={};return e[d]=t,e[m]=t,rgxMapper.call(e,o,y.os),x&&!e[d]&&h&&"Unknown"!=h.platform&&(e[d]=h.platform.replace(/chrome os/i,$).replace(/macos/i,W)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(e){return o=typeof e===l&&e.length>500?trim(e,500):e,this},this.setUA(o),this};UAParser.VERSION="1.0.37",UAParser.BROWSER=enumerize([d,m,w]),UAParser.CPU=enumerize([f]),UAParser.DEVICE=enumerize([u,p,c,h,g,y,v,x,k]),UAParser.ENGINE=UAParser.OS=enumerize([d,m]),typeof i!==s?(e.exports&&(i=e.exports=UAParser),i.UAParser=UAParser):r.amdO?t!==(o=(function(){return UAParser}).call(i,r,i,e))&&(e.exports=o):typeof a!==s&&(a.UAParser=UAParser);var Z=typeof a!==s&&(a.jQuery||a.Zepto);if(Z&&!Z.ua){var X=new UAParser;Z.ua=X.getResult(),Z.ua.get=function(){return X.getUA()},Z.ua.set=function(e){X.setUA(e);var i=X.getResult();for(var r in i)Z.ua[r]=i[r]}}}("object"==typeof window?window:this)}}]);