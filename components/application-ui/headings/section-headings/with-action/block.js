
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-action', {
            title: 'with action',
            icon: (<img src="data:image/jpeg;base64,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Jeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAKwSXpMuBeky4ArBJeky4F6TLgCsEl6TLgXpMuAP/9k=" />),
            category: 'common',
            attributes: {
  "contentxdc": {
    "type": "string",
    "default": "Job Postings"
  },
  "contenthuF": {
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
        <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
             <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentxdc} default="Job Postings" onChange={ (newtext) =>  {
        setAttributes({ contentxdc: newtext });
      }}
    /></h3>

            <div className="mt-3 sm:mt-0 sm:ml-4">
                <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <RichText tagName="span" value={attributes.contenthuF} default="Create new job" onChange={ (newtext) => { setAttributes({ contenthuF: newtext }); }} /></button>
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
             <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentxdc} /></h3>

            <div class="mt-3 sm:mt-0 sm:ml-4">
                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <RichText.Content value={attributes.contenthuF} /></button>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        