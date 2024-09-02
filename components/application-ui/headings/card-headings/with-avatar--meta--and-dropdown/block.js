
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-avatar--meta--and-dropdown', {
            title: 'with avatar  meta  and dropdown',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABQBaADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAEFAgQGAwf/xAAxEAACAgIABAYBAwQCAwEAAAAAAQIDBBEFEiExBhNBUWGRcRQigRUjMkIHoVKxwXL/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGREBAQEBAQEAAAAAAAAAAAAAABEBAjEh/9oADAMBAAIRAxEAPwD6cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAByPj/j0uGcMli49jhdctOSfVL4A2uMeNuDcLveOrJ5eRF6lXjpS5X8vtv4NLE8bZWTNcvAbVB/7eet/XKfMOHRjFedN62+52/Bs3Gsp/t27ce6Mddbmt8811+L4n4fbfHHynPCvlrljkaUZv4l2+9N+xdHzPxL+n4jweyVNqlOlp/gs/+O/Ed2bVLhWfPntpX9mxvrKPs/dr/wBFzqpuR3IBS+JsjIrpwcXGvnjvNzIUTth/lGLTb0/RvWt/JpldA5ziPDbeGcM4nbjcSypUvBt/s32Oxqai2pxk3tfjsa2Fx3iHD6cZcVpx3j2cPlk1uqUnNeXFNqW+jbT7r1LB1gONx/E+Vn49tV0aHHJwrbq5Y8bE6Wo75ZOS0+j7r2Ij4gzcHB4XTvFprlgU2efmc/LdJxW4qa6Rfy/cQrswcnxbxXfi8Ry8bFrxn+irhOyFinKVrlHm5YOK0unq/Ucd8VXcObuplg+VCqux0WObumpenTpDv67EK6wFH4sy7sbgleRjSuUv1FPSqWpSTmtx7+q6GnbxfJyfE3Bqf0fEMGqUrueN/LGNuq210jJ70+vUQdQDksPxZbLi1OPkTwbqr42yX6Vzk6+SLl1k+kui9NdT0xuO8YlLhN+Tj4UcXidiUFCUnOuLi5Lfo20u/p7CFdSDmMXxDxCyGBn3Y+MuG5+QqKlFy82HM2oyl6PbXZdtmGJ4h4rOOJl5GPiLCyM14moOXmJ87ipdemtrWv5EHVAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfNvG3Drc/wAzJhFy1trT7H0k5nKUaXarHpQb2B80wMOucK6shOOy54Jj0x45ZCvSrVXK+vc0M/Kx8rLslh7UU9aPbw/CxZrsVcZS92cd9defq5zeEYmHwzMnXOW5Qk+rOS8NZc8HilOSm9VzTb36b6/9F/4w4gqsCWPzpW2tbjF9kc74c1kcUxsTl5nfZGGte7/9Gs8Z69feDU4nw7H4phvGylLl5lKMoS5ZQkuqlF+jRtmvm5ccOFcpV2WOyxVxjXrbb37tex0YVtfhvH1kvKzMzLuyMeWN5t005V1y7qOkkvzo2J8ExLZ4jtdk44uPPHjBtanCSSfN09o+mjYxs6u+6VEq7abox5vLsWm17rW00e1WRRfzeTdXZy9Jckk9fkoq8bw9VRXOqWfn3VOmVEK7LU41xa10SXV67N7ML/DVF2LXirPz68eOPHHnVC1ctkIrXVNPT13a0W1WTRepOm+uxQ/y5Jp6/JEMrGnXKyGRVKEXqUlNNJ/LArcnw9j23ytx8vMw/MhGu2ONYoqyMVpb2m09dNrT0eWf4WxM2zKby82mvLjGN9VVqUZuK0m9pvekvXr6lr+uw+VS/V0acuVPzF39vyYf1HHjlXY9tkKnW4pOckuZtb6D6Iz+HU5+JXjXSsjCuyFicGk9waa9PgZnDaMzNxMq5z58Xn5Iprllzx5Xvp7GxbkUUuKuurrcukVOSW/wJ5FELFXO6uM20lFySb326EFNh+F8XEyMS1ZeZcsNTjRVbOLhCMouLWkltaf56FXw/wAN5sOKYM7ceOPRhWysWsydsezSjXBr9qbab37HT5OaqLoUQpsvulFy5K9dIr1bbSPTFya8uhXVcyTbTUlpxaemmvct0VeP4Zw8fJpsjflSootdtOLKxOqub31S1vpt62+h6w4BiQwcbEVl/l4+V+qg+Zbc+dz0+nbbN9ZeM5zgsilyrTc1zrcUu+/YjDzKM2hXY1inHt0fVfn2H0e4NGvi2NZO6KVqjTBTc5QaUk2109X1T9DLH4lj30ec1ZVHzfJ1ZHT5t61og3AamZxGjDupqsU5TtkklBb5U2lt+y20iMriEcadi/T32RqjzWThFaiu/q1v+NgbgIhONkIzg9xktp+6NbDz6MyV8aebdE3GW13+V8dH9AbQNTD4hj5mB+trbjUk3Lm6OOu+zPAy68/DryqYzjCzelNJPo9f/ANgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0eKQpn5HnZLo1Ppr/Y3jR4pOmHkedjO/c+mv9S4N4AEAAAAAAKDxVgXX4Ft2Mm2oPzIru1rui/AHxbhXBrb+Ewzcfq+aXOv57llic2HCdrbhJI+kW8Hw5QlGmtY/Ntvykopt/HYq7PCdVmVG2WU/LS61+X3fo97Mdc3xvnqPkvFKbXnylkTcpWrnW/Y7z/jrwpbh2rjWfDkslBrHqkusU/8Ad+210S9mzpcTwpwrHz/19tLyclf4zu6qHtqPb269y8NZkYCu4xzKOJZGqyxV5MZSVcHJpafXSLEFFJkwyeJWX20UW0xhizqrdi5JTlLXp7dPX3NOGHddTcqI5EbP0jr1LHVS9P279X0fx8nTgtSKHKqjmYWTDAwLce3yFHnlXybW0+TT79E+prWYk7sfLlXXky5qoQcXjKpPU0+y6tpb9DpwKRSZWBB28UcMRfuxYqvVfeWpdF8/4/8AR4OCrycyWTw++520VxhJUuW3y9Vv066+jogKrmL8PJraWSrpc2JCtOvHV3VJ80fjr6+pZYGI4cQc7qpNwxaoRnZHrtc2+vbfbei1ApFXxWLhlU3w/VVzUJQ82ivzOnT9rjp/wz04JjzxuH6sU1KyyVmrHuSTfTfzruWAIOawasifEsGVmNOtRdnmwWNyQr3F9Ob12WnAoOrhsKZ1TrsqlKMlKGtvb6r3XyWILRpQrmuOXWOEuR48Epa6N80umzywI5NNeTyU/ulmTeptx/Y5d179CyBBQZ2HxJWXWxrx7fNyK3FqUnKMYyXKta6Jd3+WevF3K+FlF+PlKcYbqdClKFja7NdujXaXoXQLRp5FmTTwhzjW5ZSqSUYLf72tfWzQxMLK4dmY25xuqlV5EvLra5ddVJ9Xvrtb6dy7Ao5rFwsqGPj4apnGjMhB3tpry3FfuT9uZJL7Lfg1c6uGVwshKElKf7ZLTX72bwFAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG9LZGt92wJBHKvn7HKvn7AkEcq+fscq+fsCQRyr5+xyr5+wJBHKvn7HKvn7AkEcq+fscq+fsCQRyr5+xyr5+wJBHKvn7HKvn7AkEcq+fscq+fsCQRyr5+xyr5+wJBHKvn7HKvn7AkEcq+fscq+fsCQRyr5+xyr5+wJBHKvn7HKvn7AkEa12bJT2tgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYzf7X+DIws/wf4MwABpZvEq8KfLZVa9rakkuV/wA7A3Qc7w/jCpdqyY2T8yfMuXrpv0Ogqn5lUZqMo8y3qS00XcgyAKnL4rbRxqjFhXB4ycY5Fj3uEp75Ev5XX/8ASILYFNxfjscTHzVj032WY1b5rY17rhPl2k3v5XbtvqZZ3G4Y1d0YU322U089k66+aNW1tc3X+em+hYLcFbdxGzH8O/1F1O2yOMrXGPTb5d/X/wAI/rMFXRvDypX21+Y6YQUpQjvW311r267ZILMGtHNrt4cs3HjO6uUOeKiusvjr6lbw3i+RPhWPk5WLk3XZP7owppS1HSf/AJa117tpv2EF2DQxuMYmT1g5xj5H6jmlHS5dtP8AlNdTxlx7HUIzjjZdn9mN1ihXt1Qa2nLr8dltiC1BXf1eieW8XHrutl5cbHZCCcIxkm029/Bq4PGp25OHjyotsjdiq938qivTrrb0uvX5LBdgrcXjWNk2wgq7642xcqbLIajal1bi/wAdeuuhngcUrz5R8vHyYQnDzK7LK9Rsj7p7+ez0yQb4AAAAAAAAAAGMH+1fgyMK/wDBfgDMAAf/2Q==" />),
            category: 'common',
            attributes: {
  "contentAJr": {
    "type": "string",
    "default": "Chelsea Hagon"
  },
  "contenthQK": {
    "type": "string",
    "default": "December 9 at 11:43 AM"
  },
  "contentUYF": {
    "type": "string",
    "default": "Open options"
  },
  "contentfCM": {
    "type": "string",
    "default": "Add to favorites"
  },
  "contentbEo": {
    "type": "string",
    "default": "Embed"
  },
  "contentGFi": {
    "type": "string",
    "default": "Report content"
  },
  "imageurlHVY": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1550525811-e5869dd03032.jpeg'
  },
  "imagealtXCx": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgmgC": {
    "type": "string",
    "default": "<path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"/>"
  },
  "svgQHK": {
    "type": "string",
    "default": "<path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"/>"
  },
  "svgLCY": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgIxN": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgmgC }
            onChange={ ( value ) => {
              setAttributes({ svgmgC: value });
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
            value={ attributes.svgQHK }
            onChange={ ( value ) => {
              setAttributes({ svgQHK: value });
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
            value={ attributes.svgLCY }
            onChange={ ( value ) => {
              setAttributes({ svgLCY: value });
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
            value={ attributes.svgIxN }
            onChange={ ( value ) => {
              setAttributes({ svgIxN: value });
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
        <div className="bg-white px-4 py-5 sm:px-6">
            <div className="flex space-x-3">
                <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlHVY: media.url,
            imagealtXCx: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlHVY } 
            alt={ attributes.imagealtXCx } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900"> <span className="hover:underline"><RichText tagName="span" value={attributes.contentAJr} default="Chelsea Hagon" onChange={ (newtext) =>  {
        setAttributes({ contentAJr: newtext });
      }}
    /></span>

                    </p>
                    <p className="text-sm text-gray-500"> <span className="hover:underline"><RichText tagName="span" value={attributes.contenthQK} default="December 9 at 11:43 AM" onChange={ (newtext) =>  {
        setAttributes({ contenthQK: newtext });
      }}
    /></span>

                    </p>
                </div>
                <div className="flex-shrink-0 self-center flex">
                    <div className="relative z-30 inline-block text-left">
                        <div>
                            <button type="button" className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600" id="menu-0-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentUYF} default="Open options" onChange={ (newtext) =>  {
        setAttributes({ contentUYF: newtext });
      }}
    /></span>

                                
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmgC }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
                            <div className="py-1" role="none"> <span className="text-gray-700 flex px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-0">
              
              
      <svg
         className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQHK }}
        >
      </svg>
      
              <span><RichText tagName="span" value={attributes.contentfCM} default="Add to favorites" onChange={ (newtext) =>  {
        setAttributes({ contentfCM: newtext });
      }}
    /></span>
</span> <span className="text-gray-700 flex px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-1">
              
              
      <svg
         className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLCY }}
        >
      </svg>
      
              <span><RichText tagName="span" value={attributes.contentbEo} default="Embed" onChange={ (newtext) =>  {
        setAttributes({ contentbEo: newtext });
      }}
    /></span>
</span> <span className="text-gray-700 flex px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-2">
              
              
      <svg
         className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIxN }}
        >
      </svg>
      
              <span><RichText tagName="span" value={attributes.contentGFi} default="Report content" onChange={ (newtext) =>  {
        setAttributes({ contentGFi: newtext });
      }}
    /></span>
</span>
                            </div>
                        </div>
                    </div>
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
        <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-3">
                <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlHVY } 
            alt={ attributes.imagealtXCx } 
            class="h-10 w-10 rounded-full"
          />
                </div>
                <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium text-gray-900"> <span class="hover:underline"><RichText.Content value={attributes.contentAJr} /></span>

                    </p>
                    <p class="text-sm text-gray-500"> <span class="hover:underline"><RichText.Content value={attributes.contenthQK} /></span>

                    </p>
                </div>
                <div class="flex-shrink-0 self-center flex">
                    <div class="relative z-30 inline-block text-left">
                        <div>
                            <button type="button" class="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600" id="menu-0-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentUYF} /></span>

                                
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmgC }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
                            <div class="py-1" role="none"> <span class="text-gray-700 flex px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-0">
              
              
      <svg
         class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQHK }}
        >
      </svg>
      
              <span><RichText.Content value={attributes.contentfCM} /></span>
</span> <span class="text-gray-700 flex px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-1">
              
              
      <svg
         class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLCY }}
        >
      </svg>
      
              <span><RichText.Content value={attributes.contentbEo} /></span>
</span> <span class="text-gray-700 flex px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-2">
              
              
      <svg
         class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIxN }}
        >
      </svg>
      
              <span><RichText.Content value={attributes.contentGFi} /></span>
</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        