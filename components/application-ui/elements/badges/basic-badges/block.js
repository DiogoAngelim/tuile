
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/basic-badges', {
            title: 'basic badges',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentHDa": {
    "type": "string",
    "default": " Badge "
  },
  "contentinD": {
    "type": "string",
    "default": " Badge "
  },
  "contentwTo": {
    "type": "string",
    "default": " Badge "
  },
  "contenthSN": {
    "type": "string",
    "default": " Badge "
  },
  "contentCuV": {
    "type": "string",
    "default": " Badge "
  },
  "contentROV": {
    "type": "string",
    "default": " Badge "
  },
  "contentvWc": {
    "type": "string",
    "default": " Badge "
  },
  "contentdKx": {
    "type": "string",
    "default": " Badge "
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
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"><RichText tagName="span" value={attributes.contentHDa} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentHDa: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"><RichText tagName="span" value={attributes.contentinD} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentinD: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"><RichText tagName="span" value={attributes.contentwTo} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentwTo: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><RichText tagName="span" value={attributes.contenthSN} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contenthSN: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"><RichText tagName="span" value={attributes.contentCuV} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentCuV: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"><RichText tagName="span" value={attributes.contentROV} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentROV: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"><RichText tagName="span" value={attributes.contentvWc} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentvWc: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800"><RichText tagName="span" value={attributes.contentdKx} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentdKx: newtext });
      }}
    /></span>

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
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"><RichText.Content value={attributes.contentHDa} /></span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"><RichText.Content value={attributes.contentinD} /></span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"><RichText.Content value={attributes.contentwTo} /></span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><RichText.Content value={attributes.contenthSN} /></span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"><RichText.Content value={attributes.contentCuV} /></span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"><RichText.Content value={attributes.contentROV} /></span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"><RichText.Content value={attributes.contentvWc} /></span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800"><RichText.Content value={attributes.contentdKx} /></span>

    </div>
</div>
            );
            },
        });
        