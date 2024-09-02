
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-underline-and-actions', {
            title: 'with underline and actions',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentMZP": {
    "type": "string",
    "default": "Add your comment"
  },
  "contentVIT": {
    "type": "string",
    "default": "Attach a file"
  },
  "contentNXV": {
    "type": "string",
    "default": " Your mood "
  },
  "contentSnn": {
    "type": "string",
    "default": " Add your mood "
  },
  "contentfmS": {
    "type": "string",
    "default": " Excited "
  },
  "contentzIR": {
    "type": "string",
    "default": " Excited "
  },
  "contenteHu": {
    "type": "string",
    "default": " Loved "
  },
  "contentYyD": {
    "type": "string",
    "default": " Happy "
  },
  "contentunm": {
    "type": "string",
    "default": " Sad "
  },
  "contentLlg": {
    "type": "string",
    "default": " Thumbsy "
  },
  "contentiFH": {
    "type": "string",
    "default": " I feel nothing "
  },
  "contentIGK": {
    "type": "string",
    "default": "Post"
  },
  "imageurlvAw": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1550525811-e5869dd03032.jpeg'
  },
  "imagealtZgY": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgHAF": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13\"/>"
  },
  "svgbPt": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgTsO": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z\" clip-rule=\"evenodd\"/>"
  },
  "svgCbw": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z\" clip-rule=\"evenodd\"/>"
  },
  "svgmIr": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z\" clip-rule=\"evenodd\"/>"
  },
  "svgYwg": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z\" clip-rule=\"evenodd\"/>"
  },
  "svguuk": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z\" clip-rule=\"evenodd\"/>"
  },
  "svgshH": {
    "type": "string",
    "default": "<path d=\"M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z\"/>"
  },
  "svgqHS": {
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
            value={ attributes.svgHAF }
            onChange={ ( value ) => {
              setAttributes({ svgHAF: value });
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
            value={ attributes.svgbPt }
            onChange={ ( value ) => {
              setAttributes({ svgbPt: value });
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
            value={ attributes.svgTsO }
            onChange={ ( value ) => {
              setAttributes({ svgTsO: value });
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
            value={ attributes.svgCbw }
            onChange={ ( value ) => {
              setAttributes({ svgCbw: value });
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
            value={ attributes.svgmIr }
            onChange={ ( value ) => {
              setAttributes({ svgmIr: value });
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
            value={ attributes.svgYwg }
            onChange={ ( value ) => {
              setAttributes({ svgYwg: value });
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
            value={ attributes.svguuk }
            onChange={ ( value ) => {
              setAttributes({ svguuk: value });
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
            value={ attributes.svgshH }
            onChange={ ( value ) => {
              setAttributes({ svgshH: value });
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
            value={ attributes.svgqHS }
            onChange={ ( value ) => {
              setAttributes({ svgqHS: value });
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
            imageurlvAw: media.url,
            imagealtZgY: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlvAw } 
            alt={ attributes.imagealtZgY } 
            onClick={ open } 
            className="inline-block h-10 w-10 rounded-full"
          /> 
        )} 
      />
            </div>
            <div className="min-w-0 flex-1">
                <form action="#">
                    <div className="border-b border-gray-200 focus-within:border-indigo-600">
                        <label for="comment" className="sr-only">
                            <RichText tagName="span" value={attributes.contentMZP} default="Add your comment" onChange={ (newtext) => { setAttributes({ contentMZP: newtext }); }} /></label>
                        <textarea rows="3" name="comment" id="comment" className="block w-full border-0 border-b border-transparent p-0 pb-2 resize-none focus:ring-0 focus:border-indigo-600 sm:text-sm" placeholder="Add your comment..."/>
                    </div>
                    <div className="pt-2 flex justify-between">
                        <div className="flex items-center space-x-5">
                            <div className="flow-root">
                                <button type="button" className="-m-2 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500">
                                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHAF }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentVIT} default="Attach a file" onChange={ (newtext) =>  {
        setAttributes({ contentVIT: newtext });
      }}
    /></span>

                                </button>
                            </div>
                            <div className="flow-root">
                                <div>
                                    <label id="listbox-label" className="sr-only">
                                        <RichText tagName="span" value={attributes.contentNXV} default="Your mood" onChange={ (newtext) => { setAttributes({ contentNXV: newtext }); }} /></label>
                                    <div className="relative">
                                        <button type="button" className="relative -m-2 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label"> <span className="flex items-center justify-center">
                    
                    <span>
                      
                      
      <svg
         className="flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbPt }}
        >
      </svg>
      
                      <span className="sr-only"><RichText tagName="span" value={attributes.contentSnn} default="Add your mood" onChange={ (newtext) =>  {
        setAttributes({ contentSnn: newtext });
      }}
    /></span>
</span> <span>
                      <div className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center">
                        
                        
      <svg
         className="flex-shrink-0 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTsO }}
        >
      </svg>
      
                      </div>
                      <span className="sr-only"><RichText tagName="span" value={attributes.contentfmS} default="Excited" onChange={ (newtext) =>  {
        setAttributes({ contentfmS: newtext });
      }}
    /></span>
</span>
                                            </span>
                                        </button>
                                        <ul className="absolute z-10 -ml-6 w-60 bg-white shadow rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-5">
                                            <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-0" role="option">
                                                <div className="flex items-center">
                                                    <div className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         className="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCbw }}
        >
      </svg>
      
                                                    </div> <span className="ml-3 block font-medium truncate"><RichText tagName="span" value={attributes.contentzIR} default="Excited" onChange={ (newtext) =>  {
        setAttributes({ contentzIR: newtext });
      }}
    /></span>

                                                </div>
                                            </li>
                                            <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-1" role="option">
                                                <div className="flex items-center">
                                                    <div className="bg-pink-400 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         className="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmIr }}
        >
      </svg>
      
                                                    </div> <span className="ml-3 block font-medium truncate"><RichText tagName="span" value={attributes.contenteHu} default="Loved" onChange={ (newtext) =>  {
        setAttributes({ contenteHu: newtext });
      }}
    /></span>

                                                </div>
                                            </li>
                                            <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-2" role="option">
                                                <div className="flex items-center">
                                                    <div className="bg-green-400 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         className="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYwg }}
        >
      </svg>
      
                                                    </div> <span className="ml-3 block font-medium truncate"><RichText tagName="span" value={attributes.contentYyD} default="Happy" onChange={ (newtext) =>  {
        setAttributes({ contentYyD: newtext });
      }}
    /></span>

                                                </div>
                                            </li>
                                            <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-3" role="option">
                                                <div className="flex items-center">
                                                    <div className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         className="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguuk }}
        >
      </svg>
      
                                                    </div> <span className="ml-3 block font-medium truncate"><RichText tagName="span" value={attributes.contentunm} default="Sad" onChange={ (newtext) =>  {
        setAttributes({ contentunm: newtext });
      }}
    /></span>

                                                </div>
                                            </li>
                                            <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-4" role="option">
                                                <div className="flex items-center">
                                                    <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         className="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgshH }}
        >
      </svg>
      
                                                    </div> <span className="ml-3 block font-medium truncate"><RichText tagName="span" value={attributes.contentLlg} default="Thumbsy" onChange={ (newtext) =>  {
        setAttributes({ contentLlg: newtext });
      }}
    /></span>

                                                </div>
                                            </li>
                                            <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-5" role="option">
                                                <div className="flex items-center">
                                                    <div className="bg-transparent w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         className="text-gray-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqHS }}
        >
      </svg>
      
                                                    </div> <span className="ml-3 block font-medium truncate"><RichText tagName="span" value={attributes.contentiFH} default="I feel nothing" onChange={ (newtext) =>  {
        setAttributes({ contentiFH: newtext });
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
                                <RichText tagName="span" value={attributes.contentIGK} default="Post" onChange={ (newtext) => { setAttributes({ contentIGK: newtext }); }} /></button>
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
            src={ attributes.imageurlvAw } 
            alt={ attributes.imagealtZgY } 
            class="inline-block h-10 w-10 rounded-full"
          />
            </div>
            <div class="min-w-0 flex-1">
                <form action="#">
                    <div class="border-b border-gray-200 focus-within:border-indigo-600">
                        <label for="comment" class="sr-only">
                            <RichText.Content value={attributes.contentMZP} /></label>
                        <textarea rows="3" name="comment" id="comment" class="block w-full border-0 border-b border-transparent p-0 pb-2 resize-none focus:ring-0 focus:border-indigo-600 sm:text-sm" placeholder="Add your comment..."/>
                    </div>
                    <div class="pt-2 flex justify-between">
                        <div class="flex items-center space-x-5">
                            <div class="flow-root">
                                <button type="button" class="-m-2 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500">
                                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHAF }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentVIT} /></span>

                                </button>
                            </div>
                            <div class="flow-root">
                                <div>
                                    <label id="listbox-label" class="sr-only">
                                        <RichText.Content value={attributes.contentNXV} /></label>
                                    <div class="relative">
                                        <button type="button" class="relative -m-2 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label"> <span class="flex items-center justify-center">
                    
                    <span>
                      
                      
      <svg
         class="flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbPt }}
        >
      </svg>
      
                      <span class="sr-only"><RichText.Content value={attributes.contentSnn} /></span>
</span> <span>
                      <div class="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center">
                        
                        
      <svg
         class="flex-shrink-0 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTsO }}
        >
      </svg>
      
                      </div>
                      <span class="sr-only"><RichText.Content value={attributes.contentfmS} /></span>
</span>
                                            </span>
                                        </button>
                                        <ul class="absolute z-10 -ml-6 w-60 bg-white shadow rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-5">
                                            <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-0" role="option">
                                                <div class="flex items-center">
                                                    <div class="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         class="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCbw }}
        >
      </svg>
      
                                                    </div> <span class="ml-3 block font-medium truncate"><RichText.Content value={attributes.contentzIR} /></span>

                                                </div>
                                            </li>
                                            <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-1" role="option">
                                                <div class="flex items-center">
                                                    <div class="bg-pink-400 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         class="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmIr }}
        >
      </svg>
      
                                                    </div> <span class="ml-3 block font-medium truncate"><RichText.Content value={attributes.contenteHu} /></span>

                                                </div>
                                            </li>
                                            <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-2" role="option">
                                                <div class="flex items-center">
                                                    <div class="bg-green-400 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         class="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYwg }}
        >
      </svg>
      
                                                    </div> <span class="ml-3 block font-medium truncate"><RichText.Content value={attributes.contentYyD} /></span>

                                                </div>
                                            </li>
                                            <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-3" role="option">
                                                <div class="flex items-center">
                                                    <div class="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         class="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguuk }}
        >
      </svg>
      
                                                    </div> <span class="ml-3 block font-medium truncate"><RichText.Content value={attributes.contentunm} /></span>

                                                </div>
                                            </li>
                                            <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-4" role="option">
                                                <div class="flex items-center">
                                                    <div class="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         class="text-white flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgshH }}
        >
      </svg>
      
                                                    </div> <span class="ml-3 block font-medium truncate"><RichText.Content value={attributes.contentLlg} /></span>

                                                </div>
                                            </li>
                                            <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-5" role="option">
                                                <div class="flex items-center">
                                                    <div class="bg-transparent w-8 h-8 rounded-full flex items-center justify-center">
                                                        
      <svg
         class="text-gray-400 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqHS }}
        >
      </svg>
      
                                                    </div> <span class="ml-3 block font-medium truncate"><RichText.Content value={attributes.contentiFH} /></span>

                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-shrink-0">
                            <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <RichText.Content value={attributes.contentIGK} /></button>
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
        