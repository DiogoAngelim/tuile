
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-with-icons--badges--and-profile-section', {
            title: 'simple with icons  badges  and profile section',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentRJi": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentXjx": {
    "type": "string",
    "default": " Team "
  },
  "contentuBe": {
    "type": "string",
    "default": " Projects "
  },
  "contentria": {
    "type": "string",
    "default": " Calendar "
  },
  "contentVGZ": {
    "type": "string",
    "default": " Documents "
  },
  "contentkRY": {
    "type": "string",
    "default": " 12 "
  },
  "contentiak": {
    "type": "string",
    "default": " Reports "
  },
  "contentnVw": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentkjk": {
    "type": "string",
    "default": "View profile"
  },
  "imageurlYYS": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
  },
  "imagealtWDh": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlsBI": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtPAi": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgvfs": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgcSq": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgFPc": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgSQC": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgfzV": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgsff": {
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
            value={ attributes.svgvfs }
            onChange={ ( value ) => {
              setAttributes({ svgvfs: value });
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
            value={ attributes.svgcSq }
            onChange={ ( value ) => {
              setAttributes({ svgcSq: value });
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
            value={ attributes.svgFPc }
            onChange={ ( value ) => {
              setAttributes({ svgFPc: value });
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
            value={ attributes.svgSQC }
            onChange={ ( value ) => {
              setAttributes({ svgSQC: value });
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
            value={ attributes.svgfzV }
            onChange={ ( value ) => {
              setAttributes({ svgfzV: value });
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
            value={ attributes.svgsff }
            onChange={ ( value ) => {
              setAttributes({ svgsff: value });
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
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlYYS: media.url,
            imagealtWDh: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlYYS } 
            alt={ attributes.imagealtWDh } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                </div>
                <nav className="mt-5 flex-1 px-2 bg-white space-y-1" aria-label="Sidebar"> <span className="bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvfs }}
        >
      </svg>
      
        <span className="flex-1"><RichText tagName="span" value={attributes.contentRJi} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentRJi: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcSq }}
        >
      </svg>
      
        <span className="flex-1"><RichText tagName="span" value={attributes.contentXjx} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentXjx: newtext });
      }}
    /></span>
 <span className="bg-gray-100 group-hover:bg-gray-200 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"> 3 </span>
</span>
                    <span className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                        
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFPc }}
        >
      </svg>
       <span className="flex-1"><RichText tagName="span" value={attributes.contentuBe} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentuBe: newtext });
      }}
    /></span>
 <span className="bg-gray-100 group-hover:bg-gray-200 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"> 4 </span>
</span>
                        <span className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSQC }}
        >
      </svg>
       <span className="flex-1"><RichText tagName="span" value={attributes.contentria} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentria: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfzV }}
        >
      </svg>
      
        <span className="flex-1"><RichText tagName="span" value={attributes.contentVGZ} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentVGZ: newtext });
      }}
    /></span>
 <span className="bg-gray-100 group-hover:bg-gray-200 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"><RichText tagName="span" value={attributes.contentkRY} default="12" onChange={ (newtext) =>  {
        setAttributes({ contentkRY: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsff }}
        >
      </svg>
      
        <span className="flex-1"><RichText tagName="span" value={attributes.contentiak} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentiak: newtext });
      }}
    /></span>
</span>
                </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4"> <span className="flex-shrink-0 w-full group block">
      <div className="flex items-center">
        <div>
          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlsBI: media.url,
            imagealtPAi: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlsBI } 
            alt={ attributes.imagealtPAi } 
            onClick={ open } 
            className="inline-block h-9 w-9 rounded-full"
          /> 
        )} 
      />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900"><RichText tagName="span" value={attributes.contentnVw} default="Tom Cook" onChange={ (newtext) =>  {
        setAttributes({ contentnVw: newtext });
      }}
    /></p>
          <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700"><RichText tagName="span" value={attributes.contentkjk} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentkjk: newtext });
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
        <div class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div class="flex items-center flex-shrink-0 px-4">
                    
      <img
            src={ attributes.imageurlYYS } 
            alt={ attributes.imagealtWDh } 
            class="h-8 w-auto"
          />
                </div>
                <nav class="mt-5 flex-1 px-2 bg-white space-y-1" aria-label="Sidebar"> <span class="bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvfs }}
        >
      </svg>
      
        <span class="flex-1"><RichText.Content value={attributes.contentRJi} /></span>
</span> <span class="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcSq }}
        >
      </svg>
      
        <span class="flex-1"><RichText.Content value={attributes.contentXjx} /></span>
 <span class="bg-gray-100 group-hover:bg-gray-200 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"> 3 </span>
</span>
                    <span class="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                        
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFPc }}
        >
      </svg>
       <span class="flex-1"><RichText.Content value={attributes.contentuBe} /></span>
 <span class="bg-gray-100 group-hover:bg-gray-200 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"> 4 </span>
</span>
                        <span class="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSQC }}
        >
      </svg>
       <span class="flex-1"><RichText.Content value={attributes.contentria} /></span>
</span> <span class="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfzV }}
        >
      </svg>
      
        <span class="flex-1"><RichText.Content value={attributes.contentVGZ} /></span>
 <span class="bg-gray-100 group-hover:bg-gray-200 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"><RichText.Content value={attributes.contentkRY} /></span>
</span> <span class="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        
        
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsff }}
        >
      </svg>
      
        <span class="flex-1"><RichText.Content value={attributes.contentiak} /></span>
</span>
                </nav>
            </div>
            <div class="flex-shrink-0 flex border-t border-gray-200 p-4"> <span class="flex-shrink-0 w-full group block">
      <div class="flex items-center">
        <div>
          
      <img
            src={ attributes.imageurlsBI } 
            alt={ attributes.imagealtPAi } 
            class="inline-block h-9 w-9 rounded-full"
          />
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900"><RichText.Content value={attributes.contentnVw} /></p>
          <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700"><RichText.Content value={attributes.contentkjk} /></p>
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
        