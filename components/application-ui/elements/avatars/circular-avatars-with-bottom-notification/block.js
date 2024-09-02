
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/circular-avatars-with-bottom-notification', {
            title: 'circular avatars with bottom notification',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "imageurlLHS": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtvEZ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlMfK": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtbQs": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlixz": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtEUo": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlagj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtEiR": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlGXR": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtkfl": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlppy": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtghi": {
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
            imageurlLHS: media.url,
            imagealtvEZ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlLHS } 
            alt={ attributes.imagealtvEZ } 
            onClick={ open } 
            className="h-6 w-6 rounded-full"
          /> 
        )} 
      />
  <span className="absolute bottom-0 right-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-300"/>
</span>
        <span className="inline-block relative">
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlMfK: media.url,
            imagealtbQs: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlMfK } 
            alt={ attributes.imagealtbQs } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      /> <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"/>
</span>
            <span className="inline-block relative">
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlixz: media.url,
            imagealtEUo: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlixz } 
            alt={ attributes.imagealtEUo } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      /> <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400"/>
</span>
                <span className="inline-block relative">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlagj: media.url,
            imagealtEiR: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlagj } 
            alt={ attributes.imagealtEiR } 
            onClick={ open } 
            className="h-12 w-12 rounded-full"
          /> 
        )} 
      /> <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-gray-300"/>
</span>
                    <span className="inline-block relative">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlGXR: media.url,
            imagealtkfl: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlGXR } 
            alt={ attributes.imagealtkfl } 
            onClick={ open } 
            className="h-14 w-14 rounded-full"
          /> 
        )} 
      /> <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full ring-2 ring-white bg-red-400"/>
</span>
                        <span className="inline-block relative">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlppy: media.url,
            imagealtghi: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlppy } 
            alt={ attributes.imagealtghi } 
            onClick={ open } 
            className="h-16 w-16 rounded-full"
          /> 
        )} 
      /> <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"/>
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
            src={ attributes.imageurlLHS } 
            alt={ attributes.imagealtvEZ } 
            class="h-6 w-6 rounded-full"
          />
  <span class="absolute bottom-0 right-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-300"/>
</span>
        <span class="inline-block relative">
            
      <img
            src={ attributes.imageurlMfK } 
            alt={ attributes.imagealtbQs } 
            class="h-8 w-8 rounded-full"
          /> <span class="absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"/>
</span>
            <span class="inline-block relative">
                
      <img
            src={ attributes.imageurlixz } 
            alt={ attributes.imagealtEUo } 
            class="h-10 w-10 rounded-full"
          /> <span class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400"/>
</span>
                <span class="inline-block relative">
                    
      <img
            src={ attributes.imageurlagj } 
            alt={ attributes.imagealtEiR } 
            class="h-12 w-12 rounded-full"
          /> <span class="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-gray-300"/>
</span>
                    <span class="inline-block relative">
                        
      <img
            src={ attributes.imageurlGXR } 
            alt={ attributes.imagealtkfl } 
            class="h-14 w-14 rounded-full"
          /> <span class="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full ring-2 ring-white bg-red-400"/>
</span>
                        <span class="inline-block relative">
                            
      <img
            src={ attributes.imageurlppy } 
            alt={ attributes.imagealtghi } 
            class="h-16 w-16 rounded-full"
          /> <span class="absolute bottom-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"/>
</span>
    </div>
</div>
            );
            },
        });
        