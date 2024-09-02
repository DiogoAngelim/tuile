
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/input-with-add-on', {
            title: 'input with add on',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentgAM": {
    "type": "string",
    "default": " Company Website "
  },
  "contentGYV": {
    "type": "string",
    "default": " http:// "
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
            <label for="company-website" className="block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contentgAM} default="Company Website" onChange={ (newtext) => { setAttributes({ contentgAM: newtext }); }} /></label>
            <div className="mt-1 flex rounded-md shadow-sm"> <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"><RichText tagName="span" value={attributes.contentGYV} default="http://" onChange={ (newtext) =>  {
        setAttributes({ contentGYV: newtext });
      }}
    /></span>

                <input type="text" name="company-website" id="company-website" className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300" placeholder="www.example.com"/>
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
            <label for="company-website" class="block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contentgAM} /></label>
            <div class="mt-1 flex rounded-md shadow-sm"> <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"><RichText.Content value={attributes.contentGYV} /></span>

                <input type="text" name="company-website" id="company-website" class="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300" placeholder="www.example.com"/>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        