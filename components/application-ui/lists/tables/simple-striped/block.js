
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-striped', {
            title: 'simple striped',
            icon: (<img src="data:image/jpeg;base64,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yi28L4O+jmlqIElmg6OXdrc8ltbyv2/Q4maVJ0Zo5KiNc4XRNVkCNtdLZL37rwh9KNuEbWXviiJcDIAAAAAAAAAAAAAAAAAAAAAAAAAAAAANNY90VHPIxbOZG5yL9lRDca6iLrU8sV8eoxW3te10sXxl6Ph6NqCzthkn1Ookd0s5InUyNZ4uv1Yp4/UO1erqZ9Nc2lkpqeonTF6vReo2y9lT29lOyh06sp4o6eavZNSsj6fT9Piqpayd8lNMGiVEb6NJNRWSCjflFGsSItrKllW/f9Tr3y9H4t3n+vtn7p1y0uq1qrpbIInSx1Ky5LNKivXFV97J4tfx8HpD48WiOggoGxVdpaN73I9Y7o5Hqt0tf7KfYMfX3w3fye/3/hcAAYgCNW6f8lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARy2QDTP2eip2/QwzduXkAKZu3LyM3bl5ACGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8jN25eQAGbty8mcC3f37/qAFf/Z" />),
            category: 'common',
            attributes: {
  "contentkXi": {
    "type": "string",
    "default": "\n                Name\n              "
  },
  "contentBlx": {
    "type": "string",
    "default": "\n                Title\n              "
  },
  "contentadF": {
    "type": "string",
    "default": "\n                Email\n              "
  },
  "contentJTr": {
    "type": "string",
    "default": "\n                Role\n              "
  },
  "contentNOi": {
    "type": "string",
    "default": "Edit"
  },
  "contentupN": {
    "type": "string",
    "default": "\n                Jane Cooper\n              "
  },
  "contentwax": {
    "type": "string",
    "default": "\n                Regional Paradigm Technician\n              "
  },
  "contenthOA": {
    "type": "string",
    "default": "\n                jane.cooper@example.com\n              "
  },
  "contentTDH": {
    "type": "string",
    "default": "\n                Admin\n              "
  },
  "contentZjz": {
    "type": "string",
    "default": "Edit"
  },
  "contentFdU": {
    "type": "string",
    "default": "\n                Cody Fisher\n              "
  },
  "contentXzK": {
    "type": "string",
    "default": "\n                Product Directives Officer\n              "
  },
  "contentfss": {
    "type": "string",
    "default": "\n                cody.fisher@example.com\n              "
  },
  "contentUas": {
    "type": "string",
    "default": "\n                Owner\n              "
  },
  "contentejl": {
    "type": "string",
    "default": "Edit"
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
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <RichText tagName="span" value={attributes.contentkXi} default="Name" onChange={ (newtext) => { setAttributes({ contentkXi: newtext }); }} /></th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <RichText tagName="span" value={attributes.contentBlx} default="Title" onChange={ (newtext) => { setAttributes({ contentBlx: newtext }); }} /></th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <RichText tagName="span" value={attributes.contentadF} default="Email" onChange={ (newtext) => { setAttributes({ contentadF: newtext }); }} /></th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <RichText tagName="span" value={attributes.contentJTr} default="Role" onChange={ (newtext) => { setAttributes({ contentJTr: newtext }); }} /></th>
                                    <th scope="col" className="relative px-6 py-3"> <span className="sr-only"><RichText tagName="span" value={attributes.contentNOi} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentNOi: newtext });
      }}
    /></span>

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <RichText tagName="span" value={attributes.contentupN} default="Jane Cooper" onChange={ (newtext) => { setAttributes({ contentupN: newtext }); }} /></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentwax} default="Regional Paradigm Technician" onChange={ (newtext) => { setAttributes({ contentwax: newtext }); }} /></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contenthOA} default="jane.cooper@example.com" onChange={ (newtext) => { setAttributes({ contenthOA: newtext }); }} /></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentTDH} default="Admin" onChange={ (newtext) => { setAttributes({ contentTDH: newtext }); }} /></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> <span className="text-indigo-600 hover:text-indigo-900"><RichText tagName="span" value={attributes.contentZjz} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentZjz: newtext });
      }}
    /></span>

                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <RichText tagName="span" value={attributes.contentFdU} default="Cody Fisher" onChange={ (newtext) => { setAttributes({ contentFdU: newtext }); }} /></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentXzK} default="Product Directives Officer" onChange={ (newtext) => { setAttributes({ contentXzK: newtext }); }} /></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentfss} default="cody.fisher@example.com" onChange={ (newtext) => { setAttributes({ contentfss: newtext }); }} /></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentUas} default="Owner" onChange={ (newtext) => { setAttributes({ contentUas: newtext }); }} /></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> <span className="text-indigo-600 hover:text-indigo-900"><RichText tagName="span" value={attributes.contentejl} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentejl: newtext });
      }}
    /></span>

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
        <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <RichText.Content value={attributes.contentkXi} /></th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <RichText.Content value={attributes.contentBlx} /></th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <RichText.Content value={attributes.contentadF} /></th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <RichText.Content value={attributes.contentJTr} /></th>
                                    <th scope="col" class="relative px-6 py-3"> <span class="sr-only"><RichText.Content value={attributes.contentNOi} /></span>

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <RichText.Content value={attributes.contentupN} /></td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentwax} /></td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <RichText.Content value={attributes.contenthOA} /></td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentTDH} /></td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> <span class="text-indigo-600 hover:text-indigo-900"><RichText.Content value={attributes.contentZjz} /></span>

                                    </td>
                                </tr>
                                <tr class="bg-gray-50">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <RichText.Content value={attributes.contentFdU} /></td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentXzK} /></td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentfss} /></td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentUas} /></td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> <span class="text-indigo-600 hover:text-indigo-900"><RichText.Content value={attributes.contentejl} /></span>

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
        