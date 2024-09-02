
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-label', {
            title: 'with label',
            icon: (<img src="data:image/jpeg;base64,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fyMi993T91dfvTp8aaRER7+5goU+YyZs3Ypps3LtFduKKopqpoqiqrTT394mH3LzMnDu37ldFqvIoxqKv2zVFM63JjTTVejxtM0TF7JyL0zXRX6q6o9vTOsRERGkf/D7leOs5Vdyu5Vciblum3PpmPimr1R+P5MFS75LLxJybeVbs13aKKK7f29YifVV6dJ1/iU2LlZv6nOHl02J/wBH7sVWomNffTTSUmdgUZEX7kUxXcuWYteiudKZiJmY+PeJ9/lW8XgX7WfXlX6aqNbX24iu9N2qffXXX8R/QNYBFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQbnh2bnh2ChueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AG54dm54dgBueHZueHYAbnh2bnh2AP/2Q==" />),
            category: 'common',
            attributes: {
  "contentedF": {
    "type": "string",
    "default": "Job Postings"
  },
  "contentjyv": {
    "type": "string",
    "default": "in Engineering"
  }
},
            edit(props) {
            const { attributes, setAttributes } = props;

            return (
                <div>
                    <InspectorControls>
                    
    <Panel>
      
















































































































































































































































































































































































































































































































    </Panel>
                    </InspectorControls>

                    <div>
    <div>
        <div className="pb-5 border-b border-gray-200">
            <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
                 <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentedF} default="Job Postings" onChange={ (newtext) =>  {
        setAttributes({ contentedF: newtext });
      }}
    /></h3>

                <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                    <RichText tagName="span" value={attributes.contentjyv} default="in Engineering" onChange={ (newtext) => { setAttributes({ contentjyv: newtext }); }} /></p>
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
        <div class="pb-5 border-b border-gray-200">
            <div class="-ml-2 -mt-2 flex flex-wrap items-baseline">
                 <h3 class="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentedF} /></h3>

                <p class="ml-2 mt-1 text-sm text-gray-500 truncate">
                    <RichText.Content value={attributes.contentjyv} /></p>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        