
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-actions-and-breadcrumbs-on-dark', {
            title: 'with actions and breadcrumbs on dark',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABCBaADASIAAhEBAxEB/8QAGwABAAEFAQAAAAAAAAAAAAAAAAUBAgMEBgf/xAA8EAEAAgECAwQGBwYGAwAAAAAAAQIDBBEFEiETMUFRBhQWYWXiIjI1cYGjsSNCcpGhpBU2UnOCsiVTwf/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMGBP/EACcRAQACAQMDBAEFAAAAAAAAAAABEQIDEjEEFPAzQVKhcSEyUbHB/9oADAMBAAIRAxEAPwD0nPnrg7Pni09peKRt5yujNinL2UZaTk/080b/AMmhmy5dVqMGH1bLS2LPzWmY+jtG/Xf3tbFgvFcGH1a8aimfmvm5OkxvM783j0WkSeDWYc0zXmrS8XmsVm0bztPkyzmxRl7KctIyT+7zRv8AyQk4bTizYY0mSNRfPNqZeTpEc3fv4M2TFevEJnFhvbmzRaa5MW8fxRfwKEwAirb25Mdr7WtyxM7VjeZ+5j0mqw63T1z6e/NSenvifKY8JZb25aWttM7RvtEdZRnCdLmjUajiGop2F9TtMYK91Y87edgSgAMOq1NdNWk2pe83ty1ikRvuU1NZpzZa2wRvtHazEb/1a3FqWvjwctctorlibdlEzaI2nr0Yb44zYsFK49Tesams2jPEzO20+fgqJKM2KcU5Yy0nHH73NG382PJqscYbZMVqZeXbeIvEd8+aNz6e1LZYjF+yrqaXjHttF426xHn9zHNJyV4jGHT2pvOKYxxXr3+UfzKEzOowxfknNj5t9uXmjffyVnNirkjHbJSLz3Vm0bz+CJz6WbabX37CZyzl3pPL1mOnd/Vj1GlzTqM9bxl5r5ealqYYtvHh9Lw2KE1ObFXJGO2SkXnurNo3n8FmTU4qVvtkx2vWJnk54iZmI32RGo0uadRnreMvNfLzUtTDFt48PpeGzZjTfsuI3nDPaWm8Unl6zHL4FDejU4YrWcmXHS0xE8s3jpuvvmxY5rGTJSs27otaI3RVNJN41E5cEzPq1K05q+PL4e/uWck0nfPppzzbTUiInbfHMR1337vvKE1W1b1i1LRas90xO8Sq1OFfZmD+Ftoo1cXEMGXXZdF9KmfH15bxtzR5x5w2kLq9NqOJcZx/srafDo7b9tMbWyT5V9wJoAFuS8Y8dr232rEzOzVxcQx5L4qzizY4zfUteI2n+UtjUxNtLlisTMzSYiI8eiH02K8ZNHOPFqu1pMRectZ5K1267b934LCJmM2K2ScdctJvHfWLRvH4EZsVsk465aTeO+sWjePwQuHHntq9PecFsc1yzNorh2iv/LxZ9DjinY4cmiydvS8zbLy7RHf15vEob+m1ePUYMWTeKTl35a2nrOymfV1w5qYuyy5L3iZiKRHdH3yjuE4c2nyYrZ8V7RkpNazNZ3xbTPSfLfzZuI0mddhvNNRNIpMTOCJ3ifwK/UbsanHGOLZpjDM9eXJMRP6r7ZsVMcZL5aVpPdabRET+KPrhrm1Wlm2LLbHWl9+2rMzE7+O7Xx4b4q6W2bTZMmLHbJHJFN5rvPSdihK6bUV1EZJrG0UyTTv79vFr14pimkZJw564t9u0mscsddvCThFLUwZonFbFE5rTWto22jps1MV80cMto66XPOW/NXe1NqxvM9d5+8EtfNipNYvlpXm+rvaI3V7XHtee0r9D63X6v3+SF1Wky0z3reMlqWxVpSaYYyd0bTHu69WTPpc0ZKYaUvNNTSlctvGs123mfwKEp2+HnrTtac1usV5o3lZj1VLzm5voRhvyzNp6IjPpcs6jPS1cu98vNSaYYt08PpeGzNmwZZ7a04b3pGri9q8v1q7eEeJQlIz4ZpF4y45pM7RbmjaZVpmxZKTemWlqx3zFomIQmpxzNM2SNPamHJnx8mOa8s227+nvXZ8GTPXVX0unvix2rSOSacs3mJ3naPuKLTEZ8Nsc5K5sc0idptFo2j8V1MlMlebHet6+dZ3hCW0976bVTSma3PFI2nDyb7WjuiE3SlMdYrjrWtY8KxtAq4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZlxY82OaZaRes+EqYMGLT05cOOtInrO3iyAAAAADDn0mn1FotmxVvMd0yzAKVrFaxWsRERG0RHgqAAAAAAAAAAAAAAAAAAALcmOmSIi9YtFZi0b+EwuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWZs2PT4b5s160x0je1rT0iHI5/TzFXLaMHD75Mcd1r5eWZ/Daf1WIst2I4r2++F/wBx8p7ffC/7j5TbKXDtRxXt98L/ALj5T2++F/3Hym2S4dqOK9vvhf8AcfKzab08wXyxXU6G+Kk/vUyc+34bQbZLh14tpeuTHW9LRatoiYmPGFmq1OLSaa+oz25cdI3mSImZqFZRy1/TGsWnk0MzXwmcu0/op7ZfD/zvlfT2Wv8AH+md0OqHK+2Xw/8AO+U9svh/53ynZa/x+4N0OqHK+2Xw/wDO+U9svh/53ynZa/x+4N0OqHK+2Xw/875T2y+H/nfKdlr/AB+4N0OqHK+2Xw/875W3w70pwavU1wZ8E4JvO1bc/NEz5d0bJl0mtjFziboT4D5mgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEL6YTMejGs2nb6n/erzB6d6Y/5Y1f/AA/71eYt48MyCtIib1ie6ZdR6QcLxaGNT6vwjDXDTaK5/Wpm0b7deWbec+TVo5YdRg4Fo9JHEMeo1ePUavBor3tg7OYjHbliYmLd07f/AFkng2gy+sW1eWmCcWjx5I7HDMRXePrTG87z+qWU5MBR6z6PzM8B0O//AKK/o1/Sv7Cy/wAVf1hn9HvsDQ/7Nf0a/pX9h5f4q/rC6Hq4/lqeHBgyaetb6nFS0b1teImPdu9FM04sY6bW8M0ta8Qj/D7abHp6TbFqJyW2vPhG09+/uRuXhE49drdL2+/quCcvNyfW6RO3f073DDqMMvPP5WYlFjouIcG02XVWx6XUY8efsYvXTxSeu1evXznqtzaPFGl5seLDH/jaZbTam8zaZneY69J96R1GMxBtc+JjWcFpoa1nJqebJFq70nFMVtv/AKbd07M3GOE6euXW5dJqKc2nmJvp4pMcsT5T4tR1GEzFe/n+lSgVYnad471B2R6qA8u7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIT0x/yxq/+H/erzF6l6V4cmf0b1lMVea3LW23ui0TP9Il5a3jwzKtZ5bRPlO6Y4rxfQcRyZs88Ltj1WXb9r6zMxE+e23uQw0jocvpHp8nrWaeGRGs1ennBlzRmnbrXbeK7dO6P5MVfSCk6nJfNoufDl0tdNfHGXaZ28d9v6IMSiwBR6x6PfYGh/wBmv6Nf0r+w8v8AFX9YbXAqWx8D0VbxMWjBTeJ8OjB6UUtk4Hn5YmZry2nbyiY3XQ9XH8w1PDgF+G/ZZqZNt+S0W289lg9E4tviOvy6/VZMt7Xilrbxjm82iqQzccw5fWMnqERqdTh7LJk7Wdu6I3iNvdCEHOdHCYiK4LlOZOPYbZJ1FNBFdV2XZ1y9rM7Rttvtt3sFuMc2Ccfq/fpK6bfn8p35u7+iKGY0NOPZblMZeNUnRX02HS2x1vNN4tmm9a8s7/Rie7diy8W7TNxDJ2G3rlYrtz/U2/DqjBY0cI9vPILkBfixXzZa4sVZte87REOvCPUgHl3cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnueVekmOmPjeprjpWleeelY2jvkGsWckWA2gAAmfRXFjy8Yw1y46XjmjpaN/CQJHqCl4i1Zi0RMT0mJBzjlt51xvHTFxTNTFStKxadq1jaI6tAHpcP2w4SANAAAAA6f0Mx0tlz3tSs3rty2mOsfcD5+q9HJceX/9k=" />),
            category: 'common',
            attributes: {
  "contentXjf": {
    "type": "string",
    "default": "\n        Back\n      "
  },
  "contentCCx": {
    "type": "string",
    "default": "Jobs"
  },
  "contentbBZ": {
    "type": "string",
    "default": "Engineering"
  },
  "contenthuI": {
    "type": "string",
    "default": "Back End Developer"
  },
  "contentJSa": {
    "type": "string",
    "default": "Back End Developer"
  },
  "contentshK": {
    "type": "string",
    "default": "Edit"
  },
  "contentsxl": {
    "type": "string",
    "default": "Publish"
  },
  "svgfJX": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgHNi": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgPiV": {
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
            value={ attributes.svgfJX }
            onChange={ ( value ) => {
              setAttributes({ svgfJX: value });
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
            value={ attributes.svgHNi }
            onChange={ ( value ) => {
              setAttributes({ svgHNi: value });
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
            value={ attributes.svgPiV }
            onChange={ ( value ) => {
              setAttributes({ svgPiV: value });
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
            <div>
                <nav className="sm:hidden" aria-label="Back"> <span className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-200">
        
        
      <svg
         className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfJX }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentXjf} default="Back" onChange={ (newtext) =>  {
        setAttributes({ contentXjf: newtext });
      }}
    /></span>

                </nav>
                <nav className="hidden sm:flex" aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-4">
                        <li>
                            <div className="flex"> <span className="text-gray-400 hover:text-gray-500">
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-gray-200"><RichText tagName="span" value={attributes.contentCCx} default="Jobs" onChange={ (newtext) =>  {
        setAttributes({ contentCCx: newtext });
      }}
    /></a></span>

                                
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                
      <svg
         className="flex-shrink-0 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHNi }}
        >
      </svg>
       <span className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200"><RichText tagName="span" value={attributes.contentbBZ} default="Engineering" onChange={ (newtext) =>  {
        setAttributes({ contentbBZ: newtext });
      }}
    /></span>

                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                
      <svg
         className="flex-shrink-0 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPiV }}
        >
      </svg>
       <span aria-current="page" className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200"><RichText tagName="span" value={attributes.contenthuI} default="Back End Developer" onChange={ (newtext) =>  {
        setAttributes({ contenthuI: newtext });
      }}
    /></span>

                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="mt-2 md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                     <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate"><RichText tagName="span" value={attributes.contentJSa} default="Back End Developer" onChange={ (newtext) =>  {
        setAttributes({ contentJSa: newtext });
      }}
    /></h2>

                </div>
                <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                        <RichText tagName="span" value={attributes.contentshK} default="Edit" onChange={ (newtext) => { setAttributes({ contentshK: newtext }); }} /></button>
                    <button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                        <RichText tagName="span" value={attributes.contentsxl} default="Publish" onChange={ (newtext) => { setAttributes({ contentsxl: newtext }); }} /></button>
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
            <div>
                <nav class="sm:hidden" aria-label="Back"> <span class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-200">
        
        
      <svg
         class="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfJX }}
        >
      </svg>
      <RichText.Content value={attributes.contentXjf} /></span>

                </nav>
                <nav class="hidden sm:flex" aria-label="Breadcrumb">
                    <ol role="list" class="flex items-center space-x-4">
                        <li>
                            <div class="flex"> <span class="text-gray-400 hover:text-gray-500">
              <a href="#" class="text-sm font-medium text-gray-400 hover:text-gray-200"><RichText.Content value={attributes.contentCCx} /></a></span>

                                
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center">
                                
      <svg
         class="flex-shrink-0 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHNi }}
        >
      </svg>
       <span class="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200"><RichText.Content value={attributes.contentbBZ} /></span>

                            </div>
                        </li>
                        <li>
                            <div class="flex items-center">
                                
      <svg
         class="flex-shrink-0 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPiV }}
        >
      </svg>
       <span aria-current="page" class="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200"><RichText.Content value={attributes.contenthuI} /></span>

                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div class="mt-2 md:flex md:items-center md:justify-between">
                <div class="flex-1 min-w-0">
                     <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate"><RichText.Content value={attributes.contentJSa} /></h2>

                </div>
                <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                        <RichText.Content value={attributes.contentshK} /></button>
                    <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                        <RichText.Content value={attributes.contentsxl} /></button>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        