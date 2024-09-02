
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-large-size-selector', {
            title: 'with large size selector',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8BbwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEHBf/EABYQAQEBAAAAAAAAAAAAAAAAAAARAf/EABYBAQEBAAAAAAAAAAAAAAAAAAACA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOiA1SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADVQGSgAGVANUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABQAqAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAoi0AKAAAogCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1UBkoABlQDVIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAgNXAZKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZSIrVIqAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADVQGSgAGVANUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAACAmg1gBkoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlAmK1SoAKIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANVAZKAAf/Z" />),
            category: 'common',
            attributes: {
  "contentYlt": {
    "type": "string",
    "default": "&#8203;"
  },
  "contentPkr": {
    "type": "string",
    "default": "Close"
  },
  "contentQvq": {
    "type": "string",
    "default": "View full details"
  },
  "contenteGo": {
    "type": "string",
    "default": "Everyday Ruck Snack"
  },
  "contentRVz": {
    "type": "string",
    "default": "Product information"
  },
  "contentiXO": {
    "type": "string",
    "default": "$220"
  },
  "contentEnz": {
    "type": "string",
    "default": "Reviews"
  },
  "contentSTX": {
    "type": "string",
    "default": "3.9 out of 5 stars"
  },
  "contentfqV": {
    "type": "string",
    "default": "In stock and ready to ship"
  },
  "contentVAa": {
    "type": "string",
    "default": "Product options"
  },
  "contentlhq": {
    "type": "string",
    "default": "Size"
  },
  "contentimu": {
    "type": "string",
    "default": "18L"
  },
  "contentWCO": {
    "type": "string",
    "default": "Perfect for a reasonable amount of snacks."
  },
  "contentFem": {
    "type": "string",
    "default": "20L"
  },
  "contentxzF": {
    "type": "string",
    "default": "Enough room for a serious amount of snacks."
  },
  "contentbhs": {
    "type": "string",
    "default": "What size should I buy?"
  },
  "contentlBb": {
    "type": "string",
    "default": "Add to bag"
  },
  "contentvCC": {
    "type": "string",
    "default": "Lifetime Guarantee"
  },
  "imageurlgCg": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/product-quick-preview-03-detail.jpg'
  },
  "imagealtbnS": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Interior of light green canvas bag with padded laptop sleeve and internal organization pouch."
  },
  "svgeQR": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgOwO": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgyhn": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgsVW": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgUNX": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgOIy": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgCRh": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgebp": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z\" clip-rule=\"evenodd\"/>"
  },
  "svgQNQ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"/>"
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
            value={ attributes.svgeQR }
            onChange={ ( value ) => {
              setAttributes({ svgeQR: value });
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
            value={ attributes.svgOwO }
            onChange={ ( value ) => {
              setAttributes({ svgOwO: value });
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
            value={ attributes.svgyhn }
            onChange={ ( value ) => {
              setAttributes({ svgyhn: value });
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
            value={ attributes.svgsVW }
            onChange={ ( value ) => {
              setAttributes({ svgsVW: value });
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
            value={ attributes.svgUNX }
            onChange={ ( value ) => {
              setAttributes({ svgUNX: value });
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
            value={ attributes.svgOIy }
            onChange={ ( value ) => {
              setAttributes({ svgOIy: value });
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
            value={ attributes.svgCRh }
            onChange={ ( value ) => {
              setAttributes({ svgCRh: value });
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
            value={ attributes.svgebp }
            onChange={ ( value ) => {
              setAttributes({ svgebp: value });
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
            value={ attributes.svgQNQ }
            onChange={ ( value ) => {
              setAttributes({ svgQNQ: value });
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
                <div className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" aria-hidden="true"/> <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true"><RichText tagName="span" value={attributes.contentYlt} default="&#8203;" onChange={ (newtext) =>  {
        setAttributes({ contentYlt: newtext });
      }}
    /></span>

                <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                    <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <button type="button" className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"> <span className="sr-only"><RichText tagName="span" value={attributes.contentPkr} default="Close" onChange={ (newtext) =>  {
        setAttributes({ contentPkr: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeQR }}
        >
      </svg>
      
                        </button>
                        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                            <div className="sm:col-span-4 lg:col-span-5">
                                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlgCg: media.url,
            imagealtbnS: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlgCg } 
            alt={ attributes.imagealtbnS } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                </div>
                                <p className="absolute top-4 left-4 text-center sm:static sm:mt-6"> <span className="font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentQvq} default="View full details" onChange={ (newtext) =>  {
        setAttributes({ contentQvq: newtext });
      }}
    /></span>

                                </p>
                            </div>
                            <div className="sm:col-span-8 lg:col-span-7">
                                 <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12"><RichText tagName="span" value={attributes.contenteGo} default="Everyday Ruck Snack" onChange={ (newtext) =>  {
        setAttributes({ contenteGo: newtext });
      }}
    /></h2>

                                <section aria-labelledby="information-heading" className="mt-4">
                                     <h3 id="information-heading" className="sr-only"><RichText tagName="span" value={attributes.contentRVz} default="Product information" onChange={ (newtext) =>  {
        setAttributes({ contentRVz: newtext });
      }}
    /></h3>

                                    <div className="flex items-center">
                                        <p className="text-lg text-gray-900 sm:text-xl">
                                            <RichText tagName="span" value={attributes.contentiXO} default="$220" onChange={ (newtext) => { setAttributes({ contentiXO: newtext }); }} /></p>
                                        <div className="ml-4 pl-4 border-l border-gray-300">
                                             <h4 className="sr-only"><RichText tagName="span" value={attributes.contentEnz} default="Reviews" onChange={ (newtext) =>  {
        setAttributes({ contentEnz: newtext });
      }}
    /></h4>

                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    
      <svg
         className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOwO }}
        >
      </svg>
      
                                                    
      <svg
         className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyhn }}
        >
      </svg>
      
                                                    
      <svg
         className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsVW }}
        >
      </svg>
      
                                                    
      <svg
         className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUNX }}
        >
      </svg>
      
                                                    
      <svg
         className="text-gray-300 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOIy }}
        >
      </svg>
      
                                                </div>
                                                <p className="sr-only">
                                                    <RichText tagName="span" value={attributes.contentSTX} default="3.9 out of 5 stars" onChange={ (newtext) => { setAttributes({ contentSTX: newtext }); }} /></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex items-center">
                                        
      <svg
         className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCRh }}
        >
      </svg>
      
                                        <p className="ml-2 font-medium text-gray-500">
                                            <RichText tagName="span" value={attributes.contentfqV} default="In stock and ready to ship" onChange={ (newtext) => { setAttributes({ contentfqV: newtext }); }} /></p>
                                    </div>
                                </section>
                                <section aria-labelledby="options-heading" className="mt-6">
                                     <h3 id="options-heading" className="sr-only"><RichText tagName="span" value={attributes.contentVAa} default="Product options" onChange={ (newtext) =>  {
        setAttributes({ contentVAa: newtext });
      }}
    /></h3>

                                    <form>
                                        <div className="sm:flex sm:justify-between">
                                            <fieldset>
                                                <legend className="block text-sm font-medium text-gray-700">
                                                    <RichText tagName="span" value={attributes.contentlhq} default="Size" onChange={ (newtext) => { setAttributes({ contentlhq: newtext }); }} /></legend>
                                                <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                    <label className="relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none">
                                                        <input type="radio" name="size-choice" value="18L" className="sr-only" aria-labelledby="size-choice-0-label" aria-describedby="size-choice-0-description"/>
                                                        <p id="size-choice-0-label" className="text-base font-medium text-gray-900">
                                                            <RichText tagName="span" value={attributes.contentimu} default="18L" onChange={ (newtext) => { setAttributes({ contentimu: newtext }); }} /></p>
                                                        <p id="size-choice-0-description" className="mt-1 text-sm text-gray-500">
                                                            <RichText tagName="span" value={attributes.contentWCO} default="Perfect for a reasonable amount of snacks." onChange={ (newtext) => { setAttributes({ contentWCO: newtext }); }} /></p>
                                                        <div className="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                    <label className="relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none">
                                                        <input type="radio" name="size-choice" value="20L" className="sr-only" aria-labelledby="size-choice-1-label" aria-describedby="size-choice-1-description"/>
                                                        <p id="size-choice-1-label" className="text-base font-medium text-gray-900">
                                                            <RichText tagName="span" value={attributes.contentFem} default="20L" onChange={ (newtext) => { setAttributes({ contentFem: newtext }); }} /></p>
                                                        <p id="size-choice-1-description" className="mt-1 text-sm text-gray-500">
                                                            <RichText tagName="span" value={attributes.contentxzF} default="Enough room for a serious amount of snacks." onChange={ (newtext) => { setAttributes({ contentxzF: newtext }); }} /></p>
                                                        <div className="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="mt-4 flex"> <span className="group flex text-sm text-gray-500 hover:text-gray-700">
                    <span><RichText tagName="span" value={attributes.contentbhs} default="What size should I buy?" onChange={ (newtext) =>  {
        setAttributes({ contentbhs: newtext });
      }}
    /></span>

                                            
      <svg
         className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgebp }}
        >
      </svg>
      
                                            </span>
                                        </div>
                                        <div className="mt-6">
                                            <button type="submit" className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                                                <RichText tagName="span" value={attributes.contentlBb} default="Add to bag" onChange={ (newtext) => { setAttributes({ contentlBb: newtext }); }} /></button>
                                        </div>
                                        <div className="mt-6 text-center"> <span className="group inline-flex text-base font-medium">
                    
                    
      <svg
         className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQNQ }}
        >
      </svg>
      
                    <span className="text-gray-500 group-hover:text-gray-700"><RichText tagName="span" value={attributes.contentvCC} default="Lifetime Guarantee" onChange={ (newtext) =>  {
        setAttributes({ contentvCC: newtext });
      }}
    /></span>
</span>
                                        </div>
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
                <div class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" aria-hidden="true"/> <span class="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true"><RichText.Content value={attributes.contentYlt} /></span>

                <div class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                    <div class="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <button type="button" class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"> <span class="sr-only"><RichText.Content value={attributes.contentPkr} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeQR }}
        >
      </svg>
      
                        </button>
                        <div class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                            <div class="sm:col-span-4 lg:col-span-5">
                                <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                                    
      <img
            src={ attributes.imageurlgCg } 
            alt={ attributes.imagealtbnS } 
            class="object-center object-cover"
          />
                                </div>
                                <p class="absolute top-4 left-4 text-center sm:static sm:mt-6"> <span class="font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentQvq} /></span>

                                </p>
                            </div>
                            <div class="sm:col-span-8 lg:col-span-7">
                                 <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12"><RichText.Content value={attributes.contenteGo} /></h2>

                                <section aria-labelledby="information-heading" class="mt-4">
                                     <h3 id="information-heading" class="sr-only"><RichText.Content value={attributes.contentRVz} /></h3>

                                    <div class="flex items-center">
                                        <p class="text-lg text-gray-900 sm:text-xl">
                                            <RichText.Content value={attributes.contentiXO} /></p>
                                        <div class="ml-4 pl-4 border-l border-gray-300">
                                             <h4 class="sr-only"><RichText.Content value={attributes.contentEnz} /></h4>

                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    
      <svg
         class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOwO }}
        >
      </svg>
      
                                                    
      <svg
         class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyhn }}
        >
      </svg>
      
                                                    
      <svg
         class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsVW }}
        >
      </svg>
      
                                                    
      <svg
         class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUNX }}
        >
      </svg>
      
                                                    
      <svg
         class="text-gray-300 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOIy }}
        >
      </svg>
      
                                                </div>
                                                <p class="sr-only">
                                                    <RichText.Content value={attributes.contentSTX} /></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-6 flex items-center">
                                        
      <svg
         class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCRh }}
        >
      </svg>
      
                                        <p class="ml-2 font-medium text-gray-500">
                                            <RichText.Content value={attributes.contentfqV} /></p>
                                    </div>
                                </section>
                                <section aria-labelledby="options-heading" class="mt-6">
                                     <h3 id="options-heading" class="sr-only"><RichText.Content value={attributes.contentVAa} /></h3>

                                    <form>
                                        <div class="sm:flex sm:justify-between">
                                            <fieldset>
                                                <legend class="block text-sm font-medium text-gray-700">
                                                    <RichText.Content value={attributes.contentlhq} /></legend>
                                                <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                    <label class="relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none">
                                                        <input type="radio" name="size-choice" value="18L" class="sr-only" aria-labelledby="size-choice-0-label" aria-describedby="size-choice-0-description"/>
                                                        <p id="size-choice-0-label" class="text-base font-medium text-gray-900">
                                                            <RichText.Content value={attributes.contentimu} /></p>
                                                        <p id="size-choice-0-description" class="mt-1 text-sm text-gray-500">
                                                            <RichText.Content value={attributes.contentWCO} /></p>
                                                        <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                    <label class="relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none">
                                                        <input type="radio" name="size-choice" value="20L" class="sr-only" aria-labelledby="size-choice-1-label" aria-describedby="size-choice-1-description"/>
                                                        <p id="size-choice-1-label" class="text-base font-medium text-gray-900">
                                                            <RichText.Content value={attributes.contentFem} /></p>
                                                        <p id="size-choice-1-description" class="mt-1 text-sm text-gray-500">
                                                            <RichText.Content value={attributes.contentxzF} /></p>
                                                        <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="mt-4 flex"> <span class="group flex text-sm text-gray-500 hover:text-gray-700">
                    <span><RichText.Content value={attributes.contentbhs} /></span>

                                            
      <svg
         class="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgebp }}
        >
      </svg>
      
                                            </span>
                                        </div>
                                        <div class="mt-6">
                                            <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                                                <RichText.Content value={attributes.contentlBb} /></button>
                                        </div>
                                        <div class="mt-6 text-center"> <span class="group inline-flex text-base font-medium">
                    
                    
      <svg
         class="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQNQ }}
        >
      </svg>
      
                    <span class="text-gray-500 group-hover:text-gray-700"><RichText.Content value={attributes.contentvCC} /></span>
</span>
                                        </div>
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
        