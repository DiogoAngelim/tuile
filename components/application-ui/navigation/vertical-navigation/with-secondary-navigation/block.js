
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-secondary-navigation', {
            title: 'with secondary navigation',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentacM": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentXAM": {
    "type": "string",
    "default": " Team "
  },
  "contentJHJ": {
    "type": "string",
    "default": " Projects "
  },
  "contentKyh": {
    "type": "string",
    "default": " Calendar "
  },
  "contentnPU": {
    "type": "string",
    "default": " Documents "
  },
  "contentVLR": {
    "type": "string",
    "default": " Reports "
  },
  "contentylP": {
    "type": "string",
    "default": "Projects"
  },
  "contentsIR": {
    "type": "string",
    "default": " Website redesign "
  },
  "contentPRV": {
    "type": "string",
    "default": " GraphQL API "
  },
  "contentsVT": {
    "type": "string",
    "default": " Customer migration guides "
  },
  "contentXLc": {
    "type": "string",
    "default": " Profit sharing program "
  },
  "svgtdS": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgaxm": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgTRn": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgcKE": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svguOZ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgDDF": {
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
            value={ attributes.svgtdS }
            onChange={ ( value ) => {
              setAttributes({ svgtdS: value });
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
            value={ attributes.svgaxm }
            onChange={ ( value ) => {
              setAttributes({ svgaxm: value });
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
            value={ attributes.svgTRn }
            onChange={ ( value ) => {
              setAttributes({ svgTRn: value });
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
            value={ attributes.svgcKE }
            onChange={ ( value ) => {
              setAttributes({ svgcKE: value });
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
            value={ attributes.svguOZ }
            onChange={ ( value ) => {
              setAttributes({ svguOZ: value });
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
            value={ attributes.svgDDF }
            onChange={ ( value ) => {
              setAttributes({ svgDDF: value });
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
        <nav aria-label="Sidebar">
            <div className="space-y-1"> <span className="bg-gray-100 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="page">
      
      
      <svg
         className="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtdS }}
        >
      </svg>
      
      <span className="truncate"><RichText tagName="span" value={attributes.contentacM} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentacM: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
      
      
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaxm }}
        >
      </svg>
      
      <span className="truncate"><RichText tagName="span" value={attributes.contentXAM} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentXAM: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
      
      
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTRn }}
        >
      </svg>
      
      <span className="truncate"><RichText tagName="span" value={attributes.contentJHJ} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentJHJ: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
      
      
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcKE }}
        >
      </svg>
      
      <span className="truncate"><RichText tagName="span" value={attributes.contentKyh} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentKyh: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
      
      
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguOZ }}
        >
      </svg>
      
      <span className="truncate"><RichText tagName="span" value={attributes.contentnPU} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentnPU: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
      
      
      <svg
         className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDDF }}
        >
      </svg>
      
      <span className="truncate"><RichText tagName="span" value={attributes.contentVLR} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentVLR: newtext });
      }}
    /></span>
</span>
            </div>
            <div className="mt-8">
                 <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline"><RichText tagName="span" value={attributes.contentylP} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentylP: newtext });
      }}
    /></h3>

                <div className="mt-1 space-y-1" aria-labelledby="projects-headline"> <span className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
        <span className="truncate"><RichText tagName="span" value={attributes.contentsIR} default="Website redesign" onChange={ (newtext) =>  {
        setAttributes({ contentsIR: newtext });
      }}
    /></span>
</span> <span className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
        <span className="truncate"><RichText tagName="span" value={attributes.contentPRV} default="GraphQL API" onChange={ (newtext) =>  {
        setAttributes({ contentPRV: newtext });
      }}
    /></span>
</span> <span className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
        <span className="truncate"><RichText tagName="span" value={attributes.contentsVT} default="Customer migration guides" onChange={ (newtext) =>  {
        setAttributes({ contentsVT: newtext });
      }}
    /></span>
</span> <span className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
        <span className="truncate"><RichText tagName="span" value={attributes.contentXLc} default="Profit sharing program" onChange={ (newtext) =>  {
        setAttributes({ contentXLc: newtext });
      }}
    /></span>
</span>
                </div>
            </div>
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
        <nav aria-label="Sidebar">
            <div class="space-y-1"> <span class="bg-gray-100 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="page">
      
      
      <svg
         class="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtdS }}
        >
      </svg>
      
      <span class="truncate"><RichText.Content value={attributes.contentacM} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
      
      
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaxm }}
        >
      </svg>
      
      <span class="truncate"><RichText.Content value={attributes.contentXAM} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
      
      
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTRn }}
        >
      </svg>
      
      <span class="truncate"><RichText.Content value={attributes.contentJHJ} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
      
      
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcKE }}
        >
      </svg>
      
      <span class="truncate"><RichText.Content value={attributes.contentKyh} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
      
      
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguOZ }}
        >
      </svg>
      
      <span class="truncate"><RichText.Content value={attributes.contentnPU} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
      
      
      <svg
         class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDDF }}
        >
      </svg>
      
      <span class="truncate"><RichText.Content value={attributes.contentVLR} /></span>
</span>
            </div>
            <div class="mt-8">
                 <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline"><RichText.Content value={attributes.contentylP} /></h3>

                <div class="mt-1 space-y-1" aria-labelledby="projects-headline"> <span class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
        <span class="truncate"><RichText.Content value={attributes.contentsIR} /></span>
</span> <span class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
        <span class="truncate"><RichText.Content value={attributes.contentPRV} /></span>
</span> <span class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
        <span class="truncate"><RichText.Content value={attributes.contentsVT} /></span>
</span> <span class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
        <span class="truncate"><RichText.Content value={attributes.contentXLc} /></span>
</span>
                </div>
            </div>
        </nav>
    </div>
</div>
            );
            },
        });
        