(()=>{"use strict";const{registerBlockType:e}=wp.blocks,{RichText:A,MediaUpload:t,InspectorControls:n}=wp.blockEditor,{Panel:l,PanelBody:a,PanelRow:c,TextareaControl:r}=wp.components;e("wp/full-width-bar",{title:"full-width-bar",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,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NhEolEBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXPP6vx/ZFZivlvb4qZucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYH/9k="}),category:"common",attributes:{contentiZX:{type:"string",default:"Home"},contentPOM:{type:"string",default:"Projects"},contentCyA:{type:"string",default:"Project Nero"},svgFWn:{type:"string",default:'<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>'},svgvaE:{type:"string",default:'<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"/>'},svgozh:{type:"string",default:'<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"/>'}},edit(e){const{attributes:t,setAttributes:w}=e;return wp.element.createElement("div",null,wp.element.createElement(n,null,wp.element.createElement(l,null,wp.element.createElement(a,{title:"SVG Markup"},wp.element.createElement(c,null,wp.element.createElement("div",null,wp.element.createElement(r,{label:"SVG Content",help:"Enter your SVG content...",value:t.svgFWn,onChange:e=>{w({svgFWn:e})}})))),wp.element.createElement(a,{title:"SVG Markup"},wp.element.createElement(c,null,wp.element.createElement("div",null,wp.element.createElement(r,{label:"SVG Content",help:"Enter your SVG content...",value:t.svgvaE,onChange:e=>{w({svgvaE:e})}})))),wp.element.createElement(a,{title:"SVG Markup"},wp.element.createElement(c,null,wp.element.createElement("div",null,wp.element.createElement(r,{label:"SVG Content",help:"Enter your SVG content...",value:t.svgozh,onChange:e=>{w({svgozh:e})}})))))),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("nav",{className:"bg-white border-b border-gray-200 flex","aria-label":"Breadcrumb"},wp.element.createElement("ol",{role:"list",className:"max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8"},wp.element.createElement("li",{className:"flex"},wp.element.createElement("div",{className:"flex items-center"}," ",wp.element.createElement("span",{className:"text-gray-400 hover:text-gray-500"},wp.element.createElement("svg",{className:"flex-shrink-0 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgFWn}}),wp.element.createElement("span",{className:"sr-only"},wp.element.createElement(A,{tagName:"span",value:t.contentiZX,default:"Home",onChange:e=>{w({contentiZX:e})}}))))),wp.element.createElement("li",{className:"flex"},wp.element.createElement("div",{className:"flex items-center"},wp.element.createElement("svg",{className:"flex-shrink-0 w-6 h-full text-gray-200",viewBox:"0 0 24 44",preserveAspectRatio:"none",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgvaE}}),wp.element.createElement("span",{className:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"},wp.element.createElement(A,{tagName:"span",value:t.contentPOM,default:"Projects",onChange:e=>{w({contentPOM:e})}})))),wp.element.createElement("li",{className:"flex"},wp.element.createElement("div",{className:"flex items-center"},wp.element.createElement("svg",{className:"flex-shrink-0 w-6 h-full text-gray-200",viewBox:"0 0 24 44",preserveAspectRatio:"none",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgozh}}),wp.element.createElement("span",{className:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700","aria-current":"page"},wp.element.createElement(A,{tagName:"span",value:t.contentCyA,default:"Project Nero",onChange:e=>{w({contentCyA:e})}})))))))))},save(e){const{attributes:t}=e;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("nav",{class:"bg-white border-b border-gray-200 flex","aria-label":"Breadcrumb"},wp.element.createElement("ol",{role:"list",class:"max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8"},wp.element.createElement("li",{class:"flex"},wp.element.createElement("div",{class:"flex items-center"}," ",wp.element.createElement("span",{class:"text-gray-400 hover:text-gray-500"},wp.element.createElement("svg",{class:"flex-shrink-0 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgFWn}}),wp.element.createElement("span",{class:"sr-only"},wp.element.createElement(A.Content,{value:t.contentiZX}))))),wp.element.createElement("li",{class:"flex"},wp.element.createElement("div",{class:"flex items-center"},wp.element.createElement("svg",{class:"flex-shrink-0 w-6 h-full text-gray-200",viewBox:"0 0 24 44",preserveAspectRatio:"none",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgvaE}}),wp.element.createElement("span",{class:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"},wp.element.createElement(A.Content,{value:t.contentPOM})))),wp.element.createElement("li",{class:"flex"},wp.element.createElement("div",{class:"flex items-center"},wp.element.createElement("svg",{class:"flex-shrink-0 w-6 h-full text-gray-200",viewBox:"0 0 24 44",preserveAspectRatio:"none",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",dangerouslySetInnerHTML:{__html:t.svgozh}}),wp.element.createElement("span",{class:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700","aria-current":"page"},wp.element.createElement(A.Content,{value:t.contentCyA}))))))))}})})();