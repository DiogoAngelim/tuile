
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/avatar-groups-with-actions', {
            title: 'avatar groups with actions',
            icon: (<img src="data:image/jpeg;base64,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4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKBN35W8fAu/K3j4AoE3flbx8C78rePgCgTd+VvHwLvyt4+AKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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" />),
            category: 'common',
            attributes: {
  "contentKOO": {
    "type": "string",
    "default": "Leonard Krasner"
  },
  "contentgmd": {
    "type": "string",
    "default": "@leonardkrasner"
  },
  "contentYPm": {
    "type": "string",
    "default": " View "
  },
  "contentaKf": {
    "type": "string",
    "default": "Floyd Miles"
  },
  "contentJRq": {
    "type": "string",
    "default": "@floydmiles"
  },
  "contentrNf": {
    "type": "string",
    "default": " View "
  },
  "contenttpG": {
    "type": "string",
    "default": "Emily Selman"
  },
  "contentcVl": {
    "type": "string",
    "default": "@emilyselman"
  },
  "contentoxz": {
    "type": "string",
    "default": " View "
  },
  "contentVUC": {
    "type": "string",
    "default": "Kristin Watson"
  },
  "contentZcA": {
    "type": "string",
    "default": "@kristinwatson"
  },
  "contentzOh": {
    "type": "string",
    "default": " View "
  },
  "contentjre": {
    "type": "string",
    "default": " View all "
  },
  "imageurlIkE": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1519345182560-3f2917c472ef.jpeg'
  },
  "imagealtMwM": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlFSU": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1463453091185-61582044d556.jpeg'
  },
  "imagealtqTm": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurleeE": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1502685104226-ee32379fefbe.jpeg'
  },
  "imagealtSfX": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlTuT": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1500917293891-ef795e70e1f6.jpeg'
  },
  "imagealtlCg": {
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
        <div>
            <div className="flow-root mt-6">
                <ul role="list" className="-my-5 divide-y divide-gray-200">
                    <li className="py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlIkE: media.url,
            imagealtMwM: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlIkE } 
            alt={ attributes.imagealtMwM } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    <RichText tagName="span" value={attributes.contentKOO} default="Leonard Krasner" onChange={ (newtext) => { setAttributes({ contentKOO: newtext }); }} /></p>
                                <p className="text-sm text-gray-500 truncate">
                                    <RichText tagName="span" value={attributes.contentgmd} default="@leonardkrasner" onChange={ (newtext) => { setAttributes({ contentgmd: newtext }); }} /></p>
                            </div>
                            <div> <span className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"><RichText tagName="span" value={attributes.contentYPm} default="View" onChange={ (newtext) =>  {
        setAttributes({ contentYPm: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </li>
                    <li className="py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlFSU: media.url,
            imagealtqTm: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlFSU } 
            alt={ attributes.imagealtqTm } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    <RichText tagName="span" value={attributes.contentaKf} default="Floyd Miles" onChange={ (newtext) => { setAttributes({ contentaKf: newtext }); }} /></p>
                                <p className="text-sm text-gray-500 truncate">
                                    <RichText tagName="span" value={attributes.contentJRq} default="@floydmiles" onChange={ (newtext) => { setAttributes({ contentJRq: newtext }); }} /></p>
                            </div>
                            <div> <span className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"><RichText tagName="span" value={attributes.contentrNf} default="View" onChange={ (newtext) =>  {
        setAttributes({ contentrNf: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </li>
                    <li className="py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurleeE: media.url,
            imagealtSfX: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurleeE } 
            alt={ attributes.imagealtSfX } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    <RichText tagName="span" value={attributes.contenttpG} default="Emily Selman" onChange={ (newtext) => { setAttributes({ contenttpG: newtext }); }} /></p>
                                <p className="text-sm text-gray-500 truncate">
                                    <RichText tagName="span" value={attributes.contentcVl} default="@emilyselman" onChange={ (newtext) => { setAttributes({ contentcVl: newtext }); }} /></p>
                            </div>
                            <div> <span className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"><RichText tagName="span" value={attributes.contentoxz} default="View" onChange={ (newtext) =>  {
        setAttributes({ contentoxz: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </li>
                    <li className="py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlTuT: media.url,
            imagealtlCg: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlTuT } 
            alt={ attributes.imagealtlCg } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    <RichText tagName="span" value={attributes.contentVUC} default="Kristin Watson" onChange={ (newtext) => { setAttributes({ contentVUC: newtext }); }} /></p>
                                <p className="text-sm text-gray-500 truncate">
                                    <RichText tagName="span" value={attributes.contentZcA} default="@kristinwatson" onChange={ (newtext) => { setAttributes({ contentZcA: newtext }); }} /></p>
                            </div>
                            <div> <span className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"><RichText tagName="span" value={attributes.contentzOh} default="View" onChange={ (newtext) =>  {
        setAttributes({ contentzOh: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mt-6"> <span className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"><RichText tagName="span" value={attributes.contentjre} default="View all" onChange={ (newtext) =>  {
        setAttributes({ contentjre: newtext });
      }}
    /></span>

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
        <div>
            <div class="flow-root mt-6">
                <ul role="list" class="-my-5 divide-y divide-gray-200">
                    <li class="py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                
      <img
            src={ attributes.imageurlIkE } 
            alt={ attributes.imagealtMwM } 
            class="h-8 w-8 rounded-full"
          />
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate">
                                    <RichText.Content value={attributes.contentKOO} /></p>
                                <p class="text-sm text-gray-500 truncate">
                                    <RichText.Content value={attributes.contentgmd} /></p>
                            </div>
                            <div> <span class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"><RichText.Content value={attributes.contentYPm} /></span>

                            </div>
                        </div>
                    </li>
                    <li class="py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                
      <img
            src={ attributes.imageurlFSU } 
            alt={ attributes.imagealtqTm } 
            class="h-8 w-8 rounded-full"
          />
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate">
                                    <RichText.Content value={attributes.contentaKf} /></p>
                                <p class="text-sm text-gray-500 truncate">
                                    <RichText.Content value={attributes.contentJRq} /></p>
                            </div>
                            <div> <span class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"><RichText.Content value={attributes.contentrNf} /></span>

                            </div>
                        </div>
                    </li>
                    <li class="py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                
      <img
            src={ attributes.imageurleeE } 
            alt={ attributes.imagealtSfX } 
            class="h-8 w-8 rounded-full"
          />
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate">
                                    <RichText.Content value={attributes.contenttpG} /></p>
                                <p class="text-sm text-gray-500 truncate">
                                    <RichText.Content value={attributes.contentcVl} /></p>
                            </div>
                            <div> <span class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"><RichText.Content value={attributes.contentoxz} /></span>

                            </div>
                        </div>
                    </li>
                    <li class="py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                
      <img
            src={ attributes.imageurlTuT } 
            alt={ attributes.imagealtlCg } 
            class="h-8 w-8 rounded-full"
          />
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate">
                                    <RichText.Content value={attributes.contentVUC} /></p>
                                <p class="text-sm text-gray-500 truncate">
                                    <RichText.Content value={attributes.contentZcA} /></p>
                            </div>
                            <div> <span class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"><RichText.Content value={attributes.contentzOh} /></span>

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="mt-6"> <span class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"><RichText.Content value={attributes.contentjre} /></span>

            </div>
        </div>
    </div>
</div>
            );
            },
        });
        