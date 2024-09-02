
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/list-with-descriptions-in-panel', {
            title: 'list with descriptions in panel',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCADcBaADASIAAhEBAxEB/8QAGwABAQEBAQEBAQAAAAAAAAAAAAIEBQYDAQf/xAA8EAABAwMBBgUEAgICAAUEAwAAAQIDBBESBRQhMVFSkQYTQZKhIjNhcRUyI4EWQgc0YrHBJoKi8ENT0f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD+ltajmo5yIqrv3n7gzob2Ef22/pCgJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7DBnQ3sUAJwZ0N7H45qNarmoiKm/cWTJ9t36UBH9tv6QomP7bf0hQGWSeaSZ0NI1iqzc+R98WrysnFexLpqqlTzKnypYU/s+NqtVic7Kq3T/Z+6eqNSeJ33GzvV36cqqi9lTsfepkjip5JJf6Nat05/gD6It0unAzajqFLpdDLW10vlU8Vs34q611RE3IirxVCqFj4qGnjl/uyJrXftE3nF8fZf8ADa/C2X+O1+H3GgdHT9b07Up309JO5Z2NydFJE+N+PPFyItvya6upjo6OeqnVUigjdI9US64ol1/9jyWt6Lqs1Bqep6jUwz1TNPkgghpInMaiLvVd6qqruOfqGrUeqzzvoJ/OjZ4eqUcqItkd9O79oB72GojmpWVLFXy3sSRqqm+ypcy6fq1PqPkOpo51jng89kqxKjMb2tfhl+OR4nQVoE1DRk0R8zqhaR/8miq5d3l7s78Fztb/APwz0Lq1NMg/jlftP/G3LGjL3v5icPza9gP6aDyvhX/j+3r/AAElQ52zIs6IrljvdLK+/wD/ACcfza553x1VxLqOp4sihrKSOJYZJZZfNduRcoWt3Iib7rzRbgf0wHgdQfpb9a1JfEctS2p/xLp/lK9H4YpvhROLs73FYulrrOp/8glq26gk8ew+Wrkl8vFuPlIm5Vyyvb/YHvgfzPXvOfr2ppVVkFNWpNHsT5ElWVrLNt5SN3LvvdERd97mnVpIKfxZJM98VbUuqYUbArpIqmLgn+L0cziq+nG4H9DB/PdNkp6fxhGkb4q6omrJUc9rpI6mFFutpGLucxOCcE4WP6EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZPtu/SlEyfbd+lAR/bb+kKJj+239IUB8J6Vkz0kyfHI1LI+NbLblyVP2SyjTzGvmmlnc1bt8xUsi87IiJc0gAAfCshlqIFjgqpaV6qi+ZG1qqn+nIqfAH3HDgeOiqNVTwnqmqS6xUyywsqmRtWOJqNVjnNa76WIt/p52NFX4gqWUFbFW0M9HK3T31cL452q5zW2Rd9lRrkVU9FTeB6kHBXxBJ/MP06no0mWBY0lV1Q1si5Ii5NYqfUiIu9bp62Net6q/So6RYqR1VJVVCU7GNejd6tcqLdfT6QOmDz0viWaCCVs2mPSuhqYqd1O2ZFRfMti5rrWVF/KJwUubXq5kksUWkedLSxNkq2tqEtHdFVGtVU+t1kv6cQO8DzL/ElPBJW1jXTSxLDSugY57Ua5ZcsbXRMb+qqq/6sXD4rifTVWdM11ZTyxReRBO2VJHSbmWelk3re90S1gPRj1uea1XW9YpdKlmTSmwVMU8LFzmyjc170S7XW38bLuS177/XrahqEmn6W2tnp0VWrGkzGvvgjnIjlRbb8bqvpe3oBv9bg4DvE8Xn18EdM50lLURQRpnbzle/C6bt1nI5F4/1EPiN8kkEztPezTqio2eKp81FVXK5WoqstuaqpZFv6puA74OMzXkdp0FZsyok1dsmOfD/KseV7fi9jFRa5Vspo4GQLXVtRWVTI2OkSNEjjkcl1dZbIiYpwXiB6YHF8M11TXwV8lW18b462SNI3qirGiI36bpxS995zdI8Q1zKKOWuonyUi1j6d1WsqXRVmc1q4W/ql2tve/wCAPWA83H4up36hHF5MaUstUtLHLtDc1fdW38vjiqpa/wDu1jq6vXzUEDHwUzJ3OdiqyTtiYxLcXOX/AOEUDeDhaZ4mhrnU2cHkxzxTP8xZEc1HxOxe26bl3b0X1Q+FT4nqIdLp9Q/jGpFLT7Q7zatsdm8URt0u51rLbcm/iB6QHlK7WZJH1ElFPO1qu09zbubjhLJZbJa6XTjvX/Rtq/EbqPV4qSoo2MhlqG07JFqWeY5ztyOSPjjf1vf1sB3geT07xDXQ0801ZRSS0cdfLA+qWVLtRZla2zLb2pdEVb33cC08ROolqIplbPUS6jNDTsklbE1GtRFW7l4In6Vd6AepBztG1Zmr6e+phjRskcj4nx+YjkR7V3pkm5U4b+SnI0/xFqDtMbLV0DJKqeskpqeOKbc9Wufe6qn0o1GLv33tw32A9QDn6TqTq/aIp6ZaaqpZEjmizR6IqojkVHeqKipyMM3iJ1NrEVHU0bIopqjZ43rUsWRXLezvL4o1bcb3/AHeB52k8S1FQ+mkfpaxUdTUPpmTLOirmiuRPpt/VVba/wAH1i8SRPpqCV1OrHVKSrMxX/8Al0iRfMVd2+zkRv8AsDug8/B4jmVYHVmmPpoquJ8tK5Zkcr8W54uRE+lVair68Bp3iOWpkpFrdOWjgradZ4JFmR90REcqORE3blun/wAAegB53SvFcOoV1LTugZE2ta59M5Khr3OREv8AWxN7Vtv9e5q1TXU06arifTOe6GmbPEiO+8quVmCbty5Yp6/2QDsA8pq/iR8mkSzadHIitgpajNjkv/llRMLL64ovc1u8SSUyVseoaa+Gqp0iWOGOVJPO8xytYiLZLLkll5fkD0AOZpuqTVNbNQ11HslVExsuKSpI17HKqIqOsnqioqWORU69X0Gp64/Yn1dHROje9fNRnlM8pquxS31LxW279geqBwNX8SLpc95aNi0aYZTOqWtc5HKm9jOLkS+/gXFr8k+tzUFPRNkZBMkMrtoakjdyLl5a71Zv43/0B3AcXxDqOo0E+mM0+mhmSpqfKf5kmN/ocqIm5bcL3/Frb93Pbr9dRVGrSTUb6mipq5I3zeajViYrWbmtt9VlW68OIHqgeaq/F9PTVs7PJjdS006U80y1DWva5VRFtHxVEV29f3ZFOjrtTNTpp/kSKzza6KN9vVq3ugHUB5il16pbBQQUtHNWz1jqpWrNO1uPlSW+pyN4b91k3bk38T5T+KGMqNKq51fTwysqWS025znSsc1qMTqXK6JbjcD1gPjRyTy0sclTAkErku6JH54fi/M+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJk+279KUTJ9t36UBH9tv6QomP7bf0hQAAAAABx00L/wCna3SNp/8ANef/AJfL/r5jnO4X32y577ehOraB/JK9dq8rOglo/t5WzVq5cfTHh+eJ2gBwNT8OzalVMWatiWmY+N7WupUWWJWqi2ZJdMUVU9UVd6n08TUNXXfxbaJ7o3w1zZXSo1HeWiRvS6ovFLqiKn5O2AOC3w9K9XT1dektXJVw1MkjYcWqkapixG33Jx33XifSv0WqmrKmo0/UtkSsjbHUNWFJL2RURzVumLrLb1ThuO0APKR+HEqZNQp/LkpaZjaWOkkejXLeC9nY+rd6JvtfebE8OyyUU0dRWxJUPljlikp6VsTYnMW7VRt1Vd/G69jvgDiT6LW1umVVNX6r5k07o3xvZBiyFWORzbMut96b7rv/AAdCqo1rdIloax7XrPAsUr2txRVVtlVEutudrmsAeepvC7IajSZnVjnuoUes30W2l7rrku/dZznO9eJ+w+HJo3wU7tRy02mqNoip/JRHI5HK5rVffe1FW6br7k3noAB5z/jVUkscbdVRKGKuStZBs/1XzzVquy4XVbbr/s+n/HZoWwS0VekVXBPPKyR0OTVbK9XOYrckv6b7pwO+AOboelyaXBUMmq1qpKiodO6RWYb3Wulr/g5tP4Zqo4mUk2q+Zp7alal0Gzojld5iyI3LL+uVl4X3cd9k9IAPP0vhp9JWtdBVwpRtndOka0jVlRVVXK3zF/63VfS/pc065oz9Ulo54p4o5aRznNSeDzo3ZJbe26b09FudcAeZf4RR+gx6ate5HsqJJfPbEjVxkV2bbItku16pu/dvQ+mr+F/5CslnhqYIWzUqUr2yUqSqxqX/AKKqpj/bfuX0PRADzyeGLRuZtnFtG37X/wDQ6/P/ALfH5Pg/wi91f5yV0SRJXtrrLSosquR+WKyX3t4om7du423+oAHm2eGapGSUsmrZ6fNVuqpINnRHLeTPBHX3Nva+667+F7JdT4YSV6zx1MaVLauSpidJTpI1qPREcxWqu9N3FFQ9CAMelUT6Cj8mWZksiuV7nMhbE26+iNTgn7VV/Jy08OTshVkOoox0NY6rpH+RdYlcrlc12/60XNU9D0AA5+k6a+hWpmqanaaqqkSSWRGYJuajURG3WyIic1OOzwi5ldHNtsPlRV22tTZU81zlcq2dJe6pvVE3J6cT1AA40Wg+Xp1FSbVfZazacvL/ALfW52Nr7v7Wv+DHpGjrLqus1lVBLFS1SrFBDKiIqNciLK7dwRzt/wDo9KAPPweHam9Oyt1PaIqOJ8dM1IEarcm4ZPW/1KjVVN1uJpZobUj0qN8+bdPgdC5MLeaixoznu4X9TrgDg6P4el0yenvWQyU9KxWRNbSNZIqWsmb997JyRL+pq1TRWajqWn1jplZsb1c5iNv5qXa5EXlZzGu/0dQAeei8LMi06upG1artVW2dr1j+2xr2ubGiX3omNr/k0anoDdQq6moWpdE6aGFkatYl4nxvc9r7rx3qm63p+TsgDmabplRT101fqFY2qqpY2xIrIvLYxjVVbIl13qqqqrc+dTofnxa2zacf5VmN8L+V/jRnPfwv6HXAHlK/wc6rlq8a6FkdW6N71fSI+RFYjUREertzfpTdbnvNtZ4fmrdViqqitidDDUNnjTZWpMzHfgkiL/W/4vbdc7wA52s6bJqMVMtPUpTz0s6TxPdHm26IrbK26XSzl9TPPoPnUGq0u1W/kZ/Oy8v7e5iWtff/AE/HE7IA89J4ZcmoTzUtVBFBUzpPKx1IySTLdfF68EW3qi+tjq6lQbfsv+Xy9nqWT/1vljfdx3ceJsAHF0/QNinoJdqz2NKlLeXbPzno/nuta35/Blk8IUtSsLa2Rs8Ub6p+Cx2W8z8rot9yt9F/9j0gAzadBUU1DFBVVW1SxpisysxV6el0uu+3FfU0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmT7bv0pRMn23fpQEf22/pCiGNTBu93BP+yn7gnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAoE4Jzd7lGCc3e5QKBOCc3e5RgnN3uUCgTgnN3uUYJzd7lAomT7bv0owTm73Kfj2pg7e7gv/ZQP2P7bf0hRMf22/pCgAM81S5svk08SzSol3JezWp+V/wDjepG1TRKm2QNjYq28xkmbUX83RFT92sBrAPlU1MFJA6eqnjghZbKSR6Nal1tvVd3ED6gzUeoUNejnUNZT1KN/ssMrX2/dlLlq6eGpgppZWtmqMkiYvF+KXW36QD7ABVREVVWyJ6gAfjXNe1HMcjmql0VFuin6AB+Me2RqOY5HNXgqLdD9AAxM1jSn1a0jNTonVCOViwpO1X5JuVMb3ubQAPnUTxUtPJUVD0ZFE1XvcvBqIl1UqKRk0TJYnI5j2o5rk4Ki8FAoA/M254ZJna+N99uYH6D5OqadtS2mdPEk72q5sSvTJyJxVE42DqmnbUtpnTxJO9qubEr0ycicVRONgPqAAAPk+qgZVR0r5WpPK1zmMXi5Etdf9XQ+oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZPtu/SlEyfbd+lAR/bb+kKJj+239IUBk0/+k9/ubRJn33f/AI4n3qPL2eXzreVgud+Vt585qZzpfOp5VhlVLOW12uT8p/8AO5SNlmlVNsnbIxFv5bI8Gqv5uqqv6vYD6UPmbBT+dfzPKblfnZLnE8f3/wCGahZqPX/H9K+v+Rp6I+c8ENTC6GphjmidbJkjUc1bLfeigeL1Sj1WNmp69NTU+lvg02SKNlNLm9zl35K5EThbcalgqaWv0GkXU66XbkndO+SZbqvk+luCIu9E9FPVzRRTwvhnjZJE9MXMe1Fa5OSovE/HU8DpIpHQxq+G/lOViXZdLLivpu3bgPE6drFZNiyrq52fwdFMuoOjW6vlRVY26L/ZbMc/fzQx6fVVdTXVGnuqq5aeq0p89pa1sr1ddLOTH+l09E3bz+gMpaaN8z46eJrp1vKrWIiybrfVz3cz5UulabRPzo9Ppad1lTKKFrVstr8E9bJ2A8FBUVUOj+GaCiqah1PV07pJVbWJE7NrG2Yj1/qiXX6U/wDg9b4afVVvhxGV9SkkqrJF50MyOcrUVURc27skT1T1Q3O0jS3Ui0jtNo1p1fmsXkNwy52ta/5NUMMUELYYI2RxsSzWMaiI1OSIgH870V7qfw5o1IzUqinhrK2WKqlSazorK9UYir/TJUT/APVPUeFamWVdTplq31lPSVaxQTvdk5yYoqtV3rZVVLnUdpmnuimidQUqxzuylasLbSLzclt6/s+1NTwUkDYKWGOGJv8AVkbUa1P0iAfz+m0zUNZodW06m0+kjgl1WZVrpJfrZaS6q1qJe+6yLc3TTahFF4m1SKvrHyafNIyng8y8bf8AG1bq31te9uCWPZwwQ06OSCKOJHuV7kY1G5OXeqrb1XmI6eCJZFihjYsrs5MWombrWuvNbIgHhqqrmoEqodP1qpr2S6NPUvc+bNYntb9L2r/1vdd34M9dqOrVFVPEyqlhSl0+CWFyVrYEVzmKqyOyT60vuVF3bvyewq9AoZdNqqGiij09tW3GZ9NCxrnNXinD1RVS/wCTRLpGmzxwMqaGnnSnajYlmia9WonCyqgHlX1c2oV9U3VNbk0zZaGCaPZ5kaxznNVXyf8ArRFS1uHc+9JBG7/xCZO+ume6TS45Wr5itbKuTkWzeXrj6Ktz01VptBWvjfWUVNUOj/ossTXK39XTcfSSkpZaiKolpoXzw38uRzEVzL8bLxQDx3ixssfi2l1GnRXS6bQuqsU/7MSRqPT2OcY2VU1V4ob4hp2rJ59NVto2L/2jiRqN9zlev+0Pfup4Hzec+GN0uCx5q1Fdiu9W35fgiOjpYlhWKmhYsDVZFjGieW1bXRvJNybk5AeD0Wv1VyUlQ6uc9lXRSyTJLXNkVzkZkjo2Il2WXcqJw9d59NOp66eXw/HLrepq3VKF8tRaey3a1ipitvp/tvVN62/Z7SHS9Op5ZZYKCljkmRUkeyFqK9F4oqom8+rKOljWFWU0LVp2qyFUjRPLatkVG8k3JuTkB/PaaaSvqvDjdQ1WeBzo62F1Q2RGSSI2RERMvRVRqb+K2/JbtW1OSioaKOrmmppNRqKdKtKhInzRsS7E8y2663S6ccfye5k0jTJYmxS6dSPjajka10DVRMlu6yW9V3r+S36fQyUaUclHTupUSyQrEisT/wC21gPFQTapVppVDPqc0aSahPCslPUte9Ymxq5GuciWVyb04X9eJ9K6pqdP1t8k+o1c1JDPDCx1NWNcsW5qYyxL/ZVXeq713nso6CihbA2KkgY2nVVhRsaIkd0suPLcq8CZNM0+StbWyUNM+qb/AFmdE1Xp/wDda4GoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmT7bv0pRMn23fpQEf22/pCiY/tt/SFAAAAMOtah/F6XLVti817VayOO9s3ucjWpf9qhuMOs6f/KaVNR+asTn2cyREvg9qo5q2/CogGB9bq+m1FIuqOop6eqmbAvkRuY6F7v68XLkl93ou8qk8T0dVUQRtpqxkc8roGTviRI1kbe7b34/Stt1j57DrOo1VH/L7FFT0kqTKlM9zlme3+v9kTFEVb238D8h0Oqj0nT6RXw501ftL1RVsrfMc6ybuNnIB9dE1va2U0NWipUVC1CscjbMVI5VbbjxtZe5tp9Vp6jR3apG2TZ2se9Lol3Nbfem/wBbXT9oea1bTaqj0CioqeRP5Xa5XU7o2uciJI96OVVtuRGSXW/qh6WbT2poUmmUiNY3Zlgiy4J9OKXA5rPFlNI5jItN1N8ksSTQsSBLyx+rk32sm7jZd6cbn3d4lo1hppKWCqrFqYdoayniyc2Pqciqlt+63FbLa5VJpc8OpafUufGrKagdTPRFW6uVY1um7h9C/Bw08I1ULKCZIaGrqIKPZZGTSyMalnK5HNc1L+q3RUA61R4qoYnNSCCsq0dStrMqeLJEiVVTJbqnC3Dj+z8TxLBUwzpTQ1MT9kfVUz5osWTMan9m7723puWy7yKXQJ6Z82C0zWP0xlI1saOaiPRz1VURb2b9aeqqJNCqnRULEkhvT6ZLRv3rve5rERU3cPoX43AXpHiWCsipG1MNRTvqIPMZNLHjHLZt3Yrfldd9tyXPrS+JKOpcieRVwtfC6aF0sWKTsaiKqt38lRbLZTnReH9Tq4KGi1eSkSlooHRo6nc5Xyq6NY7qiomKIjl4Kt15Hz0vwvUUnlslpdNZs9M+GOeN0jnvVW43su5m7j/YDoxeKKaalp54qDUHbWtqaPymo6ZMclVt3cET1W34udWmrI6ihbWYyQxq1XOSZiscy3G6LwtY41XotTJoOmUOzUFWtLGxkjJ3PYl2stdj2pdq39bcORt07TJ4/Dv8bqFQs0j43se9HK6yOVbIirvWyLa679wHxpvElNUuY1lHXNWaN0lNnEjdpREv9F14232Wx+eFdSrNU0JuoVsbkfKqvYxI0amNkVEb9S3T8rZfwfGg0rVVqtNXUn0nk6Y1UjdArldM5WYIqoqIjdyruRV3nR8P0MumaDRUM7mOlp4WscrFVWqqcr2A4n/KqiTS4a3YJoL6glM5qsR6vbm5tmoi/wBvpRP3z4m7+fjqUiSJJ6SVtaymmhnhRXorkvbc6yIqWXJFX9Hwg0OvZDHTPdTLDBqe1xvRzsnMV7nqipbc5MrcbL+D6VOh1UurS1bZIUY+tgqERVW+LGYqnDjfgBroddgr6pIoKWr8p7ntjqFi/wAT1aqotlRbpwXiiXtuP3UdbhoK6Ki2WrqamWNZWMp40ddEVEXiqInH1OdQaHXwa6ytVtFSxtfI6ZaSR6bVki2yjX6Wql0VVuq3QrU49STxdTT6bFA9zaCRrknVzWKiyM3ZIi2Xci8PRQNEnieiSOidBT1lS+tbIsUUMX13YqI5rkVUxVFX15KW7xJRtq3RLDVeS2fZ3VXl/wCFJL2xve/Hde1r7rmbTNBqqOs06olmhe6FKp1QrbpeSZ7XfSnJLKm/8Hxk0PUvJl01JKT+LfVrUrLd3nI1ZPMVmNrf23ZX4egGqLX44oX+Z59XO+rmgiighRHrg5UVLZWslv7KqX3cLn2d4io9kp5oYqmeSoe+OOnjj/y5MvmioqoiWtvup5+HQZdUpodRjp4pHRV9ZLHDV5xJJHK9bLdEu1dyKl04KdGHQq6jjoaqhjoGVdM6ZXwIr2xObJZVRHLdbpi3fbfv3IB9pfEybXpkVNp9XIytfIx92I10bmot0VFVN6Km/wDHC516iuhpqylppUcjqpXNjcifTdrcrL/pF7HLn0/V5naXWSSUklZSTvfIy7mx4Pa5tmrZVuiKm9U329D7+JtMqdV0vyqGVkNXHIj4pH3s1d7XcP8A0ucBFL4m02qpKWqjdIkVS6VGq5qJgkaKrnO37ksnyhMPiejka50lNWQJ5D6iJZosfOY1Lqrd/GypuWymRPCqbfXosrW0E9I6CGNt8olexrHry4Rtt+1P3+E1Sv8AJj1WSkZHTU0kMbqdXOWRz2YZKiomNkvu3714gdCv1mKCnj8pH+dUUktTDdu5EY1F37//AFJ8mdPEccVNTNkp6moqHUrKifZ4skia5P7O380Xcl13cDEzRdbqHU23OoGtpaGalasT3qr3Pa1Ect2pZPp4en59PtHpGrUMmenPo3LPRxU8/nK5PLdGioj22T6k+pdy24JvA0QarUyeB01d2G1bAtR/X6c0Yq8OVz90zxHT1fkRzw1NM6WDzo5Jo8GStREVytW/5vZbLY/YNIqI/Bf8M58W0bCtNkirhkrFbe9r2v8Agxs0LUq7ZoNYfSJT0lNJC1adzldKr2YK5UVEx+lV3JfeoHQ07X6WvqY4WQVUPnsWSnfNFi2dqWurd/5RbLZbF6prMemPVr6OtnRsayyPgiybG1PVVVU5LuS6/g5WgeG5tOrKV89LpzUpIljbPE6R0ki2RL2Xczdx/t/oeJNAr9VrJnRrTTU81N5LWzzSNSB2+70a1LOvdONuAH1f4l8nWKuBKapq6dlNDPHs0WSo12WTluqbtzbJx47j7L4ghbqE0rpmfxrNOjrGyI1brk5yf+yJuMlNo+uabUOl092nvSSigplSV70xdGjkySzd6b+Hr+Lb/nL4PWSgkoFnYsC6ZFSNet7+Yx6uyVOV1T15gdvTtXhr6iSnWnqaWojYkixVEeLlYqqiOSyqlt37T1MsevomsalR1NJLDT0ETZXVLrY42cqqu+9vp3bufAjQdGloa6WrqKPT6d7okibsz3vc5L3VVc61k4brf7FdolRV1+qpnElHqdI2F7rr5kbmo5EVEtZU+rmnADVp2u09fUtp9mq6aSSPzYkqI8PNZuurd68LpuWy7+A1TW4dLe5JaOtmZHH5sssMWTIm796qqpyXcl1M9Fp+qy6pS1mrOo27HC+ONtM5zvMc7G7luiW3N4b+PEw+I/D2oarV1axOppYaimSKLz5pG7O6zrqjWoqOvdN68LevADp1viGlpZ3RMgq6pY40llWnizSJi3srt6cbLuS6/gmp8SUcE72Mgq6hkLWunmhiyZCjkumXrwVFsiLZFMyaXrFBUSy6U+ictTBFHJ57nJ5b2NxybZFyS3otuHEpdO1ujrKx2mzUTo61zJHyT5I6J6Na1yo1EVHIqNRUS6WUDTVeIqKlqpYnRVL4oHNZPUMjvFCrrWRy35KirZFtfeUmuwP1F9JHS1cjWTJA+oZFeNklkXFVvf1Tfa35ONXeFZZtRrHsptPqYK2ZJXPqXSZRLZqKmLdzk+m6b04mmp0Ovl15tZCyjp0SoZI6qhkeyV8aWux7P6uVeGSrw9AOhSa7BWVvkQ0tWsayPibU+V/ic5l0cl0W6b0VLqiIttx1TzVNodfHr7K1GUdKxsz3yyUsj2rUtVFsj41TG+9FV11W6fk9KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmT7bv0pRMn23fpQEf22/pCiY/tt/SFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJk+279KUTJ9t36UD8Y1cG/W7gnI/cV63fAj+239IUBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvgYr1u+CgBOK9bvg/HtXB31u4LyLJk+279KAj+239IUTH9tv6QoD4T1TIXpHi+SRyXRkaXW3PkifsllYnmNZNDLA5y2b5iJZV5XRVS5Onojknld9x070d+mqqInZE7n3qY45aeSOX+jmrdeX5A+gPhQvfLQ08kv8Ad8TXO/apvOH/AOIKIvgrUEc1XJ/juicV/wAjQPRkukY17GOe1Hvvi1V3utxtzPBujqtNXUtW0fS5tGpINPk+iXFPNlvdrvLRVTciLv8AydF/8kzUdCjq62Kepq9ockuzMTyf8N0Rm5VREXv6getB46g8RVtVsrZZ44HUdHNNqbnMRUR7FViItt6fU1zrJ6IZKXWNWqaipoJK6pVk+mvqY55aJsKtcip/RPVqovrvTcB7wHgafVdWpdI8O0MNTVSyV1Msz546dssjGtY2zURdy713qt1PT6FUajX6DlXtdTVv1xq9Y0Rboqoj8VuibrLbgB1weB0Kt1WPw9o9NFqTlm1KqljSeWNHLC1qvVUTmq47r3tc9L4draueTUaKulbPLQ1HlJO1iN8xqtRyXRNyKl7LYDsg8hFrmpLUw6S6a9fFqEjZ3oxt3U7Ezva1ku1zG3/JGn6xq6x6LqdTWRTU+rTpE6kbEieSjkcrVa7itsd9wPZA8jR67XzaF4eqXTtWatr/ACJ1wb9TbyXS3p/VOB64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEyfbd+lKJk+279KAj+239IUTH9tv6QoDLJBNHM6akcxFfvfG++Ll53Tgvcl0NVVJ5dT5UUK/2ZG5XK9OV1RLJ/o2AAiWSycDPX0VNqNHJSVkfmQSWybkqXsqKm9N/FENBk1WrloNPlq4aZ1SsSZOja6zlb/wBlTdvVEutvUD61lLBXUktJVMzhmYrHtuqXReKXTeQ/T6WSopJ3xXko0ckDsl+i6Yr6793M53/JKJ9S7ynxuooads09Wr7Njytg1Etvcqb7em7maYdd0yelfUR1SeXHIyN+THNc1zlRGorVS6XVU9AKi0XTYpK97KRiO1D/AM1e6pLuVN6L+14cz40HhvSNOqEqKWlVJUjWFHPle9cFt9P1Ku7cm70N7KqB9ZJSNkvPExr3ssu5rlVEX/8AFexkm13S4NQ2GWra2oyaxUxcqNc7giutZFW6blX1A+H/ABjR9iio0pXNiher4sZno6NV3Li690T8ItjoUNFTadSMpaKFIoWXxam/jvVbrvVfyplTX9KWeph2xqPpUcs6q1yNjx43dayd959tO1Wh1NJNin8xY1RHtVrmObfhdHIi2X0X1Ayu8N6O6llplo/8UkvnK1JHpi/qbv8ApXj/AFsbNO06j0um2ehhSKNXK929XK5y8VVV3qv5U5Vd4ppqd+rQQxSOqNOp1ms5jkY9bKtr23cP9+lzbQa7pmoLI2nqmK+KNJHoqK1Eb1Iqol2/lNwHw0/RXw+Iq3Wqt8Lp52JDEkTFTCNF9VVd7l3X/R9KTw5pFHXJWU1G1kzVc5n1uVrFdxVrVWzb/hEPtp2s6dqcj46GpSR7Go9Wq1zVVq8HJdEun5Tcfmoa5pmmzJDW1TY5FbmqYudi3qdZFxT8rZAM8XhbRYaxtXHR4ysm89lpX4sfvuqNvZOPC1ux2Dl13iHSdPmWGqrEbIkaSqjWOfZi3s7ci7t3H0/2S7XIItVlpZnMZA2KB7JUuuTpXOaibuCXam/8gdYHxjq4JaualjkymgRrpG2X6Ude2/h6KZJdd0uKv2GSsa2fNGKmK4o5eDVdayKt03KtwOiDlyeItIirVo31iJOkqQuTB1mvW1kVbWS99113n0m1zTIK9KGWra2oyRqtstkcvBFdayKt9yKt1A6AM1fqFLptOk9bL5bFcjG/Srlc5eCIiXVV/CHMrPE1DBBQVUUrH0lTULA+RborFRrltja+V2olrX3gdwHHfr9NK2hkoHNnZU1iUr7orVjXFzluipdF+lNy8zRFrmmTahsMdW11RkrEbZbK5OLUdayqlluiLcDoA5mq65S6VV0dPUtlV1W9WtVkbnI2yKt1sn44f74XKXXtLbqGwLWN2jPy7Yrij+nK2OX4vcDogzV+oUum06T1svlsVyMb9KuVzl4IiJdVX8IZl17Sk09ldtbfIe9Y2qjXK5XpxbjbK+5d1rgdIHNfr+lMoY61axqwyuVjMWuc5zkvdqNRMrpZd1j8k8QaTHSQVS1jXRTqqRYNc5zrcfpRFXd67t3qB0wc2o17S6angnkq2rHUNV8SxtdIr2pxdZqKtkul19CanxDpFL5XnVrESWNsrXNa5zUYvByqiKjUXmtkA6gOfrer0+i6a6tqWyPYjmtRI2q5VVV/Bgf4r0+DUKiGrk8mFkMUsb1jfk5H5XVW2u1Esm9bcQO+DmSaxTwVVVtE9OymggjlzRzld9auRL7rWW26yqq8uBp0/UaTUonyUcqvSN2D0cxzHNW17K1yIqbl9UA1A5SeJNHWsWkStb5qSrAqYOs2RFtirrWRb8EVd/oX/P6V59TDtjUfSo5Z1VrkbHjxu61k77wOkDjy+IaKTTKypoKmFz6ViOc2dHxo1F4K5McrLv3om80VGuaZS1qUdRVtZPdqKllVGq7gjnWs1V9LqgHQBzp9d0unrtimq2tnya1UxVUa5eCOdayKt9yKpOn65S6hqlbp8LZklo3YuV0bka7cirZVS3Fbfnim7eB0wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJk+279KUTJ9t36UBH9tv6QomP7bf0hQAAAAAB5OLQamn0CSGnpImTx6m6sZDk1qStbNk1LpuS7US1+G65+V2m6rqTdSr0odmmkbTJDTSStV0nkyeYquVqq1FW9k3+m89aAOHpEdfLr1fqFZQPo4pqeGOJr5GOcqtV6rfFVt/ZP/26Jx9b03Xa2qq4vJqZY3VUUkDmVEbIUia5irdv9lduXj39D2gA8tV6FWVXh7WqJrfKmqq188Vno3NEe1yb0va+NvwavD9DPHqNTW1NJWQOfEyJHVVU2VzkRVXg26IiX439V3Id8AeX1jTdQlqNeZT0izR6lQNjikSRqI2RrXpiqKqLvyTfwPprGi1VfUuZC1I45NJnpFkulmvcrMUVONtynpAB5jQNOq2anHU1dFWQugplizqKxsqKqq26Na2/0/Te629N3L6V9NqVNqWpy0mnJWx6jCxjVSVrfLc1qts7Jf6777r+u49GAPN6dotTRyVMcjElZ/F09IyS6f5HMR6OTn6t48zFFos8el1DNUVtNGujUtOsz5G2jmZnfff/AKqrVvw5HsSZI2SsVkrGvYvFrkuigcXwi2ebSV1OsjRlVqT9okb0pZGsT2o3upzqnTNUWmr9IjoUfFWVqzpW+a1GsY56PW6f2yTglktuTeetAHmKrSK2TSNdhZTostXW+dCmTfqb/jst77v6rx5GGp8P1u219O6nramnrazaGvZWtjiaiq1VRzf7XRU3WRb2Tge1AHH8Rx6jJBTfxzZnNbMiztgexkqsxX+qv3Jvtfgtjz9No+s0tNTS7A+eWPV5KxYpaljneWsaoi5Xsrrr3/G89wAPKM0vUqnUWajLR7P5upRzuhWRqujjZC5mTlRbXVVTcl/Qy6V4fraWejo6mnrZY6SqdMlQ6tb5Kpk5UcjP7Zb7KlkTjvPagDka7T1T6jS6ukp1qFpKpXvja9rVVqxubdMlRN2SKch+maotLNoyUKLDLXrUJXea3FGLN5t1S+Waf14W9bnrgBx/EceoyQU38c2ZzWzIs7YHsZKrMV/qr9yb7X4LY4Wm6Pq1B5Vc6jknlhr55lp31DXSOjkaiIqOVbZJb1VPU9qAPNSwamtTQaumksSWF86SUccrM8X2s66qjVf9O/f6rvM1bp2qTVlHqmwTROSOWOWmoqljJGZPRyOyWzXKtvq38bcbHrgB45+jVVLp2nNptNrWzwxyoklNXt82FXuyxcr7Ne1V3rxsqcF4n5W6drmEMsVLMmqOpI43VdLUMbE56X3Sxu3K1FVd6Iq714HsgByvENHU13h6opqdrZKlWtVrb4o5WuR1rrwvYyNoauoq9ZqZaNYttoYo42Pe1VyRJMmrZVTdkn4PQADyH8LW7NO2fT1qEdp1HF5aVCRuWSNzldi5F3ObdFRdyKvqdbw5DqUUdV/IeekTpEWnbUvY+ZrbJfJzNy7723qtuJ2QB4Wmg1Cv0/VdMp9PRYqnVZ12vzGo2NEmuqqn9skx3WRfTedSbRqyXRNXpmxMbNPXuqYmuclpER7XIiqnC+Nt56VrGsRUY1G3VVWyWuq+p+geI8Rsq56LVNSraTYUfRJSRRSSsc+V6vv/ANVVPwiXvvUvUdBrZK7UoVpqypp6+dsrXRVrYo0SzUVHpx3Y+iLdLHs3Ma62TUdZbpdL2XmfoHm46fU6GprqWPSo6uGsq/PbO+RqMa12N82r9V0tusi33cDbp9PVU3iLVXyU67NVujmjnR7bXaxrFaqXvfdfhY64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATJ9t36UomT7bv0oCP7bf0hR8ZXrEv08F9FI2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaQZtofyaNofyaBpBm2h/Jo2h/JoGkGbaH8mjaH8mgaSZPtu/Snw2h/JpcT1lX6uCeiAf/Z" />),
            category: 'common',
            attributes: {
  "contentRVo": {
    "type": "string",
    "default": "Privacy setting"
  },
  "contentBkX": {
    "type": "string",
    "default": " Public access "
  },
  "contentSmI": {
    "type": "string",
    "default": " This project would be available to anyone who has the link "
  },
  "contentICZ": {
    "type": "string",
    "default": " Private to Project Members "
  },
  "contentCkq": {
    "type": "string",
    "default": " Only members of this project would be able to access "
  },
  "contentUgq": {
    "type": "string",
    "default": " Private to you "
  },
  "contentaJB": {
    "type": "string",
    "default": " You are the only one able to access this project "
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
            <legend className="sr-only">
                <RichText tagName="span" value={attributes.contentRVo} default="Privacy setting" onChange={ (newtext) => { setAttributes({ contentRVo: newtext }); }} /></legend>
            <div className="bg-white rounded-md -space-y-px">
                <label className="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
                    <input type="radio" name="privacy-setting" value="Public access" className="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-0-label" aria-describedby="privacy-setting-0-description"/>
                    <div className="ml-3 flex flex-col"> <span id="privacy-setting-0-label" className="block text-sm font-medium"><RichText tagName="span" value={attributes.contentBkX} default="Public access" onChange={ (newtext) =>  {
        setAttributes({ contentBkX: newtext });
      }}
    /></span>
 <span id="privacy-setting-0-description" className="block text-sm"><RichText tagName="span" value={attributes.contentSmI} default="This project would be available to anyone who has the link" onChange={ (newtext) =>  {
        setAttributes({ contentSmI: newtext });
      }}
    /></span>

                    </div>
                </label>
                <label className="relative border p-4 flex cursor-pointer focus:outline-none">
                    <input type="radio" name="privacy-setting" value="Private to Project Members" className="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-1-label" aria-describedby="privacy-setting-1-description"/>
                    <div className="ml-3 flex flex-col"> <span id="privacy-setting-1-label" className="block text-sm font-medium"><RichText tagName="span" value={attributes.contentICZ} default="Private to Project Members" onChange={ (newtext) =>  {
        setAttributes({ contentICZ: newtext });
      }}
    /></span>
 <span id="privacy-setting-1-description" className="block text-sm"><RichText tagName="span" value={attributes.contentCkq} default="Only members of this project would be able to access" onChange={ (newtext) =>  {
        setAttributes({ contentCkq: newtext });
      }}
    /></span>

                    </div>
                </label>
                <label className="rounded-bl-md rounded-br-md relative border p-4 flex cursor-pointer focus:outline-none">
                    <input type="radio" name="privacy-setting" value="Private to you" className="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-2-label" aria-describedby="privacy-setting-2-description"/>
                    <div className="ml-3 flex flex-col"> <span id="privacy-setting-2-label" className="block text-sm font-medium"><RichText tagName="span" value={attributes.contentUgq} default="Private to you" onChange={ (newtext) =>  {
        setAttributes({ contentUgq: newtext });
      }}
    /></span>
 <span id="privacy-setting-2-description" className="block text-sm"><RichText tagName="span" value={attributes.contentaJB} default="You are the only one able to access this project" onChange={ (newtext) =>  {
        setAttributes({ contentaJB: newtext });
      }}
    /></span>

                    </div>
                </label>
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
            <legend class="sr-only">
                <RichText.Content value={attributes.contentRVo} /></legend>
            <div class="bg-white rounded-md -space-y-px">
                <label class="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
                    <input type="radio" name="privacy-setting" value="Public access" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-0-label" aria-describedby="privacy-setting-0-description"/>
                    <div class="ml-3 flex flex-col"> <span id="privacy-setting-0-label" class="block text-sm font-medium"><RichText.Content value={attributes.contentBkX} /></span>
 <span id="privacy-setting-0-description" class="block text-sm"><RichText.Content value={attributes.contentSmI} /></span>

                    </div>
                </label>
                <label class="relative border p-4 flex cursor-pointer focus:outline-none">
                    <input type="radio" name="privacy-setting" value="Private to Project Members" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-1-label" aria-describedby="privacy-setting-1-description"/>
                    <div class="ml-3 flex flex-col"> <span id="privacy-setting-1-label" class="block text-sm font-medium"><RichText.Content value={attributes.contentICZ} /></span>
 <span id="privacy-setting-1-description" class="block text-sm"><RichText.Content value={attributes.contentCkq} /></span>

                    </div>
                </label>
                <label class="rounded-bl-md rounded-br-md relative border p-4 flex cursor-pointer focus:outline-none">
                    <input type="radio" name="privacy-setting" value="Private to you" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-2-label" aria-describedby="privacy-setting-2-description"/>
                    <div class="ml-3 flex flex-col"> <span id="privacy-setting-2-label" class="block text-sm font-medium"><RichText.Content value={attributes.contentUgq} /></span>
 <span id="privacy-setting-2-description" class="block text-sm"><RichText.Content value={attributes.contentaJB} /></span>

                    </div>
                </label>
            </div>
        </fieldset>
    </div>
</div>
            );
            },
        });
        