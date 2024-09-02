
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-vertical-lines', {
            title: 'with vertical lines',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentyZt": {
    "type": "string",
    "default": "Users"
  },
  "contentHAP": {
    "type": "string",
    "default": "A list of all the users in your account including their name, title, email and role."
  },
  "contentsXd": {
    "type": "string",
    "default": "Add user"
  },
  "contentUWG": {
    "type": "string",
    "default": "Name"
  },
  "contenthWw": {
    "type": "string",
    "default": "Title"
  },
  "contentBaz": {
    "type": "string",
    "default": "Email"
  },
  "contentJgW": {
    "type": "string",
    "default": "Role"
  },
  "contentXTv": {
    "type": "string",
    "default": "Lindsay Walton"
  },
  "contentgOP": {
    "type": "string",
    "default": "Front-end Developer"
  },
  "contentkeD": {
    "type": "string",
    "default": "lindsay.walton@example.com"
  },
  "contentrRX": {
    "type": "string",
    "default": "Member"
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
                     <h1 className="text-xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentyZt} default="Users" onChange={ (newtext) =>  {
        setAttributes({ contentyZt: newtext });
      }}
    /></h1>

                    <p className="mt-2 text-sm text-gray-700">
                        <RichText tagName="span" value={attributes.contentHAP} default="A list of all the users in your account including their name, title, email and role." onChange={ (newtext) => { setAttributes({ contentHAP: newtext }); }} /></p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText tagName="span" value={attributes.contentsXd} default="Add user" onChange={ (newtext) => { setAttributes({ contentsXd: newtext }); }} /></button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr className="divide-x divide-gray-200">
                                        <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            <RichText tagName="span" value={attributes.contentUWG} default="Name" onChange={ (newtext) => { setAttributes({ contentUWG: newtext }); }} /></th>
                                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contenthWw} default="Title" onChange={ (newtext) => { setAttributes({ contenthWw: newtext }); }} /></th>
                                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentBaz} default="Email" onChange={ (newtext) => { setAttributes({ contentBaz: newtext }); }} /></th>
                                        <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6">
                                            <RichText tagName="span" value={attributes.contentJgW} default="Role" onChange={ (newtext) => { setAttributes({ contentJgW: newtext }); }} /></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr className="divide-x divide-gray-200">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                                            <RichText tagName="span" value={attributes.contentXTv} default="Lindsay Walton" onChange={ (newtext) => { setAttributes({ contentXTv: newtext }); }} /></td>
                                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentgOP} default="Front-end Developer" onChange={ (newtext) => { setAttributes({ contentgOP: newtext }); }} /></td>
                                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentkeD} default="lindsay.walton@example.com" onChange={ (newtext) => { setAttributes({ contentkeD: newtext }); }} /></td>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                                            <RichText tagName="span" value={attributes.contentrRX} default="Member" onChange={ (newtext) => { setAttributes({ contentrRX: newtext }); }} /></td>
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
                     <h1 class="text-xl font-semibold text-gray-900"><RichText.Content value={attributes.contentyZt} /></h1>

                    <p class="mt-2 text-sm text-gray-700">
                        <RichText.Content value={attributes.contentHAP} /></p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText.Content value={attributes.contentsXd} /></button>
                </div>
            </div>
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                    <tr class="divide-x divide-gray-200">
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            <RichText.Content value={attributes.contentUWG} /></th>
                                        <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contenthWw} /></th>
                                        <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentBaz} /></th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6">
                                            <RichText.Content value={attributes.contentJgW} /></th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr class="divide-x divide-gray-200">
                                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                                            <RichText.Content value={attributes.contentXTv} /></td>
                                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentgOP} /></td>
                                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentkeD} /></td>
                                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                                            <RichText.Content value={attributes.contentrRX} /></td>
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
        