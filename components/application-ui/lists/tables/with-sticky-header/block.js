
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-sticky-header', {
            title: 'with sticky header',
            icon: (<img src="data:image/jpeg;base64,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DWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAWgq1hnBw1hnBwFoKtYZwcNYZwcBaCrWGcHDWGcHAf/2Q==" />),
            category: 'common',
            attributes: {
  "contentVxv": {
    "type": "string",
    "default": "Users"
  },
  "contentpKw": {
    "type": "string",
    "default": "A list of all the users in your account including their name, title, email and role."
  },
  "contentWkC": {
    "type": "string",
    "default": "Add user"
  },
  "contentyKV": {
    "type": "string",
    "default": "Name"
  },
  "contentyIu": {
    "type": "string",
    "default": "Title"
  },
  "contentppY": {
    "type": "string",
    "default": "Email"
  },
  "contentEwu": {
    "type": "string",
    "default": "Role"
  },
  "contentRyT": {
    "type": "string",
    "default": "Edit"
  },
  "contentBsK": {
    "type": "string",
    "default": "Lindsay Walton"
  },
  "contentpeZ": {
    "type": "string",
    "default": "Front-end Developer"
  },
  "contentFCi": {
    "type": "string",
    "default": "lindsay.walton@example.com"
  },
  "contentUvs": {
    "type": "string",
    "default": "Member"
  },
  "contentChV": {
    "type": "string",
    "default": "Edit"
  },
  "contentlGR": {
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
                     <h1 className="text-xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentVxv} default="Users" onChange={ (newtext) =>  {
        setAttributes({ contentVxv: newtext });
      }}
    /></h1>

                    <p className="mt-2 text-sm text-gray-700">
                        <RichText tagName="span" value={attributes.contentpKw} default="A list of all the users in your account including their name, title, email and role." onChange={ (newtext) => { setAttributes({ contentpKw: newtext }); }} /></p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText tagName="span" value={attributes.contentWkC} default="Add user" onChange={ (newtext) => { setAttributes({ contentWkC: newtext }); }} /></button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                            <table className="min-w-full border-separate" style="border-spacing: 0">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                                            <RichText tagName="span" value={attributes.contentyKV} default="Name" onChange={ (newtext) => { setAttributes({ contentyKV: newtext }); }} /></th>
                                        <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">
                                            <RichText tagName="span" value={attributes.contentyIu} default="Title" onChange={ (newtext) => { setAttributes({ contentyIu: newtext }); }} /></th>
                                        <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                                            <RichText tagName="span" value={attributes.contentppY} default="Email" onChange={ (newtext) => { setAttributes({ contentppY: newtext }); }} /></th>
                                        <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                            <RichText tagName="span" value={attributes.contentEwu} default="Role" onChange={ (newtext) => { setAttributes({ contentEwu: newtext }); }} /></th>
                                        <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"> <span className="sr-only"><RichText tagName="span" value={attributes.contentRyT} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentRyT: newtext });
      }}
    /></span>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                            <RichText tagName="span" value={attributes.contentBsK} default="Lindsay Walton" onChange={ (newtext) => { setAttributes({ contentBsK: newtext }); }} /></td>
                                        <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden sm:table-cell">
                                            <RichText tagName="span" value={attributes.contentpeZ} default="Front-end Developer" onChange={ (newtext) => { setAttributes({ contentpeZ: newtext }); }} /></td>
                                        <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden lg:table-cell">
                                            <RichText tagName="span" value={attributes.contentFCi} default="lindsay.walton@example.com" onChange={ (newtext) => { setAttributes({ contentFCi: newtext }); }} /></td>
                                        <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentUvs} default="Member" onChange={ (newtext) => { setAttributes({ contentUvs: newtext }); }} /></td>
                                        <td className="relative whitespace-nowrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8"> <span className="text-indigo-600 hover:text-indigo-900"><RichText tagName="span" value={attributes.contentChV} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentChV: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentlGR} default=", Lindsay Walton" onChange={ (newtext) =>  {
        setAttributes({ contentlGR: newtext });
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
                     <h1 class="text-xl font-semibold text-gray-900"><RichText.Content value={attributes.contentVxv} /></h1>

                    <p class="mt-2 text-sm text-gray-700">
                        <RichText.Content value={attributes.contentpKw} /></p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText.Content value={attributes.contentWkC} /></button>
                </div>
            </div>
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle">
                        <div class="shadow-sm ring-1 ring-black ring-opacity-5">
                            <table class="min-w-full border-separate" style="border-spacing: 0">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                                            <RichText.Content value={attributes.contentyKV} /></th>
                                        <th scope="col" class="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">
                                            <RichText.Content value={attributes.contentyIu} /></th>
                                        <th scope="col" class="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                                            <RichText.Content value={attributes.contentppY} /></th>
                                        <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                            <RichText.Content value={attributes.contentEwu} /></th>
                                        <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"> <span class="sr-only"><RichText.Content value={attributes.contentRyT} /></span>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white">
                                    <tr>
                                        <td class="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                            <RichText.Content value={attributes.contentBsK} /></td>
                                        <td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden sm:table-cell">
                                            <RichText.Content value={attributes.contentpeZ} /></td>
                                        <td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden lg:table-cell">
                                            <RichText.Content value={attributes.contentFCi} /></td>
                                        <td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentUvs} /></td>
                                        <td class="relative whitespace-nowrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8"> <span class="text-indigo-600 hover:text-indigo-900"><RichText.Content value={attributes.contentChV} /><span class="sr-only"><RichText.Content value={attributes.contentlGR} /></span></span>
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
        