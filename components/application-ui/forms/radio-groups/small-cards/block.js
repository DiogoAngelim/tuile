
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/small-cards', {
            title: 'small cards',
            icon: (<img src="data:image/jpeg;base64,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8rEd19PxZP0yIhYxEREfsfQAAAAAAAAAAAAAAS31J9/6kolvqT7/ANSBQj9QI/UAAAAAAAAAAAAAA+TENGGiJj9zElZKFpLvETPzGhYn3zJuAHXNKzaTK1IdmqRNR4/6fv8AwctnObirh/mxMR/yY/0bABjapFG5r/MeKc1IiUeYzHaDhZ2+VQd2inE1ZmGhcdsT3wdkAMllOalbDfMWZifmTGNXY1gAAAAAAAAAAAAE+kgT6SBNP6Ij2jBRwXEysxpmYz7HDrfe3IG0GLW+9uRrfe3IG0GLW+9uRrfe3IG0GLW+9uRrfe3IG0GLW+9uRrfe3IG0GLW+9uRrfe3IG0GLW+9uRrfe3IG0GLW+9uRrfe3IG0GLW+9uRrfe3IG0GLW+9uRrfe3IG0GLW+9uRrfe3IG0GLW+9uRrfe3IG0GLW+9uRrfe3IG0GLW+9uRrfe3IGtvqWP3z/oo46HdMz6z+pyASv1NH75/0UcdfsmY9Y/Uza33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBrqfRMe8YKOC3mWmdUzOPc5wJns6z+0wUfG7rOTJLvn6m5A2Axa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2kp9P3mZ/wBmemzM8Q0zMe0yagJf6ftMT/soGWozK8wszEe0SBqBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtBi1vvbka33tyBtJju7T+0QZYd8/U3JrXssYA+k0/oiPaMFHBcTKzGmZjPsBzgxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2gxa33tyNb725A2kt9Sx++f9GTW+9uTTQ7pmfWf1A5B+sg+N6AfQRmfcZn3AsEZn3GZ9wLBGZ9xmfcCwRmfcZn3AsEZn3GZ9wLBGZ9xmfcCwRmfcZn3AsEZn3GZ9wLBGZ9xmfcCwRmfcZn3AsEZn3GZ9wLBGZ9xmfcCwRmfcZn3AsT6EZn3Pqgf//Z" />),
            category: 'common',
            attributes: {
  "contentvCK": {
    "type": "string",
    "default": "RAM"
  },
  "contentMOi": {
    "type": "string",
    "default": "See performance specs"
  },
  "contentYcr": {
    "type": "string",
    "default": "Choose a memory option"
  },
  "contentILo": {
    "type": "string",
    "default": "4 GB"
  },
  "contentkVh": {
    "type": "string",
    "default": "8 GB"
  },
  "contentpRg": {
    "type": "string",
    "default": "16 GB"
  },
  "contentSAV": {
    "type": "string",
    "default": "32 GB"
  },
  "contenthpQ": {
    "type": "string",
    "default": "64 GB"
  },
  "contentsGH": {
    "type": "string",
    "default": "128 GB"
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
            <div className="flex items-center justify-between">
                 <h2 className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentvCK} default="RAM" onChange={ (newtext) =>  {
        setAttributes({ contentvCK: newtext });
      }}
    /></h2>
 <span className="text-sm font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentMOi} default="See performance specs" onChange={ (newtext) =>  {
        setAttributes({ contentMOi: newtext });
      }}
    /></span>

            </div>
            <fieldset className="mt-2">
                <legend className="sr-only">
                    <RichText tagName="span" value={attributes.contentYcr} default="Choose a memory option" onChange={ (newtext) => { setAttributes({ contentYcr: newtext }); }} /></legend>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                        <input type="radio" name="memory-option" value="4 GB" className="sr-only" aria-labelledby="memory-option-0-label"/>
                        <p id="memory-option-0-label">
                            <RichText tagName="span" value={attributes.contentILo} default="4 GB" onChange={ (newtext) => { setAttributes({ contentILo: newtext }); }} /></p>
                    </label>
                    <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                        <input type="radio" name="memory-option" value="8 GB" className="sr-only" aria-labelledby="memory-option-1-label"/>
                        <p id="memory-option-1-label">
                            <RichText tagName="span" value={attributes.contentkVh} default="8 GB" onChange={ (newtext) => { setAttributes({ contentkVh: newtext }); }} /></p>
                    </label>
                    <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                        <input type="radio" name="memory-option" value="16 GB" className="sr-only" aria-labelledby="memory-option-2-label"/>
                        <p id="memory-option-2-label">
                            <RichText tagName="span" value={attributes.contentpRg} default="16 GB" onChange={ (newtext) => { setAttributes({ contentpRg: newtext }); }} /></p>
                    </label>
                    <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                        <input type="radio" name="memory-option" value="32 GB" className="sr-only" aria-labelledby="memory-option-3-label"/>
                        <p id="memory-option-3-label">
                            <RichText tagName="span" value={attributes.contentSAV} default="32 GB" onChange={ (newtext) => { setAttributes({ contentSAV: newtext }); }} /></p>
                    </label>
                    <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                        <input type="radio" name="memory-option" value="64 GB" className="sr-only" aria-labelledby="memory-option-4-label"/>
                        <p id="memory-option-4-label">
                            <RichText tagName="span" value={attributes.contenthpQ} default="64 GB" onChange={ (newtext) => { setAttributes({ contenthpQ: newtext }); }} /></p>
                    </label>
                    <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 opacity-25 cursor-not-allowed">
                        <input type="radio" name="memory-option" value="128 GB" disabled="" className="sr-only" aria-labelledby="memory-option-5-label"/>
                        <p id="memory-option-5-label">
                            <RichText tagName="span" value={attributes.contentsGH} default="128 GB" onChange={ (newtext) => { setAttributes({ contentsGH: newtext }); }} /></p>
                    </label>
                </div>
            </fieldset>
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
            <div class="flex items-center justify-between">
                 <h2 class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentvCK} /></h2>
 <span class="text-sm font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentMOi} /></span>

            </div>
            <fieldset class="mt-2">
                <legend class="sr-only">
                    <RichText.Content value={attributes.contentYcr} /></legend>
                <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    <label class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                        <input type="radio" name="memory-option" value="4 GB" class="sr-only" aria-labelledby="memory-option-0-label"/>
                        <p id="memory-option-0-label">
                            <RichText.Content value={attributes.contentILo} /></p>
                    </label>
                    <label class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                        <input type="radio" name="memory-option" value="8 GB" class="sr-only" aria-labelledby="memory-option-1-label"/>
                        <p id="memory-option-1-label">
                            <RichText.Content value={attributes.contentkVh} /></p>
                    </label>
                    <label class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                        <input type="radio" name="memory-option" value="16 GB" class="sr-only" aria-labelledby="memory-option-2-label"/>
                        <p id="memory-option-2-label">
                            <RichText.Content value={attributes.contentpRg} /></p>
                    </label>
                    <label class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                        <input type="radio" name="memory-option" value="32 GB" class="sr-only" aria-labelledby="memory-option-3-label"/>
                        <p id="memory-option-3-label">
                            <RichText.Content value={attributes.contentSAV} /></p>
                    </label>
                    <label class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                        <input type="radio" name="memory-option" value="64 GB" class="sr-only" aria-labelledby="memory-option-4-label"/>
                        <p id="memory-option-4-label">
                            <RichText.Content value={attributes.contenthpQ} /></p>
                    </label>
                    <label class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 opacity-25 cursor-not-allowed">
                        <input type="radio" name="memory-option" value="128 GB" disabled="" class="sr-only" aria-labelledby="memory-option-5-label"/>
                        <p id="memory-option-5-label">
                            <RichText.Content value={attributes.contentsGH} /></p>
                    </label>
                </div>
            </fieldset>
        </div>
    </div>
</div>
            );
            },
        });
        