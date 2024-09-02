
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/light-sidebar-with-light-header', {
            title: 'light sidebar with light header',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentCGA": {
    "type": "string",
    "default": "Close sidebar"
  },
  "contentSSh": {
    "type": "string",
    "default": "\n            Dashboard\n          "
  },
  "contentVQv": {
    "type": "string",
    "default": "\n            Team\n          "
  },
  "contentImP": {
    "type": "string",
    "default": "\n            Projects\n          "
  },
  "contentroC": {
    "type": "string",
    "default": "\n            Calendar\n          "
  },
  "contentIBa": {
    "type": "string",
    "default": "\n            Documents\n          "
  },
  "contentviQ": {
    "type": "string",
    "default": "\n            Reports\n          "
  },
  "contentirw": {
    "type": "string",
    "default": "\n            Dashboard\n          "
  },
  "contentlei": {
    "type": "string",
    "default": "\n            Team\n          "
  },
  "contentyxj": {
    "type": "string",
    "default": "\n            Projects\n          "
  },
  "contentSQN": {
    "type": "string",
    "default": "\n            Calendar\n          "
  },
  "contentRdA": {
    "type": "string",
    "default": "\n            Documents\n          "
  },
  "contentABa": {
    "type": "string",
    "default": "\n            Reports\n          "
  },
  "contentSIr": {
    "type": "string",
    "default": "Open sidebar"
  },
  "contentUpg": {
    "type": "string",
    "default": "Search"
  },
  "contentjuG": {
    "type": "string",
    "default": "View notifications"
  },
  "contentjjn": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentHTD": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentVbo": {
    "type": "string",
    "default": "Settings"
  },
  "contentyDr": {
    "type": "string",
    "default": "Sign out"
  },
  "contentMgg": {
    "type": "string",
    "default": "Dashboard"
  },
  "imageurlfWJ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
  },
  "imagealtvEv": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurljhl": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
  },
  "imagealtBUN": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlXPC": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtzGn": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgIfi": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgzpX": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgJpM": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgtUq": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgYAx": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgdpa": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgifG": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgusD": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgpDS": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgBXP": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgfML": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgBag": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgiQC": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgbZc": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h7\"/>"
  },
  "svgHDm": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgAHQ": {
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
            value={ attributes.svgIfi }
            onChange={ ( value ) => {
              setAttributes({ svgIfi: value });
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
            value={ attributes.svgzpX }
            onChange={ ( value ) => {
              setAttributes({ svgzpX: value });
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
            value={ attributes.svgJpM }
            onChange={ ( value ) => {
              setAttributes({ svgJpM: value });
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
            value={ attributes.svgtUq }
            onChange={ ( value ) => {
              setAttributes({ svgtUq: value });
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
            value={ attributes.svgYAx }
            onChange={ ( value ) => {
              setAttributes({ svgYAx: value });
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
            value={ attributes.svgdpa }
            onChange={ ( value ) => {
              setAttributes({ svgdpa: value });
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
            value={ attributes.svgifG }
            onChange={ ( value ) => {
              setAttributes({ svgifG: value });
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
            value={ attributes.svgusD }
            onChange={ ( value ) => {
              setAttributes({ svgusD: value });
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
            value={ attributes.svgpDS }
            onChange={ ( value ) => {
              setAttributes({ svgpDS: value });
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
            value={ attributes.svgBXP }
            onChange={ ( value ) => {
              setAttributes({ svgBXP: value });
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
            value={ attributes.svgfML }
            onChange={ ( value ) => {
              setAttributes({ svgfML: value });
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
            value={ attributes.svgBag }
            onChange={ ( value ) => {
              setAttributes({ svgBag: value });
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
            value={ attributes.svgiQC }
            onChange={ ( value ) => {
              setAttributes({ svgiQC: value });
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
            value={ attributes.svgbZc }
            onChange={ ( value ) => {
              setAttributes({ svgbZc: value });
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
            value={ attributes.svgHDm }
            onChange={ ( value ) => {
              setAttributes({ svgHDm: value });
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
            value={ attributes.svgAHQ }
            onChange={ ( value ) => {
              setAttributes({ svgAHQ: value });
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
                <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentCGA} default="Close sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentCGA: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIfi }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="flex-shrink-0 flex items-center px-4">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlfWJ: media.url,
            imagealtvEv: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlfWJ } 
            alt={ attributes.imagealtvEv } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                    </div>
                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                        <nav className="px-2 space-y-1"> <span className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzpX }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentSSh} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentSSh: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJpM }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentVQv} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentVQv: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtUq }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentImP} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentImP: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYAx }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentroC} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentroC: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdpa }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentIBa} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentIBa: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgifG }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentviQ} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentviQ: newtext });
      }}
    /></span>

                        </nav>
                    </div>
                </div>
                <div className="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
                    <div className="flex items-center flex-shrink-0 px-4">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurljhl: media.url,
            imagealtBUN: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurljhl } 
            alt={ attributes.imagealtBUN } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                    </div>
                    <div className="mt-5 flex-grow flex flex-col">
                        <nav className="flex-1 px-2 pb-4 space-y-1"> <span className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgusD }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentirw} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentirw: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpDS }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentlei} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentlei: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBXP }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentyxj} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentyxj: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfML }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentSQN} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentSQN: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBag }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentRdA} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentRdA: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiQC }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentABa} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentABa: newtext });
      }}
    /></span>

                        </nav>
                    </div>
                </div>
            </div>
            <div className="md:pl-64 flex flex-col flex-1">
                <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                    <button type="button" className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"> <span className="sr-only"><RichText tagName="span" value={attributes.contentSIr} default="Open sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentSIr: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbZc }}
        >
      </svg>
      
                    </button>
                    <div className="flex-1 px-4 flex justify-between">
                        <div className="flex-1 flex">
                            <form className="w-full flex md:ml-0" action="#" method="GET">
                                <label for="search-field" className="sr-only">
                                    <RichText tagName="span" value={attributes.contentUpg} default="Search" onChange={ (newtext) => { setAttributes({ contentUpg: newtext }); }} /></label>
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHDm }}
        >
      </svg>
      
                                    </div>
                                    <input id="search-field" className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search"/>
                                </div>
                            </form>
                        </div>
                        <div className="ml-4 flex items-center md:ml-6">
                            <button type="button" className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentjuG} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentjuG: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAHQ }}
        >
      </svg>
      
                            </button>
                            <div className="ml-3 relative">
                                <div>
                                    <button type="button" className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentjjn} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentjjn: newtext });
      }}
    /></span>

                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlXPC: media.url,
            imagealtzGn: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlXPC } 
            alt={ attributes.imagealtzGn } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                    </button>
                                </div>
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentHTD} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentHTD: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentVbo} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentVbo: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentyDr} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentyDr: newtext });
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
                             <h1 className="text-2xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentMgg} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentMgg: newtext });
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
                <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                    <div class="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentCGA} /></span>

                            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIfi }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="flex-shrink-0 flex items-center px-4">
                        
      <img
            src={ attributes.imageurlfWJ } 
            alt={ attributes.imagealtvEv } 
            class="h-8 w-auto"
          />
                    </div>
                    <div class="mt-5 flex-1 h-0 overflow-y-auto">
                        <nav class="px-2 space-y-1"> <span class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzpX }}
        >
      </svg>
      <RichText.Content value={attributes.contentSSh} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJpM }}
        >
      </svg>
      <RichText.Content value={attributes.contentVQv} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtUq }}
        >
      </svg>
      <RichText.Content value={attributes.contentImP} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYAx }}
        >
      </svg>
      <RichText.Content value={attributes.contentroC} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdpa }}
        >
      </svg>
      <RichText.Content value={attributes.contentIBa} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgifG }}
        >
      </svg>
      <RichText.Content value={attributes.contentviQ} /></span>

                        </nav>
                    </div>
                </div>
                <div class="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
                    <div class="flex items-center flex-shrink-0 px-4">
                        
      <img
            src={ attributes.imageurljhl } 
            alt={ attributes.imagealtBUN } 
            class="h-8 w-auto"
          />
                    </div>
                    <div class="mt-5 flex-grow flex flex-col">
                        <nav class="flex-1 px-2 pb-4 space-y-1"> <span class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgusD }}
        >
      </svg>
      <RichText.Content value={attributes.contentirw} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpDS }}
        >
      </svg>
      <RichText.Content value={attributes.contentlei} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBXP }}
        >
      </svg>
      <RichText.Content value={attributes.contentyxj} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfML }}
        >
      </svg>
      <RichText.Content value={attributes.contentSQN} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBag }}
        >
      </svg>
      <RichText.Content value={attributes.contentRdA} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiQC }}
        >
      </svg>
      <RichText.Content value={attributes.contentABa} /></span>

                        </nav>
                    </div>
                </div>
            </div>
            <div class="md:pl-64 flex flex-col flex-1">
                <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                    <button type="button" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"> <span class="sr-only"><RichText.Content value={attributes.contentSIr} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbZc }}
        >
      </svg>
      
                    </button>
                    <div class="flex-1 px-4 flex justify-between">
                        <div class="flex-1 flex">
                            <form class="w-full flex md:ml-0" action="#" method="GET">
                                <label for="search-field" class="sr-only">
                                    <RichText.Content value={attributes.contentUpg} /></label>
                                <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHDm }}
        >
      </svg>
      
                                    </div>
                                    <input id="search-field" class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search"/>
                                </div>
                            </form>
                        </div>
                        <div class="ml-4 flex items-center md:ml-6">
                            <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentjuG} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAHQ }}
        >
      </svg>
      
                            </button>
                            <div class="ml-3 relative">
                                <div>
                                    <button type="button" class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentjjn} /></span>

                                        
      <img
            src={ attributes.imageurlXPC } 
            alt={ attributes.imagealtzGn } 
            class="h-8 w-8 rounded-full"
          />
                                    </button>
                                </div>
                                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentHTD} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentVbo} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentyDr} /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <main class="flex-1">
                    <div class="py-6">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                             <h1 class="text-2xl font-semibold text-gray-900"><RichText.Content value={attributes.contentMgg} /></h1>

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
        