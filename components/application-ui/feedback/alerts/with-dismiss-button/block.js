
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-dismiss-button', {
            title: 'with dismiss button',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentVAH": {
    "type": "string",
    "default": "Successfully uploaded"
  },
  "contentyxx": {
    "type": "string",
    "default": "Dismiss"
  },
  "svgtaD": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"/>"
  },
  "svgOdG": {
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
            value={ attributes.svgtaD }
            onChange={ ( value ) => {
              setAttributes({ svgtaD: value });
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
            value={ attributes.svgOdG }
            onChange={ ( value ) => {
              setAttributes({ svgOdG: value });
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
        <div className="rounded-md bg-green-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    
      <svg
         className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtaD }}
        >
      </svg>
      
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                        <RichText tagName="span" value={attributes.contentVAH} default="Successfully uploaded" onChange={ (newtext) => { setAttributes({ contentVAH: newtext }); }} /></p>
                </div>
                <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button type="button" className="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"> <span className="sr-only"><RichText tagName="span" value={attributes.contentyxx} default="Dismiss" onChange={ (newtext) =>  {
        setAttributes({ contentyxx: newtext });
      }}
    /></span>

                            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOdG }}
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
        <div class="rounded-md bg-green-50 p-4">
            <div class="flex">
                <div class="flex-shrink-0">
                    
      <svg
         class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtaD }}
        >
      </svg>
      
                </div>
                <div class="ml-3">
                    <p class="text-sm font-medium text-green-800">
                        <RichText.Content value={attributes.contentVAH} /></p>
                </div>
                <div class="ml-auto pl-3">
                    <div class="-mx-1.5 -my-1.5">
                        <button type="button" class="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"> <span class="sr-only"><RichText.Content value={attributes.contentyxx} /></span>

                            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOdG }}
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
        