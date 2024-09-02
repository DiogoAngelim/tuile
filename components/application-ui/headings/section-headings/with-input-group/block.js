
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-input-group', {
            title: 'with input group',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentbkC": {
    "type": "string",
    "default": "Job Postings"
  },
  "contentSQm": {
    "type": "string",
    "default": "Search"
  },
  "contentMWN": {
    "type": "string",
    "default": "Search"
  },
  "contentJCO": {
    "type": "string",
    "default": "Sort"
  },
  "svgRwe": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgXEv": {
    "type": "string",
    "default": "<path d=\"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z\"/>"
  },
  "svgUFr": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgRwe }
            onChange={ ( value ) => {
              setAttributes({ svgRwe: value });
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
            value={ attributes.svgXEv }
            onChange={ ( value ) => {
              setAttributes({ svgXEv: value });
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
            value={ attributes.svgUFr }
            onChange={ ( value ) => {
              setAttributes({ svgUFr: value });
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
        <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
             <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentbkC} default="Job Postings" onChange={ (newtext) =>  {
        setAttributes({ contentbkC: newtext });
      }}
    /></h3>

            <div className="mt-3 sm:mt-0 sm:ml-4">
                <label for="mobile-search-candidate" className="sr-only">
                    <RichText tagName="span" value={attributes.contentSQm} default="Search" onChange={ (newtext) => { setAttributes({ contentSQm: newtext }); }} /></label>
                <label for="desktop-search-candidate" className="sr-only">
                    <RichText tagName="span" value={attributes.contentMWN} default="Search" onChange={ (newtext) => { setAttributes({ contentMWN: newtext }); }} /></label>
                <div className="flex rounded-md shadow-sm">
                    <div className="relative flex-grow focus-within:z-10">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRwe }}
        >
      </svg>
      
                        </div>
                        <input type="text" name="mobile-search-candidate" id="mobile-search-candidate" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:hidden border-gray-300" placeholder="Search"/>
                        <input type="text" name="desktop-search-candidate" id="desktop-search-candidate" className="hidden focus:ring-indigo-500 focus:border-indigo-500 w-full rounded-none rounded-l-md pl-10 sm:block sm:text-sm border-gray-300" placeholder="Search candidates"/>
                    </div>
                    <button type="button" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                        
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgXEv }}
        >
      </svg>
       <span className="ml-2"><RichText tagName="span" value={attributes.contentJCO} default="Sort" onChange={ (newtext) =>  {
        setAttributes({ contentJCO: newtext });
      }}
    /></span>

                        
      <svg
         className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUFr }}
        >
      </svg>
      
                    </button>
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
        <div class="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
             <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentbkC} /></h3>

            <div class="mt-3 sm:mt-0 sm:ml-4">
                <label for="mobile-search-candidate" class="sr-only">
                    <RichText.Content value={attributes.contentSQm} /></label>
                <label for="desktop-search-candidate" class="sr-only">
                    <RichText.Content value={attributes.contentMWN} /></label>
                <div class="flex rounded-md shadow-sm">
                    <div class="relative flex-grow focus-within:z-10">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRwe }}
        >
      </svg>
      
                        </div>
                        <input type="text" name="mobile-search-candidate" id="mobile-search-candidate" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:hidden border-gray-300" placeholder="Search"/>
                        <input type="text" name="desktop-search-candidate" id="desktop-search-candidate" class="hidden focus:ring-indigo-500 focus:border-indigo-500 w-full rounded-none rounded-l-md pl-10 sm:block sm:text-sm border-gray-300" placeholder="Search candidates"/>
                    </div>
                    <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                        
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgXEv }}
        >
      </svg>
       <span class="ml-2"><RichText.Content value={attributes.contentJCO} /></span>

                        
      <svg
         class="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUFr }}
        >
      </svg>
      
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        