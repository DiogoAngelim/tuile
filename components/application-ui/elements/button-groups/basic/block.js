
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/basic', {
            title: 'basic',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentYBp": {
    "type": "string",
    "default": "Years"
  },
  "contentnHS": {
    "type": "string",
    "default": "Months"
  },
  "contentkYB": {
    "type": "string",
    "default": "Days"
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
<span className="relative z-0 inline-flex shadow-sm rounded-md">
  <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"><RichText tagName="span" value={attributes.contentYBp} default="Years" onChange={ (newtext) =>  {
        setAttributes({ contentYBp: newtext });
      }}
    /></button>
  <button type="button" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"><RichText tagName="span" value={attributes.contentnHS} default="Months" onChange={ (newtext) =>  {
        setAttributes({ contentnHS: newtext });
      }}
    /></button>
  <button type="button" className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"><RichText tagName="span" value={attributes.contentkYB} default="Days" onChange={ (newtext) =>  {
        setAttributes({ contentkYB: newtext });
      }}
    /></button>
</span>

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
<span class="relative z-0 inline-flex shadow-sm rounded-md">
  <button type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"><RichText.Content value={attributes.contentYBp} /></button>
  <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"><RichText.Content value={attributes.contentnHS} /></button>
  <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"><RichText.Content value={attributes.contentkYB} /></button>
</span>

    </div>
</div>
            );
            },
        });
        