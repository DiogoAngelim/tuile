
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/full-width-tabs-with-underline', {
            title: 'full width tabs with underline',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentfYv": {
    "type": "string",
    "default": "Select a tab"
  },
  "contentQZE": {
    "type": "string",
    "default": "My Account"
  },
  "contentUnM": {
    "type": "string",
    "default": "Company"
  },
  "contentQSa": {
    "type": "string",
    "default": "Team Members"
  },
  "contentHZM": {
    "type": "string",
    "default": "Billing"
  },
  "contentLVM": {
    "type": "string",
    "default": " My Account "
  },
  "contentoLa": {
    "type": "string",
    "default": " Company "
  },
  "contenthkx": {
    "type": "string",
    "default": " Team Members "
  },
  "contentpED": {
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
                    <RichText tagName="span" value={attributes.contentfYv} default="Select a tab" onChange={ (newtext) => { setAttributes({ contentfYv: newtext }); }} /></label>
                <select id="tabs" name="tabs" className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                    <option>
                        <RichText tagName="span" value={attributes.contentQZE} default="My Account" onChange={ (newtext) => { setAttributes({ contentQZE: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentUnM} default="Company" onChange={ (newtext) => { setAttributes({ contentUnM: newtext }); }} /></option>
                    <option selected="">
                        <RichText tagName="span" value={attributes.contentQSa} default="Team Members" onChange={ (newtext) => { setAttributes({ contentQSa: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentHZM} default="Billing" onChange={ (newtext) => { setAttributes({ contentHZM: newtext }); }} /></option>
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex" aria-label="Tabs"> <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentLVM} default="My Account" onChange={ (newtext) =>  {
        setAttributes({ contentLVM: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentoLa} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentoLa: newtext });
      }}
    /></span>
 <span className="border-indigo-500 text-indigo-600 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm" aria-current="page"><RichText tagName="span" value={attributes.contenthkx} default="Team Members" onChange={ (newtext) =>  {
        setAttributes({ contenthkx: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentpED} default="Billing" onChange={ (newtext) =>  {
        setAttributes({ contentpED: newtext });
      }}
    /></span>

                    </nav>
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
        <div>
            <div class="sm:hidden">
                <label for="tabs" class="sr-only">
                    <RichText.Content value={attributes.contentfYv} /></label>
                <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                    <option>
                        <RichText.Content value={attributes.contentQZE} /></option>
                    <option>
                        <RichText.Content value={attributes.contentUnM} /></option>
                    <option selected="">
                        <RichText.Content value={attributes.contentQSa} /></option>
                    <option>
                        <RichText.Content value={attributes.contentHZM} /></option>
                </select>
            </div>
            <div class="hidden sm:block">
                <div class="border-b border-gray-200">
                    <nav class="-mb-px flex" aria-label="Tabs"> <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentLVM} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentoLa} /></span>
 <span class="border-indigo-500 text-indigo-600 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm" aria-current="page"><RichText.Content value={attributes.contenthkx} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentpED} /></span>

                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        