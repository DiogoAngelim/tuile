
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/stacked-with-footer-actions', {
            title: 'stacked with footer actions',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentJbG": {
    "type": "string",
    "default": "Solutions"
  },
  "contentKnV": {
    "type": "string",
    "default": "Analytics"
  },
  "contentuFT": {
    "type": "string",
    "default": "Get a better understanding of where your traffic is coming from."
  },
  "contentYEc": {
    "type": "string",
    "default": "Engagement"
  },
  "contentKdm": {
    "type": "string",
    "default": "Speak directly to your customers in a more meaningful way."
  },
  "contentpyO": {
    "type": "string",
    "default": "Security"
  },
  "contentsMR": {
    "type": "string",
    "default": "Your customers&#039; data will be safe and secure."
  },
  "contentlXl": {
    "type": "string",
    "default": "Integrations"
  },
  "contentdFV": {
    "type": "string",
    "default": "Connect with third-party tools that you&#039;re already using."
  },
  "contentrrW": {
    "type": "string",
    "default": "Automations"
  },
  "contentdYH": {
    "type": "string",
    "default": "Build strategic funnels that will drive your customers to convert"
  },
  "contentJjW": {
    "type": "string",
    "default": "Watch Demo"
  },
  "contentuhT": {
    "type": "string",
    "default": "Contact Sales"
  },
  "svgwXv": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgfQP": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgLcU": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122\"/>"
  },
  "svgvOH": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"/>"
  },
  "svgurM": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
  },
  "svgGaa": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\"/>"
  },
  "svgSAG": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z\"/>\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgAVB": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\"/>"
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
            value={ attributes.svgfQP }
            onChange={ ( value ) => {
              setAttributes({ svgfQP: value });
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
            value={ attributes.svgLcU }
            onChange={ ( value ) => {
              setAttributes({ svgLcU: value });
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
            value={ attributes.svgvOH }
            onChange={ ( value ) => {
              setAttributes({ svgvOH: value });
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
            value={ attributes.svgurM }
            onChange={ ( value ) => {
              setAttributes({ svgurM: value });
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
            value={ attributes.svgGaa }
            onChange={ ( value ) => {
              setAttributes({ svgGaa: value });
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
            value={ attributes.svgSAG }
            onChange={ ( value ) => {
              setAttributes({ svgSAG: value });
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
            value={ attributes.svgAVB }
            onChange={ ( value ) => {
              setAttributes({ svgAVB: value });
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
        <div className="relative">
            <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentJbG} default="Solutions" onChange={ (newtext) =>  {
        setAttributes({ contentJbG: newtext });
      }}
    /></span>

                
      <svg
         className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwXv }}
        >
      </svg>
      
            </button>
            <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"> <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfQP }}
        >
      </svg>
      
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentKnV} default="Analytics" onChange={ (newtext) =>  {
        setAttributes({ contentKnV: newtext });
      }}
    /></p>
            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentuFT} default="Get a better understanding of where your traffic is coming from." onChange={ (newtext) =>  {
        setAttributes({ contentuFT: newtext });
      }}
    /></p>
          </div>
        </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLcU }}
        >
      </svg>
      
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentYEc} default="Engagement" onChange={ (newtext) =>  {
        setAttributes({ contentYEc: newtext });
      }}
    /></p>
            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentKdm} default="Speak directly to your customers in a more meaningful way." onChange={ (newtext) =>  {
        setAttributes({ contentKdm: newtext });
      }}
    /></p>
          </div>
        </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvOH }}
        >
      </svg>
      
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentpyO} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentpyO: newtext });
      }}
    /></p>
            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentsMR} default="Your customers&#039; data will be safe and secure." onChange={ (newtext) =>  {
        setAttributes({ contentsMR: newtext });
      }}
    /></p>
          </div>
        </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgurM }}
        >
      </svg>
      
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentlXl} default="Integrations" onChange={ (newtext) =>  {
        setAttributes({ contentlXl: newtext });
      }}
    /></p>
            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentdFV} default="Connect with third-party tools that you&#039;re already using." onChange={ (newtext) =>  {
        setAttributes({ contentdFV: newtext });
      }}
    /></p>
          </div>
        </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGaa }}
        >
      </svg>
      
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentrrW} default="Automations" onChange={ (newtext) =>  {
        setAttributes({ contentrrW: newtext });
      }}
    /></p>
            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentdYH} default="Build strategic funnels that will drive your customers to convert" onChange={ (newtext) =>  {
        setAttributes({ contentdYH: newtext });
      }}
    /></p>
          </div>
        </span>

                    </div>
                    <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                        <div className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
            
            
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSAG }}
        >
      </svg>
      
            <span className="ml-3"><RichText tagName="span" value={attributes.contentJjW} default="Watch Demo" onChange={ (newtext) =>  {
        setAttributes({ contentJjW: newtext });
      }}
    /></span>
</span>
                        </div>
                        <div className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
            
            
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAVB }}
        >
      </svg>
      
            <span className="ml-3"><RichText tagName="span" value={attributes.contentuhT} default="Contact Sales" onChange={ (newtext) =>  {
        setAttributes({ contentuhT: newtext });
      }}
    /></span>
</span>
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
        <div class="relative">
            <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText.Content value={attributes.contentJbG} /></span>

                
      <svg
         class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwXv }}
        >
      </svg>
      
            </button>
            <div class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"> <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfQP }}
        >
      </svg>
      
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentKnV} /></p>
            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentuFT} /></p>
          </div>
        </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLcU }}
        >
      </svg>
      
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentYEc} /></p>
            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentKdm} /></p>
          </div>
        </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvOH }}
        >
      </svg>
      
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentpyO} /></p>
            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentsMR} /></p>
          </div>
        </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgurM }}
        >
      </svg>
      
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentlXl} /></p>
            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentdFV} /></p>
          </div>
        </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGaa }}
        >
      </svg>
      
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentrrW} /></p>
            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentdYH} /></p>
          </div>
        </span>

                    </div>
                    <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                        <div class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
            
            
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSAG }}
        >
      </svg>
      
            <span class="ml-3"><RichText.Content value={attributes.contentJjW} /></span>
</span>
                        </div>
                        <div class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
            
            
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAVB }}
        >
      </svg>
      
            <span class="ml-3"><RichText.Content value={attributes.contentuhT} /></span>
</span>
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
        