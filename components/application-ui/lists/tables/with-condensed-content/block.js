
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-condensed-content', {
            title: 'with condensed content',
            icon: (<img src="data:image/jpeg;base64,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ij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6jij4l6kQBLij4l6n1NPuZA+NfNd4HoD4nuk/qfQAAAAAARs/ly/QkRs/ly/QD4ACoAGZytQ7RVa9RpsJ6V/wBxCdkJOmz8sYvuf5u/qBpgUeN2mxrrMmr4fMlLDc4X2wobrU4d6T3ff8l3iPanC+HzLLsbMx54latnVdVwzcH0TS32fqILwFLjdp9PvlkRnDJx+RQ8l8+pw46vHH5tEsTtDjZNFtzxM6mNdSuXNof9pB9zjtvv+neILgFLR2mwbK8qWRVk4csWtW2QyauGXA+5pLfc57e1lCwMy2rBzY5GPj8+NN1PA5w+Ul1/h3733r6CDRAzuPr8sm3RrbHbhwzKrbJ02UpqfDBS34t90lvunt1+x0YHabBz8qqiFWVV8QpPHsuqcYXpd/C/0+uwgugU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Q9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8uHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmry4e1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5cPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXlQ9qHJq8qHtQADk1eVD2ocmryoe1AAOTV5UPahyavKh7UAA5NXl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" />),
            category: 'common',
            attributes: {
  "contentFpW": {
    "type": "string",
    "default": "Transactions"
  },
  "contentmzQ": {
    "type": "string",
    "default": "A table of placeholder stock market data that does not make any sense."
  },
  "contentDTE": {
    "type": "string",
    "default": "Export"
  },
  "contentzDl": {
    "type": "string",
    "default": "Transaction ID"
  },
  "contentXCW": {
    "type": "string",
    "default": "Company"
  },
  "contentuod": {
    "type": "string",
    "default": "Share"
  },
  "contentVWx": {
    "type": "string",
    "default": "Commision"
  },
  "contentWGz": {
    "type": "string",
    "default": "Price"
  },
  "contentiGR": {
    "type": "string",
    "default": "Quantity"
  },
  "contentSth": {
    "type": "string",
    "default": "Net amount"
  },
  "contentwjJ": {
    "type": "string",
    "default": "Edit"
  },
  "contentsPm": {
    "type": "string",
    "default": "AAPS0L"
  },
  "contentkkZ": {
    "type": "string",
    "default": "Chase &amp; Co."
  },
  "contentOqL": {
    "type": "string",
    "default": "CAC"
  },
  "contentmET": {
    "type": "string",
    "default": "+$4.37"
  },
  "contentHVx": {
    "type": "string",
    "default": "$3,509.00"
  },
  "contentigi": {
    "type": "string",
    "default": "12.00"
  },
  "contentfqz": {
    "type": "string",
    "default": "$4,397.00"
  },
  "contentGod": {
    "type": "string",
    "default": "Edit"
  },
  "contentFQt": {
    "type": "string",
    "default": ", AAPS0L"
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
                     <h1 className="text-xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentFpW} default="Transactions" onChange={ (newtext) =>  {
        setAttributes({ contentFpW: newtext });
      }}
    /></h1>

                    <p className="mt-2 text-sm text-gray-700">
                        <RichText tagName="span" value={attributes.contentmzQ} default="A table of placeholder stock market data that does not make any sense." onChange={ (newtext) => { setAttributes({ contentmzQ: newtext }); }} /></p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText tagName="span" value={attributes.contentDTE} default="Export" onChange={ (newtext) => { setAttributes({ contentDTE: newtext }); }} /></button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            <RichText tagName="span" value={attributes.contentzDl} default="Transaction ID" onChange={ (newtext) => { setAttributes({ contentzDl: newtext }); }} /></th>
                                        <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentXCW} default="Company" onChange={ (newtext) => { setAttributes({ contentXCW: newtext }); }} /></th>
                                        <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentuod} default="Share" onChange={ (newtext) => { setAttributes({ contentuod: newtext }); }} /></th>
                                        <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentVWx} default="Commision" onChange={ (newtext) => { setAttributes({ contentVWx: newtext }); }} /></th>
                                        <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentWGz} default="Price" onChange={ (newtext) => { setAttributes({ contentWGz: newtext }); }} /></th>
                                        <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentiGR} default="Quantity" onChange={ (newtext) => { setAttributes({ contentiGR: newtext }); }} /></th>
                                        <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentSth} default="Net amount" onChange={ (newtext) => { setAttributes({ contentSth: newtext }); }} /></th>
                                        <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6"> <span className="sr-only"><RichText tagName="span" value={attributes.contentwjJ} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentwjJ: newtext });
      }}
    /></span>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                                            <RichText tagName="span" value={attributes.contentsPm} default="AAPS0L" onChange={ (newtext) => { setAttributes({ contentsPm: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                                            <RichText tagName="span" value={attributes.contentkkZ} default="Chase &amp; Co." onChange={ (newtext) => { setAttributes({ contentkkZ: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                                            <RichText tagName="span" value={attributes.contentOqL} default="CAC" onChange={ (newtext) => { setAttributes({ contentOqL: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentmET} default="+$4.37" onChange={ (newtext) => { setAttributes({ contentmET: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentHVx} default="$3,509.00" onChange={ (newtext) => { setAttributes({ contentHVx: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentigi} default="12.00" onChange={ (newtext) => { setAttributes({ contentigi: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentfqz} default="$4,397.00" onChange={ (newtext) => { setAttributes({ contentfqz: newtext }); }} /></td>
                                        <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"> <span className="text-indigo-600 hover:text-indigo-900"><RichText tagName="span" value={attributes.contentGod} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentGod: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentFQt} default=", AAPS0L" onChange={ (newtext) =>  {
        setAttributes({ contentFQt: newtext });
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
                     <h1 class="text-xl font-semibold text-gray-900"><RichText.Content value={attributes.contentFpW} /></h1>

                    <p class="mt-2 text-sm text-gray-700">
                        <RichText.Content value={attributes.contentmzQ} /></p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText.Content value={attributes.contentDTE} /></button>
                </div>
            </div>
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            <RichText.Content value={attributes.contentzDl} /></th>
                                        <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentXCW} /></th>
                                        <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentuod} /></th>
                                        <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentVWx} /></th>
                                        <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentWGz} /></th>
                                        <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentiGR} /></th>
                                        <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentSth} /></th>
                                        <th scope="col" class="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6"> <span class="sr-only"><RichText.Content value={attributes.contentwjJ} /></span>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                                            <RichText.Content value={attributes.contentsPm} /></td>
                                        <td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                                            <RichText.Content value={attributes.contentkkZ} /></td>
                                        <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                                            <RichText.Content value={attributes.contentOqL} /></td>
                                        <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentmET} /></td>
                                        <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentHVx} /></td>
                                        <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentigi} /></td>
                                        <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentfqz} /></td>
                                        <td class="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"> <span class="text-indigo-600 hover:text-indigo-900"><RichText.Content value={attributes.contentGod} /><span class="sr-only"><RichText.Content value={attributes.contentFQt} /></span></span>
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
        