(()=>{"use strict";const{registerBlockType:A}=wp.blocks,{RichText:e,MediaUpload:t,InspectorControls:n}=wp.blockEditor,{Panel:l,PanelBody:a,PanelRow:m,TextareaControl:r}=wp.components;A("wp/input-with-corner-hint",{title:"input-with-corner-hint",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,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"}),category:"common",attributes:{contentBtT:{type:"string",default:"Email"},contentLIX:{type:"string",default:"Optional"}},edit(A){const{attributes:t,setAttributes:a}=A;return wp.element.createElement("div",null,wp.element.createElement(n,null,wp.element.createElement(l,null)),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{className:"flex justify-between"},wp.element.createElement("label",{for:"email",className:"block text-sm font-medium text-gray-700"},wp.element.createElement(e,{tagName:"span",value:t.contentBtT,default:"Email",onChange:A=>{a({contentBtT:A})}}))," ",wp.element.createElement("span",{className:"text-sm text-gray-500",id:"email-optional"},wp.element.createElement(e,{tagName:"span",value:t.contentLIX,default:"Optional",onChange:A=>{a({contentLIX:A})}}))),wp.element.createElement("div",{className:"mt-1"},wp.element.createElement("input",{type:"email",name:"email",id:"email",className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",placeholder:"you@example.com","aria-describedby":"email-optional"}))))))},save(A){const{attributes:t}=A;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{class:"flex justify-between"},wp.element.createElement("label",{for:"email",class:"block text-sm font-medium text-gray-700"},wp.element.createElement(e.Content,{value:t.contentBtT}))," ",wp.element.createElement("span",{class:"text-sm text-gray-500",id:"email-optional"},wp.element.createElement(e.Content,{value:t.contentLIX}))),wp.element.createElement("div",{class:"mt-1"},wp.element.createElement("input",{type:"email",name:"email",id:"email",class:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",placeholder:"you@example.com","aria-describedby":"email-optional"})))))}})})();