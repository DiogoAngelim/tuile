
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/dark-nav-with-white-page-header', {
            title: 'dark nav with white page header',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentZNV": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentVlA": {
    "type": "string",
    "default": "Team"
  },
  "contentfnW": {
    "type": "string",
    "default": "Projects"
  },
  "contentooX": {
    "type": "string",
    "default": "Calendar"
  },
  "contentCxT": {
    "type": "string",
    "default": "Reports"
  },
  "contentGZW": {
    "type": "string",
    "default": "View notifications"
  },
  "contentkbr": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentknH": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentZij": {
    "type": "string",
    "default": "Settings"
  },
  "contentkrz": {
    "type": "string",
    "default": "Sign out"
  },
  "contentNpz": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentHcV": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentzVS": {
    "type": "string",
    "default": "Team"
  },
  "contentcVo": {
    "type": "string",
    "default": "Projects"
  },
  "contentGMw": {
    "type": "string",
    "default": "Calendar"
  },
  "contentnnD": {
    "type": "string",
    "default": "Reports"
  },
  "contentAiZ": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentxxk": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentcKe": {
    "type": "string",
    "default": "View notifications"
  },
  "contentQIy": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentwRq": {
    "type": "string",
    "default": "Settings"
  },
  "contentaPA": {
    "type": "string",
    "default": "Sign out"
  },
  "contentHMB": {
    "type": "string",
    "default": "Dashboard"
  },
  "imageurlpLK": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-500.svg'
  },
  "imagealtYag": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurldOn": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtCNR": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlprW": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtGHq": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgPkg": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgMUG": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgJPM": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgCXa": {
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
            value={ attributes.svgPkg }
            onChange={ ( value ) => {
              setAttributes({ svgPkg: value });
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
            value={ attributes.svgMUG }
            onChange={ ( value ) => {
              setAttributes({ svgMUG: value });
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
            value={ attributes.svgJPM }
            onChange={ ( value ) => {
              setAttributes({ svgJPM: value });
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
            value={ attributes.svgCXa }
            onChange={ ( value ) => {
              setAttributes({ svgCXa: value });
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
            imageurlpLK: media.url,
            imagealtYag: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlpLK } 
            alt={ attributes.imagealtYag } 
            onClick={ open } 
            className="h-8 w-8"
          /> 
        )} 
      />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4"> <span className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentZNV} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentZNV: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentVlA} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentVlA: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentfnW} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentfnW: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentooX} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentooX: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentCxT} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentCxT: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentGZW} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentGZW: newtext });
      }}
    /></span>

                                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPkg }}
        >
      </svg>
      
                                </button>
                                <div className="ml-3 relative">
                                    <div>
                                        <button type="button" className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentkbr} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentkbr: newtext });
      }}
    /></span>

                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurldOn: media.url,
            imagealtCNR: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurldOn } 
            alt={ attributes.imagealtCNR } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                        </button>
                                    </div>
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentknH} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentknH: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentZij} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentZij: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentkrz} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentkrz: newtext });
      }}
    /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentNpz} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentNpz: newtext });
      }}
    /></span>

                                
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMUG }}
        >
      </svg>
      
                                
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJPM }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"> <span className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentHcV} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentHcV: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentzVS} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentzVS: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentcVo} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentcVo: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentGMw} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentGMw: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentnnD} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentnnD: newtext });
      }}
    /></span>

                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlprW: media.url,
            imagealtGHq: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlprW } 
            alt={ attributes.imagealtGHq } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium leading-none text-white">
                                    <RichText tagName="span" value={attributes.contentAiZ} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contentAiZ: newtext }); }} /></div>
                                <div className="text-sm font-medium leading-none text-gray-400">
                                    <RichText tagName="span" value={attributes.contentxxk} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentxxk: newtext }); }} /></div>
                            </div>
                            <button type="button" className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentcKe} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentcKe: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCXa }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="mt-3 px-2 space-y-1"> <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentQIy} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentQIy: newtext });
      }}
    /></span>
 <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentwRq} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentwRq: newtext });
      }}
    /></span>
 <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentaPA} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentaPA: newtext });
      }}
    /></span>

                        </div>
                    </div>
                </div>
            </nav>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                     <h1 className="text-3xl font-bold text-gray-900"><RichText tagName="span" value={attributes.contentHMB} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentHMB: newtext });
      }}
    /></h1>

                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
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
            src={ attributes.imageurlpLK } 
            alt={ attributes.imagealtYag } 
            class="h-8 w-8"
          />
                            </div>
                            <div class="hidden md:block">
                                <div class="ml-10 flex items-baseline space-x-4"> <span class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page"><RichText.Content value={attributes.contentZNV} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentVlA} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentfnW} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentooX} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentCxT} /></span>

                                </div>
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-4 flex items-center md:ml-6">
                                <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentGZW} /></span>

                                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPkg }}
        >
      </svg>
      
                                </button>
                                <div class="ml-3 relative">
                                    <div>
                                        <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentkbr} /></span>

                                            
      <img
            src={ attributes.imageurldOn } 
            alt={ attributes.imagealtCNR } 
            class="h-8 w-8 rounded-full"
          />
                                        </button>
                                    </div>
                                    <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentknH} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentZij} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentkrz} /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="-mr-2 flex md:hidden">
                            <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentNpz} /></span>

                                
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMUG }}
        >
      </svg>
      
                                
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJPM }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div class="md:hidden" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3"> <span class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page"><RichText.Content value={attributes.contentHcV} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentzVS} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentcVo} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentGMw} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentnnD} /></span>

                    </div>
                    <div class="pt-4 pb-3 border-t border-gray-700">
                        <div class="flex items-center px-5">
                            <div class="flex-shrink-0">
                                
      <img
            src={ attributes.imageurlprW } 
            alt={ attributes.imagealtGHq } 
            class="h-10 w-10 rounded-full"
          />
                            </div>
                            <div class="ml-3">
                                <div class="text-base font-medium leading-none text-white">
                                    <RichText.Content value={attributes.contentAiZ} /></div>
                                <div class="text-sm font-medium leading-none text-gray-400">
                                    <RichText.Content value={attributes.contentxxk} /></div>
                            </div>
                            <button type="button" class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentcKe} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCXa }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="mt-3 px-2 space-y-1"> <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentQIy} /></span>
 <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentwRq} /></span>
 <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentaPA} /></span>

                        </div>
                    </div>
                </div>
            </nav>
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                     <h1 class="text-3xl font-bold text-gray-900"><RichText.Content value={attributes.contentHMB} /></h1>

                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
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
        