
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/media-on-right', {
            title: 'media on right',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABABaADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAQFBgMCBwH/xAA+EAABBAIBAgQDAg0EAgIDAAABAAIDBAURIRIxBhNBURQiYTOBFSNCUlNxcnORkrGy4RYyodEXgiQlNnTw/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APpyLD+Bv/y7xf8A/tt/ukU/NeIsk3xCzA4CnBPcEPnSyWHEMY37ufb+IQalFg5/HluPw1cuGjFHkaNoVp4XklgJJ5Gjv0P8F1yHi/M4qjFJksdTgsXpWtpxum01rfUyO3xrbfbug26LD4/xtZkZla1tlCS5SpvtRS1JfMglDR277HJHr7qGfHPiCGjjcnYw9U0br/LaGSHzHu57c8Dg999vRB9EXGS5VitRVZbETLEwJjic8Bz9d9DuVmsH4iy0viebB5ylWgmEPnxOgcSNccHZ579+OyZu7FD48wlZ1GvLJJHIWzvB649A9udenr7oNWi+c0/G/iW5g5cvXw9N1Wq4id3W4FwGiekb9ARs8qdlvHMzZMXFjI6cJyFcWPPvvLYo+/ykj12D/wAINwixl7xZlqOCo3LGPqxz2LgrkNlEkb2EE9bS0/TsVPyXiKzT8Y1cKyGJ0M1R85ed9QID+O+tfKEGkRfN2+PPEH4Dhzb8TT+AE3lSkPPU7n8kb49tnfKuMf4ozA8UVMVmMdXrxX4jLXMTy5zAATpx7E8a4AQbBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAUWKNjImOcxrmOaCSRyD/ANKUvEP2Ef7I/ogeTF+jZ/KE8mL9Ez+UL8+x/d/2/wCF0QePJi/RM/lCeTF+iZ/KF7RB48mL9Ez+UJ5MX6Nn8oXtc/tv3f8Ad/hBxljY+J7msa1jWkggck/9KUvE32En7J/ovaAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMLD4d8V43OZa9h7WKbHkJ/MInLyQAXEdm8f7iu1jw74iZlK+eo28eMq6DybbHh3kyc8EaG+wH8FtEQYCx4EyEvhq7VNyvJk79sWZ5HbbHwSdDQJ9Se3qrvxZ4akzlWi+tJCy5QeHxeczqjf221w12Oh/BaREGMqeGMs+rlTdGGrzW6j68UVKsGNaXN11Of09f3crza8IZCbwthMW2aqJ8fYbLK4ud0uALv9vy73z6gLaogz34Ctf68/DvmQ/C/CeR0bPX1b9ta19685fBWrni3F5iKSEV6Ub2yNcT1nYIGhrXr7rRog+R+EsR4hyng6ari79SKjamcyZszT1s4G+kgHgj0WsyPhjJx0cfTxj8ZbqVYRG+tkYNtc71eHAbBPtsdlr2ta0aa0AewC/UHz3/AMf3W+EzQZdgbeFwW2dPV5TDrp6QTz9d69lMr+GvEVjxPWzWXt497o6r4SyHqHTtrgNbHPLtk8dz7LbIgwh8F5L/AMfjAefU+KE/mdfW7o11b79O/wDhW9zw/bn8WYbKskgEFCF0cjS49RJaRwNa9fUhaREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAXiD7CP9kf0XteIPsI/wBkf0Qe1z+x/d/2/wCF0RARc/sf3f8Ab/hPtv3f93+ED7b93/d/hdERB4n+wk/ZP9F7Xif7CT9k/wBF7QEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBRzeLsDBYlhmuuY6GQxSOMEnQ1wOiC7p6e/wBVdtc17Q5jg5rhsEHYIXzyXIZKnh/EDIqFd9KXI2IpLMkx/FB7ukuLA3kDfupdht9mRr4KsclNWoY+HpNGdkTnuOx1kucNj5ew477QblFhoH5bIXsJRyd+xTklqz/ENgmaHSljwG8tJAOuSR9RwvbL92tPFRN+aaOtnI6wmc/5nxujLuhx/K0Tr+CDbKLZyFetcgqSl3nWGSPja1pOwwAu/qFmM9lblS9nG1rTmeXBUYwk7bAZJHNc/Xvog/cF5sUXY3xbjGNyNu0DUtOAsS9bmHTdkHvo8cdhrhBralllupFZja9rJWhwEjS1wB9wey7LCx3Jr+Nw1b4jMWLTqDZ5IqUrY3HfAe+RxHqDxteMXayOai8ORWMjag8+G38QYZOl0nlva1vI9fqPr7oN6ozL0D8jLQa4+fFG2Vw1x0uJA5/9SsfHbvmJmFORstacw+mbZfuXyhH5gb1fnHetry5zcLmM/wCblLbmRUYGsmOpZo+pzgGjf+47PG/cIN2i+fsyuTxFvJxsbkQxmKfbjZkJmzPEjXAdXBOhz236KdgzmoctQc5mSdVsRu+JddsxPaT07a6MNcSOR2HGig2S4SW447sNVzZS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" />),
            category: 'common',
            attributes: {
  "contentZHx": {
    "type": "string",
    "default": "Lorem ipsum"
  },
  "contentKAo": {
    "type": "string",
    "default": "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto."
  },
  "svgiBQ": {
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
            value={ attributes.svgiBQ }
            onChange={ ( value ) => {
              setAttributes({ svgiBQ: value });
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
        <div className="flex">
            <div>
                 <h4 className="text-lg font-bold"><RichText tagName="span" value={attributes.contentZHx} default="Lorem ipsum" onChange={ (newtext) =>  {
        setAttributes({ contentZHx: newtext });
      }}
    /></h4>

                <p className="mt-1">
                    <RichText tagName="span" value={attributes.contentKAo} default="Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto." onChange={ (newtext) => { setAttributes({ contentKAo: newtext }); }} /></p>
            </div>
            <div className="ml-4 flex-shrink-0">
                
      <svg
         className="h-16 w-16 border border-gray-300 bg-white text-gray-300" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiBQ }}
        >
      </svg>
      
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
        <div class="flex">
            <div>
                 <h4 class="text-lg font-bold"><RichText.Content value={attributes.contentZHx} /></h4>

                <p class="mt-1">
                    <RichText.Content value={attributes.contentKAo} /></p>
            </div>
            <div class="ml-4 flex-shrink-0">
                
      <svg
         class="h-16 w-16 border border-gray-300 bg-white text-gray-300" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiBQ }}
        >
      </svg>
      
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        