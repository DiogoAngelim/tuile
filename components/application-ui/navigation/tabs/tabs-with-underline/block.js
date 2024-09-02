
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/tabs-with-underline', {
            title: 'tabs with underline',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentqOq": {
    "type": "string",
    "default": "Select a tab"
  },
  "contentJKv": {
    "type": "string",
    "default": "My Account"
  },
  "contentKNJ": {
    "type": "string",
    "default": "Company"
  },
  "contentyZU": {
    "type": "string",
    "default": "Team Members"
  },
  "contentATm": {
    "type": "string",
    "default": "Billing"
  },
  "contentdsI": {
    "type": "string",
    "default": " My Account "
  },
  "contentJNc": {
    "type": "string",
    "default": " Company "
  },
  "contentRme": {
    "type": "string",
    "default": " Team Members "
  },
  "contentffE": {
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
                    <RichText tagName="span" value={attributes.contentqOq} default="Select a tab" onChange={ (newtext) => { setAttributes({ contentqOq: newtext }); }} /></label>
                <select id="tabs" name="tabs" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option>
                        <RichText tagName="span" value={attributes.contentJKv} default="My Account" onChange={ (newtext) => { setAttributes({ contentJKv: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentKNJ} default="Company" onChange={ (newtext) => { setAttributes({ contentKNJ: newtext }); }} /></option>
                    <option selected="">
                        <RichText tagName="span" value={attributes.contentyZU} default="Team Members" onChange={ (newtext) => { setAttributes({ contentyZU: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentATm} default="Billing" onChange={ (newtext) => { setAttributes({ contentATm: newtext }); }} /></option>
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs"> <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentdsI} default="My Account" onChange={ (newtext) =>  {
        setAttributes({ contentdsI: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentJNc} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentJNc: newtext });
      }}
    /></span>
 <span className="border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page"><RichText tagName="span" value={attributes.contentRme} default="Team Members" onChange={ (newtext) =>  {
        setAttributes({ contentRme: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentffE} default="Billing" onChange={ (newtext) =>  {
        setAttributes({ contentffE: newtext });
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
                    <RichText.Content value={attributes.contentqOq} /></label>
                <select id="tabs" name="tabs" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option>
                        <RichText.Content value={attributes.contentJKv} /></option>
                    <option>
                        <RichText.Content value={attributes.contentKNJ} /></option>
                    <option selected="">
                        <RichText.Content value={attributes.contentyZU} /></option>
                    <option>
                        <RichText.Content value={attributes.contentATm} /></option>
                </select>
            </div>
            <div class="hidden sm:block">
                <div class="border-b border-gray-200">
                    <nav class="-mb-px flex space-x-8" aria-label="Tabs"> <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentdsI} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentJNc} /></span>
 <span class="border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page"><RichText.Content value={attributes.contentRme} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentffE} /></span>

                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        