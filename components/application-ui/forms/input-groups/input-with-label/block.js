
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/input-with-label', {
            title: 'input with label',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentTXl": {
    "type": "string",
    "default": "Email"
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
            <label for="email" className="block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contentTXl} default="Email" onChange={ (newtext) => { setAttributes({ contentTXl: newtext }); }} /></label>
            <div className="mt-1">
                <input type="email" name="email" id="email" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"/>
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
            <label for="email" class="block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contentTXl} /></label>
            <div class="mt-1">
                <input type="email" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"/>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        