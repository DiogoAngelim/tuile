
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-custom', {
            title: 'simple custom',
            icon: (<img src="data:image/jpeg;base64,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xbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqgoxbTOqAWCKMW0zqhL2NjYr2NRqtTP29swKg+4j/Sn7HnjMXFgoFmnSVWIqJ/TidIvVqKv/wAPSD7iP9KfsWB87031z0/1SRWYJ2Ifln/M7Cysb7LkqeTmomaL7ZZ5n0Ti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" />),
            category: 'common',
            attributes: {
  "contentSrt": {
    "type": "string",
    "default": " Assigned to "
  },
  "contentHVA": {
    "type": "string",
    "default": " Tom Cook "
  },
  "contentFQG": {
    "type": "string",
    "default": " Wade Cooper "
  },
  "svgilk": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgMLe": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  }
},
            edit(props) {
            const { attributes, setAttributes } = props;

            return (
                <div>
                    <InspectorControls>
                    
    <Panel>
      





















































































































































































































































































































































































































    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgilk }
            onChange={ ( value ) => {
              setAttributes({ svgilk: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  

    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgMLe }
            onChange={ ( value ) => {
              setAttributes({ svgMLe: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  
    </Panel>
                    </InspectorControls>

                    <div>
    <div>
        <div>
            <label id="listbox-label" className="block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contentSrt} default="Assigned to" onChange={ (newtext) => { setAttributes({ contentSrt: newtext }); }} /></label>
            <div className="mt-1 relative">
                <button type="button" className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label"> <span className="block truncate"><RichText tagName="span" value={attributes.contentHVA} default="Tom Cook" onChange={ (newtext) =>  {
        setAttributes({ contentHVA: newtext });
      }}
    /></span>
 <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        
        
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgilk }}
        >
      </svg>
      
      </span>

                </button>
                <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                    <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option"> <span className="font-normal block truncate"><RichText tagName="span" value={attributes.contentFQG} default="Wade Cooper" onChange={ (newtext) =>  {
        setAttributes({ contentFQG: newtext });
      }}
    /></span>
 <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
          
          
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMLe }}
        >
      </svg>
      
        </span>

                    </li>
                </ul>
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
        <div>
            <label id="listbox-label" class="block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contentSrt} /></label>
            <div class="mt-1 relative">
                <button type="button" class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label"> <span class="block truncate"><RichText.Content value={attributes.contentHVA} /></span>
 <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        
        
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgilk }}
        >
      </svg>
      
      </span>

                </button>
                <ul class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                    <li class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option"> <span class="font-normal block truncate"><RichText.Content value={attributes.contentFQG} /></span>
 <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
          
          
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMLe }}
        >
      </svg>
      
        </span>

                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        