
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/card-with-avatar-and-stats', {
            title: 'card with avatar and stats',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentWnF": {
    "type": "string",
    "default": "Profile Overview"
  },
  "contentrUO": {
    "type": "string",
    "default": "Welcome back,"
  },
  "contentulz": {
    "type": "string",
    "default": "Rebecca Nicholas"
  },
  "contentRpr": {
    "type": "string",
    "default": "Product Designer"
  },
  "contentHWc": {
    "type": "string",
    "default": " View profile "
  },
  "contentWiW": {
    "type": "string",
    "default": "12"
  },
  "contentykB": {
    "type": "string",
    "default": "Vacation days left"
  },
  "contentaIe": {
    "type": "string",
    "default": "4"
  },
  "contentRNm": {
    "type": "string",
    "default": "Sick days left"
  },
  "contentAkR": {
    "type": "string",
    "default": "2"
  },
  "contentGpI": {
    "type": "string",
    "default": "Personal days left"
  },
  "imageurlGkq": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1550525811-e5869dd03032.jpeg'
  },
  "imagealtFmz": {
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
        <div className="rounded-lg bg-white overflow-hidden shadow">
             <h2 className="sr-only" id="profile-overview-title"><RichText tagName="span" value={attributes.contentWnF} default="Profile Overview" onChange={ (newtext) =>  {
        setAttributes({ contentWnF: newtext });
      }}
    /></h2>

            <div className="bg-white p-6">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="sm:flex sm:space-x-5">
                        <div className="flex-shrink-0">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlGkq: media.url,
            imagealtFmz: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlGkq } 
            alt={ attributes.imagealtFmz } 
            onClick={ open } 
            className="mx-auto h-20 w-20 rounded-full"
          /> 
        )} 
      />
                        </div>
                        <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                            <p className="text-sm font-medium text-gray-600">
                                <RichText tagName="span" value={attributes.contentrUO} default="Welcome back," onChange={ (newtext) => { setAttributes({ contentrUO: newtext }); }} /></p>
                            <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                                <RichText tagName="span" value={attributes.contentulz} default="Rebecca Nicholas" onChange={ (newtext) => { setAttributes({ contentulz: newtext }); }} /></p>
                            <p className="text-sm font-medium text-gray-600">
                                <RichText tagName="span" value={attributes.contentRpr} default="Product Designer" onChange={ (newtext) => { setAttributes({ contentRpr: newtext }); }} /></p>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-center sm:mt-0"> <span className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"><RichText tagName="span" value={attributes.contentHWc} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentHWc: newtext });
      }}
    /></span>

                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                <div className="px-6 py-5 text-sm font-medium text-center"> <span className="text-gray-900"><RichText tagName="span" value={attributes.contentWiW} default="12" onChange={ (newtext) =>  {
        setAttributes({ contentWiW: newtext });
      }}
    /></span>
 <span className="text-gray-600"><RichText tagName="span" value={attributes.contentykB} default="Vacation days left" onChange={ (newtext) =>  {
        setAttributes({ contentykB: newtext });
      }}
    /></span>

                </div>
                <div className="px-6 py-5 text-sm font-medium text-center"> <span className="text-gray-900"><RichText tagName="span" value={attributes.contentaIe} default="4" onChange={ (newtext) =>  {
        setAttributes({ contentaIe: newtext });
      }}
    /></span>
 <span className="text-gray-600"><RichText tagName="span" value={attributes.contentRNm} default="Sick days left" onChange={ (newtext) =>  {
        setAttributes({ contentRNm: newtext });
      }}
    /></span>

                </div>
                <div className="px-6 py-5 text-sm font-medium text-center"> <span className="text-gray-900"><RichText tagName="span" value={attributes.contentAkR} default="2" onChange={ (newtext) =>  {
        setAttributes({ contentAkR: newtext });
      }}
    /></span>
 <span className="text-gray-600"><RichText tagName="span" value={attributes.contentGpI} default="Personal days left" onChange={ (newtext) =>  {
        setAttributes({ contentGpI: newtext });
      }}
    /></span>

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
        <div class="rounded-lg bg-white overflow-hidden shadow">
             <h2 class="sr-only" id="profile-overview-title"><RichText.Content value={attributes.contentWnF} /></h2>

            <div class="bg-white p-6">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="sm:flex sm:space-x-5">
                        <div class="flex-shrink-0">
                            
      <img
            src={ attributes.imageurlGkq } 
            alt={ attributes.imagealtFmz } 
            class="mx-auto h-20 w-20 rounded-full"
          />
                        </div>
                        <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                            <p class="text-sm font-medium text-gray-600">
                                <RichText.Content value={attributes.contentrUO} /></p>
                            <p class="text-xl font-bold text-gray-900 sm:text-2xl">
                                <RichText.Content value={attributes.contentulz} /></p>
                            <p class="text-sm font-medium text-gray-600">
                                <RichText.Content value={attributes.contentRpr} /></p>
                        </div>
                    </div>
                    <div class="mt-5 flex justify-center sm:mt-0"> <span class="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"><RichText.Content value={attributes.contentHWc} /></span>

                    </div>
                </div>
            </div>
            <div class="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                <div class="px-6 py-5 text-sm font-medium text-center"> <span class="text-gray-900"><RichText.Content value={attributes.contentWiW} /></span>
 <span class="text-gray-600"><RichText.Content value={attributes.contentykB} /></span>

                </div>
                <div class="px-6 py-5 text-sm font-medium text-center"> <span class="text-gray-900"><RichText.Content value={attributes.contentaIe} /></span>
 <span class="text-gray-600"><RichText.Content value={attributes.contentRNm} /></span>

                </div>
                <div class="px-6 py-5 text-sm font-medium text-center"> <span class="text-gray-900"><RichText.Content value={attributes.contentAkR} /></span>
 <span class="text-gray-600"><RichText.Content value={attributes.contentGpI} /></span>

                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        