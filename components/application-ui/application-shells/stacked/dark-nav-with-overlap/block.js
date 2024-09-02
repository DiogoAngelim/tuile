
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/dark-nav-with-overlap', {
            title: 'dark nav with overlap',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAKVBaADASIAAhEBAxEB/8QAHAABAAMBAAMBAAAAAAAAAAAAAAECAwcEBQYI/8QAQxABAAIBAgIGCAUCBQIFBAMAAAECAwQRBRITFyExkdIGUVJUYnGBkxQiMkGhQmEHFWWk4iNTFjOxwdEkN0PhdJLx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAcEQEBAQEBAQEBAQAAAAAAAAAAARESAgMhMUH/2gAMAwEAAhEDEQA/APiQHVAAAAAAAAAAAAAAAAAAAAACs3rXvkFhTpKev+DpKev+AXFOkp6/4Okp6/4BcU6Snr/g6Snr/gFxTpKev+DpKev+AXFOkp6/4Okp6/4BcVi9bd0rAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0wY4y58eOZ2i9ojd7LiPDcODSzlw80TWY33nfeHj4eF58unjNW1YmY3rWe+Xn8OzTrdLkwaje017Jme+Ye34/KWXx7n7f4m14/DuG4dRpelyzbe0zEbTts9bnx9Fnvj335LTG7ys9dTw7LOLHltFb9sTH7/8A7WzcL1GPTzntatpiOa0du+yPfjrzz58/s/o8AB5VAADxZned5eU8UAe59GuG6PiWfXTr5zxh0mjyanbBaItaazHZ2xMd0y8nPwTQa3hVOIcByanaNRXT5cOqmu9Zt+m3NG0cu/Z2mj50e/z+iWvxzpvw2o0WtrqNR+Gi2mzc0Uybb7W3iNuzefo8zhXorSPSLQaTXarSavTZ75KX/C55ma2rWZ2nsiY7YZrXyg+r4d6I2rxXhsa3PpdXotTnnDe2lzc3LeKzPLM7RtPZ+zxNf6J6/TxW+ny6XV1tqI0810+bntiyTPZW/dtP7Gj58e91/orrtHi6Suo0WqiM0YMn4fNzdFeZ2iL7xG3b2LZ/RPW4p0/RazQammfU10s3wZpvGPJbui3Z2fTdusegH0U+h+sjU58M8Q4ZFdNXm1GWdR+TDO+0VtO3ZaZiez+zH0q4Th4PqNBgwzW1smix5ctq35q2vM2iZrPqnaNjR6OJ2neHlPFeUAAAPM4ZTRZNTGLXV1ExeYrScNqxtMz++8S9prOCaW2u1Gk4fbJj/CT/ANfPq8tYxxH7d1d95kHz49r/AJDqa6u+DLqNJirXHGWM18u2O1Z7pif33+TSvo3rOm1NMmfS4q6aKWtkvk2pNbd0xO3d2A9MPdan0Z1umxZ72z6S9sOPpZx0y73mntRG3c9KAAAAAPqY4BwzJr6cOx210ai+CMsZZmtsdZmu/bG0Ts9Z/wCH9XOl0+aM2mm2pis4cPSfnvvO3ZG37d8mj1I93HAM2n1Omm99Nq8N9TXBkjDmnatpn9Np23j5or6P6jUZss0yabTUnPfFhpmy7TkmJ22r2dvq37AelHttL6P6zUU5smXTaaZyTipXPk5ZveOyYjs7e3sbZPR29OFYtRGoxTqr5+h6Dm7ebeI5Y/vE9/7bA9GPYcS4Rl4dTnvqdLm2yTjvGHJvNLR+0xMQ9eAAADyOH6S+u1+DSY52tlvFd9t9vXIPHHudVp+BV/E6fDm1ePNhi3JkybWpltH7bRG8b/tPiyngWp/A21NdRpb2pijLfDTLvkrT1zH/AOwerHv9dwDfiOamlyYtPpsGLHa+TPk2rE2iOzf+87sKejurnNqqZc2lwRpeTnyZcm1Zi2/LMTt3dn8g9OPbx6Paz8XqMGTJp8VdPWtr5smTbHtb9O07fu34hwGuPW6XS4M2nx76OubLlyZfyb7zEzE+qezbYHoR7mvo3rLarJh6fSxWmGM/Szk/Jak/1RO3d3+D1ObH0Oe+Lnpk5LTXnpO9bbfvE+oFAAAAB9FoeDaHLw/h2bNi4hlyay16zOCa8tNrbbzE1/8Af9pYT6OZrarU0pqtNTDizzgpkzX5ekt6o7+00ekHt8Ho9q8mLLkzZ9Lpa4s04LdPk5drxETt3f3RT0e1nS6imoyafTV094pfJnyctZtPbERO3b2doPUj2+L0e1ls2sxZc2m0/wCDmsZbZsm1fzb7TE7d3/zDbJ6OWnS8PtpdXgzZtXMxyRfs7J747O6I7/7g9EPN4hw6+gjHadTptRTJvEWwZOaImO+J7I2eEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADzeE6fHqNVac8TOHDjtlvG/fEft/6Ay/A6r8J+K6C/Qe28d7H/ADjP+K6WKY+i5ej6Db8nJ6tmfFtPjwayLYY2xZqVy0j1RP7A8IAHuuA8DtxLm1GebU01J7du+8+qH2no7o9Hi00ZMGHHXmneJ27f7dveimgtpuCV02ltOK+PHG0xHbv3z49vi9VotNijNWMmtyYr9DN9rZIrzRvG1YiJns7/AO/a832u/j0/Cfuvo+J6DRazBNdRp8eSLf1bdsfKe+HOuN8HnQZJyYOa2nmdt576T6pfXX4bW+l2xZ8mnrEzfaMk7xO3Zt3T/wCxj4bfNwvPg1OScvS4tovNe3eO6do+ngn5esuK+3jZuOdgPW8gAAAAAAAAAAAAAAAAAAAAAAAAADz8XFc+PTxhrWszWNq2/d5/DsE6LS5M+fsm0c0x+8RD0uDJGLPjyTG8UtE7PZcR4liz6WcWHmmb7bzMbbQ9vx+sy+/d/Z/E2PG1F9TxLJOSmG00p2RER3LZuKajJp5wWrWszHLa37y24dxLDp9L0WWtoms7xyxvzPW58nS58mTbbntM7I9+889efX7f6KAPKoAAeK8p4sxtO0g9z6M8S0XDdRrv8wrqJwavR5NNPQRE2jmmO3tmI7ol7HHx7guhw6TQ8P0WpzaKNVXUaqdVy8+XbsisRHZtHftPqfKhg+44r6W8N1mm0uCt+J5Ixa6NTN+XHitSkVtHLTl/eN47+/t7VremHC44pwzV3prNVfS5L2yanJhx0yzSaTEU2rO07TPfPqfCjMbr6j0d9ItHwrQaTBqMWe1sHEZ1VppWJiadFNNo3mO3d5GP0m4VwqlrcF0+stk1GrpqM8amaxEVrMzyV239c9svjww19dbj/AtJXPXQaXWZ6a7V48+qpqortFKX5uSsRM79sz3vP13pnw3Nj0+PH+Py1xcQxaqOkw46RSlZ35KxWf2ju38XwQYa+k0nG+G3ycc0/EMeqjR8TyxlrfDFekpNbzaN4mdv37e14vpPxPRcT1Oi/wAupqKYNLo6aaOniOaeWbdvZPqmHpRuMHlPFiN52h5QAANNPkjFqcWS28xS8Wnb+0vodP6RYMXFOJZo/EYsOtmJrelazekx3dk9n7y+aAfU19ItHOtz5cltXNpw0x4tTbHjtkptMzPZ3RE7/wB//jLivpBpNbg19MdNRzanFhpWbxXvpaZnfaf7/t/D5sMH0GTjmltrNVmjHm5c3Dp0teyN4vtEbz293Y+fAAAAAHvOL+kep1cVwaTPmxaXoq0tjnau8xG0937Sr/nePHreE6nDjvM6LDXHetto5pjffb6S9KA+q4drNBOow6Thdc8VyaumozX1Nq1ilKTvtHavi9JdPii+C2bVYq4tTlvS2nrS0ZK2tNu3m7u98kGD388V4ZrtPix8Vx6vfBmyZKdFNZ563tzTFp7O3f8AeGVOJ6GeF0018Wox2w6vpsUYrRtFZmOzmntiYjfadvU9KA99x3jGk4hoaYcfT581cvNGbPjpW1abbcu9e96EAAAG+h1V9FrsOqxxvbFeLRHr2/ZgA95q9VwG34rUYNPq8mozxbkx5dopitP77xO87fs8/J6ScP8A8vz6fDTU44y6WcVcEY6Rjx2mNt947ZfKBg+rx+lGnjUaqInU4cWemOK5KUpN62rG09k9kxLwtfxzDqsHEse+pvOpjDXFbLFd9qTMzzbbbd/7bvQhg+kvxzh+px5dLqsepjT5tNhxzakV5q3x/wBpnaYndpXj3DK67HfHh1NceLRV02LJalLXx2iZ7YiZ27pfLhg+m4h6Q6TUzqOSupt0uhrpotetYmbRaZ3nadtu39vB8yAAAAAPoNF6R20Ol4ViwTmiNLbJ+Ip3VyRa28bdvbtG/f3S8jRekOj0uHNpceTW4MP4icuK+OlLWms99bc0z4vlwwfVX1nD9bwPNl4lfVcmXiNr16Oazk/RG2/dHcx1XHOH8T/F4dfi1OPBkz1zYpw8s2jakU2nf1xHi+bDB73X8cwavFxSsYslPxXQxhjsnlrT2p9c/VGDimhjQ8Mx5o1dM2ivfe2GYjetpmd4n1x2PRgPdcf4rpuI4tPXFGXJmxzbn1GXHWlrRPdH5e/Z6UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtOD5NHixar8TquhvlxTir/05tG0989j1YD3v+Q6b8V+G/wAynpeXm2/DztEbb7777PG4vfR5cGl/D6vpsuHHGKf+nNd6xvtPa8b/ADPXfhZ034m84pjl5Z9Xq379niAAA67wzNTX8M0+pxzvXLjiZ7d9p7pj6TvD5zBTFh4rGLLanS6evRxzTvyzHdMfOJiXoOBekmq4Pp82npHPjyRvTf8A/Hb1/wB/ky/CarjOrtrKaqk6jJO9/wCnefl+zz/Xy7/H1+vtOI6yuHH0OKelzW7I3mGkZLaDgGTVavLMzWk2ifV7MR/Hi9FpKaXhunidbnrGWm8zM2/VP9o/eXq/SH0htxXHi0unpbFpcW3ZM9t52/f5duyfj526v7+vzHogHqeUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVmlbd8LAKdHT1fydHT1fyuAp0dPV/J0dPV/K4CnR09X8nR09X8rgKdHT1fydHT1fyuAp0dPV/J0dPV/K4CsUrXuhYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB3PgnB9JwbQY9NpcdYtFY6TJt+bJb95mXsU9N5fnsfoQOjl+ex+hA6OX57H6EDo5fnsfoQOjl+ex+hA6OX57H6EDo5fnsfoQOjl+ex+hA6OX57H6EDo5fnsfoQOjl+ex+hHruN8H0nGdBk02qx1m01no8m35sdv2mJOjlwwBTAAAAAAAAAAAAAAAAAAAAAAAAAAFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28Tnv7dvFUBbnv7dvE57+3bxVAW57+3bxOe/t28VQFue/t28UTe+367eKESD9CgOSwfPar/McWvtwjFmyTj1lpy49RN/z4ccf+ZWJ7995jl9XN/Zpj4rrIxY9Z0WH/AC+dRGCImbTl25+SLzPdPb+3q/duD3o9RPFc34C2o5MfNGu/DbbTty9Lyb9/fs04Vq9brM+pvmrp6abFmy4aRWJ57TW20TM77R2R3GD2Y+V12pxf5xxXHk1HEpzY+j6DHprZZiJmkftX8vbPreZi4jxPHljFqK6eI02jx59Va0TNpmYtzRERO39M9v8A6mM174elwcR4lN9JGpx6Wsa6lpw8nNPR25eaIt2/mjaJ7tng8Itnpp+F5dTauXJqtVeZvFrxMfkv3/m2nu+W37GNfUD5PR8czYNBw/SY8mKM06SM18met77/AJpiI/L+/ZPbP8vo+Har8bw/BqpxzjnLSLTSe+s+oweSAwAAAAAAAAAAfnqEohLqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARKUSD9CgOS2GTSY8muw6uZt0mGl6ViJ7Ji22+//APWHhxwTTxqIv0+o6GMvTRpueOji+++/dv39u2+272YD1N+A4L57X/FaquOc8ajoa3jk6SLRbfu37Zju3/d5+j0mPR0yUxTaYyZb5Z5p/e0zM/TtbgMMOkx4dVqNRWbTfUTWbxM9kbRtGyPwWH8Xn1Fua1s+OuK9Z/TyxzeaXkAPXaPg+HS58WT8Rqc0YKzXBTLeJriiezs7N57Ozt37F8XCsGLFo8db5JjR3m+PeY7ZmLR29nxS84NHqq8Dw48WCum1WqwXwYuijJjtXmtTffad4mP4eywYowYaYq2vaKViIm9ptM/OZ71wAAAAAAAAAAAAH56hKIS6oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAESlEg/QoDksHrLcZp0uTo9HqsuDFknHkz0rE1raJ2ns35p2nv2h519Tp8eeuDJnxVy3/Tjm8Ra3ygGo9ffjnDafi4tq8e+jjfLHNG/dHd6++I+fY0pxLT5LUtTJjnT2wzl6bpa8sRExE/vv9e6NgeYMsOq02ebxg1GLJOOdrxS8Ty/PbuVw63SZ52warBknt7KZInu7+71bx4g3GWn1Wn1UWnTajFmis7WnHeLbT9GoAAAAAAAAAAAAAAPz1CUQl1QAAAAAAAAAAAAAAAAAAAAAAAAAA636N5NNovQPT63Np63rhwXyWiKxvO1rT+7LhvH/AEa9JNRGhy6Ctct4nlrnxV2t/aJjft8FeH//AGrv/wDw8v8A62c+9GsWXL6ScNrhrM2jU47dkb7RFomZ+kRKMa9h6a+j9OA8Tp+Gm34TURNsUWneazHfXf8AfbePFTSehfH9XgjNTRdHS1eavSXrWZ+kzvH12fZen3SW1/AselwVz6r8Ra2PHbutty9k/wBu55+rw8evGDNq+OaHhnJO80xYuat5/vN5jdu/hjlPEuGa3hWp/D8Q098OTbeInaYmP7THZP0e10foZx/V4IzU0XR0tXevS3rWZ+kzvH12fb/4hXw6fR8L1mbFGSMGupMxt2zXaZmPrtD2Grn/AMQ6bBm4Fx6dNOOeaZxRF+beO61d4mPlPr7joxy2vC9bwzjuj03EdNbFe2ak7W2mLRzR3THZL7v0+4NqeJRw/BwvSRky82S1uWIrtG1e+Z2h4Xpb/nX4/hUcTwaK2Curr0eo08Wid5n9M7z2b7b/AE73tvT7jet4PoNNHD8nRZc+SYm/LEzERHd2/M0c74x6OcV4LSuTX6blxWnljJW0WrM+rs7vq+912hnU/wCGmDFpdNGTUZNPp4rFKRzTM2o2zaq3G/8ADXLqtXG+S+mta07bb2pM9vjXdvXX5eF/4eYNbgrzZcWix8nZvtMxEb/Tff6M0xz/AFnoZx7R6SdTl0cWpWOa8UvFrVj5R3/Td6fRaLVcQ1VdNosF82a3dWsfz/aP7umf4f8AH+IcZrrcXEcsZrYZral+SKztO/ZO20ft/wCrf0L4dp9Lq+OZcVaRaNffDXl/ppXtiI9X6v4/s3THxOX0G9IcWDpfwlL7RvNKZazaP57fo+frp819RGnrhyTnm3J0cVnm5vVt37vu/Rb0s4rxH0trptTki2m1M3iMXLEdHtE2jae/9tu15nFdNqsH+I2LLwfSafLqcuk6W85pmK03maTedv7REfU2/wCmPl49BvSKcPSfgqxPsTmpzT/Oz1WDhHEM/Ff8rpprRrN5jorzFZ7I3nv7O6HWcGDi1eMYs+u45pq1tG06HHiiK27P2mZ5u/t3/wDZ6/idKx/iXwa8R+a2myRM+vat/wD5OjHxNfQnj8zl59HXHGOvNM2y12n+0bT3vH4T6LcY4vp/xGj00dBO8RkyWisW29W/e+s9PvSPifDuKY9DoM8YcU4IteYpEzaZmY/eJ7No/b1y9x6U6/P6Oeienjhu1bxOPBS/LE8kcs9u09n9P8m0yMPQLg+fh2g1mn4npIpmjPvHNEW3jljtif3jvcryf+Zb5y6/6DcY1fGeCXza60XzYs04+eKxHNG0T27dm/bs5Bk/82/zkn9KqApgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiUokH6FAclvluIVvXPqL6DS8Q0nEpyTyxhi1sOad+y1v6Npjv32mGXENDqL63X4s0arm1Oal8VsOljJvERXba8/p2mJ75j1/u+uG6zHzuo0t75fSDT10t5vqsPNhv0f5bf8ASiu3N3b80d31ePrsObU6W19PpNREW4VlxxWcNqzF+av5dtu+dp+b6oNMfN8U4deMuXHosUYKX4ZkxzaI5abxau0TPdHZzfy8fJXFqeK1pXhWbTVtw7NS1KxSt7x+WNq7Tt2b9kz631d6VyUtS9YtW0bTWY3iY9TxtHw3RaG1raTTY8VrRtM1jtmPV8jTHq/R+M1dVmicNpw1xUrXPl0vQZN43/JMf1beuI/d74GNAAAAAAAAAAAAAAfnqEohLqgAAAAAAAAAAAAAAAAAAAAAAAAAB0ngHpH6O4/RPBwzier2mcVseXH0eTumZ7N6x6p/aWuk4/6FcEx2ycMrE5Ntv+nhvN7R6ua//wAuYjOW6+myel2XUel2m4znxT0OnnlphrO/LSYmJ+c9sy+m4vxj0L4jlxcS1mW+oz4K7UxRW8Tbad4iY7I75/fsczDGa6H6Y+lPCNdo9F/l+emqyYNXTNbFfFaItWInsnmjbbtiGmXXehHGMeDPlt+AzYfzcuOk4rR/aZrG0937dvyc4DDX3vpV6XcO4jm0Gl0VrXwYdTTNkz2rMR2ftET2/vPg8f0/49wzjGn0VOG6nprYr2m//TtXbeI274h8UGGvvOHekPCcP+H1+F5dXy6ycGakY+jvPba1pjt22/eP3ey0Ppb6PYfRjS6LVZpzWrp8eHLgjFb1RFu2Y27O39/2cxDk11LTekHoj6P8Pyzwi0WnJ+bo6RebXn9ombd0fP8Au+c9E/S+OG8S1c8SiZ0+tyzlvakb9HeZ7Z29U7/xD5AMNdRwcU9CeG6zLxXS5afickTP5K3me3v2rPZXf6PS8O9NcX/i/PxHW0tTSZsUYKxEbzirE7xM/wA7xHr/ALPiAw106/GPQzDxuvGK57ZNZkmN7xXJMU7Nubbb1dn/ALPE1/pLwfN6bcL4jj1m+lwYb1yZOiv+WZi0R2bbz3w54HJr6P054nouLccpqeH5ulxRgrSbcs17Ymf2mI9b6nhnpRwHi3o/j4fx68UvWkUyVyRba/L3Wi0d38S5mGGurcL9KvRLhuC2j0WedPgx2/L/ANLJPPM9szvtM/27fV6tnKrzE3tMd0zKAkw0AaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJSiQfoUByWAAAAAAAAAAAAAAAAAAAAAA/PUJRCXVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiUokH6FAclvmdXObSavUZuJ24hjr002xavBlmcWOm/ZFqRO0eqd6zu8ieIZsWr1WDSY8c582tjDS2S1prH/Si82mN/VE9kbPJzcCw5Zy0nV6qumzXm+TTVvHJaZneY7t4if3iJV4hwqLYc1tNj6XLl1Fc8xbLOOazFYrvS0R2TtH7/3ax41+L8SxfiMN8OltqMWqw4K8s2itueI7fXHf/wD69hw3VanLn1el1sYum09q/mxRMVtW0bx2TM7T3vC4bwS1a5r6zmpbJqaZ61jLOSYmkRtzWmO3eY7XtsWlx4tXqNTWbTfPy80TPZHLG0bA9Vm4vra11GtpiwTodPnnDaszPSWiLctrRPd2Tv2fvs1y8WzU4dqtRGPHzYdZGCsdu016Std/ntLTJwTT5M97zm1EYcmSMt9PF46O194neezfvjfbfZTPwHBmy5bfitVTFlzVzWw1vHJzxMTv3b/t3b7H4HCM2uy6/iVdVmxXxYs/JSK1mJr+Ws+vu7fF7Z4uDQ0wa7UarHly/wD1G03xzMcnNERHNHZvvtEfu8pjQAAAAAAAAAAAAAH56hKIS6oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAESlAP0LExMbxO8SOWcF/xB1nDtDTS6rSV1cYoitL9JyWiI/aeyd3sOs//AEX/AHX/AAc+arY6GOedZ/8Aov8Auv8AgdZ/+i/7r/gZTY6GOedZ/wDov+6/4HWf/ov+6/4GU2OhjnnWf/ov+6/4HWf/AKL/ALr/AIGU2OhjnnWf/ov+6/4HWf8A6L/uv+BlNjoY551n/wCi/wC6/wCB1n/6L/uv+BlNjoY551n/AOi/7r/gdZ/+i/7r/gZTY6GOedZ/+i/7r/gdZ/8Aov8Auv8AgZTY6GOedZ/+i/7r/gdZ/wDov+6/4GU2OhjnnWf/AKL/ALr/AIHWf/ov+6/4GU2OhjnnWf8A6L/uv+B1n/6L/uv+BlNjoZMxEbzO0Q551n/6L/uv+D1/Gv8AEHWcR0N9LpdJXSRlia3v0nPaYn9o7I2OabHxsJQl0SAAAAAAAAAAAAAAAAAAAAAAAAAA91wP0W4rxzHOXSY6UwRO3S5bctZn+3ZMz9Ie36t+Ne86D7l/K6bo9Ni0ekw6XBWK48VIpWI9UNkdVWOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq3417zoPuX8rqYdUyOWdW/GvedB9y/lOrfjXvOg+5fyuph1TI5Z1b8a950H3L+U6t+Ne86D7l/K6mHVMjlnVvxr3nQfcv5Tq34z7zoPuX8rqYdUyOVz/hxxn3nQfcv5UdXHGfedB9y/ldU2NjqmRyvq54z7zoPuX8p1c8Z950H3L+V1PY2Z1TI5Z1c8Z950H3L+U6ueM+86D7l/K6nsbHVMjlnVzxn3nQfcv5Tq54z7zoPuX8rqexsdUyOWdXPGfedB9y/lOrnjPvOg+5fyup7Gx1TI5Z1c8Z950H3L+U6ueM+86D7l/K6nsbHVMjlnVzxn3nQfcv5Tq54z7zoPuX8rqexsdUyOWdXPGfedB9y/lOrnjPvOg+5fyup7Gx1TI5Z1c8Z950H3L+U6ueM+86D7l/K6nsbHVMjlnVzxn3nQfcv5Tq54z7zoPuX8rqexsdUyOWdXPGfedB9y/lOrnjPvOg+5fyup7Gx1TI5Z1ccZ950H3L+V6njfovxTgmOMurx0vgmdulxW5qxP9+6Y+sO1bMdXpcWs0mXS56xbHlpNLRPqlvVMcCAWkAAAAAAAAAAAAAAAAAAAAAAAAAB+hAHJYBuAMvxFPVZbJkjHtvE9vqBcUx5Iyb7RPZ61fxFPVYGopkyRj23ie31GPJGTfaJ7PWC4y/EU9VlsmSMe28T2+oFxTHkjJvtE9nrV/EU9VgaiuTJGPbeJ7fUjHkrk32iez1guMvxFPVZa+SKREzE9vqBcUx5K5N9ons9av4inqsDUUvkikRMxPb6jHkrk32iez1guMvxFPVZa+SKREzE9vqBcUx5K5N9ons9av4inqsDUUvkikRMxPb6jHkrk32iez1guMvxFPVZa+SKREzE9vqBcUx5K5N9ons9av4inqsDUUvkikRMxPb6jHkrk32iez1guMp1FInbay18kUiJmJ7QXFKZa5JmIiez1qzqKRO21gail8kUiJmJ7SmWuSZiIns9YLjKdRSJ22stfJFIiZie0FxSmWuSZiIns9as6ikTttYGopfJFIiZie0plrkmYiJ7PWC4ynUUidtrLXyRSImYntBcUplrkmYiJ7PWrOopE7bWBqKXyRSImYntKZa5JmIiez1guMp1FInbay98kUrEzE9oLClMtbztET9VZz0iZja3YDUUtkitYtMTtJTLW87RE/UFxlOekTMbW7FrZIrWLTE7SC4pTLW87RE/VWc9ImY2t2A1FLZIrWLTE7SUy1vO0RP1BcZTnpEzG1uxa2SK1i0xO0guKUy1vO0RP1VnPSJmNrdgNRS2SK1i0xO0lMtbztET9QXGU56RMxtbsXtkitItMTtILClMtbztET9VZz1iZiYt2A1FLZIrSLTE7SUy1vO0RP1BcZTnrEzExbsWtkitItMTtILilMtbztET9VZz1iZiYt2A1FLZIrSLTE7SUy1vO0RP1BcZTnrEzExbsWtkitItMTtILilMtbztET9VZz1iZiYt2A1FLZIrSLTE7SUy1vO0RP1BcZTnrEzExbsWtkitItMTtILilMtbztET9VbZ61tMTE9gNRSckRSLzE7SUy1vbaIn6guMrZ61tMTE9i05IikXmJ2kFxSmWt7bRE/VW2etbTExPYDUUnJEUi8xO0lMtb22iJ+oLjK2etbTExPYtOSIpF5idpBcUplre20RP1VtnrW0xMT2A1FJyRFIvMTtJTLW9toifqC4ytnrW0xMT2LTkiKReYnaQXFKZa3ttET9VbZ61tMTE9gNRWckRSLzE7SrTNW9toiQaDO2etbTExPYmckRji+07SC4zpmre20RJbPWtpiYnsBoKTkiMcX2naUUzVvbaIkGgztnrW0xMT2JnJEY4vtO0guM6Zq3ttESWz1raYmJ7AaCk5IjHF9p2lFM1b22iJBoM7Z61tMTE9iZyRGOL7TtILjOmat7bREls9a2mJiewGgpOSIxxfadpRTNW9toiQaDO2atbTWYneE9JHR8+07AuM6Zq3tyxE7ls1a2msxO8A0FOkjo+fadkUzVvbliJ3BoM7Zq1tNZid4T0kdHz7TsC4zpmre3LETuWzVraazE7wDQU6SOj59p2RTNW9uWIncGgztmrW01mJ3hPSR0fPtOwLjOmat7csRO5bNWtprMTvANBTpI6Pn2nZFM1b25YidwaCIvWbTWJ7YSAAD89gOqAAAAAAAAAAAAAAAAAAAAAAAAAAH6EAcljDBEze1rb7t2eLJOTfeNtgW5KexXwTNYt3xE/NICIrFe6Ij5I5KexXwWARNYt3xE/MisV7oiPkkBXkp7FfBM1i3fET80gIisV7oiPkjkp7FfBYBE1ie+In5kVrHdER8oSAryU9mvgmaxPfET80gIitY7oiPlCOSns18FgETWJ74ifmRWsd0RHyhICvJT2a+CZrE98RPzSAiK1juiI+UI5KezXwWARNYnviJ+ZFax3REfKEgK8lPZr4JmsT3xE/NICIrWO6Ij5Qjkp7NfBYBE1ie+In5kVrHdER8oSAryU9mvgmaxPfESkBEVrHdER8oRyU9mvgsAiaxPfESRWsd0RHyhICvJT2a+CZrE98RKQERWsd0RHyhHJT2a+CwCJrE98RJFax3REfKEgK8lPZr4JmsT3xEpARFax3REfKEclPZr4LAImsT3xEkVrHdER8oSAryU9mvgmaxMbTESkBEVrHdWI+UI5KezXwWARNYmNpiJgitY7qxHyhICvJT2a+CZrExtMRMJARFax3ViPlCOSns18FgETWJjaYiYIrWO6sR8oSAryU9mvgmaxMbTETCQERWsd1Yj5Qjkp7NfBYBE1iY2mImCK1jurEfKEgK8lPZr4JmsTG0xEwkBEVrHdWI+UHJWe+tfBICJrExtMRt6iK1jurEfKEgI5Kz31r4E1iY2mI29SQERWsd1Yj5QclZ7618EgImsTG0xG3qIrWO6sR8oSAjkrPfWvgTWJjaYjb1JARFax3ViPlByVnvrXwSAiaxMbTEbeoitY7qxHyhICOSs99a+BNYmNpiNvUkBEVrHdWI+UE0rM7zWPBICOWJjaYjb1EVrE7xWI+UJARNKzO81jwOWJjaYjb1JARFaxO8ViPlBNKzO81jwSAjliY2mI29RFaxO8ViPlCQETSszvNY8DliY2mI29SQERWsTvFYj5QTSszvNY8EgI5YmNpiNvURWsTvFYj5QkBE0rM7zWPA5YmNpiNvUkBEVrE7xWI+UE0rM7zWPBICOWJjaYjb1EVrE7xWI+iQETSszvNYn6HLG220bepICIrWJ3isR9CaVmd5rE/RICOWNtto29RFaxO8ViPokBE0rM7zWJ+hyxtttG3qSAiK1id4rEfQmlZneaxP0SAjljbbaNvURWsTvFYj6JARNKzO81ifocsbbbRt6kgIitYneKxH0JpWZ3msT9EgI5Y222jb1EVrE7xWI+iQETSszvNYmfkcsbbbRt6kgIitYneKxE/ImlZneaxM/JICOWNtto29RFaxO8ViJ+SQETSszvNYmfkcsbbbRt6kgIitYneKxE/ImlZneaxM/JICOWNtto29RFaxO8ViJ+SQETSszvNYmfkcsbbbRt6kgIitYneKxE/ImlZneaxM/JICOWNtto29RFaxO8ViJ+SQGOTHPPFqR2/v2tmOovavLyztvu2AAB+ewHVAAAAAAAAAAAAAAAAAAAAAAAAAAD9CAOSxnipFN9rb7tGGmiY5t49QNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ5Zxxt0n0aMs9LX5eWO5qAAD89gOqAAAAAAAAAAAAAAAAAAAAAAAAAAH6EAcljPFk6Tfs22aM8WOKb7W33BoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADHUXtXl5Z233bM8s4426T6NAAAfnsB1QAAAAAAAAAAAAAAAAAAAAAAAAAA/QgDksYab+r6N2eLJ0m/ZtsDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGWelr8vLHc1Y6i9q8vLO2+7YAAH57AdUAAAAAAAAAAAAAAAAAAAAAAAAAAP0IA5LGeLHFN9rb7tGGm/q+gNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ5Zxxt0n0aMs9LX5eWO5qAAD89gOqAAAAAAAAAAAAAAAAAAAAAAAAAAH6EAcljPFk6Tfs22aM8WOKb7W33BoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADHUXtXl5Z233bM8s4426T6NAAAfnsB1QAAAAAAAAAAAA+x6t+Ne9aD7l/KdW/GvetB9y/ldTEdVWRyzq34171oPuX8p1b8a960H3L+V1MOqZHLOrfjXvWg+5fynVvxr3rQfcv5XUw6pkcs6t+Ne9aD7l/KdW/GvetB9y/ldTDqmRyzq34171oPuX8p1b8a960H3L+V1MOqZHLOrfjXvWg+5fynVvxr3rQfcv5XUw6pkcs6t+Ne9aD7l/KT/hxxmI3/ABOg+5fyupot+mTqmRICWjDTf1fRuzxZOk37NtgaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyz0tfl5Y7mrHUXtXl5Z233bAAA5ZH+HHGZjf8ToPuX8p1b8a960H3L+V1Kv6YSrqsyOWdW/GvetB9y/lOrfjXvWg+5fyuph1TI5Z1b8a960H3L+U6t+Ne9aD7l/K6mHVMjlnVvxr3rQfcv5Tq34171oPuX8rqYdUyOWdW/GvetB9y/lOrfjXvWg+5fyuph1TI5Z1b8a960H3L+U6t+Ne9aD7l/K6mHVMjlnVvxr3rQfcv5Tq34171oPuX8rqYdUyACWgAAAAAAAAACLfplKLfpkEgAM8WOKb7W33aMNN/V9AbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApl6Ps6T6Lss9LX5eWN9moAAIr+mEor+mEgAAAAAAAAAAAAAAAAAAAAAAAAIt+mUot+mQSAAzxZOk37NtmjPFjim+1t9waAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyz3tTl5Z23as8vR9nSfRoAACK/phKK/phIAAAAAAAAAAAAAAAAAAAAAAAACLfplKLfpkEgAMNN/V9G7PFk6Tfs22BoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLPS1+XljfZqyz3tTl5Z23agAAiv6YSiv6YSAAAAAAAAAAAAAAAAAAAAAAAAAi36ZSi36ZBIADPFjim+1t92jDTf1fQG4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM8vR9nSfRoyz0tfl5Y32agAAiv6YSiv6YSAAAAAAAAAAAAAAAAAAAAAAAAAi36ZSi36ZBIADPFk6Tfs22aKYsfR79u+4LgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyz3tTl5Z23as8vR9nSfRoAACK/phKK/phIAAAAAAAAAAAAAAAAAAAAAAAACLfplKLfpkEgAMNL/V9G7PFk6Tfs22/uDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGWelr8vLG+zVlnvanLyztu1AABFf0wlFf0wkAAAAAAAAAAAAAAAAAAAAAAAABFv0ylFv0yCQAGeLH0e/bvv8A2aMNL/V9AbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzy9H2dJ9GjLPS1+XljfZqAACK/phKK/phIAAAAAAAAAAAAAAAAAAAAAAAACLfplKLfpkEgAM8WTpN+zbb+7Rnix9Hv277/ANgaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyz3tTl5Z23as8vR9nSfRoAACK/phKK/phIAAAAAAAAAAAAAAAAAAAAAAAACLfplKLfpkEgAMNL/V9G7PFk6Tfs22/uDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGWelr8vLG+zVlnvanLyztu1AABFf0wlFf0wkAAAAAAAAAAAAAAAAAAAAAAAABFv0ylFv0yCQAGeLH0e/bvv8A2aMNL/V9AbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzy9H2dJ9GjLPS1+XljfZqAACK/phKK/phIAAAAAAAAAAAAAAAAAAAAAAAACLfplKLfpkEgAM8WTpN+zbb+7Rnix9Hv277/ANgaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyz3tTl5Z72rPLGOduk+jQAAEV/TCUV/TCQAAAAAAAAAAAAAAAAAAAAAAAAEW/TKUW/TIJAAYaX+r6N2eLJ0m/Ztt/cGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMdRS1uXljfbdsyz3tTl5Z72oAAIr+mEor+mEgAAAAAAAAAAAAAAAAAAAAAAAAIt+mUot+mQSAAzxY+j37d9/7NGGl/q+gNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ5Yxzt0n0aMdRS1uXljfbdsAACK/phKK/phIAAAAAAAAAAAAAAAAAAAAAAAACLfplKLfpkEgAM8WTpN+zbb+7Rnix9Hv277/wBgaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyz3tTl5Z72rPLGOduk+jQAAEV/TCUV/TCQAAAAAAAAAAAAAAAAAAAAAAAAEW/TKUW/TIJAAYaX+r6N1MWTpN+zbYFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY6ilrcvLG+27ZlnvanLyz3tQAARX9MJRX9MJAAAAAAAAAAAAAAAAAAAAAAAAARb9MpRb9MgkABnix9Hv277tGGm/q+gNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ5Yxzt0n0aMdRS1uXljfbdsAACK/phKK/phIAAAAAAAAAAAAAAAAAAAAAAAACLfplKLfpkEgAM8eSLzMbbTDRn0UdJF48AaDK+PJa8zW+0ereU8t+h5eb83r3BoMqY8lbxNr7x6t5L48lrzNb7R6t5BqM+W/Q8vN+b17opjyVvE2vvHq3kGoyvjyWvM1vtHq3lPLfoeXm/N69waDKmPJW8Ta+8ereTJTJa8zW+0fMGozit+i5eb83r3VpjyReJtfePnINhlkpkteZrfaPmmK36Ll5vzevcGgxpjyReJtfePnKclMlrzNb7R8wajOK36Ll5vzevdWmPJF4m194+cg2GWSmS15mt9o+aYrfouXm/N69waDGmPJF4m194+cpyUyWvM1vtHzBqM4rfouXm/N691aY8kXibX3j5yDYZZKZLXma32j5pit+i5eb83r3BoMaY8kXibX3j5ynJTJa8zW+0fMGopFb9Fyzb83r3UpjyxaJtfePnINhlkpktbetto+aYreMU1m35vXuDQY0x5YtE2vvHzlOSmS1t622j5g1GcVvGKazb83r3VpjyxaJtfePnINhlkpktbetto+aYreMU1m35vXuDQY0x5YtE2vvHzlOSmS1t622j5g1GcVvGKazb83r3VpjyxaJtfePnINhlkpktbetto+aYreMU1m35vXuDQY0x5YtE2vvHzlOSmS1t622j5g1GcVvGKazb83r3VpjyxaJtfePnINhlkpktbetto+aa1vGOazbe37TuDQY1x5YtEzfePnKclMlrb1ttHzBqM61vGOazbe37TurXHli0TN94+cg2GWSmS1t622j5prW8Y5rNt7ftO4NBjXHli0TN94+cpyUyWtvW20fMGozrW8Y5rNt7ftO6tceWLRM33j5yDYZZKZLW3rbaPmmtbxjms23t+07g0GNceWLRM33j5ynJTJa29bbR8wajOtbxjms23t+07q1x5YtEzfePnINhlkpktbetto+a1a3jHMTbe0907guMa48sWiZv2b+uVslMlrb0ttG3rBoM6VvGO0Wtvae6d1a48sWiZv2b+uQbDPJTJa29LbRt6ylbxjtFrb2nuncGgxrjyxaJm/Zv65WyUyWtvS20besGgzpW8Y7Ra29p7p3VrjyxaJm/Zv65BsM8lMlrb0ttG3rKVvGO0Wtvae6dwaDGuPLFomb9m/rlbJTJa29LbRt6waDOlbxjtFrb2nundWuPLFomb9m/rkGwzyUyWtvS20bespW8Y7Ra29p7p3BoMa48sWiZv2b+uVstL2mJpbaPmDQZ0reKTFrbzPdO6kY8sTEzfs+cg3GeWl7TE0ttHzKVvFJi1t5nuncGgwjHliYmb9nzlfLS9piaW2j5g0GdK3ikxa28z3TupGPLExM37PnINxnlpe0xNLbR8ylbxSYtbeZ7p3BoMIx5YmJm/Z85Xy0vaYmlto+YNBnSt4pMWtvM907qRjyxMTN+z5yDcZ5aXtMTS20fMpW8UmLW3me6dwaDCMeWJiZv2fOV8tL2mOS231BoM8db1rMWtvM93apGPLvG9/5kG4zy0vaY5LbfUx1vWsxa28z3doNBhGPLvG9/5lfLS9pjktt9QaDPHW9azFrbzPd2qRjy7xvf+ZBuM8tL2mOS231Mdb1rMWtvM93aDQYRjy7xvf8AmV8tL2mOS231BoM8db1rMWtvM93apGPLvG9/5kG4zy0vaY5LbfUx1vWsxa28z3doNBhGPLvG9/5lfLS9pjktt9QaCmOt6xMWtvPzZ9Fm/wC5/Mg3GeWl7bcltvqY63rE89t9+7tBoMOizf8Ac/mV8tL225LbfUGgzx1vWJ57b793ap0Wb/ufzINxnlpe23Jbb6mOt6xPPbffu7QaDDos3/c/mV8tL225LbfUGgzx1vWJ57b793ap0Wb/ALn8yDcZ5aXttyW2+pjresTz2337u0Ggw6LN/wBz+ZXy0vbbktt9QaDPHW9Ynntvv3dqnRZv+5/MgtmyWrNYrPbLVWaVm0WmO2FgAARX9MJRX9MJAAAAAAAAAAAAAAAAAAAAAAAAARb9MpRb9MgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEV/TCUV/TCQAAAAAAAAAAAAAAAAAAAAAAAAAAU3tXs23g5/gsuApz/BY5/gsuApz/AAWOf4LLgKc/wWOf4LLgKc/wWOf4LLgKc/wWOf4LLgKc/wAFjn+Cy4CnP8Fjn+Cy4CnP8Fjn+Cy4CnP8Fjn+Cy4CnP8ABY5/gsuApz/BY5/gsuApz/BY5/gsuApz/BY5/gsuApz/AAWOf4LLgKc/wWOf4LLgKc/wWOf4LLgKc/wWOf4LLgKc/wAFjn+Cy4CnP8Fjn+Cy4CnP8Fjn+Cy4CnP8Fjn+Cy4CnP8ABY5/gsuApz/BY5/gsuApz/BY5/gsuApz/BY5/gsuApz/AAWOf4LLgKc/wWOf4LLgKc/wWOf4LLgKc/wWOf4LLgKc/wAFjn+Cy4CnP8Fjn+Cy4CnP8Fjn+Cy4CnP8Fjn+Cy4CnP8ABY5/gsuApz/BY5/gsuApz/BY5/gsuApz/BY5/gsuApz/AAWOf4LLgKc/wWOf4LLgKc/wWOf4LLgKc/wWOf4LLgKc/wAFjn+Cy4CnP8Fjn+Cy4CnP8Fjn+Cy4CnP8Fjn+Cy4CnP8ABY5/gsuApz/BY5/gsuApz/BY5/gsuApz/BY5/gsuApz/AAWOf4LLgKc/wWOf4LLgKc/wWOf4LLgKc/wWOf4LLgKc/wAFjn+Cy4CnP8Fjn+Cy4CnP8Fjn+Cy4CnP8Fjn+Cy4CnP8ABY5/gsuApz/BY5/gsuApz/BY5/gsuApz/BY5/gsuApz/AAWOf4LLgKc/wWOf4LLgKc/wWOf4LLgKc/wWOf4LLgKc/wAFjn+Cy4CnP8Fjn+Cy4CnP8Fjn+Cy4CnP8Fjn+Cy4CnP8ABY5/gsuApz/BY5/gsuApz/BY5/gsuApz/BY5/gsuApz/AAWOf4LLgKc/wWN7W7NtoXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z" />),
            category: 'common',
            attributes: {
  "contentBjy": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentSjD": {
    "type": "string",
    "default": "Team"
  },
  "contentnwx": {
    "type": "string",
    "default": "Projects"
  },
  "contenttac": {
    "type": "string",
    "default": "Calendar"
  },
  "contentRMy": {
    "type": "string",
    "default": "Reports"
  },
  "contentJjQ": {
    "type": "string",
    "default": "View notifications"
  },
  "contentgKj": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentVYT": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentkWO": {
    "type": "string",
    "default": "Settings"
  },
  "contentbqe": {
    "type": "string",
    "default": "Sign out"
  },
  "contentlac": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentklx": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentUXJ": {
    "type": "string",
    "default": "Team"
  },
  "contentAVb": {
    "type": "string",
    "default": "Projects"
  },
  "contentCSB": {
    "type": "string",
    "default": "Calendar"
  },
  "contenthPD": {
    "type": "string",
    "default": "Reports"
  },
  "contentLIt": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentcaJ": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentnSQ": {
    "type": "string",
    "default": "View notifications"
  },
  "contentqoi": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentZyH": {
    "type": "string",
    "default": "Settings"
  },
  "contentERc": {
    "type": "string",
    "default": "Sign out"
  },
  "contentDAY": {
    "type": "string",
    "default": "Dashboard"
  },
  "imageurlyzx": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-500.svg'
  },
  "imagealtNka": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlAhe": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtQlm": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlVbZ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtxqi": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgxrO": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgxPo": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgYed": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgtfF": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
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
            value={ attributes.svgxrO }
            onChange={ ( value ) => {
              setAttributes({ svgxrO: value });
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
            value={ attributes.svgxPo }
            onChange={ ( value ) => {
              setAttributes({ svgxPo: value });
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
            value={ attributes.svgYed }
            onChange={ ( value ) => {
              setAttributes({ svgYed: value });
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
            value={ attributes.svgtfF }
            onChange={ ( value ) => {
              setAttributes({ svgtfF: value });
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
        <div className="min-h-full">
            <div className="bg-gray-800 pb-32">
                <nav className="bg-gray-800">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="border-b border-gray-700">
                            <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlyzx: media.url,
            imagealtNka: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlyzx } 
            alt={ attributes.imagealtNka } 
            onClick={ open } 
            className="h-8 w-8"
          /> 
        )} 
      />
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4"> <span className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentBjy} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentBjy: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentSjD} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentSjD: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentnwx} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentnwx: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contenttac} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contenttac: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentRMy} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentRMy: newtext });
      }}
    /></span>

                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center md:ml-6">
                                        <button type="button" className="bg-gray-800 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentJjQ} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentJjQ: newtext });
      }}
    /></span>

                                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxrO }}
        >
      </svg>
      
                                        </button>
                                        <div className="ml-3 relative">
                                            <div>
                                                <button type="button" className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentgKj} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentgKj: newtext });
      }}
    /></span>

                                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlAhe: media.url,
            imagealtQlm: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlAhe } 
            alt={ attributes.imagealtQlm } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                                </button>
                                            </div>
                                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentVYT} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentVYT: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentkWO} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentkWO: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentbqe} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentbqe: newtext });
      }}
    /></span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentlac} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentlac: newtext });
      }}
    /></span>

                                        
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxPo }}
        >
      </svg>
      
                                        
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYed }}
        >
      </svg>
      
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-700 md:hidden" id="mobile-menu">
                        <div className="px-2 py-3 space-y-1 sm:px-3"> <span className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentklx} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentklx: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentUXJ} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentUXJ: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentAVb} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentAVb: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentCSB} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentCSB: newtext });
      }}
    /></span>
 <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contenthPD} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contenthPD: newtext });
      }}
    /></span>

                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-700">
                            <div className="flex items-center px-5">
                                <div className="flex-shrink-0">
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlVbZ: media.url,
            imagealtxqi: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlVbZ } 
            alt={ attributes.imagealtxqi } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium leading-none text-white">
                                        <RichText tagName="span" value={attributes.contentLIt} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contentLIt: newtext }); }} /></div>
                                    <div className="text-sm font-medium leading-none text-gray-400">
                                        <RichText tagName="span" value={attributes.contentcaJ} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentcaJ: newtext }); }} /></div>
                                </div>
                                <button type="button" className="ml-auto bg-gray-800 flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentnSQ} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentnSQ: newtext });
      }}
    /></span>

                                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtfF }}
        >
      </svg>
      
                                </button>
                            </div>
                            <div className="mt-3 px-2 space-y-1"> <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentqoi} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentqoi: newtext });
      }}
    /></span>
 <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentZyH} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentZyH: newtext });
      }}
    /></span>
 <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText tagName="span" value={attributes.contentERc} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentERc: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </div>
                </nav>
                <header className="py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <h1 className="text-3xl font-bold text-white"><RichText tagName="span" value={attributes.contentDAY} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentDAY: newtext });
      }}
    /></h1>

                    </div>
                </header>
            </div>
            <main className="-mt-32">
                <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"/>
                    </div>
                </div>
            </main>
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
        <div class="min-h-full">
            <div class="bg-gray-800 pb-32">
                <nav class="bg-gray-800">
                    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div class="border-b border-gray-700">
                            <div class="flex items-center justify-between h-16 px-4 sm:px-0">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        
      <img
            src={ attributes.imageurlyzx } 
            alt={ attributes.imagealtNka } 
            class="h-8 w-8"
          />
                                    </div>
                                    <div class="hidden md:block">
                                        <div class="ml-10 flex items-baseline space-x-4"> <span class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page"><RichText.Content value={attributes.contentBjy} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentSjD} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentnwx} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contenttac} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentRMy} /></span>

                                        </div>
                                    </div>
                                </div>
                                <div class="hidden md:block">
                                    <div class="ml-4 flex items-center md:ml-6">
                                        <button type="button" class="bg-gray-800 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentJjQ} /></span>

                                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxrO }}
        >
      </svg>
      
                                        </button>
                                        <div class="ml-3 relative">
                                            <div>
                                                <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentgKj} /></span>

                                                    
      <img
            src={ attributes.imageurlAhe } 
            alt={ attributes.imagealtQlm } 
            class="h-8 w-8 rounded-full"
          />
                                                </button>
                                            </div>
                                            <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentVYT} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentkWO} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentbqe} /></span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="-mr-2 flex md:hidden">
                                    <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentlac} /></span>

                                        
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgxPo }}
        >
      </svg>
      
                                        
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYed }}
        >
      </svg>
      
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-gray-700 md:hidden" id="mobile-menu">
                        <div class="px-2 py-3 space-y-1 sm:px-3"> <span class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page"><RichText.Content value={attributes.contentklx} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentUXJ} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentAVb} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentCSB} /></span>
 <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contenthPD} /></span>

                        </div>
                        <div class="pt-4 pb-3 border-t border-gray-700">
                            <div class="flex items-center px-5">
                                <div class="flex-shrink-0">
                                    
      <img
            src={ attributes.imageurlVbZ } 
            alt={ attributes.imagealtxqi } 
            class="h-10 w-10 rounded-full"
          />
                                </div>
                                <div class="ml-3">
                                    <div class="text-base font-medium leading-none text-white">
                                        <RichText.Content value={attributes.contentLIt} /></div>
                                    <div class="text-sm font-medium leading-none text-gray-400">
                                        <RichText.Content value={attributes.contentcaJ} /></div>
                                </div>
                                <button type="button" class="ml-auto bg-gray-800 flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentnSQ} /></span>

                                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtfF }}
        >
      </svg>
      
                                </button>
                            </div>
                            <div class="mt-3 px-2 space-y-1"> <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentqoi} /></span>
 <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentZyH} /></span>
 <span class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"><RichText.Content value={attributes.contentERc} /></span>

                            </div>
                        </div>
                    </div>
                </nav>
                <header class="py-10">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <h1 class="text-3xl font-bold text-white"><RichText.Content value={attributes.contentDAY} /></h1>

                    </div>
                </header>
            </div>
            <main class="-mt-32">
                <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                    <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"/>
                    </div>
                </div>
            </main>
        </div>
    </div>
</div>
            );
            },
        });
        