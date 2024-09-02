
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/centered-page-numbers', {
            title: 'centered page numbers',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAmBaADASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAIBAwUEBgf/xAA7EAACAQQCAAMGAgUMAwAAAAAAAgEDElKRBBEFEzEUISJBUYEyYRZUcaPRBhUjJUJiZKGiscHxNYKy/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAED/8QAHBEBAQEAAgMBAAAAAAAAAAAAABEBAgMSE5FS/9oADAMBAAIRAxEAPwD9MsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAPFzPCuDznVuVQh5WOo6aV/2k8/6OeEfqn7x/4nVBpnb2ccmct+pMcr9HPCP1T94/8R+jnhH6p+8f+J1QX39v636THK/Rzwj9U/eP/E9XC8M4XAv9loQl/V3bS3fXp6z+Z6wTl29nLJvLfpMTYmC6FiYLooGapsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAJsTBdCxMF0UAMMyotzNCx9ZnoycjxX2n22j35Xs/fw+Z3bd/e6/6PT/W3+C/1lg9wIpeZ5S+db5nXxWen2LIPP7dw/O8n2uh5vdtnmRd39Ovqeg+XTi8nnU/EuLR41CypzKndd296e+PSOv+T0zPJSp4pyV5Ndp4nflU7vh7s9Zj5/XosR3yK9anx6LVqzwlNI7Zp+R87wJ51eZpRyXjz+NLdtyodof5NHXviCanP5PM4PK5SValOOPxVRoiZj+lme2n7en3EK+niYmImPSQfOc3kVGqeI1H59XjvxFWaNNX6ifh77mP7Xc+4pufUVfFvPrzSqRxkamst1a0057t+4hX0IPmeXyK6WV35VWaSUKbNFGvCvTnr3yyz+Ls+lWbliY+cdiKyACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGaFWWaYhYjuZmfdBk1cjj0eVT8uukOncTbPpPX1+oF0qtOtTipRqLURvRlnuJ+5Ry/5Nf+B43/ALf/AFJ1AAAA1169HjUpq8iqlKnHqztEQZo1qXIpRVoVUqU29GRomJ+54vGK/C4tCnyeYkVGpP8A0KfNnmOoiI+v+xHgPH8jh1Wd6TVa9Vq1RaUxKo09fDHX06g18M9fkjpgAyUJqVKdGnNSq6oi+rNPUR9yjyeJNxloJ7VNOO3iKU1ImVh/f12BvoV6PIS/j1Uqp312jRMGw4/gkz7d4itSabVr0l3pT8Ex17oiPlMde87AAAAATVq06NOalaotNI9Waeoj7ktyKCTUh61NfKiJftoi2J9O/oBsAiYmImJ7ifmAAAA01+XxuNKxyORSpS3pe8L3s3RMNETExMT74mD5/wARipV8a5C8epx6LrxYV25HvhomZn4Y+XXzn/I6Pgbo/g3FamrKvl9RDT3Pu9xYPeACAauRyaHGWG5FanSWZ6iXaI7NpyPE4mn4rxq6eRUfymWKVZ7e47j4lnqY7+v5AdZHSokPTaGVo7hlnuJgycn+TUP/ADdUlpWVmu8pZ+Hrv+z+XfZ1gAAAirVp0ac1K1RaaR6s09RH3IrcvjUEV63IpU0f8LM8RE/sPJ47x6NbwvkVKqQ7UqLynfynr1/aeKjNFfFeNPLsinPh62TU/D338Xr8+uvsUd1ZhlhlmJiY7iY+Zk5v8nu/5loetvbWd+tt09f5HSIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYq02qtSWos1FiJZYn3x39YCVKdS7y3V7WlZtnvqY9Y/acDkUq/8+c7l8Tua/HSlMJ37qizE3L/lHX5weOnzKtTj0/ZpdaPK5tZmaKkU569Yi75d/wDBYlfWmJZYmImYiZ9I79T5p+XzaHhyV15E1ORS5DU6dKKnmeavXo3XrMevf5fmU1JH5XglVubWqRUV+6vmTHc9d/b3z119PcIV9IARV8zym8m3zOvhv9PuRVmFaGjtZiY+sHi/rb/Bf6zzeFe0+21uvK9n7+Ly+7bv7vf/AEWDrMsNHTREx9JMgEAAASlOnTu8tFS5pZrY67mfWZ/MLTpozsiKsvPbTEdXT+f1AA10eLxuOzNQ49KlLfilEhe9GfZuP5b0/IpWVJlnWyOmmfWZj5gAYqcTjVai1KvHpO6fhZkiZj9kitxOLXeHr8ajUeI6udImevoABh+FxKjI1TjUWZIiFmacTKxHp0bwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmlTp0acU6SKiR6KsdRH2KAAAADVyOLxuUsLyePSrQvviKiQ3Wxx+Nx+KsrxqFKisz3MU0hYmfsAXy2SjaACATVp061OadVFdJ9VaO4n7AATQoUeOlnHpJSXvvpFiINgAAAATVpU61OadamtRJ9VaO4n7Etx6DzUl6NNpqxEP2sTdEenf1AA2REREREdRHpAAAAADTX4nG5MrPI49KrK+kukN1s2rEKsKsRERHURHyAAyAABqr8ahyVheRRp1Vie4h1iegANiKqJCIsKqx1ERHUQZAAAADDotRGR1hlaOpWY7iYNVbi8auipW49KoifhVkiYj9gAG1YhVhViIiI6iI+RkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAladNajVFRYd+rmiPfPXp3JrbicZqTUm49KabNcyykdTP16+oAGU43Hp+X5dCkvl9wnSRFvfr19DE8TjTTWnPGo2K10LZHUT9evqABuAAAwqqi2qsLH0iOgAP/2Q==" />),
            category: 'common',
            attributes: {
  "contentozV": {
    "type": "string",
    "default": "\n      Previous\n    "
  },
  "contentjPT": {
    "type": "string",
    "default": " ... "
  },
  "contentkkr": {
    "type": "string",
    "default": " 10 "
  },
  "contentIeA": {
    "type": "string",
    "default": "\n      Next\n      \n      "
  },
  "svgQYb": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgRsH": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgQYb }
            onChange={ ( value ) => {
              setAttributes({ svgQYb: value });
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
            value={ attributes.svgRsH }
            onChange={ ( value ) => {
              setAttributes({ svgRsH: value });
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
        <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
            <div className="-mt-px w-0 flex-1 flex"> <span className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
      
      
      <svg
         className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQYb }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentozV} default="Previous" onChange={ (newtext) =>  {
        setAttributes({ contentozV: newtext });
      }}
    /></span>

            </div>
            <div className="hidden md:-mt-px md:flex"> <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> 1 </span>

                <span className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium" aria-current="page">2</span> <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> 3 </span>

                    <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                        <RichText tagName="span" value={attributes.contentjPT} default="..." onChange={ (newtext) => { setAttributes({ contentjPT: newtext }); }} /></span> <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> 8 </span>

                            <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">9</span> <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"><RichText tagName="span" value={attributes.contentkkr} default="10" onChange={ (newtext) =>  {
        setAttributes({ contentkkr: newtext });
      }}
    /></span>

            </div>
            <div className="-mt-px w-0 flex-1 flex justify-end"> <span className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"><RichText tagName="span" value={attributes.contentIeA} default="Next" onChange={ (newtext) =>  {
        setAttributes({ contentIeA: newtext });
      }}
    />
      <svg
         className="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRsH }}
        >
      </svg>
      
    </span>

            </div>
        </nav>
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
        <nav class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
            <div class="-mt-px w-0 flex-1 flex"> <span class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
      
      
      <svg
         class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQYb }}
        >
      </svg>
      <RichText.Content value={attributes.contentozV} /></span>

            </div>
            <div class="hidden md:-mt-px md:flex"> <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> 1 </span>

                <span class="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium" aria-current="page">2</span> <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> 3 </span>

                    <span class="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                        <RichText.Content value={attributes.contentjPT} /></span> <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> 8 </span>

                            <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">9</span> <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"><RichText.Content value={attributes.contentkkr} /></span>

            </div>
            <div class="-mt-px w-0 flex-1 flex justify-end"> <span class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"><RichText.Content value={attributes.contentIeA} />
      <svg
         class="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRsH }}
        >
      </svg>
      
    </span>

            </div>
        </nav>
    </div>
</div>
            );
            },
        });
        