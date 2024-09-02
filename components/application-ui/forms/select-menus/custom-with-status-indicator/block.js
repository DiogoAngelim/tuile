
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/custom-with-status-indicator', {
            title: 'custom with status indicator',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAA+BaADASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAIEBgMFB//EADYQAAEDAgYBAwIEBQMFAAAAAAABAgMTFAQRUlORkhIFITFBUTNxcrEVIjJhgQYWNUJidLPw/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABgRAQEBAQEAAAAAAAAAAAAAAAABEQID/9oADAMBAAIRAxEAPwDv8T6thsL6phvT5EfVxCZtVETxb85Zrn7Z5KifkaZMXhoZmQy4iFkr/wCljnojnfkn1OXxnp3q2PX1LHwq2JyytWCOSFaipEubVauaZZrn9PqT6myaXFvxWHwGJdPiY4nOgnwnnHIuSe3l8xqn1zy+C4muqXF4ZuJTDOxEKTr7pGr08l/x8nlFj4lhmmxLo8OyKV0aufK1U9lyzzRfb8l9znsRh5Y/XHLhsJNIsmLY98c+FRzPpnI2VP6ckT4X6/Qh2Fmjmjnnwb5oo/U8S9cOqIjpEdn4uajsvLL5GGuovcJ4ed1B4+Xj5VEyzyzy/PL3KbisM/DriGYiJ0KfMiPRW8/Bx2EwiYpXMbgFbCnrSPfCjUcjG0/+rLNE91TP6Jnke3qHpuJRMczC4eRmHZ6jFOrGQ+SPZ4J5K1q+zvfL2/sMNdU3FYZ2HuG4iJYMs6iPTx5+DwwfqUGNxmJw8Co9IGsdUa5Fa9HZ5ZZfkc0uBlXBvxDcPip8PfRzSwuwyRrI1G5KrY0+ffJcskzyPpf6eiy9Z9WxEeBlwmHmSFY0kiVnlkjs1RPz/cYPqYf1TBYnGYjCw4hjpsOv87fJPt9Pvl9fse8GKw+JRy4aeKZGrk5Y3o7Jf8HM4/A4h2J9fgw+EkSTFRsfDI1mTXojURzfL4RVyX2/ua/S40l9dTFYTAS4PDMwtJ6SRU/J3kiomX1yRF9xg6AAEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5MY2RiPe1HK5M/f3yKoxbTOqAWeGMweFx0SRYuBkzEXyRHJnkv3T7HpRi2mdUFGLaZ1QCMLhcPg4EhwsLIo090axMkPYijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oKMW0zqgFgijFtM6oS9jY2K9jUarUz9vbMCoPwI/wBKfsUqo1FVyoiJ8qpMH4Ef6U/YyesQyz4FWQoqqjkVWp9UJbkY76vPNsmtkckcrfKJ7Xp92rmUfF9C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" />),
            category: 'common',
            attributes: {
  "contentFhX": {
    "type": "string",
    "default": " Assigned to "
  },
  "contentQcv": {
    "type": "string",
    "default": " Tom Cook "
  },
  "contentxtb": {
    "type": "string",
    "default": "\n            Wade Cooper\n            "
  },
  "contentXnB": {
    "type": "string",
    "default": " is online"
  },
  "svggwT": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgaIU": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svggwT }
            onChange={ ( value ) => {
              setAttributes({ svggwT: value });
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
            value={ attributes.svgaIU }
            onChange={ ( value ) => {
              setAttributes({ svgaIU: value });
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
        <div>
            <label id="listbox-label" className="block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contentFhX} default="Assigned to" onChange={ (newtext) => { setAttributes({ contentFhX: newtext }); }} /></label>
            <div className="mt-1 relative">
                <button type="button" className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                    <div className="flex items-center"> <span aria-label="Online" className="bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full"/>

                        <span className="ml-3 block truncate">
                            <RichText tagName="span" value={attributes.contentQcv} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contentQcv: newtext }); }} /></span>
                    </div> <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        
        
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggwT }}
        >
      </svg>
      
      </span>

                </button>
                <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                    <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                        <div className="flex items-center"> <span className="bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full" aria-hidden="true"/>
 <span className="font-normal ml-3 block truncate"><RichText tagName="span" value={attributes.contentxtb} default="Wade Cooper" onChange={ (newtext) =>  {
        setAttributes({ contentxtb: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentXnB} default="is online" onChange={ (newtext) =>  {
        setAttributes({ contentXnB: newtext });
      }}
    /></span>
</span>
                        </div> <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
          
          
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaIU }}
        >
      </svg>
      
        </span>

                    </li>
                </ul>
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
        <div>
            <label id="listbox-label" class="block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contentFhX} /></label>
            <div class="mt-1 relative">
                <button type="button" class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                    <div class="flex items-center"> <span aria-label="Online" class="bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full"/>

                        <span class="ml-3 block truncate">
                            <RichText.Content value={attributes.contentQcv} /></span>
                    </div> <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        
        
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggwT }}
        >
      </svg>
      
      </span>

                </button>
                <ul class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                    <li class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                        <div class="flex items-center"> <span class="bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full" aria-hidden="true"/>
 <span class="font-normal ml-3 block truncate"><RichText.Content value={attributes.contentxtb} /><span class="sr-only"><RichText.Content value={attributes.contentXnB} /></span>
</span>
                        </div> <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
          
          
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaIU }}
        >
      </svg>
      
        </span>

                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        