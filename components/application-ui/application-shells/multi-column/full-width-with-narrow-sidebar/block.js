
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/full-width-with-narrow-sidebar', {
            title: 'full width with narrow sidebar',
            icon: (<img src="data:image/jpeg;base64,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+ywCvCnor7HCnor7LAK8KeivscKeivssArwp6K+xwp6K+ywCvCnor7HCnor7LAK8KeivscKeivssArwp6K+xwp6K+ywCvCnor7HCnor7LAK8KeivscKeivssArwp6K+xwp6K+ywCvCnor7HCnor7LAK8KeivscKeivssArwp6K+xwp6K+ywCvCnor7HCnor7LAK8KeivscKeivssArwp6K+xwp6K+ywCvCnor7HCnor7LAK8KeivscKeivssArwp6K+xwp6K+ywCvCnor7HCnor7LAK8KeivscKeivssArwp6K+xwp6K+ywCvCnor7HCnor7LAK8KeivscKeivssArwp6K+xwp6K+ywCvCnor7HCnor7LAK8KeivscKeivssArwp6K+xwp6K+ywCvCnor7HCnor7LAK8KeivscKeivssArwp6K+xwp6K+ywCvCnor7HCnor7LAK8KeivscKeivssArwp6K+xwp6K+ywCvCnor7HCnor7LAK8KeivscKeivssArwp6K+xwp6K+ywCvCnor7HCnor7LAK8KeivscKeivssArwp6K+xwp6K+ywCvCnor7HCnor7LAK8KeivsrelOE/or4eTIpk+ifwC4AA89qv6ji19ukYs2ScestOXHqJv+vDjj/6lYnx33mOPly/Zkx9V1kYses7LD/T51EYIiZtOXbnwi8z4T3/by+6wd0cieq5vkLajhj5Rrvlttp249rw38fHZk6Vq9brM+pvmrp6abFmy4aRWJ52mttomZ32jujwIOmPK67U4v6x1XHk1HUpzY+z7DHprZZiJmkfav6e+fNuYuo9Tx5YxaiuniNNo8efVWtEzaZmLcoiInb+2e/8A5Ild4cXB1HqU30kanHpaxrqWnDw5T2duPKIt3/qjaJ8Nmj0i2emn6Xl1Nq5cmq1V5m8WvEx+i/j+rafD8bfYivUDyej65mwaDp+kx5MUZp0kZr5M9b33/VMRH6fv3T3z/L0fTtV870/BqpxzjnLSLTSfGs+RBsgIAAAAAAAAAAAAAAMdKU4R+ivh5LcKeivsjH9EfhcH57Ys32ZWLN/a1cMQAA6GPofWMuOuTF0nXXpaN62rp7zEx+07F+hdZx0m+TpOvrWPGbaa8RH8A54AMuH7srFh/uZQffQGboAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARb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" />),
            category: 'common',
            attributes: {
  "contentOVh": {
    "type": "string",
    "default": "Choose inbox"
  },
  "contentTRX": {
    "type": "string",
    "default": "Open"
  },
  "contentJfE": {
    "type": "string",
    "default": "Archive"
  },
  "contentGWW": {
    "type": "string",
    "default": "Customers"
  },
  "contentJul": {
    "type": "string",
    "default": "Flagged"
  },
  "contentxwC": {
    "type": "string",
    "default": "Spam"
  },
  "contentVEk": {
    "type": "string",
    "default": "Drafts"
  },
  "contentlms": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentPZo": {
    "type": "string",
    "default": "Search"
  },
  "contentYOV": {
    "type": "string",
    "default": "Inboxes"
  },
  "contentsbM": {
    "type": "string",
    "default": "Reporting"
  },
  "contentCvA": {
    "type": "string",
    "default": "Settings"
  },
  "contentTDV": {
    "type": "string",
    "default": "View notifications"
  },
  "contentmya": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentiGt": {
    "type": "string",
    "default": " Your Profile "
  },
  "contentHtW": {
    "type": "string",
    "default": " Sign Out "
  },
  "contenttkc": {
    "type": "string",
    "default": "Close main menu"
  },
  "contentfTC": {
    "type": "string",
    "default": "Search all inboxes"
  },
  "contentKwG": {
    "type": "string",
    "default": "Inboxes"
  },
  "contentthu": {
    "type": "string",
    "default": "Technical Support"
  },
  "contentzpw": {
    "type": "string",
    "default": "Sales"
  },
  "contentVXW": {
    "type": "string",
    "default": "General"
  },
  "contentDuj": {
    "type": "string",
    "default": "Reporting"
  },
  "contentmUa": {
    "type": "string",
    "default": "Settings"
  },
  "contentcdO": {
    "type": "string",
    "default": "Whitney Francis"
  },
  "contentCcA": {
    "type": "string",
    "default": "whitney.francis@example.com"
  },
  "contentMeR": {
    "type": "string",
    "default": "View notifications"
  },
  "contentvXV": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentnHC": {
    "type": "string",
    "default": "Sign out"
  },
  "contentgXH": {
    "type": "string",
    "default": "Open"
  },
  "contentSCP": {
    "type": "string",
    "default": "Archive"
  },
  "contentqWM": {
    "type": "string",
    "default": "Customers"
  },
  "contentUys": {
    "type": "string",
    "default": "Flagged"
  },
  "contentkKw": {
    "type": "string",
    "default": "Spam"
  },
  "contentdgK": {
    "type": "string",
    "default": "Drafts"
  },
  "contentwDZ": {
    "type": "string",
    "default": "Home"
  },
  "imageurliiv": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtxsc": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlgaX": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517365830460-955ce3ccd263.jpeg'
  },
  "imagealtOzt": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlcSu": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtiEO": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurldZT": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517365830460-955ce3ccd263.jpeg'
  },
  "imagealtoCn": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgLPY": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgtPv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svggMx": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgYMT": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgbAR": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgPTX": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgDKs": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgjqD": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgkXT": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4\"/>"
  },
  "svgXOK": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgnJL": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9\"/>"
  },
  "svgxrl": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636\"/>"
  },
  "svgoIw": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z\"/>"
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
            value={ attributes.svgLPY }
            onChange={ ( value ) => {
              setAttributes({ svgLPY: value });
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
            value={ attributes.svgtPv }
            onChange={ ( value ) => {
              setAttributes({ svgtPv: value });
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
            value={ attributes.svggMx }
            onChange={ ( value ) => {
              setAttributes({ svggMx: value });
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
            value={ attributes.svgYMT }
            onChange={ ( value ) => {
              setAttributes({ svgYMT: value });
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
            value={ attributes.svgbAR }
            onChange={ ( value ) => {
              setAttributes({ svgbAR: value });
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
            value={ attributes.svgPTX }
            onChange={ ( value ) => {
              setAttributes({ svgPTX: value });
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
            value={ attributes.svgDKs }
            onChange={ ( value ) => {
              setAttributes({ svgDKs: value });
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
            value={ attributes.svgjqD }
            onChange={ ( value ) => {
              setAttributes({ svgjqD: value });
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
            value={ attributes.svgkXT }
            onChange={ ( value ) => {
              setAttributes({ svgkXT: value });
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
            value={ attributes.svgXOK }
            onChange={ ( value ) => {
              setAttributes({ svgXOK: value });
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
            value={ attributes.svgnJL }
            onChange={ ( value ) => {
              setAttributes({ svgnJL: value });
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
            value={ attributes.svgxrl }
            onChange={ ( value ) => {
              setAttributes({ svgxrl: value });
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
            value={ attributes.svgoIw }
            onChange={ ( value ) => {
              setAttributes({ svgoIw: value });
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
        <div className="h-full flex flex-col">
            <header className="flex-shrink-0 relative h-16 bg-white flex items-center">
                <div className="absolute inset-y-0 left-0 md:static md:flex-shrink-0"> <span className="flex items-center justify-center h-16 w-16 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20">
        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurliiv: media.url,
            imagealtxsc: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurliiv } 
            alt={ attributes.imagealtxsc } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
      </span>

                </div>
                <div className="mx-auto md:hidden">
                    <div className="relative">
                        <label for="inbox-select" className="sr-only">
                            <RichText tagName="span" value={attributes.contentOVh} default="Choose inbox" onChange={ (newtext) => { setAttributes({ contentOVh: newtext }); }} /></label>
                        <select id="inbox-select" className="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-indigo-600">
                            <option selected="">
                                <RichText tagName="span" value={attributes.contentTRX} default="Open" onChange={ (newtext) => { setAttributes({ contentTRX: newtext }); }} /></option>
                            <option>
                                <RichText tagName="span" value={attributes.contentJfE} default="Archive" onChange={ (newtext) => { setAttributes({ contentJfE: newtext }); }} /></option>
                            <option>
                                <RichText tagName="span" value={attributes.contentGWW} default="Customers" onChange={ (newtext) => { setAttributes({ contentGWW: newtext }); }} /></option>
                            <option>
                                <RichText tagName="span" value={attributes.contentJul} default="Flagged" onChange={ (newtext) => { setAttributes({ contentJul: newtext }); }} /></option>
                            <option>
                                <RichText tagName="span" value={attributes.contentxwC} default="Spam" onChange={ (newtext) => { setAttributes({ contentxwC: newtext }); }} /></option>
                            <option>
                                <RichText tagName="span" value={attributes.contentVEk} default="Drafts" onChange={ (newtext) => { setAttributes({ contentVEk: newtext }); }} /></option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">
                            
      <svg
         className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLPY }}
        >
      </svg>
      
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden">
                    <button type="button" className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"> <span className="sr-only"><RichText tagName="span" value={attributes.contentlms} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentlms: newtext });
      }}
    /></span>

                        
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtPv }}
        >
      </svg>
      
                    </button>
                </div>
                <div className="hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between">
                    <div className="min-w-0 flex-1">
                        <div className="max-w-2xl relative text-gray-400 focus-within:text-gray-500">
                            <label for="desktop-search" className="sr-only">
                                <RichText tagName="span" value={attributes.contentPZo} default="Search" onChange={ (newtext) => { setAttributes({ contentPZo: newtext }); }} /></label>
                            <input id="desktop-search" type="search" placeholder="Search" className="block w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent sm:text-sm focus:ring-0"/>
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                                
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggMx }}
        >
      </svg>
      
                            </div>
                        </div>
                    </div>
                    <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
                        <nav aria-label="Global" className="flex space-x-10"> <span className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentYOV} default="Inboxes" onChange={ (newtext) =>  {
        setAttributes({ contentYOV: newtext });
      }}
    /></span>
 <span className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentsbM} default="Reporting" onChange={ (newtext) =>  {
        setAttributes({ contentsbM: newtext });
      }}
    /></span>
 <span className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentCvA} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentCvA: newtext });
      }}
    /></span>

                        </nav>
                        <div className="flex items-center space-x-8"> <span className="inline-flex">
            <span className="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500">
              <span className="sr-only"><RichText tagName="span" value={attributes.contentTDV} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentTDV: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYMT }}
        >
      </svg>
      
                            </span>
                            </span>
                            <div className="relative inline-block text-left">
                                <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600" id="menu-0-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentmya} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentmya: newtext });
      }}
    /></span>

                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlgaX: media.url,
            imagealtOzt: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlgaX } 
            alt={ attributes.imagealtOzt } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                </button>
                                <div className="origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
                                    <div className="py-1" role="none"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-0-item-0"><RichText tagName="span" value={attributes.contentiGt} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentiGt: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-0-item-1"><RichText tagName="span" value={attributes.contentHtW} default="Sign Out" onChange={ (newtext) =>  {
        setAttributes({ contentHtW: newtext });
      }}
    /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true">
                    <div className="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75" aria-hidden="true"/>
                    <nav className="fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg" aria-label="Global">
                        <div className="h-16 flex items-center justify-between px-4 sm:px-6"> <span>
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlcSu: media.url,
            imagealtiEO: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlcSu } 
            alt={ attributes.imagealtiEO } 
            onClick={ open } 
            className="block h-8 w-auto"
          /> 
        )} 
      />
          </span>

                            <button type="button" className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"> <span className="sr-only"><RichText tagName="span" value={attributes.contenttkc} default="Close main menu" onChange={ (newtext) =>  {
        setAttributes({ contenttkc: newtext });
      }}
    /></span>

                                
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbAR }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="mt-2 max-w-8xl mx-auto px-4 sm:px-6">
                            <div className="relative text-gray-400 focus-within:text-gray-500">
                                <label for="mobile-search" className="sr-only">
                                    <RichText tagName="span" value={attributes.contentfTC} default="Search all inboxes" onChange={ (newtext) => { setAttributes({ contentfTC: newtext }); }} /></label>
                                <input id="mobile-search" type="search" placeholder="Search all inboxes" className="block w-full border-gray-300 rounded-md pl-10 placeholder-gray-500 focus:border-indigo-600 focus:ring-indigo-600"/>
                                <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                                    
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPTX }}
        >
      </svg>
      
                                </div>
                            </div>
                        </div>
                        <div className="max-w-8xl mx-auto py-3 px-2 sm:px-4"> <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentKwG} default="Inboxes" onChange={ (newtext) =>  {
        setAttributes({ contentKwG: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentthu} default="Technical Support" onChange={ (newtext) =>  {
        setAttributes({ contentthu: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentzpw} default="Sales" onChange={ (newtext) =>  {
        setAttributes({ contentzpw: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentVXW} default="General" onChange={ (newtext) =>  {
        setAttributes({ contentVXW: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentDuj} default="Reporting" onChange={ (newtext) =>  {
        setAttributes({ contentDuj: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentmUa} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentmUa: newtext });
      }}
    /></span>

                        </div>
                        <div className="border-t border-gray-200 pt-4 pb-3">
                            <div className="max-w-8xl mx-auto px-4 flex items-center sm:px-6">
                                <div className="flex-shrink-0">
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurldZT: media.url,
            imagealtoCn: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurldZT } 
            alt={ attributes.imagealtoCn } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                                </div>
                                <div className="ml-3 min-w-0 flex-1">
                                    <div className="text-base font-medium text-gray-800 truncate">
                                        <RichText tagName="span" value={attributes.contentcdO} default="Whitney Francis" onChange={ (newtext) => { setAttributes({ contentcdO: newtext }); }} /></div>
                                    <div className="text-sm font-medium text-gray-500 truncate">
                                        <RichText tagName="span" value={attributes.contentCcA} default="whitney.francis@example.com" onChange={ (newtext) => { setAttributes({ contentCcA: newtext }); }} /></div>
                                </div> <span className="ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only"><RichText tagName="span" value={attributes.contentMeR} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentMeR: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDKs }}
        >
      </svg>
      
                                </span>
                            </div>
                            <div className="mt-3 max-w-8xl mx-auto px-2 space-y-1 sm:px-4"> <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"><RichText tagName="span" value={attributes.contentvXV} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentvXV: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"><RichText tagName="span" value={attributes.contentnHC} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentnHC: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="min-h-0 flex-1 flex overflow-hidden">
                <nav aria-label="Sidebar" className="hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto">
                    <div className="relative w-20 flex flex-col p-3 space-y-3"> <span className="bg-gray-900 text-white flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
          <span className="sr-only"><RichText tagName="span" value={attributes.contentgXH} default="Open" onChange={ (newtext) =>  {
        setAttributes({ contentgXH: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjqD }}
        >
      </svg>
      
                        </span> <span className="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
          <span className="sr-only"><RichText tagName="span" value={attributes.contentSCP} default="Archive" onChange={ (newtext) =>  {
        setAttributes({ contentSCP: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkXT }}
        >
      </svg>
      
                        </span> <span className="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
          <span className="sr-only"><RichText tagName="span" value={attributes.contentqWM} default="Customers" onChange={ (newtext) =>  {
        setAttributes({ contentqWM: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgXOK }}
        >
      </svg>
      
                        </span> <span className="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
          <span className="sr-only"><RichText tagName="span" value={attributes.contentUys} default="Flagged" onChange={ (newtext) =>  {
        setAttributes({ contentUys: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnJL }}
        >
      </svg>
      
                        </span> <span className="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
          <span className="sr-only"><RichText tagName="span" value={attributes.contentkKw} default="Spam" onChange={ (newtext) =>  {
        setAttributes({ contentkKw: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxrl }}
        >
      </svg>
      
                        </span> <span className="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
          <span className="sr-only"><RichText tagName="span" value={attributes.contentdgK} default="Drafts" onChange={ (newtext) =>  {
        setAttributes({ contentdgK: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoIw }}
        >
      </svg>
      
                        </span>
                    </div>
                </nav>
                <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
                    <section aria-labelledby="primary-heading" className="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last">
                         <h1 id="primary-heading" className="sr-only"><RichText tagName="span" value={attributes.contentwDZ} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentwDZ: newtext });
      }}
    /></h1>

                    </section>
                    <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
                        <div className="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 overflow-y-auto"/>
                    </aside>
                </main>
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
        <div class="h-full flex flex-col">
            <header class="flex-shrink-0 relative h-16 bg-white flex items-center">
                <div class="absolute inset-y-0 left-0 md:static md:flex-shrink-0"> <span class="flex items-center justify-center h-16 w-16 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20">
        
      <img
            src={ attributes.imageurliiv } 
            alt={ attributes.imagealtxsc } 
            class="h-8 w-auto"
          />
      </span>

                </div>
                <div class="mx-auto md:hidden">
                    <div class="relative">
                        <label for="inbox-select" class="sr-only">
                            <RichText.Content value={attributes.contentOVh} /></label>
                        <select id="inbox-select" class="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-indigo-600">
                            <option selected="">
                                <RichText.Content value={attributes.contentTRX} /></option>
                            <option>
                                <RichText.Content value={attributes.contentJfE} /></option>
                            <option>
                                <RichText.Content value={attributes.contentGWW} /></option>
                            <option>
                                <RichText.Content value={attributes.contentJul} /></option>
                            <option>
                                <RichText.Content value={attributes.contentxwC} /></option>
                            <option>
                                <RichText.Content value={attributes.contentVEk} /></option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">
                            
      <svg
         class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLPY }}
        >
      </svg>
      
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden">
                    <button type="button" class="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"> <span class="sr-only"><RichText.Content value={attributes.contentlms} /></span>

                        
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtPv }}
        >
      </svg>
      
                    </button>
                </div>
                <div class="hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between">
                    <div class="min-w-0 flex-1">
                        <div class="max-w-2xl relative text-gray-400 focus-within:text-gray-500">
                            <label for="desktop-search" class="sr-only">
                                <RichText.Content value={attributes.contentPZo} /></label>
                            <input id="desktop-search" type="search" placeholder="Search" class="block w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent sm:text-sm focus:ring-0"/>
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                                
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggMx }}
        >
      </svg>
      
                            </div>
                        </div>
                    </div>
                    <div class="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
                        <nav aria-label="Global" class="flex space-x-10"> <span class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentYOV} /></span>
 <span class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentsbM} /></span>
 <span class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentCvA} /></span>

                        </nav>
                        <div class="flex items-center space-x-8"> <span class="inline-flex">
            <span class="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500">
              <span class="sr-only"><RichText.Content value={attributes.contentTDV} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYMT }}
        >
      </svg>
      
                            </span>
                            </span>
                            <div class="relative inline-block text-left">
                                <button type="button" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600" id="menu-0-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentmya} /></span>

                                    
      <img
            src={ attributes.imageurlgaX } 
            alt={ attributes.imagealtOzt } 
            class="h-8 w-8 rounded-full"
          />
                                </button>
                                <div class="origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
                                    <div class="py-1" role="none"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-0-item-0"><RichText.Content value={attributes.contentiGt} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-0-item-1"><RichText.Content value={attributes.contentHtW} /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true">
                    <div class="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75" aria-hidden="true"/>
                    <nav class="fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg" aria-label="Global">
                        <div class="h-16 flex items-center justify-between px-4 sm:px-6"> <span>
            
      <img
            src={ attributes.imageurlcSu } 
            alt={ attributes.imagealtiEO } 
            class="block h-8 w-auto"
          />
          </span>

                            <button type="button" class="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"> <span class="sr-only"><RichText.Content value={attributes.contenttkc} /></span>

                                
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbAR }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="mt-2 max-w-8xl mx-auto px-4 sm:px-6">
                            <div class="relative text-gray-400 focus-within:text-gray-500">
                                <label for="mobile-search" class="sr-only">
                                    <RichText.Content value={attributes.contentfTC} /></label>
                                <input id="mobile-search" type="search" placeholder="Search all inboxes" class="block w-full border-gray-300 rounded-md pl-10 placeholder-gray-500 focus:border-indigo-600 focus:ring-indigo-600"/>
                                <div class="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                                    
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPTX }}
        >
      </svg>
      
                                </div>
                            </div>
                        </div>
                        <div class="max-w-8xl mx-auto py-3 px-2 sm:px-4"> <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"><RichText.Content value={attributes.contentKwG} /></span>
 <span class="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"><RichText.Content value={attributes.contentthu} /></span>
 <span class="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"><RichText.Content value={attributes.contentzpw} /></span>
 <span class="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"><RichText.Content value={attributes.contentVXW} /></span>
 <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"><RichText.Content value={attributes.contentDuj} /></span>
 <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"><RichText.Content value={attributes.contentmUa} /></span>

                        </div>
                        <div class="border-t border-gray-200 pt-4 pb-3">
                            <div class="max-w-8xl mx-auto px-4 flex items-center sm:px-6">
                                <div class="flex-shrink-0">
                                    
      <img
            src={ attributes.imageurldZT } 
            alt={ attributes.imagealtoCn } 
            class="h-10 w-10 rounded-full"
          />
                                </div>
                                <div class="ml-3 min-w-0 flex-1">
                                    <div class="text-base font-medium text-gray-800 truncate">
                                        <RichText.Content value={attributes.contentcdO} /></div>
                                    <div class="text-sm font-medium text-gray-500 truncate">
                                        <RichText.Content value={attributes.contentCcA} /></div>
                                </div> <span class="ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500">
              <span class="sr-only"><RichText.Content value={attributes.contentMeR} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDKs }}
        >
      </svg>
      
                                </span>
                            </div>
                            <div class="mt-3 max-w-8xl mx-auto px-2 space-y-1 sm:px-4"> <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"><RichText.Content value={attributes.contentvXV} /></span>
 <span class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"><RichText.Content value={attributes.contentnHC} /></span>

                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div class="min-h-0 flex-1 flex overflow-hidden">
                <nav aria-label="Sidebar" class="hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto">
                    <div class="relative w-20 flex flex-col p-3 space-y-3"> <span class="bg-gray-900 text-white flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
          <span class="sr-only"><RichText.Content value={attributes.contentgXH} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjqD }}
        >
      </svg>
      
                        </span> <span class="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
          <span class="sr-only"><RichText.Content value={attributes.contentSCP} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkXT }}
        >
      </svg>
      
                        </span> <span class="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
          <span class="sr-only"><RichText.Content value={attributes.contentqWM} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgXOK }}
        >
      </svg>
      
                        </span> <span class="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
          <span class="sr-only"><RichText.Content value={attributes.contentUys} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnJL }}
        >
      </svg>
      
                        </span> <span class="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
          <span class="sr-only"><RichText.Content value={attributes.contentkKw} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxrl }}
        >
      </svg>
      
                        </span> <span class="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
          <span class="sr-only"><RichText.Content value={attributes.contentdgK} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoIw }}
        >
      </svg>
      
                        </span>
                    </div>
                </nav>
                <main class="min-w-0 flex-1 border-t border-gray-200 lg:flex">
                    <section aria-labelledby="primary-heading" class="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last">
                         <h1 id="primary-heading" class="sr-only"><RichText.Content value={attributes.contentwDZ} /></h1>

                    </section>
                    <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first">
                        <div class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 overflow-y-auto"/>
                    </aside>
                </main>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        