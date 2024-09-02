
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/brand-nav-with-overlap', {
            title: 'brand nav with overlap',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAKUBaADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAEDBgIFBAf/xABJEAEAAQMCAQkGAwcCBAUBCQAAAQIDEQQSMQUWIVJhZZGj4gYTMkFRVBSB0SJicZKToaIVIwdClLFFg8HC8CUkMzd0hLLS4fH/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQMCBgQF/8QAMREBAAEDBAECBQMDBAMAAAAAAAECAxEEFFKhIRIxE1GR0fAVgbEFQVMyMzRxQmHB/9oADAMBAAIRAxEAPwDyAHrWQAAAAAAAAAAAAAAAAAAAADma6YnEyg6HHvKe095T2mYV2OPeU9p7yntMwOxx7yntPeU9pmB2OPeU9p7yntMwOxx7yntPeU9pmB2OYrpmcRLoQAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfVydyfqeU9VGn0lEVV43TMziKY+suaqopjMq+UamPYfX46dVpvGr9DmPr/ALrTf5fow3ljkYllhqeY+v8AutN/l+hzH1/3Wm/y/Q3ljkYllhqeY+v+603+X6HMfX/dab/L9DeWORiWWGp5j6/7rTf5focx9f8Adab/AC/Q3ljkYllhqeY+v+603+X6HMfX/dab/L9DeWORiWWGp5j6/wC603+X6HMfX/dab/L9DeWORiWWGp5j6/7rTf5focx9f91pv8v0N5Y5GJZYanmPr/utN/l+hzH1/wB1pv8AL9DeWORiWWGp5j6/7rTf5focx9f91pv8v0N5Y5GJZYanmPr/ALrTf5focx9f91pv8v0N5Y5GJZYanmPr/utN/l+hzH1/3Wm/y/Q3ljkYllhqeY+v+603+X6HMfX/AHWm/wAv0N5Y5GJZYanmPr/utN/l+hzH1/3Wm/y/Q3ljkYllhqeY+v8AutN/l+hzH1/3Wm/y/Q3ljkYllhqeY+v+603+X6HMfX/dab/L9DeWORiWWGp5j6/7rTf5focx9f8Adab/AC/Q3ljkYllhqeY+v+603+X6HMfX/dab/L9DeWORiWWGp5j6/wC603+X6HMfX/dab/L9DeWORiWWGp5j6/7rTf5focx9f91pv8v0N5Y5GJZYanmPr/utN/l+jwuU+TdTyXq50+qpiKsZiqmcxVH1h3b1Fu5OKZyYfGA2QAAAAAABMRMziImZQQJmJpnExMT2oAAUAAAAAAAAAAAAAAAAAAAAAAAAAAWae3Td1Fu3XVtpqqiJn6Pb5V5L01nQ1XdPRsqt4z0zOYz2vlsciXb2ji9F2Irqp3U0Y4/m+3kXUVavS3dNqP2tkY6eMxPyfNcr/wDKmfb3SVXJPJml1Oii7eia66pmPixteNqLdNrUXLdFW6mmqYifq+vWWdRyZfm1bv1xRXGYmmqYzHauv8iXbOjqvzdia6ad1VERw+vS6pqiJzNXifZXlANwAAfM+l8zmpYB6fIWh02uvav8ZN6LWn0td/FqYiZ246OmJ+q+9yVpNVyfRrOSK7+IvU2blrUTTmmauE7oxGPkwm7TFWJV4o9i97OayibHuL2l1VN697iKrFzdFNeM4noj5dL6eT/Z6mOWtJptXqNNqbF6uuir8PdzNM00zOJ6ImOCTfoiM5MM8NDovZuqOUND+Ku6fUaW/dm1XOnu7ttURM7Zn6/wfPq/Z3WWYiqzXp9RFV6LM02bm6aK54U1fSSL9uZxkw8YevrPZ7V6W3vpvaXURF2LNfubufd1z0RFWcYTe9ndVbmz7vU6O/Tdv06fdZuTVFFc8Iq6P1X41HzHjj259mtTF+7bnWaCKbFOb1z337Fqc4imqcdE5+Sr2h5OtcmXtHatTEzXpaLlyqmrdFVUzOZifp0EXqJmKYkeS+l8z6W9KSAOkB9nJtGiuaiLetp1ExXMU0zZqiMTM/PMS9PWci6WrW6jS6Cq5b/Cz/vX9Vdpi3EfLhGczLKq7TTViVw8Aep/oeop1ddi7qNLapptxci9XdxbqpnhMT88/wAFkezur97qaK7+lt06eKKqrldzFE01cJiccOg+Nb+Zh449nU+zes09q9VVf0ldVmj3s26Luapo60Rjg8Z1Rcpr80zkAHaAAA1Ecg8m3NdTyfbq1saiuxF33szTNumZpz0xjOHm/wCgaqdNp70XdNNWpimbVr3n7deZx0Rj5cZYU6i3P98Lh5I9qOQb1jU6aa69NqrNeops1xZuzimqZ+GqcZhFPIGov3rk0XNNp6Jv12rNF27ia5icYp6On6Z6F+Pb+Zh4w9XS8gavUUbq7un00zcm1RTfubZrqjomI6Onp6F1z2fro5LtX41FqdTXf9z7jd07sxG2O2J49hN+3E4yYeIPQ5R5Ju8n0bq9Rpr2K5t1RauZmiqPlMTEPPaU1RVGYAB0gD6NBpa9drrOlonFV2uKc4zj6ykzERmVfOPZ1VjkOn8TYs3tVbvWYnZcuYqpu1R8sRGYz8p8VU8h6j8FVqab+lrqot+9rs0Xc3KafrMf/wBs4vU/38f9mHlj3tbyDnlC9Rpa7VjT2bVuqu5fuYpiaojoz2zlRR7Paubuqou3tNZjTbN9dy5imYqziYnHDo/ukX7cxnJh5A9aPZ/Wfi9RYuXNPap09NNVd65Xi3ir4cTj5r9fyHTb1mm01i9Yt50dN67duXf2M5mJmJ+nDGD49vOMmHhD2KfZ3V1amuz77SxTRZi/72bn7FVE/wDNE44cfB5V637q9Xb30XNlU07qJzTVj5xP0d03KavFMjgB2gAANDouR9Dd0HJ969a19y5rKq6ZmxNO2jFWMzEx/wCv1UT7PXqtTqKKNVpqLNq/7im5er276vpHHpYbijMxP5/ZcPFHrWPZ/VXLV25dv6XTU2r02Kvf3NuK4iJxw7SjkDWe91FF+5p9NTp64oquXrm2map6YiJ+fR0uvjW/mYeSPWt+z+rqvau1du6ax+EmmLtV25in9rOJicf/ADMLrns7VOl0FWl1Vi9e1czGyK+jonjHRwiOKTftxPv+Yz/Bh4Y+zX8nV6GLdU6jTX6a8xFVi5uiJjjE/R8bSmqKozAAOkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGy/4e0xNevqx+1EW4ieyd36Ma2f/AA9/8Q/8v/3Pk13/AB6v2/l1Hu2SJmKYzMxER85S82u3TrOVL1nUTM27NNO23u6Ks8ZeddvRiYqjMTExPzhLzKLNOi5VtW9Pmm3fpqmujjETHzemAPm5S1Nek0F3UWqN9VEZiJzjjxnHyjj+T5tLrqpt3b17VaS/pqKN03LOYmmfpMZkHpD4bXKlquLkVWdRaroo95srt/tVU/WIjOXE8sWKLN65es6i1Nnbut10RuxVOImMT0mB6I+CvlWijbH4XVTcmma5t00RNVFOcZnp+eP4qbnK8W9XXEWrt6x+Hou0+7ozMRMzmZzj6R0LgeqObVyi9Zou25zRXTFVM/WJdIAAAAAAAAAAAAAAAAAAAAAAAAAADGf8QojdoKvnMXI//a2bG/8AEL/w/wD8z/2vr0P/ACKf3/hJ9mMAeiZgPv5HsWr2qrrv077di1Veqp+uPk5qq9MZFccnaudHOqi3/tY3cYzj6444fI++nlbUxro1X7MzFOzZt/Z2dXH0OV7FqzqqK9PTNNq/apu009XPycU1VZxUPgAaj0+SuTfxVM372fdU8KY41S0HIPuI08VURRTNX7WOxFzR1U8le4t1TRVTbjExxzHT/d4uj0+lpv0U3r1VFyq1NdP7XxTmMRER8ujg8trtRVeq9/D67EYmZajWxptTY21xbuU1Tj5Sx3KGhixVVcsx/txMRMdV7F3kyzd02Jmq1TGa9tMzxmOh3pOT6vwFdq5XNz3lvETVx+eHGi1NVm5GJ8fJ1eozGWVAesfEAAAAAAAAAAAAAAAAAAAAAAAAAA++zytq7WmjTW9sxjFNWP2o/g9Xk2x/pnJ92/qIxVVG6qI+URwj+PSz+nu+51Fu7FMVbKoqxPzw9XlLle1qtHNm1bria8bt2OjE5fPcomZ9NMeJ90l896nXcq1zqKbUzRT0UxE4iI+kfVF7lbV16adNc2x0baqsftT2Sv5N5Xt6TSe5u26p2zMxNPzeZfuzfv13aoiJrqmcR8nVNOZxMeI9lVgNgAAfM+l80xicS5qWHqcg67S6G9qvxsXptajTV2J91ETVG7HT0zH0l9tHK/JektafSaPS37mljURe1E6jbuuY4RiOjHzZ4YVWaapzKtXyh7R6HU2LFmK9fXFvVxfmrbRbmmnExinb84zH9+l1PtLoI5Q0Ooqo1Ooq09ddVd+u1RTcmmaZiKf2ZxPHjLJDPa28YMvf5E5b03J+j01m9bvVVWtbOoqmiImNvu9uIzPHK6jl3k/k+mqeS7Opqrvami9di/tiIimc7Yxn68WaHU2KJnMmWkq5Y5J08XqdJp9Tdo1epou6im/FONtNW7bGJ6eM8X16v2o0N2izRR+Lri3rLeo/bt0UxTRTOdsYn/uyAk6aifMmXuablXQ1V8q2dbRqI02vuRcpqtRG+iYqmqOiej5vn5e1+l11/S/gqL1NnT6aixHvcbp2zPT0T9Jh5Y7i1TFXqgH0vmiMziH0t6UkAdIs09yLWptXKszFFcVTjsl7+n9obNrlPlK7Hv7dnWzE010U0zXRMcOiej5yzgyuWqbn+pctPT7QaSdZfu3KtXNU2aLdrUVW7dVyjEzM9HCInP8A8+VfKnL2l1tnX0W6L+7U2rNFM1xTxoqmZzie1nBnGltxOfz88GXv3OW9NVq9Tdi3e23eT50tPRGYqxEZnp4dDwAa0W6aPYAGiAAPb5W9odTq4ps6S/etaX3VNFVE4jMxGJ4fJH+s27et5K1Nq3XM6KzTbrpqxG6enOPyl4oxixbiMRC5ajk/WaGdRZ0nJlN6Kbmro1F6vUTTTFFFE5xHSst+0entxXZqvaq3Ta1FyuirT00VRcpqqmendw4smM50tEz5MvenlTk3Xae3b5Ut6vNi9cuUe6mmd8V1bpiqejpz84VUcpaKeTKNNXb1FuqzqvfWotVRiKZmOjdPTmIzicfR4w0+BTBl7vLfK+l1+hos2/f3rtN3dF6/bopqpoxjbmni8IHVu3Fun00gA0QX6HVV6LW2dVbjNVquKoj69igSYiYxKvb1Wp5Cn8TqLGn1Vy/firbbu4ii1VPzzE5nHyffc9otB/p9+xZo1NuLumm1TYi3RFuiqYxnPGWVGE6aicZzODLU2/aaxGo1UROps2r9FvbcoppmumqmMT0T0TEvj13LdnVWOUbedRXOoizFuq5FOcUTMzuxjHH5ZeEFOmt0zmI+XWPsZaOvlvQai3d02pt6mLF3T2bc1URTuprt9kziYnKynl3k2nXW67drUU27Wjp09q5VRRVXbqiZ6YiZxwlmA21Blpdf7QaTUzqNlOon3mip08VV00xM1RVM5nE4+fyZoGlu1TbjFIANEAAe9ovaGrRabku1Ym7Eaaq5+Io/5bkVVZj59PRnj8306Ll/Saaze01u5rbNn383bVduiiappnjTO6Z8WYHz1aa3V7x+e65aivV6DWciXrvKNWp2XOUJrp93NM1/BHHhHBTquW9Byl+Ks661qLdi5fpvWps7ZqjFMUYnP1iGdEjTUx+exl7mu5bs6u3ypTFq5R+K9zFmOicU0dbtn80WOU9FGh5Nt3vxdF7RV15mzMRmmqc5ifrHQ8Qd/AoiMR+eMfwZezy7yppuULWnptRcuXbc1b7923TRVVE8I/Z+jxgd0URRT6YAB2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2f/AA9/8Q/8v/3MY2P/AA+rpi5r7cz+1VFExHZG7P8A3h8mu/2Kv2/l1Hu2j5dVoqNRcpu03K7V6noiuicTj6S+oeddvMuaG9p6o1Wmu13b9MYqi5Od9P0ffp7sX7FF2Kaqd0cKoxMLAFOqpv16eqNLcpt3uiaZqjMceE9k8Hl18k3tXc1FzUUafTzdsTaxZmZ3TMxO6roj6PaDI8OnkjU+6v7KNLpr1drZTXaqrmZnMTOZnhE4+X1Rb5G1ERqJinT2ve+6xTTXVVjbXmczMdPR/wDPm90XJh8Go0+so11eq0U2KpuW4orpuzMYmJnExiJ+s9CbekvxqL127coqm5p6LeYjGao3ZnHyjpfcIKNDZq0+g09iuYmq1apomY4ZiMLwAAAAAAAAAAAAAAAAAAAAAAAAAAAY3/iF/wCH/wDmf+1smK/4g3KJvaG1E/t0011THZOIj/tL69B/v0/v/CT7MeA9EzHqck39FYsamNTcu0XL1E2ommnMRTPF5Y5qp9UYGhjkLRzf91Go1GNm/f7v9jbjOcvi5Wv6G/Y00aa5cruWaItTNVOImmOH5vi/Gar8P+H/ABFz3PDZunChlTbqzmqcgA3H6Byfcp1mgtX6Zzvp6f4/P+7M2qtPpuV50925RFyxHuun5Y4TH8YmHyaHlfV6DT3rNiqMXI/Zz/yVfWHlVcnXuUtTVqLurinUVdNdVc43S8zrdJXbq8R4fRZqxLXa/XU02/caaqLlyqcZmc4fTbmdDyJVevXJqr2zVEzPznhEPC0NGl0Gnim7dpruUZndE53T8nPKnK1zX0W7VNPu7NuIxRnOZxxlzodHXcrzMeGl+vxh5oD1D4wAAAAAAAAAAAAAAAAAAAAAAAAAATtq6s+Btq6s+CCBO2rqz4G2rqz4AgTtq6s+Btq6s+AIE7aurPgbaurPgCETTE8YdbaurPgbaurPgDjZT9INlP0h3tq6s+Btq6s+B4HGyn6QbKfpDvbV1Z8DbV1Z8DwONlP0g2U/SHe2rqz4G2rqz4HgcbKfpBsp+kO9tXVnwNtXVnwPA42U/SDZT9Id7aurPgbaurPgeBzFMRwhKdtXVnwNtXVnwBAnbV1Z8DbV1Z8AQJ21dWfA21dWfAECdtXVnwNtXVnwBAnbV1Z8DbV1Z8AQJ21dWfA21dWfAECdtXVnwNtXVnwBAnbV1Z8DbV1Z8AQJ21dWfA21dWfAECdtXVnwNtXVnwBAnbV1Z8DbV1Z8AQJ21dWfA21dWfAECdtXVnwNtXVnwBAnbV1Z8DbV1Z8AQJ21dWfA21dWfAECdtXVnwNtXVnwBAnbV1Z8DbV1Z8AQJ21dWfA21dWfAECdtXVnwNtXVnwBAnbV1Z8DbV1Z8AQJ21dWfA21dWfAECdtXVnwNtXVnwBAnbV1Z8DbV1Z8AQJ21dWfA21dWfAECdtXVnwNtXVnwBAnbV1Z8DbV1Z8AQJ21dWfA21dWfAECdtXVnwNtXVnwBAnbV1Z8DbV1Z8AQJ21dWfA21dWfAECdtXVnwNtXVnwBAnbV1Z8DbV1Z8AQJ21dWfA21dWfAECdtXVnwNtXVnwBAnbV1Z8DbV1Z8AQJ21dWfA21dWfAECdtXVnwNtXVnwBAnbV1Z8DbV1Z8AQJ21dWfA21dWfAEL9Jq9RotRTqNLdm3dp4VR/wDOlTtq6s+Btq6s+BMRMYke3zt5a+5o/pU/onnby19xR/Sp/R4e2rqz4G2rqz4MdvZ4x9FzL3OdvLX3FH9Kn9Dnby19xR/Sp/R4e2rqz4G2rqz4G3s8Y+hmXuc7eWvuKP6VP6HO3lr7ij+lT+jw9tXVnwNtXVnwNvZ4x9DMvc528tfcUf0qf0OdvLX3FH9Kn9Hh7aurPgbaurPgbezxj6GZe5zt5a+4o/pU/oc7eWvuKP6VP6PD21dWfA21dWfA29njH0My9znby19xR/Sp/Q528tfcUf0qf0eHtq6s+Btq6s+Bt7PGPoZl7nO3lr7ij+lT+hzt5a+4o/pU/o8PbV1Z8DbV1Z8Db2eMfQzL3OdvLX3FH9Kn9Dnby19xR/Sp/R4e2rqz4G2rqz4G3s8Y+hmXuc7eWvuKP6VP6HO3lr7ij+lT+jw9tXVnwNtXVnwNvZ4x9DMvc528tfcUf0qf0OdvLX3FH9Kn9Hh7aurPgbaurPgbezxj6GZe5zt5a+4o/pU/oc7eWvuKP6VP6PD21dWfA21dWfA29njH0My9znby19xR/Sp/Q528tfcUf0qf0eHtq6s+Btq6s+Bt7PGPoZl7nO3lr7ij+lT+hzt5a+4o/pU/o8PbV1Z8DbV1Z8Db2eMfQzL3OdvLX3FH9Kn9Dnby19xR/Sp/R4e2rqz4E01Y+GfA29njH0My9637U8vXZmLd3fMcdtmJx/Z3zj9o/wB//p4/RuuT9FZ5P0dvTaeiKaaI6ZiPin5zPa+l+TVq7WfFuMOsS/POcftH+/8A9PH6HOP2j/f/AOnj9H6GOd3b/wAcfn7GH55zj9o/3/8Ap4/Q5x+0f7//AE8fo/Qw3dv/ABx+fsYfnnOP2j/f/wCnj9DnH7R/v/8ATx+j9DDd2/8AHH5+xh+ec4/aP9//AKeP0OcftH+//wBPH6P0MN3b/wAcfn7GH55PtF7RzH/PH/6eP0eTqo5Q1l+q/qbeou3KuNVVEv1kd0a+mjzTbiD0vyD8Jqftr38kn4TU/bXv5Jfr40/VKuPZ6X5B+E1P217+ST8Jqftr38kv18P1Srj2el+QfhNT9te/kk/Can7a9/JL9fD9Uq49npfkH4TU/bXv5JPwmp+2vfyS/Xw/VKuPZ6X5B+E1P217+ST8Jqftr38kv18P1Srj2el+QfhNT9te/klxctXLUxFy3XRM8N1Mxl+xPm5Q0VnlDR3NNqKIqprjomY+GflMdq0/1Tz5p8HpfkYRwH6zgAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAETwlKJ4JI/ZgHk2oM9qv9Rta+rki1euTb1lU3beomv9uzbj/wC8pieOczG36buxZb5V1kWres91Z/0+dRFiImapu437IrmeE9Py+nzXA90eRPKt78BVqNlvdGu/DYxONvvdmePHCzkrV63WX9TXep09GmtXrtmiKYnfVNNWImZziOiOBgemMrrtTa/1jlW3c1HKU3rfu/cW9NVdmImaI+VP7PTP1fZa5R5Tt3YtainTxGm0du/qqqomapmYq3REROP+Wen/ALmEy94eLY5R5SmvSRqbelpjXUVTZ2bp93Vt3RFXT+1GInhh8PJFV+jT8l3dTVTduarVVzNcVVxMfsV8f2sTw/hj5GFagZPR8uXrGg5P0lu5ai9Oki9Xcv0115/amIj9n59E9M/3aPk7VfjeT7Gqm3NubtEVTRPGmfoYH0gIAAAAAAAAAAPxmOCURwS9ZDIAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAETwSirgkj9mAeTaqLmkt3NdZ1czV7yzRXRTET0TFWM5/lh8cciaeNRFfv9R7mLvvo02+PdxXnOeGePTjOMvTAeTXyDYrv1V/itVTbm/Go9zTXGz3kVRVnhnpmOGfm+/R6S3o6LlFqapi5druzun51TMz+XSvAUWdJbs6rUaimapr1E0zXEz0RiMRhH4Kz+Lv6irdVVft02q6Z+HbG7/8AlL6AHnaPkezpb9q5+I1N6LFM02KLtcTTaiejo6Mz0dHTnod2uSrFq1o7dNdyY0dc128zHTMxVHT0fvS+4MjyqeQ7Nu1Yp02q1Viuxa91Fy3VTuqoznE5iY/s9KxaixZotU1V1RRTERNdU1TP8Zni7AAAAAAAAAAAAAfjMcEop4JeshkAKAAAAAAAAAAAAAAAAAAAAAAAAAvt6PVXaIrt6a9XRPCqm3MxLm7ptRZjN6xdtx9a6Jhz6ozjKqgHSAAAmImZiIjMzwhZe09+xj39m5bzw30zGfFMwKgWzptRTZ99VYuxa475onb4kzECoBQAAAAAAFtrTai/EzZsXbkR0TNFEzjwVJmAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEVcEoq4JI/ZgHk2oPMq5Zo97c93o9VdsWrk27l+imJppqicT0Z3TieOIfdXqdPbv02Ll+1Tdr+G3NcRVV/CAWjz6+XOTaPxcVau3nRxm7G6M8I4fXjEfx6FlHKWnuVUVUXLc6eqzN333vadsRExE/PP58IwD7BVZ1WmvzXFjUWrk25xXFFcTt/jjg5s63SX5xY1Vi5PT0UXInhx4fTMeILxVp9Vp9VFU6bUWr0UziqbdcVYn8loAAAAAAAAAAAAAAPxmnglFPBL1kMgBQAAAAAAAAAAAAAAAAAAAAAAAB+j8i6mdH7G2tTFO+bVmuvbnGcTL5uSfayxylqqdHqtLFmbv7NM7t1NU/SYw60f/4f1f8A5a5/6sh7P6a7qeW9JTZpmqaLtNyqY/5aYmJmX49Fi3ci5VV7xMu8vR9ruR7eg5QtV6Ojbb1OcW6Y4VRjMR4x0O9P7F8o3bUV3btizMxmKJmZmP44jH/d7ftXF69yhyTptHNP4mbtVdE1dMU4x0z2fo719i1Zrszyv7QX6L1PTTFrbbz27YicrTqbnwqIifM/vJjyxnKnI+t5Kv0WtTRE+8+Cqjppq/g9XTexfKV21Fd27YszMZiiqZmY/jiMPe9srs6fR6HUU0bqrWroqiPriJnH9k6jU8j8vW7EVa+7pbtE5oj3nuq4meyeifydbu9Vbpqjx75nGUxDJXuSNXyRyvo7erppxXdpmiuic01dMZa72q5J1XK/4SzpdkbJqqqqrnERwef7RablKzqNBVqdbGp034miKc2qaaqas9nHoy+r241up0mi01GmvV2veVzuqoqmJ6I4Zj+Lmq5XcrtzExnz/wBKzXLHs1reSrH4iuq3ds5xNVGf2f4w1V7SXtd7EWNLp6d125YsxETOPnTM/wBnNF+vX+wdd3UzvrnT15mZzMzTMxE/x6IlbVfv6b2It3tNn3tGkoxMfLojM/lGZcXL1yv0xV/qirBhndT7F8o2dNN23ds3q6YzNunOZ/hmOl43JvJuq5T1X4fSUZqxmqZnEUx9ZlrvYbXavVU6yjU3rl6iiaZpm5VNUxM5z0z/AAff7NWbVu/ytXbxunXV0zOPlHTEflMy2q1V2166a/MxjtMZZ657Ea+m1uo1Gnrrx8PTHhOHgUaDV16/8DTYq/E7tvu/nn/583v+zfKfKN/2oii/fu1U3Zri5bqmZinETPD5YmIetyjpdXc9src8nXKLFydLFVy7VRFWI3THD68Id/Hu265ouTE+MmIeTHsRyhNvM6nTRX1c1Y8cPJt8h62rlinku5TTav1ZmJrn9mYiJnOY+XQ21m1prXLdub/Ld+9reHuYqiKZ6OE0xHR0dP8AdXr4jnxyXOOmbNf/AGqZUau7mYmc+Jn2wuHgx7F6+mLk3NRp6aaKcxMTM7uzg+fkr2V13KOlp1M127FquM0b85qj64+j7/bblDWWeVLensam7atRZiZpoqmnMzM5zjjwh7HtRfvaD2ctxoK6qI3UW99E4mmjHyn5cIj83Xx7/pp8xmrpMQt9luS9TyTpdRp9VtmZu7qaqJzFUYh+b1/HV/GX6J7GavU6vkaqrVXK7k0XZpprrnMzGInj8+mZfndfx1fxl3o/V8W56vfx/wDSfZyA/RcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACKuCUVcEkfswDybVluUKa6b+or0Gl5Q0nKU3J2xZiqqzenPRVV/yYmOOcTCrlDQ6ivW6+1ejVbtTeortVWdLFzMRFOMVz8OJieMx9fm1wuUwzuo0tdd32g09OlrmvVWd1mv3f7NX+1FON3DO6OH5vn11m9qdLVXp9JqIirkq7bimbNVMxXup/ZxjjOJ/i1QZMM3ypydXF27b0VqLFFfJly3NURtozFVOImeEdG7+757lNrU8q00U8lXtNTVydeoqopiimuuP2YxTicdGeiZ+rV10U3KKqK6YqpqjE0zGYmPo+bR8m6LQ1VVaTTW7VVUYmaY6Zj6fwMmHl+z8XqdVeibNU2abVFNN+7pfcXMxn9iY/5sfWI+b3gRQAAAAAAAAAAAAAH4zTwSingl6yGQAoAAAAAAAAAAAAAAAAAAAAAAAA2HJPtRybpORrOh1Wnv3JppmmuIopmmrMz9Z7X0R7YclaWxNOg5Pu0z8qIopt0/2mf+zDj450VqqZmc+f/brMvVnl7V18u2+VbsU1XLc9FHCIp4bY/KZ8Wg1XtRyJfmjU18nXLuqtx/t+8op6J4x054ZYod16W3XMTjGPkmWr5e9qNNr7Gm/A279F6xfpvRNymIjoifpM/V9Nz2l5E5Ss2/8AVdDcm5b6YjbFURPZOYnxYsc7O1iIjPgy03LftPb5RvaW3Zs10aazdpuzuxuqmOzhHzV+1HL2l5YtaejTW71E2qqpn3kRHHH0mWdHdOlt0zTMR7GWm0ntDo7PstVyXVbvzfm1XRuimNuapmY+efn9H26T2v0Om5J0+l/DX7ly3bot1RMUxTOMRPTn6Z+TGDmrR2qs5+eTLcT7W8k6PR1U8m6Oqiurpi3FuminP1nEvC5C9obvJmtvXb1M3rWoq3XYjonOeMeMvECnSWqaZpxnJluo9qeQrFdeq0+jr/EXIndMWqaap/jOXi6L2nvWuXrvKOptzVbvU7KrdM/DT8sdsf8ArLPhTo7VMTHvky21XtRyHRrI1dnk+5Ooq+O5NumKoj5/Pi+TVe0uive0Wi5RptaiLNi3VTVE007pmYnh09rKCRo7UfP2x7rl63tJynY5W5Sp1OmouU0RbijFyIicxM/SZ+r3OS/avRTyZRo+VbFVc0UxRMxRFdNcRwzE/NjR3VprdVEUT/b2TLdaf2y5LsUzat6K/as0zi3TbopiMfPozGOlhqpzVM/WUC2dPRamZp/uTOQBugAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAirglFXBJH7MA8m1AAAAAAAAAAAAAAAAAAAAAAfjNPBKKeCXrIZACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAirglFXBJH7MA8m1ZnVze0mr1F7lOrlC3T76arWrsXZm1boz0RVRE4j6TmmcvonlC9a1eqsaS3bm/e1sWaKrlVU0x/tRXNUxn6RPRGH03uQrN2btE6vVU6a9XNdzTU1xsqmZzMcMxE/OIlzyhyVFVm9Vprfvbt3UU35iq7NuaZimKc0VRHROI+faqPmr5X5StfiLNdnS1ai1qrNinbNUU1b4jp+scf8A/Xocm6rU3b+r0uti177T1U/tWomKaqaozHRMzieL4uTeRKqab1es3UVXNTRfppi7NyYmiIxuqmOnMx0vWtaW3a1eo1NM1TXf27omeiNsYjAPKvcr62mnUa2i1YnQ6e/NmqmZn3lURVtqqieHROej54W3eVr1HJ2q1EW7e6zrIsUx04mn3lNOf44lZc5E09y/XXN7URZuXIu16eK493VXmJzPRnjGcZw4v8g2L127V+K1VFq7epvVWaa42b4mJzwz8uGcHgOSL2uu6/lKnVXrVdq1f2URTTMTT+zTP14dPi9Z8tjQ0WNdqNVbu3f/ALRia7czGzdERG6OjOcRHzfUigAAAAAAAAAAAAAPxmnglFPBL1kMgBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARPBKJSR+yxMVRExOYnpiUvznk32v1+g0tOnqt29RRRGKJrzFUR9M/N9XPvV/Y2P5pfgVaC9E4iGnqhvBg+fmr+xsfzSc/NX9jY/mlzsb/yPVDeDB8/NX9jY/mk5+av7Gx/NJsb/AMj1Q3gwfPzV/Y2P5pOfmr+xsfzSbG/8j1Q3gwfPzV/Y2P5pOfmr+xsfzSbG/wDI9UN4MHz81f2Nj+aTn5q/sbH80mxv/I9UN4MHz81f2Nj+aTn5q/sbH80mxv8AyPVDeDB8/NX9jY/mk5+av7Gx/NJsb/yPVDeDB8/NX9jY/mk5+av7Gx/NJsb/AMj1Q3gwfPzV/Y2P5pOfmr+xsfzSbG/8j1Q3gwfPzV/Y2P5pOfmr+xsfzSbG/wDI9UN4iZimJmZxEdMywnPvV/Y2P5pfLyl7X6/X6WrT027enorjFc0ZmqY+mfk6p0F6ZxMHqhn44JRCX78MwBQAAAAAAAAAAAAAAAAAAAAAAAngg9/kb2W1fKliNRXcp09ir4aqqczV2xH0epzE7z8j1Nhbt02rVFu3GKKKYppj6RDp+BX/AFC9NWaZxDT0wxvMTvPyPUcxO8/I9TZDnfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqOYnefkepsg32o5dQYhjeYnefkeo5id5+R6myDfajl1BiGN5id5+R6jmJ3n5HqbIN9qOXUGIY3mJ3n5HqRzE7z8j1NmG+v8uoMQxU+wnefkepHMTvLyPU2uDBvr/LqDEMVzE7y8j1HMTvLyPU2uDBvr/LqDEMVzE7y8j1HMTvLyPU2uDBvr/LqDEMVzE7y8j1HMTvLyPU2uDBvr/LqDEMVzE7y8j1HMTvLyPU2uDBvr/LqDEMVzE7y8j1HMTvLyPU2uDBvr/LqDEMVzE7y8j1HMTvLyPU2uDBvr/LqDEMVzE7y8j1HMTvLyPU2uDBvr/LqDEMVzE7y8j1HMTvLyPU2uDBvr/LqDEMVzE7y8j1HMTvLyPU2uDBvr/LqDEMVzE7y8j1HMTvLyPU2uDBvr/LqDEMVzE7y8j1PN5Z9ltXyZYnUUXKdRYp+KqmnE09sx9H6Phzct03bVduuM0VxNNUfWJdUa+9FWapzB6YfjoRwH77MAUAAAAAAAAAAAAAAAAAAAAAACeATwQfsoDybUBEVRMzET0wCRR+J/c/u7u3Pd46M57QWCu1c95noxjtcfif3P7gvFd257vHRnPaWrnvM9GMdoLBR+J/c/u7u3Pd46M57QWCu1c95noxjtcfif3P7gvHF257vHRnPai1d95noxjtBYKPxH7n93dy5siJxnPaCwV2rvvM9GMdrj8R+5/cF4ruXNkROM57S1d95noxjtBYKPxH7n93dy5siJxnPaCwV2rvvM9GMdrj8R+5/cF4ruXNkROM57S1d95noxjtBYKPxH7n93dy5siJxnPaCwV2rvvM9GMdrj8R+5/cF4ruXNkROM57S1d95noxjtBYKJ1GJmNn93dy5spicZz2gsFdq77yZjbjHa4nUYmY2f3BeK7lzZTE4zntLV33kzG3GO0FgonUYmY2f3d3LmymJxnPaCwV2rvvJmNuMdridRiZjZ/cF4ruXNlMTjOe0tXfeTMbcY7QWCidRiZjZ/d3cubKYnGc9oLBXau+8mY24x2uJ1GJmNn9wXiu5c2UxOM57S1d95MxtxjtBYKJ1GJmNn91ly5spirGc9oOxXau+8mY24x2uJ1GJmNnDtBeK67myiKsZz2lq77yZjbjHaCwUTqMTMbOHa7rubKIqxnPaCwV2rvvJmNuMdridRiZjZw7QXiuu5soirGc9pau+8mY24x2gsFE6jEzGzh2u67myiKsZz2gsFdq77yZjbjHa4nUYmY2cO0F4rrubKIqxnPaWrvvJmNuMdoLBROoxMxs4dqyu5soirGc9oOxXbu+8qxtx0Z4uatRtqmNvCccQXCuu5tt014zn5ZLd33lWNuOjPEFgpq1G2qY28JxxdV3NtumvGc/LILBXbu+8qxtx0Z4uatRtqmNvCccQXCuu5tt014zn5ZLd33lWNuOjPEFgpq1G2qY28JxxdV3NtumvGc/LILBXbu+8qxtx0Z4uatRtqmNvCccQXCuu5tt014zn5ZLd33lWNuOjPEFgpq1G2qY28JxxdV3NtumvGc/LILBXbu+8qxtx0Z4uar+2qY28O0FwrqubbcV44/LKLd7fVjbj8wWimq/tqmNvDtdVXNtuK8cflkFgqt3t9WNuPzRVf21TG3h2guFdVzbbivHH5ZRbvb6sbcfmC0U1X9tUxt4drqq5ttxXjj8sgsFVu9vqxtx+aKr+2qY28O0FwrqubbcV44/LKLd7fVjbj8wWimq/tqmNvDtdVXNtuK8cflkFgqt3t9WNuPzRVf21TG3h2guHFVzFqK8cfllzbvb6tu3H5gtFNd/bVNO3OO11NzFqK8cflkFgqt3t9W3bj80V39tU07c47QXCubmLUV44/LKLd7fVt24/MFoprv7app25x2upuYtRXjj8sgsFVu9vq27cfmiu/tqmnbnHaC4VzcxaivHH5ZRbvb6tu3H5gtFNd/bVNO3OO11NzFqK8cflkFgqt3t9W3bj80V39tU07c47QXCubmLUV44/LKLd7fVt24/MFoprv7a5p25x2upuYtb8flkFgqt3t9cU7cfmiu/trmnbnHaC4Vzcxa34/LKLd7fXFO3H5gtFNd/bXNO3OO11NzFrfj8sgsFVu9vrinbj80V39tc07c47QXCubmLW/H5ZRbvb64p24/MFoprv7a5p25x2upuYtb8flkFgqt3t9cU7cfmiu/trmnbnHaC4Vzcxa34/LKLd7fXFO3H5gtHEXKZrmj5uwAAfjUcAjgPWMgBQAAAAAAAAAAAAAAAAAAAAAAJ4BPBB+ygPJtRTYoqiqqquJiVyqxcqr3bvkC0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFVy1uqiqnET81qjUzMbcTMcV4AAPxqOARwHrGQAoAAAAAAAAAAAAAAAAAAAAAAE8Angg/ZQHk2ortRRGdk5+qxTp6aqd26MZwC4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFd2umjG6nOViu9bm5jExGFgAAPxqOARwHrGQAoAAAAAAAAAAAAAAAAAAAAAAE8Angg/ZQHk2oqs3Kq927HQtV2qaKc7Jz9ekFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKNTMxtxMxxXq7tdNGN1OcrAAAfjUcAjgPWMgBQAAAAAAAAAAAAAAAAAAAAAAJ4BPBB+ygPJtRTp6aqd26JjguVWblVe7djoBaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACu9bm5jExGFijUzMbcTMcV4AAPxqOARwHrGQAoAAAAAAAAAAAAAAAAAAAAAAE8Angg/ZQHk2ortU0U52Tn69KxTp6aqd26JjgC4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFd2umjG6nOViu9bm5jExGFgAAPxqOARwHrGQAoAAAAAAAAAAAAAAAAAAAAAAE8Angg/ZQHk2oqs3Kq927HQtV2qaKc7Jz9ekFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKNTMxtxMxxXq7tdNGN1OcrAAAfjUcAjgPWMgBQAAAAAAAAABs+Ynefkeo5id5+R6myHnd9qOXUfZpiGN5id5+R6jmJ3n5HqbIN9qOXUfYxDG8xO8/I9RzE7z8j1NkG+1HLqPsYhjeYnefkeo5id5+R6myDfajl1H2MQxvMTvPyPUcxO8/I9TZBvtRy6j7GIY3mJ3n5HqOYnefkepsg32o5dR9jEMbzE7z8j1Iq9hMRP/wBT8j1Nmir4ZN9qOXUfYxCQHyKKdPTVTu3RMcFyqzcqr3bsdALQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV3rc3MYmIwsUamZjbiZjivAABjKfYTMR/9T8j1J5id5+R6mxp+GEvr32o5dR9kxDG8xO8/I9RzE7z8j1NkG+1HLqPsYhjeYnefkeo5id5+R6myDfajl1H2MQxvMTvPyPUcxO8/I9TZBvtRy6j7GIY3mJ3n5HqOYnefkepsg32o5dR9jEMbzE7z8j1HMTvPyPU2Qb7Ucuo+xiGN5id5+R6jmJ3n5HqbIN9qOXUfYxAA+RQAAAAAAAAABFXwylFXwyCQAFdqminOyc/XpWKdPTVTu3RMcAXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4u100Y3RnPY7V3rc3MYmOj6rAAART8MJRT8MJAAAAAAAAAAAAAAAAAAAAAAAAARV8MpRV8MgkABVZuVV7t2OhartU0U52Tn69ILAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU6iqaduJmOPBcru1UU4305zw6FgAAIp+GEop+GEgAAAAAAAAAAAAAAAAAAAAAAAAIq+GUoq+GQSAAp09NVO7dExwXKrNyqvdux0AtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXetzcxiY6PqsU6iqaduJmOPBcAACKfhhKKfhhIAAAAAAAAAAAAAAAAAAAAAAAACKvhlKKvhkEgAK7VNFOdk5+vSsU6emqnduiY4AuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXdqopxvpznh0LFd63NzGJjo+qwAAEU/DCUU/DCQAAAAAAAAAAAAAAAAAAAAAAAAEVfDKUVfDIJAAVWblVe7djoWuLVNFOdk5+vSDsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFOoqmnbiZjjwXK7tVFON9Oc8OhYAACKfhhKKfhhIAAAAAAAAAAAAAAAAAAAAAAAACKvhlKKvhkEgAKdPTNO7MTHDiuV2bk3M5iOj6AsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXetzcxiY6PqsU6iqaduJmOPBcAACKfhhKKfhhIAAAAAAAAAAAAAAAAAAAAAAAACKvhlKKvhkEgAK7VNFOdlWc8elYp09M07sxMcOILgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV3aqKcb6c54dCxXetzcxiY6PqsAABFPwwlFPwwkAAAAAAAAAAAAAAAAAAAAAAAABFXwylFXwyCQAFdm5NzOYjo+ixXapopzsqznj0gsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABTqKpp24mY48Fyu7VRTjfTnPDoWAAAin4YSin4YSAAAAAAAAAAAAAAAAAAAAAAAAAir4ZSir4ZBIACnT0zTuzExw4rldm5NzOYjo+gLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV3rc3MYmOj6rFOoqmnbiZjjwXAAAin4YSin4YSAAAAAAAAAAAAAAAAAAAAAAAAAir4ZSir4ZBIACu1TRTnZVnPHpWKdPTNO7MTHDiC4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFd2qinG+nOeHQsV3rc3MYmOj6rAAART8MJRT8MJAAAAAAAAAAAAAAAAAAAAAAAAARV8MpRV8MgkABXZuTczmI6PosV2qaKc7Ks549ILAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU6iqqnbtmY4rld2qinG+M/ToWAAAin4YSin4YSAAAAAAAAAAAAAAAAAAAAAAAAAir4ZSir4ZBIACnT0zTuzExw4rldm5NzOYjo+gLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVXrdVe3bjoWqdRVVTt2zMcVwAAIp+GEop+GEgAAAAAAAAAAAAAAAAAAAAAAAAIq+GUoq+GQSAArtU0U52VZzx6VinT0zTuzExw4guAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXdqopxvjP06Fiq9bqr27cdC0AAEU/DCUU/DCQAAAAAAAAAAAAAAAAAAAAAAAAEVfDKUVfDIJAAV2bk3M5iOj6LFdqminOyrOePSCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFOoqqp27ZmOK5XdqopxvjP06FgAAIp+GEop+GEgAAAAAAAAAAAAAAAAAAAAAAAAIq+GUoq+GQSAAp09M07sxMcOK5XZuTczmIjALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVXrdVe3bjoWqdRVVTt2zMcVwAAIp+GEop+GEgAAAAAAAAAAAAAAAAAAAAAAAAIq+GUoq+GQSAArtUU0Z21ZysUaaJjdmJjgC8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFd2qinG+M/ToWKr1uqvbtx0LQAART8MJRT8MJAAAAAAAAAAAAAAAAAAAAAAAAARV8MpRV8MgkABVbu7qppqxE/Ja593Tviv5g6FVdjfXNW7GexPu/9n3efzwCwVUWNlcVbs47CuxvrmrdjPYC0V+7/ANn3efzwiixsrirdnHYC0VV2N9c1bsZ7E+7/ANn3efzwCwVUWNlcVbs47C5Z31zVux+QLRXFvFrZn88OaLG2uKt2cdgLhVcs765q3Y/JMW8WtmfzwCwU0WNtcVbs47E3LO+uat2PyBaK4t4tbM/nhzRY21xVuzjsBcKrlnfXNW7H5Ji3i1sz+eAWCmixtrirdnHYm5Z31zVux+QLRXFvFrZn88OaLG2uKt2cdgLhVcs765q3Y/JMW8WtmfzwCwU0WNtcVbs47E3LO+uat2PyBaOIt4tbM/nhxRY21RVuzjsBcKrlnfVu3Y/JMW8Wpozx+eAWCmixtqirdnHYm5Z31bt2PyBaK4t4tTRnj88OaLG2qKt2cdgLhVcs76t27H5Ji3i1NGePzwCwU0WNtUVbs47E3LO+rdux+QLRXFvFqaM8fnhzRY21RVuzjsBcKrlnfVu3Y/JMW8Wpozx+eAWCmixtqirdnHYm5Z31bt2PyBaK4t4tTRnj88OaLG2qKt2cdgLhVcs76s7sfkmm3ttzRnj88AsFNNjbVE7uHYm5Z31Z3Y/IForpt7bc0Z4/PDmmxtqid3DsBcKrlnfVndj8k029tuaM8fngFgppsbaondw7E3LO+rO7H5AtFdNvbbmjPH54c02NtUTu4dgLhVcs76s7sfkmm3ttzRnj88AsFNNjbVE7uHYm5Z31Z3Y/IForpt7bc0Z4/PDmmxtqid3DsBcKrlnfVndj8nVNvbbmjPH54B2KadPtqid3Cc8HVy17yrO7HRjgCwV0W9tuqjOc/PDmnT7aondwnPAFwruWveVZ3Y6McCi3tt1UZzn54BYKadPtqid3Cc8HVy17yrO7HRjgCwV0W9tuqjOc/PDmnT7aondwnPAFwruWveVZ3Y6McCi3tt1UZzn54BYKadPtqid3Cc8HVy17yrO7HRjgCwV0W9tuqjOc/PDmnT7aondwnPAFwruWveVZ3Y6McCi3tt1UZzn54BYKadPtqid3Cc8HV217yYndjHYCwV0W9lE05znscRp8TE7+HYC8V3bXvJid2MdhRb2UTTnOewFgojT4mJ38Ox3dte8mJ3Yx2AsFdFvZRNOc57HEafExO/h2AvFd217yYndjHYUW9lE05znsBYKI0+Jid/Dsd3bXvJid2MdgLBXRb2UTTnOexxGnxMTv4dgLxXdte8mJ3Yx2FFvZRNOc57AWCiNPiYnfw7Hd217yYndjHYCwV27eymYznPY4jT4mJ3/2BeK7tr3kxO7GOwt29lMxnOewFgojT4mJ3/2d3bXvJid2MdgLBXbt7KZjOc9jiNPiYnf/AGBeK7tr3kxO7GOwt29lMxnOewFgojT4mJ3/ANnd217yYndjHYCwV27eymYznPY4jT4mJ3/2BeK7tr3kxO7GOwt29lMxnOewFgojT4mJ3/2d3bXvJid2MdgLBxbt7ImM5z2K/wAP+/8A2BeK7tr3mOnGOwt29kTGc57AWCj8P+//AGd3bXvMdOMdgLBXbt7ImM5z2OPw/wC//YF4ru2veY6cY7C3b2RMZznsBYKPw/7/APZ3dte8x04x2AsFdu3siYznPY4/D/v/ANgXiu7a95jpxjsLdvZExnOewFgo/D/v/wBnd217zHTjHYCwV27eyJjOc9jj8P8Av/2BN+qYqpppmYnsXImmJmJmOmOCQAART8MJRT8MJAAAAAAAAAAAAAAAAAAAAAAAAARV8MpRV8MgkOMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHCART8MJRT8MJAAAAAAAAAAAAAAAAAAAAAAAAAABxiqnh0x9DdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TdX1I8XYDjdX1I8TFVXHoj6OwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==" />),
            category: 'common',
            attributes: {
  "contentKOW": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentxCI": {
    "type": "string",
    "default": " Team "
  },
  "contentsJv": {
    "type": "string",
    "default": " Projects "
  },
  "contentpLB": {
    "type": "string",
    "default": " Calendar "
  },
  "contentMEE": {
    "type": "string",
    "default": " Reports "
  },
  "contentxZx": {
    "type": "string",
    "default": "Search"
  },
  "contentHIu": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentmRG": {
    "type": "string",
    "default": "View notifications"
  },
  "contentDXi": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentFnh": {
    "type": "string",
    "default": " Your Profile "
  },
  "contentEoQ": {
    "type": "string",
    "default": " Settings "
  },
  "contentqfY": {
    "type": "string",
    "default": " Sign out "
  },
  "contenthOA": {
    "type": "string",
    "default": " Dashboard "
  },
  "contentooH": {
    "type": "string",
    "default": " Team "
  },
  "contentJAH": {
    "type": "string",
    "default": " Projects "
  },
  "contentcXJ": {
    "type": "string",
    "default": " Calendar "
  },
  "contentMtg": {
    "type": "string",
    "default": " Reports "
  },
  "contentJpc": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentsdu": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentgtj": {
    "type": "string",
    "default": "View notifications"
  },
  "contentDNh": {
    "type": "string",
    "default": " Your Profile "
  },
  "contentJge": {
    "type": "string",
    "default": " Settings "
  },
  "contenttVw": {
    "type": "string",
    "default": " Sign out "
  },
  "contentwZc": {
    "type": "string",
    "default": "Dashboard"
  },
  "imageurlYzd": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-300.svg'
  },
  "imagealtZgP": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlaNH": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtnyV": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlNgS": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtOLk": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgyIP": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\"/>"
  },
  "svgaJe": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgGgJ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svghNo": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgDjx": {
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
            value={ attributes.svgyIP }
            onChange={ ( value ) => {
              setAttributes({ svgyIP: value });
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
            value={ attributes.svgaJe }
            onChange={ ( value ) => {
              setAttributes({ svgaJe: value });
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
            value={ attributes.svgGgJ }
            onChange={ ( value ) => {
              setAttributes({ svgGgJ: value });
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
            value={ attributes.svghNo }
            onChange={ ( value ) => {
              setAttributes({ svghNo: value });
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
            value={ attributes.svgDjx }
            onChange={ ( value ) => {
              setAttributes({ svgDjx: value });
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
            <div className="bg-indigo-600 pb-32">
                <nav className="bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none">
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                        <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                            <div className="px-2 flex items-center lg:px-0">
                                <div className="flex-shrink-0">
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlYzd: media.url,
            imagealtZgP: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlYzd } 
            alt={ attributes.imagealtZgP } 
            onClick={ open } 
            className="block h-8 w-8"
          /> 
        )} 
      />
                                </div>
                                <div className="hidden lg:block lg:ml-10">
                                    <div className="flex space-x-4"> <span className="bg-indigo-700 text-white rounded-md py-2 px-3 text-sm font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentKOW} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentKOW: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"><RichText tagName="span" value={attributes.contentxCI} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentxCI: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"><RichText tagName="span" value={attributes.contentsJv} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentsJv: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"><RichText tagName="span" value={attributes.contentpLB} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentpLB: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"><RichText tagName="span" value={attributes.contentMEE} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentMEE: newtext });
      }}
    /></span>

                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
                                <div className="max-w-lg w-full lg:max-w-xs">
                                    <label for="search" className="sr-only">
                                        <RichText tagName="span" value={attributes.contentxZx} default="Search" onChange={ (newtext) => { setAttributes({ contentxZx: newtext }); }} /></label>
                                    <div className="relative text-gray-400 focus-within:text-gray-600">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                            
      <svg
         className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyIP }}
        >
      </svg>
      
                                        </div>
                                        <input id="search" className="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm" placeholder="Search" type="search" name="search"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex lg:hidden">
                                <button type="button" className="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentHIu} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentHIu: newtext });
      }}
    /></span>

                                    
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaJe }}
        >
      </svg>
      
                                    
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGgJ }}
        >
      </svg>
      
                                </button>
                            </div>
                            <div className="hidden lg:block lg:ml-4">
                                <div className="flex items-center">
                                    <button type="button" className="bg-indigo-600 flex-shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentmRG} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentmRG: newtext });
      }}
    /></span>

                                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghNo }}
        >
      </svg>
      
                                    </button>
                                    <div className="ml-3 relative flex-shrink-0">
                                        <div>
                                            <button type="button" className="bg-indigo-600 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentDXi} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentDXi: newtext });
      }}
    /></span>

                                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlaNH: media.url,
            imagealtnyV: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlaNH } 
            alt={ attributes.imagealtnyV } 
            onClick={ open } 
            className="rounded-full h-8 w-8"
          /> 
        )} 
      />
                                            </button>
                                        </div>
                                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentFnh} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentFnh: newtext });
      }}
    /></span>
 <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentEoQ} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentEoQ: newtext });
      }}
    /></span>
 <span className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentqfY} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentqfY: newtext });
      }}
    /></span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1"> <span className="bg-indigo-700 text-white block rounded-md py-2 px-3 text-base font-medium" aria-current="page"><RichText tagName="span" value={attributes.contenthOA} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contenthOA: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"><RichText tagName="span" value={attributes.contentooH} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentooH: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"><RichText tagName="span" value={attributes.contentJAH} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentJAH: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"><RichText tagName="span" value={attributes.contentcXJ} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentcXJ: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"><RichText tagName="span" value={attributes.contentMtg} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentMtg: newtext });
      }}
    /></span>

                        </div>
                        <div className="pt-4 pb-3 border-t border-indigo-700">
                            <div className="px-5 flex items-center">
                                <div className="flex-shrink-0">
                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlNgS: media.url,
            imagealtOLk: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlNgS } 
            alt={ attributes.imagealtOLk } 
            onClick={ open } 
            className="rounded-full h-10 w-10"
          /> 
        )} 
      />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-white">
                                        <RichText tagName="span" value={attributes.contentJpc} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contentJpc: newtext }); }} /></div>
                                    <div className="text-sm font-medium text-indigo-300">
                                        <RichText tagName="span" value={attributes.contentsdu} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentsdu: newtext }); }} /></div>
                                </div>
                                <button type="button" className="ml-auto bg-indigo-600 flex-shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentgtj} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentgtj: newtext });
      }}
    /></span>

                                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDjx }}
        >
      </svg>
      
                                </button>
                            </div>
                            <div className="mt-3 px-2 space-y-1"> <span className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText tagName="span" value={attributes.contentDNh} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentDNh: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText tagName="span" value={attributes.contentJge} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentJge: newtext });
      }}
    /></span>
 <span className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText tagName="span" value={attributes.contenttVw} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contenttVw: newtext });
      }}
    /></span>

                            </div>
                        </div>
                    </div>
                </nav>
                <header className="py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <h1 className="text-3xl font-bold text-white"><RichText tagName="span" value={attributes.contentwZc} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentwZc: newtext });
      }}
    /></h1>

                    </div>
                </header>
            </div>
            <main className="-mt-32">
                <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                        <div className="h-96 border-4 border-dashed border-gray-200 rounded-lg"/>
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
            <div class="bg-indigo-600 pb-32">
                <nav class="bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none">
                    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                        <div class="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                            <div class="px-2 flex items-center lg:px-0">
                                <div class="flex-shrink-0">
                                    
      <img
            src={ attributes.imageurlYzd } 
            alt={ attributes.imagealtZgP } 
            class="block h-8 w-8"
          />
                                </div>
                                <div class="hidden lg:block lg:ml-10">
                                    <div class="flex space-x-4"> <span class="bg-indigo-700 text-white rounded-md py-2 px-3 text-sm font-medium" aria-current="page"><RichText.Content value={attributes.contentKOW} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"><RichText.Content value={attributes.contentxCI} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"><RichText.Content value={attributes.contentsJv} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"><RichText.Content value={attributes.contentpLB} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"><RichText.Content value={attributes.contentMEE} /></span>

                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
                                <div class="max-w-lg w-full lg:max-w-xs">
                                    <label for="search" class="sr-only">
                                        <RichText.Content value={attributes.contentxZx} /></label>
                                    <div class="relative text-gray-400 focus-within:text-gray-600">
                                        <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                            
      <svg
         class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyIP }}
        >
      </svg>
      
                                        </div>
                                        <input id="search" class="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm" placeholder="Search" type="search" name="search"/>
                                    </div>
                                </div>
                            </div>
                            <div class="flex lg:hidden">
                                <button type="button" class="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentHIu} /></span>

                                    
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaJe }}
        >
      </svg>
      
                                    
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgGgJ }}
        >
      </svg>
      
                                </button>
                            </div>
                            <div class="hidden lg:block lg:ml-4">
                                <div class="flex items-center">
                                    <button type="button" class="bg-indigo-600 flex-shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentmRG} /></span>

                                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svghNo }}
        >
      </svg>
      
                                    </button>
                                    <div class="ml-3 relative flex-shrink-0">
                                        <div>
                                            <button type="button" class="bg-indigo-600 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentDXi} /></span>

                                                
      <img
            src={ attributes.imageurlaNH } 
            alt={ attributes.imagealtnyV } 
            class="rounded-full h-8 w-8"
          />
                                            </button>
                                        </div>
                                        <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentFnh} /></span>
 <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentEoQ} /></span>
 <span class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentqfY} /></span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:hidden" id="mobile-menu">
                        <div class="px-2 pt-2 pb-3 space-y-1"> <span class="bg-indigo-700 text-white block rounded-md py-2 px-3 text-base font-medium" aria-current="page"><RichText.Content value={attributes.contenthOA} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"><RichText.Content value={attributes.contentooH} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"><RichText.Content value={attributes.contentJAH} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"><RichText.Content value={attributes.contentcXJ} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"><RichText.Content value={attributes.contentMtg} /></span>

                        </div>
                        <div class="pt-4 pb-3 border-t border-indigo-700">
                            <div class="px-5 flex items-center">
                                <div class="flex-shrink-0">
                                    
      <img
            src={ attributes.imageurlNgS } 
            alt={ attributes.imagealtOLk } 
            class="rounded-full h-10 w-10"
          />
                                </div>
                                <div class="ml-3">
                                    <div class="text-base font-medium text-white">
                                        <RichText.Content value={attributes.contentJpc} /></div>
                                    <div class="text-sm font-medium text-indigo-300">
                                        <RichText.Content value={attributes.contentsdu} /></div>
                                </div>
                                <button type="button" class="ml-auto bg-indigo-600 flex-shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentgtj} /></span>

                                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgDjx }}
        >
      </svg>
      
                                </button>
                            </div>
                            <div class="mt-3 px-2 space-y-1"> <span class="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText.Content value={attributes.contentDNh} /></span>
 <span class="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText.Content value={attributes.contentJge} /></span>
 <span class="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText.Content value={attributes.contenttVw} /></span>

                            </div>
                        </div>
                    </div>
                </nav>
                <header class="py-10">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <h1 class="text-3xl font-bold text-white"><RichText.Content value={attributes.contentwZc} /></h1>

                    </div>
                </header>
            </div>
            <main class="-mt-32">
                <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                    <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                        <div class="h-96 border-4 border-dashed border-gray-200 rounded-lg"/>
                    </div>
                </div>
            </main>
        </div>
    </div>
</div>
            );
            },
        });
        