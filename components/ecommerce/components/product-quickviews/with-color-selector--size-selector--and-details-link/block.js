
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-color-selector--size-selector--and-details-link', {
            title: 'with color selector  size selector  and details link',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8BbwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEHBf/EABYQAQEBAAAAAAAAAAAAAAAAAAARAf/EABYBAQEBAAAAAAAAAAAAAAAAAAACA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOiA1SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADVQGSgAGVANUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABQAqAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAoi0AKAAAogCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1UBkoABlQDVIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAgNXAZKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZSIrVIqAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADVQGSgAGVANUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAACAmg1gBkoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlAmK1SoAKIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANVAZKAAf/Z" />),
            category: 'common',
            attributes: {
  "contentDHP": {
    "type": "string",
    "default": "&#8203;"
  },
  "contentSjY": {
    "type": "string",
    "default": "Close"
  },
  "contentvBn": {
    "type": "string",
    "default": "Women&#039;s Basic Tee"
  },
  "contentnqi": {
    "type": "string",
    "default": "Product information"
  },
  "contenteiw": {
    "type": "string",
    "default": "$32"
  },
  "contentqXu": {
    "type": "string",
    "default": "Reviews"
  },
  "contentEBM": {
    "type": "string",
    "default": "\n                    3.9\n                    "
  },
  "contentbVS": {
    "type": "string",
    "default": " out of 5 stars"
  },
  "contentFvl": {
    "type": "string",
    "default": "&middot;"
  },
  "contentsjQ": {
    "type": "string",
    "default": "See all 512 reviews"
  },
  "contentjPw": {
    "type": "string",
    "default": "Product options"
  },
  "contentxVn": {
    "type": "string",
    "default": "Color"
  },
  "contentkYB": {
    "type": "string",
    "default": "Choose a color"
  },
  "contentfkH": {
    "type": "string",
    "default": "Black"
  },
  "contentqXI": {
    "type": "string",
    "default": "Heather Grey"
  },
  "contentyNI": {
    "type": "string",
    "default": "Size"
  },
  "contentNXg": {
    "type": "string",
    "default": "Size guide"
  },
  "contentihk": {
    "type": "string",
    "default": "Choose a size"
  },
  "contentMun": {
    "type": "string",
    "default": "XXS"
  },
  "contentqft": {
    "type": "string",
    "default": "XS"
  },
  "contentvzA": {
    "type": "string",
    "default": "S"
  },
  "contentHjV": {
    "type": "string",
    "default": "M"
  },
  "contentqio": {
    "type": "string",
    "default": "L"
  },
  "contenttsR": {
    "type": "string",
    "default": "XL"
  },
  "contentufL": {
    "type": "string",
    "default": "XXL"
  },
  "contentoop": {
    "type": "string",
    "default": "Add to bag"
  },
  "contentCln": {
    "type": "string",
    "default": "View full details"
  },
  "imageurlwal": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/product-page-01-featured-product-shot.jpg'
  },
  "imagealtizd": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Back of women&#039;s Basic Tee in black."
  },
  "svgCYT": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svggGq": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgPez": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgPqT": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgmaN": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgQlu": {
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
            value={ attributes.svgCYT }
            onChange={ ( value ) => {
              setAttributes({ svgCYT: value });
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
            value={ attributes.svggGq }
            onChange={ ( value ) => {
              setAttributes({ svggGq: value });
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
            value={ attributes.svgPez }
            onChange={ ( value ) => {
              setAttributes({ svgPez: value });
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
            value={ attributes.svgPqT }
            onChange={ ( value ) => {
              setAttributes({ svgPqT: value });
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
            value={ attributes.svgmaN }
            onChange={ ( value ) => {
              setAttributes({ svgmaN: value });
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
            value={ attributes.svgQlu }
            onChange={ ( value ) => {
              setAttributes({ svgQlu: value });
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
                <div className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" aria-hidden="true"/> <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true"><RichText tagName="span" value={attributes.contentDHP} default="&#8203;" onChange={ (newtext) =>  {
        setAttributes({ contentDHP: newtext });
      }}
    /></span>

                <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                    <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <button type="button" className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"> <span className="sr-only"><RichText tagName="span" value={attributes.contentSjY} default="Close" onChange={ (newtext) =>  {
        setAttributes({ contentSjY: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCYT }}
        >
      </svg>
      
                        </button>
                        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:items-center lg:gap-x-8">
                            <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlwal: media.url,
            imagealtizd: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlwal } 
            alt={ attributes.imagealtizd } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                            </div>
                            <div className="sm:col-span-8 lg:col-span-7">
                                 <h2 className="text-xl font-medium text-gray-900 sm:pr-12"><RichText tagName="span" value={attributes.contentvBn} default="Women&#039;s Basic Tee" onChange={ (newtext) =>  {
        setAttributes({ contentvBn: newtext });
      }}
    /></h2>

                                <section aria-labelledby="information-heading" className="mt-1">
                                     <h3 id="information-heading" className="sr-only"><RichText tagName="span" value={attributes.contentnqi} default="Product information" onChange={ (newtext) =>  {
        setAttributes({ contentnqi: newtext });
      }}
    /></h3>

                                    <p className="font-medium text-gray-900">
                                        <RichText tagName="span" value={attributes.contenteiw} default="$32" onChange={ (newtext) => { setAttributes({ contenteiw: newtext }); }} /></p>
                                    <div className="mt-4">
                                         <h4 className="sr-only"><RichText tagName="span" value={attributes.contentqXu} default="Reviews" onChange={ (newtext) =>  {
        setAttributes({ contentqXu: newtext });
      }}
    /></h4>

                                        <div className="flex items-center">
                                            <p className="text-sm text-gray-700">
                                                <RichText tagName="span" value={attributes.contentEBM} default="3.9" onChange={ (newtext) => { setAttributes({ contentEBM: newtext }); }} /><span className="sr-only"><RichText tagName="span" value={attributes.contentbVS} default="out of 5 stars" onChange={ (newtext) =>  {
        setAttributes({ contentbVS: newtext });
      }}
    /></span>

                                            </p>
                                            <div className="ml-1 flex items-center">
                                                
      <svg
         className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggGq }}
        >
      </svg>
      
                                                
      <svg
         className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPez }}
        >
      </svg>
      
                                                
      <svg
         className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPqT }}
        >
      </svg>
      
                                                
      <svg
         className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmaN }}
        >
      </svg>
      
                                                
      <svg
         className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQlu }}
        >
      </svg>
      
                                            </div>
                                            <div className="hidden ml-4 lg:flex lg:items-center"> <span className="text-gray-300" aria-hidden="true"><RichText tagName="span" value={attributes.contentFvl} default="&middot;" onChange={ (newtext) =>  {
        setAttributes({ contentFvl: newtext });
      }}
    /></span>
 <span className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentsjQ} default="See all 512 reviews" onChange={ (newtext) =>  {
        setAttributes({ contentsjQ: newtext });
      }}
    /></span>

                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section aria-labelledby="options-heading" className="mt-8">
                                     <h3 id="options-heading" className="sr-only"><RichText tagName="span" value={attributes.contentjPw} default="Product options" onChange={ (newtext) =>  {
        setAttributes({ contentjPw: newtext });
      }}
    /></h3>

                                    <form>
                                        <div>
                                             <h4 className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentxVn} default="Color" onChange={ (newtext) =>  {
        setAttributes({ contentxVn: newtext });
      }}
    /></h4>

                                            <fieldset className="mt-2">
                                                <legend className="sr-only">
                                                    <RichText tagName="span" value={attributes.contentkYB} default="Choose a color" onChange={ (newtext) => { setAttributes({ contentkYB: newtext }); }} /></legend>
                                                <div className="flex items-center space-x-3">
                                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                                                        <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-0-label"/>
                                                        <p id="color-choice-0-label" className="sr-only">
                                                            <RichText tagName="span" value={attributes.contentfkH} default="Black" onChange={ (newtext) => { setAttributes({ contentfkH: newtext }); }} /></p> <span aria-hidden="true" className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"/>

                                                    </label>
                                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                        <input type="radio" name="color-choice" value="Heather Grey" className="sr-only" aria-labelledby="color-choice-1-label"/>
                                                        <p id="color-choice-1-label" className="sr-only">
                                                            <RichText tagName="span" value={attributes.contentqXI} default="Heather Grey" onChange={ (newtext) => { setAttributes({ contentqXI: newtext }); }} /></p> <span aria-hidden="true" className="h-8 w-8 bg-gray-400 border border-black border-opacity-10 rounded-full"/>

                                                    </label>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="mt-8">
                                            <div className="flex items-center justify-between">
                                                 <h4 className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentyNI} default="Size" onChange={ (newtext) =>  {
        setAttributes({ contentyNI: newtext });
      }}
    /></h4>
 <span className="text-sm font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentNXg} default="Size guide" onChange={ (newtext) =>  {
        setAttributes({ contentNXg: newtext });
      }}
    /></span>

                                            </div>
                                            <fieldset className="mt-2">
                                                <legend className="sr-only">
                                                    <RichText tagName="span" value={attributes.contentihk} default="Choose a size" onChange={ (newtext) => { setAttributes({ contentihk: newtext }); }} /></legend>
                                                <div className="grid grid-cols-7 gap-2">
                                                    <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                                                        <input type="radio" name="size-choice" value="XXS" className="sr-only" aria-labelledby="size-choice-0-label"/>
                                                        <p id="size-choice-0-label">
                                                            <RichText tagName="span" value={attributes.contentMun} default="XXS" onChange={ (newtext) => { setAttributes({ contentMun: newtext }); }} /></p>
                                                    </label>
                                                    <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                                                        <input type="radio" name="size-choice" value="XS" className="sr-only" aria-labelledby="size-choice-1-label"/>
                                                        <p id="size-choice-1-label">
                                                            <RichText tagName="span" value={attributes.contentqft} default="XS" onChange={ (newtext) => { setAttributes({ contentqft: newtext }); }} /></p>
                                                    </label>
                                                    <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                                                        <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="size-choice-2-label"/>
                                                        <p id="size-choice-2-label">
                                                            <RichText tagName="span" value={attributes.contentvzA} default="S" onChange={ (newtext) => { setAttributes({ contentvzA: newtext }); }} /></p>
                                                    </label>
                                                    <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                                                        <input type="radio" name="size-choice" value="M" className="sr-only" aria-labelledby="size-choice-3-label"/>
                                                        <p id="size-choice-3-label">
                                                            <RichText tagName="span" value={attributes.contentHjV} default="M" onChange={ (newtext) => { setAttributes({ contentHjV: newtext }); }} /></p>
                                                    </label>
                                                    <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                                                        <input type="radio" name="size-choice" value="L" className="sr-only" aria-labelledby="size-choice-4-label"/>
                                                        <p id="size-choice-4-label">
                                                            <RichText tagName="span" value={attributes.contentqio} default="L" onChange={ (newtext) => { setAttributes({ contentqio: newtext }); }} /></p>
                                                    </label>
                                                    <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                                                        <input type="radio" name="size-choice" value="XL" className="sr-only" aria-labelledby="size-choice-5-label"/>
                                                        <p id="size-choice-5-label">
                                                            <RichText tagName="span" value={attributes.contenttsR} default="XL" onChange={ (newtext) => { setAttributes({ contenttsR: newtext }); }} /></p>
                                                    </label>
                                                    <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 opacity-25 cursor-not-allowed">
                                                        <input type="radio" name="size-choice" value="XXL" disabled="" className="sr-only" aria-labelledby="size-choice-6-label"/>
                                                        <p id="size-choice-6-label">
                                                            <RichText tagName="span" value={attributes.contentufL} default="XXL" onChange={ (newtext) => { setAttributes({ contentufL: newtext }); }} /></p>
                                                    </label>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <button type="submit" className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <RichText tagName="span" value={attributes.contentoop} default="Add to bag" onChange={ (newtext) => { setAttributes({ contentoop: newtext }); }} /></button>
                                        <p className="absolute top-4 left-4 text-center sm:static sm:mt-8"> <span className="font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentCln} default="View full details" onChange={ (newtext) =>  {
        setAttributes({ contentCln: newtext });
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
                <div class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" aria-hidden="true"/> <span class="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true"><RichText.Content value={attributes.contentDHP} /></span>

                <div class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                    <div class="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <button type="button" class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"> <span class="sr-only"><RichText.Content value={attributes.contentSjY} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCYT }}
        >
      </svg>
      
                        </button>
                        <div class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:items-center lg:gap-x-8">
                            <div class="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                                
      <img
            src={ attributes.imageurlwal } 
            alt={ attributes.imagealtizd } 
            class="object-center object-cover"
          />
                            </div>
                            <div class="sm:col-span-8 lg:col-span-7">
                                 <h2 class="text-xl font-medium text-gray-900 sm:pr-12"><RichText.Content value={attributes.contentvBn} /></h2>

                                <section aria-labelledby="information-heading" class="mt-1">
                                     <h3 id="information-heading" class="sr-only"><RichText.Content value={attributes.contentnqi} /></h3>

                                    <p class="font-medium text-gray-900">
                                        <RichText.Content value={attributes.contenteiw} /></p>
                                    <div class="mt-4">
                                         <h4 class="sr-only"><RichText.Content value={attributes.contentqXu} /></h4>

                                        <div class="flex items-center">
                                            <p class="text-sm text-gray-700">
                                                <RichText.Content value={attributes.contentEBM} /><span class="sr-only"><RichText.Content value={attributes.contentbVS} /></span>

                                            </p>
                                            <div class="ml-1 flex items-center">
                                                
      <svg
         class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggGq }}
        >
      </svg>
      
                                                
      <svg
         class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPez }}
        >
      </svg>
      
                                                
      <svg
         class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPqT }}
        >
      </svg>
      
                                                
      <svg
         class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmaN }}
        >
      </svg>
      
                                                
      <svg
         class="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQlu }}
        >
      </svg>
      
                                            </div>
                                            <div class="hidden ml-4 lg:flex lg:items-center"> <span class="text-gray-300" aria-hidden="true"><RichText.Content value={attributes.contentFvl} /></span>
 <span class="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentsjQ} /></span>

                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section aria-labelledby="options-heading" class="mt-8">
                                     <h3 id="options-heading" class="sr-only"><RichText.Content value={attributes.contentjPw} /></h3>

                                    <form>
                                        <div>
                                             <h4 class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentxVn} /></h4>

                                            <fieldset class="mt-2">
                                                <legend class="sr-only">
                                                    <RichText.Content value={attributes.contentkYB} /></legend>
                                                <div class="flex items-center space-x-3">
                                                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                                                        <input type="radio" name="color-choice" value="Black" class="sr-only" aria-labelledby="color-choice-0-label"/>
                                                        <p id="color-choice-0-label" class="sr-only">
                                                            <RichText.Content value={attributes.contentfkH} /></p> <span aria-hidden="true" class="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"/>

                                                    </label>
                                                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                        <input type="radio" name="color-choice" value="Heather Grey" class="sr-only" aria-labelledby="color-choice-1-label"/>
                                                        <p id="color-choice-1-label" class="sr-only">
                                                            <RichText.Content value={attributes.contentqXI} /></p> <span aria-hidden="true" class="h-8 w-8 bg-gray-400 border border-black border-opacity-10 rounded-full"/>

                                                    </label>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="mt-8">
                                            <div class="flex items-center justify-between">
                                                 <h4 class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentyNI} /></h4>
 <span class="text-sm font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentNXg} /></span>

                                            </div>
                                            <fieldset class="mt-2">
                                                <legend class="sr-only">
                                                    <RichText.Content value={attributes.contentihk} /></legend>
                                                <div class="grid grid-cols-7 gap-2">
                                                    <label class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                                                        <input type="radio" name="size-choice" value="XXS" class="sr-only" aria-labelledby="size-choice-0-label"/>
                                                        <p id="size-choice-0-label">
                                                            <RichText.Content value={attributes.contentMun} /></p>
                                                    </label>
                                                    <label class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                                                        <input type="radio" name="size-choice" value="XS" class="sr-only" aria-labelledby="size-choice-1-label"/>
                                                        <p id="size-choice-1-label">
                                                            <RichText.Content value={attributes.contentqft} /></p>
                                                    </label>
                                                    <label class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                                                        <input type="radio" name="size-choice" value="S" class="sr-only" aria-labelledby="size-choice-2-label"/>
                                                        <p id="size-choice-2-label">
                                                            <RichText.Content value={attributes.contentvzA} /></p>
                                                    </label>
                                                    <label class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                                                        <input type="radio" name="size-choice" value="M" class="sr-only" aria-labelledby="size-choice-3-label"/>
                                                        <p id="size-choice-3-label">
                                                            <RichText.Content value={attributes.contentHjV} /></p>
                                                    </label>
                                                    <label class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                                                        <input type="radio" name="size-choice" value="L" class="sr-only" aria-labelledby="size-choice-4-label"/>
                                                        <p id="size-choice-4-label">
                                                            <RichText.Content value={attributes.contentqio} /></p>
                                                    </label>
                                                    <label class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                                                        <input type="radio" name="size-choice" value="XL" class="sr-only" aria-labelledby="size-choice-5-label"/>
                                                        <p id="size-choice-5-label">
                                                            <RichText.Content value={attributes.contenttsR} /></p>
                                                    </label>
                                                    <label class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 opacity-25 cursor-not-allowed">
                                                        <input type="radio" name="size-choice" value="XXL" disabled="" class="sr-only" aria-labelledby="size-choice-6-label"/>
                                                        <p id="size-choice-6-label">
                                                            <RichText.Content value={attributes.contentufL} /></p>
                                                    </label>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <button type="submit" class="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <RichText.Content value={attributes.contentoop} /></button>
                                        <p class="absolute top-4 left-4 text-center sm:static sm:mt-8"> <span class="font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentCln} /></span>

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
        