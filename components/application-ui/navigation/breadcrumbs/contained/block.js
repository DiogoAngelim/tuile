
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/contained', {
            title: 'contained',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentvhJ": {
    "type": "string",
    "default": "Home"
  },
  "contentAhd": {
    "type": "string",
    "default": "Projects"
  },
  "contentjBb": {
    "type": "string",
    "default": "Project Nero"
  },
  "svgSgp": {
    "type": "string",
    "default": "<path d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\"/>"
  },
  "svgwih": {
    "type": "string",
    "default": "<path d=\"M.293 0l22 22-22 22h1.414l22-22-22-22H.293z\"/>"
  },
  "svgnpG": {
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
            value={ attributes.svgSgp }
            onChange={ ( value ) => {
              setAttributes({ svgSgp: value });
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
            value={ attributes.svgwih }
            onChange={ ( value ) => {
              setAttributes({ svgwih: value });
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
            value={ attributes.svgnpG }
            onChange={ ( value ) => {
              setAttributes({ svgnpG: value });
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
            <ol role="list" className="bg-white rounded-md shadow px-6 flex space-x-4">
                <li className="flex">
                    <div className="flex items-center"> <span className="text-gray-400 hover:text-gray-500">
          
          
      <svg
         className="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSgp }}
        >
      </svg>
      
          <span className="sr-only"><RichText tagName="span" value={attributes.contentvhJ} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentvhJ: newtext });
      }}
    /></span>
</span>
                    </div>
                </li>
                <li className="flex">
                    <div className="flex items-center">
                        
      <svg
         className="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwih }}
        >
      </svg>
       <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"><RichText tagName="span" value={attributes.contentAhd} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentAhd: newtext });
      }}
    /></span>

                    </div>
                </li>
                <li className="flex">
                    <div className="flex items-center">
                        
      <svg
         className="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnpG }}
        >
      </svg>
       <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page"><RichText tagName="span" value={attributes.contentjBb} default="Project Nero" onChange={ (newtext) =>  {
        setAttributes({ contentjBb: newtext });
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
            <ol role="list" class="bg-white rounded-md shadow px-6 flex space-x-4">
                <li class="flex">
                    <div class="flex items-center"> <span class="text-gray-400 hover:text-gray-500">
          
          
      <svg
         class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSgp }}
        >
      </svg>
      
          <span class="sr-only"><RichText.Content value={attributes.contentvhJ} /></span>
</span>
                    </div>
                </li>
                <li class="flex">
                    <div class="flex items-center">
                        
      <svg
         class="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwih }}
        >
      </svg>
       <span class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"><RichText.Content value={attributes.contentAhd} /></span>

                    </div>
                </li>
                <li class="flex">
                    <div class="flex items-center">
                        
      <svg
         class="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnpG }}
        >
      </svg>
       <span class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page"><RichText.Content value={attributes.contentjBb} /></span>

                    </div>
                </li>
            </ol>
        </nav>
    </div>
</div>
            );
            },
        });
        