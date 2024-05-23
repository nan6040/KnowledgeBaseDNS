"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[651],{5680:(e,a,i)=>{i.d(a,{xA:()=>y,yg:()=>k});var l=i(6540);function n(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function r(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,l)}return i}function t(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?r(Object(i),!0).forEach((function(a){n(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}function d(e,a){if(null==e)return{};var i,l,n=function(e,a){if(null==e)return{};var i,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)i=r[l],a.indexOf(i)>=0||(n[i]=e[i]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)i=r[l],a.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=l.createContext({}),s=function(e){var a=l.useContext(u),i=a;return e&&(i="function"==typeof e?e(a):t(t({},a),e)),i},y=function(e){var a=s(e.components);return l.createElement(u.Provider,{value:a},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},o=l.forwardRef((function(e,a){var i=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,y=d(e,["components","mdxType","originalType","parentName"]),g=s(i),o=n,k=g["".concat(u,".").concat(o)]||g[o]||m[o]||r;return i?l.createElement(k,t(t({ref:a},y),{},{components:i})):l.createElement(k,t({ref:a},y))}));function k(e,a){var i=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=i.length,t=new Array(r);t[0]=o;var d={};for(var u in a)hasOwnProperty.call(a,u)&&(d[u]=a[u]);d.originalType=e,d[g]="string"==typeof e?e:n,t[1]=d;for(var s=2;s<r;s++)t[s]=i[s];return l.createElement.apply(null,t)}return l.createElement.apply(null,i)}o.displayName="MDXCreateElement"},5389:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>u,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var l=i(9668),n=(i(6540),i(5680));const r={title:"Genel Bak\u0131\u015f",sidebar_position:1},t=void 0,d={unversionedId:"private-dns/overview",id:"private-dns/overview",title:"Genel Bak\u0131\u015f",description:"AdGuard DNS ile, DNS isteklerini \xe7\xf6z\xfcmlemek ve reklamlar\u0131, izleyicileri ve k\xf6t\xfc ama\xe7l\u0131 alan adlar\u0131n\u0131 cihaz\u0131n\u0131za ula\u015fmadan \xf6nce engellemek i\xe7in \xf6zel DNS sunucular\u0131n\u0131z\u0131 ayarlayabilirsiniz",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/private-dns/overview.md",sourceDirName:"private-dns",slug:"/private-dns/overview",permalink:"/KnowledgeBaseDNS/tr/private-dns/overview",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Genel Bak\u0131\u015f",sidebar_position:1},sidebar:"sidebar",previous:{title:"DNS \xf6nbelle\u011fi nas\u0131l temizlenir",permalink:"/KnowledgeBaseDNS/tr/public-dns/solving-problems/how-to-flush-dns-cache"},next:{title:"Genel Bak\u0131\u015f",permalink:"/KnowledgeBaseDNS/tr/private-dns/api/overview"}},u={},s=[{value:"Genel",id:"genel",level:2},{value:"\xd6zel AdGuard DNS&#39;e neden ihtiyac\u0131n\u0131z var",id:"\xf6zel-adguard-dnse-neden-ihtiyac\u0131n\u0131z-var",level:3},{value:"\xd6zel ve genel AdGuard DNS aras\u0131ndaki fark",id:"\xf6zel-ve-genel-adguard-dns-aras\u0131ndaki-fark",level:3},{value:"\xd6zel AdGuard DNS nas\u0131l kurulur",id:"\xf6zel-adguard-dns-nas\u0131l-kurulur",level:2},{value:"DoH, DoT ve DoQ&#39;yu destekleyen cihazlar i\xe7in",id:"doh-dot-ve-doqyu-destekleyen-cihazlar-i\xe7in",level:3},{value:"DoH, DoT ve DoQ&#39;yu desteklemeyen cihazlar i\xe7in",id:"doh-dot-ve-doqyu-desteklemeyen-cihazlar-i\xe7in",level:3},{value:"\xd6zel IP adresleri",id:"\xf6zel-ip-adresleri",level:4},{value:"Ba\u011fl\u0131 IP",id:"ba\u011fl\u0131-ip",level:4},{value:"\xd6zel AdGuard DNS \xf6zellikleri",id:"\xf6zel-adguard-dns-\xf6zellikleri",level:2},{value:"\u0130statistikler",id:"i\u0307statistikler",level:3},{value:"Trafik istikameti",id:"trafik-istikameti",level:3},{value:"\u015eirketler",id:"\u015firketler",level:3},{value:"Sorgu g\xfcnl\xfc\u011f\xfc",id:"sorgu-g\xfcnl\xfc\u011f\xfc",level:3},{value:"Sunucu ayarlar\u0131",id:"sunucu-ayarlar\u0131",level:2},{value:"Engel listeleri y\xf6netimi",id:"engel-listeleri-y\xf6netimi",level:3},{value:"G\xfcvenlik ayarlar\u0131",id:"g\xfcvenlik-ayarlar\u0131",level:3},{value:"Ebeveyn denetimi",id:"ebeveyn-denetimi",level:3},{value:"Kullan\u0131c\u0131 kurallar\u0131",id:"kullan\u0131c\u0131-kurallar\u0131",level:3},{value:"Kimlik do\u011frulamal\u0131 DNS-over-HTTPS",id:"kimlik-do\u011frulamal\u0131-dns-over-https",level:3},{value:"Geli\u015fmi\u015f",id:"geli\u015fmi\u015f",level:2},{value:"Eri\u015fim ayarlar\u0131",id:"eri\u015fim-ayarlar\u0131",level:3}],y={toc:s},g="wrapper";function m(e){let{components:a,...i}=e;return(0,n.yg)(g,(0,l.A)({},y,i,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"AdGuard DNS ile, DNS isteklerini \xe7\xf6z\xfcmlemek ve reklamlar\u0131, izleyicileri ve k\xf6t\xfc ama\xe7l\u0131 alan adlar\u0131n\u0131 cihaz\u0131n\u0131za ula\u015fmadan \xf6nce engellemek i\xe7in \xf6zel DNS sunucular\u0131n\u0131z\u0131 ayarlayabilirsiniz"),(0,n.yg)("p",{parentName:"admonition"},"H\u0131zl\u0131 ba\u011flant\u0131: ",(0,n.yg)("a",{parentName:"p",href:"https://agrd.io/download-dns"},"AdGuard DNS'i dene"))),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png",alt:"\xd6zel AdGuard DNS pano esas"})),(0,n.yg)("h2",{id:"genel"},"Genel"),(0,n.yg)("iframe",{width:"560",height:"315",class:"youtube-video",src:"https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M",title:"YouTube video oynat\u0131c\u0131",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.yg)("p",null,"\xd6zel AdGuard DNS, trafik \u015fifreleme ve alan ad\u0131 engel listeleri de dahil olmak \xfczere genel bir AdGuard DNS sunucusunun t\xfcm avantajlar\u0131n\u0131 sunar. Ayr\u0131ca esnek \xf6zelle\u015ftirme, DNS istatistikleri ve Ebeveyn denetimi gibi ek \xf6zellikler de sunar. T\xfcm bu se\xe7eneklere kullan\u0131c\u0131 dostu bir g\xf6sterge pano arac\u0131l\u0131\u011f\u0131yla kolayca eri\u015filebilir ve y\xf6netilebilir."),(0,n.yg)("h3",{id:"\xf6zel-adguard-dnse-neden-ihtiyac\u0131n\u0131z-var"},"\xd6zel AdGuard DNS'e neden ihtiyac\u0131n\u0131z var"),(0,n.yg)("p",null,"Bug\xfcn internete her \u015feyi ba\u011flayabilirsiniz: TV'ler, buzdolaplar\u0131, ak\u0131ll\u0131 ampuller veya hoparl\xf6rler. Ancak inkar edilemez kolayl\u0131klar\u0131n yan\u0131 s\u0131ra izleyiciler ve reklamlar elde edersiniz. Basit bir taray\u0131c\u0131 tabanl\u0131 reklam engelleyici bu durumda sizi korumayacakt\u0131r, ancak trafi\u011fi filtrelemek, i\xe7eri\u011fi ve izleyicileri engellemek i\xe7in ayarlayabilece\u011finiz AdGuard DNS, sistem genelinde bir etkiye sahiptir."),(0,n.yg)("p",null,"Bir zamanlar, AdGuard \xfcr\xfcn grubu yaln\u0131zca ",(0,n.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/tr/public-dns/overview"},"genel AdGuard DNS")," ve ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome"},"AdGuard Home")," i\xe7eriyordu. Bu \xe7\xf6z\xfcmler baz\u0131 kullan\u0131c\u0131lar i\xe7in iyi \xe7al\u0131\u015f\u0131yor, ancak di\u011ferleri i\xe7in genel AdGuard DNS yap\u0131land\u0131rma esnekli\u011finden yoksunken AdGuard Home basitlikten yoksun. \u0130\u015fte bu noktada \xf6zel AdGuard DNS devreye giriyor. Her iki d\xfcnyan\u0131n da en iyisine sahiptir: \xf6zelle\u015ftirilebilirlik, kontrol ve bilgi sunar - t\xfcm\xfc basit, kullan\u0131m\u0131 kolay bir pano arac\u0131l\u0131\u011f\u0131yla."),(0,n.yg)("h3",{id:"\xf6zel-ve-genel-adguard-dns-aras\u0131ndaki-fark"},"\xd6zel ve genel AdGuard DNS aras\u0131ndaki fark"),(0,n.yg)("p",null,"Burada genel ve \xf6zel AdGuard DNS'de bulunan \xf6zelliklerin basit bir kar\u015f\u0131la\u015ft\u0131rmas\u0131n\u0131 bulabilirsiniz."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Genel AdGuard DNS"),(0,n.yg)("th",{parentName:"tr",align:null},"\xd6zel AdGuard DNS"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"DNS trafik \u015fifreleme"),(0,n.yg)("td",{parentName:"tr",align:null},"DNS trafik \u015fifreleme")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\xd6nceden belirlenmi\u015f alan ad\u0131 engel listeleri"),(0,n.yg)("td",{parentName:"tr",align:null},"\xd6zelle\u015ftirilebilir alan ad\u0131 engel listeleri")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"\u0130\xe7e ve d\u0131\u015fa aktarma \xf6zelli\u011fine sahip \xf6zel DNS filtreleme kurallar\u0131")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"\u0130stek istatistikleri (DNS isteklerinizin nereye gitti\u011fini g\xf6r\xfcn: hangi \xfclkeler, hangi \u015firketler, vb.)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"Ayr\u0131nt\u0131l\u0131 sorgu g\xfcnl\xfc\u011f\xfc")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"Ebeveyn denetimi")))),(0,n.yg)("h2",{id:"\xf6zel-adguard-dns-nas\u0131l-kurulur"},"\xd6zel AdGuard DNS nas\u0131l kurulur"),(0,n.yg)("h3",{id:"doh-dot-ve-doqyu-destekleyen-cihazlar-i\xe7in"},"DoH, DoT ve DoQ'yu destekleyen cihazlar i\xe7in"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://agrd.io/download-dns"},"AdGuard DNS panonuza")," gidin (giri\u015f yapmad\u0131ysan\u0131z AdGuard hesab\u0131n\u0131z\u0131 kullanarak giri\u015f yap\u0131n)"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("em",{parentName:"li"},"Cihaz\u0131 ba\u011fla")," \xf6\u011fesine t\u0131klay\u0131n ve ekrandaki talimatlar\u0131 izleyin")),(0,n.yg)("admonition",{title:"Desteklenen platformlar:",type:"note"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"Android"),(0,n.yg)("li",{parentName:"ul"},"iOS"),(0,n.yg)("li",{parentName:"ul"},"Windows"),(0,n.yg)("li",{parentName:"ul"},"Mac"),(0,n.yg)("li",{parentName:"ul"},"Linux"),(0,n.yg)("li",{parentName:"ul"},"Y\xf6nlendiriciler"),(0,n.yg)("li",{parentName:"ul"},"Oyun konsollar\u0131"),(0,n.yg)("li",{parentName:"ul"},"Ak\u0131ll\u0131 TV'ler"))),(0,n.yg)("p",null,"AdGuard DNS paneline ekledi\u011finiz her cihaz\u0131n, modern \u015fifreli DNS protokollerini (DoH, DoT ve DoQ) desteklemesi durumunda kullan\u0131labilecek kendi benzersiz adresi vard\u0131r."),(0,n.yg)("h3",{id:"doh-dot-ve-doqyu-desteklemeyen-cihazlar-i\xe7in"},"DoH, DoT ve DoQ'yu desteklemeyen cihazlar i\xe7in"),(0,n.yg)("p",null,"Cihaz \u015fifrelenmi\u015f DNS'i desteklemiyorsa ve d\xfcz DNS kullanman\u0131z gerekiyorsa, AdGuard DNS'nin cihaz\u0131 tan\u0131mas\u0131na izin vermenin iki yolu daha vard\u0131r \u2014 \xf6zel IP adresleri kullan\u0131n veya cihaz\u0131n IP adresini ba\u011flay\u0131n."),(0,n.yg)("admonition",{title:"Not",type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Yaln\u0131zca ba\u015fka se\xe7ene\u011finiz yoksa d\xfcz DNS adreslerini kullan\u0131n: bu, DNS isteklerinin g\xfcvenli\u011fini azalt\u0131r. D\xfcz DNS kullanmaya karar verirseniz, \xf6zel IP adresleri se\xe7menizi \xf6neririz.")),(0,n.yg)("h4",{id:"\xf6zel-ip-adresleri"},"\xd6zel IP adresleri"),(0,n.yg)("p",null,"AdGuard DNS'e ba\u011flad\u0131\u011f\u0131n\u0131z her cihaz i\xe7in, cihaz ayarlar\u0131n\u0131za girebilece\u011finiz iki \xf6zel IPv6 adresi sunulacakt\u0131r. Her iki IPv6 adresini kullanmak zorunlu de\u011fildir, ancak genellikle cihazlar sizden iki IPv6 adresi girmenizi isteyebilir."),(0,n.yg)("p",null,"Bunlara ba\u011fland\u0131\u011f\u0131n\u0131zda, AdGuard DNS hangi cihaz\u0131n DNS istekleri g\xf6nderdi\u011fini belirleyebilecek ve bunun i\xe7in istatistikleri g\xf6r\xfcnt\xfcleyebilecektir. Ve DNS kurallar\u0131n\u0131 \xf6zellikle bu cihaz i\xe7in yap\u0131land\u0131rabileceksiniz."),(0,n.yg)("p",null,"Ne yaz\u0131k ki, t\xfcm servis sa\u011flay\u0131c\u0131lar IPv6 deste\u011fi sunmaz ve t\xfcm cihazlar IPv6 adreslerini yap\u0131land\u0131rman\u0131za izin vermez. E\u011fer durumunuz buysa, Ba\u011fl\u0131 IP y\xf6ntemine g\xfcvenmeniz gerekebilir."),(0,n.yg)("h4",{id:"ba\u011fl\u0131-ip"},"Ba\u011fl\u0131 IP"),(0,n.yg)("p",null,"Cihaz\u0131n\u0131z\u0131 Ba\u011fl\u0131 IP \xfczerinden AdGuard DNS'e ba\u011flarsan\u0131z, hizmet bu IP adresinden gelen t\xfcm d\xfcz DNS isteklerini bu \"cihaza\" do\u011fru sayar. Bu ba\u011flant\u0131 y\xf6ntemiyle, cihaz\u0131n IP'si her de\u011fi\u015fti\u011finde, yani her yeniden ba\u015flatman\u0131n ard\u0131ndan elle veya \xf6zel bir program arac\u0131l\u0131\u011f\u0131yla yeniden ba\u011flanman\u0131z gerekir."),(0,n.yg)("p",null,"IP ba\u011flamak i\xe7in tek gereksinim ",(0,n.yg)("strong",{parentName:"p"},"konut IP adresi olmas\u0131d\u0131r"),"."),(0,n.yg)("admonition",{title:"Not",type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Konut IP adresi, bir konut \u0130SS'sine ba\u011fl\u0131 bir cihaza atanan IP adresidir. Tipik olarak fiziksel bir konumla ili\u015fkilendirilir ve bireysel evlere veya dairelere atan\u0131r. Konut IP adresleri, normal internet kullan\u0131c\u0131lar\u0131 taraf\u0131ndan web'de gezinme, sosyal medya platformlar\u0131na eri\u015fim, e-posta g\xf6nderme veya i\xe7erik canl\u0131 yay\u0131n ak\u0131\u015f\u0131 gibi g\xfcnl\xfck \xe7evrimi\xe7i etkinlikleri i\xe7in kullan\u0131l\u0131r.")),(0,n.yg)("p",null,"Bir konut IP adresini ba\u011flamaya \xe7al\u0131\u015f\u0131yorsan\u0131z ve AdGuard DNS buna izin vermiyorsa, l\xfctfen ",(0,n.yg)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com")," adresinden destek ekibimizle ileti\u015fime ge\xe7in."),(0,n.yg)("h2",{id:"\xf6zel-adguard-dns-\xf6zellikleri"},"\xd6zel AdGuard DNS \xf6zellikleri"),(0,n.yg)("h3",{id:"i\u0307statistikler"},"\u0130statistikler"),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"\u0130statistikler")," sekmesinde \xd6zel AdGuard DNS'inize ba\u011fl\u0131 cihazlar taraf\u0131ndan yap\u0131lan DNS sorgular\u0131na ili\u015fkin t\xfcm \xf6zet istatistikleri g\xf6rebilirsiniz. \u0130steklerin toplam say\u0131s\u0131n\u0131 ve co\u011frafyas\u0131n\u0131, engellenen isteklerin say\u0131s\u0131n\u0131, isteklerin y\xf6nlendirildi\u011fi \u015firketlerin listesini, istek t\xfcrlerini ve ba\u015fl\u0131ca istenen alan adlar\u0131n\u0131 g\xf6sterir."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png",alt:"\xd6zel AdGuard DNS panosu istatistikler"})),(0,n.yg)("h3",{id:"trafik-istikameti"},"Trafik istikameti"),(0,n.yg)("p",null,"Bu \xf6zellik, cihazlar\u0131n\u0131z taraf\u0131ndan g\xf6nderilen DNS isteklerinin nereye gitti\u011fini g\xf6sterir. \u0130stek istikametlerinin haritas\u0131n\u0131 g\xf6rmenin yan\u0131 s\u0131ra bilgileri tarihe, cihaza ve \xfclkeye g\xf6re filtreleyebilirsiniz."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png",alt:"\xd6zel AdGuard DNS panosu trafik"})),(0,n.yg)("h3",{id:"\u015firketler"},"\u015eirketler"),(0,n.yg)("p",null,"Bu sekme, hangi \u015firketlerin en \xe7ok istek g\xf6nderdi\u011fini ve hangi \u015firketlerin en \xe7ok engellenen istekleri oldu\u011funu h\u0131zl\u0131 bir \u015fekilde kontrol etmenizi sa\u011flar."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png",alt:"\xd6zel AdGuard DNS panosu \u015firketler"})),(0,n.yg)("h3",{id:"sorgu-g\xfcnl\xfc\u011f\xfc"},"Sorgu g\xfcnl\xfc\u011f\xfc"),(0,n.yg)("p",null,"Bu, her bir istekle ilgili bilgileri kontrol edebilece\u011finiz ve ayr\u0131ca istekleri duruma, t\xfcre, \u015firkete, cihaza, zamana, \xfclkeye g\xf6re s\u0131ralayabilece\u011finiz ayr\u0131nt\u0131l\u0131 bir g\xfcnl\xfckt\xfcr."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png",alt:"\xd6zel AdGuard DNS panosu sorgu g\xfcnl\xfc\u011f\xfc"})),(0,n.yg)("h2",{id:"sunucu-ayarlar\u0131"},"Sunucu ayarlar\u0131"),(0,n.yg)("p",null,"Bu b\xf6l\xfcmde, \xf6zel AdGuard DNS'nin \xe7al\u0131\u015fmas\u0131n\u0131 \xf6zelle\u015ftirmenize olanak tan\u0131yan ve internetin tam istedi\u011finiz gibi \xe7al\u0131\u015fmas\u0131n\u0131 sa\u011flayan bir dizi ayar bulunur."),(0,n.yg)("h3",{id:"engel-listeleri-y\xf6netimi"},"Engel listeleri y\xf6netimi"),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Engel listeleri")," \xf6zelli\u011fi, hangi alan adlar\u0131n\u0131 engellemek istedi\u011finizi ve hangilerini istemedi\u011finizi belirtmenize olanak tan\u0131r. Farkl\u0131 ama\xe7lara y\xf6nelik \xe7e\u015fitli engel listeleri aras\u0131ndan se\xe7im yap\u0131n."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png",alt:"\xd6zel AdGuard DNS panosu engel listeleri"})),(0,n.yg)("h3",{id:"g\xfcvenlik-ayarlar\u0131"},"G\xfcvenlik ayarlar\u0131"),(0,n.yg)("p",null,"\xc7evrimi\xe7i doland\u0131r\u0131c\u0131lar\u0131n kulland\u0131\u011f\u0131 t\xfcm hilelerin fark\u0131nda olsan\u0131z bile, yanl\u0131\u015fl\u0131kla k\xf6t\xfc ama\xe7l\u0131 bir ba\u011flant\u0131ya t\u0131klama riskiniz her zaman vard\u0131r. Kendinizi bu t\xfcr durumlardan korumak i\xe7in ",(0,n.yg)("em",{parentName:"p"},"G\xfcvenlik ayarlar\u0131")," \xf6\u011fesine gidin ve burada listelenen se\xe7eneklerin yan\u0131ndaki kutular\u0131 i\u015faretleyin."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"K\xf6t\xfc ama\xe7l\u0131, kimlik av\u0131 ve doland\u0131r\u0131c\u0131l\u0131k alan adlar\u0131n\u0131 engelle")," \xf6zelli\u011fi, \xf6zel veri taban\u0131nda bulunan alan adlar\u0131n\u0131 engeller. Ve ",(0,n.yg)("em",{parentName:"p"},"Yeni kaydedilen alan adlar\u0131n\u0131 engelle")," 30 g\xfcnden daha k\u0131sa bir s\xfcre \xf6nce kaydedilen ve genellikle \xe7evrimi\xe7i gizlili\u011finiz a\xe7\u0131s\u0131ndan riskli oldu\u011fu d\xfc\u015f\xfcn\xfclen t\xfcm alan adlar\u0131n\u0131 eneller."),(0,n.yg)("h3",{id:"ebeveyn-denetimi"},"Ebeveyn denetimi"),(0,n.yg)("p",null,"\xc7ocu\u011funuzu uygunsuz buldu\u011funuz \xe7evrimi\xe7i i\xe7erikten korumak i\xe7in ",(0,n.yg)("em",{parentName:"p"},"Ebeveyn denetimi"),' se\xe7ene\u011fini ayarlay\u0131n ve etkinle\u015ftirin. "Yeti\u015fkinlere y\xf6nelik i\xe7erik" engelleme ve g\xfcvenli arama gibi se\xe7eneklere ek olarak, engelleme i\xe7in etki alanlar\u0131n\u0131 manuel olarak belirleme ve ',(0,n.yg)("em",{parentName:"p"},"Ebeveyn kontrol\xfc"),"'n\xfcn buna g\xf6re \xe7al\u0131\u015fmas\u0131 i\xe7in bir zamanlama ayarlama olana\u011f\u0131 ekledik."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png",alt:"Ebeveyn denetimi"})),(0,n.yg)("h3",{id:"kullan\u0131c\u0131-kurallar\u0131"},"Kullan\u0131c\u0131 kurallar\u0131"),(0,n.yg)("p",null,"Binlerce kurala sahip \xf6nceden y\xfcklenmi\u015f engel listelerinin yeterli olmad\u0131\u011f\u0131 durumlar i\xe7in ",(0,n.yg)("em",{parentName:"p"},"Kullan\u0131c\u0131 kurallar\u0131")," ad\u0131 verilen kullan\u0131\u015fl\u0131 bir \xf6zelli\u011fimiz var. Burada belirli bir alan ad\u0131n\u0131 engellemek/engelini kald\u0131rmak i\xe7in elle \xf6zel kurallar ekleyebilir veya \xf6zel kural listelerini i\xe7e aktarabilirsiniz (bkz. ",(0,n.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/tr/general/dns-filtering-syntax"},"DNS filtreleme kurallar\u0131 s\xf6z dizimi"),"). Listeleri d\u0131\u015fa aktarabilirsiniz."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png",alt:"\xd6zel AdGuard DNS panosu kullan\u0131c\u0131 kurallar\u0131"})),(0,n.yg)("h3",{id:"kimlik-do\u011frulamal\u0131-dns-over-https"},"Kimlik do\u011frulamal\u0131 DNS-over-HTTPS"),(0,n.yg)("p",null,"Kimlik do\u011frulamal\u0131 DNS-over-HTTPS, sunucuya ba\u011flanmak i\xe7in bir giri\u015f yapma ve parola sa\u011flar. Bu, yetkisiz kullan\u0131c\u0131lar\u0131n eri\u015fimini s\u0131n\u0131rland\u0131rabilir ve g\xfcvenli\u011fi art\u0131rabilir."),(0,n.yg)("p",null,"Bu \xf6zelli\u011fi etkinle\u015ftirmek i\xe7in ",(0,n.yg)("em",{parentName:"p"},"Sunucu ayarlar\u0131")," \u2192 ",(0,n.yg)("em",{parentName:"p"},"Ayg\u0131tlar")," \u2192 ",(0,n.yg)("em",{parentName:"p"},"Ayarlar")," \xf6\u011fesine gidin ve DNS sunucusunu kimlik do\u011frulamal\u0131 olan sunucu olarak de\u011fi\u015ftirin. Alternatif protokol kullan\u0131m\u0131n\u0131 devre d\u0131\u015f\u0131 b\u0131rakmak, \xf6zel DNS-over-HTTPS kimlik do\u011frulamas\u0131 sa\u011flamak ve \xfc\xe7\xfcnc\xfc taraf eri\u015fimini engellemek i\xe7in ",(0,n.yg)("em",{parentName:"p"},"Di\u011fer protokolleri reddet ")," \xf6\u011fesini se\xe7in."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png",alt:"Kimlik do\u011frulamal\u0131 DNS-over-HTTPS"})),(0,n.yg)("h2",{id:"geli\u015fmi\u015f"},"Geli\u015fmi\u015f"),(0,n.yg)("p",null,"Burada AdGuard DNS'nin engellenen alan adlar\u0131na yan\u0131t verme \u015feklini ayarlayabilirsiniz:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Varsay\u0131lan - s\u0131f\u0131r IP adresi"),(0,n.yg)("li",{parentName:"ul"},"NXDOMAIN \u2014 alan ad\u0131 mevcut de\u011fil"),(0,n.yg)("li",{parentName:"ul"},"REFUSED \u2014 sunucu iste\u011fi i\u015flemeyi reddetti"),(0,n.yg)("li",{parentName:"ul"},"\xd6zel IP \u2014 elle bir IP adresi belirtebilirsiniz")),(0,n.yg)("p",null,"Ayr\u0131ca, ",(0,n.yg)("em",{parentName:"p"},"kullan\u0131m s\xfcresi")," (TTL) ayar\u0131n\u0131 yapabilirsiniz. Bu parametre, bir istemci ayg\u0131t\u0131n bir DNS iste\u011fine verilen yan\u0131t\u0131 \xf6nbelle\u011fe ald\u0131\u011f\u0131 s\xfcreyi (saniye cinsinden) tan\u0131mlar. Daha y\xfcksek bir kullan\u0131m s\xfcresi, daha \xf6nce engellenmi\u015f bir alan ad\u0131n\u0131n engeli kald\u0131r\u0131lsa bile bir s\xfcre daha engellenmi\u015f olarak g\xf6r\xfcnebilece\u011fi anlam\u0131na gelir. Kullan\u0131m s\xfcresi de\u011ferinin 0 olmas\u0131 cihaz\u0131n yan\u0131tlar\u0131 \xf6nbelle\u011fe almad\u0131\u011f\u0131n\u0131 g\xf6sterir."),(0,n.yg)("p",null,"Geli\u015fmi\u015f b\xf6l\xfcm\xfcnde, \xf6zelle\u015ftirilebilecek \xfc\xe7 se\xe7enek vard\u0131r:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"iCloud Private Relay'e eri\u015fimi engelle. iCloud \xd6zel Ge\xe7i\u015fi kullanan ayg\u0131tlar DNS ayarlar\u0131n\u0131 yok sayabilir. Bu se\xe7ene\u011fin etkinle\u015ftirilmesi, AdGuard DNS'nin cihaz\u0131n\u0131z\u0131 etkili bir \u015fekilde koruyabilmesini sa\u011flar."),(0,n.yg)("li",{parentName:"ul"},"Firefox canary alan ad\u0131n\u0131 engelle. Bu ayar, AdGuard DNS sistem genelinde DNS hizmeti olarak ayarland\u0131\u011f\u0131nda Firefox'un otomatik olarak DoH \xe7\xf6z\xfcmleyicisine ge\xe7mesini engeller."),(0,n.yg)("li",{parentName:"ul"},"IP adreslerini g\xfcnl\xfc\u011fe kaydet. Bu se\xe7enek etkinle\u015ftirilirse, gelen DNS istekleriyle ili\u015fkili IP adresleri kaydedilecek ve Sorgu g\xfcnl\xfc\u011f\xfcnde g\xf6r\xfcnt\xfclenecektir.")),(0,n.yg)("h3",{id:"eri\u015fim-ayarlar\u0131"},"Eri\u015fim ayarlar\u0131"),(0,n.yg)("p",null,"Burada a\u015fa\u011f\u0131daki ayarlar\u0131 yap\u0131land\u0131rarak DNS sunucunuza eri\u015fimi y\xf6netebilirsiniz:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u0130zin verilen istemciler. Hangi istemcilerin DNS sunucunuzu kullanmas\u0131na izin verildi\u011fini belirtin"),(0,n.yg)("li",{parentName:"ul"},"\u0130zin verilmeyen istemciler. DNS sunucunuzu kullanmas\u0131 reddedilen istemcileri listeleyin"),(0,n.yg)("li",{parentName:"ul"},"\u0130zin verilmeyen alan adlar\u0131. DNS sunucunuza eri\u015fimi reddedilecek alan adlar\u0131n\u0131 belirtin. Joker karakterler ve DNS filtreleme kurallar\u0131 da burada listelenebilir")),(0,n.yg)("p",null,"Bu se\xe7enekleri ayarlayarak DNS sunucunuzu kimlerin kulland\u0131\u011f\u0131n\u0131 kontrol edebilir ve olas\u0131 DDoS sald\u0131r\u0131lar\u0131n\u0131 \xf6nleyebilirsiniz. \u0130zin verilmeyen istekler Sorgu g\xfcnl\xfc\u011f\xfcn\xfczde g\xf6r\xfcnmez ve \xfccretsizdir."))}m.isMDXComponent=!0}}]);