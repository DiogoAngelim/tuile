
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/bullets-and-text', {
            title: 'bullets and text',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentQov": {
    "type": "string",
    "default": "Create account"
  },
  "contentuqN": {
    "type": "string",
    "default": "Profile information"
  },
  "contentYOa": {
    "type": "string",
    "default": "Theme"
  },
  "contentNgD": {
    "type": "string",
    "default": "Preview"
  },
  "svgwce": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgwce }
            onChange={ ( value ) => {
              setAttributes({ svgwce: value });
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
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-center" aria-label="Progress">
                <ol role="list" className="space-y-6">
                    <li> <span className="group">
          <span className="flex items-start">
            <span className="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
              
              
      <svg
         className="h-full w-full text-indigo-600 group-hover:text-indigo-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwce }}
        >
      </svg>
      
            </span>
 <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900"><RichText tagName="span" value={attributes.contentQov} default="Create account" onChange={ (newtext) =>  {
        setAttributes({ contentQov: newtext });
      }}
    /></span>
</span>
                        </span>
                    </li>
                    <li> <span className="flex items-start" aria-current="step">
          <span className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
            <span className="absolute h-4 w-4 rounded-full bg-indigo-200"/>

                        <span className="relative block w-2 h-2 bg-indigo-600 rounded-full"/>
                            </span> <span className="ml-3 text-sm font-medium text-indigo-600"><RichText tagName="span" value={attributes.contentuqN} default="Profile information" onChange={ (newtext) =>  {
        setAttributes({ contentuqN: newtext });
      }}
    /></span>
</span>
                    </li>
                    <li> <span className="group">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
              <div className="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400"/>
            </div>
            <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900"><RichText tagName="span" value={attributes.contentYOa} default="Theme" onChange={ (newtext) =>  {
        setAttributes({ contentYOa: newtext });
      }}
    /></p>
          </div>
        </span>

                    </li>
                    <li> <span className="group">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
              <div className="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400"/>
            </div>
            <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900"><RichText tagName="span" value={attributes.contentNgD} default="Preview" onChange={ (newtext) =>  {
        setAttributes({ contentNgD: newtext });
      }}
    /></p>
          </div>
        </span>

                    </li>
                </ol>
            </nav>
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
        <div class="py-12 px-4 sm:px-6 lg:px-8">
            <nav class="flex justify-center" aria-label="Progress">
                <ol role="list" class="space-y-6">
                    <li> <span class="group">
          <span class="flex items-start">
            <span class="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
              
              
      <svg
         class="h-full w-full text-indigo-600 group-hover:text-indigo-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwce }}
        >
      </svg>
      
            </span>
 <span class="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900"><RichText.Content value={attributes.contentQov} /></span>
</span>
                        </span>
                    </li>
                    <li> <span class="flex items-start" aria-current="step">
          <span class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
            <span class="absolute h-4 w-4 rounded-full bg-indigo-200"/>

                        <span class="relative block w-2 h-2 bg-indigo-600 rounded-full"/>
                            </span> <span class="ml-3 text-sm font-medium text-indigo-600"><RichText.Content value={attributes.contentuqN} /></span>
</span>
                    </li>
                    <li> <span class="group">
          <div class="flex items-start">
            <div class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
              <div class="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400"/>
            </div>
            <p class="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900"><RichText.Content value={attributes.contentYOa} /></p>
          </div>
        </span>

                    </li>
                    <li> <span class="group">
          <div class="flex items-start">
            <div class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
              <div class="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400"/>
            </div>
            <p class="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900"><RichText.Content value={attributes.contentNgD} /></p>
          </div>
        </span>

                    </li>
                </ol>
            </nav>
        </div>
    </div>
</div>
            );
            },
        });
        