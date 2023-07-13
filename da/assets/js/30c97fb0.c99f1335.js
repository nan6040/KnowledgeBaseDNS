"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[252],{4137:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return f}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),s=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):d(d({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,k=p["".concat(i,".").concat(f)]||p[f]||g[f]||o;return n?t.createElement(k,d(d({ref:r},u),{},{components:n})):t.createElement(k,d({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,d=new Array(o);d[0]=p;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,d[1]=l;for(var s=2;s<o;s++)d[s]=n[s];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4156:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return g}});var t=n(3117),a=n(102),o=(n(7294),n(4137)),d=["components"],l={title:"Oversigt",sidebar_position:1,slug:"/"},i=void 0,s={unversionedId:"intro",id:"intro",title:"Oversigt",description:"Hvad er DNS?",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/KnowledgeBaseDNS/da/",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Oversigt",sidebar_position:1,slug:"/"},sidebar:"sidebar",next:{title:"DNS-filtrering",permalink:"/KnowledgeBaseDNS/da/general/dns-filtering"}},u={},g=[{value:"Hvad er DNS?",id:"hvad-er-dns",level:2},{value:"Hvorfor bruge DNS til indholdsblokering?",id:"hvorfor-bruge-dns-til-indholdsblokering",level:2},{value:"Hvad er AdGuard DNS?",id:"hvad-er-adguard-dns",level:2},{value:"DNS-filtreringsmodul i AdGuard-produkter",id:"dns-filtreringsmodul-i-adguard-produkter",level:2}],p={toc:g};function f(e){var r=e.components,n=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hvad-er-dns"},"Hvad er DNS?"),(0,o.kt)("p",null,'DNS st\xe5r for "Domain Name System", hvis form\xe5l er at konvertere websteders navne til IP-adresser. Hver gang man g\xe5r til et websted, sender browseren en DNS-foresp\xf8rgsel til en DNS-server for at f\xe5 oplyst webstedets IP-adresse. En alm. DNS-opl\xf8ser returnerer blot IP-adressen p\xe5 det anmodede dom\xe6ne.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Standard DNS-serveren leveres normalt af internetudbyderen. Det betyder, at internetudbyderen kan spore brugeres onlineaktivitet og s\xe6lge logfiler til tredjeparter.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png",alt:"Enheden bruger altid en eller anden DNS-server til at f\xe5 IP-adresserne p\xe5 de dom\xe6nenavne, apps \xf8nsker at navigere til"})),(0,o.kt)("p",null,'Der er ogs\xe5 DNS-servere, som kan blokere bestemte websteder p\xe5 DNS-niveau. Hvordan fungerer de? N\xe5r enheden sender en "d\xe5rlig" foresp\xf8rgsel, hvad enten det er en annonce eller tracker, obstruerer en DNS-server forbindelsen ved at svare med en ikke-rutbar IP-adresse for et blokeret dom\xe6ne.'),(0,o.kt)("h2",{id:"hvorfor-bruge-dns-til-indholdsblokering"},"Hvorfor bruge DNS til indholdsblokering?"),(0,o.kt)("p",null,"Alt har i dag interetadgang, fra TV til intelligente p\xe6rer, fra mobilenheder til intelligente k\xf8ret\xf8jer. Og hvor internet, er der ogs\xe5 annoncer og trackere. I dette tilf\xe6lde har en browserbaseret adblocker vist sig utilstr\xe6kkelig. For at opn\xe5 bedre beskyttelse, brug DNS kombineret med VPN og en adblocker."),(0,o.kt)("p",null,"Brug af DNS til indholdsblokering har nogle fordele s\xe5vel som \xe5benlyse mangler. P\xe5 den ene side har DNS ingen blinde vinkler, da den observerer alle enheder og ikke kun browserne. P\xe5 den anden side kan DNS-blokering alene ikke levere kosmetisk filtrering."),(0,o.kt)("h2",{id:"hvad-er-adguard-dns"},"Hvad er AdGuard DNS?"),(0,o.kt)("p",null,"AdGuard DNS er en af de mest fortrolighedsorienterede DNS-tjenester p\xe5 markedet. Den underst\xf8tter s\xe5 p\xe5lidelige krypteringsprotokoller som DNS-over-HTTPS, DNS-over-TLS og DNS-over-QUIC. Den kan fungere som en alm. DNS-opl\xf8ser i tilstanden Ikke-filtrering, men den kan ogs\xe5 levere indholdsblokering p\xe5 DNS-niveau: Identificere foresp\xf8rgsler til annonce-, sporings- og/eller voksendom\xe6ner (valgfrit) og reagere med et tomt svar. AdGuard har sin egen hyppigt opdaterede base over dom\xe6nenavne, som leverer annoncer, trackere og svindel."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/scr2.png",alt:"Omtrentligt skema over, hvordan AdGuard DNS fungerer"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Omkring 75 % af AdGuard DNS-trafikken er krypteret. Det er faktisk d\xe9t, der adskiller indholdsblokerende DNS-servere fra de \xf8vrige. Kigger man p\xe5 CloudFlare- eller Quad9-statistikker, vil man se, at krypteret DNS kun udg\xf8r en lille del af alle foresp\xf8rgsler.")),(0,o.kt)("p",null,"AdGuard DNS findes i to hovedformer: ",(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/da/public-dns/overview"},"Offentlig AdGuard DNS")," og ",(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/da/private-dns/overview"},"privat AdGuard DNS"),". Begge disse tjenester kr\xe6ver ikke installation af nogen app. De er nemme at ops\xe6tte og anvende, og de giver brugerne det minimum af funktioner, som kr\xe6ves for at blokere annoncer, trackere, ondsindede websteder og, om \xf8nsket, voksenindhold. Der er ingen begr\xe6nsninger af, med hvilke enheder de kan bruges."),(0,o.kt)("p",null,"Trods mange ligheder, s\xe5 er privat AdGuard DNS og offentlig AdGuard DNS to forskellige tjenester. Deres st\xf8rste forskel er, at privat AdGuard DNS kan tilpasses, mens offentlig AdGuard DNS ikke kan."),(0,o.kt)("h2",{id:"dns-filtreringsmodul-i-adguard-produkter"},"DNS-filtreringsmodul i AdGuard-produkter"),(0,o.kt)("p",null,"Alle st\xf8rre AdGuard-produkter, inkl. AdGuard VPN, har et ",(0,o.kt)("strong",{parentName:"p"},"DNS-filtreringsmodul"),", hvor man kan v\xe6lge en DNS-server fra en udbyder, man stoler p\xe5. Selvf\xf8lgelig er AdGuard DNS Standard, AdGuard DNS Ikke-filtrerende og AdGuard DNS Familiebeskyttelse p\xe5 listen. AdGuard-apps giver ogs\xe5 brugere mulighed for ",(0,o.kt)("a",{parentName:"p",href:"https://adguard-dns.io/public-dns.html"}," nemt at ops\xe6tte og anvende AdGuard DNS")," \u2014 offentlig eller privat."))}f.isMDXComponent=!0}}]);