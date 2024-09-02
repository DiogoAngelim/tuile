
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-dark', {
            title: 'simple dark',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentMun": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentgho": {
    "type": "string",
    "default": "Team"
  },
  "contentEWE": {
    "type": "string",
    "default": "Projects"
  },
  "contentoEC": {
    "type": "string",
    "default": "Calendar"
  },
  "contentzNv": {
    "type": "string",
    "default": "View notifications"
  },
  "contentJFy": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentWLt": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentfaJ": {
    "type": "string",
    "default": "Settings"
  },
  "contentvhF": {
    "type": "string",
    "default": "Sign out"
  },
  "contentJYv": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentLDa": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentJUs": {
    "type": "string",
    "default": "Team"
  },
  "contentzDh": {
    "type": "string",
    "default": "Projects"
  },
  "contentbJi": {
    "type": "string",
    "default": "Calendar"
  },
  "contentrgP": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentqIU": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentUoR": {
    "type": "string",
    "default": "View notifications"
  },
  "contentOlN": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentdYz": {
    "type": "string",
    "default": "Settings"
  },
  "contentmBO": {
    "type": "string",
    "default": "Sign out"
  },
  "imageurlirO": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-500.svg'
  },
  "imagealtkWM": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurldId": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-500-mark-white-text.svg'
  },
  "imagealtoSG": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlmMU": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtIei": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlrBe": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealterh": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgWTw": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgHtw": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgTqf": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgGim": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  }
},
            edit(props) {
            const { attributes, setAttributes } = props;

            return (
                <div>
                    <InspectorControls>
                    
    <Panel>
      

































































































































































































































































































































































































































































































































































































































































    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgWTw }
            onChange={ ( value ) => {
              setAttributes({ svgWTw: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  

    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgHtw }
            onChange={ ( value ) => {
              setAttributes({ svgHtw: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  

    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgTqf }
            onChange={ ( value ) => {
              setAttributes({ svgTqf: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  

    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgGim }
            onChange={ ( value ) => {
              setAttributes({ svgGim: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  
    </Panel>
                    </InspectorControls>

                    <div>
    <div>
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlirO: media.url,
            imagealtkWM: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlirO } 
            alt={ attributes.imagealtkWM } 
            onClick={ open } 
            className="block lg:hidden h-8 w-auto"
          /> 
        )} 
      />
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurldId: media.url,
            imagealtoSG: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurldId } 
            alt={ attributes.imagealtoSG } 
            onClick={ open } 
            className="hidden lg:block h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4"> <span className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentMun} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentMun: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentgho} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentgho: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentEWE} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentEWE: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentoEC} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentoEC: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex items-center">
                            <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentzNv} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentzNv: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWTw }}
        >
      </svg>
      
                            </button>
                            <div className="ml-3 relative">
                                <div>
                                    <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentJFy} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentJFy: newtext });
      }}
    /></span>

                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlmMU: media.url,
            imagealtIei: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlmMU } 
            alt={ attributes.imagealtIei } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                    </button>
                                </div>
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentWLt} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentWLt: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentfaJ} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentfaJ: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentvhF} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentvhF: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentJYv} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentJYv: newtext });
      }}
    /></span>

                            
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHtw }}
        >
      </svg>
      
                            
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTqf }}
        >
      </svg>
      
                        </button>
                    </div>
                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1"> <span className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentLDa} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentLDa: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentJUs} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentJUs: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentzDh} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentzDh: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentbJi} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentbJi: newtext });
      }}
    /></span>

                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlrBe: media.url,
            imagealterh: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlrBe } 
            alt={ attributes.imagealterh } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-white">
                                <RichText tagName="span" value={attributes.contentrgP} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contentrgP: newtext }); }} /></div>
                            <div className="text-sm font-medium text-gray-400">
                                <RichText tagName="span" value={attributes.contentqIU} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentqIU: newtext }); }} /></div>
                        </div>
                        <button type="button" className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentUoR} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentUoR: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGim }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="mt-3 px-2 space-y-1"> <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentOlN} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentOlN: newtext });
      }}
    /></span>
 <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentdYz} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentdYz: newtext });
      }}
    /></span>
 <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentmBO} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentmBO: newtext });
      }}
    /></span>

                    </div>
                </div>
            </div>
        </nav>
    </div>
</div>
                </div>
                );
            },
            save(props) {
            const { attributes } = props;

            return (
                <div>
    <div>
        <nav class="bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            
      <img
            src={ attributes.imageurlirO } 
            alt={ attributes.imagealtkWM } 
            class="block lg:hidden h-8 w-auto"
          />
                            
      <img
            src={ attributes.imageurldId } 
            alt={ attributes.imagealtoSG } 
            class="hidden lg:block h-8 w-auto"
          />
                        </div>
                        <div class="hidden sm:block sm:ml-6">
                            <div class="flex space-x-4"> <span class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentMun} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentgho} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentEWE} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentoEC} /></span>

                            </div>
                        </div>
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex items-center">
                            <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentzNv} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWTw }}
        >
      </svg>
      
                            </button>
                            <div class="ml-3 relative">
                                <div>
                                    <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentJFy} /></span>

                                        
      <img
            src={ attributes.imageurlmMU } 
            alt={ attributes.imagealtIei } 
            class="h-8 w-8 rounded-full"
          />
                                    </button>
                                </div>
                                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentWLt} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentfaJ} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentvhF} /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="-mr-2 flex sm:hidden">
                        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentJYv} /></span>

                            
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHtw }}
        >
      </svg>
      
                            
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTqf }}
        >
      </svg>
      
                        </button>
                    </div>
                </div>
            </div>
            <div class="sm:hidden" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1"> <span class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentLDa} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentJUs} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentzDh} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentbJi} /></span>

                </div>
                <div class="pt-4 pb-3 border-t border-gray-700">
                    <div class="flex items-center px-5">
                        <div class="flex-shrink-0">
                            
      <img
            src={ attributes.imageurlrBe } 
            alt={ attributes.imagealterh } 
            class="h-10 w-10 rounded-full"
          />
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium text-white">
                                <RichText.Content value={attributes.contentrgP} /></div>
                            <div class="text-sm font-medium text-gray-400">
                                <RichText.Content value={attributes.contentqIU} /></div>
                        </div>
                        <button type="button" class="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentUoR} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGim }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="mt-3 px-2 space-y-1"> <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentOlN} /></span>
 <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentdYz} /></span>
 <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentmBO} /></span>

                    </div>
                </div>
            </div>
        </nav>
    </div>
</div>
            );
            },
        });
        