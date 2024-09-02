
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/stacked-with-footer-list', {
            title: 'stacked with footer list',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentKTF": {
    "type": "string",
    "default": "Resources"
  },
  "contentdNT": {
    "type": "string",
    "default": "Help Center"
  },
  "contentbkM": {
    "type": "string",
    "default": "Get all of your questions answered in our forums or contact support."
  },
  "contentKcH": {
    "type": "string",
    "default": "Guides"
  },
  "contentKBT": {
    "type": "string",
    "default": "Learn how to maximize our platform to get the most out of it."
  },
  "contentYki": {
    "type": "string",
    "default": "Events"
  },
  "contentrac": {
    "type": "string",
    "default": "See what meet-ups and other events we might be planning near you."
  },
  "contentJeu": {
    "type": "string",
    "default": "Security"
  },
  "contentevw": {
    "type": "string",
    "default": "Understand how we take your privacy seriously."
  },
  "contentvYP": {
    "type": "string",
    "default": "Recent Posts"
  },
  "contentFqK": {
    "type": "string",
    "default": " Boost your conversion rate "
  },
  "contentgCc": {
    "type": "string",
    "default": " How to use search engine optimization to drive traffic to your site "
  },
  "contentXYT": {
    "type": "string",
    "default": " Improve your customer experience "
  },
  "contentNFV": {
    "type": "string",
    "default": " View all posts "
  },
  "contentEDq": {
    "type": "string",
    "default": "&rarr;"
  },
  "svgULA": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgxTR": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgxvg": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgzmi": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgqRF": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"/>"
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
            value={ attributes.svgULA }
            onChange={ ( value ) => {
              setAttributes({ svgULA: value });
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
            value={ attributes.svgxTR }
            onChange={ ( value ) => {
              setAttributes({ svgxTR: value });
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
            value={ attributes.svgxvg }
            onChange={ ( value ) => {
              setAttributes({ svgxvg: value });
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
            value={ attributes.svgzmi }
            onChange={ ( value ) => {
              setAttributes({ svgzmi: value });
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
            value={ attributes.svgqRF }
            onChange={ ( value ) => {
              setAttributes({ svgqRF: value });
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
        <div className="relative">
            <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentKTF} default="Resources" onChange={ (newtext) =>  {
        setAttributes({ contentKTF: newtext });
      }}
    /></span>

                
      <svg
         className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgULA }}
        >
      </svg>
      
            </button>
            <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"> <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxTR }}
        >
      </svg>
      
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentdNT} default="Help Center" onChange={ (newtext) =>  {
        setAttributes({ contentdNT: newtext });
      }}
    /></p>
            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentbkM} default="Get all of your questions answered in our forums or contact support." onChange={ (newtext) =>  {
        setAttributes({ contentbkM: newtext });
      }}
    /></p>
          </div>
        </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxvg }}
        >
      </svg>
      
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentKcH} default="Guides" onChange={ (newtext) =>  {
        setAttributes({ contentKcH: newtext });
      }}
    /></p>
            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentKBT} default="Learn how to maximize our platform to get the most out of it." onChange={ (newtext) =>  {
        setAttributes({ contentKBT: newtext });
      }}
    /></p>
          </div>
        </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzmi }}
        >
      </svg>
      
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentYki} default="Events" onChange={ (newtext) =>  {
        setAttributes({ contentYki: newtext });
      }}
    /></p>
            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentrac} default="See what meet-ups and other events we might be planning near you." onChange={ (newtext) =>  {
        setAttributes({ contentrac: newtext });
      }}
    /></p>
          </div>
        </span>
 <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqRF }}
        >
      </svg>
      
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentJeu} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentJeu: newtext });
      }}
    /></p>
            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentevw} default="Understand how we take your privacy seriously." onChange={ (newtext) =>  {
        setAttributes({ contentevw: newtext });
      }}
    /></p>
          </div>
        </span>

                    </div>
                    <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                        <div>
                             <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase"><RichText tagName="span" value={attributes.contentvYP} default="Recent Posts" onChange={ (newtext) =>  {
        setAttributes({ contentvYP: newtext });
      }}
    /></h3>

                            <ul role="list" className="mt-4 space-y-4">
                                <li className="text-base truncate"> <span className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"><RichText tagName="span" value={attributes.contentFqK} default="Boost your conversion rate" onChange={ (newtext) =>  {
        setAttributes({ contentFqK: newtext });
      }}
    /></span>

                                </li>
                                <li className="text-base truncate"> <span className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"><RichText tagName="span" value={attributes.contentgCc} default="How to use search engine optimization to drive traffic to your site" onChange={ (newtext) =>  {
        setAttributes({ contentgCc: newtext });
      }}
    /></span>

                                </li>
                                <li className="text-base truncate"> <span className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"><RichText tagName="span" value={attributes.contentXYT} default="Improve your customer experience" onChange={ (newtext) =>  {
        setAttributes({ contentXYT: newtext });
      }}
    /></span>

                                </li>
                            </ul>
                        </div>
                        <div className="mt-5 text-sm"> <span className="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"><RichText tagName="span" value={attributes.contentNFV} default="View all posts" onChange={ (newtext) =>  {
        setAttributes({ contentNFV: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentEDq} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentEDq: newtext });
      }}
    /></span></span>
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
        <div class="relative">
            <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText.Content value={attributes.contentKTF} /></span>

                
      <svg
         class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgULA }}
        >
      </svg>
      
            </button>
            <div class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"> <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxTR }}
        >
      </svg>
      
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentdNT} /></p>
            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentbkM} /></p>
          </div>
        </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxvg }}
        >
      </svg>
      
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentKcH} /></p>
            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentKBT} /></p>
          </div>
        </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzmi }}
        >
      </svg>
      
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentYki} /></p>
            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentrac} /></p>
          </div>
        </span>
 <span class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
          
          
      <svg
         class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqRF }}
        >
      </svg>
      
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900"><RichText.Content value={attributes.contentJeu} /></p>
            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentevw} /></p>
          </div>
        </span>

                    </div>
                    <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                        <div>
                             <h3 class="text-sm tracking-wide font-medium text-gray-500 uppercase"><RichText.Content value={attributes.contentvYP} /></h3>

                            <ul role="list" class="mt-4 space-y-4">
                                <li class="text-base truncate"> <span class="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"><RichText.Content value={attributes.contentFqK} /></span>

                                </li>
                                <li class="text-base truncate"> <span class="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"><RichText.Content value={attributes.contentgCc} /></span>

                                </li>
                                <li class="text-base truncate"> <span class="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"><RichText.Content value={attributes.contentXYT} /></span>

                                </li>
                            </ul>
                        </div>
                        <div class="mt-5 text-sm"> <span class="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"><RichText.Content value={attributes.contentNFV} /><span aria-hidden="true"><RichText.Content value={attributes.contentEDq} /></span></span>
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
        