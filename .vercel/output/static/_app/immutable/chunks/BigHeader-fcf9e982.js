import{S as N,i as k,s as P,k as u,a as w,l as _,m as S,c as y,h as I,M as g,n as a,P as o,b,G as d,B as M}from"./index-39f73bf8.js";import{H as m}from"./types-97872eb5.js";const B=""+new URL("../assets/flatpickles-15b23cba.svg",import.meta.url).href,G=""+new URL("../assets/notes-0e97c44b.svg",import.meta.url).href,H=""+new URL("../assets/mattnichols-016e0fd8.svg",import.meta.url).href;function j(r){let e,t,h,n,l,p,f,i,v;return{c(){e=u("div"),t=u("img"),n=w(),l=u("img"),f=w(),i=u("img"),this.h()},l(c){e=_(c,"DIV",{class:!0});var s=S(e);t=_(s,"IMG",{src:!0,alt:!0,class:!0}),n=y(s),l=_(s,"IMG",{src:!0,alt:!0,class:!0}),f=y(s),i=_(s,"IMG",{src:!0,alt:!0,class:!0}),s.forEach(I),this.h()},h(){g(t.src,h=B)||a(t,"src",h),a(t,"alt","Flat Pickles"),a(t,"class","svelte-1tcwj8w"),o(t,"hidden",r[0]!=m.FlatPickles),g(l.src,p=G)||a(l,"src",p),a(l,"alt","Notes and Such"),a(l,"class","svelte-1tcwj8w"),o(l,"hidden",r[0]!=m.NotesAndSuch),g(i.src,v=H)||a(i,"src",v),a(i,"alt","Matt Nichols"),a(i,"class","svelte-1tcwj8w"),o(i,"hidden",r[0]!=m.MattNichols),a(e,"class","header")},m(c,s){b(c,e,s),d(e,t),d(e,n),d(e,l),d(e,f),d(e,i)},p(c,[s]){s&1&&o(t,"hidden",c[0]!=m.FlatPickles),s&1&&o(l,"hidden",c[0]!=m.NotesAndSuch),s&1&&o(i,"hidden",c[0]!=m.MattNichols)},i:M,o:M,d(c){c&&I(e)}}}function F(r,e,t){let{type:h}=e;return r.$$set=n=>{"type"in n&&t(0,h=n.type)},[h]}class U extends N{constructor(e){super(),k(this,e,F,j,P,{type:0})}}export{U as B};
