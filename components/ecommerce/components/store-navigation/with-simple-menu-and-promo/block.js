
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-simple-menu-and-promo', {
            title: 'with simple menu and promo',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentmFj": {
    "type": "string",
    "default": "Close menu"
  },
  "contentSdZ": {
    "type": "string",
    "default": "Women"
  },
  "contentQhF": {
    "type": "string",
    "default": "Men"
  },
  "contentAyZ": {
    "type": "string",
    "default": "Featured"
  },
  "contentVUn": {
    "type": "string",
    "default": " Sleep "
  },
  "contentWEW": {
    "type": "string",
    "default": " Swimwear "
  },
  "contentDAE": {
    "type": "string",
    "default": " Underwear "
  },
  "contentdVb": {
    "type": "string",
    "default": "Categories"
  },
  "contentgjv": {
    "type": "string",
    "default": " Basic Tees "
  },
  "contentmDl": {
    "type": "string",
    "default": " Artwork Tees "
  },
  "contentjTO": {
    "type": "string",
    "default": " Bottoms "
  },
  "contentJBV": {
    "type": "string",
    "default": " Underwear "
  },
  "contentPIg": {
    "type": "string",
    "default": " Accessories "
  },
  "contentOdc": {
    "type": "string",
    "default": "Collection"
  },
  "contentlMb": {
    "type": "string",
    "default": " Everything "
  },
  "contentGXL": {
    "type": "string",
    "default": " Core "
  },
  "contentNTQ": {
    "type": "string",
    "default": " New Arrivals "
  },
  "contentAfV": {
    "type": "string",
    "default": " Sale "
  },
  "contentrJd": {
    "type": "string",
    "default": "Brands"
  },
  "contentcUJ": {
    "type": "string",
    "default": " Full Nelson "
  },
  "contentSlu": {
    "type": "string",
    "default": " My Way "
  },
  "contentLjW": {
    "type": "string",
    "default": " Re-Arranged "
  },
  "contentcyF": {
    "type": "string",
    "default": " Counterfeit "
  },
  "contentFVb": {
    "type": "string",
    "default": " Significant Other "
  },
  "contentded": {
    "type": "string",
    "default": "Featured"
  },
  "contentgpv": {
    "type": "string",
    "default": " Casual "
  },
  "contentyfi": {
    "type": "string",
    "default": " Boxers "
  },
  "contentdYb": {
    "type": "string",
    "default": " Outdoor "
  },
  "contentjMC": {
    "type": "string",
    "default": "Categories"
  },
  "contentSMk": {
    "type": "string",
    "default": " Artwork Tees "
  },
  "contentmbe": {
    "type": "string",
    "default": " Pants "
  },
  "contentVgj": {
    "type": "string",
    "default": " Accessories "
  },
  "contentpUw": {
    "type": "string",
    "default": " Boxers "
  },
  "contentiPV": {
    "type": "string",
    "default": " Basic Tees "
  },
  "contentHXE": {
    "type": "string",
    "default": "Collection"
  },
  "contentgHY": {
    "type": "string",
    "default": " Everything "
  },
  "contentSGE": {
    "type": "string",
    "default": " Core "
  },
  "contentnFo": {
    "type": "string",
    "default": " New Arrivals "
  },
  "contentwDw": {
    "type": "string",
    "default": " Sale "
  },
  "contentUyW": {
    "type": "string",
    "default": "Brands"
  },
  "contentfWV": {
    "type": "string",
    "default": " Significant Other "
  },
  "contentuDJ": {
    "type": "string",
    "default": " My Way "
  },
  "contentZsw": {
    "type": "string",
    "default": " Counterfeit "
  },
  "contentnWC": {
    "type": "string",
    "default": " Re-Arranged "
  },
  "contentOWL": {
    "type": "string",
    "default": " Full Nelson "
  },
  "contenteMQ": {
    "type": "string",
    "default": "Company"
  },
  "contentpoh": {
    "type": "string",
    "default": "Stores"
  },
  "contentuGn": {
    "type": "string",
    "default": "Create an account"
  },
  "contentNsf": {
    "type": "string",
    "default": "Sign in"
  },
  "contentmAd": {
    "type": "string",
    "default": "Currency"
  },
  "contentJYv": {
    "type": "string",
    "default": "CAD"
  },
  "contentGde": {
    "type": "string",
    "default": "USD"
  },
  "contentuPu": {
    "type": "string",
    "default": "AUD"
  },
  "contentHfg": {
    "type": "string",
    "default": "EUR"
  },
  "contentUYY": {
    "type": "string",
    "default": "GBP"
  },
  "contentjau": {
    "type": "string",
    "default": "Currency"
  },
  "contentybY": {
    "type": "string",
    "default": "CAD"
  },
  "contentiAM": {
    "type": "string",
    "default": "USD"
  },
  "contentqWx": {
    "type": "string",
    "default": "AUD"
  },
  "contentcoy": {
    "type": "string",
    "default": "EUR"
  },
  "contentKAO": {
    "type": "string",
    "default": "GBP"
  },
  "contentaPh": {
    "type": "string",
    "default": "Get free delivery on orders over $100"
  },
  "contenttlv": {
    "type": "string",
    "default": "Create an account"
  },
  "contentEse": {
    "type": "string",
    "default": "Sign in"
  },
  "contenttlN": {
    "type": "string",
    "default": "Workflow"
  },
  "contentDjg": {
    "type": "string",
    "default": "Women"
  },
  "contentJiX": {
    "type": "string",
    "default": "Featured"
  },
  "contentlef": {
    "type": "string",
    "default": " Sleep "
  },
  "contentegg": {
    "type": "string",
    "default": " Swimwear "
  },
  "contentZqi": {
    "type": "string",
    "default": " Underwear "
  },
  "contentrjO": {
    "type": "string",
    "default": "Categories"
  },
  "contentsZw": {
    "type": "string",
    "default": " Basic Tees "
  },
  "contentfDR": {
    "type": "string",
    "default": " Artwork Tees "
  },
  "contentMnK": {
    "type": "string",
    "default": " Bottoms "
  },
  "contentrEl": {
    "type": "string",
    "default": " Underwear "
  },
  "contentkOa": {
    "type": "string",
    "default": " Accessories "
  },
  "contentooJ": {
    "type": "string",
    "default": "Collection"
  },
  "contentGZs": {
    "type": "string",
    "default": " Everything "
  },
  "contentRdm": {
    "type": "string",
    "default": " Core "
  },
  "contentjQN": {
    "type": "string",
    "default": " New Arrivals "
  },
  "contentvMq": {
    "type": "string",
    "default": " Sale "
  },
  "contentPfy": {
    "type": "string",
    "default": "Brands"
  },
  "contentfmx": {
    "type": "string",
    "default": " Full Nelson "
  },
  "contentBOa": {
    "type": "string",
    "default": " My Way "
  },
  "contentaBa": {
    "type": "string",
    "default": " Re-Arranged "
  },
  "contentvpq": {
    "type": "string",
    "default": " Counterfeit "
  },
  "contentcst": {
    "type": "string",
    "default": " Significant Other "
  },
  "contentzsA": {
    "type": "string",
    "default": "Men"
  },
  "contentwGi": {
    "type": "string",
    "default": "Featured"
  },
  "contenttRQ": {
    "type": "string",
    "default": " Casual "
  },
  "contentJHo": {
    "type": "string",
    "default": " Boxers "
  },
  "contentwZp": {
    "type": "string",
    "default": " Outdoor "
  },
  "contentMNK": {
    "type": "string",
    "default": "Categories"
  },
  "contentpiT": {
    "type": "string",
    "default": " Artwork Tees "
  },
  "contentGmi": {
    "type": "string",
    "default": " Pants "
  },
  "contentMUu": {
    "type": "string",
    "default": " Accessories "
  },
  "contentSIh": {
    "type": "string",
    "default": " Boxers "
  },
  "contentdMm": {
    "type": "string",
    "default": " Basic Tees "
  },
  "contentDZQ": {
    "type": "string",
    "default": "Collection"
  },
  "contentkhS": {
    "type": "string",
    "default": " Everything "
  },
  "contenteRv": {
    "type": "string",
    "default": " Core "
  },
  "contentRsf": {
    "type": "string",
    "default": " New Arrivals "
  },
  "contentgEy": {
    "type": "string",
    "default": " Sale "
  },
  "contentdEs": {
    "type": "string",
    "default": "Brands"
  },
  "contentczH": {
    "type": "string",
    "default": " Significant Other "
  },
  "contentZca": {
    "type": "string",
    "default": " My Way "
  },
  "contentxqc": {
    "type": "string",
    "default": " Counterfeit "
  },
  "contentrnt": {
    "type": "string",
    "default": " Re-Arranged "
  },
  "contentnAW": {
    "type": "string",
    "default": " Full Nelson "
  },
  "contentCZy": {
    "type": "string",
    "default": "Company"
  },
  "contentHod": {
    "type": "string",
    "default": "Stores"
  },
  "contentsZh": {
    "type": "string",
    "default": "Open menu"
  },
  "contenthXW": {
    "type": "string",
    "default": "Search"
  },
  "contentYYP": {
    "type": "string",
    "default": "Workflow"
  },
  "contentzKY": {
    "type": "string",
    "default": "Search"
  },
  "contentWzz": {
    "type": "string",
    "default": "Account"
  },
  "contentfUh": {
    "type": "string",
    "default": "0"
  },
  "contentbmU": {
    "type": "string",
    "default": "items in cart, view bag"
  },
  "imageurlGLj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtrkE": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlLJl": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtrfM": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgeGU": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgPKb": {
    "type": "string",
    "default": "<path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M6 8l4 4 4-4\"/>"
  },
  "svgLlF": {
    "type": "string",
    "default": "<path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M6 8l4 4 4-4\"/>"
  },
  "svgrFh": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgjQS": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"/>"
  },
  "svgruy": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"/>"
  },
  "svgoKL": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\"/>"
  },
  "svgdXV": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z\"/>"
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
            value={ attributes.svgeGU }
            onChange={ ( value ) => {
              setAttributes({ svgeGU: value });
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
            value={ attributes.svgPKb }
            onChange={ ( value ) => {
              setAttributes({ svgPKb: value });
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
            value={ attributes.svgLlF }
            onChange={ ( value ) => {
              setAttributes({ svgLlF: value });
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
            value={ attributes.svgrFh }
            onChange={ ( value ) => {
              setAttributes({ svgrFh: value });
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
            value={ attributes.svgjQS }
            onChange={ ( value ) => {
              setAttributes({ svgjQS: value });
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
            value={ attributes.svgruy }
            onChange={ ( value ) => {
              setAttributes({ svgruy: value });
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
            value={ attributes.svgoKL }
            onChange={ ( value ) => {
              setAttributes({ svgoKL: value });
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
            value={ attributes.svgdXV }
            onChange={ ( value ) => {
              setAttributes({ svgdXV: value });
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
        <div className="bg-white">
            <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"/>
                <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                    <div className="px-4 pt-5 pb-2 flex">
                        <button type="button" className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"> <span className="sr-only"><RichText tagName="span" value={attributes.contentmFj} default="Close menu" onChange={ (newtext) =>  {
        setAttributes({ contentmFj: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeGU }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="mt-2">
                        <div className="border-b border-gray-200">
                            <div className="-mb-px flex px-4 space-x-8" aria-orientation="horizontal" role="tablist">
                                <button id="tabs-1-tab-1" className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">
                                    <RichText tagName="span" value={attributes.contentSdZ} default="Women" onChange={ (newtext) => { setAttributes({ contentSdZ: newtext }); }} /></button>
                                <button id="tabs-1-tab-2" className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">
                                    <RichText tagName="span" value={attributes.contentQhF} default="Men" onChange={ (newtext) => { setAttributes({ contentQhF: newtext }); }} /></button>
                            </div>
                        </div>
                        <div id="tabs-1-panel-1" className="px-4 pt-10 pb-6 space-y-12" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                            <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                                <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                                    <div>
                                        <p id="mobile-featured-heading-0" className="font-medium text-gray-900">
                                            <RichText tagName="span" value={attributes.contentAyZ} default="Featured" onChange={ (newtext) => { setAttributes({ contentAyZ: newtext }); }} /></p>
                                        <ul role="list" aria-labelledby="mobile-featured-heading-0" className="mt-6 space-y-6">
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentVUn} default="Sleep" onChange={ (newtext) =>  {
        setAttributes({ contentVUn: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentWEW} default="Swimwear" onChange={ (newtext) =>  {
        setAttributes({ contentWEW: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentDAE} default="Underwear" onChange={ (newtext) =>  {
        setAttributes({ contentDAE: newtext });
      }}
    /></span>

                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p id="mobile-categories-heading" className="font-medium text-gray-900">
                                            <RichText tagName="span" value={attributes.contentdVb} default="Categories" onChange={ (newtext) => { setAttributes({ contentdVb: newtext }); }} /></p>
                                        <ul role="list" aria-labelledby="mobile-categories-heading" className="mt-6 space-y-6">
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentgjv} default="Basic Tees" onChange={ (newtext) =>  {
        setAttributes({ contentgjv: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentmDl} default="Artwork Tees" onChange={ (newtext) =>  {
        setAttributes({ contentmDl: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentjTO} default="Bottoms" onChange={ (newtext) =>  {
        setAttributes({ contentjTO: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentJBV} default="Underwear" onChange={ (newtext) =>  {
        setAttributes({ contentJBV: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentPIg} default="Accessories" onChange={ (newtext) =>  {
        setAttributes({ contentPIg: newtext });
      }}
    /></span>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                                    <div>
                                        <p id="mobile-collection-heading" className="font-medium text-gray-900">
                                            <RichText tagName="span" value={attributes.contentOdc} default="Collection" onChange={ (newtext) => { setAttributes({ contentOdc: newtext }); }} /></p>
                                        <ul role="list" aria-labelledby="mobile-collection-heading" className="mt-6 space-y-6">
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentlMb} default="Everything" onChange={ (newtext) =>  {
        setAttributes({ contentlMb: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentGXL} default="Core" onChange={ (newtext) =>  {
        setAttributes({ contentGXL: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentNTQ} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentNTQ: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentAfV} default="Sale" onChange={ (newtext) =>  {
        setAttributes({ contentAfV: newtext });
      }}
    /></span>

                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p id="mobile-brand-heading" className="font-medium text-gray-900">
                                            <RichText tagName="span" value={attributes.contentrJd} default="Brands" onChange={ (newtext) => { setAttributes({ contentrJd: newtext }); }} /></p>
                                        <ul role="list" aria-labelledby="mobile-brand-heading" className="mt-6 space-y-6">
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentcUJ} default="Full Nelson" onChange={ (newtext) =>  {
        setAttributes({ contentcUJ: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentSlu} default="My Way" onChange={ (newtext) =>  {
        setAttributes({ contentSlu: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentLjW} default="Re-Arranged" onChange={ (newtext) =>  {
        setAttributes({ contentLjW: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentcyF} default="Counterfeit" onChange={ (newtext) =>  {
        setAttributes({ contentcyF: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentFVb} default="Significant Other" onChange={ (newtext) =>  {
        setAttributes({ contentFVb: newtext });
      }}
    /></span>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tabs-1-panel-2" className="px-4 pt-10 pb-6 space-y-12" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
                            <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                                <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                                    <div>
                                        <p id="mobile-featured-heading-1" className="font-medium text-gray-900">
                                            <RichText tagName="span" value={attributes.contentded} default="Featured" onChange={ (newtext) => { setAttributes({ contentded: newtext }); }} /></p>
                                        <ul role="list" aria-labelledby="mobile-featured-heading-1" className="mt-6 space-y-6">
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentgpv} default="Casual" onChange={ (newtext) =>  {
        setAttributes({ contentgpv: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentyfi} default="Boxers" onChange={ (newtext) =>  {
        setAttributes({ contentyfi: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentdYb} default="Outdoor" onChange={ (newtext) =>  {
        setAttributes({ contentdYb: newtext });
      }}
    /></span>

                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p id="mobile-categories-heading" className="font-medium text-gray-900">
                                            <RichText tagName="span" value={attributes.contentjMC} default="Categories" onChange={ (newtext) => { setAttributes({ contentjMC: newtext }); }} /></p>
                                        <ul role="list" aria-labelledby="mobile-categories-heading" className="mt-6 space-y-6">
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentSMk} default="Artwork Tees" onChange={ (newtext) =>  {
        setAttributes({ contentSMk: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentmbe} default="Pants" onChange={ (newtext) =>  {
        setAttributes({ contentmbe: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentVgj} default="Accessories" onChange={ (newtext) =>  {
        setAttributes({ contentVgj: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentpUw} default="Boxers" onChange={ (newtext) =>  {
        setAttributes({ contentpUw: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentiPV} default="Basic Tees" onChange={ (newtext) =>  {
        setAttributes({ contentiPV: newtext });
      }}
    /></span>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                                    <div>
                                        <p id="mobile-collection-heading" className="font-medium text-gray-900">
                                            <RichText tagName="span" value={attributes.contentHXE} default="Collection" onChange={ (newtext) => { setAttributes({ contentHXE: newtext }); }} /></p>
                                        <ul role="list" aria-labelledby="mobile-collection-heading" className="mt-6 space-y-6">
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentgHY} default="Everything" onChange={ (newtext) =>  {
        setAttributes({ contentgHY: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentSGE} default="Core" onChange={ (newtext) =>  {
        setAttributes({ contentSGE: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentnFo} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentnFo: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentwDw} default="Sale" onChange={ (newtext) =>  {
        setAttributes({ contentwDw: newtext });
      }}
    /></span>

                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p id="mobile-brand-heading" className="font-medium text-gray-900">
                                            <RichText tagName="span" value={attributes.contentUyW} default="Brands" onChange={ (newtext) => { setAttributes({ contentUyW: newtext }); }} /></p>
                                        <ul role="list" aria-labelledby="mobile-brand-heading" className="mt-6 space-y-6">
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentfWV} default="Significant Other" onChange={ (newtext) =>  {
        setAttributes({ contentfWV: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentuDJ} default="My Way" onChange={ (newtext) =>  {
        setAttributes({ contentuDJ: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentZsw} default="Counterfeit" onChange={ (newtext) =>  {
        setAttributes({ contentZsw: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentnWC} default="Re-Arranged" onChange={ (newtext) =>  {
        setAttributes({ contentnWC: newtext });
      }}
    /></span>

                                            </li>
                                            <li className="flex"> <span className="text-gray-500"><RichText tagName="span" value={attributes.contentOWL} default="Full Nelson" onChange={ (newtext) =>  {
        setAttributes({ contentOWL: newtext });
      }}
    /></span>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                        <div className="flow-root"> <span className="-m-2 p-2 block font-medium text-gray-900"><RichText tagName="span" value={attributes.contenteMQ} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contenteMQ: newtext });
      }}
    /></span>

                        </div>
                        <div className="flow-root"> <span className="-m-2 p-2 block font-medium text-gray-900"><RichText tagName="span" value={attributes.contentpoh} default="Stores" onChange={ (newtext) =>  {
        setAttributes({ contentpoh: newtext });
      }}
    /></span>

                        </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                        <div className="flow-root"> <span className="-m-2 p-2 block font-medium text-gray-900"><RichText tagName="span" value={attributes.contentuGn} default="Create an account" onChange={ (newtext) =>  {
        setAttributes({ contentuGn: newtext });
      }}
    /></span>

                        </div>
                        <div className="flow-root"> <span className="-m-2 p-2 block font-medium text-gray-900"><RichText tagName="span" value={attributes.contentNsf} default="Sign in" onChange={ (newtext) =>  {
        setAttributes({ contentNsf: newtext });
      }}
    /></span>

                        </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                        <form>
                            <div className="inline-block">
                                <label for="mobile-currency" className="sr-only">
                                    <RichText tagName="span" value={attributes.contentmAd} default="Currency" onChange={ (newtext) => { setAttributes({ contentmAd: newtext }); }} /></label>
                                <div className="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                                    <select id="mobile-currency" name="currency" className="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent">
                                        <option>
                                            <RichText tagName="span" value={attributes.contentJYv} default="CAD" onChange={ (newtext) => { setAttributes({ contentJYv: newtext }); }} /></option>
                                        <option>
                                            <RichText tagName="span" value={attributes.contentGde} default="USD" onChange={ (newtext) => { setAttributes({ contentGde: newtext }); }} /></option>
                                        <option>
                                            <RichText tagName="span" value={attributes.contentuPu} default="AUD" onChange={ (newtext) => { setAttributes({ contentuPu: newtext }); }} /></option>
                                        <option>
                                            <RichText tagName="span" value={attributes.contentHfg} default="EUR" onChange={ (newtext) => { setAttributes({ contentHfg: newtext }); }} /></option>
                                        <option>
                                            <RichText tagName="span" value={attributes.contentUYY} default="GBP" onChange={ (newtext) => { setAttributes({ contentUYY: newtext }); }} /></option>
                                    </select>
                                    <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                                        
      <svg
         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-5 h-5 text-gray-500"
          dangerouslySetInnerHTML={ { __html: attributes.svgPKb }}
        >
      </svg>
      
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <header className="relative">
                <nav aria-label="Top">
                    <div className="bg-gray-900">
                        <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
                            <form className="hidden lg:block lg:flex-1">
                                <div className="flex">
                                    <label for="desktop-currency" className="sr-only">
                                        <RichText tagName="span" value={attributes.contentjau} default="Currency" onChange={ (newtext) => { setAttributes({ contentjau: newtext }); }} /></label>
                                    <div className="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                                        <select id="desktop-currency" name="currency" className="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent">
                                            <option>
                                                <RichText tagName="span" value={attributes.contentybY} default="CAD" onChange={ (newtext) => { setAttributes({ contentybY: newtext }); }} /></option>
                                            <option>
                                                <RichText tagName="span" value={attributes.contentiAM} default="USD" onChange={ (newtext) => { setAttributes({ contentiAM: newtext }); }} /></option>
                                            <option>
                                                <RichText tagName="span" value={attributes.contentqWx} default="AUD" onChange={ (newtext) => { setAttributes({ contentqWx: newtext }); }} /></option>
                                            <option>
                                                <RichText tagName="span" value={attributes.contentcoy} default="EUR" onChange={ (newtext) => { setAttributes({ contentcoy: newtext }); }} /></option>
                                            <option>
                                                <RichText tagName="span" value={attributes.contentKAO} default="GBP" onChange={ (newtext) => { setAttributes({ contentKAO: newtext }); }} /></option>
                                        </select>
                                        <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                                            
      <svg
         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-5 h-5 text-gray-300"
          dangerouslySetInnerHTML={ { __html: attributes.svgLlF }}
        >
      </svg>
      
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                                <RichText tagName="span" value={attributes.contentaPh} default="Get free delivery on orders over $100" onChange={ (newtext) => { setAttributes({ contentaPh: newtext }); }} /></p>
                            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"> <span className="text-sm font-medium text-white hover:text-gray-100"><RichText tagName="span" value={attributes.contenttlv} default="Create an account" onChange={ (newtext) =>  {
        setAttributes({ contenttlv: newtext });
      }}
    /></span>
 <span className="h-6 w-px bg-gray-600" aria-hidden="true"/>

                                <span className="text-sm font-medium text-white hover:text-gray-100">
                                    <RichText tagName="span" value={attributes.contentEse} default="Sign in" onChange={ (newtext) => { setAttributes({ contentEse: newtext }); }} /></span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="border-b border-gray-200">
                                <div className="h-16 flex items-center justify-between">
                                    <div className="hidden lg:flex lg:items-center"> <span>
                  <span className="sr-only"><RichText tagName="span" value={attributes.contenttlN} default="Workflow" onChange={ (newtext) =>  {
        setAttributes({ contenttlN: newtext });
      }}
    /></span>

                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlGLj: media.url,
            imagealtrkE: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlGLj } 
            alt={ attributes.imagealtrkE } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                                        </span>
                                    </div>
                                    <div className="hidden h-full lg:flex">
                                        <div className="ml-8">
                                            <div className="h-full flex justify-center space-x-8">
                                                <div className="flex">
                                                    <div className="relative flex">
                                                        <button type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                                                            <RichText tagName="span" value={attributes.contentDjg} default="Women" onChange={ (newtext) => { setAttributes({ contentDjg: newtext }); }} /></button>
                                                    </div>
                                                    <div className="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
                                                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                                                        <div className="relative bg-white">
                                                            <div className="max-w-7xl mx-auto px-8">
                                                                <div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                                                        <div>
                                                                            <p id="desktop-featured-heading-0" className="font-medium text-gray-900">
                                                                                <RichText tagName="span" value={attributes.contentJiX} default="Featured" onChange={ (newtext) => { setAttributes({ contentJiX: newtext }); }} /></p>
                                                                            <ul role="list" aria-labelledby="desktop-featured-heading-0" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentlef} default="Sleep" onChange={ (newtext) =>  {
        setAttributes({ contentlef: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentegg} default="Swimwear" onChange={ (newtext) =>  {
        setAttributes({ contentegg: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentZqi} default="Underwear" onChange={ (newtext) =>  {
        setAttributes({ contentZqi: newtext });
      }}
    /></span>

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div>
                                                                            <p id="desktop-categories-heading" className="font-medium text-gray-900">
                                                                                <RichText tagName="span" value={attributes.contentrjO} default="Categories" onChange={ (newtext) => { setAttributes({ contentrjO: newtext }); }} /></p>
                                                                            <ul role="list" aria-labelledby="desktop-categories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentsZw} default="Basic Tees" onChange={ (newtext) =>  {
        setAttributes({ contentsZw: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentfDR} default="Artwork Tees" onChange={ (newtext) =>  {
        setAttributes({ contentfDR: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentMnK} default="Bottoms" onChange={ (newtext) =>  {
        setAttributes({ contentMnK: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentrEl} default="Underwear" onChange={ (newtext) =>  {
        setAttributes({ contentrEl: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentkOa} default="Accessories" onChange={ (newtext) =>  {
        setAttributes({ contentkOa: newtext });
      }}
    /></span>

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                                                        <div>
                                                                            <p id="desktop-collection-heading" className="font-medium text-gray-900">
                                                                                <RichText tagName="span" value={attributes.contentooJ} default="Collection" onChange={ (newtext) => { setAttributes({ contentooJ: newtext }); }} /></p>
                                                                            <ul role="list" aria-labelledby="desktop-collection-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentGZs} default="Everything" onChange={ (newtext) =>  {
        setAttributes({ contentGZs: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentRdm} default="Core" onChange={ (newtext) =>  {
        setAttributes({ contentRdm: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentjQN} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentjQN: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentvMq} default="Sale" onChange={ (newtext) =>  {
        setAttributes({ contentvMq: newtext });
      }}
    /></span>

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div>
                                                                            <p id="desktop-brand-heading" className="font-medium text-gray-900">
                                                                                <RichText tagName="span" value={attributes.contentPfy} default="Brands" onChange={ (newtext) => { setAttributes({ contentPfy: newtext }); }} /></p>
                                                                            <ul role="list" aria-labelledby="desktop-brand-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentfmx} default="Full Nelson" onChange={ (newtext) =>  {
        setAttributes({ contentfmx: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentBOa} default="My Way" onChange={ (newtext) =>  {
        setAttributes({ contentBOa: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentaBa} default="Re-Arranged" onChange={ (newtext) =>  {
        setAttributes({ contentaBa: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentvpq} default="Counterfeit" onChange={ (newtext) =>  {
        setAttributes({ contentvpq: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentcst} default="Significant Other" onChange={ (newtext) =>  {
        setAttributes({ contentcst: newtext });
      }}
    /></span>

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="relative flex">
                                                        <button type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                                                            <RichText tagName="span" value={attributes.contentzsA} default="Men" onChange={ (newtext) => { setAttributes({ contentzsA: newtext }); }} /></button>
                                                    </div>
                                                    <div className="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
                                                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                                                        <div className="relative bg-white">
                                                            <div className="max-w-7xl mx-auto px-8">
                                                                <div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                                                        <div>
                                                                            <p id="desktop-featured-heading-1" className="font-medium text-gray-900">
                                                                                <RichText tagName="span" value={attributes.contentwGi} default="Featured" onChange={ (newtext) => { setAttributes({ contentwGi: newtext }); }} /></p>
                                                                            <ul role="list" aria-labelledby="desktop-featured-heading-1" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contenttRQ} default="Casual" onChange={ (newtext) =>  {
        setAttributes({ contenttRQ: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentJHo} default="Boxers" onChange={ (newtext) =>  {
        setAttributes({ contentJHo: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentwZp} default="Outdoor" onChange={ (newtext) =>  {
        setAttributes({ contentwZp: newtext });
      }}
    /></span>

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div>
                                                                            <p id="desktop-categories-heading" className="font-medium text-gray-900">
                                                                                <RichText tagName="span" value={attributes.contentMNK} default="Categories" onChange={ (newtext) => { setAttributes({ contentMNK: newtext }); }} /></p>
                                                                            <ul role="list" aria-labelledby="desktop-categories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentpiT} default="Artwork Tees" onChange={ (newtext) =>  {
        setAttributes({ contentpiT: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentGmi} default="Pants" onChange={ (newtext) =>  {
        setAttributes({ contentGmi: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentMUu} default="Accessories" onChange={ (newtext) =>  {
        setAttributes({ contentMUu: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentSIh} default="Boxers" onChange={ (newtext) =>  {
        setAttributes({ contentSIh: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentdMm} default="Basic Tees" onChange={ (newtext) =>  {
        setAttributes({ contentdMm: newtext });
      }}
    /></span>

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                                                        <div>
                                                                            <p id="desktop-collection-heading" className="font-medium text-gray-900">
                                                                                <RichText tagName="span" value={attributes.contentDZQ} default="Collection" onChange={ (newtext) => { setAttributes({ contentDZQ: newtext }); }} /></p>
                                                                            <ul role="list" aria-labelledby="desktop-collection-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentkhS} default="Everything" onChange={ (newtext) =>  {
        setAttributes({ contentkhS: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contenteRv} default="Core" onChange={ (newtext) =>  {
        setAttributes({ contenteRv: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentRsf} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentRsf: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentgEy} default="Sale" onChange={ (newtext) =>  {
        setAttributes({ contentgEy: newtext });
      }}
    /></span>

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div>
                                                                            <p id="desktop-brand-heading" className="font-medium text-gray-900">
                                                                                <RichText tagName="span" value={attributes.contentdEs} default="Brands" onChange={ (newtext) => { setAttributes({ contentdEs: newtext }); }} /></p>
                                                                            <ul role="list" aria-labelledby="desktop-brand-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentczH} default="Significant Other" onChange={ (newtext) =>  {
        setAttributes({ contentczH: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentZca} default="My Way" onChange={ (newtext) =>  {
        setAttributes({ contentZca: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentxqc} default="Counterfeit" onChange={ (newtext) =>  {
        setAttributes({ contentxqc: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentrnt} default="Re-Arranged" onChange={ (newtext) =>  {
        setAttributes({ contentrnt: newtext });
      }}
    /></span>

                                                                                </li>
                                                                                <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentnAW} default="Full Nelson" onChange={ (newtext) =>  {
        setAttributes({ contentnAW: newtext });
      }}
    /></span>

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <span className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><RichText tagName="span" value={attributes.contentCZy} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentCZy: newtext });
      }}
    /></span>
 <span className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><RichText tagName="span" value={attributes.contentHod} default="Stores" onChange={ (newtext) =>  {
        setAttributes({ contentHod: newtext });
      }}
    /></span>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex items-center lg:hidden">
                                        <button type="button" className="-ml-2 bg-white p-2 rounded-md text-gray-400"> <span className="sr-only"><RichText tagName="span" value={attributes.contentsZh} default="Open menu" onChange={ (newtext) =>  {
        setAttributes({ contentsZh: newtext });
      }}
    /></span>

                                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrFh }}
        >
      </svg>
      
                                        </button> <span className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only"><RichText tagName="span" value={attributes.contenthXW} default="Search" onChange={ (newtext) =>  {
        setAttributes({ contenthXW: newtext });
      }}
    /></span>

                                        
      <svg
         className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjQS }}
        >
      </svg>
      
                                        </span>
                                    </div> <span className="lg:hidden">
                <span className="sr-only"><RichText tagName="span" value={attributes.contentYYP} default="Workflow" onChange={ (newtext) =>  {
        setAttributes({ contentYYP: newtext });
      }}
    /></span>

                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlLJl: media.url,
            imagealtrfM: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlLJl } 
            alt={ attributes.imagealtrfM } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                                    </span>
                                    <div className="flex-1 flex items-center justify-end">
                                        <div className="flex items-center lg:ml-8">
                                            <div className="flex space-x-8">
                                                <div className="hidden lg:flex"> <span className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span className="sr-only"><RichText tagName="span" value={attributes.contentzKY} default="Search" onChange={ (newtext) =>  {
        setAttributes({ contentzKY: newtext });
      }}
    /></span>

                                                    
      <svg
         className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgruy }}
        >
      </svg>
      
                                                    </span>
                                                </div>
                                                <div className="flex"> <span className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span className="sr-only"><RichText tagName="span" value={attributes.contentWzz} default="Account" onChange={ (newtext) =>  {
        setAttributes({ contentWzz: newtext });
      }}
    /></span>

                                                    
      <svg
         className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoKL }}
        >
      </svg>
      
                                                    </span>
                                                </div>
                                            </div> <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true"/>

                                            <div className="flow-root"> <span className="group -m-2 p-2 flex items-center">
                      
                      
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdXV }}
        >
      </svg>
      
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"><RichText tagName="span" value={attributes.contentfUh} default="0" onChange={ (newtext) =>  {
        setAttributes({ contentfUh: newtext });
      }}
    /></span>
 <span className="sr-only"><RichText tagName="span" value={attributes.contentbmU} default="items in cart, view bag" onChange={ (newtext) =>  {
        setAttributes({ contentbmU: newtext });
      }}
    /></span>
</span>
                                        </div>
                                    </div>
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
                </div>
                );
            },
            save(props) {
            const { attributes } = props;

            return (
                <div>
    <div>
        <div class="bg-white">
            <div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"/>
                <div class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                    <div class="px-4 pt-5 pb-2 flex">
                        <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"> <span class="sr-only"><RichText.Content value={attributes.contentmFj} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeGU }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="mt-2">
                        <div class="border-b border-gray-200">
                            <div class="-mb-px flex px-4 space-x-8" aria-orientation="horizontal" role="tablist">
                                <button id="tabs-1-tab-1" class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">
                                    <RichText.Content value={attributes.contentSdZ} /></button>
                                <button id="tabs-1-tab-2" class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">
                                    <RichText.Content value={attributes.contentQhF} /></button>
                            </div>
                        </div>
                        <div id="tabs-1-panel-1" class="px-4 pt-10 pb-6 space-y-12" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                            <div class="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                                <div class="grid grid-cols-1 gap-y-10 gap-x-6">
                                    <div>
                                        <p id="mobile-featured-heading-0" class="font-medium text-gray-900">
                                            <RichText.Content value={attributes.contentAyZ} /></p>
                                        <ul role="list" aria-labelledby="mobile-featured-heading-0" class="mt-6 space-y-6">
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentVUn} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentWEW} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentDAE} /></span>

                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p id="mobile-categories-heading" class="font-medium text-gray-900">
                                            <RichText.Content value={attributes.contentdVb} /></p>
                                        <ul role="list" aria-labelledby="mobile-categories-heading" class="mt-6 space-y-6">
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentgjv} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentmDl} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentjTO} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentJBV} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentPIg} /></span>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 gap-y-10 gap-x-6">
                                    <div>
                                        <p id="mobile-collection-heading" class="font-medium text-gray-900">
                                            <RichText.Content value={attributes.contentOdc} /></p>
                                        <ul role="list" aria-labelledby="mobile-collection-heading" class="mt-6 space-y-6">
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentlMb} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentGXL} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentNTQ} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentAfV} /></span>

                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p id="mobile-brand-heading" class="font-medium text-gray-900">
                                            <RichText.Content value={attributes.contentrJd} /></p>
                                        <ul role="list" aria-labelledby="mobile-brand-heading" class="mt-6 space-y-6">
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentcUJ} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentSlu} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentLjW} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentcyF} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentFVb} /></span>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tabs-1-panel-2" class="px-4 pt-10 pb-6 space-y-12" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
                            <div class="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                                <div class="grid grid-cols-1 gap-y-10 gap-x-6">
                                    <div>
                                        <p id="mobile-featured-heading-1" class="font-medium text-gray-900">
                                            <RichText.Content value={attributes.contentded} /></p>
                                        <ul role="list" aria-labelledby="mobile-featured-heading-1" class="mt-6 space-y-6">
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentgpv} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentyfi} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentdYb} /></span>

                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p id="mobile-categories-heading" class="font-medium text-gray-900">
                                            <RichText.Content value={attributes.contentjMC} /></p>
                                        <ul role="list" aria-labelledby="mobile-categories-heading" class="mt-6 space-y-6">
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentSMk} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentmbe} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentVgj} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentpUw} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentiPV} /></span>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 gap-y-10 gap-x-6">
                                    <div>
                                        <p id="mobile-collection-heading" class="font-medium text-gray-900">
                                            <RichText.Content value={attributes.contentHXE} /></p>
                                        <ul role="list" aria-labelledby="mobile-collection-heading" class="mt-6 space-y-6">
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentgHY} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentSGE} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentnFo} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentwDw} /></span>

                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p id="mobile-brand-heading" class="font-medium text-gray-900">
                                            <RichText.Content value={attributes.contentUyW} /></p>
                                        <ul role="list" aria-labelledby="mobile-brand-heading" class="mt-6 space-y-6">
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentfWV} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentuDJ} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentZsw} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentnWC} /></span>

                                            </li>
                                            <li class="flex"> <span class="text-gray-500"><RichText.Content value={attributes.contentOWL} /></span>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-gray-200 py-6 px-4 space-y-6">
                        <div class="flow-root"> <span class="-m-2 p-2 block font-medium text-gray-900"><RichText.Content value={attributes.contenteMQ} /></span>

                        </div>
                        <div class="flow-root"> <span class="-m-2 p-2 block font-medium text-gray-900"><RichText.Content value={attributes.contentpoh} /></span>

                        </div>
                    </div>
                    <div class="border-t border-gray-200 py-6 px-4 space-y-6">
                        <div class="flow-root"> <span class="-m-2 p-2 block font-medium text-gray-900"><RichText.Content value={attributes.contentuGn} /></span>

                        </div>
                        <div class="flow-root"> <span class="-m-2 p-2 block font-medium text-gray-900"><RichText.Content value={attributes.contentNsf} /></span>

                        </div>
                    </div>
                    <div class="border-t border-gray-200 py-6 px-4 space-y-6">
                        <form>
                            <div class="inline-block">
                                <label for="mobile-currency" class="sr-only">
                                    <RichText.Content value={attributes.contentmAd} /></label>
                                <div class="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                                    <select id="mobile-currency" name="currency" class="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent">
                                        <option>
                                            <RichText.Content value={attributes.contentJYv} /></option>
                                        <option>
                                            <RichText.Content value={attributes.contentGde} /></option>
                                        <option>
                                            <RichText.Content value={attributes.contentuPu} /></option>
                                        <option>
                                            <RichText.Content value={attributes.contentHfg} /></option>
                                        <option>
                                            <RichText.Content value={attributes.contentUYY} /></option>
                                    </select>
                                    <div class="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                                        
      <svg
         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-5 h-5 text-gray-500"
          dangerouslySetInnerHTML={ { __html: attributes.svgPKb }}
        >
      </svg>
      
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <header class="relative">
                <nav aria-label="Top">
                    <div class="bg-gray-900">
                        <div class="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
                            <form class="hidden lg:block lg:flex-1">
                                <div class="flex">
                                    <label for="desktop-currency" class="sr-only">
                                        <RichText.Content value={attributes.contentjau} /></label>
                                    <div class="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                                        <select id="desktop-currency" name="currency" class="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent">
                                            <option>
                                                <RichText.Content value={attributes.contentybY} /></option>
                                            <option>
                                                <RichText.Content value={attributes.contentiAM} /></option>
                                            <option>
                                                <RichText.Content value={attributes.contentqWx} /></option>
                                            <option>
                                                <RichText.Content value={attributes.contentcoy} /></option>
                                            <option>
                                                <RichText.Content value={attributes.contentKAO} /></option>
                                        </select>
                                        <div class="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                                            
      <svg
         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-5 h-5 text-gray-300"
          dangerouslySetInnerHTML={ { __html: attributes.svgLlF }}
        >
      </svg>
      
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p class="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                                <RichText.Content value={attributes.contentaPh} /></p>
                            <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"> <span class="text-sm font-medium text-white hover:text-gray-100"><RichText.Content value={attributes.contenttlv} /></span>
 <span class="h-6 w-px bg-gray-600" aria-hidden="true"/>

                                <span class="text-sm font-medium text-white hover:text-gray-100">
                                    <RichText.Content value={attributes.contentEse} /></span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div class="border-b border-gray-200">
                                <div class="h-16 flex items-center justify-between">
                                    <div class="hidden lg:flex lg:items-center"> <span>
                  <span class="sr-only"><RichText.Content value={attributes.contenttlN} /></span>

                                        
      <img
            src={ attributes.imageurlGLj } 
            alt={ attributes.imagealtrkE } 
            class="h-8 w-auto"
          />
                                        </span>
                                    </div>
                                    <div class="hidden h-full lg:flex">
                                        <div class="ml-8">
                                            <div class="h-full flex justify-center space-x-8">
                                                <div class="flex">
                                                    <div class="relative flex">
                                                        <button type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                                                            <RichText.Content value={attributes.contentDjg} /></button>
                                                    </div>
                                                    <div class="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
                                                        <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                                                        <div class="relative bg-white">
                                                            <div class="max-w-7xl mx-auto px-8">
                                                                <div class="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                                                    <div class="grid grid-cols-2 gap-y-10 gap-x-8">
                                                                        <div>
                                                                            <p id="desktop-featured-heading-0" class="font-medium text-gray-900">
                                                                                <RichText.Content value={attributes.contentJiX} /></p>
                                                                            <ul role="list" aria-labelledby="desktop-featured-heading-0" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentlef} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentegg} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentZqi} /></span>

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div>
                                                                            <p id="desktop-categories-heading" class="font-medium text-gray-900">
                                                                                <RichText.Content value={attributes.contentrjO} /></p>
                                                                            <ul role="list" aria-labelledby="desktop-categories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentsZw} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentfDR} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentMnK} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentrEl} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentkOa} /></span>

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div class="grid grid-cols-2 gap-y-10 gap-x-8">
                                                                        <div>
                                                                            <p id="desktop-collection-heading" class="font-medium text-gray-900">
                                                                                <RichText.Content value={attributes.contentooJ} /></p>
                                                                            <ul role="list" aria-labelledby="desktop-collection-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentGZs} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentRdm} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentjQN} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentvMq} /></span>

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div>
                                                                            <p id="desktop-brand-heading" class="font-medium text-gray-900">
                                                                                <RichText.Content value={attributes.contentPfy} /></p>
                                                                            <ul role="list" aria-labelledby="desktop-brand-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentfmx} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentBOa} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentaBa} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentvpq} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentcst} /></span>

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex">
                                                    <div class="relative flex">
                                                        <button type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                                                            <RichText.Content value={attributes.contentzsA} /></button>
                                                    </div>
                                                    <div class="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
                                                        <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                                                        <div class="relative bg-white">
                                                            <div class="max-w-7xl mx-auto px-8">
                                                                <div class="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                                                    <div class="grid grid-cols-2 gap-y-10 gap-x-8">
                                                                        <div>
                                                                            <p id="desktop-featured-heading-1" class="font-medium text-gray-900">
                                                                                <RichText.Content value={attributes.contentwGi} /></p>
                                                                            <ul role="list" aria-labelledby="desktop-featured-heading-1" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contenttRQ} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentJHo} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentwZp} /></span>

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div>
                                                                            <p id="desktop-categories-heading" class="font-medium text-gray-900">
                                                                                <RichText.Content value={attributes.contentMNK} /></p>
                                                                            <ul role="list" aria-labelledby="desktop-categories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentpiT} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentGmi} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentMUu} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentSIh} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentdMm} /></span>

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div class="grid grid-cols-2 gap-y-10 gap-x-8">
                                                                        <div>
                                                                            <p id="desktop-collection-heading" class="font-medium text-gray-900">
                                                                                <RichText.Content value={attributes.contentDZQ} /></p>
                                                                            <ul role="list" aria-labelledby="desktop-collection-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentkhS} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contenteRv} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentRsf} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentgEy} /></span>

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div>
                                                                            <p id="desktop-brand-heading" class="font-medium text-gray-900">
                                                                                <RichText.Content value={attributes.contentdEs} /></p>
                                                                            <ul role="list" aria-labelledby="desktop-brand-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentczH} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentZca} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentxqc} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentrnt} /></span>

                                                                                </li>
                                                                                <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentnAW} /></span>

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <span class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><RichText.Content value={attributes.contentCZy} /></span>
 <span class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><RichText.Content value={attributes.contentHod} /></span>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-1 flex items-center lg:hidden">
                                        <button type="button" class="-ml-2 bg-white p-2 rounded-md text-gray-400"> <span class="sr-only"><RichText.Content value={attributes.contentsZh} /></span>

                                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrFh }}
        >
      </svg>
      
                                        </button> <span class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only"><RichText.Content value={attributes.contenthXW} /></span>

                                        
      <svg
         class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjQS }}
        >
      </svg>
      
                                        </span>
                                    </div> <span class="lg:hidden">
                <span class="sr-only"><RichText.Content value={attributes.contentYYP} /></span>

                                    
      <img
            src={ attributes.imageurlLJl } 
            alt={ attributes.imagealtrfM } 
            class="h-8 w-auto"
          />
                                    </span>
                                    <div class="flex-1 flex items-center justify-end">
                                        <div class="flex items-center lg:ml-8">
                                            <div class="flex space-x-8">
                                                <div class="hidden lg:flex"> <span class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span class="sr-only"><RichText.Content value={attributes.contentzKY} /></span>

                                                    
      <svg
         class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgruy }}
        >
      </svg>
      
                                                    </span>
                                                </div>
                                                <div class="flex"> <span class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span class="sr-only"><RichText.Content value={attributes.contentWzz} /></span>

                                                    
      <svg
         class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoKL }}
        >
      </svg>
      
                                                    </span>
                                                </div>
                                            </div> <span class="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true"/>

                                            <div class="flow-root"> <span class="group -m-2 p-2 flex items-center">
                      
                      
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdXV }}
        >
      </svg>
      
                      <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"><RichText.Content value={attributes.contentfUh} /></span>
 <span class="sr-only"><RichText.Content value={attributes.contentbmU} /></span>
</span>
                                        </div>
                                    </div>
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
        });
        