(()=>{"use strict";const{registerBlockType:A}=wp.blocks,{RichText:e,MediaUpload:t,InspectorControls:n}=wp.blockEditor,{Panel:a,PanelBody:l,PanelRow:c,TextareaControl:r}=wp.components;A("wp/with-inline-tabs",{title:"with-inline-tabs",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,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"}),category:"common",attributes:{contentdph:{type:"string",default:"Issues"},contentlxh:{type:"string",default:" Open "},contentWZe:{type:"string",default:" Closed "}},edit(A){const{attributes:t,setAttributes:l}=A;return wp.element.createElement("div",null,wp.element.createElement(n,null,wp.element.createElement(a,null)),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{className:"border-b border-gray-200"},wp.element.createElement("div",{className:"sm:flex sm:items-baseline"},wp.element.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900"},wp.element.createElement(e,{tagName:"span",value:t.contentdph,default:"Issues",onChange:A=>{l({contentdph:A})}})),wp.element.createElement("div",{className:"mt-4 sm:mt-0 sm:ml-10"},wp.element.createElement("nav",{className:"-mb-px flex space-x-8"}," ",wp.element.createElement("span",{className:"border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm","aria-current":"page"},wp.element.createElement(e,{tagName:"span",value:t.contentlxh,default:"Open",onChange:A=>{l({contentlxh:A})}})),wp.element.createElement("span",{className:"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"},wp.element.createElement(e,{tagName:"span",value:t.contentWZe,default:"Closed",onChange:A=>{l({contentWZe:A})}})))))))))},save(A){const{attributes:t}=A;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{class:"border-b border-gray-200"},wp.element.createElement("div",{class:"sm:flex sm:items-baseline"},wp.element.createElement("h3",{class:"text-lg leading-6 font-medium text-gray-900"},wp.element.createElement(e.Content,{value:t.contentdph})),wp.element.createElement("div",{class:"mt-4 sm:mt-0 sm:ml-10"},wp.element.createElement("nav",{class:"-mb-px flex space-x-8"}," ",wp.element.createElement("span",{class:"border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm","aria-current":"page"},wp.element.createElement(e.Content,{value:t.contentlxh})),wp.element.createElement("span",{class:"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"},wp.element.createElement(e.Content,{value:t.contentWZe}))))))))}})})();