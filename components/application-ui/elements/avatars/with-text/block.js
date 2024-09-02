
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-text', {
            title: 'with text',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contenttXu": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentShR": {
    "type": "string",
    "default": "View profile"
  },
  "imageurlaBy": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtuDY": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
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
<span className="flex-shrink-0 group block">
  <div className="flex items-center">
    <div>
      
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlaBy: media.url,
            imagealtuDY: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlaBy } 
            alt={ attributes.imagealtuDY } 
            onClick={ open } 
            className="inline-block h-9 w-9 rounded-full"
          /> 
        )} 
      />
    </div>
    <div className="ml-3">
      <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900"><RichText tagName="span" value={attributes.contenttXu} default="Tom Cook" onChange={ (newtext) =>  {
        setAttributes({ contenttXu: newtext });
      }}
    /></p>
      <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700"><RichText tagName="span" value={attributes.contentShR} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentShR: newtext });
      }}
    /></p>
    </div>
  </div>
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
<span class="flex-shrink-0 group block">
  <div class="flex items-center">
    <div>
      
      <img
            src={ attributes.imageurlaBy } 
            alt={ attributes.imagealtuDY } 
            class="inline-block h-9 w-9 rounded-full"
          />
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900"><RichText.Content value={attributes.contenttXu} /></p>
      <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700"><RichText.Content value={attributes.contentShR} /></p>
    </div>
  </div>
</span>

    </div>
</div>
            );
            },
        });
        