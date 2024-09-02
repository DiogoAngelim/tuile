
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/dark-sidebar-with-light-header', {
            title: 'dark sidebar with light header',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentGIG": {
    "type": "string",
    "default": "Close sidebar"
  },
  "contenthTg": {
    "type": "string",
    "default": "\n            Dashboard\n          "
  },
  "contentEQg": {
    "type": "string",
    "default": "\n            Team\n          "
  },
  "contentrmJ": {
    "type": "string",
    "default": "\n            Projects\n          "
  },
  "contentUhU": {
    "type": "string",
    "default": "\n            Calendar\n          "
  },
  "contentiyP": {
    "type": "string",
    "default": "\n            Documents\n          "
  },
  "contentesd": {
    "type": "string",
    "default": "\n            Reports\n          "
  },
  "contentwaB": {
    "type": "string",
    "default": "\n            Dashboard\n          "
  },
  "contentKYH": {
    "type": "string",
    "default": "\n            Team\n          "
  },
  "contentJvL": {
    "type": "string",
    "default": "\n            Projects\n          "
  },
  "contentlWC": {
    "type": "string",
    "default": "\n            Calendar\n          "
  },
  "contentJYR": {
    "type": "string",
    "default": "\n            Documents\n          "
  },
  "contentFXN": {
    "type": "string",
    "default": "\n            Reports\n          "
  },
  "contentNCQ": {
    "type": "string",
    "default": "Open sidebar"
  },
  "contentZWL": {
    "type": "string",
    "default": "Search"
  },
  "contentGtd": {
    "type": "string",
    "default": "View notifications"
  },
  "contentErK": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentppM": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentBPf": {
    "type": "string",
    "default": "Settings"
  },
  "contentTkU": {
    "type": "string",
    "default": "Sign out"
  },
  "contentFYm": {
    "type": "string",
    "default": "Dashboard"
  },
  "imageurlRfi": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-500-mark-white-text.svg'
  },
  "imagealtgZI": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlVUO": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-500-mark-white-text.svg'
  },
  "imagealtdyB": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlqIG": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtfGn": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgbBR": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgcYu": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgvmY": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgzaI": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgrPT": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgvGA": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgQDB": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgLJu": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svguZX": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgOqB": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgZvI": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgfnk": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgStq": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgrZq": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h7\"/>"
  },
  "svgeXb": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgDCu": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
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
            value={ attributes.svgbBR }
            onChange={ ( value ) => {
              setAttributes({ svgbBR: value });
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
            value={ attributes.svgcYu }
            onChange={ ( value ) => {
              setAttributes({ svgcYu: value });
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
            value={ attributes.svgvmY }
            onChange={ ( value ) => {
              setAttributes({ svgvmY: value });
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
            value={ attributes.svgzaI }
            onChange={ ( value ) => {
              setAttributes({ svgzaI: value });
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
            value={ attributes.svgrPT }
            onChange={ ( value ) => {
              setAttributes({ svgrPT: value });
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
            value={ attributes.svgvGA }
            onChange={ ( value ) => {
              setAttributes({ svgvGA: value });
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
            value={ attributes.svgQDB }
            onChange={ ( value ) => {
              setAttributes({ svgQDB: value });
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
            value={ attributes.svgLJu }
            onChange={ ( value ) => {
              setAttributes({ svgLJu: value });
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
            value={ attributes.svguZX }
            onChange={ ( value ) => {
              setAttributes({ svguZX: value });
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
            value={ attributes.svgOqB }
            onChange={ ( value ) => {
              setAttributes({ svgOqB: value });
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
            value={ attributes.svgZvI }
            onChange={ ( value ) => {
              setAttributes({ svgZvI: value });
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
            value={ attributes.svgfnk }
            onChange={ ( value ) => {
              setAttributes({ svgfnk: value });
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
            value={ attributes.svgStq }
            onChange={ ( value ) => {
              setAttributes({ svgStq: value });
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
            value={ attributes.svgrZq }
            onChange={ ( value ) => {
              setAttributes({ svgrZq: value });
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
            value={ attributes.svgeXb }
            onChange={ ( value ) => {
              setAttributes({ svgeXb: value });
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
            value={ attributes.svgDCu }
            onChange={ ( value ) => {
              setAttributes({ svgDCu: value });
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
                <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentGIG} default="Close sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentGIG: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbBR }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="flex-shrink-0 flex items-center px-4">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlRfi: media.url,
            imagealtgZI: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlRfi } 
            alt={ attributes.imagealtgZI } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                    </div>
                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                        <nav className="px-2 space-y-1"> <span className="bg-gray-900 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcYu }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contenthTg} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contenthTg: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvmY }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentEQg} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentEQg: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzaI }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentrmJ} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentrmJ: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrPT }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentUhU} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentUhU: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvGA }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentiyP} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentiyP: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQDB }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentesd} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentesd: newtext });
      }}
    /></span>

                        </nav>
                    </div>
                </div>
                <div className="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
                    <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlVUO: media.url,
            imagealtdyB: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlVUO } 
            alt={ attributes.imagealtdyB } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                    </div>
                    <div className="flex-1 flex flex-col overflow-y-auto">
                        <nav className="flex-1 px-2 py-4 space-y-1"> <span className="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLJu }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentwaB} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentwaB: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguZX }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentKYH} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentKYH: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOqB }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentJvL} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentJvL: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZvI }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentlWC} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentlWC: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfnk }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentJYR} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentJYR: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgStq }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentFXN} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentFXN: newtext });
      }}
    /></span>

                        </nav>
                    </div>
                </div>
            </div>
            <div className="md:pl-64 flex flex-col">
                <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                    <button type="button" className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"> <span className="sr-only"><RichText tagName="span" value={attributes.contentNCQ} default="Open sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentNCQ: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrZq }}
        >
      </svg>
      
                    </button>
                    <div className="flex-1 px-4 flex justify-between">
                        <div className="flex-1 flex">
                            <form className="w-full flex md:ml-0" action="#" method="GET">
                                <label for="search-field" className="sr-only">
                                    <RichText tagName="span" value={attributes.contentZWL} default="Search" onChange={ (newtext) => { setAttributes({ contentZWL: newtext }); }} /></label>
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeXb }}
        >
      </svg>
      
                                    </div>
                                    <input id="search-field" className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search"/>
                                </div>
                            </form>
                        </div>
                        <div className="ml-4 flex items-center md:ml-6">
                            <button type="button" className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentGtd} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentGtd: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDCu }}
        >
      </svg>
      
                            </button>
                            <div className="ml-3 relative">
                                <div>
                                    <button type="button" className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentErK} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentErK: newtext });
      }}
    /></span>

                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlqIG: media.url,
            imagealtfGn: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlqIG } 
            alt={ attributes.imagealtfGn } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                    </button>
                                </div>
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentppM} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentppM: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentBPf} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentBPf: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentTkU} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentTkU: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <main className="flex-1">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                             <h1 className="text-2xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentFYm} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentFYm: newtext });
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
                <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
                    <div class="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentGIG} /></span>

                            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbBR }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="flex-shrink-0 flex items-center px-4">
                        
      <img
            src={ attributes.imageurlRfi } 
            alt={ attributes.imagealtgZI } 
            class="h-8 w-auto"
          />
                    </div>
                    <div class="mt-5 flex-1 h-0 overflow-y-auto">
                        <nav class="px-2 space-y-1"> <span class="bg-gray-900 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcYu }}
        >
      </svg>
      <RichText.Content value={attributes.contenthTg} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvmY }}
        >
      </svg>
      <RichText.Content value={attributes.contentEQg} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzaI }}
        >
      </svg>
      <RichText.Content value={attributes.contentrmJ} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrPT }}
        >
      </svg>
      <RichText.Content value={attributes.contentUhU} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvGA }}
        >
      </svg>
      <RichText.Content value={attributes.contentiyP} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQDB }}
        >
      </svg>
      <RichText.Content value={attributes.contentesd} /></span>

                        </nav>
                    </div>
                </div>
                <div class="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div class="flex-1 flex flex-col min-h-0 bg-gray-800">
                    <div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
                        
      <img
            src={ attributes.imageurlVUO } 
            alt={ attributes.imagealtdyB } 
            class="h-8 w-auto"
          />
                    </div>
                    <div class="flex-1 flex flex-col overflow-y-auto">
                        <nav class="flex-1 px-2 py-4 space-y-1"> <span class="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLJu }}
        >
      </svg>
      <RichText.Content value={attributes.contentwaB} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguZX }}
        >
      </svg>
      <RichText.Content value={attributes.contentKYH} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOqB }}
        >
      </svg>
      <RichText.Content value={attributes.contentJvL} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZvI }}
        >
      </svg>
      <RichText.Content value={attributes.contentlWC} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfnk }}
        >
      </svg>
      <RichText.Content value={attributes.contentJYR} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgStq }}
        >
      </svg>
      <RichText.Content value={attributes.contentFXN} /></span>

                        </nav>
                    </div>
                </div>
            </div>
            <div class="md:pl-64 flex flex-col">
                <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                    <button type="button" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"> <span class="sr-only"><RichText.Content value={attributes.contentNCQ} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrZq }}
        >
      </svg>
      
                    </button>
                    <div class="flex-1 px-4 flex justify-between">
                        <div class="flex-1 flex">
                            <form class="w-full flex md:ml-0" action="#" method="GET">
                                <label for="search-field" class="sr-only">
                                    <RichText.Content value={attributes.contentZWL} /></label>
                                <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeXb }}
        >
      </svg>
      
                                    </div>
                                    <input id="search-field" class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search"/>
                                </div>
                            </form>
                        </div>
                        <div class="ml-4 flex items-center md:ml-6">
                            <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentGtd} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDCu }}
        >
      </svg>
      
                            </button>
                            <div class="ml-3 relative">
                                <div>
                                    <button type="button" class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentErK} /></span>

                                        
      <img
            src={ attributes.imageurlqIG } 
            alt={ attributes.imagealtfGn } 
            class="h-8 w-8 rounded-full"
          />
                                    </button>
                                </div>
                                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentppM} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentBPf} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentTkU} /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <main class="flex-1">
                    <div class="py-6">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                             <h1 class="text-2xl font-semibold text-gray-900"><RichText.Content value={attributes.contentFYm} /></h1>

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
        