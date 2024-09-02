
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/popover', {
            title: 'popover',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentbnx": {
    "type": "string",
    "default": "Workflow"
  },
  "contentQcH": {
    "type": "string",
    "default": "Women"
  },
  "contentNrd": {
    "type": "string",
    "default": "Men"
  },
  "contentOME": {
    "type": "string",
    "default": "Company"
  },
  "contenthxX": {
    "type": "string",
    "default": "Stores"
  },
  "contentvsE": {
    "type": "string",
    "default": "Search"
  },
  "contentncn": {
    "type": "string",
    "default": "0"
  },
  "contentWbc": {
    "type": "string",
    "default": "items in cart, view bag"
  },
  "contentFCr": {
    "type": "string",
    "default": "Shopping Cart"
  },
  "contentnDE": {
    "type": "string",
    "default": "Throwback Hip Bag"
  },
  "contentrkU": {
    "type": "string",
    "default": "Salmon"
  },
  "contentiFk": {
    "type": "string",
    "default": "Medium Stuff Satchel"
  },
  "contentLeh": {
    "type": "string",
    "default": "Blue"
  },
  "contentTen": {
    "type": "string",
    "default": "Checkout"
  },
  "contentJeD": {
    "type": "string",
    "default": "View Shopping Bag"
  },
  "imageurlDex": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtNQX": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlUeu": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/shopping-cart-page-04-product-01.jpg'
  },
  "imagealtIHU": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
  },
  "imageurlDXV": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/shopping-cart-page-04-product-02.jpg'
  },
  "imagealtoJS": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
  },
  "svgEuk": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"/>"
  },
  "svgDit": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z\"/>"
  }
},
            edit(props) {
            const { attributes, setAttributes } = props;

            return (
                <div>
                    <InspectorControls>
                    
    <Panel>
      



























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgEuk }
            onChange={ ( value ) => {
              setAttributes({ svgEuk: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  

    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgDit }
            onChange={ ( value ) => {
              setAttributes({ svgDit: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  
    </Panel>
                    </InspectorControls>

                    <div>
    <div>
        <header className="relative bg-white">
            <nav aria-label="Top" className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="relative border-b border-gray-200 px-4 pb-14 sm:static sm:px-0 sm:pb-0">
                    <div className="h-16 flex items-center justify-between">
                        <div className="flex-1 flex"> <span>
            <span className="sr-only"><RichText tagName="span" value={attributes.contentbnx} default="Workflow" onChange={ (newtext) =>  {
        setAttributes({ contentbnx: newtext });
      }}
    /></span>

                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlDex: media.url,
            imagealtNQX: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlDex } 
            alt={ attributes.imagealtNQX } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                            </span>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 border-t overflow-x-auto sm:static sm:border-t-0">
                            <div className="h-14 flex items-center px-4 space-x-8 sm:h-auto"> <span className="text-sm font-medium text-gray-700 hover:text-gray-800"><RichText tagName="span" value={attributes.contentQcH} default="Women" onChange={ (newtext) =>  {
        setAttributes({ contentQcH: newtext });
      }}
    /></span>
 <span className="text-sm font-medium text-gray-700 hover:text-gray-800"><RichText tagName="span" value={attributes.contentNrd} default="Men" onChange={ (newtext) =>  {
        setAttributes({ contentNrd: newtext });
      }}
    /></span>
 <span className="text-sm font-medium text-gray-700 hover:text-gray-800"><RichText tagName="span" value={attributes.contentOME} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentOME: newtext });
      }}
    /></span>
 <span className="text-sm font-medium text-gray-700 hover:text-gray-800"><RichText tagName="span" value={attributes.contenthxX} default="Stores" onChange={ (newtext) =>  {
        setAttributes({ contenthxX: newtext });
      }}
    /></span>

                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-end"> <span className="p-2 text-gray-400 hover:text-gray-500">
            <span className="sr-only"><RichText tagName="span" value={attributes.contentvsE} default="Search" onChange={ (newtext) =>  {
        setAttributes({ contentvsE: newtext });
      }}
    /></span>

                            
      <svg
         className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEuk }}
        >
      </svg>
      
                            </span>
                            <div className="ml-4 flow-root text-sm lg:relative lg:ml-8">
                                <button type="button" className="group -m-2 p-2 flex items-center" aria-expanded="false">
                                    
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDit }}
        >
      </svg>
       <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"><RichText tagName="span" value={attributes.contentncn} default="0" onChange={ (newtext) =>  {
        setAttributes({ contentncn: newtext });
      }}
    /></span>
 <span className="sr-only"><RichText tagName="span" value={attributes.contentWbc} default="items in cart, view bag" onChange={ (newtext) =>  {
        setAttributes({ contentWbc: newtext });
      }}
    /></span>

                                </button>
                                <div className="absolute top-16 inset-x-0 mt-px pb-6 bg-white shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                                     <h2 className="sr-only"><RichText tagName="span" value={attributes.contentFCr} default="Shopping Cart" onChange={ (newtext) =>  {
        setAttributes({ contentFCr: newtext });
      }}
    /></h2>

                                    <form className="max-w-2xl mx-auto px-4">
                                        <ul role="list" className="divide-y divide-gray-200">
                                            <li className="py-6 flex items-center">
                                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlUeu: media.url,
            imagealtIHU: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlUeu } 
            alt={ attributes.imagealtIHU } 
            onClick={ open } 
            className="flex-none w-16 h-16 rounded-md border border-gray-200"
          /> 
        )} 
      />
                                                <div className="ml-4 flex-auto">
                                                     <h3 className="font-medium text-gray-900">
                        <span><RichText tagName="span" value={attributes.contentnDE} default="Throwback Hip Bag" onChange={ (newtext) =>  {
        setAttributes({ contentnDE: newtext });
      }}
    /></span>
                      </h3>

                                                    <p className="text-gray-500">
                                                        <RichText tagName="span" value={attributes.contentrkU} default="Salmon" onChange={ (newtext) => { setAttributes({ contentrkU: newtext }); }} /></p>
                                                </div>
                                            </li>
                                            <li className="py-6 flex items-center">
                                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlDXV: media.url,
            imagealtoJS: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlDXV } 
            alt={ attributes.imagealtoJS } 
            onClick={ open } 
            className="flex-none w-16 h-16 rounded-md border border-gray-200"
          /> 
        )} 
      />
                                                <div className="ml-4 flex-auto">
                                                     <h3 className="font-medium text-gray-900">
                        <span><RichText tagName="span" value={attributes.contentiFk} default="Medium Stuff Satchel" onChange={ (newtext) =>  {
        setAttributes({ contentiFk: newtext });
      }}
    /></span>
                      </h3>

                                                    <p className="text-gray-500">
                                                        <RichText tagName="span" value={attributes.contentLeh} default="Blue" onChange={ (newtext) => { setAttributes({ contentLeh: newtext }); }} /></p>
                                                </div>
                                            </li>
                                        </ul>
                                        <button type="submit" className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                                            <RichText tagName="span" value={attributes.contentTen} default="Checkout" onChange={ (newtext) => { setAttributes({ contentTen: newtext }); }} /></button>
                                        <p className="mt-6 text-center"> <span className="text-sm font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentJeD} default="View Shopping Bag" onChange={ (newtext) =>  {
        setAttributes({ contentJeD: newtext });
      }}
    /></span>

                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
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
        <header class="relative bg-white">
            <nav aria-label="Top" class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="relative border-b border-gray-200 px-4 pb-14 sm:static sm:px-0 sm:pb-0">
                    <div class="h-16 flex items-center justify-between">
                        <div class="flex-1 flex"> <span>
            <span class="sr-only"><RichText.Content value={attributes.contentbnx} /></span>

                            
      <img
            src={ attributes.imageurlDex } 
            alt={ attributes.imagealtNQX } 
            class="h-8 w-auto"
          />
                            </span>
                        </div>
                        <div class="absolute bottom-0 inset-x-0 border-t overflow-x-auto sm:static sm:border-t-0">
                            <div class="h-14 flex items-center px-4 space-x-8 sm:h-auto"> <span class="text-sm font-medium text-gray-700 hover:text-gray-800"><RichText.Content value={attributes.contentQcH} /></span>
 <span class="text-sm font-medium text-gray-700 hover:text-gray-800"><RichText.Content value={attributes.contentNrd} /></span>
 <span class="text-sm font-medium text-gray-700 hover:text-gray-800"><RichText.Content value={attributes.contentOME} /></span>
 <span class="text-sm font-medium text-gray-700 hover:text-gray-800"><RichText.Content value={attributes.contenthxX} /></span>

                            </div>
                        </div>
                        <div class="flex-1 flex items-center justify-end"> <span class="p-2 text-gray-400 hover:text-gray-500">
            <span class="sr-only"><RichText.Content value={attributes.contentvsE} /></span>

                            
      <svg
         class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEuk }}
        >
      </svg>
      
                            </span>
                            <div class="ml-4 flow-root text-sm lg:relative lg:ml-8">
                                <button type="button" class="group -m-2 p-2 flex items-center" aria-expanded="false">
                                    
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDit }}
        >
      </svg>
       <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"><RichText.Content value={attributes.contentncn} /></span>
 <span class="sr-only"><RichText.Content value={attributes.contentWbc} /></span>

                                </button>
                                <div class="absolute top-16 inset-x-0 mt-px pb-6 bg-white shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                                     <h2 class="sr-only"><RichText.Content value={attributes.contentFCr} /></h2>

                                    <form class="max-w-2xl mx-auto px-4">
                                        <ul role="list" class="divide-y divide-gray-200">
                                            <li class="py-6 flex items-center">
                                                
      <img
            src={ attributes.imageurlUeu } 
            alt={ attributes.imagealtIHU } 
            class="flex-none w-16 h-16 rounded-md border border-gray-200"
          />
                                                <div class="ml-4 flex-auto">
                                                     <h3 class="font-medium text-gray-900">
                        <span><RichText.Content value={attributes.contentnDE} /></span>
                      </h3>

                                                    <p class="text-gray-500">
                                                        <RichText.Content value={attributes.contentrkU} /></p>
                                                </div>
                                            </li>
                                            <li class="py-6 flex items-center">
                                                
      <img
            src={ attributes.imageurlDXV } 
            alt={ attributes.imagealtoJS } 
            class="flex-none w-16 h-16 rounded-md border border-gray-200"
          />
                                                <div class="ml-4 flex-auto">
                                                     <h3 class="font-medium text-gray-900">
                        <span><RichText.Content value={attributes.contentiFk} /></span>
                      </h3>

                                                    <p class="text-gray-500">
                                                        <RichText.Content value={attributes.contentLeh} /></p>
                                                </div>
                                            </li>
                                        </ul>
                                        <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                                            <RichText.Content value={attributes.contentTen} /></button>
                                        <p class="mt-6 text-center"> <span class="text-sm font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentJeD} /></span>

                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</div>
            );
            },
        });
        