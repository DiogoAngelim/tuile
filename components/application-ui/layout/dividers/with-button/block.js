
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-button', {
            title: 'with button',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentsvl": {
    "type": "string",
    "default": "Button text"
  },
  "svgVwf": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgVwf }
            onChange={ ( value ) => {
              setAttributes({ svgVwf: value });
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
            <div className="relative flex justify-center">
                <button type="button" className="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    
      <svg
         className="-ml-1.5 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVwf }}
        >
      </svg>
       <span><RichText tagName="span" value={attributes.contentsvl} default="Button text" onChange={ (newtext) =>  {
        setAttributes({ contentsvl: newtext });
      }}
    /></span>

                </button>
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
            <div class="relative flex justify-center">
                <button type="button" class="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    
      <svg
         class="-ml-1.5 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVwf }}
        >
      </svg>
       <span><RichText.Content value={attributes.contentsvl} /></span>

                </button>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        