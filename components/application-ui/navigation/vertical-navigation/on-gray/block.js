
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/on-gray', {
            title: 'on gray',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentayE": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentgXm": {
    "type": "string",
    "default": " Team "
  },
  "contenteEZ": {
    "type": "string",
    "default": " Projects "
  },
  "contentivu": {
    "type": "string",
    "default": " 19 "
  },
  "contentGvd": {
    "type": "string",
    "default": " Calendar "
  },
  "contentUff": {
    "type": "string",
    "default": " 20+ "
  },
  "contentNgt": {
    "type": "string",
    "default": " Documents "
  },
  "contentSbV": {
    "type": "string",
    "default": " Reports "
  },
  "svgoDo": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgAQz": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgGfg": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgwWf": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgEei": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgRvz": {
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
            value={ attributes.svgAQz }
            onChange={ ( value ) => {
              setAttributes({ svgAQz: value });
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
            value={ attributes.svgoDo }
            onChange={ ( value ) => {
              setAttributes({ svgoDo: value });
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
            value={ attributes.svgAQz }
            onChange={ ( value ) => {
              setAttributes({ svgAQz: value });
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
            value={ attributes.svgGfg }
            onChange={ ( value ) => {
              setAttributes({ svgGfg: value });
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
            value={ attributes.svgwWf }
            onChange={ ( value ) => {
              setAttributes({ svgwWf: value });
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
            value={ attributes.svgEei }
            onChange={ ( value ) => {
              setAttributes({ svgEei: value });
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
            value={ attributes.svgRvz }
            onChange={ ( value ) => {
              setAttributes({ svgRvz: value });
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
        <nav className="space-y-1" aria-label="Sidebar"> <span className="bg-gray-200 text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="page">
    
    
      <svg
         className="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoDo }}
        >
      </svg>
      
    <span className="truncate"><RichText tagName="span" value={attributes.contentayE} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentayE: newtext });
      }}
    /></span>
 <span className="bg-gray-50 ml-auto inline-block py-0.5 px-3 text-xs rounded-full"> 5 </span>
</span>
            <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
                
      <svg
         className="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAQz }}
        >
      </svg>
       <span className="truncate"><RichText tagName="span" value={attributes.contentgXm} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentgXm: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         className="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGfg }}
        >
      </svg>
      
    <span className="truncate"><RichText tagName="span" value={attributes.contenteEZ} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contenteEZ: newtext });
      }}
    /></span>
 <span className="bg-gray-200 text-gray-600 ml-auto inline-block py-0.5 px-3 text-xs rounded-full"><RichText tagName="span" value={attributes.contentivu} default="19" onChange={ (newtext) =>  {
        setAttributes({ contentivu: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         className="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwWf }}
        >
      </svg>
      
    <span className="truncate"><RichText tagName="span" value={attributes.contentGvd} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentGvd: newtext });
      }}
    /></span>
 <span className="bg-gray-200 text-gray-600 ml-auto inline-block py-0.5 px-3 text-xs rounded-full"><RichText tagName="span" value={attributes.contentUff} default="20+" onChange={ (newtext) =>  {
        setAttributes({ contentUff: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         className="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEei }}
        >
      </svg>
      
    <span className="truncate"><RichText tagName="span" value={attributes.contentNgt} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentNgt: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         className="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRvz }}
        >
      </svg>
      
    <span className="truncate"><RichText tagName="span" value={attributes.contentSbV} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentSbV: newtext });
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
        <nav class="space-y-1" aria-label="Sidebar"> <span class="bg-gray-200 text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="page">
    
    
      <svg
         class="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoDo }}
        >
      </svg>
      
    <span class="truncate"><RichText.Content value={attributes.contentayE} /></span>
 <span class="bg-gray-50 ml-auto inline-block py-0.5 px-3 text-xs rounded-full"> 5 </span>
</span>
            <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
                
      <svg
         class="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAQz }}
        >
      </svg>
       <span class="truncate"><RichText.Content value={attributes.contentgXm} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         class="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGfg }}
        >
      </svg>
      
    <span class="truncate"><RichText.Content value={attributes.contenteEZ} /></span>
 <span class="bg-gray-200 text-gray-600 ml-auto inline-block py-0.5 px-3 text-xs rounded-full"><RichText.Content value={attributes.contentivu} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         class="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwWf }}
        >
      </svg>
      
    <span class="truncate"><RichText.Content value={attributes.contentGvd} /></span>
 <span class="bg-gray-200 text-gray-600 ml-auto inline-block py-0.5 px-3 text-xs rounded-full"><RichText.Content value={attributes.contentUff} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         class="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEei }}
        >
      </svg>
      
    <span class="truncate"><RichText.Content value={attributes.contentNgt} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         class="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRvz }}
        >
      </svg>
      
    <span class="truncate"><RichText.Content value={attributes.contentSbV} /></span>
</span>
        </nav>
    </div>
</div>
            );
            },
        });
        