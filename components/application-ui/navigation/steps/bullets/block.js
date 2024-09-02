
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/bullets', {
            title: 'bullets',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAUBaADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAQGAgMFAQf/xAAwEAEAAgICAQMCBAMJAAAAAAAAAQIDBAURIRIxQQYTFCJRYRVCgTJScXKCkaGx0f/EABkBAQADAQEAAAAAAAAAAAAAAAABAgQFA//EAB0RAQEAAgMAAwAAAAAAAAAAAAABAgMEESESIjH/2gAMAwEAAhEDEQA/APpwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADlchzlNTkPwGDS293ZjFGa9NetfyUmeomZtMR56nxHnw6qp/U2HVty1cm1ocriyRg6w8hxvrm/vPeOYrHj4mO+4nsHWp9ScVbNpYb7H2c27SbY8eWPRaOvHVon2nvxH69T0nxu6k7c6kbWCdmI7nD9yPX1/l91P18HJfifpjf5jSzZ81K58We8YPVenqmPtTeI9vEeZ+J7QdPidyvKYsG1j342cfJzsTkx6VZpaPVMxec0/yzHXcd9/HQL3XktC+euvTe1rZrTMVxxlrNpmJ6nqO+/EseT5HHxuvTLfFmzWyZIx48WGvdr2n2iO+o+J8zMQ+fYNeu3x+3p6nEZ7cjl5a+TFu1wd1pFc3m05P5eoiY6/8AV4+pOS2uK4i+xoaGfd2bT6MWLFjm/UzE+bRHn0x1/wBR8g28VyuLk4z0jDm18+tf7ebDmiItSeu49pmJiYnvuJSZ3tONuNSdrBGzMdxhnJHrn/T7uR9JVxU0s8fb3vxN8n3NnPt69sNs15+YiY9o66iI9o6VzY4/POPa47+E7FuVy8p+Ix70Ye6RT7kWi/3PaOqeOu+/joFq0PqDW5HnNvjdWK3/AAtfz5Yy0mJt48RWJ7mI76meuu/DZz3O6fA6cbG5XLkm0z6cWGsWvbqO7TETMeIiO5lE4DSnX5vnc1tX7UZNms47zj9Pqr9uvfU/Md9/1cn6q4rnc2bltzBh09nBk0p18FPXf7uOsx3f01isxNpn9/aIBcsWSMuKmSvcResWjv8AdkicVGzHF60btMdM8Y4i9cczNY/3iJSwAAc3l+c0uIikbVr2veO648cd26/Vt4vldTlcE5dS8z6Z6tW0dWrP7qx9ZcNu7G/Xd1cN89LUitq0juazH7fol/RfE7ejXPsbeO2L7sRWtLeJ6j5mPhuy0aZx/nMvsju9rS158sYcc267n2iGxF36zbDEx/LPljxktkpfxwN36m19banDky5bXrPVvtx4r/y7XG79dvHS1bxet47paPl8+5HiN7HvZPRgyZa3vM1vWvcTEz8/ot30zpZdTVw4sv8AbrM2tH93v4dLkaNWOqXG+qS+rEew8vHqpMfrDlvRhGek268/4tiHGK8269MpkeIAeWtFY7t7PWvPSb0/L7wD2mWt56jvv92aNhx29cTMTER+qSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADVra2DUx2x62KuOlr2vMV+bTPcz/WW0AAAAAAAAAAACfMdSAI9tLDae49UftEtuPFTFXqkdAvlb1ERmAokAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==" />),
            category: 'common',
            attributes: {
  "contentzHq": {
    "type": "string",
    "default": "Step 2 of 4"
  },
  "contentvAI": {
    "type": "string",
    "default": "Step 1"
  },
  "contentayI": {
    "type": "string",
    "default": "Step 2"
  },
  "contentWxs": {
    "type": "string",
    "default": "Step 3"
  },
  "contenthix": {
    "type": "string",
    "default": "Step 4"
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
        <nav className="flex items-center justify-center" aria-label="Progress">
            <p className="text-sm font-medium">
                <RichText tagName="span" value={attributes.contentzHq} default="Step 2 of 4" onChange={ (newtext) => { setAttributes({ contentzHq: newtext }); }} /></p>
            <ol role="list" className="ml-8 flex items-center space-x-5">
                <li> <span className="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900">
        <span className="sr-only"><RichText tagName="span" value={attributes.contentvAI} default="Step 1" onChange={ (newtext) =>  {
        setAttributes({ contentvAI: newtext });
      }}
    /></span>
</span>
                </li>
                <li> <span className="relative flex items-center justify-center" aria-current="step">
        <span className="absolute w-5 h-5 p-px flex" aria-hidden="true">
          <span className="w-full h-full rounded-full bg-indigo-200"/>
</span>
                    <span className="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full" aria-hidden="true"/> <span className="sr-only"><RichText tagName="span" value={attributes.contentayI} default="Step 2" onChange={ (newtext) =>  {
        setAttributes({ contentayI: newtext });
      }}
    /></span>
</span>
                </li>
                <li> <span className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
        <span className="sr-only"><RichText tagName="span" value={attributes.contentWxs} default="Step 3" onChange={ (newtext) =>  {
        setAttributes({ contentWxs: newtext });
      }}
    /></span>
</span>
                </li>
                <li> <span className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
        <span className="sr-only"><RichText tagName="span" value={attributes.contenthix} default="Step 4" onChange={ (newtext) =>  {
        setAttributes({ contenthix: newtext });
      }}
    /></span>
</span>
                </li>
            </ol>
        </nav>
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
        <nav class="flex items-center justify-center" aria-label="Progress">
            <p class="text-sm font-medium">
                <RichText.Content value={attributes.contentzHq} /></p>
            <ol role="list" class="ml-8 flex items-center space-x-5">
                <li> <span class="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900">
        <span class="sr-only"><RichText.Content value={attributes.contentvAI} /></span>
</span>
                </li>
                <li> <span class="relative flex items-center justify-center" aria-current="step">
        <span class="absolute w-5 h-5 p-px flex" aria-hidden="true">
          <span class="w-full h-full rounded-full bg-indigo-200"/>
</span>
                    <span class="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full" aria-hidden="true"/> <span class="sr-only"><RichText.Content value={attributes.contentayI} /></span>
</span>
                </li>
                <li> <span class="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
        <span class="sr-only"><RichText.Content value={attributes.contentWxs} /></span>
</span>
                </li>
                <li> <span class="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
        <span class="sr-only"><RichText.Content value={attributes.contenthix} /></span>
</span>
                </li>
            </ol>
        </nav>
    </div>
</div>
            );
            },
        });
        