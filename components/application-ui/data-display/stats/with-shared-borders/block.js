
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-shared-borders', {
            title: 'with shared borders',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentmDK": {
    "type": "string",
    "default": "Last 30 days"
  },
  "contentkQv": {
    "type": "string",
    "default": "Total Subscribers"
  },
  "contentqyj": {
    "type": "string",
    "default": "\n          71,897\n          "
  },
  "contentRgy": {
    "type": "string",
    "default": " from 70,946 "
  },
  "contentFqc": {
    "type": "string",
    "default": " Increased by "
  },
  "contentIyM": {
    "type": "string",
    "default": "\n          12%\n        "
  },
  "contentQRn": {
    "type": "string",
    "default": "Avg. Open Rate"
  },
  "contentxLW": {
    "type": "string",
    "default": "\n          58.16%\n          "
  },
  "contentkDR": {
    "type": "string",
    "default": " from 56.14% "
  },
  "contentOiz": {
    "type": "string",
    "default": " Increased by "
  },
  "contentLDx": {
    "type": "string",
    "default": "\n          2.02%\n        "
  },
  "contentpYu": {
    "type": "string",
    "default": "Avg. Click Rate"
  },
  "contentiRk": {
    "type": "string",
    "default": "\n          24.57%\n          "
  },
  "contentEeI": {
    "type": "string",
    "default": " from 28.62% "
  },
  "contentPBv": {
    "type": "string",
    "default": " Decreased by "
  },
  "contentbBE": {
    "type": "string",
    "default": "\n          4.05%\n        "
  },
  "svgtkE": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svguSd": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgdHI": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgtkE }
            onChange={ ( value ) => {
              setAttributes({ svgtkE: value });
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
            value={ attributes.svguSd }
            onChange={ ( value ) => {
              setAttributes({ svguSd: value });
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
            value={ attributes.svgdHI }
            onChange={ ( value ) => {
              setAttributes({ svgdHI: value });
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
             <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentmDK} default="Last 30 days" onChange={ (newtext) =>  {
        setAttributes({ contentmDK: newtext });
      }}
    /></h3>

            <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
                <div className="px-4 py-5 sm:p-6"> <dt className="text-base font-normal text-gray-900"><RichText tagName="span" value={attributes.contentkQv} default="Total Subscribers" onChange={ (newtext) =>  {
        setAttributes({ contentkQv: newtext });
      }}
    /></dt>

                    <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                        <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                            <RichText tagName="span" value={attributes.contentqyj} default="71,897" onChange={ (newtext) => { setAttributes({ contentqyj: newtext }); }} /><span className="ml-2 text-sm font-medium text-gray-500"><RichText tagName="span" value={attributes.contentRgy} default="from 70,946" onChange={ (newtext) =>  {
        setAttributes({ contentRgy: newtext });
      }}
    /></span>

                        </div>
                        <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                            
      <svg
         className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtkE }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentFqc} default="Increased by" onChange={ (newtext) =>  {
        setAttributes({ contentFqc: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentIyM} default="12%" onChange={ (newtext) =>  {
        setAttributes({ contentIyM: newtext });
      }}
    /></div>
      </dd>
    </div>

    <div className="px-4 py-5 sm:p-6">
      <dt className="text-base font-normal text-gray-900"><RichText tagName="span" value={attributes.contentQRn} default="Avg. Open Rate" onChange={ (newtext) =>  {
        setAttributes({ contentQRn: newtext });
      }}
    /></dt>
      <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
        <div className="flex items-baseline text-2xl font-semibold text-indigo-600"><RichText tagName="span" value={attributes.contentxLW} default="58.16%" onChange={ (newtext) =>  {
        setAttributes({ contentxLW: newtext });
      }}
    /><span className="ml-2 text-sm font-medium text-gray-500"><RichText tagName="span" value={attributes.contentkDR} default="from 56.14%" onChange={ (newtext) =>  {
        setAttributes({ contentkDR: newtext });
      }}
    /></span>

                        </div>
                        <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                            
      <svg
         className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguSd }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentOiz} default="Increased by" onChange={ (newtext) =>  {
        setAttributes({ contentOiz: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentLDx} default="2.02%" onChange={ (newtext) =>  {
        setAttributes({ contentLDx: newtext });
      }}
    /></div>
      </dd>
    </div>

    <div className="px-4 py-5 sm:p-6">
      <dt className="text-base font-normal text-gray-900"><RichText tagName="span" value={attributes.contentpYu} default="Avg. Click Rate" onChange={ (newtext) =>  {
        setAttributes({ contentpYu: newtext });
      }}
    /></dt>
      <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
        <div className="flex items-baseline text-2xl font-semibold text-indigo-600"><RichText tagName="span" value={attributes.contentiRk} default="24.57%" onChange={ (newtext) =>  {
        setAttributes({ contentiRk: newtext });
      }}
    /><span className="ml-2 text-sm font-medium text-gray-500"><RichText tagName="span" value={attributes.contentEeI} default="from 28.62%" onChange={ (newtext) =>  {
        setAttributes({ contentEeI: newtext });
      }}
    /></span>

                        </div>
                        <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
                            
      <svg
         className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdHI }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentPBv} default="Decreased by" onChange={ (newtext) =>  {
        setAttributes({ contentPBv: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentbBE} default="4.05%" onChange={ (newtext) =>  {
        setAttributes({ contentbBE: newtext });
      }}
    /></div>
      </dd>
    </div>
  </dl>
</div>
</div></div>
                </div>
                );
            },
            save(props) {
            const { attributes } = props;

            return (
                <div>
    <div>
        <div>
             <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentmDK} /></h3>

            <dl class="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
                <div class="px-4 py-5 sm:p-6"> <dt class="text-base font-normal text-gray-900"><RichText.Content value={attributes.contentkQv} /></dt>

                    <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                        <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
                            <RichText.Content value={attributes.contentqyj} /><span class="ml-2 text-sm font-medium text-gray-500"><RichText.Content value={attributes.contentRgy} /></span>

                        </div>
                        <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                            
      <svg
         class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtkE }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentFqc} /></span><RichText.Content value={attributes.contentIyM} /></div>
      </dd>
    </div>

    <div class="px-4 py-5 sm:p-6">
      <dt class="text-base font-normal text-gray-900"><RichText.Content value={attributes.contentQRn} /></dt>
      <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
        <div class="flex items-baseline text-2xl font-semibold text-indigo-600"><RichText.Content value={attributes.contentxLW} /><span class="ml-2 text-sm font-medium text-gray-500"><RichText.Content value={attributes.contentkDR} /></span>

                        </div>
                        <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                            
      <svg
         class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguSd }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentOiz} /></span><RichText.Content value={attributes.contentLDx} /></div>
      </dd>
    </div>

    <div class="px-4 py-5 sm:p-6">
      <dt class="text-base font-normal text-gray-900"><RichText.Content value={attributes.contentpYu} /></dt>
      <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
        <div class="flex items-baseline text-2xl font-semibold text-indigo-600"><RichText.Content value={attributes.contentiRk} /><span class="ml-2 text-sm font-medium text-gray-500"><RichText.Content value={attributes.contentEeI} /></span>

                        </div>
                        <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
                            
      <svg
         class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdHI }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentPBv} /></span><RichText.Content value={attributes.contentbBE} /></div>
      </dd>
    </div>
  </dl>
</div>
</div></div>
            );
            },
        });
        