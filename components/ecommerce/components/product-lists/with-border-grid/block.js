
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-border-grid', {
            title: 'with border grid',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contenthdk": {
    "type": "string",
    "default": "Products"
  },
  "contentvFH": {
    "type": "string",
    "default": "\n              Organize Basic Set (Walnut)\n            "
  },
  "contentTdI": {
    "type": "string",
    "default": "5 out of 5 stars"
  },
  "contentCBO": {
    "type": "string",
    "default": "38 reviews"
  },
  "contentmgJ": {
    "type": "string",
    "default": "$149"
  },
  "contentLGS": {
    "type": "string",
    "default": "\n              Organize Pen Holder\n            "
  },
  "contentaiB": {
    "type": "string",
    "default": "5 out of 5 stars"
  },
  "contentQqO": {
    "type": "string",
    "default": "18 reviews"
  },
  "contentMdh": {
    "type": "string",
    "default": "$15"
  },
  "contentsLX": {
    "type": "string",
    "default": "\n              Organize Sticky Note Holder\n            "
  },
  "contentkpZ": {
    "type": "string",
    "default": "5 out of 5 stars"
  },
  "contentxxz": {
    "type": "string",
    "default": "14 reviews"
  },
  "contentqtt": {
    "type": "string",
    "default": "$15"
  },
  "contentZPo": {
    "type": "string",
    "default": "\n              Organize Phone Holder\n            "
  },
  "contenteQC": {
    "type": "string",
    "default": "4 out of 5 stars"
  },
  "contentfBE": {
    "type": "string",
    "default": "21 reviews"
  },
  "contentJdD": {
    "type": "string",
    "default": "$15"
  },
  "imageurlMyw": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/category-page-05-image-card-01.jpg'
  },
  "imagealtOsD": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "TODO"
  },
  "imageurlxIA": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/category-page-05-image-card-02.jpg'
  },
  "imagealtHvA": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "TODO"
  },
  "imageurlfbg": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/category-page-05-image-card-03.jpg'
  },
  "imagealtJRH": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "TODO"
  },
  "imageurlKrc": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/category-page-05-image-card-04.jpg'
  },
  "imagealtbzp": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "TODO"
  },
  "svgqFt": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgTnn": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgmuW": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svggHI": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgQtg": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svghbJ": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgCwy": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgRbA": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svggJd": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgAVN": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgkyV": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgSdh": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svghzl": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgSxo": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgByo": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgsiX": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgeFc": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgLVL": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgfpq": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgbDV": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
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
            value={ attributes.svgqFt }
            onChange={ ( value ) => {
              setAttributes({ svgqFt: value });
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
            value={ attributes.svgTnn }
            onChange={ ( value ) => {
              setAttributes({ svgTnn: value });
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
            value={ attributes.svgmuW }
            onChange={ ( value ) => {
              setAttributes({ svgmuW: value });
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
            value={ attributes.svggHI }
            onChange={ ( value ) => {
              setAttributes({ svggHI: value });
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
            value={ attributes.svgQtg }
            onChange={ ( value ) => {
              setAttributes({ svgQtg: value });
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
            value={ attributes.svghbJ }
            onChange={ ( value ) => {
              setAttributes({ svghbJ: value });
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
            value={ attributes.svgCwy }
            onChange={ ( value ) => {
              setAttributes({ svgCwy: value });
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
            value={ attributes.svgRbA }
            onChange={ ( value ) => {
              setAttributes({ svgRbA: value });
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
            value={ attributes.svggJd }
            onChange={ ( value ) => {
              setAttributes({ svggJd: value });
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
            value={ attributes.svgAVN }
            onChange={ ( value ) => {
              setAttributes({ svgAVN: value });
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
            value={ attributes.svgkyV }
            onChange={ ( value ) => {
              setAttributes({ svgkyV: value });
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
            value={ attributes.svgSdh }
            onChange={ ( value ) => {
              setAttributes({ svgSdh: value });
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
            value={ attributes.svghzl }
            onChange={ ( value ) => {
              setAttributes({ svghzl: value });
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
            value={ attributes.svgSxo }
            onChange={ ( value ) => {
              setAttributes({ svgSxo: value });
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
            value={ attributes.svgByo }
            onChange={ ( value ) => {
              setAttributes({ svgByo: value });
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
            value={ attributes.svgsiX }
            onChange={ ( value ) => {
              setAttributes({ svgsiX: value });
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
            value={ attributes.svgeFc }
            onChange={ ( value ) => {
              setAttributes({ svgeFc: value });
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
            value={ attributes.svgLVL }
            onChange={ ( value ) => {
              setAttributes({ svgLVL: value });
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
            value={ attributes.svgfpq }
            onChange={ ( value ) => {
              setAttributes({ svgfpq: value });
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
            value={ attributes.svgbDV }
            onChange={ ( value ) => {
              setAttributes({ svgbDV: value });
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
        <div className="bg-white">
            <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
                 <h2 className="sr-only"><RichText tagName="span" value={attributes.contenthdk} default="Products" onChange={ (newtext) =>  {
        setAttributes({ contenthdk: newtext });
      }}
    /></h2>

                <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                    <div className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
                        <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlMyw: media.url,
            imagealtOsD: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlMyw } 
            alt={ attributes.imagealtOsD } 
            onClick={ open } 
            className="w-full h-full object-center object-cover"
          /> 
        )} 
      />
                        </div>
                        <div className="pt-10 pb-4 text-center">
                             <h3 className="text-sm font-medium text-gray-900">
            <span>
              <span aria-hidden="true" className="absolute inset-0"/><RichText tagName="span" value={attributes.contentvFH} default="Organize Basic Set (Walnut)" onChange={ (newtext) =>  {
        setAttributes({ contentvFH: newtext });
      }}
    /></span>
          </h3>

                            <div className="mt-3 flex flex-col items-center">
                                <p className="sr-only">
                                    <RichText tagName="span" value={attributes.contentTdI} default="5 out of 5 stars" onChange={ (newtext) => { setAttributes({ contentTdI: newtext }); }} /></p>
                                <div className="flex items-center">
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqFt }}
        >
      </svg>
      
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTnn }}
        >
      </svg>
      
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmuW }}
        >
      </svg>
      
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggHI }}
        >
      </svg>
      
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQtg }}
        >
      </svg>
      
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                    <RichText tagName="span" value={attributes.contentCBO} default="38 reviews" onChange={ (newtext) => { setAttributes({ contentCBO: newtext }); }} /></p>
                            </div>
                            <p className="mt-4 text-base font-medium text-gray-900">
                                <RichText tagName="span" value={attributes.contentmgJ} default="$149" onChange={ (newtext) => { setAttributes({ contentmgJ: newtext }); }} /></p>
                        </div>
                    </div>
                    <div className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
                        <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlxIA: media.url,
            imagealtHvA: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlxIA } 
            alt={ attributes.imagealtHvA } 
            onClick={ open } 
            className="w-full h-full object-center object-cover"
          /> 
        )} 
      />
                        </div>
                        <div className="pt-10 pb-4 text-center">
                             <h3 className="text-sm font-medium text-gray-900">
            <span>
              <span aria-hidden="true" className="absolute inset-0"/><RichText tagName="span" value={attributes.contentLGS} default="Organize Pen Holder" onChange={ (newtext) =>  {
        setAttributes({ contentLGS: newtext });
      }}
    /></span>
          </h3>

                            <div className="mt-3 flex flex-col items-center">
                                <p className="sr-only">
                                    <RichText tagName="span" value={attributes.contentaiB} default="5 out of 5 stars" onChange={ (newtext) => { setAttributes({ contentaiB: newtext }); }} /></p>
                                <div className="flex items-center">
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghbJ }}
        >
      </svg>
      
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCwy }}
        >
      </svg>
      
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRbA }}
        >
      </svg>
      
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggJd }}
        >
      </svg>
      
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAVN }}
        >
      </svg>
      
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                    <RichText tagName="span" value={attributes.contentQqO} default="18 reviews" onChange={ (newtext) => { setAttributes({ contentQqO: newtext }); }} /></p>
                            </div>
                            <p className="mt-4 text-base font-medium text-gray-900">
                                <RichText tagName="span" value={attributes.contentMdh} default="$15" onChange={ (newtext) => { setAttributes({ contentMdh: newtext }); }} /></p>
                        </div>
                    </div>
                    <div className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
                        <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlfbg: media.url,
            imagealtJRH: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlfbg } 
            alt={ attributes.imagealtJRH } 
            onClick={ open } 
            className="w-full h-full object-center object-cover"
          /> 
        )} 
      />
                        </div>
                        <div className="pt-10 pb-4 text-center">
                             <h3 className="text-sm font-medium text-gray-900">
            <span>
              <span aria-hidden="true" className="absolute inset-0"/><RichText tagName="span" value={attributes.contentsLX} default="Organize Sticky Note Holder" onChange={ (newtext) =>  {
        setAttributes({ contentsLX: newtext });
      }}
    /></span>
          </h3>

                            <div className="mt-3 flex flex-col items-center">
                                <p className="sr-only">
                                    <RichText tagName="span" value={attributes.contentkpZ} default="5 out of 5 stars" onChange={ (newtext) => { setAttributes({ contentkpZ: newtext }); }} /></p>
                                <div className="flex items-center">
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkyV }}
        >
      </svg>
      
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSdh }}
        >
      </svg>
      
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghzl }}
        >
      </svg>
      
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSxo }}
        >
      </svg>
      
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgByo }}
        >
      </svg>
      
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                    <RichText tagName="span" value={attributes.contentxxz} default="14 reviews" onChange={ (newtext) => { setAttributes({ contentxxz: newtext }); }} /></p>
                            </div>
                            <p className="mt-4 text-base font-medium text-gray-900">
                                <RichText tagName="span" value={attributes.contentqtt} default="$15" onChange={ (newtext) => { setAttributes({ contentqtt: newtext }); }} /></p>
                        </div>
                    </div>
                    <div className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
                        <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlKrc: media.url,
            imagealtbzp: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlKrc } 
            alt={ attributes.imagealtbzp } 
            onClick={ open } 
            className="w-full h-full object-center object-cover"
          /> 
        )} 
      />
                        </div>
                        <div className="pt-10 pb-4 text-center">
                             <h3 className="text-sm font-medium text-gray-900">
            <span>
              <span aria-hidden="true" className="absolute inset-0"/><RichText tagName="span" value={attributes.contentZPo} default="Organize Phone Holder" onChange={ (newtext) =>  {
        setAttributes({ contentZPo: newtext });
      }}
    /></span>
          </h3>

                            <div className="mt-3 flex flex-col items-center">
                                <p className="sr-only">
                                    <RichText tagName="span" value={attributes.contenteQC} default="4 out of 5 stars" onChange={ (newtext) => { setAttributes({ contenteQC: newtext }); }} /></p>
                                <div className="flex items-center">
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsiX }}
        >
      </svg>
      
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeFc }}
        >
      </svg>
      
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLVL }}
        >
      </svg>
      
                                    
      <svg
         className="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfpq }}
        >
      </svg>
      
                                    
      <svg
         className="text-gray-200 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbDV }}
        >
      </svg>
      
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                    <RichText tagName="span" value={attributes.contentfBE} default="21 reviews" onChange={ (newtext) => { setAttributes({ contentfBE: newtext }); }} /></p>
                            </div>
                            <p className="mt-4 text-base font-medium text-gray-900">
                                <RichText tagName="span" value={attributes.contentJdD} default="$15" onChange={ (newtext) => { setAttributes({ contentJdD: newtext }); }} /></p>
                        </div>
                    </div>
                </div>
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
        <div class="bg-white">
            <div class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
                 <h2 class="sr-only"><RichText.Content value={attributes.contenthdk} /></h2>

                <div class="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                    <div class="group relative p-4 border-r border-b border-gray-200 sm:p-6">
                        <div class="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                            
      <img
            src={ attributes.imageurlMyw } 
            alt={ attributes.imagealtOsD } 
            class="w-full h-full object-center object-cover"
          />
                        </div>
                        <div class="pt-10 pb-4 text-center">
                             <h3 class="text-sm font-medium text-gray-900">
            <span>
              <span aria-hidden="true" class="absolute inset-0"/><RichText.Content value={attributes.contentvFH} /></span>
          </h3>

                            <div class="mt-3 flex flex-col items-center">
                                <p class="sr-only">
                                    <RichText.Content value={attributes.contentTdI} /></p>
                                <div class="flex items-center">
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqFt }}
        >
      </svg>
      
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTnn }}
        >
      </svg>
      
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmuW }}
        >
      </svg>
      
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggHI }}
        >
      </svg>
      
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQtg }}
        >
      </svg>
      
                                </div>
                                <p class="mt-1 text-sm text-gray-500">
                                    <RichText.Content value={attributes.contentCBO} /></p>
                            </div>
                            <p class="mt-4 text-base font-medium text-gray-900">
                                <RichText.Content value={attributes.contentmgJ} /></p>
                        </div>
                    </div>
                    <div class="group relative p-4 border-r border-b border-gray-200 sm:p-6">
                        <div class="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                            
      <img
            src={ attributes.imageurlxIA } 
            alt={ attributes.imagealtHvA } 
            class="w-full h-full object-center object-cover"
          />
                        </div>
                        <div class="pt-10 pb-4 text-center">
                             <h3 class="text-sm font-medium text-gray-900">
            <span>
              <span aria-hidden="true" class="absolute inset-0"/><RichText.Content value={attributes.contentLGS} /></span>
          </h3>

                            <div class="mt-3 flex flex-col items-center">
                                <p class="sr-only">
                                    <RichText.Content value={attributes.contentaiB} /></p>
                                <div class="flex items-center">
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghbJ }}
        >
      </svg>
      
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCwy }}
        >
      </svg>
      
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRbA }}
        >
      </svg>
      
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggJd }}
        >
      </svg>
      
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAVN }}
        >
      </svg>
      
                                </div>
                                <p class="mt-1 text-sm text-gray-500">
                                    <RichText.Content value={attributes.contentQqO} /></p>
                            </div>
                            <p class="mt-4 text-base font-medium text-gray-900">
                                <RichText.Content value={attributes.contentMdh} /></p>
                        </div>
                    </div>
                    <div class="group relative p-4 border-r border-b border-gray-200 sm:p-6">
                        <div class="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                            
      <img
            src={ attributes.imageurlfbg } 
            alt={ attributes.imagealtJRH } 
            class="w-full h-full object-center object-cover"
          />
                        </div>
                        <div class="pt-10 pb-4 text-center">
                             <h3 class="text-sm font-medium text-gray-900">
            <span>
              <span aria-hidden="true" class="absolute inset-0"/><RichText.Content value={attributes.contentsLX} /></span>
          </h3>

                            <div class="mt-3 flex flex-col items-center">
                                <p class="sr-only">
                                    <RichText.Content value={attributes.contentkpZ} /></p>
                                <div class="flex items-center">
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkyV }}
        >
      </svg>
      
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSdh }}
        >
      </svg>
      
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghzl }}
        >
      </svg>
      
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSxo }}
        >
      </svg>
      
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgByo }}
        >
      </svg>
      
                                </div>
                                <p class="mt-1 text-sm text-gray-500">
                                    <RichText.Content value={attributes.contentxxz} /></p>
                            </div>
                            <p class="mt-4 text-base font-medium text-gray-900">
                                <RichText.Content value={attributes.contentqtt} /></p>
                        </div>
                    </div>
                    <div class="group relative p-4 border-r border-b border-gray-200 sm:p-6">
                        <div class="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                            
      <img
            src={ attributes.imageurlKrc } 
            alt={ attributes.imagealtbzp } 
            class="w-full h-full object-center object-cover"
          />
                        </div>
                        <div class="pt-10 pb-4 text-center">
                             <h3 class="text-sm font-medium text-gray-900">
            <span>
              <span aria-hidden="true" class="absolute inset-0"/><RichText.Content value={attributes.contentZPo} /></span>
          </h3>

                            <div class="mt-3 flex flex-col items-center">
                                <p class="sr-only">
                                    <RichText.Content value={attributes.contenteQC} /></p>
                                <div class="flex items-center">
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsiX }}
        >
      </svg>
      
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeFc }}
        >
      </svg>
      
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLVL }}
        >
      </svg>
      
                                    
      <svg
         class="text-yellow-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfpq }}
        >
      </svg>
      
                                    
      <svg
         class="text-gray-200 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbDV }}
        >
      </svg>
      
                                </div>
                                <p class="mt-1 text-sm text-gray-500">
                                    <RichText.Content value={attributes.contentfBE} /></p>
                            </div>
                            <p class="mt-4 text-base font-medium text-gray-900">
                                <RichText.Content value={attributes.contentJdD} /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        