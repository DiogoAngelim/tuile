
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/centered-with-bottom-border', {
            title: 'centered with bottom border',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentimG": {
    "type": "string",
    "default": "Workflow"
  },
  "contentsbO": {
    "type": "string",
    "default": "Open menu"
  },
  "contentgNR": {
    "type": "string",
    "default": "Solutions"
  },
  "contentVYS": {
    "type": "string",
    "default": "Analytics"
  },
  "contentqOh": {
    "type": "string",
    "default": "Get a better understanding of where your traffic is coming from."
  },
  "contentqQG": {
    "type": "string",
    "default": "Engagement"
  },
  "contentxiE": {
    "type": "string",
    "default": "Speak directly to your customers in a more meaningful way."
  },
  "contentGqd": {
    "type": "string",
    "default": "Security"
  },
  "contentfae": {
    "type": "string",
    "default": "Your customers&#039; data will be safe and secure."
  },
  "contentSOp": {
    "type": "string",
    "default": "Integrations"
  },
  "contenttBe": {
    "type": "string",
    "default": "Connect with third-party tools that you&#039;re already using."
  },
  "contentuzp": {
    "type": "string",
    "default": "Automations"
  },
  "contentaWA": {
    "type": "string",
    "default": "Build strategic funnels that will drive your customers to convert"
  },
  "contentdhc": {
    "type": "string",
    "default": "Watch Demo"
  },
  "contentNAd": {
    "type": "string",
    "default": "Contact Sales"
  },
  "contentPUJ": {
    "type": "string",
    "default": " Pricing "
  },
  "contentXgX": {
    "type": "string",
    "default": " Docs "
  },
  "contentvGN": {
    "type": "string",
    "default": "More"
  },
  "contentbMl": {
    "type": "string",
    "default": "Help Center"
  },
  "contentSbS": {
    "type": "string",
    "default": "Get all of your questions answered in our forums or contact support."
  },
  "contentAMV": {
    "type": "string",
    "default": "Guides"
  },
  "contentXlD": {
    "type": "string",
    "default": "Learn how to maximize our platform to get the most out of it."
  },
  "contentony": {
    "type": "string",
    "default": "Events"
  },
  "contentuDR": {
    "type": "string",
    "default": "See what meet-ups and other events we might be planning near you."
  },
  "contentsoO": {
    "type": "string",
    "default": "Security"
  },
  "contentXCO": {
    "type": "string",
    "default": "Understand how we take your privacy seriously."
  },
  "contentrHO": {
    "type": "string",
    "default": "Recent Posts"
  },
  "contentiRC": {
    "type": "string",
    "default": " Boost your conversion rate "
  },
  "contentpVu": {
    "type": "string",
    "default": " How to use search engine optimization to drive traffic to your site "
  },
  "contentqec": {
    "type": "string",
    "default": " Improve your customer experience "
  },
  "contentWZv": {
    "type": "string",
    "default": " View all posts "
  },
  "contentOUu": {
    "type": "string",
    "default": "&rarr;"
  },
  "contentUHY": {
    "type": "string",
    "default": " Sign in "
  },
  "contentjYf": {
    "type": "string",
    "default": " Sign up "
  },
  "contentASA": {
    "type": "string",
    "default": "Close menu"
  },
  "contentVhE": {
    "type": "string",
    "default": " Analytics "
  },
  "contentfUc": {
    "type": "string",
    "default": " Engagement "
  },
  "contentDJc": {
    "type": "string",
    "default": " Security "
  },
  "contentNcT": {
    "type": "string",
    "default": " Integrations "
  },
  "contentZmU": {
    "type": "string",
    "default": " Automations "
  },
  "contentsnr": {
    "type": "string",
    "default": " Pricing "
  },
  "contentuoY": {
    "type": "string",
    "default": " Docs "
  },
  "contentZll": {
    "type": "string",
    "default": " Help Center "
  },
  "contentqSd": {
    "type": "string",
    "default": " Guides "
  },
  "contentKIt": {
    "type": "string",
    "default": " Events "
  },
  "contentwhb": {
    "type": "string",
    "default": " Security "
  },
  "contenttqI": {
    "type": "string",
    "default": " Sign up "
  },
  "contentGFM": {
    "type": "string",
    "default": "\n            Existing customer?\n            "
  },
  "contentFcV": {
    "type": "string",
    "default": " Sign in "
  },
  "imageurlcxg": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtnFT": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlAZY": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtDuB": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "svgZCG": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgbQd": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgpTt": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgKnI": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122\"/>"
  },
  "svgxGK": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"/>"
  },
  "svgsYm": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
  },
  "svghIK": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\"/>"
  },
  "svgMyz": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z\"/>\n                      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgbND": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\"/>"
  },
  "svgxjT": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgPCc": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svguTQ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgFoo": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgkfO": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"/>"
  },
  "svgUKP": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgaGA": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgSNu": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122\"/>"
  },
  "svgFAH": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"/>"
  },
  "svgdXt": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
  },
  "svgRHw": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\"/>"
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
            value={ attributes.svgdXt }
            onChange={ ( value ) => {
              setAttributes({ svgdXt: value });
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
            value={ attributes.svgZCG }
            onChange={ ( value ) => {
              setAttributes({ svgZCG: value });
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
            value={ attributes.svgbQd }
            onChange={ ( value ) => {
              setAttributes({ svgbQd: value });
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
            value={ attributes.svgpTt }
            onChange={ ( value ) => {
              setAttributes({ svgpTt: value });
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
            value={ attributes.svgKnI }
            onChange={ ( value ) => {
              setAttributes({ svgKnI: value });
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
            value={ attributes.svgxGK }
            onChange={ ( value ) => {
              setAttributes({ svgxGK: value });
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
            value={ attributes.svgsYm }
            onChange={ ( value ) => {
              setAttributes({ svgsYm: value });
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
            value={ attributes.svghIK }
            onChange={ ( value ) => {
              setAttributes({ svghIK: value });
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
            value={ attributes.svgMyz }
            onChange={ ( value ) => {
              setAttributes({ svgMyz: value });
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
            value={ attributes.svgbND }
            onChange={ ( value ) => {
              setAttributes({ svgbND: value });
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
            value={ attributes.svgxjT }
            onChange={ ( value ) => {
              setAttributes({ svgxjT: value });
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
            value={ attributes.svgPCc }
            onChange={ ( value ) => {
              setAttributes({ svgPCc: value });
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
            value={ attributes.svguTQ }
            onChange={ ( value ) => {
              setAttributes({ svguTQ: value });
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
            value={ attributes.svgFoo }
            onChange={ ( value ) => {
              setAttributes({ svgFoo: value });
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
            value={ attributes.svgkfO }
            onChange={ ( value ) => {
              setAttributes({ svgkfO: value });
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
            value={ attributes.svgUKP }
            onChange={ ( value ) => {
              setAttributes({ svgUKP: value });
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
            value={ attributes.svgaGA }
            onChange={ ( value ) => {
              setAttributes({ svgaGA: value });
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
            value={ attributes.svgSNu }
            onChange={ ( value ) => {
              setAttributes({ svgSNu: value });
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
            value={ attributes.svgFAH }
            onChange={ ( value ) => {
              setAttributes({ svgFAH: value });
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
            value={ attributes.svgdXt }
            onChange={ ( value ) => {
              setAttributes({ svgdXt: value });
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
            value={ attributes.svgRHw }
            onChange={ ( value ) => {
              setAttributes({ svgRHw: value });
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1"> <span>
          <span className="sr-only"><RichText tagName="span" value={attributes.contentimG} default="Workflow" onChange={ (newtext) =>  {
        setAttributes({ contentimG: newtext });
      }}
    /></span>

                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlcxg: media.url,
            imagealtnFT: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlcxg } 
            alt={ attributes.imagealtnFT } 
            onClick={ open } 
            className="h-8 w-auto sm:h-10"
          /> 
        )} 
      />
                        </span>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentsbO} default="Open menu" onChange={ (newtext) =>  {
        setAttributes({ contentsbO: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZCG }}
        >
      </svg>
      
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        <div className="relative">
                            <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentgNR} default="Solutions" onChange={ (newtext) =>  {
        setAttributes({ contentgNR: newtext });
      }}
    /></span>

                                
      <svg
         className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbQd }}
        >
      </svg>
      
                            </button>
                            <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"> <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpTt }}
        >
      </svg>
      
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentVYS} default="Analytics" onChange={ (newtext) =>  {
        setAttributes({ contentVYS: newtext });
      }}
    /></p>
                    <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentqOh} default="Get a better understanding of where your traffic is coming from." onChange={ (newtext) =>  {
        setAttributes({ contentqOh: newtext });
      }}
    /></p>
                  </div>
                </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKnI }}
        >
      </svg>
      
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentqQG} default="Engagement" onChange={ (newtext) =>  {
        setAttributes({ contentqQG: newtext });
      }}
    /></p>
                    <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentxiE} default="Speak directly to your customers in a more meaningful way." onChange={ (newtext) =>  {
        setAttributes({ contentxiE: newtext });
      }}
    /></p>
                  </div>
                </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxGK }}
        >
      </svg>
      
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentGqd} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentGqd: newtext });
      }}
    /></p>
                    <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentfae} default="Your customers&#039; data will be safe and secure." onChange={ (newtext) =>  {
        setAttributes({ contentfae: newtext });
      }}
    /></p>
                  </div>
                </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsYm }}
        >
      </svg>
      
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentSOp} default="Integrations" onChange={ (newtext) =>  {
        setAttributes({ contentSOp: newtext });
      }}
    /></p>
                    <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contenttBe} default="Connect with third-party tools that you&#039;re already using." onChange={ (newtext) =>  {
        setAttributes({ contenttBe: newtext });
      }}
    /></p>
                  </div>
                </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghIK }}
        >
      </svg>
      
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentuzp} default="Automations" onChange={ (newtext) =>  {
        setAttributes({ contentuzp: newtext });
      }}
    /></p>
                    <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentaWA} default="Build strategic funnels that will drive your customers to convert" onChange={ (newtext) =>  {
        setAttributes({ contentaWA: newtext });
      }}
    /></p>
                  </div>
                </span>

                                    </div>
                                    <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                        <div className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                    
                    
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMyz }}
        >
      </svg>
      
                    <span className="ml-3"><RichText tagName="span" value={attributes.contentdhc} default="Watch Demo" onChange={ (newtext) =>  {
        setAttributes({ contentdhc: newtext });
      }}
    /></span>
</span>
                                        </div>
                                        <div className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                    
                    
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbND }}
        >
      </svg>
      
                    <span className="ml-3"><RichText tagName="span" value={attributes.contentNAd} default="Contact Sales" onChange={ (newtext) =>  {
        setAttributes({ contentNAd: newtext });
      }}
    /></span>
</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> <span className="text-base font-medium text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentPUJ} default="Pricing" onChange={ (newtext) =>  {
        setAttributes({ contentPUJ: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentXgX} default="Docs" onChange={ (newtext) =>  {
        setAttributes({ contentXgX: newtext });
      }}
    /></span>

                        <div className="relative">
                            <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentvGN} default="More" onChange={ (newtext) =>  {
        setAttributes({ contentvGN: newtext });
      }}
    /></span>

                                
      <svg
         className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxjT }}
        >
      </svg>
      
                            </button>
                            <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"> <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPCc }}
        >
      </svg>
      
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentbMl} default="Help Center" onChange={ (newtext) =>  {
        setAttributes({ contentbMl: newtext });
      }}
    /></p>
                    <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentSbS} default="Get all of your questions answered in our forums or contact support." onChange={ (newtext) =>  {
        setAttributes({ contentSbS: newtext });
      }}
    /></p>
                  </div>
                </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguTQ }}
        >
      </svg>
      
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentAMV} default="Guides" onChange={ (newtext) =>  {
        setAttributes({ contentAMV: newtext });
      }}
    /></p>
                    <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentXlD} default="Learn how to maximize our platform to get the most out of it." onChange={ (newtext) =>  {
        setAttributes({ contentXlD: newtext });
      }}
    /></p>
                  </div>
                </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFoo }}
        >
      </svg>
      
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentony} default="Events" onChange={ (newtext) =>  {
        setAttributes({ contentony: newtext });
      }}
    /></p>
                    <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentuDR} default="See what meet-ups and other events we might be planning near you." onChange={ (newtext) =>  {
        setAttributes({ contentuDR: newtext });
      }}
    /></p>
                  </div>
                </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkfO }}
        >
      </svg>
      
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentsoO} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentsoO: newtext });
      }}
    /></p>
                    <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentXCO} default="Understand how we take your privacy seriously." onChange={ (newtext) =>  {
        setAttributes({ contentXCO: newtext });
      }}
    /></p>
                  </div>
                </span>

                                    </div>
                                    <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                        <div>
                                             <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase"><RichText tagName="span" value={attributes.contentrHO} default="Recent Posts" onChange={ (newtext) =>  {
        setAttributes({ contentrHO: newtext });
      }}
    /></h3>

                                            <ul role="list" className="mt-4 space-y-4">
                                                <li className="text-base truncate"> <span className="font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentiRC} default="Boost your conversion rate" onChange={ (newtext) =>  {
        setAttributes({ contentiRC: newtext });
      }}
    /></span>

                                                </li>
                                                <li className="text-base truncate"> <span className="font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentpVu} default="How to use search engine optimization to drive traffic to your site" onChange={ (newtext) =>  {
        setAttributes({ contentpVu: newtext });
      }}
    /></span>

                                                </li>
                                                <li className="text-base truncate"> <span className="font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentqec} default="Improve your customer experience" onChange={ (newtext) =>  {
        setAttributes({ contentqec: newtext });
      }}
    /></span>

                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mt-5 text-sm"> <span className="font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentWZv} default="View all posts" onChange={ (newtext) =>  {
        setAttributes({ contentWZv: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentOUu} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentOUu: newtext });
      }}
    /></span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"> <span className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentUHY} default="Sign in" onChange={ (newtext) =>  {
        setAttributes({ contentUHY: newtext });
      }}
    /></span>
 <span className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"><RichText tagName="span" value={attributes.contentjYf} default="Sign up" onChange={ (newtext) =>  {
        setAttributes({ contentjYf: newtext });
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
            imageurlAZY: media.url,
            imagealtDuB: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlAZY } 
            alt={ attributes.imagealtDuB } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                            </div>
                            <div className="-mr-2">
                                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentASA} default="Close menu" onChange={ (newtext) =>  {
        setAttributes({ contentASA: newtext });
      }}
    /></span>

                                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUKP }}
        >
      </svg>
      
                                </button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <nav className="grid gap-y-8"> <span className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              
              
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaGA }}
        >
      </svg>
      
              <span className="ml-3 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentVhE} default="Analytics" onChange={ (newtext) =>  {
        setAttributes({ contentVhE: newtext });
      }}
    /></span>
</span> <span className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              
              
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSNu }}
        >
      </svg>
      
              <span className="ml-3 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentfUc} default="Engagement" onChange={ (newtext) =>  {
        setAttributes({ contentfUc: newtext });
      }}
    /></span>
</span> <span className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              
              
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFAH }}
        >
      </svg>
      
              <span className="ml-3 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentDJc} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentDJc: newtext });
      }}
    /></span>
</span> <span className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              
              
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdXt }}
        >
      </svg>
      
              <span className="ml-3 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentNcT} default="Integrations" onChange={ (newtext) =>  {
        setAttributes({ contentNcT: newtext });
      }}
    /></span>
</span> <span className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              
              
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRHw }}
        >
      </svg>
      
              <span className="ml-3 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentZmU} default="Automations" onChange={ (newtext) =>  {
        setAttributes({ contentZmU: newtext });
      }}
    /></span>
</span>
                            </nav>
                        </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8"> <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentsnr} default="Pricing" onChange={ (newtext) =>  {
        setAttributes({ contentsnr: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentuoY} default="Docs" onChange={ (newtext) =>  {
        setAttributes({ contentuoY: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentZll} default="Help Center" onChange={ (newtext) =>  {
        setAttributes({ contentZll: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentqSd} default="Guides" onChange={ (newtext) =>  {
        setAttributes({ contentqSd: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentKIt} default="Events" onChange={ (newtext) =>  {
        setAttributes({ contentKIt: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentwhb} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentwhb: newtext });
      }}
    /></span>

                        </div>
                        <div> <span className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"><RichText tagName="span" value={attributes.contenttqI} default="Sign up" onChange={ (newtext) =>  {
        setAttributes({ contenttqI: newtext });
      }}
    /></span>

                            <p className="mt-6 text-center text-base font-medium text-gray-500">
                                <RichText tagName="span" value={attributes.contentGFM} default="Existing customer?" onChange={ (newtext) => { setAttributes({ contentGFM: newtext }); }} /><span className="text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentFcV} default="Sign in" onChange={ (newtext) =>  {
        setAttributes({ contentFcV: newtext });
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
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div class="flex justify-start lg:w-0 lg:flex-1"> <span>
          <span class="sr-only"><RichText.Content value={attributes.contentimG} /></span>

                        
      <img
            src={ attributes.imageurlcxg } 
            alt={ attributes.imagealtnFT } 
            class="h-8 w-auto sm:h-10"
          />
                        </span>
                    </div>
                    <div class="-mr-2 -my-2 md:hidden">
                        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentsbO} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZCG }}
        >
      </svg>
      
                        </button>
                    </div>
                    <nav class="hidden md:flex space-x-10">
                        <div class="relative">
                            <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText.Content value={attributes.contentgNR} /></span>

                                
      <svg
         class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbQd }}
        >
      </svg>
      
                            </button>
                            <div class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"> <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpTt }}
        >
      </svg>
      
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentVYS} /></p>
                    <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentqOh} /></p>
                  </div>
                </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKnI }}
        >
      </svg>
      
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentqQG} /></p>
                    <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentxiE} /></p>
                  </div>
                </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxGK }}
        >
      </svg>
      
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentGqd} /></p>
                    <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentfae} /></p>
                  </div>
                </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsYm }}
        >
      </svg>
      
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentSOp} /></p>
                    <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contenttBe} /></p>
                  </div>
                </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghIK }}
        >
      </svg>
      
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentuzp} /></p>
                    <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentaWA} /></p>
                  </div>
                </span>

                                    </div>
                                    <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                        <div class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                    
                    
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMyz }}
        >
      </svg>
      
                    <span class="ml-3"><RichText.Content value={attributes.contentdhc} /></span>
</span>
                                        </div>
                                        <div class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                    
                    
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbND }}
        >
      </svg>
      
                    <span class="ml-3"><RichText.Content value={attributes.contentNAd} /></span>
</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> <span class="text-base font-medium text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentPUJ} /></span>
 <span class="text-base font-medium text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentXgX} /></span>

                        <div class="relative">
                            <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText.Content value={attributes.contentvGN} /></span>

                                
      <svg
         class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxjT }}
        >
      </svg>
      
                            </button>
                            <div class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"> <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPCc }}
        >
      </svg>
      
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentbMl} /></p>
                    <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentSbS} /></p>
                  </div>
                </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguTQ }}
        >
      </svg>
      
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentAMV} /></p>
                    <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentXlD} /></p>
                  </div>
                </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFoo }}
        >
      </svg>
      
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentony} /></p>
                    <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentuDR} /></p>
                  </div>
                </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkfO }}
        >
      </svg>
      
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentsoO} /></p>
                    <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentXCO} /></p>
                  </div>
                </span>

                                    </div>
                                    <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                        <div>
                                             <h3 class="text-sm tracking-wide font-medium text-gray-500 uppercase"><RichText.Content value={attributes.contentrHO} /></h3>

                                            <ul role="list" class="mt-4 space-y-4">
                                                <li class="text-base truncate"> <span class="font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentiRC} /></span>

                                                </li>
                                                <li class="text-base truncate"> <span class="font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentpVu} /></span>

                                                </li>
                                                <li class="text-base truncate"> <span class="font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentqec} /></span>

                                                </li>
                                            </ul>
                                        </div>
                                        <div class="mt-5 text-sm"> <span class="font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentWZv} /><span aria-hidden="true"><RichText.Content value={attributes.contentOUu} /></span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0"> <span class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentUHY} /></span>
 <span class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"><RichText.Content value={attributes.contentjYf} /></span>

                    </div>
                </div>
            </div>
            <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div class="pt-5 pb-6 px-5">
                        <div class="flex items-center justify-between">
                            <div>
                                
      <img
            src={ attributes.imageurlAZY } 
            alt={ attributes.imagealtDuB } 
            class="h-8 w-auto"
          />
                            </div>
                            <div class="-mr-2">
                                <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentASA} /></span>

                                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUKP }}
        >
      </svg>
      
                                </button>
                            </div>
                        </div>
                        <div class="mt-6">
                            <nav class="grid gap-y-8"> <span class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              
              
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaGA }}
        >
      </svg>
      
              <span class="ml-3 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentVhE} /></span>
</span> <span class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              
              
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSNu }}
        >
      </svg>
      
              <span class="ml-3 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentfUc} /></span>
</span> <span class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              
              
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFAH }}
        >
      </svg>
      
              <span class="ml-3 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentDJc} /></span>
</span> <span class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              
              
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdXt }}
        >
      </svg>
      
              <span class="ml-3 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentNcT} /></span>
</span> <span class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              
              
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRHw }}
        >
      </svg>
      
              <span class="ml-3 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentZmU} /></span>
</span>
                            </nav>
                        </div>
                    </div>
                    <div class="py-6 px-5 space-y-6">
                        <div class="grid grid-cols-2 gap-y-4 gap-x-8"> <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentsnr} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentuoY} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentZll} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentqSd} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentKIt} /></span>
 <span class="text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentwhb} /></span>

                        </div>
                        <div> <span class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"><RichText.Content value={attributes.contenttqI} /></span>

                            <p class="mt-6 text-center text-base font-medium text-gray-500">
                                <RichText.Content value={attributes.contentGFM} /><span class="text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentFcV} /></span>

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
        