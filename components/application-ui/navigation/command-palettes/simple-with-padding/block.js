
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-with-padding', {
            title: 'simple with padding',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8BbwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEFB//EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDpQDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwBlQAGGA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAZUABhgNIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AGVAAYYDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICiAKIAogCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAogCiAKIAoigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AGVAAf/9k=" />),
            category: 'common',
            attributes: {
  "contentgMP": {
    "type": "string",
    "default": "Leslie Alexander"
  },
  "contentXKy": {
    "type": "string",
    "default": "Michael Foster"
  },
  "contentaLg": {
    "type": "string",
    "default": "Dries Vincent"
  },
  "contentTAK": {
    "type": "string",
    "default": "Lindsay Walton"
  },
  "contentOKQ": {
    "type": "string",
    "default": "Courtney Henry"
  },
  "contentlcy": {
    "type": "string",
    "default": "No people found using that search term."
  },
  "svgCzO": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
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
            value={ attributes.svgCzO }
            onChange={ ( value ) => {
              setAttributes({ svgCzO: value });
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
            <div className="mx-auto max-w-xl transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <input type="text" className="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Search..." role="combobox" aria-expanded="false" aria-controls="options"/>
                <ul className="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800" id="options" role="listbox">
                    <li className="cursor-default select-none rounded-md px-4 py-2" id="option-1" role="option" tabindex="-1">
                        <RichText tagName="span" value={attributes.contentgMP} default="Leslie Alexander" onChange={ (newtext) => { setAttributes({ contentgMP: newtext }); }} /></li>
                    <li className="cursor-default select-none rounded-md px-4 py-2" id="option-2" role="option" tabindex="-1">
                        <RichText tagName="span" value={attributes.contentXKy} default="Michael Foster" onChange={ (newtext) => { setAttributes({ contentXKy: newtext }); }} /></li>
                    <li className="cursor-default select-none rounded-md px-4 py-2" id="option-3" role="option" tabindex="-1">
                        <RichText tagName="span" value={attributes.contentaLg} default="Dries Vincent" onChange={ (newtext) => { setAttributes({ contentaLg: newtext }); }} /></li>
                    <li className="cursor-default select-none rounded-md px-4 py-2" id="option-4" role="option" tabindex="-1">
                        <RichText tagName="span" value={attributes.contentTAK} default="Lindsay Walton" onChange={ (newtext) => { setAttributes({ contentTAK: newtext }); }} /></li>
                    <li className="cursor-default select-none rounded-md px-4 py-2" id="option-5" role="option" tabindex="-1">
                        <RichText tagName="span" value={attributes.contentOKQ} default="Courtney Henry" onChange={ (newtext) => { setAttributes({ contentOKQ: newtext }); }} /></li>
                </ul>
                <div className="py-14 px-4 text-center sm:px-14">
                    
      <svg
         className="mx-auto h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCzO }}
        >
      </svg>
      
                    <p className="mt-4 text-sm text-gray-900">
                        <RichText tagName="span" value={attributes.contentlcy} default="No people found using that search term." onChange={ (newtext) => { setAttributes({ contentlcy: newtext }); }} /></p>
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
            <div class="mx-auto max-w-xl transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <input type="text" class="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Search..." role="combobox" aria-expanded="false" aria-controls="options"/>
                <ul class="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800" id="options" role="listbox">
                    <li class="cursor-default select-none rounded-md px-4 py-2" id="option-1" role="option" tabindex="-1">
                        <RichText.Content value={attributes.contentgMP} /></li>
                    <li class="cursor-default select-none rounded-md px-4 py-2" id="option-2" role="option" tabindex="-1">
                        <RichText.Content value={attributes.contentXKy} /></li>
                    <li class="cursor-default select-none rounded-md px-4 py-2" id="option-3" role="option" tabindex="-1">
                        <RichText.Content value={attributes.contentaLg} /></li>
                    <li class="cursor-default select-none rounded-md px-4 py-2" id="option-4" role="option" tabindex="-1">
                        <RichText.Content value={attributes.contentTAK} /></li>
                    <li class="cursor-default select-none rounded-md px-4 py-2" id="option-5" role="option" tabindex="-1">
                        <RichText.Content value={attributes.contentOKQ} /></li>
                </ul>
                <div class="py-14 px-4 text-center sm:px-14">
                    
      <svg
         class="mx-auto h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCzO }}
        >
      </svg>
      
                    <p class="mt-4 text-sm text-gray-900">
                        <RichText.Content value={attributes.contentlcy} /></p>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        