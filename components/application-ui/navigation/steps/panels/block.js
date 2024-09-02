
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/panels', {
            title: 'panels',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contenttDd": {
    "type": "string",
    "default": "Job details"
  },
  "contentbJi": {
    "type": "string",
    "default": "02"
  },
  "contentzeN": {
    "type": "string",
    "default": "Application form"
  },
  "contentAGY": {
    "type": "string",
    "default": "03"
  },
  "contentStp": {
    "type": "string",
    "default": "Preview"
  },
  "svgpDJ": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svggEa": {
    "type": "string",
    "default": "<path d=\"M0 -2L20 40L0 82\" vector-effect=\"non-scaling-stroke\" stroke=\"currentcolor\" stroke-linejoin=\"round\"/>"
  },
  "svgQhM": {
    "type": "string",
    "default": "<path d=\"M0 -2L20 40L0 82\" vector-effect=\"non-scaling-stroke\" stroke=\"currentcolor\" stroke-linejoin=\"round\"/>"
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
            value={ attributes.svgpDJ }
            onChange={ ( value ) => {
              setAttributes({ svgpDJ: value });
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
            value={ attributes.svggEa }
            onChange={ ( value ) => {
              setAttributes({ svggEa: value });
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
            value={ attributes.svgQhM }
            onChange={ ( value ) => {
              setAttributes({ svgQhM: value });
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
        <nav aria-label="Progress">
            <ol role="list" className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
                <li className="relative md:flex-1 md:flex"> <span className="group flex items-center w-full">
        <span className="px-6 py-4 flex items-center text-sm font-medium">
          <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
            
            
      <svg
         className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpDJ }}
        >
      </svg>
      
          </span>
 <span className="ml-4 text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contenttDd} default="Job details" onChange={ (newtext) =>  {
        setAttributes({ contenttDd: newtext });
      }}
    /></span>
</span>
                    </span>
                    <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                        
      <svg
         className="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none"
          dangerouslySetInnerHTML={ { __html: attributes.svggEa }}
        >
      </svg>
      
                    </div>
                </li>
                <li className="relative md:flex-1 md:flex"> <span className="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
          <span className="text-indigo-600"><RichText tagName="span" value={attributes.contentbJi} default="02" onChange={ (newtext) =>  {
        setAttributes({ contentbJi: newtext });
      }}
    /></span>
</span> <span className="ml-4 text-sm font-medium text-indigo-600"><RichText tagName="span" value={attributes.contentzeN} default="Application form" onChange={ (newtext) =>  {
        setAttributes({ contentzeN: newtext });
      }}
    /></span>
</span>
                    <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                        
      <svg
         className="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none"
          dangerouslySetInnerHTML={ { __html: attributes.svgQhM }}
        >
      </svg>
      
                    </div>
                </li>
                <li className="relative md:flex-1 md:flex"> <span className="group flex items-center">
        <span className="px-6 py-4 flex items-center text-sm font-medium">
          <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
            <span className="text-gray-500 group-hover:text-gray-900"><RichText tagName="span" value={attributes.contentAGY} default="03" onChange={ (newtext) =>  {
        setAttributes({ contentAGY: newtext });
      }}
    /></span>
</span> <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900"><RichText tagName="span" value={attributes.contentStp} default="Preview" onChange={ (newtext) =>  {
        setAttributes({ contentStp: newtext });
      }}
    /></span>
</span>
                    </span>
                </li>
            </ol>
        </nav>
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
        <nav aria-label="Progress">
            <ol role="list" class="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
                <li class="relative md:flex-1 md:flex"> <span class="group flex items-center w-full">
        <span class="px-6 py-4 flex items-center text-sm font-medium">
          <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
            
            
      <svg
         class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpDJ }}
        >
      </svg>
      
          </span>
 <span class="ml-4 text-sm font-medium text-gray-900"><RichText.Content value={attributes.contenttDd} /></span>
</span>
                    </span>
                    <div class="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                        
      <svg
         class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none"
          dangerouslySetInnerHTML={ { __html: attributes.svggEa }}
        >
      </svg>
      
                    </div>
                </li>
                <li class="relative md:flex-1 md:flex"> <span class="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
        <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
          <span class="text-indigo-600"><RichText.Content value={attributes.contentbJi} /></span>
</span> <span class="ml-4 text-sm font-medium text-indigo-600"><RichText.Content value={attributes.contentzeN} /></span>
</span>
                    <div class="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                        
      <svg
         class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none"
          dangerouslySetInnerHTML={ { __html: attributes.svgQhM }}
        >
      </svg>
      
                    </div>
                </li>
                <li class="relative md:flex-1 md:flex"> <span class="group flex items-center">
        <span class="px-6 py-4 flex items-center text-sm font-medium">
          <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
            <span class="text-gray-500 group-hover:text-gray-900"><RichText.Content value={attributes.contentAGY} /></span>
</span> <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900"><RichText.Content value={attributes.contentStp} /></span>
</span>
                    </span>
                </li>
            </ol>
        </nav>
    </div>
</div>
            );
            },
        });
        