(()=>{"use strict";const{registerBlockType:A}=wp.blocks,{RichText:e,MediaUpload:t,InspectorControls:a}=wp.blockEditor,{Panel:l,PanelBody:n,PanelRow:r,TextareaControl:m}=wp.components;A("wp/centered-accordion",{title:"centered-accordion",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgCG0zy+o2meX1JgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q=="}),category:"common",attributes:{contentgln:{type:"string",default:"Frequently asked questions"},contentnkf:{type:"string",default:" What&#039;s the best thing about Switzerland? "},contentNQn:{type:"string",default:"I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},svgSPl:{type:"string",default:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>'}},edit(A){const{attributes:t,setAttributes:V}=A;return wp.element.createElement("div",null,wp.element.createElement(a,null,wp.element.createElement(l,null,wp.element.createElement(n,{title:"SVG Markup"},wp.element.createElement(r,null,wp.element.createElement("div",null,wp.element.createElement(m,{label:"SVG Content",help:"Enter your SVG content...",value:t.svgSPl,onChange:A=>{V({svgSPl:A})}})))))),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{className:"bg-gray-50"},wp.element.createElement("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8"},wp.element.createElement("div",{className:"max-w-3xl mx-auto divide-y-2 divide-gray-200"},wp.element.createElement("h2",{className:"text-center text-3xl font-extrabold text-gray-900 sm:text-4xl"},wp.element.createElement(e,{tagName:"span",value:t.contentgln,default:"Frequently asked questions",onChange:A=>{V({contentgln:A})}})),wp.element.createElement("dl",{className:"mt-6 space-y-6 divide-y divide-gray-200"},wp.element.createElement("div",{className:"pt-6"}," ",wp.element.createElement("dt",{className:"text-lg"},wp.element.createElement("button",{type:"button",className:"text-left w-full flex justify-between items-start text-gray-400","aria-controls":"faq-0","aria-expanded":"false"},wp.element.createElement("span",{className:"font-medium text-gray-900"},wp.element.createElement(e,{tagName:"span",value:t.contentnkf,default:"What's the best thing about Switzerland?",onChange:A=>{V({contentnkf:A})}})),wp.element.createElement("span",{className:"ml-6 h-7 flex items-center"},wp.element.createElement("svg",{className:"rotate-0 h-6 w-6 transform",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgSPl}})))),wp.element.createElement("dd",{className:"mt-2 pr-12",id:"faq-0"},wp.element.createElement("p",{className:"text-base text-gray-500"},wp.element.createElement(e,{tagName:"span",value:t.contentNQn,default:"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",onChange:A=>{V({contentNQn:A})}})))))))))))},save(A){const{attributes:t}=A;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{class:"bg-gray-50"},wp.element.createElement("div",{class:"max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8"},wp.element.createElement("div",{class:"max-w-3xl mx-auto divide-y-2 divide-gray-200"},wp.element.createElement("h2",{class:"text-center text-3xl font-extrabold text-gray-900 sm:text-4xl"},wp.element.createElement(e.Content,{value:t.contentgln})),wp.element.createElement("dl",{class:"mt-6 space-y-6 divide-y divide-gray-200"},wp.element.createElement("div",{class:"pt-6"}," ",wp.element.createElement("dt",{class:"text-lg"},wp.element.createElement("button",{type:"button",class:"text-left w-full flex justify-between items-start text-gray-400","aria-controls":"faq-0","aria-expanded":"false"},wp.element.createElement("span",{class:"font-medium text-gray-900"},wp.element.createElement(e.Content,{value:t.contentnkf})),wp.element.createElement("span",{class:"ml-6 h-7 flex items-center"},wp.element.createElement("svg",{class:"rotate-0 h-6 w-6 transform",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgSPl}})))),wp.element.createElement("dd",{class:"mt-2 pr-12",id:"faq-0"},wp.element.createElement("p",{class:"text-base text-gray-500"},wp.element.createElement(e.Content,{value:t.contentNQn}))))))))))}})})();