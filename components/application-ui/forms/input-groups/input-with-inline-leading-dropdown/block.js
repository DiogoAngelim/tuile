
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/input-with-inline-leading-dropdown', {
            title: 'input with inline leading dropdown',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentyhv": {
    "type": "string",
    "default": "Phone Number"
  },
  "contentXJn": {
    "type": "string",
    "default": "Country"
  },
  "contentXdK": {
    "type": "string",
    "default": "US"
  },
  "contentRlU": {
    "type": "string",
    "default": "CA"
  },
  "contentPoL": {
    "type": "string",
    "default": "EU"
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
            <label for="phone-number" className="block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contentyhv} default="Phone Number" onChange={ (newtext) => { setAttributes({ contentyhv: newtext }); }} /></label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                    <label for="country" className="sr-only">
                        <RichText tagName="span" value={attributes.contentXJn} default="Country" onChange={ (newtext) => { setAttributes({ contentXJn: newtext }); }} /></label>
                    <select id="country" name="country" autocomplete="country" className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                        <option>
                            <RichText tagName="span" value={attributes.contentXdK} default="US" onChange={ (newtext) => { setAttributes({ contentXdK: newtext }); }} /></option>
                        <option>
                            <RichText tagName="span" value={attributes.contentRlU} default="CA" onChange={ (newtext) => { setAttributes({ contentRlU: newtext }); }} /></option>
                        <option>
                            <RichText tagName="span" value={attributes.contentPoL} default="EU" onChange={ (newtext) => { setAttributes({ contentPoL: newtext }); }} /></option>
                    </select>
                </div>
                <input type="text" name="phone-number" id="phone-number" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md" placeholder="+1 (555) 987-6543"/>
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
            <label for="phone-number" class="block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contentyhv} /></label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 flex items-center">
                    <label for="country" class="sr-only">
                        <RichText.Content value={attributes.contentXJn} /></label>
                    <select id="country" name="country" autocomplete="country" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                        <option>
                            <RichText.Content value={attributes.contentXdK} /></option>
                        <option>
                            <RichText.Content value={attributes.contentRlU} /></option>
                        <option>
                            <RichText.Content value={attributes.contentPoL} /></option>
                    </select>
                </div>
                <input type="text" name="phone-number" id="phone-number" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md" placeholder="+1 (555) 987-6543"/>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        