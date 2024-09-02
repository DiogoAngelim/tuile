
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/light-nav-on-gray-background', {
            title: 'light nav on gray background',
            icon: (<img src="data:image/jpeg;base64,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au6JzUiZjv2/AGgrbJWtYtPlKKZK3nau4LjOc1ImY79vwWtkrWsWnykFhSmSt52ruic1ImY79vwBoK2yVrWLT5SimSt52ruC4znNSJmO/b8FrZK1rFp8pBYUpkredq7onNSJmO/b8AaCtsla1i0+Uopkredq7guM5zUiZjv2/Ba161rFp8pBYUpkredq7onNSJmJ37fgDQVtkrWsWnylFMlbztXcFxnOakTMTv2/Ba2StaxafKQWFKZK3nau6JzUiZid+34A0FbZK1rFp8pRTJW87V3BcZzmpEzE79vwWtkrWsWnykFhSmSt52ruic1ImYnft+ANBW2StaxafKUUyVvO1dwXGc5qRMxO/b8FrZK1rFp8pBYUpkredq7onNSszE77x+ANBWclYpFp8pRTLW87V33BcZzmpWZid94/BaclYpFp8pBYUplredq77onNSszE77x+ANBWclYpFp8pRTLW87V33BcZzmpWZid94/BaclYpFp8pBYUplredq77onNSszE77x+ANBWclYpFp8pRTLW87V33BcZzmpWZid94/BaclYpFp8pBYUplredq77onNSszE77x+ANBWb1ikWnylFctbztG+4LjO2alZmJ33haclYpz9AWFK5a3naN90WzUrMxO+8A0FZyVinP0RXLW87RvuC4ztmpWZid94WnJWKc/QFhSuWt52jfdFs1KzMTvvANBWclYpz9EVy1vO0b7guM7ZqVmYnfeFpyVinP0BaWeT7k/RNctbztG+6l8tImazuDYc855x44nblX09FK6ybW2jH3/3f4B1jjtruM7Tj7x/q/wn7ZPDn4Ubf7v8A6xyV1s2naMXf/d/hFtdxmYnH3j/AFf4B2Dk+2Tw5+FG3+7/AAV1s2naMXf/AHf4B1jjtruMzE4+8f6v8J+2Tw5+FG3+7/AOscldbNp2jF3/AN3+EW13GZicfeP9X+Adg5Ptk8OfhRt/u/wV1s2naMXf/d/gHWOO2u4zMTj7x/q/wn7ZPDn4Ubf7v8A6xyV1s2naMXf/AHf4RbXcZmJx94/1f4B2Dk+2Tw5+FG3+7/BXWzadoxd/93+AdY47a7jMxOPvH+r/AAt9snhz8Lt/u/wDqHJTWze20Y+/+7/DTxZvM07Vn1jfeQXx/cj6NIVrHZYAAAAAAAAAAAAAAAAAAAAAAAAAAGGCZtktaZlp4VP5YRiyeJv222/FoCLVrb70b7Fa1r92Nt0gKeFT+WFrVrb70b7JARWta/djbdXwqfywuAi1a2+9G+xWta/djbdICnhU/lha1a2+9G6QEVrWv3Y2V8Kn8sLgItWtvvRvsVrWv3Y2SAp4VP5YWtWtvvRvskBFa1r92NlfCp/LC4CLVrb70b7Fa1r92NkgKeFT+WFrVrb70b7JARWta/djZXwqfywuAi1a2+9G+xWta/djZICnhU/lha1a2+9G+yQEVrWv3Y2R4dP5YWARNa2iImN9itK1+7GyQFfDp/LCZrW0RExvskBFaVr92NkeHT+WFgETWtoiJjfYrStfuxskBXw6fywma1tERMb7JARWla/djZHh0/lhYBE1raIiY32K0rX7sbJAV8On8sJmtbRETG+yQEVpWv3Y2R4dP5YWARNa2iImN9itK1+7GyQFfDpP8MJmtZiImN4hICK0rX7sRCPDpP8ADCwCJrWYiJjeIK0rX7sRCQFfDpP8MJmtZiImN4hICK0rX7sRCPDpP8MLAImtZiImN4grStfuxEJAV8Ok/wAMJmtZiImN4hICK0rX7sRCPDpP8MLAImtZiImN4grStfuxEJAV8Ok/wwma1mNpjeISArWlazvWIgnHSZ3msLAImtZiImO0IrStZ3rEQsArOOkzvNYTNazERMdoSArWlazvWIgnHSZ3msLAImtZiImO0IrStZ3rEQsArOOkzvNYTNazERMdoSArWlazvWIgnHSZ3msLAImtZiImO0IrStZ3rEQsArOOkzvNYTNazERMdoSArWlazvWIgnHSZ3msbrAImtZrxmO0eiK0rWd61iJWAVnHSZ3msbpmtZrxmO0eiQFa0rWd61iJJx0md5rG6wCJrWa8ZjtHoitK1netYiVgFZx0md5rG6ZrWa8ZjtHokBWtK1netYiScdJneaxusAia1mvGY7R6IrStZ3rWIlYBWcdJneaxuma1mvGY7R6JAVrStZ3rWIknHSZ3msbrAImtZrxmO3siKVrO8ViJWAVnHSZ3msbp41mvHbt7JAVilazvFYiScdJneaxusAjjWa8du3siKVrO8ViJWAVnHSZ3msbp41mvHbt7JAVilazvFYiScdJneaxusAjjWa8du3siKVrO8ViJWAVnHSZ3msbp41mvHbt7JAVilazvFYiUWx0md5rG64DK2Os14zHb2UjFWs7xWIlv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" />),
            category: 'common',
            attributes: {
  "contentDJB": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentwRF": {
    "type": "string",
    "default": "Team"
  },
  "contentorQ": {
    "type": "string",
    "default": "Projects"
  },
  "contentOBJ": {
    "type": "string",
    "default": "Calendar"
  },
  "contentKqB": {
    "type": "string",
    "default": "View notifications"
  },
  "contentdAI": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentgpj": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentWSY": {
    "type": "string",
    "default": "Settings"
  },
  "contentzYj": {
    "type": "string",
    "default": "Sign out"
  },
  "contentgkB": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentDgI": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentpHX": {
    "type": "string",
    "default": "Team"
  },
  "contentCaw": {
    "type": "string",
    "default": "Projects"
  },
  "contenteab": {
    "type": "string",
    "default": "Calendar"
  },
  "contentjAj": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentCxE": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contenthrA": {
    "type": "string",
    "default": "View notifications"
  },
  "contentjen": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentDbw": {
    "type": "string",
    "default": "Settings"
  },
  "contentgnf": {
    "type": "string",
    "default": "Sign out"
  },
  "contentQVL": {
    "type": "string",
    "default": "Dashboard"
  },
  "imageurlOOj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtbsQ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlIhK": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
  },
  "imagealtrfW": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlsUW": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtONY": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlBGO": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtvgE": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgpXt": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgfnp": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgvwa": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgqey": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
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
            value={ attributes.svgpXt }
            onChange={ ( value ) => {
              setAttributes({ svgpXt: value });
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
            value={ attributes.svgfnp }
            onChange={ ( value ) => {
              setAttributes({ svgfnp: value });
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
            value={ attributes.svgvwa }
            onChange={ ( value ) => {
              setAttributes({ svgvwa: value });
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
            value={ attributes.svgqey }
            onChange={ ( value ) => {
              setAttributes({ svgqey: value });
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
        <div className="min-h-full">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlOOj: media.url,
            imagealtbsQ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlOOj } 
            alt={ attributes.imagealtbsQ } 
            onClick={ open } 
            className="block lg:hidden h-8 w-auto"
          /> 
        )} 
      />
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlIhK: media.url,
            imagealtrfW: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlIhK } 
            alt={ attributes.imagealtrfW } 
            onClick={ open } 
            className="hidden lg:block h-8 w-auto"
          /> 
        )} 
      />
                            </div>
                            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8"> <span className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentDJB} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentDJB: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentwRF} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentwRF: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentorQ} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentorQ: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentOBJ} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentOBJ: newtext });
      }}
    /></span>

                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            <button type="button" className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentKqB} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentKqB: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpXt }}
        >
      </svg>
      
                            </button>
                            <div className="ml-3 relative">
                                <div>
                                    <button type="button" className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentdAI} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentdAI: newtext });
      }}
    /></span>

                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlsUW: media.url,
            imagealtONY: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlsUW } 
            alt={ attributes.imagealtONY } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                    </button>
                                </div>
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentgpj} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentgpj: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentWSY} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentWSY: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentzYj} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentzYj: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentgkB} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentgkB: newtext });
      }}
    /></span>

                                
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfnp }}
        >
      </svg>
      
                                
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvwa }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden" id="mobile-menu">
                    <div className="pt-2 pb-3 space-y-1"> <span className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentDgI} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentDgI: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentpHX} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentpHX: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentCaw} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentCaw: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contenteab} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contenteab: newtext });
      }}
    /></span>

                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlBGO: media.url,
            imagealtvgE: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlBGO } 
            alt={ attributes.imagealtvgE } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-gray-800">
                                    <RichText tagName="span" value={attributes.contentjAj} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contentjAj: newtext }); }} /></div>
                                <div className="text-sm font-medium text-gray-500">
                                    <RichText tagName="span" value={attributes.contentCxE} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentCxE: newtext }); }} /></div>
                            </div>
                            <button type="button" className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contenthrA} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contenthrA: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqey }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="mt-3 space-y-1"> <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentjen} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentjen: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentDbw} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentDbw: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentgnf} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentgnf: newtext });
      }}
    /></span>

                        </div>
                    </div>
                </div>
            </nav>
            <div className="py-10">
                <header>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <h1 className="text-3xl font-bold leading-tight text-gray-900"><RichText tagName="span" value={attributes.contentQVL} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentQVL: newtext });
      }}
    /></h1>

                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="px-4 py-8 sm:px-0">
                            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"/>
                        </div>
                    </div>
                </main>
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
        <div class="min-h-full">
            <nav class="bg-white shadow-sm">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <div class="flex-shrink-0 flex items-center">
                                
      <img
            src={ attributes.imageurlOOj } 
            alt={ attributes.imagealtbsQ } 
            class="block lg:hidden h-8 w-auto"
          />
                                
      <img
            src={ attributes.imageurlIhK } 
            alt={ attributes.imagealtrfW } 
            class="hidden lg:block h-8 w-auto"
          />
                            </div>
                            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8"> <span class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" aria-current="page"><RichText.Content value={attributes.contentDJB} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentwRF} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentorQ} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentOBJ} /></span>

                            </div>
                        </div>
                        <div class="hidden sm:ml-6 sm:flex sm:items-center">
                            <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentKqB} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpXt }}
        >
      </svg>
      
                            </button>
                            <div class="ml-3 relative">
                                <div>
                                    <button type="button" class="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentdAI} /></span>

                                        
      <img
            src={ attributes.imageurlsUW } 
            alt={ attributes.imagealtONY } 
            class="h-8 w-8 rounded-full"
          />
                                    </button>
                                </div>
                                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentgpj} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentWSY} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentzYj} /></span>

                                </div>
                            </div>
                        </div>
                        <div class="-mr-2 flex items-center sm:hidden">
                            <button type="button" class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentgkB} /></span>

                                
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfnp }}
        >
      </svg>
      
                                
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvwa }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div class="sm:hidden" id="mobile-menu">
                    <div class="pt-2 pb-3 space-y-1"> <span class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" aria-current="page"><RichText.Content value={attributes.contentDgI} /></span>
 <span class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentpHX} /></span>
 <span class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentCaw} /></span>
 <span class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contenteab} /></span>

                    </div>
                    <div class="pt-4 pb-3 border-t border-gray-200">
                        <div class="flex items-center px-4">
                            <div class="flex-shrink-0">
                                
      <img
            src={ attributes.imageurlBGO } 
            alt={ attributes.imagealtvgE } 
            class="h-10 w-10 rounded-full"
          />
                            </div>
                            <div class="ml-3">
                                <div class="text-base font-medium text-gray-800">
                                    <RichText.Content value={attributes.contentjAj} /></div>
                                <div class="text-sm font-medium text-gray-500">
                                    <RichText.Content value={attributes.contentCxE} /></div>
                            </div>
                            <button type="button" class="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contenthrA} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqey }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="mt-3 space-y-1"> <span class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText.Content value={attributes.contentjen} /></span>
 <span class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText.Content value={attributes.contentDbw} /></span>
 <span class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText.Content value={attributes.contentgnf} /></span>

                        </div>
                    </div>
                </div>
            </nav>
            <div class="py-10">
                <header>
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <h1 class="text-3xl font-bold leading-tight text-gray-900"><RichText.Content value={attributes.contentQVL} /></h1>

                    </div>
                </header>
                <main>
                    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div class="px-4 py-8 sm:px-0">
                            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"/>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        