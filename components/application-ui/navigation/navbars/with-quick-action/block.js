
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-quick-action', {
            title: 'with quick action',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentEiR": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentcsc": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentTbF": {
    "type": "string",
    "default": " Team "
  },
  "contentciG": {
    "type": "string",
    "default": " Projects "
  },
  "contentmds": {
    "type": "string",
    "default": " Calendar "
  },
  "contentexf": {
    "type": "string",
    "default": "New Job"
  },
  "contentjMB": {
    "type": "string",
    "default": "View notifications"
  },
  "contentrbb": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentitn": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentFOb": {
    "type": "string",
    "default": "Settings"
  },
  "contentACL": {
    "type": "string",
    "default": "Sign out"
  },
  "contentgiH": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentyKw": {
    "type": "string",
    "default": "Team"
  },
  "contentmtQ": {
    "type": "string",
    "default": "Projects"
  },
  "contentoWX": {
    "type": "string",
    "default": "Calendar"
  },
  "contenttCH": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentpqU": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentEoS": {
    "type": "string",
    "default": "View notifications"
  },
  "contentWqC": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentsdC": {
    "type": "string",
    "default": "Settings"
  },
  "contentDZb": {
    "type": "string",
    "default": "Sign out"
  },
  "imageurliSp": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtPJG": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlkmu": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
  },
  "imagealteGG": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlGoo": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtHnx": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlKDS": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtHpu": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgMVf": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgfJf": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgKrD": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z\" clip-rule=\"evenodd\"/>"
  },
  "svgfdb": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgvbv": {
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
            value={ attributes.svgMVf }
            onChange={ ( value ) => {
              setAttributes({ svgMVf: value });
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
            value={ attributes.svgMVf }
            onChange={ ( value ) => {
              setAttributes({ svgMVf: value });
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
            value={ attributes.svgfJf }
            onChange={ ( value ) => {
              setAttributes({ svgfJf: value });
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
            value={ attributes.svgKrD }
            onChange={ ( value ) => {
              setAttributes({ svgKrD: value });
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
            value={ attributes.svgfdb }
            onChange={ ( value ) => {
              setAttributes({ svgfdb: value });
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
            value={ attributes.svgvbv }
            onChange={ ( value ) => {
              setAttributes({ svgvbv: value });
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="-ml-2 mr-2 flex items-center md:hidden">
                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentEiR} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentEiR: newtext });
      }}
    /></span>

                                
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMVf }}
        >
      </svg>
      
                                
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfJf }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="flex-shrink-0 flex items-center">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurliSp: media.url,
            imagealtPJG: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurliSp } 
            alt={ attributes.imagealtPJG } 
            onClick={ open } 
            className="block lg:hidden h-8 w-auto"
          /> 
        )} 
      />
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlkmu: media.url,
            imagealteGG: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlkmu } 
            alt={ attributes.imagealteGG } 
            onClick={ open } 
            className="hidden lg:block h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <div className="hidden md:ml-6 md:flex md:space-x-8"> <span className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentcsc} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentcsc: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentTbF} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentTbF: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentciG} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentciG: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentmds} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentmds: newtext });
      }}
    /></span>

                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                
      <svg
         className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKrD }}
        >
      </svg>
       <span><RichText tagName="span" value={attributes.contentexf} default="New Job" onChange={ (newtext) =>  {
        setAttributes({ contentexf: newtext });
      }}
    /></span>

                            </button>
                        </div>
                        <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                            <button type="button" className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentjMB} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentjMB: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfdb }}
        >
      </svg>
      
                            </button>
                            <div className="ml-3 relative">
                                <div>
                                    <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentrbb} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentrbb: newtext });
      }}
    /></span>

                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlGoo: media.url,
            imagealtHnx: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlGoo } 
            alt={ attributes.imagealtHnx } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                    </button>
                                </div>
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentitn} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentitn: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentFOb} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentFOb: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentACL} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentACL: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden" id="mobile-menu">
                <div className="pt-2 pb-3 space-y-1"> <span className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"><RichText tagName="span" value={attributes.contentgiH} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentgiH: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"><RichText tagName="span" value={attributes.contentyKw} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentyKw: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"><RichText tagName="span" value={attributes.contentmtQ} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentmtQ: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"><RichText tagName="span" value={attributes.contentoWX} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentoWX: newtext });
      }}
    /></span>

                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                    <div className="flex items-center px-4 sm:px-6">
                        <div className="flex-shrink-0">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlKDS: media.url,
            imagealtHpu: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlKDS } 
            alt={ attributes.imagealtHpu } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-gray-800">
                                <RichText tagName="span" value={attributes.contenttCH} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contenttCH: newtext }); }} /></div>
                            <div className="text-sm font-medium text-gray-500">
                                <RichText tagName="span" value={attributes.contentpqU} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentpqU: newtext }); }} /></div>
                        </div>
                        <button type="button" className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentEoS} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentEoS: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvbv }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="mt-3 space-y-1"> <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"><RichText tagName="span" value={attributes.contentWqC} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentWqC: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"><RichText tagName="span" value={attributes.contentsdC} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentsdC: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"><RichText tagName="span" value={attributes.contentDZb} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentDZb: newtext });
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
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <div class="-ml-2 mr-2 flex items-center md:hidden">
                            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentEiR} /></span>

                                
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMVf }}
        >
      </svg>
      
                                
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfJf }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="flex-shrink-0 flex items-center">
                            
      <img
            src={ attributes.imageurliSp } 
            alt={ attributes.imagealtPJG } 
            class="block lg:hidden h-8 w-auto"
          />
                            
      <img
            src={ attributes.imageurlkmu } 
            alt={ attributes.imagealteGG } 
            class="hidden lg:block h-8 w-auto"
          />
                        </div>
                        <div class="hidden md:ml-6 md:flex md:space-x-8"> <span class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentcsc} /></span>
 <span class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentTbF} /></span>
 <span class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentciG} /></span>
 <span class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentmds} /></span>

                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                
      <svg
         class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKrD }}
        >
      </svg>
       <span><RichText.Content value={attributes.contentexf} /></span>

                            </button>
                        </div>
                        <div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                            <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentjMB} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfdb }}
        >
      </svg>
      
                            </button>
                            <div class="ml-3 relative">
                                <div>
                                    <button type="button" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentrbb} /></span>

                                        
      <img
            src={ attributes.imageurlGoo } 
            alt={ attributes.imagealtHnx } 
            class="h-8 w-8 rounded-full"
          />
                                    </button>
                                </div>
                                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentitn} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentFOb} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentACL} /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:hidden" id="mobile-menu">
                <div class="pt-2 pb-3 space-y-1"> <span class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"><RichText.Content value={attributes.contentgiH} /></span>
 <span class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"><RichText.Content value={attributes.contentyKw} /></span>
 <span class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"><RichText.Content value={attributes.contentmtQ} /></span>
 <span class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"><RichText.Content value={attributes.contentoWX} /></span>

                </div>
                <div class="pt-4 pb-3 border-t border-gray-200">
                    <div class="flex items-center px-4 sm:px-6">
                        <div class="flex-shrink-0">
                            
      <img
            src={ attributes.imageurlKDS } 
            alt={ attributes.imagealtHpu } 
            class="h-10 w-10 rounded-full"
          />
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium text-gray-800">
                                <RichText.Content value={attributes.contenttCH} /></div>
                            <div class="text-sm font-medium text-gray-500">
                                <RichText.Content value={attributes.contentpqU} /></div>
                        </div>
                        <button type="button" class="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentEoS} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvbv }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="mt-3 space-y-1"> <span class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"><RichText.Content value={attributes.contentWqC} /></span>
 <span class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"><RichText.Content value={attributes.contentsdC} /></span>
 <span class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"><RichText.Content value={attributes.contentDZb} /></span>

                    </div>
                </div>
            </div>
        </nav>
    </div>
</div>
            );
            },
        });
        