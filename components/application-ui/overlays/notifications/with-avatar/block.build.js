(()=>{"use strict";const{registerBlockType:A}=wp.blocks,{RichText:e,MediaUpload:t,InspectorControls:n}=wp.blockEditor,{Panel:l,PanelBody:a,PanelRow:m,TextareaControl:r}=wp.components;A("wp/with-avatar",{title:"with-avatar",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,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"}),category:"common",attributes:{contentUaU:{type:"string",default:"Emilia Gates"},contentsju:{type:"string",default:"Sure! 8:30pm works great!"},contentLTX:{type:"string",default:"Reply"},imageurlQCY:{attribute:"src",type:"string",selector:"img",default:vars.url+"photo-1494790108377-be9c29b29330.jpeg"},imagealtrOm:{attribute:"alt",type:"string",selector:"img",default:""}},edit(A){const{attributes:a,setAttributes:m}=A;return wp.element.createElement("div",null,wp.element.createElement(n,null,wp.element.createElement(l,null)),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{"aria-live":"assertive",className:"fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"},wp.element.createElement("div",{className:"w-full flex flex-col items-center space-y-4 sm:items-end"},wp.element.createElement("div",{className:"max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5"},wp.element.createElement("div",{className:"w-0 flex-1 p-4"},wp.element.createElement("div",{className:"flex items-start"},wp.element.createElement("div",{className:"flex-shrink-0 pt-0.5"},wp.element.createElement(t,{onSelect:A=>{m({imageurlQCY:A.url,imagealtrOm:A.alt})},type:"image",render:({open:A})=>wp.element.createElement("img",{src:a.imageurlQCY,alt:a.imagealtrOm,onClick:A,className:"h-10 w-10 rounded-full"})})),wp.element.createElement("div",{className:"ml-3 w-0 flex-1"},wp.element.createElement("p",{className:"text-sm font-medium text-gray-900"},wp.element.createElement(e,{tagName:"span",value:a.contentUaU,default:"Emilia Gates",onChange:A=>{m({contentUaU:A})}})),wp.element.createElement("p",{className:"mt-1 text-sm text-gray-500"},wp.element.createElement(e,{tagName:"span",value:a.contentsju,default:"Sure! 8:30pm works great!",onChange:A=>{m({contentsju:A})}}))))),wp.element.createElement("div",{className:"flex border-l border-gray-200"},wp.element.createElement("button",{className:"w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"},wp.element.createElement(e,{tagName:"span",value:a.contentLTX,default:"Reply",onChange:A=>{m({contentLTX:A})}})))))))))},save(A){const{attributes:t}=A;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{"aria-live":"assertive",class:"fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"},wp.element.createElement("div",{class:"w-full flex flex-col items-center space-y-4 sm:items-end"},wp.element.createElement("div",{class:"max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5"},wp.element.createElement("div",{class:"w-0 flex-1 p-4"},wp.element.createElement("div",{class:"flex items-start"},wp.element.createElement("div",{class:"flex-shrink-0 pt-0.5"},wp.element.createElement("img",{src:t.imageurlQCY,alt:t.imagealtrOm,class:"h-10 w-10 rounded-full"})),wp.element.createElement("div",{class:"ml-3 w-0 flex-1"},wp.element.createElement("p",{class:"text-sm font-medium text-gray-900"},wp.element.createElement(e.Content,{value:t.contentUaU})),wp.element.createElement("p",{class:"mt-1 text-sm text-gray-500"},wp.element.createElement(e.Content,{value:t.contentsju}))))),wp.element.createElement("div",{class:"flex border-l border-gray-200"},wp.element.createElement("button",{class:"w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"},wp.element.createElement(e.Content,{value:t.contentLTX}))))))))}})})();