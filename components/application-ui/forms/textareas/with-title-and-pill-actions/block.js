
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-title-and-pill-actions', {
            title: 'with title and pill actions',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAC7BaADASIAAhEBAxEB/8QAGwABAQEAAwEBAAAAAAAAAAAAAAIFAQMEBgf/xAA8EAABAwICCAMHBAICAAcAAAAAAQIDBBETUwUSFCFSkZKhMUHhBjNRYXFysSIygcEjQhU0JDVDc3SC0f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAGhEBAQEBAQEBAAAAAAAAAAAAABEBAhIDIf/aAAwDAQACEQMRAD8A/SmtSRqPel0XeiL4WOcGLKZ0oIPcR/an4LAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0oMGLKZ0oWAIwYspnSgwYspnShYAjBiymdKDBiymdKFgCMGLKZ0ocOakTVexLIm9UTwsdhE/uJPtX8AYmkK3S9BAyZjaF0DnNYxFR+tv8L77Hokm0lDHDttTRwOfUMY3CY5yPRb3bv8FU6faH/yan/92M7faH9mjv8A50f9lRxDp6nqKyqpWORHRp/hdZf8io1VXy3WsdlFpaNuhaes0jMxiyIt1t4rdfBEPGyaODTuloJVVslTGxYksv6kRi3MxiSRUuh6p06wQsje3FSPXRjlVfL5lg+tpKunrIcWllbIy9rp5Kdxi+zzWOmraiOokqGyvbeRYUja5UvdU+Pz3IbRnVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAif3En2r+CyJ/cSfav4AQe4j+1PwWZiaTSGmqdaFVfStYiNR3vNZE1fLddVsWmlY1ZSv1LMmhdM91/dtaiKvlv3rYsGgDwJpSCSSNYZGuhVr1VdV111URf0pbem//APDiDTFJLQx1b3Oja9dVGq1VW/jZEtv/AIJBoA64J4qiFs0L0fG5Lo5DpptI0dXKsVPMj3ol7aqpdPil03p9APUDz1VdS0bmtqJdVXXVERqqtvju8vmeaDS9OtBDU1L0jWZXI1rUVyrZVTcib/IDRB5JdJ0UMccj50VsjdZqtarrp8dyeAn0nRU+pizomu3XTVRXfp+O7wT5gesHjl0nSskWFJmrNq6zW2VUsqXRbonh8yP+WpIoodomakkkTZbMa5yKi+abr23KIPeDxf8AKU22w0zVc5Zma7Xtaqt8rb/5JZpSnZSQy1MrEdLeyRo517L5Ja/YD3g8kuk6KFsbnzpaVquZqtV2snysnzPRDNHUQsmhej43pdrk80AsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAif3En2r+CyJ/cSfav4Ay5qGabSNFNGn+BWNWfenizez6717HU3RlS1uk0ViKjoXxUqIqb0drOVPlvVE/g2YPcR/an4LLR4NmlSsoHoz9EML2vW6fpVUbb8KZrdH1qUtBrQzNfR68bmxSta5yKifqRb2tu8Fsp9CBR4dH08kGj3sRixyvV70bI/XVFX4qeDR9JX/8hSzVMc6Ycb2yOkla5NZUT9qJ4JuN0CjOqWVMOlNrgptoa+HCVEejVaqKq+fkt+xnQ6NrIIKJ6xS60cb43xwSo1zbuuioq7lT+fgfRAUYDqCohpqdIKSdsrI3Ij4qhus1VdfVdeyOQ9DYq+lmdMtK2qfNAxj9V7Wo17UW/j/qt/Lka4FGZFSTtmrXOiY3FgjYzVVLXRrkVE+Cb0PHT7TSaQga2kWaRmj4mPaj2orVuvmu610N841U1taya1rX8xRkUdFU0clAqxYiMifHLquRNTWcjvPxRPDcddHSVlDs86UqzOSF0T42vaitXX1kXetjcAoydH0E9PPSOlY2zIpdaypZrnPRyInfkd2jY6ilp4ad9PuV0qudrp+j9Sq3d53Rf4NACjzxTVLsDEpFj10VZP8AIi4ap4J87/I9ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJ/cSfav4LIn9xJ9q/gBB7iP7U/BZEHuI/tT8FgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIn9xJ9q/gsif3En2r+AEHuI/tT8FkQe4j+1PwWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACVX4AUCABYIAFggAWCABYIAFgg5RfiBQAAAlV+BwBYIAFggAWCABYJRVQpFuAAOFWwHIIuALBAAsEACwQALBAAsEFIvxA5In9xJ9q/gsif3En2r+AEHuI/tT8FkQe4j+1PwWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcOOuR6MYrl8EQ7HHRUsV8Dkb4+JR0NmnlRz2aqI3yO2mnxUVFSzk7nTBA10ariql03o1fyKWO0z7LdrUtdPMIzNNzSyVcCMV6xNuqsRbI76/Ez66oqIf8lDrxPZZbp5/JU8zXro7Rq/wc3dc8jGtlqGx3RUXetlPHu7u16+PPh9BBJixNf8TiqqI6SmkqJb6kbbrbxX5IcUrdWKyJZL7jxaZiqKl1LS06Wa+TXkerVVqI3eiL9VtyPVx+5leXXsp6yGejbVtdqROS937tX43OUqqZYFnSoiwk/9TXTV5mI6lnjpa2jqo5pGYrZmPgjum9brZF8bKnh8zrwZJKJyy08rUZUteyWKms5y2/c6NfFDcRurVsWWnbFqSMm1rPbIlksl93x/gptXTOkw21EKvRdXVR6Xv8LfEwqeCqkkolWnwdV8/wCtsSsSyssjlT/W6nTTta2TREaUOFJHJZ0v6bP3Leyou9PP5CD6NlVTPkSNlRE563s1Hoqr/B3HzsNC5lFRSJSubOldrPXU/Ujddd6+drWPoiCk8A4N8A4iumokWOJXJ43tf4HjWqla/c/Wai/C1z2zR4satvb4GY9jmOVrksqFxGnFI2Vms3+U+BZ5aOFzP8jlVLpuQ9QHRSVTKuJZI0ciI9zP1J5otim1MDplhbPGsqeLEemsn8GXompdTMdTS0lWjnTvs7Bdq2V25b/A8FPFVP0hSSOpXxObO5ZGsptVrEW/+/i6/IsG5Q6Rp6yJjmvYyR97RK5Nbcqp4fwejaIMfAxo8Xx1NZNbkfM0lO5aWlp26Pmjqm1OIszorIjUcq31vpusUlFPtr2StqMRavEa5lOipa90XX8kt5CD6Ckqm1STK1qtwpXRLfzVPM9KeJnaIjfG2sxGObrVcjm6yWuiruX6GgniQWQpZBFeaSoekurGxV1V328yX1MqWXBc1E8b+fY6J3ObUPVrlTf5KQskipZXuVPmppGmxyPYjk80PPW1rKPCR0UsrpXarWxoire1/NUO6n/67PoeDS+uyehmbDLK2KZXOSNiuVE1VTwQg74NJU8qyNfrU74kRXsmTVVEXz+Fj1YjMTD1269tbVvvt8bfAwK2Cp0jttUymlibs2DGyRLOeutrKtjipSp0jVVD6emqItahWNFkYrbu1kVW7/kWDehnhn1sCaOTVWy6jkW3ImoqoKdP8srGuVFVrXORFd9DI0LTubX4urUNRsGoqPp0ib4+HzU40hDq6QrXT0MtSk8LWwObHrI1URbpf/XfvJBqRaQp30sE8sscKTNRzWyPRFOVr6VK5KNZWpOrdbVv2+vyPnZ4anZIYlpHouxIxHJTYjldv/Sqr+09tLTyRV1DLJTvu6hbEr8O+pJu/d8CwbTKiB8romTRukb+5iORVT6odh8xomjmjqaRsrKhssDnK/8A8OiNTxvd/wDtf+T6cmik8CZ/cSfav4Kb4Ez+4k+1fwRSD3Ef2p+CyIPcR/an4LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxrN4k5gcg41m8ScxrN4k5gcg41m8ScxrN4k5gcg41m8ScxrN4k5gcg41m8ScxrN4k5gcg41m8ScxrN4k5gcql0IOVexPFzeZwska/7t5gdboInuu5iKpaIjUs1ERPkNePMbzGvHmN5lHXPTxztVHp4+Z5o9GRMla9VVVat0REse3XjzG8xrx5jeZjeOd261nXWZMcolksgONePMbzGvHmN5mmXIONePMbzGvHmN5gcnlg0dRU86zQ00bJOJG+H0+B6dePMbzGvHmN5lHIONePMbzKR8fk9vMgpNwVLoca7eJOZxix8beYHBLo2PVFc1FVPApZI1/3bzONePMbzA5Bxrx5jeY148xvMDkHGvHmN5jXjzG8wOQca8eY3mNePMbzA5KanmSj4+NvM5R7F8HJzAolUOdZvEnMazeJOYHS+CJ7tZzLqvzJ2WHg7qd92cSczi7eJCjhqI1qIiWRDkXbxILt4kIAF28SC7eJAAF28SC7eJAAF28SC7eJAARLi7eJOZSK3wRUA5In9xJ9q/gsif3En2r+AJhV2BHZrf2p5/L6F3fwt5+hxB7iP7U/BYE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoATd/C3n6C7+FvP0KAE3fwt5+gu/hbz9CgBN38LefoLv4W8/QoAQiq56o5ERE+C+JZDP3v/gsAAAAAAAAAAABw5dVqqckS/sUCkS3j4/E5AAAAAAAAAAAAAAAAAAn9zlv4IUSzxf9f6QoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABURfEACEVyOVqIionhdSZldgSXa39q+fy+hae9X6J/ZxP7iT7V/ACD3Ef2p+CyIPcR/an4LAAwoI4qtIH1KyOnqlfqPR1sPV+CHtoa5XwUbZUVz50emt9pYNAAz9L18lFTrszGyTq1z0a7wRrUu5V/H1VCDQB4JtIuZpCCmippJWyMV7nttubuS/j89510ulnTU0k7qOoREkVkaNajlfvVPj8lvfd8xBpg8CaWp1ha9I5lkdIsaQ6v69ZPFLeH83sdM+lv+rgRSq6SVzXxqz9aI1FulvrbeINUHRR1UdZTpNEjmoqqitellaqLZUVDph0lFLUsgWGeNZNbDdIzVR9vG3nzRAPaDO0nWzw1NPS0sTlkmuuvqI5GtTx3XTf4czpTSbkdA9ZUwZHyvc5WW1Y2XT4r523lg1weOk0jHVTYWFNE9Wa7UlZbWb8U7cz2EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQz97yyGfveWBE00UDNeZ7WN+KqdUFdS1L9SGZrnfDwU+f0zK+XSjmuS6R2a1vxI0k9m0RyQUr6azUWzm6t1+KGolfVg6aOV01JFK79zmIq/U7jKgPlKCsqXexGl6h9TKs0S1mpIr11m6qv1bL4payW+BEOmNNufSUGj46SR6aJhq3y1TnqrnLdFTd4qtvH6+IH1wPjK/2wqGaMpK2mfo6HFotqdFO575HL5ta1vgm5f1LyLr/ayrjfRvhZR0lPU0kdQySt10ZI5+/UR7dzVRLb1+PgB9gRL+w+YrvaStp9PLRKlDTQosaR7Ur27SjkRXKyRP0pa9rLe6p5HU3TElNWVlPTUzFmqNMJTIrnuVtsNrnOW6rvsi7ksngB9eAYenp5odLaCZFNIxktW5sjWuVEemG5bL8UuBuA+U05pWq0b7Q18sMiuZTaFWdsL3Lhq9JF3ql/GyWudNdpnSuxaQo9JRU0Tp9EzVcD6Zzrss2ytVV801kW6WA+xB8TpD2nq9EaOplil0e5IqKKV8Urnumlu1L/t/b9VuUlfpl3tFpqXRLaZ8bKammVtS91k/Q5dVqJ4Ku/f8gPtAfF1ntrI91KygZTxOloW1jtobI++t4MTUTx3eK8jxaa0rNWx11ZEs1Okvs+2ZI9ZUVjlkdf8AnyuB+gg+L0n7Y1FHX1dPSx072UDY8RkjZFknVURVRqtSzbJ8fMvTemtKVlHpxNGQ07aOiplbI+RzmyuV0esqttuTVRU8fFUA+xB49DOV2hKBzlVXLTRqqr4r+lD2AAABLPF/1/pCiWeL/r/SFAAfmtFp3SVL7HVMekauVz6ulmloatXrr6zVdrRq699ZLXRfh9D6CfTmllWsbo2Clkj0XTxvqFqHO1pXKzXVG28N3mt94H1QMfSOnW03summoIVkxIo3xRqtrrIqI1FX6uS587W6U03o3T1VPpBtK6Wm0NJMxsLn4T1SRvi1d903pcD7oHz+kvaF+jqtEliY6BujZKx9r6yuarbNTystzzezntPU6T0jHS1LKdzZ6fHY+nZI1I13fodrpvWy+KfDwA+pB89pHSulH6XqqDREFK5tHTtlndO5yK5XXs1tvBbNXet/oYdN7RVejfZXRSx1NAj1olmetU575JLeSNbv/wDsoH3oPkaPS+ldIe0Wi3wyQRUVXo7aXQORVVN7b7/jv3L4W8jq0R7Zz6RrqNyRQLSVszomMY2TFiTfZzlVNVUW29E8L+YH2YAAAAAAAAAAAAAAAAAAlPer9qf2cT+4k+1fwcp71ftT+zif3En2r+AEHuI/tT8FkQe4j+1PwWBhSxtpkbBNJJTrA5ywzoxXIrXeKfU9FBDrzU7o2PbT0zXajnpZXq7xW3wNUFqBmSaJSqkqJqxyrJJdjMORzUazyTda/wAV+ppgis2koqmCqglkdE5G0rYXqirdHJ5pu3ov8HmTRlalDSU6rA9sKuSSPEc1st/BVVEve993gbYLRi02i6ukjppIdnWeJ0ivYqqjFR6+S2ulrJ5Hsgpqpa2Koq3xOVkLmWYipZznIq2+VkRD3AUeKkpJoNFLTrK1tQ5Hqsjd6I5yqt+anj0doqeCvjqahsCYcStux7nue5bfqVVT4XNkCjxy00ztI7S1zLMp1jjRV/2Vbqq/Lch4V0LI+mSB0jERtGkDVS6/rVbuX6XRDaAozdG6PdTzumlp6WJ2rqpgq5y/Pev8brGkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDP3vLIZ+95YHgqqN6VaVtKjFlRLOa/wd87+SnXUQVmkGJFPDHTxot1XW1nL9PgaYLRwxrWMaxiWa1LInwQ5AIPn6n2SpKiSpRtdXw0tXIslRSRSokcjl/d5XS/nZUNJmiqZmk3V7Fe2RaVtLqIqaqMRVVLJa99/xPcAPm09jaFkLIoK2vhYlMlLIkcjUxo0vZHfp8d6+FjuqPZanmpI6RNIaQipm0zKZ8TJW6srGpZLorVstvFW2N4AYdZ7MUtY9WyVlclI7U16NJUWJ2pa25UVU8EvZUudekdARpHI+mjSaSXSDKx6SyK1WORERVYrU3LZPO/mfQES/sAs8Ol9FU+lqZkM75Y3RSJLFLC7VfG9PByL/K8z3ADCZ7L0uzV7KmrrKqaviwZaiV6K9Gb9zbJZE3qvgeis0DSVr9aWSZF2OSi/S5P2PtdfDx3fT5GqAPnan2PoqhJmtra+GOogZBOyKRqJKjG6rVX9Pjb4WRfgVU+ydLPUzzx1+kKd88TIZUhla1HMalrft8/j4/Cx9AAMWo9mqV7oH0dTV0D4YEpkdSyIiuiTwat0Xw8l8d/iKr2ZoapsrZJqr/LRJROXERV1Ecrr3VFVXXXxU2gBi1Xs5BPWS1EVdX0uOjUnZTyoxsuqlkVd10W267VTcRpH2Vo6+eqk2uup21jEZURwSojZbJZFW6LvtztvuboA6qWBlLSQ00auVkLGxtV3iqIlt52gAAABLPF/1/pCiWeL/r/SFAYc3sro2f2aboGbFfTM3serkxGrrKt0W1r718vAVvsvSVcsj0qq2nSeJsVQyCRGtna1LJrbl8t10tuNwAeOs0XSVuiX6MmjtSujSPVattVE8LfSyW+hlxeyVGk881XWV1bJPSOo5HVEqLeNVRfJEsqW7qfQADApPZOjhmWWoq62tVaV1IqVMiKmE627cifDx+Z6tF6Ebo2ZJP8AkK+pRkeHGyolRWsb8kREuu7xW6mqAMjSXs9T6QrlrNqrKWV8WDNs8uqkrPg7cvxXell3+J5E9j6JkcDIK2vgwqXZHLHI1Fliuq2d+n4qu9LH0QAx4fZ2lp5NGSQVFVG/R0WAxzXN/wAke79L929NyeFjii9nIKGpjfBW1yU0T3PjpMb/ABMVb+SJdU3ruVVQ2QAAAAAAAAAAAAAAAAAAAEp71ftT+zif3En2r+DlPer9qf2cT+4k+1fwAg9y1PNqWX+CzzVTljTXYtnHk2ufM7IWDUBl7XPmdkG1z5nZBBqAy9rnzOyDa58zsgg1AZe1z5nZBtc+Z2QQagMva58zsg2ufM7IINQGXtc+Z2QbXPmdkEGoDL2ufM7INrnzOyCDUBl7XPmdkG1z5nZBBqAy9rnzOyDa58zsgg1AZe1z5nZBtc+Z2QQagMva58zsg2ufM7IINQGXtc+Z2QbXPmdkEGoDL2ufM7INrnzOyCDUBl7XPmdkG1z5nZBBqAy9rnzOyDa58zsgg1AZe1z5nZBtc+Z2QQagMva58zsg2ufM7IINQGXtc+Z2QbXPmdkEGoDL2ufM7INrnzOyCDUBl7XPmdkG1z5nZBBqAy9rnzOyDa58zsgg1AZe1z5nZBtc+Z2QQagMva58zsg2ufM7IINQGXtc+Z2QbXPmdkEGoDL2ufM7INrnzOyCDUBl7XPmdkG1z5nZBBqAy9rnzOyDa58zsgg1AZe1z5nZBtc+Z2QQagMva58zsg2ufM7IINQGXtc+Z2QbXPmdkEGoDL2ufM7INrnzOyCDUBl7XPmdkG1z5nZBBqAy9rnzOyDa58zsgg1AZe1z5nZBtc+Z2QQagMva58zsg2ufM7IINQGXtc+Z2QbXPmdkEGoDL2ufM7INrnzOyCDUBl7XPmdkG1z5nZBBqAy9rnzOyDa58zsgg1AZe1z5nZBtc+Z2QQagMva58zsg2ufM7IINQGXtc+Z2QbXPmdkEGoDL2ufM7INrnzOyCDUBl7XPmdkG1z5nZBBqAy9rnzOyDa58zsgg1AZe1z5nZBtc+Z2QQagMva58zsg2ufM7IINQGXtc+Z2QbXPmdkEGoDL2ufM7INrnzOyCDUBl7XPmdkG1z5nZBBqAy9rnzOyDa58zsgg1AZe1z5nZBtc+Z2QQagMva58zsg2ufM7IINQGXtc+Z2QbXPmdkEGoDL2ufM7INrnzOyCDUBl7XPmdkG1z5nZBBqAy9rnzOyDa58zsgg1AZe1z5nZBtc+Z2QQagMva58zsg2ufM7IINQGXtc+Z2QbXPmdkEGoDL2ufM7INrnzOyCDUBl7XPmdkG1z5nZBBqAy9rnzOyDa58zsgg0WfveWeSgkfKkivW6oqeXyPWQAfPaflk/5WigxHJEqOcrUWyKvz+Jn6UnmoWRzUkjono9Eu1fH6p4KcuvpNjrz8vXPqvsQE8EB1cgAAAAAIl/YWRL+wCwAAAAAAAAAAAAAAAAABLPF/1/pCiWeL/r/SFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASnvV+if2cT+5cnm5LJ/J5KyeSKpsx1kViL4J8VO2lcsia71u4D/9k=" />),
            category: 'common',
            attributes: {
  "contentUPp": {
    "type": "string",
    "default": "Title"
  },
  "contentSzf": {
    "type": "string",
    "default": "Description"
  },
  "contentQis": {
    "type": "string",
    "default": " Assign "
  },
  "contentPEs": {
    "type": "string",
    "default": " Assign "
  },
  "contenthAC": {
    "type": "string",
    "default": " Unassigned "
  },
  "contentItt": {
    "type": "string",
    "default": " Wade Cooper "
  },
  "contentmhB": {
    "type": "string",
    "default": " Add a label "
  },
  "contentEWF": {
    "type": "string",
    "default": " Label "
  },
  "contentwQu": {
    "type": "string",
    "default": " Unlabelled "
  },
  "contentfxv": {
    "type": "string",
    "default": " Engineering "
  },
  "contentAnX": {
    "type": "string",
    "default": " Add a due date "
  },
  "contentDXo": {
    "type": "string",
    "default": " Due date "
  },
  "contentFAe": {
    "type": "string",
    "default": " No due date "
  },
  "contentAcC": {
    "type": "string",
    "default": " Today "
  },
  "contenthFr": {
    "type": "string",
    "default": "Attach a file"
  },
  "contentVid": {
    "type": "string",
    "default": "Create"
  },
  "imageurlQJq": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1491528323818-fdd1faba62cc.jpeg'
  },
  "imagealtPTM": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "imageurlJsC": {
    "attribute": "src",
    "type": "string",
    "selector": "img",
    "default": vars.url+'photo-1491528323818-fdd1faba62cc.jpeg'
  },
  "imagealtlFZ": {
    "attribute": "alt",
    "type": "string",
    "selector": "img",
    "default": ""
  },
  "svgESH": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z\" clip-rule=\"evenodd\"/>"
  },
  "svgcVs": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z\" clip-rule=\"evenodd\"/>"
  },
  "svgibD": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z\" clip-rule=\"evenodd\"/>"
  },
  "svgnsC": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z\" clip-rule=\"evenodd\"/>"
  },
  "svgiDF": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgESH }
            onChange={ ( value ) => {
              setAttributes({ svgESH: value });
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
            value={ attributes.svgcVs }
            onChange={ ( value ) => {
              setAttributes({ svgcVs: value });
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
            value={ attributes.svgibD }
            onChange={ ( value ) => {
              setAttributes({ svgibD: value });
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
            value={ attributes.svgnsC }
            onChange={ ( value ) => {
              setAttributes({ svgnsC: value });
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
            value={ attributes.svgiDF }
            onChange={ ( value ) => {
              setAttributes({ svgiDF: value });
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
        <form action="#" className="relative">
            <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                <label for="title" className="sr-only">
                    <RichText tagName="span" value={attributes.contentUPp} default="Title" onChange={ (newtext) => { setAttributes({ contentUPp: newtext }); }} /></label>
                <input type="text" name="title" id="title" className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0" placeholder="Title"/>
                <label for="description" className="sr-only">
                    <RichText tagName="span" value={attributes.contentSzf} default="Description" onChange={ (newtext) => { setAttributes({ contentSzf: newtext }); }} /></label>
                <textarea rows="2" name="description" id="description" className="block w-full border-0 py-0 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Write a description..."/>
                <div aria-hidden="true">
                    <div className="py-2">
                        <div className="h-9"/>
                    </div>
                    <div className="h-px"/>
                    <div className="py-2">
                        <div className="py-px">
                            <div className="h-9"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 inset-x-px">
                <div className="flex flex-nowrap justify-end py-2 px-2 space-x-2 sm:px-3">
                    <div className="flex-shrink-0">
                        <label id="listbox-label" className="sr-only">
                            <RichText tagName="span" value={attributes.contentQis} default="Assign" onChange={ (newtext) => { setAttributes({ contentQis: newtext }); }} /></label>
                        <div className="relative">
                            <button type="button" className="relative inline-flex items-center rounded-full py-2 px-2 bg-gray-50 text-sm font-medium text-gray-500 whitespace-nowrap hover:bg-gray-100 sm:px-3" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                
      <svg
         className="flex-shrink-0 h-5 w-5 text-gray-300 sm:-ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgESH }}
        >
      </svg>
      
                                
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlQJq: media.url,
            imagealtPTM: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlQJq } 
            alt={ attributes.imagealtPTM } 
            onClick={ open } 
            className="flex-shrink-0 h-5 w-5 rounded-full"
          /> 
        )} 
      /> <span className="hidden truncate sm:ml-2 sm:block"><RichText tagName="span" value={attributes.contentPEs} default="Assign" onChange={ (newtext) =>  {
        setAttributes({ contentPEs: newtext });
      }}
    /></span>

                            </button>
                            <ul className="absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-0">
                                <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-0" role="option">
                                    <div className="flex items-center">
                                        
      <svg
         className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcVs }}
        >
      </svg>
       <span className="ml-3 block font-medium truncate"><RichText tagName="span" value={attributes.contenthAC} default="Unassigned" onChange={ (newtext) =>  {
        setAttributes({ contenthAC: newtext });
      }}
    /></span>

                                    </div>
                                </li>
                                <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-1" role="option">
                                    <div className="flex items-center">
                                        
      <MediaUpload 
        onSelect={ (media) => { 
          setAttributes({ 
            imageurlJsC: media.url,
            imagealtlFZ: media.alt
          }); 
        } }
        type="image" 
        render={ ({ open }) => (
          <img
            src={ attributes.imageurlJsC } 
            alt={ attributes.imagealtlFZ } 
            onClick={ open } 
            className="flex-shrink-0 h-5 w-5 rounded-full"
          /> 
        )} 
      /> <span className="ml-3 block font-medium truncate"><RichText tagName="span" value={attributes.contentItt} default="Wade Cooper" onChange={ (newtext) =>  {
        setAttributes({ contentItt: newtext });
      }}
    /></span>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <label id="listbox-label" className="sr-only">
                            <RichText tagName="span" value={attributes.contentmhB} default="Add a label" onChange={ (newtext) => { setAttributes({ contentmhB: newtext }); }} /></label>
                        <div className="relative">
                            <button type="button" className="relative inline-flex items-center rounded-full py-2 px-2 bg-gray-50 text-sm font-medium text-gray-500 whitespace-nowrap hover:bg-gray-100 sm:px-3" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                
      <svg
         className="text-gray-300 flex-shrink-0 h-5 w-5 sm:-ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgibD }}
        >
      </svg>
       <span className="hidden truncate sm:ml-2 sm:block"><RichText tagName="span" value={attributes.contentEWF} default="Label" onChange={ (newtext) =>  {
        setAttributes({ contentEWF: newtext });
      }}
    /></span>

                            </button>
                            <ul className="absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-0">
                                <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-0" role="option">
                                    <div className="flex items-center"> <span className="block font-medium truncate"><RichText tagName="span" value={attributes.contentwQu} default="Unlabelled" onChange={ (newtext) =>  {
        setAttributes({ contentwQu: newtext });
      }}
    /></span>

                                    </div>
                                </li>
                                <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-1" role="option">
                                    <div className="flex items-center"> <span className="block font-medium truncate"><RichText tagName="span" value={attributes.contentfxv} default="Engineering" onChange={ (newtext) =>  {
        setAttributes({ contentfxv: newtext });
      }}
    /></span>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <label id="listbox-label" className="sr-only">
                            <RichText tagName="span" value={attributes.contentAnX} default="Add a due date" onChange={ (newtext) => { setAttributes({ contentAnX: newtext }); }} /></label>
                        <div className="relative">
                            <button type="button" className="relative inline-flex items-center rounded-full py-2 px-2 bg-gray-50 text-sm font-medium text-gray-500 whitespace-nowrap hover:bg-gray-100 sm:px-3" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                
      <svg
         className="text-gray-300 flex-shrink-0 h-5 w-5 sm:-ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnsC }}
        >
      </svg>
       <span className="hidden truncate sm:ml-2 sm:block"><RichText tagName="span" value={attributes.contentDXo} default="Due date" onChange={ (newtext) =>  {
        setAttributes({ contentDXo: newtext });
      }}
    /></span>

                            </button>
                            <ul className="absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-0">
                                <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-0" role="option">
                                    <div className="flex items-center"> <span className="block font-medium truncate"><RichText tagName="span" value={attributes.contentFAe} default="No due date" onChange={ (newtext) =>  {
        setAttributes({ contentFAe: newtext });
      }}
    /></span>

                                    </div>
                                </li>
                                <li className="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-1" role="option">
                                    <div className="flex items-center"> <span className="block font-medium truncate"><RichText tagName="span" value={attributes.contentAcC} default="Today" onChange={ (newtext) =>  {
        setAttributes({ contentAcC: newtext });
      }}
    /></span>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3">
                    <div className="flex">
                        <button type="button" className="-ml-2 -my-2 rounded-full px-3 py-2 inline-flex items-center text-left text-gray-400 group">
                            
      <svg
         className="-ml-1 h-5 w-5 mr-2 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiDF }}
        >
      </svg>
       <span className="text-sm text-gray-500 group-hover:text-gray-600 italic"><RichText tagName="span" value={attributes.contenthFr} default="Attach a file" onChange={ (newtext) =>  {
        setAttributes({ contenthFr: newtext });
      }}
    /></span>

                        </button>
                    </div>
                    <div className="flex-shrink-0">
                        <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <RichText tagName="span" value={attributes.contentVid} default="Create" onChange={ (newtext) => { setAttributes({ contentVid: newtext }); }} /></button>
                    </div>
                </div>
            </div>
        </form>
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
        <form action="#" class="relative">
            <div class="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                <label for="title" class="sr-only">
                    <RichText.Content value={attributes.contentUPp} /></label>
                <input type="text" name="title" id="title" class="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0" placeholder="Title"/>
                <label for="description" class="sr-only">
                    <RichText.Content value={attributes.contentSzf} /></label>
                <textarea rows="2" name="description" id="description" class="block w-full border-0 py-0 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Write a description..."/>
                <div aria-hidden="true">
                    <div class="py-2">
                        <div class="h-9"/>
                    </div>
                    <div class="h-px"/>
                    <div class="py-2">
                        <div class="py-px">
                            <div class="h-9"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 inset-x-px">
                <div class="flex flex-nowrap justify-end py-2 px-2 space-x-2 sm:px-3">
                    <div class="flex-shrink-0">
                        <label id="listbox-label" class="sr-only">
                            <RichText.Content value={attributes.contentQis} /></label>
                        <div class="relative">
                            <button type="button" class="relative inline-flex items-center rounded-full py-2 px-2 bg-gray-50 text-sm font-medium text-gray-500 whitespace-nowrap hover:bg-gray-100 sm:px-3" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                
      <svg
         class="flex-shrink-0 h-5 w-5 text-gray-300 sm:-ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgESH }}
        >
      </svg>
      
                                
      <img
            src={ attributes.imageurlQJq } 
            alt={ attributes.imagealtPTM } 
            class="flex-shrink-0 h-5 w-5 rounded-full"
          /> <span class="hidden truncate sm:ml-2 sm:block"><RichText.Content value={attributes.contentPEs} /></span>

                            </button>
                            <ul class="absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-0">
                                <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-0" role="option">
                                    <div class="flex items-center">
                                        
      <svg
         class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcVs }}
        >
      </svg>
       <span class="ml-3 block font-medium truncate"><RichText.Content value={attributes.contenthAC} /></span>

                                    </div>
                                </li>
                                <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-1" role="option">
                                    <div class="flex items-center">
                                        
      <img
            src={ attributes.imageurlJsC } 
            alt={ attributes.imagealtlFZ } 
            class="flex-shrink-0 h-5 w-5 rounded-full"
          /> <span class="ml-3 block font-medium truncate"><RichText.Content value={attributes.contentItt} /></span>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex-shrink-0">
                        <label id="listbox-label" class="sr-only">
                            <RichText.Content value={attributes.contentmhB} /></label>
                        <div class="relative">
                            <button type="button" class="relative inline-flex items-center rounded-full py-2 px-2 bg-gray-50 text-sm font-medium text-gray-500 whitespace-nowrap hover:bg-gray-100 sm:px-3" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                
      <svg
         class="text-gray-300 flex-shrink-0 h-5 w-5 sm:-ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgibD }}
        >
      </svg>
       <span class="hidden truncate sm:ml-2 sm:block"><RichText.Content value={attributes.contentEWF} /></span>

                            </button>
                            <ul class="absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-0">
                                <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-0" role="option">
                                    <div class="flex items-center"> <span class="block font-medium truncate"><RichText.Content value={attributes.contentwQu} /></span>

                                    </div>
                                </li>
                                <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-1" role="option">
                                    <div class="flex items-center"> <span class="block font-medium truncate"><RichText.Content value={attributes.contentfxv} /></span>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex-shrink-0">
                        <label id="listbox-label" class="sr-only">
                            <RichText.Content value={attributes.contentAnX} /></label>
                        <div class="relative">
                            <button type="button" class="relative inline-flex items-center rounded-full py-2 px-2 bg-gray-50 text-sm font-medium text-gray-500 whitespace-nowrap hover:bg-gray-100 sm:px-3" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                
      <svg
         class="text-gray-300 flex-shrink-0 h-5 w-5 sm:-ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgnsC }}
        >
      </svg>
       <span class="hidden truncate sm:ml-2 sm:block"><RichText.Content value={attributes.contentDXo} /></span>

                            </button>
                            <ul class="absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-0">
                                <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-0" role="option">
                                    <div class="flex items-center"> <span class="block font-medium truncate"><RichText.Content value={attributes.contentFAe} /></span>

                                    </div>
                                </li>
                                <li class="bg-white cursor-default select-none relative py-2 px-3" id="listbox-option-1" role="option">
                                    <div class="flex items-center"> <span class="block font-medium truncate"><RichText.Content value={attributes.contentAcC} /></span>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3">
                    <div class="flex">
                        <button type="button" class="-ml-2 -my-2 rounded-full px-3 py-2 inline-flex items-center text-left text-gray-400 group">
                            
      <svg
         class="-ml-1 h-5 w-5 mr-2 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgiDF }}
        >
      </svg>
       <span class="text-sm text-gray-500 group-hover:text-gray-600 italic"><RichText.Content value={attributes.contenthFr} /></span>

                        </button>
                    </div>
                    <div class="flex-shrink-0">
                        <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <RichText.Content value={attributes.contentVid} /></button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
            );
            },
        });
        