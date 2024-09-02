
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/round-buttons', {
            title: 'round buttons',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentbLc": {
    "type": "string",
    "default": "Button text"
  },
  "contentMJd": {
    "type": "string",
    "default": "Button text"
  },
  "contentDYw": {
    "type": "string",
    "default": "Button text"
  },
  "contentmwR": {
    "type": "string",
    "default": "Button text"
  },
  "contentbMZ": {
    "type": "string",
    "default": "Button text"
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
        <button type="button" className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentbLc} default="Button text" onChange={ (newtext) => { setAttributes({ contentbLc: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentMJd} default="Button text" onChange={ (newtext) => { setAttributes({ contentMJd: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentDYw} default="Button text" onChange={ (newtext) => { setAttributes({ contentDYw: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentmwR} default="Button text" onChange={ (newtext) => { setAttributes({ contentmwR: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentbMZ} default="Button text" onChange={ (newtext) => { setAttributes({ contentbMZ: newtext }); }} /></button>
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
        <button type="button" class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentbLc} /></button>
        <button type="button" class="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentMJd} /></button>
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentDYw} /></button>
        <button type="button" class="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentmwR} /></button>
        <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentbMZ} /></button>
    </div>
</div>
            );
            },
        });
        