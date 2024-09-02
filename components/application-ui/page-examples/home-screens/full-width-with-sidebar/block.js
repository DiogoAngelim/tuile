
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/full-width-with-sidebar', {
            title: 'full width with sidebar',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentBUY": {
    "type": "string",
    "default": "Close sidebar"
  },
  "contentbGp": {
    "type": "string",
    "default": "\n              Home\n            "
  },
  "contentsJM": {
    "type": "string",
    "default": "\n              My tasks\n            "
  },
  "contentnfi": {
    "type": "string",
    "default": "\n              Recent\n            "
  },
  "contentlFu": {
    "type": "string",
    "default": "Teams"
  },
  "contentgOf": {
    "type": "string",
    "default": " Engineering "
  },
  "contentDWH": {
    "type": "string",
    "default": " Human Resources "
  },
  "contentkqH": {
    "type": "string",
    "default": " Customer Success "
  },
  "contentSnl": {
    "type": "string",
    "default": "Jessy Schwarz"
  },
  "contentIEV": {
    "type": "string",
    "default": "@jessyschwarz"
  },
  "contentIzD": {
    "type": "string",
    "default": "View profile"
  },
  "contentdbA": {
    "type": "string",
    "default": "Settings"
  },
  "contentDEe": {
    "type": "string",
    "default": "Notifications"
  },
  "contentsqW": {
    "type": "string",
    "default": "Get desktop app"
  },
  "contentePO": {
    "type": "string",
    "default": "Support"
  },
  "contentwxZ": {
    "type": "string",
    "default": "Logout"
  },
  "contentGhe": {
    "type": "string",
    "default": "Search"
  },
  "contentRHs": {
    "type": "string",
    "default": "\n            Home\n          "
  },
  "contentTHG": {
    "type": "string",
    "default": "\n            My tasks\n          "
  },
  "contentEAU": {
    "type": "string",
    "default": "\n            Recent\n          "
  },
  "contentbCJ": {
    "type": "string",
    "default": "Teams"
  },
  "contentOzR": {
    "type": "string",
    "default": " Engineering "
  },
  "contentUBr": {
    "type": "string",
    "default": " Human Resources "
  },
  "contentmgD": {
    "type": "string",
    "default": " Customer Success "
  },
  "contentxRO": {
    "type": "string",
    "default": "Open sidebar"
  },
  "contentVyQ": {
    "type": "string",
    "default": "Search"
  },
  "contentptB": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentIYm": {
    "type": "string",
    "default": "View profile"
  },
  "contentzcI": {
    "type": "string",
    "default": "Settings"
  },
  "contentqpt": {
    "type": "string",
    "default": "Notifications"
  },
  "contenthIW": {
    "type": "string",
    "default": "Get desktop app"
  },
  "contenteCX": {
    "type": "string",
    "default": "Support"
  },
  "contentrZg": {
    "type": "string",
    "default": "Logout"
  },
  "contentpEv": {
    "type": "string",
    "default": "Home"
  },
  "contentHAl": {
    "type": "string",
    "default": "Share"
  },
  "contentnZF": {
    "type": "string",
    "default": "Create"
  },
  "contentjoN": {
    "type": "string",
    "default": "Pinned Projects"
  },
  "contentUON": {
    "type": "string",
    "default": "GA"
  },
  "contentSGX": {
    "type": "string",
    "default": " GraphQL API "
  },
  "contentUBQ": {
    "type": "string",
    "default": "12 Members"
  },
  "contentEdb": {
    "type": "string",
    "default": "Open options"
  },
  "contentYdY": {
    "type": "string",
    "default": "View"
  },
  "contentByC": {
    "type": "string",
    "default": "Removed from pinned"
  },
  "contentUvy": {
    "type": "string",
    "default": "Share"
  },
  "contentpBl": {
    "type": "string",
    "default": "Projects"
  },
  "contentutO": {
    "type": "string",
    "default": "\n                  GraphQL API\n                  "
  },
  "contentloI": {
    "type": "string",
    "default": "in Engineering"
  },
  "contentExy": {
    "type": "string",
    "default": "Project"
  },
  "contentDOx": {
    "type": "string",
    "default": "Members"
  },
  "contentagN": {
    "type": "string",
    "default": "Last updated"
  },
  "contentnzd": {
    "type": "string",
    "default": "\n                        GraphQL API\n                        "
  },
  "contentwrw": {
    "type": "string",
    "default": "in Engineering"
  },
  "contentXaN": {
    "type": "string",
    "default": "+8"
  },
  "contentJsx": {
    "type": "string",
    "default": "March 17, 2020"
  },
  "contentmJD": {
    "type": "string",
    "default": "Edit"
  },
  "imageurlPrO": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-purple-500-mark-gray-700-text.svg'
  },
  "imagealtvwV": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlYYe": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-purple-500-mark-gray-700-text.svg'
  },
  "imagealtVHI": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlCFF": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1502685104226-ee32379fefbe.jpeg'
  },
  "imagealtwef": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlWcR": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1502685104226-ee32379fefbe.jpeg'
  },
  "imagealtlrC": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlRiM": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1506794778202-cad84cf45f1d.jpeg'
  },
  "imagealtOic": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Dries Vincent"
  },
  "imageurliST": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517841905240-472988babdf9.jpeg'
  },
  "imagealtUfZ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Lindsay Walton"
  },
  "imageurlswQ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1438761681033-6461ffad8d80.jpeg'
  },
  "imagealtejc": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Courtney Henry"
  },
  "imageurlbVe": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtags": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Tom Cook"
  },
  "svgmvu": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgbFz": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgHqf": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 10h16M4 14h16M4 18h16\"/>"
  },
  "svgKzK": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgpJJ": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgmHd": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgOWh": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgcwB": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 10h16M4 14h16M4 18h16\"/>"
  },
  "svgUIO": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgMsi": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h8m-8 6h16\"/>"
  },
  "svgNVE": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgZdm": {
    "type": "string",
    "default": "<path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"/>"
  },
  "svgnID": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgmvu }
            onChange={ ( value ) => {
              setAttributes({ svgmvu: value });
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
            value={ attributes.svgbFz }
            onChange={ ( value ) => {
              setAttributes({ svgbFz: value });
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
            value={ attributes.svgHqf }
            onChange={ ( value ) => {
              setAttributes({ svgHqf: value });
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
            value={ attributes.svgKzK }
            onChange={ ( value ) => {
              setAttributes({ svgKzK: value });
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
            value={ attributes.svgpJJ }
            onChange={ ( value ) => {
              setAttributes({ svgpJJ: value });
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
            value={ attributes.svgmHd }
            onChange={ ( value ) => {
              setAttributes({ svgmHd: value });
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
            value={ attributes.svgOWh }
            onChange={ ( value ) => {
              setAttributes({ svgOWh: value });
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
            value={ attributes.svgcwB }
            onChange={ ( value ) => {
              setAttributes({ svgcwB: value });
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
            value={ attributes.svgUIO }
            onChange={ ( value ) => {
              setAttributes({ svgUIO: value });
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
            value={ attributes.svgMsi }
            onChange={ ( value ) => {
              setAttributes({ svgMsi: value });
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
            value={ attributes.svgNVE }
            onChange={ ( value ) => {
              setAttributes({ svgNVE: value });
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
            value={ attributes.svgZdm }
            onChange={ ( value ) => {
              setAttributes({ svgZdm: value });
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
            value={ attributes.svgnID }
            onChange={ ( value ) => {
              setAttributes({ svgnID: value });
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
        <div className="min-h-full">
            <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentBUY} default="Close sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentBUY: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmvu }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="flex-shrink-0 flex items-center px-4">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlPrO: media.url,
            imagealtvwV: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlPrO } 
            alt={ attributes.imagealtvwV } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                    </div>
                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                        <nav className="px-2">
                            <div className="space-y-1"> <span className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md" aria-current="page">
              
              
      <svg
         className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbFz }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentbGp} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentbGp: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHqf }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentsJM} default="My tasks" onChange={ (newtext) =>  {
        setAttributes({ contentsJM: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKzK }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentnfi} default="Recent" onChange={ (newtext) =>  {
        setAttributes({ contentnfi: newtext });
      }}
    /></span>

                            </div>
                            <div className="mt-8">
                                 <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="mobile-teams-headline"><RichText tagName="span" value={attributes.contentlFu} default="Teams" onChange={ (newtext) =>  {
        setAttributes({ contentlFu: newtext });
      }}
    /></h3>

                                <div className="mt-1 space-y-1" role="group" aria-labelledby="mobile-teams-headline"> <span className="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full" aria-hidden="true"/>

                                    <span className="truncate">
                                        <RichText tagName="span" value={attributes.contentgOf} default="Engineering" onChange={ (newtext) => { setAttributes({ contentgOf: newtext }); }} /></span>
                                            </span> <span className="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span className="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full" aria-hidden="true"/>

                                            <span className="truncate">
                                                <RichText tagName="span" value={attributes.contentDWH} default="Human Resources" onChange={ (newtext) => { setAttributes({ contentDWH: newtext }); }} /></span>
                                                    </span> <span className="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span className="w-2.5 h-2.5 mr-4 bg-yellow-500 rounded-full" aria-hidden="true"/>

                                                    <span className="truncate">
                                                        <RichText tagName="span" value={attributes.contentkqH} default="Customer Success" onChange={ (newtext) => { setAttributes({ contentkqH: newtext }); }} /></span>
                                                            </span>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100">
                <div className="flex items-center flex-shrink-0 px-6">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlYYe: media.url,
            imagealtVHI: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlYYe } 
            alt={ attributes.imagealtVHI } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                </div>
                <div className="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
                    <div className="px-3 relative inline-block text-left">
                        <div>
                            <button type="button" className="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500" id="options-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="flex w-full justify-between items-center">
              <span className="flex min-w-0 items-center justify-between space-x-3">
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlCFF: media.url,
            imagealtwef: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlCFF } 
            alt={ attributes.imagealtwef } 
            onClick={ open } 
            className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
          /> 
        )} 
      />
                <span className="flex-1 flex flex-col min-w-0">
                  <span className="text-gray-900 text-sm font-medium truncate"><RichText tagName="span" value={attributes.contentSnl} default="Jessy Schwarz" onChange={ (newtext) =>  {
        setAttributes({ contentSnl: newtext });
      }}
    /></span>
 <span className="text-gray-500 text-sm truncate"><RichText tagName="span" value={attributes.contentIEV} default="@jessyschwarz" onChange={ (newtext) =>  {
        setAttributes({ contentIEV: newtext });
      }}
    /></span>
</span>
                                </span>
                                
      <svg
         className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpJJ }}
        >
      </svg>
      
                                </span>
                            </button>
                        </div>
                        <div className="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-button" tabindex="-1">
                            <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-0"><RichText tagName="span" value={attributes.contentIzD} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentIzD: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-1"><RichText tagName="span" value={attributes.contentdbA} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentdbA: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-2"><RichText tagName="span" value={attributes.contentDEe} default="Notifications" onChange={ (newtext) =>  {
        setAttributes({ contentDEe: newtext });
      }}
    /></span>

                            </div>
                            <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-3"><RichText tagName="span" value={attributes.contentsqW} default="Get desktop app" onChange={ (newtext) =>  {
        setAttributes({ contentsqW: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-4"><RichText tagName="span" value={attributes.contentePO} default="Support" onChange={ (newtext) =>  {
        setAttributes({ contentePO: newtext });
      }}
    /></span>

                            </div>
                            <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-5"><RichText tagName="span" value={attributes.contentwxZ} default="Logout" onChange={ (newtext) =>  {
        setAttributes({ contentwxZ: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </div>
                    <div className="px-3 mt-5">
                        <label for="search" className="sr-only">
                            <RichText tagName="span" value={attributes.contentGhe} default="Search" onChange={ (newtext) => { setAttributes({ contentGhe: newtext }); }} /></label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" aria-hidden="true">
                                
      <svg
         className="mr-3 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmHd }}
        >
      </svg>
      
                            </div>
                            <input type="text" name="search" id="search" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md" placeholder="Search"/>
                        </div>
                    </div>
                    <nav className="px-3 mt-6">
                        <div className="space-y-1"> <span className="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md" aria-current="page">
            
            
      <svg
         className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOWh }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentRHs} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentRHs: newtext });
      }}
    /></span>
 <span className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcwB }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentTHG} default="My tasks" onChange={ (newtext) =>  {
        setAttributes({ contentTHG: newtext });
      }}
    /></span>
 <span className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUIO }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentEAU} default="Recent" onChange={ (newtext) =>  {
        setAttributes({ contentEAU: newtext });
      }}
    /></span>

                        </div>
                        <div className="mt-8">
                             <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="desktop-teams-headline"><RichText tagName="span" value={attributes.contentbCJ} default="Teams" onChange={ (newtext) =>  {
        setAttributes({ contentbCJ: newtext });
      }}
    /></h3>

                            <div className="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline"> <span className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
              <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full" aria-hidden="true"/>

                                <span className="truncate">
                                    <RichText tagName="span" value={attributes.contentOzR} default="Engineering" onChange={ (newtext) => { setAttributes({ contentOzR: newtext }); }} /></span>
                                        </span> <span className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
              <span className="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full" aria-hidden="true"/>

                                        <span className="truncate">
                                            <RichText tagName="span" value={attributes.contentUBr} default="Human Resources" onChange={ (newtext) => { setAttributes({ contentUBr: newtext }); }} /></span>
                                                </span> <span className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
              <span className="w-2.5 h-2.5 mr-4 bg-yellow-500 rounded-full" aria-hidden="true"/>

                                                <span className="truncate">
                                                    <RichText tagName="span" value={attributes.contentmgD} default="Customer Success" onChange={ (newtext) => { setAttributes({ contentmgD: newtext }); }} /></span>
                                                        </span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="lg:pl-64 flex flex-col">
                <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
                    <button type="button" className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"> <span className="sr-only"><RichText tagName="span" value={attributes.contentxRO} default="Open sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentxRO: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMsi }}
        >
      </svg>
      
                    </button>
                    <div className="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
                        <div className="flex-1 flex">
                            <form className="w-full flex md:ml-0" action="#" method="GET">
                                <label for="search-field" className="sr-only">
                                    <RichText tagName="span" value={attributes.contentVyQ} default="Search" onChange={ (newtext) => { setAttributes({ contentVyQ: newtext }); }} /></label>
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNVE }}
        >
      </svg>
      
                                    </div>
                                    <input id="search-field" name="search-field" className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm" placeholder="Search" type="search"/>
                                </div>
                            </form>
                        </div>
                        <div className="flex items-center">
                            <div className="ml-3 relative">
                                <div>
                                    <button type="button" className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentptB} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentptB: newtext });
      }}
    /></span>

                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlWcR: media.url,
            imagealtlrC: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlWcR } 
            alt={ attributes.imagealtlrC } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                    </button>
                                </div>
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                    <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentIYm} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentIYm: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentzcI} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentzcI: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentqpt} default="Notifications" onChange={ (newtext) =>  {
        setAttributes({ contentqpt: newtext });
      }}
    /></span>

                                    </div>
                                    <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="user-menu-item-3"><RichText tagName="span" value={attributes.contenthIW} default="Get desktop app" onChange={ (newtext) =>  {
        setAttributes({ contenthIW: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="user-menu-item-4"><RichText tagName="span" value={attributes.contenteCX} default="Support" onChange={ (newtext) =>  {
        setAttributes({ contenteCX: newtext });
      }}
    /></span>

                                    </div>
                                    <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="user-menu-item-5"><RichText tagName="span" value={attributes.contentrZg} default="Logout" onChange={ (newtext) =>  {
        setAttributes({ contentrZg: newtext });
      }}
    /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <main className="flex-1">
                    <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                        <div className="flex-1 min-w-0">
                             <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate"><RichText tagName="span" value={attributes.contentpEv} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentpEv: newtext });
      }}
    /></h1>

                        </div>
                        <div className="mt-4 flex sm:mt-0 sm:ml-4">
                            <button type="button" className="order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0">
                                <RichText tagName="span" value={attributes.contentHAl} default="Share" onChange={ (newtext) => { setAttributes({ contentHAl: newtext }); }} /></button>
                            <button type="button" className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3">
                                <RichText tagName="span" value={attributes.contentnZF} default="Create" onChange={ (newtext) => { setAttributes({ contentnZF: newtext }); }} /></button>
                        </div>
                    </div>
                    <div className="px-4 mt-6 sm:px-6 lg:px-8">
                         <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide"><RichText tagName="span" value={attributes.contentjoN} default="Pinned Projects" onChange={ (newtext) =>  {
        setAttributes({ contentjoN: newtext });
      }}
    /></h2>

                        <ul role="list" className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
                            <li className="relative col-span-1 flex shadow-sm rounded-md">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md">
                                    <RichText tagName="span" value={attributes.contentUON} default="GA" onChange={ (newtext) => { setAttributes({ contentUON: newtext }); }} /></div>
                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                    <div className="flex-1 px-4 py-2 text-sm truncate"> <span className="text-gray-900 font-medium hover:text-gray-600"><RichText tagName="span" value={attributes.contentSGX} default="GraphQL API" onChange={ (newtext) =>  {
        setAttributes({ contentSGX: newtext });
      }}
    /></span>

                                        <p className="text-gray-500">
                                            <RichText tagName="span" value={attributes.contentUBQ} default="12 Members" onChange={ (newtext) => { setAttributes({ contentUBQ: newtext }); }} /></p>
                                    </div>
                                    <div className="flex-shrink-0 pr-2">
                                        <button type="button" className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" id="pinned-project-options-menu-0-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentEdb} default="Open options" onChange={ (newtext) =>  {
        setAttributes({ contentEdb: newtext });
      }}
    /></span>

                                            
      <svg
         className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZdm }}
        >
      </svg>
      
                                        </button>
                                        <div className="z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="pinned-project-options-menu-0-button" tabindex="-1">
                                            <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="pinned-project-options-menu-0-item-0"><RichText tagName="span" value={attributes.contentYdY} default="View" onChange={ (newtext) =>  {
        setAttributes({ contentYdY: newtext });
      }}
    /></span>

                                            </div>
                                            <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="pinned-project-options-menu-0-item-1"><RichText tagName="span" value={attributes.contentByC} default="Removed from pinned" onChange={ (newtext) =>  {
        setAttributes({ contentByC: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="pinned-project-options-menu-0-item-2"><RichText tagName="span" value={attributes.contentUvy} default="Share" onChange={ (newtext) =>  {
        setAttributes({ contentUvy: newtext });
      }}
    /></span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 sm:hidden">
                        <div className="px-4 sm:px-6">
                             <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide"><RichText tagName="span" value={attributes.contentpBl} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentpBl: newtext });
      }}
    /></h2>

                        </div>
                        <ul role="list" className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
                            <li> <span className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
              <span className="flex items-center truncate space-x-3">
                <span className="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-pink-600" aria-hidden="true"/>

                                <span className="font-medium truncate text-sm leading-6">
                                    <RichText tagName="span" value={attributes.contentutO} default="GraphQL API" onChange={ (newtext) => { setAttributes({ contentutO: newtext }); }} /><span className="truncate font-normal text-gray-500"><RichText tagName="span" value={attributes.contentloI} default="in Engineering" onChange={ (newtext) =>  {
        setAttributes({ contentloI: newtext });
      }}
    /></span>
</span>
                                        </span>
                                        
      <svg
         className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnID }}
        >
      </svg>
      
                                        </span>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden mt-8 sm:block">
                        <div className="align-middle inline-block min-w-full border-b border-gray-200">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-t border-gray-200">
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> <span className="lg:pl-2"><RichText tagName="span" value={attributes.contentExy} default="Project" onChange={ (newtext) =>  {
        setAttributes({ contentExy: newtext });
      }}
    /></span>

                                        </th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            <RichText tagName="span" value={attributes.contentDOx} default="Members" onChange={ (newtext) => { setAttributes({ contentDOx: newtext }); }} /></th>
                                        <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            <RichText tagName="span" value={attributes.contentagN} default="Last updated" onChange={ (newtext) => { setAttributes({ contentagN: newtext }); }} /></th>
                                        <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"/>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100">
                                    <tr>
                                        <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                                            <div className="flex items-center space-x-3 lg:pl-2">
                                                <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600" aria-hidden="true"/> <span className="truncate hover:text-gray-600">
                      <span><RichText tagName="span" value={attributes.contentnzd} default="GraphQL API" onChange={ (newtext) =>  {
        setAttributes({ contentnzd: newtext });
      }}
    /><span className="text-gray-500 font-normal"><RichText tagName="span" value={attributes.contentwrw} default="in Engineering" onChange={ (newtext) =>  {
        setAttributes({ contentwrw: newtext });
      }}
    /></span>
</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-3 text-sm text-gray-500 font-medium">
                                            <div className="flex items-center space-x-2">
                                                <div className="flex flex-shrink-0 -space-x-1">
                                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlRiM: media.url,
            imagealtOic: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlRiM } 
            alt={ attributes.imagealtOic } 
            onClick={ open } 
            className="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
                                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurliST: media.url,
            imagealtUfZ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurliST } 
            alt={ attributes.imagealtUfZ } 
            onClick={ open } 
            className="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
                                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlswQ: media.url,
            imagealtKir: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlswQ } 
            alt={ attributes.imagealtKir } 
            onClick={ open } 
            className="h-12 w-12 rounded-full"
          /> 
        )} 
      />
                                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlbVe: media.url,
            imagealtags: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlbVe } 
            alt={ attributes.imagealtags } 
            onClick={ open } 
            className="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
                                                </div> <span className="flex-shrink-0 text-xs leading-5 font-medium"><RichText tagName="span" value={attributes.contentXaN} default="+8" onChange={ (newtext) =>  {
        setAttributes({ contentXaN: newtext });
      }}
    /></span>

                                            </div>
                                        </td>
                                        <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                                            <RichText tagName="span" value={attributes.contentJsx} default="March 17, 2020" onChange={ (newtext) => { setAttributes({ contentJsx: newtext }); }} /></td>
                                        <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium"> <span className="text-indigo-600 hover:text-indigo-900"><RichText tagName="span" value={attributes.contentmJD} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentmJD: newtext });
      }}
    /></span>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
        <div class="min-h-full">
            <div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                    <div class="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentBUY} /></span>

                            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmvu }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="flex-shrink-0 flex items-center px-4">
                        
      <img
            src={ attributes.imageurlPrO } 
            alt={ attributes.imagealtvwV } 
            class="h-8 w-auto"
          />
                    </div>
                    <div class="mt-5 flex-1 h-0 overflow-y-auto">
                        <nav class="px-2">
                            <div class="space-y-1"> <span class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md" aria-current="page">
              
              
      <svg
         class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbFz }}
        >
      </svg>
      <RichText.Content value={attributes.contentbGp} /></span>
 <span class="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHqf }}
        >
      </svg>
      <RichText.Content value={attributes.contentsJM} /></span>
 <span class="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKzK }}
        >
      </svg>
      <RichText.Content value={attributes.contentnfi} /></span>

                            </div>
                            <div class="mt-8">
                                 <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="mobile-teams-headline"><RichText.Content value={attributes.contentlFu} /></h3>

                                <div class="mt-1 space-y-1" role="group" aria-labelledby="mobile-teams-headline"> <span class="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span class="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full" aria-hidden="true"/>

                                    <span class="truncate">
                                        <RichText.Content value={attributes.contentgOf} /></span>
                                            </span> <span class="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span class="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full" aria-hidden="true"/>

                                            <span class="truncate">
                                                <RichText.Content value={attributes.contentDWH} /></span>
                                                    </span> <span class="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span class="w-2.5 h-2.5 mr-4 bg-yellow-500 rounded-full" aria-hidden="true"/>

                                                    <span class="truncate">
                                                        <RichText.Content value={attributes.contentkqH} /></span>
                                                            </span>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div class="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100">
                <div class="flex items-center flex-shrink-0 px-6">
                    
      <img
            src={ attributes.imageurlYYe } 
            alt={ attributes.imagealtVHI } 
            class="h-8 w-auto"
          />
                </div>
                <div class="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
                    <div class="px-3 relative inline-block text-left">
                        <div>
                            <button type="button" class="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500" id="options-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="flex w-full justify-between items-center">
              <span class="flex min-w-0 items-center justify-between space-x-3">
                
      <img
            src={ attributes.imageurlCFF } 
            alt={ attributes.imagealtwef } 
            class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
          />
                <span class="flex-1 flex flex-col min-w-0">
                  <span class="text-gray-900 text-sm font-medium truncate"><RichText.Content value={attributes.contentSnl} /></span>
 <span class="text-gray-500 text-sm truncate"><RichText.Content value={attributes.contentIEV} /></span>
</span>
                                </span>
                                
      <svg
         class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpJJ }}
        >
      </svg>
      
                                </span>
                            </button>
                        </div>
                        <div class="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-button" tabindex="-1">
                            <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-0"><RichText.Content value={attributes.contentIzD} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-1"><RichText.Content value={attributes.contentdbA} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-2"><RichText.Content value={attributes.contentDEe} /></span>

                            </div>
                            <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-3"><RichText.Content value={attributes.contentsqW} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-4"><RichText.Content value={attributes.contentePO} /></span>

                            </div>
                            <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-5"><RichText.Content value={attributes.contentwxZ} /></span>

                            </div>
                        </div>
                    </div>
                    <div class="px-3 mt-5">
                        <label for="search" class="sr-only">
                            <RichText.Content value={attributes.contentGhe} /></label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" aria-hidden="true">
                                
      <svg
         class="mr-3 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmHd }}
        >
      </svg>
      
                            </div>
                            <input type="text" name="search" id="search" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md" placeholder="Search"/>
                        </div>
                    </div>
                    <nav class="px-3 mt-6">
                        <div class="space-y-1"> <span class="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md" aria-current="page">
            
            
      <svg
         class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOWh }}
        >
      </svg>
      <RichText.Content value={attributes.contentRHs} /></span>
 <span class="text-gray-700 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcwB }}
        >
      </svg>
      <RichText.Content value={attributes.contentTHG} /></span>
 <span class="text-gray-700 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUIO }}
        >
      </svg>
      <RichText.Content value={attributes.contentEAU} /></span>

                        </div>
                        <div class="mt-8">
                             <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="desktop-teams-headline"><RichText.Content value={attributes.contentbCJ} /></h3>

                            <div class="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline"> <span class="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
              <span class="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full" aria-hidden="true"/>

                                <span class="truncate">
                                    <RichText.Content value={attributes.contentOzR} /></span>
                                        </span> <span class="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
              <span class="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full" aria-hidden="true"/>

                                        <span class="truncate">
                                            <RichText.Content value={attributes.contentUBr} /></span>
                                                </span> <span class="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
              <span class="w-2.5 h-2.5 mr-4 bg-yellow-500 rounded-full" aria-hidden="true"/>

                                                <span class="truncate">
                                                    <RichText.Content value={attributes.contentmgD} /></span>
                                                        </span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="lg:pl-64 flex flex-col">
                <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
                    <button type="button" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"> <span class="sr-only"><RichText.Content value={attributes.contentxRO} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMsi }}
        >
      </svg>
      
                    </button>
                    <div class="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
                        <div class="flex-1 flex">
                            <form class="w-full flex md:ml-0" action="#" method="GET">
                                <label for="search-field" class="sr-only">
                                    <RichText.Content value={attributes.contentVyQ} /></label>
                                <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNVE }}
        >
      </svg>
      
                                    </div>
                                    <input id="search-field" name="search-field" class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm" placeholder="Search" type="search"/>
                                </div>
                            </form>
                        </div>
                        <div class="flex items-center">
                            <div class="ml-3 relative">
                                <div>
                                    <button type="button" class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentptB} /></span>

                                        
      <img
            src={ attributes.imageurlWcR } 
            alt={ attributes.imagealtlrC } 
            class="h-8 w-8 rounded-full"
          />
                                    </button>
                                </div>
                                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                    <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentIYm} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentzcI} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentqpt} /></span>

                                    </div>
                                    <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="user-menu-item-3"><RichText.Content value={attributes.contenthIW} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="user-menu-item-4"><RichText.Content value={attributes.contenteCX} /></span>

                                    </div>
                                    <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="user-menu-item-5"><RichText.Content value={attributes.contentrZg} /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <main class="flex-1">
                    <div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                        <div class="flex-1 min-w-0">
                             <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate"><RichText.Content value={attributes.contentpEv} /></h1>

                        </div>
                        <div class="mt-4 flex sm:mt-0 sm:ml-4">
                            <button type="button" class="order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0">
                                <RichText.Content value={attributes.contentHAl} /></button>
                            <button type="button" class="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3">
                                <RichText.Content value={attributes.contentnZF} /></button>
                        </div>
                    </div>
                    <div class="px-4 mt-6 sm:px-6 lg:px-8">
                         <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide"><RichText.Content value={attributes.contentjoN} /></h2>

                        <ul role="list" class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
                            <li class="relative col-span-1 flex shadow-sm rounded-md">
                                <div class="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md">
                                    <RichText.Content value={attributes.contentUON} /></div>
                                <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                    <div class="flex-1 px-4 py-2 text-sm truncate"> <span class="text-gray-900 font-medium hover:text-gray-600"><RichText.Content value={attributes.contentSGX} /></span>

                                        <p class="text-gray-500">
                                            <RichText.Content value={attributes.contentUBQ} /></p>
                                    </div>
                                    <div class="flex-shrink-0 pr-2">
                                        <button type="button" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" id="pinned-project-options-menu-0-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentEdb} /></span>

                                            
      <svg
         class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZdm }}
        >
      </svg>
      
                                        </button>
                                        <div class="z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="pinned-project-options-menu-0-button" tabindex="-1">
                                            <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="pinned-project-options-menu-0-item-0"><RichText.Content value={attributes.contentYdY} /></span>

                                            </div>
                                            <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="pinned-project-options-menu-0-item-1"><RichText.Content value={attributes.contentByC} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="pinned-project-options-menu-0-item-2"><RichText.Content value={attributes.contentUvy} /></span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-10 sm:hidden">
                        <div class="px-4 sm:px-6">
                             <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide"><RichText.Content value={attributes.contentpBl} /></h2>

                        </div>
                        <ul role="list" class="mt-3 border-t border-gray-200 divide-y divide-gray-100">
                            <li> <span class="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
              <span class="flex items-center truncate space-x-3">
                <span class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-pink-600" aria-hidden="true"/>

                                <span class="font-medium truncate text-sm leading-6">
                                    <RichText.Content value={attributes.contentutO} /><span class="truncate font-normal text-gray-500"><RichText.Content value={attributes.contentloI} /></span>
</span>
                                        </span>
                                        
      <svg
         class="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnID }}
        >
      </svg>
      
                                        </span>
                            </li>
                        </ul>
                    </div>
                    <div class="hidden mt-8 sm:block">
                        <div class="align-middle inline-block min-w-full border-b border-gray-200">
                            <table class="min-w-full">
                                <thead>
                                    <tr class="border-t border-gray-200">
                                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> <span class="lg:pl-2"><RichText.Content value={attributes.contentExy} /></span>

                                        </th>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            <RichText.Content value={attributes.contentDOx} /></th>
                                        <th class="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            <RichText.Content value={attributes.contentagN} /></th>
                                        <th class="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"/>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-100">
                                    <tr>
                                        <td class="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                                            <div class="flex items-center space-x-3 lg:pl-2">
                                                <div class="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600" aria-hidden="true"/> <span class="truncate hover:text-gray-600">
                      <span><RichText.Content value={attributes.contentnzd} /><span class="text-gray-500 font-normal"><RichText.Content value={attributes.contentwrw} /></span>
</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-3 text-sm text-gray-500 font-medium">
                                            <div class="flex items-center space-x-2">
                                                <div class="flex flex-shrink-0 -space-x-1">
                                                    
      <img
            src={ attributes.imageurlRiM } 
            alt={ attributes.imagealtOic } 
            class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
          />
                                                    
      <img
            src={ attributes.imageurliST } 
            alt={ attributes.imagealtUfZ } 
            class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
          />
                                                    
      <img
            src={ attributes.imageurlswQ } 
            alt={ attributes.imagealtKir } 
            class="h-12 w-12 rounded-full"
          />
                                                    
      <img
            src={ attributes.imageurlbVe } 
            alt={ attributes.imagealtags } 
            class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
          />
                                                </div> <span class="flex-shrink-0 text-xs leading-5 font-medium"><RichText.Content value={attributes.contentXaN} /></span>

                                            </div>
                                        </td>
                                        <td class="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                                            <RichText.Content value={attributes.contentJsx} /></td>
                                        <td class="px-6 py-3 whitespace-nowrap text-right text-sm font-medium"> <span class="text-indigo-600 hover:text-indigo-900"><RichText.Content value={attributes.contentmJD} /></span>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
        