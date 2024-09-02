
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-centered-text-and-dropdown-product-filters', {
            title: 'with centered text and dropdown product filters',
            icon: (<img src="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9sdkgI4V9sdjhX2x2SAjhX2x2OFfbHZICOFfbHY4V9s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" />),
            category: 'common',
            attributes: {
  "contentzpR": {
    "type": "string",
    "default": "Filters"
  },
  "contentukJ": {
    "type": "string",
    "default": "Close menu"
  },
  "contentqVJ": {
    "type": "string",
    "default": " Category "
  },
  "contentBWd": {
    "type": "string",
    "default": " Tees "
  },
  "contentPcF": {
    "type": "string",
    "default": " Crewnecks "
  },
  "contentThn": {
    "type": "string",
    "default": " Hats "
  },
  "contentjnj": {
    "type": "string",
    "default": " Brand "
  },
  "contentKhQ": {
    "type": "string",
    "default": " Clothing Company "
  },
  "contentgPQ": {
    "type": "string",
    "default": " Fashion Inc. "
  },
  "contentGZj": {
    "type": "string",
    "default": " Shoes &#039;n More "
  },
  "contentzQy": {
    "type": "string",
    "default": " Color "
  },
  "contentBNN": {
    "type": "string",
    "default": " White "
  },
  "contentHdu": {
    "type": "string",
    "default": " Black "
  },
  "contentqji": {
    "type": "string",
    "default": " Grey "
  },
  "contentlqR": {
    "type": "string",
    "default": " Sizes "
  },
  "contentyqh": {
    "type": "string",
    "default": "New Arrivals"
  },
  "contentDWN": {
    "type": "string",
    "default": "Thoughtfully designed objects for the workspace, home, and travel."
  },
  "contentmPu": {
    "type": "string",
    "default": "Product filters"
  },
  "contentkmM": {
    "type": "string",
    "default": "\n              Sort\n              \n              "
  },
  "contentwho": {
    "type": "string",
    "default": " Most Popular "
  },
  "contentmZu": {
    "type": "string",
    "default": " Best Rating "
  },
  "contentaDo": {
    "type": "string",
    "default": " Newest "
  },
  "contentudh": {
    "type": "string",
    "default": "Filters"
  },
  "contentJat": {
    "type": "string",
    "default": "Category"
  },
  "contenterN": {
    "type": "string",
    "default": "1"
  },
  "contentTcb": {
    "type": "string",
    "default": " Tees "
  },
  "contentxJk": {
    "type": "string",
    "default": " Crewnecks "
  },
  "contentAjN": {
    "type": "string",
    "default": " Hats "
  },
  "contentdcP": {
    "type": "string",
    "default": "Brand"
  },
  "contentiXt": {
    "type": "string",
    "default": " Clothing Company "
  },
  "contenthRP": {
    "type": "string",
    "default": " Fashion Inc. "
  },
  "contentRfV": {
    "type": "string",
    "default": " Shoes &#039;n More "
  },
  "contentbaZ": {
    "type": "string",
    "default": "Color"
  },
  "contentABM": {
    "type": "string",
    "default": " White "
  },
  "contentvKy": {
    "type": "string",
    "default": " Black "
  },
  "contentHtI": {
    "type": "string",
    "default": " Grey "
  },
  "contentuEB": {
    "type": "string",
    "default": "Sizes"
  },
  "svgess": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgJOI": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgxok": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgvYr": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svguZc": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svglaP": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgCSK": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgQfz": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgFND": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgYPc": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgess }
            onChange={ ( value ) => {
              setAttributes({ svgess: value });
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
            value={ attributes.svgJOI }
            onChange={ ( value ) => {
              setAttributes({ svgJOI: value });
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
            value={ attributes.svgxok }
            onChange={ ( value ) => {
              setAttributes({ svgxok: value });
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
            value={ attributes.svgvYr }
            onChange={ ( value ) => {
              setAttributes({ svgvYr: value });
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
            value={ attributes.svguZc }
            onChange={ ( value ) => {
              setAttributes({ svguZc: value });
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
            value={ attributes.svglaP }
            onChange={ ( value ) => {
              setAttributes({ svglaP: value });
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
            value={ attributes.svgCSK }
            onChange={ ( value ) => {
              setAttributes({ svgCSK: value });
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
            value={ attributes.svgQfz }
            onChange={ ( value ) => {
              setAttributes({ svgQfz: value });
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
            value={ attributes.svgFND }
            onChange={ ( value ) => {
              setAttributes({ svgFND: value });
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
            value={ attributes.svgYPc }
            onChange={ ( value ) => {
              setAttributes({ svgYPc: value });
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
        <div className="bg-gray-50">
            <div className="fixed inset-0 flex z-40 sm:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"/>
                <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
                    <div className="px-4 flex items-center justify-between">
                         <h2 className="text-lg font-medium text-gray-900"><RichText tagName="span" value={attributes.contentzpR} default="Filters" onChange={ (newtext) =>  {
        setAttributes({ contentzpR: newtext });
      }}
    /></h2>

                        <button type="button" className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentukJ} default="Close menu" onChange={ (newtext) =>  {
        setAttributes({ contentukJ: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgess }}
        >
      </svg>
      
                        </button>
                    </div>
                    <form className="mt-4">
                        <div className="border-t border-gray-200 px-4 py-6">
                             <h3 className="-mx-2 -my-3 flow-root">
            
            <button type="button" className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400" aria-controls="filter-section-0" aria-expanded="false">
              <span className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentqVJ} default="Category" onChange={ (newtext) =>  {
        setAttributes({ contentqVJ: newtext });
      }}
    /></span>
              <span className="ml-6 flex items-center">
                
                
      <svg
         className="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJOI }}
        >
      </svg>
      
              </span>
            </button>
          </h3>

                            <div className="pt-6" id="filter-section-0">
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <input id="filter-mobile-category-0" name="category[]" value="tees" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-category-0" className="ml-3 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentBWd} default="Tees" onChange={ (newtext) => { setAttributes({ contentBWd: newtext }); }} /></label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="filter-mobile-category-1" name="category[]" value="crewnecks" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-category-1" className="ml-3 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentPcF} default="Crewnecks" onChange={ (newtext) => { setAttributes({ contentPcF: newtext }); }} /></label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="filter-mobile-category-2" name="category[]" value="hats" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-category-2" className="ml-3 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentThn} default="Hats" onChange={ (newtext) => { setAttributes({ contentThn: newtext }); }} /></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-6">
                             <h3 className="-mx-2 -my-3 flow-root">
            
            <button type="button" className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400" aria-controls="filter-section-1" aria-expanded="false">
              <span className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentjnj} default="Brand" onChange={ (newtext) =>  {
        setAttributes({ contentjnj: newtext });
      }}
    /></span>
              <span className="ml-6 flex items-center">
                
                
      <svg
         className="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxok }}
        >
      </svg>
      
              </span>
            </button>
          </h3>

                            <div className="pt-6" id="filter-section-1">
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <input id="filter-mobile-brand-0" name="brand[]" value="clothing-company" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-brand-0" className="ml-3 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentKhQ} default="Clothing Company" onChange={ (newtext) => { setAttributes({ contentKhQ: newtext }); }} /></label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="filter-mobile-brand-1" name="brand[]" value="fashion-inc" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-brand-1" className="ml-3 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentgPQ} default="Fashion Inc." onChange={ (newtext) => { setAttributes({ contentgPQ: newtext }); }} /></label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="filter-mobile-brand-2" name="brand[]" value="shoes-n-more" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-brand-2" className="ml-3 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentGZj} default="Shoes &#039;n More" onChange={ (newtext) => { setAttributes({ contentGZj: newtext }); }} /></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-6">
                             <h3 className="-mx-2 -my-3 flow-root">
            
            <button type="button" className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400" aria-controls="filter-section-2" aria-expanded="false">
              <span className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentzQy} default="Color" onChange={ (newtext) =>  {
        setAttributes({ contentzQy: newtext });
      }}
    /></span>
              <span className="ml-6 flex items-center">
                
                
      <svg
         className="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvYr }}
        >
      </svg>
      
              </span>
            </button>
          </h3>

                            <div className="pt-6" id="filter-section-2">
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-color-0" className="ml-3 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentBNN} default="White" onChange={ (newtext) => { setAttributes({ contentBNN: newtext }); }} /></label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="filter-mobile-color-1" name="color[]" value="black" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-color-1" className="ml-3 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentHdu} default="Black" onChange={ (newtext) => { setAttributes({ contentHdu: newtext }); }} /></label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="filter-mobile-color-2" name="color[]" value="grey" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-color-2" className="ml-3 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentqji} default="Grey" onChange={ (newtext) => { setAttributes({ contentqji: newtext }); }} /></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-6">
                             <h3 className="-mx-2 -my-3 flow-root">
            
            <button type="button" className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400" aria-controls="filter-section-3" aria-expanded="false">
              <span className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentlqR} default="Sizes" onChange={ (newtext) =>  {
        setAttributes({ contentlqR: newtext });
      }}
    /></span>
              <span className="ml-6 flex items-center">
                
                
      <svg
         className="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguZc }}
        >
      </svg>
      
              </span>
            </button>
          </h3>

                            <div className="pt-6" id="filter-section-3">
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <input id="filter-mobile-sizes-0" name="sizes[]" value="s" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-sizes-0" className="ml-3 text-sm text-gray-500">S</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="filter-mobile-sizes-1" name="sizes[]" value="m" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-sizes-1" className="ml-3 text-sm text-gray-500">M</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="filter-mobile-sizes-2" name="sizes[]" value="l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-sizes-2" className="ml-3 text-sm text-gray-500">L</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="max-w-3xl mx-auto px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="py-24">
                     <h1 className="text-4xl font-extrabold tracking-tight text-gray-900"><RichText tagName="span" value={attributes.contentyqh} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentyqh: newtext });
      }}
    /></h1>

                    <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
                        <RichText tagName="span" value={attributes.contentDWN} default="Thoughtfully designed objects for the workspace, home, and travel." onChange={ (newtext) => { setAttributes({ contentDWN: newtext }); }} /></p>
                </div>
                <section aria-labelledby="filter-heading" className="border-t border-gray-200 py-6">
                     <h2 id="filter-heading" className="sr-only"><RichText tagName="span" value={attributes.contentmPu} default="Product filters" onChange={ (newtext) =>  {
        setAttributes({ contentmPu: newtext });
      }}
    /></h2>

                    <div className="flex items-center justify-between">
                        <div className="relative z-10 inline-block text-left">
                            <div>
                                <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <RichText tagName="span" value={attributes.contentkmM} default="Sort" onChange={ (newtext) => { setAttributes({ contentkmM: newtext }); }} />
                                        
      <svg
         className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglaP }}
        >
      </svg>
      
                                </button>
                            </div>
                            <div className="origin-top-left absolute left-0 z-10 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">
                                <div className="py-1" role="none"> <span className="block px-4 py-2 text-sm font-medium text-gray-900" role="menuitem" tabindex="-1" id="mobile-menu-item-0"><RichText tagName="span" value={attributes.contentwho} default="Most Popular" onChange={ (newtext) =>  {
        setAttributes({ contentwho: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm font-medium text-gray-900" role="menuitem" tabindex="-1" id="mobile-menu-item-1"><RichText tagName="span" value={attributes.contentmZu} default="Best Rating" onChange={ (newtext) =>  {
        setAttributes({ contentmZu: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm font-medium text-gray-900" role="menuitem" tabindex="-1" id="mobile-menu-item-2"><RichText tagName="span" value={attributes.contentaDo} default="Newest" onChange={ (newtext) =>  {
        setAttributes({ contentaDo: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                        <button type="button" className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden">
                            <RichText tagName="span" value={attributes.contentudh} default="Filters" onChange={ (newtext) => { setAttributes({ contentudh: newtext }); }} /></button>
                        <div className="hidden sm:flex sm:items-baseline sm:space-x-8">
                            <div id="desktop-menu" className="relative z-10 inline-block text-left">
                                <div>
                                    <button type="button" className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentJat} default="Category" onChange={ (newtext) =>  {
        setAttributes({ contentJat: newtext });
      }}
    /></span>
 <span className="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums"><RichText tagName="span" value={attributes.contenterN} default="1" onChange={ (newtext) =>  {
        setAttributes({ contenterN: newtext });
      }}
    /></span>

                                        
      <svg
         className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCSK }}
        >
      </svg>
      
                                    </button>
                                </div>
                                <div className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <form className="space-y-4">
                                        <div className="flex items-center">
                                            <input id="filter-category-0" name="category[]" value="tees" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-category-0" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText tagName="span" value={attributes.contentTcb} default="Tees" onChange={ (newtext) => { setAttributes({ contentTcb: newtext }); }} /></label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-category-1" name="category[]" value="crewnecks" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-category-1" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText tagName="span" value={attributes.contentxJk} default="Crewnecks" onChange={ (newtext) => { setAttributes({ contentxJk: newtext }); }} /></label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-category-2" name="category[]" value="hats" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-category-2" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText tagName="span" value={attributes.contentAjN} default="Hats" onChange={ (newtext) => { setAttributes({ contentAjN: newtext }); }} /></label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div id="desktop-menu" className="relative z-10 inline-block text-left">
                                <div>
                                    <button type="button" className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentdcP} default="Brand" onChange={ (newtext) =>  {
        setAttributes({ contentdcP: newtext });
      }}
    /></span>

                                        
      <svg
         className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQfz }}
        >
      </svg>
      
                                    </button>
                                </div>
                                <div className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <form className="space-y-4">
                                        <div className="flex items-center">
                                            <input id="filter-brand-0" name="brand[]" value="clothing-company" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-brand-0" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText tagName="span" value={attributes.contentiXt} default="Clothing Company" onChange={ (newtext) => { setAttributes({ contentiXt: newtext }); }} /></label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-brand-1" name="brand[]" value="fashion-inc" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-brand-1" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText tagName="span" value={attributes.contenthRP} default="Fashion Inc." onChange={ (newtext) => { setAttributes({ contenthRP: newtext }); }} /></label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-brand-2" name="brand[]" value="shoes-n-more" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-brand-2" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText tagName="span" value={attributes.contentRfV} default="Shoes &#039;n More" onChange={ (newtext) => { setAttributes({ contentRfV: newtext }); }} /></label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div id="desktop-menu" className="relative z-10 inline-block text-left">
                                <div>
                                    <button type="button" className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentbaZ} default="Color" onChange={ (newtext) =>  {
        setAttributes({ contentbaZ: newtext });
      }}
    /></span>

                                        
      <svg
         className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFND }}
        >
      </svg>
      
                                    </button>
                                </div>
                                <div className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <form className="space-y-4">
                                        <div className="flex items-center">
                                            <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-color-0" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText tagName="span" value={attributes.contentABM} default="White" onChange={ (newtext) => { setAttributes({ contentABM: newtext }); }} /></label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-color-1" name="color[]" value="black" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-color-1" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText tagName="span" value={attributes.contentvKy} default="Black" onChange={ (newtext) => { setAttributes({ contentvKy: newtext }); }} /></label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-color-2" name="color[]" value="grey" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-color-2" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText tagName="span" value={attributes.contentHtI} default="Grey" onChange={ (newtext) => { setAttributes({ contentHtI: newtext }); }} /></label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div id="desktop-menu" className="relative z-10 inline-block text-left">
                                <div>
                                    <button type="button" className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentuEB} default="Sizes" onChange={ (newtext) =>  {
        setAttributes({ contentuEB: newtext });
      }}
    /></span>

                                        
      <svg
         className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYPc }}
        >
      </svg>
      
                                    </button>
                                </div>
                                <div className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <form className="space-y-4">
                                        <div className="flex items-center">
                                            <input id="filter-sizes-0" name="sizes[]" value="s" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-sizes-0" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">S</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-sizes-1" name="sizes[]" value="m" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-sizes-1" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">M</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-sizes-2" name="sizes[]" value="l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-sizes-2" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">L</label>
                                        </div>
                                    </form>
                                </div>
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
            save(props) {
            const { attributes } = props;

            return (
                <div>
    <div>
        <div class="bg-gray-50">
            <div class="fixed inset-0 flex z-40 sm:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"/>
                <div class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
                    <div class="px-4 flex items-center justify-between">
                         <h2 class="text-lg font-medium text-gray-900"><RichText.Content value={attributes.contentzpR} /></h2>

                        <button type="button" class="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentukJ} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgess }}
        >
      </svg>
      
                        </button>
                    </div>
                    <form class="mt-4">
                        <div class="border-t border-gray-200 px-4 py-6">
                             <h3 class="-mx-2 -my-3 flow-root">
            
            <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400" aria-controls="filter-section-0" aria-expanded="false">
              <span class="font-medium text-gray-900"><RichText.Content value={attributes.contentqVJ} /></span>
              <span class="ml-6 flex items-center">
                
                
      <svg
         class="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJOI }}
        >
      </svg>
      
              </span>
            </button>
          </h3>

                            <div class="pt-6" id="filter-section-0">
                                <div class="space-y-6">
                                    <div class="flex items-center">
                                        <input id="filter-mobile-category-0" name="category[]" value="tees" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-category-0" class="ml-3 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentBWd} /></label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="filter-mobile-category-1" name="category[]" value="crewnecks" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-category-1" class="ml-3 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentPcF} /></label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="filter-mobile-category-2" name="category[]" value="hats" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-category-2" class="ml-3 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentThn} /></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-t border-gray-200 px-4 py-6">
                             <h3 class="-mx-2 -my-3 flow-root">
            
            <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400" aria-controls="filter-section-1" aria-expanded="false">
              <span class="font-medium text-gray-900"><RichText.Content value={attributes.contentjnj} /></span>
              <span class="ml-6 flex items-center">
                
                
      <svg
         class="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxok }}
        >
      </svg>
      
              </span>
            </button>
          </h3>

                            <div class="pt-6" id="filter-section-1">
                                <div class="space-y-6">
                                    <div class="flex items-center">
                                        <input id="filter-mobile-brand-0" name="brand[]" value="clothing-company" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-brand-0" class="ml-3 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentKhQ} /></label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="filter-mobile-brand-1" name="brand[]" value="fashion-inc" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-brand-1" class="ml-3 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentgPQ} /></label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="filter-mobile-brand-2" name="brand[]" value="shoes-n-more" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-brand-2" class="ml-3 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentGZj} /></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-t border-gray-200 px-4 py-6">
                             <h3 class="-mx-2 -my-3 flow-root">
            
            <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400" aria-controls="filter-section-2" aria-expanded="false">
              <span class="font-medium text-gray-900"><RichText.Content value={attributes.contentzQy} /></span>
              <span class="ml-6 flex items-center">
                
                
      <svg
         class="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvYr }}
        >
      </svg>
      
              </span>
            </button>
          </h3>

                            <div class="pt-6" id="filter-section-2">
                                <div class="space-y-6">
                                    <div class="flex items-center">
                                        <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-color-0" class="ml-3 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentBNN} /></label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="filter-mobile-color-1" name="color[]" value="black" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-color-1" class="ml-3 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentHdu} /></label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="filter-mobile-color-2" name="color[]" value="grey" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-color-2" class="ml-3 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentqji} /></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-t border-gray-200 px-4 py-6">
                             <h3 class="-mx-2 -my-3 flow-root">
            
            <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400" aria-controls="filter-section-3" aria-expanded="false">
              <span class="font-medium text-gray-900"><RichText.Content value={attributes.contentlqR} /></span>
              <span class="ml-6 flex items-center">
                
                
      <svg
         class="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguZc }}
        >
      </svg>
      
              </span>
            </button>
          </h3>

                            <div class="pt-6" id="filter-section-3">
                                <div class="space-y-6">
                                    <div class="flex items-center">
                                        <input id="filter-mobile-sizes-0" name="sizes[]" value="s" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-sizes-0" class="ml-3 text-sm text-gray-500">S</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="filter-mobile-sizes-1" name="sizes[]" value="m" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-sizes-1" class="ml-3 text-sm text-gray-500">M</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="filter-mobile-sizes-2" name="sizes[]" value="l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-sizes-2" class="ml-3 text-sm text-gray-500">L</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="max-w-3xl mx-auto px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="py-24">
                     <h1 class="text-4xl font-extrabold tracking-tight text-gray-900"><RichText.Content value={attributes.contentyqh} /></h1>

                    <p class="mt-4 max-w-3xl mx-auto text-base text-gray-500">
                        <RichText.Content value={attributes.contentDWN} /></p>
                </div>
                <section aria-labelledby="filter-heading" class="border-t border-gray-200 py-6">
                     <h2 id="filter-heading" class="sr-only"><RichText.Content value={attributes.contentmPu} /></h2>

                    <div class="flex items-center justify-between">
                        <div class="relative z-10 inline-block text-left">
                            <div>
                                <button type="button" class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <RichText.Content value={attributes.contentkmM} />
                                        
      <svg
         class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglaP }}
        >
      </svg>
      
                                </button>
                            </div>
                            <div class="origin-top-left absolute left-0 z-10 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">
                                <div class="py-1" role="none"> <span class="block px-4 py-2 text-sm font-medium text-gray-900" role="menuitem" tabindex="-1" id="mobile-menu-item-0"><RichText.Content value={attributes.contentwho} /></span>
 <span class="block px-4 py-2 text-sm font-medium text-gray-900" role="menuitem" tabindex="-1" id="mobile-menu-item-1"><RichText.Content value={attributes.contentmZu} /></span>
 <span class="block px-4 py-2 text-sm font-medium text-gray-900" role="menuitem" tabindex="-1" id="mobile-menu-item-2"><RichText.Content value={attributes.contentaDo} /></span>

                                </div>
                            </div>
                        </div>
                        <button type="button" class="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden">
                            <RichText.Content value={attributes.contentudh} /></button>
                        <div class="hidden sm:flex sm:items-baseline sm:space-x-8">
                            <div id="desktop-menu" class="relative z-10 inline-block text-left">
                                <div>
                                    <button type="button" class="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900" aria-expanded="false"> <span><RichText.Content value={attributes.contentJat} /></span>
 <span class="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums"><RichText.Content value={attributes.contenterN} /></span>

                                        
      <svg
         class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCSK }}
        >
      </svg>
      
                                    </button>
                                </div>
                                <div class="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <form class="space-y-4">
                                        <div class="flex items-center">
                                            <input id="filter-category-0" name="category[]" value="tees" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-category-0" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText.Content value={attributes.contentTcb} /></label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-category-1" name="category[]" value="crewnecks" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-category-1" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText.Content value={attributes.contentxJk} /></label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-category-2" name="category[]" value="hats" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-category-2" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText.Content value={attributes.contentAjN} /></label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div id="desktop-menu" class="relative z-10 inline-block text-left">
                                <div>
                                    <button type="button" class="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900" aria-expanded="false"> <span><RichText.Content value={attributes.contentdcP} /></span>

                                        
      <svg
         class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQfz }}
        >
      </svg>
      
                                    </button>
                                </div>
                                <div class="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <form class="space-y-4">
                                        <div class="flex items-center">
                                            <input id="filter-brand-0" name="brand[]" value="clothing-company" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-brand-0" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText.Content value={attributes.contentiXt} /></label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-brand-1" name="brand[]" value="fashion-inc" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-brand-1" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText.Content value={attributes.contenthRP} /></label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-brand-2" name="brand[]" value="shoes-n-more" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-brand-2" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText.Content value={attributes.contentRfV} /></label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div id="desktop-menu" class="relative z-10 inline-block text-left">
                                <div>
                                    <button type="button" class="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900" aria-expanded="false"> <span><RichText.Content value={attributes.contentbaZ} /></span>

                                        
      <svg
         class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFND }}
        >
      </svg>
      
                                    </button>
                                </div>
                                <div class="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <form class="space-y-4">
                                        <div class="flex items-center">
                                            <input id="filter-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-color-0" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText.Content value={attributes.contentABM} /></label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-color-1" name="color[]" value="black" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-color-1" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText.Content value={attributes.contentvKy} /></label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-color-2" name="color[]" value="grey" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-color-2" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <RichText.Content value={attributes.contentHtI} /></label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div id="desktop-menu" class="relative z-10 inline-block text-left">
                                <div>
                                    <button type="button" class="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900" aria-expanded="false"> <span><RichText.Content value={attributes.contentuEB} /></span>

                                        
      <svg
         class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYPc }}
        >
      </svg>
      
                                    </button>
                                </div>
                                <div class="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <form class="space-y-4">
                                        <div class="flex items-center">
                                            <input id="filter-sizes-0" name="sizes[]" value="s" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-sizes-0" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">S</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-sizes-1" name="sizes[]" value="m" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-sizes-1" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">M</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-sizes-2" name="sizes[]" value="l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                            <label for="filter-sizes-2" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">L</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        