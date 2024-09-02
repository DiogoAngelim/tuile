
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-card-footer', {
            title: 'simple card footer',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentGza": {
    "type": "string",
    "default": "\n      Showing\n      "
  },
  "contentpSZ": {
    "type": "string",
    "default": "1"
  },
  "contentXDd": {
    "type": "string",
    "default": "\n      to\n      "
  },
  "contentuRg": {
    "type": "string",
    "default": "10"
  },
  "contentFSH": {
    "type": "string",
    "default": "\n      of\n      "
  },
  "contentleO": {
    "type": "string",
    "default": "20"
  },
  "contentHNr": {
    "type": "string",
    "default": "\n      results\n    "
  },
  "contentTKw": {
    "type": "string",
    "default": " Previous "
  },
  "contentkcp": {
    "type": "string",
    "default": " Next "
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
        <nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6" aria-label="Pagination">
            <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                    <RichText tagName="span" value={attributes.contentGza} default="Showing" onChange={ (newtext) => { setAttributes({ contentGza: newtext }); }} /><span className="font-medium"><RichText tagName="span" value={attributes.contentpSZ} default="1" onChange={ (newtext) =>  {
        setAttributes({ contentpSZ: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentXDd} default="to" onChange={ (newtext) =>  {
        setAttributes({ contentXDd: newtext });
      }}
    /><span className="font-medium"><RichText tagName="span" value={attributes.contentuRg} default="10" onChange={ (newtext) =>  {
        setAttributes({ contentuRg: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentFSH} default="of" onChange={ (newtext) =>  {
        setAttributes({ contentFSH: newtext });
      }}
    /><span className="font-medium"><RichText tagName="span" value={attributes.contentleO} default="20" onChange={ (newtext) =>  {
        setAttributes({ contentleO: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentHNr} default="results" onChange={ (newtext) =>  {
        setAttributes({ contentHNr: newtext });
      }}
    /></p>
  </div>
  <div className="flex-1 flex justify-between sm:justify-end">
    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"><RichText tagName="span" value={attributes.contentTKw} default="Previous" onChange={ (newtext) =>  {
        setAttributes({ contentTKw: newtext });
      }}
    /></span>
 <span className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"><RichText tagName="span" value={attributes.contentkcp} default="Next" onChange={ (newtext) =>  {
        setAttributes({ contentkcp: newtext });
      }}
    /></span>

            </div>
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
        <nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6" aria-label="Pagination">
            <div class="hidden sm:block">
                <p class="text-sm text-gray-700">
                    <RichText.Content value={attributes.contentGza} /><span class="font-medium"><RichText.Content value={attributes.contentpSZ} /></span><RichText.Content value={attributes.contentXDd} /><span class="font-medium"><RichText.Content value={attributes.contentuRg} /></span><RichText.Content value={attributes.contentFSH} /><span class="font-medium"><RichText.Content value={attributes.contentleO} /></span><RichText.Content value={attributes.contentHNr} /></p>
  </div>
  <div class="flex-1 flex justify-between sm:justify-end">
    <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"><RichText.Content value={attributes.contentTKw} /></span>
 <span class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"><RichText.Content value={attributes.contentkcp} /></span>

            </div>
        </nav>
    </div>
</div>
            );
            },
        });
        