
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-uppercase-headings', {
            title: 'with uppercase headings',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentvnH": {
    "type": "string",
    "default": "Users"
  },
  "contentkUC": {
    "type": "string",
    "default": "A list of all the users in your account including their name, title, email and role."
  },
  "contentDpu": {
    "type": "string",
    "default": "Add user"
  },
  "contentbYK": {
    "type": "string",
    "default": "Name"
  },
  "contentTsB": {
    "type": "string",
    "default": "Title"
  },
  "contentfLx": {
    "type": "string",
    "default": "Email"
  },
  "contentyTv": {
    "type": "string",
    "default": "Role"
  },
  "contentRZE": {
    "type": "string",
    "default": "Edit"
  },
  "contentxhE": {
    "type": "string",
    "default": "Lindsay Walton"
  },
  "contentuEk": {
    "type": "string",
    "default": "Front-end Developer"
  },
  "contentjer": {
    "type": "string",
    "default": "lindsay.walton@example.com"
  },
  "contentvXP": {
    "type": "string",
    "default": "Member"
  },
  "contenteDW": {
    "type": "string",
    "default": "Edit"
  },
  "contentZHu": {
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
                     <h1 className="text-xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentvnH} default="Users" onChange={ (newtext) =>  {
        setAttributes({ contentvnH: newtext });
      }}
    /></h1>

                    <p className="mt-2 text-sm text-gray-700">
                        <RichText tagName="span" value={attributes.contentkUC} default="A list of all the users in your account including their name, title, email and role." onChange={ (newtext) => { setAttributes({ contentkUC: newtext }); }} /></p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText tagName="span" value={attributes.contentDpu} default="Add user" onChange={ (newtext) => { setAttributes({ contentDpu: newtext }); }} /></button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6">
                                            <RichText tagName="span" value={attributes.contentbYK} default="Name" onChange={ (newtext) => { setAttributes({ contentbYK: newtext }); }} /></th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                                            <RichText tagName="span" value={attributes.contentTsB} default="Title" onChange={ (newtext) => { setAttributes({ contentTsB: newtext }); }} /></th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                                            <RichText tagName="span" value={attributes.contentfLx} default="Email" onChange={ (newtext) => { setAttributes({ contentfLx: newtext }); }} /></th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                                            <RichText tagName="span" value={attributes.contentyTv} default="Role" onChange={ (newtext) => { setAttributes({ contentyTv: newtext }); }} /></th>
                                        <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-6"> <span className="sr-only"><RichText tagName="span" value={attributes.contentRZE} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentRZE: newtext });
      }}
    /></span>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            <RichText tagName="span" value={attributes.contentxhE} default="Lindsay Walton" onChange={ (newtext) => { setAttributes({ contentxhE: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentuEk} default="Front-end Developer" onChange={ (newtext) => { setAttributes({ contentuEk: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentjer} default="lindsay.walton@example.com" onChange={ (newtext) => { setAttributes({ contentjer: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentvXP} default="Member" onChange={ (newtext) => { setAttributes({ contentvXP: newtext }); }} /></td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"> <span className="text-indigo-600 hover:text-indigo-900"><RichText tagName="span" value={attributes.contenteDW} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contenteDW: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentZHu} default=", Lindsay Walton" onChange={ (newtext) =>  {
        setAttributes({ contentZHu: newtext });
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
                     <h1 class="text-xl font-semibold text-gray-900"><RichText.Content value={attributes.contentvnH} /></h1>

                    <p class="mt-2 text-sm text-gray-700">
                        <RichText.Content value={attributes.contentkUC} /></p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText.Content value={attributes.contentDpu} /></button>
                </div>
            </div>
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6">
                                            <RichText.Content value={attributes.contentbYK} /></th>
                                        <th scope="col" class="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                                            <RichText.Content value={attributes.contentTsB} /></th>
                                        <th scope="col" class="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                                            <RichText.Content value={attributes.contentfLx} /></th>
                                        <th scope="col" class="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                                            <RichText.Content value={attributes.contentyTv} /></th>
                                        <th scope="col" class="relative py-3 pl-3 pr-4 sm:pr-6"> <span class="sr-only"><RichText.Content value={attributes.contentRZE} /></span>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            <RichText.Content value={attributes.contentxhE} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentuEk} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentjer} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentvXP} /></td>
                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"> <span class="text-indigo-600 hover:text-indigo-900"><RichText.Content value={attributes.contenteDW} /><span class="sr-only"><RichText.Content value={attributes.contentZHu} /></span></span>
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
        