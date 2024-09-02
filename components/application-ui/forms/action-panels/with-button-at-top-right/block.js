
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-button-at-top-right', {
            title: 'with button at top right',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contenteyw": {
    "type": "string",
    "default": "Manage subscription"
  },
  "contentJag": {
    "type": "string",
    "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam."
  },
  "contenttbR": {
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
                <div className="sm:flex sm:items-start sm:justify-between">
                    <div>
                         <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contenteyw} default="Manage subscription" onChange={ (newtext) =>  {
        setAttributes({ contenteyw: newtext });
      }}
    /></h3>

                        <div className="mt-2 max-w-xl text-sm text-gray-500">
                            <p>
                                <RichText tagName="span" value={attributes.contentJag} default="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam." onChange={ (newtext) => { setAttributes({ contentJag: newtext }); }} /></p>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                            <RichText tagName="span" value={attributes.contenttbR} default="Change plan" onChange={ (newtext) => { setAttributes({ contenttbR: newtext }); }} /></button>
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
                <div class="sm:flex sm:items-start sm:justify-between">
                    <div>
                         <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contenteyw} /></h3>

                        <div class="mt-2 max-w-xl text-sm text-gray-500">
                            <p>
                                <RichText.Content value={attributes.contentJag} /></p>
                        </div>
                    </div>
                    <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                            <RichText.Content value={attributes.contenttbR} /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        