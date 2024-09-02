
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/brand-sidebar', {
            title: 'brand sidebar',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAHwBaADASIAAhEBAxEB/8QAGwABAQACAwEAAAAAAAAAAAAAAAMCBAEFBgf/xABHEAEAAQQBAgMFBQYDBAcJAQAAAQIDBBESBTETIWEGFEFRgRcikaGkFTJiZXHiByNSQsHR4SQzVXKCkrEWJjVEU1SDorLw/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBgMEBf/EACwRAQABAwEIAgIBBQEAAAAAAAABAgMRIQQSExQxUmGhQVFx8AUigZHR4cH/2gAMAwEAAhEDEQA/APPgNSoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3AMsuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+IgNSo5iJmYiI3M9oh2F/oubYxZyLlNPGI3VTFW5iGhRVNFdNdPemdxt7LBzbPVMSuI+7VNPGuj5bcrldVOJjorM4eVwcC/n3KqbERqn96qqdRDDMxL2Fe8K/TqrW4mO0w7DpuZPRsu/ZyrVUxOonjHnuO0+fePNDrHUY6hfoqt0TTbojVPLvKYmqavCfl14KWrF69FU2bVy5FEbq40zPGPVfolMUox79y1Vdt2blVuj96ummZin+sufdr82JvxYueDHe5wnj8u/YzAkNq103PvWPHtYWRXa/102qpj8dIWbN2/XwsWq7let8aKZmfyRvR9jAdx7PdL976ziWc7Hu+7X5rjcxNMVapmfKf6xDVzcGuOr5uNhWLlymzerpppopmqYpiqYhXiU727/caI9L7NdBsZWNlZ3U7ORVZsx9y1bpnlX33r5/Rn17A6VHs5i9U6Zi3Meb17w5prrmZ1HKJ3uZ+NLnO0U7+5/Yw8uNnHwM3Jt1XMbEv3aKe9VFuaoj8E7WNkXrlVu1Yu3K6f3qaaJmY/rDtvR9iQpax796muqzZuXIojdU0UzPH+vyKce/XZqvUWblVqmdVVxTM0x/WU5gTASAAAAAAAAAAPtwDLLgAAxm5bidTXTE/KZZRO43AAAAMarlFNUU1V0xVV2iZ85BkDGLlFVc0U10zVHeInzgGQAAAAAAxm5RTXFFVdMVT2pmfOWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPiIDUqPX9KjC/ZFGptzRFG7vLU6n47dZ0DX7ZvzYifB41a9I35Olt0TcuU0U96piIeywsK10rDuTT96rjyrqn/AGtR/wCjzVxFETr1VnRo+1Hge62+WvH5fd+evj9FPZycaenzTTNM3dz4sT318Ppp1nTsOrrWTev5V2qIpmN8e87+EfLsh1fp37PyKaaK5qt1xumZ7x6G7GOHnU8I9S8GOoXoxoiLUVajXb119Xcew+bGN12LFc/5eVRNuYmfLfeP/TX1edZ2L1ePft37U6uW6orpn5TE7h0uW9+iaFofSunYGP03p9PRL8xyz6r+vWI8v/51Lq8vHowcToHQb9NMeNfpuZEa3vz/AHZn47mdfR0Gd7SZmZ1bF6hVRborxtcaaN6nz3O/j59mr1fq2R1bqEZl6KbddNMU0xRM6p18vq8dGzXN7NU9dZ/OqcvS9c9oerYHtHOJiU002bc0027Phxq5ExH17/J2EY9ix/iHTNjjE3caa7kR/qnfnP8AXUOgs+23UbePRRcsY927RHGm9XTPL6+ffs67E69m4/WauqVzTfyKomJ5x5amPQjZ693EREaY/Jl3/TusX+pe2mHZrot2rGPXdptW6Kda+5VHf6NvrcU9L6Pn5HSKPFuZeRcpyr8d7X3p3Gvhrzj8/jDx2B1O7g9XjqVq3RVcpqqqimrevvRMf721ie0WVi5Obc8KzdtZtVVV2xciZo3M78o39Fq9mneiaY0iI0+9TLvfZ3qeZb9kOoV0XtVYkaszxj7m/P5eff4o5esj2E6T49eouZs86v61XNy6LF6xdxenZmDas2/By58973T/AEcXur3r3QsfpNVu3Fqxcm5TXG+Uz97v/wCaVuBO/mI+c+v9mXp/ajrHUOjdQxsLplNOPjW7cTRTFuJiv084bmZfpwfajpGZXTFq7m2ZtZNEeXfWt/8Ain8nncH2wz8XGt2Ltmxk+FGrddyJ5U/V1PUep5fU833vKriq5ERFOo1FMR2iIUp2arSJiI0nX7yZfQunYuL0XxMXIiJjqWXcpoie3HU6ifw19XRdesT0L2Ts9L3/AJmTfqqrny+9TE7jt/4HTdV9oszqeVi5Fym3brxZ5W+ET+9uJ3+UI9c6zkdaybd7Iooo8OjhFNG9d5nfn/8A7yLez3Iqiqr8z+Y6GXWgPoIAAAAAAAAAAfbgGWXAAfMsfoWF17/EHrePn+Jwt7rp8OrU73TH+9zn4mR7A9bwb+DmXrvTcmvjdtXJ321vevLep3E+n406d1fA6P8A4idcvdSyIsW64mmmqaZq3O6Z15RPyT9oOpUe23XOn9L6RRcuY1mua716aZiNTrc6ntERE9+8yuh6rrntVT03qVHTMLp9/qGdVTzm1anXGPWdT/6Oeh+1uL1S1me8Y93Cv4NM137V3vTTHefpr5PP9c61l3PbLI6ZkdX/AGPhWbcTTdptxNVydRP73rufTy+brfZO5j1+0XXrly5kdSxpwrnKqqP8y/RunflM/GOyMaGXff8At9X4E50dBzJ6XFfH3rlHz121r8+/k0PbHqWNT7S+znU6Zqrx+EXo4RuaqdxMaj5umjLxumdJrzvZv2kyLNMVeXTsqmJq7/Lzp9e31dt1S/ezvaH2PyMy1Tbu3aaK66IjURPKJ7fD5pwO76b7a05PWrfTOodKyen3b3/VTe71b7biYjW/q8/Y6x+x/b/rddGJfzL977lqxZjc1T5T9I1DsvbiIj2u9l6oj705MRM+niUf8XXYfVcLpH+JnVr/AFCrw7VyKrcXeMzFEzxmN6+ephED1Ps57WWOtZN/Dv4t3BzbFPKuzdn4fHz1Hb1iO7r73t7TVdv1dM6Pl52JjzPi5NHlTEfOPKfL+uvJ1OJcp9ovb3qGX0iavApw67c3op1FVU0cYnz9e3/dZexftF0vofs/k4PVKpx8qxdrmu1VRPKv0/r5aMGXqqfavplXs3V1yKq5x6fuzRr78V/6dfPz/wB7qLXt7NF7HnqfRMvCxMmYi1kVzuJifjrUeX9Jnyeb6Vl9T6D/AIe383GtzROVmRFE10biijj+/ET85jXm0PanIt3umYn/ALxX+qXqqudduaeNFvy+Xwn4fiYMve9a9sqOldbq6X+zr+Td4RVR4VW5rqntTEaYdQ9tYwbGHbq6VkV9SyqOfuUTPK356iJnW9zr5NCIif8AFu3MxE6xNx6fcR6zlWuif4nWeo9S5U4l6xqi7NMzFH3eM9vXv/3jA1L3V/2x/iB0S5XiX8O/Z/y7ti9GqqZ+9P1jUw+mPmmX1XC6v/ib0q/0+rxLVuKbc3eMxFcxymdb+W4h9LRJAAhIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4iA1KhHlO4dje61m3sWbFdVOqo1VVFPnVDrhWaYnqhs4Wdfwbk12KojlGpiY3EuMzMvZt7xb9W51qIjtH9GuG7GcgAskAAAAAAAAAAAAAAAAAAAAAAAB9uAZZcABo3ui9JyL1V6/0vCu3a53VXXj0VVVT6zMNjGxMbEt+HiY9mxR/ptURTH4QsA1czpnT86umvNwcbIqo/dm7apqmPxhlZwcOxkVZFjEsW71ccarlFuIqqj5TMefwj8GwA0J6L0mcn3memYc3t8vE8Cnlv57139WxewsS/ft5F/FsXL1r/AKu5XbiaqP6TPnC4CF/CxMm9avZGLYu3LM8rVdy3FU0T33Ez27R2+SdzpXTbld6u50/Fqqvxq7VNmmZuf96def1bYCGJhYuDa8LDxrOPb78bVEUx+SWR0npuVfi/ldPxb12O1dyzTVP4zDcATrsWblibFy1RXamOM26qYmmY+WmpHQ+kRYmxHSsLwpq5zR7vTrl23rXfzlvgIe5Ynvfvfutj3nXHxvDjnr5cu+jLwsTOteFm41nIo78btEVRH4rgNS30vp1uuzXb6fi012I1aqizTE24/hnXl3+DbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxEEKpmqdy09VWFFxrinE8DYGuHE8DYGuHE8DYGuHE8DYGuHE8DYGuHE8DYGuHE8DYGuHE8DYGuHE8DYGuHE8DYGuHE8DYGuHE8DYGuHE8DYGuHE8DYEKZmmdwuvTVkfbgGYXAABK3cmu5V/phj7t/H+QLid234mvPWvQtW/D35736AoIe7fx/kzu2/E15616AoJ2rfh78979GHu38f5AuJ3bfia89a9C1b8PfnvfoCgh7t/H+Sl234mvPWvQGYnateHvz3v0Ye7/x/kC4nct84iN616Fq14e/Pe/QFBD3f+P8mdy3ziI3rXoCgnateHvz3v0Ye7/x/kC4nct84iN616Fq14e/Pe/QFBD3f+P8mdy3ziI3rXoCgnateHvz3v0Ye7/x/kC4nct84iN616Fq14e/Pe/QFBD3f+P8lLlvnERvWvQGYnateHMzy3v0YTj7mZ5/kC4nct86YjetehateHMzy3v0BQQnH3Mzz/Jnct86YjetegKCdq14czPLe/RhOPuZnn+QLidy3zpiN616Fq14czPLe/QFBCcfczPP8mdy3zpiN616AoJ2rXhzM8t79GE4+5mef5AuJ3LfOmI3rXoWrXhzM8t79AUEJx9zM8/yZ3LfOmI3rXoCgnateHMzy3v0YTj7mZ59/QFxOu3zoinetehateHMzy3v0BQQnH3Mzz7+jOu3zoinetegKCdq14czPLe/RhOPuZnn39AXE67fOiKd616Fq14czPLe/QFBCcfczPPv6M67fOiKd616AoJ2rXhzM8t79GE4+5meff0BcTrt86Ip3rXoWrXhzM8t79AUEJx9zM8+/ozrt86Ip3rXoCgnateHMzy3v0Y1Y/KqZ5d532BYTrt8rdNG9a+Oi3a8OrfLflrsCgjVj8qpnl3nfZlXb5W6aN618dAoJ27Xh1b5b8tdmNWPyqmeXed9gWE67fK3TRvWvjot2vDq3y35a7AoI1Y/KqZ5d532ZV2+VumjetfHQKCdu14dW+W/LXZjVj8qpnl3nfYFhOu3yt00b1r46Ldrw6t8t+WuwKCNWPyqmeXed9mVdvlbpo3rXx0CgnbteHVvlvy12Y1WOVUzy7+gLCdVvlbijfb46cW7PCrfLf0BURqscqpnl39GVVvlbijfb46BQSt2eFW+W/o4qscqpnl39AWE6rfK3FG+3x04t2eFW+W/oCojVY5VTPLv6MqrfK3FG+3x0Cglbs8Kt8t/RxVY5VTPLv6AsJ1W+VuKN9vjpxbs8Kt8t/QFRGqxyqmeXf0ZVW+VuKN9vjoFBK3Z4Vb5b+jiqxyqmeXf0BYYVW92oo32+OmNuzwq5ct/QFRGuxyqmrlrfoym3u1FG+3x0Cglbs8KuXLf0cV2OVU1ctb9AWE5t7tRRvt8dOLdnhVy5b+gKiNdjlVNXLW/RlNvdqKN9vjoFBK3Z4VcuW/o4rscqpq5a36AsJzb3aijfb46cW7PCrly39AVEa7HKqauWt+jKbe7UUb7fHQKCVuzwq5ct/RxXY5VTVy1v0BYYTb3a4b+umNuzwrirlv6AqI12OVc1ctb9GU292uG/roFBK3Z4VxVy39HFdjlXNXLW/QFhObe7XDf104t2eFcVct/QFRGuxyrmrlrfoym3u1w39dAoJW7PCuKuW/o4rscq5q5a36AsJzb3a4b+unFuzwrirlv6AqI12OVc1ctb9GU292uG/roFBK3Z4VxVy39GNdVdu7uZ3TUC4AAAPiLXbDXaS58KM7Nq5fu02rVE111TqIj4u09xwN+4+8f9N/+pv8Ay+X+j/n8/wAHPT67droedesRVTlUcYm58qaqtaj5fFpfszN90978CrwdcuW47fPXdxzlDXvWrli7Vau0TRXTOpifgwdx1Cu3d6Hg3b9NVeVXFURc38Katan5+Tp0xORXGxcjLuTbxce7friOU026JqmI+eoc5OJk4lUUZWPesVT5xFyiaZn8Xc+yUXJu9VizFU3J6be48e+/u616uzw8XNyOgY+N1Wiuu7dz6IxaMqqYmY197v58dfJyqu7tWE4eNWxca/mZNGPi25uXa/3aY7z5be36jgYM2MK/VgWrtVPUPCqoxcSqzNdHGZmnU/vecd18bFtx17pWXj2MWizN67RFVrHqsV74Vfdqonvr5qTtEYzEJw8BjY97LyKMfHtzcu3J1TTHxTqiaappmNTE6mHuOh14+fHTOoU4ONi3rfUKrEeBRxiaPDmrz+c+pGBj9RpqjqXS7OBFrPt2bVVFuaJvUzVqaZn/AGp18UzfxOJhGHhh7W/g059rJpvdIxsO5YzrdnGmmibUXoqr1NNUx38tTuPo3M3puFXRh11YuLFdvqduzV4WJNqmaZnU0zv9+PU5iPow+fLZGNfxotePbmjxrcXKN/7VM9p/J62iqzdr61kY/R8G5e6fVTasWabG4mma5iaqqf8AanUd/g672z5e99NmuxFiqen25m1Eaiid1eWvhpam7vVRGDDzoDsAAAAAAAAAAAADYa7YdLfyPtwDNrgAJ2oojfCd/NRHHpqp5co1vSwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd2umjXKne1E71ubmtTEaBQAAAHxFrthCqJpnUtLcUdh0y9jRiZmJlXpsxfijVfCatcZ32h2nvPS/+0f/AJL3X/qKv/N/yeaHCacow7Hqd7GnEw8TFvTeixFe6+E075TvtLrgTEYFcbKyMS5NzFyLtiuY4zVbrmmZj5bhlezcy/eovX8q/cu0edNddyZqp/pM9kAxHVLbvdU6jf4+Pn5VzhVFdPK7VPGqO0x59/UudU6jcvW71zPyqrtrfCubtW6d99TvyagbsfQvZzMqxRTRYyb1ummvxKYouTERVrXKNfHXltzkZ+ZlUUUZOXfvU0fuxcuTVFP9NtcMR1Gzf6jnZPD3jNyLvhzujndqq4z843Pkzu9V6le4+L1DKr41RVTyvVTqY7THn3j5tMN2PoXs5uXj5FWRYyb1u9XvlcormKqt+c7n4scjJyMquK8q/dvVxHGKrlc1TEfLz/rKQYjqACQAAAAAAAAAAAAbCFMTVOoXdbY+3AM0uAAlYuVV8uXwVYWqaI3wnfz82YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACGTMxx1Mx3XTu100a5U72CgAAAPiIDUqApZs3ci7FuzRNdc9ohtR0fqM18fdat633jX47VmqI6yhoil+xdx7s271E0Vx8JTSkASAAAAAAAAAAAAAAAAAAAAAAAAPtwDLLgAI49NVPLlEx2WSs3Kq+XLXkqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnetzc1qYjSiGTMxx1Mx3BcAAAHxEBqVHZdIqibeXYouxavXbcRbqmddp8436ty1gZdPSr+LXVRN2uqmqi34kbp+ctKxbx8XBoy8i141y7VMWqJn7uo7zPz82zgZVnLuV0e4YkZPCZtat/dqmPPUw4VZ1mFZa/V6oi3i2K7lNy/ZomLlUTv4+Ub9HWuxyLdjLwaszHtRZrtVRF23TPlqe0w650o6YTDc6ZRg3MmLWfTkTFcxTRNmqmNTM/HcS7bN6Hi1Z2TidPqu2/dJ/wA+/l3aYtxHw7U73MuhxrkWsm1dqiZiiuKp16S9Fje0li11Xqd6PeLVjOmmaa6KaZuUTHbyny+MuN2K4nNH70S6+egZNOXXYu5GJapptxdi/Xd1bqpntMT3nf8ARSn2azPGyaLl/EtU41NFVV2u5MUTTV2mJ128nY0e0eHOdfu3Ksyaps0W7WTVbt1XKNTMz93tETv1/wCEure0OJnWOoUW6Mjlk2rFFM1xT3oqmZ3qfX4fkpv35nGPr/z/AKnRqZPsxm41q/XVfxK67NvxZt0Xd1zb/wBcRrs6R6G513FqzMq9Fu9xvdOnEpjUbivURufPt5PPO1qa5j+tAA7AAAAAAAAAAAAAAAAAAD7cAyy4ACdqminfCd/PzURx6aqeXKJjssAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAndrpo1yp3tRO9bm5rUxGgUAAAB8RAalRuY/VM3GsxasX+NEdo4xOvxhX9udS/+5//AEp/4OuFdymfhGG5kdUzcmzNq/f5UT3jjEb/AAhpgmIiOgAJSAAAAAAAAAAAAAAAAAAAAAAAA+3AMsuAAlZuVV8uWvJVO1TRTvhO/n5qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIZMzHHUzHddO7XTRrlTvYKAAAA+IgNSoDesYFqcWjIy8unHouTMURwmqatd+zP9l+PG+nZFOVr96NcJj6T8FN+EZdcNrK6dl4lEV5FmaKZnW9xMfk1VomJ6AK4+NkZVybeLYu3q4jc026JqmI+eoMjFyMWuKMqxds1TG4puUTTMx9TMZwlIFvdb/ufvnhz4HieFz+HLW9fgTMQIg5ppmqqKaYmZmdREfEHA5qpqpqmmqJiqJ1MTHnEuAAEgAAAAAAAAAAAAAAAD7cAyy4ACOPTVTy5RMdlkrNyqvly15KgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ3rc3NamI0ohkzMcdTMdwXAAAB8RAalR2Ob/8G6b/APl//p1zesZ1mMWjHy8SMii3MzRPOaZp337M/e+m/wDZX6ipzjMaYQYfn0XqMT2ibUx6fedc3r+fanFrx8TEpx6LkxNc85qmrXbu0U051kd/7I8ZyOpc7s2af2fd3ciNzRG6fPXo7XAzOn5mRh9Pjl1C3i2r1yq7kUfvTMb1ETuYj/k8davXbPPwbtdvnTNFXGqY5Uz3ifnHoWb12xXzsXa7dWpjlRVMTqe8eTjcsb8zOU5eoxbkXOlR1LG6Nh5ORfyvCrt02N0W6YpjURT8N99+rdr6P0zx5xot0RZ/a8W+Xx4+Fy4b765eTx2Nm5eJy91yb1jn+94dc07/AK6XudTrr6VawKbcUxTem/Xc5TNVdfnET6eXkrVYrz/TP7/xOXrMjp/S8q/iUXLFFuYzfDmbeJVYpmnU/cmZ8pncR5tK3dux1HDu3ug42JFvPptU3abfCNT5cZp/2pjvFXwmHmsjPzMrh7zl373Dzp8S5NXH+mzIzszK4e85d+9w/d8S5NXH+mynZ6ojEyjL19EWbnVeqVZfT7Vu57x4du9XhTdt65T3iPjV5feeV61jzi9XyrFVu3bmmv8ActzM0xvz8tuKeq9Spu1Xac/Ki5VEU1VeNVuYjtG9+rUrrquV1V11TVVVO5qmdzMr2rVVFWZkcAPQAAAAAAAAAAAAAAAAPtwDLLgAJ2qaKd8J38/NRHHpqp5comOywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACd2umjXKne1E71ubmtTEaBQAAAHxEBqVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH24BllwAErNyqvly15Kp2qaKd8J38/NQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDJmY46mY7rsLtdNGuUb36AzAAAB8RAalRlRRVcrpoojdVU6iI+MufCueP4PCfE5cOPx3vWncYt6/i4PT/cqKfEyK65rjUbr1V23LZ5+0Pj8/Djhy3w3b1rfbfdym5Pj/ACjLztdFVuuqiuNVUzqYn4Sxd3lXsjKweoRm00xcx66JoiIj7m51rcd/J0i9NWQHY9F6faz796cm5Xbx8azVeuzRG6piPhG/Lc7Uv4/Ssm1b/Zly/byarsW/AyJiYqie1UVRERHrtWbkRVhLqh3+P7O1W87Cm/fxsnFvZMWK6se7y41d+M+UfBOn2dyMiuuq1exrNFd6u3j0XrvGq7xnX3fLz+SvHo+zDpB3WL7NZmTj2bs5GJZm/VVRbt3rk01VVUzqY1rvuDp3s9k5E27mRcx8eiq94UUXrnGq5MTqYp+c/D+qZvW4zqYdKO/vez03uqZVnFycXHtUZE2bVN+7qquflEamZ7w1f2BlU4N7Lv38WxRarrtzTcuaqmunvTHl5z30Reon5MOqAdQAAAAAAAAAAAAAAAB9uAZZcABHHpqp5comOyyVm5VXy5a8lQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE71ubmtTHl81EciqaeOpmO/YFgAAAfEOVPzj8TlT84/FyNRqo3su9aq6T0+im5RNdHicqYqjdO6vLbQ5U/OPxciIjCG9iXrVPSeoUVXKIrr8PjTNUbq1V56aHKn5x+LkIjGR2HROpWen5N33mibmNkWarN6mmfvcZ+Mevk26c3oGHcx/dsW/k8b0XLteRqJ4x/sxETqfr8nSClVqJnOUvXZPtTgV+6RTVl3Ys5tORM127dOqIiY4xFM+sd/Vjie1WLRjUWq7uZY8K7crp8Gm3PiU1VTVETy7TG/g8mOfK28YMu8uddx7lXSK64u8sPJuXr29Tyiq5FXlPxnUejZnrvScqbVWdRlxOLlXL1jwuP3qaq+Wqtz5Tv5PNC02Kf398mXr8b2p6Zav3r0U5NmuvKm9NVu3bmbtHwpqmZ8vo6jq/WMbOwqrNqLkVTm3cjdURrjVPlHfu6cRTs9FM70GXHKn5x+Jyp+cfi5HfUccqfnH4nKn5x+LkNRxyp+cficqfnH4uQ1HHKn5x+Jyp+cfi5DUccqfnH4nKn5x+LkNRxyp+cficqfnH4uQ1HHKn5x+Jyp+cfi5DUccqfnH4nKn5x+LkNRxyp+cficqfnH4uQ1H24Bl1wAE7VNFO+E7+fmojj01U8uUTHZYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABO7VRTrnTvfbyUTvW5ua1MeXzBQAAAHxEBqVAbvTOnXM+9MRum3T+/Xrt6f1el6Jg4dN6ubdqmrhVxiqrzl4tq22jZ9J1leiia5w8aPqF6xYu2tXLVFca1qqmJjTyPWOjWYnnhxwqn/Y35T/Rws/ylu5Vu1RheuzNMZedCYmJmJjUx3gfTcQdzb9nqrmHVl09T6d4NMxFVU3K/uzPaJ+6667g5VuzN+ce7OPE6i9FFXCrz1uJ0rFymekjXG1+zc/hFfuOTwmYiKvCq159vh8dx+KN/Hv41zw8mzcs163xuUzTOv6SmKonpImO4sez1+5bx5u5mHj3cmmKrNm7cmK64nt2jy38GjHTc6q9es28S/crs1TTci3RNXGY+elYuUT0kaotj4eVlTVGNjXr00fveHRNWv66Xp6bdq6V79E7n3mMaLUUzymrjv/lpaaojrI0hndtXLNyq3et1W7lPlVTXGpj6MEgAkAAAAAAAAAAAAfbgGWXAASs3Kq+XLXkqnapop3wnfz81AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEciqaeOpmO/ZZO7VRTrnTvfbyBQAAAHxEBqVHtsPEuYnSKbdiKfF4cvPeuUuoxIza71NVnJi1VXc8qI8/OZ89vV2ON3Ht3KNTTXTFUa7amHmMu3d95psxdrt8L9XnROpjz3H5Mpfqmqcy9FnGXYRbzYuXJ97uzd46qpn93fzhp27XU4yfCya6btERExPlyifj2dtZpi3b3rjEefOavOf6tTDy/G6jVbtUc6Z/er/wBOnnjOdHoqinGrpPaTFixn03aY1Tep5fX4/wC51D0XtfVHj41vy3TTVM/WY/4POtVskzNmmZfPnq7jGvWqfZPNs1XaIu1ZFE00TVHKY13iHf5ObZmvNzf2lYq6dewvDs4kXfvRVNMRFPD4Tvfn6vEOaqaqdcqZjcbjcd4TVYiqc5/dP9GXtKurxTmZMW+o0xap6RxtxTe1EXdRqI8/3u/q6Pr2TRlYfSq/HpvXqcbjcnlyqidz5T/zdMFFimiYmDL1GdiY/XLmJnUdSw8e34NFF+i7cimq1NPlOqfjHyVwLtqrp2Pj9N6taxfdsuqq7N254U3aN/dq18fKOzyQTY0xnSOhl7S7m2c+1kUdJ6lZwK4z5u1Tcu+H4lMx+9Hzjcdm1b6z0qmvKr8W3TTe6hPh1xMcrUza4+LFM943vz9XgqaKqt8aZnUbnUdnNVuujfOiqnU6nca1PyUnZaZ0yZVzrdVnNvW679F+qK53dor5xX67+O0AeqNIABIAAAAAAAAAAAA+3AMsuAAjj01U8uUTHZZOzcm5vcR5fJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABO9bm5rUx5fNRHIqmnjqZjv2BYAAAHxEBqVHr/ZjrNj3P3PLuRRXZiZoqqn96n5f1h572j674vVIyemxVNnjFNW6dbmPi0Vca7TYr3Num5T/pl8na9gqrnet/Pw6W6oidXY4PV87qtubUUxTTRHnrcTL0PTIs4GJeyMiaaKaKY5T6/wDF5qeq00R/0fFot/8Ai3DTycq9lXJrvV738I7R9Hlsfxl2a816Q63LsTTiFep5tWfnXMiYmIq8qYn4R8GoD71NMUxiHmelorj3Wnrm450Ys2p8/Pxf3YmfpO3FGDi124v5MTci1h2JimuuuY3Vvc+W5iI12jy83nvFueD4PiV+Fy5cNzrfz182dGXk264rt5F2mumnhFUVzExT8v6ejlwp+JQ9Ba6X0yq9drqiqLGNdnxIr5UzNNVMTT5TqY1VuPV1PWMO3gXbONTETdpt7u1b7zMzr8tNOb96YuRN65MXZibm6p+/r5/Nxdu3L1ybl65VcrnvVVO5n6rU0VROZkejzOmYUXsm1bwq7MY9drVya6piuKqoiY8/6/D5I14+BFzPrtdOquRiXItRai7V97dUxyn4/DydXm9Ty829VXcvV00zVyi3TVPGmfSNo28rItXartq/douV75V01zE1f1lWm3XjWR39+iz0/E6hjWLc68e3Ty5zE6qp3qdfLzXnDs5FdeNdmubX7QrmYmqZmrVvet+c/B5eb12YqibtcxXVyqjlPnPzn1ZTlZMzuci7M8+e+c/vf6v6+qOFP2Nzq9jFteBcxKZoi5TPKmIr47ie8TVETLrVL9+9kV8792u7VrW66pmdfVN2piYjEgAskAAAAAAAAAAAB9uAZZcABO1TRTvhVvffzURx6Zp5biY7d1gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE7tVFOudO99vJRO9bm5rUx5fMFAAAAfER7f7Pv5r+n/uPs+/mv6f+597nbHd6lTEvED2/2ffzX9P/AHH2ffzX9P8A3HO2O71JiXiB7f7Pv5r+n/uPs+/mv6f+452x3epMS8QPb/Z9/Nf0/wDcfZ9/Nf0/9xztju9SYl4ge3+z7+a/p/7j7Pv5r+n/ALjnbHd6kxLxA9v9n381/T/3H2ffzX9P/cc7Y7vUmJeIHt/s+/mv6f8AuPs+/mv6f+452x3epMS8QPb/AGffzX9P/cfZ9/Nf0/8Acc7Y7vUmJeIHt/s+/mv6f+4+z7+a/p/7jnbHd6kxLxA9v9n381/T/wBx9n381/T/ANxztju9SYl4ge3+z7+a/p/7j7Pv5r+n/uOdsd3qTEvED2/2ffzX9P8A3H2ffzX9P/cc7Y7vUmJeIHt/s+/mv6f+4+z7+a/p/wC452x3epMS8QPb/Z9/Nf0/9x9n381/T/3HO2O71JiXiB7f7Pv5r+n/ALj7Pv5r+n/uOdsd3qTEvED2/wBn381/T/3H2ffzX9P/AHHO2O71JiXtwHwVwAE7Nybm9xHl8lE7VNFO+FW99/NQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHIqmnjqZjv2WTu1UU6507328gUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHHpmnluJjt3WTs3Jub3EeXyUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATvW5ua1MeXzURyKpp46mY79gWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABO1TRTvhVvffzURx6Zp5biY7d1gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE7tVFOudO99vJRO9bm5rUx5fMFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATs3Jub3EeXyUTtU0U74Vb3381AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEciqaeOpmO/ZZhdqop1zjfy8gZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjj0zTy3Ex27rJ2bk3N7iPL5KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJXrdVfHjryVRyKqqePGZjuCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ2qaKd8Kt77+aiOPTNPLcTHbusAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAndqop1zjfy8lEr1uqvjx15AqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACdm5Nze4jy+SidqminfCre+/moAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjkVVU8eMzHdZO7VRTrnG/l5AoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACOPTNPLcTHbusnZuTc3uIjSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACV63VXx468lUciqqnjxmY7gsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACdqimjfGre1EMaJjluJjsuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAndqop1zjfy8lEr1uqvjx15AqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACdm5Nze4iNKJ2qKaN8at7UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARyKqqePGZjusndqop1zjfy8gUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCimu3d1Efdn4sq7/CuaeO9eqoCfif5Pia+m3FF/nXFPHW/VUBKu/wrmnjvXq58T/J8TX02oAlRf51xTx1v1K7/CuaeO9eqoDDxP8AK8TX02wov8q4p4636rAJXL3CuaeO/q5i5u1z19NqAI0X+VcU8db9XNy9wrmnjv6qgJxc3a56+m2NF/lXFPHW/VYBK5e4VzTx39XMXN2uevptQBGi/wAq4p4636ubl7hXNPHf1VATi5u1z19NsaL/ACrinjrfqsAlcvcK5p47+rmLm7XPX02oAjRf5VxTx1v1c3L3CuaeO/qqAwi5u1z19NsKL/KqKeOt+qwCVy9wq48d/VzFzdqa9dvhtQBGi/yqinjrfq5uXuFXHjv6qgJxc3amvXb4bY0X+VUU8db9VgErl7hVx47+rmLm7U167fDagCNF/lVFPHW/VzcvcKuPHf1VATi5u1Neu3w2xov8qop4636rAJXL3Crjx39XMXN2pr12+G1AEaL/ACqinjrfq5uXuFXHjv6qgJxc3amvXb4bY0X+VUU8db9VgErl7hVrjv6uabnK3Neu3w2oAjTf5VRHHv6ubl7hVrjv6qgJ03OVua9dvhtjTf5VRHHv6rAJXL3CrXHf1c03OVua9dvhtQBGm/yqiOPf1c3L3CrXHf1VATpucrc167fDbGm/yqiOPf1WASuXuFWuO/q5pucrc167fDagCNN/lVEce/q5uXuFWuO/qqAnTc5W5r12+G2NN/lVEce/qsAncu+HVrjvy33KLnK3VXrWvhtQBGnI5VRHHvOu7K5d8OrXHflvuoAnRc5W6q9a18NsacjlVEce867rAJ3Lvh1a478t9yi5yt1V61r4bUARpyOVURx7zruyuXfDq1x35b7qAJ0XOVuqvWtfDbGnI5VRHHvOu6wCdy74dWuO/LfcoucrdVeta+G1AEacjlVEce867srl3w6tcd+W+6gCdFzlbqr1rXw2xpyOVURx7zrusAncu+HVrjvy33c0XOdE1a1r1ZgIRkbmI4d/Vndu+HMRx3v1UATouc6Jq1rXqwjI3MRw7+q4Cd274cxHHe/Uouc6Jq1rXqoAhGRuYjh39Wd274cxHHe/VQBOi5zomrWterCMjcxHDv6rgJ3bvhzEcd79Si5zomrWteqgCEZG5iOHf1Z3bvhzEcd79VAE6LnOiata16sIyNzEcO/quAndu+HMRx3v1c27nOmata16swEIyNzEcPzZ3bvhzEcd79VAE7dznTM61r1YRkbmI4fmuAndu+HMRx3v1LdznTM61r1UAQjI3MRw/Nndu+HMRx3v1UATt3OdMzrWvVhGRuYjh+a4Cd274cxHHe/Ut3OdMzrWvVQBCMjcxHD82d274cxHHe/VQBO3c50zOta9WEZG5iOH5rgJ3bvhzEcd79XNu5ziZ1rXqzAQ94/g/Nndu+Hry3v1UATt3OcTOta9WHvH8H5rgJ3bvh68t79S3c5xM61r1UAQ94/g/Nndu+Hry3v1UATt3OcTOta9WHvH8H5rgJ3bvh68t79S3c5xM61r1UAQ94/g/Nndu+Hry3v1UATt3OcTOta9WHvH8H5rgJ3bvh68t79S3c5xM61r1UAQ94/g/NlctzXXTO/ux3VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z" />),
            category: 'common',
            attributes: {
  "contentUGG": {
    "type": "string",
    "default": "Close sidebar"
  },
  "contentRMd": {
    "type": "string",
    "default": "\n            Dashboard\n          "
  },
  "contentYoU": {
    "type": "string",
    "default": "\n            Team\n          "
  },
  "contentybj": {
    "type": "string",
    "default": "\n            Projects\n          "
  },
  "contentGYk": {
    "type": "string",
    "default": "\n            Calendar\n          "
  },
  "contentAKS": {
    "type": "string",
    "default": "\n            Documents\n          "
  },
  "contentOPO": {
    "type": "string",
    "default": "\n            Reports\n          "
  },
  "contentJSc": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentIky": {
    "type": "string",
    "default": "View profile"
  },
  "contentcJw": {
    "type": "string",
    "default": "\n            Dashboard\n          "
  },
  "contentzPa": {
    "type": "string",
    "default": "\n            Team\n          "
  },
  "contentJhu": {
    "type": "string",
    "default": "\n            Projects\n          "
  },
  "contentFlp": {
    "type": "string",
    "default": "\n            Calendar\n          "
  },
  "contentZea": {
    "type": "string",
    "default": "\n            Documents\n          "
  },
  "contentfDU": {
    "type": "string",
    "default": "\n            Reports\n          "
  },
  "contentkhT": {
    "type": "string",
    "default": "Tom Cook"
  },
  "contentwQm": {
    "type": "string",
    "default": "View profile"
  },
  "contentpxP": {
    "type": "string",
    "default": "Open sidebar"
  },
  "contentevr": {
    "type": "string",
    "default": "Dashboard"
  },
  "imageurloef": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-300-mark-white-text.svg'
  },
  "imagealtJKi": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurllOe": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtmBk": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlrTo": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'img/logos/workflow-logo-indigo-300-mark-white-text.svg'
  },
  "imagealtlPU": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": "Workflow"
  },
  "imageurltjg": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1472099645785-5658abf4ff4e.jpeg'
  },
  "imagealtAGQ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgJYn": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgfns": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgfRx": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgtEH": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgwRv": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgFth": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgKOL": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgKaU": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>"
  },
  "svgeiD": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\"/>"
  },
  "svgccz": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"/>"
  },
  "svgRIy": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"/>"
  },
  "svgCws": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>"
  },
  "svgaxQ": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"/>"
  },
  "svgOSC": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"/>"
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
            value={ attributes.svgJYn }
            onChange={ ( value ) => {
              setAttributes({ svgJYn: value });
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
            value={ attributes.svgfns }
            onChange={ ( value ) => {
              setAttributes({ svgfns: value });
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
            value={ attributes.svgfRx }
            onChange={ ( value ) => {
              setAttributes({ svgfRx: value });
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
            value={ attributes.svgtEH }
            onChange={ ( value ) => {
              setAttributes({ svgtEH: value });
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
            value={ attributes.svgwRv }
            onChange={ ( value ) => {
              setAttributes({ svgwRv: value });
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
            value={ attributes.svgFth }
            onChange={ ( value ) => {
              setAttributes({ svgFth: value });
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
            value={ attributes.svgKOL }
            onChange={ ( value ) => {
              setAttributes({ svgKOL: value });
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
            value={ attributes.svgKaU }
            onChange={ ( value ) => {
              setAttributes({ svgKaU: value });
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
            value={ attributes.svgeiD }
            onChange={ ( value ) => {
              setAttributes({ svgeiD: value });
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
            value={ attributes.svgccz }
            onChange={ ( value ) => {
              setAttributes({ svgccz: value });
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
            value={ attributes.svgRIy }
            onChange={ ( value ) => {
              setAttributes({ svgRIy: value });
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
            value={ attributes.svgCws }
            onChange={ ( value ) => {
              setAttributes({ svgCws: value });
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
            value={ attributes.svgaxQ }
            onChange={ ( value ) => {
              setAttributes({ svgaxQ: value });
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
            value={ attributes.svgOSC }
            onChange={ ( value ) => {
              setAttributes({ svgOSC: value });
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
            <div className="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span className="sr-only"><RichText tagName="span" value={attributes.contentUGG} default="Close sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentUGG: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJYn }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div className="flex-shrink-0 flex items-center px-4">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurloef: media.url,
            imagealtJKi: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurloef } 
            alt={ attributes.imagealtJKi } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <nav className="mt-5 px-2 space-y-1"> <span className="bg-indigo-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfns }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentRMd} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentRMd: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfRx }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentYoU} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentYoU: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtEH }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentybj} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentybj: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwRv }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentGYk} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentGYk: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFth }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentAKS} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentAKS: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKOL }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentOPO} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentOPO: newtext });
      }}
    /></span>

                        </nav>
                    </div>
                    <div className="flex-shrink-0 flex border-t border-indigo-800 p-4"> <span className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurllOe: media.url,
            imagealtmBk: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurllOe } 
            alt={ attributes.imagealtmBk } 
            onClick={ open } 
            className="inline-block h-10 w-10 rounded-full"
          /> 
        )} 
      />
            </div>
            <div className="ml-3">
              <p className="text-base font-medium text-white"><RichText tagName="span" value={attributes.contentJSc} default="Tom Cook" onChange={ (newtext) =>  {
        setAttributes({ contentJSc: newtext });
      }}
    /></p>
              <p className="text-sm font-medium text-indigo-200 group-hover:text-white"><RichText tagName="span" value={attributes.contentIky} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentIky: newtext });
      }}
    /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
                <div className="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div className="flex-1 flex flex-col min-h-0 bg-indigo-700">
                    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4">
                            
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlrTo: media.url,
            imagealtlPU: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlrTo } 
            alt={ attributes.imagealtlPU } 
            onClick={ open } 
            className="h-8 w-auto"
          /> 
        )} 
      />
                        </div>
                        <nav className="mt-5 flex-1 px-2 space-y-1"> <span className="bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKaU }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentcJw} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentcJw: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeiD }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentzPa} default="Team" onChange={ (newtext) =>  {
        setAttributes({ contentzPa: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgccz }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentJhu} default="Projects" onChange={ (newtext) =>  {
        setAttributes({ contentJhu: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRIy }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentFlp} default="Calendar" onChange={ (newtext) =>  {
        setAttributes({ contentFlp: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCws }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentZea} default="Documents" onChange={ (newtext) =>  {
        setAttributes({ contentZea: newtext });
      }}
    /></span>
 <span className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaxQ }}
        >
      </svg>
      <RichText tagName="span" value={attributes.contentfDU} default="Reports" onChange={ (newtext) =>  {
        setAttributes({ contentfDU: newtext });
      }}
    /></span>

                        </nav>
                    </div>
                    <div className="flex-shrink-0 flex border-t border-indigo-800 p-4"> <span className="flex-shrink-0 w-full group block">
          <div className="flex items-center">
            <div>
              
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurltjg: media.url,
            imagealtAGQ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurltjg } 
            alt={ attributes.imagealtAGQ } 
            onClick={ open } 
            className="inline-block h-9 w-9 rounded-full"
          /> 
        )} 
      />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white"><RichText tagName="span" value={attributes.contentkhT} default="Tom Cook" onChange={ (newtext) =>  {
        setAttributes({ contentkhT: newtext });
      }}
    /></p>
              <p className="text-xs font-medium text-indigo-200 group-hover:text-white"><RichText tagName="span" value={attributes.contentwQm} default="View profile" onChange={ (newtext) =>  {
        setAttributes({ contentwQm: newtext });
      }}
    /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
            </div>
            <div className="md:pl-64 flex flex-col flex-1">
                <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                    <button type="button" className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentpxP} default="Open sidebar" onChange={ (newtext) =>  {
        setAttributes({ contentpxP: newtext });
      }}
    /></span>

                        
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOSC }}
        >
      </svg>
      
                    </button>
                </div>
                <main className="flex-1">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                             <h1 className="text-2xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentevr} default="Dashboard" onChange={ (newtext) =>  {
        setAttributes({ contentevr: newtext });
      }}
    /></h1>

                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <div className="py-4">
                                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"/>
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
        <div>
            <div class="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"/>
                <div class="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700">
                    <div class="absolute top-0 right-0 -mr-12 pt-2">
                        <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> <span class="sr-only"><RichText.Content value={attributes.contentUGG} /></span>

                            
      <svg
         class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJYn }}
        >
      </svg>
      
                        </button>
                    </div>
                    <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div class="flex-shrink-0 flex items-center px-4">
                            
      <img
            src={ attributes.imageurloef } 
            alt={ attributes.imagealtJKi } 
            class="h-8 w-auto"
          />
                        </div>
                        <nav class="mt-5 px-2 space-y-1"> <span class="bg-indigo-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfns }}
        >
      </svg>
      <RichText.Content value={attributes.contentRMd} /></span>
 <span class="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgfRx }}
        >
      </svg>
      <RichText.Content value={attributes.contentYoU} /></span>
 <span class="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgtEH }}
        >
      </svg>
      <RichText.Content value={attributes.contentybj} /></span>
 <span class="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgwRv }}
        >
      </svg>
      <RichText.Content value={attributes.contentGYk} /></span>
 <span class="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgFth }}
        >
      </svg>
      <RichText.Content value={attributes.contentAKS} /></span>
 <span class="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            
            
      <svg
         class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKOL }}
        >
      </svg>
      <RichText.Content value={attributes.contentOPO} /></span>

                        </nav>
                    </div>
                    <div class="flex-shrink-0 flex border-t border-indigo-800 p-4"> <span class="flex-shrink-0 group block">
          <div class="flex items-center">
            <div>
              
      <img
            src={ attributes.imageurllOe } 
            alt={ attributes.imagealtmBk } 
            class="inline-block h-10 w-10 rounded-full"
          />
            </div>
            <div class="ml-3">
              <p class="text-base font-medium text-white"><RichText.Content value={attributes.contentJSc} /></p>
              <p class="text-sm font-medium text-indigo-200 group-hover:text-white"><RichText.Content value={attributes.contentIky} /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
                <div class="flex-shrink-0 w-14" aria-hidden="true"/>
            </div>
            <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div class="flex-1 flex flex-col min-h-0 bg-indigo-700">
                    <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div class="flex items-center flex-shrink-0 px-4">
                            
      <img
            src={ attributes.imageurlrTo } 
            alt={ attributes.imagealtlPU } 
            class="h-8 w-auto"
          />
                        </div>
                        <nav class="mt-5 flex-1 px-2 space-y-1"> <span class="bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgKaU }}
        >
      </svg>
      <RichText.Content value={attributes.contentcJw} /></span>
 <span class="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgeiD }}
        >
      </svg>
      <RichText.Content value={attributes.contentzPa} /></span>
 <span class="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgccz }}
        >
      </svg>
      <RichText.Content value={attributes.contentJhu} /></span>
 <span class="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgRIy }}
        >
      </svg>
      <RichText.Content value={attributes.contentFlp} /></span>
 <span class="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCws }}
        >
      </svg>
      <RichText.Content value={attributes.contentZea} /></span>
 <span class="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            
            
      <svg
         class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgaxQ }}
        >
      </svg>
      <RichText.Content value={attributes.contentfDU} /></span>

                        </nav>
                    </div>
                    <div class="flex-shrink-0 flex border-t border-indigo-800 p-4"> <span class="flex-shrink-0 w-full group block">
          <div class="flex items-center">
            <div>
              
      <img
            src={ attributes.imageurltjg } 
            alt={ attributes.imagealtAGQ } 
            class="inline-block h-9 w-9 rounded-full"
          />
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-white"><RichText.Content value={attributes.contentkhT} /></p>
              <p class="text-xs font-medium text-indigo-200 group-hover:text-white"><RichText.Content value={attributes.contentwQm} /></p>
            </div>
          </div>
        </span>

                    </div>
                </div>
            </div>
            <div class="md:pl-64 flex flex-col flex-1">
                <div class="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                    <button type="button" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> <span class="sr-only"><RichText.Content value={attributes.contentpxP} /></span>

                        
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOSC }}
        >
      </svg>
      
                    </button>
                </div>
                <main class="flex-1">
                    <div class="py-6">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                             <h1 class="text-2xl font-semibold text-gray-900"><RichText.Content value={attributes.contentevr} /></h1>

                        </div>
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <div class="py-4">
                                <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"/>
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
        