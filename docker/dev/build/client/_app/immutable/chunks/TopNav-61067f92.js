import{S as F,i as L,s as M,G as O,l as u,a as B,r as y,m as _,n as d,c as C,h as r,u as S,p as b,b as I,K as i,H as P,I as Q,J as R,f as U,t as W}from"./index-d5cc66c1.js";import{i as X}from"./common-9379a3d9.js";function z(c){let t,l;return{c(){t=u("div"),l=y("Testnet"),this.h()},l(e){t=_(e,"DIV",{class:!0});var s=d(t);l=S(s,"Testnet"),s.forEach(r),this.h()},h(){b(t,"class","font-bold text-black italic text-opacity-50 tnet")},m(e,s){I(e,t,s),i(t,l)},d(e){e&&r(t)}}}function Y(c){let t,l;return{c(){t=u("a"),l=y("Switch to testnet"),this.h()},l(e){t=_(e,"A",{href:!0});var s=d(t);l=S(s,"Switch to testnet"),s.forEach(r),this.h()},h(){b(t,"href","https://scan-testnet.themelio.org")},m(e,s){I(e,t,s),i(t,l)},d(e){e&&r(t)}}}function Z(c){let t,l;return{c(){t=u("a"),l=y("Switch to mainnet"),this.h()},l(e){t=_(e,"A",{href:!0});var s=d(t);l=S(s,"Switch to mainnet"),s.forEach(r),this.h()},h(){b(t,"href","https://scan.themelio.org")},m(e,s){I(e,t,s),i(t,l)},d(e){e&&r(t)}}}function $(c){let t,l,e,s,m,h,V,p,g,x,D,E,N,k,n=c[0]&&z();const q=c[2].default,o=O(q,c,c[1],null);function G(a,f){return a[0]?Z:Y}let T=G(c),v=T(c);return{c(){t=u("nav"),n&&n.c(),l=B(),e=u("div"),o&&o.c(),s=B(),m=u("div"),h=u("b"),v.c(),V=B(),p=u("div"),g=u("a"),x=y("[stats]"),D=y("\xA0"),E=u("a"),N=y("[github]"),this.h()},l(a){t=_(a,"NAV",{class:!0});var f=d(t);n&&n.l(f),l=C(f),e=_(f,"DIV",{class:!0});var w=d(e);o&&o.l(w),s=C(w),m=_(w,"DIV",{class:!0});var H=d(m);h=_(H,"B",{});var J=d(h);v.l(J),J.forEach(r),H.forEach(r),w.forEach(r),V=C(f),p=_(f,"DIV",{class:!0});var A=d(p);g=_(A,"A",{href:!0});var K=d(g);x=S(K,"[stats]"),K.forEach(r),D=S(A,"\xA0"),E=_(A,"A",{href:!0});var j=d(E);N=S(j,"[github]"),j.forEach(r),A.forEach(r),f.forEach(r),this.h()},h(){b(m,"class","text-sm text-blue-600 hover:underline"),b(e,"class","inner svelte-oa6t0o"),b(g,"href","/stats"),b(E,"href","https://github.com/themeliolabs/melscan"),b(p,"class","second svelte-oa6t0o"),b(t,"class","mx-auto max-w-screen-lg mt-8 text-xl leading-tight outer svelte-oa6t0o")},m(a,f){I(a,t,f),n&&n.m(t,null),i(t,l),i(t,e),o&&o.m(e,null),i(e,s),i(e,m),i(m,h),v.m(h,null),i(t,V),i(t,p),i(p,g),i(g,x),i(p,D),i(p,E),i(E,N),k=!0},p(a,[f]){a[0]?n||(n=z(),n.c(),n.m(t,l)):n&&(n.d(1),n=null),o&&o.p&&(!k||f&2)&&P(o,q,a,a[1],k?R(q,a[1],f,null):Q(a[1]),null),T!==(T=G(a))&&(v.d(1),v=T(a),v&&(v.c(),v.m(h,null)))},i(a){k||(U(o,a),k=!0)},o(a){W(o,a),k=!1},d(a){a&&r(t),n&&n.d(),o&&o.d(a),v.d()}}}function tt(c,t,l){let{$$slots:e={},$$scope:s}=t,{testnet:m=X}=t;return c.$$set=h=>{"testnet"in h&&l(0,m=h.testnet),"$$scope"in h&&l(1,s=h.$$scope)},[m,s,e]}class at extends F{constructor(t){super(),L(this,t,tt,$,M,{testnet:0})}}export{at as T};
