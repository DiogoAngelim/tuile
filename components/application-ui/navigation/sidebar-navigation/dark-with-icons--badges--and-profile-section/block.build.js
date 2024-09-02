(()=>{"use strict";const{registerBlockType:A}=wp.blocks,{RichText:e,MediaUpload:t,InspectorControls:n}=wp.blockEditor,{Panel:l,PanelBody:a,PanelRow:r,TextareaControl:m}=wp.components;A("wp/dark-with-icons--badges--and-profile-section",{title:"dark-with-icons--badges--and-profile-section",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,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"}),category:"common",attributes:{contentyxF:{type:"string",default:" Dashboard "},contentKBa:{type:"string",default:" Team "},contentLTx:{type:"string",default:" Projects "},contentQut:{type:"string",default:" Calendar "},contenthMZ:{type:"string",default:" Documents "},contentHuz:{type:"string",default:" Reports "},contentwwQ:{type:"string",default:" 12 "},contentkWa:{type:"string",default:"Tom Cook"},contentfxM:{type:"string",default:"View profile"},imageurlphF:{attribute:"src",type:"string",selector:"img",default:vars.url+"img/logos/workflow-logo-indigo-500-mark-white-text.svg"},imagealtskQ:{attribute:"alt",type:"string",selector:"img",default:"Workflow"},imageurlXit:{attribute:"src",type:"string",selector:"img",default:vars.url+"photo-1472099645785-5658abf4ff4e.jpeg"},imagealtKet:{attribute:"alt",type:"string",selector:"img",default:""},svgpDw:{type:"string",default:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>'},svgZwK:{type:"string",default:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>'},svgISo:{type:"string",default:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>'},svgrMe:{type:"string",default:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>'},svgmGr:{type:"string",default:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>'},svgLyv:{type:"string",default:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>'}},edit(A){const{attributes:p,setAttributes:s}=A;return wp.element.createElement("div",null,wp.element.createElement(n,null,wp.element.createElement(l,null,wp.element.createElement(a,{title:"SVG Markup"},wp.element.createElement(r,null,wp.element.createElement("div",null,wp.element.createElement(m,{label:"SVG Content",help:"Enter your SVG content...",value:p.svgpDw,onChange:A=>{s({svgpDw:A})}})))),wp.element.createElement(a,{title:"SVG Markup"},wp.element.createElement(r,null,wp.element.createElement("div",null,wp.element.createElement(m,{label:"SVG Content",help:"Enter your SVG content...",value:p.svgZwK,onChange:A=>{s({svgZwK:A})}})))),wp.element.createElement(a,{title:"SVG Markup"},wp.element.createElement(r,null,wp.element.createElement("div",null,wp.element.createElement(m,{label:"SVG Content",help:"Enter your SVG content...",value:p.svgISo,onChange:A=>{s({svgISo:A})}})))),wp.element.createElement(a,{title:"SVG Markup"},wp.element.createElement(r,null,wp.element.createElement("div",null,wp.element.createElement(m,{label:"SVG Content",help:"Enter your SVG content...",value:p.svgrMe,onChange:A=>{s({svgrMe:A})}})))),wp.element.createElement(a,{title:"SVG Markup"},wp.element.createElement(r,null,wp.element.createElement("div",null,wp.element.createElement(m,{label:"SVG Content",help:"Enter your SVG content...",value:p.svgmGr,onChange:A=>{s({svgmGr:A})}})))),wp.element.createElement(a,{title:"SVG Markup"},wp.element.createElement(r,null,wp.element.createElement("div",null,wp.element.createElement(m,{label:"SVG Content",help:"Enter your SVG content...",value:p.svgLyv,onChange:A=>{s({svgLyv:A})}})))))),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{className:"flex-1 flex flex-col min-h-0 bg-gray-800"},wp.element.createElement("div",{className:"flex-1 flex flex-col pt-5 pb-4 overflow-y-auto"},wp.element.createElement("div",{className:"flex items-center flex-shrink-0 px-4"},wp.element.createElement(t,{onSelect:A=>{s({imageurlphF:A.url,imagealtskQ:A.alt})},type:"image",render:({open:A})=>wp.element.createElement("img",{src:p.imageurlphF,alt:p.imagealtskQ,onClick:A,className:"h-8 w-auto"})})),wp.element.createElement("nav",{className:"mt-5 flex-1 px-2 bg-gray-800 space-y-1","aria-label":"Sidebar"}," ",wp.element.createElement("span",{className:"bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"},wp.element.createElement("svg",{className:"text-gray-300 mr-3 flex-shrink-0 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:p.svgpDw}}),wp.element.createElement("span",{className:"flex-1"},wp.element.createElement(e,{tagName:"span",value:p.contentyxF,default:"Dashboard",onChange:A=>{s({contentyxF:A})}})))," ",wp.element.createElement("span",{className:"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"},wp.element.createElement("svg",{className:"text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:p.svgZwK}}),wp.element.createElement("span",{className:"flex-1"},wp.element.createElement(e,{tagName:"span",value:p.contentKBa,default:"Team",onChange:A=>{s({contentKBa:A})}})),wp.element.createElement("span",{className:"bg-gray-900 group-hover:bg-gray-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"}," 3 ")),wp.element.createElement("span",{className:"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"},wp.element.createElement("svg",{className:"text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:p.svgISo}}),wp.element.createElement("span",{className:"flex-1"},wp.element.createElement(e,{tagName:"span",value:p.contentLTx,default:"Projects",onChange:A=>{s({contentLTx:A})}})),wp.element.createElement("span",{className:"bg-gray-900 group-hover:bg-gray-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"}," 4 ")),wp.element.createElement("span",{className:"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"},wp.element.createElement("svg",{className:"text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:p.svgrMe}}),wp.element.createElement("span",{className:"flex-1"},wp.element.createElement(e,{tagName:"span",value:p.contentQut,default:"Calendar",onChange:A=>{s({contentQut:A})}})))," ",wp.element.createElement("span",{className:"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"},wp.element.createElement("svg",{className:"text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:p.svgmGr}}),wp.element.createElement("span",{className:"flex-1"},wp.element.createElement(e,{tagName:"span",value:p.contenthMZ,default:"Documents",onChange:A=>{s({contenthMZ:A})}})))," ",wp.element.createElement("span",{className:"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"},wp.element.createElement("svg",{className:"text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:p.svgLyv}}),wp.element.createElement("span",{className:"flex-1"},wp.element.createElement(e,{tagName:"span",value:p.contentHuz,default:"Reports",onChange:A=>{s({contentHuz:A})}})),wp.element.createElement("span",{className:"bg-gray-900 group-hover:bg-gray-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"},wp.element.createElement(e,{tagName:"span",value:p.contentwwQ,default:"12",onChange:A=>{s({contentwwQ:A})}}))))),wp.element.createElement("div",{className:"flex-shrink-0 flex bg-gray-700 p-4"}," ",wp.element.createElement("span",{className:"flex-shrink-0 w-full group block"},wp.element.createElement("div",{className:"flex items-center"},wp.element.createElement("div",null,wp.element.createElement(t,{onSelect:A=>{s({imageurlXit:A.url,imagealtKet:A.alt})},type:"image",render:({open:A})=>wp.element.createElement("img",{src:p.imageurlXit,alt:p.imagealtKet,onClick:A,className:"inline-block h-9 w-9 rounded-full"})})),wp.element.createElement("div",{className:"ml-3"},wp.element.createElement("p",{className:"text-sm font-medium text-white"},wp.element.createElement(e,{tagName:"span",value:p.contentkWa,default:"Tom Cook",onChange:A=>{s({contentkWa:A})}})),wp.element.createElement("p",{className:"text-xs font-medium text-gray-300 group-hover:text-gray-200"},wp.element.createElement(e,{tagName:"span",value:p.contentfxM,default:"View profile",onChange:A=>{s({contentfxM:A})}}))))))))))},save(A){const{attributes:t}=A;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{class:"flex-1 flex flex-col min-h-0 bg-gray-800"},wp.element.createElement("div",{class:"flex-1 flex flex-col pt-5 pb-4 overflow-y-auto"},wp.element.createElement("div",{class:"flex items-center flex-shrink-0 px-4"},wp.element.createElement("img",{src:t.imageurlphF,alt:t.imagealtskQ,class:"h-8 w-auto"})),wp.element.createElement("nav",{class:"mt-5 flex-1 px-2 bg-gray-800 space-y-1","aria-label":"Sidebar"}," ",wp.element.createElement("span",{class:"bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"},wp.element.createElement("svg",{class:"text-gray-300 mr-3 flex-shrink-0 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgpDw}}),wp.element.createElement("span",{class:"flex-1"},wp.element.createElement(e.Content,{value:t.contentyxF})))," ",wp.element.createElement("span",{class:"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"},wp.element.createElement("svg",{class:"text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgZwK}}),wp.element.createElement("span",{class:"flex-1"},wp.element.createElement(e.Content,{value:t.contentKBa})),wp.element.createElement("span",{class:"bg-gray-900 group-hover:bg-gray-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"}," 3 ")),wp.element.createElement("span",{class:"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"},wp.element.createElement("svg",{class:"text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgISo}}),wp.element.createElement("span",{class:"flex-1"},wp.element.createElement(e.Content,{value:t.contentLTx})),wp.element.createElement("span",{class:"bg-gray-900 group-hover:bg-gray-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"}," 4 ")),wp.element.createElement("span",{class:"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"},wp.element.createElement("svg",{class:"text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgrMe}}),wp.element.createElement("span",{class:"flex-1"},wp.element.createElement(e.Content,{value:t.contentQut})))," ",wp.element.createElement("span",{class:"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"},wp.element.createElement("svg",{class:"text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgmGr}}),wp.element.createElement("span",{class:"flex-1"},wp.element.createElement(e.Content,{value:t.contenthMZ})))," ",wp.element.createElement("span",{class:"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"},wp.element.createElement("svg",{class:"text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgLyv}}),wp.element.createElement("span",{class:"flex-1"},wp.element.createElement(e.Content,{value:t.contentHuz})),wp.element.createElement("span",{class:"bg-gray-900 group-hover:bg-gray-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"},wp.element.createElement(e.Content,{value:t.contentwwQ}))))),wp.element.createElement("div",{class:"flex-shrink-0 flex bg-gray-700 p-4"}," ",wp.element.createElement("span",{class:"flex-shrink-0 w-full group block"},wp.element.createElement("div",{class:"flex items-center"},wp.element.createElement("div",null,wp.element.createElement("img",{src:t.imageurlXit,alt:t.imagealtKet,class:"inline-block h-9 w-9 rounded-full"})),wp.element.createElement("div",{class:"ml-3"},wp.element.createElement("p",{class:"text-sm font-medium text-white"},wp.element.createElement(e.Content,{value:t.contentkWa})),wp.element.createElement("p",{class:"text-xs font-medium text-gray-300 group-hover:text-gray-200"},wp.element.createElement(e.Content,{value:t.contentfxM})))))))))}})})();