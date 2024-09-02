
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-meta--actions--and-breadcrumbs', {
            title: 'with meta  actions  and breadcrumbs',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABcBaADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAQGAgMFBwH/xABIEAACAgECAwQFCQYEAwcFAAAAAQIDBAUREiExBhNBURQiYXGRBxUyUlOBkqHRFjNVk7HSQnKywSMkNjU3Q1Ric6JEdISU4f/EABoBAQEAAwEBAAAAAAAAAAAAAAABAgMEBQb/xAAnEQEBAQABAgUEAgMAAAAAAAAAEQECAxIEExUxUSFB0fAFM2Fx4f/aAAwDAQACEQMRAD8A9HysqvFdKsUn31qqjwro3v19nIzWRQ73Qrq3ausFNcXwOTk33Z2ZiY/od9c6MrvJylH1OGKfNS8d9yHRjWqONjehWrMry+8syO72i48TblxeO65bFiO1i6lj5DcOOFdislBQlNcUtntukb3k0K9UO+tWvpW5ri+BWXjTlRk48dPuWXbludd7q5Jcf0uLwWyfx9pJupshq8nRjWzc8iMpRtx94+HrxsXTbyEFiABFfJPhi5bN7LfZLdswovryKlZVLeL/ACfkzOT4Yt7N7LfZdSHg0WK23Ktj3crv/CXgvN+0CaAAI2dmwwo1OVVtjtmq4xrSbbab8WvIVZkJV8d9c8VcXCu/cY78t+WzZC7QVysqxHGF8owyFKfcJuaWz5rYjW0RyaMSuFObZCObGU1lRk3twvz/AMP5FR2lk48qHfG+p1LrNTXD8TVdnUxx5W0Tqv4eHdRtiur2XNvY4uViTrnkKOP/AMvHNrsVOyirVw81Hfk+fh7DRKuV3zysfDnU5Sx2qVFcS9bd8l08xBZXl4ysVbyKlY3w8PGt9/LbzMpZFEblTK6tWy6QclxP7iv5eBKeFq1ixZSyJZG9UlW+JpcOzj4+fQ05WDkSzMuFkchztvU65146luuW3rv6O3vEFmlkURuVMrq1bLpByXE/uNd2bRVGxRtqlbCMn3feRTbS3a59Cu5WDkSzMuFkchztvU65146luuW3rv6O3vJ3oTePrVjxm7rHYq5OHrSXBy2+9voIOos3GUIu2+quUlFuMrI7rfoupssyKKZRjbdXBz+ipSS4vccKGB3vpjvxXJ+hVxrcof4uF7pe3fY1KqVUlLKwnlOzBrik+Heppc1JP6K38RBZIThZBTrnGcJc1KL3TMjn6Dy0TE3+zR0CKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXfRTk1Oq+uNkH1jJbmONi4+JW68aqNcW92orqzcAAAAAAARsrT8PMnGeTj12Sitk5Lnt5EkAfIxjCKjCKjGK2SS2SR9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1qU584OKj4Nrfc+7W/Xh+B/qBmDDa368PwP9Rtb9eH4H+oGYMNrfrw/A/1G1v14fgf6gZgw2t+vD8D/UbW/Xh+B/qBmDDa368PwP8AUbW/Xh+F/qBmDGEuJNNbST2aMugAGtOya4ouMYvput2fdrfrw/A/1AzBhtb9eH4H+o2t+vD8D/UDMGG1v14fgf6ja368PwP9QMwYbW/Xh+B/qNrfrw/A/wBQMwYbW/Xh+B/qNrfrw/A/1AzBrfepb7wl7Etv9zOMlKKkujA+gi6lnVadgW5dybjWui6tt7JfFlMn241FzbrxsWMfBSUm/jujo6Phup1svHE3YvoKB+2+qfYYf4Jf3D9t9U+ww/wS/uN3p/WO7F/BQP231T7DD/BL+4ftvqn2GH+CX9w9P6x3Yv4KB+2+qfYYf4Jf3D9t9U+ww/wS/uHp/WO7F/BQP231T7DD/BL+4ftvqn2GH+CX9w9P6x3Yv4KB+2+qfYYf4Jf3D9t9U+ww/wAEv7h6f1juxfwUD9t9U+ww/wAEv7ibpXbOy7MhTqNNUK5vhU6k1wt+e7fIx5eA63HLDuxE7QdudS07tJZpeFp9N6rlGOzUpTs3instuj5+00v5Rs7DvjDVdBnTGX/qlCW3mlJc/wAjh9os35t+U23N7p29zdXLgi9nL1I8kZdru1j7Q04+A8L0GuNqsdlzbfRrolulz9pzRK9WwsunPwqcvGlxU3QU4PbbkzeVhVZundh8bH7MuObf3cY12xcdufOU/We3ny9pSs/E1/A0yWp5XaVxzINOWKsxuxLfbbk9n57GMWvXAUTA7ZZS7A3apkKNmbTb6NGTWynLZNSa9z3+44ml6X2s17TrNZq1i+Em5d1B3Si57ddkuS58hCvSdazpabo+XnQgpyorc1FvZPY5nY7tBb2i067Kux4Uuu3u1GMm9+Se/wCZXsTUtYzOw+s4+uYuRXbRQ+C26pwdkXv13XNrb8yvaB2oWg9lMvHxXvn5GQ+75cq48MVxfoWFexHK7TatPRNDv1CqqNsqnFKEnsnvJL/c5fYnSdUxcT07Ws7MtyLo+pRbdKSrj7U39J/l8TP5Rf8AozM/zV/64k+4rlXyjatdDjp0ONkd9t4ObX9Cy9ku0Odrs8qObpzxFSouL2l62++/VewpHZbtxVoGjrBngTvaslPjVqj19mxbcXtT8/8AZbWsnGosxJ4uPPhkrN3vwNpppLbbYu4LcDyTszHtT2ixsnGxdYuqprkpWW23Tcm2ntFPm9uTJ/YXV9Vxu1Fuh6lk23xfHBxsm5cE4eTfhyZIV6YVPtl2uv7OZeNTTiV3q6Dk3OTW2z2KpmahrvaztZdgabm2Y9NUpKCja4QjCL24nt1b5fE5Ha+nWMPNowdbyFkzpr3pu3bc4N+b5vmn15/kXMK9uT3SfmULW+3ubp2u5Om4+m1391Phi+J8UuW/RF8j9Fe48tj/AN8H/wCS/wDQTDU2n5TbqshV6jo7rj/i4JtSX3Nc/ii+6dn42p4NeZhWKymxbp/1T8mcztlp2PqHZnN7+uLnRTK6uT6xlFN9fyKb8nmrvTez2uXWJyrxFC6MfOUk1t97jEsuD04HkOBbq3aWWRm5naerT+GW0K55HdpvryimtlzXP+p0uzet6pq2BqXZ+/LsnmQpnPGyq7XxOUWvV4l1Tfj5biFemAoPyba5fkYeo0allW3Sx2rlO6bk1HbZ834LZfE5vZPWNQyM7V9czcvKsw8Oqdqod0nBylvwxS326b+7kSFeoA8hwcnVe09+RlZnaWrTowfqVyyO7W/lGKa5e3+p3+wPaPNu1O7Q9TvWVKvidV/HxtuL2a4v8S8UxCul2P7X39os/IxrsSulVV8acZN789i2nlHyaZEMTP1XKt/d04krJe5Pd/0Gn2dpO2+o5NlOpTw6KdnwxslGEN/oxSXV8nzZdwr1cHm3ZXXNX0vtS+z2s5EsiMputSnJycJbbxak+bT5cn5roc3K1PtBZ26y8HTM/I455FlVdc7ZOEFz57Pktlu+nLYkK9bB5Fqr7T9jtSxr8jU7MiNu8k3bKcJ7bbxkpe9fE7nbntZlVVYOHpVvcSy6I3ztUtmoy+ik/Dx3fuEK9BB5Fmz1bs7DH1DF7UU503NKymGT3mz684t+suXU7HbPX8nK7K6RqWBkX4jyZPjVNrjzS2a3W26TTEK9FBQux+m9osvM0/XNR1Fyxe72VErZNyjwOKbXTdvZ/mX0aoACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH0AfQDCj9xX/lX9DMwo/cV/5V/QzAGvv6e/7jvYd61vwcS4tvPY5eva3XplXdVbTypr1Y+EV5s16NhSyZUarn093mJNJx5d4mtlKS8HsWDuAFUusst17U4WV6vfCudagsS9xjBOCbW3EvEYLWCv6lqGoTlqOPgV09zhU7WytlLjm3Df1Wumy8X4nNWZlV6XbZjSUcivSKLXbKUm3ye/Lfbf27CJVyBH093ywaZZcoSucU5OCaT8uvsJBFa4/vp/cZW/u5e4xj++n9xlb+7l7gPsPoR9yPp8h9CPuQbUU3JpJc234AG1FNyaSXNt+BExdUwcy+VONkwssj1S35+7z+442q6pPMonCmur0KUuBTtnKHfNdVFrkl7XyN+Nw6nqOLdi0RqxcJNd4v8AE9tuGPsXmWJXeAK3k6jdpVms02WTsnwq/E4pOT9f1eFexT25e0irICr25r0O2x5ClkW42mVylZKyTlZJza2e72238dtwu0mXGvJ4q6LZUVRv46oTUeDiSkvW8UnuvMsSrQCuW9or1fnU1U1twshXiN77Wtz4Jb8/CRYyRQ10fukbDXR+6QHG7Z/9O3f5of6kebnpHbP/AKdu/wA0P9SPNz3f43+nf9/hhy9wEnT8KzUMuONTOuNkk+Hjlsm14e8l6dot+TlWwyd8ajGf/MWTW3B7PednLqceNuo5YJ+rZOHfkRjgY0aceqPBF7etZ/6pe0jYcVLMojJJp2RTT8eZc5XjdyDSC6ati00w1NZuHgY+NGD9FlXGMbZT5cO23Pbz3ORkaLj1arqeJGy1wxMV3Qba3bSi+fLp6zNPDxPHll/ft+SOEC36npunZupvGjZdXnSx4zgoxSq5Q6Px32XUwvpTwW4S4NtHrk1GMfW9Z9d1/QmeKzcz6e5FTBZM/Q8TDxYX0PJtSlXtf6sqrN2t+nOPXxN2vafgX36rbjzujlYrjOcWoqtp7cl4lzxPDdyff/n5IqoAOlEnXc2rTvlRszMji7qm+uUuFbvbgiTe2nbLSda0V4WHRbZbKcZKyyCiq9nz2577vp956FkaNpWVdK7J0zCutn9KdlEZSfvbQo0fS8afHj6bh1T+tXRGL/JHylxsjzPOp1fTPk1xapq2mu7Jk7I8041tck/JN7v70cu19mV2ajHGpy7tYlFcTk2o1v8AxPly2232Pa7K67a5V2wjOEltKMlumvaiHVouk0wshTpmHCNq2sjGiKUl5PlzQ7iPM9I02/UvkxzoY0HO2nPdyhFbuSUIJ7fc2/uJnZbtzhaR2ZWDk02yyMfi7pRScZ7ttbvw5v4Ho+Jh4uFU6sLGpx63Licaq1BN+ey8eSI1uhaRdkPIu0vDna3u5ypi235vlzFIqGPrOr672J1rL1KmmulUuNLrg48fXifNvddPzKfpnZq3U+zGZquLKUrsW3hdKX0oKKba9vP8me1zx6LMd486a5UOPC63FOLXlt02MMTCxMKt14WLRjwk93GqtQTfnshSKz2A7SfPOm+iZU987FilJt87IeEvf4P/APpv+UX/AKMzP81f+uJ2sbSdNxL+/wAXTsSm3muOumMZc+vNI35ONRl0ypyqK7qpbbwsgpRf3Ml+o8y7H9tNM0LQ1hZmPlztVkp71Qi1s/fJFkl2owO0XZvXI4NORW6MKxy76MVvvCW22zfkdz9n9E/g2nf/AKsP0N9GlabjV214+n4lULo8NsYUxipryaS5rm+vmLgpfyS/9nah/wC7H+jOZo//AHvXf+/f/okelYmDh4MZRwsSjHjJ7yVNagm/bsYw03T68x5kMHGjkttu5VRU2319bbcUjyjSs/8AY3trmem0WOn16pKP0uByTjJb9ei+JF7ba9DtBqleTj02V41dfd1uxbOT33b/ADR7Bm6Xp+oOLzsLHyHH6LsrUmvvZhZo2lW11126ZhThUuGuMqItQXkuXIvcRNj9Fe48h1PUKdK+U6/PyIzlVTfvJVpOT9Tblu15nr5Bv0bScm6V2RpeFbbN7ynPHhKT97aJmwee9pu38NV02zTtKxLoekepOdu3E4vqkk3zZ0ND7KZdXYPUce2twzc+PGq3yaUecYvybe/xLrjaXp2HPjxNPxaJ/WqpjF/kiWL8EeK9nJ9mKqcijtLiX+kQm+GUXNcttuFpNbNNP4lp7BfNmZrN+TpehTxKqIOKyZZMp77vlHhfLdrn15Fzy9F0rNu77L07Fut+vOqLb+8lUUU41MacamuqqP0YVxUYr3JF3SPHu0iu7N9p9Vpx1tVnUyivD1LOb29zTX3Ft7OaBOXyb348IpZOoVStW/i2vUXu2S+JbcvTNPzrFZm4GLkTiuFStpjNpeW7RKhCNcIwhFRhFbRilskvJCkeLdnX2coWRj9p8O9Xwn6sk5rbzi0mtnv/AFLN2G+as3X7b9K0KzGqx4y2yZ5M5deSTi+W7Xt5F2zNG0vOt73M0/Fvs+vZUm/iSsfHoxaVTjU101R6QrioxX3IbpHk/wAnuK867WsOL2d+DOtPycnt/ufexfaCrsrl5+FrFF1fG1vwx3cJR35Ne3f8vaeo4mm6fhTlPCwcbHnJbSlVVGDa9uyMc3SdN1Canm4GNfNclKytSa+8UjzPRZW9qPlGeqUUzhj12q2Tf+GMUlHf2vZcvf5EO7UnpHyj5eoKmVsaMq1zjHrwvdSf3Jtnr2LiY2FT3OHj1UVrnwVwUV8EUbTezuqVfKLfqd+HtgztufeOcWmpRkly3357+QpHA7a9pae09+Fi6ZRdw1t7ccVxTnLZJJJvy/M29vNFt06ek5M6XZjV4tWPZs+XFDwbXTdf7npeLo2lYd/f4mnYtNv166oxa93LkS7aq7qpVXVwsrktpRmt0/ehSPJM7M7D14tc8DSMjIyJtb1Tusgoe97vd+4m9tseOL2N0SqGG8Nd5KXo7m5uvi3ezb578z0LG0PSMS5XY2mYlVqe6nCmKa9z25G/LwcPOjGObiUZEYveKurU0n7NxSInZn/pjSv/ALSr/SjpmNVddNUKqYRrrglGMIrZRS6JLwRkYqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH0AfQDCj9xX/lX9DM10Nd3GPjFbNGwCu6Z2csrzZZmq2wyLN+KKTbTfm90vgWIAUDlW6JGebkZdOoZ2PPIac41TiotpJLrF+COqAOVmaDj5d9trycqrv61XfGqxJWpLZcXLrt5bGUNCxIVTqcrZQniRxJKUl9CKaT6deZ0wKNOHj+iYleP31tyrWyna05Ne3ZI3AdANcf30/uMrf3cvcY1vinOa6Pkn5mc1vBrzQCH0I+5GjUMeWXgX48ZcMrIOKftNtUlKtbdUtmvIzA4VGLqWTXjYmXjU4+NRtxtOM+926JLwR24QhXBQrjGMV0UVskZAAQM7SMXPzcTLv4+8xZcUFFpKXNPZ+ezSZPAEHK0nFzMi67IU5d/jrHnHflw7t7+e+7MKdIhCu+F+Xl5SuqdT76xNKL8Ekkt/a+Z0QByauz2DU9PcXa3gcTrbkvXcnu+Llz58/DmdYAAa6P3SM5SUI7yeyMaU1Wk1swOL2z/6du/zQ/1I83PTe1ePZk6BkQpi5SW0tl4pNN/keZHufxu55W5/lhy932LcZKUW009014HR1DXM/UcavHybE4Q68K2c35y82c0HfvDju5u57IGdVjqthZHZuElJb+wwBUb83Kszsy3KtUVO2XE1Fcjp29o8q2q6MsbE7y+rurblW1Oa223336nFBhvS4bM3PZXbt7S5dkZP0fEjc6+6V0a3xxjttsnuRpa1kypdThTwvFji9HvwJ7p9epzQTOj089sK6tuu32Y1lNeLiU964u2VVbi58L3W/Pb4I126zk2251koVJ5sVGzZPlt5c/Z7TnAZ0eGe2fv7hQA34WJdm5deNjxcrJvZJeHtNm7mZdHrwIGpalViVThCaeRt6sWmQqNV7rJgrs2N9Uk+J9048D+HM+UjZXcBjVZC2uNlclKEuaaI1+eqcv0aGNfdZ3fePu+HZLfbxa8iCWDXXdCcfW9SSipShJrign57P2Mi5Gp1Ud81FzjVXCzii1tJSbS2+AE4HyUowi5Tkoxit229kkRKdSoyYUzxpRshbNwb40nHk30fPw6ATAR/TsNqTWXRtFcT/wCIuS8zOWTjwpV076o1S6Tc0ov7wNoPkZKUVKLTi1umnyZ9AAGvIujj487p9ILf3gbAVqWsahZJ2V7Rrj1UYbpe9nY0vO9Ox3KUVGyL2kl095YlTQaMzKhh4s8iyMpRjtyjtu92l4+810Z8bcl49lN1FvDxqNqXrLxaabRFSwaYZeNOudkMiqUIfSkppqPvfgYvOw1HieXQkpcO/eLr5e8CQDXbkUUyjG66uty+ipSS39xredjLO9Dd0Vfw8XDv+Xv8dgJANdeRRbOUKrq5yh9JRkm4+82AAAABysjPyLc2WLgqK7v6dkue3n+h89PyMLLjTmyhZVN7K2Oy296+BYOsAc6/WKKc3uO7tnGO6ssjHdQa2+P0lv5EHRBElqNC1CGEo2OyW64lH1U0t9t/PbyMFqdffQi6Lo1Ts7qNzS4XLpt136rrsBOBAlqtKta7q7uo2d07+FcClvtt1368t9ttzdTm1Wq1yarVdzp9dpcUl5ASQAABzY6zRLP9GVVrh077hfDxcXDt7t+W5vo1Gm/OniVxs4oRcuNx2i9ns9n48xBLBEWo0S1H0GKnKzZtyS9VNbbrfz5r4muGq0ztiu6tVU7O7hc0uCUum3Xfry32AngjUZtVsZyk1Xw3SpXE0uKSe3L3kkAAAAORlankLNdOLjzsVUvXUVvxL4cjC7VcyPDZ6DbVXB7z4k9mvftyLErtA1490cjHhdFNKa32fgaMjOjVkej1UW33cPE41peqva20iKlghValVbZjwhCadznFqS2cHFc00Sa8iiyyVdd1c7IfSjGSbXvQGwEeWZR3V0qbarZUxblGNkeW3nz5fefXmY0eFW31Vzlt6srFvu/DqBvBqtycemcYXX1Vyl0jKaTZsUouCmpJxa3TT5bAfQaYZeNOuVkMiqUIfSkppqPvZlVkU3uSpurscHtLgkns/bsBsBpy8mGJjSvsUnGLSaj15tL/AHPssmiNyplfWrZdIOa4n9wG0Gn0vG71VekVd43soca3b8tjN3VKLk7YcMZcLfEtk99tvfuBmDV6TR3/AHHf1999nxri+B89Lxe8dfpNPGntw8a367dPfyA3Ax44Ox1qceNLdx35peexCu1Wuqdu1F06qHw22xS4YPx8d3t47ICeAmmk090+jIORqddE7OKi51VSUbLklwxb29u76+CAnAg5Gp1UW2x7m6yNCTunCKca9+fPnu+XPlufcnUY0ykoUXXKEO8nKtLaMfva36dEBNBCt1OuLhGim7Ic61btUlyg+j5tdfLqSaLq8iiF1UuKFkVKL9gGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGMq4T+lFP3ox7ir7OPwNgA19xV9nH4DuKvs4/A2ADX3FX2cfgO4q+zj8DYANfcVfZx+A7ir7OPwNgA19xV9nH4BUVL/w4/A2AAlt0AAGEqoTe8oJv2o+dxV9nH4GwAa+4q+zj8B3FX2cfgbABr7ir7OPwHcVfZx+BsAGvuKvs4/AdxV9nH4GwAa+4q+zj8B3FX2cfgbABhGmuL3jCKfuMwABEt0zT7rHZbhY05vrKVUW3+RLBc5bnsIPzPpf8OxP5Mf0HzPpf8OxP5Mf0JwMvM5/Ig/M+l/w7E/kx/QfM+l/w7E/kx/QnAeZz+RB+Z9L/h2J/Jj+g+Z9L/h2J/Jj+hOA8zn8iD8z6X/DsT+TH9B8z6X/AA7E/kx/QnAeZz+RB+Z9L/h2J/Jj+g+Z9L/h2J/Jj+hOA8zn8iD8z6X/AA7E/kx/Q34+Fi4u/o2NTTxde7go7/A3gm8+W/TdFf1TFx7s+2XpkK7OXFCxNLovEjSwa3t3mbhxUVt6kt9/b7ywZGn4mTZ3l1KlPpvu1/Q1fM+n/wDl/wD5y/UVIz0uNcNPqjTZ3kFvtLh235vwIuThyydc43PIqrWMlx1ScU3xPludOquFVca64qMI8kkZEVxsjvMPLyV3GRdG7GjCuUYOe8o8S2b8+a5siTxsh4FkVRbxPCx4pcD33Te696LIBRF9HyPSnZLMlKlt/wDBdcdtvLfbc5eBTZGjTanj2QlRkTVm9bS+jLnv4rmuZ3gKK/haeo16Nx4mzgpuzev6Lcf8X3+Zqni31+jy7u2FNVt62jR3nBvL1Xw+W2/Nf7llAqRC0el0abXBqxLeTSsiotJtvounuJoBFCPn0PJwraV1kuXvXNEgAVCOTkYtN2Jsoqb2mmuaO3oOLPHxp2WJxla00n5Lp/UmXYWPdkQvsrTnDp7feSC7qRA1yqd2k211RnKUnDZQW7+kjnZOBlRuza1K/IndjbUXTe/D9aD22Sb5FgAqqvPFssxsuVVeS28bu+B4yqW/EtlsubaJ+TgV+mZrhiR4XhKMNq+Tfrcl7en5HZApFdVUqo2+l4V17uxa4V7VOWzUdnF/V58zb6LkV5FUZQl3s8DuVao8SjYvN+HvO6BRXtHxbIZWI5RyISoqcZp46riuS5OX+Lnz5blhAJoAACt1wnia1ZCdsa1Nt+ut4zTfRmWsV1XZsK6EnkSltLhXL2b+07t+PTkRUb61NLmt/Axx8PHxt+4qjFvx6v4lqRuiuGKjvvsttyt6jC+Osxli4t9WVJT4J1veFv0dnLfkl13+72FlAzVQcyuctU0+cYScYSs4mlyjvDxIiyHl6pF5ONlQqps2pi6JbSl0429ttvL4nZAHAnC70SzSvR7u8nkNqzhfBwOfHxcXTpy89z5j4+TRq1mXbTO2h5M4xhwPetvbaxLxT6b+BYAKI+VTfdw9xlyx9t9+GEZcXxRli1XVQcb8mV8m91KUVHZeXI3AgrKhkQ1//lsXIx7pNOxRadU1x85Pfzj5c9zq3V3vWXZVH/6SUYzknw8XEtk2dEFo4GLiajjZ+DGdVEowVjnZGUnu5OLk29ur8BTC/wBFxdMeParKchOdji+DgjLi4lLpzO+BUiv4WPkY+qTyb6Z20zyLYwXA96d5cppeKfn/ALFgAIoAAKpqFttOqZDqsnBuWzcZNEeeVkzi4zyLZRfVObaZab9Nw8i12W0qU31fE1v8Ga/mfT//AC//AM5fqZXEjPS/+zaP8pHsnLB1W++ym6ynIhDaVcHPhlHdbNLnz3OjXCNVca64qMYrZJGRirkWvJzMnCu9Gso/fJcXNxTjtFy8m/IjYlLfzfVXg3VW40X383Xwr6LTSl47vZ8veWAForNNFscbIppx7Z1rDshF243BZB7cobr6W/sN8sF2VapKzGcpyx4KtuG7bVfRe3fyO+BUiuZUZVxz3kYjyJXURanyfd7Q5qW73jzTZOtptv7MQqpTdkseHq9G+S3X3rdEzI0/DybVZkY1dk1y3kuvv8ySuS2QormbS8qGVZh4V1VfovduLqcHOXEmko+OyT5+06VWOqdb4qaeCl4yTcY7R3UuS9+x0QKrkatdZfXbgQxb+8lOHBNRbhJbpt79FtzIOpQybcm9Rx5xl38HFV42/HFOPrOf+yLKBRwLMOXoebZHGl37zlOEuD1tuOPNezbf8zG/voUZeH6LkSsnmKyMo1txcXOMt9+hYQKK1fXk2ajD/l5wcc6MmoY3Jx4vpufjuibTpyuwNQrlV3dt19rjNx2f0t4v3ckzsGF1UL6pVWx4oSWzXmKkc/Q5TyqbNRtjwzyWtl5Ritl+fE/vIOpUWOzMx6I5sHkP93CCddjaS4uLb1V5rc78IRrhGFcVGEVsklskjIVUfEsg4yx4cTeNw1ybXJvhT/3Rzs/Ilfn+j342V6JS1J8FEpK6XVLkvor8zrwrhW5OEVHjlxS28X5mRBxMp3UPUsdY11ksv1qZRg2m5RUWm/DZrx8D7n2WRjTprqyXQq0rraqpS4kltwppePi/I7QLRyXa8LNlkRxb5UX48FBQrbcXHf1WvDk11Jek0TxtMx6bVtOMfWXk3z2/MlggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==" />),
            category: 'common',
            attributes: {
  "contentEAJ": {
    "type": "string",
    "default": "Jobs"
  },
  "contentvGi": {
    "type": "string",
    "default": "Engineering"
  },
  "contentNPM": {
    "type": "string",
    "default": "Back End Developer"
  },
  "contentTxW": {
    "type": "string",
    "default": "\n        Full-time\n      "
  },
  "contentMyj": {
    "type": "string",
    "default": "\n        Remote\n      "
  },
  "contentRag": {
    "type": "string",
    "default": "\n        $120k &ndash; $140k\n      "
  },
  "contentEjp": {
    "type": "string",
    "default": "\n        Closing on January 9, 2020\n      "
  },
  "contentUxo": {
    "type": "string",
    "default": "\n        Edit\n      "
  },
  "contentyEF": {
    "type": "string",
    "default": "\n        View\n      "
  },
  "contentXhn": {
    "type": "string",
    "default": "\n        Publish\n      "
  },
  "contenteQW": {
    "type": "string",
    "default": "\n        More\n        \n        "
  },
  "contentSEc": {
    "type": "string",
    "default": "Edit"
  },
  "contentjSH": {
    "type": "string",
    "default": "View"
  },
  "svgCXU": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgMxt": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z\" clip-rule=\"evenodd\"/>\n                            <path d=\"M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z\"/>"
  },
  "svgiSR": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z\" clip-rule=\"evenodd\"/>"
  },
  "svgjls": {
    "type": "string",
    "default": "<path d=\"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z\"/>\n                            <path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z\" clip-rule=\"evenodd\"/>"
  },
  "svgUeP": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z\" clip-rule=\"evenodd\"/>"
  },
  "svgCZQ": {
    "type": "string",
    "default": "<path d=\"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z\"/>"
  },
  "svgORe": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z\" clip-rule=\"evenodd\"/>"
  },
  "svgHhd": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svglcm": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgCXU }
            onChange={ ( value ) => {
              setAttributes({ svgCXU: value });
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
            value={ attributes.svgMxt }
            onChange={ ( value ) => {
              setAttributes({ svgMxt: value });
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
            value={ attributes.svgiSR }
            onChange={ ( value ) => {
              setAttributes({ svgiSR: value });
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
            value={ attributes.svgjls }
            onChange={ ( value ) => {
              setAttributes({ svgjls: value });
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
            value={ attributes.svgUeP }
            onChange={ ( value ) => {
              setAttributes({ svgUeP: value });
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
            value={ attributes.svgCZQ }
            onChange={ ( value ) => {
              setAttributes({ svgCZQ: value });
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
            value={ attributes.svgORe }
            onChange={ ( value ) => {
              setAttributes({ svgORe: value });
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
            value={ attributes.svgHhd }
            onChange={ ( value ) => {
              setAttributes({ svgHhd: value });
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
            value={ attributes.svglcm }
            onChange={ ( value ) => {
              setAttributes({ svglcm: value });
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
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-4">
                        <li>
                            <div className="flex"> <span className="text-sm font-medium text-gray-500 hover:text-gray-700"><RichText tagName="span" value={attributes.contentEAJ} default="Jobs" onChange={ (newtext) =>  {
        setAttributes({ contentEAJ: newtext });
      }}
    /></span>

                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                
      <svg
         className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCXU }}
        >
      </svg>
       <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"><RichText tagName="span" value={attributes.contentvGi} default="Engineering" onChange={ (newtext) =>  {
        setAttributes({ contentvGi: newtext });
      }}
    /></span>

                            </div>
                        </li>
                    </ol>
                </nav>
                 <h2 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"><RichText tagName="span" value={attributes.contentNPM} default="Back End Developer" onChange={ (newtext) =>  {
        setAttributes({ contentNPM: newtext });
      }}
    /></h2>

                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMxt }}
        >
      </svg>
      
                        <RichText tagName="span" value={attributes.contentTxW} default="Full-time" onChange={ (newtext) => { setAttributes({ contentTxW: newtext }); }} /></div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiSR }}
        >
      </svg>
      
                        <RichText tagName="span" value={attributes.contentMyj} default="Remote" onChange={ (newtext) => { setAttributes({ contentMyj: newtext }); }} /></div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjls }}
        >
      </svg>
      
                        <RichText tagName="span" value={attributes.contentRag} default="$120k &ndash; $140k" onChange={ (newtext) => { setAttributes({ contentRag: newtext }); }} /></div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        
      <svg
         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUeP }}
        >
      </svg>
      
                        <RichText tagName="span" value={attributes.contentEjp} default="Closing on January 9, 2020" onChange={ (newtext) => { setAttributes({ contentEjp: newtext }); }} /></div>
                </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4"> <span className="hidden sm:block">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        
        
      <svg
         className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCZQ }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentUxo} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentUxo: newtext });
      }}
    /></button>
    </span>
 <span className="hidden sm:block ml-3">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        
        
      <svg
         className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgORe }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentyEF} default="View" onChange={ (newtext) =>  {
        setAttributes({ contentyEF: newtext });
      }}
    /></button>
    </span>
 <span className="sm:ml-3">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        
        
      <svg
         className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHhd }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentXhn} default="Publish" onChange={ (newtext) =>  {
        setAttributes({ contentXhn: newtext });
      }}
    /></button>
    </span>
 <span className="ml-3 relative sm:hidden">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true"><RichText tagName="span" value={attributes.contenteQW} default="More" onChange={ (newtext) =>  {
        setAttributes({ contenteQW: newtext });
      }}
    />
      <svg
         className="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglcm }}
        >
      </svg>
      
      </button>

      
      <div className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">
        
        <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-0"><RichText tagName="span" value={attributes.contentSEc} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentSEc: newtext });
      }}
    /></span>
 <span className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-1"><RichText tagName="span" value={attributes.contentjSH} default="View" onChange={ (newtext) =>  {
        setAttributes({ contentjSH: newtext });
      }}
    /></span>

            </div>
            </span>
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
        <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex-1 min-w-0">
                <nav class="flex" aria-label="Breadcrumb">
                    <ol role="list" class="flex items-center space-x-4">
                        <li>
                            <div class="flex"> <span class="text-sm font-medium text-gray-500 hover:text-gray-700"><RichText.Content value={attributes.contentEAJ} /></span>

                            </div>
                        </li>
                        <li>
                            <div class="flex items-center">
                                
      <svg
         class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCXU }}
        >
      </svg>
       <span class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"><RichText.Content value={attributes.contentvGi} /></span>

                            </div>
                        </li>
                    </ol>
                </nav>
                 <h2 class="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"><RichText.Content value={attributes.contentNPM} /></h2>

                <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                        
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMxt }}
        >
      </svg>
      
                        <RichText.Content value={attributes.contentTxW} /></div>
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                        
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiSR }}
        >
      </svg>
      
                        <RichText.Content value={attributes.contentMyj} /></div>
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                        
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjls }}
        >
      </svg>
      
                        <RichText.Content value={attributes.contentRag} /></div>
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                        
      <svg
         class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUeP }}
        >
      </svg>
      
                        <RichText.Content value={attributes.contentEjp} /></div>
                </div>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4"> <span class="hidden sm:block">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        
        
      <svg
         class="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCZQ }}
        >
      </svg>
      <RichText.Content value={attributes.contentUxo} /></button>
    </span>
 <span class="hidden sm:block ml-3">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        
        
      <svg
         class="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgORe }}
        >
      </svg>
      <RichText.Content value={attributes.contentyEF} /></button>
    </span>
 <span class="sm:ml-3">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        
        
      <svg
         class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgHhd }}
        >
      </svg>
      <RichText.Content value={attributes.contentXhn} /></button>
    </span>
 <span class="ml-3 relative sm:hidden">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true"><RichText.Content value={attributes.contenteQW} />
      <svg
         class="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svglcm }}
        >
      </svg>
      
      </button>

      
      <div class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">
        
        <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-0"><RichText.Content value={attributes.contentSEc} /></span>
 <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-1"><RichText.Content value={attributes.contentjSH} /></span>

            </div>
            </span>
        </div>
    </div>
</div>
</div>
            );
            },
        });
        