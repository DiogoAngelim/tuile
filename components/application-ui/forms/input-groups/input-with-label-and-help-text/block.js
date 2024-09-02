
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/input-with-label-and-help-text', {
            title: 'input with label and help text',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABIBaADASIAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAAAAECAwUEBv/EADAQAQACAgIBAwMEAgEDBQAAAAABAgMRUaEEEiExBRNBFGFxgSKRMhUz0QYkNELw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/APusf1qM3kZsWD6d5uWMOacN8la09Pqj5+bb1/T2z53hxl+1PlYIyTM19H3I3uPmNPmPDx1wfU/NnycP1mt7ede9PsVyxitWZjUzr2n/AMHk/Svu+J59r+BN8uT6rFomcW7Wx+qvvHt/x1v9vlYj6enmeJkwWz4/Kw2w19rZK5ImsfzPw15PPxfawZfGtj8jHly1x+qmWuo3+d79/wCI93z3n+Ln8byfqn6b6f6sGTP48/8Ax5vWI9P+V60/+0xOvZo8TxPL3af03kemfquHLE28f7e66jdvTHtEf/p9yFfU/T/Nr52HJkpS1YplvimJ/M1nW+nqcv8A9P4smHw/Irlx3pM+XmtEWrMbibzqf4dRNUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGEZcfoi/3K+mZ1E79pn40VzYrZJx1y0m8fNYtG4/oGYxjLjmtbResxadVnfzP7NFvMpFpimPJkis6maxGt8e8xv+gekaqeRivinL64rWs6t6vb0zxO/hlXNit6fTkpPr36dWj/LXAMxrt5GCtYtbNjiszqJm0a2X8jBj19zNjruNx6rRG4BsGuM+GbWrGXHM0jdoi0e38lc+G82jHlpeaxuYraJkGwaMflYrYMWW9644yRuIvaIbwBhTNhyRaceWlor8zW0TpK58NqTeubHNK/NotGoBsGr9V48RufIxa3rfrj54bQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcuMV5+oz40f9ulp8iJ4mY1Ef73LHx8U/8AtMVfGvjy4bbyXmmo1qd+/wCduljw0xWvbHSIm87tP5lnueO1o5OD7kYvD8ecGWLYs27zNJ9MR7/n+3nti3T7N64pyVxzjmMl4r6J3M+qN/O9x8O9ueO2N8dcmvXjrbXxuNlSOVm8fyJw1y2pNd5a2mlYi+oiut6/Kfp8lvGmmGuX7mTN6qXtT0ejUe8+3xt2Pfg3PHZSOTki/wBvx618a2Olccx/2fXaLfmPfnn8p4njXt9v72C068Wa/wCVfifVPt/OnX3PHZueOykci+Ccfi+PNcU114uSMkxXWp9MfP8Ae18WsZJ8P7PjXxzjxz9y001E7rr5/O593VtHrrNbVia2jUxyVj01itaxERGogo4k4Mta4ZyUyxWfHimow+uYn8xr8Pbkpkn6d+kpTL9z7HtaY1HHp3y9+547Nzx2VXLzUrnwZI8fwslLRjiJma+jcbiZrr8+0MPIx2zR5N/H8fJSk4Yp6ft+mbW3x+0OvueOzc8dlHOzeJT9R5E08ePTPjarqntv3+P3+Ht8WLR4mGLRMWjHXcT8702bnjs3PHaCibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs3PHYKJueOzc8dgom547Nzx2Cibnjs95/YFHz/AJOby5x5/p2DPePJ/UWmlvVPqinp9ce/+qrf6tb15PNxzM44xYsdKTM+j13/AMpmdcRpYV3xyPG8ryPqWPNgrkrXJhyY7fdxxalbV3EzHv7/ABEx/bTOS/6nXrtr/qnp+fx9v4/gg7o8XmeT5FfJw+L4kYvu5K2vNsm5itY1+I+feYeSPqXmZbePhw48Fc975ceSbbmtZp+Y/ZIOwOH+s8ryM/hzEUr5FbZ8dqxM+ib1jUf09fh/UbeXm8auOtYrfB93Lvf+M71ER/cW/wBLB0R47eXkjyvMxemvpwYa5K8zM+r5/wBQ8GT6v5NY8eZ/T4a5cFMnqzRaK3tPzWLR7V1+/JB2xxPN+tZMHlZ6Yq4pp4+otW1bTbJ7bnUx7R8/l6/rWbPi+lXzeJeKXia+8x+JmP8AyQdAcTJm+o4vO822GcFpxYMd7xb1amYi3tWN+22V/PyRbyPJ8fB6rz42HJEbtP8AymfmI4+faNkHZHj+meVby8N73y4MnptqLYdxH9xPvEuXg8jy8Gfy81px5c2Tyo8bHE+qIidR+/tGv7IPoByMv1HzMFM+K+PBbycV8URMbilovOo/ePy92TJ5OD6ffLelc3kUpNvTjiYi0/iI/KQekcSv1byZ8PJkpbxM2St8dYinqrr1TqYtWfeP5b7ef5Xjz5OHyv0sZceKMtL7mtJiZ1773Man/awdQcLH9Z8i+LyIpHj5cuLJirW1YtWtovOvifeP5ZZfqP1LDHlzeni2jw5rOSYi0euJiJ9vf2nX8kK7YCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADzR4OGPqM+d/l96cf2/wBtb3v+Wmn0jxcfh5PGp64pkyfd3FtWrbcTExP41qNAD0eL436f1zbPmzWvMbtltvWuIjUQ1/8ATsP3PX6sm/1H6j5j/l6fTr4+NADLy/Dr5N8eT7uXFlxb9N8cxExE/Me8TEx8MMP03BhtgtS2SbYJvMTNtzabfMzzIAU+nYcWauak5JvTJkyREzGpm/zHw1/SfCt4seRly0imTyMs3msW3FI37Rv+5n+wBn5f03H5Oe2X7+fFN8f27xjtERev77j95YZPpOO+GuGPJ8muKMVcVqReNXrEa99x7T/GgKMsv0zHfNe+PP5GGMkRGSmK+otr2j8bj29vbT0eX42Py/Fv4+X1RS8amazqY/eABrp4NKzmm2XLe2fHXHe1pjeoiY38fPvLCPpmKtJrTNnpM4qYotW2piKb1Px8+4A2eJ4dPFnLf7mTLkyzE3vfW51Go+IiGF/puC+LNSbZI+7m+96onU0t7amP9ADGv0vDFbevLmyZL5KZLZLTHqmazuI+NaevNjjNhvjm16xaNbpbUx/EgDmeV9H+5hvEZsubLkvji18loiYpW29RqI/dun6RhvjzVzZ8+W+WKxOS1o9VYrO41qNR7+/wC0KfScUWyXyZ8+S+S2O1rXtG90ncfhtzfTsOavl1tbJEeXERfUx7ajXt7Ag348XozZcn3MlvuTE+m07iuo17cNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=" />),
            category: 'common',
            attributes: {
  "contentWxB": {
    "type": "string",
    "default": "Email"
  },
  "contentaDX": {
    "type": "string",
    "default": "We'll only use this for spam."
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
            <label for="email" className="block text-sm font-medium text-gray-700">
                <RichText tagName="span" value={attributes.contentWxB} default="Email" onChange={ (newtext) => { setAttributes({ contentWxB: newtext }); }} /></label>
            <div className="mt-1">
                <input type="email" name="email" id="email" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" aria-describedby="email-description"/>
            </div>
            <p className="mt-2 text-sm text-gray-500" id="email-description">
                <RichText tagName="span" value={attributes.contentaDX} default="We'll only use this for spam." onChange={ (newtext) => { setAttributes({ contentaDX: newtext }); }} /></p>
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
            <label for="email" class="block text-sm font-medium text-gray-700">
                <RichText.Content value={attributes.contentWxB} /></label>
            <div class="mt-1">
                <input type="email" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" aria-describedby="email-description"/>
            </div>
            <p class="mt-2 text-sm text-gray-500" id="email-description">
                <RichText.Content value={attributes.contentaDX} /></p>
        </div>
    </div>
</div>
            );
            },
        });
        