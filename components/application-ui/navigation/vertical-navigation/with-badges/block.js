
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-badges', {
            title: 'with badges',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentuWJ": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentQzn": {
    "type": "string",
    "default": " Team "
  },
  "contentUKR": {
    "type": "string",
    "default": " Projects "
  },
  "contentqQM": {
    "type": "string",
    "default": " 19 "
  },
  "contentWSv": {
    "type": "string",
    "default": " Calendar "
  },
  "contentdMC": {
    "type": "string",
    "default": " 20+ "
  },
  "contentuHA": {
    "type": "string",
    "default": " Documents "
  },
  "contentwYB": {
    "type": "string",
    "default": " Reports "
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
        <nav className="space-y-1" aria-label="Sidebar"> <span className="bg-gray-100 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="page">
    <span className="truncate"><RichText tagName="span" value={attributes.contentuWJ} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentuWJ: newtext });
      }}
    /></span>
 <span className="bg-white ml-auto inline-block py-0.5 px-3 text-xs rounded-full"> 5 </span>
</span>
            <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"> <span className="truncate"><RichText tagName="span" value={attributes.contentQzn} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentQzn: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span className="truncate"><RichText tagName="span" value={attributes.contentUKR} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentUKR: newtext });
      }}
    /></span>
 <span className="bg-gray-100 text-gray-600 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs rounded-full"><RichText tagName="span" value={attributes.contentqQM} default="19" onChange={ (newtext) =>  {
        setAttributes({ contentqQM: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span className="truncate"><RichText tagName="span" value={attributes.contentWSv} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentWSv: newtext });
      }}
    /></span>
 <span className="bg-gray-100 text-gray-600 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs rounded-full"><RichText tagName="span" value={attributes.contentdMC} default="20+" onChange={ (newtext) =>  {
        setAttributes({ contentdMC: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span className="truncate"><RichText tagName="span" value={attributes.contentuHA} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentuHA: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span className="truncate"><RichText tagName="span" value={attributes.contentwYB} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentwYB: newtext });
      }}
    /></span>
</span>
        </nav>
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
        <nav class="space-y-1" aria-label="Sidebar"> <span class="bg-gray-100 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="page">
    <span class="truncate"><RichText.Content value={attributes.contentuWJ} /></span>
 <span class="bg-white ml-auto inline-block py-0.5 px-3 text-xs rounded-full"> 5 </span>
</span>
            <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"> <span class="truncate"><RichText.Content value={attributes.contentQzn} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span class="truncate"><RichText.Content value={attributes.contentUKR} /></span>
 <span class="bg-gray-100 text-gray-600 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs rounded-full"><RichText.Content value={attributes.contentqQM} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span class="truncate"><RichText.Content value={attributes.contentWSv} /></span>
 <span class="bg-gray-100 text-gray-600 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs rounded-full"><RichText.Content value={attributes.contentdMC} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span class="truncate"><RichText.Content value={attributes.contentuHA} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span class="truncate"><RichText.Content value={attributes.contentwYB} /></span>
</span>
        </nav>
    </div>
</div>
            );
            },
        });
        