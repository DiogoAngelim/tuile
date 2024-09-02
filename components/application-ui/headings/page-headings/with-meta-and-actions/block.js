
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-meta-and-actions', {
            title: 'with meta and actions',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentInt": {
    "type": "string",
    "default": "Back End Developer"
  },
  "contentKsk": {
    "type": "string",
    "default": "\n        Full-time\n      "
  },
  "contentKzz": {
    "type": "string",
    "default": "\n        Remote\n      "
  },
  "contentjGK": {
    "type": "string",
    "default": "\n        $120k &ndash; $140k\n      "
  },
  "contentdqu": {
    "type": "string",
    "default": "\n        Closing on January 9, 2020\n      "
  },
  "contentdQm": {
    "type": "string",
    "default": "\n        Edit\n      "
  },
  "contentbXg": {
    "type": "string",
    "default": "\n        View\n      "
  },
  "contentaoX": {
    "type": "string",
    "default": "\n        Publish\n      "
  },
  "contentZMr": {
    "type": "string",
    "default": "\n        More\n        \n        "
  },
  "contentURq": {
    "type": "string",
    "default": "Edit"
  },
  "contenthRY": {
    "type": "string",
    "default": "View"
  },
  "svgZZr": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z\" clip-rule=\"evenodd\"/>\n                            <path d=\"M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z\"/>"
  },
  "svgIqy": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z\" clip-rule=\"evenodd\"/>"
  },
  "svgqQc": {
    "type": "string",
    "default": "<path d=\"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z\"/>\n                            <path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z\" clip-rule=\"evenodd\"/>"
  },
  "svgdIJ": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z\" clip-rule=\"evenodd\"/>"
  },
  "svgaqq": {
    "type": "string",
    "default": "<path d=\"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z\"/>"
  },
  "svgGxL": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z\" clip-rule=\"evenodd\"/>"
  },
  "svgWNm": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgXvf": {
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
            value={ attributes.svgZZr }
            onChange={ ( value ) => {
              setAttributes({ svgZZr: value });
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
            value={ attributes.svgIqy }
            onChange={ ( value ) => {
              setAttributes({ svgIqy: value });
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
            value={ attributes.svgqQc }
            onChange={ ( value ) => {
              setAttributes({ svgqQc: value });
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
            value={ attributes.svgdIJ }
            onChange={ ( value ) => {
              setAttributes({ svgdIJ: value });
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
            value={ attributes.svgaqq }
            onChange={ ( value ) => {
              setAttributes({ svgaqq: value });
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
            value={ attributes.svgGxL }
            onChange={ ( value ) => {
              setAttributes({ svgGxL: value });
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
            value={ attributes.svgWNm }
            onChange={ ( value ) => {
              setAttributes({ svgWNm: value });
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
            value={ attributes.svgXvf }
            onChange={ ( value ) => {
              setAttributes({ svgXvf: value });
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
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
                 <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"><RichText tagName="span" value={attributes.contentInt} default="Back End Developer" onChange={ (newtext) =>  {
        setAttributes({ contentInt: newtext });
      }}
    /></h2>

                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZZr }}
        >
      </svg>
      
                        <RichText tagName="span" value={attributes.contentKsk} default="Full-time" onChange={ (newtext) => { setAttributes({ contentKsk: newtext }); }} /></div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIqy }}
        >
      </svg>
      
                        <RichText tagName="span" value={attributes.contentKzz} default="Remote" onChange={ (newtext) => { setAttributes({ contentKzz: newtext }); }} /></div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqQc }}
        >
      </svg>
      
                        <RichText tagName="span" value={attributes.contentjGK} default="$120k &ndash; $140k" onChange={ (newtext) => { setAttributes({ contentjGK: newtext }); }} /></div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdIJ }}
        >
      </svg>
      
                        <RichText tagName="span" value={attributes.contentdqu} default="Closing on January 9, 2020" onChange={ (newtext) => { setAttributes({ contentdqu: newtext }); }} /></div>
                </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4"> <span className="hidden sm:block">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        
        
      <svg
         className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaqq }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentdQm} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentdQm: newtext });
      }}
    /></button>
    </span>
 <span className="hidden sm:block ml-3">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        
        
      <svg
         className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGxL }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentbXg} default="View" onChange={ (newtext) =>  {
        setAttributes({ contentbXg: newtext });
      }}
    /></button>
    </span>
 <span className="sm:ml-3">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        
        
      <svg
         className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWNm }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentaoX} default="Publish" onChange={ (newtext) =>  {
        setAttributes({ contentaoX: newtext });
      }}
    /></button>
    </span>
 <span className="ml-3 relative sm:hidden">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true"><RichText tagName="span" value={attributes.contentZMr} default="More" onChange={ (newtext) =>  {
        setAttributes({ contentZMr: newtext });
      }}
    />
      <svg
         className="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgXvf }}
        >
      </svg>
      
      </button>

      
      <div className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">
        
        <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-0"><RichText tagName="span" value={attributes.contentURq} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentURq: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-1"><RichText tagName="span" value={attributes.contenthRY} default="View" onChange={ (newtext) =>  {
        setAttributes({ contenthRY: newtext });
      }}
    /></span>

            </div>
            </span>
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
        <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex-1 min-w-0">
                 <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"><RichText.Content value={attributes.contentInt} /></h2>

                <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                        
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZZr }}
        >
      </svg>
      
                        <RichText.Content value={attributes.contentKsk} /></div>
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                        
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIqy }}
        >
      </svg>
      
                        <RichText.Content value={attributes.contentKzz} /></div>
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                        
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqQc }}
        >
      </svg>
      
                        <RichText.Content value={attributes.contentjGK} /></div>
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                        
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdIJ }}
        >
      </svg>
      
                        <RichText.Content value={attributes.contentdqu} /></div>
                </div>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4"> <span class="hidden sm:block">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        
        
      <svg
         class="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaqq }}
        >
      </svg>
      <RichText.Content value={attributes.contentdQm} /></button>
    </span>
 <span class="hidden sm:block ml-3">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        
        
      <svg
         class="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGxL }}
        >
      </svg>
      <RichText.Content value={attributes.contentbXg} /></button>
    </span>
 <span class="sm:ml-3">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        
        
      <svg
         class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWNm }}
        >
      </svg>
      <RichText.Content value={attributes.contentaoX} /></button>
    </span>
 <span class="ml-3 relative sm:hidden">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true"><RichText.Content value={attributes.contentZMr} />
      <svg
         class="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgXvf }}
        >
      </svg>
      
      </button>

      
      <div class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">
        
        <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-0"><RichText.Content value={attributes.contentURq} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-1"><RichText.Content value={attributes.contenthRY} /></span>

            </div>
            </span>
        </div>
    </div>
</div>
</div>
            );
            },
        });
        