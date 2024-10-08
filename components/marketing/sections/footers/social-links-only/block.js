
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl, ToggleControl } = wp.components;


        registerBlockType('wp/social-links-only', {
            title: 'social-links-only',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentvCS": {
    "type": "string",
    "default": "Facebook"
  },
  "contentMrj": {
    "type": "string",
    "default": "Instagram"
  },
  "contentRcg": {
    "type": "string",
    "default": "Twitter"
  },
  "contentEwj": {
    "type": "string",
    "default": "GitHub"
  },
  "contentEdX": {
    "type": "string",
    "default": "Dribbble"
  },
  "contentaQl": {
    "type": "string",
    "default": "&copy; 2020 Workflow, Inc. All rights reserved."
  },
  "svgfKa": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z\" clip-rule=\"evenodd\"/>"
  },
  "svgknL": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z\" clip-rule=\"evenodd\"/>"
  },
  "svgLVJ": {
    "type": "string",
    "default": "<path d=\"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84\"/>"
  },
  "svgPHp": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z\" clip-rule=\"evenodd\"/>"
  },
  "svgcvL": {
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
            value={ attributes.svgfKa }
            onChange={ ( value ) => {
              setAttributes({ svgfKa: value });
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
            value={ attributes.svgknL }
            onChange={ ( value ) => {
              setAttributes({ svgknL: value });
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
            value={ attributes.svgLVJ }
            onChange={ ( value ) => {
              setAttributes({ svgLVJ: value });
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
            value={ attributes.svgPHp }
            onChange={ ( value ) => {
              setAttributes({ svgPHp: value });
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
            value={ attributes.svgcvL }
            onChange={ ( value ) => {
              setAttributes({ svgcvL: value });
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
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2"> <span className="text-gray-400 hover:text-gray-500">
        <span className="sr-only"><RichText tagName="span" value={attributes.contentvCS} default="Facebook" onChange={ (newtext) =>  {
        setAttributes({ contentvCS: newtext });
      }}
    /></span>

                    
      <svg
         className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfKa }}
        >
      </svg>
      
                    </span> <span className="text-gray-400 hover:text-gray-500">
        <span className="sr-only"><RichText tagName="span" value={attributes.contentMrj} default="Instagram" onChange={ (newtext) =>  {
        setAttributes({ contentMrj: newtext });
      }}
    /></span>

                    
      <svg
         className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgknL }}
        >
      </svg>
      
                    </span> <span className="text-gray-400 hover:text-gray-500">
        <span className="sr-only"><RichText tagName="span" value={attributes.contentRcg} default="Twitter" onChange={ (newtext) =>  {
        setAttributes({ contentRcg: newtext });
      }}
    /></span>

                    
      <svg
         className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLVJ }}
        >
      </svg>
      
                    </span> <span className="text-gray-400 hover:text-gray-500">
        <span className="sr-only"><RichText tagName="span" value={attributes.contentEwj} default="GitHub" onChange={ (newtext) =>  {
        setAttributes({ contentEwj: newtext });
      }}
    /></span>

                    
      <svg
         className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPHp }}
        >
      </svg>
      
                    </span> <span className="text-gray-400 hover:text-gray-500">
        <span className="sr-only"><RichText tagName="span" value={attributes.contentEdX} default="Dribbble" onChange={ (newtext) =>  {
        setAttributes({ contentEdX: newtext });
      }}
    /></span>

                    
      <svg
         className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcvL }}
        >
      </svg>
      
                    </span>
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center text-base text-gray-400">
                        <RichText tagName="span" value={attributes.contentaQl} default="&copy; 2020 Workflow, Inc. All rights reserved." onChange={ (newtext) => { setAttributes({ contentaQl: newtext }); }} /></p>
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
        <footer class="bg-white">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div class="flex justify-center space-x-6 md:order-2"> <span class="text-gray-400 hover:text-gray-500">
        <span class="sr-only"><RichText.Content value={attributes.contentvCS} /></span>

                    
      <svg
         class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfKa }}
        >
      </svg>
      
                    </span> <span class="text-gray-400 hover:text-gray-500">
        <span class="sr-only"><RichText.Content value={attributes.contentMrj} /></span>

                    
      <svg
         class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgknL }}
        >
      </svg>
      
                    </span> <span class="text-gray-400 hover:text-gray-500">
        <span class="sr-only"><RichText.Content value={attributes.contentRcg} /></span>

                    
      <svg
         class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLVJ }}
        >
      </svg>
      
                    </span> <span class="text-gray-400 hover:text-gray-500">
        <span class="sr-only"><RichText.Content value={attributes.contentEwj} /></span>

                    
      <svg
         class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPHp }}
        >
      </svg>
      
                    </span> <span class="text-gray-400 hover:text-gray-500">
        <span class="sr-only"><RichText.Content value={attributes.contentEdX} /></span>

                    
      <svg
         class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcvL }}
        >
      </svg>
      
                    </span>
                </div>
                <div class="mt-8 md:mt-0 md:order-1">
                    <p class="text-center text-base text-gray-400">
                        <RichText.Content value={attributes.contentaQl} /></p>
                </div>
            </div>
        </footer>
    </div>
</div>
            );
            },
        });
        