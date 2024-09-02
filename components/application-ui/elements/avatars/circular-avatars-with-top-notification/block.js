
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/circular-avatars-with-top-notification', {
            title: 'circular avatars with top notification',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "imageurlkQG": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealttLb": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlpba": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtkMD": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlpDz": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtklT": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlXIz": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtuOd": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlPXl": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtDPq": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurleNj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtOjD": {
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
            imageurlkQG: media.url,
            imagealttLb: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlkQG } 
            alt={ attributes.imagealttLb } 
            onClick={ open } 
            className="h-6 w-6 rounded-full"
          /> 
        )} 
      />
  <span className="absolute top-0 right-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-300"/>
</span>
        <span className="inline-block relative">
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlpba: media.url,
            imagealtkMD: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlpba } 
            alt={ attributes.imagealtkMD } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      /> <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"/>
</span>
            <span className="inline-block relative">
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlpDz: media.url,
            imagealtklT: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlpDz } 
            alt={ attributes.imagealtklT } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      /> <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400"/>
</span>
                <span className="inline-block relative">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlXIz: media.url,
            imagealtuOd: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlXIz } 
            alt={ attributes.imagealtuOd } 
            onClick={ open } 
            className="h-12 w-12 rounded-full"
          /> 
        )} 
      /> <span className="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-gray-300"/>
</span>
                    <span className="inline-block relative">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlPXl: media.url,
            imagealtDPq: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlPXl } 
            alt={ attributes.imagealtDPq } 
            onClick={ open } 
            className="h-14 w-14 rounded-full"
          /> 
        )} 
      /> <span className="absolute top-0 right-0 block h-3.5 w-3.5 rounded-full ring-2 ring-white bg-red-400"/>
</span>
                        <span className="inline-block relative">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurleNj: media.url,
            imagealtOjD: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurleNj } 
            alt={ attributes.imagealtOjD } 
            onClick={ open } 
            className="h-16 w-16 rounded-full"
          /> 
        )} 
      /> <span className="absolute top-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"/>
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
            src={ attributes.imageurlkQG } 
            alt={ attributes.imagealttLb } 
            class="h-6 w-6 rounded-full"
          />
  <span class="absolute top-0 right-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-300"/>
</span>
        <span class="inline-block relative">
            
      <img
            src={ attributes.imageurlpba } 
            alt={ attributes.imagealtkMD } 
            class="h-8 w-8 rounded-full"
          /> <span class="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"/>
</span>
            <span class="inline-block relative">
                
      <img
            src={ attributes.imageurlpDz } 
            alt={ attributes.imagealtklT } 
            class="h-10 w-10 rounded-full"
          /> <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400"/>
</span>
                <span class="inline-block relative">
                    
      <img
            src={ attributes.imageurlXIz } 
            alt={ attributes.imagealtuOd } 
            class="h-12 w-12 rounded-full"
          /> <span class="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-gray-300"/>
</span>
                    <span class="inline-block relative">
                        
      <img
            src={ attributes.imageurlPXl } 
            alt={ attributes.imagealtDPq } 
            class="h-14 w-14 rounded-full"
          /> <span class="absolute top-0 right-0 block h-3.5 w-3.5 rounded-full ring-2 ring-white bg-red-400"/>
</span>
                        <span class="inline-block relative">
                            
      <img
            src={ attributes.imageurleNj } 
            alt={ attributes.imagealtOjD } 
            class="h-16 w-16 rounded-full"
          /> <span class="absolute top-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"/>
</span>
    </div>
</div>
            );
            },
        });
        