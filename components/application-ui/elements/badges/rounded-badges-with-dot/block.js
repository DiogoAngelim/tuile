
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/rounded-badges-with-dot', {
            title: 'rounded badges with dot',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAaBaADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAMEBQYCAQf/xAAtEAEAAgECBQIFBAMBAAAAAAAAAQIDBBEFEhMhMRShQVFSYnEVYYGRIjIzsf/EABgBAQEBAQEAAAAAAAAAAAAAAAACAQME/8QAHhEBAQACAgMBAQAAAAAAAAAAAAECEQMSEyExUWH/2gAMAwEAAhEDEQA/AP0idRET2rvH5fPUfZ7oGX+qZP1P03Sjk5+T9/y9GPF2+IuTb9R9nueo+z3UtXbNXR5raWsWzxS046z4m23b3Ymn4rk02DU5c+pzZsmHB1L6bUYYxXiYnvMTEbTX+/gY8Xaem7dR6j7Pc9R9nu56/G9RiyZq5uHTWMFqdWetE7Vv4mO3efnHvKW/Ga04tTQ3xY4579OsxnrN99t95pHeI7efY8P8Ntz1H2e73jyxedttpc1wbWanUZtLXNlm8X0c5LbxHe3Ptv8A039P/wBf4TnxzElSZss1ty1/mUfWyfV7Gf8A62ZPE+I5NHlpjx46zvHNM2/8Vx8ff1GW6a3WyfV7HWyfV7IMV+pipk2mOasTtPw3UOB5cmXBq5y5LXmury1jmnfaIt2j8HSaptrdbJ9XsdbJ9Xs539czV4rjwWtpMmLJn6PLim03p52mbePh3h5pxjiE6G2rth001vm6GCsTaJm/PyxNp+EeVeG/ht0nWyfV7HWyfV7Ob1HG9Zw+dbXX4tPadNhpkrOKZ2vNrcsefELXCOKZdZqsumzxitNKReuTFW0VmJnaY2t8YLxWTejbcx5rc0RbvErClX/aPyuuGc0qACGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKUxMTtPlH0sfU6nTrz+Obbv8A20R08jNM7PirnwXw5N+W9ZrO07T3/dnW4Hiy0y11Oq1We2TFOGL3tXelZnedto89o7zu6IbOWz4aYmfhmDPOpm9skepikX2mO3LPbbsijg2CurjPGfPtGedRGPeOWLzExM+N/j83QDfNTTE0fDMGjvitivkmcWGcMc0x433+XlpaeJ599u0QsicuS5fTSrnjbLP7oL4seTbqY6327xzRvsu54jp77Kqsb6ZRmYeDVwZ75MOv1tK3yzltji9eWZmd5j/Xfb+WmLls+MZWPgOnx5cVo1Gp6eHN1seKbxyVtvMz8P3l61HC614Nk0WnpGb/ACm8RlvNd5m3N5jx57NMb3yGBoOCXvfWW19LVpqMdcfLOect52mZ5ptPx8bfhqaPQ+lve9tVqdRa0RG+a++0R8oiIj+fK2GWdo+1je0RHzXUGmiO87J3DO+1QAQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=" />),
            category: 'common',
            attributes: {
  "contentxmW": {
    "type": "string",
    "default": "\n  Small\n"
  },
  "contentPth": {
    "type": "string",
    "default": "\n  Large\n"
  },
  "svgLXt": {
    "type": "string",
    "default": "<circle cx=\"4\" cy=\"4\" r=\"3\"/>"
  },
  "svgxxq": {
    "type": "string",
    "default": "<circle cx=\"4\" cy=\"4\" r=\"3\"/>"
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
            value={ attributes.svgLXt }
            onChange={ ( value ) => {
              setAttributes({ svgLXt: value });
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
            value={ attributes.svgxxq }
            onChange={ ( value ) => {
              setAttributes({ svgxxq: value });
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
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
  
      <svg
         className="mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8"
          dangerouslySetInnerHTML={ { __html: attributes.svgLXt }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentxmW} default="Small" onChange={ (newtext) =>  {
        setAttributes({ contentxmW: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
  
      <svg
         className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8"
          dangerouslySetInnerHTML={ { __html: attributes.svgxxq }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentPth} default="Large" onChange={ (newtext) =>  {
        setAttributes({ contentPth: newtext });
      }}
    /></span>

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
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
  
      <svg
         class="mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8"
          dangerouslySetInnerHTML={ { __html: attributes.svgLXt }}
        >
      </svg>
      <RichText.Content value={attributes.contentxmW} /></span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
  
      <svg
         class="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8"
          dangerouslySetInnerHTML={ { __html: attributes.svgxxq }}
        >
      </svg>
      <RichText.Content value={attributes.contentPth} /></span>

    </div>
</div>
            );
            },
        });
        