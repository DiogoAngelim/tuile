
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-toggle', {
            title: 'with toggle',
            icon: (<img src="data:image/jpeg;base64,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kkuZpJddvb+ZqvGg8qvI3Lnrg4JeWm0/8iquEUwrpjTffVOqLirISXM4t7afTXf5Coo8RybIq530RjasLmlFWS1vn1ro1+vcs2cSvhxR4z8CqCnGMY2qSlYmltxl28+3yJbOEY9lbg526dHgt823re97a77O7uGwuuc7MjIdbmpulyThtdvLa7dkwOeK58sKNMa+RTunyqU03GKS220urKa41bDD97tqjKmq2VVzgmm/8Mo78tvRp5eJDKjDmnOudcuaE63qUX2/hkP4XTONcci26+MJSk1bLak2tba15LslpDgkd2RVwueRfGCvjVKbjH8qet6KFWbxW22mpQw1K+nxot82orptPr17r08zRhhwhge5uyyVfI6+aTXNp9O+vQV4ddd1NsZT5qavCjt9Gunf59EFZd3GrVh498JYtUrKfElCzmk2/RJdl8zr8ScfGy407lLGonGPM+rm2kn5d2vInXBaIwhGvIyK1GrwZcsl8cdt6fT5vtolXCcbwZVSdkoyphS9vyhvT+vUcRUyeJZuHG+u+uid0K42VuG1FpyUWnv6nzL4plYt8MWyWNG/w3bKThNx1vSS118u5afCKZwtV199s7VGLsnJcySe0l013JcrBjkXRvjddRao8jnU0m4+j2mODPv4xf4eNZCFWPC6rnc74ycebf5Nrt9WX+IZduNw15NUISs3BKLe4vmkl3+/c5u4bG2EYLKyoRVfhySs3zr57T6/PuTW4dVuHHE+KNUeTXK+q5Wmv4QVRnxHLx/eKciumd8PD8Lw9qMud8q3v0aPtnEM3HWTVbTVbkV1K2vwk9STeuq79NFrI4fRkzulY57thGD09a5W2mvntnEeGQUbubJyZ22pRdznqcUuyWkkgihbxDMuwlZj5OK2siuHPWpdm0tOLe1/p6Fl5md71lVpY/h4sFKbae5Nx3069OpI+E0yqujZddOy6UZStbSknH8utLXT6FirDrrndNynY71FT5tddLXkgKkuI2qrClyQ3kUSsl36NQUuhBTncUtlix5MRPKp8WD1L4Na3tb6916fcsVcGprlW3k5M1VCVdcZSWoxa1rsWasGqqWNKMp7xqnVDbXVPXf5/CgHDsmWZgVXzioyknzJdtp6f8Fkq42DDGVUa7buSpSSi5dJbe9ta7+haIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOYy30fc6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcylrou4AH/2Q==" />),
            category: 'common',
            attributes: {
  "contentwyB": {
    "type": "string",
    "default": "Renew subscription automatically"
  },
  "contentChj": {
    "type": "string",
    "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cumque deserunt officiis ex maiores nostrum."
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
        <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                 <h3 className="text-lg leading-6 font-medium text-gray-900" id="renew-subscription-label"><RichText tagName="span" value={attributes.contentwyB} default="Renew subscription automatically" onChange={ (newtext) =>  {
        setAttributes({ contentwyB: newtext });
      }}
    /></h3>

                <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                    <div className="max-w-xl text-sm text-gray-500">
                        <p id="renew-subscription-description">
                            <RichText tagName="span" value={attributes.contentChj} default="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cumque deserunt officiis ex maiores nostrum." onChange={ (newtext) => { setAttributes({ contentChj: newtext }); }} /></p>
                    </div>
                    <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                        <button type="button" className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" aria-labelledby="renew-subscription-label" aria-describedby="renew-subscription-description"> <span aria-hidden="true" className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"/>

                        </button>
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
        <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                 <h3 class="text-lg leading-6 font-medium text-gray-900" id="renew-subscription-label"><RichText.Content value={attributes.contentwyB} /></h3>

                <div class="mt-2 sm:flex sm:items-start sm:justify-between">
                    <div class="max-w-xl text-sm text-gray-500">
                        <p id="renew-subscription-description">
                            <RichText.Content value={attributes.contentChj} /></p>
                    </div>
                    <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                        <button type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" aria-labelledby="renew-subscription-label" aria-describedby="renew-subscription-description"> <span aria-hidden="true" class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"/>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        