
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/list-with-description', {
            title: 'list with description',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentqOi": {
    "type": "string",
    "default": "Notifications"
  },
  "contentTqZ": {
    "type": "string",
    "default": "Comments"
  },
  "contentfZH": {
    "type": "string",
    "default": "Get notified when someones posts a comment on a posting."
  },
  "contentEUx": {
    "type": "string",
    "default": "Candidates"
  },
  "contentaxd": {
    "type": "string",
    "default": "Get notified when a candidate applies for a job."
  },
  "contentOpu": {
    "type": "string",
    "default": "Offers"
  },
  "contentOcK": {
    "type": "string",
    "default": "Get notified when a candidate accepts or rejects an offer."
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
        <fieldset className="space-y-5">
            <legend className="sr-only">
                <RichText tagName="span" value={attributes.contentqOi} default="Notifications" onChange={ (newtext) => { setAttributes({ contentqOi: newtext }); }} /></legend>
            <div className="relative flex items-start">
                <div className="flex items-center h-5">
                    <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                </div>
                <div className="ml-3 text-sm">
                    <label for="comments" className="font-medium text-gray-700">
                        <RichText tagName="span" value={attributes.contentTqZ} default="Comments" onChange={ (newtext) => { setAttributes({ contentTqZ: newtext }); }} /></label>
                    <p id="comments-description" className="text-gray-500">
                        <RichText tagName="span" value={attributes.contentfZH} default="Get notified when someones posts a comment on a posting." onChange={ (newtext) => { setAttributes({ contentfZH: newtext }); }} /></p>
                </div>
            </div>
            <div className="relative flex items-start">
                <div className="flex items-center h-5">
                    <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                </div>
                <div className="ml-3 text-sm">
                    <label for="candidates" className="font-medium text-gray-700">
                        <RichText tagName="span" value={attributes.contentEUx} default="Candidates" onChange={ (newtext) => { setAttributes({ contentEUx: newtext }); }} /></label>
                    <p id="candidates-description" className="text-gray-500">
                        <RichText tagName="span" value={attributes.contentaxd} default="Get notified when a candidate applies for a job." onChange={ (newtext) => { setAttributes({ contentaxd: newtext }); }} /></p>
                </div>
            </div>
            <div className="relative flex items-start">
                <div className="flex items-center h-5">
                    <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                </div>
                <div className="ml-3 text-sm">
                    <label for="offers" className="font-medium text-gray-700">
                        <RichText tagName="span" value={attributes.contentOpu} default="Offers" onChange={ (newtext) => { setAttributes({ contentOpu: newtext }); }} /></label>
                    <p id="offers-description" className="text-gray-500">
                        <RichText tagName="span" value={attributes.contentOcK} default="Get notified when a candidate accepts or rejects an offer." onChange={ (newtext) => { setAttributes({ contentOcK: newtext }); }} /></p>
                </div>
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
        <fieldset class="space-y-5">
            <legend class="sr-only">
                <RichText.Content value={attributes.contentqOi} /></legend>
            <div class="relative flex items-start">
                <div class="flex items-center h-5">
                    <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                </div>
                <div class="ml-3 text-sm">
                    <label for="comments" class="font-medium text-gray-700">
                        <RichText.Content value={attributes.contentTqZ} /></label>
                    <p id="comments-description" class="text-gray-500">
                        <RichText.Content value={attributes.contentfZH} /></p>
                </div>
            </div>
            <div class="relative flex items-start">
                <div class="flex items-center h-5">
                    <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                </div>
                <div class="ml-3 text-sm">
                    <label for="candidates" class="font-medium text-gray-700">
                        <RichText.Content value={attributes.contentEUx} /></label>
                    <p id="candidates-description" class="text-gray-500">
                        <RichText.Content value={attributes.contentaxd} /></p>
                </div>
            </div>
            <div class="relative flex items-start">
                <div class="flex items-center h-5">
                    <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                </div>
                <div class="ml-3 text-sm">
                    <label for="offers" class="font-medium text-gray-700">
                        <RichText.Content value={attributes.contentOpu} /></label>
                    <p id="offers-description" class="text-gray-500">
                        <RichText.Content value={attributes.contentOcK} /></p>
                </div>
            </div>
        </fieldset>
    </div>
</div>
            );
            },
        });
        