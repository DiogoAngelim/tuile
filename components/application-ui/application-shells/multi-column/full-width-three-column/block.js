
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/full-width-three-column', {
            title: 'full width three column',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAEsBaADASIAAhEBAxEB/8QAGwABAQEBAQEBAQAAAAAAAAAAAAIBBAMFBgf/xAA8EAEAAQMDAgUDAwEGBQMFAAAAAQIDEQQSITFRBRMiYXEyM0EUgZFCBhUjUqHBJDVTkrEW0eFEVYKi8P/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFxEBAQEBAAAAAAAAAAAAAAAAABEBIf/aAAwDAQACEQMRAD8A/o4CoAAAAAAAAAAAAAAAAAAAAAAAAAAAAMq+mfhrKvpn4B0AIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAm59ur4lSbn26viQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAVAAAAAAAAAAAAAAAAAAAAAAAAAAAABlX0z8NZV9M/AOgBFAABFPrnfmcfiCLVERMRHE9eQWIm1RMRExxHTluynfvx6u4KERaoiJiI4nryTaomIiY4jpyCxOynfvx6u7ItURExEcT15BYibVExETHEdOW7Kd+/Hq7goRFqiImIjievJNqiYiJjiOnILE7Kd+/Hq7si1RETERxPXkFiJtUTERMcR05bsp378eruChEWqIiYiOJ68k2qJiImOI6cgsTsp378eruyLVERMRHE9eQWIm1RMRExxHTluynfvx6u4KERaoiJiI4nryTaomIiY4jpyCxOynfvx6u7ItURExEcT15BYibVExETHEdOW7Kd+/Hq7goRFqiImIjievJNqiYiJjiOnILE7Kd+/Hq7si1RETERxPXkFiJtUTERMcR05bsp378eruChEWqIiYiOJ68k2qJiImOI6cgsTsp3bscsi1RFMxjifcFiJtUTERMcR05PprzNXFXER7gsABNz7dXxKk3Pt1fEgoAAAART6535nH4gi1RETERxPXkFiJtUTERMcR05bsp378eruChEWqIiYiOJ68k2qJiImOI6cgsTsp378eruyLVERMRHE9eQWIm1RMRExxHTluynfvx6u4KERaoiJiI4nryTaomIiY4jpyCxOynfvx6u7ItURExEcT15BYibVExETHEdOW7Kd+/Hq7goRFqiImIjievJNqiYiJjiOnILE7Kd+/Hq7si1RETERxPXkFiJtUTERMcR05bsp378eruChEWqIiYiOJ68k2qJiImOI6cgsTsp378eruyLVERMRHE9eQWIm1RMRExxHTluynfvx6u4KERaoiJiI4nryTaomIiY4jpyCxOynfvx6u7ItURExEcT15BYibVExETHEdOW7Kd+/Hq7goRFqiImIjievJNqiYiJjiOnILE7Kd+/Hq7si1RETERxPXkFiJtUTERMcR05bsp378eruChEWqIiYiOJ68k2qJiImOI6cgsTsp378eruyLVERMRHE9eQWIm1RMRExxHTluynfvx6u4KERaoiJiI4nryTaomIiY4jpyCxOynfvx6u7ItURExEcT15BYibVExETHEdOW7Kd+/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" />),
            category: 'common',
            attributes: {
  "contentreE": {
    "type": "string",
    "default": "Close sidebar"
  },
  "contentWPp": {
    "type": "string",
    "default": "\n              Dashboard\n            "
  },
  "contentifP": {
    "type": "string",
    "default": "\n              Calendar\n            "
  },
  "contentJtY": {
    "type": "string",
    "default": "\n              Teams\n            "
  },
  "contentDvc": {
    "type": "string",
    "default": "\n              Directory\n            "
  },
  "contentyvx": {
    "type": "string",
    "default": "\n              Announcements\n            "
  },
  "contentQnt": {
    "type": "string",
    "default": "\n              Office Map\n            "
  },
  "contentvYY": {
    "type": "string",
    "default": "Whitney Francis"
  },
  "contentqvn": {
    "type": "string",
    "default": "View profile"
  },
  "contentJtX": {
    "type": "string",
    "default": "\n                Dashboard\n              "
  },
  "contentqfv": {
    "type": "string",
    "default": "\n                Calendar\n              "
  },
  "contentVsb": {
    "type": "string",
    "default": "\n                Teams\n              "
  },
  "contenteqV": {
    "type": "string",
    "default": "\n                Directory\n              "
  },
  "contentoWZ": {
    "type": "string",
    "default": "\n                Announcements\n              "
  },
  "contentUzr": {
    "type": "string",
    "default": "\n                Office Map\n              "
  },
  "contentEcZ": {
    "type": "string",
    "default": "Whitney Francis"
  },
  "contentkZk": {
    "type": "string",
    "default": "View profile"
  },
  "contentBdW": {
    "type": "string",
    "default": "Open sidebar"
  },
  "imageurlDcy": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-900-text.svg'
  },
  "imagealtLXE": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlaCx": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517365830460-955ce3ccd263.jpeg'
  },
  "imagealtwhn": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlTZH": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-900-text.svg'
  },
  "imagealtMUy": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlXQr": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517365830460-955ce3ccd263.jpeg'
  },
  "imagealtAUa": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlYmm": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtKbz": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "svgeIx": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgUAy": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgaKo": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgapF": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\"/>"
  },
  "svgDwe": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgGPF": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z\"/>"
  },
  "svguWX": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7\"/>"
  },
  "svgMbm": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgpTf": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgDaO": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\"/>"
  },
  "svgPER": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgKSA": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z\"/>"
  },
  "svgNVv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7\"/>"
  },
  "svgOlM": {
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
            value={ attributes.svgeIx }
            onChange={ ( value ) => {
              setAttributes({ svgeIx: value });
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
            value={ attributes.svgUAy }
            onChange={ ( value ) => {
              setAttributes({ svgUAy: value });
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
            value={ attributes.svgaKo }
            onChange={ ( value ) => {
              setAttributes({ svgaKo: value });
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
            value={ attributes.svgapF }
            onChange={ ( value ) => {
              setAttributes({ svgapF: value });
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
            value={ attributes.svgDwe }
            onChange={ ( value ) => {
              setAttributes({ svgDwe: value });
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
            value={ attributes.svgGPF }
            onChange={ ( value ) => {
              setAttributes({ svgGPF: value });
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
            value={ attributes.svguWX }
            onChange={ ( value ) => {
              setAttributes({ svguWX: value });
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
            value={ attributes.svgMbm }
            onChange={ ( value ) => {
              setAttributes({ svgMbm: value });
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
            value={ attributes.svgpTf }
            onChange={ ( value ) => {
              setAttributes({ svgpTf: value });
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
            value={ attributes.svgDaO }
            onChange={ ( value ) => {
              setAttributes({ svgDaO: value });
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
            value={ attributes.svgPER }
            onChange={ ( value ) => {
              setAttributes({ svgPER: value });
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
            value={ attributes.svgKSA }
            onChange={ ( value ) => {
              setAttributes({ svgKSA: value });
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
            value={ attributes.svgNVv }
            onChange={ ( value ) => {
              setAttributes({ svgNVv: value });
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
            value={ attributes.svgOlM }
            onChange={ ( value ) => {
              setAttributes({ svgOlM: value });
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
            <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentreE} default="Close sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentreE: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeIx }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div className="flex-shrink-0 flex items-center px-4">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlDcy: media.url,
            imagealtLXE: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlDcy } 
            alt={ attributes.imagealtLXE } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <nav aria-label="Sidebar" className="mt-5">
                            <div className="px-2 space-y-1"> <span className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUAy }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentWPp} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentWPp: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaKo }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentifP} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentifP: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgapF }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentJtY} default="Teams" onChange={ (newtext) =>  {
        setAttributes({ contentJtY: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDwe }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentDvc} default="Directory" onChange={ (newtext) =>  {
        setAttributes({ contentDvc: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGPF }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentyvx} default="Announcements" onChange={ (newtext) =>  {
        setAttributes({ contentyvx: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguWX }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentQnt} default="Office Map" onChange={ (newtext) =>  {
        setAttributes({ contentQnt: newtext });
      }}
    /></span>

                            </div>
                        </nav>
                    </div>
                    <div className="flex-shrink-0 flex border-t border-gray-200 p-4"> <span className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlaCx: media.url,
            imagealtwhn: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlaCx } 
            alt={ attributes.imagealtwhn } 
            onClick={ open } 
            className="inline-block h-10 w-10 rounded-full"
          /> 
        )} 
      />
            </div>
            <div className="ml-3">
              <p className="text-base font-medium text-gray-700 group-hover:text-gray-900"><RichText tagName="span" value={attributes.contentvYY} default="Whitney Francis" onChange={ (newtext) =>  {
        setAttributes({ contentvYY: newtext });
      }}
    /></p>
              <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700"><RichText tagName="span" value={attributes.contentqvn} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentqvn: newtext });
      }}
    /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
                <div className="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div className="hidden lg:flex lg:flex-shrink-0">
                <div className="flex flex-col w-64">
                    <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex items-center flex-shrink-0 px-4">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlTZH: media.url,
            imagealtMUy: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlTZH } 
            alt={ attributes.imagealtMUy } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                            </div>
                            <nav className="mt-5 flex-1" aria-label="Sidebar">
                                <div className="px-2 space-y-1"> <span className="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMbm }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentJtX} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentJtX: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpTf }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentqfv} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentqfv: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDaO }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentVsb} default="Teams" onChange={ (newtext) =>  {
        setAttributes({ contentVsb: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPER }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contenteqV} default="Directory" onChange={ (newtext) =>  {
        setAttributes({ contenteqV: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKSA }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentoWZ} default="Announcements" onChange={ (newtext) =>  {
        setAttributes({ contentoWZ: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNVv }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentUzr} default="Office Map" onChange={ (newtext) =>  {
        setAttributes({ contentUzr: newtext });
      }}
    /></span>

                                </div>
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex border-t border-gray-200 p-4"> <span className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div>
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlXQr: media.url,
            imagealtAUa: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlXQr } 
            alt={ attributes.imagealtAUa } 
            onClick={ open } 
            className="inline-block h-9 w-9 rounded-full"
          /> 
        )} 
      />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900"><RichText tagName="span" value={attributes.contentEcZ} default="Whitney Francis" onChange={ (newtext) =>  {
        setAttributes({ contentEcZ: newtext });
      }}
    /></p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700"><RichText tagName="span" value={attributes.contentkZk} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentkZk: newtext });
      }}
    /></p>
              </div>
            </div>
          </span>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                <div className="lg:hidden">
                    <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                        <div>
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlYmm: media.url,
            imagealtKbz: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlYmm } 
            alt={ attributes.imagealtKbz } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <div>
                            <button type="button" className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"> <span className="sr-only"><RichText tagName="span" value={attributes.contentBdW} default="Open sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentBdW: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOlM }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative z-0 flex overflow-hidden">
                    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                            <div className="h-full border-2 border-gray-200 border-dashed rounded-lg"/>
                        </div>
                    </main>
                    <aside className="hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200 overflow-y-auto">
                        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                            <div className="h-full border-2 border-gray-200 border-dashed rounded-lg"/>
                        </div>
                    </aside>
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
            <div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                    <div class="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentreE} /></span>

                            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeIx }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div class="flex-shrink-0 flex items-center px-4">
                            
      <img
            src={ attributes.imageurlDcy } 
            alt={ attributes.imagealtLXE } 
            class="h-8 w-auto"
          />
                        </div>
                        <nav aria-label="Sidebar" class="mt-5">
                            <div class="px-2 space-y-1"> <span class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUAy }}
        >
      </svg>
      <RichText.Content value={attributes.contentWPp} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaKo }}
        >
      </svg>
      <RichText.Content value={attributes.contentifP} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgapF }}
        >
      </svg>
      <RichText.Content value={attributes.contentJtY} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDwe }}
        >
      </svg>
      <RichText.Content value={attributes.contentDvc} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGPF }}
        >
      </svg>
      <RichText.Content value={attributes.contentyvx} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguWX }}
        >
      </svg>
      <RichText.Content value={attributes.contentQnt} /></span>

                            </div>
                        </nav>
                    </div>
                    <div class="flex-shrink-0 flex border-t border-gray-200 p-4"> <span class="flex-shrink-0 group block">
          <div class="flex items-center">
            <div>
              
      <img
            src={ attributes.imageurlaCx } 
            alt={ attributes.imagealtwhn } 
            class="inline-block h-10 w-10 rounded-full"
          />
            </div>
            <div class="ml-3">
              <p class="text-base font-medium text-gray-700 group-hover:text-gray-900"><RichText.Content value={attributes.contentvYY} /></p>
              <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700"><RichText.Content value={attributes.contentqvn} /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
                <div class="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div class="hidden lg:flex lg:flex-shrink-0">
                <div class="flex flex-col w-64">
                    <div class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
                        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div class="flex items-center flex-shrink-0 px-4">
                                
      <img
            src={ attributes.imageurlTZH } 
            alt={ attributes.imagealtMUy } 
            class="h-8 w-auto"
          />
                            </div>
                            <nav class="mt-5 flex-1" aria-label="Sidebar">
                                <div class="px-2 space-y-1"> <span class="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMbm }}
        >
      </svg>
      <RichText.Content value={attributes.contentJtX} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpTf }}
        >
      </svg>
      <RichText.Content value={attributes.contentqfv} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDaO }}
        >
      </svg>
      <RichText.Content value={attributes.contentVsb} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPER }}
        >
      </svg>
      <RichText.Content value={attributes.contenteqV} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKSA }}
        >
      </svg>
      <RichText.Content value={attributes.contentoWZ} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNVv }}
        >
      </svg>
      <RichText.Content value={attributes.contentUzr} /></span>

                                </div>
                            </nav>
                        </div>
                        <div class="flex-shrink-0 flex border-t border-gray-200 p-4"> <span class="flex-shrink-0 w-full group block">
            <div class="flex items-center">
              <div>
                
      <img
            src={ attributes.imageurlXQr } 
            alt={ attributes.imagealtAUa } 
            class="inline-block h-9 w-9 rounded-full"
          />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900"><RichText.Content value={attributes.contentEcZ} /></p>
                <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700"><RichText.Content value={attributes.contentkZk} /></p>
              </div>
            </div>
          </span>

                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
                <div class="lg:hidden">
                    <div class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                        <div>
                            
      <img
            src={ attributes.imageurlYmm } 
            alt={ attributes.imagealtKbz } 
            class="h-8 w-auto"
          />
                        </div>
                        <div>
                            <button type="button" class="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"> <span class="sr-only"><RichText.Content value={attributes.contentBdW} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOlM }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex-1 relative z-0 flex overflow-hidden">
                    <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                        <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                            <div class="h-full border-2 border-gray-200 border-dashed rounded-lg"/>
                        </div>
                    </main>
                    <aside class="hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200 overflow-y-auto">
                        <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                            <div class="h-full border-2 border-gray-200 border-dashed rounded-lg"/>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        