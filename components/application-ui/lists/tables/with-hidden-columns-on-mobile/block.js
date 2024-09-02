
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-hidden-columns-on-mobile', {
            title: 'with hidden columns on mobile',
            icon: (<img src="data:image/jpeg;base64,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AAAAAAAAAPY/u2/IkRj+7b8iRFAAAAAAjJ9275EiMn3bvkB4Boxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxctnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxctnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxctnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQABoxcpnag0YuUztQA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" />),
            category: 'common',
            attributes: {
  "contentLQh": {
    "type": "string",
    "default": "Users"
  },
  "contentwJt": {
    "type": "string",
    "default": "A list of all the users in your account including their name, title, email and role."
  },
  "contenthBO": {
    "type": "string",
    "default": "Add user"
  },
  "contentnIc": {
    "type": "string",
    "default": "Name"
  },
  "contentOdi": {
    "type": "string",
    "default": "Title"
  },
  "contentVke": {
    "type": "string",
    "default": "Email"
  },
  "contentigF": {
    "type": "string",
    "default": "Role"
  },
  "contentFDb": {
    "type": "string",
    "default": "Edit"
  },
  "contentCFd": {
    "type": "string",
    "default": "Lindsay Walton"
  },
  "contentcmv": {
    "type": "string",
    "default": "Front-end Developer"
  },
  "contentXhV": {
    "type": "string",
    "default": "lindsay.walton@example.com"
  },
  "contentWzc": {
    "type": "string",
    "default": "Member"
  },
  "contenthGQ": {
    "type": "string",
    "default": "Edit"
  },
  "contentXBb": {
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
                     <h1 className="text-xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentLQh} default="Users" onChange={ (newtext) =>  {
        setAttributes({ contentLQh: newtext });
      }}
    /></h1>

                    <p className="mt-2 text-sm text-gray-700">
                        <RichText tagName="span" value={attributes.contentwJt} default="A list of all the users in your account including their name, title, email and role." onChange={ (newtext) => { setAttributes({ contentwJt: newtext }); }} /></p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText tagName="span" value={attributes.contenthBO} default="Add user" onChange={ (newtext) => { setAttributes({ contenthBO: newtext }); }} /></button>
                </div>
            </div>
            <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                <RichText tagName="span" value={attributes.contentnIc} default="Name" onChange={ (newtext) => { setAttributes({ contentnIc: newtext }); }} /></th>
                            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
                                <RichText tagName="span" value={attributes.contentOdi} default="Title" onChange={ (newtext) => { setAttributes({ contentOdi: newtext }); }} /></th>
                            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                                <RichText tagName="span" value={attributes.contentVke} default="Email" onChange={ (newtext) => { setAttributes({ contentVke: newtext }); }} /></th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                <RichText tagName="span" value={attributes.contentigF} default="Role" onChange={ (newtext) => { setAttributes({ contentigF: newtext }); }} /></th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6"> <span className="sr-only"><RichText tagName="span" value={attributes.contentFDb} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentFDb: newtext });
      }}
    /></span>

                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                <RichText tagName="span" value={attributes.contentCFd} default="Lindsay Walton" onChange={ (newtext) => { setAttributes({ contentCFd: newtext }); }} /></td>
                            <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                                <RichText tagName="span" value={attributes.contentcmv} default="Front-end Developer" onChange={ (newtext) => { setAttributes({ contentcmv: newtext }); }} /></td>
                            <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                                <RichText tagName="span" value={attributes.contentXhV} default="lindsay.walton@example.com" onChange={ (newtext) => { setAttributes({ contentXhV: newtext }); }} /></td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <RichText tagName="span" value={attributes.contentWzc} default="Member" onChange={ (newtext) => { setAttributes({ contentWzc: newtext }); }} /></td>
                            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"> <span className="text-indigo-600 hover:text-indigo-900"><RichText tagName="span" value={attributes.contenthGQ} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contenthGQ: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentXBb} default=", Lindsay Walton" onChange={ (newtext) =>  {
        setAttributes({ contentXBb: newtext });
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
                     <h1 class="text-xl font-semibold text-gray-900"><RichText.Content value={attributes.contentLQh} /></h1>

                    <p class="mt-2 text-sm text-gray-700">
                        <RichText.Content value={attributes.contentwJt} /></p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText.Content value={attributes.contenthBO} /></button>
                </div>
            </div>
            <div class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                <RichText.Content value={attributes.contentnIc} /></th>
                            <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
                                <RichText.Content value={attributes.contentOdi} /></th>
                            <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                                <RichText.Content value={attributes.contentVke} /></th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                <RichText.Content value={attributes.contentigF} /></th>
                            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6"> <span class="sr-only"><RichText.Content value={attributes.contentFDb} /></span>

                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                        <tr>
                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                <RichText.Content value={attributes.contentCFd} /></td>
                            <td class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                                <RichText.Content value={attributes.contentcmv} /></td>
                            <td class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                                <RichText.Content value={attributes.contentXhV} /></td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <RichText.Content value={attributes.contentWzc} /></td>
                            <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"> <span class="text-indigo-600 hover:text-indigo-900"><RichText.Content value={attributes.contenthGQ} /><span class="sr-only"><RichText.Content value={attributes.contentXBb} /></span></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        