
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-templates', {
            title: 'with templates',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentRHA": {
    "type": "string",
    "default": "Create your first project"
  },
  "contentxYI": {
    "type": "string",
    "default": "Get started by selecting a template or start from an empty project."
  },
  "contentpKi": {
    "type": "string",
    "default": "\n              Marketing Campaign\n            "
  },
  "contentetq": {
    "type": "string",
    "default": "I think the kids call these memes these days."
  },
  "contentNxS": {
    "type": "string",
    "default": "\n              Engineering Project\n            "
  },
  "contenthdj": {
    "type": "string",
    "default": "Something really expensive that will ultimately get cancelled."
  },
  "contentRkI": {
    "type": "string",
    "default": "\n              Event\n            "
  },
  "contentvqm": {
    "type": "string",
    "default": "Like a conference all about you that no one will care about."
  },
  "contentlTj": {
    "type": "string",
    "default": "Or start from an empty project"
  },
  "contentWkd": {
    "type": "string",
    "default": " &rarr;"
  },
  "svgarv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z\"/>"
  },
  "svgHyO": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgYQU": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgXaM": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgzgU": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgUgF": {
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
            value={ attributes.svgarv }
            onChange={ ( value ) => {
              setAttributes({ svgarv: value });
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
            value={ attributes.svgHyO }
            onChange={ ( value ) => {
              setAttributes({ svgHyO: value });
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
            value={ attributes.svgYQU }
            onChange={ ( value ) => {
              setAttributes({ svgYQU: value });
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
            value={ attributes.svgXaM }
            onChange={ ( value ) => {
              setAttributes({ svgXaM: value });
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
            value={ attributes.svgzgU }
            onChange={ ( value ) => {
              setAttributes({ svgzgU: value });
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
            value={ attributes.svgUgF }
            onChange={ ( value ) => {
              setAttributes({ svgUgF: value });
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
        <div className="max-w-lg mx-auto">
             <h2 className="text-lg font-medium text-gray-900"><RichText tagName="span" value={attributes.contentRHA} default="Create your first project" onChange={ (newtext) =>  {
        setAttributes({ contentRHA: newtext });
      }}
    /></h2>

            <p className="mt-1 text-sm text-gray-500">
                <RichText tagName="span" value={attributes.contentxYI} default="Get started by selecting a template or start from an empty project." onChange={ (newtext) => { setAttributes({ contentxYI: newtext }); }} /></p>
            <ul role="list" className="mt-6 border-t border-b border-gray-200 divide-y divide-gray-200">
                <li>
                    <div className="relative group py-4 flex items-start space-x-3">
                        <div className="flex-shrink-0"> <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-pink-500">
            
            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgarv }}
        >
      </svg>
      
          </span>

                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="text-sm font-medium text-gray-900"> <span>
              <span className="absolute inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentpKi} default="Marketing Campaign" onChange={ (newtext) =>  {
        setAttributes({ contentpKi: newtext });
      }}
    /></span>

                            </div>
                            <p className="text-sm text-gray-500">
                                <RichText tagName="span" value={attributes.contentetq} default="I think the kids call these memes these days." onChange={ (newtext) => { setAttributes({ contentetq: newtext }); }} /></p>
                        </div>
                        <div className="flex-shrink-0 self-center">
                            
      <svg
         className="h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHyO }}
        >
      </svg>
      
                        </div>
                    </div>
                </li>
                <li>
                    <div className="relative group py-4 flex items-start space-x-3">
                        <div className="flex-shrink-0"> <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-purple-500">
            
            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYQU }}
        >
      </svg>
      
          </span>

                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="text-sm font-medium text-gray-900"> <span>
              <span className="absolute inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentNxS} default="Engineering Project" onChange={ (newtext) =>  {
        setAttributes({ contentNxS: newtext });
      }}
    /></span>

                            </div>
                            <p className="text-sm text-gray-500">
                                <RichText tagName="span" value={attributes.contenthdj} default="Something really expensive that will ultimately get cancelled." onChange={ (newtext) => { setAttributes({ contenthdj: newtext }); }} /></p>
                        </div>
                        <div className="flex-shrink-0 self-center">
                            
      <svg
         className="h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgXaM }}
        >
      </svg>
      
                        </div>
                    </div>
                </li>
                <li>
                    <div className="relative group py-4 flex items-start space-x-3">
                        <div className="flex-shrink-0"> <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-500">
            
            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzgU }}
        >
      </svg>
      
          </span>

                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="text-sm font-medium text-gray-900"> <span>
              <span className="absolute inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentRkI} default="Event" onChange={ (newtext) =>  {
        setAttributes({ contentRkI: newtext });
      }}
    /></span>

                            </div>
                            <p className="text-sm text-gray-500">
                                <RichText tagName="span" value={attributes.contentvqm} default="Like a conference all about you that no one will care about." onChange={ (newtext) => { setAttributes({ contentvqm: newtext }); }} /></p>
                        </div>
                        <div className="flex-shrink-0 self-center">
                            
      <svg
         className="h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUgF }}
        >
      </svg>
      
                        </div>
                    </div>
                </li>
            </ul>
            <div className="mt-6 flex"> <span className="text-sm font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentlTj} default="Or start from an empty project" onChange={ (newtext) =>  {
        setAttributes({ contentlTj: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentWkd} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentWkd: newtext });
      }}
    /></span></span>
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
        <div class="max-w-lg mx-auto">
             <h2 class="text-lg font-medium text-gray-900"><RichText.Content value={attributes.contentRHA} /></h2>

            <p class="mt-1 text-sm text-gray-500">
                <RichText.Content value={attributes.contentxYI} /></p>
            <ul role="list" class="mt-6 border-t border-b border-gray-200 divide-y divide-gray-200">
                <li>
                    <div class="relative group py-4 flex items-start space-x-3">
                        <div class="flex-shrink-0"> <span class="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-pink-500">
            
            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgarv }}
        >
      </svg>
      
          </span>

                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="text-sm font-medium text-gray-900"> <span>
              <span class="absolute inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentpKi} /></span>

                            </div>
                            <p class="text-sm text-gray-500">
                                <RichText.Content value={attributes.contentetq} /></p>
                        </div>
                        <div class="flex-shrink-0 self-center">
                            
      <svg
         class="h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHyO }}
        >
      </svg>
      
                        </div>
                    </div>
                </li>
                <li>
                    <div class="relative group py-4 flex items-start space-x-3">
                        <div class="flex-shrink-0"> <span class="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-purple-500">
            
            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYQU }}
        >
      </svg>
      
          </span>

                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="text-sm font-medium text-gray-900"> <span>
              <span class="absolute inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentNxS} /></span>

                            </div>
                            <p class="text-sm text-gray-500">
                                <RichText.Content value={attributes.contenthdj} /></p>
                        </div>
                        <div class="flex-shrink-0 self-center">
                            
      <svg
         class="h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgXaM }}
        >
      </svg>
      
                        </div>
                    </div>
                </li>
                <li>
                    <div class="relative group py-4 flex items-start space-x-3">
                        <div class="flex-shrink-0"> <span class="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-500">
            
            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzgU }}
        >
      </svg>
      
          </span>

                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="text-sm font-medium text-gray-900"> <span>
              <span class="absolute inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentRkI} /></span>

                            </div>
                            <p class="text-sm text-gray-500">
                                <RichText.Content value={attributes.contentvqm} /></p>
                        </div>
                        <div class="flex-shrink-0 self-center">
                            
      <svg
         class="h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUgF }}
        >
      </svg>
      
                        </div>
                    </div>
                </li>
            </ul>
            <div class="mt-6 flex"> <span class="text-sm font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentlTj} /><span aria-hidden="true"><RichText.Content value={attributes.contentWkd} /></span></span>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        