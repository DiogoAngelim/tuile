
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/contact-cards', {
            title: 'contact cards',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentEMj": {
    "type": "string",
    "default": "Jane Cooper"
  },
  "contentnHm": {
    "type": "string",
    "default": "Title"
  },
  "contentLOr": {
    "type": "string",
    "default": "Paradigm Representative"
  },
  "contentPVz": {
    "type": "string",
    "default": "Role"
  },
  "contentTua": {
    "type": "string",
    "default": "Admin"
  },
  "contentlOm": {
    "type": "string",
    "default": "Email"
  },
  "contentVkk": {
    "type": "string",
    "default": "Call"
  },
  "imageurlVMu": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1494790108377-be9c29b29330.jpeg'
  },
  "imagealtGpq": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgGxF": {
    "type": "string",
    "default": "<path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"/>\n              <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"/>"
  },
  "svgGib": {
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
            value={ attributes.svgGxF }
            onChange={ ( value ) => {
              setAttributes({ svgGxF: value });
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
            value={ attributes.svgGib }
            onChange={ ( value ) => {
              setAttributes({ svgGib: value });
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
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="flex-1 flex flex-col p-8">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlVMu: media.url,
            imagealtGpq: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlVMu } 
            alt={ attributes.imagealtGpq } 
            onClick={ open } 
            className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
          /> 
        )} 
      />
                     <h3 className="mt-6 text-gray-900 text-sm font-medium"><RichText tagName="span" value={attributes.contentEMj} default="Jane Cooper" onChange={ (newtext) =>  {
        setAttributes({ contentEMj: newtext });
      }}
    /></h3>

                    <dl className="mt-1 flex-grow flex flex-col justify-between"> <dt className="sr-only"><RichText tagName="span" value={attributes.contentnHm} default="Title" onChange={ (newtext) =>  {
        setAttributes({ contentnHm: newtext });
      }}
    /></dt>

                        <dd className="text-gray-500 text-sm">
                            <RichText tagName="span" value={attributes.contentLOr} default="Paradigm Representative" onChange={ (newtext) => { setAttributes({ contentLOr: newtext }); }} /></dd> <dt className="sr-only"><RichText tagName="span" value={attributes.contentPVz} default="Role" onChange={ (newtext) =>  {
        setAttributes({ contentPVz: newtext });
      }}
    /></dt>

                        <dd className="mt-3"> <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full"><RichText tagName="span" value={attributes.contentTua} default="Admin" onChange={ (newtext) =>  {
        setAttributes({ contentTua: newtext });
      }}
    /></span>

                        </dd>
                    </dl>
                </div>
                <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                        <div className="w-0 flex-1 flex"> <span className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
            
            
      <svg
         className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGxF }}
        >
      </svg>
      
            <span className="ml-3"><RichText tagName="span" value={attributes.contentlOm} default="Email" onChange={ (newtext) =>  {
        setAttributes({ contentlOm: newtext });
      }}
    /></span>
</span>
                        </div>
                        <div className="-ml-px w-0 flex-1 flex"> <span className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
            
            
      <svg
         className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGib }}
        >
      </svg>
      
            <span className="ml-3"><RichText tagName="span" value={attributes.contentVkk} default="Call" onChange={ (newtext) =>  {
        setAttributes({ contentVkk: newtext });
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
        <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                <div class="flex-1 flex flex-col p-8">
                    
      <img
            src={ attributes.imageurlVMu } 
            alt={ attributes.imagealtGpq } 
            class="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
          />
                     <h3 class="mt-6 text-gray-900 text-sm font-medium"><RichText.Content value={attributes.contentEMj} /></h3>

                    <dl class="mt-1 flex-grow flex flex-col justify-between"> <dt class="sr-only"><RichText.Content value={attributes.contentnHm} /></dt>

                        <dd class="text-gray-500 text-sm">
                            <RichText.Content value={attributes.contentLOr} /></dd> <dt class="sr-only"><RichText.Content value={attributes.contentPVz} /></dt>

                        <dd class="mt-3"> <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full"><RichText.Content value={attributes.contentTua} /></span>

                        </dd>
                    </dl>
                </div>
                <div>
                    <div class="-mt-px flex divide-x divide-gray-200">
                        <div class="w-0 flex-1 flex"> <span class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
            
            
      <svg
         class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGxF }}
        >
      </svg>
      
            <span class="ml-3"><RichText.Content value={attributes.contentlOm} /></span>
</span>
                        </div>
                        <div class="-ml-px w-0 flex-1 flex"> <span class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
            
            
      <svg
         class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGib }}
        >
      </svg>
      
            <span class="ml-3"><RichText.Content value={attributes.contentVkk} /></span>
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
        