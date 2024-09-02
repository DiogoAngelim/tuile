
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/circular-avatars-with-placeholder-icon', {
            title: 'circular avatars with placeholder icon',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "svgxzx": {
    "type": "string",
    "default": "<path d=\"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgoxn": {
    "type": "string",
    "default": "<path d=\"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgHTb": {
    "type": "string",
    "default": "<path d=\"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgaSx": {
    "type": "string",
    "default": "<path d=\"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgrYZ": {
    "type": "string",
    "default": "<path d=\"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z\"/>"
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
            value={ attributes.svgxzx }
            onChange={ ( value ) => {
              setAttributes({ svgxzx: value });
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
            value={ attributes.svgoxn }
            onChange={ ( value ) => {
              setAttributes({ svgoxn: value });
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
            value={ attributes.svgHTb }
            onChange={ ( value ) => {
              setAttributes({ svgHTb: value });
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
            value={ attributes.svgaSx }
            onChange={ ( value ) => {
              setAttributes({ svgaSx: value });
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
            value={ attributes.svgrYZ }
            onChange={ ( value ) => {
              setAttributes({ svgrYZ: value });
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
<span className="inline-block h-6 w-6 rounded-full overflow-hidden bg-gray-100">
  
      <svg
         className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24"
          dangerouslySetInnerHTML={ { __html: attributes.svgxzx }}
        >
      </svg>
      
</span>

<span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
  
      <svg
         className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24"
          dangerouslySetInnerHTML={ { __html: attributes.svgoxn }}
        >
      </svg>
      
</span>

<span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
  
      <svg
         className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24"
          dangerouslySetInnerHTML={ { __html: attributes.svgHTb }}
        >
      </svg>
      
</span>

<span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
  
      <svg
         className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24"
          dangerouslySetInnerHTML={ { __html: attributes.svgaSx }}
        >
      </svg>
      
</span>

<span className="inline-block h-14 w-14 rounded-full overflow-hidden bg-gray-100">
  
      <svg
         className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24"
          dangerouslySetInnerHTML={ { __html: attributes.svgrYZ }}
        >
      </svg>
      
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
<span class="inline-block h-6 w-6 rounded-full overflow-hidden bg-gray-100">
  
      <svg
         class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24"
          dangerouslySetInnerHTML={ { __html: attributes.svgxzx }}
        >
      </svg>
      
</span>

<span class="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
  
      <svg
         class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24"
          dangerouslySetInnerHTML={ { __html: attributes.svgoxn }}
        >
      </svg>
      
</span>

<span class="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
  
      <svg
         class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24"
          dangerouslySetInnerHTML={ { __html: attributes.svgHTb }}
        >
      </svg>
      
</span>

<span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
  
      <svg
         class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24"
          dangerouslySetInnerHTML={ { __html: attributes.svgaSx }}
        >
      </svg>
      
</span>

<span class="inline-block h-14 w-14 rounded-full overflow-hidden bg-gray-100">
  
      <svg
         class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24"
          dangerouslySetInnerHTML={ { __html: attributes.svgrYZ }}
        >
      </svg>
      
</span>

    </div>
</div>
            );
            },
        });
        