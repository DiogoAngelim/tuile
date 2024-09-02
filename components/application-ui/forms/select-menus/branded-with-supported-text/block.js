
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/branded-with-supported-text', {
            title: 'branded with supported text',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentJrb": {
    "type": "string",
    "default": " Change published status "
  },
  "contenteae": {
    "type": "string",
    "default": "Published"
  },
  "contentrNP": {
    "type": "string",
    "default": "Change published status"
  },
  "contentQQY": {
    "type": "string",
    "default": "Published"
  },
  "contentjjJ": {
    "type": "string",
    "default": "This job posting can be viewed by anyone who has the link."
  },
  "svgjVO": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgejp": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgYst": {
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
            value={ attributes.svgjVO }
            onChange={ ( value ) => {
              setAttributes({ svgjVO: value });
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
            value={ attributes.svgejp }
            onChange={ ( value ) => {
              setAttributes({ svgejp: value });
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
            value={ attributes.svgYst }
            onChange={ ( value ) => {
              setAttributes({ svgYst: value });
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
        <div>
            <label id="listbox-label" className="sr-only">
                <RichText tagName="span" value={attributes.contentJrb} default="Change published status" onChange={ (newtext) => { setAttributes({ contentJrb: newtext }); }} /></label>
            <div className="relative">
                <div className="inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
                    <div className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
                        <div className="relative inline-flex items-center bg-indigo-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjVO }}
        >
      </svg>
      
                            <p className="ml-2.5 text-sm font-medium">
                                <RichText tagName="span" value={attributes.contenteae} default="Published" onChange={ (newtext) => { setAttributes({ contenteae: newtext }); }} /></p>
                        </div>
                        <button type="button" className="relative inline-flex items-center bg-indigo-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label"> <span className="sr-only"><RichText tagName="span" value={attributes.contentrNP} default="Change published status" onChange={ (newtext) =>  {
        setAttributes({ contentrNP: newtext });
      }}
    /></span>

                            
      <svg
         className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgejp }}
        >
      </svg>
      
                        </button>
                    </div>
                </div>
                <ul className="origin-top-right absolute z-10 right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-0">
                    <li className="text-gray-900 cursor-default select-none relative p-4 text-sm" id="listbox-option-0" role="option">
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <p className="font-normal">
                                    <RichText tagName="span" value={attributes.contentQQY} default="Published" onChange={ (newtext) => { setAttributes({ contentQQY: newtext }); }} /></p> <span className="text-indigo-500">
              
              
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYst }}
        >
      </svg>
      
            </span>

                            </div>
                            <p className="text-gray-500 mt-2">
                                <RichText tagName="span" value={attributes.contentjjJ} default="This job posting can be viewed by anyone who has the link." onChange={ (newtext) => { setAttributes({ contentjjJ: newtext }); }} /></p>
                        </div>
                    </li>
                </ul>
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
        <div>
            <label id="listbox-label" class="sr-only">
                <RichText.Content value={attributes.contentJrb} /></label>
            <div class="relative">
                <div class="inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
                    <div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
                        <div class="relative inline-flex items-center bg-indigo-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjVO }}
        >
      </svg>
      
                            <p class="ml-2.5 text-sm font-medium">
                                <RichText.Content value={attributes.contenteae} /></p>
                        </div>
                        <button type="button" class="relative inline-flex items-center bg-indigo-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label"> <span class="sr-only"><RichText.Content value={attributes.contentrNP} /></span>

                            
      <svg
         class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgejp }}
        >
      </svg>
      
                        </button>
                    </div>
                </div>
                <ul class="origin-top-right absolute z-10 right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-0">
                    <li class="text-gray-900 cursor-default select-none relative p-4 text-sm" id="listbox-option-0" role="option">
                        <div class="flex flex-col">
                            <div class="flex justify-between">
                                <p class="font-normal">
                                    <RichText.Content value={attributes.contentQQY} /></p> <span class="text-indigo-500">
              
              
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYst }}
        >
      </svg>
      
            </span>

                            </div>
                            <p class="text-gray-500 mt-2">
                                <RichText.Content value={attributes.contentjjJ} /></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        