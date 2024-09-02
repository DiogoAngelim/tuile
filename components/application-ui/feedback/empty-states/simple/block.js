
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple', {
            title: 'simple',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentrhM": {
    "type": "string",
    "default": "No projects"
  },
  "contentcNc": {
    "type": "string",
    "default": "Get started by creating a new project."
  },
  "contentJiS": {
    "type": "string",
    "default": "\n      New Project\n    "
  },
  "svgePl": {
    "type": "string",
    "default": "<path vector-effect=\"non-scaling-stroke\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z\"/>"
  },
  "svgIOD": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgePl }
            onChange={ ( value ) => {
              setAttributes({ svgePl: value });
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
            value={ attributes.svgIOD }
            onChange={ ( value ) => {
              setAttributes({ svgIOD: value });
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
        <div className="text-center">
            
      <svg
         className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgePl }}
        >
      </svg>
      
             <h3 className="mt-2 text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentrhM} default="No projects" onChange={ (newtext) =>  {
        setAttributes({ contentrhM: newtext });
      }}
    /></h3>

            <p className="mt-1 text-sm text-gray-500">
                <RichText tagName="span" value={attributes.contentcNc} default="Get started by creating a new project." onChange={ (newtext) => { setAttributes({ contentcNc: newtext }); }} /></p>
            <div className="mt-6">
                <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    
      <svg
         className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIOD }}
        >
      </svg>
      
                    <RichText tagName="span" value={attributes.contentJiS} default="New Project" onChange={ (newtext) => { setAttributes({ contentJiS: newtext }); }} /></button>
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
        <div class="text-center">
            
      <svg
         class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgePl }}
        >
      </svg>
      
             <h3 class="mt-2 text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentrhM} /></h3>

            <p class="mt-1 text-sm text-gray-500">
                <RichText.Content value={attributes.contentcNc} /></p>
            <div class="mt-6">
                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    
      <svg
         class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIOD }}
        >
      </svg>
      
                    <RichText.Content value={attributes.contentJiS} /></button>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        