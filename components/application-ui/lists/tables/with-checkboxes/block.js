
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-checkboxes', {
            title: 'with checkboxes',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentPCp": {
    "type": "string",
    "default": "Users"
  },
  "contenteOP": {
    "type": "string",
    "default": "A list of all the users in your account including their name, title, email and role."
  },
  "contentMKt": {
    "type": "string",
    "default": "Add user"
  },
  "contentTSC": {
    "type": "string",
    "default": "Bulk edit"
  },
  "contentxeA": {
    "type": "string",
    "default": "Delete all"
  },
  "contentpSj": {
    "type": "string",
    "default": "Name"
  },
  "contentxkq": {
    "type": "string",
    "default": "Title"
  },
  "contentHdN": {
    "type": "string",
    "default": "Email"
  },
  "contenthEv": {
    "type": "string",
    "default": "Role"
  },
  "contentyHP": {
    "type": "string",
    "default": "Edit"
  },
  "contentbEn": {
    "type": "string",
    "default": "Lindsay Walton"
  },
  "contentuux": {
    "type": "string",
    "default": "Front-end Developer"
  },
  "contentIHD": {
    "type": "string",
    "default": "lindsay.walton@example.com"
  },
  "contentrdJ": {
    "type": "string",
    "default": "Member"
  },
  "contentwlS": {
    "type": "string",
    "default": "Edit"
  },
  "contentHvA": {
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
                     <h1 className="text-xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentPCp} default="Users" onChange={ (newtext) =>  {
        setAttributes({ contentPCp: newtext });
      }}
    /></h1>

                    <p className="mt-2 text-sm text-gray-700">
                        <RichText tagName="span" value={attributes.contenteOP} default="A list of all the users in your account including their name, title, email and role." onChange={ (newtext) => { setAttributes({ contenteOP: newtext }); }} /></p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText tagName="span" value={attributes.contentMKt} default="Add user" onChange={ (newtext) => { setAttributes({ contentMKt: newtext }); }} /></button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                                <button type="button" className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30">
                                    <RichText tagName="span" value={attributes.contentTSC} default="Bulk edit" onChange={ (newtext) => { setAttributes({ contentTSC: newtext }); }} /></button>
                                <button type="button" className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30">
                                    <RichText tagName="span" value={attributes.contentxeA} default="Delete all" onChange={ (newtext) => { setAttributes({ contentxeA: newtext }); }} /></button>
                            </div>
                            <table className="min-w-full table-fixed divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                                            <input type="checkbox" className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"/>
                                        </th>
                                        <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentpSj} default="Name" onChange={ (newtext) => { setAttributes({ contentpSj: newtext }); }} /></th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentxkq} default="Title" onChange={ (newtext) => { setAttributes({ contentxkq: newtext }); }} /></th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentHdN} default="Email" onChange={ (newtext) => { setAttributes({ contentHdN: newtext }); }} /></th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contenthEv} default="Role" onChange={ (newtext) => { setAttributes({ contenthEv: newtext }); }} /></th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6"> <span className="sr-only"><RichText tagName="span" value={attributes.contentyHP} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentyHP: newtext });
      }}
    /></span>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                                            <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600"/>
                                            <input type="checkbox" className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"/>
                                        </td>
                                        <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">
                                            <RichText tagName="span" value={attributes.contentbEn} default="Lindsay Walton" onChange={ (newtext) => { setAttributes({ contentbEn: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentuux} default="Front-end Developer" onChange={ (newtext) => { setAttributes({ contentuux: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentIHD} default="lindsay.walton@example.com" onChange={ (newtext) => { setAttributes({ contentIHD: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentrdJ} default="Member" onChange={ (newtext) => { setAttributes({ contentrdJ: newtext }); }} /></td>
                                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"> <span className="text-indigo-600 hover:text-indigo-900"><RichText tagName="span" value={attributes.contentwlS} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentwlS: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentHvA} default=", Lindsay Walton" onChange={ (newtext) =>  {
        setAttributes({ contentHvA: newtext });
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
                     <h1 class="text-xl font-semibold text-gray-900"><RichText.Content value={attributes.contentPCp} /></h1>

                    <p class="mt-2 text-sm text-gray-700">
                        <RichText.Content value={attributes.contenteOP} /></p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText.Content value={attributes.contentMKt} /></button>
                </div>
            </div>
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <div class="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                                <button type="button" class="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30">
                                    <RichText.Content value={attributes.contentTSC} /></button>
                                <button type="button" class="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30">
                                    <RichText.Content value={attributes.contentxeA} /></button>
                            </div>
                            <table class="min-w-full table-fixed divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="relative w-12 px-6 sm:w-16 sm:px-8">
                                            <input type="checkbox" class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"/>
                                        </th>
                                        <th scope="col" class="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentpSj} /></th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentxkq} /></th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentHdN} /></th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contenthEv} /></th>
                                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6"> <span class="sr-only"><RichText.Content value={attributes.contentyHP} /></span>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                                            <div class="absolute inset-y-0 left-0 w-0.5 bg-indigo-600"/>
                                            <input type="checkbox" class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"/>
                                        </td>
                                        <td class="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">
                                            <RichText.Content value={attributes.contentbEn} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentuux} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentIHD} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentrdJ} /></td>
                                        <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"> <span class="text-indigo-600 hover:text-indigo-900"><RichText.Content value={attributes.contentwlS} /><span class="sr-only"><RichText.Content value={attributes.contentHvA} /></span></span>
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
        