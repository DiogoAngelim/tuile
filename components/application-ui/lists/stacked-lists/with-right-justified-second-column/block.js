
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-right-justified-second-column', {
            title: 'with right justified second column',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCADyBaADASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAIDBAUGAQf/xAA8EAACAgECBQMCBQIEBQMFAAAAAQIDBBESBRMhMVFSkZIUQSIyYXGBFaEGI0JiJDOxwdFD4fAWU1STov/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAKhEBAQACAQIEBQQDAAAAAAAAAAECESESQQMEEzEUUaHR8GFxweEigbH/2gAMAwEAAhEDEQA/AP05AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAADkWf4gor58pYmXyce11WXKEXGLT0f3106+Drni8jEnKPEq5YvE5X2Zdk6YwhLlS6/hbT/AAta+fsejy/h4529SV66zLxqrIV25FMJz/LGU0nL9l9z7blY9NsarciqFk/yxlNJy/Zfc8nxynOyJZdcsOXNlXXtdWLzOa9Fr+P7aPVaI276Y15ucs7hV+a8nY6pRr1TW1Lbu/06P9vJv4fHUu/zj7/Q27VfEaZW5cLGqo4s4wlOckk9Un/3PvEc+vh9VU51W2u21VQjWk25PXTu14PP24mXVxy7OnjWXYlWRBuhQbb/AAJb4+ra/wB/udH/ABNVO7Ew3CvImoZcJz5EW5xik9WtOqJ6WHXjO1+xt0Kc6M63PIptxEpKK+ocY7m/GjZlrysaymV1eRVOqPecZpxX8nn8iiOVw6umqniNkfq6nOOXGbe3Xr3+2ncx5/D7VfxNUYc3juzGsdUIaK1LXeors32Ho4W++vyfc27uPxKjJzpY1Eo2KNSs5kJKUXq2tOn7GG7jEK8y/Ghh5d0sfbzJVQi0tVqvvr/Y0+EQjLj2VkUYFuLjzoilvq2KTTevQ+LJswOO8Tslg5l0buVy3VS5KWkdH17fcelj1WSdp/A6tXEcOzChmLIrjRPtOctq/br9zNG+mU4wjbW5TjvilJauPlfoeUt4bm0VcPtuhNRU7p2wrpV3KlN6r8P7ff7Gb6TKweE4ebiUZFl+POzSqVe2eyevTatfvo9PsW+Xw7Ze/wDf5/s29FPNxIQU55VEYOTipOxJNruv3I+th/U1g7XudDu369NN2mn9zzeTwu7Cuw1KFs6IYnLk68dX/wCY5ay/C+2uvc+vhubylTTXfu/pUq4ysjo9d6e1vsnp9tSzwPD9+o29NXmYtsLJ1ZNM41rWco2JqP7+CqsrGvnKFORVZOP5owmm1++h5i+tWQyL8Xh9uHTVw62FvMq5e5tdI/rpo+p9wKJX3cO+hwbcWVGNNXWyr2KTcNF1/wBXXqS+Xx1vZt6WGXjTnOEMiqU6+s4qabj+/g+05OPkbuRfVbt0b2TUtNe3Y8jw/AvjyIypyo20U2xnH6WMY6uLWjn/AKtX27no+BYsMXhGLFUKqx1Rdi27W5addf1M+L4OGE4uyV0AAeZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARZPatF3Zz87iOLgutZVkou1tQShKbenfsmb1y6pnD4xjZGRxThjx521bHbuuhBS2fh++qa69upmuHiWupj315FMbqm3CXbWLi/Z9TXu4ni0TuhZOSdDrU/wvpvekTkcTjlY2ZdrVk5XO4c6Y2V1662ay76dF3RrSxMp4+UvprtZV4SX4H1cX+L2+/gztzuVeqnONdcpzajGKbbf2SMcMmuydarU5Rtr5kbFF7dOn389TSzMPMyKMyu6+q6iyuarpVW1p/6dZa9fY4n0l39PqhRh5ENvDLa5R5ck+Z+HVfu3rp5KtyseuB5DK4O415vJxsjWOLXZVpvf+b11a8y6IyZOLmT43OyxXqbtrdNkKJT0jotVu3KMV31TRNp1X5PXQm09H2MxrpatI2DcejCgAK2AAAARZbXXpzLIw3PRbnpqBYIstrr05lkYbnotz01LAAAAAAAAAAAAAAJtrhdVOq2KlCcXGUX90+6PsIRrhGEElGK0SX2R9A32AAxZGTTjQ3X2KCfbX7/AMAZQYMbLx8rXkWqenddmjOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARK2EbIVyklOeu1edO4lbCNkK5SSnPXavOncCwAAAAAAAAAAAAAAAAAAaTWjMbq8MyAJZL7sfK/3f2HK/3f2MgJpOiMfK/3f2HK/wB39jIBo6Ix8r/d/Ycr/d/YyAaOiJjBR/coArUmgAAAAAORxnCWRdVN5NVXTbpZLT+Udc4WZwfMycqy3m1aSk9usn0X2XYsSr4nw9XfTaZdcdsFD/Mlpu/VeWdemKhRXBS3KMUt3np3ORPhOTZw6uidlTsrsbi9Xootdu3k3+GY9+Licm+cZOMnt2tvRf8AzUUaHEJzfGlU45tlf06lsx7XHR7n1f4kZJZOdG9YuFXCKhjRt/4lylLVtra2n+nk2sjh6vy1kxycimzZy3y3HRrXX7p+S6sONdzudtlljqVTcmuqTb16Lv1A04cQysuVEMKFMZTx43zdurXXoorT9n1NSPFbpVLMdUFasO2zTWWicZpaaa6f9zYyuGTrWNHEqlYqquVuV7qm14bS0aKxeC1xwYU3zlv5EqZbH0SlLV6aocD5PieViO762ul6Y7vgqtfs0tr1/ddTFVxyyEch3xrs5VPNTqjKK1102vd+66nSvwKMixzt3S1plS469HFtN/z0Ihw2GyyF+RkZEbK+W1bPoo/wl1/XuOBzv63kRpyd0abJ1082MoQmorrptev7mbJycnGt5l8aXdDFusWxy2rTbotNev7/APQ2HwqE6LarsvKtjZDZ+Oa/Cv06aa/q9WZ8rBqypOVkppumdP4Wu0tNf56DgaP9Ty8bdLNrpcZY0r4KrXVaaaxev7rqZKcvPhnY2Plxx9t8JS1r11WiXTr+/c2L8GuzbL80oUyqjGf5Wpad/ZGhw7huRXn1X3Qdcaa5RSle7dddOi1XRLqB2gARQ8xxJ87jMoZM3CtSUdfTE9Oc7ivDY5kOZXor4rp/uXgsSuKlDE4tBYdvMippJp6669107nqzkcI4VyNMjJX+b/pj6f8A3OuKR5rMyXG3P1nnc9XbKHXOSrTcY7U+u3u/ubGVxnIx7rKUqXPGhF2KUZN2Sa1ai10X8nSnw6iyjKpnuccqW6fVdHol09kyLOGRnY5xysmuU4xjY4TS5mi01fTo/wBVoNwaeTxTNg8u2mqh0Yzg2p6qUlKKen6PqXPiOZjO+rIrondFV8rl6qLc5OKT18NG3bw2m2vKhKViWS4uejXTRJLTp+h9yOH0ZM7pWOetsIwej002ttNfrqxwOfm5ufVjZlE5UxyKqVdGytPRx6p9H2fQ+5fFcnGtjj7sfmxqVk5ShNqTbeiSXbt3ZuR4ZVy8iN1t18siHLnOyS12+Fokl3Z8lwtPZKOXlQtjDluyMlunHXVa9NOmvfuOBtYl/wBTiVX7XHmQUtr+2q7GUmuCrrjCLk1FJJyer/llEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHlL5Y8uJZLzHc0rJKPL017/qY7/oFX/wv1PM16czbp/Y283hObPMunXUpRnNyTUku7/VmD+j5/8A9j/+4/8Ak2y9LhScsKiUnq3XFt/waNdTz83M5198IU2KuuFdjhp+FPd07vr9zoY1bqxqq5d4QUX/AAjWv4dGzInfVkX49liSsdTS36dtdU+v6mWmpk3WYGRTO+2V/JxbpSfbfo46a/qZI5udTbGvLppnK2qVlcaddd0Untev79zPHheLGFcFGWyFU6tuvRqWmuv316Hynhddct08jItkq3XBzn1hF99NEuvbr36BHOnxO2/heXK5483CpSdcHOEoP7qS11/laGfJ4jm1SzLYV0PHxLEpJ67pLRN6ddNepnfB6ZwtV+RkXSsq5W+clrGOuui0X93qZreH0205dUpWbcp6z0a1XRLp0/QcDTy+I5sYZt2LXj8nEbi1Zruk0k2+nZdf5NzMy5Y+CroQUrJuMYRb0TlJpL+OpzuJ8MyMm/IjTSlC9LWavlGOummsofdr/wAHVyMWvIxHjW7tjSWqejTXZp+dUBzsjiWbiRvquronkQjXODhqoyUp7dHr2Zt4WRkyy78XMVW+uMZxlUmk09fP6on+lVShYrbr7Z2OGtk5LdpF6pLpolr+htRx4Ry55Kct84Rg19tE2/8AuFa/FZzrx6nXOUW8ipNxemqc1qjTu4vZVxKNO/GlCV6p2R3Oa16at9k/0NqXC655XOlfe4c1W8nctm9fftr+umpL4RS7t/PyFBXc9VKS2qeuvjX+NRwjBXxHObrusro+nlkujRa7vzOKffTuZY8RteFTdshusyuS1o9NOY46/vojYXD6VRCndZthdz09Vru3bvHbUwvg9POU+fkKEbufGpSW1S118a6fpqOBgXFrFxKFDnjTrnc6tte5yj30bl2+3Y+V8RzvonnWwx1RGza4xUt21T2t9/5/g2K+D012VSV+RsqsdldTktsW9f01+7Mk8TkcKsxcevnblJKM5aa7m29X/LHAvEyZ5F+UtI8qqzlwa7tpfi/u9P4NLJx1/UsfHx78lTcuda/qJtRgn20106vp7m9w7F+iwasdy3SgvxS9Un1b99SZ4rrWZdjuUsm+PRyfZpaRS8L/AMhWzZGUqpRhPZJppS012vycaE542RkyxLbrq8bHlzpWWOalalqktfv3108o6sKp/Rqmds9/L2OxP8Wummv7mvhcMhhxVcMnInUk1yp7XF6+dIpgamOrMe3htiyLrHlJq1Tm5KT2OWqT7aNfb7H2uudfFaKacm+66Os8qUptx2tPRbeyeumiX2RtYvC6sa6uzm3WKmLjTGySarT8dP46/YnE4WsSxyrzcppzc5Rk4tTb8/h1CNCmy76PF4k77nddkRjODm9rjKe3ao9uiO+aEOFUQvjNWWuuFjthS2tkZP7rpr99e5viqAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAnZD0R9hsh6I+xQAAAAaH9ZwHfOmNlkpwm65baJtKS6aapaG+ee4Nj5k8vPspzuVTHiFm6rlKW7qter6rU6+HhjlLcu358qj0IPJSxdOG8YzKI2PKWVbDfFvdGvetyS/bUwZTxVRxJcHk3g/Rpz0bceZuWnf76dztPLS+1+n7ffg29lbZCmqdtklGEIuUpP7Jd2fFbB081STrcd25eO+p5fN4fTRk5mJRCTrt4ZK1wcnLdZGXSX7nW4V9N/wDTlf0m3l8l66erTr/fUxn4OMxmUptnxeL4OZZCGPZZNz/K+TNJ/fu1obx5T/D+XW8PHo/rG+XJa+l5cVp+F9NdNen7kcNxo4tfA8nG3K/IjKNjcm962NpP9jefl5LZLrX9/t8v1NvT5OVViulXNrnWqqGi1/E9dP8AoTm8QxcF1rJnKLtbUFGEpN6d+iTPIY/0TlwlxlY+IvMj9UpuWuur13a9Nde38ne45kU4vFOE35FirqhZZuk+y/BoL5eY5THnv9DbpYedi50JSxblZteklo04v9U+qNg8pmW3ZsuK8Q4TGxV/TRqjYotcySesmvv0j01MGHiLLrzacHIpcHjqUYY/M0VqesW3Ls+mnkfDTW96/j29zb2RhysqrEhCdzaU5xrWi16t6I8nkXZHEOH38WgnCu62qqSev4aor8Xbrpub10+yFKUcWaqupsx/rsfZGlT2QevXRy/jsWeV17029kDxua6+bnOcrP6ysvTFWst2zVbdF226amPNeDzuLu6Vizle/pdrlru0Wm3T766a/poSeV33+n7fTn3NvbA8TxTny4jlfW3U03qNfIlPmbl0X/L2/wC7U7PDcWu3/EXEMi9Od1Lq2PVpRbrWrSM5eXmOPVb23/z7m3dAB5lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABM5bV+pp5ObRiqLysqqlS/LzLFHX9tTZu/Mv2PP8crtt4twqFHJ5jlbpzYbo/k+61Rm1x8TKx2qr4X1xtptjZXLtKEtU/5RjszqK5WRsyIxde3enL8u7pHX9zg8QzbOHZV1WReqt3DnylUnGDtTlrtX2fVGlbOU6cyc5OUpV4DbfdvUztzub2Tm0m3JpLu2zH9VXzoUq5OycHOMU+8Vp1/ujnZ0c+/Gzqbaqo0OqfLlVZLe/Gq0+/7nDhlTq4ZQsXKtcY8Ltk/xv8M1t/6PVfoXZc9PY7pep+43S9T9zx+V9XTXmuPEszWjFryI62f63rr/AB07djJk5md/W5x+qVMlbWqa5WSSnBpa6QUXu169den6aDZ1vXwseukjKay6vobJqO+F2AArYAAAAAAAAAAAAAAAAAAAAAGDHxasad0qk9brHZPV6/i0S/7GcF3ZwABM5wri5WSjGK7uT0RBQIrtrtWtVkZrzF6lgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxySaTaTfZeQ5JNJtJvsvIH0AAAAAAAAAAAAAAAAAAfJRUlozG6n9mjKCaS4ysPKl+g5UvKMwGmeiMPKl5Q5UvKMwGjojDypeUOVLyjMBo6IiFaj1fVlgFak0AAKAAAcnjOFl5V1Usd6witNu7Ta/J1jz/EMLiWVlzny24KT2fjjol9vuWJWfimBm3/T8ufM2RSl+LT8X3kdaqMo0wjZLdNRSlLy/JxLsHPu4dTGdbeRVY0vxrXbp3118nT4XHJhhqGXHScXotWnqv4FGlxDMnVxZUSy7qKuQppVUqbctzXpf2MkuI31zjRj488uSoVznOSrbTbXVad+ngzZGFkTz/q8bKhVLlKtxlVv16t6915LqxJxypZFtynOVKqekNq6NvXv+vYDD/VJ2umOFiu+VlKuac1HbF9uvnv7GtHjG+Ky+VYksWy3lOa0/DJLr07k34d2F9N9O8pyroVMraIxe5LsnGXb79T7i8GsfD4V3Wcubxp0uOm7bulu11166DgbC4s6nb9ZiyoUKedHSak5R100/R9V0/Uirjdel31Fca5VVc7Su1Wax7adOz106Gxl8Nhl2OVk3sljypcUuvVp66/wYYcJcqrq8q6ucbKuX/l0Rr/l99X/b9BwMf9dUa73ZRFWVVc1RhcpqUddO67PqXdn3U2Ky+idco49tvKVqaajp36d+v8fqfHwiyzHuqtyatbK+WnXjqGnXXV9dW/5SNnOwPq5ylzdmuPZT+XX82nXv9tBwMMOLShueXiuiHId8HvUnKK01X6PqiqOI5EsujHycJ0u6MpRlzFLotOj6d+pWVw9XKLk96hjzp5fbfu0+/wBu39zS4fRl2cSouv8AqtlFco63xitNdNEtO/bq/wBgO4ACKHmuKTnl8W+nnNQhGShHXsv1PSnJ4xwx5GuRQv8ANS/FH1L/AMliVza1Zwzisa4W7luSlp/qT8o9QcLg3C5bo5WQmtOsIP8A6s7opHnsriVld2av6jKu6qzbTjquMt/4U0u2vVvTubWRxv6ecoSoi5UwjK9c1RcW1rpFP8xsW8MjbRmVyteuRZzYyS61ySSTX7OOpiu4TZZfO6GRUp3RirXKhS1aWmsdX0/bqOBORxmdU8iUMR2UY7hvsViTakk+i069y3xWdSvjk4kq7alBxhGalv3PRdf3Lu4Xzas2tXaLKceu38uiS89e36H3L4asm26znODshCMWo9YSjJyT/Xq+w4GvlcUyasXLTxY1ZVNasUXZui4vXqnp1007FZHF548oVSx63dy+ZZF3qKS16JNrq+hkfDJ3QyXl5PMtvq5W6MNqhHr2Wr+717kW8LusnC76mrn8vlzlPHUoy0b0aWvR9fI4HQx7oZOPXfXrssipLXwzIRTXyaIVJ67Ipa6Ja/wuhZFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5m+3ncSueRnTo5U5KtqLenXTpp26GPJnGKjbVxS262D/CnGSa179Wz5nYWV9de449slKyUk4wbTTZg+iy//wAW7/8AWzbL1uJOVmJTOb1lKuLb/XQ0k8rNy8mNeVLHqomq4qEItylom29U+nU3cSEq8SmE1pKNcU1+uhq24ORHKtvwspUu5LmRnXvWqWm5dVo9DLTFblX4mRQ8yyLUMa2dvLXSW1x0ennT/qXDidkZbcvElS5VSthpNT3KPVr9H1XQS4VGyNcLb7LIxonVJz6ylu01ev8AB9q4fkc2NuTmuyddbrqlGtR2695Pvq+i/QcI1p8Usu4XkZDpdcI1qcZ03Rk/2106P+GZb+LW02ZDWG5UY01GyzmJdGk9UtOumpjfBJTjkO3Ir5l1XKcq6VBd9dzWvV+xs3cN5uPnU87T6uW7Xb+T8KXnr2HAxZXFbafqZ04bupxdVZPmKP4tNdEv01WrNzKy442H9Q4OTe1Rgu8m2kl7s4/E8XKlZl0YteUoZPXSGx1yk0lq2+se3VffQ6+ViLJwvp3NwktrjNLrGSaafugNS3i1mPXcsjDcb6lCSrjYpKcZS26p6eTYw8yy++6jIx+RbUoy0U9ycXro9f4Zgnwqy5WzycpTus5aUo17VGMZbtEtfu/1NyGNtz7MrfrvrjDbp20beuv8jhWPiV1lFFUqpbXK+uD6a9HJJ/2MF3FZUZ0KLcdRhO1VRlzY7m32e3xqVdw/IuyU55jeMrlcq3D8Wq6pbte2q17Gu+CN5XMWRBQ+pWRpyVvb110ctew4Rkr4tbKyDlhuNEr3RzOYn+LVpPTTtqZVxJPFqv5X/MyORpu7fjcdf7ahcN0xa6ed+TJ5+u3v+Pdp3/jUw/0m7fCKzEseGRz418rrru3aa69tdfsOBf8AVJRz4Y9uPGEbLHXGXNTlr9m4/ZPQivi1ssf6meHsx+Yq3N2pv821vTTsRTwSVV9U/qIOFVztX+St8tdekpa9e5nniLG4LbiuM8hSU1pCPV7m35+2v9hwNnHyefkZFcYaQokob9fzPTV+2qNLJWXXnY1NOfdKds90oShDSNa7/wCnXwl+5tcLxp4uBXXc91z1nbLzJvVkzx7KZ5mZF82+delUdv5Ul0iv3fUK27N/Klytu/R7d3bX7anJWTkYmVdCWTLKjTjytu3RSUJLqktF9+vRnShG94ajKxRvdejnt1Slp30/c08Hht+NXKm3Jruqs3cxclxlNvu3LcwMePdl1W4Mr8jmxy01ODikoS27lt066dNOup9jPMp4jjUzyudZbulbUoJQhDro101XXRdX1MmLw22q6iV+VzoY0XGmOza1qtNW9er06HzC4fl42RO2WbXa7Z7rG6NJS/TXd0S+wRrVZeW8bH4hK/Wu65QdG1bYwctq0emuvZ9ztnMr4VOE663k64lVvNhVs6p66pOWvVJvXsdMVQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAE7F5l8mNi8y+TKAAAACIXVTU3C2ElXJxm1JPa13T8Ms89g5NGNj8bhkWwrnHKum4ykk9Glo9P1OmGHVKO/XZC2uNlU4zhJaxlF6pr9yjx85ZNPD8BK+yNVeEpzppyFVZH/fo/zLT7DLzszKyLOTkXQhXi12UyeRGnXdHXfJP83Xpp2O/wtt4qbewIlbXG2NUrIKyabjFvrLTvojh4H1Gbxicr8u6MaqKLHXVZ+CUmm3+66fyZOMyceMYUotqSx8hpr7fhRz9H/Lp3239Nm3bPkZRnHdCSkn909TzOCsmM+Eb8/KsXEKJq1Ts7fg1Tj4a8mjiW3Y/AcCrHvtX1GROFv+fscdHLSKb/AC6//O5v4b9fzn7G3tTDZl49WTXjWXRjdb+SGvVnmq7c66nFxrM2yG7OlVvqvU5qG1va5Lu//Y2J48MT/EdtssnKao4erG3Y5N6Nrr57a6eepPh5Lq029GDx2JxHLpyHKm3IsVmFZdGN16tcmlrF7V+X9jbqvljYH1WPxa3JyJ4crXTOW9OSWu5L/To/sXLytnc29Ma9+dh41iryMuiqbWqjZYotr9mcLgF2Y86pWXynVdj75Rsyo2ty6fiSXVL7adjZuljR/wAU2vLlSofRR/5rWn535M3wOnK43njsbduMozipQkpRfVNPVM+njlkXUcNlHAcoYl/EnCuUZ8v/AC9O0ZP8qbT6/uZVbxCWG6fq1+HK0UPrI8ycduuzmL7p/wAmr5W/M29PZkU131UzsUbLteXF95aLVmU8xRn3TnwxY9uRN7siMoWyTcpRi9E2uktH9zXw8tyt4TOHFr7r8i3XIpdmqXR6rb/pSfTT7j4a/P8AOfsbevB5Th9mXXicKz5Z2TZPIynTOuc9YOLcl289O5j4fm8RuysbJnc4ysynXbCeTHao6tbVX3TXuL5W88+35/Bt68HG/wAOV22Y0sy/LyLZTnZBQnPWMUpvsvPTudk4eJj0ZXHfsoADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPk5KKMTsl5Pt35l+x5z/EdP1HEeF1fTV5Osrf8qyW2Mvw+dGZtcc8rHoeZPyfHfprrZFaaa9uh52zNs4dO7FSqxYVcOd1dSaajZul2bXX7GhfZO6vOtses5wwJSfluRNud8SvZcyfk+c57lDetzWqXTXQ5WfkZduLnUrFux4xqm4X7otS08LXXqciOXkY+FjWQujZZHhdlqscIuSa26LXT7f306ja3Ox63mT8jmT8nlMjN4vRDLl9fCTx8evIX+RHrrrrH9un7/qZb+LcQfFLo06Rqptrr5cnXGMlJJvVykpa9emiGz1HqYWavSRkNZd+hsmo7YXYACtgAAGvfgYeRarb8Si2xdpTrTfubALLZ7DBkYeLlOLycam5x/LzIKWnuL8LEyHF5GLTa4flc61LT9tTOCzKzuIjVXGyVka4Kc0lKSXVpdtWJ01WTU7KoTlFNJyim0n3X8lgm6Max6I8rSmtclaV6RX4Fpp08dCHhYjhZB4tDja9048taTfl+TOB1X5jDDExq4Vwrx6oxqe6CUElF+V4LdVTtdrrhzHHY57Vq4+NfBYG6NejBw8eanj4lFUlro4VpNa9+x9ow8XHnKePjU1Sn+Zwgot/voZwW5ZXuMGPh4uNKUsbGpqlL8zrgot+x8vwcPJsVmRiUWzS0UrK1JpfuzYA6st72Mc6KbKORZTXKrTTZKKcdP2MbwMJ4yx3iUchPVV8tbdfOhsAkys7jDHFxoKtQoqjyteXtgls176eP4Ofj8EVeXXfdmW3qqTnCMoRX4tGtZNLWT6/c6wNTxMpvVGJYuPGuuuOPUoVy3QioLSMvKX2fV+5Kw8VZLyVjUq9/+ooLd79zODPVfmJqqrphsqrjCOre2K0XXqygCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5OKkjXnjRlZCyVcJTr12SaWsde+j+xsgmmbjK0r8CjJlGWRi02yjrtc4KWnuPoKNGvpadJKKa2Lrt/L7fbwboGk9OMDrk1o46owLhuNGGyOHQo7XHRVx00fdfszeA0enGnLBpmpqWNVLfFQlrFPdFdk/K/Q+TwKJ3wvni0yth+WxwTlH9mboGj04xwr0esjIAVqTQAAoAAByeM/wBQ51X0nM5en/p9936/odY8/wAQu4nZlzVUMiNcJNR2RaT/AF6dyxKz8U/qf/D8nf8AlW/lev76/odarfyYc3TmbVu07a/c4l0+I28OpsUciF0LHGSimnJaaptHT4Xbfbhp5UJRsi9v4o6N/qKMWRkZkuJ/SYsqIxVKsbsg5Nvc1p0a8Hyvimymz6qpq+u7k8ur8W+Wmq2/uuvU+5OPmrif1eIseSdKratlJaPc3r0T8mtdwe23GUrJ1W5Lv581LVQl0029OqWnZ/oBtf1WjlRkqr3ZKx1cnat+5LXTvp269w+IRduPKUp01zrslOFlejW3TXXr00/nU1f6XasN1/S4Tcrd8qtZ6aaaLSXfd+ugXCrnRVHIs3xhVdCaUnKSU9NFFvvolp1HA2aeL023VVOjIrd0XKtzhopJLXXuMTi1GVZTCNN9aui5Vyshopad0upzcSWTl5+HGVisjj1zTaolXt1jot2v3/RfqdGnAtrhwyLlDXEWk9G+v4HHp08sDogAih5/jWVdZnLDqm4xWiaT03N+fdHoDjcc4fO2X1dC1lFfjiu/T7liVz4TyeE5sYTn+Ho5RT1TR6k8zwvBtzr1fc5OqDWspPXdp9j0wpHHyeI5Nd2bsuxIQxWtI2Re6f4U++79dOxnlxeqFcJSovb5UbbVCO7lJrX8X9/YxZPBo5M86ycaubdKMqbNNZQaikuunlGHJ4Rfdk2ZDqxbbL64qxWTmlCSWmq07r9Og4G3fxnGpssjy75xqUZWWQhrGKktU+/YqPFsfbdK2u6nlQU2rIaOUX0TS/foYLOF2vHz6q5VJZFUIV90lpHTr4XuXncNtyr7ZxshFSohCLfXSUZ7lqvHYcD7bxeMcbJnHGvjdRXzOVZFJtee/byU+KwjXU3jZErbIcx1QinKMe2r69jHLAysqWTZlyphO3GePCNbckk+7baX3MF/Csi2yjIsqxbLo08mcJWSUVo9U00tf40HA7FF1eRRC6qW6E4qUX5RZhw6PpsSqnSC2R00gml/GpmIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHnFkZeRmWXLMx6ZVtwirGo9Nft06nozxeTGUMq2Mk01N9H+5qJXQyLsymccp5+NbOP4Uq5JvR/poeirlvrjJ9NyTPEd+x7alNUVprRqK/6CkaKyM3KvyI4borrony9bIuTnJLV9mtF1/U+LiFleVty4xphHFd1kdd21qWj6ruHj52Nk5E8H6edd8t7jbJx2T00b6J6rojHdwq/I3K/IU3PF5MrNNHu3a66LpoQZ4cWocbHdXfRsrdulsNHKPlf+O/Um3iWuLZNV340oSh/zak9VKSXTro/foQ8POyLXdlfSqcaZVwgk5Rk5aauWunTp2MEOE5Kx761yqYzdbjTGyUoR2yTb6rpr4Q4G0+MUK6VfJv2xu5Mrdi2Rlrp1ev7DI4zj0O1unInXVLZO2ENYqXjXUifDrpYWVQpV7rsnmxer0S3J9enfoc3iCvSysDHm2rrt6rdEtzbkm9Jfl269dRwPQZeTXiU823c1qoqMVq5N9kl5NV8XojVKc6r4zhZGuVTh+NOXbpr11/QzcRxrMmmvkyjG2qyNsN3ZtfZmnLh2Vdc8i+VMbZXVTcYttRjB699Or6sK3cPMhl8xKuyqdUts4WJKS6arsz5n5M8aNDrUXzL4Vvd4b0Yx8adWfl5EnHbds2pd1otHqa12Ln5GTXC6dH01eQrozWu/RdVHTTTv99QMy4lX9VGiVN8FObhCyUNISkvsvv9n9jHjcYoybKoxpvjC5uMLJwSi2temuv6M06+EZazKbbHTJ13uyVrsk5zXXRaaaLuvY2aeHXQwsClyr3Y13Mm03o1+Lt0/VDhGzHiNEsei5Ke2+3lR6dddWuvsTXxKueVGh05Fe+TjCycNIza+y+/2fdGnXw7Oisejdj/AE9GTzVLc90lq3pppp9zHjcIyoZuPdc6ZOqyUpW75OdiaenR9F3XQcDcx+MUZEKrFTkQrumoQnOKSbev6/pp/KNujJhkTujWpf5M+XJvs3om9Pc5uRjvE/w3HHtet1UEoOtOWti6x06a90je4bRLHwa4Wf8ANes7H5m3q/7sKxYuXkz4hdRlV1VQjVGyKUtWk211fb7GPA4ldl8QnW64xxpVcyp6PdJbtNX+j7r+DJkcPeTlZErJuNV+PGp7HpJaNt/b9TW/p9mDlTzo5N1tdOM0oSktW1q9NEu3/cI61jlGqTrjvmk3GOumr8anNWdk42TKvMdNmmPK+XKi069Ps9W9U+uj6djehK+WGpbYLIdeu167VLTt+2pz8HBy4QurzI48vqE+dbGyTnJtadnFLRePsFXj5mYrcR5UaeXlp7VBNOt7dyTbfXon46iOVnVZeNXkqj/iJSXKgnurSTeuuuj+2vRdz5i4WZzsT6udLrw4tQcG9bHptTaa6dNf5PmFi8RrzZ5GTDFnOx6SmrJawh9oxW3t/wBQia+I5Uq6cyUafpLrlWoJPfFN7VLXXTv9tDrnIq4blRVOJKdX0dN3NjJN75JPcotaad/udcVQAEABPVaoAAAAAAAAAAAAAAAAAAAB8jFRWkUkvCPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADei1YGOv80l9jIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAx2fmivsAB/9k=" />),
            category: 'common',
            attributes: {
  "contentpVh": {
    "type": "string",
    "default": "Back End Developer"
  },
  "contentDda": {
    "type": "string",
    "default": "Full-time"
  },
  "contentdUW": {
    "type": "string",
    "default": "\n                Engineering\n              "
  },
  "contentZri": {
    "type": "string",
    "default": "\n                Remote\n              "
  },
  "contentldf": {
    "type": "string",
    "default": "\n                Closing on\n                "
  },
  "contentkIy": {
    "type": "string",
    "default": "January 7, 2020"
  },
  "contentMbL": {
    "type": "string",
    "default": "Front End Developer"
  },
  "contentDRb": {
    "type": "string",
    "default": "Full-time"
  },
  "contentfBi": {
    "type": "string",
    "default": "\n                Engineering\n              "
  },
  "contentYIV": {
    "type": "string",
    "default": "\n                Remote\n              "
  },
  "contentijP": {
    "type": "string",
    "default": "\n                Closing on\n                "
  },
  "contentaag": {
    "type": "string",
    "default": "January 7, 2020"
  },
  "contenthSf": {
    "type": "string",
    "default": "User Interface Designer"
  },
  "contenttKJ": {
    "type": "string",
    "default": "Full-time"
  },
  "contentfcf": {
    "type": "string",
    "default": "\n                Design\n              "
  },
  "contentxNH": {
    "type": "string",
    "default": "\n                Remote\n              "
  },
  "contentvzw": {
    "type": "string",
    "default": "\n                Closing on\n                "
  },
  "contentfsV": {
    "type": "string",
    "default": "January 14, 2020"
  },
  "svgysd": {
    "type": "string",
    "default": "<path d=\"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z\"/>"
  },
  "svgTCD": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z\" clip-rule=\"evenodd\"/>"
  },
  "svgCBw": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z\" clip-rule=\"evenodd\"/>"
  },
  "svgHGj": {
    "type": "string",
    "default": "<path d=\"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z\"/>"
  },
  "svgAiq": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z\" clip-rule=\"evenodd\"/>"
  },
  "svgXPy": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z\" clip-rule=\"evenodd\"/>"
  },
  "svgYVa": {
    "type": "string",
    "default": "<path d=\"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z\"/>"
  },
  "svgHAz": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z\" clip-rule=\"evenodd\"/>"
  },
  "svgnzz": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgysd }
            onChange={ ( value ) => {
              setAttributes({ svgysd: value });
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
            value={ attributes.svgTCD }
            onChange={ ( value ) => {
              setAttributes({ svgTCD: value });
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
            value={ attributes.svgCBw }
            onChange={ ( value ) => {
              setAttributes({ svgCBw: value });
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
            value={ attributes.svgHGj }
            onChange={ ( value ) => {
              setAttributes({ svgHGj: value });
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
            value={ attributes.svgAiq }
            onChange={ ( value ) => {
              setAttributes({ svgAiq: value });
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
            value={ attributes.svgXPy }
            onChange={ ( value ) => {
              setAttributes({ svgXPy: value });
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
            value={ attributes.svgYVa }
            onChange={ ( value ) => {
              setAttributes({ svgYVa: value });
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
            value={ attributes.svgHAz }
            onChange={ ( value ) => {
              setAttributes({ svgHAz: value });
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
            value={ attributes.svgnzz }
            onChange={ ( value ) => {
              setAttributes({ svgnzz: value });
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
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
                <li> <span className="block hover:bg-gray-50">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-indigo-600 truncate"><RichText tagName="span" value={attributes.contentpVh} default="Back End Developer" onChange={ (newtext) =>  {
        setAttributes({ contentpVh: newtext });
      }}
    /></p>
            <div className="ml-2 flex-shrink-0 flex">
              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"><RichText tagName="span" value={attributes.contentDda} default="Full-time" onChange={ (newtext) =>  {
        setAttributes({ contentDda: newtext });
      }}
    /></p>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-500">
                
                
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgysd }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentdUW} default="Engineering" onChange={ (newtext) =>  {
        setAttributes({ contentdUW: newtext });
      }}
    /></p>
              <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                
                
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTCD }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentZri} default="Remote" onChange={ (newtext) =>  {
        setAttributes({ contentZri: newtext });
      }}
    /></p>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              
              
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCBw }}
        >
      </svg>
      
              <p><RichText tagName="span" value={attributes.contentldf} default="Closing on" onChange={ (newtext) =>  {
        setAttributes({ contentldf: newtext });
      }}
    /><time datetime="2020-01-07"><RichText tagName="span" value={attributes.contentkIy} default="January 7, 2020" onChange={ (newtext) =>  {
        setAttributes({ contentkIy: newtext });
      }}
    /></time>
              </p>
            </div>
          </div>
        </div>
      </span>

                </li>
                <li> <span className="block hover:bg-gray-50">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-indigo-600 truncate"><RichText tagName="span" value={attributes.contentMbL} default="Front End Developer" onChange={ (newtext) =>  {
        setAttributes({ contentMbL: newtext });
      }}
    /></p>
            <div className="ml-2 flex-shrink-0 flex">
              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"><RichText tagName="span" value={attributes.contentDRb} default="Full-time" onChange={ (newtext) =>  {
        setAttributes({ contentDRb: newtext });
      }}
    /></p>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-500">
                
                
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHGj }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentfBi} default="Engineering" onChange={ (newtext) =>  {
        setAttributes({ contentfBi: newtext });
      }}
    /></p>
              <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                
                
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAiq }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentYIV} default="Remote" onChange={ (newtext) =>  {
        setAttributes({ contentYIV: newtext });
      }}
    /></p>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              
              
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgXPy }}
        >
      </svg>
      
              <p><RichText tagName="span" value={attributes.contentijP} default="Closing on" onChange={ (newtext) =>  {
        setAttributes({ contentijP: newtext });
      }}
    /><time datetime="2020-01-07"><RichText tagName="span" value={attributes.contentaag} default="January 7, 2020" onChange={ (newtext) =>  {
        setAttributes({ contentaag: newtext });
      }}
    /></time>
              </p>
            </div>
          </div>
        </div>
      </span>

                </li>
                <li> <span className="block hover:bg-gray-50">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-indigo-600 truncate"><RichText tagName="span" value={attributes.contenthSf} default="User Interface Designer" onChange={ (newtext) =>  {
        setAttributes({ contenthSf: newtext });
      }}
    /></p>
            <div className="ml-2 flex-shrink-0 flex">
              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"><RichText tagName="span" value={attributes.contenttKJ} default="Full-time" onChange={ (newtext) =>  {
        setAttributes({ contenttKJ: newtext });
      }}
    /></p>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-500">
                
                
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYVa }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentfcf} default="Design" onChange={ (newtext) =>  {
        setAttributes({ contentfcf: newtext });
      }}
    /></p>
              <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                
                
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHAz }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentxNH} default="Remote" onChange={ (newtext) =>  {
        setAttributes({ contentxNH: newtext });
      }}
    /></p>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              
              
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnzz }}
        >
      </svg>
      
              <p><RichText tagName="span" value={attributes.contentvzw} default="Closing on" onChange={ (newtext) =>  {
        setAttributes({ contentvzw: newtext });
      }}
    /><time datetime="2020-01-14"><RichText tagName="span" value={attributes.contentfsV} default="January 14, 2020" onChange={ (newtext) =>  {
        setAttributes({ contentfsV: newtext });
      }}
    /></time>
              </p>
            </div>
          </div>
        </div>
      </span>

                </li>
            </ul>
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
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" class="divide-y divide-gray-200">
                <li> <span class="block hover:bg-gray-50">
        <div class="px-4 py-4 sm:px-6">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-indigo-600 truncate"><RichText.Content value={attributes.contentpVh} /></p>
            <div class="ml-2 flex-shrink-0 flex">
              <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"><RichText.Content value={attributes.contentDda} /></p>
            </div>
          </div>
          <div class="mt-2 sm:flex sm:justify-between">
            <div class="sm:flex">
              <p class="flex items-center text-sm text-gray-500">
                
                
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgysd }}
        >
      </svg>
      <RichText.Content value={attributes.contentdUW} /></p>
              <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                
                
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgTCD }}
        >
      </svg>
      <RichText.Content value={attributes.contentZri} /></p>
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              
              
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCBw }}
        >
      </svg>
      
              <p><RichText.Content value={attributes.contentldf} /><time datetime="2020-01-07"><RichText.Content value={attributes.contentkIy} /></time>
              </p>
            </div>
          </div>
        </div>
      </span>

                </li>
                <li> <span class="block hover:bg-gray-50">
        <div class="px-4 py-4 sm:px-6">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-indigo-600 truncate"><RichText.Content value={attributes.contentMbL} /></p>
            <div class="ml-2 flex-shrink-0 flex">
              <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"><RichText.Content value={attributes.contentDRb} /></p>
            </div>
          </div>
          <div class="mt-2 sm:flex sm:justify-between">
            <div class="sm:flex">
              <p class="flex items-center text-sm text-gray-500">
                
                
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHGj }}
        >
      </svg>
      <RichText.Content value={attributes.contentfBi} /></p>
              <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                
                
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgAiq }}
        >
      </svg>
      <RichText.Content value={attributes.contentYIV} /></p>
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              
              
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgXPy }}
        >
      </svg>
      
              <p><RichText.Content value={attributes.contentijP} /><time datetime="2020-01-07"><RichText.Content value={attributes.contentaag} /></time>
              </p>
            </div>
          </div>
        </div>
      </span>

                </li>
                <li> <span class="block hover:bg-gray-50">
        <div class="px-4 py-4 sm:px-6">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-indigo-600 truncate"><RichText.Content value={attributes.contenthSf} /></p>
            <div class="ml-2 flex-shrink-0 flex">
              <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"><RichText.Content value={attributes.contenttKJ} /></p>
            </div>
          </div>
          <div class="mt-2 sm:flex sm:justify-between">
            <div class="sm:flex">
              <p class="flex items-center text-sm text-gray-500">
                
                
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYVa }}
        >
      </svg>
      <RichText.Content value={attributes.contentfcf} /></p>
              <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                
                
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHAz }}
        >
      </svg>
      <RichText.Content value={attributes.contentxNH} /></p>
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              
              
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnzz }}
        >
      </svg>
      
              <p><RichText.Content value={attributes.contentvzw} /><time datetime="2020-01-14"><RichText.Content value={attributes.contentfsV} /></time>
              </p>
            </div>
          </div>
        </div>
      </span>

                </li>
            </ul>
        </div>
    </div>
</div>
            );
            },
        });
        