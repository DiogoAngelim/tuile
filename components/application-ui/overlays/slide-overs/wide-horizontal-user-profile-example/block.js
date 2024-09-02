
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/wide-horizontal-user-profile-example', {
            title: 'wide horizontal user profile example',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentflS": {
    "type": "string",
    "default": "Profile"
  },
  "contentyzd": {
    "type": "string",
    "default": "Close panel"
  },
  "contentQuL": {
    "type": "string",
    "default": "Ashley Porter"
  },
  "contentSvx": {
    "type": "string",
    "default": "Online"
  },
  "contentvdw": {
    "type": "string",
    "default": "@ashleyporter"
  },
  "contentRot": {
    "type": "string",
    "default": "Message"
  },
  "contentHdK": {
    "type": "string",
    "default": "Call"
  },
  "contentDbO": {
    "type": "string",
    "default": "Open options menu"
  },
  "contentbTg": {
    "type": "string",
    "default": "View profile"
  },
  "contentKiO": {
    "type": "string",
    "default": "Copy profile link"
  },
  "contentxhh": {
    "type": "string",
    "default": "Bio"
  },
  "contentokl": {
    "type": "string",
    "default": "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu."
  },
  "contentRcI": {
    "type": "string",
    "default": "Location"
  },
  "contentePF": {
    "type": "string",
    "default": "New York, NY, USA"
  },
  "contentXcr": {
    "type": "string",
    "default": "Website"
  },
  "contentysl": {
    "type": "string",
    "default": "ashleyporter.com"
  },
  "contentFwM": {
    "type": "string",
    "default": "Birthday"
  },
  "contentlWa": {
    "type": "string",
    "default": " June 23, 1982 "
  },
  "imageurllpM": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80'
  },
  "imagealthks": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgJmA": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgvKU": {
    "type": "string",
    "default": "<path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"/>"
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
            value={ attributes.svgJmA }
            onChange={ ( value ) => {
              setAttributes({ svgJmA: value });
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
            value={ attributes.svgvKU }
            onChange={ ( value ) => {
              setAttributes({ svgvKU: value });
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
        <div className="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0" aria-hidden="true"/>
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                    <div className="pointer-events-auto w-screen max-w-2xl">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div className="px-4 py-6 sm:px-6">
                                <div className="flex items-start justify-between">
                                     <h2 className="text-lg font-medium text-gray-900" id="slide-over-title"><RichText tagName="span" value={attributes.contentflS} default="Profile" onChange={ (newtext) =>  {
        setAttributes({ contentflS: newtext });
      }}
    /></h2>

                                    <div className="ml-3 flex h-7 items-center">
                                        <button type="button" className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentyzd} default="Close panel" onChange={ (newtext) =>  {
        setAttributes({ contentyzd: newtext });
      }}
    /></span>

                                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJmA }}
        >
      </svg>
      
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="pb-6">
                                    <div className="h-24 bg-indigo-700 sm:h-20 lg:h-28"/>
                                    <div className="lg:-mt-15 -mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6">
                                        <div>
                                            <div className="-m-1 flex">
                                                <div className="inline-flex overflow-hidden rounded-lg border-4 border-white">
                                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurllpM: media.url,
            imagealthks: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurllpM } 
            alt={ attributes.imagealthks } 
            onClick={ open } 
            className="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
          /> 
        )} 
      />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 sm:ml-6 sm:flex-1">
                                            <div>
                                                <div className="flex items-center">
                                                     <h3 className="text-xl font-bold text-gray-900 sm:text-2xl"><RichText tagName="span" value={attributes.contentQuL} default="Ashley Porter" onChange={ (newtext) =>  {
        setAttributes({ contentQuL: newtext });
      }}
    /></h3>
 <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                        <span className="sr-only"><RichText tagName="span" value={attributes.contentSvx} default="Online" onChange={ (newtext) =>  {
        setAttributes({ contentSvx: newtext });
      }}
    /></span>
</span>
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    <RichText tagName="span" value={attributes.contentvdw} default="@ashleyporter" onChange={ (newtext) => { setAttributes({ contentvdw: newtext }); }} /></p>
                                            </div>
                                            <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                                                <button type="button" className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1">
                                                    <RichText tagName="span" value={attributes.contentRot} default="Message" onChange={ (newtext) => { setAttributes({ contentRot: newtext }); }} /></button>
                                                <button type="button" className="inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                    <RichText tagName="span" value={attributes.contentHdK} default="Call" onChange={ (newtext) => { setAttributes({ contentHdK: newtext }); }} /></button> <span className="ml-3 inline-flex sm:ml-0">
                      <div className="relative inline-block text-left">
                        <button type="button" className="inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="options-menu-button" aria-expanded="false" aria-haspopup="true">
                          <span className="sr-only"><RichText tagName="span" value={attributes.contentDbO} default="Open options menu" onChange={ (newtext) =>  {
        setAttributes({ contentDbO: newtext });
      }}
    /></span>

                                                
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvKU }}
        >
      </svg>
      
                                                </button>
                                                <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-button" tabindex="-1">
                                                    <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-0"><RichText tagName="span" value={attributes.contentbTg} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentbTg: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-1"><RichText tagName="span" value={attributes.contentKiO} default="Copy profile link" onChange={ (newtext) =>  {
        setAttributes({ contentKiO: newtext });
      }}
    /></span>

                                                    </div>
                                                </div>
                                            </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-5 sm:px-0 sm:py-0">
                                <dl className="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                                    <div className="sm:flex sm:px-6 sm:py-5"> <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"><RichText tagName="span" value={attributes.contentxhh} default="Bio" onChange={ (newtext) =>  {
        setAttributes({ contentxhh: newtext });
      }}
    /></dt>

                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                                            <p>
                                                <RichText tagName="span" value={attributes.contentokl} default="Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu." onChange={ (newtext) => { setAttributes({ contentokl: newtext }); }} /></p>
                                        </dd>
                                    </div>
                                    <div className="sm:flex sm:px-6 sm:py-5"> <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"><RichText tagName="span" value={attributes.contentRcI} default="Location" onChange={ (newtext) =>  {
        setAttributes({ contentRcI: newtext });
      }}
    /></dt>

                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                                            <RichText tagName="span" value={attributes.contentePF} default="New York, NY, USA" onChange={ (newtext) => { setAttributes({ contentePF: newtext }); }} /></dd>
                                    </div>
                                    <div className="sm:flex sm:px-6 sm:py-5"> <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"><RichText tagName="span" value={attributes.contentXcr} default="Website" onChange={ (newtext) =>  {
        setAttributes({ contentXcr: newtext });
      }}
    /></dt>

                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                                            <RichText tagName="span" value={attributes.contentysl} default="ashleyporter.com" onChange={ (newtext) => { setAttributes({ contentysl: newtext }); }} /></dd>
                                    </div>
                                    <div className="sm:flex sm:px-6 sm:py-5"> <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"><RichText tagName="span" value={attributes.contentFwM} default="Birthday" onChange={ (newtext) =>  {
        setAttributes({ contentFwM: newtext });
      }}
    /></dt>

                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                                            <time datetime="1982-06-23">
                                                <RichText tagName="span" value={attributes.contentlWa} default="June 23, 1982" onChange={ (newtext) => { setAttributes({ contentlWa: newtext }); }} /></time>
                                        </dd>
                                    </div>
                                </dl>
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
        <div class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute inset-0" aria-hidden="true"/>
                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                    <div class="pointer-events-auto w-screen max-w-2xl">
                        <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div class="px-4 py-6 sm:px-6">
                                <div class="flex items-start justify-between">
                                     <h2 class="text-lg font-medium text-gray-900" id="slide-over-title"><RichText.Content value={attributes.contentflS} /></h2>

                                    <div class="ml-3 flex h-7 items-center">
                                        <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentyzd} /></span>

                                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJmA }}
        >
      </svg>
      
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="divide-y divide-gray-200">
                                <div class="pb-6">
                                    <div class="h-24 bg-indigo-700 sm:h-20 lg:h-28"/>
                                    <div class="lg:-mt-15 -mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6">
                                        <div>
                                            <div class="-m-1 flex">
                                                <div class="inline-flex overflow-hidden rounded-lg border-4 border-white">
                                                    
      <img
            src={ attributes.imageurllpM } 
            alt={ attributes.imagealthks } 
            class="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
          />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-6 sm:ml-6 sm:flex-1">
                                            <div>
                                                <div class="flex items-center">
                                                     <h3 class="text-xl font-bold text-gray-900 sm:text-2xl"><RichText.Content value={attributes.contentQuL} /></h3>
 <span class="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                        <span class="sr-only"><RichText.Content value={attributes.contentSvx} /></span>
</span>
                                                </div>
                                                <p class="text-sm text-gray-500">
                                                    <RichText.Content value={attributes.contentvdw} /></p>
                                            </div>
                                            <div class="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                                                <button type="button" class="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1">
                                                    <RichText.Content value={attributes.contentRot} /></button>
                                                <button type="button" class="inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                    <RichText.Content value={attributes.contentHdK} /></button> <span class="ml-3 inline-flex sm:ml-0">
                      <div class="relative inline-block text-left">
                        <button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="options-menu-button" aria-expanded="false" aria-haspopup="true">
                          <span class="sr-only"><RichText.Content value={attributes.contentDbO} /></span>

                                                
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvKU }}
        >
      </svg>
      
                                                </button>
                                                <div class="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-button" tabindex="-1">
                                                    <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-0"><RichText.Content value={attributes.contentbTg} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-1"><RichText.Content value={attributes.contentKiO} /></span>

                                                    </div>
                                                </div>
                                            </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-5 sm:px-0 sm:py-0">
                                <dl class="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                                    <div class="sm:flex sm:px-6 sm:py-5"> <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"><RichText.Content value={attributes.contentxhh} /></dt>

                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                                            <p>
                                                <RichText.Content value={attributes.contentokl} /></p>
                                        </dd>
                                    </div>
                                    <div class="sm:flex sm:px-6 sm:py-5"> <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"><RichText.Content value={attributes.contentRcI} /></dt>

                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                                            <RichText.Content value={attributes.contentePF} /></dd>
                                    </div>
                                    <div class="sm:flex sm:px-6 sm:py-5"> <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"><RichText.Content value={attributes.contentXcr} /></dt>

                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                                            <RichText.Content value={attributes.contentysl} /></dd>
                                    </div>
                                    <div class="sm:flex sm:px-6 sm:py-5"> <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"><RichText.Content value={attributes.contentFwM} /></dt>

                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                                            <time datetime="1982-06-23">
                                                <RichText.Content value={attributes.contentlWa} /></time>
                                        </dd>
                                    </div>
                                </dl>
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
        