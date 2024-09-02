
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-secondary-text', {
            title: 'with secondary text',
            icon: (<img src="data:image/jpeg;base64,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UYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1QUYuJnVALBFGLiZ1Ql7GxsV7Go1Wp5+PjyBUH6Ef8U/osiD9CP+Kf0WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMmq1zNPIkaRvlcie56MTz7G/lTWZ36rTQzyNkVI3o1HKrk8e5P9L9wO0cjJY2yRuRzXJ5RUPk/wChJ/Ff6PmneySBj42Kxrk8oip4Ps/6En8V/oBB+hH/ABT+izO6dNOiMeiqifTx+Cb6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAagZb6La/CC+i2vwgGoGW+i2vwgvotr8IBqBlvotr8IL6La/CAajnNBDP7a0bX+1fKeU+hxvotr8IL6La/CAaiJ/0JP4r/Rwvotr8IU2dNQisYioi/Xz+AP/2Q==" />),
            category: 'common',
            attributes: {
  "contentoUt": {
    "type": "string",
    "default": "Assigned to"
  },
  "contentyNw": {
    "type": "string",
    "default": "Leslie Alexander"
  },
  "contentXXM": {
    "type": "string",
    "default": "@lesliealexander"
  },
  "svgVwg": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgVBZ": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgVwg }
            onChange={ ( value ) => {
              setAttributes({ svgVwg: value });
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
            value={ attributes.svgVBZ }
            onChange={ ( value ) => {
              setAttributes({ svgVBZ: value });
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
            <label for="combobox" className="block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contentoUt} default="Assigned to" onChange={ (newtext) => { setAttributes({ contentoUt: newtext }); }} /></label>
            <div className="relative mt-1">
                <input id="combobox" type="text" className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-12 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" role="combobox" aria-controls="options" aria-expanded="false"/>
                <button type="button" className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVwg }}
        >
      </svg>
      
                </button>
                <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" id="options" role="listbox">
                    <li className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900" id="option-0" role="option" tabindex="-1">
                        <div className="flex"> <span className="truncate"><RichText tagName="span" value={attributes.contentyNw} default="Leslie Alexander" onChange={ (newtext) =>  {
        setAttributes({ contentyNw: newtext });
      }}
    /></span>
 <span className="ml-2 truncate text-gray-500"><RichText tagName="span" value={attributes.contentXXM} default="@lesliealexander" onChange={ (newtext) =>  {
        setAttributes({ contentXXM: newtext });
      }}
    /></span>

                        </div> <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
          
          
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVBZ }}
        >
      </svg>
      
        </span>

                    </li>
                </ul>
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
            <label for="combobox" class="block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contentoUt} /></label>
            <div class="relative mt-1">
                <input id="combobox" type="text" class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-12 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" role="combobox" aria-controls="options" aria-expanded="false"/>
                <button type="button" class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVwg }}
        >
      </svg>
      
                </button>
                <ul class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" id="options" role="listbox">
                    <li class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900" id="option-0" role="option" tabindex="-1">
                        <div class="flex"> <span class="truncate"><RichText.Content value={attributes.contentyNw} /></span>
 <span class="ml-2 truncate text-gray-500"><RichText.Content value={attributes.contentXXM} /></span>

                        </div> <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
          
          
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVBZ }}
        >
      </svg>
      
        </span>

                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        