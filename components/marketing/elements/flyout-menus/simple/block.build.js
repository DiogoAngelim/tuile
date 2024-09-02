(()=>{"use strict";const{registerBlockType:e}=wp.blocks,{RichText:A,MediaUpload:t,InspectorControls:n}=wp.blockEditor,{Panel:a,PanelBody:l,PanelRow:m,TextareaControl:r}=wp.components;e("wp/simple",{title:"simple",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,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"}),category:"common",attributes:{contentuFU:{type:"string",default:"Solutions"},contentrjd:{type:"string",default:"Blog"},contentRXn:{type:"string",default:"Learn about tips, product updates and company culture."},contentrgX:{type:"string",default:"Help Center"},contentaLH:{type:"string",default:"Get all of your questions answered in our forums of contact support."},contentuon:{type:"string",default:"Guides"},contentIWu:{type:"string",default:"Learn how to maximize our platform to get the most out of it."},contentiSI:{type:"string",default:"Events"},contentAHV:{type:"string",default:"Check out webinars with experts and learn about our annual conference."},contentwSK:{type:"string",default:"Security"},contentJQH:{type:"string",default:"Understand how we take your privacy seriously."},svguaC:{type:"string",default:'<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>'}},edit(e){const{attributes:t,setAttributes:o}=e;return wp.element.createElement("div",null,wp.element.createElement(n,null,wp.element.createElement(a,null,wp.element.createElement(l,{title:"SVG Markup"},wp.element.createElement(m,null,wp.element.createElement("div",null,wp.element.createElement(r,{label:"SVG Content",help:"Enter your SVG content...",value:t.svguaC,onChange:e=>{o({svguaC:e})}})))))),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{className:"relative"},wp.element.createElement("button",{type:"button",className:"text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500","aria-expanded":"false"}," ",wp.element.createElement("span",null,wp.element.createElement(A,{tagName:"span",value:t.contentuFU,default:"Solutions",onChange:e=>{o({contentuFU:e})}})),wp.element.createElement("svg",{className:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svguaC}})),wp.element.createElement("div",{className:"absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"},wp.element.createElement("div",{className:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},wp.element.createElement("div",{className:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"}," ",wp.element.createElement("span",{className:"-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"},wp.element.createElement("p",{className:"text-base font-medium text-gray-900"},wp.element.createElement(A,{tagName:"span",value:t.contentrjd,default:"Blog",onChange:e=>{o({contentrjd:e})}})),wp.element.createElement("p",{className:"mt-1 text-sm text-gray-500"},wp.element.createElement(A,{tagName:"span",value:t.contentRXn,default:"Learn about tips, product updates and company culture.",onChange:e=>{o({contentRXn:e})}}))),wp.element.createElement("span",{className:"-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"},wp.element.createElement("p",{className:"text-base font-medium text-gray-900"},wp.element.createElement(A,{tagName:"span",value:t.contentrgX,default:"Help Center",onChange:e=>{o({contentrgX:e})}})),wp.element.createElement("p",{className:"mt-1 text-sm text-gray-500"},wp.element.createElement(A,{tagName:"span",value:t.contentaLH,default:"Get all of your questions answered in our forums of contact support.",onChange:e=>{o({contentaLH:e})}}))),wp.element.createElement("span",{className:"-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"},wp.element.createElement("p",{className:"text-base font-medium text-gray-900"},wp.element.createElement(A,{tagName:"span",value:t.contentuon,default:"Guides",onChange:e=>{o({contentuon:e})}})),wp.element.createElement("p",{className:"mt-1 text-sm text-gray-500"},wp.element.createElement(A,{tagName:"span",value:t.contentIWu,default:"Learn how to maximize our platform to get the most out of it.",onChange:e=>{o({contentIWu:e})}}))),wp.element.createElement("span",{className:"-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"},wp.element.createElement("p",{className:"text-base font-medium text-gray-900"},wp.element.createElement(A,{tagName:"span",value:t.contentiSI,default:"Events",onChange:e=>{o({contentiSI:e})}})),wp.element.createElement("p",{className:"mt-1 text-sm text-gray-500"},wp.element.createElement(A,{tagName:"span",value:t.contentAHV,default:"Check out webinars with experts and learn about our annual conference.",onChange:e=>{o({contentAHV:e})}}))),wp.element.createElement("span",{className:"-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"},wp.element.createElement("p",{className:"text-base font-medium text-gray-900"},wp.element.createElement(A,{tagName:"span",value:t.contentwSK,default:"Security",onChange:e=>{o({contentwSK:e})}})),wp.element.createElement("p",{className:"mt-1 text-sm text-gray-500"},wp.element.createElement(A,{tagName:"span",value:t.contentJQH,default:"Understand how we take your privacy seriously.",onChange:e=>{o({contentJQH:e})}}))))))))))},save(e){const{attributes:t}=e;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{class:"relative"},wp.element.createElement("button",{type:"button",class:"text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500","aria-expanded":"false"}," ",wp.element.createElement("span",null,wp.element.createElement(A.Content,{value:t.contentuFU})),wp.element.createElement("svg",{class:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svguaC}})),wp.element.createElement("div",{class:"absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"},wp.element.createElement("div",{class:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},wp.element.createElement("div",{class:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"}," ",wp.element.createElement("span",{class:"-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"},wp.element.createElement("p",{class:"text-base font-medium text-gray-900"},wp.element.createElement(A.Content,{value:t.contentrjd})),wp.element.createElement("p",{class:"mt-1 text-sm text-gray-500"},wp.element.createElement(A.Content,{value:t.contentRXn}))),wp.element.createElement("span",{class:"-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"},wp.element.createElement("p",{class:"text-base font-medium text-gray-900"},wp.element.createElement(A.Content,{value:t.contentrgX})),wp.element.createElement("p",{class:"mt-1 text-sm text-gray-500"},wp.element.createElement(A.Content,{value:t.contentaLH}))),wp.element.createElement("span",{class:"-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"},wp.element.createElement("p",{class:"text-base font-medium text-gray-900"},wp.element.createElement(A.Content,{value:t.contentuon})),wp.element.createElement("p",{class:"mt-1 text-sm text-gray-500"},wp.element.createElement(A.Content,{value:t.contentIWu}))),wp.element.createElement("span",{class:"-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"},wp.element.createElement("p",{class:"text-base font-medium text-gray-900"},wp.element.createElement(A.Content,{value:t.contentiSI})),wp.element.createElement("p",{class:"mt-1 text-sm text-gray-500"},wp.element.createElement(A.Content,{value:t.contentAHV}))),wp.element.createElement("span",{class:"-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"},wp.element.createElement("p",{class:"text-base font-medium text-gray-900"},wp.element.createElement(A.Content,{value:t.contentwSK})),wp.element.createElement("p",{class:"mt-1 text-sm text-gray-500"},wp.element.createElement(A.Content,{value:t.contentJQH})))))))))}})})();