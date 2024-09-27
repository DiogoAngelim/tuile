
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl, ToggleControl } = wp.components;


        registerBlockType('wp/simple-with-heading', {
            title: 'simple-with-heading',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAEIBaADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAQFBgMCBwH/xABPEAABAwMDAgIHBAQIDAQHAAAAAQIDBAURBhIhEzFBURQiYXGBkaEHFTKxFjbB0SM1QmJzdLLhFzM0N1JlcpKkwuLwRXWD8SRDU1STotL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACcRAQEAAgICAgEDBQEAAAAAAAABAhEDEiExQVETIjJhI3GBoeFS/9oADAMBAAIRAxEAPwD6OADaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==" />),
            category: 'common',
            attributes: {
  "contentZin": {
    "type": "string",
    "default": "The world's most innovative companies use Workflow"
  },
  "imageurlDDF": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workcation-logo-indigo-900.svg'
  },
  "imagealtEIE": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workcation"
  },
  "imageurlnKR": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/tuple-logo-indigo-900.svg'
  },
  "imagealtxJm": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Tuple"
  },
  "imageurlnVd": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/level-logo-indigo-900.svg'
  },
  "imagealtDKe": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Level"
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
        <div className="bg-indigo-200 bg-opacity-25">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                     <h2 className="max-w-md mx-auto text-3xl font-extrabold text-indigo-900 text-center lg:max-w-xl lg:text-left"><RichText tagName="span" value={attributes.contentZin} default="The world's most innovative companies use Workflow" onChange={ (newtext) =>  {
        setAttributes({ contentZin: newtext });
      }}
    /></h2>

                    <div className="flow-root self-center mt-8 lg:mt-0">
                        <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlDDF: media.url,
            imagealtEIE: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlDDF } 
            alt={ attributes.imagealtEIE } 
            onClick={ open } 
            className="h-12"
          /> 
        )} 
      />
                            </div>
                            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlnKR: media.url,
            imagealtxJm: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlnKR } 
            alt={ attributes.imagealtxJm } 
            onClick={ open } 
            className="h-12"
          /> 
        )} 
      />
                            </div>
                            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlnVd: media.url,
            imagealtDKe: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlnVd } 
            alt={ attributes.imagealtDKe } 
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
                </div>
                );
            },
            save(props) {
            const { attributes } = props;

            return (
                <div>
    <div>
        <div class="bg-indigo-200 bg-opacity-25">
            <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div class="lg:grid lg:grid-cols-2 lg:gap-8">
                     <h2 class="max-w-md mx-auto text-3xl font-extrabold text-indigo-900 text-center lg:max-w-xl lg:text-left"><RichText.Content value={attributes.contentZin} /></h2>

                    <div class="flow-root self-center mt-8 lg:mt-0">
                        <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                            <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                                
      <img
            src={ attributes.imageurlDDF } 
            alt={ attributes.imagealtEIE } 
            class="h-12"
          />
                            </div>
                            <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                                
      <img
            src={ attributes.imageurlnKR } 
            alt={ attributes.imagealtxJm } 
            class="h-12"
          />
                            </div>
                            <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                                
      <img
            src={ attributes.imageurlnVd } 
            alt={ attributes.imagealtDKe } 
            class="h-12"
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
        });
        