(()=>{"use strict";const{registerBlockType:A}=wp.blocks,{RichText:e,MediaUpload:t,InspectorControls:n}=wp.blockEditor,{Panel:x,PanelBody:f,PanelRow:P,TextareaControl:i,ToggleControl:m}=wp.components;A("wp/two-columns-on-brand",{title:"two-columns-on-brand",icon:wp.element.createElement("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAF1BaADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAIEBQYDAQf/xABLEAEAAgIBAgIIBAQEAwQEDwAAAQIDBBEFEiExBhNBUVJhkuEUInGBFTKRoRYjscEH0fAkQnLxMzZ0shclJjdDRVRiZYKToqTC4v/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAAuEQEAAgIABgECBQQDAQAAAAAAAQIDEQQSEyExUUFh8BRxgZGhIjKx0ULB4fH/2gAMAwEAAhEDEQA/AOfAfqWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFjHo7mWkXxaue9J8rVxzMSl/Dt/8A+xbP/wClb/k/Seg5/wAN6HYNjt7vVa9r9vPHPHM8MP8A+EH/APCv/wCR/wD5eCOJy3tMUpvX1XTiJjieJ8x0eh6LbfWNOeo4c+GlctrTFLc8+c/J59V9FdvpmvrXtlpmzbGSMcYscT4WmPf7XojiMfNy77ppgDrcHoFvXwxbPt4cV5jnsiJtx+ssLq/R9zo+zXDt0j88c0vSea3/AEWmfHeeWs9zTPHVanoNv59WMubPiwXtHMY7RMzH6+7+6H+COo11b5sufBSaRaZpzM+Ec/L28M/isPjmNOYG9g9FtrN0Oeq12MMY4xWy9k888V5/5PDoPQc/XJz+ozY8fqe3nv58eefd+jfWx6md+PJpkDUjoW5k61k6VgiuXNjni1onisR75n3eLbt6A7sYea7uCcvH8sxMR/X7M24jFTXNPk05Aa+h6P7m31fL0y/bgz4qza3f5ceHu/WGrj9BN+2xamTZw1x1iJ9ZETPM+6ILcRir5sacmN7d9Fd7T6nral747V2rduPLHPbz7p90uy3PRrVzdD/B4NbUx7Xq6V9fGKInmOOZ5iOfHif6sZOLx05fnZp+a4dXZz1m2DXy5KxPEzSkzEf0eUxMTMTHEx5xL9J9B9e2p0/e1rzFrYd2+OZjymYisOeweiux1e+xt4NvBWJz5KzW3PNZi0+fh+/7pXi681ot2iF05YaXSOi7HVeoZNLHauLJjrNrzfnw4mI48PnKPWulZOj7sauXNjy3mkXmac+HPPh4/o79SvNyb7ozxp9G6Fu9ZveNWKVx0/myZJ4rE+75y2Nr0E6hiwzfX2MOe0RzNPGsz8o9n9eGbcRjpbltPc05QaXSuh73VdvJr6+OK2xeGW2Twik+6fbz4eTbz+ge/TD3YdrBkvEczSea/tE/+RfiMdJ1ae5py+HXz7EzGDDky9vn2Vm3H9EL0vjvNMlbUtXwmto4mHb/APD3FkwbHVMOak0yUnHW1Z84mO5Q3+h7XWvSzqNNea0pjtE3yX54jwjiP1c/xMRktSfER5NOVGzuejuzg6rj6bgzYtnZvHNq4+f8uP8A70z5f9e+Gt/gHd9Tz+Nwet4/l7Z7f6/Zu3E4qxEzPk05AXdnpW7rdSjp+XDP4i1orWsf97nymJ9zoP8AAe/+G7/xWD13HPq/Hj+v2W+fHTU2nyacxbU2qYfXW1s1cXET3zSYrxPl4vF+mddx3w+glsWSvbemviraPdMTXl+aVra9orSs2taeIiI5mZZ4fN1azPqSYfB1mH0E6hk1ovl2cGLLMcxjnmePlMx/ty8M3oZv4OnZdzNnw19Vjte2PxmfDn/kRxWGZ1zGnNDoKeim1fon8UjYw+r9TObs8eeIjnjy81boPo/n65GecGbHj9T289/Pjzz7v0b6+PU232g0yBqa/Qd3a6vm6brxW+TBaa3yc8VrxPHMy2svoFu1w92LcwXyfDMTEf1ZtxGKk6tJpyIva/SN/Y6nPTqYJjZrMxetvCK8eczPudBPoDvep5jc1/W/Dxbt/rx/st8+On90mnIjpOhejmzf0gnX3KY6/hZrkyUvHdGSvPs9kxLe9LPRzDm0Y2dDDq60atMmTJFMcVm8RHPHhHyn+rnbisdbxT2acVbpHUKdOjqFtW8as8cZPD+vHnx81J3Wxj6z/gisWzan4b8NW3MRb1nZxExX3c8eDB6J6L73V8Xr6TTDr88Rkvz+b9I9pTiI5ZteY7SaYY6bqfoV1DS17Z8GXHs1pHNq1iYtx8o9qr0P0Z2etad9nDsYsdaZJx8X5554ifZ+rccRimvNvsaYY6zX9BN/Jr9+XZw4sk+VJiZ/rPsYteh9Qt1i3S64edis+Pj+WI+Ln3eK14jHbereDTNHXT6A73qeY3Nf1vw8W7f68f7OZ39LY6dt31dvH2ZKezziY98fJcefHknVZ2aVwHUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfqfQMtMHohr5stZtjx4LWtWI55iOZmGNm9K/R++HJSvTcsTasxHODH7v1VdT0q0MHoz/Db4dmc3qLY+6K17eZifnzx4+5x75uLhea1pvE+V2/T/Qy3b6K4Le6ck//ALpc96I7+31P0ki2/tZMvZS+SlbW/LFvLwjyjwmUug+lWh03oePRz4dm2WvfzNK1mvjMz7Z+bmOnbubp2/i3Nfj1mKeYifKY8pj94WnD2mcu48+P5Nv0frmXptN/DO71fZ08uOsWpjxX4ifGfGY4nny4/ZX67vdP6hbpmPHl7rRvYpjnHaOY58Y5mFW3pb0Hdpjyb+he2bH4xF8Vb8T8p/8AJiekfpRk6rlw11KWw4MF4yVm3Hda0eUz7uPc44uHvNoiYmNfsbdL6dbu5pdMwTp5b4oyZeL5KTxMeHMRz7Psu9K2Njb9E6Z9vn118F+ZnzmPGIn944n92Vh9NumbGl29Q1cnrOPz44pF62n5cz/q2tPfr1P0dvuUx+rrkx5IrTnyiJmI/wBHG9LUxxW1danyqh0ulsnoBNKRNrW1MsREe2fzMv8A4bxP/wAY24nj/Ljn6lf0Y9LNfpvT66O9iydmO0+rvjiJ8JmZnmOffPsaOL036Thy5KY9LPTF5xOOlYm1p85mOY+TtfHliL0iu9zvf6o0OhUp/HeuZI/9JOalZ+Udv/m8/wAZ0jX65kzX6ztTsRaaW15tM0j2cdsV9jl9f0n/AAfpHt7+DFe+rtWjvx24i3EeU+3xjx/q3J9LfR6M342NLJO1Mcd/qa9/lx/Nz7vDzS+DJFt6mdxHj8l2vYdnU2/S7Dm1bza34O9b/lmvlaOPOPnLK9Kurb2n6TaeLX2L0xVrS044niLTNp559/hChqellZ9I79T3sWSMPqZxY8eLi01jmJ9sx81D0h6xr9U63i3demWuOlaxMXiInwmZ9kz73XFw9oyRzR20m3Wen974uja2TFe1L12qzW1Z4mPy28pe/V8+enoROfHmyVzfh8U+sraYtzM15nnzc56Vekul1npuPW1cWxS9c0ZJnJWsRxEWj2TPvXulel3Tf4Ri0up4MnOPHGO35IvS8RHH+jnGDJXHSeXvEm13/h/e2To+zfJabXttWm1rTzMz218ZVPQ3e7etdT0Lz4XyWy0j5xbif7cf0Vuh+lHTOlV3cc4Nj1eXavlxRjpXitJ44jxmOPJn+jutv7fpDHUun4e7DTZ5yWtaI7a2mefDn3TPly3bFM9SbRqJ8DsejdL/AAXWer7PHFc2WvZM/OO6397f2fnXWt3+IdY2tuJ5rkyT2f8Ahjwj+0Q/SfSnfjp/QdnJFuMmSvqsfjxPNvDw/SOZ/Z+UN8DE23kt+RLuvQvT6j/CpzRvRrad72tFa46za0+UzzMeHl/Zu9BjTrGxTS6psb/Fom85cvrOyfHynj2/7OV9GvSvX6b06NDfw5LY6TPZbHET4TPMxMTPvmWhq+mXRdS2TFrdOzYcHhMeqx0jun28xzHycM+LLa1v6f20sJdL6rh6d6R9XwbFL1xZc/dGSuObRFvbE8fq1MOng2M2ztdG6zkplyzzeK3rmpE/Os88f1hy/TvS2ml1ndzThyX0trJ6zt8IvSffxzx+vj7mnX0s6Bq3ybOpoZY2MsT3TXFWszPn4zz7/wBVyYcm91rPiPrH6m1r0YxbeHrvWqb+SuTPzim161isWji3E8R8uG7mxWx6uz+ArjrsXi1omfKb8eEz/Zw/R/S3Dg6l1Dd6hiyzba7O2uGImKxWJjjxmPZMGj6XY9Xru7sWpmto7Nu6KcR31tERHPHPHs48/d7mcnDZbXmdfEfl8G1v0Bre/UOqZdqLTtV7a2m/83Mzbu5/eIa21tdK1+vTmz9Y2cezSYrOvFp7PLy7e32uc2PSfTw9er1TpeDNHradmziyxFYv5cTHEz4/8vnLVt6W+j18tdy+lknar4RacNZvH78/7tZcWS1+flnvHwi1n2dHe9K+k5MGTuyUpm55pMc/l8I8Y+dpZ/pz1PqOlv6mPUzZMGLs74tSeO63PjE+/jw8PmxOoelOztdd1+o4scY6a08Ysczz4T/NzPvmHR5PTXo+XBXJl1c18tPGtLUrPFvlPP8AdejfHaluXfbx+5tf9J7Xv6H7F8te3JbHSbV9091eYcF6MUpk9I9GuSeKxliY/WPGP7xDf6z6X6XUuhZtOuDYpsZa155rXsiYmJnx5548Pc5DWz31tnFsYpiMmK8Xrz74nmHfhcV64rVtGpnf+CXfenm/vaWDTrp5smGmS1pvfHMxPMccRzH6y0s2bNseheXNsf8Apcmha1/DjmZpPizI9NekbGpH4zUyzeOJnF2VvHPymZ/5NXZ2/wAf6IbO32dnrtTJaK888fll4rVtWtK2rrU+VV9eJt6A8VjmZ0LcRH/hll/8OK2jDv3mJ7ZtSIn5x3f84VvRr0t1un9Opo7+PJxjmezJSOfCZmeJ8V7D6b9Kw5MlMelnx4fCa+rpWJtM88zMcxx7HW+PLEXxxXe58o0/RzHSNrrOSIjvtvXrM/KIjj/WXjg3ej6vV82X+M7WTPa1q3wXtNqxPPlFe3w44cx070o/Adc3dquK99TbyTe2OeItHj4THs58W1Ppb6P4sttvDo5PxV48bRhrFp/W3KX4fJFp7TO4+F2+Zusaet6ZRtYqXyYcupGPLemO3NZ7vOY45nwiGt6rQ6j1D8XodVy49vs4mmPLE+HHtx2if9Icbr+lmzT0gydSyYotjyV9XOGLfy058OJ98f7z5ct3/Fno9OzG9+Bzfi48O/1Ne/y48+fd4LkwXrrVZ8fn+6bU9ynVNL006fG3u2zRlmlYyUr6vvp3fy2iPnPz9i3/AMQtjPhwadMObJjpk9ZW8VtMRaOK+E+/2uc6r6RZt/rev1CuKKU1bVnFjmfZE8+M/Nv9U9Kei9T6RmxZdfJOecdoxxkxxPZeY4iYnnw8fa6TjyVvjtNd686Gls//ADfx/wCw0/8Adh67+TJo+hXfoTMWx61IpavnETxEz/SZlz2b0q0L+i8dLjDs+ujWri7prXt5iIj388eHuOgemGHV0K6PVMN8lMdeyl6RE8190xPu8nL8Pk1vXi29e122fQXc2tvpOadvLky9maa0ve3M8cRPHP8A15vf0TpTFj6pjxxEUp1HLWsR7Ijjhlbfpn0/V0pwdG1bVvxPZ/lxSlOfbxHmoejHpPp9J0M2Hcx7OTLkzzk7qVieeYiPHmY8fCS+DJat7RXW9dja96MdW3tv0q3MOxsXvhtF5jHM81rxaOOI9ngt9Q6hj6Z6bVy5cV7Y8unFL2pWbTX88+PEfo5boPWNfpvXs29npltivF4iKRE28Z5jzlo7Hpfjr6RU6jqYctsE4Iw5MeTisz+aZ5jiZj2/6ut+Ht1J1XtpNun9VodR6h+L0Oq5ce32cTTHlifDj247RP8ApDivTHW39fqtJ6hs12Ztjj1eWMcU5rEz4TEe2Jn+8Og/xZ6PTsxvfgc34uPDv9TXv8uPPn3eDlfSHrWTre9Gacfq8WOvbjpzzMR75+ZwuPJXJuY7a+SWUA+mgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1dX0h6pp6EaODPWuCItEV9XWfCZmZ8ePnLKGbUraNWjYANAAAAAAA0Omdb6h0qmSmjmjHXJPNuaRbx/eGeM2rFo1aNi31Dqe71LLGTe2L5bV8I54iI/SI8IVAWIiI1AAKAAAAAAAAAADVp6Q9Up03+H1z1/DernH2+rr/ACz4cc8MoZtStv7o2ADQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACXFPit9P3OKfFb6fuiIiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IiXFPit9P3OKfFb6fuCIlxT4rfT9zinxW+n7giJcU+K30/c4p8Vvp+4IgKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOhz9Awz1DpGPUtmnX6hjreZtaJtX2344jjwh7T6M4Y9LK9N9Zl/B2x+t9Z3R3dnb588cfzeHk4fiKfxs05gdL/h6N7oWrs9I1smXNky5O6bXiPyRaYjnniOfJk4+i9SydQvoU1Lzs0jm1PCOI9/Plw1XNS2+/g0oDZ1/RrqVurYdHa174ZyfmtbmsxFImImYnnieOfJ7/AOHZwdR6jrbvrK119TLsYLVtXm8Vnisz5+E+Ph5pOfHHyac+NLS6B1Xf1o2dTTtfFPMRburXnj3cz4qeHU2M+5XUx4pnPa3ZFJ/LPPu8fJuL1nffwPEdfi9E6a3pHg1dqLZtLLW3bfmKza0V548J58GDu9D6poasbW3p3x4Z4/NMxPHPviJ5j92K58dp1EmmcNP/AA/1f8F+M/BZPUdvfzzHPHv455/sh0HVw7vWtXW2KzbFkvxaInjmOJa6ldTMTvQzxs9U9Heo6ltnYrp3jTx5Ldtu6JmKRM8Txzz5e14afQeq72r+J1dO98PjxbuiOf05nx/YjLSY5txoZov6HRupdRnJGpq3v6qeL8zFYifd48ePyaHSvRbd3Nnaw7OO+Cdek+7xv4cV8/KY9vkls1K73PgYAt06bt36nHTvVf8Aae7tmndHhPt8eeHSa/opTX9Ivwm5W+XUvitbFfuiJvMRXnwieY4mUvnpTzPxs05AaO70TqXTsFdjd1L48VpiO7uif68TPH7rm/0La2OqbOLpnTMuKmGMcWxWy1tNZtHh48+3x9s8fJerT32GEL270fqOhsYsG1q3pkzeGOsTFu6fLiOOfFZy+jPWsNLXyaNq1rSbzPfWYiI8/b/bzXq07d47jIHtqaufc2Ka+ritly38q1aP8B3tPqGlj6nq2x4s+auPmLRMTzMcxzEzxPC2vWs6me4yB0PWfRjewbe1l0tLJOljtPbPdEzxEePhzzLO6f0TqfUsVsulqWyY6zxNu6Kxz+8xyzXNSa82+xpni5/C97t2rTr2iNPj1/dMRNOfLw9v7LHTOg72/fVtXFMa+xk7fWRavhET+aeOfZ4tTkpEbmRljR650nN0fftgyRM455nFeZj89ffxHk046V0jp/TNLZ6tbdyX3ad9fw/b20jw9/nPizOauomO+xzY1OodJ9Vk2svTstdvS1+2ZzVtHNYt5RMe/nw/5PC3Sd+ttStte0TuxE4PzR+fnj5+HnHm1GSsxvYpDocHQr7Grqa0aGTHtX27Ysux62s14rz3REc+ccT/AE9vKG96KdSw9TvqamGc9e3vpabVr3V8OZ8/fLHXx71MmmCNLb6B1XTnFGxp2rOa/ZjiLVtNre7wmUeodE6n03DXLu6lseO08Rbui0c/PiZ4ajJSdamO4zxv6foz1DHv6/8AEdO1Nac1MeSe+vtmPLiefb7HhfoG7t9T3sXTNS2TDr5744mbREREWniOZnxnhOvj35NMcaGPonU8m3m1aal5z4K92SnMcxHy8fH9nzf6L1Lpvq53NW2OMs8UmJi3M+7wmfFrqU3rcCgOo6L6KbVtyP4vpXpr2x2mJi8fzeznieY/d5dO6V0TP+C1s+5s5dzbrzxr9s1xc+UW9vP/AF4Oc8RTvrvr0ac4Pfe15097Y1ZtF5w5LY+6PbxPHLwdoncbgAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHb9A28Mei072Xj1/SvW1xTM+28eH954Nbbxf4Nt1Pn/ALVh1raPMeE8TaOP6RMS4geWeFiZmd/O/wDw26XdyXp6CdLil5rE7F5niePKbcOh29Wu51TYtacubJ+AxT+Fx5/VfiOZtz3T7o8P6vzkiZieYniS3Db8T7/mTbvOpVpqz6NxfBXVjHszE4/W+s9X+aPDun/qP2c16Sa21ode3PWxOP8AEXvkrNbfzUtafd/oyBrFgmk73vz/AJ2bdz0fXz73TOmU2dKmzgx8xi2tbZml9f8A8UeHjHy939eQ6pWlOqbVcWe2xSMtojLaeZv4+cz7f1VomYiYiZ4nzfFx4ppaZ2P0W2vln061d+sRbW2MMxjyRMTFuKS5/omxbJ6P9bttWtmpFsOS1bTzzM3nmf1niHNDFeG1Gpn1/E7Nv0zNN/4x/FNXp+LLinFzXevvTSnb2+U18eI/b5uL9Gprb0p1JpEVrOWZiI9kcSyOZ445nj3Phj4fkrNd+Y199zbvsGnudP6z1fqfUclf4fkx5OLTkiYyRM/lrx74jw/tD016/jNTo2zpdNruxgxUrGT8ZOP1F4455j/fieeP0fnvM8cc+D7EzHPEz4+bM8LM95nv9x7XbuNe2xv/AMTxxoam/q32ucmDDszW9bcRzaLcRzHh8vHlPX18WH0s29XFtZM18vT7UrGbL32paZj8nPyiOXCRMxPMTMT8nxfwvnU9vv6pt75cGXT3Jw7NOzJivxevPPE/s76mtmxeneTdmI9Rs68zhvFonu7a1iX50OmXDOT5+Jj9x0XT8uTJ6GdajJe1+MuK35p58ZvHMtzrWS+O3pRbHaaz6vWjmPdPMT/aXAjNuH3be/n/AF/o27bp23i1ul+jezuX/JTNmrN7f92J7oj9o8P6PbR6fsamXrWfNv4c1NnWy3pWmTum8fHMfLnj93Eamxk1NrHsYeO/HbujmOY/dr7HpLlya2fFr6Gnq22azXNkxY+LWifP9OXK/D33/T8/72uz0Q16bPWLUtmy45jDa1a4svq7ZZ8Py8/9eTpM2tGt0jRxzoxpTHU8U+p9fOWa/Pn2c+7/AJvz8mZmeZnmXXJgm9ubf3+6bfos6O/h9MsvVsuatenUpPdknLHEVivHbx8p8f2ZWfV2OtdB6bHQ4iK6+TJ6zFGSKzjtNuYtP95/dx/M8cc+BEzHlLNeGmNTvvGvj1v6/U2/Q9qcfUtrrejp5KZNq+rir4Wj/MvWbc/6xCll1snTOjdAxbvbjvi34tkjuie380z4zHycTEzE8xPEwJHC67b7f+aXba9LdTPrde2MmanFM9pyY55ie6G10rH17B03VnpWTB1LSy0/NiyRXjFb21nmef8ArycWlW9q89tpjmOJ4nzdLYZmkV3Hb6I7iMejPpNvdI0/V48e7qTS9aRzWmaImfD9I5/dew7ertbG1nmIivRM15pXj/6P1c14j/8ANWZ/aH5uOc8Jv/l8f/f47Lt11M//AMmekbOxf/6z772n9bTMvXqHo7s9S9McvrY7NXLxl9ZExPdSIiJ4+fPh/dxg30JiZms68/HtNu9xW2tb0o083UNT8H0+kWwalZvXikzXw54mfGf93h1THl0eg9Rx5elYtPHntXm1962SclufOsTE8z7fZ/ZxL7MzPHMzPHkzHDd4nfr38fr/ALNuw6tlvf8A4i61LXma48uKKxM+ERxE/wCsrNOnU2MfUclNfL1G89RyxbVjanFTH+afzT758v8AqHCkTMeU+azw06iInxER99zb9H6jacfU+p5MVu20dI7otW3MxPNvHn/djdF2qY/R3Qy7ducWHq1YibT4Ujs55/SJnlyIleFiK8u/Rt+i9L6b1LW9Juo7mzf/ALLnrf1dvWRPrImea8R8ocz0LLt6fROqbmlixxesUp6+bxFscc+PEce39Y/fhgczxEc+RzPHC14eY3ud718ev1NvtrTa02tMzaZ5mZ85fAekAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXOpamPUnV9XNp9dr0y27p8pnz4+T36d0bb2cmvltr2nWvkrFrd0RM154mYjzY56xG5RmDQjpO1sbOxXTwTfHiy2pzNoj2+XM+cvPB0ve2L5aYte02xT25ImYjtnx8+f0OevsUxpYOl3rsbWDdrfFkw618tYiY8ZiPD38wdQ6Tl0dPX2LeMZK/n/ADR+W3ujifHwOpXetjNF/HpRl6RjzYqWtsX2pxREe2O2J8v1MfR+oZbXrjwd0479l+L14i3HPHPJz1+ZFAW69M3b7l9Suvac9I5tXmPCPfz5Gbpm7gnLGXBNfVVi9vGP5ZnjmPf+y89fYqC1HTty2XBijDPfsU78ccx+avHPP9lVYmJ8KDZ3ehbMTXJpa974fVVtM90czPHM8R5z+zMnVzxjwXmn5diZjHPMfm4nif7s1vW0dpR4jVr0PZ/h2xsXr25MN+2ad1fKOe72+x49K6ZfqNs8Vnj1WObR4x429keJ1K6md+BQGx/BNjNoa9tbBNs83yVy/njiOJiIjxnj3qWDpu7sZ8mHFgtN8XheJmI7f1mfAjJWfkVB659fNr57YM+OaZKzxNZb9Oh4cefp+vnwW/zq85cnrY/m7bT2xEfpHilsla+RzYu4Ok7+xr/iMOta2OeZieYiZ490c8yjqdM3dzFbLrYJvSJ455iPH3Rz5tc9fYqD1z6+XV2ZwbFJrkrx3V5j2+K7m6Vs5t/YxaepelcUxE1vkr+Xn2d3PBNogZo9M+HLr5rYc1JpkpPFqz7FnP0nf1tedjNrWrjjjmeYmY598c8wc0exSGj0zp/47V3PV47Xz44p6uInjxm3E/2fcPTc+DqFMG5qXvN6WtWlbxHdxE+MT5JN6949DNF3W6Tv7WCM2DXm2OfCJ7ojn9ImfFXtr5a7U600/wA6L9nbzH83PHCxaJ7bHkL2fo/UNfBbNm1rVpT+ae6J4/aJ54+b06l06cN7X1qTOHHhx3yTNvKbR/zTnrPiRmi1i6dt5pwxiwzac8TanEx4xHhM/L90NvS2NK9abOKaTaOa+MTEx8pjwXmjetjwFzpOpj3up4dbLNopkmeZrPj4RM/7KlK2vetKVm1rTxERHMzK7jeh8F3Z6Tv6ta2z681i1orExaJ8fdPE+CV+jdRx5ceK2tMXyTMVr3RMzx5+3y+bPPX2KAu36VvU2setbXmMuSJmkd0cWiPGeJ54ev8AAeqd0R+Fnxjnnvrx/Xnwn5HPX2M0emXDk19i2HPSa3pPFqz5tDN0fbzbeaNTTvTHS/Z22yVntnjnxnlZtEeRli3HTN2dy2pGvb11Y7prMxHEe/ny4MnTdzFlyYsmCYvjx+ttHMfye/nnx/Y56+xUFnD0/a2Iwzhxd3rptGP80fmmscys/wAB6p3RH4WfGOee+vH9efCfkk3rHmRmiefDk1818Oak0yUni1Z9jW0OhbNr9+7r3rgnHa3PdHMT2zMcx5x+5a9axuZGMLuv0nf2df1+HWtbHPPE8xEzx7o55lPJoxPT9G+ClrZ9i+SsxHt4mIjwOeu9bGeLux0re1rY4za819bbsrMWiYm3u5ifB57nT9rR7PxWL1ffz2/mieePPyWLVnxIrC7j6Tv5db8TTXtOKazaJ5jmYj2xHPMrmr0j8bkxUpivhj8N6y1pvWe+Z54mI9kTwk5Kx8jGHrOvljZ/Ddkzl7uztr4+Pu8FjP0jf17Yq5teazlvFKcWiYm3u5ifD915oj5FIaU9C6pHHOpPjPH81fD9fHw/d4T0zejd/B/h7ev457eY8vfz5cJF6z8ioNXT6Hs5epU1Nmk4Yms3m0TE+Hvjx8fHhnZ8GTXz2w5a8ZKzxMRMT/osXrM6iR5i7sdJ39bX9fn1rVxxxzPMTxz7455j9y3SeoU1fxNta0Yor3TPMcxHv48056+xSGhTovUsmGM1NaZpanfE91fGOOfCOXnrdK3trB67BrzbHPPE90Rzx58RM+P7HPX2KYuavS97cxzk19e1qRPHMzEePujnzfNXpu5uWvGvgtacc8W5mK8T7vH2rz19ioNXW6HtZsG3a1JplwTFYpMxHM+HPPM+6eefar4ulb+bV/E49a1sXEzE8xzMR7o85TqV9ikNO3Rs/wDCsO5SOZyW4mvdXwieOJ8/fKp+C2fXZ8Xq/wA+vWbZI5j8sR5kXrPiRXFvY6Zu6uvGfPh7Mc8cTNo8eY5jw5VGomJ8KAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANHrOTHknR9Xet+3Tx1t2zzxMc8xPzaeH1Ofc6bvV39fDiwYsdL0tk4tWY8Jjj3T73NjlOPca2jf2oxdR1ow4dzXxWw7OW1oyZO2Lxa3MWifbw+9R3cGbD1b1Was+sthrXx4nJ2+EzEe3yc+JGKPf35Gh1fLTLGh2Xrea6lK24nniYmfCfm9OoTjzdJ0MuPNjmcVJx3x90d8TzPjx7mWN8mtfQdB0bf1tTpPqs94rOXYtWbVt+fFE0iO+I/3Vdjs1uiZtSuziyW/GRP+XeJ769nn4ezy/dkjPTjex0uTPg2cGXWjaw0y59TBxe14is2r/NWZ9kvmLPr4Z0+nZdrFaJwZcWbLW3Na9/jEc/LiHNidGPG/vwOozdS1smvuZYyUjJrd+HWrExzNLRWsTHv44mf3c9u6mTS2ra+WazekRz2zzHjHP+7w8pemfNk2M182a02yXnm0++Vpj5J7eB0l4w36npb8dR1q4tfFTvj1kd0cR4xEe3n/AJvCPUb+voZKbOvhjXzZLZKZLxWaxN+6OI9vg54TpfUdBs5MOzh6vipsYYtOxGWndeIi8Rz5T7VHod8ddrPjy5aY/Xa98dbXnisTMeHMs0ajHqJgam7kjH0jRwUzUtfFly90UvE8TzHE+H78S18+1q58vUNfHfTva2auSvrr8UyR2xHhMT5xLlBJxRI0et5vXblI78F/V4q05wczWOPZzPn5+bRwbOvHWuk5Jz4opj061vabxxWe23hM+yXOhOOJjQ6rpc6WH8Bmrl1eK0/zMmbPPfS3jzWteeIhStXDudN1aTt11vw+XJ43ieLxNuea8ecx7mEuanVN3Sxzj1s80pM88TWLcT8uY8GZxTHeJ7iz6Sf+sGx+tP8A3YaeXPjzb2/WubRzYL5azOLNk7e78v8ANWzmcuS+bJbJltN72nmbTPjMotdLtEehf6lGr/GLxhzWtr99Y7+6bTEcRzxPt48eG3sW08Ov1CMeTTiuTDMY7VzzfJk/Xmf7OVCce9d/A1+izjtpdQwX2ceC2bHWtJvbtifHyXtXLg1L9O1cu1gvfFGa171vE1p3VniOfJzQWxc0z3+9aHRYK4tu3Sc34qME4K0pOK0TE2mLedffyo5v/Wm3/tn/APd4a3Vt/VwRhwbE1xxzxHbE8c+6ZjwVa5clc0ZotPrIt3d0+M8+fKVxzEyOj2K49Tf6pt5d3Bkrlx5MdccX5vNp8O2Y+T5ly6+1G3q02sFbZtbB2WteIrzXxmOfe53Lkvmy3y5J7r3tNrT75nzQSMPuR0tb0150sGHd0rWpr5KX77d2O3M89sz7P1+Sp1DW1c+bUw4M+vgvNbTkr6+bYsc+ccT7OfcxRYxanexo+j+THh61rZMt60pEzza08RH5Z9qxoa9OmdQ19vPtamTHS/FoxZotMcxxzxHuYw1am5nv5G/irj6frbVc29r57bGXH2eryd3PFuZtPuTwbmD/ABB1Gb5cM1z0vjx3yW/JPlxEzHs4hzoz0t73I6jBtY8G/wBOx5cujjpinJbjDeZjHzWfO0zx4z7GT66n+GvVesr6ydzu7O7x47PPj3cs0WMUQNLr2XHm63nyYslb0nt4tWeYn8se1s79abunvxh28NK33K9trXiK3/JHhz5fP9nKPT1+X8NOt3/5U39Z28R/Nxxz/RJx9o1PgdD+IpG3jwYdrUyTi064cnrZ/wAvLPPM1i3+kkTo03cmDFnxYpzaNsXE5u/HS8zzxFp9ng5oOj9R1GlbBpW6Xiybmta2K+ack1yRMV5r4cyyfXU/w16r1lfWTud3Z3ePHZ58e7lmixj1O9/f3I1OtZ8Vuv5M9LVy44tSeazzFuKxz4tWnqa9W2uoT1HWnDnxW7I9ZHdPMeETHs44/wBHLBOLcRG/oOix+q2cvTNyu9gxY9XHSuSl8nbaJrPjxHt5emLqGr+I0c05a0rObYmfHxxxefyzMezzcyJOGJ+Rv60Yuna3qc25r5bZtnFasY8ndFIrPM2mfZyyuqZIy9U28lbxets1u20TzExzPH9lUarTU7HSattfLqYJ3c+pbHjw9sZqZZpmxeE/l4/73uR19nX/AB+hFs+OtZ0PVTabRxW35vCfc50Z6XnuL3T8eHH1jFj280VxVvxbJS/h+1o9nPtbk5NbBrYcffpY5jdx37cObv4rz/NMzLlRbY+ad7G1k2Mc6/XY9dSZy5qzT80fnjvny9/gu4NzW78WKcuvNsnTqY4nJb8sWiZ5raY8nMCTiiR02Pbx4OpdMpmy6dKYfWeGC0zXH3Rx42mePP8Aow8URo9UxTltTJXDlra047d0TETE+Eqo1XHobW9hrTLublep4bY81ptXHjyc2yxM89sxHlC7bJgr1fN1b8dgtr3xzMY4v+e3NeO2a/q5gZ6W/kdBXaxR1fo94z0imPWx1vbvjis8TzE+56aN8GTBhpsZdK+vjyXmJnL6vLh8efCY8/e5sJxRPyOm18+vl0tSuvfSm2tkv47V5rav5uYtHjHPz+bwy3x9S09jBTZ1sWWNucs91uyuSJjjmOWAEYtTvY3cPq7x1LTt1HHlyZMdIpmy34raazEzETM/tC7h28V66W1hydPp6nBWlrZr2i+OYiYmIrE+Me5yoTi38japmxX6RhvGTFW2vtTktjm3FprMx/LHtW8mPBi2eq7cb2ramxgyRjrXJHdM24njj9nNCzi+o0uu5qZt6lseSuSsYaVia25iPDxj+rNBuscsaABpQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF2Ok786n4qNa3qu3v55jnt9/HPPD16d0fb27YMv4e0617xFrd0RM158eI823qzo4L0yY82p6ucHb63Jnmcsz2+XEzxX9FXF6rZz9L2672viprY8dMlb5O20TWfHw+bzdW07RRz9O7vW4tXWva8blsNL98cTERPFeJ9vt5VtnpW9qYPXbGvamPmImeYnj9ePL929p58N9mKUy0ta3Vb3iItEzNe2fH9PmqZa49LB1O+TcwZvxX5cdKX7rWnu55mPZwRktvQp5ulbObfz4tTTvjri7eaXyV/LzEf97njxeX4O+LV24zauT12G9KzbuiIpzz5x7eW3nz48+9vVpm0c+C96TOLNk7eeKRHdW3veMbOlrZt6cWeMmKufXtXm/dNorPNuOfGYgjJbXj1/wBDJ2Ok7+tr+vz61q4445nmJ4598ecfu98/SNrNuZq6mnelMcxE0tkrM1ma8+M8vbqGCK5N3br1TFNM0zNaYsnNskTPlMeyI+az1naw5MHUa4tjHb1mfFMRW8T3RFI5/XxXntOtffgZEdL3p3baca9vX1jma8x4R7+fJHc6ft6MUnawzji8zFZ7onnj9P1bc58GfXnWjPWs5dDDWc0fmilqzPMWmPLnylU6vjrh6L03HXPXNFZy/nrzxPjHPHPsWuS0zESKGp0zd3cc5NbBN6RPHPMRHPu8Z8VrV0Mc6OLLlw5LZp3YwWxxbtmY48vHynld0c2LN0nUxUnS9br3t3Rs5JpxzPMWjiY5T/G4ck0vfPg7v4pW89s9sdsViO7iZ54+bNr2mZgZ+Xo+SOm5d2lZr25rV9XN6zxSOfHnnz5jhlNvPbFsdJ3MVM+GL03bZu214jurxMfl97K2sH4bN6uM2LL4RPdit3R4+x0x2me0jRvp9M0sWCu/fZvny0i9ow9sRjifLz9rw3+l5NfNl9RPrdelK5YyeEfkt5S0b62p1jPi277uLDFsUVzVteK2peI454nzjye2zbFOxtdMtlrimmpjwY75Z7YtNZ5/vy5xeYn6/IwcehtZfw/q8M2/Ec+q4mPzcef6funm6VvYM2LFk17RfNPFIiYt3fvDZx008dem62fcw29Vjzd0483Fe6Z5iJtHlD0vnx4MOlTDsaOvlpsWnjHfvpSJr7fH2+Uz81nLbfb78jA3OnbelFZ2cM0rbwiYtFo5/WH3T6bub1LX1cE3rWeJnmIjn3eK91iurXRx9k4MexOWZtj18vfjmOP5uPKJfMVKb/R9bXx7WDBk18lpvXLfsi3PjFo9/DXPPLsZ2XT2MOK2XLimlK5PVTM+y3HPHH6PfH0jfy5L48evM2pFZtHdHhFvGPa0L0x7fTs+pXqWLJlx7XrPWZ79vfXsiOYmfPyXs0Y9qnVqYNrDFbY9esZZvxXw9kz/AGZnLMff5DExdOzYNy2Dc1MlreqteK1vEezz58ph96d0fb27YMv4e0617xFrd0RM158eI82nizYNaNTVvtYb3wa+aL3reJrzbyrE+9HF6rZz9L2672viprY8dMlb5O20TWfHw+aTkt9/qK1ek1z7E4MOC9YjcvinNOSOIpHs4n2xHirX6Nuzu5tbDh75xeMz3ViOOfCZnnjx9zRtta9b0tObHMR1a2SeLRP5PD836fN9x4NWMu/3ZtTNlvl76VybHbjmszM8+E+M/L2EXtAo6fQ9rPfax5aTjyYKTMVmY8beHEeflx7VfX6Tv7OO2TDrzatZmvPdEczHnx4+P7NvPm1svUtjHXZ14jLoeqrfv4p3eHhz7P3fNXPivp6MY7dPjJq81t6/JMTSYnnujifGJ8zqX1sYGjhrm6jr4MsT23y1paPKeJmIlZjpG3sbGeNPBN8WPLakTNojyny8Z8XzDnrf0hx7Fr0ik7UXm8flrx3c8+PlDX1/wUzGauXVveNq9rznzzEY47vCa1ieJ5j2tXvaveBna/SMuz0u98OG07VNmcdomYr21ivM88/NUr03dtuW0417evrHM18PCPfz5cNva9Tu6e7gw7utjtbenJWLZYiL17Y/6/Z8y7Gvlrl6fXbxRknUx4ozzbilrVmZmO73TE8MxksMa3S96u3XVtrz669ZtWvMfmiPHwnnj2PXN07LraeWNjUvGaL1iLxkrMV558OI9rU1c+DUy9O1r7WG18FM03vW/Na90TxHKn0nawa+hNs168128V5rz4zEecxC89p+/qKez0rf1MHrtjXtTH4RM8xPHPv4nw/cydJ38Wt+Jya9oxxEWmeY5iJ9sxzzDSyRi1I6nnvu4M1dqtq46Y8ndNpmeYmY9nD227a+bU2Mu1n1LZJw8Y8+vlmt8k8RxW1P9TqW7DHv0jqGPVnZvrWjFFe6Z5jmI9/HPKdei9SvhjLXVtak1i0cWiZmJ90c8+1t3nSw49y2HLqTjyalqUyTnm2XJM18piZ8PLy/RWxbeGOt6GT8RSKU04rNu+OKz2T4TPv5SMt5jsMfc6dt6MUnawzSL89s90TE8fou6/TI/gWXfyYZyXmZin+bFYrWI/m+fj7HjOWk+jlcXrK+sjbm3Zz48dkePHu5PWY/8Neq76+s/Gd3Zz48dnHPHubmbTH6ivOhtV2smtOL/OxVm1690eERHP8Ao9cHR+obGGubDrWtS/8ALPdEc/tM88fNt5fw89T3Ooxu6vqs+vaKV9ZHdMzSI4mPZ5I69MW1v9L2Y2owzjx46epmsxeZjw/LHtrPv9zHVtoY99HJ+Gw0pq5PxFs1sc274mLTHsiPl7046JvV2sGHPhmkZr9sWi1Zj5+PPHPHPg0/Wal82vj2NitKxu5ptxk7ZiPZzMeMRM+182s2vr9P16d2nSabtck49fJ38ViJ8Z8fP7HUt4gYvUtK+hu3wX8omZpPMTzXmYifDy8lVqdT1K5Oo7mWm3qzWe7NXjJE90TM+EfP5Mt2pO4ABtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHpgzZNfNTNht25KTzWeOeJQtM2tNpnmZnmXwTQAKAAPbU29jTy+t1sk478cTMRzzHumJS293Z3b1vtZZyTWOK+EREfpEeCuM8sb3pABpQAB9ta1p5tMzPzl8EABQAAetNjLjwZcFL8Y83HfXiPHieYeQmtgAoAAAAAAAAAAAAAAAAL2HrHUMGvGDFs2rjrHEeETMR8p45hRGZrE+UPPzAaUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z"}),category:"common",attributes:{contentBTR:{type:"string",default:"Frequently asked questions"},contentvEZ:{type:"string",default:"What&#039;s the best thing about Switzerland?"},contentPSY:{type:"string",default:"I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."}},edit(A){const{attributes:t,setAttributes:f}=A;return wp.element.createElement("div",null,wp.element.createElement(n,null,wp.element.createElement(x,null)),wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{className:"bg-indigo-700"},wp.element.createElement("div",{className:"max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"},wp.element.createElement("h2",{className:"text-3xl font-extrabold text-white"},wp.element.createElement(e,{tagName:"span",value:t.contentBTR,default:"Frequently asked questions",onChange:A=>{f({contentBTR:A})}})),wp.element.createElement("div",{className:"mt-6 border-t border-indigo-300 border-opacity-25 pt-10"},wp.element.createElement("dl",{className:"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12"},wp.element.createElement("div",null," ",wp.element.createElement("dt",{className:"text-lg leading-6 font-medium text-white"},wp.element.createElement(e,{tagName:"span",value:t.contentvEZ,default:"What's the best thing about Switzerland?",onChange:A=>{f({contentvEZ:A})}})),wp.element.createElement("dd",{className:"mt-2 text-base text-indigo-200"},wp.element.createElement(e,{tagName:"span",value:t.contentPSY,default:"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",onChange:A=>{f({contentPSY:A})}}))))))))))},save(A){const{attributes:t}=A;return wp.element.createElement("div",null,wp.element.createElement("div",null,wp.element.createElement("div",{class:"bg-indigo-700"},wp.element.createElement("div",{class:"max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"},wp.element.createElement("h2",{class:"text-3xl font-extrabold text-white"},wp.element.createElement(e.Content,{value:t.contentBTR})),wp.element.createElement("div",{class:"mt-6 border-t border-indigo-300 border-opacity-25 pt-10"},wp.element.createElement("dl",{class:"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12"},wp.element.createElement("div",null," ",wp.element.createElement("dt",{class:"text-lg leading-6 font-medium text-white"},wp.element.createElement(e.Content,{value:t.contentvEZ})),wp.element.createElement("dd",{class:"mt-2 text-base text-indigo-200"},wp.element.createElement(e.Content,{value:t.contentPSY})))))))))}})})();