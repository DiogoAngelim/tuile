
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-stat', {
            title: 'with stat',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentfbz": {
    "type": "string",
    "default": "\n    Bookmark\n  "
  },
  "contentiCY": {
    "type": "string",
    "default": "12k"
  },
  "svgLHr": {
    "type": "string",
    "default": "<path d=\"M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z\"/>"
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
            value={ attributes.svgLHr }
            onChange={ ( value ) => {
              setAttributes({ svgLHr: value });
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
<span className="relative z-0 inline-flex shadow-sm rounded-md">
  <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
    
    
      <svg
         className="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLHr }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentfbz} default="Bookmark" onChange={ (newtext) =>  {
        setAttributes({ contentfbz: newtext });
      }}
    /></button>
  <button type="button" className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"><RichText tagName="span" value={attributes.contentiCY} default="12k" onChange={ (newtext) =>  {
        setAttributes({ contentiCY: newtext });
      }}
    /></button>
</span>

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
<span class="relative z-0 inline-flex shadow-sm rounded-md">
  <button type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
    
    
      <svg
         class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLHr }}
        >
      </svg>
      <RichText.Content value={attributes.contentfbz} /></button>
  <button type="button" class="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"><RichText.Content value={attributes.contentiCY} /></button>
</span>

    </div>
</div>
            );
            },
        });
        