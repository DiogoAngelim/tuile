
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/3-column-with-icons', {
            title: '3 column with icons',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentZHx": {
    "type": "string",
    "default": "Why you should buy from us"
  },
  "contentMXE": {
    "type": "string",
    "default": "Free, contactless delivery"
  },
  "contentcDD": {
    "type": "string",
    "default": "No questions asked returns"
  },
  "contentJZq": {
    "type": "string",
    "default": "2-year warranty"
  },
  "svgkHV": {
    "type": "string",
    "default": "<path d=\"M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z\"/>\n                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0\"/>"
  },
  "svgoED": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z\"/>"
  },
  "svggmh": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
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
            value={ attributes.svgkHV }
            onChange={ ( value ) => {
              setAttributes({ svgkHV: value });
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
            value={ attributes.svgoED }
            onChange={ ( value ) => {
              setAttributes({ svgoED: value });
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
            value={ attributes.svggmh }
            onChange={ ( value ) => {
              setAttributes({ svggmh: value });
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
             <h2 className="sr-only"><RichText tagName="span" value={attributes.contentZHx} default="Why you should buy from us" onChange={ (newtext) =>  {
        setAttributes({ contentZHx: newtext });
      }}
    /></h2>

            <div className="flex overflow-x-auto">
                <div className="mx-auto flex space-x-12 whitespace-nowrap py-3 px-4 sm:px-6 lg:space-x-24 lg:px-8">
                    <div className="flex items-center text-sm font-medium text-indigo-600">
                        
      <svg
         className="mr-2 flex-none w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkHV }}
        >
      </svg>
      
                        <p>
                            <RichText tagName="span" value={attributes.contentMXE} default="Free, contactless delivery" onChange={ (newtext) => { setAttributes({ contentMXE: newtext }); }} /></p>
                    </div>
                    <div className="flex items-center text-sm font-medium text-indigo-600">
                        
      <svg
         className="mr-2 flex-none w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoED }}
        >
      </svg>
      
                        <p>
                            <RichText tagName="span" value={attributes.contentcDD} default="No questions asked returns" onChange={ (newtext) => { setAttributes({ contentcDD: newtext }); }} /></p>
                    </div>
                    <div className="flex items-center text-sm font-medium text-indigo-600">
                        
      <svg
         className="mr-2 flex-none w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggmh }}
        >
      </svg>
      
                        <p>
                            <RichText tagName="span" value={attributes.contentJZq} default="2-year warranty" onChange={ (newtext) => { setAttributes({ contentJZq: newtext }); }} /></p>
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
             <h2 class="sr-only"><RichText.Content value={attributes.contentZHx} /></h2>

            <div class="flex overflow-x-auto">
                <div class="mx-auto flex space-x-12 whitespace-nowrap py-3 px-4 sm:px-6 lg:space-x-24 lg:px-8">
                    <div class="flex items-center text-sm font-medium text-indigo-600">
                        
      <svg
         class="mr-2 flex-none w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkHV }}
        >
      </svg>
      
                        <p>
                            <RichText.Content value={attributes.contentMXE} /></p>
                    </div>
                    <div class="flex items-center text-sm font-medium text-indigo-600">
                        
      <svg
         class="mr-2 flex-none w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoED }}
        >
      </svg>
      
                        <p>
                            <RichText.Content value={attributes.contentcDD} /></p>
                    </div>
                    <div class="flex items-center text-sm font-medium text-indigo-600">
                        
      <svg
         class="mr-2 flex-none w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggmh }}
        >
      </svg>
      
                        <p>
                            <RichText.Content value={attributes.contentJZq} /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        