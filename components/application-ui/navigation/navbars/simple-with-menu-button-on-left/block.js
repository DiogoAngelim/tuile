
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-with-menu-button-on-left', {
            title: 'simple with menu button on left',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentkkZ": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentoyy": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentazW": {
    "type": "string",
    "default": " Team "
  },
  "contentOHk": {
    "type": "string",
    "default": " Projects "
  },
  "contentueQ": {
    "type": "string",
    "default": " Calendar "
  },
  "contentKEz": {
    "type": "string",
    "default": "View notifications"
  },
  "contentiue": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentCzz": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentfNc": {
    "type": "string",
    "default": "Settings"
  },
  "contentdxD": {
    "type": "string",
    "default": "Sign out"
  },
  "contentBgM": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentZDf": {
    "type": "string",
    "default": "Team"
  },
  "contentRtU": {
    "type": "string",
    "default": "Projects"
  },
  "contentgMc": {
    "type": "string",
    "default": "Calendar"
  },
  "imageurliYJ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtRtT": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlOVA": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
  },
  "imagealtlzi": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlENM": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtQPI": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgbZu": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgbCK": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgGDU": {
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
            value={ attributes.svgbZu }
            onChange={ ( value ) => {
              setAttributes({ svgbZu: value });
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
            value={ attributes.svgbCK }
            onChange={ ( value ) => {
              setAttributes({ svgbCK: value });
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
            value={ attributes.svgGDU }
            onChange={ ( value ) => {
              setAttributes({ svgGDU: value });
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
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentkkZ} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentkkZ: newtext });
      }}
    /></span>

                            
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbZu }}
        >
      </svg>
      
                            
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbCK }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurliYJ: media.url,
            imagealtRtT: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurliYJ } 
            alt={ attributes.imagealtRtT } 
            onClick={ open } 
            className="block lg:hidden h-8 w-auto"
          /> 
        )} 
      />
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlOVA: media.url,
            imagealtlzi: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlOVA } 
            alt={ attributes.imagealtlzi } 
            onClick={ open } 
            className="hidden lg:block h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8"> <span className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentoyy} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentoyy: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentazW} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentazW: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentOHk} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentOHk: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentueQ} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentueQ: newtext });
      }}
    /></span>

                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentKEz} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentKEz: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGDU }}
        >
      </svg>
      
                        </button>
                        <div className="ml-3 relative">
                            <div>
                                <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentiue} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentiue: newtext });
      }}
    /></span>

                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlENM: media.url,
            imagealtQPI: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlENM } 
            alt={ attributes.imagealtQPI } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                </button>
                            </div>
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentCzz} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentCzz: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentfNc} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentfNc: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentdxD} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentdxD: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="pt-2 pb-4 space-y-1"> <span className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentBgM} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentBgM: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentZDf} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentZDf: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentRtU} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentRtU: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentgMc} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentgMc: newtext });
      }}
    /></span>

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
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex justify-between h-16">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentkkZ} /></span>

                            
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbZu }}
        >
      </svg>
      
                            
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbCK }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex-shrink-0 flex items-center">
                            
      <img
            src={ attributes.imageurliYJ } 
            alt={ attributes.imagealtRtT } 
            class="block lg:hidden h-8 w-auto"
          />
                            
      <img
            src={ attributes.imageurlOVA } 
            alt={ attributes.imagealtlzi } 
            class="hidden lg:block h-8 w-auto"
          />
                        </div>
                        <div class="hidden sm:ml-6 sm:flex sm:space-x-8"> <span class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentoyy} /></span>
 <span class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentazW} /></span>
 <span class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentOHk} /></span>
 <span class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentueQ} /></span>

                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentKEz} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGDU }}
        >
      </svg>
      
                        </button>
                        <div class="ml-3 relative">
                            <div>
                                <button type="button" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentiue} /></span>

                                    
      <img
            src={ attributes.imageurlENM } 
            alt={ attributes.imagealtQPI } 
            class="h-8 w-8 rounded-full"
          />
                                </button>
                            </div>
                            <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentCzz} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentfNc} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentdxD} /></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sm:hidden" id="mobile-menu">
                <div class="pt-2 pb-4 space-y-1"> <span class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentBgM} /></span>
 <span class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentZDf} /></span>
 <span class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentRtU} /></span>
 <span class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentgMc} /></span>

                </div>
            </div>
        </nav>
    </div>
</div>
            );
            },
        });
        