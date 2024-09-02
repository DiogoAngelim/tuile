(()=>{"use strict";const{registerBlockType:A}=wp.blocks,{RichText:e,MediaUpload:l,InspectorControls:t}=wp.blockEditor,{Panel:a,PanelBody:n,PanelRow:m,TextareaControl:r}=wp.components;A("wp/custom-with-avatar",{title:"custom-with-avatar",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABCBaADASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAIDBAYFAQf/xAAyEAABAwQBAwIEBQUAAwAAAAAAAQIDBBNTkhEFEiExQRQiUXEGMjNysUJSYYGRFWKh/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEDBP/EABoRAQEBAQEBAQAAAAAAAAAAAAARAQIDEjH/2gAMAwEAAhEDEQA/AO/qerU1L1Sm6fIj7tQnLVRE7W+vHK8+OeFRPsbMlXTQzMhlqIWSv/Kxz0RzvsnucvWdO6tXr1KvhVsTllasEckK3FSJeWq1eU45Xn29yepsmlq31VPQVLp6mOJzoJ6TvjkXhPHd6xqnvzx6FiV1S1dM2pSmdUQpOvlI1encv+vUxRV8SwzTVLo6dkUro1c+Vqp4XjnlF8fZfJz1RTyx9cctNSTSLJVse+OelRzPbmRsqfl4RPRff2IdSzRzRzz0b5oo+p1L1p1REdIjue1zUdx3ceohXUfG0nZ3/FQdvd291xOOeOePvx5KbVUz6dahlRE6FPWRHorf++hx1JSJVK5jaBWwp1pHvhRqORjbf9XHKJ5VOfZOeDN1DptSiVzKWnkZTs6jFOrGQ9yPZ2J3K1q+HeePH+BCuqbVUzqf4htREsHHNxHp2/8AfQwUfUoK2sqaeBUekDWOuNcitejueOOPsc0tDKtG+obT1U9P8dHNLC6mSNZGo3hVbGnr54XjhOeD0vw9Fx1nq1RHQy0lPMkKxpJErO7hHcqiff8AkQepT9UoqmsqKWGoY6anX529yfT2+vHv9DPBVU9Sjlpp4pkavDljejuF/wBHM19DUOqevwU9JIklVGx8MjWcNeiNRHN7vRFXhfH+Tb6XGkvXUqqSglo6ZlLaekkVvud3IqJx78Ii+RB0AAIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADExjZGI97Ucrk58+eCrMWJmqAWYKyjpa6JIquBkzEXuRHJzwv1T6GSzFiZqgsxYmaoBFLS09HAkNLCyKNPKNYnCGYizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqgsxYmaoBYIsxYmaoLMWJmqAWCLMWJmqCzFiZqgFgizFiZqhL2NjYr2NRqtTnx45AqD9CP9qfwfZHtjjc968NanKnyD9CP9qfwa3VOVpO1PRXJyB40vWpJep2VlsRI1FRvPHKqv1/0Z39Vtt7oalj1ReFRXIvn6HM9Ugig6lytOkyyOYvaq+yqvPCr4T8psVVJSuolWojYqJ/rj+OTn73fp1cc5vDsum1zK+lSVqcOTw5v0U2jw/w6xsbVbEqrGrOUVfue4b5+ObcmwBy/4g6N0uXrvR5JenUr31NW9JnOiRVkSy9fm+vlE/4a7q6vpaCr6hRzxQUXT6taZlA2BvasbXoxfPqjl8qnHj08FR2AOOreodbanUaun6jGyOl6iyljhdA1zVa5Y28uX18K/lOFT09/b2eiz1qdR6lQVtV8V8M6N0cqxtY5Ue3nhUbwnhUA9hVROOVROfQHL9O6b0/rNV1efq1PHUzx1kkLbvlYY2onajf7fHnlOPUqOWsq61vTek9Xt01LRRytqXNbM6oVyuRFVy+FaiM8qnlefUDpj53N7+zuTu454588HK0HVep9dfRxU9U2gV1A2qkeyJH97nOVvCd39Pyqv18p5PIl/EdU2uoKxWNZUVdAkLp+xVhgW92rI7/15Tx908gfoQIha5kLGSSulc1qIr3IiK5fr48FgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxvnhjlZE+RrXv/K1V9TIaj6OkkSd8nDlevzOV3lvH0X24A2yJ/wBCT9q/wUxERjURyuRE8Kq88kz/AKEn7V/gBB+hH+1P4E0aSxKxfcQfosT3ROF+5YH5x+Maush6hFBSUclyLz3Pb4kTx+X68KRRvrOptjdXMSPheLSJ5+/B+kPjZInEjGuRPPDk5Jjghi/SiYzn+1qIZ9ed2tePT5yMVDTJTxrynDl/+IbIBoyYZ6SComp5po+6Smer4l5VO1ytVvP+fCr6mnL0DpctetbJS8zK9JFTvcjHPT0crOe1VThPKpyekANJ/SqF8U0ToOWTztqJE73fNIitVF9fq1vj08GeKkgiqp6mNnE0/bcdyvzdqcJ49jMAPLr/AMPdL6hUvqKmB9yRqNkWOZ8aSInojkaqI7/ZVZ0HpdakKTUvFmO0y090XDP7PlVOW/4XwekAPOq+hdMrGQtlpu1IGW41ie6JWs8fLy1U+Xwnj0L/APD9O7e34SPs+H+F7PPba/t49ODeAGKmp46Wmjp4UckcTUa1HOVyoienleVUygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA05unRSzK/ucxr15lY1eEk+5uAAiIiIiJwiET/oSftX+CyJ/0Xp7qnCfcDUrXOY9FY5W8+vC8cmtelyv2UAqF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2UXpcr9lAAXpcr9lF6XK/ZQAF6XK/ZRelyv2UABelyv2U2aJznvVXuV3HpyvPAAH/2Q=="}),category:"common",attributes:{contentAop:{type:"string",default:" Assigned to "},contentAgb:{type:"string",default:" Tom Cook "},contentoyt:{type:"string",default:" Wade Cooper "},imageurlJKW:{attribute:"src",type:"string",selector:"img",default:vars.url+"photo-1472099645785-5658abf4ff4e.jpeg"},imagealtPSZ:{attribute:"alt",type:"string",selector:"img",default:""},imageurlmxq:{attribute:"src",type:"string",selector:"img",default:vars.url+"photo-1491528323818-fdd1faba62cc.jpeg"},imagealtFGd:{attribute:"alt",type:"string",selector:"img",default:""},svgNiz:{type:"string",default:'<path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>'},svgnUg:{type:"string",default:'<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>'}},edit(A){const{attributes:i,setAttributes:o}=A;return wp.element.createElement("div",null,wp.element.createElement(t,null,wp.element.createElement(a,null,wp.element.createElement(n,{title:"SVG Markup"},wp.element.createElement(m,null,wp.element.createElement("div",null,wp.element.createElement(r,{label:"SVG Content",help:"Enter your SVG content...",value:i.svgNiz,onChange:A=>{o({svgNiz:A})}})))),wp.element.createElement(n,{title:"SVG Markup"},wp.element.createElement(m,null,wp.element.createElement("div",null,wp.element.createElement(r,{label:"SVG Content",help:"Enter your SVG content...",value:i.svgnUg,onChange:A=>{o({svgnUg:A})}})))))),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("label",{id:"listbox-label",className:"block text-sm font-medium text-gray-700"},wp.element.createElement(e,{tagName:"span",value:i.contentAop,default:"Assigned to",onChange:A=>{o({contentAop:A})}})),wp.element.createElement("div",{className:"mt-1 relative"},wp.element.createElement("button",{type:"button",className:"relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","aria-haspopup":"listbox","aria-expanded":"true","aria-labelledby":"listbox-label"}," ",wp.element.createElement("span",{className:"flex items-center"},wp.element.createElement(l,{onSelect:A=>{o({imageurlJKW:A.url,imagealtPSZ:A.alt})},type:"image",render:({open:A})=>wp.element.createElement("img",{src:i.imageurlJKW,alt:i.imagealtPSZ,onClick:A,className:"flex-shrink-0 h-6 w-6 rounded-full"})}),wp.element.createElement("span",{className:"ml-3 block truncate"},wp.element.createElement(e,{tagName:"span",value:i.contentAgb,default:"Tom Cook",onChange:A=>{o({contentAgb:A})}})))," ",wp.element.createElement("span",{className:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},wp.element.createElement("svg",{className:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:i.svgNiz}}))),wp.element.createElement("ul",{className:"absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",tabindex:"-1",role:"listbox","aria-labelledby":"listbox-label","aria-activedescendant":"listbox-option-3"},wp.element.createElement("li",{className:"text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9",id:"listbox-option-0",role:"option"},wp.element.createElement("div",{className:"flex items-center"},wp.element.createElement(l,{onSelect:A=>{o({imageurlmxq:A.url,imagealtFGd:A.alt})},type:"image",render:({open:A})=>wp.element.createElement("img",{src:i.imageurlmxq,alt:i.imagealtFGd,onClick:A,className:"flex-shrink-0 h-6 w-6 rounded-full"})})," ",wp.element.createElement("span",{className:"font-normal ml-3 block truncate"},wp.element.createElement(e,{tagName:"span",value:i.contentoyt,default:"Wade Cooper",onChange:A=>{o({contentoyt:A})}})))," ",wp.element.createElement("span",{className:"text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"},wp.element.createElement("svg",{className:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:i.svgnUg}})))))))))},save(A){const{attributes:l}=A;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("label",{id:"listbox-label",class:"block text-sm font-medium text-gray-700"},wp.element.createElement(e.Content,{value:l.contentAop})),wp.element.createElement("div",{class:"mt-1 relative"},wp.element.createElement("button",{type:"button",class:"relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","aria-haspopup":"listbox","aria-expanded":"true","aria-labelledby":"listbox-label"}," ",wp.element.createElement("span",{class:"flex items-center"},wp.element.createElement("img",{src:l.imageurlJKW,alt:l.imagealtPSZ,class:"flex-shrink-0 h-6 w-6 rounded-full"}),wp.element.createElement("span",{class:"ml-3 block truncate"},wp.element.createElement(e.Content,{value:l.contentAgb})))," ",wp.element.createElement("span",{class:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},wp.element.createElement("svg",{class:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:l.svgNiz}}))),wp.element.createElement("ul",{class:"absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",tabindex:"-1",role:"listbox","aria-labelledby":"listbox-label","aria-activedescendant":"listbox-option-3"},wp.element.createElement("li",{class:"text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9",id:"listbox-option-0",role:"option"},wp.element.createElement("div",{class:"flex items-center"},wp.element.createElement("img",{src:l.imageurlmxq,alt:l.imagealtFGd,class:"flex-shrink-0 h-6 w-6 rounded-full"})," ",wp.element.createElement("span",{class:"font-normal ml-3 block truncate"},wp.element.createElement(e.Content,{value:l.contentoyt})))," ",wp.element.createElement("span",{class:"text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"},wp.element.createElement("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:l.svgnUg}}))))))))}})})();