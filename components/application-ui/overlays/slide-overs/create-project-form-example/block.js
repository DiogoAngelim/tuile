
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/create-project-form-example', {
            title: 'create project form example',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentBss": {
    "type": "string",
    "default": "New Project"
  },
  "contentrRw": {
    "type": "string",
    "default": "Close panel"
  },
  "contentoSK": {
    "type": "string",
    "default": "Get started by filling in the information below to create your new project."
  },
  "contentNQm": {
    "type": "string",
    "default": " Project name "
  },
  "contentyQQ": {
    "type": "string",
    "default": " Description "
  },
  "contentWTI": {
    "type": "string",
    "default": "Team Members"
  },
  "contentbKc": {
    "type": "string",
    "default": "Add team member"
  },
  "contentWwy": {
    "type": "string",
    "default": "Privacy"
  },
  "contentGjD": {
    "type": "string",
    "default": " Public access "
  },
  "contentQTP": {
    "type": "string",
    "default": "Everyone with the link will see this project."
  },
  "contentFPc": {
    "type": "string",
    "default": " Private to project members "
  },
  "contentHEE": {
    "type": "string",
    "default": "Only members of this project would be able to access."
  },
  "contentRJH": {
    "type": "string",
    "default": " Private to you "
  },
  "contentNPo": {
    "type": "string",
    "default": "You are the only one able to access this project."
  },
  "contentLIY": {
    "type": "string",
    "default": " Copy link "
  },
  "contentVrT": {
    "type": "string",
    "default": " Learn more about sharing "
  },
  "contentCfI": {
    "type": "string",
    "default": "Cancel"
  },
  "contentqXX": {
    "type": "string",
    "default": "Save"
  },
  "imageurlhkM": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtuvN": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Tom Cook"
  },
  "imageurlRGo": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517365830460-955ce3ccd263.jpeg'
  },
  "imagealtnOa": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Whitney Francis"
  },
  "imageurlZYi": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1519345182560-3f2917c472ef.jpeg'
  },
  "imagealtZrV": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Leonard Krasner"
  },
  "imageurlQNs": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1463453091185-61582044d556.jpeg'
  },
  "imagealtrdi": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Floyd Miles"
  },
  "imageurlmif": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1502685104226-ee32379fefbe.jpeg'
  },
  "imagealtbls": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Emily Selman"
  },
  "svgPPV": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgOCq": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z\" clip-rule=\"evenodd\"/>"
  },
  "svggYo": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z\" clip-rule=\"evenodd\"/>"
  },
  "svgYqs": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z\" clip-rule=\"evenodd\"/>"
  }
},
            edit(props) {
            const { attributes, setAttributes } = props;

            return (
                <div>
                    <InspectorControls>
                    
    <Panel>
      

















































































































































































































































































































































































































































































































































































































































































































































































































    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgPPV }
            onChange={ ( value ) => {
              setAttributes({ svgPPV: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  

    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgOCq }
            onChange={ ( value ) => {
              setAttributes({ svgOCq: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  

    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svggYo }
            onChange={ ( value ) => {
              setAttributes({ svggYo: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  

    { (            
    <PanelBody title="SVG Markup">
      <PanelRow>
        <div>
          <TextareaControl
            label="SVG Content"
            help="Enter your SVG content..."
            value={ attributes.svgYqs }
            onChange={ ( value ) => {
              setAttributes({ svgYqs: value });
            } }
          />
        </div>
      </PanelRow>
    </PanelBody>
    )}
  
    </Panel>
                    </InspectorControls>

                    <div>
    <div>
        <div className="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0" aria-hidden="true"/>
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                    <div className="pointer-events-auto w-screen max-w-md">
                        <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                            <div className="h-0 flex-1 overflow-y-auto">
                                <div className="bg-indigo-700 py-6 px-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                         <h2 className="text-lg font-medium text-white" id="slide-over-title"><RichText tagName="span" value={attributes.contentBss} default="New Project" onChange={ (newtext) =>  {
        setAttributes({ contentBss: newtext });
      }}
    /></h2>

                                        <div className="ml-3 flex h-7 items-center">
                                            <button type="button" className="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentrRw} default="Close panel" onChange={ (newtext) =>  {
        setAttributes({ contentrRw: newtext });
      }}
    /></span>

                                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPPV }}
        >
      </svg>
      
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-1">
                                        <p className="text-sm text-indigo-300">
                                            <RichText tagName="span" value={attributes.contentoSK} default="Get started by filling in the information below to create your new project." onChange={ (newtext) => { setAttributes({ contentoSK: newtext }); }} /></p>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="divide-y divide-gray-200 px-4 sm:px-6">
                                        <div className="space-y-6 pt-6 pb-5">
                                            <div>
                                                <label for="project-name" className="block text-sm font-medium text-gray-900">
                                                    <RichText tagName="span" value={attributes.contentNQm} default="Project name" onChange={ (newtext) => { setAttributes({ contentNQm: newtext }); }} /></label>
                                                <div className="mt-1">
                                                    <input type="text" name="project-name" id="project-name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                                                </div>
                                            </div>
                                            <div>
                                                <label for="description" className="block text-sm font-medium text-gray-900">
                                                    <RichText tagName="span" value={attributes.contentyQQ} default="Description" onChange={ (newtext) => { setAttributes({ contentyQQ: newtext }); }} /></label>
                                                <div className="mt-1">
                                                    <textarea id="description" name="description" rows="4" className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                                                </div>
                                            </div>
                                            <div>
                                                 <h3 className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentWTI} default="Team Members" onChange={ (newtext) =>  {
        setAttributes({ contentWTI: newtext });
      }}
    /></h3>

                                                <div className="mt-2">
                                                    <div className="flex space-x-2"> <span className="rounded-full hover:opacity-75">
                          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlhkM: media.url,
            imagealtuvN: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlhkM } 
            alt={ attributes.imagealtuvN } 
            onClick={ open } 
            className="inline-block h-8 w-8 rounded-full"
          /> 
        )} 
      />
                        </span>
 <span className="rounded-full hover:opacity-75">
                          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlRGo: media.url,
            imagealtnOa: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlRGo } 
            alt={ attributes.imagealtnOa } 
            onClick={ open } 
            className="inline-block h-8 w-8 rounded-full"
          /> 
        )} 
      />
                        </span>
 <span className="rounded-full hover:opacity-75">
                          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlZYi: media.url,
            imagealtZrV: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlZYi } 
            alt={ attributes.imagealtZrV } 
            onClick={ open } 
            className="inline-block h-8 w-8 rounded-full"
          /> 
        )} 
      />
                        </span>
 <span className="rounded-full hover:opacity-75">
                          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlQNs: media.url,
            imagealtrdi: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlQNs } 
            alt={ attributes.imagealtrdi } 
            onClick={ open } 
            className="inline-block h-8 w-8 rounded-full"
          /> 
        )} 
      />
                        </span>
 <span className="rounded-full hover:opacity-75">
                          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlmif: media.url,
            imagealtbls: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlmif } 
            alt={ attributes.imagealtbls } 
            onClick={ open } 
            className="inline-block h-8 w-8 rounded-full"
          /> 
        )} 
      />
                        </span>

                                                        <button type="button" className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> <span className="sr-only"><RichText tagName="span" value={attributes.contentbKc} default="Add team member" onChange={ (newtext) =>  {
        setAttributes({ contentbKc: newtext });
      }}
    /></span>

                                                            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOCq }}
        >
      </svg>
      
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <fieldset>
                                                <legend className="text-sm font-medium text-gray-900">
                                                    <RichText tagName="span" value={attributes.contentWwy} default="Privacy" onChange={ (newtext) => { setAttributes({ contentWwy: newtext }); }} /></legend>
                                                <div className="mt-2 space-y-5">
                                                    <div className="relative flex items-start">
                                                        <div className="absolute flex h-5 items-center">
                                                            <input id="privacy-public" name="privacy" aria-describedby="privacy-public-description" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" checked=""/>
                                                        </div>
                                                        <div className="pl-7 text-sm">
                                                            <label for="privacy-public" className="font-medium text-gray-900">
                                                                <RichText tagName="span" value={attributes.contentGjD} default="Public access" onChange={ (newtext) => { setAttributes({ contentGjD: newtext }); }} /></label>
                                                            <p id="privacy-public-description" className="text-gray-500">
                                                                <RichText tagName="span" value={attributes.contentQTP} default="Everyone with the link will see this project." onChange={ (newtext) => { setAttributes({ contentQTP: newtext }); }} /></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="relative flex items-start">
                                                            <div className="absolute flex h-5 items-center">
                                                                <input id="privacy-private-to-project" name="privacy" aria-describedby="privacy-private-to-project-description" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                            </div>
                                                            <div className="pl-7 text-sm">
                                                                <label for="privacy-private-to-project" className="font-medium text-gray-900">
                                                                    <RichText tagName="span" value={attributes.contentFPc} default="Private to project members" onChange={ (newtext) => { setAttributes({ contentFPc: newtext }); }} /></label>
                                                                <p id="privacy-private-to-project-description" className="text-gray-500">
                                                                    <RichText tagName="span" value={attributes.contentHEE} default="Only members of this project would be able to access." onChange={ (newtext) => { setAttributes({ contentHEE: newtext }); }} /></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="relative flex items-start">
                                                            <div className="absolute flex h-5 items-center">
                                                                <input id="privacy-private" name="privacy" aria-describedby="privacy-private-to-project-description" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                            </div>
                                                            <div className="pl-7 text-sm">
                                                                <label for="privacy-private" className="font-medium text-gray-900">
                                                                    <RichText tagName="span" value={attributes.contentRJH} default="Private to you" onChange={ (newtext) => { setAttributes({ contentRJH: newtext }); }} /></label>
                                                                <p id="privacy-private-description" className="text-gray-500">
                                                                    <RichText tagName="span" value={attributes.contentNPo} default="You are the only one able to access this project." onChange={ (newtext) => { setAttributes({ contentNPo: newtext }); }} /></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="pt-4 pb-6">
                                            <div className="flex text-sm"> <span className="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900">
                      
                      
      <svg
         className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggYo }}
        >
      </svg>
      
                      <span className="ml-2"><RichText tagName="span" value={attributes.contentLIY} default="Copy link" onChange={ (newtext) =>  {
        setAttributes({ contentLIY: newtext });
      }}
    /></span>
</span>
                                            </div>
                                            <div className="mt-4 flex text-sm"> <span className="group inline-flex items-center text-gray-500 hover:text-gray-900">
                      
                      
      <svg
         className="h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYqs }}
        >
      </svg>
      
                      <span className="ml-2"><RichText tagName="span" value={attributes.contentVrT} default="Learn more about sharing" onChange={ (newtext) =>  {
        setAttributes({ contentVrT: newtext });
      }}
    /></span>
</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-shrink-0 justify-end px-4 py-4">
                                <button type="button" className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <RichText tagName="span" value={attributes.contentCfI} default="Cancel" onChange={ (newtext) => { setAttributes({ contentCfI: newtext }); }} /></button>
                                <button type="submit" className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <RichText tagName="span" value={attributes.contentqXX} default="Save" onChange={ (newtext) => { setAttributes({ contentqXX: newtext }); }} /></button>
                            </div>
                        </form>
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
        <div class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute inset-0" aria-hidden="true"/>
                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                    <div class="pointer-events-auto w-screen max-w-md">
                        <form class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                            <div class="h-0 flex-1 overflow-y-auto">
                                <div class="bg-indigo-700 py-6 px-4 sm:px-6">
                                    <div class="flex items-center justify-between">
                                         <h2 class="text-lg font-medium text-white" id="slide-over-title"><RichText.Content value={attributes.contentBss} /></h2>

                                        <div class="ml-3 flex h-7 items-center">
                                            <button type="button" class="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentrRw} /></span>

                                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPPV }}
        >
      </svg>
      
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mt-1">
                                        <p class="text-sm text-indigo-300">
                                            <RichText.Content value={attributes.contentoSK} /></p>
                                    </div>
                                </div>
                                <div class="flex flex-1 flex-col justify-between">
                                    <div class="divide-y divide-gray-200 px-4 sm:px-6">
                                        <div class="space-y-6 pt-6 pb-5">
                                            <div>
                                                <label for="project-name" class="block text-sm font-medium text-gray-900">
                                                    <RichText.Content value={attributes.contentNQm} /></label>
                                                <div class="mt-1">
                                                    <input type="text" name="project-name" id="project-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                                                </div>
                                            </div>
                                            <div>
                                                <label for="description" class="block text-sm font-medium text-gray-900">
                                                    <RichText.Content value={attributes.contentyQQ} /></label>
                                                <div class="mt-1">
                                                    <textarea id="description" name="description" rows="4" class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                                                </div>
                                            </div>
                                            <div>
                                                 <h3 class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentWTI} /></h3>

                                                <div class="mt-2">
                                                    <div class="flex space-x-2"> <span class="rounded-full hover:opacity-75">
                          
      <img
            src={ attributes.imageurlhkM } 
            alt={ attributes.imagealtuvN } 
            class="inline-block h-8 w-8 rounded-full"
          />
                        </span>
 <span class="rounded-full hover:opacity-75">
                          
      <img
            src={ attributes.imageurlRGo } 
            alt={ attributes.imagealtnOa } 
            class="inline-block h-8 w-8 rounded-full"
          />
                        </span>
 <span class="rounded-full hover:opacity-75">
                          
      <img
            src={ attributes.imageurlZYi } 
            alt={ attributes.imagealtZrV } 
            class="inline-block h-8 w-8 rounded-full"
          />
                        </span>
 <span class="rounded-full hover:opacity-75">
                          
      <img
            src={ attributes.imageurlQNs } 
            alt={ attributes.imagealtrdi } 
            class="inline-block h-8 w-8 rounded-full"
          />
                        </span>
 <span class="rounded-full hover:opacity-75">
                          
      <img
            src={ attributes.imageurlmif } 
            alt={ attributes.imagealtbls } 
            class="inline-block h-8 w-8 rounded-full"
          />
                        </span>

                                                        <button type="button" class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> <span class="sr-only"><RichText.Content value={attributes.contentbKc} /></span>

                                                            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOCq }}
        >
      </svg>
      
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <fieldset>
                                                <legend class="text-sm font-medium text-gray-900">
                                                    <RichText.Content value={attributes.contentWwy} /></legend>
                                                <div class="mt-2 space-y-5">
                                                    <div class="relative flex items-start">
                                                        <div class="absolute flex h-5 items-center">
                                                            <input id="privacy-public" name="privacy" aria-describedby="privacy-public-description" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" checked=""/>
                                                        </div>
                                                        <div class="pl-7 text-sm">
                                                            <label for="privacy-public" class="font-medium text-gray-900">
                                                                <RichText.Content value={attributes.contentGjD} /></label>
                                                            <p id="privacy-public-description" class="text-gray-500">
                                                                <RichText.Content value={attributes.contentQTP} /></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="relative flex items-start">
                                                            <div class="absolute flex h-5 items-center">
                                                                <input id="privacy-private-to-project" name="privacy" aria-describedby="privacy-private-to-project-description" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                            </div>
                                                            <div class="pl-7 text-sm">
                                                                <label for="privacy-private-to-project" class="font-medium text-gray-900">
                                                                    <RichText.Content value={attributes.contentFPc} /></label>
                                                                <p id="privacy-private-to-project-description" class="text-gray-500">
                                                                    <RichText.Content value={attributes.contentHEE} /></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="relative flex items-start">
                                                            <div class="absolute flex h-5 items-center">
                                                                <input id="privacy-private" name="privacy" aria-describedby="privacy-private-to-project-description" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                            </div>
                                                            <div class="pl-7 text-sm">
                                                                <label for="privacy-private" class="font-medium text-gray-900">
                                                                    <RichText.Content value={attributes.contentRJH} /></label>
                                                                <p id="privacy-private-description" class="text-gray-500">
                                                                    <RichText.Content value={attributes.contentNPo} /></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="pt-4 pb-6">
                                            <div class="flex text-sm"> <span class="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900">
                      
                      
      <svg
         class="h-5 w-5 text-indigo-500 group-hover:text-indigo-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggYo }}
        >
      </svg>
      
                      <span class="ml-2"><RichText.Content value={attributes.contentLIY} /></span>
</span>
                                            </div>
                                            <div class="mt-4 flex text-sm"> <span class="group inline-flex items-center text-gray-500 hover:text-gray-900">
                      
                      
      <svg
         class="h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYqs }}
        >
      </svg>
      
                      <span class="ml-2"><RichText.Content value={attributes.contentVrT} /></span>
</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-shrink-0 justify-end px-4 py-4">
                                <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <RichText.Content value={attributes.contentCfI} /></button>
                                <button type="submit" class="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <RichText.Content value={attributes.contentqXX} /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        