
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/rounded-avatars-with-top-notification', {
            title: 'rounded avatars with top notification',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "imageurlEse": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtQCL": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlHsP": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtNiC": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlwQl": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtFsG": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlhuJ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtlgu": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlJYq": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtSHl": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlpJZ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtRxM": {
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
<span className="inline-block relative">
  
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlEse: media.url,
            imagealtQCL: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlEse } 
            alt={ attributes.imagealtQCL } 
            onClick={ open } 
            className="h-6 w-6 rounded-md"
          /> 
        )} 
      />
  <span className="absolute top-0 right-0 block h-1.5 w-1.5 transform -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-white bg-gray-300"/>
</span>
        <span className="inline-block relative">
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlHsP: media.url,
            imagealtNiC: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlHsP } 
            alt={ attributes.imagealtNiC } 
            onClick={ open } 
            className="h-8 w-8 rounded-md"
          /> 
        )} 
      /> <span className="absolute top-0 right-0 block h-2 w-2 transform -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-white bg-red-400"/>
</span>
            <span className="inline-block relative">
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlwQl: media.url,
            imagealtFsG: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlwQl } 
            alt={ attributes.imagealtFsG } 
            onClick={ open } 
            className="h-10 w-10 rounded-md"
          /> 
        )} 
      /> <span className="absolute top-0 right-0 block h-2.5 w-2.5 transform -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-white bg-green-400"/>
</span>
                <span className="inline-block relative">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlhuJ: media.url,
            imagealtlgu: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlhuJ } 
            alt={ attributes.imagealtlgu } 
            onClick={ open } 
            className="h-12 w-12 rounded-md"
          /> 
        )} 
      /> <span className="absolute top-0 right-0 block h-3 w-3 transform -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-white bg-gray-300"/>
</span>
                    <span className="inline-block relative">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlJYq: media.url,
            imagealtSHl: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlJYq } 
            alt={ attributes.imagealtSHl } 
            onClick={ open } 
            className="h-14 w-14 rounded-md"
          /> 
        )} 
      /> <span className="absolute top-0 right-0 block h-3.5 w-3.5 transform -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-white bg-red-400"/>
</span>
                        <span className="inline-block relative">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlpJZ: media.url,
            imagealtRxM: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlpJZ } 
            alt={ attributes.imagealtRxM } 
            onClick={ open } 
            className="h-16 w-16 rounded-md"
          /> 
        )} 
      /> <span className="absolute top-0 right-0 block h-4 w-4 transform -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-white bg-green-400"/>
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
<span class="inline-block relative">
  
      <img
            src={ attributes.imageurlEse } 
            alt={ attributes.imagealtQCL } 
            class="h-6 w-6 rounded-md"
          />
  <span class="absolute top-0 right-0 block h-1.5 w-1.5 transform -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-white bg-gray-300"/>
</span>
        <span class="inline-block relative">
            
      <img
            src={ attributes.imageurlHsP } 
            alt={ attributes.imagealtNiC } 
            class="h-8 w-8 rounded-md"
          /> <span class="absolute top-0 right-0 block h-2 w-2 transform -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-white bg-red-400"/>
</span>
            <span class="inline-block relative">
                
      <img
            src={ attributes.imageurlwQl } 
            alt={ attributes.imagealtFsG } 
            class="h-10 w-10 rounded-md"
          /> <span class="absolute top-0 right-0 block h-2.5 w-2.5 transform -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-white bg-green-400"/>
</span>
                <span class="inline-block relative">
                    
      <img
            src={ attributes.imageurlhuJ } 
            alt={ attributes.imagealtlgu } 
            class="h-12 w-12 rounded-md"
          /> <span class="absolute top-0 right-0 block h-3 w-3 transform -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-white bg-gray-300"/>
</span>
                    <span class="inline-block relative">
                        
      <img
            src={ attributes.imageurlJYq } 
            alt={ attributes.imagealtSHl } 
            class="h-14 w-14 rounded-md"
          /> <span class="absolute top-0 right-0 block h-3.5 w-3.5 transform -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-white bg-red-400"/>
</span>
                        <span class="inline-block relative">
                            
      <img
            src={ attributes.imageurlpJZ } 
            alt={ attributes.imagealtRxM } 
            class="h-16 w-16 rounded-md"
          /> <span class="absolute top-0 right-0 block h-4 w-4 transform -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-white bg-green-400"/>
</span>
    </div>
</div>
            );
            },
        });
        