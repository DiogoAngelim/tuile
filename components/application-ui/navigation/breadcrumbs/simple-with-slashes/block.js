
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-with-slashes', {
            title: 'simple with slashes',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentuWz": {
    "type": "string",
    "default": "Home"
  },
  "contentDlG": {
    "type": "string",
    "default": "Projects"
  },
  "contentAWE": {
    "type": "string",
    "default": "Project Nero"
  },
  "svgBBP": {
    "type": "string",
    "default": "<path d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\"/>"
  },
  "svgtdt": {
    "type": "string",
    "default": "<path d=\"M5.555 17.776l8-16 .894.448-8 16-.894-.448z\"/>"
  },
  "svgiue": {
    "type": "string",
    "default": "<path d=\"M5.555 17.776l8-16 .894.448-8 16-.894-.448z\"/>"
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
            value={ attributes.svgBBP }
            onChange={ ( value ) => {
              setAttributes({ svgBBP: value });
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
            value={ attributes.svgtdt }
            onChange={ ( value ) => {
              setAttributes({ svgtdt: value });
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
            value={ attributes.svgiue }
            onChange={ ( value ) => {
              setAttributes({ svgiue: value });
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
        <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
                <li>
                    <div> <span className="text-gray-400 hover:text-gray-500">
          
          
      <svg
         className="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBBP }}
        >
      </svg>
      
          <span className="sr-only"><RichText tagName="span" value={attributes.contentuWz} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentuWz: newtext });
      }}
    /></span>
</span>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        
      <svg
         className="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtdt }}
        >
      </svg>
       <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"><RichText tagName="span" value={attributes.contentDlG} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentDlG: newtext });
      }}
    /></span>

                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        
      <svg
         className="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiue }}
        >
      </svg>
       <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page"><RichText tagName="span" value={attributes.contentAWE} default="Project Nero" onChange={ (newtext) =>  {
        setAttributes({ contentAWE: newtext });
      }}
    /></span>

                    </div>
                </li>
            </ol>
        </nav>
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
        <nav class="flex" aria-label="Breadcrumb">
            <ol role="list" class="flex items-center space-x-4">
                <li>
                    <div> <span class="text-gray-400 hover:text-gray-500">
          
          
      <svg
         class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBBP }}
        >
      </svg>
      
          <span class="sr-only"><RichText.Content value={attributes.contentuWz} /></span>
</span>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        
      <svg
         class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtdt }}
        >
      </svg>
       <span class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"><RichText.Content value={attributes.contentDlG} /></span>

                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        
      <svg
         class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiue }}
        >
      </svg>
       <span class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page"><RichText.Content value={attributes.contentAWE} /></span>

                    </div>
                </li>
            </ol>
        </nav>
    </div>
</div>
            );
            },
        });
        