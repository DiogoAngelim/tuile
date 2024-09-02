
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-search', {
            title: 'with search',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentAer": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentoEa": {
    "type": "string",
    "default": " Team "
  },
  "contentkjI": {
    "type": "string",
    "default": " Projects "
  },
  "contentVkL": {
    "type": "string",
    "default": " Calendar "
  },
  "contentktp": {
    "type": "string",
    "default": "Search"
  },
  "contentLYS": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentziv": {
    "type": "string",
    "default": "View notifications"
  },
  "contentByZ": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentOZp": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentrzL": {
    "type": "string",
    "default": "Settings"
  },
  "contentxmm": {
    "type": "string",
    "default": "Sign out"
  },
  "contentBzU": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentmht": {
    "type": "string",
    "default": "Team"
  },
  "contentgsm": {
    "type": "string",
    "default": "Projects"
  },
  "contentSyP": {
    "type": "string",
    "default": "Calendar"
  },
  "contentsyx": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentzQR": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentQch": {
    "type": "string",
    "default": "View notifications"
  },
  "contentBRB": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentWvS": {
    "type": "string",
    "default": "Settings"
  },
  "contentjVm": {
    "type": "string",
    "default": "Sign out"
  },
  "imageurlnHN": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtrLn": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlgNj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
  },
  "imagealtvVM": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlvMu": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtplq": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlvzZ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtIMo": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgblV": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgxTL": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgViG": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgQiE": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgfYK": {
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
            value={ attributes.svgblV }
            onChange={ ( value ) => {
              setAttributes({ svgblV: value });
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
            value={ attributes.svgxTL }
            onChange={ ( value ) => {
              setAttributes({ svgxTL: value });
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
            value={ attributes.svgViG }
            onChange={ ( value ) => {
              setAttributes({ svgViG: value });
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
            value={ attributes.svgQiE }
            onChange={ ( value ) => {
              setAttributes({ svgQiE: value });
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
            value={ attributes.svgfYK }
            onChange={ ( value ) => {
              setAttributes({ svgfYK: value });
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
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex px-2 lg:px-0">
                        <div className="flex-shrink-0 flex items-center">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlnHN: media.url,
            imagealtrLn: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlnHN } 
            alt={ attributes.imagealtrLn } 
            onClick={ open } 
            className="block lg:hidden h-8 w-auto"
          /> 
        )} 
      />
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlgNj: media.url,
            imagealtvVM: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlgNj } 
            alt={ attributes.imagealtvVM } 
            onClick={ open } 
            className="hidden lg:block h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <div className="hidden lg:ml-6 lg:flex lg:space-x-8"> <span className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentAer} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentAer: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentoEa} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentoEa: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentkjI} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentkjI: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentVkL} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentVkL: newtext });
      }}
    /></span>

                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                        <div className="max-w-lg w-full lg:max-w-xs">
                            <label for="search" className="sr-only">
                                <RichText tagName="span" value={attributes.contentktp} default="Search" onChange={ (newtext) => { setAttributes({ contentktp: newtext }); }} /></label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgblV }}
        >
      </svg>
      
                                </div>
                                <input id="search" name="search" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search" type="search"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center lg:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentLYS} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentLYS: newtext });
      }}
    /></span>

                            
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxTL }}
        >
      </svg>
      
                            
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgViG }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="hidden lg:ml-4 lg:flex lg:items-center">
                        <button type="button" className="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentziv} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentziv: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQiE }}
        >
      </svg>
      
                        </button>
                        <div className="ml-4 relative flex-shrink-0">
                            <div>
                                <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentByZ} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentByZ: newtext });
      }}
    /></span>

                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlVMu: media.url,
            imagealtGpq: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlVMu } 
            alt={ attributes.imagealtGpq } 
            onClick={ open } 
            className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
          /> 
        )} 
      />
                                </button>
                            </div>
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentOZp} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentOZp: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentrzL} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentrzL: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentxmm} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentxmm: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden" id="mobile-menu">
                <div className="pt-2 pb-3 space-y-1"> <span className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentBzU} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentBzU: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentmht} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentmht: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentgsm} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentgsm: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentSyP} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentSyP: newtext });
      }}
    /></span>

                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                    <div className="flex items-center px-4">
                        <div className="flex-shrink-0">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlvzZ: media.url,
            imagealtIMo: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlvzZ } 
            alt={ attributes.imagealtIMo } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-gray-800">
                                <RichText tagName="span" value={attributes.contentsyx} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contentsyx: newtext }); }} /></div>
                            <div className="text-sm font-medium text-gray-500">
                                <RichText tagName="span" value={attributes.contentzQR} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentzQR: newtext }); }} /></div>
                        </div>
                        <button type="button" className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentQch} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentQch: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfYK }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="mt-3 space-y-1"> <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentBRB} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentBRB: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentWvS} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentWvS: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentjVm} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentjVm: newtext });
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
        <nav class="bg-white shadow">
            <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex px-2 lg:px-0">
                        <div class="flex-shrink-0 flex items-center">
                            
      <img
            src={ attributes.imageurlnHN } 
            alt={ attributes.imagealtrLn } 
            class="block lg:hidden h-8 w-auto"
          />
                            
      <img
            src={ attributes.imageurlgNj } 
            alt={ attributes.imagealtvVM } 
            class="hidden lg:block h-8 w-auto"
          />
                        </div>
                        <div class="hidden lg:ml-6 lg:flex lg:space-x-8"> <span class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentAer} /></span>
 <span class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentoEa} /></span>
 <span class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentkjI} /></span>
 <span class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentVkL} /></span>

                        </div>
                    </div>
                    <div class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                        <div class="max-w-lg w-full lg:max-w-xs">
                            <label for="search" class="sr-only">
                                <RichText.Content value={attributes.contentktp} /></label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgblV }}
        >
      </svg>
      
                                </div>
                                <input id="search" name="search" class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search" type="search"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center lg:hidden">
                        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentLYS} /></span>

                            
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxTL }}
        >
      </svg>
      
                            
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgViG }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="hidden lg:ml-4 lg:flex lg:items-center">
                        <button type="button" class="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentziv} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQiE }}
        >
      </svg>
      
                        </button>
                        <div class="ml-4 relative flex-shrink-0">
                            <div>
                                <button type="button" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentByZ} /></span>

                                    
      <img
            src={ attributes.imageurlVMu } 
            alt={ attributes.imagealtGpq } 
            class="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
          />
                                </button>
                            </div>
                            <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentOZp} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentrzL} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentxmm} /></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:hidden" id="mobile-menu">
                <div class="pt-2 pb-3 space-y-1"> <span class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentBzU} /></span>
 <span class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentmht} /></span>
 <span class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentgsm} /></span>
 <span class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentSyP} /></span>

                </div>
                <div class="pt-4 pb-3 border-t border-gray-200">
                    <div class="flex items-center px-4">
                        <div class="flex-shrink-0">
                            
      <img
            src={ attributes.imageurlvzZ } 
            alt={ attributes.imagealtIMo } 
            class="h-10 w-10 rounded-full"
          />
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium text-gray-800">
                                <RichText.Content value={attributes.contentsyx} /></div>
                            <div class="text-sm font-medium text-gray-500">
                                <RichText.Content value={attributes.contentzQR} /></div>
                        </div>
                        <button type="button" class="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentQch} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfYK }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="mt-3 space-y-1"> <span class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText.Content value={attributes.contentBRB} /></span>
 <span class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText.Content value={attributes.contentWvS} /></span>
 <span class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText.Content value={attributes.contentjVm} /></span>

                    </div>
                </div>
            </div>
        </nav>
    </div>
</div>
            );
            },
        });
        