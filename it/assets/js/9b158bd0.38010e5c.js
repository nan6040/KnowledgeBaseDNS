"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[485],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4184:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(4137)),i=["components"],l={title:"Using alongside iCloud Private Relay",sidebar_position:2,toc_min_heading_level:3,toc_max_heading_level:4},p=void 0,s={unversionedId:"private-dns/solving-problems/icloud-private-relay",id:"private-dns/solving-problems/icloud-private-relay",title:"Using alongside iCloud Private Relay",description:"When you're using iCloud Private Relay, the AdGuard DNS dashboard (and associated AdGuard test page) will show that you are not using AdGuard DNS on that device.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/private-dns/solving-problems/icloud-private-relay.md",sourceDirName:"private-dns/solving-problems",slug:"/private-dns/solving-problems/icloud-private-relay",permalink:"/KnowledgeBaseDNS/it/private-dns/solving-problems/icloud-private-relay",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/solving-problems/icloud-private-relay.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Using alongside iCloud Private Relay",sidebar_position:2,toc_min_heading_level:3,toc_max_heading_level:4},sidebar:"sidebar",previous:{title:"Known issues",permalink:"/KnowledgeBaseDNS/it/private-dns/solving-problems/known-issues"},next:{title:"How to remove a DNS profile",permalink:"/KnowledgeBaseDNS/it/private-dns/solving-problems/remove-dns-profile"}},d={},u=[],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you're using iCloud Private Relay, the AdGuard DNS dashboard (and associated ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/test.html"},"AdGuard test page"),") will show that you are not using AdGuard DNS on that device."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg",alt:"Device is not connected"})),(0,o.kt)("p",null,"To fix this problem, you need to allow AdGuard websites see your IP address in your device's settings."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"On iPhone or iPad:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"adguard-dns.io"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Page Settings")," button, then tap ",(0,o.kt)("strong",{parentName:"p"},"Show IP Address")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg",alt:"iCloud Private Relay settings *mobile"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Repeat for ",(0,o.kt)("inlineCode",{parentName:"p"},"adguard.com"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"On Mac:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"adguard-dns.io"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In Safari, choose ",(0,o.kt)("strong",{parentName:"p"},"View")," \u2192 ",(0,o.kt)("strong",{parentName:"p"},"Reload and Show IP Address"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Repeat for ",(0,o.kt)("inlineCode",{parentName:"p"},"adguard.com")))))),(0,o.kt)("p",null,"If you can't see the option to temporarily allow a website to see your IP address, update your device to the latest version of iOS, iPadOS, or macOS, then try again."),(0,o.kt)("p",null,"Now your device should be displayed correctly in the AdGuard DNS dashboard:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg",alt:"Device is connected"})),(0,o.kt)("p",null,"Mind that once you turn off Private Relay for a specific website, your network provider will also be able to see which site you're browsing."))}m.isMDXComponent=!0}}]);