"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[880],{4137:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},d=Object.keys(e);for(r=0;r<d.length;r++)t=d[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)t=d[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),l=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=l(e.components);return r.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,d=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(t),m=n,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||d;return t?r.createElement(g,o(o({ref:a},u),{},{components:t})):r.createElement(g,o({ref:a},u))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var d=t.length,o=new Array(d);o[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<d;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6503:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=t(3117),n=t(102),d=(t(7294),t(4137)),o=["components"],i={title:"General",sidebar_position:1},s="DNS privado de AdGuard",l={unversionedId:"private-dns/overview",id:"private-dns/overview",title:"General",description:"Private AdGuard DNS dashboard main",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/private-dns/overview.md",sourceDirName:"private-dns",slug:"/private-dns/overview",permalink:"/KnowledgeBaseDNS/es/private-dns/overview",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"General",sidebar_position:1},sidebar:"sidebar",previous:{title:"How to flush DNS cache",permalink:"/KnowledgeBaseDNS/es/public-dns/solving-problems/how-to-flush-dns-cache"},next:{title:"API",permalink:"/KnowledgeBaseDNS/es/private-dns/api"}},u={},p=[{value:"What is Private AdGuard DNS?",id:"what-is-private-adguard-dns",level:2},{value:"Why you need Private AdGuard DNS",id:"why-you-need-private-adguard-dns",level:2},{value:"La diferencia entre DNS de AdGuard privado y p\xfablico",id:"la-diferencia-entre-dns-de-adguard-privado-y-p\xfablico",level:2},{value:"C\xf3mo configurar DNS privado de AdGuard",id:"c\xf3mo-configurar-dns-privado-de-adguard",level:2},{value:"Funciones de DNS de AdGuard privado",id:"funciones-de-dns-de-adguard-privado",level:2},{value:"Gesti\xf3n de listas de bloqueo",id:"gesti\xf3n-de-listas-de-bloqueo",level:3},{value:"Reglas de usuario",id:"reglas-de-usuario",level:3},{value:"Statistics",id:"statistics",level:3},{value:"Traffic destination",id:"traffic-destination",level:3},{value:"Companies",id:"companies",level:3},{value:"Query log",id:"query-log",level:3},{value:"Control parental",id:"control-parental",level:3}],c={toc:p};function m(e){var a=e.components,t=(0,n.Z)(e,o);return(0,d.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"dns-privado-de-adguard"},"DNS privado de AdGuard"),(0,d.kt)("p",null,(0,d.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png",alt:"Private AdGuard DNS dashboard main"})),(0,d.kt)("h2",{id:"what-is-private-adguard-dns"},"What is Private AdGuard DNS?"),(0,d.kt)("p",null,"DNS Privado de AdGuard es un servidor DNS que, adem\xe1s de los beneficios de un servidor DNS p\xfablico (como el cifrado de tr\xe1fico y las listas de bloqueo de dominios), proporciona caracter\xedsticas como personalizaci\xf3n flexible, estad\xedsticas de DNS y control parental y se administra f\xe1cilmente a trav\xe9s de un pr\xe1ctico panel de control."),(0,d.kt)("h2",{id:"why-you-need-private-adguard-dns"},"Why you need Private AdGuard DNS"),(0,d.kt)("p",null,"Hoy en d\xeda, puede conectar cualquier cosa a Internet: televisores, refrigeradores, bombillas inteligentes o altavoces. Pero junto con las innegables comodidades, obtienes rastreadores y anuncios. Un simple bloqueador de anuncios basado en navegador no lo proteger\xe1 en este caso, pero AdGuard DNS, que puede configurar para filtrar el tr\xe1fico, bloquear contenido y rastreadores, tiene un efecto en todo el sistema."),(0,d.kt)("p",null,"Ya tenemos ",(0,d.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/es/public-dns/overview"},"AdGuard DNS p\xfablico")," y ",(0,d.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome"},"AdGuard Hogar"),". Estas soluciones funcionan bien para algunos usuarios, pero para otros, el DNS p\xfablico de AdGuard carece de la flexibilidad de configuraci\xf3n, mientras que AdGuard Hogar carece de simplicidad. Ah\xed es donde entra en juego el DNS privado de AdGuard. Tiene lo mejor de ambos mundos: ofrece personalizaci\xf3n, control e informaci\xf3n, todo a trav\xe9s de un panel de control simple y f\xe1cil de usar."),(0,d.kt)("h2",{id:"la-diferencia-entre-dns-de-adguard-privado-y-p\xfablico"},"La diferencia entre DNS de AdGuard privado y p\xfablico"),(0,d.kt)("p",null,"Aqu\xed hay una comparaci\xf3n simple de las caracter\xedsticas disponibles en los servidores DNS de AdGuard p\xfablico y Servidores DNS privados de AdGuard."),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:null},"DNS p\xfablico de AdGuard"),(0,d.kt)("th",{parentName:"tr",align:null},"DNS privado de AdGuard"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},"Cifrado de tr\xe1fico DNS"),(0,d.kt)("td",{parentName:"tr",align:null},"Cifrado de tr\xe1fico DNS")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},"Listas de bloqueo de dominio predeterminadas"),(0,d.kt)("td",{parentName:"tr",align:null},"Listas de bloqueo de dominio personalizables")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},"-"),(0,d.kt)("td",{parentName:"tr",align:null},"Reglas de filtrado DNS personalizadas con funci\xf3n de importaci\xf3n/exportaci\xf3n")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},"-"),(0,d.kt)("td",{parentName:"tr",align:null},"Request statistics (see where do your DNS requests go: which countries, which companies, etc.)")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},"-"),(0,d.kt)("td",{parentName:"tr",align:null},"Registro de consultas detallado")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},"-"),(0,d.kt)("td",{parentName:"tr",align:null},"Control parental")))),(0,d.kt)("h2",{id:"c\xf3mo-configurar-dns-privado-de-adguard"},"C\xf3mo configurar DNS privado de AdGuard"),(0,d.kt)("ol",null,(0,d.kt)("li",{parentName:"ol"},"Vaya a su ",(0,d.kt)("a",{parentName:"li",href:"https://adguard-dns.io/dashboard/"}," Panel de control DNS de AdGuard")," (si no ha iniciado sesi\xf3n, inicie sesi\xf3n con su cuenta de AdGuard)"),(0,d.kt)("li",{parentName:"ol"},'Haga clic en "Conectar dispositivo" y siga las instrucciones en pantalla')),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Supported platforms: - Android - iOS - Windows - Mac - Linux - Routers - Gaming consoles")),(0,d.kt)("h2",{id:"funciones-de-dns-de-adguard-privado"},"Funciones de DNS de AdGuard privado"),(0,d.kt)("h3",{id:"gesti\xf3n-de-listas-de-bloqueo"},"Gesti\xf3n de listas de bloqueo"),(0,d.kt)("p",null,'Con la funci\xf3n "Listas de bloqueo", puede establecer qu\xe9 dominios desea bloquear y cu\xe1les no. Elija una amplia variedad de listas de bloqueo para diferentes prop\xf3sitos.'),(0,d.kt)("p",null,(0,d.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png",alt:"Private AdGuard DNS dashboard blocklists"})),(0,d.kt)("h3",{id:"reglas-de-usuario"},"Reglas de usuario"),(0,d.kt)("p",null,"En los momentos en que ",(0,d.kt)("em",{parentName:"p"},"las listas de bloqueos preinstaladas"),' con miles de reglas no son suficientes, tenemos una funci\xf3n \xfatil llamada "Reglas de usuario". Aqu\xed puede agregar reglas personalizadas manualmente para bloquear/desbloquear un determinado dominio o importar listas de reglas personalizadas (consulte ',(0,d.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/es/general/dns-filtering-syntax"},"Sintaxis de reglas de filtro"),"). Puede exportar las listas."),(0,d.kt)("p",null,(0,d.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png",alt:"Private AdGuard DNS dashboard user rules"})),(0,d.kt)("h3",{id:"statistics"},"Statistics"),(0,d.kt)("p",null,'In "Statistics" tab you can see all the summarized statistics on DNS queries made by devices connected to your Private AdGuard  DNS. It shows the total number and geography of requests, the number of blocked requests, the list of companies the requests were addressed to, requests types and top requested domains.'),(0,d.kt)("p",null,(0,d.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png",alt:"Private AdGuard DNS dashboard statistics"})),(0,d.kt)("h3",{id:"traffic-destination"},"Traffic destination"),(0,d.kt)("p",null,"This feature shows you where DNS requests sent by your devices go. On top of seeing the map of request destinations, you can filter the information by date, device and country."),(0,d.kt)("p",null,(0,d.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png",alt:"Private AdGuard DNS dashboard traffic"})),(0,d.kt)("h3",{id:"companies"},"Companies"),(0,d.kt)("p",null,"This tab allows you to quickly check which companies send the most requests, and which companies have the most blocked requests."),(0,d.kt)("p",null,(0,d.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png",alt:"Private AdGuard DNS dashboard companies"})),(0,d.kt)("h3",{id:"query-log"},"Query log"),(0,d.kt)("p",null,"This is a detailed log where you can check out the information on every single request and also sort requests by status, type, company, device, time, country."),(0,d.kt)("p",null,(0,d.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png",alt:"Private AdGuard DNS dashboard query log"})),(0,d.kt)("h3",{id:"control-parental"},"Control parental"),(0,d.kt)("p",null,"To protect your child from online content you deem inappropriate, set up and activate the ",(0,d.kt)("em",{parentName:"p"},"Parental control"),' option. In addition to options such as "adult content" blocking and safe search, we\'ve added the ability to manually specify domains for blocking and set a schedule for the ',(0,d.kt)("em",{parentName:"p"},"Parental control")," to work accordingly."),(0,d.kt)("p",null,(0,d.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png",alt:"Private AdGuard DNS dashboard Parental Control"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"In case you don't have Private AdGuard DNS yet, you can ",(0,d.kt)("a",{parentName:"p",href:"https://adguard-dns.io/"},"get it on the official website"),".")))}m.isMDXComponent=!0}}]);