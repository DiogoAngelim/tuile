
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-links-centered', {
            title: 'simple links centered',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentqhJ": {
    "type": "string",
    "default": "Workflow"
  },
  "contentSiZ": {
    "type": "string",
    "default": "Open menu"
  },
  "contentwuT": {
    "type": "string",
    "default": "Solutions"
  },
  "contenthyj": {
    "type": "string",
    "default": "Analytics"
  },
  "contentQVx": {
    "type": "string",
    "default": "Get a better understanding of where your traffic is coming from."
  },
  "contentRuj": {
    "type": "string",
    "default": "Engagement"
  },
  "contentGAY": {
    "type": "string",
    "default": "Speak directly to your customers in a more meaningful way."
  },
  "contentykp": {
    "type": "string",
    "default": "Security"
  },
  "contentYfS": {
    "type": "string",
    "default": "Your customers&#039; data will be safe and secure."
  },
  "contentJMv": {
    "type": "string",
    "default": "Integrations"
  },
  "contentwCW": {
    "type": "string",
    "default": "Connect with third-party tools that you&#039;re already using."
  },
  "contentKRJ": {
    "type": "string",
    "default": "Automations"
  },
  "contentHnT": {
    "type": "string",
    "default": "Build strategic funnels that will drive your customers to convert"
  },
  "contentOUS": {
    "type": "string",
    "default": "Reports"
  },
  "contentjAL": {
    "type": "string",
    "default": "Get detailed reports that will help you make more informed decisions"
  },
  "contentyZw": {
    "type": "string",
    "default": "Enterprise"
  },
  "contentcaY": {
    "type": "string",
    "default": " New "
  },
  "contentxMI": {
    "type": "string",
    "default": "Empower your entire team with even more advanced tools."
  },
  "contentbTT": {
    "type": "string",
    "default": " Pricing "
  },
  "contentTsh": {
    "type": "string",
    "default": " Docs "
  },
  "contentGyR": {
    "type": "string",
    "default": "More"
  },
  "contentuDf": {
    "type": "string",
    "default": "Help Center"
  },
  "contentqUD": {
    "type": "string",
    "default": "Get all of your questions answered in our forums or contact support."
  },
  "contentZCf": {
    "type": "string",
    "default": "Guides"
  },
  "contentkgQ": {
    "type": "string",
    "default": "Learn how to maximize our platform to get the most out of it."
  },
  "contentVPe": {
    "type": "string",
    "default": "Events"
  },
  "contentmAf": {
    "type": "string",
    "default": "See what meet-ups and other events we might be planning near you."
  },
  "contentFgW": {
    "type": "string",
    "default": "Security"
  },
  "contenthcU": {
    "type": "string",
    "default": "Understand how we take your privacy seriously."
  },
  "contentDFs": {
    "type": "string",
    "default": " Sign in "
  },
  "contentRuy": {
    "type": "string",
    "default": " Sign up "
  },
  "contentENV": {
    "type": "string",
    "default": "Close menu"
  },
  "contentugF": {
    "type": "string",
    "default": "Analytics"
  },
  "contentpUu": {
    "type": "string",
    "default": "Engagement"
  },
  "contentzZC": {
    "type": "string",
    "default": "Security"
  },
  "contentKps": {
    "type": "string",
    "default": "Integrations"
  },
  "contentyKO": {
    "type": "string",
    "default": "Automations"
  },
  "contentWAR": {
    "type": "string",
    "default": "Reports"
  },
  "contentiHb": {
    "type": "string",
    "default": " Pricing "
  },
  "contentusF": {
    "type": "string",
    "default": " Docs "
  },
  "contentwCF": {
    "type": "string",
    "default": " Enterprise "
  },
  "contentHEL": {
    "type": "string",
    "default": " Help Center "
  },
  "contentfjs": {
    "type": "string",
    "default": " Guides "
  },
  "contentdxt": {
    "type": "string",
    "default": " Events "
  },
  "contentOAj": {
    "type": "string",
    "default": " Security "
  },
  "contentQRw": {
    "type": "string",
    "default": " Sign up "
  },
  "contentkWX": {
    "type": "string",
    "default": "\n            Existing customer?\n            "
  },
  "contentHuP": {
    "type": "string",
    "default": " Sign in "
  },
  "imageurlHyn": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtSRm": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlgSJ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtRXa": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "svgJvj": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svguVe": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgzjB": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgohM": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122\"/>"
  },
  "svgDPL": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"/>"
  },
  "svghiC": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
  },
  "svgVao": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\"/>"
  },
  "svgqum": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z\"/>"
  },
  "svgRFO": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgEci": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgdkK": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgPUH": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122\"/>"
  },
  "svgUVc": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"/>"
  },
  "svgPZz": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
  },
  "svgwrq": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\"/>"
  },
  "svgxlA": {
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
            value={ attributes.svgJvj }
            onChange={ ( value ) => {
              setAttributes({ svgJvj: value });
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
            value={ attributes.svguVe }
            onChange={ ( value ) => {
              setAttributes({ svguVe: value });
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
            value={ attributes.svgzjB }
            onChange={ ( value ) => {
              setAttributes({ svgzjB: value });
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
            value={ attributes.svgohM }
            onChange={ ( value ) => {
              setAttributes({ svgohM: value });
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
            value={ attributes.svgDPL }
            onChange={ ( value ) => {
              setAttributes({ svgDPL: value });
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
            value={ attributes.svghiC }
            onChange={ ( value ) => {
              setAttributes({ svghiC: value });
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
            value={ attributes.svgVao }
            onChange={ ( value ) => {
              setAttributes({ svgVao: value });
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
            value={ attributes.svgqum }
            onChange={ ( value ) => {
              setAttributes({ svgqum: value });
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
            value={ attributes.svgRFO }
            onChange={ ( value ) => {
              setAttributes({ svgRFO: value });
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
            value={ attributes.svgEci }
            onChange={ ( value ) => {
              setAttributes({ svgEci: value });
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
            value={ attributes.svgdkK }
            onChange={ ( value ) => {
              setAttributes({ svgdkK: value });
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
            value={ attributes.svgPUH }
            onChange={ ( value ) => {
              setAttributes({ svgPUH: value });
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
            value={ attributes.svgUVc }
            onChange={ ( value ) => {
              setAttributes({ svgUVc: value });
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
            value={ attributes.svgPZz }
            onChange={ ( value ) => {
              setAttributes({ svgPZz: value });
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
            value={ attributes.svgwrq }
            onChange={ ( value ) => {
              setAttributes({ svgwrq: value });
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
            value={ attributes.svgxlA }
            onChange={ ( value ) => {
              setAttributes({ svgxlA: value });
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
                <div className="flex justify-start lg:w-0 lg:flex-1"> <span>
        <span className="sr-only"><RichText tagName="span" value={attributes.contentqhJ} default="Workflow" onChange={ (newtext) =>  {
        setAttributes({ contentqhJ: newtext });
      }}
    /></span>

                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlHyn: media.url,
            imagealtSRm: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlHyn } 
            alt={ attributes.imagealtSRm } 
            onClick={ open } 
            className="h-8 w-auto sm:h-10"
          /> 
        )} 
      />
                    </span>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                    <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentSiZ} default="Open menu" onChange={ (newtext) =>  {
        setAttributes({ contentSiZ: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJvj }}
        >
      </svg>
      
                    </button>
                </div>
                <nav className="hidden md:flex space-x-10">
                    <div className="relative">
                        <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentwuT} default="Solutions" onChange={ (newtext) =>  {
        setAttributes({ contentwuT: newtext });
      }}
    /></span>

                            
      <svg
         className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguVe }}
        >
      </svg>
      
                        </button>
                        <div className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"> <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzjB }}
        >
      </svg>
      
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contenthyj} default="Analytics" onChange={ (newtext) =>  {
        setAttributes({ contenthyj: newtext });
      }}
    /></p>
                  <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentQVx} default="Get a better understanding of where your traffic is coming from." onChange={ (newtext) =>  {
        setAttributes({ contentQVx: newtext });
      }}
    /></p>
                </div>
              </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgohM }}
        >
      </svg>
      
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentRuj} default="Engagement" onChange={ (newtext) =>  {
        setAttributes({ contentRuj: newtext });
      }}
    /></p>
                  <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentGAY} default="Speak directly to your customers in a more meaningful way." onChange={ (newtext) =>  {
        setAttributes({ contentGAY: newtext });
      }}
    /></p>
                </div>
              </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDPL }}
        >
      </svg>
      
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentykp} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentykp: newtext });
      }}
    /></p>
                  <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentYfS} default="Your customers&#039; data will be safe and secure." onChange={ (newtext) =>  {
        setAttributes({ contentYfS: newtext });
      }}
    /></p>
                </div>
              </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghiC }}
        >
      </svg>
      
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentJMv} default="Integrations" onChange={ (newtext) =>  {
        setAttributes({ contentJMv: newtext });
      }}
    /></p>
                  <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentwCW} default="Connect with third-party tools that you&#039;re already using." onChange={ (newtext) =>  {
        setAttributes({ contentwCW: newtext });
      }}
    /></p>
                </div>
              </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVao }}
        >
      </svg>
      
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentKRJ} default="Automations" onChange={ (newtext) =>  {
        setAttributes({ contentKRJ: newtext });
      }}
    /></p>
                  <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentHnT} default="Build strategic funnels that will drive your customers to convert" onChange={ (newtext) =>  {
        setAttributes({ contentHnT: newtext });
      }}
    /></p>
                </div>
              </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqum }}
        >
      </svg>
      
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentOUS} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentOUS: newtext });
      }}
    /></p>
                  <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentjAL} default="Get detailed reports that will help you make more informed decisions" onChange={ (newtext) =>  {
        setAttributes({ contentjAL: newtext });
      }}
    /></p>
                </div>
              </span>

                                </div>
                                <div className="p-5 bg-gray-50 sm:p-8"> <span className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                <div className="flex items-center">
                  <div className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentyZw} default="Enterprise" onChange={ (newtext) =>  {
        setAttributes({ contentyZw: newtext });
      }}
    /></div>
                  <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800"><RichText tagName="span" value={attributes.contentcaY} default="New" onChange={ (newtext) =>  {
        setAttributes({ contentcaY: newtext });
      }}
    /></span>

                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                    <RichText tagName="span" value={attributes.contentxMI} default="Empower your entire team with even more advanced tools." onChange={ (newtext) => { setAttributes({ contentxMI: newtext }); }} /></p>
                                </span>
                            </div>
                        </div>
                    </div>
            </div> <span className="text-base font-medium text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentbTT} default="Pricing" onChange={ (newtext) =>  {
        setAttributes({ contentbTT: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentTsh} default="Docs" onChange={ (newtext) =>  {
        setAttributes({ contentTsh: newtext });
      }}
    /></span>

            <div className="relative">
                <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentGyR} default="More" onChange={ (newtext) =>  {
        setAttributes({ contentGyR: newtext });
      }}
    /></span>

                    
      <svg
         className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRFO }}
        >
      </svg>
      
                </button>
                <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"> <span className="-m-3 p-3 block rounded-md hover:bg-gray-50">
                <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentuDf} default="Help Center" onChange={ (newtext) =>  {
        setAttributes({ contentuDf: newtext });
      }}
    /></p>
                <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentqUD} default="Get all of your questions answered in our forums or contact support." onChange={ (newtext) =>  {
        setAttributes({ contentqUD: newtext });
      }}
    /></p>
              </span>
 <span className="-m-3 p-3 block rounded-md hover:bg-gray-50">
                <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentZCf} default="Guides" onChange={ (newtext) =>  {
        setAttributes({ contentZCf: newtext });
      }}
    /></p>
                <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentkgQ} default="Learn how to maximize our platform to get the most out of it." onChange={ (newtext) =>  {
        setAttributes({ contentkgQ: newtext });
      }}
    /></p>
              </span>
 <span className="-m-3 p-3 block rounded-md hover:bg-gray-50">
                <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentVPe} default="Events" onChange={ (newtext) =>  {
        setAttributes({ contentVPe: newtext });
      }}
    /></p>
                <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentmAf} default="See what meet-ups and other events we might be planning near you." onChange={ (newtext) =>  {
        setAttributes({ contentmAf: newtext });
      }}
    /></p>
              </span>
 <span className="-m-3 p-3 block rounded-md hover:bg-gray-50">
                <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentFgW} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentFgW: newtext });
      }}
    /></p>
                <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contenthcU} default="Understand how we take your privacy seriously." onChange={ (newtext) =>  {
        setAttributes({ contenthcU: newtext });
      }}
    /></p>
              </span>

                        </div>
                    </div>
                </div>
            </div>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"> <span className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentDFs} default="Sign in" onChange={ (newtext) =>  {
        setAttributes({ contentDFs: newtext });
      }}
    /></span>
 <span className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"><RichText tagName="span" value={attributes.contentRuy} default="Sign up" onChange={ (newtext) =>  {
        setAttributes({ contentRuy: newtext });
      }}
    /></span>

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
            imageurlgSJ: media.url,
            imagealtRXa: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlgSJ } 
            alt={ attributes.imagealtRXa } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <div className="-mr-2">
                            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentENV} default="Close menu" onChange={ (newtext) =>  {
        setAttributes({ contentENV: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEci }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <nav className="grid grid-cols-1 gap-7"> <span className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdkK }}
        >
      </svg>
      
              </div>
              <div className="ml-4 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentugF} default="Analytics" onChange={ (newtext) =>  {
        setAttributes({ contentugF: newtext });
      }}
    /></div>
            </span>
 <span className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPUH }}
        >
      </svg>
      
              </div>
              <div className="ml-4 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentpUu} default="Engagement" onChange={ (newtext) =>  {
        setAttributes({ contentpUu: newtext });
      }}
    /></div>
            </span>
 <span className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUVc }}
        >
      </svg>
      
              </div>
              <div className="ml-4 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentzZC} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentzZC: newtext });
      }}
    /></div>
            </span>
 <span className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPZz }}
        >
      </svg>
      
              </div>
              <div className="ml-4 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentKps} default="Integrations" onChange={ (newtext) =>  {
        setAttributes({ contentKps: newtext });
      }}
    /></div>
            </span>
 <span className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwrq }}
        >
      </svg>
      
              </div>
              <div className="ml-4 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentyKO} default="Automations" onChange={ (newtext) =>  {
        setAttributes({ contentyKO: newtext });
      }}
    /></div>
            </span>
 <span className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxlA }}
        >
      </svg>
      
              </div>
              <div className="ml-4 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentWAR} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentWAR: newtext });
      }}
    /></div>
            </span>

                        </nav>
                    </div>
                </div>
                <div className="py-6 px-5">
                    <div className="grid grid-cols-2 gap-4"> <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentiHb} default="Pricing" onChange={ (newtext) =>  {
        setAttributes({ contentiHb: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentusF} default="Docs" onChange={ (newtext) =>  {
        setAttributes({ contentusF: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentwCF} default="Enterprise" onChange={ (newtext) =>  {
        setAttributes({ contentwCF: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentHEL} default="Help Center" onChange={ (newtext) =>  {
        setAttributes({ contentHEL: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentfjs} default="Guides" onChange={ (newtext) =>  {
        setAttributes({ contentfjs: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentdxt} default="Events" onChange={ (newtext) =>  {
        setAttributes({ contentdxt: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentOAj} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentOAj: newtext });
      }}
    /></span>

                    </div>
                    <div className="mt-6"> <span className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"><RichText tagName="span" value={attributes.contentQRw} default="Sign up" onChange={ (newtext) =>  {
        setAttributes({ contentQRw: newtext });
      }}
    /></span>

                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                            <RichText tagName="span" value={attributes.contentkWX} default="Existing customer?" onChange={ (newtext) => { setAttributes({ contentkWX: newtext }); }} /><span className="text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentHuP} default="Sign in" onChange={ (newtext) =>  {
        setAttributes({ contentHuP: newtext });
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
                <div class="flex justify-start lg:w-0 lg:flex-1"> <span>
        <span class="sr-only"><RichText.Content value={attributes.contentqhJ} /></span>

                    
      <img
            src={ attributes.imageurlHyn } 
            alt={ attributes.imagealtSRm } 
            class="h-8 w-auto sm:h-10"
          />
                    </span>
                </div>
                <div class="-mr-2 -my-2 md:hidden">
                    <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentSiZ} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJvj }}
        >
      </svg>
      
                    </button>
                </div>
                <nav class="hidden md:flex space-x-10">
                    <div class="relative">
                        <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText.Content value={attributes.contentwuT} /></span>

                            
      <svg
         class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguVe }}
        >
      </svg>
      
                        </button>
                        <div class="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"> <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzjB }}
        >
      </svg>
      
                </div>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contenthyj} /></p>
                  <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentQVx} /></p>
                </div>
              </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgohM }}
        >
      </svg>
      
                </div>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentRuj} /></p>
                  <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentGAY} /></p>
                </div>
              </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDPL }}
        >
      </svg>
      
                </div>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentykp} /></p>
                  <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentYfS} /></p>
                </div>
              </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghiC }}
        >
      </svg>
      
                </div>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentJMv} /></p>
                  <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentwCW} /></p>
                </div>
              </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVao }}
        >
      </svg>
      
                </div>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentKRJ} /></p>
                  <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentHnT} /></p>
                </div>
              </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqum }}
        >
      </svg>
      
                </div>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentOUS} /></p>
                  <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentjAL} /></p>
                </div>
              </span>

                                </div>
                                <div class="p-5 bg-gray-50 sm:p-8"> <span class="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                <div class="flex items-center">
                  <div class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentyZw} /></div>
                  <span class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800"><RichText.Content value={attributes.contentcaY} /></span>

                                </div>
                                <p class="mt-1 text-sm text-gray-500">
                                    <RichText.Content value={attributes.contentxMI} /></p>
                                </span>
                            </div>
                        </div>
                    </div>
            </div> <span class="text-base font-medium text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentbTT} /></span>
 <span class="text-base font-medium text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentTsh} /></span>

            <div class="relative">
                <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText.Content value={attributes.contentGyR} /></span>

                    
      <svg
         class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRFO }}
        >
      </svg>
      
                </button>
                <div class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"> <span class="-m-3 p-3 block rounded-md hover:bg-gray-50">
                <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentuDf} /></p>
                <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentqUD} /></p>
              </span>
 <span class="-m-3 p-3 block rounded-md hover:bg-gray-50">
                <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentZCf} /></p>
                <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentkgQ} /></p>
              </span>
 <span class="-m-3 p-3 block rounded-md hover:bg-gray-50">
                <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentVPe} /></p>
                <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentmAf} /></p>
              </span>
 <span class="-m-3 p-3 block rounded-md hover:bg-gray-50">
                <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentFgW} /></p>
                <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contenthcU} /></p>
              </span>

                        </div>
                    </div>
                </div>
            </div>
            </nav>
            <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0"> <span class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentDFs} /></span>
 <span class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"><RichText.Content value={attributes.contentRuy} /></span>

            </div>
        </div>
        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div class="pt-5 pb-6 px-5">
                    <div class="flex items-center justify-between">
                        <div>
                            
      <img
            src={ attributes.imageurlgSJ } 
            alt={ attributes.imagealtRXa } 
            class="h-8 w-auto"
          />
                        </div>
                        <div class="-mr-2">
                            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentENV} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEci }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                    <div class="mt-6">
                        <nav class="grid grid-cols-1 gap-7"> <span class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdkK }}
        >
      </svg>
      
              </div>
              <div class="ml-4 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentugF} /></div>
            </span>
 <span class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPUH }}
        >
      </svg>
      
              </div>
              <div class="ml-4 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentpUu} /></div>
            </span>
 <span class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUVc }}
        >
      </svg>
      
              </div>
              <div class="ml-4 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentzZC} /></div>
            </span>
 <span class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPZz }}
        >
      </svg>
      
              </div>
              <div class="ml-4 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentKps} /></div>
            </span>
 <span class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwrq }}
        >
      </svg>
      
              </div>
              <div class="ml-4 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentyKO} /></div>
            </span>
 <span class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
              <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                
                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxlA }}
        >
      </svg>
      
              </div>
              <div class="ml-4 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentWAR} /></div>
            </span>

                        </nav>
                    </div>
                </div>
                <div class="py-6 px-5">
                    <div class="grid grid-cols-2 gap-4"> <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentiHb} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentusF} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentwCF} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentHEL} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentfjs} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentdxt} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentOAj} /></span>

                    </div>
                    <div class="mt-6"> <span class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"><RichText.Content value={attributes.contentQRw} /></span>

                        <p class="mt-6 text-center text-base font-medium text-gray-500">
                            <RichText.Content value={attributes.contentkWX} /><span class="text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentHuP} /></span>

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
        