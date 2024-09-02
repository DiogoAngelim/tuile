
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/tabs-in-pills-with-brand-color', {
            title: 'tabs in pills with brand color',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentOPo": {
    "type": "string",
    "default": "Select a tab"
  },
  "contentznP": {
    "type": "string",
    "default": "My Account"
  },
  "contentmjO": {
    "type": "string",
    "default": "Company"
  },
  "contentsjx": {
    "type": "string",
    "default": "Team Members"
  },
  "contentztt": {
    "type": "string",
    "default": "Billing"
  },
  "contentMFz": {
    "type": "string",
    "default": " My Account "
  },
  "contentrvQ": {
    "type": "string",
    "default": " Company "
  },
  "contentoxF": {
    "type": "string",
    "default": " Team Members "
  },
  "contentAQO": {
    "type": "string",
    "default": " Billing "
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
            <div className="sm:hidden">
                <label for="tabs" className="sr-only">
                    <RichText tagName="span" value={attributes.contentOPo} default="Select a tab" onChange={ (newtext) => { setAttributes({ contentOPo: newtext }); }} /></label>
                <select id="tabs" name="tabs" className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                    <option>
                        <RichText tagName="span" value={attributes.contentznP} default="My Account" onChange={ (newtext) => { setAttributes({ contentznP: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentmjO} default="Company" onChange={ (newtext) => { setAttributes({ contentmjO: newtext }); }} /></option>
                    <option selected="">
                        <RichText tagName="span" value={attributes.contentsjx} default="Team Members" onChange={ (newtext) => { setAttributes({ contentsjx: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentztt} default="Billing" onChange={ (newtext) => { setAttributes({ contentztt: newtext }); }} /></option>
                </select>
            </div>
            <div className="hidden sm:block">
                <nav className="flex space-x-4" aria-label="Tabs"> <span className="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"><RichText tagName="span" value={attributes.contentMFz} default="My Account" onChange={ (newtext) =>  {
        setAttributes({ contentMFz: newtext });
      }}
    /></span>
 <span className="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"><RichText tagName="span" value={attributes.contentrvQ} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentrvQ: newtext });
      }}
    /></span>
 <span className="bg-indigo-100 text-indigo-700 px-3 py-2 font-medium text-sm rounded-md" aria-current="page"><RichText tagName="span" value={attributes.contentoxF} default="Team Members" onChange={ (newtext) =>  {
        setAttributes({ contentoxF: newtext });
      }}
    /></span>
 <span className="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"><RichText tagName="span" value={attributes.contentAQO} default="Billing" onChange={ (newtext) =>  {
        setAttributes({ contentAQO: newtext });
      }}
    /></span>

                </nav>
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
            <div class="sm:hidden">
                <label for="tabs" class="sr-only">
                    <RichText.Content value={attributes.contentOPo} /></label>
                <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                    <option>
                        <RichText.Content value={attributes.contentznP} /></option>
                    <option>
                        <RichText.Content value={attributes.contentmjO} /></option>
                    <option selected="">
                        <RichText.Content value={attributes.contentsjx} /></option>
                    <option>
                        <RichText.Content value={attributes.contentztt} /></option>
                </select>
            </div>
            <div class="hidden sm:block">
                <nav class="flex space-x-4" aria-label="Tabs"> <span class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"><RichText.Content value={attributes.contentMFz} /></span>
 <span class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"><RichText.Content value={attributes.contentrvQ} /></span>
 <span class="bg-indigo-100 text-indigo-700 px-3 py-2 font-medium text-sm rounded-md" aria-current="page"><RichText.Content value={attributes.contentoxF} /></span>
 <span class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"><RichText.Content value={attributes.contentAQO} /></span>

                </nav>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        