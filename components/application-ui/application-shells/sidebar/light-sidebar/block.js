
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/light-sidebar', {
            title: 'light sidebar',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentLYT": {
    "type": "string",
    "default": "Close sidebar"
  },
  "contentdEc": {
    "type": "string",
    "default": "\n            Dashboard\n          "
  },
  "contentusX": {
    "type": "string",
    "default": "\n            Team\n          "
  },
  "contenttYz": {
    "type": "string",
    "default": "\n            Projects\n          "
  },
  "contentMUX": {
    "type": "string",
    "default": "\n            Calendar\n          "
  },
  "contentMkc": {
    "type": "string",
    "default": "\n            Documents\n          "
  },
  "contentqhR": {
    "type": "string",
    "default": "\n            Reports\n          "
  },
  "contentKXK": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contenthTO": {
    "type": "string",
    "default": "View profile"
  },
  "contentGPw": {
    "type": "string",
    "default": "\n            Dashboard\n          "
  },
  "contentXjf": {
    "type": "string",
    "default": "\n            Team\n          "
  },
  "contentUwd": {
    "type": "string",
    "default": "\n            Projects\n          "
  },
  "contentfNE": {
    "type": "string",
    "default": "\n            Calendar\n          "
  },
  "contenthCl": {
    "type": "string",
    "default": "\n            Documents\n          "
  },
  "contentfFI": {
    "type": "string",
    "default": "\n            Reports\n          "
  },
  "contentcqh": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentZYf": {
    "type": "string",
    "default": "View profile"
  },
  "contenthiD": {
    "type": "string",
    "default": "Open sidebar"
  },
  "contenttqP": {
    "type": "string",
    "default": "Dashboard"
  },
  "imageurlxnG": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
  },
  "imagealtWYY": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlToJ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtjUG": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurloLC": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
  },
  "imagealtoIC": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlvDr": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtjob": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgANJ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgozt": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svggxs": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgSvU": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgYXl": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgPcJ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgKNm": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgwoO": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgsSx": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgaXv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgLZL": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgoxB": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgyfA": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgpLs": {
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
            value={ attributes.svgANJ }
            onChange={ ( value ) => {
              setAttributes({ svgANJ: value });
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
            value={ attributes.svgozt }
            onChange={ ( value ) => {
              setAttributes({ svgozt: value });
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
            value={ attributes.svggxs }
            onChange={ ( value ) => {
              setAttributes({ svggxs: value });
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
            value={ attributes.svgSvU }
            onChange={ ( value ) => {
              setAttributes({ svgSvU: value });
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
            value={ attributes.svgYXl }
            onChange={ ( value ) => {
              setAttributes({ svgYXl: value });
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
            value={ attributes.svgPcJ }
            onChange={ ( value ) => {
              setAttributes({ svgPcJ: value });
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
            value={ attributes.svgKNm }
            onChange={ ( value ) => {
              setAttributes({ svgKNm: value });
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
            value={ attributes.svgwoO }
            onChange={ ( value ) => {
              setAttributes({ svgwoO: value });
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
            value={ attributes.svgsSx }
            onChange={ ( value ) => {
              setAttributes({ svgsSx: value });
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
            value={ attributes.svgaXv }
            onChange={ ( value ) => {
              setAttributes({ svgaXv: value });
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
            value={ attributes.svgLZL }
            onChange={ ( value ) => {
              setAttributes({ svgLZL: value });
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
            value={ attributes.svgoxB }
            onChange={ ( value ) => {
              setAttributes({ svgoxB: value });
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
            value={ attributes.svgyfA }
            onChange={ ( value ) => {
              setAttributes({ svgyfA: value });
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
            value={ attributes.svgpLs }
            onChange={ ( value ) => {
              setAttributes({ svgpLs: value });
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
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentLYT} default="Close sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentLYT: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgANJ }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div className="flex-shrink-0 flex items-center px-4">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlxnG: media.url,
            imagealtWYY: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlxnG } 
            alt={ attributes.imagealtWYY } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <nav className="mt-5 px-2 space-y-1"> <span className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgozt }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentdEc} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentdEc: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggxs }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentusX} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentusX: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSvU }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contenttYz} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contenttYz: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYXl }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentMUX} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentMUX: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPcJ }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentMkc} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentMkc: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKNm }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentqhR} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentqhR: newtext });
      }}
    /></span>

                        </nav>
                    </div>
                    <div className="flex-shrink-0 flex border-t border-gray-200 p-4"> <span className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlToJ: media.url,
            imagealtjUG: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlToJ } 
            alt={ attributes.imagealtjUG } 
            onClick={ open } 
            className="inline-block h-10 w-10 rounded-full"
          /> 
        )} 
      />
            </div>
            <div className="ml-3">
              <p className="text-base font-medium text-gray-700 group-hover:text-gray-900"><RichText tagName="span" value={attributes.contentKXK} default="Tom Cook" onChange={ (newtext) =>  {
        setAttributes({ contentKXK: newtext });
      }}
    /></p>
              <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700"><RichText tagName="span" value={attributes.contenthTO} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contenthTO: newtext });
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
                <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
                    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurloLC: media.url,
            imagealtoIC: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurloLC } 
            alt={ attributes.imagealtoIC } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <nav className="mt-5 flex-1 px-2 bg-white space-y-1"> <span className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwoO }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentGPw} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentGPw: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsSx }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentXjf} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentXjf: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaXv }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentUwd} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentUwd: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLZL }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentfNE} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentfNE: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoxB }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contenthCl} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contenthCl: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyfA }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentfFI} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentfFI: newtext });
      }}
    /></span>

                        </nav>
                    </div>
                    <div className="flex-shrink-0 flex border-t border-gray-200 p-4"> <span className="flex-shrink-0 w-full group block">
          <div className="flex items-center">
            <div>
              
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlvDr: media.url,
            imagealtjob: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlvDr } 
            alt={ attributes.imagealtjob } 
            onClick={ open } 
            className="inline-block h-9 w-9 rounded-full"
          /> 
        )} 
      />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900"><RichText tagName="span" value={attributes.contentcqh} default="Tom Cook" onChange={ (newtext) =>  {
        setAttributes({ contentcqh: newtext });
      }}
    /></p>
              <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700"><RichText tagName="span" value={attributes.contentZYf} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentZYf: newtext });
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
                    <button type="button" className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contenthiD} default="Open sidebar" onChange={ (newtext) =>  {
        setAttributes({ contenthiD: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpLs }}
        >
      </svg>
      
                    </button>
                </div>
                <main className="flex-1">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                             <h1 className="text-2xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contenttqP} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contenttqP: newtext });
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
                <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                    <div class="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentLYT} /></span>

                            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgANJ }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div class="flex-shrink-0 flex items-center px-4">
                            
      <img
            src={ attributes.imageurlxnG } 
            alt={ attributes.imagealtWYY } 
            class="h-8 w-auto"
          />
                        </div>
                        <nav class="mt-5 px-2 space-y-1"> <span class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgozt }}
        >
      </svg>
      <RichText.Content value={attributes.contentdEc} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggxs }}
        >
      </svg>
      <RichText.Content value={attributes.contentusX} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSvU }}
        >
      </svg>
      <RichText.Content value={attributes.contenttYz} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYXl }}
        >
      </svg>
      <RichText.Content value={attributes.contentMUX} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPcJ }}
        >
      </svg>
      <RichText.Content value={attributes.contentMkc} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKNm }}
        >
      </svg>
      <RichText.Content value={attributes.contentqhR} /></span>

                        </nav>
                    </div>
                    <div class="flex-shrink-0 flex border-t border-gray-200 p-4"> <span class="flex-shrink-0 group block">
          <div class="flex items-center">
            <div>
              
      <img
            src={ attributes.imageurlToJ } 
            alt={ attributes.imagealtjUG } 
            class="inline-block h-10 w-10 rounded-full"
          />
            </div>
            <div class="ml-3">
              <p class="text-base font-medium text-gray-700 group-hover:text-gray-900"><RichText.Content value={attributes.contentKXK} /></p>
              <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700"><RichText.Content value={attributes.contenthTO} /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
                <div class="flex-shrink-0 w-14"/>
            </div>
            <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
                    <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div class="flex items-center flex-shrink-0 px-4">
                            
      <img
            src={ attributes.imageurloLC } 
            alt={ attributes.imagealtoIC } 
            class="h-8 w-auto"
          />
                        </div>
                        <nav class="mt-5 flex-1 px-2 bg-white space-y-1"> <span class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwoO }}
        >
      </svg>
      <RichText.Content value={attributes.contentGPw} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsSx }}
        >
      </svg>
      <RichText.Content value={attributes.contentXjf} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaXv }}
        >
      </svg>
      <RichText.Content value={attributes.contentUwd} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLZL }}
        >
      </svg>
      <RichText.Content value={attributes.contentfNE} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoxB }}
        >
      </svg>
      <RichText.Content value={attributes.contenthCl} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyfA }}
        >
      </svg>
      <RichText.Content value={attributes.contentfFI} /></span>

                        </nav>
                    </div>
                    <div class="flex-shrink-0 flex border-t border-gray-200 p-4"> <span class="flex-shrink-0 w-full group block">
          <div class="flex items-center">
            <div>
              
      <img
            src={ attributes.imageurlvDr } 
            alt={ attributes.imagealtjob } 
            class="inline-block h-9 w-9 rounded-full"
          />
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900"><RichText.Content value={attributes.contentcqh} /></p>
              <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700"><RichText.Content value={attributes.contentZYf} /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
            </div>
            <div class="md:pl-64 flex flex-col flex-1">
                <div class="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                    <button type="button" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contenthiD} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpLs }}
        >
      </svg>
      
                    </button>
                </div>
                <main class="flex-1">
                    <div class="py-6">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                             <h1 class="text-2xl font-semibold text-gray-900"><RichText.Content value={attributes.contenttqP} /></h1>

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
        