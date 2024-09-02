
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-actions-on-dark', {
            title: 'with actions on dark',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentkXA": {
    "type": "string",
    "default": "Back End Developer"
  },
  "contentCMU": {
    "type": "string",
    "default": "Edit"
  },
  "contentjSk": {
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
                 <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate"><RichText tagName="span" value={attributes.contentkXA} default="Back End Developer" onChange={ (newtext) =>  {
        setAttributes({ contentkXA: newtext });
      }}
    /></h2>

            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
                <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                    <RichText tagName="span" value={attributes.contentCMU} default="Edit" onChange={ (newtext) => { setAttributes({ contentCMU: newtext }); }} /></button>
                <button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                    <RichText tagName="span" value={attributes.contentjSk} default="Publish" onChange={ (newtext) => { setAttributes({ contentjSk: newtext }); }} /></button>
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
                 <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate"><RichText.Content value={attributes.contentkXA} /></h2>

            </div>
            <div class="mt-4 flex md:mt-0 md:ml-4">
                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                    <RichText.Content value={attributes.contentCMU} /></button>
                <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                    <RichText.Content value={attributes.contentjSk} /></button>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        