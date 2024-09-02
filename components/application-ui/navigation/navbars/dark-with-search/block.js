
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/dark-with-search', {
            title: 'dark with search',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentRsq": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentzID": {
    "type": "string",
    "default": "Team"
  },
  "contentOuo": {
    "type": "string",
    "default": "Projects"
  },
  "contenttVc": {
    "type": "string",
    "default": "Calendar"
  },
  "contentHeY": {
    "type": "string",
    "default": "Search"
  },
  "contentTld": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentjUq": {
    "type": "string",
    "default": "View notifications"
  },
  "contentvOx": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentbuQ": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentKZa": {
    "type": "string",
    "default": "Settings"
  },
  "contentXnx": {
    "type": "string",
    "default": "Sign out"
  },
  "contentUbK": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentTpx": {
    "type": "string",
    "default": "Team"
  },
  "contentuNa": {
    "type": "string",
    "default": "Projects"
  },
  "contentaGR": {
    "type": "string",
    "default": "Calendar"
  },
  "contentsQb": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentnBb": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentfCH": {
    "type": "string",
    "default": "View notifications"
  },
  "contentpsh": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentjCn": {
    "type": "string",
    "default": "Settings"
  },
  "contentVuV": {
    "type": "string",
    "default": "Sign out"
  },
  "imageurlPOQ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-500.svg'
  },
  "imagealtbQM": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlkKG": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-500-mark-white-text.svg'
  },
  "imagealtfPM": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlYHr": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtjDH": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlpFb": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtSvs": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgEza": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgwJb": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgMxe": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgvFG": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgKUE": {
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
            value={ attributes.svgEza }
            onChange={ ( value ) => {
              setAttributes({ svgEza: value });
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
            value={ attributes.svgwJb }
            onChange={ ( value ) => {
              setAttributes({ svgwJb: value });
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
            value={ attributes.svgMxe }
            onChange={ ( value ) => {
              setAttributes({ svgMxe: value });
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
            value={ attributes.svgvFG }
            onChange={ ( value ) => {
              setAttributes({ svgvFG: value });
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
            value={ attributes.svgKUE }
            onChange={ ( value ) => {
              setAttributes({ svgKUE: value });
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
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex items-center px-2 lg:px-0">
                        <div className="flex-shrink-0">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlPOQ: media.url,
            imagealtbQM: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlPOQ } 
            alt={ attributes.imagealtbQM } 
            onClick={ open } 
            className="block lg:hidden h-8 w-auto"
          /> 
        )} 
      />
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlkKG: media.url,
            imagealtfPM: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlkKG } 
            alt={ attributes.imagealtfPM } 
            onClick={ open } 
            className="hidden lg:block h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <div className="hidden lg:block lg:ml-6">
                            <div className="flex space-x-4"> <span className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentRsq} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentRsq: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentzID} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentzID: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentOuo} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentOuo: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contenttVc} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contenttVc: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                        <div className="max-w-lg w-full lg:max-w-xs">
                            <label for="search" className="sr-only">
                                <RichText tagName="span" value={attributes.contentHeY} default="Search" onChange={ (newtext) => { setAttributes({ contentHeY: newtext }); }} /></label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEza }}
        >
      </svg>
      
                                </div>
                                <input id="search" name="search" className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm" placeholder="Search" type="search"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentTld} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentTld: newtext });
      }}
    /></span>

                            
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwJb }}
        >
      </svg>
      
                            
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMxe }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="hidden lg:block lg:ml-4">
                        <div className="flex items-center">
                            <button type="button" className="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentjUq} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentjUq: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvFG }}
        >
      </svg>
      
                            </button>
                            <div className="ml-4 relative flex-shrink-0">
                                <div>
                                    <button type="button" className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentvOx} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentvOx: newtext });
      }}
    /></span>

                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlYHr: media.url,
            imagealtjDH: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlYHr } 
            alt={ attributes.imagealtjDH } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                    </button>
                                </div>
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentbuQ} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentbuQ: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentKZa} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentKZa: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentXnx} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentXnx: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1"> <span className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentUbK} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentUbK: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentTpx} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentTpx: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentuNa} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentuNa: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentaGR} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentaGR: newtext });
      }}
    /></span>

                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlpFb: media.url,
            imagealtSvs: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlpFb } 
            alt={ attributes.imagealtSvs } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-white">
                                <RichText tagName="span" value={attributes.contentsQb} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contentsQb: newtext }); }} /></div>
                            <div className="text-sm font-medium text-gray-400">
                                <RichText tagName="span" value={attributes.contentnBb} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentnBb: newtext }); }} /></div>
                        </div>
                        <button type="button" className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentfCH} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentfCH: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKUE }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="mt-3 px-2 space-y-1"> <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentpsh} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentpsh: newtext });
      }}
    /></span>
 <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentjCn} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentjCn: newtext });
      }}
    /></span>
 <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentVuV} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentVuV: newtext });
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
            <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div class="flex items-center px-2 lg:px-0">
                        <div class="flex-shrink-0">
                            
      <img
            src={ attributes.imageurlPOQ } 
            alt={ attributes.imagealtbQM } 
            class="block lg:hidden h-8 w-auto"
          />
                            
      <img
            src={ attributes.imageurlkKG } 
            alt={ attributes.imagealtfPM } 
            class="hidden lg:block h-8 w-auto"
          />
                        </div>
                        <div class="hidden lg:block lg:ml-6">
                            <div class="flex space-x-4"> <span class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentRsq} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentzID} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentOuo} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contenttVc} /></span>

                            </div>
                        </div>
                    </div>
                    <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                        <div class="max-w-lg w-full lg:max-w-xs">
                            <label for="search" class="sr-only">
                                <RichText.Content value={attributes.contentHeY} /></label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEza }}
        >
      </svg>
      
                                </div>
                                <input id="search" name="search" class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm" placeholder="Search" type="search"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex lg:hidden">
                        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentTld} /></span>

                            
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwJb }}
        >
      </svg>
      
                            
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMxe }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="hidden lg:block lg:ml-4">
                        <div class="flex items-center">
                            <button type="button" class="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentjUq} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvFG }}
        >
      </svg>
      
                            </button>
                            <div class="ml-4 relative flex-shrink-0">
                                <div>
                                    <button type="button" class="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentvOx} /></span>

                                        
      <img
            src={ attributes.imageurlYHr } 
            alt={ attributes.imagealtjDH } 
            class="h-8 w-8 rounded-full"
          />
                                    </button>
                                </div>
                                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentbuQ} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentKZa} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentXnx} /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:hidden" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1"> <span class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentUbK} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentTpx} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentuNa} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentaGR} /></span>

                </div>
                <div class="pt-4 pb-3 border-t border-gray-700">
                    <div class="flex items-center px-5">
                        <div class="flex-shrink-0">
                            
      <img
            src={ attributes.imageurlpFb } 
            alt={ attributes.imagealtSvs } 
            class="h-10 w-10 rounded-full"
          />
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium text-white">
                                <RichText.Content value={attributes.contentsQb} /></div>
                            <div class="text-sm font-medium text-gray-400">
                                <RichText.Content value={attributes.contentnBb} /></div>
                        </div>
                        <button type="button" class="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentfCH} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKUE }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="mt-3 px-2 space-y-1"> <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentpsh} /></span>
 <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentjCn} /></span>
 <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentVuV} /></span>

                    </div>
                </div>
            </div>
        </nav>
    </div>
</div>
            );
            },
        });
        