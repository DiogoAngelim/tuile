
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/circles', {
            title: 'circles',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentoJv": {
    "type": "string",
    "default": "Step 1"
  },
  "contentbdB": {
    "type": "string",
    "default": "Step 2"
  },
  "contentgGL": {
    "type": "string",
    "default": "Step 3"
  },
  "contentyBv": {
    "type": "string",
    "default": "Step 4"
  },
  "contentDox": {
    "type": "string",
    "default": "Step 5"
  },
  "svgvaN": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgBHw": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgvaN }
            onChange={ ( value ) => {
              setAttributes({ svgvaN: value });
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
            value={ attributes.svgBHw }
            onChange={ ( value ) => {
              setAttributes({ svgBHw: value });
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
            <ol role="list" className="flex items-center">
                <li className="relative pr-8 sm:pr-20">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="h-0.5 w-full bg-indigo-600"/>
                    </div> <span className="relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900">
        
        
      <svg
         className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvaN }}
        >
      </svg>
      
        <span className="sr-only"><RichText tagName="span" value={attributes.contentoJv} default="Step 1" onChange={ (newtext) =>  {
        setAttributes({ contentoJv: newtext });
      }}
    /></span>
</span>
                </li>
                <li className="relative pr-8 sm:pr-20">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="h-0.5 w-full bg-indigo-600"/>
                    </div> <span className="relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900">
        
        
      <svg
         className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBHw }}
        >
      </svg>
      
        <span className="sr-only"><RichText tagName="span" value={attributes.contentbdB} default="Step 2" onChange={ (newtext) =>  {
        setAttributes({ contentbdB: newtext });
      }}
    /></span>
</span>
                </li>
                <li className="relative pr-8 sm:pr-20">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="h-0.5 w-full bg-gray-200"/>
                    </div> <span className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full" aria-current="step">
        <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full" aria-hidden="true"/>

                    <span className="sr-only">
                        <RichText tagName="span" value={attributes.contentgGL} default="Step 3" onChange={ (newtext) => { setAttributes({ contentgGL: newtext }); }} /></span>
                            </span>
                </li>
                <li className="relative pr-8 sm:pr-20">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="h-0.5 w-full bg-gray-200"/>
                    </div> <span className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
        <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true"/>

                    <span className="sr-only">
                        <RichText tagName="span" value={attributes.contentyBv} default="Step 4" onChange={ (newtext) => { setAttributes({ contentyBv: newtext }); }} /></span>
                            </span>
                </li>
                <li className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="h-0.5 w-full bg-gray-200"/>
                    </div> <span className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
        <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true"/>

                    <span className="sr-only">
                        <RichText tagName="span" value={attributes.contentDox} default="Step 5" onChange={ (newtext) => { setAttributes({ contentDox: newtext }); }} /></span>
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
            <ol role="list" class="flex items-center">
                <li class="relative pr-8 sm:pr-20">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="h-0.5 w-full bg-indigo-600"/>
                    </div> <span class="relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900">
        
        
      <svg
         class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvaN }}
        >
      </svg>
      
        <span class="sr-only"><RichText.Content value={attributes.contentoJv} /></span>
</span>
                </li>
                <li class="relative pr-8 sm:pr-20">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="h-0.5 w-full bg-indigo-600"/>
                    </div> <span class="relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900">
        
        
      <svg
         class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBHw }}
        >
      </svg>
      
        <span class="sr-only"><RichText.Content value={attributes.contentbdB} /></span>
</span>
                </li>
                <li class="relative pr-8 sm:pr-20">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="h-0.5 w-full bg-gray-200"/>
                    </div> <span class="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full" aria-current="step">
        <span class="h-2.5 w-2.5 bg-indigo-600 rounded-full" aria-hidden="true"/>

                    <span class="sr-only">
                        <RichText.Content value={attributes.contentgGL} /></span>
                            </span>
                </li>
                <li class="relative pr-8 sm:pr-20">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="h-0.5 w-full bg-gray-200"/>
                    </div> <span class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
        <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true"/>

                    <span class="sr-only">
                        <RichText.Content value={attributes.contentyBv} /></span>
                            </span>
                </li>
                <li class="relative">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="h-0.5 w-full bg-gray-200"/>
                    </div> <span class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
        <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true"/>

                    <span class="sr-only">
                        <RichText.Content value={attributes.contentDox} /></span>
                            </span>
                </li>
            </ol>
        </nav>
    </div>
</div>
            );
            },
        });
        