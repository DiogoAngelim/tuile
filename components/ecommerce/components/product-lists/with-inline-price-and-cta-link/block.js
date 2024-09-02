
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-inline-price-and-cta-link', {
            title: 'with inline price and cta link',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentMPZ": {
    "type": "string",
    "default": "Customers also viewed"
  },
  "contentyKK": {
    "type": "string",
    "default": "View all"
  },
  "contentBLW": {
    "type": "string",
    "default": " &rarr;"
  },
  "contentFIT": {
    "type": "string",
    "default": "View Product"
  },
  "contentHiQ": {
    "type": "string",
    "default": "\n              Fusion\n            "
  },
  "contentHLt": {
    "type": "string",
    "default": "$49"
  },
  "contentVmi": {
    "type": "string",
    "default": "UI Kit"
  },
  "imageurluIW": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/product-page-05-related-product-01.jpg'
  },
  "imagealtGKL": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."
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
                <div className="flex items-center justify-between space-x-4">
                     <h2 className="text-lg font-medium text-gray-900"><RichText tagName="span" value={attributes.contentMPZ} default="Customers also viewed" onChange={ (newtext) =>  {
        setAttributes({ contentMPZ: newtext });
      }}
    /></h2>
 <span className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentyKK} default="View all" onChange={ (newtext) =>  {
        setAttributes({ contentyKK: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentBLW} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentBLW: newtext });
      }}
    /></span></span>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="relative group">
                        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurluIW: media.url,
            imagealtGKL: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurluIW } 
            alt={ attributes.imagealtGKL } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                            <div className="flex items-end opacity-0 p-4 group-hover:opacity-100" aria-hidden="true">
                                <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
                                    <RichText tagName="span" value={attributes.contentFIT} default="View Product" onChange={ (newtext) => { setAttributes({ contentFIT: newtext }); }} /></div>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
                             <h3>
            <span>
              <span aria-hidden="true" className="absolute inset-0"/><RichText tagName="span" value={attributes.contentHiQ} default="Fusion" onChange={ (newtext) =>  {
        setAttributes({ contentHiQ: newtext });
      }}
    /></span>
          </h3>

                            <p>
                                <RichText tagName="span" value={attributes.contentHLt} default="$49" onChange={ (newtext) => { setAttributes({ contentHLt: newtext }); }} /></p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                            <RichText tagName="span" value={attributes.contentVmi} default="UI Kit" onChange={ (newtext) => { setAttributes({ contentVmi: newtext }); }} /></p>
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
                <div class="flex items-center justify-between space-x-4">
                     <h2 class="text-lg font-medium text-gray-900"><RichText.Content value={attributes.contentMPZ} /></h2>
 <span class="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentyKK} /><span aria-hidden="true"><RichText.Content value={attributes.contentBLW} /></span></span>
                </div>
                <div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div class="relative group">
                        <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                            
      <img
            src={ attributes.imageurluIW } 
            alt={ attributes.imagealtGKL } 
            class="object-center object-cover"
          />
                            <div class="flex items-end opacity-0 p-4 group-hover:opacity-100" aria-hidden="true">
                                <div class="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
                                    <RichText.Content value={attributes.contentFIT} /></div>
                            </div>
                        </div>
                        <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
                             <h3>
            <span>
              <span aria-hidden="true" class="absolute inset-0"/><RichText.Content value={attributes.contentHiQ} /></span>
          </h3>

                            <p>
                                <RichText.Content value={attributes.contentHLt} /></p>
                        </div>
                        <p class="mt-1 text-sm text-gray-500">
                            <RichText.Content value={attributes.contentVmi} /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        