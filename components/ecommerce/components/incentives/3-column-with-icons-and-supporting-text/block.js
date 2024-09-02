
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/3-column-with-icons-and-supporting-text', {
            title: '3 column with icons and supporting text',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentTPh": {
    "type": "string",
    "default": "Our perks"
  },
  "contentdwP": {
    "type": "string",
    "default": "10-year all-inclusive warranty"
  },
  "contenthqE": {
    "type": "string",
    "default": "We’ll replace it with a new one"
  },
  "contentxrb": {
    "type": "string",
    "default": "Free shipping on returns"
  },
  "contentWdj": {
    "type": "string",
    "default": "Send it back for free"
  },
  "contentMjR": {
    "type": "string",
    "default": "Free, contactless delivery"
  },
  "contentTYB": {
    "type": "string",
    "default": "The shipping is on us"
  },
  "svgbyb": {
    "type": "string",
    "default": "<path vector-effect=\"non-scaling-stroke\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgamc": {
    "type": "string",
    "default": "<path vector-effect=\"non-scaling-stroke\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\"/>"
  },
  "svgPwV": {
    "type": "string",
    "default": "<path vector-effect=\"non-scaling-stroke\" d=\"M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z\"/>\n                            <path vector-effect=\"non-scaling-stroke\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0\"/>"
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
            value={ attributes.svgbyb }
            onChange={ ( value ) => {
              setAttributes({ svgbyb: value });
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
            value={ attributes.svgamc }
            onChange={ ( value ) => {
              setAttributes({ svgamc: value });
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
            value={ attributes.svgPwV }
            onChange={ ( value ) => {
              setAttributes({ svgPwV: value });
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
        <div className="bg-white">
             <h2 className="sr-only"><RichText tagName="span" value={attributes.contentTPh} default="Our perks" onChange={ (newtext) =>  {
        setAttributes({ contentTPh: newtext });
      }}
    /></h2>

            <div className="max-w-7xl mx-auto divide-y divide-gray-200 lg:py-8 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x">
                <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
                    <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
                        
      <svg
         xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          dangerouslySetInnerHTML={ { __html: attributes.svgbyb }}
        >
      </svg>
      
                        <div className="ml-4 flex-auto flex flex-col-reverse">
                             <h3 className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentdwP} default="10-year all-inclusive warranty" onChange={ (newtext) =>  {
        setAttributes({ contentdwP: newtext });
      }}
    /></h3>

                            <p className="text-sm text-gray-500">
                                <RichText tagName="span" value={attributes.contenthqE} default="We’ll replace it with a new one" onChange={ (newtext) => { setAttributes({ contenthqE: newtext }); }} /></p>
                        </div>
                    </div>
                </div>
                <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
                    <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
                        
      <svg
         xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          dangerouslySetInnerHTML={ { __html: attributes.svgamc }}
        >
      </svg>
      
                        <div className="ml-4 flex-auto flex flex-col-reverse">
                             <h3 className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentxrb} default="Free shipping on returns" onChange={ (newtext) =>  {
        setAttributes({ contentxrb: newtext });
      }}
    /></h3>

                            <p className="text-sm text-gray-500">
                                <RichText tagName="span" value={attributes.contentWdj} default="Send it back for free" onChange={ (newtext) => { setAttributes({ contentWdj: newtext }); }} /></p>
                        </div>
                    </div>
                </div>
                <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
                    <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
                        
      <svg
         xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          dangerouslySetInnerHTML={ { __html: attributes.svgPwV }}
        >
      </svg>
      
                        <div className="ml-4 flex-auto flex flex-col-reverse">
                             <h3 className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentMjR} default="Free, contactless delivery" onChange={ (newtext) =>  {
        setAttributes({ contentMjR: newtext });
      }}
    /></h3>

                            <p className="text-sm text-gray-500">
                                <RichText tagName="span" value={attributes.contentTYB} default="The shipping is on us" onChange={ (newtext) => { setAttributes({ contentTYB: newtext }); }} /></p>
                        </div>
                    </div>
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
        <div class="bg-white">
             <h2 class="sr-only"><RichText.Content value={attributes.contentTPh} /></h2>

            <div class="max-w-7xl mx-auto divide-y divide-gray-200 lg:py-8 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x">
                <div class="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
                    <div class="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
                        
      <svg
         xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          dangerouslySetInnerHTML={ { __html: attributes.svgbyb }}
        >
      </svg>
      
                        <div class="ml-4 flex-auto flex flex-col-reverse">
                             <h3 class="font-medium text-gray-900"><RichText.Content value={attributes.contentdwP} /></h3>

                            <p class="text-sm text-gray-500">
                                <RichText.Content value={attributes.contenthqE} /></p>
                        </div>
                    </div>
                </div>
                <div class="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
                    <div class="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
                        
      <svg
         xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          dangerouslySetInnerHTML={ { __html: attributes.svgamc }}
        >
      </svg>
      
                        <div class="ml-4 flex-auto flex flex-col-reverse">
                             <h3 class="font-medium text-gray-900"><RichText.Content value={attributes.contentxrb} /></h3>

                            <p class="text-sm text-gray-500">
                                <RichText.Content value={attributes.contentWdj} /></p>
                        </div>
                    </div>
                </div>
                <div class="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
                    <div class="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
                        
      <svg
         xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          dangerouslySetInnerHTML={ { __html: attributes.svgPwV }}
        >
      </svg>
      
                        <div class="ml-4 flex-auto flex flex-col-reverse">
                             <h3 class="font-medium text-gray-900"><RichText.Content value={attributes.contentMjR} /></h3>

                            <p class="text-sm text-gray-500">
                                <RichText.Content value={attributes.contentTYB} /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        