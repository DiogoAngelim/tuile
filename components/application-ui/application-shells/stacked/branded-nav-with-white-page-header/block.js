
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/branded-nav-with-white-page-header', {
            title: 'branded nav with white page header',
            icon: (<img src="data:image/jpeg;base64,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vT9fha96025vMFhWmSt9+XyV69P1+AaCt8laRE28ymSt9+XyBYZ9en6/C18laRE28wWFaZK335fJXr0/X4BoK3yVpETbzKZK335fIFhn16fr8LXyVpETbzBYVpkrffl8levT9fgGgrfJWkRNvMpkrffl8gWGfXp+vwtfJWkRNvMFhWmSt9+XyVnPSJ27/ANBW2StYiZ8ymSt5mK+QLDOc9Inbv8AC1slaxEz5gsK0yVvMxXyVnPSJ27/AADQVtkrWImfMpkreZivkCwznPSJ27/C1slaxEz5gsK0yVvMxXyVnPSJ27/ANBW2StYiZ8ymSt5mK+QLDOc9Inbv8LWyVrETPmCwrTJW8zFfJWc9Inbv8A0FbZK1iJnzKZK3mYr5AsM5zUiZjv2/Ra2StaxafCQWFKZK3nau6JzUiZjv2/QGgrbJWtYtPhKKZK3nau4LjOc1ImY79v0WtkrWsWnwkFhSmSt52ruic1ImY79v0BoK2yVrWLT4SimSt52ruC4znNSJmO/b9FrZK1rFp8JBYUpkredq7onNSJmO/b9AaCtsla1i0+Eopkredq7guM5zUiZjv2/Ra161rFp8JBYUpkredq7onNSJmJ37foDQVtkrWsWnwlFMlbztXcFxnOakTMTv2/Ra2StaxafCQWFKZK3nau6JzUiZid+36A0FbZK1rFp8JRTJW87V3BcZzmpEzE79v0WtkrWsWnwkFhSmSt52ruic1ImYnft+gNBW2StaxafCUUyVvO1dwXGc5qRMxO/b9FrZK1rFp8JBYUpkredq7onNSszE77x+gNBWclYpFp8JRTLW87V33BcZzmpWZid94/RaclYpFp8JBYUplredq77onNSszE77x+gNBWclYpFp8JRTLW87V33BcZzmpWZid94/RaclYpFp8JBYUplredq77onNSszE77x+gNBWclYpFp8JRTLW87V33BcZzmpWZid94/RaclYpFp8JBYUplredq77onNSszE77x+gNBWb1ikWnwlFctbztG+4LjO2alZmJ33haclYpz+QLClctbztG+6LZqVmYnfeAaCs5KxTn8kVy1vO0b7guM7ZqVmYnfeFpyVinP5AsKVy1vO0b7otmpWZid94BoKzkrFOfyRXLW87RvuC4ztmpWZid94WnJWKc/kCyJVrlredo33RbLStpid94AmFZovN6xTnnwVrkpedo33BXkORa2SlbTE77wnmryc/kCnIci1clLW2jfctkpW0xO+8AryHIvzV5OfyRXJS1to33BXkORa2SlbTE77wnmryc/kCnIci1clLW2jfctkpW0xO+8AryHIvzV5OfyRXJS1to33BXkORa2SlbTE77wnmryc/kCnIci1clLW2jfctkpW0xO+8AryHIvzV5OfyRXJS1to33BXkORa2SlbTE77wnmryc/kCsUWiEVyUtbaN914mvNNd+8eQJhIAAAAAAAAAAAAAAAAAAAAAAAAAAAwwTNslrTMtOlT2wjFk6m/bbb9WgItWtvzRvsVrWv5Y23SAp0qe2FrVrb80b7JARWta/ljbdXpU9sLgItWtvzRvsVrWv5Y23SAp0qe2FrVrb80bpARWta/ljZXpU9sLgItWtvzRvsVrWv5Y2SAp0qe2FrVrb80b7JARWta/ljZXpU9sLgItWtvzRvsVrWv5Y2SAp0qe2FrVrb80b7JARWta/ljZXpU9sLgItWtvzRvsVrWv5Y2SAp0qe2FrVrb80b7JARWta/ljZHTp7YWARNa2iImN9itK1/LGyQFenT2wma1tERMb7JARWla/ljZHTp7YWARNa2iImN9itK1/LGyQFenT2wma1tERMb7JARWla/ljZHTp7YWARNa2iImN9itK1/LGyQFenT2wma1tERMb7JARWla/ljZHTp7YWARNa2iImN9itK1/LGyQFenSf4YTNazERMbxCQEVpWv5YiEdOk/wwsAia1mIiY3iCtK1/LEQkBXp0n+GEzWsxETG8QkBFaVr+WIhHTpP8MLAImtZiImN4grStfyxEJAV6dJ/hhM1rMRExvEJARWla/liIR06T/DCwCJrWYiJjeIK0rX8sRCQFenSf4YTNazG0xvEJAVrStZ3rEQTjpM7zWFgETWsxETHaEVpWs71iIWAVnHSZ3msJmtZiImO0JAVrStZ3rEQTjpM7zWFgETWsxETHaEVpWs71iIWAVnHSZ3msJmtZiImO0JAVrStZ3rEQTjpM7zWFgETWsxETHaEVpWs71iIWAVnHSZ3msJmtZiImO0JAVrStZ3rEQTjpM7zWN1gETWs15ZjtHkitK1netYiVgFZx0md5rG6ZrWa8sx2jySArWlazvWsRJOOkzvNY3WARNazXlmO0eSK0rWd61iJWAVnHSZ3msbpmtZryzHaPJICt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" />),
            category: 'common',
            attributes: {
  "contenthyt": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentTog": {
    "type": "string",
    "default": "Team"
  },
  "contentzyp": {
    "type": "string",
    "default": "Projects"
  },
  "contentAzx": {
    "type": "string",
    "default": "Calendar"
  },
  "contentxTC": {
    "type": "string",
    "default": "Reports"
  },
  "contentQZV": {
    "type": "string",
    "default": "View notifications"
  },
  "contentHgA": {
    "type": "string",
    "default": "Open user menu"
  },
  "contenteXQ": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentUwK": {
    "type": "string",
    "default": "Settings"
  },
  "contentDCR": {
    "type": "string",
    "default": "Sign out"
  },
  "contentZaq": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentUDp": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentBaj": {
    "type": "string",
    "default": "Team"
  },
  "contentHOY": {
    "type": "string",
    "default": "Projects"
  },
  "contentCTK": {
    "type": "string",
    "default": "Calendar"
  },
  "contentWls": {
    "type": "string",
    "default": "Reports"
  },
  "contentvRH": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentaVL": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentMRC": {
    "type": "string",
    "default": "View notifications"
  },
  "contenttfE": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentNOi": {
    "type": "string",
    "default": "Settings"
  },
  "contentKOh": {
    "type": "string",
    "default": "Sign out"
  },
  "contentiut": {
    "type": "string",
    "default": "Dashboard"
  },
  "imageurlhKi": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-300.svg'
  },
  "imagealtNEa": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlPRl": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtBWB": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlAzK": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtfsU": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgpzs": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgUuA": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgwXv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgBWF": {
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
            value={ attributes.svgpzs }
            onChange={ ( value ) => {
              setAttributes({ svgpzs: value });
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
            value={ attributes.svgUuA }
            onChange={ ( value ) => {
              setAttributes({ svgUuA: value });
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
            value={ attributes.svgwXv }
            onChange={ ( value ) => {
              setAttributes({ svgwXv: value });
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
            value={ attributes.svgBWF }
            onChange={ ( value ) => {
              setAttributes({ svgBWF: value });
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
            <nav className="bg-indigo-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlhKi: media.url,
            imagealtNEa: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlhKi } 
            alt={ attributes.imagealtNEa } 
            onClick={ open } 
            className="h-8 w-8"
          /> 
        )} 
      />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4"> <span className="bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page"><RichText tagName="span" value={attributes.contenthyt} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contenthyt: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentTog} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentTog: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentzyp} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentzyp: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentAzx} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentAzx: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentxTC} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentxTC: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <button type="button" className="bg-indigo-600 p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentQZV} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentQZV: newtext });
      }}
    /></span>

                                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpzs }}
        >
      </svg>
      
                                </button>
                                <div className="ml-3 relative">
                                    <div>
                                        <button type="button" className="max-w-xs bg-indigo-600 rounded-full flex items-center text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentHgA} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentHgA: newtext });
      }}
    /></span>

                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlPRl: media.url,
            imagealtBWB: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlPRl } 
            alt={ attributes.imagealtBWB } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                        </button>
                                    </div>
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contenteXQ} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contenteXQ: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentUwK} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentUwK: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentDCR} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentDCR: newtext });
      }}
    /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button type="button" className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentZaq} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentZaq: newtext });
      }}
    /></span>

                                
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUuA }}
        >
      </svg>
      
                                
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwXv }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"> <span className="bg-indigo-700 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentUDp} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentUDp: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentBaj} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentBaj: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentHOY} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentHOY: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentCTK} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentCTK: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentWls} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentWls: newtext });
      }}
    /></span>

                    </div>
                    <div className="pt-4 pb-3 border-t border-indigo-700">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlAzK: media.url,
            imagealtfsU: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlAzK } 
            alt={ attributes.imagealtfsU } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-white">
                                    <RichText tagName="span" value={attributes.contentvRH} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contentvRH: newtext }); }} /></div>
                                <div className="text-sm font-medium text-indigo-300">
                                    <RichText tagName="span" value={attributes.contentaVL} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentaVL: newtext }); }} /></div>
                            </div>
                            <button type="button" className="ml-auto bg-indigo-600 flex-shrink-0 p-1 border-2 border-transparent rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentMRC} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentMRC: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBWF }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="mt-3 px-2 space-y-1"> <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText tagName="span" value={attributes.contenttfE} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contenttfE: newtext });
      }}
    /></span>
 <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText tagName="span" value={attributes.contentNOi} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentNOi: newtext });
      }}
    /></span>
 <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText tagName="span" value={attributes.contentKOh} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentKOh: newtext });
      }}
    /></span>

                        </div>
                    </div>
                </div>
            </nav>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                     <h1 className="text-3xl font-bold leading-tight text-gray-900"><RichText tagName="span" value={attributes.contentiut} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentiut: newtext });
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
            <nav class="bg-indigo-600">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                
      <img
            src={ attributes.imageurlhKi } 
            alt={ attributes.imagealtNEa } 
            class="h-8 w-8"
          />
                            </div>
                            <div class="hidden md:block">
                                <div class="ml-10 flex items-baseline space-x-4"> <span class="bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page"><RichText.Content value={attributes.contenthyt} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentTog} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentzyp} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentAzx} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentxTC} /></span>

                                </div>
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-4 flex items-center md:ml-6">
                                <button type="button" class="bg-indigo-600 p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentQZV} /></span>

                                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpzs }}
        >
      </svg>
      
                                </button>
                                <div class="ml-3 relative">
                                    <div>
                                        <button type="button" class="max-w-xs bg-indigo-600 rounded-full flex items-center text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentHgA} /></span>

                                            
      <img
            src={ attributes.imageurlPRl } 
            alt={ attributes.imagealtBWB } 
            class="h-8 w-8 rounded-full"
          />
                                        </button>
                                    </div>
                                    <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contenteXQ} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentUwK} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentDCR} /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="-mr-2 flex md:hidden">
                            <button type="button" class="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentZaq} /></span>

                                
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUuA }}
        >
      </svg>
      
                                
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwXv }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div class="md:hidden" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3"> <span class="bg-indigo-700 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page"><RichText.Content value={attributes.contentUDp} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentBaj} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentHOY} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentCTK} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentWls} /></span>

                    </div>
                    <div class="pt-4 pb-3 border-t border-indigo-700">
                        <div class="flex items-center px-5">
                            <div class="flex-shrink-0">
                                
      <img
            src={ attributes.imageurlAzK } 
            alt={ attributes.imagealtfsU } 
            class="h-10 w-10 rounded-full"
          />
                            </div>
                            <div class="ml-3">
                                <div class="text-base font-medium text-white">
                                    <RichText.Content value={attributes.contentvRH} /></div>
                                <div class="text-sm font-medium text-indigo-300">
                                    <RichText.Content value={attributes.contentaVL} /></div>
                            </div>
                            <button type="button" class="ml-auto bg-indigo-600 flex-shrink-0 p-1 border-2 border-transparent rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentMRC} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBWF }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="mt-3 px-2 space-y-1"> <span class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText.Content value={attributes.contenttfE} /></span>
 <span class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText.Content value={attributes.contentNOi} /></span>
 <span class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText.Content value={attributes.contentKOh} /></span>

                        </div>
                    </div>
                </div>
            </nav>
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                     <h1 class="text-3xl font-bold leading-tight text-gray-900"><RichText.Content value={attributes.contentiut} /></h1>

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
        