
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-link-on-right', {
            title: 'with link on right',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentquz": {
    "type": "string",
    "default": "A new software update is available. See what’s new in version 2.0.4."
  },
  "contentfKR": {
    "type": "string",
    "default": "Details "
  },
  "contentIPv": {
    "type": "string",
    "default": "&rarr;"
  },
  "svgvLd": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgvLd }
            onChange={ ( value ) => {
              setAttributes({ svgvLd: value });
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
        <div className="rounded-md bg-blue-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    
      <svg
         className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvLd }}
        >
      </svg>
      
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-sm text-blue-700">
                        <RichText tagName="span" value={attributes.contentquz} default="A new software update is available. See what’s new in version 2.0.4." onChange={ (newtext) => { setAttributes({ contentquz: newtext }); }} /></p>
                    <p className="mt-3 text-sm md:mt-0 md:ml-6"> <span className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"><RichText tagName="span" value={attributes.contentfKR} default="Details" onChange={ (newtext) =>  {
        setAttributes({ contentfKR: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentIPv} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentIPv: newtext });
      }}
    /></span></span>
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
        <div class="rounded-md bg-blue-50 p-4">
            <div class="flex">
                <div class="flex-shrink-0">
                    
      <svg
         class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvLd }}
        >
      </svg>
      
                </div>
                <div class="ml-3 flex-1 md:flex md:justify-between">
                    <p class="text-sm text-blue-700">
                        <RichText.Content value={attributes.contentquz} /></p>
                    <p class="mt-3 text-sm md:mt-0 md:ml-6"> <span class="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"><RichText.Content value={attributes.contentfKR} /><span aria-hidden="true"><RichText.Content value={attributes.contentIPv} /></span></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        