import{w as e,S as t,i as l,s,e as n,c,a as o,d as a,b as r,n as i,f as h,g as u,l as f,h as d,j as g,k as v,m,t as $,o as p,p as w,q as D,r as b,u as I,v as k,x as C,y,z as E,A as B,B as A,C as x,D as V,E as j,F as T,G as P,H as S}from"./vendor.775c2255.js";const O=e({playerActive:!0,showPanel:!0}),G=e({dice:[],value:0});let H=e([]);function N(e){let t,l,s,g,v;return{c(){t=n("div"),this.h()},l(e){t=c(e,"DIV",{id:!0,class:!0,style:!0}),o(t).forEach(a),this.h()},h(){r(t,"id",l=`${e[0]},${e[1]}`),r(t,"class",s=i(e[3])+" svelte-1spkbt4"),h(t,"--cursor",e[5]),h(t,"--bgColor",e[4]),h(t,"--activeColor",e[2])},m(l,s){u(l,t,s),g||(v=f(t,"click",e[6]),g=!0)},p(e,[n]){3&n&&l!==(l=`${e[0]},${e[1]}`)&&r(t,"id",l),8&n&&s!==(s=i(e[3])+" svelte-1spkbt4")&&r(t,"class",s),32&n&&h(t,"--cursor",e[5]),16&n&&h(t,"--bgColor",e[4]),4&n&&h(t,"--activeColor",e[2])},i:d,o:d,d(e){e&&a(t),g=!1,v()}}}function M(e,t,l){let s,n,c,o,a,r,i;g(e,O,(e=>l(10,r=e))),g(e,H,(e=>l(12,i=e)));let{rowID:h=0}=t,{columnID:u=0}=t,{inactiveColor:f="#fff"}=t,{activeColor:d="#000"}=t,{highlight:m=!1}=t;return e.$$set=e=>{"rowID"in e&&l(0,h=e.rowID),"columnID"in e&&l(1,u=e.columnID),"inactiveColor"in e&&l(7,f=e.inactiveColor),"activeColor"in e&&l(2,d=e.activeColor),"highlight"in e&&l(8,m=e.highlight)},e.$$.update=()=>{1024&e.$$.dirty&&l(9,s=r.playerActive),4099&e.$$.dirty&&l(11,n=!!i[h][u]),2560&e.$$.dirty&&l(3,c=!n&&s?"Cell":"Cell-Clicked"),2180&e.$$.dirty&&l(4,o=n?d:f),512&e.$$.dirty&&l(5,a=s?"pointer":"not-allowed")},[h,u,d,c,o,a,function(){if(s)switch(n){case!1:v(H,i[h][u]=1,i),l(11,n=Boolean(i[h][u]));break;case!0:v(H,i[h][u]=0,i),l(11,n=Boolean(i[h][u]))}},f,m,s,r,n,i]}class U extends t{constructor(e){super(),l(this,e,M,N,s,{rowID:0,columnID:1,inactiveColor:7,activeColor:2,highlight:8})}}function L(e,t,l){const s=e.slice();return s[3]=t[l],s[5]=l,s}function R(e,t,l){const s=e.slice();return s[6]=t[l],s[8]=l,s}function q(e){let t,l;return t=new U({props:{rowID:e[5],columnID:e[8],inactiveColor:"#ddc8c4",activeColor:"#6b4d57"}}),{c(){p(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,s){D(t,e,s),l=!0},p:d,i(e){l||($(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){I(t,e)}}}function z(e){let t,l,s=e[3],n=[];for(let o=0;o<s.length;o+=1)n[o]=q(R(e,s,o));const c=e=>b(n[e],1,1,(()=>{n[e]=null}));return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=m()},l(e){for(let t=0;t<n.length;t+=1)n[t].l(e);t=m()},m(e,s){for(let t=0;t<n.length;t+=1)n[t].m(e,s);u(e,t,s),l=!0},p(e,l){if(2&l){let o;for(s=e[3],o=0;o<s.length;o+=1){const c=R(e,s,o);n[o]?(n[o].p(c,l),$(n[o],1)):(n[o]=q(c),n[o].c(),$(n[o],1),n[o].m(t.parentNode,t))}for(k(),o=s.length;o<n.length;o+=1)c(o);C()}},i(e){if(!l){for(let e=0;e<s.length;e+=1)$(n[e]);l=!0}},o(e){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)b(n[t]);l=!1},d(e){y(n,e),e&&a(t)}}}function F(e){let t,l,s=e[1],i=[];for(let n=0;n<s.length;n+=1)i[n]=z(L(e,s,n));const f=e=>b(i[e],1,1,(()=>{i[e]=null}));return{c(){t=n("div");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){t=c(e,"DIV",{class:!0,style:!0});var l=o(t);for(let t=0;t<i.length;t+=1)i[t].l(l);l.forEach(a),this.h()},h(){r(t,"class","GameBoard svelte-prm4g2"),h(t,"--columns",e[0])},m(e,s){u(e,t,s);for(let l=0;l<i.length;l+=1)i[l].m(t,null);l=!0},p(e,[n]){if(2&n){let l;for(s=e[1],l=0;l<s.length;l+=1){const c=L(e,s,l);i[l]?(i[l].p(c,n),$(i[l],1)):(i[l]=z(c),i[l].c(),$(i[l],1),i[l].m(t,null))}for(k(),l=s.length;l<i.length;l+=1)f(l);C()}(!l||1&n)&&h(t,"--columns",e[0])},i(e){if(!l){for(let e=0;e<s.length;e+=1)$(i[e]);l=!0}},o(e){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)b(i[t]);l=!1},d(e){e&&a(t),y(i,e)}}}function _(e,t,l){let s;g(e,H,(e=>l(1,s=e)));let{columns:n}=t,{rows:c}=t;return v(H,s=Array.from(Array(c),(()=>new Array(n).fill(0))),s),e.$$set=e=>{"columns"in e&&l(0,n=e.columns),"rows"in e&&l(2,c=e.rows)},[n,s,c]}class J extends t{constructor(e){super(),l(this,e,_,F,s,{columns:0,rows:2})}}var K="/assets/public_roll.46594c75.ogg";function Q(e){let t,l,s,o,i,h;return{c(){t=n("img"),this.h()},l(e){t=c(e,"IMG",{class:!0,id:!0,src:!0,alt:!0,height:!0,draggable:!0}),this.h()},h(){r(t,"class","Dice svelte-os836e"),r(t,"id",l=e[1].toString()),t.src!==(s="/images/dice"+e[0]+".svg")&&r(t,"src",s),r(t,"alt",o="dice"+e[0]),r(t,"height",112),r(t,"draggable",!1)},m(l,s){u(l,t,s),i||(h=f(t,"click",e[2]),i=!0)},p(e,[n]){2&n&&l!==(l=e[1].toString())&&r(t,"id",l),1&n&&t.src!==(s="/images/dice"+e[0]+".svg")&&r(t,"src",s),1&n&&o!==(o="dice"+e[0])&&r(t,"alt",o)},i:d,o:d,d(e){e&&a(t),i=!1,h()}}}function W(e,t,l){let s;g(e,G,(e=>l(8,s=e)));const n=new Audio(K);let c,{id:o=0}=t,{value:a=1}=t,{clickable:r=!0}=t,i=!1;function h(){i||(i=!0,c=setInterval((()=>{l(0,a=Math.floor(6*Math.random())+1),s.dice.forEach((e=>{e.id==o&&(e.value=a)}))}),50),setTimeout((()=>{for({value:a}of(v(G,s.value=0,s),n.pause(),n.currentTime=0,clearInterval(c),s.dice))v(G,s.value+=a,s);i=!1}),500))}return s.dice.push({id:o,value:a}),e.$$set=e=>{"id"in e&&l(1,o=e.id),"value"in e&&l(0,a=e.value),"clickable"in e&&l(3,r=e.clickable)},[a,o,function(){r&&(n.play(),h())},r,h]}class X extends t{constructor(e){super(),l(this,e,W,Q,s,{id:1,value:0,clickable:3,rollDice:4})}get rollDice(){return this.$$.ctx[4]}}function Y(e,t,l){const s=e.slice();return s[10]=t[l],s[11]=t,s[12]=l,s}function Z(e){let t,l,s,n=e[12];function c(t){e[6](t)}const o=()=>e[7](t,n),a=()=>e[7](null,n);let r={id:e[12],value:e[4].dice[e[12]]?e[4].dice[e[12]].value:1};return void 0!==e[2]&&(r.clickable=e[2]),t=new X({props:r}),P.push((()=>S(t,"clickable",c))),o(),{c(){p(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,l){D(t,e,l),s=!0},p(e,s){n!==e[12]&&(a(),n=e[12],o());const c={};16&s&&(c.value=e[4].dice[e[12]]?e[4].dice[e[12]].value:1),!l&&4&s&&(l=!0,c.clickable=e[2],E((()=>l=!1))),t.$set(c)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){a(),I(t,e)}}}function ee(e){let t,l,s,i;return{c(){t=n("button"),l=B("Roll"),this.h()},l(e){t=c(e,"BUTTON",{class:!0});var s=o(t);l=A(s,"Roll"),s.forEach(a),this.h()},h(){r(t,"class","Button svelte-pil87g")},m(n,c){u(n,t,c),x(t,l),s||(i=f(t,"click",e[5]),s=!0)},p:d,d(e){e&&a(t),s=!1,i()}}}function te(e){let t,l,s,i,h,f,d,g,v,m=e[4].value+"",p=new Array(e[0]),w=[];for(let n=0;n<p.length;n+=1)w[n]=Z(Y(e,p,n));const D=e=>b(w[e],1,1,(()=>{w[e]=null}));let I=e[1]&&ee(e);return{c(){t=n("div"),l=n("div");for(let e=0;e<w.length;e+=1)w[e].c();s=V(),i=n("div"),h=B(m),f=V(),I&&I.c(),d=V(),g=n("div"),this.h()},l(e){t=c(e,"DIV",{class:!0});var n=o(t);l=c(n,"DIV",{class:!0});var r=o(l);for(let t=0;t<w.length;t+=1)w[t].l(r);r.forEach(a),s=j(n),i=c(n,"DIV",{class:!0});var u=o(i);h=A(u,m),u.forEach(a),f=j(n),I&&I.l(n),n.forEach(a),d=j(e),g=c(e,"DIV",{}),o(g).forEach(a),this.h()},h(){r(l,"class","DiceBox svelte-pil87g"),r(i,"class","Value svelte-pil87g"),r(t,"class","DiceContainer svelte-pil87g")},m(e,n){u(e,t,n),x(t,l);for(let t=0;t<w.length;t+=1)w[t].m(l,null);x(t,s),x(t,i),x(i,h),x(t,f),I&&I.m(t,null),u(e,d,n),u(e,g,n),v=!0},p(e,[s]){if(29&s){let t;for(p=new Array(e[0]),t=0;t<p.length;t+=1){const n=Y(e,p,t);w[t]?(w[t].p(n,s),$(w[t],1)):(w[t]=Z(n),w[t].c(),$(w[t],1),w[t].m(l,null))}for(k(),t=p.length;t<w.length;t+=1)D(t);C()}(!v||16&s)&&m!==(m=e[4].value+"")&&T(h,m),e[1]?I?I.p(e,s):(I=ee(e),I.c(),I.m(t,null)):I&&(I.d(1),I=null)},i(e){if(!v){for(let e=0;e<p.length;e+=1)$(w[e]);v=!0}},o(e){w=w.filter(Boolean);for(let t=0;t<w.length;t+=1)b(w[t]);v=!1},d(e){e&&a(t),y(w,e),I&&I.d(),e&&a(d),e&&a(g)}}}function le(e,t,l){let s;g(e,G,(e=>l(4,s=e)));const n=new Audio(K);let{numberOfDice:c=1}=t,{showButton:o=!1}=t,a=!o,r=!1,i=new Array(c);return e.$$set=e=>{"numberOfDice"in e&&l(0,c=e.numberOfDice),"showButton"in e&&l(1,o=e.showButton)},[c,o,a,i,s,function(){!1===r&&(r=!r,n.play(),i.forEach((e=>{e.rollDice()})),setTimeout((()=>{n.pause(),n.currentTime=0,r=!r}),500))},function(e){a=e,l(2,a)},function(e,t){P[e?"unshift":"push"]((()=>{i[t]=e,l(3,i)}))}]}class se extends t{constructor(e){super(),l(this,e,le,te,s,{numberOfDice:0,showButton:1})}}function ne(e){let t,l,s,i,h,d,g,v,m,k,C,y,E;return g=new se({props:{numberOfDice:2,showButton:!0}}),{c(){t=n("input"),l=V(),s=n("div"),i=n("div"),h=V(),d=n("div"),p(g.$$.fragment),v=V(),m=n("label"),k=n("div"),this.h()},l(e){t=c(e,"INPUT",{id:!0,type:!0,class:!0}),l=j(e),s=c(e,"DIV",{class:!0});var n=o(s);i=c(n,"DIV",{class:!0}),o(i).forEach(a),h=j(n),d=c(n,"DIV",{class:!0});var r=o(d);w(g.$$.fragment,r),r.forEach(a),v=j(n),m=c(n,"LABEL",{for:!0,class:!0});var u=o(m);k=c(u,"DIV",{class:!0}),o(k).forEach(a),u.forEach(a),n.forEach(a),this.h()},h(){r(t,"id","ShowHideCheck"),r(t,"type","checkbox"),r(t,"class","svelte-mwjaha"),r(i,"class","Glass svelte-mwjaha"),r(d,"class","DiceContainer svelte-mwjaha"),r(k,"class","ShowHide svelte-mwjaha"),r(m,"for","ShowHideCheck"),r(m,"class","svelte-mwjaha"),r(s,"class","SidePanel svelte-mwjaha")},m(n,c){u(n,t,c),t.checked=e[0].showPanel,u(n,l,c),u(n,s,c),x(s,i),x(s,h),x(s,d),D(g,d,null),x(s,v),x(s,m),x(m,k),C=!0,y||(E=f(t,"change",e[1]),y=!0)},p(e,[l]){1&l&&(t.checked=e[0].showPanel)},i(e){C||($(g.$$.fragment,e),C=!0)},o(e){b(g.$$.fragment,e),C=!1},d(e){e&&a(t),e&&a(l),e&&a(s),I(g),y=!1,E()}}}function ce(e,t,l){let s;return g(e,O,(e=>l(0,s=e))),[s,function(){s.showPanel=this.checked,O.set(s)}]}class oe extends t{constructor(e){super(),l(this,e,ce,ne,s,{})}}function ae(e){let t,l,s,i,h,d,g,v,m,k,C;return d=new J({props:{rows:25,columns:24}}),v=new oe({}),{c(){t=n("div"),l=n("input"),s=B("\n\tActivate Cells"),i=V(),h=n("div"),p(d.$$.fragment),g=V(),p(v.$$.fragment),this.h()},l(e){t=c(e,"DIV",{class:!0});var n=o(t);l=c(n,"INPUT",{type:!0,class:!0}),s=A(n,"\n\tActivate Cells"),n.forEach(a),i=j(e),h=c(e,"DIV",{class:!0});var r=o(h);w(d.$$.fragment,r),r.forEach(a),g=j(e),w(v.$$.fragment,e),this.h()},h(){r(l,"type","checkbox"),r(l,"class","Checkbox"),r(t,"class","Checkboxes svelte-11gj0oo"),r(h,"class","GameBoard-Container svelte-11gj0oo")},m(n,c){u(n,t,c),x(t,l),l.checked=e[0].playerActive,x(t,s),u(n,i,c),u(n,h,c),D(d,h,null),u(n,g,c),D(v,n,c),m=!0,k||(C=f(l,"change",e[1]),k=!0)},p(e,[t]){1&t&&(l.checked=e[0].playerActive)},i(e){m||($(d.$$.fragment,e),$(v.$$.fragment,e),m=!0)},o(e){b(d.$$.fragment,e),b(v.$$.fragment,e),m=!1},d(e){e&&a(t),e&&a(i),e&&a(h),I(d),e&&a(g),I(v,e),k=!1,C()}}}function re(e,t,l){let s;return g(e,O,(e=>l(0,s=e))),[s,function(){s.playerActive=this.checked,O.set(s)}]}new class extends t{constructor(e){super(),l(this,e,re,ae,s,{})}}({target:document.getElementById("app")});
