
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple', {
            title: 'simple',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentjdQ": {
    "type": "string",
    "default": "Step 1"
  },
  "contentJUn": {
    "type": "string",
    "default": "Job details"
  },
  "contentCmv": {
    "type": "string",
    "default": "Step 2"
  },
  "contentfub": {
    "type": "string",
    "default": "Application form"
  },
  "contenthYE": {
    "type": "string",
    "default": "Step 3"
  },
  "contentTNg": {
    "type": "string",
    "default": "Preview"
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
        <nav aria-label="Progress">
            <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
                <li className="md:flex-1"> <span className="group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
        <span className="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800"><RichText tagName="span" value={attributes.contentjdQ} default="Step 1" onChange={ (newtext) =>  {
        setAttributes({ contentjdQ: newtext });
      }}
    /></span>
 <span className="text-sm font-medium"><RichText tagName="span" value={attributes.contentJUn} default="Job details" onChange={ (newtext) =>  {
        setAttributes({ contentJUn: newtext });
      }}
    /></span>
</span>
                </li>
                <li className="md:flex-1"> <span className="pl-4 py-2 flex flex-col border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4" aria-current="step">
        <span className="text-xs text-indigo-600 font-semibold tracking-wide uppercase"><RichText tagName="span" value={attributes.contentCmv} default="Step 2" onChange={ (newtext) =>  {
        setAttributes({ contentCmv: newtext });
      }}
    /></span>
 <span className="text-sm font-medium"><RichText tagName="span" value={attributes.contentfub} default="Application form" onChange={ (newtext) =>  {
        setAttributes({ contentfub: newtext });
      }}
    /></span>
</span>
                </li>
                <li className="md:flex-1"> <span className="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
        <span className="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700"><RichText tagName="span" value={attributes.contenthYE} default="Step 3" onChange={ (newtext) =>  {
        setAttributes({ contenthYE: newtext });
      }}
    /></span>
 <span className="text-sm font-medium"><RichText tagName="span" value={attributes.contentTNg} default="Preview" onChange={ (newtext) =>  {
        setAttributes({ contentTNg: newtext });
      }}
    /></span>
</span>
                </li>
            </ol>
        </nav>
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
        <nav aria-label="Progress">
            <ol role="list" class="space-y-4 md:flex md:space-y-0 md:space-x-8">
                <li class="md:flex-1"> <span class="group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
        <span class="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800"><RichText.Content value={attributes.contentjdQ} /></span>
 <span class="text-sm font-medium"><RichText.Content value={attributes.contentJUn} /></span>
</span>
                </li>
                <li class="md:flex-1"> <span class="pl-4 py-2 flex flex-col border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4" aria-current="step">
        <span class="text-xs text-indigo-600 font-semibold tracking-wide uppercase"><RichText.Content value={attributes.contentCmv} /></span>
 <span class="text-sm font-medium"><RichText.Content value={attributes.contentfub} /></span>
</span>
                </li>
                <li class="md:flex-1"> <span class="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
        <span class="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700"><RichText.Content value={attributes.contenthYE} /></span>
 <span class="text-sm font-medium"><RichText.Content value={attributes.contentTNg} /></span>
</span>
                </li>
            </ol>
        </nav>
    </div>
</div>
            );
            },
        });
        