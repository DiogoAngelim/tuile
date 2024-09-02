
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/grid-with-round-images', {
            title: 'grid with round images',
            icon: (<img src="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=" />),
            category: 'common',
            attributes: {
  "contentBYy": {
    "type": "string",
    "default": "The People"
  },
  "contentFmG": {
    "type": "string",
    "default": "Risus velit condimentum vitae tincidunt tincidunt. Mauris ridiculus fusce amet urna nunc. Ut nisl ornare diam in."
  },
  "contentHnb": {
    "type": "string",
    "default": "Michael Foster"
  },
  "contentiob": {
    "type": "string",
    "default": "Co-Founder / CTO"
  },
  "imageurlbrJ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1519244703995-f4e0f30006d5.jpeg'
  },
  "imagealtRYc": {
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
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-8 sm:space-y-12">
                    <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                         <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl"><RichText tagName="span" value={attributes.contentBYy} default="The People" onChange={ (newtext) =>  {
        setAttributes({ contentBYy: newtext });
      }}
    /></h2>

                        <p className="text-xl text-gray-500">
                            <RichText tagName="span" value={attributes.contentFmG} default="Risus velit condimentum vitae tincidunt tincidunt. Mauris ridiculus fusce amet urna nunc. Ut nisl ornare diam in." onChange={ (newtext) => { setAttributes({ contentFmG: newtext }); }} /></p>
                    </div>
                    <ul role="list" className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
                        <li>
                            <div className="space-y-4">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlbrJ: media.url,
            imagealtRYc: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlbrJ } 
            alt={ attributes.imagealtRYc } 
            onClick={ open } 
            className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
          /> 
        )} 
      />
                                <div className="space-y-2">
                                    <div className="text-xs font-medium lg:text-sm">
                                         <h3><RichText tagName="span" value={attributes.contentHnb} default="Michael Foster" onChange={ (newtext) =>  {
        setAttributes({ contentHnb: newtext });
      }}
    /></h3>

                                        <p className="text-indigo-600">
                                            <RichText tagName="span" value={attributes.contentiob} default="Co-Founder / CTO" onChange={ (newtext) => { setAttributes({ contentiob: newtext }); }} /></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
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
        <div class="bg-white">
            <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                <div class="space-y-8 sm:space-y-12">
                    <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                         <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl"><RichText.Content value={attributes.contentBYy} /></h2>

                        <p class="text-xl text-gray-500">
                            <RichText.Content value={attributes.contentFmG} /></p>
                    </div>
                    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
                        <li>
                            <div class="space-y-4">
                                
      <img
            src={ attributes.imageurlbrJ } 
            alt={ attributes.imagealtRYc } 
            class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
          />
                                <div class="space-y-2">
                                    <div class="text-xs font-medium lg:text-sm">
                                         <h3><RichText.Content value={attributes.contentHnb} /></h3>

                                        <p class="text-indigo-600">
                                            <RichText.Content value={attributes.contentiob} /></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        