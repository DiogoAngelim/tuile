
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/secondary-buttons', {
            title: 'secondary buttons',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentKGK": {
    "type": "string",
    "default": "Button text"
  },
  "contentoBo": {
    "type": "string",
    "default": "Button text"
  },
  "contentrcP": {
    "type": "string",
    "default": "Button text"
  },
  "contenthCY": {
    "type": "string",
    "default": "Button text"
  },
  "contentkWj": {
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
        <button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentKGK} default="Button text" onChange={ (newtext) => { setAttributes({ contentKGK: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentoBo} default="Button text" onChange={ (newtext) => { setAttributes({ contentoBo: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentrcP} default="Button text" onChange={ (newtext) => { setAttributes({ contentrcP: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contenthCY} default="Button text" onChange={ (newtext) => { setAttributes({ contenthCY: newtext }); }} /></button>
        <button type="button" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText tagName="span" value={attributes.contentkWj} default="Button text" onChange={ (newtext) => { setAttributes({ contentkWj: newtext }); }} /></button>
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
        <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentKGK} /></button>
        <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentoBo} /></button>
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentrcP} /></button>
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contenthCY} /></button>
        <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RichText.Content value={attributes.contentkWj} /></button>
    </div>
</div>
            );
            },
        });
        