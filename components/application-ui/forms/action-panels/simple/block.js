
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple', {
            title: 'simple',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentxIX": {
    "type": "string",
    "default": "Delete your account"
  },
  "contentJeO": {
    "type": "string",
    "default": "Once you delete your account, you will lose all data associated with it."
  },
  "contentsET": {
    "type": "string",
    "default": "Delete account"
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
        <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                 <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentxIX} default="Delete your account" onChange={ (newtext) =>  {
        setAttributes({ contentxIX: newtext });
      }}
    /></h3>

                <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>
                        <RichText tagName="span" value={attributes.contentJeO} default="Once you delete your account, you will lose all data associated with it." onChange={ (newtext) => { setAttributes({ contentJeO: newtext }); }} /></p>
                </div>
                <div className="mt-5">
                    <button type="button" className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">
                        <RichText tagName="span" value={attributes.contentsET} default="Delete account" onChange={ (newtext) => { setAttributes({ contentsET: newtext }); }} /></button>
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
        <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                 <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentxIX} /></h3>

                <div class="mt-2 max-w-xl text-sm text-gray-500">
                    <p>
                        <RichText.Content value={attributes.contentJeO} /></p>
                </div>
                <div class="mt-5">
                    <button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">
                        <RichText.Content value={attributes.contentsET} /></button>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        