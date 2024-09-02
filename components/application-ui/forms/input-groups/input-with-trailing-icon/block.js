
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/input-with-trailing-icon', {
            title: 'input with trailing icon',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentIXu": {
    "type": "string",
    "default": "Account number"
  },
  "svgZbE": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgZbE }
            onChange={ ( value ) => {
              setAttributes({ svgZbE: value });
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
        <div>
            <label for="account-number" className="block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contentIXu} default="Account number" onChange={ (newtext) => { setAttributes({ contentIXu: newtext }); }} /></label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input type="text" name="account-number" id="account-number" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md" placeholder="000-00-0000"/>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZbE }}
        >
      </svg>
      
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
        <div>
            <label for="account-number" class="block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contentIXu} /></label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <input type="text" name="account-number" id="account-number" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md" placeholder="000-00-0000"/>
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZbE }}
        >
      </svg>
      
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        