
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-centered-logo-and-featured-categories', {
            title: 'with centered logo and featured categories',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABBBaADASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAUDBAYCAQf/xAA0EAEAAgIBAwMCBQMCBgMAAAAAAQIDBBEFEiETMUEGURQiYXGBFTKRI1IzVKGi0fBCscH/xAAZAQEBAAMBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEAAgIBBAMBAAAAAAAAAAAAARECAwQSEzFhISNRcf/aAAwDAQACEQMRAD8A/TgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzm51/c1+nbdqYMV93Dt2wUx8TxasR3c8c8/2c/y2cnXsePcvM9s6WPVx5bWrWbXte8/krHH3haLWhJt9QamPV2c+fFs4ba009XFfHxeItMRE8c+Y8/EsV/qbVx+tF9PfrbB+bLWcHmlfi0+fb/r4nwULYl7XXtTWyWr2Z8tcdIyZb4sfdXFWfMTb+PPh42vqHU1s+fFOHZy/h61vkvix91a1tHMWmefZKFcfKXrkpW9J5raOYmPmH0AAAR79YyY/qiOl5KUjBfFE0ycTz3zzPEzzx5is/4YsPX+7re/r5Yx00tPDN5y8TzMxMRb+InmPb3haF0Sa9f1fSz3y4dnDOHDOfsy4+216fevn/3ll0Osa+9szr0xbGLJ6fq0jNj7e+n+6P08pQogAAw7mxTT08+1kiZphx2vMR8xEcgzCNrbHXL01tq+DUvhzTWbYKcxfHWfnumeJmPmOI/Rkv17Tps2xTTYnHXL6NtiMf8ApVv7dsz+/j24WhVEbN9S6WHLlrfBtzTFmnBfLXFzWt/iOY+77b6j06a+XLmw7WK2HLXFkxXx/nrNvaeIn2koWBNw9b18uPZm2DaxZNaItfDfFPfxPtMRHPPLFb6h1Mers5s+HZwzqzT1cWTHxeIvPFZiOfMJQriTH1BqfnjLh2sNseTHS9cuPtmsXnitvf8At5b2DdxZ9zZ1ccX79bti9pj8vNo54j9eP/sGwAACf1zfydN6ZfZxUra0WrXm0TNaRM8d08eeIBQEGvV9rD03c3LX1N/Fhx99MmpPHn5i0TM8ce/PPt8M9evY/wAPq2tqbVtjYx+pGDHj7rxWPe3v7eVoVxJv9Q6cV1Zw4tnYnapa2KuHHzM9s8TExz4mP/yXqeu6kbfo9mfsjL6E5/T/ANOMnt28/v4+3JQqCbi6zgzbk6+PBs2rGWcM54x84++PeOff+eOFJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASeo/UXTOnZZxZs03yx70xx3TH7/CraJmsxEzEzHvHwjZPpbpOTXnFbDfvmeZzd8zeZ+/Lbq7V/Zdeklk6f8AUfTOoZow4c01y2/trkr2936QrPzDq/Qt3pOz4rfJi55pmpE8fpz9pWekfUfW9jHj1sOlXavHFfWtFuOPvafb+XZt4WM49embj2kT+u2GLWpkx69K5snqZePz2+Jn54/T7Mrz58sgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxe7v7OL679GdzNTWi9OaerMUiOyJnxzwxyy6ab9Gid05RE+It2gkY/qHp2Tey6vr1rGOkXnLa0RSYnj2mZ/WP8ALnvprf3M/wBU5MObbz5MUepxS+SZr4nx4lJ2RExEM8OJsyxyyn4qLdwCVsbu9n6rk0OnehT0Mdb5cuas24m3PFYiJj7T55ZuVVEnY6ju6nRcuxta2Om5W3p46Vt3UyWmeKzHnniZmPE+WDL1rYr9MZeoVpijbw29PJSYma1vF4rbxzzx8+60LokV3uoanUNXW6jXWyY9q00plwRavbaI54mJmffiflXQAAGPPsYdendmyVpE+3PyyJ2rjrtbuxsZo7pxZJx0rPtWI488fqDZ193W2Z4wZq2n7e0/4lsNLqmCt9W+ePyZsMTel4944bOvecuvjyTHE3pFpj94BkAAAAmYiJmZ4iGti6hqZcvpY89bXnxEfc6jjvm0M2PF5vNfEfdOz58O1rYtbVw3jNFqzERTj0+PeViBaAQAACZiImZniIErrOzk9PJqYcU3mccWtaJ/tju49vkG5i6hqZcvpY89bXnxEfdsom9OzOlFf6bGKMcxNbVyRbt8x8R5U9LZnZpfvxenfHeaWr3c8T+60NgPb3c9r9a3r4tTqGTHgjR288Yq0iJ9SkWmYraZ54nz7xx8oOhAAAAAAAAAAAAAAAAAAAAAAAAAAABHno15+p56lN6Trzi84/n1eO3n29u3w0tb6a2MHTM+H8RjnZ/EUy4LzzNYrj47K2/iP+rpRbKc7s9G6hvU3M21fWps54w0pTHa00rWl4tPMzHMzPn4bW30rPmy9YtW+OI3tauHHzM+Jito8+Pb80fdYCxy+z9N552cuXHi08/4jFjpf17Xj05rXt5iK/3Rx8eG9/R80V6tWlsUV3NamHFHmO2a0mvn7R5/VaCymHTxWwaWDDeYm2PHWkzHtzEcMwIAAInUejbG1tbmxhyY6ZL48U69pmeaZMc2nmfHt54+flgj6bvOG2C2avZfRnXvfzNpyTebTbj7cz93RC2U5in09szrbdbYNDDly6tsFLYrXmbTPzMz7R+kRP7q1dDLHVtXb7qenh1bYbRzPMzM1nx49vEqIWACAxbevTb1M2tl57M1LUtx9pjhlARNXV67jpramTY1a6+CaxbNj5nJkpHx2zHETPzPLBk6Jv2x5unxl1v6fl2fXm893qRHfF5rx7e8e/LohbKQr9G2bam1ii+LuzdQjar5niKxas8T49/yy1eudO265tjYwzSZ2dvVnFxE27e3xM2j7cunC0pz2fpPVNuu9sZdjBg28+OmLHGG1u2ta25nm3ifPMx49mtT6b2/T3+I1MM7XoTWlMl7RXsvzPMzHM+I/wDfd1QWUg9a0KzbqO3s2iNfNp1wxFYm14vFpmJ4iPvMNr6c1s+Dpdcu5Ext7Npz5uY4mLT7R/EREfwqBagCA1uoY9vJqzGhlx488WiY9SvNbR81n7RP3jy2QHPYeh7GXJ1DNsU1dW23qzrxj1uZr55/PbxHM+ft7PePp3VcF9TbxTpztYtb8Nkpa1uy1eYmJieOefHtwvC2UidN6Lm0tnRy2y47+jizRlmOYmb3tFvEfb3alPpvJj38kxh0smC+zOf1ck39SsTPPHbHiZ+08/w6YLKc/wD0bc/rVdun4XBWM/qXy4LXrbLT/ban9sz955dACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxbN8mPXvbDj9TLx+SvxM/HP6fdlFjyOJ6v9Odb2MeTZzbtdq8c29Gs244+1Y9v4Rukdd3ek7Pm18mLni+G8zx+vH2l+npPUPpzpnUM05s2Ga5bf3Wx27e79Zehq5uM49G6Lj0xmPxjx/VPScmvGWua/fM8Rh7Jm8z9uFmszNYmYmJmPafhK6d9O9M6dljLhwzfLHtfJPdMft8Kzj29q/ruvawANSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhuoal8/17PqYL3wXtStp7Z7Zj04ifLuRhnh1U6OPvnTOUxHmKc5r/AEh07D1D8RMZL46z3Ux2tzXnz4nxzxHjjz+6N9L6+bH9V5LWw3pT/U4mazEe7vBJ1RcTDbjztnTljn83FfwSdvS38PVb9Q6ZOvac2OMebFmmaxPbz22iYifPmVYbHEhZuj72/XTp1Papkx48ts+b0pmkxbj8laceeI5nzM8sGf6e2KafU9PSy09DbnHkxxmyWma3iY7uZ4mZieIdILZSPj0eo7XUdba6pk1qY9WbWx4dfunm0xxzaZiPaJnxELAIAADRy62fDs22dPtt6n/ExWniLfrE/DeAS9rH1HdxTScVMFPead/M3/TmPhu6mxj2MXNI7LU/LbHPvSfszvEYscZpzRSIyTHE2+ZhR7AQAAae7ny+pj1dXiMuSOZtP/wr93i2ls469+DezWy/bJPNZ/j4Z9nR1tq8Xz4u60RxE8zHj+GH+j9P/wCX/wC+3/lUZ9LZ/Fa8ZJr2WiZrav2mPdnYtfXw62P08FOyvPPHPPllRQABo4fzdZ2Z/wBmOlf258t5q5+namxlnLmw915957pjn/Eg2mjofl3N6nxGSLf5g/o/T/8Al/8Avt/5Z9bU19SLRr4+zu9/Mzz/AJUZ3Pa/RN6ldTQy5cE9P1M/rUtEz6l4iZmtZjjjxPz+joRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoAKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADfARQAAAAAAAAAAAH//2Q==" />),
            category: 'common',
            attributes: {
  "contentvQO": {
    "type": "string",
    "default": "Close menu"
  },
  "contentGNI": {
    "type": "string",
    "default": "Women"
  },
  "contentEHW": {
    "type": "string",
    "default": "Men"
  },
  "contenthoe": {
    "type": "string",
    "default": "\n                    New Arrivals\n                  "
  },
  "contentoIq": {
    "type": "string",
    "default": "Shop now"
  },
  "contentcpX": {
    "type": "string",
    "default": "\n                    Basic Tees\n                  "
  },
  "contentIFw": {
    "type": "string",
    "default": "Shop now"
  },
  "contentyuy": {
    "type": "string",
    "default": "\n                    Accessories\n                  "
  },
  "contentpkp": {
    "type": "string",
    "default": "Shop now"
  },
  "contentGKt": {
    "type": "string",
    "default": "Shoes &amp; Accessories"
  },
  "contentZGN": {
    "type": "string",
    "default": " Sneakers "
  },
  "contentNRc": {
    "type": "string",
    "default": " Boots "
  },
  "contentopB": {
    "type": "string",
    "default": " Flats "
  },
  "contentYOj": {
    "type": "string",
    "default": " Sandals "
  },
  "contentOCD": {
    "type": "string",
    "default": " Heels "
  },
  "contentAEe": {
    "type": "string",
    "default": " Socks "
  },
  "contentlBh": {
    "type": "string",
    "default": "Shop Collection"
  },
  "contentRBp": {
    "type": "string",
    "default": " Everything "
  },
  "contentwKn": {
    "type": "string",
    "default": " Core "
  },
  "contentnZA": {
    "type": "string",
    "default": " New Arrivals "
  },
  "contentujO": {
    "type": "string",
    "default": " Sale "
  },
  "contentodC": {
    "type": "string",
    "default": " Accessories "
  },
  "contentNoJ": {
    "type": "string",
    "default": "All Clothing"
  },
  "contentCzs": {
    "type": "string",
    "default": " Basic Tees "
  },
  "contenthIo": {
    "type": "string",
    "default": " Artwork Tees "
  },
  "contentHPm": {
    "type": "string",
    "default": " Tops "
  },
  "contentcpe": {
    "type": "string",
    "default": " Bottoms "
  },
  "contentgeK": {
    "type": "string",
    "default": " Swimwear "
  },
  "contenttjM": {
    "type": "string",
    "default": " Underwear "
  },
  "contentYvv": {
    "type": "string",
    "default": "All Accessories"
  },
  "contentRfR": {
    "type": "string",
    "default": " Watches "
  },
  "contentKiU": {
    "type": "string",
    "default": " Wallets "
  },
  "contentZzV": {
    "type": "string",
    "default": " Bags "
  },
  "contentZeu": {
    "type": "string",
    "default": " Sunglasses "
  },
  "contentbds": {
    "type": "string",
    "default": " Hats "
  },
  "contentRCC": {
    "type": "string",
    "default": " Belts "
  },
  "contentxQw": {
    "type": "string",
    "default": "Brands"
  },
  "contentBIR": {
    "type": "string",
    "default": " Full Nelson "
  },
  "contentByv": {
    "type": "string",
    "default": " My Way "
  },
  "contentfZW": {
    "type": "string",
    "default": " Re-Arranged "
  },
  "contentQvP": {
    "type": "string",
    "default": " Counterfeit "
  },
  "contentyqW": {
    "type": "string",
    "default": " Significant Other "
  },
  "contentbOJ": {
    "type": "string",
    "default": "\n                    Accessories\n                  "
  },
  "contentJbX": {
    "type": "string",
    "default": "Shop now"
  },
  "contentjuS": {
    "type": "string",
    "default": "\n                    New Arrivals\n                  "
  },
  "contentKMC": {
    "type": "string",
    "default": "Shop now"
  },
  "contentJLt": {
    "type": "string",
    "default": "\n                    Artwork Tees\n                  "
  },
  "contentyCD": {
    "type": "string",
    "default": "Shop now"
  },
  "contentjaw": {
    "type": "string",
    "default": "Shoes &amp; Accessories"
  },
  "contentnZU": {
    "type": "string",
    "default": " Sneakers "
  },
  "contentFgP": {
    "type": "string",
    "default": " Boots "
  },
  "contentrjF": {
    "type": "string",
    "default": " Sandals "
  },
  "contentZCO": {
    "type": "string",
    "default": " Socks "
  },
  "contentvrF": {
    "type": "string",
    "default": "Shop Collection"
  },
  "contentBSV": {
    "type": "string",
    "default": " Everything "
  },
  "contentByw": {
    "type": "string",
    "default": " Core "
  },
  "contentDkj": {
    "type": "string",
    "default": " New Arrivals "
  },
  "contentpup": {
    "type": "string",
    "default": " Sale "
  },
  "contentBmE": {
    "type": "string",
    "default": "All Clothing"
  },
  "contentpNt": {
    "type": "string",
    "default": " Basic Tees "
  },
  "contentYef": {
    "type": "string",
    "default": " Artwork Tees "
  },
  "contentvNV": {
    "type": "string",
    "default": " Pants "
  },
  "contentCWa": {
    "type": "string",
    "default": " Hoodies "
  },
  "contentAmz": {
    "type": "string",
    "default": " Swimsuits "
  },
  "contentBke": {
    "type": "string",
    "default": "All Accessories"
  },
  "contentFnn": {
    "type": "string",
    "default": " Watches "
  },
  "contentuMv": {
    "type": "string",
    "default": " Wallets "
  },
  "contentCKP": {
    "type": "string",
    "default": " Bags "
  },
  "contentagH": {
    "type": "string",
    "default": " Sunglasses "
  },
  "contentASx": {
    "type": "string",
    "default": " Hats "
  },
  "contentTVG": {
    "type": "string",
    "default": " Belts "
  },
  "contentoDt": {
    "type": "string",
    "default": "Brands"
  },
  "contentOYs": {
    "type": "string",
    "default": " Re-Arranged "
  },
  "contentPzF": {
    "type": "string",
    "default": " Counterfeit "
  },
  "contentpdy": {
    "type": "string",
    "default": " Full Nelson "
  },
  "contentGyh": {
    "type": "string",
    "default": " My Way "
  },
  "contentoQU": {
    "type": "string",
    "default": "Company"
  },
  "contenthBp": {
    "type": "string",
    "default": "Stores"
  },
  "contentYpm": {
    "type": "string",
    "default": " CAD "
  },
  "contentmTQ": {
    "type": "string",
    "default": ", change currency"
  },
  "contentpOc": {
    "type": "string",
    "default": "Open menu"
  },
  "contentkvY": {
    "type": "string",
    "default": "Search"
  },
  "contentpre": {
    "type": "string",
    "default": "\n                    Women\n                    \n                    "
  },
  "contentxeM": {
    "type": "string",
    "default": "\n                                  New Arrivals\n                                "
  },
  "contentcqq": {
    "type": "string",
    "default": "Shop now"
  },
  "contentCGA": {
    "type": "string",
    "default": "\n                                  Basic Tees\n                                "
  },
  "contentAIA": {
    "type": "string",
    "default": "Shop now"
  },
  "contentqMC": {
    "type": "string",
    "default": "\n                                  Accessories\n                                "
  },
  "contentHNL": {
    "type": "string",
    "default": "Shop now"
  },
  "contentXZm": {
    "type": "string",
    "default": "Shoes &amp; Accessories"
  },
  "contentHRK": {
    "type": "string",
    "default": " Sneakers "
  },
  "contentFJA": {
    "type": "string",
    "default": " Boots "
  },
  "contentXPJ": {
    "type": "string",
    "default": " Flats "
  },
  "contentOGy": {
    "type": "string",
    "default": " Sandals "
  },
  "contentnMa": {
    "type": "string",
    "default": " Heels "
  },
  "contentDeC": {
    "type": "string",
    "default": " Socks "
  },
  "contenttcN": {
    "type": "string",
    "default": "Shop Collection"
  },
  "contentyfv": {
    "type": "string",
    "default": " Everything "
  },
  "contentdGe": {
    "type": "string",
    "default": " Core "
  },
  "contentlgk": {
    "type": "string",
    "default": " New Arrivals "
  },
  "contentOsf": {
    "type": "string",
    "default": " Sale "
  },
  "contentNTa": {
    "type": "string",
    "default": " Accessories "
  },
  "contentPCj": {
    "type": "string",
    "default": "All Clothing"
  },
  "contentgQs": {
    "type": "string",
    "default": " Basic Tees "
  },
  "contentrQS": {
    "type": "string",
    "default": " Artwork Tees "
  },
  "contentyeg": {
    "type": "string",
    "default": " Tops "
  },
  "contentmiA": {
    "type": "string",
    "default": " Bottoms "
  },
  "contentyMk": {
    "type": "string",
    "default": " Swimwear "
  },
  "contentVpF": {
    "type": "string",
    "default": " Underwear "
  },
  "contentMms": {
    "type": "string",
    "default": "All Accessories"
  },
  "contentzvw": {
    "type": "string",
    "default": " Watches "
  },
  "contentFTU": {
    "type": "string",
    "default": " Wallets "
  },
  "contentOpT": {
    "type": "string",
    "default": " Bags "
  },
  "contentlvr": {
    "type": "string",
    "default": " Sunglasses "
  },
  "contentQYl": {
    "type": "string",
    "default": " Hats "
  },
  "contentRLO": {
    "type": "string",
    "default": " Belts "
  },
  "contentERs": {
    "type": "string",
    "default": "Brands"
  },
  "contentcXB": {
    "type": "string",
    "default": " Full Nelson "
  },
  "contentQZV": {
    "type": "string",
    "default": " My Way "
  },
  "contentLMG": {
    "type": "string",
    "default": " Re-Arranged "
  },
  "contentTNt": {
    "type": "string",
    "default": " Counterfeit "
  },
  "contentgtJ": {
    "type": "string",
    "default": " Significant Other "
  },
  "contenttnT": {
    "type": "string",
    "default": "\n                    Men\n                    \n                    "
  },
  "contentyxr": {
    "type": "string",
    "default": "\n                                  Accessories\n                                "
  },
  "contentCdf": {
    "type": "string",
    "default": "Shop now"
  },
  "contentrRg": {
    "type": "string",
    "default": "\n                                  New Arrivals\n                                "
  },
  "contentXFj": {
    "type": "string",
    "default": "Shop now"
  },
  "contenthkf": {
    "type": "string",
    "default": "\n                                  Artwork Tees\n                                "
  },
  "contentVsY": {
    "type": "string",
    "default": "Shop now"
  },
  "contentZgB": {
    "type": "string",
    "default": "Shoes &amp; Accessories"
  },
  "contentnYZ": {
    "type": "string",
    "default": " Sneakers "
  },
  "contentziF": {
    "type": "string",
    "default": " Boots "
  },
  "contentHNE": {
    "type": "string",
    "default": " Sandals "
  },
  "contentftD": {
    "type": "string",
    "default": " Socks "
  },
  "contentiyD": {
    "type": "string",
    "default": "Shop Collection"
  },
  "contentQtd": {
    "type": "string",
    "default": " Everything "
  },
  "contentrQs": {
    "type": "string",
    "default": " Core "
  },
  "contentFkg": {
    "type": "string",
    "default": " New Arrivals "
  },
  "contentBCf": {
    "type": "string",
    "default": " Sale "
  },
  "contentuav": {
    "type": "string",
    "default": "All Clothing"
  },
  "contentKJS": {
    "type": "string",
    "default": " Basic Tees "
  },
  "contentsEC": {
    "type": "string",
    "default": " Artwork Tees "
  },
  "contentPnM": {
    "type": "string",
    "default": " Pants "
  },
  "contentMXz": {
    "type": "string",
    "default": " Hoodies "
  },
  "contentzMj": {
    "type": "string",
    "default": " Swimsuits "
  },
  "contentfEg": {
    "type": "string",
    "default": "All Accessories"
  },
  "contentqFt": {
    "type": "string",
    "default": " Watches "
  },
  "contentyMW": {
    "type": "string",
    "default": " Wallets "
  },
  "contentTnJ": {
    "type": "string",
    "default": " Bags "
  },
  "contentYgB": {
    "type": "string",
    "default": " Sunglasses "
  },
  "contenttox": {
    "type": "string",
    "default": " Hats "
  },
  "contentyoq": {
    "type": "string",
    "default": " Belts "
  },
  "contentCyK": {
    "type": "string",
    "default": "Brands"
  },
  "contentvkR": {
    "type": "string",
    "default": " Re-Arranged "
  },
  "contentZUk": {
    "type": "string",
    "default": " Counterfeit "
  },
  "contentHef": {
    "type": "string",
    "default": " Full Nelson "
  },
  "contentjmX": {
    "type": "string",
    "default": " My Way "
  },
  "contentPOc": {
    "type": "string",
    "default": "Company"
  },
  "contentzaN": {
    "type": "string",
    "default": "Stores"
  },
  "contentbPS": {
    "type": "string",
    "default": "Workflow"
  },
  "contentzIb": {
    "type": "string",
    "default": " CAD "
  },
  "contentVoP": {
    "type": "string",
    "default": ", change currency"
  },
  "contentDzC": {
    "type": "string",
    "default": "Search"
  },
  "contentBRD": {
    "type": "string",
    "default": "Account"
  },
  "contentvOz": {
    "type": "string",
    "default": "0"
  },
  "contentQtF": {
    "type": "string",
    "default": "items in cart, view bag"
  },
  "imageurloCg": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-01.jpg'
  },
  "imagealtqSq": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Models sitting back to back, wearing Basic Tee in black and bone."
  },
  "imageurlJaG": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-02.jpg'
  },
  "imagealtGkn": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
  },
  "imageurlBXu": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-03.jpg'
  },
  "imagealtYUL": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Model wearing minimalist watch with black wristband and white watch face."
  },
  "imageurlxDz": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-03-category-01.jpg'
  },
  "imagealtkNO": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
  },
  "imageurlApS": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/product-page-04-detail-product-shot-01.jpg'
  },
  "imagealtvmI": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Drawstring top with elastic loop closure and textured interior padding."
  },
  "imageurlCnU": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/category-page-02-image-card-06.jpg'
  },
  "imagealtHRA": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
  },
  "imageurlaNR": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/flags/flag-canada.svg'
  },
  "imagealtzWx": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlYKk": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-01.jpg'
  },
  "imagealtQPh": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Models sitting back to back, wearing Basic Tee in black and bone."
  },
  "imageurleBW": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-02.jpg'
  },
  "imagealtLVJ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
  },
  "imageurljmL": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/mega-menu-category-03.jpg'
  },
  "imagealtdjE": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Model wearing minimalist watch with black wristband and white watch face."
  },
  "imageurlujp": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/home-page-03-category-01.jpg'
  },
  "imagealtOiU": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
  },
  "imageurlrGy": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/product-page-04-detail-product-shot-01.jpg'
  },
  "imagealtIDb": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Drawstring top with elastic loop closure and textured interior padding."
  },
  "imageurlkbd": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/ecommerce-images/category-page-02-image-card-06.jpg'
  },
  "imagealtgoo": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
  },
  "imageurlldQ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtNGf": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlNPK": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/flags/flag-canada.svg'
  },
  "imagealtmkO": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgPSw": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svglxU": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgklf": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"/>"
  },
  "svgyUR": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"/>"
  },
  "svgKMM": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\"/>"
  },
  "svgBHE": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z\"/>"
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
            value={ attributes.svgPSw }
            onChange={ ( value ) => {
              setAttributes({ svgPSw: value });
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
            value={ attributes.svglxU }
            onChange={ ( value ) => {
              setAttributes({ svglxU: value });
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
            value={ attributes.svgklf }
            onChange={ ( value ) => {
              setAttributes({ svgklf: value });
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
            value={ attributes.svgyUR }
            onChange={ ( value ) => {
              setAttributes({ svgyUR: value });
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
            value={ attributes.svgKMM }
            onChange={ ( value ) => {
              setAttributes({ svgKMM: value });
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
            value={ attributes.svgBHE }
            onChange={ ( value ) => {
              setAttributes({ svgBHE: value });
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
        <div className="bg-white">
            <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"/>
                <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                    <div className="px-4 pt-5 pb-2 flex">
                        <button type="button" className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"> <span className="sr-only"><RichText tagName="span" value={attributes.contentvQO} default="Close menu" onChange={ (newtext) =>  {
        setAttributes({ contentvQO: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPSw }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="mt-2">
                        <div className="border-b border-gray-200">
                            <div className="-mb-px flex px-4 space-x-8" aria-orientation="horizontal" role="tablist">
                                <button id="tabs-1-tab-1" className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">
                                    <RichText tagName="span" value={attributes.contentGNI} default="Women" onChange={ (newtext) => { setAttributes({ contentGNI: newtext }); }} /></button>
                                <button id="tabs-1-tab-2" className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">
                                    <RichText tagName="span" value={attributes.contentEHW} default="Men" onChange={ (newtext) => { setAttributes({ contentEHW: newtext }); }} /></button>
                            </div>
                        </div>
                        <div id="tabs-1-panel-1" className="pt-10 pb-8 px-4 space-y-10" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                            <div className="space-y-4">
                                <div className="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurloCg: media.url,
            imagealtqSq: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurloCg } 
            alt={ attributes.imagealtqSq } 
            onClick={ open } 
            className="object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
                                    <div className="flex flex-col justify-end">
                                        <div className="p-4 bg-white bg-opacity-60 text-base sm:text-sm"> <span className="font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contenthoe} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contenthoe: newtext });
      }}
    /></span>

                                            <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                                <RichText tagName="span" value={attributes.contentoIq} default="Shop now" onChange={ (newtext) => { setAttributes({ contentoIq: newtext }); }} /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurljAG: media.url,
            imagealtxpJ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurljAG } 
            alt={ attributes.imagealtxpJ } 
            onClick={ open } 
            className="h-12 w-12 rounded-full"
          /> 
        )} 
      />
                                    <div className="flex flex-col justify-end">
                                        <div className="p-4 bg-white bg-opacity-60 text-base sm:text-sm"> <span className="font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentcpX} default="Basic Tees" onChange={ (newtext) =>  {
        setAttributes({ contentcpX: newtext });
      }}
    /></span>

                                            <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                                <RichText tagName="span" value={attributes.contentIFw} default="Shop now" onChange={ (newtext) => { setAttributes({ contentIFw: newtext }); }} /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlBXu: media.url,
            imagealtYUL: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlBXu } 
            alt={ attributes.imagealtYUL } 
            onClick={ open } 
            className="object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
                                    <div className="flex flex-col justify-end">
                                        <div className="p-4 bg-white bg-opacity-60 text-base sm:text-sm"> <span className="font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentyuy} default="Accessories" onChange={ (newtext) =>  {
        setAttributes({ contentyuy: newtext });
      }}
    /></span>

                                            <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                                <RichText tagName="span" value={attributes.contentpkp} default="Shop now" onChange={ (newtext) => { setAttributes({ contentpkp: newtext }); }} /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-10">
                                <div>
                                    <p id="women-shoes-heading-mobile" className="font-medium text-gray-900">
                                        <RichText tagName="span" value={attributes.contentGKt} default="Shoes &amp; Accessories" onChange={ (newtext) => { setAttributes({ contentGKt: newtext }); }} /></p>
                                    <ul role="list" aria-labelledby="women-shoes-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentZGN} default="Sneakers" onChange={ (newtext) =>  {
        setAttributes({ contentZGN: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentNRc} default="Boots" onChange={ (newtext) =>  {
        setAttributes({ contentNRc: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentopB} default="Flats" onChange={ (newtext) =>  {
        setAttributes({ contentopB: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentYOj} default="Sandals" onChange={ (newtext) =>  {
        setAttributes({ contentYOj: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentOCD} default="Heels" onChange={ (newtext) =>  {
        setAttributes({ contentOCD: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentAEe} default="Socks" onChange={ (newtext) =>  {
        setAttributes({ contentAEe: newtext });
      }}
    /></span>

                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p id="women-collection-heading-mobile" className="font-medium text-gray-900">
                                        <RichText tagName="span" value={attributes.contentlBh} default="Shop Collection" onChange={ (newtext) => { setAttributes({ contentlBh: newtext }); }} /></p>
                                    <ul role="list" aria-labelledby="women-collection-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentRBp} default="Everything" onChange={ (newtext) =>  {
        setAttributes({ contentRBp: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentwKn} default="Core" onChange={ (newtext) =>  {
        setAttributes({ contentwKn: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentnZA} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentnZA: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentujO} default="Sale" onChange={ (newtext) =>  {
        setAttributes({ contentujO: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentodC} default="Accessories" onChange={ (newtext) =>  {
        setAttributes({ contentodC: newtext });
      }}
    /></span>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-10">
                                <div>
                                    <p id="women-clothing-heading-mobile" className="font-medium text-gray-900">
                                        <RichText tagName="span" value={attributes.contentNoJ} default="All Clothing" onChange={ (newtext) => { setAttributes({ contentNoJ: newtext }); }} /></p>
                                    <ul role="list" aria-labelledby="women-clothing-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentCzs} default="Basic Tees" onChange={ (newtext) =>  {
        setAttributes({ contentCzs: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contenthIo} default="Artwork Tees" onChange={ (newtext) =>  {
        setAttributes({ contenthIo: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentHPm} default="Tops" onChange={ (newtext) =>  {
        setAttributes({ contentHPm: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentcpe} default="Bottoms" onChange={ (newtext) =>  {
        setAttributes({ contentcpe: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentgeK} default="Swimwear" onChange={ (newtext) =>  {
        setAttributes({ contentgeK: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contenttjM} default="Underwear" onChange={ (newtext) =>  {
        setAttributes({ contenttjM: newtext });
      }}
    /></span>

                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p id="women-accessories-heading-mobile" className="font-medium text-gray-900">
                                        <RichText tagName="span" value={attributes.contentYvv} default="All Accessories" onChange={ (newtext) => { setAttributes({ contentYvv: newtext }); }} /></p>
                                    <ul role="list" aria-labelledby="women-accessories-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentRfR} default="Watches" onChange={ (newtext) =>  {
        setAttributes({ contentRfR: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentKiU} default="Wallets" onChange={ (newtext) =>  {
        setAttributes({ contentKiU: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentZzV} default="Bags" onChange={ (newtext) =>  {
        setAttributes({ contentZzV: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentZeu} default="Sunglasses" onChange={ (newtext) =>  {
        setAttributes({ contentZeu: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentbds} default="Hats" onChange={ (newtext) =>  {
        setAttributes({ contentbds: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentRCC} default="Belts" onChange={ (newtext) =>  {
        setAttributes({ contentRCC: newtext });
      }}
    /></span>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-10">
                                <div>
                                    <p id="women-brands-heading-mobile" className="font-medium text-gray-900">
                                        <RichText tagName="span" value={attributes.contentxQw} default="Brands" onChange={ (newtext) => { setAttributes({ contentxQw: newtext }); }} /></p>
                                    <ul role="list" aria-labelledby="women-brands-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentBIR} default="Full Nelson" onChange={ (newtext) =>  {
        setAttributes({ contentBIR: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentByv} default="My Way" onChange={ (newtext) =>  {
        setAttributes({ contentByv: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentfZW} default="Re-Arranged" onChange={ (newtext) =>  {
        setAttributes({ contentfZW: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentQvP} default="Counterfeit" onChange={ (newtext) =>  {
        setAttributes({ contentQvP: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentyqW} default="Significant Other" onChange={ (newtext) =>  {
        setAttributes({ contentyqW: newtext });
      }}
    /></span>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="tabs-1-panel-2" className="pt-10 pb-8 px-4 space-y-10" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
                            <div className="space-y-4">
                                <div className="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlxDz: media.url,
            imagealtkNO: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlxDz } 
            alt={ attributes.imagealtkNO } 
            onClick={ open } 
            className="object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
                                    <div className="flex flex-col justify-end">
                                        <div className="p-4 bg-white bg-opacity-60 text-base sm:text-sm"> <span className="font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentbOJ} default="Accessories" onChange={ (newtext) =>  {
        setAttributes({ contentbOJ: newtext });
      }}
    /></span>

                                            <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                                <RichText tagName="span" value={attributes.contentJbX} default="Shop now" onChange={ (newtext) => { setAttributes({ contentJbX: newtext }); }} /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlApS: media.url,
            imagealtvmI: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlApS } 
            alt={ attributes.imagealtvmI } 
            onClick={ open } 
            className="object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
                                    <div className="flex flex-col justify-end">
                                        <div className="p-4 bg-white bg-opacity-60 text-base sm:text-sm"> <span className="font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentjuS} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentjuS: newtext });
      }}
    /></span>

                                            <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                                <RichText tagName="span" value={attributes.contentKMC} default="Shop now" onChange={ (newtext) => { setAttributes({ contentKMC: newtext }); }} /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlCnU: media.url,
            imagealtHRA: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlCnU } 
            alt={ attributes.imagealtHRA } 
            onClick={ open } 
            className="object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
                                    <div className="flex flex-col justify-end">
                                        <div className="p-4 bg-white bg-opacity-60 text-base sm:text-sm"> <span className="font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentJLt} default="Artwork Tees" onChange={ (newtext) =>  {
        setAttributes({ contentJLt: newtext });
      }}
    /></span>

                                            <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                                <RichText tagName="span" value={attributes.contentyCD} default="Shop now" onChange={ (newtext) => { setAttributes({ contentyCD: newtext }); }} /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-10">
                                <div>
                                    <p id="men-shoes-heading-mobile" className="font-medium text-gray-900">
                                        <RichText tagName="span" value={attributes.contentjaw} default="Shoes &amp; Accessories" onChange={ (newtext) => { setAttributes({ contentjaw: newtext }); }} /></p>
                                    <ul role="list" aria-labelledby="men-shoes-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentnZU} default="Sneakers" onChange={ (newtext) =>  {
        setAttributes({ contentnZU: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentFgP} default="Boots" onChange={ (newtext) =>  {
        setAttributes({ contentFgP: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentrjF} default="Sandals" onChange={ (newtext) =>  {
        setAttributes({ contentrjF: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentZCO} default="Socks" onChange={ (newtext) =>  {
        setAttributes({ contentZCO: newtext });
      }}
    /></span>

                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p id="men-collection-heading-mobile" className="font-medium text-gray-900">
                                        <RichText tagName="span" value={attributes.contentvrF} default="Shop Collection" onChange={ (newtext) => { setAttributes({ contentvrF: newtext }); }} /></p>
                                    <ul role="list" aria-labelledby="men-collection-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentBSV} default="Everything" onChange={ (newtext) =>  {
        setAttributes({ contentBSV: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentByw} default="Core" onChange={ (newtext) =>  {
        setAttributes({ contentByw: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentDkj} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentDkj: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentpup} default="Sale" onChange={ (newtext) =>  {
        setAttributes({ contentpup: newtext });
      }}
    /></span>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-10">
                                <div>
                                    <p id="men-clothing-heading-mobile" className="font-medium text-gray-900">
                                        <RichText tagName="span" value={attributes.contentBmE} default="All Clothing" onChange={ (newtext) => { setAttributes({ contentBmE: newtext }); }} /></p>
                                    <ul role="list" aria-labelledby="men-clothing-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentpNt} default="Basic Tees" onChange={ (newtext) =>  {
        setAttributes({ contentpNt: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentYef} default="Artwork Tees" onChange={ (newtext) =>  {
        setAttributes({ contentYef: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentvNV} default="Pants" onChange={ (newtext) =>  {
        setAttributes({ contentvNV: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentCWa} default="Hoodies" onChange={ (newtext) =>  {
        setAttributes({ contentCWa: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentAmz} default="Swimsuits" onChange={ (newtext) =>  {
        setAttributes({ contentAmz: newtext });
      }}
    /></span>

                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p id="men-accessories-heading-mobile" className="font-medium text-gray-900">
                                        <RichText tagName="span" value={attributes.contentBke} default="All Accessories" onChange={ (newtext) => { setAttributes({ contentBke: newtext }); }} /></p>
                                    <ul role="list" aria-labelledby="men-accessories-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentFnn} default="Watches" onChange={ (newtext) =>  {
        setAttributes({ contentFnn: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentuMv} default="Wallets" onChange={ (newtext) =>  {
        setAttributes({ contentuMv: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentCKP} default="Bags" onChange={ (newtext) =>  {
        setAttributes({ contentCKP: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentagH} default="Sunglasses" onChange={ (newtext) =>  {
        setAttributes({ contentagH: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentASx} default="Hats" onChange={ (newtext) =>  {
        setAttributes({ contentASx: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentTVG} default="Belts" onChange={ (newtext) =>  {
        setAttributes({ contentTVG: newtext });
      }}
    /></span>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-10">
                                <div>
                                    <p id="men-brands-heading-mobile" className="font-medium text-gray-900">
                                        <RichText tagName="span" value={attributes.contentoDt} default="Brands" onChange={ (newtext) => { setAttributes({ contentoDt: newtext }); }} /></p>
                                    <ul role="list" aria-labelledby="men-brands-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentOYs} default="Re-Arranged" onChange={ (newtext) =>  {
        setAttributes({ contentOYs: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentPzF} default="Counterfeit" onChange={ (newtext) =>  {
        setAttributes({ contentPzF: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentpdy} default="Full Nelson" onChange={ (newtext) =>  {
        setAttributes({ contentpdy: newtext });
      }}
    /></span>

                                        </li>
                                        <li className="flow-root"> <span className="-m-2 p-2 block text-gray-500"><RichText tagName="span" value={attributes.contentGyh} default="My Way" onChange={ (newtext) =>  {
        setAttributes({ contentGyh: newtext });
      }}
    /></span>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                        <div className="flow-root"> <span className="-m-2 p-2 block font-medium text-gray-900"><RichText tagName="span" value={attributes.contentoQU} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentoQU: newtext });
      }}
    /></span>

                        </div>
                        <div className="flow-root"> <span className="-m-2 p-2 block font-medium text-gray-900"><RichText tagName="span" value={attributes.contenthBp} default="Stores" onChange={ (newtext) =>  {
        setAttributes({ contenthBp: newtext });
      }}
    /></span>

                        </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4"> <span className="-m-2 p-2 flex items-center">
          
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlaNR: media.url,
            imagealtzWx: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlaNR } 
            alt={ attributes.imagealtzWx } 
            onClick={ open } 
            className="w-5 h-auto block flex-shrink-0"
          /> 
        )} 
      />
          <span className="ml-3 block text-base font-medium text-gray-900"><RichText tagName="span" value={attributes.contentYpm} default="CAD" onChange={ (newtext) =>  {
        setAttributes({ contentYpm: newtext });
      }}
    /></span>
 <span className="sr-only"><RichText tagName="span" value={attributes.contentmTQ} default=", change currency" onChange={ (newtext) =>  {
        setAttributes({ contentmTQ: newtext });
      }}
    /></span>
</span>
                    </div>
                </div>
            </div>
            <header className="relative bg-white">
                <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="h-16 flex items-center justify-between">
                            <div className="flex-1 flex items-center lg:hidden">
                                <button type="button" className="-ml-2 bg-white p-2 rounded-md text-gray-400"> <span className="sr-only"><RichText tagName="span" value={attributes.contentpOc} default="Open menu" onChange={ (newtext) =>  {
        setAttributes({ contentpOc: newtext });
      }}
    /></span>

                                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglxU }}
        >
      </svg>
      
                                </button> <span className="ml-2 p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only"><RichText tagName="span" value={attributes.contentkvY} default="Search" onChange={ (newtext) =>  {
        setAttributes({ contentkvY: newtext });
      }}
    /></span>

                                
      <svg
         className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgklf }}
        >
      </svg>
      
                                </span>
                            </div>
                            <div className="hidden lg:flex-1 lg:block lg:self-stretch">
                                <div className="h-full flex space-x-8">
                                    <div className="flex">
                                        <div className="relative flex">
                                            <button type="button" className="text-gray-700 hover:text-gray-800 relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium" aria-expanded="false">
                                                <RichText tagName="span" value={attributes.contentpre} default="Women" onChange={ (newtext) => { setAttributes({ contentpre: newtext }); }} /><span className="absolute bottom-0 inset-x-0 h-0.5 transition-colors ease-out duration-200 sm:mt-5 sm:transform sm:translate-y-px" aria-hidden="true"/>

                                            </button>
                                        </div>
                                        <div className="absolute top-full inset-x-0">
                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                                            <div className="relative bg-white">
                                                <div className="max-w-7xl mx-auto px-8">
                                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                        <div className="grid grid-rows-1 grid-cols-2 gap-8 text-sm">
                                                            <div className="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden col-span-2 aspect-w-2">
                                                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlYKk: media.url,
            imagealtQPh: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlYKk } 
            alt={ attributes.imagealtQPh } 
            onClick={ open } 
            className="object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
                                                                <div className="flex flex-col justify-end">
                                                                    <div className="p-4 bg-white bg-opacity-60 text-sm"> <span className="font-medium text-gray-900">
                                  <span className="absolute inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentxeM} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentxeM: newtext });
      }}
    /></span>

                                                                        <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                                                            <RichText tagName="span" value={attributes.contentcqq} default="Shop now" onChange={ (newtext) => { setAttributes({ contentcqq: newtext }); }} /></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlEbW: media.url,
            imagealtvyZ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlEbW } 
            alt={ attributes.imagealtvyZ } 
            onClick={ open } 
            className="relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white"
          /> 
        )} 
      />
                                                                <div className="flex flex-col justify-end">
                                                                    <div className="p-4 bg-white bg-opacity-60 text-sm"> <span className="font-medium text-gray-900">
                                  <span className="absolute inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentCGA} default="Basic Tees" onChange={ (newtext) =>  {
        setAttributes({ contentCGA: newtext });
      }}
    /></span>

                                                                        <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                                                            <RichText tagName="span" value={attributes.contentAIA} default="Shop now" onChange={ (newtext) => { setAttributes({ contentAIA: newtext }); }} /></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurljmL: media.url,
            imagealtdjE: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurljmL } 
            alt={ attributes.imagealtdjE } 
            onClick={ open } 
            className="object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
                                                                <div className="flex flex-col justify-end">
                                                                    <div className="p-4 bg-white bg-opacity-60 text-sm"> <span className="font-medium text-gray-900">
                                  <span className="absolute inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentqMC} default="Accessories" onChange={ (newtext) =>  {
        setAttributes({ contentqMC: newtext });
      }}
    /></span>

                                                                        <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                                                            <RichText tagName="span" value={attributes.contentHNL} default="Shop now" onChange={ (newtext) => { setAttributes({ contentHNL: newtext }); }} /></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-3 gap-y-10 gap-x-8 text-sm text-gray-500">
                                                            <div className="space-y-10">
                                                                <div>
                                                                    <p id="women-shoes-heading" className="font-medium text-gray-900">
                                                                        <RichText tagName="span" value={attributes.contentXZm} default="Shoes &amp; Accessories" onChange={ (newtext) => { setAttributes({ contentXZm: newtext }); }} /></p>
                                                                    <ul role="list" aria-labelledby="women-shoes-heading" className="mt-4 space-y-4">
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentHRK} default="Sneakers" onChange={ (newtext) =>  {
        setAttributes({ contentHRK: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentFJA} default="Boots" onChange={ (newtext) =>  {
        setAttributes({ contentFJA: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentXPJ} default="Flats" onChange={ (newtext) =>  {
        setAttributes({ contentXPJ: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentOGy} default="Sandals" onChange={ (newtext) =>  {
        setAttributes({ contentOGy: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentnMa} default="Heels" onChange={ (newtext) =>  {
        setAttributes({ contentnMa: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentDeC} default="Socks" onChange={ (newtext) =>  {
        setAttributes({ contentDeC: newtext });
      }}
    /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div>
                                                                    <p id="women-collection-heading" className="font-medium text-gray-900">
                                                                        <RichText tagName="span" value={attributes.contenttcN} default="Shop Collection" onChange={ (newtext) => { setAttributes({ contenttcN: newtext }); }} /></p>
                                                                    <ul role="list" aria-labelledby="women-collection-heading" className="mt-4 space-y-4">
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentyfv} default="Everything" onChange={ (newtext) =>  {
        setAttributes({ contentyfv: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentdGe} default="Core" onChange={ (newtext) =>  {
        setAttributes({ contentdGe: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentlgk} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentlgk: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentOsf} default="Sale" onChange={ (newtext) =>  {
        setAttributes({ contentOsf: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentNTa} default="Accessories" onChange={ (newtext) =>  {
        setAttributes({ contentNTa: newtext });
      }}
    /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="space-y-10">
                                                                <div>
                                                                    <p id="women-clothing-heading" className="font-medium text-gray-900">
                                                                        <RichText tagName="span" value={attributes.contentPCj} default="All Clothing" onChange={ (newtext) => { setAttributes({ contentPCj: newtext }); }} /></p>
                                                                    <ul role="list" aria-labelledby="women-clothing-heading" className="mt-4 space-y-4">
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentgQs} default="Basic Tees" onChange={ (newtext) =>  {
        setAttributes({ contentgQs: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentrQS} default="Artwork Tees" onChange={ (newtext) =>  {
        setAttributes({ contentrQS: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentyeg} default="Tops" onChange={ (newtext) =>  {
        setAttributes({ contentyeg: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentmiA} default="Bottoms" onChange={ (newtext) =>  {
        setAttributes({ contentmiA: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentyMk} default="Swimwear" onChange={ (newtext) =>  {
        setAttributes({ contentyMk: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentVpF} default="Underwear" onChange={ (newtext) =>  {
        setAttributes({ contentVpF: newtext });
      }}
    /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div>
                                                                    <p id="women-accessories-heading" className="font-medium text-gray-900">
                                                                        <RichText tagName="span" value={attributes.contentMms} default="All Accessories" onChange={ (newtext) => { setAttributes({ contentMms: newtext }); }} /></p>
                                                                    <ul role="list" aria-labelledby="women-accessories-heading" className="mt-4 space-y-4">
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentzvw} default="Watches" onChange={ (newtext) =>  {
        setAttributes({ contentzvw: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentFTU} default="Wallets" onChange={ (newtext) =>  {
        setAttributes({ contentFTU: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentOpT} default="Bags" onChange={ (newtext) =>  {
        setAttributes({ contentOpT: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentlvr} default="Sunglasses" onChange={ (newtext) =>  {
        setAttributes({ contentlvr: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentQYl} default="Hats" onChange={ (newtext) =>  {
        setAttributes({ contentQYl: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentRLO} default="Belts" onChange={ (newtext) =>  {
        setAttributes({ contentRLO: newtext });
      }}
    /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="space-y-10">
                                                                <div>
                                                                    <p id="women-brands-heading" className="font-medium text-gray-900">
                                                                        <RichText tagName="span" value={attributes.contentERs} default="Brands" onChange={ (newtext) => { setAttributes({ contentERs: newtext }); }} /></p>
                                                                    <ul role="list" aria-labelledby="women-brands-heading" className="mt-4 space-y-4">
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentcXB} default="Full Nelson" onChange={ (newtext) =>  {
        setAttributes({ contentcXB: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentQZV} default="My Way" onChange={ (newtext) =>  {
        setAttributes({ contentQZV: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentLMG} default="Re-Arranged" onChange={ (newtext) =>  {
        setAttributes({ contentLMG: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentTNt} default="Counterfeit" onChange={ (newtext) =>  {
        setAttributes({ contentTNt: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentgtJ} default="Significant Other" onChange={ (newtext) =>  {
        setAttributes({ contentgtJ: newtext });
      }}
    /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="relative flex">
                                            <button type="button" className="text-gray-700 hover:text-gray-800 relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium" aria-expanded="false">
                                                <RichText tagName="span" value={attributes.contenttnT} default="Men" onChange={ (newtext) => { setAttributes({ contenttnT: newtext }); }} /><span className="absolute bottom-0 inset-x-0 h-0.5 transition-colors ease-out duration-200 sm:mt-5 sm:transform sm:translate-y-px" aria-hidden="true"/>

                                            </button>
                                        </div>
                                        <div className="absolute top-full inset-x-0">
                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                                            <div className="relative bg-white">
                                                <div className="max-w-7xl mx-auto px-8">
                                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                        <div className="grid grid-rows-1 grid-cols-2 gap-8 text-sm">
                                                            <div className="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden col-span-2 aspect-w-2">
                                                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlujp: media.url,
            imagealtOiU: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlujp } 
            alt={ attributes.imagealtOiU } 
            onClick={ open } 
            className="object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
                                                                <div className="flex flex-col justify-end">
                                                                    <div className="p-4 bg-white bg-opacity-60 text-sm"> <span className="font-medium text-gray-900">
                                  <span className="absolute inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentyxr} default="Accessories" onChange={ (newtext) =>  {
        setAttributes({ contentyxr: newtext });
      }}
    /></span>

                                                                        <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                                                            <RichText tagName="span" value={attributes.contentCdf} default="Shop now" onChange={ (newtext) => { setAttributes({ contentCdf: newtext }); }} /></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlrGy: media.url,
            imagealtIDb: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlrGy } 
            alt={ attributes.imagealtIDb } 
            onClick={ open } 
            className="object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
                                                                <div className="flex flex-col justify-end">
                                                                    <div className="p-4 bg-white bg-opacity-60 text-sm"> <span className="font-medium text-gray-900">
                                  <span className="absolute inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contentrRg} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentrRg: newtext });
      }}
    /></span>

                                                                        <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                                                            <RichText tagName="span" value={attributes.contentXFj} default="Shop now" onChange={ (newtext) => { setAttributes({ contentXFj: newtext }); }} /></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlkbd: media.url,
            imagealtgoo: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlkbd } 
            alt={ attributes.imagealtgoo } 
            onClick={ open } 
            className="object-center object-cover group-hover:opacity-75"
          /> 
        )} 
      />
                                                                <div className="flex flex-col justify-end">
                                                                    <div className="p-4 bg-white bg-opacity-60 text-sm"> <span className="font-medium text-gray-900">
                                  <span className="absolute inset-0" aria-hidden="true"/><RichText tagName="span" value={attributes.contenthkf} default="Artwork Tees" onChange={ (newtext) =>  {
        setAttributes({ contenthkf: newtext });
      }}
    /></span>

                                                                        <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                                                            <RichText tagName="span" value={attributes.contentVsY} default="Shop now" onChange={ (newtext) => { setAttributes({ contentVsY: newtext }); }} /></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-3 gap-y-10 gap-x-8 text-sm text-gray-500">
                                                            <div className="space-y-10">
                                                                <div>
                                                                    <p id="men-shoes-heading" className="font-medium text-gray-900">
                                                                        <RichText tagName="span" value={attributes.contentZgB} default="Shoes &amp; Accessories" onChange={ (newtext) => { setAttributes({ contentZgB: newtext }); }} /></p>
                                                                    <ul role="list" aria-labelledby="men-shoes-heading" className="mt-4 space-y-4">
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentnYZ} default="Sneakers" onChange={ (newtext) =>  {
        setAttributes({ contentnYZ: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentziF} default="Boots" onChange={ (newtext) =>  {
        setAttributes({ contentziF: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentHNE} default="Sandals" onChange={ (newtext) =>  {
        setAttributes({ contentHNE: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentftD} default="Socks" onChange={ (newtext) =>  {
        setAttributes({ contentftD: newtext });
      }}
    /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div>
                                                                    <p id="men-collection-heading" className="font-medium text-gray-900">
                                                                        <RichText tagName="span" value={attributes.contentiyD} default="Shop Collection" onChange={ (newtext) => { setAttributes({ contentiyD: newtext }); }} /></p>
                                                                    <ul role="list" aria-labelledby="men-collection-heading" className="mt-4 space-y-4">
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentQtd} default="Everything" onChange={ (newtext) =>  {
        setAttributes({ contentQtd: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentrQs} default="Core" onChange={ (newtext) =>  {
        setAttributes({ contentrQs: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentFkg} default="New Arrivals" onChange={ (newtext) =>  {
        setAttributes({ contentFkg: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentBCf} default="Sale" onChange={ (newtext) =>  {
        setAttributes({ contentBCf: newtext });
      }}
    /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="space-y-10">
                                                                <div>
                                                                    <p id="men-clothing-heading" className="font-medium text-gray-900">
                                                                        <RichText tagName="span" value={attributes.contentuav} default="All Clothing" onChange={ (newtext) => { setAttributes({ contentuav: newtext }); }} /></p>
                                                                    <ul role="list" aria-labelledby="men-clothing-heading" className="mt-4 space-y-4">
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentKJS} default="Basic Tees" onChange={ (newtext) =>  {
        setAttributes({ contentKJS: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentsEC} default="Artwork Tees" onChange={ (newtext) =>  {
        setAttributes({ contentsEC: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentPnM} default="Pants" onChange={ (newtext) =>  {
        setAttributes({ contentPnM: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentMXz} default="Hoodies" onChange={ (newtext) =>  {
        setAttributes({ contentMXz: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentzMj} default="Swimsuits" onChange={ (newtext) =>  {
        setAttributes({ contentzMj: newtext });
      }}
    /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div>
                                                                    <p id="men-accessories-heading" className="font-medium text-gray-900">
                                                                        <RichText tagName="span" value={attributes.contentfEg} default="All Accessories" onChange={ (newtext) => { setAttributes({ contentfEg: newtext }); }} /></p>
                                                                    <ul role="list" aria-labelledby="men-accessories-heading" className="mt-4 space-y-4">
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentqFt} default="Watches" onChange={ (newtext) =>  {
        setAttributes({ contentqFt: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentyMW} default="Wallets" onChange={ (newtext) =>  {
        setAttributes({ contentyMW: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentTnJ} default="Bags" onChange={ (newtext) =>  {
        setAttributes({ contentTnJ: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentYgB} default="Sunglasses" onChange={ (newtext) =>  {
        setAttributes({ contentYgB: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contenttox} default="Hats" onChange={ (newtext) =>  {
        setAttributes({ contenttox: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentyoq} default="Belts" onChange={ (newtext) =>  {
        setAttributes({ contentyoq: newtext });
      }}
    /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="space-y-10">
                                                                <div>
                                                                    <p id="men-brands-heading" className="font-medium text-gray-900">
                                                                        <RichText tagName="span" value={attributes.contentCyK} default="Brands" onChange={ (newtext) => { setAttributes({ contentCyK: newtext }); }} /></p>
                                                                    <ul role="list" aria-labelledby="men-brands-heading" className="mt-4 space-y-4">
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentvkR} default="Re-Arranged" onChange={ (newtext) =>  {
        setAttributes({ contentvkR: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentZUk} default="Counterfeit" onChange={ (newtext) =>  {
        setAttributes({ contentZUk: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentHef} default="Full Nelson" onChange={ (newtext) =>  {
        setAttributes({ contentHef: newtext });
      }}
    /></span>

                                                                        </li>
                                                                        <li className="flex"> <span className="hover:text-gray-800"><RichText tagName="span" value={attributes.contentjmX} default="My Way" onChange={ (newtext) =>  {
        setAttributes({ contentjmX: newtext });
      }}
    /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> <span className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><RichText tagName="span" value={attributes.contentPOc} default="Company" onChange={ (newtext) =>  {
        setAttributes({ contentPOc: newtext });
      }}
    /></span>
 <span className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><RichText tagName="span" value={attributes.contentzaN} default="Stores" onChange={ (newtext) =>  {
        setAttributes({ contentzaN: newtext });
      }}
    /></span>

                                </div>
                            </div> <span className="flex">
            <span className="sr-only"><RichText tagName="span" value={attributes.contentbPS} default="Workflow" onChange={ (newtext) =>  {
        setAttributes({ contentbPS: newtext });
      }}
    /></span>

                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlldQ: media.url,
            imagealtNGf: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlldQ } 
            alt={ attributes.imagealtNGf } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                            </span>
                            <div className="flex-1 flex items-center justify-end"> <span className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center">
              
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlNPK: media.url,
            imagealtmkO: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlNPK } 
            alt={ attributes.imagealtmkO } 
            onClick={ open } 
            className="w-5 h-auto block flex-shrink-0"
          /> 
        )} 
      />
              <span className="ml-3 block text-sm font-medium"><RichText tagName="span" value={attributes.contentzIb} default="CAD" onChange={ (newtext) =>  {
        setAttributes({ contentzIb: newtext });
      }}
    /></span>
 <span className="sr-only"><RichText tagName="span" value={attributes.contentVoP} default=", change currency" onChange={ (newtext) =>  {
        setAttributes({ contentVoP: newtext });
      }}
    /></span>
</span> <span className="hidden ml-6 p-2 text-gray-400 hover:text-gray-500 lg:block">
              <span className="sr-only"><RichText tagName="span" value={attributes.contentDzC} default="Search" onChange={ (newtext) =>  {
        setAttributes({ contentDzC: newtext });
      }}
    /></span>

                                
      <svg
         className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyUR }}
        >
      </svg>
      
                                </span> <span className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
              <span className="sr-only"><RichText tagName="span" value={attributes.contentBRD} default="Account" onChange={ (newtext) =>  {
        setAttributes({ contentBRD: newtext });
      }}
    /></span>

                                
      <svg
         className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKMM }}
        >
      </svg>
      
                                </span>
                                <div className="ml-4 flow-root lg:ml-6"> <span className="group -m-2 p-2 flex items-center">
                
                
      <svg
         className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBHE }}
        >
      </svg>
      
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"><RichText tagName="span" value={attributes.contentvOz} default="0" onChange={ (newtext) =>  {
        setAttributes({ contentvOz: newtext });
      }}
    /></span>
 <span className="sr-only"><RichText tagName="span" value={attributes.contentQtF} default="items in cart, view bag" onChange={ (newtext) =>  {
        setAttributes({ contentQtF: newtext });
      }}
    /></span>
</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
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
        <div class="bg-white">
            <div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"/>
                <div class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                    <div class="px-4 pt-5 pb-2 flex">
                        <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"> <span class="sr-only"><RichText.Content value={attributes.contentvQO} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPSw }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="mt-2">
                        <div class="border-b border-gray-200">
                            <div class="-mb-px flex px-4 space-x-8" aria-orientation="horizontal" role="tablist">
                                <button id="tabs-1-tab-1" class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">
                                    <RichText.Content value={attributes.contentGNI} /></button>
                                <button id="tabs-1-tab-2" class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">
                                    <RichText.Content value={attributes.contentEHW} /></button>
                            </div>
                        </div>
                        <div id="tabs-1-panel-1" class="pt-10 pb-8 px-4 space-y-10" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                            <div class="space-y-4">
                                <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                    
      <img
            src={ attributes.imageurloCg } 
            alt={ attributes.imagealtqSq } 
            class="object-center object-cover group-hover:opacity-75"
          />
                                    <div class="flex flex-col justify-end">
                                        <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm"> <span class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"/><RichText.Content value={attributes.contenthoe} /></span>

                                            <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">
                                                <RichText.Content value={attributes.contentoIq} /></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                    
      <img
            src={ attributes.imageurljAG } 
            alt={ attributes.imagealtxpJ } 
            class="h-12 w-12 rounded-full"
          />
                                    <div class="flex flex-col justify-end">
                                        <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm"> <span class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentcpX} /></span>

                                            <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">
                                                <RichText.Content value={attributes.contentIFw} /></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                    
      <img
            src={ attributes.imageurlBXu } 
            alt={ attributes.imagealtYUL } 
            class="object-center object-cover group-hover:opacity-75"
          />
                                    <div class="flex flex-col justify-end">
                                        <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm"> <span class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentyuy} /></span>

                                            <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">
                                                <RichText.Content value={attributes.contentpkp} /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-10">
                                <div>
                                    <p id="women-shoes-heading-mobile" class="font-medium text-gray-900">
                                        <RichText.Content value={attributes.contentGKt} /></p>
                                    <ul role="list" aria-labelledby="women-shoes-heading-mobile" class="mt-6 flex flex-col space-y-6">
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentZGN} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentNRc} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentopB} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentYOj} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentOCD} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentAEe} /></span>

                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p id="women-collection-heading-mobile" class="font-medium text-gray-900">
                                        <RichText.Content value={attributes.contentlBh} /></p>
                                    <ul role="list" aria-labelledby="women-collection-heading-mobile" class="mt-6 flex flex-col space-y-6">
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentRBp} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentwKn} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentnZA} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentujO} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentodC} /></span>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="space-y-10">
                                <div>
                                    <p id="women-clothing-heading-mobile" class="font-medium text-gray-900">
                                        <RichText.Content value={attributes.contentNoJ} /></p>
                                    <ul role="list" aria-labelledby="women-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentCzs} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contenthIo} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentHPm} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentcpe} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentgeK} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contenttjM} /></span>

                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p id="women-accessories-heading-mobile" class="font-medium text-gray-900">
                                        <RichText.Content value={attributes.contentYvv} /></p>
                                    <ul role="list" aria-labelledby="women-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentRfR} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentKiU} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentZzV} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentZeu} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentbds} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentRCC} /></span>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="space-y-10">
                                <div>
                                    <p id="women-brands-heading-mobile" class="font-medium text-gray-900">
                                        <RichText.Content value={attributes.contentxQw} /></p>
                                    <ul role="list" aria-labelledby="women-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentBIR} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentByv} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentfZW} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentQvP} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentyqW} /></span>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="tabs-1-panel-2" class="pt-10 pb-8 px-4 space-y-10" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
                            <div class="space-y-4">
                                <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                    
      <img
            src={ attributes.imageurlxDz } 
            alt={ attributes.imagealtkNO } 
            class="object-center object-cover group-hover:opacity-75"
          />
                                    <div class="flex flex-col justify-end">
                                        <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm"> <span class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentbOJ} /></span>

                                            <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">
                                                <RichText.Content value={attributes.contentJbX} /></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                    
      <img
            src={ attributes.imageurlApS } 
            alt={ attributes.imagealtvmI } 
            class="object-center object-cover group-hover:opacity-75"
          />
                                    <div class="flex flex-col justify-end">
                                        <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm"> <span class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentjuS} /></span>

                                            <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">
                                                <RichText.Content value={attributes.contentKMC} /></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                    
      <img
            src={ attributes.imageurlCnU } 
            alt={ attributes.imagealtHRA } 
            class="object-center object-cover group-hover:opacity-75"
          />
                                    <div class="flex flex-col justify-end">
                                        <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm"> <span class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentJLt} /></span>

                                            <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">
                                                <RichText.Content value={attributes.contentyCD} /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-10">
                                <div>
                                    <p id="men-shoes-heading-mobile" class="font-medium text-gray-900">
                                        <RichText.Content value={attributes.contentjaw} /></p>
                                    <ul role="list" aria-labelledby="men-shoes-heading-mobile" class="mt-6 flex flex-col space-y-6">
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentnZU} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentFgP} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentrjF} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentZCO} /></span>

                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p id="men-collection-heading-mobile" class="font-medium text-gray-900">
                                        <RichText.Content value={attributes.contentvrF} /></p>
                                    <ul role="list" aria-labelledby="men-collection-heading-mobile" class="mt-6 flex flex-col space-y-6">
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentBSV} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentByw} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentDkj} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentpup} /></span>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="space-y-10">
                                <div>
                                    <p id="men-clothing-heading-mobile" class="font-medium text-gray-900">
                                        <RichText.Content value={attributes.contentBmE} /></p>
                                    <ul role="list" aria-labelledby="men-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentpNt} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentYef} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentvNV} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentCWa} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentAmz} /></span>

                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p id="men-accessories-heading-mobile" class="font-medium text-gray-900">
                                        <RichText.Content value={attributes.contentBke} /></p>
                                    <ul role="list" aria-labelledby="men-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentFnn} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentuMv} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentCKP} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentagH} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentASx} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentTVG} /></span>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="space-y-10">
                                <div>
                                    <p id="men-brands-heading-mobile" class="font-medium text-gray-900">
                                        <RichText.Content value={attributes.contentoDt} /></p>
                                    <ul role="list" aria-labelledby="men-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentOYs} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentPzF} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentpdy} /></span>

                                        </li>
                                        <li class="flow-root"> <span class="-m-2 p-2 block text-gray-500"><RichText.Content value={attributes.contentGyh} /></span>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-gray-200 py-6 px-4 space-y-6">
                        <div class="flow-root"> <span class="-m-2 p-2 block font-medium text-gray-900"><RichText.Content value={attributes.contentoQU} /></span>

                        </div>
                        <div class="flow-root"> <span class="-m-2 p-2 block font-medium text-gray-900"><RichText.Content value={attributes.contenthBp} /></span>

                        </div>
                    </div>
                    <div class="border-t border-gray-200 py-6 px-4"> <span class="-m-2 p-2 flex items-center">
          
      <img
            src={ attributes.imageurlaNR } 
            alt={ attributes.imagealtzWx } 
            class="w-5 h-auto block flex-shrink-0"
          />
          <span class="ml-3 block text-base font-medium text-gray-900"><RichText.Content value={attributes.contentYpm} /></span>
 <span class="sr-only"><RichText.Content value={attributes.contentmTQ} /></span>
</span>
                    </div>
                </div>
            </div>
            <header class="relative bg-white">
                <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="border-b border-gray-200">
                        <div class="h-16 flex items-center justify-between">
                            <div class="flex-1 flex items-center lg:hidden">
                                <button type="button" class="-ml-2 bg-white p-2 rounded-md text-gray-400"> <span class="sr-only"><RichText.Content value={attributes.contentpOc} /></span>

                                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglxU }}
        >
      </svg>
      
                                </button> <span class="ml-2 p-2 text-gray-400 hover:text-gray-500">
              <span class="sr-only"><RichText.Content value={attributes.contentkvY} /></span>

                                
      <svg
         class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgklf }}
        >
      </svg>
      
                                </span>
                            </div>
                            <div class="hidden lg:flex-1 lg:block lg:self-stretch">
                                <div class="h-full flex space-x-8">
                                    <div class="flex">
                                        <div class="relative flex">
                                            <button type="button" class="text-gray-700 hover:text-gray-800 relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium" aria-expanded="false">
                                                <RichText.Content value={attributes.contentpre} /><span class="absolute bottom-0 inset-x-0 h-0.5 transition-colors ease-out duration-200 sm:mt-5 sm:transform sm:translate-y-px" aria-hidden="true"/>

                                            </button>
                                        </div>
                                        <div class="absolute top-full inset-x-0">
                                            <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                                            <div class="relative bg-white">
                                                <div class="max-w-7xl mx-auto px-8">
                                                    <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                        <div class="grid grid-rows-1 grid-cols-2 gap-8 text-sm">
                                                            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden col-span-2 aspect-w-2">
                                                                
      <img
            src={ attributes.imageurlYKk } 
            alt={ attributes.imagealtQPh } 
            class="object-center object-cover group-hover:opacity-75"
          />
                                                                <div class="flex flex-col justify-end">
                                                                    <div class="p-4 bg-white bg-opacity-60 text-sm"> <span class="font-medium text-gray-900">
                                  <span class="absolute inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentxeM} /></span>

                                                                        <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">
                                                                            <RichText.Content value={attributes.contentcqq} /></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                                                
      <img
            src={ attributes.imageurlEbW } 
            alt={ attributes.imagealtvyZ } 
            class="relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white"
          />
                                                                <div class="flex flex-col justify-end">
                                                                    <div class="p-4 bg-white bg-opacity-60 text-sm"> <span class="font-medium text-gray-900">
                                  <span class="absolute inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentCGA} /></span>

                                                                        <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">
                                                                            <RichText.Content value={attributes.contentAIA} /></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                                                
      <img
            src={ attributes.imageurljmL } 
            alt={ attributes.imagealtdjE } 
            class="object-center object-cover group-hover:opacity-75"
          />
                                                                <div class="flex flex-col justify-end">
                                                                    <div class="p-4 bg-white bg-opacity-60 text-sm"> <span class="font-medium text-gray-900">
                                  <span class="absolute inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentqMC} /></span>

                                                                        <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">
                                                                            <RichText.Content value={attributes.contentHNL} /></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="grid grid-cols-3 gap-y-10 gap-x-8 text-sm text-gray-500">
                                                            <div class="space-y-10">
                                                                <div>
                                                                    <p id="women-shoes-heading" class="font-medium text-gray-900">
                                                                        <RichText.Content value={attributes.contentXZm} /></p>
                                                                    <ul role="list" aria-labelledby="women-shoes-heading" class="mt-4 space-y-4">
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentHRK} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentFJA} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentXPJ} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentOGy} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentnMa} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentDeC} /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div>
                                                                    <p id="women-collection-heading" class="font-medium text-gray-900">
                                                                        <RichText.Content value={attributes.contenttcN} /></p>
                                                                    <ul role="list" aria-labelledby="women-collection-heading" class="mt-4 space-y-4">
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentyfv} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentdGe} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentlgk} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentOsf} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentNTa} /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="space-y-10">
                                                                <div>
                                                                    <p id="women-clothing-heading" class="font-medium text-gray-900">
                                                                        <RichText.Content value={attributes.contentPCj} /></p>
                                                                    <ul role="list" aria-labelledby="women-clothing-heading" class="mt-4 space-y-4">
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentgQs} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentrQS} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentyeg} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentmiA} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentyMk} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentVpF} /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div>
                                                                    <p id="women-accessories-heading" class="font-medium text-gray-900">
                                                                        <RichText.Content value={attributes.contentMms} /></p>
                                                                    <ul role="list" aria-labelledby="women-accessories-heading" class="mt-4 space-y-4">
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentzvw} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentFTU} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentOpT} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentlvr} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentQYl} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentRLO} /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="space-y-10">
                                                                <div>
                                                                    <p id="women-brands-heading" class="font-medium text-gray-900">
                                                                        <RichText.Content value={attributes.contentERs} /></p>
                                                                    <ul role="list" aria-labelledby="women-brands-heading" class="mt-4 space-y-4">
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentcXB} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentQZV} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentLMG} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentTNt} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentgtJ} /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex">
                                        <div class="relative flex">
                                            <button type="button" class="text-gray-700 hover:text-gray-800 relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium" aria-expanded="false">
                                                <RichText.Content value={attributes.contenttnT} /><span class="absolute bottom-0 inset-x-0 h-0.5 transition-colors ease-out duration-200 sm:mt-5 sm:transform sm:translate-y-px" aria-hidden="true"/>

                                            </button>
                                        </div>
                                        <div class="absolute top-full inset-x-0">
                                            <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>
                                            <div class="relative bg-white">
                                                <div class="max-w-7xl mx-auto px-8">
                                                    <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                        <div class="grid grid-rows-1 grid-cols-2 gap-8 text-sm">
                                                            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden col-span-2 aspect-w-2">
                                                                
      <img
            src={ attributes.imageurlujp } 
            alt={ attributes.imagealtOiU } 
            class="object-center object-cover group-hover:opacity-75"
          />
                                                                <div class="flex flex-col justify-end">
                                                                    <div class="p-4 bg-white bg-opacity-60 text-sm"> <span class="font-medium text-gray-900">
                                  <span class="absolute inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentyxr} /></span>

                                                                        <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">
                                                                            <RichText.Content value={attributes.contentCdf} /></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                                                
      <img
            src={ attributes.imageurlrGy } 
            alt={ attributes.imagealtIDb } 
            class="object-center object-cover group-hover:opacity-75"
          />
                                                                <div class="flex flex-col justify-end">
                                                                    <div class="p-4 bg-white bg-opacity-60 text-sm"> <span class="font-medium text-gray-900">
                                  <span class="absolute inset-0" aria-hidden="true"/><RichText.Content value={attributes.contentrRg} /></span>

                                                                        <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">
                                                                            <RichText.Content value={attributes.contentXFj} /></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
                                                                
      <img
            src={ attributes.imageurlkbd } 
            alt={ attributes.imagealtgoo } 
            class="object-center object-cover group-hover:opacity-75"
          />
                                                                <div class="flex flex-col justify-end">
                                                                    <div class="p-4 bg-white bg-opacity-60 text-sm"> <span class="font-medium text-gray-900">
                                  <span class="absolute inset-0" aria-hidden="true"/><RichText.Content value={attributes.contenthkf} /></span>

                                                                        <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">
                                                                            <RichText.Content value={attributes.contentVsY} /></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="grid grid-cols-3 gap-y-10 gap-x-8 text-sm text-gray-500">
                                                            <div class="space-y-10">
                                                                <div>
                                                                    <p id="men-shoes-heading" class="font-medium text-gray-900">
                                                                        <RichText.Content value={attributes.contentZgB} /></p>
                                                                    <ul role="list" aria-labelledby="men-shoes-heading" class="mt-4 space-y-4">
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentnYZ} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentziF} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentHNE} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentftD} /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div>
                                                                    <p id="men-collection-heading" class="font-medium text-gray-900">
                                                                        <RichText.Content value={attributes.contentiyD} /></p>
                                                                    <ul role="list" aria-labelledby="men-collection-heading" class="mt-4 space-y-4">
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentQtd} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentrQs} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentFkg} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentBCf} /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="space-y-10">
                                                                <div>
                                                                    <p id="men-clothing-heading" class="font-medium text-gray-900">
                                                                        <RichText.Content value={attributes.contentuav} /></p>
                                                                    <ul role="list" aria-labelledby="men-clothing-heading" class="mt-4 space-y-4">
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentKJS} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentsEC} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentPnM} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentMXz} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentzMj} /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div>
                                                                    <p id="men-accessories-heading" class="font-medium text-gray-900">
                                                                        <RichText.Content value={attributes.contentfEg} /></p>
                                                                    <ul role="list" aria-labelledby="men-accessories-heading" class="mt-4 space-y-4">
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentqFt} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentyMW} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentTnJ} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentYgB} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contenttox} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentyoq} /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="space-y-10">
                                                                <div>
                                                                    <p id="men-brands-heading" class="font-medium text-gray-900">
                                                                        <RichText.Content value={attributes.contentCyK} /></p>
                                                                    <ul role="list" aria-labelledby="men-brands-heading" class="mt-4 space-y-4">
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentvkR} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentZUk} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentHef} /></span>

                                                                        </li>
                                                                        <li class="flex"> <span class="hover:text-gray-800"><RichText.Content value={attributes.contentjmX} /></span>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> <span class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><RichText.Content value={attributes.contentPOc} /></span>
 <span class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><RichText.Content value={attributes.contentzaN} /></span>

                                </div>
                            </div> <span class="flex">
            <span class="sr-only"><RichText.Content value={attributes.contentbPS} /></span>

                            
      <img
            src={ attributes.imageurlldQ } 
            alt={ attributes.imagealtNGf } 
            class="h-8 w-auto"
          />
                            </span>
                            <div class="flex-1 flex items-center justify-end"> <span class="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center">
              
      <img
            src={ attributes.imageurlNPK } 
            alt={ attributes.imagealtmkO } 
            class="w-5 h-auto block flex-shrink-0"
          />
              <span class="ml-3 block text-sm font-medium"><RichText.Content value={attributes.contentzIb} /></span>
 <span class="sr-only"><RichText.Content value={attributes.contentVoP} /></span>
</span> <span class="hidden ml-6 p-2 text-gray-400 hover:text-gray-500 lg:block">
              <span class="sr-only"><RichText.Content value={attributes.contentDzC} /></span>

                                
      <svg
         class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyUR }}
        >
      </svg>
      
                                </span> <span class="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
              <span class="sr-only"><RichText.Content value={attributes.contentBRD} /></span>

                                
      <svg
         class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKMM }}
        >
      </svg>
      
                                </span>
                                <div class="ml-4 flow-root lg:ml-6"> <span class="group -m-2 p-2 flex items-center">
                
                
      <svg
         class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBHE }}
        >
      </svg>
      
                <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"><RichText.Content value={attributes.contentvOz} /></span>
 <span class="sr-only"><RichText.Content value={attributes.contentQtF} /></span>
</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    </div>
</div>
            );
            },
        });
        