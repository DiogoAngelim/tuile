
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/cards', {
            title: 'cards',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentgcJ": {
    "type": "string",
    "default": "Select a mailing list"
  },
  "contentFDA": {
    "type": "string",
    "default": " Newsletter "
  },
  "contentinp": {
    "type": "string",
    "default": " Last message sent an hour ago "
  },
  "contentSZe": {
    "type": "string",
    "default": " 621 users "
  },
  "contentDnH": {
    "type": "string",
    "default": " Existing Customers "
  },
  "contentoXI": {
    "type": "string",
    "default": " Last message sent 2 weeks ago "
  },
  "contentOgc": {
    "type": "string",
    "default": " 1200 users "
  },
  "contentShz": {
    "type": "string",
    "default": " Trial Users "
  },
  "contentqCr": {
    "type": "string",
    "default": " Last message sent 4 days ago "
  },
  "contentRGz": {
    "type": "string",
    "default": " 2740 users "
  },
  "svgBvY": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"/>"
  },
  "svgVhn": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"/>"
  },
  "svgHWc": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgBvY }
            onChange={ ( value ) => {
              setAttributes({ svgBvY: value });
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
            value={ attributes.svgVhn }
            onChange={ ( value ) => {
              setAttributes({ svgVhn: value });
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
            value={ attributes.svgHWc }
            onChange={ ( value ) => {
              setAttributes({ svgHWc: value });
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
        <fieldset>
            <legend className="text-base font-medium text-gray-900">
                <RichText tagName="span" value={attributes.contentgcJ} default="Select a mailing list" onChange={ (newtext) => { setAttributes({ contentgcJ: newtext }); }} /></legend>
            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                <label className="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
                    <input type="radio" name="project-type" value="Newsletter" className="sr-only" aria-labelledby="project-type-0-label" aria-describedby="project-type-0-description-0 project-type-0-description-1"/>
                    <div className="flex-1 flex">
                        <div className="flex flex-col"> <span id="project-type-0-label" className="block text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentFDA} default="Newsletter" onChange={ (newtext) =>  {
        setAttributes({ contentFDA: newtext });
      }}
    /></span>
 <span id="project-type-0-description-0" className="mt-1 flex items-center text-sm text-gray-500"><RichText tagName="span" value={attributes.contentinp} default="Last message sent an hour ago" onChange={ (newtext) =>  {
        setAttributes({ contentinp: newtext });
      }}
    /></span>
 <span id="project-type-0-description-1" className="mt-6 text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentSZe} default="621 users" onChange={ (newtext) =>  {
        setAttributes({ contentSZe: newtext });
      }}
    /></span>

                        </div>
                    </div>
                    
      <svg
         className="h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBvY }}
        >
      </svg>
      
                    <div className="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                </label>
                <label className="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
                    <input type="radio" name="project-type" value="Existing Customers" className="sr-only" aria-labelledby="project-type-1-label" aria-describedby="project-type-1-description-0 project-type-1-description-1"/>
                    <div className="flex-1 flex">
                        <div className="flex flex-col"> <span id="project-type-1-label" className="block text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentDnH} default="Existing Customers" onChange={ (newtext) =>  {
        setAttributes({ contentDnH: newtext });
      }}
    /></span>
 <span id="project-type-1-description-0" className="mt-1 flex items-center text-sm text-gray-500"><RichText tagName="span" value={attributes.contentoXI} default="Last message sent 2 weeks ago" onChange={ (newtext) =>  {
        setAttributes({ contentoXI: newtext });
      }}
    /></span>
 <span id="project-type-1-description-1" className="mt-6 text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentOgc} default="1200 users" onChange={ (newtext) =>  {
        setAttributes({ contentOgc: newtext });
      }}
    /></span>

                        </div>
                    </div>
                    
      <svg
         className="h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVhn }}
        >
      </svg>
      
                    <div className="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                </label>
                <label className="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
                    <input type="radio" name="project-type" value="Trial Users" className="sr-only" aria-labelledby="project-type-2-label" aria-describedby="project-type-2-description-0 project-type-2-description-1"/>
                    <div className="flex-1 flex">
                        <div className="flex flex-col"> <span id="project-type-2-label" className="block text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentShz} default="Trial Users" onChange={ (newtext) =>  {
        setAttributes({ contentShz: newtext });
      }}
    /></span>
 <span id="project-type-2-description-0" className="mt-1 flex items-center text-sm text-gray-500"><RichText tagName="span" value={attributes.contentqCr} default="Last message sent 4 days ago" onChange={ (newtext) =>  {
        setAttributes({ contentqCr: newtext });
      }}
    /></span>
 <span id="project-type-2-description-1" className="mt-6 text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentRGz} default="2740 users" onChange={ (newtext) =>  {
        setAttributes({ contentRGz: newtext });
      }}
    /></span>

                        </div>
                    </div>
                    
      <svg
         className="h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHWc }}
        >
      </svg>
      
                    <div className="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                </label>
            </div>
        </fieldset>
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
        <fieldset>
            <legend class="text-base font-medium text-gray-900">
                <RichText.Content value={attributes.contentgcJ} /></legend>
            <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                <label class="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
                    <input type="radio" name="project-type" value="Newsletter" class="sr-only" aria-labelledby="project-type-0-label" aria-describedby="project-type-0-description-0 project-type-0-description-1"/>
                    <div class="flex-1 flex">
                        <div class="flex flex-col"> <span id="project-type-0-label" class="block text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentFDA} /></span>
 <span id="project-type-0-description-0" class="mt-1 flex items-center text-sm text-gray-500"><RichText.Content value={attributes.contentinp} /></span>
 <span id="project-type-0-description-1" class="mt-6 text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentSZe} /></span>

                        </div>
                    </div>
                    
      <svg
         class="h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBvY }}
        >
      </svg>
      
                    <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                </label>
                <label class="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
                    <input type="radio" name="project-type" value="Existing Customers" class="sr-only" aria-labelledby="project-type-1-label" aria-describedby="project-type-1-description-0 project-type-1-description-1"/>
                    <div class="flex-1 flex">
                        <div class="flex flex-col"> <span id="project-type-1-label" class="block text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentDnH} /></span>
 <span id="project-type-1-description-0" class="mt-1 flex items-center text-sm text-gray-500"><RichText.Content value={attributes.contentoXI} /></span>
 <span id="project-type-1-description-1" class="mt-6 text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentOgc} /></span>

                        </div>
                    </div>
                    
      <svg
         class="h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVhn }}
        >
      </svg>
      
                    <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                </label>
                <label class="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
                    <input type="radio" name="project-type" value="Trial Users" class="sr-only" aria-labelledby="project-type-2-label" aria-describedby="project-type-2-description-0 project-type-2-description-1"/>
                    <div class="flex-1 flex">
                        <div class="flex flex-col"> <span id="project-type-2-label" class="block text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentShz} /></span>
 <span id="project-type-2-description-0" class="mt-1 flex items-center text-sm text-gray-500"><RichText.Content value={attributes.contentqCr} /></span>
 <span id="project-type-2-description-1" class="mt-6 text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentRGz} /></span>

                        </div>
                    </div>
                    
      <svg
         class="h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHWc }}
        >
      </svg>
      
                    <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                </label>
            </div>
        </fieldset>
    </div>
</div>
            );
            },
        });
        