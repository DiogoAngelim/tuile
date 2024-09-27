
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl, ToggleControl } = wp.components;


        registerBlockType('wp/dark-version-with-large-images', {
            title: 'dark-version-with-large-images',
            icon: (<img src="data:image/jpeg;base64,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79EoCL4P736Hwf3v0SgIvg/vfofB/e/RKAi+D+9+h8H979EoCL4P736Hwf3v0SgIvg/vfofB/e/RKAi+D+9+jzbHNY794TgKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtDzS8Wj8XoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHm94rH4grgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=" />),
            category: 'common',
            attributes: {
  "contentlVw": {
    "type": "string",
    "default": "Meet our team"
  },
  "contenthEv": {
    "type": "string",
    "default": "Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque."
  },
  "contentkXa": {
    "type": "string",
    "default": "Leonard Krasner"
  },
  "contentZlA": {
    "type": "string",
    "default": "Senior Designer"
  },
  "contentLzy": {
    "type": "string",
    "default": "Twitter"
  },
  "contentaVR": {
    "type": "string",
    "default": "LinkedIn"
  },
  "imageurltLp": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1519345182560-3f2917c472ef.jpeg'
  },
  "imagealtUDh": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgnBP": {
    "type": "string",
    "default": "<path d=\"M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84\"/>"
  },
  "svgzKB": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgnBP }
            onChange={ ( value ) => {
              setAttributes({ svgnBP: value });
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
            value={ attributes.svgzKB }
            onChange={ ( value ) => {
              setAttributes({ svgzKB: value });
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
        <div className="bg-gray-900">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                    <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                         <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl"><RichText tagName="span" value={attributes.contentlVw} default="Meet our team" onChange={ (newtext) =>  {
        setAttributes({ contentlVw: newtext });
      }}
    /></h2>

                        <p className="text-xl text-gray-300">
                            <RichText tagName="span" value={attributes.contenthEv} default="Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque." onChange={ (newtext) => { setAttributes({ contenthEv: newtext }); }} /></p>
                    </div>
                    <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
                        <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                            <div className="space-y-6 xl:space-y-10">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurltLp: media.url,
            imagealtUDh: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurltLp } 
            alt={ attributes.imagealtUDh } 
            onClick={ open } 
            className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
          /> 
        )} 
      />
                                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                    <div className="font-medium text-lg leading-6 space-y-1">
                                         <h3 className="text-white"><RichText tagName="span" value={attributes.contentkXa} default="Leonard Krasner" onChange={ (newtext) =>  {
        setAttributes({ contentkXa: newtext });
      }}
    /></h3>

                                        <p className="text-indigo-400">
                                            <RichText tagName="span" value={attributes.contentZlA} default="Senior Designer" onChange={ (newtext) => { setAttributes({ contentZlA: newtext }); }} /></p>
                                    </div>
                                    <ul role="list" className="flex justify-center space-x-5">
                                        <li> <span className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only"><RichText tagName="span" value={attributes.contentLzy} default="Twitter" onChange={ (newtext) =>  {
        setAttributes({ contentLzy: newtext });
      }}
    /></span>

                                            
      <svg
         className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnBP }}
        >
      </svg>
      
                                            </span>
                                        </li>
                                        <li> <span className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only"><RichText tagName="span" value={attributes.contentaVR} default="LinkedIn" onChange={ (newtext) =>  {
        setAttributes({ contentaVR: newtext });
      }}
    /></span>

                                            
      <svg
         className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzKB }}
        >
      </svg>
      
                                            </span>
                                        </li>
                                    </ul>
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
                );
            },
            save(props) {
            const { attributes } = props;

            return (
                <div>
    <div>
        <div class="bg-gray-900">
            <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div class="space-y-12">
                    <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                         <h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl"><RichText.Content value={attributes.contentlVw} /></h2>

                        <p class="text-xl text-gray-300">
                            <RichText.Content value={attributes.contenthEv} /></p>
                    </div>
                    <ul role="list" class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
                        <li class="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                            <div class="space-y-6 xl:space-y-10">
                                
      <img
            src={ attributes.imageurltLp } 
            alt={ attributes.imagealtUDh } 
            class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
          />
                                <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                                    <div class="font-medium text-lg leading-6 space-y-1">
                                         <h3 class="text-white"><RichText.Content value={attributes.contentkXa} /></h3>

                                        <p class="text-indigo-400">
                                            <RichText.Content value={attributes.contentZlA} /></p>
                                    </div>
                                    <ul role="list" class="flex justify-center space-x-5">
                                        <li> <span class="text-gray-400 hover:text-gray-300">
                    <span class="sr-only"><RichText.Content value={attributes.contentLzy} /></span>

                                            
      <svg
         class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnBP }}
        >
      </svg>
      
                                            </span>
                                        </li>
                                        <li> <span class="text-gray-400 hover:text-gray-300">
                    <span class="sr-only"><RichText.Content value={attributes.contentaVR} /></span>

                                            
      <svg
         class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzKB }}
        >
      </svg>
      
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        