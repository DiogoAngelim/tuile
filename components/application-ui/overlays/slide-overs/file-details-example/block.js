
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/file-details-example', {
            title: 'file details example',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contenteDN": {
    "type": "string",
    "default": "Close panel"
  },
  "contentOYt": {
    "type": "string",
    "default": "Details for "
  },
  "contentwRo": {
    "type": "string",
    "default": "IMG_4985.HEIC"
  },
  "contenttbV": {
    "type": "string",
    "default": "3.9 MB"
  },
  "contentdmq": {
    "type": "string",
    "default": "Favorite"
  },
  "contentjNg": {
    "type": "string",
    "default": "Information"
  },
  "contentwMQ": {
    "type": "string",
    "default": "Uploaded by"
  },
  "contentDBg": {
    "type": "string",
    "default": "Marie Culver"
  },
  "contenthZB": {
    "type": "string",
    "default": "Created"
  },
  "contentPwO": {
    "type": "string",
    "default": "June 8, 2020"
  },
  "contentIFw": {
    "type": "string",
    "default": "Last modified"
  },
  "contentByI": {
    "type": "string",
    "default": "June 8, 2020"
  },
  "contentVEn": {
    "type": "string",
    "default": "Dimensions"
  },
  "contentaHJ": {
    "type": "string",
    "default": "4032 x 3024"
  },
  "contentQEr": {
    "type": "string",
    "default": "Resolution"
  },
  "contentbOu": {
    "type": "string",
    "default": "72 x 72"
  },
  "contentKJl": {
    "type": "string",
    "default": "Description"
  },
  "contentASt": {
    "type": "string",
    "default": "Add a description to this image."
  },
  "contentKCe": {
    "type": "string",
    "default": "Add description"
  },
  "contenttAw": {
    "type": "string",
    "default": "Shared with"
  },
  "contentQAw": {
    "type": "string",
    "default": "Aimee Douglas"
  },
  "contentAAp": {
    "type": "string",
    "default": "Remove"
  },
  "contentOSs": {
    "type": "string",
    "default": " Aimee Douglas"
  },
  "contentiFd": {
    "type": "string",
    "default": "Andrea McMillan"
  },
  "contentQwh": {
    "type": "string",
    "default": "Remove"
  },
  "contentyNI": {
    "type": "string",
    "default": " Andrea McMillan"
  },
  "contentRxm": {
    "type": "string",
    "default": "Share"
  },
  "contentOrs": {
    "type": "string",
    "default": "Download"
  },
  "contentvzm": {
    "type": "string",
    "default": "Delete"
  },
  "imageurluHM": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1582053433976-25c00369fc93.jpeg'
  },
  "imagealtqFT": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlnwI": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1502685104226-ee32379fefbe.jpeg'
  },
  "imagealtmkR": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlctp": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1494790108377-be9c29b29330.jpeg'
  },
  "imagealtgHm": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgfUF": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgEFB": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"/>"
  },
  "svgkvd": {
    "type": "string",
    "default": "<path d=\"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z\"/>"
  },
  "svgziv": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgfUF }
            onChange={ ( value ) => {
              setAttributes({ svgfUF: value });
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
            value={ attributes.svgEFB }
            onChange={ ( value ) => {
              setAttributes({ svgEFB: value });
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
            value={ attributes.svgkvd }
            onChange={ ( value ) => {
              setAttributes({ svgkvd: value });
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
            value={ attributes.svgziv }
            onChange={ ( value ) => {
              setAttributes({ svgziv: value });
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
        <div className="fixed inset-0 overflow-hidden" role="dialog" aria-modal="true">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"/>
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <div className="pointer-events-auto relative w-96">
                        <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                            <button type="button" className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contenteDN} default="Close panel" onChange={ (newtext) =>  {
        setAttributes({ contenteDN: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfUF }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="h-full overflow-y-auto bg-white p-8">
                            <div className="space-y-6 pb-16">
                                <div>
                                    <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurluHM: media.url,
            imagealtqFT: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurluHM } 
            alt={ attributes.imagealtqFT } 
            onClick={ open } 
            className="object-cover"
          /> 
        )} 
      />
                                    </div>
                                    <div className="mt-4 flex items-start justify-between">
                                        <div>
                                             <h2 className="text-lg font-medium text-gray-900"><span className="sr-only"><RichText tagName="span" value={attributes.contentOYt} default="Details for" onChange={ (newtext) =>  {
        setAttributes({ contentOYt: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentwRo} default="IMG_4985.HEIC" onChange={ (newtext) =>  {
        setAttributes({ contentwRo: newtext });
      }}
    /></h2>

                                            <p className="text-sm font-medium text-gray-500">
                                                <RichText tagName="span" value={attributes.contenttbV} default="3.9 MB" onChange={ (newtext) => { setAttributes({ contenttbV: newtext }); }} /></p>
                                        </div>
                                        <button type="button" className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEFB }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentdmq} default="Favorite" onChange={ (newtext) =>  {
        setAttributes({ contentdmq: newtext });
      }}
    /></span>

                                        </button>
                                    </div>
                                </div>
                                <div>
                                     <h3 className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentjNg} default="Information" onChange={ (newtext) =>  {
        setAttributes({ contentjNg: newtext });
      }}
    /></h3>

                                    <dl className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                                        <div className="flex justify-between py-3 text-sm font-medium"> <dt className="text-gray-500"><RichText tagName="span" value={attributes.contentwMQ} default="Uploaded by" onChange={ (newtext) =>  {
        setAttributes({ contentwMQ: newtext });
      }}
    /></dt>

                                            <dd className="text-gray-900">
                                                <RichText tagName="span" value={attributes.contentDBg} default="Marie Culver" onChange={ (newtext) => { setAttributes({ contentDBg: newtext }); }} /></dd>
                                        </div>
                                        <div className="flex justify-between py-3 text-sm font-medium"> <dt className="text-gray-500"><RichText tagName="span" value={attributes.contenthZB} default="Created" onChange={ (newtext) =>  {
        setAttributes({ contenthZB: newtext });
      }}
    /></dt>

                                            <dd className="text-gray-900">
                                                <RichText tagName="span" value={attributes.contentPwO} default="June 8, 2020" onChange={ (newtext) => { setAttributes({ contentPwO: newtext }); }} /></dd>
                                        </div>
                                        <div className="flex justify-between py-3 text-sm font-medium"> <dt className="text-gray-500"><RichText tagName="span" value={attributes.contentIFw} default="Last modified" onChange={ (newtext) =>  {
        setAttributes({ contentIFw: newtext });
      }}
    /></dt>

                                            <dd className="text-gray-900">
                                                <RichText tagName="span" value={attributes.contentByI} default="June 8, 2020" onChange={ (newtext) => { setAttributes({ contentByI: newtext }); }} /></dd>
                                        </div>
                                        <div className="flex justify-between py-3 text-sm font-medium"> <dt className="text-gray-500"><RichText tagName="span" value={attributes.contentVEn} default="Dimensions" onChange={ (newtext) =>  {
        setAttributes({ contentVEn: newtext });
      }}
    /></dt>

                                            <dd className="text-gray-900">
                                                <RichText tagName="span" value={attributes.contentaHJ} default="4032 x 3024" onChange={ (newtext) => { setAttributes({ contentaHJ: newtext }); }} /></dd>
                                        </div>
                                        <div className="flex justify-between py-3 text-sm font-medium"> <dt className="text-gray-500"><RichText tagName="span" value={attributes.contentQEr} default="Resolution" onChange={ (newtext) =>  {
        setAttributes({ contentQEr: newtext });
      }}
    /></dt>

                                            <dd className="text-gray-900">
                                                <RichText tagName="span" value={attributes.contentbOu} default="72 x 72" onChange={ (newtext) => { setAttributes({ contentbOu: newtext }); }} /></dd>
                                        </div>
                                    </dl>
                                </div>
                                <div>
                                     <h3 className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentKJl} default="Description" onChange={ (newtext) =>  {
        setAttributes({ contentKJl: newtext });
      }}
    /></h3>

                                    <div className="mt-2 flex items-center justify-between">
                                        <p className="text-sm italic text-gray-500">
                                            <RichText tagName="span" value={attributes.contentASt} default="Add a description to this image." onChange={ (newtext) => { setAttributes({ contentASt: newtext }); }} /></p>
                                        <button type="button" className="-mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkvd }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentKCe} default="Add description" onChange={ (newtext) =>  {
        setAttributes({ contentKCe: newtext });
      }}
    /></span>

                                        </button>
                                    </div>
                                </div>
                                <div>
                                     <h3 className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contenttAw} default="Shared with" onChange={ (newtext) =>  {
        setAttributes({ contenttAw: newtext });
      }}
    /></h3>

                                    <ul role="list" className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                                        <li className="flex items-center justify-between py-3">
                                            <div className="flex items-center">
                                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlnwI: media.url,
            imagealtmkR: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlnwI } 
            alt={ attributes.imagealtmkR } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                                <p className="ml-4 text-sm font-medium text-gray-900">
                                                    <RichText tagName="span" value={attributes.contentQAw} default="Aimee Douglas" onChange={ (newtext) => { setAttributes({ contentQAw: newtext }); }} /></p>
                                            </div>
                                            <button type="button" className="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                <RichText tagName="span" value={attributes.contentAAp} default="Remove" onChange={ (newtext) => { setAttributes({ contentAAp: newtext }); }} /><span className="sr-only"><RichText tagName="span" value={attributes.contentOSs} default="Aimee Douglas" onChange={ (newtext) =>  {
        setAttributes({ contentOSs: newtext });
      }}
    /></span>
                                            </button>
                                        </li>
                                        <li className="flex items-center justify-between py-3">
                                            <div className="flex items-center">
                                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlctp: media.url,
            imagealtgHm: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlctp } 
            alt={ attributes.imagealtgHm } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                                <p className="ml-4 text-sm font-medium text-gray-900">
                                                    <RichText tagName="span" value={attributes.contentiFd} default="Andrea McMillan" onChange={ (newtext) => { setAttributes({ contentiFd: newtext }); }} /></p>
                                            </div>
                                            <button type="button" className="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                <RichText tagName="span" value={attributes.contentQwh} default="Remove" onChange={ (newtext) => { setAttributes({ contentQwh: newtext }); }} /><span className="sr-only"><RichText tagName="span" value={attributes.contentyNI} default="Andrea McMillan" onChange={ (newtext) =>  {
        setAttributes({ contentyNI: newtext });
      }}
    /></span>
                                            </button>
                                        </li>
                                        <li className="flex items-center justify-between py-2">
                                            <button type="button" className="group -ml-1 flex items-center rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"> <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                      
                      
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgziv }}
        >
      </svg>
      
                    </span>
 <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500"><RichText tagName="span" value={attributes.contentRxm} default="Share" onChange={ (newtext) =>  {
        setAttributes({ contentRxm: newtext });
      }}
    /></span>

                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex">
                                    <button type="button" className="flex-1 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        <RichText tagName="span" value={attributes.contentOrs} default="Download" onChange={ (newtext) => { setAttributes({ contentOrs: newtext }); }} /></button>
                                    <button type="button" className="ml-3 flex-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        <RichText tagName="span" value={attributes.contentvzm} default="Delete" onChange={ (newtext) => { setAttributes({ contentvzm: newtext }); }} /></button>
                                </div>
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
        <div class="fixed inset-0 overflow-hidden" role="dialog" aria-modal="true">
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"/>
                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <div class="pointer-events-auto relative w-96">
                        <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                            <button type="button" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contenteDN} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfUF }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="h-full overflow-y-auto bg-white p-8">
                            <div class="space-y-6 pb-16">
                                <div>
                                    <div class="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
                                        
      <img
            src={ attributes.imageurluHM } 
            alt={ attributes.imagealtqFT } 
            class="object-cover"
          />
                                    </div>
                                    <div class="mt-4 flex items-start justify-between">
                                        <div>
                                             <h2 class="text-lg font-medium text-gray-900"><span class="sr-only"><RichText.Content value={attributes.contentOYt} /></span><RichText.Content value={attributes.contentwRo} /></h2>

                                            <p class="text-sm font-medium text-gray-500">
                                                <RichText.Content value={attributes.contenttbV} /></p>
                                        </div>
                                        <button type="button" class="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEFB }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentdmq} /></span>

                                        </button>
                                    </div>
                                </div>
                                <div>
                                     <h3 class="font-medium text-gray-900"><RichText.Content value={attributes.contentjNg} /></h3>

                                    <dl class="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                                        <div class="flex justify-between py-3 text-sm font-medium"> <dt class="text-gray-500"><RichText.Content value={attributes.contentwMQ} /></dt>

                                            <dd class="text-gray-900">
                                                <RichText.Content value={attributes.contentDBg} /></dd>
                                        </div>
                                        <div class="flex justify-between py-3 text-sm font-medium"> <dt class="text-gray-500"><RichText.Content value={attributes.contenthZB} /></dt>

                                            <dd class="text-gray-900">
                                                <RichText.Content value={attributes.contentPwO} /></dd>
                                        </div>
                                        <div class="flex justify-between py-3 text-sm font-medium"> <dt class="text-gray-500"><RichText.Content value={attributes.contentIFw} /></dt>

                                            <dd class="text-gray-900">
                                                <RichText.Content value={attributes.contentByI} /></dd>
                                        </div>
                                        <div class="flex justify-between py-3 text-sm font-medium"> <dt class="text-gray-500"><RichText.Content value={attributes.contentVEn} /></dt>

                                            <dd class="text-gray-900">
                                                <RichText.Content value={attributes.contentaHJ} /></dd>
                                        </div>
                                        <div class="flex justify-between py-3 text-sm font-medium"> <dt class="text-gray-500"><RichText.Content value={attributes.contentQEr} /></dt>

                                            <dd class="text-gray-900">
                                                <RichText.Content value={attributes.contentbOu} /></dd>
                                        </div>
                                    </dl>
                                </div>
                                <div>
                                     <h3 class="font-medium text-gray-900"><RichText.Content value={attributes.contentKJl} /></h3>

                                    <div class="mt-2 flex items-center justify-between">
                                        <p class="text-sm italic text-gray-500">
                                            <RichText.Content value={attributes.contentASt} /></p>
                                        <button type="button" class="-mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkvd }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentKCe} /></span>

                                        </button>
                                    </div>
                                </div>
                                <div>
                                     <h3 class="font-medium text-gray-900"><RichText.Content value={attributes.contenttAw} /></h3>

                                    <ul role="list" class="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                                        <li class="flex items-center justify-between py-3">
                                            <div class="flex items-center">
                                                
      <img
            src={ attributes.imageurlnwI } 
            alt={ attributes.imagealtmkR } 
            class="h-8 w-8 rounded-full"
          />
                                                <p class="ml-4 text-sm font-medium text-gray-900">
                                                    <RichText.Content value={attributes.contentQAw} /></p>
                                            </div>
                                            <button type="button" class="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                <RichText.Content value={attributes.contentAAp} /><span class="sr-only"><RichText.Content value={attributes.contentOSs} /></span>
                                            </button>
                                        </li>
                                        <li class="flex items-center justify-between py-3">
                                            <div class="flex items-center">
                                                
      <img
            src={ attributes.imageurlctp } 
            alt={ attributes.imagealtgHm } 
            class="h-8 w-8 rounded-full"
          />
                                                <p class="ml-4 text-sm font-medium text-gray-900">
                                                    <RichText.Content value={attributes.contentiFd} /></p>
                                            </div>
                                            <button type="button" class="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                <RichText.Content value={attributes.contentQwh} /><span class="sr-only"><RichText.Content value={attributes.contentyNI} /></span>
                                            </button>
                                        </li>
                                        <li class="flex items-center justify-between py-2">
                                            <button type="button" class="group -ml-1 flex items-center rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"> <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                      
                      
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgziv }}
        >
      </svg>
      
                    </span>
 <span class="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500"><RichText.Content value={attributes.contentRxm} /></span>

                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex">
                                    <button type="button" class="flex-1 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        <RichText.Content value={attributes.contentOrs} /></button>
                                    <button type="button" class="ml-3 flex-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        <RichText.Content value={attributes.contentvzm} /></button>
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
        });
        