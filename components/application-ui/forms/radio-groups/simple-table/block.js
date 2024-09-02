
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-table', {
            title: 'simple table',
            icon: (<img src="data:image/jpeg;base64,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NT9OX8Momp+nL+GAp/px/hFEQi8I/PL2X2PcXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4AoE4vnLwMXzl4Aomp+nL+GMXzl4PJ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" />),
            category: 'common',
            attributes: {
  "contentJpb": {
    "type": "string",
    "default": "Pricing plans"
  },
  "contentGQm": {
    "type": "string",
    "default": "Startup"
  },
  "contentMUo": {
    "type": "string",
    "default": "$29 / mo"
  },
  "contentBTo": {
    "type": "string",
    "default": "($290 / yr)"
  },
  "contentIJy": {
    "type": "string",
    "default": "Up to 5 active job postings"
  },
  "contentYMd": {
    "type": "string",
    "default": "Business"
  },
  "contentddI": {
    "type": "string",
    "default": "$99 / mo"
  },
  "contentiNK": {
    "type": "string",
    "default": "($990 / yr)"
  },
  "contentyyo": {
    "type": "string",
    "default": "Up to 25 active job postings"
  },
  "contentzzh": {
    "type": "string",
    "default": "Enterprise"
  },
  "contentfFl": {
    "type": "string",
    "default": "$249 / mo"
  },
  "contentBvH": {
    "type": "string",
    "default": "($2490 / yr)"
  },
  "contentGpg": {
    "type": "string",
    "default": "Unlimited active job postings"
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
        <fieldset>
            <legend className="sr-only">
                <RichText tagName="span" value={attributes.contentJpb} default="Pricing plans" onChange={ (newtext) => { setAttributes({ contentJpb: newtext }); }} /></legend>
            <div className="relative bg-white rounded-md -space-y-px">
                <label className="rounded-tl-md rounded-tr-md relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none">
                    <div className="flex items-center text-sm">
                        <input type="radio" name="pricing-plan" value="Startup" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="pricing-plans-0-label" aria-describedby="pricing-plans-0-description-0 pricing-plans-0-description-1"/> <span id="pricing-plans-0-label" className="ml-3 font-medium"><RichText tagName="span" value={attributes.contentGQm} default="Startup" onChange={ (newtext) =>  {
        setAttributes({ contentGQm: newtext });
      }}
    /></span>

                    </div>
                    <p id="pricing-plans-0-description-0" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"> <span className="font-medium"><RichText tagName="span" value={attributes.contentMUo} default="$29 / mo" onChange={ (newtext) =>  {
        setAttributes({ contentMUo: newtext });
      }}
    /></span>
 <span><RichText tagName="span" value={attributes.contentBTo} default="($290 / yr)" onChange={ (newtext) =>  {
        setAttributes({ contentBTo: newtext });
      }}
    /></span>

                    </p>
                    <p id="pricing-plans-0-description-1" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right">
                        <RichText tagName="span" value={attributes.contentIJy} default="Up to 5 active job postings" onChange={ (newtext) => { setAttributes({ contentIJy: newtext }); }} /></p>
                </label>
                <label className="relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none">
                    <div className="flex items-center text-sm">
                        <input type="radio" name="pricing-plan" value="Business" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="pricing-plans-1-label" aria-describedby="pricing-plans-1-description-0 pricing-plans-1-description-1"/> <span id="pricing-plans-1-label" className="ml-3 font-medium"><RichText tagName="span" value={attributes.contentYMd} default="Business" onChange={ (newtext) =>  {
        setAttributes({ contentYMd: newtext });
      }}
    /></span>

                    </div>
                    <p id="pricing-plans-1-description-0" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"> <span className="font-medium"><RichText tagName="span" value={attributes.contentddI} default="$99 / mo" onChange={ (newtext) =>  {
        setAttributes({ contentddI: newtext });
      }}
    /></span>
 <span><RichText tagName="span" value={attributes.contentiNK} default="($990 / yr)" onChange={ (newtext) =>  {
        setAttributes({ contentiNK: newtext });
      }}
    /></span>

                    </p>
                    <p id="pricing-plans-1-description-1" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right">
                        <RichText tagName="span" value={attributes.contentyyo} default="Up to 25 active job postings" onChange={ (newtext) => { setAttributes({ contentyyo: newtext }); }} /></p>
                </label>
                <label className="rounded-bl-md rounded-br-md relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none">
                    <div className="flex items-center text-sm">
                        <input type="radio" name="pricing-plan" value="Enterprise" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="pricing-plans-2-label" aria-describedby="pricing-plans-2-description-0 pricing-plans-2-description-1"/> <span id="pricing-plans-2-label" className="ml-3 font-medium"><RichText tagName="span" value={attributes.contentzzh} default="Enterprise" onChange={ (newtext) =>  {
        setAttributes({ contentzzh: newtext });
      }}
    /></span>

                    </div>
                    <p id="pricing-plans-2-description-0" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"> <span className="font-medium"><RichText tagName="span" value={attributes.contentfFl} default="$249 / mo" onChange={ (newtext) =>  {
        setAttributes({ contentfFl: newtext });
      }}
    /></span>
 <span><RichText tagName="span" value={attributes.contentBvH} default="($2490 / yr)" onChange={ (newtext) =>  {
        setAttributes({ contentBvH: newtext });
      }}
    /></span>

                    </p>
                    <p id="pricing-plans-2-description-1" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right">
                        <RichText tagName="span" value={attributes.contentGpg} default="Unlimited active job postings" onChange={ (newtext) => { setAttributes({ contentGpg: newtext }); }} /></p>
                </label>
            </div>
        </fieldset>
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
        <fieldset>
            <legend class="sr-only">
                <RichText.Content value={attributes.contentJpb} /></legend>
            <div class="relative bg-white rounded-md -space-y-px">
                <label class="rounded-tl-md rounded-tr-md relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none">
                    <div class="flex items-center text-sm">
                        <input type="radio" name="pricing-plan" value="Startup" class="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="pricing-plans-0-label" aria-describedby="pricing-plans-0-description-0 pricing-plans-0-description-1"/> <span id="pricing-plans-0-label" class="ml-3 font-medium"><RichText.Content value={attributes.contentGQm} /></span>

                    </div>
                    <p id="pricing-plans-0-description-0" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"> <span class="font-medium"><RichText.Content value={attributes.contentMUo} /></span>
 <span><RichText.Content value={attributes.contentBTo} /></span>

                    </p>
                    <p id="pricing-plans-0-description-1" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right">
                        <RichText.Content value={attributes.contentIJy} /></p>
                </label>
                <label class="relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none">
                    <div class="flex items-center text-sm">
                        <input type="radio" name="pricing-plan" value="Business" class="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="pricing-plans-1-label" aria-describedby="pricing-plans-1-description-0 pricing-plans-1-description-1"/> <span id="pricing-plans-1-label" class="ml-3 font-medium"><RichText.Content value={attributes.contentYMd} /></span>

                    </div>
                    <p id="pricing-plans-1-description-0" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"> <span class="font-medium"><RichText.Content value={attributes.contentddI} /></span>
 <span><RichText.Content value={attributes.contentiNK} /></span>

                    </p>
                    <p id="pricing-plans-1-description-1" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right">
                        <RichText.Content value={attributes.contentyyo} /></p>
                </label>
                <label class="rounded-bl-md rounded-br-md relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none">
                    <div class="flex items-center text-sm">
                        <input type="radio" name="pricing-plan" value="Enterprise" class="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="pricing-plans-2-label" aria-describedby="pricing-plans-2-description-0 pricing-plans-2-description-1"/> <span id="pricing-plans-2-label" class="ml-3 font-medium"><RichText.Content value={attributes.contentzzh} /></span>

                    </div>
                    <p id="pricing-plans-2-description-0" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"> <span class="font-medium"><RichText.Content value={attributes.contentfFl} /></span>
 <span><RichText.Content value={attributes.contentBvH} /></span>

                    </p>
                    <p id="pricing-plans-2-description-1" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right">
                        <RichText.Content value={attributes.contentGpg} /></p>
                </label>
            </div>
        </fieldset>
    </div>
</div>
            );
            },
        });
        