
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-white-background', {
            title: 'with white background',
            icon: (<img src="data:image/jpeg;base64,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3r6I8F8H3V8StcaeH241uW8jrXOx2wTe3FRXZ/R7NmBSAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpw9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ6NXpQ9qAmCHRq9KHtQ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" />),
            category: 'common',
            attributes: {
  "contentEvU": {
    "type": "string",
    "default": "Users"
  },
  "contentQQh": {
    "type": "string",
    "default": "A list of all the users in your account including their name, title, email and role."
  },
  "contentTCK": {
    "type": "string",
    "default": "Add user"
  },
  "contentQvr": {
    "type": "string",
    "default": "Name"
  },
  "contentpUl": {
    "type": "string",
    "default": "Title"
  },
  "contentoWQ": {
    "type": "string",
    "default": "Email"
  },
  "contentSRR": {
    "type": "string",
    "default": "Role"
  },
  "contentziy": {
    "type": "string",
    "default": "Edit"
  },
  "contentnhE": {
    "type": "string",
    "default": "Lindsay Walton"
  },
  "contentmfI": {
    "type": "string",
    "default": "Front-end Developer"
  },
  "contentghJ": {
    "type": "string",
    "default": "lindsay.walton@example.com"
  },
  "contentWOq": {
    "type": "string",
    "default": "Member"
  },
  "contentdHl": {
    "type": "string",
    "default": "Edit"
  },
  "contentJGk": {
    "type": "string",
    "default": ", Lindsay Walton"
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
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                     <h1 className="text-xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentEvU} default="Users" onChange={ (newtext) =>  {
        setAttributes({ contentEvU: newtext });
      }}
    /></h1>

                    <p className="mt-2 text-sm text-gray-700">
                        <RichText tagName="span" value={attributes.contentQQh} default="A list of all the users in your account including their name, title, email and role." onChange={ (newtext) => { setAttributes({ contentQQh: newtext }); }} /></p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText tagName="span" value={attributes.contentTCK} default="Add user" onChange={ (newtext) => { setAttributes({ contentTCK: newtext }); }} /></button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0">
                                        <RichText tagName="span" value={attributes.contentQvr} default="Name" onChange={ (newtext) => { setAttributes({ contentQvr: newtext }); }} /></th>
                                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                                        <RichText tagName="span" value={attributes.contentpUl} default="Title" onChange={ (newtext) => { setAttributes({ contentpUl: newtext }); }} /></th>
                                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                                        <RichText tagName="span" value={attributes.contentoWQ} default="Email" onChange={ (newtext) => { setAttributes({ contentoWQ: newtext }); }} /></th>
                                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                                        <RichText tagName="span" value={attributes.contentSRR} default="Role" onChange={ (newtext) => { setAttributes({ contentSRR: newtext }); }} /></th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"> <span className="sr-only"><RichText tagName="span" value={attributes.contentziy} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentziy: newtext });
      }}
    /></span>

                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                                        <RichText tagName="span" value={attributes.contentnhE} default="Lindsay Walton" onChange={ (newtext) => { setAttributes({ contentnhE: newtext }); }} /></td>
                                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentmfI} default="Front-end Developer" onChange={ (newtext) => { setAttributes({ contentmfI: newtext }); }} /></td>
                                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentghJ} default="lindsay.walton@example.com" onChange={ (newtext) => { setAttributes({ contentghJ: newtext }); }} /></td>
                                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentWOq} default="Member" onChange={ (newtext) => { setAttributes({ contentWOq: newtext }); }} /></td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0"> <span className="text-indigo-600 hover:text-indigo-900"><RichText tagName="span" value={attributes.contentdHl} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentdHl: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentJGk} default=", Lindsay Walton" onChange={ (newtext) =>  {
        setAttributes({ contentJGk: newtext });
      }}
    /></span></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                     <h1 class="text-xl font-semibold text-gray-900"><RichText.Content value={attributes.contentEvU} /></h1>

                    <p class="mt-2 text-sm text-gray-700">
                        <RichText.Content value={attributes.contentQQh} /></p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText.Content value={attributes.contentTCK} /></button>
                </div>
            </div>
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0">
                                        <RichText.Content value={attributes.contentQvr} /></th>
                                    <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                                        <RichText.Content value={attributes.contentpUl} /></th>
                                    <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                                        <RichText.Content value={attributes.contentoWQ} /></th>
                                    <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                                        <RichText.Content value={attributes.contentSRR} /></th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"> <span class="sr-only"><RichText.Content value={attributes.contentziy} /></span>

                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                                        <RichText.Content value={attributes.contentnhE} /></td>
                                    <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentmfI} /></td>
                                    <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentghJ} /></td>
                                    <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentWOq} /></td>
                                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0"> <span class="text-indigo-600 hover:text-indigo-900"><RichText.Content value={attributes.contentdHl} /><span class="sr-only"><RichText.Content value={attributes.contentJGk} /></span></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        