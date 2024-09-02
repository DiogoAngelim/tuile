
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/full-width', {
            title: 'full width',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABIBaADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAMEBQECBgf/xAArEAEAAgIBAgUEAQUBAAAAAAAAAQIDBBEFEhMUITFBUWFxgSIWJDNCUpH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A/TgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABn7HWuna+e2HLsRF6zxbiszFZ+8xHC/W0WrFqzExMcxMfIOiHNtYsGbDiyTPdntNacR8xHKYARTs4e7NSL918Md16V9Zj05j0dwZa58FM1YtWt45iLRxMfoEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPnb49jUx72bTtq7mlkyXyZsd54tE/7Rz7f+vdMk9Q3NbUw5s2pqxp1zVrit22nmeIjn6RC/n6J07Pmvlya/wDK883it7RFp+8RPCXa6Zpbdcdc2CJ8KOKdszWax9I4+FqMTX2MufP06M2TxbYdvLijJ/3ER6S75zP/AEr43mMnjeN29/dPd/k9ufw3KdP1KVwVphisa8zOKImY7Zn3/P7V79D6ZfJfJbWjuvbun+dojn68c+hRnY8E4+s9Yy12M8Wx44tEd/pPNJ9/x8fRzUybHUMunqZNzPipGnXNNsd+L5LTPHu2cvTtTLteZvi5zTSaTaLTHMTHHExE/d4zdJ0M2HFiyYP44Y7cfFpiax9OYnkoxMezubPk9adzLX+5y4bZaTxOStY90vO/TF1HR19rJkvhy07L5MkRea2jmaxafltU6fqY414phisa8zOKImY7eff8/t5y9N083j+Lgi3mJrOTmZ9Zj0j8fooqdEzc5dnBbLt99O2ZxbPranP0t8xLWV9TR1tLv8vj7ZvMTa02m024+8rCaqnsztYMvj4YnNjmOLYvmPvCXUpnrS19m/OS88zWPan2hOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z" />),
            category: 'common',
            attributes: {
  "contentkDV": {
    "type": "string",
    "default": "Solutions"
  },
  "contentazx": {
    "type": "string",
    "default": "Analytics"
  },
  "contentlEr": {
    "type": "string",
    "default": "Get a better understanding of where your traffic is coming from."
  },
  "contentuFD": {
    "type": "string",
    "default": "Learn more "
  },
  "contentNvq": {
    "type": "string",
    "default": "&rarr;"
  },
  "contentDJo": {
    "type": "string",
    "default": "Engagement"
  },
  "contentJih": {
    "type": "string",
    "default": "Speak directly to your customers in a more meaningful way."
  },
  "contentgtv": {
    "type": "string",
    "default": "Learn more "
  },
  "contenteyF": {
    "type": "string",
    "default": "&rarr;"
  },
  "contentveU": {
    "type": "string",
    "default": "Security"
  },
  "contentNGU": {
    "type": "string",
    "default": "Your customers&#039; data will be safe and secure."
  },
  "contentgPs": {
    "type": "string",
    "default": "Learn more "
  },
  "contenthOE": {
    "type": "string",
    "default": "&rarr;"
  },
  "contentrQW": {
    "type": "string",
    "default": "Integrations"
  },
  "contentBWo": {
    "type": "string",
    "default": "Connect with third-party tools that you&#039;re already using."
  },
  "contentBXV": {
    "type": "string",
    "default": "Learn more "
  },
  "contentqlj": {
    "type": "string",
    "default": "&rarr;"
  },
  "contentbsw": {
    "type": "string",
    "default": "Watch Demo"
  },
  "contentvdI": {
    "type": "string",
    "default": "View All Products"
  },
  "contentVxx": {
    "type": "string",
    "default": "Contact Sales"
  },
  "svgnNb": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgNYb": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgIMi": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122\"/>"
  },
  "svgMvE": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"/>"
  },
  "svghcn": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
  },
  "svgtLs": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z\"/>\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgCKr": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgdxq": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\"/>"
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
            value={ attributes.svgnNb }
            onChange={ ( value ) => {
              setAttributes({ svgnNb: value });
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
            value={ attributes.svgNYb }
            onChange={ ( value ) => {
              setAttributes({ svgNYb: value });
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
            value={ attributes.svgIMi }
            onChange={ ( value ) => {
              setAttributes({ svgIMi: value });
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
            value={ attributes.svgMvE }
            onChange={ ( value ) => {
              setAttributes({ svgMvE: value });
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
            value={ attributes.svghcn }
            onChange={ ( value ) => {
              setAttributes({ svghcn: value });
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
            value={ attributes.svgtLs }
            onChange={ ( value ) => {
              setAttributes({ svgtLs: value });
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
            value={ attributes.svgCKr }
            onChange={ ( value ) => {
              setAttributes({ svgCKr: value });
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
            value={ attributes.svgdxq }
            onChange={ ( value ) => {
              setAttributes({ svgdxq: value });
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
        <div className="z-0 relative">
            <div className="relative z-10 bg-white shadow">
                <div className="max-w-7xl mx-auto flex px-4 py-6 sm:px-6 lg:px-8">
                    <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentkDV} default="Solutions" onChange={ (newtext) =>  {
        setAttributes({ contentkDV: newtext });
      }}
    /></span>

                        
      <svg
         className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnNb }}
        >
      </svg>
      
                    </button>
                </div>
            </div>
            <div className="absolute z-10 inset-x-0 transform shadow-lg">
                <div className="bg-white">
                    <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16"> <span className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div className="flex md:h-full lg:flex-col">
            <div className="flex-shrink-0">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                
                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNYb }}
        >
      </svg>
      
              </div>
            </div>
            <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
              <div>
                <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentazx} default="Analytics" onChange={ (newtext) =>  {
        setAttributes({ contentazx: newtext });
      }}
    /></p>
                <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentlEr} default="Get a better understanding of where your traffic is coming from." onChange={ (newtext) =>  {
        setAttributes({ contentlEr: newtext });
      }}
    /></p>
              </div>
              <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4"><RichText tagName="span" value={attributes.contentuFD} default="Learn more" onChange={ (newtext) =>  {
        setAttributes({ contentuFD: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentNvq} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentNvq: newtext });
      }}
    /></span>
                        </p>
                    </div>
                </div>
                </span> <span className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div className="flex md:h-full lg:flex-col">
            <div className="flex-shrink-0">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                
                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIMi }}
        >
      </svg>
      
              </div>
            </div>
            <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
              <div>
                <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentDJo} default="Engagement" onChange={ (newtext) =>  {
        setAttributes({ contentDJo: newtext });
      }}
    /></p>
                <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentJih} default="Speak directly to your customers in a more meaningful way." onChange={ (newtext) =>  {
        setAttributes({ contentJih: newtext });
      }}
    /></p>
              </div>
              <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4"><RichText tagName="span" value={attributes.contentgtv} default="Learn more" onChange={ (newtext) =>  {
        setAttributes({ contentgtv: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contenteyF} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contenteyF: newtext });
      }}
    /></span>
                </p>
            </div>
        </div>
        </span> <span className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div className="flex md:h-full lg:flex-col">
            <div className="flex-shrink-0">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                
                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMvE }}
        >
      </svg>
      
              </div>
            </div>
            <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
              <div>
                <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentveU} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentveU: newtext });
      }}
    /></p>
                <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentNGU} default="Your customers&#039; data will be safe and secure." onChange={ (newtext) =>  {
        setAttributes({ contentNGU: newtext });
      }}
    /></p>
              </div>
              <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4"><RichText tagName="span" value={attributes.contentgPs} default="Learn more" onChange={ (newtext) =>  {
        setAttributes({ contentgPs: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contenthOE} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contenthOE: newtext });
      }}
    /></span>
        </p>
    </div>
</div>
</span> <span className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div className="flex md:h-full lg:flex-col">
            <div className="flex-shrink-0">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                
                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghcn }}
        >
      </svg>
      
              </div>
            </div>
            <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
              <div>
                <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentrQW} default="Integrations" onChange={ (newtext) =>  {
        setAttributes({ contentrQW: newtext });
      }}
    /></p>
                <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentBWo} default="Connect with third-party tools that you&#039;re already using." onChange={ (newtext) =>  {
        setAttributes({ contentBWo: newtext });
      }}
    /></p>
              </div>
              <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4"><RichText tagName="span" value={attributes.contentBXV} default="Learn more" onChange={ (newtext) =>  {
        setAttributes({ contentBXV: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentqlj} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentqlj: newtext });
      }}
    /></span>
</p>
</div>
</div>
</span>
</div>
</div>
<div className="bg-gray-50">
    <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
        <div className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
            
            
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtLs }}
        >
      </svg>
      
            <span className="ml-3"><RichText tagName="span" value={attributes.contentbsw} default="Watch Demo" onChange={ (newtext) =>  {
        setAttributes({ contentbsw: newtext });
      }}
    /></span>
</span>
        </div>
        <div className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
            
            
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCKr }}
        >
      </svg>
      
            <span className="ml-3"><RichText tagName="span" value={attributes.contentvdI} default="View All Products" onChange={ (newtext) =>  {
        setAttributes({ contentvdI: newtext });
      }}
    /></span>
</span>
        </div>
        <div className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
            
            
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdxq }}
        >
      </svg>
      
            <span className="ml-3"><RichText tagName="span" value={attributes.contentVxx} default="Contact Sales" onChange={ (newtext) =>  {
        setAttributes({ contentVxx: newtext });
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
                </div>
                );
            },
            save(props) {
            const { attributes } = props;

            return (
                <div>
    <div>
        <div class="z-0 relative">
            <div class="relative z-10 bg-white shadow">
                <div class="max-w-7xl mx-auto flex px-4 py-6 sm:px-6 lg:px-8">
                    <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText.Content value={attributes.contentkDV} /></span>

                        
      <svg
         class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnNb }}
        >
      </svg>
      
                    </button>
                </div>
            </div>
            <div class="absolute z-10 inset-x-0 transform shadow-lg">
                <div class="bg-white">
                    <div class="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16"> <span class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div class="flex md:h-full lg:flex-col">
            <div class="flex-shrink-0">
              <div class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                
                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNYb }}
        >
      </svg>
      
              </div>
            </div>
            <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
              <div>
                <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentazx} /></p>
                <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentlEr} /></p>
              </div>
              <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4"><RichText.Content value={attributes.contentuFD} /><span aria-hidden="true"><RichText.Content value={attributes.contentNvq} /></span>
                        </p>
                    </div>
                </div>
                </span> <span class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div class="flex md:h-full lg:flex-col">
            <div class="flex-shrink-0">
              <div class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                
                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIMi }}
        >
      </svg>
      
              </div>
            </div>
            <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
              <div>
                <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentDJo} /></p>
                <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentJih} /></p>
              </div>
              <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4"><RichText.Content value={attributes.contentgtv} /><span aria-hidden="true"><RichText.Content value={attributes.contenteyF} /></span>
                </p>
            </div>
        </div>
        </span> <span class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div class="flex md:h-full lg:flex-col">
            <div class="flex-shrink-0">
              <div class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                
                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMvE }}
        >
      </svg>
      
              </div>
            </div>
            <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
              <div>
                <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentveU} /></p>
                <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentNGU} /></p>
              </div>
              <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4"><RichText.Content value={attributes.contentgPs} /><span aria-hidden="true"><RichText.Content value={attributes.contenthOE} /></span>
        </p>
    </div>
</div>
</span> <span class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          <div class="flex md:h-full lg:flex-col">
            <div class="flex-shrink-0">
              <div class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                
                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghcn }}
        >
      </svg>
      
              </div>
            </div>
            <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
              <div>
                <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentrQW} /></p>
                <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentBWo} /></p>
              </div>
              <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4"><RichText.Content value={attributes.contentBXV} /><span aria-hidden="true"><RichText.Content value={attributes.contentqlj} /></span>
</p>
</div>
</div>
</span>
</div>
</div>
<div class="bg-gray-50">
    <div class="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
        <div class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
            
            
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtLs }}
        >
      </svg>
      
            <span class="ml-3"><RichText.Content value={attributes.contentbsw} /></span>
</span>
        </div>
        <div class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
            
            
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCKr }}
        >
      </svg>
      
            <span class="ml-3"><RichText.Content value={attributes.contentvdI} /></span>
</span>
        </div>
        <div class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
            
            
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdxq }}
        >
      </svg>
      
            <span class="ml-3"><RichText.Content value={attributes.contentVxx} /></span>
</span>
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
        