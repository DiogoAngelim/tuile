
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-icon', {
            title: 'with icon',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "svgjVK": {
    "type": "string",
    "default": "<path fill=\"#6B7280\" fill-rule=\"evenodd\" d=\"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgjVK }
            onChange={ ( value ) => {
              setAttributes({ svgjVK: value });
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
        <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"/>
            </div>
            <div className="relative flex justify-center"> <span className="bg-white px-2 text-gray-500">
      
      <svg
         className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"
          dangerouslySetInnerHTML={ { __html: attributes.svgjVK }}
        >
      </svg>
      
    </span>

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
        <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-300"/>
            </div>
            <div class="relative flex justify-center"> <span class="bg-white px-2 text-gray-500">
      
      <svg
         class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"
          dangerouslySetInnerHTML={ { __html: attributes.svgjVK }}
        >
      </svg>
      
    </span>

            </div>
        </div>
    </div>
</div>
            );
            },
        });
        