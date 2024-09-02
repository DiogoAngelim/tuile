
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-right-label', {
            title: 'with right label',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentcmz": {
    "type": "string",
    "default": "Annual billing "
  },
  "contenthpE": {
    "type": "string",
    "default": "(Save 10%)"
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
        <div className="flex items-center">
            <button type="button" className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" aria-labelledby="annual-billing-label"> <span aria-hidden="true" className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"/>

            </button> <span className="ml-3" id="annual-billing-label">
    <span className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentcmz} default="Annual billing" onChange={ (newtext) =>  {
        setAttributes({ contentcmz: newtext });
      }}
    /></span>
 <span className="text-sm text-gray-500"><RichText tagName="span" value={attributes.contenthpE} default="(Save 10%)" onChange={ (newtext) =>  {
        setAttributes({ contenthpE: newtext });
      }}
    /></span>
</span>
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
        <div class="flex items-center">
            <button type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" aria-labelledby="annual-billing-label"> <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"/>

            </button> <span class="ml-3" id="annual-billing-label">
    <span class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentcmz} /></span>
 <span class="text-sm text-gray-500"><RichText.Content value={attributes.contenthpE} /></span>
</span>
        </div>
    </div>
</div>
            );
            },
        });
        