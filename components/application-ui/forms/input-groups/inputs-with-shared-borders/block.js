
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/inputs-with-shared-borders', {
            title: 'inputs with shared borders',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentICE": {
    "type": "string",
    "default": "Card Details"
  },
  "contentFnW": {
    "type": "string",
    "default": "Card number"
  },
  "contenteKx": {
    "type": "string",
    "default": "Expiration date"
  },
  "contentRLz": {
    "type": "string",
    "default": "CVC"
  },
  "contentmXG": {
    "type": "string",
    "default": "Billing address"
  },
  "contentSps": {
    "type": "string",
    "default": "Country"
  },
  "contentVMq": {
    "type": "string",
    "default": "United States"
  },
  "contentOrt": {
    "type": "string",
    "default": "Canada"
  },
  "contentOKB": {
    "type": "string",
    "default": "Mexico"
  },
  "contentZYl": {
    "type": "string",
    "default": "ZIP / Postal code"
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
        <div>
            <fieldset>
                <legend className="block text-sm font-medium text-gray-700">
                    <RichText tagName="span" value={attributes.contentICE} default="Card Details" onChange={ (newtext) => { setAttributes({ contentICE: newtext }); }} /></legend>
                <div className="mt-1 bg-white rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="card-number" className="sr-only">
                            <RichText tagName="span" value={attributes.contentFnW} default="Card number" onChange={ (newtext) => { setAttributes({ contentFnW: newtext }); }} /></label>
                        <input type="text" name="card-number" id="card-number" className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300" placeholder="Card number"/>
                    </div>
                    <div className="flex -space-x-px">
                        <div className="w-1/2 flex-1 min-w-0">
                            <label for="card-expiration-date" className="sr-only">
                                <RichText tagName="span" value={attributes.contenteKx} default="Expiration date" onChange={ (newtext) => { setAttributes({ contenteKx: newtext }); }} /></label>
                            <input type="text" name="card-expiration-date" id="card-expiration-date" className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-bl-md bg-transparent focus:z-10 sm:text-sm border-gray-300" placeholder="MM / YY"/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <label for="card-cvc" className="sr-only">
                                <RichText tagName="span" value={attributes.contentRLz} default="CVC" onChange={ (newtext) => { setAttributes({ contentRLz: newtext }); }} /></label>
                            <input type="text" name="card-cvc" id="card-cvc" className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-br-md bg-transparent focus:z-10 sm:text-sm border-gray-300" placeholder="CVC"/>
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset className="mt-6 bg-white">
                <legend className="block text-sm font-medium text-gray-700">
                    <RichText tagName="span" value={attributes.contentmXG} default="Billing address" onChange={ (newtext) => { setAttributes({ contentmXG: newtext }); }} /></legend>
                <div className="mt-1 rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="country" className="sr-only">
                            <RichText tagName="span" value={attributes.contentSps} default="Country" onChange={ (newtext) => { setAttributes({ contentSps: newtext }); }} /></label>
                        <select id="country" name="country" autocomplete="country-name" className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                            <option>
                                <RichText tagName="span" value={attributes.contentVMq} default="United States" onChange={ (newtext) => { setAttributes({ contentVMq: newtext }); }} /></option>
                            <option>
                                <RichText tagName="span" value={attributes.contentOrt} default="Canada" onChange={ (newtext) => { setAttributes({ contentOrt: newtext }); }} /></option>
                            <option>
                                <RichText tagName="span" value={attributes.contentOKB} default="Mexico" onChange={ (newtext) => { setAttributes({ contentOKB: newtext }); }} /></option>
                        </select>
                    </div>
                    <div>
                        <label for="postal-code" className="sr-only">
                            <RichText tagName="span" value={attributes.contentZYl} default="ZIP / Postal code" onChange={ (newtext) => { setAttributes({ contentZYl: newtext }); }} /></label>
                        <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-b-md bg-transparent focus:z-10 sm:text-sm border-gray-300" placeholder="ZIP / Postal code"/>
                    </div>
                </div>
            </fieldset>
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
        <div>
            <fieldset>
                <legend class="block text-sm font-medium text-gray-700">
                    <RichText.Content value={attributes.contentICE} /></legend>
                <div class="mt-1 bg-white rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="card-number" class="sr-only">
                            <RichText.Content value={attributes.contentFnW} /></label>
                        <input type="text" name="card-number" id="card-number" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300" placeholder="Card number"/>
                    </div>
                    <div class="flex -space-x-px">
                        <div class="w-1/2 flex-1 min-w-0">
                            <label for="card-expiration-date" class="sr-only">
                                <RichText.Content value={attributes.contenteKx} /></label>
                            <input type="text" name="card-expiration-date" id="card-expiration-date" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-bl-md bg-transparent focus:z-10 sm:text-sm border-gray-300" placeholder="MM / YY"/>
                        </div>
                        <div class="flex-1 min-w-0">
                            <label for="card-cvc" class="sr-only">
                                <RichText.Content value={attributes.contentRLz} /></label>
                            <input type="text" name="card-cvc" id="card-cvc" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-br-md bg-transparent focus:z-10 sm:text-sm border-gray-300" placeholder="CVC"/>
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset class="mt-6 bg-white">
                <legend class="block text-sm font-medium text-gray-700">
                    <RichText.Content value={attributes.contentmXG} /></legend>
                <div class="mt-1 rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="country" class="sr-only">
                            <RichText.Content value={attributes.contentSps} /></label>
                        <select id="country" name="country" autocomplete="country-name" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                            <option>
                                <RichText.Content value={attributes.contentVMq} /></option>
                            <option>
                                <RichText.Content value={attributes.contentOrt} /></option>
                            <option>
                                <RichText.Content value={attributes.contentOKB} /></option>
                        </select>
                    </div>
                    <div>
                        <label for="postal-code" class="sr-only">
                            <RichText.Content value={attributes.contentZYl} /></label>
                        <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-b-md bg-transparent focus:z-10 sm:text-sm border-gray-300" placeholder="ZIP / Postal code"/>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</div>
            );
            },
        });
        