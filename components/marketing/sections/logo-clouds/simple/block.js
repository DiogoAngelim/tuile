
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl, ToggleControl } = wp.components;


        registerBlockType('wp/simple', {
            title: 'simple',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "imageurljIJ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/tuple-logo-gray-400.svg'
  },
  "imagealtmbt": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Tuple"
  },
  "imageurloJY": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/mirage-logo-gray-400.svg'
  },
  "imagealtwDk": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Mirage"
  },
  "imageurlqIP": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/statickit-logo-gray-400.svg'
  },
  "imagealtXVq": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "StaticKit"
  },
  "imageurltgT": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/transistor-logo-gray-400.svg'
  },
  "imagealtJmh": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Transistor"
  },
  "imageurluzn": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workcation-logo-gray-400.svg'
  },
  "imagealtAmU": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workcation"
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
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurljIJ: media.url,
            imagealtmbt: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurljIJ } 
            alt={ attributes.imagealtmbt } 
            onClick={ open } 
            className="h-12"
          /> 
        )} 
      />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurloJY: media.url,
            imagealtwDk: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurloJY } 
            alt={ attributes.imagealtwDk } 
            onClick={ open } 
            className="h-12"
          /> 
        )} 
      />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlqIP: media.url,
            imagealtXVq: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlqIP } 
            alt={ attributes.imagealtXVq } 
            onClick={ open } 
            className="h-12"
          /> 
        )} 
      />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurltgT: media.url,
            imagealtJmh: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurltgT } 
            alt={ attributes.imagealtJmh } 
            onClick={ open } 
            className="h-12"
          /> 
        )} 
      />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurluzn: media.url,
            imagealtAmU: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurluzn } 
            alt={ attributes.imagealtAmU } 
            onClick={ open } 
            className="h-12"
          /> 
        )} 
      />
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
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        
      <img
            src={ attributes.imageurljIJ } 
            alt={ attributes.imagealtmbt } 
            class="h-12"
          />
                    </div>
                    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        
      <img
            src={ attributes.imageurloJY } 
            alt={ attributes.imagealtwDk } 
            class="h-12"
          />
                    </div>
                    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        
      <img
            src={ attributes.imageurlqIP } 
            alt={ attributes.imagealtXVq } 
            class="h-12"
          />
                    </div>
                    <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                        
      <img
            src={ attributes.imageurltgT } 
            alt={ attributes.imagealtJmh } 
            class="h-12"
          />
                    </div>
                    <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        
      <img
            src={ attributes.imageurluzn } 
            alt={ attributes.imagealtAmU } 
            class="h-12"
          />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        