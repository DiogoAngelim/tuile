
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/full-width-secondary-column-on-right', {
            title: 'full width secondary column on right',
            icon: (<img src="data:image/jpeg;base64,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Z2U79+Pi8goRFqiImIjie/JNqiYiJjiO3ILE7Kd+/HxeWItURExEcT35BYibVExETHEduWdlO/fj4vIKERaoiJiI4nvyTaomIiY4jtyCxOynfvx8XliLVERMRHE9+QWIm1RMRExxHblnZTv34+LyChEWqIiYiOJ78k2qJiImOI7cgsTsp378fF5Yi1RETERxPfkFiJtUTERMcR25Z2U79+Pi8goRFqiImIjie/JNqiYiJjiO3ILE7Kd+/HxeWItURExEcT35BYibVExETHEduWdlO/fj4vIKERaoiJiI4nvyTaomIiY4jtyCxOynfvx8XliLVERMbeJ78gsTNuiYiJjt25NlO7djkFCItURTMY4n7szbomIiY7duQUJ2U7t2OWItURTMY4n7gsTNuiYiJjt25NlO7djkFCItURTMY4n7szbomIiY7duQUJ2U7t2OWItURTMY4n7gsTNuiYiJjt25NlO7djkFCItURTMY4n7szbomIiY7duQUJ2U7t2OWItURTMY4n7gsTNuiYiJjt25NlO7djkFCItURTMY4n7szbomIiY7duQUJ2U7t2OWItURTMY4n7gsTNuiYiJjt25NlO7djkFCItURTMY4n7szbomIiY7duQUJ2U7t2OWMenHwRMxM8wCwAAATb/Tp9oUm3+nT7QoAAAR89WYqnFM8x92Yt0RMzEd+/IKEelRt244znuz6dGYnHMdgUJ9OjMzjme7HpUbduOM57gsT6dGYnHMdj06MzOOZ7goR6VG3bjjOe7Pp0Ziccx2BQn06MzOOZ7selRt244znuCxPp0Ziccx2PTozM45nuChHpUbduOM57s+nRmJxzHYFCfTozM45nux6VG3bjjOe4LE+nRmJxzHY9OjMzjme4KEelRt244znuz6dGYnHMdgUJ9OjMzjme7HpUbduOM57gsT6dGYnHMdj06MzOOZ7goR6VG3bjjOe7Pp0Ziccx2BQn06MzOOZ7selRt244znuCxPp0Ziccx2PTozM45nuChHpUbduOM57s+nRmJxzHYFCfTozM45nux6VG3bjjOe4LE+nRmJxzHY9OiM8d+/IKEelRt24479yfgmKt2KYjEwCwAAAaAFR+edenqU/iG5ui9Tcm5jT7MxmntTt/Z7f4szH4b0kaqY/M7qM/erbO59NduU2rVd2v5aKZqn2h+cdS6lf671G1TXii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c+7Zav62q3oaLmuiirVW5uzc9OnjFMTtj6fXP7PR0fTtLpLVNFu1RNUU7ZrmmN1UfeW25ptPctU2rli1XbpxtoqoiYjHiF0eNYqu67WaDUXrkZ9C5VjZExMxVEZjPlop1d2xao1FqKYuTobURimIiM14zjiPr7Po4tW4mmYt0RNNO2mdscR4j7cJjT2IjEWLcRs2Y2R8vj2+xo5el3tTc9ejUzum3VG2qZo3YmPrFMzEO5FmzasUbLFqi3TnOKKYiFoAAAAAAAAAAAADFXyz7MsVfLPsDoARQAE1UzPyztkxVuzv48YUAmKa8Tmvv247MTTXtiPU584WAnFW7O/jxgimvE5r79uOygETTXtiPU584ZxVuzv48YUAmKa8Tmvv247MTTXtiPU584WAnFW7O/jxgimvE5r79uOygETTXtiPU584ZxVuzv48YUAmKa8Tmvv247MTTXtiPU584WAnFW7O/jxgimvE5r79uOygETTXtiPU584ZxVuzv48YUAmKa8Tmvv247MTTXtiPU584WAnFW7O/jxgimvE5r79uOygETTXtiPU584ZxVuzv48YUAmKa8Tmvv247MTTXtiPU584WAnFW7O/jxgimvE5r79uOygETTXtiPU584ZxVuzv48YUAmKa8Tmvv247MTTXtiPU584WAnFW7O/jxgimvE5r79uOygETTXtiPU584ZxVuzv48YUAmKa8Tmvv247MTTXtiPU584WAnFW7O/jxgimvE5r79uOygETTXtiPU584ZxVuzv48YUAmKa8Tmvv247MTTXtiPU584WAnFW7O/jxgimvE5r79uOygETTXtiPU584ZxVuzv48YUAmKa8Tmvv247MTTXtiPU584WAnFW7O/jxgimvE5r79uOygETTXtiPU584ZxVuzv48YUAmKa8Tmvv247MTTXtiPU584WAnFW7O/jxgimvE5r79uOygETTXtiPU584ZxVuzv48YUAmKa8Tmvv247MTTXtiPU584WAnFW7O/jxgimvE5r79uOygETTXtiPU584ZxVuzv48YUAmKa8Tmvv247MTTXtiPU584WAnFW7O/jxgimvE5r79uOygETTXtiPU584ZxVuzv48YUAmKa8Tmvv247MTTXtiPU584WAnFW7O/jxhjbXif8Tn6cdlgImmvERFzn6zjuzirfnd8PjCgERTXiYm5z9Jx2JprxERc5+s47rATirfnd8PjDEU14mJuc/ScdlgImmvERFzn6zjuzirfnd8PjCgERTXiYm5z9Jx2JprxERc5+s47rATirfnd8PjDEU14mJuc/ScdlgImmvERFzn6zjuzs+PdMzPj7KAAAAATb/Tp9oUm3+nT7QoAAE1U57TifMG2vj4+3fjuoBO2rMzv4+kY7Mba9uPU584WAnbXx8fbvx3NtWZnfx9Ix2UAjbXtx6nPnDO2vj4+3fjuoBO2rMzv4+kY7Mba9uPU584WAnbXx8fbvx3NtWZnfx9Ix2UAjbXtx6nPnDO2vj4+3fjuoBO2rMzv4+kY7Mba9uPU584WAnbXx8fbvx3NtWZnfx9Ix2UAjbXtx6nPnDO2vj4+3fjuoBO2rMzv4+kY7Mba9uPU584WAnbXx8fbvx3NtWZnfx9Ix2UAjbXtx6nPnDO2vj4+3fjuoBO2rMzv4+kY7Mba9uPU584WAnbXx8fbvx3NtWZnfx9Ix2UAjbXtx6nPnDO2vMfHxHfjuoBO2vM/HxPbjsxtr249TnPfCwE7a8x8fEd+O5trzPx8T247KARtr249TnPfDO2vMfHxHfjuoBO2vM/HxPbjsU0/5p3TH1woAAAABoAVAAAAAAAAAAAAAAAAAAAAAAAAAAAABir5Z9mWKvln2B0AIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACbf6dPtCk2/wBOn2hQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==" />),
            category: 'common',
            attributes: {
  "contentkdc": {
    "type": "string",
    "default": "Close sidebar"
  },
  "contentiDp": {
    "type": "string",
    "default": "\n              Dashboard\n            "
  },
  "contentYUk": {
    "type": "string",
    "default": "\n              Calendar\n            "
  },
  "contentoBF": {
    "type": "string",
    "default": "\n              Teams\n            "
  },
  "contentmWS": {
    "type": "string",
    "default": "\n              Directory\n            "
  },
  "contentNGv": {
    "type": "string",
    "default": "\n              Announcements\n            "
  },
  "contentfjK": {
    "type": "string",
    "default": "\n              Office Map\n            "
  },
  "contentJUv": {
    "type": "string",
    "default": "Whitney Francis"
  },
  "contentdqE": {
    "type": "string",
    "default": "View profile"
  },
  "contentdih": {
    "type": "string",
    "default": "\n                Dashboard\n              "
  },
  "contentmDp": {
    "type": "string",
    "default": "\n                Calendar\n              "
  },
  "contentLEz": {
    "type": "string",
    "default": "\n                Teams\n              "
  },
  "contentEQP": {
    "type": "string",
    "default": "\n                Directory\n              "
  },
  "contentkAl": {
    "type": "string",
    "default": "\n                Announcements\n              "
  },
  "contentwSW": {
    "type": "string",
    "default": "\n                Office Map\n              "
  },
  "contentIvO": {
    "type": "string",
    "default": "Whitney Francis"
  },
  "contentQWf": {
    "type": "string",
    "default": "View profile"
  },
  "contentaxf": {
    "type": "string",
    "default": "Open sidebar"
  },
  "imageurlyNZ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-900-text.svg'
  },
  "imagealtTgR": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurloTh": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517365830460-955ce3ccd263.jpeg'
  },
  "imagealtfMA": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlxmB": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-900-text.svg'
  },
  "imagealttym": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlGZB": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517365830460-955ce3ccd263.jpeg'
  },
  "imagealtvhd": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurloOv": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtnCe": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "svgngS": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgtAl": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgZKK": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgBSV": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\"/>"
  },
  "svggSU": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgaRq": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z\"/>"
  },
  "svgVQY": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7\"/>"
  },
  "svgGzL": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgAQz": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgDnb": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\"/>"
  },
  "svgkMn": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgeYm": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z\"/>"
  },
  "svgPzH": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7\"/>"
  },
  "svgwYR": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
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
            value={ attributes.svgngS }
            onChange={ ( value ) => {
              setAttributes({ svgngS: value });
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
            value={ attributes.svgtAl }
            onChange={ ( value ) => {
              setAttributes({ svgtAl: value });
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
            value={ attributes.svgZKK }
            onChange={ ( value ) => {
              setAttributes({ svgZKK: value });
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
            value={ attributes.svgBSV }
            onChange={ ( value ) => {
              setAttributes({ svgBSV: value });
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
            value={ attributes.svggSU }
            onChange={ ( value ) => {
              setAttributes({ svggSU: value });
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
            value={ attributes.svgaRq }
            onChange={ ( value ) => {
              setAttributes({ svgaRq: value });
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
            value={ attributes.svgVQY }
            onChange={ ( value ) => {
              setAttributes({ svgVQY: value });
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
            value={ attributes.svgGzL }
            onChange={ ( value ) => {
              setAttributes({ svgGzL: value });
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
            value={ attributes.svgAQz }
            onChange={ ( value ) => {
              setAttributes({ svgAQz: value });
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
            value={ attributes.svgDnb }
            onChange={ ( value ) => {
              setAttributes({ svgDnb: value });
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
            value={ attributes.svgkMn }
            onChange={ ( value ) => {
              setAttributes({ svgkMn: value });
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
            value={ attributes.svgeYm }
            onChange={ ( value ) => {
              setAttributes({ svgeYm: value });
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
            value={ attributes.svgPzH }
            onChange={ ( value ) => {
              setAttributes({ svgPzH: value });
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
            value={ attributes.svgwYR }
            onChange={ ( value ) => {
              setAttributes({ svgwYR: value });
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
        <div className="h-full flex">
            <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentkdc} default="Close sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentkdc: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgngS }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div className="flex-shrink-0 flex items-center px-4">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlyNZ: media.url,
            imagealtTgR: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlyNZ } 
            alt={ attributes.imagealtTgR } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <nav aria-label="Sidebar" className="mt-5">
                            <div className="px-2 space-y-1"> <span className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtAl }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentiDp} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentiDp: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZKK }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentYUk} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentYUk: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBSV }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentoBF} default="Teams" onChange={ (newtext) =>  {
        setAttributes({ contentoBF: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggSU }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentmWS} default="Directory" onChange={ (newtext) =>  {
        setAttributes({ contentmWS: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaRq }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentNGv} default="Announcements" onChange={ (newtext) =>  {
        setAttributes({ contentNGv: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVQY }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentfjK} default="Office Map" onChange={ (newtext) =>  {
        setAttributes({ contentfjK: newtext });
      }}
    /></span>

                            </div>
                        </nav>
                    </div>
                    <div className="flex-shrink-0 flex border-t border-gray-200 p-4"> <span className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurloTh: media.url,
            imagealtfMA: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurloTh } 
            alt={ attributes.imagealtfMA } 
            onClick={ open } 
            className="inline-block h-10 w-10 rounded-full"
          /> 
        )} 
      />
            </div>
            <div className="ml-3">
              <p className="text-base font-medium text-gray-700 group-hover:text-gray-900"><RichText tagName="span" value={attributes.contentJUv} default="Whitney Francis" onChange={ (newtext) =>  {
        setAttributes({ contentJUv: newtext });
      }}
    /></p>
              <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700"><RichText tagName="span" value={attributes.contentdqE} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentdqE: newtext });
      }}
    /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
                <div className="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div className="hidden lg:flex lg:flex-shrink-0">
                <div className="flex flex-col w-64">
                    <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex items-center flex-shrink-0 px-4">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlxmB: media.url,
            imagealttym: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlxmB } 
            alt={ attributes.imagealttym } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                            </div>
                            <nav className="mt-5 flex-1" aria-label="Sidebar">
                                <div className="px-2 space-y-1"> <span className="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGzL }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentdih} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentdih: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAQz }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentmDp} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentmDp: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDnb }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentLEz} default="Teams" onChange={ (newtext) =>  {
        setAttributes({ contentLEz: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkMn }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentEQP} default="Directory" onChange={ (newtext) =>  {
        setAttributes({ contentEQP: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeYm }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentkAl} default="Announcements" onChange={ (newtext) =>  {
        setAttributes({ contentkAl: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPzH }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentwSW} default="Office Map" onChange={ (newtext) =>  {
        setAttributes({ contentwSW: newtext });
      }}
    /></span>

                                </div>
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex border-t border-gray-200 p-4"> <span className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div>
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlGZB: media.url,
            imagealtvhd: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlGZB } 
            alt={ attributes.imagealtvhd } 
            onClick={ open } 
            className="inline-block h-9 w-9 rounded-full"
          /> 
        )} 
      />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900"><RichText tagName="span" value={attributes.contentIvO} default="Whitney Francis" onChange={ (newtext) =>  {
        setAttributes({ contentIvO: newtext });
      }}
    /></p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700"><RichText tagName="span" value={attributes.contentQWf} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentQWf: newtext });
      }}
    /></p>
              </div>
            </div>
          </span>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                <div className="lg:hidden">
                    <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                        <div>
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurloOv: media.url,
            imagealtnCe: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurloOv } 
            alt={ attributes.imagealtnCe } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <div>
                            <button type="button" className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"> <span className="sr-only"><RichText tagName="span" value={attributes.contentaxf} default="Open sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentaxf: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwYR }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative z-0 flex overflow-hidden">
                    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                            <div className="h-full border-2 border-gray-200 border-dashed rounded-lg"/>
                        </div>
                    </main>
                    <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 border-l border-gray-200 overflow-y-auto">
                        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                            <div className="h-full border-2 border-gray-200 border-dashed rounded-lg"/>
                        </div>
                    </aside>
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
        <div class="h-full flex">
            <div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                    <div class="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentkdc} /></span>

                            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgngS }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div class="flex-shrink-0 flex items-center px-4">
                            
      <img
            src={ attributes.imageurlyNZ } 
            alt={ attributes.imagealtTgR } 
            class="h-8 w-auto"
          />
                        </div>
                        <nav aria-label="Sidebar" class="mt-5">
                            <div class="px-2 space-y-1"> <span class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtAl }}
        >
      </svg>
      <RichText.Content value={attributes.contentiDp} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZKK }}
        >
      </svg>
      <RichText.Content value={attributes.contentYUk} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBSV }}
        >
      </svg>
      <RichText.Content value={attributes.contentoBF} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggSU }}
        >
      </svg>
      <RichText.Content value={attributes.contentmWS} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaRq }}
        >
      </svg>
      <RichText.Content value={attributes.contentNGv} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVQY }}
        >
      </svg>
      <RichText.Content value={attributes.contentfjK} /></span>

                            </div>
                        </nav>
                    </div>
                    <div class="flex-shrink-0 flex border-t border-gray-200 p-4"> <span class="flex-shrink-0 group block">
          <div class="flex items-center">
            <div>
              
      <img
            src={ attributes.imageurloTh } 
            alt={ attributes.imagealtfMA } 
            class="inline-block h-10 w-10 rounded-full"
          />
            </div>
            <div class="ml-3">
              <p class="text-base font-medium text-gray-700 group-hover:text-gray-900"><RichText.Content value={attributes.contentJUv} /></p>
              <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700"><RichText.Content value={attributes.contentdqE} /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
                <div class="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div class="hidden lg:flex lg:flex-shrink-0">
                <div class="flex flex-col w-64">
                    <div class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
                        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div class="flex items-center flex-shrink-0 px-4">
                                
      <img
            src={ attributes.imageurlxmB } 
            alt={ attributes.imagealttym } 
            class="h-8 w-auto"
          />
                            </div>
                            <nav class="mt-5 flex-1" aria-label="Sidebar">
                                <div class="px-2 space-y-1"> <span class="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGzL }}
        >
      </svg>
      <RichText.Content value={attributes.contentdih} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAQz }}
        >
      </svg>
      <RichText.Content value={attributes.contentmDp} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDnb }}
        >
      </svg>
      <RichText.Content value={attributes.contentLEz} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkMn }}
        >
      </svg>
      <RichText.Content value={attributes.contentEQP} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeYm }}
        >
      </svg>
      <RichText.Content value={attributes.contentkAl} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPzH }}
        >
      </svg>
      <RichText.Content value={attributes.contentwSW} /></span>

                                </div>
                            </nav>
                        </div>
                        <div class="flex-shrink-0 flex border-t border-gray-200 p-4"> <span class="flex-shrink-0 w-full group block">
            <div class="flex items-center">
              <div>
                
      <img
            src={ attributes.imageurlGZB } 
            alt={ attributes.imagealtvhd } 
            class="inline-block h-9 w-9 rounded-full"
          />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900"><RichText.Content value={attributes.contentIvO} /></p>
                <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700"><RichText.Content value={attributes.contentQWf} /></p>
              </div>
            </div>
          </span>

                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
                <div class="lg:hidden">
                    <div class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                        <div>
                            
      <img
            src={ attributes.imageurloOv } 
            alt={ attributes.imagealtnCe } 
            class="h-8 w-auto"
          />
                        </div>
                        <div>
                            <button type="button" class="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"> <span class="sr-only"><RichText.Content value={attributes.contentaxf} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwYR }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex-1 relative z-0 flex overflow-hidden">
                    <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                        <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                            <div class="h-full border-2 border-gray-200 border-dashed rounded-lg"/>
                        </div>
                    </main>
                    <aside class="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 border-l border-gray-200 overflow-y-auto">
                        <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                            <div class="h-full border-2 border-gray-200 border-dashed rounded-lg"/>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        