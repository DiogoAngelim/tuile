
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/bar-with-underline', {
            title: 'bar with underline',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentEDe": {
    "type": "string",
    "default": "Select a tab"
  },
  "contentXLR": {
    "type": "string",
    "default": "My Account"
  },
  "contentsnR": {
    "type": "string",
    "default": "Company"
  },
  "contentqFf": {
    "type": "string",
    "default": "Team Members"
  },
  "contentelb": {
    "type": "string",
    "default": "Billing"
  },
  "contentRtR": {
    "type": "string",
    "default": "My Account"
  },
  "contentaSW": {
    "type": "string",
    "default": "Company"
  },
  "contentCGf": {
    "type": "string",
    "default": "Team Members"
  },
  "contentwUm": {
    "type": "string",
    "default": "Billing"
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
                    <RichText tagName="span" value={attributes.contentEDe} default="Select a tab" onChange={ (newtext) => { setAttributes({ contentEDe: newtext }); }} /></label>
                <select id="tabs" name="tabs" className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                    <option selected="">
                        <RichText tagName="span" value={attributes.contentXLR} default="My Account" onChange={ (newtext) => { setAttributes({ contentXLR: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentsnR} default="Company" onChange={ (newtext) => { setAttributes({ contentsnR: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentqFf} default="Team Members" onChange={ (newtext) => { setAttributes({ contentqFf: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentelb} default="Billing" onChange={ (newtext) => { setAttributes({ contentelb: newtext }); }} /></option>
                </select>
            </div>
            <div className="hidden sm:block">
                <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs"> <span className="text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10" aria-current="page">
        <span><RichText tagName="span" value={attributes.contentRtR} default="My Account" onChange={ (newtext) =>  {
        setAttributes({ contentRtR: newtext });
      }}
    /></span>
 <span aria-hidden="true" className="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"/>
</span>
                    <span className="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"> <span><RichText tagName="span" value={attributes.contentaSW} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentaSW: newtext });
      }}
    /></span>
 <span aria-hidden="true" className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"/>
</span>
                        <span className="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"> <span><RichText tagName="span" value={attributes.contentCGf} default="Team Members" onChange={ (newtext) =>  {
        setAttributes({ contentCGf: newtext });
      }}
    /></span>
 <span aria-hidden="true" className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"/>
</span>
                            <span className="text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"> <span><RichText tagName="span" value={attributes.contentwUm} default="Billing" onChange={ (newtext) =>  {
        setAttributes({ contentwUm: newtext });
      }}
    /></span>
 <span aria-hidden="true" className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"/>
</span>
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
                    <RichText.Content value={attributes.contentEDe} /></label>
                <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                    <option selected="">
                        <RichText.Content value={attributes.contentXLR} /></option>
                    <option>
                        <RichText.Content value={attributes.contentsnR} /></option>
                    <option>
                        <RichText.Content value={attributes.contentqFf} /></option>
                    <option>
                        <RichText.Content value={attributes.contentelb} /></option>
                </select>
            </div>
            <div class="hidden sm:block">
                <nav class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs"> <span class="text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10" aria-current="page">
        <span><RichText.Content value={attributes.contentRtR} /></span>
 <span aria-hidden="true" class="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"/>
</span>
                    <span class="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"> <span><RichText.Content value={attributes.contentaSW} /></span>
 <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"/>
</span>
                        <span class="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"> <span><RichText.Content value={attributes.contentCGf} /></span>
 <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"/>
</span>
                            <span class="text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"> <span><RichText.Content value={attributes.contentwUm} /></span>
 <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"/>
</span>
                </nav>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        