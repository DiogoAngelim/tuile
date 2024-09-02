
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-button-on-right', {
            title: 'with button on right',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentxoO": {
    "type": "string",
    "default": "Manage subscription"
  },
  "contentfym": {
    "type": "string",
    "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam."
  },
  "contentabE": {
    "type": "string",
    "default": "Change plan"
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
                 <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentxoO} default="Manage subscription" onChange={ (newtext) =>  {
        setAttributes({ contentxoO: newtext });
      }}
    /></h3>

                <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                    <div className="max-w-xl text-sm text-gray-500">
                        <p>
                            <RichText tagName="span" value={attributes.contentfym} default="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam." onChange={ (newtext) => { setAttributes({ contentfym: newtext }); }} /></p>
                    </div>
                    <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                            <RichText tagName="span" value={attributes.contentabE} default="Change plan" onChange={ (newtext) => { setAttributes({ contentabE: newtext }); }} /></button>
                    </div>
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
                 <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentxoO} /></h3>

                <div class="mt-2 sm:flex sm:items-start sm:justify-between">
                    <div class="max-w-xl text-sm text-gray-500">
                        <p>
                            <RichText.Content value={attributes.contentfym} /></p>
                    </div>
                    <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                            <RichText.Content value={attributes.contentabE} /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        