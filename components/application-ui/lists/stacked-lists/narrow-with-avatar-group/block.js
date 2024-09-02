
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/narrow-with-avatar-group', {
            title: 'narrow with avatar group',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCADaBaADASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAIDBAUGBwH/xAA8EAABAwMCBQIFAwMBBgcAAAAAAQIDBBESBVEhMVKRkhNBBhQiYXEVMoEjQqHBBxZisdHwM1Nyc4Ki8f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAwIE/8QAHBEBAQEBAQEBAQEAAAAAAAAAABEBAiEDEiIx/9oADAMBAAIRAxEAPwD6cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZJEjbkv8JueNg1HUtR1KpbUz+nDFIrWRQ8Etuq81U9LUPzlXZvBDykdLI51QrVVHOlct7qnv9jz993xt8ebtddadqNuiKi7nK1DWq/Rljmgl9WLNEfFKquTH7LzQ2pVmWibFd172vficrU6KSTTnxql5FtbivP+TPNm3Hp65vPuPfU07KmBkrOT2ottrmU4+iyKykgavNGoxyfc7B6eOv1jw7k2NTU9Rp9MpfmKnNUVyMYxjcnPcvJrU91U16HWo6qsWjnpamiqUj9RsdQ1EzZeyqioqpw4XS9zB8T09RJT0VXSwOqH0NWyodC39z2oiotk9143T8GCfVqvUKWtZQ6NUPibSvW9XGsfqP8AZiNXi5Od+xojo1GsUUenVdbBPFVNpI3PkbDI1y8Evbhy5GxFW00lO6b1o2tjajpLvT+nwv8AVtw3PAx0ddK/UXx0dT6cmjSRIiUCwIsmSWajU4qu1/udPU9MrHVsVLT08q02rwwx1b2tW0XpqmSu2uz6f4ER6aPUoXT1DJXRRRxOY1sizMVJMkRU4XunP35+xsU9TT1UfqUs8UzL2yjejkv+UPIapps9RqOpMWilkgl1GiW3pKrXMRrUcv3RON9jsaPRrSfEWs+nTrDTSJA6OzMWOdi5HW9tr2EV0aHUIa59WyFr0WlnWB+SJxciIt048uKGGk1ugqdKp9SfO2mgqE+j5h7WLztbna/Dc4+naEtTX6vNUzalTZ1zlYkU74mvbi36kROfvx+xyaanrYdI0Snm06RrWU8iOf8AI+vIx6u/Ziv7EVPdREe5WrpkR6rUQ2Yz1HfWn0s6l2TgvE1dV1il03T5atzmy+nGkqRsemTm3RLp9uKcTx1PpWo/pmjRfKTp83T/ACVYjmKixMSVHXdt9Oafygfpeov0HWWS0k6y08DKClTBVWRjHquTU90VFb2EHtK/UYqSKVWLHLNHhlF6zWKiOciIq5Lw5/yZV1CibOkDqynSVXYIxZW5K7a1+fFOB46ahr4NC1TTJ6WeorVqYplq2RKvzbVlat+HJWpwVvsibFajpL5NM+JJk097qt9Yj6d6RKr3IiMVFZwuqXy5fcQewfW0kdU2lfVQNqHftiWREev4TmZzxWpU00fxBM+joqiaSapie+Koo0fE+1kzbKn7LInuvNOR7UKAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmLxVbnNljdTSux45oqodaoZhKuy8UNHUeECPT97Vuibnk6yNvn1ua1FRHU6PSVtufMhWvqJY4lREVUv+Cs6dKfPgidPuXparJUSSvSyq3gmyE2PR11MuOhTxejG1icVOsaMDM5U2TipvG/yzx4+tu0BqV9TLAkMdO1jpp5MG53xTgqqq2+yGtUVtZTU7fmFpIpVkVqPcrla5Lc0anG/2NXLqA4TK6esdp80eKSu9duPHBzmpZOHO3AyTam6oo3LHG1W/JPmlRbpZbWRt0XhxR3YsHZBxH6hXNbU/Lx0/pUkTHrnkquRW3VE4/nibWsyquhzTRKqKrWubZbLxVBB0Qcv56rhkqYatKZHxwpKxyOVrLKqpZb/AHQ14NZmcr0csEjY3xZSRtc1MHrZeC+6LbiIO4Djw6vLNIsbY2I51SjI+fGNb/V2a7/Bi0Svkqaf0I1a5sDXeu56rkqqq2RP+og7oOHTVlc+KCGjjp0RKNky+pkvFbpbnf2KqNYnSOlkjSGGOaFJPUmRytyX+y6cvyog7QOLWVU81R6bHKiZMiaxkqtRz3NVyqrk42ROVuZjp9RkpmOklydGjJlWNX5q10aonBy8VRb+4g7wOJTarWVDnxMbTvlWJZI8WvRqKipdq3/PMyR6tJPQTVsaQxQ3RsSzKqcf7lW334InvYQdcHDZrFTJErY2wPmSpZCjrOaxUcl72XihS6jqMbZZJWUqx08zYpMcrvuqcU24OTnf3EHaBx5dRr0+dmjjp1gpJFa5Fvk9ERFW3si2Uxy6ktItZI1UVZKpkcavurW3jat1RONufIQdwGjpVc+sZKkiNyifjkxFRrkte6IvFDHTVddUubPFFAtK6RWY3VH4oqplflzTkSDpA5EWpVTmw1To4flJ5kjaiXzRFWyOX25+xjZqWpSMgkbHS4VEroWIuV2qirxXxXh/ksHbBqabUy1MUqTtYksMro3Ky9lt7pf8m2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEyRtkbZxz62hdIxqtTJWrdDpA53nNXnredrzjqRqLZY7O/Bmo9NmdVNlcjo2Mva/C53QZ58cza16+27kiY2JG2yd9ygDb/GLBWUjKuNrXuexzHI9j2LZzVT3Q1l0mNcHJVVKTMe5yTZIrlullTilrWRPY6AA0qfTIKdYFY+VywOe5uTkW6u534Bml08cVZG1XolXlnx5It+CbJxVf5N0Aan6dDhUsyktUxpG/inBEbjw4bH5Lp0csMkL5pljexjMcks3H3ThzX3NwAadXpsFW+R0qvvJEka4rayI7JFT73MaaTEqVHqzzyuqI0je57kuiJeypZOHM6AA0otMpoqinmZllTxekzjwtuv34r3U/IdKp4VhWJ0jXRNc3JFS7mqqqqO4cUupvADUptPhpnNWNz1xgbAmSp+1L29ufExO0piwRwMqqmONkXpKjXJZzfuipa/3Sx0ABzKrSWut8v6aNwax0ciKrVRv7Vui3RU3MlLpdPFDI19PC10rVY9I72xX2S5vgUaDdLRInxurat6OZ6aXen0t+3Dn7XXifjtHpla9kbpImucx7WxqiIxzeTk4c+CHQAo58ekwsfm6aeR6zNmVz3JdXNSye3IyyadDJFURq6S08qSusqcFTHlw5fShtgDkt0hZZataiaZsc8yuWNj/AKXtsnPhdPfkbMumwSJLd0jXSSpKjmqiKxyIiIqcNkN0CjUZRYMRFq6lzvUSRXK/i639vK2P2QhmlxMnR7Z50jST1UhR/wBGXPa/Pja9jeAGgzSYWStcksyxMk9RkKuTBrud+V+fHmZI9Ohjip42uktBKsrbqnFVy58OX1KbYAw09Myn9XBXL6siyOvuu3YzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2AoE4M6G9hgzob2Ao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" />),
            category: 'common',
            attributes: {
  "contentppw": {
    "type": "string",
    "default": "Calvin Hawkins"
  },
  "contenteYG": {
    "type": "string",
    "default": "calvin.hawkins@example.com"
  },
  "contentAeR": {
    "type": "string",
    "default": "Kristen Ramos"
  },
  "contentIFs": {
    "type": "string",
    "default": "kristen.ramos@example.com"
  },
  "contentWNp": {
    "type": "string",
    "default": "Ted Fox"
  },
  "contentErD": {
    "type": "string",
    "default": "ted.fox@example.com"
  },
  "imageurlehz": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1491528323818-fdd1faba62cc.jpeg'
  },
  "imagealtizV": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlLDh": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1550525811-e5869dd03032.jpeg'
  },
  "imagealttui": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurloXr": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1500648767791-00dcc994a43e.jpeg'
  },
  "imagealtSLi": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
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
        <ul role="list" className="divide-y divide-gray-200">
            <li className="py-4 flex">
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlehz: media.url,
            imagealtizV: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlehz } 
            alt={ attributes.imagealtizV } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                        <RichText tagName="span" value={attributes.contentppw} default="Calvin Hawkins" onChange={ (newtext) => { setAttributes({ contentppw: newtext }); }} /></p>
                    <p className="text-sm text-gray-500">
                        <RichText tagName="span" value={attributes.contenteYG} default="calvin.hawkins@example.com" onChange={ (newtext) => { setAttributes({ contenteYG: newtext }); }} /></p>
                </div>
            </li>
            <li className="py-4 flex">
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlLDh: media.url,
            imagealttui: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlLDh } 
            alt={ attributes.imagealttui } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                        <RichText tagName="span" value={attributes.contentAeR} default="Kristen Ramos" onChange={ (newtext) => { setAttributes({ contentAeR: newtext }); }} /></p>
                    <p className="text-sm text-gray-500">
                        <RichText tagName="span" value={attributes.contentIFs} default="kristen.ramos@example.com" onChange={ (newtext) => { setAttributes({ contentIFs: newtext }); }} /></p>
                </div>
            </li>
            <li className="py-4 flex">
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurloXr: media.url,
            imagealtSLi: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurloXr } 
            alt={ attributes.imagealtSLi } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                        <RichText tagName="span" value={attributes.contentWNp} default="Ted Fox" onChange={ (newtext) => { setAttributes({ contentWNp: newtext }); }} /></p>
                    <p className="text-sm text-gray-500">
                        <RichText tagName="span" value={attributes.contentErD} default="ted.fox@example.com" onChange={ (newtext) => { setAttributes({ contentErD: newtext }); }} /></p>
                </div>
            </li>
        </ul>
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
        <ul role="list" class="divide-y divide-gray-200">
            <li class="py-4 flex">
                
      <img
            src={ attributes.imageurlehz } 
            alt={ attributes.imagealtizV } 
            class="h-10 w-10 rounded-full"
          />
                <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                        <RichText.Content value={attributes.contentppw} /></p>
                    <p class="text-sm text-gray-500">
                        <RichText.Content value={attributes.contenteYG} /></p>
                </div>
            </li>
            <li class="py-4 flex">
                
      <img
            src={ attributes.imageurlLDh } 
            alt={ attributes.imagealttui } 
            class="h-10 w-10 rounded-full"
          />
                <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                        <RichText.Content value={attributes.contentAeR} /></p>
                    <p class="text-sm text-gray-500">
                        <RichText.Content value={attributes.contentIFs} /></p>
                </div>
            </li>
            <li class="py-4 flex">
                
      <img
            src={ attributes.imageurloXr } 
            alt={ attributes.imagealtSLi } 
            class="h-10 w-10 rounded-full"
          />
                <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                        <RichText.Content value={attributes.contentWNp} /></p>
                    <p class="text-sm text-gray-500">
                        <RichText.Content value={attributes.contentErD} /></p>
                </div>
            </li>
        </ul>
    </div>
</div>
            );
            },
        });
        