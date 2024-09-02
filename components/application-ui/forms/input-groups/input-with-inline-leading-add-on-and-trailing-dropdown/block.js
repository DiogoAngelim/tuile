
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/input-with-inline-leading-add-on-and-trailing-dropdown', {
            title: 'input with inline leading add on and trailing dropdown',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentFey": {
    "type": "string",
    "default": "Price"
  },
  "contentvWt": {
    "type": "string",
    "default": "Currency"
  },
  "contentNxA": {
    "type": "string",
    "default": "USD"
  },
  "contentYzC": {
    "type": "string",
    "default": "CAD"
  },
  "contentZvp": {
    "type": "string",
    "default": "EUR"
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
            <label for="price" className="block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contentFey} default="Price" onChange={ (newtext) => { setAttributes({ contentFey: newtext }); }} /></label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <span className="text-gray-500 sm:text-sm"> $ </span>

                </div>
                <input type="text" name="price" id="price" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00"/>
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <label for="currency" className="sr-only">
                        <RichText tagName="span" value={attributes.contentvWt} default="Currency" onChange={ (newtext) => { setAttributes({ contentvWt: newtext }); }} /></label>
                    <select id="currency" name="currency" className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                        <option>
                            <RichText tagName="span" value={attributes.contentNxA} default="USD" onChange={ (newtext) => { setAttributes({ contentNxA: newtext }); }} /></option>
                        <option>
                            <RichText tagName="span" value={attributes.contentYzC} default="CAD" onChange={ (newtext) => { setAttributes({ contentYzC: newtext }); }} /></option>
                        <option>
                            <RichText tagName="span" value={attributes.contentZvp} default="EUR" onChange={ (newtext) => { setAttributes({ contentZvp: newtext }); }} /></option>
                    </select>
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
            <label for="price" class="block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contentFey} /></label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <span class="text-gray-500 sm:text-sm"> $ </span>

                </div>
                <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00"/>
                <div class="absolute inset-y-0 right-0 flex items-center">
                    <label for="currency" class="sr-only">
                        <RichText.Content value={attributes.contentvWt} /></label>
                    <select id="currency" name="currency" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                        <option>
                            <RichText.Content value={attributes.contentNxA} /></option>
                        <option>
                            <RichText.Content value={attributes.contentYzC} /></option>
                        <option>
                            <RichText.Content value={attributes.contentZvp} /></option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        