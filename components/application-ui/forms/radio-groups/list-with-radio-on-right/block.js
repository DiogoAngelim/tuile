
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/list-with-radio-on-right', {
            title: 'list with radio on right',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAESBaADASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAIDBAUGAQf/xABAEAACAgECBAUCBQMCAwUJAAAAAQIDBBESBSExURNBUpGSFGEGIjJxgRUjoUKxNWLBJDNy0fAHFyVDdIKTsuH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQMEAgX/xAAfEQEBAQACAgIDAAAAAAAAAAAAESEBEhMUAvADUdH/2gAMAwEAAhEDEQA/APXW/jb8OU2yqs4i4zjJxa8Czqv/ALTq8N4lh8VxFlYFvi0uTju2SjzX2aTOL+Kf+N/hz/6x/wD6mvxGrN4l+NrOGw4pmYeIsGNs4489rb36cn5fv9ixHrQeB49mWPI4lZi8V41bZhRajHDr20USjHmrH/q7v+TPHI4jxni3BqP6lk4leVwtX3/Ty2uUtebXknrpz7CFe3Pk5RhBzk0oxWrb8keGpt48uEcZ4dhZWRl5GFmKuFrkvGdT0bSb6y08/wB9PI+4c4ZmJxXBjxfjFc1jOx4uatt9enmp+cX0a+4hXqeEcXxuMUzvw4X+DF6RssqcIz+8deqOgfm2PkZfDfw1wLGxMriMv6nLWzwtJzrjFc41p6aa6/4Nt5vF8ThfG6//AItDFrxlZjZGdHS2EtUmty69xCvfHOv4ziU8Xr4XpdZlTipONdbkoRfLWT8kYfw5hZGPhRycviOVmXZVVcpK2WsIPTX8i8uvPvojh4PDmv8A2g8Sn9fm/wBumFuni8pat/lfLnFeSCvZg8JXxPN/90z4g8y76vR/39736+Np1/bkbXg53FvxTxHCfF83Fxqsemajj2bXucfJ+S666dREr2JqPiWMuMLhbcvqXR46WnLZu29e+p4rF4pxbN4Zwjhcs+yu7JzLqLcuP63Cvs/JvXr9jYx8PMwPxzdj1Z1uZdHhEnjzyWnJPfyUn5/m569mIV7gHheB5eTRxXCq4pxDjGLnWNxtpzIb6MiWnStrlH/0v390OeFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaOfwujPysLIunZGeFb4tag0k3ppz5dD7HhdEeNz4sp2ePOhUOOq27U9ddNNdf5N0Aeeyvwjg5F+XNZefTTmtyvx6rttc5PrLTTr59v9jcw+AYmHl4eTVZe54mL9LWpSWjh3fLqdUCji3fhnBvjnKVuTF5lyvlOFm2Vc0tE4tLl/Op9w/w5jY1uRfblZeXk5FLolfkWKUow9K0SS79DsgUcaz8NYNnBsXhrneo4mjoujPbbW15qSXX+CIfhfE+kzacjLzcizNgq7b7rVKaivJctF7HcAox0VRox66YNuNcFBN9dEtDWp4ZRTxjI4nGdjuyK41yi2tqUemnLX/JugDy9v4G4dZRdjfW8RhiWy3rGjevDhLXXVLT/AH1Ozi8Kx8XimTxCudrtya4VzUmtqUVotORvgUcGf4T4dPhqwnZkrbkSyK7ozSsrm3rrFpchh/hTBxs23LsyMzJuux5Y9sr7d2+LfNt6ap8kuWnJHeBaODh/hbFxsnGuszc/KjiPdj1ZFylCt90klrp5aneAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5FuIv6xVT9RlqudM5uKyZrmnHTz+7PlPEMx8Osy7HiVwTcK97kuktusn/HRHSljwllwyW5b4QcEvLRtP/oYJcMpeDDFU7IxhZ4kJprdGW5y16adX2KjQhxjJnjzVcaLLo5EKVJKUYSUtOej5rqZLOJZlNWTCyqqd9FkE5Vxk4qMv9TXXlzNmHCaYuUpXX2TlbC6UpyWrlHp5dDJbw+Fll1sbr67LXBuVctNHHppy/wAPUYOVl35Wdi4ihfjSjZk+HJ1OWkvytrXmmunNfsZJ8cmsucYRrdVV/guG2W989HJPp/Bv18MprUG7LZzjf47nJrWUtGufLpo/If02CyJWQyMiuE5+JKqE9Iyl36a8/PmME8PycvJuvlaqY0V2zriop7m4y01fkY8jiN1MsqnZB3wnCNCeuk1Pktf2e7X9jdxseGNGcYOTU7JWPXvJ6s1bcKd/GqsqdcY148Govdq5t9OXlpq/cKwW8SyoRuyo10/SUWuuSeu96PRyXl18jJPiNscLJvUIbqsnwUuejW9R1/fRmSzhNM7ZydtyqnZ4k6VJbJS7vlr1Xcm3g9Nllj8fIjXZYrZVRktu5NPXpr5DEVg5OXk5ORvVMceq2Va0T3Sa8+xqytz48V4h9J4TjXGuTVrfP8r5LTp+508bGhjeLscn4tkrHr3ZrZHCq7si69ZORVK+KjYq5JKSS006BWnmcasrpruoljRjKhXeHZulOWq105dP3Z9WbOu7iF8Z1xW2lx8aTUY6x/8AXJdTZu4NRZvVdt9MLKlVOFcklKKWi6p+TKnwmian/ctjKTrakmtYuC5NchiNKHGMmdTjXGiy5ZMKVJKUYNSWuuj5oy/1LLgp4866ZZayI0xcdVD80dyb8+mvIz18JphPfK6+ybujc5TktXKK0Xl0Lu4ZRdK6cp2RnbONm6L0cJRWia5dhg18riGZhY8VkwoV07fDhOO5wa013adfLTQz8LzZ5tFjmo765uG6KajLlqmk+fmHwuuVOyd+RKzxFYrnNb1LTTly0005aaGxi4/09bi7rbZSlucrJavX/ZL7IK5WPnZ1eLa7ZVW2zy3RVyaSe5p68+nLkb+Fk3zyL8bKjX4tO17q9dslLXTk+nRkvhVLhdDxLtttvipKS/tz111jy5c/3MuJhwxXZPxLLbbWnOyxpt6dFy0WgGr/AFG7c6NkPqPqvBS56bP1btNfT/kx1cSypRpypV0/SX3KuKWu9JvRSfl18jPXhTlxuzOsgoRjWq4JS13PX9T7cuR9hwmmFsZK251Qs8SFLktkZddemvXn1CMceI2vCpu2Q3WZXgtaPTTxHHX99EZeG5GXlOyy5UxpU5wgop7npJrV+xD4PT4yn4+QoRu8eNSktqlrr210+2puY2PDGqddbk05Sn+bvJtv/cK5MsjOpyeJ20KmVVE1OSsb1a2RbS7f/wBPmbxuePZvhPGdSUJeH+Z2NS07co9fM27uEVXXXz+oyILIa8WEZpRktEtOn2/yfL+DUXO1eNfXVa1KdUJJRbWmj6a+SGIw5PEc6qWZbCuh4+JYlJPXdJaJvTnonzIqzrFxjKwaHF3TuUv7j/LCChHX939l+50LeH0205dUpWbcp6z0a1XJLly+xNvDKLZ2T32RsnarVOLWsJJJcuXTReeoFcTypYmPGcJ0QlKajuub0X7Jc2/saGPxfIyq6qqI0vIndOve1JQ0itXLTr5rkdLMw45SrbssrnVLdCdbWqemnmmvM1o8HphVthferFa7VbuW9Sa0flpo/wBhivk8vPjKjG8KiOVa5/mbbhtjpz0689VyPjy+IO2rEjVjwyXCU5yk24bU0k0lz56/wZXwut11pX5Ctrk5Ru3Jz1fXqtNPtofHwqvbVsyMiFte7+8ppzlu5vXVaP2CIxOI23341c64Rc1arEuekoNLk+3NmJcRzbrKKseFCnbK5NzT0ioS0XRmw+E0qrHjVbfVKjdtsjJbnu/Vrqnrr1KxuGU40qHCdsnT4m3dJPXe03ry+wwaKzc++/h+yVVbnZZXbHRtOUddfPpy5HbNJ8Mq0r2W2wlXbK2M4ta6yb1XTpzNmmrwvE/uWT3zc/zvXbr5L7BWQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAByr+OVV3XwpxMvJjjvbdZTBOMH5rm1q12Wpa43gvKjVK6EKp48ciN05KMWpNpLn58hB0gYbsrGohGd+RVXGf6ZTmkpftqfb8rGxoRnkZFVUZcouc1FP3Ayg03xCpcSlhvltx1kOxtbdurX/AEC4hS75xcqlRGqNiu8WO1ptrprrp9+jA3AYqsnHuU3TfVYq3pNwmntf37E05mJkSUcfKptb15QsUunXp+4GcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcPiPGIUVq6zKljUSk41+HBSst06ta8kv4HDuMQvrd1eVLJojJRs8SCjZVr0b05Nfwb+t+Tr2jHz/AA7dWHFybuDWZ2NbgZd7syJ3UTpqc42KT10bXRp8nqX9FLN4+r+IYEdHw6MWpR3wjNzesU9NG9DvgxrZ4avBzK6uG3ZVOT4McDwXBYnjShPdzTi+a1Wi1+xuVYjwbcKzOwcrMxo4Pgwi6fElXLdro4rXTVaLX7HrQKkeL4jwzNuy6Z4eHZVj04Nbniy1atSsb8Ld308v2M/GKL8yPEbKMPI2XYNEYRdUk9d7bjpp1S8j1oFI8rxnhk1k8QrwaY0VW8OitUtlcpKb/K30128v5K4c65/iyiVPDZYK+hknGSinLSUeekX08k/M9NZXC2uVdsIzhNaSjJaprszWwuGYOA5PDxaqXNaScVza7aikbYAIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADxHG+FZeXi4v01bssw6/p7ql+padJaeaa5jgnCsvExcr6mt12Zlf09NT/U9estPJJcz2GRh0ZElO2D3xWinCThJLtqmmMfDox5OdUHvktHOcnOTXbVts+h73Pi6ff39z+uL1OPJ3aGNRLiH1N1uTkQlG6ddarscVWovRclyb8+epg4hbk0rNg8iblXgwlui9v5tZaySXR8jeu4VCdts6snIojc9bYVSSUn35rk/2PtnCsacLILfCFlCo0i1yitdNPvzOB2OfVkW4+etIZlVbom1DJsc/Eklr+Xm9OWvmbOHh2XYWPl/W5CybIxsc3NuL15tbOmnPQ2KuGwhkwvtyMjInWmoeLJaR15PRJLyMceD0pRr8fIeNGW5Y7ktnXXTprpr5agfeNySwNkrKoRnNRbsk0muumi5vp0OR/VrcfgkY4yjujc6FZ+ZqOjXNJpvTR+f+Tv5mHHLVbdllU6pboTra1T008015mKnhmPXiXY0991d8nOfiPVtvTzX7AaNd9tOB4tc7VZddCndbOU1DV6btJJd+2nQnHvyI8Fu8fOpsl4cdJTnslDdy/M1/jzOlVw+uFVlNtt2RVYknC+W5JfYxQ4Nh1YH0lMZVx3Ke+L/PuT1T1A49XFJYHC8yONCubpnFRcdyity11Ser5NdNdDboybaOG5Wa5W2XVw/+ZZJxb76OMUv4Ojj8OqpeQ52WXvJSVjtaeui08ku59xuH1426Mbr7KnHaqrJ7opdlrzFGjg3ZNSyXfnVXKPiNRm1FrR9dfKP+xo4HEFgxy1Uq72qVf/bc9reuj666vn1XU69PBsCmjIpqp2xyNVN689H5J+SLxeHQx8l5Esi+6x1+HrY0/wAuuvkkKOdwjJuvrllXzunZGp2aeJJRfLpt2pf5ZXCsnLtyPGvzapQtUZeFJJdYKX5P28zoY3DqsW5SotvhWtWqd+ta17LyJp4RgUX3XV0RUrlo+yWmjS7aijk8Ny1TnWOMqbZXVTm/ClNrdF682+vXTVL+OhfB8y7iWTG6+VsdZOUYxslGMUnyWijo/wCWdLF4VXj3U2/UZFjog4VxnJaRi/LkvsWuG1QynfTbfVulvnXCf5Jvu19/sKObw/My8jMjfPMrhCah/Zkko85TW1f835f59jDHKum7M26OUqoZDi7YXaKtKWiSh0a6at8+p2IcLw4Z8s2NMVdJddOSfPVr7vUxz4TTOyet1ypnZ4k6FJbJS117a9eemoo5uRkZFuRnXSrynVjWOO6q/Z4aSTbUekn1b1N2/wAVcUwLo5dkqrptKtco6eG3z7vVambI4VVfbbJX31wv08auEkoz8u2q1XJ6GzZi12WY83qvp23BLp0a5/wxRx4zu+hhxPx7vGeRo4b3t2+Js27enT+dTvGguFUrIVni3eGrPFVO5bFPv01689NdNTfHKgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAJ2Q9EfYbIeiPsUAOddxzh1OROmy9pwlsnNVycIS7OWmif8nRPG5+XVg25suG51lWQ7258OyKlNXTb/wBK66S66pmtxzKi8/JtjXXRmUXVKLlZN26ax5xX6VHn/P7nqJXuzFj3q9Tarshsm4f3IOOunmteq+55myqz+uS4JpLwbcpZ2vl4Wmrj/wDkS9zBXTDLzsei/dKufFstSSk1qkpPTl5EhXsgeLdahjyxrY3T4XjcTsrthDdJxr2JxT05uKkzEo40sPiUa7542Ms2pw8eE3Fx2rSM/NQf3+whXuQcb8LWQs4ZYq6VXCF8ox2WSnXLpzg3/p+37nZIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANR35GROSxFXGuLcXbYm02uuiTWunfUK/Ix5xWWq5Vyaira00k301Tb0176jhTS4dTB/rrjsmv+Zcn/nn/ACOKtPh10F+uyOyC/wCZ8l/nn/AG3otddFr3B5q7imTD6qUc23xK8mVcK3SvD2qWiUpacv31Onn8VeFc1ZRHwY7dZu2Kb184x6vT+CwdIHKs4vZXO6X0bePRcqrLfEXLpzS059T5j8Rn9dkYiTuu+oajDXTZWox1bfbV/wAsQb2bhVZtUYWysi4y3RnXNwlF/ZonBwKMCqcKFNuyW+c7JuUpy7ts+5uW8bwoV1O666W2EN23Xlq235LRHNzuI5VmIoUVOm/6iNFq8Raxb000ej6p9dOQHbBhstWNhyuub0qr3S56vkjnYPEciGFlyzdLL8evxtFotYuO5L+Gmv4IOuDkriuXKxVR4a/ElV40U7lo4fd6cn05C3jkFGp00xm50q5qdqhon0S16vqWDrA51PE55OVCrFxnOuVULXY5pbYy18tOvIw4vErZ42NXjY88m6VPiy8S1LSOui1enN9fIQdcHMy+KWY1MLfpNIuvfLxbVW1/ypPqzauvlPhssjGUpOde6GmifNcuvIg2QcDE4r9Hg5fjOd0sZp87o2fqXJbuWvNP7ovC4ndLDvzbrnPwat8qYqCjq1qkmm35eZYV3Aczh+TxGcr3lQqnCLkl4fWLSX5efXr1NLB4lLFnkrLnZY1V4zj40bNOej7KPVcunYQegBxOE8Ruzp+Nbc4JRc3TBQcdPJa6uWvsZOGZvEMvJ3zrp+nnGMlGL/NWpJtPXz8tRB1wcLHzraeLSWRKzS5T0rd0ZabVqvy/6eSfn+44fxS3iWYttzprc3sriq3rFerm3q/sv/MQrug49Ofn5HEf7NdTxvzLY3+ZpT2uWvfryInl208bi7pzjXZb4MYO6LT1XJ7PLn566iDtg4EOL2Z2fOim2WPXGari4+HKUn5t6y6fsmZrM/Ps4i68OFTrrlODhN6OxxUW+fl+rkIV2QcrIty7r850ZDpjiJbIqKanLbue7Xy56ctCbsvMk+HZFdkK6Midadajq3ui29W+n8CDrg4+bn5Lza44s1GirIrqtlonvlJrWK7aLr+5izuIWVW5rlnLHsx9PBo2x/urTVPmtXq9Vy6CDugx41vj4tV2mniQU9O2q1MhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvbiRna7a7LKbHycq2vzfummn7CrEjC1W2WWXWLkpWNfl/ZJJL2NgAcmXCslwyaVnqNGTZOc4qn8yUuqT1/6EZXAfGlcoXwhXc4t7qVKa0SSSlr05HZBaOfZwzxMXMo8bT6m3xNdv6f08uvP9JL4SlkzyqrlDIld4ins/0tJOD581yOkCUaubiSyHVZVb4V1Mt0J7dy5rRprs0zBHhcnWvEyN9ryI5E57NNzjpokteS0SXmdEAa2fifW46olPbW5xc1pruinrp/OhrXcHocpvFVeMrKJ0zUK1pJSXJ8tOaOkANSOFty4X+J+mjwdu3rzT1/waf9FlCNPg5FanClUydlCmpJdGlryfNnXAo1MXC+nyJWqzduqhXptS/Trz5cuevY1quFXY0KPpctV210+DKUqtyktdU9NeTWr8zqAUcjJ4LO+bl9VFudKqnK2pTl5809eTeptX8PV3CY4Hi6bYQjv26/p06rty6G6BRzcThUaZZTyJVWrJjGMoRqUIpLVclr9ysXhsseEqJZCtxXBw8OVa106aOS68joAUcqjgdFNeTHxrpyujKEZSk264yXRey5/Y+4PCHjZKuttqmlS6dkKFBNap6vm9XyOoC0c/D4bPCtSoyf8Asyb/ALUq02k/Ld101JxeC42NmyyITscVzrrcntrejXL3f7HSBKOPh8EeNkY83fXKGO5bUqVGUk01+Z683zM9fDJY+VK3EyPCrnPfOp1qS189H1Wp0QWjmvguM+I/V7rNuu507nsctdd2n789O5hXA2siE/qK9kMjx1/ZW9vXXRy159TsAUc63hjWXPJwr1jzs03p1qcW10enkz5lcFx8nNjkTnZFPXxK4yajY+XX2/k6QJRzsrhttt18sfK8GGTFRujs3N6LTVPXk9ORnvwo2QxYQlsjjWRmlprqkmtP8m0AOXk8Bw7mnBTrfiqyWk5NS56taa8te5eXw6++dkY5e2ixbXF17pRWmjUZa8tV+50QWj5CEa4RhBaRitEuyPoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgTsXeXyY2LvL5MCgY6r6b3NU3V2OuThPZJPbJdU9Oj+wqvpuc1TbXY65OE1GSe2XZ9mBkAPjlGLSlJJt6LV9QPoAAAAAAY8e+rJpV1FkbK22lKPR6PR/wCUBkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrTyrJWyrxaVa4PSUpT2wi+2uj1f7IQyrI2xryqVU5vSMoz3Qk+2ui0f7oDydGZLg2dxLNSlOvKybqlDr/AHovWC/nVr+BhqXC8DMxLL8jx7M+FblTNQlObrjKX5n+lN68z17xMZrR49WnieLpsX6/V+/3PluFiXQshbi0zjbLdNSrTUn3fd8i1I8nj5effwy6mOY4yq4h4SjPLSnZDbrsVvfX+fI+WSrzK+Fzsys2Crzp0TdlyUoPbLluXJ9lI9W+HYLolR9Fj+DJpyr8KO1tck9NPsfZYGHLFWLLEoePHmqnWtq/joKR5WzO4lZn5d0b3XKjN8KEZ5UYV7E0tHB9dV59exmtuza8LjfEYZmTKzGyLK6q92sIR5c9PPTVv+D0s8LEnkxyZ4tEr49LXWnJfz1MkKaoKahVCKsk5TSilub6t92KR5zIvo4diZUq+N5WRF0xe1TjZOLlJJSjJ8lrr0/k50s7OrxeL48Mm+t0vGdcpZCunW5TSf5l/t/5nrq+H4NVVlVWHjwrt/7yEaopT/dacz5Dh2BXW668LGjCWicVVFJ6PVa8vJ8xSOJkVuri9fDr+LZdGPXjO6NkrtJWTcnrrJ9Ul5fc2vwc934ZxZbt2srHu001/uS5nVyMTFytn1WPTdsesfEgpbX9tS6aaqK1XRXCuC1ajCKSWr1fJfcUWACKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANThX/DaPVt/P/4/9X+dRxX/AIbf6tv5P/H/AKf86FTxbI2ysxblU5vWUZQ3Qk++mq0f7MQxbJWxsyrla4PWMYw2wi++mr1f7sDWjkZ+VK+eJ9PCqqyVcVZFt2OPJ801otf3Ml/EljQi78XI1VanbsipRrXnq/Pz6GJY3EMWeRDCePKq6bsi7W065PryS5rXn5Gtn8JzMmU07Kr99KgpWylHZLR6tRitOf8AgqNy7jFFd1tcaci3woqU5Vw1UYtap9TDm8VePHIupTvhCmFkYqOi0k3z116cuxgqx8+GZm14yp0lXXBys1STUNNVoufnyM1nB7HjZFELI7Z4tdEG+usdeb+3NDBs38SjRCMp4mU/yb5qME9i+710/halYuU787IrTTqhXXODS67t3/kjR4hw3NzZOVix5b6dm2Vs9tUuerSS59fPsbfDsGzEtnKyUGnRVWtrfWCaf+4Hx5GZk5V9eG6K66JKDnZFy3S0TaSTWi5oivi6VNavosd8rZ0uupbvzx66a6cip4+bj5d9uF4E672pShbJx2y001Wieq0SJx+GW1WYlkrITnXbZbdLpulNNcl+7AyLi1Dx4WRrulOc3WqVH8+5dVpr5adzZxMmvLp8WvctG4yjJaOLXVNHKyODWWTdulNk45FlsYTlJRlGSS0bXR8jf4diSxcSVbjVVOcpSaq1aTf3fVjFamHxC55045LtjVbGUqozo2/pf+nzfLuv2PuJxS3PydMaMIUqbSdlU25pdWnyS/kwYfBsiGZj3ZCoaqjONklZOUrdy01evT9jLjcJngZrniQxpUynu/Omp1p9Umuq7DEXRxa6/O2VYkpYz5KxSW79Tju07ar/AKnz6++PF1GbsjjSsdUd1OkXLTyl11118tBVwiyniPi15dkcVc1VHk9dzlpr6dX0MD4PlTza7bHTLZk+N4srJOco66qOnRaL/YYM0OLWZeXOnCUYwhLZvtqm90vNcktP5ZV3Frln+DjYkrqoSlGclJbm0k3tXnpqY1weWLmyvwK8ZxlLdstTTg+8Wv8AYvI4RZZxBX0ZdlNU25WwjyerSX5X5a6LUYGdn30cQjo7I41birH4OsHu7y6+a6a/cZHF5POniYiSlXorJ2VTkk35aJf510MHEuD5WZdkaOmcbJRcJ2WS1rS0/Korl5dfuZsrg/8A255mJDHc5/8AeQuT0b9Sa6MYKzOJ5FGRXj0Y6vti4+K921atN6L78mTxLPyanVOmN0K41q21eDu0WvST15ctemrKzeF35N1WRTk/T2vb421ap6J81r582YeIcIycidkYThbXKlVwd9sta2k03ourfLmxgzZnF1DKji4y1m4b5TlXNxivLRJavX2PuZxLIxlVTCqF2TJRlPrGKTmo+fPnqY8nginOnIpjQ74VqFkbU3CfTt0f3LzeGX5ddNsbo0ZUVGMnDnBxUlLzXlpqhgz235TxVkxlVjQjBysjfW5OOnXpJGnLieXXRiPJlj4rurlOVlkG4p68o6a8no/N9zbvwLLMbHxPFc6YyTulZJuU0uen8vTX7E5mHfLPhl0Qot0qdbrubSXPXVPRgfKcnMyOHVZanj46cHKfiVyktF5rmtFpzPuPdxC/h9WTKzGplKLnLfVJrb5P9XLl1McOGXLhtWFKdeyVjleo6pbW3LbFdtdF+2pt8QxrMrHWPXKMa5ySt5tPZ5pfv0A+cLvvycGF+QoKVmrjti1rHyejb6rmbYSSSSWiXRIEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=" />),
            category: 'common',
            attributes: {
  "contentlsc": {
    "type": "string",
    "default": "Transfer funds"
  },
  "contentSzz": {
    "type": "string",
    "default": "Transfer your balance to your bank account."
  },
  "contentDlW": {
    "type": "string",
    "default": "Bank account"
  },
  "contentrQl": {
    "type": "string",
    "default": "Checking"
  },
  "contentGwM": {
    "type": "string",
    "default": "CIBC ••••6610"
  },
  "contentxpt": {
    "type": "string",
    "default": "Savings"
  },
  "contentZoR": {
    "type": "string",
    "default": "Bank of America ••••0149"
  },
  "contentTDS": {
    "type": "string",
    "default": "Mastercard"
  },
  "contentsxA": {
    "type": "string",
    "default": "Capital One ••••7877"
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
        <div>
             <h2 className="text-lg leading-6 font-medium text-gray-900"><RichText tagName="span" value={attributes.contentlsc} default="Transfer funds" onChange={ (newtext) =>  {
        setAttributes({ contentlsc: newtext });
      }}
    /></h2>

            <p className="mt-1 text-sm text-gray-500">
                <RichText tagName="span" value={attributes.contentSzz} default="Transfer your balance to your bank account." onChange={ (newtext) => { setAttributes({ contentSzz: newtext }); }} /></p>
            <fieldset className="mt-2">
                <legend className="sr-only">
                    <RichText tagName="span" value={attributes.contentDlW} default="Bank account" onChange={ (newtext) => { setAttributes({ contentDlW: newtext }); }} /></legend>
                <div className="divide-y divide-gray-200">
                    <div className="relative flex items-start py-4">
                        <div className="min-w-0 flex-1 text-sm">
                            <label for="account-checking" className="font-medium text-gray-700">
                                <RichText tagName="span" value={attributes.contentrQl} default="Checking" onChange={ (newtext) => { setAttributes({ contentrQl: newtext }); }} /></label>
                            <p id="account-checking-description" className="text-gray-500">
                                <RichText tagName="span" value={attributes.contentGwM} default="CIBC ••••6610" onChange={ (newtext) => { setAttributes({ contentGwM: newtext }); }} /></p>
                        </div>
                        <div className="ml-3 flex items-center h-5">
                            <input id="account-checking" aria-describedby="account-checking-description" name="account" type="radio" checked="" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        </div>
                    </div>
                    <div className="relative flex items-start py-4">
                        <div className="min-w-0 flex-1 text-sm">
                            <label for="account-savings" className="font-medium text-gray-700">
                                <RichText tagName="span" value={attributes.contentxpt} default="Savings" onChange={ (newtext) => { setAttributes({ contentxpt: newtext }); }} /></label>
                            <p id="account-savings-description" className="text-gray-500">
                                <RichText tagName="span" value={attributes.contentZoR} default="Bank of America ••••0149" onChange={ (newtext) => { setAttributes({ contentZoR: newtext }); }} /></p>
                        </div>
                        <div className="ml-3 flex items-center h-5">
                            <input id="account-savings" aria-describedby="account-savings-description" name="account" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        </div>
                    </div>
                    <div className="relative flex items-start py-4">
                        <div className="min-w-0 flex-1 text-sm">
                            <label for="account-mastercard" className="font-medium text-gray-700">
                                <RichText tagName="span" value={attributes.contentTDS} default="Mastercard" onChange={ (newtext) => { setAttributes({ contentTDS: newtext }); }} /></label>
                            <p id="account-mastercard-description" className="text-gray-500">
                                <RichText tagName="span" value={attributes.contentsxA} default="Capital One ••••7877" onChange={ (newtext) => { setAttributes({ contentsxA: newtext }); }} /></p>
                        </div>
                        <div className="ml-3 flex items-center h-5">
                            <input id="account-mastercard" aria-describedby="account-mastercard-description" name="account" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        </div>
                    </div>
                </div>
            </fieldset>
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
             <h2 class="text-lg leading-6 font-medium text-gray-900"><RichText.Content value={attributes.contentlsc} /></h2>

            <p class="mt-1 text-sm text-gray-500">
                <RichText.Content value={attributes.contentSzz} /></p>
            <fieldset class="mt-2">
                <legend class="sr-only">
                    <RichText.Content value={attributes.contentDlW} /></legend>
                <div class="divide-y divide-gray-200">
                    <div class="relative flex items-start py-4">
                        <div class="min-w-0 flex-1 text-sm">
                            <label for="account-checking" class="font-medium text-gray-700">
                                <RichText.Content value={attributes.contentrQl} /></label>
                            <p id="account-checking-description" class="text-gray-500">
                                <RichText.Content value={attributes.contentGwM} /></p>
                        </div>
                        <div class="ml-3 flex items-center h-5">
                            <input id="account-checking" aria-describedby="account-checking-description" name="account" type="radio" checked="" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        </div>
                    </div>
                    <div class="relative flex items-start py-4">
                        <div class="min-w-0 flex-1 text-sm">
                            <label for="account-savings" class="font-medium text-gray-700">
                                <RichText.Content value={attributes.contentxpt} /></label>
                            <p id="account-savings-description" class="text-gray-500">
                                <RichText.Content value={attributes.contentZoR} /></p>
                        </div>
                        <div class="ml-3 flex items-center h-5">
                            <input id="account-savings" aria-describedby="account-savings-description" name="account" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        </div>
                    </div>
                    <div class="relative flex items-start py-4">
                        <div class="min-w-0 flex-1 text-sm">
                            <label for="account-mastercard" class="font-medium text-gray-700">
                                <RichText.Content value={attributes.contentTDS} /></label>
                            <p id="account-mastercard-description" class="text-gray-500">
                                <RichText.Content value={attributes.contentsxA} /></p>
                        </div>
                        <div class="ml-3 flex items-center h-5">
                            <input id="account-mastercard" aria-describedby="account-mastercard-description" name="account" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</div>
            );
            },
        });
        