
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl, ToggleControl } = wp.components;


        registerBlockType('wp/with-paragraph-on-brand-card', {
            title: 'with-paragraph-on-brand-card',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAFSBaADASIAAhEBAxEB/8QAGwABAQACAwEAAAAAAAAAAAAAAAUDBAIGBwH/xABJEAEAAQMCAggEAgYFCQgDAAAAAQIDBAUREiEGExYxQVSj0hQiUYFhcRUjMpGhsTZTorLBJDRCUnJzgtHwBzM1YnSzwvEXdeH/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBgQF/8QALxEBAAEDBAIBAgQGAwEAAAAAAAECAxETIVKREjFRQfAEIqHBQmFxgbHhIzLRM//aAAwDAQACEQMRAD8A9OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5T0g13J1bNufraqcWmqYt24naNvrP1lHB6aiiKI8aWABsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFjo/ruTpObb/W1VYtVURctzO8bfWPpKOMV0RXHjUPbgHmWwAAAAAAAAAAAAAAAAAAAAAAAAAHiID1LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD24B5ZsAAAAAAAAAAAAAAAAAAAAAAAAAB4iA9SwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9uAeWbAAAAAAAAAAAAAAAAAAAAAAAAAAeIgPUsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPbgHlmwAAAAAAAAAAAAAAAAAAAAAAAAAHiID1LAAAAAAAOy3OiN2nRP0nbzKK6eoi9wcExy23233+jT6PdH7uuTf4L9Nmmzw7zNO+8zv/wAnHXt+M1Z2gwjCjl6Tdxtd/RU101XJuU24r25TxbbT/Fva/wBGK9Ew6Mi5mUXeO5FEUxRtPdM79/4LrUZiM+/QgAOoA5W6Krtym3RG9VcxTEfWZQcRR1HQ9T0yxTfzsbqrdVXBE8dNXPaZ8Jn6SnJTVTVGaZyADQAAAADNh485ebYxqaopm9cptxVPhvO26v0g6N3NDsWbteTTei7VNO0U7bcnOblNNUUzO8iEA6AAAKfZ/Vf0f8f8L/k3V9Zx9ZT+ztvvtvumM01U1epyADQAAAAAAAAAAAAAsdHtBr1yu/TRkU2epimZ3p3333/5MV100U+VXoRxt6rg1aZqV7CruRcm1MRxRG2+8RP+LUaiYqjMAAoAADNh485ebYxqaopm9cptxVPhvO26v0g6N3NDsWbteTTei7VNO0U7bcnOblNNUUzO8iEA6AKefoGq6djTkZmL1dqJiOLrKZ5z+UpjNNVNUZpnIANAC3onRjO1i119E0WcffaK7m/zfXaPFiuumiM1TiBEHZ9S6E5+HYqvY12jKpojeaaYmmv7R4/vdYS3douRmicgA6AAAAAAAAAAAAAAAAAAAAD2DSdLxtKw6LGPbpiqIjjr251z9ZlvA8vVVNU5lsAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHC/ZtZFqq1ft03LdUbTTVG8S5h6HkXSDBt6drmViWZnq6KomnfwiYidvtu0rFEXL1NE90rHTP+lOZ/wf3KUnE/zqj7/wAnpLMzNumZ+IYlSppimNqYiI+kPoOjmAAAAAAAAAAOF61TdommqOfhP0cwEYI7gdABQAAAB7cA8s2AAAAAAAAAAAAAAAAAAAAAAAAAA8RAepYAAAAAAeldDb1Of0X+Gu84tzXZq38Ynn/Krb7PvQzE/R2hVV5ExRVcvVTVv4bTwbfvj+KJ/wBneVwZ2ViTPK7bi5H50zt/8v4LHTrKjE0GLFvamrIuxG0cp2ieKZ/fEfvfjXaJ1ptR6qmJactQ0zrOnGnZcUxNE2qqqvzo8f7VP7mPpBZw9T1/Gws/Jos42NZm9XvcinjqqnaKef4QvadfozsHFzeGOK5aify3iN4/fH8HXNEs4mr9JtXzci3RdqsXKaLUVc4iI3jfbu/0Yc6Kp3qn+GMfqM+PhdE8vKq0zHs2Ll2mN/lmqd/yr8f3tHB6M4GP0pv4d6j4jHnG663TXM7071beHf3S7Hj39Sr1S5ZuYFuzhURPDe6yJmv6bRHc14/prV/+uj/3JIu1xmImfXzkacaV0Yw9W+Fu27PxORtNuzXvMUxtttHhzmJnnz5tfM0XRtK1zEyrtvgxr29EUfNMU3d44Zjbn9fwSNcmf/yHa/C/Y/8Aiu9N6ootabVVO1NOXTMz9HWIriqiPKfzQKXSKvSqNPpnWYibHWbUbxVPz7Tt3fhu836P49rK1zEsZFEV2q69qqZ8eTvvTPT8rUtHt2sO11ldF6K5p3iOXDVHj+bo3Rb+kmD/ALz/AAl1/CYixVMTv/hJ9u66jovRnTptZWbZos24maYp3qmKpn6xHOdtv4tTpJ0c027o9zUNNt0Wq7dHWxNuflro7+7u7ue8NzpjomVrFjGqw5pmuzVVvRVO28Vbc9/w2Z8qz+iuhd7Hv10zVbxJtzPhNUxttH3nZ89FyYiiqK5mc+lYuz2g06bbv5GLbt0U0U111zXMfSZ8fFp42g6JrOoTnYsUzgW6Itxbt0zRFdyJnffunumnu7230n/oTd/3dr+9Sw9AMi3c0S5YiY6yzdnijx2nnE/z/cRVci1NyKpznAyWsDotqd69gY9izN6zvxRbiaao2nbeJ8ef5o2n9ELfaPIxsuqqvEsUxcp57TcirfaJ2/Kd/wAm70Y6OZ2ma7fyMnaLFNNVNuviiZubz37eHL6reLm2L3SbOxqK6ZuW8e1Ex+MTXM/u44Wq7VbmqLdWYwNKvA6N06tYw7dNqzn2a6blFNveJ3ieLaZ7p7u6ebPr+NZzNQ0nHybcXLVd6vipnx2omf8ABLvdGc2vphTqEV0fC9dTe4uL5uW08O35x+5X1m5Ta1bRqq52iciqn7zRMR/GWJmPKnxqztP9pwOo9ONNwtOv4kYVimzFymqatpnntMfVV1rQtOs9FZyMXDpjJmi1w1RMzMzNVMfX8W10x0LM1ivErwuCZt8VNcVVbbRO3P8AhLe1+qnB6OcVXzU49ViZ/GKblH/J1i/M024id879mE+x0f0PQtNpyNXpou1xtFdy5vVHFPhTTH/Ldwz+j2iZWJZ1XBimjHtzF25w78Ny3E/NG3fE7RPc3ulenXta0S3Tp803KouU3aY4oiK42mOU93jugX+ikYHR67lZuddt3aLVVU2qao4OLwp+87QluvyiKqq5iqZ9f6HbuLTv0Fx7R+juo322nbq9vp39zyzVqsOrU79WnRtizV+rjaY5bfjzei41mvM6EW7GPEVXLmFwUxvtvVw7bfveZ5WNexMivHyKJou252qpmd9nf8DTEVVb7pL0W70e0GjSaL+Tj0WaKaKa67kVTE7cpnx8e778nKdB0DWNL49PtW6YqiYt3rcTE0z+MeP5SdJ/6E3f93a/vUsH/Z7/AOBXv/U1f3aXy5r0pueU5iVaHRno1hTps6nq9HFExNVNFUzFNFMeM/Xun7N+nSOjvSDEu/o63Fm5b5cdFM0TTPhM0z3x/wD1U0XKnI0CmrD4Kr1qmq3FNU8orp3iInb7T+UsOFkdI8iK5ycPCxeGdoiuqapq/dJXduTVVVnExPz+31EvSej+n5egXbdzFt/HWutsV1xM8rlMzET3/lLh0R6P6flaHRk52NTeru11TTMzPKmJ22/fE/vZ+iGoTf1bV8euu3VNV6b1PV/szz2qmPw/ZbuqZdvRa9Hw7Py0V5HDMeHDttP8a4n7N113fKbcTOZ3/TIjdHuj2Jc1fVrWbjRctY92KLUVTPdMzP8ALb97c03o1pGVkZeZXj8VmL1Vu1ZiqeGmKJ4ZnlzmZmJn7r2VNvTcXPzojeqYm9V+MxRERH9mHWeh1vVaNLnIxMnGvWbldU1WLu/FTVH/AJo7t+U+KatddNVcVY9R/wCjJdwuimp492mmbWBfonh+eeqqpn68MztLoVdE03are9MzE7bxO8T93rePE6thV0atpcWZ326u5VTcifxiYeZfC489Ifg6a/8AJpy+qirf/Q49t9/yfV+Duf8AaJmdv55/VJdtsYHRTSMO3XmXrGVdnaKquLrN5/CmO6PsxdJujmmxo1Wp6ZT1fDTFe1MzNNymdufPu793Ysq3e0vCt29D0u1dnfhmiKoo4Y+s797H0k6yeiuX10Uxc6mOOKe7feN9vwfJReq86aomd5+f2+i4a2odHuj2NifEZOPRYs2piquqKqucfTv35yx5fR/RdV0ib+m2bdE1UTNm7a3jeY8Jj842nfm59Ov6N1/7yj+b70K/ota/2q/5ykVVxai75TnIn9F+jmn06RRqOpW6Ltdyma/1k/Lbo/l3c95WNAtaLNzIytEqp4a9qLlNO8RExvtO093f+THptEap0LtWLNcUzcxepifCKojh5/eGv0O0PL0e3lVZvBFV6aYimmd9op35/wAS7V5RXNVW+fQ6f0v/AKT5v+1T/dh2LL0TTaOhdObRiURkTi26+s3nfimI3nvdd6X/ANJ83/ap/uw7zZxp1LoVZxrNUcVzDoppme7iimO/7w+q7XNFu1OcekQehOkafqGm37ubi03a6b3DEzM8o2hU0jo7pORg3aruHRNXX3qIqmZ5RFdUR4/SIbPRDScnSdMuWsyKYuXLs18NM77RtEf4NrQo30+7H1yb/wD7lT5b96qaqppq2zCxCbp+l9FsuLuDi27N+5Z5XJmZ4/pvxeP25JGB0Ssz0mysa/VVXh49NNcRvtNcVd0TMflP7m90V6N5uk6tfyMqqjq4om3RNM78e8xz28O5YxMy1c6T6hjUzT1lFi1G3jO01TP9+GqrtVE1RbqmYwNOvA6N06tYw7dNqzn2a6blFNveJ3ieLaZ7p7u6ebD03sU5VGm2K7lNqm5kcNVdUxEUxtznmwXujObX0wp1CK6PheupvcXF83LaeHb84/cqa/iWM7P0rHyoiq1VermaZ/0tqJnb+CRVFNdNUVZ2z/TYT6cXohp82caubF65e+WKpqm5Mz3bzMcqf4MGraBouk52JnX6Zowaq5t3bU8VUbzTVMTHj3wv5VediX8fG0rTbNWPVtx3OOKKbcb/AOr+ST/2hf8AgVn/ANTT/dqLVdVVdMeU7/z+8Czrdem0adM6vETi8Ub7xM8/Du5uuaH0c0yxpc6pqlMV010zdppqmeGijw5R3zMLPSrByNS0Kuzh0dZcmqmqKd4jeN/xZNLyLtzoxj3MCm3Xft2KaIoqnaOOmNppn6c4liiqabX5Z9zv9/QS69D0HX9PuXdLt02blMzTTXTTNG1X0mmfBq9G+jOB+i/j9Ts13ru9X6vnMUcMzExtHfPJaw8jpDetVXMrGwcThn9muqapmPrynZo6DOrxhXczFvYmVj3rly7TZ+amYnineKZnu3n6umpciiaYq+sfX9MjVycDotqmFcqx7lnByI3pjjr6uaao8JpmdtkbB6R6xew7WjYFmzFVVHVUVW4mK/z332ifxd5t2qdY0+Y1bTIszvNM27kxVMfjEx3fwl570doyqOklEaXFq7comuKKru/Bw7TG87c+52sVRVRVFW/jvvOY7SXfMKqrQNBirWM3ra6N5mqqreZme6mnfnLyqurirqq2iN532jwX+mVepTqtujU+piqm1HVxZmeDbeefPx+v5Q6++n8Ja8aZrmczUkgD6wAAAAAAAAAAAAAAAAAAAB7cA8s20dVysjGt48YsWusvX6bW9yJmI3ifpP4PtF/JxbNy9ql3Gi1TttVapqjbntz3mfwa3SG112PixVYu3rdOTTVcpt0zVPDtO/c08jHx69IzLWBgZVuqvg4qa7VccW1Ud2/3VFSnV8G5bvVWb/HNmniqjhq7vrHLnH5OGLrGNd0yjNvVxaidoqiYnlV9I5c/sZNiurWbVdFE8M41yiatuXfG0TKXFrIq03Taupy7c4dU0XaaLfzx8u3FTExzj/mCz+lMH4X4n4imLPHwTVMTyq+kx4fdlozLFeHOXTXPURTNU1TTMco7+W2/ghxi1XI66i3mXOszLM1TfoiJmKe+rhiI2jb6uxVUxVTNNUb0zG0xPiKxTlWI6ne5H6//ALvaP2uW/wDJhx9Vwcm/1FnIpquTvtG0xFW3ftPdP2SMLFv5NWRjVT/mNm5jWap8aqt9p+1PDDJb63Jt6biU4d+zXi3KKrlVdG1NMUxtO0+O/wCBhFec7GjFnKm7HU01cM1bT378P83GNRw5zPhIvb39+GaIpnlO2/0Q785FGk39O+CyarsX5mKqbczTNPWcW+6vp1qqjL1Cuu3NPHfiaZmNuKOGO76+JgZ8vNxsKmmrJuxRxTtTG0zM/lEc2OvVMG3ZtXqsinq72/BVETPFt393i0tWs3qdTsZdM5MWotVW5qx6IqqonfffaYnlLDiYlVOTgXKbOTwTfvXKpvUxvTvT3ztHy7z4GBvxremTwbZVPzTt+zPLntz5fL99mTJ1TBxL3VZF+KK9omY2mdt/rtHL7pt/Guzpes0xYrmu7fqmiIoneuNqdpj6+LHqk5ld3OszRlRTXb2tU2LMTTc+XnxVbfw/cYG7qWfdxreXXZv26pt27dVNHBPLerbffx3VXWcnFyasPJiLF2aqsTHpiOCd5mJ5x+cOzEqAIAAAAAAAAAAAAAAAAAAAAPLemf8ASnM/4P7lKTif51R9/wCSt0z/AKU5n/B/cpScT/OqPv8Ayejsf/Kn+kOcqYDqwraLpNGqY+ZPWVUXbUU9XzjhmZ35T+5io0+n9EZWTd6ym/YvRb4PD8d4+rnp2RTZ0fUoi7TRembM244tqpmKt+X5K1eq4d/SIyapopyJv26r9qJjeqaZjeYj8YfHXXciucesx+3+WoiMId7R9RsY3xF3FrptRG8zvG8R+Md8N+5oNzFu4NdyzXfou7RdtxXTTMVT/oxO7cuV49jM1DUas/HvWcizVTRbiveuqZiNomnw27nCzex66tFyfirFNNiIt3Kaq4iqmfrt9OTM3rkxn9p+PRiGC1o1MaVlZleLXVXx1Rbom9ERbpjf5pnx2nw/BL/Rmb8bXh9RPX0RxVU8Uco233332b+Zfs1aNlW6btE11ahVXFMVRvNO3ft9Pxb1/Jo/QH6SmZ+Jv2IxOfjtM8U/eIWLlynf5nBiHXsTDyM25Vbxbc3K6aZrmImO6P8A7bnZ/VePg+Dq323/AG6dv377Gh3qLFWdVVdptzOHcpomatt6uW0R+LaoybcYOiUdfRE279VVyOOPl+eNpn6ct3S5cuRVin72ykRCfjaVn5dVymxjVVTaq4a95inafpz8WretXLF2q1domiuidqqZ8HbK8rFybWTYt14NVdOVVc2v3OGmqJ/0omO9A1y/GTqt25Fdq5PKJrtRMU1TEeG5avV11YmMExEJ4D6URo7gjuB0AFAAAAHtwDyzYAAAAAAAAAAAAAAAAAAAAAAAAADxEB6lgAAAAABnwszIwMqnJxLnV3qN9qtonvjbunkz6lq+fqs2/j7/AFvVb8HyU07b7b90R9IaIz4UzPljcVcPpFq+Di0YuLl8Fmjfhp6uidt5375jfxaeDn5en5HxGHfqtXNtt457x+MTylrCadG+3v2LVzpXrldyiuc2Ymjuim3TEd23ONuf3Yu0mr/G/GfF/wCUTb6rj6uj9nffbbbbvShnRtx/DHQ2r+o5eRqMahevcWTFVNUV8MRzp225bbeEM2o63qWqWqLWdk9bRRVxUxwU07T9ohPGvCnacehcsdLdasY8WYyaa6YjaJroiZiPz8fu1ujdyi10gwrl2umiim5zqqnaI5T4pgzpUYmKYxkd96X67cxL+Dd0nOtzVtciuLdVNcTHy7bxz/F1TVNd1HVaYozL/FbpneKKaYpp3+3f900Ytfh6LcRGMzH1MqeV0g1XLwZwsjK48eYiJo6umOUTExziN/CGphZuVgZEX8O9VauRG29PjH0mPFrjrFFMRiI2F270v1u7a6v4qKN42mqi3TEz99uX2ScfMycXKjKsXq6L8TvxxPPfx3+rAJTaopjEQLd/pZrd+mimcvh4Zir5KKY3mJ358v4dzU1DW9S1Km3Tm5M3It1cVG1FNO0/XlEJ4Rat07xTAt9rNb+Hmz8bO0xtx8FPFt+e38e9r5XSDVcvCnDyMvjsTERNPV0xvtMTHOI38ITBIs243imOjKrp3SLVdNtRZxsmeqjuorpiqI/LfuYtT1rUNV4Yzcia6KZ3poiIppifyhPF0qIq8sRkVdN6RappliLGLkR1MTMxRXTFUR+X0aOblXs7LuZWRVE3bk71TEbMAsUUxPlEbinldINVy8GcLIyuPHmIiaOrpjlExMc4jfwhx07XdT0yxVYwcnqrdVXHMdXTVz2iPGJ+kJwmlRjxxGBvYGr5+nXq7uHk1W6rk71xtExV+cTybWb0o1jNs1WbuXw26o2qpt0xTv8AeOaOE2qJnymIyNnT9Qy9NyJv4V3qrk0zTvwxPL8p/Jk1HVs/U7luvOyJuVW42onhinb90Q0hrwpz5Y3FXM6R6vnYteNlZnHZubcVPV0RvtO/fEb+DX07Vc/S66qsHJqtcX7UbRMT9p5NIZi3REeMRGBZy+lOs5dqq1cy5ot1RtVFumKd/vHNGBaaKaIxTGBZt9Ktbt48Wac6qaYjaJqopmqI/OY3Yr/SLV8jCnDvZk12KqYpmmaKd5iPx23/AIpYzo24nPjHQp5+v6rqONOPmZXWWpmJ4erpjnH5QYXSDVcDFjGxMrq7MbzFPV0z39/OY3TBdKjHj4xgUdL1vUdKiqnCyJpoqneaKoiqmZ+u09zZnpXrnXVXYzpiqqNturpmIj8ImEUJtW5nM0wM2ZlX83KrycqvjvXOdVW0Rvy27obum6/qel2upxMja1vM8FVMVRE/hv3Jgs0UzHjMbCzT0q1ymuuuM+reud53t0T+7eOX2dv6NanjT0cpnKzbFN+uq7VXFVymmd5qme77vNxxu/haLlOI2MrdvpZrdvHizGZvtG0V1UUzVEfnt/NMsZuVj5kZlm/XTkcU1dZvvMzPfv8AVrjrFuinOIjcW7/SzW79NFM5fDwzFXyUUxvMTvz5fw7mtm69qmf1XxWXVVNmrjtzTTTRNM/XeIhNEizbj1TAtXelWt3bM2qs2dp75popiZ+8Q1tR13U9TsU2M7J623TVxxHV0089pjwiPrKcLFq3E5imOhaw+lWsYePTYt5MVW6I4aYroido/Nq6frWo6bXXVh5NVEXJ4qqZiJpmfylPDSt77RuK2f0l1fULNVm/lTFqrlVRRTFMT+e3P7NfTtY1DS+KMHJqt01TvVTtFUT9paIRaoiPHEYFfO6Tavn2arN/LmLVcbVUUUxTv945p+Hl5GDlUZOJcm3do/ZqiIn+bALFuimPGI2GzqGoZWpZPxGbdm5c24YnaI2j6bQ1gaiIiMQACgAAAAAAAAAAAAAAAAAAAD24cLF63kWLd6zVFVu5TFVMx4xLm8t6bAAAAHyqIqpmme6Y2l9AYsbGs4lrqse3FFG8zPOZ3mfGZnvZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5b0z/pTmf8H9ylJxP86o+/8AJS6W3rd/pNm3LVUVU8VNO8fWKYif4xKZi1RTk0TPdvs9JZ2tU/0hiVQB0cwAAABs5edlZkW6cm7NdNuNqI2iIj7Q1hJiJnIAKAAAPlVUU0zVVO0QCPHcEdwOgAoAAAA9uAeWbAAAAAAAAAAAAAAAAAAAAAAAAAAeIgPUsAAAAAAAs1YWm4WPjTn/ABddeTbi5xWtoppifz75YLmJj27OfNmKsmizNHBfpqiIpiZ8Y8fo5xciUTRRt6Hqdy1RcoxKppr22+aInn+G+7jY0bUcinis401U7zTvxUxzidp75XUp+RoDJkWLuNfqs36JouUcpplzqw8ii9ZtVW9q79NNVuN4+aKu5rMKwDes6PqF+a4tY01dXcm3V80cqo7472vlYt/DvTZybc264jfafokVUzOIlGEW7Gk8Gg3M29jVXblW80bXYpiijh34/wAefg06tG1GnG+Iqxa4tRTxTO8bxH1272YuUz9RoDdtaVnXsX4q3YmbPDNXHxREbR3+LXxsa/l3os41ublyfCGvKPkYhuX9Lzse/as3seaa708NvnExVP577MVGHkV3b9um3vXYpqquRvHyxT3nlE75GAbtelZ1GJ8VXYmLHDFfHxR3T3eLHh6fl50Vzi2ZucG3FtMRtv3d/wCR5U4zkaw2sjTczGyLdi9j1U3Ln7FMbTxflsyX9H1DHqtxexpp62qKKPmiYmqe6N9+X3POn5GiNmnAyqviOGzM/Df99zj5f+tpcrOmZt/qeqsVVdfFU0bTHOInaZ/D7nlT8jUFfB0e5TqtrG1GxVTTcoqqjarlO0T3TDUw9Lzs23NzFx5roidt94iN/v3pqU/I0xVwdDycvGyrkU1U3LM8NNE7RxVeMTvPLZ8ydEyLGlWs2Y34t5uU7x8seE9/PdNSjOMiWN6vSNQoxfia8WuLUU8UzvG8R9du98jSc+cWcqMeepijj4+KNuH96+dPyNIUdK0m7qVORVRyi1bmaecfNX4U858fq4WNI1DIquU2caauqqmiueKIiKo743mef2POmJmMjRHO9auWLtVq9RNFdE7TTPfDbt6PqN3GjIt4tU25p4oneN5j6xG+8rNURvMjRFS/ot+zpNnO234omqunePlp8J7+e7Fc0bUbeNORXi1xbinimd43iPrMb7pFymfqNAbNeBlW8ujFrtTF65tw07xO+/dz7nCnFvV5fwtNG97jmjh3jv8Az7l8o+RhGejEv3Kr1NFvebFM1XI3j5YjvbVGhancoiujEqmmaYqieKnnE8/qTXTHuROHOi1crvU2aaZ6yqrhimeXPfbZS1LQ8nDv2bdumq7F2IinbbeavGNt/wCJNcROJkShuZml5uDRFeVjzRRVO0VbxMb/AGYcTEv5l7qca1NyvbfaPoeUTGc7DCK2TpFzF0mK79iunLqyot0xE770zTvG23fzYMjRtRxrUXb2NNNEzEb8UTtM92+08ki5TP1GgKmpaLkYNGPVwzXF2mmJ22mYuTv8sRE8+7vYMvSs/Dsxeyceqi3vtxbxO357TyIrpn1I0gG1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUcDXdU0611WHmV0W/9WYiqI/LeJ2bfa7XvP+jb9qGOU2bczmaY6Fztdr3n/Rt+07Xa95/0bftQw0LXGOjK52u17z/o2/adrte8/wCjb9qGGha4x0ZXO12vef8ARt+07Xa95/0bftQw0LXGOjK52u17z/o2/adrte8/6Nv2oYaFrjHRlc7Xa95/0bftO12vef8ARt+1DDQtcY6Mrna7XvP+jb9p2u17z/o2/ahhoWuMdGVztdr3n/Rt+07Xa95/0bftQw0LXGOjK52u17z/AKNv2na7XvP+jb9qGGha4x0ZXO12vef9G37Ttdr3n/Rt+1DDQtcY6Mrna7XvP+jb9p2u17z/AKNv2oYaFrjHRlc7Xa95/wBG37Ttdr3n/Rt+1DDQtcY6Mrna7XvP+jb9p2u17z/o2/ahhoWuMdGVztdr3n/Rt+07Xa95/wBG37UMNC1xjoyudrte8/6Nv2na7XvP+jb9qGGha4x0ZXO12vef9G37Ttdr3n/Rt+1DDQtcY6Mrna7XvP8Ao2/adrte8/6Nv2oYaFrjHRlc7Xa95/0bftO12vef9G37UMNC1xjoyudrte8/6Nv2na7XvP8Ao2/ahhoWuMdGVztdr3n/AEbftY7/AEo1u/aqtXM+rhqjaeGimmf3xESjhoWo/hjoyd/eA6jLTkX6YiIuTtH4RJ8Vkf1n9mGITCYZfisj+s/swfFZH9Z/ZhiDBhl+KyP6z+zB8Vkf1n9mGIMGGX4rI/rP7MHxWR/Wf2YYgwYZfisj+s/swfFZH9Z/ZhiDBhl+KyP6z+zB8Vkf1n9mGIMGGX4rI/rP7MONd67cjauuZj6dzgBgAVQAAAAAHtwDyzYAAAAAAAAAAAAAAAAAAAAAAAAADxEB6lgAAAAAB2XDt6vaxbFOFNrOw7lETwVxTNNMz30zvO8bPuTTi2LetxjU0zZpqx5mmmfl34ucR993WoqqiJiJmInv2nvfHDS3zn7yjt9rHrv9JKNStZdqrGubcMxc5z8u3Dt9U3Vaqo0OzTEztOVdmY+8sNOvXaZi7Th4sZUU8PXxR83dtv8ATdImZmd5neZSi3VmJn6Cv0kmas6xVVO9VWNRMz9Z2UIwcjLy9HzLFNNVi3ZsxXXxRtTNM84dYN52235NzbnERE+h2i/i5OZpmoWcXnX+krkzRxbcUbd38p+yfrkTZxdPxL1UVZNm1PWRE78MTPyx9oT/AIyuNO+Cimngi913F477bNdKLcxO4s2KqKOj2PXcjeinUImqPrHDzVKMbJt9I69UuXKfgdpr67jjhmiaeUfy/c6kb8tibWc7+xW1Gqf0BpVNO8UTN6eHf/z8n3Qf1lrOxrVUU5F+zta3nbi+tP3SBrw/Lj795HZLNFem4ODYz5i3cnOpu00TVHyUR3z+EMlGnZWNlazk3qIptXLF7gnij5t53jb7OrzO87ybzPixpT8irrtUzTp1MzPDGFbmI+neadVNOg6tNMzE/qY5f7UpQ34fl8R2nTL1u3a0Oq/Mc4v001VTttO+0f8AL7uGbF3C0rKj9H04cV10TE1ZU1zVVE770xz/AMHWTeZ75Y0d85+85Hcbl+xavWKto4NWria4j/VmiKdp/wCKrdrb3qNWnBxqLV6MfDixXarq4etjaJq4fx5uriRYx9R27HxrePqWn8NN2xVVRdmcWu7xxb5Tzj6bsWLTTl6Lgxj4HxdVmaoqiMibc26t99/v3urTO87yRMx3SujPz97/APo7TV1mdk61Yt02/iLlFvaii5xRPD37TOzVi3NehYF3g47eJfq6+P8AVjihAFi1j1P3jA7rd3t6hezrWBbqt1UTPxVWVMUVU7fTn+7ZB1qqr4DSqd54Yx99vx3SN52235CUWfGYnIrdHqZuX8yzRt1l7EuUURM7b1TtybNzByszRsTGxKeK5i3LlF+1FcRNNXFymf4oBvP1amiZnMSKvSK5TXqNNMVxcrt2qaLtcTvxVx3q+Lj3Mm3i1ZdiKaaLERRnY9/h4KYjumPr9XUzedtt+STazTERPoXLlicno7hzaqibdi9XF2v/AFIme/Zbs4dNjMyKvha5pmzMRl3Mia5u8u7b/rudIN52237kqszO2R2fCvW6tNs6tXMdbgWq7PPxq5RR9tqpRdIu029Yxbl2raOtjeqZ+vjL5e1Cu5gW8K3at2rVMxVVw773Kttt5aa029pz9R2e3puTiV6xfv0RTRXZuxRPFHzRM77x/wBeLJmYGdk5mm38bnat2re9XFEdXPfM7fk6pMzPfLZzc25mV0V10008Fum3tT4xDOlVnORk1i7avatk3LExNuq5O0x3T+LsO22rY2VxRTayMSLVm7M8ormOTqI3VbzERkXfhcjTdDz6M+OCb9VEWqJriZqmJ3meTFodNV7D1HEsVRTk3rdPVxM7cURPzR94R99+8NOcTmfY7Rbwr1jR8LGzr02ZnOid4r5244Z2jfwnfn92e9ixY0/Vd8KqxxUT89d+a6ru0/tbf9d7qE853kmZnvlmbMz9R2iiIt52i593h+FjHoszcmY2ivarlL7mUXMTBz5q02ixTdjaq5VlTV1k78piOe8+Pg6sbz9e40d/Yz5mHewrlNu/ERVXRFcbTE8pYAdoz9VAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFvG0fGvZ1mmq7cpxrmPTemreN4mZ4dt9tv2mCjSK6saiJ3pya71dG1UxFEUUR81Uz+Evn6UiNCpwaaaovRc/b8ODfi23+vE269etzqVq/RbuUWYtVUV0xtvFVUzNVUeHft3/R886kIl5mDcxIt1VXLV23diZouWqt6Z274ZqNIyKsem71timuu31lFmqvauqn6xD7q2fTmRZoovX7sW996rtNNPOfpEfl9XO7l6fkWbVeRbyJv2rEWoop24KpiNonfvbzXiBijSrtWJVfovY9U02+tqtU171xT9Zju/iyV6JkUXqbU38aa5jiqiK5+Snbfiq5cobsa1iU4Nyzbi/TFeNNqLUW6Iopq22md++WC3rFu3rV7MppuxavWotTtEcdPyxG8eHfDHlcnOwn5mFcxJtzVXbuW7kb0XLdW9NXhLNRpd2vFm/Rfx5qi3N2bUXN64p+u3d/F91bPpzOpppu37sW4n5rsU085+kR+X1b9Gs4tGnVWKIvU8WNNmbdNunh45jbi3753amqvxj5GDK0WflqxrlnebFNyLM1/PV8u8zEfvYLej5FyxRXFyxFyujrKLM1/rKqfrENv9KYFN+1mUUZHxNqxFummYjgmrh4d5nffZxs6ph0V4+XVRf+Lx7PVU0RtwVTETETM9/d4bMxNyIGlTpt+rJsWIqt8V6z11M7ztw8Mzz5d/Jyz9PoxMbGvU5Nu5N6jimmJnfx5xy7uX725Y1PAirGyLtORF+xj9Rw0xE0zymInff6S0cvJsZGDiURFyL9inq6o2jhmneZiYnfffm1E1zMZGzZ0q1NrTr1eRRVGTdimq3EzvtxRHLl4b83DM0e9armbFdq9TN7qopt171U1T3RL7j5+NRjYNN2LsXMO/xxwxExVTNUTPj38n3F1WjGryLlNFVVVeTRepidttomZmJ/Hmn/JE/fyNfM027iWutm7Yu0RXwVTar34avpLli6VdyMWnJnIx7NuquaIm7XNO8/TubOq6rby8abVq/lXOK5xbXaaKYpj6cucy+2qsGdDxqM2q9H6+uY6raZ7o3id58fqeVfjGRrTpN+jHvXr1yzaizcqtzTXVMTNURvtHLnvvyfb2j5Fm3VVVex5qt7Tdt0171W4nxmNvx8N3PP1WnLt1TTRVTcnKm9HdtFPDERH58mTI1HCmczIx6L8ZGXRwVU17cFG8xNW09893Izc2HHJ0WaMyLFjJs1Uxa6yuuqraKI2jnPLu58mH9EZHXzb6yxFuLfW9dx/q+Hu33/Pl3N21rOPbyeup6+ibuPFq7NNNO9FURG00798cu6dnG7q9i/VcsX68m7j3LUUTXMUxXFUVbxMRHLbfw3SJuDFj6LNd2/bvZVimKLHXUV01b01x9e7u+vi4V6ZVduWKLUW7cTjReruVXJmnbeY4p5cvy5vuPl6fj5V2m3bvxj3cebNVU7TXMz/pbb7fbdkjU8Wrgs3KL02JxIsVzERxRMVTMTHPn4LmvIw06NkVX5txex+DqpvRd4/kmmJiJnfbw3a2bh3MK5RTXXbuRXRFdFdud6aon/6b1Wp41FirGsU3ps041dqiqqI4pqqqiqZnnyjk0svJov42JbpiqJsW5pq38Z4pnl+9qma87jNOkZEY83OssdZFvrZs8f6yKe/fb8ubJqeFj4eFi9XXRcvXKYrqqiuZ3id+6Nu7l397LVqeHNyvN4L/AMZXZ6vh5cEVcPDxb9/d4bNHPyqMmnFiiKo6mxTaq38ZiZ7vw5pT5zMZHK3pl+5dx7dNdva/bm7TXvPDERvvvO3fGznOkZEY83OssdZFvrZs8f6yKe/fb8ubbt5E4/Rues2i7cmq3Y+aN+CqY4+X0+X+LjVqeHNyvN4L/wAZXZ6vh5cEVcPDxb9/d4bJ5V/QaUadem/Ta4rfFNjr++duHh4vp37GVp9eLjWb1y9Zmb1NNVNumqZq4ZjfeY2b1GpYEU0Xq6cj4iMX4fhiI4d+HbffdPz8mjJrsTbiqOrsUW54vrTG0tUzXM7ja07SKsmrGuXrtmi3eubRRVXtXXTE7Tt/F8p0iu/fuU2b+PR+tqot27lzaqvafCP+bJiZ+Dw4VzLpyOtw52iLcRMVxFW8d88tm3h65iWJpq4b9uYvV11xRbonrYmd43mecbQxVVczOBPu6XFGBi36ci3Ny/VNPVzO207xH08N+e7DmadcxbFN7rrF61Nc0TVZr4oirv2nk2qNQw6rWLGRauVTj36q4o2iaa6apiZ359/Jnz9Vw8vFt41yvKuURfi5VVNFFMxTtMbREcvFYqriRO0nFt5upWca7NUUVzO80zz7pltXNMt3MKL2NZyrVybtNqmi/MfrJn/VnaGtpmVawtVt5NUVzat1TyiI4ttpiGzZ1ieosTlTdu5GNei5brmd+Kmf2qZmf4TzWvz8swMGRpN6zFExex7sVXOqmbdzeKKvpO+2zlXo2RxWos3bGRF251cVWq94irv2nl9ObdyNZx7ldviryci1F6LlVu7TRERTHhy75Za+kFimLHBORem3f6yZuUU0/LNM07Rt+bPld+BPytNoxdKnI66zer6+LcV2q+KmI4ZmY/PlDFiaZdyrMXeusWaKq+Cjra+Hjn6RyZMrJwY0ucPD+ImZvxdmq7ERy2mNuU/jBj5eFXh2LGdF+Ph7k1UTaiJ4onaZid5/DvazVgYLmnZFvqoucNNV27VaimZ5xVExE7/vZJ0m7TYyL1y/j0U2LtVqeKqYmqqnwjlz3bn6Vw8mqm5m0X6a7eTVeoi1ETExO3yzvMfTvaudn2sjHu26Ka4mvLrvxvEfs1RG0fmRNc7DNpWDg3tMzc3O+JmMaq3FNNmqmJnimY8Ylt5PRma8uKcG/Tbszi05M/FzwVW6ZnbaqYjbltu46BmZGHpGdTh3bdrIvV0dXXVftUbcPfvFdUT3T9GTFry+r1Kc7IsXr2XY6umv42zO07+Pz9zjVVXFUzE/eysFehV3cPFjG+Hm7VTfq6ym9NUX+rqiNqY25fh9fwa2PoeRes496q/jWbeRRXcibtzh4aaZ2mZ5eMzy23Vce9dxrOixaqxuswLlyq7/AJZY2qpqqido+f6bw3KMuxGrXLsU2LePRjU2MWqMrHqrs7eO017d+7M3a49T8/5n/Uqhdnc342cebuNFEWYvzkdZ+q6ue6rfb/Bwv6Bl2acirrMe5TZs034m3XxRcomduKnlziPHfZ2PMzrOZkXLd6aasW9iUWLlc5mPFzipqmYq2ivbx/BpaZYxrXSGm1h0Uxg/C1U5VdeTbq4qJiYmqZpqmI57co+n4kXq8Zkw69nYF3B6iL1VE1X7NN6Ipmd6Ynu3/F2DJ6P6X8dn4GNXm038Sz1vW3KqZtz8sVbTtETHen6vZv6pqd7Mt3MSLVyf1cTl2qZiiI2p3iat4naI5KOvZ2p6lk36MbMs0YNzaKbVWbYpnujffav67+LVVVVXjvj5/QTJ6OZsYk3usxuti11043WfreD68O3+LaytIx7Wn1XrVjimNPsX5qm7MTTXXO0zEbc9/pyUpycfrqtSiLf6Sqx+p4fjcfquLh4eLfj37vDZjuZW+DVatzYi78FYsUzOXY247dW8z+33MatyZjIkZHRzLx7NVdzIxOO3wzetRd3rsxV41Rt3c/Ddhv6Jl49WfF2q1T8Bw9bO87Txfs8PLx+yrrVvT8qjKz6aInMvUxVNE5tmaLcx+1McNe9XdyjZt6pcou4mBp+XNFF+uKbmfNORbpqmKI4afmqmKZmYnfbdqL1e2fv1/v8AQw6YM2Xaps5d23RMTRTVPDPHTXy8OdMzEzt9GF9kTmMoAKAAAAAAPbgHlmwAAAAAAAAAAAAAAAAAAAAAAAAAHiID1LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD24B5ZsAAAAAAAAAAAAAAAAAAAAAAAAAB4iA9SwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9uAeWbAAAAAAAAAAAAAAAAAAAAAAAAAAeIgPUsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPbgHlmwAAAAAAAAAAAAAAAAAAAAAAAAAHiI2dRwrun513Fv0zFduqY5+MeE/drPURMTGYYAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGzp2Fd1DOtYtimZruVRHLwjxn7JMxEZkeygPLtgAAAAAAAAAAAAAAAAAAAAAAAAANPUNKwNSiIzsai7w90zvEx945tDsjoPkPWue5bHSm7cpjEVTH9xE7I6D5D1rnuOyOg+Q9a57lsXXu8p7MInZHQfIetc9x2R0HyHrXPcthr3eU9mETsjoPkPWue47I6D5D1rnuWw17vKezCJ2R0HyHrXPcdkdB8h61z3LYa93lPZhE7I6D5D1rnuOyOg+Q9a57lsNe7ynswidkdB8h61z3HZHQfIetc9y2Gvd5T2YROyOg+Q9a57jsjoPkPWue5bDXu8p7MInZHQfIetc9x2R0HyHrXPcthr3eU9mETsjoPkPWue47I6D5D1rnuWw17vKezCJ2R0HyHrXPcdkdB8h61z3LYa93lPZhE7I6D5D1rnuOyOg+Q9a57lsNe7ynswidkdB8h61z3HZHQfIetc9y2Gvd5T2YROyOg+Q9a57jsjoPkPWue5bDXu8p7MInZHQfIetc9x2R0HyHrXPcthr3eU9mETsjoPkPWue47I6D5D1rnuWw17vKezCJ2R0HyHrXPcdkdB8h61z3LYa93lPZhE7I6D5D1rnuOyOg+Q9a57lsNe7ynswidkdB8h61z3HZHQfIetc9y2Gvd5T2YROyOg+Q9a57jsjoPkPWue5bDXu8p7MInZHQfIetc9x2R0HyHrXPcthr3eU9mETsjoPkPWue47I6D5D1rnuWw17vKezCJ2R0HyHrXPcdkdB8h61z3LYa93lPZhE7I6D5D1rnuOyOg+Q9a57lsNe7ynswidkdB8h61z3HZHQfIetc9y2Gvd5T2YROyOg+Q9a57jsjoPkPWue5bDXu8p7MInZHQfIetc9x2R0HyHrXPcthr3eU9mETsjoPkPWue47I6D5D1rnuWw17vKezCJ2R0HyHrXPcdkdB8h61z3LYa93lPZhE7I6D5D1rnuOyOg+Q9a57lsNe7ynswidkdB8h61z3HZHQfIetc9y2Gvd5T2YROyOg+Q9a57jsjoPkPWue5bDXu8p7MInZHQfIetc9x2R0HyHrXPcthr3eU9mETsjoPkPWue47I6D5D1rnuWw17vKezCJ2R0HyHrXPcdkdB8h61z3LYa93lPZhE7I6D5D1rnuOyOg+Q9a57lsNe7ynswidkdB8h61z3HZHQfIetc9y2Gvd5T2YROyOg+Q9a57jsjoPkPWue5bDXu8p7MInZHQfIetc9x2R0HyHrXPcthr3eU9mETsjoPkPWue47I6D5D1rnuWw17vKezCJ2R0HyHrXPcdkdB8h61z3LYa93lPZhE7I6D5D1rnuOyOg+Q9a57lsNe7ynswidkdB8h61z3HZHQfIetc9y2Gvd5T2YROyOg+Q9a57jsjoPkPWue5bDXu8p7MInZHQfIetc9x2R0HyHrXPcthr3eU9mETsjoPkPWue47I6D5D1rnuWw17vKezCJ2R0HyHrXPcdkdB8h61z3LYa93lPZhE7I6D5D1rnuOyOg+Q9a57lsNe7ynswidkdB8h61z3HZHQfIetc9y2Gvd5T2YROyOg+Q9a57jsjoPkPWue5bDXu8p7MInZHQfIetc9x2R0HyHrXPcthr3eU9mETsjoPkPWue47I6D5D1rnuWw17vKezCJ2R0HyHrXPcdkdB8h61z3LYa93lPZhE7I6D5D1rnuOyOg+Q9a57lsNe7ynswidkdB8h61z3HZHQfIetc9y2Gvd5T2YROyOg+Q9a57jsjoPkPWue5bDXu8p7MInZHQfIetc9x2R0HyHrXPcthr3eU9mETsjoPkPWue47I6D5D1rnuWw17vKezCJ2R0HyHrXPcdkdB8h61z3LYa93lPZhE7I6D5D1rnuOyOg+Q9a57lsNe7ynswidkdB8h61z3HZHQfIetc9y2Gvd5T2YROyOg+Q9a57jsjoPkPWue5bDXu8p7MInZHQfIetc9x2R0HyHrXPcthr3eU9mETsjoPkPWue47I6D5D1rnuWw17vKezCJ2R0HyHrXPcdkdB8h61z3LYa93lPZhE7I6D5D1rnuOyOg+Q9a57lsNe7ynswidkdB8h61z3HZHQfIetc9y2Gvd5T2YROyOg+Q9a57jsjoPkPWue5bDXu8p7MInZHQfIetc9x2R0HyHrXPcthr3eU9mETsjoPkPWue47I6D5D1rnuWw17vKezCJ2R0HyHrXPcdkdB8h61z3LYa93lPZhE7I6D5D1rnuOyOg+Q9a57lsNe7ynswidkdB8h61z3HZHQfIetc9y2Gvd5T2YROyOg+Q9a57jsjoPkPWue5bDXu8p7MInZHQfIetc9x2R0HyHrXPcthr3eU9mETsjoPkPWue5v6fpWBpsVRg41Fri75jeZn7zzbglV25VGJqmf7gA5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z" />),
            category: 'common',
            attributes: {
  "contentwJh": {
    "type": "string",
    "default": "Want product news and updates?"
  },
  "contentxTq": {
    "type": "string",
    "default": "Sign up for our newsletter to stay up to date."
  },
  "contentIzx": {
    "type": "string",
    "default": "Email address"
  },
  "contentlIx": {
    "type": "string",
    "default": "Notify me"
  },
  "contenteGP": {
    "type": "string",
    "default": "\n          We care about the protection of your data. Read our\n          "
  },
  "contentqzU": {
    "type": "string",
    "default": " Privacy Policy. "
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
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="px-6 py-6 bg-indigo-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
                    <div className="xl:w-0 xl:flex-1">
                         <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl"><RichText tagName="span" value={attributes.contentwJh} default="Want product news and updates?" onChange={ (newtext) =>  {
        setAttributes({ contentwJh: newtext });
      }}
    /></h2>

                        <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                            <RichText tagName="span" value={attributes.contentxTq} default="Sign up for our newsletter to stay up to date." onChange={ (newtext) => { setAttributes({ contentxTq: newtext }); }} /></p>
                    </div>
                    <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                        <form className="sm:flex">
                            <label for="email-address" className="sr-only">
                                <RichText tagName="span" value={attributes.contentIzx} default="Email address" onChange={ (newtext) => { setAttributes({ contentIzx: newtext }); }} /></label>
                            <input id="email-address" name="email-address" type="email" autocomplete="email" required="" className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md" placeholder="Enter your email"/>
                            <button type="submit" className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                                <RichText tagName="span" value={attributes.contentlIx} default="Notify me" onChange={ (newtext) => { setAttributes({ contentlIx: newtext }); }} /></button>
                        </form>
                        <p className="mt-3 text-sm text-indigo-200">
                            <RichText tagName="span" value={attributes.contenteGP} default="We care about the protection of your data. Read our" onChange={ (newtext) => { setAttributes({ contenteGP: newtext }); }} /><span className="text-white font-medium underline"><RichText tagName="span" value={attributes.contentqzU} default="Privacy Policy." onChange={ (newtext) =>  {
        setAttributes({ contentqzU: newtext });
      }}
    /></span>

                        </p>
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
            <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                <div class="px-6 py-6 bg-indigo-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
                    <div class="xl:w-0 xl:flex-1">
                         <h2 class="text-2xl font-extrabold tracking-tight text-white sm:text-3xl"><RichText.Content value={attributes.contentwJh} /></h2>

                        <p class="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                            <RichText.Content value={attributes.contentxTq} /></p>
                    </div>
                    <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                        <form class="sm:flex">
                            <label for="email-address" class="sr-only">
                                <RichText.Content value={attributes.contentIzx} /></label>
                            <input id="email-address" name="email-address" type="email" autocomplete="email" required="" class="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md" placeholder="Enter your email"/>
                            <button type="submit" class="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                                <RichText.Content value={attributes.contentlIx} /></button>
                        </form>
                        <p class="mt-3 text-sm text-indigo-200">
                            <RichText.Content value={attributes.contenteGP} /><span class="text-white font-medium underline"><RichText.Content value={attributes.contentqzU} /></span>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        