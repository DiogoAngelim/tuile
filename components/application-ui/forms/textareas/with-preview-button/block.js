
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-preview-button', {
            title: 'with preview button',
            icon: (<img src="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUJ5T4W9HKfC3oFCeU+FvRynwt6BQnlPhb0cp8LegUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIOhrus9O6fkjHrNVTHfbfjtNp2/pEOr/ABV0P/G/5V/9H591W9snVtZe8zMzmv8A85dR9nh8N6945vLdrDyfpn8VdD/xv+Vf/Q/irof+N/yr/wCj8zGfyzq99+34PLX6Z/FXQ/8AG/5V/wDQ/irof+N/yr/6PzMPlnV779vweWv0z+Kuh/43/Kv/AKO1oOtdN6jlnFo9VXJkiN+M1ms7f3iH5S5MGbJp8+PNitxyY7Ras/lMMeXwzrn6d2nk/YQHxWYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT8BPwD8j6l/7nq/8A5r/9Uus7PUv/AHPV/wDzX/6pdZ1fD+ONb1tN0rSW6Zh1us6hOnrmyTjrEYJvtt+O8SZP2d6j9v1GlwYfrTgtEWvExWJ3jePmY77THZ2NP1qmi6DpsOCuDJqaZrWmMuLlwj8JiZ7bmHXafqXTMum6lr7afPOq+0TlnHNovHHbbt8TDy+Xdm7vpfb+/bPqv0dDT9F6lqcmXHh0tpthtwvFrRXafy7zHdy26FrK9Jvr71isY8k0tjmYiYiPmfn8422+Xsx1nQ6nX6y+XU4q6fJmraMWo083i0RWK8omO8W7OhqtX07P0nW6XDnti21k6jDW9bW5147bb/h/dM7e7dy5P29N/wBJjwQHtYv2UByTaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE/AA/JOpxt1TVxP4Zr/APVLqvrf206XptPf7di5VyZrffjf7u/bu+SdP0c859ecsa9AG5AABsRMztEbzLH0v7GdN02t1d8+orN5wTE1rP8ALM/rDX29mdfDeW+iv//Z" />),
            category: 'common',
            attributes: {
  "contentjlx": {
    "type": "string",
    "default": "Write"
  },
  "contentUfw": {
    "type": "string",
    "default": "Preview"
  },
  "contentPMN": {
    "type": "string",
    "default": "Insert link"
  },
  "contentIXv": {
    "type": "string",
    "default": "Insert code"
  },
  "contentdGo": {
    "type": "string",
    "default": "Mention someone"
  },
  "contentQyq": {
    "type": "string",
    "default": "Comment"
  },
  "contentPgW": {
    "type": "string",
    "default": "Preview content will render here."
  },
  "contentJGM": {
    "type": "string",
    "default": "Post"
  },
  "svgzkq": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z\" clip-rule=\"evenodd\"/>"
  },
  "svgQuf": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgrOU": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgzkq }
            onChange={ ( value ) => {
              setAttributes({ svgzkq: value });
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
            value={ attributes.svgQuf }
            onChange={ ( value ) => {
              setAttributes({ svgQuf: value });
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
            value={ attributes.svgrOU }
            onChange={ ( value ) => {
              setAttributes({ svgrOU: value });
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
        <form action="#">
            <div>
                <div className="flex items-center" aria-orientation="horizontal" role="tablist">
                    <button id="tabs-1-tab-1" className="text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md" aria-controls="tabs-1-panel-1" role="tab" type="button">
                        <RichText tagName="span" value={attributes.contentjlx} default="Write" onChange={ (newtext) => { setAttributes({ contentjlx: newtext }); }} /></button>
                    <button id="tabs-1-tab-2" className="text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100 ml-2 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md" aria-controls="tabs-1-panel-2" role="tab" type="button">
                        <RichText tagName="span" value={attributes.contentUfw} default="Preview" onChange={ (newtext) => { setAttributes({ contentUfw: newtext }); }} /></button>
                    <div className="ml-auto flex items-center space-x-5">
                        <div className="flex items-center">
                            <button type="button" className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentPMN} default="Insert link" onChange={ (newtext) =>  {
        setAttributes({ contentPMN: newtext });
      }}
    /></span>

                                
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzkq }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="flex items-center">
                            <button type="button" className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentIXv} default="Insert code" onChange={ (newtext) =>  {
        setAttributes({ contentIXv: newtext });
      }}
    /></span>

                                
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQuf }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="flex items-center">
                            <button type="button" className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentdGo} default="Mention someone" onChange={ (newtext) =>  {
        setAttributes({ contentdGo: newtext });
      }}
    /></span>

                                
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrOU }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div id="tabs-1-panel-1" className="p-0.5 -m-0.5 rounded-lg" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                        <label for="comment" className="sr-only">
                            <RichText tagName="span" value={attributes.contentQyq} default="Comment" onChange={ (newtext) => { setAttributes({ contentQyq: newtext }); }} /></label>
                        <div>
                            <textarea rows="5" name="comment" id="comment" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Add your comment..."/>
                        </div>
                    </div>
                    <div id="tabs-1-panel-2" className="p-0.5 -m-0.5 rounded-lg" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
                        <div className="border-b">
                            <div className="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-gray-800">
                                <RichText tagName="span" value={attributes.contentPgW} default="Preview content will render here." onChange={ (newtext) => { setAttributes({ contentPgW: newtext }); }} /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2 flex justify-end">
                <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <RichText tagName="span" value={attributes.contentJGM} default="Post" onChange={ (newtext) => { setAttributes({ contentJGM: newtext }); }} /></button>
            </div>
        </form>
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
        <form action="#">
            <div>
                <div class="flex items-center" aria-orientation="horizontal" role="tablist">
                    <button id="tabs-1-tab-1" class="text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md" aria-controls="tabs-1-panel-1" role="tab" type="button">
                        <RichText.Content value={attributes.contentjlx} /></button>
                    <button id="tabs-1-tab-2" class="text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100 ml-2 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md" aria-controls="tabs-1-panel-2" role="tab" type="button">
                        <RichText.Content value={attributes.contentUfw} /></button>
                    <div class="ml-auto flex items-center space-x-5">
                        <div class="flex items-center">
                            <button type="button" class="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"> <span class="sr-only"><RichText.Content value={attributes.contentPMN} /></span>

                                
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzkq }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="flex items-center">
                            <button type="button" class="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"> <span class="sr-only"><RichText.Content value={attributes.contentIXv} /></span>

                                
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQuf }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="flex items-center">
                            <button type="button" class="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"> <span class="sr-only"><RichText.Content value={attributes.contentdGo} /></span>

                                
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrOU }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-2">
                    <div id="tabs-1-panel-1" class="p-0.5 -m-0.5 rounded-lg" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                        <label for="comment" class="sr-only">
                            <RichText.Content value={attributes.contentQyq} /></label>
                        <div>
                            <textarea rows="5" name="comment" id="comment" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Add your comment..."/>
                        </div>
                    </div>
                    <div id="tabs-1-panel-2" class="p-0.5 -m-0.5 rounded-lg" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
                        <div class="border-b">
                            <div class="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-gray-800">
                                <RichText.Content value={attributes.contentPgW} /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-2 flex justify-end">
                <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <RichText.Content value={attributes.contentJGM} /></button>
            </div>
        </form>
    </div>
</div>
            );
            },
        });
        