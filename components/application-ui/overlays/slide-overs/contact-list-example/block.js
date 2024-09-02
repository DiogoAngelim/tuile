
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/contact-list-example', {
            title: 'contact list example',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentRGH": {
    "type": "string",
    "default": "Team"
  },
  "contentvVy": {
    "type": "string",
    "default": "Close panel"
  },
  "contentust": {
    "type": "string",
    "default": "All"
  },
  "contenthWq": {
    "type": "string",
    "default": "Online"
  },
  "contentLQU": {
    "type": "string",
    "default": "Offline"
  },
  "contentWmq": {
    "type": "string",
    "default": "Leslie Alexander"
  },
  "contentrnt": {
    "type": "string",
    "default": "@lesliealexander"
  },
  "contentTYP": {
    "type": "string",
    "default": "Open options menu"
  },
  "contenthTh": {
    "type": "string",
    "default": "View profile"
  },
  "contentKJX": {
    "type": "string",
    "default": "Send message"
  },
  "imageurlDZZ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1494790108377-be9c29b29330.jpeg'
  },
  "imagealteoc": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgVBy": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgJgm": {
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
            value={ attributes.svgVBy }
            onChange={ ( value ) => {
              setAttributes({ svgVBy: value });
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
            value={ attributes.svgJgm }
            onChange={ ( value ) => {
              setAttributes({ svgJgm: value });
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
        <div className="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0" aria-hidden="true"/>
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                    <div className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div className="p-6">
                                <div className="flex items-start justify-between">
                                     <h2 className="text-lg font-medium text-gray-900" id="slide-over-title"><RichText tagName="span" value={attributes.contentRGH} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentRGH: newtext });
      }}
    /></h2>

                                    <div className="ml-3 flex h-7 items-center">
                                        <button type="button" className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentvVy} default="Close panel" onChange={ (newtext) =>  {
        setAttributes({ contentvVy: newtext });
      }}
    /></span>

                                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVBy }}
        >
      </svg>
      
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-gray-200">
                                <div className="px-6">
                                    <nav className="-mb-px flex space-x-6"> <span className="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentust} default="All" onChange={ (newtext) =>  {
        setAttributes({ contentust: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contenthWq} default="Online" onChange={ (newtext) =>  {
        setAttributes({ contenthWq: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentLQU} default="Offline" onChange={ (newtext) =>  {
        setAttributes({ contentLQU: newtext });
      }}
    /></span>

                                    </nav>
                                </div>
                            </div>
                            <ul role="list" className="flex-1 divide-y divide-gray-200 overflow-y-auto">
                                <li>
                                    <div className="group relative flex items-center py-6 px-5"> <span className="-m-1 block flex-1 p-1">
                  <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"/>
                  <div className="relative flex min-w-0 flex-1 items-center">
                    <span className="relative inline-block flex-shrink-0">
                      
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlDZZ: media.url,
            imagealteoc: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlDZZ } 
            alt={ attributes.imagealteoc } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                      
                      <span className="bg-green-400 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" aria-hidden="true"/>
</span>
                                        <div className="ml-4 truncate">
                                            <p className="truncate text-sm font-medium text-gray-900">
                                                <RichText tagName="span" value={attributes.contentWmq} default="Leslie Alexander" onChange={ (newtext) => { setAttributes({ contentWmq: newtext }); }} /></p>
                                            <p className="truncate text-sm text-gray-500">
                                                <RichText tagName="span" value={attributes.contentrnt} default="@lesliealexander" onChange={ (newtext) => { setAttributes({ contentrnt: newtext }); }} /></p>
                                    </div>
                        </div>
                        </span>
                        <div className="relative ml-2 inline-block flex-shrink-0 text-left">
                            <button type="button" className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="options-menu-0-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentTYP} default="Open options menu" onChange={ (newtext) =>  {
        setAttributes({ contentTYP: newtext });
      }}
    /></span>
 <span className="flex h-full w-full items-center justify-center rounded-full">
                      
                      
      <svg
         className="h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJgm }}
        >
      </svg>
      
                    </span>

                            </button>
                            <div className="absolute top-0 right-9 z-10 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-0-button" tabindex="-1">
                                <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-0-item-0"><RichText tagName="span" value={attributes.contenthTh} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contenthTh: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-0-item-1"><RichText tagName="span" value={attributes.contentKJX} default="Send message" onChange={ (newtext) =>  {
        setAttributes({ contentKJX: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                    </li>
                    </ul>
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
        <div class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute inset-0" aria-hidden="true"/>
                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                    <div class="pointer-events-auto w-screen max-w-md">
                        <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div class="p-6">
                                <div class="flex items-start justify-between">
                                     <h2 class="text-lg font-medium text-gray-900" id="slide-over-title"><RichText.Content value={attributes.contentRGH} /></h2>

                                    <div class="ml-3 flex h-7 items-center">
                                        <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentvVy} /></span>

                                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVBy }}
        >
      </svg>
      
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="border-b border-gray-200">
                                <div class="px-6">
                                    <nav class="-mb-px flex space-x-6"> <span class="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentust} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contenthWq} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentLQU} /></span>

                                    </nav>
                                </div>
                            </div>
                            <ul role="list" class="flex-1 divide-y divide-gray-200 overflow-y-auto">
                                <li>
                                    <div class="group relative flex items-center py-6 px-5"> <span class="-m-1 block flex-1 p-1">
                  <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"/>
                  <div class="relative flex min-w-0 flex-1 items-center">
                    <span class="relative inline-block flex-shrink-0">
                      
      <img
            src={ attributes.imageurlDZZ } 
            alt={ attributes.imagealteoc } 
            class="h-10 w-10 rounded-full"
          />
                      
                      <span class="bg-green-400 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" aria-hidden="true"/>
</span>
                                        <div class="ml-4 truncate">
                                            <p class="truncate text-sm font-medium text-gray-900">
                                                <RichText.Content value={attributes.contentWmq} /></p>
                                            <p class="truncate text-sm text-gray-500">
                                                <RichText.Content value={attributes.contentrnt} /></p>
                                    </div>
                        </div>
                        </span>
                        <div class="relative ml-2 inline-block flex-shrink-0 text-left">
                            <button type="button" class="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="options-menu-0-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentTYP} /></span>
 <span class="flex h-full w-full items-center justify-center rounded-full">
                      
                      
      <svg
         class="h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJgm }}
        >
      </svg>
      
                    </span>

                            </button>
                            <div class="absolute top-0 right-9 z-10 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-0-button" tabindex="-1">
                                <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-0-item-0"><RichText.Content value={attributes.contenthTh} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-0-item-1"><RichText.Content value={attributes.contentKJX} /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                    </li>
                    </ul>
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
        