
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple', {
            title: 'simple',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8BbwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEFB//EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDpQDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwBlQAGGA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAZUABhgNIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AGVAAYYDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICiAKIAogCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAogCiAKIAoigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AGVAAf/9k=" />),
            category: 'common',
            attributes: {
  "contentKht": {
    "type": "string",
    "default": "Leslie Alexander"
  },
  "contentYDN": {
    "type": "string",
    "default": "Michael Foster"
  },
  "contentclA": {
    "type": "string",
    "default": "Dries Vincent"
  },
  "contentmDQ": {
    "type": "string",
    "default": "Lindsay Walton"
  },
  "contentbSu": {
    "type": "string",
    "default": "Courtney Henry"
  },
  "contentrgV": {
    "type": "string",
    "default": "No people found."
  },
  "svgvTD": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgvTD }
            onChange={ ( value ) => {
              setAttributes({ svgvTD: value });
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
          dangerouslySetInnerHTML={ { __html: attributes.svgvTD }}
        >
      </svg>
      
                    <input type="text" className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." role="combobox" aria-expanded="false" aria-controls="options"/>
                </div>
                <ul className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800" id="options" role="listbox">
                    <li className="cursor-default select-none px-4 py-2" id="option-1" role="option" tabindex="-1">
                        <RichText tagName="span" value={attributes.contentKht} default="Leslie Alexander" onChange={ (newtext) => { setAttributes({ contentKht: newtext }); }} /></li>
                    <li className="cursor-default select-none px-4 py-2" id="option-2" role="option" tabindex="-1">
                        <RichText tagName="span" value={attributes.contentYDN} default="Michael Foster" onChange={ (newtext) => { setAttributes({ contentYDN: newtext }); }} /></li>
                    <li className="cursor-default select-none px-4 py-2" id="option-3" role="option" tabindex="-1">
                        <RichText tagName="span" value={attributes.contentclA} default="Dries Vincent" onChange={ (newtext) => { setAttributes({ contentclA: newtext }); }} /></li>
                    <li className="cursor-default select-none px-4 py-2" id="option-4" role="option" tabindex="-1">
                        <RichText tagName="span" value={attributes.contentmDQ} default="Lindsay Walton" onChange={ (newtext) => { setAttributes({ contentmDQ: newtext }); }} /></li>
                    <li className="cursor-default select-none px-4 py-2" id="option-5" role="option" tabindex="-1">
                        <RichText tagName="span" value={attributes.contentbSu} default="Courtney Henry" onChange={ (newtext) => { setAttributes({ contentbSu: newtext }); }} /></li>
                </ul>
                <p className="p-4 text-sm text-gray-500">
                    <RichText tagName="span" value={attributes.contentrgV} default="No people found." onChange={ (newtext) => { setAttributes({ contentrgV: newtext }); }} /></p>
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
            <div class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <div class="relative">
                    
      <svg
         class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvTD }}
        >
      </svg>
      
                    <input type="text" class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." role="combobox" aria-expanded="false" aria-controls="options"/>
                </div>
                <ul class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800" id="options" role="listbox">
                    <li class="cursor-default select-none px-4 py-2" id="option-1" role="option" tabindex="-1">
                        <RichText.Content value={attributes.contentKht} /></li>
                    <li class="cursor-default select-none px-4 py-2" id="option-2" role="option" tabindex="-1">
                        <RichText.Content value={attributes.contentYDN} /></li>
                    <li class="cursor-default select-none px-4 py-2" id="option-3" role="option" tabindex="-1">
                        <RichText.Content value={attributes.contentclA} /></li>
                    <li class="cursor-default select-none px-4 py-2" id="option-4" role="option" tabindex="-1">
                        <RichText.Content value={attributes.contentmDQ} /></li>
                    <li class="cursor-default select-none px-4 py-2" id="option-5" role="option" tabindex="-1">
                        <RichText.Content value={attributes.contentbSu} /></li>
                </ul>
                <p class="p-4 text-sm text-gray-500">
                    <RichText.Content value={attributes.contentrgV} /></p>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        