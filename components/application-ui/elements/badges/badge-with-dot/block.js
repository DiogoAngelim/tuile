
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/badge-with-dot', {
            title: 'badge with dot',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentHVR": {
    "type": "string",
    "default": "\n  Small\n"
  },
  "contentvQX": {
    "type": "string",
    "default": "\n  Large\n"
  },
  "svgqkk": {
    "type": "string",
    "default": "<circle cx=\"4\" cy=\"4\" r=\"3\"/>"
  },
  "svgTDI": {
    "type": "string",
    "default": "<circle cx=\"4\" cy=\"4\" r=\"3\"/>"
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
            value={ attributes.svgqkk }
            onChange={ ( value ) => {
              setAttributes({ svgqkk: value });
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
            value={ attributes.svgTDI }
            onChange={ ( value ) => {
              setAttributes({ svgTDI: value });
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
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
  
      <svg
         className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8"
          dangerouslySetInnerHTML={ { __html: attributes.svgqkk }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentHVR} default="Small" onChange={ (newtext) =>  {
        setAttributes({ contentHVR: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
  
      <svg
         className="-ml-1 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8"
          dangerouslySetInnerHTML={ { __html: attributes.svgTDI }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentvQX} default="Large" onChange={ (newtext) =>  {
        setAttributes({ contentvQX: newtext });
      }}
    /></span>

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
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
  
      <svg
         class="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8"
          dangerouslySetInnerHTML={ { __html: attributes.svgqkk }}
        >
      </svg>
      <RichText.Content value={attributes.contentHVR} /></span>

<span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
  
      <svg
         class="-ml-1 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8"
          dangerouslySetInnerHTML={ { __html: attributes.svgTDI }}
        >
      </svg>
      <RichText.Content value={attributes.contentvQX} /></span>

    </div>
</div>
            );
            },
        });
        