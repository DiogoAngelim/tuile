
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-alert', {
            title: 'simple alert',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentBHR": {
    "type": "string",
    "default": "&#8203;"
  },
  "contentZBT": {
    "type": "string",
    "default": "Deactivate account"
  },
  "contenttuG": {
    "type": "string",
    "default": "Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone."
  },
  "contentURZ": {
    "type": "string",
    "default": "Deactivate"
  },
  "contentMUM": {
    "type": "string",
    "default": "Cancel"
  },
  "svgMVL": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/>"
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
            value={ attributes.svgMVL }
            onChange={ ( value ) => {
              setAttributes({ svgMVL: value });
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
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"/> <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"><RichText tagName="span" value={attributes.contentBHR} default="&#8203;" onChange={ (newtext) =>  {
        setAttributes({ contentBHR: newtext });
      }}
    /></span>

                <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            
      <svg
         className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMVL }}
        >
      </svg>
      
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                             <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title"><RichText tagName="span" value={attributes.contentZBT} default="Deactivate account" onChange={ (newtext) =>  {
        setAttributes({ contentZBT: newtext });
      }}
    /></h3>

                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    <RichText tagName="span" value={attributes.contenttuG} default="Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone." onChange={ (newtext) => { setAttributes({ contenttuG: newtext }); }} /></p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            <RichText tagName="span" value={attributes.contentURZ} default="Deactivate" onChange={ (newtext) => { setAttributes({ contentURZ: newtext }); }} /></button>
                        <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm">
                            <RichText tagName="span" value={attributes.contentMUM} default="Cancel" onChange={ (newtext) => { setAttributes({ contentMUM: newtext }); }} /></button>
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
        <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"/> <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"><RichText.Content value={attributes.contentBHR} /></span>

                <div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div class="sm:flex sm:items-start">
                        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            
      <svg
         class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMVL }}
        >
      </svg>
      
                        </div>
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                             <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title"><RichText.Content value={attributes.contentZBT} /></h3>

                            <div class="mt-2">
                                <p class="text-sm text-gray-500">
                                    <RichText.Content value={attributes.contenttuG} /></p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            <RichText.Content value={attributes.contentURZ} /></button>
                        <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm">
                            <RichText.Content value={attributes.contentMUM} /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        