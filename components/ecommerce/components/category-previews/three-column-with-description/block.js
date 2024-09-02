
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/three-column-with-description', {
            title: 'three column with description',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAGIBaADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAQFAgMGBwH/xABIEAACAgIBAgQFAgQEAgQMBwAAAQIDBBEFEiETMUFRBhQiYXEygRVCkaEHI7HBM1IWJOHwFyU0NVNjdIKSstHxNkRicnWTov/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAQEBAQEAAAAAAAAAAAAAAAARARIh/9oADAMBAAIRAxEAPwD04AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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" />),
            category: 'common',
            attributes: {
  "contentYfO": {
    "type": "string",
    "default": "Shop by Collection"
  },
  "contentbTN": {
    "type": "string",
    "default": "Each season, we collaborate with world-class designers to create a collection inspired by the natural world."
  },
  "contentZwM": {
    "type": "string",
    "default": "Handcrafted Collection"
  },
  "contentXOU": {
    "type": "string",
    "default": "Keep your phone, keys, and wallet together, so you can lose everything at once."
  },
  "contenteHm": {
    "type": "string",
    "default": "Organized Desk Collection"
  },
  "contentJYy": {
    "type": "string",
    "default": "The rest of the house will still be a mess, but your desk will look great."
  },
  "contentvVu": {
    "type": "string",
    "default": "Focus Collection"
  },
  "contentQKe": {
    "type": "string",
    "default": "Be more productive than enterprise project managers with a single piece of paper."
  },
  "imageurlZWl": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-01-collection-01.jpg'
  },
  "imagealtiRU": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Brown leather key ring with brass metal loops and rivets on wood table."
  },
  "imageurlcmg": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-01-collection-02.jpg'
  },
  "imagealtxjc": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Natural leather mouse pad on white desk next to porcelain mug and keyboard."
  },
  "imageurlkgm": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-01-collection-03.jpg'
  },
  "imagealtkvV": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad."
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
            <div className="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                 <h2 className="text-2xl font-extrabold tracking-tight text-gray-900"><RichText tagName="span" value={attributes.contentYfO} default="Shop by Collection" onChange={ (newtext) =>  {
        setAttributes({ contentYfO: newtext });
      }}
    /></h2>

                <p className="mt-4 text-base text-gray-500">
                    <RichText tagName="span" value={attributes.contentbTN} default="Each season, we collaborate with world-class designers to create a collection inspired by the natural world." onChange={ (newtext) => { setAttributes({ contentbTN: newtext }); }} /></p>
                <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8"> <span className="group block">
        <div aria-hidden="true" className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlZWl: media.url,
            imagealtiRU: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlZWl } 
            alt={ attributes.imagealtiRU } 
            onClick={ open } 
            className="w-full h-full object-center object-cover"
          /> 
        )} 
      />
        </div>
        <h3 className="mt-4 text-base font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentZwM} default="Handcrafted Collection" onChange={ (newtext) =>  {
        setAttributes({ contentZwM: newtext });
      }}
    /></h3>
        <p className="mt-2 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentXOU} default="Keep your phone, keys, and wallet together, so you can lose everything at once." onChange={ (newtext) =>  {
        setAttributes({ contentXOU: newtext });
      }}
    /></p>
      </span>
 <span className="group block">
        <div aria-hidden="true" className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlcmg: media.url,
            imagealtxjc: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlcmg } 
            alt={ attributes.imagealtxjc } 
            onClick={ open } 
            className="w-full h-full object-center object-cover"
          /> 
        )} 
      />
        </div>
        <h3 className="mt-4 text-base font-semibold text-gray-900"><RichText tagName="span" value={attributes.contenteHm} default="Organized Desk Collection" onChange={ (newtext) =>  {
        setAttributes({ contenteHm: newtext });
      }}
    /></h3>
        <p className="mt-2 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentJYy} default="The rest of the house will still be a mess, but your desk will look great." onChange={ (newtext) =>  {
        setAttributes({ contentJYy: newtext });
      }}
    /></p>
      </span>
 <span className="group block">
        <div aria-hidden="true" className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlkgm: media.url,
            imagealtkvV: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlkgm } 
            alt={ attributes.imagealtkvV } 
            onClick={ open } 
            className="w-full h-full object-center object-cover"
          /> 
        )} 
      />
        </div>
        <h3 className="mt-4 text-base font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentvVu} default="Focus Collection" onChange={ (newtext) =>  {
        setAttributes({ contentvVu: newtext });
      }}
    /></h3>
        <p className="mt-2 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentQKe} default="Be more productive than enterprise project managers with a single piece of paper." onChange={ (newtext) =>  {
        setAttributes({ contentQKe: newtext });
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
            <div class="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                 <h2 class="text-2xl font-extrabold tracking-tight text-gray-900"><RichText.Content value={attributes.contentYfO} /></h2>

                <p class="mt-4 text-base text-gray-500">
                    <RichText.Content value={attributes.contentbTN} /></p>
                <div class="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8"> <span class="group block">
        <div aria-hidden="true" class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
          
      <img
            src={ attributes.imageurlZWl } 
            alt={ attributes.imagealtiRU } 
            class="w-full h-full object-center object-cover"
          />
        </div>
        <h3 class="mt-4 text-base font-semibold text-gray-900"><RichText.Content value={attributes.contentZwM} /></h3>
        <p class="mt-2 text-sm text-gray-500"><RichText.Content value={attributes.contentXOU} /></p>
      </span>
 <span class="group block">
        <div aria-hidden="true" class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
          
      <img
            src={ attributes.imageurlcmg } 
            alt={ attributes.imagealtxjc } 
            class="w-full h-full object-center object-cover"
          />
        </div>
        <h3 class="mt-4 text-base font-semibold text-gray-900"><RichText.Content value={attributes.contenteHm} /></h3>
        <p class="mt-2 text-sm text-gray-500"><RichText.Content value={attributes.contentJYy} /></p>
      </span>
 <span class="group block">
        <div aria-hidden="true" class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
          
      <img
            src={ attributes.imageurlkgm } 
            alt={ attributes.imagealtkvV } 
            class="w-full h-full object-center object-cover"
          />
        </div>
        <h3 class="mt-4 text-base font-semibold text-gray-900"><RichText.Content value={attributes.contentvVu} /></h3>
        <p class="mt-2 text-sm text-gray-500"><RichText.Content value={attributes.contentQKe} /></p>
      </span>

                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        