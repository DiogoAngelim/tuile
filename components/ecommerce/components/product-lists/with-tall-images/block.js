
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-tall-images', {
            title: 'with tall images',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAEABaADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAQFBgMCAQf/xAA3EAEAAgICAQIFAgUDAwMFAAAAAQIDBAUREiExBhNBUWEUIhUycYGhQpGxIzNSJNHwJTV0grP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABcRAQEBAQAAAAAAAAAAAAAAAAARIQH/2gAMAwEAAhEDEQA/AP04AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFn+MOA19nLr5t60ZcN5x3iMGSerRPUx3Fel5W0WrFq+0x3DGfD2Tma7XNx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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=" />),
            category: 'common',
            attributes: {
  "contentkqK": {
    "type": "string",
    "default": "Products"
  },
  "contentFEZ": {
    "type": "string",
    "default": "Focus Paper Refill"
  },
  "contentdFn": {
    "type": "string",
    "default": "$13"
  },
  "contentldI": {
    "type": "string",
    "default": "3 sizes available"
  },
  "contentxKg": {
    "type": "string",
    "default": "Focus Card Holder"
  },
  "contentbuS": {
    "type": "string",
    "default": "$64"
  },
  "contentwro": {
    "type": "string",
    "default": "Walnut"
  },
  "contentkUD": {
    "type": "string",
    "default": "Focus Carry Case"
  },
  "contentgZW": {
    "type": "string",
    "default": "$32"
  },
  "contentvxp": {
    "type": "string",
    "default": "Heather Gray"
  },
  "imageurlINx": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/category-page-01-image-card-01.jpg'
  },
  "imagealtoRY": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Person using a pen to cross a task off a productivity paper card."
  },
  "imageurlZnj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/category-page-01-image-card-02.jpg'
  },
  "imagealtVBK": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Paper card sitting upright in walnut card holder on desk."
  },
  "imageurlWYX": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/category-page-01-image-card-03.jpg'
  },
  "imagealtIet": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop."
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
                 <h2 id="products-heading" className="sr-only"><RichText tagName="span" value={attributes.contentkqK} default="Products" onChange={ (newtext) =>  {
        setAttributes({ contentkqK: newtext });
      }}
    /></h2>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8"> <span className="group">
        <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlINx: media.url,
            imagealtoRY: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlINx } 
            alt={ attributes.imagealtoRY } 
            onClick={ open } 
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
        </div>
        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
          <h3><RichText tagName="span" value={attributes.contentFEZ} default="Focus Paper Refill" onChange={ (newtext) =>  {
        setAttributes({ contentFEZ: newtext });
      }}
    /></h3>
          <p><RichText tagName="span" value={attributes.contentdFn} default="$13" onChange={ (newtext) =>  {
        setAttributes({ contentdFn: newtext });
      }}
    /></p>
        </div>
        <p className="mt-1 text-sm italic text-gray-500"><RichText tagName="span" value={attributes.contentldI} default="3 sizes available" onChange={ (newtext) =>  {
        setAttributes({ contentldI: newtext });
      }}
    /></p>
      </span>
 <span className="group">
        <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlZnj: media.url,
            imagealtVBK: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlZnj } 
            alt={ attributes.imagealtVBK } 
            onClick={ open } 
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
        </div>
        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
          <h3><RichText tagName="span" value={attributes.contentxKg} default="Focus Card Holder" onChange={ (newtext) =>  {
        setAttributes({ contentxKg: newtext });
      }}
    /></h3>
          <p><RichText tagName="span" value={attributes.contentbuS} default="$64" onChange={ (newtext) =>  {
        setAttributes({ contentbuS: newtext });
      }}
    /></p>
        </div>
        <p className="mt-1 text-sm italic text-gray-500"><RichText tagName="span" value={attributes.contentwro} default="Walnut" onChange={ (newtext) =>  {
        setAttributes({ contentwro: newtext });
      }}
    /></p>
      </span>
 <span className="group">
        <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlWYX: media.url,
            imagealtIet: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlWYX } 
            alt={ attributes.imagealtIet } 
            onClick={ open } 
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
        </div>
        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
          <h3><RichText tagName="span" value={attributes.contentkUD} default="Focus Carry Case" onChange={ (newtext) =>  {
        setAttributes({ contentkUD: newtext });
      }}
    /></h3>
          <p><RichText tagName="span" value={attributes.contentgZW} default="$32" onChange={ (newtext) =>  {
        setAttributes({ contentgZW: newtext });
      }}
    /></p>
        </div>
        <p className="mt-1 text-sm italic text-gray-500"><RichText tagName="span" value={attributes.contentvxp} default="Heather Gray" onChange={ (newtext) =>  {
        setAttributes({ contentvxp: newtext });
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
                 <h2 id="products-heading" class="sr-only"><RichText.Content value={attributes.contentkqK} /></h2>

                <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8"> <span class="group">
        <div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
          
      <img
            src={ attributes.imageurlINx } 
            alt={ attributes.imagealtoRY } 
            class="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
          <h3><RichText.Content value={attributes.contentFEZ} /></h3>
          <p><RichText.Content value={attributes.contentdFn} /></p>
        </div>
        <p class="mt-1 text-sm italic text-gray-500"><RichText.Content value={attributes.contentldI} /></p>
      </span>
 <span class="group">
        <div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
          
      <img
            src={ attributes.imageurlZnj } 
            alt={ attributes.imagealtVBK } 
            class="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
          <h3><RichText.Content value={attributes.contentxKg} /></h3>
          <p><RichText.Content value={attributes.contentbuS} /></p>
        </div>
        <p class="mt-1 text-sm italic text-gray-500"><RichText.Content value={attributes.contentwro} /></p>
      </span>
 <span class="group">
        <div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
          
      <img
            src={ attributes.imageurlWYX } 
            alt={ attributes.imagealtIet } 
            class="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
          <h3><RichText.Content value={attributes.contentkUD} /></h3>
          <p><RichText.Content value={attributes.contentgZW} /></p>
        </div>
        <p class="mt-1 text-sm italic text-gray-500"><RichText.Content value={attributes.contentvxp} /></p>
      </span>

                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        