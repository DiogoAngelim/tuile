
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple', {
            title: 'simple',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8BbwDASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAIBAwQGBQf/xAA5EAEAAQMDAwIEBAQCCwAAAAAAAQIDBAUREiFSkRMxBkFRcSIyM2EUcoGhFRYjNUJDU2N2grPB0v/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIBEBAAMAAQMFAAAAAAAAAAAAAAECESESUcEDBDJBUv/aAAwDAQACEQMRAD8A/ZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGJmI952JnaJn6MU07dZ9wOdPdHk5090eVAJ5090eTnT3R5UAnnT3R5OdPdHlQCedPdHk5090eVAJ5090eTnT3R5UAnnT3R5OdPdHlQCedPdHk5090eVAJ5090eTnT3R5UAnnT3R5OdPdHlQCedPdHk5090eVAJ5090eTnT3R5UAnnT3R5OdPdHlQCedPdHk5090eVAJ5090eTnT3R5UAnnT3R5OdPdHlQCedPdHk5090eVAJ5090eTnT3R5UAnnT3R5OdPdHlQCedPdHk5090eVAJ5090eTnT3R5UAnnT3R5OdPdHlQCedPdHk5090eVAJ5090eTnT3R5UAxExPtO7Kaqd+se7MTvET9QZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYZYkE3J/BV9ltV39Or7NoAOLOzq8eu3j49r1ci7+WmekRHzmZSZxm94pGy7R8ycbWNprjULM1f8ADmz+Hz7t2DnV5Fy5j5Fr0ci11qoid4mPlMSnV3c49XZy0TG93aDTlZWNhY9eRl5FrHs0RvVcu1xTTT95no07Nw5cDUsHVLHr6fmWMu1vtNdm5FcRP03j5uoAAAAAcmo6pgaRjRkahlW8a1NUURVcq23qn2iPrPT2dXuDI4a9Z023eqs15lqm5Rfox6qZnrFyuN6afvMTDuAAAAAE11026Kq65immmJmZn5Q58bU8DLmzGPmWblWRa9a1TFccq7fdEe+3WOoOoAAAAAAAAAAAAAAAAAAAAHJjahbv1XbdymbF2z+pbrn2j67/ADj9wdY5sLMjNpruW7dUWoq2orn/AHn1mI+jpARbn8FP2W1Wv06fsDYywyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxLLEg1XfyVfZuabv5Kvs3APmY0R/mDNmuI5enRw/l+f9303yNe3xrNvPszNN+zVFMTHtMT7xP1YvxGvP7iemsX/ADO+PLZy1LKvxj12/wCGot1b3LtFW/ON+kU/+zJmP8wYUUTHL06+f8vy/uq1qF2vSYy5po5zTvtETt7b/Vp0HfJs3M+9VNV+9VNNU/KIj2iIT7iHKflWmzMzzz2jl9d5v42xsTL07Ct5OpW9Ou051uvFu3bfO3VdiJ401x7bTG/vMddnpGnKxMbOx6sbLx7WRZr/ADW7tEVU1feJdHtfnGTreVhxqlF6jBxs3FysGrKz9Mrmm3dt1XNtq/nExG8TEz7S69e+Isq3nfEk4GpzFmxbwbfq0V86caLldUXK4j2ieMx/b6PaWNE0rGwbmBY0zEt4l39SxTZpiiv7xttP9WcbRtKwrVy1i6biWLd2jhcpt2KaYrp69J2jrHWen7y1sJjx+q5dWh6PqtOmfE+RmbTjxXN65F6vCprrimq5z/enedp9tt4atazbuhaTqFvSfiXIz5m5jU3IvX4rrxKa6tpq9WfblH19veHtsXSNMwcW5i4mn4uPYu7+patWaaaa9+k7xEbSxjaPpeHiXMTF07EsY93f1LNuzTTRXv8AWIjaU0eEoytct6ZrOHTq9rHii5j/AMPORqlFy7Ryn8dE3dt6eUR+GZjp1/pj/EM6/o13BxdRzMfJsalRbvY+ZqNEXLlM0cvStZEb779J69ekx0e7taJpNjBuYNnTMO3iXetyxTYpiiv707bSxGhaPGnzp0aVhxhzPKcf0KfTmfrx223/AHXTH5/VTb1yj4f5Z2rU1WtXu4tcXsmPUt1RRXMxFdHSqY9or99t4dWr/EN/E+H/AIupq1Su1mY+pRRjRN7auiiYtcYp+cR+b2/d7u3pmn2bVi1awca3bxquViim1TEWp6xvTG3Ses+31asnQtHzMmrKytKwr9+unjVdu49FVUx9JmYNMeE1L/X+b/1Pp/8A46HZh6hqVzXrHwpVm5E38TUrmReu+pM114kRFdEVT84mblNH/bL2lWm4Fdyq5XhY9VdV2m9VVNqmZm5T0pr32/NG0bT7w+N8O4NFzWNW1m9crvZdy9ONFVUUxFu1RM7U07RH1677z0g0aPjWvP8AU021hZnCmqu5N3EtZsYt7JiKenCue3feY6b9Hm8nX41HS9Os4uo6xXcpwbt+qqrMt4s7U1zRyuXP9qYmmY2jpMdZfomdpuBqlmLOoYWPl26Z5RRftU1xE/XaYa72iaTkU49N/TMO7Ti/oRXYpmLX8vTp/RNHgI+JtWwNHwdTvZV2/XrGj+lYpmekZlMxFMxHtE1RXvO3anVsnXbGqZmlxqWRROlafZqsXp1GmxFyuaZ5Xa+Uf6SOUbTE9I2/d+i/4Xp/o49j+AxvSxaorx6PRp42ao9ppjb8Mx9YTm6RpmpV268/T8XKrtfkqv2aa5p+28dF0x4TMz8nUsnUY1XXrmmVYWlWL1m3jX6abd2uu3M11/8AMp5fh29vLs+EMXfL+G8v1rMcfh70/Tm5HqTM1W53in326T1evy9J03Pu272Zp+Lk3LP6dd6zTXNH2mY6LtabgY921ds4WPars2vRtVUWqYmi32xtHSnp7eyaY6QEUAAAAAAAAAAAAAAAAAAfCy8S5rt6q5biLNqzE00XKqet2f8A5fdFHJp+TN+1Nu5Ymxds7U129ukfTb9nWCA02vyU/ZuabX5KfsDbDLEMgAAAA//Z" />),
            category: 'common',
            attributes: {
  "contentBMY": {
    "type": "string",
    "default": "Successfully saved!"
  },
  "contentohE": {
    "type": "string",
    "default": "Anyone with a link can now view this file."
  },
  "contentyjZ": {
    "type": "string",
    "default": "Close"
  },
  "svgTKw": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgfFT": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgTKw }
            onChange={ ( value ) => {
              setAttributes({ svgTKw: value });
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
            value={ attributes.svgfFT }
            onChange={ ( value ) => {
              setAttributes({ svgfFT: value });
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
        <div aria-live="assertive" className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
            <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                
      <svg
         className="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTKw }}
        >
      </svg>
      
                            </div>
                            <div className="ml-3 w-0 flex-1 pt-0.5">
                                <p className="text-sm font-medium text-gray-900">
                                    <RichText tagName="span" value={attributes.contentBMY} default="Successfully saved!" onChange={ (newtext) => { setAttributes({ contentBMY: newtext }); }} /></p>
                                <p className="mt-1 text-sm text-gray-500">
                                    <RichText tagName="span" value={attributes.contentohE} default="Anyone with a link can now view this file." onChange={ (newtext) => { setAttributes({ contentohE: newtext }); }} /></p>
                            </div>
                            <div className="ml-4 flex-shrink-0 flex">
                                <button className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentyjZ} default="Close" onChange={ (newtext) =>  {
        setAttributes({ contentyjZ: newtext });
      }}
    /></span>

                                    
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfFT }}
        >
      </svg>
      
                                </button>
                            </div>
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
        <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
            <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
                <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="p-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                
      <svg
         class="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTKw }}
        >
      </svg>
      
                            </div>
                            <div class="ml-3 w-0 flex-1 pt-0.5">
                                <p class="text-sm font-medium text-gray-900">
                                    <RichText.Content value={attributes.contentBMY} /></p>
                                <p class="mt-1 text-sm text-gray-500">
                                    <RichText.Content value={attributes.contentohE} /></p>
                            </div>
                            <div class="ml-4 flex-shrink-0 flex">
                                <button class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentyjZ} /></span>

                                    
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfFT }}
        >
      </svg>
      
                                </button>
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
        });
        