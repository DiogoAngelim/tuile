
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/wide-create-project-form-example', {
            title: 'wide create project form example',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentsEL": {
    "type": "string",
    "default": "New project"
  },
  "contentCtM": {
    "type": "string",
    "default": "Get started by filling in the information below to create your new project."
  },
  "contentFnY": {
    "type": "string",
    "default": "Close panel"
  },
  "contenthlN": {
    "type": "string",
    "default": " Project name "
  },
  "contentfFr": {
    "type": "string",
    "default": " Description "
  },
  "contentbvf": {
    "type": "string",
    "default": "Team Members"
  },
  "contentHBg": {
    "type": "string",
    "default": "Add team member"
  },
  "contenteNX": {
    "type": "string",
    "default": "Privacy"
  },
  "contentVQA": {
    "type": "string",
    "default": " Public access "
  },
  "contentDhS": {
    "type": "string",
    "default": "Everyone with the link will see this project"
  },
  "contentSfz": {
    "type": "string",
    "default": " Private to Project Members "
  },
  "contentyOE": {
    "type": "string",
    "default": "Only members of this project would be able to access"
  },
  "contentovs": {
    "type": "string",
    "default": " Private to you "
  },
  "contentJfZ": {
    "type": "string",
    "default": "You are the only one able to access this project"
  },
  "contentiJk": {
    "type": "string",
    "default": " Copy link "
  },
  "contentNUo": {
    "type": "string",
    "default": " Learn more about sharing "
  },
  "contentnrz": {
    "type": "string",
    "default": "Cancel"
  },
  "contentzNR": {
    "type": "string",
    "default": "Create"
  },
  "imageurldtM": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtcwC": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Tom Cook"
  },
  "imageurlMLc": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517365830460-955ce3ccd263.jpeg'
  },
  "imagealtIBU": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Whitney Francis"
  },
  "imageurlRCB": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1519345182560-3f2917c472ef.jpeg'
  },
  "imagealtgOO": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Leonard Krasner"
  },
  "imageurlGvE": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1463453091185-61582044d556.jpeg'
  },
  "imagealtBMw": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Floyd Miles"
  },
  "imageurlMGX": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1502685104226-ee32379fefbe.jpeg'
  },
  "imagealtzaI": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Emily Selman"
  },
  "svgkCt": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgkav": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z\" clip-rule=\"evenodd\"/>"
  },
  "svgAaK": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z\" clip-rule=\"evenodd\"/>"
  },
  "svgAAO": {
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
            value={ attributes.svgkCt }
            onChange={ ( value ) => {
              setAttributes({ svgkCt: value });
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
            value={ attributes.svgkav }
            onChange={ ( value ) => {
              setAttributes({ svgkav: value });
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
            value={ attributes.svgAaK }
            onChange={ ( value ) => {
              setAttributes({ svgAaK: value });
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
            value={ attributes.svgAAO }
            onChange={ ( value ) => {
              setAttributes({ svgAAO: value });
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
                    <div className="pointer-events-auto w-screen max-w-2xl">
                        <form className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div className="flex-1">
                                <div className="bg-gray-50 px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between space-x-3">
                                        <div className="space-y-1">
                                             <h2 className="text-lg font-medium text-gray-900" id="slide-over-title"><RichText tagName="span" value={attributes.contentsEL} default="New project" onChange={ (newtext) =>  {
        setAttributes({ contentsEL: newtext });
      }}
    /></h2>

                                            <p className="text-sm text-gray-500">
                                                <RichText tagName="span" value={attributes.contentCtM} default="Get started by filling in the information below to create your new project." onChange={ (newtext) => { setAttributes({ contentCtM: newtext }); }} /></p>
                                        </div>
                                        <div className="flex h-7 items-center">
                                            <button type="button" className="text-gray-400 hover:text-gray-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentFnY} default="Close panel" onChange={ (newtext) =>  {
        setAttributes({ contentFnY: newtext });
      }}
    /></span>

                                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkCt }}
        >
      </svg>
      
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                                    <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                        <div>
                                            <label for="project-name" className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2">
                                                <RichText tagName="span" value={attributes.contenthlN} default="Project name" onChange={ (newtext) => { setAttributes({ contenthlN: newtext }); }} /></label>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <input type="text" name="project-name" id="project-name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                                        </div>
                                    </div>
                                    <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                        <div>
                                            <label for="project-description" className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2">
                                                <RichText tagName="span" value={attributes.contentfFr} default="Description" onChange={ (newtext) => { setAttributes({ contentfFr: newtext }); }} /></label>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <textarea id="project-description" name="project-description" rows="3" className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                                        </div>
                                    </div>
                                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                        <div>
                                             <h3 className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentbvf} default="Team Members" onChange={ (newtext) =>  {
        setAttributes({ contentbvf: newtext });
      }}
    /></h3>

                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="flex space-x-2"> <span className="flex-shrink-0 rounded-full hover:opacity-75">
                      
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurldtM: media.url,
            imagealtcwC: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurldtM } 
            alt={ attributes.imagealtcwC } 
            onClick={ open } 
            className="inline-block h-8 w-8 rounded-full"
          /> 
        )} 
      />
                    </span>
 <span className="flex-shrink-0 rounded-full hover:opacity-75">
                      
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlMLc: media.url,
            imagealtIBU: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlMLc } 
            alt={ attributes.imagealtIBU } 
            onClick={ open } 
            className="inline-block h-8 w-8 rounded-full"
          /> 
        )} 
      />
                    </span>
 <span className="flex-shrink-0 rounded-full hover:opacity-75">
                      
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlRCB: media.url,
            imagealtgOO: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlRCB } 
            alt={ attributes.imagealtgOO } 
            onClick={ open } 
            className="inline-block h-8 w-8 rounded-full"
          /> 
        )} 
      />
                    </span>
 <span className="flex-shrink-0 rounded-full hover:opacity-75">
                      
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlGvE: media.url,
            imagealtBMw: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlGvE } 
            alt={ attributes.imagealtBMw } 
            onClick={ open } 
            className="inline-block h-8 w-8 rounded-full"
          /> 
        )} 
      />
                    </span>
 <span className="flex-shrink-0 rounded-full hover:opacity-75">
                      
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlMGX: media.url,
            imagealtzaI: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlMGX } 
            alt={ attributes.imagealtzaI } 
            onClick={ open } 
            className="inline-block h-8 w-8 rounded-full"
          /> 
        )} 
      />
                    </span>

                                                <button type="button" className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> <span className="sr-only"><RichText tagName="span" value={attributes.contentHBg} default="Add team member" onChange={ (newtext) =>  {
        setAttributes({ contentHBg: newtext });
      }}
    /></span>

                                                    
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkav }}
        >
      </svg>
      
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <fieldset>
                                        <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                            <div>
                                                <legend className="text-sm font-medium text-gray-900">
                                                    <RichText tagName="span" value={attributes.contenteNX} default="Privacy" onChange={ (newtext) => { setAttributes({ contenteNX: newtext }); }} /></legend>
                                            </div>
                                            <div className="space-y-5 sm:col-span-2">
                                                <div className="space-y-5 sm:mt-0">
                                                    <div className="relative flex items-start">
                                                        <div className="absolute flex h-5 items-center">
                                                            <input id="public-access" name="privacy" aria-describedby="public-access-description" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" checked=""/>
                                                        </div>
                                                        <div className="pl-7 text-sm">
                                                            <label for="public-access" className="font-medium text-gray-900">
                                                                <RichText tagName="span" value={attributes.contentVQA} default="Public access" onChange={ (newtext) => { setAttributes({ contentVQA: newtext }); }} /></label>
                                                            <p id="public-access-description" className="text-gray-500">
                                                                <RichText tagName="span" value={attributes.contentDhS} default="Everyone with the link will see this project" onChange={ (newtext) => { setAttributes({ contentDhS: newtext }); }} /></p>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex items-start">
                                                        <div className="absolute flex h-5 items-center">
                                                            <input id="restricted-access" name="privacy" aria-describedby="restricted-access-description" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                        </div>
                                                        <div className="pl-7 text-sm">
                                                            <label for="restricted-access" className="font-medium text-gray-900">
                                                                <RichText tagName="span" value={attributes.contentSfz} default="Private to Project Members" onChange={ (newtext) => { setAttributes({ contentSfz: newtext }); }} /></label>
                                                            <p id="restricted-access-description" className="text-gray-500">
                                                                <RichText tagName="span" value={attributes.contentyOE} default="Only members of this project would be able to access" onChange={ (newtext) => { setAttributes({ contentyOE: newtext }); }} /></p>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex items-start">
                                                        <div className="absolute flex h-5 items-center">
                                                            <input id="private-access" name="privacy" aria-describedby="private-access-description" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                        </div>
                                                        <div className="pl-7 text-sm">
                                                            <label for="private-access" className="font-medium text-gray-900">
                                                                <RichText tagName="span" value={attributes.contentovs} default="Private to you" onChange={ (newtext) => { setAttributes({ contentovs: newtext }); }} /></label>
                                                            <p id="private-access-description" className="text-gray-500">
                                                                <RichText tagName="span" value={attributes.contentJfZ} default="You are the only one able to access this project" onChange={ (newtext) => { setAttributes({ contentJfZ: newtext }); }} /></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="border-gray-200"/>
                                                <div className="space-between sm:space-between flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0">
                                                    <div className="flex-1"> <span className="group flex items-center space-x-2.5 text-sm font-medium text-indigo-600 hover:text-indigo-900">
                          
                          
      <svg
         className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAaK }}
        >
      </svg>
      
                          <span><RichText tagName="span" value={attributes.contentiJk} default="Copy link" onChange={ (newtext) =>  {
        setAttributes({ contentiJk: newtext });
      }}
    /></span>
</span>
                                                    </div>
                                                    <div> <span className="group flex items-center space-x-2.5 text-sm text-gray-500 hover:text-gray-900">
                          
                          
      <svg
         className="h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAAO }}
        >
      </svg>
      
                          <span><RichText tagName="span" value={attributes.contentNUo} default="Learn more about sharing" onChange={ (newtext) =>  {
        setAttributes({ contentNUo: newtext });
      }}
    /></span>
</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                                <div className="flex justify-end space-x-3">
                                    <button type="button" className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        <RichText tagName="span" value={attributes.contentnrz} default="Cancel" onChange={ (newtext) => { setAttributes({ contentnrz: newtext }); }} /></button>
                                    <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        <RichText tagName="span" value={attributes.contentzNR} default="Create" onChange={ (newtext) => { setAttributes({ contentzNR: newtext }); }} /></button>
                                </div>
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
                    <div class="pointer-events-auto w-screen max-w-2xl">
                        <form class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div class="flex-1">
                                <div class="bg-gray-50 px-4 py-6 sm:px-6">
                                    <div class="flex items-start justify-between space-x-3">
                                        <div class="space-y-1">
                                             <h2 class="text-lg font-medium text-gray-900" id="slide-over-title"><RichText.Content value={attributes.contentsEL} /></h2>

                                            <p class="text-sm text-gray-500">
                                                <RichText.Content value={attributes.contentCtM} /></p>
                                        </div>
                                        <div class="flex h-7 items-center">
                                            <button type="button" class="text-gray-400 hover:text-gray-500"> <span class="sr-only"><RichText.Content value={attributes.contentFnY} /></span>

                                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkCt }}
        >
      </svg>
      
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                                    <div class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                        <div>
                                            <label for="project-name" class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2">
                                                <RichText.Content value={attributes.contenthlN} /></label>
                                        </div>
                                        <div class="sm:col-span-2">
                                            <input type="text" name="project-name" id="project-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                                        </div>
                                    </div>
                                    <div class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                        <div>
                                            <label for="project-description" class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2">
                                                <RichText.Content value={attributes.contentfFr} /></label>
                                        </div>
                                        <div class="sm:col-span-2">
                                            <textarea id="project-description" name="project-description" rows="3" class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                                        </div>
                                    </div>
                                    <div class="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                        <div>
                                             <h3 class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentbvf} /></h3>

                                        </div>
                                        <div class="sm:col-span-2">
                                            <div class="flex space-x-2"> <span class="flex-shrink-0 rounded-full hover:opacity-75">
                      
      <img
            src={ attributes.imageurldtM } 
            alt={ attributes.imagealtcwC } 
            class="inline-block h-8 w-8 rounded-full"
          />
                    </span>
 <span class="flex-shrink-0 rounded-full hover:opacity-75">
                      
      <img
            src={ attributes.imageurlMLc } 
            alt={ attributes.imagealtIBU } 
            class="inline-block h-8 w-8 rounded-full"
          />
                    </span>
 <span class="flex-shrink-0 rounded-full hover:opacity-75">
                      
      <img
            src={ attributes.imageurlRCB } 
            alt={ attributes.imagealtgOO } 
            class="inline-block h-8 w-8 rounded-full"
          />
                    </span>
 <span class="flex-shrink-0 rounded-full hover:opacity-75">
                      
      <img
            src={ attributes.imageurlGvE } 
            alt={ attributes.imagealtBMw } 
            class="inline-block h-8 w-8 rounded-full"
          />
                    </span>
 <span class="flex-shrink-0 rounded-full hover:opacity-75">
                      
      <img
            src={ attributes.imageurlMGX } 
            alt={ attributes.imagealtzaI } 
            class="inline-block h-8 w-8 rounded-full"
          />
                    </span>

                                                <button type="button" class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> <span class="sr-only"><RichText.Content value={attributes.contentHBg} /></span>

                                                    
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgkav }}
        >
      </svg>
      
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <fieldset>
                                        <div class="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                            <div>
                                                <legend class="text-sm font-medium text-gray-900">
                                                    <RichText.Content value={attributes.contenteNX} /></legend>
                                            </div>
                                            <div class="space-y-5 sm:col-span-2">
                                                <div class="space-y-5 sm:mt-0">
                                                    <div class="relative flex items-start">
                                                        <div class="absolute flex h-5 items-center">
                                                            <input id="public-access" name="privacy" aria-describedby="public-access-description" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" checked=""/>
                                                        </div>
                                                        <div class="pl-7 text-sm">
                                                            <label for="public-access" class="font-medium text-gray-900">
                                                                <RichText.Content value={attributes.contentVQA} /></label>
                                                            <p id="public-access-description" class="text-gray-500">
                                                                <RichText.Content value={attributes.contentDhS} /></p>
                                                        </div>
                                                    </div>
                                                    <div class="relative flex items-start">
                                                        <div class="absolute flex h-5 items-center">
                                                            <input id="restricted-access" name="privacy" aria-describedby="restricted-access-description" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                        </div>
                                                        <div class="pl-7 text-sm">
                                                            <label for="restricted-access" class="font-medium text-gray-900">
                                                                <RichText.Content value={attributes.contentSfz} /></label>
                                                            <p id="restricted-access-description" class="text-gray-500">
                                                                <RichText.Content value={attributes.contentyOE} /></p>
                                                        </div>
                                                    </div>
                                                    <div class="relative flex items-start">
                                                        <div class="absolute flex h-5 items-center">
                                                            <input id="private-access" name="privacy" aria-describedby="private-access-description" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                        </div>
                                                        <div class="pl-7 text-sm">
                                                            <label for="private-access" class="font-medium text-gray-900">
                                                                <RichText.Content value={attributes.contentovs} /></label>
                                                            <p id="private-access-description" class="text-gray-500">
                                                                <RichText.Content value={attributes.contentJfZ} /></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr class="border-gray-200"/>
                                                <div class="space-between sm:space-between flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0">
                                                    <div class="flex-1"> <span class="group flex items-center space-x-2.5 text-sm font-medium text-indigo-600 hover:text-indigo-900">
                          
                          
      <svg
         class="h-5 w-5 text-indigo-500 group-hover:text-indigo-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAaK }}
        >
      </svg>
      
                          <span><RichText.Content value={attributes.contentiJk} /></span>
</span>
                                                    </div>
                                                    <div> <span class="group flex items-center space-x-2.5 text-sm text-gray-500 hover:text-gray-900">
                          
                          
      <svg
         class="h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAAO }}
        >
      </svg>
      
                          <span><RichText.Content value={attributes.contentNUo} /></span>
</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div class="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                                <div class="flex justify-end space-x-3">
                                    <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        <RichText.Content value={attributes.contentnrz} /></button>
                                    <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        <RichText.Content value={attributes.contentzNR} /></button>
                                </div>
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
        