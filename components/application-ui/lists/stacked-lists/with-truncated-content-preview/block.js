
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-truncated-content-preview', {
            title: 'with truncated content preview',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentULl": {
    "type": "string",
    "default": "Gloria Roberston"
  },
  "contentbyE": {
    "type": "string",
    "default": "Velit placeat sit ducimus non sed"
  },
  "contentTCA": {
    "type": "string",
    "default": "1d ago"
  },
  "contentDCL": {
    "type": "string",
    "default": "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor."
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
        <ul role="list" className="divide-y divide-gray-200">
            <li className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <div className="flex justify-between space-x-3">
                    <div className="min-w-0 flex-1"> <span className="block focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true"/>

                        <p className="text-sm font-medium text-gray-900 truncate">
                            <RichText tagName="span" value={attributes.contentULl} default="Gloria Roberston" onChange={ (newtext) => { setAttributes({ contentULl: newtext }); }} /></p>
                                <p className="text-sm text-gray-500 truncate">
                                    <RichText tagName="span" value={attributes.contentbyE} default="Velit placeat sit ducimus non sed" onChange={ (newtext) => { setAttributes({ contentbyE: newtext }); }} /></p>
                                </span>
                    </div>
                    <time datetime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                        <RichText tagName="span" value={attributes.contentTCA} default="1d ago" onChange={ (newtext) => { setAttributes({ contentTCA: newtext }); }} /></time>
                </div>
                <div className="mt-1">
                    <p className="line-clamp-2 text-sm text-gray-600">
                        <RichText tagName="span" value={attributes.contentDCL} default="Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor." onChange={ (newtext) => { setAttributes({ contentDCL: newtext }); }} /></p>
                </div>
            </li>
        </ul>
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
        <ul role="list" class="divide-y divide-gray-200">
            <li class="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <div class="flex justify-between space-x-3">
                    <div class="min-w-0 flex-1"> <span class="block focus:outline-none">
          <span class="absolute inset-0" aria-hidden="true"/>

                        <p class="text-sm font-medium text-gray-900 truncate">
                            <RichText.Content value={attributes.contentULl} /></p>
                                <p class="text-sm text-gray-500 truncate">
                                    <RichText.Content value={attributes.contentbyE} /></p>
                                </span>
                    </div>
                    <time datetime="2021-01-27T16:35" class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                        <RichText.Content value={attributes.contentTCA} /></time>
                </div>
                <div class="mt-1">
                    <p class="line-clamp-2 text-sm text-gray-600">
                        <RichText.Content value={attributes.contentDCL} /></p>
                </div>
            </li>
        </ul>
    </div>
</div>
            );
            },
        });
        