
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/tabs-with-underline-and-icons', {
            title: 'tabs with underline and icons',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentrxo": {
    "type": "string",
    "default": "Select a tab"
  },
  "contentJgw": {
    "type": "string",
    "default": "My Account"
  },
  "contentaxM": {
    "type": "string",
    "default": "Company"
  },
  "contentDYr": {
    "type": "string",
    "default": "Team Members"
  },
  "contentgKQ": {
    "type": "string",
    "default": "Billing"
  },
  "contentgiK": {
    "type": "string",
    "default": "My Account"
  },
  "contentJUb": {
    "type": "string",
    "default": "Company"
  },
  "contentRWc": {
    "type": "string",
    "default": "Team Members"
  },
  "contentELR": {
    "type": "string",
    "default": "Billing"
  },
  "svgAAt": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z\" clip-rule=\"evenodd\"/>"
  },
  "svgvHh": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z\" clip-rule=\"evenodd\"/>"
  },
  "svgQzc": {
    "type": "string",
    "default": "<path d=\"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z\"/>"
  },
  "svgFoi": {
    "type": "string",
    "default": "<path d=\"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z\"/>\n            <path fill-rule=\"evenodd\" d=\"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgAAt }
            onChange={ ( value ) => {
              setAttributes({ svgAAt: value });
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
            value={ attributes.svgvHh }
            onChange={ ( value ) => {
              setAttributes({ svgvHh: value });
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
            value={ attributes.svgQzc }
            onChange={ ( value ) => {
              setAttributes({ svgQzc: value });
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
            value={ attributes.svgFoi }
            onChange={ ( value ) => {
              setAttributes({ svgFoi: value });
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
            <div className="sm:hidden">
                <label for="tabs" className="sr-only">
                    <RichText tagName="span" value={attributes.contentrxo} default="Select a tab" onChange={ (newtext) => { setAttributes({ contentrxo: newtext }); }} /></label>
                <select id="tabs" name="tabs" className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                    <option>
                        <RichText tagName="span" value={attributes.contentJgw} default="My Account" onChange={ (newtext) => { setAttributes({ contentJgw: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentaxM} default="Company" onChange={ (newtext) => { setAttributes({ contentaxM: newtext }); }} /></option>
                    <option selected="">
                        <RichText tagName="span" value={attributes.contentDYr} default="Team Members" onChange={ (newtext) => { setAttributes({ contentDYr: newtext }); }} /></option>
                    <option>
                        <RichText tagName="span" value={attributes.contentgKQ} default="Billing" onChange={ (newtext) => { setAttributes({ contentgKQ: newtext }); }} /></option>
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs"> <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm">
          
          
      <svg
         className="text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAAt }}
        >
      </svg>
      
          <span><RichText tagName="span" value={attributes.contentgiK} default="My Account" onChange={ (newtext) =>  {
        setAttributes({ contentgiK: newtext });
      }}
    /></span>
</span> <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm">
          
          
      <svg
         className="text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvHh }}
        >
      </svg>
      
          <span><RichText tagName="span" value={attributes.contentJUb} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentJUb: newtext });
      }}
    /></span>
</span> <span className="border-indigo-500 text-indigo-600 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm" aria-current="page">
          
          
      <svg
         className="text-indigo-500 -ml-0.5 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQzc }}
        >
      </svg>
      
          <span><RichText tagName="span" value={attributes.contentRWc} default="Team Members" onChange={ (newtext) =>  {
        setAttributes({ contentRWc: newtext });
      }}
    /></span>
</span> <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm">
          
          
      <svg
         className="text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFoi }}
        >
      </svg>
      
          <span><RichText tagName="span" value={attributes.contentELR} default="Billing" onChange={ (newtext) =>  {
        setAttributes({ contentELR: newtext });
      }}
    /></span>
</span>
                    </nav>
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
        <div>
            <div class="sm:hidden">
                <label for="tabs" class="sr-only">
                    <RichText.Content value={attributes.contentrxo} /></label>
                <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                    <option>
                        <RichText.Content value={attributes.contentJgw} /></option>
                    <option>
                        <RichText.Content value={attributes.contentaxM} /></option>
                    <option selected="">
                        <RichText.Content value={attributes.contentDYr} /></option>
                    <option>
                        <RichText.Content value={attributes.contentgKQ} /></option>
                </select>
            </div>
            <div class="hidden sm:block">
                <div class="border-b border-gray-200">
                    <nav class="-mb-px flex space-x-8" aria-label="Tabs"> <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm">
          
          
      <svg
         class="text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAAt }}
        >
      </svg>
      
          <span><RichText.Content value={attributes.contentgiK} /></span>
</span> <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm">
          
          
      <svg
         class="text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvHh }}
        >
      </svg>
      
          <span><RichText.Content value={attributes.contentJUb} /></span>
</span> <span class="border-indigo-500 text-indigo-600 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm" aria-current="page">
          
          
      <svg
         class="text-indigo-500 -ml-0.5 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQzc }}
        >
      </svg>
      
          <span><RichText.Content value={attributes.contentRWc} /></span>
</span> <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm">
          
          
      <svg
         class="text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFoi }}
        >
      </svg>
      
          <span><RichText.Content value={attributes.contentELR} /></span>
</span>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        