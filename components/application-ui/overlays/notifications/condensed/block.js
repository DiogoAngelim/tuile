
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/condensed', {
            title: 'condensed',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentTEy": {
    "type": "string",
    "default": "Discussion archived"
  },
  "contentYbx": {
    "type": "string",
    "default": "Undo"
  },
  "contentxIH": {
    "type": "string",
    "default": "Close"
  },
  "svgbpo": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgbpo }
            onChange={ ( value ) => {
              setAttributes({ svgbpo: value });
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
        <div aria-live="assertive" className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
            <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="p-4">
                        <div className="flex items-center">
                            <div className="w-0 flex-1 flex justify-between">
                                <p className="w-0 flex-1 text-sm font-medium text-gray-900">
                                    <RichText tagName="span" value={attributes.contentTEy} default="Discussion archived" onChange={ (newtext) => { setAttributes({ contentTEy: newtext }); }} /></p>
                                <button type="button" className="ml-3 flex-shrink-0 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <RichText tagName="span" value={attributes.contentYbx} default="Undo" onChange={ (newtext) => { setAttributes({ contentYbx: newtext }); }} /></button>
                            </div>
                            <div className="ml-4 flex-shrink-0 flex">
                                <button className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentxIH} default="Close" onChange={ (newtext) =>  {
        setAttributes({ contentxIH: newtext });
      }}
    /></span>

                                    
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbpo }}
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
</div>
                </div>
                );
            },
            save(props) {
            const { attributes } = props;

            return (
                <div>
    <div>
        <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
            <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
                <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="p-4">
                        <div class="flex items-center">
                            <div class="w-0 flex-1 flex justify-between">
                                <p class="w-0 flex-1 text-sm font-medium text-gray-900">
                                    <RichText.Content value={attributes.contentTEy} /></p>
                                <button type="button" class="ml-3 flex-shrink-0 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <RichText.Content value={attributes.contentYbx} /></button>
                            </div>
                            <div class="ml-4 flex-shrink-0 flex">
                                <button class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentxIH} /></span>

                                    
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbpo }}
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
</div>
            );
            },
        });
        