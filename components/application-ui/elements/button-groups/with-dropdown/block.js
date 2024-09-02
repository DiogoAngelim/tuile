
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-dropdown', {
            title: 'with dropdown',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentHyt": {
    "type": "string",
    "default": "Save changes"
  },
  "contentPJW": {
    "type": "string",
    "default": "Open options"
  },
  "contentngC": {
    "type": "string",
    "default": " Save and schedule "
  },
  "contentOTg": {
    "type": "string",
    "default": " Save and publish "
  },
  "contentdGV": {
    "type": "string",
    "default": " Export PDF "
  },
  "svgfrY": {
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
            value={ attributes.svgfrY }
            onChange={ ( value ) => {
              setAttributes({ svgfrY: value });
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
<span className="relative z-0 inline-flex shadow-sm rounded-md">
  <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"><RichText tagName="span" value={attributes.contentHyt} default="Save changes" onChange={ (newtext) =>  {
        setAttributes({ contentHyt: newtext });
      }}
    /></button>
  <span className="-ml-px relative block">
    <button type="button" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" id="option-menu-button" aria-expanded="true" aria-haspopup="true">
      <span className="sr-only"><RichText tagName="span" value={attributes.contentPJW} default="Open options" onChange={ (newtext) =>  {
        setAttributes({ contentPJW: newtext });
      }}
    /></span>

        
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfrY }}
        >
      </svg>
      
        </button>
        <div className="origin-top-right absolute right-0 mt-2 -mr-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="option-menu-button" tabindex="-1">
            <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="option-menu-item-0"><RichText tagName="span" value={attributes.contentngC} default="Save and schedule" onChange={ (newtext) =>  {
        setAttributes({ contentngC: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="option-menu-item-1"><RichText tagName="span" value={attributes.contentOTg} default="Save and publish" onChange={ (newtext) =>  {
        setAttributes({ contentOTg: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="option-menu-item-2"><RichText tagName="span" value={attributes.contentdGV} default="Export PDF" onChange={ (newtext) =>  {
        setAttributes({ contentdGV: newtext });
      }}
    /></span>

            </div>
        </div>
        </span>
        </span>
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
<span class="relative z-0 inline-flex shadow-sm rounded-md">
  <button type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"><RichText.Content value={attributes.contentHyt} /></button>
  <span class="-ml-px relative block">
    <button type="button" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" id="option-menu-button" aria-expanded="true" aria-haspopup="true">
      <span class="sr-only"><RichText.Content value={attributes.contentPJW} /></span>

        
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfrY }}
        >
      </svg>
      
        </button>
        <div class="origin-top-right absolute right-0 mt-2 -mr-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="option-menu-button" tabindex="-1">
            <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="option-menu-item-0"><RichText.Content value={attributes.contentngC} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="option-menu-item-1"><RichText.Content value={attributes.contentOTg} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="option-menu-item-2"><RichText.Content value={attributes.contentdGV} /></span>

            </div>
        </div>
        </span>
        </span>
    </div>
</div>
            );
            },
        });
        