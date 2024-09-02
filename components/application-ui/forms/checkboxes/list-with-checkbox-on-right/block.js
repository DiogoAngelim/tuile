
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/list-with-checkbox-on-right', {
            title: 'list with checkbox on right',
            icon: (<img src="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW70MV63eigBOK9bvQxXrd6KAE4r1u9DFet3ooATivW7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RXwwU7cUk+7VVccteHP9j6I/EaiXsiJdbrZOYpHC/p9S9sszYJklR8T2tnnRyyYLe3Dgn44miriq62gq03NsMjsfjarkyfit+Kpw/bidYCjiVsFbJO6elpZoZ5GN+tszcVXSRq6fi5u2oyqfStSkyV3yNV6MVEcrfviq8EU2gUcGloKtJGvkheib6k39yRHOx+NUuq63OnRQSRVNa57cWyyo5nHmmLUv3RTWBRxG0lYkLKBaf6G1Pybxmlsc87255fbkXNRVLqHaEbY7vmqc2JknFv08fSnYAo4dfs+oWvqpWR1E0dTG1top0YiKiWs6/wBu/wBzTSU09HJWSMgzvHGkTc0+vFlrXX8/dTpgUfjVVWorksqpxTQ/QCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0DSDNvD9GjeH6NA0gzbw/Ro3h+jQNIM28P0aN4fo0D//2Q==" />),
            category: 'common',
            attributes: {
  "contenttGT": {
    "type": "string",
    "default": "Notifications"
  },
  "contentWqY": {
    "type": "string",
    "default": "Comments"
  },
  "contentDvc": {
    "type": "string",
    "default": "Get notified when someones posts a comment on a posting."
  },
  "contentncx": {
    "type": "string",
    "default": "Candidates"
  },
  "contentjpF": {
    "type": "string",
    "default": "Get notified when a candidate applies for a job."
  },
  "contenthKT": {
    "type": "string",
    "default": "Offers"
  },
  "contentXdr": {
    "type": "string",
    "default": "Get notified when a candidate accepts or rejects an offer."
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
        <fieldset className="border-t border-b border-gray-200">
            <legend className="sr-only">
                <RichText tagName="span" value={attributes.contenttGT} default="Notifications" onChange={ (newtext) => { setAttributes({ contenttGT: newtext }); }} /></legend>
            <div className="divide-y divide-gray-200">
                <div className="relative flex items-start py-4">
                    <div className="min-w-0 flex-1 text-sm">
                        <label for="comments" className="font-medium text-gray-700">
                            <RichText tagName="span" value={attributes.contentWqY} default="Comments" onChange={ (newtext) => { setAttributes({ contentWqY: newtext }); }} /></label>
                        <p id="comments-description" className="text-gray-500">
                            <RichText tagName="span" value={attributes.contentDvc} default="Get notified when someones posts a comment on a posting." onChange={ (newtext) => { setAttributes({ contentDvc: newtext }); }} /></p>
                    </div>
                    <div className="ml-3 flex items-center h-5">
                        <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                </div>
                <div className="relative flex items-start py-4">
                    <div className="min-w-0 flex-1 text-sm">
                        <label for="candidates" className="font-medium text-gray-700">
                            <RichText tagName="span" value={attributes.contentncx} default="Candidates" onChange={ (newtext) => { setAttributes({ contentncx: newtext }); }} /></label>
                        <p id="candidates-description" className="text-gray-500">
                            <RichText tagName="span" value={attributes.contentjpF} default="Get notified when a candidate applies for a job." onChange={ (newtext) => { setAttributes({ contentjpF: newtext }); }} /></p>
                    </div>
                    <div className="ml-3 flex items-center h-5">
                        <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                </div>
                <div className="relative flex items-start py-4">
                    <div className="min-w-0 flex-1 text-sm">
                        <label for="offers" className="font-medium text-gray-700">
                            <RichText tagName="span" value={attributes.contenthKT} default="Offers" onChange={ (newtext) => { setAttributes({ contenthKT: newtext }); }} /></label>
                        <p id="offers-description" className="text-gray-500">
                            <RichText tagName="span" value={attributes.contentXdr} default="Get notified when a candidate accepts or rejects an offer." onChange={ (newtext) => { setAttributes({ contentXdr: newtext }); }} /></p>
                    </div>
                    <div className="ml-3 flex items-center h-5">
                        <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
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
        <fieldset class="border-t border-b border-gray-200">
            <legend class="sr-only">
                <RichText.Content value={attributes.contenttGT} /></legend>
            <div class="divide-y divide-gray-200">
                <div class="relative flex items-start py-4">
                    <div class="min-w-0 flex-1 text-sm">
                        <label for="comments" class="font-medium text-gray-700">
                            <RichText.Content value={attributes.contentWqY} /></label>
                        <p id="comments-description" class="text-gray-500">
                            <RichText.Content value={attributes.contentDvc} /></p>
                    </div>
                    <div class="ml-3 flex items-center h-5">
                        <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                </div>
                <div class="relative flex items-start py-4">
                    <div class="min-w-0 flex-1 text-sm">
                        <label for="candidates" class="font-medium text-gray-700">
                            <RichText.Content value={attributes.contentncx} /></label>
                        <p id="candidates-description" class="text-gray-500">
                            <RichText.Content value={attributes.contentjpF} /></p>
                    </div>
                    <div class="ml-3 flex items-center h-5">
                        <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                </div>
                <div class="relative flex items-start py-4">
                    <div class="min-w-0 flex-1 text-sm">
                        <label for="offers" class="font-medium text-gray-700">
                            <RichText.Content value={attributes.contenthKT} /></label>
                        <p id="offers-description" class="text-gray-500">
                            <RichText.Content value={attributes.contentXdr} /></p>
                    </div>
                    <div class="ml-3 flex items-center h-5">
                        <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                </div>
            </div>
        </fieldset>
    </div>
</div>
            );
            },
        });
        