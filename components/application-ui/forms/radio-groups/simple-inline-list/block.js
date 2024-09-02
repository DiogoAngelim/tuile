
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-inline-list', {
            title: 'simple inline list',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABQBaADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAMEBQYCAQf/xAA2EAACAgIBAwMCBQMDAwUBAAAAAQIDBBEFEiExE0FRInEGFDJhgRVCkSOhsRZi8DNSgsHR8f/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgX/xAAhEQEBAAEDAwUAAAAAAAAAAAAAESEBAxMSgeECMWHw8f/aAAwDAQACEQMRAD8A/Q8LksPPtyasS9WTxbHVdHTThJe3f/nwe8LNxs+mV2JZ6kIzlW30tfVF6a7/ALnB4NeRxudy34ixFOyNHKX1ZlKf66dp9SXzFts98XmW3cVx2JiZVmNTyPJXqd9faXSm5JJvw2WJXe5GRTi4878myNdUFuU5PSSIpZtUc2jFUbZSug5xnGDcNLXmXheTiOaWRHjfxFxNnIZWTRg11XVTnZua6k9wnL+5e5qxruq5XieMhn5jouwbnKTufU3209/K32+BBq0/iHCvhOyivKtrhdGj1I0ScZSba7P3Sa7s1j894hXYH4OwMjHzMpSv5GFcou16UfWkmkvbfv8AJo0Ry+W/qnIWc9fx88TMnTVFTSpqjBpLri+0t/uxB2JF+ZoWWsT1YfmHD1FXv6unet6+NnE/iLPyLLeSyMHM5WcsGC+rHnCvHqko777e57/nyWMbHeX+OcHKsysmM7eLjkOMbNR31R+nX/tfloQrq8HMrzsf16oWwj1Sjq2Dg+z14ZYOExM/PzcXh8CefkUrOy8mNuRGf+p0wbcYKT8b8fwec/N5HDo5bjKOSyJ/lMrFjTkzluyKsa3Fv31/99xCu9ByGuQ43nM7jcXk77/W42WRVPMsUvTtUulaetJd/sffw1fkUctXh8hdyleVZj9Uqcucba7GtblXNePt47iK64AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWxMDFw1kRx6lFZNsrrU25dU5eX3+dePBU/6e4j+mf038lH8opuxQ6pfTLe9p72v4Zdx8qvIhbKCklVZKuW17x86PNefjSxKcmdsaYXRTj6slF9/wCQIMXhONxMG7DoxYqjI36qk3J2bWntt7YxOF47DnjTx6HGWLCUKW7JS6Yye2u77/yXHfTFTcra0oJOTcl9Kfu/g9KyDn0KcXPXV0776+QKMeE46OBTgxxtY9NvrVw65dp9Tlve9+W2Q5f4b4fMzZZeThRnbJqU/qkoza8OUU9P+UXM3kMfDqslZZB2Qg5el1pSa/ZE1mRRXZGuy6uE5/pjKSTf2RRmZn4Z4bOybcjKw1Oy5as1ZKKn20m0nrf7+SxbwvHXXYd08f8A1MJJUSU5JwS1pdn3Xbw9l2c4Q6eucY9T6Vt62/g8zvph19dtcfTSc9yS6d+N/BBQs4DirOPWBPETx42O2MeuW4zbbbUt7T234Yr/AA/xVWD+ShiJUO1WtdctymntSct7b7Lyy/HIpnCE4XVyhN6jJSTUn8L5PUZwlKUYyi5RepJPuvfuBWv4vBycqeTfjxstnQ8eTk20629uOvHn+SDjuB4zjLvWw8Zxs6OhSnZKbjH4XU3pfYuLLxnaqlkVeo20oda22vPY+rJx3Y61fU5pNuPWtrXnsBKCrdyGJVh2ZXr1zrrT24TT2/hfuKc+ieNVdbZVT6v6Yyti9/Zp6f8AAFoEc8iiFirndXGbaSi5JN78diO3OxqcurFsuhG21bjFv/zz7fIFgEayKJXOlXVu1eYKS6l/AuvpoSd91dafhzkl/wAgSAi/M0esqfXr9SS2oda219j68iiNyoldWrX4g5Lqf8ASAjWRQ73Qrq/VS30dS6v8HjHyYXbT6Yz3L6OtSbSet9gJwQzy8aEFOeRVGLbipOaSbXsSTnCEHOcoxgltyb0kgPQI6sii5yVN1djh2koyT6fuePzuL6Nl0ciqUKl9bjNPpAnBTjyWPOFVsJwdNkJTdjnFdOteVvfv/B4weTjmqqVdWo29Wm7ItrWvKT37+Pb3EF8EVeTRbOUK765yh+qMZpuP3I5Z+Ise29ZNUq6lubjNPQFkFajNqyLK1Q4zrnW5qamvlLWt79z3DKxrIzlXkVSVfebjNPp+/wAATAiryce6Uo1X1TcP1KM0+n7kcs7H9Cd1VivUGk1S1N7fhdgLIK+JmQyZWw9OyqyppThYltbW14bRYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxcXjXYsyds8uuUsixxjG2UE1vs9IgxqnjrEszMO22v8nGtRVTm4S33Tj7bWv8AB0ILRzUOOyVXh41lU/Tya1C/X9kYy6km/s3E0ODpvirrcqEo2LppXUvMYLW/5bbNUCjmuRpksbkqJ4N12Rda512Rqck49tfV7a14/wD0nzqmrOSrswrbrclL0Jxr6l+lJLf9unt9zeAqKOfj2WcTKHUnfXBTjL/vj3T/AMozY1zvxaeRsx52xuyfXsrUeqXR0uMO3vrszcvoqyKnVdBThLzF+57ilGKjFJJLSS9hVc/Kq1deXVi2xoWbC2NSr1LpUdSl0+e77mhxjnZl597ptrhZZFw9SDi2lBLff7GiBRzCgrac3Hqw7Hk2Zs3C5V7S1Pz1e2tP/wAZYuwbZ8Zyiqpcb7ciTT6fqlHqT7b8rWzcrqrqUlXFRUpOT17tvbZ7FSOc/KzsxORnCF83PHUFGWMq+qS3rS8tr7HrksWxZtrlC30rKIwh6WMrdedx/wC3zv8A/h0IFIysDEcOQc7qpNwxaoRnZHvtdW+/jfjeiTNg1y2Bc6ZTglOEpRh1dLfTpv4XZ9zRAqueoomoYuN+UtWXVlepZc69Jrqbcur32u2jRzsf1+U4+UqfUrh6jk3HaT0tbNACjmpYd35y6u1X9U8v1IOGOpLW00+v20u3ktV1wrvvpyOPtuusynZGxQ7a3tPr9tL2/Y2wKkc1j4lyy667VkK2GU7G4466Wupvq9T4a/fftomlVlY2HDLooslfTfcvTUXuUZylrt8b6X9jfApHOZOBZi346/1JUQxfT3DH9bc97lte29+S9bj2Q/DE8eMbZTWO4qMl9XjstLfc1QKrDz8Cz1LK8KnoU8GUPpjpN9UdLfzrZ9hVHKynLFwrKK1iyrl6lXR1N66Y6fnWn3NsCjCxapzhxq/LWRVeNZXYpVtalqC7/fT+4qxb/Q42Fdcq5rDsi30tdE3GOt/D3/wboFRgVKKwY10cTZ+ZpxpRfXW4x3rTjv8Au2yHGxr7b8rVVjhPBda6sb0Y9W+y1+x0oFI59UX31QVFFtcnx06vqg4anuPbv79mebqnkVyeHg3UKvCtrmpVOLk3FdMV890zogKMW3CjCdUYY01XLCsrsVUdN/p0vjfnWz7xCthdb/pSdUaoqNs8f0p7W/pa/u18myBVUuJpjVgwmo2+pb9dkrY6nKXy17fYugEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEGRmUY8lC2b65LahCLnJr50k2MfMoyJOFU31xW3CcXCSXzppM10eqWYZ6tLKnABloAAAAAAAAAAAAguzKKZ9E5tz1vohFzlr7JNgTghoyacjaqnuUfMWnGS+6fdEwAAAAAAAAAAAAAAAAAAAAAAB4uuqor67pqEd62/d/BDDPx52Rh1ThKT1FWVyh1fbqS2BZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEc3yuXiYuL+WsddmZX+YutX6nvxHfskuw4TlcvLxcr8zY7LMOv8AMU2v9S15jv3TXY2+R4eF9apsxZZNEZOVfpzUbKt+Ut9mv5HHcPCit014ssaiUlKz1JqVluvCeuyX8nW59jhkz2/fbHhzuLd5bcfe3z5bhifiq22rEw/SlkLrzK4SjjzcZzi09xTTXn7m2U+T46vkqaq7LrqXVarYTqaUlJb15T+Tk6OiyXmX4GFXLExsxW35UKVHkLXL9Xun1PS/80R2c3y9FeXZdRhOGDdGu7pct2KTX6fjSkvOzUXDxlCuN+bmZHpXwvi7ZRbTj4XaK7H2/hsa+nNqnO1RzbI2Waa2mta12/7UXCM7kPxBdh8l6SlhzqjdCp1RcpWalpbbX0rz4ZCsiUs6pQTrS5mcJanJ9X+m/O3/ALLsaF34dxrbbZfmcuFdt6yJUxmuj1Np78b9vGyePDY0blap29Sy3l+VrrcenXjxoYGiACKAAAVeOqjXiQn5stSnZP3lJrbZaKVccnCj6UKXkUL/ANPoklOC+HtpNL2ewPvIxUK4ZUVq2mUdP5TaTX2a/wB9Fwp9GRl2Qd9fo0Qkpem5Jym143rskn38vwXAMH8UZEaJccrcjIoonkONrolJSa6X2+nu++jKsyM70FLHnkzxv6jRHEeU5RlNf3Jt9+nfydVlYVWVfjXWSmpY1jsgotab013/AMjNwqs1UK2U16N0Lo9LXeUXtb/YtRjy5vOoWTi5FGPLNryKqK3BtVy9RbTe+60t7PmTzfIYleVTdRjzzMedKi4NqFkbJa9+6fk0MnhcXJsyp2StUsmVc24y04Sgvpce3Z/5PC4HG9K2Nt+RbZdZXZZdOSc5OD3FeNa/j3GBSyOeyuPp5COfTRK/FVbg6nLpmptpb337a7lrhOWtzsjIx71VKVSjKNtUZRjJP21LvtaLGVw+LlWZU7nY3kwhCSUtdPQ24te6e3/sS4OB+TlZOWXk5M56TlfNPSXskkkv8DAo9d+V+IM+FVnS8TFhGpP9KnPb6mv/AIpGfxVlmNn4lPIy5PGzJ7jN3WepTkS13Se2l8rWvg158fJ8xfe4xnjZeN6V8W9Pab1/DUmiPG4Kqm+iyzMy8iGM901WzTjB61vsk3peNgYvB8zlY3BZMcuyd+TGKsxnOTlKxTbjFbfd6mtfyj7jR5W3gcTdmVlqrItjlKq5xtsSlJLUm96T9tm1X+H8Gt4Ev9STwHJ1uTX1be/q7d9PuvsJ8Fj+jXCrIyabKrZ212wklKLm25Lxprv40W6DKsyYv8O5l+Jk5nq4VqtVeVtWUtafQ35aa3535OpjLqgpLw1sxcrg3/TLsPHtstnmWxeTfdPcnHa34/ZaSXybaWlpE1AAEUAAFSlK3kMiyfd0NV1p/wBu4qTa+/Vr+CzbXC6uVdsVKElpple6q2u95GMlNySVlbeurXhp+z/5PjuzLV0VYsqG+zstlF9P7pRb3/OgPXHznPDj6knKUJSrcn/d0ycd/wA6IucsnVwefZVOUJwx7HGUXpp9L7pluimFFMKq99MFpb8s8ZmNDMw7sW1yULoShJx8pNa7AcxxeVZLLw58bkZ+RT6EpZbyHOUN9P06c/fq+PY06eYvsx+HsdVblnpuxLfbUHL6e/yvc16qo148KVtwjFQ7+6S0ZON+HMbGtx5rKzJxxnL0a52LpgpJppdt+/zsqKWLzWVnYuXC+WLXNY1k3THrhdU0vDUvP3WiTheQ5Cv+lY2ZCiVOXi7qnByc04xT+rfnaZcr4GiM3O7Ly8hqqVNbtmm64y86eu7/AHeyxXxdFcsCUZ2bwK3XVtrunFR79vhe2hgVs/O5FcxHj+Prxm3jO5yu6uzUta7FbH5vM5GOHXx9NEL78d5FjubcYJS6dLXd99mv+Sq/qaz+qfqqn0dbXT09W/8AJRj+H8aujGrx8nKonjQlXC6uaU3FvbT7aff9hgZ8eV5LNzeHljumiF7thdVJOX1Q2pd/jt2/3KmTLKy6MSjHddVVvI2wnFzs+ppy8tS3rt4+Tf8A6HiRpw66Z3UvDk5VThL6tv8AVvae97ez1Xw2NX6PTO3/AEcmeTHbXeUt7T7ePqZaM1clbRfl04lFbyLuQ9CHXOTj+hScn3+F4WizlcjyOHg7y1gUXu7ojZOcvTnHW9qK+pv21/uT3cHi2xuTsvjO3IWSrIySlXPSW49vhe+/J4lwFLrrf5vM/MV2u1ZHqJz6mtPyta121omBlWczyWZi4FuLPHqnLPeNZ9MumbSev36Xrx58FmXJW4uVnV49Fcsi3Nrx4dU5dLk609vu9JJPxot/9P4qwvy0b8pNZP5mNvWuuNnzvX38/JJdwmLcsjrsuU7ro3dcZJSrnFJJx7dvH7jAoXc5yGPG/HsoxpZtORTV9Lkq5xs8P5Xv8mhxeblX5eZh50KVdiuD6qd9MoyTa8999meIcDjKtqd2RbZK+F87ZyTlOUP0p9ta7eEi5ThVU52TmRlN2ZKgpptaXSmlr/IwLIAIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=" />),
            category: 'common',
            attributes: {
  "contentUPC": {
    "type": "string",
    "default": "Notifications"
  },
  "contentXkb": {
    "type": "string",
    "default": "How do you prefer to receive notifications?"
  },
  "contentyYo": {
    "type": "string",
    "default": "Notification method"
  },
  "contentxYW": {
    "type": "string",
    "default": " Email "
  },
  "contentDJl": {
    "type": "string",
    "default": " Phone (SMS) "
  },
  "contentcJA": {
    "type": "string",
    "default": " Push notification "
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
        <div>
            <label className="text-base font-medium text-gray-900">
                <RichText tagName="span" value={attributes.contentUPC} default="Notifications" onChange={ (newtext) => { setAttributes({ contentUPC: newtext }); }} /></label>
            <p className="text-sm leading-5 text-gray-500">
                <RichText tagName="span" value={attributes.contentXkb} default="How do you prefer to receive notifications?" onChange={ (newtext) => { setAttributes({ contentXkb: newtext }); }} /></p>
            <fieldset className="mt-4">
                <legend className="sr-only">
                    <RichText tagName="span" value={attributes.contentyYo} default="Notification method" onChange={ (newtext) => { setAttributes({ contentyYo: newtext }); }} /></legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div className="flex items-center">
                        <input id="email" name="notification-method" type="radio" checked="" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        <label for="email" className="ml-3 block text-sm font-medium text-gray-700">
                            <RichText tagName="span" value={attributes.contentxYW} default="Email" onChange={ (newtext) => { setAttributes({ contentxYW: newtext }); }} /></label>
                    </div>
                    <div className="flex items-center">
                        <input id="sms" name="notification-method" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        <label for="sms" className="ml-3 block text-sm font-medium text-gray-700">
                            <RichText tagName="span" value={attributes.contentDJl} default="Phone (SMS)" onChange={ (newtext) => { setAttributes({ contentDJl: newtext }); }} /></label>
                    </div>
                    <div className="flex items-center">
                        <input id="push" name="notification-method" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        <label for="push" className="ml-3 block text-sm font-medium text-gray-700">
                            <RichText tagName="span" value={attributes.contentcJA} default="Push notification" onChange={ (newtext) => { setAttributes({ contentcJA: newtext }); }} /></label>
                    </div>
                </div>
            </fieldset>
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
        <div>
            <label class="text-base font-medium text-gray-900">
                <RichText.Content value={attributes.contentUPC} /></label>
            <p class="text-sm leading-5 text-gray-500">
                <RichText.Content value={attributes.contentXkb} /></p>
            <fieldset class="mt-4">
                <legend class="sr-only">
                    <RichText.Content value={attributes.contentyYo} /></legend>
                <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div class="flex items-center">
                        <input id="email" name="notification-method" type="radio" checked="" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        <label for="email" class="ml-3 block text-sm font-medium text-gray-700">
                            <RichText.Content value={attributes.contentxYW} /></label>
                    </div>
                    <div class="flex items-center">
                        <input id="sms" name="notification-method" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        <label for="sms" class="ml-3 block text-sm font-medium text-gray-700">
                            <RichText.Content value={attributes.contentDJl} /></label>
                    </div>
                    <div class="flex items-center">
                        <input id="push" name="notification-method" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        <label for="push" class="ml-3 block text-sm font-medium text-gray-700">
                            <RichText.Content value={attributes.contentcJA} /></label>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</div>
            );
            },
        });
        