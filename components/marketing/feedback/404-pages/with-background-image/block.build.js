(()=>{"use strict";const{registerBlockType:A}=wp.blocks,{RichText:e,MediaUpload:t,InspectorControls:n}=wp.blockEditor,{Panel:a,PanelBody:l,PanelRow:m,TextareaControl:p}=wp.components;A("wp/with-background-image",{title:"with-background-image",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAIuBaADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAMEAgUGAQf/xAA7EAEAAgEDAgMHAgQEBAcAAAAAAQIDBBESBRMhMVEUIjJBYXGRUoEGFULBM2KhsRYjJDQ1U3SD0eHw/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APpwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z"}),category:"common",attributes:{contentzPQ:{type:"string",default:"404 error"},contentvei:{type:"string",default:"Uh oh! I think you’re lost."},contentArg:{type:"string",default:"It looks like the page you’re looking for doesn't exist."},contentYpF:{type:"string",default:" Go back home "}},edit(A){const{attributes:t,setAttributes:l}=A;return wp.element.createElement("div",null,wp.element.createElement(n,null,wp.element.createElement(a,null)),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("main",{className:"min-h-full bg-cover bg-top sm:bg-top",style:"background-image: url('photo-1545972154-9bb223aac798.jpeg')"},wp.element.createElement("div",{className:"max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48"},wp.element.createElement("p",{className:"text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide"},wp.element.createElement(e,{tagName:"span",value:t.contentzPQ,default:"404 error",onChange:A=>{l({contentzPQ:A})}})),wp.element.createElement("h1",{className:"mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl"},wp.element.createElement(e,{tagName:"span",value:t.contentvei,default:"Uh oh! I think you’re lost.",onChange:A=>{l({contentvei:A})}})),wp.element.createElement("p",{className:"mt-2 text-lg font-medium text-black text-opacity-50"},wp.element.createElement(e,{tagName:"span",value:t.contentArg,default:"It looks like the page you’re looking for doesn't exist.",onChange:A=>{l({contentArg:A})}})),wp.element.createElement("div",{className:"mt-6"}," ",wp.element.createElement("span",{className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"},wp.element.createElement(e,{tagName:"span",value:t.contentYpF,default:"Go back home",onChange:A=>{l({contentYpF:A})}}))))))))},save(A){const{attributes:t}=A;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("main",{class:"min-h-full bg-cover bg-top sm:bg-top",style:"background-image: url('photo-1545972154-9bb223aac798.jpeg')"},wp.element.createElement("div",{class:"max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48"},wp.element.createElement("p",{class:"text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide"},wp.element.createElement(e.Content,{value:t.contentzPQ})),wp.element.createElement("h1",{class:"mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl"},wp.element.createElement(e.Content,{value:t.contentvei})),wp.element.createElement("p",{class:"mt-2 text-lg font-medium text-black text-opacity-50"},wp.element.createElement(e.Content,{value:t.contentArg})),wp.element.createElement("div",{class:"mt-6"}," ",wp.element.createElement("span",{class:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"},wp.element.createElement(e.Content,{value:t.contentYpF})))))))}})})();