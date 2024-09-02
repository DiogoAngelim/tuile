
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/two-column-with-solid-icons', {
            title: 'two column with solid icons',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentAxs": {
    "type": "string",
    "default": "Solutions"
  },
  "contentOWY": {
    "type": "string",
    "default": "Analytics"
  },
  "contentaSg": {
    "type": "string",
    "default": "Get a better understanding of where your traffic is coming from."
  },
  "contentgPo": {
    "type": "string",
    "default": "Engagement"
  },
  "contentCJJ": {
    "type": "string",
    "default": "Speak directly to your customers in a more meaningful way."
  },
  "contentoiE": {
    "type": "string",
    "default": "Security"
  },
  "contentdbt": {
    "type": "string",
    "default": "Your customers&#039; data will be safe and secure."
  },
  "contentytQ": {
    "type": "string",
    "default": "Integrations"
  },
  "contentNYZ": {
    "type": "string",
    "default": "Connect with third-party tools that you&#039;re already using."
  },
  "contentjfo": {
    "type": "string",
    "default": "Automations"
  },
  "contentocJ": {
    "type": "string",
    "default": "Build strategic funnels that will drive your customers to convert"
  },
  "contentlyR": {
    "type": "string",
    "default": "Reports"
  },
  "contentpec": {
    "type": "string",
    "default": "Get detailed reports that will help you make more informed decisions"
  },
  "contentkMX": {
    "type": "string",
    "default": " Enterprise "
  },
  "contentHJI": {
    "type": "string",
    "default": " New "
  },
  "contentnAl": {
    "type": "string",
    "default": " Empower your entire team with even more advanced tools. "
  },
  "svgIoR": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgkxe": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgYar": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122\"/>"
  },
  "svglyj": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"/>"
  },
  "svgJIo": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
  },
  "svgkHV": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\"/>"
  },
  "svgPBG": {
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
            value={ attributes.svgkHV }
            onChange={ ( value ) => {
              setAttributes({ svgkHV: value });
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
            value={ attributes.svgIoR }
            onChange={ ( value ) => {
              setAttributes({ svgIoR: value });
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
            value={ attributes.svgkxe }
            onChange={ ( value ) => {
              setAttributes({ svgkxe: value });
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
            value={ attributes.svgYar }
            onChange={ ( value ) => {
              setAttributes({ svgYar: value });
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
            value={ attributes.svglyj }
            onChange={ ( value ) => {
              setAttributes({ svglyj: value });
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
            value={ attributes.svgJIo }
            onChange={ ( value ) => {
              setAttributes({ svgJIo: value });
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
            value={ attributes.svgkHV }
            onChange={ ( value ) => {
              setAttributes({ svgkHV: value });
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
            value={ attributes.svgPBG }
            onChange={ ( value ) => {
              setAttributes({ svgPBG: value });
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
            <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentAxs} default="Solutions" onChange={ (newtext) =>  {
        setAttributes({ contentAxs: newtext });
      }}
    /></span>

                
      <svg
         className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIoR }}
        >
      </svg>
      
            </button>
            <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 lg:max-w-3xl">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"> <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
            
            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkxe }}
        >
      </svg>
      
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentOWY} default="Analytics" onChange={ (newtext) =>  {
        setAttributes({ contentOWY: newtext });
      }}
    /></p>
            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentaSg} default="Get a better understanding of where your traffic is coming from." onChange={ (newtext) =>  {
        setAttributes({ contentaSg: newtext });
      }}
    /></p>
          </div>
        </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
            
            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYar }}
        >
      </svg>
      
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentgPo} default="Engagement" onChange={ (newtext) =>  {
        setAttributes({ contentgPo: newtext });
      }}
    /></p>
            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentCJJ} default="Speak directly to your customers in a more meaningful way." onChange={ (newtext) =>  {
        setAttributes({ contentCJJ: newtext });
      }}
    /></p>
          </div>
        </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
            
            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglyj }}
        >
      </svg>
      
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentoiE} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentoiE: newtext });
      }}
    /></p>
            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentdbt} default="Your customers&#039; data will be safe and secure." onChange={ (newtext) =>  {
        setAttributes({ contentdbt: newtext });
      }}
    /></p>
          </div>
        </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
            
            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJIo }}
        >
      </svg>
      
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentytQ} default="Integrations" onChange={ (newtext) =>  {
        setAttributes({ contentytQ: newtext });
      }}
    /></p>
            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentNYZ} default="Connect with third-party tools that you&#039;re already using." onChange={ (newtext) =>  {
        setAttributes({ contentNYZ: newtext });
      }}
    /></p>
          </div>
        </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
            
            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkHV }}
        >
      </svg>
      
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentjfo} default="Automations" onChange={ (newtext) =>  {
        setAttributes({ contentjfo: newtext });
      }}
    /></p>
            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentocJ} default="Build strategic funnels that will drive your customers to convert" onChange={ (newtext) =>  {
        setAttributes({ contentocJ: newtext });
      }}
    /></p>
          </div>
        </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
            
            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPBG }}
        >
      </svg>
      
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentlyR} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentlyR: newtext });
      }}
    /></p>
            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentpec} default="Get detailed reports that will help you make more informed decisions" onChange={ (newtext) =>  {
        setAttributes({ contentpec: newtext });
      }}
    /></p>
          </div>
        </span>

                    </div>
                    <div className="p-5 bg-gray-50 sm:p-8"> <span className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
          <span className="flex items-center">
            <span className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentkMX} default="Enterprise" onChange={ (newtext) =>  {
        setAttributes({ contentkMX: newtext });
      }}
    /></span>
 <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800"><RichText tagName="span" value={attributes.contentHJI} default="New" onChange={ (newtext) =>  {
        setAttributes({ contentHJI: newtext });
      }}
    /></span>
</span> <span className="mt-1 block text-sm text-gray-500"><RichText tagName="span" value={attributes.contentnAl} default="Empower your entire team with even more advanced tools." onChange={ (newtext) =>  {
        setAttributes({ contentnAl: newtext });
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
                );
            },
            save(props) {
            const { attributes } = props;

            return (
                <div>
    <div>
        <div class="relative">
            <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText.Content value={attributes.contentAxs} /></span>

                
      <svg
         class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIoR }}
        >
      </svg>
      
            </button>
            <div class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 lg:max-w-3xl">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"> <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
            
            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkxe }}
        >
      </svg>
      
          </div>
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentOWY} /></p>
            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentaSg} /></p>
          </div>
        </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
            
            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYar }}
        >
      </svg>
      
          </div>
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentgPo} /></p>
            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentCJJ} /></p>
          </div>
        </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
            
            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglyj }}
        >
      </svg>
      
          </div>
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentoiE} /></p>
            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentdbt} /></p>
          </div>
        </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
            
            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJIo }}
        >
      </svg>
      
          </div>
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentytQ} /></p>
            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentNYZ} /></p>
          </div>
        </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
            
            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkHV }}
        >
      </svg>
      
          </div>
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentjfo} /></p>
            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentocJ} /></p>
          </div>
        </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
            
            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPBG }}
        >
      </svg>
      
          </div>
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentlyR} /></p>
            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentpec} /></p>
          </div>
        </span>

                    </div>
                    <div class="p-5 bg-gray-50 sm:p-8"> <span class="-m-3 p-3 flow-root rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
          <span class="flex items-center">
            <span class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentkMX} /></span>
 <span class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800"><RichText.Content value={attributes.contentHJI} /></span>
</span> <span class="mt-1 block text-sm text-gray-500"><RichText.Content value={attributes.contentnAl} /></span>
</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        