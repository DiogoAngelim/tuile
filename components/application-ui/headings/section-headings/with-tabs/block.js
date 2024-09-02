
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-tabs', {
            title: 'with tabs',
            icon: (<img src="data:image/jpeg;base64,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DAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAVBLcJww3CcMBUEtwnDDcJwwFQS3CcMNwnDAf//Z" />),
            category: 'common',
            attributes: {
  "contentXJW": {
    "type": "string",
    "default": "Candidates"
  },
  "contentSld": {
    "type": "string",
    "default": "Select a tab"
  },
  "contentlXq": {
    "type": "string",
    "default": "Applied"
  },
  "contentMvO": {
    "type": "string",
    "default": "Phone Screening"
  },
  "contentUGI": {
    "type": "string",
    "default": "Interview"
  },
  "contentrCy": {
    "type": "string",
    "default": "Offer"
  },
  "contentSwB": {
    "type": "string",
    "default": "Hired"
  },
  "contentAnk": {
    "type": "string",
    "default": " Applied "
  },
  "contentrqu": {
    "type": "string",
    "default": " Phone Screening "
  },
  "contentwBD": {
    "type": "string",
    "default": " Interview "
  },
  "contentdFX": {
    "type": "string",
    "default": " Offer "
  },
  "contentTAY": {
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
        <div className="pb-5 border-b border-gray-200 sm:pb-0">
             <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentXJW} default="Candidates" onChange={ (newtext) =>  {
        setAttributes({ contentXJW: newtext });
      }}
    /></h3>

            <div className="mt-3 sm:mt-4">
                <div className="sm:hidden">
                    <label for="current-tab" className="sr-only">
                        <RichText tagName="span" value={attributes.contentSld} default="Select a tab" onChange={ (newtext) => { setAttributes({ contentSld: newtext }); }} /></label>
                    <select id="current-tab" name="current-tab" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option>
                            <RichText tagName="span" value={attributes.contentlXq} default="Applied" onChange={ (newtext) => { setAttributes({ contentlXq: newtext }); }} /></option>
                        <option>
                            <RichText tagName="span" value={attributes.contentMvO} default="Phone Screening" onChange={ (newtext) => { setAttributes({ contentMvO: newtext }); }} /></option>
                        <option selected="">
                            <RichText tagName="span" value={attributes.contentUGI} default="Interview" onChange={ (newtext) => { setAttributes({ contentUGI: newtext }); }} /></option>
                        <option>
                            <RichText tagName="span" value={attributes.contentrCy} default="Offer" onChange={ (newtext) => { setAttributes({ contentrCy: newtext }); }} /></option>
                        <option>
                            <RichText tagName="span" value={attributes.contentSwB} default="Hired" onChange={ (newtext) => { setAttributes({ contentSwB: newtext }); }} /></option>
                    </select>
                </div>
                <div className="hidden sm:block">
                    <nav className="-mb-px flex space-x-8"> <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentAnk} default="Applied" onChange={ (newtext) =>  {
        setAttributes({ contentAnk: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentrqu} default="Phone Screening" onChange={ (newtext) =>  {
        setAttributes({ contentrqu: newtext });
      }}
    /></span>
 <span className="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" aria-current="page"><RichText tagName="span" value={attributes.contentwBD} default="Interview" onChange={ (newtext) =>  {
        setAttributes({ contentwBD: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentdFX} default="Offer" onChange={ (newtext) =>  {
        setAttributes({ contentdFX: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentTAY} default="Hired" onChange={ (newtext) =>  {
        setAttributes({ contentTAY: newtext });
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
        <div class="pb-5 border-b border-gray-200 sm:pb-0">
             <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentXJW} /></h3>

            <div class="mt-3 sm:mt-4">
                <div class="sm:hidden">
                    <label for="current-tab" class="sr-only">
                        <RichText.Content value={attributes.contentSld} /></label>
                    <select id="current-tab" name="current-tab" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option>
                            <RichText.Content value={attributes.contentlXq} /></option>
                        <option>
                            <RichText.Content value={attributes.contentMvO} /></option>
                        <option selected="">
                            <RichText.Content value={attributes.contentUGI} /></option>
                        <option>
                            <RichText.Content value={attributes.contentrCy} /></option>
                        <option>
                            <RichText.Content value={attributes.contentSwB} /></option>
                    </select>
                </div>
                <div class="hidden sm:block">
                    <nav class="-mb-px flex space-x-8"> <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentAnk} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentrqu} /></span>
 <span class="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" aria-current="page"><RichText.Content value={attributes.contentwBD} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentdFX} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentTAY} /></span>

                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        