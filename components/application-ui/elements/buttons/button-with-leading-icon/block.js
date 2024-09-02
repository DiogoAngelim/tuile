
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/button-with-leading-icon', {
            title: 'button with leading icon',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentPgt": {
    "type": "string",
    "default": "\n  Button text\n"
  },
  "contentXzM": {
    "type": "string",
    "default": "\n  Button text\n"
  },
  "contentGUF": {
    "type": "string",
    "default": "\n  Button text\n"
  },
  "contentVlX": {
    "type": "string",
    "default": "\n  Button text\n"
  },
  "svgyxr": {
    "type": "string",
    "default": "<path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"/>\n                <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"/>"
  },
  "svgUCr": {
    "type": "string",
    "default": "<path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"/>\n                <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"/>"
  },
  "svgfbO": {
    "type": "string",
    "default": "<path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"/>\n                <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"/>"
  },
  "svggdT": {
    "type": "string",
    "default": "<path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"/>\n                <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"/>"
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
            value={ attributes.svgyxr }
            onChange={ ( value ) => {
              setAttributes({ svgyxr: value });
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
            value={ attributes.svgUCr }
            onChange={ ( value ) => {
              setAttributes({ svgUCr: value });
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
            value={ attributes.svgfbO }
            onChange={ ( value ) => {
              setAttributes({ svgfbO: value });
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
            value={ attributes.svggdT }
            onChange={ ( value ) => {
              setAttributes({ svggdT: value });
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
            
      <svg
         className="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyxr }}
        >
      </svg>
      
            <RichText tagName="span" value={attributes.contentPgt} default="Button text" onChange={ (newtext) => { setAttributes({ contentPgt: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
      <svg
         className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUCr }}
        >
      </svg>
      
            <RichText tagName="span" value={attributes.contentXzM} default="Button text" onChange={ (newtext) => { setAttributes({ contentXzM: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
      <svg
         className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfbO }}
        >
      </svg>
      
            <RichText tagName="span" value={attributes.contentGUF} default="Button text" onChange={ (newtext) => { setAttributes({ contentGUF: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
      <svg
         className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggdT }}
        >
      </svg>
      
            <RichText tagName="span" value={attributes.contentVlX} default="Button text" onChange={ (newtext) => { setAttributes({ contentVlX: newtext }); }} /></button>
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
            
      <svg
         class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyxr }}
        >
      </svg>
      
            <RichText.Content value={attributes.contentPgt} /></button>
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
      <svg
         class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUCr }}
        >
      </svg>
      
            <RichText.Content value={attributes.contentXzM} /></button>
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
      <svg
         class="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfbO }}
        >
      </svg>
      
            <RichText.Content value={attributes.contentGUF} /></button>
        <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
      <svg
         class="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggdT }}
        >
      </svg>
      
            <RichText.Content value={attributes.contentVlX} /></button>
    </div>
</div>
            );
            },
        });
        