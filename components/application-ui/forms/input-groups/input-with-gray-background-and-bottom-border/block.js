
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/input-with-gray-background-and-bottom-border', {
            title: 'input with gray background and bottom border',
            icon: (<img src="data:image/jpeg;base64,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oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oCkTZtrWfKGba1nygKRNm2tZ8oZtrWfKApE2ba1nyhm2tZ8oD/9k=" />),
            category: 'common',
            attributes: {
  "contentPfL": {
    "type": "string",
    "default": "Name"
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
            <label for="name" className="block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contentPfL} default="Name" onChange={ (newtext) => { setAttributes({ contentPfL: newtext }); }} /></label>
            <div className="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
                <input type="text" name="name" id="name" className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm" placeholder="Jane Doe"/>
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
        <div>
            <label for="name" class="block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contentPfL} /></label>
            <div class="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
                <input type="text" name="name" id="name" class="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm" placeholder="Jane Doe"/>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        