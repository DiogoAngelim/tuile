
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/button-with-trailing-icons', {
            title: 'button with trailing icons',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentzEW": {
    "type": "string",
    "default": "\n  Button text\n  \n  "
  },
  "contentjRR": {
    "type": "string",
    "default": "\n  Button text\n  \n  "
  },
  "contentMis": {
    "type": "string",
    "default": "\n  Button text\n  \n  "
  },
  "contentuic": {
    "type": "string",
    "default": "\n  Button text\n  \n  "
  },
  "svgNRv": {
    "type": "string",
    "default": "<path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"/>\n                    <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"/>"
  },
  "svgErR": {
    "type": "string",
    "default": "<path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"/>\n                    <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"/>"
  },
  "svgoeH": {
    "type": "string",
    "default": "<path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"/>\n                    <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"/>"
  },
  "svglNu": {
    "type": "string",
    "default": "<path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"/>\n                    <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"/>"
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
            value={ attributes.svgNRv }
            onChange={ ( value ) => {
              setAttributes({ svgNRv: value });
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
            value={ attributes.svgErR }
            onChange={ ( value ) => {
              setAttributes({ svgErR: value });
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
            value={ attributes.svgoeH }
            onChange={ ( value ) => {
              setAttributes({ svgoeH: value });
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
            value={ attributes.svglNu }
            onChange={ ( value ) => {
              setAttributes({ svglNu: value });
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
        <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentzEW} default="Button text" onChange={ (newtext) => { setAttributes({ contentzEW: newtext }); }} />
                
      <svg
         className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNRv }}
        >
      </svg>
      
        </button>
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentjRR} default="Button text" onChange={ (newtext) => { setAttributes({ contentjRR: newtext }); }} />
                
      <svg
         className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgErR }}
        >
      </svg>
      
        </button>
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentMis} default="Button text" onChange={ (newtext) => { setAttributes({ contentMis: newtext }); }} />
                
      <svg
         className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoeH }}
        >
      </svg>
      
        </button>
        <button type="button" className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentuic} default="Button text" onChange={ (newtext) => { setAttributes({ contentuic: newtext }); }} />
                
      <svg
         className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglNu }}
        >
      </svg>
      
        </button>
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
        <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentzEW} />
                
      <svg
         class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNRv }}
        >
      </svg>
      
        </button>
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentjRR} />
                
      <svg
         class="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgErR }}
        >
      </svg>
      
        </button>
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentMis} />
                
      <svg
         class="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoeH }}
        >
      </svg>
      
        </button>
        <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentuic} />
                
      <svg
         class="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglNu }}
        >
      </svg>
      
        </button>
    </div>
</div>
            );
            },
        });
        