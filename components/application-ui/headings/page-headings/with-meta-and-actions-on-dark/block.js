
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-meta-and-actions-on-dark', {
            title: 'with meta and actions on dark',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentBOJ": {
    "type": "string",
    "default": "Back End Developer"
  },
  "contentpYq": {
    "type": "string",
    "default": "\n        Full-time\n      "
  },
  "contentvHO": {
    "type": "string",
    "default": "\n        Remote\n      "
  },
  "contentEtA": {
    "type": "string",
    "default": "\n        $120k – $140k\n      "
  },
  "contentWxQ": {
    "type": "string",
    "default": "\n        Closing on January 9, 2020\n      "
  },
  "contentKhZ": {
    "type": "string",
    "default": "\n        Edit\n      "
  },
  "contentUZL": {
    "type": "string",
    "default": "\n        View\n      "
  },
  "contentGnC": {
    "type": "string",
    "default": "\n        Publish\n      "
  },
  "contentmAu": {
    "type": "string",
    "default": "\n        More\n        \n        "
  },
  "contentWmF": {
    "type": "string",
    "default": "Edit"
  },
  "contentSXT": {
    "type": "string",
    "default": "View"
  },
  "svglBd": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z\" clip-rule=\"evenodd\"/>\n                            <path d=\"M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z\"/>"
  },
  "svgNbZ": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z\" clip-rule=\"evenodd\"/>"
  },
  "svgliG": {
    "type": "string",
    "default": "<path d=\"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z\"/>\n                            <path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z\" clip-rule=\"evenodd\"/>"
  },
  "svgVGc": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z\" clip-rule=\"evenodd\"/>"
  },
  "svgjsO": {
    "type": "string",
    "default": "<path d=\"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z\"/>"
  },
  "svgLpf": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z\" clip-rule=\"evenodd\"/>"
  },
  "svgCin": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgmgN": {
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
            value={ attributes.svglBd }
            onChange={ ( value ) => {
              setAttributes({ svglBd: value });
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
            value={ attributes.svgNbZ }
            onChange={ ( value ) => {
              setAttributes({ svgNbZ: value });
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
            value={ attributes.svgliG }
            onChange={ ( value ) => {
              setAttributes({ svgliG: value });
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
            value={ attributes.svgVGc }
            onChange={ ( value ) => {
              setAttributes({ svgVGc: value });
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
            value={ attributes.svgjsO }
            onChange={ ( value ) => {
              setAttributes({ svgjsO: value });
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
            value={ attributes.svgLpf }
            onChange={ ( value ) => {
              setAttributes({ svgLpf: value });
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
            value={ attributes.svgCin }
            onChange={ ( value ) => {
              setAttributes({ svgCin: value });
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
            value={ attributes.svgmgN }
            onChange={ ( value ) => {
              setAttributes({ svgmgN: value });
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
                 <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate"><RichText tagName="span" value={attributes.contentBOJ} default="Back End Developer" onChange={ (newtext) =>  {
        setAttributes({ contentBOJ: newtext });
      }}
    /></h2>

                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    <div className="mt-2 flex items-center text-sm text-gray-300">
                        
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglBd }}
        >
      </svg>
      
                        <RichText tagName="span" value={attributes.contentpYq} default="Full-time" onChange={ (newtext) => { setAttributes({ contentpYq: newtext }); }} /></div>
                    <div className="mt-2 flex items-center text-sm text-gray-300">
                        
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNbZ }}
        >
      </svg>
      
                        <RichText tagName="span" value={attributes.contentvHO} default="Remote" onChange={ (newtext) => { setAttributes({ contentvHO: newtext }); }} /></div>
                    <div className="mt-2 flex items-center text-sm text-gray-300">
                        
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgliG }}
        >
      </svg>
      
                        <RichText tagName="span" value={attributes.contentEtA} default="$120k – $140k" onChange={ (newtext) => { setAttributes({ contentEtA: newtext }); }} /></div>
                    <div className="mt-2 flex items-center text-sm text-gray-300">
                        
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVGc }}
        >
      </svg>
      
                        <RichText tagName="span" value={attributes.contentWxQ} default="Closing on January 9, 2020" onChange={ (newtext) => { setAttributes({ contentWxQ: newtext }); }} /></div>
                </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4"> <span className="hidden sm:block">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
        
        
      <svg
         className="-ml-1 mr-2 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjsO }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentKhZ} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentKhZ: newtext });
      }}
    /></button>
    </span>
 <span className="hidden sm:block ml-3">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
        
        
      <svg
         className="-ml-1 mr-2 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLpf }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentUZL} default="View" onChange={ (newtext) =>  {
        setAttributes({ contentUZL: newtext });
      }}
    /></button>
    </span>
 <span className="sm:ml-3">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
        
        
      <svg
         className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCin }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentGnC} default="Publish" onChange={ (newtext) =>  {
        setAttributes({ contentGnC: newtext });
      }}
    /></button>
    </span>
 <span className="ml-3 relative sm:hidden">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true"><RichText tagName="span" value={attributes.contentmAu} default="More" onChange={ (newtext) =>  {
        setAttributes({ contentmAu: newtext });
      }}
    />
      <svg
         className="-mr-1 ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmgN }}
        >
      </svg>
      
      </button>

      
      <div className="origin-top-left absolute left-0 mt-2 -ml-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">
        
        <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-0"><RichText tagName="span" value={attributes.contentWmF} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentWmF: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-1"><RichText tagName="span" value={attributes.contentSXT} default="View" onChange={ (newtext) =>  {
        setAttributes({ contentSXT: newtext });
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
                 <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate"><RichText.Content value={attributes.contentBOJ} /></h2>

                <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    <div class="mt-2 flex items-center text-sm text-gray-300">
                        
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglBd }}
        >
      </svg>
      
                        <RichText.Content value={attributes.contentpYq} /></div>
                    <div class="mt-2 flex items-center text-sm text-gray-300">
                        
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNbZ }}
        >
      </svg>
      
                        <RichText.Content value={attributes.contentvHO} /></div>
                    <div class="mt-2 flex items-center text-sm text-gray-300">
                        
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgliG }}
        >
      </svg>
      
                        <RichText.Content value={attributes.contentEtA} /></div>
                    <div class="mt-2 flex items-center text-sm text-gray-300">
                        
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVGc }}
        >
      </svg>
      
                        <RichText.Content value={attributes.contentWxQ} /></div>
                </div>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4"> <span class="hidden sm:block">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
        
        
      <svg
         class="-ml-1 mr-2 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjsO }}
        >
      </svg>
      <RichText.Content value={attributes.contentKhZ} /></button>
    </span>
 <span class="hidden sm:block ml-3">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
        
        
      <svg
         class="-ml-1 mr-2 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLpf }}
        >
      </svg>
      <RichText.Content value={attributes.contentUZL} /></button>
    </span>
 <span class="sm:ml-3">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
        
        
      <svg
         class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCin }}
        >
      </svg>
      <RichText.Content value={attributes.contentGnC} /></button>
    </span>
 <span class="ml-3 relative sm:hidden">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true"><RichText.Content value={attributes.contentmAu} />
      <svg
         class="-mr-1 ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmgN }}
        >
      </svg>
      
      </button>

      
      <div class="origin-top-left absolute left-0 mt-2 -ml-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">
        
        <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-0"><RichText.Content value={attributes.contentWmF} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-1"><RichText.Content value={attributes.contentSXT} /></span>

            </div>
            </span>
        </div>
    </div>
</div>
</div>
            );
            },
        });
        