
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-dropdown-product-filters', {
            title: 'with dropdown product filters',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAE/BaADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAECBAUGAwf/xABLEAACAgECBAMHAQQHBQUGBwAAAQIDBAUREhMhMUFRkQYUIjJSYXGBBxUjoTM1QnOxssEWgpLR0lViwuHwJCU3cnSUFzZDZHWis//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAARASH/2gAMAwEAAhEDEQA/APpwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8o5WPKzlxyKnZvtwqa33/Ba26qlJ3WwrT7Ocktz5HrsP3F+0lZC+Gt5MMjfzjJpy/8SNh+1jN49RwsGL6VVu2S+8nsv8v8zUSvpsZwlBTjKLg1upJ9NilWTj3S4ab6rJbb7Rmmzg9D1jg/ZXmTc/4mLCzHT8U5fL/nXoa/9mzxdNxdT1zPsVVNUY0qb+/Vpff5SQr6iDhpftP0pXcMcHMde/zfDv6b/wCpvrfanTY+zs9colO/Gg1GUYL4020tmn2fVCatbs8lk48reVG+p2b7cCmt9/wcdZ+0vSVjRthi5Upym48t8KaSS6vr47/yZzOivf8AaxY//wB9kf8AjESvrgOWy/bnTqNYel4+NlZl6mq06FFpy8lu12I1r280rScqWI4XZGRDpONW3DCX0tt9/wAbiatdUDnPZ/200rXcr3SpW0ZLW8a7Uvj89mn1MT/8QtIhn3Yt9WTVyXNSnKMdm479Fs9+u3QTSuuBxmB+0fSMvNjj20ZGNGcuGNtmzivzs+huvaD2m072erg82U522dYVVLeTXn12SQmlbkHGYP7SdHycmNORTkYyk9lZNJxX52e69Dfa57Q6doWJDIzbW+Z/RwrXFKz8fb7iaNqDicT9pek3ZMa78bJohJ7cx7SS+72e/pudHq+v6dpGnQzsq9Oqz+iVfxOzpv8AD5/nsJo2YOIx/wBpuk2XqF2JlU1t7czZS2+7Sf8AhudpRdVk0V30WRsqsipQlF7pp+IkFwc3r/tppWhZTxLVbfkpbyhUl8Hlu2/+Z5aH7d6Tq+ZDD4Lsa+zpBWpcMn5Jp9/zsJpXUg532g9stL0HI92v5t+TtvKupJ8Hlu21sY2i+32karmQxJQuxbrHtDmpcMn4LdPv+RNK6Z5OOreU76lZvtwOa33/AAep8j1X/wCLEP8A6+j/AMB3HtB7aaXoWT7rarMjJSTlXUl8G/bdvt+BErpActoXt1pWs5ccThtxr59IK3bab8k14/k6kigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+bftZwdrMDUIx7qVM3+Osf8ZGp0OH+1/torMyO9ax97Ivr0jBQ/zNM+ie12iz17QrMKmVcb1OM65WNqKafXfZPwbNZ7DeyeT7O2Zd2dbj2W3KMYclt7Jbt77pd+noazeJOvmbzL9P03UdFmnvZkQ4/JODkn6vh9Db63jWYHsFodW20cq2zIs+7aXD//AFZvvaL9n+oalr+Vm4WRiV0XzU+GyUlJNpcXRRa77vudZrvs7i6xocNMk3UqVHkzS34GlsunitumxbiRzOBo+kz/AGYWXyx6XY8ay53OK41Yt9uvfo1tscfpFln+yXtBVu+Vtjy28E+Z/wCvQ3v+wHtLCmWDDUqPcpS3cOfNQf3cdttzf/7EPG9j8rScK6ueZlShOy63eMW4yT26JtJJP1FGs/Znoum5ulZWXm4dOTZz+UubBTUUop9E/wD5jkNWyMnF9r9StwpShesu9RcF1W8pJ7fo2fU/YnQcv2e0m7EzbKZ2TvdidUm1s4xXil16GnwPY3Ucb23nrVl2I8aWTbbwKUuPaXFt04dt+q8RerGq/ZUtOedlO1f+8VHepy7cHjw/fz+36mPqWga3o/tPdqmlY9edB2ztr4UrGlLfdOHfdb90bXL9hNSxfaP95+z+TiUVxnzK4WyknB+MdlF7x7/o9hn+wmqUas9T0HOqxrZtzlBza5cn3UWl1j18Uugo1mgaxpl3tVS9V0OOLqE7kldTOyCjY+i3rb2W/j/gazRsTFzv2he7Z0Yyonl2txl2k1xNJ/lpHV6L7DZ378hq/tBnQvuhNWKNbcnKS7cTaXRbLojj8HS3rHtpk4Mb5UTnddKFi/syjxNfzQRs/wBpmnafp+qYjwKaqJW1N2V1RUV0fR7Ltv19D09oNT0yyzTKrtHefqvulCm52zUYtxTUVGL6v4v5+JkY/wCzrWMvUo2azn1TqTXHNWSsnNeS3X+JtPan2FyNQ1SOo6Nk10W7R3hNuPC4pJOLSfgl6C4OL9rpalO/Gs1TSMXTpODVaohw8aW3dbvt+g9qbJ25OkQvm1XHTcZJvwTju36tnR6j7Ae0GoKq/K1ajJytmpu6ye0V02UXwvfx37G41v2H/eui6dWr66tQwsaFDn1cLFFJbPx2332e3j2Fwj29pPZz2YemY0cyVOm1VyUa7quGLl0fwt7dfM4P20jRRLS8PAy5ZWDTiN02yafFvZPft+Ev0N1X7Ae0OZOijVNTreJT0iudOzhj5Ri1sjpNf9icPUtHxMPDn7vbhR4aZyW6a8VL8vrv5ksVyOpaZ7S5+k0Yk/Z3Bopq2ddtXDGSW31OfXc7b2Dxc3B9mq8XPhwWV2TUY8al8Le/dN+LZyv+w/tTlUVYObq1XuVbW0XdOaS+0duu3hvsd/oul4+jaXTgY27hUusn3k31bf6jdMfPvaj2d1aj2pnq+lVwy1KxWqC4ZyjJd04Pv28DBx9bwbPaCq32k0CFGWrI8V1UrKZQa7ScN+vgdH7Q+w2Xka1LV9CzYY9858yUZtx4Z+Li0n3+5jYnsHqmfqsM72l1Cu5RabjCTlKaXaO7SSX4LcGv1nUtNu9rrYaRoCz9QVrTsusnJTnHo9ob7bLb+Rz+tvNXtJGeoYNGDkuUJOqiPDFeT23fU7DVPYLVIa7ZqWg59VPMsdi45ShKty7pNJ7rq/06GNlfs71q7Pryp6lj5E3wytsunPict+u3R9Ntl39Bm4jX6r/8WIf/AF9H/gNXjPPyfbK6zGw6s3MeRZNU3reLab7rddu/6Hb5vsbqWR7bx1uF+IsZZNd3C5S49o8O/Th236eZX2i9hcnI1eWq6Dlxx75z5koSk47T8ZRkvMXCOa1bRPabO1OOdZpGPh3pJ7UThBNp9JbOT6/8j6/BtwTktnt1R8+wPYPU8zVa872m1CGQobPgjOU3NL+y20tl+D6EZ3VwABFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0+H7MaPg6o9SxsVwynKUuPmSfWW+/RvbxZuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABo8PHlqry8jIysqEo5FlVUarpQVai+FdF0b6b9d+5bRNTyMqWNTfwycsec5T22cnGzg38tmupYN0DQ4uq6hm24dVFeNF3UztslNSfCozUdkk/uZGuXZ1V2nRwrqq1bk8EuOLe/wyfg106f4CDbA5r37UMOeqZNapsxaMzacZuXG04w3UfBbb7+PiZOTq2bXHMy6qqHhYdjhOMt+ZNLbiafZbbvp47CFbwGoyNVuqwdWvjCtywrOCtNPaS4Yvr/AMTPDO1XUYVajk4dWM6MBuDVvFxTkopt9OiS37eP2EG+BzNmdqOPk6xlY8aJ04/LsnCxy3a5UW1Hbt5+JlLJ1KzWM6FN9CphjV2VxnW3tvxbePfp1/QQreA572evyKaNMotcLPfKJ5E57yct0obbtt9fie/+hWWddlZWLZJ8Hw5sGoNpPgkop/noIldGDncTV7sTS4K6Km46dVfQ+u9kmuFp/ficf+I2mfmXYWmRudcJ5MnCtR32i5yaj6bsRWcDmcjUszTM/NyNR5U3RhQlFUuShJubS6Pfbr08T2o13LlDMhyK8m6mjnV8iE4xl124WpLfddO3cRK6AHOrU55WPW7LMW/bMognQ5wcd5f2ot7pr79H5Fp6vqLx451VWL7pPJVEYy4uNLmcHE/Dz6eH8hFroAaGerajB35HKxvdKMz3eS+LjlFyUeJddltxfr9jyn7R2e/WxrjVKmnJ93lXwTdj6qLkn8vRvt5LuIV0YOZ1PP1DJ0+/IqjTDDjkxpWzkrNo2qLlv26tPp5eJu9Qyp4ksWSUXVZfGqxv+ypJpNf73Cv1EGWDn8T2gtyIVuVMIynfLps/6Dg41P8ALWy/LPbE1POlPBty6seOPn9K1W3xVtxco8TfR7pPtt1EK3QOTv1nKjpOm6tqTqqonkQnwUKW+3BPffr136dPAz8rVc6jCxb5xx6o5Dcna4yshTDbeKlwvq359EIlb0Gk/eWo35OJjYiwnK7GldKzilOC2kl0223T3POzW8h4lElPDx73KyFkbXKfxQlwtRjHq1v4+Ai1vwaPH1fM1CGHHArortuxveLHdu4xW+2yS2b3e/oeebrmXRfHG5ePTkRoVtqsU5pttpRjw/h9X5roIV0ANfZqkYaD+9HVJLkK3lvo92vl9ehrdUztQpwczFzlRGyzCttqsx3JcLilunv/APMuog6IGhsz86mrk6hVQ45GLZOvlSknFxju4ye/Xo+627GNb7Q2ULk40aU8bGrsnGxWSc3KO/DFrfbp4vfuIldODTvUc/LvsjplNCjTVCclfunNyW6itu3Tbq/Psefvmpw1bP6QsqpxYWxx1F8Tk1PZJ7991s/0EVvAarRNStz3YrbcWbgotqpShODfdSjLqvz4mLq+u26dl2JWYkqqnBSq+KVjUmt+q6R79N99xBvwaHI1rLxq9Sy7a6PdMKx1pLi45y2jt9kt5I9tI1W7LzLcW/lTca1ZGymE4x77OL4vFdPyIVuAam7N1G3NyqdOqx5RxOFTVradkmuLZNdujXV7lVqGdPPz4qOLXjYW3E7JNSk3WpbN9kk31fXoINwDmYa5l5NWdjwuxZXQxHkV21Qmorrs117/AGa9CcD95Y+To+PHIp5V1E7LE4ybltwtttyb32l0++4iV0oObwvaSeVlUSjGqWNkXOqMIwnzILdpSb2226dvDfuVsz9Qy6tNy3GmGJk5dfBGDkpxju9uJ9nuvD/EQrpga3UruVqGnLh3cp2bPia22rk+yez7eO5iabquoXT02eZXjKrUK24Kri4oSUeLru+zSf4+4it6DRa1dKrOvfWUI6XfPg4mk2nHye/6rqeWRq+oUV5c8erGdGDVXOSm5cU047tJ79H93uIV0QOdzs/MrpzMbPqolKNVd0HTKcVtKe2ze++627rbcX6pmafk6zkZNlVmNiqHLrUWnvJLhW+/369BErogc5D2hvhDJjZXTdZCuEq5VRnCDlKXAovi+7XXyMjDsz/9pHVnOl7YbknTuov414PxQi1uwaqebnS1bJx6Y46x8auE5ymm5S4lLotnt4dytWq3Tx9JscK982tzs7/C+W59P1Qg24NDp+rajY9Psy6sflZ9bcI1cXFGSjxdW3ts0n+Puemi6rkZ97hkPGjLl8UqEpQtqe/ZqXdfdbCFboGDrdk6tDz7KpyhOGPY4yi9mmovqmazK1fUaI5k6a8eVODVXOfM4uKxOO7Sfg/uIOhBoMrV9RwYZkcinGndVTXdXy+JRalPhcXu+/TuWytV1DAjlQy68aVsMSeTU6+Lh+F7OLTf3XUQreg07zNVd9OHGOGsqyuV0pNScIQTSS77t7vv0/B54+uz3U8yqFVaptcnFt7WVS2mt/JrqvwxBvAc1f7QZlSVcoY9d9ePG62M4Te8pJtQjw77du79DbZOdatDeoY1O8+SrlXNPfbZNr87b/qIM8GlydZu94nXh11WQbqqrlJvZ2T3l1+yjs/1Ilq2Zjzsx8muh5Fd9EHKCfDKFkuHdJvdNbPxYg3YNLqOrZWPfl1Y9VU5VSx41qe63dkmnuzbY6vVEfeXW7f7TrTUf03IPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAay/Rq7L7rKMvKxVe97oUzSjN7bb9U9n91sTbo2O3jvGtuxHj1uqDoaW8Ht8L3T8l9zLWbiO5UrKodrbShzFxNp7Pp+SVl4rtdSyaXZFNuHGt0l36fYoxsHScfBlTKmdr5NMqY8TT+FyUuvTvuj11DBhnV1xlbbVKqxWV2VtKUZJNeKa7N+B605WPkVysovqthHo5QmpJfqjFjq+HPLVNd9U4cqdsrY2JwiouKab/AN4CbNKosxsyiU7OHMs5ljTW6e0V06f91HlfomPfdbJ3ZEabpqdtEZpV2SW3V9N/Bb7Nbmx5kOYq+OPG1xKO/Xbz28jGnqeDDHuv97plXQt7HGxPh+z+4GJm6DRmWZLllZVVeVs7qq5pRk0kk+qb8F+djC1jRsrMvyoUURUMpJOayZQjvttxTht1a8Nu+y3NrDVMazlTrsrePZVKznc2KUUmls1vv4/oe2ZlwxaZy+GVkYOardkYuSXj1aW3XuOo8ZaVRKnOrc7Ns2ChY010XAodOnkvuW/dtazfeoW2xk6VTOKa4ZxW+2/Tut32IhquBPJvx1lVK3H25ic0tt//AFt+TL5kObyuOPM4eLh367ee3kFa+ei0vHwq6sjIpnhQ5dVsJR4uHZJp7pp77Lw8CMfRMbHhTGFl8uSrVFykm3zHvLfp6f6mbLLxoZEceeRTG6Xy1uaUn+F3IebiRuVMsqhWylwqDsXE35beYGsv0fmZWl1Rh/7Lp8V/ElP4p7JbR2S84xk39jZ5uJVnYs8e/i4J7dYvZxae6afmmkzx1HVMXT6LZ22wdldbs5KmlOSXkjMnKMIOc5KMYrdtvZJAayGhY7lkSycjJyZ5FSpslbNfKnuttktu/gelelcNV0LM/OtdsVBTlbs4JfTwpdfv3MmGZiTo58MqmVW/DxqxOO/luR7/AISjXJ5ePw2vat8xbTf269QMSGiU8bsuyMi66Vldjsm47vlveK6JLbv4b9TW36Jk3ZvDGmNdHvSv4o5MnBJS4t1Xt0k+3l1bN7ZnYdVddlmXRCFvySlYkp/h+JN2biY8uG/KoqfTpOxR79u/ns/QXUeE9Koni347nZwX38+T3W6lxKXTp23SKfuitZUra8rKqrnZzZ0wsShKXn236+KT2Z7zzqqr7YXyhVXXCMnbOyKXxNrtvuu3d9y1efhWVTtry8eddfzzjYmo/l79ArBv0DHulYvecqFNlvOdEZrg4999+2/db7b7GdqGFVqGFbiXuahYlu4PaS2e6a++6PLI1bT8eiq+zLp5V01CE1NNNv7+Xn5HpDMrlLI43CFdLX8R2R2aaT379O/iB5V6Ti158cyKlxxx1jqO/wAPD+PPw/B54mi0Yt1M1fkWQx01RVZNONW626dN306dW9kZkcvFlRG+OTS6pPZTU1wt/ktRkUZNfMxrq7ob7cVclJb/AJQGJXpOPXh4WKpWOvCkpV7tbtpNden3Z5x0aFVUa8XNzMeMJylWq5raCl3ik0015b77eBnrIoai1dW1OThF8S+KS33S+/R9PseF2oUU2xjKdfL2m52cyKUOHbdNb7+P6eIGu/cPBm43u192PTRjyrjZXNcfE5JvfdNPfr4HutCx6+S8fIyaJ1QlBzhNcVik+KXE2n1b67rZl465gzji2Qug6clSascklDZb/F5PqZ8bqp086FsJVNcXGpJx289x1GujoVFdGNXjZOTRPGrdULa5LicH12e6afoTPRav4boysvHnCrlOyuxOU477/FxJ9d2+vfqFruBOii+m6Nldt3JclJLge0nu/JfCzNjl4ssZ5Mcml0L/APVU1w+vYdVE8Sm3BeHapTplXy5KUm21tt1fff7mD+4qZV3xyMrKvlbQ6FOyabhB91HZbeXV7voZ7y8ZY3vLyKVR35rmuH17CWZiwx1kTyaY0y7WOxKL/XsQay7RXVjWyotuyr+RKiiORauGuMtk9ml+Or3fQ9XosXGDhl5OPZyYVWuiairFFbLfdPZ9+q2Zs4yjOKlCSlFrdNPdNHlVl4185wpyKbJV/OoTTcfzt2LRiZOj1X2ysrycrHc4KuzlWbcyK7b7pvfq+q2ZezS6Z5TvhdfU5U8ica57KUVvs9++63ezTGRquJVgZGXTdXkQx47zVU1J/gyZ5OPXfGiy+qNs/lrlNKUvwgMbC02GLkTyJ5F+TdKCr47nHdRT3S6Jef5PDL0GjKsyG8nKrryJKdtUJJRlJbbPtv4Lx2M/Jv8Ad41vg4uOyMPmUdt3tv1fX8dzxxNUwcyN0sfJqmqJONjUl8O3j+PuAemY0qMyifHOvLm52Jvs2kum3bsicLBeLOU55mVkyklFc6aail5JJL9e56RzMWdKvjk0yqb4VNWJxb8tysdQwZ8vhzMeXNe1e1sXxvyXXqQY+XpFWTkWXRycmh3RUbo0zSViXbfpuunTdbMvPSsacM6E+NwzUlYt+20VHp+iRkPKxlkrGeRUr2t1Vxrif6dzzzM+nDux67moxvlJcbaSjtFy3e/4KMWrRKoztsty8q+y2h47lZKPSD8tklue89MqlPCnG26ueGuGEotfFHonGW67PZeRkLKx3je8rIqdG2/M41w7fnsYeo6zh4OLVfza7VdJRqUbYpTfnu3tsvFgKNIrx74zqyspUxm7I46sSrTe+/hvtu+2+x5Q0DHhZS1k5XJotV1VHGuCEt9+nTfbr4s2HveMrYUzvqjdNbxrdi4n+F4hZeM7nSsirmrfeHGuLp36AVycOvJvx7pympUOTik+j4ouL3/RnlVpdFUNPhGdjWAtqt2uvwOHXp5Pw2MijJoyYuWPfXbFPZuuakk/0JeRQk27q0lPgbcl0l5fnquhBj5mm05llllsrE7MaeM+Fr5Zbbvt36HnZpGPZRmUudvDl1xrm01uko8K26eRl2ZWNVGyVuRVCNbSm5TSUW+vXyLwnCyCnXOM4SW6lF7pgYeZpWPmWW2WzsTsqjU+FrtGXEvDvuRfpOPfkZNtk7eHKrVdtakuGW3aXbdNfZmRDNw7J8EMqiUt0uFWJvr2/wAGWnk49fFzL6o8LUZcU0tntvs/06lGF+5650XU5WXl5MbYqG9ti+FJ7rbZJb79d+/Qth6VDFzXmSysnIvdfKcrpJ/Dvv2SRmUX05Nasx7q7a304oSUl6oiWVjRyFjyyKlc1uq3NcT/AE7gUrxK4ZeRkpyc8iMYzT7bR3229WYONoFGPbjzWVlzjjKSprnNOMFJNNdt30fibJ30qEpu6tRjLgk+JbKW+23536Hji6jh5l99GPfCdlEuGcVJbrt/Lrtv5gecNKx4VYNanbtgx4a/iW7+Bw69PJ+G3U86dHhVbzZ5mXdZGqVVcrJpuuL232aW7fRdXv2NkCUY12HC/TZ4NtlkoTqdUpt/G01s3v5nhbpGPbTmVSnao5kIws2a3SUeHp08jYADU6zpKzqMiVTbuuqhTwuW0eFT4vXqyz0OideTHIycq+V9Loc7JpyhB+Edlt+r37G0BaMLM06GVZVbG+/Huqi4xtpaT4Xtunummui8PA8bdCwrsDHw5czl0WcxPi+KT68XE/Hi3e/5NmCDAy9Lhk5LyK8nJxrJwVdjoklxxW+ye6fbd9Vs+plTi6sVxqrdrhDaMZS+b8t/4nqANNp+hV06HXg3uUbONWudc3vCafThb8kkl9kez0THnjX1W35Ftl8oznfKS4949Y7bLZbbeRswWjVw0OhStnbk5N1ls6rJznKO7db3j2WyRtACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAONhXG7H1DFpwLZZduo2SrvVW8Vtb83H4bbPp/zM63TrJ6Xq3LxW7rcuU2uHaVsFKLaTfdNJr9Toaqa6FJVQUFKTm0vGTe7fqXLUjl8vGszvf7dPwraapYka3CdTqd0lLfZJ7f2d1v9zxzMd5+VlS0/Tb6Yz0yypOdDr4p8Udo9fH/ANeB1wFI5nJlk6plXvExcqly02yqM7anX/Ebj8PXx+56114+Xi3VYukXUWLDlVxWU8tJtdIdfm69d1uunc6ECjncfF99ngQsxbq6Xp9tNqnU48Lbgmnv49H+djFli52To+pW5WPb7zDHjiVx4XvPh+aSXipN/wAkdYBSNG8KF2qati3481XmVR4bVW+Frh2fxdk9+uw9m3dlq7UMuO1rUcZdd+lfSTX5m5eiN1ZXC2qVdi3hNNSXmiKaasemFNFca64LaMYrZJCq5TV68u7LyoxxLIz95qlDlYm/HFOPxuzz79F22MnJ0+UsLWLFiSeRLMU6pcv4mlwbOPjt37fc6UCpHIavjy9y1jFs0y/Iysi12VWQpclKOy4fi8Ntttv+Zvdepsv05KFUrowurnZVFbuyCknJbePTw8TZAVXK5OK82zKtowbYYl1uLF1zpcXY42bzlwtb7cLS3a8PsZOdTHH1TLlPT1l1XY0YVqHDtVtxbpptcKe++/2OhMXL03Bzpxnl4tVsorZOS67eX4+wqRyqjkT0rArjjS4JabGMLa8TnSnJ/wBjd9Irs+vn9jO07T5Wwm8zElKX7qorTsre/FtLij18e26/B0sYxhFRilGKWySWySJFI5jEllYePZk3YN99i03Fjy+U25WLi3W23g2t/IOHL0Z8jFttunkQnk2W4U9933lGDS3S2SSXZHTgUjkKsa/3PItni5E4w1Kq9J4/DKUEobtQS/l36depk5mNdPLyr/dbbMdZtFsq1W97IKpLovHaWz2+x0wFI5azDllSusrwrIYl+djyVUqnHdR245OPgn9/I2+n47o1bUuGp10zdco7R2jJ8Oza9FubICq5XLwMv3/L5dFjqw5vMx3GL/iTk4y4V5veNi2/76MjFwr+ZpsrKJ8VlOTZdxR6RnY4y2l5Pq1+h0QFSOZ07FdtWhQtwrI+6xnG2NlLSjNQS3e68+zNpolDox8qqVTrh71a4RcdlwuW62XkbICq5bHw5TwcDEswrN6NSlK1SqfC1vY1LfbZrqupXPwMiN2S6KLI48NQhc4108e8eUk5KP8Aa2l5f6HVgVI5VYaWnSscc9J5vOhJYi3g+Hbi5XfhfXw336/c8pUZjjg5N2PKqquVyfJw+J7ya4Zup7tbpP8AG/3OvApGt0XHePosKnG7b42oWRUJJOTaWyfTv0Xh9jSYdeTRTbViYM7668OcIrKxOXOL6bVuS2U0/Hby79TrQKRxM8bLujnyroyJQnp3Livc3SnNS+VR7vZGRqGDkTzs+q1ZW+TdGdUqcVWbxSjt8b+XZp92vPxOuApGu1quy2nEVcJTccymT4VvslNbv8GmycS+WDqONVjWxlHOVzSp3VlXEn8O/SXRPp9tjqgKrko4Mr1ZNVZNtd2ZjucbcVVRai+r4e+23dteB7Zmm/wtclVhfHO6qVTjV1ltGD3j089+3judOBUjmbarKtbfu2NdZzMuM7IX43FBdk7IWrtsl2b/AEMzX698rTLZ4lmTTTfKVkYVuey4Hs9vs9jdAVXJX4mRZTPJoxrqcR6grlTyN5KPL4XLlv8A73XbbfxPWjBk6aZxpyJxnqUbXzcdV7Lh2clFdotrxSOoAqRy2bjT5epYnuF1mZk5HHRfGreKXThfH2jw7dn5fc9MnTb7tN11UUuGVffLgm4fFOPDHot+6fxLy6s6UCkaHQ6H+8rslLJUXTGtqzFVEW09106Ntdeu23XuY+qabk5WqZGLVXONFsfe1al8KtjBwS389+CX6HTAUjkbMXNtow9Rtquq5mTbffUqOZKG8eGDcH16JLw6bm69n6Hj6fJfxlGd05xVtaraTfhFdl3e3fqbQCq5inDniaDp9scKzmU5StuhCv8AiNbyTe3d9ys6LM7MutlhX8mzUaJqNtTW8I1pcTT8N1/zOpAqRrdMoePqOqKNTrpndCcPh2i3y47tfqjUZGNY4ZmG8G6Wbdmc2rIVW8UuJOMuPsuFdNt9+h1IFVy2Vz442bge5ZUrbM+NsZRqbg4OyMt+Lt4du5n4k/cM3V5Tw75b2K6Dqpb5keCK2i+ze6fQ3QFQT3SYAIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ5xT2ckv1AkFeOH1x9Sye63QAAAAA3smwACe6TAAAAAAAAAAAAACIviin5rcCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaWOtZV+RkrD09X04tzqs2uSsbXdqG3b8tbmZkazp2Lle7ZGVCFvTdNPaO/bd9l+po9X07MzLr+HSIRzeP8AgZ9NyrSj4OXXi3S7rZ/YvmafqUYaph1YkciGoSUlkOyMVDeKi+JPr023W25ZiNxfrOn4+XLFtyNr4rdwUJSaW2+/ReQ0fVaNXw/ecdTit2nGUWmuv8zx03CuxtX1C6yP8O2FMa5treXDFp/fuPZ3HycLTVh5VPA6ZzUZqSasTk2mtu3fxA2VttdMVK2aim9k35iy2uuUIzmk5vaK82LK4W1yrsipRktmmY+Lgwx7HY5ztklwwc3vwR8kRWWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTU86GnYcsicJWPiUIQj3nJvZL1PHGz833qNOfp/IjOLlG2uzmQW3dSey4X/JjXMK7NwEsZx94pthdUpdnKL32f5PCORrOXKaWDDDrjVLrdOM3Ozb4duF9k+7fco9q9e0y6NrpyVN1QdjShLdxXiunVfjcpje0Gn3aZVnTslVCx8KjKL4uLbfZJLr+hqtM07VJanjZGZVkRUMaddkrb4TSk9vljHsjzjpWpe46VKeNdCzTuOqddN8Yysi4pKcXvt4dnsyzEb+zWNOqw6suWVDk2vauUU5OT8kl1IWt6ZLEllrLg6Y2cpySfWeyeyW27fXwNDPHnpX7vzJRqqtjdc3Rk5Pzca6/HtspdN/1fU8tLoy8iqWo49NV8qtUtu5Vc0o2RcFFuMn0ez32fTfYkK6OWt6ZDDjlyy4Kic+WpbP5tm9mtt0+j7npTqmFdG2UL+lVatnxRceGDTafVfZmljpedddXlW4yrdmpwyZU8cXy4Rg47vwb32fTcj2lpdurYuPjWR5udW8a+CfxKriUnLb7JSX6iDo6roX48L6ZcULIqUXttumt13MK2yFNU7bZcMIRcpPyS7mfwqFfDFJRS2SXgYQViabqNOpVW2UwtgqrHW1ZHhe6Sfb9TaYz+F/k02lY12PZnu6HCrsqVkOqe8XGK3/kzcY3yy/I1F7b6qXBWzUeN8Md/MWX1V2wqnNKdnyrzIvpryKpVWx4oyPDDwI403ZKyVtr6Kcu6XkRWYRL5X+ARL5X+AJj8q/BJEflX4JA1E9Vy7cnJr03T1kV4suCyc7uDiklu4xWz3a3XfY9rNawsfGouy5zx5XR4lVZB8a894pbrYwYQ1PSsnOhiaf75Tk3SvrlG2MOCUl1Ut323W+6Jso1TG1GnUXi15ls8RUWwqmocEuLi3XF4ddv0KjN/elctSoordcse3GlfzuLpsml6dScfW9NylbyMqMuVB2S+Fr4V/aW66r7o0lXs/mrFpxZcK/8Ad99MpqXwxnOSko+e3h+h6zwtSznVK3AWL7rh20pc2MubKUUklt2j08dhMG8wdRxNRhKeFcrYR2TkotL+fc97ba6YqVs1FN7JvzPDS6Z42lYlFkeCddMIyj5NRSfY97K4W1yrsipRktmmRSy2uuUIzklKb2ivNlzExcGGPY7HOdskuGDm9+CPkjLAFa/6OP4RbcrX/Rx/CAsae7WMmWoZWLg4UL3ibcxSvUJS3W/wx2e/5exuDmtbwcjLvvU9FhkTa/8AZsqm1Vyh0/tNvfo/LdFwbR6pGvJtV7jXVXRC1x4ZOyPE2uqS29N/EVa5pltV9scpKGPw81zhKPDv27rxMCGLquHdfk10rKyFg1VRk5pKy1N7vq/vv9zElpebfo0aViX1ZVWRDJsnO6ClkyT+LrFvb7b9ugmI3sdY06WHPLWTHkwlwybTTUvLh23369tj2ws3GzqXbi2qyKk4y6NOLXg0+qZz60q+eJmW2afkysutrko2Zq5vwdpKS6Jrw69fsbTQqs6rHuWe59bW6la4ysUNl8zj0b7gbG22umKlbNRTeyb8xZbXXKEZySlN7RXmxZXC2uVdkVKMls0zHxcGGPY7HOdskuGDm9+CPkiKywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAkgjq+q2SJ2l5r0AAjaXmvQbS816ASCNpea9Bwy816ASCOGXmvQcMvqXoBII4ZfUvQcMvqXoBII4ZfUvQcMvqXoBII4ZfUvQcMvNegEgjhl5r0G0vNegEgjaXmvQbS816ASSRtLzXoQ911ezQFgQSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEN9dl3G0vNegADaXmvQjaXmvQCQRtLzXoOGXmvQCQRwy816Dhl9S9AJBHDL6l6Dhl9S9AJBHDL6l6Dhl9S9AIshC2PBZCM4vwkt0TFRjFRikkuyS7Dhl9S9Bwy+pegEleCHM5nBHj224tuu3luTwy+peg4ZfUvQCTydEG992j04ZfUvQbS+pegHlyIecj0hFQW0Rwy816BqS8V6AWBXhn9Uf+H/zHDP6o/wDD/wCYFiH1TRHDP6o/8P8A5hRl4yXp/wCYErokiSOGXmvQcMvqXoBII4Zea9Bwy816ASCOGXmvQcMvNegEgjaXmvQbS816ASCNpea9Bs/NegEkRXDFLyWxCUn13W34J2l5r0AkEbS816DaXmvQCQRtLzXoNpea9AJBG0vNeg2l5r0AkEbS816DaXmvQCSSNpea9CHuur2aAsCCQAAAAAAAAAAAAADz5kvpXqOZL6V6lABfmS+leo5kvpXqUAF+ZL6V6jmS+lepQAX5kvpXqOZL6V6lABfmS+leo5kvpXqUAF+ZL6V6kcyX0r1KgC3Nf0r1IlbLhfwrt5lSsvlf4AygAABrtM1nF1PKzsbHVkbcG51WxmkuvXqtm+j2foV03XcHUqsu6mbhTiXSpnZZtGLa8U9+3Xx2A2YPCObiTxXlQyqJY66u1WJwX69jFytd0vEpx7rc6jlZNirrnGaab89/JeL8ANiDB1TVKdMwFmWV23Qc4wjGlJyk5PZbbtLx8zzwdaoy8m3FsoyMTJqgrZVZEVF8G+3Emm01uvMDZAxq9QwbaJ315mPOmv57I2xcY/l77ImGfhWRulXmY8lRvzXGxPl7fV16fqBkAxsrOoxqJ2OyEmqpWxgpLecYrdtefh6nlVq+FLBxMrIyKcZZdcbK43WRi3uk9uvfuBnA8Lc3EptjVblUQsk4pQlYk230XT7+B7gAAAAAAAAeMbZcK+FdvMnmv6V6nlH5V+CwF+ZL6V6k8yX0r1KAC/Ml9K9RzJfSvUoAL8yX0r1HMl9K9SgAvzJfSvUcyX0r1KAC/Ml9K9RzJfSvUoAL8yX0r1HMl9K9SgAvzJfSvUcyX0r1KAC/Ml9K9RzJfSvUoAL8yX0r1HMl9K9SgAvzJfSvUcyX0r1KAC/Ml9K9RzJfSvUoAL8yX0r1HMl9K9SgAvzJfSvUcyX0r1KAC/Ml9K9RzJfSvUoAL8yX0r1HMl9K9SgAvzJfSvUcyX0r1KAC/Ml9K9RzJfSvUoAL8yX0r1HMl9K9SgAvzJfSvUcyX0r1KAC/Ml9K9RzJfSvUoAL8yX0r1HMl9K9SgAvzJfSvUcyX0r1KAC/Ml9K9RzJfSvUoAL8yX0r1HMl9K9SgAvzJfSvUcyX0r1KAC/Ml9K9RzJfSvUoAL8yX0r1HMl9K9SgAvzJfSvUcyX0r1KAC/Ml9K9RzJfSvUoAL8yX0r1HMl9K9SgAvzJfSvUcyX0r1KAC/Ml9K9RzJfSvUoAL8yX0r1HMl9K9SgAvzJfSvUcyX0r1KAC/Ml9K9RzJfSvUoAL8yX0r1HMl9K9SgAvzJfSvUcyX0r1KAC/Ml9K9RzJfSvUoAL8yX0r1HMl9K9SgAvzJfSvUcyX0r1KAC/Ml9K9RzJfSvUoAL8yX0r1I5svpXqVAFuZL6V6jmy+lepQAelcnKUt1tsl4noeVPzS/C/wBT1AA8r8mrH4eY5by+WMIOTf6JNnl+8KPoyv8A7W3/AKQMoHlRk1ZHFy3LePzRnBxa/RpM9QAAAAAAAAAAAAAAAQAI/tIkj+0gLAFLrYU1uyxtRW3ZNvy7LuBcGL+8KPoyv/tbf+kvTmU3WcuPMjPbdKyqUN19uJLcD3AAAAAAAAAIAES+V/gkrL5X+ALgAADE/eOO/lV814Shj2ST/DUdmP3jjr5lfBeMp49kUvy3HZAZYAAAAAAAAAA8Y2y4V8K7eZPNf0r1PKPyr8FgL8yX0r1J5kvpXqUAF+ZL6V6jmS+lepQAX5kvpXqOZL6V6lABfmS+leo5kvpXqUAF+ZL6V6jmS+lepQAAAVAAAAAAAAAAACCSAIKy+V/gsyk/lf4AzAARXCW4Wq4d+Znabi2+8ZWZkYsvga2hN7wt/EXv18mS9Gtw8W+irButw8bU6bJUqvd3VRqim0v7XXr99md0C1I4e3A95o1XJjgZ2PhXZNFlFdWOuOMoL4rOU+6323W2727FXi5Vuk133aXxxx9Vru3rw3XZdUtuKbq77/47HdAUjRe1dF+ZoVVeFCxWPIpceCvicFxp78P279fIwtX9ncl6XqF6ysjUNQuqhXvNRhvXGak4RUUkt1udUBVcBrFSuxtYzsPTrsHCWmqmcbKeTzLOPdbR+y3W/wBz2swZ587Y6XpF+EoaVdj28yrlqycklGC+rZp9e33O0ycenLx54+TXGyqxbShLs0eqWy2QqRxLsydQuxXDTc6pUaVfTN20Sj/EcYrhXn2/XwMXUMbOlp+LjPTrE/3RXVCccHnTlPh6wbfybM+gAUjlPZ/TZvVsfIzsOTnVpWNCNl1T+Ga34km+0l038UdWARQAAAAAAAHhGtcK4W10K9U9n0ZNNkLK965KSXTdeZaxfDv4oCpJBJUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAEAhgelHzS/C/wBT2PHH+af4X+p7EVi2f1tj/wBxb/mrMoxMmNsMunIrplcoQnCUYNJ/E4vfq0v7P8yfe7/+zsr/AIqv+sBX/W2R/cVf5rDKMTGjbPLuyLKZUqcIQjGbTfwuT36Nr+1/IywOI1b2hjR7V8395RqxsG2vHsxubsrVNPjm4+PDvD0ZfWr7o6jrajdYlG7T1FKT6bz67fk30PZ7AjpWVp84yshlSsnbbPhc5Sm93LfbuvDp4IpP2cxLFdzL8mUr+Rxyco7t09Yvt4+P8ti3EeHthPNjh4ENOypY19udXBTTe3VS6NLut9t0YVftBK7Vsa652U+7YeS8zFUntCyHDv08fHZ+TOiz9Ppz/dudKcfdr43w4WlvKO+yfTt1PCzQsGzWnqrhL3idDosSa4bIvzXnt0A0Wne1Wfm2VVxpxpzy8eyyiNcLP4UlHijGbaSe/mtupaPti3ZCx01+7PT+fKfXdXcDny+/0pm403Q69OurlXnZ1tVMHCmiy3eFa8kklvsui332MWXshpcsCeE+dyp5XvT+Jb8W23D2+Xbpt5Dg2VeZOnRY52oqNc4Y6tvUe0Xw7tLc5j2R1uy7Kyab89ZdmTjrOhHmcapbb4qvtt8PT8nU6pp9WqYFmFkTsjVbtx8tpNpNPbt2e2zPPK0jFycrFyNpVWYvFwOrZbqUeFxfTt/yQVoa9f1yWiYWoSx8Djz7qqqa059OLfdyfp23269ycvUc/AzdQudGPbl42DVba4OfDKPHLiSTlstoptG5joeLHTtPwVZdysCyuyp7rduHbfp/hse37tx3qN+bLjlPIpjRODa4eFNvtt/3mEanL9oLlZnyxZYccbGVUIXZEnGMpzXE+3faLj0XVtmslrmRqWPjxnKtWY+sY9MrKOKMbItp9pdV322ZuavZbBp0evTqrsmMar1kQu41zIzXZ77bdF07diavZrErblLJy7Zyyq8uU7JpuU4dvDt07emw4MXB1/LyNclhXrEoXNnWsezjhdwrfaSb+GW+2+y8PE6NfOjUR0Cn36vJtzMy6NNruqptsUoVze/VdOLxeybNsvnQ1XoeWT/RL+8h/mR6nllKbo3rg5yUoy4U0m9pJ+JB6mLkf1hif7/+A97v/wCzsr/iq/6ysedkZlNksaymFSlu7JRe7a26cLYGYclrWdl4GpariV5FvHnY9Tw05v8AhzlLlPh8usoy6HWmBnaPiZ+o4Odfx83BlKVezWz38+nXsmXBoNIzczL1DSdOsybXbgxveY+N72OD5ceLz334up4+zOq6rj6bonvUKLMPMnKhS4pO5S+JqTb6bPhfQ6TD0fEw9VzdSp4+fm8PMTa2XCtunTx7s8qNAxKMLTsSFl7hp9vNqbkt5PaS+Lp2+J9thUc7p2fqcp+z0MGdFGPkyyFOqXHPdxlLfdtt9u3Xv9uhk0+111uo1qNVMsWzL92VcYWO1Ldx429uHbdb7eXibaHs5iV42DVVfk1ywbJ2U2xkuL4m3JPps092uxNWgUU5fOpzM2unnO/3WNu1XG3u/Dfbfrtvt9hwbcgAioKz+V/gllZ/K/wB6gADF0r+qcP+4h/lQ1X+qcz+4n/lZ44lmRi4lOPLAvm6oRg5QlXtLZbbreSYy7MjKxLseOBfB2wlBSnKvaO623e0mwNgab2nq1G3Bp/dyunGN0ZZFdFvLsnXs91GXg99vLc3JhapplWpV1Kdt1FlM+ZVdTLhnCW233XZ9mBrvZjJot98ppu1BSqnHixc7d2Ubrze7ae266s3xr9L0mrTp33c+/JyMhp23XyTlLZbJdEkkt34eJsBoAAAAAMSPyr8FikPlX4LoqJJIJAAAAAAAAAAAAAAAAAAAAAAAAAggkhgQyk/lf4LMpP5X+AM4AEUAAAAAAAAAAAAAAAAAAAAAAABh4UZ14sITjGLitvh7P7ntN/w5fgrB/CvwVlLifTsv5gSSQiSokAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQAZVksqwPXG+af4X+p7mPjfNP8L/UyCKAAAAAAAAAAAAAAAAEEkACGGQwIZEf6RBkQ/pEB7AAAAAAAAAAAAQAIJIYFWVn8r/BZnnP5X+AMgAAAAAAAAAAAAAAAGFD5V+C6POHyr8F0VFiSESBIAAAAAAAAAAAAAAAAAAAAAAAIKssyrAqyk/lf4Ls85/K/wBsAARXLXXZChm2weep15U0rla3XXFS8Y79Ul9jNzNbnVk3RoVUq6OHeLjJys3Sb2a6Lo/EypaNVLnReXlKq6yU51KaUW33Xbfb9T0t0yud05135FCsSU4VT2Utui8N106dNi8Rjz1O5an7v/AqhxxUY2qUZWJpdYy7ePb7HppNuXbdmrJsrnGu9wioxaa6L79up63abC67jnkZDrc1N0uScN127rddu2560YkKMi+6uc9rpcUoNrhUtkt1038ArSZ+Sq8rUOOedxxlGNLqnJQi3COyfXhXV+Jk52p5WDVCM7MXmwoU7IS4nKctuuyXZfdmwnp9FkcuM+KUcr50326JdPQ8LdHqt498nJjzK1XbwyX8RJbJvp36+ARjSycqeTmtzrePHFVir2afVS8U+/TqRHPzuVYsWvH4MfGrtfM4m3vFvZdft3ZnS0yqU3JW2x4qeRJJraUdmlv07rcmvTqa43RjKza6qNUt2uiimlt079QMWWo5d8rXhV08FNUbJc3feTkuLZbduniZ+FdLIwce+aSlbVGbS7btbmrztLuclDGp44OlVOSyHXvstvjSXxL8G1w6XjYdFDfE6q4w389lsFewAIAAAAAAAAMCO7it230Lo84fKvweiKiyLFUWQEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCGSQwIZRlmVYHri/NP8AC/1MgxsT5p/hf6mSRWJkytnl049d0qVOE5ylBJv4XFbdU1/a/kT7pf8A9o5X/DV/0Cz+tsf+4t/zVmUBiY0rYZd2PZdK5QhCcZTST+JyW3RJf2f5mWYtf9bZH9xV/msMoDRz9pODPWF+5tUd7g7FFRq6xT2b+fzaNrXmYtuRLHhkUyvit5VKac4/ldzU2/8A57x//wCNs/8A9IHKez9UY6tgadfk2PVMTJsstjDHgvq3bs33kmn939ixH0KGZi2ZMsavJplfDrKqNico/ldyKs3EuyJ49OVRZdX89cbE5R/K7o+fez9UI6vgadfkWvU8TJssthDHgvq4m7N95Jp/d/boZXs1fjx9o6MLAStjS7ubDIojG7F79rIv49308RCu+ABFAAAIJIAgqyzKsCrIh/Sr9SWRX/Sr9QPc8spzVG1c3CTlGPEkm1vJLxPU8sn+iX95D/MgPL3S/wD7Ryv+Gr/oKx52PmU1yybLoWqW6sjFbNLfpwpGYYuR/WGJ/v8A+AGUajL1+vGz8jDhp+dkzxoRnbKmMGoqW7XeSb7Psjbnz72gy9Kx/arU6tWvzq1dRTGuOLZKPH0luns9n3Xf7lwdrXquBPAozpZVVWPfFSrnbJQ338OviWeYv3hXixhGUbKXbzFZHwaXy77vv37HBZfvGDRoubrdkKMdYMqVw48LVCXFuvh7dYbLdLw+5k4+BdZViYOLZbzbNEyI1St2jL4px4U+FtLo0u/RCJXa06hg5FihRmY9s22lGFsZNtd10fgWpzMXIsnVRk022VvacYTUnH8pdjha4xydX0urA0393Xxw8ijj+DrYq19Le6Te+78x7IqizV9Ppqut96wKJwyKo49cIx6JNSknvP4uq7+b2EK+gFWSyGRVWec/lf4Ls85/K/wBlAADX4leRlYlORLPvg7YRm4wjXtHdb7LeLYy68jFxLsiOffN1QlNRnGvaWy32e0Uz20r+qcP+4h/lQ1X+qcz+4n/AJWBlGu1nWcTRase3N4+C++NClFLaLe/V7tdOhsTnva3Fqzf3Ti3req7N4JL7OqxDBsNU1nE0rIwaMnjdmdeqaowSb3bS3e7XRbrf8mxPnkI5WZPFy9R2duDqONp8Gnvu4WLjn/vPh9D6GXQABAAAGBD5V+C6POHyr8HoiosixVFkBIAAAAAAAAAA//Z" />),
            category: 'common',
            attributes: {
  "contentvAF": {
    "type": "string",
    "default": "Filters"
  },
  "contentaaw": {
    "type": "string",
    "default": "Close menu"
  },
  "contentyAV": {
    "type": "string",
    "default": " Category "
  },
  "contentBNe": {
    "type": "string",
    "default": " All New Arrivals "
  },
  "contentpSl": {
    "type": "string",
    "default": " Tees "
  },
  "contentgfC": {
    "type": "string",
    "default": " Objects "
  },
  "contentXnx": {
    "type": "string",
    "default": " Color "
  },
  "contentjih": {
    "type": "string",
    "default": " White "
  },
  "contenttqY": {
    "type": "string",
    "default": " Beige "
  },
  "contentCfu": {
    "type": "string",
    "default": " Blue "
  },
  "contentvxL": {
    "type": "string",
    "default": " Sizes "
  },
  "contentzIn": {
    "type": "string",
    "default": "Workspace sale"
  },
  "contentDPT": {
    "type": "string",
    "default": "Our thoughtfully designed workspace objects are crafted in limited runs. Improve your productivity and organization with these sale items before we run out."
  },
  "contenttMz": {
    "type": "string",
    "default": "Filters"
  },
  "contentznA": {
    "type": "string",
    "default": "\n              Sort\n              \n              "
  },
  "contentBQt": {
    "type": "string",
    "default": " Most Popular "
  },
  "contentUnP": {
    "type": "string",
    "default": " Best Rating "
  },
  "contentJzb": {
    "type": "string",
    "default": " Newest "
  },
  "contentUSD": {
    "type": "string",
    "default": "Filters"
  },
  "contentMTe": {
    "type": "string",
    "default": "Category"
  },
  "contentyWI": {
    "type": "string",
    "default": "1"
  },
  "contentXGk": {
    "type": "string",
    "default": " All New Arrivals "
  },
  "contentukv": {
    "type": "string",
    "default": " Tees "
  },
  "contentHfH": {
    "type": "string",
    "default": " Objects "
  },
  "contentnCV": {
    "type": "string",
    "default": "Color"
  },
  "contentLCS": {
    "type": "string",
    "default": " White "
  },
  "contentYzc": {
    "type": "string",
    "default": " Beige "
  },
  "contenteIg": {
    "type": "string",
    "default": " Blue "
  },
  "contentxRG": {
    "type": "string",
    "default": "Sizes"
  },
  "contentmKM": {
    "type": "string",
    "default": "\n          Filters\n          "
  },
  "contenttOa": {
    "type": "string",
    "default": ", active"
  },
  "contentrDD": {
    "type": "string",
    "default": "Objects"
  },
  "contentKwW": {
    "type": "string",
    "default": "Remove filter for Objects"
  },
  "svgJhL": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>"
  },
  "svgawg": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgonI": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgOua": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgmch": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgcpx": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgYvr": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgCVW": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\"/>"
  },
  "svgdbD": {
    "type": "string",
    "default": "<path stroke-linecap=\"round\" stroke-width=\"1.5\" d=\"M1 1l6 6m0-6L1 7\"/>"
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
            value={ attributes.svgJhL }
            onChange={ ( value ) => {
              setAttributes({ svgJhL: value });
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
            value={ attributes.svgawg }
            onChange={ ( value ) => {
              setAttributes({ svgawg: value });
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
            value={ attributes.svgonI }
            onChange={ ( value ) => {
              setAttributes({ svgonI: value });
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
            value={ attributes.svgOua }
            onChange={ ( value ) => {
              setAttributes({ svgOua: value });
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
            value={ attributes.svgmch }
            onChange={ ( value ) => {
              setAttributes({ svgmch: value });
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
            value={ attributes.svgcpx }
            onChange={ ( value ) => {
              setAttributes({ svgcpx: value });
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
            value={ attributes.svgYvr }
            onChange={ ( value ) => {
              setAttributes({ svgYvr: value });
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
            value={ attributes.svgCVW }
            onChange={ ( value ) => {
              setAttributes({ svgCVW: value });
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
            value={ attributes.svgdbD }
            onChange={ ( value ) => {
              setAttributes({ svgdbD: value });
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
        <div className="bg-white">
            <div className="fixed inset-0 flex z-40 sm:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"/>
                <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                    <div className="px-4 flex items-center justify-between">
                         <h2 className="text-lg font-medium text-gray-900"><RichText tagName="span" value={attributes.contentvAF} default="Filters" onChange={ (newtext) =>  {
        setAttributes({ contentvAF: newtext });
      }}
    /></h2>

                        <button type="button" className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"> <span className="sr-only"><RichText tagName="span" value={attributes.contentaaw} default="Close menu" onChange={ (newtext) =>  {
        setAttributes({ contentaaw: newtext });
      }}
    /></span>

                            
      <svg
         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJhL }}
        >
      </svg>
      
                        </button>
                    </div>
                    <form className="mt-4">
                        <div className="border-t border-gray-200 px-4 py-6">
                             <h3 className="-mx-2 -my-3 flow-root">
            
            <button type="button" className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400" aria-controls="filter-section-0" aria-expanded="false">
              <span className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentyAV} default="Category" onChange={ (newtext) =>  {
        setAttributes({ contentyAV: newtext });
      }}
    /></span>
              <span className="ml-6 flex items-center">
                
                
      <svg
         className="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgawg }}
        >
      </svg>
      
              </span>
            </button>
          </h3>

                            <div className="pt-6" id="filter-section-0">
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-category-0" className="ml-3 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentBNe} default="All New Arrivals" onChange={ (newtext) => { setAttributes({ contentBNe: newtext }); }} /></label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="filter-mobile-category-1" name="category[]" value="tees" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-category-1" className="ml-3 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentpSl} default="Tees" onChange={ (newtext) => { setAttributes({ contentpSl: newtext }); }} /></label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="filter-mobile-category-2" name="category[]" value="objects" type="checkbox" checked="" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-category-2" className="ml-3 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentgfC} default="Objects" onChange={ (newtext) => { setAttributes({ contentgfC: newtext }); }} /></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-6">
                             <h3 className="-mx-2 -my-3 flow-root">
            
            <button type="button" className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400" aria-controls="filter-section-1" aria-expanded="false">
              <span className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentXnx} default="Color" onChange={ (newtext) =>  {
        setAttributes({ contentXnx: newtext });
      }}
    /></span>
              <span className="ml-6 flex items-center">
                
                
      <svg
         className="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgonI }}
        >
      </svg>
      
              </span>
            </button>
          </h3>

                            <div className="pt-6" id="filter-section-1">
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-color-0" className="ml-3 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentjih} default="White" onChange={ (newtext) => { setAttributes({ contentjih: newtext }); }} /></label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-color-1" className="ml-3 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contenttqY} default="Beige" onChange={ (newtext) => { setAttributes({ contenttqY: newtext }); }} /></label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-color-2" className="ml-3 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentCfu} default="Blue" onChange={ (newtext) => { setAttributes({ contentCfu: newtext }); }} /></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-6">
                             <h3 className="-mx-2 -my-3 flow-root">
            
            <button type="button" className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400" aria-controls="filter-section-2" aria-expanded="false">
              <span className="font-medium text-gray-900"><RichText tagName="span" value={attributes.contentvxL} default="Sizes" onChange={ (newtext) =>  {
        setAttributes({ contentvxL: newtext });
      }}
    /></span>
              <span className="ml-6 flex items-center">
                
                
      <svg
         className="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOua }}
        >
      </svg>
      
              </span>
            </button>
          </h3>

                            <div className="pt-6" id="filter-section-2">
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <input id="filter-mobile-sizes-0" name="sizes[]" value="s" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-sizes-0" className="ml-3 text-sm text-gray-500">S</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="filter-mobile-sizes-1" name="sizes[]" value="m" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-sizes-1" className="ml-3 text-sm text-gray-500">M</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="filter-mobile-sizes-2" name="sizes[]" value="l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-sizes-2" className="ml-3 text-sm text-gray-500">L</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                 <h1 className="text-3xl font-extrabold tracking-tight text-gray-900"><RichText tagName="span" value={attributes.contentzIn} default="Workspace sale" onChange={ (newtext) =>  {
        setAttributes({ contentzIn: newtext });
      }}
    /></h1>

                <p className="mt-4 max-w-xl text-sm text-gray-700">
                    <RichText tagName="span" value={attributes.contentDPT} default="Our thoughtfully designed workspace objects are crafted in limited runs. Improve your productivity and organization with these sale items before we run out." onChange={ (newtext) => { setAttributes({ contentDPT: newtext }); }} /></p>
            </div>
            <section aria-labelledby="filter-heading">
                 <h2 id="filter-heading" className="sr-only"><RichText tagName="span" value={attributes.contenttMz} default="Filters" onChange={ (newtext) =>  {
        setAttributes({ contenttMz: newtext });
      }}
    /></h2>

                <div className="relative z-10 bg-white border-b border-gray-200 pb-4">
                    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
                        <div className="relative inline-block text-left">
                            <div>
                                <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                    <RichText tagName="span" value={attributes.contentznA} default="Sort" onChange={ (newtext) => { setAttributes({ contentznA: newtext }); }} />
                                        
      <svg
         className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmch }}
        >
      </svg>
      
                                </button>
                            </div>
                            <div className="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div className="py-1" role="none"> <span className="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0"><RichText tagName="span" value={attributes.contentBQt} default="Most Popular" onChange={ (newtext) =>  {
        setAttributes({ contentBQt: newtext });
      }}
    /></span>
 <span className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1"><RichText tagName="span" value={attributes.contentUnP} default="Best Rating" onChange={ (newtext) =>  {
        setAttributes({ contentUnP: newtext });
      }}
    /></span>
 <span className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2"><RichText tagName="span" value={attributes.contentJzb} default="Newest" onChange={ (newtext) =>  {
        setAttributes({ contentJzb: newtext });
      }}
    /></span>

                                </div>
                            </div>
                        </div>
                        <button type="button" className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden">
                            <RichText tagName="span" value={attributes.contentUSD} default="Filters" onChange={ (newtext) => { setAttributes({ contentUSD: newtext }); }} /></button>
                        <div className="hidden sm:block">
                            <div className="flow-root">
                                <div className="-mx-4 flex items-center divide-x divide-gray-200">
                                    <div className="px-4 relative inline-block text-left">
                                        <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentMTe} default="Category" onChange={ (newtext) =>  {
        setAttributes({ contentMTe: newtext });
      }}
    /></span>
 <span className="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums"><RichText tagName="span" value={attributes.contentyWI} default="1" onChange={ (newtext) =>  {
        setAttributes({ contentyWI: newtext });
      }}
    /></span>

                                            
      <svg
         className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcpx }}
        >
      </svg>
      
                                        </button>
                                        <div className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <form className="space-y-4">
                                                <div className="flex items-center">
                                                    <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-category-0" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                        <RichText tagName="span" value={attributes.contentXGk} default="All New Arrivals" onChange={ (newtext) => { setAttributes({ contentXGk: newtext }); }} /></label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-category-1" name="category[]" value="tees" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-category-1" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                        <RichText tagName="span" value={attributes.contentukv} default="Tees" onChange={ (newtext) => { setAttributes({ contentukv: newtext }); }} /></label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-category-2" name="category[]" value="objects" type="checkbox" checked="" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-category-2" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                        <RichText tagName="span" value={attributes.contentHfH} default="Objects" onChange={ (newtext) => { setAttributes({ contentHfH: newtext }); }} /></label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="px-4 relative inline-block text-left">
                                        <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentnCV} default="Color" onChange={ (newtext) =>  {
        setAttributes({ contentnCV: newtext });
      }}
    /></span>

                                            
      <svg
         className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYvr }}
        >
      </svg>
      
                                        </button>
                                        <div className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <form className="space-y-4">
                                                <div className="flex items-center">
                                                    <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-color-0" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                        <RichText tagName="span" value={attributes.contentLCS} default="White" onChange={ (newtext) => { setAttributes({ contentLCS: newtext }); }} /></label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-color-1" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                        <RichText tagName="span" value={attributes.contentYzc} default="Beige" onChange={ (newtext) => { setAttributes({ contentYzc: newtext }); }} /></label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-color-2" name="color[]" value="blue" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-color-2" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                        <RichText tagName="span" value={attributes.contenteIg} default="Blue" onChange={ (newtext) => { setAttributes({ contenteIg: newtext }); }} /></label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="px-4 relative inline-block text-left">
                                        <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" aria-expanded="false"> <span><RichText tagName="span" value={attributes.contentxRG} default="Sizes" onChange={ (newtext) =>  {
        setAttributes({ contentxRG: newtext });
      }}
    /></span>

                                            
      <svg
         className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCVW }}
        >
      </svg>
      
                                        </button>
                                        <div className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <form className="space-y-4">
                                                <div className="flex items-center">
                                                    <input id="filter-sizes-0" name="sizes[]" value="s" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-sizes-0" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">S</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-sizes-1" name="sizes[]" value="m" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-sizes-1" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">M</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-sizes-2" name="sizes[]" value="l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-sizes-2" className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">L</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="max-w-7xl mx-auto py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
                         <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500"><RichText tagName="span" value={attributes.contentmKM} default="Filters" onChange={ (newtext) =>  {
        setAttributes({ contentmKM: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contenttOa} default=", active" onChange={ (newtext) =>  {
        setAttributes({ contenttOa: newtext });
      }}
    /></span>
        </h3>

                        <div aria-hidden="true" className="hidden w-px h-5 bg-gray-300 sm:block sm:ml-4"/>
                        <div className="mt-2 sm:mt-0 sm:ml-4">
                            <div className="-m-1 flex flex-wrap items-center"> <span className="m-1 inline-flex rounded-full border border-gray-200 items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900">
              <span><RichText tagName="span" value={attributes.contentrDD} default="Objects" onChange={ (newtext) =>  {
        setAttributes({ contentrDD: newtext });
      }}
    /></span>

                                <button type="button" className="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500"> <span className="sr-only"><RichText tagName="span" value={attributes.contentKwW} default="Remove filter for Objects" onChange={ (newtext) =>  {
        setAttributes({ contentKwW: newtext });
      }}
    /></span>

                                    
      <svg
         className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8"
          dangerouslySetInnerHTML={ { __html: attributes.svgdbD }}
        >
      </svg>
      
                                </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
            <div class="fixed inset-0 flex z-40 sm:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"/>
                <div class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                    <div class="px-4 flex items-center justify-between">
                         <h2 class="text-lg font-medium text-gray-900"><RichText.Content value={attributes.contentvAF} /></h2>

                        <button type="button" class="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"> <span class="sr-only"><RichText.Content value={attributes.contentaaw} /></span>

                            
      <svg
         class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgJhL }}
        >
      </svg>
      
                        </button>
                    </div>
                    <form class="mt-4">
                        <div class="border-t border-gray-200 px-4 py-6">
                             <h3 class="-mx-2 -my-3 flow-root">
            
            <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400" aria-controls="filter-section-0" aria-expanded="false">
              <span class="font-medium text-gray-900"><RichText.Content value={attributes.contentyAV} /></span>
              <span class="ml-6 flex items-center">
                
                
      <svg
         class="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgawg }}
        >
      </svg>
      
              </span>
            </button>
          </h3>

                            <div class="pt-6" id="filter-section-0">
                                <div class="space-y-6">
                                    <div class="flex items-center">
                                        <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-category-0" class="ml-3 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentBNe} /></label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="filter-mobile-category-1" name="category[]" value="tees" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-category-1" class="ml-3 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentpSl} /></label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="filter-mobile-category-2" name="category[]" value="objects" type="checkbox" checked="" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-category-2" class="ml-3 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentgfC} /></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-t border-gray-200 px-4 py-6">
                             <h3 class="-mx-2 -my-3 flow-root">
            
            <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400" aria-controls="filter-section-1" aria-expanded="false">
              <span class="font-medium text-gray-900"><RichText.Content value={attributes.contentXnx} /></span>
              <span class="ml-6 flex items-center">
                
                
      <svg
         class="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgonI }}
        >
      </svg>
      
              </span>
            </button>
          </h3>

                            <div class="pt-6" id="filter-section-1">
                                <div class="space-y-6">
                                    <div class="flex items-center">
                                        <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-color-0" class="ml-3 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentjih} /></label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-color-1" class="ml-3 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contenttqY} /></label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-color-2" class="ml-3 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentCfu} /></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-t border-gray-200 px-4 py-6">
                             <h3 class="-mx-2 -my-3 flow-root">
            
            <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400" aria-controls="filter-section-2" aria-expanded="false">
              <span class="font-medium text-gray-900"><RichText.Content value={attributes.contentvxL} /></span>
              <span class="ml-6 flex items-center">
                
                
      <svg
         class="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgOua }}
        >
      </svg>
      
              </span>
            </button>
          </h3>

                            <div class="pt-6" id="filter-section-2">
                                <div class="space-y-6">
                                    <div class="flex items-center">
                                        <input id="filter-mobile-sizes-0" name="sizes[]" value="s" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-sizes-0" class="ml-3 text-sm text-gray-500">S</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="filter-mobile-sizes-1" name="sizes[]" value="m" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-sizes-1" class="ml-3 text-sm text-gray-500">M</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="filter-mobile-sizes-2" name="sizes[]" value="l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="filter-mobile-sizes-2" class="ml-3 text-sm text-gray-500">L</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                 <h1 class="text-3xl font-extrabold tracking-tight text-gray-900"><RichText.Content value={attributes.contentzIn} /></h1>

                <p class="mt-4 max-w-xl text-sm text-gray-700">
                    <RichText.Content value={attributes.contentDPT} /></p>
            </div>
            <section aria-labelledby="filter-heading">
                 <h2 id="filter-heading" class="sr-only"><RichText.Content value={attributes.contenttMz} /></h2>

                <div class="relative z-10 bg-white border-b border-gray-200 pb-4">
                    <div class="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
                        <div class="relative inline-block text-left">
                            <div>
                                <button type="button" class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                    <RichText.Content value={attributes.contentznA} />
                                        
      <svg
         class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgmch }}
        >
      </svg>
      
                                </button>
                            </div>
                            <div class="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div class="py-1" role="none"> <span class="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0"><RichText.Content value={attributes.contentBQt} /></span>
 <span class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1"><RichText.Content value={attributes.contentUnP} /></span>
 <span class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2"><RichText.Content value={attributes.contentJzb} /></span>

                                </div>
                            </div>
                        </div>
                        <button type="button" class="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden">
                            <RichText.Content value={attributes.contentUSD} /></button>
                        <div class="hidden sm:block">
                            <div class="flow-root">
                                <div class="-mx-4 flex items-center divide-x divide-gray-200">
                                    <div class="px-4 relative inline-block text-left">
                                        <button type="button" class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" aria-expanded="false"> <span><RichText.Content value={attributes.contentMTe} /></span>
 <span class="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums"><RichText.Content value={attributes.contentyWI} /></span>

                                            
      <svg
         class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgcpx }}
        >
      </svg>
      
                                        </button>
                                        <div class="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <form class="space-y-4">
                                                <div class="flex items-center">
                                                    <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-category-0" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                        <RichText.Content value={attributes.contentXGk} /></label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="filter-category-1" name="category[]" value="tees" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-category-1" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                        <RichText.Content value={attributes.contentukv} /></label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="filter-category-2" name="category[]" value="objects" type="checkbox" checked="" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-category-2" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                        <RichText.Content value={attributes.contentHfH} /></label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="px-4 relative inline-block text-left">
                                        <button type="button" class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" aria-expanded="false"> <span><RichText.Content value={attributes.contentnCV} /></span>

                                            
      <svg
         class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgYvr }}
        >
      </svg>
      
                                        </button>
                                        <div class="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <form class="space-y-4">
                                                <div class="flex items-center">
                                                    <input id="filter-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-color-0" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                        <RichText.Content value={attributes.contentLCS} /></label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="filter-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-color-1" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                        <RichText.Content value={attributes.contentYzc} /></label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="filter-color-2" name="color[]" value="blue" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-color-2" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                        <RichText.Content value={attributes.contenteIg} /></label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="px-4 relative inline-block text-left">
                                        <button type="button" class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" aria-expanded="false"> <span><RichText.Content value={attributes.contentxRG} /></span>

                                            
      <svg
         class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgCVW }}
        >
      </svg>
      
                                        </button>
                                        <div class="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <form class="space-y-4">
                                                <div class="flex items-center">
                                                    <input id="filter-sizes-0" name="sizes[]" value="s" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-sizes-0" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">S</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="filter-sizes-1" name="sizes[]" value="m" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-sizes-1" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">M</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="filter-sizes-2" name="sizes[]" value="l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                                    <label for="filter-sizes-2" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">L</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100">
                    <div class="max-w-7xl mx-auto py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
                         <h3 class="text-xs font-semibold uppercase tracking-wide text-gray-500"><RichText.Content value={attributes.contentmKM} /><span class="sr-only"><RichText.Content value={attributes.contenttOa} /></span>
        </h3>

                        <div aria-hidden="true" class="hidden w-px h-5 bg-gray-300 sm:block sm:ml-4"/>
                        <div class="mt-2 sm:mt-0 sm:ml-4">
                            <div class="-m-1 flex flex-wrap items-center"> <span class="m-1 inline-flex rounded-full border border-gray-200 items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900">
              <span><RichText.Content value={attributes.contentrDD} /></span>

                                <button type="button" class="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500"> <span class="sr-only"><RichText.Content value={attributes.contentKwW} /></span>

                                    
      <svg
         class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8"
          dangerouslySetInnerHTML={ { __html: attributes.svgdbD }}
        >
      </svg>
      
                                </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
            );
            },
        });
        