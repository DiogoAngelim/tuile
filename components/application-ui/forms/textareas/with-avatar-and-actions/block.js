
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-avatar-and-actions', {
            title: 'with avatar and actions',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentAKD": {
    "type": "string",
    "default": "Add your comment"
  },
  "contentwUx": {
    "type": "string",
    "default": "Attach a file"
  },
  "contenticg": {
    "type": "string",
    "default": " Your mood "
  },
  "contentwOp": {
    "type": "string",
    "default": " Add your mood "
  },
  "contentUPn": {
    "type": "string",
    "default": " Excited "
  },
  "contentafD": {
    "type": "string",
    "default": " Excited "
  },
  "contentfsd": {
    "type": "string",
    "default": " Loved "
  },
  "contentkli": {
    "type": "string",
    "default": " Happy "
  },
  "contentqaq": {
    "type": "string",
    "default": " Sad "
  },
  "contentcfy": {
    "type": "string",
    "default": " Thumbsy "
  },
  "contentEmD": {
    "type": "string",
    "default": " I feel nothing "
  },
  "contentjTH": {
    "type": "string",
    "default": "Post"
  },
  "imageurllnw": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1550525811-e5869dd03032.jpeg'
  },
  "imagealtmpt": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgVbB": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z\" clip-rule=\"evenodd\"/>"
  },
  "svgiXl": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgubS": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z\" clip-rule=\"evenodd\"/>"
  },
  "svgFwJ": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z\" clip-rule=\"evenodd\"/>"
  },
  "svgoMT": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z\" clip-rule=\"evenodd\"/>"
  },
  "svgRJD": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgdGQ": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z\" clip-rule=\"evenodd\"/>"
  },
  "svgfRZ": {
    "type": "string",
    "default": "<path d=\"M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z\"/>"
  },
  "svgbqH": {
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
            value={ attributes.svgVbB }
            onChange={ ( value ) => {
              setAttributes({ svgVbB: value });
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
            value={ attributes.svgiXl }
            onChange={ ( value ) => {
              setAttributes({ svgiXl: value });
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
            value={ attributes.svgubS }
            onChange={ ( value ) => {
              setAttributes({ svgubS: value });
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
            value={ attributes.svgFwJ }
            onChange={ ( value ) => {
              setAttributes({ svgFwJ: value });
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
            value={ attributes.svgoMT }
            onChange={ ( value ) => {
              setAttributes({ svgoMT: value });
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
            value={ attributes.svgRJD }
            onChange={ ( value ) => {
              setAttributes({ svgRJD: value });
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
            value={ attributes.svgdGQ }
            onChange={ ( value ) => {
              setAttributes({ svgdGQ: value });
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
            value={ attributes.svgfRZ }
            onChange={ ( value ) => {
              setAttributes({ svgfRZ: value });
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
            value={ attributes.svgbqH }
            onChange={ ( value ) => {
              setAttributes({ svgbqH: value });
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
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurllnw: media.url,
            imagealtmpt: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurllnw } 
            alt={ attributes.imagealtmpt } 
            onClick={ open } 
            className="inline-block h-10 w-10 rounded-full"
          /> 
        )} 
      />
            </div>
            <div className="min-w-0 flex-1">
                <form action="#" className="relative">
                    <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                        <label for="comment" className="sr-only">
                            <RichText tagName="span" value={attributes.contentAKD} default="Add your comment" onChange={ (newtext) => { setAttributes({ contentAKD: newtext }); }} /></label>
                        <textarea rows="3" name="comment" id="comment" className="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm" placeholder="Add your comment..."/>
                        <div className="py-2" aria-hidden="true">
                            <div className="py-px">
                                <div className="h-9"/>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
                        <div className="flex items-center space-x-5">
                            <div className="flex items-center">
                                <button type="button" className="-m-2.5 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500">
                                    
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVbB }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentwUx} default="Attach a file" onChange={ (newtext) =>  {
        setAttributes({ contentwUx: newtext });
      }}
    /></span>

                                </button>
                            </div>
                            <div className="flex items-center">
                                <div>
                                    <label id="listbox-label" className="sr-only">
                                        <RichText tagName="span" value={attributes.contenticg} default="Your mood" onChange={ (newtext) => { setAttributes({ contenticg: newtext }); }} /></label>
                                    <div className="relative">
                                        <button type="button" className="relative -m-2.5 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label"> <span className="flex items-center justify-center">
                    
                    <span>
                      
                      
      <svg
         className="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiXl }}
        >
      </svg>
      
                      <span className="sr-only"><RichText tagName="span" value={attributes.contentwOp} default="Add your mood" onChange={ (newtext) =>  {
        setAttributes({ contentwOp: newtext });
      }}
    /></span>
</span> <span>
                      <div className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center">
                        
                        
      <svg
         className="flex-shrink-0 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgubS }}
        >
      </svg>
      
                      </div>
                      <span className="sr-only"><RichText tagName="span" value={attributes.contentUPn} default="Excited" onChange={ (newtext) =>  {
        setAttributes({ contentUPn: newtext });
      }}
    /></span>
</span>
                                            </span>
                                        </button>
                                        <ul className="absolute z-10 mt-1 -ml-6 w-60 bg-white shadow rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-5">
                                            <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-0" role="option">
                                                <div className="flex items-center">
                                                    <div className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         className="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFwJ }}
        >
      </svg>
      
                                                    </div> <span className="ml-3 block font-medium truncate"><RichText tagName="span" value={attributes.contentafD} default="Excited" onChange={ (newtext) =>  {
        setAttributes({ contentafD: newtext });
      }}
    /></span>

                                                </div>
                                            </li>
                                            <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-1" role="option">
                                                <div className="flex items-center">
                                                    <div className="bg-pink-400 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         className="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoMT }}
        >
      </svg>
      
                                                    </div> <span className="ml-3 block font-medium truncate"><RichText tagName="span" value={attributes.contentfsd} default="Loved" onChange={ (newtext) =>  {
        setAttributes({ contentfsd: newtext });
      }}
    /></span>

                                                </div>
                                            </li>
                                            <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-2" role="option">
                                                <div className="flex items-center">
                                                    <div className="bg-green-400 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         className="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRJD }}
        >
      </svg>
      
                                                    </div> <span className="ml-3 block font-medium truncate"><RichText tagName="span" value={attributes.contentkli} default="Happy" onChange={ (newtext) =>  {
        setAttributes({ contentkli: newtext });
      }}
    /></span>

                                                </div>
                                            </li>
                                            <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-3" role="option">
                                                <div className="flex items-center">
                                                    <div className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         className="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdGQ }}
        >
      </svg>
      
                                                    </div> <span className="ml-3 block font-medium truncate"><RichText tagName="span" value={attributes.contentqaq} default="Sad" onChange={ (newtext) =>  {
        setAttributes({ contentqaq: newtext });
      }}
    /></span>

                                                </div>
                                            </li>
                                            <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-4" role="option">
                                                <div className="flex items-center">
                                                    <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         className="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfRZ }}
        >
      </svg>
      
                                                    </div> <span className="ml-3 block font-medium truncate"><RichText tagName="span" value={attributes.contentcfy} default="Thumbsy" onChange={ (newtext) =>  {
        setAttributes({ contentcfy: newtext });
      }}
    /></span>

                                                </div>
                                            </li>
                                            <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-5" role="option">
                                                <div className="flex items-center">
                                                    <div className="bg-transparent w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         className="text-gray-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbqH }}
        >
      </svg>
      
                                                    </div> <span className="ml-3 block font-medium truncate"><RichText tagName="span" value={attributes.contentEmD} default="I feel nothing" onChange={ (newtext) =>  {
        setAttributes({ contentEmD: newtext });
      }}
    /></span>

                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <RichText tagName="span" value={attributes.contentjTH} default="Post" onChange={ (newtext) => { setAttributes({ contentjTH: newtext }); }} /></button>
                        </div>
                    </div>
                </form>
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
        <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
                
      <img
            src={ attributes.imageurllnw } 
            alt={ attributes.imagealtmpt } 
            class="inline-block h-10 w-10 rounded-full"
          />
            </div>
            <div class="min-w-0 flex-1">
                <form action="#" class="relative">
                    <div class="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                        <label for="comment" class="sr-only">
                            <RichText.Content value={attributes.contentAKD} /></label>
                        <textarea rows="3" name="comment" id="comment" class="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm" placeholder="Add your comment..."/>
                        <div class="py-2" aria-hidden="true">
                            <div class="py-px">
                                <div class="h-9"/>
                            </div>
                        </div>
                    </div>
                    <div class="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
                        <div class="flex items-center space-x-5">
                            <div class="flex items-center">
                                <button type="button" class="-m-2.5 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500">
                                    
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVbB }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentwUx} /></span>

                                </button>
                            </div>
                            <div class="flex items-center">
                                <div>
                                    <label id="listbox-label" class="sr-only">
                                        <RichText.Content value={attributes.contenticg} /></label>
                                    <div class="relative">
                                        <button type="button" class="relative -m-2.5 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label"> <span class="flex items-center justify-center">
                    
                    <span>
                      
                      
      <svg
         class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiXl }}
        >
      </svg>
      
                      <span class="sr-only"><RichText.Content value={attributes.contentwOp} /></span>
</span> <span>
                      <div class="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center">
                        
                        
      <svg
         class="flex-shrink-0 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgubS }}
        >
      </svg>
      
                      </div>
                      <span class="sr-only"><RichText.Content value={attributes.contentUPn} /></span>
</span>
                                            </span>
                                        </button>
                                        <ul class="absolute z-10 mt-1 -ml-6 w-60 bg-white shadow rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-5">
                                            <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-0" role="option">
                                                <div class="flex items-center">
                                                    <div class="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         class="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFwJ }}
        >
      </svg>
      
                                                    </div> <span class="ml-3 block font-medium truncate"><RichText.Content value={attributes.contentafD} /></span>

                                                </div>
                                            </li>
                                            <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-1" role="option">
                                                <div class="flex items-center">
                                                    <div class="bg-pink-400 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         class="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoMT }}
        >
      </svg>
      
                                                    </div> <span class="ml-3 block font-medium truncate"><RichText.Content value={attributes.contentfsd} /></span>

                                                </div>
                                            </li>
                                            <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-2" role="option">
                                                <div class="flex items-center">
                                                    <div class="bg-green-400 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         class="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRJD }}
        >
      </svg>
      
                                                    </div> <span class="ml-3 block font-medium truncate"><RichText.Content value={attributes.contentkli} /></span>

                                                </div>
                                            </li>
                                            <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-3" role="option">
                                                <div class="flex items-center">
                                                    <div class="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         class="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdGQ }}
        >
      </svg>
      
                                                    </div> <span class="ml-3 block font-medium truncate"><RichText.Content value={attributes.contentqaq} /></span>

                                                </div>
                                            </li>
                                            <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-4" role="option">
                                                <div class="flex items-center">
                                                    <div class="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         class="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfRZ }}
        >
      </svg>
      
                                                    </div> <span class="ml-3 block font-medium truncate"><RichText.Content value={attributes.contentcfy} /></span>

                                                </div>
                                            </li>
                                            <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-5" role="option">
                                                <div class="flex items-center">
                                                    <div class="bg-transparent w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         class="text-gray-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbqH }}
        >
      </svg>
      
                                                    </div> <span class="ml-3 block font-medium truncate"><RichText.Content value={attributes.contentEmD} /></span>

                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-shrink-0">
                            <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <RichText.Content value={attributes.contentjTH} /></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        