
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-summary-rows', {
            title: 'with summary rows',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentVbz": {
    "type": "string",
    "default": "Invoice"
  },
  "contentuEf": {
    "type": "string",
    "default": "For work completed from "
  },
  "contenteuI": {
    "type": "string",
    "default": "August 1, 2022"
  },
  "contentbWe": {
    "type": "string",
    "default": " to "
  },
  "contentgRe": {
    "type": "string",
    "default": "August 31, 2022"
  },
  "contentkcW": {
    "type": "string",
    "default": "."
  },
  "contentmhL": {
    "type": "string",
    "default": "Print"
  },
  "contentQBm": {
    "type": "string",
    "default": "Project"
  },
  "contentMOx": {
    "type": "string",
    "default": "Hours"
  },
  "contentXrv": {
    "type": "string",
    "default": "Rate"
  },
  "contentjdT": {
    "type": "string",
    "default": "Price"
  },
  "contentylD": {
    "type": "string",
    "default": "New Advertising Campaign"
  },
  "contentcTd": {
    "type": "string",
    "default": "12.0 hours at $75.00"
  },
  "contentjcV": {
    "type": "string",
    "default": "12.0"
  },
  "contentoWS": {
    "type": "string",
    "default": "$75.00"
  },
  "contentkkL": {
    "type": "string",
    "default": "$900.00"
  },
  "contentJhU": {
    "type": "string",
    "default": "Subtotal"
  },
  "contentNDT": {
    "type": "string",
    "default": "Subtotal"
  },
  "contentiAc": {
    "type": "string",
    "default": "$3,900.00"
  },
  "contentVxe": {
    "type": "string",
    "default": "Tax"
  },
  "contentcUm": {
    "type": "string",
    "default": "Tax"
  },
  "contentoLe": {
    "type": "string",
    "default": "$585.00"
  },
  "contentpTJ": {
    "type": "string",
    "default": "Total"
  },
  "contentXMi": {
    "type": "string",
    "default": "Total"
  },
  "contentcQj": {
    "type": "string",
    "default": "$4,485.00"
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
                     <h1 className="text-xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentVbz} default="Invoice" onChange={ (newtext) =>  {
        setAttributes({ contentVbz: newtext });
      }}
    /></h1>

                    <p className="mt-2 text-sm text-gray-700">
                        <RichText tagName="span" value={attributes.contentuEf} default="For work completed from" onChange={ (newtext) => { setAttributes({ contentuEf: newtext }); }} />
                            <time datetime="2022-08-01">
                                <RichText tagName="span" value={attributes.contenteuI} default="August 1, 2022" onChange={ (newtext) => { setAttributes({ contenteuI: newtext }); }} /></time>
                            <RichText tagName="span" value={attributes.contentbWe} default="to" onChange={ (newtext) => { setAttributes({ contentbWe: newtext }); }} />
                                <time datetime="2022-08-31">
                                    <RichText tagName="span" value={attributes.contentgRe} default="August 31, 2022" onChange={ (newtext) => { setAttributes({ contentgRe: newtext }); }} /></time>
                                <RichText tagName="span" value={attributes.contentkcW} default="." onChange={ (newtext) => { setAttributes({ contentkcW: newtext }); }} /></p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText tagName="span" value={attributes.contentmhL} default="Print" onChange={ (newtext) => { setAttributes({ contentmhL: newtext }); }} /></button>
                </div>
            </div>
            <div className="-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0">
                                <RichText tagName="span" value={attributes.contentQBm} default="Project" onChange={ (newtext) => { setAttributes({ contentQBm: newtext }); }} /></th>
                            <th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">
                                <RichText tagName="span" value={attributes.contentMOx} default="Hours" onChange={ (newtext) => { setAttributes({ contentMOx: newtext }); }} /></th>
                            <th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">
                                <RichText tagName="span" value={attributes.contentXrv} default="Rate" onChange={ (newtext) => { setAttributes({ contentXrv: newtext }); }} /></th>
                            <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">
                                <RichText tagName="span" value={attributes.contentjdT} default="Price" onChange={ (newtext) => { setAttributes({ contentjdT: newtext }); }} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200">
                            <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                                <div className="font-medium text-gray-900">
                                    <RichText tagName="span" value={attributes.contentylD} default="New Advertising Campaign" onChange={ (newtext) => { setAttributes({ contentylD: newtext }); }} /></div>
                                <div className="mt-0.5 text-gray-500 sm:hidden">
                                    <RichText tagName="span" value={attributes.contentcTd} default="12.0 hours at $75.00" onChange={ (newtext) => { setAttributes({ contentcTd: newtext }); }} /></div>
                            </td>
                            <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                                <RichText tagName="span" value={attributes.contentjcV} default="12.0" onChange={ (newtext) => { setAttributes({ contentjcV: newtext }); }} /></td>
                            <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                                <RichText tagName="span" value={attributes.contentoWS} default="$75.00" onChange={ (newtext) => { setAttributes({ contentoWS: newtext }); }} /></td>
                            <td className="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                                <RichText tagName="span" value={attributes.contentkkL} default="$900.00" onChange={ (newtext) => { setAttributes({ contentkkL: newtext }); }} /></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row" colspan="3" className="hidden pl-6 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0">
                                <RichText tagName="span" value={attributes.contentJhU} default="Subtotal" onChange={ (newtext) => { setAttributes({ contentJhU: newtext }); }} /></th>
                            <th scope="row" className="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">
                                <RichText tagName="span" value={attributes.contentNDT} default="Subtotal" onChange={ (newtext) => { setAttributes({ contentNDT: newtext }); }} /></th>
                            <td className="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                                <RichText tagName="span" value={attributes.contentiAc} default="$3,900.00" onChange={ (newtext) => { setAttributes({ contentiAc: newtext }); }} /></td>
                        </tr>
                        <tr>
                            <th scope="row" colspan="3" className="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0">
                                <RichText tagName="span" value={attributes.contentVxe} default="Tax" onChange={ (newtext) => { setAttributes({ contentVxe: newtext }); }} /></th>
                            <th scope="row" className="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden">
                                <RichText tagName="span" value={attributes.contentcUm} default="Tax" onChange={ (newtext) => { setAttributes({ contentcUm: newtext }); }} /></th>
                            <td className="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                                <RichText tagName="span" value={attributes.contentoLe} default="$585.00" onChange={ (newtext) => { setAttributes({ contentoLe: newtext }); }} /></td>
                        </tr>
                        <tr>
                            <th scope="row" colspan="3" className="hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0">
                                <RichText tagName="span" value={attributes.contentpTJ} default="Total" onChange={ (newtext) => { setAttributes({ contentpTJ: newtext }); }} /></th>
                            <th scope="row" className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">
                                <RichText tagName="span" value={attributes.contentXMi} default="Total" onChange={ (newtext) => { setAttributes({ contentXMi: newtext }); }} /></th>
                            <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">
                                <RichText tagName="span" value={attributes.contentcQj} default="$4,485.00" onChange={ (newtext) => { setAttributes({ contentcQj: newtext }); }} /></td>
                        </tr>
                    </tfoot>
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
                     <h1 class="text-xl font-semibold text-gray-900"><RichText.Content value={attributes.contentVbz} /></h1>

                    <p class="mt-2 text-sm text-gray-700">
                        <RichText.Content value={attributes.contentuEf} />
                            <time datetime="2022-08-01">
                                <RichText.Content value={attributes.contenteuI} /></time>
                            <RichText.Content value={attributes.contentbWe} />
                                <time datetime="2022-08-31">
                                    <RichText.Content value={attributes.contentgRe} /></time>
                                <RichText.Content value={attributes.contentkcW} /></p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText.Content value={attributes.contentmhL} /></button>
                </div>
            </div>
            <div class="-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0">
                                <RichText.Content value={attributes.contentQBm} /></th>
                            <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">
                                <RichText.Content value={attributes.contentMOx} /></th>
                            <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">
                                <RichText.Content value={attributes.contentXrv} /></th>
                            <th scope="col" class="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">
                                <RichText.Content value={attributes.contentjdT} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-gray-200">
                            <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                                <div class="font-medium text-gray-900">
                                    <RichText.Content value={attributes.contentylD} /></div>
                                <div class="mt-0.5 text-gray-500 sm:hidden">
                                    <RichText.Content value={attributes.contentcTd} /></div>
                            </td>
                            <td class="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                                <RichText.Content value={attributes.contentjcV} /></td>
                            <td class="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                                <RichText.Content value={attributes.contentoWS} /></td>
                            <td class="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                                <RichText.Content value={attributes.contentkkL} /></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0">
                                <RichText.Content value={attributes.contentJhU} /></th>
                            <th scope="row" class="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">
                                <RichText.Content value={attributes.contentNDT} /></th>
                            <td class="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                                <RichText.Content value={attributes.contentiAc} /></td>
                        </tr>
                        <tr>
                            <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0">
                                <RichText.Content value={attributes.contentVxe} /></th>
                            <th scope="row" class="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden">
                                <RichText.Content value={attributes.contentcUm} /></th>
                            <td class="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                                <RichText.Content value={attributes.contentoLe} /></td>
                        </tr>
                        <tr>
                            <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0">
                                <RichText.Content value={attributes.contentpTJ} /></th>
                            <th scope="row" class="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">
                                <RichText.Content value={attributes.contentXMi} /></th>
                            <td class="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">
                                <RichText.Content value={attributes.contentcQj} /></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        