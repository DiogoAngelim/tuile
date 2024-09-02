
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-no-labels', {
            title: 'simple no labels',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contenthJu": {
    "type": "string",
    "default": "Sign in to your account"
  },
  "contentBcp": {
    "type": "string",
    "default": "\n        Or\n        "
  },
  "contentJHg": {
    "type": "string",
    "default": " start your 14-day free trial "
  },
  "contentJbq": {
    "type": "string",
    "default": "Email address"
  },
  "contentHHe": {
    "type": "string",
    "default": "Password"
  },
  "contentsRA": {
    "type": "string",
    "default": " Remember me "
  },
  "contentSbH": {
    "type": "string",
    "default": " Forgot your password? "
  },
  "contentlgZ": {
    "type": "string",
    "default": "\n          Sign in\n        "
  },
  "imageurlDRg": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtYQO": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "svggWC": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svggWC }
            onChange={ ( value ) => {
              setAttributes({ svggWC: value });
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
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlDRg: media.url,
            imagealtYQO: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlDRg } 
            alt={ attributes.imagealtYQO } 
            onClick={ open } 
            className="mx-auto h-12 w-auto"
          /> 
        )} 
      />
                     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"><RichText tagName="span" value={attributes.contenthJu} default="Sign in to your account" onChange={ (newtext) =>  {
        setAttributes({ contenthJu: newtext });
      }}
    /></h2>

                    <p className="mt-2 text-center text-sm text-gray-600">
                        <RichText tagName="span" value={attributes.contentBcp} default="Or" onChange={ (newtext) => { setAttributes({ contentBcp: newtext }); }} /><span className="font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentJHg} default="start your 14-day free trial" onChange={ (newtext) =>  {
        setAttributes({ contentJHg: newtext });
      }}
    /></span>

                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true"/>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" className="sr-only">
                                <RichText tagName="span" value={attributes.contentJbq} default="Email address" onChange={ (newtext) => { setAttributes({ contentJbq: newtext }); }} /></label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required="" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
                        </div>
                        <div>
                            <label for="password" className="sr-only">
                                <RichText tagName="span" value={attributes.contentHHe} default="Password" onChange={ (newtext) => { setAttributes({ contentHHe: newtext }); }} /></label>
                            <input id="password" name="password" type="password" autocomplete="current-password" required="" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                            <label for="remember-me" className="ml-2 block text-sm text-gray-900">
                                <RichText tagName="span" value={attributes.contentsRA} default="Remember me" onChange={ (newtext) => { setAttributes({ contentsRA: newtext }); }} /></label>
                        </div>
                        <div className="text-sm"> <span className="font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentSbH} default="Forgot your password?" onChange={ (newtext) =>  {
        setAttributes({ contentSbH: newtext });
      }}
    /></span>

                        </div>
                    </div>
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            
            
      <svg
         className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggWC }}
        >
      </svg>
      
          </span><RichText tagName="span" value={attributes.contentlgZ} default="Sign in" onChange={ (newtext) =>  {
        setAttributes({ contentlgZ: newtext });
      }}
    /></button>
      </div>
    </form>
  </div>
</div>
</div></div>
                </div>
                );
            },
            save(props) {
            const { attributes } = props;

            return (
                <div>
    <div>
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div>
                    
      <img
            src={ attributes.imageurlDRg } 
            alt={ attributes.imagealtYQO } 
            class="mx-auto h-12 w-auto"
          />
                     <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900"><RichText.Content value={attributes.contenthJu} /></h2>

                    <p class="mt-2 text-center text-sm text-gray-600">
                        <RichText.Content value={attributes.contentBcp} /><span class="font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentJHg} /></span>

                    </p>
                </div>
                <form class="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true"/>
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" class="sr-only">
                                <RichText.Content value={attributes.contentJbq} /></label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
                        </div>
                        <div>
                            <label for="password" class="sr-only">
                                <RichText.Content value={attributes.contentHHe} /></label>
                            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                                <RichText.Content value={attributes.contentsRA} /></label>
                        </div>
                        <div class="text-sm"> <span class="font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentSbH} /></span>

                        </div>
                    </div>
                    <div>
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            
            
      <svg
         class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggWC }}
        >
      </svg>
      
          </span><RichText.Content value={attributes.contentlgZ} /></button>
      </div>
    </form>
  </div>
</div>
</div></div>
            );
            },
        });
        