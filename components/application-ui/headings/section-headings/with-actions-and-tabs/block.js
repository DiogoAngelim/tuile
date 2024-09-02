
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-actions-and-tabs', {
            title: 'with actions and tabs',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentTxE": {
    "type": "string",
    "default": "Candidates"
  },
  "contentwMh": {
    "type": "string",
    "default": "Share"
  },
  "contentPBM": {
    "type": "string",
    "default": "Create"
  },
  "contentKhz": {
    "type": "string",
    "default": "Select a tab"
  },
  "contentRwH": {
    "type": "string",
    "default": "Applied"
  },
  "contenteMD": {
    "type": "string",
    "default": "Phone Screening"
  },
  "contentpTG": {
    "type": "string",
    "default": "Interview"
  },
  "contentfeC": {
    "type": "string",
    "default": "Offer"
  },
  "contentKib": {
    "type": "string",
    "default": "Hired"
  },
  "contentJTS": {
    "type": "string",
    "default": " Applied "
  },
  "contentCpK": {
    "type": "string",
    "default": " Phone Screening "
  },
  "contentdUF": {
    "type": "string",
    "default": " Interview "
  },
  "contentGZZ": {
    "type": "string",
    "default": " Offer "
  },
  "contentgxD": {
    "type": "string",
    "default": " Hired "
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
        <div className="relative pb-5 border-b border-gray-200 sm:pb-0">
            <div className="md:flex md:items-center md:justify-between">
                 <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentTxE} default="Candidates" onChange={ (newtext) =>  {
        setAttributes({ contentTxE: newtext });
      }}
    /></h3>

                <div className="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-0">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <RichText tagName="span" value={attributes.contentwMh} default="Share" onChange={ (newtext) => { setAttributes({ contentwMh: newtext }); }} /></button>
                    <button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <RichText tagName="span" value={attributes.contentPBM} default="Create" onChange={ (newtext) => { setAttributes({ contentPBM: newtext }); }} /></button>
                </div>
            </div>
            <div className="mt-4">
                <div className="sm:hidden">
                    <label for="current-tab" className="sr-only">
                        <RichText tagName="span" value={attributes.contentKhz} default="Select a tab" onChange={ (newtext) => { setAttributes({ contentKhz: newtext }); }} /></label>
                    <select id="current-tab" name="current-tab" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option>
                            <RichText tagName="span" value={attributes.contentRwH} default="Applied" onChange={ (newtext) => { setAttributes({ contentRwH: newtext }); }} /></option>
                        <option>
                            <RichText tagName="span" value={attributes.contenteMD} default="Phone Screening" onChange={ (newtext) => { setAttributes({ contenteMD: newtext }); }} /></option>
                        <option selected="">
                            <RichText tagName="span" value={attributes.contentpTG} default="Interview" onChange={ (newtext) => { setAttributes({ contentpTG: newtext }); }} /></option>
                        <option>
                            <RichText tagName="span" value={attributes.contentfeC} default="Offer" onChange={ (newtext) => { setAttributes({ contentfeC: newtext }); }} /></option>
                        <option>
                            <RichText tagName="span" value={attributes.contentKib} default="Hired" onChange={ (newtext) => { setAttributes({ contentKib: newtext }); }} /></option>
                    </select>
                </div>
                <div className="hidden sm:block">
                    <nav className="-mb-px flex space-x-8"> <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentJTS} default="Applied" onChange={ (newtext) =>  {
        setAttributes({ contentJTS: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentCpK} default="Phone Screening" onChange={ (newtext) =>  {
        setAttributes({ contentCpK: newtext });
      }}
    /></span>
 <span className="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" aria-current="page"><RichText tagName="span" value={attributes.contentdUF} default="Interview" onChange={ (newtext) =>  {
        setAttributes({ contentdUF: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentGZZ} default="Offer" onChange={ (newtext) =>  {
        setAttributes({ contentGZZ: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentgxD} default="Hired" onChange={ (newtext) =>  {
        setAttributes({ contentgxD: newtext });
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
        <div class="relative pb-5 border-b border-gray-200 sm:pb-0">
            <div class="md:flex md:items-center md:justify-between">
                 <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentTxE} /></h3>

                <div class="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-0">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <RichText.Content value={attributes.contentwMh} /></button>
                    <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <RichText.Content value={attributes.contentPBM} /></button>
                </div>
            </div>
            <div class="mt-4">
                <div class="sm:hidden">
                    <label for="current-tab" class="sr-only">
                        <RichText.Content value={attributes.contentKhz} /></label>
                    <select id="current-tab" name="current-tab" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option>
                            <RichText.Content value={attributes.contentRwH} /></option>
                        <option>
                            <RichText.Content value={attributes.contenteMD} /></option>
                        <option selected="">
                            <RichText.Content value={attributes.contentpTG} /></option>
                        <option>
                            <RichText.Content value={attributes.contentfeC} /></option>
                        <option>
                            <RichText.Content value={attributes.contentKib} /></option>
                    </select>
                </div>
                <div class="hidden sm:block">
                    <nav class="-mb-px flex space-x-8"> <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentJTS} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentCpK} /></span>
 <span class="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" aria-current="page"><RichText.Content value={attributes.contentdUF} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentGZZ} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentgxD} /></span>

                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        