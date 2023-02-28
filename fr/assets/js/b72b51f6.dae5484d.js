"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[298],{4137:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(t),p=a,m=h["".concat(i,".").concat(p)]||h[p]||d[p]||r;return t?o.createElement(m,s(s({ref:n},u),{},{components:t})):o.createElement(m,s({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=h;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8778:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=t(3117),a=t(102),r=(t(7294),t(4137)),s=["components"],l={title:"How to flush DNS cache",sidebar_position:4},i=void 0,c={unversionedId:"general/flush-dns-cache",id:"general/flush-dns-cache",title:"How to flush DNS cache",description:"Machine operating systems and internet browsers save and store DNS cache \u2013 information about previous DNS lookups. This speeds up website loading since the cache contains IP addresses of the requested domains: instead of referring to DNS servers, the system fetches responses to queries from the cache.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/general/flush-dns-cache.md",sourceDirName:"general",slug:"/general/flush-dns-cache",permalink:"/KnowledgeBaseDNS/fr/general/flush-dns-cache",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/general/flush-dns-cache.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to flush DNS cache",sidebar_position:4},sidebar:"sidebar",previous:{title:"Known DNS Providers",permalink:"/KnowledgeBaseDNS/fr/general/dns-providers"},next:{title:"Overview",permalink:"/KnowledgeBaseDNS/fr/public-dns/overview"}},u={},d=[{value:"How to flush DNS cache on Mac",id:"how-to-flush-dns-cache-on-mac",level:2},{value:"How to flush DNS cache on Windows",id:"how-to-flush-dns-cache-on-windows",level:2},{value:"How to flush DNS cache on Linux",id:"how-to-flush-dns-cache-on-linux",level:2},{value:"How to flush local NCSD DNS cache",id:"how-to-flush-local-ncsd-dns-cache",level:3},{value:"How to flush local dnsmasq DNS \u0441ache",id:"how-to-flush-local-dnsmasq-dns-\u0441ache",level:3},{value:"How to flush local BIND DNS cache",id:"how-to-flush-local-bind-dns-cache",level:3},{value:"How to flush DNS cache in Chrome-based browsers",id:"how-to-flush-dns-cache-in-chrome-based-browsers",level:2}],h={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Machine operating systems and internet browsers save and store DNS cache \u2013 information about previous DNS lookups. This speeds up website loading since the cache contains IP addresses of the requested domains: instead of referring to DNS servers, the system fetches responses to queries from the cache."),(0,r.kt)("p",null,"However, outdated DNS cache data stored on your computer or browser can cause problems displaying or loading websites. Even worse, the DNS cache may be corrupted by network attacks or viruses. In this case, unauthorized domain names or IP addresses will be inserted into it. And, for example, instead of going to google.com, your browser may redirect you to a malicious IP address or ad page."),(0,r.kt)("p",null,"To avoid the above problems, you need to clear the DNS cache: to delete all saved DNS lookup information so that the next time you send a lookup request, your computer receives updated data from DNS servers."),(0,r.kt)("h2",{id:"how-to-flush-dns-cache-on-mac"},"How to flush DNS cache on Mac"),(0,r.kt)("p",null,"To flush the DNS cache on your Mac, run the ",(0,r.kt)("strong",{parentName:"p"},"Terminal")," app and enter a specific command depending on the macOS version installed on your device:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder")," on macOS v13 (Ventura), 12 (Monterey), 11 (Big Sur), 10.15 (Catalina)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sudo killall -HUP mDNSResponder")," on macOS v10.14 (Mojave), 10.13 (High Sierra), 10.12 (Sierra), 10.08 (Mountain Lion), 10.07 (Lion)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sudo dscacheutil -flushcache")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo killall -HUP mDNSResponder")," on macOS v10.11 (El Capitan), 10.9 (Mavericks)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sudo discoveryutil mdnsflushcache")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo discoveryutil udnsflushcaches")," on macOS v10.10")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sudo dscacheutil -flushcache")," on macOS v10.6 (Snow Leopard), 10.5 (Leopard)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"lookupd -flushcache")," on macOS v10.4 (Tiger)"))),(0,r.kt)("p",null,"Then hit ",(0,r.kt)("em",{parentName:"p"},"Return")," on your keyboard, enter the administrator password for the account and press ",(0,r.kt)("em",{parentName:"p"},"Return"),". There is no notification once the process is finished. However, you can add another command, for example, to hear a notification when the DNS cache flush is complete:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo killall -HUP mDNSResponder; say dns cleared successfully")),(0,r.kt)("h2",{id:"how-to-flush-dns-cache-on-windows"},"How to flush DNS cache on Windows"),(0,r.kt)("p",null,"Clearing the DNS cache on Windows is a simple thing to do. The procedure is the same for almost all Windows versions."),(0,r.kt)("p",null,"Open the Command Prompt as an administrator and enter the following command: ",(0,r.kt)("inlineCode",{parentName:"p"},"ipconfig /flushdns"),". If the command succeeds, you'll receive the message ",(0,r.kt)("em",{parentName:"p"},"Successfully flushed the DNS Resolver Cache"),"."),(0,r.kt)("h2",{id:"how-to-flush-dns-cache-on-linux"},"How to flush DNS cache on Linux"),(0,r.kt)("p",null,"Different Linux distributions may use their own DNS service. Some distributions, such as Ubuntu, have no DNS service by default at all."),(0,r.kt)("p",null,"Before you flush the DNS cache, find out which service your distribution has and if it is enabled by default. Some of them are ",(0,r.kt)("strong",{parentName:"p"},"NCSD")," (Name Service Caching Daemon), ",(0,r.kt)("strong",{parentName:"p"},"dnsmasq")," and ",(0,r.kt)("strong",{parentName:"p"},"BIND")," (Berkeley Internet Name Domain)."),(0,r.kt)("h3",{id:"how-to-flush-local-ncsd-dns-cache"},"How to flush local NCSD DNS cache"),(0,r.kt)("p",null,"Use this command on your Linux machine:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo /etc/init.d/nscd restart")),(0,r.kt)("p",null,"Enter your password if required."),(0,r.kt)("h3",{id:"how-to-flush-local-dnsmasq-dns-\u0441ache"},"How to flush local dnsmasq DNS \u0441ache"),(0,r.kt)("p",null,"Use this command on your Linux machine:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo /etc/init.d/dnsmasq restart")),(0,r.kt)("p",null,"Then enter your password if necessary. You will see the response when the service stops and starts again."),(0,r.kt)("h3",{id:"how-to-flush-local-bind-dns-cache"},"How to flush local BIND DNS cache"),(0,r.kt)("p",null,"If you use BIND for the DNS service, there are several commands you can run to clear the DNS cache. You may need to enter a password to complete the process."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo /etc/init.d/named restart")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo rndc restart")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo rndc exec")),(0,r.kt)("h2",{id:"how-to-flush-dns-cache-in-chrome-based-browsers"},"How to flush DNS cache in Chrome-based browsers"),(0,r.kt)("p",null,"In the browser address bar, enter the link ",(0,r.kt)("strong",{parentName:"p"},"chrome://net-internals/#dns")," and click the ",(0,r.kt)("em",{parentName:"p"},"Clear host cache")," button."))}p.isMDXComponent=!0}}]);