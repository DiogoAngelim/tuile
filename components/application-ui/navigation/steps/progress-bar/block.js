
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/progress-bar', {
            title: 'progress bar',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentEIF": {
    "type": "string",
    "default": "Status"
  },
  "contentgPS": {
    "type": "string",
    "default": "Migrating MySQL database..."
  },
  "contentFcB": {
    "type": "string",
    "default": "Copying files"
  },
  "contentDid": {
    "type": "string",
    "default": "Migrating database"
  },
  "contentWfL": {
    "type": "string",
    "default": "Compiling assets"
  },
  "contentBfy": {
    "type": "string",
    "default": "Deployed"
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
        <div className="">
             <h4 className="sr-only"><RichText tagName="span" value={attributes.contentEIF} default="Status" onChange={ (newtext) =>  {
        setAttributes({ contentEIF: newtext });
      }}
    /></h4>

            <p className="text-sm font-medium text-gray-900">
                <RichText tagName="span" value={attributes.contentgPS} default="Migrating MySQL database..." onChange={ (newtext) => { setAttributes({ contentgPS: newtext }); }} /></p>
            <div className="mt-6" aria-hidden="true">
                <div className="bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-2 bg-indigo-600 rounded-full" style="width: 37.5%"/>
                </div>
                <div className="hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-6">
                    <div className="text-indigo-600">
                        <RichText tagName="span" value={attributes.contentFcB} default="Copying files" onChange={ (newtext) => { setAttributes({ contentFcB: newtext }); }} /></div>
                    <div className="text-center text-indigo-600">
                        <RichText tagName="span" value={attributes.contentDid} default="Migrating database" onChange={ (newtext) => { setAttributes({ contentDid: newtext }); }} /></div>
                    <div className="text-center">
                        <RichText tagName="span" value={attributes.contentWfL} default="Compiling assets" onChange={ (newtext) => { setAttributes({ contentWfL: newtext }); }} /></div>
                    <div className="text-right">
                        <RichText tagName="span" value={attributes.contentBfy} default="Deployed" onChange={ (newtext) => { setAttributes({ contentBfy: newtext }); }} /></div>
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
        <div class="">
             <h4 class="sr-only"><RichText.Content value={attributes.contentEIF} /></h4>

            <p class="text-sm font-medium text-gray-900">
                <RichText.Content value={attributes.contentgPS} /></p>
            <div class="mt-6" aria-hidden="true">
                <div class="bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-2 bg-indigo-600 rounded-full" style="width: 37.5%"/>
                </div>
                <div class="hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-6">
                    <div class="text-indigo-600">
                        <RichText.Content value={attributes.contentFcB} /></div>
                    <div class="text-center text-indigo-600">
                        <RichText.Content value={attributes.contentDid} /></div>
                    <div class="text-center">
                        <RichText.Content value={attributes.contentWfL} /></div>
                    <div class="text-right">
                        <RichText.Content value={attributes.contentBfy} /></div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        