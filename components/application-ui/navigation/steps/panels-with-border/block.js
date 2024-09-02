
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/panels-with-border', {
            title: 'panels with border',
            icon: (<img src="data:image/jpeg;base64,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t8M9BWfIP5JxN3SXDpkXM+W+GegrPkH8k8t8M9BWfIP5JxN3SXDpkXM+W+GegrPkH8k8t8M9BWfIP5JxN3SXDpkXM+W+GegrPkH8k8t8M9BWfIP5JxN3SXDpkXM+W+GegrPkH8k8t8M9BWfIP5JxN3SXDpkXM+W+GegrPkH8k8t8M9BWfIP5JxN3SXDpkXM+W+GegrPkH8k8t8M9BWfIP5JxN3SXDpkXM+W+GegrPkH8k8t8M9BWfIP5JxN3SXDpkXM+W+GegrPkH8k8t8M9BWfIP5JxN3SXDpkXM+W+GegrPkH8k8t8M9BWfIP5JxN3SXDplA/yyfBc55b4Z6Cs+QfyW4wqvixOnergExjN7MxszPy5djus56NmuLyii3uREXFRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFMn8Ze51SmT+Mvc6CkREBERAREQEREBERAREQEREHiznrLdM56y3RFQznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAzk3Qi3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RBEotNG8czNIBdRPmz/BebxZh3qFL9EfsiL29l+GWZPFmHeoUv0R+yeLMO9Qpfoj9kRelDxZh3qFL9EfsnizDvUKX6I/ZEQPFmHeoUv0R+yeLMO9Qpfoj9kRA8WYd6hS/RH7J4sw71Cl+iP2REDxZh3qFL9EfsnizDvUKX6I/ZEQPFmHeoUv0R+yeLMO9Qpfoj9kRA8WYd6hS/RH7J4sw71Cl+iP2REDxZh3qFL9EfsnizDvUKX6I/ZEQPFmHeoUv0R+yeLMO9Qpfoj9kRA8WYd6hS/RH7J4sw71Cl+iP2REDxZh3qFL9EfsnizDvUKX6I/ZEQPFmHeoUv0R+yeLMO9Qpfoj9kRA8WYd6hS/RH7J4sw71Cl+iP2REDxZh3qFL9EfsnizDvUKX6I/ZEQPFmHeoUv0R+yeLMO9Qpfoj9kRA8WYd6hS/RH7J4sw71Cl+iP2REDxZh3qFL9EfsnizDvUKX6I/ZEQPFmHeoUv0R+yeLMO9Qpfoj9kRA8WYd6hS/RH7J4sw71Cl+iP2REDxZh3qFL9EfsnizDvUKX6I/ZEQPFmHeoUv0R+yeLMO9Qpfoj9kRA8WYd6hS/RH7J4sw71Cl+iP2REDxZh3qFL9EfsnizDvUKX6I/ZEQPFmHeoUv0R+yeLMO9Qpfoj9kRA8WYd6hS/RH7L0QRhTx8OnAYgb+0GytsyIvP2n4FhkznrLdM56y3RF4WjOest0znrLdEQM56y3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM5P1It0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM56y3REDOest0znrLdEQM56y3TOest0RAznrLdM56y3REH//Z" />),
            category: 'common',
            attributes: {
  "contentyAe": {
    "type": "string",
    "default": "Job Details"
  },
  "contentPnz": {
    "type": "string",
    "default": "Vitae sed mi luctus laoreet."
  },
  "contentWnE": {
    "type": "string",
    "default": "02"
  },
  "contentUJW": {
    "type": "string",
    "default": "Application form"
  },
  "contentSet": {
    "type": "string",
    "default": "Cursus semper viverra."
  },
  "contentrNe": {
    "type": "string",
    "default": "03"
  },
  "contentRKl": {
    "type": "string",
    "default": "Preview"
  },
  "contentzvd": {
    "type": "string",
    "default": "Penatibus eu quis ante."
  },
  "svgvqN": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgwyO": {
    "type": "string",
    "default": "<path d=\"M0.5 0V31L10.5 41L0.5 51V82\" stroke=\"currentcolor\" vector-effect=\"non-scaling-stroke\"/>"
  },
  "svgyBz": {
    "type": "string",
    "default": "<path d=\"M0.5 0V31L10.5 41L0.5 51V82\" stroke=\"currentcolor\" vector-effect=\"non-scaling-stroke\"/>"
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
            value={ attributes.svgvqN }
            onChange={ ( value ) => {
              setAttributes({ svgvqN: value });
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
            value={ attributes.svgwyO }
            onChange={ ( value ) => {
              setAttributes({ svgwyO: value });
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
            value={ attributes.svgyBz }
            onChange={ ( value ) => {
              setAttributes({ svgyBz: value });
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
        <div className="lg:border-t lg:border-b lg:border-gray-200">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
                <ol role="list" className="rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none">
                    <li className="relative overflow-hidden lg:flex-1">
                        <div className="border border-gray-200 overflow-hidden border-b-0 rounded-t-md lg:border-0"> <span className="group">
            <span className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" aria-hidden="true"/>

                            <span className="px-6 py-5 flex items-start text-sm font-medium"> <span className="flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full">
                  
                  
      <svg
         className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvqN }}
        >
      </svg>
      
                </span>
</span> <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                <span className="text-xs font-semibold tracking-wide uppercase"><RichText tagName="span" value={attributes.contentyAe} default="Job Details" onChange={ (newtext) =>  {
        setAttributes({ contentyAe: newtext });
      }}
    /></span>
 <span className="text-sm font-medium text-gray-500"><RichText tagName="span" value={attributes.contentPnz} default="Vitae sed mi luctus laoreet." onChange={ (newtext) =>  {
        setAttributes({ contentPnz: newtext });
      }}
    /></span>
</span>
                                </span>
                                </span>
                        </div>
                    </li>
                    <li className="relative overflow-hidden lg:flex-1">
                        <div className="border border-gray-200 overflow-hidden lg:border-0"> <span aria-current="step">
            <span className="absolute top-0 left-0 w-1 h-full bg-indigo-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" aria-hidden="true"/>

                            <span className="px-6 py-5 flex items-start text-sm font-medium lg:pl-9"> <span className="flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                  <span className="text-indigo-600"><RichText tagName="span" value={attributes.contentWnE} default="02" onChange={ (newtext) =>  {
        setAttributes({ contentWnE: newtext });
      }}
    /></span>
</span>
                                </span> <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                <span className="text-xs font-semibold text-indigo-600 tracking-wide uppercase"><RichText tagName="span" value={attributes.contentUJW} default="Application form" onChange={ (newtext) =>  {
        setAttributes({ contentUJW: newtext });
      }}
    /></span>
 <span className="text-sm font-medium text-gray-500"><RichText tagName="span" value={attributes.contentSet} default="Cursus semper viverra." onChange={ (newtext) =>  {
        setAttributes({ contentSet: newtext });
      }}
    /></span>
</span>
                                </span>
                                </span>
                                <div className="hidden absolute top-0 left-0 w-3 inset-0 lg:block" aria-hidden="true">
                                    
      <svg
         className="h-full w-full text-gray-300" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none"
          dangerouslySetInnerHTML={ { __html: attributes.svgwyO }}
        >
      </svg>
      
                                </div>
                        </div>
                    </li>
                    <li className="relative overflow-hidden lg:flex-1">
                        <div className="border border-gray-200 overflow-hidden border-t-0 rounded-b-md lg:border-0"> <span className="group">
            <span className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" aria-hidden="true"/>

                            <span className="px-6 py-5 flex items-start text-sm font-medium lg:pl-9"> <span className="flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
                  <span className="text-gray-500"><RichText tagName="span" value={attributes.contentrNe} default="03" onChange={ (newtext) =>  {
        setAttributes({ contentrNe: newtext });
      }}
    /></span>
</span>
                                </span> <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                <span className="text-xs font-semibold text-gray-500 tracking-wide uppercase"><RichText tagName="span" value={attributes.contentRKl} default="Preview" onChange={ (newtext) =>  {
        setAttributes({ contentRKl: newtext });
      }}
    /></span>
 <span className="text-sm font-medium text-gray-500"><RichText tagName="span" value={attributes.contentzvd} default="Penatibus eu quis ante." onChange={ (newtext) =>  {
        setAttributes({ contentzvd: newtext });
      }}
    /></span>
</span>
                                </span>
                                </span>
                                <div className="hidden absolute top-0 left-0 w-3 inset-0 lg:block" aria-hidden="true">
                                    
      <svg
         className="h-full w-full text-gray-300" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none"
          dangerouslySetInnerHTML={ { __html: attributes.svgyBz }}
        >
      </svg>
      
                                </div>
                        </div>
                    </li>
                </ol>
            </nav>
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
        <div class="lg:border-t lg:border-b lg:border-gray-200">
            <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
                <ol role="list" class="rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none">
                    <li class="relative overflow-hidden lg:flex-1">
                        <div class="border border-gray-200 overflow-hidden border-b-0 rounded-t-md lg:border-0"> <span class="group">
            <span class="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" aria-hidden="true"/>

                            <span class="px-6 py-5 flex items-start text-sm font-medium"> <span class="flex-shrink-0">
                <span class="w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full">
                  
                  
      <svg
         class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvqN }}
        >
      </svg>
      
                </span>
</span> <span class="mt-0.5 ml-4 min-w-0 flex flex-col">
                <span class="text-xs font-semibold tracking-wide uppercase"><RichText.Content value={attributes.contentyAe} /></span>
 <span class="text-sm font-medium text-gray-500"><RichText.Content value={attributes.contentPnz} /></span>
</span>
                                </span>
                                </span>
                        </div>
                    </li>
                    <li class="relative overflow-hidden lg:flex-1">
                        <div class="border border-gray-200 overflow-hidden lg:border-0"> <span aria-current="step">
            <span class="absolute top-0 left-0 w-1 h-full bg-indigo-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" aria-hidden="true"/>

                            <span class="px-6 py-5 flex items-start text-sm font-medium lg:pl-9"> <span class="flex-shrink-0">
                <span class="w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                  <span class="text-indigo-600"><RichText.Content value={attributes.contentWnE} /></span>
</span>
                                </span> <span class="mt-0.5 ml-4 min-w-0 flex flex-col">
                <span class="text-xs font-semibold text-indigo-600 tracking-wide uppercase"><RichText.Content value={attributes.contentUJW} /></span>
 <span class="text-sm font-medium text-gray-500"><RichText.Content value={attributes.contentSet} /></span>
</span>
                                </span>
                                </span>
                                <div class="hidden absolute top-0 left-0 w-3 inset-0 lg:block" aria-hidden="true">
                                    
      <svg
         class="h-full w-full text-gray-300" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none"
          dangerouslySetInnerHTML={ { __html: attributes.svgwyO }}
        >
      </svg>
      
                                </div>
                        </div>
                    </li>
                    <li class="relative overflow-hidden lg:flex-1">
                        <div class="border border-gray-200 overflow-hidden border-t-0 rounded-b-md lg:border-0"> <span class="group">
            <span class="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" aria-hidden="true"/>

                            <span class="px-6 py-5 flex items-start text-sm font-medium lg:pl-9"> <span class="flex-shrink-0">
                <span class="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
                  <span class="text-gray-500"><RichText.Content value={attributes.contentrNe} /></span>
</span>
                                </span> <span class="mt-0.5 ml-4 min-w-0 flex flex-col">
                <span class="text-xs font-semibold text-gray-500 tracking-wide uppercase"><RichText.Content value={attributes.contentRKl} /></span>
 <span class="text-sm font-medium text-gray-500"><RichText.Content value={attributes.contentzvd} /></span>
</span>
                                </span>
                                </span>
                                <div class="hidden absolute top-0 left-0 w-3 inset-0 lg:block" aria-hidden="true">
                                    
      <svg
         class="h-full w-full text-gray-300" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none"
          dangerouslySetInnerHTML={ { __html: attributes.svgyBz }}
        >
      </svg>
      
                                </div>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
</div>
            );
            },
        });
        