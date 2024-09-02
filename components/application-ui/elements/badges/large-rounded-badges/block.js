
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/large-rounded-badges', {
            title: 'large rounded badges',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentnmA": {
    "type": "string",
    "default": " Badge "
  },
  "contentCWn": {
    "type": "string",
    "default": " Badge "
  },
  "contentUuY": {
    "type": "string",
    "default": " Badge "
  },
  "contentiEG": {
    "type": "string",
    "default": " Badge "
  },
  "contentKey": {
    "type": "string",
    "default": " Badge "
  },
  "contentuqT": {
    "type": "string",
    "default": " Badge "
  },
  "contentgpy": {
    "type": "string",
    "default": " Badge "
  },
  "contentwcq": {
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
<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800"><RichText tagName="span" value={attributes.contentnmA} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentnmA: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800"><RichText tagName="span" value={attributes.contentCWn} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentCWn: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800"><RichText tagName="span" value={attributes.contentUuY} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentUuY: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800"><RichText tagName="span" value={attributes.contentiEG} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentiEG: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800"><RichText tagName="span" value={attributes.contentKey} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentKey: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800"><RichText tagName="span" value={attributes.contentuqT} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentuqT: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-purple-100 text-purple-800"><RichText tagName="span" value={attributes.contentgpy} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentgpy: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-pink-100 text-pink-800"><RichText tagName="span" value={attributes.contentwcq} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentwcq: newtext });
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
<span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800"><RichText.Content value={attributes.contentnmA} /></span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800"><RichText.Content value={attributes.contentCWn} /></span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800"><RichText.Content value={attributes.contentUuY} /></span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800"><RichText.Content value={attributes.contentiEG} /></span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800"><RichText.Content value={attributes.contentKey} /></span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800"><RichText.Content value={attributes.contentuqT} /></span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-purple-100 text-purple-800"><RichText.Content value={attributes.contentgpy} /></span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-pink-100 text-pink-800"><RichText.Content value={attributes.contentwcq} /></span>

    </div>
</div>
            );
            },
        });
        