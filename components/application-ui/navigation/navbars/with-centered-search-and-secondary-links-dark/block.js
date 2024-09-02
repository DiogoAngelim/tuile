
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-centered-search-and-secondary-links-dark', {
            title: 'with centered search and secondary links dark',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentWdX": {
    "type": "string",
    "default": "Search"
  },
  "contentprR": {
    "type": "string",
    "default": "Open menu"
  },
  "contentBHR": {
    "type": "string",
    "default": "View notifications"
  },
  "contentaXu": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentozv": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentZte": {
    "type": "string",
    "default": "Settings"
  },
  "contentqlI": {
    "type": "string",
    "default": "Sign out"
  },
  "contentKEP": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentgEi": {
    "type": "string",
    "default": " Team "
  },
  "contentGxH": {
    "type": "string",
    "default": " Projects "
  },
  "contentZJY": {
    "type": "string",
    "default": " Calendar "
  },
  "contenthIA": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentkWj": {
    "type": "string",
    "default": "Team"
  },
  "contentYWI": {
    "type": "string",
    "default": "Projects"
  },
  "contentFEf": {
    "type": "string",
    "default": "Calendar"
  },
  "contentLzl": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentjid": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentxUz": {
    "type": "string",
    "default": "View notifications"
  },
  "contentiaH": {
    "type": "string",
    "default": "Your Profile"
  },
  "contenttlS": {
    "type": "string",
    "default": "Settings"
  },
  "contentgbp": {
    "type": "string",
    "default": "Sign out"
  },
  "imageurloxP": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-500.svg'
  },
  "imagealtEHl": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlvie": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtHQb": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlfXC": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtkVT": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgSUK": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgZHH": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgjPP": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgGvM": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgJuG": {
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
            value={ attributes.svgSUK }
            onChange={ ( value ) => {
              setAttributes({ svgSUK: value });
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
            value={ attributes.svgZHH }
            onChange={ ( value ) => {
              setAttributes({ svgZHH: value });
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
            value={ attributes.svgjPP }
            onChange={ ( value ) => {
              setAttributes({ svgjPP: value });
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
            value={ attributes.svgGvM }
            onChange={ ( value ) => {
              setAttributes({ svgGvM: value });
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
            value={ attributes.svgJuG }
            onChange={ ( value ) => {
              setAttributes({ svgJuG: value });
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
        <header className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
                <div className="relative h-16 flex justify-between">
                    <div className="relative z-10 px-2 flex lg:px-0">
                        <div className="flex-shrink-0 flex items-center">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurloxP: media.url,
            imagealtEHl: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurloxP } 
            alt={ attributes.imagealtEHl } 
            onClick={ open } 
            className="block h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                    </div>
                    <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                        <div className="w-full sm:max-w-xs">
                            <label for="search" className="sr-only">
                                <RichText tagName="span" value={attributes.contentWdX} default="Search" onChange={ (newtext) => { setAttributes({ contentWdX: newtext }); }} /></label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSUK }}
        >
      </svg>
      
                                </div>
                                <input id="search" name="search" className="block w-full bg-gray-700 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm" placeholder="Search" type="search"/>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 flex items-center lg:hidden">
                        <button type="button" className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentprR} default="Open menu" onChange={ (newtext) =>  {
        setAttributes({ contentprR: newtext });
      }}
    /></span>

                            
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZHH }}
        >
      </svg>
      
                            
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjPP }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                        <button type="button" className="bg-gray-800 flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentBHR} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentBHR: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGvM }}
        >
      </svg>
      
                        </button>
                        <div className="flex-shrink-0 relative ml-4">
                            <div>
                                <button type="button" className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentaXu} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentaXu: newtext });
      }}
    /></span>

                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlvie: media.url,
            imagealtHQb: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlvie } 
            alt={ attributes.imagealtHQb } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                </button>
                            </div>
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentozv} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentozv: newtext });
      }}
    /></span>
 <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentZte} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentZte: newtext });
      }}
    /></span>
 <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentqlI} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentqlI: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </div>
                </div>
                <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global"> <span className="bg-gray-900 text-white rounded-md py-2 px-3 inline-flex items-center text-sm font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentKEP} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentKEP: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"><RichText tagName="span" value={attributes.contentgEi} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentgEi: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"><RichText tagName="span" value={attributes.contentGxH} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentGxH: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"><RichText tagName="span" value={attributes.contentZJY} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentZJY: newtext });
      }}
    /></span>

                </nav>
            </div>
            <nav className="lg:hidden" aria-label="Global" id="mobile-menu">
                <div className="pt-2 pb-3 px-2 space-y-1"> <span className="bg-gray-900 text-white block rounded-md py-2 px-3 text-base font-medium" aria-current="page"><RichText tagName="span" value={attributes.contenthIA} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contenthIA: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium"><RichText tagName="span" value={attributes.contentkWj} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentkWj: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium"><RichText tagName="span" value={attributes.contentYWI} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentYWI: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium"><RichText tagName="span" value={attributes.contentFEf} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentFEf: newtext });
      }}
    /></span>

                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                    <div className="px-4 flex items-center">
                        <div className="flex-shrink-0">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlfXC: media.url,
            imagealtkVT: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlfXC } 
            alt={ attributes.imagealtkVT } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-white">
                                <RichText tagName="span" value={attributes.contentLzl} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contentLzl: newtext }); }} /></div>
                            <div className="text-sm font-medium text-gray-400">
                                <RichText tagName="span" value={attributes.contentjid} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentjid: newtext }); }} /></div>
                        </div>
                        <button type="button" className="ml-auto flex-shrink-0 bg-gray-800 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentxUz} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentxUz: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJuG }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="mt-3 px-2 space-y-1"> <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"><RichText tagName="span" value={attributes.contentiaH} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentiaH: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"><RichText tagName="span" value={attributes.contenttlS} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contenttlS: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"><RichText tagName="span" value={attributes.contentgbp} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentgbp: newtext });
      }}
    /></span>

                    </div>
                </div>
            </nav>
        </header>
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
        <header class="bg-gray-800">
            <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
                <div class="relative h-16 flex justify-between">
                    <div class="relative z-10 px-2 flex lg:px-0">
                        <div class="flex-shrink-0 flex items-center">
                            
      <img
            src={ attributes.imageurloxP } 
            alt={ attributes.imagealtEHl } 
            class="block h-8 w-auto"
          />
                        </div>
                    </div>
                    <div class="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                        <div class="w-full sm:max-w-xs">
                            <label for="search" class="sr-only">
                                <RichText.Content value={attributes.contentWdX} /></label>
                            <div class="relative">
                                <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSUK }}
        >
      </svg>
      
                                </div>
                                <input id="search" name="search" class="block w-full bg-gray-700 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm" placeholder="Search" type="search"/>
                            </div>
                        </div>
                    </div>
                    <div class="relative z-10 flex items-center lg:hidden">
                        <button type="button" class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentprR} /></span>

                            
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZHH }}
        >
      </svg>
      
                            
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjPP }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                        <button type="button" class="bg-gray-800 flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentBHR} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGvM }}
        >
      </svg>
      
                        </button>
                        <div class="flex-shrink-0 relative ml-4">
                            <div>
                                <button type="button" class="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentaXu} /></span>

                                    
      <img
            src={ attributes.imageurlvie } 
            alt={ attributes.imagealtHQb } 
            class="h-8 w-8 rounded-full"
          />
                                </button>
                            </div>
                            <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentozv} /></span>
 <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentZte} /></span>
 <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentqlI} /></span>

                            </div>
                        </div>
                    </div>
                </div>
                <nav class="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global"> <span class="bg-gray-900 text-white rounded-md py-2 px-3 inline-flex items-center text-sm font-medium" aria-current="page"><RichText.Content value={attributes.contentKEP} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"><RichText.Content value={attributes.contentgEi} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"><RichText.Content value={attributes.contentGxH} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"><RichText.Content value={attributes.contentZJY} /></span>

                </nav>
            </div>
            <nav class="lg:hidden" aria-label="Global" id="mobile-menu">
                <div class="pt-2 pb-3 px-2 space-y-1"> <span class="bg-gray-900 text-white block rounded-md py-2 px-3 text-base font-medium" aria-current="page"><RichText.Content value={attributes.contenthIA} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium"><RichText.Content value={attributes.contentkWj} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium"><RichText.Content value={attributes.contentYWI} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium"><RichText.Content value={attributes.contentFEf} /></span>

                </div>
                <div class="border-t border-gray-700 pt-4 pb-3">
                    <div class="px-4 flex items-center">
                        <div class="flex-shrink-0">
                            
      <img
            src={ attributes.imageurlfXC } 
            alt={ attributes.imagealtkVT } 
            class="h-10 w-10 rounded-full"
          />
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium text-white">
                                <RichText.Content value={attributes.contentLzl} /></div>
                            <div class="text-sm font-medium text-gray-400">
                                <RichText.Content value={attributes.contentjid} /></div>
                        </div>
                        <button type="button" class="ml-auto flex-shrink-0 bg-gray-800 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentxUz} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJuG }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="mt-3 px-2 space-y-1"> <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"><RichText.Content value={attributes.contentiaH} /></span>
 <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"><RichText.Content value={attributes.contenttlS} /></span>
 <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"><RichText.Content value={attributes.contentgbp} /></span>

                    </div>
                </div>
            </nav>
        </header>
    </div>
</div>
            );
            },
        });
        