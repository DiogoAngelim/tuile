
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-description', {
            title: 'with description',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentyhX": {
    "type": "string",
    "default": "Attention needed"
  },
  "contentKse": {
    "type": "string",
    "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
  },
  "svgFaO": {
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
            value={ attributes.svgFaO }
            onChange={ ( value ) => {
              setAttributes({ svgFaO: value });
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
        <div className="rounded-md bg-yellow-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    
      <svg
         className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFaO }}
        >
      </svg>
      
                </div>
                <div className="ml-3">
                     <h3 className="text-sm font-medium text-yellow-800"><RichText tagName="span" value={attributes.contentyhX} default="Attention needed" onChange={ (newtext) =>  {
        setAttributes({ contentyhX: newtext });
      }}
    /></h3>

                    <div className="mt-2 text-sm text-yellow-700">
                        <p>
                            <RichText tagName="span" value={attributes.contentKse} default="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." onChange={ (newtext) => { setAttributes({ contentKse: newtext }); }} /></p>
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
        <div class="rounded-md bg-yellow-50 p-4">
            <div class="flex">
                <div class="flex-shrink-0">
                    
      <svg
         class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFaO }}
        >
      </svg>
      
                </div>
                <div class="ml-3">
                     <h3 class="text-sm font-medium text-yellow-800"><RichText.Content value={attributes.contentyhX} /></h3>

                    <div class="mt-2 text-sm text-yellow-700">
                        <p>
                            <RichText.Content value={attributes.contentKse} /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        