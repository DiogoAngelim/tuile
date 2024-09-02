
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/branded-nav-with-compact-white-page-header', {
            title: 'branded nav with compact white page header',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAJIBaADASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAMBAgUEBgf/xAA6EAEAAQMCBQIEBQMEAgEFAQAAAQIDEQQSBRMhMVFBYQYUcYEiMpKh4RVTYiNCUpGx8MEHJDPR0vH/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAYF/8QAKhEBAAICAAMIAgIDAAAAAAAAAAERAgMEEiETFTFRYqHh8BRBBbEycdH/2gAMAwEAAhEDEQA/AOQA+tcgAAAAAAAAAAAAAAAAAAAAGJqpjvKDI15lHk5lHktWw15lHk5lHksbDXmUeTmUeSxsNeZR5OZR5LGw15lHk5lHksbDEVUz2lkQAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV01qL2ptWpnEV1RTn6y6/FOE2NPo5vWN0TRMZiZzmOzy2OD6m9pYv01U0zMbqaZ7zDpcKvzxDR3dPqs1VU9Jme8xPb79Hm2ZzfNjPSPFJeXhfCrGq0fOvVV5qmYiKZxhydRa5OouWs52VTTn6PZqaNXwq9Nm1eqiivrE0+v8tr/B9Tb0tWoqqpqmI3VU9c4+7WOVTcz0nwVzQHcAAHmmczl6XmZyWAdPgWh02uvav5yb0WtPpa7+LUxEztx06xPle9wrSarh9Gs4RXfxF6mzctaiac0zV2ndGIx6OE7cYyqVcUdi98OayibHIvaXVU3r3Iiqxc3RTXjOJ6R6dXp4f8PUxxrSabV6jTamxerroq+Xu5mmaaZnE9ImOyTvwiLsp88PodF8N1RxDQ/NXdPqNLfuzarnT3d22qImdsz5+jz6v4d1lmIqs16fURVeizNNm5umiue1NXiSN+uZqynGHX1nw9q9Lb303tLqIi7Fmvk3c8uuekRVnGGb3w7qrc2eXqdHfpu36dPus3Jqiiue0VdP8A9r22HmOOO3Pw1qYv3bc6zQRTYpzeuc78Fqc4imqcdJz6JfEPDrXDL2jtWpiZr0tFy5VTVuiqqZnMxPjoRuwmYxiRyYnE5el5npd8UkAaQHs4bRormoi3radRMVzFNM2aojEzPrmJdPWcF0tWt1Gl0FVy38rP+tf1V2mLcR6dozmZcstuOOVStOAOp/Q9RTq67F3UaW1TTbi5F6u7i3VTPaYn1z9FI+HdXzdTRXf0tunTxRVVcruYommrtMTjt0O21+ZTjjs6n4b1mntXqqr+krqs0c2bdF3NU0f8ojHZxmsNmOfXGbABtAAAfURwHhtzXU8Pt1a2NRXYi7zZmmbdMzTnrGM4c3+gaqdNp70XdNNWpimbVrmfjrzOOkY9O8uGPEa5/dLTkjtRwG9Y1OmmuvTaqzXqKbNcWbs4pqmfy1TjMMU8A1F+9cmi5ptPRN+u1Zou3cTXMTjFPTr4z0Xt9fmU4w6ul4Bq9RRuru6fTTNybVFN+5tmuqOkxHTr16LXPh+ujhdq/GotTqa7/J5G7ruzEbY94nv7E79cTVlOIOhxHhN3h9G6vUaa9iubdUWrmZoqj0mJiHPdMcoyi4ABpAHo0Glr12us6WicVXa4pzjOPMpMxEXKvOOzqrHA6fmbFm9qrd6zE7LlzFVN2qPTERmM+k/9pTwPUfJVamm/pa6qLfNrs0Xc3KafMx/LnG7H99P9lOWO9reA54heo0tdqxp7Nq3VXcv3MUxNUR0z7zlCj4e1c3dVRdvaazGm2b67lzFMxVnExOO3T90jfrmLspyB1o+H9Z83qLFy5p7VOnppqrvXK8W8VflxOPVfX8Dpt6zTaaxesW86Om9du3Lv4M5mJmJ8dsYO313VlOEOxT8O6urU12edpYposxf5s3PwVUT/ALonHbv/ANOVet8q9Xb30XNlU07qJzTVj1ifDeOzHLpjI0AbQAAH0Oi4Pobug4fevWtfcuayqumZsTTtoxVjMxMf/PlCfh69VqdRRRqtNRZtX+RTcvV7d9XiO/Vw/IwuYn7+lpxR1rHw/qrlq7cu39LpqbV6bFXPubcVxETjt7lHANZzdRRfuafTU6euKKrl65tpmqesRE+vTq122vzKckda38P6uq9q7V27prHyk0xdqu3MU/iziYnH/uYWufDtU6XQVaXVWL17VzMbIr6dJ7x07RHdJ364nx+1f9FOGPZr+HV6GLdU6jTX6a8xFVi5uiJjvE+HjdMcoyi4ABpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHu4Tp7eo1VU34mbVm3VdrjPeI9P/DOWXLFyI/I6r5T5rkV8j/m87o/1i/81zYot8rby+Rj8GzxhpxbT27GsibMYtXqKbtEeIn0Zxyyush4QHQdDhnDZ1ebtzNNmnx3q+j6LgNjTRp4u27dETVOY6dcejFejrtcJ5Onqm3XRRExMR1zHWf++v8A24+i01qL1MXNbctV8ma8VXIp3RmMUxETPTv79Xy/HcTnuyq+j1aI62+m4hpdLfszF2zRVFXrjrH3fG6/RfLVzVbzNvOOv+12K+G016XFq/c09MTNeIuTmJx0x2n/AOG+l0FyrQXLeouTdm5bxvmnEzjtOP8A3szwXFZac4i+nk3uwuLp8uA+qeIAAAAAAAAAAAAAAAAAAAAAAAAAB07PGdTa0tNiiiiZpjbTVjrEfR0uFaaeH6O7qNTO2qqN1UesRH/y+f012LOptXZjMUVRVj6S63FOLWdRo5s2N0zXjdMxjEPNswm+XGOk+KS8mpr1fFbs3bdiqaKOkRTHb7+sttRxjU3dNOnqpppmY21VRnMvRwvitjS6Pk3qKommZmJpjO7Lk6i7ztRcuxTt31TVjxlrHG5qY6R4KmA7gAA8z0vNMYnDOSw6nAddpdDe1XzsXptajTV2J5URNUbsdesx4l7aOL8L0lrT6TR6W/c0saiL2onUbd1zHaMR0x6vnhwy045Tcq+r4h8R6HU2LFmK9fXFvVxfmrbRbmmnExinb6xmP36tp+JdBHENDqKqNTqKtPXXVXfrtUU3JpmmYin8M4nv3l8kOf4uuqLd/gnG9Nw/R6azet3qqrWtnUVTRETG3l7cRme+VqOO8P4fTVPC7Opqrvami9di/tiIimc7Yxnz3fNDU6MJm5LfSVcY4Tp4vU6TT6m7Rq9TRd1FN+Kcbaat22MT17z3evV/FGhu0WaKPm64t6y3qPx26KYpopnO2MT/AOXyAk8NhPWS3c03FdDVXxWzraNRGm19yLlNVqI30TFU1R0np6vPx7X6XXX9L8lReps6fTUWI5uN07Znr0nxMOWNxqxjLmgHpeaIzOHpd8UkAaRTT3Itam1cqzMUVxVOPaXf0/xDZtcT4ldjn27OtmJproppmuiY7dJ6esvnBy2asdn+S2+np+INJOsv3blWrmqbNFu1qKrduq5RiZmenaInP/vpPinHtLrbOvot0X92ptWaKZrinvRVMznE+75wc44XXE39+9C3fucb01Wr1N2Ld7bd4fOlp6RmKsRGZ69ujgA64a8cPAAHRAAHb4t8Q6nVxTZ0l+9a0vKpoqonEZmIxPb0Y/rNu3reFam1brmdFZpt101YjdPXOPtLijjGjXEVELb6jh+s0M6izpOGU3opuaujUXq9RNNMUUUTnEdVLfxHp7cV2ar2qt02tRcroq09NFUXKaqpnru7d3yY5zwuEz1Ld6eKcN12nt2+KW9XmxeuXKOVNM74rq3TFU9OufWEqOJaKeGUaau3qLdVnVc61FqqMRTMx03T1zEZxOPDjDp2GMFu7xvi+l1+hos2+feu03d0Xr9uimqmjGNuae7hA1r1xrx5cQAdEF9Dqq9FrbOqtxmq1XFUR59kBJiJipV29VqeBT8zqLGn1Vy/firbbu4ii1VPrmJzOPR77nxFoP6ffsWaNTbi7pptU2It0RboqmMZz3l8qOE8NhNXc0W+pt/E1iNRqoidTZtX6Le25RTTNdNVMYnpPSYl49dxuzqrHEbedRXOoizFuq5FOcUTMzuxjHf0y4QY8Nrxm4jy9q/4W+jr43oNRbu6bU29TFi7p7NuaqIp3U12/aZxMTlSnjvDaddbrt2tRTbtaOnT2rlVFFVduqJnrETOO0vmA/GwLfS6/wCINJqZ1GynUTzNFTp4qrppiZqiqZzOJx6+j5oHTXqx1xWIAOiAAO9oviGrRabhdqxN2I01Vz5ij/bciqrMevXpnv6vTouP6TTWb2mt3NbZs8+btqu3RRNU0z3pndM/9vmB58uG15eMffFbfUV6vQazgl67xGrU7LnEJrp5c0zX+SO/aOyOq43oOJfNWdda1Fuxcv03rU2ds1RimKMTnzEPnRI4bGPvgW7mu43Z1dvilMWrlHzXJizHScU0f8vefuxY4noo0PDbd75ui9oq68zZmIzTVOcxPmOjiDfYYRFR96V/Rbs8d4ppuIWtPTai5cu25q337tumiqqJ7R+Hw4wN4YRhjywADaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqcHuaO1a1XzOq5Nd21Nqn/TmqMT3no5YznjzRQ7v9C03zXy39Snm7d2Pl5xEYznOcPPxevR3bGl+X1fOu2bcWp/05pzTHaery/1PXfKzpvma5tTG3bPjxnvh5HLHXnd5T4ffIAHcfoOirp1eitXqetNyiM/X1j/ALfM2KLVnisWrtVHN09PLjdOdsx2mPrExLzcO41qeHaa9ZtRFUVx+Dd/sq8/w49zh+u4rrK9X8xT8zXObn+3M/SHzHG8Llqy8On6l6dOXV9jxHWU2bfJtTzb1XSMzC9ia9Jwaq/qbk1VRTNWfH/GI/ZwtDp7OhsR81czeozMznpM+mI8scW4vOut27Fqibdi3EdJnrVOPVjgeFz253XTzb359KcsB9U8YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxNNM94ZEGvLo8HLo8NgqFa8ujwcujw2CoGvLo8HLo8NgqBry6PBy6PDYKga8ujwcujw2CoGIppjtDICACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgGY8v1jhXDNPwvSUWLFFMVREb68da58y9r8rL+UiJ6Y+7fK/Gsx5Mx5fsoneno9/g5X41mPJmPL9lDvT0e/wcr8azHkzHl+yh3p6Pf4OV+NZjyZjy/ZQ709Hv8HK/Gsx5Mx5fsod6ej3+DlfjWY8mY8v2UO9PR7/AAcr8azHkzHl+yh3p6Pf4OV+NZjyZjy/ZQ709Hv8HK/Gsx5Mx5fsod6ej3+DlfjWY8mY8v2UO9PR7/ByvxrMeR+yvFxXhmn4ppK7F+imapidleOtE+Yax/lImeuPucr8nAfqMACgAAAAAAAAAD9lAfJOoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1r/JP0bNLn5J+gNwAB89qv6ja19XCLV65NvWVTdt6ia/x2bcf/kpie+czG3xu9lLfFdZFq3rOVZ/p86iLERM1Tdxv2RXM9p6+nj1Wh3RyJ4re+Qq1Gy3ujXfLYxONvN2Z798KcK1et1l/U13qdPRprV67ZoimJ31TTViJmc4jpHYodMfK67U2v6xxW3c1HEpvW+XyLemquzETNEelP4es+XstcR4nbuxa1FOniNNo7d/VVVRM1TMxVuiIicf7Z6/+Skt3hxbHEeJTXpI1NvS0xrqKps7N08urbuiKuv4oxE9sPDwiq/Rp+F3dTVTduarVVzNcVVxMfgr7/ixPb6Y9ClfUD5PR8cvWNBw/SW7lqL06SL1dy/TXXn8UxEfh9ek9Z/d9Hw7VfO8Psaqbc25u0RVNE96Z8FD0gIAAAAAAAAAANaPyR9GzS3+SPo3AAAAAAAAAAAAAAAAAAAAAAAAAABwtT8Y/D+l1lzSajiEUXrVc0V0zar6THfrtw6+k1Wn1umo1GkvUXrNf5a6JzEvlvhOzavca+J6b1qi5TOtxMV0xMd6nI4dqbfDNN8T2tJxD5DRW9XTTYvUW+btqmZ3U00569ojP3Wkfow+B4FxDX2Piq3w+3qOLXLGo0tVcUcUpxVvjMxNPrjo8/D9bxHScQ0v9c4lxjQ62u/tr59qK9JdiZ/LTjERmPX0KLfc6Diul1+q1mn0818zR3OXd3U4jPt57Gq4rpdJxLR8PvTXz9Zu5WKcx+GMzmfR8RpeH6zW8U+Ka9LxTUaKLF+a6YsTt31xFUxunvjp2jy81Wq1vGrnwheq1c2dVepv0VX4iMxidszHpmYj/ALlaLfpo+CucU4l8OcQ4xw+dde4hRZ0PzNiu/wDiroqzEYmfWPxZ+0NbtzivBtBwbjU8Z1Wrq1t21Tf092YqtzFdOfwR6Y/98JRb78fnfxDxG/Op4nqNHxfjN6vSVTFFOjsbdPYmP9tc5/F7yvc1fFOMcZ4HprfE7+jp1nDYvX5szjM9ZmYjtEz59Ci33rxcK4rpeLWb13STXNNm9VZq3U4/FGM/+Xyuls8T4r8Q67h1PG9ZprHCbdq3bmifx3app/PXn83WJz9Yen/6bTXPBNbNyqKq519zdVHaZxT1KH1wCKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASnc/JP0UlO5+SfoCgAIXNJbua6zq5mrmWaK6KYiekxVjOf0w8ccE08aiK+fqOTF3nRpt8cuK85z2z364zjLpgOTXwGxXfqr+a1VNub8ajk01xs5kVRVntnrMds+r36PSW9HRcotTVMXLtd2d0+tUzM/bquAhZ0luzqtRqKZqmvUTTNcTPSMRiMMfJWfm7+oq3VVX7dNqumfy7Y3f8A9S9ADnaPg9nS37Vz5jU3osUzTYou1xNNqJ6dOmZ6dOueje1wqxataO3TXcmNHXNdvMx1mYqjr0/yl7gscqngdm3asU6bVaqxXYtcqLluqndVRnOJzEx+zpWLUWLNFqmquqKKYiJrqmqZ+sz3bgAAAAAAAAAAAAJ2/wAkfRSE7f5I+ikAAAAAAAAAAAAAAAAAAAAAAAAAAA+av/Beiva3VaqOI8UtfNXJuXbdq/FFFUz7RT2eq58K8Jq4FPB6LNVrT7t8VUVfjiv/AJZn1+rti2OBo/hPRabiNvX3dXrtXqKbdVqatTe376ZiYxPT39MJ2fgzQW7tnfrOIXtNYuc21pbt/dapq9OmM/u+jCxzNJwTS6S7xK5brvTPEa5ru7pjFM4mPw9Pf1y5tfwTwuvScP01V7WbOHxXyZi5EVZqndmZiO8T1jGPu+lCxxOG/C3DtBGrmuq/rLusp2X7uqr3110+M9P/AGIefR/BnDtLqrF2rU67UW9NVusWL97dbtT5iMPowsfN6n4L4dqL2rqjV8QtWdZVNd3T2r+23NU/7sY89evR7dL8O6PS63Q6u3cvzc0Om+WtxVVGJp8z079fZ1wscLifwroeIcSniEajWaW/XTFF2dNd2c2nxV0+kPXwLgmk4Do7ml0VV2bVd2bv+pVEzEzERiMRHTpDpCWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEp3PyT9FJTufkn6AoAAOZVxmjm3OXo9VdsWrk27l+imJppqicT0zunE98Q91ep09u/TYuX7VN2v8tua4iqr6QCo59fHOG0fNxVq7edHGbsboz2jt57xH16KUcS09yqiqi5bnT1WZu87m07YiJiJ9c/ftGAewSs6rTX5rixqLVybc4riiuJ2/XHZrZ1ukvzixqrFyevSi5E9u/bxmP8AsFxLT6rT6qKp02otXopnFU264qxP2VAAAAAAAAAAAAAABO3+SPopCdv8kfRSAAAAAAAAAAAAABjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BkY2x4NseAZGNseDbHgGRjbHg2x4BmU7n5J+jeaY8J3KY2T09AVAB8txCmum/qK9BpeIaTiU3J2xZiqqzenPSqr/ZiY75xMJcQ0Oor1uvtXo1W7U3qK7VVnSxczERTjFc/lxMT3mPPq+uFtKfO6jS113fiDT06Wua9VZ3Wa+X+Gr/SinG7tndHb7vPrrN7U6WqvT6TURFXCrtuKZs1UzFe6n8OMd5xP1fVBZT5vinDq4u3beitRYor4ZctzVEbaMxVTiJntHTd+7z3KbWp4rTRTwq9pqauHXqKqKYoprrj8MYpxOOmekz5fV10U3KKqK6YqpqjE0zGYmPDzaPhui0NVVWk01u1VVGJmmOsx4+hZTl/D8XqdVeibNU2abVFNN+7peRczGfwTH+7HmI9XeBFAAAAAAAAAAAAAATt/kj6KQlbpjZHT0UimPAMjG2PBtjwDIxtjwbY8AyMbY8G2PAMjG2PBtjwDIxtjwbY8AyMbY8G2PAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASnc/JP0UlO5+SfoCgAAAAAAAAAAAAAAAAAAAAAAAJ2/yR9FITt/kj6KQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKdz8k/RSU7n5J+gKAA+Z1c3tJq9Re4nVxC3TzpqtauxdmbVujPSKqInEeJzTOXoniF61q9VY0lu3N+9rYs0VXKqppj/SiuapjPiJ6Rh6b3ArN2btE6vVU6a9XNdzTU1xsqmZzMdsxE+sRLXiHCoqs3qtNb5t27qKb8xVdm3NMxTFOaKojpOI9fdUeavi/ErXzFmuzpatRa1VmxTtmqKat8R18x3/AP8AXQ4bqtTdv6vS62LXO09VP4rUTFNVNUZjpMzie7xcN4JVTTer1m6iq5qaL9NMXZuTE0RGN1Ux1zMdXWtaW3a1eo1NM1TXf27omekbYxGAcq9xfW006jW0WrE6HT35s1UzM8yqIq21VRPbpOenrhW7xa9Rw7VaiLdvdZ1kWKY64mnmU05+uJUucE09y/XXN7URZuXIu16eK45dVeYnM9M94zjOGl/gNi9du1fNaqi1dvU3qrNNcbN8TE57Z9O2cHQOEXtdd1/EqdVetV2rV/ZRFNMxNP4aZ89uv/brPLY0NFjXajVW7t3/AO4xNduZjZuiIjdHTOcRHq9SKAAAAAAAAAAAAAAnb/JH0UhO3+SPopAAAAAAAAAAAAAAAAAAAAAAAAAAAJW7k13Kv+MNflv8/wBm9qKIzsnPlQE7tvmY64x7Fq3y89c59lAEPlv8/wBm923zMdcY9lAE7Vvl565z7NPlv8/2XATu2+ZjrjHsWrfLz1zn2UAQ+W/z/ZS7b5mOuMezcBO1a5eeuc+zT5f/AD/ZcBO5b3xEZxj2LVrl565z7KAIfL/5/s3uW98RGcY9lAE7Vrl565z7NPl/8/2XATuW98RGcY9i1a5eeuc+ygCHy/8An+ze5b3xEZxj2UATtWuXnrnPs0+X/wA/2XATuW98RGcY9i1a5eeuc+ygCHy/+f7N7lvfERnGPZQBO1a5eeuc+zSdPmZnf+y4Cdy3vpiM4x7Fq1y5md2c+ygCE6fMzO/9m9y3vpiM4x7KAJ2rXLmZ3Zz7NJ0+Zmd/7LgJ3Le+mIzjHsWrXLmZ3Zz7KAITp8zM7/2b3Le+mIzjHsoAnatcuZndnPs0nT5mZ3/suAnct76YjOMexatcuZndnPsoAhOnzMzv/Zvct76YjOMeygCdq1y5md2c+zSdPmZnf+y4Cdy3vpiM4x7Fq1y5md2c+ygCE6fMzO/v7N67e+iKc4x7KAJ2rXLmZ3Zz7NJ0+Zmd/f2XATrt76IpzjHsWrXLmZ3Zz7KAITp8zM7+/s3rt76IpzjHsoAnatcuZndnPs0nT5mZ39/ZcBOu3voinOMexatcuZndnPsoAhOnzMzv7+zeu3voinOMeygCdq1y5md2c+zSdPmZnf39lwE67e+iKc4x7Fq1y5md2c+ygCE6fMzO/v7KV299EU5xj2bgJ27XLqzuz0x2a1afdVM7u857LAJ1291umjOMeuC3a5dWd2emOygCNWn3VTO7vOezau3ut00Zxj1woAnbtcurO7PTHZrVp91Uzu7znssAnXb3W6aM4x64Ldrl1Z3Z6Y7KAI1afdVM7u857Nq7e63TRnGPXCgCdu1y6s7s9MdmtWn3VTO7vOeywCddvdbpozjHrgt2uXVndnpjsoAjVp91Uzu7zns2rt7rdNGcY9cKAJ27XLqzuz0x2a1WN1Uzu7+ywCdVvdbijPb1wxbs7Ks7s/ZUBGqxuqmd3f2bVW91uKM9vXCgCVuzsqzuz9mKrG6qZ3d/ZYBOq3utxRnt64Yt2dlWd2fsqAjVY3VTO7v7Nqre63FGe3rhQBK3Z2VZ3Z+zFVjdVM7u/ssAnVb3W4oz29cMW7OyrO7P2VARqsbqpnd39m1VvdbijPb1woAlbs7Ks7s/Ziqxuqmd3f2WAaVW82ooz29cNbdnZVu3Z+yoCNdjdVNW7GfZtNvNqKM9vXCgCVuzsq3bs/ZiuxuqmrdjPssAnNvNqKM9vXDFuzsq3bs/ZUBGuxuqmrdjPs2m3m1FGe3rhQBK3Z2Vbt2fsxXY3VTVuxn2WATm3m1FGe3rhi3Z2Vbt2fsqAjXY3VTVuxn2bTbzaijPb1woAlRZ2Vbt2fslesbt1W7v7PU1qjoDYR310RjEVR6dcNZ1Ff8Aaj9X8A9A8/zNf9qP1fwfM1/2o/V/APQPP8zX/aj9X8HzNf8Aaj9X8A9A8/zNf9qP1fwfM1/2o/V/APQPP8zX/aj9X8HzNf8Aaj9X8A9A8/zNf9qP1fwfM1/2o/V/APQPP8zX/aj9X8HzNf8Aaj9X8A9A8/zNf9qP1fwfM1/2o/V/APQPP8zX/aj9X8HzNf8Aaj9X8A9A8/zNf9qP1fwfM1/2o/V/APQPP8zX/aj9X8HzNf8Aaj9X8A9A88aiv+1H6v4YuX5xETTiJ8TkFbf5I+ikNaY6NgAAAAAAAAAAAAAAAAAAAAAAAAAAR09NVO7dGM4WSsXKq9270VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYlkBOYazQrgwCOw2K4MAlsNiuDAJbDYrgwCWw2K4MAlsNiuDAJbDYrgwCWw2K4MAlsNiuDAJbDYrgwCWw2K4MAnFDW5amvGJiML4Q1EzG3EzHcF4ZAAAAAAAAAAAAAAAAAAAAAAAAAAAGlqmiM7Jz56t0dPTVTu3RMdlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE7tdNGN1OcqJ3rc3MYmIwCgAAAAAAAAAAAAAAAAAAAAAAAAAAAJWblVe7djoqnapopzsnPnqoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhqZmNuJmO66d2umjG6nOQUAAAAAAAAAAAAAAAAAAAAAAAAAAABHT01U7t0THZZKzcqr3bsdFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE71ubmMTEYUQ1MzG3EzHcFwAAAAAAAAAAAAAAAAAAAAAAAAAAATtU0U52Tnz1UR09NVO7dEx2WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATu100Y3U5yonetzcxiYjAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAlZuVV7t2OiqdqminOyc+eqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACGpmY24mY7rtLtdNGN0Zz7A3AAAAAAAAAAAAAAAAAAAAAAAAAAABHT01U7t0THZZKzcqr3bsdFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE71ubmMTHTyojqKpp24mY79gWAAAAAAAAAAAAAAAAAAAAAAAAAAABO1TRTnZOfPVRHT01U7t0THZYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABO7VRTjfTnPboonetzcxiY6eQUAAAAAAAAAAAAAAAAAAAAAAAAAAABKzcqr3bsdFU7VNFOdk589VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEdRVNO3EzHfssndqopxvpznt0BQAAAAAAAAAAAAAAAAAAAAAAAAAAAEdPTVTu3RMdlkrNyqvdux0VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATvW5uYxMdPKiOoqmnbiZjv2BYAAAAAAAAAAAAAAAAAAAAAAAAAAAE7VNFOdk589VEdPTVTu3RMdlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE7tVFON9Oc9uiid63NzGJjp5BQAAAAAAAAAAAAAAAAAAAAAAAAAAAErNyqvdux0VaWqaKc7Jz56twAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEdRVNO3EzHfssndqopxvpznt0BQAAAAAAAAAAAAAAAAAAAAAAAAAAAEdPTNO7MTHbusnZuTczmI6eFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE71ubmMTHTyojqKpp24mY79gWAAAAAAAAAAAAAAAAAAAAAAAAAAABO1TRTnZVnPfqojp6Zp3ZiY7d1gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE7tVFON9Oc9uiid63NzGJjp5BQAAAAAAAAAAAAAAAAAAAAAAAAAAAE7NybmcxHTwonapopzsqznv1UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR1FU07cTMd+yyd2qinG+nOe3QFAAAAAAAAAAAAAAAAAAAAAAAAAAAAR09M07sxMdu6ydm5NzOYjp4UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATvW5uYxMdPKiOoqmnbiZjv2BYAAAAAAAAAAAAAAAAAAAAAAAAAAAE7VNFOdlWc9+qiOnpmndmJjt3WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaXaqKcb4z46N0r1uqvbtx0BUAAAAAAAAAAAAAAAAAAAAAAAAAAAE7NybmcxHTwonapopzsqznv1UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR1FVVO3bMx3WTu1UU43xnx0BQAAAAAAAAAAAAAAAAAAAAAAAAAAAEdPTNO7MTHbusnZuTczmI6eFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEr1uqvbtx0VR1FVVO3bMx3BYAAAAAAAAAAAAAAAAAAAAAAAAAAAE7VNFOdlWc9+qiOnpmndmJjt3WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATu1UU43xnx0USvW6q9u3HQFQAAAAAAAAAAAAAAAAAAAAAAAAAAATs3JuZzEdPCidqminOyrOe/VQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHUVVU7dszHdZO7VRTjfGfHQFAAAAAAAAAAAAAAAAAAAAAAAAAAAAR09M07sxMdu6ydm5NzOYiMKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJXrdVe3bjoqjqKqqdu2ZjuCwAAAAAAAAAAAAAAAAAAAAAAAAAAAJ2qKaM7as5UQoprt3cRH4Z9W1d/ZXNO3OPcFRPmf6PMx9ssUX99cU7cZ9wVEq7+yuaduce7PM/wBHmY+2QUEqL++uKduM+5Xf2VzTtzj3BUT5n+jzMfbLFF/fXFO3GfcFRKu/srmnbnHuzzP9HmY+2QUEqL++uKduM+5cvbK5p25+4KicXM2t+PtlrRf3VxTtxn3BYSuXtlc07c/dmLmbW/H2yCgjRf3VxTtxn3ZuXtlc07c/cFROLmbW/H2y1ov7q4p24z7gsJXL2yuadufuzFzNrfj7ZBQRov7q4p24z7s3L2yuadufuConFzNrfj7Za0X91cU7cZ9wWErl7ZXNO3P3Zi5m1vx9sgoI0X91cU7cZ92bl7ZXNO3P3BUaRcza34+2WlF/dVFO3GfcFhK5e2VbdufuzFzNqa8dvTIKCNF/dVFO3Gfdm5e2VbdufuConFzNqa8dvTLWi/uqinbjPuCwlcvbKtu3P3Zi5m1NeO3pkFBGi/uqinbjPuzcvbKtu3P3BUTi5m1NeO3plrRf3VRTtxn3BYSuXtlW3bn7sxczamvHb0yCgjRf3VRTtxn3ZuXtlW3bn7gqJxczamvHb0y1ov7qop24z7gsJXL2yrG3P3Zpubrc147emQUEab+6qI29/dm5e2VY25+4KidNzdbmvHb0y1pv7qojb39wWErl7ZVjbn7s03N1ua8dvTIKCNN/dVEbe/uzcvbKsbc/cFROm5utzXjt6Za0391URt7+4LCVy9sqxtz92abm63NeO3pkFBGm/uqiNvf3ZuXtlWNufuConTc3W5rx29Mtab+6qI29/cFhK5e2VY25+7am5utzXjt6ZBuI06jdVEbe847trl3l1Y256Z7goJ0XN1uqvGMemWtOo3VRG3vOO4LCdy7y6sbc9M9yi5ut1V4xj0yCgjTqN1URt7zju2uXeXVjbnpnuCgnRc3W6q8Yx6Za06jdVEbe847gsJ3LvLqxtz0z3KLm63VXjGPTIKCNOo3VRG3vOO7a5d5dWNueme4KCdFzdbqrxjHplrTqN1URt7zjuCwncu8urG3PTPcoubrdVeMY9MgoI06jdVEbe847trt3lzEbc59wUE6Lm+iasYx7tI1GZiNnf3BcTu3eXMRtzn3KLm+iasYx7goIRqMzEbO/u3u3eXMRtzn3BQToub6JqxjHu0jUZmI2d/cFxO7d5cxG3Ofcoub6JqxjHuCghGozMRs7+7e7d5cxG3OfcFBOi5vomrGMe7SNRmYjZ39wXE7t3lzEbc59yi5vomrGMe4KCEajMxGzv7t7t3lzEbc59wUE6Lm+iasYx7tI1GZiNnf3BcTu3eXMRtzn3LdzfTM4xj3BQQjUZmI2fu3u3eXMRtzn3BQTt3N9MzjGPdpGozMRs/cFxO7d5cxG3Ofct3N9MzjGPcFBCNRmYjZ+7e7d5cxG3OfcFBO3c30zOMY92kajMxGz9wXE7t3lzEbc59y3c30zOMY9wUEI1GZiNn7t7t3lzEbc59wUE7dzfTM4xj3aRqMzEbP3BcTu3eXMRtzn3Zt3N8TOMY9wbiHzH+H7t7t3l46Zz7goJ27m+JnGMe7T5j/D9wXE7t3l46Zz7lu5viZxjHuCgh8x/h+7e7d5eOmc+4KCdu5viZxjHu0+Y/w/cFxO7d5eOmc+5bub4mcYx7goIfMf4fu3u3eXjpnPuCgnbub4mcYx7tPmP8P3BcTu3eXjpnPuW7m+JnGMe4KJ3aqKcb4z46NPmP8AD921y3NddM5/DHcFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q==" />),
            category: 'common',
            attributes: {
  "contentgVU": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentkVK": {
    "type": "string",
    "default": "Team"
  },
  "contentdyv": {
    "type": "string",
    "default": "Projects"
  },
  "contentoaW": {
    "type": "string",
    "default": "Calendar"
  },
  "contentarF": {
    "type": "string",
    "default": "Reports"
  },
  "contentGdB": {
    "type": "string",
    "default": "View notifications"
  },
  "contentVim": {
    "type": "string",
    "default": "Open user menu"
  },
  "contentYZo": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentvny": {
    "type": "string",
    "default": "Settings"
  },
  "contentScU": {
    "type": "string",
    "default": "Sign out"
  },
  "contentywm": {
    "type": "string",
    "default": "Open main menu"
  },
  "contentnyq": {
    "type": "string",
    "default": "Dashboard"
  },
  "contentspM": {
    "type": "string",
    "default": "Team"
  },
  "contentxNO": {
    "type": "string",
    "default": "Projects"
  },
  "contentYeU": {
    "type": "string",
    "default": "Calendar"
  },
  "contentdPr": {
    "type": "string",
    "default": "Reports"
  },
  "contentGRH": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentQbW": {
    "type": "string",
    "default": "tom@example.com"
  },
  "contentcBk": {
    "type": "string",
    "default": "View notifications"
  },
  "contentCoq": {
    "type": "string",
    "default": "Your Profile"
  },
  "contentQZR": {
    "type": "string",
    "default": "Settings"
  },
  "contentazq": {
    "type": "string",
    "default": "Sign out"
  },
  "contentUFo": {
    "type": "string",
    "default": "Dashboard"
  },
  "imageurlncJ": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark-indigo-300.svg'
  },
  "imagealtHQD": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlwVW": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtUHu": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlVlO": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtFki": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgIyI": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgRvD": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgnKc": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgBTr": {
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
            value={ attributes.svgIyI }
            onChange={ ( value ) => {
              setAttributes({ svgIyI: value });
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
            value={ attributes.svgRvD }
            onChange={ ( value ) => {
              setAttributes({ svgRvD: value });
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
            value={ attributes.svgnKc }
            onChange={ ( value ) => {
              setAttributes({ svgnKc: value });
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
            value={ attributes.svgBTr }
            onChange={ ( value ) => {
              setAttributes({ svgBTr: value });
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
            <nav className="bg-indigo-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlncJ: media.url,
            imagealtHQD: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlncJ } 
            alt={ attributes.imagealtHQD } 
            onClick={ open } 
            className="h-8 w-8"
          /> 
        )} 
      />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4"> <span className="bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentgVU} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentgVU: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentkVK} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentkVK: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentdyv} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentdyv: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentoaW} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentoaW: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"><RichText tagName="span" value={attributes.contentarF} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentarF: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <button type="button" className="p-1 bg-indigo-600 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentGdB} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentGdB: newtext });
      }}
    /></span>

                                    
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIyI }}
        >
      </svg>
      
                                </button>
                                <div className="ml-3 relative">
                                    <div>
                                        <button type="button" className="max-w-xs bg-indigo-600 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span className="sr-only"><RichText tagName="span" value={attributes.contentVim} default="Open user menu" onChange={ (newtext) =>  {
        setAttributes({ contentVim: newtext });
      }}
    /></span>

                                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlwVW: media.url,
            imagealtUHu: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlwVW } 
            alt={ attributes.imagealtUHu } 
            onClick={ open } 
            className="h-8 w-8 rounded-full"
          /> 
        )} 
      />
                                        </button>
                                    </div>
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText tagName="span" value={attributes.contentYZo} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentYZo: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText tagName="span" value={attributes.contentvny} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentvny: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText tagName="span" value={attributes.contentScU} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentScU: newtext });
      }}
    /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button type="button" className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span className="sr-only"><RichText tagName="span" value={attributes.contentywm} default="Open main menu" onChange={ (newtext) =>  {
        setAttributes({ contentywm: newtext });
      }}
    /></span>

                                
      <svg
         className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRvD }}
        >
      </svg>
      
                                
      <svg
         className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnKc }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"> <span className="bg-indigo-700 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page"><RichText tagName="span" value={attributes.contentnyq} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentnyq: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentspM} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentspM: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentxNO} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentxNO: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentYeU} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentYeU: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"><RichText tagName="span" value={attributes.contentdPr} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentdPr: newtext });
      }}
    /></span>

                    </div>
                    <div className="pt-4 pb-3 border-t border-indigo-700">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlVlO: media.url,
            imagealtFki: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlVlO } 
            alt={ attributes.imagealtFki } 
            onClick={ open } 
            className="h-10 w-10 rounded-full"
          /> 
        )} 
      />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-white">
                                    <RichText tagName="span" value={attributes.contentGRH} default="Tom Cook" onChange={ (newtext) => { setAttributes({ contentGRH: newtext }); }} /></div>
                                <div className="text-sm font-medium text-indigo-300">
                                    <RichText tagName="span" value={attributes.contentQbW} default="tom@example.com" onChange={ (newtext) => { setAttributes({ contentQbW: newtext }); }} /></div>
                            </div>
                            <button type="button" className="ml-auto bg-indigo-600 flex-shrink-0 p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentcBk} default="View notifications" onChange={ (newtext) =>  {
        setAttributes({ contentcBk: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBTr }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div className="mt-3 px-2 space-y-1"> <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText tagName="span" value={attributes.contentCoq} default="Your Profile" onChange={ (newtext) =>  {
        setAttributes({ contentCoq: newtext });
      }}
    /></span>
 <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText tagName="span" value={attributes.contentQZR} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentQZR: newtext });
      }}
    /></span>
 <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText tagName="span" value={attributes.contentazq} default="Sign out" onChange={ (newtext) =>  {
        setAttributes({ contentazq: newtext });
      }}
    /></span>

                        </div>
                    </div>
                </div>
            </nav>
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                     <h1 className="text-lg leading-6 font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentUFo} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentUFo: newtext });
      }}
    /></h1>

                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-4 sm:px-0">
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
            <nav class="bg-indigo-600">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                
      <img
            src={ attributes.imageurlncJ } 
            alt={ attributes.imagealtHQD } 
            class="h-8 w-8"
          />
                            </div>
                            <div class="hidden md:block">
                                <div class="ml-10 flex items-baseline space-x-4"> <span class="bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page"><RichText.Content value={attributes.contentgVU} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentkVK} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentdyv} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentoaW} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"><RichText.Content value={attributes.contentarF} /></span>

                                </div>
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-4 flex items-center md:ml-6">
                                <button type="button" class="p-1 bg-indigo-600 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentGdB} /></span>

                                    
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIyI }}
        >
      </svg>
      
                                </button>
                                <div class="ml-3 relative">
                                    <div>
                                        <button type="button" class="max-w-xs bg-indigo-600 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only"><RichText.Content value={attributes.contentVim} /></span>

                                            
      <img
            src={ attributes.imageurlwVW } 
            alt={ attributes.imagealtUHu } 
            class="h-8 w-8 rounded-full"
          />
                                        </button>
                                    </div>
                                    <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><RichText.Content value={attributes.contentYZo} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><RichText.Content value={attributes.contentvny} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><RichText.Content value={attributes.contentScU} /></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="-mr-2 flex md:hidden">
                            <button type="button" class="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only"><RichText.Content value={attributes.contentywm} /></span>

                                
      <svg
         class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRvD }}
        >
      </svg>
      
                                
      <svg
         class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnKc }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <div class="md:hidden" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3"> <span class="bg-indigo-700 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page"><RichText.Content value={attributes.contentnyq} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentspM} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentxNO} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentYeU} /></span>
 <span class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"><RichText.Content value={attributes.contentdPr} /></span>

                    </div>
                    <div class="pt-4 pb-3 border-t border-indigo-700">
                        <div class="flex items-center px-5">
                            <div class="flex-shrink-0">
                                
      <img
            src={ attributes.imageurlVlO } 
            alt={ attributes.imagealtFki } 
            class="h-10 w-10 rounded-full"
          />
                            </div>
                            <div class="ml-3">
                                <div class="text-base font-medium text-white">
                                    <RichText.Content value={attributes.contentGRH} /></div>
                                <div class="text-sm font-medium text-indigo-300">
                                    <RichText.Content value={attributes.contentQbW} /></div>
                            </div>
                            <button type="button" class="ml-auto bg-indigo-600 flex-shrink-0 p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentcBk} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBTr }}
        >
      </svg>
      
                            </button>
                        </div>
                        <div class="mt-3 px-2 space-y-1"> <span class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText.Content value={attributes.contentCoq} /></span>
 <span class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText.Content value={attributes.contentQZR} /></span>
 <span class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"><RichText.Content value={attributes.contentazq} /></span>

                        </div>
                    </div>
                </div>
            </nav>
            <header class="bg-white shadow-sm">
                <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                     <h1 class="text-lg leading-6 font-semibold text-gray-900"><RichText.Content value={attributes.contentUFo} /></h1>

                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-4 sm:px-0">
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
        