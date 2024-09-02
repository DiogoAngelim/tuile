
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-icons', {
            title: 'with icons',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8BbwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEFB//EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDpQDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwBlQAGGA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAZUABhgNIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AGVAAYYDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICiAKIAogCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAogCiAKIAoigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AGVAAf/9k=" />),
            category: 'common',
            attributes: {
  "contentEyC": {
    "type": "string",
    "default": "Recent searches"
  },
  "contentpnK": {
    "type": "string",
    "default": "Workflow Inc. / Website Redesign"
  },
  "contentJja": {
    "type": "string",
    "default": "Jump to..."
  },
  "contentcyz": {
    "type": "string",
    "default": "Quick actions"
  },
  "contentCdw": {
    "type": "string",
    "default": "Add new file..."
  },
  "contentKrS": {
    "type": "string",
    "default": "⌘"
  },
  "contenthiN": {
    "type": "string",
    "default": "N"
  },
  "contentvQh": {
    "type": "string",
    "default": "Add new folder..."
  },
  "contentoIx": {
    "type": "string",
    "default": "⌘"
  },
  "contentygy": {
    "type": "string",
    "default": "F"
  },
  "contentKvS": {
    "type": "string",
    "default": "Add hashtag..."
  },
  "contentxAO": {
    "type": "string",
    "default": "⌘"
  },
  "contentUbo": {
    "type": "string",
    "default": "H"
  },
  "contentTdu": {
    "type": "string",
    "default": "Add label..."
  },
  "contentcDV": {
    "type": "string",
    "default": "⌘"
  },
  "contentRAu": {
    "type": "string",
    "default": "L"
  },
  "contentgcf": {
    "type": "string",
    "default": "Workflow Inc. / Website Redesign"
  },
  "contentKPJ": {
    "type": "string",
    "default": "Jump to..."
  },
  "contentSlQ": {
    "type": "string",
    "default": "We couldn't find any projects with that term. Please try again."
  },
  "svgEsa": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgDJJ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgUXS": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z\"/>"
  },
  "svgmKz": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z\"/>"
  },
  "svgYeS": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 20l4-16m2 16l4-16M6 9h14M4 15h14\"/>"
  },
  "svgANk": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z\"/>"
  },
  "svgLmF": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgeHo": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
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
            value={ attributes.svgEsa }
            onChange={ ( value ) => {
              setAttributes({ svgEsa: value });
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
            value={ attributes.svgDJJ }
            onChange={ ( value ) => {
              setAttributes({ svgDJJ: value });
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
            value={ attributes.svgUXS }
            onChange={ ( value ) => {
              setAttributes({ svgUXS: value });
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
            value={ attributes.svgmKz }
            onChange={ ( value ) => {
              setAttributes({ svgmKz: value });
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
            value={ attributes.svgYeS }
            onChange={ ( value ) => {
              setAttributes({ svgYeS: value });
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
            value={ attributes.svgANk }
            onChange={ ( value ) => {
              setAttributes({ svgANk: value });
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
            value={ attributes.svgLmF }
            onChange={ ( value ) => {
              setAttributes({ svgLmF: value });
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
            value={ attributes.svgeHo }
            onChange={ ( value ) => {
              setAttributes({ svgeHo: value });
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
            <div className="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <div className="relative">
                    
      <svg
         className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEsa }}
        >
      </svg>
      
                    <input type="text" className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..."/>
                </div>
                <ul className="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto">
                    <li className="p-2">
                         <h2 className="mt-4 mb-2 px-3 text-xs font-semibold text-gray-500"><RichText tagName="span" value={attributes.contentEyC} default="Recent searches" onChange={ (newtext) =>  {
        setAttributes({ contentEyC: newtext });
      }}
    /></h2>

                        <ul className="text-sm text-gray-700">
                            <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         className="h-6 w-6 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDJJ }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentpnK} default="Workflow Inc. / Website Redesign" onChange={ (newtext) =>  {
        setAttributes({ contentpnK: newtext });
      }}
    /></span>
 <span className="ml-3 hidden flex-none text-indigo-100"><RichText tagName="span" value={attributes.contentJja} default="Jump to..." onChange={ (newtext) =>  {
        setAttributes({ contentJja: newtext });
      }}
    /></span>

                            </li>
                        </ul>
                    </li>
                    <li className="p-2">
                         <h2 className="sr-only"><RichText tagName="span" value={attributes.contentcyz} default="Quick actions" onChange={ (newtext) =>  {
        setAttributes({ contentcyz: newtext });
      }}
    /></h2>

                        <ul className="text-sm text-gray-700">
                            <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         className="h-6 w-6 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUXS }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentCdw} default="Add new file..." onChange={ (newtext) =>  {
        setAttributes({ contentCdw: newtext });
      }}
    /></span>
 <span className="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd className="font-sans"><RichText tagName="span" value={attributes.contentKrS} default="⌘" onChange={ (newtext) =>  {
        setAttributes({ contentKrS: newtext });
      }}
    /></kbd><kbd className="font-sans"><RichText tagName="span" value={attributes.contenthiN} default="N" onChange={ (newtext) =>  {
        setAttributes({ contenthiN: newtext });
      }}
    /></kbd></span>

                            </li>
                            <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         className="h-6 w-6 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmKz }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentvQh} default="Add new folder..." onChange={ (newtext) =>  {
        setAttributes({ contentvQh: newtext });
      }}
    /></span>
 <span className="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd className="font-sans"><RichText tagName="span" value={attributes.contentoIx} default="⌘" onChange={ (newtext) =>  {
        setAttributes({ contentoIx: newtext });
      }}
    /></kbd><kbd className="font-sans"><RichText tagName="span" value={attributes.contentygy} default="F" onChange={ (newtext) =>  {
        setAttributes({ contentygy: newtext });
      }}
    /></kbd></span>

                            </li>
                            <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         className="h-6 w-6 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYeS }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentKvS} default="Add hashtag..." onChange={ (newtext) =>  {
        setAttributes({ contentKvS: newtext });
      }}
    /></span>
 <span className="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd className="font-sans"><RichText tagName="span" value={attributes.contentxAO} default="⌘" onChange={ (newtext) =>  {
        setAttributes({ contentxAO: newtext });
      }}
    /></kbd><kbd className="font-sans"><RichText tagName="span" value={attributes.contentUbo} default="H" onChange={ (newtext) =>  {
        setAttributes({ contentUbo: newtext });
      }}
    /></kbd></span>

                            </li>
                            <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         className="h-6 w-6 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgANk }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentTdu} default="Add label..." onChange={ (newtext) =>  {
        setAttributes({ contentTdu: newtext });
      }}
    /></span>
 <span className="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd className="font-sans"><RichText tagName="span" value={attributes.contentcDV} default="⌘" onChange={ (newtext) =>  {
        setAttributes({ contentcDV: newtext });
      }}
    /></kbd><kbd className="font-sans"><RichText tagName="span" value={attributes.contentRAu} default="L" onChange={ (newtext) =>  {
        setAttributes({ contentRAu: newtext });
      }}
    /></kbd></span>

                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="max-h-96 overflow-y-auto p-2 text-sm text-gray-700">
                    <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                        
      <svg
         className="h-6 w-6 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLmF }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentgcf} default="Workflow Inc. / Website Redesign" onChange={ (newtext) =>  {
        setAttributes({ contentgcf: newtext });
      }}
    /></span>
 <span className="ml-3 hidden flex-none text-indigo-100"><RichText tagName="span" value={attributes.contentKPJ} default="Jump to..." onChange={ (newtext) =>  {
        setAttributes({ contentKPJ: newtext });
      }}
    /></span>

                    </li>
                </ul>
                <div className="py-14 px-6 text-center sm:px-14">
                    
      <svg
         className="mx-auto h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeHo }}
        >
      </svg>
      
                    <p className="mt-4 text-sm text-gray-900">
                        <RichText tagName="span" value={attributes.contentSlQ} default="We couldn't find any projects with that term. Please try again." onChange={ (newtext) => { setAttributes({ contentSlQ: newtext }); }} /></p>
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
            <div class="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <div class="relative">
                    
      <svg
         class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEsa }}
        >
      </svg>
      
                    <input type="text" class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..."/>
                </div>
                <ul class="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto">
                    <li class="p-2">
                         <h2 class="mt-4 mb-2 px-3 text-xs font-semibold text-gray-500"><RichText.Content value={attributes.contentEyC} /></h2>

                        <ul class="text-sm text-gray-700">
                            <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         class="h-6 w-6 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDJJ }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentpnK} /></span>
 <span class="ml-3 hidden flex-none text-indigo-100"><RichText.Content value={attributes.contentJja} /></span>

                            </li>
                        </ul>
                    </li>
                    <li class="p-2">
                         <h2 class="sr-only"><RichText.Content value={attributes.contentcyz} /></h2>

                        <ul class="text-sm text-gray-700">
                            <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         class="h-6 w-6 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUXS }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentCdw} /></span>
 <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans"><RichText.Content value={attributes.contentKrS} /></kbd><kbd class="font-sans"><RichText.Content value={attributes.contenthiN} /></kbd></span>

                            </li>
                            <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         class="h-6 w-6 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmKz }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentvQh} /></span>
 <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans"><RichText.Content value={attributes.contentoIx} /></kbd><kbd class="font-sans"><RichText.Content value={attributes.contentygy} /></kbd></span>

                            </li>
                            <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         class="h-6 w-6 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYeS }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentKvS} /></span>
 <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans"><RichText.Content value={attributes.contentxAO} /></kbd><kbd class="font-sans"><RichText.Content value={attributes.contentUbo} /></kbd></span>

                            </li>
                            <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         class="h-6 w-6 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgANk }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentTdu} /></span>
 <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans"><RichText.Content value={attributes.contentcDV} /></kbd><kbd class="font-sans"><RichText.Content value={attributes.contentRAu} /></kbd></span>

                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="max-h-96 overflow-y-auto p-2 text-sm text-gray-700">
                    <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                        
      <svg
         class="h-6 w-6 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLmF }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentgcf} /></span>
 <span class="ml-3 hidden flex-none text-indigo-100"><RichText.Content value={attributes.contentKPJ} /></span>

                    </li>
                </ul>
                <div class="py-14 px-6 text-center sm:px-14">
                    
      <svg
         class="mx-auto h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeHo }}
        >
      </svg>
      
                    <p class="mt-4 text-sm text-gray-900">
                        <RichText.Content value={attributes.contentSlQ} /></p>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        