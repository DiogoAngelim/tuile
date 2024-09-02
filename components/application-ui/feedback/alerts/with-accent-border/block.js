
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-accent-border', {
            title: 'with accent border',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentWUL": {
    "type": "string",
    "default": "\n        You have no credits left.\n        "
  },
  "contentwlC": {
    "type": "string",
    "default": " Upgrade your account to add more credits. "
  },
  "svgwvw": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgwvw }
            onChange={ ( value ) => {
              setAttributes({ svgwvw: value });
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
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    
      <svg
         className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwvw }}
        >
      </svg>
      
                </div>
                <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                        <RichText tagName="span" value={attributes.contentWUL} default="You have no credits left." onChange={ (newtext) => { setAttributes({ contentWUL: newtext }); }} /><span className="font-medium underline text-yellow-700 hover:text-yellow-600"><RichText tagName="span" value={attributes.contentwlC} default="Upgrade your account to add more credits." onChange={ (newtext) =>  {
        setAttributes({ contentwlC: newtext });
      }}
    /></span>

                    </p>
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
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div class="flex">
                <div class="flex-shrink-0">
                    
      <svg
         class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwvw }}
        >
      </svg>
      
                </div>
                <div class="ml-3">
                    <p class="text-sm text-yellow-700">
                        <RichText.Content value={attributes.contentWUL} /><span class="font-medium underline text-yellow-700 hover:text-yellow-600"><RichText.Content value={attributes.contentwlC} /></span>

                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        