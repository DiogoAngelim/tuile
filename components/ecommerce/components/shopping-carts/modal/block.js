
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/modal', {
            title: 'modal',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8BbwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAcF/8QAHRABAAIBBQEAAAAAAAAAAAAAAAECBQMEESFRI//EABYBAQEBAAAAAAAAAAAAAAAAAAACA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANEBqkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABVQGSgAEqAapAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVUBkoABKgGqQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFCw2G0MZtafOttxMc31JjvnyPIaYMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMzOG0Mntb/OtdxEc01IjvnyfYaYCVANUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKqAyUAAlQDVIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqgMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJUA1SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqoDJQAD//Z" />),
            category: 'common',
            attributes: {
  "contentEiQ": {
    "type": "string",
    "default": "&#8203;"
  },
  "contentxhY": {
    "type": "string",
    "default": "Shopping Cart"
  },
  "contentxDe": {
    "type": "string",
    "default": "Close"
  },
  "contentqAd": {
    "type": "string",
    "default": "Items in your shopping cart"
  },
  "contentpOo": {
    "type": "string",
    "default": "Zip Tote Basket"
  },
  "contentUkA": {
    "type": "string",
    "default": "White and black"
  },
  "contentSYc": {
    "type": "string",
    "default": "$140.00"
  },
  "contentKfF": {
    "type": "string",
    "default": "Quantity, Zip Tote Basket"
  },
  "contentPcI": {
    "type": "string",
    "default": "1"
  },
  "contentrHU": {
    "type": "string",
    "default": "2"
  },
  "contentEBd": {
    "type": "string",
    "default": "3"
  },
  "contentZrB": {
    "type": "string",
    "default": "4"
  },
  "contentNRG": {
    "type": "string",
    "default": "5"
  },
  "contentOaH": {
    "type": "string",
    "default": "6"
  },
  "contentIYS": {
    "type": "string",
    "default": "7"
  },
  "contentMxX": {
    "type": "string",
    "default": "8"
  },
  "contentOHq": {
    "type": "string",
    "default": "Remove"
  },
  "contentQGC": {
    "type": "string",
    "default": "Throwback Hip Bag"
  },
  "contentkXP": {
    "type": "string",
    "default": "Salmon"
  },
  "contentHYB": {
    "type": "string",
    "default": "$90.00"
  },
  "contentKNY": {
    "type": "string",
    "default": "Quantity, Throwback Hip Bag"
  },
  "contentBBd": {
    "type": "string",
    "default": "1"
  },
  "contentXuT": {
    "type": "string",
    "default": "2"
  },
  "contentdyg": {
    "type": "string",
    "default": "3"
  },
  "contentvcK": {
    "type": "string",
    "default": "4"
  },
  "contentmYZ": {
    "type": "string",
    "default": "5"
  },
  "contentQEy": {
    "type": "string",
    "default": "6"
  },
  "contentMFq": {
    "type": "string",
    "default": "7"
  },
  "contenttgL": {
    "type": "string",
    "default": "8"
  },
  "contentthF": {
    "type": "string",
    "default": "Remove"
  },
  "contentmxj": {
    "type": "string",
    "default": "Order summary"
  },
  "contentaMV": {
    "type": "string",
    "default": "Subtotal"
  },
  "contentITt": {
    "type": "string",
    "default": "$262.00"
  },
  "contentyLx": {
    "type": "string",
    "default": "Shipping"
  },
  "contentcgW": {
    "type": "string",
    "default": "$5.00"
  },
  "contentOFl": {
    "type": "string",
    "default": "Tax"
  },
  "contentGBm": {
    "type": "string",
    "default": "$53.40"
  },
  "contentawG": {
    "type": "string",
    "default": "Order total"
  },
  "contentyNG": {
    "type": "string",
    "default": "$320.40"
  },
  "contentKef": {
    "type": "string",
    "default": "Continue to Payment"
  },
  "imageurlzOT": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/shopping-cart-page-04-product-03.jpg'
  },
  "imagealtgdY": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
  },
  "imageurlMBy": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/shopping-cart-page-04-product-01.jpg'
  },
  "imagealtacr": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
  },
  "svgCcd": {
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
            value={ attributes.svgCcd }
            onChange={ ( value ) => {
              setAttributes({ svgCcd: value });
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
        <div className="fixed z-10 inset-0 overflow-y-auto" role="dialog" aria-modal="true">
            <div className="flex min-h-screen text-center sm:block sm:px-6 lg:px-8" style="font-size: 0">
                <div className="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-500 sm:bg-opacity-75 sm:transition-opacity" aria-hidden="true"/> <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"><RichText tagName="span" value={attributes.contentEiQ} default="&#8203;" onChange={ (newtext) =>  {
        setAttributes({ contentEiQ: newtext });
      }}
    /></span>

                <div className="flex text-base text-left transform transition w-full sm:inline-block max-w-3xl sm:my-8 sm:align-middle">
                    <form className="w-full relative flex flex-col bg-white pt-6 pb-8 overflow-hidden sm:pb-6 sm:rounded-lg lg:py-8">
                        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
                             <h2 className="text-lg font-medium text-gray-900"><RichText tagName="span" value={attributes.contentxhY} default="Shopping Cart" onChange={ (newtext) =>  {
        setAttributes({ contentxhY: newtext });
      }}
    /></h2>

                            <button type="button" className="text-gray-400 hover:text-gray-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentxDe} default="Close" onChange={ (newtext) =>  {
        setAttributes({ contentxDe: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCcd }}
        >
      </svg>
      
                            </button>
                        </div>
                        <section aria-labelledby="cart-heading">
                             <h2 id="cart-heading" className="sr-only"><RichText tagName="span" value={attributes.contentqAd} default="Items in your shopping cart" onChange={ (newtext) =>  {
        setAttributes({ contentqAd: newtext });
      }}
    /></h2>

                            <ul role="list" className="divide-y divide-gray-200 px-4 sm:px-6 lg:px-8">
                                <li className="py-8 flex text-sm sm:items-center">
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlzOT: media.url,
            imagealtgdY: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlzOT } 
            alt={ attributes.imagealtgdY } 
            onClick={ open } 
            className="flex-none w-24 h-24 rounded-lg border border-gray-200 sm:w-32 sm:h-32"
          /> 
        )} 
      />
                                    <div className="ml-4 flex-auto grid gap-y-3 gap-x-5 grid-rows-1 grid-cols-1 items-start sm:ml-6 sm:flex sm:gap-0 sm:items-center">
                                        <div className="flex-auto row-end-1 sm:pr-6">
                                             <h3 className="font-medium text-gray-900">
                    <span><RichText tagName="span" value={attributes.contentpOo} default="Zip Tote Basket" onChange={ (newtext) =>  {
        setAttributes({ contentpOo: newtext });
      }}
    /></span>
                  </h3>

                                            <p className="mt-1 text-gray-500">
                                                <RichText tagName="span" value={attributes.contentUkA} default="White and black" onChange={ (newtext) => { setAttributes({ contentUkA: newtext }); }} /></p>
                                        </div>
                                        <p className="row-end-2 row-span-2 font-medium text-gray-900 sm:ml-6 sm:order-1 sm:flex-none sm:w-1/3 sm:text-right">
                                            <RichText tagName="span" value={attributes.contentSYc} default="$140.00" onChange={ (newtext) => { setAttributes({ contentSYc: newtext }); }} /></p>
                                        <div className="flex items-center sm:flex-none sm:block sm:text-center">
                                            <label for="quantity-0" className="sr-only">
                                                <RichText tagName="span" value={attributes.contentKfF} default="Quantity, Zip Tote Basket" onChange={ (newtext) => { setAttributes({ contentKfF: newtext }); }} /></label>
                                            <select id="quantity-0" name="quantity-0" className="block max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option value="1">
                                                    <RichText tagName="span" value={attributes.contentPcI} default="1" onChange={ (newtext) => { setAttributes({ contentPcI: newtext }); }} /></option>
                                                <option value="2">
                                                    <RichText tagName="span" value={attributes.contentrHU} default="2" onChange={ (newtext) => { setAttributes({ contentrHU: newtext }); }} /></option>
                                                <option value="3">
                                                    <RichText tagName="span" value={attributes.contentEBd} default="3" onChange={ (newtext) => { setAttributes({ contentEBd: newtext }); }} /></option>
                                                <option value="4">
                                                    <RichText tagName="span" value={attributes.contentZrB} default="4" onChange={ (newtext) => { setAttributes({ contentZrB: newtext }); }} /></option>
                                                <option value="5">
                                                    <RichText tagName="span" value={attributes.contentNRG} default="5" onChange={ (newtext) => { setAttributes({ contentNRG: newtext }); }} /></option>
                                                <option value="6">
                                                    <RichText tagName="span" value={attributes.contentOaH} default="6" onChange={ (newtext) => { setAttributes({ contentOaH: newtext }); }} /></option>
                                                <option value="7">
                                                    <RichText tagName="span" value={attributes.contentIYS} default="7" onChange={ (newtext) => { setAttributes({ contentIYS: newtext }); }} /></option>
                                                <option value="8">
                                                    <RichText tagName="span" value={attributes.contentMxX} default="8" onChange={ (newtext) => { setAttributes({ contentMxX: newtext }); }} /></option>
                                            </select>
                                            <button type="button" className="ml-4 font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-2"> <span><RichText tagName="span" value={attributes.contentOHq} default="Remove" onChange={ (newtext) =>  {
        setAttributes({ contentOHq: newtext });
      }}
    /></span>

                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-8 flex text-sm sm:items-center">
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlMBy: media.url,
            imagealtacr: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlMBy } 
            alt={ attributes.imagealtacr } 
            onClick={ open } 
            className="flex-none w-24 h-24 rounded-lg border border-gray-200 sm:w-32 sm:h-32"
          /> 
        )} 
      />
                                    <div className="ml-4 flex-auto grid gap-y-3 gap-x-5 grid-rows-1 grid-cols-1 items-start sm:ml-6 sm:flex sm:gap-0 sm:items-center">
                                        <div className="flex-auto row-end-1 sm:pr-6">
                                             <h3 className="font-medium text-gray-900">
                    <span><RichText tagName="span" value={attributes.contentQGC} default="Throwback Hip Bag" onChange={ (newtext) =>  {
        setAttributes({ contentQGC: newtext });
      }}
    /></span>
                  </h3>

                                            <p className="mt-1 text-gray-500">
                                                <RichText tagName="span" value={attributes.contentkXP} default="Salmon" onChange={ (newtext) => { setAttributes({ contentkXP: newtext }); }} /></p>
                                        </div>
                                        <p className="row-end-2 row-span-2 font-medium text-gray-900 sm:ml-6 sm:order-1 sm:flex-none sm:w-1/3 sm:text-right">
                                            <RichText tagName="span" value={attributes.contentHYB} default="$90.00" onChange={ (newtext) => { setAttributes({ contentHYB: newtext }); }} /></p>
                                        <div className="flex items-center sm:flex-none sm:block sm:text-center">
                                            <label for="quantity-1" className="sr-only">
                                                <RichText tagName="span" value={attributes.contentKNY} default="Quantity, Throwback Hip Bag" onChange={ (newtext) => { setAttributes({ contentKNY: newtext }); }} /></label>
                                            <select id="quantity-1" name="quantity-1" className="block max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option value="1">
                                                    <RichText tagName="span" value={attributes.contentBBd} default="1" onChange={ (newtext) => { setAttributes({ contentBBd: newtext }); }} /></option>
                                                <option value="2">
                                                    <RichText tagName="span" value={attributes.contentXuT} default="2" onChange={ (newtext) => { setAttributes({ contentXuT: newtext }); }} /></option>
                                                <option value="3">
                                                    <RichText tagName="span" value={attributes.contentdyg} default="3" onChange={ (newtext) => { setAttributes({ contentdyg: newtext }); }} /></option>
                                                <option value="4">
                                                    <RichText tagName="span" value={attributes.contentvcK} default="4" onChange={ (newtext) => { setAttributes({ contentvcK: newtext }); }} /></option>
                                                <option value="5">
                                                    <RichText tagName="span" value={attributes.contentmYZ} default="5" onChange={ (newtext) => { setAttributes({ contentmYZ: newtext }); }} /></option>
                                                <option value="6">
                                                    <RichText tagName="span" value={attributes.contentQEy} default="6" onChange={ (newtext) => { setAttributes({ contentQEy: newtext }); }} /></option>
                                                <option value="7">
                                                    <RichText tagName="span" value={attributes.contentMFq} default="7" onChange={ (newtext) => { setAttributes({ contentMFq: newtext }); }} /></option>
                                                <option value="8">
                                                    <RichText tagName="span" value={attributes.contenttgL} default="8" onChange={ (newtext) => { setAttributes({ contenttgL: newtext }); }} /></option>
                                            </select>
                                            <button type="button" className="ml-4 font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-2"> <span><RichText tagName="span" value={attributes.contentthF} default="Remove" onChange={ (newtext) =>  {
        setAttributes({ contentthF: newtext });
      }}
    /></span>

                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section aria-labelledby="summary-heading" className="mt-auto sm:px-6 lg:px-8">
                            <div className="bg-gray-50 p-6 sm:p-8 sm:rounded-lg">
                                 <h2 id="summary-heading" className="sr-only"><RichText tagName="span" value={attributes.contentmxj} default="Order summary" onChange={ (newtext) =>  {
        setAttributes({ contentmxj: newtext });
      }}
    /></h2>

                                <div className="flow-root">
                                    <dl className="-my-4 text-sm divide-y divide-gray-200">
                                        <div className="py-4 flex items-center justify-between"> <dt className="text-gray-600"><RichText tagName="span" value={attributes.contentaMV} default="Subtotal" onChange={ (newtext) =>  {
        setAttributes({ contentaMV: newtext });
      }}
    /></dt>

                                            <dd className="font-medium text-gray-900">
                                                <RichText tagName="span" value={attributes.contentITt} default="$262.00" onChange={ (newtext) => { setAttributes({ contentITt: newtext }); }} /></dd>
                                        </div>
                                        <div className="py-4 flex items-center justify-between"> <dt className="text-gray-600"><RichText tagName="span" value={attributes.contentyLx} default="Shipping" onChange={ (newtext) =>  {
        setAttributes({ contentyLx: newtext });
      }}
    /></dt>

                                            <dd className="font-medium text-gray-900">
                                                <RichText tagName="span" value={attributes.contentcgW} default="$5.00" onChange={ (newtext) => { setAttributes({ contentcgW: newtext }); }} /></dd>
                                        </div>
                                        <div className="py-4 flex items-center justify-between"> <dt className="text-gray-600"><RichText tagName="span" value={attributes.contentOFl} default="Tax" onChange={ (newtext) =>  {
        setAttributes({ contentOFl: newtext });
      }}
    /></dt>

                                            <dd className="font-medium text-gray-900">
                                                <RichText tagName="span" value={attributes.contentGBm} default="$53.40" onChange={ (newtext) => { setAttributes({ contentGBm: newtext }); }} /></dd>
                                        </div>
                                        <div className="py-4 flex items-center justify-between"> <dt className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentawG} default="Order total" onChange={ (newtext) =>  {
        setAttributes({ contentawG: newtext });
      }}
    /></dt>

                                            <dd className="text-base font-medium text-gray-900">
                                                <RichText tagName="span" value={attributes.contentyNG} default="$320.40" onChange={ (newtext) => { setAttributes({ contentyNG: newtext }); }} /></dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </section>
                        <div className="mt-8 flex justify-end px-4 sm:px-6 lg:px-8">
                            <button type="submit" className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                                <RichText tagName="span" value={attributes.contentKef} default="Continue to Payment" onChange={ (newtext) => { setAttributes({ contentKef: newtext }); }} /></button>
                        </div>
                    </form>
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
        <div class="fixed z-10 inset-0 overflow-y-auto" role="dialog" aria-modal="true">
            <div class="flex min-h-screen text-center sm:block sm:px-6 lg:px-8" style="font-size: 0">
                <div class="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-500 sm:bg-opacity-75 sm:transition-opacity" aria-hidden="true"/> <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"><RichText.Content value={attributes.contentEiQ} /></span>

                <div class="flex text-base text-left transform transition w-full sm:inline-block max-w-3xl sm:my-8 sm:align-middle">
                    <form class="w-full relative flex flex-col bg-white pt-6 pb-8 overflow-hidden sm:pb-6 sm:rounded-lg lg:py-8">
                        <div class="flex items-center justify-between px-4 sm:px-6 lg:px-8">
                             <h2 class="text-lg font-medium text-gray-900"><RichText.Content value={attributes.contentxhY} /></h2>

                            <button type="button" class="text-gray-400 hover:text-gray-500"> <span class="sr-only"><RichText.Content value={attributes.contentxDe} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCcd }}
        >
      </svg>
      
                            </button>
                        </div>
                        <section aria-labelledby="cart-heading">
                             <h2 id="cart-heading" class="sr-only"><RichText.Content value={attributes.contentqAd} /></h2>

                            <ul role="list" class="divide-y divide-gray-200 px-4 sm:px-6 lg:px-8">
                                <li class="py-8 flex text-sm sm:items-center">
                                    
      <img
            src={ attributes.imageurlzOT } 
            alt={ attributes.imagealtgdY } 
            class="flex-none w-24 h-24 rounded-lg border border-gray-200 sm:w-32 sm:h-32"
          />
                                    <div class="ml-4 flex-auto grid gap-y-3 gap-x-5 grid-rows-1 grid-cols-1 items-start sm:ml-6 sm:flex sm:gap-0 sm:items-center">
                                        <div class="flex-auto row-end-1 sm:pr-6">
                                             <h3 class="font-medium text-gray-900">
                    <span><RichText.Content value={attributes.contentpOo} /></span>
                  </h3>

                                            <p class="mt-1 text-gray-500">
                                                <RichText.Content value={attributes.contentUkA} /></p>
                                        </div>
                                        <p class="row-end-2 row-span-2 font-medium text-gray-900 sm:ml-6 sm:order-1 sm:flex-none sm:w-1/3 sm:text-right">
                                            <RichText.Content value={attributes.contentSYc} /></p>
                                        <div class="flex items-center sm:flex-none sm:block sm:text-center">
                                            <label for="quantity-0" class="sr-only">
                                                <RichText.Content value={attributes.contentKfF} /></label>
                                            <select id="quantity-0" name="quantity-0" class="block max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option value="1">
                                                    <RichText.Content value={attributes.contentPcI} /></option>
                                                <option value="2">
                                                    <RichText.Content value={attributes.contentrHU} /></option>
                                                <option value="3">
                                                    <RichText.Content value={attributes.contentEBd} /></option>
                                                <option value="4">
                                                    <RichText.Content value={attributes.contentZrB} /></option>
                                                <option value="5">
                                                    <RichText.Content value={attributes.contentNRG} /></option>
                                                <option value="6">
                                                    <RichText.Content value={attributes.contentOaH} /></option>
                                                <option value="7">
                                                    <RichText.Content value={attributes.contentIYS} /></option>
                                                <option value="8">
                                                    <RichText.Content value={attributes.contentMxX} /></option>
                                            </select>
                                            <button type="button" class="ml-4 font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-2"> <span><RichText.Content value={attributes.contentOHq} /></span>

                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="py-8 flex text-sm sm:items-center">
                                    
      <img
            src={ attributes.imageurlMBy } 
            alt={ attributes.imagealtacr } 
            class="flex-none w-24 h-24 rounded-lg border border-gray-200 sm:w-32 sm:h-32"
          />
                                    <div class="ml-4 flex-auto grid gap-y-3 gap-x-5 grid-rows-1 grid-cols-1 items-start sm:ml-6 sm:flex sm:gap-0 sm:items-center">
                                        <div class="flex-auto row-end-1 sm:pr-6">
                                             <h3 class="font-medium text-gray-900">
                    <span><RichText.Content value={attributes.contentQGC} /></span>
                  </h3>

                                            <p class="mt-1 text-gray-500">
                                                <RichText.Content value={attributes.contentkXP} /></p>
                                        </div>
                                        <p class="row-end-2 row-span-2 font-medium text-gray-900 sm:ml-6 sm:order-1 sm:flex-none sm:w-1/3 sm:text-right">
                                            <RichText.Content value={attributes.contentHYB} /></p>
                                        <div class="flex items-center sm:flex-none sm:block sm:text-center">
                                            <label for="quantity-1" class="sr-only">
                                                <RichText.Content value={attributes.contentKNY} /></label>
                                            <select id="quantity-1" name="quantity-1" class="block max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option value="1">
                                                    <RichText.Content value={attributes.contentBBd} /></option>
                                                <option value="2">
                                                    <RichText.Content value={attributes.contentXuT} /></option>
                                                <option value="3">
                                                    <RichText.Content value={attributes.contentdyg} /></option>
                                                <option value="4">
                                                    <RichText.Content value={attributes.contentvcK} /></option>
                                                <option value="5">
                                                    <RichText.Content value={attributes.contentmYZ} /></option>
                                                <option value="6">
                                                    <RichText.Content value={attributes.contentQEy} /></option>
                                                <option value="7">
                                                    <RichText.Content value={attributes.contentMFq} /></option>
                                                <option value="8">
                                                    <RichText.Content value={attributes.contenttgL} /></option>
                                            </select>
                                            <button type="button" class="ml-4 font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-2"> <span><RichText.Content value={attributes.contentthF} /></span>

                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section aria-labelledby="summary-heading" class="mt-auto sm:px-6 lg:px-8">
                            <div class="bg-gray-50 p-6 sm:p-8 sm:rounded-lg">
                                 <h2 id="summary-heading" class="sr-only"><RichText.Content value={attributes.contentmxj} /></h2>

                                <div class="flow-root">
                                    <dl class="-my-4 text-sm divide-y divide-gray-200">
                                        <div class="py-4 flex items-center justify-between"> <dt class="text-gray-600"><RichText.Content value={attributes.contentaMV} /></dt>

                                            <dd class="font-medium text-gray-900">
                                                <RichText.Content value={attributes.contentITt} /></dd>
                                        </div>
                                        <div class="py-4 flex items-center justify-between"> <dt class="text-gray-600"><RichText.Content value={attributes.contentyLx} /></dt>

                                            <dd class="font-medium text-gray-900">
                                                <RichText.Content value={attributes.contentcgW} /></dd>
                                        </div>
                                        <div class="py-4 flex items-center justify-between"> <dt class="text-gray-600"><RichText.Content value={attributes.contentOFl} /></dt>

                                            <dd class="font-medium text-gray-900">
                                                <RichText.Content value={attributes.contentGBm} /></dd>
                                        </div>
                                        <div class="py-4 flex items-center justify-between"> <dt class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentawG} /></dt>

                                            <dd class="text-base font-medium text-gray-900">
                                                <RichText.Content value={attributes.contentyNG} /></dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </section>
                        <div class="mt-8 flex justify-end px-4 sm:px-6 lg:px-8">
                            <button type="submit" class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                                <RichText.Content value={attributes.contentKef} /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        