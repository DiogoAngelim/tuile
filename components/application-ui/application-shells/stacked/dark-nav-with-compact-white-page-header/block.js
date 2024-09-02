
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/dark-nav-with-compact-white-page-header', {
            title: 'dark nav with compact white page header',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentrvz": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentKLE": {
    "type": "string",
    "default": "Team"
  },
  "contentmKx": {
    "type": "string",
    "default": "Projects"
  },
  "contentAoZ": {
    "type": "string",
    "default": "Calendar"
  },
  "contentCwd": {
    "type": "string",
    "default": "Reports"
  },
  "contentbgd": {
    "type": "string",
    "default": "View notifications"
  },
  "contentCay": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentWQc": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentbFj": {
    "type": "string",
    "default": "Settings"
  },
  "contentzIi": {
    "type": "string",
    "default": "Sign out"
  },
  "contentcNE": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentDRS": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentUGn": {
    "type": "string",
    "default": "Team"
  },
  "contentZwu": {
    "type": "string",
    "default": "Projects"
  },
  "contenteGg": {
    "type": "string",
    "default": "Calendar"
  },
  "contentUhv": {
    "type": "string",
    "default": "Reports"
  },
  "contentCNG": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentpAO": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentRmq": {
    "type": "string",
    "default": "View notifications"
  },
  "contentvbq": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentgSx": {
    "type": "string",
    "default": "Settings"
  },
  "contentkCd": {
    "type": "string",
    "default": "Sign out"
  },
  "contentbZX": {
    "type": "string",
    "default": "Dashboard"
  },
  "imageurlPCS": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-500.svg'
  },
  "imagealtrkV": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlsiB": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtLGR": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlrmA": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtqFG": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgyxK": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgilc": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgCEr": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgUJq": {
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
            value={ attributes.svgyxK }
            onChange={ ( value ) => {
              setAttributes({ svgyxK: value });
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
            value={ attributes.svgilc }
            onChange={ ( value ) => {
              setAttributes({ svgilc: value });
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
            value={ attributes.svgCEr }
            onChange={ ( value ) => {
              setAttributes({ svgCEr: value });
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
            value={ attributes.svgUJq }
            onChange={ ( value ) => {
              setAttributes({ svgUJq: value });
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
        <div className="min-h-full">
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlPCS: media.url,
            imagealtrkV: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlPCS } 
            alt={ attributes.imagealtrkV } 
            onClick={ open } 
            className="h-8 w-8"
          /> 
        )} 
      />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4"> <span className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentrvz} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentrvz: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentKLE} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentKLE: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentmKx} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentmKx: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentAoZ} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentAoZ: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentCwd} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentCwd: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentbgd} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentbgd: newtext });
      }}
    /></span>

                                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyxK }}
        >
      </svg>
      
                                </button>
                                <div className="ml-3 relative">
                                    <div>
                                        <button type="button" className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentCay} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentCay: newtext });
      }}
    /></span>

                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlsiB: media.url,
            imagealtLGR: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlsiB } 
            alt={ attributes.imagealtLGR } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                        </button>
                                    </div>
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentWQc} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentWQc: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentbFj} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentbFj: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentzIi} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentzIi: newtext });
      }}
    /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentcNE} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentcNE: newtext });
      }}
    /></span>

                                
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgilc }}
        >
      </svg>
      
                                
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCEr }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"> <span className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentDRS} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentDRS: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentUGn} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentUGn: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentZwu} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentZwu: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contenteGg} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contenteGg: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentUhv} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentUhv: newtext });
      }}
    /></span>

                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlrmA: media.url,
            imagealtqFG: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlrmA } 
            alt={ attributes.imagealtqFG } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-white">
                                    <RichText tagName="span" value={attributes.contentCNG} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contentCNG: newtext }); }} /></div>
                                <div className="text-sm font-medium text-gray-400">
                                    <RichText tagName="span" value={attributes.contentpAO} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentpAO: newtext }); }} /></div>
                            </div>
                            <button type="button" className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentRmq} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentRmq: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUJq }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="mt-3 px-2 space-y-1"> <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentvbq} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentvbq: newtext });
      }}
    /></span>
 <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentgSx} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentgSx: newtext });
      }}
    /></span>
 <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentkCd} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentkCd: newtext });
      }}
    /></span>

                        </div>
                    </div>
                </div>
            </nav>
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                     <h1 className="text-lg leading-6 font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentbZX} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentbZX: newtext });
      }}
    /></h1>

                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-4 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"/>
                    </div>
                </div>
            </main>
        </div>
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
        <div class="min-h-full">
            <nav class="bg-gray-800">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                
      <img
            src={ attributes.imageurlPCS } 
            alt={ attributes.imagealtrkV } 
            class="h-8 w-8"
          />
                            </div>
                            <div class="hidden md:block">
                                <div class="ml-10 flex items-baseline space-x-4"> <span class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page"><RichText.Content value={attributes.contentrvz} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentKLE} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentmKx} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentAoZ} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentCwd} /></span>

                                </div>
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-4 flex items-center md:ml-6">
                                <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentbgd} /></span>

                                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyxK }}
        >
      </svg>
      
                                </button>
                                <div class="ml-3 relative">
                                    <div>
                                        <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentCay} /></span>

                                            
      <img
            src={ attributes.imageurlsiB } 
            alt={ attributes.imagealtLGR } 
            class="h-8 w-8 rounded-full"
          />
                                        </button>
                                    </div>
                                    <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentWQc} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentbFj} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentzIi} /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="-mr-2 flex md:hidden">
                            <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentcNE} /></span>

                                
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgilc }}
        >
      </svg>
      
                                
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCEr }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div class="md:hidden" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3"> <span class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page"><RichText.Content value={attributes.contentDRS} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentUGn} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentZwu} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contenteGg} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentUhv} /></span>

                    </div>
                    <div class="pt-4 pb-3 border-t border-gray-700">
                        <div class="flex items-center px-5">
                            <div class="flex-shrink-0">
                                
      <img
            src={ attributes.imageurlrmA } 
            alt={ attributes.imagealtqFG } 
            class="h-10 w-10 rounded-full"
          />
                            </div>
                            <div class="ml-3">
                                <div class="text-base font-medium text-white">
                                    <RichText.Content value={attributes.contentCNG} /></div>
                                <div class="text-sm font-medium text-gray-400">
                                    <RichText.Content value={attributes.contentpAO} /></div>
                            </div>
                            <button type="button" class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentRmq} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUJq }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="mt-3 px-2 space-y-1"> <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentvbq} /></span>
 <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentgSx} /></span>
 <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentkCd} /></span>

                        </div>
                    </div>
                </div>
            </nav>
            <header class="bg-white shadow-sm">
                <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                     <h1 class="text-lg leading-6 font-semibold text-gray-900"><RichText.Content value={attributes.contentbZX} /></h1>

                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-4 sm:px-0">
                        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"/>
                    </div>
                </div>
            </main>
        </div>
    </div>
</div>
            );
            },
        });
        