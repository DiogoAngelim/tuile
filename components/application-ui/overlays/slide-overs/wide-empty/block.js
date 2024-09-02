
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/wide-empty', {
            title: 'wide empty',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentDsI": {
    "type": "string",
    "default": "Panel title"
  },
  "contentxPK": {
    "type": "string",
    "default": "Close panel"
  },
  "svgsim": {
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
            value={ attributes.svgsim }
            onChange={ ( value ) => {
              setAttributes({ svgsim: value });
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
                <div className="absolute inset-0" aria-hidden="true"/>
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                    <div className="pointer-events-auto w-screen max-w-2xl">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                            <div className="px-4 sm:px-6">
                                <div className="flex items-start justify-between">
                                     <h2 className="text-lg font-medium text-gray-900" id="slide-over-title"><RichText tagName="span" value={attributes.contentDsI} default="Panel title" onChange={ (newtext) =>  {
        setAttributes({ contentDsI: newtext });
      }}
    /></h2>

                                    <div className="ml-3 flex h-7 items-center">
                                        <button type="button" className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> <span className="sr-only"><RichText tagName="span" value={attributes.contentxPK} default="Close panel" onChange={ (newtext) =>  {
        setAttributes({ contentxPK: newtext });
      }}
    /></span>

                                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsim }}
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
                <div class="absolute inset-0" aria-hidden="true"/>
                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                    <div class="pointer-events-auto w-screen max-w-2xl">
                        <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                            <div class="px-4 sm:px-6">
                                <div class="flex items-start justify-between">
                                     <h2 class="text-lg font-medium text-gray-900" id="slide-over-title"><RichText.Content value={attributes.contentDsI} /></h2>

                                    <div class="ml-3 flex h-7 items-center">
                                        <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> <span class="sr-only"><RichText.Content value={attributes.contentxPK} /></span>

                                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsim }}
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
        