
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/input-with-inline-leading-and-trailing-add-ons', {
            title: 'input with inline leading and trailing add ons',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentZvX": {
    "type": "string",
    "default": "Price"
  },
  "contentNpa": {
    "type": "string",
    "default": " USD "
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
                <RichText tagName="span" value={attributes.contentZvX} default="Price" onChange={ (newtext) => { setAttributes({ contentZvX: newtext }); }} /></label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <span className="text-gray-500 sm:text-sm"> $ </span>

                </div>
                <input type="text" name="price" id="price" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" aria-describedby="price-currency"/>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"> <span className="text-gray-500 sm:text-sm" id="price-currency"><RichText tagName="span" value={attributes.contentNpa} default="USD" onChange={ (newtext) =>  {
        setAttributes({ contentNpa: newtext });
      }}
    /></span>

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
                <RichText.Content value={attributes.contentZvX} /></label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <span class="text-gray-500 sm:text-sm"> $ </span>

                </div>
                <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" aria-describedby="price-currency"/>
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"> <span class="text-gray-500 sm:text-sm" id="price-currency"><RichText.Content value={attributes.contentNpa} /></span>

                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        