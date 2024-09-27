
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl, ToggleControl } = wp.components;


        registerBlockType('wp/off-white-grid', {
            title: 'off-white-grid',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAGaBaADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAECBAUDBgf/xABHEAEAAQQBAwEFBAUGDQQDAQAAAQIDBBEFEiExExRBUWFxBiIygSNykbHwFTVSocHRFiQzNDZCU2JzgpKy4QdDY/EmRoPC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGBEBAQEBAQAAAAAAAAAAAAAAABEBITH/2gAMAwEAAhEDEQA/AP04AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHufanhLVyq3Xm6qomaZj0q+0x+T2vc/xdnEsZV3K6bN/fp1enVPVrtPbW4Yecop/wi4L7sd67u+3ntS8/tRVct8jw1WPZi7cpvVdNvqimKp1HbfuWYjr4XL8fn2bl3EyablNqN19piaY+kxtejkcS5x08hRd3ixTNXX0z4jz21v3PneHpu5vJ8zmXLVGPei3NirGoncxOvM/Hx5+qcK7bj/06rma6e1m5TPf3zVOo/rghXdyuXwMTCtZeRkRRZvRE256Z3VExuNRrauPzXHZOFdzLOTFVmzG7k9M7p+sa2493ErvYfA142TYtZ1ixTNq1f8AFz7kb/Zpq4LJm7ymfYy8G1YzqYpm9Xaq3TcjXb6ef6yD0j7V8HMxEZ3ef/ir/ue2Z9oeJwcqvGysr071Guqn0651uNx3iPhLHxtFP+GHMR0xqKLWu3+7DLEchP2t5b+TqMSqem11+0dX9CNa0TB2b/O8Zj4tjKvZPTZyN+nV6dU9WvPbW4euByuDyUVThZNF2afMRuJj8p7uRzEXf5R+z8ZNNv1fWnri3vp3qPG/ci5RYt/bnFjCiiK5sV+0xR8NTrevfvX9RB3M7OxuPx5yMy56dqJiOrpme8/RnwOb4zkbs2sPKpuXIjfT01Uzr5biNsH213/IE68+rRrf1ZP8btfa7Au8tTj+pdt10WZxZnUTr/W33nzJODvWeUwr+DczbV+Jx7W+uqaZjp153Ext742RaysejIsVTVbuR1UzNMxuPpPd8pyvHV/4RUcdZu9GHylUXb1EfGjc1a+v7319NNNFEUURFNNMaiI8RBo5ub9oOKwMicfKy6abseaYpqq6frqHvd5XBtYtnJryKfQv1RRbriJmJmfd28eJ8uN9lqMeu3ylWTTbnJnKri/1a/D8/l5/rYuPwozvsjyWPZiZt05FyrG+lOpjX17x+ZCvqsnOxsS7YtZF3pryK+i1T0zPVP5fVhyPtLw+NkXLF/M6bluqaaqfSrnUx9IcriMr+XedxcqZ6qMHEiavh6tXaf7f2KcbTyc8tzH8nUYNVPtU9XtHVvffxohXdy+d4zCos1ZOT0Rfoiu3Pp1T1U/HtDRgchicjZm7hX6btETqZjcTE/OJ7uDzFeTa+03FVWMajIvxYr/RRX0RM6neplf7IRN65yWfVTRaqv3opqsUf+3NO/Pz7k4V1+R5bB4v0/br/pervo+5VVvWt+In4wvx/I4nJ2ar2Fd9W3TV0zPTNPfW/fHzcvmsfIv87x04uTjWbtui50+r96e8amYp9/aHvwOdkZM5mNl+nVdxLvpzctxqmv8AL4k4N/t2N7f7D6n+M9HqdE0z3p8b34Uq5PCov5Nmq9+kxbfqXo6KvuU63vevh7nK+0WsLkuM5btFNq76N6f9yr3z8o7/ALWTjqJvfZ3muUriYqzqb1dO/dRFMxEfvIV1sb7ScPlZFGPYzOu7cnppp9OuNz+cIv8A2k4fHya8e9mdN23VNNUenX2n660x/ZynlfYcGa7eB7H6cd46vU1rt8tuPey8nF/wh9PAoyLFV+YuV1Vx9ze4/D5nysK+vq5LDou41uq/T1ZUbszETMV/SfC8Z2NOfODF3eTFHqTRFMzqn4zPiHDr4qKvsbYtUX4qu41v2izep8RVG6u3y76e/wBlLNVzDucpkVRXk51U11THupidRTCQdu5cotWq7tyqKaKKZqqmfdEeWXH5TCycCvOsX+vHtxM1VxTPbXee2tud9sMqqxws2LUVTey64s000xuZ351Hv7dvzYfs1ctWeVzuMpsX7OPeoi7at36Oida1V2+f9hOFfQzyWHTx38oTfj2Xp6vU1Pjx48s+Xz/F4cWpycn0/Wtxco/R1zumfE9o7PlaeurHt/ZeZq64zppn52Y+9v8AtdXl6cr/AAuwqcCnHm7GLVqL2+jW5+CwrrRzvGVcfVnxk/4tTX0TX6dX4vhrW/enA5vjeSuzaw8qm5ciN9M0zTOvziHH+00ZcfZifbaMeL3r09rG+nW+3lXFqyM77ZWqsvFt4V3EszV0RV1VXYmNeYjUxG0hXfy+Sw8K/YsZN6KLmRV026emZ6p3Ee6O3mPL0zMzGwMeb+XeptW4nW5+Pwj4viueuxyPK8jXTYybvs1uLNiuzbmqKK6ZiqqZn3e+PpLoZ+Xa5K59ncjJ6fZr1VU3N/h9SIiIifz3H7VhXd47muO5OuqjCyYrrpjc0zTNM6+Op8s137T8LZvV2rmb010VTTVHpVzqY8+5lvXop+12Jbu8dbpvVRXFq9Rf79ERPeaYj6+WPhaeWmrkf5Pt4FVr265ucjq6t9vh7vCQr62mqKqYqpncTG4cqftJw8Zfs05tHqdXTvpnp3+trTq1aimZmdREd5+D4qbd7i+EqiaMLk+G699VNXTX+L4/Hf1Mw19Zc5DEt8hbwK72sm7T10UdM947+/x7pMrkcTEyLGPkXoou5FXTap6Znqnt8PHn3vlufpruc/bzMWKuvFwKcmime24pud4n8pl55V+OT57D5SiZmxTm2sez7txH3qp/bKwr63P5LD42iivNvxapuVdNMzEzufyXzczHwMarJy7np2qdRNWpnzOvc+S+0lynkObu404+Tft4mNVTTFi3NfTdrjtM/LWv2L8hmznf+n0Xap3cp6Lde/PVTVEd/wB/5pCvsK66aKKq651TTG5n5PLEyrGbjUZONX12q99NWpjffXiUZn+Y3/8AhVfuc77Jf6M4f0q/7pRXSy8qzh41eTk19Fq3G6qtTOvd4hjwuf4rPyIsYuXTXdq8UzTVTv6biHl9q/8ARrN/Vj/uhxLntlvP4K/ylONNrqpt2fZpnr3MRrq35jx4XMR9Xj5uPk379izc6rmPVFN2OmY6Zn6+fyedvk8K5j38im/T6WPXNF2qqJiKao8x3+sOXwUxT9oOcoqnVXqUVanzrU93Nw7NjM+zfL0XsqixavZ1c03qp+75pmPymYIV38DnuM5G/wChiZUV3dbimaZpmY+W47vaeVwYt5Vfr/dxKum9PRV9yf2d/wAnEs3srG5njsfmMPFuVzE042RjzMa7d9x/Ed2Sr/MPtT/xpIV9Pd5LDtcdHIV349lmIq9SIme0zqO0d/e8c/nON429TZzcn07lVMVxHRVO43Mb7R8pfG583+K4Cvj7s1XMXNtW72PX/Rq3TNVM/v8A/uXb5GMyfthY9gpx6rvsHi/vp11T8PesK7Vvl+Pu8fVn0ZNPstEzE3JpmO/0mNq8dzfHcndqtYeTFdymNzTNM0zr4947sPMYtzL4GmxyWRiYt+q7HTVRv05q3Oo7/GHjiZGTb+0WNj8xhY3tVVuqLOTj1T4iJ3ExP5pBvvfaPiLGXONdzKYuU1dNX3apiJ+EzrT25DmeO42qinNyPTm5HVT9yqrcflEvm6rV/j+NzK8eMHk+JruVV3ImqYrjvHbfy7fGXtnV3b3N8Jc4y3ZiqvFmq3Rkb6YpmnxOu/hYV37HM8dkYN3OtZNM41qemuuaZp1Pbt3j5wpx/OcbyV6bOHkxXciN9M0zTMx8tx3YuVxr2V9n7tjlsjExLldyOmu3M+n7piJ3+bwx7+VZ5/Bx+YwsWq/VTVTj5OPVPaIjvEx/HlIPpQEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4X8LHyMmxkXrfVdx5mbVXVMdO/P18e8yMLHyb9i9ft9VzHqmq3PVMdM/l5/N7gM1GBi28+5nUWunIuU9NdcVT96PnHj3MVf2a4evJm/VhU9U1dUx1VdMz+rvTrBRj5DjMLkrVFvMsRXFud0TEzTNP0mE8fxmFxtFdOFZi31zuudzM1fWZawHhbwse1mXsu3b1fvxEXKuqfvajUdvDHmfZ7is7KrycrF671euqr1K43qNR2ifhDpgOdf4LjMjFsY17G6rOPv06fUqjp3897l68fxeDxsVRhY1Nrq/FMTMzP5z3bAGfOwcbkMecfMt+pamYnp6pjvH0ZsLg+MwL/AK+Li00Xdaiuaqqpj6bmdOiA8LmFj3cyzl3Le79iJi3V1T93cant4e4A5mbwHF5+RORk4sVXZ/FVFVVPV9dT3b7Fi1jWKLNi3Tbt0RqmmmO0PQBkwONwuNpuU4ViLUXJ6qtTM7n82TI+zXD5ORcv3sPquXKpqqq9WuNzP0l1goy08diU38e/Fr9JjUenaq6p+7TrWvPft8U4+Bi42TfyLFrou5ExN2YqnVU/HXhpAY+Q4zD5KiinMsxX0TuiqJmmafpMPTBwcXj8f0MOzFq3vcxG5mZ+MzPeWgB45mJYzsavGyrfqWq9dVO5jep35hFOFj04HsNNuIx/Tm30bn8Ota35e4DlY32b4jFyKL+PidFy3O6avVrnU/nLXRx2HbjKimzGsuZm9EzM9e/Pnx+TUFGexg42Pg+xWrcxj9M09E1TPafMbmd+9fFxrOHjUY+NR0Wrcapp3M6/a9QGe/hY2Rk2Mi9b67uPMzamap+7M+e3guYWNdzbOZXb3kWYmKK+qY1E+flP5tADJHG4UclPIxYj2qY6ZubnxrXjx4efIcLx3JXabubj+rXRT0xPXVTqPymG8BzqeD42nAnBpxv8Xmv1Jo9Sr8Xx3vfuaLuBi3s2zmXLW8izExRXFUxMRPu7efzaQGfDwcbBt128W30U3K5rq3VNW6p8zuXhHC8d/J/sHstM43V1RRNUzqfjEzO4/JvAc/juF47jblVzEx4puVRqa5qmqdfDv4eF37McLevV3bmHuuuqaqp9WuNzPn3uuFEU0xTTFNMdojUOT/gzw3r+r7FTvq6unqq6N/q71+Xh1wGerCxqsycuq1E3ptej1TM/g3vWvHl42+IwLdjHsUY8Rbxrnq2o6qvu1b3vz38+9uAZ8bBxsW7fu2LfTXkV9dyrqmeqfzeFXDcdVjX8acf9DkXPVuUddWpq3vfnt49zeA5uHwHF4Nyu5i4vRVXRNFU+pVO6Z8x3l5WPszw2Pft3rOH03LdUVUz6tc6mJ3HvdcWjxy8Wzm41eNk0ddq5GqqdzG/f5hixPs/xOHkU38fDpi5R+GqquqrX03MumIOdn8HxvI3ovZeNFVzWuqmqaZmPnqe73jjsKOP9gjHo9l1r09dv/v5tQDm4PA8ZgZEX8bG1diNU1VV1VdMfLc9ntPFYM28qj0Pu5dXVejrq+/P7e35NgDJk8ZhZeFRh5FiK7FGummZntrx38vLP4PjeRvU3szG9S5TTFET6lVOo7zrtPzl0AGGjh+Oo4+rAjGj2aqdzRNUz3+O5nauBwnHcdem9i4/TdmNddVU1TEfCNz2dAKOTd+zfEXsiq/Xhx1VVdVURXVFMz8dROnvn8Lx3I1W5zMaK5tU9NGq6qdR8O0w3hRgs8Lx1nAuYNvGj2a7V1V0VVTVue3fczuPEK4HBcbx9/wBfFx+m7rUVVVTVMR8tz2dEKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAuKALigC4oAuKALigC4oAuKALigC4oAuKALigC4oAuKALigC4oAuKALigC4oAuKALigC4oAuKALigC4oAuKx4lALigC4oAuKALigC4oAuKALigC4oAuKALigC4oAuKALigC4oAuKALigC4oAuKALigC4oAuKALigC4oAuKALiiZ8QCwoAuKALigC4oAuKALigC4oAuKALigC4oAuKALigC4oAuKALigC4oAuKALigC4oAuKALigC4oAuKALigC4oAuAAAAAAAAAAAAAAAAAAAAAAAAAAACgCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmPEoTHiUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJnxCEz4gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuAigAAAAAAAAAAAAAAAAAAAAAAAAAKAKgAAAAAAAAAAAAAAM2XnWMSI9SqZrnxRT3mWWMzkb3exgxTT/8AJOv7iDpjmTm8hZ75GD1U++bc7/va8TNsZlMzZq7x5pmNTBBoAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMeJQmPEoAAAAAAAAAAAAAAAAAAAHjlZVnFoiq9Vrf4YiNzP0eVnkLN27FqYuWq58Rcp6dg1gAAAAAAAAAAAAAAAAAAAAAAAAAAAJnxCEz4gEAAAAAAAAAAAAAAAAAAAy5HI4mPuK71M1R/q095BqGXBzaM2LlVuiqmmmdfe8y1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAuAigAAAAAAAAAAAAAAAAAAAAAAAAAKAKgAAAAAAAAAAAAzZ+XTh41VydTV4ppn3y0uZnfpuYxLFXemmJrmP2/3GC/H4MUaycmJrya/vTNX+q0512uzh3bludVU07gu5uNZuTRdvUU1R5iZeGbftX+LyKrNcVxFOpmAaMS5VexLVyvXVVTEzpk5DCqir2zE+5fo7zEf68PTFv2rHHY83rlNETRGtvazmY1+votXqaqtb1AGFk05eLRejtM9qo+EvdzONiLXIZuPEx09UVRHw3/8AcOmaImqmJ1NURP1IqpnxMT9Jc7lsOxXj3cmqmfVpp7Tt42KMbAwbWd6dU1zTG9VfEHYGK3yNNVuu7XZuW7NNO4rqjtV9Hl/K0Ra9avFvU2p/DVPifgQdIYbvJ27WNZv1W6um78/CLXJRVkUWr2Pcs+p+CaveQb1aq6KNdddNO+0bnW2O/wAh6d+u1asV3ZtxuuaZ1r+9XMvY9UYly7Zqr6646O8x0z8wdAYcjkPSyK7NrHruzbp6q5jtqGblMuubeNVZpu001VRVv8O/90g64x18hRaxqbt+1coqqnVNvX3pUtclE3qbWRYuWKq/w9fiSDeMN7kot5VzGpsXLlyiImIp777RP9rZbqmu3TVVTNM1REzTPu+QLAAAAAAAAAAAAAAmPEoTHiUAAAAAAAAAAAAAAAAAOZZ5KqvM1VTrFrqmi3X/AL0f3/x73tyV6vpt4tmf0t+enf8ARp98r14NqrAjFjtFMfdn4T8QZb1+1j8pfu5M7i3bp9OPM9/Ol+SrtX+L9eidz2m3MeYnfueGLRczc2Kc2KOrEjU0+ZrmffPyLOLax+Vize6qqJ+9YiZ+7E++NfFR16N9EdUaq13SCDwpzcau/Nim7E3ImY6fnD3fMXaKoy8vJon71i91a/5pdrMzaaeLnIt1amunVH1n+P6lg9rWZjXrs2rd2Kq492pTayrN29cs264mu3+KPg43GWJx+Ut0Vfim11T9ZdDGv2facuLePFFduZmqrf4vJBvHKo5iu7R1WMK7c1P3tT4/qe+TyMWr3oWbNV+7EbqppntCQbhzrPKxcyrePNiuiurtVFU66Vsnkot35sWLFd+5T+KKfEEG8c+xylN7LoxvQroqq3vq7TTMb7a/JN7ktZFVjGx679dH4tTqIIN4zYeZRl01apqouUTquirzS0gAAAAAAAAAAAAAAJnxCEz4gEAAAAAAAAAAAAAAAAAA+b5q/enPu2fUq9ONap328RLmtvM/zpe/5f8AthibxHV4jLnHsXYpsXLtUzE/djtEfOXcxb05GNbvTT0zXG9fByeE/wAxyv49zo8Z/N1j9VnVagcDlaMvFrm77Xc6Llc9NMVzHTCYO+OPRayrHGX71zKrrmu3E0/endJx167Xw2Vcru11V09eqpqmZj7se8g7A4OFkX6uKy66r1yaqfFU1TuGam/l0YsZUZte+vp6Kq9z9dT5WFfTjg8ll35w8O7Tcrt1V01TV0VTG/HwduzMzZomZ3M0x+5ILj5bGvX71Uxc5C5aiI81V1d30WFRXRiW6bl2btWt9czPfc7jybkHuAAAAAAAAAAAAAAAAAC4CKAAAAAAAAAAAAAAAAAAAAAAAAAAoAqAAAAAAAAAAAADmZ36HlsO/V2pndEz/H1dNnzsWnMxqrU6irzTV8JMFrmLj3a+u5Zt1VfGae7wzrVuzxd+m1RTRT071TGnng52tYuZ+jv0RrdXiqPjtrzbVV/Du2qNdVVOo2DxxLNq9x2PF63TXEURMdUb9z2tYuPZr67VmiirxuKU4tubOLatVa6qKYidMWfmzcq9jw9XL1faqYntTHvBHGfps7MyaZ3RNXTTPx1/EOm8cPHpxcWizT/qx3n4z73saMvJ/wA3X/1WDM/0es/Sl2QGDk7Fd3i+m1EzNMROo98Qz5PJ2L3H127dMzcqo1NHTP3fj+x10RTETMxERM+fmDh3e+Dxm/6cNXMf5XCn3xej+x0wo4/IV43tVyZruY2Tbp3TXHiuPcrlXLt3G465fjVdV2Jnt8+zszTTVrqiJ143CSjkchVjRk3KpruY+TRTum5Hiv5KZlV+7xWLfu0zNVNcVV9vd37/ALv2uzNNNWuqInXjcJKORl3qLlzG5C1FVyzaqmK9R3j5oy8ijkrlixhzVVNNcV1VamOmIdjx4RFMUxqmIiPkUc3Hj/8AIMqff6cfupdMAAAAAAAAAAAAAAATHiUJjxKAAAAAAAAAAAAAAAGbJzrOLXFF3r3Mb+7TtpAcTGz7M5dzKyKbkVzHTRTFO+mls/lfF+F3/ol75VWXT0+y27dXnq6508PU5T/YY/8A1Sox5edZnIt5WNFz1ae1UTRqKqVs/Ox8i1TNr1Kb1urqononz8Gr1OU/2GP/ANUvTHrz5uxGRas02/fNNU7BXG5Ozfqt2+mum5VHeOmdRP1bQQcfjqKbmdyNFcbpqqmJj85ZsWxkXMm1hXqJ9KxXVVM68/n/AB5d23YtWq667dEU1VzuqY970Wjl/wD7H/8AyeeH/nnJ/n/a6noWvX9boj1Na6vfopx7NFVyqm3ETc/HPxSjFwX83R+tLwwblvF5LMoyaqaK66uqmqrtExuZ/tdW1at2aOi1RFNPnUK38axka9a1TXrxMx3go5d2/Zv89j+jMVdMTE1R4ntKcO9axM/LoyZiiuuvqpqmPMb/APLpUYmPbroqos0U1UfhmI8Medd1fmL/AB03rca6K4jf/wBKPCb9rI+0NiqzVFUU0TTNUe+dVPHFpuUZOTanO9mr65mYqpj73z7y1YOPdu5sZVyxFi3bp6bdvXf3/wB8/tb7+LYyNetaprmPEyDFx1miMy9ejNpyK5p6atU6+Gp8/J03nZsWrFPTZt00R8o8vRAAAAAAAAAAAAAAATPiEJnxAIAAAAAAAAAAAAAAAAAB87zOJkTm3b8WqptzrVUd/dDlvtLlM126qY8zEw4/pUWrFFrPwKqopjXq2+/7u8LmkRwn+Y5X8e50eM/m6x+qzYdOHbxr9OJf64riZ6ZnvHb4NPGfzdY/VNGpyuetXbtm1Fq3XXMVTvppmfc6ogzejN3jYsT92qq1FPePE6cW1ObiY17D9krq9Tf3opmfManXxfRhRx7GFdscLfpqombtyN9Md5+ivGcXauY/Xl2a4r6vFW6e30doKONzuPcrpxqbFmuqmiKo1RTM68ae/H5eVcuU2b2JVboin8U0zHh0go+WxrN+zVM3OPuXYmPFVFXZ9Dg3K7mLTVctelV46NTGohoDdAAAAAAAAAAAAAAAAAAFwEUAAAAAAAAAAAAAAAAAAAAAAAAABQBUAAAAAAAAAAAAAAZ8vCsZlMRep7x4qidTDJHH5tntj59XT7orjbphRzP5PzL0ayc+rp98URrbZi4ljEommzRrfmZ7zL3CgAAAAAAAAAAAAAAAAAAAAAAAAAAAAACY8ShMeJQAAAAAAAAAAAAAAAAA8MrGjJppibt230zv9HVrb3AZcfBpx7vqRkZFfbWq69w1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmfEITPiAQAAAAAAAAAAAAAAAAAAADPfwsbI73LVPV/SjtP7XrZtU2LNNqjfTTGo2uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuAigAAAAAAAAAAAAAAAAAAAAAAAAAKAKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACY8ShMeJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmfEITPiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4CKAAAAAAAAAAAAAAAAAAAAAAAAAAoJ3JuVRAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5BAncm5AjxKE7nUm5RUCdyblUQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQJ3JuQQmfEG5NzqEVAncm5VECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkECdybkFgEUAAAAAAAAAAAAAAAAAAAAAAAAABQBUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHiUJjxKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEz4hCZ8QCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXARQAAAAAAAAAAAAAAAAAAAAAAAAAFAFQAAAAAAAAAAAAAAB5XsmxYmIu3Ipmfd5n6/QHqETExExO4kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMeJQmPEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATPiEJnxAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABcBFAAAAAAAAAAAAAAAAAAAAAAAAAAUAVAAAAAAAAAAAAAAGfOruUYlU2qumuZppirW9bqiP7XjbuW8Tqpv2aqKqp73Px+pP187+T2z/81/56P++DM/DZ/wCNT+8Ga3F21lW7lFHo2btfTNuZ3vcTPVrxHjw2X8i3Yinr3NVU6pppjc1T8lMv/KYv/G//AM1KZVFu5mY9u5FNUTTX92fpAJ/x2Z9SItREf+175j51fF6Y+TTemqjU0XKPxUVeY/8ADPNqunIpxrd+5Taqpmue+6o1MRqJ8xHdazbt2uQqotUxTEWomYj6z5BrqqpppmqqYpiPMzOimqmqmKqZiqJ8TE7ZuT/m6/8Aqq8T/Nlj6T++QbB5ZGTZxqYqv3IoifG/M/k8o5DEmiK4v09MzqO0+QahnvZ2LYuTbu3opqjzGpWt5ePdtVXaLtM0U/iq8RAPYZaOSw65qim/TumNz2mOyfb8Xoorm9HTXOqZ1OpBpEV1U0UTXVOqaY3M/CHl7VY9n9o9WItf0p7A9lfUoiuKJrp658U77vGxm42RX0WbsVVfDUx+9hvf6SWP1J/dUDrAAAAAAAAAAAAAAAAmPEoTHiUAAAAAAAAAAAAAAAAAM2dm28K1FdzvVP4aY8ytl5VvEszcuz9I98y4uNj3uWypyMiZizE/xEGYO7YvUZFmm7andNT0eViuzVR0WKqZpt/d1TPhk5fPrw7dFNqI6696mfdEA6A5NqOZt3rfXVRXTVP3t61S0ZfJUY2VbsdHVNetzFX4e+iDcK9dHRNfXT0x5nfZFF21c/ydyiv9WqJBcYbnJW7efTizTExOvv8AV2hXPjJrvWasXJot0e/dUft+ZB0BFddNFPVXVFMfGZ08b1+n2S9dsXKapoomqJpmJ9wPccnC5Or2C7kZdXVNNfTTEREb7eF+Mv5uZXN+5VTRY3OqYpjuQdMYMOMm3lX5ycmiu331T1d47/1Jw+St5N65bmmKOj3zV5INwAAAAAAAAAAAAAAACZ8QhM+IBAAAAAAAAAAAAAACK6qaKJrqnVNMbmfhCWfPmKcDImf9nVH9QPD+WMH/AGlX/TJ/LGD/ALSr/pl89h2Pacq3Z3rqnvLrX8fiMe56F7rpr1vq3KzBr/ljB/2lX/TLbauUXrdNy3V1UVRuJfH5FNqm/XTYrmu3E/dqn3vpuImJ4yzqfdMf1ybg2Dyycm1i2fVvTqneo15mWTG5axfvU2ui5RVX+HqjtKDoDjZXIVYvMT6ldc2Ypj7lP0dCM21OF7XEV+nretd/OiDSOfY5bHvX6bM0XLdVU6p647T8GfPzq8XlrfVXX6MUR1UU+/yQdgZaM+zXhVZcRXFunzEx3eFnmMe5ept1UXLfV+Ga47SQdEZcrPsYl2i3e6o6+/VEdo+rwt81iV3eieuiPdVVHYg6Lzu37VmqiLtymma51Tv3sVHNYlV6LcRciJnUVTEaX5GvEouY/tVuqqqavua93jz8vBBuHjlZVnEt9d6rUT2iI8yyY/MY+RfptRRcpmqdU7iAdEAAAAAAAAAAAAAAAFwEUAAAAAAAAAAAAAAAAAAAAAAAAABQBUAAAAAAAAAAAAAAZ8//ADX/AJ6P++Fc+qmi3aqrmIpi7TMzPu7r5lFdzGmm3T1VRVTVEb1vVUT/AGI6rGZbm1confmq3X2qj+PiDyuTczKrc48Tbooq6ou1x57THaPf58rXcfEtWpqyZiqZ1u5XP3pn5fD6Qi5ORjzbtW66a6bk9NNVyZmqmdTPf4x2elNi3Z3fv19ddMd7lfuj5R4gGK3TkXM2imi5cot+lV013I3XMbjf9nnu6NmzbsxMUR3n8VUzuavrPveNqqb+XTfopqi1TbmmKqo11TMx4j4dmoGXk/5uv/qq8T/Nlj6T++XvlWfaMa5Zirp641vW9Odb4vMt0RRb5CqmmPERE9v6wUxrVvL5nKqyKYq9OdU01d4+Hj+PLz5rGsWbliu1RTRNU6mKY1E617m3K46q5ejIxr02r2tVVe6p4XOIvXppuX8ua7kT76e2vgtFblq3e+0NdF2iKqejep+kI5Kzbt38XFt0xbs3K91xE633iG6MKY5OczrjU066dfJfOw6MyzFFUzTVTO6ao9xRn5DAxIwLk02qKJt0zNNURqf/ACx0Y/r/AGdjX4rczXH5TLRVxmVeo9PJzaq6IiemNe/3bbcHG9lxKbE1RXrffWvIOZmZs5HFWLdEzVevzFMxHxjz/Xp55tFVvNxcWLVV6i3biYt9X4p77n+prxeHjHy6bs3uqiiZmmnTTnYMZU0XKLk2r1v8NcQUczLpyL8UTZ4ybFyiqJiumY/ue9czP2ixpqjUzb7x8O0vWMDMu10+1ZtU0UzuItx0zL2rwpq5O3l+p2op6enXntPv/MGwBAAAAAAAAAAAAAABMeJQmPEoAAAAAAAAAAAAAAAABxcnj8rL5OZvVfoI7xVHup+EfNXks6m3TGDgxrX3app/dDXzGZdxrVNuzTVFdzt1xHj6fNTiuM9DV/Ijd6fEf0f/ACo9OJwPY7XXX/la4+9H9H5PTkcOzl0UU3K/TridUVfP4fNsYuQ4+M2aKvWrt1UeNd4/Z8UHMm9mcRfpouV+ranvEb3uPl8EcrjW6eTtUxvV6Ymrv8ZbLPDRF6m5k5FV3p8Rr+178jx0ZtVFcXPTrojW9b2tGfkLWFjYtrHri7P3t0U0T3nv32wU7xuSx6rdi5jxVMRNNVW9xvUune4uq9j2aa8mqb1rerkxuZ77+Ks8RVVft3rmXXXXTMTM1U+dfn2KMGTiWY5qix36K5iZ7/FfmbVNm7i2qN9NNOo39XRz+MjLu03qLs27lMa3ramRxdWRFjryZmq1Tqapp3NX9ZRjy6ZzecjGvVTTbp7RH5b/AK22rAsYeJl1Wt7qtVR3nxGls/jLeXc9Wmubd2P9aO8SjH425atX6bmVVcm9RNM7jtHzKOBTYu1YU36fvW6K9VU/DtHd9Lx2TaycWmbURT0xqaI/1f8AwrgYMYdiu1VX6kVzufu692njj8XVi5U3rGRNNEz3omne4+G9m7Rj461Te5DNtV76aoqidfrPLisSzfzbtNzerc7p1PzdbD4/2bLu3/V6vU393p1rc7+LynipozfaLGTXbiqrqqpj39968+CjpAIAAAAAAAAAAAAAACZ8QhM+IBAAAAAAAAAAAAAADFy9qq7x1yKapjp+9MfGI9za8sqiq5iXqKY3VVRVER89A+UxIvTlW4xt+rv7ruWsi7fu042fgTMz26+ncfX+JcWjGzbdcV0Y9+mqmdxMUT2b4zeXinU2Lkz8ZsztrUY+Ux6MXNqt2vwaiYje9OzwVmq3g9dVczFydxT7o9ziXMbNuXKq68e/VVVO5mbcvpONt12sCzRcjpqiO8fDum+GKcpYtZGNFF27FueqOiqfj8GKjMycK/Zs5M2r1urtTXT5iHUyca1lW/TvU9VPmPlLPj8ViWLsXKaaqqoncdU70isVyqij7SbuTEUzTrdXj8LVymdVi41FWP0zNydRV5iHtl8fj5dUVXYmKojW6Z0mrAxqsWnGmj9HTO4794n6qORnzkRfxvXv2bsxX2mjzHd75k00/aCxNyYinpjvPj3tlHE4dERq3O4q6tzM7emXg4+Zqb1M9VPaJidSUefI5nsmHFyzFNU1VdNPvj+Ozk8lXkTj2Zv37FyZnqp6PMf+HZjj8aMX2bo/R73577+Lyjh8KKOnoqnvvfV3MGbloirlMKKoiYmqImJ/WhXnKKPaMSemPvVTE9vPh072JZv3rV25EzXandOpMjEs5NVuq9TMzbndPfX8eCjm/aGimmzYqppiJiqYiYTzv+Xwv1p/fS6OViWcuimm9EzFM7jU6MjEs5Nduq7EzNud06nX8eCjmc1ERyGLVej9D23+3u6nr40dH6W137Ufej+pORj2sm3Nu9RFUfuZbXEYdq7FyKKqpjvEVTuEG8AAAAAAAAAAAAAAAFwEUAAAAAAAAAAAAAAAAAAAAAAAAABQBUAAAAAAAAAAAAAAHlex7V/U3KfvR+GqJ1VH0l6gMN21mRXZppii7TRX1RXM6nxMd/j59z2oxd1xcya/WrjxuNU0/SGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMeJQmPEoAAAAAAAAAAAAAAAABFVNNWuqInU7jceJSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZ8QhM+IBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALgIoAAAAAAAAAAAAAAAAAAAAAAAAACgCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmPEoTHiUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJnxCEz4gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuAigAAAAAAAAAAAAAAAAAAAAAAAAAKC2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCI8ShfUI1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKpnxCdQnUAoLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AKi2oNQCotqDUAqLag1AJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=" />),
            category: 'common',
            attributes: {
  "contentdSp": {
    "type": "string",
    "default": "Trusted by over 5 very average small businesses"
  },
  "imageurluPf": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/transistor-logo-gray-400.svg'
  },
  "imagealtHCf": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workcation"
  },
  "imageurlhSO": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/mirage-logo-gray-400.svg'
  },
  "imagealtTvm": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Mirage"
  },
  "imageurlEpw": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/tuple-logo-gray-400.svg'
  },
  "imagealtOoH": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Tuple"
  },
  "imageurlIDO": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/laravel-logo-gray-400.svg'
  },
  "imagealtItD": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Laravel"
  },
  "imageurljbJ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/statickit-logo-gray-400.svg'
  },
  "imagealtzKK": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "StaticKit"
  },
  "imageurlZMb": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/statamic-logo-gray-400.svg'
  },
  "imagealtilZ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Statamic"
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
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
                    <RichText tagName="span" value={attributes.contentdSp} default="Trusted by over 5 very average small businesses" onChange={ (newtext) => { setAttributes({ contentdSp: newtext }); }} /></p>
                <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurluPf: media.url,
            imagealtHCf: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurluPf } 
            alt={ attributes.imagealtHCf } 
            onClick={ open } 
            className="max-h-12"
          /> 
        )} 
      />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlhSO: media.url,
            imagealtTvm: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlhSO } 
            alt={ attributes.imagealtTvm } 
            onClick={ open } 
            className="max-h-12"
          /> 
        )} 
      />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlEpw: media.url,
            imagealtOoH: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlEpw } 
            alt={ attributes.imagealtOoH } 
            onClick={ open } 
            className="max-h-12"
          /> 
        )} 
      />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlIDO: media.url,
            imagealtItD: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlIDO } 
            alt={ attributes.imagealtItD } 
            onClick={ open } 
            className="max-h-12"
          /> 
        )} 
      />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurljbJ: media.url,
            imagealtzKK: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurljbJ } 
            alt={ attributes.imagealtzKK } 
            onClick={ open } 
            className="max-h-12"
          /> 
        )} 
      />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlZMb: media.url,
            imagealtilZ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlZMb } 
            alt={ attributes.imagealtilZ } 
            onClick={ open } 
            className="max-h-12"
          /> 
        )} 
      />
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
        <div class="bg-white">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <p class="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
                    <RichText.Content value={attributes.contentdSp} /></p>
                <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                    <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        
      <img
            src={ attributes.imageurluPf } 
            alt={ attributes.imagealtHCf } 
            class="max-h-12"
          />
                    </div>
                    <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        
      <img
            src={ attributes.imageurlhSO } 
            alt={ attributes.imagealtTvm } 
            class="max-h-12"
          />
                    </div>
                    <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        
      <img
            src={ attributes.imageurlEpw } 
            alt={ attributes.imagealtOoH } 
            class="max-h-12"
          />
                    </div>
                    <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        
      <img
            src={ attributes.imageurlIDO } 
            alt={ attributes.imagealtItD } 
            class="max-h-12"
          />
                    </div>
                    <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        
      <img
            src={ attributes.imageurljbJ } 
            alt={ attributes.imagealtzKK } 
            class="max-h-12"
          />
                    </div>
                    <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        
      <img
            src={ attributes.imageurlZMb } 
            alt={ attributes.imagealtilZ } 
            class="max-h-12"
          />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        