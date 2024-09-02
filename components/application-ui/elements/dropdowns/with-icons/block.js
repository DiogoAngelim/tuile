
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-icons', {
            title: 'with icons',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentWqF": {
    "type": "string",
    "default": "\n      Options\n      \n      "
  },
  "contentrbH": {
    "type": "string",
    "default": "\n        Edit\n      "
  },
  "contentQFB": {
    "type": "string",
    "default": "\n        Duplicate\n      "
  },
  "contentzlL": {
    "type": "string",
    "default": "\n        Archive\n      "
  },
  "contentNiS": {
    "type": "string",
    "default": "\n        Move\n      "
  },
  "contentVem": {
    "type": "string",
    "default": "\n        Share\n      "
  },
  "contenttaI": {
    "type": "string",
    "default": "\n        Add to favorites\n      "
  },
  "contentvfc": {
    "type": "string",
    "default": "\n        Delete\n      "
  },
  "svgcMv": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgCsM": {
    "type": "string",
    "default": "<path d=\"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z\"/>\n          <path fill-rule=\"evenodd\" d=\"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z\" clip-rule=\"evenodd\"/>"
  },
  "svgLUU": {
    "type": "string",
    "default": "<path d=\"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z\"/>\n          <path d=\"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z\"/>"
  },
  "svgZum": {
    "type": "string",
    "default": "<path d=\"M4 3a2 2 0 100 4h12a2 2 0 100-4H4z\"/>\n          <path fill-rule=\"evenodd\" d=\"M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z\" clip-rule=\"evenodd\"/>"
  },
  "svgtLa": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgmkl": {
    "type": "string",
    "default": "<path d=\"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z\"/>"
  },
  "svgUiV": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z\" clip-rule=\"evenodd\"/>"
  },
  "svgrre": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgcMv }
            onChange={ ( value ) => {
              setAttributes({ svgcMv: value });
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
            value={ attributes.svgCsM }
            onChange={ ( value ) => {
              setAttributes({ svgCsM: value });
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
            value={ attributes.svgLUU }
            onChange={ ( value ) => {
              setAttributes({ svgLUU: value });
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
            value={ attributes.svgZum }
            onChange={ ( value ) => {
              setAttributes({ svgZum: value });
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
            value={ attributes.svgtLa }
            onChange={ ( value ) => {
              setAttributes({ svgtLa: value });
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
            value={ attributes.svgmkl }
            onChange={ ( value ) => {
              setAttributes({ svgmkl: value });
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
            value={ attributes.svgUiV }
            onChange={ ( value ) => {
              setAttributes({ svgUiV: value });
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
            value={ attributes.svgrre }
            onChange={ ( value ) => {
              setAttributes({ svgrre: value });
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
        <div className="relative inline-block text-left">
            <div>
                <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    <RichText tagName="span" value={attributes.contentWqF} default="Options" onChange={ (newtext) => { setAttributes({ contentWqF: newtext }); }} />
                        
      <svg
         className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcMv }}
        >
      </svg>
      
                </button>
            </div>
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none"> <span className="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">
        
        
      <svg
         className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCsM }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentrbH} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentrbH: newtext });
      }}
    /></span>
 <span className="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">
        
        
      <svg
         className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLUU }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentQFB} default="Duplicate" onChange={ (newtext) =>  {
        setAttributes({ contentQFB: newtext });
      }}
    /></span>

                </div>
                <div className="py-1" role="none"> <span className="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">
        
        
      <svg
         className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZum }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentzlL} default="Archive" onChange={ (newtext) =>  {
        setAttributes({ contentzlL: newtext });
      }}
    /></span>
 <span className="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">
        
        
      <svg
         className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtLa }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentNiS} default="Move" onChange={ (newtext) =>  {
        setAttributes({ contentNiS: newtext });
      }}
    /></span>

                </div>
                <div className="py-1" role="none"> <span className="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">
        
        
      <svg
         className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmkl }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentVem} default="Share" onChange={ (newtext) =>  {
        setAttributes({ contentVem: newtext });
      }}
    /></span>
 <span className="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">
        
        
      <svg
         className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUiV }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contenttaI} default="Add to favorites" onChange={ (newtext) =>  {
        setAttributes({ contenttaI: newtext });
      }}
    /></span>

                </div>
                <div className="py-1" role="none"> <span className="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">
        
        
      <svg
         className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrre }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentvfc} default="Delete" onChange={ (newtext) =>  {
        setAttributes({ contentvfc: newtext });
      }}
    /></span>

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
        <div class="relative inline-block text-left">
            <div>
                <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    <RichText.Content value={attributes.contentWqF} />
                        
      <svg
         class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcMv }}
        >
      </svg>
      
                </button>
            </div>
            <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none"> <span class="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">
        
        
      <svg
         class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCsM }}
        >
      </svg>
      <RichText.Content value={attributes.contentrbH} /></span>
 <span class="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">
        
        
      <svg
         class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLUU }}
        >
      </svg>
      <RichText.Content value={attributes.contentQFB} /></span>

                </div>
                <div class="py-1" role="none"> <span class="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">
        
        
      <svg
         class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZum }}
        >
      </svg>
      <RichText.Content value={attributes.contentzlL} /></span>
 <span class="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">
        
        
      <svg
         class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtLa }}
        >
      </svg>
      <RichText.Content value={attributes.contentNiS} /></span>

                </div>
                <div class="py-1" role="none"> <span class="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">
        
        
      <svg
         class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmkl }}
        >
      </svg>
      <RichText.Content value={attributes.contentVem} /></span>
 <span class="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">
        
        
      <svg
         class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUiV }}
        >
      </svg>
      <RichText.Content value={attributes.contenttaI} /></span>

                </div>
                <div class="py-1" role="none"> <span class="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">
        
        
      <svg
         class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrre }}
        >
      </svg>
      <RichText.Content value={attributes.contentvfc} /></span>

                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        