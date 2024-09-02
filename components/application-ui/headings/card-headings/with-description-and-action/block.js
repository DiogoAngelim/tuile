
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-description-and-action', {
            title: 'with description and action',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentpUZ": {
    "type": "string",
    "default": "Job Postings"
  },
  "contentVCx": {
    "type": "string",
    "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur."
  },
  "contenttME": {
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
            <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                <div className="ml-4 mt-4">
                     <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentpUZ} default="Job Postings" onChange={ (newtext) =>  {
        setAttributes({ contentpUZ: newtext });
      }}
    /></h3>

                    <p className="mt-1 text-sm text-gray-500">
                        <RichText tagName="span" value={attributes.contentVCx} default="Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur." onChange={ (newtext) => { setAttributes({ contentVCx: newtext }); }} /></p>
                </div>
                <div className="ml-4 mt-4 flex-shrink-0">
                    <button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <RichText tagName="span" value={attributes.contenttME} default="Create new job" onChange={ (newtext) => { setAttributes({ contenttME: newtext }); }} /></button>
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
            <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                <div class="ml-4 mt-4">
                     <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentpUZ} /></h3>

                    <p class="mt-1 text-sm text-gray-500">
                        <RichText.Content value={attributes.contentVCx} /></p>
                </div>
                <div class="ml-4 mt-4 flex-shrink-0">
                    <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <RichText.Content value={attributes.contenttME} /></button>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        