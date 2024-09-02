
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/two-row-navigation-with-overlap', {
            title: 'two row navigation with overlap',
            icon: (<img src="data:image/jpeg;base64,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AAAAAAAAAGl9sP3Yq/4P72lZoWZ7YfuxV/wf3tKzQ9v8M/tV/f8AhiX3fQAekyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9IIJqh/BTwySv/AAsarl/kScItPLazQdsWVZFmw2XQR08TUR1yLI75ud81Jx5E/wATrSX9Mejdqp8ItPLazQdsMItPLazQdsWwDGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08trNB2xbAGTnqWqnwi08trNB2wwi08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LTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCLTy2s0HbFsAZOepaqfCLTy2s0HbDCL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" />),
            category: 'common',
            attributes: {
  "contentTMB": {
    "type": "string",
    "default": "Workflow"
  },
  "contentoLq": {
    "type": "string",
    "default": "View notifications"
  },
  "contentqdB": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentxzz": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentuQy": {
    "type": "string",
    "default": "Settings"
  },
  "contentOhH": {
    "type": "string",
    "default": "Sign out"
  },
  "contentxRw": {
    "type": "string",
    "default": "Search"
  },
  "contentCHS": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentEcR": {
    "type": "string",
    "default": " Home "
  },
  "contentVNR": {
    "type": "string",
    "default": " Profile "
  },
  "contentjxV": {
    "type": "string",
    "default": " Resources "
  },
  "contentQZv": {
    "type": "string",
    "default": " Company Directory "
  },
  "contentped": {
    "type": "string",
    "default": " Openings "
  },
  "contentlWt": {
    "type": "string",
    "default": "Search"
  },
  "contentfvd": {
    "type": "string",
    "default": "Close menu"
  },
  "contentkBm": {
    "type": "string",
    "default": "Home"
  },
  "contentlar": {
    "type": "string",
    "default": "Profile"
  },
  "contentHrU": {
    "type": "string",
    "default": "Resources"
  },
  "contentNUz": {
    "type": "string",
    "default": "Company Directory"
  },
  "contentpGu": {
    "type": "string",
    "default": "Openings"
  },
  "contentdoO": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentlhc": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentraz": {
    "type": "string",
    "default": "View notifications"
  },
  "contentwoK": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentKYX": {
    "type": "string",
    "default": "Settings"
  },
  "contentmYA": {
    "type": "string",
    "default": "Sign out"
  },
  "contentOsO": {
    "type": "string",
    "default": "Page title"
  },
  "contentonP": {
    "type": "string",
    "default": "Section title"
  },
  "contentEAU": {
    "type": "string",
    "default": "Section title"
  },
  "contentLEk": {
    "type": "string",
    "default": "&copy; 2021 Tailwind Labs Inc."
  },
  "contentOfy": {
    "type": "string",
    "default": "All rights reserved."
  },
  "imageurlDPj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-300.svg'
  },
  "imagealtdUU": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlvcR": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtUmL": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlvRn": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtdHN": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlbTn": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtrDw": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgNzG": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgjEy": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgeIi": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svggEv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgBAn": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgtSE": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgLhF": {
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
            value={ attributes.svgNzG }
            onChange={ ( value ) => {
              setAttributes({ svgNzG: value });
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
            value={ attributes.svgjEy }
            onChange={ ( value ) => {
              setAttributes({ svgjEy: value });
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
            value={ attributes.svgeIi }
            onChange={ ( value ) => {
              setAttributes({ svgeIi: value });
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
            value={ attributes.svggEv }
            onChange={ ( value ) => {
              setAttributes({ svggEv: value });
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
            value={ attributes.svgBAn }
            onChange={ ( value ) => {
              setAttributes({ svgBAn: value });
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
            value={ attributes.svgtSE }
            onChange={ ( value ) => {
              setAttributes({ svgtSE: value });
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
            value={ attributes.svgLhF }
            onChange={ ( value ) => {
              setAttributes({ svgLhF: value });
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
            <header className="pb-24 bg-indigo-600">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="relative py-5 flex items-center justify-center lg:justify-between">
                        <div className="absolute left-0 flex-shrink-0 lg:static"> <span>
            <span className="sr-only"><RichText tagName="span" value={attributes.contentTMB} default="Workflow" onChange={ (newtext) =>  {
        setAttributes({ contentTMB: newtext });
      }}
    /></span>

                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlDPj: media.url,
            imagealtdUU: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlDPj } 
            alt={ attributes.imagealtdUU } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                            </span>
                        </div>
                        <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                            <button type="button" className="flex-shrink-0 p-1 text-indigo-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentoLq} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentoLq: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNzG }}
        >
      </svg>
      
                            </button>
                            <div className="ml-4 relative flex-shrink-0">
                                <div>
                                    <button type="button" className="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentqdB} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentqdB: newtext });
      }}
    /></span>

                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlvcR: media.url,
            imagealtUmL: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlvcR } 
            alt={ attributes.imagealtUmL } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                    </button>
                                </div>
                                <div className="origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentxzz} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentxzz: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentuQy} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentuQy: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentOhH} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentOhH: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                        <div className="flex-1 min-w-0 px-12 lg:hidden">
                            <div className="max-w-xs w-full mx-auto">
                                <label for="desktop-search" className="sr-only">
                                    <RichText tagName="span" value={attributes.contentxRw} default="Search" onChange={ (newtext) => { setAttributes({ contentxRw: newtext }); }} /></label>
                                <div className="relative text-white focus-within:text-gray-600">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                        
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjEy }}
        >
      </svg>
      
                                    </div>
                                    <input id="desktop-search" className="block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Search" type="search" name="search"/>
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-0 flex-shrink-0 lg:hidden">
                            <button type="button" className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentCHS} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentCHS: newtext });
      }}
    /></span>

                                
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeIi }}
        >
      </svg>
      
                                
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggEv }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block border-t border-white border-opacity-20 py-5">
                        <div className="grid grid-cols-3 gap-8 items-center">
                            <div className="col-span-2">
                                <nav className="flex space-x-4"> <span className="text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10" aria-current="page"><RichText tagName="span" value={attributes.contentEcR} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentEcR: newtext });
      }}
    /></span>
 <span className="text-indigo-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"><RichText tagName="span" value={attributes.contentVNR} default="Profile" onChange={ (newtext) =>  {
        setAttributes({ contentVNR: newtext });
      }}
    /></span>
 <span className="text-indigo-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"><RichText tagName="span" value={attributes.contentjxV} default="Resources" onChange={ (newtext) =>  {
        setAttributes({ contentjxV: newtext });
      }}
    /></span>
 <span className="text-indigo-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"><RichText tagName="span" value={attributes.contentQZv} default="Company Directory" onChange={ (newtext) =>  {
        setAttributes({ contentQZv: newtext });
      }}
    /></span>
 <span className="text-indigo-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"><RichText tagName="span" value={attributes.contentped} default="Openings" onChange={ (newtext) =>  {
        setAttributes({ contentped: newtext });
      }}
    /></span>

                                </nav>
                            </div>
                            <div>
                                <div className="max-w-md w-full mx-auto">
                                    <label for="mobile-search" className="sr-only">
                                        <RichText tagName="span" value={attributes.contentlWt} default="Search" onChange={ (newtext) => { setAttributes({ contentlWt: newtext }); }} /></label>
                                    <div className="relative text-white focus-within:text-gray-600">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBAn }}
        >
      </svg>
      
                                        </div>
                                        <input id="mobile-search" className="block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Search" type="search" name="search"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden">
                    <div className="z-20 fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"/>
                    <div className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                            <div className="pt-3 pb-2">
                                <div className="flex items-center justify-between px-4">
                                    <div>
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlvRn: media.url,
            imagealtdHN: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlvRn } 
            alt={ attributes.imagealtdHN } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                                    </div>
                                    <div className="-mr-2">
                                        <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentfvd} default="Close menu" onChange={ (newtext) =>  {
        setAttributes({ contentfvd: newtext });
      }}
    /></span>

                                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtSE }}
        >
      </svg>
      
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-3 px-2 space-y-1"> <span className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"><RichText tagName="span" value={attributes.contentkBm} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentkBm: newtext });
      }}
    /></span>
 <span className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"><RichText tagName="span" value={attributes.contentlar} default="Profile" onChange={ (newtext) =>  {
        setAttributes({ contentlar: newtext });
      }}
    /></span>
 <span className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"><RichText tagName="span" value={attributes.contentHrU} default="Resources" onChange={ (newtext) =>  {
        setAttributes({ contentHrU: newtext });
      }}
    /></span>
 <span className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"><RichText tagName="span" value={attributes.contentNUz} default="Company Directory" onChange={ (newtext) =>  {
        setAttributes({ contentNUz: newtext });
      }}
    /></span>
 <span className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"><RichText tagName="span" value={attributes.contentpGu} default="Openings" onChange={ (newtext) =>  {
        setAttributes({ contentpGu: newtext });
      }}
    /></span>

                                </div>
                            </div>
                            <div className="pt-4 pb-2">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlbTn: media.url,
            imagealtrDw: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlbTn } 
            alt={ attributes.imagealtrDw } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                                    </div>
                                    <div className="ml-3 min-w-0 flex-1">
                                        <div className="text-base font-medium text-gray-800 truncate">
                                            <RichText tagName="span" value={attributes.contentdoO} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contentdoO: newtext }); }} /></div>
                                        <div className="text-sm font-medium text-gray-500 truncate">
                                            <RichText tagName="span" value={attributes.contentlhc} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentlhc: newtext }); }} /></div>
                                    </div>
                                    <button type="button" className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentraz} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentraz: newtext });
      }}
    /></span>

                                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLhF }}
        >
      </svg>
      
                                    </button>
                                </div>
                                <div className="mt-3 px-2 space-y-1"> <span className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"><RichText tagName="span" value={attributes.contentwoK} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentwoK: newtext });
      }}
    /></span>
 <span className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"><RichText tagName="span" value={attributes.contentKYX} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentKYX: newtext });
      }}
    /></span>
 <span className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"><RichText tagName="span" value={attributes.contentmYA} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentmYA: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="-mt-24 pb-8">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                     <h1 className="sr-only"><RichText tagName="span" value={attributes.contentOsO} default="Page title" onChange={ (newtext) =>  {
        setAttributes({ contentOsO: newtext });
      }}
    /></h1>

                    <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                            <section aria-labelledby="section-1-title">
                                 <h2 className="sr-only" id="section-1-title"><RichText tagName="span" value={attributes.contentonP} default="Section title" onChange={ (newtext) =>  {
        setAttributes({ contentonP: newtext });
      }}
    /></h2>

                                <div className="rounded-lg bg-white overflow-hidden shadow">
                                    <div className="p-6"/>
                                </div>
                            </section>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <section aria-labelledby="section-2-title">
                                 <h2 className="sr-only" id="section-2-title"><RichText tagName="span" value={attributes.contentEAU} default="Section title" onChange={ (newtext) =>  {
        setAttributes({ contentEAU: newtext });
      }}
    /></h2>

                                <div className="rounded-lg bg-white overflow-hidden shadow">
                                    <div className="p-6"/>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div className="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left"><span className="block sm:inline"><RichText tagName="span" value={attributes.contentLEk} default="&copy; 2021 Tailwind Labs Inc." onChange={ (newtext) =>  {
        setAttributes({ contentLEk: newtext });
      }}
    /></span>  <span className="block sm:inline"><RichText tagName="span" value={attributes.contentOfy} default="All rights reserved." onChange={ (newtext) =>  {
        setAttributes({ contentOfy: newtext });
      }}
    /></span>
                    </div>
                </div>
            </footer>
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
            <header class="pb-24 bg-indigo-600">
                <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div class="relative py-5 flex items-center justify-center lg:justify-between">
                        <div class="absolute left-0 flex-shrink-0 lg:static"> <span>
            <span class="sr-only"><RichText.Content value={attributes.contentTMB} /></span>

                            
      <img
            src={ attributes.imageurlDPj } 
            alt={ attributes.imagealtdUU } 
            class="h-8 w-auto"
          />
                            </span>
                        </div>
                        <div class="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                            <button type="button" class="flex-shrink-0 p-1 text-indigo-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentoLq} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNzG }}
        >
      </svg>
      
                            </button>
                            <div class="ml-4 relative flex-shrink-0">
                                <div>
                                    <button type="button" class="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentqdB} /></span>

                                        
      <img
            src={ attributes.imageurlvcR } 
            alt={ attributes.imagealtUmL } 
            class="h-8 w-8 rounded-full"
          />
                                    </button>
                                </div>
                                <div class="origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentxzz} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentuQy} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentOhH} /></span>

                                </div>
                            </div>
                        </div>
                        <div class="flex-1 min-w-0 px-12 lg:hidden">
                            <div class="max-w-xs w-full mx-auto">
                                <label for="desktop-search" class="sr-only">
                                    <RichText.Content value={attributes.contentxRw} /></label>
                                <div class="relative text-white focus-within:text-gray-600">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                        
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjEy }}
        >
      </svg>
      
                                    </div>
                                    <input id="desktop-search" class="block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Search" type="search" name="search"/>
                                </div>
                            </div>
                        </div>
                        <div class="absolute right-0 flex-shrink-0 lg:hidden">
                            <button type="button" class="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentCHS} /></span>

                                
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeIi }}
        >
      </svg>
      
                                
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggEv }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                    <div class="hidden lg:block border-t border-white border-opacity-20 py-5">
                        <div class="grid grid-cols-3 gap-8 items-center">
                            <div class="col-span-2">
                                <nav class="flex space-x-4"> <span class="text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10" aria-current="page"><RichText.Content value={attributes.contentEcR} /></span>
 <span class="text-indigo-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"><RichText.Content value={attributes.contentVNR} /></span>
 <span class="text-indigo-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"><RichText.Content value={attributes.contentjxV} /></span>
 <span class="text-indigo-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"><RichText.Content value={attributes.contentQZv} /></span>
 <span class="text-indigo-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"><RichText.Content value={attributes.contentped} /></span>

                                </nav>
                            </div>
                            <div>
                                <div class="max-w-md w-full mx-auto">
                                    <label for="mobile-search" class="sr-only">
                                        <RichText.Content value={attributes.contentlWt} /></label>
                                    <div class="relative text-white focus-within:text-gray-600">
                                        <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBAn }}
        >
      </svg>
      
                                        </div>
                                        <input id="mobile-search" class="block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Search" type="search" name="search"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:hidden">
                    <div class="z-20 fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"/>
                    <div class="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top">
                        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                            <div class="pt-3 pb-2">
                                <div class="flex items-center justify-between px-4">
                                    <div>
                                        
      <img
            src={ attributes.imageurlvRn } 
            alt={ attributes.imagealtdHN } 
            class="h-8 w-auto"
          />
                                    </div>
                                    <div class="-mr-2">
                                        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentfvd} /></span>

                                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtSE }}
        >
      </svg>
      
                                        </button>
                                    </div>
                                </div>
                                <div class="mt-3 px-2 space-y-1"> <span class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"><RichText.Content value={attributes.contentkBm} /></span>
 <span class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"><RichText.Content value={attributes.contentlar} /></span>
 <span class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"><RichText.Content value={attributes.contentHrU} /></span>
 <span class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"><RichText.Content value={attributes.contentNUz} /></span>
 <span class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"><RichText.Content value={attributes.contentpGu} /></span>

                                </div>
                            </div>
                            <div class="pt-4 pb-2">
                                <div class="flex items-center px-5">
                                    <div class="flex-shrink-0">
                                        
      <img
            src={ attributes.imageurlbTn } 
            alt={ attributes.imagealtrDw } 
            class="h-10 w-10 rounded-full"
          />
                                    </div>
                                    <div class="ml-3 min-w-0 flex-1">
                                        <div class="text-base font-medium text-gray-800 truncate">
                                            <RichText.Content value={attributes.contentdoO} /></div>
                                        <div class="text-sm font-medium text-gray-500 truncate">
                                            <RichText.Content value={attributes.contentlhc} /></div>
                                    </div>
                                    <button type="button" class="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentraz} /></span>

                                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLhF }}
        >
      </svg>
      
                                    </button>
                                </div>
                                <div class="mt-3 px-2 space-y-1"> <span class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"><RichText.Content value={attributes.contentwoK} /></span>
 <span class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"><RichText.Content value={attributes.contentKYX} /></span>
 <span class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"><RichText.Content value={attributes.contentmYA} /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main class="-mt-24 pb-8">
                <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                     <h1 class="sr-only"><RichText.Content value={attributes.contentOsO} /></h1>

                    <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                        <div class="grid grid-cols-1 gap-4 lg:col-span-2">
                            <section aria-labelledby="section-1-title">
                                 <h2 class="sr-only" id="section-1-title"><RichText.Content value={attributes.contentonP} /></h2>

                                <div class="rounded-lg bg-white overflow-hidden shadow">
                                    <div class="p-6"/>
                                </div>
                            </section>
                        </div>
                        <div class="grid grid-cols-1 gap-4">
                            <section aria-labelledby="section-2-title">
                                 <h2 class="sr-only" id="section-2-title"><RichText.Content value={attributes.contentEAU} /></h2>

                                <div class="rounded-lg bg-white overflow-hidden shadow">
                                    <div class="p-6"/>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div class="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left"><span class="block sm:inline"><RichText.Content value={attributes.contentLEk} /></span>  <span class="block sm:inline"><RichText.Content value={attributes.contentOfy} /></span>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</div>
            );
            },
        });
        