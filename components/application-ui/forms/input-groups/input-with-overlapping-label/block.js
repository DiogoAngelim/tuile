
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/input-with-overlapping-label', {
            title: 'input with overlapping label',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAmBaADASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAIDBAYFAQf/xAAyEAABAwQCAgEDAgUEAwEAAAAAAQIDExRSkVOSBBESBSExM7EGMlFhchUjQUJxocHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A/SWMbIxHvajlcnv7/f0av1rwZPP+mL4sCsa6rE9Pl9k9Nka5fx/Zqm5B+hH/AIp+xYHMzfw55kX1bzfL+meY2COfxJGRNX3/ALMz3NVVT7fyr8ff9lX8GDxv4b+oN8iaaZ8CLL5HiS/FfJkmVEiequ9uentVVF+3/H/j8nUxzRySSxsd7fEqI9PX4VU9/spkLR4P+i+TUV3zh+/1RPN/K/yfH16/H5//AHs1/on8OTfTvO8dZUifF4lSlLczOcvy9on+2q/Bv2X7/n3/AGOmAol0cbl9uY1V/qqHyjFxM6oaqfVvB9+lmc1Pkrfk6NzW+/fr+ZU9fn+5ukEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVBRi4mdULAEUYuJnVCXsbGxXsajVanv7fb2ZSJ/0JP8AFf2AQfoR/wCKfsR5Xkx+JCs03tI0VEVUT38fa+va/wBi4P0I/wDFP2LA5vyfIhkZ5k6NbJ48/lsYj3uVsf2YntVVPy32nr+hi8RjfI8WKF6tdD/qStakaqjfjTVfSe/v6+//ALOp9J69evsC1I5jymLBFP40XxZ4kfmoj0f8vi1qsRfS+v8Ar8lPU+gp68aZGSxyRVV+FNHfFqek9onv8p79/j7HpgVXOxed4qfRvI8P5JJ5D3TMSFqe3Kqvd6/cnyGePFJLH9Vevzj8ZieOqqv5Rv3Vvr/t8v8A4dIBUcr5tV0jU+oyRRutGKxZ/l9n+l+St9f9vfr+/wCDpfE+dnDVcrn02/Jyoqe19fn0plAqgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARP+hJ/iv7FkT/oSf4r+wGJ0yeOiMeiqn/Hr+hN9Fi/SAFC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpBfRYv0gAC+ixfpCmzJ5CKxiKiL+ff9AAP/2Q==" />),
            category: 'common',
            attributes: {
  "contentnFX": {
    "type": "string",
    "default": "Name"
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
        <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label for="name" className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">
                <RichText tagName="span" value={attributes.contentnFX} default="Name" onChange={ (newtext) => { setAttributes({ contentnFX: newtext }); }} /></label>
            <input type="text" name="name" id="name" className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Jane Doe"/>
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
        <div class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">
                <RichText.Content value={attributes.contentnFX} /></label>
            <input type="text" name="name" id="name" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Jane Doe"/>
        </div>
    </div>
</div>
            );
            },
        });
        