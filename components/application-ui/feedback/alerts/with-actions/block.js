
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-actions', {
            title: 'with actions',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentrxE": {
    "type": "string",
    "default": "Order completed"
  },
  "contentQLB": {
    "type": "string",
    "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
  },
  "contentjSa": {
    "type": "string",
    "default": "View status"
  },
  "contentPcR": {
    "type": "string",
    "default": "Dismiss"
  },
  "svgLeZ": {
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
            value={ attributes.svgLeZ }
            onChange={ ( value ) => {
              setAttributes({ svgLeZ: value });
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
        <div className="rounded-md bg-green-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    
      <svg
         className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLeZ }}
        >
      </svg>
      
                </div>
                <div className="ml-3">
                     <h3 className="text-sm font-medium text-green-800"><RichText tagName="span" value={attributes.contentrxE} default="Order completed" onChange={ (newtext) =>  {
        setAttributes({ contentrxE: newtext });
      }}
    /></h3>

                    <div className="mt-2 text-sm text-green-700">
                        <p>
                            <RichText tagName="span" value={attributes.contentQLB} default="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." onChange={ (newtext) => { setAttributes({ contentQLB: newtext }); }} /></p>
                    </div>
                    <div className="mt-4">
                        <div className="-mx-2 -my-1.5 flex">
                            <button type="button" className="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                                <RichText tagName="span" value={attributes.contentjSa} default="View status" onChange={ (newtext) => { setAttributes({ contentjSa: newtext }); }} /></button>
                            <button type="button" className="ml-3 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                                <RichText tagName="span" value={attributes.contentPcR} default="Dismiss" onChange={ (newtext) => { setAttributes({ contentPcR: newtext }); }} /></button>
                        </div>
                    </div>
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
        <div class="rounded-md bg-green-50 p-4">
            <div class="flex">
                <div class="flex-shrink-0">
                    
      <svg
         class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLeZ }}
        >
      </svg>
      
                </div>
                <div class="ml-3">
                     <h3 class="text-sm font-medium text-green-800"><RichText.Content value={attributes.contentrxE} /></h3>

                    <div class="mt-2 text-sm text-green-700">
                        <p>
                            <RichText.Content value={attributes.contentQLB} /></p>
                    </div>
                    <div class="mt-4">
                        <div class="-mx-2 -my-1.5 flex">
                            <button type="button" class="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                                <RichText.Content value={attributes.contentjSa} /></button>
                            <button type="button" class="ml-3 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                                <RichText.Content value={attributes.contentPcR} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        