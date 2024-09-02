
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/rounded-avatars', {
            title: 'rounded avatars',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "imageurlgQy": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtIBI": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlYCc": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtVhn": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlHSw": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtFpr": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlckZ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealthPN": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlILo": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtaef": {
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
            imageurlgQy: media.url,
            imagealtIBI: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlgQy } 
            alt={ attributes.imagealtIBI } 
            onClick={ open } 
            className="inline-block h-6 w-6 rounded-md"
          /> 
        )} 
      />
        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlYCc: media.url,
            imagealtVhn: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlYCc } 
            alt={ attributes.imagealtVhn } 
            onClick={ open } 
            className="inline-block h-8 w-8 rounded-md"
          /> 
        )} 
      />
        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlHSw: media.url,
            imagealtFpr: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlHSw } 
            alt={ attributes.imagealtFpr } 
            onClick={ open } 
            className="inline-block h-10 w-10 rounded-md"
          /> 
        )} 
      />
        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlckZ: media.url,
            imagealthPN: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlckZ } 
            alt={ attributes.imagealthPN } 
            onClick={ open } 
            className="inline-block h-12 w-12 rounded-md"
          /> 
        )} 
      />
        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlILo: media.url,
            imagealtaef: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlILo } 
            alt={ attributes.imagealtaef } 
            onClick={ open } 
            className="inline-block h-14 w-14 rounded-md"
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
            src={ attributes.imageurlgQy } 
            alt={ attributes.imagealtIBI } 
            class="inline-block h-6 w-6 rounded-md"
          />
        
      <img
            src={ attributes.imageurlYCc } 
            alt={ attributes.imagealtVhn } 
            class="inline-block h-8 w-8 rounded-md"
          />
        
      <img
            src={ attributes.imageurlHSw } 
            alt={ attributes.imagealtFpr } 
            class="inline-block h-10 w-10 rounded-md"
          />
        
      <img
            src={ attributes.imageurlckZ } 
            alt={ attributes.imagealthPN } 
            class="inline-block h-12 w-12 rounded-md"
          />
        
      <img
            src={ attributes.imageurlILo } 
            alt={ attributes.imagealtaef } 
            class="inline-block h-14 w-14 rounded-md"
          />
    </div>
</div>
            );
            },
        });
        