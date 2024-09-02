
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-list', {
            title: 'simple list',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentCvM": {
    "type": "string",
    "default": "Notifications"
  },
  "contentrVB": {
    "type": "string",
    "default": "How do you prefer to receive notifications?"
  },
  "contentdYN": {
    "type": "string",
    "default": "Notification method"
  },
  "contentfcS": {
    "type": "string",
    "default": " Email "
  },
  "contentxGK": {
    "type": "string",
    "default": " Phone (SMS) "
  },
  "contentnAH": {
    "type": "string",
    "default": " Push notification "
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
            <label className="text-base font-medium text-gray-900">
                <RichText tagName="span" value={attributes.contentCvM} default="Notifications" onChange={ (newtext) => { setAttributes({ contentCvM: newtext }); }} /></label>
            <p className="text-sm leading-5 text-gray-500">
                <RichText tagName="span" value={attributes.contentrVB} default="How do you prefer to receive notifications?" onChange={ (newtext) => { setAttributes({ contentrVB: newtext }); }} /></p>
            <fieldset className="mt-4">
                <legend className="sr-only">
                    <RichText tagName="span" value={attributes.contentdYN} default="Notification method" onChange={ (newtext) => { setAttributes({ contentdYN: newtext }); }} /></legend>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <input id="email" name="notification-method" type="radio" checked="" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        <label for="email" className="ml-3 block text-sm font-medium text-gray-700">
                            <RichText tagName="span" value={attributes.contentfcS} default="Email" onChange={ (newtext) => { setAttributes({ contentfcS: newtext }); }} /></label>
                    </div>
                    <div className="flex items-center">
                        <input id="sms" name="notification-method" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        <label for="sms" className="ml-3 block text-sm font-medium text-gray-700">
                            <RichText tagName="span" value={attributes.contentxGK} default="Phone (SMS)" onChange={ (newtext) => { setAttributes({ contentxGK: newtext }); }} /></label>
                    </div>
                    <div className="flex items-center">
                        <input id="push" name="notification-method" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        <label for="push" className="ml-3 block text-sm font-medium text-gray-700">
                            <RichText tagName="span" value={attributes.contentnAH} default="Push notification" onChange={ (newtext) => { setAttributes({ contentnAH: newtext }); }} /></label>
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
            <label class="text-base font-medium text-gray-900">
                <RichText.Content value={attributes.contentCvM} /></label>
            <p class="text-sm leading-5 text-gray-500">
                <RichText.Content value={attributes.contentrVB} /></p>
            <fieldset class="mt-4">
                <legend class="sr-only">
                    <RichText.Content value={attributes.contentdYN} /></legend>
                <div class="space-y-4">
                    <div class="flex items-center">
                        <input id="email" name="notification-method" type="radio" checked="" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        <label for="email" class="ml-3 block text-sm font-medium text-gray-700">
                            <RichText.Content value={attributes.contentfcS} /></label>
                    </div>
                    <div class="flex items-center">
                        <input id="sms" name="notification-method" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        <label for="sms" class="ml-3 block text-sm font-medium text-gray-700">
                            <RichText.Content value={attributes.contentxGK} /></label>
                    </div>
                    <div class="flex items-center">
                        <input id="push" name="notification-method" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        <label for="push" class="ml-3 block text-sm font-medium text-gray-700">
                            <RichText.Content value={attributes.contentnAH} /></label>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</div>
            );
            },
        });
        