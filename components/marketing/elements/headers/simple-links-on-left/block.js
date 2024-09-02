
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-links-on-left', {
            title: 'simple links on left',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentDQg": {
    "type": "string",
    "default": "Workflow"
  },
  "contentgdl": {
    "type": "string",
    "default": "Open menu"
  },
  "contentMBi": {
    "type": "string",
    "default": "Solutions"
  },
  "contentNaf": {
    "type": "string",
    "default": "Analytics"
  },
  "contentHav": {
    "type": "string",
    "default": "Get a better understanding of where your traffic is coming from."
  },
  "contentIyK": {
    "type": "string",
    "default": "Engagement"
  },
  "contentNjr": {
    "type": "string",
    "default": "Speak directly to your customers in a more meaningful way."
  },
  "contentmON": {
    "type": "string",
    "default": "Security"
  },
  "contentAfO": {
    "type": "string",
    "default": "Your customers&#039; data will be safe and secure."
  },
  "contentwxo": {
    "type": "string",
    "default": "Integrations"
  },
  "contentFdx": {
    "type": "string",
    "default": "Connect with third-party tools that you&#039;re already using."
  },
  "contentKXA": {
    "type": "string",
    "default": "Automations"
  },
  "contentWxc": {
    "type": "string",
    "default": "Build strategic funnels that will drive your customers to convert"
  },
  "contentehH": {
    "type": "string",
    "default": "Reports"
  },
  "contentxUP": {
    "type": "string",
    "default": "Get detailed reports that will help you make more informed decisions"
  },
  "contentgyO": {
    "type": "string",
    "default": "Enterprise"
  },
  "contentxbd": {
    "type": "string",
    "default": " New "
  },
  "contentLsz": {
    "type": "string",
    "default": "Empower your entire team with even more advanced tools."
  },
  "contentLeN": {
    "type": "string",
    "default": " Pricing "
  },
  "contentmNg": {
    "type": "string",
    "default": " Docs "
  },
  "contentZfY": {
    "type": "string",
    "default": "More"
  },
  "contentiUD": {
    "type": "string",
    "default": "Help Center"
  },
  "contentIZU": {
    "type": "string",
    "default": "Get all of your questions answered in our forums or contact support."
  },
  "contentlrx": {
    "type": "string",
    "default": "Guides"
  },
  "contentVow": {
    "type": "string",
    "default": "Learn how to maximize our platform to get the most out of it."
  },
  "contentbtG": {
    "type": "string",
    "default": "Events"
  },
  "contenthBY": {
    "type": "string",
    "default": "See what meet-ups and other events we might be planning near you."
  },
  "contenttNu": {
    "type": "string",
    "default": "Security"
  },
  "contentujb": {
    "type": "string",
    "default": "Understand how we take your privacy seriously."
  },
  "contenttsA": {
    "type": "string",
    "default": " Sign in "
  },
  "contentxNK": {
    "type": "string",
    "default": " Sign up "
  },
  "contentPvl": {
    "type": "string",
    "default": "Close menu"
  },
  "contentdLf": {
    "type": "string",
    "default": "Analytics"
  },
  "contentvYv": {
    "type": "string",
    "default": "Engagement"
  },
  "contentQwr": {
    "type": "string",
    "default": "Security"
  },
  "contentSPI": {
    "type": "string",
    "default": "Integrations"
  },
  "contentaaL": {
    "type": "string",
    "default": "Automations"
  },
  "contentOMm": {
    "type": "string",
    "default": "Reports"
  },
  "contentAEG": {
    "type": "string",
    "default": " Pricing "
  },
  "contentXUk": {
    "type": "string",
    "default": " Docs "
  },
  "contentcJL": {
    "type": "string",
    "default": " Enterprise "
  },
  "contentLam": {
    "type": "string",
    "default": " Help Center "
  },
  "contentipy": {
    "type": "string",
    "default": " Guides "
  },
  "contentLJF": {
    "type": "string",
    "default": " Events "
  },
  "contentDxK": {
    "type": "string",
    "default": " Security "
  },
  "contentjaY": {
    "type": "string",
    "default": " Sign up "
  },
  "contentrIY": {
    "type": "string",
    "default": "\n            Existing customer?\n            "
  },
  "contentCLY": {
    "type": "string",
    "default": " Sign in "
  },
  "imageurlbak": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtUrq": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlUyL": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtIle": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "svgIAI": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgsaE": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svglsT": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgkpw": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122\"/>"
  },
  "svgMPL": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"/>"
  },
  "svgwJy": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
  },
  "svgbdj": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\"/>"
  },
  "svgIlW": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z\"/>"
  },
  "svgiCx": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svggFW": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgjqM": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgqDT": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122\"/>"
  },
  "svgkIV": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"/>"
  },
  "svgSkA": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
  },
  "svgxKX": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\"/>"
  },
  "svgvTF": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z\"/>"
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
            value={ attributes.svgIAI }
            onChange={ ( value ) => {
              setAttributes({ svgIAI: value });
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
            value={ attributes.svgsaE }
            onChange={ ( value ) => {
              setAttributes({ svgsaE: value });
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
            value={ attributes.svglsT }
            onChange={ ( value ) => {
              setAttributes({ svglsT: value });
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
            value={ attributes.svgkpw }
            onChange={ ( value ) => {
              setAttributes({ svgkpw: value });
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
            value={ attributes.svgMPL }
            onChange={ ( value ) => {
              setAttributes({ svgMPL: value });
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
            value={ attributes.svgwJy }
            onChange={ ( value ) => {
              setAttributes({ svgwJy: value });
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
            value={ attributes.svgbdj }
            onChange={ ( value ) => {
              setAttributes({ svgbdj: value });
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
            value={ attributes.svgIlW }
            onChange={ ( value ) => {
              setAttributes({ svgIlW: value });
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
            value={ attributes.svgiCx }
            onChange={ ( value ) => {
              setAttributes({ svgiCx: value });
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
            value={ attributes.svggFW }
            onChange={ ( value ) => {
              setAttributes({ svggFW: value });
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
            value={ attributes.svgjqM }
            onChange={ ( value ) => {
              setAttributes({ svgjqM: value });
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
            value={ attributes.svgqDT }
            onChange={ ( value ) => {
              setAttributes({ svgqDT: value });
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
            value={ attributes.svgkIV }
            onChange={ ( value ) => {
              setAttributes({ svgkIV: value });
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
            value={ attributes.svgSkA }
            onChange={ ( value ) => {
              setAttributes({ svgSkA: value });
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
            value={ attributes.svgxKX }
            onChange={ ( value ) => {
              setAttributes({ svgxKX: value });
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
            value={ attributes.svgvTF }
            onChange={ ( value ) => {
              setAttributes({ svgvTF: value });
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
        <div className="relative bg-white">
            <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
                <div> <span className="flex">
        <span className="sr-only"><RichText tagName="span" value={attributes.contentDQg} default="Workflow" onChange={ (newtext) =>  {
        setAttributes({ contentDQg: newtext });
      }}
    /></span>

                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlbak: media.url,
            imagealtUrq: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlbak } 
            alt={ attributes.imagealtUrq } 
            onClick={ open } 
            className="h-8 w-auto sm:h-10"
          /> 
        )} 
      />
                    </span>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                    <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentgdl} default="Open menu" onChange={ (newtext) =>  {
        setAttributes({ contentgdl: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIAI }}
        >
      </svg>
      
                    </button>
                </div>
                <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                    <nav className="flex space-x-10">
                        <div className="relative">
                            <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentMBi} default="Solutions" onChange={ (newtext) =>  {
        setAttributes({ contentMBi: newtext });
      }}
    /></span>

                                
      <svg
         className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsaE }}
        >
      </svg>
      
                            </button>
                            <div className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"> <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                    
                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglsT }}
        >
      </svg>
      
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentNaf} default="Analytics" onChange={ (newtext) =>  {
        setAttributes({ contentNaf: newtext });
      }}
    /></p>
                    <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentHav} default="Get a better understanding of where your traffic is coming from." onChange={ (newtext) =>  {
        setAttributes({ contentHav: newtext });
      }}
    /></p>
                  </div>
                </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                    
                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkpw }}
        >
      </svg>
      
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentIyK} default="Engagement" onChange={ (newtext) =>  {
        setAttributes({ contentIyK: newtext });
      }}
    /></p>
                    <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentNjr} default="Speak directly to your customers in a more meaningful way." onChange={ (newtext) =>  {
        setAttributes({ contentNjr: newtext });
      }}
    /></p>
                  </div>
                </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                    
                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMPL }}
        >
      </svg>
      
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentmON} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentmON: newtext });
      }}
    /></p>
                    <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentAfO} default="Your customers&#039; data will be safe and secure." onChange={ (newtext) =>  {
        setAttributes({ contentAfO: newtext });
      }}
    /></p>
                  </div>
                </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                    
                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwJy }}
        >
      </svg>
      
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentwxo} default="Integrations" onChange={ (newtext) =>  {
        setAttributes({ contentwxo: newtext });
      }}
    /></p>
                    <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentFdx} default="Connect with third-party tools that you&#039;re already using." onChange={ (newtext) =>  {
        setAttributes({ contentFdx: newtext });
      }}
    /></p>
                  </div>
                </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                    
                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbdj }}
        >
      </svg>
      
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentKXA} default="Automations" onChange={ (newtext) =>  {
        setAttributes({ contentKXA: newtext });
      }}
    /></p>
                    <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentWxc} default="Build strategic funnels that will drive your customers to convert" onChange={ (newtext) =>  {
        setAttributes({ contentWxc: newtext });
      }}
    /></p>
                  </div>
                </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                    
                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIlW }}
        >
      </svg>
      
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentehH} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentehH: newtext });
      }}
    /></p>
                    <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentxUP} default="Get detailed reports that will help you make more informed decisions" onChange={ (newtext) =>  {
        setAttributes({ contentxUP: newtext });
      }}
    /></p>
                  </div>
                </span>

                                    </div>
                                    <div className="p-5 bg-gray-50 sm:p-8"> <span className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                  <div className="flex items-center">
                    <div className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentgyO} default="Enterprise" onChange={ (newtext) =>  {
        setAttributes({ contentgyO: newtext });
      }}
    /></div>
                    <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800"><RichText tagName="span" value={attributes.contentxbd} default="New" onChange={ (newtext) =>  {
        setAttributes({ contentxbd: newtext });
      }}
    /></span>

                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentLsz} default="Empower your entire team with even more advanced tools." onChange={ (newtext) => { setAttributes({ contentLsz: newtext }); }} /></p>
                                    </span>
                                </div>
                            </div>
                        </div>
                </div> <span className="text-base font-medium text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentLeN} default="Pricing" onChange={ (newtext) =>  {
        setAttributes({ contentLeN: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentmNg} default="Docs" onChange={ (newtext) =>  {
        setAttributes({ contentmNg: newtext });
      }}
    /></span>

                <div className="relative">
                    <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentZfY} default="More" onChange={ (newtext) =>  {
        setAttributes({ contentZfY: newtext });
      }}
    /></span>

                        
      <svg
         className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiCx }}
        >
      </svg>
      
                    </button>
                    <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"> <span className="-m-3 p-3 block rounded-md hover:bg-gray-50">
                  <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentiUD} default="Help Center" onChange={ (newtext) =>  {
        setAttributes({ contentiUD: newtext });
      }}
    /></p>
                  <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentIZU} default="Get all of your questions answered in our forums or contact support." onChange={ (newtext) =>  {
        setAttributes({ contentIZU: newtext });
      }}
    /></p>
                </span>
 <span className="-m-3 p-3 block rounded-md hover:bg-gray-50">
                  <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentlrx} default="Guides" onChange={ (newtext) =>  {
        setAttributes({ contentlrx: newtext });
      }}
    /></p>
                  <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentVow} default="Learn how to maximize our platform to get the most out of it." onChange={ (newtext) =>  {
        setAttributes({ contentVow: newtext });
      }}
    /></p>
                </span>
 <span className="-m-3 p-3 block rounded-md hover:bg-gray-50">
                  <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentbtG} default="Events" onChange={ (newtext) =>  {
        setAttributes({ contentbtG: newtext });
      }}
    /></p>
                  <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contenthBY} default="See what meet-ups and other events we might be planning near you." onChange={ (newtext) =>  {
        setAttributes({ contenthBY: newtext });
      }}
    /></p>
                </span>
 <span className="-m-3 p-3 block rounded-md hover:bg-gray-50">
                  <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contenttNu} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contenttNu: newtext });
      }}
    /></p>
                  <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentujb} default="Understand how we take your privacy seriously." onChange={ (newtext) =>  {
        setAttributes({ contentujb: newtext });
      }}
    /></p>
                </span>

                            </div>
                        </div>
                    </div>
                </div>
                </nav>
                <div className="flex items-center md:ml-12"> <span className="text-base font-medium text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contenttsA} default="Sign in" onChange={ (newtext) =>  {
        setAttributes({ contenttsA: newtext });
      }}
    /></span>
 <span className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"><RichText tagName="span" value={attributes.contentxNK} default="Sign up" onChange={ (newtext) =>  {
        setAttributes({ contentxNK: newtext });
      }}
    /></span>

                </div>
            </div>
        </div>
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                        <div>
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlUyL: media.url,
            imagealtIle: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlUyL } 
            alt={ attributes.imagealtIle } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <div className="-mr-2">
                            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentPvl} default="Close menu" onChange={ (newtext) =>  {
        setAttributes({ contentPvl: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggFW }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <nav className="grid gap-6"> <span className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjqM }}
        >
      </svg>
      
              </div>
              <div className="ml-4 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentdLf} default="Analytics" onChange={ (newtext) =>  {
        setAttributes({ contentdLf: newtext });
      }}
    /></div>
            </span>
 <span className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqDT }}
        >
      </svg>
      
              </div>
              <div className="ml-4 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentvYv} default="Engagement" onChange={ (newtext) =>  {
        setAttributes({ contentvYv: newtext });
      }}
    /></div>
            </span>
 <span className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkIV }}
        >
      </svg>
      
              </div>
              <div className="ml-4 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentQwr} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentQwr: newtext });
      }}
    /></div>
            </span>
 <span className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSkA }}
        >
      </svg>
      
              </div>
              <div className="ml-4 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentSPI} default="Integrations" onChange={ (newtext) =>  {
        setAttributes({ contentSPI: newtext });
      }}
    /></div>
            </span>
 <span className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxKX }}
        >
      </svg>
      
              </div>
              <div className="ml-4 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentaaL} default="Automations" onChange={ (newtext) =>  {
        setAttributes({ contentaaL: newtext });
      }}
    /></div>
            </span>
 <span className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvTF }}
        >
      </svg>
      
              </div>
              <div className="ml-4 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentOMm} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentOMm: newtext });
      }}
    /></div>
            </span>

                        </nav>
                    </div>
                </div>
                <div className="py-6 px-5">
                    <div className="grid grid-cols-2 gap-4"> <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentAEG} default="Pricing" onChange={ (newtext) =>  {
        setAttributes({ contentAEG: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentXUk} default="Docs" onChange={ (newtext) =>  {
        setAttributes({ contentXUk: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentcJL} default="Enterprise" onChange={ (newtext) =>  {
        setAttributes({ contentcJL: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentLam} default="Help Center" onChange={ (newtext) =>  {
        setAttributes({ contentLam: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentipy} default="Guides" onChange={ (newtext) =>  {
        setAttributes({ contentipy: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentLJF} default="Events" onChange={ (newtext) =>  {
        setAttributes({ contentLJF: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentDxK} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentDxK: newtext });
      }}
    /></span>

                    </div>
                    <div className="mt-6"> <span className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"><RichText tagName="span" value={attributes.contentjaY} default="Sign up" onChange={ (newtext) =>  {
        setAttributes({ contentjaY: newtext });
      }}
    /></span>

                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                            <RichText tagName="span" value={attributes.contentrIY} default="Existing customer?" onChange={ (newtext) => { setAttributes({ contentrIY: newtext }); }} /><span className="text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentCLY} default="Sign in" onChange={ (newtext) =>  {
        setAttributes({ contentCLY: newtext });
      }}
    /></span>

                        </p>
                    </div>
                </div>
            </div>
        </div>
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
        <div class="relative bg-white">
            <div class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
                <div> <span class="flex">
        <span class="sr-only"><RichText.Content value={attributes.contentDQg} /></span>

                    
      <img
            src={ attributes.imageurlbak } 
            alt={ attributes.imagealtUrq } 
            class="h-8 w-auto sm:h-10"
          />
                    </span>
                </div>
                <div class="-mr-2 -my-2 md:hidden">
                    <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentgdl} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIAI }}
        >
      </svg>
      
                    </button>
                </div>
                <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
                    <nav class="flex space-x-10">
                        <div class="relative">
                            <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText.Content value={attributes.contentMBi} /></span>

                                
      <svg
         class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsaE }}
        >
      </svg>
      
                            </button>
                            <div class="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"> <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                    
                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglsT }}
        >
      </svg>
      
                  </div>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentNaf} /></p>
                    <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentHav} /></p>
                  </div>
                </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                    
                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkpw }}
        >
      </svg>
      
                  </div>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentIyK} /></p>
                    <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentNjr} /></p>
                  </div>
                </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                    
                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMPL }}
        >
      </svg>
      
                  </div>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentmON} /></p>
                    <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentAfO} /></p>
                  </div>
                </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                    
                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwJy }}
        >
      </svg>
      
                  </div>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentwxo} /></p>
                    <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentFdx} /></p>
                  </div>
                </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                    
                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbdj }}
        >
      </svg>
      
                  </div>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentKXA} /></p>
                    <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentWxc} /></p>
                  </div>
                </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                    
                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIlW }}
        >
      </svg>
      
                  </div>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentehH} /></p>
                    <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentxUP} /></p>
                  </div>
                </span>

                                    </div>
                                    <div class="p-5 bg-gray-50 sm:p-8"> <span class="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                  <div class="flex items-center">
                    <div class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentgyO} /></div>
                    <span class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800"><RichText.Content value={attributes.contentxbd} /></span>

                                    </div>
                                    <p class="mt-1 text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentLsz} /></p>
                                    </span>
                                </div>
                            </div>
                        </div>
                </div> <span class="text-base font-medium text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentLeN} /></span>
 <span class="text-base font-medium text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentmNg} /></span>

                <div class="relative">
                    <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText.Content value={attributes.contentZfY} /></span>

                        
      <svg
         class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiCx }}
        >
      </svg>
      
                    </button>
                    <div class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"> <span class="-m-3 p-3 block rounded-md hover:bg-gray-50">
                  <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentiUD} /></p>
                  <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentIZU} /></p>
                </span>
 <span class="-m-3 p-3 block rounded-md hover:bg-gray-50">
                  <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentlrx} /></p>
                  <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentVow} /></p>
                </span>
 <span class="-m-3 p-3 block rounded-md hover:bg-gray-50">
                  <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentbtG} /></p>
                  <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contenthBY} /></p>
                </span>
 <span class="-m-3 p-3 block rounded-md hover:bg-gray-50">
                  <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contenttNu} /></p>
                  <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentujb} /></p>
                </span>

                            </div>
                        </div>
                    </div>
                </div>
                </nav>
                <div class="flex items-center md:ml-12"> <span class="text-base font-medium text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contenttsA} /></span>
 <span class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"><RichText.Content value={attributes.contentxNK} /></span>

                </div>
            </div>
        </div>
        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div class="pt-5 pb-6 px-5">
                    <div class="flex items-center justify-between">
                        <div>
                            
      <img
            src={ attributes.imageurlUyL } 
            alt={ attributes.imagealtIle } 
            class="h-8 w-auto"
          />
                        </div>
                        <div class="-mr-2">
                            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentPvl} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggFW }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                    <div class="mt-6">
                        <nav class="grid gap-6"> <span class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjqM }}
        >
      </svg>
      
              </div>
              <div class="ml-4 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentdLf} /></div>
            </span>
 <span class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqDT }}
        >
      </svg>
      
              </div>
              <div class="ml-4 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentvYv} /></div>
            </span>
 <span class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkIV }}
        >
      </svg>
      
              </div>
              <div class="ml-4 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentQwr} /></div>
            </span>
 <span class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSkA }}
        >
      </svg>
      
              </div>
              <div class="ml-4 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentSPI} /></div>
            </span>
 <span class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxKX }}
        >
      </svg>
      
              </div>
              <div class="ml-4 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentaaL} /></div>
            </span>
 <span class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvTF }}
        >
      </svg>
      
              </div>
              <div class="ml-4 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentOMm} /></div>
            </span>

                        </nav>
                    </div>
                </div>
                <div class="py-6 px-5">
                    <div class="grid grid-cols-2 gap-4"> <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentAEG} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentXUk} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentcJL} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentLam} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentipy} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentLJF} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentDxK} /></span>

                    </div>
                    <div class="mt-6"> <span class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"><RichText.Content value={attributes.contentjaY} /></span>

                        <p class="mt-6 text-center text-base font-medium text-gray-500">
                            <RichText.Content value={attributes.contentrIY} /><span class="text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentCLY} /></span>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
            );
            },
        });
        