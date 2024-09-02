
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/simple-list-with-heading', {
            title: 'simple list with heading',
            icon: (<img src="data:image/jpeg;base64,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ntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUJxntjz6MZ7Y8+gUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMafUbjCdYTvt2jKlcK0raxpWn+pDqNxnOkIX27SlWuFKUtY1rX/UGn6n1i8XfrcY2VrGNyulbON7jWlPmtpWtKfP3pl/LX41ZF+63b3a+Xq72HTpXil1so2tpOlrSP5a44/Faff4+36ol+Gblb2F77yNnb3m9TnKtvWz/NDH7Up8/p8Pex6ROFb3K1vf1LS83aFhKX08MKxpWmb7/rjjguI8bbr9pW2rC5dPneY0u0LzWX1aR/JLHX9fhN5/E1jD6NLtYxtZWl3pea0tLaNlhCv2p8/ev7Mi59G7Wta9xmxudndf4MP4aVpm+/64/Zi1/DcrON2ldr1ZRtrK7Ru85Wt2paUnSn2rSla/Ff61MNIdavd56rdbO5XaFpdbxda28c1pllX5p8/b4wxwwed0/EN4h0al86hd4UtLS8VsLKkbSlKTlmrTCta/EcMPv+zYU6TOzvlyvNhessrtZVsZ0rZUr9WNa0rX7YUjXGn6MWv4drK4yusr3SsIXnuLtWtjSv0pY1rhXGv5qfNdDBm9I6pHqUbaNbOlnbWE6RtIxtKTj80xpWkqfejm7Xrt9hW9zj1K0rbWV9lZQsZ3eNLGkaTwpSVplph8frmdP0y42lyhafWtrO0tLSWNa2djSzjT4+1KU//datZP8AD17nY3u6/wBq0jc71bTtJ2cbvTNSkq41jSVa/wCuBg9o9QvFlf8ArOEJXiN3lZUsrKkqRpTGFK1+a/FKY/KLP8Rwldres7rjebK2hYUsrO1pOk5T/hwl9v8AywVe/wAPRvFL5lvOXuLSxnGlbPNGP06UpSlaY/mpXD9nnD8N1pC81lfKUtrW1s7aE7OxpCllOFMKYRxwrT9jDU9R6terG7WE7zYTuFYX2yha1rOkoSs6/fCX60w++jbdNvsr/du5+hWysZ1xsayr8zh+ksP0xYNt0W3vlhGHUb9S8V7iFtKNbGlIZY/4KRx/X9a41ZfSrhLptjO7xt62l3pOtbGEo/NlGv8Ahxx+aaGDOARQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGJ0r+6bn+9hCv/bQ6r/dN8/awnX/tq8bleoXa43e721leaWllZxhKlLvaSpjSmH3pTCpfb1C83G8XexsrzW0tbOUI0rd7SNMa0w+9aYUBsQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqATkprLyqZKay8qqAY146hcbtaxsrzfLvZWkvtCdpSNa/0qyXNdNl06NOsx6pWxpa9zaVtvq4Y1s/8P3+cMv2TK0sbe+WV1h1C3uNwsrjG1u+W0rCssa1pjWtfmtKUpT4qsR07zu9vZXmxpbWFpG0s61rSko/auFcK/wCtHK3S+3jqM7hDqHULW5wrcfr5rOdLP6k81aY1r/KlK4fu8OlX+fS+idM6jO2lK6ypeLO1pj+Wss85RlhrWsa0/qQrtJSjCNZSrSMaUxrWtcKUow4dX6ZaZqWXULraVjGsq0hbRlXClMa1wpXRj3ezvFl+GKxvlpO0vFbvKVpKdca5q0rWtP6Y4f0a7pUb/ZfhuFtONzhZUuGaznZUlS1pXJ8VrX7EHR2VrC2sYWtlKkrO0jSUZU/WlftV8s7eytLa1sYWkZWllWlLSNPvHGmNMf6ORvV6vUbtdrzO+W0rGzuNlaTjd7zGFrZywxrOsa/x4/u+3mFra3jr9+sL7ebGVhZWVrZ/TllzVpZUr+an6/yIV2I4y/X/AKjeL7e8lvOw7ewsp2VaXmNlGlZRxrKVK/xUx+NG06fS8Xzr96nb3u3jC7wsJUsbO0/5dZShjX+dCFb8BFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYVjeb5eLGFtY3Ww+naRpKGe3rSuFftjSkK4clteb5d7GdtbXWw+nZxrKeS3rWuFPvhSsKY8r6V/dNz/yIf7aHVf7pvn+RP8A21B9vHT7lerWNrebnd7W0j9pTs6SrT+tVXm53W90jS9XaxtslcY/UhSWX+WL3AeFvc7reaQpeLtY2tLOuMKThSWX+WP2Yt96RY3uzsLDGljdLK0+pKws4RpG0rjjTH4+KY41+Pvi2ID5KMZxrGVKSjWmFaVpjStE0sbKNhSwjZQpZUjkpZ0jTLl+2GGiwGNadOuNtWzra3K7zrZUpSzzWUa5KU+1KfHw9K3a7y+rmsLKv16YWuMKf8ymGH5tfj4+XqAx7a4XK3lZyt7pYWlbP4hWdnSuX+Wj1jZWULWdrCzhG0tMM8qRpSssPtjX9VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMKxu18u9jCxsb1YfTs40jDPYVrXCn2xrSdMeC2u18vFjOxtr1YfTtI1jPJYVpXCv3wrWdcOGaAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UAnPTSXjUz00l41UADTy6ve7a1vP8AZ3Tu4sbrOtnOcrbJWcqfekaYVxw/fBkW3WrjdrGxne7WVhK2hnpZzhXPGn640pT4wINgPCzvt2tbeNjZW0ZznZUto0j80rCtcMcfsxJ9e6XCFjOV7phbxz2WEJVrOmOHxTAGyGpu/wCIun21L5KU52ULpPLOU4SwrT4pj9ta/b7siw6x068WdvaWV7hWN3pmtK1xjlpr8/p+5BnDX2fW+mWlhaW8b1T6dnWMZ1rGVKxzVwpjStMcK6/ZlxvNjK9yusZ420IUnKOFfila4U+ft+lQeow7lf6Xq83yx+nk7W1pZ45sc35aVx/b7sa7deus+l2F+vdaXeltKUYwxrOtaxlWnxhTGv2x+xBtRr7XrfTLGxsLad7hkvEaysqxpWWelMMcMKff5+xadc6ZZXawvE73D6Vvj9KVKVrmw+9KYU+/7EGwGF/atx7W3vNbelLKwlltK1jWmWvx8YYY/rRmgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXXK6wvNxu94trW81tLWzjOVaXi0jTGtMftSuFC+3WF2uN4vFja3mlpZWcpxrW8WkqY0pj9q1wqDBsodU6VaXywuvT6Xuyt7aVtY2lLWMaQrL5rSVK1xwpXR9tbDql16jS/UulnfZ210jY2lLOdIUhOla1+M3+GuP8AP4b4WjmLl07qXSLa42lldqXvLcu3tKRtKRySzZqV+fvT5w+Hp0Lpd8ulv02V5sMtLC5Tsp1zRrlnWdK0p8V0xdGFSOZvvTb/AGl163dIXXPG92tLaytKTjSkv4MY4Vr8V+Kr690a9dQvV77eOWFrcoWcZ5qUxnG0zZdft+v7ujCkczZdMra2V/tOpWVtdoWt2+jW0vV6jaV/WuPx8UpSv61r/Rk/hONtb3CfUr3T/n3ysa//AExpSNOcK1/q3k4RtIVhONJRr96VpjSr7SlKUpSlMKUKRobDoF2vHUuo3jqVxs7T6ttStlKeFcY5aU/p84tdZdEv93uXSp0sbfPdPrRnY2FvGE6UnKtaVpXHCvxhjTF14Ujnen9JvFhe+lWtbtKELHuJWlJW1LSsKzww+fjGtfn7Ply6Ve7K/wBytLSwpSzsb1erStc0fyxnjlr9/wBXRhSOXv13+v8AiyNzsJwlY2/07xe4UrjWNbPHDGn74w4dQmNnCM5TjCNJS/irSnzX+akUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABidK/um5/tYQp/wBtDqv903z97CdP+2qp9OuM51nO5XaUq1xrWtlGta/6EOnXGE6ThcrtGVK40rSyjStP9AZInCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHswnujx7BQnCe6PHsw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uIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSADuIaSO4hpIAO4hpI7iGkgA7iGkjuIaSAH//2Q==" />),
            category: 'common',
            attributes: {
  "contentSGP": {
    "type": "string",
    "default": "Members"
  },
  "contentDLr": {
    "type": "string",
    "default": "Annette Black"
  },
  "contentsIw": {
    "type": "string",
    "default": "Cody Fisher"
  },
  "contentMPQ": {
    "type": "string",
    "default": "Courtney Henry"
  },
  "contentCFo": {
    "type": "string",
    "default": "Kathryn Murphy"
  },
  "contentElB": {
    "type": "string",
    "default": "Theresa Webb"
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
            <legend className="text-lg font-medium text-gray-900">
                <RichText tagName="span" value={attributes.contentSGP} default="Members" onChange={ (newtext) => { setAttributes({ contentSGP: newtext }); }} /></legend>
            <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                <div className="relative flex items-start py-4">
                    <div className="min-w-0 flex-1 text-sm">
                        <label for="person-1" className="font-medium text-gray-700 select-none">
                            <RichText tagName="span" value={attributes.contentDLr} default="Annette Black" onChange={ (newtext) => { setAttributes({ contentDLr: newtext }); }} /></label>
                    </div>
                    <div className="ml-3 flex items-center h-5">
                        <input id="person-1" name="person-1" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                </div>
                <div className="relative flex items-start py-4">
                    <div className="min-w-0 flex-1 text-sm">
                        <label for="person-2" className="font-medium text-gray-700 select-none">
                            <RichText tagName="span" value={attributes.contentsIw} default="Cody Fisher" onChange={ (newtext) => { setAttributes({ contentsIw: newtext }); }} /></label>
                    </div>
                    <div className="ml-3 flex items-center h-5">
                        <input id="person-2" name="person-2" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                </div>
                <div className="relative flex items-start py-4">
                    <div className="min-w-0 flex-1 text-sm">
                        <label for="person-3" className="font-medium text-gray-700 select-none">
                            <RichText tagName="span" value={attributes.contentMPQ} default="Courtney Henry" onChange={ (newtext) => { setAttributes({ contentMPQ: newtext }); }} /></label>
                    </div>
                    <div className="ml-3 flex items-center h-5">
                        <input id="person-3" name="person-3" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                </div>
                <div className="relative flex items-start py-4">
                    <div className="min-w-0 flex-1 text-sm">
                        <label for="person-4" className="font-medium text-gray-700 select-none">
                            <RichText tagName="span" value={attributes.contentCFo} default="Kathryn Murphy" onChange={ (newtext) => { setAttributes({ contentCFo: newtext }); }} /></label>
                    </div>
                    <div className="ml-3 flex items-center h-5">
                        <input id="person-4" name="person-4" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                </div>
                <div className="relative flex items-start py-4">
                    <div className="min-w-0 flex-1 text-sm">
                        <label for="person-5" className="font-medium text-gray-700 select-none">
                            <RichText tagName="span" value={attributes.contentElB} default="Theresa Webb" onChange={ (newtext) => { setAttributes({ contentElB: newtext }); }} /></label>
                    </div>
                    <div className="ml-3 flex items-center h-5">
                        <input id="person-5" name="person-5" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                </div>
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
            <legend class="text-lg font-medium text-gray-900">
                <RichText.Content value={attributes.contentSGP} /></legend>
            <div class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                <div class="relative flex items-start py-4">
                    <div class="min-w-0 flex-1 text-sm">
                        <label for="person-1" class="font-medium text-gray-700 select-none">
                            <RichText.Content value={attributes.contentDLr} /></label>
                    </div>
                    <div class="ml-3 flex items-center h-5">
                        <input id="person-1" name="person-1" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                </div>
                <div class="relative flex items-start py-4">
                    <div class="min-w-0 flex-1 text-sm">
                        <label for="person-2" class="font-medium text-gray-700 select-none">
                            <RichText.Content value={attributes.contentsIw} /></label>
                    </div>
                    <div class="ml-3 flex items-center h-5">
                        <input id="person-2" name="person-2" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                </div>
                <div class="relative flex items-start py-4">
                    <div class="min-w-0 flex-1 text-sm">
                        <label for="person-3" class="font-medium text-gray-700 select-none">
                            <RichText.Content value={attributes.contentMPQ} /></label>
                    </div>
                    <div class="ml-3 flex items-center h-5">
                        <input id="person-3" name="person-3" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                </div>
                <div class="relative flex items-start py-4">
                    <div class="min-w-0 flex-1 text-sm">
                        <label for="person-4" class="font-medium text-gray-700 select-none">
                            <RichText.Content value={attributes.contentCFo} /></label>
                    </div>
                    <div class="ml-3 flex items-center h-5">
                        <input id="person-4" name="person-4" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                </div>
                <div class="relative flex items-start py-4">
                    <div class="min-w-0 flex-1 text-sm">
                        <label for="person-5" class="font-medium text-gray-700 select-none">
                            <RichText.Content value={attributes.contentElB} /></label>
                    </div>
                    <div class="ml-3 flex items-center h-5">
                        <input id="person-5" name="person-5" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                </div>
            </div>
        </fieldset>
    </div>
</div>
            );
            },
        });
        