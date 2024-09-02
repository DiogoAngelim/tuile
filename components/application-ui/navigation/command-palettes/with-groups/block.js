
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-groups', {
            title: 'with groups',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8BbwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEFB//EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDpQDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwBlQAGGA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAZUABhgNIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AGVAAYYDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICiAKIAogCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAogCiAKIAoigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AGVAAf/9k=" />),
            category: 'common',
            attributes: {
  "contentOcO": {
    "type": "string",
    "default": "Search for clients and projects"
  },
  "contentMfb": {
    "type": "string",
    "default": "Quickly access clients and projects by running a global search."
  },
  "contentZpc": {
    "type": "string",
    "default": "Clients"
  },
  "contentmVz": {
    "type": "string",
    "default": "Workflow Inc."
  },
  "contentLqV": {
    "type": "string",
    "default": "Multinational LLC."
  },
  "contenthCm": {
    "type": "string",
    "default": "Projects"
  },
  "contenttEW": {
    "type": "string",
    "default": "Workflow Inc. / Website Redesign"
  },
  "contentHej": {
    "type": "string",
    "default": "Multinational LLC. / Animation"
  },
  "contentCsx": {
    "type": "string",
    "default": "No results found"
  },
  "contentgtO": {
    "type": "string",
    "default": "We couldn’t find anything with that term. Please try again."
  },
  "svgsZw": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgJCp": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svghuT": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
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
            value={ attributes.svgsZw }
            onChange={ ( value ) => {
              setAttributes({ svgsZw: value });
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
            value={ attributes.svgJCp }
            onChange={ ( value ) => {
              setAttributes({ svgJCp: value });
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
            value={ attributes.svghuT }
            onChange={ ( value ) => {
              setAttributes({ svghuT: value });
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
            <div className="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <div className="relative">
                    
      <svg
         className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsZw }}
        >
      </svg>
      
                    <input type="text" className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." role="combobox" aria-expanded="false" aria-controls="options"/>
                </div>
                <div className="border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
                    
      <svg
         className="mx-auto h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJCp }}
        >
      </svg>
      
                    <p className="mt-4 font-semibold text-gray-900">
                        <RichText tagName="span" value={attributes.contentOcO} default="Search for clients and projects" onChange={ (newtext) => { setAttributes({ contentOcO: newtext }); }} /></p>
                    <p className="mt-2 text-gray-500">
                        <RichText tagName="span" value={attributes.contentMfb} default="Quickly access clients and projects by running a global search." onChange={ (newtext) => { setAttributes({ contentMfb: newtext }); }} /></p>
                </div>
                <ul className="max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2" id="options" role="listbox">
                    <li>
                         <h2 className="bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentZpc} default="Clients" onChange={ (newtext) =>  {
        setAttributes({ contentZpc: newtext });
      }}
    /></h2>

                        <ul className="mt-2 text-sm text-gray-800">
                            <li className="cursor-default select-none px-4 py-2" id="option-1" role="option" tabindex="-1">
                                <RichText tagName="span" value={attributes.contentmVz} default="Workflow Inc." onChange={ (newtext) => { setAttributes({ contentmVz: newtext }); }} /></li>
                            <li className="cursor-default select-none px-4 py-2" id="option-2" role="option" tabindex="-1">
                                <RichText tagName="span" value={attributes.contentLqV} default="Multinational LLC." onChange={ (newtext) => { setAttributes({ contentLqV: newtext }); }} /></li>
                        </ul>
                    </li>
                    <li>
                         <h2 className="bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900"><RichText tagName="span" value={attributes.contenthCm} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contenthCm: newtext });
      }}
    /></h2>

                        <ul className="mt-2 text-sm text-gray-800">
                            <li className="cursor-default select-none px-4 py-2" id="option-3" role="option" tabindex="-1">
                                <RichText tagName="span" value={attributes.contenttEW} default="Workflow Inc. / Website Redesign" onChange={ (newtext) => { setAttributes({ contenttEW: newtext }); }} /></li>
                            <li className="cursor-default select-none px-4 py-2" id="option-3" role="option" tabindex="-1">
                                <RichText tagName="span" value={attributes.contentHej} default="Multinational LLC. / Animation" onChange={ (newtext) => { setAttributes({ contentHej: newtext }); }} /></li>
                        </ul>
                    </li>
                </ul>
                <div className="border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
                    
      <svg
         className="mx-auto h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghuT }}
        >
      </svg>
      
                    <p className="mt-4 font-semibold text-gray-900">
                        <RichText tagName="span" value={attributes.contentCsx} default="No results found" onChange={ (newtext) => { setAttributes({ contentCsx: newtext }); }} /></p>
                    <p className="mt-2 text-gray-500">
                        <RichText tagName="span" value={attributes.contentgtO} default="We couldn’t find anything with that term. Please try again." onChange={ (newtext) => { setAttributes({ contentgtO: newtext }); }} /></p>
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
            <div class="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <div class="relative">
                    
      <svg
         class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsZw }}
        >
      </svg>
      
                    <input type="text" class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." role="combobox" aria-expanded="false" aria-controls="options"/>
                </div>
                <div class="border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
                    
      <svg
         class="mx-auto h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJCp }}
        >
      </svg>
      
                    <p class="mt-4 font-semibold text-gray-900">
                        <RichText.Content value={attributes.contentOcO} /></p>
                    <p class="mt-2 text-gray-500">
                        <RichText.Content value={attributes.contentMfb} /></p>
                </div>
                <ul class="max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2" id="options" role="listbox">
                    <li>
                         <h2 class="bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900"><RichText.Content value={attributes.contentZpc} /></h2>

                        <ul class="mt-2 text-sm text-gray-800">
                            <li class="cursor-default select-none px-4 py-2" id="option-1" role="option" tabindex="-1">
                                <RichText.Content value={attributes.contentmVz} /></li>
                            <li class="cursor-default select-none px-4 py-2" id="option-2" role="option" tabindex="-1">
                                <RichText.Content value={attributes.contentLqV} /></li>
                        </ul>
                    </li>
                    <li>
                         <h2 class="bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900"><RichText.Content value={attributes.contenthCm} /></h2>

                        <ul class="mt-2 text-sm text-gray-800">
                            <li class="cursor-default select-none px-4 py-2" id="option-3" role="option" tabindex="-1">
                                <RichText.Content value={attributes.contenttEW} /></li>
                            <li class="cursor-default select-none px-4 py-2" id="option-3" role="option" tabindex="-1">
                                <RichText.Content value={attributes.contentHej} /></li>
                        </ul>
                    </li>
                </ul>
                <div class="border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
                    
      <svg
         class="mx-auto h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghuT }}
        >
      </svg>
      
                    <p class="mt-4 font-semibold text-gray-900">
                        <RichText.Content value={attributes.contentCsx} /></p>
                    <p class="mt-2 text-gray-500">
                        <RichText.Content value={attributes.contentgtO} /></p>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        