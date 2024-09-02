
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-footer', {
            title: 'with footer',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8BbwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEFB//EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDpQDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwBlQAGGA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAZUABhgNIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AGVAAYYDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICiAKIAogCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAogCiAKIAoigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AGVAAf/9k=" />),
            category: 'common',
            attributes: {
  "contentbhG": {
    "type": "string",
    "default": "Projects"
  },
  "contentWRs": {
    "type": "string",
    "default": "Workflow Inc. / Website Redesign"
  },
  "contentRxe": {
    "type": "string",
    "default": "Users"
  },
  "contentqzD": {
    "type": "string",
    "default": "Leslie Alexander"
  },
  "contentMWq": {
    "type": "string",
    "default": "Help with searching"
  },
  "contentzWk": {
    "type": "string",
    "default": "Use this tool to quickly search for users and projects across our entire platform. You can also use the search modifiers found in the footer below to limit the results to just users or projects."
  },
  "contentXWp": {
    "type": "string",
    "default": "No results found"
  },
  "contentgia": {
    "type": "string",
    "default": "We couldn’t find anything with that term. Please try again."
  },
  "contenthYN": {
    "type": "string",
    "default": "Type "
  },
  "contentgoL": {
    "type": "string",
    "default": "#"
  },
  "contentFjW": {
    "type": "string",
    "default": "for projects,"
  },
  "contentLYT": {
    "type": "string",
    "default": "to access projects,"
  },
  "contentITi": {
    "type": "string",
    "default": "&gt;"
  },
  "contenttwK": {
    "type": "string",
    "default": " for users, and "
  },
  "contentFSM": {
    "type": "string",
    "default": "?"
  },
  "contentvda": {
    "type": "string",
    "default": " for help."
  },
  "imageurlCQq": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1494790108377-be9c29b29330.jpeg'
  },
  "imagealtLpE": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgIMj": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgEGI": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgmXD": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgkYD": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\"/>"
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
            value={ attributes.svgIMj }
            onChange={ ( value ) => {
              setAttributes({ svgIMj: value });
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
            value={ attributes.svgEGI }
            onChange={ ( value ) => {
              setAttributes({ svgEGI: value });
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
            value={ attributes.svgmXD }
            onChange={ ( value ) => {
              setAttributes({ svgmXD: value });
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
            value={ attributes.svgkYD }
            onChange={ ( value ) => {
              setAttributes({ svgkYD: value });
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
            <div className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <div className="relative">
                    
      <svg
         className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIMj }}
        >
      </svg>
      
                    <input type="text" className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." role="combobox" aria-expanded="false" aria-controls="options"/>
                </div>
                <ul className="max-h-80 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2" id="options" role="listbox">
                    <li>
                         <h2 className="text-xs font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentbhG} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentbhG: newtext });
      }}
    /></h2>

                        <ul className="-mx-4 mt-2 text-sm text-gray-700">
                            <li className="group flex cursor-default select-none items-center px-4 py-2" id="option-1" role="option" tabindex="-1">
                                
      <svg
         className="h-6 w-6 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEGI }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentWRs} default="Workflow Inc. / Website Redesign" onChange={ (newtext) =>  {
        setAttributes({ contentWRs: newtext });
      }}
    /></span>

                            </li>
                        </ul>
                    </li>
                    <li>
                         <h2 className="text-xs font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentRxe} default="Users" onChange={ (newtext) =>  {
        setAttributes({ contentRxe: newtext });
      }}
    /></h2>

                        <ul className="-mx-4 mt-2 text-sm text-gray-700">
                            <li className="group flex cursor-default select-none items-center px-4 py-2" id="option-2" role="option" tabindex="-1">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlCQq: media.url,
            imagealtLpE: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlCQq } 
            alt={ attributes.imagealtLpE } 
            onClick={ open } 
            className="h-6 w-6 flex-none rounded-full"
          /> 
        )} 
      /> <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentqzD} default="Leslie Alexander" onChange={ (newtext) =>  {
        setAttributes({ contentqzD: newtext });
      }}
    /></span>

                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="py-14 px-6 text-center text-sm sm:px-14">
                    
      <svg
         className="mx-auto h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmXD }}
        >
      </svg>
      
                    <p className="mt-4 font-semibold text-gray-900">
                        <RichText tagName="span" value={attributes.contentMWq} default="Help with searching" onChange={ (newtext) => { setAttributes({ contentMWq: newtext }); }} /></p>
                    <p className="mt-2 text-gray-500">
                        <RichText tagName="span" value={attributes.contentzWk} default="Use this tool to quickly search for users and projects across our entire platform. You can also use the search modifiers found in the footer below to limit the results to just users or projects." onChange={ (newtext) => { setAttributes({ contentzWk: newtext }); }} /></p>
                </div>
                <div className="py-14 px-6 text-center text-sm sm:px-14">
                    
      <svg
         className="mx-auto h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkYD }}
        >
      </svg>
      
                    <p className="mt-4 font-semibold text-gray-900">
                        <RichText tagName="span" value={attributes.contentXWp} default="No results found" onChange={ (newtext) => { setAttributes({ contentXWp: newtext }); }} /></p>
                    <p className="mt-2 text-gray-500">
                        <RichText tagName="span" value={attributes.contentgia} default="We couldn’t find anything with that term. Please try again." onChange={ (newtext) => { setAttributes({ contentgia: newtext }); }} /></p>
                </div>
                <div className="flex flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs text-gray-700">
                    <RichText tagName="span" value={attributes.contenthYN} default="Type" onChange={ (newtext) => { setAttributes({ contenthYN: newtext }); }} /><kbd className="mx-1 flex h-5 w-5 items-center justify-center rounded border border-gray-400 bg-white font-semibold text-gray-900 sm:mx-2"><RichText tagName="span" value={attributes.contentgoL} default="#" onChange={ (newtext) =>  {
        setAttributes({ contentgoL: newtext });
      }}
    /></kbd>  <span className="sm:hidden"><RichText tagName="span" value={attributes.contentFjW} default="for projects," onChange={ (newtext) =>  {
        setAttributes({ contentFjW: newtext });
      }}
    /></span><span className="hidden sm:inline"><RichText tagName="span" value={attributes.contentLYT} default="to access projects," onChange={ (newtext) =>  {
        setAttributes({ contentLYT: newtext });
      }}
    /></span>  <kbd className="mx-1 flex h-5 w-5 items-center justify-center rounded border border-gray-400 bg-white font-semibold text-gray-900 sm:mx-2"><RichText tagName="span" value={attributes.contentITi} default="&gt;" onChange={ (newtext) =>  {
        setAttributes({ contentITi: newtext });
      }}
    /></kbd><RichText tagName="span" value={attributes.contenttwK} default="for users, and" onChange={ (newtext) =>  {
        setAttributes({ contenttwK: newtext });
      }}
    /><kbd className="mx-1 flex h-5 w-5 items-center justify-center rounded border border-gray-400 bg-white font-semibold text-gray-900 sm:mx-2"><RichText tagName="span" value={attributes.contentFSM} default="?" onChange={ (newtext) =>  {
        setAttributes({ contentFSM: newtext });
      }}
    /></kbd><RichText tagName="span" value={attributes.contentvda} default="for help." onChange={ (newtext) =>  {
        setAttributes({ contentvda: newtext });
      }}
    /></div>
  </div>
</div>
</div></div>
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
            <div class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <div class="relative">
                    
      <svg
         class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIMj }}
        >
      </svg>
      
                    <input type="text" class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." role="combobox" aria-expanded="false" aria-controls="options"/>
                </div>
                <ul class="max-h-80 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2" id="options" role="listbox">
                    <li>
                         <h2 class="text-xs font-semibold text-gray-900"><RichText.Content value={attributes.contentbhG} /></h2>

                        <ul class="-mx-4 mt-2 text-sm text-gray-700">
                            <li class="group flex cursor-default select-none items-center px-4 py-2" id="option-1" role="option" tabindex="-1">
                                
      <svg
         class="h-6 w-6 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEGI }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentWRs} /></span>

                            </li>
                        </ul>
                    </li>
                    <li>
                         <h2 class="text-xs font-semibold text-gray-900"><RichText.Content value={attributes.contentRxe} /></h2>

                        <ul class="-mx-4 mt-2 text-sm text-gray-700">
                            <li class="group flex cursor-default select-none items-center px-4 py-2" id="option-2" role="option" tabindex="-1">
                                
      <img
            src={ attributes.imageurlCQq } 
            alt={ attributes.imagealtLpE } 
            class="h-6 w-6 flex-none rounded-full"
          /> <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentqzD} /></span>

                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="py-14 px-6 text-center text-sm sm:px-14">
                    
      <svg
         class="mx-auto h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmXD }}
        >
      </svg>
      
                    <p class="mt-4 font-semibold text-gray-900">
                        <RichText.Content value={attributes.contentMWq} /></p>
                    <p class="mt-2 text-gray-500">
                        <RichText.Content value={attributes.contentzWk} /></p>
                </div>
                <div class="py-14 px-6 text-center text-sm sm:px-14">
                    
      <svg
         class="mx-auto h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkYD }}
        >
      </svg>
      
                    <p class="mt-4 font-semibold text-gray-900">
                        <RichText.Content value={attributes.contentXWp} /></p>
                    <p class="mt-2 text-gray-500">
                        <RichText.Content value={attributes.contentgia} /></p>
                </div>
                <div class="flex flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs text-gray-700">
                    <RichText.Content value={attributes.contenthYN} /><kbd class="mx-1 flex h-5 w-5 items-center justify-center rounded border border-gray-400 bg-white font-semibold text-gray-900 sm:mx-2"><RichText.Content value={attributes.contentgoL} /></kbd>  <span class="sm:hidden"><RichText.Content value={attributes.contentFjW} /></span><span class="hidden sm:inline"><RichText.Content value={attributes.contentLYT} /></span>  <kbd class="mx-1 flex h-5 w-5 items-center justify-center rounded border border-gray-400 bg-white font-semibold text-gray-900 sm:mx-2"><RichText.Content value={attributes.contentITi} /></kbd><RichText.Content value={attributes.contenttwK} /><kbd class="mx-1 flex h-5 w-5 items-center justify-center rounded border border-gray-400 bg-white font-semibold text-gray-900 sm:mx-2"><RichText.Content value={attributes.contentFSM} /></kbd><RichText.Content value={attributes.contentvda} /></div>
  </div>
</div>
</div></div>
            );
            },
        });
        