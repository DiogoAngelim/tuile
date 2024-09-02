(()=>{"use strict";const{registerBlockType:A}=wp.blocks,{RichText:e,MediaUpload:t,InspectorControls:n}=wp.blockEditor,{Panel:l,PanelBody:a,PanelRow:m,TextareaControl:i}=wp.components;A("wp/with-dividers",{title:"with-dividers",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,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"}),category:"common",attributes:{contentVCP:{type:"string",default:"\n      Options\n      \n      "},contentkfv:{type:"string",default:"Edit"},contentYpF:{type:"string",default:"Duplicate"},contentpWb:{type:"string",default:"Archive"},contentTvL:{type:"string",default:"Move"},contentCad:{type:"string",default:"Share"},contentzIA:{type:"string",default:"Add to favorites"},contentioX:{type:"string",default:"Delete"},svgbxK:{type:"string",default:'<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>'}},edit(A){const{attributes:t,setAttributes:r}=A;return wp.element.createElement("div",null,wp.element.createElement(n,null,wp.element.createElement(l,null,wp.element.createElement(a,{title:"SVG Markup"},wp.element.createElement(m,null,wp.element.createElement("div",null,wp.element.createElement(i,{label:"SVG Content",help:"Enter your SVG content...",value:t.svgbxK,onChange:A=>{r({svgbxK:A})}})))))),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{className:"relative inline-block text-left"},wp.element.createElement("div",null,wp.element.createElement("button",{type:"button",className:"inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",id:"menu-button","aria-expanded":"true","aria-haspopup":"true"},wp.element.createElement(e,{tagName:"span",value:t.contentVCP,default:"Options",onChange:A=>{r({contentVCP:A})}}),wp.element.createElement("svg",{className:"-mr-1 ml-2 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgbxK}}))),wp.element.createElement("div",{className:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabindex:"-1"},wp.element.createElement("div",{className:"py-1",role:"none"}," ",wp.element.createElement("span",{className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-0"},wp.element.createElement(e,{tagName:"span",value:t.contentkfv,default:"Edit",onChange:A=>{r({contentkfv:A})}})),wp.element.createElement("span",{className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-1"},wp.element.createElement(e,{tagName:"span",value:t.contentYpF,default:"Duplicate",onChange:A=>{r({contentYpF:A})}}))),wp.element.createElement("div",{className:"py-1",role:"none"}," ",wp.element.createElement("span",{className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-2"},wp.element.createElement(e,{tagName:"span",value:t.contentpWb,default:"Archive",onChange:A=>{r({contentpWb:A})}})),wp.element.createElement("span",{className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-3"},wp.element.createElement(e,{tagName:"span",value:t.contentTvL,default:"Move",onChange:A=>{r({contentTvL:A})}}))),wp.element.createElement("div",{className:"py-1",role:"none"}," ",wp.element.createElement("span",{className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-4"},wp.element.createElement(e,{tagName:"span",value:t.contentCad,default:"Share",onChange:A=>{r({contentCad:A})}})),wp.element.createElement("span",{className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-5"},wp.element.createElement(e,{tagName:"span",value:t.contentzIA,default:"Add to favorites",onChange:A=>{r({contentzIA:A})}}))),wp.element.createElement("div",{className:"py-1",role:"none"}," ",wp.element.createElement("span",{className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-6"},wp.element.createElement(e,{tagName:"span",value:t.contentioX,default:"Delete",onChange:A=>{r({contentioX:A})}}))))))))},save(A){const{attributes:t}=A;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{class:"relative inline-block text-left"},wp.element.createElement("div",null,wp.element.createElement("button",{type:"button",class:"inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",id:"menu-button","aria-expanded":"true","aria-haspopup":"true"},wp.element.createElement(e.Content,{value:t.contentVCP}),wp.element.createElement("svg",{class:"-mr-1 ml-2 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgbxK}}))),wp.element.createElement("div",{class:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabindex:"-1"},wp.element.createElement("div",{class:"py-1",role:"none"}," ",wp.element.createElement("span",{class:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-0"},wp.element.createElement(e.Content,{value:t.contentkfv})),wp.element.createElement("span",{class:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-1"},wp.element.createElement(e.Content,{value:t.contentYpF}))),wp.element.createElement("div",{class:"py-1",role:"none"}," ",wp.element.createElement("span",{class:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-2"},wp.element.createElement(e.Content,{value:t.contentpWb})),wp.element.createElement("span",{class:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-3"},wp.element.createElement(e.Content,{value:t.contentTvL}))),wp.element.createElement("div",{class:"py-1",role:"none"}," ",wp.element.createElement("span",{class:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-4"},wp.element.createElement(e.Content,{value:t.contentCad})),wp.element.createElement("span",{class:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-5"},wp.element.createElement(e.Content,{value:t.contentzIA}))),wp.element.createElement("div",{class:"py-1",role:"none"}," ",wp.element.createElement("span",{class:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-6"},wp.element.createElement(e.Content,{value:t.contentioX})))))))}})})();