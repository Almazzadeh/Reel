/*
 Copyright (c) 2009-2012 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 jQuery Reel
 http://jquery.vostrel.cz/reel
 Version: 1.1.3-devel
 Updated: 2012-01-18

 Requires jQuery 1.5 or higher
*/
jQuery.reel||function(k,Lb,Qa,s){function Mb(e){return o.instances.push(e[0])&&e}function Nb(e){return(o.instances=o.instances.not(ma(e.attr(ea))))&&e}function O(e){return o.instances.length?o.instances.first().data(e):null}function Ob(e){return"data:image/gif;base64,R0lGODlh"+e}function P(e){return"<"+e+"/>"}function r(e){return"."+(e||F)}function ua(e){return o.cdn+e}function va(e){return"url("+e+")"}function fa(e,a,q){return na(e,Ra(a,q))}function Pb(e){function a(){k.fn[this]||(k.fn[this]=function(){return this})}
k.each(e,a)}function Sa(e,a){return Q(e)*(a?-1:1)}function wa(e){return xa?e.touch||e.originalEvent.touches[0]:e}function X(e){return e===s||typeof e==mb?e:e+Y}function ma(e){return"#"+e}function Qb(e){var a=[];k.each(e,function(q,h){a.push(q.replace(/([A-Z])/g,"-$1").toLowerCase()+":"+X(h))});return"{"+a.join(";")+";}"}function Rb(){var e=k().jquery.split(".");if(e=+e[0]*10+ +e[1]<15)throw"FATAL: Reel needs jQuery 1.5 or higher";return e}if(!Rb()){var o=k.reel={version:"1.2alpha",def:{area:s,brake:0.23,
clickfree:false,cw:false,delay:-1,directional:false,draggable:true,footage:6,entry:s,frame:1,frames:36,graph:s,hint:"",horizontal:true,image:s,images:[],indicator:0,inversed:false,klass:"",laziness:6,loops:true,monitor:s,opening:0,orbital:0,path:"",preloader:2,rebound:0.5,revolution:s,row:1,rows:0,spacing:0,speed:0,step:s,steps:s,stitched:0,suffix:"-reel",tempo:36,timeout:2,throwable:true,vertical:false,wheelable:true,annotations:s,attr:{},cursor:s,preload:"fidelity",scrollable:true,steppable:true,
sequence:"",velocity:0}};k.fn.reel=function(e){var a=k.extend({},o.def,e);e=function(h){var u=[];h.filter(Ta).each(function(){var d=k(this),c=a.images.length&&a.images||a.image||a.attr.src||d.attr(nb),v=ya(a.attr.width||d.css(Ua)),p=ya(a.attr.height||d.css(ob));!c||c==F||!v||!p||u.push(d)});h.filter(r(x)).each(function(){u.push(k(this).unreel())});return k(u)}(this);var q=[];a.tooltip&&(a.hint=a.tooltip);a.hotspot&&(a.area=a.hotspot);e.each(function(){var h=k(this),u=h.data(),d=function(g,b){u[g]=
b;h.trigger("store",[g,b]);return b},c=function(g){var b=u[g];h.trigger("recall",[g,b]);return b},v={setup:function(g){if(h.hasClass(x))return p.call(g);var b=h.attr(a.attr).attr(nb),f=d(ea,h.attr(ea)||h.attr(ea,x+"-"+ +new Date).attr(ea)),i=h.attr(oa),l=k.extend({},h.data()),n=o.re.sequence.exec(d(Sb,a.sequence));n=d(ga,n?o.build_sequence(n,a,c):a.images);var m=a.stitched,j=a.loops,y={x:ya(h.css(Ua)||a.attr.width),y:ya(h.css(ob)||a.attr.height)},z=d(I,a.frame),Z=d(za,a.orbital&&a.footage||a.rows<=
1&&n.length||a.frames),Tb=m?1:pb(Z/a.footage);f=ma(f+a.suffix);var qb=h.attr("class")||F;z=k(P(pa),{id:f.substr(1),"class":qb+A+Ub+A+rb+z});z=h.wrap(z.addClass(a.klass)).attr({"class":x});q.push(Mb(z)[0]);z=z.parent().bind(v.instance);d(Vb,a);d(Va,n.length?F:a.image||b.replace(o.re.image,"$1"+a.suffix+".$2"));d(Wa,[]);d(Xa,0);d(sb,a.spacing);d(J,y);d(t,0);d(Ya,a.steps||a.frames);d(Aa,a.revolution||m/2||y.x*2);d(Za,Tb);d(ha,1/(Z-(j&&!m?0:1)));d(Wb,1/na(Z,c(Ya)));d($a,m);d(tb,m-(j?0:y.x));d(ab,f);d(K,
d(Ba,a.speed)<0);d($,a.velocity||0);d(ia,a.vertical);d(ja,0);d(L,(a.row-1)/(a.rows-1));d(ka,Sa(1,!a.cw&&!m));d(bb,{});d(qa,false);d(Ca,d(cb,0));d(Da,d(Ea,0));d(ra,false);d(ub,a.brake);d(db,!!a.orbital);d(R,a.tempo/(o.lazy?a.laziness:1));d(aa,-1);d(Fa,a.annotations)||z.unbind(r(Fa));d(vb,{src:b,classes:qb,style:i||F,data:l});a.steppable||z.unbind("click.steppable");E(F,{width:y.x,height:y.y,overflow:eb,position:"relative"});E(ba+A+r(x),{display:wb});M.bind(v.pool);p.call(g);h.trigger("setup")},instance:{teardown:function(g){var b=
h.data(vb);h.parent().unbind(v.instance);c(oa).remove();Nb(h.unbind(S).siblings().unbind(S).remove().end().attr({"class":b.classes,src:b.src,style:b.style}).data(b.data).unwrap());Ga();M.unbind(v.pool);N.unbind(T);p.call(g)},setup:function(){function g(m){return function(j){if(j.button==Xb)return j.preventDefault()||h.trigger("down",[wa(j).clientX,wa(j).clientY])&&p.call(j)||m}}var b=c(J),f=c(za),i=na(f,c(Ya));i=d(t,1/i*((a.step||a.frame)-1));d(I,U(i*f)+1);h.attr(ea);f=h.parent();i=d(Yb,k(a.area||
f));if(xa){E(A+r(x),{WebkitUserSelect:Ha,WebkitBackgroundSize:a.images.length?"auto":c($a)&&X(c($a))+A+X(b.y)||X(b.x*a.footage)+A+X(b.y*c(Za)*(a.rows||1)*(a.directional?2:1))});i.bind(Zb,g())}else{var l=a.cursor==xb?$b:a.cursor||ac,n=a.cursor==xb?bc+A+"!important":false;E(F,{cursor:l});E(r(fb),{cursor:cc});E(r(Ia)+ba+r(Ia)+" *",{cursor:n||l},true);i.bind(a.wheelable?dc:F,function(m,j){return m.preventDefault()||!j||h.trigger("wheel",[j])&&false}).bind(a.clickfree?ec:fc,g()).disableTextSelect()}a.hint&&
i.attr(gc,a.hint);a.monitor&&f.append(V=k(P(pa),{"class":yb}))||(V=k());E(A+r(yb),{position:Ja,left:0,top:0});E(A+r(zb),{display:Ha});E(A+r(Ab),{position:Ja,left:0,top:b.y-a.preloader,height:a.preloader,overflow:eb,backgroundColor:Bb});a.indicator&&f.append(G(Cb));a.rows>1&&a.indicator&&f.append(G(Db))},preload:function(g){var b=c(J),f=h.parent(),i=c(Va),l=c(ga),n=!l.length,m=c(za),j=o.preload[a.preload]||o.preload[o.def.preload];i=n?[i]:j(l.slice(),a,c);d(ja,n?0.5:0);l=[];f.addClass(fb).append(w=
k(P(pa),{"class":Ab}));for(h.trigger("stop");i.length;){var y=a.path+i.shift();j=b.x*(!n?1:a.footage);var z=b.y*(!n?1:m/a.footage)*(!a.directional?1:2),Z=k(P(Ta)).attr({"class":zb,width:j,height:z}).appendTo(f);setTimeout(function(){Z.attr({src:y});h.reelTriggerOnce("preloaded",function(){return!!Z.parent().length&&Z[0].complete})},l.length-i.length);l.push(y)}d(Wa,l);d(oa,k("<"+oa+' type="text/css">'+Eb.join("\n")+"</"+oa+">").prependTo(gb));p.call(g)},preloaded:function(g){var b=c(ga).length;if(d(ja,
Ra(c(ja)+1,b))===b){h.unbind("preloaded",v.instance.preloaded);b>1||h.css({backgroundImage:va(a.path+c(Va))}).attr({src:hc});h.trigger("loaded").parent().removeClass(fb);p.call(g)}},opening:function(){if(!a.opening)return h.trigger("openingDone");var g=a.entry||a.speed,b=c(t),f=a.opening;d(t,b-g*a.opening);d(aa,f*O(R))},openingDone:function(){if(a.delay)ca=setTimeout(function(){h.trigger("play")},a.delay*1E3);else h.trigger("play")},play:function(g,b){b=d(Ba,b||c(Ba));b=d(hb,!!b);d(ib,!b);h.trigger("frameChange");
H();p.call(g)},pause:function(g){d(hb,false);B();p.call(g)},stop:function(g){var b=d(ib,true);d(hb,!b);p.call(g)},down:function(g,b,f){if(a.draggable){d(qa,c(I));d($,0);var i=!c(ra)||a.rows<=1||!a.orbital||a.scrollable;Ka=La(b,f,c(t),c(Aa),c(L));B();Ga();sa=false;k(Fb,N).addClass(Ia);xa?N.bind(ic,l(!i)).bind(jc+A+kc,n()):N.bind(lc,l()).bind(a.clickfree?mc:nc,n());function l(m){return function(j){j.preventDefault();h.trigger("pan",[wa(j).clientX,wa(j).clientY,j]);p.call(j);return m}}function n(m){return function(j){j.preventDefault();
h.trigger("up");p.call(j);return m}}}p.call(g)},up:function(g){if(!a.draggable)return p.call(g);d(qa,false);d(ra,false);var b=d($,!a.throwable?0:Q(ta[0]+ta[1])/60);W=b?1:0;b?H():B();Ga();k(Fb,N).removeClass(Ia);N.unbind(T);p.call(g)},pan:function(g,b,f,i){if(a.draggable&&jb){jb=false;B();i=i&&!k(i.currentTarget).is(M)?oc.offset():{left:0,top:0};f-=i.top;b-=i.left;var l={x:b-Ka.x,y:f-Ka.y};if(Q(l.x)>0||Q(l.y)>0){sa=true;Ka={x:b,y:f};i=c(Aa);var n=c(bb),m=c(ia),j=d(t,Gb(m?f-n.y:b-n.x,c(Ca),i,c(Da),
c(Ea),c(ka),m?f-n.y:b-n.x));d(ra,c(ra)||c(I)!=c(qa));(l=Hb(m?l.y:l.x||0))&&d(K,l<0);if(a.orbital&&c(db)){d(ia,Q(f-n.y)>Q(b-n.x));n=La(b,f,j,i,c(L))}if(a.rows>1){l=c(J).y;m=c(cb);var y=-m*l;d(L,o.math.envelope(f-n.y,m,l,y,y+l,-1))}!(j%1)&&!a.loops&&La(b,f,j,i,c(L));h.trigger("fractionChange")}}p.call(g)},wheel:function(g,b){var f=pb(pc(Q(b))/2);f=Sa(f,b>0);b=0.0833*c(Aa);La(s,s,c(t),b,c(L));d(t,Gb(f,c(Ca),b,c(Da),c(Ea),c(ka)));f&&d(K,f<0);d($,0);B();p.call(g);h.trigger("up").trigger("fractionChange");
return false},fractionChange:function(g,b){b=d(t,Ma.fraction(b,a,c));var f=d(I,1+la(b/c(ha))),i=a.rows>1,l=a.orbital;d(db,!!l&&(f<=l||f>=a.footage-l+2));if(!a.loops&&a.rebound){!C&&!(b%1)?kb++:(kb=0);kb>=a.rebound*1E3/O(R)&&d(K,!c(K))}h.trigger(i?"rowChange":"frameChange");p.call(g)},rowChange:function(g,b){var f=c(t)/c(ha)+1;b=d(L,Ma.row(b,a,c));b=fa(0,a.rows-1,la(b*a.rows));d(I,la(f+b*a.frames));p.call(g);h.trigger("frameChange")},frameChange:function(g,b){var f=d(t,Ma.fraction(!b?s:c(ha)*(b-1),
a,c));b=Ma.frame(b,a,c);var i=c(Wa).length==1,l=a.footage;if(c(ia)){b=a.inversed?l+1-b:b;b+=l}if(b==c(Xa))D(g);else{var n=a.horizontal,m=c(ga),j=c(J);b=d(Xa,d(I,b));if(i){if(a.stitched)j=[-U(f*c(tb))+Y,0+Y];else{f=b%l-1;f=f<0?l-1:f;l=la((b-0.1)/l);l+=a.rows>1?0:c(K)?0:c(Za);b=c(sb);l=l*((n?j.y:j.x)+b);j=f*((n?j.x:j.y)+b);j=m.length?[0,0]:n?[-j+Y,-l+Y]:[-l+Y,-j+Y]}h.css({backgroundPosition:j.join(A)})}else h.attr({src:a.path+m[b-1]})}if(a.indicator){n=c(ab);m=a.rows>1;j=c(J);f=(c(ia)?j.y:j.x)-a.indicator;
b=fa(0,f,U(o.math.interpolate(c(t),-1,f+2)));b=!a.cw||a.stitched?b:f-b;k(r(Na+r(Cb)),n).css(c(ia)?{left:0,top:b}:{left:b,top:j.y-a.indicator});if(m){j=j.y-a.indicator;j=fa(0,j,U(o.math.interpolate(c(L),-1,j+2)));k(r(Na+r(Db)),n).css({top:j})}}p.call(g)},stepLeft:function(){B();d(K,false);h.trigger("fractionChange",c(t)-c(ha)*c(ka))},stepRight:function(){B();d(K,true);h.trigger("fractionChange",c(t)+c(ha)*c(ka))},"click.steppable":function(g){if(sa)return D(g);h.trigger(g.clientX-h.offset().left>0.5*
c(J).x?"stepRight":"stepLeft")},"setup.annotations":function(){c(J);var g=h.parent();k.each(c(Fa),function(b,f){var i=typeof f.node==mb?k(f.node):f.node||{};i=i.jquery?i:k(P(pa),i);i=i.attr({id:b}).addClass(qc);var l=f.image?k(P(Ta),f.image):k(),n=f.link?k(P(rc),f.link):k();E(ma(b),{display:Ha,position:Ja},true);i.bind({"click.annotations":function(m){m.stopPropagation()}});f.image||f.link&&i.append(n);f.link||f.image&&i.append(l);f.link&&f.image&&i.append(n.append(l));i.appendTo(g)});h.trigger("frameChange.annotations")},
"frameChange.annotations":function(g,b){b=b||c(I);this.className=this.className.replace(sc,rb+b);c($)||k.each(c(Fa),function(f,i){f=k(ma(f));var l=i.start||1,n=i.end,m=b-1,j=i.at?i.at[m]=="+":false;m=i.at?m:m-l+1;var y=typeof i.x!=Ib?i.x:i.x[m],z=typeof i.y!=Ib?i.y:i.y[m];i={display:y!==s&&z!==s&&(i.at?j:m>=0&&(!n||m<=n-l))?wb:Ha,left:X(y)||0,top:X(z)||0};f.css(i)})},"setup.fu":function(){h.trigger("preload")},"loaded.fu":function(){h.trigger("opening")}},pool:{"tick.reel":function(g){var b=c($);
if(W){var f=b-c(ub)/O(R)*W;b=d($,f>0.1?f:(W=C=0))}V.text(c(a.monitor));b&&W++;C&&C++;Hb(0);jb=true;if(C&&!b)return D(g);if(c(qa))return D(g,B());if(!(c(aa)>0)){f=c(ka)*Sa(1,c(K));b=(c(ib)?b:Q(c(Ba))+b)/O(R);var i=c(t);d(t,i-b*f);p.call(g)}},"tick.reel.preload":function(){var g=c(J),b=parseInt(w.css(Ua)),f=U(1/c(ga).length*c(ja)*g.x);w.css({width:b+(f-b)/3+1});if(c(ja)===c(ga).length&&b>g.x-2){w.fadeOut(300,function(){w.remove()});M.unbind(da+r(Jb),v.pool[da+r(Jb)])}},"tick.reel.opening":function(g){if(a.opening){if(c(aa)<=
0)return;var b=(a.entry||a.speed)/O(R)*(a.cw?-1:1),f=c(t);d(t,f+b);b=d(aa,c(aa)-1);p.call(g);if(b>0)return;h.trigger("openingDone")}M.unbind(da+r(Oa),v.pool[da+r(Oa)])},"tick.reel.fu":function(){h.trigger("fractionChange")}}},p=function(g){Kb||delete this;return g},D=function(g,b){return g.stopImmediatePropagation()||p.call(g)||b},C,W=0,H=function(){return C=0},B=function(){clearTimeout(ca);M.unbind(da+r(Oa),v.pool[da+r(Oa)]);d(aa,0);h.trigger("play");return C=-a.timeout*O(R)},sa=false,ca,V,w,G=function(g){E(A+
r(Na)+r(g),{position:Ja,width:a.indicator,height:a.indicator,overflow:eb,backgroundColor:Bb});return k(P(pa),{"class":[Na,g].join(A)})},Eb=[],E=function(g,b,f){f=f?F:c(ab);g=g.replace(/^/,f).replace(ba,ba+f);return Eb.push(g+Qb(b))&&b},kb=0,Ka={x:0,y:0},Hb=function(g){return ta.push(g)&&ta.shift()&&g},Ga=function(){return ta=[0,0]},ta=Ga(),Gb=a.graph||o.math[a.loops?"hatch":"envelope"],Ma=o.normal,La=function(g,b,f,i,l){d(Ca,f);d(cb,l);d(Da,a.loops?0:-f*i);d(Ea,a.loops?i:i-f*i);return g&&d(bb,{x:g,
y:b})||s},jb=true,N;try{N=k.unique(M.add(Lb.top.document))}catch(tc){N=M}var oc=top===self?k():function(g){k("iframe",N.last()).each(function(){try{if(k(this).contents().find(gb).html()==k(gb).html())return(g=k(this))&&false}catch(b){}});return g}();v.setup()});Pa=Pa||function h(){var u=+new Date,d=O(R);if(d){M.trigger(da);o.cost=(+new Date+o.cost-u)/2;return Pa=setTimeout(h,na(4,1E3/d-o.cost))}else return Pa=s}();return k(q)};k.fn.unreel=function(){return this.trigger("teardown")};o.math={envelope:function(e,
a,q,h,u,d){return a+na(h,Ra(u,-e*d))/q},hatch:function(e,a,q,h,u,d){e=(e<h?u:0)+e%u;e=a+-e*d/q;return e-la(e)},interpolate:function(e,a,q){return a+e*(q-a)}};o.preload={linear:function(e){return e},fidelity:function(e,a){function q(p,D,C){function W(G){for(;!(G>=1&&G<=ca);)G+=G<1?+ca:-ca;return v[C+G]||(v[C+G]=!!H.push(G))}if(!p.length)return[];var H=[],B=4*D,sa=a.frame,ca=p.length;D=true;for(var V=ca/B,w=0;w<B;w++)W(sa+U(w*V));for(;V>1;){w=0;B=H.length;V/=2;for(D=!D;w<B;w++)W(H[w]+(D?1:-1)*U(V))}for(w=
0;w<H.length;w++)H[w]=p[H[w]-1];return H}var h=a.orbital?2:a.rows||1,u=a.orbital?a.footage:a.frames,d=(a.row-1)*u,c=[].concat(e),v=new Array(e.length);e=h<2?[]:c.slice(d,d+u);return q(e,1,d).concat(q(c,h,0))}};o.normal={fraction:function(e,a,q){e=e!=s?e:q(t);return a.loops?e-la(e):fa(0,1,e)},row:function(e,a,q){return fa(0,1,e!=s?(e-1)/(a.rows-1):q(L))},frame:function(e,a,q){e=e!=s?U(e):q(I);var h=a.orbital?2:a.rows||1;q=q(za)*h;e=a.loops?e%q||q:fa(1,q,e);return e<0?e+q:e}};o.re={image:/^(.*)\.(jpg|jpeg|png|gif)$/,
touchy_agent:/iphone|ipod|ipad|android/i,lazy_agent:/iphone|ipod|android/i,sequence:/(^[^#|]*([#]+)[^#|]*)($|[|]([0-9]+)\.\.([0-9]+))($|[|]([0-9]+)$)/};o.cdn="http://code.vostrel.cz/";o.build_sequence=function(e,a){function q(p,D,C){for(;p.length<D;)p=C+p;return p}if(e.length<=1)return a.images;var h=[],u=e[1],d=e[2],c=+e[4]||1,v=a.orbital?2:a.rows||1;a=a.orbital?a.footage:a.frames;v=+(e[5]||v*a);e=+e[7]||1;for(a=0;a<v;){h.push(u.replace(d,q(c+a+F,d.length,"0")));a+=e}return h};o.touchy=o.re.touchy_agent.test(navigator.userAgent);
o.lazy=o.re.lazy_agent.test(navigator.userAgent);o.instances=k();o.leader=O;o.cost=0;Pb("mousewheel disableTextSelect enableTextSelect".split(/ /));var M=k(Qa);Qa=+k.browser.version.split(r()).slice(0,2).join(r());var Kb=k.browser.msie,xa=o.touchy,Pa,x="reel",Ub=x+"-overlay",Na=x+"-indicator",Ab=x+"-preloader",zb=x+"-cached",yb=x+"-monitor",qc=x+"-annotation",Ia=x+"-panning",fb=x+"-loading",rb="frame-",sc=/frame-\d+/,U=Math.round,la=Math.floor,pb=Math.ceil,Ra=Math.min,na=Math.max,Q=Math.abs,pc=Math.sqrt,
ya=parseInt,Fa="annotations",Yb="area",vb="backup",K="backwards",ha="bit",ub="brake",Wa="cached",db="center",qa="clicked",bb="clicked_location",Ca="clicked_on",cb="clicked_row",ka="cwish",J="dimensions",t="fraction",I="frame",Xa="_frame",za="frames",gb="head",Ea="hi",eb="hidden",Va="image",ga="images",aa="opening_ticks",Da="lo",Vb="options",hb="playing",ja="preloaded",ra="reeling",Aa="revolution",L="row",Za="rows",Sb="sequence",sb="spacing",Ba="speed",ab="stage",Ya="steps",$a="stitched",tb="stitched_travel",
ib="stopped",oa="style",R="tempo",$="velocity",ia="vertical",Wb="wheel_step",S=r(x),T=".pan"+S,fc="mousedown"+S,ec="mouseenter"+S,mc="mouseleave"+T,lc="mousemove"+T,nc="mouseup"+T,dc="mousewheel"+S,da="tick"+S,kc="touchcancel"+T,jc="touchend"+T,Zb="touchstart"+S,ic="touchmove"+T,F="",A=" ",ba=",",Ja="absolute",rc="a",wb="block",pa="div",xb="hand",ob="height",Bb=ma("000"),Fb="html",ea="id",Ta="img",lb="jquery."+x,Ha="none",Ib="object",Oa="opening",Jb="preload",Y="px",nb="src",mb="string",gc="title",
Ua="width",Cb="x",Db="y",hc=Ob("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7")||ua("blank.gif"),cc="wait",ac=va(ua(lb+r("cur")))+ba+"move",$b=va(ua(lb+"-drag"+r("cur")))+ba+"move",bc=va(ua(lb+"-drag-down"+r("cur")))+ba+"move",Xb=xa?s:Kb&&Qa<=8?1:0;k.fn.reelTriggerOnce=function(e,a){function q(h){a()?h.trigger(e):setTimeout(function(){q(h)},100);return h}return q(k(this))}}}(jQuery,window,document);
