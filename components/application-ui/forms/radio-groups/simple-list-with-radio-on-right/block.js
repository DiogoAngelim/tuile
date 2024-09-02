
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-list-with-radio-on-right', {
            title: 'simple list with radio on right',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAFrBaADASIAAhEBAxEB/8QAGwABAQEBAQEBAQAAAAAAAAAAAAIEBQYDAQf/xAA4EAEAAQIEBgIBAgUDAgcBAAAAAgEDBBESUhNRkZKh4QUhMUFhBhQicYEVMkIj8CQzNWJysdHx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEF/8QAHxEBAQACAAcBAAAAAAAAAAAAABEBIQMSEzFBwdHw/9oADAMBAAIRAxEAPwD+m1lGlaUrWlM/qmdfymd61bnCFy5CM7lcoRlKlKyr+3N/PvkLGAsfN/J3P4u+Pxl6F27X+WxcaSlbt2v0pTKv1Wn/AH+/Vs3sLZr/AAzZtXbfylu5cuRtYu9TOcKUpn9fv+n3yWI9dKUYRrKcqRjGmda1rlSlCEozhScJUlGVM6VpXOlaPE/IfN/M/KfBfK4zB4HC1+JpbvWqVlcrS9ONKVpWdP0yp+cv2fuH/iC7gfi/hPi8FXBW8RcwFu9O7jbui1COVKU/H3Wta0r9EK9sON/DXzdfmcLf4sbUcRhrtbVzgz1wlylGv60q7KKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA85ewv8AFGFxOKjgMTgcXhr86zt/zlZ0lZz/AOP1T7jRnwP8K38DD4OFu/anTAXrl2/KucdVZ0/40y//AB6sWjx1f4d+ew3x2N+G+PxeBp8biOJw5XYy4sKSzzh9fWX6Z/vVdz+F8ZZj8ZisLTAXsXhcHHCXrWJjWVq5Sn60rlnSuef3k9cFI5fwOAxOBwtz+d/k6Xrtys6wwlmkIQpyp9Z1/X7q6gIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Zz2x6+gUJzntj19Gc9sevoFCc57Y9fRnPbHr6BQnOe2PX0Z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CddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAJ105S7amunKXbVQCddOUu2prpyl21UAnXTlLtqa6cpdtVAA48vl8Xeu4n/Tvjv5izhZ1tznK9orOVPzSNMq55fvk0XvmsDhrNmeLuysSvQ10tzhXXGn650pT6yIOgOd/qlv/VI4elbdcPLCVxPG1fWVJUp0yrnmvDfM/HYqF2dnFQrGzHXOsqVjlHd9/p+4Nw4+K/iDC0+Ov4nAzpenZrCkoSpKFcpSpSlcq0zy+/y1XvmPjrGM/lLuKjG9nSNaZVypWv4pWuWVK1/cg3DH/qmBpS3WuIjTiX64eOdK/dyla00+H3sYmzieLwZ6+Fcrbn9V+pU/NAfUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UAnRDZHoaIbI9FAJ0Q2R6GiGyPRQCdENkehohsj0UA5+K+b+Owl+dm9flrt/dzRblOlv/AOVaUrSn+W63chdtxuWpxnCdKSjKNc6VpX9XlbePt/GW/k8JiMVDB4uWKnejK5Zrc40JVzpppnTP6+vz9ZMPyN2ssJhLGPwuHs3/AOSrcjS5rhCkq1rlGEI/8qfX7rEr3T4YvF2cHS1W9WtKXbsbUcqZ/wBUq5UeZ+Kw8PkflMDcxuq9WHxVm5TVKuVZ6pf1V51c23XB1j8ZWcrlfl/9Rt/zdK1lnnr/AOVPxl+Mv/6Qr348LHjS+ZuVvYmzax9Mf/RStLlbtbef1SlKfWisf2yy/L7WsNbtYSHyMKzpiqfK1hSeuv8AtrdyrHL8ZfsQr2g4f8VRtywmH42It2oUvUrWl6Mq2rn1X+mdafin9+Ti3MVh7nxXx1m9hbduxO7dpGV+/crYpp/GX6ypXP8AppUhXr7uLs2sZYws614uIpKsKZfVdOWf/wBvu8R8Xfu0sfDXblJ3ZWreNpSMa11VpT8Upn9/tTN8Pjb064vV8Xwo3L2Auy0WZznXiZUrHXWX5lStSFe3vYuzYxWHw1ytaXMTWVLdKU/OmmdfD7vE/Gf6ZX5r4L/T5Tld03P5nOsq/wBfCr/uz/5Z5/8AeT2xnCgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJW9fvzlTCUtxhGtY1u3KVrStafmlKUrTPLnmUvX7E40xdLcoSrSNLtulaUpWv4pWla1yz55nxf18dZt1/3246J0/wDdT6r5+/8AJ8p9/HXrdP8AfcjohT/3V+qefv8AwDXWlK5Z0p9fgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGe7hI3Llbtu5cs3K/VZW60+/70rStK9C1hI27lLty5cvXKfVJXK0+v7UpSlKdGgBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOquyXg1V2S8KATqrsl4NVdkvCgE6q7JeDVXZLwoBOq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vBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wDWMnGubvBxrm7wD/9k=" />),
            category: 'common',
            attributes: {
  "contentEMk": {
    "type": "string",
    "default": "Side"
  },
  "contentoRJ": {
    "type": "string",
    "default": "None"
  },
  "contentSnx": {
    "type": "string",
    "default": "Baked beans"
  },
  "contentIhS": {
    "type": "string",
    "default": "Coleslaw"
  },
  "contentQcs": {
    "type": "string",
    "default": "French fries"
  },
  "contentPny": {
    "type": "string",
    "default": "Garden salad"
  },
  "contentuxH": {
    "type": "string",
    "default": "Mashed potatoes"
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
        <fieldset>
            <legend className="text-lg font-medium text-gray-900">
                <RichText tagName="span" value={attributes.contentEMk} default="Side" onChange={ (newtext) => { setAttributes({ contentEMk: newtext }); }} /></legend>
            <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                <div className="relative flex items-start py-4">
                    <div className="min-w-0 flex-1 text-sm">
                        <label for="side-null" className="font-medium text-gray-700 select-none">
                            <RichText tagName="span" value={attributes.contentoRJ} default="None" onChange={ (newtext) => { setAttributes({ contentoRJ: newtext }); }} /></label>
                    </div>
                    <div className="ml-3 flex items-center h-5">
                        <input id="side-null" name="plan" type="radio" checked="" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                </div>
                <div className="relative flex items-start py-4">
                    <div className="min-w-0 flex-1 text-sm">
                        <label for="side-1" className="font-medium text-gray-700 select-none">
                            <RichText tagName="span" value={attributes.contentSnx} default="Baked beans" onChange={ (newtext) => { setAttributes({ contentSnx: newtext }); }} /></label>
                    </div>
                    <div className="ml-3 flex items-center h-5">
                        <input id="side-1" name="plan" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                </div>
                <div className="relative flex items-start py-4">
                    <div className="min-w-0 flex-1 text-sm">
                        <label for="side-2" className="font-medium text-gray-700 select-none">
                            <RichText tagName="span" value={attributes.contentIhS} default="Coleslaw" onChange={ (newtext) => { setAttributes({ contentIhS: newtext }); }} /></label>
                    </div>
                    <div className="ml-3 flex items-center h-5">
                        <input id="side-2" name="plan" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                </div>
                <div className="relative flex items-start py-4">
                    <div className="min-w-0 flex-1 text-sm">
                        <label for="side-3" className="font-medium text-gray-700 select-none">
                            <RichText tagName="span" value={attributes.contentQcs} default="French fries" onChange={ (newtext) => { setAttributes({ contentQcs: newtext }); }} /></label>
                    </div>
                    <div className="ml-3 flex items-center h-5">
                        <input id="side-3" name="plan" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                </div>
                <div className="relative flex items-start py-4">
                    <div className="min-w-0 flex-1 text-sm">
                        <label for="side-4" className="font-medium text-gray-700 select-none">
                            <RichText tagName="span" value={attributes.contentPny} default="Garden salad" onChange={ (newtext) => { setAttributes({ contentPny: newtext }); }} /></label>
                    </div>
                    <div className="ml-3 flex items-center h-5">
                        <input id="side-4" name="plan" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                </div>
                <div className="relative flex items-start py-4">
                    <div className="min-w-0 flex-1 text-sm">
                        <label for="side-5" className="font-medium text-gray-700 select-none">
                            <RichText tagName="span" value={attributes.contentuxH} default="Mashed potatoes" onChange={ (newtext) => { setAttributes({ contentuxH: newtext }); }} /></label>
                    </div>
                    <div className="ml-3 flex items-center h-5">
                        <input id="side-5" name="plan" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                </div>
            </div>
        </fieldset>
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
        <fieldset>
            <legend class="text-lg font-medium text-gray-900">
                <RichText.Content value={attributes.contentEMk} /></legend>
            <div class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                <div class="relative flex items-start py-4">
                    <div class="min-w-0 flex-1 text-sm">
                        <label for="side-null" class="font-medium text-gray-700 select-none">
                            <RichText.Content value={attributes.contentoRJ} /></label>
                    </div>
                    <div class="ml-3 flex items-center h-5">
                        <input id="side-null" name="plan" type="radio" checked="" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                </div>
                <div class="relative flex items-start py-4">
                    <div class="min-w-0 flex-1 text-sm">
                        <label for="side-1" class="font-medium text-gray-700 select-none">
                            <RichText.Content value={attributes.contentSnx} /></label>
                    </div>
                    <div class="ml-3 flex items-center h-5">
                        <input id="side-1" name="plan" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                </div>
                <div class="relative flex items-start py-4">
                    <div class="min-w-0 flex-1 text-sm">
                        <label for="side-2" class="font-medium text-gray-700 select-none">
                            <RichText.Content value={attributes.contentIhS} /></label>
                    </div>
                    <div class="ml-3 flex items-center h-5">
                        <input id="side-2" name="plan" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                </div>
                <div class="relative flex items-start py-4">
                    <div class="min-w-0 flex-1 text-sm">
                        <label for="side-3" class="font-medium text-gray-700 select-none">
                            <RichText.Content value={attributes.contentQcs} /></label>
                    </div>
                    <div class="ml-3 flex items-center h-5">
                        <input id="side-3" name="plan" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                </div>
                <div class="relative flex items-start py-4">
                    <div class="min-w-0 flex-1 text-sm">
                        <label for="side-4" class="font-medium text-gray-700 select-none">
                            <RichText.Content value={attributes.contentPny} /></label>
                    </div>
                    <div class="ml-3 flex items-center h-5">
                        <input id="side-4" name="plan" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                </div>
                <div class="relative flex items-start py-4">
                    <div class="min-w-0 flex-1 text-sm">
                        <label for="side-5" class="font-medium text-gray-700 select-none">
                            <RichText.Content value={attributes.contentuxH} /></label>
                    </div>
                    <div class="ml-3 flex items-center h-5">
                        <input id="side-5" name="plan" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                </div>
            </div>
        </fieldset>
    </div>
</div>
            );
            },
        });
        