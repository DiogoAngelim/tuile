
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-full-width-flyouts', {
            title: 'with full width flyouts',
            icon: (<img src="data:image/jpeg;base64,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" />),
            category: 'common',
            attributes: {
  "contentxkH": {
    "type": "string",
    "default": "Workflow"
  },
  "contentpqn": {
    "type": "string",
    "default": "Open menu"
  },
  "contentlXv": {
    "type": "string",
    "default": "Solutions"
  },
  "contentMkI": {
    "type": "string",
    "default": "Analytics"
  },
  "contentTdE": {
    "type": "string",
    "default": "Get a better understanding of where your traffic is coming from."
  },
  "contentTgf": {
    "type": "string",
    "default": "Learn more "
  },
  "contentLbW": {
    "type": "string",
    "default": "&rarr;"
  },
  "contentoSR": {
    "type": "string",
    "default": "Engagement"
  },
  "contentgjG": {
    "type": "string",
    "default": "Speak directly to your customers in a more meaningful way."
  },
  "contentiup": {
    "type": "string",
    "default": "Learn more "
  },
  "contentyAL": {
    "type": "string",
    "default": "&rarr;"
  },
  "contentReD": {
    "type": "string",
    "default": "Security"
  },
  "contentKta": {
    "type": "string",
    "default": "Your customers&#039; data will be safe and secure."
  },
  "contentHyS": {
    "type": "string",
    "default": "Learn more "
  },
  "contentiYx": {
    "type": "string",
    "default": "&rarr;"
  },
  "contentYhr": {
    "type": "string",
    "default": "Integrations"
  },
  "contentQnK": {
    "type": "string",
    "default": "Connect with third-party tools that you&#039;re already using."
  },
  "contentXsr": {
    "type": "string",
    "default": "Learn more "
  },
  "contentFWX": {
    "type": "string",
    "default": "&rarr;"
  },
  "contentmLO": {
    "type": "string",
    "default": "Watch Demo"
  },
  "contentRWI": {
    "type": "string",
    "default": "View All Products"
  },
  "contentkSQ": {
    "type": "string",
    "default": "Contact Sales"
  },
  "contentNBA": {
    "type": "string",
    "default": " Pricing "
  },
  "contentZJK": {
    "type": "string",
    "default": " Docs "
  },
  "contentXJI": {
    "type": "string",
    "default": "More"
  },
  "contentJfC": {
    "type": "string",
    "default": "Company"
  },
  "contenttzy": {
    "type": "string",
    "default": "About"
  },
  "contentCZx": {
    "type": "string",
    "default": "Customers"
  },
  "contentueL": {
    "type": "string",
    "default": "Press"
  },
  "contentYWs": {
    "type": "string",
    "default": "Careers"
  },
  "contentkOZ": {
    "type": "string",
    "default": "Privacy"
  },
  "contentIZO": {
    "type": "string",
    "default": "Resources"
  },
  "contentvLN": {
    "type": "string",
    "default": "Community"
  },
  "contentweb": {
    "type": "string",
    "default": "Partners"
  },
  "contentIQu": {
    "type": "string",
    "default": "Guides"
  },
  "contentpVb": {
    "type": "string",
    "default": "Webinars"
  },
  "contentvKO": {
    "type": "string",
    "default": "From the blog"
  },
  "contenttaN": {
    "type": "string",
    "default": "Boost your conversion rate"
  },
  "contentVis": {
    "type": "string",
    "default": "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus."
  },
  "contentbrc": {
    "type": "string",
    "default": "How to use search engine optimization to drive traffic to your site"
  },
  "contentMFj": {
    "type": "string",
    "default": "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus."
  },
  "contentskK": {
    "type": "string",
    "default": " View all posts "
  },
  "contentPuD": {
    "type": "string",
    "default": "&rarr;"
  },
  "contentVzm": {
    "type": "string",
    "default": " Sign in "
  },
  "contentBZR": {
    "type": "string",
    "default": " Sign up "
  },
  "contentyNr": {
    "type": "string",
    "default": "Close menu"
  },
  "contentQvr": {
    "type": "string",
    "default": "Analytics"
  },
  "contentEqr": {
    "type": "string",
    "default": "Engagement"
  },
  "contentblf": {
    "type": "string",
    "default": "Security"
  },
  "contentshG": {
    "type": "string",
    "default": "Integrations"
  },
  "contentXCd": {
    "type": "string",
    "default": " View all products "
  },
  "contentoJl": {
    "type": "string",
    "default": "&rarr;"
  },
  "contentiyd": {
    "type": "string",
    "default": " Pricing "
  },
  "contentyRS": {
    "type": "string",
    "default": " Docs "
  },
  "contentgmw": {
    "type": "string",
    "default": " Company "
  },
  "contentmWq": {
    "type": "string",
    "default": " Resources "
  },
  "contentyTh": {
    "type": "string",
    "default": " Blog "
  },
  "contentrNQ": {
    "type": "string",
    "default": " Contact Sales "
  },
  "contentEzI": {
    "type": "string",
    "default": " Sign up "
  },
  "contentfqD": {
    "type": "string",
    "default": "\n            Existing customer?\n            "
  },
  "contentAte": {
    "type": "string",
    "default": " Sign in "
  },
  "imageurlnNI": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtybH": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlbTr": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1558478551-1a378f63328e.jpeg'
  },
  "imagealtOIf": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlnJg": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1486312338219-ce68d2c6f44d.jpeg'
  },
  "imagealtSor": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlSxn": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtBdJ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "svgAwf": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgrWo": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgEyg": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgdIX": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122\"/>"
  },
  "svgMPv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"/>"
  },
  "svgFwf": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
  },
  "svgMlg": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z\"/>\n                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgUGK": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgiBP": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\"/>"
  },
  "svgPpA": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgTVY": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgoHF": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4\"/>"
  },
  "svgOty": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z\"/>"
  },
  "svgMsO": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\"/>"
  },
  "svgYFv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"/>"
  },
  "svgXqW": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\"/>"
  },
  "svgdHo": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9\"/>"
  },
  "svgZNs": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgeJG": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\"/>"
  },
  "svgcGj": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgLEv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgeUB": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122\"/>"
  },
  "svgsmR": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"/>"
  },
  "svgiFc": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\"/>"
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
            value={ attributes.svgAwf }
            onChange={ ( value ) => {
              setAttributes({ svgAwf: value });
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
            value={ attributes.svgrWo }
            onChange={ ( value ) => {
              setAttributes({ svgrWo: value });
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
            value={ attributes.svgEyg }
            onChange={ ( value ) => {
              setAttributes({ svgEyg: value });
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
            value={ attributes.svgdIX }
            onChange={ ( value ) => {
              setAttributes({ svgdIX: value });
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
            value={ attributes.svgMPv }
            onChange={ ( value ) => {
              setAttributes({ svgMPv: value });
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
            value={ attributes.svgFwf }
            onChange={ ( value ) => {
              setAttributes({ svgFwf: value });
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
            value={ attributes.svgMlg }
            onChange={ ( value ) => {
              setAttributes({ svgMlg: value });
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
            value={ attributes.svgUGK }
            onChange={ ( value ) => {
              setAttributes({ svgUGK: value });
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
            value={ attributes.svgiBP }
            onChange={ ( value ) => {
              setAttributes({ svgiBP: value });
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
            value={ attributes.svgPpA }
            onChange={ ( value ) => {
              setAttributes({ svgPpA: value });
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
            value={ attributes.svgTVY }
            onChange={ ( value ) => {
              setAttributes({ svgTVY: value });
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
            value={ attributes.svgoHF }
            onChange={ ( value ) => {
              setAttributes({ svgoHF: value });
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
            value={ attributes.svgOty }
            onChange={ ( value ) => {
              setAttributes({ svgOty: value });
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
            value={ attributes.svgMsO }
            onChange={ ( value ) => {
              setAttributes({ svgMsO: value });
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
            value={ attributes.svgYFv }
            onChange={ ( value ) => {
              setAttributes({ svgYFv: value });
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
            value={ attributes.svgXqW }
            onChange={ ( value ) => {
              setAttributes({ svgXqW: value });
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
            value={ attributes.svgdHo }
            onChange={ ( value ) => {
              setAttributes({ svgdHo: value });
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
            value={ attributes.svgZNs }
            onChange={ ( value ) => {
              setAttributes({ svgZNs: value });
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
            value={ attributes.svgeJG }
            onChange={ ( value ) => {
              setAttributes({ svgeJG: value });
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
            value={ attributes.svgcGj }
            onChange={ ( value ) => {
              setAttributes({ svgcGj: value });
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
            value={ attributes.svgLEv }
            onChange={ ( value ) => {
              setAttributes({ svgLEv: value });
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
            value={ attributes.svgeUB }
            onChange={ ( value ) => {
              setAttributes({ svgeUB: value });
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
            value={ attributes.svgsmR }
            onChange={ ( value ) => {
              setAttributes({ svgsmR: value });
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
            value={ attributes.svgiFc }
            onChange={ ( value ) => {
              setAttributes({ svgiFc: value });
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
        <div className="relative bg-white">
            <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"/>
            <div className="relative z-20">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                    <div> <span className="flex">
          <span className="sr-only"><RichText tagName="span" value={attributes.contentxkH} default="Workflow" onChange={ (newtext) =>  {
        setAttributes({ contentxkH: newtext });
      }}
    /></span>

                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlnNI: media.url,
            imagealtybH: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlnNI } 
            alt={ attributes.imagealtybH } 
            onClick={ open } 
            className="h-8 w-auto sm:h-10"
          /> 
        )} 
      />
                        </span>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentpqn} default="Open menu" onChange={ (newtext) =>  {
        setAttributes({ contentpqn: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAwf }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                        <nav className="flex space-x-10">
                            <div>
                                <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentlXv} default="Solutions" onChange={ (newtext) =>  {
        setAttributes({ contentlXv: newtext });
      }}
    /></span>

                                    
      <svg
         className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrWo }}
        >
      </svg>
      
                                </button>
                                <div className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                                    <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16"> <span className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                  <div className="flex md:h-full lg:flex-col">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        
                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEyg }}
        >
      </svg>
      
                      </span>

                                    </div>
                                    <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                        <div>
                                            <p className="text-base font-medium text-gray-900">
                                                <RichText tagName="span" value={attributes.contentMkI} default="Analytics" onChange={ (newtext) => { setAttributes({ contentMkI: newtext }); }} /></p>
                                            <p className="mt-1 text-sm text-gray-500">
                                                <RichText tagName="span" value={attributes.contentTdE} default="Get a better understanding of where your traffic is coming from." onChange={ (newtext) => { setAttributes({ contentTdE: newtext }); }} /></p>
                                        </div>
                                        <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                                            <RichText tagName="span" value={attributes.contentTgf} default="Learn more" onChange={ (newtext) => { setAttributes({ contentTgf: newtext }); }} /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentLbW} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentLbW: newtext });
      }}
    /></span>
                                        </p>
                                    </div>
                                </div>
                                </span> <span className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                  <div className="flex md:h-full lg:flex-col">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        
                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdIX }}
        >
      </svg>
      
                      </span>

                            </div>
                            <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                <div>
                                    <p className="text-base font-medium text-gray-900">
                                        <RichText tagName="span" value={attributes.contentoSR} default="Engagement" onChange={ (newtext) => { setAttributes({ contentoSR: newtext }); }} /></p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        <RichText tagName="span" value={attributes.contentgjG} default="Speak directly to your customers in a more meaningful way." onChange={ (newtext) => { setAttributes({ contentgjG: newtext }); }} /></p>
                                </div>
                                <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                                    <RichText tagName="span" value={attributes.contentiup} default="Learn more" onChange={ (newtext) => { setAttributes({ contentiup: newtext }); }} /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentyAL} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentyAL: newtext });
      }}
    /></span>
                                </p>
                            </div>
                    </div>
                    </span> <span className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                  <div className="flex md:h-full lg:flex-col">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        
                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMPv }}
        >
      </svg>
      
                      </span>

                </div>
                <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                    <div>
                        <p className="text-base font-medium text-gray-900">
                            <RichText tagName="span" value={attributes.contentReD} default="Security" onChange={ (newtext) => { setAttributes({ contentReD: newtext }); }} /></p>
                        <p className="mt-1 text-sm text-gray-500">
                            <RichText tagName="span" value={attributes.contentKta} default="Your customers&#039; data will be safe and secure." onChange={ (newtext) => { setAttributes({ contentKta: newtext }); }} /></p>
                    </div>
                    <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                        <RichText tagName="span" value={attributes.contentHyS} default="Learn more" onChange={ (newtext) => { setAttributes({ contentHyS: newtext }); }} /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentiYx} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentiYx: newtext });
      }}
    /></span>
                    </p>
                </div>
            </div>
            </span> <span className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                  <div className="flex md:h-full lg:flex-col">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        
                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFwf }}
        >
      </svg>
      
                      </span>

        </div>
        <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
            <div>
                <p className="text-base font-medium text-gray-900">
                    <RichText tagName="span" value={attributes.contentYhr} default="Integrations" onChange={ (newtext) => { setAttributes({ contentYhr: newtext }); }} /></p>
                <p className="mt-1 text-sm text-gray-500">
                    <RichText tagName="span" value={attributes.contentQnK} default="Connect with third-party tools that you&#039;re already using." onChange={ (newtext) => { setAttributes({ contentQnK: newtext }); }} /></p>
            </div>
            <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                <RichText tagName="span" value={attributes.contentXsr} default="Learn more" onChange={ (newtext) => { setAttributes({ contentXsr: newtext }); }} /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentFWX} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentFWX: newtext });
      }}
    /></span>
            </p>
        </div>
    </div>
    </span>
</div>
<div className="bg-gray-50">
    <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
        <div className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                      
                      
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMlg }}
        >
      </svg>
      
                      <span className="ml-3"><RichText tagName="span" value={attributes.contentmLO} default="Watch Demo" onChange={ (newtext) =>  {
        setAttributes({ contentmLO: newtext });
      }}
    /></span>
</span>
        </div>
        <div className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                      
                      
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUGK }}
        >
      </svg>
      
                      <span className="ml-3"><RichText tagName="span" value={attributes.contentRWI} default="View All Products" onChange={ (newtext) =>  {
        setAttributes({ contentRWI: newtext });
      }}
    /></span>
</span>
        </div>
        <div className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                      
                      
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiBP }}
        >
      </svg>
      
                      <span className="ml-3"><RichText tagName="span" value={attributes.contentkSQ} default="Contact Sales" onChange={ (newtext) =>  {
        setAttributes({ contentkSQ: newtext });
      }}
    /></span>
</span>
        </div>
    </div>
</div>
</div>
</div> <span className="text-base font-medium text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentNBA} default="Pricing" onChange={ (newtext) =>  {
        setAttributes({ contentNBA: newtext });
      }}
    /></span>
 <span className="text-base font-medium text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentZJK} default="Docs" onChange={ (newtext) =>  {
        setAttributes({ contentZJK: newtext });
      }}
    /></span>

<div>
    <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentXJI} default="More" onChange={ (newtext) =>  {
        setAttributes({ contentXJI: newtext });
      }}
    /></span>

        
      <svg
         className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPpA }}
        >
      </svg>
      
    </button>
    <div className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
        <div className="absolute inset-0 flex">
            <div className="bg-white w-1/2"/>
            <div className="bg-gray-50 w-1/2"/>
        </div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
            <nav className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                <div>
                     <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase"><RichText tagName="span" value={attributes.contentJfC} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentJfC: newtext });
      }}
    /></h3>

                    <ul role="list" className="mt-5 space-y-6">
                        <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTVY }}
        >
      </svg>
      
                          <span className="ml-4"><RichText tagName="span" value={attributes.contenttzy} default="About" onChange={ (newtext) =>  {
        setAttributes({ contenttzy: newtext });
      }}
    /></span>
</span>
                        </li>
                        <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoHF }}
        >
      </svg>
      
                          <span className="ml-4"><RichText tagName="span" value={attributes.contentCZx} default="Customers" onChange={ (newtext) =>  {
        setAttributes({ contentCZx: newtext });
      }}
    /></span>
</span>
                        </li>
                        <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOty }}
        >
      </svg>
      
                          <span className="ml-4"><RichText tagName="span" value={attributes.contentueL} default="Press" onChange={ (newtext) =>  {
        setAttributes({ contentueL: newtext });
      }}
    /></span>
</span>
                        </li>
                        <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMsO }}
        >
      </svg>
      
                          <span className="ml-4"><RichText tagName="span" value={attributes.contentYWs} default="Careers" onChange={ (newtext) =>  {
        setAttributes({ contentYWs: newtext });
      }}
    /></span>
</span>
                        </li>
                        <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYFv }}
        >
      </svg>
      
                          <span className="ml-4"><RichText tagName="span" value={attributes.contentkOZ} default="Privacy" onChange={ (newtext) =>  {
        setAttributes({ contentkOZ: newtext });
      }}
    /></span>
</span>
                        </li>
                    </ul>
                </div>
                <div>
                     <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase"><RichText tagName="span" value={attributes.contentIZO} default="Resources" onChange={ (newtext) =>  {
        setAttributes({ contentIZO: newtext });
      }}
    /></h3>

                    <ul role="list" className="mt-5 space-y-6">
                        <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgXqW }}
        >
      </svg>
      
                          <span className="ml-4"><RichText tagName="span" value={attributes.contentvLN} default="Community" onChange={ (newtext) =>  {
        setAttributes({ contentvLN: newtext });
      }}
    /></span>
</span>
                        </li>
                        <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdHo }}
        >
      </svg>
      
                          <span className="ml-4"><RichText tagName="span" value={attributes.contentweb} default="Partners" onChange={ (newtext) =>  {
        setAttributes({ contentweb: newtext });
      }}
    /></span>
</span>
                        </li>
                        <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZNs }}
        >
      </svg>
      
                          <span className="ml-4"><RichText tagName="span" value={attributes.contentIQu} default="Guides" onChange={ (newtext) =>  {
        setAttributes({ contentIQu: newtext });
      }}
    /></span>
</span>
                        </li>
                        <li className="flow-root"> <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeJG }}
        >
      </svg>
      
                          <span className="ml-4"><RichText tagName="span" value={attributes.contentpVb} default="Webinars" onChange={ (newtext) =>  {
        setAttributes({ contentpVb: newtext });
      }}
    /></span>
</span>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                <div>
                     <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase"><RichText tagName="span" value={attributes.contentvKO} default="From the blog" onChange={ (newtext) =>  {
        setAttributes({ contentvKO: newtext });
      }}
    /></h3>

                    <ul role="list" className="mt-6 space-y-6">
                        <li className="flow-root"> <span className="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
                          <div className="hidden sm:block flex-shrink-0">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlbTr: media.url,
            imagealtOIf: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlbTr } 
            alt={ attributes.imagealtOIf } 
            onClick={ open } 
            className="w-32 h-20 object-cover rounded-md"
          /> 
        )} 
      />
                          </div>
                          <div className="w-0 flex-1 sm:ml-8">
                            <h4 className="text-base font-medium text-gray-900 truncate"><RichText tagName="span" value={attributes.contenttaN} default="Boost your conversion rate" onChange={ (newtext) =>  {
        setAttributes({ contenttaN: newtext });
      }}
    /></h4>
                            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentVis} default="Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus." onChange={ (newtext) =>  {
        setAttributes({ contentVis: newtext });
      }}
    /></p>
                          </div>
                        </span>

                        </li>
                        <li className="flow-root"> <span className="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
                          <div className="hidden sm:block flex-shrink-0">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlnJg: media.url,
            imagealtSor: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlnJg } 
            alt={ attributes.imagealtSor } 
            onClick={ open } 
            className="w-32 h-20 object-cover rounded-md"
          /> 
        )} 
      />
                          </div>
                          <div className="w-0 flex-1 sm:ml-8">
                            <h4 className="text-base font-medium text-gray-900 truncate"><RichText tagName="span" value={attributes.contentbrc} default="How to use search engine optimization to drive traffic to your site" onChange={ (newtext) =>  {
        setAttributes({ contentbrc: newtext });
      }}
    /></h4>
                            <p className="mt-1 text-sm text-gray-500"><RichText tagName="span" value={attributes.contentMFj} default="Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus." onChange={ (newtext) =>  {
        setAttributes({ contentMFj: newtext });
      }}
    /></p>
                          </div>
                        </span>

                        </li>
                    </ul>
                </div>
                <div className="mt-6 text-sm font-medium"> <span className="text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentskK} default="View all posts" onChange={ (newtext) =>  {
        setAttributes({ contentskK: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentPuD} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentPuD: newtext });
      }}
    /></span></span>
                </div>
            </div>
        </div>
    </div>
</div>
</nav>
<div className="flex items-center md:ml-12"> <span className="text-base font-medium text-gray-500 hover:text-gray-900"><RichText tagName="span" value={attributes.contentVzm} default="Sign in" onChange={ (newtext) =>  {
        setAttributes({ contentVzm: newtext });
      }}
    /></span>
 <span className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"><RichText tagName="span" value={attributes.contentBZR} default="Sign up" onChange={ (newtext) =>  {
        setAttributes({ contentBZR: newtext });
      }}
    /></span>

</div>
</div>
</div>
</div>
<div className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5 sm:pb-8">
            <div className="flex items-center justify-between">
                <div>
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlSxn: media.url,
            imagealtFQl: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlSxn } 
            alt={ attributes.imagealtFQl } 
            onClick={ open } 
            className="w-full h-full object-center object-cover sm:rounded-lg"
          /> 
        )} 
      />
                </div>
                <div className="-mr-2">
                    <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentyNr} default="Close menu" onChange={ (newtext) =>  {
        setAttributes({ contentyNr: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcGj }}
        >
      </svg>
      
                    </button>
                </div>
            </div>
            <div className="mt-6 sm:mt-8">
                <nav>
                    <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4"> <span className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLEv }}
        >
      </svg>
      
                </div>
                <div className="ml-4 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentQvr} default="Analytics" onChange={ (newtext) =>  {
        setAttributes({ contentQvr: newtext });
      }}
    /></div>
              </span>
 <span className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeUB }}
        >
      </svg>
      
                </div>
                <div className="ml-4 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentEqr} default="Engagement" onChange={ (newtext) =>  {
        setAttributes({ contentEqr: newtext });
      }}
    /></div>
              </span>
 <span className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsmR }}
        >
      </svg>
      
                </div>
                <div className="ml-4 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentblf} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentblf: newtext });
      }}
    /></div>
              </span>
 <span className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiFc }}
        >
      </svg>
      
                </div>
                <div className="ml-4 text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentshG} default="Integrations" onChange={ (newtext) =>  {
        setAttributes({ contentshG: newtext });
      }}
    /></div>
              </span>

                    </div>
                    <div className="mt-8 text-base"> <span className="font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentXCd} default="View all products" onChange={ (newtext) =>  {
        setAttributes({ contentXCd: newtext });
      }}
    /><span aria-hidden="true"><RichText tagName="span" value={attributes.contentoJl} default="&rarr;" onChange={ (newtext) =>  {
        setAttributes({ contentoJl: newtext });
      }}
    /></span></span>
                    </div>
                </nav>
            </div>
        </div>
        <div className="py-6 px-5">
            <div className="grid grid-cols-2 gap-4"> <span className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentiyd} default="Pricing" onChange={ (newtext) =>  {
        setAttributes({ contentiyd: newtext });
      }}
    /></span>
 <span className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentyRS} default="Docs" onChange={ (newtext) =>  {
        setAttributes({ contentyRS: newtext });
      }}
    /></span>
 <span className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentgmw} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentgmw: newtext });
      }}
    /></span>
 <span className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentmWq} default="Resources" onChange={ (newtext) =>  {
        setAttributes({ contentmWq: newtext });
      }}
    /></span>
 <span className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentyTh} default="Blog" onChange={ (newtext) =>  {
        setAttributes({ contentyTh: newtext });
      }}
    /></span>
 <span className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"><RichText tagName="span" value={attributes.contentrNQ} default="Contact Sales" onChange={ (newtext) =>  {
        setAttributes({ contentrNQ: newtext });
      }}
    /></span>

            </div>
            <div className="mt-6"> <span className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"><RichText tagName="span" value={attributes.contentEzI} default="Sign up" onChange={ (newtext) =>  {
        setAttributes({ contentEzI: newtext });
      }}
    /></span>

                <p className="mt-6 text-center text-base font-medium text-gray-500">
                    <RichText tagName="span" value={attributes.contentfqD} default="Existing customer?" onChange={ (newtext) => { setAttributes({ contentfqD: newtext }); }} /><span className="text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentAte} default="Sign in" onChange={ (newtext) =>  {
        setAttributes({ contentAte: newtext });
      }}
    /></span>

                </p>
            </div>
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
        <div class="relative bg-white">
            <div class="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"/>
            <div class="relative z-20">
                <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                    <div> <span class="flex">
          <span class="sr-only"><RichText.Content value={attributes.contentxkH} /></span>

                        
      <img
            src={ attributes.imageurlnNI } 
            alt={ attributes.imagealtybH } 
            class="h-8 w-auto sm:h-10"
          />
                        </span>
                    </div>
                    <div class="-mr-2 -my-2 md:hidden">
                        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentpqn} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAwf }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
                        <nav class="flex space-x-10">
                            <div>
                                <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText.Content value={attributes.contentlXv} /></span>

                                    
      <svg
         class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgrWo }}
        >
      </svg>
      
                                </button>
                                <div class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                                    <div class="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16"> <span class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                  <div class="flex md:h-full lg:flex-col">
                    <div class="flex-shrink-0">
                      <span class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        
                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgEyg }}
        >
      </svg>
      
                      </span>

                                    </div>
                                    <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                        <div>
                                            <p class="text-base font-medium text-gray-900">
                                                <RichText.Content value={attributes.contentMkI} /></p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                <RichText.Content value={attributes.contentTdE} /></p>
                                        </div>
                                        <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                                            <RichText.Content value={attributes.contentTgf} /><span aria-hidden="true"><RichText.Content value={attributes.contentLbW} /></span>
                                        </p>
                                    </div>
                                </div>
                                </span> <span class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                  <div class="flex md:h-full lg:flex-col">
                    <div class="flex-shrink-0">
                      <span class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        
                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdIX }}
        >
      </svg>
      
                      </span>

                            </div>
                            <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                <div>
                                    <p class="text-base font-medium text-gray-900">
                                        <RichText.Content value={attributes.contentoSR} /></p>
                                    <p class="mt-1 text-sm text-gray-500">
                                        <RichText.Content value={attributes.contentgjG} /></p>
                                </div>
                                <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                                    <RichText.Content value={attributes.contentiup} /><span aria-hidden="true"><RichText.Content value={attributes.contentyAL} /></span>
                                </p>
                            </div>
                    </div>
                    </span> <span class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                  <div class="flex md:h-full lg:flex-col">
                    <div class="flex-shrink-0">
                      <span class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        
                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMPv }}
        >
      </svg>
      
                      </span>

                </div>
                <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                    <div>
                        <p class="text-base font-medium text-gray-900">
                            <RichText.Content value={attributes.contentReD} /></p>
                        <p class="mt-1 text-sm text-gray-500">
                            <RichText.Content value={attributes.contentKta} /></p>
                    </div>
                    <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                        <RichText.Content value={attributes.contentHyS} /><span aria-hidden="true"><RichText.Content value={attributes.contentiYx} /></span>
                    </p>
                </div>
            </div>
            </span> <span class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                  <div class="flex md:h-full lg:flex-col">
                    <div class="flex-shrink-0">
                      <span class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        
                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFwf }}
        >
      </svg>
      
                      </span>

        </div>
        <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
            <div>
                <p class="text-base font-medium text-gray-900">
                    <RichText.Content value={attributes.contentYhr} /></p>
                <p class="mt-1 text-sm text-gray-500">
                    <RichText.Content value={attributes.contentQnK} /></p>
            </div>
            <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                <RichText.Content value={attributes.contentXsr} /><span aria-hidden="true"><RichText.Content value={attributes.contentFWX} /></span>
            </p>
        </div>
    </div>
    </span>
</div>
<div class="bg-gray-50">
    <div class="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
        <div class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                      
                      
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMlg }}
        >
      </svg>
      
                      <span class="ml-3"><RichText.Content value={attributes.contentmLO} /></span>
</span>
        </div>
        <div class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                      
                      
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUGK }}
        >
      </svg>
      
                      <span class="ml-3"><RichText.Content value={attributes.contentRWI} /></span>
</span>
        </div>
        <div class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                      
                      
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiBP }}
        >
      </svg>
      
                      <span class="ml-3"><RichText.Content value={attributes.contentkSQ} /></span>
</span>
        </div>
    </div>
</div>
</div>
</div> <span class="text-base font-medium text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentNBA} /></span>
 <span class="text-base font-medium text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentZJK} /></span>

<div>
    <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"> <span><RichText.Content value={attributes.contentXJI} /></span>

        
      <svg
         class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPpA }}
        >
      </svg>
      
    </button>
    <div class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
        <div class="absolute inset-0 flex">
            <div class="bg-white w-1/2"/>
            <div class="bg-gray-50 w-1/2"/>
        </div>
        <div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
            <nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                <div>
                     <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase"><RichText.Content value={attributes.contentJfC} /></h3>

                    <ul role="list" class="mt-5 space-y-6">
                        <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTVY }}
        >
      </svg>
      
                          <span class="ml-4"><RichText.Content value={attributes.contenttzy} /></span>
</span>
                        </li>
                        <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoHF }}
        >
      </svg>
      
                          <span class="ml-4"><RichText.Content value={attributes.contentCZx} /></span>
</span>
                        </li>
                        <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOty }}
        >
      </svg>
      
                          <span class="ml-4"><RichText.Content value={attributes.contentueL} /></span>
</span>
                        </li>
                        <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMsO }}
        >
      </svg>
      
                          <span class="ml-4"><RichText.Content value={attributes.contentYWs} /></span>
</span>
                        </li>
                        <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYFv }}
        >
      </svg>
      
                          <span class="ml-4"><RichText.Content value={attributes.contentkOZ} /></span>
</span>
                        </li>
                    </ul>
                </div>
                <div>
                     <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase"><RichText.Content value={attributes.contentIZO} /></h3>

                    <ul role="list" class="mt-5 space-y-6">
                        <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgXqW }}
        >
      </svg>
      
                          <span class="ml-4"><RichText.Content value={attributes.contentvLN} /></span>
</span>
                        </li>
                        <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdHo }}
        >
      </svg>
      
                          <span class="ml-4"><RichText.Content value={attributes.contentweb} /></span>
</span>
                        </li>
                        <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgZNs }}
        >
      </svg>
      
                          <span class="ml-4"><RichText.Content value={attributes.contentIQu} /></span>
</span>
                        </li>
                        <li class="flow-root"> <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                          
                          
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeJG }}
        >
      </svg>
      
                          <span class="ml-4"><RichText.Content value={attributes.contentpVb} /></span>
</span>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                <div>
                     <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase"><RichText.Content value={attributes.contentvKO} /></h3>

                    <ul role="list" class="mt-6 space-y-6">
                        <li class="flow-root"> <span class="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
                          <div class="hidden sm:block flex-shrink-0">
                            
      <img
            src={ attributes.imageurlbTr } 
            alt={ attributes.imagealtOIf } 
            class="w-32 h-20 object-cover rounded-md"
          />
                          </div>
                          <div class="w-0 flex-1 sm:ml-8">
                            <h4 class="text-base font-medium text-gray-900 truncate"><RichText.Content value={attributes.contenttaN} /></h4>
                            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentVis} /></p>
                          </div>
                        </span>

                        </li>
                        <li class="flow-root"> <span class="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
                          <div class="hidden sm:block flex-shrink-0">
                            
      <img
            src={ attributes.imageurlnJg } 
            alt={ attributes.imagealtSor } 
            class="w-32 h-20 object-cover rounded-md"
          />
                          </div>
                          <div class="w-0 flex-1 sm:ml-8">
                            <h4 class="text-base font-medium text-gray-900 truncate"><RichText.Content value={attributes.contentbrc} /></h4>
                            <p class="mt-1 text-sm text-gray-500"><RichText.Content value={attributes.contentMFj} /></p>
                          </div>
                        </span>

                        </li>
                    </ul>
                </div>
                <div class="mt-6 text-sm font-medium"> <span class="text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentskK} /><span aria-hidden="true"><RichText.Content value={attributes.contentPuD} /></span></span>
                </div>
            </div>
        </div>
    </div>
</div>
</nav>
<div class="flex items-center md:ml-12"> <span class="text-base font-medium text-gray-500 hover:text-gray-900"><RichText.Content value={attributes.contentVzm} /></span>
 <span class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"><RichText.Content value={attributes.contentBZR} /></span>

</div>
</div>
</div>
</div>
<div class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5 sm:pb-8">
            <div class="flex items-center justify-between">
                <div>
                    
      <img
            src={ attributes.imageurlSxn } 
            alt={ attributes.imagealtFQl } 
            class="w-full h-full object-center object-cover sm:rounded-lg"
          />
                </div>
                <div class="-mr-2">
                    <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentyNr} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcGj }}
        >
      </svg>
      
                    </button>
                </div>
            </div>
            <div class="mt-6 sm:mt-8">
                <nav>
                    <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4"> <span class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLEv }}
        >
      </svg>
      
                </div>
                <div class="ml-4 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentQvr} /></div>
              </span>
 <span class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeUB }}
        >
      </svg>
      
                </div>
                <div class="ml-4 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentEqr} /></div>
              </span>
 <span class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsmR }}
        >
      </svg>
      
                </div>
                <div class="ml-4 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentblf} /></div>
              </span>
 <span class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  
                  
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiFc }}
        >
      </svg>
      
                </div>
                <div class="ml-4 text-base font-medium text-gray-900"><RichText.Content value={attributes.contentshG} /></div>
              </span>

                    </div>
                    <div class="mt-8 text-base"> <span class="font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentXCd} /><span aria-hidden="true"><RichText.Content value={attributes.contentoJl} /></span></span>
                    </div>
                </nav>
            </div>
        </div>
        <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4"> <span class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentiyd} /></span>
 <span class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentyRS} /></span>
 <span class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentgmw} /></span>
 <span class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentmWq} /></span>
 <span class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentyTh} /></span>
 <span class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"><RichText.Content value={attributes.contentrNQ} /></span>

            </div>
            <div class="mt-6"> <span class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"><RichText.Content value={attributes.contentEzI} /></span>

                <p class="mt-6 text-center text-base font-medium text-gray-500">
                    <RichText.Content value={attributes.contentfqD} /><span class="text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentAte} /></span>

                </p>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
            );
            },
        });
        