
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/white-buttons', {
            title: 'white buttons',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentnpF": {
    "type": "string",
    "default": "Button text"
  },
  "contentzyn": {
    "type": "string",
    "default": "Button text"
  },
  "contentTNQ": {
    "type": "string",
    "default": "Button text"
  },
  "contentlSp": {
    "type": "string",
    "default": "Button text"
  },
  "contentsNA": {
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
        <button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentnpF} default="Button text" onChange={ (newtext) => { setAttributes({ contentnpF: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentzyn} default="Button text" onChange={ (newtext) => { setAttributes({ contentzyn: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentTNQ} default="Button text" onChange={ (newtext) => { setAttributes({ contentTNQ: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentlSp} default="Button text" onChange={ (newtext) => { setAttributes({ contentlSp: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentsNA} default="Button text" onChange={ (newtext) => { setAttributes({ contentsNA: newtext }); }} /></button>
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
        <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentnpF} /></button>
        <button type="button" class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentzyn} /></button>
        <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentTNQ} /></button>
        <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentlSp} /></button>
        <button type="button" class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentsNA} /></button>
    </div>
</div>
            );
            },
        });
        