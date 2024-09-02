
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/full-width-bar', {
            title: 'full width bar',
            icon: (<img src="data:image/jpeg;base64,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NhEolEBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXPP6vx/ZFZivlvb4qZucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYFwQucNi5w2BcELnDYucNgXBC5w2LnDYH/9k=" />),
            category: 'common',
            attributes: {
  "contentiZX": {
    "type": "string",
    "default": "Home"
  },
  "contentPOM": {
    "type": "string",
    "default": "Projects"
  },
  "contentCyA": {
    "type": "string",
    "default": "Project Nero"
  },
  "svgFWn": {
    "type": "string",
    "default": "<path d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\"/>"
  },
  "svgvaE": {
    "type": "string",
    "default": "<path d=\"M.293 0l22 22-22 22h1.414l22-22-22-22H.293z\"/>"
  },
  "svgozh": {
    "type": "string",
    "default": "<path d=\"M.293 0l22 22-22 22h1.414l22-22-22-22H.293z\"/>"
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
            value={ attributes.svgFWn }
            onChange={ ( value ) => {
              setAttributes({ svgFWn: value });
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
            value={ attributes.svgvaE }
            onChange={ ( value ) => {
              setAttributes({ svgvaE: value });
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
            value={ attributes.svgozh }
            onChange={ ( value ) => {
              setAttributes({ svgozh: value });
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
        <nav className="bg-white border-b border-gray-200 flex" aria-label="Breadcrumb">
            <ol role="list" className="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8">
                <li className="flex">
                    <div className="flex items-center"> <span className="text-gray-400 hover:text-gray-500">
          
          
      <svg
         className="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFWn }}
        >
      </svg>
      
          <span className="sr-only"><RichText tagName="span" value={attributes.contentiZX} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentiZX: newtext });
      }}
    /></span>
</span>
                    </div>
                </li>
                <li className="flex">
                    <div className="flex items-center">
                        
      <svg
         className="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvaE }}
        >
      </svg>
       <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"><RichText tagName="span" value={attributes.contentPOM} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentPOM: newtext });
      }}
    /></span>

                    </div>
                </li>
                <li className="flex">
                    <div className="flex items-center">
                        
      <svg
         className="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgozh }}
        >
      </svg>
       <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page"><RichText tagName="span" value={attributes.contentCyA} default="Project Nero" onChange={ (newtext) =>  {
        setAttributes({ contentCyA: newtext });
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
        <nav class="bg-white border-b border-gray-200 flex" aria-label="Breadcrumb">
            <ol role="list" class="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8">
                <li class="flex">
                    <div class="flex items-center"> <span class="text-gray-400 hover:text-gray-500">
          
          
      <svg
         class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFWn }}
        >
      </svg>
      
          <span class="sr-only"><RichText.Content value={attributes.contentiZX} /></span>
</span>
                    </div>
                </li>
                <li class="flex">
                    <div class="flex items-center">
                        
      <svg
         class="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvaE }}
        >
      </svg>
       <span class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"><RichText.Content value={attributes.contentPOM} /></span>

                    </div>
                </li>
                <li class="flex">
                    <div class="flex items-center">
                        
      <svg
         class="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgozh }}
        >
      </svg>
       <span class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page"><RichText.Content value={attributes.contentCyA} /></span>

                    </div>
                </li>
            </ol>
        </nav>
    </div>
</div>
            );
            },
        });
        