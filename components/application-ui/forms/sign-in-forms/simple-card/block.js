
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-card', {
            title: 'simple card',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentShY": {
    "type": "string",
    "default": "Sign in to your account"
  },
  "contentupA": {
    "type": "string",
    "default": "\n      Or\n      "
  },
  "contentCEk": {
    "type": "string",
    "default": " start your 14-day free trial "
  },
  "contentkXh": {
    "type": "string",
    "default": " Email address "
  },
  "contentjOg": {
    "type": "string",
    "default": " Password "
  },
  "contentdZw": {
    "type": "string",
    "default": " Remember me "
  },
  "contentSZw": {
    "type": "string",
    "default": " Forgot your password? "
  },
  "contentyGp": {
    "type": "string",
    "default": "Sign in"
  },
  "contentrri": {
    "type": "string",
    "default": " Or continue with "
  },
  "contentpwW": {
    "type": "string",
    "default": "Sign in with Facebook"
  },
  "contentQIs": {
    "type": "string",
    "default": "Sign in with Twitter"
  },
  "contentxCs": {
    "type": "string",
    "default": "Sign in with GitHub"
  },
  "imageurljnj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtjod": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "svgDEd": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z\" clip-rule=\"evenodd\"/>"
  },
  "svgNWO": {
    "type": "string",
    "default": "<path d=\"M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84\"/>"
  },
  "svgkwh": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgDEd }
            onChange={ ( value ) => {
              setAttributes({ svgDEd: value });
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
            value={ attributes.svgNWO }
            onChange={ ( value ) => {
              setAttributes({ svgNWO: value });
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
            value={ attributes.svgkwh }
            onChange={ ( value ) => {
              setAttributes({ svgkwh: value });
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
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurljnj: media.url,
            imagealtjod: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurljnj } 
            alt={ attributes.imagealtjod } 
            onClick={ open } 
            className="mx-auto h-12 w-auto"
          /> 
        )} 
      />
                 <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"><RichText tagName="span" value={attributes.contentShY} default="Sign in to your account" onChange={ (newtext) =>  {
        setAttributes({ contentShY: newtext });
      }}
    /></h2>

                <p className="mt-2 text-center text-sm text-gray-600">
                    <RichText tagName="span" value={attributes.contentupA} default="Or" onChange={ (newtext) => { setAttributes({ contentupA: newtext }); }} /><span className="font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentCEk} default="start your 14-day free trial" onChange={ (newtext) =>  {
        setAttributes({ contentCEk: newtext });
      }}
    /></span>

                </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" className="block text-sm font-medium text-gray-700">
                                <RichText tagName="span" value={attributes.contentkXh} default="Email address" onChange={ (newtext) => { setAttributes({ contentkXh: newtext }); }} /></label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                        </div>
                        <div>
                            <label for="password" className="block text-sm font-medium text-gray-700">
                                <RichText tagName="span" value={attributes.contentjOg} default="Password" onChange={ (newtext) => { setAttributes({ contentjOg: newtext }); }} /></label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" autocomplete="current-password" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                                <label for="remember-me" className="ml-2 block text-sm text-gray-900">
                                    <RichText tagName="span" value={attributes.contentdZw} default="Remember me" onChange={ (newtext) => { setAttributes({ contentdZw: newtext }); }} /></label>
                            </div>
                            <div className="text-sm"> <span className="font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentSZw} default="Forgot your password?" onChange={ (newtext) =>  {
        setAttributes({ contentSZw: newtext });
      }}
    /></span>

                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <RichText tagName="span" value={attributes.contentyGp} default="Sign in" onChange={ (newtext) => { setAttributes({ contentyGp: newtext }); }} /></button>
                        </div>
                    </form>
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"/>
                            </div>
                            <div className="relative flex justify-center text-sm"> <span className="px-2 bg-white text-gray-500"><RichText tagName="span" value={attributes.contentrri} default="Or continue with" onChange={ (newtext) =>  {
        setAttributes({ contentrri: newtext });
      }}
    /></span>

                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-3 gap-3">
                            <div> <span className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only"><RichText tagName="span" value={attributes.contentpwW} default="Sign in with Facebook" onChange={ (newtext) =>  {
        setAttributes({ contentpwW: newtext });
      }}
    /></span>

                                
      <svg
         className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDEd }}
        >
      </svg>
      
                                </span>
                            </div>
                            <div> <span className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only"><RichText tagName="span" value={attributes.contentQIs} default="Sign in with Twitter" onChange={ (newtext) =>  {
        setAttributes({ contentQIs: newtext });
      }}
    /></span>

                                
      <svg
         className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNWO }}
        >
      </svg>
      
                                </span>
                            </div>
                            <div> <span className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only"><RichText tagName="span" value={attributes.contentxCs} default="Sign in with GitHub" onChange={ (newtext) =>  {
        setAttributes({ contentxCs: newtext });
      }}
    /></span>

                                
      <svg
         className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkwh }}
        >
      </svg>
      
                                </span>
                            </div>
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
        <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                
      <img
            src={ attributes.imageurljnj } 
            alt={ attributes.imagealtjod } 
            class="mx-auto h-12 w-auto"
          />
                 <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900"><RichText.Content value={attributes.contentShY} /></h2>

                <p class="mt-2 text-center text-sm text-gray-600">
                    <RichText.Content value={attributes.contentupA} /><span class="font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentCEk} /></span>

                </p>
            </div>
            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form class="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">
                                <RichText.Content value={attributes.contentkXh} /></label>
                            <div class="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                        </div>
                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">
                                <RichText.Content value={attributes.contentjOg} /></label>
                            <div class="mt-1">
                                <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                                <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                                    <RichText.Content value={attributes.contentdZw} /></label>
                            </div>
                            <div class="text-sm"> <span class="font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentSZw} /></span>

                            </div>
                        </div>
                        <div>
                            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <RichText.Content value={attributes.contentyGp} /></button>
                        </div>
                    </form>
                    <div class="mt-6">
                        <div class="relative">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300"/>
                            </div>
                            <div class="relative flex justify-center text-sm"> <span class="px-2 bg-white text-gray-500"><RichText.Content value={attributes.contentrri} /></span>

                            </div>
                        </div>
                        <div class="mt-6 grid grid-cols-3 gap-3">
                            <div> <span class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only"><RichText.Content value={attributes.contentpwW} /></span>

                                
      <svg
         class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDEd }}
        >
      </svg>
      
                                </span>
                            </div>
                            <div> <span class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only"><RichText.Content value={attributes.contentQIs} /></span>

                                
      <svg
         class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNWO }}
        >
      </svg>
      
                                </span>
                            </div>
                            <div> <span class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only"><RichText.Content value={attributes.contentxCs} /></span>

                                
      <svg
         class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkwh }}
        >
      </svg>
      
                                </span>
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
        });
        