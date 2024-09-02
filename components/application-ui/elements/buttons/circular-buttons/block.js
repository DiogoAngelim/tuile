
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/circular-buttons', {
            title: 'circular buttons',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "svgvJg": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z\" clip-rule=\"evenodd\"/>"
  },
  "svgOYO": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z\" clip-rule=\"evenodd\"/>"
  },
  "svgLSO": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z\" clip-rule=\"evenodd\"/>"
  },
  "svgJNN": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6v6m0 0v6m0-6h6m-6 0H6\"/>"
  },
  "svguaE": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6v6m0 0v6m0-6h6m-6 0H6\"/>"
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
            value={ attributes.svgvJg }
            onChange={ ( value ) => {
              setAttributes({ svgvJg: value });
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
            value={ attributes.svgOYO }
            onChange={ ( value ) => {
              setAttributes({ svgOYO: value });
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
            value={ attributes.svgLSO }
            onChange={ ( value ) => {
              setAttributes({ svgLSO: value });
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
            value={ attributes.svgJNN }
            onChange={ ( value ) => {
              setAttributes({ svgJNN: value });
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
            value={ attributes.svguaE }
            onChange={ ( value ) => {
              setAttributes({ svguaE: value });
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
        <button type="button" className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvJg }}
        >
      </svg>
      
        </button>
        <button type="button" className="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOYO }}
        >
      </svg>
      
        </button>
        <button type="button" className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLSO }}
        >
      </svg>
      
        </button>
        <button type="button" className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJNN }}
        >
      </svg>
      
        </button>
        <button type="button" className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguaE }}
        >
      </svg>
      
        </button>
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
        <button type="button" class="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvJg }}
        >
      </svg>
      
        </button>
        <button type="button" class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOYO }}
        >
      </svg>
      
        </button>
        <button type="button" class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLSO }}
        >
      </svg>
      
        </button>
        <button type="button" class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJNN }}
        >
      </svg>
      
        </button>
        <button type="button" class="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguaE }}
        >
      </svg>
      
        </button>
    </div>
</div>
            );
            },
        });
        