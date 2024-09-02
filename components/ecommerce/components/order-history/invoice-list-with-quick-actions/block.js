
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/invoice-list-with-quick-actions', {
            title: 'invoice list with quick actions',
            icon: (<img src="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMrEAAAAAAAAAAAAAAAAAAAAAAAysTKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMqM18/IEBLsn5HZPyBES7J+R2T8gREuyfkdk/IERLsn5HZPyBES7J+R2T8gREuyfkdk/IERLsn5HZPyBES7J+R2T8gREuyfkdk/IERLsn5HZPyBES7J+R2T8gRZUYp5+aQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z" />),
            category: 'common',
            attributes: {
  "contenthYq": {
    "type": "string",
    "default": "Your Orders"
  },
  "contentSOM": {
    "type": "string",
    "default": "Check the status of recent orders, manage returns, and discover similar products."
  },
  "contentrTC": {
    "type": "string",
    "default": "Order #4376"
  },
  "contentOzl": {
    "type": "string",
    "default": "Delivered on January 22, 2021"
  },
  "contentODf": {
    "type": "string",
    "default": "Manage order"
  },
  "contentyOr": {
    "type": "string",
    "default": "View Invoice"
  },
  "contentQnm": {
    "type": "string",
    "default": "Machined Brass Puzzle"
  },
  "contentTrm": {
    "type": "string",
    "default": "Brass"
  },
  "contentBFC": {
    "type": "string",
    "default": "&middot;"
  },
  "contentvFS": {
    "type": "string",
    "default": "3&quot; x 3&quot; x 3&quot;"
  },
  "contentIIw": {
    "type": "string",
    "default": "$95.00"
  },
  "contentGeg": {
    "type": "string",
    "default": "Buy again"
  },
  "contentIpD": {
    "type": "string",
    "default": "Shop similar"
  },
  "imageurleUt": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/order-history-page-07-product-01.jpg'
  },
  "imagealtIjP": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Brass puzzle in the shape of a jack with overlapping rounded posts."
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
            <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
                <div className="max-w-xl">
                     <h1 id="your-orders-heading" className="text-3xl font-extrabold tracking-tight text-gray-900"><RichText tagName="span" value={attributes.contenthYq} default="Your Orders" onChange={ (newtext) =>  {
        setAttributes({ contenthYq: newtext });
      }}
    /></h1>

                    <p className="mt-2 text-sm text-gray-500">
                        <RichText tagName="span" value={attributes.contentSOM} default="Check the status of recent orders, manage returns, and discover similar products." onChange={ (newtext) => { setAttributes({ contentSOM: newtext }); }} /></p>
                </div>
                <div className="mt-12 space-y-16 sm:mt-16">
                    <section aria-labelledby="4376-heading">
                        <div className="space-y-1 md:flex md:items-baseline md:space-y-0 md:space-x-4">
                             <h2 id="4376-heading" className="text-lg font-medium text-gray-900 md:flex-shrink-0"><RichText tagName="span" value={attributes.contentrTC} default="Order #4376" onChange={ (newtext) =>  {
        setAttributes({ contentrTC: newtext });
      }}
    /></h2>

                            <div className="space-y-5 md:flex-1 md:min-w-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
                                <p className="text-sm font-medium text-gray-500">
                                    <RichText tagName="span" value={attributes.contentOzl} default="Delivered on January 22, 2021" onChange={ (newtext) => { setAttributes({ contentOzl: newtext }); }} /></p>
                                <div className="flex text-sm font-medium"> <span className="text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentODf} default="Manage order" onChange={ (newtext) =>  {
        setAttributes({ contentODf: newtext });
      }}
    /></span>

                                    <div className="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6"> <span className="text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentyOr} default="View Invoice" onChange={ (newtext) =>  {
        setAttributes({ contentyOr: newtext });
      }}
    /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 -mb-6 flow-root border-t border-gray-200 divide-y divide-gray-200">
                            <div className="py-6 sm:flex">
                                <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurleUt: media.url,
            imagealtIjP: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurleUt } 
            alt={ attributes.imagealtIjP } 
            onClick={ open } 
            className="flex-none w-20 h-20 rounded-md object-center object-cover sm:w-48 sm:h-48"
          /> 
        )} 
      />
                                    <div className="pt-1.5 min-w-0 flex-1 sm:pt-0">
                                         <h3 className="text-sm font-medium text-gray-900">
                  <span><RichText tagName="span" value={attributes.contentQnm} default="Machined Brass Puzzle" onChange={ (newtext) =>  {
        setAttributes({ contentQnm: newtext });
      }}
    /></span>
                </h3>

                                        <p className="text-sm text-gray-500 truncate"> <span><RichText tagName="span" value={attributes.contentTrm} default="Brass" onChange={ (newtext) =>  {
        setAttributes({ contentTrm: newtext });
      }}
    /></span>
 <span className="mx-1 text-gray-400" aria-hidden="true"><RichText tagName="span" value={attributes.contentBFC} default="&middot;" onChange={ (newtext) =>  {
        setAttributes({ contentBFC: newtext });
      }}
    /></span>
 <span><RichText tagName="span" value={attributes.contentvFS} default="3&quot; x 3&quot; x 3&quot;" onChange={ (newtext) =>  {
        setAttributes({ contentvFS: newtext });
      }}
    /></span>

                                        </p>
                                        <p className="mt-1 font-medium text-gray-900">
                                            <RichText tagName="span" value={attributes.contentIIw} default="$95.00" onChange={ (newtext) => { setAttributes({ contentIIw: newtext }); }} /></p>
                                    </div>
                                </div>
                                <div className="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:flex-none sm:w-40">
                                    <button type="button" className="w-full flex items-center justify-center bg-indigo-600 py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0">
                                        <RichText tagName="span" value={attributes.contentGeg} default="Buy again" onChange={ (newtext) => { setAttributes({ contentGeg: newtext }); }} /></button>
                                    <button type="button" className="w-full flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0">
                                        <RichText tagName="span" value={attributes.contentIpD} default="Shop similar" onChange={ (newtext) => { setAttributes({ contentIpD: newtext }); }} /></button>
                                </div>
                            </div>
                        </div>
                    </section>
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
            <div class="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
                <div class="max-w-xl">
                     <h1 id="your-orders-heading" class="text-3xl font-extrabold tracking-tight text-gray-900"><RichText.Content value={attributes.contenthYq} /></h1>

                    <p class="mt-2 text-sm text-gray-500">
                        <RichText.Content value={attributes.contentSOM} /></p>
                </div>
                <div class="mt-12 space-y-16 sm:mt-16">
                    <section aria-labelledby="4376-heading">
                        <div class="space-y-1 md:flex md:items-baseline md:space-y-0 md:space-x-4">
                             <h2 id="4376-heading" class="text-lg font-medium text-gray-900 md:flex-shrink-0"><RichText.Content value={attributes.contentrTC} /></h2>

                            <div class="space-y-5 md:flex-1 md:min-w-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
                                <p class="text-sm font-medium text-gray-500">
                                    <RichText.Content value={attributes.contentOzl} /></p>
                                <div class="flex text-sm font-medium"> <span class="text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentODf} /></span>

                                    <div class="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6"> <span class="text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentyOr} /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 -mb-6 flow-root border-t border-gray-200 divide-y divide-gray-200">
                            <div class="py-6 sm:flex">
                                <div class="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                                    
      <img
            src={ attributes.imageurleUt } 
            alt={ attributes.imagealtIjP } 
            class="flex-none w-20 h-20 rounded-md object-center object-cover sm:w-48 sm:h-48"
          />
                                    <div class="pt-1.5 min-w-0 flex-1 sm:pt-0">
                                         <h3 class="text-sm font-medium text-gray-900">
                  <span><RichText.Content value={attributes.contentQnm} /></span>
                </h3>

                                        <p class="text-sm text-gray-500 truncate"> <span><RichText.Content value={attributes.contentTrm} /></span>
 <span class="mx-1 text-gray-400" aria-hidden="true"><RichText.Content value={attributes.contentBFC} /></span>
 <span><RichText.Content value={attributes.contentvFS} /></span>

                                        </p>
                                        <p class="mt-1 font-medium text-gray-900">
                                            <RichText.Content value={attributes.contentIIw} /></p>
                                    </div>
                                </div>
                                <div class="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:flex-none sm:w-40">
                                    <button type="button" class="w-full flex items-center justify-center bg-indigo-600 py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0">
                                        <RichText.Content value={attributes.contentGeg} /></button>
                                    <button type="button" class="w-full flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0">
                                        <RichText.Content value={attributes.contentIpD} /></button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        