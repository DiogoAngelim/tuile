
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/year-view', {
            title: 'year view',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentXDs": {
    "type": "string",
    "default": "2022"
  },
  "contentmxO": {
    "type": "string",
    "default": "Previous month"
  },
  "contentgDE": {
    "type": "string",
    "default": "Today"
  },
  "contentZKw": {
    "type": "string",
    "default": "Next month"
  },
  "contentCDB": {
    "type": "string",
    "default": "\n            Year view\n            \n            "
  },
  "contentxcE": {
    "type": "string",
    "default": "Day view"
  },
  "contentROD": {
    "type": "string",
    "default": "Week view"
  },
  "contentnnS": {
    "type": "string",
    "default": "Month view"
  },
  "contentrqz": {
    "type": "string",
    "default": "Year view"
  },
  "contentmTX": {
    "type": "string",
    "default": "Add event"
  },
  "contenteHP": {
    "type": "string",
    "default": "Open menu"
  },
  "contentGNx": {
    "type": "string",
    "default": "Create event"
  },
  "contentoQC": {
    "type": "string",
    "default": "Go to today"
  },
  "contentJGZ": {
    "type": "string",
    "default": "Day view"
  },
  "contentFeR": {
    "type": "string",
    "default": "Week view"
  },
  "contenthzp": {
    "type": "string",
    "default": "Month view"
  },
  "contentFFt": {
    "type": "string",
    "default": "Year view"
  },
  "contentlOM": {
    "type": "string",
    "default": "January"
  },
  "contentvBD": {
    "type": "string",
    "default": "M"
  },
  "contentufy": {
    "type": "string",
    "default": "T"
  },
  "contentffS": {
    "type": "string",
    "default": "W"
  },
  "contentiQW": {
    "type": "string",
    "default": "T"
  },
  "contentsjq": {
    "type": "string",
    "default": "F"
  },
  "contentLCQ": {
    "type": "string",
    "default": "S"
  },
  "contentAsK": {
    "type": "string",
    "default": "S"
  },
  "contentISk": {
    "type": "string",
    "default": "27"
  },
  "contentnhf": {
    "type": "string",
    "default": "28"
  },
  "contentVdo": {
    "type": "string",
    "default": "29"
  },
  "contentPVt": {
    "type": "string",
    "default": "30"
  },
  "contentTNR": {
    "type": "string",
    "default": "31"
  },
  "contentaNV": {
    "type": "string",
    "default": "1"
  },
  "contentbgN": {
    "type": "string",
    "default": "2"
  },
  "contentXVx": {
    "type": "string",
    "default": "3"
  },
  "contentIDC": {
    "type": "string",
    "default": "4"
  },
  "contentLzF": {
    "type": "string",
    "default": "5"
  },
  "contentNdr": {
    "type": "string",
    "default": "6"
  },
  "contentOkC": {
    "type": "string",
    "default": "7"
  },
  "contentbwz": {
    "type": "string",
    "default": "8"
  },
  "contentqxq": {
    "type": "string",
    "default": "9"
  },
  "contentZMT": {
    "type": "string",
    "default": "10"
  },
  "contentDHH": {
    "type": "string",
    "default": "11"
  },
  "contentpTd": {
    "type": "string",
    "default": "12"
  },
  "contentXAc": {
    "type": "string",
    "default": "13"
  },
  "contentdmR": {
    "type": "string",
    "default": "14"
  },
  "contentQHt": {
    "type": "string",
    "default": "15"
  },
  "contentPIM": {
    "type": "string",
    "default": "16"
  },
  "contentINL": {
    "type": "string",
    "default": "17"
  },
  "contentcxi": {
    "type": "string",
    "default": "18"
  },
  "contentqEs": {
    "type": "string",
    "default": "19"
  },
  "contentgzh": {
    "type": "string",
    "default": "20"
  },
  "contentynn": {
    "type": "string",
    "default": "21"
  },
  "contentKOi": {
    "type": "string",
    "default": "22"
  },
  "contentfXP": {
    "type": "string",
    "default": "23"
  },
  "contentpeA": {
    "type": "string",
    "default": "24"
  },
  "contentJCQ": {
    "type": "string",
    "default": "25"
  },
  "contentInZ": {
    "type": "string",
    "default": "26"
  },
  "contentcZO": {
    "type": "string",
    "default": "27"
  },
  "contentCiR": {
    "type": "string",
    "default": "28"
  },
  "contentPeI": {
    "type": "string",
    "default": "29"
  },
  "contentfZZ": {
    "type": "string",
    "default": "30"
  },
  "contentAih": {
    "type": "string",
    "default": "31"
  },
  "contentICk": {
    "type": "string",
    "default": "1"
  },
  "contentwui": {
    "type": "string",
    "default": "2"
  },
  "contentsRz": {
    "type": "string",
    "default": "3"
  },
  "contentigs": {
    "type": "string",
    "default": "4"
  },
  "contentabP": {
    "type": "string",
    "default": "5"
  },
  "contentukw": {
    "type": "string",
    "default": "6"
  },
  "svgopI": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgsmu": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgTDD": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgQSW": {
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
            value={ attributes.svgopI }
            onChange={ ( value ) => {
              setAttributes({ svgopI: value });
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
            value={ attributes.svgsmu }
            onChange={ ( value ) => {
              setAttributes({ svgsmu: value });
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
            value={ attributes.svgTDD }
            onChange={ ( value ) => {
              setAttributes({ svgTDD: value });
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
            value={ attributes.svgQSW }
            onChange={ ( value ) => {
              setAttributes({ svgQSW: value });
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
            <header className="relative z-20 flex items-center justify-between border-b border-gray-200 py-4 px-6">
                 <h1 className="text-lg font-semibold text-gray-900">
      <time datetime="2022"><RichText tagName="span" value={attributes.contentXDs} default="2022" onChange={ (newtext) =>  {
        setAttributes({ contentXDs: newtext });
      }}
    /></time>
    </h1>

                <div className="flex items-center">
                    <div className="flex items-center rounded-md shadow-sm md:items-stretch">
                        <button type="button" className="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"> <span className="sr-only"><RichText tagName="span" value={attributes.contentmxO} default="Previous month" onChange={ (newtext) =>  {
        setAttributes({ contentmxO: newtext });
      }}
    /></span>

                            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgopI }}
        >
      </svg>
      
                        </button>
                        <button type="button" className="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block">
                            <RichText tagName="span" value={attributes.contentgDE} default="Today" onChange={ (newtext) => { setAttributes({ contentgDE: newtext }); }} /></button> <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden"/>

                        <button type="button" className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"> <span className="sr-only"><RichText tagName="span" value={attributes.contentZKw} default="Next month" onChange={ (newtext) =>  {
        setAttributes({ contentZKw: newtext });
      }}
    /></span>

                            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsmu }}
        >
      </svg>
      
                            </button>
                    </div>
                    <div className="hidden md:ml-4 md:flex md:items-center">
                        <div className="relative">
                            <button type="button" className="flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                <RichText tagName="span" value={attributes.contentCDB} default="Year view" onChange={ (newtext) => { setAttributes({ contentCDB: newtext }); }} />
                                    
      <svg
         className="ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTDD }}
        >
      </svg>
      
                            </button>
                            <div className="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0"><RichText tagName="span" value={attributes.contentxcE} default="Day view" onChange={ (newtext) =>  {
        setAttributes({ contentxcE: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1"><RichText tagName="span" value={attributes.contentROD} default="Week view" onChange={ (newtext) =>  {
        setAttributes({ contentROD: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2"><RichText tagName="span" value={attributes.contentnnS} default="Month view" onChange={ (newtext) =>  {
        setAttributes({ contentnnS: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3"><RichText tagName="span" value={attributes.contentrqz} default="Year view" onChange={ (newtext) =>  {
        setAttributes({ contentrqz: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                        <div className="ml-6 h-6 w-px bg-gray-300"/>
                        <button type="button" className="focus:outline-none ml-6 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <RichText tagName="span" value={attributes.contentmTX} default="Add event" onChange={ (newtext) => { setAttributes({ contentmTX: newtext }); }} /></button>
                    </div>
                    <div className="relative ml-6 md:hidden">
                        <button type="button" className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500" id="menu-0-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contenteHP} default="Open menu" onChange={ (newtext) =>  {
        setAttributes({ contenteHP: newtext });
      }}
    /></span>

                            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQSW }}
        >
      </svg>
      
                        </button>
                        <div className="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
                            <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-0"><RichText tagName="span" value={attributes.contentGNx} default="Create event" onChange={ (newtext) =>  {
        setAttributes({ contentGNx: newtext });
      }}
    /></span>

                            </div>
                            <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-1"><RichText tagName="span" value={attributes.contentoQC} default="Go to today" onChange={ (newtext) =>  {
        setAttributes({ contentoQC: newtext });
      }}
    /></span>

                            </div>
                            <div className="py-1" role="none"> <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-2"><RichText tagName="span" value={attributes.contentJGZ} default="Day view" onChange={ (newtext) =>  {
        setAttributes({ contentJGZ: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-3"><RichText tagName="span" value={attributes.contentFeR} default="Week view" onChange={ (newtext) =>  {
        setAttributes({ contentFeR: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-4"><RichText tagName="span" value={attributes.contenthzp} default="Month view" onChange={ (newtext) =>  {
        setAttributes({ contenthzp: newtext });
      }}
    /></span>
 <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-5"><RichText tagName="span" value={attributes.contentFFt} default="Year view" onChange={ (newtext) =>  {
        setAttributes({ contentFFt: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg-white">
                <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-16 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-3 xl:px-8 2xl:grid-cols-4">
                    <section className="text-center">
                         <h2 className="font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentlOM} default="January" onChange={ (newtext) =>  {
        setAttributes({ contentlOM: newtext });
      }}
    /></h2>

                        <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                            <div>
                                <RichText tagName="span" value={attributes.contentvBD} default="M" onChange={ (newtext) => { setAttributes({ contentvBD: newtext }); }} /></div>
                            <div>
                                <RichText tagName="span" value={attributes.contentufy} default="T" onChange={ (newtext) => { setAttributes({ contentufy: newtext }); }} /></div>
                            <div>
                                <RichText tagName="span" value={attributes.contentffS} default="W" onChange={ (newtext) => { setAttributes({ contentffS: newtext }); }} /></div>
                            <div>
                                <RichText tagName="span" value={attributes.contentiQW} default="T" onChange={ (newtext) => { setAttributes({ contentiQW: newtext }); }} /></div>
                            <div>
                                <RichText tagName="span" value={attributes.contentsjq} default="F" onChange={ (newtext) => { setAttributes({ contentsjq: newtext }); }} /></div>
                            <div>
                                <RichText tagName="span" value={attributes.contentLCQ} default="S" onChange={ (newtext) => { setAttributes({ contentLCQ: newtext }); }} /></div>
                            <div>
                                <RichText tagName="span" value={attributes.contentAsK} default="S" onChange={ (newtext) => { setAttributes({ contentAsK: newtext }); }} /></div>
                        </div>
                        <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                            <button type="button" className="rounded-tl-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2021-12-27" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentISk} default="27" onChange={ (newtext) => { setAttributes({ contentISk: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2021-12-28" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentnhf} default="28" onChange={ (newtext) => { setAttributes({ contentnhf: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2021-12-29" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentVdo} default="29" onChange={ (newtext) => { setAttributes({ contentVdo: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2021-12-30" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentPVt} default="30" onChange={ (newtext) => { setAttributes({ contentPVt: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2021-12-31" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentTNR} default="31" onChange={ (newtext) => { setAttributes({ contentTNR: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-01" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentaNV} default="1" onChange={ (newtext) => { setAttributes({ contentaNV: newtext }); }} /></time>
                            </button>
                            <button type="button" className="rounded-tr-lg bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-02" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentbgN} default="2" onChange={ (newtext) => { setAttributes({ contentbgN: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-03" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentXVx} default="3" onChange={ (newtext) => { setAttributes({ contentXVx: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-04" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentIDC} default="4" onChange={ (newtext) => { setAttributes({ contentIDC: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-05" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentLzF} default="5" onChange={ (newtext) => { setAttributes({ contentLzF: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-06" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentNdr} default="6" onChange={ (newtext) => { setAttributes({ contentNdr: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-07" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentOkC} default="7" onChange={ (newtext) => { setAttributes({ contentOkC: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-08" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentbwz} default="8" onChange={ (newtext) => { setAttributes({ contentbwz: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-09" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentqxq} default="9" onChange={ (newtext) => { setAttributes({ contentqxq: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-10" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentZMT} default="10" onChange={ (newtext) => { setAttributes({ contentZMT: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-11" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentDHH} default="11" onChange={ (newtext) => { setAttributes({ contentDHH: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-12" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                                    <RichText tagName="span" value={attributes.contentpTd} default="12" onChange={ (newtext) => { setAttributes({ contentpTd: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-13" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentXAc} default="13" onChange={ (newtext) => { setAttributes({ contentXAc: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-14" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentdmR} default="14" onChange={ (newtext) => { setAttributes({ contentdmR: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-15" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentQHt} default="15" onChange={ (newtext) => { setAttributes({ contentQHt: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-16" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentPIM} default="16" onChange={ (newtext) => { setAttributes({ contentPIM: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-17" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentINL} default="17" onChange={ (newtext) => { setAttributes({ contentINL: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-18" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentcxi} default="18" onChange={ (newtext) => { setAttributes({ contentcxi: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-19" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentqEs} default="19" onChange={ (newtext) => { setAttributes({ contentqEs: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-20" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentgzh} default="20" onChange={ (newtext) => { setAttributes({ contentgzh: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-21" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentynn} default="21" onChange={ (newtext) => { setAttributes({ contentynn: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-22" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentKOi} default="22" onChange={ (newtext) => { setAttributes({ contentKOi: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-23" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentfXP} default="23" onChange={ (newtext) => { setAttributes({ contentfXP: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-24" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentpeA} default="24" onChange={ (newtext) => { setAttributes({ contentpeA: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-25" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentJCQ} default="25" onChange={ (newtext) => { setAttributes({ contentJCQ: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-26" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentInZ} default="26" onChange={ (newtext) => { setAttributes({ contentInZ: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-27" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentcZO} default="27" onChange={ (newtext) => { setAttributes({ contentcZO: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-28" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentCiR} default="28" onChange={ (newtext) => { setAttributes({ contentCiR: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-29" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentPeI} default="29" onChange={ (newtext) => { setAttributes({ contentPeI: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-30" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentfZZ} default="30" onChange={ (newtext) => { setAttributes({ contentfZZ: newtext }); }} /></time>
                            </button>
                            <button type="button" className="rounded-bl-lg bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-31" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentAih} default="31" onChange={ (newtext) => { setAttributes({ contentAih: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-02-01" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentICk} default="1" onChange={ (newtext) => { setAttributes({ contentICk: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-02-02" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentwui} default="2" onChange={ (newtext) => { setAttributes({ contentwui: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-02-03" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentsRz} default="3" onChange={ (newtext) => { setAttributes({ contentsRz: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-02-04" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentigs} default="4" onChange={ (newtext) => { setAttributes({ contentigs: newtext }); }} /></time>
                            </button>
                            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-02-05" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentabP} default="5" onChange={ (newtext) => { setAttributes({ contentabP: newtext }); }} /></time>
                            </button>
                            <button type="button" className="rounded-br-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-02-06" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText tagName="span" value={attributes.contentukw} default="6" onChange={ (newtext) => { setAttributes({ contentukw: newtext }); }} /></time>
                            </button>
                        </div>
                    </section>
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
        <div>
            <header class="relative z-20 flex items-center justify-between border-b border-gray-200 py-4 px-6">
                 <h1 class="text-lg font-semibold text-gray-900">
      <time datetime="2022"><RichText.Content value={attributes.contentXDs} /></time>
    </h1>

                <div class="flex items-center">
                    <div class="flex items-center rounded-md shadow-sm md:items-stretch">
                        <button type="button" class="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"> <span class="sr-only"><RichText.Content value={attributes.contentmxO} /></span>

                            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgopI }}
        >
      </svg>
      
                        </button>
                        <button type="button" class="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block">
                            <RichText.Content value={attributes.contentgDE} /></button> <span class="relative -mx-px h-5 w-px bg-gray-300 md:hidden"/>

                        <button type="button" class="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"> <span class="sr-only"><RichText.Content value={attributes.contentZKw} /></span>

                            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsmu }}
        >
      </svg>
      
                            </button>
                    </div>
                    <div class="hidden md:ml-4 md:flex md:items-center">
                        <div class="relative">
                            <button type="button" class="flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                <RichText.Content value={attributes.contentCDB} />
                                    
      <svg
         class="ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTDD }}
        >
      </svg>
      
                            </button>
                            <div class="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0"><RichText.Content value={attributes.contentxcE} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1"><RichText.Content value={attributes.contentROD} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2"><RichText.Content value={attributes.contentnnS} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3"><RichText.Content value={attributes.contentrqz} /></span>

                                </div>
                            </div>
                        </div>
                        <div class="ml-6 h-6 w-px bg-gray-300"/>
                        <button type="button" class="focus:outline-none ml-6 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <RichText.Content value={attributes.contentmTX} /></button>
                    </div>
                    <div class="relative ml-6 md:hidden">
                        <button type="button" class="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500" id="menu-0-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contenteHP} /></span>

                            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQSW }}
        >
      </svg>
      
                        </button>
                        <div class="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
                            <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-0"><RichText.Content value={attributes.contentGNx} /></span>

                            </div>
                            <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-1"><RichText.Content value={attributes.contentoQC} /></span>

                            </div>
                            <div class="py-1" role="none"> <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-2"><RichText.Content value={attributes.contentJGZ} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-3"><RichText.Content value={attributes.contentFeR} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-4"><RichText.Content value={attributes.contenthzp} /></span>
 <span class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-5"><RichText.Content value={attributes.contentFFt} /></span>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="bg-white">
                <div class="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-16 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-3 xl:px-8 2xl:grid-cols-4">
                    <section class="text-center">
                         <h2 class="font-semibold text-gray-900"><RichText.Content value={attributes.contentlOM} /></h2>

                        <div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                            <div>
                                <RichText.Content value={attributes.contentvBD} /></div>
                            <div>
                                <RichText.Content value={attributes.contentufy} /></div>
                            <div>
                                <RichText.Content value={attributes.contentffS} /></div>
                            <div>
                                <RichText.Content value={attributes.contentiQW} /></div>
                            <div>
                                <RichText.Content value={attributes.contentsjq} /></div>
                            <div>
                                <RichText.Content value={attributes.contentLCQ} /></div>
                            <div>
                                <RichText.Content value={attributes.contentAsK} /></div>
                        </div>
                        <div class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                            <button type="button" class="rounded-tl-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2021-12-27" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentISk} /></time>
                            </button>
                            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2021-12-28" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentnhf} /></time>
                            </button>
                            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2021-12-29" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentVdo} /></time>
                            </button>
                            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2021-12-30" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentPVt} /></time>
                            </button>
                            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2021-12-31" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentTNR} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentaNV} /></time>
                            </button>
                            <button type="button" class="rounded-tr-lg bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-02" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentbgN} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-03" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentXVx} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-04" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentIDC} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-05" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentLzF} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-06" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentNdr} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-07" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentOkC} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-08" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentbwz} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-09" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentqxq} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-10" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentZMT} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-11" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentDHH} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-12" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                                    <RichText.Content value={attributes.contentpTd} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-13" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentXAc} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-14" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentdmR} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-15" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentQHt} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-16" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentPIM} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-17" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentINL} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-18" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentcxi} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-19" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentqEs} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-20" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentgzh} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-21" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentynn} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-22" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentKOi} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-23" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentfXP} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-24" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentpeA} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-25" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentJCQ} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-26" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentInZ} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-27" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentcZO} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-28" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentCiR} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-29" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentPeI} /></time>
                            </button>
                            <button type="button" class="bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-30" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentfZZ} /></time>
                            </button>
                            <button type="button" class="rounded-bl-lg bg-white py-1.5 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-01-31" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentAih} /></time>
                            </button>
                            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-02-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentICk} /></time>
                            </button>
                            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-02-02" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentwui} /></time>
                            </button>
                            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-02-03" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentsRz} /></time>
                            </button>
                            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-02-04" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentigs} /></time>
                            </button>
                            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-02-05" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentabP} /></time>
                            </button>
                            <button type="button" class="rounded-br-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                                <time datetime="2022-02-06" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                    <RichText.Content value={attributes.contentukw} /></time>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        