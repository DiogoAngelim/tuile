
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-native', {
            title: 'simple native',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentmMK": {
    "type": "string",
    "default": "Location"
  },
  "contentAUq": {
    "type": "string",
    "default": "United States"
  },
  "contentkKw": {
    "type": "string",
    "default": "Canada"
  },
  "contentCsX": {
    "type": "string",
    "default": "Mexico"
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
            <label for="location" className="block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contentmMK} default="Location" onChange={ (newtext) => { setAttributes({ contentmMK: newtext }); }} /></label>
            <select id="location" name="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>
                    <RichText tagName="span" value={attributes.contentAUq} default="United States" onChange={ (newtext) => { setAttributes({ contentAUq: newtext }); }} /></option>
                <option selected="">
                    <RichText tagName="span" value={attributes.contentkKw} default="Canada" onChange={ (newtext) => { setAttributes({ contentkKw: newtext }); }} /></option>
                <option>
                    <RichText tagName="span" value={attributes.contentCsX} default="Mexico" onChange={ (newtext) => { setAttributes({ contentCsX: newtext }); }} /></option>
            </select>
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
            <label for="location" class="block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contentmMK} /></label>
            <select id="location" name="location" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>
                    <RichText.Content value={attributes.contentAUq} /></option>
                <option selected="">
                    <RichText.Content value={attributes.contentkKw} /></option>
                <option>
                    <RichText.Content value={attributes.contentCsX} /></option>
            </select>
        </div>
    </div>
</div>
            );
            },
        });
        