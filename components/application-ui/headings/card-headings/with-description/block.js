
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-description', {
            title: 'with description',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentaNc": {
    "type": "string",
    "default": "Job Postings"
  },
  "contentNRU": {
    "type": "string",
    "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur."
  }
},
            edit(props) {
            const { attributes, setAttributes } = props;

            return (
                <div>
                    <InspectorControls>
                    
    <Panel>
      


































































































































































































































































































































































































































































    </Panel>
                    </InspectorControls>

                    <div>
    <div>
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
             <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentaNc} default="Job Postings" onChange={ (newtext) =>  {
        setAttributes({ contentaNc: newtext });
      }}
    /></h3>

            <p className="mt-1 text-sm text-gray-500">
                <RichText tagName="span" value={attributes.contentNRU} default="Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur." onChange={ (newtext) => { setAttributes({ contentNRU: newtext }); }} /></p>
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
        <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
             <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentaNc} /></h3>

            <p class="mt-1 text-sm text-gray-500">
                <RichText.Content value={attributes.contentNRU} /></p>
        </div>
    </div>
</div>
            );
            },
        });
        