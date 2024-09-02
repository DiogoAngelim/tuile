
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/rounded-avatars-with-bottom-notification', {
            title: 'rounded avatars with bottom notification',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "imageurlskB": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtsTM": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlGqJ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtXwd": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlaBc": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtdxm": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlTVl": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtpbr": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlcMj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtgtf": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlHOm": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtCke": {
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
            imageurlskB: media.url,
            imagealtsTM: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlskB } 
            alt={ attributes.imagealtsTM } 
            onClick={ open } 
            className="h-6 w-6 rounded-md"
          /> 
        )} 
      />
  <span className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full">
    <span className="block h-1.5 w-1.5 rounded-full bg-gray-300"/>
</span>
        </span>
<span className="inline-block relative">
  
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlGqJ: media.url,
            imagealtXwd: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlGqJ } 
            alt={ attributes.imagealtXwd } 
            onClick={ open } 
            className="h-8 w-8 rounded-md"
          /> 
        )} 
      />
  <span className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full">
    <span className="block h-2 w-2 rounded-full bg-red-400"/>
</span>
        </span>
<span className="inline-block relative">
  
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlaBc: media.url,
            imagealtdxm: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlaBc } 
            alt={ attributes.imagealtdxm } 
            onClick={ open } 
            className="h-10 w-10 rounded-md"
          /> 
        )} 
      />
  <span className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full">
    <span className="block h-2.5 w-2.5 rounded-full bg-gray-300"/>
</span>
        </span>
<span className="inline-block relative">
  
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlTVl: media.url,
            imagealtpbr: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlTVl } 
            alt={ attributes.imagealtpbr } 
            onClick={ open } 
            className="h-12 w-12 rounded-md"
          /> 
        )} 
      />
  <span className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full">
    <span className="block h-3 w-3 rounded-full bg-green-400"/>
</span>
        </span>
<span className="inline-block relative">
  
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlcMj: media.url,
            imagealtgtf: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlcMj } 
            alt={ attributes.imagealtgtf } 
            onClick={ open } 
            className="h-14 w-14 rounded-md"
          /> 
        )} 
      />
  <span className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full">
    <span className="block h-3.5 w-3.5 rounded-full bg-gray-300"/>
</span>
        </span>
<span className="inline-block relative">
  
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlHOm: media.url,
            imagealtCke: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlHOm } 
            alt={ attributes.imagealtCke } 
            onClick={ open } 
            className="h-16 w-16 rounded-md"
          /> 
        )} 
      />
  <span className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full">
    <span className="block h-4 w-4 rounded-full bg-gray-300"/>
</span>
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
            src={ attributes.imageurlskB } 
            alt={ attributes.imagealtsTM } 
            class="h-6 w-6 rounded-md"
          />
  <span class="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full">
    <span class="block h-1.5 w-1.5 rounded-full bg-gray-300"/>
</span>
        </span>
<span class="inline-block relative">
  
      <img
            src={ attributes.imageurlGqJ } 
            alt={ attributes.imagealtXwd } 
            class="h-8 w-8 rounded-md"
          />
  <span class="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full">
    <span class="block h-2 w-2 rounded-full bg-red-400"/>
</span>
        </span>
<span class="inline-block relative">
  
      <img
            src={ attributes.imageurlaBc } 
            alt={ attributes.imagealtdxm } 
            class="h-10 w-10 rounded-md"
          />
  <span class="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full">
    <span class="block h-2.5 w-2.5 rounded-full bg-gray-300"/>
</span>
        </span>
<span class="inline-block relative">
  
      <img
            src={ attributes.imageurlTVl } 
            alt={ attributes.imagealtpbr } 
            class="h-12 w-12 rounded-md"
          />
  <span class="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full">
    <span class="block h-3 w-3 rounded-full bg-green-400"/>
</span>
        </span>
<span class="inline-block relative">
  
      <img
            src={ attributes.imageurlcMj } 
            alt={ attributes.imagealtgtf } 
            class="h-14 w-14 rounded-md"
          />
  <span class="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full">
    <span class="block h-3.5 w-3.5 rounded-full bg-gray-300"/>
</span>
        </span>
<span class="inline-block relative">
  
      <img
            src={ attributes.imageurlHOm } 
            alt={ attributes.imagealtCke } 
            class="h-16 w-16 rounded-md"
          />
  <span class="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full">
    <span class="block h-4 w-4 rounded-full bg-gray-300"/>
</span>
        </span>
    </div>
</div>
            );
            },
        });
        