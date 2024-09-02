
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple', {
            title: 'simple',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentStd": {
    "type": "string",
    "default": "Last 30 days"
  },
  "contentcOr": {
    "type": "string",
    "default": "Total Subscribers"
  },
  "contentWHG": {
    "type": "string",
    "default": "71,897"
  },
  "contentvfF": {
    "type": "string",
    "default": "Avg. Open Rate"
  },
  "contentDSE": {
    "type": "string",
    "default": "58.16%"
  },
  "contentLgl": {
    "type": "string",
    "default": "Avg. Click Rate"
  },
  "contenteoU": {
    "type": "string",
    "default": "24.57%"
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
        <div>
             <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentStd} default="Last 30 days" onChange={ (newtext) =>  {
        setAttributes({ contentStd: newtext });
      }}
    /></h3>

            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"> <dt className="text-sm font-medium text-gray-500 truncate"><RichText tagName="span" value={attributes.contentcOr} default="Total Subscribers" onChange={ (newtext) =>  {
        setAttributes({ contentcOr: newtext });
      }}
    /></dt>

                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                        <RichText tagName="span" value={attributes.contentWHG} default="71,897" onChange={ (newtext) => { setAttributes({ contentWHG: newtext }); }} /></dd>
                </div>
                <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"> <dt className="text-sm font-medium text-gray-500 truncate"><RichText tagName="span" value={attributes.contentvfF} default="Avg. Open Rate" onChange={ (newtext) =>  {
        setAttributes({ contentvfF: newtext });
      }}
    /></dt>

                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                        <RichText tagName="span" value={attributes.contentDSE} default="58.16%" onChange={ (newtext) => { setAttributes({ contentDSE: newtext }); }} /></dd>
                </div>
                <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"> <dt className="text-sm font-medium text-gray-500 truncate"><RichText tagName="span" value={attributes.contentLgl} default="Avg. Click Rate" onChange={ (newtext) =>  {
        setAttributes({ contentLgl: newtext });
      }}
    /></dt>

                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                        <RichText tagName="span" value={attributes.contenteoU} default="24.57%" onChange={ (newtext) => { setAttributes({ contenteoU: newtext }); }} /></dd>
                </div>
            </dl>
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
        <div>
             <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentStd} /></h3>

            <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"> <dt class="text-sm font-medium text-gray-500 truncate"><RichText.Content value={attributes.contentcOr} /></dt>

                    <dd class="mt-1 text-3xl font-semibold text-gray-900">
                        <RichText.Content value={attributes.contentWHG} /></dd>
                </div>
                <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"> <dt class="text-sm font-medium text-gray-500 truncate"><RichText.Content value={attributes.contentvfF} /></dt>

                    <dd class="mt-1 text-3xl font-semibold text-gray-900">
                        <RichText.Content value={attributes.contentDSE} /></dd>
                </div>
                <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"> <dt class="text-sm font-medium text-gray-500 truncate"><RichText.Content value={attributes.contentLgl} /></dt>

                    <dd class="mt-1 text-3xl font-semibold text-gray-900">
                        <RichText.Content value={attributes.contenteoU} /></dd>
                </div>
            </dl>
        </div>
    </div>
</div>
            );
            },
        });
        