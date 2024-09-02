
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-avatar-and-actions', {
            title: 'with avatar and actions',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentxqn": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentcBL": {
    "type": "string",
    "default": " @tom_cook "
  },
  "contentzaf": {
    "type": "string",
    "default": " Phone "
  },
  "contentdBK": {
    "type": "string",
    "default": " Email "
  },
  "imageurljng": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtOux": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgVJh": {
    "type": "string",
    "default": "<path d=\"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z\"/>"
  },
  "svgymC": {
    "type": "string",
    "default": "<path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"/>\n                            <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"/>"
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
            value={ attributes.svgVJh }
            onChange={ ( value ) => {
              setAttributes({ svgVJh: value });
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
            value={ attributes.svgymC }
            onChange={ ( value ) => {
              setAttributes({ svgymC: value });
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
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                <div className="ml-4 mt-4">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurljng: media.url,
            imagealtOux: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurljng } 
            alt={ attributes.imagealtOux } 
            onClick={ open } 
            className="h-12 w-12 rounded-full"
          /> 
        )} 
      />
                        </div>
                        <div className="ml-4">
                             <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentxqn} default="Tom Cook" onChange={ (newtext) =>  {
        setAttributes({ contentxqn: newtext });
      }}
    /></h3>

                            <p className="text-sm text-gray-500"> <span><RichText tagName="span" value={attributes.contentcBL} default="@tom_cook" onChange={ (newtext) =>  {
        setAttributes({ contentcBL: newtext });
      }}
    /></span>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="ml-4 mt-4 flex-shrink-0 flex">
                    <button type="button" className="relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        
      <svg
         className="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVJh }}
        >
      </svg>
       <span><RichText tagName="span" value={attributes.contentzaf} default="Phone" onChange={ (newtext) =>  {
        setAttributes({ contentzaf: newtext });
      }}
    /></span>

                    </button>
                    <button type="button" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        
      <svg
         className="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgymC }}
        >
      </svg>
       <span><RichText tagName="span" value={attributes.contentdBK} default="Email" onChange={ (newtext) =>  {
        setAttributes({ contentdBK: newtext });
      }}
    /></span>

                    </button>
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
        <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                <div class="ml-4 mt-4">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            
      <img
            src={ attributes.imageurljng } 
            alt={ attributes.imagealtOux } 
            class="h-12 w-12 rounded-full"
          />
                        </div>
                        <div class="ml-4">
                             <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentxqn} /></h3>

                            <p class="text-sm text-gray-500"> <span><RichText.Content value={attributes.contentcBL} /></span>

                            </p>
                        </div>
                    </div>
                </div>
                <div class="ml-4 mt-4 flex-shrink-0 flex">
                    <button type="button" class="relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        
      <svg
         class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVJh }}
        >
      </svg>
       <span><RichText.Content value={attributes.contentzaf} /></span>

                    </button>
                    <button type="button" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        
      <svg
         class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgymC }}
        >
      </svg>
       <span><RichText.Content value={attributes.contentdBK} /></span>

                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        