
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-with-icons-and-badges', {
            title: 'simple with icons and badges',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentvyO": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentrlD": {
    "type": "string",
    "default": " Team "
  },
  "contentpuI": {
    "type": "string",
    "default": " Projects "
  },
  "contentWsu": {
    "type": "string",
    "default": " Calendar "
  },
  "contentNOz": {
    "type": "string",
    "default": " Documents "
  },
  "contentEvS": {
    "type": "string",
    "default": " 12 "
  },
  "contentqiQ": {
    "type": "string",
    "default": " Reports "
  },
  "imageurldCL": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
  },
  "imagealtTtL": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "svganI": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgrjY": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgrmF": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgJVm": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgIzq": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgxge": {
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
            value={ attributes.svganI }
            onChange={ ( value ) => {
              setAttributes({ svganI: value });
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
            value={ attributes.svgrjY }
            onChange={ ( value ) => {
              setAttributes({ svgrjY: value });
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
            value={ attributes.svgrmF }
            onChange={ ( value ) => {
              setAttributes({ svgrmF: value });
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
            value={ attributes.svgJVm }
            onChange={ ( value ) => {
              setAttributes({ svgJVm: value });
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
            value={ attributes.svgIzq }
            onChange={ ( value ) => {
              setAttributes({ svgIzq: value });
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
            value={ attributes.svgxge }
            onChange={ ( value ) => {
              setAttributes({ svgxge: value });
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
            imageurldCL: media.url,
            imagealtTtL: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurldCL } 
            alt={ attributes.imagealtTtL } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
            </div>
            <div className="mt-5 flex-grow flex flex-col">
                <nav className="flex-1 px-2 bg-white space-y-1" aria-label="Sidebar"> <span className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svganI }}
        >
      </svg>
      
        <span className="flex-1"><RichText tagName="span" value={attributes.contentvyO} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentvyO: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrjY }}
        >
      </svg>
      
        <span className="flex-1"><RichText tagName="span" value={attributes.contentrlD} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentrlD: newtext });
      }}
    /></span>
 <span className="bg-gray-100 group-hover:bg-gray-200 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"> 3 </span>
</span>
                    <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                        
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrmF }}
        >
      </svg>
       <span className="flex-1"><RichText tagName="span" value={attributes.contentpuI} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentpuI: newtext });
      }}
    /></span>
 <span className="bg-gray-100 group-hover:bg-gray-200 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"> 4 </span>
</span>
                        <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJVm }}
        >
      </svg>
       <span className="flex-1"><RichText tagName="span" value={attributes.contentWsu} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentWsu: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIzq }}
        >
      </svg>
      
        <span className="flex-1"><RichText tagName="span" value={attributes.contentNOz} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentNOz: newtext });
      }}
    /></span>
 <span className="bg-gray-100 group-hover:bg-gray-200 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"><RichText tagName="span" value={attributes.contentEvS} default="12" onChange={ (newtext) =>  {
        setAttributes({ contentEvS: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxge }}
        >
      </svg>
      
        <span className="flex-1"><RichText tagName="span" value={attributes.contentqiQ} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentqiQ: newtext });
      }}
    /></span>
</span>
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
            src={ attributes.imageurldCL } 
            alt={ attributes.imagealtTtL } 
            class="h-8 w-auto"
          />
            </div>
            <div class="mt-5 flex-grow flex flex-col">
                <nav class="flex-1 px-2 bg-white space-y-1" aria-label="Sidebar"> <span class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svganI }}
        >
      </svg>
      
        <span class="flex-1"><RichText.Content value={attributes.contentvyO} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrjY }}
        >
      </svg>
      
        <span class="flex-1"><RichText.Content value={attributes.contentrlD} /></span>
 <span class="bg-gray-100 group-hover:bg-gray-200 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"> 3 </span>
</span>
                    <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                        
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrmF }}
        >
      </svg>
       <span class="flex-1"><RichText.Content value={attributes.contentpuI} /></span>
 <span class="bg-gray-100 group-hover:bg-gray-200 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"> 4 </span>
</span>
                        <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJVm }}
        >
      </svg>
       <span class="flex-1"><RichText.Content value={attributes.contentWsu} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIzq }}
        >
      </svg>
      
        <span class="flex-1"><RichText.Content value={attributes.contentNOz} /></span>
 <span class="bg-gray-100 group-hover:bg-gray-200 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"><RichText.Content value={attributes.contentEvS} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxge }}
        >
      </svg>
      
        <span class="flex-1"><RichText.Content value={attributes.contentqiQ} /></span>
</span>
                </nav>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        