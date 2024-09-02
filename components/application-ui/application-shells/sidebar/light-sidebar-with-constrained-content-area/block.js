
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/light-sidebar-with-constrained-content-area', {
            title: 'light sidebar with constrained content area',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contenthpw": {
    "type": "string",
    "default": "Close sidebar"
  },
  "contentixH": {
    "type": "string",
    "default": "\n            Dashboard\n          "
  },
  "contentHmW": {
    "type": "string",
    "default": "\n            Team\n          "
  },
  "contentbyq": {
    "type": "string",
    "default": "\n            Projects\n          "
  },
  "contentXNd": {
    "type": "string",
    "default": "\n            Calendar\n          "
  },
  "contentaXt": {
    "type": "string",
    "default": "\n            Documents\n          "
  },
  "contentelB": {
    "type": "string",
    "default": "\n            Reports\n          "
  },
  "contentxBR": {
    "type": "string",
    "default": "\n            Dashboard\n          "
  },
  "contenttMm": {
    "type": "string",
    "default": "\n            Team\n          "
  },
  "contentZUB": {
    "type": "string",
    "default": "\n            Projects\n          "
  },
  "contentnCh": {
    "type": "string",
    "default": "\n            Calendar\n          "
  },
  "contentCKn": {
    "type": "string",
    "default": "\n            Documents\n          "
  },
  "contentEPr": {
    "type": "string",
    "default": "\n            Reports\n          "
  },
  "contentfdU": {
    "type": "string",
    "default": "Open sidebar"
  },
  "contentZyp": {
    "type": "string",
    "default": "Search"
  },
  "contentxjH": {
    "type": "string",
    "default": "View notifications"
  },
  "contentQiv": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentoMr": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentkHe": {
    "type": "string",
    "default": "Settings"
  },
  "contentgyU": {
    "type": "string",
    "default": "Sign out"
  },
  "contenttvu": {
    "type": "string",
    "default": "Dashboard"
  },
  "imageurllgV": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
  },
  "imagealtqnC": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlIsh": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
  },
  "imagealtydz": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlNLY": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtYLk": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgPgg": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgcRz": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgLYP": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgQtb": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgEJA": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgUKx": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgmFV": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgEBY": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgryV": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svguaq": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgtHS": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgwpD": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgWEu": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgGMK": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h7\"/>"
  },
  "svgPEN": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgUUA": {
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
            value={ attributes.svgPgg }
            onChange={ ( value ) => {
              setAttributes({ svgPgg: value });
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
            value={ attributes.svgcRz }
            onChange={ ( value ) => {
              setAttributes({ svgcRz: value });
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
            value={ attributes.svgLYP }
            onChange={ ( value ) => {
              setAttributes({ svgLYP: value });
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
            value={ attributes.svgQtb }
            onChange={ ( value ) => {
              setAttributes({ svgQtb: value });
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
            value={ attributes.svgEJA }
            onChange={ ( value ) => {
              setAttributes({ svgEJA: value });
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
            value={ attributes.svgUKx }
            onChange={ ( value ) => {
              setAttributes({ svgUKx: value });
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
            value={ attributes.svgmFV }
            onChange={ ( value ) => {
              setAttributes({ svgmFV: value });
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
            value={ attributes.svgEBY }
            onChange={ ( value ) => {
              setAttributes({ svgEBY: value });
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
            value={ attributes.svgryV }
            onChange={ ( value ) => {
              setAttributes({ svgryV: value });
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
            value={ attributes.svguaq }
            onChange={ ( value ) => {
              setAttributes({ svguaq: value });
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
            value={ attributes.svgtHS }
            onChange={ ( value ) => {
              setAttributes({ svgtHS: value });
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
            value={ attributes.svgwpD }
            onChange={ ( value ) => {
              setAttributes({ svgwpD: value });
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
            value={ attributes.svgWEu }
            onChange={ ( value ) => {
              setAttributes({ svgWEu: value });
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
            value={ attributes.svgGMK }
            onChange={ ( value ) => {
              setAttributes({ svgGMK: value });
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
            value={ attributes.svgPEN }
            onChange={ ( value ) => {
              setAttributes({ svgPEN: value });
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
            value={ attributes.svgUUA }
            onChange={ ( value ) => {
              setAttributes({ svgUUA: value });
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
            <div className="fixed inset-0 z-40 flex md:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contenthpw} default="Close sidebar" onChange={ (newtext) =>  {
        setAttributes({ contenthpw: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPgg }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="flex-shrink-0 px-4 flex items-center">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurllgV: media.url,
            imagealtqnC: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurllgV } 
            alt={ attributes.imagealtqnC } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                    </div>
                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                        <nav className="px-2 space-y-1"> <span className="bg-gray-100 text-gray-900 group rounded-md py-2 px-2 flex items-center text-base font-medium">
            
            
      <svg
         className="text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcRz }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentixH} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentixH: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-base font-medium">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLYP }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentHmW} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentHmW: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-base font-medium">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQtb }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentbyq} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentbyq: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-base font-medium">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEJA }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentXNd} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentXNd: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-base font-medium">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUKx }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentaXt} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentaXt: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-base font-medium">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmFV }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentelB} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentelB: newtext });
      }}
    /></span>

                        </nav>
                    </div>
                </div>
                <div className="flex-shrink-0 w-14"/>
            </div>
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div className="border-r border-gray-200 pt-5 flex flex-col flex-grow bg-white overflow-y-auto">
                    <div className="flex-shrink-0 px-4 flex items-center">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlIsh: media.url,
            imagealtydz: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlIsh } 
            alt={ attributes.imagealtydz } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                    </div>
                    <div className="flex-grow mt-5 flex flex-col">
                        <nav className="flex-1 px-2 pb-4 space-y-1"> <span className="bg-gray-100 text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
            
            
      <svg
         className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEBY }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentxBR} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentxBR: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgryV }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contenttMm} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contenttMm: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguaq }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentZUB} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentZUB: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtHS }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentnCh} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentnCh: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwpD }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentCKn} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentCKn: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWEu }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentEPr} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentEPr: newtext });
      }}
    /></span>

                        </nav>
                    </div>
                </div>
            </div>
            <div className="md:pl-64">
                <div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
                    <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
                        <button type="button" className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"> <span className="sr-only"><RichText tagName="span" value={attributes.contentfdU} default="Open sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentfdU: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGMK }}
        >
      </svg>
      
                        </button>
                        <div className="flex-1 flex justify-between px-4 md:px-0">
                            <div className="flex-1 flex">
                                <form className="w-full flex md:ml-0" action="#" method="GET">
                                    <label for="search-field" className="sr-only">
                                        <RichText tagName="span" value={attributes.contentZyp} default="Search" onChange={ (newtext) => { setAttributes({ contentZyp: newtext }); }} /></label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPEN }}
        >
      </svg>
      
                                        </div>
                                        <input id="search-field" className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search"/>
                                    </div>
                                </form>
                            </div>
                            <div className="ml-4 flex items-center md:ml-6">
                                <button type="button" className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentxjH} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentxjH: newtext });
      }}
    /></span>

                                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUUA }}
        >
      </svg>
      
                                </button>
                                <div className="ml-3 relative">
                                    <div>
                                        <button type="button" className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentQiv} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentQiv: newtext });
      }}
    /></span>

                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlNLY: media.url,
            imagealtYLk: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlNLY } 
            alt={ attributes.imagealtYLk } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                        </button>
                                    </div>
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentoMr} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentoMr: newtext });
      }}
    /></span>
 <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentkHe} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentkHe: newtext });
      }}
    /></span>
 <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentgyU} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentgyU: newtext });
      }}
    /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <main className="flex-1">
                        <div className="py-6">
                            <div className="px-4 sm:px-6 md:px-0">
                                 <h1 className="text-2xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contenttvu} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contenttvu: newtext });
      }}
    /></h1>

                            </div>
                            <div className="px-4 sm:px-6 md:px-0">
                                <div className="py-4">
                                    <div className="h-96 border-4 border-dashed border-gray-200 rounded-lg"/>
                                </div>
                            </div>
                        </div>
                    </main>
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
        <div>
            <div class="fixed inset-0 z-40 flex md:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div class="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
                    <div class="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contenthpw} /></span>

                            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPgg }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="flex-shrink-0 px-4 flex items-center">
                        
      <img
            src={ attributes.imageurllgV } 
            alt={ attributes.imagealtqnC } 
            class="h-8 w-auto"
          />
                    </div>
                    <div class="mt-5 flex-1 h-0 overflow-y-auto">
                        <nav class="px-2 space-y-1"> <span class="bg-gray-100 text-gray-900 group rounded-md py-2 px-2 flex items-center text-base font-medium">
            
            
      <svg
         class="text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcRz }}
        >
      </svg>
      <RichText.Content value={attributes.contentixH} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-base font-medium">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLYP }}
        >
      </svg>
      <RichText.Content value={attributes.contentHmW} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-base font-medium">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQtb }}
        >
      </svg>
      <RichText.Content value={attributes.contentbyq} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-base font-medium">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEJA }}
        >
      </svg>
      <RichText.Content value={attributes.contentXNd} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-base font-medium">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUKx }}
        >
      </svg>
      <RichText.Content value={attributes.contentaXt} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-base font-medium">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmFV }}
        >
      </svg>
      <RichText.Content value={attributes.contentelB} /></span>

                        </nav>
                    </div>
                </div>
                <div class="flex-shrink-0 w-14"/>
            </div>
            <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div class="border-r border-gray-200 pt-5 flex flex-col flex-grow bg-white overflow-y-auto">
                    <div class="flex-shrink-0 px-4 flex items-center">
                        
      <img
            src={ attributes.imageurlIsh } 
            alt={ attributes.imagealtydz } 
            class="h-8 w-auto"
          />
                    </div>
                    <div class="flex-grow mt-5 flex flex-col">
                        <nav class="flex-1 px-2 pb-4 space-y-1"> <span class="bg-gray-100 text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
            
            
      <svg
         class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEBY }}
        >
      </svg>
      <RichText.Content value={attributes.contentxBR} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgryV }}
        >
      </svg>
      <RichText.Content value={attributes.contenttMm} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguaq }}
        >
      </svg>
      <RichText.Content value={attributes.contentZUB} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtHS }}
        >
      </svg>
      <RichText.Content value={attributes.contentnCh} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwpD }}
        >
      </svg>
      <RichText.Content value={attributes.contentCKn} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWEu }}
        >
      </svg>
      <RichText.Content value={attributes.contentEPr} /></span>

                        </nav>
                    </div>
                </div>
            </div>
            <div class="md:pl-64">
                <div class="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
                    <div class="sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
                        <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"> <span class="sr-only"><RichText.Content value={attributes.contentfdU} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGMK }}
        >
      </svg>
      
                        </button>
                        <div class="flex-1 flex justify-between px-4 md:px-0">
                            <div class="flex-1 flex">
                                <form class="w-full flex md:ml-0" action="#" method="GET">
                                    <label for="search-field" class="sr-only">
                                        <RichText.Content value={attributes.contentZyp} /></label>
                                    <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPEN }}
        >
      </svg>
      
                                        </div>
                                        <input id="search-field" class="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search"/>
                                    </div>
                                </form>
                            </div>
                            <div class="ml-4 flex items-center md:ml-6">
                                <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentxjH} /></span>

                                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUUA }}
        >
      </svg>
      
                                </button>
                                <div class="ml-3 relative">
                                    <div>
                                        <button type="button" class="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentQiv} /></span>

                                            
      <img
            src={ attributes.imageurlNLY } 
            alt={ attributes.imagealtYLk } 
            class="h-8 w-8 rounded-full"
          />
                                        </button>
                                    </div>
                                    <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentoMr} /></span>
 <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentkHe} /></span>
 <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentgyU} /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <main class="flex-1">
                        <div class="py-6">
                            <div class="px-4 sm:px-6 md:px-0">
                                 <h1 class="text-2xl font-semibold text-gray-900"><RichText.Content value={attributes.contenttvu} /></h1>

                            </div>
                            <div class="px-4 sm:px-6 md:px-0">
                                <div class="py-4">
                                    <div class="h-96 border-4 border-dashed border-gray-200 rounded-lg"/>
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
        });
        