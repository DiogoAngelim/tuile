
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-background-overlay', {
            title: 'with background overlay',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentTsn": {
    "type": "string",
    "default": "Panel title"
  },
  "contentGdr": {
    "type": "string",
    "default": "Close panel"
  },
  "svgvgf": {
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
            value={ attributes.svgvgf }
            onChange={ ( value ) => {
              setAttributes({ svgvgf: value });
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
                    <div className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                            <div className="px-4 sm:px-6">
                                <div className="flex items-start justify-between">
                                     <h2 className="text-lg font-medium text-gray-900" id="slide-over-title"><RichText tagName="span" value={attributes.contentTsn} default="Panel title" onChange={ (newtext) =>  {
        setAttributes({ contentTsn: newtext });
      }}
    /></h2>

                                    <div className="ml-3 flex h-7 items-center">
                                        <button type="button" className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> <span className="sr-only"><RichText tagName="span" value={attributes.contentGdr} default="Close panel" onChange={ (newtext) =>  {
        setAttributes({ contentGdr: newtext });
      }}
    /></span>

                                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvgf }}
        >
      </svg>
      
                                        </button>
                                    </div>
                                </div>
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
                    <div class="pointer-events-auto w-screen max-w-md">
                        <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                            <div class="px-4 sm:px-6">
                                <div class="flex items-start justify-between">
                                     <h2 class="text-lg font-medium text-gray-900" id="slide-over-title"><RichText.Content value={attributes.contentTsn} /></h2>

                                    <div class="ml-3 flex h-7 items-center">
                                        <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> <span class="sr-only"><RichText.Content value={attributes.contentGdr} /></span>

                                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvgf }}
        >
      </svg>
      
                                        </button>
                                    </div>
                                </div>
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
        