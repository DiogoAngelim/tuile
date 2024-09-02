
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/list-with-description', {
            title: 'list with description',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentIcd": {
    "type": "string",
    "default": "Plan"
  },
  "contentZoI": {
    "type": "string",
    "default": "Small"
  },
  "contentcQX": {
    "type": "string",
    "default": "4 GB RAM / 2 CPUS / 80 GB SSD Storage"
  },
  "contentKQv": {
    "type": "string",
    "default": "Medium"
  },
  "contentktV": {
    "type": "string",
    "default": "8 GB RAM / 4 CPUS / 160 GB SSD Storage"
  },
  "contentCpZ": {
    "type": "string",
    "default": "Large"
  },
  "contentcKY": {
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
                <RichText tagName="span" value={attributes.contentIcd} default="Plan" onChange={ (newtext) => { setAttributes({ contentIcd: newtext }); }} /></legend>
            <div className="space-y-5">
                <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                        <input id="small" aria-describedby="small-description" name="plan" type="radio" checked="" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                    <div className="ml-3 text-sm">
                        <label for="small" className="font-medium text-gray-700">
                            <RichText tagName="span" value={attributes.contentZoI} default="Small" onChange={ (newtext) => { setAttributes({ contentZoI: newtext }); }} /></label>
                        <p id="small-description" className="text-gray-500">
                            <RichText tagName="span" value={attributes.contentcQX} default="4 GB RAM / 2 CPUS / 80 GB SSD Storage" onChange={ (newtext) => { setAttributes({ contentcQX: newtext }); }} /></p>
                    </div>
                </div>
                <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                        <input id="medium" aria-describedby="medium-description" name="plan" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                    <div className="ml-3 text-sm">
                        <label for="medium" className="font-medium text-gray-700">
                            <RichText tagName="span" value={attributes.contentKQv} default="Medium" onChange={ (newtext) => { setAttributes({ contentKQv: newtext }); }} /></label>
                        <p id="medium-description" className="text-gray-500">
                            <RichText tagName="span" value={attributes.contentktV} default="8 GB RAM / 4 CPUS / 160 GB SSD Storage" onChange={ (newtext) => { setAttributes({ contentktV: newtext }); }} /></p>
                    </div>
                </div>
                <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                        <input id="large" aria-describedby="large-description" name="plan" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                    <div className="ml-3 text-sm">
                        <label for="large" className="font-medium text-gray-700">
                            <RichText tagName="span" value={attributes.contentCpZ} default="Large" onChange={ (newtext) => { setAttributes({ contentCpZ: newtext }); }} /></label>
                        <p id="large-description" className="text-gray-500">
                            <RichText tagName="span" value={attributes.contentcKY} default="16 GB RAM / 8 CPUS / 320 GB SSD Storage" onChange={ (newtext) => { setAttributes({ contentcKY: newtext }); }} /></p>
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
                <RichText.Content value={attributes.contentIcd} /></legend>
            <div class="space-y-5">
                <div class="relative flex items-start">
                    <div class="flex items-center h-5">
                        <input id="small" aria-describedby="small-description" name="plan" type="radio" checked="" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="small" class="font-medium text-gray-700">
                            <RichText.Content value={attributes.contentZoI} /></label>
                        <p id="small-description" class="text-gray-500">
                            <RichText.Content value={attributes.contentcQX} /></p>
                    </div>
                </div>
                <div class="relative flex items-start">
                    <div class="flex items-center h-5">
                        <input id="medium" aria-describedby="medium-description" name="plan" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="medium" class="font-medium text-gray-700">
                            <RichText.Content value={attributes.contentKQv} /></label>
                        <p id="medium-description" class="text-gray-500">
                            <RichText.Content value={attributes.contentktV} /></p>
                    </div>
                </div>
                <div class="relative flex items-start">
                    <div class="flex items-center h-5">
                        <input id="large" aria-describedby="large-description" name="plan" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="large" class="font-medium text-gray-700">
                            <RichText.Content value={attributes.contentCpZ} /></label>
                        <p id="large-description" class="text-gray-500">
                            <RichText.Content value={attributes.contentcKY} /></p>
                    </div>
                </div>
            </div>
        </fieldset>
    </div>
</div>
            );
            },
        });
        