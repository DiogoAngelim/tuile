
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-sticky-footer', {
            title: 'with sticky footer',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentTeq": {
    "type": "string",
    "default": "Panel title"
  },
  "contentLIV": {
    "type": "string",
    "default": "Close panel"
  },
  "contentyqS": {
    "type": "string",
    "default": "Cancel"
  },
  "contentcCi": {
    "type": "string",
    "default": "Save"
  },
  "svgdgc": {
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
            value={ attributes.svgdgc }
            onChange={ ( value ) => {
              setAttributes({ svgdgc: value });
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
                        <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                            <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                                <div className="px-4 sm:px-6">
                                    <div className="flex items-start justify-between">
                                         <h2 className="text-lg font-medium text-gray-900" id="slide-over-title"><RichText tagName="span" value={attributes.contentTeq} default="Panel title" onChange={ (newtext) =>  {
        setAttributes({ contentTeq: newtext });
      }}
    /></h2>

                                        <div className="ml-3 flex h-7 items-center">
                                            <button type="button" className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentLIV} default="Close panel" onChange={ (newtext) =>  {
        setAttributes({ contentLIV: newtext });
      }}
    /></span>

                                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdgc }}
        >
      </svg>
      
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                    <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true"/>
                                </div>
                            </div>
                            <div className="flex flex-shrink-0 justify-end px-4 py-4">
                                <button type="button" className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <RichText tagName="span" value={attributes.contentyqS} default="Cancel" onChange={ (newtext) => { setAttributes({ contentyqS: newtext }); }} /></button>
                                <button type="submit" className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <RichText tagName="span" value={attributes.contentcCi} default="Save" onChange={ (newtext) => { setAttributes({ contentcCi: newtext }); }} /></button>
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
                        <div class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                            <div class="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                                <div class="px-4 sm:px-6">
                                    <div class="flex items-start justify-between">
                                         <h2 class="text-lg font-medium text-gray-900" id="slide-over-title"><RichText.Content value={attributes.contentTeq} /></h2>

                                        <div class="ml-3 flex h-7 items-center">
                                            <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentLIV} /></span>

                                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdgc }}
        >
      </svg>
      
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative mt-6 flex-1 px-4 sm:px-6">
                                    <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true"/>
                                </div>
                            </div>
                            <div class="flex flex-shrink-0 justify-end px-4 py-4">
                                <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <RichText.Content value={attributes.contentyqS} /></button>
                                <button type="submit" class="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <RichText.Content value={attributes.contentcCi} /></button>
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
        