
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/light-nav-with-bottom-border', {
            title: 'light nav with bottom border',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAJ3BaADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAIDAQQFBgf/xABAEAEAAgECAwYEAwgBAgUEAwAAAQIDBBEFEiETMUFRUpEGIjJxFGGBBxVUcpOh0eFCI/AkM2LB8RY3krF0stL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAiEQEAAgICAgIDAQAAAAAAAAAAARECEgNRITEEYRQiMkH/2gAMAwEAAhEDEQA/APpwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIZrXpgyWx15rxWZrXznbpD51w74i4lTjGLJqdVkvS+SK5Mdp+XaZ69PDZ6XiPxfpdDxK+k/D3y1x25cmSto6T4xEeO33c34z0GmvpMHGNLER20xF9unPExvFvv0fS+LhpOvLj/XqWZb3xtr9bosGmrpMt8VMs2570naem20b98eK74N4hq9fw/L+LmcnZX5a5Z77dN9p+3/ALqPhvjOLjWD93cRwUy5sdd9715oyRHjO/it4r8SaTgeqroMGji0UiJtFJilaRPXaI27/Hw72Zwy0/HjD9o/0+3oxRotXi12jx6rBv2eSN45o2lyPi3jmq4BpNPq8Gnx5sVsvZ5eaZ3jpvG232n+zwTExNS07w8lxn4x/d/xJpOH4seK+myRjnLlmZ3rzT4ddu7aevm2J+JcsfEuv0MYqfgeH4JzZ8sVmbdKxMxHXbvn+0/dB6UeGp8UfE+twX4lw3guK3DqzO3NvN7RE9ZjrG/d4RP6t/WfF+/wlXjegw0m/aRjviybzFbeMb9N/DqD0et1mn4fpL6rWZYxYMe3NeYmdt52ju/OYWYM2PU6fHnw258WWsXpaPGJjeJeD4xxjiPGfg/i2o1Og/DaLbDOntaJi2T/AKld57+7u8G3o/iPLTT8D4NwbHi1OrvpsXbzfea4a8kdZ2nvjv8A/kHqeI8T0PC8MZtfqaYKWnaJt3zP5R3y1+F/EHCeL5rYuHayM2Sleaa8lqzt0jfrEecPE/Gc8T1PxZoNNk0OHPWk/wDhcdrfLnjpM7xzdOsbddu50eB0pp/2k8UjssenrXQ1m1KxEVpO2KZ7unfuD3A8TX4p4/xbLnzfDvCsWbQ4Lcs3zT81/t80dduu0b+Hnssy/GWpyfDN+KaPSY4z6bNGLVYcsz8kT03junv2j38geyHj/iD41jhmp4dXTYseTFqcVc+WbbzNaWnpttt123dG3HdRk+McfBdLixXwVw9rnyTvNq9JnptO23Wnf5g74AAOVxfiup0Wu0Oj0eipqc2s7TbnzdnFeSImevLPmDqjj6bj+HbWV4ninQZdFFbZq3tFq8tvptW0d8T3ee67Fx/hWXRZtXXWVjDgmK5JtW1ZrM90TWY3679OnUHSHD13xNo8Ohw6zTZKZMNtXTT5pvE0nFE98zExvExHXqxrPifQ04bGu0ebHlx11OPBlm+9Oz5rREzMTETG0TutDujnafj3CtTptRqcWtx9lpuuabRNZp5bxMRPXw8zT8e4VqNLn1OLWU7LTxvlm0TWaR4TMTET18PNB0Ry6fEXCMmjz6uNZWMOnmtcs2pas05p2rvExvtO/fsjf4l4Njw4c19bEUzTPZ70tvaI752232/PuKHWHO4BxKeL8Hw66aVp2lrxtWd42re1Ynf9N3RAAABpcT1mo0WC2fFpq5sdKza8zl5Zj9Np3BujnxxSuDFW/Ea0005OtK1vOSbRt39IWZ+KaHT48eTLqKxXLHNSaxNt48+ngUNwaWfi2g0/J2uorHPTtK7Vmd6+fSEtPxPQ6nP2GDUVvk25oiInaY/Ke6QbYAAAAjktyY7X235YmdnL0/GM166TJqNFGLDqrRSl65eaYme7eNoB1ho14vw+8ZJrqa7YombzMTEV2nby79/BHJxXT30WTPpM2K047VrbtItHLvMR1jbfx8ih0BqZOJ6LFqo02TUVjLvEbbT0me6Jnugy8U0OHU/hsuorXLvETG07RM92890fqDbHOw8Z0eTLqqWtOONN9VrVmImOnX3nbZs6TW6bWRadPk5uSdrRMTWY+8T1BsAAAADX12rpotJfUZK2tFdoite+0zO0QpwavV/iKYtXoZxVyRM1vS/PFdvC3SNgbw0cfFtFn7Sumz1yZKUm0RtMc23lM9/6IU4vpaaPTZtXkrivnxxfliJnaP08PzKHRGlqOLaDTWrXNqKxNqReNomd6z49I7uiWfiei09cVs2orEZY5qbRM7x59PD8wbY5mn4zp54dh1WrvXFOabRWtYm2+0zHSI6+C7LxbQYseLJfUV5cteakxEzzR+kFDdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABq8RzXw6esYp2yZbxjrPlMgs/F6f8R+H7Wva+lc0v3bh/D9nzX7Tm5+13+bm890+HZr5tNMZZ3yYrTjtPnMeKjaAQaPEuIRpKTWkc2SY3/lcThmqyazH+Iz5bXteZmN57o/KPBHitc2oxai+LJNMk9a2iN+7w9o2ee0WmxRmrGTW5MV+xm+1skV5o3jasREz07/z6uXL07cHuZewy5r4qxfFea+G8S2uE8UjW82LJEVzY+//ANUebyN+G1vpdsWfJp6xM32jJO8Tt027p/8AZu8DxZ9JbHlyZZyW6fPMbTMfn+jPHPmm+XGaunswHd5gAAAAAAAAAAAAAAAAAAAAAAAAAHm9f8H6XWcStq41GTHXJfny4+WJ5pnv2nw/u5vxnxHT102DhGjtWYxTHacv/HljaK/9+UPZ5q2vgyUx25b2rMVt5Tt3vnXD/h7ik8Yw0z6TJWtMsWyZLfTtE9dp8f0fS+Lybzty5fz6hmfp6H4a4Lj4NgniHEclMea9dtrzERiifznxXcX+G9JxvPXXafVdna8RzXpEXrkiOkTHVV8acN1uuw6a+kpbLXFNubHXv67dfz7lvwboNboeHZY1kTSMl+amO3fXwmZ8t+jM55a/kRn+3R9O1odJi0OixaXBHyYq7Rv4+c/rPVp/EnD/AN6cA1mjrG9745nHEeuOtf7xDpjwTMzNy0+WcO+H9bxD4a4trNZgzRq61x1wRkrMWmMcRv0753rtEfnDt/CvBNVrPh7i+TiEWprOKTas2y0mJjaJ2mYn/wBUz3eXt7gQfP8Ah3G+NcB4bHBb8A1GXU4d6YclImaW3mevdO8bz4d/5KdV8P63h37O76W2DJfVZtTXNfFSJvNe6Nun5RD6MA8z8UYM2b4ByYcOK+TLOLDtStZm07Wp4OFw/Qa34WzcP4po9Lmz6TWafHXWYa45tkxW5YmZ28Ov/vHk+hgPIcew5s/xlwDU4cOW+CImZyRSdq7z4z4fqjpdFmy/tF4zbJhy10+bRRjjJyzFZ3rjjpPn3+z2ID59wvX8X+ENPm4Vn4Nn1lYyWtp82KJ5b7/nET9/OG78OfD2rycB4t+9aTi1HFJmezmI+TvmJ28J3men5Q9oA+X8A+HNZxPhfFb8Q0+Wuammrg0sZKzE71+aNpnw3rWP1l2v2dcP1dPxvEeIY8lM2TlwUjJTlnlrEeHl9Mfo9sAAAOFx7Dr44xwnXaHQ21ldL23aUrkpSY5qxEfVMO6A8nqOH8dz04lxKMOPBrdRGLHi09MlbWpirbe3zT8vNO87eENXBwXiNo4xl1XD9Rmrqp09sWPLra9rPJvvMXjpFo6THh+b2wtlPIU4ZxnPpcNdTjy3pTieHNSuoyY7Za4q/VN7V6T+XfJxjg3Es+q4pl0ukpkjPqtJlxRa9Yi8UiObfr07v/l68LHj9dwnivF8mv119FXSZLY8FMWnyZa27WceTnnmmu8Rv3Qnq9HxzWZeIcS0+jjR6i+mx6fFhtkpa19r81rb9axO0zEbvWhY8JbgXFtRi4vN9LqJ/FxpezrqdRTJeeTJvbeYnaOnXb/4d3iOn1+m+I68T0ehjW0yaT8NakZK0nHMWm0T83hO/Xbr0d4LHH+EtDqeHfDmm0mtxVxZ8dsk2pWYmI3yWmNpj8ph2AQAAGpxXDk1HC9Thw15sl8cxWN9t5bYDia/Q6qdZp9VipmvFcHZWphyxS1Z3333nvhRbQcQw4NNgw4ssYYw2iaYs9YtW82mfmtMdY2nweiFspwuHcO1WHJhnNh2iugnDPzRO1+bfbv8lmk0Gpx24PNsW34bHeMvzR8szXaPv18nZCwAQAAQzVm2HJWsbzNZiPZy+FcHpg0+lyartb58Vd4rfJNq45/KO51wHDjh2pjgdcMYq9vjzzm7ObRtfa8ztM/nDW4nTPbFq9VqcMae2ecOLFim8WteYvEzPT/vo9KxNazMTMRMx1jeO5bSnndRwrVTqNVinFny4tRm7SLV1EUpETMfVHf028G1XBrdPm1eGmix6jHqc/axkveOWInbeLR39NnZC1cXNo9ROTieO2jjPi1E1yUntYrFpiIjbziem+/d0X8HxazFbP8Aie1jFM17KM163yd3XeY8PJ0wsAEAAGnxbS5NXobY8MxGWtq3x83dzRO6nHn4pqMkVnR001IpbmnJeL81tukRt4b+bpAPN6fQcSvqtPk1GLNvTFkreb5aTHNNdvliO6N2J4XrcX4fJGLPf/wlcN6Yc9aTW0eE79Jh6UW0pyNHw/Lg1lbTi2x10UYd5vFtrc0zMf8AcNbSaPX6G2lzRpIz2jS9henaViaTFt+/u26+D0AWrzmHRcT0+g0WGMWSIx9p2lMOStbRM2mY+afD7LuE8O1Wntw+c+LbsMeWLzzRO02tvH9ndC0oARQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABocTpqcmTT9hg7SmPJGSfnivWO6OrfAcn975+w7f8AA/8AT3237aN999u7bdfw2mpx5tR22n7KmS85I+eLbTPfHRf+B0vb9v2FO0id9/z89mwoAIOJlwcmS9Jjx2eQwUxYeKxiy2p2unr2cc078sx3TH3iYl73imn1GXR5Z0PJGq5Z7Ob90y+Va/4e41qOIZM+qrbFqrTvkma7RafONunh4OfJDrxTMS9RxHWVw4+xxT2ua3SN5h0ODabNOnw1zWm97zv9o8I9nD4LwfPFK07LJlz16zaN+WfLve70GljT4Kc1drxSImPT+THFHm2+bLxTbAd3nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABi9q0pa97RWtY3mZnaIhrfvPh/wDH6X+tX/KxjM+oG0NX958P/j9L/Wr/AJP3nw/+P0v9av8AlrTLottDV/efD/4/S/1q/wCT958P/j9L/Wr/AJNMui20NX958P8A4/S/1q/5P3nw/wDj9L/Wr/k0y6LbQ1f3nw/+P0v9av8Ak/efD/4/S/1q/wCTTLottDWpxHQ3vWlNbprWtO0RGWszM+7ZZnGY9gAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxM7RMgzMxHfMMc1fOPciNmQY5q+ce5zV8492QGOavnHuc1fOPdkBjmr5x7nNXzj3ZAY5q+ce5zV8492QGOavnHuc1fOPdkBjmr5x7nNXzj3ZAY5q+ce5zV8492QGOavnHuc1fOPdkBjmr5x7nNXzj3ZAY5q+ce5zV8492QGOavnHuzExPdMDExuDIxE7xEsgAAAAAAAAAAAAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAhbFivWa3x0tW0bTE1iYmFH7s4f8AwGl/o1/w2hYymPUjV/dnD/4DS/0a/wCD92cP/gNL/Rr/AIbQ1vl2U1f3Zw/+A0v9Gv8Ag/dnD/4DS/0a/wCG0G+XZTV/dnD/AOA0v9Gv+D92cP8A4DS/0a/4bQb5dlNX92cP/gNL/Rr/AIP3Zw/+A0v9Gv8AhtBvl2U1q8O0FLRami01bVneJjFWJifZfyU9FfZIZnKZ9iPJT0V9jkp6K+yQgjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskAjyU9FfY5KeivskA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" />),
            category: 'common',
            attributes: {
  "contentYss": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentXXC": {
    "type": "string",
    "default": " Team "
  },
  "contentNal": {
    "type": "string",
    "default": " Projects "
  },
  "contentJwE": {
    "type": "string",
    "default": " Calendar "
  },
  "contentalR": {
    "type": "string",
    "default": "View notifications"
  },
  "contentylD": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentsTQ": {
    "type": "string",
    "default": " Your Profile "
  },
  "contentejT": {
    "type": "string",
    "default": " Settings "
  },
  "contentzke": {
    "type": "string",
    "default": " Sign out "
  },
  "contentPZW": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentHUm": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentOjA": {
    "type": "string",
    "default": " Team "
  },
  "contentjgs": {
    "type": "string",
    "default": " Projects "
  },
  "contentOoR": {
    "type": "string",
    "default": " Calendar "
  },
  "contentgWf": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentJoV": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentlQK": {
    "type": "string",
    "default": "View notifications"
  },
  "contentBtL": {
    "type": "string",
    "default": " Your Profile "
  },
  "contentvpg": {
    "type": "string",
    "default": " Settings "
  },
  "contentwQn": {
    "type": "string",
    "default": " Sign out "
  },
  "contentTQg": {
    "type": "string",
    "default": "Dashboard"
  },
  "imageurlgsg": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-600.svg'
  },
  "imagealtZWp": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlQXS": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
  },
  "imagealtUHF": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlIYI": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealthDn": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlism": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealteTK": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgYCU": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgjMO": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgQqV": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgBCy": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
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
            value={ attributes.svgYCU }
            onChange={ ( value ) => {
              setAttributes({ svgYCU: value });
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
            value={ attributes.svgjMO }
            onChange={ ( value ) => {
              setAttributes({ svgjMO: value });
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
            value={ attributes.svgQqV }
            onChange={ ( value ) => {
              setAttributes({ svgQqV: value });
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
            value={ attributes.svgBCy }
            onChange={ ( value ) => {
              setAttributes({ svgBCy: value });
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
        <div className="min-h-full">
            <nav className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlgsg: media.url,
            imagealtZWp: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlgsg } 
            alt={ attributes.imagealtZWp } 
            onClick={ open } 
            className="block lg:hidden h-8 w-auto"
          /> 
        )} 
      />
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlQXS: media.url,
            imagealtUHF: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlQXS } 
            alt={ attributes.imagealtUHF } 
            onClick={ open } 
            className="hidden lg:block h-8 w-auto"
          /> 
        )} 
      />
                            </div>
                            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8"> <span className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentYss} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentYss: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentXXC} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentXXC: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentNal} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentNal: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText tagName="span" value={attributes.contentJwE} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentJwE: newtext });
      }}
    /></span>

                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            <button type="button" className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentalR} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentalR: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYCU }}
        >
      </svg>
      
                            </button>
                            <div className="ml-3 relative">
                                <div>
                                    <button type="button" className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentylD} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentylD: newtext });
      }}
    /></span>

                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlIYI: media.url,
            imagealthDn: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlIYI } 
            alt={ attributes.imagealthDn } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                    </button>
                                </div>
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentsTQ} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentsTQ: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentejT} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentejT: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentzke} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentzke: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentPZW} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentPZW: newtext });
      }}
    /></span>

                                
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjMO }}
        >
      </svg>
      
                                
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQqV }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden" id="mobile-menu">
                    <div className="pt-2 pb-3 space-y-1"> <span className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentHUm} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentHUm: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentOjA} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentOjA: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentjgs} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentjgs: newtext });
      }}
    /></span>
 <span className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText tagName="span" value={attributes.contentOoR} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentOoR: newtext });
      }}
    /></span>

                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlism: media.url,
            imagealteTK: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlism } 
            alt={ attributes.imagealteTK } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-gray-800">
                                    <RichText tagName="span" value={attributes.contentgWf} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contentgWf: newtext }); }} /></div>
                                <div className="text-sm font-medium text-gray-500">
                                    <RichText tagName="span" value={attributes.contentJoV} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentJoV: newtext }); }} /></div>
                            </div>
                            <button type="button" className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentlQK} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentlQK: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBCy }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="mt-3 space-y-1"> <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentBtL} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentBtL: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentvpg} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentvpg: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText tagName="span" value={attributes.contentwQn} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentwQn: newtext });
      }}
    /></span>

                        </div>
                    </div>
                </div>
            </nav>
            <div className="py-10">
                <header>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <h1 className="text-3xl font-bold leading-tight text-gray-900"><RichText tagName="span" value={attributes.contentTQg} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentTQg: newtext });
      }}
    /></h1>

                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="px-4 py-8 sm:px-0">
                            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"/>
                        </div>
                    </div>
                </main>
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
        <div class="min-h-full">
            <nav class="bg-white border-b border-gray-200">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <div class="flex-shrink-0 flex items-center">
                                
      <img
            src={ attributes.imageurlgsg } 
            alt={ attributes.imagealtZWp } 
            class="block lg:hidden h-8 w-auto"
          />
                                
      <img
            src={ attributes.imageurlQXS } 
            alt={ attributes.imagealtUHF } 
            class="hidden lg:block h-8 w-auto"
          />
                            </div>
                            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8"> <span class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" aria-current="page"><RichText.Content value={attributes.contentYss} /></span>
 <span class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentXXC} /></span>
 <span class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentNal} /></span>
 <span class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"><RichText.Content value={attributes.contentJwE} /></span>

                            </div>
                        </div>
                        <div class="hidden sm:ml-6 sm:flex sm:items-center">
                            <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentalR} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYCU }}
        >
      </svg>
      
                            </button>
                            <div class="ml-3 relative">
                                <div>
                                    <button type="button" class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentylD} /></span>

                                        
      <img
            src={ attributes.imageurlIYI } 
            alt={ attributes.imagealthDn } 
            class="h-8 w-8 rounded-full"
          />
                                    </button>
                                </div>
                                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentsTQ} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentejT} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentzke} /></span>

                                </div>
                            </div>
                        </div>
                        <div class="-mr-2 flex items-center sm:hidden">
                            <button type="button" class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentPZW} /></span>

                                
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjMO }}
        >
      </svg>
      
                                
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQqV }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div class="sm:hidden" id="mobile-menu">
                    <div class="pt-2 pb-3 space-y-1"> <span class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" aria-current="page"><RichText.Content value={attributes.contentHUm} /></span>
 <span class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentOjA} /></span>
 <span class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentjgs} /></span>
 <span class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"><RichText.Content value={attributes.contentOoR} /></span>

                    </div>
                    <div class="pt-4 pb-3 border-t border-gray-200">
                        <div class="flex items-center px-4">
                            <div class="flex-shrink-0">
                                
      <img
            src={ attributes.imageurlism } 
            alt={ attributes.imagealteTK } 
            class="h-10 w-10 rounded-full"
          />
                            </div>
                            <div class="ml-3">
                                <div class="text-base font-medium text-gray-800">
                                    <RichText.Content value={attributes.contentgWf} /></div>
                                <div class="text-sm font-medium text-gray-500">
                                    <RichText.Content value={attributes.contentJoV} /></div>
                            </div>
                            <button type="button" class="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentlQK} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBCy }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="mt-3 space-y-1"> <span class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText.Content value={attributes.contentBtL} /></span>
 <span class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText.Content value={attributes.contentvpg} /></span>
 <span class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"><RichText.Content value={attributes.contentwQn} /></span>

                        </div>
                    </div>
                </div>
            </nav>
            <div class="py-10">
                <header>
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <h1 class="text-3xl font-bold leading-tight text-gray-900"><RichText.Content value={attributes.contentTQg} /></h1>

                    </div>
                </header>
                <main>
                    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div class="px-4 py-8 sm:px-0">
                            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"/>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        