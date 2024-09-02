
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/input-with-pill-shape', {
            title: 'input with pill shape',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentanT": {
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
        <div>
            <label for="name" className="ml-px pl-4 block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contentanT} default="Name" onChange={ (newtext) => { setAttributes({ contentanT: newtext }); }} /></label>
            <div className="mt-1">
                <input type="text" name="name" id="name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full" placeholder="Jane Doe"/>
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
            <label for="name" class="ml-px pl-4 block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contentanT} /></label>
            <div class="mt-1">
                <input type="text" name="name" id="name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full" placeholder="Jane Doe"/>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        