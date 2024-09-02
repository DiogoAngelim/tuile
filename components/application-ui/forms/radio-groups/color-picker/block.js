
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/color-picker', {
            title: 'color picker',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contenteik": {
    "type": "string",
    "default": "Choose a label color"
  },
  "contentchH": {
    "type": "string",
    "default": "Pink"
  },
  "contentsju": {
    "type": "string",
    "default": "Purple"
  },
  "contentcfR": {
    "type": "string",
    "default": "Blue"
  },
  "contentnKd": {
    "type": "string",
    "default": "Green"
  },
  "contentKAA": {
    "type": "string",
    "default": "Yellow"
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
        <fieldset>
            <legend className="block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contenteik} default="Choose a label color" onChange={ (newtext) => { setAttributes({ contenteik: newtext }); }} /></legend>
            <div className="mt-4 flex items-center space-x-3">
                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-pink-500">
                    <input type="radio" name="color-choice" value="Pink" className="sr-only" aria-labelledby="color-choice-0-label"/>
                    <p id="color-choice-0-label" className="sr-only">
                        <RichText tagName="span" value={attributes.contentchH} default="Pink" onChange={ (newtext) => { setAttributes({ contentchH: newtext }); }} /></p> <span aria-hidden="true" className="h-8 w-8 bg-pink-500 border border-black border-opacity-10 rounded-full"/>

                </label>
                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-purple-500">
                    <input type="radio" name="color-choice" value="Purple" className="sr-only" aria-labelledby="color-choice-1-label"/>
                    <p id="color-choice-1-label" className="sr-only">
                        <RichText tagName="span" value={attributes.contentsju} default="Purple" onChange={ (newtext) => { setAttributes({ contentsju: newtext }); }} /></p> <span aria-hidden="true" className="h-8 w-8 bg-purple-500 border border-black border-opacity-10 rounded-full"/>

                </label>
                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-blue-500">
                    <input type="radio" name="color-choice" value="Blue" className="sr-only" aria-labelledby="color-choice-2-label"/>
                    <p id="color-choice-2-label" className="sr-only">
                        <RichText tagName="span" value={attributes.contentcfR} default="Blue" onChange={ (newtext) => { setAttributes({ contentcfR: newtext }); }} /></p> <span aria-hidden="true" className="h-8 w-8 bg-blue-500 border border-black border-opacity-10 rounded-full"/>

                </label>
                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-green-500">
                    <input type="radio" name="color-choice" value="Green" className="sr-only" aria-labelledby="color-choice-3-label"/>
                    <p id="color-choice-3-label" className="sr-only">
                        <RichText tagName="span" value={attributes.contentnKd} default="Green" onChange={ (newtext) => { setAttributes({ contentnKd: newtext }); }} /></p> <span aria-hidden="true" className="h-8 w-8 bg-green-500 border border-black border-opacity-10 rounded-full"/>

                </label>
                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-yellow-500">
                    <input type="radio" name="color-choice" value="Yellow" className="sr-only" aria-labelledby="color-choice-4-label"/>
                    <p id="color-choice-4-label" className="sr-only">
                        <RichText tagName="span" value={attributes.contentKAA} default="Yellow" onChange={ (newtext) => { setAttributes({ contentKAA: newtext }); }} /></p> <span aria-hidden="true" className="h-8 w-8 bg-yellow-500 border border-black border-opacity-10 rounded-full"/>

                </label>
            </div>
        </fieldset>
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
        <fieldset>
            <legend class="block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contenteik} /></legend>
            <div class="mt-4 flex items-center space-x-3">
                <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-pink-500">
                    <input type="radio" name="color-choice" value="Pink" class="sr-only" aria-labelledby="color-choice-0-label"/>
                    <p id="color-choice-0-label" class="sr-only">
                        <RichText.Content value={attributes.contentchH} /></p> <span aria-hidden="true" class="h-8 w-8 bg-pink-500 border border-black border-opacity-10 rounded-full"/>

                </label>
                <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-purple-500">
                    <input type="radio" name="color-choice" value="Purple" class="sr-only" aria-labelledby="color-choice-1-label"/>
                    <p id="color-choice-1-label" class="sr-only">
                        <RichText.Content value={attributes.contentsju} /></p> <span aria-hidden="true" class="h-8 w-8 bg-purple-500 border border-black border-opacity-10 rounded-full"/>

                </label>
                <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-blue-500">
                    <input type="radio" name="color-choice" value="Blue" class="sr-only" aria-labelledby="color-choice-2-label"/>
                    <p id="color-choice-2-label" class="sr-only">
                        <RichText.Content value={attributes.contentcfR} /></p> <span aria-hidden="true" class="h-8 w-8 bg-blue-500 border border-black border-opacity-10 rounded-full"/>

                </label>
                <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-green-500">
                    <input type="radio" name="color-choice" value="Green" class="sr-only" aria-labelledby="color-choice-3-label"/>
                    <p id="color-choice-3-label" class="sr-only">
                        <RichText.Content value={attributes.contentnKd} /></p> <span aria-hidden="true" class="h-8 w-8 bg-green-500 border border-black border-opacity-10 rounded-full"/>

                </label>
                <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-yellow-500">
                    <input type="radio" name="color-choice" value="Yellow" class="sr-only" aria-labelledby="color-choice-4-label"/>
                    <p id="color-choice-4-label" class="sr-only">
                        <RichText.Content value={attributes.contentKAA} /></p> <span aria-hidden="true" class="h-8 w-8 bg-yellow-500 border border-black border-opacity-10 rounded-full"/>

                </label>
            </div>
        </fieldset>
    </div>
</div>
            );
            },
        });
        