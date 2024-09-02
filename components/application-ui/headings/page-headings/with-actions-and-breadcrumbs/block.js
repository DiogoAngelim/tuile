
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-actions-and-breadcrumbs', {
            title: 'with actions and breadcrumbs',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABCBaADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAUGAwQHAgH/xABJEAACAgIBAwEDBwcLAQUJAAAAAQIDBBEFBhIhMRNBUQcUIjJhcYEVFnKRkqGxIzM2QlJTZaOy0eLBFyQ1VfA3Q1RiY3N0gtL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQMGAgT/xAAoEQEBAQAAAwcEAwEAAAAAAAAAEQECAwQUITFBUqHRM1FxsTJh8OH/2gAMAwEAAhEDEQA/AOj5WVXiulWKT9taqo9q9G9+v2eD2sih3uhXVu1esFNd36iJyb7s7MxMf5nfXOjK9pOUo/Q7Yp+VL372adGNao42N8ytWZXl+0syPZ6i49zbl3e/a8aLETWLyWPkNw74V2KyUFCU13S09bSM7yaFeqHfWrX6Vua7v1FZeNOVGTjx4+5ZduW513urwl3/AFu73LSf6/tNm6myHLydGNbNzyIylG3H3H3fTjYvTXwEFiABFfJPti5ab0t6S22eKL68ipWVS3F/ufwZ7k+2Lem9Lel6mng0WK23Ktj7OV3/ALpe5fF/aBugADWzs2GFGpyqtsds1XGNaTbbTfva+AqzISr77654q7u1e3cY78b8abNLqCuVlWI4wvlGGQpT9gm5paflaNa2iOTRiVwpzbIRzYymsqMm9dr+P9X9xUTSyceVDvjfU6l6zU12/rMV2dTHHlbROq/t7dqNsV6vS8t6IXKxJ1zyFHH/AO7xza7FTpRVq7fKjvw/Pu+wwSrld+WVj4c6nKWO1SoruX0tvwvT4iCyvLxlYq3kVKxvt7e9b38NfE9SyKI3KmV1atl6Qcl3P8Cv5eBKeFy1ixZSyJZG6pKt9zS7dOPv+PoYcrByJZmXCyOQ523qdc68dS2vGvpv6uvvEFmlkURuVMrq1bL0g5Luf4GO7NoqjYo21SthGT9n7SKbaW2vPoV3KwciWZlwsjkOdt6nXOvHUtrxr6b+rr7ze+ZN4/NWPGbusdirk4fSkuzxr8W/QQSizcZQi7b6q5SUW4ysjtb9F6mSzIoplGNt1cHP6qlJLu+4goYHtfnjvxXJ/Mq41uUP63a9pfbvRiVUqpKWVhPKdmDXFJ9u6ml5Uk/qrfvEFkhOFkFOucZwl5UovaZ6I/gfHCYm/wC7RIEUMFeVVPJnj+Y2Q86ktdy+KM5HX025nIQ+g6q8d79pr6U38F9gEiAAPNtiqpnbJNqEXJ6+w0Mfl6rp0Rlj5FMchfyU7Irtl437m/cbeZFywr4xTbdckkvf4K7g0Wq3jXRj5yvqcVa8iL9nCOtS13ej+Gi4ixxycedzpjfVK2PrBTTkvwEciiVzpjfW7V6wU13L8CtY9WVPkcSyWLOqUb5OyMMbtjDe/Pf6y3+r9xtcXTGr5tj3cba8uqyTne46Sfn6Xf8A1t/AQS2Fn05eLRdtVu/fZCUlt6+HxPOXyEcbJrx1j33WWRckqkn4X3tEN0/jZWHbRLLosmrqnGEnB7o039Fr3J+uza5mtvlcayVeY6o1TTliqW09rXlCd4k1m0qqM8hrGck32XSjFpJ636/+tnueTRXUrbL64Vy9Jymkn+JEwxoZGfgSlRfZTCqzzkwbae19bf462alONPHjgzyMK23HpldH2arcnDcvovt960IJ3CzIZkbpQi0qrZVb3veveakecodXtpY2VDH7nF3OCcVp686bfr9h86eqlViZCljzoUsmcoVzjpqL1oj6LMj8iT42GBlO+z2kNzrcYRUpPy5P7GILBZk49Tgrb6oOf1VKaXd93xPTupSsbthqv6/0l9H3+fgVrPwLq8q6Nkb7K548K65V46t9Fprb+q9+TNlYOSrqseuuyVWbVXDInrzFw1ttrwtx8CCd+c46sjW76vaTW4x71uS+xGOnNrteT3arjj2dkpSaS9E9/vK9lYN7y8uuccjutvU65VY6l9HxrU39XXp6mxk417+czeNZZVHkI2zrUfNkFFei9/n+AgnVlY8qlbG+p1yelNTWm/hs+15FFtbsqurnCPrKMk0vxKxmVN1ZN0cSyGNdlU+zplDtc9eJfR92z3lYt2VXn2YOJbj1ThWux19rsalttR+79YhVjjlY06nbHIqlWnpzU00n956qtruh302QsjvXdF7RWZ4dluFnOurJkrfZRcZYyq7tTW9RXnwvfos9dddMFCqEYQXpGK0kNV6ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGO+inJqdV9cbIP1jJbPONi4+JW68aqNcW9tRXqzMAAAAAAAa2Vx+HmTjPJx67JRWk5Lzr4GyAPkYxhFRhFRjFaSS0kj6AAAAAAAAAAAAAAAAAAAAAAAAAB4tpruUVbBSUZKS37mvRnsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Saim36I891j8qEdfbLT/AIAeweN2/wBiH7b/ANhu3+xD9t/7AeweN2/2Iftv/Ybt/sQ/bf8AsB7B43b/AGIftv8A2PjlZFblWtf/ACy2/wCAGQBNNJp7TMOZlU4WLZk5Eu2qtbbLmbuzBmBT59dwU37PjpSj7nK7T/Vpnn8+/wDDP8//AIn1dh5/p98S4uQKb+ff+Gf5/wDxH59/4Z/n/wDEdh6j0++fJcXIFN/Pv/DP8/8A4j8+/wDDP8//AIjsPUen3z5Li5Apv59/4Z/n/wDEfn3/AIZ/n/8AEdh6j0++fJcXIFN/Pv8Awz/P/wCJu8V1hjZ2XHHyMd4zm9Ql39yb9yfhaJxdFz+HLvD+i40ud6/o4bmbOOfH2XOlpTmrFH1Sfha8+v2GHH+U3irLVG/EyqYt670oyS+1+d/qK1z+ZTx/yoWZmSpOmm+uU1FbeuyPuMnWnUXE9Q042LxmK1erU3fbGNfjTXbvfp5T86XgwhXVqLqsmiu+icbKrIqUJR9Gn6M9lY9pm9NdD40MWiWfmV1xhCNUXOO35348uK/2Ktk5/X2Nxb5nIvdVEfMq5VwUorevMO30/eeYV1AFRwetI2dF283k0R9vTP2Lri9KdnjWvgvKf6yuYfKdd8viW8rg2pY9beoRhBJ69VFNbehCuj8pnQ43jMjOshKcaIObjH1ejR6Z6gp6iwrcmiiymNdns2ptNt6T933lXxep7Ooeh+ZhlwjHKxqH3yj4U096evc/D2RHSvUlPT3SGZNds8u3Jaoqfx7I/Sf2IsK6uR/PctXwnE28hdVK2FTinGL03tpf9SG6Jl1BmYn5Q5zNlKq2P8jQ6oR2v7T0k/uR7+UX+hmZ+lX/AK4kneIj/tQwP/Lcn9qJO9L9VY/Uk8mNGNbT83UW+9p73v4fcUvpHqfgeJ4VYvJYs7L/AGkpdypjLw/Ty2WzG6g4/P6d5fN4KqWPZi0Tl3OqMX3KDaevO/T3l3BaAcs4TqHrPnKL8fjrI22walO+UK49i14ivGvPn7fBJdEdU8rk87Zw3Mz9rPUlGUopShOPrF69fRkhXQSu9T9W43TmRRTfi23O6DknBpa09e8qnKdU9Q8v1LZxnTsnXCqcoRUYx3Lt9ZSk/ReP/TK91fl8zdmUYvP0xhl40Gu9a/lIt7T8ePj6FzhK7cntJ/Ep3L/KBh8VymRgWYN9k6JdrlGS0/Gy4R+qvuOVyhCz5XXCyEZxeR5jJbT+gTMNT+L8pnEW2qGRjZVEX/X0pJffp7/cXLHyKcrHhkY1sbarF3RnF7TRWusum+Ny+By8ivEqqyceuVsLKoKLfat6evVaIH5OOZWH09y3zqUnRg6uS9+pJ7S/GP62Wd3cOjg5lg8t1p1PLIy+KurxseqWlBKKW/XtTabb1r7Dd4XqrluV4vkuNsk6eaxapWV2KEfp9rW4uLWu73env+wkK6ACm/J71Hl8xh5seUyFbdjyU+9xjH6DX2JejT/WRvTHVPKcjyvJZubly/JWHVO51quHhbfbHet+m/f7hCuiA5lhcx1l1TfkX8RbXi41T0o/RST9y2023r8PuJronqnM5HMv4fmY6zqO7U9KPd2vUotLxtP4f9PKFSHTXV2N1FmXY1GLbS6od7c2nvzr3FjOVfJfbDH5TkrrZdtdeK5yfwSkmzNV1F1X1TyV8OBaxsepb7dRWl7u6T35fwRdwrp4KB0n1Zyj518F1Ck73JwjY4qMozXnT14afuf3euyOzereo6ersvj8Kz5xFXzppx3XHW/KXnW/Hr6+7ySFdQByvK6i6w6b5On8tT9rXZ9L2clBxmvfpxXhosPWfV9vGU4mNxCUsrMrVsZuPd2Qfppe9v8A6CFXMHMszk+tum40Z/KXQvxrJJTrai0n69raXh+vleCU6w6oy6enuM5Phch0LLk29wjJ616PafoxCryCi9K5nVvK8jhchmtx4pwakvoR79Qa7tevmWn/AA8F6G5FAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABju+ov0o/xRkMd31V+lH+KMgAHyT1FtfArHTnJ25yxJZHLZVl1ibnS8RRg/D8d6h/1LBaAVjJ53LyY4FuNi2U4mRm11wv70/aR7tPcfVJ+R+V86v5rHEpd6uzbape2tW3py+inrwvH7tCJVnABFY6P5pEN1n/R279KH+pEzR/NIhus/6O3fpQ/1I26f63D+cTfBzcAy4sI2ZdMJrcZTimvs2dNuzKzYgW3P4jDjHk4/kyeJVjVuVOS7JanJa1HUvD39hFXcG6uR5DE+c7+Z47u7uz6+lF61vx9b9xhwdTwcX9f7Pt+ViHBaOT4LEuzJV4eVXVk+wjZDFVb+lqPn6Xpt6b0eb8ClYfdVTQtcVXdJyg23Jye2vK0/t8kzquDczc8yKyCdz+Bhx0Yu3L7rVKCdbplGMt632z9JaM/OcLixu5C7CyYd2M4ynjRraUIvXo/eXOo5e7k8/wDnyRWz6m09p6aPgPoRs85bi0/KlO3P7Pm0b63Z3x7o67I+qN/rfkelMrh3Xxkcaec5x7J0U9vat+dvS8a34Lln9JcDyWbZmZuB7S+3TnP20470teilr0Rjo6L6bx599fF1t/8A1Jzmv1SbRylxpFIfK8vxfybYfsbLafb5Mq4Wp6lGvTaSfu296a9yIzNx+Jl02s6/nsjL5O1JrH7t9st+VLe34W/J2HMwcTOw5YmXj1248kk65Lx49NfAiKOi+naIWxhxsWrY9snKybaX2Nva/AUjn+DiW5XyW5sqYuXsOR9rJL+yoRT/AFb3+BPdG9W8RxvScMbMv9nfi9/8n2vdm5OS1r79Fz4viOP4jEni8fjqqic3OUHKUttpJ/Wb9yRF29D9N25Dulx0U29uMLJRj+pPS/AXCIZdR29R9H85dLj1i1U0uKkrO7vbT2vRenj9ZQcXgcrL6eyeYoanXjWqFlaX0ktbcvuW1+/4HbfyXgfkuXGLGhHDlBwdUNxWn6+nk8cZwvHcTi2YuBjKqm2TlODlKak2tf1m/chYRGdF9Qx57iE7GlmY+oXRXv8AhJfY/wCOzH8ov9DMz9Kv/XE3+M6Z4bict5XHYjoucXFtWzaafu03o3uR4/F5TCnh51XtaJ6codzjvT2vKafqieY5t0fyXSWLwaq5yvEll+0k27cR2Pt93ntZZZch09mdMc5Dp5URUMOx2qrHdXrCWt7it+jNr8xOmP8Ayz/Pt/8A6NzB6Z4bj8fKow8P2dWXD2d8fazffHTWvL8er9C7uCr/ACS/+H8j/wDdh/BkZw//ALXrv/yL/wDTI6FxPC8dwtdlfGY/sI2tSmu+UttfpNmOnp3iaOXly1WJ25spSk7faTfmS0/G9e9+4UjmvTPIY/TXW2YuTcoVv2lErHFvtfcmpP36fb+8wfKBzeHzXNVT4+XtKaKlX7Tta7ntt63515/idN5bpjhuYvV+fhqdyWu+MnBtfbp+fxMNvRnTt1NVU+Nh2UpqCjZOPr67afl/axc8SJ2P1V9xyXMzMfj/AJVLcvMs9nRVkbnLtb0uzXovJ1teFog87pDgOQzLMvLwPaX2vc5e2sW39ylombDVa6s6743I4fIweJlO+zIi65TcHGMYv19dNvXg1On+n8tfJ7y9jqkrs6KnXDXmUIeV4+36X7viXDE6P6ew7VbRxdXentOyUrNfhJsnC37EcV6YwOn87FuXMcrfhXwnuKjJRjKOl8U/O9/uLL0HjcFLqG6zh3ydkqa5J2XqCrabS93nb9xZs7ozp/OyZZF/HxVknuTrnKCk/uT0SnG8Xg8TjfN+OxoUV721H1b+Lb8v8Rukcl5Ky3pTqPmsSmLVeVTOuvXhKM9NP8PQsnTnB2r5Ns/2cG8nPrnZGK9Wl9Vfjp/tFr5Xprh+ZyY5HJYautjDsUvaTj423r6LXxZJY9FWNj149EFCqqKhCK9yS0kN0jjHS+BwGbVfHmeTvwb4S3HtkoxlHX2p+d7LH0RjcDLqeUuIlyltlEJt23KHs2n4348+d+C18h0dwHI5MsnIwIq2T3KVc5Q7n9qT0SPGcVgcRjujjsWFEG9vt8uX3t+X+I3SOW9A408x87i1fzl3H2Vx+9+EbPydc5gcLbn4vKWfNnY4uMpxfrHacX8H5/idB4rp3ieGvsu43E9jZZHtk/aTltb372zByfSfB8rkPIy8GLul9acJODl9+n5Fwig4V0eoPlRjmYEZOhXKzu1r6EIpdz+G9fvNf8pU8T8puRnZKbpry7VNpbaT3Hf4b2dS4nheN4aqVfG4kKVL60ltyl97fkoOBw+Rd8pWVPM466WDbbf3Tspfs5Jxlry1oUavyi9QcfzUsLH4yz26p7pSsUWlt60lv7v4Gt1xxtuDk8NLKjY6fmNVM5L13DxJLfv00dCwejuAwMyOVj4C9rB7g5zlNRfxSbJXPwMTksaWNnY8L6n57ZL0fxXwYpHK+Q4/ovFw67o8xyOW7GtVVSg5L7Wmlr8TY6uooxuh+CrxY5EafaTnBZGu/Uty868e8umL0T05i3q6HHRlKL2lZZKaX4N6f4kly3C8dzNVdXJY/toVPugu+UdP/wDVoUjH0ytdMcXr/wCEq/0okzFjY9WJi1Y2PDsppgoQjtvUUtJbZlPKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADHd9VfpR/ijIY7vqb+Ek3+syAGtpr4kPxPFchxtVGO+TrtxaVr2fzbtbX6Xc/4EwAK/Dp2+CxaFyT+Z4mRG+qn2K2tS32uW/PvM0uCmsauFGZ7O6rLnkwsdXcl3N/Rcd+fEviTQLSAAbSW34SIMdH80iG6z/o7d+lD/AFImqf5pfrIjq+uVnTuR2Jtx7ZPXwTWzbp/rcP5xN8HNDJRZ7K+u3W+ySlr46ZjB0297NvcryV3JZlt05WRrnLujU5uSj9xI39Q0XLKt/JqjlZVHsbbVc9eiW0tfYvH2EADPeTwbmZPBasNvUdErXlV8aoZiq9lC72zfata3rXqa0ud7sd1fNvXCjib7/g993p+795Dg850/Lzy/ZU7dz9b4+eJj4c642ODale5xj2vf0U143ow3c37W/krPm+vn0VHXf9TWvs8+n2EQC5yOXnhn+7vjCgBkopsvuhTVFynN6ikvU13YjsIAOTagAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0Iy+ycLZRhOUV8E9AFwY/bW/3s/2mPbW/3s/2mAEPbW/3s/2mPbW/3s/2mAA9tb/ez/aZlx5znalOUpL4N7AAkj5OKlFxkk0/DT94AzxVy3qCqunmL66q41wUnqMVpLyRoB1PB/HGYAD2gAAAAAFu6DqrldkWSri5w12ya8r7mAfN1f0eJc8X/9k=" />),
            category: 'common',
            attributes: {
  "contentEAb": {
    "type": "string",
    "default": "\n        Back\n      "
  },
  "contentFxi": {
    "type": "string",
    "default": "Jobs"
  },
  "contentaZo": {
    "type": "string",
    "default": "Engineering"
  },
  "contentTnM": {
    "type": "string",
    "default": "Back End Developer"
  },
  "contentJlQ": {
    "type": "string",
    "default": "Back End Developer"
  },
  "contentfCg": {
    "type": "string",
    "default": "Edit"
  },
  "contentZrD": {
    "type": "string",
    "default": "Publish"
  },
  "svgfRj": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgSdW": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgqut": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgfRj }
            onChange={ ( value ) => {
              setAttributes({ svgfRj: value });
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
            value={ attributes.svgSdW }
            onChange={ ( value ) => {
              setAttributes({ svgSdW: value });
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
            value={ attributes.svgqut }
            onChange={ ( value ) => {
              setAttributes({ svgqut: value });
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
        <div>
            <div>
                <nav className="sm:hidden" aria-label="Back"> <span className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
        
        
      <svg
         className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfRj }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentEAb} default="Back" onChange={ (newtext) =>  {
        setAttributes({ contentEAb: newtext });
      }}
    /></span>

                </nav>
                <nav className="hidden sm:flex" aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-4">
                        <li>
                            <div className="flex"> <span className="text-sm font-medium text-gray-500 hover:text-gray-700"><RichText tagName="span" value={attributes.contentFxi} default="Jobs" onChange={ (newtext) =>  {
        setAttributes({ contentFxi: newtext });
      }}
    /></span>

                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                
      <svg
         className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSdW }}
        >
      </svg>
       <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"><RichText tagName="span" value={attributes.contentaZo} default="Engineering" onChange={ (newtext) =>  {
        setAttributes({ contentaZo: newtext });
      }}
    /></span>

                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                
      <svg
         className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqut }}
        >
      </svg>
       <span aria-current="page" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"><RichText tagName="span" value={attributes.contentTnM} default="Back End Developer" onChange={ (newtext) =>  {
        setAttributes({ contentTnM: newtext });
      }}
    /></span>

                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="mt-2 md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                     <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"><RichText tagName="span" value={attributes.contentJlQ} default="Back End Developer" onChange={ (newtext) =>  {
        setAttributes({ contentJlQ: newtext });
      }}
    /></h2>

                </div>
                <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <RichText tagName="span" value={attributes.contentfCg} default="Edit" onChange={ (newtext) => { setAttributes({ contentfCg: newtext }); }} /></button>
                    <button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <RichText tagName="span" value={attributes.contentZrD} default="Publish" onChange={ (newtext) => { setAttributes({ contentZrD: newtext }); }} /></button>
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
        <div>
            <div>
                <nav class="sm:hidden" aria-label="Back"> <span class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
        
        
      <svg
         class="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfRj }}
        >
      </svg>
      <RichText.Content value={attributes.contentEAb} /></span>

                </nav>
                <nav class="hidden sm:flex" aria-label="Breadcrumb">
                    <ol role="list" class="flex items-center space-x-4">
                        <li>
                            <div class="flex"> <span class="text-sm font-medium text-gray-500 hover:text-gray-700"><RichText.Content value={attributes.contentFxi} /></span>

                            </div>
                        </li>
                        <li>
                            <div class="flex items-center">
                                
      <svg
         class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSdW }}
        >
      </svg>
       <span class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"><RichText.Content value={attributes.contentaZo} /></span>

                            </div>
                        </li>
                        <li>
                            <div class="flex items-center">
                                
      <svg
         class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgqut }}
        >
      </svg>
       <span aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"><RichText.Content value={attributes.contentTnM} /></span>

                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div class="mt-2 md:flex md:items-center md:justify-between">
                <div class="flex-1 min-w-0">
                     <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"><RichText.Content value={attributes.contentJlQ} /></h2>

                </div>
                <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <RichText.Content value={attributes.contentfCg} /></button>
                    <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <RichText.Content value={attributes.contentZrD} /></button>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        