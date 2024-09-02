
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-color-swatches-and-horizontal-scrolling', {
            title: 'with color swatches and horizontal scrolling',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentnvX": {
    "type": "string",
    "default": "Trending products"
  },
  "contentvBS": {
    "type": "string",
    "default": "See everything"
  },
  "contentSFf": {
    "type": "string",
    "default": " &rarr;"
  },
  "contentgpU": {
    "type": "string",
    "default": "Black"
  },
  "contenttpc": {
    "type": "string",
    "default": "\n                    Machined Pen\n                  "
  },
  "contentQKf": {
    "type": "string",
    "default": "$35"
  },
  "contentlvt": {
    "type": "string",
    "default": "Available colors"
  },
  "contentQag": {
    "type": "string",
    "default": " Black "
  },
  "contenttBc": {
    "type": "string",
    "default": " Brass "
  },
  "contentVQm": {
    "type": "string",
    "default": " Chrome "
  },
  "contentWgw": {
    "type": "string",
    "default": "See everything"
  },
  "contentBHq": {
    "type": "string",
    "default": " &rarr;"
  },
  "imageurlfGd": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-02-product-01.jpg'
  },
  "imagealtlza": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Black machined steel pen with hexagonal grip and small white logo at top."
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
            <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
                <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
                     <h2 className="text-2xl font-extrabold tracking-tight text-gray-900"><RichText tagName="span" value={attributes.contentnvX} default="Trending products" onChange={ (newtext) =>  {
        setAttributes({ contentnvX: newtext });
      }}
    /></h2>
 <span className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentvBS} default="See everything" onChange={ (newtext) =>  {
        setAttributes({ contentvBS: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentSFf} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentSFf: newtext });
      }}
    /></span></span>
                </div>
                <div className="mt-8 relative">
                    <div className="relative w-full pb-6 -mb-6 overflow-x-auto">
                        <ul role="list" className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
                            <li className="w-64 inline-flex flex-col text-center lg:w-auto">
                                <div className="group relative">
                                    <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlfGd: media.url,
            imagealtlza: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlfGd } 
            alt={ attributes.imagealtlza } 
            onClick={ open } 
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
                                    </div>
                                    <div className="mt-6">
                                        <p className="text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentgpU} default="Black" onChange={ (newtext) => { setAttributes({ contentgpU: newtext }); }} /></p>
                                         <h3 className="mt-1 font-semibold text-gray-900">
                  <span>
                    <span className="absolute inset-0"/><RichText tagName="span" value={attributes.contenttpc} default="Machined Pen" onChange={ (newtext) =>  {
        setAttributes({ contenttpc: newtext });
      }}
    /></span>
                </h3>

                                        <p className="mt-1 text-gray-900">
                                            <RichText tagName="span" value={attributes.contentQKf} default="$35" onChange={ (newtext) => { setAttributes({ contentQKf: newtext }); }} /></p>
                                    </div>
                                </div>
                                 <h4 className="sr-only"><RichText tagName="span" value={attributes.contentlvt} default="Available colors" onChange={ (newtext) =>  {
        setAttributes({ contentlvt: newtext });
      }}
    /></h4>

                                <ul role="list" className="mt-auto pt-6 flex items-center justify-center space-x-3">
                                    <li className="w-4 h-4 rounded-full border border-black border-opacity-10" style="background-color: #111827"> <span className="sr-only"><RichText tagName="span" value={attributes.contentQag} default="Black" onChange={ (newtext) =>  {
        setAttributes({ contentQag: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="w-4 h-4 rounded-full border border-black border-opacity-10" style="background-color: #fde68a"> <span className="sr-only"><RichText tagName="span" value={attributes.contenttBc} default="Brass" onChange={ (newtext) =>  {
        setAttributes({ contenttBc: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="w-4 h-4 rounded-full border border-black border-opacity-10" style="background-color: #e5e7eb"> <span className="sr-only"><RichText tagName="span" value={attributes.contentVQm} default="Chrome" onChange={ (newtext) =>  {
        setAttributes({ contentVQm: newtext });
      }}
    /></span>

                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 flex px-4 sm:hidden"> <span className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentWgw} default="See everything" onChange={ (newtext) =>  {
        setAttributes({ contentWgw: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentBHq} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentBHq: newtext });
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
            <div class="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
                <div class="px-4 flex items-center justify-between sm:px-6 lg:px-0">
                     <h2 class="text-2xl font-extrabold tracking-tight text-gray-900"><RichText.Content value={attributes.contentnvX} /></h2>
 <span class="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentvBS} /><span aria-hidden="true"><RichText.Content value={attributes.contentSFf} /></span></span>
                </div>
                <div class="mt-8 relative">
                    <div class="relative w-full pb-6 -mb-6 overflow-x-auto">
                        <ul role="list" class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
                            <li class="w-64 inline-flex flex-col text-center lg:w-auto">
                                <div class="group relative">
                                    <div class="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                                        
      <img
            src={ attributes.imageurlfGd } 
            alt={ attributes.imagealtlza } 
            class="w-full h-full object-center object-cover group-hover:opacity-75"
          />
                                    </div>
                                    <div class="mt-6">
                                        <p class="text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentgpU} /></p>
                                         <h3 class="mt-1 font-semibold text-gray-900">
                  <span>
                    <span class="absolute inset-0"/><RichText.Content value={attributes.contenttpc} /></span>
                </h3>

                                        <p class="mt-1 text-gray-900">
                                            <RichText.Content value={attributes.contentQKf} /></p>
                                    </div>
                                </div>
                                 <h4 class="sr-only"><RichText.Content value={attributes.contentlvt} /></h4>

                                <ul role="list" class="mt-auto pt-6 flex items-center justify-center space-x-3">
                                    <li class="w-4 h-4 rounded-full border border-black border-opacity-10" style="background-color: #111827"> <span class="sr-only"><RichText.Content value={attributes.contentQag} /></span>

                                    </li>
                                    <li class="w-4 h-4 rounded-full border border-black border-opacity-10" style="background-color: #fde68a"> <span class="sr-only"><RichText.Content value={attributes.contenttBc} /></span>

                                    </li>
                                    <li class="w-4 h-4 rounded-full border border-black border-opacity-10" style="background-color: #e5e7eb"> <span class="sr-only"><RichText.Content value={attributes.contentVQm} /></span>

                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mt-12 flex px-4 sm:hidden"> <span class="text-sm font-semibold text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentWgw} /><span aria-hidden="true"><RichText.Content value={attributes.contentBHq} /></span></span>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        