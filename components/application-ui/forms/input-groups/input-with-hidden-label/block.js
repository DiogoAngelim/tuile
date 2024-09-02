
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/input-with-hidden-label', {
            title: 'input with hidden label',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentquN": {
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
            <label for="email" className="sr-only">
                <RichText tagName="span" value={attributes.contentquN} default="Email" onChange={ (newtext) => { setAttributes({ contentquN: newtext }); }} /></label>
            <input type="email" name="email" id="email" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"/>
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
            <label for="email" class="sr-only">
                <RichText.Content value={attributes.contentquN} /></label>
            <input type="email" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"/>
        </div>
    </div>
</div>
            );
            },
        });
        