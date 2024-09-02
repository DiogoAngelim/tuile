
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/large-badges', {
            title: 'large badges',
            icon: (<img src="data:image/jpeg;base64,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uCDn8FbK+h1GadWqzgyugyWyAlhBJJOMHgc9l00TUTyrXWrw1YGQV4xHGwYa0eCkMbzkry36ltXR4cJe1Mq8SN3DjuFpUlape66LGGeP65EOgaXA9jo6x/lncwOle5oPngnC9/wXTviBP8P84k6o+d2A/OcgZwF0EVWWo50mh6bJO6Z9YF7n9Q4e4DdnOcZxn7qFqegvv2pXl1QMlwDIYf5rB2IBzg/uRwu8iaLjKg2NIoWpurNBucQA7D3APA7BwBwfypwHYAfhFsi7pEydvUbdo57la54yTub+VvRaS6b6605lmvFbrvr2Gb4pBhzckZH4UaDR9Prvc+ODLnNLCZHuedp7j5iV0pvrK1reZXXVZ2IFbRtPqyNkhg+ZrSwFz3Ow0+HJ7fZYr6Lp1aeOaCAtkjzsdvcduQQcAntyeF0EVueX1Go4VXQXRX4rEpqARPL8wwljpDggZ5wBz2C6Eek0IrQsxwYkDi4fMdrSe5Dc4B/Cmol8mV/TUZa0uOAMlS42bGAe68QfQtqwyu+mmMRZYyx2R9KhXaFW+1jbUZeI3bm4e5pB88ghdc9ioTvqKvhlSxz26Lpza0lcVhskcHOO5xcSOx3Zzx+6N0bTmwTQivlk5Bk3PcS4jsck5z91PRX5ZfUOY7RasdaxHTjbHJOwNc6TMgdjzBPPcrTpmiNqzTSzsrYli6XShjIZtzk5ySSSuyinnlrWxDp6XToyGStEWvLdu5z3OIb5DJOB9gp8bC88dvErwO6mM+gLPPKpkZwNu3wxhR3NLTgqSvL/AKSs5dLxybekUbtj4ixE4y7Nm5sr2/LnOOCFh+jae+KGL4YNZACIwxxbgHuMg85U9Fryy+rbrnu0XTnV4a/w+I4CTHte4FuTk4IOeVpt6NEaDKtKKuyNshk6crC9pz+cj8LrIpmeX03XJo6HBFRlr2mxydWXqkRtLGsOABtwcjGO+cqdTp16UZjrR7Q525xLi4uPmSeSpCy36goudv8AS216jYScnsFte3c3HivXgixt2rtGIIOCubLoWmzTSSy13OdK7c8dV+1x+7c4/suvN2WlGuOVncQLOi6dakc+avkuYGODXuaHAdsgHHHgljRtPtSB81fc4MDOHuG5o7A4PP5U9EW55fXF1DRDOYBWZT6cMQjY2eIvLAOxBzz+xUhmh0vgq1eZjpDXj2NkDixxHjyD2PkukiJ9mWtbeIYY4IWQwsDI2DDWjsApETCDuP4XmL6lvRjlRERQoIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//Z" />),
            category: 'common',
            attributes: {
  "contentGOc": {
    "type": "string",
    "default": " Badge "
  },
  "contentYdA": {
    "type": "string",
    "default": " Badge "
  },
  "contenttNn": {
    "type": "string",
    "default": " Badge "
  },
  "contentyTW": {
    "type": "string",
    "default": " Badge "
  },
  "contentIuH": {
    "type": "string",
    "default": " Badge "
  },
  "contentbEU": {
    "type": "string",
    "default": " Badge "
  },
  "contentRhF": {
    "type": "string",
    "default": " Badge "
  },
  "contentFcy": {
    "type": "string",
    "default": " Badge "
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
<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800"><RichText tagName="span" value={attributes.contentGOc} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentGOc: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800"><RichText tagName="span" value={attributes.contentYdA} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentYdA: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800"><RichText tagName="span" value={attributes.contenttNn} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contenttNn: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800"><RichText tagName="span" value={attributes.contentyTW} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentyTW: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"><RichText tagName="span" value={attributes.contentIuH} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentIuH: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"><RichText tagName="span" value={attributes.contentbEU} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentbEU: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800"><RichText tagName="span" value={attributes.contentRhF} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentRhF: newtext });
      }}
    /></span>

<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800"><RichText tagName="span" value={attributes.contentFcy} default="Badge" onChange={ (newtext) =>  {
        setAttributes({ contentFcy: newtext });
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
<span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800"><RichText.Content value={attributes.contentGOc} /></span>

<span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800"><RichText.Content value={attributes.contentYdA} /></span>

<span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800"><RichText.Content value={attributes.contenttNn} /></span>

<span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800"><RichText.Content value={attributes.contentyTW} /></span>

<span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"><RichText.Content value={attributes.contentIuH} /></span>

<span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"><RichText.Content value={attributes.contentbEU} /></span>

<span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800"><RichText.Content value={attributes.contentRhF} /></span>

<span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800"><RichText.Content value={attributes.contentFcy} /></span>

    </div>
</div>
            );
            },
        });
        