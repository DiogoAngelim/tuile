
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-preview', {
            title: 'with preview',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8BbwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEFB//EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDpQDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwBlQAGGA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAZUABhgNIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AGVAAYYDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICiAKIAogCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAogCiAKIAoigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AGVAAf/9k=" />),
            category: 'common',
            attributes: {
  "contentpVe": {
    "type": "string",
    "default": "Recent searches"
  },
  "contentPPP": {
    "type": "string",
    "default": "Floyd Miles"
  },
  "contentzWr": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentwgJ": {
    "type": "string",
    "default": "Courtney Henry"
  },
  "contentzeM": {
    "type": "string",
    "default": "Dries Vincent"
  },
  "contentISn": {
    "type": "string",
    "default": "Kristin Watson"
  },
  "contentZZB": {
    "type": "string",
    "default": "Jeffrey Webb"
  },
  "contentybe": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentlCx": {
    "type": "string",
    "default": "Director, Product Development"
  },
  "contentpPU": {
    "type": "string",
    "default": "Phone"
  },
  "contentkEj": {
    "type": "string",
    "default": "881-460-8515"
  },
  "contentEEg": {
    "type": "string",
    "default": "URL"
  },
  "contentsKe": {
    "type": "string",
    "default": "https://example.com"
  },
  "contentZey": {
    "type": "string",
    "default": "Email"
  },
  "contentEhd": {
    "type": "string",
    "default": "tomcook@example.com"
  },
  "contentJoW": {
    "type": "string",
    "default": "Send message"
  },
  "contentLAE": {
    "type": "string",
    "default": "No people found"
  },
  "contentwCM": {
    "type": "string",
    "default": "We couldn’t find anything with that term. Please try again."
  },
  "imageurlOQn": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1463453091185-61582044d556.jpeg'
  },
  "imagealtnMM": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlVjx": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtWOU": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlnbu": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1438761681033-6461ffad8d80.jpeg'
  },
  "imagealtkhR": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlFLI": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1506794778202-cad84cf45f1d.jpeg'
  },
  "imagealtFsF": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlfZu": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1500917293891-ef795e70e1f6.jpeg'
  },
  "imagealtYoh": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlRMp": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517070208541-6ddc4d3efbcb.jpeg'
  },
  "imagealtagj": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurldwd": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtZkO": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgpCu": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgkJF": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svglKB": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgKvq": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgeWL": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgyir": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgyxU": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgfTn": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
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
            value={ attributes.svgpCu }
            onChange={ ( value ) => {
              setAttributes({ svgpCu: value });
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
            value={ attributes.svgkJF }
            onChange={ ( value ) => {
              setAttributes({ svgkJF: value });
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
            value={ attributes.svglKB }
            onChange={ ( value ) => {
              setAttributes({ svglKB: value });
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
            value={ attributes.svgKvq }
            onChange={ ( value ) => {
              setAttributes({ svgKvq: value });
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
            value={ attributes.svgeWL }
            onChange={ ( value ) => {
              setAttributes({ svgeWL: value });
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
            value={ attributes.svgyir }
            onChange={ ( value ) => {
              setAttributes({ svgyir: value });
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
            value={ attributes.svgyxU }
            onChange={ ( value ) => {
              setAttributes({ svgyxU: value });
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
            value={ attributes.svgfTn }
            onChange={ ( value ) => {
              setAttributes({ svgfTn: value });
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
        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" aria-hidden="true"/>
            <div className="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <div className="relative">
                    
      <svg
         className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpCu }}
        >
      </svg>
      
                    <input type="text" className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." role="combobox" aria-expanded="false" aria-controls="options"/>
                </div>
                <div className="flex divide-x divide-gray-100">
                    <div className="max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4 sm:h-96">
                         <h2 className="mt-2 mb-4 text-xs font-semibold text-gray-500"><RichText tagName="span" value={attributes.contentpVe} default="Recent searches" onChange={ (newtext) =>  {
        setAttributes({ contentpVe: newtext });
      }}
    /></h2>

                        <ul className="-mx-2 text-sm text-gray-700" id="recent" role="listbox">
                            <li className="group flex cursor-default select-none items-center rounded-md p-2" id="recent-1" role="option" tabindex="-1">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlOQn: media.url,
            imagealtnMM: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlOQn } 
            alt={ attributes.imagealtnMM } 
            onClick={ open } 
            className="h-6 w-6 flex-none rounded-full"
          /> 
        )} 
      /> <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentPPP} default="Floyd Miles" onChange={ (newtext) =>  {
        setAttributes({ contentPPP: newtext });
      }}
    /></span>

                                
      <svg
         className="ml-3 hidden h-5 w-5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkJF }}
        >
      </svg>
      
                            </li>
                        </ul>
                        <ul className="-mx-2 text-sm text-gray-700" id="options" role="listbox">
                            <li className="group flex cursor-default select-none items-center rounded-md p-2" id="option-1" role="option" tabindex="-1">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlVjx: media.url,
            imagealtWOU: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlVjx } 
            alt={ attributes.imagealtWOU } 
            onClick={ open } 
            className="h-6 w-6 flex-none rounded-full"
          /> 
        )} 
      /> <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentzWr} default="Tom Cook" onChange={ (newtext) =>  {
        setAttributes({ contentzWr: newtext });
      }}
    /></span>

                                
      <svg
         className="ml-3 hidden h-5 w-5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglKB }}
        >
      </svg>
      
                            </li>
                            <li className="group flex cursor-default select-none items-center rounded-md p-2" id="option-2" role="option" tabindex="-1">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlnbu: media.url,
            imagealtkhR: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlnbu } 
            alt={ attributes.imagealtkhR } 
            onClick={ open } 
            className="h-6 w-6 flex-none rounded-full"
          /> 
        )} 
      /> <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentwgJ} default="Courtney Henry" onChange={ (newtext) =>  {
        setAttributes({ contentwgJ: newtext });
      }}
    /></span>

                                
      <svg
         className="ml-3 hidden h-5 w-5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKvq }}
        >
      </svg>
      
                            </li>
                            <li className="group flex cursor-default select-none items-center rounded-md p-2" id="option-3" role="option" tabindex="-1">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlFLI: media.url,
            imagealtFsF: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlFLI } 
            alt={ attributes.imagealtFsF } 
            onClick={ open } 
            className="h-6 w-6 flex-none rounded-full"
          /> 
        )} 
      /> <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentzeM} default="Dries Vincent" onChange={ (newtext) =>  {
        setAttributes({ contentzeM: newtext });
      }}
    /></span>

                                
      <svg
         className="ml-3 hidden h-5 w-5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeWL }}
        >
      </svg>
      
                            </li>
                            <li className="group flex cursor-default select-none items-center rounded-md p-2" id="option-4" role="option" tabindex="-1">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlfZu: media.url,
            imagealtYoh: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlfZu } 
            alt={ attributes.imagealtYoh } 
            onClick={ open } 
            className="h-6 w-6 flex-none rounded-full"
          /> 
        )} 
      /> <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentISn} default="Kristin Watson" onChange={ (newtext) =>  {
        setAttributes({ contentISn: newtext });
      }}
    /></span>

                                
      <svg
         className="ml-3 hidden h-5 w-5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyir }}
        >
      </svg>
      
                            </li>
                            <li className="group flex cursor-default select-none items-center rounded-md p-2" id="option-5" role="option" tabindex="-1">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlRMp: media.url,
            imagealtagj: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlRMp } 
            alt={ attributes.imagealtagj } 
            onClick={ open } 
            className="h-6 w-6 flex-none rounded-full"
          /> 
        )} 
      /> <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentZZB} default="Jeffrey Webb" onChange={ (newtext) =>  {
        setAttributes({ contentZZB: newtext });
      }}
    /></span>

                                
      <svg
         className="ml-3 hidden h-5 w-5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyxU }}
        >
      </svg>
      
                            </li>
                        </ul>
                    </div>
                    <div className="hidden h-96 w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex">
                        <div className="flex-none p-6 text-center">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurldwd: media.url,
            imagealtZkO: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurldwd } 
            alt={ attributes.imagealtZkO } 
            onClick={ open } 
            className="mx-auto h-16 w-16 rounded-full"
          /> 
        )} 
      />
                             <h2 className="mt-3 font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentybe} default="Tom Cook" onChange={ (newtext) =>  {
        setAttributes({ contentybe: newtext });
      }}
    /></h2>

                            <p className="text-sm leading-6 text-gray-500">
                                <RichText tagName="span" value={attributes.contentlCx} default="Director, Product Development" onChange={ (newtext) => { setAttributes({ contentlCx: newtext }); }} /></p>
                        </div>
                        <div className="flex flex-auto flex-col justify-between p-6">
                            <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-700"> <dt className="col-end-1 font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentpPU} default="Phone" onChange={ (newtext) =>  {
        setAttributes({ contentpPU: newtext });
      }}
    /></dt>

                                <dd>
                                    <RichText tagName="span" value={attributes.contentkEj} default="881-460-8515" onChange={ (newtext) => { setAttributes({ contentkEj: newtext }); }} /></dd> <dt className="col-end-1 font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentEEg} default="URL" onChange={ (newtext) =>  {
        setAttributes({ contentEEg: newtext });
      }}
    /></dt>

                                <dd className="truncate"><span className="text-indigo-600 underline"><RichText tagName="span" value={attributes.contentsKe} default="https://example.com" onChange={ (newtext) =>  {
        setAttributes({ contentsKe: newtext });
      }}
    /></span>
                                </dd> <dt className="col-end-1 font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentZey} default="Email" onChange={ (newtext) =>  {
        setAttributes({ contentZey: newtext });
      }}
    /></dt>

                                <dd className="truncate"><span className="text-indigo-600 underline"><RichText tagName="span" value={attributes.contentEhd} default="tomcook@example.com" onChange={ (newtext) =>  {
        setAttributes({ contentEhd: newtext });
      }}
    /></span>
                                </dd>
                            </dl>
                            <button type="button" className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <RichText tagName="span" value={attributes.contentJoW} default="Send message" onChange={ (newtext) => { setAttributes({ contentJoW: newtext }); }} /></button>
                        </div>
                    </div>
                </div>
                <div className="py-14 px-6 text-center text-sm sm:px-14">
                    
      <svg
         className="mx-auto h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfTn }}
        >
      </svg>
      
                    <p className="mt-4 font-semibold text-gray-900">
                        <RichText tagName="span" value={attributes.contentLAE} default="No people found" onChange={ (newtext) => { setAttributes({ contentLAE: newtext }); }} /></p>
                    <p className="mt-2 text-gray-500">
                        <RichText tagName="span" value={attributes.contentwCM} default="We couldn’t find anything with that term. Please try again." onChange={ (newtext) => { setAttributes({ contentwCM: newtext }); }} /></p>
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
        <div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" aria-hidden="true"/>
            <div class="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <div class="relative">
                    
      <svg
         class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpCu }}
        >
      </svg>
      
                    <input type="text" class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." role="combobox" aria-expanded="false" aria-controls="options"/>
                </div>
                <div class="flex divide-x divide-gray-100">
                    <div class="max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4 sm:h-96">
                         <h2 class="mt-2 mb-4 text-xs font-semibold text-gray-500"><RichText.Content value={attributes.contentpVe} /></h2>

                        <ul class="-mx-2 text-sm text-gray-700" id="recent" role="listbox">
                            <li class="group flex cursor-default select-none items-center rounded-md p-2" id="recent-1" role="option" tabindex="-1">
                                
      <img
            src={ attributes.imageurlOQn } 
            alt={ attributes.imagealtnMM } 
            class="h-6 w-6 flex-none rounded-full"
          /> <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentPPP} /></span>

                                
      <svg
         class="ml-3 hidden h-5 w-5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkJF }}
        >
      </svg>
      
                            </li>
                        </ul>
                        <ul class="-mx-2 text-sm text-gray-700" id="options" role="listbox">
                            <li class="group flex cursor-default select-none items-center rounded-md p-2" id="option-1" role="option" tabindex="-1">
                                
      <img
            src={ attributes.imageurlVjx } 
            alt={ attributes.imagealtWOU } 
            class="h-6 w-6 flex-none rounded-full"
          /> <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentzWr} /></span>

                                
      <svg
         class="ml-3 hidden h-5 w-5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglKB }}
        >
      </svg>
      
                            </li>
                            <li class="group flex cursor-default select-none items-center rounded-md p-2" id="option-2" role="option" tabindex="-1">
                                
      <img
            src={ attributes.imageurlnbu } 
            alt={ attributes.imagealtkhR } 
            class="h-6 w-6 flex-none rounded-full"
          /> <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentwgJ} /></span>

                                
      <svg
         class="ml-3 hidden h-5 w-5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKvq }}
        >
      </svg>
      
                            </li>
                            <li class="group flex cursor-default select-none items-center rounded-md p-2" id="option-3" role="option" tabindex="-1">
                                
      <img
            src={ attributes.imageurlFLI } 
            alt={ attributes.imagealtFsF } 
            class="h-6 w-6 flex-none rounded-full"
          /> <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentzeM} /></span>

                                
      <svg
         class="ml-3 hidden h-5 w-5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeWL }}
        >
      </svg>
      
                            </li>
                            <li class="group flex cursor-default select-none items-center rounded-md p-2" id="option-4" role="option" tabindex="-1">
                                
      <img
            src={ attributes.imageurlfZu } 
            alt={ attributes.imagealtYoh } 
            class="h-6 w-6 flex-none rounded-full"
          /> <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentISn} /></span>

                                
      <svg
         class="ml-3 hidden h-5 w-5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyir }}
        >
      </svg>
      
                            </li>
                            <li class="group flex cursor-default select-none items-center rounded-md p-2" id="option-5" role="option" tabindex="-1">
                                
      <img
            src={ attributes.imageurlRMp } 
            alt={ attributes.imagealtagj } 
            class="h-6 w-6 flex-none rounded-full"
          /> <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentZZB} /></span>

                                
      <svg
         class="ml-3 hidden h-5 w-5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyxU }}
        >
      </svg>
      
                            </li>
                        </ul>
                    </div>
                    <div class="hidden h-96 w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex">
                        <div class="flex-none p-6 text-center">
                            
      <img
            src={ attributes.imageurldwd } 
            alt={ attributes.imagealtZkO } 
            class="mx-auto h-16 w-16 rounded-full"
          />
                             <h2 class="mt-3 font-semibold text-gray-900"><RichText.Content value={attributes.contentybe} /></h2>

                            <p class="text-sm leading-6 text-gray-500">
                                <RichText.Content value={attributes.contentlCx} /></p>
                        </div>
                        <div class="flex flex-auto flex-col justify-between p-6">
                            <dl class="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-700"> <dt class="col-end-1 font-semibold text-gray-900"><RichText.Content value={attributes.contentpPU} /></dt>

                                <dd>
                                    <RichText.Content value={attributes.contentkEj} /></dd> <dt class="col-end-1 font-semibold text-gray-900"><RichText.Content value={attributes.contentEEg} /></dt>

                                <dd class="truncate"><span class="text-indigo-600 underline"><RichText.Content value={attributes.contentsKe} /></span>
                                </dd> <dt class="col-end-1 font-semibold text-gray-900"><RichText.Content value={attributes.contentZey} /></dt>

                                <dd class="truncate"><span class="text-indigo-600 underline"><RichText.Content value={attributes.contentEhd} /></span>
                                </dd>
                            </dl>
                            <button type="button" class="mt-6 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <RichText.Content value={attributes.contentJoW} /></button>
                        </div>
                    </div>
                </div>
                <div class="py-14 px-6 text-center text-sm sm:px-14">
                    
      <svg
         class="mx-auto h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfTn }}
        >
      </svg>
      
                    <p class="mt-4 font-semibold text-gray-900">
                        <RichText.Content value={attributes.contentLAE} /></p>
                    <p class="mt-2 text-gray-500">
                        <RichText.Content value={attributes.contentwCM} /></p>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        