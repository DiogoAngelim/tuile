
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl, ToggleControl } = wp.components;


        registerBlockType('wp/simple-with-select-menu-dark', {
            title: 'simple-with-select-menu-dark',
            icon: (<img src="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=" />),
            category: 'common',
            attributes: {
  "contentMkg": {
    "type": "string",
    "default": "Pricing Plans"
  },
  "contentmNj": {
    "type": "string",
    "default": "Start building for free, then add a site plan to go live. Account plans unlock additional features."
  },
  "contentPUt": {
    "type": "string",
    "default": "Currency"
  },
  "contentvYT": {
    "type": "string",
    "default": "Argentina (ARS)"
  },
  "contentAuV": {
    "type": "string",
    "default": "Australia (AUD)"
  },
  "contentUWu": {
    "type": "string",
    "default": "United States (USD)"
  },
  "contentTwe": {
    "type": "string",
    "default": "Canada (CAD)"
  },
  "contentLoh": {
    "type": "string",
    "default": "France (EUR)"
  },
  "contentSql": {
    "type": "string",
    "default": "Japan (JPY)"
  },
  "contentimv": {
    "type": "string",
    "default": "Nigeria (NGN)"
  },
  "contentujV": {
    "type": "string",
    "default": "Switzerland (CHF)"
  },
  "contentVaI": {
    "type": "string",
    "default": "United Kingdom (GBP)"
  },
  "svgFKw": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgFKw }
            onChange={ ( value ) => {
              setAttributes({ svgFKw: value });
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
        <div className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
                <div className="max-w-xl">
                     <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"><RichText tagName="span" value={attributes.contentMkg} default="Pricing Plans" onChange={ (newtext) =>  {
        setAttributes({ contentMkg: newtext });
      }}
    /></h2>

                    <p className="mt-5 text-xl text-gray-400">
                        <RichText tagName="span" value={attributes.contentmNj} default="Start building for free, then add a site plan to go live. Account plans unlock additional features." onChange={ (newtext) => { setAttributes({ contentmNj: newtext }); }} /></p>
                </div>
                <div className="mt-10 w-full max-w-xs">
                    <label for="currency" className="block text-base font-medium text-gray-300">
                        <RichText tagName="span" value={attributes.contentPUt} default="Currency" onChange={ (newtext) => { setAttributes({ contentPUt: newtext }); }} /></label>
                    <div className="mt-1.5 relative">
                        <select id="currency" name="currency" className="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md pl-3 pr-10 py-2 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm">
                            <option>
                                <RichText tagName="span" value={attributes.contentvYT} default="Argentina (ARS)" onChange={ (newtext) => { setAttributes({ contentvYT: newtext }); }} /></option>
                            <option>
                                <RichText tagName="span" value={attributes.contentAuV} default="Australia (AUD)" onChange={ (newtext) => { setAttributes({ contentAuV: newtext }); }} /></option>
                            <option selected="">
                                <RichText tagName="span" value={attributes.contentUWu} default="United States (USD)" onChange={ (newtext) => { setAttributes({ contentUWu: newtext }); }} /></option>
                            <option>
                                <RichText tagName="span" value={attributes.contentTwe} default="Canada (CAD)" onChange={ (newtext) => { setAttributes({ contentTwe: newtext }); }} /></option>
                            <option>
                                <RichText tagName="span" value={attributes.contentLoh} default="France (EUR)" onChange={ (newtext) => { setAttributes({ contentLoh: newtext }); }} /></option>
                            <option>
                                <RichText tagName="span" value={attributes.contentSql} default="Japan (JPY)" onChange={ (newtext) => { setAttributes({ contentSql: newtext }); }} /></option>
                            <option>
                                <RichText tagName="span" value={attributes.contentimv} default="Nigeria (NGN)" onChange={ (newtext) => { setAttributes({ contentimv: newtext }); }} /></option>
                            <option>
                                <RichText tagName="span" value={attributes.contentujV} default="Switzerland (CHF)" onChange={ (newtext) => { setAttributes({ contentujV: newtext }); }} /></option>
                            <option>
                                <RichText tagName="span" value={attributes.contentVaI} default="United Kingdom (GBP)" onChange={ (newtext) => { setAttributes({ contentVaI: newtext }); }} /></option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                            
      <svg
         className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFKw }}
        >
      </svg>
      
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
        <div class="bg-gray-800">
            <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
                <div class="max-w-xl">
                     <h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"><RichText.Content value={attributes.contentMkg} /></h2>

                    <p class="mt-5 text-xl text-gray-400">
                        <RichText.Content value={attributes.contentmNj} /></p>
                </div>
                <div class="mt-10 w-full max-w-xs">
                    <label for="currency" class="block text-base font-medium text-gray-300">
                        <RichText.Content value={attributes.contentPUt} /></label>
                    <div class="mt-1.5 relative">
                        <select id="currency" name="currency" class="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md pl-3 pr-10 py-2 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm">
                            <option>
                                <RichText.Content value={attributes.contentvYT} /></option>
                            <option>
                                <RichText.Content value={attributes.contentAuV} /></option>
                            <option selected="">
                                <RichText.Content value={attributes.contentUWu} /></option>
                            <option>
                                <RichText.Content value={attributes.contentTwe} /></option>
                            <option>
                                <RichText.Content value={attributes.contentLoh} /></option>
                            <option>
                                <RichText.Content value={attributes.contentSql} /></option>
                            <option>
                                <RichText.Content value={attributes.contentimv} /></option>
                            <option>
                                <RichText.Content value={attributes.contentujV} /></option>
                            <option>
                                <RichText.Content value={attributes.contentVaI} /></option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                            
      <svg
         class="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFKw }}
        >
      </svg>
      
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
        