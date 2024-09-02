
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/dark-sidebar', {
            title: 'dark sidebar',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentAjn": {
    "type": "string",
    "default": "Close sidebar"
  },
  "contentQQw": {
    "type": "string",
    "default": "\n            Dashboard\n          "
  },
  "contentFZC": {
    "type": "string",
    "default": "\n            Team\n          "
  },
  "contentwnL": {
    "type": "string",
    "default": "\n            Projects\n          "
  },
  "contentyga": {
    "type": "string",
    "default": "\n            Calendar\n          "
  },
  "contentqze": {
    "type": "string",
    "default": "\n            Documents\n          "
  },
  "contentMxm": {
    "type": "string",
    "default": "\n            Reports\n          "
  },
  "contentPbw": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentmPj": {
    "type": "string",
    "default": "View profile"
  },
  "contentJhE": {
    "type": "string",
    "default": "\n            Dashboard\n          "
  },
  "contentILa": {
    "type": "string",
    "default": "\n            Team\n          "
  },
  "contentuve": {
    "type": "string",
    "default": "\n            Projects\n          "
  },
  "contentYQf": {
    "type": "string",
    "default": "\n            Calendar\n          "
  },
  "contentTSW": {
    "type": "string",
    "default": "\n            Documents\n          "
  },
  "contentpQX": {
    "type": "string",
    "default": "\n            Reports\n          "
  },
  "contentQqe": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentizo": {
    "type": "string",
    "default": "View profile"
  },
  "contentGBJ": {
    "type": "string",
    "default": "Open sidebar"
  },
  "contentBOX": {
    "type": "string",
    "default": "Dashboard"
  },
  "imageurlsdE": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-500-mark-white-text.svg'
  },
  "imagealtWSo": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlikZ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtggS": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlGLr": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-500-mark-white-text.svg'
  },
  "imagealtbhq": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlmor": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtkMQ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgJfY": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgdWf": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgRin": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgWcq": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgWDp": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgGrO": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svguKv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgKGL": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgJCG": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgeqU": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgYHs": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgoRU": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgTGt": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgqGt": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
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
            value={ attributes.svgJfY }
            onChange={ ( value ) => {
              setAttributes({ svgJfY: value });
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
            value={ attributes.svgdWf }
            onChange={ ( value ) => {
              setAttributes({ svgdWf: value });
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
            value={ attributes.svgRin }
            onChange={ ( value ) => {
              setAttributes({ svgRin: value });
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
            value={ attributes.svgWcq }
            onChange={ ( value ) => {
              setAttributes({ svgWcq: value });
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
            value={ attributes.svgWDp }
            onChange={ ( value ) => {
              setAttributes({ svgWDp: value });
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
            value={ attributes.svgGrO }
            onChange={ ( value ) => {
              setAttributes({ svgGrO: value });
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
            value={ attributes.svguKv }
            onChange={ ( value ) => {
              setAttributes({ svguKv: value });
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
            value={ attributes.svgKGL }
            onChange={ ( value ) => {
              setAttributes({ svgKGL: value });
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
            value={ attributes.svgJCG }
            onChange={ ( value ) => {
              setAttributes({ svgJCG: value });
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
            value={ attributes.svgeqU }
            onChange={ ( value ) => {
              setAttributes({ svgeqU: value });
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
            value={ attributes.svgYHs }
            onChange={ ( value ) => {
              setAttributes({ svgYHs: value });
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
            value={ attributes.svgoRU }
            onChange={ ( value ) => {
              setAttributes({ svgoRU: value });
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
            value={ attributes.svgTGt }
            onChange={ ( value ) => {
              setAttributes({ svgTGt: value });
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
            value={ attributes.svgqGt }
            onChange={ ( value ) => {
              setAttributes({ svgqGt: value });
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
        <div>
            <div className="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentAjn} default="Close sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentAjn: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJfY }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div className="flex-shrink-0 flex items-center px-4">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlsdE: media.url,
            imagealtWSo: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlsdE } 
            alt={ attributes.imagealtWSo } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <nav className="mt-5 px-2 space-y-1"> <span className="bg-gray-900 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdWf }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentQQw} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentQQw: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRin }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentFZC} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentFZC: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWcq }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentwnL} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentwnL: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWDp }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentyga} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentyga: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGrO }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentqze} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentqze: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguKv }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentMxm} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentMxm: newtext });
      }}
    /></span>

                        </nav>
                    </div>
                    <div className="flex-shrink-0 flex bg-gray-700 p-4"> <span className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlikZ: media.url,
            imagealtggS: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlikZ } 
            alt={ attributes.imagealtggS } 
            onClick={ open } 
            className="inline-block h-10 w-10 rounded-full"
          /> 
        )} 
      />
            </div>
            <div className="ml-3">
              <p className="text-base font-medium text-white"><RichText tagName="span" value={attributes.contentPbw} default="Tom Cook" onChange={ (newtext) =>  {
        setAttributes({ contentPbw: newtext });
      }}
    /></p>
              <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300"><RichText tagName="span" value={attributes.contentmPj} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentmPj: newtext });
      }}
    /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
                <div className="flex-shrink-0 w-14"/>
            </div>
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
                    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlGLr: media.url,
            imagealtbhq: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlGLr } 
            alt={ attributes.imagealtbhq } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <nav className="mt-5 flex-1 px-2 space-y-1"> <span className="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKGL }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentJhE} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentJhE: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJCG }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentILa} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentILa: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeqU }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentuve} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentuve: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYHs }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentYQf} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentYQf: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoRU }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentTSW} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentTSW: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTGt }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentpQX} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentpQX: newtext });
      }}
    /></span>

                        </nav>
                    </div>
                    <div className="flex-shrink-0 flex bg-gray-700 p-4"> <span className="flex-shrink-0 w-full group block">
          <div className="flex items-center">
            <div>
              
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlmor: media.url,
            imagealtkMQ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlmor } 
            alt={ attributes.imagealtkMQ } 
            onClick={ open } 
            className="inline-block h-9 w-9 rounded-full"
          /> 
        )} 
      />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white"><RichText tagName="span" value={attributes.contentQqe} default="Tom Cook" onChange={ (newtext) =>  {
        setAttributes({ contentQqe: newtext });
      }}
    /></p>
              <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200"><RichText tagName="span" value={attributes.contentizo} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentizo: newtext });
      }}
    /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
            </div>
            <div className="md:pl-64 flex flex-col flex-1">
                <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                    <button type="button" className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentGBJ} default="Open sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentGBJ: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqGt }}
        >
      </svg>
      
                    </button>
                </div>
                <main className="flex-1">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                             <h1 className="text-2xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentBOX} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentBOX: newtext });
      }}
    /></h1>

                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <div className="py-4">
                                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"/>
                            </div>
                        </div>
                    </div>
                </main>
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
        <div>
            <div class="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div class="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                    <div class="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentAjn} /></span>

                            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJfY }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div class="flex-shrink-0 flex items-center px-4">
                            
      <img
            src={ attributes.imageurlsdE } 
            alt={ attributes.imagealtWSo } 
            class="h-8 w-auto"
          />
                        </div>
                        <nav class="mt-5 px-2 space-y-1"> <span class="bg-gray-900 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdWf }}
        >
      </svg>
      <RichText.Content value={attributes.contentQQw} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRin }}
        >
      </svg>
      <RichText.Content value={attributes.contentFZC} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWcq }}
        >
      </svg>
      <RichText.Content value={attributes.contentwnL} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWDp }}
        >
      </svg>
      <RichText.Content value={attributes.contentyga} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGrO }}
        >
      </svg>
      <RichText.Content value={attributes.contentqze} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguKv }}
        >
      </svg>
      <RichText.Content value={attributes.contentMxm} /></span>

                        </nav>
                    </div>
                    <div class="flex-shrink-0 flex bg-gray-700 p-4"> <span class="flex-shrink-0 group block">
          <div class="flex items-center">
            <div>
              
      <img
            src={ attributes.imageurlikZ } 
            alt={ attributes.imagealtggS } 
            class="inline-block h-10 w-10 rounded-full"
          />
            </div>
            <div class="ml-3">
              <p class="text-base font-medium text-white"><RichText.Content value={attributes.contentPbw} /></p>
              <p class="text-sm font-medium text-gray-400 group-hover:text-gray-300"><RichText.Content value={attributes.contentmPj} /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
                <div class="flex-shrink-0 w-14"/>
            </div>
            <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div class="flex-1 flex flex-col min-h-0 bg-gray-800">
                    <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div class="flex items-center flex-shrink-0 px-4">
                            
      <img
            src={ attributes.imageurlGLr } 
            alt={ attributes.imagealtbhq } 
            class="h-8 w-auto"
          />
                        </div>
                        <nav class="mt-5 flex-1 px-2 space-y-1"> <span class="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKGL }}
        >
      </svg>
      <RichText.Content value={attributes.contentJhE} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJCG }}
        >
      </svg>
      <RichText.Content value={attributes.contentILa} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeqU }}
        >
      </svg>
      <RichText.Content value={attributes.contentuve} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYHs }}
        >
      </svg>
      <RichText.Content value={attributes.contentYQf} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoRU }}
        >
      </svg>
      <RichText.Content value={attributes.contentTSW} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTGt }}
        >
      </svg>
      <RichText.Content value={attributes.contentpQX} /></span>

                        </nav>
                    </div>
                    <div class="flex-shrink-0 flex bg-gray-700 p-4"> <span class="flex-shrink-0 w-full group block">
          <div class="flex items-center">
            <div>
              
      <img
            src={ attributes.imageurlmor } 
            alt={ attributes.imagealtkMQ } 
            class="inline-block h-9 w-9 rounded-full"
          />
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-white"><RichText.Content value={attributes.contentQqe} /></p>
              <p class="text-xs font-medium text-gray-300 group-hover:text-gray-200"><RichText.Content value={attributes.contentizo} /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
            </div>
            <div class="md:pl-64 flex flex-col flex-1">
                <div class="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                    <button type="button" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentGBJ} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqGt }}
        >
      </svg>
      
                    </button>
                </div>
                <main class="flex-1">
                    <div class="py-6">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                             <h1 class="text-2xl font-semibold text-gray-900"><RichText.Content value={attributes.contentBOX} /></h1>

                        </div>
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <div class="py-4">
                                <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        