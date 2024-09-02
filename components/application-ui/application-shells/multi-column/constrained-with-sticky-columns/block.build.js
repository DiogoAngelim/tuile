(()=>{"use strict";const{registerBlockType:A}=wp.blocks,{RichText:e,MediaUpload:t,InspectorControls:n}=wp.blockEditor,{Panel:l,PanelBody:a,PanelRow:m,TextareaControl:r}=wp.components;A("wp/constrained-with-sticky-columns",{title:"constrained-with-sticky-columns",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMwnVRmszMAhNtxpr7pughpmmvum6CGmaa+6boIaZpr7pughpmmvum6CGmaa+6boIaZpr7pughpmmvum6CGmaa+6boIaZpr7pughptRQruucgZpjJuCIcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k="}),category:"common",attributes:{contentPeS:{type:"string",default:"Search"},contentViJ:{type:"string",default:"Open menu"},contentpRY:{type:"string",default:"View notifications"},contentkOM:{type:"string",default:"Open user menu"},contentPza:{type:"string",default:"Your Profile"},contentTSd:{type:"string",default:"Settings"},contentmXX:{type:"string",default:"Sign out"},contentgWb:{type:"string",default:" New Project "},contentOlc:{type:"string",default:"Dashboard"},contentHSL:{type:"string",default:"Calendar"},contentDnu:{type:"string",default:"Teams"},contentuOO:{type:"string",default:"Directory"},contentrBt:{type:"string",default:"Chelsea Hagon"},contentYzW:{type:"string",default:"chelsea.hagon@example.com"},contentvNz:{type:"string",default:"View notifications"},contentQGf:{type:"string",default:"Your Profile"},contentaHA:{type:"string",default:"Settings"},contentVHa:{type:"string",default:"Sign out"},imageurlzbO:{attribute:"src",type:"string",selector:"img",default:vars.url+"img/logos/workflow-mark.svg"},imagealtoAM:{attribute:"alt",type:"string",selector:"img",default:"Workflow"},imageurlxhm:{attribute:"src",type:"string",selector:"img",default:vars.url+"photo-1550525811-e5869dd03032.jpeg"},imagealtaCm:{attribute:"alt",type:"string",selector:"img",default:""},imageurlOiH:{attribute:"src",type:"string",selector:"img",default:vars.url+"photo-1550525811-e5869dd03032.jpeg"},imagealtxyO:{attribute:"alt",type:"string",selector:"img",default:""},svgmbi:{type:"string",default:'<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>'},svgvNb:{type:"string",default:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>'},svgDdG:{type:"string",default:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>'},svgdEG:{type:"string",default:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>'},svgMVf:{type:"string",default:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>'}},edit(A){const{attributes:s,setAttributes:o}=A;return wp.element.createElement("div",null,wp.element.createElement(n,null,wp.element.createElement(l,null,wp.element.createElement(a,{title:"SVG Markup"},wp.element.createElement(m,null,wp.element.createElement("div",null,wp.element.createElement(r,{label:"SVG Content",help:"Enter your SVG content...",value:s.svgmbi,onChange:A=>{o({svgmbi:A})}})))),wp.element.createElement(a,{title:"SVG Markup"},wp.element.createElement(m,null,wp.element.createElement("div",null,wp.element.createElement(r,{label:"SVG Content",help:"Enter your SVG content...",value:s.svgvNb,onChange:A=>{o({svgvNb:A})}})))),wp.element.createElement(a,{title:"SVG Markup"},wp.element.createElement(m,null,wp.element.createElement("div",null,wp.element.createElement(r,{label:"SVG Content",help:"Enter your SVG content...",value:s.svgDdG,onChange:A=>{o({svgDdG:A})}})))),wp.element.createElement(a,{title:"SVG Markup"},wp.element.createElement(m,null,wp.element.createElement("div",null,wp.element.createElement(r,{label:"SVG Content",help:"Enter your SVG content...",value:s.svgdEG,onChange:A=>{o({svgdEG:A})}})))),wp.element.createElement(a,{title:"SVG Markup"},wp.element.createElement(m,null,wp.element.createElement("div",null,wp.element.createElement(r,{label:"SVG Content",help:"Enter your SVG content...",value:s.svgMVf,onChange:A=>{o({svgMVf:A})}})))))),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{className:"min-h-screen bg-gray-100"},wp.element.createElement("header",{className:"bg-white shadow-sm lg:static lg:overflow-y-visible"},wp.element.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},wp.element.createElement("div",{className:"relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8"},wp.element.createElement("div",{className:"flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2"},wp.element.createElement("div",{className:"flex-shrink-0 flex items-center"}," ",wp.element.createElement("span",null,wp.element.createElement(t,{onSelect:A=>{o({imageurlzbO:A.url,imagealtoAM:A.alt})},type:"image",render:({open:A})=>wp.element.createElement("img",{src:s.imageurlzbO,alt:s.imagealtoAM,onClick:A,className:"block h-8 w-auto"})})))),wp.element.createElement("div",{className:"min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6"},wp.element.createElement("div",{className:"flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0"},wp.element.createElement("div",{className:"w-full"},wp.element.createElement("label",{for:"search",className:"sr-only"},wp.element.createElement(e,{tagName:"span",value:s.contentPeS,default:"Search",onChange:A=>{o({contentPeS:A})}})),wp.element.createElement("div",{className:"relative"},wp.element.createElement("div",{className:"pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"},wp.element.createElement("svg",{className:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:s.svgmbi}})),wp.element.createElement("input",{id:"search",name:"search",className:"block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"Search",type:"search"}))))),wp.element.createElement("div",{className:"flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden"},wp.element.createElement("button",{type:"button",className:"-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500","aria-expanded":"false"}," ",wp.element.createElement("span",{className:"sr-only"},wp.element.createElement(e,{tagName:"span",value:s.contentViJ,default:"Open menu",onChange:A=>{o({contentViJ:A})}})),wp.element.createElement("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:s.svgvNb}}),wp.element.createElement("svg",{className:"hidden h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:s.svgDdG}}))),wp.element.createElement("div",{className:"hidden lg:flex lg:items-center lg:justify-end xl:col-span-4"}," ",wp.element.createElement("span",{className:"ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},wp.element.createElement("span",{className:"sr-only"},wp.element.createElement(e,{tagName:"span",value:s.contentpRY,default:"View notifications",onChange:A=>{o({contentpRY:A})}})),wp.element.createElement("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:s.svgdEG}})),wp.element.createElement("div",{className:"flex-shrink-0 relative ml-5"},wp.element.createElement("div",null,wp.element.createElement("button",{type:"button",className:"bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",id:"user-menu-button","aria-expanded":"false","aria-haspopup":"true"}," ",wp.element.createElement("span",{className:"sr-only"},wp.element.createElement(e,{tagName:"span",value:s.contentkOM,default:"Open user menu",onChange:A=>{o({contentkOM:A})}})),wp.element.createElement(t,{onSelect:A=>{o({imageurlxhm:A.url,imagealtaCm:A.alt})},type:"image",render:({open:A})=>wp.element.createElement("img",{src:s.imageurlxhm,alt:s.imagealtaCm,onClick:A,className:"h-8 w-8 rounded-full"})}))),wp.element.createElement("div",{className:"origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu-button",tabindex:"-1"}," ",wp.element.createElement("span",{className:"block py-2 px-4 text-sm text-gray-700",role:"menuitem",tabindex:"-1",id:"user-menu-item-0"},wp.element.createElement(e,{tagName:"span",value:s.contentPza,default:"Your Profile",onChange:A=>{o({contentPza:A})}})),wp.element.createElement("span",{className:"block py-2 px-4 text-sm text-gray-700",role:"menuitem",tabindex:"-1",id:"user-menu-item-1"},wp.element.createElement(e,{tagName:"span",value:s.contentTSd,default:"Settings",onChange:A=>{o({contentTSd:A})}})),wp.element.createElement("span",{className:"block py-2 px-4 text-sm text-gray-700",role:"menuitem",tabindex:"-1",id:"user-menu-item-2"},wp.element.createElement(e,{tagName:"span",value:s.contentmXX,default:"Sign out",onChange:A=>{o({contentmXX:A})}}))))," ",wp.element.createElement("span",{className:"ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},wp.element.createElement(e,{tagName:"span",value:s.contentgWb,default:"New Project",onChange:A=>{o({contentgWb:A})}}))))),wp.element.createElement("nav",{className:"lg:hidden","aria-label":"Global"},wp.element.createElement("div",{className:"max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4"}," ",wp.element.createElement("span",{"aria-current":"page",className:"bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium"},wp.element.createElement(e,{tagName:"span",value:s.contentOlc,default:"Dashboard",onChange:A=>{o({contentOlc:A})}})),wp.element.createElement("span",{className:"hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"},wp.element.createElement(e,{tagName:"span",value:s.contentHSL,default:"Calendar",onChange:A=>{o({contentHSL:A})}})),wp.element.createElement("span",{className:"hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"},wp.element.createElement(e,{tagName:"span",value:s.contentDnu,default:"Teams",onChange:A=>{o({contentDnu:A})}})),wp.element.createElement("span",{className:"hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"},wp.element.createElement(e,{tagName:"span",value:s.contentuOO,default:"Directory",onChange:A=>{o({contentuOO:A})}}))),wp.element.createElement("div",{className:"border-t border-gray-200 pt-4 pb-3"},wp.element.createElement("div",{className:"max-w-3xl mx-auto px-4 flex items-center sm:px-6"},wp.element.createElement("div",{className:"flex-shrink-0"},wp.element.createElement(t,{onSelect:A=>{o({imageurlOiH:A.url,imagealtxyO:A.alt})},type:"image",render:({open:A})=>wp.element.createElement("img",{src:s.imageurlOiH,alt:s.imagealtxyO,onClick:A,className:"h-10 w-10 rounded-full"})})),wp.element.createElement("div",{className:"ml-3"},wp.element.createElement("div",{className:"text-base font-medium text-gray-800"},wp.element.createElement(e,{tagName:"span",value:s.contentrBt,default:"Chelsea Hagon",onChange:A=>{o({contentrBt:A})}})),wp.element.createElement("div",{className:"text-sm font-medium text-gray-500"},wp.element.createElement(e,{tagName:"span",value:s.contentYzW,default:"chelsea.hagon@example.com",onChange:A=>{o({contentYzW:A})}}))),wp.element.createElement("button",{type:"button",className:"ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," ",wp.element.createElement("span",{className:"sr-only"},wp.element.createElement(e,{tagName:"span",value:s.contentvNz,default:"View notifications",onChange:A=>{o({contentvNz:A})}})),wp.element.createElement("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:s.svgMVf}}))),wp.element.createElement("div",{className:"mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4"}," ",wp.element.createElement("span",{className:"block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"},wp.element.createElement(e,{tagName:"span",value:s.contentQGf,default:"Your Profile",onChange:A=>{o({contentQGf:A})}})),wp.element.createElement("span",{className:"block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"},wp.element.createElement(e,{tagName:"span",value:s.contentaHA,default:"Settings",onChange:A=>{o({contentaHA:A})}})),wp.element.createElement("span",{className:"block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"},wp.element.createElement(e,{tagName:"span",value:s.contentVHa,default:"Sign out",onChange:A=>{o({contentVHa:A})}})))))),wp.element.createElement("div",{className:"py-6"},wp.element.createElement("div",{className:"max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8"},wp.element.createElement("div",{className:"hidden lg:block lg:col-span-3 xl:col-span-2"},wp.element.createElement("nav",{"aria-label":"Sidebar",className:"sticky top-6 divide-y divide-gray-300"})),wp.element.createElement("main",{className:"lg:col-span-9 xl:col-span-6"}),wp.element.createElement("aside",{className:"hidden xl:block xl:col-span-4"},wp.element.createElement("div",{className:"sticky top-6 space-y-4"}))))))))},save(A){const{attributes:t}=A;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{class:"min-h-screen bg-gray-100"},wp.element.createElement("header",{class:"bg-white shadow-sm lg:static lg:overflow-y-visible"},wp.element.createElement("div",{class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},wp.element.createElement("div",{class:"relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8"},wp.element.createElement("div",{class:"flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2"},wp.element.createElement("div",{class:"flex-shrink-0 flex items-center"}," ",wp.element.createElement("span",null,wp.element.createElement("img",{src:t.imageurlzbO,alt:t.imagealtoAM,class:"block h-8 w-auto"})))),wp.element.createElement("div",{class:"min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6"},wp.element.createElement("div",{class:"flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0"},wp.element.createElement("div",{class:"w-full"},wp.element.createElement("label",{for:"search",class:"sr-only"},wp.element.createElement(e.Content,{value:t.contentPeS})),wp.element.createElement("div",{class:"relative"},wp.element.createElement("div",{class:"pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"},wp.element.createElement("svg",{class:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgmbi}})),wp.element.createElement("input",{id:"search",name:"search",class:"block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"Search",type:"search"}))))),wp.element.createElement("div",{class:"flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden"},wp.element.createElement("button",{type:"button",class:"-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500","aria-expanded":"false"}," ",wp.element.createElement("span",{class:"sr-only"},wp.element.createElement(e.Content,{value:t.contentViJ})),wp.element.createElement("svg",{class:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgvNb}}),wp.element.createElement("svg",{class:"hidden h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgDdG}}))),wp.element.createElement("div",{class:"hidden lg:flex lg:items-center lg:justify-end xl:col-span-4"}," ",wp.element.createElement("span",{class:"ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},wp.element.createElement("span",{class:"sr-only"},wp.element.createElement(e.Content,{value:t.contentpRY})),wp.element.createElement("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgdEG}})),wp.element.createElement("div",{class:"flex-shrink-0 relative ml-5"},wp.element.createElement("div",null,wp.element.createElement("button",{type:"button",class:"bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",id:"user-menu-button","aria-expanded":"false","aria-haspopup":"true"}," ",wp.element.createElement("span",{class:"sr-only"},wp.element.createElement(e.Content,{value:t.contentkOM})),wp.element.createElement("img",{src:t.imageurlxhm,alt:t.imagealtaCm,class:"h-8 w-8 rounded-full"}))),wp.element.createElement("div",{class:"origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu-button",tabindex:"-1"}," ",wp.element.createElement("span",{class:"block py-2 px-4 text-sm text-gray-700",role:"menuitem",tabindex:"-1",id:"user-menu-item-0"},wp.element.createElement(e.Content,{value:t.contentPza})),wp.element.createElement("span",{class:"block py-2 px-4 text-sm text-gray-700",role:"menuitem",tabindex:"-1",id:"user-menu-item-1"},wp.element.createElement(e.Content,{value:t.contentTSd})),wp.element.createElement("span",{class:"block py-2 px-4 text-sm text-gray-700",role:"menuitem",tabindex:"-1",id:"user-menu-item-2"},wp.element.createElement(e.Content,{value:t.contentmXX}))))," ",wp.element.createElement("span",{class:"ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},wp.element.createElement(e.Content,{value:t.contentgWb}))))),wp.element.createElement("nav",{class:"lg:hidden","aria-label":"Global"},wp.element.createElement("div",{class:"max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4"}," ",wp.element.createElement("span",{"aria-current":"page",class:"bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium"},wp.element.createElement(e.Content,{value:t.contentOlc})),wp.element.createElement("span",{class:"hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"},wp.element.createElement(e.Content,{value:t.contentHSL})),wp.element.createElement("span",{class:"hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"},wp.element.createElement(e.Content,{value:t.contentDnu})),wp.element.createElement("span",{class:"hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"},wp.element.createElement(e.Content,{value:t.contentuOO}))),wp.element.createElement("div",{class:"border-t border-gray-200 pt-4 pb-3"},wp.element.createElement("div",{class:"max-w-3xl mx-auto px-4 flex items-center sm:px-6"},wp.element.createElement("div",{class:"flex-shrink-0"},wp.element.createElement("img",{src:t.imageurlOiH,alt:t.imagealtxyO,class:"h-10 w-10 rounded-full"})),wp.element.createElement("div",{class:"ml-3"},wp.element.createElement("div",{class:"text-base font-medium text-gray-800"},wp.element.createElement(e.Content,{value:t.contentrBt})),wp.element.createElement("div",{class:"text-sm font-medium text-gray-500"},wp.element.createElement(e.Content,{value:t.contentYzW}))),wp.element.createElement("button",{type:"button",class:"ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," ",wp.element.createElement("span",{class:"sr-only"},wp.element.createElement(e.Content,{value:t.contentvNz})),wp.element.createElement("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgMVf}}))),wp.element.createElement("div",{class:"mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4"}," ",wp.element.createElement("span",{class:"block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"},wp.element.createElement(e.Content,{value:t.contentQGf})),wp.element.createElement("span",{class:"block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"},wp.element.createElement(e.Content,{value:t.contentaHA})),wp.element.createElement("span",{class:"block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"},wp.element.createElement(e.Content,{value:t.contentVHa})))))),wp.element.createElement("div",{class:"py-6"},wp.element.createElement("div",{class:"max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8"},wp.element.createElement("div",{class:"hidden lg:block lg:col-span-3 xl:col-span-2"},wp.element.createElement("nav",{"aria-label":"Sidebar",class:"sticky top-6 divide-y divide-gray-300"})),wp.element.createElement("main",{class:"lg:col-span-9 xl:col-span-6"}),wp.element.createElement("aside",{class:"hidden xl:block xl:col-span-4"},wp.element.createElement("div",{class:"sticky top-6 space-y-4"})))))))}})})();