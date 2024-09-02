
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/circular-avatars', {
            title: 'circular avatars',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "imageurlvpB": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtETr": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurljow": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtwxp": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlNrQ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtyly": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlwtk": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtDxt": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlziE": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtKSq": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  }
},
            edit(props) {
            const { attributes, setAttributes } = props;

            return (
                <div>
                    <InspectorControls>
                    
    <Panel>
      
































































































































































































































































































    </Panel>
                    </InspectorControls>

                    <div>
    <div>
        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlvpB: media.url,
            imagealtETr: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlvpB } 
            alt={ attributes.imagealtETr } 
            onClick={ open } 
            className="inline-block h-6 w-6 rounded-full"
          /> 
        )} 
      />
        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurljow: media.url,
            imagealtwxp: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurljow } 
            alt={ attributes.imagealtwxp } 
            onClick={ open } 
            className="inline-block h-8 w-8 rounded-full"
          /> 
        )} 
      />
        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlNrQ: media.url,
            imagealtyly: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlNrQ } 
            alt={ attributes.imagealtyly } 
            onClick={ open } 
            className="inline-block h-10 w-10 rounded-full"
          /> 
        )} 
      />
        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlwtk: media.url,
            imagealtDxt: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlwtk } 
            alt={ attributes.imagealtDxt } 
            onClick={ open } 
            className="inline-block h-12 w-12 rounded-full"
          /> 
        )} 
      />
        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlziE: media.url,
            imagealtKSq: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlziE } 
            alt={ attributes.imagealtKSq } 
            onClick={ open } 
            className="inline-block h-14 w-14 rounded-full"
          /> 
        )} 
      />
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
        
      <img
            src={ attributes.imageurlvpB } 
            alt={ attributes.imagealtETr } 
            class="inline-block h-6 w-6 rounded-full"
          />
        
      <img
            src={ attributes.imageurljow } 
            alt={ attributes.imagealtwxp } 
            class="inline-block h-8 w-8 rounded-full"
          />
        
      <img
            src={ attributes.imageurlNrQ } 
            alt={ attributes.imagealtyly } 
            class="inline-block h-10 w-10 rounded-full"
          />
        
      <img
            src={ attributes.imageurlwtk } 
            alt={ attributes.imagealtDxt } 
            class="inline-block h-12 w-12 rounded-full"
          />
        
      <img
            src={ attributes.imageurlziE } 
            alt={ attributes.imagealtKSq } 
            class="inline-block h-14 w-14 rounded-full"
          />
    </div>
</div>
            );
            },
        });
        