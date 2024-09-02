
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-cards', {
            title: 'simple cards',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentKJp": {
    "type": "string",
    "default": "Pinned Projects"
  },
  "contentbXC": {
    "type": "string",
    "default": "GA"
  },
  "contentrPU": {
    "type": "string",
    "default": "Graph API"
  },
  "contentLMS": {
    "type": "string",
    "default": "16 Members"
  },
  "contentFNH": {
    "type": "string",
    "default": "Open options"
  },
  "contentjkL": {
    "type": "string",
    "default": "CD"
  },
  "contentHGH": {
    "type": "string",
    "default": "Component Design"
  },
  "contentIMu": {
    "type": "string",
    "default": "12 Members"
  },
  "contentPbW": {
    "type": "string",
    "default": "Open options"
  },
  "contentbaL": {
    "type": "string",
    "default": "T"
  },
  "contentcwG": {
    "type": "string",
    "default": "Templates"
  },
  "contentLDl": {
    "type": "string",
    "default": "16 Members"
  },
  "contentzYh": {
    "type": "string",
    "default": "Open options"
  },
  "contentRwA": {
    "type": "string",
    "default": "RC"
  },
  "contentvss": {
    "type": "string",
    "default": "React Components"
  },
  "contentXND": {
    "type": "string",
    "default": "8 Members"
  },
  "contenttsm": {
    "type": "string",
    "default": "Open options"
  },
  "svgbIj": {
    "type": "string",
    "default": "<path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"/>"
  },
  "svgdDr": {
    "type": "string",
    "default": "<path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"/>"
  },
  "svgkUy": {
    "type": "string",
    "default": "<path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"/>"
  },
  "svgwOt": {
    "type": "string",
    "default": "<path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"/>"
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
            value={ attributes.svgbIj }
            onChange={ ( value ) => {
              setAttributes({ svgbIj: value });
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
            value={ attributes.svgdDr }
            onChange={ ( value ) => {
              setAttributes({ svgdDr: value });
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
            value={ attributes.svgkUy }
            onChange={ ( value ) => {
              setAttributes({ svgkUy: value });
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
            value={ attributes.svgwOt }
            onChange={ ( value ) => {
              setAttributes({ svgwOt: value });
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
             <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide"><RichText tagName="span" value={attributes.contentKJp} default="Pinned Projects" onChange={ (newtext) =>  {
        setAttributes({ contentKJp: newtext });
      }}
    /></h2>

            <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <li className="col-span-1 flex shadow-sm rounded-md">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md">
                        <RichText tagName="span" value={attributes.contentbXC} default="GA" onChange={ (newtext) => { setAttributes({ contentbXC: newtext }); }} /></div>
                    <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                        <div className="flex-1 px-4 py-2 text-sm truncate"> <span className="text-gray-900 font-medium hover:text-gray-600"><RichText tagName="span" value={attributes.contentrPU} default="Graph API" onChange={ (newtext) =>  {
        setAttributes({ contentrPU: newtext });
      }}
    /></span>

                            <p className="text-gray-500">
                                <RichText tagName="span" value={attributes.contentLMS} default="16 Members" onChange={ (newtext) => { setAttributes({ contentLMS: newtext }); }} /></p>
                        </div>
                        <div className="flex-shrink-0 pr-2">
                            <button type="button" className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentFNH} default="Open options" onChange={ (newtext) =>  {
        setAttributes({ contentFNH: newtext });
      }}
    /></span>

                                
      <svg
         className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbIj }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </li>
                <li className="col-span-1 flex shadow-sm rounded-md">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md">
                        <RichText tagName="span" value={attributes.contentjkL} default="CD" onChange={ (newtext) => { setAttributes({ contentjkL: newtext }); }} /></div>
                    <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                        <div className="flex-1 px-4 py-2 text-sm truncate"> <span className="text-gray-900 font-medium hover:text-gray-600"><RichText tagName="span" value={attributes.contentHGH} default="Component Design" onChange={ (newtext) =>  {
        setAttributes({ contentHGH: newtext });
      }}
    /></span>

                            <p className="text-gray-500">
                                <RichText tagName="span" value={attributes.contentIMu} default="12 Members" onChange={ (newtext) => { setAttributes({ contentIMu: newtext }); }} /></p>
                        </div>
                        <div className="flex-shrink-0 pr-2">
                            <button type="button" className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentPbW} default="Open options" onChange={ (newtext) =>  {
        setAttributes({ contentPbW: newtext });
      }}
    /></span>

                                
      <svg
         className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdDr }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </li>
                <li className="col-span-1 flex shadow-sm rounded-md">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 bg-yellow-500 text-white text-sm font-medium rounded-l-md">
                        <RichText tagName="span" value={attributes.contentbaL} default="T" onChange={ (newtext) => { setAttributes({ contentbaL: newtext }); }} /></div>
                    <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                        <div className="flex-1 px-4 py-2 text-sm truncate"> <span className="text-gray-900 font-medium hover:text-gray-600"><RichText tagName="span" value={attributes.contentcwG} default="Templates" onChange={ (newtext) =>  {
        setAttributes({ contentcwG: newtext });
      }}
    /></span>

                            <p className="text-gray-500">
                                <RichText tagName="span" value={attributes.contentLDl} default="16 Members" onChange={ (newtext) => { setAttributes({ contentLDl: newtext }); }} /></p>
                        </div>
                        <div className="flex-shrink-0 pr-2">
                            <button type="button" className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentzYh} default="Open options" onChange={ (newtext) =>  {
        setAttributes({ contentzYh: newtext });
      }}
    /></span>

                                
      <svg
         className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkUy }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </li>
                <li className="col-span-1 flex shadow-sm rounded-md">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 bg-green-500 text-white text-sm font-medium rounded-l-md">
                        <RichText tagName="span" value={attributes.contentRwA} default="RC" onChange={ (newtext) => { setAttributes({ contentRwA: newtext }); }} /></div>
                    <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                        <div className="flex-1 px-4 py-2 text-sm truncate"> <span className="text-gray-900 font-medium hover:text-gray-600"><RichText tagName="span" value={attributes.contentvss} default="React Components" onChange={ (newtext) =>  {
        setAttributes({ contentvss: newtext });
      }}
    /></span>

                            <p className="text-gray-500">
                                <RichText tagName="span" value={attributes.contentXND} default="8 Members" onChange={ (newtext) => { setAttributes({ contentXND: newtext }); }} /></p>
                        </div>
                        <div className="flex-shrink-0 pr-2">
                            <button type="button" className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contenttsm} default="Open options" onChange={ (newtext) =>  {
        setAttributes({ contenttsm: newtext });
      }}
    /></span>

                                
      <svg
         className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwOt }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
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
             <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide"><RichText.Content value={attributes.contentKJp} /></h2>

            <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <li class="col-span-1 flex shadow-sm rounded-md">
                    <div class="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md">
                        <RichText.Content value={attributes.contentbXC} /></div>
                    <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                        <div class="flex-1 px-4 py-2 text-sm truncate"> <span class="text-gray-900 font-medium hover:text-gray-600"><RichText.Content value={attributes.contentrPU} /></span>

                            <p class="text-gray-500">
                                <RichText.Content value={attributes.contentLMS} /></p>
                        </div>
                        <div class="flex-shrink-0 pr-2">
                            <button type="button" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentFNH} /></span>

                                
      <svg
         class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgbIj }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </li>
                <li class="col-span-1 flex shadow-sm rounded-md">
                    <div class="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md">
                        <RichText.Content value={attributes.contentjkL} /></div>
                    <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                        <div class="flex-1 px-4 py-2 text-sm truncate"> <span class="text-gray-900 font-medium hover:text-gray-600"><RichText.Content value={attributes.contentHGH} /></span>

                            <p class="text-gray-500">
                                <RichText.Content value={attributes.contentIMu} /></p>
                        </div>
                        <div class="flex-shrink-0 pr-2">
                            <button type="button" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentPbW} /></span>

                                
      <svg
         class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdDr }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </li>
                <li class="col-span-1 flex shadow-sm rounded-md">
                    <div class="flex-shrink-0 flex items-center justify-center w-16 bg-yellow-500 text-white text-sm font-medium rounded-l-md">
                        <RichText.Content value={attributes.contentbaL} /></div>
                    <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                        <div class="flex-1 px-4 py-2 text-sm truncate"> <span class="text-gray-900 font-medium hover:text-gray-600"><RichText.Content value={attributes.contentcwG} /></span>

                            <p class="text-gray-500">
                                <RichText.Content value={attributes.contentLDl} /></p>
                        </div>
                        <div class="flex-shrink-0 pr-2">
                            <button type="button" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentzYh} /></span>

                                
      <svg
         class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkUy }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </li>
                <li class="col-span-1 flex shadow-sm rounded-md">
                    <div class="flex-shrink-0 flex items-center justify-center w-16 bg-green-500 text-white text-sm font-medium rounded-l-md">
                        <RichText.Content value={attributes.contentRwA} /></div>
                    <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                        <div class="flex-1 px-4 py-2 text-sm truncate"> <span class="text-gray-900 font-medium hover:text-gray-600"><RichText.Content value={attributes.contentvss} /></span>

                            <p class="text-gray-500">
                                <RichText.Content value={attributes.contentXND} /></p>
                        </div>
                        <div class="flex-shrink-0 pr-2">
                            <button type="button" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contenttsm} /></span>

                                
      <svg
         class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwOt }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
            );
            },
        });
        