(()=>{"use strict";const{registerBlockType:A}=wp.blocks,{RichText:e,MediaUpload:t,InspectorControls:n}=wp.blockEditor,{Panel:m,PanelBody:a,PanelRow:P,TextareaControl:r}=wp.components;A("wp/simple",{title:"simple",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k="}),category:"common",attributes:{contentqwE:{type:"string",default:"404"},contentjVl:{type:"string",default:"Page not found"},contentOtT:{type:"string",default:"Please check the URL in the address bar and try again."},contentzhe:{type:"string",default:" Go back home "},contenteiv:{type:"string",default:" Contact support "}},edit(A){const{attributes:t,setAttributes:a}=A;return wp.element.createElement("div",null,wp.element.createElement(n,null,wp.element.createElement(m,null)),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{className:"bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"},wp.element.createElement("div",{className:"max-w-max mx-auto"},wp.element.createElement("main",{className:"sm:flex"},wp.element.createElement("p",{className:"text-4xl font-extrabold text-indigo-600 sm:text-5xl"},wp.element.createElement(e,{tagName:"span",value:t.contentqwE,default:"404",onChange:A=>{a({contentqwE:A})}})),wp.element.createElement("div",{className:"sm:ml-6"},wp.element.createElement("div",{className:"sm:border-l sm:border-gray-200 sm:pl-6"},wp.element.createElement("h1",{className:"text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"},wp.element.createElement(e,{tagName:"span",value:t.contentjVl,default:"Page not found",onChange:A=>{a({contentjVl:A})}})),wp.element.createElement("p",{className:"mt-1 text-base text-gray-500"},wp.element.createElement(e,{tagName:"span",value:t.contentOtT,default:"Please check the URL in the address bar and try again.",onChange:A=>{a({contentOtT:A})}}))),wp.element.createElement("div",{className:"mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6"}," ",wp.element.createElement("span",{className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},wp.element.createElement(e,{tagName:"span",value:t.contentzhe,default:"Go back home",onChange:A=>{a({contentzhe:A})}})),wp.element.createElement("span",{className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},wp.element.createElement(e,{tagName:"span",value:t.contenteiv,default:"Contact support",onChange:A=>{a({contenteiv:A})}}))))))))))},save(A){const{attributes:t}=A;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{class:"bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"},wp.element.createElement("div",{class:"max-w-max mx-auto"},wp.element.createElement("main",{class:"sm:flex"},wp.element.createElement("p",{class:"text-4xl font-extrabold text-indigo-600 sm:text-5xl"},wp.element.createElement(e.Content,{value:t.contentqwE})),wp.element.createElement("div",{class:"sm:ml-6"},wp.element.createElement("div",{class:"sm:border-l sm:border-gray-200 sm:pl-6"},wp.element.createElement("h1",{class:"text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"},wp.element.createElement(e.Content,{value:t.contentjVl})),wp.element.createElement("p",{class:"mt-1 text-base text-gray-500"},wp.element.createElement(e.Content,{value:t.contentOtT}))),wp.element.createElement("div",{class:"mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6"}," ",wp.element.createElement("span",{class:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},wp.element.createElement(e.Content,{value:t.contentzhe})),wp.element.createElement("span",{class:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},wp.element.createElement(e.Content,{value:t.contenteiv})))))))))}})})();