(()=>{"use strict";const{registerBlockType:A}=wp.blocks,{RichText:e,MediaUpload:t,InspectorControls:n}=wp.blockEditor,{Panel:l,PanelBody:a,PanelRow:r,TextareaControl:c}=wp.components;A("wp/simple-with-select-menu",{title:"simple-with-select-menu",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAFIBaADASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAUGAgQHAwEI/8QAShAAAgIBAgMEBgcFBQcCBgMAAAECAwQFERIhMQYTQVEHFGFxktEiMlKBkaGxFTZ0ssEzNUJycxYXIyRU0vBikzRDU1XC4YKi8f/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAcEQEBAQADAQEBAAAAAAAAAAAAEQECEkEhMWH/2gAMAwEAAhEDEQA/AOnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="}),category:"common",attributes:{contentwjj:{type:"string",default:"Pricing Plans"},contentkYj:{type:"string",default:"Start building for free, then add a site plan to go live. Account plans unlock additional features."},contentJRe:{type:"string",default:"Currency"},contentsmX:{type:"string",default:"Argentina (ARS)"},contentpSn:{type:"string",default:"Australia (AUD)"},contentZha:{type:"string",default:"United States (USD)"},contentXSG:{type:"string",default:"Canada (CAD)"},contentgth:{type:"string",default:"France (EUR)"},contentWIr:{type:"string",default:"Japan (JPY)"},contentcVt:{type:"string",default:"Nigeria (NGN)"},contentFnL:{type:"string",default:"Switzerland (CHF)"},contentuPg:{type:"string",default:"United Kingdom (GBP)"},svgsDk:{type:"string",default:'<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>'}},edit(A){const{attributes:t,setAttributes:p}=A;return wp.element.createElement("div",null,wp.element.createElement(n,null,wp.element.createElement(l,null,wp.element.createElement(a,{title:"SVG Markup"},wp.element.createElement(r,null,wp.element.createElement("div",null,wp.element.createElement(c,{label:"SVG Content",help:"Enter your SVG content...",value:t.svgsDk,onChange:A=>{p({svgsDk:A})}})))))),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{className:"bg-white"},wp.element.createElement("div",{className:"max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between"},wp.element.createElement("div",{className:"max-w-xl"},wp.element.createElement("h2",{className:"text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"},wp.element.createElement(e,{tagName:"span",value:t.contentwjj,default:"Pricing Plans",onChange:A=>{p({contentwjj:A})}})),wp.element.createElement("p",{className:"mt-5 text-xl text-gray-500"},wp.element.createElement(e,{tagName:"span",value:t.contentkYj,default:"Start building for free, then add a site plan to go live. Account plans unlock additional features.",onChange:A=>{p({contentkYj:A})}}))),wp.element.createElement("div",{className:"mt-10 w-full max-w-xs"},wp.element.createElement("label",{for:"currency",className:"block text-base font-medium text-gray-500"},wp.element.createElement(e,{tagName:"span",value:t.contentJRe,default:"Currency",onChange:A=>{p({contentJRe:A})}})),wp.element.createElement("div",{className:"mt-1.5 relative"},wp.element.createElement("select",{id:"currency",name:"currency",className:"appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},wp.element.createElement("option",null,wp.element.createElement(e,{tagName:"span",value:t.contentsmX,default:"Argentina (ARS)",onChange:A=>{p({contentsmX:A})}})),wp.element.createElement("option",null,wp.element.createElement(e,{tagName:"span",value:t.contentpSn,default:"Australia (AUD)",onChange:A=>{p({contentpSn:A})}})),wp.element.createElement("option",{selected:""},wp.element.createElement(e,{tagName:"span",value:t.contentZha,default:"United States (USD)",onChange:A=>{p({contentZha:A})}})),wp.element.createElement("option",null,wp.element.createElement(e,{tagName:"span",value:t.contentXSG,default:"Canada (CAD)",onChange:A=>{p({contentXSG:A})}})),wp.element.createElement("option",null,wp.element.createElement(e,{tagName:"span",value:t.contentgth,default:"France (EUR)",onChange:A=>{p({contentgth:A})}})),wp.element.createElement("option",null,wp.element.createElement(e,{tagName:"span",value:t.contentWIr,default:"Japan (JPY)",onChange:A=>{p({contentWIr:A})}})),wp.element.createElement("option",null,wp.element.createElement(e,{tagName:"span",value:t.contentcVt,default:"Nigeria (NGN)",onChange:A=>{p({contentcVt:A})}})),wp.element.createElement("option",null,wp.element.createElement(e,{tagName:"span",value:t.contentFnL,default:"Switzerland (CHF)",onChange:A=>{p({contentFnL:A})}})),wp.element.createElement("option",null,wp.element.createElement(e,{tagName:"span",value:t.contentuPg,default:"United Kingdom (GBP)",onChange:A=>{p({contentuPg:A})}}))),wp.element.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center"},wp.element.createElement("svg",{className:"h-4 w-4 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgsDk}})))))))))},save(A){const{attributes:t}=A;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{class:"bg-white"},wp.element.createElement("div",{class:"max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between"},wp.element.createElement("div",{class:"max-w-xl"},wp.element.createElement("h2",{class:"text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"},wp.element.createElement(e.Content,{value:t.contentwjj})),wp.element.createElement("p",{class:"mt-5 text-xl text-gray-500"},wp.element.createElement(e.Content,{value:t.contentkYj}))),wp.element.createElement("div",{class:"mt-10 w-full max-w-xs"},wp.element.createElement("label",{for:"currency",class:"block text-base font-medium text-gray-500"},wp.element.createElement(e.Content,{value:t.contentJRe})),wp.element.createElement("div",{class:"mt-1.5 relative"},wp.element.createElement("select",{id:"currency",name:"currency",class:"appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},wp.element.createElement("option",null,wp.element.createElement(e.Content,{value:t.contentsmX})),wp.element.createElement("option",null,wp.element.createElement(e.Content,{value:t.contentpSn})),wp.element.createElement("option",{selected:""},wp.element.createElement(e.Content,{value:t.contentZha})),wp.element.createElement("option",null,wp.element.createElement(e.Content,{value:t.contentXSG})),wp.element.createElement("option",null,wp.element.createElement(e.Content,{value:t.contentgth})),wp.element.createElement("option",null,wp.element.createElement(e.Content,{value:t.contentWIr})),wp.element.createElement("option",null,wp.element.createElement(e.Content,{value:t.contentcVt})),wp.element.createElement("option",null,wp.element.createElement(e.Content,{value:t.contentFnL})),wp.element.createElement("option",null,wp.element.createElement(e.Content,{value:t.contentuPg}))),wp.element.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center"},wp.element.createElement("svg",{class:"h-4 w-4 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgsDk}}))))))))}})})();