
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple', {
            title: 'simple',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCADsBaADASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAIDBAYFAQf/xAA0EAEAAQMDAwMDAgUCBwAAAAAAAQIDBBETYQUSITFBURQicTKBBhVCkaEjJDNDUlNicuH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A/SJmZl8Gl1XqdvpdmzcuWb16b16mzRRZiJqmqddPWYj2VG6PPwesWMvJrxarV/GyaKNybORR21TTrp3RpMxMa/EtnHzcTJiucbKsXot/rm3cirt/OnoDOPOzet4WN0rI6hZu28q3jx90WbkVe+mnh9zOsYmN07LzLV23kxiUzNyi1XEzE/E/Eg9AYMfMxsqaqcfItXKqP100VxVNE/E6ej7YzMXJmuMbJs3po8VRbuRV2/nT0BmGva6hhXqbtVrMx7lNmNbk03aZiiOfPh8nqOBFqu7ObjRboq7aq92nSmfiZ18SDZGn03qNrqP1U2aZinHvzZmdYmKtIidY4+5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPsTMS+ADw/wCKouxY6detY9+/FjPtXa6bNua6opjXWdIe4A5TKnO6nm5HUbHS71NrGwbtq1byaOyrIrq08dvr26R76a6vMwsLIv5mXN3DzJxbvSqrVUW8OMaZq7o+2mJ9ZiNdNefV3wUcFcxs290Tq9i1hXbtFWPbpt3ZwZsXq5ir9E0x+rSPeIbnXulV28nqVPTsCqm1d6V2RFm1PbVXFfiPEeatP30diLRxFeDezbs09I6Xf6fVa6bdsXaq7W1FddURFNET/VpMT59PPquzZuXL9i90zot7HnF6fdt3qL1nbi9VNMdtv/y8xPnn1doJR+eWcTNuV5VdGHkRTX0e9Z7YwNiIr0jSiI9auNf2etldOt4VHQb38sru4mPRVF+zasd1UV1UREVTRHmdJifxq60Wjn/4Px67GN1LXCu4du5n3Llq1co7ZiiaadNI+HQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyzREzrE6Pm3ysRUbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8m3ysBG3ybfKwEbfJt8rARt8vsURE6zOqgBrZuXOJai5GNfvx51i1FMzTHzOsw2WPIiZxrsREzM0TERH4BpYXWLGVjfU12buLjzTFUXcjtppqifie6W3Xl41vHjIryLNNmfS5NcRTP7+jmL+Fl/yfolU270UY8TvURY3KqZmnSJ7J9dPP41RGPkWMHHppxr1VmvKuXJruYcVVWomPHbbj0iZ19fT4WJXU15mJRbouV5VmmiuJmmqbkRFUR6zE+5Rm4ly5Rbt5Viqu5HdRTTciZqj5iPeHL9L6fequdKoysO5Nu3fyZqi5Z0imJj7ZmPSPPp7fC7HTKrOLhVW8Gqi7T1TumYtTFUW+6rz/66acEK6wBFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAanUuoW+nWrVdy1duzeuxaoptREzNU66esx8A2xoYvV8a/VeouxXi3LM0xXRkRFMx3ennXSdfyz1Z+FTaou1ZmPFuuZiiubtOlUx66Tr5BsDX+q/38Y3ZHbNrd7++n5007fX9/RdjKx8iKpx79q7FE6VdlcVafnQGUatXUsGnGvZEZdmu3ZjW5NFcT28ePd8t9Twa8S3lfV2abNz9NVdcU+fjz78A2x8iYqpiqmYmJjWJj3fQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHj/xHj5GRawKcbviunNt1TXRR3dkefu0+I5ewA5zqfRaqcG9VVXezcjIvWou1VU/0xVHiIiPEaavudjWcTq9V290yvJxKsXbtU2bPfFFXdMzGkemuvq6IWpHF0YObERhefq/5PNPbr5/4n6f7eFWen5N+zl/TUZVFycKbXbXi02KZnWPt5nn/AC62jGsW8i5kUWqIvXdO+uI81aRpHllKRzlqzj5djIt4vRruPX9HVb77lvbiZ9qNPedY114al2xr0/ptdOJmWb1ixNuf9nuU92kRVFVHr508S64KRqdJi7HS8aL9imxci3HdapjSKeOPw2wRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrZ+dZwMfev90xNUUU00RrVXVPpER7y2Xl9fs3q7OLkY9qq9Vi5FN6q3T61UxrE6c+QZcTqlvIyZxruPfxb8Ud8UXqYjup+YmJmFXup4tGFkZVi9byIx6Jqri1XFU+I9PHo0r3UcnNx8qjF6Zeqt049XnIomjvq/6Ip9Z99XhWsXLrrzaqca/219MqtxH0mzHfrH2xEesrErr/AK3Gpps7t+1aqvUxNFFdcRM6/Ee77czcS1c27uVYoriYjtquRE6z6eHJ5+BkTl5O/ayaqMixaptbeLF30p0mNZ/ROvn2+W3c6ZVcq63N/Equ3JxLdNmuu3rNVUW517Z951iPT3IV0OTmY+LH+tet0VzEzTRVXETV+In1YbPVMSvCx8m9etY8ZFEVUU3bkUz59vPq565j3KK8irO6bfy6snCtUWZi139lUU6VUzP9M6+Wvk4+ZODj2KsG5E/y+mimqnE3K6qvOtEzP6NCFdhXl41u7Fq5kWqLlUxEU1VxEzr6eOWZzvR8Gqeo2b2Xi1d1vp9immq5b/TXHrHn3j+7ok1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGp1LqFvp1q1XctXbs3bsWqKbURMzVOunrMfANsaOH1OzlZFeNNq9YyKKe+bV6ntmafTWNJmJj92zYysbImqMfItXZo/VFFcVafnQGUYKM3Er3OzKsVbUa3NLkT2Rz8LqyLFOndetx3UzXGtUeaY9Z/HIMg1v5jgdtVX1uNpRETVO7T9uvpr5Xcysa1ZpvXci1Raq07a6q4imdfiQZhhu5mLZpiq9k2bdNVPdE1XIiJj5/HmGG91XBsZGPYuZNuK8iJm390aTHzrz7fINwYYy8acmcaMi1N+P8Al98d39vVmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeR/EdNzawbluzdvRZzbdyum1RNVUUxrrOkPXAc1l2szq+RkZGPi38ai3h3LNub1PZVcrq9tPaPHrPywUYtzKrtR07AvYVVrCu2rtVdvb7qqqYimnX30nzq6wWpHK2se3f6dVjY/R79nKowa7VVyu3tx3TTp26/1az7/umurIzZs9mBl29rp121VNyzMffNMR2x/Z1gUjmcLpNqMzpM3On09tOFMXe614ivSn9Xj18z68tC3g5lvC6VcvWcim3at3aKqYxt2q3VNU6a0T8x7u1Ckcv07pk/UdKoyMa7cs2rN6f9e1EdszVGkTHmI9Z0hixcK5jz0m7dwbtVvHv36KqYtTVVTTVM9nj1093WhSOVtY92z1yPp8S9XTXlzXcpv40aUa+tdN2P8Q6oDdUAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGp1HqFvp1q1XctXbs3bsWqKbURMzVOunrMfDbeR/EePeybWBRZi7rGbbmqu3Gs0R5+7jT5kwbOH1SzlXL1qq3dx7tiIqrovxFMxTPv4mY0/dnozMSuxN+jJs1WonSa4uRNMT8auXyum5sY/WMeaci/kV1W66L9VPdu2omJ7Y9tY8+Pdr5mNVHSOqXooyO25FmmYuY0WIqmK49Ij+2uixK7KzlY9+KqrF+1ciidKporie386Jt5uJct13beVYrt2/11U3ImKfzPs5jKw72bXnV9LwL2JbnCi1NFdva3K+6J0iPf7YmNeX3Jx6sr6y70/pt/Gtfy+q1NFVmaJrrmfERT76RE+SFe9f6z02xXbprzLOtyuaImK4mImI18/H/ANbP1eN9T9N9Ra3/APt98d39vV4nUcG1j43SrlrA77di7TN2i1Z7qtJpmJmYj186atace7a67/t8S9civM766b+NE00/Nym7HpHxH+CDqgEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY79i1k2ZtX6IrtzMTNM+nidY/wAwyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==" />),
            category: 'common',
            attributes: {
  "contentPFf": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentiXp": {
    "type": "string",
    "default": " Team "
  },
  "contentaHQ": {
    "type": "string",
    "default": " Projects "
  },
  "contenticf": {
    "type": "string",
    "default": " Calendar "
  },
  "contentvJS": {
    "type": "string",
    "default": " Documents "
  },
  "contentxjx": {
    "type": "string",
    "default": " Reports "
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
        <nav className="space-y-1" aria-label="Sidebar"> <span className="bg-gray-100 text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="page">
    <span className="truncate"><RichText tagName="span" value={attributes.contentPFf} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentPFf: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span className="truncate"><RichText tagName="span" value={attributes.contentiXp} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentiXp: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span className="truncate"><RichText tagName="span" value={attributes.contentaHQ} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentaHQ: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span className="truncate"><RichText tagName="span" value={attributes.contenticf} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contenticf: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span className="truncate"><RichText tagName="span" value={attributes.contentvJS} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentvJS: newtext });
      }}
    /></span>
</span> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span className="truncate"><RichText tagName="span" value={attributes.contentxjx} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentxjx: newtext });
      }}
    /></span>
</span>
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
        <nav class="space-y-1" aria-label="Sidebar"> <span class="bg-gray-100 text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="page">
    <span class="truncate"><RichText.Content value={attributes.contentPFf} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span class="truncate"><RichText.Content value={attributes.contentiXp} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span class="truncate"><RichText.Content value={attributes.contentaHQ} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span class="truncate"><RichText.Content value={attributes.contenticf} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span class="truncate"><RichText.Content value={attributes.contentvJS} /></span>
</span> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span class="truncate"><RichText.Content value={attributes.contentxjx} /></span>
</span>
        </nav>
    </div>
</div>
            );
            },
        });
        