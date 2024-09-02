
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-title-and-button', {
            title: 'with title and button',
            icon: (<img src="data:image/jpeg;base64,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Ocfk574O5Cd4qQdaY+bgcijt9N+kSVcRPt+T252f417kZHlpXl3uPecl1hZm1l+tlyHqWsCovha1O1CoipRU7CjR/B0y9N8FC8/KssLE5H0qy1bhdSvaNIf4qbwAiotN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgCLTeOxabx2WAItN47FpvHZYAi03jsWm8dlgDybRIHY4USlURUPUhyFVpFD+6HwfYHIY+3iJPKL5QDC5Lj2plpxyFrqmOmkK9Sp/8PaSkmJSGrTfRHFCiRfUq1MkCjD5hhyZ4edl2Iep11iOCCGqJVVhVE8nP8fxEzDNSSscUnGo02sMw5ehiuosNKUhVa9+9VOsBaOX46T5VHOGYmJC03x6xQuO3YVSL6FhRURFrT/Z9/TuRTgH5FJWrrM1da/6kNHobvX279u33OnAqRzc1LclC9yMbPHo8nJswJ9TsKWYujpWGLv3RPPap6S/ETLHz7cUCOQxyDUu3Gqp9cUMESL/XlPJ0AFI1aST8fwqkhEiQzEUlZVFWtIuinn+zUu8fyUTkjOrKzMMbcr8s4yzMwQRwqipSJFrRUWn3+x1QFWOSm+BnH+OkZNmVgaSUbidq44jnVGq1tV7LRf5WlPBtUZnP16Vn/lFRtyUsuw9cNWYupIu/fun8djcAVIEP/wDZiTJKf8lRRJClYlREPOGrkaRKipCnhF/n8kV6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeL6IsCrRKp4AA18TrqRKiOR+5T5ed9WP3KAVC876sfuUXnfVj9ygALzvqx+5Red9WP3KAAvO+rH7lF531Y/coAC876sfuUXnfVj9ygALzvqx+5Red9WP3KABlyv1fVF9S/de5mIARX//Z" />),
            category: 'common',
            attributes: {
  "contentMem": {
    "type": "string",
    "default": " Projects "
  },
  "contentiCY": {
    "type": "string",
    "default": "Button text"
  },
  "svgoRm": {
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
            value={ attributes.svgoRm }
            onChange={ ( value ) => {
              setAttributes({ svgoRm: value });
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
        <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"/>
            </div>
            <div className="relative flex items-center justify-between"> <span className="pr-3 bg-white text-lg font-medium text-gray-900"><RichText tagName="span" value={attributes.contentMem} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentMem: newtext });
      }}
    /></span>

                <button type="button" className="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    
      <svg
         className="-ml-1.5 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoRm }}
        >
      </svg>
       <span><RichText tagName="span" value={attributes.contentiCY} default="Button text" onChange={ (newtext) =>  {
        setAttributes({ contentiCY: newtext });
      }}
    /></span>

                </button>
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
        <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-300"/>
            </div>
            <div class="relative flex items-center justify-between"> <span class="pr-3 bg-white text-lg font-medium text-gray-900"><RichText.Content value={attributes.contentMem} /></span>

                <button type="button" class="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    
      <svg
         class="-ml-1.5 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoRm }}
        >
      </svg>
       <span><RichText.Content value={attributes.contentiCY} /></span>

                </button>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        