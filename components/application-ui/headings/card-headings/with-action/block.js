
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-action', {
            title: 'with action',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentqAO": {
    "type": "string",
    "default": "Job Postings"
  },
  "contentDvl": {
    "type": "string",
    "default": "Create new job"
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
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                <div className="ml-4 mt-2">
                     <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentqAO} default="Job Postings" onChange={ (newtext) =>  {
        setAttributes({ contentqAO: newtext });
      }}
    /></h3>

                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                    <button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <RichText tagName="span" value={attributes.contentDvl} default="Create new job" onChange={ (newtext) => { setAttributes({ contentDvl: newtext }); }} /></button>
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
        <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                <div class="ml-4 mt-2">
                     <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentqAO} /></h3>

                </div>
                <div class="ml-4 mt-2 flex-shrink-0">
                    <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <RichText.Content value={attributes.contentDvl} /></button>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        