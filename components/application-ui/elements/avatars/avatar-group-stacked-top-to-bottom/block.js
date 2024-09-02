
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/avatar-group-stacked-top-to-bottom', {
            title: 'avatar group stacked top to bottom',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "imageurlOra": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  "imagealtXkR": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlDeO": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  "imagealtDJV": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlEbW": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
  },
  "imagealtvyZ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlRxT": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  "imagealtTUB": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlecM": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  "imagealtueY": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlfNW": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  "imagealtyve": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlqEV": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
  },
  "imagealtPNk": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlLDL": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  "imagealtefP": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlcHm": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  "imagealtGoA": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlSxE": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  "imagealtFJa": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlOzR": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
  },
  "imagealtsoA": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlvJK": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  "imagealtZNB": {
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
        <div className="flex -space-x-1 relative z-0 overflow-hidden">
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlOra: media.url,
            imagealtXkR: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlOra } 
            alt={ attributes.imagealtXkR } 
            onClick={ open } 
            className="relative z-30 inline-block h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlDeO: media.url,
            imagealtDJV: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlDeO } 
            alt={ attributes.imagealtDJV } 
            onClick={ open } 
            className="relative z-20 inline-block h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlEbW: media.url,
            imagealtvyZ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlEbW } 
            alt={ attributes.imagealtvyZ } 
            onClick={ open } 
            className="relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlRxT: media.url,
            imagealtTUB: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlRxT } 
            alt={ attributes.imagealtTUB } 
            onClick={ open } 
            className="relative z-0 inline-block h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
        </div>
        <div className="flex -space-x-2 relative z-0 overflow-hidden">
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlecM: media.url,
            imagealtueY: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlecM } 
            alt={ attributes.imagealtueY } 
            onClick={ open } 
            className="relative z-30 inline-block h-8 w-8 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlfNW: media.url,
            imagealtyve: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlfNW } 
            alt={ attributes.imagealtyve } 
            onClick={ open } 
            className="relative z-20 inline-block h-8 w-8 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlqEV: media.url,
            imagealtPNk: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlqEV } 
            alt={ attributes.imagealtPNk } 
            onClick={ open } 
            className="relative z-10 inline-block h-8 w-8 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlLDL: media.url,
            imagealtefP: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlLDL } 
            alt={ attributes.imagealtefP } 
            onClick={ open } 
            className="relative z-0 inline-block h-8 w-8 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
        </div>
        <div className="flex -space-x-2 relative z-0 overflow-hidden">
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlcHm: media.url,
            imagealtGoA: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlcHm } 
            alt={ attributes.imagealtGoA } 
            onClick={ open } 
            className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlSxE: media.url,
            imagealtFJa: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlSxE } 
            alt={ attributes.imagealtFJa } 
            onClick={ open } 
            className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlOzR: media.url,
            imagealtsoA: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlOzR } 
            alt={ attributes.imagealtsoA } 
            onClick={ open } 
            className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlvJK: media.url,
            imagealtZNB: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlvJK } 
            alt={ attributes.imagealtZNB } 
            onClick={ open } 
            className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
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
        <div class="flex -space-x-1 relative z-0 overflow-hidden">
            
      <img
            src={ attributes.imageurlOra } 
            alt={ attributes.imagealtXkR } 
            class="relative z-30 inline-block h-6 w-6 rounded-full ring-2 ring-white"
          />
            
      <img
            src={ attributes.imageurlDeO } 
            alt={ attributes.imagealtDJV } 
            class="relative z-20 inline-block h-6 w-6 rounded-full ring-2 ring-white"
          />
            
      <img
            src={ attributes.imageurlEbW } 
            alt={ attributes.imagealtvyZ } 
            class="relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white"
          />
            
      <img
            src={ attributes.imageurlRxT } 
            alt={ attributes.imagealtTUB } 
            class="relative z-0 inline-block h-6 w-6 rounded-full ring-2 ring-white"
          />
        </div>
        <div class="flex -space-x-2 relative z-0 overflow-hidden">
            
      <img
            src={ attributes.imageurlecM } 
            alt={ attributes.imagealtueY } 
            class="relative z-30 inline-block h-8 w-8 rounded-full ring-2 ring-white"
          />
            
      <img
            src={ attributes.imageurlfNW } 
            alt={ attributes.imagealtyve } 
            class="relative z-20 inline-block h-8 w-8 rounded-full ring-2 ring-white"
          />
            
      <img
            src={ attributes.imageurlqEV } 
            alt={ attributes.imagealtPNk } 
            class="relative z-10 inline-block h-8 w-8 rounded-full ring-2 ring-white"
          />
            
      <img
            src={ attributes.imageurlLDL } 
            alt={ attributes.imagealtefP } 
            class="relative z-0 inline-block h-8 w-8 rounded-full ring-2 ring-white"
          />
        </div>
        <div class="flex -space-x-2 relative z-0 overflow-hidden">
            
      <img
            src={ attributes.imageurlcHm } 
            alt={ attributes.imagealtGoA } 
            class="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          />
            
      <img
            src={ attributes.imageurlSxE } 
            alt={ attributes.imagealtFJa } 
            class="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          />
            
      <img
            src={ attributes.imageurlOzR } 
            alt={ attributes.imagealtsoA } 
            class="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          />
            
      <img
            src={ attributes.imageurlvJK } 
            alt={ attributes.imagealtZNB } 
            class="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          />
        </div>
    </div>
</div>
            );
            },
        });
        