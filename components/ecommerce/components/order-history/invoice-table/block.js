
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/invoice-table', {
            title: 'invoice table',
            icon: (<img src="data:image/jpeg;base64,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PCPW35ScI9bflKgE8I9bflJwj1t+UqATwj1t+UnCPW35SoBPCPW35ScI9bflKgE8I9bflJwj1t+UqATwj1t+UnCPW35SoBPCPW35ScI9bflKgE8I9bflJwj1t+UqATwj1t+UnCPW35SoBPCPW35ScI9bflKgE8I9bflJwj1t+UqATwj1t+UnCPW35SoBPCPW35ScI9bflKgE8I9bflJwj1t+UqATwj1t+UnCPW35SoBPCPW35ScI9bflKgE8I9bflJwj1t+UqATwj1t+UnCPW35SoBPCPW35ScI9bflKgE8I9bflJwj1t+UqATwj1t+UnCPW35SoBPCPW35ScI9bflKgE8I9bflJwj1t+UqATwj1t+UnCPW35SoBPCPW35ScI9bflKgE8I9bflJwj1t+UqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z" />),
            category: 'common',
            attributes: {
  "contentAUA": {
    "type": "string",
    "default": "Order history"
  },
  "contentmdP": {
    "type": "string",
    "default": "Check the status of recent orders, manage returns, and download invoices."
  },
  "contentARI": {
    "type": "string",
    "default": "Recent orders"
  },
  "contentvKF": {
    "type": "string",
    "default": "Order placed on "
  },
  "contentrFr": {
    "type": "string",
    "default": "January 22, 2021"
  },
  "contentwNj": {
    "type": "string",
    "default": "Date placed"
  },
  "contentJVa": {
    "type": "string",
    "default": "January 22, 2021"
  },
  "contentaTm": {
    "type": "string",
    "default": "Order number"
  },
  "contentmVA": {
    "type": "string",
    "default": "WU88191111"
  },
  "contentYhQ": {
    "type": "string",
    "default": "Total amount"
  },
  "contentFzO": {
    "type": "string",
    "default": "$238.00"
  },
  "contentTBv": {
    "type": "string",
    "default": "\n              View Invoice\n              "
  },
  "contentmkp": {
    "type": "string",
    "default": "for order WU88191111"
  },
  "contentkKQ": {
    "type": "string",
    "default": "\n              Products\n            "
  },
  "contentixr": {
    "type": "string",
    "default": "Product"
  },
  "contentino": {
    "type": "string",
    "default": "Price"
  },
  "contentCyH": {
    "type": "string",
    "default": "Status"
  },
  "contentyry": {
    "type": "string",
    "default": "Info"
  },
  "contentury": {
    "type": "string",
    "default": "Machined Pen and Pencil Set"
  },
  "contentOOm": {
    "type": "string",
    "default": "$70.00"
  },
  "contentshf": {
    "type": "string",
    "default": "$70.00"
  },
  "contentutY": {
    "type": "string",
    "default": "Delivered Jan 25, 2021"
  },
  "contenteCb": {
    "type": "string",
    "default": "View"
  },
  "contentbRJ": {
    "type": "string",
    "default": " Product"
  },
  "contentZdm": {
    "type": "string",
    "default": ", Machined Pen and Pencil Set"
  },
  "imageurlhmr": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/order-history-page-02-product-01.jpg'
  },
  "imagealtmiA": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
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
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pb-24 lg:px-8">
                <div className="max-w-xl">
                     <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"><RichText tagName="span" value={attributes.contentAUA} default="Order history" onChange={ (newtext) =>  {
        setAttributes({ contentAUA: newtext });
      }}
    /></h1>

                    <p className="mt-2 text-sm text-gray-500">
                        <RichText tagName="span" value={attributes.contentmdP} default="Check the status of recent orders, manage returns, and download invoices." onChange={ (newtext) => { setAttributes({ contentmdP: newtext }); }} /></p>
                </div>
                <div className="mt-16">
                     <h2 className="sr-only"><RichText tagName="span" value={attributes.contentARI} default="Recent orders" onChange={ (newtext) =>  {
        setAttributes({ contentARI: newtext });
      }}
    /></h2>

                    <div className="space-y-20">
                        <div>
                             <h3 className="sr-only"><RichText tagName="span" value={attributes.contentvKF} default="Order placed on" onChange={ (newtext) =>  {
        setAttributes({ contentvKF: newtext });
      }}
    /><time datetime="2021-01-22"><RichText tagName="span" value={attributes.contentrFr} default="January 22, 2021" onChange={ (newtext) =>  {
        setAttributes({ contentrFr: newtext });
      }}
    /></time></h3>

                            <div className="bg-gray-50 rounded-lg py-6 px-4 sm:px-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
                                <dl className="divide-y divide-gray-200 space-y-6 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
                                    <div className="flex justify-between sm:block"> <dt className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentwNj} default="Date placed" onChange={ (newtext) =>  {
        setAttributes({ contentwNj: newtext });
      }}
    /></dt>

                                        <dd className="sm:mt-1">
                                            <time datetime="2021-01-22">
                                                <RichText tagName="span" value={attributes.contentJVa} default="January 22, 2021" onChange={ (newtext) => { setAttributes({ contentJVa: newtext }); }} /></time>
                                        </dd>
                                    </div>
                                    <div className="flex justify-between pt-6 sm:block sm:pt-0"> <dt className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentaTm} default="Order number" onChange={ (newtext) =>  {
        setAttributes({ contentaTm: newtext });
      }}
    /></dt>

                                        <dd className="sm:mt-1">
                                            <RichText tagName="span" value={attributes.contentmVA} default="WU88191111" onChange={ (newtext) => { setAttributes({ contentmVA: newtext }); }} /></dd>
                                    </div>
                                    <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0"> <dt><RichText tagName="span" value={attributes.contentYhQ} default="Total amount" onChange={ (newtext) =>  {
        setAttributes({ contentYhQ: newtext });
      }}
    /></dt>

                                        <dd className="sm:mt-1">
                                            <RichText tagName="span" value={attributes.contentFzO} default="$238.00" onChange={ (newtext) => { setAttributes({ contentFzO: newtext }); }} /></dd>
                                    </div>
                                </dl> <span className="w-full flex items-center justify-center bg-white mt-6 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:mt-0"><RichText tagName="span" value={attributes.contentTBv} default="View Invoice" onChange={ (newtext) =>  {
        setAttributes({ contentTBv: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentmkp} default="for order WU88191111" onChange={ (newtext) =>  {
        setAttributes({ contentmkp: newtext });
      }}
    /></span>
</span>
                            </div>
                            <table className="mt-4 w-full text-gray-500 sm:mt-6">
                                <caption className="sr-only">
                                    <RichText tagName="span" value={attributes.contentkKQ} default="Products" onChange={ (newtext) => { setAttributes({ contentkKQ: newtext }); }} /></caption>
                                <thead className="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
                                    <tr>
                                        <th scope="col" className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal">
                                            <RichText tagName="span" value={attributes.contentixr} default="Product" onChange={ (newtext) => { setAttributes({ contentixr: newtext }); }} /></th>
                                        <th scope="col" className="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell">
                                            <RichText tagName="span" value={attributes.contentino} default="Price" onChange={ (newtext) => { setAttributes({ contentino: newtext }); }} /></th>
                                        <th scope="col" className="hidden pr-8 py-3 font-normal sm:table-cell">
                                            <RichText tagName="span" value={attributes.contentCyH} default="Status" onChange={ (newtext) => { setAttributes({ contentCyH: newtext }); }} /></th>
                                        <th scope="col" className="w-0 py-3 font-normal text-right">
                                            <RichText tagName="span" value={attributes.contentyry} default="Info" onChange={ (newtext) => { setAttributes({ contentyry: newtext }); }} /></th>
                                    </tr>
                                </thead>
                                <tbody className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
                                    <tr>
                                        <td className="py-6 pr-8">
                                            <div className="flex items-center">
                                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlhmr: media.url,
            imagealtmiA: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlhmr } 
            alt={ attributes.imagealtmiA } 
            onClick={ open } 
            className="w-16 h-16 object-center object-cover rounded mr-6"
          /> 
        )} 
      />
                                                <div>
                                                    <div className="font-medium text-gray-900">
                                                        <RichText tagName="span" value={attributes.contentury} default="Machined Pen and Pencil Set" onChange={ (newtext) => { setAttributes({ contentury: newtext }); }} /></div>
                                                    <div className="mt-1 sm:hidden">
                                                        <RichText tagName="span" value={attributes.contentOOm} default="$70.00" onChange={ (newtext) => { setAttributes({ contentOOm: newtext }); }} /></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="hidden py-6 pr-8 sm:table-cell">
                                            <RichText tagName="span" value={attributes.contentshf} default="$70.00" onChange={ (newtext) => { setAttributes({ contentshf: newtext }); }} /></td>
                                        <td className="hidden py-6 pr-8 sm:table-cell">
                                            <RichText tagName="span" value={attributes.contentutY} default="Delivered Jan 25, 2021" onChange={ (newtext) => { setAttributes({ contentutY: newtext }); }} /></td>
                                        <td className="py-6 font-medium text-right whitespace-nowrap"> <span className="text-indigo-600"><RichText tagName="span" value={attributes.contenteCb} default="View" onChange={ (newtext) =>  {
        setAttributes({ contenteCb: newtext });
      }}
    /><span className="hidden lg:inline"><RichText tagName="span" value={attributes.contentbRJ} default="Product" onChange={ (newtext) =>  {
        setAttributes({ contentbRJ: newtext });
      }}
    /></span><span className="sr-only"><RichText tagName="span" value={attributes.contentZdm} default=", Machined Pen and Pencil Set" onChange={ (newtext) =>  {
        setAttributes({ contentZdm: newtext });
      }}
    /></span></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
            <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pb-24 lg:px-8">
                <div class="max-w-xl">
                     <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"><RichText.Content value={attributes.contentAUA} /></h1>

                    <p class="mt-2 text-sm text-gray-500">
                        <RichText.Content value={attributes.contentmdP} /></p>
                </div>
                <div class="mt-16">
                     <h2 class="sr-only"><RichText.Content value={attributes.contentARI} /></h2>

                    <div class="space-y-20">
                        <div>
                             <h3 class="sr-only"><RichText.Content value={attributes.contentvKF} /><time datetime="2021-01-22"><RichText.Content value={attributes.contentrFr} /></time></h3>

                            <div class="bg-gray-50 rounded-lg py-6 px-4 sm:px-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
                                <dl class="divide-y divide-gray-200 space-y-6 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
                                    <div class="flex justify-between sm:block"> <dt class="font-medium text-gray-900"><RichText.Content value={attributes.contentwNj} /></dt>

                                        <dd class="sm:mt-1">
                                            <time datetime="2021-01-22">
                                                <RichText.Content value={attributes.contentJVa} /></time>
                                        </dd>
                                    </div>
                                    <div class="flex justify-between pt-6 sm:block sm:pt-0"> <dt class="font-medium text-gray-900"><RichText.Content value={attributes.contentaTm} /></dt>

                                        <dd class="sm:mt-1">
                                            <RichText.Content value={attributes.contentmVA} /></dd>
                                    </div>
                                    <div class="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0"> <dt><RichText.Content value={attributes.contentYhQ} /></dt>

                                        <dd class="sm:mt-1">
                                            <RichText.Content value={attributes.contentFzO} /></dd>
                                    </div>
                                </dl> <span class="w-full flex items-center justify-center bg-white mt-6 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:mt-0"><RichText.Content value={attributes.contentTBv} /><span class="sr-only"><RichText.Content value={attributes.contentmkp} /></span>
</span>
                            </div>
                            <table class="mt-4 w-full text-gray-500 sm:mt-6">
                                <caption class="sr-only">
                                    <RichText.Content value={attributes.contentkKQ} /></caption>
                                <thead class="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
                                    <tr>
                                        <th scope="col" class="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal">
                                            <RichText.Content value={attributes.contentixr} /></th>
                                        <th scope="col" class="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell">
                                            <RichText.Content value={attributes.contentino} /></th>
                                        <th scope="col" class="hidden pr-8 py-3 font-normal sm:table-cell">
                                            <RichText.Content value={attributes.contentCyH} /></th>
                                        <th scope="col" class="w-0 py-3 font-normal text-right">
                                            <RichText.Content value={attributes.contentyry} /></th>
                                    </tr>
                                </thead>
                                <tbody class="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
                                    <tr>
                                        <td class="py-6 pr-8">
                                            <div class="flex items-center">
                                                
      <img
            src={ attributes.imageurlhmr } 
            alt={ attributes.imagealtmiA } 
            class="w-16 h-16 object-center object-cover rounded mr-6"
          />
                                                <div>
                                                    <div class="font-medium text-gray-900">
                                                        <RichText.Content value={attributes.contentury} /></div>
                                                    <div class="mt-1 sm:hidden">
                                                        <RichText.Content value={attributes.contentOOm} /></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="hidden py-6 pr-8 sm:table-cell">
                                            <RichText.Content value={attributes.contentshf} /></td>
                                        <td class="hidden py-6 pr-8 sm:table-cell">
                                            <RichText.Content value={attributes.contentutY} /></td>
                                        <td class="py-6 font-medium text-right whitespace-nowrap"> <span class="text-indigo-600"><RichText.Content value={attributes.contenteCb} /><span class="hidden lg:inline"><RichText.Content value={attributes.contentbRJ} /></span><span class="sr-only"><RichText.Content value={attributes.contentZdm} /></span></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
        