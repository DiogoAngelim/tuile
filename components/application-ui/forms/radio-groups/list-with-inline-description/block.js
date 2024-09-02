
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/list-with-inline-description', {
            title: 'list with inline description',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentovR": {
    "type": "string",
    "default": "Plan"
  },
  "contentunq": {
    "type": "string",
    "default": "Small"
  },
  "contentdxc": {
    "type": "string",
    "default": "4 GB RAM / 2 CPUS / 80 GB SSD Storage"
  },
  "contentggG": {
    "type": "string",
    "default": "Medium"
  },
  "contentPpi": {
    "type": "string",
    "default": "8 GB RAM / 4 CPUS / 160 GB SSD Storage"
  },
  "contentsOg": {
    "type": "string",
    "default": "Large"
  },
  "contentTcO": {
    "type": "string",
    "default": "16 GB RAM / 8 CPUS / 320 GB SSD Storage"
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
                <RichText tagName="span" value={attributes.contentovR} default="Plan" onChange={ (newtext) => { setAttributes({ contentovR: newtext }); }} /></legend>
            <div className="space-y-5">
                <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                        <input id="small" aria-describedby="small-description" name="plan" type="radio" checked="" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                    <div className="ml-3 text-sm">
                        <label for="small" className="font-medium text-gray-700">
                            <RichText tagName="span" value={attributes.contentunq} default="Small" onChange={ (newtext) => { setAttributes({ contentunq: newtext }); }} /></label> <span id="small-description" className="text-gray-500"><RichText tagName="span" value={attributes.contentdxc} default="4 GB RAM / 2 CPUS / 80 GB SSD Storage" onChange={ (newtext) =>  {
        setAttributes({ contentdxc: newtext });
      }}
    /></span>

                    </div>
                </div>
                <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                        <input id="medium" aria-describedby="medium-description" name="plan" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                    <div className="ml-3 text-sm">
                        <label for="medium" className="font-medium text-gray-700">
                            <RichText tagName="span" value={attributes.contentggG} default="Medium" onChange={ (newtext) => { setAttributes({ contentggG: newtext }); }} /></label> <span id="medium-description" className="text-gray-500"><RichText tagName="span" value={attributes.contentPpi} default="8 GB RAM / 4 CPUS / 160 GB SSD Storage" onChange={ (newtext) =>  {
        setAttributes({ contentPpi: newtext });
      }}
    /></span>

                    </div>
                </div>
                <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                        <input id="large" aria-describedby="large-description" name="plan" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                    <div className="ml-3 text-sm">
                        <label for="large" className="font-medium text-gray-700">
                            <RichText tagName="span" value={attributes.contentsOg} default="Large" onChange={ (newtext) => { setAttributes({ contentsOg: newtext }); }} /></label> <span id="large-description" className="text-gray-500"><RichText tagName="span" value={attributes.contentTcO} default="16 GB RAM / 8 CPUS / 320 GB SSD Storage" onChange={ (newtext) =>  {
        setAttributes({ contentTcO: newtext });
      }}
    /></span>

                    </div>
                </div>
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
                <RichText.Content value={attributes.contentovR} /></legend>
            <div class="space-y-5">
                <div class="relative flex items-start">
                    <div class="flex items-center h-5">
                        <input id="small" aria-describedby="small-description" name="plan" type="radio" checked="" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="small" class="font-medium text-gray-700">
                            <RichText.Content value={attributes.contentunq} /></label> <span id="small-description" class="text-gray-500"><RichText.Content value={attributes.contentdxc} /></span>

                    </div>
                </div>
                <div class="relative flex items-start">
                    <div class="flex items-center h-5">
                        <input id="medium" aria-describedby="medium-description" name="plan" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="medium" class="font-medium text-gray-700">
                            <RichText.Content value={attributes.contentggG} /></label> <span id="medium-description" class="text-gray-500"><RichText.Content value={attributes.contentPpi} /></span>

                    </div>
                </div>
                <div class="relative flex items-start">
                    <div class="flex items-center h-5">
                        <input id="large" aria-describedby="large-description" name="plan" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="large" class="font-medium text-gray-700">
                            <RichText.Content value={attributes.contentsOg} /></label> <span id="large-description" class="text-gray-500"><RichText.Content value={attributes.contentTcO} /></span>

                    </div>
                </div>
            </div>
        </fieldset>
    </div>
</div>
            );
            },
        });
        