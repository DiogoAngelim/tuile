
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/semi-transparent-with-icons', {
            title: 'semi transparent with icons',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8BbwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEFB//EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDpQDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwBlQAGGA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAZUABhgNIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AGVAAYYDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICiAKIAogCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAogCiAKIAoigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AGVAAf/9k=" />),
            category: 'common',
            attributes: {
  "contentMUF": {
    "type": "string",
    "default": "Recent searches"
  },
  "contentRcI": {
    "type": "string",
    "default": "Workflow Inc. / Website Redesign"
  },
  "contentBcr": {
    "type": "string",
    "default": "Jump to..."
  },
  "contentDUM": {
    "type": "string",
    "default": "Quick actions"
  },
  "contentxRy": {
    "type": "string",
    "default": "Add new file..."
  },
  "contentwwi": {
    "type": "string",
    "default": "⌘"
  },
  "contentkWg": {
    "type": "string",
    "default": "N"
  },
  "contentrUI": {
    "type": "string",
    "default": "Add new folder..."
  },
  "contentiyj": {
    "type": "string",
    "default": "⌘"
  },
  "contentqiV": {
    "type": "string",
    "default": "F"
  },
  "contentClA": {
    "type": "string",
    "default": "Add hashtag..."
  },
  "contentXFe": {
    "type": "string",
    "default": "⌘"
  },
  "contenttbV": {
    "type": "string",
    "default": "H"
  },
  "contentEss": {
    "type": "string",
    "default": "Add label..."
  },
  "contentZEn": {
    "type": "string",
    "default": "⌘"
  },
  "contentRlK": {
    "type": "string",
    "default": "L"
  },
  "contentMIe": {
    "type": "string",
    "default": "Workflow Inc. / Website Redesign"
  },
  "contentrtZ": {
    "type": "string",
    "default": "Jump to..."
  },
  "contentENj": {
    "type": "string",
    "default": "We couldn't find any projects with that term. Please try again."
  },
  "svgDEw": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgUGH": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgPwJ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z\"/>"
  },
  "svgxuZ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z\"/>"
  },
  "svgOuq": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 20l4-16m2 16l4-16M6 9h14M4 15h14\"/>"
  },
  "svgnFc": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z\"/>"
  },
  "svgmHI": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgyKt": {
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
            value={ attributes.svgDEw }
            onChange={ ( value ) => {
              setAttributes({ svgDEw: value });
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
            value={ attributes.svgUGH }
            onChange={ ( value ) => {
              setAttributes({ svgUGH: value });
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
            value={ attributes.svgPwJ }
            onChange={ ( value ) => {
              setAttributes({ svgPwJ: value });
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
            value={ attributes.svgxuZ }
            onChange={ ( value ) => {
              setAttributes({ svgxuZ: value });
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
            value={ attributes.svgOuq }
            onChange={ ( value ) => {
              setAttributes({ svgOuq: value });
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
            value={ attributes.svgnFc }
            onChange={ ( value ) => {
              setAttributes({ svgnFc: value });
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
            value={ attributes.svgmHI }
            onChange={ ( value ) => {
              setAttributes({ svgmHI: value });
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
            value={ attributes.svgyKt }
            onChange={ ( value ) => {
              setAttributes({ svgyKt: value });
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
            <div className="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all">
                <div className="relative">
                    
      <svg
         className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-900 text-opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDEw }}
        >
      </svg>
      
                    <input type="text" className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Search..."/>
                </div>
                <ul className="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-10 overflow-y-auto">
                    <li className="p-2">
                         <h2 className="mt-4 mb-2 px-3 text-xs font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentMUF} default="Recent searches" onChange={ (newtext) =>  {
        setAttributes({ contentMUF: newtext });
      }}
    /></h2>

                        <ul className="text-sm text-gray-700">
                            <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         className="h-6 w-6 flex-none text-gray-900 text-opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUGH }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentRcI} default="Workflow Inc. / Website Redesign" onChange={ (newtext) =>  {
        setAttributes({ contentRcI: newtext });
      }}
    /></span>
 <span className="ml-3 hidden flex-none text-gray-500"><RichText tagName="span" value={attributes.contentBcr} default="Jump to..." onChange={ (newtext) =>  {
        setAttributes({ contentBcr: newtext });
      }}
    /></span>

                            </li>
                        </ul>
                    </li>
                    <li className="p-2">
                         <h2 className="sr-only"><RichText tagName="span" value={attributes.contentDUM} default="Quick actions" onChange={ (newtext) =>  {
        setAttributes({ contentDUM: newtext });
      }}
    /></h2>

                        <ul className="text-sm text-gray-700">
                            <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         className="h-6 w-6 flex-none text-gray-900 text-opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPwJ }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentxRy} default="Add new file..." onChange={ (newtext) =>  {
        setAttributes({ contentxRy: newtext });
      }}
    /></span>
 <span className="ml-3 flex-none text-xs font-semibold text-gray-500"><kbd className="font-sans"><RichText tagName="span" value={attributes.contentwwi} default="⌘" onChange={ (newtext) =>  {
        setAttributes({ contentwwi: newtext });
      }}
    /></kbd><kbd className="font-sans"><RichText tagName="span" value={attributes.contentkWg} default="N" onChange={ (newtext) =>  {
        setAttributes({ contentkWg: newtext });
      }}
    /></kbd></span>

                            </li>
                            <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         className="h-6 w-6 flex-none text-gray-900 text-opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxuZ }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentrUI} default="Add new folder..." onChange={ (newtext) =>  {
        setAttributes({ contentrUI: newtext });
      }}
    /></span>
 <span className="ml-3 flex-none text-xs font-semibold text-gray-500"><kbd className="font-sans"><RichText tagName="span" value={attributes.contentiyj} default="⌘" onChange={ (newtext) =>  {
        setAttributes({ contentiyj: newtext });
      }}
    /></kbd><kbd className="font-sans"><RichText tagName="span" value={attributes.contentqiV} default="F" onChange={ (newtext) =>  {
        setAttributes({ contentqiV: newtext });
      }}
    /></kbd></span>

                            </li>
                            <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         className="h-6 w-6 flex-none text-gray-900 text-opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOuq }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentClA} default="Add hashtag..." onChange={ (newtext) =>  {
        setAttributes({ contentClA: newtext });
      }}
    /></span>
 <span className="ml-3 flex-none text-xs font-semibold text-gray-500"><kbd className="font-sans"><RichText tagName="span" value={attributes.contentXFe} default="⌘" onChange={ (newtext) =>  {
        setAttributes({ contentXFe: newtext });
      }}
    /></kbd><kbd className="font-sans"><RichText tagName="span" value={attributes.contenttbV} default="H" onChange={ (newtext) =>  {
        setAttributes({ contenttbV: newtext });
      }}
    /></kbd></span>

                            </li>
                            <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         className="h-6 w-6 flex-none text-gray-900 text-opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnFc }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentEss} default="Add label..." onChange={ (newtext) =>  {
        setAttributes({ contentEss: newtext });
      }}
    /></span>
 <span className="ml-3 flex-none text-xs font-semibold text-gray-500"><kbd className="font-sans"><RichText tagName="span" value={attributes.contentZEn} default="⌘" onChange={ (newtext) =>  {
        setAttributes({ contentZEn: newtext });
      }}
    /></kbd><kbd className="font-sans"><RichText tagName="span" value={attributes.contentRlK} default="L" onChange={ (newtext) =>  {
        setAttributes({ contentRlK: newtext });
      }}
    /></kbd></span>

                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="max-h-96 overflow-y-auto p-2 text-sm text-gray-700">
                    <li className="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                        
      <svg
         className="h-6 w-6 flex-none text-gray-900 text-opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmHI }}
        >
      </svg>
       <span className="ml-3 flex-auto truncate"><RichText tagName="span" value={attributes.contentMIe} default="Workflow Inc. / Website Redesign" onChange={ (newtext) =>  {
        setAttributes({ contentMIe: newtext });
      }}
    /></span>
 <span className="ml-3 hidden flex-none text-gray-500"><RichText tagName="span" value={attributes.contentrtZ} default="Jump to..." onChange={ (newtext) =>  {
        setAttributes({ contentrtZ: newtext });
      }}
    /></span>

                    </li>
                </ul>
                <div className="py-14 px-6 text-center sm:px-14">
                    
      <svg
         className="mx-auto h-6 w-6 text-gray-900 text-opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyKt }}
        >
      </svg>
      
                    <p className="mt-4 text-sm text-gray-900">
                        <RichText tagName="span" value={attributes.contentENj} default="We couldn't find any projects with that term. Please try again." onChange={ (newtext) => { setAttributes({ contentENj: newtext }); }} /></p>
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
            <div class="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all">
                <div class="relative">
                    
      <svg
         class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-900 text-opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDEw }}
        >
      </svg>
      
                    <input type="text" class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Search..."/>
                </div>
                <ul class="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-10 overflow-y-auto">
                    <li class="p-2">
                         <h2 class="mt-4 mb-2 px-3 text-xs font-semibold text-gray-900"><RichText.Content value={attributes.contentMUF} /></h2>

                        <ul class="text-sm text-gray-700">
                            <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         class="h-6 w-6 flex-none text-gray-900 text-opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUGH }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentRcI} /></span>
 <span class="ml-3 hidden flex-none text-gray-500"><RichText.Content value={attributes.contentBcr} /></span>

                            </li>
                        </ul>
                    </li>
                    <li class="p-2">
                         <h2 class="sr-only"><RichText.Content value={attributes.contentDUM} /></h2>

                        <ul class="text-sm text-gray-700">
                            <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         class="h-6 w-6 flex-none text-gray-900 text-opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPwJ }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentxRy} /></span>
 <span class="ml-3 flex-none text-xs font-semibold text-gray-500"><kbd class="font-sans"><RichText.Content value={attributes.contentwwi} /></kbd><kbd class="font-sans"><RichText.Content value={attributes.contentkWg} /></kbd></span>

                            </li>
                            <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         class="h-6 w-6 flex-none text-gray-900 text-opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxuZ }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentrUI} /></span>
 <span class="ml-3 flex-none text-xs font-semibold text-gray-500"><kbd class="font-sans"><RichText.Content value={attributes.contentiyj} /></kbd><kbd class="font-sans"><RichText.Content value={attributes.contentqiV} /></kbd></span>

                            </li>
                            <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         class="h-6 w-6 flex-none text-gray-900 text-opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOuq }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentClA} /></span>
 <span class="ml-3 flex-none text-xs font-semibold text-gray-500"><kbd class="font-sans"><RichText.Content value={attributes.contentXFe} /></kbd><kbd class="font-sans"><RichText.Content value={attributes.contenttbV} /></kbd></span>

                            </li>
                            <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                                
      <svg
         class="h-6 w-6 flex-none text-gray-900 text-opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnFc }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentEss} /></span>
 <span class="ml-3 flex-none text-xs font-semibold text-gray-500"><kbd class="font-sans"><RichText.Content value={attributes.contentZEn} /></kbd><kbd class="font-sans"><RichText.Content value={attributes.contentRlK} /></kbd></span>

                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="max-h-96 overflow-y-auto p-2 text-sm text-gray-700">
                    <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                        
      <svg
         class="h-6 w-6 flex-none text-gray-900 text-opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmHI }}
        >
      </svg>
       <span class="ml-3 flex-auto truncate"><RichText.Content value={attributes.contentMIe} /></span>
 <span class="ml-3 hidden flex-none text-gray-500"><RichText.Content value={attributes.contentrtZ} /></span>

                    </li>
                </ul>
                <div class="py-14 px-6 text-center sm:px-14">
                    
      <svg
         class="mx-auto h-6 w-6 text-gray-900 text-opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyKt }}
        >
      </svg>
      
                    <p class="mt-4 text-sm text-gray-900">
                        <RichText.Content value={attributes.contentENj} /></p>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        