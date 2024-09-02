
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/dark-with-quick-action', {
            title: 'dark with quick action',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentSGz": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentVQP": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentMxG": {
    "type": "string",
    "default": "Team"
  },
  "contentEvf": {
    "type": "string",
    "default": "Projects"
  },
  "contentoMA": {
    "type": "string",
    "default": "Calendar"
  },
  "contentrZs": {
    "type": "string",
    "default": "New Job"
  },
  "contentIhl": {
    "type": "string",
    "default": "View notifications"
  },
  "contentciO": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentvqu": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentvTZ": {
    "type": "string",
    "default": "Settings"
  },
  "contentjMR": {
    "type": "string",
    "default": "Sign out"
  },
  "contentUht": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentkwI": {
    "type": "string",
    "default": "Team"
  },
  "contentGkX": {
    "type": "string",
    "default": "Projects"
  },
  "contentdwG": {
    "type": "string",
    "default": "Calendar"
  },
  "contenteND": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentYcO": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentSXy": {
    "type": "string",
    "default": "View notifications"
  },
  "contentUrQ": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentqRc": {
    "type": "string",
    "default": "Settings"
  },
  "contentUOF": {
    "type": "string",
    "default": "Sign out"
  },
  "imageurlWvj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-500.svg'
  },
  "imagealtJVv": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlFdn": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-500-mark-white-text.svg'
  },
  "imagealtSLa": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlNrD": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtpSe": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlKjh": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtlNl": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgIdv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svguCc": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgaAj": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z\" clip-rule=\"evenodd\"/>"
  },
  "svgSjn": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgiMe": {
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
            value={ attributes.svgIdv }
            onChange={ ( value ) => {
              setAttributes({ svgIdv: value });
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
            value={ attributes.svguCc }
            onChange={ ( value ) => {
              setAttributes({ svguCc: value });
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
            value={ attributes.svgaAj }
            onChange={ ( value ) => {
              setAttributes({ svgaAj: value });
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
            value={ attributes.svgSjn }
            onChange={ ( value ) => {
              setAttributes({ svgSjn: value });
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
            value={ attributes.svgiMe }
            onChange={ ( value ) => {
              setAttributes({ svgiMe: value });
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
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="-ml-2 mr-2 flex items-center md:hidden">
                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentSGz} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentSGz: newtext });
      }}
    /></span>

                                
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIdv }}
        >
      </svg>
      
                                
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguCc }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="flex-shrink-0 flex items-center">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlWvj: media.url,
            imagealtJVv: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlWvj } 
            alt={ attributes.imagealtJVv } 
            onClick={ open } 
            className="block lg:hidden h-8 w-auto"
          /> 
        )} 
      />
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlFdn: media.url,
            imagealtSLa: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlFdn } 
            alt={ attributes.imagealtSLa } 
            onClick={ open } 
            className="hidden lg:block h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4"> <span className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentVQP} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentVQP: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentMxG} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentMxG: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentEvf} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentEvf: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentoMA} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentoMA: newtext });
      }}
    /></span>

                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                                
      <svg
         className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaAj }}
        >
      </svg>
       <span><RichText tagName="span" value={attributes.contentrZs} default="New Job" onChange={ (newtext) =>  {
        setAttributes({ contentrZs: newtext });
      }}
    /></span>

                            </button>
                        </div>
                        <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                            <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentIhl} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentIhl: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSjn }}
        >
      </svg>
      
                            </button>
                            <div className="ml-3 relative">
                                <div>
                                    <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentciO} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentciO: newtext });
      }}
    /></span>

                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlNrD: media.url,
            imagealtpSe: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlNrD } 
            alt={ attributes.imagealtpSe } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                    </button>
                                </div>
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentvqu} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentvqu: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentvTZ} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentvTZ: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentjMR} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentjMR: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"> <span className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentUht} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentUht: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentkwI} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentkwI: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentGkX} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentGkX: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentdwG} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentdwG: newtext });
      }}
    /></span>

                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5 sm:px-6">
                        <div className="flex-shrink-0">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlKjh: media.url,
            imagealtlNl: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlKjh } 
            alt={ attributes.imagealtlNl } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-white">
                                <RichText tagName="span" value={attributes.contenteND} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contenteND: newtext }); }} /></div>
                            <div className="text-sm font-medium text-gray-400">
                                <RichText tagName="span" value={attributes.contentYcO} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentYcO: newtext }); }} /></div>
                        </div>
                        <button type="button" className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentSXy} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentSXy: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiMe }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="mt-3 px-2 space-y-1 sm:px-3"> <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentUrQ} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentUrQ: newtext });
      }}
    /></span>
 <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentqRc} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentqRc: newtext });
      }}
    /></span>
 <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentUOF} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentUOF: newtext });
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
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <div class="-ml-2 mr-2 flex items-center md:hidden">
                            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentSGz} /></span>

                                
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIdv }}
        >
      </svg>
      
                                
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguCc }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="flex-shrink-0 flex items-center">
                            
      <img
            src={ attributes.imageurlWvj } 
            alt={ attributes.imagealtJVv } 
            class="block lg:hidden h-8 w-auto"
          />
                            
      <img
            src={ attributes.imageurlFdn } 
            alt={ attributes.imagealtSLa } 
            class="hidden lg:block h-8 w-auto"
          />
                        </div>
                        <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4"> <span class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page"><RichText.Content value={attributes.contentVQP} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentMxG} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentEvf} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentoMA} /></span>

                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                                
      <svg
         class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaAj }}
        >
      </svg>
       <span><RichText.Content value={attributes.contentrZs} /></span>

                            </button>
                        </div>
                        <div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                            <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentIhl} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSjn }}
        >
      </svg>
      
                            </button>
                            <div class="ml-3 relative">
                                <div>
                                    <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentciO} /></span>

                                        
      <img
            src={ attributes.imageurlNrD } 
            alt={ attributes.imagealtpSe } 
            class="h-8 w-8 rounded-full"
          />
                                    </button>
                                </div>
                                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentvqu} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentvTZ} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentjMR} /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:hidden" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3"> <span class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page"><RichText.Content value={attributes.contentUht} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentkwI} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentGkX} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentdwG} /></span>

                </div>
                <div class="pt-4 pb-3 border-t border-gray-700">
                    <div class="flex items-center px-5 sm:px-6">
                        <div class="flex-shrink-0">
                            
      <img
            src={ attributes.imageurlKjh } 
            alt={ attributes.imagealtlNl } 
            class="h-10 w-10 rounded-full"
          />
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium text-white">
                                <RichText.Content value={attributes.contenteND} /></div>
                            <div class="text-sm font-medium text-gray-400">
                                <RichText.Content value={attributes.contentYcO} /></div>
                        </div>
                        <button type="button" class="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentSXy} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiMe }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="mt-3 px-2 space-y-1 sm:px-3"> <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentUrQ} /></span>
 <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentqRc} /></span>
 <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentUOF} /></span>

                    </div>
                </div>
            </div>
        </nav>
    </div>
</div>
            );
            },
        });
        