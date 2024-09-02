
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/basic-responsive', {
            title: 'basic responsive',
            icon: (<img src="data:image/jpeg;base64,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1b9ta19685fBWrni3F5iKSEV6Ub2yNcT1nYIGhrXr7rRog+R+EsR4hyng6ari79SKjamcyZszT1s4G+kgHgj0WsyPhjJx0cfTxj8ZbqVYRG+tkYNtc71eHAbBPtsdlr2ta0aa0AewC/UHz3/AMf3W+EzQZdgbeFwW2dPV5TDrp6QTz9d69lMr+GvEVjxPWzWXt497o6r4SyHqHTtrgNbHPLtk8dz7LbIgwh8F5L/AMfjAefU+KE/mdfW7o11b79O/wDhW9zw/bn8WYbKskgEFCF0cjS49RJaRwNa9fUhaREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREHiD7CP9kf0XteIPsI/wBkf0XtAXP7b93/AHf4T7b93/d/hdEHP7H93/b/AIXRFz+x/d/2/wCEHReJ/sJP2T/Re14n+wk/ZP8ARB7REQUc3i7AwWJYZrrmOhkMUjjBJ0NcDogu6env9Vdtc17Q5jg5rhsEHYIXzyXIZKnh/EDIqFd9KXI2IpLMkx/FB7ukuLA3kDfupdht9mRr4KsclNWoY+HpNGdkTnuOx1kucNj5ew477QblFhoH5bIXsJRyd+xTklqz/ENgmaHSljwG8tJAOuSR9RwvbL92tPFRN+aaOtnI6wmc/wCZ8boy7ocfytE6/gg2yi2chXrXIKkpd51hkj42taTsMALv6hZjPZW5UvZxta05nlwVGMJO2wGSRzXP176IP3BebFF2N8W4xjcjbtA1LTgLEvW5h03ZB76PHHYa4Qa2pZZbqRWY2vayVocBI0tcAfcHsuywsdya/jcNW+IzFi06g2eSKlK2Nx3wHvkcR6g8bXjF2sjmovDkVjI2oPPht/EGGTpdJ5b2tbyPX6j6+6DeqMy9A/Iy0GuPnxRtlcNcdLiQOf8A1Kx8du+YmYU5Gy1pzD6Ztl+5fKEfmBvV+cd62vLnNwuYz/m5S25kVGBrJjqWaPqc4Bo3/uOz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" />),
            category: 'common',
            attributes: {
  "contentEPt": {
    "type": "string",
    "default": "Lorem ipsum"
  },
  "contentZJF": {
    "type": "string",
    "default": "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto."
  },
  "svgnpS": {
    "type": "string",
    "default": "<path vector-effect=\"non-scaling-stroke\" stroke-width=\"1\" d=\"M0 0l200 200M0 200L200 0\"/>"
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
            value={ attributes.svgnpS }
            onChange={ ( value ) => {
              setAttributes({ svgnpS: value });
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
        <div className="sm:flex">
            <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                
      <svg
         className="h-16 w-16 border border-gray-300 bg-white text-gray-300" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnpS }}
        >
      </svg>
      
            </div>
            <div>
                 <h4 className="text-lg font-bold"><RichText tagName="span" value={attributes.contentEPt} default="Lorem ipsum" onChange={ (newtext) =>  {
        setAttributes({ contentEPt: newtext });
      }}
    /></h4>

                <p className="mt-1">
                    <RichText tagName="span" value={attributes.contentZJF} default="Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto." onChange={ (newtext) => { setAttributes({ contentZJF: newtext }); }} /></p>
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
        <div class="sm:flex">
            <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                
      <svg
         class="h-16 w-16 border border-gray-300 bg-white text-gray-300" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnpS }}
        >
      </svg>
      
            </div>
            <div>
                 <h4 class="text-lg font-bold"><RichText.Content value={attributes.contentEPt} /></h4>

                <p class="mt-1">
                    <RichText.Content value={attributes.contentZJF} /></p>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        