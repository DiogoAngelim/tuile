
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/header-banner', {
            title: 'header banner',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentbkM": {
    "type": "string",
    "default": " We announced a new product! "
  },
  "contentvSz": {
    "type": "string",
    "default": " Big news! We're excited to announce a brand new product. "
  },
  "contentcuX": {
    "type": "string",
    "default": " Learn more "
  },
  "contentwFh": {
    "type": "string",
    "default": "Dismiss"
  },
  "svgbfW": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z\"/>"
  },
  "svghvE": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
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
            value={ attributes.svgbfW }
            onChange={ ( value ) => {
              setAttributes({ svgbfW: value });
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
            value={ attributes.svghvE }
            onChange={ ( value ) => {
              setAttributes({ svghvE: value });
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
        <div className="bg-indigo-600">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center"> <span className="flex p-2 rounded-lg bg-indigo-800">
          
          
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbfW }}
        >
      </svg>
      
        </span>

                        <p className="ml-3 font-medium text-white truncate"> <span className="md:hidden"><RichText tagName="span" value={attributes.contentbkM} default="We announced a new product!" onChange={ (newtext) =>  {
        setAttributes({ contentbkM: newtext });
      }}
    /></span>
 <span className="hidden md:inline"><RichText tagName="span" value={attributes.contentvSz} default="Big news! We're excited to announce a brand new product." onChange={ (newtext) =>  {
        setAttributes({ contentvSz: newtext });
      }}
    /></span>

                        </p>
                    </div>
                    <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"> <span className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"><RichText tagName="span" value={attributes.contentcuX} default="Learn more" onChange={ (newtext) =>  {
        setAttributes({ contentcuX: newtext });
      }}
    /></span>

                    </div>
                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <button type="button" className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"> <span className="sr-only"><RichText tagName="span" value={attributes.contentwFh} default="Dismiss" onChange={ (newtext) =>  {
        setAttributes({ contentwFh: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghvE }}
        >
      </svg>
      
                        </button>
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
        <div class="bg-indigo-600">
            <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between flex-wrap">
                    <div class="w-0 flex-1 flex items-center"> <span class="flex p-2 rounded-lg bg-indigo-800">
          
          
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbfW }}
        >
      </svg>
      
        </span>

                        <p class="ml-3 font-medium text-white truncate"> <span class="md:hidden"><RichText.Content value={attributes.contentbkM} /></span>
 <span class="hidden md:inline"><RichText.Content value={attributes.contentvSz} /></span>

                        </p>
                    </div>
                    <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"> <span class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"><RichText.Content value={attributes.contentcuX} /></span>

                    </div>
                    <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <button type="button" class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"> <span class="sr-only"><RichText.Content value={attributes.contentwFh} /></span>

                            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghvE }}
        >
      </svg>
      
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        