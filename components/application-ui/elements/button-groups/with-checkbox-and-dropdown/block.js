
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-checkbox-and-dropdown', {
            title: 'with checkbox and dropdown',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentips": {
    "type": "string",
    "default": "Select all"
  },
  "contentXBy": {
    "type": "string",
    "default": "Select message type"
  },
  "contentJpw": {
    "type": "string",
    "default": "Unread messages"
  },
  "contentOio": {
    "type": "string",
    "default": "Sent messages"
  },
  "contentoXI": {
    "type": "string",
    "default": "All messages"
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
<span className="relative z-0 inline-flex shadow-sm rounded-md">
  <span className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white">
    <label for="select-all" className="sr-only"><RichText tagName="span" value={attributes.contentips} default="Select all" onChange={ (newtext) =>  {
        setAttributes({ contentips: newtext });
      }}
    /></label>
    <input id="select-all" type="checkbox" name="select-all" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
  </span>

        <label for="message-type" className="sr-only">
            <RichText tagName="span" value={attributes.contentXBy} default="Select message type" onChange={ (newtext) => { setAttributes({ contentXBy: newtext }); }} /></label>
        <select id="message-type" name="message-type" className="-ml-px block w-full pl-3 pr-9 py-2 rounded-l-none rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
            <option>
                <RichText tagName="span" value={attributes.contentJpw} default="Unread messages" onChange={ (newtext) => { setAttributes({ contentJpw: newtext }); }} /></option>
            <option>
                <RichText tagName="span" value={attributes.contentOio} default="Sent messages" onChange={ (newtext) => { setAttributes({ contentOio: newtext }); }} /></option>
            <option>
                <RichText tagName="span" value={attributes.contentoXI} default="All messages" onChange={ (newtext) => { setAttributes({ contentoXI: newtext }); }} /></option>
        </select>
        </span>
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
<span class="relative z-0 inline-flex shadow-sm rounded-md">
  <span class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white">
    <label for="select-all" class="sr-only"><RichText.Content value={attributes.contentips} /></label>
    <input id="select-all" type="checkbox" name="select-all" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
  </span>

        <label for="message-type" class="sr-only">
            <RichText.Content value={attributes.contentXBy} /></label>
        <select id="message-type" name="message-type" class="-ml-px block w-full pl-3 pr-9 py-2 rounded-l-none rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
            <option>
                <RichText.Content value={attributes.contentJpw} /></option>
            <option>
                <RichText.Content value={attributes.contentOio} /></option>
            <option>
                <RichText.Content value={attributes.contentoXI} /></option>
        </select>
        </span>
    </div>
</div>
            );
            },
        });
        