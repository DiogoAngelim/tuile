
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/tabs-with-underline-and-badges', {
            title: 'tabs with underline and badges',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentNza": {
    "type": "string",
    "default": "Select a tab"
  },
  "contentupu": {
    "type": "string",
    "default": "Applied"
  },
  "contenttkw": {
    "type": "string",
    "default": "Phone Screening"
  },
  "contentlmS": {
    "type": "string",
    "default": "Interview"
  },
  "contentAzV": {
    "type": "string",
    "default": "Offer"
  },
  "contentKtH": {
    "type": "string",
    "default": "Disqualified"
  },
  "contentmKX": {
    "type": "string",
    "default": "\n          Applied\n\n          \n          "
  },
  "contentpix": {
    "type": "string",
    "default": "52"
  },
  "contentMvg": {
    "type": "string",
    "default": "\n          Phone Screening\n\n          "
  },
  "contentUtI": {
    "type": "string",
    "default": "6"
  },
  "contentITe": {
    "type": "string",
    "default": "\n          Interview\n\n          "
  },
  "contentFxM": {
    "type": "string",
    "default": "4"
  },
  "contentnRK": {
    "type": "string",
    "default": " Offer "
  },
  "contentDnN": {
    "type": "string",
    "default": " Disqualified "
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
                    <RichText tagName="span" value={attributes.contentNza} default="Select a tab" onChange={ (newtext) => { setAttributes({ contentNza: newtext }); }} /></label>
                <select id="tabs" name="tabs" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option>
                        <RichText tagName="span" value={attributes.contentupu} default="Applied" onChange={ (newtext) => { setAttributes({ contentupu: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contenttkw} default="Phone Screening" onChange={ (newtext) => { setAttributes({ contenttkw: newtext }); }} /></option>
                    <option selected="">
                        <RichText tagName="span" value={attributes.contentlmS} default="Interview" onChange={ (newtext) => { setAttributes({ contentlmS: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentAzV} default="Offer" onChange={ (newtext) => { setAttributes({ contentAzV: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentKtH} default="Disqualified" onChange={ (newtext) => { setAttributes({ contentKtH: newtext }); }} /></option>
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs"> <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentmKX} default="Applied" onChange={ (newtext) =>  {
        setAttributes({ contentmKX: newtext });
      }}
    /><span className="bg-gray-100 text-gray-900 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"><RichText tagName="span" value={attributes.contentpix} default="52" onChange={ (newtext) =>  {
        setAttributes({ contentpix: newtext });
      }}
    /></span>
</span> <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentMvg} default="Phone Screening" onChange={ (newtext) =>  {
        setAttributes({ contentMvg: newtext });
      }}
    /><span className="bg-gray-100 text-gray-900 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"><RichText tagName="span" value={attributes.contentUtI} default="6" onChange={ (newtext) =>  {
        setAttributes({ contentUtI: newtext });
      }}
    /></span>
</span> <span className="border-indigo-500 text-indigo-600 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm" aria-current="page"><RichText tagName="span" value={attributes.contentITe} default="Interview" onChange={ (newtext) =>  {
        setAttributes({ contentITe: newtext });
      }}
    /><span className="bg-indigo-100 text-indigo-600 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"><RichText tagName="span" value={attributes.contentFxM} default="4" onChange={ (newtext) =>  {
        setAttributes({ contentFxM: newtext });
      }}
    /></span>
</span> <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentnRK} default="Offer" onChange={ (newtext) =>  {
        setAttributes({ contentnRK: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentDnN} default="Disqualified" onChange={ (newtext) =>  {
        setAttributes({ contentDnN: newtext });
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
                    <RichText.Content value={attributes.contentNza} /></label>
                <select id="tabs" name="tabs" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option>
                        <RichText.Content value={attributes.contentupu} /></option>
                    <option>
                        <RichText.Content value={attributes.contenttkw} /></option>
                    <option selected="">
                        <RichText.Content value={attributes.contentlmS} /></option>
                    <option>
                        <RichText.Content value={attributes.contentAzV} /></option>
                    <option>
                        <RichText.Content value={attributes.contentKtH} /></option>
                </select>
            </div>
            <div class="hidden sm:block">
                <div class="border-b border-gray-200">
                    <nav class="-mb-px flex space-x-8" aria-label="Tabs"> <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentmKX} /><span class="bg-gray-100 text-gray-900 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"><RichText.Content value={attributes.contentpix} /></span>
</span> <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentMvg} /><span class="bg-gray-100 text-gray-900 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"><RichText.Content value={attributes.contentUtI} /></span>
</span> <span class="border-indigo-500 text-indigo-600 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm" aria-current="page"><RichText.Content value={attributes.contentITe} /><span class="bg-indigo-100 text-indigo-600 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"><RichText.Content value={attributes.contentFxM} /></span>
</span> <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentnRK} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentDnN} /></span>

                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        