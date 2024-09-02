
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-tiered-sidebar-navigation', {
            title: 'with tiered sidebar navigation',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAEsBaADASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAIGAQQFAwcI/8QAShAAAQQBAgQDBgMGAwUGBAcAAAECAwQRBRITITFRBkGRFCJSYXGhMoGSBxUjM0JiFrHhJHKCwfAlNDVT0fFzorKzFzY3VXR1lP/EABoBAQADAQEBAAAAAAAAAAAAAAABBQYCAwT/xAAiEQEAAgICAgEFAAAAAAAAAAAAARESIQIxE0EyUWGh8PH/2gAMAwEAAhEDEQA/AOCADWKoAAAAAAAAAAH2wAGTWoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGT+W76KSIyfy3fRQJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4mADWKoAAAAAAAAAAH2wAGTWoAfObNyGz4j1Ot4j17UdKmZMraTIpVii4f9L8omFVfn/wCwfRgVtdYsaNo+m17Dk1jUraqyD2dUak+Oe7K8kRExlfzNW/4ouv0PV2RabLU1WjFmSJ0rV4bVaqpI13RyJjoBbgfPr3iPxHH4a0Ky2g+OSxPC10vHjX2hFaipyx7u/K/TB1pdSjh8TrNaoTR349GdZe32nLGtR65ZhOSrlPxAWsFPh8bzOioXLGhWINOuyNibaWZq7XLy/D1xnPPl0Nyz4on/AHnaq6bo1m/DRXbamZI1uxcZVGov41TsgFkBVIvGjbGkaZarac+S1qcj44K3GRqe4qoqq9Uwnp5nb0fULF+GVbmmz0J4n7HRye8i/Nrk5OT5gdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIyfy3fRSRGT+W76KBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfEwAaxVAAAAAAAAAAA+2AAya1Cp6g/xA2W3UueH6+t1XvVa0iSRsRGr0a9rvNO5bAB87d4LvQaFou+tDfnoSSulprLsa9snPa13kqYT88nR03w7K/TtZazRa+kuu1nQRN46yyLlqply5VqJnHJPmXMAUefS9ct+DNNrO0xsV7SrELmQLOxUnbG3GUcnJM56L2Nm5pmq3tfm1F1BYmTaE+srVlYu2ZXKuzrz69ehbwBTreialJ4F0rTWVs2674Fkj3t91Gr73POF/JTV41vRtZ1uPS72lLDYl483tMysfVe5Oaq3+pPNMF7NC7oulahOk97TatiVExvkia5cdsqBR9D0+za/Z/pEf7lg1SvvldLDJJw5ERXuw5jlVET/2LH4M03UdOr3Eutkggkm3Vqsk/GdAzHTd8+xY2NaxjWMajWtTCIiYREMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjJ/Ld9FJEZP5bvooEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8TABrFUAAAAAAAAAAD7YCO9nxt9RvZ8bfUya1SBHez42+o3s+NvqBIEd7Pjb6jez42+oEgR3s+NvqN7Pjb6gSBHez42+o3s+NvqBIEd7Pjb6jez42+oEgR3s+NvqN7Pjb6gSBHez42+o3s+NvqBIEd7Pjb6jez42+oEgR3s+NvqN7Pjb6gSBHez42+o3s+NvqBIEd7Pjb6jez42+oEgR3s+NvqN7Pjb6gSBHez42+o3s+NvqBIEd7Pjb6jez42+oEgR3s+NvqN7Pjb6gSBHez42+o3s+NvqBIEd7Pjb6jez42+oEgR3s+NvqN7Pjb6gSBHez42+o3s+NvqBIEd7Pjb6jez42+oEgR3s+NvqN7Pjb6gSBHez42+o3s+NvqBIjJ/Ld9FG9nxt9TD3tVjsOb0XzAmAAAAAAAAAAAAAAAAAAAAABVREyq4RAVzx/qn7q8JXHtdtlnTgR8/N3Jf/l3L+QHaj1CjLY9niu13zYzw2ytV2O+M5Nk/OtFbei2dM1lGKjHScSJc/jRjsOT/AJfmfoWOxDLUZabI3gvYkiPVcJtVM59APUFFvftS0avZdFWrWbTWrhZGojWr9MrlfsWHw54m03xHWdLQe5skf8yGRER7Pnjt80A7IKdrf7RtG0q6+pHHNcljXa9YsI1q+aZXqv0N7wz4z0rxHI6CvxILLUzwZsIrk7tVF5gWMFW8R+O9I0C0tORJbNpv444UTDPqq+fyPLQP2haPrN1lNWTVJ5FxGkuNr17IqL1+uALcCr69440/QtYbplmtaklc1rt0aN2+99VOh4m8Q1vDenx3LcM0rJJUiRIkTOVRV81TsB2AVax450+v4Zq666raWvZlWJrERu9FTd154/pU51j9qOjRVoJIq1qWSVFV0abUWNEVU95c9VxnHYC9ArNXxvpVvw5a1mFsysqYSaDCcRqqqInnjHPrk+b+H/G9uh4gdc1K5qFqmu/ECzK7GenJVxyA+3AhDIk0EcrUVEe1HIi/NMkwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD46ADWqcAAAAAAAAAAH18AGUW4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABh/4HfQyYf+B30A9AAcpAAAAAAAAAAAAAAAAAAAPk37XtU42p1NLjd7tdnFkRPid09ET/5j6yfOn+A9Vu+Nf3zqVik+qtnirG17lcrEX3W4VuOiIi8wKRrPiCrqXhvS9Ki09YZKCYSZZN27Ke9yxyyuFLVV1mW1+xy7Gx68entrPXz2K9uPy2ux+R9D1fS4NT0m3RcxiceJzEdt/CqpyX8lwpT/AAj4H1HSV1Crq0tObT78HDkZDI9XbkXkvNqeSu+wHP8A2UaTpl7TdQmuVYLE3ESNUlYjtrMZ5IvTK59Db0rSvDujWNSs+H9afPeZUmRsCSNdjCZ8kzyVEOa/9nPiLTrUv7j1ZjYJU2q5JnxOVvZyImFLN4I8EM8OcS1clZYuys4a7PwMb5omeucdf+lCl/sqoUb2u2lvQxTuig3Rskajkyqoirhe3/MtEXh/wpS8ZssVdV9nvsnRW043NRqOVPwomOSLnp8zmaj+zfVKeqOueGdRbAxVVWtdI6N8aL5I5E5p6fmdLwh4Bm0zVP3trdpti21VdG1jlciOXq5yqmVXmBTvBleDVf2gf9qsbKr3yyqyRMo9/Neaefmv5Hp+06nU03xXGunRsgV8DJXtiTajX7nJlETouET/ADLL4k/Z3an1h+qeH7jK8sj+I5j3OYrHr1Vrkz5+R46P+zi/LqzdQ8S3mWNrkc5jXukdKqdEc5U6eoHA/aJIq+L60s3uqteFz/l3Lb+197V8M00RyZdcaqc+qbH8/uhsePPBM3iOxDeoTxx2o2cNzZco17UVVTmiLhealdl/Zpr9rT2Ja1WCSxG5GxRySvcyOPC5wuFwucckTAGhqn/6Q6N//Of/AJynb8NeHtKtfsxmtT0oX2ZYp5OM5iK9qtVyNwvVMbUNu74H1Sx4E0/QmT00tVrLpXvV7tiou/ou3OfeTyO9oWg2tO8EfuSeSF1nhTM3MVVZl6uVOapn+pPICkfshjjnt6rBNGySJ8TNzHtRUXDlxlFOd4CrV5/Hr4Z4IpIsTYY9iK3l05KXTwD4Q1Hw1buS35qsjZ42takLnKqKi555ahxNQ/Z5rlbXpdQ0G/DG10jnxuWR0b2bs5TknTnj5gfUERGojWoiInJETyMnnXa9teNsrt0iMRHL3XHM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD46ADWqcAAAAAAAAAAH18AGUW4AV7xPqV+rc0qjptiCCW7M5jnyM3q1EblPd+oFhB85dBUTXFe3xZEviZs6or3tVsOPwrFt6duWc5QsnhfUr9m5qun6pZhnsUZ0ajmR7FVqpnO3PTsQLEAedieOtWlsTORsUTFe9y+SImVUkegOfo+s1dX0tNQgSSKLLke2dEa6NWrhd3NUTv16KbMF6nZgdPWtwTRMzufHIjmtx1yqAe4NeC9TsQPnr24JYWZ3SMkRzW465VOSGI9Qoy1lsx3K74EcjeK2Vqtyq4RM5xnKoBsg8ZbdWFXpNZhjWNqOejnom1FXCKvZFU159Y02CjZuOuwOhrIqyuZIjtqp5cvP5AbwPClbr36kdqpKyWGRMtc1cp/wC57gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADD/wADvoZMP/A76AegAOUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjoANapwAAAb9KnGsS3LqqyqxcIidZV+FP/UxdpsSFLdJyvquXC5/FGvZ3/qefki6TjNW0QAeiAAAfXwAZRbhUNQg/dHj6pqj0imj1P8A2f3096urW9Wr2VOvQt5panpOn6tCyLUqsdhjHbmo9OigUhNE1ZdFTQ1gpO09bPFdqrbKKqN4m7O1Uyrk5pzynM6mmxLrHjy1qbXwRR6YnARsSIrp0c3KOc7tz5fQ9P8AA1T21W+1yppCypN+7UTEe/GM5znHRcFg03SqGlRPi06pHXY925yMTqpA3Dg+MIbl3SmaZRY/fembFJIjFVsUfVznY8sJj55O8CRQL+l6zCmrUZIUtxXODcxWhVkblY5qSR81XDnNai4zzwptahWj1LStSdpOg2a25YOK18Swraax2XMRi46JlM455wXUECk6jWi1Chbl0zQLMEaS13TsdDwltsY7LmJGuM4Tzxz6czWv0rFyHWbml6VZgrPbWVkDoeE6Z8ciOc5GLz/Dy6c8F/AHz/Wm2tY/fk9fTL7Y5qUEcSSV3NdIqSKq4Tryz/z6HQ1TRV/eWrwUKCMgsaKsbUZFiN0qOcjU6Y3ImPmXAAc3w65rtBpo2tLWVsSNdFLEsbkciYXKL8/U6QBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGH/gd9DJh/4HfQD0ABykAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8dABrVOHpXWJJ2LYa50SL7yN6qh5gidjs6xBYta0+nWYrmxNakcaYRGptRV/zGjwWKutMp2WK1srXJJGuFRybVVP8jaW1pktu1adeVi2oFiViwuXZlETOfPoEtaZFbq2m3letWBIkYkLk34RUzny6nxZcsMK9fSe/wCvaou7cCwsTp3rXa5sSr7rXLlUPMA+2NPEABI+vgAyi3AAAAAA1bt6Kk6s2Vr1WzOkDNqJycqKvP5clNo4/iSKd1anZrwSTrTtxzvjjTLnNTKLhPNcOzj5Ae+paxBp0j45I5HvbVlte6iYVseMp16+8mDNbVoJ7FiJycJK8MUz3vciNw9HKnptU4Gpum1qW9aqUrbYYdKsQNWWB0bpZH4w1rVTK/h7dVPO5BdiZqb2ae6ZH1qLMSV1kTCK7eqM/rVqLnb9CBao9RoSV0sx3az4FdtSRsrVaq9s5xkgzVdNfwtmoVHcddsWJmrxF7N58/yKXX0+1Znt8WrZmrzahSenEp8FHtRffdsx05c8+XU3b+j/AMHxI6HTl4kliF0Csh5uwyNct5c8O3dPPIFsfdqR2mVZLUDLD/wxOkRHu+idVDrtRlttR1qBthyZSJZER6p/u9Ss8GOC9qFe/oti5Ys3UlilbCqtcz3dq8To3bjzVOnLqa1unKsWoUF0yw/UbGocaG0kOWI3ejmv4nRNreWM55Y8wLY7UqDJHxvvVmvYiq5qytRWoi4VVTPLCk69yraWRKtmGZY12vSORHbV7LjoVHUqKQ+FvE8z6vDmmnmVHuZhz25TGFXy+xmxUl1Gax+5dNnobNLmrOWSHg7nu27GJnGcYd7yckz1Atceo0ZY5ZIrtZ7If5rmytVI/wDeXPL8ycVqCeJ8laaOZsaq13Dei4cnVFXyUoa6fNNp151evqHFbpUkHDdp6QIqrjDOXN6phcYRU68+fO8w1oq2n8CtC2JjY8IxjcInLsB5x6pVSjWtW5oKqWGorWyTMwqr5I5Fw78iWmXmajQjtxscxr1cmHdUw5U/5FU0+u6i3SptT0uzZhXSY67WNrLIsUic3Nc3GW5RWplfh5nT0KC1U8CNhSivtLIJdtWVMZXLsNX68gOt+9tN9nnsNvVnxV0zK5krXbPrheR60L1bUacdunM2WGRqKjmrnHyXsvyKZo9O3Y1aRVrTJC/SZIffoezRtk3NwxEXrjn1+ePMsnh3/wDLFOJ1aaF8VdsUkT41jdua1EXrjz8wN1mpae9JlZerOSDnLiVq8P8A3ufL8z3dNE2ThulYj9qv2q5M7U6rjt8ygRafbk023p9GlPJEmmyxMdapcCaJ3LbFv5JJn5dkXPM6Np66zfne7TNTbVXSZYX/AMBY3ucrm5a3dj3sJ9F+YFni1KhNA6eG7Wkia5GukbK1WoqrhEVc9cqhOvdqW43SVbUEzGLhzo5EcjV+aoUPUGTu8P6o2Sm6aBVqNbLJS9llmXjNzGrVxnCeeETmpt6lSsaqzVZNFoz02PoNgVHwcJZno/OEauM4bluenvAW+PUKM0D54rtd8TF2ue2VqtavTCrnkZgvU7LJH17cErIlxI6ORHIz646FIm06S3U1J8MN+RJK8ULo30ErtdiRFwjUwrlRM88Yx5m/r2lTLb1Jmn0ncGWjBuZEza2XZM5XMTyVVZlMfNAOzL4gp8SZlR0dpI6zrG+OZmxdq4Vu5Vwi8/NTedfqMsR15bUEdiVMshdI1Hu+iZ5/kU3UIPbrGrz6dpFuCOTR3worqro1kkzyajcZzjl8/wAj31KvNFrUj6lOxNNPLA58M9LiQy7Uam5sqfy1aiea9U6cwLa29TdbWo21AtlqZWFJE3on+71EdypJZfWjtQvnYmXxNkRXN+qdUKpWglg8RtZVp2HxuuySystUuUW7OZGTpyVF8kXK4XHLBqaBplqG3psFtLvtdSd75HJSa1nPdlVm/qR2fJVVeXLkBdrN2pTRFt2oYEVFVFlkRvJMZXn9U9TEl6nFVbaltwMruxtldIiMXPTC9DmapSS14o0iWWtxoYYbKq5zNzWOXhomfJFXnj8yuu0+5XbQkdDZjqVrFxiNZU4yxo6Vdi8PGdqtRURUTlnsoF2nu1K0DbFi1BFC7G2R8iNauemFXkSlnaym+zHiRrY1e3DkRHJjPVeX59CnUqf7uXTLNuhds0mQzsax1Xc+Fz5EcirG3OEVuUTsmEXB3mwovhKaKtQkqo6tJw6yplzcouEwnnz6eWcAbcmqVIa0MlmeGGSaNHsifK3c5cZwnPn+RKpqEFjSa+ovckMM8TJf4jkTajkRURV6eeCpurLXS02/pFm263p8MVfZXWTaqMVFjVf6F3c+eOvyO9p2npa8FVNNuRuZxNPjhka5uHMXhoi8vJUUDqvsQxvVj5o2vRiyK1XIio1Orvp8zStazTh0116CWO1E2RkarBIjky5yN6p/vFZ9i1PUdGuXb9KVbWa8L66p70sUTmukxnqjlV+O6Y7mb1aS67ULWnadZgrSNqR7HV1jdK9s6OVyMxnCN88f5AXFbNdrJHrPEjI3bXuV6YavZey809TUh1zS5rVusy7BxKa4mRXom3kmV+iZRFXyXkVrUltRVda01NPuyTWbrZonRwOcxzF4aqu5Exy2ry6kdfhdBX8WMdVkb7TEyWKXhLsc3Yxqpu6Z3IvLr5gXCC7Us8T2e1BLwlxJskR2xfnjoa8utaZHp9i/7dXkr10VZHxyI5E+XJevZCs2mSTzTWNI0KSNsGmyQSQz1lY2Zyq3bHt5b8IjunLnjPM14KNu2uttjrzvZY0nhRukpezI+RN+ERuPLKdef5YAvFWzBcrMs1ZWSwyJlr2ORUX80PU09HkbLpNZzIZIE4aIsckaxuaqcly1enM3CQMP/A76GTD/AMDvoB6AA5SAAAAAAAAAAAAAAAAAAAU9PE2vWdV1OrpehwW4qE3CVVsoxy9e/wBC4HzrSF8Q/wCI/ErdBbp21bn8R1tX5ReeMbf+YFq0HxLU1fTn2ZmpSlhmWCaKZ6JskTyzyydNl6nJHLIy3A5kK7ZHJIioxeyr5KfPPEXh6TSfCCsuWePcv6oyaxKxMJudnp/15m94m0rTaOp+HdKZXjraTYsvWwxq7WyPRG7EcvnnpzAusV+lNXdYhuV5IGc3SNlarU+q5wVPTfFOq6vV1O3T/dEUUKObWjmmVHqqORNz+eEbhV7c8Hi7TtPp/tFr6fp1aFta3Sf7dWaicNUTO1Vb0znH/SnG0+lVj/ZfrNqOtE2wr5I1lRiI5Wo9uEz2+QFzra3bf4qg0eaOvsfpyWnvjVV9/dhURc82nY9vp+1ey+1we0f+VxE3+nUojJJovFMUlZMzs8Mo6NP7kXl9zh0dJs3fBjLba2jxOc/iLqktpzZmv39VXHJfLGfmB9fB4UXSOo13TOY6VYmq9zFy1VxzVF80PcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD46ADWqcAAAAAAAAAAH18AGUW4AAAAAAHP1W9LQfSejWLXlsNhmVc5Yjso1U/4tqfmB0AVOx4pso+OOJK0SWJpuDLKx7mpFGqNyqN5qrnZx0TBmbxPcXTKNlsUNVJllbPPNHI+KJzFwnTCojuaoq4wiEC1grVW9qtnxJSYlin7JNQWZ7Isvaq7moqtdlM9eS46eRzdItanYtaYmmJBGsulcRyTvkexn8TtnKr5ZVQLuDg6Rrs+oXKcEkEcfFrzulRFVdskUjY1RF7ZVfsc3982ZZ62oKjUcyjffw0VdirHI1G5TPy+6ki2Wa8Nqu+CxG2SKRMOY7oqHocG7rdiu2krIol9ooT2XZReTmNYqInPp7ymrBqviGezWrJHpjJLdT2pjlR6pGibUVqpn3ly9vNMefUC0A48GuI7wmmuTw7cVlnfE1fNEyqIv1Q4zfFl1lW46SOrK+Ok+1G6KORrWObj3HbuvXqmOi8kAuIKnqerajDU1GtqcNVyu02S3EkDntwjcI5jlyi/1JzTBPUdc1Wo7U31YKjqumRxyPSRXb5EVu5URc8l+a5+hAtIOPpl/UXatPp+psrb2wMsMdX3IiI5zkVq5XmqK3ryz2JeKZpYNAnkgkfHIj4kRzHKipmRqLzT5EjrAq9nXdWidftMhp+w0LiQPRd3Ee33MqnPCKm78/kecmt6hpc3iO5elhmq0XsSKJrFRUVzGK1M5Xl73Pl1yvTkQLPYrw2oeFYjbJGrmu2u6ZRUVF/JURT1Keviq9HWvIsdaxPBCyWN8UcjI13PRqsXd5plOeefY6Lr2uLfbpsSaetpkHtEz3NfswrlRrWpnOfdXK/byA74Kt4U1OzJDptSZqfx61id6uVXORzZkaiZ7e8vohmDXNWvSUoKUdJktiOy9zpUcrW8OVGJyReec/8AP5AWgFZ0nXdTtS6VJcgqMralva1kauV8bmtV2VVeSou1eWOXLqemqS6ini2pDproUc+jKruOrlY1EezntRUyvl1TqSLECrV9VnuappcsyNhkjZdjnjR67N8bmNVc9uSqir0ya8Xiy2jbaPdQsOZQmtxuro/a1zET3VVfxIueqY6dCBcQVhfEGoafvk1eCssbqD7kSV92UVm3LFVev4k58jwsWdYbrFBNUSsjX1LMiNrOeiZRrfddleePiTHVeSEi3Aqmh29Sm1bT4mywNov0qGfgq1zlTPL8SuznPmueXz5lrAAAAAAB52a8Nqu+CxG2SKRMOY7oqHoAAAAAAAYf+B30MmH/AIHfQD0ABykAAAAAAAAAAAAAAAAAAA1KemU6Ni1Yqw8OW2/iTO3Ku93fmvL8jbAGpqWm09UgZBfh4sbJEkam5W4cnReSoNS02lqtRauo12TwqudrvJe6KnNF+htgDmaN4e0nQ0f+66bYXScnu3K5y/mqqoZ4f0qPSZtKZVxSncrpI+I73lVcrzznr8zpgDRh0fT4L8d6KvtsxV0rMfvcuI0XKNxnH59TnP8ABfhyS8tx2lxrKrt6pudsV3dWZ2/Y74AdOgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+OgA1qnAAAAAAAAAAB9fABlFuAAAAABrajSi1GhNTnV7WSt2q5i4c1fJUXui4VPobIA5MmgVlq0Yq09iq+izhwzQuTejcIiouUVFzhFXKdUMv0XNevHDqmowvhRycVsyOdJuXK7kciovy5cvLCHVAHKr6BUqS0JKkk8K0olhajXIqSMVUVUdlFzzTPLBrN8LVokqrVvXq8lWv7NHJG9uVZnK5y1UX0O8AOKvhuq2Kk2pZt1X02vYyWJ6K9yPVFdu3IqLlUz06kqnhujVigia+eRkEM0KJI9F3NlcjnZXGVXl/wC52ABwYfC1aNWcS/fnSOvJWjSV7VRkb0RFRMNTmmE5r+eToQ6XBDbrWWvkV9astZiKqYVqq1cry6+4n3N4AaNbSqtfRm6SqOlqpEsSpIvNzV65xjuaaeHInVLFWxqWo2IpoFroksqfw2L2RGoir83ZU7QA5mo6HV1F8jp5Jmq+pJUXYqJ7j1RVXmnX3U/9BY0OrYh1GJ8kyN1GNscuFTLURu1NvLt3ydMAc+1pMVmxPYSxZgmmrpX3wvRqsajlXLVxyXKqe2oUItRoOpzukRjlaqq1U3e65HJ1TuhtADmS6JVlp3qzpJtl6bjSKiplHe705dPdTuYn0KpPZvSySTrHfjRk8O5EYqoiIj05ZRyIiJ1/I6gA46+H45K08FrUdQspMjW7pZG+4jXbkwiNROqc1VFX5ntqGjx3bbLbLdqpYbGsTpK70RXsznauUXz6L1TPU6QA4bPDFWGtSiqW7lZ9Jr2RyxvbvVr1y5q5aqKmceWeR76boFTTXVXQSTuWrFLEziORcpI9HrnlzXKcv+Z1QBzK+h1a8emsZJMqac5zosqnvbmuau7l2cvTA1HRY796G825bq2IY3RsfA5qcnKirlFRUXp5/wCeFOmAOQzw5QZFXizM5kMU0ao5+Vk4uN6uXqqqqfLqprt8KVtjmz378+aklNvEez3I3oiKiYanNMdfXPI74A59jRqlqSJ0+97Y60lXYq8nMftzn5+6n3NSDw1BHYjnlv37L4oXwR8aRqo1jkRFTk1O3VeffJ2wBy4NDgrWKM0E9hjqddKyIjm4ljROSP5d0zywbtOv7JUjrrPNPsTHEmdue76r5nuAAAAAAAAAAAAAAAYf+B30MmH/AIHfQD0ABykAAAAAAAAAAAAAAAAAAAq9rTGL4rrVfbdTSGarNM9jb8yJuR7ETHvcvxLyTkWg1X0Yn6pDqCufxYoXwtRFTaqOVqrn5+6gFXm1LVdNs+ILdZIJadKwx0jJnOV7m8KPcjVzhMJz55yqmxZ1exRfqj6sDcpqLIXyvSSVsTVha5Xuai5x0TCYTmh17Gh1bFbVIHyTI3U1zMqKmW+41nu8uXJqdcmJdDjc6w+C7crSz2EsLJDIiKjkYjMYVFRW4ROSovMD10W6/UNMjsSS1ZVcqpxKr1dG5EXGUzzT6eSle0jVNVsVdPp6VDTj36ellXWHSPRq7lTb+LK57qvL5lk0vTodMqrBC+SRXyOlkkkVFc97lyqrhET0RDw0zQ6umPgdBJM5YKyVW71RctR2crhE55A4Ed25rGsaFbc+OKq6m+26H3+TmqxHdHIiqmeWUx15Lk3qOualImm3LcFVtHU3oyJsau4kW5quYrlXkuUTnhExnzOjQ0OrQdTdC+Z3sdd9ePeqLlrlaqqvLr7qHjT8N1aliB7bNuSGq5XVq0kiLHCqoqe7yyuEVUTKrjIHMra9rcnh+nqckFDfelgjhibvw3e7Cq5c/ReScvmJdd12s2++eLT3M02Zkc6sR6LMjkavu8/dVEcnXOV7HZi0OrFpVHTmyTcGi+N8aqqblVi5TPL16CxodWxHqMb5JkTUHtfLhU91Wta1NvLsxOufMDk6j4lnpawkCSUJIEsxwOhZvdKiOVE3K5PdaqKv4V8vM1nXdSXT9YfqEsM8cGpRwxtYj2K334vNHZx73TvnOU5HVm8L1ZrEj/bbrIZLLbS12vakfFRyOz+HPNU6Zxz+mPabw9WlddzYstjuTRzyRNc3aj2K1dycspnYmefoBoWNe1FjLeoxwVV02pZWB7XK7iuRrkY56L0TC55Y546kZNd1ZjrNtYafsFW+lV7fe4rmq9rdyLnCKm5OXnhehvzeG6stmSRbNtteWZJ5ajXpwnvRUXKpjPVEVURcKp7SaHVkpWaiyTcOzZ9peqKmUduR2E5dMtQD01W9JQdSejWLDLZbDMrurUcio1U/4tqfmcSj4ms6hHDGleNkk9lzUTn/AN34SyNf16qitT6qd/VdOh1bTZqNlz2xzIiK6NcOaqKioqL3RUQ149CpRam3UI0kbK2qlRrUVNqMz1xj8XJEz2AqNu5M7Q+LE98W7w+2VGtkcu1yuTmiqqr+arks3i+WeDQ+JV5zJZr7U3bdy8VnJV8kXoHeF6LqKVFls8NKKUc7m54aLnPT8XL6fI3tX0yDV6DqVl8rI3PY9VidtdlrkcmF8uaAcS94ju6NFfbq0VaSavAyeJ0G5GPR79mFRcqmHY6Zyim14f1qfULtipZ4Mjoo2yNmgjexjkVVRWqj+eUx+efI9W+G6rorbbli1cktMbG+WZ6b2tauWo3aiImFXPTqbenaatJ8kkl+5ce9ETdYei7UToiI1ETz64yoFf8AEOqarY0vXnUGVmVKTHwOVyuSVztiK5zVTkmN3LrnHkTm1WxRfqctWtxJI1qtc9eJIjWubzerUVeSJ5NRM+Zv6j4Yq6g+3m5dgiup/tEMMiIyR2MbuaKqLhE6LhcJlFNiXQ4XusPit24JZ1jcskUiNVqsTCY5YVMdUXKKBy/3/qMlTT/Y3abamt23V+JG53D2oxztyp1aqY5tXP158oWNSuzSQ1LnDjtVNUgjkdAqoyRrm7kVEXmnJeaLnoe1vwvudSbBasKqXXWrFlZESVXLG5qOTCY67eWMYTob0Ph6rGxu+ezNL7U22+aRyK+R7UwmeWMYREwiJ0A5bPEtt+sxU2SadM2xLJDG2He5YnNa5Wq5/wCF34cKiYVM+eD0/wAVP9ir2vZ24ZRlt3Gc8sVnu7E+avRyc/hU2qvhetVsVZGXLr46cjpK8Dnt4caqjkVPw5VPeXqqqnfrmOjaEjGarLqFdjV1SR2+BH7kZGufdz81c9y483Ac6HxfYiisPuRQToyo6wxa7JGI1yKicNyvTn+JOadl5G1BLq6eLaEWqLWRHU53p7Mrkaq7o+SovVU7+eeiG9D4ehSCaC3evXYZYVg4diVFa1i9kaiZX+5cr8zNHQI6mox35L961PFE6FizyNVEYqouMI1OfLr1XPPPLAeN7UNXd4hfpemMpo1lRlhZLCOXmr3N24RfPb18ufUaPrsup26kawsjbNTdM9M5Vr2yIxURfNM5MXtCnueJJL7blioz2NkDZK70Ryqj3q5FRUVMYVvPqer/AA3Va2n7HZtU3VIlhY+B6bnMVUVUduRc5VM565A41fU9W1HVtMmpezMlnoTOeku5Y2okrUztRcqvROvmv0MWdWnuPqSzM4ckdbUI54mSO2K+Pa1cKmFxyXC9UydRvhWrCyn7LevV5KcLoYpI5G7trnblzlqovTzT78z3b4botggia+dEhimizvRVfxcb3OVU5uymfzA0q+papZSOpo8NRFrU4ZZFsOeu5XtXaxq5z0b+Jc9Txk1S3RvarcfGiMidUWeJ7t3CY5MPVFTllM5z8jpT+HIJFY6C7dqPSBtd7oJGosrG9EdlF5pleaYXmpm1pDIKWoexQLZkuQshWGWTDVajdic8Z6Lz6gbGm3pbtzUE2sStXmSGJyZy9yNRXqvyRVx+SnLq69bl8QOozrTrtSZ8ba8qPZM5jc4ka5fdfnkuETki9Tq6Fp37p0atRV/EfEz+I/43rzc781VVPD9wxOvx2Zrt2aOKZZ468kiOYx655ouN2EyuEzhANCnr2oys0/UJoKqadqEyRRtaruLGjs7HKvRc4TKIiYz5npr0uoN8R6NFprokkkjsIvGVdiIiM5qidfknLqbFbw3Vr2YXts23wV5FlgqveixROXPNExnllcIqqiHvqujRalaq2ltWa09RH8J8DkRU3YznKKi9PpzUDiWPFdiCKGrKytDqD7UtZ73Ne+JvDajlciJ7y5RzcJ8+vI7Ph7VH6tpzp5Y0ZJHK+JytRyNdtX8TdyIuFTCnl/hyq2pFFFZtxzxSunbaa9OKr3Z3KqqmFyi4xjB0KFRKVZIePPYXcrnSTv3Ocq/ZPoiIgHJ0rU9X1COvqHs9P922cuRqOVJY2c9rlVeS5wmURExnzNGh4pszXuBK+hOkteWZi1d6oxWYXarl5PRc9Ux0OnD4aqwyI1LVx1RivVlRZU4TFdlFxhMqnNcIqqiEKvhetXfC5169OleB9eFsr2qkcbkRMJhqeSJzXn3yBzH+JtSgpaW637BDPqjOLEvDkeyJiMRy7kTm5V3J0wnzXz8rl/UNch0ZrHRQMmuyRTMxIiSOY16oqKitXYqNzjvjPQsE2hQPp0YIrFmCSgxGQTxOTeibUaqLlFRcoiZ5eR6R6NC1KKvsWpX05XTNfLJuc9zmuau7l0w5eSYxyA0ZtdsR6TdtpFEr6+oJVamFwreK1mV59cOU9/D75JE1Xc9XK3UJWt3LnCcsJ9Dys+F6tieZ3tt2OGedtl9dj28NZEVF3c2qvNWplM4OpSoxUvaOE56+0TOnduVOTnYzj5cgK9W8Vyun05liGNrJIXe2vbn+DIm9EROfRVikTn8jwgva7b1aKaq2rHPLpMU745t6saqveqIiIvVUwmc+R1bHhTTbFXUa73To3UJkmlVr0RWqi5w1cckzn9S9zot0+FmpOvNV6SOrtr7cptRrVVUwmOvvKBW7/iyePTKt2vJp8PFpJadDMr3yOXGdqI3onL8S+ht0tQ1K54ng4c0LdPm09lngqxVcm5e+eufl08vM9P8ACVNsDIYLt6GP2VtWVI5Gpxo25xu93rzXmmOpvRaLBDbp2YZ7DH1K6V8I5MSsTojuXfnywB56hq66bqaR2msbTdUkmbJ574+bmr/wrlPopzYtZ121HIkFakyapWjlssl3e897VdsbheWExzXPNehu+I9Jk1l9Ctwm+zx2EmllV+FRqIqKxE89yKqL5YVT11DQYb1mWdtu3VdPGkU6V3o1JmpnCLlFx1VMphQPGjrz7zrT4o2pCyhBbiznP8RHrhf0p9z2XU7S+FGarDV49l9Rs6QsReblai4TquOf1PO34bq2JUfDZt02rXSq9ld6NR8SZw1couMZXmmF5m6mmxN0ZmmMmnZFHC2FsjJNsiI1ERF3J58gKzd1m5d0CaSKzSnmiuVkYtZz41ysrfde12XN7fNF6G+/W9Rqt1OC8unR2KiQuZMrnMiVsiqiZRcrlNq8k68uhtN8N11SZ1i3bsTTSQvfNI5u5eE7cxvJqJjPyyuep6X/AA/VvWJ7D5rEc0vBVHxuRFjdErla5uUXnly5zlAONF4n1Cau6OCOnNabejqpIjXsjcj2bkdhfeTH59DGo+KrtK5aqolN82nxsdO3hy5ncrdypHjKN5YxnPP1OtB4brRSrM+1bmldZjtPfI9qq57G7U6NTljyT8sHpc0KKzclsxXbtR07WtnbXkRqSonJM5RVRccstVFwB04pElhZK1FRHtRyIqYXmTNeKrwrcs6TzuSRjWJE5+WM255ondc8/ohsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHx0AGtU4AAAJxRvmlbFE1XPcuERPMzNDLBIsc0bmPTycmCLi6HmACQAAH18AGUW4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABh/4HfQyYf8Agd9APQAHKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHx0AGtU4SjY6SRsbEy56o1E7qpE9a0vAsxTYzw3o7H0XJE9aHdbDUoNnbTnV19GJDt81eqplW/9eR4xpLYeml6rGjZdqpBK5PeavkmfNDYRYad6e6savgtJxIbPD3pE5cquU8uf+X1MIjJZqkzVkdToosjrD27d65zhEXrzRD4b9/n7/vp7Urz2OjkcxyYc1VRfqRPWzLx7Ms3/AJj1d6rk8j7o628QAEj7BsZ8DfQbGfA30JAyS4R2M+BvoNjPgb6EgBHYz4G+g2M+BvoSAEdjPgb6DYz4G+hIAR2M+BvoNjPgb6EgBHYz4G+g2M+BvoSAEdjPgb6DYz4G+hIAR2M+BvoNjPgb6EgBHYz4G+g2M+BvoSAEdjPgb6DYz4G+hIAR2M+BvoNjPgb6EgBHYz4G+g2M+BvoSAEdjPgb6DYz4G+hIAR2M+BvoNjPgb6EgBHYz4G+g2M+BvoSAEdjPgb6DYz4G+hIAR2M+BvoNjPgb6EgBHYz4G+g2M+BvoSAEdjPgb6DYz4G+hIAR2M+BvoNjPgb6EgBHYz4G+g2M+BvoSAEdjPgb6DYz4G+hIAR2M+BvoNjPgb6EgBHYz4G+hh7Gox2Gt6L5EyMn8t30UCQAAAAAAAAAAAAAAAAAAAAAAcSHxGli3PBV0nUpm17Dq8kzGx7Ec1cL1ei4/IDtg58GrV1jlfbkhqoyeSJvEnYu7Z1XkvLlzwvNPM9k1Kgs8cCXq3Flajo2cVu56L0VEzzQDaBoadrOn6nPZgpWo5ZKz1ZI1HJnljmndOfU9n6jQjnSCS7WbMrtiRulajt2M4xnrhU5AbINeW/SgssrTW68c8n4InyIjnfRFXKmH6jQjnSCS7WbMrtiRulajldjOMZznmnL5gbIPCvep2mSPrW4JmRrh7o5EcjV+eOhmrbq3GK+pZhnYi4V0T0ciL25AewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANPUdSh072Xjtkd7VYZXZsRFw52cKuV6cj3s2YKkKzWp4oYm9XyPRrU/NQPUGs/UKMdRLclyu2s7pM6VqMX/izg17Wu6XUnqRT3YWrczwV3phUxnOe3z7gdEHlYs16zUdZnihRy4RZHo3PLPn8kVSHt9L2P2z2yv7L143Fbs/VnAGwDWXUaKV2WFu1uDJnZJxW7XYyq4XOF6L6EY9U06V8LI79V7p0zE1szVWRP7efP8AIDbB4LdqJbSotqD2lUzweIm/H+71PcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjoANapwAAbNS9apqq1pnMz1Tqi/kotX7VzHtM7nonNE6J6IawOcON3W03NUAA6QAAD7EADJLgANLWNUr6Ppst61uVrMI1jEy57lXCNRPNVUDdBSuB4tz+/t8qyJKrk0hZERvAx+HKJ+P8AItGjanDrGlQX66K1krebV6scnJWr80XKAboBqajqVLS4opb87YY5ZWxNc5FxuXoi46dOq8gNsGu+7XjvRUnyYsTMdIxm1ebW4yuenmhsAAabNTrSxVJa3EsQ2nbY5IWK5qclXKqnROXU14ddqWJZGV4bcrY7CVnSMgcrd+VRefZFTmvRAOoAAANN2p1uEskPEsI2f2d3AYr1Y/OFzjoiL1XyNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARk/lu+ikiMn8t30UCQAAAAAAAAAAAAAAAAAAAAAVTQNEmW/qduezqVb/tSWRkLZFZHI3KKi7cc0Xv5lrAFEg0mafU6jbenyPgTW7kz0khVW7VRyscuUxhVxheijUqctfxDKun6fPK6WzC50M9FHwuRNqb2TJ+DaidFXkqdC9gCueHa609b1uGSlJEstnjRTcHDHxq1qYR3TOUXkcnVdGdYq+LZl058lmWRq1n8FVe7bG3GxcZXnnoXkAfNvFlfU7b9Ujj06ZJncFYXQafxFmREaquWXyVOaYTmbmtaK61U8UyLpr5Z5rMPAdwVVz2okf4FxlU/F0+ZfQBRte0S0+TxBBpFNYWz0q+zhR7WyK17tzU6Iq7eWPn8ze8KVFbq9u41lxjHQMjdxqTarXKiqqYamFVURcZxj5lrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFf8YJKlfS5oq1iwlfUYpZGwRLI5GojsrhDR17UZdRrU319KtpCyz/FfY058j4vdXDmxr158s88ZLcAPnNXTp2aNE6zW1KCSHU55IXsopIkbXJyV0Pm1cr+FOS+ZuMq2G0/Dt23ou1K9qXixV6q5axyPRrlj5q3Kqiqnkql6AHB8TUVvXdEY6ss8LLu+VNm5rURjsK75Zx1OBaqWqcd6KDS19lXWOI1fY1m4TFjT32R+fvZTKZROZfQB860nSrUrasdyhO6H9+yTbZa2xEjWLKOVqckTP5ZPddD4VG6+HS3NnTXmyxK2BdyRpIz3m8vw4z05dS/AD5yzSLiavNBaZe47tU9pjkiotc1W7so7jL0THJUzlOmD6MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHx0AGtU4AAAAAAAAAAPsQAMkuAqPj25Vjk0KpPYijV+pwyyMkejWrE3O5XZ5Y5p16luNS5penX3tffoVbLmJhqzQteqJ8soBr/wCI9B//AHvTf/8AXH/6nE8CXKrrGuUobMMrm6jLPGkciORYn4Vqoqdfn2Ob/wDh/MmNPzpbtNWZJHT+zYtq3duVm7y6Yynkq/QutPStNoSOko6fUrPcm1zoYWsVU7ZRANsrfjWvFbr6TWsRpJDLqcLHtXoqKjsoWQAfPXpq9PX/AN2fxJbFPTLSUbC81mau3Zn+5FTC/RF8zOiRaZZ1PS4NJ4kqTVZG6uxznrnLExxM/wBW/wD5+R9BAHzfQI6aaN4bgha1sqag6O4zmipJw3oqOTvjBOjSrU9LqPqxJG5/iJsblbnm1sr0an5IfRQBQtKXS11Nq6lJaTxF+8HoqRq7ft3LtTHThbMfLBzo7cUviWlYgZFXsyaosU7OLI+fYu5FSTPuo1ccm/THRT6cAPmtaCjTgt1q7GxWo/EETXsTKOSLjfw/yxnBKy+HjWlV83+KE1PEDcv3cPiJjCdOHw8/I+kAD5zbpxN0/XdYasiXaus/wZEkd7ib40VETOMKjlz3PS6+vX8Yuk3x3bD70aNjV0kVqHOEw3yfGic+ypnJ9CHnkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEZP5bvopIjJ/Ld9FAkAAAAAAAAAAAAAAAAAAAAAAL0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHmAAAADzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACdAAAAAAAAAAAAAAAAAAAAAAD46ADWqcAAAAAAAAAAH2IAGSXAAAAAAGpqOo1dMhZLce9rZHpGxGRukVzlyqIiNRV8lNsrnjWRsVTTZH3PY2t1CNVsYb/D91/P3kVPUDtUb8F9jn10nRGrheLA+JfR6Jk9LFhtfhbmSv4kiRpw2K7Cr5rjonzKhcdV1SDSoP3yurRO1RrZHorG4ThSLsXYicuX3IsiZTsvo10VlavrsKRMReTEdE1yonyyq8vmBdgfPqmlU5amizyMestrUp4Z3cRycSPMy7F5/hyxvLp6lg8Ny1qLLNDiJGxNRmhrRKqrhETdtT5JzUCwgr+v04L+v6LXtNV8LuOro8qiPw1OS90+RxaNmHSrWnuszcGhVu3qzZJHLtjTd7jVVfoqJkC5WLsFe1BXlVUksbtiInXamV+xmjbhv0oLldVWGdiSMVUwqoqZQpukzNsXqUzHK5kl7UXNVUVOSquOpx7c9d+g0IJoqzZotHjfBJZkky5yovKJjf6kVEyvXmnkB9RBQZ6sWpR6hZvI6WaLQ68zHblTbJtkXenzynJTp6JVhpeIaSVkc32rSnSzqrlVZXo+PDnZ6u953P5gWs8rVhtWtJO5ksjY0yrYmK9y/RE5qU7xBSgs2/E9mZrnS1KEckDkcqcN6NkVHJjzyiczW1mpDp0Gox00dG2fR0llTcq73o9E3Lnq7mvMC/g5PiaKRdJW1AirNRkbaYidXbFy5v5t3J+ZVtQWWxp9fVJXRtpalfdLOs+5I0hRithR+OaNXa1e2XJkC7z3Ia9qtXkVUktOcyNETqqNVy/ZFNgo+iorbWio2zFYg/eNngLC16MYzgO91qu5qiLnmnLt0Nnxiv/a1Bt19VmncGRVW2rkh4uW43bfPGcZ+fmBa32IY54oHyNbLNnhtVebsdcHnYuw17MFeRXcSxu4aI3OdqZX7FLr1arZPC1rVHxWMcWJtl7HNRVzmJPf5/TPX8zv61/49o/8Au2P/ALYHRq6nXtWG12NlZMsDbGySNWq1rlVEyi9Fyi8jcPm1JdHWzpS6+9Er/uKDasjlRm7c7rj+rGcfngzMtl0OkJrMkDaHsb1jXUFkRqv3+7uVFT3uHtxnn18wPpAKVotBlzVdNTUpFuLBpjXsc5HtRypKu1ytdzVUTHNfqa2lLW4ukrC96+IVtf7emXb9vvcTenw9s8umAL8Dga9bh0/XNHt3JUhqpxo3yuXDGuc1NuV8s4U4FCGtrF2gydHS1Zr+oP2Kqoj03ZRFTt8lAvwKHcoV0p67qSNVLdTUkWvJuX+FhIuSds5XPc1tXtwu8QPmibBBdi1KGP3pJHWFbvaiqidGxqi9Oi57qBfbVyGo+u2ZVRbEqQx4TOXKir/k1TYOL4i/7xon/wDZN/8AtyFU8OcZ2qUHT26rNV48ntcbUlWd6e9lsidEb0VFXCckwB9FPOvYhtQpNXkbJGqqiOauUyiqi/dFKZoDdIlfTZbdK7XnukbbYiu3quHb0kT/AMvtnl0waunOoaZpGmyNSOBKmrvS8qJjhfzmtV/ZObfVAPoIKDasU9Qr6nP7dDHVdqzFa6djlgmRIGJteqdGL1RV5ZROuSxeFJkm8Poteu2FrZJGsa2V0kbsOX3mOXnsXyA7hhy7Wq5UVcJnkmVPnXh7ctyk91uu3UdsvtsbUlWd67V3JLnkmHYVFXCckx1wbWj0oKNfwvarNc2e5Xcyw/cqrInAc9EXPZWpjsBeK0yWa0c7WSMSRqORsjFa5M+SovNFPQ+d0aFbUK0XtjFkSLw5A9iK5URHZk976pjkvkdPRYINP1LSLEauatvSpJbb3OVyyuThLud3X3nc/mBcQeVWzDcqxWaz98MzEex2MZaqZReZ6gCMn8t30UkRk/lu+igSAAAAAAAAAAAAAAAAAAAAADHNPmZAGMr2+4yvb7mQBjK9vuMr2+5kAYyvb7jK9vuZAGMr2+4yvb7mQBjK9vuMr2+5kAYyvb7jK9vuZAGMr2+4yvb7mQBjK9vuMr2+5kAYyvb7jK9vuZAGMr2+4yvb7mQBjK9vuMr2+5kAYyvb7jK9vuZAGMr2+4yvb7mQBjK9vuMr2+5kAYyvb7jK9vuZAGMr2+4yvb7mQBjK9vuMr2+5kAYyvb7jK9vuZAGMr2+4yvb7mQBjK9vuMr2+5kAYyvb7mU+YAAAAF+RjK9vuZAGMr2+4yvb7mQBjK9vuMr2+5kAYyvb7jK9vuZAGMr2+4yvb7mQBjK9vuMr2+5kAYyvb7jK9vuZAGMr2+4yvb7mQBjK9vuMr2+5kAYyvb7jK9vuZAGMr2+4yvb7mQBjK9vuMr2+5kAYyvb7jK9vuZAGMr2+4yvb7mQBjK9vuMr2+5kAYyvb7jK9vuZAGMr2+4yvb7mQBjK9vuMr2+5kAYyvb7jK9vuZAGMr2+4yvb7mQBjK9vuMr2+5kAY5r8jIAAAAAAAAAAAAAAAAAAAAAAB8dABrVOHpBEs9iOFq4WR6NRfquDzNnTf8AxOp/8Zn/ANSHPKaiZTHbpzafpNes+WWS4/hzLA5WbUy5EyuEXyMw6fpNiuyWOS41JJkgbu28nKmeePI9bFWW3RtxxbeWovc5XOwjUx1VSUVOajSqRTbVVdRY5qtXKOTHVD485r5betb6V+eJ0E8kLsbo3K1cd0XB5mzqX/idv/4z/wD6lNY+zjNxEvKewAHSH2IAGSXAAAAAAAHD8WXpqFOm6G1LVSW2yKSSKJJHoxUcq4arXZXknkB3AVObWLtahXl02xPqSy3Y4Huuxezq1HKibUThtznPXC4+fQ7msaomk6Ut2aLcqKxu3eiNRzlRvNy8kRFXmoHQPCWpDNbr2ZEVZK+7h8+Sbkwq+n+Zx5/Eb62mx2LNNjJ5p0ghYllqxyLjO5JPJuEXmqZ5Yx0IReKUsV2MrUklvvsrWSu2dqt3I3eruInLbt55xnywBYh16nE8O37d61qyXI3QuhtNjbC5yO4acNiqiKnVFVVX8zVi12eFWQwVZrk1i/ZrsSSZrduxXL128m+781RO4FlBoaPqLtSqPkkrrXmilfDLErt2x7VwuF806Ln5nHg8U3Z203x6I5W3nPjrqtlvvPblV3cvdbhrlzzXl0As4OAniGw/TW2I9OakyTyQTMlstjZE5iqi5eqc8qnLCeh4p4vhmp0ZKleN81tj37JbLY2MRjtrvf5ovvckx168gLKCvxeJvbq9JdJpLantxPl4bpkY2NrHbXZdz/qXCYzkjb8ULA+vXbQRtySBZ5ILNhkPDajtuMr+JVVFxjl80AsQK8niWW0+szSNNdbWxTS21XTJGjW5xtXkvPIs+J3M0urqFaix8E9fjudPZZCjeX4UznLuvy+YFhBXZPFO+zXhoUksLNVjtI187YnuY/OEYi/idy580TpzNzxPqFzTdEkt0Io5JWuYmJHYREVyJnpz64/P5AdYFb1HxX7BPLA+pE6WrC2W232trdmUVdrMom9cJny8jWvaxZdbtvqWXcDOnOixj8Msqo71TAFtBxpdebHp1q57MqpXuJU27/xfxGs3Zx/dnHyIVtfktaxNSgpNfFDOsMj/AGhqSNVE/Esa89vzz+QHcAADr1AAAAAAAAGAAAAAAAAAAAAAEZP5bvopIjJ/Ld9FAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjoANapw9IJXQTxzNxujcjkz3RcnmCJ2OvNZ0id8j5P3gzivV7mMVu3K/UzFa0mB0bo11B/BdvZG9zdu78jjg8vFFVcuspek8qz2JJnJhZHq5U+q5PMA9YinIACR9iABklwAAAAABzdb02bUoayVrTa01aw2dj3RcRFVEVMKmU79zpADi2tJ1G7p/Bt6nC6xHPHPBNHV2tYrFRURW713dO6G/frWbNBYYbTYJlx/E4SPauOqK1eqL2zn5m2AKyzwk1tNzUswss+1+1scysiQsdt2qiRZX3VTOeecrnJ7/wCHrCQQyMvxMvwWFnjljqtbGmW7VZsRebcd3Z+Z3wBy9F0ubTn3ZbNz2qW5MkzncPZhdrW4RMry93l8u/U8a2g8C5Xse1buDcsWtvDxni7vd6+W7r548jtADS02h7Atv+LxPabL5/w427scuvPp1NOpoPs0Okx+1bv3dI+TPDxxNzXtx15fj+fQ7IArdjws980c8NyHiR2Z5kSeskrMSqiqm3cnNMclz35HnD4RWrUpNrXYls1UlZxJqqPY9kkivwrMphUXGFRU8++C0ADhLoNmJKc1LUGxXK8T4nSOrNVkjXKjlRWNVuMKiYwvqedjw3PJNBaj1CN91kCwSy2qrZUkTcrs7cptVFVcc+nLmWEAcylpHsl6K17Rv4dRKypw0buw7du5YRPoiHHXwc9sVdkV+JVjp+yPdLUST3cqu5mXe673vn5FrAFZt+FZ7Ol1tNdqELqsVWOu5JabXuarUxvjdnLHL892Dsarpqajo8un8Z0e9qI2TG5WqioqL8+aIbwArtrw3YmtyW47tVlizEyOy59JsiOVqKiOYir7q4Xou5Oh7WfDqTzTyJb2pKtXCcNOXAervJUT3s46Jj5ncAFcteGrUzrMMWqJHSsW223QrX3OR6Oa5U3bk91Vbnpn59/Wfw/Na1iG5ZuxPjgn48X+zI2ZvZnERfwfLGVTzO8APCpFYiic21ZSw9ZHORyRozDVXk3Cdk5Z8z3AAAAAAAAAAAAAAAAAAAAAAABGT+W76KSIyfy3fRQJAAAAAAAAAAAAAAAAAAAAABXdDszy0dedLPI90N+yxiueqqxqImETsiFiODd8LV7Nm1LFfv1I7i5swwSojJVxhV5oqoqpyXGMgcOPxJqNHRdGar4GJNRbK+5eSRzHycvcVzfwqvXKmxqvjGxXuTQVGU81a8c0qP4knFc5u7YxWJjp/UvXPQ7V3w9BZijhguXacMcHs3CryJsdH0wrXIqZxyynP5nlL4XqbmrSt3aGIGV3pWlRvEYxMNRcovNE80wvzA8aetanqWt+z04K0dNkEFiR0yO4iNkRV2oiefLz6Y8zU0fxJq9lmj2r9ak2pqj1iakSu3sdhyoq55YXb08iwVNLr1L9i5E+VZJ4o4nI92URGZx8881zlVNaDw7Tgo6ZUbJOsemycSJXOTLlw5Pe5c095emAORR8V2JfENWhK/T5orb5GNSs57nRbUVUy9fdd0xyxjJ4UfEniK5DpMqVdMRNVR7YkVX/AMNzUVdzu6YReSfLmdWj4Sp0rFOVl2+9lF7nVoZJGqyNHIqKmNuVTn5rn5mzU8O06kWlRxyTqmlq5Ydzk97c1Wru5c+Sr0wBxJfF9qKjVjliqx6hNamrPeqPdC3hZ3ORE95fLCfPqdzw1q79Y06SaaJGSxTPherUcjXq3+pu5EXCoqdTyf4Zpui2xz2opW2pLcc8b0R8b353InLGOaphUXkdHTqKUKvBSxYsKrle6SeTe5yr9k+iIiAbQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjoANapwAAAAAAAAAAfYgAZJcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEZP5bvopIjJ/Ld9FAkAAAAAAAAAAAAAAAAAAAAAEdyr+FEVO6qSXoRj/AJbfogDL/hb6/wCgy/4W+v8AoauqX/3dVbYdEsjONHG/C42I5yN3flnJzG+J4pJbUUVZzpIbkdViK/HF3P2q9OXJEVr/ANCgd3L/AIW+v+gy/wCFvr/ocKr4jfO+rM/T3x6fdl4VezxUVXKudqqzyR2OS5XqnQ0rfiK3PortQSv7DVZbjj47pkXciTox/LHJuEXmv+oFqy/4W+v+gy/4W+v+hw/8RSSV4JaunvlW5Lw6TXSIxZmo1XLIuU91uEVU6qqY5cz1l1i7Fp7Zn6Ssc/FWN7JrDY424TO7evVq+WE/IDr5f8LfX/QZf8LfX/QrDPEt25Po7tPpxLDclljma+ZMo5iOyiKiKip7uUXz+R7Qa5KzNetXmuW5rlmOOOWZrURsbsOXdt5NTkiJhV5p1AsOX/C31/0GX/C31/0OAviWV7ascGmvfbnsSVnwOlRvDexqquXYVFTCZz2X8jpaPqK6lUfJJAteaKV8M0Su3bHtXC4XzToufmBu5f8AC31/0GX/AAt9f9Di0tfnt8KymmSN02bdw7SSIq4TPvOZjk1cclyvVM4MUPEEtmektjTX1q2oZ9lmWVHK73VciOb/AE5aiqnNQO3l/wALfX/QZf8AC31/0KxU8VXrcdB8ehORNRY5a2bLeatTK7uXupjKovPPZD3k1ma/S01K7H1bFq9wJWZRysSNzlkTPmmI1TPzAsGX/C31/wBDKZ80RPoZOLrFyevrFGKOV7YpK1l72tVEyrUZheadUyoHaBV4PEsjWUateo61M+lDYdxrLGSPRydG5REe7kufwp6m1rHiN2k2V49JvsrFYjpXWWNeu5UTLWdXImefNPPGQO8Ct2/E9ivJbczSJJa1S0lV8jZ2o5XO27drVTnzeiLzTGfM2I9dtrDdZLpmy5UexroksN2Kj0yjt6omE655eXmB3AVtnitz6PEjoJLZS62msMVhrmq5zcoqPxhU5p2xz7B+vOoP1Ga7HIksS12JX4zVYj3pya1yomEyvNV+vICyA5Oh62zVZLUDo447FVW8RscyStw5MoqOT6L5J0OsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ0AAAAAAAAAAAAAAAAAAAAAAPjoANapwAAAAAAAAAAfYNid3fqUbE7u/UpIGSXCOxO7v1KNid3fqUkAI7E7u/Uo2J3d+pSQAjsTu79SjYnd36lJACOxO7v1KNid3fqUkAI7E7u/Uo2J3d+pSQAjsTu79SjYnd36lJACOxO7v1KNid3fqUkAI7E7u/Uo2J3d+pSQAjsTu79SjYnd36lJACOxO7v1KNid3fqUkAI7E7u/Uo2J3d+pSQAjsTu79SjYnd36lJACOxO7v1KNid3fqUkAI7E7u/Uo2J3d+pSQAjsTu79SjYnd36lJACOxO7v1KNid3fqUkAI7E7u/Uo2J3d+pSQAjsTu79SjYnd36lJACOxO7v1KNid3fqUkAI7E7u/Uo2J3d+pSQAjsTu79SjYnd36lJACOxO7v1KNid3fqUkAI7E7u/Uph7U2O5u6L/AFKTIyfy3fRQJAAAAAAAAAAAAAAAAAAAAAC9CMf8tvyTBIg5qZzzT6KB4anSbqOmWaT3KxJ43M3InNqqnJU+nU5VbwxHBd0uytpXuoxK2RNmOO/DsPXnywr5Fxz/ABHb2/3O/Uo2/wBzv1KBw6nhyaB1SCTUeJp1KXi16/BRHIqZ2o5+eaNzy5J0Q9H+HWSeH2aRLO18aWEmc50WUenG4itVufPp/wBYOxt/ud+pRt/ud+pQOEnhqSBrW0dQWFK06zUmui3pAjmqjo15+8xcrhOSp3Fvw9btsqyz6nHNbryvk3T1UfEu5MYSPcmMY5c1Xr3O7t/ud+pRt/ud+pQODV8NS1K1FsGoJx6dqWdJHQJh6SbtzVaipjk7qnbp5E18OyxPbYp30itx2Z5mSOh3N2yuy5itymfLnlOh29v9zv1KNv8Ac79Sgcip4f8AZ56c77ayzQ2JbEz1jROK+RqtXln3UTKY69D3q6XYqSyOguo1ktx9mVqwou9rkxsznlzwufkdDb/c79Sjb/c79SgcajoVqokdT95q7TIdyMrJCiOVq5RGufnm1M9k6IYoeH7FeailrUlsVdOz7LFwUa5F2q1Fe7K7sNVUTCJ3O1t/ud+pRt/ud+pQOTQ0H2OHRo/at/7rY5ueHji5Zt78u/meFDR5quvRq5VkrQMsTNk27UWSaXdjr/S1FT/iO7t/ud+pRt/ud+pQPQ52oaX7ber2eNs4MM0W3bnPERqZzny2/c3dv9zv1KZTl0VfzArt3wtPa02vpztQhdVjrMruSWm17mq1Mb43ZRWOX57sHlqPg9bk9xWXomRW3Me9ZKqSSorUaiIj1X8Pupyx35loyvcZXuBx5dB4lW7B7Vj2q8y3nh/h2uYu3rz/AAdfn0PLVPDf7wntTJaa100sMrWvh3sRY0VMOTPvIufkd3K9xle4Ffp+GXwZdJdY963mXF2V0Y3LWI3aiIvJOXX/AD6nvqHh1l59977G11qSGWNeGi8J8fRcLyci+acuR2cr3GV7gc/SNOmocZ9ieCWSVU5QVmwsaiJ5Iiqq/mq/kdIjle4yvcCQI5XuMr3AkCOV7jK9wJAjle4yvcCQI5XuMr3AkCOV7jK9wJAjle4yvcCQI5XuMr3AkCOV7jK9wJAjle4yvcCQI5XuMr3AkCOV7jK9wJAjle4yvcCQI5XuMr3AkCOV7jK9wJAjle4yvcCQI5XuMr3AkCOV7jK9wJAjle4yvcCQI5XuMr3AkCOV7jK9wJAjle4yvcCQI5XuMr3AkCOV7jK9wJAjle4yvcCQI5XuMr3AkCOV7jK9wJAjle4yvcCQI5XuMr3AkCOV7jK9wJAjle4yvcCQI5XuMr3AkE6GE59TIAAAAAAAAAAAAAAAAAAAAAB//9k=" />),
            category: 'common',
            attributes: {
  "contenthDg": {
    "type": "string",
    "default": "Close sidebar"
  },
  "contentXoN": {
    "type": "string",
    "default": "\n              Home\n            "
  },
  "contentIna": {
    "type": "string",
    "default": "\n              Trending\n            "
  },
  "contentkyn": {
    "type": "string",
    "default": "\n              Bookmarks\n            "
  },
  "contenteNC": {
    "type": "string",
    "default": "\n              Messages\n            "
  },
  "contentxrI": {
    "type": "string",
    "default": "\n              Profile\n            "
  },
  "contentSlZ": {
    "type": "string",
    "default": "Lisa Marie"
  },
  "contentSKc": {
    "type": "string",
    "default": "Account Settings"
  },
  "contentMvN": {
    "type": "string",
    "default": "Home"
  },
  "contentyTT": {
    "type": "string",
    "default": "Trending"
  },
  "contentACq": {
    "type": "string",
    "default": "Bookmarks"
  },
  "contentNqr": {
    "type": "string",
    "default": "Messages"
  },
  "contentyno": {
    "type": "string",
    "default": "Profile"
  },
  "contentzHG": {
    "type": "string",
    "default": "Lisa Marie"
  },
  "contentYoS": {
    "type": "string",
    "default": "Account settings"
  },
  "contentqDs": {
    "type": "string",
    "default": "Open sidebar"
  },
  "contentbJL": {
    "type": "string",
    "default": "Settings"
  },
  "contentYQy": {
    "type": "string",
    "default": "Settings"
  },
  "contentdTR": {
    "type": "string",
    "default": "Account"
  },
  "contentybQ": {
    "type": "string",
    "default": "Ullamcorper id at suspendisse nec id volutpat vestibulum enim. Interdum blandit."
  },
  "contentJBs": {
    "type": "string",
    "default": "Notifications"
  },
  "contenthAR": {
    "type": "string",
    "default": "Enim, nullam mi vel et libero urna lectus enim. Et sed in maecenas tellus."
  },
  "contentxsh": {
    "type": "string",
    "default": "Security"
  },
  "contentpkt": {
    "type": "string",
    "default": "Semper accumsan massa vel volutpat massa. Non turpis ut nulla aliquet turpis."
  },
  "contentUIK": {
    "type": "string",
    "default": "Appearance"
  },
  "contentnuK": {
    "type": "string",
    "default": "Magna nulla id sed ornare ipsum eget. Massa eget porttitor suscipit consequat."
  },
  "contentSwg": {
    "type": "string",
    "default": "Billing"
  },
  "contentypk": {
    "type": "string",
    "default": "Orci aliquam arcu egestas turpis cursus. Lectus faucibus netus dui auctor mauris."
  },
  "contentEAn": {
    "type": "string",
    "default": "Integrations"
  },
  "contentOaL": {
    "type": "string",
    "default": "Nisi, elit volutpat odio urna quis arcu faucibus dui. Mauris adipiscing pellentesque."
  },
  "contentPYD": {
    "type": "string",
    "default": "Additional Resources"
  },
  "contentzOc": {
    "type": "string",
    "default": "Quis viverra netus donec ut auctor fringilla facilisis. Nunc sit donec cursus sit quis et."
  },
  "contentByG": {
    "type": "string",
    "default": "Account"
  },
  "contentNSE": {
    "type": "string",
    "default": "Profile"
  },
  "contentpgz": {
    "type": "string",
    "default": "This information will be displayed publicly so be careful what you share."
  },
  "contentXNR": {
    "type": "string",
    "default": " First name "
  },
  "contentsNl": {
    "type": "string",
    "default": " Last name "
  },
  "contentcuR": {
    "type": "string",
    "default": " Username "
  },
  "contentdsL": {
    "type": "string",
    "default": " workcation.com/ "
  },
  "contentmsm": {
    "type": "string",
    "default": " Photo "
  },
  "contentdDY": {
    "type": "string",
    "default": "Change"
  },
  "contentIFK": {
    "type": "string",
    "default": " user photo"
  },
  "contentvTX": {
    "type": "string",
    "default": "Remove"
  },
  "contentcZe": {
    "type": "string",
    "default": " Description "
  },
  "contentBfN": {
    "type": "string",
    "default": "Brief description for your profile. URLs are hyperlinked."
  },
  "contentfxi": {
    "type": "string",
    "default": " URL "
  },
  "contentQqh": {
    "type": "string",
    "default": "Personal Information"
  },
  "contentjgX": {
    "type": "string",
    "default": "This information will be displayed publicly so be careful what you share."
  },
  "contentmfN": {
    "type": "string",
    "default": " Email address "
  },
  "contentsQH": {
    "type": "string",
    "default": " Phone number "
  },
  "contentTVO": {
    "type": "string",
    "default": " Country "
  },
  "contentQwM": {
    "type": "string",
    "default": "United States"
  },
  "contentuQR": {
    "type": "string",
    "default": "Canada"
  },
  "contentDxK": {
    "type": "string",
    "default": "Mexico"
  },
  "contentjIH": {
    "type": "string",
    "default": " Language "
  },
  "contentvZS": {
    "type": "string",
    "default": "This account was created on "
  },
  "contentWkH": {
    "type": "string",
    "default": "January 5, 2017, 8:35:40 PM"
  },
  "contentDgW": {
    "type": "string",
    "default": "."
  },
  "contentBEU": {
    "type": "string",
    "default": "Cancel"
  },
  "contentqsm": {
    "type": "string",
    "default": "Save"
  },
  "imageurlKFE": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtlPT": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlWNE": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1550525811-e5869dd03032.jpeg'
  },
  "imagealtUEz": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlUPh": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtsIG": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurladj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1550525811-e5869dd03032.jpeg'
  },
  "imagealtQNh": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurldXy": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-mark.svg'
  },
  "imagealtPHq": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurlnSj": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1550525811-e5869dd03032.jpeg'
  },
  "imagealtlSp": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgNcr": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgzIr": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgIjq": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z\"/>\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z\"/>"
  },
  "svgnbx": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgVhl": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgBfs": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\"/>"
  },
  "svgMzM": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgjbS": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z\"/>\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z\"/>"
  },
  "svgSwa": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgdwK": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgNJs": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\"/>"
  },
  "svgBNo": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
  },
  "svgyEL": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgUCo": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z\"/>\n                  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 12a3 3 0 11-6 0 3 3 0 016 0z\"/>"
  },
  "svgPld": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"/>"
  },
  "svgWrb": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z\"/>"
  },
  "svgNNu": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgnSJ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z\"/>"
  },
  "svgNmA": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z\"/>"
  },
  "svgLZJ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/>"
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
            value={ attributes.svgNcr }
            onChange={ ( value ) => {
              setAttributes({ svgNcr: value });
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
            value={ attributes.svgzIr }
            onChange={ ( value ) => {
              setAttributes({ svgzIr: value });
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
            value={ attributes.svgIjq }
            onChange={ ( value ) => {
              setAttributes({ svgIjq: value });
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
            value={ attributes.svgnbx }
            onChange={ ( value ) => {
              setAttributes({ svgnbx: value });
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
            value={ attributes.svgVhl }
            onChange={ ( value ) => {
              setAttributes({ svgVhl: value });
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
            value={ attributes.svgBfs }
            onChange={ ( value ) => {
              setAttributes({ svgBfs: value });
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
            value={ attributes.svgMzM }
            onChange={ ( value ) => {
              setAttributes({ svgMzM: value });
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
            value={ attributes.svgjbS }
            onChange={ ( value ) => {
              setAttributes({ svgjbS: value });
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
            value={ attributes.svgSwa }
            onChange={ ( value ) => {
              setAttributes({ svgSwa: value });
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
            value={ attributes.svgdwK }
            onChange={ ( value ) => {
              setAttributes({ svgdwK: value });
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
            value={ attributes.svgNJs }
            onChange={ ( value ) => {
              setAttributes({ svgNJs: value });
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
            value={ attributes.svgBNo }
            onChange={ ( value ) => {
              setAttributes({ svgBNo: value });
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
            value={ attributes.svgyEL }
            onChange={ ( value ) => {
              setAttributes({ svgyEL: value });
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
            value={ attributes.svgUCo }
            onChange={ ( value ) => {
              setAttributes({ svgUCo: value });
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
            value={ attributes.svgPld }
            onChange={ ( value ) => {
              setAttributes({ svgPld: value });
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
            value={ attributes.svgWrb }
            onChange={ ( value ) => {
              setAttributes({ svgWrb: value });
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
            value={ attributes.svgNNu }
            onChange={ ( value ) => {
              setAttributes({ svgNNu: value });
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
            value={ attributes.svgnSJ }
            onChange={ ( value ) => {
              setAttributes({ svgnSJ: value });
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
            value={ attributes.svgNmA }
            onChange={ ( value ) => {
              setAttributes({ svgNmA: value });
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
            value={ attributes.svgLZJ }
            onChange={ ( value ) => {
              setAttributes({ svgLZJ: value });
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
        <div className="h-full flex">
            <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-blue-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                    <div className="absolute top-0 right-0 -mr-12 pt-4">
                        <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contenthDg} default="Close sidebar" onChange={ (newtext) =>  {
        setAttributes({ contenthDg: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNcr }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="pt-5 pb-4">
                        <div className="flex-shrink-0 flex items-center px-4">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlKFE: media.url,
            imagealtlPT: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlKFE } 
            alt={ attributes.imagealtlPT } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <nav aria-label="Sidebar" className="mt-5">
                            <div className="px-2 space-y-1"> <span className="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
              
              
      <svg
         className="mr-4 h-6 w-6 text-blue-gray-400 group-hover:text-blue-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzIr }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentXoN} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentXoN: newtext });
      }}
    /></span>
 <span className="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
              
              
      <svg
         className="mr-4 h-6 w-6 text-blue-gray-400 group-hover:text-blue-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIjq }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentIna} default="Trending" onChange={ (newtext) =>  {
        setAttributes({ contentIna: newtext });
      }}
    /></span>
 <span className="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
              
              
      <svg
         className="mr-4 h-6 w-6 text-blue-gray-400 group-hover:text-blue-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnbx }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentkyn} default="Bookmarks" onChange={ (newtext) =>  {
        setAttributes({ contentkyn: newtext });
      }}
    /></span>
 <span className="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
              
              
      <svg
         className="mr-4 h-6 w-6 text-blue-gray-400 group-hover:text-blue-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVhl }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contenteNC} default="Messages" onChange={ (newtext) =>  {
        setAttributes({ contenteNC: newtext });
      }}
    /></span>
 <span className="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
              
              
      <svg
         className="mr-4 h-6 w-6 text-blue-gray-400 group-hover:text-blue-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBfs }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentxrI} default="Profile" onChange={ (newtext) =>  {
        setAttributes({ contentxrI: newtext });
      }}
    /></span>

                            </div>
                        </nav>
                    </div>
                    <div className="flex-shrink-0 flex border-t border-blue-gray-200 p-4"> <span className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlWNE: media.url,
            imagealtUEz: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlWNE } 
            alt={ attributes.imagealtUEz } 
            onClick={ open } 
            className="inline-block h-10 w-10 rounded-full"
          /> 
        )} 
      />
            </div>
            <div className="ml-3">
              <p className="text-base font-medium text-blue-gray-700 group-hover:text-blue-gray-900"><RichText tagName="span" value={attributes.contentSlZ} default="Lisa Marie" onChange={ (newtext) =>  {
        setAttributes({ contentSlZ: newtext });
      }}
    /></p>
              <p className="text-sm font-medium text-blue-gray-500 group-hover:text-blue-gray-700"><RichText tagName="span" value={attributes.contentSKc} default="Account Settings" onChange={ (newtext) =>  {
        setAttributes({ contentSKc: newtext });
      }}
    /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
                <div className="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div className="hidden lg:flex lg:flex-shrink-0">
                <div className="flex flex-col w-20">
                    <div className="flex-1 flex flex-col min-h-0 overflow-y-auto bg-blue-600">
                        <div className="flex-1">
                            <div className="bg-blue-700 py-4 flex items-center justify-center">
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlUPh: media.url,
            imagealtsIG: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlUPh } 
            alt={ attributes.imagealtsIG } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                            </div>
                            <nav aria-label="Sidebar" className="py-6 flex flex-col items-center space-y-3"> <span className="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
              
              
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMzM }}
        >
      </svg>
      
              <span className="sr-only"><RichText tagName="span" value={attributes.contentMvN} default="Home" onChange={ (newtext) =>  {
        setAttributes({ contentMvN: newtext });
      }}
    /></span>
</span> <span className="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
              
              
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjbS }}
        >
      </svg>
      
              <span className="sr-only"><RichText tagName="span" value={attributes.contentyTT} default="Trending" onChange={ (newtext) =>  {
        setAttributes({ contentyTT: newtext });
      }}
    /></span>
</span> <span className="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
              
              
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSwa }}
        >
      </svg>
      
              <span className="sr-only"><RichText tagName="span" value={attributes.contentACq} default="Bookmarks" onChange={ (newtext) =>  {
        setAttributes({ contentACq: newtext });
      }}
    /></span>
</span> <span className="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
              
              
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdwK }}
        >
      </svg>
      
              <span className="sr-only"><RichText tagName="span" value={attributes.contentNqr} default="Messages" onChange={ (newtext) =>  {
        setAttributes({ contentNqr: newtext });
      }}
    /></span>
</span> <span className="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
              
              
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNJs }}
        >
      </svg>
      
              <span className="sr-only"><RichText tagName="span" value={attributes.contentyno} default="Profile" onChange={ (newtext) =>  {
        setAttributes({ contentyno: newtext });
      }}
    /></span>
</span>
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex pb-5"> <span className="flex-shrink-0 w-full">
            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurladj: media.url,
            imagealtQNh: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurladj } 
            alt={ attributes.imagealtQNh } 
            onClick={ open } 
            className="block mx-auto h-10 w-10 rounded-full"
          /> 
        )} 
      />
            <div className="sr-only">
              <p><RichText tagName="span" value={attributes.contentzHG} default="Lisa Marie" onChange={ (newtext) =>  {
        setAttributes({ contentzHG: newtext });
      }}
    /></p>
              <p><RichText tagName="span" value={attributes.contentYoS} default="Account settings" onChange={ (newtext) =>  {
        setAttributes({ contentYoS: newtext });
      }}
    /></p>
            </div>
          </span>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
                <div className="lg:hidden">
                    <div className="bg-blue-600 py-2 px-4 flex items-center justify-between sm:px-6">
                        <div>
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurldXy: media.url,
            imagealtPHq: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurldXy } 
            alt={ attributes.imagealtPHq } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <div>
                            <button type="button" className="-mr-3 h-12 w-12 inline-flex items-center justify-center bg-blue-600 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentqDs} default="Open sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentqDs: newtext });
      }}
    /></span>

                                
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBNo }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <main className="flex-1 flex overflow-hidden">
                    <div className="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
                        <nav aria-label="Breadcrumb" className="bg-white border-b border-blue-gray-200 xl:hidden">
                            <div className="max-w-3xl mx-auto py-3 px-4 flex items-start sm:px-6 lg:px-8"> <span className="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-blue-gray-900">
              
              
      <svg
         className="h-5 w-5 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyEL }}
        >
      </svg>
      
              <span><RichText tagName="span" value={attributes.contentbJL} default="Settings" onChange={ (newtext) =>  {
        setAttributes({ contentbJL: newtext });
      }}
    /></span>
</span>
                            </div>
                        </nav>
                        <div className="flex-1 flex xl:overflow-hidden">
                            <nav aria-label="Sections" className="hidden flex-shrink-0 w-96 bg-white border-r border-blue-gray-200 xl:flex xl:flex-col">
                                <div className="flex-shrink-0 h-16 px-6 border-b border-blue-gray-200 flex items-center">
                                    <p className="text-lg font-medium text-blue-gray-900">
                                        <RichText tagName="span" value={attributes.contentYQy} default="Settings" onChange={ (newtext) => { setAttributes({ contentYQy: newtext }); }} /></p>
                                </div>
                                <div className="flex-1 min-h-0 overflow-y-auto"> <span className="bg-blue-50 bg-opacity-50 flex p-6 border-b border-blue-gray-200" aria-current="page">
                
                
      <svg
         className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUCo }}
        >
      </svg>
      
                <div className="ml-3 text-sm">
                  <p className="font-medium text-blue-gray-900"><RichText tagName="span" value={attributes.contentdTR} default="Account" onChange={ (newtext) =>  {
        setAttributes({ contentdTR: newtext });
      }}
    /></p>
                  <p className="mt-1 text-blue-gray-500"><RichText tagName="span" value={attributes.contentybQ} default="Ullamcorper id at suspendisse nec id volutpat vestibulum enim. Interdum blandit." onChange={ (newtext) =>  {
        setAttributes({ contentybQ: newtext });
      }}
    /></p>
                </div>
              </span>
 <span className="hover:bg-blue-50 hover:bg-opacity-50 flex p-6 border-b border-blue-gray-200">
                
                
      <svg
         className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPld }}
        >
      </svg>
      
                <div className="ml-3 text-sm">
                  <p className="font-medium text-blue-gray-900"><RichText tagName="span" value={attributes.contentJBs} default="Notifications" onChange={ (newtext) =>  {
        setAttributes({ contentJBs: newtext });
      }}
    /></p>
                  <p className="mt-1 text-blue-gray-500"><RichText tagName="span" value={attributes.contenthAR} default="Enim, nullam mi vel et libero urna lectus enim. Et sed in maecenas tellus." onChange={ (newtext) =>  {
        setAttributes({ contenthAR: newtext });
      }}
    /></p>
                </div>
              </span>
 <span className="hover:bg-blue-50 hover:bg-opacity-50 flex p-6 border-b border-blue-gray-200">
                
                
      <svg
         className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWrb }}
        >
      </svg>
      
                <div className="ml-3 text-sm">
                  <p className="font-medium text-blue-gray-900"><RichText tagName="span" value={attributes.contentxsh} default="Security" onChange={ (newtext) =>  {
        setAttributes({ contentxsh: newtext });
      }}
    /></p>
                  <p className="mt-1 text-blue-gray-500"><RichText tagName="span" value={attributes.contentpkt} default="Semper accumsan massa vel volutpat massa. Non turpis ut nulla aliquet turpis." onChange={ (newtext) =>  {
        setAttributes({ contentpkt: newtext });
      }}
    /></p>
                </div>
              </span>
 <span className="hover:bg-blue-50 hover:bg-opacity-50 flex p-6 border-b border-blue-gray-200">
                
                
      <svg
         className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNNu }}
        >
      </svg>
      
                <div className="ml-3 text-sm">
                  <p className="font-medium text-blue-gray-900"><RichText tagName="span" value={attributes.contentUIK} default="Appearance" onChange={ (newtext) =>  {
        setAttributes({ contentUIK: newtext });
      }}
    /></p>
                  <p className="mt-1 text-blue-gray-500"><RichText tagName="span" value={attributes.contentnuK} default="Magna nulla id sed ornare ipsum eget. Massa eget porttitor suscipit consequat." onChange={ (newtext) =>  {
        setAttributes({ contentnuK: newtext });
      }}
    /></p>
                </div>
              </span>
 <span className="hover:bg-blue-50 hover:bg-opacity-50 flex p-6 border-b border-blue-gray-200">
                
                
      <svg
         className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnSJ }}
        >
      </svg>
      
                <div className="ml-3 text-sm">
                  <p className="font-medium text-blue-gray-900"><RichText tagName="span" value={attributes.contentSwg} default="Billing" onChange={ (newtext) =>  {
        setAttributes({ contentSwg: newtext });
      }}
    /></p>
                  <p className="mt-1 text-blue-gray-500"><RichText tagName="span" value={attributes.contentypk} default="Orci aliquam arcu egestas turpis cursus. Lectus faucibus netus dui auctor mauris." onChange={ (newtext) =>  {
        setAttributes({ contentypk: newtext });
      }}
    /></p>
                </div>
              </span>
 <span className="hover:bg-blue-50 hover:bg-opacity-50 flex p-6 border-b border-blue-gray-200">
                
                
      <svg
         className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNmA }}
        >
      </svg>
      
                <div className="ml-3 text-sm">
                  <p className="font-medium text-blue-gray-900"><RichText tagName="span" value={attributes.contentEAn} default="Integrations" onChange={ (newtext) =>  {
        setAttributes({ contentEAn: newtext });
      }}
    /></p>
                  <p className="mt-1 text-blue-gray-500"><RichText tagName="span" value={attributes.contentOaL} default="Nisi, elit volutpat odio urna quis arcu faucibus dui. Mauris adipiscing pellentesque." onChange={ (newtext) =>  {
        setAttributes({ contentOaL: newtext });
      }}
    /></p>
                </div>
              </span>
 <span className="hover:bg-blue-50 hover:bg-opacity-50 flex p-6 border-b border-blue-gray-200">
                
                
      <svg
         className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLZJ }}
        >
      </svg>
      
                <div className="ml-3 text-sm">
                  <p className="font-medium text-blue-gray-900"><RichText tagName="span" value={attributes.contentPYD} default="Additional Resources" onChange={ (newtext) =>  {
        setAttributes({ contentPYD: newtext });
      }}
    /></p>
                  <p className="mt-1 text-blue-gray-500"><RichText tagName="span" value={attributes.contentzOc} default="Quis viverra netus donec ut auctor fringilla facilisis. Nunc sit donec cursus sit quis et." onChange={ (newtext) =>  {
        setAttributes({ contentzOc: newtext });
      }}
    /></p>
                </div>
              </span>

                                </div>
                            </nav>
                            <div className="flex-1 xl:overflow-y-auto">
                                <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                                     <h1 className="text-3xl font-extrabold text-blue-gray-900"><RichText tagName="span" value={attributes.contentByG} default="Account" onChange={ (newtext) =>  {
        setAttributes({ contentByG: newtext });
      }}
    /></h1>

                                    <form className="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
                                        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                                            <div className="sm:col-span-6">
                                                 <h2 className="text-xl font-medium text-blue-gray-900"><RichText tagName="span" value={attributes.contentNSE} default="Profile" onChange={ (newtext) =>  {
        setAttributes({ contentNSE: newtext });
      }}
    /></h2>

                                                <p className="mt-1 text-sm text-blue-gray-500">
                                                    <RichText tagName="span" value={attributes.contentpgz} default="This information will be displayed publicly so be careful what you share." onChange={ (newtext) => { setAttributes({ contentpgz: newtext }); }} /></p>
                                            </div>
                                            <div className="sm:col-span-3">
                                                <label for="first-name" className="block text-sm font-medium text-blue-gray-900">
                                                    <RichText tagName="span" value={attributes.contentXNR} default="First name" onChange={ (newtext) => { setAttributes({ contentXNR: newtext }); }} /></label>
                                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"/>
                                            </div>
                                            <div className="sm:col-span-3">
                                                <label for="last-name" className="block text-sm font-medium text-blue-gray-900">
                                                    <RichText tagName="span" value={attributes.contentsNl} default="Last name" onChange={ (newtext) => { setAttributes({ contentsNl: newtext }); }} /></label>
                                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"/>
                                            </div>
                                            <div className="sm:col-span-6">
                                                <label for="username" className="block text-sm font-medium text-blue-gray-900">
                                                    <RichText tagName="span" value={attributes.contentcuR} default="Username" onChange={ (newtext) => { setAttributes({ contentcuR: newtext }); }} /></label>
                                                <div className="mt-1 flex rounded-md shadow-sm"> <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-blue-gray-300 bg-blue-gray-50 text-blue-gray-500 sm:text-sm"><RichText tagName="span" value={attributes.contentdsL} default="workcation.com/" onChange={ (newtext) =>  {
        setAttributes({ contentdsL: newtext });
      }}
    /></span>

                                                    <input type="text" name="username" id="username" autocomplete="username" value="lisamarie" className="flex-1 block w-full min-w-0 border-blue-gray-300 rounded-none rounded-r-md text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"/>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-6">
                                                <label for="photo" className="block text-sm font-medium text-blue-gray-900">
                                                    <RichText tagName="span" value={attributes.contentmsm} default="Photo" onChange={ (newtext) => { setAttributes({ contentmsm: newtext }); }} /></label>
                                                <div className="mt-1 flex items-center">
                                                    
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlnSj: media.url,
            imagealtlSp: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlnSj } 
            alt={ attributes.imagealtlSp } 
            onClick={ open } 
            className="inline-block h-12 w-12 rounded-full"
          /> 
        )} 
      />
                                                    <div className="ml-4 flex">
                                                        <div className="relative bg-white py-2 px-3 border border-blue-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-500">
                                                            <label for="user-photo" className="relative text-sm font-medium text-blue-gray-900 pointer-events-none"> <span><RichText tagName="span" value={attributes.contentdDY} default="Change" onChange={ (newtext) =>  {
        setAttributes({ contentdDY: newtext });
      }}
    /></span>
 <span className="sr-only"><RichText tagName="span" value={attributes.contentIFK} default="user photo" onChange={ (newtext) =>  {
        setAttributes({ contentIFK: newtext });
      }}
    /></span>

                                                            </label>
                                                            <input id="user-photo" name="user-photo" type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"/>
                                                        </div>
                                                        <button type="button" className="ml-3 bg-transparent py-2 px-3 border border-transparent rounded-md text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:outline-none focus:border-blue-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-blue-500">
                                                            <RichText tagName="span" value={attributes.contentvTX} default="Remove" onChange={ (newtext) => { setAttributes({ contentvTX: newtext }); }} /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-6">
                                                <label for="description" className="block text-sm font-medium text-blue-gray-900">
                                                    <RichText tagName="span" value={attributes.contentcZe} default="Description" onChange={ (newtext) => { setAttributes({ contentcZe: newtext }); }} /></label>
                                                <div className="mt-1">
                                                    <textarea id="description" name="description" rows="4" className="block w-full border border-blue-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"/>
                                                </div>
                                                <p className="mt-3 text-sm text-blue-gray-500">
                                                    <RichText tagName="span" value={attributes.contentBfN} default="Brief description for your profile. URLs are hyperlinked." onChange={ (newtext) => { setAttributes({ contentBfN: newtext }); }} /></p>
                                            </div>
                                            <div className="sm:col-span-6">
                                                <label for="url" className="block text-sm font-medium text-blue-gray-900">
                                                    <RichText tagName="span" value={attributes.contentfxi} default="URL" onChange={ (newtext) => { setAttributes({ contentfxi: newtext }); }} /></label>
                                                <input type="text" name="url" id="url" className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"/>
                                            </div>
                                        </div>
                                        <div className="pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                                            <div className="sm:col-span-6">
                                                 <h2 className="text-xl font-medium text-blue-gray-900"><RichText tagName="span" value={attributes.contentQqh} default="Personal Information" onChange={ (newtext) =>  {
        setAttributes({ contentQqh: newtext });
      }}
    /></h2>

                                                <p className="mt-1 text-sm text-blue-gray-500">
                                                    <RichText tagName="span" value={attributes.contentjgX} default="This information will be displayed publicly so be careful what you share." onChange={ (newtext) => { setAttributes({ contentjgX: newtext }); }} /></p>
                                            </div>
                                            <div className="sm:col-span-3">
                                                <label for="email-address" className="block text-sm font-medium text-blue-gray-900">
                                                    <RichText tagName="span" value={attributes.contentmfN} default="Email address" onChange={ (newtext) => { setAttributes({ contentmfN: newtext }); }} /></label>
                                                <input type="text" name="email-address" id="email-address" autocomplete="email" className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"/>
                                            </div>
                                            <div className="sm:col-span-3">
                                                <label for="phone-number" className="block text-sm font-medium text-blue-gray-900">
                                                    <RichText tagName="span" value={attributes.contentsQH} default="Phone number" onChange={ (newtext) => { setAttributes({ contentsQH: newtext }); }} /></label>
                                                <input type="text" name="phone-number" id="phone-number" autocomplete="tel" className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"/>
                                            </div>
                                            <div className="sm:col-span-3">
                                                <label for="country" className="block text-sm font-medium text-blue-gray-900">
                                                    <RichText tagName="span" value={attributes.contentTVO} default="Country" onChange={ (newtext) => { setAttributes({ contentTVO: newtext }); }} /></label>
                                                <select id="country" name="country" autocomplete="country-name" className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500">
                                                    <option/>
                                                    <option>
                                                        <RichText tagName="span" value={attributes.contentQwM} default="United States" onChange={ (newtext) => { setAttributes({ contentQwM: newtext }); }} /></option>
                                                    <option>
                                                        <RichText tagName="span" value={attributes.contentuQR} default="Canada" onChange={ (newtext) => { setAttributes({ contentuQR: newtext }); }} /></option>
                                                    <option>
                                                        <RichText tagName="span" value={attributes.contentDxK} default="Mexico" onChange={ (newtext) => { setAttributes({ contentDxK: newtext }); }} /></option>
                                                </select>
                                            </div>
                                            <div className="sm:col-span-3">
                                                <label for="language" className="block text-sm font-medium text-blue-gray-900">
                                                    <RichText tagName="span" value={attributes.contentjIH} default="Language" onChange={ (newtext) => { setAttributes({ contentjIH: newtext }); }} /></label>
                                                <input type="text" name="language" id="language" className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"/>
                                            </div>
                                            <p className="text-sm text-blue-gray-500 sm:col-span-6">
                                                <RichText tagName="span" value={attributes.contentvZS} default="This account was created on" onChange={ (newtext) => { setAttributes({ contentvZS: newtext }); }} />
                                                    <time datetime="2017-01-05T20:35:40">
                                                        <RichText tagName="span" value={attributes.contentWkH} default="January 5, 2017, 8:35:40 PM" onChange={ (newtext) => { setAttributes({ contentWkH: newtext }); }} /></time>
                                                    <RichText tagName="span" value={attributes.contentDgW} default="." onChange={ (newtext) => { setAttributes({ contentDgW: newtext }); }} /></p>
                                        </div>
                                        <div className="pt-8 flex justify-end">
                                            <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                <RichText tagName="span" value={attributes.contentBEU} default="Cancel" onChange={ (newtext) => { setAttributes({ contentBEU: newtext }); }} /></button>
                                            <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                <RichText tagName="span" value={attributes.contentqsm} default="Save" onChange={ (newtext) => { setAttributes({ contentqsm: newtext }); }} /></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
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
        <div class="h-full flex">
            <div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-blue-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                    <div class="absolute top-0 right-0 -mr-12 pt-4">
                        <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contenthDg} /></span>

                            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNcr }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="pt-5 pb-4">
                        <div class="flex-shrink-0 flex items-center px-4">
                            
      <img
            src={ attributes.imageurlKFE } 
            alt={ attributes.imagealtlPT } 
            class="h-8 w-auto"
          />
                        </div>
                        <nav aria-label="Sidebar" class="mt-5">
                            <div class="px-2 space-y-1"> <span class="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
              
              
      <svg
         class="mr-4 h-6 w-6 text-blue-gray-400 group-hover:text-blue-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgzIr }}
        >
      </svg>
      <RichText.Content value={attributes.contentXoN} /></span>
 <span class="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
              
              
      <svg
         class="mr-4 h-6 w-6 text-blue-gray-400 group-hover:text-blue-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgIjq }}
        >
      </svg>
      <RichText.Content value={attributes.contentIna} /></span>
 <span class="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
              
              
      <svg
         class="mr-4 h-6 w-6 text-blue-gray-400 group-hover:text-blue-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnbx }}
        >
      </svg>
      <RichText.Content value={attributes.contentkyn} /></span>
 <span class="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
              
              
      <svg
         class="mr-4 h-6 w-6 text-blue-gray-400 group-hover:text-blue-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVhl }}
        >
      </svg>
      <RichText.Content value={attributes.contenteNC} /></span>
 <span class="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
              
              
      <svg
         class="mr-4 h-6 w-6 text-blue-gray-400 group-hover:text-blue-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBfs }}
        >
      </svg>
      <RichText.Content value={attributes.contentxrI} /></span>

                            </div>
                        </nav>
                    </div>
                    <div class="flex-shrink-0 flex border-t border-blue-gray-200 p-4"> <span class="flex-shrink-0 group block">
          <div class="flex items-center">
            <div>
              
      <img
            src={ attributes.imageurlWNE } 
            alt={ attributes.imagealtUEz } 
            class="inline-block h-10 w-10 rounded-full"
          />
            </div>
            <div class="ml-3">
              <p class="text-base font-medium text-blue-gray-700 group-hover:text-blue-gray-900"><RichText.Content value={attributes.contentSlZ} /></p>
              <p class="text-sm font-medium text-blue-gray-500 group-hover:text-blue-gray-700"><RichText.Content value={attributes.contentSKc} /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
                <div class="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div class="hidden lg:flex lg:flex-shrink-0">
                <div class="flex flex-col w-20">
                    <div class="flex-1 flex flex-col min-h-0 overflow-y-auto bg-blue-600">
                        <div class="flex-1">
                            <div class="bg-blue-700 py-4 flex items-center justify-center">
                                
      <img
            src={ attributes.imageurlUPh } 
            alt={ attributes.imagealtsIG } 
            class="h-8 w-auto"
          />
                            </div>
                            <nav aria-label="Sidebar" class="py-6 flex flex-col items-center space-y-3"> <span class="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
              
              
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgMzM }}
        >
      </svg>
      
              <span class="sr-only"><RichText.Content value={attributes.contentMvN} /></span>
</span> <span class="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
              
              
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgjbS }}
        >
      </svg>
      
              <span class="sr-only"><RichText.Content value={attributes.contentyTT} /></span>
</span> <span class="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
              
              
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgSwa }}
        >
      </svg>
      
              <span class="sr-only"><RichText.Content value={attributes.contentACq} /></span>
</span> <span class="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
              
              
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgdwK }}
        >
      </svg>
      
              <span class="sr-only"><RichText.Content value={attributes.contentNqr} /></span>
</span> <span class="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
              
              
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNJs }}
        >
      </svg>
      
              <span class="sr-only"><RichText.Content value={attributes.contentyno} /></span>
</span>
                            </nav>
                        </div>
                        <div class="flex-shrink-0 flex pb-5"> <span class="flex-shrink-0 w-full">
            
      <img
            src={ attributes.imageurladj } 
            alt={ attributes.imagealtQNh } 
            class="block mx-auto h-10 w-10 rounded-full"
          />
            <div class="sr-only">
              <p><RichText.Content value={attributes.contentzHG} /></p>
              <p><RichText.Content value={attributes.contentYoS} /></p>
            </div>
          </span>

                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 min-w-0 flex flex-col overflow-hidden">
                <div class="lg:hidden">
                    <div class="bg-blue-600 py-2 px-4 flex items-center justify-between sm:px-6">
                        <div>
                            
      <img
            src={ attributes.imageurldXy } 
            alt={ attributes.imagealtPHq } 
            class="h-8 w-auto"
          />
                        </div>
                        <div>
                            <button type="button" class="-mr-3 h-12 w-12 inline-flex items-center justify-center bg-blue-600 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentqDs} /></span>

                                
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgBNo }}
        >
      </svg>
      
                            </button>
                        </div>
                    </div>
                </div>
                <main class="flex-1 flex overflow-hidden">
                    <div class="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
                        <nav aria-label="Breadcrumb" class="bg-white border-b border-blue-gray-200 xl:hidden">
                            <div class="max-w-3xl mx-auto py-3 px-4 flex items-start sm:px-6 lg:px-8"> <span class="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-blue-gray-900">
              
              
      <svg
         class="h-5 w-5 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgyEL }}
        >
      </svg>
      
              <span><RichText.Content value={attributes.contentbJL} /></span>
</span>
                            </div>
                        </nav>
                        <div class="flex-1 flex xl:overflow-hidden">
                            <nav aria-label="Sections" class="hidden flex-shrink-0 w-96 bg-white border-r border-blue-gray-200 xl:flex xl:flex-col">
                                <div class="flex-shrink-0 h-16 px-6 border-b border-blue-gray-200 flex items-center">
                                    <p class="text-lg font-medium text-blue-gray-900">
                                        <RichText.Content value={attributes.contentYQy} /></p>
                                </div>
                                <div class="flex-1 min-h-0 overflow-y-auto"> <span class="bg-blue-50 bg-opacity-50 flex p-6 border-b border-blue-gray-200" aria-current="page">
                
                
      <svg
         class="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgUCo }}
        >
      </svg>
      
                <div class="ml-3 text-sm">
                  <p class="font-medium text-blue-gray-900"><RichText.Content value={attributes.contentdTR} /></p>
                  <p class="mt-1 text-blue-gray-500"><RichText.Content value={attributes.contentybQ} /></p>
                </div>
              </span>
 <span class="hover:bg-blue-50 hover:bg-opacity-50 flex p-6 border-b border-blue-gray-200">
                
                
      <svg
         class="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPld }}
        >
      </svg>
      
                <div class="ml-3 text-sm">
                  <p class="font-medium text-blue-gray-900"><RichText.Content value={attributes.contentJBs} /></p>
                  <p class="mt-1 text-blue-gray-500"><RichText.Content value={attributes.contenthAR} /></p>
                </div>
              </span>
 <span class="hover:bg-blue-50 hover:bg-opacity-50 flex p-6 border-b border-blue-gray-200">
                
                
      <svg
         class="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWrb }}
        >
      </svg>
      
                <div class="ml-3 text-sm">
                  <p class="font-medium text-blue-gray-900"><RichText.Content value={attributes.contentxsh} /></p>
                  <p class="mt-1 text-blue-gray-500"><RichText.Content value={attributes.contentpkt} /></p>
                </div>
              </span>
 <span class="hover:bg-blue-50 hover:bg-opacity-50 flex p-6 border-b border-blue-gray-200">
                
                
      <svg
         class="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNNu }}
        >
      </svg>
      
                <div class="ml-3 text-sm">
                  <p class="font-medium text-blue-gray-900"><RichText.Content value={attributes.contentUIK} /></p>
                  <p class="mt-1 text-blue-gray-500"><RichText.Content value={attributes.contentnuK} /></p>
                </div>
              </span>
 <span class="hover:bg-blue-50 hover:bg-opacity-50 flex p-6 border-b border-blue-gray-200">
                
                
      <svg
         class="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnSJ }}
        >
      </svg>
      
                <div class="ml-3 text-sm">
                  <p class="font-medium text-blue-gray-900"><RichText.Content value={attributes.contentSwg} /></p>
                  <p class="mt-1 text-blue-gray-500"><RichText.Content value={attributes.contentypk} /></p>
                </div>
              </span>
 <span class="hover:bg-blue-50 hover:bg-opacity-50 flex p-6 border-b border-blue-gray-200">
                
                
      <svg
         class="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgNmA }}
        >
      </svg>
      
                <div class="ml-3 text-sm">
                  <p class="font-medium text-blue-gray-900"><RichText.Content value={attributes.contentEAn} /></p>
                  <p class="mt-1 text-blue-gray-500"><RichText.Content value={attributes.contentOaL} /></p>
                </div>
              </span>
 <span class="hover:bg-blue-50 hover:bg-opacity-50 flex p-6 border-b border-blue-gray-200">
                
                
      <svg
         class="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgLZJ }}
        >
      </svg>
      
                <div class="ml-3 text-sm">
                  <p class="font-medium text-blue-gray-900"><RichText.Content value={attributes.contentPYD} /></p>
                  <p class="mt-1 text-blue-gray-500"><RichText.Content value={attributes.contentzOc} /></p>
                </div>
              </span>

                                </div>
                            </nav>
                            <div class="flex-1 xl:overflow-y-auto">
                                <div class="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                                     <h1 class="text-3xl font-extrabold text-blue-gray-900"><RichText.Content value={attributes.contentByG} /></h1>

                                    <form class="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
                                        <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                                            <div class="sm:col-span-6">
                                                 <h2 class="text-xl font-medium text-blue-gray-900"><RichText.Content value={attributes.contentNSE} /></h2>

                                                <p class="mt-1 text-sm text-blue-gray-500">
                                                    <RichText.Content value={attributes.contentpgz} /></p>
                                            </div>
                                            <div class="sm:col-span-3">
                                                <label for="first-name" class="block text-sm font-medium text-blue-gray-900">
                                                    <RichText.Content value={attributes.contentXNR} /></label>
                                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"/>
                                            </div>
                                            <div class="sm:col-span-3">
                                                <label for="last-name" class="block text-sm font-medium text-blue-gray-900">
                                                    <RichText.Content value={attributes.contentsNl} /></label>
                                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"/>
                                            </div>
                                            <div class="sm:col-span-6">
                                                <label for="username" class="block text-sm font-medium text-blue-gray-900">
                                                    <RichText.Content value={attributes.contentcuR} /></label>
                                                <div class="mt-1 flex rounded-md shadow-sm"> <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-blue-gray-300 bg-blue-gray-50 text-blue-gray-500 sm:text-sm"><RichText.Content value={attributes.contentdsL} /></span>

                                                    <input type="text" name="username" id="username" autocomplete="username" value="lisamarie" class="flex-1 block w-full min-w-0 border-blue-gray-300 rounded-none rounded-r-md text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"/>
                                                </div>
                                            </div>
                                            <div class="sm:col-span-6">
                                                <label for="photo" class="block text-sm font-medium text-blue-gray-900">
                                                    <RichText.Content value={attributes.contentmsm} /></label>
                                                <div class="mt-1 flex items-center">
                                                    
      <img
            src={ attributes.imageurlnSj } 
            alt={ attributes.imagealtlSp } 
            class="inline-block h-12 w-12 rounded-full"
          />
                                                    <div class="ml-4 flex">
                                                        <div class="relative bg-white py-2 px-3 border border-blue-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-500">
                                                            <label for="user-photo" class="relative text-sm font-medium text-blue-gray-900 pointer-events-none"> <span><RichText.Content value={attributes.contentdDY} /></span>
 <span class="sr-only"><RichText.Content value={attributes.contentIFK} /></span>

                                                            </label>
                                                            <input id="user-photo" name="user-photo" type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"/>
                                                        </div>
                                                        <button type="button" class="ml-3 bg-transparent py-2 px-3 border border-transparent rounded-md text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:outline-none focus:border-blue-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-blue-500">
                                                            <RichText.Content value={attributes.contentvTX} /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sm:col-span-6">
                                                <label for="description" class="block text-sm font-medium text-blue-gray-900">
                                                    <RichText.Content value={attributes.contentcZe} /></label>
                                                <div class="mt-1">
                                                    <textarea id="description" name="description" rows="4" class="block w-full border border-blue-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"/>
                                                </div>
                                                <p class="mt-3 text-sm text-blue-gray-500">
                                                    <RichText.Content value={attributes.contentBfN} /></p>
                                            </div>
                                            <div class="sm:col-span-6">
                                                <label for="url" class="block text-sm font-medium text-blue-gray-900">
                                                    <RichText.Content value={attributes.contentfxi} /></label>
                                                <input type="text" name="url" id="url" class="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"/>
                                            </div>
                                        </div>
                                        <div class="pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                                            <div class="sm:col-span-6">
                                                 <h2 class="text-xl font-medium text-blue-gray-900"><RichText.Content value={attributes.contentQqh} /></h2>

                                                <p class="mt-1 text-sm text-blue-gray-500">
                                                    <RichText.Content value={attributes.contentjgX} /></p>
                                            </div>
                                            <div class="sm:col-span-3">
                                                <label for="email-address" class="block text-sm font-medium text-blue-gray-900">
                                                    <RichText.Content value={attributes.contentmfN} /></label>
                                                <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"/>
                                            </div>
                                            <div class="sm:col-span-3">
                                                <label for="phone-number" class="block text-sm font-medium text-blue-gray-900">
                                                    <RichText.Content value={attributes.contentsQH} /></label>
                                                <input type="text" name="phone-number" id="phone-number" autocomplete="tel" class="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"/>
                                            </div>
                                            <div class="sm:col-span-3">
                                                <label for="country" class="block text-sm font-medium text-blue-gray-900">
                                                    <RichText.Content value={attributes.contentTVO} /></label>
                                                <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500">
                                                    <option/>
                                                    <option>
                                                        <RichText.Content value={attributes.contentQwM} /></option>
                                                    <option>
                                                        <RichText.Content value={attributes.contentuQR} /></option>
                                                    <option>
                                                        <RichText.Content value={attributes.contentDxK} /></option>
                                                </select>
                                            </div>
                                            <div class="sm:col-span-3">
                                                <label for="language" class="block text-sm font-medium text-blue-gray-900">
                                                    <RichText.Content value={attributes.contentjIH} /></label>
                                                <input type="text" name="language" id="language" class="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"/>
                                            </div>
                                            <p class="text-sm text-blue-gray-500 sm:col-span-6">
                                                <RichText.Content value={attributes.contentvZS} />
                                                    <time datetime="2017-01-05T20:35:40">
                                                        <RichText.Content value={attributes.contentWkH} /></time>
                                                    <RichText.Content value={attributes.contentDgW} /></p>
                                        </div>
                                        <div class="pt-8 flex justify-end">
                                            <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                <RichText.Content value={attributes.contentBEU} /></button>
                                            <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                <RichText.Content value={attributes.contentqsm} /></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        