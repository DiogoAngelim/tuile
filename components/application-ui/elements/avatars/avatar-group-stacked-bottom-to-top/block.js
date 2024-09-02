
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/avatar-group-stacked-bottom-to-top', {
            title: 'avatar group stacked bottom to top',
            icon: (<img src="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==" />),
            category: 'common',
            attributes: {
  "contentcfb": {
    "type": "string",
    "default": "Application UI"
  },
  "contentjJn": {
    "type": "string",
    "default": "My App"
  },
  "contentUJK": {
    "type": "string",
    "default": "Home"
  },
  "contentoqS": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentmmB": {
    "type": "string",
    "default": "Settings"
  },
  "contentErW": {
    "type": "string",
    "default": "Welcome to My App"
  },
  "contenthab": {
    "type": "string",
    "default": "\n            This is the home screen content. You can customize it to display whatever you need.\n        "
  },
  "contentxyQ": {
    "type": "string",
    "default": "\n    const sidebar = document.querySelector('aside');\n    const content = document.querySelector('main');\n    const openSidebarBtn = document.querySelector('#open-sidebar');\n    const closeSidebarBtn = document.querySelector('#close-sidebar');\n\n    openSidebarBtn.addEventListener('click', () => {\n        sidebar.classList.remove('-translate-x-full');\n        content.classList.add('ml-64');\n    });\n\n    closeSidebarBtn.addEventListener('click', () => {\n        sidebar.classList.add('-translate-x-full');\n        content.classList.remove('ml-64');\n    });\n"
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
        <html lang="en">
            
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>
                    <RichText tagName="span" value={attributes.contentcfb} default="Application UI" onChange={ (newtext) => { setAttributes({ contentcfb: newtext }); }} /></title>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet"/>
            </head>
            
            <body className="bg-gray-100 font-sans">
                <spanside className="bg-blue-900 text-white h-screen w-64 fixed top-0 left-0 transition-transform transform -translate-x-full ease-in-out duration-300 overflow-y-auto">
                    <div className="p-4">
                         <h1 className="text-2xl font-semibold"><RichText tagName="span" value={attributes.contentjJn} default="My App" onChange={ (newtext) =>  {
        setAttributes({ contentjJn: newtext });
      }}
    /></h1>

                    </div>
                    <nav className="mt-6"> <a className="block p-4 hover:bg-blue-800"><RichText tagName="span" value={attributes.contentUJK} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentUJK: newtext });
      }}
    />
        <span className="block p-4 hover:bg-blue-800"><RichText tagName="span" value={attributes.contentoqS} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentoqS: newtext });
      }}
    /></span>
        <span className="block p-4 hover:bg-blue-800"><RichText tagName="span" value={attributes.contentmmB} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentmmB: newtext });
      }}
    /></span>
    </a></nav>



<main className="ml-0 sm:ml-64 p-6">
    
    <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4"><RichText tagName="span" value={attributes.contentErW} default="Welcome to My App" onChange={ (newtext) =>  {
        setAttributes({ contentErW: newtext });
      }}
    /></h2>
        <p className="text-gray-700"><RichText tagName="span" value={attributes.contenthab} default="This is the home screen content. You can customize it to display whatever you need." onChange={ (newtext) =>  {
        setAttributes({ contenthab: newtext });
      }}
    /></p>
    </section>
</main>


<script><RichText tagName="span" value={attributes.contentxyQ} default="const sidebar = document.querySelector('aside');
    const content = document.querySelector('main');
    const openSidebarBtn = document.querySelector('#open-sidebar');
    const closeSidebarBtn = document.querySelector('#close-sidebar');

    openSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('-translate-x-full');
        content.classList.add('ml-64');
    });

    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
        content.classList.remove('ml-64');
    });" onChange={ (newtext) =>  {
        setAttributes({ contentxyQ: newtext });
      }}
    /></script>

</spanside></body>
</html>
</div></div>
                </div>
                );
            },
            save(props) {
            const { attributes } = props;

            return (
                <div>
    <div>
        <html lang="en">
            
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>
                    <RichText.Content value={attributes.contentcfb} /></title>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet"/>
            </head>
            
            <body class="bg-gray-100 font-sans">
                <spanside class="bg-blue-900 text-white h-screen w-64 fixed top-0 left-0 transition-transform transform -translate-x-full ease-in-out duration-300 overflow-y-auto">
                    <div class="p-4">
                         <h1 class="text-2xl font-semibold"><RichText.Content value={attributes.contentjJn} /></h1>

                    </div>
                    <nav class="mt-6"> <a class="block p-4 hover:bg-blue-800"><RichText.Content value={attributes.contentUJK} />
        <span class="block p-4 hover:bg-blue-800"><RichText.Content value={attributes.contentoqS} /></span>
        <span class="block p-4 hover:bg-blue-800"><RichText.Content value={attributes.contentmmB} /></span>
    </a></nav>



<main class="ml-0 sm:ml-64 p-6">
    
    <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-3xl font-semibold mb-4"><RichText.Content value={attributes.contentErW} /></h2>
        <p class="text-gray-700"><RichText.Content value={attributes.contenthab} /></p>
    </section>
</main>


<script><RichText.Content value={attributes.contentxyQ} /></script>

</spanside></body>
</html>
</div></div>
            );
            },
        });
        