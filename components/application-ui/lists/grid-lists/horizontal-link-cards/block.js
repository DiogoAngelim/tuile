
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/horizontal-link-cards', {
            title: 'horizontal link cards',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentmDf": {
    "type": "string",
    "default": "Leslie Alexander"
  },
  "contentKvT": {
    "type": "string",
    "default": "Co-Founder / CEO"
  },
  "imageurldbN": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1494790108377-be9c29b29330.jpeg'
  },
  "imagealtZmy": {
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurldbN: media.url,
            imagealtZmy: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurldbN } 
            alt={ attributes.imagealtZmy } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                </div>
                <div className="flex-1 min-w-0"> <span className="focus:outline-none">
        <span className="absolute inset-0" aria-hidden="true"/>

                    <p className="text-sm font-medium text-gray-900">
                        <RichText tagName="span" value={attributes.contentmDf} default="Leslie Alexander" onChange={ (newtext) => { setAttributes({ contentmDf: newtext }); }} /></p>
                            <p className="text-sm text-gray-500 truncate">
                                <RichText tagName="span" value={attributes.contentKvT} default="Co-Founder / CEO" onChange={ (newtext) => { setAttributes({ contentKvT: newtext }); }} /></p>
                            </span>
                </div>
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
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurldbN } 
            alt={ attributes.imagealtZmy } 
            class="h-10 w-10 rounded-full"
          />
                </div>
                <div class="flex-1 min-w-0"> <span class="focus:outline-none">
        <span class="absolute inset-0" aria-hidden="true"/>

                    <p class="text-sm font-medium text-gray-900">
                        <RichText.Content value={attributes.contentmDf} /></p>
                            <p class="text-sm text-gray-500 truncate">
                                <RichText.Content value={attributes.contentKvT} /></p>
                            </span>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        