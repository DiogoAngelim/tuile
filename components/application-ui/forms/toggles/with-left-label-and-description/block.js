
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-left-label-and-description', {
            title: 'with left label and description',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentXzJ": {
    "type": "string",
    "default": "Available to hire"
  },
  "contentqLb": {
    "type": "string",
    "default": "Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia."
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
        <div className="flex items-center justify-between"> <span className="flex-grow flex flex-col">
    <span className="text-sm font-medium text-gray-900" id="availability-label"><RichText tagName="span" value={attributes.contentXzJ} default="Available to hire" onChange={ (newtext) =>  {
        setAttributes({ contentXzJ: newtext });
      }}
    /></span>
 <span className="text-sm text-gray-500" id="availability-description"><RichText tagName="span" value={attributes.contentqLb} default="Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia." onChange={ (newtext) =>  {
        setAttributes({ contentqLb: newtext });
      }}
    /></span>
</span>
            <button type="button" className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description"> <span aria-hidden="true" className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"/>

            </button>
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
        <div class="flex items-center justify-between"> <span class="flex-grow flex flex-col">
    <span class="text-sm font-medium text-gray-900" id="availability-label"><RichText.Content value={attributes.contentXzJ} /></span>
 <span class="text-sm text-gray-500" id="availability-description"><RichText.Content value={attributes.contentqLb} /></span>
</span>
            <button type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description"> <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"/>

            </button>
        </div>
    </div>
</div>
            );
            },
        });
        