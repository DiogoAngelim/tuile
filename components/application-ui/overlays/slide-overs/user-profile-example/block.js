
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/user-profile-example', {
            title: 'user profile example',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8BbwDASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAECAwUGBwT/xAAtEAEAAgICAQIFAwMFAAAAAAAAAQIDBAURBhIxExQhQVEVYYEiQlIjMnGRsf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/APswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAkEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhKIASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAFZlKtpBoAAAAAAK3vXHSb3tFa1jubTPURDHHv6WW1a49vBeb0m9YrkiZtWJ6mY+v1iJ+4P0CmLLjzY65MWSuSlva1Z7if5XAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFbWrXr1WiO56jufeVgBWt6379Not1PU9T31P4WAABSJWUrKwLCEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAISiQRKlvZeWd/YGwAD4/h1PCs3N+UZvJs+LDtU5LJ8G3x7UyRX81is/X69/aX2B5ngfE6cfynM7u/r6Wxfe3rbGG8U9VqUn2iZmPpPfft2sqV5fhPKfJOP8W8a16atd3a5PJmxY527WraaV/2Wmfx1Pf37iHcy+QeU5OTx8BpanFX5bDrfMbubJfJGtjibdVrWI/qmZj8upzfB7PJc/wADv4L4q4uNzZL5a3mYtaLV6j09R/70/Jy3A83g8lt5B47n0vjZ9eMGzr7sWil4ie62ia/XuPZeDyfl/kPK8/4Jt4p1tbUy6u9GnyWG17TPri9fT6Jj3rM+/f8ADsRH6dz+pxWxxPFYNmvDZ7zl08dqxjj1z/TTv7T33Pcd9zP5WzeCcjk8T3dK25r5eU5Dfru7OW3dccT6oma16iZ6iI+n/Lscl49t7nl2Pl8eTDGCvG5dWa2tPq9dp7ieuuuv5Ng8nwvlmXhfDvGuL0vkqbm7gvf42/m+Hgw0rafrafeZmfpEQ9X4h5TfyCd/U2q6vznH5K1y308vxMOSto7ralvx9J+n26cKvgHI6/FcDkwW43PyXE4r4r4tqk3181LTM9d9dxMd/Sevu9H4vxG/xtdrNyNONxZtm8TGHj9eMePHWI6iPV1FrT+8/wAFwd4BlQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGO1q4dzBbDmr3Wf8AuJ/Mfu4vz+38f9I+Yp8T1ej5vv8At69uv8/s7O5jz5tecevljFe0xE3mPrWPv1+7L9L1PkPkvh/6fv3/AHer/Lv8rEbauri09euDDXqtfz7zP5lsw08efDgjHsZozWrPUX66mY+3f7t0UABlX2XhnT2aQCUohIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEoBEs7+zSWd/YGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMaezSGdPZpAJShIP//Z" />),
            category: 'common',
            attributes: {
  "contentybp": {
    "type": "string",
    "default": "Profile"
  },
  "contentJbr": {
    "type": "string",
    "default": "Close panel"
  },
  "contentLuL": {
    "type": "string",
    "default": "Ashley Porter"
  },
  "contentqPL": {
    "type": "string",
    "default": "Online"
  },
  "contentUgg": {
    "type": "string",
    "default": "@ashleyporter"
  },
  "contentbYP": {
    "type": "string",
    "default": "Message"
  },
  "contenthIP": {
    "type": "string",
    "default": "Call"
  },
  "contentJoe": {
    "type": "string",
    "default": "Open options menu"
  },
  "contentMqt": {
    "type": "string",
    "default": "View profile"
  },
  "contentKfa": {
    "type": "string",
    "default": "Copy profile link"
  },
  "contentyyP": {
    "type": "string",
    "default": "Bio"
  },
  "contentYnH": {
    "type": "string",
    "default": "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu."
  },
  "contentgVl": {
    "type": "string",
    "default": "Location"
  },
  "contentNsj": {
    "type": "string",
    "default": "New York, NY, USA"
  },
  "contentGGD": {
    "type": "string",
    "default": "Website"
  },
  "contentHRg": {
    "type": "string",
    "default": "ashleyporter.com"
  },
  "contentALT": {
    "type": "string",
    "default": "Birthday"
  },
  "contentRJQ": {
    "type": "string",
    "default": " June 23, 1988 "
  },
  "backgroundurleEk": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1501031170107-cfd33f0cbdcc.jpeg'
  },
  "backgroundaltpEv": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgvMF": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgFKC": {
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
      

























































































































































































































































































































































































































































































































































































































































































































































































































              
      <PanelBody title="Background Image">
        <PanelRow>
          <div>
            <MediaUpload
              onSelect={ (media) => { 
                setAttributes({ 
                  backgroundurleEk: media.url,
                   backgroundaltpEv: media.alt
                }); 
              } }
              type="image"
              value={ attributes.backgroundurleEk }
              render={({ open }) => (
                  <button onClick={ open }>Select Image</button>
              )}
            />
            {attributes.backgroundurleEk && (
                <img src={attributes.backgroundurleEk} alt={attributes.backgroundaltpEv} />
            )}
          </div>
        </PanelRow>
      </PanelBody>
      

    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgvMF }
            onChange={ ( value ) => {
              setAttributes({ svgvMF: value });
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
            value={ attributes.svgFKC }
            onChange={ ( value ) => {
              setAttributes({ svgFKC: value });
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
                <div className="absolute inset-0" aria-hidden="true"/>
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                    <div className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div className="px-4 py-6 sm:px-6">
                                <div className="flex items-start justify-between">
                                     <h2 id="slide-over-heading" className="text-lg font-medium text-gray-900"><RichText tagName="span" value={attributes.contentybp} default="Profile" onChange={ (newtext) =>  {
        setAttributes({ contentybp: newtext });
      }}
    /></h2>

                                    <div className="ml-3 flex h-7 items-center">
                                        <button type="button" className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentJbr} default="Close panel" onChange={ (newtext) =>  {
        setAttributes({ contentJbr: newtext });
      }}
    /></span>

                                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvMF }}
        >
      </svg>
      
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="pb-1 sm:pb-6">
                                    <div>
                                        <div className="relative h-40 sm:h-56">
                                            <img className="absolute h-full w-full object-cover" src={attributes.backgroundurleEk} alt={attributes.backgroundaltpEv}/>
                                        </div>
                                        <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                                            <div className="sm:flex-1">
                                                <div>
                                                    <div className="flex items-center">
                                                         <h3 className="text-xl font-bold text-gray-900 sm:text-2xl"><RichText tagName="span" value={attributes.contentLuL} default="Ashley Porter" onChange={ (newtext) =>  {
        setAttributes({ contentLuL: newtext });
      }}
    /></h3>
 <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                          <span className="sr-only"><RichText tagName="span" value={attributes.contentqPL} default="Online" onChange={ (newtext) =>  {
        setAttributes({ contentqPL: newtext });
      }}
    /></span>
</span>
                                                    </div>
                                                    <p className="text-sm text-gray-500">
                                                        <RichText tagName="span" value={attributes.contentUgg} default="@ashleyporter" onChange={ (newtext) => { setAttributes({ contentUgg: newtext }); }} /></p>
                                                </div>
                                                <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                                                    <button type="button" className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1">
                                                        <RichText tagName="span" value={attributes.contentbYP} default="Message" onChange={ (newtext) => { setAttributes({ contentbYP: newtext }); }} /></button>
                                                    <button type="button" className="inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                        <RichText tagName="span" value={attributes.contenthIP} default="Call" onChange={ (newtext) => { setAttributes({ contenthIP: newtext }); }} /></button> <span className="ml-3 inline-flex sm:ml-0">
                        <div className="relative inline-block text-left">
                          <button type="button" className="inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="options-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span className="sr-only"><RichText tagName="span" value={attributes.contentJoe} default="Open options menu" onChange={ (newtext) =>  {
        setAttributes({ contentJoe: newtext });
      }}
    /></span>

                                                    
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFKC }}
        >
      </svg>
      
                                                    </button>
                                                    <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-button" tabindex="-1">
                                                        <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-0"><RichText tagName="span" value={attributes.contentMqt} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentMqt: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-1"><RichText tagName="span" value={attributes.contentKfa} default="Copy profile link" onChange={ (newtext) =>  {
        setAttributes({ contentKfa: newtext });
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
                            </div>
                            <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                                <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                                    <div> <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"><RichText tagName="span" value={attributes.contentyyP} default="Bio" onChange={ (newtext) =>  {
        setAttributes({ contentyyP: newtext });
      }}
    /></dt>

                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                            <p>
                                                <RichText tagName="span" value={attributes.contentYnH} default="Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu." onChange={ (newtext) => { setAttributes({ contentYnH: newtext }); }} /></p>
                                        </dd>
                                    </div>
                                    <div> <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"><RichText tagName="span" value={attributes.contentgVl} default="Location" onChange={ (newtext) =>  {
        setAttributes({ contentgVl: newtext });
      }}
    /></dt>

                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                            <RichText tagName="span" value={attributes.contentNsj} default="New York, NY, USA" onChange={ (newtext) => { setAttributes({ contentNsj: newtext }); }} /></dd>
                                    </div>
                                    <div> <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"><RichText tagName="span" value={attributes.contentGGD} default="Website" onChange={ (newtext) =>  {
        setAttributes({ contentGGD: newtext });
      }}
    /></dt>

                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                            <RichText tagName="span" value={attributes.contentHRg} default="ashleyporter.com" onChange={ (newtext) => { setAttributes({ contentHRg: newtext }); }} /></dd>
                                    </div>
                                    <div> <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"><RichText tagName="span" value={attributes.contentALT} default="Birthday" onChange={ (newtext) =>  {
        setAttributes({ contentALT: newtext });
      }}
    /></dt>

                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                            <time datetime="1988-06-23">
                                                <RichText tagName="span" value={attributes.contentRJQ} default="June 23, 1988" onChange={ (newtext) => { setAttributes({ contentRJQ: newtext }); }} /></time>
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
        <div class="fixed inset-0 overflow-hidden" role="dialog" aria-modal="true">
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute inset-0" aria-hidden="true"/>
                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                    <div class="pointer-events-auto w-screen max-w-md">
                        <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div class="px-4 py-6 sm:px-6">
                                <div class="flex items-start justify-between">
                                     <h2 id="slide-over-heading" class="text-lg font-medium text-gray-900"><RichText.Content value={attributes.contentybp} /></h2>

                                    <div class="ml-3 flex h-7 items-center">
                                        <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentJbr} /></span>

                                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvMF }}
        >
      </svg>
      
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="pb-1 sm:pb-6">
                                    <div>
                                        <div class="relative h-40 sm:h-56">
                                            <img class="absolute h-full w-full object-cover" src={attributes.backgroundurleEk} alt={attributes.backgroundaltpEv}/>
                                        </div>
                                        <div class="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                                            <div class="sm:flex-1">
                                                <div>
                                                    <div class="flex items-center">
                                                         <h3 class="text-xl font-bold text-gray-900 sm:text-2xl"><RichText.Content value={attributes.contentLuL} /></h3>
 <span class="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                          <span class="sr-only"><RichText.Content value={attributes.contentqPL} /></span>
</span>
                                                    </div>
                                                    <p class="text-sm text-gray-500">
                                                        <RichText.Content value={attributes.contentUgg} /></p>
                                                </div>
                                                <div class="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                                                    <button type="button" class="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1">
                                                        <RichText.Content value={attributes.contentbYP} /></button>
                                                    <button type="button" class="inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                        <RichText.Content value={attributes.contenthIP} /></button> <span class="ml-3 inline-flex sm:ml-0">
                        <div class="relative inline-block text-left">
                          <button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="options-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span class="sr-only"><RichText.Content value={attributes.contentJoe} /></span>

                                                    
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFKC }}
        >
      </svg>
      
                                                    </button>
                                                    <div class="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-button" tabindex="-1">
                                                        <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-0"><RichText.Content value={attributes.contentMqt} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-1"><RichText.Content value={attributes.contentKfa} /></span>

                                                        </div>
                                                    </div>
                                                </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                                <dl class="space-y-8 px-4 sm:space-y-6 sm:px-6">
                                    <div> <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"><RichText.Content value={attributes.contentyyP} /></dt>

                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                                            <p>
                                                <RichText.Content value={attributes.contentYnH} /></p>
                                        </dd>
                                    </div>
                                    <div> <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"><RichText.Content value={attributes.contentgVl} /></dt>

                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                                            <RichText.Content value={attributes.contentNsj} /></dd>
                                    </div>
                                    <div> <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"><RichText.Content value={attributes.contentGGD} /></dt>

                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                                            <RichText.Content value={attributes.contentHRg} /></dd>
                                    </div>
                                    <div> <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"><RichText.Content value={attributes.contentALT} /></dt>

                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                                            <time datetime="1988-06-23">
                                                <RichText.Content value={attributes.contentRJQ} /></time>
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
        