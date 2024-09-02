
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-with-chevrons', {
            title: 'simple with chevrons',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAUBaADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAMFAgQGAQf/xAAuEAACAgIBAwIFBAEFAAAAAAAAAQIDBBESBSExE0EiUWFxgRQykaEGFUJS0fH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/APo2bmVYdLsse3/tivMmVvT+tOy515fGKk/hkuyX0ZD/AJJWo3U2bk3NNNN9lrXj+SsyMS/F4+vW4c1uO2u5rMyJXZgwprVNUa4uTjFaXJ7ZmZUIp5Fdd8KZtxlNfC2uz+m/mSml1CuzJUcWFfwy+KVrXaCXy+oG6DyK4xUdt6Wtt7bPQBWS63RB3OWNlelRY67LVBOMWn38PevwWZQYvS78p50Mi++rHsy5ydSgo+otrvvW9MuC6WVju1VK+p2Psoc1t9t+Pt3Mf1lEqrZ0W1XOqLbjGxfw37fkqv8AT5TfV5V0cbp/DTNx1tcNdn/RqSq5wVmPhW4sKMK2NznXw5Nx7L6903sRF+syhU02X210u2KajKxe68J+/wCDO7Ioo4+vdXXy/bzmlv8Ak5ezFulCmycLpVWYNcIOvHVuvh7x7+H77Nt0fpr95uDflwliQrr1XzcWt7i9eG+3cQXLz8VZ6wndFXuPLjv+vv8AQkqyaLpyhTfXZKH7oxmm19yp/T+l1bHteFYq5YfpJRXLhLa7OXt27bIei02U51cIY9noxrknO7H9OdfftHku0tiDoQARUWTfHGpds4ycV54revqZwnGyCnCSlGS2mvcjy7JVY8pV0u2XhQS87+f0Ium4ssTHcZy3KT5OK8R+iA2wABp5XUY4+VHGWPfdZKDs1Uk9Levdo9p6nh248bndGqL2tWtQaa8pp/I083Gybuu1yotsoisZp2xgpL9y+Hv2/wDCOXSqqs/p1XpSvqh607J2R5bk9d5exUWzycdWxqd9Ssl3UOa2/wAGFeXB+vK3hVCmfFydkWvC7v5efDKDJxbOGZirCtll3ZPOm9V7io7TT5e2l7HmVRdesqVKlKNfUeVihBTeuK78ff7CFdJ+oodHrq6v0vPqclx/kgv6lh0U13TyK3XZJRjKMk03/wBFHHEsjjRt9DIuoWYrZ1SoUHJa1tQXtvXYnyqIW4Dux+m2VxjlQsdbh8U0mttR9t/L6CC3zc6nCwpZdnKdUdfs097aS1/IedQp4sYtzWVv05R8dlvv+DW6xCV/R+NFU23KtqCi9pck/H2NN4ORi9cxIUwcsLnOyOltVNxe19FvuvuBdRyKJ3SpjdXK2PmCknJfgxjl4s+XHJplxXKWpp6XzOc6ZhXwycWu6GQrqbpSnJY6UffbdnumSVdPnD/H8d/o5OyN6svr4fHZBTfbXv212EHRU3VXw502wsh/yhJNf0ZlV0mtvOzcivHnj49nBQjOHDk0nt8fb2+5akUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEORiUZXH161Pg9x232GRiUZXH161Pg9x232AAmAAAAAAAAAAAjvpqyKnVfCM65a3GXh6ewAM0lFJRSSXZJex6AAAAAAAAAAAAAAACOjHpxq/TorjXHe2orW38wAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==" />),
            category: 'common',
            attributes: {
  "contentHaQ": {
    "type": "string",
    "default": "Home"
  },
  "contentfMt": {
    "type": "string",
    "default": "Projects"
  },
  "contentpHO": {
    "type": "string",
    "default": "Project Nero"
  },
  "svgUCC": {
    "type": "string",
    "default": "<path d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\"/>"
  },
  "svgAAC": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgIFG": {
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
            value={ attributes.svgUCC }
            onChange={ ( value ) => {
              setAttributes({ svgUCC: value });
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
            value={ attributes.svgAAC }
            onChange={ ( value ) => {
              setAttributes({ svgAAC: value });
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
            value={ attributes.svgIFG }
            onChange={ ( value ) => {
              setAttributes({ svgIFG: value });
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
        <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
                <li>
                    <div> <span className="text-gray-400 hover:text-gray-500">
          
          
      <svg
         className="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUCC }}
        >
      </svg>
      
          <span className="sr-only"><RichText tagName="span" value={attributes.contentHaQ} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentHaQ: newtext });
      }}
    /></span>
</span>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        
      <svg
         className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAAC }}
        >
      </svg>
       <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"><RichText tagName="span" value={attributes.contentfMt} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentfMt: newtext });
      }}
    /></span>

                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        
      <svg
         className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIFG }}
        >
      </svg>
       <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page"><RichText tagName="span" value={attributes.contentpHO} default="Project Nero" onChange={ (newtext) =>  {
        setAttributes({ contentpHO: newtext });
      }}
    /></span>

                    </div>
                </li>
            </ol>
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
        <nav class="flex" aria-label="Breadcrumb">
            <ol role="list" class="flex items-center space-x-4">
                <li>
                    <div> <span class="text-gray-400 hover:text-gray-500">
          
          
      <svg
         class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUCC }}
        >
      </svg>
      
          <span class="sr-only"><RichText.Content value={attributes.contentHaQ} /></span>
</span>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        
      <svg
         class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAAC }}
        >
      </svg>
       <span class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"><RichText.Content value={attributes.contentfMt} /></span>

                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        
      <svg
         class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIFG }}
        >
      </svg>
       <span class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page"><RichText.Content value={attributes.contentpHO} /></span>

                    </div>
                </li>
            </ol>
        </nav>
    </div>
</div>
            );
            },
        });
        