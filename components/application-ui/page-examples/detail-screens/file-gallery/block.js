
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/file-gallery', {
            title: 'file gallery',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentarT": {
    "type": "string",
    "default": "Home"
  },
  "contentdGy": {
    "type": "string",
    "default": "All Files"
  },
  "contentRdi": {
    "type": "string",
    "default": "Photos"
  },
  "contentohr": {
    "type": "string",
    "default": "Shared"
  },
  "contentySI": {
    "type": "string",
    "default": "Albums"
  },
  "contentztC": {
    "type": "string",
    "default": "Settings"
  },
  "contentCdt": {
    "type": "string",
    "default": "Close sidebar"
  },
  "contentUBk": {
    "type": "string",
    "default": "Home"
  },
  "contentYzb": {
    "type": "string",
    "default": "All Files"
  },
  "contentePX": {
    "type": "string",
    "default": "Photos"
  },
  "contentAHS": {
    "type": "string",
    "default": "Shared"
  },
  "contentpyF": {
    "type": "string",
    "default": "Albums"
  },
  "contentWOp": {
    "type": "string",
    "default": "Settings"
  },
  "contentRof": {
    "type": "string",
    "default": "Open sidebar"
  },
  "contentptT": {
    "type": "string",
    "default": "Search all files"
  },
  "contentygO": {
    "type": "string",
    "default": "Search all files"
  },
  "contentekd": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentLGH": {
    "type": "string",
    "default": "Your profile"
  },
  "contentNmj": {
    "type": "string",
    "default": "Sign out"
  },
  "contentEcO": {
    "type": "string",
    "default": "Add file"
  },
  "contentqBK": {
    "type": "string",
    "default": "Photos"
  },
  "contentyyf": {
    "type": "string",
    "default": "Use list view"
  },
  "contentzhv": {
    "type": "string",
    "default": "Use grid view"
  },
  "contentqkI": {
    "type": "string",
    "default": "Select a tab"
  },
  "contentvqz": {
    "type": "string",
    "default": "Recently Viewed"
  },
  "contentoHK": {
    "type": "string",
    "default": "Recently Added"
  },
  "contentEQA": {
    "type": "string",
    "default": "Favorited"
  },
  "contentIgU": {
    "type": "string",
    "default": " Recently Viewed "
  },
  "contentYGi": {
    "type": "string",
    "default": " Recently Added "
  },
  "contentuof": {
    "type": "string",
    "default": " Favorited "
  },
  "contentJwO": {
    "type": "string",
    "default": "Use list view"
  },
  "contentwoY": {
    "type": "string",
    "default": "Use grid view"
  },
  "contentbkZ": {
    "type": "string",
    "default": "Recently viewed"
  },
  "contentkFQ": {
    "type": "string",
    "default": "View details for IMG_4985.HEIC"
  },
  "contentAtc": {
    "type": "string",
    "default": "IMG_4985.HEIC"
  },
  "contentooS": {
    "type": "string",
    "default": "3.9 MB"
  },
  "contentKbJ": {
    "type": "string",
    "default": "Details for "
  },
  "contentjkK": {
    "type": "string",
    "default": "IMG_4985.HEIC"
  },
  "contentwAn": {
    "type": "string",
    "default": "3.9 MB"
  },
  "contentdmb": {
    "type": "string",
    "default": "Favorite"
  },
  "contentQNA": {
    "type": "string",
    "default": "Information"
  },
  "contentTpx": {
    "type": "string",
    "default": "Uploaded by"
  },
  "contenttne": {
    "type": "string",
    "default": "Marie Culver"
  },
  "contentYST": {
    "type": "string",
    "default": "Created"
  },
  "contentTix": {
    "type": "string",
    "default": "June 8, 2020"
  },
  "contentcIS": {
    "type": "string",
    "default": "Last modified"
  },
  "contentwBa": {
    "type": "string",
    "default": "June 8, 2020"
  },
  "contentWWg": {
    "type": "string",
    "default": "Dimensions"
  },
  "contentcgM": {
    "type": "string",
    "default": "4032 x 3024"
  },
  "contentkeg": {
    "type": "string",
    "default": "Resolution"
  },
  "contentvAk": {
    "type": "string",
    "default": "72 x 72"
  },
  "contentLef": {
    "type": "string",
    "default": "Description"
  },
  "contentIdR": {
    "type": "string",
    "default": "Add a description to this image."
  },
  "contentOMA": {
    "type": "string",
    "default": "Add description"
  },
  "contentkbG": {
    "type": "string",
    "default": "Shared with"
  },
  "contentzZY": {
    "type": "string",
    "default": "Aimee Douglas"
  },
  "contentzAh": {
    "type": "string",
    "default": "Remove"
  },
  "contentqWX": {
    "type": "string",
    "default": " Aimee Douglas"
  },
  "contenteUh": {
    "type": "string",
    "default": "Andrea McMillan"
  },
  "contentKiQ": {
    "type": "string",
    "default": "Remove"
  },
  "contentYWO": {
    "type": "string",
    "default": " Andrea McMillan"
  },
  "contentuCa": {
    "type": "string",
    "default": "Share"
  },
  "contentbKC": {
    "type": "string",
    "default": "Download"
  },
  "contentveq": {
    "type": "string",
    "default": "Delete"
  },
  "imageurlrKJ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtKpI": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlTTJ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtlqG": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlivj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517365830460-955ce3ccd263.jpeg'
  },
  "imagealtMHK": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlQjW": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1582053433976-25c00369fc93.jpeg'
  },
  "imagealtBeI": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlref": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1582053433976-25c00369fc93.jpeg'
  },
  "imagealtDZl": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlqWz": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1502685104226-ee32379fefbe.jpeg'
  },
  "imagealteEV": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlXSH": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1494790108377-be9c29b29330.jpeg'
  },
  "imagealtSTZ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgfvv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgxVK": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
  },
  "svghVp": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgBiv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\"/>"
  },
  "svgfZl": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10\"/>"
  },
  "svgxYH": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z\"/>\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 12a3 3 0 11-6 0 3 3 0 016 0z\"/>"
  },
  "svgHij": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgeyW": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgsZw": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
  },
  "svgsCG": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgFqk": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\"/>"
  },
  "svgvWZ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10\"/>"
  },
  "svgJbo": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z\"/>\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 12a3 3 0 11-6 0 3 3 0 016 0z\"/>"
  },
  "svguyI": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h7\"/>"
  },
  "svgUsK": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgQJc": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6v6m0 0v6m0-6h6m-6 0H6\"/>"
  },
  "svgCRw": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z\" clip-rule=\"evenodd\"/>"
  },
  "svgULg": {
    "type": "string",
    "default": "<path d=\"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
  },
  "svgqBy": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z\" clip-rule=\"evenodd\"/>"
  },
  "svgWEV": {
    "type": "string",
    "default": "<path d=\"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
  },
  "svgceZ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"/>"
  },
  "svguKz": {
    "type": "string",
    "default": "<path d=\"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z\"/>"
  },
  "svghST": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgsZw }
            onChange={ ( value ) => {
              setAttributes({ svgsZw: value });
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
            value={ attributes.svgfvv }
            onChange={ ( value ) => {
              setAttributes({ svgfvv: value });
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
            value={ attributes.svgxVK }
            onChange={ ( value ) => {
              setAttributes({ svgxVK: value });
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
            value={ attributes.svghVp }
            onChange={ ( value ) => {
              setAttributes({ svghVp: value });
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
            value={ attributes.svgBiv }
            onChange={ ( value ) => {
              setAttributes({ svgBiv: value });
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
            value={ attributes.svgfZl }
            onChange={ ( value ) => {
              setAttributes({ svgfZl: value });
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
            value={ attributes.svgxYH }
            onChange={ ( value ) => {
              setAttributes({ svgxYH: value });
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
            value={ attributes.svgHij }
            onChange={ ( value ) => {
              setAttributes({ svgHij: value });
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
            value={ attributes.svgeyW }
            onChange={ ( value ) => {
              setAttributes({ svgeyW: value });
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
            value={ attributes.svgsZw }
            onChange={ ( value ) => {
              setAttributes({ svgsZw: value });
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
            value={ attributes.svgsCG }
            onChange={ ( value ) => {
              setAttributes({ svgsCG: value });
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
            value={ attributes.svgFqk }
            onChange={ ( value ) => {
              setAttributes({ svgFqk: value });
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
            value={ attributes.svgvWZ }
            onChange={ ( value ) => {
              setAttributes({ svgvWZ: value });
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
            value={ attributes.svgJbo }
            onChange={ ( value ) => {
              setAttributes({ svgJbo: value });
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
            value={ attributes.svguyI }
            onChange={ ( value ) => {
              setAttributes({ svguyI: value });
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
            value={ attributes.svgUsK }
            onChange={ ( value ) => {
              setAttributes({ svgUsK: value });
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
            value={ attributes.svgQJc }
            onChange={ ( value ) => {
              setAttributes({ svgQJc: value });
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
            value={ attributes.svgCRw }
            onChange={ ( value ) => {
              setAttributes({ svgCRw: value });
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
            value={ attributes.svgULg }
            onChange={ ( value ) => {
              setAttributes({ svgULg: value });
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
            value={ attributes.svgqBy }
            onChange={ ( value ) => {
              setAttributes({ svgqBy: value });
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
            value={ attributes.svgWEV }
            onChange={ ( value ) => {
              setAttributes({ svgWEV: value });
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
            value={ attributes.svgceZ }
            onChange={ ( value ) => {
              setAttributes({ svgceZ: value });
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
            value={ attributes.svguKz }
            onChange={ ( value ) => {
              setAttributes({ svguKz: value });
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
            value={ attributes.svghST }
            onChange={ ( value ) => {
              setAttributes({ svghST: value });
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
            <div className="hidden w-28 bg-indigo-700 overflow-y-auto md:block">
                <div className="w-full py-6 flex flex-col items-center">
                    <div className="flex-shrink-0 flex items-center">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlrKJ: media.url,
            imagealtKpI: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlrKJ } 
            alt={ attributes.imagealtKpI } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                    </div>
                    <div className="flex-1 mt-6 w-full px-2 space-y-1"> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         className="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfvv }}
        >
      </svg>
      
          <span className="mt-2"><RichText tagName="span" value={attributes.contentarT} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentarT: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         className="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxVK }}
        >
      </svg>
      
          <span className="mt-2"><RichText tagName="span" value={attributes.contentdGy} default="All Files" onChange={ (newtext) =>  {
        setAttributes({ contentdGy: newtext });
      }}
    /></span>
</span> <span className="bg-indigo-800 text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" aria-current="page">
          
          
      <svg
         className="text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghVp }}
        >
      </svg>
      
          <span className="mt-2"><RichText tagName="span" value={attributes.contentRdi} default="Photos" onChange={ (newtext) =>  {
        setAttributes({ contentRdi: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         className="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBiv }}
        >
      </svg>
      
          <span className="mt-2"><RichText tagName="span" value={attributes.contentohr} default="Shared" onChange={ (newtext) =>  {
        setAttributes({ contentohr: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         className="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfZl }}
        >
      </svg>
      
          <span className="mt-2"><RichText tagName="span" value={attributes.contentySI} default="Albums" onChange={ (newtext) =>  {
        setAttributes({ contentySI: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         className="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxYH }}
        >
      </svg>
      
          <span className="mt-2"><RichText tagName="span" value={attributes.contentztC} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentztC: newtext });
      }}
    /></span>
</span>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 z-40 flex md:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div className="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col">
                    <div className="absolute top-1 right-0 -mr-14 p-1">
                        <button type="button" className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white">
                            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHij }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentCdt} default="Close sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentCdt: newtext });
      }}
    /></span>

                        </button>
                    </div>
                    <div className="flex-shrink-0 px-4 flex items-center">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlTTJ: media.url,
            imagealtlqG: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlTTJ } 
            alt={ attributes.imagealtlqG } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                    </div>
                    <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                        <nav className="h-full flex flex-col">
                            <div className="space-y-1"> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
              
              
      <svg
         className="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeyW }}
        >
      </svg>
      
              <span><RichText tagName="span" value={attributes.contentUBk} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentUBk: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
              
              
      <svg
         className="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsZw }}
        >
      </svg>
      
              <span><RichText tagName="span" value={attributes.contentYzb} default="All Files" onChange={ (newtext) =>  {
        setAttributes({ contentYzb: newtext });
      }}
    /></span>
</span> <span className="bg-indigo-800 text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium" aria-current="page">
              
              
      <svg
         className="text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsCG }}
        >
      </svg>
      
              <span><RichText tagName="span" value={attributes.contentePX} default="Photos" onChange={ (newtext) =>  {
        setAttributes({ contentePX: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
              
              
      <svg
         className="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFqk }}
        >
      </svg>
      
              <span><RichText tagName="span" value={attributes.contentAHS} default="Shared" onChange={ (newtext) =>  {
        setAttributes({ contentAHS: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
              
              
      <svg
         className="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvWZ }}
        >
      </svg>
      
              <span><RichText tagName="span" value={attributes.contentpyF} default="Albums" onChange={ (newtext) =>  {
        setAttributes({ contentpyF: newtext });
      }}
    /></span>
</span> <span className="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
              
              
      <svg
         className="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJbo }}
        >
      </svg>
      
              <span><RichText tagName="span" value={attributes.contentWOp} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentWOp: newtext });
      }}
    /></span>
</span>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="w-full">
                    <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
                        <button type="button" className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"> <span className="sr-only"><RichText tagName="span" value={attributes.contentRof} default="Open sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentRof: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguyI }}
        >
      </svg>
      
                        </button>
                        <div className="flex-1 flex justify-between px-4 sm:px-6">
                            <div className="flex-1 flex">
                                <form className="w-full flex md:ml-0" action="#" method="GET">
                                    <label for="desktop-search-field" className="sr-only">
                                        <RichText tagName="span" value={attributes.contentptT} default="Search all files" onChange={ (newtext) => { setAttributes({ contentptT: newtext }); }} /></label>
                                    <label for="mobile-search-field" className="sr-only">
                                        <RichText tagName="span" value={attributes.contentygO} default="Search all files" onChange={ (newtext) => { setAttributes({ contentygO: newtext }); }} /></label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                            
      <svg
         className="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUsK }}
        >
      </svg>
      
                                        </div>
                                        <input name="mobile-search-field" id="mobile-search-field" className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden" placeholder="Search" type="search"/>
                                        <input name="desktop-search-field" id="desktop-search-field" className="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block" placeholder="Search all files" type="search"/>
                                    </div>
                                </form>
                            </div>
                            <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                                <div className="relative flex-shrink-0">
                                    <div>
                                        <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentekd} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentekd: newtext });
      }}
    /></span>

                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlivj: media.url,
            imagealtMHK: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlivj } 
            alt={ attributes.imagealtMHK } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                        </button>
                                    </div>
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentLGH} default="Your profile" onChange={ (newtext) =>  {
        setAttributes({ contentLGH: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentNmj} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentNmj: newtext });
      }}
    /></span>

                                    </div>
                                </div>
                                <button type="button" className="flex bg-indigo-600 p-1 rounded-full items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQJc }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentEcO} default="Add file" onChange={ (newtext) =>  {
        setAttributes({ contentEcO: newtext });
      }}
    /></span>

                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="flex-1 flex items-stretch overflow-hidden">
                    <main className="flex-1 overflow-y-auto">
                        <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex">
                                 <h1 className="flex-1 text-2xl font-bold text-gray-900"><RichText tagName="span" value={attributes.contentqBK} default="Photos" onChange={ (newtext) =>  {
        setAttributes({ contentqBK: newtext });
      }}
    /></h1>

                                <div className="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden">
                                    <button type="button" className="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCRw }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentyyf} default="Use list view" onChange={ (newtext) =>  {
        setAttributes({ contentyyf: newtext });
      }}
    /></span>

                                    </button>
                                    <button type="button" className="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgULg }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentzhv} default="Use grid view" onChange={ (newtext) =>  {
        setAttributes({ contentzhv: newtext });
      }}
    /></span>

                                    </button>
                                </div>
                            </div>
                            <div className="mt-3 sm:mt-2">
                                <div className="sm:hidden">
                                    <label for="tabs" className="sr-only">
                                        <RichText tagName="span" value={attributes.contentqkI} default="Select a tab" onChange={ (newtext) => { setAttributes({ contentqkI: newtext }); }} /></label>
                                    <select id="tabs" name="tabs" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                        <option selected="">
                                            <RichText tagName="span" value={attributes.contentvqz} default="Recently Viewed" onChange={ (newtext) => { setAttributes({ contentvqz: newtext }); }} /></option>
                                        <option>
                                            <RichText tagName="span" value={attributes.contentoHK} default="Recently Added" onChange={ (newtext) => { setAttributes({ contentoHK: newtext }); }} /></option>
                                        <option>
                                            <RichText tagName="span" value={attributes.contentEQA} default="Favorited" onChange={ (newtext) => { setAttributes({ contentEQA: newtext }); }} /></option>
                                    </select>
                                </div>
                                <div className="hidden sm:block">
                                    <div className="flex items-center border-b border-gray-200">
                                        <nav className="flex-1 -mb-px flex space-x-6 xl:space-x-8" aria-label="Tabs"> <span aria-current="page" className="border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentIgU} default="Recently Viewed" onChange={ (newtext) =>  {
        setAttributes({ contentIgU: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentYGi} default="Recently Added" onChange={ (newtext) =>  {
        setAttributes({ contentYGi: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentuof} default="Favorited" onChange={ (newtext) =>  {
        setAttributes({ contentuof: newtext });
      }}
    /></span>

                                        </nav>
                                        <div className="hidden ml-6 bg-gray-100 p-0.5 rounded-lg items-center sm:flex">
                                            <button type="button" className="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqBy }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentJwO} default="Use list view" onChange={ (newtext) =>  {
        setAttributes({ contentJwO: newtext });
      }}
    /></span>

                                            </button>
                                            <button type="button" className="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWEV }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentwoY} default="Use grid view" onChange={ (newtext) =>  {
        setAttributes({ contentwoY: newtext });
      }}
    /></span>

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
                                 <h2 id="gallery-heading" className="sr-only"><RichText tagName="span" value={attributes.contentbkZ} default="Recently viewed" onChange={ (newtext) =>  {
        setAttributes({ contentbkZ: newtext });
      }}
    /></h2>

                                <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                    <li className="relative">
                                        <div className="ring-2 ring-offset-2 ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden">
                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlQjW: media.url,
            imagealtBeI: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlQjW } 
            alt={ attributes.imagealtBeI } 
            onClick={ open } 
            className="object-cover pointer-events-none"
          /> 
        )} 
      />
                                            <button type="button" className="absolute inset-0 focus:outline-none"> <span className="sr-only"><RichText tagName="span" value={attributes.contentkFQ} default="View details for IMG_4985.HEIC" onChange={ (newtext) =>  {
        setAttributes({ contentkFQ: newtext });
      }}
    /></span>

                                            </button>
                                        </div>
                                        <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                                            <RichText tagName="span" value={attributes.contentAtc} default="IMG_4985.HEIC" onChange={ (newtext) => { setAttributes({ contentAtc: newtext }); }} /></p>
                                        <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                                            <RichText tagName="span" value={attributes.contentooS} default="3.9 MB" onChange={ (newtext) => { setAttributes({ contentooS: newtext }); }} /></p>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </main>
                    <aside className="hidden w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block">
                        <div className="pb-16 space-y-6">
                            <div>
                                <div className="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlref: media.url,
            imagealtDZl: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlref } 
            alt={ attributes.imagealtDZl } 
            onClick={ open } 
            className="object-cover"
          /> 
        )} 
      />
                                </div>
                                <div className="mt-4 flex items-start justify-between">
                                    <div>
                                         <h2 className="text-lg font-medium text-gray-900"><span className="sr-only"><RichText tagName="span" value={attributes.contentKbJ} default="Details for" onChange={ (newtext) =>  {
        setAttributes({ contentKbJ: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentjkK} default="IMG_4985.HEIC" onChange={ (newtext) =>  {
        setAttributes({ contentjkK: newtext });
      }}
    /></h2>

                                        <p className="text-sm font-medium text-gray-500">
                                            <RichText tagName="span" value={attributes.contentwAn} default="3.9 MB" onChange={ (newtext) => { setAttributes({ contentwAn: newtext }); }} /></p>
                                    </div>
                                    <button type="button" className="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgceZ }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentdmb} default="Favorite" onChange={ (newtext) =>  {
        setAttributes({ contentdmb: newtext });
      }}
    /></span>

                                    </button>
                                </div>
                            </div>
                            <div>
                                 <h3 className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentQNA} default="Information" onChange={ (newtext) =>  {
        setAttributes({ contentQNA: newtext });
      }}
    /></h3>

                                <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                                    <div className="py-3 flex justify-between text-sm font-medium"> <dt className="text-gray-500"><RichText tagName="span" value={attributes.contentTpx} default="Uploaded by" onChange={ (newtext) =>  {
        setAttributes({ contentTpx: newtext });
      }}
    /></dt>

                                        <dd className="text-gray-900">
                                            <RichText tagName="span" value={attributes.contenttne} default="Marie Culver" onChange={ (newtext) => { setAttributes({ contenttne: newtext }); }} /></dd>
                                    </div>
                                    <div className="py-3 flex justify-between text-sm font-medium"> <dt className="text-gray-500"><RichText tagName="span" value={attributes.contentYST} default="Created" onChange={ (newtext) =>  {
        setAttributes({ contentYST: newtext });
      }}
    /></dt>

                                        <dd className="text-gray-900">
                                            <RichText tagName="span" value={attributes.contentTix} default="June 8, 2020" onChange={ (newtext) => { setAttributes({ contentTix: newtext }); }} /></dd>
                                    </div>
                                    <div className="py-3 flex justify-between text-sm font-medium"> <dt className="text-gray-500"><RichText tagName="span" value={attributes.contentcIS} default="Last modified" onChange={ (newtext) =>  {
        setAttributes({ contentcIS: newtext });
      }}
    /></dt>

                                        <dd className="text-gray-900">
                                            <RichText tagName="span" value={attributes.contentwBa} default="June 8, 2020" onChange={ (newtext) => { setAttributes({ contentwBa: newtext }); }} /></dd>
                                    </div>
                                    <div className="py-3 flex justify-between text-sm font-medium"> <dt className="text-gray-500"><RichText tagName="span" value={attributes.contentWWg} default="Dimensions" onChange={ (newtext) =>  {
        setAttributes({ contentWWg: newtext });
      }}
    /></dt>

                                        <dd className="text-gray-900">
                                            <RichText tagName="span" value={attributes.contentcgM} default="4032 x 3024" onChange={ (newtext) => { setAttributes({ contentcgM: newtext }); }} /></dd>
                                    </div>
                                    <div className="py-3 flex justify-between text-sm font-medium"> <dt className="text-gray-500"><RichText tagName="span" value={attributes.contentkeg} default="Resolution" onChange={ (newtext) =>  {
        setAttributes({ contentkeg: newtext });
      }}
    /></dt>

                                        <dd className="text-gray-900">
                                            <RichText tagName="span" value={attributes.contentvAk} default="72 x 72" onChange={ (newtext) => { setAttributes({ contentvAk: newtext }); }} /></dd>
                                    </div>
                                </dl>
                            </div>
                            <div>
                                 <h3 className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentLef} default="Description" onChange={ (newtext) =>  {
        setAttributes({ contentLef: newtext });
      }}
    /></h3>

                                <div className="mt-2 flex items-center justify-between">
                                    <p className="text-sm text-gray-500 italic">
                                        <RichText tagName="span" value={attributes.contentIdR} default="Add a description to this image." onChange={ (newtext) => { setAttributes({ contentIdR: newtext }); }} /></p>
                                    <button type="button" className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                        
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguKz }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentOMA} default="Add description" onChange={ (newtext) =>  {
        setAttributes({ contentOMA: newtext });
      }}
    /></span>

                                    </button>
                                </div>
                            </div>
                            <div>
                                 <h3 className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentkbG} default="Shared with" onChange={ (newtext) =>  {
        setAttributes({ contentkbG: newtext });
      }}
    /></h3>

                                <ul role="list" className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                                    <li className="py-3 flex justify-between items-center">
                                        <div className="flex items-center">
                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlqWz: media.url,
            imagealteEV: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlqWz } 
            alt={ attributes.imagealteEV } 
            onClick={ open } 
            className="w-8 h-8 rounded-full"
          /> 
        )} 
      />
                                            <p className="ml-4 text-sm font-medium text-gray-900">
                                                <RichText tagName="span" value={attributes.contentzZY} default="Aimee Douglas" onChange={ (newtext) => { setAttributes({ contentzZY: newtext }); }} /></p>
                                        </div>
                                        <button type="button" className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <RichText tagName="span" value={attributes.contentzAh} default="Remove" onChange={ (newtext) => { setAttributes({ contentzAh: newtext }); }} /><span className="sr-only"><RichText tagName="span" value={attributes.contentqWX} default="Aimee Douglas" onChange={ (newtext) =>  {
        setAttributes({ contentqWX: newtext });
      }}
    /></span>
                                        </button>
                                    </li>
                                    <li className="py-3 flex justify-between items-center">
                                        <div className="flex items-center">
                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlXSH: media.url,
            imagealtSTZ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlXSH } 
            alt={ attributes.imagealtSTZ } 
            onClick={ open } 
            className="w-8 h-8 rounded-full"
          /> 
        )} 
      />
                                            <p className="ml-4 text-sm font-medium text-gray-900">
                                                <RichText tagName="span" value={attributes.contenteUh} default="Andrea McMillan" onChange={ (newtext) => { setAttributes({ contenteUh: newtext }); }} /></p>
                                        </div>
                                        <button type="button" className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <RichText tagName="span" value={attributes.contentKiQ} default="Remove" onChange={ (newtext) => { setAttributes({ contentKiQ: newtext }); }} /><span className="sr-only"><RichText tagName="span" value={attributes.contentYWO} default="Andrea McMillan" onChange={ (newtext) =>  {
        setAttributes({ contentYWO: newtext });
      }}
    /></span>
                                        </button>
                                    </li>
                                    <li className="py-2 flex justify-between items-center">
                                        <button type="button" className="group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500"> <span className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                    
                    
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghST }}
        >
      </svg>
      
                  </span>
 <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500"><RichText tagName="span" value={attributes.contentuCa} default="Share" onChange={ (newtext) =>  {
        setAttributes({ contentuCa: newtext });
      }}
    /></span>

                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex">
                                <button type="button" className="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <RichText tagName="span" value={attributes.contentbKC} default="Download" onChange={ (newtext) => { setAttributes({ contentbKC: newtext }); }} /></button>
                                <button type="button" className="flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <RichText tagName="span" value={attributes.contentveq} default="Delete" onChange={ (newtext) => { setAttributes({ contentveq: newtext }); }} /></button>
                            </div>
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
            <div class="hidden w-28 bg-indigo-700 overflow-y-auto md:block">
                <div class="w-full py-6 flex flex-col items-center">
                    <div class="flex-shrink-0 flex items-center">
                        
      <img
            src={ attributes.imageurlrKJ } 
            alt={ attributes.imagealtKpI } 
            class="h-8 w-auto"
          />
                    </div>
                    <div class="flex-1 mt-6 w-full px-2 space-y-1"> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfvv }}
        >
      </svg>
      
          <span class="mt-2"><RichText.Content value={attributes.contentarT} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxVK }}
        >
      </svg>
      
          <span class="mt-2"><RichText.Content value={attributes.contentdGy} /></span>
</span> <span class="bg-indigo-800 text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" aria-current="page">
          
          
      <svg
         class="text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghVp }}
        >
      </svg>
      
          <span class="mt-2"><RichText.Content value={attributes.contentRdi} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBiv }}
        >
      </svg>
      
          <span class="mt-2"><RichText.Content value={attributes.contentohr} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfZl }}
        >
      </svg>
      
          <span class="mt-2"><RichText.Content value={attributes.contentySI} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          
          
      <svg
         class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxYH }}
        >
      </svg>
      
          <span class="mt-2"><RichText.Content value={attributes.contentztC} /></span>
</span>
                    </div>
                </div>
            </div>
            <div class="fixed inset-0 z-40 flex md:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div class="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col">
                    <div class="absolute top-1 right-0 -mr-14 p-1">
                        <button type="button" class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white">
                            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHij }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentCdt} /></span>

                        </button>
                    </div>
                    <div class="flex-shrink-0 px-4 flex items-center">
                        
      <img
            src={ attributes.imageurlTTJ } 
            alt={ attributes.imagealtlqG } 
            class="h-8 w-auto"
          />
                    </div>
                    <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                        <nav class="h-full flex flex-col">
                            <div class="space-y-1"> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
              
              
      <svg
         class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeyW }}
        >
      </svg>
      
              <span><RichText.Content value={attributes.contentUBk} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
              
              
      <svg
         class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsZw }}
        >
      </svg>
      
              <span><RichText.Content value={attributes.contentYzb} /></span>
</span> <span class="bg-indigo-800 text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium" aria-current="page">
              
              
      <svg
         class="text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsCG }}
        >
      </svg>
      
              <span><RichText.Content value={attributes.contentePX} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
              
              
      <svg
         class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFqk }}
        >
      </svg>
      
              <span><RichText.Content value={attributes.contentAHS} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
              
              
      <svg
         class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvWZ }}
        >
      </svg>
      
              <span><RichText.Content value={attributes.contentpyF} /></span>
</span> <span class="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
              
              
      <svg
         class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJbo }}
        >
      </svg>
      
              <span><RichText.Content value={attributes.contentWOp} /></span>
</span>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div class="flex-1 flex flex-col overflow-hidden">
                <header class="w-full">
                    <div class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
                        <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"> <span class="sr-only"><RichText.Content value={attributes.contentRof} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguyI }}
        >
      </svg>
      
                        </button>
                        <div class="flex-1 flex justify-between px-4 sm:px-6">
                            <div class="flex-1 flex">
                                <form class="w-full flex md:ml-0" action="#" method="GET">
                                    <label for="desktop-search-field" class="sr-only">
                                        <RichText.Content value={attributes.contentptT} /></label>
                                    <label for="mobile-search-field" class="sr-only">
                                        <RichText.Content value={attributes.contentygO} /></label>
                                    <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                            
      <svg
         class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUsK }}
        >
      </svg>
      
                                        </div>
                                        <input name="mobile-search-field" id="mobile-search-field" class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden" placeholder="Search" type="search"/>
                                        <input name="desktop-search-field" id="desktop-search-field" class="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block" placeholder="Search all files" type="search"/>
                                    </div>
                                </form>
                            </div>
                            <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                                <div class="relative flex-shrink-0">
                                    <div>
                                        <button type="button" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentekd} /></span>

                                            
      <img
            src={ attributes.imageurlivj } 
            alt={ attributes.imagealtMHK } 
            class="h-8 w-8 rounded-full"
          />
                                        </button>
                                    </div>
                                    <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentLGH} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentNmj} /></span>

                                    </div>
                                </div>
                                <button type="button" class="flex bg-indigo-600 p-1 rounded-full items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQJc }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentEcO} /></span>

                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="flex-1 flex items-stretch overflow-hidden">
                    <main class="flex-1 overflow-y-auto">
                        <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div class="flex">
                                 <h1 class="flex-1 text-2xl font-bold text-gray-900"><RichText.Content value={attributes.contentqBK} /></h1>

                                <div class="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden">
                                    <button type="button" class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCRw }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentyyf} /></span>

                                    </button>
                                    <button type="button" class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgULg }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentzhv} /></span>

                                    </button>
                                </div>
                            </div>
                            <div class="mt-3 sm:mt-2">
                                <div class="sm:hidden">
                                    <label for="tabs" class="sr-only">
                                        <RichText.Content value={attributes.contentqkI} /></label>
                                    <select id="tabs" name="tabs" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                        <option selected="">
                                            <RichText.Content value={attributes.contentvqz} /></option>
                                        <option>
                                            <RichText.Content value={attributes.contentoHK} /></option>
                                        <option>
                                            <RichText.Content value={attributes.contentEQA} /></option>
                                    </select>
                                </div>
                                <div class="hidden sm:block">
                                    <div class="flex items-center border-b border-gray-200">
                                        <nav class="flex-1 -mb-px flex space-x-6 xl:space-x-8" aria-label="Tabs"> <span aria-current="page" class="border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentIgU} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentYGi} /></span>
 <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentuof} /></span>

                                        </nav>
                                        <div class="hidden ml-6 bg-gray-100 p-0.5 rounded-lg items-center sm:flex">
                                            <button type="button" class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqBy }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentJwO} /></span>

                                            </button>
                                            <button type="button" class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWEV }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentwoY} /></span>

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section class="mt-8 pb-16" aria-labelledby="gallery-heading">
                                 <h2 id="gallery-heading" class="sr-only"><RichText.Content value={attributes.contentbkZ} /></h2>

                                <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                    <li class="relative">
                                        <div class="ring-2 ring-offset-2 ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden">
                                            
      <img
            src={ attributes.imageurlQjW } 
            alt={ attributes.imagealtBeI } 
            class="object-cover pointer-events-none"
          />
                                            <button type="button" class="absolute inset-0 focus:outline-none"> <span class="sr-only"><RichText.Content value={attributes.contentkFQ} /></span>

                                            </button>
                                        </div>
                                        <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                                            <RichText.Content value={attributes.contentAtc} /></p>
                                        <p class="block text-sm font-medium text-gray-500 pointer-events-none">
                                            <RichText.Content value={attributes.contentooS} /></p>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </main>
                    <aside class="hidden w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block">
                        <div class="pb-16 space-y-6">
                            <div>
                                <div class="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                                    
      <img
            src={ attributes.imageurlref } 
            alt={ attributes.imagealtDZl } 
            class="object-cover"
          />
                                </div>
                                <div class="mt-4 flex items-start justify-between">
                                    <div>
                                         <h2 class="text-lg font-medium text-gray-900"><span class="sr-only"><RichText.Content value={attributes.contentKbJ} /></span><RichText.Content value={attributes.contentjkK} /></h2>

                                        <p class="text-sm font-medium text-gray-500">
                                            <RichText.Content value={attributes.contentwAn} /></p>
                                    </div>
                                    <button type="button" class="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgceZ }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentdmb} /></span>

                                    </button>
                                </div>
                            </div>
                            <div>
                                 <h3 class="font-medium text-gray-900"><RichText.Content value={attributes.contentQNA} /></h3>

                                <dl class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                                    <div class="py-3 flex justify-between text-sm font-medium"> <dt class="text-gray-500"><RichText.Content value={attributes.contentTpx} /></dt>

                                        <dd class="text-gray-900">
                                            <RichText.Content value={attributes.contenttne} /></dd>
                                    </div>
                                    <div class="py-3 flex justify-between text-sm font-medium"> <dt class="text-gray-500"><RichText.Content value={attributes.contentYST} /></dt>

                                        <dd class="text-gray-900">
                                            <RichText.Content value={attributes.contentTix} /></dd>
                                    </div>
                                    <div class="py-3 flex justify-between text-sm font-medium"> <dt class="text-gray-500"><RichText.Content value={attributes.contentcIS} /></dt>

                                        <dd class="text-gray-900">
                                            <RichText.Content value={attributes.contentwBa} /></dd>
                                    </div>
                                    <div class="py-3 flex justify-between text-sm font-medium"> <dt class="text-gray-500"><RichText.Content value={attributes.contentWWg} /></dt>

                                        <dd class="text-gray-900">
                                            <RichText.Content value={attributes.contentcgM} /></dd>
                                    </div>
                                    <div class="py-3 flex justify-between text-sm font-medium"> <dt class="text-gray-500"><RichText.Content value={attributes.contentkeg} /></dt>

                                        <dd class="text-gray-900">
                                            <RichText.Content value={attributes.contentvAk} /></dd>
                                    </div>
                                </dl>
                            </div>
                            <div>
                                 <h3 class="font-medium text-gray-900"><RichText.Content value={attributes.contentLef} /></h3>

                                <div class="mt-2 flex items-center justify-between">
                                    <p class="text-sm text-gray-500 italic">
                                        <RichText.Content value={attributes.contentIdR} /></p>
                                    <button type="button" class="bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                        
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svguKz }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentOMA} /></span>

                                    </button>
                                </div>
                            </div>
                            <div>
                                 <h3 class="font-medium text-gray-900"><RichText.Content value={attributes.contentkbG} /></h3>

                                <ul role="list" class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                                    <li class="py-3 flex justify-between items-center">
                                        <div class="flex items-center">
                                            
      <img
            src={ attributes.imageurlqWz } 
            alt={ attributes.imagealteEV } 
            class="w-8 h-8 rounded-full"
          />
                                            <p class="ml-4 text-sm font-medium text-gray-900">
                                                <RichText.Content value={attributes.contentzZY} /></p>
                                        </div>
                                        <button type="button" class="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <RichText.Content value={attributes.contentzAh} /><span class="sr-only"><RichText.Content value={attributes.contentqWX} /></span>
                                        </button>
                                    </li>
                                    <li class="py-3 flex justify-between items-center">
                                        <div class="flex items-center">
                                            
      <img
            src={ attributes.imageurlXSH } 
            alt={ attributes.imagealtSTZ } 
            class="w-8 h-8 rounded-full"
          />
                                            <p class="ml-4 text-sm font-medium text-gray-900">
                                                <RichText.Content value={attributes.contenteUh} /></p>
                                        </div>
                                        <button type="button" class="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <RichText.Content value={attributes.contentKiQ} /><span class="sr-only"><RichText.Content value={attributes.contentYWO} /></span>
                                        </button>
                                    </li>
                                    <li class="py-2 flex justify-between items-center">
                                        <button type="button" class="group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500"> <span class="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                    
                    
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghST }}
        >
      </svg>
      
                  </span>
 <span class="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500"><RichText.Content value={attributes.contentuCa} /></span>

                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="flex">
                                <button type="button" class="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <RichText.Content value={attributes.contentbKC} /></button>
                                <button type="button" class="flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <RichText.Content value={attributes.contentveq} /></button>
                            </div>
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
        