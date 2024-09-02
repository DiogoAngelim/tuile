
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-split-buttons', {
            title: 'with split buttons',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentbzk": {
    "type": "string",
    "default": "Receive notifications"
  },
  "contentoPw": {
    "type": "string",
    "default": "Notifications may include alerts, sounds, and badges."
  },
  "contentQjb": {
    "type": "string",
    "default": "Reply"
  },
  "contentHrn": {
    "type": "string",
    "default": "Don't allow"
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
        <div aria-live="assertive" className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
            <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                <div className="max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex items-center p-4">
                        <div className="w-full">
                            <p className="text-sm font-medium text-gray-900">
                                <RichText tagName="span" value={attributes.contentbzk} default="Receive notifications" onChange={ (newtext) => { setAttributes({ contentbzk: newtext }); }} /></p>
                            <p className="mt-1 text-sm text-gray-500">
                                <RichText tagName="span" value={attributes.contentoPw} default="Notifications may include alerts, sounds, and badges." onChange={ (newtext) => { setAttributes({ contentoPw: newtext }); }} /></p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col divide-y divide-gray-200">
                            <div className="h-0 flex-1 flex">
                                <button className="w-full border border-transparent rounded-none rounded-tr-lg px-4 py-3 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:z-10 focus:ring-2 focus:ring-indigo-500">
                                    <RichText tagName="span" value={attributes.contentQjb} default="Reply" onChange={ (newtext) => { setAttributes({ contentQjb: newtext }); }} /></button>
                            </div>
                            <div className="h-0 flex-1 flex">
                                <button className="w-full border border-transparent rounded-none rounded-br-lg px-4 py-3 flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    <RichText tagName="span" value={attributes.contentHrn} default="Don't allow" onChange={ (newtext) => { setAttributes({ contentHrn: newtext }); }} /></button>
                            </div>
                        </div>
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
        <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
            <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
                <div class="max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 divide-x divide-gray-200">
                    <div class="w-0 flex-1 flex items-center p-4">
                        <div class="w-full">
                            <p class="text-sm font-medium text-gray-900">
                                <RichText.Content value={attributes.contentbzk} /></p>
                            <p class="mt-1 text-sm text-gray-500">
                                <RichText.Content value={attributes.contentoPw} /></p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex flex-col divide-y divide-gray-200">
                            <div class="h-0 flex-1 flex">
                                <button class="w-full border border-transparent rounded-none rounded-tr-lg px-4 py-3 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:z-10 focus:ring-2 focus:ring-indigo-500">
                                    <RichText.Content value={attributes.contentQjb} /></button>
                            </div>
                            <div class="h-0 flex-1 flex">
                                <button class="w-full border border-transparent rounded-none rounded-br-lg px-4 py-3 flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    <RichText.Content value={attributes.contentHrn} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        