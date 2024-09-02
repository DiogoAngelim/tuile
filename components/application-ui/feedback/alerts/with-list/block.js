
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-list', {
            title: 'with list',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contenteMg": {
    "type": "string",
    "default": "There were 2 errors with your submission"
  },
  "contentvxf": {
    "type": "string",
    "default": "Your password must be at least 8 characters"
  },
  "contentFXv": {
    "type": "string",
    "default": "Your password must include at least one pro wrestling finishing move"
  },
  "svguii": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svguii }
            onChange={ ( value ) => {
              setAttributes({ svguii: value });
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
        <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    
      <svg
         className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguii }}
        >
      </svg>
      
                </div>
                <div className="ml-3">
                     <h3 className="text-sm font-medium text-red-800"><RichText tagName="span" value={attributes.contenteMg} default="There were 2 errors with your submission" onChange={ (newtext) =>  {
        setAttributes({ contenteMg: newtext });
      }}
    /></h3>

                    <div className="mt-2 text-sm text-red-700">
                        <ul role="list" className="list-disc pl-5 space-y-1">
                            <li>
                                <RichText tagName="span" value={attributes.contentvxf} default="Your password must be at least 8 characters" onChange={ (newtext) => { setAttributes({ contentvxf: newtext }); }} /></li>
                            <li>
                                <RichText tagName="span" value={attributes.contentFXv} default="Your password must include at least one pro wrestling finishing move" onChange={ (newtext) => { setAttributes({ contentFXv: newtext }); }} /></li>
                        </ul>
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
        <div class="rounded-md bg-red-50 p-4">
            <div class="flex">
                <div class="flex-shrink-0">
                    
      <svg
         class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguii }}
        >
      </svg>
      
                </div>
                <div class="ml-3">
                     <h3 class="text-sm font-medium text-red-800"><RichText.Content value={attributes.contenteMg} /></h3>

                    <div class="mt-2 text-sm text-red-700">
                        <ul role="list" class="list-disc pl-5 space-y-1">
                            <li>
                                <RichText.Content value={attributes.contentvxf} /></li>
                            <li>
                                <RichText.Content value={attributes.contentFXv} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        