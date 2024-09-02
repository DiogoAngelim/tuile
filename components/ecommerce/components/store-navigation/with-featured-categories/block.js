
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-featured-categories', {
            title: 'with featured categories',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentqzb": {
    "type": "string",
    "default": "Close menu"
  },
  "contentfgz": {
    "type": "string",
    "default": "Women"
  },
  "contentafE": {
    "type": "string",
    "default": "Men"
  },
  "contentTVe": {
    "type": "string",
    "default": "\n                New Arrivals\n              "
  },
  "contentMVV": {
    "type": "string",
    "default": "Shop now"
  },
  "contentJmv": {
    "type": "string",
    "default": "\n                Basic Tees\n              "
  },
  "contentVPN": {
    "type": "string",
    "default": "Shop now"
  },
  "contentrpn": {
    "type": "string",
    "default": "Clothing"
  },
  "contentETE": {
    "type": "string",
    "default": " Tops "
  },
  "contentfkU": {
    "type": "string",
    "default": " Dresses "
  },
  "contentxzG": {
    "type": "string",
    "default": " Pants "
  },
  "contentzZk": {
    "type": "string",
    "default": " Denim "
  },
  "contentWtT": {
    "type": "string",
    "default": " Sweaters "
  },
  "contentXvm": {
    "type": "string",
    "default": " T-Shirts "
  },
  "contentMei": {
    "type": "string",
    "default": " Jackets "
  },
  "contentGad": {
    "type": "string",
    "default": " Activewear "
  },
  "contentYjh": {
    "type": "string",
    "default": " Browse All "
  },
  "contentqZM": {
    "type": "string",
    "default": "Accessories"
  },
  "contentNKe": {
    "type": "string",
    "default": " Watches "
  },
  "contentUiI": {
    "type": "string",
    "default": " Wallets "
  },
  "contentFac": {
    "type": "string",
    "default": " Bags "
  },
  "contenttkc": {
    "type": "string",
    "default": " Sunglasses "
  },
  "contentDQC": {
    "type": "string",
    "default": " Hats "
  },
  "contentGnu": {
    "type": "string",
    "default": " Belts "
  },
  "contentWus": {
    "type": "string",
    "default": "Brands"
  },
  "contentXbr": {
    "type": "string",
    "default": " Full Nelson "
  },
  "contentzjE": {
    "type": "string",
    "default": " My Way "
  },
  "contentVBf": {
    "type": "string",
    "default": " Re-Arranged "
  },
  "contentAIe": {
    "type": "string",
    "default": " Counterfeit "
  },
  "contentfBy": {
    "type": "string",
    "default": " Significant Other "
  },
  "contentsXQ": {
    "type": "string",
    "default": "\n                New Arrivals\n              "
  },
  "contentRIz": {
    "type": "string",
    "default": "Shop now"
  },
  "contentqrx": {
    "type": "string",
    "default": "\n                Artwork Tees\n              "
  },
  "contentrvf": {
    "type": "string",
    "default": "Shop now"
  },
  "contentABM": {
    "type": "string",
    "default": "Clothing"
  },
  "contentODO": {
    "type": "string",
    "default": " Tops "
  },
  "contentBTv": {
    "type": "string",
    "default": " Pants "
  },
  "contentMlS": {
    "type": "string",
    "default": " Sweaters "
  },
  "contentlQs": {
    "type": "string",
    "default": " T-Shirts "
  },
  "contentgat": {
    "type": "string",
    "default": " Jackets "
  },
  "contentQRi": {
    "type": "string",
    "default": " Activewear "
  },
  "contentGBM": {
    "type": "string",
    "default": " Browse All "
  },
  "contentmNO": {
    "type": "string",
    "default": "Accessories"
  },
  "contentPiw": {
    "type": "string",
    "default": " Watches "
  },
  "contentCBl": {
    "type": "string",
    "default": " Wallets "
  },
  "contentHSM": {
    "type": "string",
    "default": " Bags "
  },
  "contentFTl": {
    "type": "string",
    "default": " Sunglasses "
  },
  "contentnlc": {
    "type": "string",
    "default": " Hats "
  },
  "contentNth": {
    "type": "string",
    "default": " Belts "
  },
  "contentYwF": {
    "type": "string",
    "default": "Brands"
  },
  "contentHzH": {
    "type": "string",
    "default": " Re-Arranged "
  },
  "contentYoa": {
    "type": "string",
    "default": " Counterfeit "
  },
  "contentaGQ": {
    "type": "string",
    "default": " Full Nelson "
  },
  "contentJwV": {
    "type": "string",
    "default": " My Way "
  },
  "contentBOs": {
    "type": "string",
    "default": "Company"
  },
  "contentsAY": {
    "type": "string",
    "default": "Stores"
  },
  "contentESI": {
    "type": "string",
    "default": "Sign in"
  },
  "contentPlG": {
    "type": "string",
    "default": "Create account"
  },
  "contentgoo": {
    "type": "string",
    "default": " CAD "
  },
  "contentIst": {
    "type": "string",
    "default": ", change currency"
  },
  "contentbOm": {
    "type": "string",
    "default": "Get free delivery on orders over $100"
  },
  "contentXCf": {
    "type": "string",
    "default": "Open menu"
  },
  "contentrTW": {
    "type": "string",
    "default": "Workflow"
  },
  "contentjSj": {
    "type": "string",
    "default": "Women"
  },
  "contentFnv": {
    "type": "string",
    "default": "\n                              New Arrivals\n                            "
  },
  "contentqEo": {
    "type": "string",
    "default": "Shop now"
  },
  "contentOnX": {
    "type": "string",
    "default": "\n                              Basic Tees\n                            "
  },
  "contentlaZ": {
    "type": "string",
    "default": "Shop now"
  },
  "contentASK": {
    "type": "string",
    "default": "Clothing"
  },
  "contentNeF": {
    "type": "string",
    "default": " Tops "
  },
  "contentGat": {
    "type": "string",
    "default": " Dresses "
  },
  "contentSCY": {
    "type": "string",
    "default": " Pants "
  },
  "contentbZC": {
    "type": "string",
    "default": " Denim "
  },
  "contentSAr": {
    "type": "string",
    "default": " Sweaters "
  },
  "contentpeZ": {
    "type": "string",
    "default": " T-Shirts "
  },
  "contentORf": {
    "type": "string",
    "default": " Jackets "
  },
  "contenthnj": {
    "type": "string",
    "default": " Activewear "
  },
  "contentYhg": {
    "type": "string",
    "default": " Browse All "
  },
  "contenttVS": {
    "type": "string",
    "default": "Accessories"
  },
  "contentFgP": {
    "type": "string",
    "default": " Watches "
  },
  "contentBHO": {
    "type": "string",
    "default": " Wallets "
  },
  "contentxDv": {
    "type": "string",
    "default": " Bags "
  },
  "contentzbB": {
    "type": "string",
    "default": " Sunglasses "
  },
  "contentlqm": {
    "type": "string",
    "default": " Hats "
  },
  "contentVHJ": {
    "type": "string",
    "default": " Belts "
  },
  "contentzCC": {
    "type": "string",
    "default": "Brands"
  },
  "contentxTB": {
    "type": "string",
    "default": " Full Nelson "
  },
  "contentWrS": {
    "type": "string",
    "default": " My Way "
  },
  "contentFvs": {
    "type": "string",
    "default": " Re-Arranged "
  },
  "contenthkk": {
    "type": "string",
    "default": " Counterfeit "
  },
  "contentHyR": {
    "type": "string",
    "default": " Significant Other "
  },
  "contentWqA": {
    "type": "string",
    "default": "Men"
  },
  "contentBcU": {
    "type": "string",
    "default": "\n                              New Arrivals\n                            "
  },
  "contentUVn": {
    "type": "string",
    "default": "Shop now"
  },
  "contentksi": {
    "type": "string",
    "default": "\n                              Artwork Tees\n                            "
  },
  "contentVjd": {
    "type": "string",
    "default": "Shop now"
  },
  "contentYqP": {
    "type": "string",
    "default": "Clothing"
  },
  "contentNcG": {
    "type": "string",
    "default": " Tops "
  },
  "contentEZw": {
    "type": "string",
    "default": " Pants "
  },
  "contentsmj": {
    "type": "string",
    "default": " Sweaters "
  },
  "contentRWG": {
    "type": "string",
    "default": " T-Shirts "
  },
  "contentTVW": {
    "type": "string",
    "default": " Jackets "
  },
  "contentFoR": {
    "type": "string",
    "default": " Activewear "
  },
  "contentxKY": {
    "type": "string",
    "default": " Browse All "
  },
  "contentixA": {
    "type": "string",
    "default": "Accessories"
  },
  "contentkxd": {
    "type": "string",
    "default": " Watches "
  },
  "contentkVc": {
    "type": "string",
    "default": " Wallets "
  },
  "contentmMt": {
    "type": "string",
    "default": " Bags "
  },
  "contentXnM": {
    "type": "string",
    "default": " Sunglasses "
  },
  "contentDQO": {
    "type": "string",
    "default": " Hats "
  },
  "contentLKP": {
    "type": "string",
    "default": " Belts "
  },
  "contentpoE": {
    "type": "string",
    "default": "Brands"
  },
  "contentjnk": {
    "type": "string",
    "default": " Re-Arranged "
  },
  "contentBUc": {
    "type": "string",
    "default": " Counterfeit "
  },
  "contentQpd": {
    "type": "string",
    "default": " Full Nelson "
  },
  "contentfov": {
    "type": "string",
    "default": " My Way "
  },
  "contentWwk": {
    "type": "string",
    "default": "Company"
  },
  "contentgax": {
    "type": "string",
    "default": "Stores"
  },
  "contentCTB": {
    "type": "string",
    "default": "Sign in"
  },
  "contentWBW": {
    "type": "string",
    "default": "Create account"
  },
  "contentcjv": {
    "type": "string",
    "default": " CAD "
  },
  "contentktz": {
    "type": "string",
    "default": ", change currency"
  },
  "contentIpw": {
    "type": "string",
    "default": "Search"
  },
  "contentZMh": {
    "type": "string",
    "default": "0"
  },
  "contentGsh": {
    "type": "string",
    "default": "items in cart, view bag"
  },
  "imageurlHpf": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-01.jpg'
  },
  "imagealtOTM": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Models sitting back to back, wearing Basic Tee in black and bone."
  },
  "imageurlLwx": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-02.jpg'
  },
  "imagealtvXv": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
  },
  "imageurlGRD": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/product-page-04-detail-product-shot-01.jpg'
  },
  "imagealtnOF": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Drawstring top with elastic loop closure and textured interior padding."
  },
  "imageurlRSP": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/category-page-02-image-card-06.jpg'
  },
  "imagealthwu": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
  },
  "imageurloRE": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/flags/flag-canada.svg'
  },
  "imagealtCVX": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlPkj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtkIA": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlRnk": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-01.jpg'
  },
  "imagealtEhr": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Models sitting back to back, wearing Basic Tee in black and bone."
  },
  "imageurltoC": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-02.jpg'
  },
  "imagealtHMD": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
  },
  "imageurlxSu": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/product-page-04-detail-product-shot-01.jpg'
  },
  "imagealtMIC": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Drawstring top with elastic loop closure and textured interior padding."
  },
  "imageurlFKp": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/category-page-02-image-card-06.jpg'
  },
  "imagealtWzO": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
  },
  "imageurlcYq": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/flags/flag-canada.svg'
  },
  "imagealtMoK": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgBnh": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgswG": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svghrW": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"/>"
  },
  "svgDGZ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z\"/>"
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
            value={ attributes.svgBnh }
            onChange={ ( value ) => {
              setAttributes({ svgBnh: value });
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
            value={ attributes.svgswG }
            onChange={ ( value ) => {
              setAttributes({ svgswG: value });
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
            value={ attributes.svghrW }
            onChange={ ( value ) => {
              setAttributes({ svghrW: value });
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
            value={ attributes.svgDGZ }
            onChange={ ( value ) => {
              setAttributes({ svgDGZ: value });
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
                        <button type="button" className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"> <span className="sr-only"><RichText tagName="span" value={attributes.contentqzb} default="Close menu" onChange={ (newtext) =>  {
        setAttributes({ contentqzb: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBnh }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="mt-2">
                        <div className="border-b border-gray-200">
                            <div className="-mb-px flex px-4 space-x-8" aria-orientation="horizontal" role="tablist">
                                <button id="tabs-1-tab-1" className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">
                                    <RichText tagName="span" value={attributes.contentfgz} default="Women" onChange={ (newtext) => { setAttributes({ contentfgz: newtext }); }} /></button>
                                <button id="tabs-1-tab-2" className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">
                                    <RichText tagName="span" value={attributes.contentafE} default="Men" onChange={ (newtext) => { setAttributes({ contentafE: newtext }); }} /></button>
                            </div>
                        </div>
                        <div id="tabs-1-panel-1" className="pt-10 pb-8 px-4 space-y-10" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                            <div className="grid grid-cols-2 gap-x-4">
                                <div className="group relative text-sm">
                                    <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlHpf: media.url,
            imagealtOTM: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlHpf } 
            alt={ attributes.imagealtOTM } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                    </div> <span className="mt-6 block font-medium text-gray-900">
                <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentTVe} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentTVe: newtext });
      }}
    /></span>

                                    <p aria-hidden="true" className="mt-1">
                                        <RichText tagName="span" value={attributes.contentMVV} default="Shop now" onChange={ (newtext) => { setAttributes({ contentMVV: newtext }); }} /></p>
                                </div>
                                <div className="group relative text-sm">
                                    <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlLwx: media.url,
            imagealtvXv: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlLwx } 
            alt={ attributes.imagealtvXv } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                    </div> <span className="mt-6 block font-medium text-gray-900">
                <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentJmv} default="Basic Tees" onChange={ (newtext) =>  {
        setAttributes({ contentJmv: newtext });
      }}
    /></span>

                                    <p aria-hidden="true" className="mt-1">
                                        <RichText tagName="span" value={attributes.contentVPN} default="Shop now" onChange={ (newtext) => { setAttributes({ contentVPN: newtext }); }} /></p>
                                </div>
                            </div>
                            <div>
                                <p id="women-clothing-heading-mobile" className="font-medium text-gray-900">
                                    <RichText tagName="span" value={attributes.contentrpn} default="Clothing" onChange={ (newtext) => { setAttributes({ contentrpn: newtext }); }} /></p>
                                <ul role="list" aria-labelledby="women-clothing-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentETE} default="Tops" onChange={ (newtext) =>  {
        setAttributes({ contentETE: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentfkU} default="Dresses" onChange={ (newtext) =>  {
        setAttributes({ contentfkU: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentxzG} default="Pants" onChange={ (newtext) =>  {
        setAttributes({ contentxzG: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentzZk} default="Denim" onChange={ (newtext) =>  {
        setAttributes({ contentzZk: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentWtT} default="Sweaters" onChange={ (newtext) =>  {
        setAttributes({ contentWtT: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentXvm} default="T-Shirts" onChange={ (newtext) =>  {
        setAttributes({ contentXvm: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentMei} default="Jackets" onChange={ (newtext) =>  {
        setAttributes({ contentMei: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentGad} default="Activewear" onChange={ (newtext) =>  {
        setAttributes({ contentGad: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentYjh} default="Browse All" onChange={ (newtext) =>  {
        setAttributes({ contentYjh: newtext });
      }}
    /></span>

                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p id="women-accessories-heading-mobile" className="font-medium text-gray-900">
                                    <RichText tagName="span" value={attributes.contentqZM} default="Accessories" onChange={ (newtext) => { setAttributes({ contentqZM: newtext }); }} /></p>
                                <ul role="list" aria-labelledby="women-accessories-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentNKe} default="Watches" onChange={ (newtext) =>  {
        setAttributes({ contentNKe: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentUiI} default="Wallets" onChange={ (newtext) =>  {
        setAttributes({ contentUiI: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentFac} default="Bags" onChange={ (newtext) =>  {
        setAttributes({ contentFac: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contenttkc} default="Sunglasses" onChange={ (newtext) =>  {
        setAttributes({ contenttkc: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentDQC} default="Hats" onChange={ (newtext) =>  {
        setAttributes({ contentDQC: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentGnu} default="Belts" onChange={ (newtext) =>  {
        setAttributes({ contentGnu: newtext });
      }}
    /></span>

                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p id="women-brands-heading-mobile" className="font-medium text-gray-900">
                                    <RichText tagName="span" value={attributes.contentWus} default="Brands" onChange={ (newtext) => { setAttributes({ contentWus: newtext }); }} /></p>
                                <ul role="list" aria-labelledby="women-brands-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentXbr} default="Full Nelson" onChange={ (newtext) =>  {
        setAttributes({ contentXbr: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentzjE} default="My Way" onChange={ (newtext) =>  {
        setAttributes({ contentzjE: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentVBf} default="Re-Arranged" onChange={ (newtext) =>  {
        setAttributes({ contentVBf: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentAIe} default="Counterfeit" onChange={ (newtext) =>  {
        setAttributes({ contentAIe: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentfBy} default="Significant Other" onChange={ (newtext) =>  {
        setAttributes({ contentfBy: newtext });
      }}
    /></span>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="tabs-1-panel-2" className="pt-10 pb-8 px-4 space-y-10" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
                            <div className="grid grid-cols-2 gap-x-4">
                                <div className="group relative text-sm">
                                    <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlGRD: media.url,
            imagealtnOF: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlGRD } 
            alt={ attributes.imagealtnOF } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                    </div> <span className="mt-6 block font-medium text-gray-900">
                <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentsXQ} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentsXQ: newtext });
      }}
    /></span>

                                    <p aria-hidden="true" className="mt-1">
                                        <RichText tagName="span" value={attributes.contentRIz} default="Shop now" onChange={ (newtext) => { setAttributes({ contentRIz: newtext }); }} /></p>
                                </div>
                                <div className="group relative text-sm">
                                    <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlRSP: media.url,
            imagealthwu: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlRSP } 
            alt={ attributes.imagealthwu } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                    </div> <span className="mt-6 block font-medium text-gray-900">
                <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentqrx} default="Artwork Tees" onChange={ (newtext) =>  {
        setAttributes({ contentqrx: newtext });
      }}
    /></span>

                                    <p aria-hidden="true" className="mt-1">
                                        <RichText tagName="span" value={attributes.contentrvf} default="Shop now" onChange={ (newtext) => { setAttributes({ contentrvf: newtext }); }} /></p>
                                </div>
                            </div>
                            <div>
                                <p id="men-clothing-heading-mobile" className="font-medium text-gray-900">
                                    <RichText tagName="span" value={attributes.contentABM} default="Clothing" onChange={ (newtext) => { setAttributes({ contentABM: newtext }); }} /></p>
                                <ul role="list" aria-labelledby="men-clothing-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentODO} default="Tops" onChange={ (newtext) =>  {
        setAttributes({ contentODO: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentBTv} default="Pants" onChange={ (newtext) =>  {
        setAttributes({ contentBTv: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentMlS} default="Sweaters" onChange={ (newtext) =>  {
        setAttributes({ contentMlS: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentlQs} default="T-Shirts" onChange={ (newtext) =>  {
        setAttributes({ contentlQs: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentgat} default="Jackets" onChange={ (newtext) =>  {
        setAttributes({ contentgat: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentQRi} default="Activewear" onChange={ (newtext) =>  {
        setAttributes({ contentQRi: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentGBM} default="Browse All" onChange={ (newtext) =>  {
        setAttributes({ contentGBM: newtext });
      }}
    /></span>

                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p id="men-accessories-heading-mobile" className="font-medium text-gray-900">
                                    <RichText tagName="span" value={attributes.contentmNO} default="Accessories" onChange={ (newtext) => { setAttributes({ contentmNO: newtext }); }} /></p>
                                <ul role="list" aria-labelledby="men-accessories-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentPiw} default="Watches" onChange={ (newtext) =>  {
        setAttributes({ contentPiw: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentCBl} default="Wallets" onChange={ (newtext) =>  {
        setAttributes({ contentCBl: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentHSM} default="Bags" onChange={ (newtext) =>  {
        setAttributes({ contentHSM: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentFTl} default="Sunglasses" onChange={ (newtext) =>  {
        setAttributes({ contentFTl: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentnlc} default="Hats" onChange={ (newtext) =>  {
        setAttributes({ contentnlc: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentNth} default="Belts" onChange={ (newtext) =>  {
        setAttributes({ contentNth: newtext });
      }}
    /></span>

                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p id="men-brands-heading-mobile" className="font-medium text-gray-900">
                                    <RichText tagName="span" value={attributes.contentYwF} default="Brands" onChange={ (newtext) => { setAttributes({ contentYwF: newtext }); }} /></p>
                                <ul role="list" aria-labelledby="men-brands-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentHzH} default="Re-Arranged" onChange={ (newtext) =>  {
        setAttributes({ contentHzH: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentYoa} default="Counterfeit" onChange={ (newtext) =>  {
        setAttributes({ contentYoa: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentaGQ} default="Full Nelson" onChange={ (newtext) =>  {
        setAttributes({ contentaGQ: newtext });
      }}
    /></span>

                                    </li>
                                    <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentJwV} default="My Way" onChange={ (newtext) =>  {
        setAttributes({ contentJwV: newtext });
      }}
    /></span>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                        <div className="flow-root"> <span className="-m-2 p-2 block font-medium text-gray-900"><RichText tagName="span" value={attributes.contentBOs} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentBOs: newtext });
      }}
    /></span>

                        </div>
                        <div className="flow-root"> <span className="-m-2 p-2 block font-medium text-gray-900"><RichText tagName="span" value={attributes.contentsAY} default="Stores" onChange={ (newtext) =>  {
        setAttributes({ contentsAY: newtext });
      }}
    /></span>

                        </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                        <div className="flow-root"> <span className="-m-2 p-2 block font-medium text-gray-900"><RichText tagName="span" value={attributes.contentESI} default="Sign in" onChange={ (newtext) =>  {
        setAttributes({ contentESI: newtext });
      }}
    /></span>

                        </div>
                        <div className="flow-root"> <span className="-m-2 p-2 block font-medium text-gray-900"><RichText tagName="span" value={attributes.contentPlG} default="Create account" onChange={ (newtext) =>  {
        setAttributes({ contentPlG: newtext });
      }}
    /></span>

                        </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4"> <span className="-m-2 p-2 flex items-center">
          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurloRE: media.url,
            imagealtCVX: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurloRE } 
            alt={ attributes.imagealtCVX } 
            onClick={ open } 
            className="w-5 h-auto block flex-shrink-0"
          /> 
        )} 
      />
          <span className="ml-3 block text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentgoo} default="CAD" onChange={ (newtext) =>  {
        setAttributes({ contentgoo: newtext });
      }}
    /></span>
 <span className="sr-only"><RichText tagName="span" value={attributes.contentIst} default=", change currency" onChange={ (newtext) =>  {
        setAttributes({ contentIst: newtext });
      }}
    /></span>
</span>
                    </div>
                </div>
            </div>
            <header className="relative bg-white">
                <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
                    <RichText tagName="span" value={attributes.contentbOm} default="Get free delivery on orders over $100" onChange={ (newtext) => { setAttributes({ contentbOm: newtext }); }} /></p>
                <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="h-16 flex items-center">
                            <button type="button" className="bg-white p-2 rounded-md text-gray-400 lg:hidden"> <span className="sr-only"><RichText tagName="span" value={attributes.contentXCf} default="Open menu" onChange={ (newtext) =>  {
        setAttributes({ contentXCf: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgswG }}
        >
      </svg>
      
                            </button>
                            <div className="ml-4 flex lg:ml-0"> <span>
              <span className="sr-only"><RichText tagName="span" value={attributes.contentrTW} default="Workflow" onChange={ (newtext) =>  {
        setAttributes({ contentrTW: newtext });
      }}
    /></span>

                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlPkj: media.url,
            imagealtkIA: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlPkj } 
            alt={ attributes.imagealtkIA } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                                </span>
                            </div>
                            <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="h-full flex space-x-8">
                                    <div className="flex">
                                        <div className="relative flex">
                                            <button type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                                                <RichText tagName="span" value={attributes.contentjSj} default="Women" onChange={ (newtext) => { setAttributes({ contentjSj: newtext }); }} /></button>
                                        </div>
                                        <div className="absolute top-full inset-x-0 text-sm text-gray-500">
                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                                            <div className="relative bg-white">
                                                <div className="max-w-7xl mx-auto px-8">
                                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                        <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                            <div className="group relative text-base sm:text-sm">
                                                                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlRnk: media.url,
            imagealtEhr: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlRnk } 
            alt={ attributes.imagealtEhr } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                                                </div> <span className="mt-6 block font-medium text-gray-900">
                              <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentFnv} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentFnv: newtext });
      }}
    /></span>

                                                                <p aria-hidden="true" className="mt-1">
                                                                    <RichText tagName="span" value={attributes.contentqEo} default="Shop now" onChange={ (newtext) => { setAttributes({ contentqEo: newtext }); }} /></p>
                                                            </div>
                                                            <div className="group relative text-base sm:text-sm">
                                                                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurltoC: media.url,
            imagealtHMD: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurltoC } 
            alt={ attributes.imagealtHMD } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                                                </div> <span className="mt-6 block font-medium text-gray-900">
                              <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentOnX} default="Basic Tees" onChange={ (newtext) =>  {
        setAttributes({ contentOnX: newtext });
      }}
    /></span>

                                                                <p aria-hidden="true" className="mt-1">
                                                                    <RichText tagName="span" value={attributes.contentlaZ} default="Shop now" onChange={ (newtext) => { setAttributes({ contentlaZ: newtext }); }} /></p>
                                                            </div>
                                                        </div>
                                                        <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                                            <div>
                                                                <p id="Clothing-heading" className="font-medium text-gray-900">
                                                                    <RichText tagName="span" value={attributes.contentASK} default="Clothing" onChange={ (newtext) => { setAttributes({ contentASK: newtext }); }} /></p>
                                                                <ul role="list" aria-labelledby="Clothing-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentNeF} default="Tops" onChange={ (newtext) =>  {
        setAttributes({ contentNeF: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentGat} default="Dresses" onChange={ (newtext) =>  {
        setAttributes({ contentGat: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentSCY} default="Pants" onChange={ (newtext) =>  {
        setAttributes({ contentSCY: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentbZC} default="Denim" onChange={ (newtext) =>  {
        setAttributes({ contentbZC: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentSAr} default="Sweaters" onChange={ (newtext) =>  {
        setAttributes({ contentSAr: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentpeZ} default="T-Shirts" onChange={ (newtext) =>  {
        setAttributes({ contentpeZ: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentORf} default="Jackets" onChange={ (newtext) =>  {
        setAttributes({ contentORf: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contenthnj} default="Activewear" onChange={ (newtext) =>  {
        setAttributes({ contenthnj: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentYhg} default="Browse All" onChange={ (newtext) =>  {
        setAttributes({ contentYhg: newtext });
      }}
    /></span>

                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <p id="Accessories-heading" className="font-medium text-gray-900">
                                                                    <RichText tagName="span" value={attributes.contenttVS} default="Accessories" onChange={ (newtext) => { setAttributes({ contenttVS: newtext }); }} /></p>
                                                                <ul role="list" aria-labelledby="Accessories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentFgP} default="Watches" onChange={ (newtext) =>  {
        setAttributes({ contentFgP: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentBHO} default="Wallets" onChange={ (newtext) =>  {
        setAttributes({ contentBHO: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentxDv} default="Bags" onChange={ (newtext) =>  {
        setAttributes({ contentxDv: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentzbB} default="Sunglasses" onChange={ (newtext) =>  {
        setAttributes({ contentzbB: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentlqm} default="Hats" onChange={ (newtext) =>  {
        setAttributes({ contentlqm: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentVHJ} default="Belts" onChange={ (newtext) =>  {
        setAttributes({ contentVHJ: newtext });
      }}
    /></span>

                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <p id="Brands-heading" className="font-medium text-gray-900">
                                                                    <RichText tagName="span" value={attributes.contentzCC} default="Brands" onChange={ (newtext) => { setAttributes({ contentzCC: newtext }); }} /></p>
                                                                <ul role="list" aria-labelledby="Brands-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentxTB} default="Full Nelson" onChange={ (newtext) =>  {
        setAttributes({ contentxTB: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentWrS} default="My Way" onChange={ (newtext) =>  {
        setAttributes({ contentWrS: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentFvs} default="Re-Arranged" onChange={ (newtext) =>  {
        setAttributes({ contentFvs: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contenthkk} default="Counterfeit" onChange={ (newtext) =>  {
        setAttributes({ contenthkk: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentHyR} default="Significant Other" onChange={ (newtext) =>  {
        setAttributes({ contentHyR: newtext });
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
                                                <RichText tagName="span" value={attributes.contentWqA} default="Men" onChange={ (newtext) => { setAttributes({ contentWqA: newtext }); }} /></button>
                                        </div>
                                        <div className="absolute top-full inset-x-0 text-sm text-gray-500">
                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                                            <div className="relative bg-white">
                                                <div className="max-w-7xl mx-auto px-8">
                                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                        <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                            <div className="group relative text-base sm:text-sm">
                                                                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlxSu: media.url,
            imagealtMIC: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlxSu } 
            alt={ attributes.imagealtMIC } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                                                </div> <span className="mt-6 block font-medium text-gray-900">
                              <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentBcU} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentBcU: newtext });
      }}
    /></span>

                                                                <p aria-hidden="true" className="mt-1">
                                                                    <RichText tagName="span" value={attributes.contentUVn} default="Shop now" onChange={ (newtext) => { setAttributes({ contentUVn: newtext }); }} /></p>
                                                            </div>
                                                            <div className="group relative text-base sm:text-sm">
                                                                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlFKp: media.url,
            imagealtWzO: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlFKp } 
            alt={ attributes.imagealtWzO } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                                                </div> <span className="mt-6 block font-medium text-gray-900">
                              <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentksi} default="Artwork Tees" onChange={ (newtext) =>  {
        setAttributes({ contentksi: newtext });
      }}
    /></span>

                                                                <p aria-hidden="true" className="mt-1">
                                                                    <RichText tagName="span" value={attributes.contentVjd} default="Shop now" onChange={ (newtext) => { setAttributes({ contentVjd: newtext }); }} /></p>
                                                            </div>
                                                        </div>
                                                        <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                                            <div>
                                                                <p id="Clothing-heading" className="font-medium text-gray-900">
                                                                    <RichText tagName="span" value={attributes.contentYqP} default="Clothing" onChange={ (newtext) => { setAttributes({ contentYqP: newtext }); }} /></p>
                                                                <ul role="list" aria-labelledby="Clothing-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentNcG} default="Tops" onChange={ (newtext) =>  {
        setAttributes({ contentNcG: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentEZw} default="Pants" onChange={ (newtext) =>  {
        setAttributes({ contentEZw: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentsmj} default="Sweaters" onChange={ (newtext) =>  {
        setAttributes({ contentsmj: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentRWG} default="T-Shirts" onChange={ (newtext) =>  {
        setAttributes({ contentRWG: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentTVW} default="Jackets" onChange={ (newtext) =>  {
        setAttributes({ contentTVW: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentFoR} default="Activewear" onChange={ (newtext) =>  {
        setAttributes({ contentFoR: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentxKY} default="Browse All" onChange={ (newtext) =>  {
        setAttributes({ contentxKY: newtext });
      }}
    /></span>

                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <p id="Accessories-heading" className="font-medium text-gray-900">
                                                                    <RichText tagName="span" value={attributes.contentixA} default="Accessories" onChange={ (newtext) => { setAttributes({ contentixA: newtext }); }} /></p>
                                                                <ul role="list" aria-labelledby="Accessories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentkxd} default="Watches" onChange={ (newtext) =>  {
        setAttributes({ contentkxd: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentkVc} default="Wallets" onChange={ (newtext) =>  {
        setAttributes({ contentkVc: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentmMt} default="Bags" onChange={ (newtext) =>  {
        setAttributes({ contentmMt: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentXnM} default="Sunglasses" onChange={ (newtext) =>  {
        setAttributes({ contentXnM: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentDQO} default="Hats" onChange={ (newtext) =>  {
        setAttributes({ contentDQO: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentLKP} default="Belts" onChange={ (newtext) =>  {
        setAttributes({ contentLKP: newtext });
      }}
    /></span>

                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <p id="Brands-heading" className="font-medium text-gray-900">
                                                                    <RichText tagName="span" value={attributes.contentpoE} default="Brands" onChange={ (newtext) => { setAttributes({ contentpoE: newtext }); }} /></p>
                                                                <ul role="list" aria-labelledby="Brands-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentjnk} default="Re-Arranged" onChange={ (newtext) =>  {
        setAttributes({ contentjnk: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentBUc} default="Counterfeit" onChange={ (newtext) =>  {
        setAttributes({ contentBUc: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentQpd} default="Full Nelson" onChange={ (newtext) =>  {
        setAttributes({ contentQpd: newtext });
      }}
    /></span>

                                                                    </li>
                                                                    <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentfov} default="My Way" onChange={ (newtext) =>  {
        setAttributes({ contentfov: newtext });
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
                                    </div> <span className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><RichText tagName="span" value={attributes.contentWwk} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentWwk: newtext });
      }}
    /></span>
 <span className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><RichText tagName="span" value={attributes.contentgax} default="Stores" onChange={ (newtext) =>  {
        setAttributes({ contentgax: newtext });
      }}
    /></span>

                                </div>
                            </div>
                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"> <span className="text-sm font-medium text-gray-700 hover:text-gray-800"><RichText tagName="span" value={attributes.contentCTB} default="Sign in" onChange={ (newtext) =>  {
        setAttributes({ contentCTB: newtext });
      }}
    /></span>
 <span className="h-6 w-px bg-gray-200" aria-hidden="true"/>

                                    <span className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        <RichText tagName="span" value={attributes.contentWBW} default="Create account" onChange={ (newtext) => { setAttributes({ contentWBW: newtext }); }} /></span>
                                </div>
                                <div className="hidden lg:ml-8 lg:flex"> <span className="text-gray-700 hover:text-gray-800 flex items-center">
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlcYq: media.url,
            imagealtMoK: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlcYq } 
            alt={ attributes.imagealtMoK } 
            onClick={ open } 
            className="w-5 h-auto block flex-shrink-0"
          /> 
        )} 
      />
                <span className="ml-3 block text-sm font-medium"><RichText tagName="span" value={attributes.contentcjv} default="CAD" onChange={ (newtext) =>  {
        setAttributes({ contentcjv: newtext });
      }}
    /></span>
 <span className="sr-only"><RichText tagName="span" value={attributes.contentktz} default=", change currency" onChange={ (newtext) =>  {
        setAttributes({ contentktz: newtext });
      }}
    /></span>
</span>
                                </div>
                                <div className="flex lg:ml-6"> <span className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only"><RichText tagName="span" value={attributes.contentIpw} default="Search" onChange={ (newtext) =>  {
        setAttributes({ contentIpw: newtext });
      }}
    /></span>

                                    
      <svg
         className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghrW }}
        >
      </svg>
      
                                    </span>
                                </div>
                                <div className="ml-4 flow-root lg:ml-6"> <span className="group -m-2 p-2 flex items-center">
                
                
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDGZ }}
        >
      </svg>
      
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"><RichText tagName="span" value={attributes.contentZMh} default="0" onChange={ (newtext) =>  {
        setAttributes({ contentZMh: newtext });
      }}
    /></span>
 <span className="sr-only"><RichText tagName="span" value={attributes.contentGsh} default="items in cart, view bag" onChange={ (newtext) =>  {
        setAttributes({ contentGsh: newtext });
      }}
    /></span>
</span>
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
                        <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"> <span class="sr-only"><RichText.Content value={attributes.contentqzb} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBnh }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="mt-2">
                        <div class="border-b border-gray-200">
                            <div class="-mb-px flex px-4 space-x-8" aria-orientation="horizontal" role="tablist">
                                <button id="tabs-1-tab-1" class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">
                                    <RichText.Content value={attributes.contentfgz} /></button>
                                <button id="tabs-1-tab-2" class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">
                                    <RichText.Content value={attributes.contentafE} /></button>
                            </div>
                        </div>
                        <div id="tabs-1-panel-1" class="pt-10 pb-8 px-4 space-y-10" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                            <div class="grid grid-cols-2 gap-x-4">
                                <div class="group relative text-sm">
                                    <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <img
            src={ attributes.imageurlHpf } 
            alt={ attributes.imagealtOTM } 
            class="object-center object-cover"
          />
                                    </div> <span class="mt-6 block font-medium text-gray-900">
                <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentTVe} /></span>

                                    <p aria-hidden="true" class="mt-1">
                                        <RichText.Content value={attributes.contentMVV} /></p>
                                </div>
                                <div class="group relative text-sm">
                                    <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <img
            src={ attributes.imageurlLwx } 
            alt={ attributes.imagealtvXv } 
            class="object-center object-cover"
          />
                                    </div> <span class="mt-6 block font-medium text-gray-900">
                <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentJmv} /></span>

                                    <p aria-hidden="true" class="mt-1">
                                        <RichText.Content value={attributes.contentVPN} /></p>
                                </div>
                            </div>
                            <div>
                                <p id="women-clothing-heading-mobile" class="font-medium text-gray-900">
                                    <RichText.Content value={attributes.contentrpn} /></p>
                                <ul role="list" aria-labelledby="women-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentETE} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentfkU} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentxzG} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentzZk} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentWtT} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentXvm} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentMei} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentGad} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentYjh} /></span>

                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p id="women-accessories-heading-mobile" class="font-medium text-gray-900">
                                    <RichText.Content value={attributes.contentqZM} /></p>
                                <ul role="list" aria-labelledby="women-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentNKe} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentUiI} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentFac} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contenttkc} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentDQC} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentGnu} /></span>

                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p id="women-brands-heading-mobile" class="font-medium text-gray-900">
                                    <RichText.Content value={attributes.contentWus} /></p>
                                <ul role="list" aria-labelledby="women-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentXbr} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentzjE} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentVBf} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentAIe} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentfBy} /></span>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="tabs-1-panel-2" class="pt-10 pb-8 px-4 space-y-10" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
                            <div class="grid grid-cols-2 gap-x-4">
                                <div class="group relative text-sm">
                                    <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <img
            src={ attributes.imageurlGRD } 
            alt={ attributes.imagealtnOF } 
            class="object-center object-cover"
          />
                                    </div> <span class="mt-6 block font-medium text-gray-900">
                <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentsXQ} /></span>

                                    <p aria-hidden="true" class="mt-1">
                                        <RichText.Content value={attributes.contentRIz} /></p>
                                </div>
                                <div class="group relative text-sm">
                                    <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <img
            src={ attributes.imageurlRSP } 
            alt={ attributes.imagealthwu } 
            class="object-center object-cover"
          />
                                    </div> <span class="mt-6 block font-medium text-gray-900">
                <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentqrx} /></span>

                                    <p aria-hidden="true" class="mt-1">
                                        <RichText.Content value={attributes.contentrvf} /></p>
                                </div>
                            </div>
                            <div>
                                <p id="men-clothing-heading-mobile" class="font-medium text-gray-900">
                                    <RichText.Content value={attributes.contentABM} /></p>
                                <ul role="list" aria-labelledby="men-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentODO} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentBTv} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentMlS} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentlQs} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentgat} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentQRi} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentGBM} /></span>

                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p id="men-accessories-heading-mobile" class="font-medium text-gray-900">
                                    <RichText.Content value={attributes.contentmNO} /></p>
                                <ul role="list" aria-labelledby="men-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentPiw} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentCBl} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentHSM} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentFTl} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentnlc} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentNth} /></span>

                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p id="men-brands-heading-mobile" class="font-medium text-gray-900">
                                    <RichText.Content value={attributes.contentYwF} /></p>
                                <ul role="list" aria-labelledby="men-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentHzH} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentYoa} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentaGQ} /></span>

                                    </li>
                                    <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentJwV} /></span>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-gray-200 py-6 px-4 space-y-6">
                        <div class="flow-root"> <span class="-m-2 p-2 block font-medium text-gray-900"><RichText.Content value={attributes.contentBOs} /></span>

                        </div>
                        <div class="flow-root"> <span class="-m-2 p-2 block font-medium text-gray-900"><RichText.Content value={attributes.contentsAY} /></span>

                        </div>
                    </div>
                    <div class="border-t border-gray-200 py-6 px-4 space-y-6">
                        <div class="flow-root"> <span class="-m-2 p-2 block font-medium text-gray-900"><RichText.Content value={attributes.contentESI} /></span>

                        </div>
                        <div class="flow-root"> <span class="-m-2 p-2 block font-medium text-gray-900"><RichText.Content value={attributes.contentPlG} /></span>

                        </div>
                    </div>
                    <div class="border-t border-gray-200 py-6 px-4"> <span class="-m-2 p-2 flex items-center">
          
      <img
            src={ attributes.imageurloRE } 
            alt={ attributes.imagealtCVX } 
            class="w-5 h-auto block flex-shrink-0"
          />
          <span class="ml-3 block text-base font-medium text-gray-900"><RichText.Content value={attributes.contentgoo} /></span>
 <span class="sr-only"><RichText.Content value={attributes.contentIst} /></span>
</span>
                    </div>
                </div>
            </div>
            <header class="relative bg-white">
                <p class="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
                    <RichText.Content value={attributes.contentbOm} /></p>
                <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="border-b border-gray-200">
                        <div class="h-16 flex items-center">
                            <button type="button" class="bg-white p-2 rounded-md text-gray-400 lg:hidden"> <span class="sr-only"><RichText.Content value={attributes.contentXCf} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgswG }}
        >
      </svg>
      
                            </button>
                            <div class="ml-4 flex lg:ml-0"> <span>
              <span class="sr-only"><RichText.Content value={attributes.contentrTW} /></span>

                                
      <img
            src={ attributes.imageurlPkj } 
            alt={ attributes.imagealtkIA } 
            class="h-8 w-auto"
          />
                                </span>
                            </div>
                            <div class="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div class="h-full flex space-x-8">
                                    <div class="flex">
                                        <div class="relative flex">
                                            <button type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                                                <RichText.Content value={attributes.contentjSj} /></button>
                                        </div>
                                        <div class="absolute top-full inset-x-0 text-sm text-gray-500">
                                            <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                                            <div class="relative bg-white">
                                                <div class="max-w-7xl mx-auto px-8">
                                                    <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                        <div class="col-start-2 grid grid-cols-2 gap-x-8">
                                                            <div class="group relative text-base sm:text-sm">
                                                                <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                    
      <img
            src={ attributes.imageurlRnk } 
            alt={ attributes.imagealtEhr } 
            class="object-center object-cover"
          />
                                                                </div> <span class="mt-6 block font-medium text-gray-900">
                              <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentFnv} /></span>

                                                                <p aria-hidden="true" class="mt-1">
                                                                    <RichText.Content value={attributes.contentqEo} /></p>
                                                            </div>
                                                            <div class="group relative text-base sm:text-sm">
                                                                <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                    
      <img
            src={ attributes.imageurltoC } 
            alt={ attributes.imagealtHMD } 
            class="object-center object-cover"
          />
                                                                </div> <span class="mt-6 block font-medium text-gray-900">
                              <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentOnX} /></span>

                                                                <p aria-hidden="true" class="mt-1">
                                                                    <RichText.Content value={attributes.contentlaZ} /></p>
                                                            </div>
                                                        </div>
                                                        <div class="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                                            <div>
                                                                <p id="Clothing-heading" class="font-medium text-gray-900">
                                                                    <RichText.Content value={attributes.contentASK} /></p>
                                                                <ul role="list" aria-labelledby="Clothing-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentNeF} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentGat} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentSCY} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentbZC} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentSAr} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentpeZ} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentORf} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contenthnj} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentYhg} /></span>

                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <p id="Accessories-heading" class="font-medium text-gray-900">
                                                                    <RichText.Content value={attributes.contenttVS} /></p>
                                                                <ul role="list" aria-labelledby="Accessories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentFgP} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentBHO} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentxDv} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentzbB} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentlqm} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentVHJ} /></span>

                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <p id="Brands-heading" class="font-medium text-gray-900">
                                                                    <RichText.Content value={attributes.contentzCC} /></p>
                                                                <ul role="list" aria-labelledby="Brands-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentxTB} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentWrS} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentFvs} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contenthkk} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentHyR} /></span>

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
                                                <RichText.Content value={attributes.contentWqA} /></button>
                                        </div>
                                        <div class="absolute top-full inset-x-0 text-sm text-gray-500">
                                            <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                                            <div class="relative bg-white">
                                                <div class="max-w-7xl mx-auto px-8">
                                                    <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                        <div class="col-start-2 grid grid-cols-2 gap-x-8">
                                                            <div class="group relative text-base sm:text-sm">
                                                                <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                    
      <img
            src={ attributes.imageurlxSu } 
            alt={ attributes.imagealtMIC } 
            class="object-center object-cover"
          />
                                                                </div> <span class="mt-6 block font-medium text-gray-900">
                              <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentBcU} /></span>

                                                                <p aria-hidden="true" class="mt-1">
                                                                    <RichText.Content value={attributes.contentUVn} /></p>
                                                            </div>
                                                            <div class="group relative text-base sm:text-sm">
                                                                <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                    
      <img
            src={ attributes.imageurlFKp } 
            alt={ attributes.imagealtWzO } 
            class="object-center object-cover"
          />
                                                                </div> <span class="mt-6 block font-medium text-gray-900">
                              <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentksi} /></span>

                                                                <p aria-hidden="true" class="mt-1">
                                                                    <RichText.Content value={attributes.contentVjd} /></p>
                                                            </div>
                                                        </div>
                                                        <div class="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                                            <div>
                                                                <p id="Clothing-heading" class="font-medium text-gray-900">
                                                                    <RichText.Content value={attributes.contentYqP} /></p>
                                                                <ul role="list" aria-labelledby="Clothing-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentNcG} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentEZw} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentsmj} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentRWG} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentTVW} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentFoR} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentxKY} /></span>

                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <p id="Accessories-heading" class="font-medium text-gray-900">
                                                                    <RichText.Content value={attributes.contentixA} /></p>
                                                                <ul role="list" aria-labelledby="Accessories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentkxd} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentkVc} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentmMt} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentXnM} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentDQO} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentLKP} /></span>

                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <p id="Brands-heading" class="font-medium text-gray-900">
                                                                    <RichText.Content value={attributes.contentpoE} /></p>
                                                                <ul role="list" aria-labelledby="Brands-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentjnk} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentBUc} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentQpd} /></span>

                                                                    </li>
                                                                    <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentfov} /></span>

                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> <span class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><RichText.Content value={attributes.contentWwk} /></span>
 <span class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><RichText.Content value={attributes.contentgax} /></span>

                                </div>
                            </div>
                            <div class="ml-auto flex items-center">
                                <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"> <span class="text-sm font-medium text-gray-700 hover:text-gray-800"><RichText.Content value={attributes.contentCTB} /></span>
 <span class="h-6 w-px bg-gray-200" aria-hidden="true"/>

                                    <span class="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        <RichText.Content value={attributes.contentWBW} /></span>
                                </div>
                                <div class="hidden lg:ml-8 lg:flex"> <span class="text-gray-700 hover:text-gray-800 flex items-center">
                
      <img
            src={ attributes.imageurlcYq } 
            alt={ attributes.imagealtMoK } 
            class="w-5 h-auto block flex-shrink-0"
          />
                <span class="ml-3 block text-sm font-medium"><RichText.Content value={attributes.contentcjv} /></span>
 <span class="sr-only"><RichText.Content value={attributes.contentktz} /></span>
</span>
                                </div>
                                <div class="flex lg:ml-6"> <span class="p-2 text-gray-400 hover:text-gray-500">
                <span class="sr-only"><RichText.Content value={attributes.contentIpw} /></span>

                                    
      <svg
         class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghrW }}
        >
      </svg>
      
                                    </span>
                                </div>
                                <div class="ml-4 flow-root lg:ml-6"> <span class="group -m-2 p-2 flex items-center">
                
                
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDGZ }}
        >
      </svg>
      
                <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"><RichText.Content value={attributes.contentZMh} /></span>
 <span class="sr-only"><RichText.Content value={attributes.contentGsh} /></span>
</span>
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
        