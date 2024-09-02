
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/input-with-leading-icon', {
            title: 'input with leading icon',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentGfs": {
    "type": "string",
    "default": "Email"
  },
  "svgrfe": {
    "type": "string",
    "default": "<path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"/>\n                        <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"/>"
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
            value={ attributes.svgrfe }
            onChange={ ( value ) => {
              setAttributes({ svgrfe: value });
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
            <label for="email" className="block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contentGfs} default="Email" onChange={ (newtext) => { setAttributes({ contentGfs: newtext }); }} /></label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrfe }}
        >
      </svg>
      
                </div>
                <input type="email" name="email" id="email" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"/>
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
            <label for="email" class="block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contentGfs} /></label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrfe }}
        >
      </svg>
      
                </div>
                <input type="email" name="email" id="email" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"/>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        