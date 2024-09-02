(()=>{"use strict";const{registerBlockType:A}=wp.blocks,{RichText:e,MediaUpload:t,InspectorControls:n}=wp.blockEditor,{Panel:a,PanelBody:l,PanelRow:q,TextareaControl:r}=wp.components;A("wp/simple-justified",{title:"simple-justified",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k="}),category:"common",attributes:{contentVKB:{type:"string",default:"Ready to dive in?"},contentWAW:{type:"string",default:"Start your free trial today."},contentQKd:{type:"string",default:" Get started "},contentOgT:{type:"string",default:" Learn more "}},edit(A){const{attributes:t,setAttributes:l}=A;return wp.element.createElement("div",null,wp.element.createElement(n,null,wp.element.createElement(a,null)),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{className:"bg-gray-50"},wp.element.createElement("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"},wp.element.createElement("h2",{className:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},wp.element.createElement("span",{className:"block"},wp.element.createElement(e,{tagName:"span",value:t.contentVKB,default:"Ready to dive in?",onChange:A=>{l({contentVKB:A})}})),wp.element.createElement("span",{className:"block text-indigo-600"},wp.element.createElement(e,{tagName:"span",value:t.contentWAW,default:"Start your free trial today.",onChange:A=>{l({contentWAW:A})}}))),wp.element.createElement("div",{className:"mt-8 flex lg:mt-0 lg:flex-shrink-0"},wp.element.createElement("div",{className:"inline-flex rounded-md shadow"}," ",wp.element.createElement("span",{className:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"},wp.element.createElement(e,{tagName:"span",value:t.contentQKd,default:"Get started",onChange:A=>{l({contentQKd:A})}}))),wp.element.createElement("div",{className:"ml-3 inline-flex rounded-md shadow"}," ",wp.element.createElement("span",{className:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"},wp.element.createElement(e,{tagName:"span",value:t.contentOgT,default:"Learn more",onChange:A=>{l({contentOgT:A})}})))))))))},save(A){const{attributes:t}=A;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{class:"bg-gray-50"},wp.element.createElement("div",{class:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"},wp.element.createElement("h2",{class:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},wp.element.createElement("span",{class:"block"},wp.element.createElement(e.Content,{value:t.contentVKB})),wp.element.createElement("span",{class:"block text-indigo-600"},wp.element.createElement(e.Content,{value:t.contentWAW}))),wp.element.createElement("div",{class:"mt-8 flex lg:mt-0 lg:flex-shrink-0"},wp.element.createElement("div",{class:"inline-flex rounded-md shadow"}," ",wp.element.createElement("span",{class:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"},wp.element.createElement(e.Content,{value:t.contentQKd}))),wp.element.createElement("div",{class:"ml-3 inline-flex rounded-md shadow"}," ",wp.element.createElement("span",{class:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"},wp.element.createElement(e.Content,{value:t.contentOgT}))))))))}})})();