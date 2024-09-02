
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/badge-with-remove-button', {
            title: 'badge with remove button',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAZBaADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAQFAQMGAgf/xAAyEAEAAgEDAwEHAwEJAAAAAAAAAQIDBBESBSExUhMUIjJBgZEjUWEVJTM2cXJ0obGy/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAgEQEAAwEAAgEFAAAAAAAAAAAAAQIRAxMhMRIUYfDx/9oADAMBAAIRAxEAPwD6VkyxSdvMtfvE+mGqZmZmZ+rn+WbB1CMmrvqorfU7Y82LLyxTWZ2ik037ftvt5+r0U5RZOul94n0we8T6Yc7i6l1LNfBFKaSK6i+WlJmLfDwme89+/aPDxn65qK6HDnx1wxknDOXJj4XvM7Tt22+WO095X9vO4a6X3ifTB7xPphzOTUZL63Jat7xW2r0+0cvETWJmF3qJmuC9q5YxzEb8pjeITblEZ+TUyuo7/FX8N8TExvHhS6LU5NTktOTbHxrH6W3f/UtdPM8Jj9pc+nP6SJ1jLmms8a+frLTzv6p/LzPeZmVZT/FGb/Z0/wDdl0pGSated/Vb8nO/qt+VD1rX6nBmzRpNReJwYfaWx0wc437z8Vp8R2+ndnFrNbqddktXPFMGHBizTjikTNpmJmY3+kdnTwzmsXvO/qt+Tnf1W/LnNPreof2Znya3Hemtv8WKuOI4xxmdon+Pr/LHTep9R1WXTaiaZbYc+Sa2pOGIrSvfaYtvvPiPLZ4THv1+/wAHSc7+q35ZjJeJ+afujay3HS5LTlnFtG/OPoi9P1GbPmv7zPC8VjbFtt29TnHPazY1d48kXr/MeXtG0/8AefZJcLRkqgAS0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGy4pi0zWN4lXR0nSRqfb+xtz5+025248vVx323+y6HSvS1fhmKrHoNPinFNMUx7G1rU7z2m2/L/ALloydF0OSlaW09uNaTTaL2jeszvtO09+8/VeDfNaDFT/TtNy5exnfnS/mfNY2rP2hvvji9eN6co332mE8PLMmIUYeWSLRT4ttuW30S8dOFdvy9CLWmSIRs2Oa2m0R2n/hW6rpej1eo9vnx3nLx4cq5bV7edu0x+67nwh3+aXTneY+GTCuy9G6fm29pgmdqRjn9S3xVjxE9+/wB0jDpMGC9r4acbWpWkzvM9q+PP+beLm9p9TLFHpehWx67FnyTpYjFeb74cPG152mI377R58Qn4+laHFqY1FMG2SLTaPinjEz5mK77RP2TRVutrfMjExExtMRMfyzt3327jdp/mc5nIHvDjmsbz5ltBxmdWAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==" />),
            category: 'common',
            attributes: {
  "contentbMJ": {
    "type": "string",
    "default": "\n  Small\n  "
  },
  "contentQVR": {
    "type": "string",
    "default": "Remove small option"
  },
  "contentrXF": {
    "type": "string",
    "default": "\n  Large\n  "
  },
  "contentaMj": {
    "type": "string",
    "default": "Remove large option"
  },
  "svgdha": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-width=\"1.5\" d=\"M1 1l6 6m0-6L1 7\"/>"
  },
  "svgofa": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-width=\"1.5\" d=\"M1 1l6 6m0-6L1 7\"/>"
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
            value={ attributes.svgdha }
            onChange={ ( value ) => {
              setAttributes({ svgdha: value });
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
            value={ attributes.svgofa }
            onChange={ ( value ) => {
              setAttributes({ svgofa: value });
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
<span className="inline-flex items-center py-0.5 pl-2 pr-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700"><RichText tagName="span" value={attributes.contentbMJ} default="Small" onChange={ (newtext) =>  {
        setAttributes({ contentbMJ: newtext });
      }}
    /><button type="button" className="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white">
    <span className="sr-only"><RichText tagName="span" value={attributes.contentQVR} default="Remove small option" onChange={ (newtext) =>  {
        setAttributes({ contentQVR: newtext });
      }}
    /></span>

        
      <svg
         className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8"
          dangerouslySetInnerHTML={ { __html: attributes.svgdha }}
        >
      </svg>
      
        </button>
        </span>
<span className="inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700"><RichText tagName="span" value={attributes.contentrXF} default="Large" onChange={ (newtext) =>  {
        setAttributes({ contentrXF: newtext });
      }}
    /><button type="button" className="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white">
    <span className="sr-only"><RichText tagName="span" value={attributes.contentaMj} default="Remove large option" onChange={ (newtext) =>  {
        setAttributes({ contentaMj: newtext });
      }}
    /></span>

        
      <svg
         className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8"
          dangerouslySetInnerHTML={ { __html: attributes.svgofa }}
        >
      </svg>
      
        </button>
        </span>
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
<span class="inline-flex items-center py-0.5 pl-2 pr-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700"><RichText.Content value={attributes.contentbMJ} /><button type="button" class="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white">
    <span class="sr-only"><RichText.Content value={attributes.contentQVR} /></span>

        
      <svg
         class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8"
          dangerouslySetInnerHTML={ { __html: attributes.svgdha }}
        >
      </svg>
      
        </button>
        </span>
<span class="inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700"><RichText.Content value={attributes.contentrXF} /><button type="button" class="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white">
    <span class="sr-only"><RichText.Content value={attributes.contentaMj} /></span>

        
      <svg
         class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8"
          dangerouslySetInnerHTML={ { __html: attributes.svgofa }}
        >
      </svg>
      
        </button>
        </span>
    </div>
</div>
            );
            },
        });
        