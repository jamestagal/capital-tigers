import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,destroy_each,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[1]=t[n],s[3]=n,s}function create_else_block(e){let t,n,o=e[1].title+"",r,i=e[1].date+"",c,d,s,a=e[1].day+"",l;return{c(){t=element("div"),n=element("span"),r=text(o),c=text(i),d=space(),s=element("span"),l=text(a),this.h()},l(e){t=claim_element(e,"DIV",{class:!0});var h,m,u=children(t);n=claim_element(u,"SPAN",{class:!0}),h=children(n),r=claim_text(h,o),h.forEach(detach),c=claim_text(u,i),d=claim_space(u),s=claim_element(u,"SPAN",{class:!0}),m=children(s),l=claim_text(m,a),m.forEach(detach),u.forEach(detach),this.h()},h(){attr(n,"class","match-list__group-round svelte-16tgxmh"),attr(s,"class","title svelte-16tgxmh"),attr(t,"class","details svelte-16tgxmh")},m(e,o){insert_hydration(e,t,o),append_hydration(t,n),append_hydration(n,r),append_hydration(t,c),append_hydration(t,d),append_hydration(t,s),append_hydration(s,l)},p(e,t){t&1&&o!==(o=e[1].title+"")&&set_data(r,o),t&1&&i!==(i=e[1].date+"")&&set_data(c,i),t&1&&a!==(a=e[1].day+"")&&set_data(l,a)},d(e){e&&detach(t)}}}function create_if_block(e){let t,n,o=e[1].day+"",r,i=e[1].date+"",c,d,s,a=e[1].title+"",l;return{c(){t=element("div"),n=element("span"),r=text(o),c=text(i),d=space(),s=element("span"),l=text(a),this.h()},l(e){t=claim_element(e,"DIV",{class:!0});var h,m,u=children(t);n=claim_element(u,"SPAN",{class:!0}),h=children(n),r=claim_text(h,o),h.forEach(detach),c=claim_text(u,i),d=claim_space(u),s=claim_element(u,"SPAN",{class:!0}),m=children(s),l=claim_text(m,a),m.forEach(detach),u.forEach(detach),this.h()},h(){attr(n,"class","title svelte-16tgxmh"),attr(s,"class","match-list__group-round svelte-16tgxmh"),attr(t,"class","details svelte-16tgxmh")},m(e,o){insert_hydration(e,t,o),append_hydration(t,n),append_hydration(n,r),append_hydration(t,c),append_hydration(t,d),append_hydration(t,s),append_hydration(s,l)},p(e,t){t&1&&o!==(o=e[1].day+"")&&set_data(r,o),t&1&&i!==(i=e[1].date+"")&&set_data(c,i),t&1&&a!==(a=e[1].title+"")&&set_data(l,a)},d(e){e&&detach(t)}}}function create_each_block(e){let r,s,h,K,V,B,i,b,t,D,k,P,o,f,d,_=e[1].timeZone+"",N,R,c,y=e[1].time+"",F,p,O=e[1].am_pm+"",A,$,l,m,x=e[1].venue+"",S,W,g,j=e[1].state+"",z,I,u,n,E,L,H,v,a,w=e[1].link.title+"",T,M,U,q;function Y(e){return e[3]%2==0?create_if_block:create_else_block}let G=Y(e,-1),C=G(e);return{c(){r=element("div"),s=element("section"),h=element("i"),K=text(e[3]),V=space(),C.c(),B=space(),i=element("div"),b=element("picture"),t=element("img"),P=space(),o=element("div"),f=element("span"),d=element("span"),N=text(_),R=space(),c=element("time"),F=text(y),p=element("span"),A=text(O),$=space(),l=element("div"),m=element("span"),S=text(x),W=space(),g=element("span"),z=text(j),I=space(),u=element("picture"),n=element("img"),H=space(),v=element("div"),a=element("a"),T=text(w),U=space(),this.h()},l(E){r=claim_element(E,"DIV",{class:!0});var k,M,D,L,q,Y,G,X,Z,J,Q=children(r),ee,te,ne,se,oe;s=claim_element(Q,"SECTION",{class:!0}),k=children(s),h=claim_element(k,"I",{class:!0}),J=children(h),K=claim_text(J,e[3]),J.forEach(detach),V=claim_space(k),C.l(k),B=claim_space(k),i=claim_element(k,"DIV",{class:!0}),D=children(i),b=claim_element(D,"PICTURE",{class:!0}),Y=children(b),t=claim_element(Y,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0,"aria-hidden":!0,class:!0}),Y.forEach(detach),P=claim_space(D),o=claim_element(D,"DIV",{class:!0}),M=children(o),f=claim_element(M,"SPAN",{class:!0}),G=children(f),d=claim_element(G,"SPAN",{class:!0}),X=children(d),N=claim_text(X,_),X.forEach(detach),G.forEach(detach),R=claim_space(M),c=claim_element(M,"TIME",{class:!0,"data-date":!0}),q=children(c),F=claim_text(q,y),p=claim_element(q,"SPAN",{class:!0}),Z=children(p),A=claim_text(Z,O),Z.forEach(detach),q.forEach(detach),$=claim_space(M),l=claim_element(M,"DIV",{class:!0}),L=children(l),m=claim_element(L,"SPAN",{class:!0}),ee=children(m),S=claim_text(ee,x),ee.forEach(detach),W=claim_space(L),g=claim_element(L,"SPAN",{class:!0}),te=children(g),z=claim_text(te,j),te.forEach(detach),L.forEach(detach),M.forEach(detach),I=claim_space(D),u=claim_element(D,"PICTURE",{class:!0}),ne=children(u),n=claim_element(ne,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0,"aria-hidden":!0,class:!0}),ne.forEach(detach),D.forEach(detach),H=claim_space(k),v=claim_element(k,"DIV",{class:!0}),se=children(v),a=claim_element(se,"A",{href:!0,target:!0,class:!0}),oe=children(a),T=claim_text(oe,w),oe.forEach(detach),se.forEach(detach),k.forEach(detach),U=claim_space(Q),Q.forEach(detach),this.h()},h(){attr(h,"class","icon svelte-16tgxmh"),attr(t,"loading","lazy"),attr(t,"decoding","async"),src_url_equal(t.src,D=e[1].team1Logo.url)||attr(t,"src",D),attr(t,"alt",k=e[1].team1Logo.alt),attr(t,"width","115"),attr(t,"height","115"),attr(t,"aria-hidden","true"),attr(t,"class","svelte-16tgxmh"),attr(b,"class","cs-icon svelte-16tgxmh"),attr(d,"class","match-scheduled__timezone--zone svelte-16tgxmh"),attr(f,"class","match-scheduled__timezone svelte-16tgxmh"),attr(p,"class","match-scheduled__time-ampm svelte-16tgxmh"),attr(c,"class","match-scheduled__time js-datetime svelte-16tgxmh"),attr(c,"data-date","1709961600000"),attr(m,"class","match-scheduled__venue svelte-16tgxmh"),attr(g,"class","match-scheduled__state svelte-16tgxmh"),attr(l,"class","match-scheduled__location svelte-16tgxmh"),attr(o,"class","match-scheduled svelte-16tgxmh"),attr(n,"loading","lazy"),attr(n,"decoding","async"),src_url_equal(n.src,E=e[1].team2Logo.url)||attr(n,"src",E),attr(n,"alt",L=e[1].team2Logo.alt),attr(n,"width","115"),attr(n,"height","115"),attr(n,"aria-hidden","true"),attr(n,"class","svelte-16tgxmh"),attr(u,"class","cs-icon svelte-16tgxmh"),attr(i,"class","bottom svelte-16tgxmh"),attr(a,"href",M=e[1].link.url),attr(a,"target","_blank"),attr(a,"class","svelte-16tgxmh"),attr(v,"class","bottom btm-link svelte-16tgxmh"),attr(s,"class","svelte-16tgxmh"),attr(r,"class",q="row row-"+(e[3]%2==0?1:2)+" svelte-16tgxmh")},m(e,j){insert_hydration(e,r,j),append_hydration(r,s),append_hydration(s,h),append_hydration(h,K),append_hydration(s,V),C.m(s,null),append_hydration(s,B),append_hydration(s,i),append_hydration(i,b),append_hydration(b,t),append_hydration(i,P),append_hydration(i,o),append_hydration(o,f),append_hydration(f,d),append_hydration(d,N),append_hydration(o,R),append_hydration(o,c),append_hydration(c,F),append_hydration(c,p),append_hydration(p,A),append_hydration(o,$),append_hydration(o,l),append_hydration(l,m),append_hydration(m,S),append_hydration(l,W),append_hydration(l,g),append_hydration(g,z),append_hydration(i,I),append_hydration(i,u),append_hydration(u,n),append_hydration(s,H),append_hydration(s,v),append_hydration(v,a),append_hydration(a,T),append_hydration(r,U)},p(e,s){C.p(e,s),s&1&&!src_url_equal(t.src,D=e[1].team1Logo.url)&&attr(t,"src",D),s&1&&k!==(k=e[1].team1Logo.alt)&&attr(t,"alt",k),s&1&&_!==(_=e[1].timeZone+"")&&set_data(N,_),s&1&&y!==(y=e[1].time+"")&&set_data(F,y),s&1&&O!==(O=e[1].am_pm+"")&&set_data(A,O),s&1&&x!==(x=e[1].venue+"")&&set_data(S,x),s&1&&j!==(j=e[1].state+"")&&set_data(z,j),s&1&&!src_url_equal(n.src,E=e[1].team2Logo.url)&&attr(n,"src",E),s&1&&L!==(L=e[1].team2Logo.alt)&&attr(n,"alt",L),s&1&&w!==(w=e[1].link.title+"")&&set_data(T,w),s&1&&M!==(M=e[1].link.url)&&attr(a,"href",M)},d(e){e&&detach(r),C.d()}}}function create_fragment(e){let s,n,i,o,r,c,a=e[0],t=[];for(let n=0;n<a.length;n+=1)t[n]=create_each_block(get_each_context(e,a,n));return{c(){s=element("section"),n=element("div"),i=element("div"),o=element("a"),r=element("i"),c=space();for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){s=claim_element(e,"SECTION",{class:!0});var a,l,d,u=children(s);n=claim_element(u,"DIV",{class:!0}),a=children(n),i=claim_element(a,"DIV",{class:!0}),l=children(i),o=claim_element(l,"A",{href:!0,class:!0}),d=children(o),r=claim_element(d,"I",{class:!0}),children(r).forEach(detach),d.forEach(detach),l.forEach(detach),c=claim_space(a);for(let e=0;e<t.length;e+=1)t[e].l(a);a.forEach(detach),u.forEach(detach),this.h()},h(){attr(r,"class","fas fa-caret-up svelte-16tgxmh"),attr(o,"href","."),attr(o,"class","scroll-icon svelte-16tgxmh"),attr(i,"class","center-line svelte-16tgxmh"),attr(n,"class","wrapper svelte-16tgxmh"),attr(s,"class","section-full bg-gray-dark content-inner svelte-16tgxmh")},m(e,a){insert_hydration(e,s,a),append_hydration(s,n),append_hydration(n,i),append_hydration(i,o),append_hydration(o,r),append_hydration(n,c);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(n,null)},p(e,[s]){if(s&1){a=e[0];let o;for(o=0;o<a.length;o+=1){const i=get_each_context(e,a,o);t[o]?t[o].p(i,s):(t[o]=create_each_block(i),t[o].c(),t[o].m(n,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=a.length}},i:noop,o:noop,d(e){e&&detach(s),destroy_each(t,e)}}}function formatDate(e){const t=new t,n=["January","February","March","April","May","June","July","August","September","October","November","December"];return`${n[e.getMonth]}, ${t[e.getDate()]}`}function instance(e,t,n){let{cards:s}=t;return e.$$set=e=>{"cards"in e&&n(0,s=e.cards)},[s]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{cards:0})}}export default Component