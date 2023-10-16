"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[411],{4137:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),d=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(o.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),f=a,m=u["".concat(o,".").concat(f)]||u[f]||g[f]||i;return t?n.createElement(m,l(l({ref:r},p),{},{components:t})):n.createElement(m,l({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1899:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return g}});var n=t(3117),a=t(102),i=(t(7294),t(4137)),l=["components"],s={title:"DNS-filtrering",sidebar_position:1},o=void 0,d={unversionedId:"general/dns-filtering",id:"general/dns-filtering",title:"DNS-filtrering",description:"Den nemmeste m\xe5de at udforske fordelene ved DNS-filtrering p\xe5 er at installere AdGuard Ad Blocker eller afpr\xf8ve AdGuard DNS. \xd8nskes DNS filtreret p\xe5 netv\xe6rksniveau, s\xe5 er AdGuard Home v\xe6rkt\xf8jet",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/general/dns-filtering.md",sourceDirName:"general",slug:"/general/dns-filtering",permalink:"/KnowledgeBaseDNS/da/general/dns-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/general/dns-filtering.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"DNS-filtrering",sidebar_position:1},sidebar:"sidebar",previous:{title:"Oversigt",permalink:"/KnowledgeBaseDNS/da/"},next:{title:"Syntaks for DNS-filtreringsregler",permalink:"/KnowledgeBaseDNS/da/general/dns-filtering-syntax"}},p={},g=[{value:"Hvad er DNS?",id:"hvad-er-dns",level:2},{value:"Hvordan fungerer DNS-filtrering?",id:"hvordan-fungerer-dns-filtrering",level:2},{value:"DNS-servere",id:"dns-servere",level:3},{value:"Lokale DNS-blokeringslister",id:"lokale-dns-blokeringslister",level:3},{value:"DNS-filtrering contra netv\xe6rksfiltrering",id:"dns-filtrering-contra-netv\xe6rksfiltrering",level:2}],u={toc:g};function f(e){var r=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Den nemmeste m\xe5de at udforske fordelene ved DNS-filtrering p\xe5 er at installere AdGuard Ad Blocker eller afpr\xf8ve AdGuard DNS. \xd8nskes DNS filtreret p\xe5 netv\xe6rksniveau, s\xe5 er AdGuard Home v\xe6rkt\xf8jet"),(0,i.kt)("p",{parentName:"div"},"Hurtige links: ",(0,i.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"Download AdGuard Ad Blocker"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome#getting-started"},"Hent AdGuard Home"),", ",(0,i.kt)("a",{parentName:"p",href:"https://agrd.io/download-dns"},"Pr\xf8v AdGuard DNS")))),(0,i.kt)("p",null,'For bedre at forst\xe5 DNS-filtrering, b\xf8r sp\xf8rgsm\xe5let "Hvad er DNS?" f\xf8rst besvares.'),(0,i.kt)("h2",{id:"hvad-er-dns"},"Hvad er DNS?"),(0,i.kt)("p",null,'DNS st\xe5r for "Domain Name System", hvis form\xe5l er at overs\xe6tte websteders navne til IP-adresser, som browsere kan forst\xe5. Hver gang man g\xe5r til et websted, sender browseren en foresp\xf8rgsel til en s\xe6rlig servertype (DNS-server). Denne server ser p\xe5 det forespurgte dom\xe6nenavn og svarer med en korresponderende IP-adresse. Meget skematisk kan det repr\xe6senteres s\xe5ledes:'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png",alt:"S\xe5dan fungerer DNS"})),(0,i.kt)("p",null,"Det samme g\xe6lder naturligvis for alle apps og programmer, som sender evt. webforesp\xf8rgsler, ikke kun browsere."),(0,i.kt)("h2",{id:"hvordan-fungerer-dns-filtrering"},"Hvordan fungerer DNS-filtrering?"),(0,i.kt)("p",null,'Ved brug af en AdGuard-app, der underst\xf8tter DNS-filtrering, fungerer den som en buffer mellem brugerens enhed og DNS-serveren. Alle DNS-foresp\xf8rgsler, som browseren eller apps er ved at sende, behandles f\xf8rst af AdGuard. Benyttes en standard DNS-server leveret af internetudbyderen, krypteres DNS-trafik sandsynligvis ikke og er derfor s\xe5rbar over for snooping og hijacking. AdGuard krypterer alle DNS-foresp\xf8rgsler, f\xf8r de forlader enheden, s\xe5 ingen ondsindede kan f\xe5 adgang til indholdet. Derudover kan AdGuard identificere foresp\xf8rgsler til annonce-, sporings- og/eller voksendom\xe6ner og omdirigere disse til et "sort hul" i stedet for at videresende dem til DNS-serveren. Mere herom ',(0,i.kt)("a",{parentName:"p",href:"#local-dns-blocklists"},"senere"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png",alt:"S\xe5dan fungerer DNS-filtrering"})),(0,i.kt)("p",null,"DNS-filtrering er et kraftfuldt v\xe6rkt\xf8j underst\xf8ttet af alle st\xf8rre AdGuard-apps: ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-windows/overview.html"},"AdGuard til Windows"),", ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-mac/overview.html"},"AdGuard til Mac"),", ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-android/overview.html"},"AdGuard til Android")," samt ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-ios/overview.html"},"AdGuard til iOS"),"."),(0,i.kt)("p",null,"DNS-filtrering kan opdeles i to separate funktioner: At kryptere og omdirigere DNS-trafik til DNS-servere, samt at blokere visse dom\xe6ner lokalt ved at anvende DNS-sortlister."),(0,i.kt)("h3",{id:"dns-servere"},"DNS-servere"),(0,i.kt)("p",null,"Der er tusindvis af DNS-servere at v\xe6lge imellem, alle unikke i deres egenskaber og form\xe5l. De fleste returnerer blot IP-adressen p\xe5 det forespurgte dom\xe6ne, men nogle har ekstrafunktioner, da de blokerer annonce-, sporings-, voksendom\xe6ner mv. I dag anvender alle st\xf8rre DNS-servere en eller flere p\xe5lidelige krypteringsprotokoller: DNS-over-HTTPS, DNS-over-TLS. AdGuard leverer ogs\xe5 en ",(0,i.kt)("a",{parentName:"p",href:"https://adguard-dns.io/"},"DNS-tjeneste"),", der ogs\xe5 var verdens f\xf8rste til at tilbyde den nye og meget lovende ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/blog/dns-over-quic.html"},"DNS-over-QUIC"),"-krypteringsprotokol. AdGuard har forskellige servere til forskellige m\xe5l. Dette diagram illustrerer, hvordan AdGuard-blokeringsservere fungerer:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg",alt:"AdGuard DNS"})),(0,i.kt)("p",null,"Andre DNS-udbydere fungerer muligvis anderledes, s\xe5 find ud af mere om dem, inden der v\xe6lges en DNS-server. En listen over nogle af de mest popul\xe6re DNS-udbydere findes i denne ",(0,i.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/da/general/dns-providers"},"denne artikel"),". Alle AdGuard-apps, som underst\xf8tter DNS-funktionalitet, har ogs\xe5 en liste over DNS-servere at v\xe6lge imellem, eller tillader endda valg af en hvilken som helst tilpasset DNS-server efter \xf8nske."),(0,i.kt)("h3",{id:"lokale-dns-blokeringslister"},"Lokale DNS-blokeringslister"),(0,i.kt)("p",null,"Ved kun at stole p\xe5 DNS-servere til at filtrere DNS-trafik, mister man imidlertid al fleksibilitet. Blokerer den valgte server et dom\xe6ne, kan man ikke tilg\xe5 det. Med AdGuard beh\xf8ver man ikke engang at ops\xe6tte nogen bestemt DNS-server til at filtrere DNS-trafik. Alle AdGuard-produkter muligg\xf8r brug af DNS-sortlister, fra simple v\xe6rtsfiler til lister med ",(0,i.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/da/general/dns-filtering-syntax"},"mere avancerede syntakser"),'. De fungerer p\xe5 samme m\xe5de som alm. sortlister: Matcher en DNS-foresp\xf8rgsel en af reglerne i den aktive filterliste, blokeres den. Mere pr\xe6cist, s\xe5 omdirigeres den til et "sort hul".'),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In AdGuard for iOS, first you have to enable ",(0,i.kt)("em",{parentName:"p"},"Advanced mode")," in settings in order to get access to DNS blocking."))),(0,i.kt)("p",null,"You can add as many custom blocklists as you wish. For instance, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardSDNSFilter"},"AdGuard DNS filter"),'. It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.'),(0,i.kt)("p",null,"There are hundreds of different DNS blocklists, you can look for them ",(0,i.kt)("a",{parentName:"p",href:"https://filterlists.com/"},"here"),"."),(0,i.kt)("h2",{id:"dns-filtrering-contra-netv\xe6rksfiltrering"},"DNS-filtrering contra netv\xe6rksfiltrering"),(0,i.kt)("p",null,"Network filtering is what we call the 'regular' way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/"},"this article"),"."),(0,i.kt)("p",null,"First of all, we have to mention that with AdGuard you don't have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it's important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pros of DNS filtering:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"P\xe5 visse platforme er dette den eneste m\xe5de at opn\xe5 systemniveaufiltrering p\xe5. iOS underst\xf8tter f.eks. kun indholdsblokering i vanlig forstand i Safari-browseren, for alt andet findes kun DNS-filtrering."),(0,i.kt)("li",{parentName:"ol"},"Visse former for sporing (s\xe5som ",(0,i.kt)("a",{parentName:"li",href:"https://adguard.com/blog/cname-tracking.html"},"CNAME-tilsl\xf8ret sporing"),") kan kun im\xf8deg\xe5s vha. DNS-filtrering."),(0,i.kt)("li",{parentName:"ol"},"Stadiet, hvor en DNS-foresp\xf8rgsel behandles, er det tidligste, man overhovedet kan im\xf8deg\xe5 en annonce eller tracker, hvilket medvirker til at spare en lille smule batteristr\xf8m og trafik.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cons of DNS filtering:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'DNS-filtrering er "grov", dvs., at den hverken fjerner tomme felter efterladt fra en blokeret annonce eller anvender nogen form for kosmetisk filtrering. Mange af de mere komplicerede annoncer kan ikke blokeres p\xe5 DNS-niveau (eller rettere sagt, det kan de, men kun ved at blokere hele dom\xe6net, der muligvis ogs\xe5 bruges til andre form\xe5l).'),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg",alt:"Eksempel p\xe5 forskel"})," ",(0,i.kt)("em",{parentName:"p"},"Et eksempel p\xe5 forskellen mellem DNS- og netv\xe6rksfiltrering"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Oprindelsen af en DNS-foresp\xf8rgsel ikke kan fastsl\xe5s, hvorfor der p\xe5 DNS-niveau ikke kan skelnes mellem forskellige apps. Dette p\xe5virker statistikken negativt og umuligg\xf8r oprettelse af app-specifikke filtreringsregler."))),(0,i.kt)("p",null,"We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible."))}f.isMDXComponent=!0}}]);