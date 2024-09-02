
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/split-with-image', {
            title: 'split with image',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAKgBaADASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAEFBAYHAwII/8QASBABAAICAQIEAwUFBQUFBgcAAAECAwQRBRIGITFhE0FRBxQicZEVI4GhsTJCdLLBFjU2ctEzUoTh8CU0N3OSolVigqPC0vH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIEA//EACoRAQEBAAEDAgQFBQAAAAAAAAARAQIDIUESMRNR0fAEFGFxoSKBkbHB/9oADAMBAAIRAxEAPwDpwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gSI7vY7vYEiO72O72BIju9ju9gfICoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAi1u3jy9Z4BIAAAAAAAAIrbujnjjzmP0kEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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" />),
            category: 'common',
            attributes: {
  "contentsBU": {
    "type": "string",
    "default": "Workflow"
  },
  "contentvbf": {
    "type": "string",
    "default": "404 error"
  },
  "contentjVr": {
    "type": "string",
    "default": "Page not found"
  },
  "contentijm": {
    "type": "string",
    "default": "Sorry, we couldn’t find the page you’re looking for."
  },
  "contentzRM": {
    "type": "string",
    "default": "Go back home"
  },
  "contenthKF": {
    "type": "string",
    "default": " &rarr;"
  },
  "contentdKL": {
    "type": "string",
    "default": "Contact Support"
  },
  "contentnHF": {
    "type": "string",
    "default": "Status"
  },
  "contentiOp": {
    "type": "string",
    "default": "Twitter"
  },
  "imageurlyGX": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtjyw": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "backgroundurlBdR": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1470847355775-e0e3c35a9a2c.jpeg'
  },
  "backgroundaltBVV": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  }
},
            edit(props) {
            const { attributes, setAttributes } = props;

            return (
                <div>
                    <InspectorControls>
                    
    <Panel>
      




























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































              
      <PanelBody title="Background Image">
        <PanelRow>
          <div>
            <MediaUpload
              onSelect={ (media) => { 
                setAttributes({ 
                  backgroundurlBdR: media.url,
                   backgroundaltBVV: media.alt
                }); 
              } }
              type="image"
              value={ attributes.backgroundurlBdR }
              render={({ open }) => (
                  <button onClick={ open }>Select Image</button>
              )}
            />
            {attributes.backgroundurlBdR && (
                <img src={attributes.backgroundurlBdR} alt={attributes.backgroundaltBVV} />
            )}
          </div>
        </PanelRow>
      </PanelBody>
      
    </Panel>
                    </InspectorControls>

                    <div>
    <div>
        <div className="bg-white min-h-full flex flex-col lg:relative">
            <div className="flex-grow flex flex-col">
                <main className="flex-grow flex flex-col bg-white">
                    <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
                        <div className="flex-shrink-0 pt-10 sm:pt-16"> <span className="inline-flex">
            <span className="sr-only"><RichText tagName="span" value={attributes.contentsBU} default="Workflow" onChange={ (newtext) =>  {
        setAttributes({ contentsBU: newtext });
      }}
    /></span>

                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlyGX: media.url,
            imagealtjyw: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlyGX } 
            alt={ attributes.imagealtjyw } 
            onClick={ open } 
            className="h-12 w-auto"
          /> 
        )} 
      />
                            </span>
                        </div>
                        <div className="flex-shrink-0 my-auto py-16 sm:py-32">
                            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                                <RichText tagName="span" value={attributes.contentvbf} default="404 error" onChange={ (newtext) => { setAttributes({ contentvbf: newtext }); }} /></p>
                             <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"><RichText tagName="span" value={attributes.contentjVr} default="Page not found" onChange={ (newtext) =>  {
        setAttributes({ contentjVr: newtext });
      }}
    /></h1>

                            <p className="mt-2 text-base text-gray-500">
                                <RichText tagName="span" value={attributes.contentijm} default="Sorry, we couldn’t find the page you’re looking for." onChange={ (newtext) => { setAttributes({ contentijm: newtext }); }} /></p>
                            <div className="mt-6"> <span className="text-base font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentzRM} default="Go back home" onChange={ (newtext) =>  {
        setAttributes({ contentzRM: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contenthKF} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contenthKF: newtext });
      }}
    /></span></span>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="flex-shrink-0 bg-gray-50">
                    <div className="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8">
                        <nav className="flex space-x-4"> <span className="text-sm font-medium text-gray-500 hover:text-gray-600"><RichText tagName="span" value={attributes.contentdKL} default="Contact Support" onChange={ (newtext) =>  {
        setAttributes({ contentdKL: newtext });
      }}
    /></span>
 <span className="inline-block border-l border-gray-300" aria-hidden="true"/>

                            <span className="text-sm font-medium text-gray-500 hover:text-gray-600">
                                <RichText tagName="span" value={attributes.contentnHF} default="Status" onChange={ (newtext) => { setAttributes({ contentnHF: newtext }); }} /></span> <span className="inline-block border-l border-gray-300" aria-hidden="true"/>
 <span className="text-sm font-medium text-gray-500 hover:text-gray-600"><RichText tagName="span" value={attributes.contentiOp} default="Twitter" onChange={ (newtext) =>  {
        setAttributes({ contentiOp: newtext });
      }}
    /></span>

                        </nav>
                    </div>
                </footer>
            </div>
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img className="absolute inset-0 h-full w-full object-cover" src={attributes.backgroundurlBdR} alt={attributes.backgroundaltBVV}/>
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
        <div class="bg-white min-h-full flex flex-col lg:relative">
            <div class="flex-grow flex flex-col">
                <main class="flex-grow flex flex-col bg-white">
                    <div class="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
                        <div class="flex-shrink-0 pt-10 sm:pt-16"> <span class="inline-flex">
            <span class="sr-only"><RichText.Content value={attributes.contentsBU} /></span>

                            
      <img
            src={ attributes.imageurlyGX } 
            alt={ attributes.imagealtjyw } 
            class="h-12 w-auto"
          />
                            </span>
                        </div>
                        <div class="flex-shrink-0 my-auto py-16 sm:py-32">
                            <p class="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                                <RichText.Content value={attributes.contentvbf} /></p>
                             <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"><RichText.Content value={attributes.contentjVr} /></h1>

                            <p class="mt-2 text-base text-gray-500">
                                <RichText.Content value={attributes.contentijm} /></p>
                            <div class="mt-6"> <span class="text-base font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentzRM} /><span aria-hidden="true"><RichText.Content value={attributes.contenthKF} /></span></span>
                            </div>
                        </div>
                    </div>
                </main>
                <footer class="flex-shrink-0 bg-gray-50">
                    <div class="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8">
                        <nav class="flex space-x-4"> <span class="text-sm font-medium text-gray-500 hover:text-gray-600"><RichText.Content value={attributes.contentdKL} /></span>
 <span class="inline-block border-l border-gray-300" aria-hidden="true"/>

                            <span class="text-sm font-medium text-gray-500 hover:text-gray-600">
                                <RichText.Content value={attributes.contentnHF} /></span> <span class="inline-block border-l border-gray-300" aria-hidden="true"/>
 <span class="text-sm font-medium text-gray-500 hover:text-gray-600"><RichText.Content value={attributes.contentiOp} /></span>

                        </nav>
                    </div>
                </footer>
            </div>
            <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img class="absolute inset-0 h-full w-full object-cover" src={attributes.backgroundurlBdR} alt={attributes.backgroundaltBVV}/>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        