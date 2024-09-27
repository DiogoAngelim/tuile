
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl, ToggleControl } = wp.components;


        registerBlockType('wp/with-paragraph-on-dark', {
            title: 'with-paragraph-on-dark',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentAxC": {
    "type": "string",
    "default": "Sign up for our newsletter"
  },
  "contentaZS": {
    "type": "string",
    "default": "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat."
  },
  "contentDrY": {
    "type": "string",
    "default": "Email address"
  },
  "contentppa": {
    "type": "string",
    "default": "Notify me"
  },
  "contentntX": {
    "type": "string",
    "default": "\n        We care about the protection of your data. Read our\n        "
  },
  "contentHwI": {
    "type": "string",
    "default": " Privacy Policy. "
  }
},
            edit(props) {
            const { attributes, setAttributes } = props;

            return (
                <div>
                    <InspectorControls>
                    
    <Panel>
      














































































































































































































    </Panel>
                    </InspectorControls>

                    <div>
    <div>
        <div className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
                <div className="lg:w-0 lg:flex-1">
                     <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="newsletter-headline"><RichText tagName="span" value={attributes.contentAxC} default="Sign up for our newsletter" onChange={ (newtext) =>  {
        setAttributes({ contentAxC: newtext });
      }}
    /></h2>

                    <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
                        <RichText tagName="span" value={attributes.contentaZS} default="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat." onChange={ (newtext) => { setAttributes({ contentaZS: newtext }); }} /></p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                    <form className="sm:flex">
                        <label for="email-address" className="sr-only">
                            <RichText tagName="span" value={attributes.contentDrY} default="Email address" onChange={ (newtext) => { setAttributes({ contentDrY: newtext }); }} /></label>
                        <input id="email-address" name="email-address" type="email" autocomplete="email" required="" className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md" placeholder="Enter your email"/>
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            <button type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                                <RichText tagName="span" value={attributes.contentppa} default="Notify me" onChange={ (newtext) => { setAttributes({ contentppa: newtext }); }} /></button>
                        </div>
                    </form>
                    <p className="mt-3 text-sm text-gray-300">
                        <RichText tagName="span" value={attributes.contentntX} default="We care about the protection of your data. Read our" onChange={ (newtext) => { setAttributes({ contentntX: newtext }); }} /><span className="text-white font-medium underline"><RichText tagName="span" value={attributes.contentHwI} default="Privacy Policy." onChange={ (newtext) =>  {
        setAttributes({ contentHwI: newtext });
      }}
    /></span>

                    </p>
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
        <div class="bg-gray-800">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
                <div class="lg:w-0 lg:flex-1">
                     <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="newsletter-headline"><RichText.Content value={attributes.contentAxC} /></h2>

                    <p class="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
                        <RichText.Content value={attributes.contentaZS} /></p>
                </div>
                <div class="mt-8 lg:mt-0 lg:ml-8">
                    <form class="sm:flex">
                        <label for="email-address" class="sr-only">
                            <RichText.Content value={attributes.contentDrY} /></label>
                        <input id="email-address" name="email-address" type="email" autocomplete="email" required="" class="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md" placeholder="Enter your email"/>
                        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            <button type="submit" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                                <RichText.Content value={attributes.contentppa} /></button>
                        </div>
                    </form>
                    <p class="mt-3 text-sm text-gray-300">
                        <RichText.Content value={attributes.contentntX} /><span class="text-white font-medium underline"><RichText.Content value={attributes.contentHwI} /></span>

                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        