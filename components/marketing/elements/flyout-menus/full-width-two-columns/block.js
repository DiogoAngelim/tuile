
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/full-width-two-columns', {
            title: 'full width two columns',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABIBaADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAMEBQECBgf/xAArEAEAAgIBAgUEAQUBAAAAAAAAAQIDBBEFEhMUITFBUWFxgSIWJDNCUpH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A/TgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABn7HWuna+e2HLsRF6zxbiszFZ+8xHC/W0WrFqzExMcxMfIOiHNtYsGbDiyTPdntNacR8xHKYARTs4e7NSL918Md16V9Zj05j0dwZa58FM1YtWt45iLRxMfoEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPnb49jUx72bTtq7mlkyXyZsd54tE/7Rz7f+vdMk9Q3NbUw5s2pqxp1zVrit22nmeIjn6RC/n6J07Pmvlya/wDK883it7RFp+8RPCXa6Zpbdcdc2CJ8KOKdszWax9I4+FqMTX2MufP06M2TxbYdvLijJ/3ER6S75zP/AEr43mMnjeN29/dPd/k9ufw3KdP1KVwVphisa8zOKImY7Zn3/P7V79D6ZfJfJbWjuvbun+dojn68c+hRnY8E4+s9Yy12M8Wx44tEd/pPNJ9/x8fRzUybHUMunqZNzPipGnXNNsd+L5LTPHu2cvTtTLteZvi5zTSaTaLTHMTHHExE/d4zdJ0M2HFiyYP44Y7cfFpiax9OYnkoxMezubPk9adzLX+5y4bZaTxOStY90vO/TF1HR19rJkvhy07L5MkRea2jmaxafltU6fqY414phisa8zOKImY7eff8/t5y9N083j+Lgi3mJrOTmZ9Zj0j8fooqdEzc5dnBbLt99O2ZxbPranP0t8xLWV9TR1tLv8vj7ZvMTa02m024+8rCaqnsztYMvj4YnNjmOLYvmPvCXUpnrS19m/OS88zWPan2hOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z" />),
            category: 'common',
            attributes: {
  "contentyDQ": {
    "type": "string",
    "default": "Solutions"
  },
  "contentaZh": {
    "type": "string",
    "default": "Solutions menu"
  },
  "contentzzg": {
    "type": "string",
    "default": "Company"
  },
  "contentVPI": {
    "type": "string",
    "default": "About"
  },
  "contentncv": {
    "type": "string",
    "default": "Customers"
  },
  "contentcXf": {
    "type": "string",
    "default": "Press"
  },
  "contentPuj": {
    "type": "string",
    "default": "Careers"
  },
  "contentMje": {
    "type": "string",
    "default": "Privacy"
  },
  "contentveu": {
    "type": "string",
    "default": "Resources"
  },
  "contentTRe": {
    "type": "string",
    "default": "Community"
  },
  "contentUft": {
    "type": "string",
    "default": "Partners"
  },
  "contentjKC": {
    "type": "string",
    "default": "Guides"
  },
  "contentvVO": {
    "type": "string",
    "default": "Webinars"
  },
  "contentObz": {
    "type": "string",
    "default": "From the blog"
  },
  "contentiBx": {
    "type": "string",
    "default": "Boost your conversion rate"
  },
  "contentDpS": {
    "type": "string",
    "default": "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus."
  },
  "contentmbw": {
    "type": "string",
    "default": "How to use search engine optimization to drive traffic to your site"
  },
  "contentOyg": {
    "type": "string",
    "default": "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus."
  },
  "contenteqO": {
    "type": "string",
    "default": "View all posts "
  },
  "contentjeW": {
    "type": "string",
    "default": "&rarr;"
  },
  "imageurlEey": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1558478551-1a378f63328e.jpeg'
  },
  "imagealtXfN": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlOmX": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1486312338219-ce68d2c6f44d.jpeg'
  },
  "imagealtjRa": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgoLh": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgdXt": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgFPU": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4\"/>"
  },
  "svgcJb": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z\"/>"
  },
  "svgMry": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\"/>"
  },
  "svgjFw": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"/>"
  },
  "svgcen": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\"/>"
  },
  "svgoQQ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9\"/>"
  },
  "svgOxG": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgFfL": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\"/>"
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
            value={ attributes.svgoLh }
            onChange={ ( value ) => {
              setAttributes({ svgoLh: value });
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
            value={ attributes.svgdXt }
            onChange={ ( value ) => {
              setAttributes({ svgdXt: value });
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
            value={ attributes.svgFPU }
            onChange={ ( value ) => {
              setAttributes({ svgFPU: value });
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
            value={ attributes.svgcJb }
            onChange={ ( value ) => {
              setAttributes({ svgcJb: value });
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
            value={ attributes.svgMry }
            onChange={ ( value ) => {
              setAttributes({ svgMry: value });
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
            value={ attributes.svgjFw }
            onChange={ ( value ) => {
              setAttributes({ svgjFw: value });
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
            value={ attributes.svgcen }
            onChange={ ( value ) => {
              setAttributes({ svgcen: value });
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
            value={ attributes.svgoQQ }
            onChange={ ( value ) => {
              setAttributes({ svgoQQ: value });
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
            value={ attributes.svgOxG }
            onChange={ ( value ) => {
              setAttributes({ svgOxG: value });
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
            value={ attributes.svgFfL }
            onChange={ ( value ) => {
              setAttributes({ svgFfL: value });
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
                    <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentyDQ} default="Solutions" onChange={ (newtext) =>  {
        setAttributes({ contentyDQ: newtext });
      }}
    /></span>

                        
      <svg
         className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoLh }}
        >
      </svg>
      
                    </button>
                </div>
            </div>
            <div className="absolute z-10 inset-x-0 transform shadow-lg">
                <div className="absolute inset-0 flex" aria-hidden="true">
                    <div className="bg-white w-1/2"/>
                    <div className="bg-gray-50 w-1/2"/>
                </div>
                <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                    <nav className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12" aria-labelledby="solutions-heading">
                         <h2 id="solutions-heading" className="sr-only"><RichText tagName="span" value={attributes.contentaZh} default="Solutions menu" onChange={ (newtext) =>  {
        setAttributes({ contentaZh: newtext });
      }}
    /></h2>

                        <div>
                             <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase"><RichText tagName="span" value={attributes.contentzzg} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentzzg: newtext });
      }}
    /></h3>

                            <ul role="list" className="mt-5 space-y-6">
                                <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdXt }}
        >
      </svg>
      
                <span className="ml-4"><RichText tagName="span" value={attributes.contentVPI} default="About" onChange={ (newtext) =>  {
        setAttributes({ contentVPI: newtext });
      }}
    /></span>
</span>
                                </li>
                                <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFPU }}
        >
      </svg>
      
                <span className="ml-4"><RichText tagName="span" value={attributes.contentncv} default="Customers" onChange={ (newtext) =>  {
        setAttributes({ contentncv: newtext });
      }}
    /></span>
</span>
                                </li>
                                <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcJb }}
        >
      </svg>
      
                <span className="ml-4"><RichText tagName="span" value={attributes.contentcXf} default="Press" onChange={ (newtext) =>  {
        setAttributes({ contentcXf: newtext });
      }}
    /></span>
</span>
                                </li>
                                <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMry }}
        >
      </svg>
      
                <span className="ml-4"><RichText tagName="span" value={attributes.contentPuj} default="Careers" onChange={ (newtext) =>  {
        setAttributes({ contentPuj: newtext });
      }}
    /></span>
</span>
                                </li>
                                <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjFw }}
        >
      </svg>
      
                <span className="ml-4"><RichText tagName="span" value={attributes.contentMje} default="Privacy" onChange={ (newtext) =>  {
        setAttributes({ contentMje: newtext });
      }}
    /></span>
</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                             <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase"><RichText tagName="span" value={attributes.contentveu} default="Resources" onChange={ (newtext) =>  {
        setAttributes({ contentveu: newtext });
      }}
    /></h3>

                            <ul role="list" className="mt-5 space-y-6">
                                <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcen }}
        >
      </svg>
      
                <span className="ml-4"><RichText tagName="span" value={attributes.contentTRe} default="Community" onChange={ (newtext) =>  {
        setAttributes({ contentTRe: newtext });
      }}
    /></span>
</span>
                                </li>
                                <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoQQ }}
        >
      </svg>
      
                <span className="ml-4"><RichText tagName="span" value={attributes.contentUft} default="Partners" onChange={ (newtext) =>  {
        setAttributes({ contentUft: newtext });
      }}
    /></span>
</span>
                                </li>
                                <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOxG }}
        >
      </svg>
      
                <span className="ml-4"><RichText tagName="span" value={attributes.contentjKC} default="Guides" onChange={ (newtext) =>  {
        setAttributes({ contentjKC: newtext });
      }}
    /></span>
</span>
                                </li>
                                <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFfL }}
        >
      </svg>
      
                <span className="ml-4"><RichText tagName="span" value={attributes.contentvVO} default="Webinars" onChange={ (newtext) =>  {
        setAttributes({ contentvVO: newtext });
      }}
    /></span>
</span>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                        <div>
                             <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase"><RichText tagName="span" value={attributes.contentObz} default="From the blog" onChange={ (newtext) =>  {
        setAttributes({ contentObz: newtext });
      }}
    /></h3>

                            <ul role="list" className="mt-6 space-y-6">
                                <li className="flow-root"> <span className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">
                <div className="hidden sm:block flex-shrink-0">
                  
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurleeY: media.url,
            imagealtyzt: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurleeY } 
            alt={ attributes.imagealtyzt } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                </div>
                <div className="min-w-0 flex-1 sm:ml-8">
                  <h4 className="text-base font-medium text-gray-900 truncate"><RichText tagName="span" value={attributes.contentiBx} default="Boost your conversion rate" onChange={ (newtext) =>  {
        setAttributes({ contentiBx: newtext });
      }}
    /></h4>
                  <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentDpS} default="Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus." onChange={ (newtext) =>  {
        setAttributes({ contentDpS: newtext });
      }}
    /></p>
                </div>
              </span>

                                </li>
                                <li className="flow-root"> <span className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">
                <div className="hidden sm:block flex-shrink-0">
                  
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlOmX: media.url,
            imagealtjRa: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlOmX } 
            alt={ attributes.imagealtjRa } 
            onClick={ open } 
            className="w-32 h-20 object-cover rounded-md"
          /> 
        )} 
      />
                </div>
                <div className="min-w-0 flex-1 sm:ml-8">
                  <h4 className="text-base font-medium text-gray-900 truncate"><RichText tagName="span" value={attributes.contentmbw} default="How to use search engine optimization to drive traffic to your site" onChange={ (newtext) =>  {
        setAttributes({ contentmbw: newtext });
      }}
    /></h4>
                  <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentOyg} default="Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus." onChange={ (newtext) =>  {
        setAttributes({ contentOyg: newtext });
      }}
    /></p>
                </div>
              </span>

                                </li>
                            </ul>
                        </div>
                        <div className="mt-6 text-sm font-medium"> <span className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"><RichText tagName="span" value={attributes.contenteqO} default="View all posts" onChange={ (newtext) =>  {
        setAttributes({ contenteqO: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentjeW} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentjeW: newtext });
      }}
    /></span></span>
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
                    <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText.Content value={attributes.contentyDQ} /></span>

                        
      <svg
         class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoLh }}
        >
      </svg>
      
                    </button>
                </div>
            </div>
            <div class="absolute z-10 inset-x-0 transform shadow-lg">
                <div class="absolute inset-0 flex" aria-hidden="true">
                    <div class="bg-white w-1/2"/>
                    <div class="bg-gray-50 w-1/2"/>
                </div>
                <div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                    <nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12" aria-labelledby="solutions-heading">
                         <h2 id="solutions-heading" class="sr-only"><RichText.Content value={attributes.contentaZh} /></h2>

                        <div>
                             <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase"><RichText.Content value={attributes.contentzzg} /></h3>

                            <ul role="list" class="mt-5 space-y-6">
                                <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdXt }}
        >
      </svg>
      
                <span class="ml-4"><RichText.Content value={attributes.contentVPI} /></span>
</span>
                                </li>
                                <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFPU }}
        >
      </svg>
      
                <span class="ml-4"><RichText.Content value={attributes.contentncv} /></span>
</span>
                                </li>
                                <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcJb }}
        >
      </svg>
      
                <span class="ml-4"><RichText.Content value={attributes.contentcXf} /></span>
</span>
                                </li>
                                <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMry }}
        >
      </svg>
      
                <span class="ml-4"><RichText.Content value={attributes.contentPuj} /></span>
</span>
                                </li>
                                <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjFw }}
        >
      </svg>
      
                <span class="ml-4"><RichText.Content value={attributes.contentMje} /></span>
</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                             <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase"><RichText.Content value={attributes.contentveu} /></h3>

                            <ul role="list" class="mt-5 space-y-6">
                                <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcen }}
        >
      </svg>
      
                <span class="ml-4"><RichText.Content value={attributes.contentTRe} /></span>
</span>
                                </li>
                                <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoQQ }}
        >
      </svg>
      
                <span class="ml-4"><RichText.Content value={attributes.contentUft} /></span>
</span>
                                </li>
                                <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOxG }}
        >
      </svg>
      
                <span class="ml-4"><RichText.Content value={attributes.contentjKC} /></span>
</span>
                                </li>
                                <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                
                
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFfL }}
        >
      </svg>
      
                <span class="ml-4"><RichText.Content value={attributes.contentvVO} /></span>
</span>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                        <div>
                             <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase"><RichText.Content value={attributes.contentObz} /></h3>

                            <ul role="list" class="mt-6 space-y-6">
                                <li class="flow-root"> <span class="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">
                <div class="hidden sm:block flex-shrink-0">
                  
      <img
            src={ attributes.imageurleeY } 
            alt={ attributes.imagealtyzt } 
            class="h-10 w-10 rounded-full"
          />
                </div>
                <div class="min-w-0 flex-1 sm:ml-8">
                  <h4 class="text-base font-medium text-gray-900 truncate"><RichText.Content value={attributes.contentiBx} /></h4>
                  <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentDpS} /></p>
                </div>
              </span>

                                </li>
                                <li class="flow-root"> <span class="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">
                <div class="hidden sm:block flex-shrink-0">
                  
      <img
            src={ attributes.imageurlOmX } 
            alt={ attributes.imagealtjRa } 
            class="w-32 h-20 object-cover rounded-md"
          />
                </div>
                <div class="min-w-0 flex-1 sm:ml-8">
                  <h4 class="text-base font-medium text-gray-900 truncate"><RichText.Content value={attributes.contentmbw} /></h4>
                  <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentOyg} /></p>
                </div>
              </span>

                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 text-sm font-medium"> <span class="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"><RichText.Content value={attributes.contenteqO} /><span aria-hidden="true"><RichText.Content value={attributes.contentjeW} /></span></span>
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
        