
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/brand-with-icons--badges--and-profile-section', {
            title: 'brand with icons  badges  and profile section',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentPQt": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentsId": {
    "type": "string",
    "default": " Team "
  },
  "contentatN": {
    "type": "string",
    "default": " Projects "
  },
  "contentJyf": {
    "type": "string",
    "default": " Calendar "
  },
  "contentmot": {
    "type": "string",
    "default": " Documents "
  },
  "contentXVu": {
    "type": "string",
    "default": " 12 "
  },
  "contentpMs": {
    "type": "string",
    "default": " Reports "
  },
  "contentyRm": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentSmW": {
    "type": "string",
    "default": "View profile"
  },
  "imageurlfvm": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-300-mark-white-text.svg'
  },
  "imagealtrtq": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlGxj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtTFS": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgSfv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgZWw": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgDzP": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgbDm": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgwRC": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgHgX": {
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
            value={ attributes.svgSfv }
            onChange={ ( value ) => {
              setAttributes({ svgSfv: value });
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
            value={ attributes.svgZWw }
            onChange={ ( value ) => {
              setAttributes({ svgZWw: value });
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
            value={ attributes.svgDzP }
            onChange={ ( value ) => {
              setAttributes({ svgDzP: value });
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
            value={ attributes.svgbDm }
            onChange={ ( value ) => {
              setAttributes({ svgbDm: value });
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
            value={ attributes.svgwRC }
            onChange={ ( value ) => {
              setAttributes({ svgwRC: value });
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
            value={ attributes.svgHgX }
            onChange={ ( value ) => {
              setAttributes({ svgHgX: value });
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
        <div className="flex-1 flex flex-col min-h-0 bg-indigo-700">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlfvm: media.url,
            imagealtrtq: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlfvm } 
            alt={ attributes.imagealtrtq } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                </div>
                <nav className="mt-5 flex-1 px-2 space-y-1" aria-label="Sidebar"> <span className="bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSfv }}
        >
      </svg>
      
        <span className="flex-1"><RichText tagName="span" value={attributes.contentPQt} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentPQt: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZWw }}
        >
      </svg>
      
        <span className="flex-1"><RichText tagName="span" value={attributes.contentsId} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentsId: newtext });
      }}
    /></span>
 <span className="bg-indigo-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"> 3 </span>
</span>
                    <span className="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                        
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDzP }}
        >
      </svg>
       <span className="flex-1"><RichText tagName="span" value={attributes.contentatN} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentatN: newtext });
      }}
    /></span>
 <span className="bg-indigo-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"> 4 </span>
</span>
                        <span className="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                            
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbDm }}
        >
      </svg>
       <span className="flex-1"><RichText tagName="span" value={attributes.contentJyf} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentJyf: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwRC }}
        >
      </svg>
      
        <span className="flex-1"><RichText tagName="span" value={attributes.contentmot} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentmot: newtext });
      }}
    /></span>
 <span className="bg-indigo-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"><RichText tagName="span" value={attributes.contentXVu} default="12" onChange={ (newtext) =>  {
        setAttributes({ contentXVu: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHgX }}
        >
      </svg>
      
        <span className="flex-1"><RichText tagName="span" value={attributes.contentpMs} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentpMs: newtext });
      }}
    /></span>
</span>
                </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-indigo-800 p-4"> <span className="flex-shrink-0 w-full group block">
      <div className="flex items-center">
        <div>
          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlGxj: media.url,
            imagealtTFS: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlGxj } 
            alt={ attributes.imagealtTFS } 
            onClick={ open } 
            className="inline-block h-9 w-9 rounded-full"
          /> 
        )} 
      />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-white"><RichText tagName="span" value={attributes.contentyRm} default="Tom Cook" onChange={ (newtext) =>  {
        setAttributes({ contentyRm: newtext });
      }}
    /></p>
          <p className="text-xs font-medium text-indigo-200 group-hover:text-white"><RichText tagName="span" value={attributes.contentSmW} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentSmW: newtext });
      }}
    /></p>
        </div>
      </div>
    </span>

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
        <div class="flex-1 flex flex-col min-h-0 bg-indigo-700">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div class="flex items-center flex-shrink-0 px-4">
                    
      <img
            src={ attributes.imageurlfvm } 
            alt={ attributes.imagealtrtq } 
            class="h-8 w-auto"
          />
                </div>
                <nav class="mt-5 flex-1 px-2 space-y-1" aria-label="Sidebar"> <span class="bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSfv }}
        >
      </svg>
      
        <span class="flex-1"><RichText.Content value={attributes.contentPQt} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZWw }}
        >
      </svg>
      
        <span class="flex-1"><RichText.Content value={attributes.contentsId} /></span>
 <span class="bg-indigo-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"> 3 </span>
</span>
                    <span class="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                        
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDzP }}
        >
      </svg>
       <span class="flex-1"><RichText.Content value={attributes.contentatN} /></span>
 <span class="bg-indigo-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"> 4 </span>
</span>
                        <span class="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                            
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbDm }}
        >
      </svg>
       <span class="flex-1"><RichText.Content value={attributes.contentJyf} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwRC }}
        >
      </svg>
      
        <span class="flex-1"><RichText.Content value={attributes.contentmot} /></span>
 <span class="bg-indigo-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"><RichText.Content value={attributes.contentXVu} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHgX }}
        >
      </svg>
      
        <span class="flex-1"><RichText.Content value={attributes.contentpMs} /></span>
</span>
                </nav>
            </div>
            <div class="flex-shrink-0 flex border-t border-indigo-800 p-4"> <span class="flex-shrink-0 w-full group block">
      <div class="flex items-center">
        <div>
          
      <img
            src={ attributes.imageurlGxj } 
            alt={ attributes.imagealtTFS } 
            class="inline-block h-9 w-9 rounded-full"
          />
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-white"><RichText.Content value={attributes.contentyRm} /></p>
          <p class="text-xs font-medium text-indigo-200 group-hover:text-white"><RichText.Content value={attributes.contentSmW} /></p>
        </div>
      </div>
    </span>

            </div>
        </div>
    </div>
</div>
            );
            },
        });
        