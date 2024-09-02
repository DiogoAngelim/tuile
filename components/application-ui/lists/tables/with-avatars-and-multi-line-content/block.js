
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-avatars-and-multi-line-content', {
            title: 'with avatars and multi line content',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentoJe": {
    "type": "string",
    "default": "Users"
  },
  "contentMOn": {
    "type": "string",
    "default": "A list of all the users in your account including their name, title, email and role."
  },
  "contentKLA": {
    "type": "string",
    "default": "Add user"
  },
  "contentFom": {
    "type": "string",
    "default": "Name"
  },
  "contentDso": {
    "type": "string",
    "default": "Title"
  },
  "contentjMC": {
    "type": "string",
    "default": "Status"
  },
  "contentoIw": {
    "type": "string",
    "default": "Role"
  },
  "contentGae": {
    "type": "string",
    "default": "Edit"
  },
  "contentOCQ": {
    "type": "string",
    "default": "Lindsay Walton"
  },
  "contentDij": {
    "type": "string",
    "default": "lindsay.walton@example.com"
  },
  "contenttEw": {
    "type": "string",
    "default": "Front-end Developer"
  },
  "contentmEp": {
    "type": "string",
    "default": "Optimization"
  },
  "contentURA": {
    "type": "string",
    "default": "Active"
  },
  "contentWyL": {
    "type": "string",
    "default": "Member"
  },
  "contentuZG": {
    "type": "string",
    "default": "Edit"
  },
  "contentWeO": {
    "type": "string",
    "default": ", Lindsay Walton"
  },
  "imageurluaL": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517841905240-472988babdf9.jpeg'
  },
  "imagealtyMl": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
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
                     <h1 className="text-xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentoJe} default="Users" onChange={ (newtext) =>  {
        setAttributes({ contentoJe: newtext });
      }}
    /></h1>

                    <p className="mt-2 text-sm text-gray-700">
                        <RichText tagName="span" value={attributes.contentMOn} default="A list of all the users in your account including their name, title, email and role." onChange={ (newtext) => { setAttributes({ contentMOn: newtext }); }} /></p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText tagName="span" value={attributes.contentKLA} default="Add user" onChange={ (newtext) => { setAttributes({ contentKLA: newtext }); }} /></button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            <RichText tagName="span" value={attributes.contentFom} default="Name" onChange={ (newtext) => { setAttributes({ contentFom: newtext }); }} /></th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentDso} default="Title" onChange={ (newtext) => { setAttributes({ contentDso: newtext }); }} /></th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentjMC} default="Status" onChange={ (newtext) => { setAttributes({ contentjMC: newtext }); }} /></th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentoIw} default="Role" onChange={ (newtext) => { setAttributes({ contentoIw: newtext }); }} /></th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6"> <span className="sr-only"><RichText tagName="span" value={attributes.contentGae} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentGae: newtext });
      }}
    /></span>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 flex-shrink-0">
                                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurluaL: media.url,
            imagealtyMl: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurluaL } 
            alt={ attributes.imagealtyMl } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="font-medium text-gray-900">
                                                        <RichText tagName="span" value={attributes.contentOCQ} default="Lindsay Walton" onChange={ (newtext) => { setAttributes({ contentOCQ: newtext }); }} /></div>
                                                    <div className="text-gray-500">
                                                        <RichText tagName="span" value={attributes.contentDij} default="lindsay.walton@example.com" onChange={ (newtext) => { setAttributes({ contentDij: newtext }); }} /></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <div className="text-gray-900">
                                                <RichText tagName="span" value={attributes.contenttEw} default="Front-end Developer" onChange={ (newtext) => { setAttributes({ contenttEw: newtext }); }} /></div>
                                            <div className="text-gray-500">
                                                <RichText tagName="span" value={attributes.contentmEp} default="Optimization" onChange={ (newtext) => { setAttributes({ contentmEp: newtext }); }} /></div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"><RichText tagName="span" value={attributes.contentURA} default="Active" onChange={ (newtext) =>  {
        setAttributes({ contentURA: newtext });
      }}
    /></span>

                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentWyL} default="Member" onChange={ (newtext) => { setAttributes({ contentWyL: newtext }); }} /></td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"> <span className="text-indigo-600 hover:text-indigo-900"><RichText tagName="span" value={attributes.contentuZG} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentuZG: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentWeO} default=", Lindsay Walton" onChange={ (newtext) =>  {
        setAttributes({ contentWeO: newtext });
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
                     <h1 class="text-xl font-semibold text-gray-900"><RichText.Content value={attributes.contentoJe} /></h1>

                    <p class="mt-2 text-sm text-gray-700">
                        <RichText.Content value={attributes.contentMOn} /></p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText.Content value={attributes.contentKLA} /></button>
                </div>
            </div>
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            <RichText.Content value={attributes.contentFom} /></th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentDso} /></th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentjMC} /></th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentoIw} /></th>
                                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6"> <span class="sr-only"><RichText.Content value={attributes.contentGae} /></span>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                            <div class="flex items-center">
                                                <div class="h-10 w-10 flex-shrink-0">
                                                    
      <img
            src={ attributes.imageurluaL } 
            alt={ attributes.imagealtyMl } 
            class="h-10 w-10 rounded-full"
          />
                                                </div>
                                                <div class="ml-4">
                                                    <div class="font-medium text-gray-900">
                                                        <RichText.Content value={attributes.contentOCQ} /></div>
                                                    <div class="text-gray-500">
                                                        <RichText.Content value={attributes.contentDij} /></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <div class="text-gray-900">
                                                <RichText.Content value={attributes.contenttEw} /></div>
                                            <div class="text-gray-500">
                                                <RichText.Content value={attributes.contentmEp} /></div>
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"><RichText.Content value={attributes.contentURA} /></span>

                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentWyL} /></td>
                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"> <span class="text-indigo-600 hover:text-indigo-900"><RichText.Content value={attributes.contentuZG} /><span class="sr-only"><RichText.Content value={attributes.contentWeO} /></span></span>
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
        