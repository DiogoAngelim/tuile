
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-with-icons-and-brand-color', {
            title: 'simple with icons and brand color',
            icon: (<img src="data:image/jpeg;base64,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ePHk7q27qUm3Naz9Y+f826G+vk7dOOeOvMoi6p0rU6rhri26TMUnmtqzxMMum9N1el63galO2szza0+c2n9ZVh+J2zi+gAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjk+Hb7SyY5Ph2+0gyHE+wX9v8A8P8A5nXO/n8P4XfnpbEqgTjlkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqgThkqhjk+Hb7S8Xy35Z+xkrkvYL+3/4f/M65yPsF/b/8P/mdc9nzf1+37fwnDDNlx4MVsua8UpWOZtPyar3/AH+Pfvd/+o//AA+P6Tt/v/8Ap9P8zqNMmXruhhzzW2rfumMf1tWvPM/X5Lf4npe+e6e8V8fnt7eJ9fpz6Mcdc8ccy33+yKMOXHnxVy4bxelo5i0fNm0/T6ZMXXd/DgtWmrSaTbFx87V55j6ebcOfk68deZwvDzz7GDWpF9jNjxUmeO69orHP7mHYw7FO/XzY8tfrS0Wj+TW+0M1inT5vx2+/Y+efTjzR7GfVw9Xz59K8RTHp3nYtgiJiJ5/D+nd6+rp08Out+o6J5582LXw2zZ7xTHX1tPpDmNTb2q7Gzgrt3x1tpTlrfY2IydtuYiLcx+X19HnsZr/wfqOvmybE5IxUvNcmaMteO6POto+v0b4+LzZz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" />),
            category: 'common',
            attributes: {
  "contentQQO": {
    "type": "string",
    "default": "\n        Dashboard\n      "
  },
  "contentBkI": {
    "type": "string",
    "default": "\n        Team\n      "
  },
  "contentMsf": {
    "type": "string",
    "default": "\n        Projects\n      "
  },
  "contentitf": {
    "type": "string",
    "default": "\n        Calendar\n      "
  },
  "contentkib": {
    "type": "string",
    "default": "\n        Documents\n      "
  },
  "contentlBR": {
    "type": "string",
    "default": "\n        Reports\n      "
  },
  "imageurlxJm": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
  },
  "imagealtmai": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "svgWUj": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgFjP": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svglrB": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgDVX": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgFrT": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgLOz": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
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
            value={ attributes.svgWUj }
            onChange={ ( value ) => {
              setAttributes({ svgWUj: value });
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
            value={ attributes.svgFjP }
            onChange={ ( value ) => {
              setAttributes({ svgFjP: value });
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
            value={ attributes.svglrB }
            onChange={ ( value ) => {
              setAttributes({ svglrB: value });
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
            value={ attributes.svgDVX }
            onChange={ ( value ) => {
              setAttributes({ svgDVX: value });
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
            value={ attributes.svgFrT }
            onChange={ ( value ) => {
              setAttributes({ svgFrT: value });
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
            value={ attributes.svgLOz }
            onChange={ ( value ) => {
              setAttributes({ svgLOz: value });
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
        <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 space-y-5">
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlxJm: media.url,
            imagealtmai: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlxJm } 
            alt={ attributes.imagealtmai } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
            </div>
            <div className="mt-5 flex-grow flex flex-col">
                <nav className="flex-1 bg-white space-y-1" aria-label="Sidebar"> <span className="bg-indigo-50 border-indigo-600 text-indigo-600 group flex items-center px-3 py-2 text-sm font-medium border-l-4">
        
        
      <svg
         className="text-indigo-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWUj }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentQQO} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentQQO: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4">
        
        
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFjP }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentBkI} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentBkI: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4">
        
        
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglrB }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentMsf} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentMsf: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4">
        
        
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDVX }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentitf} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentitf: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4">
        
        
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFrT }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentkib} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentkib: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4">
        
        
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLOz }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentlBR} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentlBR: newtext });
      }}
    /></span>

                </nav>
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
        <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4 space-y-5">
                
      <img
            src={ attributes.imageurlxJm } 
            alt={ attributes.imagealtmai } 
            class="h-8 w-auto"
          />
            </div>
            <div class="mt-5 flex-grow flex flex-col">
                <nav class="flex-1 bg-white space-y-1" aria-label="Sidebar"> <span class="bg-indigo-50 border-indigo-600 text-indigo-600 group flex items-center px-3 py-2 text-sm font-medium border-l-4">
        
        
      <svg
         class="text-indigo-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWUj }}
        >
      </svg>
      <RichText.Content value={attributes.contentQQO} /></span>
 <span class="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4">
        
        
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFjP }}
        >
      </svg>
      <RichText.Content value={attributes.contentBkI} /></span>
 <span class="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4">
        
        
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglrB }}
        >
      </svg>
      <RichText.Content value={attributes.contentMsf} /></span>
 <span class="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4">
        
        
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDVX }}
        >
      </svg>
      <RichText.Content value={attributes.contentitf} /></span>
 <span class="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4">
        
        
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFrT }}
        >
      </svg>
      <RichText.Content value={attributes.contentkib} /></span>
 <span class="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4">
        
        
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLOz }}
        >
      </svg>
      <RichText.Content value={attributes.contentlBR} /></span>

                </nav>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        