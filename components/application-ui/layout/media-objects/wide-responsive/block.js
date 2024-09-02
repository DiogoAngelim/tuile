
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/wide-responsive', {
            title: 'wide responsive',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentgkB": {
    "type": "string",
    "default": "Lorem ipsum"
  },
  "contentGBP": {
    "type": "string",
    "default": "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto."
  },
  "svgFmv": {
    "type": "string",
    "default": "<path vector-effect=\"non-scaling-stroke\" stroke-width=\"1\" d=\"M0 0l200 200M0 200L200 0\"/>"
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
            value={ attributes.svgFmv }
            onChange={ ( value ) => {
              setAttributes({ svgFmv: value });
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
        <div className="sm:flex">
            <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                
      <svg
         className="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFmv }}
        >
      </svg>
      
            </div>
            <div>
                 <h4 className="text-lg font-bold"><RichText tagName="span" value={attributes.contentgkB} default="Lorem ipsum" onChange={ (newtext) =>  {
        setAttributes({ contentgkB: newtext });
      }}
    /></h4>

                <p className="mt-1">
                    <RichText tagName="span" value={attributes.contentGBP} default="Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto." onChange={ (newtext) => { setAttributes({ contentGBP: newtext }); }} /></p>
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
        <div class="sm:flex">
            <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                
      <svg
         class="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFmv }}
        >
      </svg>
      
            </div>
            <div>
                 <h4 class="text-lg font-bold"><RichText.Content value={attributes.contentgkB} /></h4>

                <p class="mt-1">
                    <RichText.Content value={attributes.contentGBP} /></p>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        