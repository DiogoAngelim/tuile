
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-inline-price', {
            title: 'with inline price',
            icon: (<img src="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z" />),
            category: 'common',
            attributes: {
  "contentrRg": {
    "type": "string",
    "default": "Customers also purchased"
  },
  "contentukt": {
    "type": "string",
    "default": "\n                Basic Tee\n              "
  },
  "contentqVG": {
    "type": "string",
    "default": "Black"
  },
  "contentTkt": {
    "type": "string",
    "default": "$35"
  },
  "imageurlqCA": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/product-page-01-related-product-01.jpg'
  },
  "imagealtXkI": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Front of men&#039;s Basic Tee in black."
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
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                 <h2 className="text-2xl font-extrabold tracking-tight text-gray-900"><RichText tagName="span" value={attributes.contentrRg} default="Customers also purchased" onChange={ (newtext) =>  {
        setAttributes({ contentrRg: newtext });
      }}
    /></h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlqCA: media.url,
            imagealtXkI: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlqCA } 
            alt={ attributes.imagealtXkI } 
            onClick={ open } 
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          /> 
        )} 
      />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                 <h3 className="text-sm text-gray-700">
              <span>
                <span aria-hidden="true" className="absolute inset-0"/><RichText tagName="span" value={attributes.contentukt} default="Basic Tee" onChange={ (newtext) =>  {
        setAttributes({ contentukt: newtext });
      }}
    /></span>
            </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    <RichText tagName="span" value={attributes.contentqVG} default="Black" onChange={ (newtext) => { setAttributes({ contentqVG: newtext }); }} /></p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">
                                <RichText tagName="span" value={attributes.contentTkt} default="$35" onChange={ (newtext) => { setAttributes({ contentTkt: newtext }); }} /></p>
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
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                 <h2 class="text-2xl font-extrabold tracking-tight text-gray-900"><RichText.Content value={attributes.contentrRg} /></h2>

                <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div class="group relative">
                        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            
      <img
            src={ attributes.imageurlqCA } 
            alt={ attributes.imagealtXkI } 
            class="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                 <h3 class="text-sm text-gray-700">
              <span>
                <span aria-hidden="true" class="absolute inset-0"/><RichText.Content value={attributes.contentukt} /></span>
            </h3>

                                <p class="mt-1 text-sm text-gray-500">
                                    <RichText.Content value={attributes.contentqVG} /></p>
                            </div>
                            <p class="text-sm font-medium text-gray-900">
                                <RichText.Content value={attributes.contentTkt} /></p>
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
        