
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-close-button-on-outside', {
            title: 'with close button on outside',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contenthOB": {
    "type": "string",
    "default": "Close panel"
  },
  "contentvGy": {
    "type": "string",
    "default": "Panel title"
  },
  "svgZqn": {
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
            value={ attributes.svgZqn }
            onChange={ ( value ) => {
              setAttributes({ svgZqn: value });
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
        <div className="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"/>
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <div className="pointer-events-auto relative w-screen max-w-md">
                        <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                            <button type="button" className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contenthOB} default="Close panel" onChange={ (newtext) =>  {
        setAttributes({ contenthOB: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZqn }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                            <div className="px-4 sm:px-6">
                                 <h2 className="text-lg font-medium text-gray-900" id="slide-over-title"><RichText tagName="span" value={attributes.contentvGy} default="Panel title" onChange={ (newtext) =>  {
        setAttributes({ contentvGy: newtext });
      }}
    /></h2>

                            </div>
                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                <div className="absolute inset-0 px-4 sm:px-6">
                                    <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true"/>
                                </div>
                            </div>
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
        <div class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"/>
                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <div class="pointer-events-auto relative w-screen max-w-md">
                        <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                            <button type="button" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contenthOB} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZqn }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                            <div class="px-4 sm:px-6">
                                 <h2 class="text-lg font-medium text-gray-900" id="slide-over-title"><RichText.Content value={attributes.contentvGy} /></h2>

                            </div>
                            <div class="relative mt-6 flex-1 px-4 sm:px-6">
                                <div class="absolute inset-0 px-4 sm:px-6">
                                    <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true"/>
                                </div>
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
        });
        