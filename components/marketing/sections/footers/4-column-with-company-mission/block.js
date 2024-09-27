
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl, ToggleControl } = wp.components;


        registerBlockType('wp/4-column-with-company-mission', {
            title: '4-column-with-company-mission',
            icon: (<img src="data:image/jpeg;base64,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LX7/AIOb/LX7/gEhHm/y1+/4Ob/LX7/gEhHm/wAtfv8Ag5v8tfv+ASEeb/LX7/g5v8tfv+ASEeb/AC1+/wCDm/y1+/4BIR5v8tfv+Dm/y1+/4BIR5v8ALX7/AIOb/LX7/gEhHm/y1+/4Ob/LX7/gEhHm/wAtfv8Ag5v8tfv+ASEeb/LX7/g5v8tfv+ASEeb/AC1+/wCDm/y1+/4BIR5v8tfv+Dm/y1+/4BIR5v8ALX7/AIOb/LX7/gEhHm/y1+/4Ob/LX7/gEhHm/wAtfv8Ag5v8tfv+ASEeb/LX7/g5v8tfv+ASEeb/AC1+/wCDm/y1+/4BIR5v8tfv+Dm/y1+/4BIR5v8ALX7/AIOb/LX7/gEhHm/y1+/4Ob/LX7/gEhHm/wAtfv8Ag5v8tfv+ASEeb/LX7/g5v8tfv+ASEeb/AC1+/wCDm/y1+/4BIR5v8tfv+Dm/y1+/4BIR5v8ALX7/AIOb/LX7/gEhHm/y1+/4Ob/LX7/gEhHm/wAtfv8Ag5v8tfv+ASEeb/LX7/g5v8tfv+ASEeb/AC1+/wCDm/y1+/4BIR5v8tfv+Dm/y1+/4BIR5v8ALX7/AIOb/LX7/gEhHm/y1+/4Ob/LX7/gEhHm/wAtfv8Ag5v8tfv+ASEeb/LX7/g5v8tfv+ASEeb/AC1+/wCDm/y1+/4BIR5v8tfv+Dm/y1+/4BIR5v8ALX7/AIOb/LX7/gEhHm/y1+/4Ob/LX7/gEhHm/wAtfv8Ag5v8tfv+ASEeb/LX7/g5v8tfv+ASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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" />),
            category: 'common',
            attributes: {
  "contentaEm": {
    "type": "string",
    "default": "Footer"
  },
  "contentNsK": {
    "type": "string",
    "default": "Making the world a better place through constructing elegant hierarchies."
  },
  "contentoFP": {
    "type": "string",
    "default": "Facebook"
  },
  "contentKws": {
    "type": "string",
    "default": "Instagram"
  },
  "contentolb": {
    "type": "string",
    "default": "Twitter"
  },
  "contentLtV": {
    "type": "string",
    "default": "GitHub"
  },
  "contentYIW": {
    "type": "string",
    "default": "Dribbble"
  },
  "contentbEO": {
    "type": "string",
    "default": "Solutions"
  },
  "contentqpG": {
    "type": "string",
    "default": " Marketing "
  },
  "contentSDz": {
    "type": "string",
    "default": " Analytics "
  },
  "contentyIN": {
    "type": "string",
    "default": " Commerce "
  },
  "contentYPy": {
    "type": "string",
    "default": " Insights "
  },
  "contentfbr": {
    "type": "string",
    "default": "Support"
  },
  "contentKUP": {
    "type": "string",
    "default": " Pricing "
  },
  "contentTuu": {
    "type": "string",
    "default": " Documentation "
  },
  "contentARZ": {
    "type": "string",
    "default": " Guides "
  },
  "contentRvK": {
    "type": "string",
    "default": " API Status "
  },
  "contentMpA": {
    "type": "string",
    "default": "Company"
  },
  "contentGVM": {
    "type": "string",
    "default": " About "
  },
  "contentKQH": {
    "type": "string",
    "default": " Blog "
  },
  "contentyRf": {
    "type": "string",
    "default": " Jobs "
  },
  "contentleu": {
    "type": "string",
    "default": " Press "
  },
  "contentxsJ": {
    "type": "string",
    "default": " Partners "
  },
  "contentYTd": {
    "type": "string",
    "default": "Legal"
  },
  "contentXqF": {
    "type": "string",
    "default": " Claim "
  },
  "contentySt": {
    "type": "string",
    "default": " Privacy "
  },
  "contentVXo": {
    "type": "string",
    "default": " Terms "
  },
  "contentvdw": {
    "type": "string",
    "default": "&copy; 2020 Workflow, Inc. All rights reserved."
  },
  "imageurlriF": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-gray-300.svg'
  },
  "imagealttrF": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Company name"
  },
  "svgzBF": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z\" clip-rule=\"evenodd\"/>"
  },
  "svgOLv": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z\" clip-rule=\"evenodd\"/>"
  },
  "svgvAu": {
    "type": "string",
    "default": "<path d=\"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84\"/>"
  },
  "svgNdz": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z\" clip-rule=\"evenodd\"/>"
  },
  "svgvZV": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgzBF }
            onChange={ ( value ) => {
              setAttributes({ svgzBF: value });
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
            value={ attributes.svgOLv }
            onChange={ ( value ) => {
              setAttributes({ svgOLv: value });
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
            value={ attributes.svgvAu }
            onChange={ ( value ) => {
              setAttributes({ svgvAu: value });
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
            value={ attributes.svgNdz }
            onChange={ ( value ) => {
              setAttributes({ svgNdz: value });
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
            value={ attributes.svgvZV }
            onChange={ ( value ) => {
              setAttributes({ svgvZV: value });
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
        <footer className="bg-white" aria-labelledby="footer-heading">
             <h2 id="footer-heading" className="sr-only"><RichText tagName="span" value={attributes.contentaEm} default="Footer" onChange={ (newtext) =>  {
        setAttributes({ contentaEm: newtext });
      }}
    /></h2>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlriF: media.url,
            imagealttrF: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlriF } 
            alt={ attributes.imagealttrF } 
            onClick={ open } 
            className="h-10"
          /> 
        )} 
      />
                        <p className="text-gray-500 text-base">
                            <RichText tagName="span" value={attributes.contentNsK} default="Making the world a better place through constructing elegant hierarchies." onChange={ (newtext) => { setAttributes({ contentNsK: newtext }); }} /></p>
                        <div className="flex space-x-6"> <span className="text-gray-400 hover:text-gray-500">
            <span className="sr-only"><RichText tagName="span" value={attributes.contentoFP} default="Facebook" onChange={ (newtext) =>  {
        setAttributes({ contentoFP: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzBF }}
        >
      </svg>
      
                            </span> <span className="text-gray-400 hover:text-gray-500">
            <span className="sr-only"><RichText tagName="span" value={attributes.contentKws} default="Instagram" onChange={ (newtext) =>  {
        setAttributes({ contentKws: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOLv }}
        >
      </svg>
      
                            </span> <span className="text-gray-400 hover:text-gray-500">
            <span className="sr-only"><RichText tagName="span" value={attributes.contentolb} default="Twitter" onChange={ (newtext) =>  {
        setAttributes({ contentolb: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvAu }}
        >
      </svg>
      
                            </span> <span className="text-gray-400 hover:text-gray-500">
            <span className="sr-only"><RichText tagName="span" value={attributes.contentLtV} default="GitHub" onChange={ (newtext) =>  {
        setAttributes({ contentLtV: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNdz }}
        >
      </svg>
      
                            </span> <span className="text-gray-400 hover:text-gray-500">
            <span className="sr-only"><RichText tagName="span" value={attributes.contentYIW} default="Dribbble" onChange={ (newtext) =>  {
        setAttributes({ contentYIW: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvZV }}
        >
      </svg>
      
                            </span>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                 <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase"><RichText tagName="span" value={attributes.contentbEO} default="Solutions" onChange={ (newtext) =>  {
        setAttributes({ contentbEO: newtext });
      }}
    /></h3>

                                <ul role="list" className="mt-4 space-y-4">
                                    <li> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentqpG} default="Marketing" onChange={ (newtext) =>  {
        setAttributes({ contentqpG: newtext });
      }}
    /></span>

                                    </li>
                                    <li> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentSDz} default="Analytics" onChange={ (newtext) =>  {
        setAttributes({ contentSDz: newtext });
      }}
    /></span>

                                    </li>
                                    <li> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentyIN} default="Commerce" onChange={ (newtext) =>  {
        setAttributes({ contentyIN: newtext });
      }}
    /></span>

                                    </li>
                                    <li> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentYPy} default="Insights" onChange={ (newtext) =>  {
        setAttributes({ contentYPy: newtext });
      }}
    /></span>

                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                 <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase"><RichText tagName="span" value={attributes.contentfbr} default="Support" onChange={ (newtext) =>  {
        setAttributes({ contentfbr: newtext });
      }}
    /></h3>

                                <ul role="list" className="mt-4 space-y-4">
                                    <li> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentKUP} default="Pricing" onChange={ (newtext) =>  {
        setAttributes({ contentKUP: newtext });
      }}
    /></span>

                                    </li>
                                    <li> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentTuu} default="Documentation" onChange={ (newtext) =>  {
        setAttributes({ contentTuu: newtext });
      }}
    /></span>

                                    </li>
                                    <li> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentARZ} default="Guides" onChange={ (newtext) =>  {
        setAttributes({ contentARZ: newtext });
      }}
    /></span>

                                    </li>
                                    <li> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentRvK} default="API Status" onChange={ (newtext) =>  {
        setAttributes({ contentRvK: newtext });
      }}
    /></span>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                 <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase"><RichText tagName="span" value={attributes.contentMpA} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentMpA: newtext });
      }}
    /></h3>

                                <ul role="list" className="mt-4 space-y-4">
                                    <li> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentGVM} default="About" onChange={ (newtext) =>  {
        setAttributes({ contentGVM: newtext });
      }}
    /></span>

                                    </li>
                                    <li> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentKQH} default="Blog" onChange={ (newtext) =>  {
        setAttributes({ contentKQH: newtext });
      }}
    /></span>

                                    </li>
                                    <li> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentyRf} default="Jobs" onChange={ (newtext) =>  {
        setAttributes({ contentyRf: newtext });
      }}
    /></span>

                                    </li>
                                    <li> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentleu} default="Press" onChange={ (newtext) =>  {
        setAttributes({ contentleu: newtext });
      }}
    /></span>

                                    </li>
                                    <li> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentxsJ} default="Partners" onChange={ (newtext) =>  {
        setAttributes({ contentxsJ: newtext });
      }}
    /></span>

                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                 <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase"><RichText tagName="span" value={attributes.contentYTd} default="Legal" onChange={ (newtext) =>  {
        setAttributes({ contentYTd: newtext });
      }}
    /></h3>

                                <ul role="list" className="mt-4 space-y-4">
                                    <li> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentXqF} default="Claim" onChange={ (newtext) =>  {
        setAttributes({ contentXqF: newtext });
      }}
    /></span>

                                    </li>
                                    <li> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentySt} default="Privacy" onChange={ (newtext) =>  {
        setAttributes({ contentySt: newtext });
      }}
    /></span>

                                    </li>
                                    <li> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentVXo} default="Terms" onChange={ (newtext) =>  {
        setAttributes({ contentVXo: newtext });
      }}
    /></span>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">
                        <RichText tagName="span" value={attributes.contentvdw} default="&copy; 2020 Workflow, Inc. All rights reserved." onChange={ (newtext) => { setAttributes({ contentvdw: newtext }); }} /></p>
                </div>
            </div>
        </footer>
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
        <footer class="bg-white" aria-labelledby="footer-heading">
             <h2 id="footer-heading" class="sr-only"><RichText.Content value={attributes.contentaEm} /></h2>

            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div class="space-y-8 xl:col-span-1">
                        
      <img
            src={ attributes.imageurlriF } 
            alt={ attributes.imagealttrF } 
            class="h-10"
          />
                        <p class="text-gray-500 text-base">
                            <RichText.Content value={attributes.contentNsK} /></p>
                        <div class="flex space-x-6"> <span class="text-gray-400 hover:text-gray-500">
            <span class="sr-only"><RichText.Content value={attributes.contentoFP} /></span>

                            
      <svg
         class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzBF }}
        >
      </svg>
      
                            </span> <span class="text-gray-400 hover:text-gray-500">
            <span class="sr-only"><RichText.Content value={attributes.contentKws} /></span>

                            
      <svg
         class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOLv }}
        >
      </svg>
      
                            </span> <span class="text-gray-400 hover:text-gray-500">
            <span class="sr-only"><RichText.Content value={attributes.contentolb} /></span>

                            
      <svg
         class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvAu }}
        >
      </svg>
      
                            </span> <span class="text-gray-400 hover:text-gray-500">
            <span class="sr-only"><RichText.Content value={attributes.contentLtV} /></span>

                            
      <svg
         class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNdz }}
        >
      </svg>
      
                            </span> <span class="text-gray-400 hover:text-gray-500">
            <span class="sr-only"><RichText.Content value={attributes.contentYIW} /></span>

                            
      <svg
         class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvZV }}
        >
      </svg>
      
                            </span>
                        </div>
                    </div>
                    <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                 <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase"><RichText.Content value={attributes.contentbEO} /></h3>

                                <ul role="list" class="mt-4 space-y-4">
                                    <li> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentqpG} /></span>

                                    </li>
                                    <li> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentSDz} /></span>

                                    </li>
                                    <li> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentyIN} /></span>

                                    </li>
                                    <li> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentYPy} /></span>

                                    </li>
                                </ul>
                            </div>
                            <div class="mt-12 md:mt-0">
                                 <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase"><RichText.Content value={attributes.contentfbr} /></h3>

                                <ul role="list" class="mt-4 space-y-4">
                                    <li> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentKUP} /></span>

                                    </li>
                                    <li> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentTuu} /></span>

                                    </li>
                                    <li> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentARZ} /></span>

                                    </li>
                                    <li> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentRvK} /></span>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                 <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase"><RichText.Content value={attributes.contentMpA} /></h3>

                                <ul role="list" class="mt-4 space-y-4">
                                    <li> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentGVM} /></span>

                                    </li>
                                    <li> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentKQH} /></span>

                                    </li>
                                    <li> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentyRf} /></span>

                                    </li>
                                    <li> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentleu} /></span>

                                    </li>
                                    <li> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentxsJ} /></span>

                                    </li>
                                </ul>
                            </div>
                            <div class="mt-12 md:mt-0">
                                 <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase"><RichText.Content value={attributes.contentYTd} /></h3>

                                <ul role="list" class="mt-4 space-y-4">
                                    <li> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentXqF} /></span>

                                    </li>
                                    <li> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentySt} /></span>

                                    </li>
                                    <li> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentVXo} /></span>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-12 border-t border-gray-200 pt-8">
                    <p class="text-base text-gray-400 xl:text-center">
                        <RichText.Content value={attributes.contentvdw} /></p>
                </div>
            </div>
        </footer>
    </div>
</div>
            );
            },
        });
        