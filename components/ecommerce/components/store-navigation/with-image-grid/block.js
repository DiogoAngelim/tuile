
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-image-grid', {
            title: 'with image grid',
            icon: (<img src="data:image/jpeg;base64,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fun9PY6/wbgwlgZWddj4dlfnQpjK/EllSUvXShH03td2eYlnZk5Xynl3yeR++bsb8z/7fX+J+4nIZ2CprCzMjHVnaaqscer86EHu+S43F4ifL5HF8Pj518M6upU20u2NVcq1Paj7bk9HA8X4LAzc7G8M4882XIRpniWw+IVEHWpdkvTbfr7b0eOr5bk6smzJr5HLjfakrLFdJSnr0297Z+Y/Kchi3W3Y2dk1WXPdk4Wyi5v6tp9/ViFeyWIsHAuy8Tw3j35dvIum3Gth5/w8elNQWvTbfr99Hx4g4HHhxedTw+F51lXMKuLrh1TjB1J9O/XpUnr8nkMbk+QxJ2zxc7Jpna92SrtlFzf1en39WfmNyWfieb8Lm5NPnfvPLtlHr/On39WIPec7HA4arl8qjiOPtnXyFdVcbaE4wTpTfZa7evb77PvKVfHUeLsTjuPxpwreNZCp09f7aTl291Hu19O7P59fn5uTGccjMyLY2TU5qdjkpSS0m9vu9dtn3Hk+RjkWZEc/KV1semyxXS6prWtN7212QhUgAKgAAAAAAAAAAAAAAAADRwM6ajOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGiM4g0cBojOINHAaIziDRwGi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" />),
            category: 'common',
            attributes: {
  "contentTjy": {
    "type": "string",
    "default": "Close menu"
  },
  "contentjsa": {
    "type": "string",
    "default": "Women"
  },
  "contentKcM": {
    "type": "string",
    "default": "Men"
  },
  "contentqnD": {
    "type": "string",
    "default": "\n                New Arrivals\n              "
  },
  "contentTEy": {
    "type": "string",
    "default": "Shop now"
  },
  "contentKkd": {
    "type": "string",
    "default": "\n                Basic Tees\n              "
  },
  "contentbZN": {
    "type": "string",
    "default": "Shop now"
  },
  "contentBXI": {
    "type": "string",
    "default": "\n                Accessories\n              "
  },
  "contentSHT": {
    "type": "string",
    "default": "Shop now"
  },
  "contentQjB": {
    "type": "string",
    "default": "\n                Carry\n              "
  },
  "contentYzS": {
    "type": "string",
    "default": "Shop now"
  },
  "contentrDO": {
    "type": "string",
    "default": "\n                New Arrivals\n              "
  },
  "contentCCe": {
    "type": "string",
    "default": "Shop now"
  },
  "contentFpf": {
    "type": "string",
    "default": "\n                Basic Tees\n              "
  },
  "contentksg": {
    "type": "string",
    "default": "Shop now"
  },
  "contentLpS": {
    "type": "string",
    "default": "\n                Accessories\n              "
  },
  "contentrbb": {
    "type": "string",
    "default": "Shop now"
  },
  "contentGpx": {
    "type": "string",
    "default": "\n                Carry\n              "
  },
  "contentlzO": {
    "type": "string",
    "default": "Shop now"
  },
  "contentCgH": {
    "type": "string",
    "default": "Company"
  },
  "contentOLy": {
    "type": "string",
    "default": "Stores"
  },
  "contentaGc": {
    "type": "string",
    "default": "Create an account"
  },
  "contentLeB": {
    "type": "string",
    "default": "Sign in"
  },
  "contentzhJ": {
    "type": "string",
    "default": "Currency"
  },
  "contentjYt": {
    "type": "string",
    "default": "CAD"
  },
  "contentpoO": {
    "type": "string",
    "default": "USD"
  },
  "contentOfH": {
    "type": "string",
    "default": "AUD"
  },
  "contentSzS": {
    "type": "string",
    "default": "EUR"
  },
  "contentxgQ": {
    "type": "string",
    "default": "GBP"
  },
  "contentOZa": {
    "type": "string",
    "default": "Currency"
  },
  "contentCzs": {
    "type": "string",
    "default": "CAD"
  },
  "contentTZK": {
    "type": "string",
    "default": "USD"
  },
  "contentKdr": {
    "type": "string",
    "default": "AUD"
  },
  "contentxfM": {
    "type": "string",
    "default": "EUR"
  },
  "contentUdX": {
    "type": "string",
    "default": "GBP"
  },
  "contenthAP": {
    "type": "string",
    "default": "Sign in"
  },
  "contentKfH": {
    "type": "string",
    "default": "Create an account"
  },
  "contentElY": {
    "type": "string",
    "default": "Workflow"
  },
  "contentKEp": {
    "type": "string",
    "default": "Women"
  },
  "contentGYg": {
    "type": "string",
    "default": "\n                                  New Arrivals\n                                "
  },
  "contentDFV": {
    "type": "string",
    "default": "Shop now"
  },
  "contentzzh": {
    "type": "string",
    "default": "\n                                  Basic Tees\n                                "
  },
  "contentpYe": {
    "type": "string",
    "default": "Shop now"
  },
  "contentqPk": {
    "type": "string",
    "default": "\n                                  Accessories\n                                "
  },
  "contentHQi": {
    "type": "string",
    "default": "Shop now"
  },
  "contenteZm": {
    "type": "string",
    "default": "\n                                  Carry\n                                "
  },
  "contentwfM": {
    "type": "string",
    "default": "Shop now"
  },
  "contentqYq": {
    "type": "string",
    "default": "Men"
  },
  "contentmjp": {
    "type": "string",
    "default": "\n                                  New Arrivals\n                                "
  },
  "contentBFu": {
    "type": "string",
    "default": "Shop now"
  },
  "contentSSn": {
    "type": "string",
    "default": "\n                                  Basic Tees\n                                "
  },
  "contentYpC": {
    "type": "string",
    "default": "Shop now"
  },
  "contentjWx": {
    "type": "string",
    "default": "\n                                  Accessories\n                                "
  },
  "contentTdE": {
    "type": "string",
    "default": "Shop now"
  },
  "contentByh": {
    "type": "string",
    "default": "\n                                  Carry\n                                "
  },
  "contentsZf": {
    "type": "string",
    "default": "Shop now"
  },
  "contentmVS": {
    "type": "string",
    "default": "Company"
  },
  "contentUZZ": {
    "type": "string",
    "default": "Stores"
  },
  "contentTYu": {
    "type": "string",
    "default": "Open menu"
  },
  "contentJeF": {
    "type": "string",
    "default": "Search"
  },
  "contentnjo": {
    "type": "string",
    "default": "Workflow"
  },
  "contentUHs": {
    "type": "string",
    "default": " Search "
  },
  "contentypl": {
    "type": "string",
    "default": "Help"
  },
  "contentqGr": {
    "type": "string",
    "default": "Help"
  },
  "contentzOi": {
    "type": "string",
    "default": "0"
  },
  "contentpyu": {
    "type": "string",
    "default": "items in cart, view bag"
  },
  "imageurlPrY": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-01.jpg'
  },
  "imagealtUQm": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Models sitting back to back, wearing Basic Tee in black and bone."
  },
  "imageurlSLL": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-02.jpg'
  },
  "imagealtfgY": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
  },
  "imageurlvHb": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-03.jpg'
  },
  "imagealtFVb": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Model wearing minimalist watch with black wristband and white watch face."
  },
  "imageurlTmy": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-04.jpg'
  },
  "imagealthWO": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Model opening tan leather long wallet with credit card pockets and cash pouch."
  },
  "imageurlLNL": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-01-men-category-01.jpg'
  },
  "imagealtnlJ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers."
  },
  "imageurlMYX": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-01-men-category-02.jpg'
  },
  "imagealtxix": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Model wearing light heather gray t-shirt."
  },
  "imageurlkue": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-01-men-category-03.jpg'
  },
  "imagealtCgJ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body."
  },
  "imageurltGK": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-01-men-category-04.jpg'
  },
  "imagealtxdm": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Model putting folded cash into slim card holder olive leather wallet with hand stitching."
  },
  "imageurlLxj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtuhk": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlTWe": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-01.jpg'
  },
  "imagealtJOW": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Models sitting back to back, wearing Basic Tee in black and bone."
  },
  "imageurlizh": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-02.jpg'
  },
  "imagealtJYE": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
  },
  "imageurliNN": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-03.jpg'
  },
  "imagealtWDY": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Model wearing minimalist watch with black wristband and white watch face."
  },
  "imageurlMLb": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-04.jpg'
  },
  "imagealtrhH": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Model opening tan leather long wallet with credit card pockets and cash pouch."
  },
  "imageurlJDN": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-01-men-category-01.jpg'
  },
  "imagealtrNV": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers."
  },
  "imageurltak": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-01-men-category-02.jpg'
  },
  "imagealtvCT": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Model wearing light heather gray t-shirt."
  },
  "imageurlhzj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-01-men-category-03.jpg'
  },
  "imagealtlBk": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body."
  },
  "imageurlFvJ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-01-men-category-04.jpg'
  },
  "imagealtZfe": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Model putting folded cash into slim card holder olive leather wallet with hand stitching."
  },
  "imageurlXNf": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtSjE": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgizQ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgrdi": {
    "type": "string",
    "default": "<path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M6 8l4 4 4-4\"/>"
  },
  "svgxrm": {
    "type": "string",
    "default": "<path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M6 8l4 4 4-4\"/>"
  },
  "svgeAu": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgGEk": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"/>"
  },
  "svgqZD": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgRRN": {
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
            value={ attributes.svgizQ }
            onChange={ ( value ) => {
              setAttributes({ svgizQ: value });
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
            value={ attributes.svgrdi }
            onChange={ ( value ) => {
              setAttributes({ svgrdi: value });
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
            value={ attributes.svgxrm }
            onChange={ ( value ) => {
              setAttributes({ svgxrm: value });
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
            value={ attributes.svgeAu }
            onChange={ ( value ) => {
              setAttributes({ svgeAu: value });
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
            value={ attributes.svgGEk }
            onChange={ ( value ) => {
              setAttributes({ svgGEk: value });
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
            value={ attributes.svgqZD }
            onChange={ ( value ) => {
              setAttributes({ svgqZD: value });
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
            value={ attributes.svgRRN }
            onChange={ ( value ) => {
              setAttributes({ svgRRN: value });
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
                        <button type="button" className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"> <span className="sr-only"><RichText tagName="span" value={attributes.contentTjy} default="Close menu" onChange={ (newtext) =>  {
        setAttributes({ contentTjy: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgizQ }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="mt-2">
                        <div className="border-b border-gray-200">
                            <div className="-mb-px flex px-4 space-x-8" aria-orientation="horizontal" role="tablist">
                                <button id="tabs-1-tab-1" className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">
                                    <RichText tagName="span" value={attributes.contentjsa} default="Women" onChange={ (newtext) => { setAttributes({ contentjsa: newtext }); }} /></button>
                                <button id="tabs-1-tab-2" className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">
                                    <RichText tagName="span" value={attributes.contentKcM} default="Men" onChange={ (newtext) => { setAttributes({ contentKcM: newtext }); }} /></button>
                            </div>
                        </div>
                        <div id="tabs-1-panel-1" className="px-4 py-6 space-y-12" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                                <div className="group relative">
                                    <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlPrY: media.url,
            imagealtUQm: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlPrY } 
            alt={ attributes.imagealtUQm } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                    </div> <span className="mt-6 block text-sm font-medium text-gray-900">
                <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentqnD} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentqnD: newtext });
      }}
    /></span>

                                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentTEy} default="Shop now" onChange={ (newtext) => { setAttributes({ contentTEy: newtext }); }} /></p>
                                </div>
                                <div className="group relative">
                                    <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlSLL: media.url,
            imagealtfgY: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlSLL } 
            alt={ attributes.imagealtfgY } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                    </div> <span className="mt-6 block text-sm font-medium text-gray-900">
                <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentKkd} default="Basic Tees" onChange={ (newtext) =>  {
        setAttributes({ contentKkd: newtext });
      }}
    /></span>

                                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentbZN} default="Shop now" onChange={ (newtext) => { setAttributes({ contentbZN: newtext }); }} /></p>
                                </div>
                                <div className="group relative">
                                    <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlvHb: media.url,
            imagealtFVb: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlvHb } 
            alt={ attributes.imagealtFVb } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                    </div> <span className="mt-6 block text-sm font-medium text-gray-900">
                <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentBXI} default="Accessories" onChange={ (newtext) =>  {
        setAttributes({ contentBXI: newtext });
      }}
    /></span>

                                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentSHT} default="Shop now" onChange={ (newtext) => { setAttributes({ contentSHT: newtext }); }} /></p>
                                </div>
                                <div className="group relative">
                                    <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlTmy: media.url,
            imagealthWO: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlTmy } 
            alt={ attributes.imagealthWO } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                    </div> <span className="mt-6 block text-sm font-medium text-gray-900">
                <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentQjB} default="Carry" onChange={ (newtext) =>  {
        setAttributes({ contentQjB: newtext });
      }}
    /></span>

                                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentYzS} default="Shop now" onChange={ (newtext) => { setAttributes({ contentYzS: newtext }); }} /></p>
                                </div>
                            </div>
                        </div>
                        <div id="tabs-1-panel-2" className="px-4 py-6 space-y-12" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                                <div className="group relative">
                                    <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlLNL: media.url,
            imagealtnlJ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlLNL } 
            alt={ attributes.imagealtnlJ } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                    </div> <span className="mt-6 block text-sm font-medium text-gray-900">
                <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentrDO} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentrDO: newtext });
      }}
    /></span>

                                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentCCe} default="Shop now" onChange={ (newtext) => { setAttributes({ contentCCe: newtext }); }} /></p>
                                </div>
                                <div className="group relative">
                                    <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlMYX: media.url,
            imagealtxix: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlMYX } 
            alt={ attributes.imagealtxix } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                    </div> <span className="mt-6 block text-sm font-medium text-gray-900">
                <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentFpf} default="Basic Tees" onChange={ (newtext) =>  {
        setAttributes({ contentFpf: newtext });
      }}
    /></span>

                                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentksg} default="Shop now" onChange={ (newtext) => { setAttributes({ contentksg: newtext }); }} /></p>
                                </div>
                                <div className="group relative">
                                    <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlkue: media.url,
            imagealtCgJ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlkue } 
            alt={ attributes.imagealtCgJ } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                    </div> <span className="mt-6 block text-sm font-medium text-gray-900">
                <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentLpS} default="Accessories" onChange={ (newtext) =>  {
        setAttributes({ contentLpS: newtext });
      }}
    /></span>

                                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentrbb} default="Shop now" onChange={ (newtext) => { setAttributes({ contentrbb: newtext }); }} /></p>
                                </div>
                                <div className="group relative">
                                    <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurltGK: media.url,
            imagealtxdm: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurltGK } 
            alt={ attributes.imagealtxdm } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                    </div> <span className="mt-6 block text-sm font-medium text-gray-900">
                <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentGpx} default="Carry" onChange={ (newtext) =>  {
        setAttributes({ contentGpx: newtext });
      }}
    /></span>

                                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentlzO} default="Shop now" onChange={ (newtext) => { setAttributes({ contentlzO: newtext }); }} /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                        <div className="flow-root"> <span className="-m-2 p-2 block font-medium text-gray-900"><RichText tagName="span" value={attributes.contentCgH} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentCgH: newtext });
      }}
    /></span>

                        </div>
                        <div className="flow-root"> <span className="-m-2 p-2 block font-medium text-gray-900"><RichText tagName="span" value={attributes.contentOLy} default="Stores" onChange={ (newtext) =>  {
        setAttributes({ contentOLy: newtext });
      }}
    /></span>

                        </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                        <div className="flow-root"> <span className="-m-2 p-2 block font-medium text-gray-900"><RichText tagName="span" value={attributes.contentaGc} default="Create an account" onChange={ (newtext) =>  {
        setAttributes({ contentaGc: newtext });
      }}
    /></span>

                        </div>
                        <div className="flow-root"> <span className="-m-2 p-2 block font-medium text-gray-900"><RichText tagName="span" value={attributes.contentLeB} default="Sign in" onChange={ (newtext) =>  {
        setAttributes({ contentLeB: newtext });
      }}
    /></span>

                        </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                        <form>
                            <div className="inline-block">
                                <label for="mobile-currency" className="sr-only">
                                    <RichText tagName="span" value={attributes.contentzhJ} default="Currency" onChange={ (newtext) => { setAttributes({ contentzhJ: newtext }); }} /></label>
                                <div className="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                                    <select id="mobile-currency" name="currency" className="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent">
                                        <option>
                                            <RichText tagName="span" value={attributes.contentjYt} default="CAD" onChange={ (newtext) => { setAttributes({ contentjYt: newtext }); }} /></option>
                                        <option>
                                            <RichText tagName="span" value={attributes.contentpoO} default="USD" onChange={ (newtext) => { setAttributes({ contentpoO: newtext }); }} /></option>
                                        <option>
                                            <RichText tagName="span" value={attributes.contentOfH} default="AUD" onChange={ (newtext) => { setAttributes({ contentOfH: newtext }); }} /></option>
                                        <option>
                                            <RichText tagName="span" value={attributes.contentSzS} default="EUR" onChange={ (newtext) => { setAttributes({ contentSzS: newtext }); }} /></option>
                                        <option>
                                            <RichText tagName="span" value={attributes.contentxgQ} default="GBP" onChange={ (newtext) => { setAttributes({ contentxgQ: newtext }); }} /></option>
                                    </select>
                                    <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                                        
      <svg
         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-5 h-5 text-gray-500"
          dangerouslySetInnerHTML={ { __html: attributes.svgrdi }}
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
                            <form>
                                <div>
                                    <label for="desktop-currency" className="sr-only">
                                        <RichText tagName="span" value={attributes.contentOZa} default="Currency" onChange={ (newtext) => { setAttributes({ contentOZa: newtext }); }} /></label>
                                    <div className="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                                        <select id="desktop-currency" name="currency" className="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent">
                                            <option>
                                                <RichText tagName="span" value={attributes.contentCzs} default="CAD" onChange={ (newtext) => { setAttributes({ contentCzs: newtext }); }} /></option>
                                            <option>
                                                <RichText tagName="span" value={attributes.contentTZK} default="USD" onChange={ (newtext) => { setAttributes({ contentTZK: newtext }); }} /></option>
                                            <option>
                                                <RichText tagName="span" value={attributes.contentKdr} default="AUD" onChange={ (newtext) => { setAttributes({ contentKdr: newtext }); }} /></option>
                                            <option>
                                                <RichText tagName="span" value={attributes.contentxfM} default="EUR" onChange={ (newtext) => { setAttributes({ contentxfM: newtext }); }} /></option>
                                            <option>
                                                <RichText tagName="span" value={attributes.contentUdX} default="GBP" onChange={ (newtext) => { setAttributes({ contentUdX: newtext }); }} /></option>
                                        </select>
                                        <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                                            
      <svg
         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-5 h-5 text-gray-300"
          dangerouslySetInnerHTML={ { __html: attributes.svgxrm }}
        >
      </svg>
      
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="flex items-center space-x-6"> <span className="text-sm font-medium text-white hover:text-gray-100"><RichText tagName="span" value={attributes.contenthAP} default="Sign in" onChange={ (newtext) =>  {
        setAttributes({ contenthAP: newtext });
      }}
    /></span>
 <span className="text-sm font-medium text-white hover:text-gray-100"><RichText tagName="span" value={attributes.contentKfH} default="Create an account" onChange={ (newtext) =>  {
        setAttributes({ contentKfH: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="border-b border-gray-200">
                                <div className="h-16 flex items-center justify-between">
                                    <div className="hidden lg:flex-1 lg:flex lg:items-center"> <span>
                  <span className="sr-only"><RichText tagName="span" value={attributes.contentElY} default="Workflow" onChange={ (newtext) =>  {
        setAttributes({ contentElY: newtext });
      }}
    /></span>

                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlLxj: media.url,
            imagealtuhk: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlLxj } 
            alt={ attributes.imagealtuhk } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                                        </span>
                                    </div>
                                    <div className="hidden h-full lg:flex">
                                        <div className="px-4 bottom-0 inset-x-0">
                                            <div className="h-full flex justify-center space-x-8">
                                                <div className="flex">
                                                    <div className="relative flex">
                                                        <button type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                                                            <RichText tagName="span" value={attributes.contentKEp} default="Women" onChange={ (newtext) => { setAttributes({ contentKEp: newtext }); }} /></button>
                                                    </div>
                                                    <div className="absolute top-full inset-x-0 text-sm text-gray-500">
                                                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                                                        <div className="relative bg-white">
                                                            <div className="max-w-7xl mx-auto px-8">
                                                                <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                                                    <div className="group relative">
                                                                        <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlTWe: media.url,
            imagealtJOW: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlTWe } 
            alt={ attributes.imagealtJOW } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                                                        </div> <span className="mt-4 block font-medium text-gray-900">
                                  <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentGYg} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentGYg: newtext });
      }}
    /></span>

                                                                        <p aria-hidden="true" className="mt-1">
                                                                            <RichText tagName="span" value={attributes.contentDFV} default="Shop now" onChange={ (newtext) => { setAttributes({ contentDFV: newtext }); }} /></p>
                                                                    </div>
                                                                    <div className="group relative">
                                                                        <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlizh: media.url,
            imagealtJYE: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlizh } 
            alt={ attributes.imagealtJYE } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                                                        </div> <span className="mt-4 block font-medium text-gray-900">
                                  <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentzzh} default="Basic Tees" onChange={ (newtext) =>  {
        setAttributes({ contentzzh: newtext });
      }}
    /></span>

                                                                        <p aria-hidden="true" className="mt-1">
                                                                            <RichText tagName="span" value={attributes.contentpYe} default="Shop now" onChange={ (newtext) => { setAttributes({ contentpYe: newtext }); }} /></p>
                                                                    </div>
                                                                    <div className="group relative">
                                                                        <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurliNN: media.url,
            imagealtWDY: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurliNN } 
            alt={ attributes.imagealtWDY } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                                                        </div> <span className="mt-4 block font-medium text-gray-900">
                                  <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentqPk} default="Accessories" onChange={ (newtext) =>  {
        setAttributes({ contentqPk: newtext });
      }}
    /></span>

                                                                        <p aria-hidden="true" className="mt-1">
                                                                            <RichText tagName="span" value={attributes.contentHQi} default="Shop now" onChange={ (newtext) => { setAttributes({ contentHQi: newtext }); }} /></p>
                                                                    </div>
                                                                    <div className="group relative">
                                                                        <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlMLb: media.url,
            imagealtrhH: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlMLb } 
            alt={ attributes.imagealtrhH } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                                                        </div> <span className="mt-4 block font-medium text-gray-900">
                                  <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contenteZm} default="Carry" onChange={ (newtext) =>  {
        setAttributes({ contenteZm: newtext });
      }}
    /></span>

                                                                        <p aria-hidden="true" className="mt-1">
                                                                            <RichText tagName="span" value={attributes.contentwfM} default="Shop now" onChange={ (newtext) => { setAttributes({ contentwfM: newtext }); }} /></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="relative flex">
                                                        <button type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                                                            <RichText tagName="span" value={attributes.contentqYq} default="Men" onChange={ (newtext) => { setAttributes({ contentqYq: newtext }); }} /></button>
                                                    </div>
                                                    <div className="absolute top-full inset-x-0 text-sm text-gray-500">
                                                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                                                        <div className="relative bg-white">
                                                            <div className="max-w-7xl mx-auto px-8">
                                                                <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                                                    <div className="group relative">
                                                                        <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlJDN: media.url,
            imagealtrNV: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlJDN } 
            alt={ attributes.imagealtrNV } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                                                        </div> <span className="mt-4 block font-medium text-gray-900">
                                  <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentmjp} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentmjp: newtext });
      }}
    /></span>

                                                                        <p aria-hidden="true" className="mt-1">
                                                                            <RichText tagName="span" value={attributes.contentBFu} default="Shop now" onChange={ (newtext) => { setAttributes({ contentBFu: newtext }); }} /></p>
                                                                    </div>
                                                                    <div className="group relative">
                                                                        <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurltak: media.url,
            imagealtvCT: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurltak } 
            alt={ attributes.imagealtvCT } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                                                        </div> <span className="mt-4 block font-medium text-gray-900">
                                  <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentSSn} default="Basic Tees" onChange={ (newtext) =>  {
        setAttributes({ contentSSn: newtext });
      }}
    /></span>

                                                                        <p aria-hidden="true" className="mt-1">
                                                                            <RichText tagName="span" value={attributes.contentYpC} default="Shop now" onChange={ (newtext) => { setAttributes({ contentYpC: newtext }); }} /></p>
                                                                    </div>
                                                                    <div className="group relative">
                                                                        <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlhzj: media.url,
            imagealtlBk: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlhzj } 
            alt={ attributes.imagealtlBk } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                                                        </div> <span className="mt-4 block font-medium text-gray-900">
                                  <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentjWx} default="Accessories" onChange={ (newtext) =>  {
        setAttributes({ contentjWx: newtext });
      }}
    /></span>

                                                                        <p aria-hidden="true" className="mt-1">
                                                                            <RichText tagName="span" value={attributes.contentTdE} default="Shop now" onChange={ (newtext) => { setAttributes({ contentTdE: newtext }); }} /></p>
                                                                    </div>
                                                                    <div className="group relative">
                                                                        <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlFvJ: media.url,
            imagealtZfe: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlFvJ } 
            alt={ attributes.imagealtZfe } 
            onClick={ open } 
            className="object-center object-cover"
          /> 
        )} 
      />
                                                                        </div> <span className="mt-4 block font-medium text-gray-900">
                                  <span className="absolute z-10 inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentByh} default="Carry" onChange={ (newtext) =>  {
        setAttributes({ contentByh: newtext });
      }}
    /></span>

                                                                        <p aria-hidden="true" className="mt-1">
                                                                            <RichText tagName="span" value={attributes.contentsZf} default="Shop now" onChange={ (newtext) => { setAttributes({ contentsZf: newtext }); }} /></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <span className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><RichText tagName="span" value={attributes.contentmVS} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentmVS: newtext });
      }}
    /></span>
 <span className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><RichText tagName="span" value={attributes.contentUZZ} default="Stores" onChange={ (newtext) =>  {
        setAttributes({ contentUZZ: newtext });
      }}
    /></span>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex items-center lg:hidden">
                                        <button type="button" className="-ml-2 bg-white p-2 rounded-md text-gray-400"> <span className="sr-only"><RichText tagName="span" value={attributes.contentTYu} default="Open menu" onChange={ (newtext) =>  {
        setAttributes({ contentTYu: newtext });
      }}
    /></span>

                                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeAu }}
        >
      </svg>
      
                                        </button> <span className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only"><RichText tagName="span" value={attributes.contentJeF} default="Search" onChange={ (newtext) =>  {
        setAttributes({ contentJeF: newtext });
      }}
    /></span>

                                        
      <svg
         className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGEk }}
        >
      </svg>
      
                                        </span>
                                    </div> <span className="lg:hidden">
                <span className="sr-only"><RichText tagName="span" value={attributes.contentnjo} default="Workflow" onChange={ (newtext) =>  {
        setAttributes({ contentnjo: newtext });
      }}
    /></span>

                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlXNf: media.url,
            imagealtSjE: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlXNf } 
            alt={ attributes.imagealtSjE } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                                    </span>
                                    <div className="flex-1 flex items-center justify-end"> <span className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"><RichText tagName="span" value={attributes.contentUHs} default="Search" onChange={ (newtext) =>  {
        setAttributes({ contentUHs: newtext });
      }}
    /></span>

                                        <div className="flex items-center lg:ml-8"> <span className="p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                    <span className="sr-only"><RichText tagName="span" value={attributes.contentypl} default="Help" onChange={ (newtext) =>  {
        setAttributes({ contentypl: newtext });
      }}
    /></span>

                                            
      <svg
         className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqZD }}
        >
      </svg>
      
                                            </span> <span className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"><RichText tagName="span" value={attributes.contentqGr} default="Help" onChange={ (newtext) =>  {
        setAttributes({ contentqGr: newtext });
      }}
    /></span>

                                            <div className="ml-4 flow-root lg:ml-8"> <span className="group -m-2 p-2 flex items-center">
                      
                      
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRRN }}
        >
      </svg>
      
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"><RichText tagName="span" value={attributes.contentzOi} default="0" onChange={ (newtext) =>  {
        setAttributes({ contentzOi: newtext });
      }}
    /></span>
 <span className="sr-only"><RichText tagName="span" value={attributes.contentpyu} default="items in cart, view bag" onChange={ (newtext) =>  {
        setAttributes({ contentpyu: newtext });
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
                        <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"> <span class="sr-only"><RichText.Content value={attributes.contentTjy} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgizQ }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="mt-2">
                        <div class="border-b border-gray-200">
                            <div class="-mb-px flex px-4 space-x-8" aria-orientation="horizontal" role="tablist">
                                <button id="tabs-1-tab-1" class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">
                                    <RichText.Content value={attributes.contentjsa} /></button>
                                <button id="tabs-1-tab-2" class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">
                                    <RichText.Content value={attributes.contentKcM} /></button>
                            </div>
                        </div>
                        <div id="tabs-1-panel-1" class="px-4 py-6 space-y-12" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                            <div class="grid grid-cols-2 gap-x-4 gap-y-10">
                                <div class="group relative">
                                    <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <img
            src={ attributes.imageurlPrY } 
            alt={ attributes.imagealtUQm } 
            class="object-center object-cover"
          />
                                    </div> <span class="mt-6 block text-sm font-medium text-gray-900">
                <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentqnD} /></span>

                                    <p aria-hidden="true" class="mt-1 text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentTEy} /></p>
                                </div>
                                <div class="group relative">
                                    <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <img
            src={ attributes.imageurlSLL } 
            alt={ attributes.imagealtfgY } 
            class="object-center object-cover"
          />
                                    </div> <span class="mt-6 block text-sm font-medium text-gray-900">
                <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentKkd} /></span>

                                    <p aria-hidden="true" class="mt-1 text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentbZN} /></p>
                                </div>
                                <div class="group relative">
                                    <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <img
            src={ attributes.imageurlvHb } 
            alt={ attributes.imagealtFVb } 
            class="object-center object-cover"
          />
                                    </div> <span class="mt-6 block text-sm font-medium text-gray-900">
                <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentBXI} /></span>

                                    <p aria-hidden="true" class="mt-1 text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentSHT} /></p>
                                </div>
                                <div class="group relative">
                                    <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <img
            src={ attributes.imageurlTmy } 
            alt={ attributes.imagealthWO } 
            class="object-center object-cover"
          />
                                    </div> <span class="mt-6 block text-sm font-medium text-gray-900">
                <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentQjB} /></span>

                                    <p aria-hidden="true" class="mt-1 text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentYzS} /></p>
                                </div>
                            </div>
                        </div>
                        <div id="tabs-1-panel-2" class="px-4 py-6 space-y-12" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
                            <div class="grid grid-cols-2 gap-x-4 gap-y-10">
                                <div class="group relative">
                                    <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <img
            src={ attributes.imageurlLNL } 
            alt={ attributes.imagealtnlJ } 
            class="object-center object-cover"
          />
                                    </div> <span class="mt-6 block text-sm font-medium text-gray-900">
                <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentrDO} /></span>

                                    <p aria-hidden="true" class="mt-1 text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentCCe} /></p>
                                </div>
                                <div class="group relative">
                                    <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <img
            src={ attributes.imageurlMYX } 
            alt={ attributes.imagealtxix } 
            class="object-center object-cover"
          />
                                    </div> <span class="mt-6 block text-sm font-medium text-gray-900">
                <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentFpf} /></span>

                                    <p aria-hidden="true" class="mt-1 text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentksg} /></p>
                                </div>
                                <div class="group relative">
                                    <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <img
            src={ attributes.imageurlkue } 
            alt={ attributes.imagealtCgJ } 
            class="object-center object-cover"
          />
                                    </div> <span class="mt-6 block text-sm font-medium text-gray-900">
                <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentLpS} /></span>

                                    <p aria-hidden="true" class="mt-1 text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentrbb} /></p>
                                </div>
                                <div class="group relative">
                                    <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        
      <img
            src={ attributes.imageurltGK } 
            alt={ attributes.imagealtxdm } 
            class="object-center object-cover"
          />
                                    </div> <span class="mt-6 block text-sm font-medium text-gray-900">
                <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentGpx} /></span>

                                    <p aria-hidden="true" class="mt-1 text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentlzO} /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-gray-200 py-6 px-4 space-y-6">
                        <div class="flow-root"> <span class="-m-2 p-2 block font-medium text-gray-900"><RichText.Content value={attributes.contentCgH} /></span>

                        </div>
                        <div class="flow-root"> <span class="-m-2 p-2 block font-medium text-gray-900"><RichText.Content value={attributes.contentOLy} /></span>

                        </div>
                    </div>
                    <div class="border-t border-gray-200 py-6 px-4 space-y-6">
                        <div class="flow-root"> <span class="-m-2 p-2 block font-medium text-gray-900"><RichText.Content value={attributes.contentaGc} /></span>

                        </div>
                        <div class="flow-root"> <span class="-m-2 p-2 block font-medium text-gray-900"><RichText.Content value={attributes.contentLeB} /></span>

                        </div>
                    </div>
                    <div class="border-t border-gray-200 py-6 px-4 space-y-6">
                        <form>
                            <div class="inline-block">
                                <label for="mobile-currency" class="sr-only">
                                    <RichText.Content value={attributes.contentzhJ} /></label>
                                <div class="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                                    <select id="mobile-currency" name="currency" class="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent">
                                        <option>
                                            <RichText.Content value={attributes.contentjYt} /></option>
                                        <option>
                                            <RichText.Content value={attributes.contentpoO} /></option>
                                        <option>
                                            <RichText.Content value={attributes.contentOfH} /></option>
                                        <option>
                                            <RichText.Content value={attributes.contentSzS} /></option>
                                        <option>
                                            <RichText.Content value={attributes.contentxgQ} /></option>
                                    </select>
                                    <div class="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                                        
      <svg
         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-5 h-5 text-gray-500"
          dangerouslySetInnerHTML={ { __html: attributes.svgrdi }}
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
                            <form>
                                <div>
                                    <label for="desktop-currency" class="sr-only">
                                        <RichText.Content value={attributes.contentOZa} /></label>
                                    <div class="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                                        <select id="desktop-currency" name="currency" class="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent">
                                            <option>
                                                <RichText.Content value={attributes.contentCzs} /></option>
                                            <option>
                                                <RichText.Content value={attributes.contentTZK} /></option>
                                            <option>
                                                <RichText.Content value={attributes.contentKdr} /></option>
                                            <option>
                                                <RichText.Content value={attributes.contentxfM} /></option>
                                            <option>
                                                <RichText.Content value={attributes.contentUdX} /></option>
                                        </select>
                                        <div class="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                                            
      <svg
         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-5 h-5 text-gray-300"
          dangerouslySetInnerHTML={ { __html: attributes.svgxrm }}
        >
      </svg>
      
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="flex items-center space-x-6"> <span class="text-sm font-medium text-white hover:text-gray-100"><RichText.Content value={attributes.contenthAP} /></span>
 <span class="text-sm font-medium text-white hover:text-gray-100"><RichText.Content value={attributes.contentKfH} /></span>

                            </div>
                        </div>
                    </div>
                    <div class="bg-white">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div class="border-b border-gray-200">
                                <div class="h-16 flex items-center justify-between">
                                    <div class="hidden lg:flex-1 lg:flex lg:items-center"> <span>
                  <span class="sr-only"><RichText.Content value={attributes.contentElY} /></span>

                                        
      <img
            src={ attributes.imageurlLxj } 
            alt={ attributes.imagealtuhk } 
            class="h-8 w-auto"
          />
                                        </span>
                                    </div>
                                    <div class="hidden h-full lg:flex">
                                        <div class="px-4 bottom-0 inset-x-0">
                                            <div class="h-full flex justify-center space-x-8">
                                                <div class="flex">
                                                    <div class="relative flex">
                                                        <button type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                                                            <RichText.Content value={attributes.contentKEp} /></button>
                                                    </div>
                                                    <div class="absolute top-full inset-x-0 text-sm text-gray-500">
                                                        <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                                                        <div class="relative bg-white">
                                                            <div class="max-w-7xl mx-auto px-8">
                                                                <div class="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                                                    <div class="group relative">
                                                                        <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                            
      <img
            src={ attributes.imageurlTWe } 
            alt={ attributes.imagealtJOW } 
            class="object-center object-cover"
          />
                                                                        </div> <span class="mt-4 block font-medium text-gray-900">
                                  <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentGYg} /></span>

                                                                        <p aria-hidden="true" class="mt-1">
                                                                            <RichText.Content value={attributes.contentDFV} /></p>
                                                                    </div>
                                                                    <div class="group relative">
                                                                        <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                            
      <img
            src={ attributes.imageurlizh } 
            alt={ attributes.imagealtJYE } 
            class="object-center object-cover"
          />
                                                                        </div> <span class="mt-4 block font-medium text-gray-900">
                                  <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentzzh} /></span>

                                                                        <p aria-hidden="true" class="mt-1">
                                                                            <RichText.Content value={attributes.contentpYe} /></p>
                                                                    </div>
                                                                    <div class="group relative">
                                                                        <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                            
      <img
            src={ attributes.imageurliNN } 
            alt={ attributes.imagealtWDY } 
            class="object-center object-cover"
          />
                                                                        </div> <span class="mt-4 block font-medium text-gray-900">
                                  <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentqPk} /></span>

                                                                        <p aria-hidden="true" class="mt-1">
                                                                            <RichText.Content value={attributes.contentHQi} /></p>
                                                                    </div>
                                                                    <div class="group relative">
                                                                        <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                            
      <img
            src={ attributes.imageurlMLb } 
            alt={ attributes.imagealtrhH } 
            class="object-center object-cover"
          />
                                                                        </div> <span class="mt-4 block font-medium text-gray-900">
                                  <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contenteZm} /></span>

                                                                        <p aria-hidden="true" class="mt-1">
                                                                            <RichText.Content value={attributes.contentwfM} /></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex">
                                                    <div class="relative flex">
                                                        <button type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                                                            <RichText.Content value={attributes.contentqYq} /></button>
                                                    </div>
                                                    <div class="absolute top-full inset-x-0 text-sm text-gray-500">
                                                        <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                                                        <div class="relative bg-white">
                                                            <div class="max-w-7xl mx-auto px-8">
                                                                <div class="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                                                    <div class="group relative">
                                                                        <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                            
      <img
            src={ attributes.imageurlJDN } 
            alt={ attributes.imagealtrNV } 
            class="object-center object-cover"
          />
                                                                        </div> <span class="mt-4 block font-medium text-gray-900">
                                  <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentmjp} /></span>

                                                                        <p aria-hidden="true" class="mt-1">
                                                                            <RichText.Content value={attributes.contentBFu} /></p>
                                                                    </div>
                                                                    <div class="group relative">
                                                                        <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                            
      <img
            src={ attributes.imageurltak } 
            alt={ attributes.imagealtvCT } 
            class="object-center object-cover"
          />
                                                                        </div> <span class="mt-4 block font-medium text-gray-900">
                                  <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentSSn} /></span>

                                                                        <p aria-hidden="true" class="mt-1">
                                                                            <RichText.Content value={attributes.contentYpC} /></p>
                                                                    </div>
                                                                    <div class="group relative">
                                                                        <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                            
      <img
            src={ attributes.imageurlhzj } 
            alt={ attributes.imagealtlBk } 
            class="object-center object-cover"
          />
                                                                        </div> <span class="mt-4 block font-medium text-gray-900">
                                  <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentjWx} /></span>

                                                                        <p aria-hidden="true" class="mt-1">
                                                                            <RichText.Content value={attributes.contentTdE} /></p>
                                                                    </div>
                                                                    <div class="group relative">
                                                                        <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                            
      <img
            src={ attributes.imageurlFvJ } 
            alt={ attributes.imagealtZfe } 
            class="object-center object-cover"
          />
                                                                        </div> <span class="mt-4 block font-medium text-gray-900">
                                  <span class="absolute z-10 inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentByh} /></span>

                                                                        <p aria-hidden="true" class="mt-1">
                                                                            <RichText.Content value={attributes.contentsZf} /></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <span class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><RichText.Content value={attributes.contentmVS} /></span>
 <span class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><RichText.Content value={attributes.contentUZZ} /></span>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-1 flex items-center lg:hidden">
                                        <button type="button" class="-ml-2 bg-white p-2 rounded-md text-gray-400"> <span class="sr-only"><RichText.Content value={attributes.contentTYu} /></span>

                                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeAu }}
        >
      </svg>
      
                                        </button> <span class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only"><RichText.Content value={attributes.contentJeF} /></span>

                                        
      <svg
         class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGEk }}
        >
      </svg>
      
                                        </span>
                                    </div> <span class="lg:hidden">
                <span class="sr-only"><RichText.Content value={attributes.contentnjo} /></span>

                                    
      <img
            src={ attributes.imageurlXNf } 
            alt={ attributes.imagealtSjE } 
            class="h-8 w-auto"
          />
                                    </span>
                                    <div class="flex-1 flex items-center justify-end"> <span class="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"><RichText.Content value={attributes.contentUHs} /></span>

                                        <div class="flex items-center lg:ml-8"> <span class="p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                    <span class="sr-only"><RichText.Content value={attributes.contentypl} /></span>

                                            
      <svg
         class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqZD }}
        >
      </svg>
      
                                            </span> <span class="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"><RichText.Content value={attributes.contentqGr} /></span>

                                            <div class="ml-4 flow-root lg:ml-8"> <span class="group -m-2 p-2 flex items-center">
                      
                      
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRRN }}
        >
      </svg>
      
                      <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"><RichText.Content value={attributes.contentzOi} /></span>
 <span class="sr-only"><RichText.Content value={attributes.contentpyu} /></span>
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
        