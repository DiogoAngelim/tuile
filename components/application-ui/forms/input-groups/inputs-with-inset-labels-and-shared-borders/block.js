
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/inputs-with-inset-labels-and-shared-borders', {
            title: 'inputs with inset labels and shared borders',
            icon: (<img src="data:image/jpeg;base64,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2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2MbqT907LAEY3Un7p2RM9ywvTKen4V9707PYif6En8V+wCD6Ef8U+xZEH0I/4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CDVz1OEEGoDL1c9ThBq56nCCDUBl6uepwg1c9ThBBqAy9XPU4Qauepwgg1AZernqcINXPU4QQagMvVz1OEGrnqcIINQGXq56nCDVz1OEEGoDL1c9ThBq56nCCDUBl6uepwg1c9ThBBqAy9XPU4Qauepwgg1AZernqcINXPU4QQagMvVz1OEGrnqcIINQGXq56nCDVz1OEEGoDL1c9ThBq56nCCDUBl6uepwg1c9ThBBqAy9XPU4Qauepwgg1AZernqcINXPU4QQagMvVz1OEGrnqcIINQGXq56nCDVz1OEEGoDL1c9ThBq56nCCDUBl6uepwg1c9ThBBqAy9XPU4Qauepwgg1AZernqcINXPU4QQagMvVz1OEGrnqcIINQGXq56nCDVz1OEEGoDL1c9ThBq56nCCDUBl6uepwg1c9ThBBqAy9XPU4Qauepwgg1AZernqcINXPU4QQagMvVz1OEGrnqcIINQGXq56nCDVz1OEEGoDL1c9ThBq56nCCDUBl6uepwg1c9ThBBqAy9XPU4Qauepwgg1AZernqcINXPU4QQagMvVz1OEGrnqcIINQGXq56nCDVz1OEEGoDL1c9ThBq56nCCDUBl6uepwg1c9ThBBqAy9XPU4Qauepwgg1AZernqcINXPU4QQagMvVz1OEGrnqcIINQGXq56nCDVz1OEEGoDL1c9ThBq56nCCDUBl6uepwg1c9ThBBqAy9XPU4Qauepwgg1AZernqcINXPU4QQagMvVz1OEGrnqcIINQGXq56nCDVz1OEEGoDL1c9ThBq56nCCDUBl6uepwg1c9ThBBqAy9XPU4Qauepwgg1AZernqcINXPU4QQagMvVz1OEGrnqcIINQGXq56nCDVz1OEEGoDL1c9ThBq56nCCDUBl6uepwg1c9ThBBqAy9XPU4Qauepwgg1AZernqcINXPU4QQagMvVz1OEGrnqcIINQGXq56nCDVz1OEEGoDL1c9ThBq56nCCDUBl6uepwg1c9ThBBqAy9XPU4Qauepwgg1AZernqcINXPU4QQagMvVz1OEGrnqcIINQGXq56nCDVz1OEEGoDL1c9ThBq56nCCDUBl6uepwg1c9ThBBqAy9XPU4Qauepwgg1AZernqcINXPU4QQagMvVz1OEGrnqcIINQif6D/3aqGdq56nCHvZZHzO/wBR2K74EH//2Q==" />),
            category: 'common',
            attributes: {
  "contentXFM": {
    "type": "string",
    "default": "Name"
  },
  "contentdxf": {
    "type": "string",
    "default": "Job Title"
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
        <div className="isolate -space-y-px rounded-md shadow-sm">
            <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <label for="name" className="block text-xs font-medium text-gray-900">
                    <RichText tagName="span" value={attributes.contentXFM} default="Name" onChange={ (newtext) => { setAttributes({ contentXFM: newtext }); }} /></label>
                <input type="text" name="name" id="name" className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Jane Doe"/>
            </div>
            <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <label for="job-title" className="block text-xs font-medium text-gray-900">
                    <RichText tagName="span" value={attributes.contentdxf} default="Job Title" onChange={ (newtext) => { setAttributes({ contentdxf: newtext }); }} /></label>
                <input type="text" name="job-title" id="job-title" className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Head of Tomfoolery"/>
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
        <div class="isolate -space-y-px rounded-md shadow-sm">
            <div class="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <label for="name" class="block text-xs font-medium text-gray-900">
                    <RichText.Content value={attributes.contentXFM} /></label>
                <input type="text" name="name" id="name" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Jane Doe"/>
            </div>
            <div class="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <label for="job-title" class="block text-xs font-medium text-gray-900">
                    <RichText.Content value={attributes.contentdxf} /></label>
                <input type="text" name="job-title" id="job-title" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Head of Tomfoolery"/>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        