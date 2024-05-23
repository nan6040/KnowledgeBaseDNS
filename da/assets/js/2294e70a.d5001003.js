"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[89],{5680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>y});var l=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,l,t=function(e,n){if(null==e)return{};var r,l,t={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var g=l.createContext({}),o=function(e){var n=l.useContext(g),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=o(e.components);return l.createElement(g.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,g=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=o(r),m=t,y=p["".concat(g,".").concat(m)]||p[m]||u[m]||a;return r?l.createElement(y,i(i({ref:n},s),{},{components:r})):l.createElement(y,i({ref:n},s))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=m;var d={};for(var g in n)hasOwnProperty.call(n,g)&&(d[g]=n[g]);d.originalType=e,d[p]="string"==typeof e?e:t,i[1]=d;for(var o=2;o<a;o++)i[o]=r[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},566:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var l=r(9668),t=(r(6540),r(5680));const a={title:"\xc6ndringslog",sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:3},i=void 0,d={unversionedId:"private-dns/api/changelog",id:"private-dns/api/changelog",title:"\xc6ndringslog",description:"\x3c!--",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/private-dns/api/changelog.md",sourceDirName:"private-dns/api",slug:"/private-dns/api/changelog",permalink:"/KnowledgeBaseDNS/da/private-dns/api/changelog",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/api/changelog.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\xc6ndringslog",sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"sidebar",previous:{title:"Reference",permalink:"/KnowledgeBaseDNS/da/private-dns/api/reference"},next:{title:"Kendte problemer",permalink:"/KnowledgeBaseDNS/da/private-dns/solving-problems/known-issues"}},g={},o=[{value:"v1.8",id:"v18",level:2},{value:"v1.7",id:"v17",level:2},{value:"v1.6",id:"v16",level:2},{value:"v1.5",id:"v15",level:2},{value:"Model for safebrowsing-indstillinger \xe6ndret",id:"model-for-safebrowsing-indstillinger-\xe6ndret",level:3},{value:"Model til lagring af serverindstillinger \xe6ndret",id:"model-til-lagring-af-serverindstillinger-\xe6ndret",level:3},{value:"v1.4",id:"v14",level:2},{value:"v1.3",id:"v13",level:2},{value:"v1.2",id:"v12",level:2},{value:"v1.1",id:"v11",level:2},{value:"v1.0",id:"v10",level:2}],s={toc:o},p="wrapper";function u(e){let{components:n,...r}=e;return(0,t.yg)(p,(0,l.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Denne artikel indeholder \xe6ndringsloggen for ",(0,t.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/da/private-dns/api/overview"},"AdGuard DNS API"),"."),(0,t.yg)("h2",{id:"v18"},"v1.8"),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"Udgivet 20. april 2024")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Tilf\xf8jet underst\xf8ttelse af DNS-over-HTTPS med godkendelse:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Ny handling \u2014 nulstil DNS-over-HTTPS adgangskode for enheden"),(0,t.yg)("li",{parentName:"ul"},"Ny enhedsindstilling \u2014 ",(0,t.yg)("inlineCode",{parentName:"li"},"detect_doh_auth_only"),". Deaktiverer alle DNS-forbindelsesmetoder undtagen DNS-over-HTTPS med godkendelse"),(0,t.yg)("li",{parentName:"ul"},"Nyt felt i Enheds DNS-adresser \u2014 ",(0,t.yg)("inlineCode",{parentName:"li"},"dns_over_https_with_auth_url"),". Angiver den URL, der skal bruges, n\xe5r der oprettes forbindelse vha. DNS-over-HTTPS med godkendelse")))),(0,t.yg)("h2",{id:"v17"},"v1.7"),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"Udgivet 11. marts 2024")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Tilf\xf8jet dedikeret IPv4-adressefunktionalitet:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Dedikerede IPv4-adresser kan nu bruges p\xe5 enheder til DNS-serverops\xe6tning"),(0,t.yg)("li",{parentName:"ul"},"Dedikeret IPv4-adresse er nu associeret til den enhed, den er tilknyttet, s\xe5ledes at foresp\xf8rgsler til denne adresse logges for den p\xe5g\xe6ldende enhed"))),(0,t.yg)("li",{parentName:"ul"},"Tilf\xf8jet nye operationer:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Opliste alle tilg\xe6ngelige dedikerede IPv4-adresser"),(0,t.yg)("li",{parentName:"ul"},"Tildel ny dedikeret IPv4-adresse"),(0,t.yg)("li",{parentName:"ul"},"Knyt en tilg\xe6ngelig IPv4-adresse til en enhed"),(0,t.yg)("li",{parentName:"ul"},"Fjern tilknytning af en IPv4-adresse fra en enhed"),(0,t.yg)("li",{parentName:"ul"},"Anmod om oplysninger p\xe5 dedikerede adresser associeret med en enhed"))),(0,t.yg)("li",{parentName:"ul"},"Tilf\xf8jet nye gr\xe6nser til Kontogr\xe6nser:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"dedicated_ipv4")," \u2014 giver information om m\xe6ngden af allerede tildelte dedikerede IPv4-adresser, samt gr\xe6nsen for dem"))),(0,t.yg)("li",{parentName:"ul"},"Fjernet for\xe6ldet felt i DNSServerSettings:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"safebrowsing_enabled"))))),(0,t.yg)("h2",{id:"v16"},"v1.6"),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"Udgivet 22. januar 2024")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},'Tilf\xf8jet nyt afsnit "Adgangsindstillinger" for DNS-profiler (',(0,t.yg)("inlineCode",{parentName:"p"},"access_settings"),"). Ved at tilpasse disse felter vil AdGuard DNS-serveren kunne beskyttes mod uautoriseret adgang:"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"allowed_clients")," \u2014 her kan angives, hvilke klienter, som kan bruge DNS-serveren. Dette felt vil have prioritet over feltet ",(0,t.yg)("inlineCode",{parentName:"li"},"blocked_clients")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"allowed_clients")," \u2014 her kan angives, hvilke klienter, som ikke har tilladelse til bruge DNS-serveren"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"blocked_domain_rules")," \u2014 her kan angives, hvilke dom\xe6ner, som ikke m\xe5 tilg\xe5 DNS-serveren, samt definere s\xe5danne dom\xe6ner med jokertegn og DNS-filtreringsregler"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Tilf\xf8jet nye gr\xe6nser til Kontogr\xe6nser:"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"access_rules")," giver summen af de aktuelt anvendte ",(0,t.yg)("inlineCode",{parentName:"li"},"blocked_clients")," og ",(0,t.yg)("inlineCode",{parentName:"li"},"blocked_domain_rules")," v\xe6rdier, samt gr\xe6nsen for adgangsregler"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"user_rules")," viser antallet af oprettede brugerregler, s\xe5vel som gr\xe6nsen for dem"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Tilf\xf8jet ny indstilling: ",(0,t.yg)("inlineCode",{parentName:"p"},"ip_log_enabled")," som muligg\xf8r logning af klientens IP-adresser og dom\xe6ner.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},'Tilf\xf8jet ny fejlkode "FIELD_REACHED_LIMIT" for at angive, hvorn\xe5r gr\xe6nserne er n\xe5et:'),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"For det samlede antal 'blocked_clients' og 'blocked_domain_rules' i adgangsindstillinger"),(0,t.yg)("li",{parentName:"ul"},"For ",(0,t.yg)("inlineCode",{parentName:"li"},"rules")," i indstillingerne for tilpassede brugerregler")))),(0,t.yg)("h2",{id:"v15"},"v1.5"),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"Udgivet 16. juni 2023")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Tilf\xf8jet ny indstilling ",(0,t.yg)("inlineCode",{parentName:"li"},"block_nrd")," samt grupperet alle sikkerhedsrelaterede indstillinger p\xe5 \xe9t sted.")),(0,t.yg)("h3",{id:"model-for-safebrowsing-indstillinger-\xe6ndret"},"Model for safebrowsing-indstillinger \xe6ndret"),(0,t.yg)("p",null,"Fra"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "enabled": true\n}\n')),(0,t.yg)("p",null,"Til:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "enabled": true,\n   "block_dangerous_domains": true,\n   "block_nrd": false\n}\n')),(0,t.yg)("p",null,"hvor ",(0,t.yg)("inlineCode",{parentName:"p"},"enabled")," nu styrer alle indstillinger i gruppen, ",(0,t.yg)("inlineCode",{parentName:"p"},"block_dangerous_domains"),' er det tidligere modelfelt "enabled", og ',(0,t.yg)("inlineCode",{parentName:"p"},"block_nrd")," er indstillinger for filtrering af nyregistrerede dom\xe6ner."),(0,t.yg)("h3",{id:"model-til-lagring-af-serverindstillinger-\xe6ndret"},"Model til lagring af serverindstillinger \xe6ndret"),(0,t.yg)("p",null,"Fra:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "protection_enabled" : true,\n  "safebrowsing_enabled" : true,\n  ..\n}\n')),(0,t.yg)("p",null,"til:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "protection_enabled" : true,\n  "safebrowsing_settings" : {\n     "enabled": true,\n     "block_dangerous_domains": true,\n     "block_nrd": false\n  }\n  ..\n}\n')),(0,t.yg)("p",null,"her bruges det nye felt ",(0,t.yg)("inlineCode",{parentName:"p"},"safebrowsing_settings")," i stedet for det udfasede ",(0,t.yg)("inlineCode",{parentName:"p"},"safebrowsing_enabled"),", hvis v\xe6rdigemmes i ",(0,t.yg)("inlineCode",{parentName:"p"},"block_dangerous_domains"),"."),(0,t.yg)("h2",{id:"v14"},"v1.4"),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"Udgivet 29. marts 2023")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Tilf\xf8jet mulighed for tilpasset svarblokering: Standard (0.0.0.0), REFUSED, NXDOMAIN eller tilpasset IP-adresse.")),(0,t.yg)("h2",{id:"v13"},"v1.3"),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"Udgivet 13. december 2022")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Tilf\xf8jet metode til at hente kontokvoter.")),(0,t.yg)("h2",{id:"v12"},"v1.2"),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"Udgivet 14. oktober 2022")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Tilf\xf8jet de nye protokoltyper DNS og DNSCRYPT. Udfasning af PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP og DNSCRYPT_UDP, som fjernes helt senere.")),(0,t.yg)("h2",{id:"v11"},"v1.1"),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"Udgivet 7. juli 2022")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Tilf\xf8jet metoder til statistikhentning efter tid, dom\xe6ner, virksomheder og enheder."),(0,t.yg)("li",{parentName:"ul"},"Tilf\xf8jet metode til opdatering af enhedsindstillinger."),(0,t.yg)("li",{parentName:"ul"},"Rettet definition af obligatoriske felter.")),(0,t.yg)("h2",{id:"v10"},"v1.0"),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"Udgivet 22. februar 2022")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Tilf\xf8jet godkendelse."),(0,t.yg)("li",{parentName:"ul"},"CRUD-operationer med enheder og DNS-servere."),(0,t.yg)("li",{parentName:"ul"},"Foresp\xf8rgselslog."),(0,t.yg)("li",{parentName:"ul"},"Downloader DOT og DOT .mobileconfig."),(0,t.yg)("li",{parentName:"ul"},"Filterlister og webtjenester.")))}u.isMDXComponent=!0}}]);