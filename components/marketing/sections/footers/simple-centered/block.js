
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl, ToggleControl } = wp.components;


        registerBlockType('wp/simple-centered', {
            title: 'simple-centered',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentQAK": {
    "type": "string",
    "default": " About "
  },
  "contentunl": {
    "type": "string",
    "default": " Blog "
  },
  "contentCuT": {
    "type": "string",
    "default": " Jobs "
  },
  "contentoQV": {
    "type": "string",
    "default": " Press "
  },
  "contentyRs": {
    "type": "string",
    "default": " Accessibility "
  },
  "contentGNK": {
    "type": "string",
    "default": " Partners "
  },
  "contentwjP": {
    "type": "string",
    "default": "Facebook"
  },
  "contentqEN": {
    "type": "string",
    "default": "Instagram"
  },
  "contentzZn": {
    "type": "string",
    "default": "Twitter"
  },
  "contentbZt": {
    "type": "string",
    "default": "GitHub"
  },
  "contentEoC": {
    "type": "string",
    "default": "Dribbble"
  },
  "contentigD": {
    "type": "string",
    "default": "&copy; 2020 Workflow, Inc. All rights reserved."
  },
  "svglTR": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z\" clip-rule=\"evenodd\"/>"
  },
  "svgOnR": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z\" clip-rule=\"evenodd\"/>"
  },
  "svgKAv": {
    "type": "string",
    "default": "<path d=\"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84\"/>"
  },
  "svgbev": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z\" clip-rule=\"evenodd\"/>"
  },
  "svgltF": {
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
            value={ attributes.svglTR }
            onChange={ ( value ) => {
              setAttributes({ svglTR: value });
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
            value={ attributes.svgOnR }
            onChange={ ( value ) => {
              setAttributes({ svgOnR: value });
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
            value={ attributes.svgKAv }
            onChange={ ( value ) => {
              setAttributes({ svgKAv: value });
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
            value={ attributes.svgbev }
            onChange={ ( value ) => {
              setAttributes({ svgbev: value });
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
            value={ attributes.svgltF }
            onChange={ ( value ) => {
              setAttributes({ svgltF: value });
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
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <div className="px-5 py-2"> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentQAK} default="About" onChange={ (newtext) =>  {
        setAttributes({ contentQAK: newtext });
      }}
    /></span>

                    </div>
                    <div className="px-5 py-2"> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentunl} default="Blog" onChange={ (newtext) =>  {
        setAttributes({ contentunl: newtext });
      }}
    /></span>

                    </div>
                    <div className="px-5 py-2"> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentCuT} default="Jobs" onChange={ (newtext) =>  {
        setAttributes({ contentCuT: newtext });
      }}
    /></span>

                    </div>
                    <div className="px-5 py-2"> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentoQV} default="Press" onChange={ (newtext) =>  {
        setAttributes({ contentoQV: newtext });
      }}
    /></span>

                    </div>
                    <div className="px-5 py-2"> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentyRs} default="Accessibility" onChange={ (newtext) =>  {
        setAttributes({ contentyRs: newtext });
      }}
    /></span>

                    </div>
                    <div className="px-5 py-2"> <span className="text-base text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentGNK} default="Partners" onChange={ (newtext) =>  {
        setAttributes({ contentGNK: newtext });
      }}
    /></span>

                    </div>
                </nav>
                <div className="mt-8 flex justify-center space-x-6"> <span className="text-gray-400 hover:text-gray-500">
        <span className="sr-only"><RichText tagName="span" value={attributes.contentwjP} default="Facebook" onChange={ (newtext) =>  {
        setAttributes({ contentwjP: newtext });
      }}
    /></span>

                    
      <svg
         className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglTR }}
        >
      </svg>
      
                    </span> <span className="text-gray-400 hover:text-gray-500">
        <span className="sr-only"><RichText tagName="span" value={attributes.contentqEN} default="Instagram" onChange={ (newtext) =>  {
        setAttributes({ contentqEN: newtext });
      }}
    /></span>

                    
      <svg
         className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOnR }}
        >
      </svg>
      
                    </span> <span className="text-gray-400 hover:text-gray-500">
        <span className="sr-only"><RichText tagName="span" value={attributes.contentzZn} default="Twitter" onChange={ (newtext) =>  {
        setAttributes({ contentzZn: newtext });
      }}
    /></span>

                    
      <svg
         className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKAv }}
        >
      </svg>
      
                    </span> <span className="text-gray-400 hover:text-gray-500">
        <span className="sr-only"><RichText tagName="span" value={attributes.contentbZt} default="GitHub" onChange={ (newtext) =>  {
        setAttributes({ contentbZt: newtext });
      }}
    /></span>

                    
      <svg
         className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbev }}
        >
      </svg>
      
                    </span> <span className="text-gray-400 hover:text-gray-500">
        <span className="sr-only"><RichText tagName="span" value={attributes.contentEoC} default="Dribbble" onChange={ (newtext) =>  {
        setAttributes({ contentEoC: newtext });
      }}
    /></span>

                    
      <svg
         className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgltF }}
        >
      </svg>
      
                    </span>
                </div>
                <p className="mt-8 text-center text-base text-gray-400">
                    <RichText tagName="span" value={attributes.contentigD} default="&copy; 2020 Workflow, Inc. All rights reserved." onChange={ (newtext) => { setAttributes({ contentigD: newtext }); }} /></p>
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
        <footer class="bg-white">
            <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <div class="px-5 py-2"> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentQAK} /></span>

                    </div>
                    <div class="px-5 py-2"> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentunl} /></span>

                    </div>
                    <div class="px-5 py-2"> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentCuT} /></span>

                    </div>
                    <div class="px-5 py-2"> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentoQV} /></span>

                    </div>
                    <div class="px-5 py-2"> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentyRs} /></span>

                    </div>
                    <div class="px-5 py-2"> <span class="text-base text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentGNK} /></span>

                    </div>
                </nav>
                <div class="mt-8 flex justify-center space-x-6"> <span class="text-gray-400 hover:text-gray-500">
        <span class="sr-only"><RichText.Content value={attributes.contentwjP} /></span>

                    
      <svg
         class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglTR }}
        >
      </svg>
      
                    </span> <span class="text-gray-400 hover:text-gray-500">
        <span class="sr-only"><RichText.Content value={attributes.contentqEN} /></span>

                    
      <svg
         class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOnR }}
        >
      </svg>
      
                    </span> <span class="text-gray-400 hover:text-gray-500">
        <span class="sr-only"><RichText.Content value={attributes.contentzZn} /></span>

                    
      <svg
         class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKAv }}
        >
      </svg>
      
                    </span> <span class="text-gray-400 hover:text-gray-500">
        <span class="sr-only"><RichText.Content value={attributes.contentbZt} /></span>

                    
      <svg
         class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbev }}
        >
      </svg>
      
                    </span> <span class="text-gray-400 hover:text-gray-500">
        <span class="sr-only"><RichText.Content value={attributes.contentEoC} /></span>

                    
      <svg
         class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgltF }}
        >
      </svg>
      
                    </span>
                </div>
                <p class="mt-8 text-center text-base text-gray-400">
                    <RichText.Content value={attributes.contentigD} /></p>
            </div>
        </footer>
    </div>
</div>
            );
            },
        });
        