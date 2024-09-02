
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-icons-and-badges', {
            title: 'with icons and badges',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentgXq": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentCMl": {
    "type": "string",
    "default": " Team "
  },
  "contentcvX": {
    "type": "string",
    "default": " Projects "
  },
  "contentyvM": {
    "type": "string",
    "default": " 19 "
  },
  "contentaYg": {
    "type": "string",
    "default": " Calendar "
  },
  "contentXwJ": {
    "type": "string",
    "default": " 20+ "
  },
  "contentySX": {
    "type": "string",
    "default": " Documents "
  },
  "contentBIq": {
    "type": "string",
    "default": " Reports "
  },
  "svgopT": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgxFg": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgEJv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgpSf": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgWJi": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgtou": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
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
            value={ attributes.svgopT }
            onChange={ ( value ) => {
              setAttributes({ svgopT: value });
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
            value={ attributes.svgxFg }
            onChange={ ( value ) => {
              setAttributes({ svgxFg: value });
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
            value={ attributes.svgEJv }
            onChange={ ( value ) => {
              setAttributes({ svgEJv: value });
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
            value={ attributes.svgpSf }
            onChange={ ( value ) => {
              setAttributes({ svgpSf: value });
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
            value={ attributes.svgWJi }
            onChange={ ( value ) => {
              setAttributes({ svgWJi: value });
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
            value={ attributes.svgtou }
            onChange={ ( value ) => {
              setAttributes({ svgtou: value });
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
        <nav className="space-y-1" aria-label="Sidebar"> <span className="bg-gray-100 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="page">
    
    
      <svg
         className="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgopT }}
        >
      </svg>
      
    <span className="truncate"><RichText tagName="span" value={attributes.contentgXq} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentgXq: newtext });
      }}
    /></span>
 <span className="bg-white ml-auto inline-block py-0.5 px-3 text-xs rounded-full"> 5 </span>
</span>
            <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxFg }}
        >
      </svg>
       <span className="truncate"><RichText tagName="span" value={attributes.contentCMl} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentCMl: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEJv }}
        >
      </svg>
      
    <span className="truncate"><RichText tagName="span" value={attributes.contentcvX} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentcvX: newtext });
      }}
    /></span>
 <span className="bg-gray-100 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs rounded-full"><RichText tagName="span" value={attributes.contentyvM} default="19" onChange={ (newtext) =>  {
        setAttributes({ contentyvM: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpSf }}
        >
      </svg>
      
    <span className="truncate"><RichText tagName="span" value={attributes.contentaYg} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentaYg: newtext });
      }}
    /></span>
 <span className="bg-gray-100 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs rounded-full"><RichText tagName="span" value={attributes.contentXwJ} default="20+" onChange={ (newtext) =>  {
        setAttributes({ contentXwJ: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWJi }}
        >
      </svg>
      
    <span className="truncate"><RichText tagName="span" value={attributes.contentySX} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentySX: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtou }}
        >
      </svg>
      
    <span className="truncate"><RichText tagName="span" value={attributes.contentBIq} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentBIq: newtext });
      }}
    /></span>
</span>
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
        <nav class="space-y-1" aria-label="Sidebar"> <span class="bg-gray-100 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="page">
    
    
      <svg
         class="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgopT }}
        >
      </svg>
      
    <span class="truncate"><RichText.Content value={attributes.contentgXq} /></span>
 <span class="bg-white ml-auto inline-block py-0.5 px-3 text-xs rounded-full"> 5 </span>
</span>
            <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxFg }}
        >
      </svg>
       <span class="truncate"><RichText.Content value={attributes.contentCMl} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEJv }}
        >
      </svg>
      
    <span class="truncate"><RichText.Content value={attributes.contentcvX} /></span>
 <span class="bg-gray-100 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs rounded-full"><RichText.Content value={attributes.contentyvM} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpSf }}
        >
      </svg>
      
    <span class="truncate"><RichText.Content value={attributes.contentaYg} /></span>
 <span class="bg-gray-100 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs rounded-full"><RichText.Content value={attributes.contentXwJ} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWJi }}
        >
      </svg>
      
    <span class="truncate"><RichText.Content value={attributes.contentySX} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtou }}
        >
      </svg>
      
    <span class="truncate"><RichText.Content value={attributes.contentBIq} /></span>
</span>
        </nav>
    </div>
</div>
            );
            },
        });
        