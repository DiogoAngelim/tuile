
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-with-icons', {
            title: 'simple with icons',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contenteVI": {
    "type": "string",
    "default": "Applied to "
  },
  "contentGJh": {
    "type": "string",
    "default": "Front End Developer"
  },
  "contentDgJ": {
    "type": "string",
    "default": "Sep 20"
  },
  "contentMPq": {
    "type": "string",
    "default": "Advanced to phone screening by "
  },
  "contentpla": {
    "type": "string",
    "default": "Bethany Blake"
  },
  "contentGpC": {
    "type": "string",
    "default": "Sep 22"
  },
  "contentxjo": {
    "type": "string",
    "default": "Completed phone screening with "
  },
  "contentMLw": {
    "type": "string",
    "default": "Martha Gardner"
  },
  "contentKag": {
    "type": "string",
    "default": "Sep 28"
  },
  "contentjeN": {
    "type": "string",
    "default": "Advanced to interview by "
  },
  "contentUmm": {
    "type": "string",
    "default": "Bethany Blake"
  },
  "contentoeQ": {
    "type": "string",
    "default": "Sep 30"
  },
  "contentvIw": {
    "type": "string",
    "default": "Completed interview with "
  },
  "contentQJs": {
    "type": "string",
    "default": "Katherine Snyder"
  },
  "contentBnD": {
    "type": "string",
    "default": "Oct 4"
  },
  "svgtAU": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z\" clip-rule=\"evenodd\"/>"
  },
  "svgQZc": {
    "type": "string",
    "default": "<path d=\"M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z\"/>"
  },
  "svgGcN": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgQRx": {
    "type": "string",
    "default": "<path d=\"M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z\"/>"
  },
  "svgqKT": {
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
            value={ attributes.svgtAU }
            onChange={ ( value ) => {
              setAttributes({ svgtAU: value });
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
            value={ attributes.svgQZc }
            onChange={ ( value ) => {
              setAttributes({ svgQZc: value });
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
            value={ attributes.svgGcN }
            onChange={ ( value ) => {
              setAttributes({ svgGcN: value });
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
            value={ attributes.svgQRx }
            onChange={ ( value ) => {
              setAttributes({ svgQRx: value });
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
            value={ attributes.svgqKT }
            onChange={ ( value ) => {
              setAttributes({ svgqKT: value });
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
        <div className="flow-root">
            <ul role="list" className="-mb-8">
                <li>
                    <div className="relative pb-8"> <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"/>

                        <div className="relative flex space-x-3">
                            <div> <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
              
              
      <svg
         className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtAU }}
        >
      </svg>
      
            </span>

                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contenteVI} default="Applied to" onChange={ (newtext) => { setAttributes({ contenteVI: newtext }); }} /><span className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentGJh} default="Front End Developer" onChange={ (newtext) =>  {
        setAttributes({ contentGJh: newtext });
      }}
    /></span>
                                    </p>
                                </div>
                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time datetime="2020-09-20">
                                        <RichText tagName="span" value={attributes.contentDgJ} default="Sep 20" onChange={ (newtext) => { setAttributes({ contentDgJ: newtext }); }} /></time>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="relative pb-8"> <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"/>

                        <div className="relative flex space-x-3">
                            <div> <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
              
              
      <svg
         className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQZc }}
        >
      </svg>
      
            </span>

                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentMPq} default="Advanced to phone screening by" onChange={ (newtext) => { setAttributes({ contentMPq: newtext }); }} /><span className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentpla} default="Bethany Blake" onChange={ (newtext) =>  {
        setAttributes({ contentpla: newtext });
      }}
    /></span>
                                    </p>
                                </div>
                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time datetime="2020-09-22">
                                        <RichText tagName="span" value={attributes.contentGpC} default="Sep 22" onChange={ (newtext) => { setAttributes({ contentGpC: newtext }); }} /></time>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="relative pb-8"> <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"/>

                        <div className="relative flex space-x-3">
                            <div> <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
              
              
      <svg
         className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGcN }}
        >
      </svg>
      
            </span>

                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentxjo} default="Completed phone screening with" onChange={ (newtext) => { setAttributes({ contentxjo: newtext }); }} /><span className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentMLw} default="Martha Gardner" onChange={ (newtext) =>  {
        setAttributes({ contentMLw: newtext });
      }}
    /></span>
                                    </p>
                                </div>
                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time datetime="2020-09-28">
                                        <RichText tagName="span" value={attributes.contentKag} default="Sep 28" onChange={ (newtext) => { setAttributes({ contentKag: newtext }); }} /></time>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="relative pb-8"> <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"/>

                        <div className="relative flex space-x-3">
                            <div> <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
              
              
      <svg
         className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQRx }}
        >
      </svg>
      
            </span>

                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentjeN} default="Advanced to interview by" onChange={ (newtext) => { setAttributes({ contentjeN: newtext }); }} /><span className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentUmm} default="Bethany Blake" onChange={ (newtext) =>  {
        setAttributes({ contentUmm: newtext });
      }}
    /></span>
                                    </p>
                                </div>
                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time datetime="2020-09-30">
                                        <RichText tagName="span" value={attributes.contentoeQ} default="Sep 30" onChange={ (newtext) => { setAttributes({ contentoeQ: newtext }); }} /></time>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="relative pb-8">
                        <div className="relative flex space-x-3">
                            <div> <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
              
              
      <svg
         className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqKT }}
        >
      </svg>
      
            </span>

                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentvIw} default="Completed interview with" onChange={ (newtext) => { setAttributes({ contentvIw: newtext }); }} /><span className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentQJs} default="Katherine Snyder" onChange={ (newtext) =>  {
        setAttributes({ contentQJs: newtext });
      }}
    /></span>
                                    </p>
                                </div>
                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time datetime="2020-10-04">
                                        <RichText tagName="span" value={attributes.contentBnD} default="Oct 4" onChange={ (newtext) => { setAttributes({ contentBnD: newtext }); }} /></time>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
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
        <div class="flow-root">
            <ul role="list" class="-mb-8">
                <li>
                    <div class="relative pb-8"> <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"/>

                        <div class="relative flex space-x-3">
                            <div> <span class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
              
              
      <svg
         class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtAU }}
        >
      </svg>
      
            </span>

                            </div>
                            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p class="text-sm text-gray-500">
                                        <RichText.Content value={attributes.contenteVI} /><span class="font-medium text-gray-900"><RichText.Content value={attributes.contentGJh} /></span>
                                    </p>
                                </div>
                                <div class="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time datetime="2020-09-20">
                                        <RichText.Content value={attributes.contentDgJ} /></time>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="relative pb-8"> <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"/>

                        <div class="relative flex space-x-3">
                            <div> <span class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
              
              
      <svg
         class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQZc }}
        >
      </svg>
      
            </span>

                            </div>
                            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p class="text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentMPq} /><span class="font-medium text-gray-900"><RichText.Content value={attributes.contentpla} /></span>
                                    </p>
                                </div>
                                <div class="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time datetime="2020-09-22">
                                        <RichText.Content value={attributes.contentGpC} /></time>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="relative pb-8"> <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"/>

                        <div class="relative flex space-x-3">
                            <div> <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
              
              
      <svg
         class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGcN }}
        >
      </svg>
      
            </span>

                            </div>
                            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p class="text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentxjo} /><span class="font-medium text-gray-900"><RichText.Content value={attributes.contentMLw} /></span>
                                    </p>
                                </div>
                                <div class="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time datetime="2020-09-28">
                                        <RichText.Content value={attributes.contentKag} /></time>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="relative pb-8"> <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"/>

                        <div class="relative flex space-x-3">
                            <div> <span class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
              
              
      <svg
         class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQRx }}
        >
      </svg>
      
            </span>

                            </div>
                            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p class="text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentjeN} /><span class="font-medium text-gray-900"><RichText.Content value={attributes.contentUmm} /></span>
                                    </p>
                                </div>
                                <div class="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time datetime="2020-09-30">
                                        <RichText.Content value={attributes.contentoeQ} /></time>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="relative pb-8">
                        <div class="relative flex space-x-3">
                            <div> <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
              
              
      <svg
         class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqKT }}
        >
      </svg>
      
            </span>

                            </div>
                            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p class="text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentvIw} /><span class="font-medium text-gray-900"><RichText.Content value={attributes.contentQJs} /></span>
                                    </p>
                                </div>
                                <div class="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time datetime="2020-10-04">
                                        <RichText.Content value={attributes.contentBnD} /></time>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
            );
            },
        });
        