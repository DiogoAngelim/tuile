(()=>{"use strict";const{registerBlockType:e}=wp.blocks,{RichText:t,MediaUpload:n,InspectorControls:a}=wp.blockEditor,{Panel:l,PanelBody:m,PanelRow:s,TextareaControl:r}=wp.components;e("wp/with-double-column-and-persistent-mobile-nav",{title:"with-double-column-and-persistent-mobile-nav",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABBBaADASIAAhEBAxEB/8QAGwABAQEBAQEBAQAAAAAAAAAAAAUEBgMBAgf/xAA2EAEAAgIBAwIEAwcDBAMAAAAAAQIDBBEFEiETMQZBUWEUInEVIzIzgZGhFlLRJEKx8FSi4f/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBf/EAB8RAQEAAgICAwEAAAAAAAAAAAARAQMCBBIiEzFRgf/aAAwDAQACEQMRAD8A/pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADNvb+r0/B625mrjr8ufeZ+0fNpT9ro2nu7n4ndp68xXtpS0/lpH6fOefm3w8b7/Qw4fi/pGXLFJyZccTPHdenj/C5iyY82OuTFet6WjmLVnmJ/q4f4g+E8mC34jpOO+TDP8AFhiebU/T5zH+U/ovWuo9JvOviwzlpaefRvWeYn7fR356mvbw89Gf5lm/r+lCf0jJv7GG2x1HHGC15/d4I/7K/f7z/wC/NQfP5cfHMaAGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGDq+7l0MODPjrScc7FKZptE/lpaeOY+/Mwn/6gvTe6rjyY6Rg1MVr4beebzSI74nz9ZiFgviJX4gx4MFI3MOa2bHipfatgxTNME2jnz55/wDL02/iLT1c2bHbFs5IwVpbLfFj7q1raOYtM8+xBXErF1/St+I9WufXjBi9aZzY+3vx/wC6Pt/l8/1Bq1wbGTNg2sNtfHGW2PLj7bWpM8cxHPkgrDBo9WwbuzfXriz4ctaRkiubH299J8RaPs3oAAAy9U2b6fS9vaxRWb4cN71i3tMxEz5SrfEF4+Fo6l6Vfxf8r0ePHq88ccc+3z9/YgviNj69jrpal8uDNm2M2rTYyU18fd2VmI5n39uefrPh+8/xBqYslMeLFs7E3142K+hj7v3czMc+/wBlgrDy1djFt6uLYwW7seWsXrP2l6oAAAl7+7tz1PF03p8Ya5rYpzZMmaJmKV54jiImOZmfv8iOo7Gjq5L9Xw1i9csY8U6/5vX59u2vPMT9p+hBUEm3xBp01r5smLZpbHlriyYbY/3lbW9vHPmP05eVvifUpGScmru09G0Vz92H+Tz7Tbz7Tz8uVgtiRs/EWpr7Gzitg27/AIWYjNemLurjiY55mefb/h6bvXNbTtM3w7N8Va1tfNjxc0pE+0zPz/pykFMSdz4g1dTZ2MNsG1knWrW2W2PH3VpWY55mefZ6X63p0wbma3qdun298REc27oiazXz5558EFIfInmsTxMc/Kfk+gAADntvrO1HV9nSw59HWtgivp02omJ2OY58TzERHy+fs1/tjJXrlOnZdLJWJ14y2yRMTFZ5jnz/ALY9ufqsFYS9Trupt7GLFTHsUrn59DLkx9tMvHv2z/zw8sHxJp59P8XXBtxitNa45nF/NtM8dtfPmfH6EFkS/wBvaka1stsexXJXNGCdeacZO+fMRxzx5jzzzw2aW3XcwTkrizYpi01tTLTttEx/77wg0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPPPsYdendmyVpE+3Pzeidq467W7sbGaO6cWScdKz7ViOPPH3Bp193W2Z4wZq2n6e0/2loYuqYK31b54/JmwxN6Xj3jhp17zl18eSY4m9ItMfrAPQAAAAmYiJmZ4iBK6zs5PTyamHFN5nHFrWif4Y7uPb5g2YuoamXL6WPPW158RH1aUTenZnSiv7NjFGOYmtq5It2+Y+UeVPS2Z2aX78Xp3x3mlq93PE/qsGgPb3c9r9a3r4tTqGTHgjR288Yq0iJ9SkWmYraZ54nz7xx80HQgAAAAAAAAAAAAAAAAAAAAAAAAAAAgdY6d1bq2S1MO3Gpq1maxXzFsn1mePl9I/q4nYx9T6Ju9mS+XXyxPdE1v4t9+Y939VZeodO1OpYPR3MUXrE8xPPE1n6xLu6/c+P15Y9UzhE6R8W6WxrVjqOSMGxWPzTxPbb7x/wuaO7TfxWzYKz6HdxS8xx3/WYj6fL+kpWL4R6Pjy984sl+JiYra/hdpSuOlaY6xWlYiK1rHERH0h5b86M5urGTFfQHMoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJ1XT/H9L2dTmInLjmtZn5W+U/wB+EXY+G8+fpnT9ec2P1sWSZ2r8zxkree7JEePnPH0dKLRB3eldQtl6hj0smtGv1GOMk5e7uxz29s8RHifH6GToeb0Oq4cV8fbt6+PDh7pnx20mv5vH/jleCiD1PoOTqGTLF8tK48mjGvE+ZmLxeLRPH08M0/D2zk1N2s4NDBmza/o0nFa9ufPMzMz7R49oif1dOFSMEaOWOu03u6npV1JwzHM93d3RP9vDeCKAAy9U1r7nS9vVxTWL5sN6Vm3tEzEx5SJ+H834+2X1cf4ecM2jF5/nzTs7vb27f8uhFo5fL8N54/CZaY9PYyY9KmtkpmvetYmsfxVmI8x9phR0uk5NXerlicMY40a6/bTmOLRaZniJ58efqrhSMXRtTJodI1dTNNbZMOOK2ms8xM/ZtBAABL6jo7f7Rw9S6bbD69Mc4cmPNMxW9Jnn3iJ4mJZ83TeqbWtTLsbOCdzFs12MVIifSpERx28+88xM+VwWjn7dF3c+TJtbF9eNjNtYMtqUmeytMc+0TxzM+/yem90bZ2MPWqUviid/s9LmZ8cViJ7vH2+XK4FI5a2n1TY2+t4NT8PTDs5Ix2tmi0TWJxxE2rxHnxP+H56p8Nbu1GfDiyYMuG2KlMNs2S8Th7YiOIrHieZjnn7/ADdWFSI1+k57T1iYvi/67Xrix+Z8TFJr58e3M/dOydPvk69o6uPmaYsOP8dxWeyZx+aeeOJ5mf7Q6oKsAEAAEPq3T+p7k7GCKaGzrZo/dzsRMWweOJ44jz9Y9pfa9Hz4tvUvjy0yYqaX4PN3zMWmvj80ffx81sWiBp9I6hW/T8O3l1p1enTzjtj7u/JMVmteYnxHifrL83+H82T4b0dDJbDbPp3rkiJm3p3mJnxMx544l0IVI56vQ88dPz4/wnTe/Nlra2Ge+1JrEcfxT5i33iPCh0PR2NDTvi2csWm2SbUpF7XjFWeOKxa3mf8A9UQqgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw5dbPh2bbOn229T+ZitPEW+8T8m4BL2sfUd3FNJxUwU95p38zf7cx8m3U2Mexi5pHZan5bY596T9Hu/EYscZpzRSIyTHE2+cwo/YCAAAw4fzdZ2Z/2Y6V/Tny3Mufp2psZZy5sPdefee6Y5/tINTDofl3N6nyjJFv7wfsfp/wD8f/72/wCXvramvqRaNfH2d3v5mef7qPdz2v0TepXU0MuXBPT9TP61LRM+peImZrWY448T8/s6EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABvARQAAAAAAAAAAAH/9k="}),category:"common",attributes:{contentvGl:{type:"string",default:"Workflow"},contentzEZ:{type:"string",default:"Women"},contentDoW:{type:"string",default:"Clothing"},contentWok:{type:"string",default:" Tops "},contentwYc:{type:"string",default:" Dresses "},contentxmL:{type:"string",default:" Pants "},contentnyP:{type:"string",default:" Denim "},contentjMa:{type:"string",default:" Sweaters "},contentwPB:{type:"string",default:" T-Shirts "},contentwKk:{type:"string",default:" Jackets "},contentZzA:{type:"string",default:" Activewear "},contentEUc:{type:"string",default:" Shorts "},contentZLl:{type:"string",default:" Swimwear "},contentYqn:{type:"string",default:" Browse All "},contentqEp:{type:"string",default:"Accessories"},contentiwz:{type:"string",default:" Shoes "},contentsQO:{type:"string",default:" Jewelry "},contentWTm:{type:"string",default:" Handbags "},contentjyT:{type:"string",default:" Socks "},contentrJB:{type:"string",default:" Hats "},contentONz:{type:"string",default:" Browse All "},contentjPN:{type:"string",default:"Categories"},contentWlk:{type:"string",default:" New Arrivals "},contentSiU:{type:"string",default:" Sale "},contentXPX:{type:"string",default:" Basic Tees "},contentMtL:{type:"string",default:" Artwork Tees "},contentLlJ:{type:"string",default:"Men"},contentPmj:{type:"string",default:"Clothing"},contentLhz:{type:"string",default:" Dress Shirts "},contentpGO:{type:"string",default:" Pants "},contentbQH:{type:"string",default:" Jackets "},contenttqy:{type:"string",default:" T-Shirts "},contentBDq:{type:"string",default:" Jeans "},contentTqb:{type:"string",default:" Hoodies "},contentLLE:{type:"string",default:" Vests "},contentqHy:{type:"string",default:" Kilts "},contentEtp:{type:"string",default:" Outdoors "},contentwvM:{type:"string",default:" Capes "},contentDvA:{type:"string",default:" Browse All "},contentgYB:{type:"string",default:"Accessories"},contentKkj:{type:"string",default:" Watches "},contentKdQ:{type:"string",default:" Boots "},contentBZr:{type:"string",default:" Fanny Packs "},contentqXG:{type:"string",default:" Sunglasses "},contentZpv:{type:"string",default:" Browse All "},contentskY:{type:"string",default:"Categories"},contentHgu:{type:"string",default:" Just Added "},contentuGQ:{type:"string",default:" Clearance "},contentuTH:{type:"string",default:" Graphic Tees "},contentNzr:{type:"string",default:"Company"},contentZud:{type:"string",default:"Stores"},contentPya:{type:"string",default:"Search"},contentdIH:{type:"string",default:"0"},contentOai:{type:"string",default:"items in cart, view bag"},imageurlLMx:{attribute:"src",type:"string",selector:"img",default:vars.url+"img/logos/workflow-mark.svg"},imagealtryQ:{attribute:"alt",type:"string",selector:"img",default:""},svgrfu:{type:"string",default:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>'},svgWpn:{type:"string",default:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>'}},edit(e){const{attributes:c,setAttributes:A}=e;return wp.element.createElement("div",null,wp.element.createElement(a,null,wp.element.createElement(l,null,wp.element.createElement(m,{title:"SVG Markup"},wp.element.createElement(s,null,wp.element.createElement("div",null,wp.element.createElement(r,{label:"SVG Content",help:"Enter your SVG content...",value:c.svgrfu,onChange:e=>{A({svgrfu:e})}})))),wp.element.createElement(m,{title:"SVG Markup"},wp.element.createElement(s,null,wp.element.createElement("div",null,wp.element.createElement(r,{label:"SVG Content",help:"Enter your SVG content...",value:c.svgWpn,onChange:e=>{A({svgWpn:e})}})))))),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{className:"bg-white"},wp.element.createElement("header",{className:"relative bg-white"},wp.element.createElement("nav",{"aria-label":"Top",className:"max-w-7xl mx-auto sm:px-6 lg:px-8"},wp.element.createElement("div",{className:"border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0"},wp.element.createElement("div",{className:"h-16 flex items-center justify-between"},wp.element.createElement("div",{className:"flex-1 flex"}," ",wp.element.createElement("span",null,wp.element.createElement("span",{className:"sr-only"},wp.element.createElement(t,{tagName:"span",value:c.contentvGl,default:"Workflow",onChange:e=>{A({contentvGl:e})}})),wp.element.createElement(n,{onSelect:e=>{A({imageurlLMx:e.url,imagealtryQ:e.alt})},type:"image",render:({open:e})=>wp.element.createElement("img",{src:c.imageurlLMx,alt:c.imagealtryQ,onClick:e,className:"h-8 w-auto"})}))),wp.element.createElement("div",{className:"absolute bottom-0 inset-x-0 sm:static sm:flex-1 sm:self-stretch"},wp.element.createElement("div",{className:"border-t h-14 px-4 flex space-x-8 overflow-x-auto pb-px sm:h-full sm:border-t-0 sm:justify-center sm:overflow-visible sm:pb-0"},wp.element.createElement("div",{className:"flex"},wp.element.createElement("div",{className:"relative flex"},wp.element.createElement("button",{type:"button",className:"border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px","aria-expanded":"false"},wp.element.createElement(t,{tagName:"span",value:c.contentzEZ,default:"Women",onChange:e=>{A({contentzEZ:e})}}))),wp.element.createElement("div",{className:"absolute top-full inset-x-0 text-gray-500 sm:text-sm"},wp.element.createElement("div",{className:"absolute inset-0 top-1/2 bg-white shadow","aria-hidden":"true"}),wp.element.createElement("div",{className:"relative bg-white"},wp.element.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},wp.element.createElement("div",{className:"grid grid-cols-1 items-start gap-y-10 gap-x-6 pt-10 pb-12 md:grid-cols-2 lg:gap-x-8"},wp.element.createElement("div",{className:"grid grid-cols-1 gap-y-10 gap-x-6 lg:gap-x-8"},wp.element.createElement("div",null,wp.element.createElement("p",{id:"clothing-heading",className:"font-medium text-gray-900"},wp.element.createElement(t,{tagName:"span",value:c.contentDoW,default:"Clothing",onChange:e=>{A({contentDoW:e})}})),wp.element.createElement("div",{className:"mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6"},wp.element.createElement("ul",{role:"list","aria-labelledby":"clothing-heading",className:"space-y-6 sm:space-y-4"},wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentWok,default:"Tops",onChange:e=>{A({contentWok:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentwYc,default:"Dresses",onChange:e=>{A({contentwYc:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentxmL,default:"Pants",onChange:e=>{A({contentxmL:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentnyP,default:"Denim",onChange:e=>{A({contentnyP:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentjMa,default:"Sweaters",onChange:e=>{A({contentjMa:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentwPB,default:"T-Shirts",onChange:e=>{A({contentwPB:e})}})))),wp.element.createElement("ul",{role:"list","aria-label":"More clothing",className:"mt-6 space-y-6 sm:mt-0 sm:space-y-4"},wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentwKk,default:"Jackets",onChange:e=>{A({contentwKk:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentZzA,default:"Activewear",onChange:e=>{A({contentZzA:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentEUc,default:"Shorts",onChange:e=>{A({contentEUc:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentZLl,default:"Swimwear",onChange:e=>{A({contentZLl:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentYqn,default:"Browse All",onChange:e=>{A({contentYqn:e})}}))))))),wp.element.createElement("div",{className:"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:gap-x-8"},wp.element.createElement("div",null,wp.element.createElement("p",{id:"accessories-heading",className:"font-medium text-gray-900"},wp.element.createElement(t,{tagName:"span",value:c.contentqEp,default:"Accessories",onChange:e=>{A({contentqEp:e})}})),wp.element.createElement("ul",{role:"list","aria-labelledby":"accessories-heading",className:"mt-4 border-t border-gray-200 pt-6 space-y-6 sm:space-y-4"},wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentiwz,default:"Shoes",onChange:e=>{A({contentiwz:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentsQO,default:"Jewelry",onChange:e=>{A({contentsQO:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentWTm,default:"Handbags",onChange:e=>{A({contentWTm:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentjyT,default:"Socks",onChange:e=>{A({contentjyT:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentrJB,default:"Hats",onChange:e=>{A({contentrJB:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentONz,default:"Browse All",onChange:e=>{A({contentONz:e})}}))))),wp.element.createElement("div",null,wp.element.createElement("p",{id:"categories-heading",className:"font-medium text-gray-900"},wp.element.createElement(t,{tagName:"span",value:c.contentjPN,default:"Categories",onChange:e=>{A({contentjPN:e})}})),wp.element.createElement("ul",{role:"list","aria-labelledby":"categories-heading",className:"mt-4 border-t border-gray-200 pt-6 space-y-6 sm:space-y-4"},wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentWlk,default:"New Arrivals",onChange:e=>{A({contentWlk:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentSiU,default:"Sale",onChange:e=>{A({contentSiU:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentXPX,default:"Basic Tees",onChange:e=>{A({contentXPX:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentMtL,default:"Artwork Tees",onChange:e=>{A({contentMtL:e})}}))))))))))),wp.element.createElement("div",{className:"flex"},wp.element.createElement("div",{className:"relative flex"},wp.element.createElement("button",{type:"button",className:"border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px","aria-expanded":"false"},wp.element.createElement(t,{tagName:"span",value:c.contentLlJ,default:"Men",onChange:e=>{A({contentLlJ:e})}}))),wp.element.createElement("div",{className:"absolute top-full inset-x-0 text-gray-500 sm:text-sm"},wp.element.createElement("div",{className:"absolute inset-0 top-1/2 bg-white shadow","aria-hidden":"true"}),wp.element.createElement("div",{className:"relative bg-white"},wp.element.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},wp.element.createElement("div",{className:"grid grid-cols-1 items-start gap-y-10 gap-x-6 pt-10 pb-12 md:grid-cols-2 lg:gap-x-8"},wp.element.createElement("div",{className:"grid grid-cols-1 gap-y-10 gap-x-6 lg:gap-x-8"},wp.element.createElement("div",null,wp.element.createElement("p",{id:"clothing-heading",className:"font-medium text-gray-900"},wp.element.createElement(t,{tagName:"span",value:c.contentPmj,default:"Clothing",onChange:e=>{A({contentPmj:e})}})),wp.element.createElement("div",{className:"mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6"},wp.element.createElement("ul",{role:"list","aria-labelledby":"clothing-heading",className:"space-y-6 sm:space-y-4"},wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentLhz,default:"Dress Shirts",onChange:e=>{A({contentLhz:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentpGO,default:"Pants",onChange:e=>{A({contentpGO:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentbQH,default:"Jackets",onChange:e=>{A({contentbQH:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contenttqy,default:"T-Shirts",onChange:e=>{A({contenttqy:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentBDq,default:"Jeans",onChange:e=>{A({contentBDq:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentTqb,default:"Hoodies",onChange:e=>{A({contentTqb:e})}})))),wp.element.createElement("ul",{role:"list","aria-label":"More clothing",className:"mt-6 space-y-6 sm:mt-0 sm:space-y-4"},wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentLLE,default:"Vests",onChange:e=>{A({contentLLE:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentqHy,default:"Kilts",onChange:e=>{A({contentqHy:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentEtp,default:"Outdoors",onChange:e=>{A({contentEtp:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentwvM,default:"Capes",onChange:e=>{A({contentwvM:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentDvA,default:"Browse All",onChange:e=>{A({contentDvA:e})}}))))))),wp.element.createElement("div",{className:"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:gap-x-8"},wp.element.createElement("div",null,wp.element.createElement("p",{id:"accessories-heading",className:"font-medium text-gray-900"},wp.element.createElement(t,{tagName:"span",value:c.contentgYB,default:"Accessories",onChange:e=>{A({contentgYB:e})}})),wp.element.createElement("ul",{role:"list","aria-labelledby":"accessories-heading",className:"mt-4 border-t border-gray-200 pt-6 space-y-6 sm:space-y-4"},wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentKkj,default:"Watches",onChange:e=>{A({contentKkj:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentKdQ,default:"Boots",onChange:e=>{A({contentKdQ:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentBZr,default:"Fanny Packs",onChange:e=>{A({contentBZr:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentqXG,default:"Sunglasses",onChange:e=>{A({contentqXG:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentZpv,default:"Browse All",onChange:e=>{A({contentZpv:e})}}))))),wp.element.createElement("div",null,wp.element.createElement("p",{id:"categories-heading",className:"font-medium text-gray-900"},wp.element.createElement(t,{tagName:"span",value:c.contentskY,default:"Categories",onChange:e=>{A({contentskY:e})}})),wp.element.createElement("ul",{role:"list","aria-labelledby":"categories-heading",className:"mt-4 border-t border-gray-200 pt-6 space-y-6 sm:space-y-4"},wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentHgu,default:"Just Added",onChange:e=>{A({contentHgu:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentuGQ,default:"Clearance",onChange:e=>{A({contentuGQ:e})}}))),wp.element.createElement("li",{className:"flex"}," ",wp.element.createElement("span",{className:"hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentuTH,default:"Graphic Tees",onChange:e=>{A({contentuTH:e})}})))))))))))," ",wp.element.createElement("span",{className:"flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentNzr,default:"Company",onChange:e=>{A({contentNzr:e})}})),wp.element.createElement("span",{className:"flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentZud,default:"Stores",onChange:e=>{A({contentZud:e})}})))),wp.element.createElement("div",{className:"flex-1 flex items-center justify-end"}," ",wp.element.createElement("span",{className:"p-2 text-gray-400 hover:text-gray-500"},wp.element.createElement("span",{className:"sr-only"},wp.element.createElement(t,{tagName:"span",value:c.contentPya,default:"Search",onChange:e=>{A({contentPya:e})}})),wp.element.createElement("svg",{className:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:c.svgrfu}})),wp.element.createElement("div",{className:"ml-4 flow-root lg:ml-8"}," ",wp.element.createElement("span",{className:"group -m-2 p-2 flex items-center"},wp.element.createElement("svg",{className:"flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:c.svgWpn}}),wp.element.createElement("span",{className:"ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"},wp.element.createElement(t,{tagName:"span",value:c.contentdIH,default:"0",onChange:e=>{A({contentdIH:e})}})),wp.element.createElement("span",{className:"sr-only"},wp.element.createElement(t,{tagName:"span",value:c.contentOai,default:"items in cart, view bag",onChange:e=>{A({contentOai:e})}})))))))))))))},save(e){const{attributes:n}=e;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{class:"bg-white"},wp.element.createElement("header",{class:"relative bg-white"},wp.element.createElement("nav",{"aria-label":"Top",class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},wp.element.createElement("div",{class:"border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0"},wp.element.createElement("div",{class:"h-16 flex items-center justify-between"},wp.element.createElement("div",{class:"flex-1 flex"}," ",wp.element.createElement("span",null,wp.element.createElement("span",{class:"sr-only"},wp.element.createElement(t.Content,{value:n.contentvGl})),wp.element.createElement("img",{src:n.imageurlLMx,alt:n.imagealtryQ,class:"h-8 w-auto"}))),wp.element.createElement("div",{class:"absolute bottom-0 inset-x-0 sm:static sm:flex-1 sm:self-stretch"},wp.element.createElement("div",{class:"border-t h-14 px-4 flex space-x-8 overflow-x-auto pb-px sm:h-full sm:border-t-0 sm:justify-center sm:overflow-visible sm:pb-0"},wp.element.createElement("div",{class:"flex"},wp.element.createElement("div",{class:"relative flex"},wp.element.createElement("button",{type:"button",class:"border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px","aria-expanded":"false"},wp.element.createElement(t.Content,{value:n.contentzEZ}))),wp.element.createElement("div",{class:"absolute top-full inset-x-0 text-gray-500 sm:text-sm"},wp.element.createElement("div",{class:"absolute inset-0 top-1/2 bg-white shadow","aria-hidden":"true"}),wp.element.createElement("div",{class:"relative bg-white"},wp.element.createElement("div",{class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},wp.element.createElement("div",{class:"grid grid-cols-1 items-start gap-y-10 gap-x-6 pt-10 pb-12 md:grid-cols-2 lg:gap-x-8"},wp.element.createElement("div",{class:"grid grid-cols-1 gap-y-10 gap-x-6 lg:gap-x-8"},wp.element.createElement("div",null,wp.element.createElement("p",{id:"clothing-heading",class:"font-medium text-gray-900"},wp.element.createElement(t.Content,{value:n.contentDoW})),wp.element.createElement("div",{class:"mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6"},wp.element.createElement("ul",{role:"list","aria-labelledby":"clothing-heading",class:"space-y-6 sm:space-y-4"},wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentWok}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentwYc}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentxmL}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentnyP}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentjMa}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentwPB})))),wp.element.createElement("ul",{role:"list","aria-label":"More clothing",class:"mt-6 space-y-6 sm:mt-0 sm:space-y-4"},wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentwKk}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentZzA}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentEUc}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentZLl}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentYqn}))))))),wp.element.createElement("div",{class:"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:gap-x-8"},wp.element.createElement("div",null,wp.element.createElement("p",{id:"accessories-heading",class:"font-medium text-gray-900"},wp.element.createElement(t.Content,{value:n.contentqEp})),wp.element.createElement("ul",{role:"list","aria-labelledby":"accessories-heading",class:"mt-4 border-t border-gray-200 pt-6 space-y-6 sm:space-y-4"},wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentiwz}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentsQO}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentWTm}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentjyT}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentrJB}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentONz}))))),wp.element.createElement("div",null,wp.element.createElement("p",{id:"categories-heading",class:"font-medium text-gray-900"},wp.element.createElement(t.Content,{value:n.contentjPN})),wp.element.createElement("ul",{role:"list","aria-labelledby":"categories-heading",class:"mt-4 border-t border-gray-200 pt-6 space-y-6 sm:space-y-4"},wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentWlk}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentSiU}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentXPX}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentMtL}))))))))))),wp.element.createElement("div",{class:"flex"},wp.element.createElement("div",{class:"relative flex"},wp.element.createElement("button",{type:"button",class:"border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px","aria-expanded":"false"},wp.element.createElement(t.Content,{value:n.contentLlJ}))),wp.element.createElement("div",{class:"absolute top-full inset-x-0 text-gray-500 sm:text-sm"},wp.element.createElement("div",{class:"absolute inset-0 top-1/2 bg-white shadow","aria-hidden":"true"}),wp.element.createElement("div",{class:"relative bg-white"},wp.element.createElement("div",{class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},wp.element.createElement("div",{class:"grid grid-cols-1 items-start gap-y-10 gap-x-6 pt-10 pb-12 md:grid-cols-2 lg:gap-x-8"},wp.element.createElement("div",{class:"grid grid-cols-1 gap-y-10 gap-x-6 lg:gap-x-8"},wp.element.createElement("div",null,wp.element.createElement("p",{id:"clothing-heading",class:"font-medium text-gray-900"},wp.element.createElement(t.Content,{value:n.contentPmj})),wp.element.createElement("div",{class:"mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6"},wp.element.createElement("ul",{role:"list","aria-labelledby":"clothing-heading",class:"space-y-6 sm:space-y-4"},wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentLhz}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentpGO}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentbQH}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contenttqy}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentBDq}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentTqb})))),wp.element.createElement("ul",{role:"list","aria-label":"More clothing",class:"mt-6 space-y-6 sm:mt-0 sm:space-y-4"},wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentLLE}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentqHy}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentEtp}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentwvM}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentDvA}))))))),wp.element.createElement("div",{class:"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:gap-x-8"},wp.element.createElement("div",null,wp.element.createElement("p",{id:"accessories-heading",class:"font-medium text-gray-900"},wp.element.createElement(t.Content,{value:n.contentgYB})),wp.element.createElement("ul",{role:"list","aria-labelledby":"accessories-heading",class:"mt-4 border-t border-gray-200 pt-6 space-y-6 sm:space-y-4"},wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentKkj}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentKdQ}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentBZr}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentqXG}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentZpv}))))),wp.element.createElement("div",null,wp.element.createElement("p",{id:"categories-heading",class:"font-medium text-gray-900"},wp.element.createElement(t.Content,{value:n.contentskY})),wp.element.createElement("ul",{role:"list","aria-labelledby":"categories-heading",class:"mt-4 border-t border-gray-200 pt-6 space-y-6 sm:space-y-4"},wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentHgu}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentuGQ}))),wp.element.createElement("li",{class:"flex"}," ",wp.element.createElement("span",{class:"hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentuTH})))))))))))," ",wp.element.createElement("span",{class:"flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentNzr})),wp.element.createElement("span",{class:"flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentZud})))),wp.element.createElement("div",{class:"flex-1 flex items-center justify-end"}," ",wp.element.createElement("span",{class:"p-2 text-gray-400 hover:text-gray-500"},wp.element.createElement("span",{class:"sr-only"},wp.element.createElement(t.Content,{value:n.contentPya})),wp.element.createElement("svg",{class:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:n.svgrfu}})),wp.element.createElement("div",{class:"ml-4 flow-root lg:ml-8"}," ",wp.element.createElement("span",{class:"group -m-2 p-2 flex items-center"},wp.element.createElement("svg",{class:"flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:n.svgWpn}}),wp.element.createElement("span",{class:"ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"},wp.element.createElement(t.Content,{value:n.contentdIH})),wp.element.createElement("span",{class:"sr-only"},wp.element.createElement(t.Content,{value:n.contentOai}))))))))))))}})})();