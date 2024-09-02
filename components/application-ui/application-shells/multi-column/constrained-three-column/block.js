
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/constrained-three-column', {
            title: 'constrained three column',
            icon: (<img src="data:image/jpeg;base64,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G7kWqIpmMbT7gsTNuiYiJjp03NFOrVjcFCItURTMY2n3dm3RMREx06bgoTop1asbuRaoimYxtPuCxM26JiImOnTc0U6tWNwUI9OYiMzEzjeeiwE3PTq+JUm56dXxIKAAAAEU+edeZx9oItURExEbT13BYibVExETG0dN3dFOvXjzdwUIi1RETERtPXcm1RMRExtHTcFidFOvXjzd3ItURExEbT13BYibVExETG0dN3dFOvXjzdwUIi1RETERtPXcm1RMRExtHTcFidFOvXjzd3ItURExEbT13BYibVExETG0dN3dFOvXjzdwUIi1RETERtPXcm1RMRExtHTcFidFOvXjzd3ItURExEbT13BYibVExETG0dN3dFOvXjzdwUIi1RETERtPXcm1RMRExtHTcFidFOvXjzdyLdERMRG09dwUIm1RNMRjaPd3RTq1Y3BQmLdERMRHXru5NqiaYjG0e4LE6KdWrG5FuiImIjr13BQibVE0xGNo93dFOrVjcFCYt0RExEdeu7k2qJpiMbR7gsTop1asbkW6IiYiOvXcFCJtUTTEY2j3d0U6tWNwUJi3RETER167uTaommIxtHuCxOinVqxuRboiJiI69dwUIm1RNMRjaPd3RTq1Y3BQmLdERMRHXru5NqiaYjG0e4LE6KdWrG5FuiImIjr13BQibVE0xGNo93dFOrVjcFCYt0RExEdeu7k2qJpiMbR7gsTop1asbkW6IiYiOvXcFCJtUTTEY2j3d0U6tWNwUJi3RETER167uTaommIxtHuCxOinVqxuRboiJiI69dwUIm1RNMRjaPd3RTq1Y3BQmLdERMRHXru5NqiaYjG0e4LE6KdWrG5FuiImIjr13BQibVE0xGNo93dFOrVjcFCYt0RExEdeu7mJommKYzT9/YFgAJuenV8SpNz06viQcAVAEx5p1ZnH2gFCYt0xExjaepNumYiMbR0BQ5pp1asbuRbpiJjG09QUJm3TMRGNo6O6adWrG4OiYt0xExjaepNumYiMbR0BQ5pp1asbuRbpiJjG09QUzufRPwqbdMxEY2joi5TTvVjfAPQAivFf8M4a/wCJ8P4hc1c7h6ZimInyznPWPbM4+ZTxHhPD8RXxFddd2K79VFeqmrE0VUfTNO23/l7wHzq/B7d7gOI4TieK4q9z5iarldcaoxjGnEYjGPtDS14Vw1nxGjjb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" />),
            category: 'common',
            attributes: {
  "contentBMh": {
    "type": "string",
    "default": "Search projects"
  },
  "contentkkR": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentxFu": {
    "type": "string",
    "default": "Documentation"
  },
  "contentqDG": {
    "type": "string",
    "default": "Support"
  },
  "contentNbs": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentqAc": {
    "type": "string",
    "default": "View Profile"
  },
  "contentUvo": {
    "type": "string",
    "default": "Settings"
  },
  "contentkbM": {
    "type": "string",
    "default": "Logout"
  },
  "contentNhT": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentQZa": {
    "type": "string",
    "default": "Support"
  },
  "contentdDd": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentSyv": {
    "type": "string",
    "default": "Settings"
  },
  "contenteAR": {
    "type": "string",
    "default": "Sign out"
  },
  "imageurlVpU": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-300.svg'
  },
  "imagealteAn": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlQGg": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517365830460-955ce3ccd263.jpeg'
  },
  "imagealtBPh": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgtBS": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgBnr": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h8m-8 6h16\"/>"
  },
  "svgaij": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
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
            value={ attributes.svgtBS }
            onChange={ ( value ) => {
              setAttributes({ svgtBS: value });
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
            value={ attributes.svgBnr }
            onChange={ ( value ) => {
              setAttributes({ svgBnr: value });
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
            value={ attributes.svgaij }
            onChange={ ( value ) => {
              setAttributes({ svgaij: value });
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
        <div className="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true"/>
        <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true"/>
        <div className="relative min-h-screen flex flex-col">
            <nav className="flex-shrink-0 bg-indigo-600">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex items-center px-2 lg:px-0 xl:w-64">
                            <div className="flex-shrink-0">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlVpU: media.url,
            imagealteAn: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlVpU } 
            alt={ attributes.imagealteAn } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <div className="w-full px-2 lg:px-6">
                                <label for="search" className="sr-only">
                                    <RichText tagName="span" value={attributes.contentBMh} default="Search projects" onChange={ (newtext) => { setAttributes({ contentBMh: newtext }); }} /></label>
                                <div className="relative text-indigo-200 focus-within:text-gray-400">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtBS }}
        >
      </svg>
      
                                    </div>
                                    <input id="search" name="search" className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm" placeholder="Search projects" type="search"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:hidden">
                            <button type="button" className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentkkR} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentkkR: newtext });
      }}
    /></span>

                                
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBnr }}
        >
      </svg>
      
                                
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaij }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="hidden lg:block lg:w-80">
                            <div className="flex items-center justify-end">
                                <div className="flex"> <span className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"><RichText tagName="span" value={attributes.contentxFu} default="Documentation" onChange={ (newtext) =>  {
        setAttributes({ contentxFu: newtext });
      }}
    /></span>
 <span className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"><RichText tagName="span" value={attributes.contentqDG} default="Support" onChange={ (newtext) =>  {
        setAttributes({ contentqDG: newtext });
      }}
    /></span>

                                </div>
                                <div className="ml-4 relative flex-shrink-0">
                                    <div>
                                        <button type="button" className="bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentNbs} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentNbs: newtext });
      }}
    /></span>

                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlQGg: media.url,
            imagealtBPh: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlQGg } 
            alt={ attributes.imagealtBPh } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                        </button>
                                    </div>
                                    <div className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentqAc} default="View Profile" onChange={ (newtext) =>  {
        setAttributes({ contentqAc: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentUvo} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentUvo: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentkbM} default="Logout" onChange={ (newtext) =>  {
        setAttributes({ contentkbM: newtext });
      }}
    /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3"> <span className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800"><RichText tagName="span" value={attributes.contentNhT} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentNhT: newtext });
      }}
    /></span>
 <span className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"><RichText tagName="span" value={attributes.contentQZa} default="Support" onChange={ (newtext) =>  {
        setAttributes({ contentQZa: newtext });
      }}
    /></span>

                    </div>
                    <div className="pt-4 pb-3 border-t border-indigo-800">
                        <div className="px-2"> <span className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"><RichText tagName="span" value={attributes.contentdDd} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentdDd: newtext });
      }}
    /></span>
 <span className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"><RichText tagName="span" value={attributes.contentSyv} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentSyv: newtext });
      }}
    /></span>
 <span className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"><RichText tagName="span" value={attributes.contenteAR} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contenteAR: newtext });
      }}
    /></span>

                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
                <div className="flex-1 min-w-0 bg-white xl:flex">
                    <div className="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white">
                        <div className="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                            <div className="h-full relative" style="min-height: 12rem">
                                <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg"/>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white lg:min-w-0 lg:flex-1">
                        <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
                            <div className="relative h-full" style="min-height: 36rem">
                                <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
                    <div className="h-full pl-6 py-6 lg:w-80">
                        <div className="h-full relative" style="min-height: 16rem">
                            <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg"/>
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
        <div class="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true"/>
        <div class="fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true"/>
        <div class="relative min-h-screen flex flex-col">
            <nav class="flex-shrink-0 bg-indigo-600">
                <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">
                        <div class="flex items-center px-2 lg:px-0 xl:w-64">
                            <div class="flex-shrink-0">
                                
      <img
            src={ attributes.imageurlVpU } 
            alt={ attributes.imagealteAn } 
            class="h-8 w-auto"
          />
                            </div>
                        </div>
                        <div class="flex-1 flex justify-center lg:justify-end">
                            <div class="w-full px-2 lg:px-6">
                                <label for="search" class="sr-only">
                                    <RichText.Content value={attributes.contentBMh} /></label>
                                <div class="relative text-indigo-200 focus-within:text-gray-400">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtBS }}
        >
      </svg>
      
                                    </div>
                                    <input id="search" name="search" class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm" placeholder="Search projects" type="search"/>
                                </div>
                            </div>
                        </div>
                        <div class="flex lg:hidden">
                            <button type="button" class="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentkkR} /></span>

                                
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBnr }}
        >
      </svg>
      
                                
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaij }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="hidden lg:block lg:w-80">
                            <div class="flex items-center justify-end">
                                <div class="flex"> <span class="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"><RichText.Content value={attributes.contentxFu} /></span>
 <span class="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"><RichText.Content value={attributes.contentqDG} /></span>

                                </div>
                                <div class="ml-4 relative flex-shrink-0">
                                    <div>
                                        <button type="button" class="bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentNbs} /></span>

                                            
      <img
            src={ attributes.imageurlQGg } 
            alt={ attributes.imagealtBPh } 
            class="h-8 w-8 rounded-full"
          />
                                        </button>
                                    </div>
                                    <div class="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentqAc} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentUvo} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentkbM} /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:hidden" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3"> <span class="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800"><RichText.Content value={attributes.contentNhT} /></span>
 <span class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"><RichText.Content value={attributes.contentQZa} /></span>

                    </div>
                    <div class="pt-4 pb-3 border-t border-indigo-800">
                        <div class="px-2"> <span class="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"><RichText.Content value={attributes.contentdDd} /></span>
 <span class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"><RichText.Content value={attributes.contentSyv} /></span>
 <span class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"><RichText.Content value={attributes.contenteAR} /></span>

                        </div>
                    </div>
                </div>
            </nav>
            <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
                <div class="flex-1 min-w-0 bg-white xl:flex">
                    <div class="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white">
                        <div class="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                            <div class="h-full relative" style="min-height: 12rem">
                                <div class="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg"/>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white lg:min-w-0 lg:flex-1">
                        <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
                            <div class="relative h-full" style="min-height: 36rem">
                                <div class="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
                    <div class="h-full pl-6 py-6 lg:w-80">
                        <div class="h-full relative" style="min-height: 16rem">
                            <div class="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg"/>
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
        