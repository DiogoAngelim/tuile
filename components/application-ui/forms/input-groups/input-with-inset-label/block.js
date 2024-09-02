
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/input-with-inset-label', {
            title: 'input with inset label',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentduJ": {
    "type": "string",
    "default": "Name"
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
        <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label for="name" className="block text-xs font-medium text-gray-900">
                <RichText tagName="span" value={attributes.contentduJ} default="Name" onChange={ (newtext) => { setAttributes({ contentduJ: newtext }); }} /></label>
            <input type="text" name="name" id="name" className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Jane Doe"/>
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
        <div class="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label for="name" class="block text-xs font-medium text-gray-900">
                <RichText.Content value={attributes.contentduJ} /></label>
            <input type="text" name="name" id="name" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Jane Doe"/>
        </div>
    </div>
</div>
            );
            },
        });
        