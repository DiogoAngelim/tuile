
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/small-with-meetings', {
            title: 'small with meetings',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentgcw": {
    "type": "string",
    "default": "Upcoming meetings"
  },
  "contentjDI": {
    "type": "string",
    "default": "Previous month"
  },
  "contentvgi": {
    "type": "string",
    "default": "January"
  },
  "contentbyz": {
    "type": "string",
    "default": "Next month"
  },
  "contentnCC": {
    "type": "string",
    "default": "M"
  },
  "contentqlY": {
    "type": "string",
    "default": "T"
  },
  "contentYpu": {
    "type": "string",
    "default": "W"
  },
  "contentdIZ": {
    "type": "string",
    "default": "T"
  },
  "contentNte": {
    "type": "string",
    "default": "F"
  },
  "contentBlm": {
    "type": "string",
    "default": "S"
  },
  "contentVEL": {
    "type": "string",
    "default": "S"
  },
  "contentMSd": {
    "type": "string",
    "default": "27"
  },
  "contentULH": {
    "type": "string",
    "default": "28"
  },
  "contentpiU": {
    "type": "string",
    "default": "29"
  },
  "contentjag": {
    "type": "string",
    "default": "30"
  },
  "contentOzJ": {
    "type": "string",
    "default": "31"
  },
  "contentaqm": {
    "type": "string",
    "default": "1"
  },
  "contentPyb": {
    "type": "string",
    "default": "2"
  },
  "contentiSc": {
    "type": "string",
    "default": "3"
  },
  "contentsmo": {
    "type": "string",
    "default": "4"
  },
  "contentcXp": {
    "type": "string",
    "default": "5"
  },
  "contentFRm": {
    "type": "string",
    "default": "6"
  },
  "contenteKP": {
    "type": "string",
    "default": "7"
  },
  "contentdXp": {
    "type": "string",
    "default": "8"
  },
  "contentcYe": {
    "type": "string",
    "default": "9"
  },
  "contentWNx": {
    "type": "string",
    "default": "10"
  },
  "contentyIn": {
    "type": "string",
    "default": "11"
  },
  "contentlGO": {
    "type": "string",
    "default": "12"
  },
  "contentiXZ": {
    "type": "string",
    "default": "13"
  },
  "contentars": {
    "type": "string",
    "default": "14"
  },
  "contenteXJ": {
    "type": "string",
    "default": "15"
  },
  "contentmhp": {
    "type": "string",
    "default": "16"
  },
  "contentCVU": {
    "type": "string",
    "default": "17"
  },
  "contentBzG": {
    "type": "string",
    "default": "18"
  },
  "contentpaD": {
    "type": "string",
    "default": "19"
  },
  "contentcNh": {
    "type": "string",
    "default": "20"
  },
  "contentEdk": {
    "type": "string",
    "default": "21"
  },
  "contentyFD": {
    "type": "string",
    "default": "22"
  },
  "contentcrS": {
    "type": "string",
    "default": "23"
  },
  "contentwCO": {
    "type": "string",
    "default": "24"
  },
  "contentkOy": {
    "type": "string",
    "default": "25"
  },
  "contentJJD": {
    "type": "string",
    "default": "26"
  },
  "contentlGu": {
    "type": "string",
    "default": "27"
  },
  "contentOVZ": {
    "type": "string",
    "default": "28"
  },
  "contentZCU": {
    "type": "string",
    "default": "29"
  },
  "contenthvZ": {
    "type": "string",
    "default": "30"
  },
  "contentxZZ": {
    "type": "string",
    "default": "31"
  },
  "contentMIA": {
    "type": "string",
    "default": "1"
  },
  "contentxyU": {
    "type": "string",
    "default": "2"
  },
  "contentwAI": {
    "type": "string",
    "default": "3"
  },
  "contentdnt": {
    "type": "string",
    "default": "4"
  },
  "contentshN": {
    "type": "string",
    "default": "5"
  },
  "contentbPh": {
    "type": "string",
    "default": "6"
  },
  "contentZfD": {
    "type": "string",
    "default": "Add event"
  },
  "contentIHg": {
    "type": "string",
    "default": "Leslie Alexander"
  },
  "contentfBy": {
    "type": "string",
    "default": "Date"
  },
  "contentHDO": {
    "type": "string",
    "default": "January 10th, 2022 at 5:00 PM"
  },
  "contentGeO": {
    "type": "string",
    "default": "Location"
  },
  "contentKki": {
    "type": "string",
    "default": "Starbucks"
  },
  "contentQdG": {
    "type": "string",
    "default": "Open options"
  },
  "contentwOc": {
    "type": "string",
    "default": "Edit"
  },
  "contentLGd": {
    "type": "string",
    "default": "Cancel"
  },
  "imageurlCJX": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1494790108377-be9c29b29330.jpeg'
  },
  "imagealtKDh": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgUbv": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgsjP": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgrMf": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z\" clip-rule=\"evenodd\"/>"
  },
  "svgyCx": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z\" clip-rule=\"evenodd\"/>"
  },
  "svgJta": {
    "type": "string",
    "default": "<path d=\"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z\"/>"
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
            value={ attributes.svgUbv }
            onChange={ ( value ) => {
              setAttributes({ svgUbv: value });
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
            value={ attributes.svgsjP }
            onChange={ ( value ) => {
              setAttributes({ svgsjP: value });
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
            value={ attributes.svgrMf }
            onChange={ ( value ) => {
              setAttributes({ svgrMf: value });
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
            value={ attributes.svgyCx }
            onChange={ ( value ) => {
              setAttributes({ svgyCx: value });
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
            value={ attributes.svgJta }
            onChange={ ( value ) => {
              setAttributes({ svgJta: value });
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
             <h2 className="text-lg font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentgcw} default="Upcoming meetings" onChange={ (newtext) =>  {
        setAttributes({ contentgcw: newtext });
      }}
    /></h2>

            <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
                    <div className="flex items-center text-gray-900">
                        <button type="button" className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentjDI} default="Previous month" onChange={ (newtext) =>  {
        setAttributes({ contentjDI: newtext });
      }}
    /></span>

                            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUbv }}
        >
      </svg>
      
                        </button>
                        <div className="flex-auto font-semibold">
                            <RichText tagName="span" value={attributes.contentvgi} default="January" onChange={ (newtext) => { setAttributes({ contentvgi: newtext }); }} /></div>
                        <button type="button" className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentbyz} default="Next month" onChange={ (newtext) =>  {
        setAttributes({ contentbyz: newtext });
      }}
    /></span>

                            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsjP }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                        <div>
                            <RichText tagName="span" value={attributes.contentnCC} default="M" onChange={ (newtext) => { setAttributes({ contentnCC: newtext }); }} /></div>
                        <div>
                            <RichText tagName="span" value={attributes.contentqlY} default="T" onChange={ (newtext) => { setAttributes({ contentqlY: newtext }); }} /></div>
                        <div>
                            <RichText tagName="span" value={attributes.contentYpu} default="W" onChange={ (newtext) => { setAttributes({ contentYpu: newtext }); }} /></div>
                        <div>
                            <RichText tagName="span" value={attributes.contentdIZ} default="T" onChange={ (newtext) => { setAttributes({ contentdIZ: newtext }); }} /></div>
                        <div>
                            <RichText tagName="span" value={attributes.contentNte} default="F" onChange={ (newtext) => { setAttributes({ contentNte: newtext }); }} /></div>
                        <div>
                            <RichText tagName="span" value={attributes.contentBlm} default="S" onChange={ (newtext) => { setAttributes({ contentBlm: newtext }); }} /></div>
                        <div>
                            <RichText tagName="span" value={attributes.contentVEL} default="S" onChange={ (newtext) => { setAttributes({ contentVEL: newtext }); }} /></div>
                    </div>
                    <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                        <button type="button" className="rounded-tl-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2021-12-27" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentMSd} default="27" onChange={ (newtext) => { setAttributes({ contentMSd: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2021-12-28" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentULH} default="28" onChange={ (newtext) => { setAttributes({ contentULH: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2021-12-29" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentpiU} default="29" onChange={ (newtext) => { setAttributes({ contentpiU: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2021-12-30" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentjag} default="30" onChange={ (newtext) => { setAttributes({ contentjag: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2021-12-31" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentOzJ} default="31" onChange={ (newtext) => { setAttributes({ contentOzJ: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-01" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentaqm} default="1" onChange={ (newtext) => { setAttributes({ contentaqm: newtext }); }} /></time>
                        </button>
                        <button type="button" className="rounded-tr-lg bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-01" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentPyb} default="2" onChange={ (newtext) => { setAttributes({ contentPyb: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-02" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentiSc} default="3" onChange={ (newtext) => { setAttributes({ contentiSc: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-04" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentsmo} default="4" onChange={ (newtext) => { setAttributes({ contentsmo: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-05" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentcXp} default="5" onChange={ (newtext) => { setAttributes({ contentcXp: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-06" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentFRm} default="6" onChange={ (newtext) => { setAttributes({ contentFRm: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-07" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contenteKP} default="7" onChange={ (newtext) => { setAttributes({ contenteKP: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-08" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentdXp} default="8" onChange={ (newtext) => { setAttributes({ contentdXp: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-09" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentcYe} default="9" onChange={ (newtext) => { setAttributes({ contentcYe: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-10" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentWNx} default="10" onChange={ (newtext) => { setAttributes({ contentWNx: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-11" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentyIn} default="11" onChange={ (newtext) => { setAttributes({ contentyIn: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 font-semibold text-indigo-600 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-12" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentlGO} default="12" onChange={ (newtext) => { setAttributes({ contentlGO: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-13" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentiXZ} default="13" onChange={ (newtext) => { setAttributes({ contentiXZ: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-14" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentars} default="14" onChange={ (newtext) => { setAttributes({ contentars: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-15" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contenteXJ} default="15" onChange={ (newtext) => { setAttributes({ contenteXJ: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-16" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentmhp} default="16" onChange={ (newtext) => { setAttributes({ contentmhp: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-17" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentCVU} default="17" onChange={ (newtext) => { setAttributes({ contentCVU: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-18" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentBzG} default="18" onChange={ (newtext) => { setAttributes({ contentBzG: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-19" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentpaD} default="19" onChange={ (newtext) => { setAttributes({ contentpaD: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-20" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentcNh} default="20" onChange={ (newtext) => { setAttributes({ contentcNh: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-21" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentEdk} default="21" onChange={ (newtext) => { setAttributes({ contentEdk: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-22" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 font-semibold text-white">
                                <RichText tagName="span" value={attributes.contentyFD} default="22" onChange={ (newtext) => { setAttributes({ contentyFD: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-23" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentcrS} default="23" onChange={ (newtext) => { setAttributes({ contentcrS: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-24" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentwCO} default="24" onChange={ (newtext) => { setAttributes({ contentwCO: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-25" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentkOy} default="25" onChange={ (newtext) => { setAttributes({ contentkOy: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-26" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentJJD} default="26" onChange={ (newtext) => { setAttributes({ contentJJD: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-27" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentlGu} default="27" onChange={ (newtext) => { setAttributes({ contentlGu: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-28" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentOVZ} default="28" onChange={ (newtext) => { setAttributes({ contentOVZ: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-29" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentZCU} default="29" onChange={ (newtext) => { setAttributes({ contentZCU: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-30" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contenthvZ} default="30" onChange={ (newtext) => { setAttributes({ contenthvZ: newtext }); }} /></time>
                        </button>
                        <button type="button" className="rounded-bl-lg bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-31" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentxZZ} default="31" onChange={ (newtext) => { setAttributes({ contentxZZ: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-02-01" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentMIA} default="1" onChange={ (newtext) => { setAttributes({ contentMIA: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-02-02" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentxyU} default="2" onChange={ (newtext) => { setAttributes({ contentxyU: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-02-03" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentwAI} default="3" onChange={ (newtext) => { setAttributes({ contentwAI: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-02-04" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentdnt} default="4" onChange={ (newtext) => { setAttributes({ contentdnt: newtext }); }} /></time>
                        </button>
                        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-02-05" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentshN} default="5" onChange={ (newtext) => { setAttributes({ contentshN: newtext }); }} /></time>
                        </button>
                        <button type="button" className="rounded-br-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-02-06" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText tagName="span" value={attributes.contentbPh} default="6" onChange={ (newtext) => { setAttributes({ contentbPh: newtext }); }} /></time>
                        </button>
                    </div>
                    <button type="button" className="focus:outline-none mt-8 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <RichText tagName="span" value={attributes.contentZfD} default="Add event" onChange={ (newtext) => { setAttributes({ contentZfD: newtext }); }} /></button>
                </div>
                <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
                    <li className="relative flex space-x-6 py-6 xl:static">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlCJX: media.url,
            imagealtKDh: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlCJX } 
            alt={ attributes.imagealtKDh } 
            onClick={ open } 
            className="h-14 w-14 flex-none rounded-full"
          /> 
        )} 
      />
                        <div className="flex-auto">
                             <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0"><RichText tagName="span" value={attributes.contentIHg} default="Leslie Alexander" onChange={ (newtext) =>  {
        setAttributes({ contentIHg: newtext });
      }}
    /></h3>

                            <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                                <div className="flex items-start space-x-3"> <dt className="mt-0.5">
                <span className="sr-only"><RichText tagName="span" value={attributes.contentfBy} default="Date" onChange={ (newtext) =>  {
        setAttributes({ contentfBy: newtext });
      }}
    /></span>
                
                
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrMf }}
        >
      </svg>
      
              </dt>

                                    <dd>
                                        <time datetime="2022-01-10T17:00">
                                            <RichText tagName="span" value={attributes.contentHDO} default="January 10th, 2022 at 5:00 PM" onChange={ (newtext) => { setAttributes({ contentHDO: newtext }); }} /></time>
                                    </dd>
                                </div>
                                <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5"> <dt className="mt-0.5">
                <span className="sr-only"><RichText tagName="span" value={attributes.contentGeO} default="Location" onChange={ (newtext) =>  {
        setAttributes({ contentGeO: newtext });
      }}
    /></span>
                
                
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyCx }}
        >
      </svg>
      
              </dt>

                                    <dd>
                                        <RichText tagName="span" value={attributes.contentKki} default="Starbucks" onChange={ (newtext) => { setAttributes({ contentKki: newtext }); }} /></dd>
                                </div>
                            </dl>
                        </div>
                        <div className="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center">
                            <div>
                                <button type="button" className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600" id="menu-0-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentQdG} default="Open options" onChange={ (newtext) =>  {
        setAttributes({ contentQdG: newtext });
      }}
    /></span>

                                    
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJta }}
        >
      </svg>
      
                                </button>
                            </div>
                            <div className="focus:outline-none absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
                                <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-0"><RichText tagName="span" value={attributes.contentwOc} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentwOc: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-1"><RichText tagName="span" value={attributes.contentLGd} default="Cancel" onChange={ (newtext) =>  {
        setAttributes({ contentLGd: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
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
             <h2 class="text-lg font-semibold text-gray-900"><RichText.Content value={attributes.contentgcw} /></h2>

            <div class="lg:grid lg:grid-cols-12 lg:gap-x-16">
                <div class="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
                    <div class="flex items-center text-gray-900">
                        <button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"> <span class="sr-only"><RichText.Content value={attributes.contentjDI} /></span>

                            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUbv }}
        >
      </svg>
      
                        </button>
                        <div class="flex-auto font-semibold">
                            <RichText.Content value={attributes.contentvgi} /></div>
                        <button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"> <span class="sr-only"><RichText.Content value={attributes.contentbyz} /></span>

                            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsjP }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                        <div>
                            <RichText.Content value={attributes.contentnCC} /></div>
                        <div>
                            <RichText.Content value={attributes.contentqlY} /></div>
                        <div>
                            <RichText.Content value={attributes.contentYpu} /></div>
                        <div>
                            <RichText.Content value={attributes.contentdIZ} /></div>
                        <div>
                            <RichText.Content value={attributes.contentNte} /></div>
                        <div>
                            <RichText.Content value={attributes.contentBlm} /></div>
                        <div>
                            <RichText.Content value={attributes.contentVEL} /></div>
                    </div>
                    <div class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                        <button type="button" class="rounded-tl-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2021-12-27" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentMSd} /></time>
                        </button>
                        <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2021-12-28" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentULH} /></time>
                        </button>
                        <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2021-12-29" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentpiU} /></time>
                        </button>
                        <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2021-12-30" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentjag} /></time>
                        </button>
                        <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2021-12-31" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentOzJ} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentaqm} /></time>
                        </button>
                        <button type="button" class="rounded-tr-lg bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentPyb} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-02" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentiSc} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-04" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentsmo} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-05" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentcXp} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-06" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentFRm} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-07" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contenteKP} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-08" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentdXp} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-09" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentcYe} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-10" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentWNx} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-11" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentyIn} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 font-semibold text-indigo-600 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-12" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentlGO} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-13" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentiXZ} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-14" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentars} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-15" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contenteXJ} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-16" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentmhp} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-17" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentCVU} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-18" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentBzG} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-19" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentpaD} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-20" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentcNh} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-21" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentEdk} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-22" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 font-semibold text-white">
                                <RichText.Content value={attributes.contentyFD} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-23" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentcrS} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-24" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentwCO} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-25" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentkOy} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-26" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentJJD} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-27" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentlGu} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-28" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentOVZ} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-29" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentZCU} /></time>
                        </button>
                        <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-30" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contenthvZ} /></time>
                        </button>
                        <button type="button" class="rounded-bl-lg bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-01-31" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentxZZ} /></time>
                        </button>
                        <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-02-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentMIA} /></time>
                        </button>
                        <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-02-02" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentxyU} /></time>
                        </button>
                        <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-02-03" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentwAI} /></time>
                        </button>
                        <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-02-04" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentdnt} /></time>
                        </button>
                        <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-02-05" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentshN} /></time>
                        </button>
                        <button type="button" class="rounded-br-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                            <time datetime="2022-02-06" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                <RichText.Content value={attributes.contentbPh} /></time>
                        </button>
                    </div>
                    <button type="button" class="focus:outline-none mt-8 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <RichText.Content value={attributes.contentZfD} /></button>
                </div>
                <ol class="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
                    <li class="relative flex space-x-6 py-6 xl:static">
                        
      <img
            src={ attributes.imageurlCJX } 
            alt={ attributes.imagealtKDh } 
            class="h-14 w-14 flex-none rounded-full"
          />
                        <div class="flex-auto">
                             <h3 class="pr-10 font-semibold text-gray-900 xl:pr-0"><RichText.Content value={attributes.contentIHg} /></h3>

                            <dl class="mt-2 flex flex-col text-gray-500 xl:flex-row">
                                <div class="flex items-start space-x-3"> <dt class="mt-0.5">
                <span class="sr-only"><RichText.Content value={attributes.contentfBy} /></span>
                
                
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrMf }}
        >
      </svg>
      
              </dt>

                                    <dd>
                                        <time datetime="2022-01-10T17:00">
                                            <RichText.Content value={attributes.contentHDO} /></time>
                                    </dd>
                                </div>
                                <div class="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5"> <dt class="mt-0.5">
                <span class="sr-only"><RichText.Content value={attributes.contentGeO} /></span>
                
                
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyCx }}
        >
      </svg>
      
              </dt>

                                    <dd>
                                        <RichText.Content value={attributes.contentKki} /></dd>
                                </div>
                            </dl>
                        </div>
                        <div class="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center">
                            <div>
                                <button type="button" class="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600" id="menu-0-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentQdG} /></span>

                                    
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJta }}
        >
      </svg>
      
                                </button>
                            </div>
                            <div class="focus:outline-none absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
                                <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-0"><RichText.Content value={attributes.contentwOc} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-1"><RichText.Content value={attributes.contentLGd} /></span>

                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        