
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-label-on-left', {
            title: 'with label on left',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAUBaADASIAAhEBAxEB/8QAGwABAQEBAAMBAAAAAAAAAAAAAAIDBQEEBgf/xAAnEAEAAQQCAQQCAwEBAAAAAAAAAgETYpEDBBESITFxBUEUUWEiMv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD9A5PycY8nLHi63Y548NfHJPjjTxGv7p71pWtaf43r3OrTj4uSXY44R5aUrCs5Uj6vry5/B2OT8dXs8HL1exyVrzT5OKvHx1lTkpKvnx5p8V/Xuz56Sj3Obm7vQ5Oa/wBeMYRhC56K08+qHmnx71p7/CxHW5u11uCvjn7HFx19q+JzpT5+/qrOff6sO3Tq15oXqw9dI+qnv/n25vU6Ev5EI9zg9dY9CHHWUo+aerzLzTz/AH8I6nDycXL0J83X5PNelarW3WtYz9vn+vb+yDqx73XpwcfLz83Fw+uNJeJcsfbz/vnxVvTk45S9MZxrKsfV4pX38f39OL+O6Xq7HU/k9atYx6EYVuQ9qS8+9Pf9s/x9efpS6nLz9bsSpXp04vEeOta0lSVa0pWn69q/sg7U+11occOSfY4own/5lWdKUl9V/bb5+Hy0Or2OPj6U+bj5o8dOpbrGnWu1pLz70rGvx5p4fQfjeKvB+O6/FL1+YQpT/ulKSp9+DcV7ImUPNfPqlT6q8W857QWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYi3nPZbznsFiLec9lvOewWIt5z2W857BYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z" />),
            category: 'common',
            attributes: {
  "contentdhk": {
    "type": "string",
    "default": " Continue "
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
        <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"/>
            </div>
            <div className="relative flex justify-start"> <span className="pr-2 bg-white text-sm text-gray-500"><RichText tagName="span" value={attributes.contentdhk} default="Continue" onChange={ (newtext) =>  {
        setAttributes({ contentdhk: newtext });
      }}
    /></span>

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
        <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-300"/>
            </div>
            <div class="relative flex justify-start"> <span class="pr-2 bg-white text-sm text-gray-500"><RichText.Content value={attributes.contentdhk} /></span>

            </div>
        </div>
    </div>
</div>
            );
            },
        });
        