
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-sortable-headings', {
            title: 'with sortable headings',
            icon: (<img src="data:image/jpeg;base64,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OvbzsdUBRydX4SlqWYzDrRtirG03o6qqqqLE1E9r528lUzvD2CzYfVVFTUU1DA+RqMRtM57rom9Vc7+ljfAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH2P7tvyKJj+7b8iiKAAAAABMn3bvkUTJ9275AfANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFy2dqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UGjFymdqAANGLlM7UG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" />),
            category: 'common',
            attributes: {
  "contentHqD": {
    "type": "string",
    "default": "Users"
  },
  "contentmne": {
    "type": "string",
    "default": "A list of all the users in your account including their name, title, email and role."
  },
  "contenthal": {
    "type": "string",
    "default": "Add user"
  },
  "contenthdl": {
    "type": "string",
    "default": "\n                    Name\n                    \n                    "
  },
  "contentPoX": {
    "type": "string",
    "default": "\n                    Title\n                    \n                    "
  },
  "contentrxS": {
    "type": "string",
    "default": "\n                    Email\n                    \n                    "
  },
  "contentihC": {
    "type": "string",
    "default": "\n                    Role\n                    \n                    "
  },
  "contentDsK": {
    "type": "string",
    "default": "Edit"
  },
  "contentfac": {
    "type": "string",
    "default": "Lindsay Walton"
  },
  "contentCpZ": {
    "type": "string",
    "default": "Front-end Developer"
  },
  "contentZBt": {
    "type": "string",
    "default": "lindsay.walton@example.com"
  },
  "contentaKt": {
    "type": "string",
    "default": "Member"
  },
  "contentzIt": {
    "type": "string",
    "default": "Edit"
  },
  "contentupq": {
    "type": "string",
    "default": ", Lindsay Walton"
  },
  "svgozB": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgrEK": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svghrh": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgPur": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  }
},
            edit(props) {
            const { attributes, setAttributes } = props;

            return (
                <div>
                    <InspectorControls>
                    
    <Panel>
      























































































































































































































































































































































































































































































































































































    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgozB }
            onChange={ ( value ) => {
              setAttributes({ svgozB: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  

    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgrEK }
            onChange={ ( value ) => {
              setAttributes({ svgrEK: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  

    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svghrh }
            onChange={ ( value ) => {
              setAttributes({ svghrh: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  

    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgPur }
            onChange={ ( value ) => {
              setAttributes({ svgPur: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  
    </Panel>
                    </InspectorControls>

                    <div>
    <div>
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                     <h1 className="text-xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentHqD} default="Users" onChange={ (newtext) =>  {
        setAttributes({ contentHqD: newtext });
      }}
    /></h1>

                    <p className="mt-2 text-sm text-gray-700">
                        <RichText tagName="span" value={attributes.contentmne} default="A list of all the users in your account including their name, title, email and role." onChange={ (newtext) => { setAttributes({ contentmne: newtext }); }} /></p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText tagName="span" value={attributes.contenthal} default="Add user" onChange={ (newtext) => { setAttributes({ contenthal: newtext }); }} /></button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"> <span className="group inline-flex"><RichText tagName="span" value={attributes.contenthdl} default="Name" onChange={ (newtext) =>  {
        setAttributes({ contenthdl: newtext });
      }}
    /><span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                      
                      
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgozB }}
        >
      </svg>
      
                    </span>
</span>
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"> <span className="group inline-flex"><RichText tagName="span" value={attributes.contentPoX} default="Title" onChange={ (newtext) =>  {
        setAttributes({ contentPoX: newtext });
      }}
    /><span className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                      
                      
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrEK }}
        >
      </svg>
      
                    </span>
</span>
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"> <span className="group inline-flex"><RichText tagName="span" value={attributes.contentrxS} default="Email" onChange={ (newtext) =>  {
        setAttributes({ contentrxS: newtext });
      }}
    /><span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                      
                      
      <svg
         className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghrh }}
        >
      </svg>
      
                    </span>
</span>
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"> <span className="group inline-flex"><RichText tagName="span" value={attributes.contentihC} default="Role" onChange={ (newtext) =>  {
        setAttributes({ contentihC: newtext });
      }}
    /><span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                      
                      
      <svg
         className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPur }}
        >
      </svg>
      
                    </span>
</span>
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6"> <span className="sr-only"><RichText tagName="span" value={attributes.contentDsK} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentDsK: newtext });
      }}
    /></span>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            <RichText tagName="span" value={attributes.contentfac} default="Lindsay Walton" onChange={ (newtext) => { setAttributes({ contentfac: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentCpZ} default="Front-end Developer" onChange={ (newtext) => { setAttributes({ contentCpZ: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentZBt} default="lindsay.walton@example.com" onChange={ (newtext) => { setAttributes({ contentZBt: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentaKt} default="Member" onChange={ (newtext) => { setAttributes({ contentaKt: newtext }); }} /></td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"> <span className="text-indigo-600 hover:text-indigo-900"><RichText tagName="span" value={attributes.contentzIt} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentzIt: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentupq} default=", Lindsay Walton" onChange={ (newtext) =>  {
        setAttributes({ contentupq: newtext });
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
                     <h1 class="text-xl font-semibold text-gray-900"><RichText.Content value={attributes.contentHqD} /></h1>

                    <p class="mt-2 text-sm text-gray-700">
                        <RichText.Content value={attributes.contentmne} /></p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText.Content value={attributes.contenthal} /></button>
                </div>
            </div>
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"> <span class="group inline-flex"><RichText.Content value={attributes.contenthdl} /><span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                      
                      
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgozB }}
        >
      </svg>
      
                    </span>
</span>
                                        </th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"> <span class="group inline-flex"><RichText.Content value={attributes.contentPoX} /><span class="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                      
                      
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrEK }}
        >
      </svg>
      
                    </span>
</span>
                                        </th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"> <span class="group inline-flex"><RichText.Content value={attributes.contentrxS} /><span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                      
                      
      <svg
         class="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghrh }}
        >
      </svg>
      
                    </span>
</span>
                                        </th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"> <span class="group inline-flex"><RichText.Content value={attributes.contentihC} /><span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                      
                      
      <svg
         class="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPur }}
        >
      </svg>
      
                    </span>
</span>
                                        </th>
                                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6"> <span class="sr-only"><RichText.Content value={attributes.contentDsK} /></span>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            <RichText.Content value={attributes.contentfac} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentCpZ} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentZBt} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentaKt} /></td>
                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"> <span class="text-indigo-600 hover:text-indigo-900"><RichText.Content value={attributes.contentzIt} /><span class="sr-only"><RichText.Content value={attributes.contentupq} /></span></span>
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
        