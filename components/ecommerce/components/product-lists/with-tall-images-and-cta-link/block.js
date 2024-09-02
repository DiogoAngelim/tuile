
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-tall-images-and-cta-link', {
            title: 'with tall images and cta link',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentlku": {
    "type": "string",
    "default": "Our Favorites"
  },
  "contentVGQ": {
    "type": "string",
    "default": "Browse all favorites"
  },
  "contentaQZ": {
    "type": "string",
    "default": " &rarr;"
  },
  "contentmLh": {
    "type": "string",
    "default": "\n            Black Basic Tee\n          "
  },
  "contentanY": {
    "type": "string",
    "default": "$32"
  },
  "contentfvW": {
    "type": "string",
    "default": "Browse all favorites"
  },
  "contentcle": {
    "type": "string",
    "default": " &rarr;"
  },
  "imageurlyTl": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-03-favorite-01.jpg'
  },
  "imagealtabd": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Model wearing women&#039;s black cotton crewneck tee."
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
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-baseline sm:justify-between">
                     <h2 className="text-2xl font-extrabold tracking-tight text-gray-900"><RichText tagName="span" value={attributes.contentlku} default="Our Favorites" onChange={ (newtext) =>  {
        setAttributes({ contentlku: newtext });
      }}
    /></h2>
 <span className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"><RichText tagName="span" value={attributes.contentVGQ} default="Browse all favorites" onChange={ (newtext) =>  {
        setAttributes({ contentVGQ: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentaQZ} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentaQZ: newtext });
      }}
    /></span></span>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
                    <div className="group relative">
                        <div className="w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlyTl: media.url,
            imagealtabd: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlyTl } 
            alt={ attributes.imagealtabd } 
            onClick={ open } 
            className="w-full h-full object-center object-cover"
          /> 
        )} 
      />
                        </div>
                         <h3 className="mt-4 text-base font-semibold text-gray-900">
          <span>
            <span className="absolute inset-0"/><RichText tagName="span" value={attributes.contentmLh} default="Black Basic Tee" onChange={ (newtext) =>  {
        setAttributes({ contentmLh: newtext });
      }}
    /></span>
        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            <RichText tagName="span" value={attributes.contentanY} default="$32" onChange={ (newtext) => { setAttributes({ contentanY: newtext }); }} /></p>
                    </div>
                </div>
                <div className="mt-6 sm:hidden"> <span className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentfvW} default="Browse all favorites" onChange={ (newtext) =>  {
        setAttributes({ contentfvW: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentcle} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentcle: newtext });
      }}
    /></span></span>
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
            <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div class="sm:flex sm:items-baseline sm:justify-between">
                     <h2 class="text-2xl font-extrabold tracking-tight text-gray-900"><RichText.Content value={attributes.contentlku} /></h2>
 <span class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"><RichText.Content value={attributes.contentVGQ} /><span aria-hidden="true"><RichText.Content value={attributes.contentaQZ} /></span></span>
                </div>
                <div class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
                    <div class="group relative">
                        <div class="w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
                            
      <img
            src={ attributes.imageurlyTl } 
            alt={ attributes.imagealtabd } 
            class="w-full h-full object-center object-cover"
          />
                        </div>
                         <h3 class="mt-4 text-base font-semibold text-gray-900">
          <span>
            <span class="absolute inset-0"/><RichText.Content value={attributes.contentmLh} /></span>
        </h3>

                        <p class="mt-1 text-sm text-gray-500">
                            <RichText.Content value={attributes.contentanY} /></p>
                    </div>
                </div>
                <div class="mt-6 sm:hidden"> <span class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentfvW} /><span aria-hidden="true"><RichText.Content value={attributes.contentcle} /></span></span>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        