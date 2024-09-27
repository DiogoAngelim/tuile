
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl, ToggleControl } = wp.components;


        registerBlockType('wp/simple-with-heading-on-brand', {
            title: 'simple-with-heading-on-brand',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAEcBaADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAQFBgMCAQf/xABPEAACAgIBAwEEBgUGCwYEBwAAAQIDBBEFBhIhMRNBUWEUInGBkaEVMrHB0QcjUmLh8BYzNTZCU3JzssLxJDRDVZKiF0aCk1RkdHWDhMP/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QALhEBAAICAgIBAQgCAQUAAAAAAAECAxESIQQxQRMUIlFhcYGhwTKR4SNCUrHR/9oADAMBAAIRAxEAPwDPgA/UsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMePzZRUo4eQ4tbTVUtP8j7+js//wDBZP8A9qX8DZ8H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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z" />),
            category: 'common',
            attributes: {
  "contentpRw": {
    "type": "string",
    "default": "The world's most innovative companies use Workflow"
  },
  "imageurlJKx": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/tuple-logo-indigo-300.svg'
  },
  "imagealtuAr": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Tuple"
  },
  "imageurlJDZ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/mirage-logo-indigo-300.svg'
  },
  "imagealtuXw": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Mirage"
  },
  "imageurlfcO": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/statickit-logo-indigo-300.svg'
  },
  "imagealtXUM": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "StaticKit"
  },
  "imageurlEWJ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/transistor-logo-indigo-300.svg'
  },
  "imagealtrYi": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Transistor"
  },
  "imageurltvs": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workcation-logo-indigo-300.svg'
  },
  "imagealtkcC": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workcation"
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
        <div className="bg-indigo-700">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                 <h2 className="text-3xl font-extrabold text-white"><RichText tagName="span" value={attributes.contentpRw} default="The world's most innovative companies use Workflow" onChange={ (newtext) =>  {
        setAttributes({ contentpRw: newtext });
      }}
    /></h2>

                <div className="flow-root mt-8 lg:mt-10">
                    <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlJKx: media.url,
            imagealtuAr: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlJKx } 
            alt={ attributes.imagealtuAr } 
            onClick={ open } 
            className="h-12"
          /> 
        )} 
      />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlJDZ: media.url,
            imagealtuXw: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlJDZ } 
            alt={ attributes.imagealtuXw } 
            onClick={ open } 
            className="h-12"
          /> 
        )} 
      />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlfcO: media.url,
            imagealtXUM: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlfcO } 
            alt={ attributes.imagealtXUM } 
            onClick={ open } 
            className="h-12"
          /> 
        )} 
      />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlEWJ: media.url,
            imagealtrYi: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlEWJ } 
            alt={ attributes.imagealtrYi } 
            onClick={ open } 
            className="h-12"
          /> 
        )} 
      />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurltvs: media.url,
            imagealtkcC: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurltvs } 
            alt={ attributes.imagealtkcC } 
            onClick={ open } 
            className="h-12"
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
                );
            },
            save(props) {
            const { attributes } = props;

            return (
                <div>
    <div>
        <div class="bg-indigo-700">
            <div class="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                 <h2 class="text-3xl font-extrabold text-white"><RichText.Content value={attributes.contentpRw} /></h2>

                <div class="flow-root mt-8 lg:mt-10">
                    <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                        <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                            
      <img
            src={ attributes.imageurlJKx } 
            alt={ attributes.imagealtuAr } 
            class="h-12"
          />
                        </div>
                        <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                            
      <img
            src={ attributes.imageurlJDZ } 
            alt={ attributes.imagealtuXw } 
            class="h-12"
          />
                        </div>
                        <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                            
      <img
            src={ attributes.imageurlfcO } 
            alt={ attributes.imagealtXUM } 
            class="h-12"
          />
                        </div>
                        <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                            
      <img
            src={ attributes.imageurlEWJ } 
            alt={ attributes.imagealtrYi } 
            class="h-12"
          />
                        </div>
                        <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                            
      <img
            src={ attributes.imageurltvs } 
            alt={ attributes.imagealtkcC } 
            class="h-12"
          />
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
        