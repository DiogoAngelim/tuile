
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-input', {
            title: 'with input',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentmxe": {
    "type": "string",
    "default": "Update your email"
  },
  "contenthEr": {
    "type": "string",
    "default": "Change the email address you want associated with your account."
  },
  "contentsua": {
    "type": "string",
    "default": "Email"
  },
  "contentXmA": {
    "type": "string",
    "default": "Save"
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
        <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                 <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentmxe} default="Update your email" onChange={ (newtext) =>  {
        setAttributes({ contentmxe: newtext });
      }}
    /></h3>

                <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>
                        <RichText tagName="span" value={attributes.contenthEr} default="Change the email address you want associated with your account." onChange={ (newtext) => { setAttributes({ contenthEr: newtext }); }} /></p>
                </div>
                <form className="mt-5 sm:flex sm:items-center">
                    <div className="w-full sm:max-w-xs">
                        <label for="email" className="sr-only">
                            <RichText tagName="span" value={attributes.contentsua} default="Email" onChange={ (newtext) => { setAttributes({ contentsua: newtext }); }} /></label>
                        <input type="email" name="email" id="email" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"/>
                    </div>
                    <button type="submit" className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        <RichText tagName="span" value={attributes.contentXmA} default="Save" onChange={ (newtext) => { setAttributes({ contentXmA: newtext }); }} /></button>
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
        <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                 <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentmxe} /></h3>

                <div class="mt-2 max-w-xl text-sm text-gray-500">
                    <p>
                        <RichText.Content value={attributes.contenthEr} /></p>
                </div>
                <form class="mt-5 sm:flex sm:items-center">
                    <div class="w-full sm:max-w-xs">
                        <label for="email" class="sr-only">
                            <RichText.Content value={attributes.contentsua} /></label>
                        <input type="email" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"/>
                    </div>
                    <button type="submit" class="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        <RichText.Content value={attributes.contentXmA} /></button>
                </form>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        