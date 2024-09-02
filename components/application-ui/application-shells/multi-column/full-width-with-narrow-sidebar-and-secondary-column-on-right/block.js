
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/full-width-with-narrow-sidebar-and-secondary-column-on-right', {
            title: 'full width with narrow sidebar and secondary column on right',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentLGs": {
    "type": "string",
    "default": "Home"
  },
  "contentVef": {
    "type": "string",
    "default": "All Files"
  },
  "contentbla": {
    "type": "string",
    "default": "Photos"
  },
  "contentqUk": {
    "type": "string",
    "default": "Shared"
  },
  "contenthhF": {
    "type": "string",
    "default": "Albums"
  },
  "contentrTL": {
    "type": "string",
    "default": "Settings"
  },
  "contentWDw": {
    "type": "string",
    "default": "Close sidebar"
  },
  "contentaCR": {
    "type": "string",
    "default": "Home"
  },
  "contentolZ": {
    "type": "string",
    "default": "All Files"
  },
  "contentRcx": {
    "type": "string",
    "default": "Photos"
  },
  "contenttVD": {
    "type": "string",
    "default": "Shared"
  },
  "contentwaQ": {
    "type": "string",
    "default": "Albums"
  },
  "contentrMm": {
    "type": "string",
    "default": "Settings"
  },
  "contenttRu": {
    "type": "string",
    "default": "Open sidebar"
  },
  "contentUlj": {
    "type": "string",
    "default": "Search all files"
  },
  "contentCHl": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentxPW": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentmjn": {
    "type": "string",
    "default": "Sign out"
  },
  "contentdKL": {
    "type": "string",
    "default": "Add file"
  },
  "contentQwk": {
    "type": "string",
    "default": "Photos"
  },
  "imageurlvvW": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtSxt": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlMVs": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtPJO": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlitf": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517365830460-955ce3ccd263.jpeg'
  },
  "imagealtsDS": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgUKS": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgGeE": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
  },
  "svgjeU": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svggDm": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\"/>"
  },
  "svggYN": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10\"/>"
  },
  "svgyhW": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z\"/>\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 12a3 3 0 11-6 0 3 3 0 016 0z\"/>"
  },
  "svgVrS": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgZtu": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgawR": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
  },
  "svgguD": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgbgt": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\"/>"
  },
  "svgOpA": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10\"/>"
  },
  "svgGnv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z\"/>\n                  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 12a3 3 0 11-6 0 3 3 0 016 0z\"/>"
  },
  "svgiGz": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h7\"/>"
  },
  "svgloP": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgfBz": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6v6m0 0v6m0-6h6m-6 0H6\"/>"
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
            value={ attributes.svgUKS }
            onChange={ ( value ) => {
              setAttributes({ svgUKS: value });
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
            value={ attributes.svgGeE }
            onChange={ ( value ) => {
              setAttributes({ svgGeE: value });
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
            value={ attributes.svgjeU }
            onChange={ ( value ) => {
              setAttributes({ svgjeU: value });
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
            value={ attributes.svggDm }
            onChange={ ( value ) => {
              setAttributes({ svggDm: value });
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
            value={ attributes.svggYN }
            onChange={ ( value ) => {
              setAttributes({ svggYN: value });
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
            value={ attributes.svgyhW }
            onChange={ ( value ) => {
              setAttributes({ svgyhW: value });
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
            value={ attributes.svgVrS }
            onChange={ ( value ) => {
              setAttributes({ svgVrS: value });
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
            value={ attributes.svgZtu }
            onChange={ ( value ) => {
              setAttributes({ svgZtu: value });
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
            value={ attributes.svgawR }
            onChange={ ( value ) => {
              setAttributes({ svgawR: value });
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
            value={ attributes.svgguD }
            onChange={ ( value ) => {
              setAttributes({ svgguD: value });
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
            value={ attributes.svgbgt }
            onChange={ ( value ) => {
              setAttributes({ svgbgt: value });
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
            value={ attributes.svgOpA }
            onChange={ ( value ) => {
              setAttributes({ svgOpA: value });
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
            value={ attributes.svgGnv }
            onChange={ ( value ) => {
              setAttributes({ svgGnv: value });
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
            value={ attributes.svgiGz }
            onChange={ ( value ) => {
              setAttributes({ svgiGz: value });
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
            value={ attributes.svgloP }
            onChange={ ( value ) => {
              setAttributes({ svgloP: value });
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
            value={ attributes.svgfBz }
            onChange={ ( value ) => {
              setAttributes({ svgfBz: value });
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
        <div className="h-full flex">
            <div className="hidden w-28 bg-indigo-700 overflow-y-auto md:block">
                <div className="w-full py-6 flex flex-col items-center">
                    <div className="flex-shrink-0 flex items-center">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlvvW: media.url,
            imagealtSxt: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlvvW } 
            alt={ attributes.imagealtSxt } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                    </div>
                    <div className="flex-1 mt-6 w-full px-2 space-y-1"> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         className="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUKS }}
        >
      </svg>
      
          <span className="mt-2"><RichText tagName="span" value={attributes.contentLGs} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentLGs: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         className="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGeE }}
        >
      </svg>
      
          <span className="mt-2"><RichText tagName="span" value={attributes.contentVef} default="All Files" onChange={ (newtext) =>  {
        setAttributes({ contentVef: newtext });
      }}
    /></span>
</span> <span className="bg-indigo-800 text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" aria-current="page">
          
          
      <svg
         className="text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjeU }}
        >
      </svg>
      
          <span className="mt-2"><RichText tagName="span" value={attributes.contentbla} default="Photos" onChange={ (newtext) =>  {
        setAttributes({ contentbla: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         className="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggDm }}
        >
      </svg>
      
          <span className="mt-2"><RichText tagName="span" value={attributes.contentqUk} default="Shared" onChange={ (newtext) =>  {
        setAttributes({ contentqUk: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         className="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggYN }}
        >
      </svg>
      
          <span className="mt-2"><RichText tagName="span" value={attributes.contenthhF} default="Albums" onChange={ (newtext) =>  {
        setAttributes({ contenthhF: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         className="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyhW }}
        >
      </svg>
      
          <span className="mt-2"><RichText tagName="span" value={attributes.contentrTL} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentrTL: newtext });
      }}
    /></span>
</span>
                    </div>
                </div>
            </div>
            <div className="md:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-40 flex">
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                    <div className="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col">
                        <div className="absolute top-1 right-0 -mr-14 p-1">
                            <button type="button" className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white">
                                
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVrS }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentWDw} default="Close sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentWDw: newtext });
      }}
    /></span>

                            </button>
                        </div>
                        <div className="flex-shrink-0 px-4 flex items-center">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlMVs: media.url,
            imagealtPJO: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlMVs } 
            alt={ attributes.imagealtPJO } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                            <nav className="h-full flex flex-col">
                                <div className="space-y-1"> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
                
                
      <svg
         className="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZtu }}
        >
      </svg>
      
                <span><RichText tagName="span" value={attributes.contentaCR} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentaCR: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
                
                
      <svg
         className="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgawR }}
        >
      </svg>
      
                <span><RichText tagName="span" value={attributes.contentolZ} default="All Files" onChange={ (newtext) =>  {
        setAttributes({ contentolZ: newtext });
      }}
    /></span>
</span> <span className="bg-indigo-800 text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium" aria-current="page">
                
                
      <svg
         className="text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgguD }}
        >
      </svg>
      
                <span><RichText tagName="span" value={attributes.contentRcx} default="Photos" onChange={ (newtext) =>  {
        setAttributes({ contentRcx: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
                
                
      <svg
         className="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbgt }}
        >
      </svg>
      
                <span><RichText tagName="span" value={attributes.contenttVD} default="Shared" onChange={ (newtext) =>  {
        setAttributes({ contenttVD: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
                
                
      <svg
         className="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOpA }}
        >
      </svg>
      
                <span><RichText tagName="span" value={attributes.contentwaQ} default="Albums" onChange={ (newtext) =>  {
        setAttributes({ contentwaQ: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
                
                
      <svg
         className="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGnv }}
        >
      </svg>
      
                <span><RichText tagName="span" value={attributes.contentrMm} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentrMm: newtext });
      }}
    /></span>
</span>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-14" aria-hidden="true"/>
                </div>
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="w-full">
                    <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
                        <button type="button" className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"> <span className="sr-only"><RichText tagName="span" value={attributes.contenttRu} default="Open sidebar" onChange={ (newtext) =>  {
        setAttributes({ contenttRu: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiGz }}
        >
      </svg>
      
                        </button>
                        <div className="flex-1 flex justify-between px-4 sm:px-6">
                            <div className="flex-1 flex">
                                <form className="w-full flex md:ml-0" action="#" method="GET">
                                    <label for="search-field" className="sr-only">
                                        <RichText tagName="span" value={attributes.contentUlj} default="Search all files" onChange={ (newtext) => { setAttributes({ contentUlj: newtext }); }} /></label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                            
      <svg
         className="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgloP }}
        >
      </svg>
      
                                        </div>
                                        <input name="search-field" id="search-field" className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400" placeholder="Search" type="search"/>
                                    </div>
                                </form>
                            </div>
                            <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                                <div className="relative flex-shrink-0">
                                    <div>
                                        <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentCHl} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentCHl: newtext });
      }}
    /></span>

                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlitf: media.url,
            imagealtsDS: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlitf } 
            alt={ attributes.imagealtsDS } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                        </button>
                                    </div>
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentxPW} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentxPW: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentmjn} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentmjn: newtext });
      }}
    /></span>

                                    </div>
                                </div>
                                <button type="button" className="flex bg-indigo-600 p-1 rounded-full items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfBz }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentdKL} default="Add file" onChange={ (newtext) =>  {
        setAttributes({ contentdKL: newtext });
      }}
    /></span>

                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="flex-1 flex items-stretch overflow-hidden">
                    <main className="flex-1 overflow-y-auto">
                        <section aria-labelledby="primary-heading" className="min-w-0 flex-1 h-full flex flex-col lg:order-last">
                             <h1 id="primary-heading" className="sr-only"><RichText tagName="span" value={attributes.contentQwk} default="Photos" onChange={ (newtext) =>  {
        setAttributes({ contentQwk: newtext });
      }}
    /></h1>

                        </section>
                    </main>
                    <aside className="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block"/>
                </div>
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
        <div class="h-full flex">
            <div class="hidden w-28 bg-indigo-700 overflow-y-auto md:block">
                <div class="w-full py-6 flex flex-col items-center">
                    <div class="flex-shrink-0 flex items-center">
                        
      <img
            src={ attributes.imageurlvvW } 
            alt={ attributes.imagealtSxt } 
            class="h-8 w-auto"
          />
                    </div>
                    <div class="flex-1 mt-6 w-full px-2 space-y-1"> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUKS }}
        >
      </svg>
      
          <span class="mt-2"><RichText.Content value={attributes.contentLGs} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGeE }}
        >
      </svg>
      
          <span class="mt-2"><RichText.Content value={attributes.contentVef} /></span>
</span> <span class="bg-indigo-800 text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" aria-current="page">
          
          
      <svg
         class="text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjeU }}
        >
      </svg>
      
          <span class="mt-2"><RichText.Content value={attributes.contentbla} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggDm }}
        >
      </svg>
      
          <span class="mt-2"><RichText.Content value={attributes.contentqUk} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggYN }}
        >
      </svg>
      
          <span class="mt-2"><RichText.Content value={attributes.contenthhF} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyhW }}
        >
      </svg>
      
          <span class="mt-2"><RichText.Content value={attributes.contentrTL} /></span>
</span>
                    </div>
                </div>
            </div>
            <div class="md:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 z-40 flex">
                    <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                    <div class="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col">
                        <div class="absolute top-1 right-0 -mr-14 p-1">
                            <button type="button" class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white">
                                
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVrS }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentWDw} /></span>

                            </button>
                        </div>
                        <div class="flex-shrink-0 px-4 flex items-center">
                            
      <img
            src={ attributes.imageurlMVs } 
            alt={ attributes.imagealtPJO } 
            class="h-8 w-auto"
          />
                        </div>
                        <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                            <nav class="h-full flex flex-col">
                                <div class="space-y-1"> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
                
                
      <svg
         class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZtu }}
        >
      </svg>
      
                <span><RichText.Content value={attributes.contentaCR} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
                
                
      <svg
         class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgawR }}
        >
      </svg>
      
                <span><RichText.Content value={attributes.contentolZ} /></span>
</span> <span class="bg-indigo-800 text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium" aria-current="page">
                
                
      <svg
         class="text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgguD }}
        >
      </svg>
      
                <span><RichText.Content value={attributes.contentRcx} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
                
                
      <svg
         class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbgt }}
        >
      </svg>
      
                <span><RichText.Content value={attributes.contenttVD} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
                
                
      <svg
         class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOpA }}
        >
      </svg>
      
                <span><RichText.Content value={attributes.contentwaQ} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
                
                
      <svg
         class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGnv }}
        >
      </svg>
      
                <span><RichText.Content value={attributes.contentrMm} /></span>
</span>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div class="flex-shrink-0 w-14" aria-hidden="true"/>
                </div>
            </div>
            <div class="flex-1 flex flex-col overflow-hidden">
                <header class="w-full">
                    <div class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
                        <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"> <span class="sr-only"><RichText.Content value={attributes.contenttRu} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiGz }}
        >
      </svg>
      
                        </button>
                        <div class="flex-1 flex justify-between px-4 sm:px-6">
                            <div class="flex-1 flex">
                                <form class="w-full flex md:ml-0" action="#" method="GET">
                                    <label for="search-field" class="sr-only">
                                        <RichText.Content value={attributes.contentUlj} /></label>
                                    <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                            
      <svg
         class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgloP }}
        >
      </svg>
      
                                        </div>
                                        <input name="search-field" id="search-field" class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400" placeholder="Search" type="search"/>
                                    </div>
                                </form>
                            </div>
                            <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                                <div class="relative flex-shrink-0">
                                    <div>
                                        <button type="button" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentCHl} /></span>

                                            
      <img
            src={ attributes.imageurlitf } 
            alt={ attributes.imagealtsDS } 
            class="h-8 w-8 rounded-full"
          />
                                        </button>
                                    </div>
                                    <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentxPW} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentmjn} /></span>

                                    </div>
                                </div>
                                <button type="button" class="flex bg-indigo-600 p-1 rounded-full items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfBz }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentdKL} /></span>

                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="flex-1 flex items-stretch overflow-hidden">
                    <main class="flex-1 overflow-y-auto">
                        <section aria-labelledby="primary-heading" class="min-w-0 flex-1 h-full flex flex-col lg:order-last">
                             <h1 id="primary-heading" class="sr-only"><RichText.Content value={attributes.contentQwk} /></h1>

                        </section>
                    </main>
                    <aside class="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block"/>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        