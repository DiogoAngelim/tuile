(()=>{"use strict";const{registerBlockType:A}=wp.blocks,{RichText:e,MediaUpload:t,InspectorControls:l}=wp.blockEditor,{Panel:n,PanelBody:a,PanelRow:m,TextareaControl:r}=wp.components;A("wp/with-large-screenshot",{title:"with-large-screenshot",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCACABaADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwClgKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z"}),category:"common",attributes:{contentuIk:{type:"string",default:"Serverless"},contentbHO:{type:"string",default:"No server? No problem."},contentecp:{type:"string",default:"Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla."},imageurlhQA:{attribute:"src",type:"string",selector:"img",default:vars.url+"https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"},imagealtJBn:{attribute:"alt",type:"string",selector:"img",default:""}},edit(A){const{attributes:a,setAttributes:m}=A;return wp.element.createElement("div",null,wp.element.createElement(l,null,wp.element.createElement(n,null)),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{className:"relative bg-gray-50 pt-16 overflow-hidden sm:pt-24 lg:pt-32"},wp.element.createElement("div",{className:"mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl"},wp.element.createElement("div",null,wp.element.createElement("h2",{className:"text-base font-semibold tracking-wider text-indigo-600 uppercase"},wp.element.createElement(e,{tagName:"span",value:a.contentuIk,default:"Serverless",onChange:A=>{m({contentuIk:A})}})),wp.element.createElement("p",{className:"mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"},wp.element.createElement(e,{tagName:"span",value:a.contentbHO,default:"No server? No problem.",onChange:A=>{m({contentbHO:A})}})),wp.element.createElement("p",{className:"mt-5 max-w-prose mx-auto text-xl text-gray-500"},wp.element.createElement(e,{tagName:"span",value:a.contentecp,default:"Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.",onChange:A=>{m({contentecp:A})}}))),wp.element.createElement("div",{className:"mt-12 -mb-10 sm:-mb-24 lg:-mb-80"},wp.element.createElement(t,{onSelect:A=>{m({imageurlhQA:A.url,imagealtJBn:A.alt})},type:"image",render:({open:A})=>wp.element.createElement("img",{src:a.imageurlhQA,alt:a.imagealtJBn,onClick:A,className:"rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"})})))))))},save(A){const{attributes:t}=A;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{class:"relative bg-gray-50 pt-16 overflow-hidden sm:pt-24 lg:pt-32"},wp.element.createElement("div",{class:"mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl"},wp.element.createElement("div",null,wp.element.createElement("h2",{class:"text-base font-semibold tracking-wider text-indigo-600 uppercase"},wp.element.createElement(e.Content,{value:t.contentuIk})),wp.element.createElement("p",{class:"mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"},wp.element.createElement(e.Content,{value:t.contentbHO})),wp.element.createElement("p",{class:"mt-5 max-w-prose mx-auto text-xl text-gray-500"},wp.element.createElement(e.Content,{value:t.contentecp}))),wp.element.createElement("div",{class:"mt-12 -mb-10 sm:-mb-24 lg:-mb-80"},wp.element.createElement("img",{src:t.imageurlhQA,alt:t.imagealtJBn,class:"rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"}))))))}})})();