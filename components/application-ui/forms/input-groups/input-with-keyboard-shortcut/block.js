
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/input-with-keyboard-shortcut', {
            title: 'input with keyboard shortcut',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentedC": {
    "type": "string",
    "default": "Quick search"
  },
  "contentjyu": {
    "type": "string",
    "default": " ⌘K "
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
            <label for="search" className="block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contentedC} default="Quick search" onChange={ (newtext) => { setAttributes({ contentedC: newtext }); }} /></label>
            <div className="mt-1 relative flex items-center">
                <input type="text" name="search" id="search" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"/>
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5"> <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400"><RichText tagName="span" value={attributes.contentjyu} default="⌘K" onChange={ (newtext) =>  {
        setAttributes({ contentjyu: newtext });
      }}
    /></kbd>

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
        <div>
            <label for="search" class="block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contentedC} /></label>
            <div class="mt-1 relative flex items-center">
                <input type="text" name="search" id="search" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"/>
                <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5"> <kbd class="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400"><RichText.Content value={attributes.contentjyu} /></kbd>

                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        