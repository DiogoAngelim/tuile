
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-secondary-text', {
            title: 'with secondary text',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAA+BaADASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAIEBgMFAf/EADYQAAEDAgYBAgMGBgIDAAAAAAABAgMTFAQRUlORkhIFITFBURUiMjNhsQYjQnFygUOhJCaC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/AO/xPq2GwvqmG9PkR9XEJm1URPFvxyzXP2zyVE/saZMXhoZmQy4iFkr/AMLHPRHO/snzOXxnp3q2PX1LHwq2JyytWCOSFaipEubVauaZZrn8vmT6myaXFvxWHwGJdPiY4nOgnwnnHIuSe3l8Y1T555fAsSuqXF4ZuJTDOxEKTr7pGr08l/18Tyix8SwzTYl0eHZFK6NXPlaqey5Z5ovt/Zfc57EYeWP1xy4bCTSLJi2PfHPhUcz5ZyNlT8OSJ8F+fyIdhZo5o558G+aKP1PEvXDqiI6RHZ+Lmo7Lyy+IhXUXuE8PO6g8fLx8qiZZ5Z5f3y9ym4rDPw64hmIidCnxkR6K3n4HHYTCJilcxuAVsKetI98KNRyMbT/qyzRPdUz+SZ5Ht6h6biUTHMwuHkZh2eoxTqxkPkj2eCeStavs73y9v0EK6puKwzsPcNxESwZZ1Eenjz8DwwfqUGNxmJw8Co9IGsdUa5Fa9HZ5ZZf2OaXAyrg34huHxU+Hvo5pYXYZI1kajclVsafH3yXLJM8j6X8PRZes+rYiPAy4TDzJCsaSRKzyyR2aon9/3EH1MP6pgsTjMRhYcQx02HX77fJPp8vrl8/oe8GKw+JRy4aeKZGrk5Y3o7Jf9HM4/A4h2J9fgw+EkSTFRsfDI1mTXojURzfL4Iq5L7fqa/S40l9dTFYTAS4PDMwtJ6SRU/J3kiomXzyRF9xB0AAIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADyYxsjEe9qOVyZ+/vkVRi2mdUAs8MZg8LjokixcDJmIvkiOTPJfqn0PSjFtM6oKMW0zqgEYXC4fBwJDhYWRRp7o1iZIexFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1QUYtpnVALBFGLaZ1Ql7GxsV7Go1Wpn7e2YFQfkR/4p+x54zFxYKBZp0lViKify4nSL1air/0ekH5Ef8Ain7FgfO9N9c9P9UkVmCdiH5Z/edhZWN9lyVPJzUTNF9s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" />),
            category: 'common',
            attributes: {
  "contentXjG": {
    "type": "string",
    "default": " Assigned to "
  },
  "contentXCG": {
    "type": "string",
    "default": " Tom Cook "
  },
  "contentVNO": {
    "type": "string",
    "default": " @tomcook "
  },
  "contentxTc": {
    "type": "string",
    "default": " Wade Cooper "
  },
  "contentGhj": {
    "type": "string",
    "default": " @wadecooper "
  },
  "svgGaJ": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgSFr": {
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
            value={ attributes.svgGaJ }
            onChange={ ( value ) => {
              setAttributes({ svgGaJ: value });
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
            value={ attributes.svgSFr }
            onChange={ ( value ) => {
              setAttributes({ svgSFr: value });
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
                <RichText tagName="span" value={attributes.contentXjG} default="Assigned to" onChange={ (newtext) => { setAttributes({ contentXjG: newtext }); }} /></label>
            <div className="mt-1 relative">
                <button type="button" className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label"> <span className="w-full inline-flex truncate">
        <span className="truncate"><RichText tagName="span" value={attributes.contentXCG} default="Tom Cook" onChange={ (newtext) =>  {
        setAttributes({ contentXCG: newtext });
      }}
    /></span>
 <span className="ml-2 truncate text-gray-500"><RichText tagName="span" value={attributes.contentVNO} default="@tomcook" onChange={ (newtext) =>  {
        setAttributes({ contentVNO: newtext });
      }}
    /></span>
</span> <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        
        
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGaJ }}
        >
      </svg>
      
      </span>

                </button>
                <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                    <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                        <div className="flex"> <span className="font-normal truncate"><RichText tagName="span" value={attributes.contentxTc} default="Wade Cooper" onChange={ (newtext) =>  {
        setAttributes({ contentxTc: newtext });
      }}
    /></span>
 <span className="text-gray-500 ml-2 truncate"><RichText tagName="span" value={attributes.contentGhj} default="@wadecooper" onChange={ (newtext) =>  {
        setAttributes({ contentGhj: newtext });
      }}
    /></span>

                        </div> <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
          
          
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSFr }}
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
                <RichText.Content value={attributes.contentXjG} /></label>
            <div class="mt-1 relative">
                <button type="button" class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label"> <span class="w-full inline-flex truncate">
        <span class="truncate"><RichText.Content value={attributes.contentXCG} /></span>
 <span class="ml-2 truncate text-gray-500"><RichText.Content value={attributes.contentVNO} /></span>
</span> <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        
        
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGaJ }}
        >
      </svg>
      
      </span>

                </button>
                <ul class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                    <li class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                        <div class="flex"> <span class="font-normal truncate"><RichText.Content value={attributes.contentxTc} /></span>
 <span class="text-gray-500 ml-2 truncate"><RichText.Content value={attributes.contentGhj} /></span>

                        </div> <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
          
          
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSFr }}
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
        