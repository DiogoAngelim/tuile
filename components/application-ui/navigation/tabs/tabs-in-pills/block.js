
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/tabs-in-pills', {
            title: 'tabs in pills',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentAYl": {
    "type": "string",
    "default": "Select a tab"
  },
  "contentRYT": {
    "type": "string",
    "default": "My Account"
  },
  "contentOZN": {
    "type": "string",
    "default": "Company"
  },
  "contentDqv": {
    "type": "string",
    "default": "Team Members"
  },
  "contentHdE": {
    "type": "string",
    "default": "Billing"
  },
  "contentopB": {
    "type": "string",
    "default": " My Account "
  },
  "contentVTv": {
    "type": "string",
    "default": " Company "
  },
  "contentZtE": {
    "type": "string",
    "default": " Team Members "
  },
  "contentMnI": {
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
                    <RichText tagName="span" value={attributes.contentAYl} default="Select a tab" onChange={ (newtext) => { setAttributes({ contentAYl: newtext }); }} /></label>
                <select id="tabs" name="tabs" className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                    <option>
                        <RichText tagName="span" value={attributes.contentRYT} default="My Account" onChange={ (newtext) => { setAttributes({ contentRYT: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentOZN} default="Company" onChange={ (newtext) => { setAttributes({ contentOZN: newtext }); }} /></option>
                    <option selected="">
                        <RichText tagName="span" value={attributes.contentDqv} default="Team Members" onChange={ (newtext) => { setAttributes({ contentDqv: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentHdE} default="Billing" onChange={ (newtext) => { setAttributes({ contentHdE: newtext }); }} /></option>
                </select>
            </div>
            <div className="hidden sm:block">
                <nav className="flex space-x-4" aria-label="Tabs"> <span className="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"><RichText tagName="span" value={attributes.contentopB} default="My Account" onChange={ (newtext) =>  {
        setAttributes({ contentopB: newtext });
      }}
    /></span>
 <span className="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"><RichText tagName="span" value={attributes.contentVTv} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentVTv: newtext });
      }}
    /></span>
 <span className="bg-gray-100 text-gray-700 px-3 py-2 font-medium text-sm rounded-md" aria-current="page"><RichText tagName="span" value={attributes.contentZtE} default="Team Members" onChange={ (newtext) =>  {
        setAttributes({ contentZtE: newtext });
      }}
    /></span>
 <span className="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"><RichText tagName="span" value={attributes.contentMnI} default="Billing" onChange={ (newtext) =>  {
        setAttributes({ contentMnI: newtext });
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
                    <RichText.Content value={attributes.contentAYl} /></label>
                <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                    <option>
                        <RichText.Content value={attributes.contentRYT} /></option>
                    <option>
                        <RichText.Content value={attributes.contentOZN} /></option>
                    <option selected="">
                        <RichText.Content value={attributes.contentDqv} /></option>
                    <option>
                        <RichText.Content value={attributes.contentHdE} /></option>
                </select>
            </div>
            <div class="hidden sm:block">
                <nav class="flex space-x-4" aria-label="Tabs"> <span class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"><RichText.Content value={attributes.contentopB} /></span>
 <span class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"><RichText.Content value={attributes.contentVTv} /></span>
 <span class="bg-gray-100 text-gray-700 px-3 py-2 font-medium text-sm rounded-md" aria-current="page"><RichText.Content value={attributes.contentZtE} /></span>
 <span class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"><RichText.Content value={attributes.contentMnI} /></span>

                </nav>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        