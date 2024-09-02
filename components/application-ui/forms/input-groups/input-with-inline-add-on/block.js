
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/input-with-inline-add-on', {
            title: 'input with inline add on',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contenthhO": {
    "type": "string",
    "default": "Company Website"
  },
  "contentKYV": {
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
                <RichText tagName="span" value={attributes.contenthhO} default="Company Website" onChange={ (newtext) => { setAttributes({ contenthhO: newtext }); }} /></label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <span className="text-gray-500 sm:text-sm"><RichText tagName="span" value={attributes.contentKYV} default="http://" onChange={ (newtext) =>  {
        setAttributes({ contentKYV: newtext });
      }}
    /></span>

                </div>
                <input type="text" name="company-website" id="company-website" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:pl-14 sm:text-sm border-gray-300 rounded-md" placeholder="www.example.com"/>
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
                <RichText.Content value={attributes.contenthhO} /></label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <span class="text-gray-500 sm:text-sm"><RichText.Content value={attributes.contentKYV} /></span>

                </div>
                <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:pl-14 sm:text-sm border-gray-300 rounded-md" placeholder="www.example.com"/>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        