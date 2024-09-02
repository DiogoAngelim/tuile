
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/dark-with-icons', {
            title: 'dark with icons',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8BbwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEFB//EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDpQDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwBlQAGGA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAZUABhgNIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AGVAAYYDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICiAKIAogCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAogCiAKIAoigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AGVAAf/9k=" />),
            category: 'common',
            attributes: {
  "contentAzJ": {
    "type": "string",
    "default": "Recent searches"
  },
  "contentJvx": {
    "type": "string",
    "default": "Workflow Inc. / Website Redesign"
  },
  "contentxWY": {
    "type": "string",
    "default": "Jump to..."
  },
  "contentlzM": {
    "type": "string",
    "default": "Quick actions"
  },
  "contentdDP": {
    "type": "string",
    "default": "Add new file..."
  },
  "contentTOF": {
    "type": "string",
    "default": "⌘"
  },
  "contenthnD": {
    "type": "string",
    "default": "N"
  },
  "contentZMS": {
    "type": "string",
    "default": "Add new folder..."
  },
  "contentzap": {
    "type": "string",
    "default": "⌘"
  },
  "contentuEL": {
    "type": "string",
    "default": "F"
  },
  "contentIxr": {
    "type": "string",
    "default": "Add hashtag..."
  },
  "contentduk": {
    "type": "string",
    "default": "⌘"
  },
  "contentEvq": {
    "type": "string",
    "default": "H"
  },
  "contentHnH": {
    "type": "string",
    "default": "Add label..."
  },
  "contentSFv": {
    "type": "string",
    "default": "⌘"
  },
  "contentUxm": {
    "type": "string",
    "default": "L"
  },
  "contentpDj": {
    "type": "string",
    "default": "Workflow Inc. / Website Redesign"
  },
  "contentktn": {
    "type": "string",
    "default": "Jump to..."
  },
  "contentibg": {
    "type": "string",
    "default": "We couldn't find any projects with that term. Please try again."
  },
  "svgZXB": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"/>"
  },
  "svghJV": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svggEt": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z\"/>"
  },
  "svgvKy": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z\"/>"
  },
  "svgHGu": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 20l4-16m2 16l4-16M6 9h14M4 15h14\"/>"
  },
  "svgGZv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z\"/>"
  },
  "svgYhH": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgMJX": {
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
            value={ attributes.svgZXB }
            onChange={ ( value ) => {
              setAttributes({ svgZXB: value });
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
            value={ attributes.svghJV }
            onChange={ ( value ) => {
              setAttributes({ svghJV: value });
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
            value={ attributes.svggEt }
            onChange={ ( value ) => {
              setAttributes({ svggEt: value });
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
            value={ attributes.svgvKy }
            onChange={ ( value ) => {
              setAttributes({ svgvKy: value });
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
            value={ attributes.svgHGu }
            onChange={ ( value ) => {
              setAttributes({ svgHGu: value });
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
            value={ attributes.svgGZv }
            onChange={ ( value ) => {
              setAttributes({ svgGZv: value });
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
            value={ attributes.svgYhH }
            onChange={ ( value ) => {
              setAttributes({ svgYhH: value });
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
            value={ attributes.svgMJX }
            onChange={ ( value ) => {
              setAttributes({ svgMJX: value });
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
            <div className="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-20 overflow-hidden rounded-xl bg-gray-900 shadow-2xl transition-all">
                <div className="relative">
                    
      <svg
         className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZXB }}
        >
      </svg>
      
                    <input type="text" className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-white placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Search..."/>
                </div>
                <ul className="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-20 overflow-y-auto">
                    <li className="p-2">
                         <h2 className="mt-4 mb-2 px-3 text-xs font-semibold text-gray-200"><RichText tagName="span" value={attributes.contentAzJ} default="Recent searches" onChange={ (newtext) =>  {
        setAttributes({ contentAzJ: newtext });
      }}
    /></h2>

                        <ul className="text-sm text-gray-400">
                            <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         className="h-6 w-6 flex-none text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghJV }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentJvx} default="Workflow Inc. / Website Redesign" onChange={ (newtext) =>  {
        setAttributes({ contentJvx: newtext });
      }}
    /></span>
 <span className="ml-3 hidden flex-none text-gray-400"><RichText tagName="span" value={attributes.contentxWY} default="Jump to..." onChange={ (newtext) =>  {
        setAttributes({ contentxWY: newtext });
      }}
    /></span>

                            </li>
                        </ul>
                    </li>
                    <li className="p-2">
                         <h2 className="sr-only"><RichText tagName="span" value={attributes.contentlzM} default="Quick actions" onChange={ (newtext) =>  {
        setAttributes({ contentlzM: newtext });
      }}
    /></h2>

                        <ul className="text-sm text-gray-400">
                            <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         className="h-6 w-6 flex-none text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggEt }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentdDP} default="Add new file..." onChange={ (newtext) =>  {
        setAttributes({ contentdDP: newtext });
      }}
    /></span>
 <span className="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd className="font-sans"><RichText tagName="span" value={attributes.contentTOF} default="⌘" onChange={ (newtext) =>  {
        setAttributes({ contentTOF: newtext });
      }}
    /></kbd><kbd className="font-sans"><RichText tagName="span" value={attributes.contenthnD} default="N" onChange={ (newtext) =>  {
        setAttributes({ contenthnD: newtext });
      }}
    /></kbd></span>

                            </li>
                            <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         className="h-6 w-6 flex-none text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvKy }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentZMS} default="Add new folder..." onChange={ (newtext) =>  {
        setAttributes({ contentZMS: newtext });
      }}
    /></span>
 <span className="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd className="font-sans"><RichText tagName="span" value={attributes.contentzap} default="⌘" onChange={ (newtext) =>  {
        setAttributes({ contentzap: newtext });
      }}
    /></kbd><kbd className="font-sans"><RichText tagName="span" value={attributes.contentuEL} default="F" onChange={ (newtext) =>  {
        setAttributes({ contentuEL: newtext });
      }}
    /></kbd></span>

                            </li>
                            <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         className="h-6 w-6 flex-none text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHGu }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentIxr} default="Add hashtag..." onChange={ (newtext) =>  {
        setAttributes({ contentIxr: newtext });
      }}
    /></span>
 <span className="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd className="font-sans"><RichText tagName="span" value={attributes.contentduk} default="⌘" onChange={ (newtext) =>  {
        setAttributes({ contentduk: newtext });
      }}
    /></kbd><kbd className="font-sans"><RichText tagName="span" value={attributes.contentEvq} default="H" onChange={ (newtext) =>  {
        setAttributes({ contentEvq: newtext });
      }}
    /></kbd></span>

                            </li>
                            <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         className="h-6 w-6 flex-none text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGZv }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentHnH} default="Add label..." onChange={ (newtext) =>  {
        setAttributes({ contentHnH: newtext });
      }}
    /></span>
 <span className="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd className="font-sans"><RichText tagName="span" value={attributes.contentSFv} default="⌘" onChange={ (newtext) =>  {
        setAttributes({ contentSFv: newtext });
      }}
    /></kbd><kbd className="font-sans"><RichText tagName="span" value={attributes.contentUxm} default="L" onChange={ (newtext) =>  {
        setAttributes({ contentUxm: newtext });
      }}
    /></kbd></span>

                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="max-h-96 overflow-y-auto p-2 text-sm text-gray-400">
                    <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                        
      <svg
         className="h-6 w-6 flex-none text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYhH }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentpDj} default="Workflow Inc. / Website Redesign" onChange={ (newtext) =>  {
        setAttributes({ contentpDj: newtext });
      }}
    /></span>
 <span className="ml-3 hidden flex-none text-gray-400"><RichText tagName="span" value={attributes.contentktn} default="Jump to..." onChange={ (newtext) =>  {
        setAttributes({ contentktn: newtext });
      }}
    /></span>

                    </li>
                </ul>
                <div className="py-14 px-6 text-center sm:px-14">
                    
      <svg
         className="mx-auto h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMJX }}
        >
      </svg>
      
                    <p className="mt-4 text-sm text-gray-200">
                        <RichText tagName="span" value={attributes.contentibg} default="We couldn't find any projects with that term. Please try again." onChange={ (newtext) => { setAttributes({ contentibg: newtext }); }} /></p>
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
            <div class="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-20 overflow-hidden rounded-xl bg-gray-900 shadow-2xl transition-all">
                <div class="relative">
                    
      <svg
         class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZXB }}
        >
      </svg>
      
                    <input type="text" class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-white placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Search..."/>
                </div>
                <ul class="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-20 overflow-y-auto">
                    <li class="p-2">
                         <h2 class="mt-4 mb-2 px-3 text-xs font-semibold text-gray-200"><RichText.Content value={attributes.contentAzJ} /></h2>

                        <ul class="text-sm text-gray-400">
                            <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         class="h-6 w-6 flex-none text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghJV }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentJvx} /></span>
 <span class="ml-3 hidden flex-none text-gray-400"><RichText.Content value={attributes.contentxWY} /></span>

                            </li>
                        </ul>
                    </li>
                    <li class="p-2">
                         <h2 class="sr-only"><RichText.Content value={attributes.contentlzM} /></h2>

                        <ul class="text-sm text-gray-400">
                            <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         class="h-6 w-6 flex-none text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggEt }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentdDP} /></span>
 <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans"><RichText.Content value={attributes.contentTOF} /></kbd><kbd class="font-sans"><RichText.Content value={attributes.contenthnD} /></kbd></span>

                            </li>
                            <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         class="h-6 w-6 flex-none text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvKy }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentZMS} /></span>
 <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans"><RichText.Content value={attributes.contentzap} /></kbd><kbd class="font-sans"><RichText.Content value={attributes.contentuEL} /></kbd></span>

                            </li>
                            <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         class="h-6 w-6 flex-none text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHGu }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentIxr} /></span>
 <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans"><RichText.Content value={attributes.contentduk} /></kbd><kbd class="font-sans"><RichText.Content value={attributes.contentEvq} /></kbd></span>

                            </li>
                            <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         class="h-6 w-6 flex-none text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGZv }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentHnH} /></span>
 <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans"><RichText.Content value={attributes.contentSFv} /></kbd><kbd class="font-sans"><RichText.Content value={attributes.contentUxm} /></kbd></span>

                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="max-h-96 overflow-y-auto p-2 text-sm text-gray-400">
                    <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                        
      <svg
         class="h-6 w-6 flex-none text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYhH }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentpDj} /></span>
 <span class="ml-3 hidden flex-none text-gray-400"><RichText.Content value={attributes.contentktn} /></span>

                    </li>
                </ul>
                <div class="py-14 px-6 text-center sm:px-14">
                    
      <svg
         class="mx-auto h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMJX }}
        >
      </svg>
      
                    <p class="mt-4 text-sm text-gray-200">
                        <RichText.Content value={attributes.contentibg} /></p>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        