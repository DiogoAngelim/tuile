
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-badge-and-dropdown', {
            title: 'with badge and dropdown',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentxGN": {
    "type": "string",
    "default": "Full-Stack Developer"
  },
  "contentOEJ": {
    "type": "string",
    "default": "Checkout and Payments Team"
  },
  "contentxOb": {
    "type": "string",
    "default": " Open "
  },
  "contentVoA": {
    "type": "string",
    "default": "Open options"
  },
  "contentnzO": {
    "type": "string",
    "default": "Edit"
  },
  "contentbMA": {
    "type": "string",
    "default": "Duplicate"
  },
  "contentQUg": {
    "type": "string",
    "default": "Archive"
  },
  "svggca": {
    "type": "string",
    "default": "<path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"/>"
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
            value={ attributes.svggca }
            onChange={ ( value ) => {
              setAttributes({ svggca: value });
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
        <div className="pb-5 border-b border-gray-200">
            <div className="sm:flex sm:justify-between sm:items-baseline">
                <div className="sm:w-0 sm:flex-1">
                     <h1 id="message-heading" className="text-lg font-medium text-gray-900"><RichText tagName="span" value={attributes.contentxGN} default="Full-Stack Developer" onChange={ (newtext) =>  {
        setAttributes({ contentxGN: newtext });
      }}
    /></h1>

                    <p className="mt-1 text-sm text-gray-500 truncate">
                        <RichText tagName="span" value={attributes.contentOEJ} default="Checkout and Payments Team" onChange={ (newtext) => { setAttributes({ contentOEJ: newtext }); }} /></p>
                </div>
                <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start"> <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800"><RichText tagName="span" value={attributes.contentxOb} default="Open" onChange={ (newtext) =>  {
        setAttributes({ contentxOb: newtext });
      }}
    /></span>

                    <div className="ml-3 relative inline-block text-left">
                        <div>
                            <button type="button" className="-my-2 p-2 rounded-full bg-white flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="menu-0-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentVoA} default="Open options" onChange={ (newtext) =>  {
        setAttributes({ contentVoA: newtext });
      }}
    /></span>

                                
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggca }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
                            <div className="py-1" role="none"> <span className="text-gray-700 flex justify-between px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-0">
              <span><RichText tagName="span" value={attributes.contentnzO} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentnzO: newtext });
      }}
    /></span>
</span> <span className="text-gray-700 flex justify-between px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-1">
              <span><RichText tagName="span" value={attributes.contentbMA} default="Duplicate" onChange={ (newtext) =>  {
        setAttributes({ contentbMA: newtext });
      }}
    /></span>
</span>
                                <button type="button" className="text-gray-700 w-full flex justify-between px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-2"> <span><RichText tagName="span" value={attributes.contentQUg} default="Archive" onChange={ (newtext) =>  {
        setAttributes({ contentQUg: newtext });
      }}
    /></span>

                                </button>
                            </div>
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
        <div class="pb-5 border-b border-gray-200">
            <div class="sm:flex sm:justify-between sm:items-baseline">
                <div class="sm:w-0 sm:flex-1">
                     <h1 id="message-heading" class="text-lg font-medium text-gray-900"><RichText.Content value={attributes.contentxGN} /></h1>

                    <p class="mt-1 text-sm text-gray-500 truncate">
                        <RichText.Content value={attributes.contentOEJ} /></p>
                </div>
                <div class="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start"> <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800"><RichText.Content value={attributes.contentxOb} /></span>

                    <div class="ml-3 relative inline-block text-left">
                        <div>
                            <button type="button" class="-my-2 p-2 rounded-full bg-white flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="menu-0-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentVoA} /></span>

                                
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggca }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
                            <div class="py-1" role="none"> <span class="text-gray-700 flex justify-between px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-0">
              <span><RichText.Content value={attributes.contentnzO} /></span>
</span> <span class="text-gray-700 flex justify-between px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-1">
              <span><RichText.Content value={attributes.contentbMA} /></span>
</span>
                                <button type="button" class="text-gray-700 w-full flex justify-between px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-2"> <span><RichText.Content value={attributes.contentQUg} /></span>

                                </button>
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
        });
        