
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple', {
            title: 'simple',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAEEBaADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAQFBgIDAQf/xAA2EAEAAgIBAwIEBQQBAwQDAAAAAQIDBBEFEiETMQYUQVEiYXGBkRUjMkKhgrHBFiQ00ZLC4f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A/TgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV2Pq05s+THg6duZK48s4rZI9OK8xPE+9+eP2S429admdaNjDOeI5nF3x3fx7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" />),
            category: 'common',
            attributes: {
  "contentOuz": {
    "type": "string",
    "default": "Products"
  },
  "contentOMg": {
    "type": "string",
    "default": "Earthen Bottle"
  },
  "contentYVs": {
    "type": "string",
    "default": "$48"
  },
  "contentpiF": {
    "type": "string",
    "default": "Nomad Tumbler"
  },
  "contentkFB": {
    "type": "string",
    "default": "$35"
  },
  "contentqKA": {
    "type": "string",
    "default": "Focus Paper Refill"
  },
  "contentJly": {
    "type": "string",
    "default": "$89"
  },
  "contentNmE": {
    "type": "string",
    "default": "Machined Mechanical Pencil"
  },
  "contentqdA": {
    "type": "string",
    "default": "$35"
  },
  "imageurlwXS": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/category-page-04-image-card-01.jpg'
  },
  "imagealtrxG": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Tall slender porcelain bottle with natural clay textured body and cork stopper."
  },
  "imageurlOpG": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/category-page-04-image-card-02.jpg'
  },
  "imagealtidq": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Olive drab green insulated bottle with flared screw lid and flat top."
  },
  "imageurlfQe": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/category-page-04-image-card-03.jpg'
  },
  "imagealtaAQ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Person using a pen to cross a task off a productivity paper card."
  },
  "imageurlxFd": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/category-page-04-image-card-04.jpg'
  },
  "imagealtWfy": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Hand holding black machined steel mechanical pencil with brass tip and top."
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
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                 <h2 className="sr-only"><RichText tagName="span" value={attributes.contentOuz} default="Products" onChange={ (newtext) =>  {
        setAttributes({ contentOuz: newtext });
      }}
    /></h2>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> <span className="group">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlwXS: media.url,
            imagealtrxG: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlwXS } 
            alt={ attributes.imagealtrxG } 
            onClick={ open } 
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
        </div>
        <h3 className="mt-4 text-sm text-gray-700"><RichText tagName="span" value={attributes.contentOMg} default="Earthen Bottle" onChange={ (newtext) =>  {
        setAttributes({ contentOMg: newtext });
      }}
    /></h3>
        <p className="mt-1 text-lg font-medium text-gray-900"><RichText tagName="span" value={attributes.contentYVs} default="$48" onChange={ (newtext) =>  {
        setAttributes({ contentYVs: newtext });
      }}
    /></p>
      </span>
 <span className="group">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlOpG: media.url,
            imagealtidq: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlOpG } 
            alt={ attributes.imagealtidq } 
            onClick={ open } 
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
        </div>
        <h3 className="mt-4 text-sm text-gray-700"><RichText tagName="span" value={attributes.contentpiF} default="Nomad Tumbler" onChange={ (newtext) =>  {
        setAttributes({ contentpiF: newtext });
      }}
    /></h3>
        <p className="mt-1 text-lg font-medium text-gray-900"><RichText tagName="span" value={attributes.contentkFB} default="$35" onChange={ (newtext) =>  {
        setAttributes({ contentkFB: newtext });
      }}
    /></p>
      </span>
 <span className="group">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlfQe: media.url,
            imagealtaAQ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlfQe } 
            alt={ attributes.imagealtaAQ } 
            onClick={ open } 
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
        </div>
        <h3 className="mt-4 text-sm text-gray-700"><RichText tagName="span" value={attributes.contentqKA} default="Focus Paper Refill" onChange={ (newtext) =>  {
        setAttributes({ contentqKA: newtext });
      }}
    /></h3>
        <p className="mt-1 text-lg font-medium text-gray-900"><RichText tagName="span" value={attributes.contentJly} default="$89" onChange={ (newtext) =>  {
        setAttributes({ contentJly: newtext });
      }}
    /></p>
      </span>
 <span className="group">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlxFd: media.url,
            imagealtWfy: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlxFd } 
            alt={ attributes.imagealtWfy } 
            onClick={ open } 
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
        </div>
        <h3 className="mt-4 text-sm text-gray-700"><RichText tagName="span" value={attributes.contentNmE} default="Machined Mechanical Pencil" onChange={ (newtext) =>  {
        setAttributes({ contentNmE: newtext });
      }}
    /></h3>
        <p className="mt-1 text-lg font-medium text-gray-900"><RichText tagName="span" value={attributes.contentqdA} default="$35" onChange={ (newtext) =>  {
        setAttributes({ contentqdA: newtext });
      }}
    /></p>
      </span>

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
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                 <h2 class="sr-only"><RichText.Content value={attributes.contentOuz} /></h2>

                <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> <span class="group">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          
      <img
            src={ attributes.imageurlwXS } 
            alt={ attributes.imagealtrxG } 
            class="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-4 text-sm text-gray-700"><RichText.Content value={attributes.contentOMg} /></h3>
        <p class="mt-1 text-lg font-medium text-gray-900"><RichText.Content value={attributes.contentYVs} /></p>
      </span>
 <span class="group">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          
      <img
            src={ attributes.imageurlOpG } 
            alt={ attributes.imagealtidq } 
            class="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-4 text-sm text-gray-700"><RichText.Content value={attributes.contentpiF} /></h3>
        <p class="mt-1 text-lg font-medium text-gray-900"><RichText.Content value={attributes.contentkFB} /></p>
      </span>
 <span class="group">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          
      <img
            src={ attributes.imageurlfQe } 
            alt={ attributes.imagealtaAQ } 
            class="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-4 text-sm text-gray-700"><RichText.Content value={attributes.contentqKA} /></h3>
        <p class="mt-1 text-lg font-medium text-gray-900"><RichText.Content value={attributes.contentJly} /></p>
      </span>
 <span class="group">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          
      <img
            src={ attributes.imageurlxFd } 
            alt={ attributes.imagealtWfy } 
            class="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-4 text-sm text-gray-700"><RichText.Content value={attributes.contentNmE} /></h3>
        <p class="mt-1 text-lg font-medium text-gray-900"><RichText.Content value={attributes.contentqdA} /></p>
      </span>

                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        