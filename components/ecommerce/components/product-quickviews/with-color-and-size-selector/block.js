
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-color-and-size-selector', {
            title: 'with color and size selector',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8BbwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEHBf/EABYQAQEBAAAAAAAAAAAAAAAAAAARAf/EABYBAQEBAAAAAAAAAAAAAAAAAAACA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOiA1SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADVQGSgAGVANUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABQAqAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAoi0AKAAAogCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1UBkoABlQDVIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAgNXAZKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZSIrVIqAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADVQGSgAGVANUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAACAmg1gBkoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlAmK1SoAKIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANVAZKAAf/Z" />),
            category: 'common',
            attributes: {
  "contentZMX": {
    "type": "string",
    "default": "&#8203;"
  },
  "contentktQ": {
    "type": "string",
    "default": "Close"
  },
  "contentjSE": {
    "type": "string",
    "default": "Basic Tee 6-Pack"
  },
  "contentDWY": {
    "type": "string",
    "default": "Product information"
  },
  "contentPqc": {
    "type": "string",
    "default": "$192"
  },
  "contentPQJ": {
    "type": "string",
    "default": "Reviews"
  },
  "contentUnG": {
    "type": "string",
    "default": "3.9 out of 5 stars"
  },
  "contentrMG": {
    "type": "string",
    "default": "117 reviews"
  },
  "contentZbW": {
    "type": "string",
    "default": "Product options"
  },
  "contentLzU": {
    "type": "string",
    "default": "Color"
  },
  "contentjXe": {
    "type": "string",
    "default": "Choose a color"
  },
  "contenteev": {
    "type": "string",
    "default": "White"
  },
  "contentaLo": {
    "type": "string",
    "default": "Gray"
  },
  "contentxxd": {
    "type": "string",
    "default": "Black"
  },
  "contentzuT": {
    "type": "string",
    "default": "Size"
  },
  "contentbax": {
    "type": "string",
    "default": "Size guide"
  },
  "contentylv": {
    "type": "string",
    "default": "Choose a size"
  },
  "contentSma": {
    "type": "string",
    "default": "XXS"
  },
  "contentLoQ": {
    "type": "string",
    "default": "XS"
  },
  "contentXTw": {
    "type": "string",
    "default": "S"
  },
  "contentXNK": {
    "type": "string",
    "default": "M"
  },
  "contentKoy": {
    "type": "string",
    "default": "L"
  },
  "contentRSV": {
    "type": "string",
    "default": "XL"
  },
  "contentmXZ": {
    "type": "string",
    "default": "XXL"
  },
  "contentUNk": {
    "type": "string",
    "default": "XXXL"
  },
  "contentOQn": {
    "type": "string",
    "default": "Add to bag"
  },
  "imageurlGGU": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/product-quick-preview-02-detail.jpg'
  },
  "imagealtkIY": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Two each of gray, white, and black shirts arranged on table."
  },
  "svgIiS": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgCNf": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgQZE": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgruO": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgTJL": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgCyO": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgJvi": {
    "type": "string",
    "default": "<line x1=\"0\" y1=\"100\" x2=\"100\" y2=\"0\" vector-effect=\"non-scaling-stroke\"/>"
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
            value={ attributes.svgIiS }
            onChange={ ( value ) => {
              setAttributes({ svgIiS: value });
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
            value={ attributes.svgCNf }
            onChange={ ( value ) => {
              setAttributes({ svgCNf: value });
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
            value={ attributes.svgQZE }
            onChange={ ( value ) => {
              setAttributes({ svgQZE: value });
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
            value={ attributes.svgruO }
            onChange={ ( value ) => {
              setAttributes({ svgruO: value });
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
            value={ attributes.svgTJL }
            onChange={ ( value ) => {
              setAttributes({ svgTJL: value });
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
            value={ attributes.svgCyO }
            onChange={ ( value ) => {
              setAttributes({ svgCyO: value });
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
            value={ attributes.svgJvi }
            onChange={ ( value ) => {
              setAttributes({ svgJvi: value });
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
                <div className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" aria-hidden="true"/> <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true"><RichText tagName="span" value={attributes.contentZMX} default="&#8203;" onChange={ (newtext) =>  {
        setAttributes({ contentZMX: newtext });
      }}
    /></span>

                <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                    <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <button type="button" className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"> <span className="sr-only"><RichText tagName="span" value={attributes.contentktQ} default="Close" onChange={ (newtext) =>  {
        setAttributes({ contentktQ: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIiS }}
        >
      </svg>
      
                        </button>
                        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                            <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlGGU: media.url,
            imagealtkIY: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlGGU } 
            alt={ attributes.imagealtkIY } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                            </div>
                            <div className="sm:col-span-8 lg:col-span-7">
                                 <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12"><RichText tagName="span" value={attributes.contentjSE} default="Basic Tee 6-Pack" onChange={ (newtext) =>  {
        setAttributes({ contentjSE: newtext });
      }}
    /></h2>

                                <section aria-labelledby="information-heading" className="mt-2">
                                     <h3 id="information-heading" className="sr-only"><RichText tagName="span" value={attributes.contentDWY} default="Product information" onChange={ (newtext) =>  {
        setAttributes({ contentDWY: newtext });
      }}
    /></h3>

                                    <p className="text-2xl text-gray-900">
                                        <RichText tagName="span" value={attributes.contentPqc} default="$192" onChange={ (newtext) => { setAttributes({ contentPqc: newtext }); }} /></p>
                                    <div className="mt-6">
                                         <h4 className="sr-only"><RichText tagName="span" value={attributes.contentPQJ} default="Reviews" onChange={ (newtext) =>  {
        setAttributes({ contentPQJ: newtext });
      }}
    /></h4>

                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                
      <svg
         className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCNf }}
        >
      </svg>
      
                                                
      <svg
         className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQZE }}
        >
      </svg>
      
                                                
      <svg
         className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgruO }}
        >
      </svg>
      
                                                
      <svg
         className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTJL }}
        >
      </svg>
      
                                                
      <svg
         className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCyO }}
        >
      </svg>
      
                                            </div>
                                            <p className="sr-only">
                                                <RichText tagName="span" value={attributes.contentUnG} default="3.9 out of 5 stars" onChange={ (newtext) => { setAttributes({ contentUnG: newtext }); }} /></p> <span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentrMG} default="117 reviews" onChange={ (newtext) =>  {
        setAttributes({ contentrMG: newtext });
      }}
    /></span>

                                        </div>
                                    </div>
                                </section>
                                <section aria-labelledby="options-heading" className="mt-10">
                                     <h3 id="options-heading" className="sr-only"><RichText tagName="span" value={attributes.contentZbW} default="Product options" onChange={ (newtext) =>  {
        setAttributes({ contentZbW: newtext });
      }}
    /></h3>

                                    <form>
                                        <div>
                                             <h4 className="text-sm text-gray-900 font-medium"><RichText tagName="span" value={attributes.contentLzU} default="Color" onChange={ (newtext) =>  {
        setAttributes({ contentLzU: newtext });
      }}
    /></h4>

                                            <fieldset className="mt-4">
                                                <legend className="sr-only">
                                                    <RichText tagName="span" value={attributes.contentjXe} default="Choose a color" onChange={ (newtext) => { setAttributes({ contentjXe: newtext }); }} /></legend>
                                                <div className="flex items-center space-x-3">
                                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label"/>
                                                        <p id="color-choice-0-label" className="sr-only">
                                                            <RichText tagName="span" value={attributes.contenteev} default="White" onChange={ (newtext) => { setAttributes({ contenteev: newtext }); }} /></p> <span aria-hidden="true" className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"/>

                                                    </label>
                                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                        <input type="radio" name="color-choice" value="Gray" className="sr-only" aria-labelledby="color-choice-1-label"/>
                                                        <p id="color-choice-1-label" className="sr-only">
                                                            <RichText tagName="span" value={attributes.contentaLo} default="Gray" onChange={ (newtext) => { setAttributes({ contentaLo: newtext }); }} /></p> <span aria-hidden="true" className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"/>

                                                    </label>
                                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                                                        <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label"/>
                                                        <p id="color-choice-2-label" className="sr-only">
                                                            <RichText tagName="span" value={attributes.contentxxd} default="Black" onChange={ (newtext) => { setAttributes({ contentxxd: newtext }); }} /></p> <span aria-hidden="true" className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"/>

                                                    </label>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="mt-10">
                                            <div className="flex items-center justify-between">
                                                 <h4 className="text-sm text-gray-900 font-medium"><RichText tagName="span" value={attributes.contentzuT} default="Size" onChange={ (newtext) =>  {
        setAttributes({ contentzuT: newtext });
      }}
    /></h4>
 <span className="text-sm font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentbax} default="Size guide" onChange={ (newtext) =>  {
        setAttributes({ contentbax: newtext });
      }}
    /></span>

                                            </div>
                                            <fieldset className="mt-4">
                                                <legend className="sr-only">
                                                    <RichText tagName="span" value={attributes.contentylv} default="Choose a size" onChange={ (newtext) => { setAttributes({ contentylv: newtext }); }} /></legend>
                                                <div className="grid grid-cols-4 gap-4">
                                                    <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                        <input type="radio" name="size-choice" value="XXS" className="sr-only" aria-labelledby="size-choice-0-label"/>
                                                        <p id="size-choice-0-label">
                                                            <RichText tagName="span" value={attributes.contentSma} default="XXS" onChange={ (newtext) => { setAttributes({ contentSma: newtext }); }} /></p>
                                                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                    <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                        <input type="radio" name="size-choice" value="XS" className="sr-only" aria-labelledby="size-choice-1-label"/>
                                                        <p id="size-choice-1-label">
                                                            <RichText tagName="span" value={attributes.contentLoQ} default="XS" onChange={ (newtext) => { setAttributes({ contentLoQ: newtext }); }} /></p>
                                                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                    <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                        <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="size-choice-2-label"/>
                                                        <p id="size-choice-2-label">
                                                            <RichText tagName="span" value={attributes.contentXTw} default="S" onChange={ (newtext) => { setAttributes({ contentXTw: newtext }); }} /></p>
                                                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                    <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                        <input type="radio" name="size-choice" value="M" className="sr-only" aria-labelledby="size-choice-3-label"/>
                                                        <p id="size-choice-3-label">
                                                            <RichText tagName="span" value={attributes.contentXNK} default="M" onChange={ (newtext) => { setAttributes({ contentXNK: newtext }); }} /></p>
                                                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                    <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                        <input type="radio" name="size-choice" value="L" className="sr-only" aria-labelledby="size-choice-4-label"/>
                                                        <p id="size-choice-4-label">
                                                            <RichText tagName="span" value={attributes.contentKoy} default="L" onChange={ (newtext) => { setAttributes({ contentKoy: newtext }); }} /></p>
                                                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                    <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                        <input type="radio" name="size-choice" value="XL" className="sr-only" aria-labelledby="size-choice-5-label"/>
                                                        <p id="size-choice-5-label">
                                                            <RichText tagName="span" value={attributes.contentRSV} default="XL" onChange={ (newtext) => { setAttributes({ contentRSV: newtext }); }} /></p>
                                                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                    <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                        <input type="radio" name="size-choice" value="XXL" className="sr-only" aria-labelledby="size-choice-6-label"/>
                                                        <p id="size-choice-6-label">
                                                            <RichText tagName="span" value={attributes.contentmXZ} default="XXL" onChange={ (newtext) => { setAttributes({ contentmXZ: newtext }); }} /></p>
                                                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                    <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-gray-50 text-gray-200 cursor-not-allowed">
                                                        <input type="radio" name="size-choice" value="XXXL" disabled="" className="sr-only" aria-labelledby="size-choice-7-label"/>
                                                        <p id="size-choice-7-label">
                                                            <RichText tagName="span" value={attributes.contentUNk} default="XXXL" onChange={ (newtext) => { setAttributes({ contentUNk: newtext }); }} /></p>
                                                        <div aria-hidden="true" className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none">
                                                            
      <svg
         className="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor"
          dangerouslySetInnerHTML={ { __html: attributes.svgJvi }}
        >
      </svg>
      
                                                        </div>
                                                    </label>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <button type="submit" className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <RichText tagName="span" value={attributes.contentOQn} default="Add to bag" onChange={ (newtext) => { setAttributes({ contentOQn: newtext }); }} /></button>
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
                <div class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" aria-hidden="true"/> <span class="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true"><RichText.Content value={attributes.contentZMX} /></span>

                <div class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                    <div class="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <button type="button" class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"> <span class="sr-only"><RichText.Content value={attributes.contentktQ} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIiS }}
        >
      </svg>
      
                        </button>
                        <div class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                            <div class="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                                
      <img
            src={ attributes.imageurlGGU } 
            alt={ attributes.imagealtkIY } 
            class="object-center object-cover"
          />
                            </div>
                            <div class="sm:col-span-8 lg:col-span-7">
                                 <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12"><RichText.Content value={attributes.contentjSE} /></h2>

                                <section aria-labelledby="information-heading" class="mt-2">
                                     <h3 id="information-heading" class="sr-only"><RichText.Content value={attributes.contentDWY} /></h3>

                                    <p class="text-2xl text-gray-900">
                                        <RichText.Content value={attributes.contentPqc} /></p>
                                    <div class="mt-6">
                                         <h4 class="sr-only"><RichText.Content value={attributes.contentPQJ} /></h4>

                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                
      <svg
         class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCNf }}
        >
      </svg>
      
                                                
      <svg
         class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQZE }}
        >
      </svg>
      
                                                
      <svg
         class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgruO }}
        >
      </svg>
      
                                                
      <svg
         class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTJL }}
        >
      </svg>
      
                                                
      <svg
         class="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCyO }}
        >
      </svg>
      
                                            </div>
                                            <p class="sr-only">
                                                <RichText.Content value={attributes.contentUnG} /></p> <span class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentrMG} /></span>

                                        </div>
                                    </div>
                                </section>
                                <section aria-labelledby="options-heading" class="mt-10">
                                     <h3 id="options-heading" class="sr-only"><RichText.Content value={attributes.contentZbW} /></h3>

                                    <form>
                                        <div>
                                             <h4 class="text-sm text-gray-900 font-medium"><RichText.Content value={attributes.contentLzU} /></h4>

                                            <fieldset class="mt-4">
                                                <legend class="sr-only">
                                                    <RichText.Content value={attributes.contentjXe} /></legend>
                                                <div class="flex items-center space-x-3">
                                                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                        <input type="radio" name="color-choice" value="White" class="sr-only" aria-labelledby="color-choice-0-label"/>
                                                        <p id="color-choice-0-label" class="sr-only">
                                                            <RichText.Content value={attributes.contenteev} /></p> <span aria-hidden="true" class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"/>

                                                    </label>
                                                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                        <input type="radio" name="color-choice" value="Gray" class="sr-only" aria-labelledby="color-choice-1-label"/>
                                                        <p id="color-choice-1-label" class="sr-only">
                                                            <RichText.Content value={attributes.contentaLo} /></p> <span aria-hidden="true" class="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"/>

                                                    </label>
                                                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                                                        <input type="radio" name="color-choice" value="Black" class="sr-only" aria-labelledby="color-choice-2-label"/>
                                                        <p id="color-choice-2-label" class="sr-only">
                                                            <RichText.Content value={attributes.contentxxd} /></p> <span aria-hidden="true" class="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"/>

                                                    </label>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="mt-10">
                                            <div class="flex items-center justify-between">
                                                 <h4 class="text-sm text-gray-900 font-medium"><RichText.Content value={attributes.contentzuT} /></h4>
 <span class="text-sm font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentbax} /></span>

                                            </div>
                                            <fieldset class="mt-4">
                                                <legend class="sr-only">
                                                    <RichText.Content value={attributes.contentylv} /></legend>
                                                <div class="grid grid-cols-4 gap-4">
                                                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                        <input type="radio" name="size-choice" value="XXS" class="sr-only" aria-labelledby="size-choice-0-label"/>
                                                        <p id="size-choice-0-label">
                                                            <RichText.Content value={attributes.contentSma} /></p>
                                                        <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                        <input type="radio" name="size-choice" value="XS" class="sr-only" aria-labelledby="size-choice-1-label"/>
                                                        <p id="size-choice-1-label">
                                                            <RichText.Content value={attributes.contentLoQ} /></p>
                                                        <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                        <input type="radio" name="size-choice" value="S" class="sr-only" aria-labelledby="size-choice-2-label"/>
                                                        <p id="size-choice-2-label">
                                                            <RichText.Content value={attributes.contentXTw} /></p>
                                                        <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                        <input type="radio" name="size-choice" value="M" class="sr-only" aria-labelledby="size-choice-3-label"/>
                                                        <p id="size-choice-3-label">
                                                            <RichText.Content value={attributes.contentXNK} /></p>
                                                        <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                        <input type="radio" name="size-choice" value="L" class="sr-only" aria-labelledby="size-choice-4-label"/>
                                                        <p id="size-choice-4-label">
                                                            <RichText.Content value={attributes.contentKoy} /></p>
                                                        <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                        <input type="radio" name="size-choice" value="XL" class="sr-only" aria-labelledby="size-choice-5-label"/>
                                                        <p id="size-choice-5-label">
                                                            <RichText.Content value={attributes.contentRSV} /></p>
                                                        <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                        <input type="radio" name="size-choice" value="XXL" class="sr-only" aria-labelledby="size-choice-6-label"/>
                                                        <p id="size-choice-6-label">
                                                            <RichText.Content value={attributes.contentmXZ} /></p>
                                                        <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"/>
                                                    </label>
                                                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-gray-50 text-gray-200 cursor-not-allowed">
                                                        <input type="radio" name="size-choice" value="XXXL" disabled="" class="sr-only" aria-labelledby="size-choice-7-label"/>
                                                        <p id="size-choice-7-label">
                                                            <RichText.Content value={attributes.contentUNk} /></p>
                                                        <div aria-hidden="true" class="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none">
                                                            
      <svg
         class="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor"
          dangerouslySetInnerHTML={ { __html: attributes.svgJvi }}
        >
      </svg>
      
                                                        </div>
                                                    </label>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <button type="submit" class="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <RichText.Content value={attributes.contentOQn} /></button>
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
        