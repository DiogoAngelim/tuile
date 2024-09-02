
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-secondary-navigation', {
            title: 'with secondary navigation',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentYvL": {
    "type": "string",
    "default": "\n          Dashboard\n        "
  },
  "contentesp": {
    "type": "string",
    "default": "\n          Team\n        "
  },
  "contentLpy": {
    "type": "string",
    "default": "\n          Projects\n        "
  },
  "contentYJU": {
    "type": "string",
    "default": "\n          Calendar\n        "
  },
  "contentfcj": {
    "type": "string",
    "default": "\n          Documents\n        "
  },
  "contentnNF": {
    "type": "string",
    "default": "\n          Reports\n        "
  },
  "contentVpp": {
    "type": "string",
    "default": "Projects"
  },
  "contentAfo": {
    "type": "string",
    "default": " Website redesign "
  },
  "contentYVT": {
    "type": "string",
    "default": " GraphQL API "
  },
  "contentdYZ": {
    "type": "string",
    "default": " Customer migration guides "
  },
  "contentdtf": {
    "type": "string",
    "default": " Profit sharing program "
  },
  "imageurlAmz": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
  },
  "imagealtPNq": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "svgCYm": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgNTv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgdlB": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgayF": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgacb": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgCeK": {
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
            value={ attributes.svgCYm }
            onChange={ ( value ) => {
              setAttributes({ svgCYm: value });
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
            value={ attributes.svgNTv }
            onChange={ ( value ) => {
              setAttributes({ svgNTv: value });
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
            value={ attributes.svgdlB }
            onChange={ ( value ) => {
              setAttributes({ svgdlB: value });
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
            value={ attributes.svgayF }
            onChange={ ( value ) => {
              setAttributes({ svgayF: value });
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
            value={ attributes.svgacb }
            onChange={ ( value ) => {
              setAttributes({ svgacb: value });
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
            value={ attributes.svgCeK }
            onChange={ ( value ) => {
              setAttributes({ svgCeK: value });
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
        <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlAmz: media.url,
            imagealtPNq: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlAmz } 
            alt={ attributes.imagealtPNq } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
            </div>
            <div className="mt-5 flex-grow flex flex-col">
                <nav className="flex-1 px-2 space-y-8 bg-white" aria-label="Sidebar">
                    <div className="space-y-1"> <span className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
          
          
      <svg
         className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCYm }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentYvL} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentYvL: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
          
          
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNTv }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentesp} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentesp: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
          
          
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdlB }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentLpy} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentLpy: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
          
          
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgayF }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentYJU} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentYJU: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
          
          
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgacb }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentfcj} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentfcj: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
          
          
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCeK }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentnNF} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentnNF: newtext });
      }}
    /></span>

                    </div>
                    <div className="space-y-1">
                         <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline"><RichText tagName="span" value={attributes.contentVpp} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentVpp: newtext });
      }}
    /></h3>

                        <div className="space-y-1" role="group" aria-labelledby="projects-headline"> <span className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
            <span className="truncate"><RichText tagName="span" value={attributes.contentAfo} default="Website redesign" onChange={ (newtext) =>  {
        setAttributes({ contentAfo: newtext });
      }}
    /></span>
</span> <span className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
            <span className="truncate"><RichText tagName="span" value={attributes.contentYVT} default="GraphQL API" onChange={ (newtext) =>  {
        setAttributes({ contentYVT: newtext });
      }}
    /></span>
</span> <span className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
            <span className="truncate"><RichText tagName="span" value={attributes.contentdYZ} default="Customer migration guides" onChange={ (newtext) =>  {
        setAttributes({ contentdYZ: newtext });
      }}
    /></span>
</span> <span className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
            <span className="truncate"><RichText tagName="span" value={attributes.contentdtf} default="Profit sharing program" onChange={ (newtext) =>  {
        setAttributes({ contentdtf: newtext });
      }}
    /></span>
</span>
                        </div>
                    </div>
                </nav>
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
        <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
                
      <img
            src={ attributes.imageurlAmz } 
            alt={ attributes.imagealtPNq } 
            class="h-8 w-auto"
          />
            </div>
            <div class="mt-5 flex-grow flex flex-col">
                <nav class="flex-1 px-2 space-y-8 bg-white" aria-label="Sidebar">
                    <div class="space-y-1"> <span class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
          
          
      <svg
         class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCYm }}
        >
      </svg>
      <RichText.Content value={attributes.contentYvL} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
          
          
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNTv }}
        >
      </svg>
      <RichText.Content value={attributes.contentesp} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
          
          
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdlB }}
        >
      </svg>
      <RichText.Content value={attributes.contentLpy} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
          
          
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgayF }}
        >
      </svg>
      <RichText.Content value={attributes.contentYJU} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
          
          
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgacb }}
        >
      </svg>
      <RichText.Content value={attributes.contentfcj} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
          
          
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCeK }}
        >
      </svg>
      <RichText.Content value={attributes.contentnNF} /></span>

                    </div>
                    <div class="space-y-1">
                         <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline"><RichText.Content value={attributes.contentVpp} /></h3>

                        <div class="space-y-1" role="group" aria-labelledby="projects-headline"> <span class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
            <span class="truncate"><RichText.Content value={attributes.contentAfo} /></span>
</span> <span class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
            <span class="truncate"><RichText.Content value={attributes.contentYVT} /></span>
</span> <span class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
            <span class="truncate"><RichText.Content value={attributes.contentdYZ} /></span>
</span> <span class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
            <span class="truncate"><RichText.Content value={attributes.contentdtf} /></span>
</span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        