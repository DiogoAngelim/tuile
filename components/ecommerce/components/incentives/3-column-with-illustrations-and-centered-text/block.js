
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/3-column-with-illustrations-and-centered-text', {
            title: '3 column with illustrations and centered text',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAGwBaADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAMEAQIFBgf/xABCEAACAgIABAQEAwUGBQMEAwAAAQIDBBEFEiExE0FRYRQicYEGMpEVI0KhwRZSYpKx4SQzU9HwQ6PSJSZV8WVysv/EABoBAQEAAwEBAAAAAAAAAAAAAAABAgMEBQb/xAAjEQEAAgMBAAEDBQAAAAAAAAAAARECAyEEEiIxwUFCkaHR/9oADAMBAAIRAxEAPwD6WACoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==" />),
            category: 'common',
            attributes: {
  "contenttkl": {
    "type": "string",
    "default": "Free Shipping"
  },
  "contentJCj": {
    "type": "string",
    "default": "It&#039;s not actually free we just price it into the products. Someone&#039;s paying for it, and it&#039;s not us."
  },
  "contenthxv": {
    "type": "string",
    "default": "24/7 Customer Support"
  },
  "contentacn": {
    "type": "string",
    "default": "Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate."
  },
  "contentFqy": {
    "type": "string",
    "default": "Fast Shopping Cart"
  },
  "contentXRU": {
    "type": "string",
    "default": "Look how fast that cart is going. What does this mean for the actual experience? I don&#039;t know."
  },
  "imageurlcgv": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce/icons/icon-delivery-light.svg'
  },
  "imagealtQWx": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurloXl": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce/icons/icon-chat-light.svg'
  },
  "imagealtccs": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlYbn": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce/icons/icon-fast-checkout-light.svg'
  },
  "imagealtjVz": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
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
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3">
                    <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                        <div className="sm:flex-shrink-0">
                            <div className="flow-root">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlcgv: media.url,
            imagealtQWx: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlcgv } 
            alt={ attributes.imagealtQWx } 
            onClick={ open } 
            className="w-28 h-24 mx-auto"
          /> 
        )} 
      />
                            </div>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                             <h3 className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contenttkl} default="Free Shipping" onChange={ (newtext) =>  {
        setAttributes({ contenttkl: newtext });
      }}
    /></h3>

                            <p className="mt-2 text-sm text-gray-500">
                                <RichText tagName="span" value={attributes.contentJCj} default="It&#039;s not actually free we just price it into the products. Someone&#039;s paying for it, and it&#039;s not us." onChange={ (newtext) => { setAttributes({ contentJCj: newtext }); }} /></p>
                        </div>
                    </div>
                    <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                        <div className="sm:flex-shrink-0">
                            <div className="flow-root">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurloXl: media.url,
            imagealtccs: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurloXl } 
            alt={ attributes.imagealtccs } 
            onClick={ open } 
            className="w-28 h-24 mx-auto"
          /> 
        )} 
      />
                            </div>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                             <h3 className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contenthxv} default="24/7 Customer Support" onChange={ (newtext) =>  {
        setAttributes({ contenthxv: newtext });
      }}
    /></h3>

                            <p className="mt-2 text-sm text-gray-500">
                                <RichText tagName="span" value={attributes.contentacn} default="Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate." onChange={ (newtext) => { setAttributes({ contentacn: newtext }); }} /></p>
                        </div>
                    </div>
                    <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                        <div className="sm:flex-shrink-0">
                            <div className="flow-root">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlYbn: media.url,
            imagealtjVz: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlYbn } 
            alt={ attributes.imagealtjVz } 
            onClick={ open } 
            className="w-28 h-24 mx-auto"
          /> 
        )} 
      />
                            </div>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                             <h3 className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentFqy} default="Fast Shopping Cart" onChange={ (newtext) =>  {
        setAttributes({ contentFqy: newtext });
      }}
    /></h3>

                            <p className="mt-2 text-sm text-gray-500">
                                <RichText tagName="span" value={attributes.contentXRU} default="Look how fast that cart is going. What does this mean for the actual experience? I don&#039;t know." onChange={ (newtext) => { setAttributes({ contentXRU: newtext }); }} /></p>
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
        <div class="bg-gray-50">
            <div class="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
                <div class="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3">
                    <div class="text-center sm:flex sm:text-left lg:block lg:text-center">
                        <div class="sm:flex-shrink-0">
                            <div class="flow-root">
                                
      <img
            src={ attributes.imageurlcgv } 
            alt={ attributes.imagealtQWx } 
            class="w-28 h-24 mx-auto"
          />
                            </div>
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                             <h3 class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contenttkl} /></h3>

                            <p class="mt-2 text-sm text-gray-500">
                                <RichText.Content value={attributes.contentJCj} /></p>
                        </div>
                    </div>
                    <div class="text-center sm:flex sm:text-left lg:block lg:text-center">
                        <div class="sm:flex-shrink-0">
                            <div class="flow-root">
                                
      <img
            src={ attributes.imageurloXl } 
            alt={ attributes.imagealtccs } 
            class="w-28 h-24 mx-auto"
          />
                            </div>
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                             <h3 class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contenthxv} /></h3>

                            <p class="mt-2 text-sm text-gray-500">
                                <RichText.Content value={attributes.contentacn} /></p>
                        </div>
                    </div>
                    <div class="text-center sm:flex sm:text-left lg:block lg:text-center">
                        <div class="sm:flex-shrink-0">
                            <div class="flow-root">
                                
      <img
            src={ attributes.imageurlYbn } 
            alt={ attributes.imagealtjVz } 
            class="w-28 h-24 mx-auto"
          />
                            </div>
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                             <h3 class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentFqy} /></h3>

                            <p class="mt-2 text-sm text-gray-500">
                                <RichText.Content value={attributes.contentXRU} /></p>
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
        