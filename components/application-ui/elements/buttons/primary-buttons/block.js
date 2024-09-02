
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/primary-buttons', {
            title: 'primary buttons',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentqPz": {
    "type": "string",
    "default": "Button text"
  },
  "contentLKp": {
    "type": "string",
    "default": "Button text"
  },
  "contentNEZ": {
    "type": "string",
    "default": "Button text"
  },
  "contentmyh": {
    "type": "string",
    "default": "Button text"
  },
  "contentArG": {
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
        <button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentqPz} default="Button text" onChange={ (newtext) => { setAttributes({ contentqPz: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentLKp} default="Button text" onChange={ (newtext) => { setAttributes({ contentLKp: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentNEZ} default="Button text" onChange={ (newtext) => { setAttributes({ contentNEZ: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentmyh} default="Button text" onChange={ (newtext) => { setAttributes({ contentmyh: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentArG} default="Button text" onChange={ (newtext) => { setAttributes({ contentArG: newtext }); }} /></button>
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
        <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentqPz} /></button>
        <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentLKp} /></button>
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentNEZ} /></button>
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentmyh} /></button>
        <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentArG} /></button>
    </div>
</div>
            );
            },
        });
        