
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/borderless-side-by-side', {
            title: 'borderless side by side',
            icon: (<img src="data:image/jpeg;base64,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r5HJTor5KATyU6K+RyU6K+SgE8lOivkclOivkoBPJTor5HJTor5KATyU6K+RyU6K+SgE8lOivkclOivkoBPJTor5HJTor5KATyU6K+RyU6a+SgE8lOivkclOivkoBPJTor5HJTor5KATyU6K+RyU6K+SgE8lOivkclOivkoBPJTor5HJTor5KATyU6K+RyU6a+SgE8lOivkclOivkoBPJTor5HJTor5KATyU6K+RyU6K+SgE8lOivkclOivkoBPJTor5HJTor5KATyU6K+RyU6a+SgE8lOivkclOivkoBPJTor5HJTor5KATyU6K+RyU6K+SgE8lOivkclOivkoBPJTor5HJTor5KATyU6K+RyU6a+SgE8lOivkclOivkoBPJTor5HJTor5KATyU6K+RyU6K+SgE8lOivkclOivkoBPJTor5HJTor5KATyU6K+RyU6K+SgE8lOivkclOivkoBPJTor5HJTor5KATyU6K+RyU6K+SgE8lOivkclOivkoBPJTor5HJTor5KATyU6K+SgAAAAAABOP+Ov0hScf8dfpCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGJr9Rq8MY66LSRqMl5neb5Pd0pEfG07TPlEstrON1z5MVMccOx8Q0l941GCZrFp7prMc0xWdpjtiflsD14RxD/MtHOecXurUyXxWrF+evNWdpmtvjHZ3s5qvZzSajRcOvi1GOcNZzWthwTfnnDjn+mm/wAu3u7t9vg2oAAAAAAAADW8c4tXhOkjJXDOoz3393hi3LNuWN7TM/CIiJnf/wB2yaDjfBdfqtRqtZo9dSt76S2CmG+CLbRO+8RbmjbmnbeflHgYN1pM36nSYdRy8vvcdb8u++28b7PVh8HwajTcJ0uDWXi+fHjitpivLH023nu7vnszAAAAAAAAAGk1PG89OK5tDptPorTitWkTn1vurXtNYttWvJO/ZMN25jjXD9RnycTwY+B4NRfXViMeri1Y5Z5YrE35p3jlntjljw+K4OnEYaWx4MdL2m9q1iJtPxnbvWgAAAAAAAANFg9oMmp1sY9NpsF8M5JxxE6qtc1oi01m8Y5j+mJifjvt8G9cbj4HqsOn/wAsw8KpF41vv68Ri1Nop7zn37+bm2/b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" />),
            category: 'common',
            attributes: {
  "contentjih": {
    "type": "string",
    "default": "January 2022"
  },
  "contentBNb": {
    "type": "string",
    "default": "Previous month"
  },
  "contentUwm": {
    "type": "string",
    "default": "Next month"
  },
  "contentjyo": {
    "type": "string",
    "default": "M"
  },
  "contentsQD": {
    "type": "string",
    "default": "T"
  },
  "contentGiZ": {
    "type": "string",
    "default": "W"
  },
  "contentFEo": {
    "type": "string",
    "default": "T"
  },
  "contentJsJ": {
    "type": "string",
    "default": "F"
  },
  "contentvBB": {
    "type": "string",
    "default": "S"
  },
  "contentEra": {
    "type": "string",
    "default": "S"
  },
  "contenthxB": {
    "type": "string",
    "default": "27"
  },
  "contentghB": {
    "type": "string",
    "default": "28"
  },
  "contentjax": {
    "type": "string",
    "default": "29"
  },
  "contentSPT": {
    "type": "string",
    "default": "30"
  },
  "contentgfQ": {
    "type": "string",
    "default": "31"
  },
  "contentiye": {
    "type": "string",
    "default": "1"
  },
  "contentqNA": {
    "type": "string",
    "default": "2"
  },
  "contentAHM": {
    "type": "string",
    "default": "3"
  },
  "contentbcO": {
    "type": "string",
    "default": "4"
  },
  "contentWfR": {
    "type": "string",
    "default": "5"
  },
  "contenteEB": {
    "type": "string",
    "default": "6"
  },
  "contentkVI": {
    "type": "string",
    "default": "7"
  },
  "contenttIl": {
    "type": "string",
    "default": "8"
  },
  "contentPqt": {
    "type": "string",
    "default": "9"
  },
  "contentXoX": {
    "type": "string",
    "default": "10"
  },
  "contentZog": {
    "type": "string",
    "default": "11"
  },
  "contentTot": {
    "type": "string",
    "default": "12"
  },
  "contentQqP": {
    "type": "string",
    "default": "13"
  },
  "contentmWk": {
    "type": "string",
    "default": "14"
  },
  "contentHNf": {
    "type": "string",
    "default": "15"
  },
  "contentIJj": {
    "type": "string",
    "default": "16"
  },
  "contentWEE": {
    "type": "string",
    "default": "17"
  },
  "contentAIW": {
    "type": "string",
    "default": "18"
  },
  "contentdrh": {
    "type": "string",
    "default": "19"
  },
  "contentXNY": {
    "type": "string",
    "default": "20"
  },
  "contentgOW": {
    "type": "string",
    "default": "21"
  },
  "contentqRv": {
    "type": "string",
    "default": "22"
  },
  "contentqOR": {
    "type": "string",
    "default": "23"
  },
  "contentCcf": {
    "type": "string",
    "default": "24"
  },
  "contentEzG": {
    "type": "string",
    "default": "25"
  },
  "contenteWn": {
    "type": "string",
    "default": "26"
  },
  "contentuyp": {
    "type": "string",
    "default": "27"
  },
  "contentXAo": {
    "type": "string",
    "default": "28"
  },
  "contentGoo": {
    "type": "string",
    "default": "29"
  },
  "contentGle": {
    "type": "string",
    "default": "30"
  },
  "contentBVS": {
    "type": "string",
    "default": "31"
  },
  "contentPix": {
    "type": "string",
    "default": "1"
  },
  "contentgZJ": {
    "type": "string",
    "default": "2"
  },
  "contentiim": {
    "type": "string",
    "default": "3"
  },
  "contentRMF": {
    "type": "string",
    "default": "4"
  },
  "contentERk": {
    "type": "string",
    "default": "5"
  },
  "contentThT": {
    "type": "string",
    "default": "6"
  },
  "contentpfj": {
    "type": "string",
    "default": "Schedule for "
  },
  "contentqfv": {
    "type": "string",
    "default": "January 21, 2022"
  },
  "contentcgT": {
    "type": "string",
    "default": "Leslie Alexander"
  },
  "contentoxq": {
    "type": "string",
    "default": "1:00 PM"
  },
  "contentNMz": {
    "type": "string",
    "default": "2:30 PM"
  },
  "contentIDv": {
    "type": "string",
    "default": "Open options"
  },
  "contenthBa": {
    "type": "string",
    "default": "Edit"
  },
  "contentiqz": {
    "type": "string",
    "default": "Cancel"
  },
  "imageurlPwe": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1494790108377-be9c29b29330.jpeg'
  },
  "imagealtJHP": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgdvo": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgMTW": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgcrp": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z\"/>"
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
            value={ attributes.svgdvo }
            onChange={ ( value ) => {
              setAttributes({ svgdvo: value });
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
            value={ attributes.svgMTW }
            onChange={ ( value ) => {
              setAttributes({ svgMTW: value });
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
            value={ attributes.svgcrp }
            onChange={ ( value ) => {
              setAttributes({ svgcrp: value });
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
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
            <div className="md:pr-14">
                <div className="flex items-center">
                     <h2 className="flex-auto font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentjih} default="January 2022" onChange={ (newtext) =>  {
        setAttributes({ contentjih: newtext });
      }}
    /></h2>

                    <button type="button" className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentBNb} default="Previous month" onChange={ (newtext) =>  {
        setAttributes({ contentBNb: newtext });
      }}
    /></span>

                        
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdvo }}
        >
      </svg>
      
                    </button>
                    <button type="button" className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentUwm} default="Next month" onChange={ (newtext) =>  {
        setAttributes({ contentUwm: newtext });
      }}
    /></span>

                        
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMTW }}
        >
      </svg>
      
                    </button>
                </div>
                <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
                    <div>
                        <RichText tagName="span" value={attributes.contentjyo} default="M" onChange={ (newtext) => { setAttributes({ contentjyo: newtext }); }} /></div>
                    <div>
                        <RichText tagName="span" value={attributes.contentsQD} default="T" onChange={ (newtext) => { setAttributes({ contentsQD: newtext }); }} /></div>
                    <div>
                        <RichText tagName="span" value={attributes.contentGiZ} default="W" onChange={ (newtext) => { setAttributes({ contentGiZ: newtext }); }} /></div>
                    <div>
                        <RichText tagName="span" value={attributes.contentFEo} default="T" onChange={ (newtext) => { setAttributes({ contentFEo: newtext }); }} /></div>
                    <div>
                        <RichText tagName="span" value={attributes.contentJsJ} default="F" onChange={ (newtext) => { setAttributes({ contentJsJ: newtext }); }} /></div>
                    <div>
                        <RichText tagName="span" value={attributes.contentvBB} default="S" onChange={ (newtext) => { setAttributes({ contentvBB: newtext }); }} /></div>
                    <div>
                        <RichText tagName="span" value={attributes.contentEra} default="S" onChange={ (newtext) => { setAttributes({ contentEra: newtext }); }} /></div>
                </div>
                <div className="mt-2 grid grid-cols-7 text-sm">
                    <div className="py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2021-12-27">
                                <RichText tagName="span" value={attributes.contenthxB} default="27" onChange={ (newtext) => { setAttributes({ contenthxB: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2021-12-28">
                                <RichText tagName="span" value={attributes.contentghB} default="28" onChange={ (newtext) => { setAttributes({ contentghB: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2021-12-29">
                                <RichText tagName="span" value={attributes.contentjax} default="29" onChange={ (newtext) => { setAttributes({ contentjax: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2021-12-30">
                                <RichText tagName="span" value={attributes.contentSPT} default="30" onChange={ (newtext) => { setAttributes({ contentSPT: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2021-12-31">
                                <RichText tagName="span" value={attributes.contentgfQ} default="31" onChange={ (newtext) => { setAttributes({ contentgfQ: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-01">
                                <RichText tagName="span" value={attributes.contentiye} default="1" onChange={ (newtext) => { setAttributes({ contentiye: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-02">
                                <RichText tagName="span" value={attributes.contentqNA} default="2" onChange={ (newtext) => { setAttributes({ contentqNA: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-03">
                                <RichText tagName="span" value={attributes.contentAHM} default="3" onChange={ (newtext) => { setAttributes({ contentAHM: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-04">
                                <RichText tagName="span" value={attributes.contentbcO} default="4" onChange={ (newtext) => { setAttributes({ contentbcO: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-05">
                                <RichText tagName="span" value={attributes.contentWfR} default="5" onChange={ (newtext) => { setAttributes({ contentWfR: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-06">
                                <RichText tagName="span" value={attributes.contenteEB} default="6" onChange={ (newtext) => { setAttributes({ contenteEB: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-07">
                                <RichText tagName="span" value={attributes.contentkVI} default="7" onChange={ (newtext) => { setAttributes({ contentkVI: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-08">
                                <RichText tagName="span" value={attributes.contenttIl} default="8" onChange={ (newtext) => { setAttributes({ contenttIl: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-09">
                                <RichText tagName="span" value={attributes.contentPqt} default="9" onChange={ (newtext) => { setAttributes({ contentPqt: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-10">
                                <RichText tagName="span" value={attributes.contentXoX} default="10" onChange={ (newtext) => { setAttributes({ contentXoX: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-11">
                                <RichText tagName="span" value={attributes.contentZog} default="11" onChange={ (newtext) => { setAttributes({ contentZog: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full font-semibold text-indigo-600 hover:bg-gray-200">
                            <time datetime="2022-01-12">
                                <RichText tagName="span" value={attributes.contentTot} default="12" onChange={ (newtext) => { setAttributes({ contentTot: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-13">
                                <RichText tagName="span" value={attributes.contentQqP} default="13" onChange={ (newtext) => { setAttributes({ contentQqP: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-14">
                                <RichText tagName="span" value={attributes.contentmWk} default="14" onChange={ (newtext) => { setAttributes({ contentmWk: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-15">
                                <RichText tagName="span" value={attributes.contentHNf} default="15" onChange={ (newtext) => { setAttributes({ contentHNf: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-16">
                                <RichText tagName="span" value={attributes.contentIJj} default="16" onChange={ (newtext) => { setAttributes({ contentIJj: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-17">
                                <RichText tagName="span" value={attributes.contentWEE} default="17" onChange={ (newtext) => { setAttributes({ contentWEE: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-18">
                                <RichText tagName="span" value={attributes.contentAIW} default="18" onChange={ (newtext) => { setAttributes({ contentAIW: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-19">
                                <RichText tagName="span" value={attributes.contentdrh} default="19" onChange={ (newtext) => { setAttributes({ contentdrh: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-20">
                                <RichText tagName="span" value={attributes.contentXNY} default="20" onChange={ (newtext) => { setAttributes({ contentXNY: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 font-semibold text-white">
                            <time datetime="2022-01-21">
                                <RichText tagName="span" value={attributes.contentgOW} default="21" onChange={ (newtext) => { setAttributes({ contentgOW: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-22">
                                <RichText tagName="span" value={attributes.contentqRv} default="22" onChange={ (newtext) => { setAttributes({ contentqRv: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-23">
                                <RichText tagName="span" value={attributes.contentqOR} default="23" onChange={ (newtext) => { setAttributes({ contentqOR: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-24">
                                <RichText tagName="span" value={attributes.contentCcf} default="24" onChange={ (newtext) => { setAttributes({ contentCcf: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-25">
                                <RichText tagName="span" value={attributes.contentEzG} default="25" onChange={ (newtext) => { setAttributes({ contentEzG: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-26">
                                <RichText tagName="span" value={attributes.contenteWn} default="26" onChange={ (newtext) => { setAttributes({ contenteWn: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-27">
                                <RichText tagName="span" value={attributes.contentuyp} default="27" onChange={ (newtext) => { setAttributes({ contentuyp: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-28">
                                <RichText tagName="span" value={attributes.contentXAo} default="28" onChange={ (newtext) => { setAttributes({ contentXAo: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-29">
                                <RichText tagName="span" value={attributes.contentGoo} default="29" onChange={ (newtext) => { setAttributes({ contentGoo: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-30">
                                <RichText tagName="span" value={attributes.contentGle} default="30" onChange={ (newtext) => { setAttributes({ contentGle: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-31">
                                <RichText tagName="span" value={attributes.contentBVS} default="31" onChange={ (newtext) => { setAttributes({ contentBVS: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2022-02-01">
                                <RichText tagName="span" value={attributes.contentPix} default="1" onChange={ (newtext) => { setAttributes({ contentPix: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2022-02-02">
                                <RichText tagName="span" value={attributes.contentgZJ} default="2" onChange={ (newtext) => { setAttributes({ contentgZJ: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2022-02-03">
                                <RichText tagName="span" value={attributes.contentiim} default="3" onChange={ (newtext) => { setAttributes({ contentiim: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2022-02-04">
                                <RichText tagName="span" value={attributes.contentRMF} default="4" onChange={ (newtext) => { setAttributes({ contentRMF: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2022-02-05">
                                <RichText tagName="span" value={attributes.contentERk} default="5" onChange={ (newtext) => { setAttributes({ contentERk: newtext }); }} /></time>
                        </button>
                    </div>
                    <div className="border-t border-gray-200 py-2">
                        <button type="button" className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2022-02-06">
                                <RichText tagName="span" value={attributes.contentThT} default="6" onChange={ (newtext) => { setAttributes({ contentThT: newtext }); }} /></time>
                        </button>
                    </div>
                </div>
            </div>
            <section className="mt-12 md:mt-0 md:pl-14">
                 <h2 className="font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentpfj} default="Schedule for" onChange={ (newtext) =>  {
        setAttributes({ contentpfj: newtext });
      }}
    /><time datetime="2022-01-21"><RichText tagName="span" value={attributes.contentqfv} default="January 21, 2022" onChange={ (newtext) =>  {
        setAttributes({ contentqfv: newtext });
      }}
    /></time></h2>

                <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                    <li className="group flex items-center space-x-4 rounded-xl py-2 px-4 focus-within:bg-gray-100 hover:bg-gray-100">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlPwe: media.url,
            imagealtJHP: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlPwe } 
            alt={ attributes.imagealtJHP } 
            onClick={ open } 
            className="h-10 w-10 flex-none rounded-full"
          /> 
        )} 
      />
                        <div className="flex-auto">
                            <p className="text-gray-900">
                                <RichText tagName="span" value={attributes.contentcgT} default="Leslie Alexander" onChange={ (newtext) => { setAttributes({ contentcgT: newtext }); }} /></p>
                            <p className="mt-0.5">
                                <time datetime="2022-01-21T13:00">
                                    <RichText tagName="span" value={attributes.contentoxq} default="1:00 PM" onChange={ (newtext) => { setAttributes({ contentoxq: newtext }); }} /></time>-
                                <time datetime="2022-01-21T14:30">
                                    <RichText tagName="span" value={attributes.contentNMz} default="2:30 PM" onChange={ (newtext) => { setAttributes({ contentNMz: newtext }); }} /></time>
                            </p>
                        </div>
                        <div className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100">
                            <div>
                                <button type="button" className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600" id="menu-0-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentIDv} default="Open options" onChange={ (newtext) =>  {
        setAttributes({ contentIDv: newtext });
      }}
    /></span>

                                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcrp }}
        >
      </svg>
      
                                </button>
                            </div>
                            <div className="focus:outline-none absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
                                <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-0"><RichText tagName="span" value={attributes.contenthBa} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contenthBa: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-1"><RichText tagName="span" value={attributes.contentiqz} default="Cancel" onChange={ (newtext) =>  {
        setAttributes({ contentiqz: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
            </section>
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
        <div class="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
            <div class="md:pr-14">
                <div class="flex items-center">
                     <h2 class="flex-auto font-semibold text-gray-900"><RichText.Content value={attributes.contentjih} /></h2>

                    <button type="button" class="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"> <span class="sr-only"><RichText.Content value={attributes.contentBNb} /></span>

                        
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdvo }}
        >
      </svg>
      
                    </button>
                    <button type="button" class="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"> <span class="sr-only"><RichText.Content value={attributes.contentUwm} /></span>

                        
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMTW }}
        >
      </svg>
      
                    </button>
                </div>
                <div class="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
                    <div>
                        <RichText.Content value={attributes.contentjyo} /></div>
                    <div>
                        <RichText.Content value={attributes.contentsQD} /></div>
                    <div>
                        <RichText.Content value={attributes.contentGiZ} /></div>
                    <div>
                        <RichText.Content value={attributes.contentFEo} /></div>
                    <div>
                        <RichText.Content value={attributes.contentJsJ} /></div>
                    <div>
                        <RichText.Content value={attributes.contentvBB} /></div>
                    <div>
                        <RichText.Content value={attributes.contentEra} /></div>
                </div>
                <div class="mt-2 grid grid-cols-7 text-sm">
                    <div class="py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2021-12-27">
                                <RichText.Content value={attributes.contenthxB} /></time>
                        </button>
                    </div>
                    <div class="py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2021-12-28">
                                <RichText.Content value={attributes.contentghB} /></time>
                        </button>
                    </div>
                    <div class="py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2021-12-29">
                                <RichText.Content value={attributes.contentjax} /></time>
                        </button>
                    </div>
                    <div class="py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2021-12-30">
                                <RichText.Content value={attributes.contentSPT} /></time>
                        </button>
                    </div>
                    <div class="py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2021-12-31">
                                <RichText.Content value={attributes.contentgfQ} /></time>
                        </button>
                    </div>
                    <div class="py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-01">
                                <RichText.Content value={attributes.contentiye} /></time>
                        </button>
                    </div>
                    <div class="py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-02">
                                <RichText.Content value={attributes.contentqNA} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-03">
                                <RichText.Content value={attributes.contentAHM} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-04">
                                <RichText.Content value={attributes.contentbcO} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-05">
                                <RichText.Content value={attributes.contentWfR} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-06">
                                <RichText.Content value={attributes.contenteEB} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-07">
                                <RichText.Content value={attributes.contentkVI} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-08">
                                <RichText.Content value={attributes.contenttIl} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-09">
                                <RichText.Content value={attributes.contentPqt} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-10">
                                <RichText.Content value={attributes.contentXoX} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-11">
                                <RichText.Content value={attributes.contentZog} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full font-semibold text-indigo-600 hover:bg-gray-200">
                            <time datetime="2022-01-12">
                                <RichText.Content value={attributes.contentTot} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-13">
                                <RichText.Content value={attributes.contentQqP} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-14">
                                <RichText.Content value={attributes.contentmWk} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-15">
                                <RichText.Content value={attributes.contentHNf} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-16">
                                <RichText.Content value={attributes.contentIJj} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-17">
                                <RichText.Content value={attributes.contentWEE} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-18">
                                <RichText.Content value={attributes.contentAIW} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-19">
                                <RichText.Content value={attributes.contentdrh} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-20">
                                <RichText.Content value={attributes.contentXNY} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 font-semibold text-white">
                            <time datetime="2022-01-21">
                                <RichText.Content value={attributes.contentgOW} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-22">
                                <RichText.Content value={attributes.contentqRv} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-23">
                                <RichText.Content value={attributes.contentqOR} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-24">
                                <RichText.Content value={attributes.contentCcf} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-25">
                                <RichText.Content value={attributes.contentEzG} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-26">
                                <RichText.Content value={attributes.contenteWn} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-27">
                                <RichText.Content value={attributes.contentuyp} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-28">
                                <RichText.Content value={attributes.contentXAo} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-29">
                                <RichText.Content value={attributes.contentGoo} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-30">
                                <RichText.Content value={attributes.contentGle} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-900 hover:bg-gray-200">
                            <time datetime="2022-01-31">
                                <RichText.Content value={attributes.contentBVS} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2022-02-01">
                                <RichText.Content value={attributes.contentPix} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2022-02-02">
                                <RichText.Content value={attributes.contentgZJ} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2022-02-03">
                                <RichText.Content value={attributes.contentiim} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2022-02-04">
                                <RichText.Content value={attributes.contentRMF} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2022-02-05">
                                <RichText.Content value={attributes.contentERk} /></time>
                        </button>
                    </div>
                    <div class="border-t border-gray-200 py-2">
                        <button type="button" class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200">
                            <time datetime="2022-02-06">
                                <RichText.Content value={attributes.contentThT} /></time>
                        </button>
                    </div>
                </div>
            </div>
            <section class="mt-12 md:mt-0 md:pl-14">
                 <h2 class="font-semibold text-gray-900"><RichText.Content value={attributes.contentpfj} /><time datetime="2022-01-21"><RichText.Content value={attributes.contentqfv} /></time></h2>

                <ol class="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                    <li class="group flex items-center space-x-4 rounded-xl py-2 px-4 focus-within:bg-gray-100 hover:bg-gray-100">
                        
      <img
            src={ attributes.imageurlPwe } 
            alt={ attributes.imagealtJHP } 
            class="h-10 w-10 flex-none rounded-full"
          />
                        <div class="flex-auto">
                            <p class="text-gray-900">
                                <RichText.Content value={attributes.contentcgT} /></p>
                            <p class="mt-0.5">
                                <time datetime="2022-01-21T13:00">
                                    <RichText.Content value={attributes.contentoxq} /></time>-
                                <time datetime="2022-01-21T14:30">
                                    <RichText.Content value={attributes.contentNMz} /></time>
                            </p>
                        </div>
                        <div class="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100">
                            <div>
                                <button type="button" class="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600" id="menu-0-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentIDv} /></span>

                                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcrp }}
        >
      </svg>
      
                                </button>
                            </div>
                            <div class="focus:outline-none absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
                                <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-0"><RichText.Content value={attributes.contenthBa} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-1"><RichText.Content value={attributes.contentiqz} /></span>

                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
            </section>
        </div>
    </div>
</div>
            );
            },
        });
        