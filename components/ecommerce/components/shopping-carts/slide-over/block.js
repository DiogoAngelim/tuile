
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/slide-over', {
            title: 'slide over',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentASI": {
    "type": "string",
    "default": "Shopping cart"
  },
  "contentvgp": {
    "type": "string",
    "default": "Close panel"
  },
  "contentYgX": {
    "type": "string",
    "default": " Throwback Hip Bag "
  },
  "contentirw": {
    "type": "string",
    "default": "$90.00"
  },
  "contenthEd": {
    "type": "string",
    "default": "Salmon"
  },
  "contentKsa": {
    "type": "string",
    "default": "Qty 1"
  },
  "contentOcI": {
    "type": "string",
    "default": "Remove"
  },
  "contentLbC": {
    "type": "string",
    "default": " Medium Stuff Satchel "
  },
  "contenteDg": {
    "type": "string",
    "default": "$32.00"
  },
  "contentBBX": {
    "type": "string",
    "default": "Blue"
  },
  "contentRBQ": {
    "type": "string",
    "default": "Qty 1"
  },
  "contentBCU": {
    "type": "string",
    "default": "Remove"
  },
  "contentlrM": {
    "type": "string",
    "default": "Subtotal"
  },
  "contentwwB": {
    "type": "string",
    "default": "$262.00"
  },
  "contentlqT": {
    "type": "string",
    "default": "Shipping and taxes calculated at checkout."
  },
  "contentzLf": {
    "type": "string",
    "default": "Checkout"
  },
  "contentYmN": {
    "type": "string",
    "default": "\n                or "
  },
  "contentPub": {
    "type": "string",
    "default": "Continue Shopping"
  },
  "contenthjT": {
    "type": "string",
    "default": " &rarr;"
  },
  "imageurlGWp": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/shopping-cart-page-04-product-01.jpg'
  },
  "imagealtIvr": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
  },
  "imageurluXb": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/shopping-cart-page-04-product-02.jpg'
  },
  "imagealtrSm": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
  },
  "svgFBq": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
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
            value={ attributes.svgFBq }
            onChange={ ( value ) => {
              setAttributes({ svgFBq: value });
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
        <div className="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"/>
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <div className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                <div className="flex items-start justify-between">
                                     <h2 className="text-lg font-medium text-gray-900" id="slide-over-title"><RichText tagName="span" value={attributes.contentASI} default="Shopping cart" onChange={ (newtext) =>  {
        setAttributes({ contentASI: newtext });
      }}
    /></h2>

                                    <div className="ml-3 flex h-7 items-center">
                                        <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentvgp} default="Close panel" onChange={ (newtext) =>  {
        setAttributes({ contentvgp: newtext });
      }}
    /></span>

                                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFBq }}
        >
      </svg>
      
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div className="flow-root">
                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                            <li className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlGWp: media.url,
            imagealtIvr: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlGWp } 
            alt={ attributes.imagealtIvr } 
            onClick={ open } 
            className="h-full w-full object-cover object-center"
          /> 
        )} 
      />
                                                </div>
                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                             <h3>
                            <span><RichText tagName="span" value={attributes.contentYgX} default="Throwback Hip Bag" onChange={ (newtext) =>  {
        setAttributes({ contentYgX: newtext });
      }}
    /></span>
                          </h3>

                                                            <p className="ml-4">
                                                                <RichText tagName="span" value={attributes.contentirw} default="$90.00" onChange={ (newtext) => { setAttributes({ contentirw: newtext }); }} /></p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                            <RichText tagName="span" value={attributes.contenthEd} default="Salmon" onChange={ (newtext) => { setAttributes({ contenthEd: newtext }); }} /></p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <p className="text-gray-500">
                                                            <RichText tagName="span" value={attributes.contentKsa} default="Qty 1" onChange={ (newtext) => { setAttributes({ contentKsa: newtext }); }} /></p>
                                                        <div className="flex">
                                                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                <RichText tagName="span" value={attributes.contentOcI} default="Remove" onChange={ (newtext) => { setAttributes({ contentOcI: newtext }); }} /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurluXb: media.url,
            imagealtrSm: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurluXb } 
            alt={ attributes.imagealtrSm } 
            onClick={ open } 
            className="h-full w-full object-cover object-center"
          /> 
        )} 
      />
                                                </div>
                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                             <h3>
                            <span><RichText tagName="span" value={attributes.contentLbC} default="Medium Stuff Satchel" onChange={ (newtext) =>  {
        setAttributes({ contentLbC: newtext });
      }}
    /></span>
                          </h3>

                                                            <p className="ml-4">
                                                                <RichText tagName="span" value={attributes.contenteDg} default="$32.00" onChange={ (newtext) => { setAttributes({ contenteDg: newtext }); }} /></p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                            <RichText tagName="span" value={attributes.contentBBX} default="Blue" onChange={ (newtext) => { setAttributes({ contentBBX: newtext }); }} /></p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <p className="text-gray-500">
                                                            <RichText tagName="span" value={attributes.contentRBQ} default="Qty 1" onChange={ (newtext) => { setAttributes({ contentRBQ: newtext }); }} /></p>
                                                        <div className="flex">
                                                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                <RichText tagName="span" value={attributes.contentBCU} default="Remove" onChange={ (newtext) => { setAttributes({ contentBCU: newtext }); }} /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>
                                        <RichText tagName="span" value={attributes.contentlrM} default="Subtotal" onChange={ (newtext) => { setAttributes({ contentlrM: newtext }); }} /></p>
                                    <p>
                                        <RichText tagName="span" value={attributes.contentwwB} default="$262.00" onChange={ (newtext) => { setAttributes({ contentwwB: newtext }); }} /></p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">
                                    <RichText tagName="span" value={attributes.contentlqT} default="Shipping and taxes calculated at checkout." onChange={ (newtext) => { setAttributes({ contentlqT: newtext }); }} /></p>
                                <div className="mt-6"> <span className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"><RichText tagName="span" value={attributes.contentzLf} default="Checkout" onChange={ (newtext) =>  {
        setAttributes({ contentzLf: newtext });
      }}
    /></span>

                                </div>
                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <p>
                                        <RichText tagName="span" value={attributes.contentYmN} default="or" onChange={ (newtext) => { setAttributes({ contentYmN: newtext }); }} />
                                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                <RichText tagName="span" value={attributes.contentPub} default="Continue Shopping" onChange={ (newtext) => { setAttributes({ contentPub: newtext }); }} /><span aria-hidden="true"><RichText tagName="span" value={attributes.contenthjT} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contenthjT: newtext });
      }}
    /></span>
                                            </button>
                                    </p>
                                </div>
                            </div>
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
        <div class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"/>
                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <div class="pointer-events-auto w-screen max-w-md">
                        <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                <div class="flex items-start justify-between">
                                     <h2 class="text-lg font-medium text-gray-900" id="slide-over-title"><RichText.Content value={attributes.contentASI} /></h2>

                                    <div class="ml-3 flex h-7 items-center">
                                        <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500"> <span class="sr-only"><RichText.Content value={attributes.contentvgp} /></span>

                                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFBq }}
        >
      </svg>
      
                                        </button>
                                    </div>
                                </div>
                                <div class="mt-8">
                                    <div class="flow-root">
                                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                                            <li class="flex py-6">
                                                <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    
      <img
            src={ attributes.imageurlGWp } 
            alt={ attributes.imagealtIvr } 
            class="h-full w-full object-cover object-center"
          />
                                                </div>
                                                <div class="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                                             <h3>
                            <span><RichText.Content value={attributes.contentYgX} /></span>
                          </h3>

                                                            <p class="ml-4">
                                                                <RichText.Content value={attributes.contentirw} /></p>
                                                        </div>
                                                        <p class="mt-1 text-sm text-gray-500">
                                                            <RichText.Content value={attributes.contenthEd} /></p>
                                                    </div>
                                                    <div class="flex flex-1 items-end justify-between text-sm">
                                                        <p class="text-gray-500">
                                                            <RichText.Content value={attributes.contentKsa} /></p>
                                                        <div class="flex">
                                                            <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                                                                <RichText.Content value={attributes.contentOcI} /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="flex py-6">
                                                <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    
      <img
            src={ attributes.imageurluXb } 
            alt={ attributes.imagealtrSm } 
            class="h-full w-full object-cover object-center"
          />
                                                </div>
                                                <div class="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                                             <h3>
                            <span><RichText.Content value={attributes.contentLbC} /></span>
                          </h3>

                                                            <p class="ml-4">
                                                                <RichText.Content value={attributes.contenteDg} /></p>
                                                        </div>
                                                        <p class="mt-1 text-sm text-gray-500">
                                                            <RichText.Content value={attributes.contentBBX} /></p>
                                                    </div>
                                                    <div class="flex flex-1 items-end justify-between text-sm">
                                                        <p class="text-gray-500">
                                                            <RichText.Content value={attributes.contentRBQ} /></p>
                                                        <div class="flex">
                                                            <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                                                                <RichText.Content value={attributes.contentBCU} /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                    <p>
                                        <RichText.Content value={attributes.contentlrM} /></p>
                                    <p>
                                        <RichText.Content value={attributes.contentwwB} /></p>
                                </div>
                                <p class="mt-0.5 text-sm text-gray-500">
                                    <RichText.Content value={attributes.contentlqT} /></p>
                                <div class="mt-6"> <span class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"><RichText.Content value={attributes.contentzLf} /></span>

                                </div>
                                <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <p>
                                        <RichText.Content value={attributes.contentYmN} />
                                            <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                                                <RichText.Content value={attributes.contentPub} /><span aria-hidden="true"><RichText.Content value={attributes.contenthjT} /></span>
                                            </button>
                                    </p>
                                </div>
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
        });
        