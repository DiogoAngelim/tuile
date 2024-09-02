
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/card-footer-with-page-buttons', {
            title: 'card footer with page buttons',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentoJc": {
    "type": "string",
    "default": " Previous "
  },
  "contenteqm": {
    "type": "string",
    "default": " Next "
  },
  "contentcaA": {
    "type": "string",
    "default": "\n        Showing\n        "
  },
  "contentXJm": {
    "type": "string",
    "default": "1"
  },
  "contentnCI": {
    "type": "string",
    "default": "\n        to\n        "
  },
  "contentbDY": {
    "type": "string",
    "default": "10"
  },
  "contentojT": {
    "type": "string",
    "default": "\n        of\n        "
  },
  "contentLwu": {
    "type": "string",
    "default": "97"
  },
  "contentooa": {
    "type": "string",
    "default": "\n        results\n      "
  },
  "contentrRk": {
    "type": "string",
    "default": "Previous"
  },
  "contentZMp": {
    "type": "string",
    "default": " ... "
  },
  "contentlSN": {
    "type": "string",
    "default": " 10 "
  },
  "contentPVH": {
    "type": "string",
    "default": "Next"
  },
  "svgYhU": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgyyz": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  }
},
            edit(props) {
            const { attributes, setAttributes } = props;

            return (
                <div>
                    <InspectorControls>
                    
    <Panel>
      




































































































































































































































































































































































































































































































































































































































































































    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgYhU }
            onChange={ ( value ) => {
              setAttributes({ svgYhU: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  

    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgyyz }
            onChange={ ( value ) => {
              setAttributes({ svgyyz: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  
    </Panel>
                    </InspectorControls>

                    <div>
    <div>
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden"> <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"><RichText tagName="span" value={attributes.contentoJc} default="Previous" onChange={ (newtext) =>  {
        setAttributes({ contentoJc: newtext });
      }}
    /></span>
 <span className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"><RichText tagName="span" value={attributes.contenteqm} default="Next" onChange={ (newtext) =>  {
        setAttributes({ contenteqm: newtext });
      }}
    /></span>

            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        <RichText tagName="span" value={attributes.contentcaA} default="Showing" onChange={ (newtext) => { setAttributes({ contentcaA: newtext }); }} /><span className="font-medium"><RichText tagName="span" value={attributes.contentXJm} default="1" onChange={ (newtext) =>  {
        setAttributes({ contentXJm: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentnCI} default="to" onChange={ (newtext) =>  {
        setAttributes({ contentnCI: newtext });
      }}
    /><span className="font-medium"><RichText tagName="span" value={attributes.contentbDY} default="10" onChange={ (newtext) =>  {
        setAttributes({ contentbDY: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentojT} default="of" onChange={ (newtext) =>  {
        setAttributes({ contentojT: newtext });
      }}
    /><span className="font-medium"><RichText tagName="span" value={attributes.contentLwu} default="97" onChange={ (newtext) =>  {
        setAttributes({ contentLwu: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentooa} default="results" onChange={ (newtext) =>  {
        setAttributes({ contentooa: newtext });
      }}
    /></p>
    </div>
    <div>
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <span className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span className="sr-only"><RichText tagName="span" value={attributes.contentrRk} default="Previous" onChange={ (newtext) =>  {
        setAttributes({ contentrRk: newtext });
      }}
    /></span>

                            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYhU }}
        >
      </svg>
      
                            </span> <span aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </span>

                            <span className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">2</span> <span className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </span>

                                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                    <RichText tagName="span" value={attributes.contentZMp} default="..." onChange={ (newtext) => { setAttributes({ contentZMp: newtext }); }} /></span> <span className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </span>

                                        <span className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">9</span> <span className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"><RichText tagName="span" value={attributes.contentlSN} default="10" onChange={ (newtext) =>  {
        setAttributes({ contentlSN: newtext });
      }}
    /></span>
 <span className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span className="sr-only"><RichText tagName="span" value={attributes.contentPVH} default="Next" onChange={ (newtext) =>  {
        setAttributes({ contentPVH: newtext });
      }}
    /></span>

                                            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyyz }}
        >
      </svg>
      
                                            </span>
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
        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div class="flex-1 flex justify-between sm:hidden"> <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"><RichText.Content value={attributes.contentoJc} /></span>
 <span class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"><RichText.Content value={attributes.contenteqm} /></span>

            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p class="text-sm text-gray-700">
                        <RichText.Content value={attributes.contentcaA} /><span class="font-medium"><RichText.Content value={attributes.contentXJm} /></span><RichText.Content value={attributes.contentnCI} /><span class="font-medium"><RichText.Content value={attributes.contentbDY} /></span><RichText.Content value={attributes.contentojT} /><span class="font-medium"><RichText.Content value={attributes.contentLwu} /></span><RichText.Content value={attributes.contentooa} /></p>
    </div>
    <div>
      <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <span class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span class="sr-only"><RichText.Content value={attributes.contentrRk} /></span>

                            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYhU }}
        >
      </svg>
      
                            </span> <span aria-current="page" class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </span>

                            <span class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">2</span> <span class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </span>

                                <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                    <RichText.Content value={attributes.contentZMp} /></span> <span class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </span>

                                        <span class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">9</span> <span class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"><RichText.Content value={attributes.contentlSN} /></span>
 <span class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span class="sr-only"><RichText.Content value={attributes.contentPVH} /></span>

                                            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyyz }}
        >
      </svg>
      
                                            </span>
                                            </nav>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        