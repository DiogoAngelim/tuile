
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-well', {
            title: 'simple well',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentjun": {
    "type": "string",
    "default": "Need more bandwidth?"
  },
  "contentyVj": {
    "type": "string",
    "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur."
  },
  "contentfzo": {
    "type": "string",
    "default": "Contact sales"
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
        <div className="bg-gray-50 sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                 <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentjun} default="Need more bandwidth?" onChange={ (newtext) =>  {
        setAttributes({ contentjun: newtext });
      }}
    /></h3>

                <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>
                        <RichText tagName="span" value={attributes.contentyVj} default="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur." onChange={ (newtext) => { setAttributes({ contentyVj: newtext }); }} /></p>
                </div>
                <div className="mt-5">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                        <RichText tagName="span" value={attributes.contentfzo} default="Contact sales" onChange={ (newtext) => { setAttributes({ contentfzo: newtext }); }} /></button>
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
        <div class="bg-gray-50 sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                 <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentjun} /></h3>

                <div class="mt-2 max-w-xl text-sm text-gray-500">
                    <p>
                        <RichText.Content value={attributes.contentyVj} /></p>
                </div>
                <div class="mt-5">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                        <RichText.Content value={attributes.contentfzo} /></button>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        