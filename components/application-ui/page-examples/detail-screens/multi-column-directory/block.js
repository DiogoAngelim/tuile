
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/multi-column-directory', {
            title: 'multi column directory',
            icon: (<img src="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAGJfC/QyYl8L9ANgFfved/Ye9539iKsBX73nf2Hved/YCwFfved/Ye9539gLAV+9539h73nf2AsBX73nf2Hved/YCwFfved/Ye9539gLAV+9539h73nf2AsBX73nf2Hved/YCwFfved/Ye9539gLAV+9539h73nf2AsBX73nf2Hved/YCwFfved/Ye9539gLAV+9539h73nf2AsBX73nf2Hved/YCwFfved/Ye9539gLAV+9539h73nf2AsBX73nf2Hved/YCwFfved/Ye9539gLAV+9539h73nf2AsBX73nf2Hved/YCwFfved/Ye9539gLAV+9539h73nf2AsBX73nf2Hved/YCwjZ+XL0ZH3vO/sYnu2S959PkBaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoABUcjiFVLz908muttRb1Tco6eHgR0hujesTI/DbtyW/l67fAtuwcyUciuuVGy6e5ylru69C/TiaWmmHp0094o1eH10rO3V5NctNdEk1KWvidc5dODlxjj1zlR2dM96cdd3XXQ6hNFOXCE8W3fGMtIPTVa9x5jtbqeD8Fpx0645EdLJwsVUnpHVR3d2v/AEetaTTTSafVMqni408dY88eqVK5KtwW1foKPNLMyHhU4t+RdK2eRZGvscmKcoxSekrO5rX1ZDCyMrOjwuizMvhGy2+E5V2+9KMVqtZLr6npZYOHOiNE8SiVMHrGDrW1P5InDExq3B149UXBtxcYJbW+rXhqWkeZxp5dVeFkyz8myTz/AMM4znrFw1a5rvfLqXcPybocWpWTlXW9vZOMJ1XqdU+r02dY6fI9B+Gx9sY9hVtjPtEti0UvN6/MjXh4lV8r68amF0utkYJSf6ii8AEAAAAAAAAAAAAAAAAAAAAAAMS+F+hkxL4X6AWgAAaGVxOOPxKjDdbkrNN9mvKDeqiv1aN84F3CcvKhnXzunVddPWFS2tNR+DV936PvGDvghRKyVFcrobLHFOcdddH3omAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADE/gl6GTE/gl6AWAAigAAAAA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" />),
            category: 'common',
            attributes: {
  "contentNLj": {
    "type": "string",
    "default": "Close sidebar"
  },
  "contentJpM": {
    "type": "string",
    "default": "\n              Dashboard\n            "
  },
  "contentOCP": {
    "type": "string",
    "default": "\n              Calendar\n            "
  },
  "contentIxd": {
    "type": "string",
    "default": "\n              Teams\n            "
  },
  "contentbAk": {
    "type": "string",
    "default": "\n              Directory\n            "
  },
  "contentkit": {
    "type": "string",
    "default": "\n              Announcements\n            "
  },
  "contentAbb": {
    "type": "string",
    "default": "\n              Office Map\n            "
  },
  "contentKJe": {
    "type": "string",
    "default": "\n              Apps\n            "
  },
  "contentHLJ": {
    "type": "string",
    "default": "\n              Settings\n            "
  },
  "contentoDk": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentesp": {
    "type": "string",
    "default": "View profile"
  },
  "contentcWM": {
    "type": "string",
    "default": "\n                Dashboard\n              "
  },
  "contentutr": {
    "type": "string",
    "default": "\n                Calendar\n              "
  },
  "contentFrD": {
    "type": "string",
    "default": "\n                Teams\n              "
  },
  "contentvkO": {
    "type": "string",
    "default": "\n                Directory\n              "
  },
  "contentxWf": {
    "type": "string",
    "default": "\n                Announcements\n              "
  },
  "contentWKS": {
    "type": "string",
    "default": "\n                Office Map\n              "
  },
  "contentMZO": {
    "type": "string",
    "default": "\n                Apps\n              "
  },
  "contentMYZ": {
    "type": "string",
    "default": "\n                Settings\n              "
  },
  "contentQSg": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentVJv": {
    "type": "string",
    "default": "View profile"
  },
  "contentunK": {
    "type": "string",
    "default": "Open sidebar"
  },
  "contentPJo": {
    "type": "string",
    "default": "Directory"
  },
  "contentCXv": {
    "type": "string",
    "default": "Ricardo Cooper"
  },
  "contentVZn": {
    "type": "string",
    "default": "Message"
  },
  "contentnBB": {
    "type": "string",
    "default": "Call"
  },
  "contentWlC": {
    "type": "string",
    "default": "Ricardo Cooper"
  },
  "contentJCd": {
    "type": "string",
    "default": " Profile "
  },
  "contenttoI": {
    "type": "string",
    "default": " Calendar "
  },
  "contentpKf": {
    "type": "string",
    "default": " Recognition "
  },
  "contentuzy": {
    "type": "string",
    "default": "Phone"
  },
  "contentXOL": {
    "type": "string",
    "default": "(555) 123-4567"
  },
  "contentPhm": {
    "type": "string",
    "default": "Email"
  },
  "contentQtV": {
    "type": "string",
    "default": "ricardocooper@example.com"
  },
  "contentBxl": {
    "type": "string",
    "default": "Title"
  },
  "contentcsu": {
    "type": "string",
    "default": "Senior Front-End Developer"
  },
  "contentQmJ": {
    "type": "string",
    "default": "Team"
  },
  "contenthbG": {
    "type": "string",
    "default": "Product Development"
  },
  "contentBJS": {
    "type": "string",
    "default": "Location"
  },
  "contentwSb": {
    "type": "string",
    "default": "San Francisco"
  },
  "contentJqH": {
    "type": "string",
    "default": "Sits"
  },
  "contentTnq": {
    "type": "string",
    "default": "Oasis, 4th floor"
  },
  "contentDWz": {
    "type": "string",
    "default": "Salary"
  },
  "contentPlw": {
    "type": "string",
    "default": "$145,000"
  },
  "contentNqD": {
    "type": "string",
    "default": "Birthday"
  },
  "contentcSF": {
    "type": "string",
    "default": "June 8, 1990"
  },
  "contentOoE": {
    "type": "string",
    "default": "About"
  },
  "contentaGS": {
    "type": "string",
    "default": "Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam."
  },
  "contentDAJ": {
    "type": "string",
    "default": "Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse."
  },
  "contenteNu": {
    "type": "string",
    "default": "Team members"
  },
  "contentWLE": {
    "type": "string",
    "default": "Leslie Alexander"
  },
  "contentseY": {
    "type": "string",
    "default": "Co-Founder / CEO"
  },
  "contentjqf": {
    "type": "string",
    "default": "Michael Foster"
  },
  "contentbbi": {
    "type": "string",
    "default": "Co-Founder / CTO"
  },
  "contentFrs": {
    "type": "string",
    "default": "Dries Vincent"
  },
  "contentMbZ": {
    "type": "string",
    "default": "Manager, Business Relations"
  },
  "contentvPr": {
    "type": "string",
    "default": "Lindsay Walton"
  },
  "contentXxv": {
    "type": "string",
    "default": "Front-end Developer"
  },
  "contentKDJ": {
    "type": "string",
    "default": "Directory"
  },
  "contentrpE": {
    "type": "string",
    "default": "Search directory of 3,018 employees"
  },
  "contentEMR": {
    "type": "string",
    "default": "Search"
  },
  "contentEcK": {
    "type": "string",
    "default": "Search"
  },
  "contentmLM": {
    "type": "string",
    "default": "A"
  },
  "contentuex": {
    "type": "string",
    "default": "Leslie Abbott"
  },
  "contentjPE": {
    "type": "string",
    "default": "Co-Founder / CEO"
  },
  "contentDYR": {
    "type": "string",
    "default": "Hector Adams"
  },
  "contentuzK": {
    "type": "string",
    "default": "VP, Marketing"
  },
  "contentEym": {
    "type": "string",
    "default": "Blake Alexander"
  },
  "contentcuJ": {
    "type": "string",
    "default": "Account Coordinator"
  },
  "contentOkR": {
    "type": "string",
    "default": "Fabricio Andrews"
  },
  "contentuyV": {
    "type": "string",
    "default": "Senior Art Director"
  },
  "contentCvr": {
    "type": "string",
    "default": "B"
  },
  "contentFGw": {
    "type": "string",
    "default": "Angela Beaver"
  },
  "contentmDS": {
    "type": "string",
    "default": "Chief Strategy Officer"
  },
  "contentgNq": {
    "type": "string",
    "default": "Yvette Blanchard"
  },
  "contentYrf": {
    "type": "string",
    "default": "Studio Artist"
  },
  "contentsAs": {
    "type": "string",
    "default": "Lawrence Brooks"
  },
  "contentTZV": {
    "type": "string",
    "default": "Content Specialist"
  },
  "contenthHR": {
    "type": "string",
    "default": "C"
  },
  "contentWmM": {
    "type": "string",
    "default": "Jeffrey Clark"
  },
  "contentEwz": {
    "type": "string",
    "default": "Senior Art Director"
  },
  "contentZby": {
    "type": "string",
    "default": "Kathryn Cooper"
  },
  "contentyzz": {
    "type": "string",
    "default": "Associate Creative Director"
  },
  "contentJct": {
    "type": "string",
    "default": "E"
  },
  "contentAcr": {
    "type": "string",
    "default": "Alicia Edwards"
  },
  "contentjdt": {
    "type": "string",
    "default": "Junior Copywriter"
  },
  "contentZcD": {
    "type": "string",
    "default": "Benjamin Emerson"
  },
  "contentDzl": {
    "type": "string",
    "default": "Director, Print Operations"
  },
  "contentuOx": {
    "type": "string",
    "default": "Jillian Erics"
  },
  "contentezq": {
    "type": "string",
    "default": "Designer"
  },
  "contentCfO": {
    "type": "string",
    "default": "Chelsea Evans"
  },
  "contentOPn": {
    "type": "string",
    "default": "Human Resources Manager"
  },
  "contenthvT": {
    "type": "string",
    "default": "G"
  },
  "contentQsi": {
    "type": "string",
    "default": "Michael Gillard"
  },
  "contentEfd": {
    "type": "string",
    "default": "Co-Founder / CTO"
  },
  "contentCiX": {
    "type": "string",
    "default": "Dries Giuessepe"
  },
  "contentAak": {
    "type": "string",
    "default": "Manager, Business Relations"
  },
  "contentnUQ": {
    "type": "string",
    "default": "M"
  },
  "contentdZu": {
    "type": "string",
    "default": "Jenny Harrison"
  },
  "contentBVr": {
    "type": "string",
    "default": "Studio Artist"
  },
  "contentPmH": {
    "type": "string",
    "default": "Lindsay Hatley"
  },
  "contentbot": {
    "type": "string",
    "default": "Front-end Developer"
  },
  "contentAJO": {
    "type": "string",
    "default": "Anna Hill"
  },
  "contentNGu": {
    "type": "string",
    "default": "Partner, Creative"
  },
  "contentKMo": {
    "type": "string",
    "default": "S"
  },
  "contentkGo": {
    "type": "string",
    "default": "Courtney Samuels"
  },
  "contentvoA": {
    "type": "string",
    "default": "Designer"
  },
  "contentrzS": {
    "type": "string",
    "default": "Tom Simpson"
  },
  "contentwGQ": {
    "type": "string",
    "default": "Director, Product Development"
  },
  "contentNFd": {
    "type": "string",
    "default": "T"
  },
  "contenteQH": {
    "type": "string",
    "default": "Floyd Thompson"
  },
  "contentZsO": {
    "type": "string",
    "default": "Principal Designer"
  },
  "contentazw": {
    "type": "string",
    "default": "Leonard Timmons"
  },
  "contentlkJ": {
    "type": "string",
    "default": "Senior Designer"
  },
  "contentDJu": {
    "type": "string",
    "default": "Whitney Trudeau"
  },
  "contentezh": {
    "type": "string",
    "default": "Copywriter"
  },
  "contentGro": {
    "type": "string",
    "default": "W"
  },
  "contentjlF": {
    "type": "string",
    "default": "Kristin Watson"
  },
  "contentsCz": {
    "type": "string",
    "default": "VP, Human Resources"
  },
  "contenteVE": {
    "type": "string",
    "default": "Emily Wilson"
  },
  "contentteJ": {
    "type": "string",
    "default": "VP, User Experience"
  },
  "contentUCT": {
    "type": "string",
    "default": "Y"
  },
  "contentVRi": {
    "type": "string",
    "default": "Emma Young"
  },
  "contentLhP": {
    "type": "string",
    "default": "Senior Front-end Developer"
  },
  "imageurlIeQ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-pink-500-mark-gray-900-text.svg'
  },
  "imagealtPGQ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurluHr": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtKHb": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurljKN": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-pink-500-mark-gray-900-text.svg'
  },
  "imagealtdwc": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlmcQ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtWzm": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlzro": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-pink-500.svg'
  },
  "imagealtoUI": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlfNK": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1444628838545-ac4016a5418a.jpeg'
  },
  "imagealtDLv": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlAtw": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
  },
  "imagealtRYb": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlaNT": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1494790108377-be9c29b29330.jpeg'
  },
  "imagealtWyv": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlRuN": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1519244703995-f4e0f30006d5.jpeg'
  },
  "imagealthRF": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlnMd": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1506794778202-cad84cf45f1d.jpeg'
  },
  "imagealtIlG": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlEAr": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517841905240-472988babdf9.jpeg'
  },
  "imagealtNzi": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlLIi": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1494790108377-be9c29b29330.jpeg'
  },
  "imagealtAfz": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlDij": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1500648767791-00dcc994a43e.jpeg'
  },
  "imagealtKEM": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlZnn": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1520785643438-5bf77931f493.jpeg'
  },
  "imagealtvZf": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurliQc": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1507003211169-0a1dd7228f2d.jpeg'
  },
  "imagealtJnY": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlkMk": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1501031170107-cfd33f0cbdcc.jpeg'
  },
  "imagealtTlg": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlRzN": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1506980595904-70325b7fdd90.jpeg'
  },
  "imagealtEqy": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlUQo": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1513910367299-bce8d8a0ebf6.jpeg'
  },
  "imagealtOQg": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlGAm": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517070208541-6ddc4d3efbcb.jpeg'
  },
  "imagealtTQj": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlmxb": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1487412720507-e7ab37603c6f.jpeg'
  },
  "imagealtaJj": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurluot": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1509783236416-c9ad59bae472.jpeg'
  },
  "imagealtfqL": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurltwu": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1531427186611-ecfd6d936c79.jpeg'
  },
  "imagealtgKZ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlzEg": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1504703395950-b89145a5425b.jpeg'
  },
  "imagealtvqn": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlXCj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1550525811-e5869dd03032.jpeg'
  },
  "imagealtDRp": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlyWA": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1519244703995-f4e0f30006d5.jpeg'
  },
  "imagealtFVo": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlGgS": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1506794778202-cad84cf45f1d.jpeg'
  },
  "imagealtFbV": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlDMT": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1507101105822-7472b28e22ac.jpeg'
  },
  "imagealtLSo": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlsHs": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517841905240-472988babdf9.jpeg'
  },
  "imagealtbyO": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlFcP": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1534528741775-53994a69daeb.jpeg'
  },
  "imagealtHJZ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlnrg": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1438761681033-6461ffad8d80.jpeg'
  },
  "imagealtTLW": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlFsY": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtLBm": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlXVf": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1463453091185-61582044d556.jpeg'
  },
  "imagealthQO": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlVZr": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1519345182560-3f2917c472ef.jpeg'
  },
  "imagealtmlj": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlpPO": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1517365830460-955ce3ccd263.jpeg'
  },
  "imagealtWft": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurluYi": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1500917293891-ef795e70e1f6.jpeg'
  },
  "imagealthdJ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlpPC": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1502685104226-ee32379fefbe.jpeg'
  },
  "imagealtEUb": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlQFC": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'https://images.unsplash.comphoto-1505840717430-882ce147ef2d.jpeg'
  },
  "imagealtJhX": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svggzU": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgpTd": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgzDi": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgRQh": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\"/>"
  },
  "svgaGI": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svglgW": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z\"/>"
  },
  "svgdmO": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7\"/>"
  },
  "svglKX": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z\"/>"
  },
  "svgpNh": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z\"/>\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 12a3 3 0 11-6 0 3 3 0 016 0z\"/>"
  },
  "svglfY": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svglMQ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgQal": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\"/>"
  },
  "svgfAq": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
  },
  "svgVdH": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z\"/>"
  },
  "svgoza": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7\"/>"
  },
  "svgvlz": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z\"/>"
  },
  "svgsAp": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z\"/>\n                  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 12a3 3 0 11-6 0 3 3 0 016 0z\"/>"
  },
  "svgMcv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgpTw": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgyUj": {
    "type": "string",
    "default": "<path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"/>\n                                                        <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"/>"
  },
  "svgvPh": {
    "type": "string",
    "default": "<path d=\"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z\"/>"
  },
  "svggFx": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgeII": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svggzU }
            onChange={ ( value ) => {
              setAttributes({ svggzU: value });
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
            value={ attributes.svgpTd }
            onChange={ ( value ) => {
              setAttributes({ svgpTd: value });
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
            value={ attributes.svgzDi }
            onChange={ ( value ) => {
              setAttributes({ svgzDi: value });
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
            value={ attributes.svgRQh }
            onChange={ ( value ) => {
              setAttributes({ svgRQh: value });
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
            value={ attributes.svgaGI }
            onChange={ ( value ) => {
              setAttributes({ svgaGI: value });
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
            value={ attributes.svglgW }
            onChange={ ( value ) => {
              setAttributes({ svglgW: value });
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
            value={ attributes.svgdmO }
            onChange={ ( value ) => {
              setAttributes({ svgdmO: value });
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
            value={ attributes.svglKX }
            onChange={ ( value ) => {
              setAttributes({ svglKX: value });
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
            value={ attributes.svgpNh }
            onChange={ ( value ) => {
              setAttributes({ svgpNh: value });
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
            value={ attributes.svglfY }
            onChange={ ( value ) => {
              setAttributes({ svglfY: value });
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
            value={ attributes.svglMQ }
            onChange={ ( value ) => {
              setAttributes({ svglMQ: value });
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
            value={ attributes.svgQal }
            onChange={ ( value ) => {
              setAttributes({ svgQal: value });
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
            value={ attributes.svgfAq }
            onChange={ ( value ) => {
              setAttributes({ svgfAq: value });
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
            value={ attributes.svgVdH }
            onChange={ ( value ) => {
              setAttributes({ svgVdH: value });
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
            value={ attributes.svgoza }
            onChange={ ( value ) => {
              setAttributes({ svgoza: value });
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
            value={ attributes.svgvlz }
            onChange={ ( value ) => {
              setAttributes({ svgvlz: value });
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
            value={ attributes.svgsAp }
            onChange={ ( value ) => {
              setAttributes({ svgsAp: value });
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
            value={ attributes.svgMcv }
            onChange={ ( value ) => {
              setAttributes({ svgMcv: value });
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
            value={ attributes.svgpTw }
            onChange={ ( value ) => {
              setAttributes({ svgpTw: value });
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
            value={ attributes.svgyUj }
            onChange={ ( value ) => {
              setAttributes({ svgyUj: value });
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
            value={ attributes.svgvPh }
            onChange={ ( value ) => {
              setAttributes({ svgvPh: value });
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
            value={ attributes.svggFx }
            onChange={ ( value ) => {
              setAttributes({ svggFx: value });
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
            value={ attributes.svgeII }
            onChange={ ( value ) => {
              setAttributes({ svgeII: value });
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
        <div className="h-full flex">
            <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentNLj} default="Close sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentNLj: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggzU }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div className="flex-shrink-0 flex items-center px-4">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlIeQ: media.url,
            imagealtPGQ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlIeQ } 
            alt={ attributes.imagealtPGQ } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <nav aria-label="Sidebar" className="mt-5">
                            <div className="px-2 space-y-1"> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpTd }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentJpM} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentJpM: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzDi }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentOCP} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentOCP: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRQh }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentIxd} default="Teams" onChange={ (newtext) =>  {
        setAttributes({ contentIxd: newtext });
      }}
    /></span>
 <span className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md" aria-current="page">
              
              
      <svg
         className="text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaGI }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentbAk} default="Directory" onChange={ (newtext) =>  {
        setAttributes({ contentbAk: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglgW }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentkit} default="Announcements" onChange={ (newtext) =>  {
        setAttributes({ contentkit: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdmO }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentAbb} default="Office Map" onChange={ (newtext) =>  {
        setAttributes({ contentAbb: newtext });
      }}
    /></span>

                            </div>
                            <hr className="border-t border-gray-200 my-5" aria-hidden="true"/>
                            <div className="px-2 space-y-1"> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglKX }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentKJe} default="Apps" onChange={ (newtext) =>  {
        setAttributes({ contentKJe: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpNh }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentHLJ} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentHLJ: newtext });
      }}
    /></span>

                            </div>
                        </nav>
                    </div>
                    <div className="flex-shrink-0 flex border-t border-gray-200 p-4"> <span className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurluHr: media.url,
            imagealtKHb: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurluHr } 
            alt={ attributes.imagealtKHb } 
            onClick={ open } 
            className="inline-block h-10 w-10 rounded-full"
          /> 
        )} 
      />
            </div>
            <div className="ml-3">
              <p className="text-base font-medium text-gray-700 group-hover:text-gray-900"><RichText tagName="span" value={attributes.contentoDk} default="Tom Cook" onChange={ (newtext) =>  {
        setAttributes({ contentoDk: newtext });
      }}
    /></p>
              <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700"><RichText tagName="span" value={attributes.contentesp} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentesp: newtext });
      }}
    /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
                <div className="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div className="hidden lg:flex lg:flex-shrink-0">
                <div className="flex flex-col w-64">
                    <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex items-center flex-shrink-0 px-4">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurljKN: media.url,
            imagealtdwc: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurljKN } 
            alt={ attributes.imagealtdwc } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                            </div>
                            <nav className="mt-5 flex-1" aria-label="Sidebar">
                                <div className="px-2 space-y-1"> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglfY }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentcWM} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentcWM: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglMQ }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentutr} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentutr: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQal }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentFrD} default="Teams" onChange={ (newtext) =>  {
        setAttributes({ contentFrD: newtext });
      }}
    /></span>
 <span className="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md" aria-current="page">
                
                
      <svg
         className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfAq }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentvkO} default="Directory" onChange={ (newtext) =>  {
        setAttributes({ contentvkO: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVdH }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentxWf} default="Announcements" onChange={ (newtext) =>  {
        setAttributes({ contentxWf: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoza }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentWKS} default="Office Map" onChange={ (newtext) =>  {
        setAttributes({ contentWKS: newtext });
      }}
    /></span>

                                </div>
                                <hr className="border-t border-gray-200 my-5" aria-hidden="true"/>
                                <div className="flex-1 px-2 space-y-1"> <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvlz }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentMZO} default="Apps" onChange={ (newtext) =>  {
        setAttributes({ contentMZO: newtext });
      }}
    /></span>
 <span className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsAp }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentMYZ} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentMYZ: newtext });
      }}
    /></span>

                                </div>
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex border-t border-gray-200 p-4"> <span className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div>
                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlmcQ: media.url,
            imagealtWzm: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlmcQ } 
            alt={ attributes.imagealtWzm } 
            onClick={ open } 
            className="inline-block h-9 w-9 rounded-full"
          /> 
        )} 
      />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900"><RichText tagName="span" value={attributes.contentQSg} default="Tom Cook" onChange={ (newtext) =>  {
        setAttributes({ contentQSg: newtext });
      }}
    /></p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700"><RichText tagName="span" value={attributes.contentVJv} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentVJv: newtext });
      }}
    /></p>
              </div>
            </div>
          </span>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                <div className="lg:hidden">
                    <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                        <div>
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlzro: media.url,
            imagealtoUI: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlzro } 
            alt={ attributes.imagealtoUI } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <div>
                            <button type="button" className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"> <span className="sr-only"><RichText tagName="span" value={attributes.contentunK} default="Open sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentunK: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMcv }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative z-0 flex overflow-hidden">
                    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                        <nav className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden" aria-label="Breadcrumb"> <span className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
            
            
      <svg
         className="-ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpTw }}
        >
      </svg>
      
            <span><RichText tagName="span" value={attributes.contentPJo} default="Directory" onChange={ (newtext) =>  {
        setAttributes({ contentPJo: newtext });
      }}
    /></span>
</span>
                        </nav>
                        <spanrticle>
                            <div>
                                <div>
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlfNK: media.url,
            imagealtDLv: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlfNK } 
            alt={ attributes.imagealtDLv } 
            onClick={ open } 
            className="h-32 w-full object-cover lg:h-48"
          /> 
        )} 
      />
                                </div>
                                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                        <div className="flex">
                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlAtw: media.url,
            imagealtRYb: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlAtw } 
            alt={ attributes.imagealtRYb } 
            onClick={ open } 
            className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
          /> 
        )} 
      />
                                        </div>
                                        <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                            <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                                 <h1 className="text-2xl font-bold text-gray-900 truncate"><RichText tagName="span" value={attributes.contentCXv} default="Ricardo Cooper" onChange={ (newtext) =>  {
        setAttributes({ contentCXv: newtext });
      }}
    /></h1>

                                            </div>
                                            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                                                <button type="button" className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                                                    
      <svg
         className="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyUj }}
        >
      </svg>
       <span><RichText tagName="span" value={attributes.contentVZn} default="Message" onChange={ (newtext) =>  {
        setAttributes({ contentVZn: newtext });
      }}
    /></span>

                                                </button>
                                                <button type="button" className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                                                    
      <svg
         className="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvPh }}
        >
      </svg>
       <span><RichText tagName="span" value={attributes.contentnBB} default="Call" onChange={ (newtext) =>  {
        setAttributes({ contentnBB: newtext });
      }}
    /></span>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                                         <h1 className="text-2xl font-bold text-gray-900 truncate"><RichText tagName="span" value={attributes.contentWlC} default="Ricardo Cooper" onChange={ (newtext) =>  {
        setAttributes({ contentWlC: newtext });
      }}
    /></h1>

                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 sm:mt-2 2xl:mt-5">
                                <div className="border-b border-gray-200">
                                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <nav className="-mb-px flex space-x-8" aria-label="Tabs"> <a className="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page"><RichText tagName="span" value={attributes.contentJCd} default="Profile" onChange={ (newtext) =>  {
        setAttributes({ contentJCd: newtext });
      }}
    />

                  <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contenttoI} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contenttoI: newtext });
      }}
    /></span>

                  <span className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"><RichText tagName="span" value={attributes.contentpKf} default="Recognition" onChange={ (newtext) =>  {
        setAttributes({ contentpKf: newtext });
      }}
    /></span>
                </a></nav>
              </div>
            </div>
          </div>

          
          <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500"><RichText tagName="span" value={attributes.contentuzy} default="Phone" onChange={ (newtext) =>  {
        setAttributes({ contentuzy: newtext });
      }}
    /></dt>
                <dd className="mt-1 text-sm text-gray-900"><RichText tagName="span" value={attributes.contentXOL} default="(555) 123-4567" onChange={ (newtext) =>  {
        setAttributes({ contentXOL: newtext });
      }}
    /></dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500"><RichText tagName="span" value={attributes.contentPhm} default="Email" onChange={ (newtext) =>  {
        setAttributes({ contentPhm: newtext });
      }}
    /></dt>
                <dd className="mt-1 text-sm text-gray-900"><RichText tagName="span" value={attributes.contentQtV} default="ricardocooper@example.com" onChange={ (newtext) =>  {
        setAttributes({ contentQtV: newtext });
      }}
    /></dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500"><RichText tagName="span" value={attributes.contentBxl} default="Title" onChange={ (newtext) =>  {
        setAttributes({ contentBxl: newtext });
      }}
    /></dt>
                <dd className="mt-1 text-sm text-gray-900"><RichText tagName="span" value={attributes.contentcsu} default="Senior Front-End Developer" onChange={ (newtext) =>  {
        setAttributes({ contentcsu: newtext });
      }}
    /></dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500"><RichText tagName="span" value={attributes.contentQmJ} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentQmJ: newtext });
      }}
    /></dt>
                <dd className="mt-1 text-sm text-gray-900"><RichText tagName="span" value={attributes.contenthbG} default="Product Development" onChange={ (newtext) =>  {
        setAttributes({ contenthbG: newtext });
      }}
    /></dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500"><RichText tagName="span" value={attributes.contentBJS} default="Location" onChange={ (newtext) =>  {
        setAttributes({ contentBJS: newtext });
      }}
    /></dt>
                <dd className="mt-1 text-sm text-gray-900"><RichText tagName="span" value={attributes.contentwSb} default="San Francisco" onChange={ (newtext) =>  {
        setAttributes({ contentwSb: newtext });
      }}
    /></dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500"><RichText tagName="span" value={attributes.contentJqH} default="Sits" onChange={ (newtext) =>  {
        setAttributes({ contentJqH: newtext });
      }}
    /></dt>
                <dd className="mt-1 text-sm text-gray-900"><RichText tagName="span" value={attributes.contentTnq} default="Oasis, 4th floor" onChange={ (newtext) =>  {
        setAttributes({ contentTnq: newtext });
      }}
    /></dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500"><RichText tagName="span" value={attributes.contentDWz} default="Salary" onChange={ (newtext) =>  {
        setAttributes({ contentDWz: newtext });
      }}
    /></dt>
                <dd className="mt-1 text-sm text-gray-900"><RichText tagName="span" value={attributes.contentPlw} default="$145,000" onChange={ (newtext) =>  {
        setAttributes({ contentPlw: newtext });
      }}
    /></dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500"><RichText tagName="span" value={attributes.contentNqD} default="Birthday" onChange={ (newtext) =>  {
        setAttributes({ contentNqD: newtext });
      }}
    /></dt>
                <dd className="mt-1 text-sm text-gray-900"><RichText tagName="span" value={attributes.contentcSF} default="June 8, 1990" onChange={ (newtext) =>  {
        setAttributes({ contentcSF: newtext });
      }}
    /></dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500"><RichText tagName="span" value={attributes.contentOoE} default="About" onChange={ (newtext) =>  {
        setAttributes({ contentOoE: newtext });
      }}
    /></dt>
                <dd className="mt-1 max-w-prose text-sm text-gray-900 space-y-5">
                  <p><RichText tagName="span" value={attributes.contentaGS} default="Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam." onChange={ (newtext) =>  {
        setAttributes({ contentaGS: newtext });
      }}
    /></p>
                  <p><RichText tagName="span" value={attributes.contentDAJ} default="Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse." onChange={ (newtext) =>  {
        setAttributes({ contentDAJ: newtext });
      }}
    /></p>
                </dd>
              </div>
            </dl>
          </div>

          
          <div className="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
            <h2 className="text-sm font-medium text-gray-500"><RichText tagName="span" value={attributes.contenteNu} default="Team members" onChange={ (newtext) =>  {
        setAttributes({ contenteNu: newtext });
      }}
    /></h2>
            <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
                <div className="flex-shrink-0">
                  
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlaNT: media.url,
            imagealtWyv: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlaNT } 
            alt={ attributes.imagealtWyv } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true"/>
                    <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentWLE} default="Leslie Alexander" onChange={ (newtext) =>  {
        setAttributes({ contentWLE: newtext });
      }}
    /></p>
                    <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentseY} default="Co-Founder / CEO" onChange={ (newtext) =>  {
        setAttributes({ contentseY: newtext });
      }}
    /></p>
                  </span>
                </div>
              </div>

              <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
                <div className="flex-shrink-0">
                  
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlRuN: media.url,
            imagealthRF: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlRuN } 
            alt={ attributes.imagealthRF } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true"/>
                    <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentjqf} default="Michael Foster" onChange={ (newtext) =>  {
        setAttributes({ contentjqf: newtext });
      }}
    /></p>
                    <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentbbi} default="Co-Founder / CTO" onChange={ (newtext) =>  {
        setAttributes({ contentbbi: newtext });
      }}
    /></p>
                  </span>
                </div>
              </div>

              <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
                <div className="flex-shrink-0">
                  
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlnMd: media.url,
            imagealtIlG: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlnMd } 
            alt={ attributes.imagealtIlG } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true"/>
                    <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentFrs} default="Dries Vincent" onChange={ (newtext) =>  {
        setAttributes({ contentFrs: newtext });
      }}
    /></p>
                    <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentMbZ} default="Manager, Business Relations" onChange={ (newtext) =>  {
        setAttributes({ contentMbZ: newtext });
      }}
    /></p>
                  </span>
                </div>
              </div>

              <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
                <div className="flex-shrink-0">
                  
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlEAr: media.url,
            imagealtNzi: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlEAr } 
            alt={ attributes.imagealtNzi } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true"/>
                    <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentvPr} default="Lindsay Walton" onChange={ (newtext) =>  {
        setAttributes({ contentvPr: newtext });
      }}
    /></p>
                    <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentXxv} default="Front-end Developer" onChange={ (newtext) =>  {
        setAttributes({ contentXxv: newtext });
      }}
    /></p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        
      </spanrticle></main>
      <spanside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-lg font-medium text-gray-900"><RichText tagName="span" value={attributes.contentKDJ} default="Directory" onChange={ (newtext) =>  {
        setAttributes({ contentKDJ: newtext });
      }}
    /></h2>
          <p className="mt-1 text-sm text-gray-600"><RichText tagName="span" value={attributes.contentrpE} default="Search directory of 3,018 employees" onChange={ (newtext) =>  {
        setAttributes({ contentrpE: newtext });
      }}
    /></p>
          <form className="mt-6 flex space-x-4" action="#">
            <div className="flex-1 min-w-0">
              <label for="search" className="sr-only"><RichText tagName="span" value={attributes.contentEMR} default="Search" onChange={ (newtext) =>  {
        setAttributes({ contentEMR: newtext });
      }}
    /></label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  
                  
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggFx }}
        >
      </svg>
      
                </div>
                <input type="search" name="search" id="search" className="focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search"/>
              </div>
            </div>
            <button type="submit" className="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              
              
      <svg
         className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeII }}
        >
      </svg>
      
              <span className="sr-only"><RichText tagName="span" value={attributes.contentEcK} default="Search" onChange={ (newtext) =>  {
        setAttributes({ contentEcK: newtext });
      }}
    /></span>
            </button>
          </form>
        </div>
        
        <nav className="flex-1 min-h-0 overflow-y-auto" aria-label="Directory">
          <div className="relative">
            <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText tagName="span" value={attributes.contentmLM} default="A" onChange={ (newtext) =>  {
        setAttributes({ contentmLM: newtext });
      }}
    /></h3>
            </div>
            <ul role="list" className="relative z-0 divide-y divide-gray-200">
              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlLIi: media.url,
            imagealtAfz: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlLIi } 
            alt={ attributes.imagealtAfz } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <a className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentuex} default="Leslie Abbott" onChange={ (newtext) =>  {
        setAttributes({ contentuex: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentjPE} default="Co-Founder / CEO" onChange={ (newtext) =>  {
        setAttributes({ contentjPE: newtext });
      }}
    /></p>
                    
                  </a></div>
                </div>
              </li>

              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlDij: media.url,
            imagealtKEM: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlDij } 
            alt={ attributes.imagealtKEM } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentDYR} default="Hector Adams" onChange={ (newtext) =>  {
        setAttributes({ contentDYR: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentuzK} default="VP, Marketing" onChange={ (newtext) =>  {
        setAttributes({ contentuzK: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlZnN: media.url,
            imagealtWrw: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlZnN } 
            alt={ attributes.imagealtWrw } 
            onClick={ open } 
            className="inline-block h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentEym} default="Blake Alexander" onChange={ (newtext) =>  {
        setAttributes({ contentEym: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentcuJ} default="Account Coordinator" onChange={ (newtext) =>  {
        setAttributes({ contentcuJ: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurliQc: media.url,
            imagealtJnY: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurliQc } 
            alt={ attributes.imagealtJnY } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentOkR} default="Fabricio Andrews" onChange={ (newtext) =>  {
        setAttributes({ contentOkR: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentuyV} default="Senior Art Director" onChange={ (newtext) =>  {
        setAttributes({ contentuyV: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText tagName="span" value={attributes.contentCvr} default="B" onChange={ (newtext) =>  {
        setAttributes({ contentCvr: newtext });
      }}
    /></h3>
            </div>
            <ul role="list" className="relative z-0 divide-y divide-gray-200">
              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlkMk: media.url,
            imagealtTlg: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlkMk } 
            alt={ attributes.imagealtTlg } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentFGw} default="Angela Beaver" onChange={ (newtext) =>  {
        setAttributes({ contentFGw: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentmDS} default="Chief Strategy Officer" onChange={ (newtext) =>  {
        setAttributes({ contentmDS: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlRzN: media.url,
            imagealtEqy: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlRzN } 
            alt={ attributes.imagealtEqy } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentgNq} default="Yvette Blanchard" onChange={ (newtext) =>  {
        setAttributes({ contentgNq: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentYrf} default="Studio Artist" onChange={ (newtext) =>  {
        setAttributes({ contentYrf: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlUQo: media.url,
            imagealtOQg: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlUQo } 
            alt={ attributes.imagealtOQg } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentsAs} default="Lawrence Brooks" onChange={ (newtext) =>  {
        setAttributes({ contentsAs: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentTZV} default="Content Specialist" onChange={ (newtext) =>  {
        setAttributes({ contentTZV: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText tagName="span" value={attributes.contenthHR} default="C" onChange={ (newtext) =>  {
        setAttributes({ contenthHR: newtext });
      }}
    /></h3>
            </div>
            <ul role="list" className="relative z-0 divide-y divide-gray-200">
              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlGAm: media.url,
            imagealtTQj: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlGAm } 
            alt={ attributes.imagealtTQj } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentWmM} default="Jeffrey Clark" onChange={ (newtext) =>  {
        setAttributes({ contentWmM: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentEwz} default="Senior Art Director" onChange={ (newtext) =>  {
        setAttributes({ contentEwz: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlmxb: media.url,
            imagealtaJj: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlmxb } 
            alt={ attributes.imagealtaJj } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentZby} default="Kathryn Cooper" onChange={ (newtext) =>  {
        setAttributes({ contentZby: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentyzz} default="Associate Creative Director" onChange={ (newtext) =>  {
        setAttributes({ contentyzz: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText tagName="span" value={attributes.contentJct} default="E" onChange={ (newtext) =>  {
        setAttributes({ contentJct: newtext });
      }}
    /></h3>
            </div>
            <ul role="list" className="relative z-0 divide-y divide-gray-200">
              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurluot: media.url,
            imagealtfqL: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurluot } 
            alt={ attributes.imagealtfqL } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentAcr} default="Alicia Edwards" onChange={ (newtext) =>  {
        setAttributes({ contentAcr: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentjdt} default="Junior Copywriter" onChange={ (newtext) =>  {
        setAttributes({ contentjdt: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurltwu: media.url,
            imagealtgKZ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurltwu } 
            alt={ attributes.imagealtgKZ } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentZcD} default="Benjamin Emerson" onChange={ (newtext) =>  {
        setAttributes({ contentZcD: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentDzl} default="Director, Print Operations" onChange={ (newtext) =>  {
        setAttributes({ contentDzl: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlzEg: media.url,
            imagealtvqn: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlzEg } 
            alt={ attributes.imagealtvqn } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentuOx} default="Jillian Erics" onChange={ (newtext) =>  {
        setAttributes({ contentuOx: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentezq} default="Designer" onChange={ (newtext) =>  {
        setAttributes({ contentezq: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlXCj: media.url,
            imagealtDRp: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlXCj } 
            alt={ attributes.imagealtDRp } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentCfO} default="Chelsea Evans" onChange={ (newtext) =>  {
        setAttributes({ contentCfO: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentOPn} default="Human Resources Manager" onChange={ (newtext) =>  {
        setAttributes({ contentOPn: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText tagName="span" value={attributes.contenthvT} default="G" onChange={ (newtext) =>  {
        setAttributes({ contenthvT: newtext });
      }}
    /></h3>
            </div>
            <ul role="list" className="relative z-0 divide-y divide-gray-200">
              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlyWA: media.url,
            imagealtFVo: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlyWA } 
            alt={ attributes.imagealtFVo } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentQsi} default="Michael Gillard" onChange={ (newtext) =>  {
        setAttributes({ contentQsi: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentEfd} default="Co-Founder / CTO" onChange={ (newtext) =>  {
        setAttributes({ contentEfd: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlGgS: media.url,
            imagealtFbV: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlGgS } 
            alt={ attributes.imagealtFbV } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentCiX} default="Dries Giuessepe" onChange={ (newtext) =>  {
        setAttributes({ contentCiX: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentAak} default="Manager, Business Relations" onChange={ (newtext) =>  {
        setAttributes({ contentAak: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText tagName="span" value={attributes.contentnUQ} default="M" onChange={ (newtext) =>  {
        setAttributes({ contentnUQ: newtext });
      }}
    /></h3>
            </div>
            <ul role="list" className="relative z-0 divide-y divide-gray-200">
              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlDMT: media.url,
            imagealtLSo: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlDMT } 
            alt={ attributes.imagealtLSo } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentdZu} default="Jenny Harrison" onChange={ (newtext) =>  {
        setAttributes({ contentdZu: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentBVr} default="Studio Artist" onChange={ (newtext) =>  {
        setAttributes({ contentBVr: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlsHs: media.url,
            imagealtbyO: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlsHs } 
            alt={ attributes.imagealtbyO } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentPmH} default="Lindsay Hatley" onChange={ (newtext) =>  {
        setAttributes({ contentPmH: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentbot} default="Front-end Developer" onChange={ (newtext) =>  {
        setAttributes({ contentbot: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlFcP: media.url,
            imagealtHJZ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlFcP } 
            alt={ attributes.imagealtHJZ } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentAJO} default="Anna Hill" onChange={ (newtext) =>  {
        setAttributes({ contentAJO: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentNGu} default="Partner, Creative" onChange={ (newtext) =>  {
        setAttributes({ contentNGu: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText tagName="span" value={attributes.contentKMo} default="S" onChange={ (newtext) =>  {
        setAttributes({ contentKMo: newtext });
      }}
    /></h3>
            </div>
            <ul role="list" className="relative z-0 divide-y divide-gray-200">
              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlnrg: media.url,
            imagealtTLW: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlnrg } 
            alt={ attributes.imagealtTLW } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentkGo} default="Courtney Samuels" onChange={ (newtext) =>  {
        setAttributes({ contentkGo: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentvoA} default="Designer" onChange={ (newtext) =>  {
        setAttributes({ contentvoA: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlFsY: media.url,
            imagealtLBm: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlFsY } 
            alt={ attributes.imagealtLBm } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentrzS} default="Tom Simpson" onChange={ (newtext) =>  {
        setAttributes({ contentrzS: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentwGQ} default="Director, Product Development" onChange={ (newtext) =>  {
        setAttributes({ contentwGQ: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText tagName="span" value={attributes.contentNFd} default="T" onChange={ (newtext) =>  {
        setAttributes({ contentNFd: newtext });
      }}
    /></h3>
            </div>
            <ul role="list" className="relative z-0 divide-y divide-gray-200">
              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlXVf: media.url,
            imagealthQO: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlXVf } 
            alt={ attributes.imagealthQO } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contenteQH} default="Floyd Thompson" onChange={ (newtext) =>  {
        setAttributes({ contenteQH: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentZsO} default="Principal Designer" onChange={ (newtext) =>  {
        setAttributes({ contentZsO: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlVZr: media.url,
            imagealtmlj: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlVZr } 
            alt={ attributes.imagealtmlj } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentazw} default="Leonard Timmons" onChange={ (newtext) =>  {
        setAttributes({ contentazw: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentlkJ} default="Senior Designer" onChange={ (newtext) =>  {
        setAttributes({ contentlkJ: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlpPO: media.url,
            imagealtWft: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlpPO } 
            alt={ attributes.imagealtWft } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentDJu} default="Whitney Trudeau" onChange={ (newtext) =>  {
        setAttributes({ contentDJu: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentezh} default="Copywriter" onChange={ (newtext) =>  {
        setAttributes({ contentezh: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText tagName="span" value={attributes.contentGro} default="W" onChange={ (newtext) =>  {
        setAttributes({ contentGro: newtext });
      }}
    /></h3>
            </div>
            <ul role="list" className="relative z-0 divide-y divide-gray-200">
              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurluYi: media.url,
            imagealthdJ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurluYi } 
            alt={ attributes.imagealthdJ } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentjlF} default="Kristin Watson" onChange={ (newtext) =>  {
        setAttributes({ contentjlF: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentsCz} default="VP, Human Resources" onChange={ (newtext) =>  {
        setAttributes({ contentsCz: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlpPC: media.url,
            imagealtEUb: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlpPC } 
            alt={ attributes.imagealtEUb } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contenteVE} default="Emily Wilson" onChange={ (newtext) =>  {
        setAttributes({ contenteVE: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentteJ} default="VP, User Experience" onChange={ (newtext) =>  {
        setAttributes({ contentteJ: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText tagName="span" value={attributes.contentUCT} default="Y" onChange={ (newtext) =>  {
        setAttributes({ contentUCT: newtext });
      }}
    /></h3>
            </div>
            <ul role="list" className="relative z-0 divide-y divide-gray-200">
              <li>
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div className="flex-shrink-0">
                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlQFC: media.url,
            imagealtJhX: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlQFC } 
            alt={ attributes.imagealtJhX } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="focus:outline-none">
                      
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <p className="text-sm font-medium text-gray-900"><RichText tagName="span" value={attributes.contentVRi} default="Emma Young" onChange={ (newtext) =>  {
        setAttributes({ contentVRi: newtext });
      }}
    /></p>
                      <p className="text-sm text-gray-500 truncate"><RichText tagName="span" value={attributes.contentLhP} default="Senior Front-end Developer" onChange={ (newtext) =>  {
        setAttributes({ contentLhP: newtext });
      }}
    /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      
    </spanside></div>
  </div>
</div>
</div></div>
                </div>
                );
            },
            save(props) {
            const { attributes } = props;

            return (
                <div>
    <div>
        <div class="h-full flex">
            <div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                    <div class="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentNLj} /></span>

                            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggzU }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div class="flex-shrink-0 flex items-center px-4">
                            
      <img
            src={ attributes.imageurlIeQ } 
            alt={ attributes.imagealtPGQ } 
            class="h-8 w-auto"
          />
                        </div>
                        <nav aria-label="Sidebar" class="mt-5">
                            <div class="px-2 space-y-1"> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpTd }}
        >
      </svg>
      <RichText.Content value={attributes.contentJpM} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzDi }}
        >
      </svg>
      <RichText.Content value={attributes.contentOCP} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRQh }}
        >
      </svg>
      <RichText.Content value={attributes.contentIxd} /></span>
 <span class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md" aria-current="page">
              
              
      <svg
         class="text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaGI }}
        >
      </svg>
      <RichText.Content value={attributes.contentbAk} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglgW }}
        >
      </svg>
      <RichText.Content value={attributes.contentkit} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdmO }}
        >
      </svg>
      <RichText.Content value={attributes.contentAbb} /></span>

                            </div>
                            <hr class="border-t border-gray-200 my-5" aria-hidden="true"/>
                            <div class="px-2 space-y-1"> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglKX }}
        >
      </svg>
      <RichText.Content value={attributes.contentKJe} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              
              
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpNh }}
        >
      </svg>
      <RichText.Content value={attributes.contentHLJ} /></span>

                            </div>
                        </nav>
                    </div>
                    <div class="flex-shrink-0 flex border-t border-gray-200 p-4"> <span class="flex-shrink-0 group block">
          <div class="flex items-center">
            <div>
              
      <img
            src={ attributes.imageurluHr } 
            alt={ attributes.imagealtKHb } 
            class="inline-block h-10 w-10 rounded-full"
          />
            </div>
            <div class="ml-3">
              <p class="text-base font-medium text-gray-700 group-hover:text-gray-900"><RichText.Content value={attributes.contentoDk} /></p>
              <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700"><RichText.Content value={attributes.contentesp} /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
                <div class="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div class="hidden lg:flex lg:flex-shrink-0">
                <div class="flex flex-col w-64">
                    <div class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
                        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div class="flex items-center flex-shrink-0 px-4">
                                
      <img
            src={ attributes.imageurljKN } 
            alt={ attributes.imagealtdwc } 
            class="h-8 w-auto"
          />
                            </div>
                            <nav class="mt-5 flex-1" aria-label="Sidebar">
                                <div class="px-2 space-y-1"> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglfY }}
        >
      </svg>
      <RichText.Content value={attributes.contentcWM} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglMQ }}
        >
      </svg>
      <RichText.Content value={attributes.contentutr} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgQal }}
        >
      </svg>
      <RichText.Content value={attributes.contentFrD} /></span>
 <span class="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md" aria-current="page">
                
                
      <svg
         class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfAq }}
        >
      </svg>
      <RichText.Content value={attributes.contentvkO} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVdH }}
        >
      </svg>
      <RichText.Content value={attributes.contentxWf} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgoza }}
        >
      </svg>
      <RichText.Content value={attributes.contentWKS} /></span>

                                </div>
                                <hr class="border-t border-gray-200 my-5" aria-hidden="true"/>
                                <div class="flex-1 px-2 space-y-1"> <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvlz }}
        >
      </svg>
      <RichText.Content value={attributes.contentMZO} /></span>
 <span class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                
                
      <svg
         class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsAp }}
        >
      </svg>
      <RichText.Content value={attributes.contentMYZ} /></span>

                                </div>
                            </nav>
                        </div>
                        <div class="flex-shrink-0 flex border-t border-gray-200 p-4"> <span class="flex-shrink-0 w-full group block">
            <div class="flex items-center">
              <div>
                
      <img
            src={ attributes.imageurlmcQ } 
            alt={ attributes.imagealtWzm } 
            class="inline-block h-9 w-9 rounded-full"
          />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900"><RichText.Content value={attributes.contentQSg} /></p>
                <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700"><RichText.Content value={attributes.contentVJv} /></p>
              </div>
            </div>
          </span>

                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
                <div class="lg:hidden">
                    <div class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                        <div>
                            
      <img
            src={ attributes.imageurlzro } 
            alt={ attributes.imagealtoUI } 
            class="h-8 w-auto"
          />
                        </div>
                        <div>
                            <button type="button" class="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"> <span class="sr-only"><RichText.Content value={attributes.contentunK} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMcv }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex-1 relative z-0 flex overflow-hidden">
                    <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                        <nav class="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden" aria-label="Breadcrumb"> <span class="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
            
            
      <svg
         class="-ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgpTw }}
        >
      </svg>
      
            <span><RichText.Content value={attributes.contentPJo} /></span>
</span>
                        </nav>
                        <spanrticle>
                            <div>
                                <div>
                                    
      <img
            src={ attributes.imageurlfNK } 
            alt={ attributes.imagealtDLv } 
            class="h-32 w-full object-cover lg:h-48"
          />
                                </div>
                                <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                        <div class="flex">
                                            
      <img
            src={ attributes.imageurlAtw } 
            alt={ attributes.imagealtRYb } 
            class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
          />
                                        </div>
                                        <div class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                            <div class="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                                 <h1 class="text-2xl font-bold text-gray-900 truncate"><RichText.Content value={attributes.contentCXv} /></h1>

                                            </div>
                                            <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                                                <button type="button" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                                                    
      <svg
         class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyUj }}
        >
      </svg>
       <span><RichText.Content value={attributes.contentVZn} /></span>

                                                </button>
                                                <button type="button" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                                                    
      <svg
         class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgvPh }}
        >
      </svg>
       <span><RichText.Content value={attributes.contentnBB} /></span>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                                         <h1 class="text-2xl font-bold text-gray-900 truncate"><RichText.Content value={attributes.contentWlC} /></h1>

                                    </div>
                                </div>
                            </div>
                            <div class="mt-6 sm:mt-2 2xl:mt-5">
                                <div class="border-b border-gray-200">
                                    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <nav class="-mb-px flex space-x-8" aria-label="Tabs"> <a class="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page"><RichText.Content value={attributes.contentJCd} />

                  <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contenttoI} /></span>

                  <span class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"><RichText.Content value={attributes.contentpKf} /></span>
                </a></nav>
              </div>
            </div>
          </div>

          
          <div class="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500"><RichText.Content value={attributes.contentuzy} /></dt>
                <dd class="mt-1 text-sm text-gray-900"><RichText.Content value={attributes.contentXOL} /></dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500"><RichText.Content value={attributes.contentPhm} /></dt>
                <dd class="mt-1 text-sm text-gray-900"><RichText.Content value={attributes.contentQtV} /></dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500"><RichText.Content value={attributes.contentBxl} /></dt>
                <dd class="mt-1 text-sm text-gray-900"><RichText.Content value={attributes.contentcsu} /></dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500"><RichText.Content value={attributes.contentQmJ} /></dt>
                <dd class="mt-1 text-sm text-gray-900"><RichText.Content value={attributes.contenthbG} /></dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500"><RichText.Content value={attributes.contentBJS} /></dt>
                <dd class="mt-1 text-sm text-gray-900"><RichText.Content value={attributes.contentwSb} /></dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500"><RichText.Content value={attributes.contentJqH} /></dt>
                <dd class="mt-1 text-sm text-gray-900"><RichText.Content value={attributes.contentTnq} /></dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500"><RichText.Content value={attributes.contentDWz} /></dt>
                <dd class="mt-1 text-sm text-gray-900"><RichText.Content value={attributes.contentPlw} /></dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500"><RichText.Content value={attributes.contentNqD} /></dt>
                <dd class="mt-1 text-sm text-gray-900"><RichText.Content value={attributes.contentcSF} /></dd>
              </div>

              <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-500"><RichText.Content value={attributes.contentOoE} /></dt>
                <dd class="mt-1 max-w-prose text-sm text-gray-900 space-y-5">
                  <p><RichText.Content value={attributes.contentaGS} /></p>
                  <p><RichText.Content value={attributes.contentDAJ} /></p>
                </dd>
              </div>
            </dl>
          </div>

          
          <div class="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
            <h2 class="text-sm font-medium text-gray-500"><RichText.Content value={attributes.contenteNu} /></h2>
            <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
                <div class="flex-shrink-0">
                  
      <img
            src={ attributes.imageurlaNT } 
            alt={ attributes.imagealtWyv } 
            class="h-10 w-10 rounded-full"
          />
                </div>
                <div class="flex-1 min-w-0">
                  <span class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"/>
                    <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentWLE} /></p>
                    <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentseY} /></p>
                  </span>
                </div>
              </div>

              <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
                <div class="flex-shrink-0">
                  
      <img
            src={ attributes.imageurlRuN } 
            alt={ attributes.imagealthRF } 
            class="h-10 w-10 rounded-full"
          />
                </div>
                <div class="flex-1 min-w-0">
                  <span class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"/>
                    <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentjqf} /></p>
                    <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentbbi} /></p>
                  </span>
                </div>
              </div>

              <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
                <div class="flex-shrink-0">
                  
      <img
            src={ attributes.imageurlnMd } 
            alt={ attributes.imagealtIlG } 
            class="h-10 w-10 rounded-full"
          />
                </div>
                <div class="flex-1 min-w-0">
                  <span class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"/>
                    <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentFrs} /></p>
                    <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentMbZ} /></p>
                  </span>
                </div>
              </div>

              <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
                <div class="flex-shrink-0">
                  
      <img
            src={ attributes.imageurlEAr } 
            alt={ attributes.imagealtNzi } 
            class="h-10 w-10 rounded-full"
          />
                </div>
                <div class="flex-1 min-w-0">
                  <span class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"/>
                    <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentvPr} /></p>
                    <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentXxv} /></p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        
      </spanrticle></main>
      <spanside class="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
        <div class="px-6 pt-6 pb-4">
          <h2 class="text-lg font-medium text-gray-900"><RichText.Content value={attributes.contentKDJ} /></h2>
          <p class="mt-1 text-sm text-gray-600"><RichText.Content value={attributes.contentrpE} /></p>
          <form class="mt-6 flex space-x-4" action="#">
            <div class="flex-1 min-w-0">
              <label for="search" class="sr-only"><RichText.Content value={attributes.contentEMR} /></label>
              <div class="relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  
                  
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svggFx }}
        >
      </svg>
      
                </div>
                <input type="search" name="search" id="search" class="focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search"/>
              </div>
            </div>
            <button type="submit" class="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              
              
      <svg
         class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeII }}
        >
      </svg>
      
              <span class="sr-only"><RichText.Content value={attributes.contentEcK} /></span>
            </button>
          </form>
        </div>
        
        <nav class="flex-1 min-h-0 overflow-y-auto" aria-label="Directory">
          <div class="relative">
            <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText.Content value={attributes.contentmLM} /></h3>
            </div>
            <ul role="list" class="relative z-0 divide-y divide-gray-200">
              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlLIi } 
            alt={ attributes.imagealtAfz } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <a class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentuex} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentjPE} /></p>
                    
                  </a></div>
                </div>
              </li>

              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlDij } 
            alt={ attributes.imagealtKEM } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentDYR} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentuzK} /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlZnN } 
            alt={ attributes.imagealtWrw } 
            class="inline-block h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentEym} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentcuJ} /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurliQc } 
            alt={ attributes.imagealtJnY } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentOkR} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentuyV} /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="relative">
            <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText.Content value={attributes.contentCvr} /></h3>
            </div>
            <ul role="list" class="relative z-0 divide-y divide-gray-200">
              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlkMk } 
            alt={ attributes.imagealtTlg } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentFGw} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentmDS} /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlRzN } 
            alt={ attributes.imagealtEqy } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentgNq} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentYrf} /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlUQo } 
            alt={ attributes.imagealtOQg } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentsAs} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentTZV} /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="relative">
            <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText.Content value={attributes.contenthHR} /></h3>
            </div>
            <ul role="list" class="relative z-0 divide-y divide-gray-200">
              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlGAm } 
            alt={ attributes.imagealtTQj } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentWmM} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentEwz} /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlmxb } 
            alt={ attributes.imagealtaJj } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentZby} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentyzz} /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="relative">
            <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText.Content value={attributes.contentJct} /></h3>
            </div>
            <ul role="list" class="relative z-0 divide-y divide-gray-200">
              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurluot } 
            alt={ attributes.imagealtfqL } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentAcr} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentjdt} /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurltwu } 
            alt={ attributes.imagealtgKZ } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentZcD} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentDzl} /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlzEg } 
            alt={ attributes.imagealtvqn } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentuOx} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentezq} /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlXCj } 
            alt={ attributes.imagealtDRp } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentCfO} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentOPn} /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="relative">
            <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText.Content value={attributes.contenthvT} /></h3>
            </div>
            <ul role="list" class="relative z-0 divide-y divide-gray-200">
              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlyWA } 
            alt={ attributes.imagealtFVo } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentQsi} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentEfd} /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlGgS } 
            alt={ attributes.imagealtFbV } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentCiX} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentAak} /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="relative">
            <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText.Content value={attributes.contentnUQ} /></h3>
            </div>
            <ul role="list" class="relative z-0 divide-y divide-gray-200">
              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlDMT } 
            alt={ attributes.imagealtLSo } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentdZu} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentBVr} /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlsHs } 
            alt={ attributes.imagealtbyO } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentPmH} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentbot} /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlFcP } 
            alt={ attributes.imagealtHJZ } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentAJO} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentNGu} /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="relative">
            <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText.Content value={attributes.contentKMo} /></h3>
            </div>
            <ul role="list" class="relative z-0 divide-y divide-gray-200">
              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlnrg } 
            alt={ attributes.imagealtTLW } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentkGo} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentvoA} /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlFsY } 
            alt={ attributes.imagealtLBm } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentrzS} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentwGQ} /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="relative">
            <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText.Content value={attributes.contentNFd} /></h3>
            </div>
            <ul role="list" class="relative z-0 divide-y divide-gray-200">
              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlXVf } 
            alt={ attributes.imagealthQO } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contenteQH} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentZsO} /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlVZr } 
            alt={ attributes.imagealtmlj } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentazw} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentlkJ} /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlpPO } 
            alt={ attributes.imagealtWft } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentDJu} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentezh} /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="relative">
            <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText.Content value={attributes.contentGro} /></h3>
            </div>
            <ul role="list" class="relative z-0 divide-y divide-gray-200">
              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurluYi } 
            alt={ attributes.imagealthdJ } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentjlF} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentsCz} /></p>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlpPC } 
            alt={ attributes.imagealtEUb } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contenteVE} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentteJ} /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="relative">
            <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3><RichText.Content value={attributes.contentUCT} /></h3>
            </div>
            <ul role="list" class="relative z-0 divide-y divide-gray-200">
              <li>
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    
      <img
            src={ attributes.imageurlQFC } 
            alt={ attributes.imagealtJhX } 
            class="h-10 w-10 rounded-full"
          />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="focus:outline-none">
                      
                      <span class="absolute inset-0" aria-hidden="true"/>
                      <p class="text-sm font-medium text-gray-900"><RichText.Content value={attributes.contentVRi} /></p>
                      <p class="text-sm text-gray-500 truncate"><RichText.Content value={attributes.contentLhP} /></p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      
    </spanside></div>
  </div>
</div>
</div></div>
            );
            },
        });
        