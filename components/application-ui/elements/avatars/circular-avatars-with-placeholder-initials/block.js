
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/circular-avatars-with-placeholder-initials', {
            title: 'circular avatars with placeholder initials',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentQJn": {
    "type": "string",
    "default": "TW"
  },
  "contentpOQ": {
    "type": "string",
    "default": "TW"
  },
  "contentDCX": {
    "type": "string",
    "default": "TW"
  },
  "contentPyN": {
    "type": "string",
    "default": "TW"
  },
  "contentrME": {
    "type": "string",
    "default": "TW"
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
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-500">
  <span className="text-xs font-medium leading-none text-white"><RichText tagName="span" value={attributes.contentQJn} default="TW" onChange={ (newtext) =>  {
        setAttributes({ contentQJn: newtext });
      }}
    /></span>
</span>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-500">
  <span className="text-sm font-medium leading-none text-white"><RichText tagName="span" value={attributes.contentpOQ} default="TW" onChange={ (newtext) =>  {
        setAttributes({ contentpOQ: newtext });
      }}
    /></span>
</span>
<span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">
  <span className="font-medium leading-none text-white"><RichText tagName="span" value={attributes.contentDCX} default="TW" onChange={ (newtext) =>  {
        setAttributes({ contentDCX: newtext });
      }}
    /></span>
</span>
<span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-500">
  <span className="text-lg font-medium leading-none text-white"><RichText tagName="span" value={attributes.contentPyN} default="TW" onChange={ (newtext) =>  {
        setAttributes({ contentPyN: newtext });
      }}
    /></span>
</span>
<span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-500">
  <span className="text-xl font-medium leading-none text-white"><RichText tagName="span" value={attributes.contentrME} default="TW" onChange={ (newtext) =>  {
        setAttributes({ contentrME: newtext });
      }}
    /></span>
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
<span class="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-500">
  <span class="text-xs font-medium leading-none text-white"><RichText.Content value={attributes.contentQJn} /></span>
</span>
<span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-500">
  <span class="text-sm font-medium leading-none text-white"><RichText.Content value={attributes.contentpOQ} /></span>
</span>
<span class="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">
  <span class="font-medium leading-none text-white"><RichText.Content value={attributes.contentDCX} /></span>
</span>
<span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-500">
  <span class="text-lg font-medium leading-none text-white"><RichText.Content value={attributes.contentPyN} /></span>
</span>
<span class="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-500">
  <span class="text-xl font-medium leading-none text-white"><RichText.Content value={attributes.contentrME} /></span>
</span>
    </div>
</div>
            );
            },
        });
        