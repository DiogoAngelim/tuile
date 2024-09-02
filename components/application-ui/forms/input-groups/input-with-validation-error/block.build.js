(()=>{"use strict";const{registerBlockType:A}=wp.blocks,{RichText:e,MediaUpload:l,InspectorControls:t}=wp.blockEditor,{Panel:n,PanelBody:c,PanelRow:a,TextareaControl:r}=wp.components;A("wp/input-with-validation-error",{title:"input-with-validation-error",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,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"}),category:"common",attributes:{contentRIa:{type:"string",default:"Email"},contentChN:{type:"string",default:"Your password must be less than 4 characters."},svgCiz:{type:"string",default:'<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>'}},edit(A){const{attributes:l,setAttributes:u}=A;return wp.element.createElement("div",null,wp.element.createElement(t,null,wp.element.createElement(n,null,wp.element.createElement(c,{title:"SVG Markup"},wp.element.createElement(a,null,wp.element.createElement("div",null,wp.element.createElement(r,{label:"SVG Content",help:"Enter your SVG content...",value:l.svgCiz,onChange:A=>{u({svgCiz:A})}})))))),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("label",{for:"email",className:"block text-sm font-medium text-gray-700"},wp.element.createElement(e,{tagName:"span",value:l.contentRIa,default:"Email",onChange:A=>{u({contentRIa:A})}})),wp.element.createElement("div",{className:"mt-1 relative rounded-md shadow-sm"},wp.element.createElement("input",{type:"email",name:"email",id:"email",className:"block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md",placeholder:"you@example.com",value:"adamwathan","aria-invalid":"true","aria-describedby":"email-error"}),wp.element.createElement("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},wp.element.createElement("svg",{className:"h-5 w-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:l.svgCiz}}))),wp.element.createElement("p",{className:"mt-2 text-sm text-red-600",id:"email-error"},wp.element.createElement(e,{tagName:"span",value:l.contentChN,default:"Your password must be less than 4 characters.",onChange:A=>{u({contentChN:A})}}))))))},save(A){const{attributes:l}=A;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("label",{for:"email",class:"block text-sm font-medium text-gray-700"},wp.element.createElement(e.Content,{value:l.contentRIa})),wp.element.createElement("div",{class:"mt-1 relative rounded-md shadow-sm"},wp.element.createElement("input",{type:"email",name:"email",id:"email",class:"block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md",placeholder:"you@example.com",value:"adamwathan","aria-invalid":"true","aria-describedby":"email-error"}),wp.element.createElement("div",{class:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},wp.element.createElement("svg",{class:"h-5 w-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:l.svgCiz}}))),wp.element.createElement("p",{class:"mt-2 text-sm text-red-600",id:"email-error"},wp.element.createElement(e.Content,{value:l.contentChN})))))}})})();