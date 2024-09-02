
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-right-justified-avatar-group', {
            title: 'with right justified avatar group',
            icon: (<img src="data:image/jpeg;base64,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2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ2LrL3MbF1l7mUAJ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" />),
            category: 'common',
            attributes: {
  "contentDJA": {
    "type": "string",
    "default": "Back End Developer"
  },
  "contentEpf": {
    "type": "string",
    "default": "in Engineering"
  },
  "contentovb": {
    "type": "string",
    "default": "\n                    Closing on\n                    "
  },
  "contentrrZ": {
    "type": "string",
    "default": "January 7, 2020"
  },
  "contentrlD": {
    "type": "string",
    "default": "Front End Developer"
  },
  "contentqzY": {
    "type": "string",
    "default": "in Engineering"
  },
  "contentCoa": {
    "type": "string",
    "default": "\n                    Closing on\n                    "
  },
  "contentAsZ": {
    "type": "string",
    "default": "January 7, 2020"
  },
  "contentwnZ": {
    "type": "string",
    "default": "User Interface Designer"
  },
  "contentGJf": {
    "type": "string",
    "default": "in Design"
  },
  "contentMNA": {
    "type": "string",
    "default": "\n                    Closing on\n                    "
  },
  "contentBnj": {
    "type": "string",
    "default": "January 14, 2020"
  },
  "imageurlvbD": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1506794778202-cad84cf45f1d.jpeg'
  },
  "imagealtjss": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Dries Vincent"
  },
  "imageurlYCH": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517841905240-472988babdf9.jpeg'
  },
  "imagealtikD": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Lindsay Walton"
  },
  "imageurlASQ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1438761681033-6461ffad8d80.jpeg'
  },
  "imagealthad": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Courtney Henry"
  },
  "imageurlqtw": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtPKf": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Tom Cook"
  },
  "imageurlfoJ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517365830460-955ce3ccd263.jpeg'
  },
  "imagealtaJO": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Whitney Francis"
  },
  "imageurlAWM": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1519345182560-3f2917c472ef.jpeg'
  },
  "imagealtZgQ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Leonard Krasner"
  },
  "imageurlKCS": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1463453091185-61582044d556.jpeg'
  },
  "imagealtQsT": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Floyd Miles"
  },
  "imageurlEau": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1502685104226-ee32379fefbe.jpeg'
  },
  "imagealtAVs": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Emily Selman"
  },
  "imageurlehJ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1500917293891-ef795e70e1f6.jpeg'
  },
  "imagealtqKF": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Kristin Watson"
  },
  "imageurlKdV": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1505840717430-882ce147ef2d.jpeg'
  },
  "imagealtVom": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Emma Dorsey"
  },
  "svgdHX": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z\" clip-rule=\"evenodd\"/>"
  },
  "svgLuq": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgSFc": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z\" clip-rule=\"evenodd\"/>"
  },
  "svgRsU": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svggsK": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z\" clip-rule=\"evenodd\"/>"
  },
  "svgBVu": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgdHX }
            onChange={ ( value ) => {
              setAttributes({ svgdHX: value });
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
            value={ attributes.svgLuq }
            onChange={ ( value ) => {
              setAttributes({ svgLuq: value });
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
            value={ attributes.svgSFc }
            onChange={ ( value ) => {
              setAttributes({ svgSFc: value });
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
            value={ attributes.svgRsU }
            onChange={ ( value ) => {
              setAttributes({ svgRsU: value });
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
            value={ attributes.svggsK }
            onChange={ ( value ) => {
              setAttributes({ svggsK: value });
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
            value={ attributes.svgBVu }
            onChange={ ( value ) => {
              setAttributes({ svgBVu: value });
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
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
                <li> <span className="block hover:bg-gray-50">
        <div className="px-4 py-4 flex items-center sm:px-6">
          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="truncate">
              <div className="flex text-sm">
                <p className="font-medium text-indigo-600 truncate"><RichText tagName="span" value={attributes.contentDJA} default="Back End Developer" onChange={ (newtext) =>  {
        setAttributes({ contentDJA: newtext });
      }}
    /></p>
                <p className="ml-1 flex-shrink-0 font-normal text-gray-500"><RichText tagName="span" value={attributes.contentEpf} default="in Engineering" onChange={ (newtext) =>  {
        setAttributes({ contentEpf: newtext });
      }}
    /></p>
              </div>
              <div className="mt-2 flex">
                <div className="flex items-center text-sm text-gray-500">
                  
                  
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdHX }}
        >
      </svg>
      
                  <p><RichText tagName="span" value={attributes.contentovb} default="Closing on" onChange={ (newtext) =>  {
        setAttributes({ contentovb: newtext });
      }}
    /><time datetime="2020-01-07"><RichText tagName="span" value={attributes.contentrrZ} default="January 7, 2020" onChange={ (newtext) =>  {
        setAttributes({ contentrrZ: newtext });
      }}
    /></time>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
              <div className="flex overflow-hidden -space-x-1">
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlvbD: media.url,
            imagealtjss: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlvbD } 
            alt={ attributes.imagealtjss } 
            onClick={ open } 
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />

                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlYCH: media.url,
            imagealtikD: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlYCH } 
            alt={ attributes.imagealtikD } 
            onClick={ open } 
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />

                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlASQ: media.url,
            imagealthad: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlASQ } 
            alt={ attributes.imagealthad } 
            onClick={ open } 
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />

                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlqtw: media.url,
            imagealtPKf: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlqtw } 
            alt={ attributes.imagealtPKf } 
            onClick={ open } 
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
              </div>
            </div>
          </div>
          <div className="ml-5 flex-shrink-0">
            
            
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLuq }}
        >
      </svg>
      
          </div>
        </div>
      </span>

                </li>
                <li> <span className="block hover:bg-gray-50">
        <div className="px-4 py-4 flex items-center sm:px-6">
          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="truncate">
              <div className="flex text-sm">
                <p className="font-medium text-indigo-600 truncate"><RichText tagName="span" value={attributes.contentrlD} default="Front End Developer" onChange={ (newtext) =>  {
        setAttributes({ contentrlD: newtext });
      }}
    /></p>
                <p className="ml-1 flex-shrink-0 font-normal text-gray-500"><RichText tagName="span" value={attributes.contentqzY} default="in Engineering" onChange={ (newtext) =>  {
        setAttributes({ contentqzY: newtext });
      }}
    /></p>
              </div>
              <div className="mt-2 flex">
                <div className="flex items-center text-sm text-gray-500">
                  
                  
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSFc }}
        >
      </svg>
      
                  <p><RichText tagName="span" value={attributes.contentCoa} default="Closing on" onChange={ (newtext) =>  {
        setAttributes({ contentCoa: newtext });
      }}
    /><time datetime="2020-01-07"><RichText tagName="span" value={attributes.contentAsZ} default="January 7, 2020" onChange={ (newtext) =>  {
        setAttributes({ contentAsZ: newtext });
      }}
    /></time>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
              <div className="flex overflow-hidden -space-x-1">
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlfoJ: media.url,
            imagealtaJO: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlfoJ } 
            alt={ attributes.imagealtaJO } 
            onClick={ open } 
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />

                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlAWM: media.url,
            imagealtZgQ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlAWM } 
            alt={ attributes.imagealtZgQ } 
            onClick={ open } 
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />

                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlKCS: media.url,
            imagealtQsT: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlKCS } 
            alt={ attributes.imagealtQsT } 
            onClick={ open } 
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
              </div>
            </div>
          </div>
          <div className="ml-5 flex-shrink-0">
            
            
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRsU }}
        >
      </svg>
      
          </div>
        </div>
      </span>

                </li>
                <li> <span className="block hover:bg-gray-50">
        <div className="px-4 py-4 flex items-center sm:px-6">
          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="truncate">
              <div className="flex text-sm">
                <p className="font-medium text-indigo-600 truncate"><RichText tagName="span" value={attributes.contentwnZ} default="User Interface Designer" onChange={ (newtext) =>  {
        setAttributes({ contentwnZ: newtext });
      }}
    /></p>
                <p className="ml-1 flex-shrink-0 font-normal text-gray-500"><RichText tagName="span" value={attributes.contentGJf} default="in Design" onChange={ (newtext) =>  {
        setAttributes({ contentGJf: newtext });
      }}
    /></p>
              </div>
              <div className="mt-2 flex">
                <div className="flex items-center text-sm text-gray-500">
                  
                  
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggsK }}
        >
      </svg>
      
                  <p><RichText tagName="span" value={attributes.contentMNA} default="Closing on" onChange={ (newtext) =>  {
        setAttributes({ contentMNA: newtext });
      }}
    /><time datetime="2020-01-14"><RichText tagName="span" value={attributes.contentBnj} default="January 14, 2020" onChange={ (newtext) =>  {
        setAttributes({ contentBnj: newtext });
      }}
    /></time>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
              <div className="flex overflow-hidden -space-x-1">
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlEau: media.url,
            imagealtAVs: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlEau } 
            alt={ attributes.imagealtAVs } 
            onClick={ open } 
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />

                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlehJ: media.url,
            imagealtqKF: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlehJ } 
            alt={ attributes.imagealtqKF } 
            onClick={ open } 
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />

                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlKdV: media.url,
            imagealtVom: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlKdV } 
            alt={ attributes.imagealtVom } 
            onClick={ open } 
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
              </div>
            </div>
          </div>
          <div className="ml-5 flex-shrink-0">
            
            
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBVu }}
        >
      </svg>
      
          </div>
        </div>
      </span>

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
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" class="divide-y divide-gray-200">
                <li> <span class="block hover:bg-gray-50">
        <div class="px-4 py-4 flex items-center sm:px-6">
          <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div class="truncate">
              <div class="flex text-sm">
                <p class="font-medium text-indigo-600 truncate"><RichText.Content value={attributes.contentDJA} /></p>
                <p class="ml-1 flex-shrink-0 font-normal text-gray-500"><RichText.Content value={attributes.contentEpf} /></p>
              </div>
              <div class="mt-2 flex">
                <div class="flex items-center text-sm text-gray-500">
                  
                  
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdHX }}
        >
      </svg>
      
                  <p><RichText.Content value={attributes.contentovb} /><time datetime="2020-01-07"><RichText.Content value={attributes.contentrrZ} /></time>
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
              <div class="flex overflow-hidden -space-x-1">
                
      <img
            src={ attributes.imageurlvbD } 
            alt={ attributes.imagealtjss } 
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          />

                
      <img
            src={ attributes.imageurlYCH } 
            alt={ attributes.imagealtikD } 
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          />

                
      <img
            src={ attributes.imageurlASQ } 
            alt={ attributes.imagealthad } 
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          />

                
      <img
            src={ attributes.imageurlqtw } 
            alt={ attributes.imagealtPKf } 
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          />
              </div>
            </div>
          </div>
          <div class="ml-5 flex-shrink-0">
            
            
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLuq }}
        >
      </svg>
      
          </div>
        </div>
      </span>

                </li>
                <li> <span class="block hover:bg-gray-50">
        <div class="px-4 py-4 flex items-center sm:px-6">
          <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div class="truncate">
              <div class="flex text-sm">
                <p class="font-medium text-indigo-600 truncate"><RichText.Content value={attributes.contentrlD} /></p>
                <p class="ml-1 flex-shrink-0 font-normal text-gray-500"><RichText.Content value={attributes.contentqzY} /></p>
              </div>
              <div class="mt-2 flex">
                <div class="flex items-center text-sm text-gray-500">
                  
                  
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSFc }}
        >
      </svg>
      
                  <p><RichText.Content value={attributes.contentCoa} /><time datetime="2020-01-07"><RichText.Content value={attributes.contentAsZ} /></time>
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
              <div class="flex overflow-hidden -space-x-1">
                
      <img
            src={ attributes.imageurlfoJ } 
            alt={ attributes.imagealtaJO } 
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          />

                
      <img
            src={ attributes.imageurlAWM } 
            alt={ attributes.imagealtZgQ } 
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          />

                
      <img
            src={ attributes.imageurlKCS } 
            alt={ attributes.imagealtQsT } 
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          />
              </div>
            </div>
          </div>
          <div class="ml-5 flex-shrink-0">
            
            
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRsU }}
        >
      </svg>
      
          </div>
        </div>
      </span>

                </li>
                <li> <span class="block hover:bg-gray-50">
        <div class="px-4 py-4 flex items-center sm:px-6">
          <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div class="truncate">
              <div class="flex text-sm">
                <p class="font-medium text-indigo-600 truncate"><RichText.Content value={attributes.contentwnZ} /></p>
                <p class="ml-1 flex-shrink-0 font-normal text-gray-500"><RichText.Content value={attributes.contentGJf} /></p>
              </div>
              <div class="mt-2 flex">
                <div class="flex items-center text-sm text-gray-500">
                  
                  
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggsK }}
        >
      </svg>
      
                  <p><RichText.Content value={attributes.contentMNA} /><time datetime="2020-01-14"><RichText.Content value={attributes.contentBnj} /></time>
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
              <div class="flex overflow-hidden -space-x-1">
                
      <img
            src={ attributes.imageurlEau } 
            alt={ attributes.imagealtAVs } 
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          />

                
      <img
            src={ attributes.imageurlehJ } 
            alt={ attributes.imagealtqKF } 
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          />

                
      <img
            src={ attributes.imageurlKdV } 
            alt={ attributes.imagealtVom } 
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          />
              </div>
            </div>
          </div>
          <div class="ml-5 flex-shrink-0">
            
            
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBVu }}
        >
      </svg>
      
          </div>
        </div>
      </span>

                </li>
            </ul>
        </div>
    </div>
</div>
            );
            },
        });
        