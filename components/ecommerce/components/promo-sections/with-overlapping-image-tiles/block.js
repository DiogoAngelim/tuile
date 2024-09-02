
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-overlapping-image-tiles', {
            title: 'with overlapping image tiles',
            icon: (<img src="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z" />),
            category: 'common',
            attributes: {
  "contentYPj": {
    "type": "string",
    "default": "Mid-Season Sale"
  },
  "contentGAr": {
    "type": "string",
    "default": "Shop Collection"
  },
  "contentRUp": {
    "type": "string",
    "default": "Collections"
  },
  "contentHME": {
    "type": "string",
    "default": "Shop the collection"
  },
  "contentMSR": {
    "type": "string",
    "default": "\n                  Women&#039;s\n                "
  },
  "contentsFB": {
    "type": "string",
    "default": "Shop the collection"
  },
  "contentSak": {
    "type": "string",
    "default": "\n                  Men&#039;s\n                "
  },
  "contentZEZ": {
    "type": "string",
    "default": "Shop the collection"
  },
  "contentGid": {
    "type": "string",
    "default": "\n                  Desk Accessories\n                "
  },
  "backgroundurlowY": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-04-hero-full-width.jpg'
  },
  "backgroundaltaER": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "backgroundurldxQ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-04-hero-full-width.jpg'
  },
  "backgroundaltovw": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "backgroundurlPLu": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-04-collection-01.jpg'
  },
  "backgroundaltKHm": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Woman wearing an off-white cotton t-shirt."
  },
  "backgroundurlUsW": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-04-collection-02.jpg'
  },
  "backgroundaltKpB": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Man wearing a charcoal gray cotton t-shirt."
  },
  "backgroundurldpD": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-04-collection-03.jpg'
  },
  "backgroundaltpPk": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Person sitting at a wooden desk with paper note organizer, pencil and tablet."
  }
},
            edit(props) {
            const { attributes, setAttributes } = props;

            return (
                <div>
                    <InspectorControls>
                    
    <Panel>
      







































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































              
      <PanelBody title="Background Image">
        <PanelRow>
          <div>
            <MediaUpload
              onSelect={ (media) => { 
                setAttributes({ 
                  backgroundurlowY: media.url,
                   backgroundaltaER: media.alt
                }); 
              } }
              type="image"
              value={ attributes.backgroundurlowY }
              render={({ open }) => (
                  <button onClick={ open }>Select Image</button>
              )}
            />
            {attributes.backgroundurlowY && (
                <img src={attributes.backgroundurlowY} alt={attributes.backgroundaltaER} />
            )}
          </div>
        </PanelRow>
      </PanelBody>
      
              
      <PanelBody title="Background Image">
        <PanelRow>
          <div>
            <MediaUpload
              onSelect={ (media) => { 
                setAttributes({ 
                  backgroundurldxQ: media.url,
                   backgroundaltovw: media.alt
                }); 
              } }
              type="image"
              value={ attributes.backgroundurldxQ }
              render={({ open }) => (
                  <button onClick={ open }>Select Image</button>
              )}
            />
            {attributes.backgroundurldxQ && (
                <img src={attributes.backgroundurldxQ} alt={attributes.backgroundaltovw} />
            )}
          </div>
        </PanelRow>
      </PanelBody>
      
              
      <PanelBody title="Background Image">
        <PanelRow>
          <div>
            <MediaUpload
              onSelect={ (media) => { 
                setAttributes({ 
                  backgroundurlPLu: media.url,
                   backgroundaltKHm: media.alt
                }); 
              } }
              type="image"
              value={ attributes.backgroundurlPLu }
              render={({ open }) => (
                  <button onClick={ open }>Select Image</button>
              )}
            />
            {attributes.backgroundurlPLu && (
                <img src={attributes.backgroundurlPLu} alt={attributes.backgroundaltKHm} />
            )}
          </div>
        </PanelRow>
      </PanelBody>
      
              
      <PanelBody title="Background Image">
        <PanelRow>
          <div>
            <MediaUpload
              onSelect={ (media) => { 
                setAttributes({ 
                  backgroundurlUsW: media.url,
                   backgroundaltKpB: media.alt
                }); 
              } }
              type="image"
              value={ attributes.backgroundurlUsW }
              render={({ open }) => (
                  <button onClick={ open }>Select Image</button>
              )}
            />
            {attributes.backgroundurlUsW && (
                <img src={attributes.backgroundurlUsW} alt={attributes.backgroundaltKpB} />
            )}
          </div>
        </PanelRow>
      </PanelBody>
      
              
      <PanelBody title="Background Image">
        <PanelRow>
          <div>
            <MediaUpload
              onSelect={ (media) => { 
                setAttributes({ 
                  backgroundurldpD: media.url,
                   backgroundaltpPk: media.alt
                }); 
              } }
              type="image"
              value={ attributes.backgroundurldpD }
              render={({ open }) => (
                  <button onClick={ open }>Select Image</button>
              )}
            />
            {attributes.backgroundurldpD && (
                <img src={attributes.backgroundurldpD} alt={attributes.backgroundaltpPk} />
            )}
          </div>
        </PanelRow>
      </PanelBody>
      
    </Panel>
                    </InspectorControls>

                    <div>
    <div>
        <div className="relative bg-white">
            <div aria-hidden="true" className="hidden absolute inset-0 sm:flex sm:flex-col">
                <div className="flex-1 relative w-full bg-gray-800">
                    <div className="absolute inset-0 overflow-hidden">
                        <img src={attributes.backgroundurlowY} alt={attributes.backgroundaltaER} className="w-full h-full object-center object-cover"/>
                    </div>
                    <div className="absolute inset-0 bg-gray-900 opacity-50"/>
                </div>
                <div className="w-full bg-white h-32 md:h-40 lg:h-48"/>
            </div>
            <div className="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
                <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
                    <div className="flex-1 relative w-full bg-gray-800">
                        <div className="absolute inset-0 overflow-hidden">
                            <img src={attributes.backgroundurldxQ} alt={attributes.backgroundaltovw} className="w-full h-full object-center object-cover"/>
                        </div>
                        <div className="absolute inset-0 bg-gray-900 opacity-50"/>
                    </div>
                    <div className="w-full bg-white h-48"/>
                </div>
                <div className="relative py-32">
                     <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"><RichText tagName="span" value={attributes.contentYPj} default="Mid-Season Sale" onChange={ (newtext) =>  {
        setAttributes({ contentYPj: newtext });
      }}
    /></h1>

                    <div className="mt-4 sm:mt-6"> <span className="inline-block bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"><RichText tagName="span" value={attributes.contentGAr} default="Shop Collection" onChange={ (newtext) =>  {
        setAttributes({ contentGAr: newtext });
      }}
    /></span>

                    </div>
                </div>
            </div>
            <section aria-labelledby="collection-heading" className="-mt-96 relative sm:mt-0">
                 <h2 id="collection-heading" className="sr-only"><RichText tagName="span" value={attributes.contentRUp} default="Collections" onChange={ (newtext) =>  {
        setAttributes({ contentRUp: newtext });
      }}
    /></h2>

                <div className="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8">
                    <div className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5">
                        <div>
                            <div aria-hidden="true" className="absolute inset-0 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                                    <img src={attributes.backgroundurlPLu} alt={attributes.backgroundaltKHm} className="w-full h-full object-center object-cover"/>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"/>
                            </div>
                            <div className="absolute inset-0 rounded-lg p-6 flex items-end">
                                <div>
                                    <p aria-hidden="true" className="text-sm text-white">
                                        <RichText tagName="span" value={attributes.contentHME} default="Shop the collection" onChange={ (newtext) => { setAttributes({ contentHME: newtext }); }} /></p>
                                     <h3 className="mt-1 font-semibold text-white">
                <span>
                  <span className="absolute inset-0"/><RichText tagName="span" value={attributes.contentMSR} default="Women&#039;s" onChange={ (newtext) =>  {
        setAttributes({ contentMSR: newtext });
      }}
    /></span>
              </h3>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5">
                        <div>
                            <div aria-hidden="true" className="absolute inset-0 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                                    <img src={attributes.backgroundurlUsW} alt={attributes.backgroundaltKpB} className="w-full h-full object-center object-cover"/>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"/>
                            </div>
                            <div className="absolute inset-0 rounded-lg p-6 flex items-end">
                                <div>
                                    <p aria-hidden="true" className="text-sm text-white">
                                        <RichText tagName="span" value={attributes.contentsFB} default="Shop the collection" onChange={ (newtext) => { setAttributes({ contentsFB: newtext }); }} /></p>
                                     <h3 className="mt-1 font-semibold text-white">
                <span>
                  <span className="absolute inset-0"/><RichText tagName="span" value={attributes.contentSak} default="Men&#039;s" onChange={ (newtext) =>  {
        setAttributes({ contentSak: newtext });
      }}
    /></span>
              </h3>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5">
                        <div>
                            <div aria-hidden="true" className="absolute inset-0 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                                    <img src={attributes.backgroundurldpD} alt={attributes.backgroundaltpPk} className="w-full h-full object-center object-cover"/>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"/>
                            </div>
                            <div className="absolute inset-0 rounded-lg p-6 flex items-end">
                                <div>
                                    <p aria-hidden="true" className="text-sm text-white">
                                        <RichText tagName="span" value={attributes.contentZEZ} default="Shop the collection" onChange={ (newtext) => { setAttributes({ contentZEZ: newtext }); }} /></p>
                                     <h3 className="mt-1 font-semibold text-white">
                <span>
                  <span className="absolute inset-0"/><RichText tagName="span" value={attributes.contentGid} default="Desk Accessories" onChange={ (newtext) =>  {
        setAttributes({ contentGid: newtext });
      }}
    /></span>
              </h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
        <div class="relative bg-white">
            <div aria-hidden="true" class="hidden absolute inset-0 sm:flex sm:flex-col">
                <div class="flex-1 relative w-full bg-gray-800">
                    <div class="absolute inset-0 overflow-hidden">
                        <img src={attributes.backgroundurlowY} alt={attributes.backgroundaltaER} class="w-full h-full object-center object-cover"/>
                    </div>
                    <div class="absolute inset-0 bg-gray-900 opacity-50"/>
                </div>
                <div class="w-full bg-white h-32 md:h-40 lg:h-48"/>
            </div>
            <div class="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
                <div aria-hidden="true" class="absolute inset-0 flex flex-col sm:hidden">
                    <div class="flex-1 relative w-full bg-gray-800">
                        <div class="absolute inset-0 overflow-hidden">
                            <img src={attributes.backgroundurldxQ} alt={attributes.backgroundaltovw} class="w-full h-full object-center object-cover"/>
                        </div>
                        <div class="absolute inset-0 bg-gray-900 opacity-50"/>
                    </div>
                    <div class="w-full bg-white h-48"/>
                </div>
                <div class="relative py-32">
                     <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"><RichText.Content value={attributes.contentYPj} /></h1>

                    <div class="mt-4 sm:mt-6"> <span class="inline-block bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"><RichText.Content value={attributes.contentGAr} /></span>

                    </div>
                </div>
            </div>
            <section aria-labelledby="collection-heading" class="-mt-96 relative sm:mt-0">
                 <h2 id="collection-heading" class="sr-only"><RichText.Content value={attributes.contentRUp} /></h2>

                <div class="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8">
                    <div class="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5">
                        <div>
                            <div aria-hidden="true" class="absolute inset-0 rounded-lg overflow-hidden">
                                <div class="absolute inset-0 overflow-hidden group-hover:opacity-75">
                                    <img src={attributes.backgroundurlPLu} alt={attributes.backgroundaltKHm} class="w-full h-full object-center object-cover"/>
                                </div>
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"/>
                            </div>
                            <div class="absolute inset-0 rounded-lg p-6 flex items-end">
                                <div>
                                    <p aria-hidden="true" class="text-sm text-white">
                                        <RichText.Content value={attributes.contentHME} /></p>
                                     <h3 class="mt-1 font-semibold text-white">
                <span>
                  <span class="absolute inset-0"/><RichText.Content value={attributes.contentMSR} /></span>
              </h3>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5">
                        <div>
                            <div aria-hidden="true" class="absolute inset-0 rounded-lg overflow-hidden">
                                <div class="absolute inset-0 overflow-hidden group-hover:opacity-75">
                                    <img src={attributes.backgroundurlUsW} alt={attributes.backgroundaltKpB} class="w-full h-full object-center object-cover"/>
                                </div>
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"/>
                            </div>
                            <div class="absolute inset-0 rounded-lg p-6 flex items-end">
                                <div>
                                    <p aria-hidden="true" class="text-sm text-white">
                                        <RichText.Content value={attributes.contentsFB} /></p>
                                     <h3 class="mt-1 font-semibold text-white">
                <span>
                  <span class="absolute inset-0"/><RichText.Content value={attributes.contentSak} /></span>
              </h3>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5">
                        <div>
                            <div aria-hidden="true" class="absolute inset-0 rounded-lg overflow-hidden">
                                <div class="absolute inset-0 overflow-hidden group-hover:opacity-75">
                                    <img src={attributes.backgroundurldpD} alt={attributes.backgroundaltpPk} class="w-full h-full object-center object-cover"/>
                                </div>
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"/>
                            </div>
                            <div class="absolute inset-0 rounded-lg p-6 flex items-end">
                                <div>
                                    <p aria-hidden="true" class="text-sm text-white">
                                        <RichText.Content value={attributes.contentZEZ} /></p>
                                     <h3 class="mt-1 font-semibold text-white">
                <span>
                  <span class="absolute inset-0"/><RichText.Content value={attributes.contentGid} /></span>
              </h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
            );
            },
        });
        