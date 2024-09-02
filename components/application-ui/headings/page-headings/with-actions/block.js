
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-actions', {
            title: 'with actions',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentaLc": {
    "type": "string",
    "default": "Back End Developer"
  },
  "contentFwY": {
    "type": "string",
    "default": "Edit"
  },
  "contentyOM": {
    "type": "string",
    "default": "Publish"
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
        <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
                 <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"><RichText tagName="span" value={attributes.contentaLc} default="Back End Developer" onChange={ (newtext) =>  {
        setAttributes({ contentaLc: newtext });
      }}
    /></h2>

            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
                <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <RichText tagName="span" value={attributes.contentFwY} default="Edit" onChange={ (newtext) => { setAttributes({ contentFwY: newtext }); }} /></button>
                <button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <RichText tagName="span" value={attributes.contentyOM} default="Publish" onChange={ (newtext) => { setAttributes({ contentyOM: newtext }); }} /></button>
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
        <div class="md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
                 <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"><RichText.Content value={attributes.contentaLc} /></h2>

            </div>
            <div class="mt-4 flex md:mt-0 md:ml-4">
                <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <RichText.Content value={attributes.contentFwY} /></button>
                <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <RichText.Content value={attributes.contentyOM} /></button>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        