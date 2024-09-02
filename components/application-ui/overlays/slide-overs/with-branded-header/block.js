
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-branded-header', {
            title: 'with branded header',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentqiS": {
    "type": "string",
    "default": "Panel title"
  },
  "contentcLr": {
    "type": "string",
    "default": "Close panel"
  },
  "contentjgZ": {
    "type": "string",
    "default": "Lorem, ipsum dolor sit amet consectetur adipisicing elit aliquam ad hic recusandae soluta."
  },
  "svgkjz": {
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
            value={ attributes.svgkjz }
            onChange={ ( value ) => {
              setAttributes({ svgkjz: value });
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
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <div className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div className="bg-indigo-700 py-6 px-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                     <h2 className="text-lg font-medium text-white" id="slide-over-title"><RichText tagName="span" value={attributes.contentqiS} default="Panel title" onChange={ (newtext) =>  {
        setAttributes({ contentqiS: newtext });
      }}
    /></h2>

                                    <div className="ml-3 flex h-7 items-center">
                                        <button type="button" className="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentcLr} default="Close panel" onChange={ (newtext) =>  {
        setAttributes({ contentcLr: newtext });
      }}
    /></span>

                                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkjz }}
        >
      </svg>
      
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <p className="text-sm text-indigo-300">
                                        <RichText tagName="span" value={attributes.contentjgZ} default="Lorem, ipsum dolor sit amet consectetur adipisicing elit aliquam ad hic recusandae soluta." onChange={ (newtext) => { setAttributes({ contentjgZ: newtext }); }} /></p>
                                </div>
                            </div>
                            <div className="relative flex-1 py-6 px-4 sm:px-6">
                                <div className="absolute inset-0 py-6 px-4 sm:px-6">
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
                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <div class="pointer-events-auto w-screen max-w-md">
                        <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div class="bg-indigo-700 py-6 px-4 sm:px-6">
                                <div class="flex items-center justify-between">
                                     <h2 class="text-lg font-medium text-white" id="slide-over-title"><RichText.Content value={attributes.contentqiS} /></h2>

                                    <div class="ml-3 flex h-7 items-center">
                                        <button type="button" class="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentcLr} /></span>

                                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkjz }}
        >
      </svg>
      
                                        </button>
                                    </div>
                                </div>
                                <div class="mt-1">
                                    <p class="text-sm text-indigo-300">
                                        <RichText.Content value={attributes.contentjgZ} /></p>
                                </div>
                            </div>
                            <div class="relative flex-1 py-6 px-4 sm:px-6">
                                <div class="absolute inset-0 py-6 px-4 sm:px-6">
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
        