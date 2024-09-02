
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-white-background-and-borders', {
            title: 'with white background and borders',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAEOBaADASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAIEBQYDAQf/xABDEAABAwIEAwUFCAECBQIHAAAAAQIDBBEFEhMhMVOSBkFRUpEUFSJhcTIzVXKBk7HRoSNCFiQ1YsElc0NEgqKy4fH/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBgQF/8QAKxEBAQEAAQIEBQQCAwAAAAAAABEBAgMhBBIVMUFRUtHwBRMUYXGhM8Hx/9oADAMBAAIRAxEAPwD9OAAAAAeS1NOkixrPFnbxbnS6fofaiogpYllqZo4Y02V8jkanqp+bUlF2erO0/aP/AIhkhZkqP9FZJ1jXdXZrbpfu8TAWWV3YLF4WSSS0ENaxtI9/HLm4fwv6qaiV+uIqKiKi3ReCg5zE8RxyB1PT4VR0iRaKOdU1kmVl7fZREVFuamTtzVJ2WkxJlLAlVBVpTyMVyuYuyrdFRf8AySLXcg5FvaTG6TH6CkxjDqeClxB2WFY3qr2Lts5b2Vd0vsnE8X9qcYrMUr6bCKbD1bRSrGsNRKrZplRVRcqXRO7vEK7QHjSSyT0kUs8DoJXtRXxOVFVi96XTiexAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABx/bLG6ykq46KjlWFuRHve3Zyqqrtfw2OX974n+I1n77v7Pv6P6fz6nDOdlZ3k/WAfk/vfE/xGs/fd/Y974n+I1n77v7OvpnP6jzP1gH5P73xP8AEaz9939j3vif4jWfvu/semc/qPM/WAfk/vfE/wARrP33f2Pe+J/iNZ++7+x6Zz+o8z9YB+T+98T/ABGs/fd/Y974n+I1n77v7HpnP6jzP1gH5P73xP8AEaz9939j3vif4jWfvu/semc/qPM/WAfk/vfE/wARrP33f2Pe+J/iNZ++7+x6Zz+o8z9YB+T+98T/ABGs/fd/Y974n+I1n77v7HpnP6jzP1gH5P73xP8AEaz9939j3vif4jWfvu/semc/qPM/WAfk/vfE/wARrP33f2ZuFdpMQoqxj56mWeFVs9krldt3ql+8zy/TOpmXNp5n6WAD81oAAAAAAABx+E9lmydocbqsZw2GWGedH0rpMr7pd19kXb/bxMzthg0tZ2Vfh2D0keZHsVkUeWNqIi3W17IdIC0cJi+A4o/tKlc/CYsXpXU7Y44pZ0YkDkREXZeO6KvBeJrl7KY4nZesovYWJUSYg2ZjGSsRqsRFS6XXZPku5+mAVI5vtNhdbX41gNRSQ6kVJUq+Z2ZEyNu3fdd+C8DS9ocFxXEKisjm7OUVW+VVSnroJkhc1O5Xoq3cqbHfAVYwMDpKigwWkpKybWnijRr33vdfr8uBngEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH5524/wCvJ/7Lf5U506Ltx/15P/Zb/KnOnpfC/wDDx/w577rZDLIx7443vbGl3q1qqjU8V8BpS6Ovpv0s2TPlXLmte1/GxuOz7XTUWLQRNV0r6a7WIl1Wy72NhhFKrMKoKesgtrYnmSORv2m5LXsvdcnPr+Td/r7UjlD1ip5popZIo1cyFEc9U/2pex1U1HDVRVLKzDoaJkFZHFFJHHkV7VfZUVe/be57TRyLSY1TNwyKljjyxxPZHkzpmsl17+5b/Mxvivln52+6xxRT2PjcrZGua5OKOSynZYnSU9PhNXItJR61G+JWoymc1EXMiKiuX7xFQyKqGGpx+vkqqeH/AJeBroVWBX57ol3Kifbtw+RM8Zm952/8+5HBg3HaWKmjrIH0senqQtc9EhWJqu3S6NXgimyxSBIPaaKnwaKWkjp0eyqRuV/BFz5+/e+3edf38nHZ7pHKg7V8VFL2lnoFoaSOKlh1WZYbrI7Ki2VE+0m6rZONj4tFQS1cM8dIySVtLNIkaUzoo5nttlRGLx4rwOf8vO1z4VY5Wnw6sqdFYIHP13ObHunxKiXUx1Y9rWuc1yNdfKqpstjt6ZiVSYGlXQxQ6ksyuhSPK1fhWy5V4cENPic739ksKRKeLIuo1z0j3ZZyIm/cq9/iOHiOXLlmT4/f7Ec8DpaCJIMHoJaXC4a+Sple2bUjzK2y2RqL/tum9zY4NhsCshjqaKla2oklTI6J0r7IqpbU4Nta3zNc/FZwzd3Pz8xI4k9Y6eaSCWZkaujhtqO8t1sn+TomR0sdDhFK6kp3e2Svjlmcz48qS22XuWy8TJr86YPjka4bFSRxSRsjdHFkzoknf49y3+ZN8T3zMz4/9wjjwAfWj9lTgAnAHknUAAAAAAAABz1V7xir3YRFNIsdY5ZY6hX/ABwxp941F43uqZfDN8j0jxWsSKOs0ofd61CQIiq5ZbZ8iPVeC793h3lg3oNQuKzewOqMkeZK72a1ltl1cl+PGx6YVV1tZPUvmbTspoppYWI1FzuVrrIqreybJwEGzBoJsSrKLEMXmnfHJS0kLHtiRqou6OsiLf5bnymx2dzqiOZaVzo6fWbIiPjjat7ZXK5Pmm6eghXQA5tvaCp9lrlRKaeWmZG9jo2vax+Z1rWXfu4/M9J8SxmF1cxWULnUcKTuVEfZ7VRVyol9l+Fd/psIldADWYvUJ7mSdGXRz4Vyq5U4vb3oqL3mPHi1S7GXUkns0LUlVjYpUc2R7bfba7g76J6iK3YMDEauojqqajomxa9Qj3Zpbq1rW2utk4rdUMBuLYhNLT0sMVM2pdLLDKrsysarERbp3qioqbfMQb4GDhdXNWUTnTNjZURyPiflvlzNcqXTvttc0TanFZKGie+aKSZ2JOjZsrUsmoi5t9022T5fqIOrBz8+O1FJTSsqmQJVMq20yOajtNczUcjrbrwXgZ2DYjJXsnbM1meB+XPG1zWvRURUVEdunG1vkINkDgq6WtoK+qnxufF6a9SroK2nfnp447plRzE2RO5boptYcQxZO1uJRPnpXUMFO2VGOVWojVRbKi8EW6bqu1hErqAcbQ9rqqWqqIJfYJlbRSVMbqbPZqt/2uV32vqh54ji/aJ/ZSLE0Wiptd0LmJFmVyNcqcb7bqqfpfvEK7YGgbjNbHU4rTVEdOslBRsnuxHWc9WuVU3XhdDBi7QY1XVdHSYdTUOrUYYytc6ZXo1qqtlTbu4CK60GqwfF3Yn2ebiSwpFLkfnjvdEc1VRf0uhjUuKYg6OgmrYqZIa9lmJFmzRuViuS9+KKiL9PmIN8Dl48XqKPA8OVk9Kjlo2yO1873vVE7kbv+qmT73xGqVXUEVM1iUcVV/rZlX4kcuXb6cRErfg8aKoSrooKlqWSaNsiJ4XS/wD5NXj9N8VNMyoq43S1UUTkjqXsblV1l2RbIRW6BoZWVtPjbKbDZGrajV16qR8ifb+t1X9dkPF/aSSRlGyJIYZp6fXesrXva3e1ky/O+/yLCukBrG4o+Ts2/FGxZJG075dN6LZHNRdu5bXQxVxiso8z8SigVjqR9SxIb3TLa7VVeP2k32EG9Bz9FjFdVSPp2NpnzOgWWJzWPRrXJb4HX48eKfPY8qrGa2swKtrqFGU8cTUa1Xpd+ZPt99ksq2T6L8hErpQYGJVdRh+CT1bkiknhjzKiIqNVfpe/+THTEK6mqXQYgylRX075onMcrWtVtrtcq/mT4vrsSK24OZj7RVVqlqey1DoYG1OaFr0bkzWem/Fbboqehl1mMVLHVK0ccMkcUsELFdeznvVL7p3Ijm+pYVuwc7Pi2LUza50kdE5tArXSK1HJqNVEWzUv8KonjcV3aKWnq6lImROipZEjdGrHrJIu11aqJZLX7+Nu4RK6IGgq8WxCF2ITxx0y0tBKjXo7Nne3K1VtvZFS5k4fNXPx3EYpponU8SsyMRiorbtum9/URW2Bp6vEa/2itShip1joWosiSquaRcuazbcNlTdbnhTvqK3tPHNqM9mbRsmjZ8SKiPzJ42vtxVOHqIN+Dne1iVaMhczXfSI5moynciPR2o2y+K96JbvVDzqqp8sWGMhnq61kiSK+OFVileibIqqlrZV2VLpdVESumBzNNU1FRQ0FLJUTMWeskilXMqSRtajnJGruObZEVf8APebPCVfHWV9EsskkVPIzTWRyuciOai5VVd1svj4iK2YNCuOzMnp4ZIWZlqHxVCpezGo9GNVPqr2f5MarxCWppnzK1GLJQVb43Mc5FRqKiNXja6pZb2+giV04NRhL3uxSra57lRKamVEVeCqj7mGtXiUFZjM1M2B8FNKj1bKrszkSJqq1vc3/ADxEV0YObq+0sjJplpmRLFToxVY9r1fLdqOXKqbJsvf3m3xOtfSUbJIGNfLLIyKJHrZMzlREv8u8QZoOafXYhR4hXyVOi6SKCBGozNkcjpHJeyrsu/j3GZi2NOw2arR0bXMgpo5W8bq5z1ZZflsncIVuQanB8UlrKmann0nrGxr2yxMc1qoqqlrO70t/k8qvFa5nt1TTRQLSUDlbI16rnksiOdZeCWRe+9xBuwaCrxfEGSYjLTRUy01BlcufNnkarEcqJvZF3NtXVkdFh01bJ9iKNX/XbZP1JBkg5XDcZkp8JxFPbY66opYkqGvV+ZFzNurdl4I5F/RUNrieLOw+eRFja+NlI+e3BVcjmoiX8Nywrag0U2JYpRzrFWMpHf8AKSztWLNxZb4Vuvz49/yMmXE52SUTWQtkWopZJlanFXNRqoifXMINoDl5cZr58Gr5YqijbNDBqWY1zZIl70Vrv8Lw+R0DZnU9Br10kaLGxXyPaio2yb8FuIMgHOYVVzz48yWoqltU0rpG0+p8MaZm5Ut5rXuvzU6J6OcxyMdlcqKiOtey+JB9Bz0OemxKRKOoqahlNA9at0srntfJZFaiIq2R3FVtZERUPlJrU7cHq/ap5ZK5yNna+RXNdmjV10auzbKndbYsHRA0McUkWN08FPV1M87LvrXvkVWIxUWyZb2RVW1kTuRRNFJFi9NFT1dTNWOl1Z1WRdNkO+ysvlTuRNr9/iIN8ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD887cf9eT/wBlv8qc6dt2xwSrq6qOto4llRGZHtbxSy7Lbv4nK+6cS/Dqv9l39HofCdXhvR45WNzuxoZpYJUlgkfHI3g5jlRU/VDLhxWqbiMFbUSyVD4XXRJHqv6fIn3TiX4dV/su/oe6cS/Dqv8AZd/R33eny99xEVlfVVirrzyvZmVzWOeqo36Ip9kxGuli0pa2ofGqWVrpXKip9Lle6cS/Dqv9l39D3TiX4dV/su/oXpf0ImxCuniWKasqJI1SysdKqov6XCV9aj43pVz5okysXUW7U8E8C/dOJfh1X+y7+h7pxL8Oq/2Xf0L0v6GPPPNUSrLUSvlkXi57lVfVT0dW1bqZKZ1VMsCf/DWRcvoenunEvw6r/Zd/Q904l+HVf7Lv6L5un88HitVULU+0rUSrPzM65uFuPEp9dWSVDah9VO6ZmzZFkXM36L3Hp7pxL8Oq/wBl39D3TiX4dV/su/onm6fzwS7Ea98jZH1tSr2KqtcsrrtVUstt9tjySonSnWnSaRIVW6x5lyqvjbge/unEvw6r/Zd/Q904l+HVf7Lv6Hm6efHB5U9bV0rXNpqqaFruKRvVqL6FQ4hWwRaUFZURsvfKyRUS/wChfunEvw6r/Zd/Q904l+HVf7Lv6G70994Md80sjGMkle5rL5Wucqo263W3hues2IV08SxT1lRJGqWVr5XKi9/C5funEvw6r/Zd/Q904l+HVf7Lv6Hm6fzwYYMz3TiX4dV/su/ozcK7OYhW1bGTU0sEKL8b5GK3b5IvEcut0+OXdI/TE4AA8u6AAAAAAAAPCSkjkroatVdqQsexqIuyo6179KGGmCU6VCP16jRSXWSmzppo+978L8d7Xtc2YA1L8BgfO5/tVU2NZ0qNFr0yaiOR1+F91ThfvM+jpI6NkjIlcqSSvlXMve5VVf03PcAYM+FU9RUzzSOky1EOlNEipleiXsq7Xul14KeK4LHJTyw1NbWVDZGIxNSRPgRFuipZES90TdbrsbQCjVe4oXJULPVVUz6hrGve9zb2a66Wslk4mTNh0Mz6x7nSItZCkMllTZqZuG3H4lMwCjFqKGKooW0j3PSNqsVFRUv8Koqfwh4OwiOSrbNJVVT42y6zYHPRWNf3Km17fK9jYgDErqBlYsT9WWGaFVWOWJURzbpZU3RUVF+aHnT4TT074HsfKr4XPdmc66vc/wC0rtuPoZ4A8KSkjpGytjVypJK+Vcy97luv6GLHg8Eb0VJp1Y2pWpYxVTK1y5rom17LmVTYgDXz4RTzLO5ZJmvmmbNna5EWN7Wo1Fbt4J334qZFHS+yscjqied73ZnPmddf0RERET6IZAA56fsjRzOmYtZXto55NWSjbKiROW917roir3Ipl1nZ6jq8Qkq3yTs1qdaeaKN6IyVioqbpa90vtZU4IbYCjn6fsnSQuRz62vmVtM6lbqyNXLG5LWT4e7/+3M2owKkqMAZg0j5vZ442RtejkR6ZLWW9rX2TuNmBRoavsrS1cuq+vxBr306U8zmSoiztTz7br9LGG/so92MwOiq6qnpafDmUsc0MqNlujl47WVLfLidUC0YNLhkGH4MmHULVbGyNzWZluqqt91X5qtzFwzA200NGtRUTyPp4kayJz0VkblbZyt2uveiXVbXNwCUaj/h+nRkTIqqqiRlOlM7I9EWRicEXbjuu6W4mRS4VT0rVbG+VUWmjpviVPssRUReHH4lM8CjEo6FtGkTY5pljigbA1jnJls3g61vtfM9Kukjq2xNkVyJFK2VMq97Vun6HuAPD2WP2/wBsu7U0tK19rXv6mEmCQsip209TUwPgYsbZY3NzK1VuqLdFRd/kbQAYz6GN+GPoHPlWN8SxOe5+Z6oqWVbr37kTYZTTvjdNmcjIHwZVXZzXWvfpQzABrY8IyRSRriNc9HRrE1XSJdjflZOPzW6j3HRJBU08aPjgqY0jfExURqWSyOTbZbW9ENkBRrsToZajAZ6GOR00j48iPlVEV31siEJgVO5JkqZ6mp1YVgRZXoqsYvFEsifLdbrshtAKNWzCvZXyVSS1FbULDoo2d7URzb3tsiIhGHYIynwSnoaiRyvje2Z7mrxejkdxVN02RPohtwWjBqMKp6iOuY98qJXIiSWVNrJbbb+yJsIjkqZJo6qqgbM5HSxxSI1r1SyX4XTZETZUNiCUYE2FU81PXQOfKja52aRUVLp8KN228Gp4nqyhZHiMtayWVHTNRr47pkcqcF4XvbbiZQA11Zg8NVPLJ7RUwpO1GzsieiNlRNt7pttttbYyI6KGKsWqZmRywthy/wC1GtVVT/8AJTJAGtxbB4sSyP1pYJmWRJInWVWo5HWXx3TbwUOwWnSOnSmmnppKdHNZLG9FcqOW7r5kVFuu+/ebICjW+5ab2JKdJJkekuuk+b/U1PNe1r93C1tjIoKGOijejXySySvzySyKiue7hvaycERDKAGtlwSkllr5HLKjq5jWyKjk+GyWu3bZeHohUmD0skUcWaRrI6V9K1Gqn2HIiL3cfhQ2AFGNTUMVNUSTxuerpI2RqiqlrMvb+VMOowGCeeqkWqq2Nq1TXjY9Ea9EREtwuiWTuW+5tQBrZsHiknfJFU1VM2VGpLHC9GtfZLJ3XRbIiXRU4GVW0cVdSrBMrkaqo5HMWzmuRboqL4oqGQANUmA07m1WvUVU7qqNscj5Hpf4VVUVLIllS/8Aj6huBQO11qamqqXTxNie6R6XRGqqoqWRLKiqbUFoxKKiWlc976upqXvREvM9FsieCIiJ+trmPU4JT1M0z1nqGRVCos8LHojJVRETfa/BERbKlzZggwZcLgljr2OdIiV6WksqfD8CM+HbwT5nrV0UVXBHBKr9Nj2Psip8WVboi/K6IZIAwq3C6atl1JsyXhfC5GrZHMda6L6XQxUwNjElkdUTVcrqZ1OiVLkVqtWy2XKieHHibcCjnsOwaf2/XrIlZG2ndBlfUumVyOttdU2aiIvz3MynwKGGSN7qysl0onQxo+RPgY62yKiIt9uPE2oLRq24HArZkqaipqXTQLTq6VyXaxe5LInqt1M2Kma2jSmmc6oYjcrlmRFV6fPay+h7gg1U2C0kUj6ygpYYqpkD2RI1jWtRy8F4ce6/gqmfFE9tEyF8z1ekaMWRF+JVta/17z2AGsw3Bm4cjWRV1XJEl7xSKxWuVeKrZqKq734n2kwWClqIpEmnkZAipBFI5FbDfjba/DbdVshsgKNXQ4KlDKr4sRrXI56yPa9WKj3LxuuW6+p8psESmq5KiLEa68surI1XMVHr4L8N7WS1r8DagtHlTwaDHN1ZZbvc68jrql1vb6J3HqAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZAAFkFkAAWQWQABZBZAAFkFkAAWQWQABZBZAAFkFkAAWQWQABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxzmtS7nIifNSdaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INaLms6kAsEa0XNZ1INa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AAAAAAAAAAAAAAAAAAAAAAAAAAAACIPuI/yp/BZEH3Ef5U/gsAAAAAAET/cSflX+CyJ/uJPyr/ADRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi5TOlBoxcpnShYAjRi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" />),
            category: 'common',
            attributes: {
  "contentnfY": {
    "type": "string",
    "default": "Plans"
  },
  "contentgsP": {
    "type": "string",
    "default": "Your team is on the "
  },
  "contentoDn": {
    "type": "string",
    "default": "Startup"
  },
  "contentyRj": {
    "type": "string",
    "default": " plan. The next payment of $80 will be due on August 4, 2022."
  },
  "contentWbl": {
    "type": "string",
    "default": "Update credit card"
  },
  "contentOEn": {
    "type": "string",
    "default": "Plan"
  },
  "contentlYh": {
    "type": "string",
    "default": "Memory"
  },
  "contentDcQ": {
    "type": "string",
    "default": "CPU"
  },
  "contentHmg": {
    "type": "string",
    "default": "Storage"
  },
  "contentHRY": {
    "type": "string",
    "default": "Price"
  },
  "contentucq": {
    "type": "string",
    "default": "Select"
  },
  "contentVek": {
    "type": "string",
    "default": "Hobby"
  },
  "contentcEF": {
    "type": "string",
    "default": "4 GB RAM / 4 CPUs"
  },
  "contentCOq": {
    "type": "string",
    "default": "128 GB SSD disk"
  },
  "contentPlw": {
    "type": "string",
    "default": "4 GB RAM"
  },
  "contentjaD": {
    "type": "string",
    "default": "4 CPUs"
  },
  "contentZhM": {
    "type": "string",
    "default": "128 GB SSD disk"
  },
  "contentIOQ": {
    "type": "string",
    "default": "$40/mo"
  },
  "contentxVA": {
    "type": "string",
    "default": "$40/month"
  },
  "contentmFT": {
    "type": "string",
    "default": "Select"
  },
  "contentdkz": {
    "type": "string",
    "default": ", Hobby"
  },
  "contentcwZ": {
    "type": "string",
    "default": "\n              Startup\n\n              "
  },
  "contentGzO": {
    "type": "string",
    "default": "(Current Plan)"
  },
  "contentpBk": {
    "type": "string",
    "default": "8 GB RAM / 6 CPUs"
  },
  "contentosn": {
    "type": "string",
    "default": "256 GB SSD disk"
  },
  "contentQQl": {
    "type": "string",
    "default": "8 GB RAM"
  },
  "contentoga": {
    "type": "string",
    "default": "6 CPUs"
  },
  "contentMqd": {
    "type": "string",
    "default": "256 GB SSD disk"
  },
  "contentrvi": {
    "type": "string",
    "default": "$80/mo"
  },
  "contentbyn": {
    "type": "string",
    "default": "$80/month"
  },
  "contentpDd": {
    "type": "string",
    "default": "Select"
  },
  "contentoXH": {
    "type": "string",
    "default": ", Startup"
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
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                     <h1 className="text-xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentnfY} default="Plans" onChange={ (newtext) =>  {
        setAttributes({ contentnfY: newtext });
      }}
    /></h1>

                    <p className="mt-2 text-sm text-gray-700">
                        <RichText tagName="span" value={attributes.contentgsP} default="Your team is on the" onChange={ (newtext) => { setAttributes({ contentgsP: newtext }); }} /><strong className="font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentoDn} default="Startup" onChange={ (newtext) =>  {
        setAttributes({ contentoDn: newtext });
      }}
    /></strong><RichText tagName="span" value={attributes.contentyRj} default="plan. The next payment of $80 will be due on August 4, 2022." onChange={ (newtext) =>  {
        setAttributes({ contentyRj: newtext });
      }}
    /></p>
    </div>
    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
      <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"><RichText tagName="span" value={attributes.contentWbl} default="Update credit card" onChange={ (newtext) =>  {
        setAttributes({ contentWbl: newtext });
      }}
    /></button>
    </div>
  </div>
  <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
    <table className="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"><RichText tagName="span" value={attributes.contentOEn} default="Plan" onChange={ (newtext) =>  {
        setAttributes({ contentOEn: newtext });
      }}
    /></th>
          <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"><RichText tagName="span" value={attributes.contentlYh} default="Memory" onChange={ (newtext) =>  {
        setAttributes({ contentlYh: newtext });
      }}
    /></th>
          <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"><RichText tagName="span" value={attributes.contentDcQ} default="CPU" onChange={ (newtext) =>  {
        setAttributes({ contentDcQ: newtext });
      }}
    /></th>
          <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"><RichText tagName="span" value={attributes.contentHmg} default="Storage" onChange={ (newtext) =>  {
        setAttributes({ contentHmg: newtext });
      }}
    /></th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentHRY} default="Price" onChange={ (newtext) =>  {
        setAttributes({ contentHRY: newtext });
      }}
    /></th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span className="sr-only"><RichText tagName="span" value={attributes.contentucq} default="Select" onChange={ (newtext) =>  {
        setAttributes({ contentucq: newtext });
      }}
    /></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="relative py-4 pl-4 sm:pl-6 pr-3 text-sm">
            <div className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentVek} default="Hobby" onChange={ (newtext) =>  {
        setAttributes({ contentVek: newtext });
      }}
    /></div>
            <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
              <span><RichText tagName="span" value={attributes.contentcEF} default="4 GB RAM / 4 CPUs" onChange={ (newtext) =>  {
        setAttributes({ contentcEF: newtext });
      }}
    /></span>
              <span className="hidden sm:inline"> · </span>
              <span><RichText tagName="span" value={attributes.contentCOq} default="128 GB SSD disk" onChange={ (newtext) =>  {
        setAttributes({ contentCOq: newtext });
      }}
    /></span>
            </div>
          </td>
          <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"><RichText tagName="span" value={attributes.contentPlw} default="4 GB RAM" onChange={ (newtext) =>  {
        setAttributes({ contentPlw: newtext });
      }}
    /></td>
          <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"><RichText tagName="span" value={attributes.contentjaD} default="4 CPUs" onChange={ (newtext) =>  {
        setAttributes({ contentjaD: newtext });
      }}
    /></td>
          <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"><RichText tagName="span" value={attributes.contentZhM} default="128 GB SSD disk" onChange={ (newtext) =>  {
        setAttributes({ contentZhM: newtext });
      }}
    /></td>
          <td className="px-3 py-3.5 text-sm text-gray-500">
            <div className="sm:hidden"><RichText tagName="span" value={attributes.contentIOQ} default="$40/mo" onChange={ (newtext) =>  {
        setAttributes({ contentIOQ: newtext });
      }}
    /></div>
            <div className="hidden sm:block"><RichText tagName="span" value={attributes.contentxVA} default="$40/month" onChange={ (newtext) =>  {
        setAttributes({ contentxVA: newtext });
      }}
    /></div>
          </td>
          <td className="relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium">
            <button type="button" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"><RichText tagName="span" value={attributes.contentmFT} default="Select" onChange={ (newtext) =>  {
        setAttributes({ contentmFT: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentdkz} default=", Hobby" onChange={ (newtext) =>  {
        setAttributes({ contentdkz: newtext });
      }}
    /></span></button>
          </td>
        </tr>

        <tr>
          <td className="relative py-4 pl-4 sm:pl-6 pr-3 text-sm border-t border-transparent">
            <div className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentcwZ} default="Startup" onChange={ (newtext) =>  {
        setAttributes({ contentcwZ: newtext });
      }}
    /><span className="text-indigo-600"><RichText tagName="span" value={attributes.contentGzO} default="(Current Plan)" onChange={ (newtext) =>  {
        setAttributes({ contentGzO: newtext });
      }}
    /></span>
            </div>
            <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
              <span><RichText tagName="span" value={attributes.contentpBk} default="8 GB RAM / 6 CPUs" onChange={ (newtext) =>  {
        setAttributes({ contentpBk: newtext });
      }}
    /></span>
              <span className="hidden sm:inline"> · </span>
              <span><RichText tagName="span" value={attributes.contentosn} default="256 GB SSD disk" onChange={ (newtext) =>  {
        setAttributes({ contentosn: newtext });
      }}
    /></span>
            </div>

            <div className="absolute right-0 left-6 -top-px h-px bg-gray-200"/>
          </td>
          <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200"><RichText tagName="span" value={attributes.contentQQl} default="8 GB RAM" onChange={ (newtext) =>  {
        setAttributes({ contentQQl: newtext });
      }}
    /></td>
          <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200"><RichText tagName="span" value={attributes.contentoga} default="6 CPUs" onChange={ (newtext) =>  {
        setAttributes({ contentoga: newtext });
      }}
    /></td>
          <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200"><RichText tagName="span" value={attributes.contentMqd} default="256 GB SSD disk" onChange={ (newtext) =>  {
        setAttributes({ contentMqd: newtext });
      }}
    /></td>
          <td className="px-3 py-3.5 text-sm text-gray-500 border-t border-gray-200">
            <div className="sm:hidden"><RichText tagName="span" value={attributes.contentrvi} default="$80/mo" onChange={ (newtext) =>  {
        setAttributes({ contentrvi: newtext });
      }}
    /></div>
            <div className="hidden sm:block"><RichText tagName="span" value={attributes.contentbyn} default="$80/month" onChange={ (newtext) =>  {
        setAttributes({ contentbyn: newtext });
      }}
    /></div>
          </td>
          <td className="relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium border-t border-transparent">
            <button type="button" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30" disabled=""><RichText tagName="span" value={attributes.contentpDd} default="Select" onChange={ (newtext) =>  {
        setAttributes({ contentpDd: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentoXH} default=", Startup" onChange={ (newtext) =>  {
        setAttributes({ contentoXH: newtext });
      }}
    /></span></button>

            <div className="absolute right-6 left-0 -top-px h-px bg-gray-200"/>
          </td>
        </tr>

        
      </tbody>
    </table>
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
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                     <h1 class="text-xl font-semibold text-gray-900"><RichText.Content value={attributes.contentnfY} /></h1>

                    <p class="mt-2 text-sm text-gray-700">
                        <RichText.Content value={attributes.contentgsP} /><strong class="font-semibold text-gray-900"><RichText.Content value={attributes.contentoDn} /></strong><RichText.Content value={attributes.contentyRj} /></p>
    </div>
    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
      <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"><RichText.Content value={attributes.contentWbl} /></button>
    </div>
  </div>
  <div class="-mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"><RichText.Content value={attributes.contentOEn} /></th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"><RichText.Content value={attributes.contentlYh} /></th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"><RichText.Content value={attributes.contentDcQ} /></th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"><RichText.Content value={attributes.contentHmg} /></th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"><RichText.Content value={attributes.contentHRY} /></th>
          <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span class="sr-only"><RichText.Content value={attributes.contentucq} /></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="relative py-4 pl-4 sm:pl-6 pr-3 text-sm">
            <div class="font-medium text-gray-900"><RichText.Content value={attributes.contentVek} /></div>
            <div class="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
              <span><RichText.Content value={attributes.contentcEF} /></span>
              <span class="hidden sm:inline"> · </span>
              <span><RichText.Content value={attributes.contentCOq} /></span>
            </div>
          </td>
          <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"><RichText.Content value={attributes.contentPlw} /></td>
          <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"><RichText.Content value={attributes.contentjaD} /></td>
          <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"><RichText.Content value={attributes.contentZhM} /></td>
          <td class="px-3 py-3.5 text-sm text-gray-500">
            <div class="sm:hidden"><RichText.Content value={attributes.contentIOQ} /></div>
            <div class="hidden sm:block"><RichText.Content value={attributes.contentxVA} /></div>
          </td>
          <td class="relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium">
            <button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"><RichText.Content value={attributes.contentmFT} /><span class="sr-only"><RichText.Content value={attributes.contentdkz} /></span></button>
          </td>
        </tr>

        <tr>
          <td class="relative py-4 pl-4 sm:pl-6 pr-3 text-sm border-t border-transparent">
            <div class="font-medium text-gray-900"><RichText.Content value={attributes.contentcwZ} /><span class="text-indigo-600"><RichText.Content value={attributes.contentGzO} /></span>
            </div>
            <div class="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
              <span><RichText.Content value={attributes.contentpBk} /></span>
              <span class="hidden sm:inline"> · </span>
              <span><RichText.Content value={attributes.contentosn} /></span>
            </div>

            <div class="absolute right-0 left-6 -top-px h-px bg-gray-200"/>
          </td>
          <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200"><RichText.Content value={attributes.contentQQl} /></td>
          <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200"><RichText.Content value={attributes.contentoga} /></td>
          <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200"><RichText.Content value={attributes.contentMqd} /></td>
          <td class="px-3 py-3.5 text-sm text-gray-500 border-t border-gray-200">
            <div class="sm:hidden"><RichText.Content value={attributes.contentrvi} /></div>
            <div class="hidden sm:block"><RichText.Content value={attributes.contentbyn} /></div>
          </td>
          <td class="relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium border-t border-transparent">
            <button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30" disabled=""><RichText.Content value={attributes.contentpDd} /><span class="sr-only"><RichText.Content value={attributes.contentoXH} /></span></button>

            <div class="absolute right-6 left-0 -top-px h-px bg-gray-200"/>
          </td>
        </tr>

        
      </tbody>
    </table>
  </div>
</div>
</div></div>
            );
            },
        });
        