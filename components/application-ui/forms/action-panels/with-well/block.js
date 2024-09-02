
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-well', {
            title: 'with well',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentAJm": {
    "type": "string",
    "default": "Payment method"
  },
  "contentKfy": {
    "type": "string",
    "default": "Visa"
  },
  "contentyLb": {
    "type": "string",
    "default": "Ending with 4242"
  },
  "contentzdx": {
    "type": "string",
    "default": "Expires 12/20"
  },
  "contentsYa": {
    "type": "string",
    "default": " &middot; "
  },
  "contentKRK": {
    "type": "string",
    "default": "Last updated on 22 Aug 2017"
  },
  "contentrQk": {
    "type": "string",
    "default": "Edit"
  },
  "svglZF": {
    "type": "string",
    "default": "<rect width=\"36\" height=\"24\" fill=\"#224DBA\" rx=\"4\"/>\n                                <path fill=\"#fff\" d=\"M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z\"/>"
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
            value={ attributes.svglZF }
            onChange={ ( value ) => {
              setAttributes({ svglZF: value });
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
        <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                 <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentAJm} default="Payment method" onChange={ (newtext) =>  {
        setAttributes({ contentAJm: newtext });
      }}
    /></h3>

                <div className="mt-5">
                    <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
                         <h4 className="sr-only"><RichText tagName="span" value={attributes.contentKfy} default="Visa" onChange={ (newtext) =>  {
        setAttributes({ contentKfy: newtext });
      }}
    /></h4>

                        <div className="sm:flex sm:items-start">
                            
      <svg
         className="h-8 w-auto sm:flex-shrink-0 sm:h-6" viewBox="0 0 36 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglZF }}
        >
      </svg>
      
                            <div className="mt-3 sm:mt-0 sm:ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                    <RichText tagName="span" value={attributes.contentyLb} default="Ending with 4242" onChange={ (newtext) => { setAttributes({ contentyLb: newtext }); }} /></div>
                                <div className="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
                                    <div>
                                        <RichText tagName="span" value={attributes.contentzdx} default="Expires 12/20" onChange={ (newtext) => { setAttributes({ contentzdx: newtext }); }} /></div> <span className="hidden sm:mx-2 sm:inline" aria-hidden="true"><RichText tagName="span" value={attributes.contentsYa} default="&middot;" onChange={ (newtext) =>  {
        setAttributes({ contentsYa: newtext });
      }}
    /></span>

                                    <div className="mt-1 sm:mt-0">
                                        <RichText tagName="span" value={attributes.contentKRK} default="Last updated on 22 Aug 2017" onChange={ (newtext) => { setAttributes({ contentKRK: newtext }); }} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
                            <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                                <RichText tagName="span" value={attributes.contentrQk} default="Edit" onChange={ (newtext) => { setAttributes({ contentrQk: newtext }); }} /></button>
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
        <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                 <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentAJm} /></h3>

                <div class="mt-5">
                    <div class="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
                         <h4 class="sr-only"><RichText.Content value={attributes.contentKfy} /></h4>

                        <div class="sm:flex sm:items-start">
                            
      <svg
         class="h-8 w-auto sm:flex-shrink-0 sm:h-6" viewBox="0 0 36 24" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglZF }}
        >
      </svg>
      
                            <div class="mt-3 sm:mt-0 sm:ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                    <RichText.Content value={attributes.contentyLb} /></div>
                                <div class="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
                                    <div>
                                        <RichText.Content value={attributes.contentzdx} /></div> <span class="hidden sm:mx-2 sm:inline" aria-hidden="true"><RichText.Content value={attributes.contentsYa} /></span>

                                    <div class="mt-1 sm:mt-0">
                                        <RichText.Content value={attributes.contentKRK} /></div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
                            <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                                <RichText.Content value={attributes.contentrQk} /></button>
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
        