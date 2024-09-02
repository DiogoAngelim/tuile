
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/brand-sidebar-with-light-header', {
            title: 'brand sidebar with light header',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentlYU": {
    "type": "string",
    "default": "Close sidebar"
  },
  "contentINe": {
    "type": "string",
    "default": "\n            Dashboard\n          "
  },
  "contentPjR": {
    "type": "string",
    "default": "\n            Team\n          "
  },
  "contentJIu": {
    "type": "string",
    "default": "\n            Projects\n          "
  },
  "contentfqQ": {
    "type": "string",
    "default": "\n            Calendar\n          "
  },
  "contentbPK": {
    "type": "string",
    "default": "\n            Documents\n          "
  },
  "contentGit": {
    "type": "string",
    "default": "\n            Reports\n          "
  },
  "contentVqH": {
    "type": "string",
    "default": "\n            Dashboard\n          "
  },
  "contentuJD": {
    "type": "string",
    "default": "\n            Team\n          "
  },
  "contentSrG": {
    "type": "string",
    "default": "\n            Projects\n          "
  },
  "contentKnU": {
    "type": "string",
    "default": "\n            Calendar\n          "
  },
  "contentAyc": {
    "type": "string",
    "default": "\n            Documents\n          "
  },
  "contentFgb": {
    "type": "string",
    "default": "\n            Reports\n          "
  },
  "contentPiQ": {
    "type": "string",
    "default": "Open sidebar"
  },
  "contentgWs": {
    "type": "string",
    "default": "Search"
  },
  "contentIfT": {
    "type": "string",
    "default": "View notifications"
  },
  "contentcTe": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentMcm": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentIPW": {
    "type": "string",
    "default": "Settings"
  },
  "contentQFy": {
    "type": "string",
    "default": "Sign out"
  },
  "contentWaA": {
    "type": "string",
    "default": "Dashboard"
  },
  "imageurlSZA": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-300-mark-white-text.svg'
  },
  "imagealtKLp": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlgfw": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-300-mark-white-text.svg'
  },
  "imagealtwxM": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlqmp": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtFAM": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgsUR": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgfiS": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svggDM": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgoAW": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgmOZ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgmez": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgyBe": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgbRQ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgILP": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgpUu": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svglmp": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgYbe": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgvCP": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgjzp": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h7\"/>"
  },
  "svgOtD": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgCCR": {
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
            value={ attributes.svgsUR }
            onChange={ ( value ) => {
              setAttributes({ svgsUR: value });
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
            value={ attributes.svgfiS }
            onChange={ ( value ) => {
              setAttributes({ svgfiS: value });
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
            value={ attributes.svggDM }
            onChange={ ( value ) => {
              setAttributes({ svggDM: value });
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
            value={ attributes.svgoAW }
            onChange={ ( value ) => {
              setAttributes({ svgoAW: value });
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
            value={ attributes.svgmOZ }
            onChange={ ( value ) => {
              setAttributes({ svgmOZ: value });
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
            value={ attributes.svgmez }
            onChange={ ( value ) => {
              setAttributes({ svgmez: value });
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
            value={ attributes.svgyBe }
            onChange={ ( value ) => {
              setAttributes({ svgyBe: value });
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
            value={ attributes.svgbRQ }
            onChange={ ( value ) => {
              setAttributes({ svgbRQ: value });
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
            value={ attributes.svgILP }
            onChange={ ( value ) => {
              setAttributes({ svgILP: value });
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
            value={ attributes.svgpUu }
            onChange={ ( value ) => {
              setAttributes({ svgpUu: value });
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
            value={ attributes.svglmp }
            onChange={ ( value ) => {
              setAttributes({ svglmp: value });
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
            value={ attributes.svgYbe }
            onChange={ ( value ) => {
              setAttributes({ svgYbe: value });
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
            value={ attributes.svgvCP }
            onChange={ ( value ) => {
              setAttributes({ svgvCP: value });
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
            value={ attributes.svgjzp }
            onChange={ ( value ) => {
              setAttributes({ svgjzp: value });
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
            value={ attributes.svgOtD }
            onChange={ ( value ) => {
              setAttributes({ svgOtD: value });
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
            value={ attributes.svgCCR }
            onChange={ ( value ) => {
              setAttributes({ svgCCR: value });
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
                <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentlYU} default="Close sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentlYU: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsUR }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="flex-shrink-0 flex items-center px-4">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlSZA: media.url,
            imagealtKLp: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlSZA } 
            alt={ attributes.imagealtKLp } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                    </div>
                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                        <nav className="px-2 space-y-1"> <span className="bg-indigo-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfiS }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentINe} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentINe: newtext });
      }}
    /></span>
 <span className="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggDM }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentPjR} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentPjR: newtext });
      }}
    /></span>
 <span className="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoAW }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentJIu} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentJIu: newtext });
      }}
    /></span>
 <span className="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmOZ }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentfqQ} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentfqQ: newtext });
      }}
    /></span>
 <span className="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmez }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentbPK} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentbPK: newtext });
      }}
    /></span>
 <span className="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyBe }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentGit} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentGit: newtext });
      }}
    /></span>

                        </nav>
                    </div>
                </div>
                <div className="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div className="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
                    <div className="flex items-center flex-shrink-0 px-4">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlgfw: media.url,
            imagealtwxM: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlgfw } 
            alt={ attributes.imagealtwxM } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                    </div>
                    <div className="mt-5 flex-1 flex flex-col">
                        <nav className="flex-1 px-2 pb-4 space-y-1"> <span className="bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbRQ }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentVqH} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentVqH: newtext });
      }}
    /></span>
 <span className="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgILP }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentuJD} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentuJD: newtext });
      }}
    /></span>
 <span className="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpUu }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentSrG} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentSrG: newtext });
      }}
    /></span>
 <span className="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglmp }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentKnU} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentKnU: newtext });
      }}
    /></span>
 <span className="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYbe }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentAyc} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentAyc: newtext });
      }}
    /></span>
 <span className="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvCP }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentFgb} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentFgb: newtext });
      }}
    /></span>

                        </nav>
                    </div>
                </div>
            </div>
            <div className="md:pl-64 flex flex-col flex-1">
                <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                    <button type="button" className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"> <span className="sr-only"><RichText tagName="span" value={attributes.contentPiQ} default="Open sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentPiQ: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjzp }}
        >
      </svg>
      
                    </button>
                    <div className="flex-1 px-4 flex justify-between">
                        <div className="flex-1 flex">
                            <form className="w-full flex md:ml-0" action="#" method="GET">
                                <label for="search-field" className="sr-only">
                                    <RichText tagName="span" value={attributes.contentgWs} default="Search" onChange={ (newtext) => { setAttributes({ contentgWs: newtext }); }} /></label>
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOtD }}
        >
      </svg>
      
                                    </div>
                                    <input id="search-field" className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search"/>
                                </div>
                            </form>
                        </div>
                        <div className="ml-4 flex items-center md:ml-6">
                            <button type="button" className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentIfT} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentIfT: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCCR }}
        >
      </svg>
      
                            </button>
                            <div className="ml-3 relative">
                                <div>
                                    <button type="button" className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentcTe} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentcTe: newtext });
      }}
    /></span>

                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlqmp: media.url,
            imagealtFAM: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlqmp } 
            alt={ attributes.imagealtFAM } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                    </button>
                                </div>
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentMcm} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentMcm: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentIPW} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentIPW: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentQFy} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentQFy: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <main>
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                             <h1 className="text-2xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentWaA} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentWaA: newtext });
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
                <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
                    <div class="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentlYU} /></span>

                            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsUR }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="flex-shrink-0 flex items-center px-4">
                        
      <img
            src={ attributes.imageurlSZA } 
            alt={ attributes.imagealtKLp } 
            class="h-8 w-auto"
          />
                    </div>
                    <div class="mt-5 flex-1 h-0 overflow-y-auto">
                        <nav class="px-2 space-y-1"> <span class="bg-indigo-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfiS }}
        >
      </svg>
      <RichText.Content value={attributes.contentINe} /></span>
 <span class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggDM }}
        >
      </svg>
      <RichText.Content value={attributes.contentPjR} /></span>
 <span class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoAW }}
        >
      </svg>
      <RichText.Content value={attributes.contentJIu} /></span>
 <span class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmOZ }}
        >
      </svg>
      <RichText.Content value={attributes.contentfqQ} /></span>
 <span class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmez }}
        >
      </svg>
      <RichText.Content value={attributes.contentbPK} /></span>
 <span class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyBe }}
        >
      </svg>
      <RichText.Content value={attributes.contentGit} /></span>

                        </nav>
                    </div>
                </div>
                <div class="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div class="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
                    <div class="flex items-center flex-shrink-0 px-4">
                        
      <img
            src={ attributes.imageurlgfw } 
            alt={ attributes.imagealtwxM } 
            class="h-8 w-auto"
          />
                    </div>
                    <div class="mt-5 flex-1 flex flex-col">
                        <nav class="flex-1 px-2 pb-4 space-y-1"> <span class="bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbRQ }}
        >
      </svg>
      <RichText.Content value={attributes.contentVqH} /></span>
 <span class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgILP }}
        >
      </svg>
      <RichText.Content value={attributes.contentuJD} /></span>
 <span class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpUu }}
        >
      </svg>
      <RichText.Content value={attributes.contentSrG} /></span>
 <span class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglmp }}
        >
      </svg>
      <RichText.Content value={attributes.contentKnU} /></span>
 <span class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYbe }}
        >
      </svg>
      <RichText.Content value={attributes.contentAyc} /></span>
 <span class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvCP }}
        >
      </svg>
      <RichText.Content value={attributes.contentFgb} /></span>

                        </nav>
                    </div>
                </div>
            </div>
            <div class="md:pl-64 flex flex-col flex-1">
                <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                    <button type="button" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"> <span class="sr-only"><RichText.Content value={attributes.contentPiQ} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjzp }}
        >
      </svg>
      
                    </button>
                    <div class="flex-1 px-4 flex justify-between">
                        <div class="flex-1 flex">
                            <form class="w-full flex md:ml-0" action="#" method="GET">
                                <label for="search-field" class="sr-only">
                                    <RichText.Content value={attributes.contentgWs} /></label>
                                <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOtD }}
        >
      </svg>
      
                                    </div>
                                    <input id="search-field" class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search"/>
                                </div>
                            </form>
                        </div>
                        <div class="ml-4 flex items-center md:ml-6">
                            <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentIfT} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCCR }}
        >
      </svg>
      
                            </button>
                            <div class="ml-3 relative">
                                <div>
                                    <button type="button" class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentcTe} /></span>

                                        
      <img
            src={ attributes.imageurlqmp } 
            alt={ attributes.imagealtFAM } 
            class="h-8 w-8 rounded-full"
          />
                                    </button>
                                </div>
                                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentMcm} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentIPW} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentQFy} /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <main>
                    <div class="py-6">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                             <h1 class="text-2xl font-semibold text-gray-900"><RichText.Content value={attributes.contentWaA} /></h1>

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
        