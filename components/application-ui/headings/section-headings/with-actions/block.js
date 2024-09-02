
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-actions', {
            title: 'with actions',
            icon: (<img src="data:image/jpeg;base64,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AEl6TlgXpOWDwMlYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywBWCS9JywL0nLAFYJL0nLAvScsAVgkvScsC9JywB//2Q==" />),
            category: 'common',
            attributes: {
  "contentPJG": {
    "type": "string",
    "default": "Job Postings"
  },
  "contentGrN": {
    "type": "string",
    "default": "Share"
  },
  "contenthLE": {
    "type": "string",
    "default": "Create"
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
        <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
             <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentPJG} default="Job Postings" onChange={ (newtext) =>  {
        setAttributes({ contentPJG: newtext });
      }}
    /></h3>

            <div className="mt-3 flex sm:mt-0 sm:ml-4">
                <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <RichText tagName="span" value={attributes.contentGrN} default="Share" onChange={ (newtext) => { setAttributes({ contentGrN: newtext }); }} /></button>
                <button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <RichText tagName="span" value={attributes.contenthLE} default="Create" onChange={ (newtext) => { setAttributes({ contenthLE: newtext }); }} /></button>
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
        <div class="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
             <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentPJG} /></h3>

            <div class="mt-3 flex sm:mt-0 sm:ml-4">
                <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <RichText.Content value={attributes.contentGrN} /></button>
                <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <RichText.Content value={attributes.contenthLE} /></button>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        