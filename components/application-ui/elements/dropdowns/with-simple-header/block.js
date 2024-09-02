
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-simple-header', {
            title: 'with simple header',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentcmG": {
    "type": "string",
    "default": "\n      Options\n      \n      "
  },
  "contentyAI": {
    "type": "string",
    "default": "Signed in as"
  },
  "contentjXJ": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentjCz": {
    "type": "string",
    "default": "Account settings"
  },
  "contentgDM": {
    "type": "string",
    "default": "Support"
  },
  "contentdAV": {
    "type": "string",
    "default": "License"
  },
  "contentBOw": {
    "type": "string",
    "default": "Sign out"
  },
  "svgtEY": {
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
            value={ attributes.svgtEY }
            onChange={ ( value ) => {
              setAttributes({ svgtEY: value });
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
                    <RichText tagName="span" value={attributes.contentcmG} default="Options" onChange={ (newtext) => { setAttributes({ contentcmG: newtext }); }} />
                        
      <svg
         className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtEY }}
        >
      </svg>
      
                </button>
            </div>
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="px-4 py-3" role="none">
                    <p className="text-sm" role="none">
                        <RichText tagName="span" value={attributes.contentyAI} default="Signed in as" onChange={ (newtext) => { setAttributes({ contentyAI: newtext }); }} /></p>
                    <p className="text-sm font-medium text-gray-900 truncate" role="none">
                        <RichText tagName="span" value={attributes.contentjXJ} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentjXJ: newtext }); }} /></p>
                </div>
                <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0"><RichText tagName="span" value={attributes.contentjCz} default="Account settings" onChange={ (newtext) =>  {
        setAttributes({ contentjCz: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1"><RichText tagName="span" value={attributes.contentgDM} default="Support" onChange={ (newtext) =>  {
        setAttributes({ contentgDM: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2"><RichText tagName="span" value={attributes.contentdAV} default="License" onChange={ (newtext) =>  {
        setAttributes({ contentdAV: newtext });
      }}
    /></span>

                </div>
                <div className="py-1" role="none">
                    <form method="POST" action="#" role="none">
                        <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">
                            <RichText tagName="span" value={attributes.contentBOw} default="Sign out" onChange={ (newtext) => { setAttributes({ contentBOw: newtext }); }} /></button>
                    </form>
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
                    <RichText.Content value={attributes.contentcmG} />
                        
      <svg
         class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtEY }}
        >
      </svg>
      
                </button>
            </div>
            <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="px-4 py-3" role="none">
                    <p class="text-sm" role="none">
                        <RichText.Content value={attributes.contentyAI} /></p>
                    <p class="text-sm font-medium text-gray-900 truncate" role="none">
                        <RichText.Content value={attributes.contentjXJ} /></p>
                </div>
                <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0"><RichText.Content value={attributes.contentjCz} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1"><RichText.Content value={attributes.contentgDM} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2"><RichText.Content value={attributes.contentdAV} /></span>

                </div>
                <div class="py-1" role="none">
                    <form method="POST" action="#" role="none">
                        <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">
                            <RichText.Content value={attributes.contentBOw} /></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        