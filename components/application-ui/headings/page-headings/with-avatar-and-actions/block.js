
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-avatar-and-actions', {
            title: 'with avatar and actions',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABABaADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAQFBgMCBwH/xABAEAABBAIAAwQHBQUGBwEAAAABAAIDBAUREiExBhNBURQWU2GRktIiMnGB0QcVI6GxM0JDcsHhNTZSYnOy8ET/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIDBAUG/8QALREBAAICAAUCBAUFAAAAAAAAAAERAgMEEhQhUjFBIiNRwQUTMnGBkbHR4fD/2gAMAwEAAhEDEQA/APpy5yzMibt3XwA6lcchehx9YzTH3NaOriqD9/xyzAdxI5zvE8grU+0NeW7DHLlme6ZkMnZhcXnUddo24t6geZKweW7dyyOkjox8TAdd5Lsk/krvtRYmuMjxrP4AkHeTOB2QzwH5n+irq/ZzB+jhr4pJpB1eXkH+WgsJzxltjXOXdCxnbTTg2zEY9/4kb3cvLktxQzEsDeK9aY8OG2s10H4+Kw2QxWNhPDDSDd/3jI7fw6KRhnzSs9D4XSOhZ9ggbJZvx/DYHwW3DOMvhly8Z+bo18+uLfS6WQq3mk1pQ4t+83oQpS+eNlsY+QWmB8TmeJbofgVt8TfZksdFaaOEvH2m+RVzwrvHo18HxOW7GefGphMREWt2iKHlcpTxFM278pjhDg3iDS7mfcFTx9u+zUjw394FpPi6F4Hx0lDSIqnNdoaOGxkWQnL5oJnhrDAA7i2Cd9da0CrOGRs0LJWb4XtDhsa5FB7REQEREBFyt2YqdSa1OSIoWGR5A3oAbKj4jK1MzS9LoPc+HiLduaW8x7igmoiICKozHabD4WQRX7YbMRvu2NLna94HT816w/aPE5pzmY+22SRo2Y3NLXAfgev5JQtUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAReXPAdwgFx8gvzjd7J/wAR+qD2i8cbvZP+I/VON3sn/Efqg9ovHG72T/iP1Tjd7J/xH6oPaLxxu9k/4j9U43eyf8R+qD2i8cbvZP8AiP1Tjd7J/wAR+qD2i8cbvZP+I/VON3sn/Efqg9ovLXBwOt7HUHwXpARU2T7TY3G2DBK6SWVv3mxNB4fcdkKF674z2Fz5G/Ut+PDbsouMZS4aZFmfXfGewufI36k9d8Z7C58jfqV6Td4lw0yLM+u+M9hc+Rv1J674z2Fz5G/UnSbvEuGmRZn13xnsLnyN+pPXfGewufI36k6Td4lw0yLM+u+M9hc+Rv1J674z2Fz5G/UnSbvEuGmRZn13xnsLnyN+pPXfGewufI36k6Td4lw0yLM+u+M9hc+Rv1J674z2Fz5G/UnSbvEuGmRZn13xnsLnyN+pPXfGewufI36k6Td4lw0yLM+u+M9hc+Rv1KZje0+NyNkV4zJFI77olAHEfIaJ5qZcNuxi5xLhVdorTp8mYgfsQjhA149T/wDe5QmQzFoLQNH8F0sSRRGWw/jO3Fx8fFQLGUv90Ja1UtjPRz1lzVFQ8/D8F2bN2WziZ5Y9e09/u53QYL8jp3bDo28/LW+SqJ8/LHbEUcIji8wdl359PgrCKSW9Kf3q5rmO+y1vQBepMbhqBbO6RgjLub3/AHWn8l5u2azm3ua9cY4xjhPaPqprd2SWwIZj3TOri46/mrbs5L6JkHvhdpzWOb9rmeo2P5KRaOJyeQdHDM15Dd/Y2CNDzXvEthmzUVWvrha08/drn/VNU/FEMtkVE5T3Tb097JYuZ8zmw1wNt+zpz/8AZd+wk85EgfvuSAxoPmN8/wCakdotursoVh9uX7DQP5lTataPF0IoIh/Zgc/M+a9HmjHXMfV5+U18S/REXOzZH9pv/Kbv/Oz/AFWWu5Tsq/sVFUZXiflBXY3iZX4XNk5bJfob+J2tf+0SrZudmHQ1K8s8nfMPBEwuOufgFSZnsp6V2GoTVKHd5KtCxz2Mi4ZJNgcQI1su8efPkfNZQkoUlvK4L9m+PcNRSSWzwtlia7+GQ5w5OB8RtXOd7TZUW8ZhsMI/TrcLJHzPAIHEPLoOhJ5Kv7RnL5vsLjxLjbpvRWQ2aM138R0xw49a6HY5+Z0uucxOVo5XE9ocbSfZdBBGyaBoPGCG6PLrzB17iEFlhb3aqln2YzOwm5XlbsW4YjwMOjrbg0Dw1o+5V+Uyfa02bc3ptDEwQ7dFBPJHxSgfjvnr8BzU/EZPtRms2JTUkxmMYw8TJowS46OtEgE89dOWgsjRxF+vJeq5HsxZv35iRHZe53A06OzvofPe0F8O2GSs9gp8lG9kN6vYbC57WAhw5c9HY6FdMfm+0sGIf2hyskDse2t/DgADXSPJAa46HLZ9/j0VLTxGTb+zzIVXY64LD7jHNiMDuNw03mBrelrzh58j+zqHFlhismqwBkgLSHt0QD5cxpJoZh2R7YX+zNzKzyV5cdPDIx0PCGuDSC0ubob5c+p8F6wfaB3Z79nbbELGvsTWnxxB3QHW+I+etfzC51bnaaPsvN2dbgLHE2J7TO5rhph2SANaJ6gaP5L9i7MZG/8As+jhbVkiuVrT5RDKwsc5pGiAD+XwVRKt5ntjgK9XKZWWtYqWHNDoQ0As2N6JAGjrfiei+g17DLFOK1HsxyxiRv4EbC+b5Wx2k7UUKmGODnquje0zTyBwaSBrfMchz34r6NQrNpUK9Rh22CJsYPmANf6LGVh837AY+v2gy+TymWjZZka5pDJPtN24k7IPlrQWlu9iqzs9VyuLnZj3QODnxxw7a8g+4jWxyKzraOc7E52zPjce+9jrB+7G0nlskA6BII2Rvpz+E2oO03abtBXt2IbOJx1cgmPjczjAO9eHET561r+dkdchns9mO09nC9nJIazaoIkmkAOyDo9QdczrWv8Abr2d7U323sji+0LWekUY3ymVgADmt1sa6dDsKBPVy/ZXtddylPGS5Cnd4nEQ7JbxHiO9A6IPu1or3gMDkcxlsrmMxVNNt2B8McTwQ4cQA3rryby96dhyqZntjnq1rK4uWtXqV3O4YC0Ev0N6BIOzrXiF1sds79nsMclVc2veistglIaHA8t7AO+v+hUPFWe0nZjH28KMFPZdI9xhnjDi0EjW+Q5jlvwUbIYOxhP2cvF1obYsXGSOZ4sGtAH39T+avZEyzme2sWEgz5mrtp8DdxBjS5wOhxuGvE8+R8eisM523mZgMZNjmRx28i0/aeRww6PCevLrvmeXI7VNPkO0drsnVwMeEme2aGPgtRgua6PkWjpoHWgeal5vsfegwGGdVrstT0Ae/gHPj4ncWh5gEkfmnZXSn2oy2KzNOrlMpj8pWtODTJVe0mIkgc+EDpvxHML8lzvam72tyOHxViLTHODDIxoELQR9retny8eq5Ua0mSytWOl2MhowtcDPLbjf9nmN8P3efx/JWPZ2hdh/aPmLU1SxHXkjkDJXRkMdt7NaPQ9CoNjj22WY+uy89slpsTRM9vRz9cyOnipCIsVEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQc4f758eIroucPR3+YrogIqm9cyH75ioUTWaHV3TF0zHO6OA1yI81wGYnJEFjhr2YrsdeQMbxteHcxrZGgR489K0L1FXV8zBZt9zFBZLON0Yn7v+GXN6jf5dSNKO3tJSdLE1sNoxzTCCKbuv4cjidcjvolC5RV4zFY1G2eGXgdY9HHIb4uLh8+m15dmq7Lra0kFpjXS9y2Z0Woy/yB6/nrSlCyRUFbLzvlhEryS6xZYIo4gTII96G9jR5fn7l+YbOy2K0U9+ORgt2DFDqMBreuhvez06+atFtAij1LsVx9hsIdqvKYnOI5FwA3r8NqQoOf8Aj/i1dD0XP/HH+VdD0QfJMmS7KWyTsmd5PzFRVJyX/E7f/mf/AOxUZfVYfphrEVtgMZBkZpXXJHx14w0FzCN8TnBrRzB968QYSzNJaa+WCBlV/dySTP4W8W9aB0sZ3YRMxM+hSsRXuXwRrGR1fhDa9eJ8zS4kku5Ej3bC4DAWA/hmtU4P4bHkyy8OuLo08uqkb9cxdlKlFcN7O2/4/fT1a4gl7p7ppOEbI2DvXQ7HxXluAuekWYppK9dtYhskssnCzZ6AHXir+fr+pSpRWzez9sSzsnlrV2QuDTLLJpjiRsAHx5c1F/d0seVGPsuZDIHhjnOPIe/asbcJ9JENFeWuzr48lZrwWq/cQNDnzSP4QzZ0A7l19yrchRmx9juZ+AktD2vYdte09CD5KYbcM+0SUiorebs9chge90tYyRsD5YBJuSNp8SNe9WzOztB1zG1O/iLpYu9le2Yl0nLemjWteR8t+Swy4nXj3uymSRXjsE+1O+SrLThgfJwQB05PeHyaSOfP8FGODssx7rk01eFjS9vBI/Ti5vItA1zPIrKN+E+5SsXpj3Rva9hLXNOwR4FeUW1F3mBYbFZiBeC15b8CpNfjkpNY7bmlujzVj2krPqWrEwYx8dpnIOOg13j+v5rPY7E5N0okhkbHAfvFxJGvcF83OUer3sN0XGVdpiEfMY19alJPC95Debmk9B5qvx2RnbA8ekQRw723vBvf5+a2dynGIBCzbnvGuJ3iTy0vmNlz6k0jYx9hx3wnoubbGOeXZzcRWGUTjHZdz5OZjXCvLXY0jmYwVN7G2gzLyXJeUQaWcZ6cXI/0WQdZlmHAGtAPUNGlrezMEclXuJ2cUPFvXTny/QqascccviaIxnfPLDXYuzDfyst0PDmsHBGN/Eq1mPeyBnXZAUPG16lZ0j4mNYXdGgKfQjdLeDwdtZzP+n/3uTiNkZbccMWrLXyYzGS4REWTWIuN2y2pTmsP6RsLteZ8AoNXKPGNnsX4+Cas4tlZGPzGgT5EILRFXMzNdwl4orEfdxGYB7OHjYPFq8x5mGcFrI543PidJE6VmhIAN8laFmiqKuTJ7l9qbhaaQne3u+XUbO9/y0u8WXrPEhlZNB3cfe6lZolnmEoWCKpgyzrOTrwRxSxMfG57hLHwk9NEe7qv23kJ2ZmCnGx7Y+HjkfwA7Gx475DzKULVFX1svXszxxtjnYJd91I9mmya8j+q6Y7JR5FhkhhnbHrYfIzQd7hz5qUJiLMxZrIWcndrtvYmsyvaMDI52OMjxoHf3x566eCm+stHvrjXRWmxUnPbPOY/4bC3w3vmT4AK0LlFSt7TU+6svmr3K768BsGKaLhe+Mf3mjfP/deW9pq8sdjuqlwTR1zYjjki4TMz/qbz6cx10VKF4ir8Jkn5TDwXn13wOkYHcL/HkDseY8lTdnM/byoqPnyeGDpgS6pGD3w5HkNvPPlvorQ1Krc/ha+ex3oVqSWOPjD9xkA7H4g+ai47tTRyMtVkUFyNlvYhlli4WPcASWg768iolztWx8lJuPhn7ue9HXFiSH+FK0u07hd5/olSNBRqso0K9OJznMrxNiaXdSGjQ38F3VRnb92pNj6+P9HElucxF07HODQGl3QEeS5QZqapdtU82II3wVvShNDvgfHvR5HmCD4bPVBeIqM9qaTIJ5Jq12EwxCYxyRac6MkDjA3zA2N+I8lIuZ6jSnmil7xxhiZI4sbxA8buFrR4lxPQKULRFnr3aLeOmkqRywWoJ4Y5YbEenND3gb1vXME6O/BSLXaWjVszRPjsuirvDJ7DItxROOuTnfmOgOlaFyio7famlVtWoHVrrxTcBYkjh4mRggHiJ305/jyK6Xe0dGpM9nd2Z2xMbJNJBHxsha4bBcfw58t8lKFwiq252tJl3Y2GCzNKwML3xx7ja1w2CXb6KRcyMVWZsPdTTSuaX8ELOIhvmfcgmIq1+arDue6jnnM0ZkYImbJAOj+am1LMVutHYgO43jY2g6oqutlJJsvJWcxgrkuZC/ntzma4h/M/Bdxk4DXbPwycLpu5HIb4uLh8+m0oTUVZPnKsLpNxWHRxv7t0rY9s4t61va7SZSvHWtTubJwVZO7foDZPLpz94ShNRQX5SFtt1dsM7+BwY+RjNtYT4Hx/kvOOyLrs9mN1aSIQvLQ5w5HpyPv5pQsEVVk7l+o2aw1tdsERaGtfsul311o8vdyK5XsvJBfdAJ60DWxtd/Gjc4knfkeQHL4q0LpF5iJdExxc1xLQS5vQ+8e5QMlYvQNmlh9Hjghj4+KUE8Z8hojX+6gsUVUb9yxNBBUjiikdXE8hlBIbvo3Q1z2vUNy7dpV5ascURfxCZ0nMRlp1yGxvZVoWaKmiytmapWETIvSLEzo2v58BDd7eB11yUzH2pppLFeyGCeu8NcWb04EbB0eiUJqIigIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIOcPR3+YroucP98f8AcV0QVGQp5E5mK/j/AEV3DXdCWzvcOrgd8gfJRxg7RayaaeKS0+9HancAWt4W8g1v4DzV+itjPxYa43MttAVa7BK58j673tMzTv7Lmfd35nahT47J0q+MpOMElOvfiLHMDjI5vHy4hrQ1vqtaiWlM2cNlBw1WyVPRGXhaa4l3GW8fEW61rfXmuT+z1+XIxTyvryCK62wJnSvLywO3w8PQaHl/JalEspRVMNZgu1JnviLYbNiVwBOyJN8OuXXnzXC5Tfj+yAqzHisxvL4e6a5+5OMvaBy37lpES1pBwtR9LFQxS/2xBfKfN7jt38yVORFBz/xx/lXQ9Fz/AP0fg1dD0QfI8l/xO3/5n/8AsVGUrKNLcrba4aImf/7FRV9Vh+mGtcVM0MfiG1akYM75TJM6WMObr+6B/VTbWbxmQjmitxWWNn7uV7og3YlA4ToE/dI0s0i1zw+Ezze5bRPztJ2ZbOIZjSdV9GljIHEW68Ofnpe63aCt392ecTxTTzcbJYmMc7gHIMPF05a5hZpFJ4bXVFr7M5qtfgtxwsmaZrLJW8QA0AwN58+u11t5rH35LkVqOy2tO+OWNzA3ja5rA07G9a5eaziJHD4RERHt/r/BbSUc7SqR2KsAtVa7pRJE6MNe/wC6AQ7i5c9b5KpyN70rLvus7xwLwW97riOgAN65eCgossNGGOU5R6ltHYzGMsWL7XstiveDHPIDeNj2nwG9EKszF6K7Zh9GY9kNeFsMfea4iG+J1y3zVeiYaccJuP8AvYto7Oax73XbkUVkXbkHcvY7h7tmwASD1PRcoM1WjzGNuOZL3dSq2F4AGyQ0jlz6c1QopHD4RFfx9i2jxXaCKtjYKk0lqEwPcQYGsdxgnejxdDtQMnk47tGCINkEjJpZHl2ufG7Y5jqfyCq0VjRhGXNHr6liIv1rS9wa0bc46A81tR9ayFGDIV+6sRteAeJu/ArMZXItoyimYn95xBuhyH5e5bFQsli6mTY0WYwXs5xvHVp/+8F8xqnCMvmRcNuWzdjhWqaljL+TlOhFGwN1481ns5Qr2Z+9aRG6UB4Pgd9fgdj8lrbPZS53rnGdssY5N4G89fhv9VW28S0RBkvf/wAPYBLdcvEdPP8AqV17I4SYiP7MOEn8RyymZrKJ9pmPt3hkYMMWytD5G/aOhw9XK4q2vRSGVms7tvLbue1Or4lmyYop5JHDTeEb0D49FY0+xc07tzPfBF/3aLvgsdHSa5mcpmf3h18XhxeGPyojD+bmf6uGMydu3bbVirNkmPQNJA15nryW+qVxWgazkXdXHzKjYrEVMTDwVmbeRp8rubnfn/op60cRnryy+XFQ5dee6cK25WIiLQyQcrSffiir8QbCZA6bmQXNHPQ/PSrMli31a1+Ss5z4Z4AHNc4ueXg8jz8NLQorYordK9JBPYuGE9zUkjjbFvbiW9Tv8Oi/a1C9YZUfZdA1leAtjDd8Ti5uvtb6cvJXiJYo/wBySvjbHLJGGij6MS0k/a2Dv8OS8xYOR8U7Jo6sJfD3YdEXOJPXZ30HLor5EspVV6mQdka9q46twwxuZqInZ3rnzHuUiek6bJCclvdejuiI3z2SFNRSxT1sddDqcVmSAwUzthZvifoaGx4cvxU3FVX0sbBWlLS+NuiW9OqlolinxuEir28hYuQVpX2LZnifwBzmt00AbI5HYPRR3dn5ZsRmaM0zGm/ZfNG9uzw74S3fTxbzWgRLGXt4PLZMW5r8lJk76L6kLIXOLduIJc4kbHQctFT5sRNLkq85kjETKMlZ2ieLidw8xy6cirlFbFbgalulhYKV3uDJAwRNdE4kOaBoE7A5qs7O4rL4uCpVsVsSYoW8Lpo3vMh68xtg/qtKiWM5TwFqDF4Kq+SAvx03eSkOOnDhcPs8v+4ddKJH2ezMdfHY7vqJo4+5HOx+3d5Ixrt6I1oHR/Pl0WuRLFRnqF63Lj7GO9GMtScyls7nNa4Fpb1APmoUnZ65kmZCbL2YRat1vRoxXaeCFm9+PMni5notIiWMziuzj45Zjfp4+NslY13Gu57nPB6kl3ID3aP4qPF2UtvwM9a5ZglvPljeJPtFhEQAY13Q60Dv3uK1yJYybezVk0rLRBj6s000D9Qve4cMbwTtx6nlyGgulzAZORuSo1pqooZKcyyPfxd7Hxa4gBrR6ctka2tQiWMacfl7F3tBVo+jR1rcgic6cOBaDE0FzdD7XIkeHML3c7IyC5NJUhpWI7EMcTvSnyAx8DeDYDfvAgdOXPxWvRLKVWLxclHKX7BMXczsgZG1m9jgaWnY8PdzK6W6tsZAXaJhLzF3TmSkga3sEEKxRQVWPxUlKes4yNe2KB0bj4lzncXL3dV3x9WeliRXBjM7Q8tOzw7JJHh7wpyJYo48C6CvVfBM424HteS+RxY4/wB4a8N7Pghxd8aga+v6M20Jw4k8ZHFvWtaV4itlMpdZOG2MbXe4tkscTYnQO4ubgfvdOHx2p13FZCRl6vXfW7i1IJOJ5cHNPLY5D3K9RLSlNbxdmbIGeL0eI8bSJ2Oc2QNHUEDk781LpVZ61224mMwTv7xpBPEDoAgjprkpyJaqi5TyU2TbYaKskMX9jHI9w4T/ANRAHM/0XS1XyLpJTXFRzZ4gx4kBBYdeYH2hz8VZoliBju8heaOtxVYo2iQg7c7XP+g+K45OnftXInR+jPrRfaEUj3Did5nQ568laolisnq3xaju1/R/SDD3UrHk8HXYIOt8io8+LvNxVejVliLdk2C9xaZNnZAIHQ7Ku0SxVSUrj69Z7W1orFWTcbWE8BbrRHTY5KRjqs0DrE9pzDPYfxODPutAGgBv3KailgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIPDo9u4muLT5hfnBJ7Z3wH6LoiDnwSe2d8B+icEntnfAfouiIOfBJ7Z3wH6JwSe2d8B+i6Ig58EntnfAfonBJ7Z3wH6LoiDnwSe2d8B+icEntnfAfouiIOfBJ7Z3wH6JwSe2d8B+i6Ig8sYGb6knqSvSIgpsn2ax2SnM8rXxyu+8+N2i78d7Cg+pGN9vb+dv0rTot+PE7cYqMpSoZj1Ixvt7fzt+lPUjG+3t/O36Vp0V6vd5FQzHqRjfb2/nb9KepGN9vb+dv0rTonV7vIqGY9SMb7e387fpT1Ixvt7fzt+ladE6vd5FQzHqRjfb2/nb9KepGN9vb+dv0rTonV7vIqGY9SMb7e387fpT1Ixvt7fzt+ladE6vd5FQzHqRjfb2/nb9KepGN9vb+dv0rTonV7vIqGY9SMb7e387fpT1Ixvt7fzt+ladE6vd5FQzHqRjfb2/nb9KmYzsxjsdYFiMSSyN+6ZXA8P4AAK7RTLid2UVOUlQ//Z" />),
            category: 'common',
            attributes: {
  "contentcQe": {
    "type": "string",
    "default": "Ricardo Cooper"
  },
  "contentKHT": {
    "type": "string",
    "default": "Applied for "
  },
  "contentUbM": {
    "type": "string",
    "default": "Front End Developer"
  },
  "contentTOX": {
    "type": "string",
    "default": " on "
  },
  "contentDBk": {
    "type": "string",
    "default": "August 25, 2020"
  },
  "contentZTS": {
    "type": "string",
    "default": "Disqualify"
  },
  "contentTgy": {
    "type": "string",
    "default": "Advance to offer"
  },
  "imageurlBiG": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1463453091185-61582044d556.jpeg'
  },
  "imagealtSEq": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
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
        <div className="md:flex md:items-center md:justify-between md:space-x-5">
            <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                    <div className="relative">
                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlBiG: media.url,
            imagealtSEq: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlBiG } 
            alt={ attributes.imagealtSEq } 
            onClick={ open } 
            className="h-16 w-16 rounded-full"
          /> 
        )} 
      /> <span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true"/>

                    </div>
                </div>
                <div className="pt-1.5">
                     <h1 className="text-2xl font-bold text-gray-900"><RichText tagName="span" value={attributes.contentcQe} default="Ricardo Cooper" onChange={ (newtext) =>  {
        setAttributes({ contentcQe: newtext });
      }}
    /></h1>

                    <p className="text-sm font-medium text-gray-500">
                        <RichText tagName="span" value={attributes.contentKHT} default="Applied for" onChange={ (newtext) => { setAttributes({ contentKHT: newtext }); }} /><span className="text-gray-900"><RichText tagName="span" value={attributes.contentUbM} default="Front End Developer" onChange={ (newtext) =>  {
        setAttributes({ contentUbM: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentTOX} default="on" onChange={ (newtext) =>  {
        setAttributes({ contentTOX: newtext });
      }}
    /><time datetime="2020-08-25"><RichText tagName="span" value={attributes.contentDBk} default="August 25, 2020" onChange={ (newtext) =>  {
        setAttributes({ contentDBk: newtext });
      }}
    /></time></p>
    </div>
  </div>
  <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
    <button type="button" className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"><RichText tagName="span" value={attributes.contentZTS} default="Disqualify" onChange={ (newtext) =>  {
        setAttributes({ contentZTS: newtext });
      }}
    /></button>
    <button type="button" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"><RichText tagName="span" value={attributes.contentTgy} default="Advance to offer" onChange={ (newtext) =>  {
        setAttributes({ contentTgy: newtext });
      }}
    /></button>
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
        <div class="md:flex md:items-center md:justify-between md:space-x-5">
            <div class="flex items-start space-x-5">
                <div class="flex-shrink-0">
                    <div class="relative">
                        
      <img
            src={ attributes.imageurlBiG } 
            alt={ attributes.imagealtSEq } 
            class="h-16 w-16 rounded-full"
          /> <span class="absolute inset-0 shadow-inner rounded-full" aria-hidden="true"/>

                    </div>
                </div>
                <div class="pt-1.5">
                     <h1 class="text-2xl font-bold text-gray-900"><RichText.Content value={attributes.contentcQe} /></h1>

                    <p class="text-sm font-medium text-gray-500">
                        <RichText.Content value={attributes.contentKHT} /><span class="text-gray-900"><RichText.Content value={attributes.contentUbM} /></span><RichText.Content value={attributes.contentTOX} /><time datetime="2020-08-25"><RichText.Content value={attributes.contentDBk} /></time></p>
    </div>
  </div>
  <div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
    <button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"><RichText.Content value={attributes.contentZTS} /></button>
    <button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"><RichText.Content value={attributes.contentTgy} /></button>
  </div>
</div>
</div></div>
            );
            },
        });
        