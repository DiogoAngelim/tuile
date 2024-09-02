
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/list-with-inline-description', {
            title: 'list with inline description',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentwBk": {
    "type": "string",
    "default": "Notifications"
  },
  "contentVyN": {
    "type": "string",
    "default": "New comments"
  },
  "contentAOL": {
    "type": "string",
    "default": "New comments "
  },
  "contentmFh": {
    "type": "string",
    "default": "so you always know what's happening."
  },
  "contentGcE": {
    "type": "string",
    "default": "New candidates"
  },
  "contentnqr": {
    "type": "string",
    "default": "New candidates "
  },
  "contentluD": {
    "type": "string",
    "default": "who apply for any open postings."
  },
  "contentJTc": {
    "type": "string",
    "default": "Offers"
  },
  "contentxmk": {
    "type": "string",
    "default": "Offers "
  },
  "contentyUs": {
    "type": "string",
    "default": "when they are accepted or rejected by candidates."
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
                <RichText tagName="span" value={attributes.contentwBk} default="Notifications" onChange={ (newtext) => { setAttributes({ contentwBk: newtext }); }} /></legend>
            <div className="relative flex items-start">
                <div className="flex items-center h-5">
                    <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                </div>
                <div className="ml-3 text-sm">
                    <label for="comments" className="font-medium text-gray-700">
                        <RichText tagName="span" value={attributes.contentVyN} default="New comments" onChange={ (newtext) => { setAttributes({ contentVyN: newtext }); }} /></label> <span id="comments-description" className="text-gray-500"><span className="sr-only"><RichText tagName="span" value={attributes.contentAOL} default="New comments" onChange={ (newtext) =>  {
        setAttributes({ contentAOL: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentmFh} default="so you always know what's happening." onChange={ (newtext) =>  {
        setAttributes({ contentmFh: newtext });
      }}
    /></span>

                </div>
            </div>
            <div className="relative flex items-start">
                <div className="flex items-center h-5">
                    <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                </div>
                <div className="ml-3 text-sm">
                    <label for="candidates" className="font-medium text-gray-700">
                        <RichText tagName="span" value={attributes.contentGcE} default="New candidates" onChange={ (newtext) => { setAttributes({ contentGcE: newtext }); }} /></label> <span id="candidates-description" className="text-gray-500"><span className="sr-only"><RichText tagName="span" value={attributes.contentnqr} default="New candidates" onChange={ (newtext) =>  {
        setAttributes({ contentnqr: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentluD} default="who apply for any open postings." onChange={ (newtext) =>  {
        setAttributes({ contentluD: newtext });
      }}
    /></span>

                </div>
            </div>
            <div className="relative flex items-start">
                <div className="flex items-center h-5">
                    <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                </div>
                <div className="ml-3 text-sm">
                    <label for="offers" className="font-medium text-gray-700">
                        <RichText tagName="span" value={attributes.contentJTc} default="Offers" onChange={ (newtext) => { setAttributes({ contentJTc: newtext }); }} /></label> <span id="offers-description" className="text-gray-500"><span className="sr-only"><RichText tagName="span" value={attributes.contentxmk} default="Offers" onChange={ (newtext) =>  {
        setAttributes({ contentxmk: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentyUs} default="when they are accepted or rejected by candidates." onChange={ (newtext) =>  {
        setAttributes({ contentyUs: newtext });
      }}
    /></span>

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
                <RichText.Content value={attributes.contentwBk} /></legend>
            <div class="relative flex items-start">
                <div class="flex items-center h-5">
                    <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                </div>
                <div class="ml-3 text-sm">
                    <label for="comments" class="font-medium text-gray-700">
                        <RichText.Content value={attributes.contentVyN} /></label> <span id="comments-description" class="text-gray-500"><span class="sr-only"><RichText.Content value={attributes.contentAOL} /></span><RichText.Content value={attributes.contentmFh} /></span>

                </div>
            </div>
            <div class="relative flex items-start">
                <div class="flex items-center h-5">
                    <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                </div>
                <div class="ml-3 text-sm">
                    <label for="candidates" class="font-medium text-gray-700">
                        <RichText.Content value={attributes.contentGcE} /></label> <span id="candidates-description" class="text-gray-500"><span class="sr-only"><RichText.Content value={attributes.contentnqr} /></span><RichText.Content value={attributes.contentluD} /></span>

                </div>
            </div>
            <div class="relative flex items-start">
                <div class="flex items-center h-5">
                    <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                </div>
                <div class="ml-3 text-sm">
                    <label for="offers" class="font-medium text-gray-700">
                        <RichText.Content value={attributes.contentJTc} /></label> <span id="offers-description" class="text-gray-500"><span class="sr-only"><RichText.Content value={attributes.contentxmk} /></span><RichText.Content value={attributes.contentyUs} /></span>

                </div>
            </div>
        </fieldset>
    </div>
</div>
            );
            },
        });
        