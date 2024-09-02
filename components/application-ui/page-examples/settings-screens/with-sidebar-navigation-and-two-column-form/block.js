
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-sidebar-navigation-and-two-column-form', {
            title: 'with sidebar navigation and two column form',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentYxU": {
    "type": "string",
    "default": "Search"
  },
  "contentrgK": {
    "type": "string",
    "default": "Open menu"
  },
  "contentlxY": {
    "type": "string",
    "default": "View notifications"
  },
  "contentjZe": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentXzH": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentRrr": {
    "type": "string",
    "default": "Settings"
  },
  "contentSKd": {
    "type": "string",
    "default": "Sign out"
  },
  "contentjoy": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentWzM": {
    "type": "string",
    "default": " Jobs "
  },
  "contentWvL": {
    "type": "string",
    "default": " Applicants "
  },
  "contentaxd": {
    "type": "string",
    "default": " Company "
  },
  "contentcIk": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentpRP": {
    "type": "string",
    "default": "Jobs"
  },
  "contentVNa": {
    "type": "string",
    "default": "Applicants"
  },
  "contenthHG": {
    "type": "string",
    "default": "Company"
  },
  "contentwte": {
    "type": "string",
    "default": "Lisa Marie"
  },
  "contentHjn": {
    "type": "string",
    "default": "lisamarie@example.com"
  },
  "contentYfo": {
    "type": "string",
    "default": "View notifications"
  },
  "contentOxq": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentYxq": {
    "type": "string",
    "default": "Settings"
  },
  "contenteem": {
    "type": "string",
    "default": "Sign out"
  },
  "contentmCn": {
    "type": "string",
    "default": " Profile "
  },
  "contentdRT": {
    "type": "string",
    "default": " Account "
  },
  "contentsYA": {
    "type": "string",
    "default": " Password "
  },
  "contentRYn": {
    "type": "string",
    "default": " Notifications "
  },
  "contentYQC": {
    "type": "string",
    "default": " Plan &amp; Billing "
  },
  "contentpgQ": {
    "type": "string",
    "default": " Integrations "
  },
  "contenthNx": {
    "type": "string",
    "default": "Payment details"
  },
  "contentmMM": {
    "type": "string",
    "default": "Update your billing information. Please note that updating your location could affect your tax rates."
  },
  "contentSct": {
    "type": "string",
    "default": "First name"
  },
  "contentOhO": {
    "type": "string",
    "default": "Last name"
  },
  "contentJdf": {
    "type": "string",
    "default": "Email address"
  },
  "contenteyv": {
    "type": "string",
    "default": "Expration date"
  },
  "contentsop": {
    "type": "string",
    "default": "Security code"
  },
  "contentHje": {
    "type": "string",
    "default": "Country"
  },
  "contentzXj": {
    "type": "string",
    "default": "United States"
  },
  "contentIeN": {
    "type": "string",
    "default": "Canada"
  },
  "contentrXu": {
    "type": "string",
    "default": "Mexico"
  },
  "contentGoy": {
    "type": "string",
    "default": "ZIP / Postal code"
  },
  "contentCZm": {
    "type": "string",
    "default": "Save"
  },
  "contentmdd": {
    "type": "string",
    "default": "Plan"
  },
  "contentTfN": {
    "type": "string",
    "default": "Pricing plans"
  },
  "contentlea": {
    "type": "string",
    "default": "Startup"
  },
  "contentcuq": {
    "type": "string",
    "default": "$29 / mo"
  },
  "contentoDW": {
    "type": "string",
    "default": "($290 / yr)"
  },
  "contentsCK": {
    "type": "string",
    "default": "Up to 5 active job postings"
  },
  "contenthWa": {
    "type": "string",
    "default": "Business"
  },
  "contentRWI": {
    "type": "string",
    "default": "$99 / mo"
  },
  "contentznu": {
    "type": "string",
    "default": "($990 / yr)"
  },
  "contentVDz": {
    "type": "string",
    "default": "Up to 25 active job postings"
  },
  "contentOXw": {
    "type": "string",
    "default": "Enterprise"
  },
  "contentBeS": {
    "type": "string",
    "default": "$249 / mo"
  },
  "contentJuK": {
    "type": "string",
    "default": "($2490 / yr)"
  },
  "contentCzP": {
    "type": "string",
    "default": "Unlimited active job postings"
  },
  "contentylJ": {
    "type": "string",
    "default": "Annual billing "
  },
  "contentmWQ": {
    "type": "string",
    "default": "(Save 10%)"
  },
  "contentJsv": {
    "type": "string",
    "default": "Save"
  },
  "contentVEW": {
    "type": "string",
    "default": "Billing history"
  },
  "contentUkN": {
    "type": "string",
    "default": "Date"
  },
  "contentlTe": {
    "type": "string",
    "default": "Description"
  },
  "contentkhH": {
    "type": "string",
    "default": "Amount"
  },
  "contentoGX": {
    "type": "string",
    "default": "View receipt"
  },
  "contentPbQ": {
    "type": "string",
    "default": "1/1/2020"
  },
  "contentAWI": {
    "type": "string",
    "default": "Business Plan - Annual Billing"
  },
  "contentgjH": {
    "type": "string",
    "default": "CA$109.00"
  },
  "contentuzD": {
    "type": "string",
    "default": "View receipt"
  },
  "imageurlkKS": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-orange-500.svg'
  },
  "imagealtUoL": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlRBH": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517365830460-955ce3ccd263.jpeg'
  },
  "imagealtOAt": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlNVH": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517365830460-955ce3ccd263.jpeg'
  },
  "imagealtlot": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgMdl": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgFDv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgCmB": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgiJO": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgwgK": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgcYw": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgCuA": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z\"/>\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 12a3 3 0 11-6 0 3 3 0 016 0z\"/>"
  },
  "svgJha": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z\"/>"
  },
  "svgkoo": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgoBp": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z\"/>"
  },
  "svgkjI": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z\"/>"
  },
  "svgxjo": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgMdl }
            onChange={ ( value ) => {
              setAttributes({ svgMdl: value });
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
            value={ attributes.svgFDv }
            onChange={ ( value ) => {
              setAttributes({ svgFDv: value });
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
            value={ attributes.svgCmB }
            onChange={ ( value ) => {
              setAttributes({ svgCmB: value });
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
            value={ attributes.svgiJO }
            onChange={ ( value ) => {
              setAttributes({ svgiJO: value });
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
            value={ attributes.svgwgK }
            onChange={ ( value ) => {
              setAttributes({ svgwgK: value });
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
            value={ attributes.svgcYw }
            onChange={ ( value ) => {
              setAttributes({ svgcYw: value });
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
            value={ attributes.svgCuA }
            onChange={ ( value ) => {
              setAttributes({ svgCuA: value });
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
            value={ attributes.svgJha }
            onChange={ ( value ) => {
              setAttributes({ svgJha: value });
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
            value={ attributes.svgkoo }
            onChange={ ( value ) => {
              setAttributes({ svgkoo: value });
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
            value={ attributes.svgoBp }
            onChange={ ( value ) => {
              setAttributes({ svgoBp: value });
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
            value={ attributes.svgkjI }
            onChange={ ( value ) => {
              setAttributes({ svgkjI: value });
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
            value={ attributes.svgxjo }
            onChange={ ( value ) => {
              setAttributes({ svgxjo: value });
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
        <div className="h-full">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
                    <div className="relative h-16 flex justify-between">
                        <div className="relative z-10 px-2 flex lg:px-0">
                            <div className="flex-shrink-0 flex items-center">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlkKS: media.url,
            imagealtUoL: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlkKS } 
            alt={ attributes.imagealtUoL } 
            onClick={ open } 
            className="block h-8 w-auto"
          /> 
        )} 
      />
                            </div>
                        </div>
                        <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                            <div className="max-w-xs w-full">
                                <label for="search" className="sr-only">
                                    <RichText tagName="span" value={attributes.contentYxU} default="Search" onChange={ (newtext) => { setAttributes({ contentYxU: newtext }); }} /></label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                        
      <svg
         className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMdl }}
        >
      </svg>
      
                                    </div>
                                    <input name="search" id="search" className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 sm:text-sm" placeholder="Search" type="search"/>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10 flex items-center lg:hidden">
                            <button type="button" className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentrgK} default="Open menu" onChange={ (newtext) =>  {
        setAttributes({ contentrgK: newtext });
      }}
    /></span>

                                
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFDv }}
        >
      </svg>
      
                                
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCmB }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                            <button type="button" className="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> <span className="sr-only"><RichText tagName="span" value={attributes.contentlxY} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentlxY: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiJO }}
        >
      </svg>
      
                            </button>
                            <div className="flex-shrink-0 relative ml-4">
                                <div>
                                    <button type="button" className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentjZe} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentjZe: newtext });
      }}
    /></span>

                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlRBH: media.url,
            imagealtOAt: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlRBH } 
            alt={ attributes.imagealtOAt } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                    </button>
                                </div>
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentXzH} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentXzH: newtext });
      }}
    /></span>
 <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentRrr} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentRrr: newtext });
      }}
    /></span>
 <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentSKd} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentSKd: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global"> <span className="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contentjoy} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentjoy: newtext });
      }}
    /></span>
 <span className="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contentWzM} default="Jobs" onChange={ (newtext) =>  {
        setAttributes({ contentWzM: newtext });
      }}
    /></span>
 <span className="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contentWvL} default="Applicants" onChange={ (newtext) =>  {
        setAttributes({ contentWvL: newtext });
      }}
    /></span>
 <span className="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contentaxd} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentaxd: newtext });
      }}
    /></span>

                    </nav>
                </div>
                <nav className="lg:hidden" aria-label="Global" id="mobile-menu">
                    <div className="pt-2 pb-3 px-2 space-y-1"> <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contentcIk} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentcIk: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contentpRP} default="Jobs" onChange={ (newtext) =>  {
        setAttributes({ contentpRP: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contentVNa} default="Applicants" onChange={ (newtext) =>  {
        setAttributes({ contentVNa: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contenthHG} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contenthHG: newtext });
      }}
    /></span>

                    </div>
                    <div className="border-t border-gray-200 pt-4 pb-3">
                        <div className="px-4 flex items-center">
                            <div className="flex-shrink-0">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlNVH: media.url,
            imagealtlot: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlNVH } 
            alt={ attributes.imagealtlot } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-gray-800">
                                    <RichText tagName="span" value={attributes.contentwte} default="Lisa Marie" onChange={ (newtext) => { setAttributes({ contentwte: newtext }); }} /></div>
                                <div className="text-sm font-medium text-gray-500">
                                    <RichText tagName="span" value={attributes.contentHjn} default="lisamarie@example.com" onChange={ (newtext) => { setAttributes({ contentHjn: newtext }); }} /></div>
                            </div>
                            <button type="button" className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> <span className="sr-only"><RichText tagName="span" value={attributes.contentYfo} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentYfo: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwgK }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="mt-3 px-2 space-y-1"> <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contentOxq} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentOxq: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contentYxq} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentYxq: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText tagName="span" value={attributes.contenteem} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contenteem: newtext });
      }}
    /></span>

                        </div>
                    </div>
                </nav>
            </header>
            <main className="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
                    <spanside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                        <nav className="space-y-1"> <a className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcYw }}
        >
      </svg>
      
            <span className="truncate"><RichText tagName="span" value={attributes.contentmCn} default="Profile" onChange={ (newtext) =>  {
        setAttributes({ contentmCn: newtext });
      }}
    /></span>
          

          <span className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCuA }}
        >
      </svg>
      
            <span className="truncate"><RichText tagName="span" value={attributes.contentdRT} default="Account" onChange={ (newtext) =>  {
        setAttributes({ contentdRT: newtext });
      }}
    /></span>
          </span>

          <span className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJha }}
        >
      </svg>
      
            <span className="truncate"><RichText tagName="span" value={attributes.contentsYA} default="Password" onChange={ (newtext) =>  {
        setAttributes({ contentsYA: newtext });
      }}
    /></span>
          </span>

          <span className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkoo }}
        >
      </svg>
      
            <span className="truncate"><RichText tagName="span" value={attributes.contentRYn} default="Notifications" onChange={ (newtext) =>  {
        setAttributes({ contentRYn: newtext });
      }}
    /></span>
          </span>

          <span className="bg-gray-50 text-orange-600 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium" aria-current="page">
            
            
      <svg
         className="text-orange-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoBp }}
        >
      </svg>
      
            <span className="truncate"><RichText tagName="span" value={attributes.contentYQC} default="Plan &amp; Billing" onChange={ (newtext) =>  {
        setAttributes({ contentYQC: newtext });
      }}
    /></span>
          </span>

          <span className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkjI }}
        >
      </svg>
      
            <span className="truncate"><RichText tagName="span" value={attributes.contentpgQ} default="Integrations" onChange={ (newtext) =>  {
        setAttributes({ contentpgQ: newtext });
      }}
    /></span>
          </span>
        </a></nav>
      

      
      <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
        <section aria-labelledby="payment-details-heading">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 sm:p-6">
                <div>
                  <h2 id="payment-details-heading" className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contenthNx} default="Payment details" onChange={ (newtext) =>  {
        setAttributes({ contenthNx: newtext });
      }}
    /></h2>
                  <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentmMM} default="Update your billing information. Please note that updating your location could affect your tax rates." onChange={ (newtext) =>  {
        setAttributes({ contentmMM: newtext });
      }}
    /></p>
                </div>

                <div className="mt-6 grid grid-cols-4 gap-6">
                  <div className="col-span-4 sm:col-span-2">
                    <label for="first-name" className="block text-sm font-medium text-gray-700"><RichText tagName="span" value={attributes.contentSct} default="First name" onChange={ (newtext) =>  {
        setAttributes({ contentSct: newtext });
      }}
    /></label>
                    <input type="text" name="first-name" id="first-name" autocomplete="cc-given-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"/>
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <label for="last-name" className="block text-sm font-medium text-gray-700"><RichText tagName="span" value={attributes.contentOhO} default="Last name" onChange={ (newtext) =>  {
        setAttributes({ contentOhO: newtext });
      }}
    /></label>
                    <input type="text" name="last-name" id="last-name" autocomplete="cc-family-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"/>
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <label for="email-address" className="block text-sm font-medium text-gray-700"><RichText tagName="span" value={attributes.contentJdf} default="Email address" onChange={ (newtext) =>  {
        setAttributes({ contentJdf: newtext });
      }}
    /></label>
                    <input type="text" name="email-address" id="email-address" autocomplete="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"/>
                  </div>

                  <div className="col-span-4 sm:col-span-1">
                    <label for="expiration-date" className="block text-sm font-medium text-gray-700"><RichText tagName="span" value={attributes.contenteyv} default="Expration date" onChange={ (newtext) =>  {
        setAttributes({ contenteyv: newtext });
      }}
    /></label>
                    <input type="text" name="expiration-date" id="expiration-date" autocomplete="cc-exp" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" placeholder="MM / YY"/>
                  </div>

                  <div className="col-span-4 sm:col-span-1">
                    <label for="security-code" className="flex items-center text-sm font-medium text-gray-700">
                      <span><RichText tagName="span" value={attributes.contentsop} default="Security code" onChange={ (newtext) =>  {
        setAttributes({ contentsop: newtext });
      }}
    /></span>
                      
                      
      <svg
         className="ml-1 flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxjo }}
        >
      </svg>
      
                    </label>
                    <input type="text" name="security-code" id="security-code" autocomplete="cc-csc" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"/>
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <label for="country" className="block text-sm font-medium text-gray-700"><RichText tagName="span" value={attributes.contentHje} default="Country" onChange={ (newtext) =>  {
        setAttributes({ contentHje: newtext });
      }}
    /></label>
                    <select id="country" name="country" autocomplete="country-name" className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                      <option><RichText tagName="span" value={attributes.contentzXj} default="United States" onChange={ (newtext) =>  {
        setAttributes({ contentzXj: newtext });
      }}
    /></option>
                      <option><RichText tagName="span" value={attributes.contentIeN} default="Canada" onChange={ (newtext) =>  {
        setAttributes({ contentIeN: newtext });
      }}
    /></option>
                      <option><RichText tagName="span" value={attributes.contentrXu} default="Mexico" onChange={ (newtext) =>  {
        setAttributes({ contentrXu: newtext });
      }}
    /></option>
                    </select>
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <label for="postal-code" className="block text-sm font-medium text-gray-700"><RichText tagName="span" value={attributes.contentGoy} default="ZIP / Postal code" onChange={ (newtext) =>  {
        setAttributes({ contentGoy: newtext });
      }}
    /></label>
                    <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"/>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"><RichText tagName="span" value={attributes.contentCZm} default="Save" onChange={ (newtext) =>  {
        setAttributes({ contentCZm: newtext });
      }}
    /></button>
              </div>
            </div>
          </form>
        </section>

        
        <section aria-labelledby="plan-heading">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h2 id="plan-heading" className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentmdd} default="Plan" onChange={ (newtext) =>  {
        setAttributes({ contentmdd: newtext });
      }}
    /></h2>
                </div>

                <fieldset>
                  <legend className="sr-only"><RichText tagName="span" value={attributes.contentTfN} default="Pricing plans" onChange={ (newtext) =>  {
        setAttributes({ contentTfN: newtext });
      }}
    /></legend>
                  <div className="relative bg-white rounded-md -space-y-px">
                    
                    <label className="rounded-tl-md rounded-tr-md relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none">
                      <div className="flex items-center text-sm">
                        <input type="radio" name="pricing-plan" value="Startup" className="h-4 w-4 text-orange-500 border-gray-300 focus:ring-gray-900" aria-labelledby="pricing-plans-0-label" aria-describedby="pricing-plans-0-description-0 pricing-plans-0-description-1"/>
                        <span id="pricing-plans-0-label" className="ml-3 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentlea} default="Startup" onChange={ (newtext) =>  {
        setAttributes({ contentlea: newtext });
      }}
    /></span>
                      </div>
                      <p id="pricing-plans-0-description-0" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                        
                        <span className="font-medium"><RichText tagName="span" value={attributes.contentcuq} default="$29 / mo" onChange={ (newtext) =>  {
        setAttributes({ contentcuq: newtext });
      }}
    /></span>
                        
                        <span><RichText tagName="span" value={attributes.contentoDW} default="($290 / yr)" onChange={ (newtext) =>  {
        setAttributes({ contentoDW: newtext });
      }}
    /></span>
                      </p>
                      
                      <p id="pricing-plans-0-description-1" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"><RichText tagName="span" value={attributes.contentsCK} default="Up to 5 active job postings" onChange={ (newtext) =>  {
        setAttributes({ contentsCK: newtext });
      }}
    /></p>
                    </label>

                    
                    <label className="relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none">
                      <div className="flex items-center text-sm">
                        <input type="radio" name="pricing-plan" value="Business" className="h-4 w-4 text-orange-500 border-gray-300 focus:ring-gray-900" aria-labelledby="pricing-plans-1-label" aria-describedby="pricing-plans-1-description-0 pricing-plans-1-description-1"/>
                        <span id="pricing-plans-1-label" className="ml-3 font-medium text-gray-900"><RichText tagName="span" value={attributes.contenthWa} default="Business" onChange={ (newtext) =>  {
        setAttributes({ contenthWa: newtext });
      }}
    /></span>
                      </div>
                      <p id="pricing-plans-1-description-0" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                        
                        <span className="font-medium"><RichText tagName="span" value={attributes.contentRWI} default="$99 / mo" onChange={ (newtext) =>  {
        setAttributes({ contentRWI: newtext });
      }}
    /></span>
                        
                        <span><RichText tagName="span" value={attributes.contentznu} default="($990 / yr)" onChange={ (newtext) =>  {
        setAttributes({ contentznu: newtext });
      }}
    /></span>
                      </p>
                      
                      <p id="pricing-plans-1-description-1" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"><RichText tagName="span" value={attributes.contentVDz} default="Up to 25 active job postings" onChange={ (newtext) =>  {
        setAttributes({ contentVDz: newtext });
      }}
    /></p>
                    </label>

                    
                    <label className="rounded-bl-md rounded-br-md relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none">
                      <div className="flex items-center text-sm">
                        <input type="radio" name="pricing-plan" value="Enterprise" className="h-4 w-4 text-orange-500 border-gray-300 focus:ring-gray-900" aria-labelledby="pricing-plans-2-label" aria-describedby="pricing-plans-2-description-0 pricing-plans-2-description-1"/>
                        <span id="pricing-plans-2-label" className="ml-3 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentOXw} default="Enterprise" onChange={ (newtext) =>  {
        setAttributes({ contentOXw: newtext });
      }}
    /></span>
                      </div>
                      <p id="pricing-plans-2-description-0" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                        
                        <span className="font-medium"><RichText tagName="span" value={attributes.contentBeS} default="$249 / mo" onChange={ (newtext) =>  {
        setAttributes({ contentBeS: newtext });
      }}
    /></span>
                        
                        <span><RichText tagName="span" value={attributes.contentJuK} default="($2490 / yr)" onChange={ (newtext) =>  {
        setAttributes({ contentJuK: newtext });
      }}
    /></span>
                      </p>
                      
                      <p id="pricing-plans-2-description-1" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"><RichText tagName="span" value={attributes.contentCzP} default="Unlimited active job postings" onChange={ (newtext) =>  {
        setAttributes({ contentCzP: newtext });
      }}
    /></p>
                    </label>
                  </div>
                </fieldset>

                <div className="flex items-center">
                  
                  <button type="button" className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors ease-in-out duration-200" role="switch" aria-checked="true" aria-labelledby="annual-billing-label">
                    
                    <span aria-hidden="true" className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"/>
                  </button>
                  <span className="ml-3" id="annual-billing-label">
                    <span className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentylJ} default="Annual billing" onChange={ (newtext) =>  {
        setAttributes({ contentylJ: newtext });
      }}
    /></span>
                    <span className="text-sm text-gray-500"><RichText tagName="span" value={attributes.contentmWQ} default="(Save 10%)" onChange={ (newtext) =>  {
        setAttributes({ contentmWQ: newtext });
      }}
    /></span>
                  </span>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"><RichText tagName="span" value={attributes.contentJsv} default="Save" onChange={ (newtext) =>  {
        setAttributes({ contentJsv: newtext });
      }}
    /></button>
              </div>
            </div>
          </form>
        </section>

        
        <section aria-labelledby="billing-history-heading">
          <div className="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 sm:px-6">
              <h2 id="billing-history-heading" className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentVEW} default="Billing history" onChange={ (newtext) =>  {
        setAttributes({ contentVEW: newtext });
      }}
    /></h2>
            </div>
            <div className="mt-6 flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden border-t border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><RichText tagName="span" value={attributes.contentUkN} default="Date" onChange={ (newtext) =>  {
        setAttributes({ contentUkN: newtext });
      }}
    /></th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><RichText tagName="span" value={attributes.contentlTe} default="Description" onChange={ (newtext) =>  {
        setAttributes({ contentlTe: newtext });
      }}
    /></th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><RichText tagName="span" value={attributes.contentkhH} default="Amount" onChange={ (newtext) =>  {
        setAttributes({ contentkhH: newtext });
      }}
    /></th>
                          
                          <th scope="col" className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <span className="sr-only"><RichText tagName="span" value={attributes.contentoGX} default="View receipt" onChange={ (newtext) =>  {
        setAttributes({ contentoGX: newtext });
      }}
    /></span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <time datetime="2020-01-01"><RichText tagName="span" value={attributes.contentPbQ} default="1/1/2020" onChange={ (newtext) =>  {
        setAttributes({ contentPbQ: newtext });
      }}
    /></time>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><RichText tagName="span" value={attributes.contentAWI} default="Business Plan - Annual Billing" onChange={ (newtext) =>  {
        setAttributes({ contentAWI: newtext });
      }}
    /></td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><RichText tagName="span" value={attributes.contentgjH} default="CA$109.00" onChange={ (newtext) =>  {
        setAttributes({ contentgjH: newtext });
      }}
    /></td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <span className="text-orange-600 hover:text-orange-900"><RichText tagName="span" value={attributes.contentuzD} default="View receipt" onChange={ (newtext) =>  {
        setAttributes({ contentuzD: newtext });
      }}
    /></span>
                          </td>
                        </tr>

                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </spanside></div>
  </main>
</div>
</div></div>
                </div>
                );
            },
            save(props) {
            const { attributes } = props;

            return (
                <div>
    <div>
        <div class="h-full">
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
                    <div class="relative h-16 flex justify-between">
                        <div class="relative z-10 px-2 flex lg:px-0">
                            <div class="flex-shrink-0 flex items-center">
                                
      <img
            src={ attributes.imageurlkKS } 
            alt={ attributes.imagealtUoL } 
            class="block h-8 w-auto"
          />
                            </div>
                        </div>
                        <div class="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                            <div class="max-w-xs w-full">
                                <label for="search" class="sr-only">
                                    <RichText.Content value={attributes.contentYxU} /></label>
                                <div class="relative">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                        
      <svg
         class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMdl }}
        >
      </svg>
      
                                    </div>
                                    <input name="search" id="search" class="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 sm:text-sm" placeholder="Search" type="search"/>
                                </div>
                            </div>
                        </div>
                        <div class="relative z-10 flex items-center lg:hidden">
                            <button type="button" class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentrgK} /></span>

                                
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFDv }}
        >
      </svg>
      
                                
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCmB }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                            <button type="button" class="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> <span class="sr-only"><RichText.Content value={attributes.contentlxY} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiJO }}
        >
      </svg>
      
                            </button>
                            <div class="flex-shrink-0 relative ml-4">
                                <div>
                                    <button type="button" class="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentjZe} /></span>

                                        
      <img
            src={ attributes.imageurlRBH } 
            alt={ attributes.imagealtOAt } 
            class="h-8 w-8 rounded-full"
          />
                                    </button>
                                </div>
                                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentXzH} /></span>
 <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentRrr} /></span>
 <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentSKd} /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <nav class="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global"> <span class="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contentjoy} /></span>
 <span class="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contentWzM} /></span>
 <span class="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contentWvL} /></span>
 <span class="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contentaxd} /></span>

                    </nav>
                </div>
                <nav class="lg:hidden" aria-label="Global" id="mobile-menu">
                    <div class="pt-2 pb-3 px-2 space-y-1"> <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contentcIk} /></span>
 <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contentpRP} /></span>
 <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contentVNa} /></span>
 <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contenthHG} /></span>

                    </div>
                    <div class="border-t border-gray-200 pt-4 pb-3">
                        <div class="px-4 flex items-center">
                            <div class="flex-shrink-0">
                                
      <img
            src={ attributes.imageurlNVH } 
            alt={ attributes.imagealtlot } 
            class="h-10 w-10 rounded-full"
          />
                            </div>
                            <div class="ml-3">
                                <div class="text-base font-medium text-gray-800">
                                    <RichText.Content value={attributes.contentwte} /></div>
                                <div class="text-sm font-medium text-gray-500">
                                    <RichText.Content value={attributes.contentHjn} /></div>
                            </div>
                            <button type="button" class="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> <span class="sr-only"><RichText.Content value={attributes.contentYfo} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwgK }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="mt-3 px-2 space-y-1"> <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contentOxq} /></span>
 <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contentYxq} /></span>
 <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"><RichText.Content value={attributes.contenteem} /></span>

                        </div>
                    </div>
                </nav>
            </header>
            <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
                <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
                    <spanside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                        <nav class="space-y-1"> <a class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcYw }}
        >
      </svg>
      
            <span class="truncate"><RichText.Content value={attributes.contentmCn} /></span>
          

          <span class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCuA }}
        >
      </svg>
      
            <span class="truncate"><RichText.Content value={attributes.contentdRT} /></span>
          </span>

          <span class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJha }}
        >
      </svg>
      
            <span class="truncate"><RichText.Content value={attributes.contentsYA} /></span>
          </span>

          <span class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkoo }}
        >
      </svg>
      
            <span class="truncate"><RichText.Content value={attributes.contentRYn} /></span>
          </span>

          <span class="bg-gray-50 text-orange-600 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium" aria-current="page">
            
            
      <svg
         class="text-orange-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoBp }}
        >
      </svg>
      
            <span class="truncate"><RichText.Content value={attributes.contentYQC} /></span>
          </span>

          <span class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkjI }}
        >
      </svg>
      
            <span class="truncate"><RichText.Content value={attributes.contentpgQ} /></span>
          </span>
        </a></nav>
      

      
      <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
        <section aria-labelledby="payment-details-heading">
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="bg-white py-6 px-4 sm:p-6">
                <div>
                  <h2 id="payment-details-heading" class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contenthNx} /></h2>
                  <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentmMM} /></p>
                </div>

                <div class="mt-6 grid grid-cols-4 gap-6">
                  <div class="col-span-4 sm:col-span-2">
                    <label for="first-name" class="block text-sm font-medium text-gray-700"><RichText.Content value={attributes.contentSct} /></label>
                    <input type="text" name="first-name" id="first-name" autocomplete="cc-given-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"/>
                  </div>

                  <div class="col-span-4 sm:col-span-2">
                    <label for="last-name" class="block text-sm font-medium text-gray-700"><RichText.Content value={attributes.contentOhO} /></label>
                    <input type="text" name="last-name" id="last-name" autocomplete="cc-family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"/>
                  </div>

                  <div class="col-span-4 sm:col-span-2">
                    <label for="email-address" class="block text-sm font-medium text-gray-700"><RichText.Content value={attributes.contentJdf} /></label>
                    <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"/>
                  </div>

                  <div class="col-span-4 sm:col-span-1">
                    <label for="expiration-date" class="block text-sm font-medium text-gray-700"><RichText.Content value={attributes.contenteyv} /></label>
                    <input type="text" name="expiration-date" id="expiration-date" autocomplete="cc-exp" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" placeholder="MM / YY"/>
                  </div>

                  <div class="col-span-4 sm:col-span-1">
                    <label for="security-code" class="flex items-center text-sm font-medium text-gray-700">
                      <span><RichText.Content value={attributes.contentsop} /></span>
                      
                      
      <svg
         class="ml-1 flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxjo }}
        >
      </svg>
      
                    </label>
                    <input type="text" name="security-code" id="security-code" autocomplete="cc-csc" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"/>
                  </div>

                  <div class="col-span-4 sm:col-span-2">
                    <label for="country" class="block text-sm font-medium text-gray-700"><RichText.Content value={attributes.contentHje} /></label>
                    <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                      <option><RichText.Content value={attributes.contentzXj} /></option>
                      <option><RichText.Content value={attributes.contentIeN} /></option>
                      <option><RichText.Content value={attributes.contentrXu} /></option>
                    </select>
                  </div>

                  <div class="col-span-4 sm:col-span-2">
                    <label for="postal-code" class="block text-sm font-medium text-gray-700"><RichText.Content value={attributes.contentGoy} /></label>
                    <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"/>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"><RichText.Content value={attributes.contentCZm} /></button>
              </div>
            </div>
          </form>
        </section>

        
        <section aria-labelledby="plan-heading">
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h2 id="plan-heading" class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentmdd} /></h2>
                </div>

                <fieldset>
                  <legend class="sr-only"><RichText.Content value={attributes.contentTfN} /></legend>
                  <div class="relative bg-white rounded-md -space-y-px">
                    
                    <label class="rounded-tl-md rounded-tr-md relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none">
                      <div class="flex items-center text-sm">
                        <input type="radio" name="pricing-plan" value="Startup" class="h-4 w-4 text-orange-500 border-gray-300 focus:ring-gray-900" aria-labelledby="pricing-plans-0-label" aria-describedby="pricing-plans-0-description-0 pricing-plans-0-description-1"/>
                        <span id="pricing-plans-0-label" class="ml-3 font-medium text-gray-900"><RichText.Content value={attributes.contentlea} /></span>
                      </div>
                      <p id="pricing-plans-0-description-0" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                        
                        <span class="font-medium"><RichText.Content value={attributes.contentcuq} /></span>
                        
                        <span><RichText.Content value={attributes.contentoDW} /></span>
                      </p>
                      
                      <p id="pricing-plans-0-description-1" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"><RichText.Content value={attributes.contentsCK} /></p>
                    </label>

                    
                    <label class="relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none">
                      <div class="flex items-center text-sm">
                        <input type="radio" name="pricing-plan" value="Business" class="h-4 w-4 text-orange-500 border-gray-300 focus:ring-gray-900" aria-labelledby="pricing-plans-1-label" aria-describedby="pricing-plans-1-description-0 pricing-plans-1-description-1"/>
                        <span id="pricing-plans-1-label" class="ml-3 font-medium text-gray-900"><RichText.Content value={attributes.contenthWa} /></span>
                      </div>
                      <p id="pricing-plans-1-description-0" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                        
                        <span class="font-medium"><RichText.Content value={attributes.contentRWI} /></span>
                        
                        <span><RichText.Content value={attributes.contentznu} /></span>
                      </p>
                      
                      <p id="pricing-plans-1-description-1" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"><RichText.Content value={attributes.contentVDz} /></p>
                    </label>

                    
                    <label class="rounded-bl-md rounded-br-md relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none">
                      <div class="flex items-center text-sm">
                        <input type="radio" name="pricing-plan" value="Enterprise" class="h-4 w-4 text-orange-500 border-gray-300 focus:ring-gray-900" aria-labelledby="pricing-plans-2-label" aria-describedby="pricing-plans-2-description-0 pricing-plans-2-description-1"/>
                        <span id="pricing-plans-2-label" class="ml-3 font-medium text-gray-900"><RichText.Content value={attributes.contentOXw} /></span>
                      </div>
                      <p id="pricing-plans-2-description-0" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                        
                        <span class="font-medium"><RichText.Content value={attributes.contentBeS} /></span>
                        
                        <span><RichText.Content value={attributes.contentJuK} /></span>
                      </p>
                      
                      <p id="pricing-plans-2-description-1" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"><RichText.Content value={attributes.contentCzP} /></p>
                    </label>
                  </div>
                </fieldset>

                <div class="flex items-center">
                  
                  <button type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors ease-in-out duration-200" role="switch" aria-checked="true" aria-labelledby="annual-billing-label">
                    
                    <span aria-hidden="true" class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"/>
                  </button>
                  <span class="ml-3" id="annual-billing-label">
                    <span class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentylJ} /></span>
                    <span class="text-sm text-gray-500"><RichText.Content value={attributes.contentmWQ} /></span>
                  </span>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"><RichText.Content value={attributes.contentJsv} /></button>
              </div>
            </div>
          </form>
        </section>

        
        <section aria-labelledby="billing-history-heading">
          <div class="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 sm:px-6">
              <h2 id="billing-history-heading" class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentVEW} /></h2>
            </div>
            <div class="mt-6 flex flex-col">
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden border-t border-gray-200">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gray-50">
                        <tr>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><RichText.Content value={attributes.contentUkN} /></th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><RichText.Content value={attributes.contentlTe} /></th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><RichText.Content value={attributes.contentkhH} /></th>
                          
                          <th scope="col" class="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <span class="sr-only"><RichText.Content value={attributes.contentoGX} /></span>
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <time datetime="2020-01-01"><RichText.Content value={attributes.contentPbQ} /></time>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><RichText.Content value={attributes.contentAWI} /></td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><RichText.Content value={attributes.contentgjH} /></td>
                          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <span class="text-orange-600 hover:text-orange-900"><RichText.Content value={attributes.contentuzD} /></span>
                          </td>
                        </tr>

                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </spanside></div>
  </main>
</div>
</div></div>
            );
            },
        });
        