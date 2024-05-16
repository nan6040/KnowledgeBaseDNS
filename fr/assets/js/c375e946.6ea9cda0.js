"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[561],{5680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>g});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?t.createElement(g,s(s({ref:n},d),{},{components:r})):t.createElement(g,s({ref:n},d))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},224:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(9668),a=(r(6540),r(5680));const o={title:"Comment vider le cache DNS",sidebar_position:1},s=void 0,i={unversionedId:"public-dns/solving-problems/how-to-flush-dns-cache",id:"public-dns/solving-problems/how-to-flush-dns-cache",title:"Comment vider le cache DNS",description:"Nous expliquons ici comment vous pouvez vider le cache DNS pour r\xe9soudre les probl\xe8mes de DNS public. Vous pouvez utiliser le Bloqueur AdGuard pour configurer des serveurs DNS, y compris des serveurs chiffr\xe9s",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/public-dns/solving-problems/how-to-flush-dns-cache.md",sourceDirName:"public-dns/solving-problems",slug:"/public-dns/solving-problems/how-to-flush-dns-cache",permalink:"/KnowledgeBaseDNS/fr/public-dns/solving-problems/how-to-flush-dns-cache",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/public-dns/solving-problems/how-to-flush-dns-cache.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Comment vider le cache DNS",sidebar_position:1},sidebar:"sidebar",previous:{title:"Vue d'ensemble",permalink:"/KnowledgeBaseDNS/fr/public-dns/overview"},next:{title:"Vue d'ensemble",permalink:"/KnowledgeBaseDNS/fr/private-dns/overview"}},l={},c=[{value:"Qu&#39;est-ce que le cache DNS\xa0?",id:"quest-ce-que-le-cache-dns",level:2},{value:"Quand peut-il s&#39;av\xe9rer n\xe9cessaire de vider le cache",id:"quand-peut-il-sav\xe9rer-n\xe9cessaire-de-vider-le-cache",level:2},{value:"Comment vider le cache DNS sur diff\xe9rents syst\xe8mes d&#39;exploitation",id:"comment-vider-le-cache-dns-sur-diff\xe9rents-syst\xe8mes-dexploitation",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Clear DNS cache via Chrome",id:"clear-dns-cache-via-chrome",level:4},{value:"Modify the Wi-Fi network to Static",id:"modify-the-wi-fi-network-to-static",level:4},{value:"Reset network settings",id:"reset-network-settings",level:4},{value:"macOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"systemd-resolved",id:"systemd-resolved",level:4},{value:"DNSMasq",id:"dnsmasq",level:4},{value:"NSCD",id:"nscd",level:4},{value:"BIND",id:"bind",level:4},{value:"Comment vider le cache DNS dans Chrome",id:"comment-vider-le-cache-dns-dans-chrome",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Nous expliquons ici comment vous pouvez vider le cache DNS pour r\xe9soudre les probl\xe8mes de DNS public. Vous pouvez utiliser le Bloqueur AdGuard pour configurer des serveurs DNS, y compris des serveurs chiffr\xe9s"),(0,a.yg)("p",{parentName:"admonition"},"Quick link: ",(0,a.yg)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"Download AdGuard Ad Blocker"))),(0,a.yg)("h2",{id:"quest-ce-que-le-cache-dns"},"Qu'est-ce que le cache DNS\xa0?"),(0,a.yg)("p",null,"Le cache DNS stocke les adresses IP des sites visit\xe9s sur l'ordinateur local pour qu'ils se chargent plus rapidement la prochaine fois. Au lieu d\u2019effectuer une longue recherche DNS, le syst\xe8me r\xe9pond aux requ\xeates avec des enregistrements DNS provenant du cache DNS temporaire."),(0,a.yg)("p",null,"Le cache DNS contient ce qu'on appelle les ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records"},"enregistrements de ressource (RR)"),", qui sont\xa0:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Donn\xe9es ressources (ou rdata)"),";"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Type d'enregistrement"),";"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Nom d'enregistrement"),";"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"TTL (dur\xe9e de vie)"),";"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Classe"),";"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Longueur des donn\xe9es de la ressource"),".")),(0,a.yg)("h2",{id:"quand-peut-il-sav\xe9rer-n\xe9cessaire-de-vider-le-cache"},"Quand peut-il s'av\xe9rer n\xe9cessaire de vider le cache"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Vous avez chang\xe9 votre fournisseur DNS pour AdGuard DNS.")," Si l'utilisateur a modifi\xe9 son DNS, l'affichage du r\xe9sultat peut prendre un certain temps \xe0 cause du cache."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Vous recevez r\xe9guli\xe8rement une erreur 404.")," Par exemple, le site web a \xe9t\xe9 transf\xe9r\xe9 sur un autre serveur et son adresse IP a chang\xe9. Pour que le navigateur ouvre le site web \xe0 partir de la nouvelle adresse IP, vous devez supprimer l'adresse IP mise en cache du cache DNS."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Vous souhaitez am\xe9liorer votre confidentialit\xe9.")),(0,a.yg)("h2",{id:"comment-vider-le-cache-dns-sur-diff\xe9rents-syst\xe8mes-dexploitation"},"Comment vider le cache DNS sur diff\xe9rents syst\xe8mes d'exploitation"),(0,a.yg)("h3",{id:"ios"},"iOS"),(0,a.yg)("p",null,"Il existe de diff\xe9rentes fa\xe7ons de vider le cache DNS sur votre iPad ou iPhone."),(0,a.yg)("p",null,"Le plus simple est d'activer le mode Avion (par exemple, dans le Centre de contr\xf4le ou dans l'application Param\xe8tres) et de le d\xe9sactiver \xe0 nouveau. Le cache DNS sera vid\xe9."),(0,a.yg)("p",null,"Une autre option consiste \xe0 r\xe9initialiser les param\xe8tres r\xe9seau de votre appareil dans l'application Param\xe8tres. Ouvrez ",(0,a.yg)("em",{parentName:"p"},"G\xe9n\xe9ral"),", faites d\xe9filer vers le bas, recherchez ",(0,a.yg)("em",{parentName:"p"},"R\xe9initialiser")," et appuyez sur ",(0,a.yg)("em",{parentName:"p"},"R\xe9initialiser les param\xe8tres r\xe9seau"),"."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"By doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.")),(0,a.yg)("h3",{id:"android"},"Android"),(0,a.yg)("p",null,"There are different ways to clear the DNS cache on your Android device. The exact steps may vary depending on the version of Android you're using and the device manufacturer."),(0,a.yg)("h4",{id:"clear-dns-cache-via-chrome"},"Clear DNS cache via Chrome"),(0,a.yg)("p",null,"Google Chrome, often the default browser on Android, has its own DNS cache. To flush this cache in the Chrome browser, follow the instructions below:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Launch Chrome on your Android device"),(0,a.yg)("li",{parentName:"ol"},"Type ",(0,a.yg)("inlineCode",{parentName:"li"},"chrome://net-internals/#DNS")," in the address bar"),(0,a.yg)("li",{parentName:"ol"},"On the DNS lookup page, choose DNS from the menu on the left"),(0,a.yg)("li",{parentName:"ol"},"In the panel on the right, tap the ",(0,a.yg)("em",{parentName:"li"},"Clear Host Cache")," button to clear the DNS cache on your device")),(0,a.yg)("h4",{id:"modify-the-wi-fi-network-to-static"},"Modify the Wi-Fi network to Static"),(0,a.yg)("p",null,"To clear your Android device's DNS cache by changing Wi-Fi network settings to Static, follow these steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Go to ",(0,a.yg)("em",{parentName:"li"},"Settings \u2192 Wi-Fi")," and choose the network you're connected to"),(0,a.yg)("li",{parentName:"ol"},"Look for IP settings and select ",(0,a.yg)("em",{parentName:"li"},"Static")),(0,a.yg)("li",{parentName:"ol"},"Fill in the required fields. You can get the necessary information from your network administrator or from your router's configuration page"),(0,a.yg)("li",{parentName:"ol"},"After entering the required information, reconnect to your Wi-Fi network. This action will force your device to update its IP and DNS settings and clear the DNS cache")),(0,a.yg)("h4",{id:"reset-network-settings"},"Reset network settings"),(0,a.yg)("p",null,"Une autre option consiste \xe0 r\xe9initialiser les param\xe8tres r\xe9seau de votre appareil dans l'application Param\xe8tres. Open ",(0,a.yg)("em",{parentName:"p"},"Settings \u2192 System \u2192 Advanced \u2192 Reset options \u2192 Reset network settings")," and tap ",(0,a.yg)("em",{parentName:"p"},"Reset Settings")," to confirm."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"By doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.")),(0,a.yg)("h3",{id:"macos"},"macOS"),(0,a.yg)("p",null,"To clear the DNS cache on macOS, open the Terminal (you can find it by using the Spotlight search \u2014 to do that, press Command+Space and type ",(0,a.yg)("em",{parentName:"p"},"Terminal"),") and enter the following command:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"sudo killall -HUP mDNSResponder")),(0,a.yg)("p",null,"On macOS Big Sur 11.2.0 and macOS Monterey 12.0.0, you may also use this command:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"sudo dscacheutil -flushcache")),(0,a.yg)("p",null,"After that, enter your administrator password to complete the process."),(0,a.yg)("h3",{id:"windows"},"Windows"),(0,a.yg)("p",null,"To flush DNS cache on your Windows device, do the following:"),(0,a.yg)("p",null,"Open the Command Prompt as an administrator. You can find it in the Start Menu by typing ",(0,a.yg)("em",{parentName:"p"},"command prompt")," or ",(0,a.yg)("em",{parentName:"p"},"cmd"),". Then type ",(0,a.yg)("inlineCode",{parentName:"p"},"ipconfig /flushdns")," and press Enter."),(0,a.yg)("p",null,"You will see the line ",(0,a.yg)("em",{parentName:"p"},"Successfully flushed the DNS Resolver Cache"),". Done!"),(0,a.yg)("h3",{id:"linux"},"Linux"),(0,a.yg)("p",null,"Linux does not have OS-level DNS caching unless a caching service such as systemd-resolved, DNSMasq, BIND or Nscd is installed and running. The process of clearing the DNS cache depends on the Linux distribution and the caching service used."),(0,a.yg)("p",null,"For each distribution you need to start a terminal window. Press Ctrl+Alt+T on your keyboard and use the corresponding command to clear the DNS cache for the service your Linux system is running."),(0,a.yg)("p",null,"To find out which DNS resolver you're using, command ",(0,a.yg)("inlineCode",{parentName:"p"},"sudo lsof -i :53 -S"),"."),(0,a.yg)("h4",{id:"systemd-resolved"},"systemd-resolved"),(0,a.yg)("p",null,"To clear the ",(0,a.yg)("strong",{parentName:"p"},"systemd-resolved")," DNS cache, type:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"sudo systemd-resolve --flush-caches")),(0,a.yg)("p",null,"On success, the command doesn\u2019t return any message."),(0,a.yg)("h4",{id:"dnsmasq"},"DNSMasq"),(0,a.yg)("p",null,"To clear the ",(0,a.yg)("strong",{parentName:"p"},"DNSMasq")," cache, you need to restart it:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"sudo service dnsmasq restart")),(0,a.yg)("h4",{id:"nscd"},"NSCD"),(0,a.yg)("p",null,"To clear the ",(0,a.yg)("strong",{parentName:"p"},"NSCD")," cache, you also need to restart the service:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"sudo service nscd restart")),(0,a.yg)("h4",{id:"bind"},"BIND"),(0,a.yg)("p",null,"To flush the ",(0,a.yg)("strong",{parentName:"p"},"BIND")," DNS cache, run the command:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"rndc flush")),(0,a.yg)("p",null,"Then you will need to reload BIND:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"rndc reload")),(0,a.yg)("p",null,"You will get the message that the server has been successfully reloaded."),(0,a.yg)("h2",{id:"comment-vider-le-cache-dns-dans-chrome"},"Comment vider le cache DNS dans Chrome"),(0,a.yg)("p",null,"This may be useful if you do not want restart a browser every time during work with the private AdGuard DNS or AdGuard Home. Settings 1-2 only need to be changed once."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Disable ",(0,a.yg)("strong",{parentName:"p"},"secure DNS")," in Chrome settings"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"chrome://settings/security\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Disable ",(0,a.yg)("strong",{parentName:"p"},"Async DNS resolver")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"chrome://flags/#enable-async-dns\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Press both buttons here"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"chrome://net-internals/#sockets\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Press ",(0,a.yg)("strong",{parentName:"p"},"Clear host cache")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"chrome://net-internals/#dns\n")))))}p.isMDXComponent=!0}}]);