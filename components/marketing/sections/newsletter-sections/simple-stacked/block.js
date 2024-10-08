
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl, ToggleControl } = wp.components;


        registerBlockType('wp/simple-stacked', {
            title: 'simple-stacked',
            icon: (<img src="data:image/jpeg;base64,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P810AA5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=" />),
            category: 'common',
            attributes: {
  "contentMsl": {
    "type": "string",
    "default": "Want product news and updates?"
  },
  "contentStg": {
    "type": "string",
    "default": "Sign up for our newsletter."
  },
  "contentMRQ": {
    "type": "string",
    "default": "Email address"
  },
  "contentLWS": {
    "type": "string",
    "default": "Notify me"
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
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                 <h2 className="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl"><RichText tagName="span" value={attributes.contentMsl} default="Want product news and updates?" onChange={ (newtext) =>  {
        setAttributes({ contentMsl: newtext });
      }}
    /></h2>

                <p className="inline text-3xl font-extrabold tracking-tight text-indigo-600 sm:block sm:text-4xl">
                    <RichText tagName="span" value={attributes.contentStg} default="Sign up for our newsletter." onChange={ (newtext) => { setAttributes({ contentStg: newtext }); }} /></p>
                <form className="mt-8 sm:flex">
                    <label for="email-address" className="sr-only">
                        <RichText tagName="span" value={attributes.contentMRQ} default="Email address" onChange={ (newtext) => { setAttributes({ contentMRQ: newtext }); }} /></label>
                    <input id="email-address" name="email" type="email" autocomplete="email" required="" className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md" placeholder="Enter your email"/>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <RichText tagName="span" value={attributes.contentLWS} default="Notify me" onChange={ (newtext) => { setAttributes({ contentLWS: newtext }); }} /></button>
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
        <div class="bg-white">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                 <h2 class="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl"><RichText.Content value={attributes.contentMsl} /></h2>

                <p class="inline text-3xl font-extrabold tracking-tight text-indigo-600 sm:block sm:text-4xl">
                    <RichText.Content value={attributes.contentStg} /></p>
                <form class="mt-8 sm:flex">
                    <label for="email-address" class="sr-only">
                        <RichText.Content value={attributes.contentMRQ} /></label>
                    <input id="email-address" name="email" type="email" autocomplete="email" required="" class="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md" placeholder="Enter your email"/>
                    <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button type="submit" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <RichText.Content value={attributes.contentLWS} /></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        