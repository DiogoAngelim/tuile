
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple', {
            title: 'simple',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentUmT": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentHzI": {
    "type": "string",
    "default": " Team "
  },
  "contentheR": {
    "type": "string",
    "default": " Projects "
  },
  "contentcBf": {
    "type": "string",
    "default": " Calendar "
  },
  "contentOgh": {
    "type": "string",
    "default": "View notifications"
  },
  "contentsFl": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentKxH": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentyVG": {
    "type": "string",
    "default": "Settings"
  },
  "contentkUL": {
    "type": "string",
    "default": "Sign out"
  },
  "contentpLN": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentfmV": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentDeJ": {
    "type": "string",
    "default": "Team"
  },
  "contentEeP": {
    "type": "string",
    "default": "Projects"
  },
  "contentuyy": {
    "type": "string",
    "default": "Calendar"
  },
  "contentffZ": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentaUH": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentkUE": {
    "type": "string",
    "default": "View notifications"
  },
  "contentcqz": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentHdY": {
    "type": "string",
    "default": "Settings"
  },
  "contentZVa": {
    "type": "string",
    "default": "Sign out"
  },
  "imageurlAWg": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtqkD": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlQXQ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
  },
  "imagealtxtz": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlPlb": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtYbV": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlZTe": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealttwn": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgkWo": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgnfM": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgSCG": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgUQb": {
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
            value={ attributes.svgkWo }
            onChange={ ( value ) => {
              setAttributes({ svgkWo: value });
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
            value={ attributes.svgnfM }
            onChange={ ( value ) => {
              setAttributes({ svgnfM: value });
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
            value={ attributes.svgSCG }
            onChange={ ( value ) => {
              setAttributes({ svgSCG: value });
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
            value={ attributes.svgUQb }
            onChange={ ( value ) => {
              setAttributes({ svgUQb: value });
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
                        <div className="flex-shrink-0 flex items-center">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlAWg: media.url,
            imagealtqkD: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlAWg } 
            alt={ attributes.imagealtqkD } 
            onClick={ open } 
            className="block lg:hidden h-8 w-auto"
          /> 
        )} 
      />
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlQXQ: media.url,
            imagealtxtz: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlQXQ } 
            alt={ attributes.imagealtxtz } 
            onClick={ open } 
            className="hidden lg:block h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8"> <span className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentUmT} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentUmT: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentHzI} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentHzI: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentheR} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentheR: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentcBf} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentcBf: newtext });
      }}
    /></span>

                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <button type="button" className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentOgh} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentOgh: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkWo }}
        >
      </svg>
      
                        </button>
                        <div className="ml-3 relative">
                            <div>
                                <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentsFl} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentsFl: newtext });
      }}
    /></span>

                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlPlb: media.url,
            imagealtYbV: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlPlb } 
            alt={ attributes.imagealtYbV } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                </button>
                            </div>
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentKxH} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentKxH: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentyVG} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentyVG: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentkUL} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentkUL: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentpLN} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentpLN: newtext });
      }}
    /></span>

                            
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnfM }}
        >
      </svg>
      
                            
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSCG }}
        >
      </svg>
      
                        </button>
                    </div>
                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="pt-2 pb-3 space-y-1"> <span className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentfmV} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentfmV: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentDeJ} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentDeJ: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentEeP} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentEeP: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentuyy} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentuyy: newtext });
      }}
    /></span>

                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                    <div className="flex items-center px-4">
                        <div className="flex-shrink-0">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlZTe: media.url,
            imagealttwn: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlZTe } 
            alt={ attributes.imagealttwn } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-gray-800">
                                <RichText tagName="span" value={attributes.contentffZ} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contentffZ: newtext }); }} /></div>
                            <div className="text-sm font-medium text-gray-500">
                                <RichText tagName="span" value={attributes.contentaUH} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentaUH: newtext }); }} /></div>
                        </div>
                        <button type="button" className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentkUE} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentkUE: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUQb }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="mt-3 space-y-1"> <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentcqz} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentcqz: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentHdY} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentHdY: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentZVa} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentZVa: newtext });
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
                        <div class="flex-shrink-0 flex items-center">
                            
      <img
            src={ attributes.imageurlAWg } 
            alt={ attributes.imagealtqkD } 
            class="block lg:hidden h-8 w-auto"
          />
                            
      <img
            src={ attributes.imageurlQXQ } 
            alt={ attributes.imagealtxtz } 
            class="hidden lg:block h-8 w-auto"
          />
                        </div>
                        <div class="hidden sm:ml-6 sm:flex sm:space-x-8"> <span class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentUmT} /></span>
 <span class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentHzI} /></span>
 <span class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentheR} /></span>
 <span class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentcBf} /></span>

                        </div>
                    </div>
                    <div class="hidden sm:ml-6 sm:flex sm:items-center">
                        <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentOgh} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkWo }}
        >
      </svg>
      
                        </button>
                        <div class="ml-3 relative">
                            <div>
                                <button type="button" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentsFl} /></span>

                                    
      <img
            src={ attributes.imageurlPlb } 
            alt={ attributes.imagealtYbV } 
            class="h-8 w-8 rounded-full"
          />
                                </button>
                            </div>
                            <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentKxH} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentyVG} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentkUL} /></span>

                            </div>
                        </div>
                    </div>
                    <div class="-mr-2 flex items-center sm:hidden">
                        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentpLN} /></span>

                            
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnfM }}
        >
      </svg>
      
                            
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSCG }}
        >
      </svg>
      
                        </button>
                    </div>
                </div>
            </div>
            <div class="sm:hidden" id="mobile-menu">
                <div class="pt-2 pb-3 space-y-1"> <span class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentfmV} /></span>
 <span class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentDeJ} /></span>
 <span class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentEeP} /></span>
 <span class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentuyy} /></span>

                </div>
                <div class="pt-4 pb-3 border-t border-gray-200">
                    <div class="flex items-center px-4">
                        <div class="flex-shrink-0">
                            
      <img
            src={ attributes.imageurlZTe } 
            alt={ attributes.imagealttwn } 
            class="h-10 w-10 rounded-full"
          />
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium text-gray-800">
                                <RichText.Content value={attributes.contentffZ} /></div>
                            <div class="text-sm font-medium text-gray-500">
                                <RichText.Content value={attributes.contentaUH} /></div>
                        </div>
                        <button type="button" class="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentkUE} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUQb }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="mt-3 space-y-1"> <span class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText.Content value={attributes.contentcqz} /></span>
 <span class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText.Content value={attributes.contentHdY} /></span>
 <span class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText.Content value={attributes.contentZVa} /></span>

                    </div>
                </div>
            </div>
        </nav>
    </div>
</div>
            );
            },
        });
        