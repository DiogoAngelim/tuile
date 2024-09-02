
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/stacked-cards', {
            title: 'stacked cards',
            icon: (<img src="data:image/jpeg;base64,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76gUBPJJu+oySbvqBQE8km76jJJu+oFATySbvqMkm76gUBPJJu+oySbvqBQE8km76jJJu+oFATySbvqMkm76gUBPJJu+oySbvqBQE8km76jJJu+oFATySbvqMkm76gUBPJJu+oySbvqBQE8km76jJJu+oFATySbvqMkm76gUBPJJu+oySbvqBQE8km76jJJu+oFATySbvqMkm76gUBPJJu+oySbvqBQE8km76jJJu+oFATySbvqMkm76gUBPJJu+oySbvqBQE8km76jJJu+oFATySbvqMkm76gUBPJJu+oySbvqBQE8km76jJJu+oFATySbvqMkm76gUBPJJu+oySbvqBQE8km76jJJu+oFATySbvqMkm76gUBPJJu+oySbvqBQE8km76jJJu+oFATySbvqMkm76gUBPJJu+oySbvqBQE8km76jJJu+oFATySbvqMkm76gUBPJJu+oySbvqBQE8km76jJJu+oFATySbvqMkm76gUBPJJu+oySbvqBQE8km76jJJu+oFATySbvqMkm76gUBPJJu+oySbvqBQE8km76jJJu+oFATySbvqMkm76gUBPJJu+oySbvqBQE8km76jJJu+oFATySbvqMkm76gUBPJJu+oySbvqBQE8km76jJJu+oFATySbvqMz41TOuZq/fwAg+k0oTg+i0oAACqiYYqiY/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfMcjJYmyxPa+N6I5rmrijkX4VFPpFRfhQAGKLjgvwABOf6TihOf6LgEH0WlCcH0WlAB47rfTnv6tX1r6Gl6xT5GtdFfyzUmDe+X7Jj/AHfZT2Jl1/4e6X1CpfUVNO5ZZGo2RWSvZcRPhHI1Ux/kuDE6dNJUfiejnp+o1DaF3SmzNjlRF/SjkTByr9/urvn98CdB17qDurUTHVUtTTVzJla51GkUaZWq5FYv9yp2w7npn9I6e+emm/LNa+lZkhViq1Gt04IuCp+y9jmpfw10ikqI54KR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" />),
            category: 'common',
            attributes: {
  "contentHAs": {
    "type": "string",
    "default": "Server size"
  },
  "contentzrL": {
    "type": "string",
    "default": "Hobby"
  },
  "contentdAa": {
    "type": "string",
    "default": "8GB / 4 CPUs"
  },
  "contentIbf": {
    "type": "string",
    "default": "&middot;"
  },
  "contentLMe": {
    "type": "string",
    "default": "160 GB SSD disk"
  },
  "contentGwh": {
    "type": "string",
    "default": "$40"
  },
  "contentfSD": {
    "type": "string",
    "default": "/mo"
  },
  "contentXGX": {
    "type": "string",
    "default": "Startup"
  },
  "contentwnG": {
    "type": "string",
    "default": "12GB / 6 CPUs"
  },
  "contentLWG": {
    "type": "string",
    "default": "&middot;"
  },
  "contentnnr": {
    "type": "string",
    "default": "256 GB SSD disk"
  },
  "contentOfL": {
    "type": "string",
    "default": "$80"
  },
  "contentAPY": {
    "type": "string",
    "default": "/mo"
  },
  "contentbxp": {
    "type": "string",
    "default": "Business"
  },
  "contentbnN": {
    "type": "string",
    "default": "16GB / 8 CPUs"
  },
  "contentQvo": {
    "type": "string",
    "default": "&middot;"
  },
  "contentrom": {
    "type": "string",
    "default": "512 GB SSD disk"
  },
  "contentnQQ": {
    "type": "string",
    "default": "$160"
  },
  "contentlMT": {
    "type": "string",
    "default": "/mo"
  },
  "contentURu": {
    "type": "string",
    "default": "Enterprise"
  },
  "contentRyK": {
    "type": "string",
    "default": "32GB / 12 CPUs"
  },
  "contentvcR": {
    "type": "string",
    "default": "&middot;"
  },
  "contentpon": {
    "type": "string",
    "default": "1024 GB SSD disk"
  },
  "contentISz": {
    "type": "string",
    "default": "$240"
  },
  "contentHFJ": {
    "type": "string",
    "default": "/mo"
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
        <fieldset>
            <legend className="sr-only">
                <RichText tagName="span" value={attributes.contentHAs} default="Server size" onChange={ (newtext) => { setAttributes({ contentHAs: newtext }); }} /></legend>
            <div className="space-y-4">
                <label className="relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none">
                    <input type="radio" name="server-size" value="Hobby" className="sr-only" aria-labelledby="server-size-0-label" aria-describedby="server-size-0-description-0 server-size-0-description-1"/>
                    <div className="flex items-center">
                        <div className="text-sm">
                            <p id="server-size-0-label" className="font-medium text-gray-900">
                                <RichText tagName="span" value={attributes.contentzrL} default="Hobby" onChange={ (newtext) => { setAttributes({ contentzrL: newtext }); }} /></p>
                            <div id="server-size-0-description-0" className="text-gray-500">
                                <p className="sm:inline">
                                    <RichText tagName="span" value={attributes.contentdAa} default="8GB / 4 CPUs" onChange={ (newtext) => { setAttributes({ contentdAa: newtext }); }} /></p> <span className="hidden sm:inline sm:mx-1" aria-hidden="true"><RichText tagName="span" value={attributes.contentIbf} default="&middot;" onChange={ (newtext) =>  {
        setAttributes({ contentIbf: newtext });
      }}
    /></span>

                                <p className="sm:inline">
                                    <RichText tagName="span" value={attributes.contentLMe} default="160 GB SSD disk" onChange={ (newtext) => { setAttributes({ contentLMe: newtext }); }} /></p>
                            </div>
                        </div>
                    </div>
                    <div id="server-size-0-description-1" className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                        <div className="font-medium text-gray-900">
                            <RichText tagName="span" value={attributes.contentGwh} default="$40" onChange={ (newtext) => { setAttributes({ contentGwh: newtext }); }} /></div>
                        <div className="ml-1 text-gray-500 sm:ml-0">
                            <RichText tagName="span" value={attributes.contentfSD} default="/mo" onChange={ (newtext) => { setAttributes({ contentfSD: newtext }); }} /></div>
                    </div>
                    <div className="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                </label>
                <label className="relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none">
                    <input type="radio" name="server-size" value="Startup" className="sr-only" aria-labelledby="server-size-1-label" aria-describedby="server-size-1-description-0 server-size-1-description-1"/>
                    <div className="flex items-center">
                        <div className="text-sm">
                            <p id="server-size-1-label" className="font-medium text-gray-900">
                                <RichText tagName="span" value={attributes.contentXGX} default="Startup" onChange={ (newtext) => { setAttributes({ contentXGX: newtext }); }} /></p>
                            <div id="server-size-1-description-0" className="text-gray-500">
                                <p className="sm:inline">
                                    <RichText tagName="span" value={attributes.contentwnG} default="12GB / 6 CPUs" onChange={ (newtext) => { setAttributes({ contentwnG: newtext }); }} /></p> <span className="hidden sm:inline sm:mx-1" aria-hidden="true"><RichText tagName="span" value={attributes.contentLWG} default="&middot;" onChange={ (newtext) =>  {
        setAttributes({ contentLWG: newtext });
      }}
    /></span>

                                <p className="sm:inline">
                                    <RichText tagName="span" value={attributes.contentnnr} default="256 GB SSD disk" onChange={ (newtext) => { setAttributes({ contentnnr: newtext }); }} /></p>
                            </div>
                        </div>
                    </div>
                    <div id="server-size-1-description-1" className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                        <div className="font-medium text-gray-900">
                            <RichText tagName="span" value={attributes.contentOfL} default="$80" onChange={ (newtext) => { setAttributes({ contentOfL: newtext }); }} /></div>
                        <div className="ml-1 text-gray-500 sm:ml-0">
                            <RichText tagName="span" value={attributes.contentAPY} default="/mo" onChange={ (newtext) => { setAttributes({ contentAPY: newtext }); }} /></div>
                    </div>
                    <div className="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                </label>
                <label className="relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none">
                    <input type="radio" name="server-size" value="Business" className="sr-only" aria-labelledby="server-size-2-label" aria-describedby="server-size-2-description-0 server-size-2-description-1"/>
                    <div className="flex items-center">
                        <div className="text-sm">
                            <p id="server-size-2-label" className="font-medium text-gray-900">
                                <RichText tagName="span" value={attributes.contentbxp} default="Business" onChange={ (newtext) => { setAttributes({ contentbxp: newtext }); }} /></p>
                            <div id="server-size-2-description-0" className="text-gray-500">
                                <p className="sm:inline">
                                    <RichText tagName="span" value={attributes.contentbnN} default="16GB / 8 CPUs" onChange={ (newtext) => { setAttributes({ contentbnN: newtext }); }} /></p> <span className="hidden sm:inline sm:mx-1" aria-hidden="true"><RichText tagName="span" value={attributes.contentQvo} default="&middot;" onChange={ (newtext) =>  {
        setAttributes({ contentQvo: newtext });
      }}
    /></span>

                                <p className="sm:inline">
                                    <RichText tagName="span" value={attributes.contentrom} default="512 GB SSD disk" onChange={ (newtext) => { setAttributes({ contentrom: newtext }); }} /></p>
                            </div>
                        </div>
                    </div>
                    <div id="server-size-2-description-1" className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                        <div className="font-medium text-gray-900">
                            <RichText tagName="span" value={attributes.contentnQQ} default="$160" onChange={ (newtext) => { setAttributes({ contentnQQ: newtext }); }} /></div>
                        <div className="ml-1 text-gray-500 sm:ml-0">
                            <RichText tagName="span" value={attributes.contentlMT} default="/mo" onChange={ (newtext) => { setAttributes({ contentlMT: newtext }); }} /></div>
                    </div>
                    <div className="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                </label>
                <label className="relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none">
                    <input type="radio" name="server-size" value="Enterprise" className="sr-only" aria-labelledby="server-size-3-label" aria-describedby="server-size-3-description-0 server-size-3-description-1"/>
                    <div className="flex items-center">
                        <div className="text-sm">
                            <p id="server-size-3-label" className="font-medium text-gray-900">
                                <RichText tagName="span" value={attributes.contentURu} default="Enterprise" onChange={ (newtext) => { setAttributes({ contentURu: newtext }); }} /></p>
                            <div id="server-size-3-description-0" className="text-gray-500">
                                <p className="sm:inline">
                                    <RichText tagName="span" value={attributes.contentRyK} default="32GB / 12 CPUs" onChange={ (newtext) => { setAttributes({ contentRyK: newtext }); }} /></p> <span className="hidden sm:inline sm:mx-1" aria-hidden="true"><RichText tagName="span" value={attributes.contentvcR} default="&middot;" onChange={ (newtext) =>  {
        setAttributes({ contentvcR: newtext });
      }}
    /></span>

                                <p className="sm:inline">
                                    <RichText tagName="span" value={attributes.contentpon} default="1024 GB SSD disk" onChange={ (newtext) => { setAttributes({ contentpon: newtext }); }} /></p>
                            </div>
                        </div>
                    </div>
                    <div id="server-size-3-description-1" className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                        <div className="font-medium text-gray-900">
                            <RichText tagName="span" value={attributes.contentISz} default="$240" onChange={ (newtext) => { setAttributes({ contentISz: newtext }); }} /></div>
                        <div className="ml-1 text-gray-500 sm:ml-0">
                            <RichText tagName="span" value={attributes.contentHFJ} default="/mo" onChange={ (newtext) => { setAttributes({ contentHFJ: newtext }); }} /></div>
                    </div>
                    <div className="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                </label>
            </div>
        </fieldset>
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
        <fieldset>
            <legend class="sr-only">
                <RichText.Content value={attributes.contentHAs} /></legend>
            <div class="space-y-4">
                <label class="relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none">
                    <input type="radio" name="server-size" value="Hobby" class="sr-only" aria-labelledby="server-size-0-label" aria-describedby="server-size-0-description-0 server-size-0-description-1"/>
                    <div class="flex items-center">
                        <div class="text-sm">
                            <p id="server-size-0-label" class="font-medium text-gray-900">
                                <RichText.Content value={attributes.contentzrL} /></p>
                            <div id="server-size-0-description-0" class="text-gray-500">
                                <p class="sm:inline">
                                    <RichText.Content value={attributes.contentdAa} /></p> <span class="hidden sm:inline sm:mx-1" aria-hidden="true"><RichText.Content value={attributes.contentIbf} /></span>

                                <p class="sm:inline">
                                    <RichText.Content value={attributes.contentLMe} /></p>
                            </div>
                        </div>
                    </div>
                    <div id="server-size-0-description-1" class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                        <div class="font-medium text-gray-900">
                            <RichText.Content value={attributes.contentGwh} /></div>
                        <div class="ml-1 text-gray-500 sm:ml-0">
                            <RichText.Content value={attributes.contentfSD} /></div>
                    </div>
                    <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                </label>
                <label class="relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none">
                    <input type="radio" name="server-size" value="Startup" class="sr-only" aria-labelledby="server-size-1-label" aria-describedby="server-size-1-description-0 server-size-1-description-1"/>
                    <div class="flex items-center">
                        <div class="text-sm">
                            <p id="server-size-1-label" class="font-medium text-gray-900">
                                <RichText.Content value={attributes.contentXGX} /></p>
                            <div id="server-size-1-description-0" class="text-gray-500">
                                <p class="sm:inline">
                                    <RichText.Content value={attributes.contentwnG} /></p> <span class="hidden sm:inline sm:mx-1" aria-hidden="true"><RichText.Content value={attributes.contentLWG} /></span>

                                <p class="sm:inline">
                                    <RichText.Content value={attributes.contentnnr} /></p>
                            </div>
                        </div>
                    </div>
                    <div id="server-size-1-description-1" class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                        <div class="font-medium text-gray-900">
                            <RichText.Content value={attributes.contentOfL} /></div>
                        <div class="ml-1 text-gray-500 sm:ml-0">
                            <RichText.Content value={attributes.contentAPY} /></div>
                    </div>
                    <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                </label>
                <label class="relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none">
                    <input type="radio" name="server-size" value="Business" class="sr-only" aria-labelledby="server-size-2-label" aria-describedby="server-size-2-description-0 server-size-2-description-1"/>
                    <div class="flex items-center">
                        <div class="text-sm">
                            <p id="server-size-2-label" class="font-medium text-gray-900">
                                <RichText.Content value={attributes.contentbxp} /></p>
                            <div id="server-size-2-description-0" class="text-gray-500">
                                <p class="sm:inline">
                                    <RichText.Content value={attributes.contentbnN} /></p> <span class="hidden sm:inline sm:mx-1" aria-hidden="true"><RichText.Content value={attributes.contentQvo} /></span>

                                <p class="sm:inline">
                                    <RichText.Content value={attributes.contentrom} /></p>
                            </div>
                        </div>
                    </div>
                    <div id="server-size-2-description-1" class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                        <div class="font-medium text-gray-900">
                            <RichText.Content value={attributes.contentnQQ} /></div>
                        <div class="ml-1 text-gray-500 sm:ml-0">
                            <RichText.Content value={attributes.contentlMT} /></div>
                    </div>
                    <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                </label>
                <label class="relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none">
                    <input type="radio" name="server-size" value="Enterprise" class="sr-only" aria-labelledby="server-size-3-label" aria-describedby="server-size-3-description-0 server-size-3-description-1"/>
                    <div class="flex items-center">
                        <div class="text-sm">
                            <p id="server-size-3-label" class="font-medium text-gray-900">
                                <RichText.Content value={attributes.contentURu} /></p>
                            <div id="server-size-3-description-0" class="text-gray-500">
                                <p class="sm:inline">
                                    <RichText.Content value={attributes.contentRyK} /></p> <span class="hidden sm:inline sm:mx-1" aria-hidden="true"><RichText.Content value={attributes.contentvcR} /></span>

                                <p class="sm:inline">
                                    <RichText.Content value={attributes.contentpon} /></p>
                            </div>
                        </div>
                    </div>
                    <div id="server-size-3-description-1" class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                        <div class="font-medium text-gray-900">
                            <RichText.Content value={attributes.contentISz} /></div>
                        <div class="ml-1 text-gray-500 sm:ml-0">
                            <RichText.Content value={attributes.contentHFJ} /></div>
                    </div>
                    <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"/>
                </label>
            </div>
        </fieldset>
    </div>
</div>
            );
            },
        });
        