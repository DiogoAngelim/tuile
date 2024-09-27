
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl, ToggleControl } = wp.components;


        registerBlockType('wp/simple-on-brand', {
            title: 'simple-on-brand',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAFsBaADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAQFAgMGBwH/xABSEAACAgECBAMEBQYKBggFBQAAAQIDBAURBhIhMRNBUWFxgZEHFCKhsRUyNkKywRYjNDVScnN00fAXVWKSwuEzVIKDk7PS8SQ3daPiQ0VTosP/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QAMxEBAAICAQMCBAUCBQUAAAAAAAECAxESITFBBBMiUXHwFDJhgcEzkSMkNEKxQ1Kh4fH/2gAMAwEAAhEDEQA/AOXAB+gYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==" />),
            category: 'common',
            attributes: {
  "contentuZk": {
    "type": "string",
    "default": "Trusted by developers from over 80 planets"
  },
  "contentpIp": {
    "type": "string",
    "default": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium."
  },
  "contentQxy": {
    "type": "string",
    "default": "Pepperoni"
  },
  "contentvpo": {
    "type": "string",
    "default": "100%"
  },
  "contentiwC": {
    "type": "string",
    "default": "Delivery"
  },
  "contentMxl": {
    "type": "string",
    "default": "24/7"
  },
  "contentFPu": {
    "type": "string",
    "default": "Calories"
  },
  "contenthGq": {
    "type": "string",
    "default": "100k+"
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
        <div className="bg-indigo-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="max-w-4xl mx-auto text-center">
                     <h2 className="text-3xl font-extrabold text-white sm:text-4xl"><RichText tagName="span" value={attributes.contentuZk} default="Trusted by developers from over 80 planets" onChange={ (newtext) =>  {
        setAttributes({ contentuZk: newtext });
      }}
    /></h2>

                    <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
                        <RichText tagName="span" value={attributes.contentpIp} default="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium." onChange={ (newtext) => { setAttributes({ contentpIp: newtext }); }} /></p>
                </div>
                <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                    <div className="flex flex-col"> <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200"><RichText tagName="span" value={attributes.contentQxy} default="Pepperoni" onChange={ (newtext) =>  {
        setAttributes({ contentQxy: newtext });
      }}
    /></dt>

                        <dd className="order-1 text-5xl font-extrabold text-white">
                            <RichText tagName="span" value={attributes.contentvpo} default="100%" onChange={ (newtext) => { setAttributes({ contentvpo: newtext }); }} /></dd>
                    </div>
                    <div className="flex flex-col mt-10 sm:mt-0"> <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200"><RichText tagName="span" value={attributes.contentiwC} default="Delivery" onChange={ (newtext) =>  {
        setAttributes({ contentiwC: newtext });
      }}
    /></dt>

                        <dd className="order-1 text-5xl font-extrabold text-white">
                            <RichText tagName="span" value={attributes.contentMxl} default="24/7" onChange={ (newtext) => { setAttributes({ contentMxl: newtext }); }} /></dd>
                    </div>
                    <div className="flex flex-col mt-10 sm:mt-0"> <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200"><RichText tagName="span" value={attributes.contentFPu} default="Calories" onChange={ (newtext) =>  {
        setAttributes({ contentFPu: newtext });
      }}
    /></dt>

                        <dd className="order-1 text-5xl font-extrabold text-white">
                            <RichText tagName="span" value={attributes.contenthGq} default="100k+" onChange={ (newtext) => { setAttributes({ contenthGq: newtext }); }} /></dd>
                    </div>
                </dl>
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
        <div class="bg-indigo-800">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                <div class="max-w-4xl mx-auto text-center">
                     <h2 class="text-3xl font-extrabold text-white sm:text-4xl"><RichText.Content value={attributes.contentuZk} /></h2>

                    <p class="mt-3 text-xl text-indigo-200 sm:mt-4">
                        <RichText.Content value={attributes.contentpIp} /></p>
                </div>
                <dl class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                    <div class="flex flex-col"> <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200"><RichText.Content value={attributes.contentQxy} /></dt>

                        <dd class="order-1 text-5xl font-extrabold text-white">
                            <RichText.Content value={attributes.contentvpo} /></dd>
                    </div>
                    <div class="flex flex-col mt-10 sm:mt-0"> <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200"><RichText.Content value={attributes.contentiwC} /></dt>

                        <dd class="order-1 text-5xl font-extrabold text-white">
                            <RichText.Content value={attributes.contentMxl} /></dd>
                    </div>
                    <div class="flex flex-col mt-10 sm:mt-0"> <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200"><RichText.Content value={attributes.contentFPu} /></dt>

                        <dd class="order-1 text-5xl font-extrabold text-white">
                            <RichText.Content value={attributes.contenthGq} /></dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        