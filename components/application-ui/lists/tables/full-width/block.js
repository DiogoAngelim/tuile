
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/full-width', {
            title: 'full width',
            icon: (<img src="data:image/jpeg;base64,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yNZDGkMEcTbWY1Gpb5ITAAAAAAAAAAAAAAAAAAAAB5geYAAAAAAAAAAAAAAAAAAAAAAAAADRi5TO1BoxcpnahFANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFy2dqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLls7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFy2dqAANGLlM7UGj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" />),
            category: 'common',
            attributes: {
  "contentpZg": {
    "type": "string",
    "default": "Users"
  },
  "contentKFq": {
    "type": "string",
    "default": "A list of all the users in your account including their name, title, email and role."
  },
  "contentiXz": {
    "type": "string",
    "default": "Add user"
  },
  "contentWfF": {
    "type": "string",
    "default": "Name"
  },
  "contentHFk": {
    "type": "string",
    "default": "Title"
  },
  "contentUXc": {
    "type": "string",
    "default": "Email"
  },
  "contentrfw": {
    "type": "string",
    "default": "Role"
  },
  "contentDtn": {
    "type": "string",
    "default": "Edit"
  },
  "contenttUc": {
    "type": "string",
    "default": "Lindsay Walton"
  },
  "contentnTy": {
    "type": "string",
    "default": "Front-end Developer"
  },
  "contentoKZ": {
    "type": "string",
    "default": "lindsay.walton@example.com"
  },
  "contentPDi": {
    "type": "string",
    "default": "Member"
  },
  "contentKdW": {
    "type": "string",
    "default": "Edit"
  },
  "contenttVk": {
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
                     <h1 className="text-xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentpZg} default="Users" onChange={ (newtext) =>  {
        setAttributes({ contentpZg: newtext });
      }}
    /></h1>

                    <p className="mt-2 text-sm text-gray-700">
                        <RichText tagName="span" value={attributes.contentKFq} default="A list of all the users in your account including their name, title, email and role." onChange={ (newtext) => { setAttributes({ contentKFq: newtext }); }} /></p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText tagName="span" value={attributes.contentiXz} default="Add user" onChange={ (newtext) => { setAttributes({ contentiXz: newtext }); }} /></button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8">
                                            <RichText tagName="span" value={attributes.contentWfF} default="Name" onChange={ (newtext) => { setAttributes({ contentWfF: newtext }); }} /></th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentHFk} default="Title" onChange={ (newtext) => { setAttributes({ contentHFk: newtext }); }} /></th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentUXc} default="Email" onChange={ (newtext) => { setAttributes({ contentUXc: newtext }); }} /></th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentrfw} default="Role" onChange={ (newtext) => { setAttributes({ contentrfw: newtext }); }} /></th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"> <span className="sr-only"><RichText tagName="span" value={attributes.contentDtn} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentDtn: newtext });
      }}
    /></span>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                            <RichText tagName="span" value={attributes.contenttUc} default="Lindsay Walton" onChange={ (newtext) => { setAttributes({ contenttUc: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentnTy} default="Front-end Developer" onChange={ (newtext) => { setAttributes({ contentnTy: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentoKZ} default="lindsay.walton@example.com" onChange={ (newtext) => { setAttributes({ contentoKZ: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentPDi} default="Member" onChange={ (newtext) => { setAttributes({ contentPDi: newtext }); }} /></td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8"> <span className="text-indigo-600 hover:text-indigo-900"><RichText tagName="span" value={attributes.contentKdW} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentKdW: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contenttVk} default=", Lindsay Walton" onChange={ (newtext) =>  {
        setAttributes({ contenttVk: newtext });
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
                     <h1 class="text-xl font-semibold text-gray-900"><RichText.Content value={attributes.contentpZg} /></h1>

                    <p class="mt-2 text-sm text-gray-700">
                        <RichText.Content value={attributes.contentKFq} /></p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText.Content value={attributes.contentiXz} /></button>
                </div>
            </div>
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle">
                        <div class="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
                            <table class="min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8">
                                            <RichText.Content value={attributes.contentWfF} /></th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentHFk} /></th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentUXc} /></th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentrfw} /></th>
                                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"> <span class="sr-only"><RichText.Content value={attributes.contentDtn} /></span>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                            <RichText.Content value={attributes.contenttUc} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentnTy} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentoKZ} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentPDi} /></td>
                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8"> <span class="text-indigo-600 hover:text-indigo-900"><RichText.Content value={attributes.contentKdW} /><span class="sr-only"><RichText.Content value={attributes.contenttVk} /></span></span>
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
        });
        