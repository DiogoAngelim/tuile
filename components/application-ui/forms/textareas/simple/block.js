
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple', {
            title: 'simple',
            icon: (<img src="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATMR6yBE8gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPNm+XZ2MF7YbeHa3dix28oiI4+O338/Kv9/gA//9k=" />),
            category: 'common',
            attributes: {
  "contentrFb": {
    "type": "string",
    "default": "Add your comment"
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
        <div>
            <label for="comment" className="block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contentrFb} default="Add your comment" onChange={ (newtext) => { setAttributes({ contentrFb: newtext }); }} /></label>
            <div className="mt-1">
                <textarea rows="4" name="comment" id="comment" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
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
            <label for="comment" class="block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contentrFb} /></label>
            <div class="mt-1">
                <textarea rows="4" name="comment" id="comment" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        