
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/rounded-badges', {
            title: 'rounded badges',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentzku": {
    "type": "string",
    "default": " Badge "
  },
  "contentRna": {
    "type": "string",
    "default": " Badge "
  },
  "contentfwZ": {
    "type": "string",
    "default": " Badge "
  },
  "contentHdp": {
    "type": "string",
    "default": " Badge "
  },
  "contentaQF": {
    "type": "string",
    "default": " Badge "
  },
  "contentoZu": {
    "type": "string",
    "default": " Badge "
  },
  "contentUwT": {
    "type": "string",
    "default": " Badge "
  },
  "contentXSJ": {
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
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"><RichText tagName="span" value={attributes.contentzku} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentzku: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800"><RichText tagName="span" value={attributes.contentRna} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentRna: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800"><RichText tagName="span" value={attributes.contentfwZ} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentfwZ: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800"><RichText tagName="span" value={attributes.contentHdp} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentHdp: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"><RichText tagName="span" value={attributes.contentaQF} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentaQF: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800"><RichText tagName="span" value={attributes.contentoZu} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentoZu: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800"><RichText tagName="span" value={attributes.contentUwT} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentUwT: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-pink-100 text-pink-800"><RichText tagName="span" value={attributes.contentXSJ} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentXSJ: newtext });
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
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"><RichText.Content value={attributes.contentzku} /></span>

<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800"><RichText.Content value={attributes.contentRna} /></span>

<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800"><RichText.Content value={attributes.contentfwZ} /></span>

<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800"><RichText.Content value={attributes.contentHdp} /></span>

<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"><RichText.Content value={attributes.contentaQF} /></span>

<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800"><RichText.Content value={attributes.contentoZu} /></span>

<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800"><RichText.Content value={attributes.contentUwT} /></span>

<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-pink-100 text-pink-800"><RichText.Content value={attributes.contentXSJ} /></span>

    </div>
</div>
            );
            },
        });
        