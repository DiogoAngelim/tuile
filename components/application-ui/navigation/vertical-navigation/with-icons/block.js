
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-icons', {
            title: 'with icons',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentsRy": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentgSO": {
    "type": "string",
    "default": " Team "
  },
  "contentulw": {
    "type": "string",
    "default": " Projects "
  },
  "contentUNX": {
    "type": "string",
    "default": " Calendar "
  },
  "contentwpd": {
    "type": "string",
    "default": " Documents "
  },
  "contentIgN": {
    "type": "string",
    "default": " Reports "
  },
  "svgHih": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgRjg": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgsIE": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgURR": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgPaK": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgPCM": {
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
            value={ attributes.svgHih }
            onChange={ ( value ) => {
              setAttributes({ svgHih: value });
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
            value={ attributes.svgRjg }
            onChange={ ( value ) => {
              setAttributes({ svgRjg: value });
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
            value={ attributes.svgsIE }
            onChange={ ( value ) => {
              setAttributes({ svgsIE: value });
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
            value={ attributes.svgURR }
            onChange={ ( value ) => {
              setAttributes({ svgURR: value });
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
            value={ attributes.svgPaK }
            onChange={ ( value ) => {
              setAttributes({ svgPaK: value });
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
            value={ attributes.svgPCM }
            onChange={ ( value ) => {
              setAttributes({ svgPCM: value });
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
          dangerouslySetInnerHTML={ { __html: attributes.svgHih }}
        >
      </svg>
      
    <span className="truncate"><RichText tagName="span" value={attributes.contentsRy} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentsRy: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRjg }}
        >
      </svg>
      
    <span className="truncate"><RichText tagName="span" value={attributes.contentgSO} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentgSO: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsIE }}
        >
      </svg>
      
    <span className="truncate"><RichText tagName="span" value={attributes.contentulw} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentulw: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgURR }}
        >
      </svg>
      
    <span className="truncate"><RichText tagName="span" value={attributes.contentUNX} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentUNX: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPaK }}
        >
      </svg>
      
    <span className="truncate"><RichText tagName="span" value={attributes.contentwpd} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentwpd: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPCM }}
        >
      </svg>
      
    <span className="truncate"><RichText tagName="span" value={attributes.contentIgN} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentIgN: newtext });
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
          dangerouslySetInnerHTML={ { __html: attributes.svgHih }}
        >
      </svg>
      
    <span class="truncate"><RichText.Content value={attributes.contentsRy} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRjg }}
        >
      </svg>
      
    <span class="truncate"><RichText.Content value={attributes.contentgSO} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsIE }}
        >
      </svg>
      
    <span class="truncate"><RichText.Content value={attributes.contentulw} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgURR }}
        >
      </svg>
      
    <span class="truncate"><RichText.Content value={attributes.contentUNX} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPaK }}
        >
      </svg>
      
    <span class="truncate"><RichText.Content value={attributes.contentwpd} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    
    
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPCM }}
        >
      </svg>
      
    <span class="truncate"><RichText.Content value={attributes.contentIgN} /></span>
</span>
        </nav>
    </div>
</div>
            );
            },
        });
        