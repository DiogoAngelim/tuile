
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-stacked', {
            title: 'simple stacked',
            icon: (<img src="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z" />),
            category: 'common',
            attributes: {
  "contentlGH": {
    "type": "string",
    "default": "Ready to dive in?"
  },
  "contentyaA": {
    "type": "string",
    "default": "Start your free trial today."
  },
  "contentQRT": {
    "type": "string",
    "default": " Get started "
  },
  "contentOBx": {
    "type": "string",
    "default": " Learn more "
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
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
                 <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span className="block"><RichText tagName="span" value={attributes.contentlGH} default="Ready to dive in?" onChange={ (newtext) =>  {
        setAttributes({ contentlGH: newtext });
      }}
    /></span>
      <span className="block text-indigo-600"><RichText tagName="span" value={attributes.contentyaA} default="Start your free trial today." onChange={ (newtext) =>  {
        setAttributes({ contentyaA: newtext });
      }}
    /></span>
    </h2>

                <div className="mt-8 flex">
                    <div className="inline-flex rounded-md shadow"> <span className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"><RichText tagName="span" value={attributes.contentQRT} default="Get started" onChange={ (newtext) =>  {
        setAttributes({ contentQRT: newtext });
      }}
    /></span>

                    </div>
                    <div className="ml-3 inline-flex"> <span className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"><RichText tagName="span" value={attributes.contentOBx} default="Learn more" onChange={ (newtext) =>  {
        setAttributes({ contentOBx: newtext });
      }}
    /></span>

                    </div>
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
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
                 <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block"><RichText.Content value={attributes.contentlGH} /></span>
      <span class="block text-indigo-600"><RichText.Content value={attributes.contentyaA} /></span>
    </h2>

                <div class="mt-8 flex">
                    <div class="inline-flex rounded-md shadow"> <span class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"><RichText.Content value={attributes.contentQRT} /></span>

                    </div>
                    <div class="ml-3 inline-flex"> <span class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"><RichText.Content value={attributes.contentOBx} /></span>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        