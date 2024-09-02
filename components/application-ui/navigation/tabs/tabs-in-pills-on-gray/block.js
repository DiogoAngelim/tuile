
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/tabs-in-pills-on-gray', {
            title: 'tabs in pills on gray',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentsJv": {
    "type": "string",
    "default": "Select a tab"
  },
  "contenthSi": {
    "type": "string",
    "default": "My Account"
  },
  "contentJSo": {
    "type": "string",
    "default": "Company"
  },
  "contenttfX": {
    "type": "string",
    "default": "Team Members"
  },
  "contentsUH": {
    "type": "string",
    "default": "Billing"
  },
  "contentzuF": {
    "type": "string",
    "default": " My Account "
  },
  "contentikq": {
    "type": "string",
    "default": " Company "
  },
  "contentNsu": {
    "type": "string",
    "default": " Team Members "
  },
  "contentKLK": {
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
                    <RichText tagName="span" value={attributes.contentsJv} default="Select a tab" onChange={ (newtext) => { setAttributes({ contentsJv: newtext }); }} /></label>
                <select id="tabs" name="tabs" className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                    <option>
                        <RichText tagName="span" value={attributes.contenthSi} default="My Account" onChange={ (newtext) => { setAttributes({ contenthSi: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentJSo} default="Company" onChange={ (newtext) => { setAttributes({ contentJSo: newtext }); }} /></option>
                    <option selected="">
                        <RichText tagName="span" value={attributes.contenttfX} default="Team Members" onChange={ (newtext) => { setAttributes({ contenttfX: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentsUH} default="Billing" onChange={ (newtext) => { setAttributes({ contentsUH: newtext }); }} /></option>
                </select>
            </div>
            <div className="hidden sm:block">
                <nav className="flex space-x-4" aria-label="Tabs"> <span className="text-gray-600 hover:text-gray-800 px-3 py-2 font-medium text-sm rounded-md"><RichText tagName="span" value={attributes.contentzuF} default="My Account" onChange={ (newtext) =>  {
        setAttributes({ contentzuF: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:text-gray-800 px-3 py-2 font-medium text-sm rounded-md"><RichText tagName="span" value={attributes.contentikq} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentikq: newtext });
      }}
    /></span>
 <span className="bg-gray-200 text-gray-800 px-3 py-2 font-medium text-sm rounded-md" aria-current="page"><RichText tagName="span" value={attributes.contentNsu} default="Team Members" onChange={ (newtext) =>  {
        setAttributes({ contentNsu: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:text-gray-800 px-3 py-2 font-medium text-sm rounded-md"><RichText tagName="span" value={attributes.contentKLK} default="Billing" onChange={ (newtext) =>  {
        setAttributes({ contentKLK: newtext });
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
                    <RichText.Content value={attributes.contentsJv} /></label>
                <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                    <option>
                        <RichText.Content value={attributes.contenthSi} /></option>
                    <option>
                        <RichText.Content value={attributes.contentJSo} /></option>
                    <option selected="">
                        <RichText.Content value={attributes.contenttfX} /></option>
                    <option>
                        <RichText.Content value={attributes.contentsUH} /></option>
                </select>
            </div>
            <div class="hidden sm:block">
                <nav class="flex space-x-4" aria-label="Tabs"> <span class="text-gray-600 hover:text-gray-800 px-3 py-2 font-medium text-sm rounded-md"><RichText.Content value={attributes.contentzuF} /></span>
 <span class="text-gray-600 hover:text-gray-800 px-3 py-2 font-medium text-sm rounded-md"><RichText.Content value={attributes.contentikq} /></span>
 <span class="bg-gray-200 text-gray-800 px-3 py-2 font-medium text-sm rounded-md" aria-current="page"><RichText.Content value={attributes.contentNsu} /></span>
 <span class="text-gray-600 hover:text-gray-800 px-3 py-2 font-medium text-sm rounded-md"><RichText.Content value={attributes.contentKLK} /></span>

                </nav>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        