
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/full-width-with-overlapping-image-tiles', {
            title: 'full width with overlapping image tiles',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAHoBaADASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAcIBAUGAwIB/8QATRABAAIBAwEEBQcJAwkGBwAAAAECAwQFEQYSEyExB0FRYYEUInFzkaGxFTU2QlJ0ssHRFjKTM1NUVXKDwuHwFzQ3RZLSI0NigqOz8f/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAeEQEBAQEAAwEBAQEAAAAAAAAAEgERITFBAlFCcf/aAAwDAQACEQMRAD8Ak4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV7G5ZpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKWEFewkpYQV7CSlhBXsJKAGkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z" />),
            category: 'common',
            attributes: {
  "contentyHa": {
    "type": "string",
    "default": "\n              Final Stock.\n              "
  },
  "contentbjf": {
    "type": "string",
    "default": "\n              Up to 50% off.\n            "
  },
  "contentTTj": {
    "type": "string",
    "default": "Shop the sale"
  },
  "contentfVz": {
    "type": "string",
    "default": " &rarr;"
  },
  "imageurlZry": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-03-category-01.jpg'
  },
  "imagealtNds": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlEdI": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-03-category-02.jpg'
  },
  "imagealtFKF": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlaUr": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-03-favorite-01.jpg'
  },
  "imagealtqSK": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlGUA": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-03-favorite-02.jpg'
  },
  "imagealtgrf": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlxAm": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-03-category-01.jpg'
  },
  "imagealthJk": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlbsu": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-03-category-02.jpg'
  },
  "imagealtJnG": {
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
        <div className="bg-white">
            <div className="pt-32 overflow-hidden sm:pt-14">
                <div className="bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative pt-48 pb-16 sm:pb-24">
                            <div>
                                 <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl"><RichText tagName="span" value={attributes.contentyHa} default="Final Stock." onChange={ (newtext) =>  {
        setAttributes({ contentyHa: newtext });
      }}
    /><br/><RichText tagName="span" value={attributes.contentbjf} default="Up to 50% off." onChange={ (newtext) =>  {
        setAttributes({ contentbjf: newtext });
      }}
    /></h2>

                                <div className="mt-6 text-base"> <span className="font-semibold text-white"><RichText tagName="span" value={attributes.contentTTj} default="Shop the sale" onChange={ (newtext) =>  {
        setAttributes({ contentTTj: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentfVz} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentfVz: newtext });
      }}
    /></span></span>
                                </div>
                            </div>
                            <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0">
                                <div className="ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-8">
                                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div className="flex-shrink-0">
                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlZry: media.url,
            imagealtNds: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlZry } 
            alt={ attributes.imagealtNds } 
            onClick={ open } 
            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
          /> 
        )} 
      />
                                        </div>
                                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlEdI: media.url,
            imagealtFKF: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlEdI } 
            alt={ attributes.imagealtFKF } 
            onClick={ open } 
            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
          /> 
        )} 
      />
                                        </div>
                                    </div>
                                    <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div className="flex-shrink-0">
                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlaUr: media.url,
            imagealtqSK: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlaUr } 
            alt={ attributes.imagealtqSK } 
            onClick={ open } 
            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
          /> 
        )} 
      />
                                        </div>
                                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlGUA: media.url,
            imagealtgrf: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlGUA } 
            alt={ attributes.imagealtgrf } 
            onClick={ open } 
            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
          /> 
        )} 
      />
                                        </div>
                                    </div>
                                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div className="flex-shrink-0">
                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlxAm: media.url,
            imagealthJk: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlxAm } 
            alt={ attributes.imagealthJk } 
            onClick={ open } 
            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
          /> 
        )} 
      />
                                        </div>
                                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlbsu: media.url,
            imagealtJnG: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlbsu } 
            alt={ attributes.imagealtJnG } 
            onClick={ open } 
            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
          /> 
        )} 
      />
                                        </div>
                                    </div>
                                </div>
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
        <div class="bg-white">
            <div class="pt-32 overflow-hidden sm:pt-14">
                <div class="bg-gray-800">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="relative pt-48 pb-16 sm:pb-24">
                            <div>
                                 <h2 id="sale-heading" class="text-4xl font-extrabold tracking-tight text-white md:text-5xl"><RichText.Content value={attributes.contentyHa} /><br/><RichText.Content value={attributes.contentbjf} /></h2>

                                <div class="mt-6 text-base"> <span class="font-semibold text-white"><RichText.Content value={attributes.contentTTj} /><span aria-hidden="true"><RichText.Content value={attributes.contentfVz} /></span></span>
                                </div>
                            </div>
                            <div class="absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0">
                                <div class="ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-8">
                                    <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div class="flex-shrink-0">
                                            
      <img
            src={ attributes.imageurlZry } 
            alt={ attributes.imagealtNds } 
            class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
          />
                                        </div>
                                        <div class="mt-6 flex-shrink-0 sm:mt-0">
                                            
      <img
            src={ attributes.imageurlEdI } 
            alt={ attributes.imagealtFKF } 
            class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
          />
                                        </div>
                                    </div>
                                    <div class="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div class="flex-shrink-0">
                                            
      <img
            src={ attributes.imageurlaUr } 
            alt={ attributes.imagealtqSK } 
            class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
          />
                                        </div>
                                        <div class="mt-6 flex-shrink-0 sm:mt-0">
                                            
      <img
            src={ attributes.imageurlGUA } 
            alt={ attributes.imagealtgrf } 
            class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
          />
                                        </div>
                                    </div>
                                    <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div class="flex-shrink-0">
                                            
      <img
            src={ attributes.imageurlxAm } 
            alt={ attributes.imagealthJk } 
            class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
          />
                                        </div>
                                        <div class="mt-6 flex-shrink-0 sm:mt-0">
                                            
      <img
            src={ attributes.imageurlbsu } 
            alt={ attributes.imagealtJnG } 
            class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
          />
                                        </div>
                                    </div>
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
        });
        