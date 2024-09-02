
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/stacked-with-avatars', {
            title: 'stacked with avatars',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentVbH": {
    "type": "string",
    "default": "Lindsay Walton"
  },
  "contenttFB": {
    "type": "string",
    "default": "1h"
  },
  "contentDqZ": {
    "type": "string",
    "default": "Deployed Workcation (2d89f0c8 in master) to production"
  },
  "imageurlbjd": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517841905240-472988babdf9.jpeg'
  },
  "imagealtuBU": {
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
        <div>
            <ul role="list" className="divide-y divide-gray-200">
                <li className="py-4">
                    <div className="flex space-x-3">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlbjd: media.url,
            imagealtuBU: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlbjd } 
            alt={ attributes.imagealtuBU } 
            onClick={ open } 
            className="h-6 w-6 rounded-full"
          /> 
        )} 
      />
                        <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                                 <h3 className="text-sm font-medium"><RichText tagName="span" value={attributes.contentVbH} default="Lindsay Walton" onChange={ (newtext) =>  {
        setAttributes({ contentVbH: newtext });
      }}
    /></h3>

                                <p className="text-sm text-gray-500">
                                    <RichText tagName="span" value={attributes.contenttFB} default="1h" onChange={ (newtext) => { setAttributes({ contenttFB: newtext }); }} /></p>
                            </div>
                            <p className="text-sm text-gray-500">
                                <RichText tagName="span" value={attributes.contentDqZ} default="Deployed Workcation (2d89f0c8 in master) to production" onChange={ (newtext) => { setAttributes({ contentDqZ: newtext }); }} /></p>
                        </div>
                    </div>
                </li>
            </ul>
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
            <ul role="list" class="divide-y divide-gray-200">
                <li class="py-4">
                    <div class="flex space-x-3">
                        
      <img
            src={ attributes.imageurlbjd } 
            alt={ attributes.imagealtuBU } 
            class="h-6 w-6 rounded-full"
          />
                        <div class="flex-1 space-y-1">
                            <div class="flex items-center justify-between">
                                 <h3 class="text-sm font-medium"><RichText.Content value={attributes.contentVbH} /></h3>

                                <p class="text-sm text-gray-500">
                                    <RichText.Content value={attributes.contenttFB} /></p>
                            </div>
                            <p class="text-sm text-gray-500">
                                <RichText.Content value={attributes.contentDqZ} /></p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
            );
            },
        });
        