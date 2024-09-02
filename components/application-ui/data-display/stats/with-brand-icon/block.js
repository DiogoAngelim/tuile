
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-brand-icon', {
            title: 'with brand icon',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCADEBaADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAIFAQQGAwf/xABGEAACAgEDAgMEBwUGAwYHAAAAAQIDBAURIRIxBhNBFFFhcRYiMmWBkaMVMzVz4gcjQlKh0VOxwSRicpLh8CUmN0NVdZT/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QAMBEBAAICAAIHCAICAwAAAAAAAAECAxESMQQUIUFSgaEFM0JRccHR8BORIuEyYbH/2gAMAwEAAhEDEQA/APouJn4ubZkV41vXLGsdVq6WumS9OVz+BsnNeEf4h4h//Yz/AOSPLxLkKzVqsOOo6rGSp63i6ZV/ed/tyn6L02LodUeeRkU4tE78m2FVUFvKc3skvicJjZ+u6j4WxbKpZ1sasydeVKjaOTKpdtvj6Pbn/U88+ded4O1eFer6jd7LKM3Tkx6Lq9+Oixv7Sff8BpNvoUJRnCM4NSjJbpr1RT5virRMHLni5Oco21tKzprlJQb/AMzSaRs6Di+yaPjV+0X37wUuq6fVJbpcb+4pNfx8mrR86Hh/Gwp4eRGyWXNS6rHJ/baXZvb3vuFXuo6xp+mYUMzMyYxosaUJRTl1t9tku5nStVwdXxnkaferYRl0y4cXF+5p8o5TBliZGueFVQ5yw4YNjx/N+05pbPddt0l6FlpyVf8AaDq0aElCeLVO3b/P6f6DSOmNTF1LGy8/MwqXLzsNxVu62X1lutveUWsSy9S8W0aJVn5GDjQw3k2Sx5dM7H1dKSl6L/1KfBts0y/xX7Tq0qrK50QWY6lOfZpfVXeW3Hz5Gh9ABwGDfnPXP2Vj5mtwrzcOxqWofVnGxLicH3S+BsYmr5uq4vh/T677asudsnmyjLaSjTxJSf8A3nsNG3bg4DMydRw9RyLdZz9W0+ayX5F9cPMw1Xv9VSiv+vJ36aaTT3T9UNKAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADnrPCVDzMnJo1fV8WWTa7bIY+QoR6n8Ok9L/AAvj2305EdQ1GrIhSqZ3V37Tuiv8725fxWxeguxz9fhHAp0+vEx8jNp8q6V1V1du04OXdJ7crhd0z3x/DWDThZ2PbO/JlnrbIuunvZPjZc7bLb04LkE2NPStPjpmBDEhk5GRGH2Z3zUpJei3SXCKrI8I4dtuQ6c7UMWjJk53Y9F3TXNvvxs9t/U6EDYqM/w7g5mBi4tbtxfY2njW0S6Z1bccN79/U9dG0XH0iFzrsuvvyJdd198uqc36bv3IsgBVavoONquRRkyvycXKoTjC/Gs6JpPut9nujSr8G6XDFzsd2ZU45zhKyU7d5KUd9pJ7b77tt77nRAbFFi+G6MHPr1R5eoZmXRXKMXfapdaa7dv9u/JqeF9Gup1nU9azMP2SzMntVQ5KThF8yba43bSZ1ALsc9f4Rwr5WwnmZ6w7rPMsw1d/dSe+/bbfbf03OhSSSSWyXZAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHIADkcgAORyAA5HIADkcgAORyAA5HIADkcgAORyAA5HIADkcgAORyAA5HIADkcgAORyAA5HIADkcgAORyAA5HIADkcgAORyAA5HIADkcgAORyAA5HIADkcgAORyAA5HIADkAAAAAHIADkcgAORyAA5HIADkcgAORyAA5HIADkcgAORyAA5HIADkcgAORyAA5HIADkcgAORyAA5HIADkcgAORyAA5HIADkcgAORyAA5HIADkcgAORyAA5HIADkcgAORyAA5HIADkcgAAAAD4AAcjkAByOQAHI5AAcjkAByOQAHI5AAcjkAByOQAHI5AAcjkAByOQAHI5AAcjkAByOQAHI5AAcjkAByOQAHI5AAcjkAByOQAHI5AAcjkAByOQAHI5AAcjkAByOQAHI5AAcjkAByAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADC7syYXdmQIy9PmSIz7x+ZIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhGTC9QMkX9tIkRf7yIEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADn9R8U0YmTKiih3uD2lLr6Vv8OHudAfKny92e7oWCmWZm/cxaZh1f0y+7/1v6R9Mvu/9b+k5QH0OpYPD6yxxS6v6Zfd/639I+mX3f+t/ScoB1LB4fWTil2uneKaMvJjRfQ6HN7Rl19S3+PC2OgPlS4e6Pqp8/puCmKYmne3WZkAKS/E/+N00LLzFXZVOcksifdNfH4nhbXYKSnVcp10ZTqq9itu8mPLdiW/SpN9u6IYudn142oXZF2M/KyJVxc24xi+P9OeF3Lo2vgc5PU7czHcJyh105dMeurqjGSb9z5LPWYZc8av2RWSSsTtjXPonKHqkxoWAKGjUFj49vkSyHKN1cJUZablUpPbvvu0/Tkzrmbd7PqFEUkqI0yi4tptynzz+A0L0FR+0M+i6+jJx6rLY0O+pUt87Pbpe/qeNWtXPCutk8a6yPTGEa3KLUpPbaSfK+Y0L0FRk5up4eLZO+jHlNTgq5Qb6ZdT2a2fKfxNXULciM8iGQq1etPnJzqckl9bhJN/69xodCClp1LKxfIWoV1eVbRKyDrbcl0x3alv349x5Ymu33WRU4UtW1SnFQUt62lvtJvh/gNG1+CjeqajDTacu2vHjG9x2kozkq4tbtyS59xZ6dkSysOFs5Uyk9/rVS3i/l/sNDZABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhd2ZMLuzIEZ94/MkRn3j8yQAjZONdcrJyUYxTcm/RIkaGvcaJl7f8NmqV4rRHzJU93jCqNrVGHKyC7SlZ07/hsyH0y+7/1v6TlAfcjoWD5esuXFLq/pl93/AK39I+mX3f8Arf0nKAdSweH1lOKXV/TL7v8A1v6Sx0jxDRqd3kOp03Nbxi5bqXyZwZYaBxreJt/nOeXoeGKTNY1KxadvooAPiuoDnMHVXbrXX7Wp1ZM51wq691Dp26Zbem+z/M2Yaza6aOqqHmrzXkRW/wBRV777fN7bfMuk2ugU2PqOoO7A9oqxlTmcx6G+qK6d0nv69i5b2Te25FAc9RXdk6JPVJ52RHJcJWx6bGoR232j09tuD3r1HUsm2urFqxup4sL5O3fu/TguhdA5+fiCdkcdURqrnZT5snapSXdrpXT8U+T1r1TOy7aK8KmiLsxvOfndXD6ttuBo2uwaFOY8vQnlxTrlOmUuH2aT7fiin03JssydPhj3ZsrpwU71fKThKO3LXV8e2w0OnBRw1m56lDH6sWcLbJVpV9TcH6Nvs/kjxp1XMxdOndkyqsnPJdNbae0Xu92/hxxtyNG3RAr9I1CebG6Nqh10yS64JqMk1umk+SwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGF6mTC9QMkX+8iSIv95ECQAA8srIqxMad98umuC3bObn4xipNQwW4+jduz/LY3/Fv8En/AOOJwh9LofRseSk2vG2LWmJdX9Mvu/8AW/pH0y+7/wBb+k5QHs6lg8PrLHFLq/pl93/rf0j6Zfd/639JygHUsHh9ZOKX0LR9ao1VSjCDrtgt3Bvfj3plmcL4R/jcf5cjuj5XS8VcWThrydKzuAEL7YUUWXWPaFcXKXyRzulalkOOTGORHJvso9pri5dShLneHfj04PPpp0oKS/XJqt20VQnXHHhZLd89c3tGP/Ns2MTLzv2r7Fmwx/3DtUqt+frJbc/iNCzBralfPF03IvrX16624/M1MbAshDHyIahe7Pqysc5uUbE+6232Xw27EFoDnMXJ8vJx3anJe0ZT6nJ7xSTfC32f4m5Tl6lkYqvspoWNdVKS6JPrrW26337/AIF0LcFL4fz7MyiquvpdOPVGNspPeUp7enuXxfc8tWyI1610325kaI4nW1jyktn1Pl7fD1Y0L8FDTqGXj6RizsupU7m3GeQ224f4eI8t7bEIannZn7Mtx5U1q+c4zi02pOO/+my3GjboQUH7fseZKMY1OmN/kuHTLr2326t+34F+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5UfVT5UfU9m/F5fdzuF7dRpOn314eXj3XWtRdtys6VHfnhdmUaTk0optvhJep1VULpQps1DFwPbIRSr9ov6JyS7Nx9fTuevpFta/OmYeF2n6bZn3aTVjWU5MIt13eY5db235Xy9xzZ1+XXmR8+zGw8KOfZH+9ULuuxJr0i+Fx7jkWmns+GTo1pmJ7fl37/AGCzB9VPlR9VPL7S+Hz+zVA8J4tc82vLbl11wcEt+Nnt/se5B21p7OyH5ny3Row0bHhdGatvdULPNhQ5/UjLvultv357i3RqLHdtbfBW2K3aMltGa/xLjub8Zwk9oyi/kzLlFSUXJJvstxsV0NGoTnKV+RZKyyFspTkm249vTsbObhwzIQUp2Vzrl1Qsre0os2SNltdSTssjBPhdT2Ar/wBjUSovrttvsne4udspLq3j2242WxF6HROrJhbkZNjyVBWSlJb/AFXutuC07rdEZ211tKyyMXLhKT23LsaNWk1QlbOeRk22WV+X5k7PrQj7k0R/Y2PKNyvtvvnbFQc5yXUknuttkvXksW1FbyaS97I+bV/xIf8AmRNjRWkVOE425GTbKcoSc5zTf1XukuNtj1ytOpyrrLbJWKVlDofS1t0t779u5tpqS3i0170ZGxX4+kUU2Kcrb71CDrhG2W6hF90uBRpNdK6Vk5U61BwhXKz6sE1txxz8N9ywA2NOWnx9kox6si+ryElCcJJPhbc8bP8AI9cLErwqPKqcpbycpSk93Jvu2e4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADC7syYXdmQIz7x+ZIjPvH5kgBX69/BMv8AllgV+vfwTL/lnTF7yv1hJ5PnR6U0232xqphKc5doxW7PMu/DlkKK9QushKShRz0y6ZbN87P0P0GW80rMw4wg8LT9OSWp2TuyG+aaJL6nzfv+B5ZWlf3LytOt9qxV3aX14fCS/wCpsZWgXWVwytNVl1Fr3UZrpnH579/mb+l4Vej5+NHIlbZlZD2ioNquK+L/AMT+B5pzRWOKLbn5f67v3m1pypYaD/G8T+YamTFRybYxWyU2kvxNvQf43ifzD05J3jn6MxzfRSNsPNpnX1Sj1xceqPdb+qJA/Nu7RlpWK8KnGinBUuMoTjt1Jx9d9u/+5mvTMerLycqCbsyI7SjLmK9/Hx2W5tu2tPZ2RTXxMxnGX2ZJ/JgUODpOTDPxrLalVXjOTX/aJWJ7rbaKf2UXWNT7PSqvNtt2bfVZLqk93v3JStrhNQnZCMpdk5JNky7FXPQ8eXXCN+TDHnLqljxntB/6bpfDcjdpMrtTsuV1uPV5Ma4umSi+G9127di2bSW74RiMlJbxaa96GxoS0ihKn2e27HlVX5alVJJuPue6frye1OBVTkwyIzslOFPkrqlvut99367nvK6qE1CdkIzl2i5JNkyDVx8GrH05YMJTdai47trfZ7/7kFptKWH0ysjLDSVck1u1ts0+OzNyMoyW8ZJrfbhhyipKLa3fZbgVtOiUU2UyjfkOFE3OutyXTFvfjt8ST0fHcLYebeo2W+dHaS/up7t7x447/EsQNjwxMX2aMk7rrpTe7lbLd/7I9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGF6mTC9QMkX+8iSIv95ECQAApfFv8ABJfzInCHd+Lf4JL+ZE4Q+17P915uV+bZqwcq3Glk1Y87KYNqUkt9tu//ADN6VOm5eqXWxvWPhxgrHFLaXZbxivfua+kqvz5yyMyWNTCPVPok1Kfp0r39y2w8iNmhV9GHTlRou8ucLFtJxk/qtP05ex0y3tE+n9/Xs3+Uhzb23fTvt6bmC/1nSsDEodkbZY+Q+VjSkp8b+jXb8SgO2PJGSu4SY0u/CX8bj/Lkd0cL4S/jcf5cjuj5PtD3vk6U5PDNxYZuLPHtlOMJ7dXS9n332I2YNM8jHvScJ0N9PRst01s0/gbJF21qxVuyKm+0W+X+B4W1d+x6KNPy8fGgrPaG5dNr4+C3XZL0NbT9LyFl3X3+ZT10OlP2h2T5e+6k1xttwXhGU4Re0pRT+LLsRVMfZlj2N2Q6OiTm93JbbcmjTo1NU6urIybaqJdVVVk94xa7enp6FkRlOEXtKcU/iyDTr0rHhbXYpWN1zsmk2tm599+OxCnR6aWtr8mVcIyjXXKe8YJ8ccf89zfVkJPaM4t+5Mx5tf8AxIf+ZAamNpdGLdTbTKyMq6lU+VtZFdurjuvetj2eHVLOeW3JzdXkuL26enfc94zjL7Mk/kxGUZb9Mk9ns9n2ArlotMa6IVZGTW8dy8uUZLeKl3j27GY6NRDGoprtvg6LHZCxSXUm99+du3JYOUU0m0m+y37mS7GgtKrjkOyGRkwhKzzZUxntBy/Lf8NzfAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8qPqp8qfD2Z9T2b8Xl93O7d0e7Hx9Vx7st7VQlu3tvs9uH+ext3Yul33Ttt11ynN7tvFn/uU4PoWx7txRMx/X3hjbpLrNMs9jsjrTjkY0enzfZptzSfHHw7fEqNYtx79VyLcT9zOW8Xttvxzx89zSBnHhik73M/1+Fmdh9VPlS5eyPqp4faXw+f2aoHJaj4H8Op5OoZntEF9a62Xm7Jd232OtOK/tAz7smWJ4bwHvk5007Nv8MN+N/xW/wAonzIdJVfgLTcmOJq+saXX5btjKnCrse/rvu2++3C/M1/2Xl6Z/aBo37RzZZeXkbW2zfZPeS2XwW3/AKH0jTcGnTdOowsdbV0QUV8fe/m3ycd4k/8AqZoP8tf85F2juj5bj42m5niTVfptfZVfGX9xC2coR6N39l+7tt/1PocdXwrdVu0qm7qz6a+uVXRLhbLbnbb/ABL19T5z4anot2ZqE/GUt9R8ztlOSSXql7nv/wBNhBK18DW5mLh63PD867S6VOWC7U/rNdXb58b/ABNPwr4dwvFOnZWqazl3X5dlkoyas28vZd//AHxsbPgK2X0g1arSVdZosYydUZt9PVutkt+266vw23K2qHgzJuyr8m3P0mcZtW4alsp/BJJ8b7rb0+BRZeC5R1zS9U8OajfPIxaJx8qxT5cFLhJ+7eKa+ZqeMvDGg6FpUZY0MiWbkTUKIOzf5vb1/wB2ix/s0w97dT1WFDoxcizox4P0im3+O3C3+DMab/8ANnju3UZfW07S/q0e6Ut+H+e8vwiTvHU+GNNnpHh3DwbXvZXBufwlJuTX4N7FqAZV5WZNFV8KbLYxss+zFvlnqc/maZU9Vw4XznbPIdrsm3s+I8be7Yu6qZRxlTbbK19PS5vhszEzMy4473ta0THJmGRROVkYXVylV9tKSbh8/cRx8vGyXJY2RVa49+iae35FJh42Fj6hrOPZCNeJGupSW7SS6Xvz3Gmey5ubdm7004/kOmupSUZOHrKW3YnFLMZbbiOzv9F1TmYt9kq6Mmmyce8YTTaPc53TniZmq0XYvk042JGVdMU0p2trZvbvsdEarO3TFebxsABXQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYXdmTC7syBGfePzJEZ94/MkAK/Xv4Jl/yywNDXudEy9v8Ahs6YveV+sJPJ85LXQc+nCvujkbKF0OnrcOtRe+6bXqiqB+ivSL1msuMTpe5Cwsm+V13iKcpy4b9mmuPd37G1pubg6akv2x7TTF9Spliy7/8AdbfDOYBxno8WrwzadeX4Xads/MunZtt1Sb2925u6D/G8T+YV5YaBzreJt/nOmXsxz9Ejm+igA/Nu75DTDw3fqus5PiHItjKWbPyYVN7tdUm3sk+Ox23hvE0jG0XOyPClzvlbB7dcm2rEn0pppNdyq0TWfDeBqGo0Z+m1aVlxsas82UrfM9+za49+3ruiv8OvJlZ4n1Dw/RZXizqksZRhtvPdtdK96W72+KNSjR0rD8PZGm51vijLvr1ZTl1q2UlZHjhpf4n89zsf7OZ6hPwyv2grNlY1Q7N93Xstu/pvvsct4bfhCzQbJ69KMtQcpu92uXX3e3Tt8NvjuWfgHVZ6f4Zz8vUrLVpuPYlROabez4aX49Pw3bLJCy8ZaXq2prI2zPZ9Kx8WVsoQ+1dNJvZ/Dhd/y92l4Tz3pf8AZrkZ0EnOl2uG/bq32X+rR02fl0Z/hXLy8WfXTdh2ShLbbddLOV8MYM9S/swycOpJ2WOzoT9ZJ7pfmidw5/Co8NX4HtXiXVciepZm824dUvKT7N7J8+u3ua4OlyYZuL/ZnlrE1X9oR2Xl31pqSq6kpR7t8Lq+S+RXeE9W8M4Hhm3E1aquGVFzV9dlO8rOXslx7tlt6NFt/Zdj5Feg5M7q5Qx7r3KmMvVbJN/FcJfgWRX+GsjS9P8AEltuj3SWlQ01WZcm5OKsT7vf1+HxZc+Fsa7V9Ru8UahBxdqdeFVL/wC1V7/m/wDf3mvrFVeua7Hw3p9cKsGhq7UZ1RUVL3Q49f8A36FBr0sf9o69LOzLMbKwFVHTaoWOCjH/ALq9eNvzJzH1MGrpVl9uk4dmUmsidEJWprb6zit/9TZkm4tRfS2uHtvsZV5+00e0+zebHzturo352PVtJNtpJcts55aXV+2vIdlnmey+b52/1uvr+0XOWpLTrlKz6ypknNr1277L/oZiZnm448l7RPFHIqz8O+xV05dFk32jCxNv8Ee85RhCU5yUYxW7beySOa0u14mVp9UMnFya762n5dajKvaPffv899vU2tYylk+y0113X4Vj67p48HNSSfEePe+5It2M1zf4TM81s8zFWOsh5NPkvhWda6fzJyuqjGEpWwUbGlBuS2k32S95zuj0PO0KiNT8meNdKcZWV7wfMvz4f5kK7LKYYl1ahZVVvTiu19MXtFuVj+e2y+A4kjPOomY5uoB5Yl/tOHTkdPT5sIz29263PU29ETuNgACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhepkwvUDJF/vIkiL/eRAkAAKXxb/AASX8yJwh3fi3+CT/wDHE4Q+17P915uV+YWWianHTMiydlbshOG3Sv8AMuU/zK0HsvSL14Z5Mx2LS/VI5uBKnPhKzIg96bl3XPKfwKsAVpFOyDa78JfxuP8ALkd0cL4R/jcf5cjuj4/tD3vk6U5NXU4Zdmm5ENOnCGVKtxqlN7KMn69n2OC1HwXg6b4Vys/VsqyWpxhKx3K1tOz/AAxW/fd7Lnnk+gZ2XRgYV2Xky6aaYuU3tvwfMpa3geKNa9o1/OjiaXjS3pw9pN2P3y2X5/kvVnjhqXY+FdSth4Jx9Q1eyS8uuUpWT7ygm9n8Xtt8/wAT554ijmapirxNm9UI5WSqcap/4a0n/wBV+e79TsvFFWR4n0HFq8MSrvw1btbFPy4tRS2XO3H/AKHNeMZ+Io6RhY+rafg4uLValSsd+qi0l9p8bFgl9ZPm3jKOmZPjymGtXOrCqwl1uLe7e8mktud92jq69flpuHgx8TeVjZ2XZKChSnKPD2T7vbhx9fUqda1DRtO8a1T1nSoxc606s+c5Tj2226Ntls+N/Th+pmCXn4RwvCE9Ujk6Hk3Sy6Yyartk09mtm9mue/oempeCPDWFiZGdlLJjXVF2Tfm/8uCstyMLVv7R9Nu8PQU1St8m6uG0Wud2/wAHtv8AFI3vHOTbq2qYPhbBl9a+asyWv8Me63+S3l+CL3io8MadmY3gvW9VxIzrnlQcaIRb3UIt7tPv6tfgenhezTsXxDptmj3SVH7Pc9TblLpjJRbblv2fVt8D6PiY1WHiVYuPHpqpgoQXuSWxyXiFR1PVq/DGlQhTG3a7UbaopdMFyovb1fH5r4jexPw9VZ4h1y3xLlxaxqt6dPrl6RXDnt73z/r7kdefMfEFeHDWdWxs7Jni16fhQ/ZlUbHBbqK26fe9+Pz9x3nhy7IyPD2n3Zjk750Rc3Lu+O7+LJJCyPKWRTHJjjOe1s4uUY7PlI9JNqLcVu9uFvtucvdrVX7WoyLqbK7aqp1zp23l178L8feYtaKvRhw2y713OpPCvNxLb5UVZVM7Y94RmnJfgZqtlPDVt9Uqm4bzhvu4/Dg5tTxVqmlTxZYs8J2NUQoXTZFtd5b8td9+wtbRiw8e4nudNffTj1O3IthVBd5TkkiHtuJ7N7T7VT5D48zzF0/maOq5mmQw68y915Crm/JUZb9U+2y9N/8AkaWFpkrcDzIZOPHJeS8qUYpTrg3Frp2T9z/Mk2neoarhrwcVtwv5XVRjCUrYKNjSg3JbSb7Je8mcrVZOiGHdUoWVVb0YjufTF9MW5WP59Oy+HzOkw71lYVGSouKtrjPpfputy1ttnLh/j7XsADTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABz+o+FqMvJlfRe6HN7yj0dS3+HK2OgB0x5b453SdJMRLlfob94fo/1D6G/eH6P9R1QO3Xc/i9IThhyv0N+8P0f6h9DfvD9H+o6oDrufxekHDDn9O8LUYmTG++93uD3jHo6Vv8eXudAAccmW+Sd3naxEQGv7Dh+2e2+yUe1bbed5a69ttvtd+xsA5qHhZhYluVXlW4tE8itbQtlWnOPyfdHuAKTSdEnheINV1W+2Fks1xVainvCK9H/p+Rv5mk6bnWKzNwMW+a/xWVRk/wA2jcAHnj49GLUqsamumtdoVxUUvwRq5ejaXm3edl6di3W/57Koyb+b25N4AQVVaq8pVwVe3T0Jcbe7b3HniYeJg1uvCxaceEn1ONVagm/fsj3AAAAQnTXO2u2UE5179Evdv3JgA08pY2PN2OdFUnbsrN4J9e3bf3nnDT8Gtt14ePBtOLcaordPuuxsgaThj5NerT8KmxWVYePCce0o1RTX47GwACIiOQAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwu7MmF3ZkCM+8fmSIz7x+ZIARshGyuVc4qUZJqSfqmSAHMXeD6pWt0Zkq4PtGVfVt+O6IfQ37w/R/qOqB6o6Znj4v/ABnhhyv0N+8P0f6h9DfvD9H+o6oDrufxekHDDlfob94fo/1FjpHh6jTLvPdruuS2jJx2Ufki5Bm/Ss144ZnsXhiAAHnVp5mladnzU83Axsice0rKoya/FmzTTVj1RqoqhVXH7MIRUUvwRMAaF+iaTk3+fkaZh22t7uc6Ytv58cm1PFx7MV4tlFUsdx6XU4Jx2923Y9QB5rHpjj+zqmtUdPR5aiunp22227bfAxjYuPh0qnEx6qKk91CqCjHf5I9QBo5GjaXlZHtGTp2Jbd/nnTFt/N7cm7GMYRUYRUYpbJJbJIyAPHHxMbGlZLGxqaZWy6rHXBRc373t3ZC/TsHJvhfk4ePbdX9iydUZSj8m0bIAAACHk1+f5/QvN6ejq9dt99iYANaeFOFiUTlOnGprlLiTjBJs9aqq6a1XTXGuEe0YrZL8CQCRERyecaKYUumFNcammnBRSi9+/BizGx7aVTbRXOqO20JQTitu3B6gGoEkkkkkl2SAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwvUyYXqBki/3kSRF/vIgSAAHllY9WXjTovj1VzWzRzc/B0XJuGc1H0Tq3f57nUg648+TF2UnSTES5X6G/eH6P8AUPob94fo/wBR1QOvXc/i9IThhyv0N+8P0f6h9DfvD9H+o6oDrufxekHDCs0fRaNKUpQm7LZrZza249yRZgHnve154rT2tRGkLqasimVN9ULapraUJxUoyXxTND6P6J/+G07/APlh/sWQMjxxcXGw6fJxMeqivffoqgorf5Ixl4WJmwjDMxaMiEX1RjbWppP3rc9wB45GJjZMqpZOPVbKqXVW5wUnB+9b9mYy8PFzavKzMam+vffptgpLf8T3AGvh4GHgQcMLEox4vuqq1Hf57dxDBw4ZksyGJRHJmtpXKtKcl8Zd/RGwAB404mLRdbdRjU123PeycIJSm/i13/E9gBrZWn4OZOE8zDx751/YlbVGTj8t0bIAA154WLPLhlzpi74LaM/VGwBpYtMcg8KsHEpvd9WLTC2Xeca0pP8AE9wCJmOTXngYU6lVPDx5VxbkoutNJvu9tjNWHi01Tqpxqa65/bjCtJS+a9T3BNQvHbWtvK3Fx7qFRbRVOpbbQlBOK27cHqkkkktkuyQBU3IAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADC7syYXdmQIz7x+ZIjPvH5kgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGF6mTC9QMkX+8iSIv95ECQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJRMmImSKjP0+ZgzP0+ZgAACoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEo9iJKPYiskJfaRMhL7SAAAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaMNUx54eTlNTjHFlONkZJdSce67/kbxzmpYOTPV5YtVU5YeoSrnfNJ7Q6PtL4bpI64a1tOrfvz9BcY2fHInPet1QjVCzec47pSW/KT42+J6wzMWyEZ15NMoyl0KUZppy93z+BQaxhZd9uqqiqzaddHTtH7ai22l6P5HhDBtsx87IohkOyKrsrU8ZU9U4Pf6sVy3tx29Tt/DSY3vXL7flNuneTQlNu+tKEumT619V+5+58ozdfTj1+ZfbCqHbqnJRX5s5jGwMz27FVlNirzLI5eQ2ntCcXKXS/d3gvwLPxB5zliKGP5lfXJzsVHnOvjjaPx7bmJw1i8Viea7btmoVRysOmH94svq6Jxaa+qtyWnZkc/Aqy4QcI2JtRfdc7HP6Ri5Vd2l+Zj3RVd+Q5dVfT0pxe26XC3/It/DlVlOhYtd1cq5xi94yWzXL9C5cVKV7Of+5/ECyAB5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASiZMRMkVGfp8zBmfp8zAAhdZ5VM7XGUuiLl0x7vb0RMFRoz1XGjgY+YlOUMmUI1xil1Ny7Lv3/2PSrNrdV1t7rohVbKtylbFrh999+Pk+SmwMHJhrEcSyqUcLBssupk19WXVt0pfLeRq5GFl7+a6rlVDUL5yiqfMez+zNRfdd/zPX/Djmdb/AHu/f+026mORTN1qF1cvMTcNpJ9SXfb3mI5NE1BwvrkrG1BqafU13S9/ZnMPDysbSoZWHTkTvrybJVwlV0SUZx6XtFdlvszZ0nTb8XV4Y065+y4UZTqsae0pTUU1+H1/zMzgpETPF+/uvVdr6/Kx8bp9ovqq6uF5k1Hf8zTztXrw7bq5VSn5WP7Q2muV1bbFd4hhkWZvRDGlKEsdqNsMbzm5Nv6u74iuz3NKzEy5YbXs17l+yYV7dD36lL7Pz+BrHgpMRa080266L6oqXvW5kjWtq4p+5EjyKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKPYiSj2IrJCX2kTIS+0gAAKjXz8yvAw55V0Zyrht1dC3aTe25HIz6qMjHocZTsyOpw6dttordttvse2RTDIx7KLFvCyLjL5NbFDomNmTsttz6Zwni0eyVbp/X233kvfvxydsdazWZnu/YFxVn0PDpyMmyrHVq3SlbFrf3J77P8D2d9MXNSurXRHrlvJfVj737kcj7FlVwwLL6b1UsLynGON5rjPfdpxfbdbcmxbpuTCrT6q6r5RvpWNe5R2cIdalztvtx1I6z0em/+SbdPG6qU4wjbBylHrSUlu4+/wCXxIWZWNXdGmzIqhbP7MJTSk/kio8PYuRXkXzyq5R9ngsWmUlt1Qi2918HuvyK3xBTl3350a8Ozqbh5bqxet2Jbcufpt7kZrgrOTg2u17brFdeROl1Tbjk14++/rNb7lkc3k42RLULZRotcXqVE01B7dKit38l7zpDGWtaxHD+8gABxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASiZMR9TJFRn6fMwZn6fMwAABUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUexElHsRWSEvtImQn9pAAAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR32n0+hIAigAKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGJPZAEE0tkZACsSSa2Z5wbe6foABIAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhvlL3nouEARQjNbxAAhBuUd2SAKAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR7z6fQAiv/9k=" />),
            category: 'common',
            attributes: {
  "contentDOX": {
    "type": "string",
    "default": "Last 30 days"
  },
  "contentkzJ": {
    "type": "string",
    "default": "Total Subscribers"
  },
  "contentrAs": {
    "type": "string",
    "default": "71,897"
  },
  "contentvGB": {
    "type": "string",
    "default": " Increased by "
  },
  "contentUrm": {
    "type": "string",
    "default": "\n          122\n        "
  },
  "contenttAt": {
    "type": "string",
    "default": " View all"
  },
  "contentiBl": {
    "type": "string",
    "default": " Total Subscribers stats"
  },
  "contentNvx": {
    "type": "string",
    "default": "Avg. Open Rate"
  },
  "contentPST": {
    "type": "string",
    "default": "58.16%"
  },
  "contentFjy": {
    "type": "string",
    "default": " Increased by "
  },
  "contentreN": {
    "type": "string",
    "default": "\n          5.4%\n        "
  },
  "contentSZM": {
    "type": "string",
    "default": " View all"
  },
  "contentXRx": {
    "type": "string",
    "default": " Avg. Open Rate stats"
  },
  "contentyFg": {
    "type": "string",
    "default": "Avg. Click Rate"
  },
  "contentBoR": {
    "type": "string",
    "default": "24.57%"
  },
  "contentulg": {
    "type": "string",
    "default": " Decreased by "
  },
  "contenthzM": {
    "type": "string",
    "default": "\n          3.2%\n        "
  },
  "contentCvF": {
    "type": "string",
    "default": " View all"
  },
  "contentwyT": {
    "type": "string",
    "default": " Avg. Click Rate stats"
  },
  "svgVMd": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgwTo": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgPNq": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76\"/>"
  },
  "svgfSB": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>"
  },
  "svgsov": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122\"/>"
  },
  "svgWJv": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgVMd }
            onChange={ ( value ) => {
              setAttributes({ svgVMd: value });
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
            value={ attributes.svgwTo }
            onChange={ ( value ) => {
              setAttributes({ svgwTo: value });
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
            value={ attributes.svgPNq }
            onChange={ ( value ) => {
              setAttributes({ svgPNq: value });
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
            value={ attributes.svgfSB }
            onChange={ ( value ) => {
              setAttributes({ svgfSB: value });
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
            value={ attributes.svgsov }
            onChange={ ( value ) => {
              setAttributes({ svgsov: value });
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
            value={ attributes.svgWJv }
            onChange={ ( value ) => {
              setAttributes({ svgWJv: value });
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
             <h3 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentDOX} default="Last 30 days" onChange={ (newtext) =>  {
        setAttributes({ contentDOX: newtext });
      }}
    /></h3>

            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"> <dt>
        <div className="absolute bg-indigo-500 rounded-md p-3">
          
          
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVMd }}
        >
      </svg>
      
        </div>
        <p className="ml-16 text-sm font-medium text-gray-500 truncate"><RichText tagName="span" value={attributes.contentkzJ} default="Total Subscribers" onChange={ (newtext) =>  {
        setAttributes({ contentkzJ: newtext });
      }}
    /></p>
      </dt>

                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                        <p className="text-2xl font-semibold text-gray-900">
                            <RichText tagName="span" value={attributes.contentrAs} default="71,897" onChange={ (newtext) => { setAttributes({ contentrAs: newtext }); }} /></p>
                        <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                            
      <svg
         className="self-center flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwTo }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentvGB} default="Increased by" onChange={ (newtext) =>  {
        setAttributes({ contentvGB: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentUrm} default="122" onChange={ (newtext) =>  {
        setAttributes({ contentUrm: newtext });
      }}
    /></p>
        <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
          <div className="text-sm">
            <span className="font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contenttAt} default="View all" onChange={ (newtext) =>  {
        setAttributes({ contenttAt: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentiBl} default="Total Subscribers stats" onChange={ (newtext) =>  {
        setAttributes({ contentiBl: newtext });
      }}
    /></span></span>
                </div>
        </div>
        </dd>
    </div>
    <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"> <dt>
        <div className="absolute bg-indigo-500 rounded-md p-3">
          
          
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPNq }}
        >
      </svg>
      
        </div>
        <p className="ml-16 text-sm font-medium text-gray-500 truncate"><RichText tagName="span" value={attributes.contentNvx} default="Avg. Open Rate" onChange={ (newtext) =>  {
        setAttributes({ contentNvx: newtext });
      }}
    /></p>
      </dt>

        <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">
                <RichText tagName="span" value={attributes.contentPST} default="58.16%" onChange={ (newtext) => { setAttributes({ contentPST: newtext }); }} /></p>
            <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                
      <svg
         className="self-center flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfSB }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentFjy} default="Increased by" onChange={ (newtext) =>  {
        setAttributes({ contentFjy: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contentreN} default="5.4%" onChange={ (newtext) =>  {
        setAttributes({ contentreN: newtext });
      }}
    /></p>
        <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
          <div className="text-sm">
            <span className="font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentSZM} default="View all" onChange={ (newtext) =>  {
        setAttributes({ contentSZM: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentXRx} default="Avg. Open Rate stats" onChange={ (newtext) =>  {
        setAttributes({ contentXRx: newtext });
      }}
    /></span></span>
    </div>
</div>
</dd>
</div>
<div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"> <dt>
        <div className="absolute bg-indigo-500 rounded-md p-3">
          
          
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsov }}
        >
      </svg>
      
        </div>
        <p className="ml-16 text-sm font-medium text-gray-500 truncate"><RichText tagName="span" value={attributes.contentyFg} default="Avg. Click Rate" onChange={ (newtext) =>  {
        setAttributes({ contentyFg: newtext });
      }}
    /></p>
      </dt>

    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
        <p className="text-2xl font-semibold text-gray-900">
            <RichText tagName="span" value={attributes.contentBoR} default="24.57%" onChange={ (newtext) => { setAttributes({ contentBoR: newtext }); }} /></p>
        <p className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
            
      <svg
         className="self-center flex-shrink-0 h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWJv }}
        >
      </svg>
       <span className="sr-only"><RichText tagName="span" value={attributes.contentulg} default="Decreased by" onChange={ (newtext) =>  {
        setAttributes({ contentulg: newtext });
      }}
    /></span><RichText tagName="span" value={attributes.contenthzM} default="3.2%" onChange={ (newtext) =>  {
        setAttributes({ contenthzM: newtext });
      }}
    /></p>
        <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
          <div className="text-sm">
            <span className="font-medium text-indigo-600 hover:text-indigo-500"><RichText tagName="span" value={attributes.contentCvF} default="View all" onChange={ (newtext) =>  {
        setAttributes({ contentCvF: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentwyT} default="Avg. Click Rate stats" onChange={ (newtext) =>  {
        setAttributes({ contentwyT: newtext });
      }}
    /></span></span>
</div>
</div>
</dd>
</div>
</dl>
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
             <h3 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentDOX} /></h3>

            <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"> <dt>
        <div class="absolute bg-indigo-500 rounded-md p-3">
          
          
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgVMd }}
        >
      </svg>
      
        </div>
        <p class="ml-16 text-sm font-medium text-gray-500 truncate"><RichText.Content value={attributes.contentkzJ} /></p>
      </dt>

                    <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
                        <p class="text-2xl font-semibold text-gray-900">
                            <RichText.Content value={attributes.contentrAs} /></p>
                        <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                            
      <svg
         class="self-center flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwTo }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentvGB} /></span><RichText.Content value={attributes.contentUrm} /></p>
        <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
          <div class="text-sm">
            <span class="font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contenttAt} /><span class="sr-only"><RichText.Content value={attributes.contentiBl} /></span></span>
                </div>
        </div>
        </dd>
    </div>
    <div class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"> <dt>
        <div class="absolute bg-indigo-500 rounded-md p-3">
          
          
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgPNq }}
        >
      </svg>
      
        </div>
        <p class="ml-16 text-sm font-medium text-gray-500 truncate"><RichText.Content value={attributes.contentNvx} /></p>
      </dt>

        <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p class="text-2xl font-semibold text-gray-900">
                <RichText.Content value={attributes.contentPST} /></p>
            <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                
      <svg
         class="self-center flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfSB }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentFjy} /></span><RichText.Content value={attributes.contentreN} /></p>
        <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
          <div class="text-sm">
            <span class="font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentSZM} /><span class="sr-only"><RichText.Content value={attributes.contentXRx} /></span></span>
    </div>
</div>
</dd>
</div>
<div class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"> <dt>
        <div class="absolute bg-indigo-500 rounded-md p-3">
          
          
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgsov }}
        >
      </svg>
      
        </div>
        <p class="ml-16 text-sm font-medium text-gray-500 truncate"><RichText.Content value={attributes.contentyFg} /></p>
      </dt>

    <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
        <p class="text-2xl font-semibold text-gray-900">
            <RichText.Content value={attributes.contentBoR} /></p>
        <p class="ml-2 flex items-baseline text-sm font-semibold text-red-600">
            
      <svg
         class="self-center flex-shrink-0 h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgWJv }}
        >
      </svg>
       <span class="sr-only"><RichText.Content value={attributes.contentulg} /></span><RichText.Content value={attributes.contenthzM} /></p>
        <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
          <div class="text-sm">
            <span class="font-medium text-indigo-600 hover:text-indigo-500"><RichText.Content value={attributes.contentCvF} /><span class="sr-only"><RichText.Content value={attributes.contentwyT} /></span></span>
</div>
</div>
</dd>
</div>
</dl>
</div>
</div>
</div>
            );
            },
        });
        