
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-buttons-below', {
            title: 'with buttons below',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8BbwDASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAIBAwQFBwYI/8QANhABAAEDAwIFAgUCBAcAAAAAAAECAwQFERJSkQYTITFRInEHFDJBYTNCFRYjsUNygaGywdL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIEA//EABkRAQEBAQEBAAAAAAAAAAAAAAABEQIDMf/aAAwDAQACEQMRAD8A7MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApMxHvOxM7RM/ClNO3rPuBzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukAjzp6o7nOnqjukApExPtO6qNVO/rHurE7xE/IKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKKqSCNyfoq+ya1d/p1fZdABbv37WLYrv37lNu1bjequqdoiAXB4PN8e5uoavXpXhzEt1VW4ia8nI3mmI/5Y2/3/f2hgZmd47x6Yrs61j3a497c49EU/8Ajv8A92b1I3PPquljmemfiZqmnZlOF4r02imKo+nIxN/X+ZpmZ3/naY2+HR8fIs5ePbyMe5TctXKYqorpn0mFllZvNn1dBrNd1yzoONj3ruNkZNWTkU49q1j00zVVXVvt+qYj9vlUbMazE1ui9YqvZ2JkaVTFcUU/nqrdHOZ+ONcwu0a5pFzyfL1XCr/MVTTZ45FE+ZMe8U+vrP2BnDR3/E1GNk0WbuJP+pqVOBRNF6ireZo5cpiJ+n29p9fZk2NdxZwbmZn3bGBaov12eV3JtzTPGqY/VE7RM7e3vBg2Yt0X7N2xF+3dortVU8ouU1RNMx87/DzseOsGbVOZ/h2o/wCF1V8I1GbMeT77ctuXLjv/AHcQemGLe1PT8fKt4l/OxrWRd/p2a7tNNdf2iZ3ljYviHSszV8vSrGbaqy8PbzbfKN/X32+dtvX4/cGzGNjalgZtFyvEzcfIptTtcm1dpqiif52n0MPUcHUaKq8HMx8qmidqqrF2muKZ+J2kGSAAAAAAAAAAAAAAAAAAAAAAAADExtQt36rtu5TNi7Z/qW659o+d/wB4/kGWMbCzIzaa7lu3VFqKtqK5/wCJ8zEfDJAQtz9FP2TWrX9On7AuKqKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKSqpILV39FX2Xlm7+ir7LwDjv4k+JsrUPEE6PiXKvyWHMRcimfS5d/ff7e23zEuxOC5k+dqGTkV+ty5erqqn+ZmZStctp4IqoxMTVNWiK6964txFFE1zv7z6R6/vDfW9XuZGkXdQqxtotzMbTvTv3jeGv/AA3+nw/kT78r8zO/2iP/AE9F5k16NcuTTTvFNyr0j09Jnb/ZzdXa7uJkeB8Z5Ual4atZtFE27mNkRv8ATVG28fMxD0H4Z+Jrtquxpt+7NzFyfS3NXvbr+PtPt95hifiDMU+D64ppiIqqjeIj/q8N4ayLtuzFVFc01WbtFdE/E7t+fx5er6YeT/ELGu5OmaZ5djNvUWtTs3Lv5Giuq7RREVb1U8fWNvl6we8cjn2Xg2tT0zT8bGw9cyLNOs49d+jVbd2qrh67z9f9nz+3qxtU8NcdO8WV42izF+vPsV4k28aeUxHlzM0bR7b8t9v5dKF1Mc/u6bnzqtVcYWRNP+ard/l5VW3leRtz9v07+m/sw68bUsXFxbdzSbvlTqedcrvzp05NyzvXPDjRPtFcTP1bTHd0wNMeR8E6ZmU/h9Gm5lu9i36/zFvjdt+XVTFVde08Y9vff09Phoq8nXP8t6doODi63p+tYNunFjyLMRjV7bR5ldyaZiado39Jid5mHSw0xyrxth6tmZGtWLOl3/OmbM49zG0zzasiKYpnnN79pjaY2jafT9221fSM2vWPFljE0+7Te1TBtziZFFr6Kppoqiuma/amqd/3n13e/DTHMtN0X81GfXVh6x5VWk1Yt2zTp1vE33mPpp9udceu07TH8+uzc+B7eXb1HMivDq/KxYtU0Zl7Tvyd6uY3+iqn2q4x/dER7vaBpgAigAAAAAAAAAAAAAAAAAAAAADRZeJc129VctxFm1ZiaaLlVPrdn/5b0UYmn5M37U27libF2ztTXb29I+Nv4ZYICza/RT9l5Ztfop+wLsKqQqAAAAD/2Q==" />),
            category: 'common',
            attributes: {
  "contentTPe": {
    "type": "string",
    "default": "Emilia Gates"
  },
  "contentIvH": {
    "type": "string",
    "default": "Sent you an invite to connect."
  },
  "contentmdB": {
    "type": "string",
    "default": "Accept"
  },
  "contentjyH": {
    "type": "string",
    "default": "Decline"
  },
  "contentZUk": {
    "type": "string",
    "default": "Close"
  },
  "imageurlSNR": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1494790108377-be9c29b29330.jpeg'
  },
  "imagealtojK": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgaRV": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgaRV }
            onChange={ ( value ) => {
              setAttributes({ svgaRV: value });
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
        <div aria-live="assertive" className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
            <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
                    <div className="p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlSNR: media.url,
            imagealtojK: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlSNR } 
            alt={ attributes.imagealtojK } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                            </div>
                            <div className="ml-3 w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                    <RichText tagName="span" value={attributes.contentTPe} default="Emilia Gates" onChange={ (newtext) => { setAttributes({ contentTPe: newtext }); }} /></p>
                                <p className="mt-1 text-sm text-gray-500">
                                    <RichText tagName="span" value={attributes.contentIvH} default="Sent you an invite to connect." onChange={ (newtext) => { setAttributes({ contentIvH: newtext }); }} /></p>
                                <div className="mt-4 flex">
                                    <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <RichText tagName="span" value={attributes.contentmdB} default="Accept" onChange={ (newtext) => { setAttributes({ contentmdB: newtext }); }} /></button>
                                    <button type="button" className="ml-3 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <RichText tagName="span" value={attributes.contentjyH} default="Decline" onChange={ (newtext) => { setAttributes({ contentjyH: newtext }); }} /></button>
                                </div>
                            </div>
                            <div className="ml-4 flex-shrink-0 flex">
                                <button className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentZUk} default="Close" onChange={ (newtext) =>  {
        setAttributes({ contentZUk: newtext });
      }}
    /></span>

                                    
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaRV }}
        >
      </svg>
      
                                </button>
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
        <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
            <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
                <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
                    <div class="p-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 pt-0.5">
                                
      <img
            src={ attributes.imageurlSNR } 
            alt={ attributes.imagealtojK } 
            class="h-10 w-10 rounded-full"
          />
                            </div>
                            <div class="ml-3 w-0 flex-1">
                                <p class="text-sm font-medium text-gray-900">
                                    <RichText.Content value={attributes.contentTPe} /></p>
                                <p class="mt-1 text-sm text-gray-500">
                                    <RichText.Content value={attributes.contentIvH} /></p>
                                <div class="mt-4 flex">
                                    <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <RichText.Content value={attributes.contentmdB} /></button>
                                    <button type="button" class="ml-3 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <RichText.Content value={attributes.contentjyH} /></button>
                                </div>
                            </div>
                            <div class="ml-4 flex-shrink-0 flex">
                                <button class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentZUk} /></span>

                                    
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaRV }}
        >
      </svg>
      
                                </button>
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
        