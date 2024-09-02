
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/two-column-with-avatar', {
            title: 'two column with avatar',
            icon: (<img src="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGOyimzXxKq56rR7op6oyADFTjUURjGiiuuMVpFQgkl9tDKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL5MoATsXeXyY2LvL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" />),
            category: 'common',
            attributes: {
  "contentLUJ": {
    "type": "string",
    "default": "Ricardo Cooper"
  },
  "contentbId": {
    "type": "string",
    "default": "ricardo.cooper@example.com"
  },
  "contentFVx": {
    "type": "string",
    "default": "\n                    Applied on\n                    "
  },
  "contentgJf": {
    "type": "string",
    "default": "January 7, 2020"
  },
  "contentrYq": {
    "type": "string",
    "default": "\n                    Completed phone screening\n                  "
  },
  "contentXog": {
    "type": "string",
    "default": "Kristen Ramos"
  },
  "contenttCI": {
    "type": "string",
    "default": "kristen.ramos@example.com"
  },
  "contentnbc": {
    "type": "string",
    "default": "\n                    Applied on\n                    "
  },
  "contentbOS": {
    "type": "string",
    "default": "January 7, 2020"
  },
  "contentmzO": {
    "type": "string",
    "default": "\n                    Completed phone screening\n                  "
  },
  "contentubR": {
    "type": "string",
    "default": "Ted Fox"
  },
  "contentrmW": {
    "type": "string",
    "default": "ted.fox@example.com"
  },
  "contentZfP": {
    "type": "string",
    "default": "\n                    Applied on\n                    "
  },
  "contentnnY": {
    "type": "string",
    "default": "January 7, 2020"
  },
  "contentFlZ": {
    "type": "string",
    "default": "\n                    Completed phone screening\n                  "
  },
  "imageurlKUT": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtUHu": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlswQ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1550525811-e5869dd03032.jpeg'
  },
  "imagealtKir": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlEZL": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1500648767791-00dcc994a43e.jpeg'
  },
  "imagealtgrj": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgPba": {
    "type": "string",
    "default": "<path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"/>\n                    <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"/>"
  },
  "svgfSB": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"/>"
  },
  "svgqQa": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgxTZ": {
    "type": "string",
    "default": "<path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"/>\n                    <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"/>"
  },
  "svgwuK": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"/>"
  },
  "svggdB": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgGum": {
    "type": "string",
    "default": "<path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"/>\n                    <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"/>"
  },
  "svghFj": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"/>"
  },
  "svgvpf": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgfSB }
            onChange={ ( value ) => {
              setAttributes({ svgfSB: value });
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
            value={ attributes.svgPba }
            onChange={ ( value ) => {
              setAttributes({ svgPba: value });
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
            value={ attributes.svgfSB }
            onChange={ ( value ) => {
              setAttributes({ svgfSB: value });
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
            value={ attributes.svgqQa }
            onChange={ ( value ) => {
              setAttributes({ svgqQa: value });
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
            value={ attributes.svgxTZ }
            onChange={ ( value ) => {
              setAttributes({ svgxTZ: value });
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
            value={ attributes.svgwuK }
            onChange={ ( value ) => {
              setAttributes({ svgwuK: value });
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
            value={ attributes.svggdB }
            onChange={ ( value ) => {
              setAttributes({ svggdB: value });
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
            value={ attributes.svgGum }
            onChange={ ( value ) => {
              setAttributes({ svgGum: value });
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
            value={ attributes.svghFj }
            onChange={ ( value ) => {
              setAttributes({ svghFj: value });
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
            value={ attributes.svgvpf }
            onChange={ ( value ) => {
              setAttributes({ svgvpf: value });
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
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
                <li> <span className="block hover:bg-gray-50">
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0">
              
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlKUT: media.url,
            imagealtUHu: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlKUT } 
            alt={ attributes.imagealtUHu } 
            onClick={ open } 
            className="h-12 w-12 rounded-full"
          /> 
        )} 
      />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="text-sm font-medium text-indigo-600 truncate"><RichText tagName="span" value={attributes.contentLUJ} default="Ricardo Cooper" onChange={ (newtext) =>  {
        setAttributes({ contentLUJ: newtext });
      }}
    /></p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  
                  
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPba }}
        >
      </svg>
      
                  <span className="truncate"><RichText tagName="span" value={attributes.contentbId} default="ricardo.cooper@example.com" onChange={ (newtext) =>  {
        setAttributes({ contentbId: newtext });
      }}
    /></span>

                    </p>
        </div>
        <div className="hidden md:block">
            <div>
                <p className="text-sm text-gray-900">
                    <RichText tagName="span" value={attributes.contentFVx} default="Applied on" onChange={ (newtext) => { setAttributes({ contentFVx: newtext }); }} />
                        <time datetime="2020-01-07">
                            <RichText tagName="span" value={attributes.contentgJf} default="January 7, 2020" onChange={ (newtext) => { setAttributes({ contentgJf: newtext }); }} /></time>
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                    
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfSB }}
        >
      </svg>
      
                    <RichText tagName="span" value={attributes.contentrYq} default="Completed phone screening" onChange={ (newtext) => { setAttributes({ contentrYq: newtext }); }} /></p>
            </div>
        </div>
    </div>
</div>
<div>
    
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqQa }}
        >
      </svg>
      
</div>
</div>
</span>
</li>
<li> <span className="block hover:bg-gray-50">
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0">
              
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlswQ: media.url,
            imagealtKir: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlswQ } 
            alt={ attributes.imagealtKir } 
            onClick={ open } 
            className="h-12 w-12 rounded-full"
          /> 
        )} 
      />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="text-sm font-medium text-indigo-600 truncate"><RichText tagName="span" value={attributes.contentXog} default="Kristen Ramos" onChange={ (newtext) =>  {
        setAttributes({ contentXog: newtext });
      }}
    /></p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  
                  
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxTZ }}
        >
      </svg>
      
                  <span className="truncate"><RichText tagName="span" value={attributes.contenttCI} default="kristen.ramos@example.com" onChange={ (newtext) =>  {
        setAttributes({ contenttCI: newtext });
      }}
    /></span>

    </p>
    </div>
    <div className="hidden md:block">
        <div>
            <p className="text-sm text-gray-900">
                <RichText tagName="span" value={attributes.contentnbc} default="Applied on" onChange={ (newtext) => { setAttributes({ contentnbc: newtext }); }} />
                    <time datetime="2020-01-07">
                        <RichText tagName="span" value={attributes.contentbOS} default="January 7, 2020" onChange={ (newtext) => { setAttributes({ contentbOS: newtext }); }} /></time>
            </p>
            <p className="mt-2 flex items-center text-sm text-gray-500">
                
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwuK }}
        >
      </svg>
      
                <RichText tagName="span" value={attributes.contentmzO} default="Completed phone screening" onChange={ (newtext) => { setAttributes({ contentmzO: newtext }); }} /></p>
        </div>
    </div>
    </div>
    </div>
    <div>
        
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggdB }}
        >
      </svg>
      
    </div>
    </div>
    </span>
</li>
<li> <span className="block hover:bg-gray-50">
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0">
              
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlEZL: media.url,
            imagealtgrj: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlEZL } 
            alt={ attributes.imagealtgrj } 
            onClick={ open } 
            className="h-12 w-12 rounded-full"
          /> 
        )} 
      />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="text-sm font-medium text-indigo-600 truncate"><RichText tagName="span" value={attributes.contentubR} default="Ted Fox" onChange={ (newtext) =>  {
        setAttributes({ contentubR: newtext });
      }}
    /></p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  
                  
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGum }}
        >
      </svg>
      
                  <span className="truncate"><RichText tagName="span" value={attributes.contentrmW} default="ted.fox@example.com" onChange={ (newtext) =>  {
        setAttributes({ contentrmW: newtext });
      }}
    /></span>

    </p>
    </div>
    <div className="hidden md:block">
        <div>
            <p className="text-sm text-gray-900">
                <RichText tagName="span" value={attributes.contentZfP} default="Applied on" onChange={ (newtext) => { setAttributes({ contentZfP: newtext }); }} />
                    <time datetime="2020-01-07">
                        <RichText tagName="span" value={attributes.contentnnY} default="January 7, 2020" onChange={ (newtext) => { setAttributes({ contentnnY: newtext }); }} /></time>
            </p>
            <p className="mt-2 flex items-center text-sm text-gray-500">
                
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghFj }}
        >
      </svg>
      
                <RichText tagName="span" value={attributes.contentFlZ} default="Completed phone screening" onChange={ (newtext) => { setAttributes({ contentFlZ: newtext }); }} /></p>
        </div>
    </div>
    </div>
    </div>
    <div>
        
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvpf }}
        >
      </svg>
      
    </div>
    </div>
    </span>
</li>
</ul>
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
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" class="divide-y divide-gray-200">
                <li> <span class="block hover:bg-gray-50">
        <div class="flex items-center px-4 py-4 sm:px-6">
          <div class="min-w-0 flex-1 flex items-center">
            <div class="flex-shrink-0">
              
      <img
            src={ attributes.imageurlKUT } 
            alt={ attributes.imagealtUHu } 
            class="h-12 w-12 rounded-full"
          />
            </div>
            <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p class="text-sm font-medium text-indigo-600 truncate"><RichText.Content value={attributes.contentLUJ} /></p>
                <p class="mt-2 flex items-center text-sm text-gray-500">
                  
                  
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPba }}
        >
      </svg>
      
                  <span class="truncate"><RichText.Content value={attributes.contentbId} /></span>

                    </p>
        </div>
        <div class="hidden md:block">
            <div>
                <p class="text-sm text-gray-900">
                    <RichText.Content value={attributes.contentFVx} />
                        <time datetime="2020-01-07">
                            <RichText.Content value={attributes.contentgJf} /></time>
                </p>
                <p class="mt-2 flex items-center text-sm text-gray-500">
                    
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfSB }}
        >
      </svg>
      
                    <RichText.Content value={attributes.contentrYq} /></p>
            </div>
        </div>
    </div>
</div>
<div>
    
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqQa }}
        >
      </svg>
      
</div>
</div>
</span>
</li>
<li> <span class="block hover:bg-gray-50">
        <div class="flex items-center px-4 py-4 sm:px-6">
          <div class="min-w-0 flex-1 flex items-center">
            <div class="flex-shrink-0">
              
      <img
            src={ attributes.imageurlswQ } 
            alt={ attributes.imagealtKir } 
            class="h-12 w-12 rounded-full"
          />
            </div>
            <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p class="text-sm font-medium text-indigo-600 truncate"><RichText.Content value={attributes.contentXog} /></p>
                <p class="mt-2 flex items-center text-sm text-gray-500">
                  
                  
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxTZ }}
        >
      </svg>
      
                  <span class="truncate"><RichText.Content value={attributes.contenttCI} /></span>

    </p>
    </div>
    <div class="hidden md:block">
        <div>
            <p class="text-sm text-gray-900">
                <RichText.Content value={attributes.contentnbc} />
                    <time datetime="2020-01-07">
                        <RichText.Content value={attributes.contentbOS} /></time>
            </p>
            <p class="mt-2 flex items-center text-sm text-gray-500">
                
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwuK }}
        >
      </svg>
      
                <RichText.Content value={attributes.contentmzO} /></p>
        </div>
    </div>
    </div>
    </div>
    <div>
        
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggdB }}
        >
      </svg>
      
    </div>
    </div>
    </span>
</li>
<li> <span class="block hover:bg-gray-50">
        <div class="flex items-center px-4 py-4 sm:px-6">
          <div class="min-w-0 flex-1 flex items-center">
            <div class="flex-shrink-0">
              
      <img
            src={ attributes.imageurlEZL } 
            alt={ attributes.imagealtgrj } 
            class="h-12 w-12 rounded-full"
          />
            </div>
            <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p class="text-sm font-medium text-indigo-600 truncate"><RichText.Content value={attributes.contentubR} /></p>
                <p class="mt-2 flex items-center text-sm text-gray-500">
                  
                  
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGum }}
        >
      </svg>
      
                  <span class="truncate"><RichText.Content value={attributes.contentrmW} /></span>

    </p>
    </div>
    <div class="hidden md:block">
        <div>
            <p class="text-sm text-gray-900">
                <RichText.Content value={attributes.contentZfP} />
                    <time datetime="2020-01-07">
                        <RichText.Content value={attributes.contentnnY} /></time>
            </p>
            <p class="mt-2 flex items-center text-sm text-gray-500">
                
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghFj }}
        >
      </svg>
      
                <RichText.Content value={attributes.contentFlZ} /></p>
        </div>
    </div>
    </div>
    </div>
    <div>
        
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvpf }}
        >
      </svg>
      
    </div>
    </div>
    </span>
</li>
</ul>
</div>
</div>
</div>
            );
            },
        });
        