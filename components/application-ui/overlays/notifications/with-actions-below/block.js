
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-actions-below', {
            title: 'with actions below',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentNLx": {
    "type": "string",
    "default": "Discussion moved"
  },
  "contentKEo": {
    "type": "string",
    "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
  },
  "contentiaf": {
    "type": "string",
    "default": "Undo"
  },
  "contentvHs": {
    "type": "string",
    "default": "Dismiss"
  },
  "contentPDv": {
    "type": "string",
    "default": "Close"
  },
  "svguYv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgjdM": {
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
            value={ attributes.svguYv }
            onChange={ ( value ) => {
              setAttributes({ svguYv: value });
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
            value={ attributes.svgjdM }
            onChange={ ( value ) => {
              setAttributes({ svgjdM: value });
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
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                
      <svg
         className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguYv }}
        >
      </svg>
      
                            </div>
                            <div className="ml-3 w-0 flex-1 pt-0.5">
                                <p className="text-sm font-medium text-gray-900">
                                    <RichText tagName="span" value={attributes.contentNLx} default="Discussion moved" onChange={ (newtext) => { setAttributes({ contentNLx: newtext }); }} /></p>
                                <p className="mt-1 text-sm text-gray-500">
                                    <RichText tagName="span" value={attributes.contentKEo} default="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." onChange={ (newtext) => { setAttributes({ contentKEo: newtext }); }} /></p>
                                <div className="mt-3 flex space-x-7">
                                    <button type="button" className="bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <RichText tagName="span" value={attributes.contentiaf} default="Undo" onChange={ (newtext) => { setAttributes({ contentiaf: newtext }); }} /></button>
                                    <button type="button" className="bg-white rounded-md text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <RichText tagName="span" value={attributes.contentvHs} default="Dismiss" onChange={ (newtext) => { setAttributes({ contentvHs: newtext }); }} /></button>
                                </div>
                            </div>
                            <div className="ml-4 flex-shrink-0 flex">
                                <button className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentPDv} default="Close" onChange={ (newtext) =>  {
        setAttributes({ contentPDv: newtext });
      }}
    /></span>

                                    
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjdM }}
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
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                
      <svg
         class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguYv }}
        >
      </svg>
      
                            </div>
                            <div class="ml-3 w-0 flex-1 pt-0.5">
                                <p class="text-sm font-medium text-gray-900">
                                    <RichText.Content value={attributes.contentNLx} /></p>
                                <p class="mt-1 text-sm text-gray-500">
                                    <RichText.Content value={attributes.contentKEo} /></p>
                                <div class="mt-3 flex space-x-7">
                                    <button type="button" class="bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <RichText.Content value={attributes.contentiaf} /></button>
                                    <button type="button" class="bg-white rounded-md text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <RichText.Content value={attributes.contentvHs} /></button>
                                </div>
                            </div>
                            <div class="ml-4 flex-shrink-0 flex">
                                <button class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentPDv} /></span>

                                    
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjdM }}
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
        