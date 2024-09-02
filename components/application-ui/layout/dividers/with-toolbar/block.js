
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-toolbar', {
            title: 'with toolbar',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAmBaADASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAIDBAUBBgf/xAA0EAEAAQQBAgQEBAUEAwAAAAAAAwECElOiBBETFFKRBSExkjNBYXEiMnKBsRVCUaEjweH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AP04AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAES1rSlKUr2rdXt3PBi/OO2v61p3eS/Wz+qjICPBi1WfbQ8GLVZ9tFgI8GLVZ9tDwYtVn20YOp6zwL4qWxVltvvwuutr3xq2gR4MWqz7aItijrJfSsdnanbt8mZFn4sn9v8AeDFqs+2h4MWqz7aLRNLbDFdLJXtbbTvUDwYtVn20PBi1WfbRzq/EOqjt8eSGLwe1K3WUv/AI7KV+laulbJZddW226lbqUpWtO/zpRR54MWqz7aJviipHdWkdlK0pX/AG0ZUyfh3ftVBFkMVbLf/HZ9PTRXgxarPtoqz+S39qPQR4MWqz7aHgxarPto0es+J3dP1fl4ulvmvx71xr/8qxV+LdVbStbvhc1KU+da1rX5cVyjp+DFqs+2h4MWqz7aMXQ9Vb1nTWzW21t7/KtK179qthBguij8aOnh2dq9/wAqMngxarPto8v/AB4/2qyAjwYtVn20PBi1WfbRbj9b8btiyjhhupNbd2r4lPl/1VR1fBi1WfbQ8GLVZ9tHP6H4xH1V8cN0UlJbvrjT+Gn/AH3dNBHgxflHbT9aU7EVa1trSte9ba9u60RfW/8AqqCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwGG+26l1ne/vTKny7MzHL9bP6qMgDk/FfiV0d3lOk73T3fKtaf7f0p+rrMFnSdPZ1F3UWx08W763d61INf4T0N3Rw1rJdWsknzup3+VG+ACLPxZP7f4Wiz8WT+3+AW1viNlb/h89ttO9cKtkBw5bZJLLr4Yb5beo6e2y2tlO9KXU/5bfQ9rviM9ba0utjjsjrWn0yp9WS/4XBdfddZfLFS6ve62O/Glf7NmCGPp4qRQ20ttp+S6jImT8O79qqTJ+Hd+1UV7Z/Jb+1Hryz+S39qPQfP/ABW62H4xSSWs1llbKdroq9rv7NHqOskrJWnT9V1VYq0+kl/z/wCn131+rX6boun6W++6GOltb696/p+lP0a1Ma3wGlafDLe9K073VrR0QZVjv/Hj/arIx3/jx/tVkAfPy9vMfFaV9P8A7o+gc/qfg/TdTPdNfdJbdd9aW1p2/wALBrdP2/12OtPzgp/h2Wj0fwrp+jm8WO6S67t2/irT5e1G8UGGy26t1/a/tTL6dmZEX1v/AKqoGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rARjJs4mMmzisBGMmziYybOKwEYybOJjJs4rAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARJbW635V7VpXvRhr1sdte11t3en17Ao889F6b/ah56L03+1AA89F6b/ah56L03+1AA89F6b/aiadZHS+66tt/a7t2+QArz0Xpv9qHnovTf7UADz0Xpv8Aah56L03+1AA89F6b/ajy7rYrra20tv71p2+lAAt66KltKY3/ACp/xR756L03+1AA89F6b/ah56L03+1AA89F6b/ah56L03+1ABN3WR1ksuxv7W9/yorz0Xpv9qAIeei9N/tQ89F6b/agCnnovTf7UPPRem/2oAPadbZdXG227vX6d2eO3G35171r86gCgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z" />),
            category: 'common',
            attributes: {
  "contentHQP": {
    "type": "string",
    "default": "Edit"
  },
  "contentOJB": {
    "type": "string",
    "default": "Attachment"
  },
  "contentLiA": {
    "type": "string",
    "default": "Annotate"
  },
  "contentisu": {
    "type": "string",
    "default": "Delete"
  },
  "svgPrS": {
    "type": "string",
    "default": "<path d=\"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z\"/>"
  },
  "svgZTQ": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z\" clip-rule=\"evenodd\"/>"
  },
  "svgyHW": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z\" clip-rule=\"evenodd\"/>"
  },
  "svgQlO": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgPrS }
            onChange={ ( value ) => {
              setAttributes({ svgPrS: value });
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
            value={ attributes.svgZTQ }
            onChange={ ( value ) => {
              setAttributes({ svgZTQ: value });
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
            value={ attributes.svgyHW }
            onChange={ ( value ) => {
              setAttributes({ svgyHW: value });
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
            value={ attributes.svgQlO }
            onChange={ ( value ) => {
              setAttributes({ svgQlO: value });
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
            <div className="relative flex justify-center"> <span className="relative z-0 inline-flex shadow-sm rounded-md -space-x-px">
      <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        <span className="sr-only"><RichText tagName="span" value={attributes.contentHQP} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentHQP: newtext });
      }}
    /></span>

                
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPrS }}
        >
      </svg>
      
                </button>
                <button type="button" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentOJB} default="Attachment" onChange={ (newtext) =>  {
        setAttributes({ contentOJB: newtext });
      }}
    /></span>

                    
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZTQ }}
        >
      </svg>
      
                </button>
                <button type="button" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentLiA} default="Annotate" onChange={ (newtext) =>  {
        setAttributes({ contentLiA: newtext });
      }}
    /></span>

                    
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyHW }}
        >
      </svg>
      
                </button>
                <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentisu} default="Delete" onChange={ (newtext) =>  {
        setAttributes({ contentisu: newtext });
      }}
    /></span>

                    
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQlO }}
        >
      </svg>
      
                </button>
                </span>
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
            <div class="relative flex justify-center"> <span class="relative z-0 inline-flex shadow-sm rounded-md -space-x-px">
      <button type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        <span class="sr-only"><RichText.Content value={attributes.contentHQP} /></span>

                
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPrS }}
        >
      </svg>
      
                </button>
                <button type="button" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentOJB} /></span>

                    
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZTQ }}
        >
      </svg>
      
                </button>
                <button type="button" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentLiA} /></span>

                    
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyHW }}
        >
      </svg>
      
                </button>
                <button type="button" class="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentisu} /></span>

                    
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQlO }}
        >
      </svg>
      
                </button>
                </span>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        