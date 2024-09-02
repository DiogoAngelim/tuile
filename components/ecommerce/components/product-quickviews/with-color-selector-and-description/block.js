
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-color-selector-and-description', {
            title: 'with color selector and description',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8BbwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEHBf/EABYQAQEBAAAAAAAAAAAAAAAAAAARAf/EABYBAQEBAAAAAAAAAAAAAAAAAAACA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOiA1SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADVQGSgAGVANUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABQAqAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAoi0AKAAAogCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1UBkoABlQDVIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAgNXAZKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZSIrVIqAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADVQGSgAGVANUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAACAmg1gBkoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlAmK1SoAKIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANVAZKAAf/Z" />),
            category: 'common',
            attributes: {
  "contentCxN": {
    "type": "string",
    "default": "&#8203;"
  },
  "contentpZi": {
    "type": "string",
    "default": "Close"
  },
  "contentAQv": {
    "type": "string",
    "default": "Zip Tote Basket"
  },
  "contentQRr": {
    "type": "string",
    "default": "Product information"
  },
  "contentMoD": {
    "type": "string",
    "default": "$220"
  },
  "contentPht": {
    "type": "string",
    "default": "Reviews"
  },
  "contentaow": {
    "type": "string",
    "default": "3.9 out of 5 stars"
  },
  "contentzNw": {
    "type": "string",
    "default": "Description"
  },
  "contentEQW": {
    "type": "string",
    "default": "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use."
  },
  "contenttVX": {
    "type": "string",
    "default": "Product options"
  },
  "contenttoE": {
    "type": "string",
    "default": "Color"
  },
  "contentGOv": {
    "type": "string",
    "default": "Choose a color"
  },
  "contentDqh": {
    "type": "string",
    "default": "Washed Black"
  },
  "contentWrv": {
    "type": "string",
    "default": "White"
  },
  "contentpeJ": {
    "type": "string",
    "default": "Washed Gray"
  },
  "contenteiO": {
    "type": "string",
    "default": "Add to bag"
  },
  "contentAjI": {
    "type": "string",
    "default": "View full details"
  },
  "imageurlFKT": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/product-page-03-product-04.jpg'
  },
  "imagealtXYo": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Back angled view with bag open and handles to the side."
  },
  "svgByC": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgwax": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgKWY": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgzpQ": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgOik": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgHvS": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
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
            value={ attributes.svgByC }
            onChange={ ( value ) => {
              setAttributes({ svgByC: value });
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
            value={ attributes.svgwax }
            onChange={ ( value ) => {
              setAttributes({ svgwax: value });
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
            value={ attributes.svgKWY }
            onChange={ ( value ) => {
              setAttributes({ svgKWY: value });
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
            value={ attributes.svgzpQ }
            onChange={ ( value ) => {
              setAttributes({ svgzpQ: value });
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
            value={ attributes.svgOik }
            onChange={ ( value ) => {
              setAttributes({ svgOik: value });
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
            value={ attributes.svgHvS }
            onChange={ ( value ) => {
              setAttributes({ svgHvS: value });
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
            <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4" style="font-size: 0">
                <div className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" aria-hidden="true"/> <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true"><RichText tagName="span" value={attributes.contentCxN} default="&#8203;" onChange={ (newtext) =>  {
        setAttributes({ contentCxN: newtext });
      }}
    /></span>

                <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                    <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <button type="button" className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"> <span className="sr-only"><RichText tagName="span" value={attributes.contentpZi} default="Close" onChange={ (newtext) =>  {
        setAttributes({ contentpZi: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgByC }}
        >
      </svg>
      
                        </button>
                        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                            <div className="sm:col-span-4 lg:col-span-5">
                                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlFKT: media.url,
            imagealtXYo: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlFKT } 
            alt={ attributes.imagealtXYo } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                </div>
                            </div>
                            <div className="sm:col-span-8 lg:col-span-7">
                                 <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12"><RichText tagName="span" value={attributes.contentAQv} default="Zip Tote Basket" onChange={ (newtext) =>  {
        setAttributes({ contentAQv: newtext });
      }}
    /></h2>

                                <section aria-labelledby="information-heading" className="mt-3">
                                     <h3 id="information-heading" className="sr-only"><RichText tagName="span" value={attributes.contentQRr} default="Product information" onChange={ (newtext) =>  {
        setAttributes({ contentQRr: newtext });
      }}
    /></h3>

                                    <p className="text-2xl text-gray-900">
                                        <RichText tagName="span" value={attributes.contentMoD} default="$220" onChange={ (newtext) => { setAttributes({ contentMoD: newtext }); }} /></p>
                                    <div className="mt-3">
                                         <h4 className="sr-only"><RichText tagName="span" value={attributes.contentPht} default="Reviews" onChange={ (newtext) =>  {
        setAttributes({ contentPht: newtext });
      }}
    /></h4>

                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                
      <svg
         className="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwax }}
        >
      </svg>
      
                                                
      <svg
         className="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKWY }}
        >
      </svg>
      
                                                
      <svg
         className="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzpQ }}
        >
      </svg>
      
                                                
      <svg
         className="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOik }}
        >
      </svg>
      
                                                
      <svg
         className="h-5 w-5 flex-shrink-0 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHvS }}
        >
      </svg>
      
                                            </div>
                                            <p className="sr-only">
                                                <RichText tagName="span" value={attributes.contentaow} default="3.9 out of 5 stars" onChange={ (newtext) => { setAttributes({ contentaow: newtext }); }} /></p>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                         <h4 className="sr-only"><RichText tagName="span" value={attributes.contentzNw} default="Description" onChange={ (newtext) =>  {
        setAttributes({ contentzNw: newtext });
      }}
    /></h4>

                                        <p className="text-sm text-gray-700">
                                            <RichText tagName="span" value={attributes.contentEQW} default="The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use." onChange={ (newtext) => { setAttributes({ contentEQW: newtext }); }} /></p>
                                    </div>
                                </section>
                                <section aria-labelledby="options-heading" className="mt-6">
                                     <h3 id="options-heading" className="sr-only"><RichText tagName="span" value={attributes.contenttVX} default="Product options" onChange={ (newtext) =>  {
        setAttributes({ contenttVX: newtext });
      }}
    /></h3>

                                    <form>
                                        <div>
                                             <h4 className="text-sm text-gray-600"><RichText tagName="span" value={attributes.contenttoE} default="Color" onChange={ (newtext) =>  {
        setAttributes({ contenttoE: newtext });
      }}
    /></h4>

                                            <fieldset className="mt-2">
                                                <legend className="sr-only">
                                                    <RichText tagName="span" value={attributes.contentGOv} default="Choose a color" onChange={ (newtext) => { setAttributes({ contentGOv: newtext }); }} /></legend>
                                                <div className="flex items-center space-x-3">
                                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-700">
                                                        <input type="radio" name="color-choice" value="Washed Black" className="sr-only" aria-labelledby="color-choice-0-label"/>
                                                        <p id="color-choice-0-label" className="sr-only">
                                                            <RichText tagName="span" value={attributes.contentDqh} default="Washed Black" onChange={ (newtext) => { setAttributes({ contentDqh: newtext }); }} /></p> <span aria-hidden="true" className="h-8 w-8 bg-gray-700 border border-black border-opacity-10 rounded-full"/>

                                                    </label>
                                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-1-label"/>
                                                        <p id="color-choice-1-label" className="sr-only">
                                                            <RichText tagName="span" value={attributes.contentWrv} default="White" onChange={ (newtext) => { setAttributes({ contentWrv: newtext }); }} /></p> <span aria-hidden="true" className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"/>

                                                    </label>
                                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-500">
                                                        <input type="radio" name="color-choice" value="Washed Gray" className="sr-only" aria-labelledby="color-choice-2-label"/>
                                                        <p id="color-choice-2-label" className="sr-only">
                                                            <RichText tagName="span" value={attributes.contentpeJ} default="Washed Gray" onChange={ (newtext) => { setAttributes({ contentpeJ: newtext }); }} /></p> <span aria-hidden="true" className="h-8 w-8 bg-gray-500 border border-black border-opacity-10 rounded-full"/>

                                                    </label>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="mt-6">
                                            <button type="submit" className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                                                <RichText tagName="span" value={attributes.contenteiO} default="Add to bag" onChange={ (newtext) => { setAttributes({ contenteiO: newtext }); }} /></button>
                                        </div>
                                        <p className="absolute top-4 left-4 text-center sm:static sm:mt-6"> <span className="font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentAjI} default="View full details" onChange={ (newtext) =>  {
        setAttributes({ contentAjI: newtext });
      }}
    /></span>

                                        </p>
                                    </form>
                                </section>
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
        <div class="fixed z-10 inset-0 overflow-y-auto" role="dialog" aria-modal="true">
            <div class="flex min-h-screen text-center md:block md:px-2 lg:px-4" style="font-size: 0">
                <div class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" aria-hidden="true"/> <span class="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true"><RichText.Content value={attributes.contentCxN} /></span>

                <div class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                    <div class="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <button type="button" class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"> <span class="sr-only"><RichText.Content value={attributes.contentpZi} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgByC }}
        >
      </svg>
      
                        </button>
                        <div class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                            <div class="sm:col-span-4 lg:col-span-5">
                                <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                                    
      <img
            src={ attributes.imageurlFKT } 
            alt={ attributes.imagealtXYo } 
            class="object-center object-cover"
          />
                                </div>
                            </div>
                            <div class="sm:col-span-8 lg:col-span-7">
                                 <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12"><RichText.Content value={attributes.contentAQv} /></h2>

                                <section aria-labelledby="information-heading" class="mt-3">
                                     <h3 id="information-heading" class="sr-only"><RichText.Content value={attributes.contentQRr} /></h3>

                                    <p class="text-2xl text-gray-900">
                                        <RichText.Content value={attributes.contentMoD} /></p>
                                    <div class="mt-3">
                                         <h4 class="sr-only"><RichText.Content value={attributes.contentPht} /></h4>

                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                
      <svg
         class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwax }}
        >
      </svg>
      
                                                
      <svg
         class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKWY }}
        >
      </svg>
      
                                                
      <svg
         class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzpQ }}
        >
      </svg>
      
                                                
      <svg
         class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOik }}
        >
      </svg>
      
                                                
      <svg
         class="h-5 w-5 flex-shrink-0 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHvS }}
        >
      </svg>
      
                                            </div>
                                            <p class="sr-only">
                                                <RichText.Content value={attributes.contentaow} /></p>
                                        </div>
                                    </div>
                                    <div class="mt-6">
                                         <h4 class="sr-only"><RichText.Content value={attributes.contentzNw} /></h4>

                                        <p class="text-sm text-gray-700">
                                            <RichText.Content value={attributes.contentEQW} /></p>
                                    </div>
                                </section>
                                <section aria-labelledby="options-heading" class="mt-6">
                                     <h3 id="options-heading" class="sr-only"><RichText.Content value={attributes.contenttVX} /></h3>

                                    <form>
                                        <div>
                                             <h4 class="text-sm text-gray-600"><RichText.Content value={attributes.contenttoE} /></h4>

                                            <fieldset class="mt-2">
                                                <legend class="sr-only">
                                                    <RichText.Content value={attributes.contentGOv} /></legend>
                                                <div class="flex items-center space-x-3">
                                                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-700">
                                                        <input type="radio" name="color-choice" value="Washed Black" class="sr-only" aria-labelledby="color-choice-0-label"/>
                                                        <p id="color-choice-0-label" class="sr-only">
                                                            <RichText.Content value={attributes.contentDqh} /></p> <span aria-hidden="true" class="h-8 w-8 bg-gray-700 border border-black border-opacity-10 rounded-full"/>

                                                    </label>
                                                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                        <input type="radio" name="color-choice" value="White" class="sr-only" aria-labelledby="color-choice-1-label"/>
                                                        <p id="color-choice-1-label" class="sr-only">
                                                            <RichText.Content value={attributes.contentWrv} /></p> <span aria-hidden="true" class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"/>

                                                    </label>
                                                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-500">
                                                        <input type="radio" name="color-choice" value="Washed Gray" class="sr-only" aria-labelledby="color-choice-2-label"/>
                                                        <p id="color-choice-2-label" class="sr-only">
                                                            <RichText.Content value={attributes.contentpeJ} /></p> <span aria-hidden="true" class="h-8 w-8 bg-gray-500 border border-black border-opacity-10 rounded-full"/>

                                                    </label>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="mt-6">
                                            <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                                                <RichText.Content value={attributes.contenteiO} /></button>
                                        </div>
                                        <p class="absolute top-4 left-4 text-center sm:static sm:mt-6"> <span class="font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentAjI} /></span>

                                        </p>
                                    </form>
                                </section>
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
        