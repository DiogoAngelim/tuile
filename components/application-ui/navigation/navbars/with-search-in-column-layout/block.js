
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-search-in-column-layout', {
            title: 'with search in column layout',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentGTB": {
    "type": "string",
    "default": "Search"
  },
  "contentJuJ": {
    "type": "string",
    "default": "Open menu"
  },
  "contentZLN": {
    "type": "string",
    "default": "View notifications"
  },
  "contentLaZ": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentTCb": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentiYC": {
    "type": "string",
    "default": "Settings"
  },
  "contentvWK": {
    "type": "string",
    "default": "Sign out"
  },
  "contentvFi": {
    "type": "string",
    "default": " New Project "
  },
  "contentvoI": {
    "type": "string",
    "default": "Dashboard"
  },
  "contenttAN": {
    "type": "string",
    "default": "Calendar"
  },
  "contentFhL": {
    "type": "string",
    "default": "Teams"
  },
  "contentMoW": {
    "type": "string",
    "default": "Directory"
  },
  "contentPZv": {
    "type": "string",
    "default": "Chelsea Hagon"
  },
  "contentWPV": {
    "type": "string",
    "default": "chelsea.hagon@example.com"
  },
  "contentulW": {
    "type": "string",
    "default": "View notifications"
  },
  "contentMfR": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentDLe": {
    "type": "string",
    "default": "Settings"
  },
  "contentsPn": {
    "type": "string",
    "default": "Sign out"
  },
  "imageurlVvk": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtddo": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlMVz": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1550525811-e5869dd03032.jpeg'
  },
  "imagealtLek": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlzpT": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1550525811-e5869dd03032.jpeg'
  },
  "imagealtYPW": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgcKa": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgLmt": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgwxC": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgKmO": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgruR": {
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
            value={ attributes.svgcKa }
            onChange={ ( value ) => {
              setAttributes({ svgcKa: value });
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
            value={ attributes.svgLmt }
            onChange={ ( value ) => {
              setAttributes({ svgLmt: value });
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
            value={ attributes.svgwxC }
            onChange={ ( value ) => {
              setAttributes({ svgwxC: value });
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
            value={ attributes.svgKmO }
            onChange={ ( value ) => {
              setAttributes({ svgKmO: value });
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
            value={ attributes.svgruR }
            onChange={ ( value ) => {
              setAttributes({ svgruR: value });
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
        <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                    <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                        <div className="flex-shrink-0 flex items-center"> <span>
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlVvk: media.url,
            imagealtddo: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlVvk } 
            alt={ attributes.imagealtddo } 
            onClick={ open } 
            className="block h-8 w-auto"
          /> 
        )} 
      />
          </span>

                        </div>
                    </div>
                    <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                        <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                            <div className="w-full">
                                <label for="search" className="sr-only">
                                    <RichText tagName="span" value={attributes.contentGTB} default="Search" onChange={ (newtext) => { setAttributes({ contentGTB: newtext }); }} /></label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                        
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcKa }}
        >
      </svg>
      
                                    </div>
                                    <input id="search" name="search" className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search" type="search"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                        <button type="button" className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentJuJ} default="Open menu" onChange={ (newtext) =>  {
        setAttributes({ contentJuJ: newtext });
      }}
    /></span>

                            
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLmt }}
        >
      </svg>
      
                            
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwxC }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4"> <span className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="sr-only"><RichText tagName="span" value={attributes.contentZLN} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentZLN: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKmO }}
        >
      </svg>
      
                        </span>
                        <div className="flex-shrink-0 relative ml-5">
                            <div>
                                <button type="button" className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentLaZ} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentLaZ: newtext });
      }}
    /></span>

                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlMVz: media.url,
            imagealtLek: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlMVz } 
            alt={ attributes.imagealtLek } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                </button>
                            </div>
                            <div className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentTCb} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentTCb: newtext });
      }}
    /></span>
 <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentiYC} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentiYC: newtext });
      }}
    /></span>
 <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentvWK} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentvWK: newtext });
      }}
    /></span>

                            </div>
                        </div> <span className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><RichText tagName="span" value={attributes.contentvFi} default="New Project" onChange={ (newtext) =>  {
        setAttributes({ contentvFi: newtext });
      }}
    /></span>

                    </div>
                </div>
            </div>
            <nav className="lg:hidden" aria-label="Global">
                <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4"> <span aria-current="page" className="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium"><RichText tagName="span" value={attributes.contentvoI} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentvoI: newtext });
      }}
    /></span>
 <span className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"><RichText tagName="span" value={attributes.contenttAN} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contenttAN: newtext });
      }}
    /></span>
 <span className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"><RichText tagName="span" value={attributes.contentFhL} default="Teams" onChange={ (newtext) =>  {
        setAttributes({ contentFhL: newtext });
      }}
    /></span>
 <span className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"><RichText tagName="span" value={attributes.contentMoW} default="Directory" onChange={ (newtext) =>  {
        setAttributes({ contentMoW: newtext });
      }}
    /></span>

                </div>
                <div className="border-t border-gray-200 pt-4 pb-3">
                    <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                        <div className="flex-shrink-0">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlzpT: media.url,
            imagealtYPW: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlzpT } 
            alt={ attributes.imagealtYPW } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-gray-800">
                                <RichText tagName="span" value={attributes.contentPZv} default="Chelsea Hagon" onChange={ (newtext) => { setAttributes({ contentPZv: newtext }); }} /></div>
                            <div className="text-sm font-medium text-gray-500">
                                <RichText tagName="span" value={attributes.contentWPV} default="chelsea.hagon@example.com" onChange={ (newtext) => { setAttributes({ contentWPV: newtext }); }} /></div>
                        </div>
                        <button type="button" className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentulW} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentulW: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgruR }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4"> <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contentMfR} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentMfR: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contentDLe} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentDLe: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contentsPn} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentsPn: newtext });
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
        <header class="bg-white shadow-sm lg:static lg:overflow-y-visible">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                    <div class="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                        <div class="flex-shrink-0 flex items-center"> <span>
            
      <img
            src={ attributes.imageurlVvk } 
            alt={ attributes.imagealtddo } 
            class="block h-8 w-auto"
          />
          </span>

                        </div>
                    </div>
                    <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                        <div class="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                            <div class="w-full">
                                <label for="search" class="sr-only">
                                    <RichText.Content value={attributes.contentGTB} /></label>
                                <div class="relative">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                        
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcKa }}
        >
      </svg>
      
                                    </div>
                                    <input id="search" name="search" class="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search" type="search"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                        <button type="button" class="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentJuJ} /></span>

                            
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLmt }}
        >
      </svg>
      
                            
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwxC }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4"> <span class="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="sr-only"><RichText.Content value={attributes.contentZLN} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKmO }}
        >
      </svg>
      
                        </span>
                        <div class="flex-shrink-0 relative ml-5">
                            <div>
                                <button type="button" class="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentLaZ} /></span>

                                    
      <img
            src={ attributes.imageurlMVz } 
            alt={ attributes.imagealtLek } 
            class="h-8 w-8 rounded-full"
          />
                                </button>
                            </div>
                            <div class="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentTCb} /></span>
 <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentiYC} /></span>
 <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentvWK} /></span>

                            </div>
                        </div> <span class="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><RichText.Content value={attributes.contentvFi} /></span>

                    </div>
                </div>
            </div>
            <nav class="lg:hidden" aria-label="Global">
                <div class="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4"> <span aria-current="page" class="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium"><RichText.Content value={attributes.contentvoI} /></span>
 <span class="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"><RichText.Content value={attributes.contenttAN} /></span>
 <span class="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"><RichText.Content value={attributes.contentFhL} /></span>
 <span class="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"><RichText.Content value={attributes.contentMoW} /></span>

                </div>
                <div class="border-t border-gray-200 pt-4 pb-3">
                    <div class="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                        <div class="flex-shrink-0">
                            
      <img
            src={ attributes.imageurlzpT } 
            alt={ attributes.imagealtYPW } 
            class="h-10 w-10 rounded-full"
          />
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium text-gray-800">
                                <RichText.Content value={attributes.contentPZv} /></div>
                            <div class="text-sm font-medium text-gray-500">
                                <RichText.Content value={attributes.contentWPV} /></div>
                        </div>
                        <button type="button" class="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentulW} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgruR }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4"> <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contentMfR} /></span>
 <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contentDLe} /></span>
 <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contentsPn} /></span>

                    </div>
                </div>
            </nav>
        </header>
    </div>
</div>
            );
            },
        });
        