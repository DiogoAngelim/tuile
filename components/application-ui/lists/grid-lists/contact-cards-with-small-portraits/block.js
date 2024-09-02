
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/contact-cards-with-small-portraits', {
            title: 'contact cards with small portraits',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentfnw": {
    "type": "string",
    "default": "Jane Cooper"
  },
  "contentDQr": {
    "type": "string",
    "default": "Admin"
  },
  "contentNNb": {
    "type": "string",
    "default": "Regional Paradigm Technician"
  },
  "contentEpv": {
    "type": "string",
    "default": "Email"
  },
  "contentNCr": {
    "type": "string",
    "default": "Call"
  },
  "imageurlkbg": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1494790108377-be9c29b29330.jpeg'
  },
  "imagealthpC": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgpBc": {
    "type": "string",
    "default": "<path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"/>\n              <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"/>"
  },
  "svgfZo": {
    "type": "string",
    "default": "<path d=\"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z\"/>"
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
            value={ attributes.svgpBc }
            onChange={ ( value ) => {
              setAttributes({ svgpBc: value });
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
            value={ attributes.svgfZo }
            onChange={ ( value ) => {
              setAttributes({ svgfZo: value });
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
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                    <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                             <h3 className="text-gray-900 text-sm font-medium truncate"><RichText tagName="span" value={attributes.contentfnw} default="Jane Cooper" onChange={ (newtext) =>  {
        setAttributes({ contentfnw: newtext });
      }}
    /></h3>
 <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"><RichText tagName="span" value={attributes.contentDQr} default="Admin" onChange={ (newtext) =>  {
        setAttributes({ contentDQr: newtext });
      }}
    /></span>

                        </div>
                        <p className="mt-1 text-gray-500 text-sm truncate">
                            <RichText tagName="span" value={attributes.contentNNb} default="Regional Paradigm Technician" onChange={ (newtext) => { setAttributes({ contentNNb: newtext }); }} /></p>
                    </div>
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlkbg: media.url,
            imagealthpC: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlkbg } 
            alt={ attributes.imagealthpC } 
            onClick={ open } 
            className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
          /> 
        )} 
      />
                </div>
                <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                        <div className="w-0 flex-1 flex"> <span className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
            
            
      <svg
         className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpBc }}
        >
      </svg>
      
            <span className="ml-3"><RichText tagName="span" value={attributes.contentEpv} default="Email" onChange={ (newtext) =>  {
        setAttributes({ contentEpv: newtext });
      }}
    /></span>
</span>
                        </div>
                        <div className="-ml-px w-0 flex-1 flex"> <span className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
            
            
      <svg
         className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfZo }}
        >
      </svg>
      
            <span className="ml-3"><RichText tagName="span" value={attributes.contentNCr} default="Call" onChange={ (newtext) =>  {
        setAttributes({ contentNCr: newtext });
      }}
    /></span>
</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
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
        <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div class="w-full flex items-center justify-between p-6 space-x-6">
                    <div class="flex-1 truncate">
                        <div class="flex items-center space-x-3">
                             <h3 class="text-gray-900 text-sm font-medium truncate"><RichText.Content value={attributes.contentfnw} /></h3>
 <span class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"><RichText.Content value={attributes.contentDQr} /></span>

                        </div>
                        <p class="mt-1 text-gray-500 text-sm truncate">
                            <RichText.Content value={attributes.contentNNb} /></p>
                    </div>
                    
      <img
            src={ attributes.imageurlkbg } 
            alt={ attributes.imagealthpC } 
            class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
          />
                </div>
                <div>
                    <div class="-mt-px flex divide-x divide-gray-200">
                        <div class="w-0 flex-1 flex"> <span class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
            
            
      <svg
         class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpBc }}
        >
      </svg>
      
            <span class="ml-3"><RichText.Content value={attributes.contentEpv} /></span>
</span>
                        </div>
                        <div class="-ml-px w-0 flex-1 flex"> <span class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
            
            
      <svg
         class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfZo }}
        >
      </svg>
      
            <span class="ml-3"><RichText.Content value={attributes.contentNCr} /></span>
</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
            );
            },
        });
        