
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-meta--actions--and-breadcrumbs-on-dark', {
            title: 'with meta  actions  and breadcrumbs on dark',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentIuH": {
    "type": "string",
    "default": "Jobs"
  },
  "contentMiA": {
    "type": "string",
    "default": "Engineering"
  },
  "contentIAY": {
    "type": "string",
    "default": "Back End Developer"
  },
  "contentGDT": {
    "type": "string",
    "default": "\n        Full-time\n      "
  },
  "contentYXG": {
    "type": "string",
    "default": "\n        Remote\n      "
  },
  "contentSiK": {
    "type": "string",
    "default": "\n        $120k – $140k\n      "
  },
  "contentUij": {
    "type": "string",
    "default": "\n        Closing on January 9, 2020\n      "
  },
  "contentfgx": {
    "type": "string",
    "default": "\n        Edit\n      "
  },
  "contenthSO": {
    "type": "string",
    "default": "\n        View\n      "
  },
  "contentPVc": {
    "type": "string",
    "default": "\n        Publish\n      "
  },
  "contentxnx": {
    "type": "string",
    "default": "\n        More\n        \n        "
  },
  "contentIMe": {
    "type": "string",
    "default": "Edit"
  },
  "contentOnR": {
    "type": "string",
    "default": "View"
  },
  "svgvra": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgtcC": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z\" clip-rule=\"evenodd\"/>\n                            <path d=\"M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z\"/>"
  },
  "svgzvD": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z\" clip-rule=\"evenodd\"/>"
  },
  "svgccG": {
    "type": "string",
    "default": "<path d=\"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z\"/>\n                            <path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z\" clip-rule=\"evenodd\"/>"
  },
  "svgqil": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z\" clip-rule=\"evenodd\"/>"
  },
  "svgZRk": {
    "type": "string",
    "default": "<path d=\"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z\"/>"
  },
  "svgPzD": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z\" clip-rule=\"evenodd\"/>"
  },
  "svgjtR": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgTOm": {
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
            value={ attributes.svgvra }
            onChange={ ( value ) => {
              setAttributes({ svgvra: value });
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
            value={ attributes.svgtcC }
            onChange={ ( value ) => {
              setAttributes({ svgtcC: value });
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
            value={ attributes.svgzvD }
            onChange={ ( value ) => {
              setAttributes({ svgzvD: value });
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
            value={ attributes.svgccG }
            onChange={ ( value ) => {
              setAttributes({ svgccG: value });
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
            value={ attributes.svgqil }
            onChange={ ( value ) => {
              setAttributes({ svgqil: value });
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
            value={ attributes.svgZRk }
            onChange={ ( value ) => {
              setAttributes({ svgZRk: value });
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
            value={ attributes.svgPzD }
            onChange={ ( value ) => {
              setAttributes({ svgPzD: value });
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
            value={ attributes.svgjtR }
            onChange={ ( value ) => {
              setAttributes({ svgjtR: value });
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
            value={ attributes.svgTOm }
            onChange={ ( value ) => {
              setAttributes({ svgTOm: value });
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
                <nav className="flex" aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-4">
                        <li>
                            <div className="flex"> <span className="text-sm font-medium text-gray-300 hover:text-white"><RichText tagName="span" value={attributes.contentIuH} default="Jobs" onChange={ (newtext) =>  {
        setAttributes({ contentIuH: newtext });
      }}
    /></span>

                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                
      <svg
         className="flex-shrink-0 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvra }}
        >
      </svg>
       <span className="ml-4 text-sm font-medium text-gray-300 hover:text-white"><RichText tagName="span" value={attributes.contentMiA} default="Engineering" onChange={ (newtext) =>  {
        setAttributes({ contentMiA: newtext });
      }}
    /></span>

                            </div>
                        </li>
                    </ol>
                </nav>
                 <h2 className="mt-2 text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate"><RichText tagName="span" value={attributes.contentIAY} default="Back End Developer" onChange={ (newtext) =>  {
        setAttributes({ contentIAY: newtext });
      }}
    /></h2>

                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    <div className="mt-2 flex items-center text-sm text-gray-300">
                        
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtcC }}
        >
      </svg>
      
                        <RichText tagName="span" value={attributes.contentGDT} default="Full-time" onChange={ (newtext) => { setAttributes({ contentGDT: newtext }); }} /></div>
                    <div className="mt-2 flex items-center text-sm text-gray-300">
                        
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzvD }}
        >
      </svg>
      
                        <RichText tagName="span" value={attributes.contentYXG} default="Remote" onChange={ (newtext) => { setAttributes({ contentYXG: newtext }); }} /></div>
                    <div className="mt-2 flex items-center text-sm text-gray-300">
                        
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgccG }}
        >
      </svg>
      
                        <RichText tagName="span" value={attributes.contentSiK} default="$120k – $140k" onChange={ (newtext) => { setAttributes({ contentSiK: newtext }); }} /></div>
                    <div className="mt-2 flex items-center text-sm text-gray-300">
                        
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqil }}
        >
      </svg>
      
                        <RichText tagName="span" value={attributes.contentUij} default="Closing on January 9, 2020" onChange={ (newtext) => { setAttributes({ contentUij: newtext }); }} /></div>
                </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4"> <span className="hidden sm:block">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
        
        
      <svg
         className="-ml-1 mr-2 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZRk }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentfgx} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentfgx: newtext });
      }}
    /></button>
    </span>
 <span className="hidden sm:block ml-3">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
        
        
      <svg
         className="-ml-1 mr-2 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPzD }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contenthSO} default="View" onChange={ (newtext) =>  {
        setAttributes({ contenthSO: newtext });
      }}
    /></button>
    </span>
 <span className="sm:ml-3">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
        
        
      <svg
         className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjtR }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentPVc} default="Publish" onChange={ (newtext) =>  {
        setAttributes({ contentPVc: newtext });
      }}
    /></button>
    </span>
 <span className="ml-3 relative sm:hidden">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true"><RichText tagName="span" value={attributes.contentxnx} default="More" onChange={ (newtext) =>  {
        setAttributes({ contentxnx: newtext });
      }}
    />
      <svg
         className="-mr-1 ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTOm }}
        >
      </svg>
      
      </button>

      
      <div className="origin-top-left absolute left-0 mt-2 -ml-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">
        
        <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-0"><RichText tagName="span" value={attributes.contentIMe} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentIMe: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-1"><RichText tagName="span" value={attributes.contentOnR} default="View" onChange={ (newtext) =>  {
        setAttributes({ contentOnR: newtext });
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
                <nav class="flex" aria-label="Breadcrumb">
                    <ol role="list" class="flex items-center space-x-4">
                        <li>
                            <div class="flex"> <span class="text-sm font-medium text-gray-300 hover:text-white"><RichText.Content value={attributes.contentIuH} /></span>

                            </div>
                        </li>
                        <li>
                            <div class="flex items-center">
                                
      <svg
         class="flex-shrink-0 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvra }}
        >
      </svg>
       <span class="ml-4 text-sm font-medium text-gray-300 hover:text-white"><RichText.Content value={attributes.contentMiA} /></span>

                            </div>
                        </li>
                    </ol>
                </nav>
                 <h2 class="mt-2 text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate"><RichText.Content value={attributes.contentIAY} /></h2>

                <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    <div class="mt-2 flex items-center text-sm text-gray-300">
                        
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtcC }}
        >
      </svg>
      
                        <RichText.Content value={attributes.contentGDT} /></div>
                    <div class="mt-2 flex items-center text-sm text-gray-300">
                        
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzvD }}
        >
      </svg>
      
                        <RichText.Content value={attributes.contentYXG} /></div>
                    <div class="mt-2 flex items-center text-sm text-gray-300">
                        
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgccG }}
        >
      </svg>
      
                        <RichText.Content value={attributes.contentSiK} /></div>
                    <div class="mt-2 flex items-center text-sm text-gray-300">
                        
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqil }}
        >
      </svg>
      
                        <RichText.Content value={attributes.contentUij} /></div>
                </div>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4"> <span class="hidden sm:block">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
        
        
      <svg
         class="-ml-1 mr-2 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZRk }}
        >
      </svg>
      <RichText.Content value={attributes.contentfgx} /></button>
    </span>
 <span class="hidden sm:block ml-3">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
        
        
      <svg
         class="-ml-1 mr-2 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPzD }}
        >
      </svg>
      <RichText.Content value={attributes.contenthSO} /></button>
    </span>
 <span class="sm:ml-3">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
        
        
      <svg
         class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjtR }}
        >
      </svg>
      <RichText.Content value={attributes.contentPVc} /></button>
    </span>
 <span class="ml-3 relative sm:hidden">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true"><RichText.Content value={attributes.contentxnx} />
      <svg
         class="-mr-1 ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTOm }}
        >
      </svg>
      
      </button>

      
      <div class="origin-top-left absolute left-0 mt-2 -ml-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">
        
        <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-0"><RichText.Content value={attributes.contentIMe} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-1"><RichText.Content value={attributes.contentOnR} /></span>

            </div>
            </span>
        </div>
    </div>
</div>
</div>
            );
            },
        });
        