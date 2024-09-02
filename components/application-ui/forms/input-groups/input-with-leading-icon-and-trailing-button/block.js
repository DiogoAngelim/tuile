
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/input-with-leading-icon-and-trailing-button', {
            title: 'input with leading icon and trailing button',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contenttqs": {
    "type": "string",
    "default": "Search candidates"
  },
  "contentfSW": {
    "type": "string",
    "default": "Sort"
  },
  "svgoZU": {
    "type": "string",
    "default": "<path d=\"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z\"/>"
  },
  "svgtcQ": {
    "type": "string",
    "default": "<path d=\"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z\"/>"
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
            value={ attributes.svgoZU }
            onChange={ ( value ) => {
              setAttributes({ svgoZU: value });
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
            value={ attributes.svgtcQ }
            onChange={ ( value ) => {
              setAttributes({ svgtcQ: value });
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
        <div>
            <label for="email" className="block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contenttqs} default="Search candidates" onChange={ (newtext) => { setAttributes({ contenttqs: newtext }); }} /></label>
            <div className="mt-1 flex rounded-md shadow-sm">
                <div className="relative flex items-stretch flex-grow focus-within:z-10">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoZU }}
        >
      </svg>
      
                    </div>
                    <input type="email" name="email" id="email" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300" placeholder="John Doe"/>
                </div>
                <button type="button" className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                    
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtcQ }}
        >
      </svg>
       <span><RichText tagName="span" value={attributes.contentfSW} default="Sort" onChange={ (newtext) =>  {
        setAttributes({ contentfSW: newtext });
      }}
    /></span>

                </button>
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
            <label for="email" class="block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contenttqs} /></label>
            <div class="mt-1 flex rounded-md shadow-sm">
                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoZU }}
        >
      </svg>
      
                    </div>
                    <input type="email" name="email" id="email" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300" placeholder="John Doe"/>
                </div>
                <button type="button" class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                    
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtcQ }}
        >
      </svg>
       <span><RichText.Content value={attributes.contentfSW} /></span>

                </button>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        