
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-centered-search-and-secondary-links', {
            title: 'with centered search and secondary links',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentclY": {
    "type": "string",
    "default": "Search"
  },
  "contentTra": {
    "type": "string",
    "default": "Open menu"
  },
  "contentzvD": {
    "type": "string",
    "default": "View notifications"
  },
  "contentezA": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentKFn": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentliL": {
    "type": "string",
    "default": "Settings"
  },
  "contentJde": {
    "type": "string",
    "default": "Sign out"
  },
  "contentnlO": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentiNZ": {
    "type": "string",
    "default": " Team "
  },
  "contentDMK": {
    "type": "string",
    "default": " Projects "
  },
  "contentmSM": {
    "type": "string",
    "default": " Calendar "
  },
  "contentTKK": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentYDU": {
    "type": "string",
    "default": "Team"
  },
  "contentvMi": {
    "type": "string",
    "default": "Projects"
  },
  "contentcHM": {
    "type": "string",
    "default": "Calendar"
  },
  "contentshf": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentInE": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentGah": {
    "type": "string",
    "default": "View notifications"
  },
  "contentPCZ": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentctn": {
    "type": "string",
    "default": "Settings"
  },
  "contentlnp": {
    "type": "string",
    "default": "Sign out"
  },
  "imageurlmKX": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtgOV": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlDnb": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtjJD": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlsfP": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtwJX": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgraq": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgKVg": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgDsE": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgNVh": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgmfm": {
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
            value={ attributes.svgraq }
            onChange={ ( value ) => {
              setAttributes({ svgraq: value });
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
            value={ attributes.svgKVg }
            onChange={ ( value ) => {
              setAttributes({ svgKVg: value });
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
            value={ attributes.svgDsE }
            onChange={ ( value ) => {
              setAttributes({ svgDsE: value });
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
            value={ attributes.svgNVh }
            onChange={ ( value ) => {
              setAttributes({ svgNVh: value });
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
            value={ attributes.svgmfm }
            onChange={ ( value ) => {
              setAttributes({ svgmfm: value });
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
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
                <div className="relative h-16 flex justify-between">
                    <div className="relative z-10 px-2 flex lg:px-0">
                        <div className="flex-shrink-0 flex items-center">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlmKX: media.url,
            imagealtgOV: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlmKX } 
            alt={ attributes.imagealtgOV } 
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
                                <RichText tagName="span" value={attributes.contentclY} default="Search" onChange={ (newtext) => { setAttributes({ contentclY: newtext }); }} /></label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgraq }}
        >
      </svg>
      
                                </div>
                                <input id="search" name="search" className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search" type="search"/>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 flex items-center lg:hidden">
                        <button type="button" className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentTra} default="Open menu" onChange={ (newtext) =>  {
        setAttributes({ contentTra: newtext });
      }}
    /></span>

                            
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKVg }}
        >
      </svg>
      
                            
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDsE }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                        <button type="button" className="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentzvD} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentzvD: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNVh }}
        >
      </svg>
      
                        </button>
                        <div className="flex-shrink-0 relative ml-4">
                            <div>
                                <button type="button" className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentezA} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentezA: newtext });
      }}
    /></span>

                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlDnb: media.url,
            imagealtjJD: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlDnb } 
            alt={ attributes.imagealtjJD } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                </button>
                            </div>
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentKFn} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentKFn: newtext });
      }}
    /></span>
 <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentliL} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentliL: newtext });
      }}
    /></span>
 <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentJde} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentJde: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </div>
                </div>
                <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global"> <span className="bg-gray-100 text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentnlO} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentnlO: newtext });
      }}
    /></span>
 <span className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"><RichText tagName="span" value={attributes.contentiNZ} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentiNZ: newtext });
      }}
    /></span>
 <span className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"><RichText tagName="span" value={attributes.contentDMK} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentDMK: newtext });
      }}
    /></span>
 <span className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"><RichText tagName="span" value={attributes.contentmSM} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentmSM: newtext });
      }}
    /></span>

                </nav>
            </div>
            <nav className="lg:hidden" aria-label="Global" id="mobile-menu">
                <div className="pt-2 pb-3 px-2 space-y-1"> <span className="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentTKK} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentTKK: newtext });
      }}
    /></span>
 <span className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"><RichText tagName="span" value={attributes.contentYDU} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentYDU: newtext });
      }}
    /></span>
 <span className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"><RichText tagName="span" value={attributes.contentvMi} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentvMi: newtext });
      }}
    /></span>
 <span className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"><RichText tagName="span" value={attributes.contentcHM} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentcHM: newtext });
      }}
    /></span>

                </div>
                <div className="border-t border-gray-200 pt-4 pb-3">
                    <div className="px-4 flex items-center">
                        <div className="flex-shrink-0">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlsfP: media.url,
            imagealtwJX: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlsfP } 
            alt={ attributes.imagealtwJX } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-gray-800">
                                <RichText tagName="span" value={attributes.contentshf} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contentshf: newtext }); }} /></div>
                            <div className="text-sm font-medium text-gray-500">
                                <RichText tagName="span" value={attributes.contentInE} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentInE: newtext }); }} /></div>
                        </div>
                        <button type="button" className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentGah} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentGah: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmfm }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="mt-3 px-2 space-y-1"> <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contentPCZ} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentPCZ: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contentctn} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentctn: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contentlnp} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentlnp: newtext });
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
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
                <div class="relative h-16 flex justify-between">
                    <div class="relative z-10 px-2 flex lg:px-0">
                        <div class="flex-shrink-0 flex items-center">
                            
      <img
            src={ attributes.imageurlmKX } 
            alt={ attributes.imagealtgOV } 
            class="block h-8 w-auto"
          />
                        </div>
                    </div>
                    <div class="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                        <div class="w-full sm:max-w-xs">
                            <label for="search" class="sr-only">
                                <RichText.Content value={attributes.contentclY} /></label>
                            <div class="relative">
                                <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgraq }}
        >
      </svg>
      
                                </div>
                                <input id="search" name="search" class="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search" type="search"/>
                            </div>
                        </div>
                    </div>
                    <div class="relative z-10 flex items-center lg:hidden">
                        <button type="button" class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentTra} /></span>

                            
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKVg }}
        >
      </svg>
      
                            
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDsE }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                        <button type="button" class="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentzvD} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNVh }}
        >
      </svg>
      
                        </button>
                        <div class="flex-shrink-0 relative ml-4">
                            <div>
                                <button type="button" class="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentezA} /></span>

                                    
      <img
            src={ attributes.imageurlDnb } 
            alt={ attributes.imagealtjJD } 
            class="h-8 w-8 rounded-full"
          />
                                </button>
                            </div>
                            <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentKFn} /></span>
 <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentliL} /></span>
 <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentJde} /></span>

                            </div>
                        </div>
                    </div>
                </div>
                <nav class="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global"> <span class="bg-gray-100 text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium" aria-current="page"><RichText.Content value={attributes.contentnlO} /></span>
 <span class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"><RichText.Content value={attributes.contentiNZ} /></span>
 <span class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"><RichText.Content value={attributes.contentDMK} /></span>
 <span class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"><RichText.Content value={attributes.contentmSM} /></span>

                </nav>
            </div>
            <nav class="lg:hidden" aria-label="Global" id="mobile-menu">
                <div class="pt-2 pb-3 px-2 space-y-1"> <span class="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium" aria-current="page"><RichText.Content value={attributes.contentTKK} /></span>
 <span class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"><RichText.Content value={attributes.contentYDU} /></span>
 <span class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"><RichText.Content value={attributes.contentvMi} /></span>
 <span class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"><RichText.Content value={attributes.contentcHM} /></span>

                </div>
                <div class="border-t border-gray-200 pt-4 pb-3">
                    <div class="px-4 flex items-center">
                        <div class="flex-shrink-0">
                            
      <img
            src={ attributes.imageurlsfP } 
            alt={ attributes.imagealtwJX } 
            class="h-10 w-10 rounded-full"
          />
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium text-gray-800">
                                <RichText.Content value={attributes.contentshf} /></div>
                            <div class="text-sm font-medium text-gray-500">
                                <RichText.Content value={attributes.contentInE} /></div>
                        </div>
                        <button type="button" class="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentGah} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmfm }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="mt-3 px-2 space-y-1"> <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contentPCZ} /></span>
 <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contentctn} /></span>
 <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contentlnp} /></span>

                    </div>
                </div>
            </nav>
        </header>
    </div>
</div>
            );
            },
        });
        