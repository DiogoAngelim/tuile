
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/full-width-with-narrow-branded-sidebar', {
            title: 'full width with narrow branded sidebar',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentDFL": {
    "type": "string",
    "default": "Close sidebar"
  },
  "contentGdp": {
    "type": "string",
    "default": "\n              Home\n            "
  },
  "contentSPo": {
    "type": "string",
    "default": "\n              Trending\n            "
  },
  "contentpZw": {
    "type": "string",
    "default": "\n              Bookmarks\n            "
  },
  "contentQBE": {
    "type": "string",
    "default": "\n              Messages\n            "
  },
  "contentOTx": {
    "type": "string",
    "default": "\n              Profile\n            "
  },
  "contentwyF": {
    "type": "string",
    "default": "Emily Selman"
  },
  "contentYEG": {
    "type": "string",
    "default": "Account Settings"
  },
  "contenteYR": {
    "type": "string",
    "default": "Home"
  },
  "contentrCq": {
    "type": "string",
    "default": "Trending"
  },
  "contentErn": {
    "type": "string",
    "default": "Bookmarks"
  },
  "contentNTA": {
    "type": "string",
    "default": "Messages"
  },
  "contentDpn": {
    "type": "string",
    "default": "Profile"
  },
  "contentwfC": {
    "type": "string",
    "default": "Emily Selman"
  },
  "contentPJK": {
    "type": "string",
    "default": "Account settings"
  },
  "contentCuF": {
    "type": "string",
    "default": "Open sidebar"
  },
  "contentaOM": {
    "type": "string",
    "default": "Account"
  },
  "imageurlXNQ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtrFE": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlAkG": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1502685104226-ee32379fefbe.jpeg'
  },
  "imagealtMBY": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlvxO": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtgNu": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlEXA": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1502685104226-ee32379fefbe.jpeg'
  },
  "imagealtOwV": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlneQ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealthHf": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "svgRYf": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgFJY": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgWST": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z\"/>\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z\"/>"
  },
  "svgYaL": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgYwY": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgzfo": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\"/>"
  },
  "svgjrt": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgvbj": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z\"/>\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z\"/>"
  },
  "svgJOm": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgSNn": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgonP": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\"/>"
  },
  "svgjii": {
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
            value={ attributes.svgRYf }
            onChange={ ( value ) => {
              setAttributes({ svgRYf: value });
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
            value={ attributes.svgFJY }
            onChange={ ( value ) => {
              setAttributes({ svgFJY: value });
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
            value={ attributes.svgWST }
            onChange={ ( value ) => {
              setAttributes({ svgWST: value });
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
            value={ attributes.svgYaL }
            onChange={ ( value ) => {
              setAttributes({ svgYaL: value });
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
            value={ attributes.svgYwY }
            onChange={ ( value ) => {
              setAttributes({ svgYwY: value });
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
            value={ attributes.svgzfo }
            onChange={ ( value ) => {
              setAttributes({ svgzfo: value });
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
            value={ attributes.svgjrt }
            onChange={ ( value ) => {
              setAttributes({ svgjrt: value });
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
            value={ attributes.svgvbj }
            onChange={ ( value ) => {
              setAttributes({ svgvbj: value });
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
            value={ attributes.svgJOm }
            onChange={ ( value ) => {
              setAttributes({ svgJOm: value });
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
            value={ attributes.svgSNn }
            onChange={ ( value ) => {
              setAttributes({ svgSNn: value });
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
            value={ attributes.svgonP }
            onChange={ ( value ) => {
              setAttributes({ svgonP: value });
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
            value={ attributes.svgjii }
            onChange={ ( value ) => {
              setAttributes({ svgjii: value });
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
                    <div className="absolute top-0 right-0 -mr-12 pt-4">
                        <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentDFL} default="Close sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentDFL: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRYf }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="pt-5 pb-4">
                        <div className="flex-shrink-0 flex items-center px-4">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlXNQ: media.url,
            imagealtrFE: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlXNQ } 
            alt={ attributes.imagealtrFE } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <nav aria-label="Sidebar" className="mt-5">
                            <div className="px-2 space-y-1"> <span className="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              
              
      <svg
         className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFJY }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentGdp} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentGdp: newtext });
      }}
    /></span>
 <span className="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              
              
      <svg
         className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWST }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentSPo} default="Trending" onChange={ (newtext) =>  {
        setAttributes({ contentSPo: newtext });
      }}
    /></span>
 <span className="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              
              
      <svg
         className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYaL }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentpZw} default="Bookmarks" onChange={ (newtext) =>  {
        setAttributes({ contentpZw: newtext });
      }}
    /></span>
 <span className="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              
              
      <svg
         className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYwY }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentQBE} default="Messages" onChange={ (newtext) =>  {
        setAttributes({ contentQBE: newtext });
      }}
    /></span>
 <span className="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              
              
      <svg
         className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzfo }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentOTx} default="Profile" onChange={ (newtext) =>  {
        setAttributes({ contentOTx: newtext });
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
            imageurlAkG: media.url,
            imagealtMBY: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlAkG } 
            alt={ attributes.imagealtMBY } 
            onClick={ open } 
            className="inline-block h-10 w-10 rounded-full"
          /> 
        )} 
      />
            </div>
            <div className="ml-3">
              <p className="text-base font-medium text-gray-700 group-hover:text-gray-900"><RichText tagName="span" value={attributes.contentwyF} default="Emily Selman" onChange={ (newtext) =>  {
        setAttributes({ contentwyF: newtext });
      }}
    /></p>
              <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700"><RichText tagName="span" value={attributes.contentYEG} default="Account Settings" onChange={ (newtext) =>  {
        setAttributes({ contentYEG: newtext });
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
                <div className="flex flex-col w-20">
                    <div className="flex-1 flex flex-col min-h-0 overflow-y-auto bg-indigo-600">
                        <div className="flex-1">
                            <div className="bg-indigo-700 py-4 flex items-center justify-center">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlvxO: media.url,
            imagealtgNu: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlvxO } 
            alt={ attributes.imagealtgNu } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                            </div>
                            <nav aria-label="Sidebar" className="py-6 flex flex-col items-center space-y-3"> <span className="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700">
              
              
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjrt }}
        >
      </svg>
      
              <span className="sr-only"><RichText tagName="span" value={attributes.contenteYR} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contenteYR: newtext });
      }}
    /></span>
</span> <span className="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700">
              
              
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvbj }}
        >
      </svg>
      
              <span className="sr-only"><RichText tagName="span" value={attributes.contentrCq} default="Trending" onChange={ (newtext) =>  {
        setAttributes({ contentrCq: newtext });
      }}
    /></span>
</span> <span className="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700">
              
              
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJOm }}
        >
      </svg>
      
              <span className="sr-only"><RichText tagName="span" value={attributes.contentErn} default="Bookmarks" onChange={ (newtext) =>  {
        setAttributes({ contentErn: newtext });
      }}
    /></span>
</span> <span className="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700">
              
              
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSNn }}
        >
      </svg>
      
              <span className="sr-only"><RichText tagName="span" value={attributes.contentNTA} default="Messages" onChange={ (newtext) =>  {
        setAttributes({ contentNTA: newtext });
      }}
    /></span>
</span> <span className="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700">
              
              
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgonP }}
        >
      </svg>
      
              <span className="sr-only"><RichText tagName="span" value={attributes.contentDpn} default="Profile" onChange={ (newtext) =>  {
        setAttributes({ contentDpn: newtext });
      }}
    /></span>
</span>
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex pb-5"> <span className="flex-shrink-0 w-full">
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlEXA: media.url,
            imagealtOwV: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlEXA } 
            alt={ attributes.imagealtOwV } 
            onClick={ open } 
            className="block mx-auto h-10 w-10 rounded-full"
          /> 
        )} 
      />
            <div className="sr-only">
              <p><RichText tagName="span" value={attributes.contentwfC} default="Emily Selman" onChange={ (newtext) =>  {
        setAttributes({ contentwfC: newtext });
      }}
    /></p>
              <p><RichText tagName="span" value={attributes.contentPJK} default="Account settings" onChange={ (newtext) =>  {
        setAttributes({ contentPJK: newtext });
      }}
    /></p>
            </div>
          </span>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
                <div className="lg:hidden">
                    <div className="bg-indigo-600 py-2 px-4 flex items-center justify-between sm:px-6 lg:px-8">
                        <div>
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlneQ: media.url,
            imagealthHf: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlneQ } 
            alt={ attributes.imagealthHf } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <div>
                            <button type="button" className="-mr-3 h-12 w-12 inline-flex items-center justify-center bg-indigo-600 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentCuF} default="Open sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentCuF: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjii }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <main className="flex-1 flex overflow-hidden">
                    <section aria-labelledby="primary-heading" className="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last">
                         <h1 id="primary-heading" className="sr-only"><RichText tagName="span" value={attributes.contentaOM} default="Account" onChange={ (newtext) =>  {
        setAttributes({ contentaOM: newtext });
      }}
    /></h1>

                    </section>
                    <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
                        <div className="h-full relative flex flex-col w-96 border-r border-gray-200 bg-white overflow-y-auto"/>
                    </aside>
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
        <div class="h-full flex">
            <div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                    <div class="absolute top-0 right-0 -mr-12 pt-4">
                        <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentDFL} /></span>

                            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRYf }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="pt-5 pb-4">
                        <div class="flex-shrink-0 flex items-center px-4">
                            
      <img
            src={ attributes.imageurlXNQ } 
            alt={ attributes.imagealtrFE } 
            class="h-8 w-auto"
          />
                        </div>
                        <nav aria-label="Sidebar" class="mt-5">
                            <div class="px-2 space-y-1"> <span class="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              
              
      <svg
         class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFJY }}
        >
      </svg>
      <RichText.Content value={attributes.contentGdp} /></span>
 <span class="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              
              
      <svg
         class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWST }}
        >
      </svg>
      <RichText.Content value={attributes.contentSPo} /></span>
 <span class="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              
              
      <svg
         class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYaL }}
        >
      </svg>
      <RichText.Content value={attributes.contentpZw} /></span>
 <span class="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              
              
      <svg
         class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYwY }}
        >
      </svg>
      <RichText.Content value={attributes.contentQBE} /></span>
 <span class="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              
              
      <svg
         class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzfo }}
        >
      </svg>
      <RichText.Content value={attributes.contentOTx} /></span>

                            </div>
                        </nav>
                    </div>
                    <div class="flex-shrink-0 flex border-t border-gray-200 p-4"> <span class="flex-shrink-0 group block">
          <div class="flex items-center">
            <div>
              
      <img
            src={ attributes.imageurlAkG } 
            alt={ attributes.imagealtMBY } 
            class="inline-block h-10 w-10 rounded-full"
          />
            </div>
            <div class="ml-3">
              <p class="text-base font-medium text-gray-700 group-hover:text-gray-900"><RichText.Content value={attributes.contentwyF} /></p>
              <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700"><RichText.Content value={attributes.contentYEG} /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
                <div class="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div class="hidden lg:flex lg:flex-shrink-0">
                <div class="flex flex-col w-20">
                    <div class="flex-1 flex flex-col min-h-0 overflow-y-auto bg-indigo-600">
                        <div class="flex-1">
                            <div class="bg-indigo-700 py-4 flex items-center justify-center">
                                
      <img
            src={ attributes.imageurlvxO } 
            alt={ attributes.imagealtgNu } 
            class="h-8 w-auto"
          />
                            </div>
                            <nav aria-label="Sidebar" class="py-6 flex flex-col items-center space-y-3"> <span class="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700">
              
              
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjrt }}
        >
      </svg>
      
              <span class="sr-only"><RichText.Content value={attributes.contenteYR} /></span>
</span> <span class="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700">
              
              
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvbj }}
        >
      </svg>
      
              <span class="sr-only"><RichText.Content value={attributes.contentrCq} /></span>
</span> <span class="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700">
              
              
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJOm }}
        >
      </svg>
      
              <span class="sr-only"><RichText.Content value={attributes.contentErn} /></span>
</span> <span class="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700">
              
              
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSNn }}
        >
      </svg>
      
              <span class="sr-only"><RichText.Content value={attributes.contentNTA} /></span>
</span> <span class="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700">
              
              
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgonP }}
        >
      </svg>
      
              <span class="sr-only"><RichText.Content value={attributes.contentDpn} /></span>
</span>
                            </nav>
                        </div>
                        <div class="flex-shrink-0 flex pb-5"> <span class="flex-shrink-0 w-full">
            
      <img
            src={ attributes.imageurlEXA } 
            alt={ attributes.imagealtOwV } 
            class="block mx-auto h-10 w-10 rounded-full"
          />
            <div class="sr-only">
              <p><RichText.Content value={attributes.contentwfC} /></p>
              <p><RichText.Content value={attributes.contentPJK} /></p>
            </div>
          </span>

                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 min-w-0 flex flex-col overflow-hidden">
                <div class="lg:hidden">
                    <div class="bg-indigo-600 py-2 px-4 flex items-center justify-between sm:px-6 lg:px-8">
                        <div>
                            
      <img
            src={ attributes.imageurlneQ } 
            alt={ attributes.imagealthHf } 
            class="h-8 w-auto"
          />
                        </div>
                        <div>
                            <button type="button" class="-mr-3 h-12 w-12 inline-flex items-center justify-center bg-indigo-600 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentCuF} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjii }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <main class="flex-1 flex overflow-hidden">
                    <section aria-labelledby="primary-heading" class="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last">
                         <h1 id="primary-heading" class="sr-only"><RichText.Content value={attributes.contentaOM} /></h1>

                    </section>
                    <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first">
                        <div class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-white overflow-y-auto"/>
                    </aside>
                </main>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        