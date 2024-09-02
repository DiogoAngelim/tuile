
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/circles-with-text', {
            title: 'circles with text',
            icon: (<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAFUBaADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAMEBQIGAQf/xABAEAEAAgIBAwICCAMGBQMEAwAAAQIDBBEFEiETMUFRBhQiMmFxgbEzcpEVIyQ1QqFSdLLB0TRi8CVTguFjkvH/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKREBAAICAQIDCAMAAAAAAAAAAAERAiEDBBJBYfATFDEyUXGBkcHR8f/aAAwDAQACEQMRAD8A9/1fq+r0jX9XYmZtb7mOvvaf/H4vF7f0y6pmvM6849enwitYtP6zP/hn9f6hfqPVs+a1pmlbTTHHyrHt/wCf1Zr3em6Ljwxic4uWEy9FqfTLqmG8TsTj2KfGLVis/pMf+HtOkdX1er6/q68zFq/fx296z/4/F+Z6+hn2NXPtViK4MEfavaeImfhWPnKx0DqF+ndWwZq2mKWtFMkfOs+//n9E6jo+PPGZ44qYIl+pgPDZvOX+km5fLs5dLo2Xa0NXPODJmpk/vLTE8WmmPj7URP4+UfUfpTtaW31OKdJjNqdMnH6+aNmK34tWLcxSa+eOfmY+k9f0LbWp0rZ0sensbFs9c+SJnLgi082rFeO23nnjmfzVer/Q3J1He6rvROvOzmy4MupOSbTWOytYmuSvHExMxPzBobP0h3P7XzaHT+m4M8YcWPLOTNuejzF+eIiO2fkl659I8fRt/R1b685frE85rxfiMFO6tO+fHmO68QzupfR3e2ev5+ox0/o25TNhxUiu5a0zjtXnnt4pPvz/ALOur/RLN1rqHUtrc3cmKM2CuDWpgyTERWPtfbiY8/b88R8AW+qdc6ro9Y1tDD0bDnjbtauDJO52d3bXunmOyePj8XOT6QdQnrGz07V6Vr5LatcU5LZN2Mfm9eeIjsnnjymnpe/n2/o/tbWTBOXp8X+szW0/btbFNOa+Pn588M/f+ju7k+km51Kmh0fcx54xdn1y1u/F2V4njik+/wCfwgHpOobmPp/T9jdz/wAPXx2yW/KI5Ymv9KqZPo1fqubRyY9imadedOL91vV7u2teeI9+Yn2+K59J+lbHWulx07DlrixZs1PrFu6Yt6UTzMV8T9rxHv4ZGX6JbdZ6hTW6hN6Z74drBk2Ld96bGOfeeIjmsxFY+YNPD1zawV25610u+lGtgnY9THf1sdqR7xFuI+1Hyc9N631DY2NaN7ouTV19uk3xZq5fU7OI54yRER2cx+M+fD5/Z/WOqa29r9bzauHX2NecFMOrzeImffJNrRE8/KPY6bqfSGMmtg6ln0a6eDHNL+hza2z44jnuj7MfHxPv+AKuL6WZ74cHUL9JvTpGfLGOm1OaO+Im3bW84+PFZnj48tD+3P7vrd/q3+Vc+O/+Lxji/wAvHvx8WRj+jnWZ6dr9Bz7GnbpODLWZzR3etkx1t3VpNeOInmI5nlN1HonWfrPV6dMyaU6vVoiMls82i+GezstMRETFvEcx7eQT4fpZrz1np/TtjXnD9f08exjy9/MRe/PGOfH/ALZ4n4+3CPZ+k+5T6P26xrdJpmw4rZozVttdk0il5rEx9meeeJn4cfi+5/orTY2r0zZI+qf2bi08dqzMZKXpaZi8eOI45iY8+7jX+ju/j+gmx0PLnwZNzLXLHq8z2TNrzbmfHPx+QN3pmxubOpGXe1KauSZ8Upm9WO3iOJ54j+i24xVmmGlJ961iJ4dgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Hs+K2DYyYb/ex2ms/nE8NXUp0nf1sddrJGjn14+3ascxmpHy+V/3/AG2Ppf8AR/LbPbqWljm8W85qV8zE/wDFEfu8c+k4845+OMsZqWv4NDqnUvrnZg18foaWHxiwx/1T87Sp4MVs+xjw0+9ktFY/OZ4RvY/RD6P5a569S3cc0ivnDS3iZn/imP2Xl5MOn47Pi9oA+abFWu/htp5tmYtWuCbxkrMRzE19/wD5+KO/VMGKlsmzHo0js477V5mbR7cRPjhT3NTPbqc69Mdp1dy9MmW3His194n+biv+7jqGvlvbqdowXvE3wWrEV57orMc8fPxyqNe23rVnHFtjDE5IiaRN4+1E/L5ur7GDHlriyZsdcl/u1taImfyh57rFc2xOzXHq5K1vhr6XZq91skcc8TM/d4+Xu+bupmts7dctdifXinZOPXi/P2Yjjun7sxPPvMfMoekvemOk3yWrWtfM2tPEQ4ja15wevGxinD/9zvjt/qrdVxRk6dNL1zX4tWecVYtaJiYnnj4/kyL4drJhx5Jw2jHj2ZtNqa3Frx28Recc/Kf/ACUr0M7GCMHrzmxxi9++bR2/1R6u3j2r5q4uJjFaK90TzFuaxPMf1YuLWtiw4M18OxmwV2r5L47YYifNeItFI+ET5+fx4X+jU7cm9eNa+DHkzd1K3p28x2x54KRdnc1YvNJ2cPfHPNfUjnx7/wBOHM7eKa4bYbUzUy5OzurkrxHifx8+3tHlkW0O/FE21Zm1upTe3OPzNe+fP5cfoknWyU3p9PBaMf8AaFbxxSeOPS4mfy5+JQ1M21TDtYcFo/i1vbu58RFeOef6pIy457OMlJ9SOaefvR+HzUOpYMmbe1/TpaY9HNWbceImYrxzKhj+sbEdPw49fYxZMOvfHa98c1ituyIjz+cFK2vrmrxkmNnFPpRzfi8fZ/P5Gtu621ix5MOaloyRzWO6Ofxjj5xyzNDHhvjwYI6bkx5ceGaXvfH2xWeOJjn/AFcz+fzQ603wYelZraueK69bYs1YxT3Raax5495jx7lI277WvjxzkybGKlIt2za14iIn5c/N9y5q49a+ePt0rSb/AGZ94iOWB6V7YaZr4drDk+s5r0mMHqdsWn/VX38x8YaWCuW30ftW+vGLJOG0elSvHHieOI+H5FKs03deceG2TNjx2zVi1KXvETPKTJsYMV60y5sdL3+7W1oiZ/J5ndxbN9a+H6rkifquOtOzW75yT2+Ym3+nifh7re1imuTejPpZc99nFWMNq4+7/Txxz/p8+Skbc7GCuaMM5scZJniKTaOZ+PsYtjBmm1cObHkmni0VtE8fmx8Gjn56h3U/xNtemOmWY97enxPE/mqa+lnyYZrijYrmrqXx/a14xRzMR9nn4+fzKHoJ3dX0smWNjFamL781vE9v5utbYw7WCmbBeL0tHMTE/wC0/iw9HUtkvbimeJjVnHMX1oxV5njiPxlodLzeno6WCdbPS007Lc4piKzWvnn8/hPxKGiAigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADF690jp2Xp25s21MfrUw3vF6x2zzFZmJnj3/VtKfWf8k3/wDlsn/TLZxZTjnFSSo9B6R07F07T2a6mP1r4aXm9o7p5msTMxz7fo2lPo3+SaH/AC2P/phcOXKcs5uSABrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABT6z/km/wD8tk/6ZXFPrP8Akm//AMtk/wCmWfH88B0b/JND/lsf/TC4p9G/yTQ/5bH/ANMLhyfPIAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU+s/5Jv/8ALZP+mVxi9e6v07F07c1rbeP1r4b0ilZ7p5msxETx7fq2cWM5ZxUEr3Rv8k0P+Wx/9MLjF6D1fp2Xp2nrV28frUw0pNLT2zzFYiYjn3/RtHLjOOc3BAA1gAAAAAAAAAAHv7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMPcy5+rdSydN1ct8OrgiPrWWni1pn/RWf3/APnOlpdO09DHFNTXx4+PjEeZ/OfeWf8AROIt0WNmf4mzlyZbz857pj/sy/pr1fc1M+HT1Mt8NbY/Utek8TPmY45+Ht/u7I48s+T2GGoj1Mp5vSbvTtPfxzTb18eTn4zHmPyn3hm6eXP0nqWPpu1lvm1c8T9Vy382rMf6LT+3/wA4zfoV1fc28+bT28t81a4/Ure88zHmI45+Pv8A7NT6WR29FnZj+JrZceWk/Ke6I/7k8eWHJ7DPcT6iTzbQDjV47U0c2z1HPk1dOa5adSva236kRxSLea8c8z+XHCDJj5389q60Y736pNK7vqcTjnmJ7eI/X8PL2uPFjxRaMWOlO602t2xxzM+8z+Li2prWx3x218M0yW771mkcWt85j4z493bHV73Hr1+Ep53YxaGzt9Xv1a9YzYZ4xd1+Jx07eYmv6q0Ys29v6H1jSx7mWem1tamXJ2f6vvc8T5/8vVZ9LU2clcmxq4ct6+1r44tMf1Selj9b1vTp6vb29/bHd2+/HPyYx1NRr1rwKeZ6nSMeXqtK0ikV6bSIrE+K+/hZ67lxZfonkrjyY7zFcXMRaP8Air7tu+tgyTecmDHacle282pE91flPzhFXpuhTHfHTR1q0ycd9YxViLceY5jjykc+N4zPhMfwUrdDwY8GHLGPX1MPNo5jXyTeJ/PxDA2MWTPiy4sOWcWS3W7RS8f6Z7J4l6zX1dbVi0a2viwxb3jHSK8/0ffquvE8xr4ufU9X7kff/wCL8/xTHn7cpy+pTyGfaybWt12+xinFnpr4qZafK0TMTx+HxW9rWnT6Lln6jj0MeXJirmthyzaZx8+Z9o49/wDd6S+rr5JyTfXxWnLERk5pE98R7RPzSWpW9JpesWpMcTWY5iY+TKepjVRr/P6KeZnFqavU82HpU1jDfRvbNTHbmsTH3Z/P3Vfo9j7ep9OimtGp/hJyXtGTn6zExER49omJ8/N6rBpamvS9NfWw4q3+9FKREW/P5uo1teJxTGDFE4Y4xT2R9iOOPHy/Q95ipj6lPD62fPT6O26VEzznp69LfLFxNrx/Wsx/+S51bJfY0emaOHHnyWxakbExhpNpi3bxT9OeXq41NWtYrXWwxEUmkRFI8Vn3r+X4OsevgxWm2LDjpaaxWZrWIniPaPyhlPVY93dGPn+Snm+pYtLqev0jqFsFLX2tnFTJPzjiea/1j/ZJvVtp9S3K6NeycXSv7uK/6eLW9m9GrrVx0x118UUx276VikcVt84j4T5ny79LH63renT1Zr29/H2uPfjn5NfvFa8CnmMGLR1s3RsvS7xOxmtEZe2/M5KTWZtNo/CWbtZNjV6PvRbuyam3nvWP/wCLJGT9piP6w9rg0tTXy2y4NXDiyW97UxxEz+sOp1da2G2G2vinFaebUmkdszzzzMfm2R1URNzF/f72UlAcSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMPolvqG9tdIzfZ4vObXmf9eO3niPylc6t0fT6vjrTbrbup929J4tDvqXTMPUcdO+bY82Oe7FmpPFqT+CjGX6QaNJrk19fqFKx4yVyelaY/GJ8f0dN9+XfhNZfpFvpPR9PpGO1NStu6/3r3nm0qfW7fX97V6Rh+1zeM2xMf6MdfPE/nL7OX6Qb1Irj19fp9LR5yWyeraI/CI8f1Xum9Mw9Ox37JtkzZJ7sua882vP4l9mXfnN5fsXQHMrJ1sFuofWc2XZ2KWrmvjxxjyTWMcVniPEeJn4+eU9NrNTLs4Mlq5J18FL9/bx3WmLc8x/+Jm6VS+XLfFs7GCuaectMVoiLT8/MeJ/J8y9IwXmPSy5sFfSjDauK0RFqR7RPMT8/dUQ62/u7WfHXHTBFPq+PNk5ieftc8xHn8P8A/UWDq+xfX2cl/q3qYsFsno8Wrelo+Fon3j8Y4aOtoYtaeaWvP9zTD5n4V549vj5RU6Vi5mc+fPsc47Yo9W0T21n38xET+smgz72bHlpXHijJNta+btj3m0dvER/Vz0rey7nfGXJr3msRMxji1bVn4xNZ8/q+4ek48d++21tZLRinDWbXiO2s8e3ER58e6XV0K6+e2e2bNmy2pFO/LMcxWPh4iBVXY6lnxdUnW/uMVItWKxli0Tl595rb2/Dj8EF+uXjcyVpXHOLHn9Gadtu+fPE2ifb9F/Y6bTZy2tk2M/p2tW1sPdHZMx7e8cx7fCT+zaRsWyU2NjHS9/UtipfitrfP258/HyaRSv1LqHM3pj1pxztW1qxPdE/emItM/wDZ9v1LepX0fT17bEbUYJnzFJiad0T817+zsPZFe7JxGx9Y94+9zzx7eyvvdL9fJS2K96zfZrmyWi3E14pNfs/7GhBn6vm1MebFs0xfWKZaY62rz2T3xzE8eZ+E+Pwc16xtXx9mKmG+b16Yov22rS0WiZ58+fHC7HSsE4clL5c18mS8ZJzTaO+LR7TExHEcfk6jp1OKersbGW1csZe69o94jiI444iPyNDrcz7Gr022eYx3y4oi14iJiJiJ+1x5+XKnt7tstssVrW2DFmw0i3MxzabRM+Yn4RMNa1YtWa2jmJjiYn4qWHpWvh0aalLZOymSMndMx3TMW5jnx+ER+QqKvUc02pg7KfWJ2pw2jieO2Ptd3/8AXj9ZVtLrmTZ2MH2cc4c95rFa1t309+Jmfafb4fNpxo4Y6jbeju9W1Ozjnx+fHz8RH6I9fptNfJWcexselSZmmHv+xXn9OZj8Jk0ijj6l1G3T9bZnHq921kpTHX7XEc88zM8/hD71HquzozxbJqTbHji16cWm15+PHH3Y/Plep07DTV1deLZOzWtW1J5jmZj5+PxR7XScWzkz3nPnxxsViuWuO0RFuI4j3g0PnXMuavRc+XWvFLdnPM888T8uPaVPb6hm6XjjDW+pPo44tOP7c2t+Xv2/nPLW2dXHs6d9XJNopevbM1nyrbXScWzkz3nPnxxsViuWuO0RFuI4j3ggc33N3Ns56aOPDNcEV7oyzPN5mOeI49vEx5lV2M1p3rViJpMbuGJ4tPnmkT588f0Xs3S8eXJa9c+fF6lYrkjHaIi8R7c+Pl48cOrdNwWzTl7skTOWmXiJjjmscRHt7eAZ1eo5tfQ1rY648VMl8vdlyRe9acWniJ88+fxlJk3s1MuXNjw0y5Y06XiMd7WrMzaY8fOPj7crcdMrTDjx4drZxenNpiaWjz3TzPMTHE+/yfKdJ18ePsxZM2P+5riiaX4mIiZnnn58yaH3pe3fbx5LXy6+XttxFsPMfpNZ8xKjfrl43MlaVxzix5/RmnbbvnzxNon2/Rp6mlTVvlyepky5c0x33ycczxHER4iIR/2bSNi2SmxsY6Xv6lsVL8Vtb5+3Pn4+TQj6bk28m3u12MmO2PHl7axFZiY+zE/P28/1Vd7rWTBt56Yq4pprzEWratptk8czxMeI9/i08WpXDt5timTJ/fcTanMdvPERz7c88QizdNplz5MtNjYw+rx6lcV+Ivx+nMePHjgEWjm28nVt2mTJS2Cnb217ZiY5jmPj/VHv9Sz6+96MehipxWa2zxaIyzPvEWjxHH4r1NSmPeybVL5ItkrFb05jtnj2n58otvptNu9+/Y2K48kRF8VbR22iPzjx+nAqtsdQ26/W8+DHhnX1Ldt4tM99+IibcfCPf8Uex1Pdp9azYcevbBr5a04tzFr90V+Pw+8t5+lYc2TJacuemPNMTlxUtxW/Hz8c/COeJhJk6dhyYtjHNrxGxkjJbiY8THHt4/8AbBpFHN1XZ1K7OPZpgtmxzjilqd0Vnv5948z44lZ6Vv33LZ8eTsm2Ka/bpW1a2iY+U+fglz9OwZ7573tki2aKczW3E1mszMTHynmUmrrfV++bZ82a15jm2W3PHHyiOIgVm5+pb9J2MmLHr2w4NiMPbbui1ueIiefaPNodW6lt4pza+WmG+zXLjx45rzFJ745iZ+PjiVy3TsNsWbHNsnGbNGa3mPFomJ8ePb7MPmfpuDPfNe1skWyzS3NZ4mk19pj8TSKeXqW7h78FseC2zXLipExzFLReZiJ+ce0otvrOxr58uD/Dzk16RbJ9i/25mOeK8c8ePjK9XpWGPtXy5smSctMtslpjm019o9uOHex06mbPbNTYz4LZKxXJ6VojviPbnmPf8YNCzhyRmw48sRMResWiJ945h2ipg7M05IyZZiaRSKTbmscfH8/xSooAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4z/AMDJ/LP7O3Gf+Bk/ln9gMH8DH/LH7O3GD+Bj/lj9nYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjP/Ayfyz+ztxn/gZP5Z/YDB/Ax/yx+ztxg/gY/wCWP2dgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOM/8DJ/LP7GXLXHEc8zM+0R7yimuxlrMWtXHWY44iOZBLg/gY/5Y/Z2rxXYxViK2rkrEccTHEpcWWuSJ45iY94n3gHYAAxo65f6zOO2pX0vrU63dGaJtzzxz28ey1/aX+H383o/+jtavHd9/ivPy8e60L4ycvV8vr0w62rXJknDXLNbZYrM8/CvjzKXP1T0smak68849T6z9q3E/H7M/L29yhojN1usY9mulbFj5+s2tS0TbzjtEczE/N80Op59y8T9Ux0wza0Tf1+beOY+7x+BQ0xl9O6rl3rY711IjXyc8ZK5YtNePbuj4cmh1bLvZKWpqf4e9prF4yxNq8f8AFXjxyUNQVs+36W/ravp8+vF57ufu9sR8P1UNXr2PZ0cexTDxec1MV8c3817p8Tzx5hKGwM3W6js7O1lx4tKno4s04rZJzcT4957ePxRZOs5a1y7FNK19PFeaWy+pETPE8TMV48xH5rQ1xlbXVs2HPsUw6cZsevjrkvf1e37MxM+I4/B3h6vjzdSxakY5iM2CM1LzPvz544/Ln+hQ0hnaPVsW39cv2dmLVtMd/dz3RHx/D2canVc25oWz4NOPVpbi2K2XjiOOYnnj5THwKGoMjH1jNPSrdQy6VaY/s9kRm5m3NuPl44SbHVM8Z9imppTnprfxb+pFfPHPERx58FDTGXbreCu1p45rPp7ePvrkmfu8+0TC3pbf1uM89nZ6Wa+L3557Z45ShZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBgj1Ml80+fPbX8IToNPxg7fjWZif6pwEGePTyUzR8+234wnQbnnB2/G0xEf1BOADz/8AYu3OxktEalO/anNGevPq1rM88R4/7p9np2/3buHVvr+huTza1+e6nMcW4iPdYt1jFX1bW1tmMOHJOO+XtrNYmJ4mffnj9F2djBXNXDbNjjLbzFJtHM/ou0ZXUul59isYseLUy4oxRSk5uYvjmPjExHl1k6Vnn1P72l+7Q+qxa0zzNvPmfw8tH63rerGL6xi9SZ4infHMz8uH36zg9f0PXx+t/wDb747v6FqzKdGvj6jp7eK9axjrxmpzPFrRXti0fi56Z0vY088TfBozxa8+tXmcnnn8Px4XY6prZIv9XvTLbHkjHasXrHvMRz5n28/q6wdR18uW+K2SmPJXLOOKWtETaY+MQbRn63StqvUsOzlrq4px93fkwcxbNz8444j5/Ew9K2v7Rw7GWupjtivNr5sPNbZY+Uxxx+bYnNiitrTlpFaT22nujis/KXM7GCM8YJzY4zT7Y++O7+haoNjVyZep6ezWaxTBXJFomfM90Rxx/RmR0DLXBoTXJSufXtX1eJntyVi3Py94+Dcy5ceGk3zZKY6R72tPEQVzYrdnblpPqfc4tH2vy+ZYz9HpOLDtbGzsYsV819i2THePM1rPtH5+6vfpm/Gvm0MOXBGnlvM98899KzPMxx7T8WzW9L89lq27Z4nieeJ+SP63rerOL6xi9SJ4mnfHMT8uCxk73QY28u1fmkTbHSuCeZ+zNfnHtxPj5utvpW1sXvnx3w4s/p4/TmszxW9eefh7cWmGvGbFNa2jLSa2ntrPdHEz8oQ13cMYfV2L48Fe+1Im+SvEzEzHvz+HsWjOt0bNTV29bXyY6Y8/pUieZ5ilaxFvh7zxP9U2l0vJpbua+LPbJgzYoi3q25tFo8R8PbhpxaJrFomJrMc88+EVNvVyUvfHs4bUp960XiYr+fyLVn26Znn6PU6f34/VrFeZ5nt8Wifl+Bl0uoYc+19Qvr+ltT3T6nMTjtxxMxxHldyb+pTBlzTsYrUwx9ua3iePw/P8HUbup6FM07OKMeT7tpvERIM+Oi078WK81vr01JwW5+9M8xPP+3Kx0bSzaGrkxbGWMt7ZbX74588/GfxX/f2CwAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQXi2HLOWkTalvvxH7paZaZI5paJdINjDjnHe00juiszyCW+WmOOb2iEVItmyxlvE1pX7kT+5r4ccY6Wikd01ieU4AAMTW6Zl2Y26bOfPTXvtXt6MVisXjn58c8SqZ9LPO3tY8n1juy7EXx2x68W8eOPtz7ccfN6YW0pgZNO31PdyV1revO9F6W7Ptcd9fMfhxz/uhz49nJ1Gn+HvSa71bTFNbxNe7783+PMPShZTBtgvWdvDGvk7p3ceWJjHPE07qe0/hxKDNhmcfUsH1DNbYz7EzhyelPHw4nu+ER7vShZTz23Gamv1DU+rbF8mbYjJS1MczWaz2+efb4S7yYr06rPo6+W/fs1temXBzWPbm9cke3EfCf6N4LVk9cw5smXTy075xYr2m8UxepMcxxE9vx4/7qmvhyaldPY9LZvipsZbWj0eLVi1ZjmKR7Rz+70IWM/o0X9LZvfFkxeps3vWMleJ4njieGPWlcWLpuvk08lNnFt19TLbHxEzzPM93x5eocZMWPL2+pWLdtotXn4THtJYwcXrRh0tOdXY9TDud17enPbFe6088+3xh8vr2rhw3vj2KZKZc/bauv6tYi15+9X38xxxMPRBaUzqevH0f/wDSUjN6E/3ER9nnj24/7MS+vs5I25phzWrbT7I/wvpRNu6PER8eIesC1Yu7pT9Y2qa2vxTJoWpEVrxWbczxHy5VdjFkvm19j0s9ME6vp9v1X1JrbnzE1mPHPz+L0gWKXTucGtralsefmMPPfeviOPhMx7T+H4LoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjP8AwMn8s/s7cZ/4GT+Wf2AwfwMf8sfs7cYP4GP+WP2dgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOM/8DJ/LP7O3Gf+Bk/ln9gMH8DH/LH7O3GD+Bj/AJY/Z2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg2M2OMd6zeO6azHBebZss4qTNaV+/MfslpipjjilYgEWvmxzjpWLx3RWI4Tub4qZI4vWJRUm2HLGK8zalvuTP7AnAAGDHTdKPpPNI16dsa0ZYj/398+VPNbcjpfVq48WGdf6xl7rTeYtHn4RwtI9UPM7mGmbrMxfBq5eNbH4z5JpEeZ9vBm2p6d17c2+OcEUpjtWPnNOa/wC9eP1KLemHjpw5KdLnFsdmTJPU6+pF54raZrHPM/LmXpOk4qYdSa0xYMUTeZmuC/dX4fH5lKugIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINPzg7vjaZmf6p0GCfTyXwz8+6v4wnAQbnjB3fGsxMf1ToM8+pkphjz57rfhAJwAc+nj9X1eyvqdvb38eePlz8nP1fB6d8fo4+zJMzevbHFpn3mY+LF07zl3c8ZadRyTG1etb0y29Osd3iOO72j8kut1fJk6li17X1slc03iIxd0zTiJnzafE+3wWkaWXR089otm1cGS0RxzfHEzx+rqdbXnu5wYp7uO77EeePbn8vgo4eo5L6vTs160j61P95xE+PsTbx/Rzh2t/PrRs3w4Pq2bHa0VraYvSOOY5n4/px7ir+TU1slbVya+G9bW77RakTE2+c/j+LrDgw69Jpr4seKszz20rFY5/Ria2Xcvua8afpV7un47zGWbTWPM/jzz+P4LvTupX3M9KTjrSJwepMfGLRaazH5eChpDCt1na+r6uSY18MZsPfOTLW3ZNufu8x7fnLR6ht5NXpd9rHSlskRWYrzzE8zEe/wCpQuDHz9U2dGu1G7TDa+LHXJT0uYiYtbt4nn5S4x9ayxi2PUpjy3x1rNLY62rW02nt4nu+U8FDbFbUtu9967lcMxxE1vi5iJ+cTEszb63kw7WeMdcc48F4pNJrab39ueJjxHv8ShuDGy9S3afWc9aYPq2tnjHaJ577R45mPPHxI3NimfJi1aYu/Ju2xc5JtMfcieff/aPBQ2RjYupb/Nb5set6ddn6teK93Mzzx3R8o9vC31G802dCe6Yj157uPjHZYoXhh6XW8mxsYfUrj9LPzxWtbd2PiJmOZnxPt8E2v1Hbt9Uz58eGNfbt20ivPfTmJmvPwn2KGsMzqnUr6uxi18U4q3vWbzfJW1oiI8ccV8+eVfHv7m1sdMvimmLHnrfvpaszzNff/wDRQ2wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHGXFXJEc8xMe0x7wim2xirM2rXJWI55ieJWHGf8AgZP5Z/YEUW2MtYmta46zHPMzzKXFirjieOZmfeZ95MH8DH/LH7OwAAQ62tTWjLFJtMZclsk93zn3/RU1+kYtfNgvXPsWrr8+lS1o7axMTHHt592iAzsHR8ODLhtXPsWpgtM4sdrRNa8xMce3PxfcXScWKYrGfYnFWLRTFN/s058ePHM+/jnloBYzp6Rii+K+LZ2cV8WCuCLUtHmsfPx7vs9IwV9L0MubBOLH6fOO0c2rzzxPMfP4tALGdPSMca+PBj2tnHjpi9KYreOLV/GJjjn8Y4Wc2lhy6Mac91cURWsds+YiOOPf8lgBU2en4NnJkvl75nJijFMRPHERMzEx+PMuY6bS2HLi2NjYzxliKzOS/wB3j244iIifxXQFbV04173vbPmz3tER3ZbRPER8I4iIR5em0vnvkpsbGKMsxbJTHfitpj4+3Me0e0wugKd+nYb6+zhm2Tt2cnqXmJjmJ8e3j8Ifa9Ow1zxmi2TujPOfjmOO6a9vy9uFsBU/s7D2TTuycTsfWPePvd3PHt7Jc+vTPkw3vNucN++vHxniY8/1TAKWt02mtkpNNjYnFj57MM3+xXn9OZ/DmZc4OlYcGXHaMue+PDMzixWtzWkz8vHPx8czK+ArbWlXYyY8sZcuHLjiYi+OYieJ94nmJiY8Q4np2OY1pjNni+tMzW835tbn3iZn35XAEeDF6NJr6mTJzabc3nmY5n2/JIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjP8AwMn8s/s7cZ/4GT+Wf2AwfwMf8sfs7cYP4GP+WP2dgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOM/8DJ/LP7O3Gf+Bk/ln9gMH8DH/LH7O3GD+Bj/AJY/Z2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjLlrjiOeZmfaI95RTXYy1mLWrjrMccRHMvuCPUyXzT589tfwhOCvFdjFWIrauSsRxxMcSlxZa5InjmJj3ifeHaDPHp5KZo+fbb8YBOADIjrWWM1u/S4167M6/qxliZ55457ePZ8t1rLS+a9tL/DYdj0LZIy+eeYjnt4/GPi70+i4cexl2NmlcmW2xfNj4vaYrzPjx7cq1uhX9e+1X0Z2Prk5qd0z2zT/hnx4n3+C6RbjqWxffza2HUx2rhvFLXtnis+YifEcfi+ZOsenq7WSdefVwZ/RjF3+bzMxxMTx8eeUX9mbFeq5tqNfRy1yZK3rbJM99OIj28fg7z9KyZet49uL0jX5rfJSfe16xMVn/AHj+hodbXV51670/V4tOpbHXjv47+/j8PHHLq/Us+DVnPsauOtYyVpPZn7uImeOfb4cx4Q73StjYr1KKWxf4q2KaRaZ4jt4558fg7r03Jfpm1qZNfUwTlrMV9DnjnjxM+I+PBoc5OuUpO9FcE2tq2rSsd3HqTM8ePHjiWv8Amw6dDyxk6fe+Wk2wzNtieZ/vJ7u6OPHn7XLcJUAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQafjB2/GszE/1ToLxbDlnLSJtS334j90tMtMkc0tEg6QbnnB2/G0xEf1S3y0xxze0QipFs2WMt4mtK/cif3BOACvr7mHPN61nttXJbFxbiJtNffj5u77Ovjpa+TPirStu2bWvERE/L82LWmbX2abN9fNOOm7mm3bSZnttExE8e8wj9K98U5r4dvDb63kyY7Rg7+2Jj3tT3mJj5LSNrJ1DUx58OG+fHFs8c0+1HEx/wDv4JY2MFs04YzY5yx70i0d0foxsOPJW3Ss+bS7IpOStq48U/Z5+7M1+Hz/AA5R4MF4pq631TLG3i2vUyZpx8RMd0zNu748x44KG9ly48NJvmyUx0j3taeIhBm6hqYbYYybGOPWn7E90cT+PPyU+uYc2TLp5ad84sV7TeKYvUmOY4ie348f91TFrTgw6macOfJjrtXvMTh4tWtqzHise0c+Shv5MlMVJvlvWlI97WniIVNzqmtq6tc/qUyRktFccVvX7U8/Pnjj5y46vjtaNXJOG2bFizRbJjrXumY4mInj48TMTwz51r5Ztlx6t6Ycm9ivTHbHxMRHEWtx8IngVfnq+KdjJgx1re2LF6l+MtYiJ4mePf8ADzPtC3O1gp6cZc2PHfJETWtrxEz+XzZmzrXnJ1iaYLf3mtWuOYp96e23MR8/ginHXFm2I29DLs+vjxxj7cc28RWImvP+nzzIjX+tUrfPGWa46YZiJva9ePMc/Px7/FLiy482OMmK9b0n2tWeYn9WFt489Mu1autM0tsYp7pxTk7YjHH2oj48T4WugY8uPBterTJXu2bWr34+yZiYr54+BSr313U5mPrWDmImZj1I8RHvL7O1rRgjPOxijDPtkm8ds/qxsGhH1bp831Ptxt3tk5x+Yj7fEz+H3f8AZxkxZ8M2rXWtXFO3kt3xrzkmkcRxNa/KfPkpG5OzX1cFcfbeuaJmLxeOPEc/Pz+j7TZ18lr1x58VrU+/FbxM1/P5MDV1dr0NSkYsuO8fWYibU7eznntmePEOsWGb11KYNHLhvr4b1zTOPt5+xxxz/q5nyUNv65qzjtkjZw9lOO63qRxHPtzLq+zr0wxmvnxVxT7Xm8RWf1YebSyY9DpVseK2OmKsTmrTD32i0095r8eJ5/q+Rq+npYbcblZjPe9LfVons5j444+E+fh/Qoegi9LY4yVvWaTHPdE+OPny4xbWvmvNMOfFktEczWt4mYj5qepGSOhT6uCuG3p3+xWvbEe/E8fDn34/FmaOP18HTaampkw5cWOZvmnH2xxNJj3+PMzElD0GPYwZMlsePNjvkp96tbRMx+cOI3dSYmY2sExHHM+pHjn2/ZkaOKZv03Fj0suHLrc+vktj7Y+7MTHP+rmeJ8OcOhx0fpmKdWefWpbNWaefjzNo/wDJQ2p29WPT52cMep5p9uPtfl80t7VpSb3tFaxHMzM8RDD3cMY8/UKZNHJmnYx1rgmmPuiPs8cc/wCnifK3vUz06JXH6UZ8sVpW8TTv+Mcz2/Hj34KVdps4MmGc2PPjvjj3vW8TEfqjwb2HY2b4cNq5Irji/fW0TWeZmOPH5MGmtsXru3nDmy4pzYck0nB6c5a1+9xX9Gj02It1faz4tXJgxXxUiJvjmndMTPM8f0KRoX29bHk9PJsYq3meO214ieflx+sOsmxgxZK48mbHS9/u1taImfyhj7ml6sdavOtNr3ivpT2czbjHHHb+vyR7eK3/ANQx5tLLmzbNY9G9cfdH3YiI5/08TzPkobV9vWx5PTybGKt5njtteInn5cfrCW1q0rNr2itYjmZmeIhg5tG1sHV5yYJyZrUpFLdnM2mMcfd/X5L/AFbFky9OpxjtliuTHfJjiOZvWJiZjj4/kKtV29W9ZvTZw2rERMzF4mOJniP9/Du2XHW1q2yUia17piZ9o+f5POZ6/WM3UZ1NTJSZw4rRSadk34vMzMR+nH6J9vJm2c23nw6WW1Z18dIjNhn7X25mfsz78RPt+BSW2qbWvkw2zU2MVsVfvXi8TWP1dYsuLNjjJhyUyUn2tS0TH9XnMWve8dQtlx7Vsd5w2pamtFJmYmfMUn3iPHMe7R6Zly4cN5y615jJnitb0wTSb8xH27V+EfiUNUBFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEd8GK882pHP9AApgxUnmtI5/qkAAAAAAAAAAAAAAAAAAAAAHy1YtWa2jmJjiYfMdK48dceOsVpSIrWI+EQAOgAAAAAAAAAcRipGacsVj1LVis2+MxHtH+8uwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z" />),
            category: 'common',
            attributes: {
  "contentYXu": {
    "type": "string",
    "default": "Create account"
  },
  "contentlLB": {
    "type": "string",
    "default": "Vitae sed mi luctus laoreet."
  },
  "contentUzE": {
    "type": "string",
    "default": "Profile information"
  },
  "contenttSu": {
    "type": "string",
    "default": "Cursus semper viverra facilisis et et some more."
  },
  "contentIVn": {
    "type": "string",
    "default": "Business information"
  },
  "contentWvb": {
    "type": "string",
    "default": "Penatibus eu quis ante."
  },
  "contentAwz": {
    "type": "string",
    "default": "Theme"
  },
  "contentywQ": {
    "type": "string",
    "default": "Faucibus nec enim leo et."
  },
  "contentAeB": {
    "type": "string",
    "default": "Preview"
  },
  "contentyUb": {
    "type": "string",
    "default": "Iusto et officia maiores porro ad non quas."
  },
  "svgklo": {
    "type": "string",
    "default": "<path fill-rule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clip-rule=\"evenodd\"/>"
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
            value={ attributes.svgklo }
            onChange={ ( value ) => {
              setAttributes({ svgklo: value });
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
        <nav aria-label="Progress">
            <ol role="list" className="overflow-hidden">
                <li className="relative pb-10">
                    <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600" aria-hidden="true"/> <span className="relative flex items-start group">
        <span className="h-9 flex items-center">
          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
            
            
      <svg
         className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgklo }}
        >
      </svg>
      
          </span>
</span> <span className="ml-4 min-w-0 flex flex-col">
          <span className="text-xs font-semibold tracking-wide uppercase"><RichText tagName="span" value={attributes.contentYXu} default="Create account" onChange={ (newtext) =>  {
        setAttributes({ contentYXu: newtext });
      }}
    /></span>
 <span className="text-sm text-gray-500"><RichText tagName="span" value={attributes.contentlLB} default="Vitae sed mi luctus laoreet." onChange={ (newtext) =>  {
        setAttributes({ contentlLB: newtext });
      }}
    /></span>
</span>
                    </span>
                </li>
                <li className="relative pb-10">
                    <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true"/> <span className="relative flex items-start group" aria-current="step">
        <span className="h-9 flex items-center" aria-hidden="true">
          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full">
            <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full"/>
</span>
                    </span> <span className="ml-4 min-w-0 flex flex-col">
          <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600"><RichText tagName="span" value={attributes.contentUzE} default="Profile information" onChange={ (newtext) =>  {
        setAttributes({ contentUzE: newtext });
      }}
    /></span>
 <span className="text-sm text-gray-500"><RichText tagName="span" value={attributes.contenttSu} default="Cursus semper viverra facilisis et et some more." onChange={ (newtext) =>  {
        setAttributes({ contenttSu: newtext });
      }}
    /></span>
</span>
                    </span>
                </li>
                <li className="relative pb-10">
                    <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true"/> <span className="relative flex items-start group">
        <span className="h-9 flex items-center" aria-hidden="true">
          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
            <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"/>
</span>
                    </span> <span className="ml-4 min-w-0 flex flex-col">
          <span className="text-xs font-semibold tracking-wide uppercase text-gray-500"><RichText tagName="span" value={attributes.contentIVn} default="Business information" onChange={ (newtext) =>  {
        setAttributes({ contentIVn: newtext });
      }}
    /></span>
 <span className="text-sm text-gray-500"><RichText tagName="span" value={attributes.contentWvb} default="Penatibus eu quis ante." onChange={ (newtext) =>  {
        setAttributes({ contentWvb: newtext });
      }}
    /></span>
</span>
                    </span>
                </li>
                <li className="relative pb-10">
                    <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true"/> <span className="relative flex items-start group">
        <span className="h-9 flex items-center" aria-hidden="true">
          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
            <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"/>
</span>
                    </span> <span className="ml-4 min-w-0 flex flex-col">
          <span className="text-xs font-semibold tracking-wide uppercase text-gray-500"><RichText tagName="span" value={attributes.contentAwz} default="Theme" onChange={ (newtext) =>  {
        setAttributes({ contentAwz: newtext });
      }}
    /></span>
 <span className="text-sm text-gray-500"><RichText tagName="span" value={attributes.contentywQ} default="Faucibus nec enim leo et." onChange={ (newtext) =>  {
        setAttributes({ contentywQ: newtext });
      }}
    /></span>
</span>
                    </span>
                </li>
                <li className="relative"> <span className="relative flex items-start group">
        <span className="h-9 flex items-center" aria-hidden="true">
          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
            <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"/>
</span>
                    </span> <span className="ml-4 min-w-0 flex flex-col">
          <span className="text-xs font-semibold tracking-wide uppercase text-gray-500"><RichText tagName="span" value={attributes.contentAeB} default="Preview" onChange={ (newtext) =>  {
        setAttributes({ contentAeB: newtext });
      }}
    /></span>
 <span className="text-sm text-gray-500"><RichText tagName="span" value={attributes.contentyUb} default="Iusto et officia maiores porro ad non quas." onChange={ (newtext) =>  {
        setAttributes({ contentyUb: newtext });
      }}
    /></span>
</span>
                    </span>
                </li>
            </ol>
        </nav>
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
        <nav aria-label="Progress">
            <ol role="list" class="overflow-hidden">
                <li class="relative pb-10">
                    <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600" aria-hidden="true"/> <span class="relative flex items-start group">
        <span class="h-9 flex items-center">
          <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
            
            
      <svg
         class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          dangerouslySetInnerHTML={ { __html: attributes.svgklo }}
        >
      </svg>
      
          </span>
</span> <span class="ml-4 min-w-0 flex flex-col">
          <span class="text-xs font-semibold tracking-wide uppercase"><RichText.Content value={attributes.contentYXu} /></span>
 <span class="text-sm text-gray-500"><RichText.Content value={attributes.contentlLB} /></span>
</span>
                    </span>
                </li>
                <li class="relative pb-10">
                    <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true"/> <span class="relative flex items-start group" aria-current="step">
        <span class="h-9 flex items-center" aria-hidden="true">
          <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full">
            <span class="h-2.5 w-2.5 bg-indigo-600 rounded-full"/>
</span>
                    </span> <span class="ml-4 min-w-0 flex flex-col">
          <span class="text-xs font-semibold tracking-wide uppercase text-indigo-600"><RichText.Content value={attributes.contentUzE} /></span>
 <span class="text-sm text-gray-500"><RichText.Content value={attributes.contenttSu} /></span>
</span>
                    </span>
                </li>
                <li class="relative pb-10">
                    <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true"/> <span class="relative flex items-start group">
        <span class="h-9 flex items-center" aria-hidden="true">
          <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
            <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"/>
</span>
                    </span> <span class="ml-4 min-w-0 flex flex-col">
          <span class="text-xs font-semibold tracking-wide uppercase text-gray-500"><RichText.Content value={attributes.contentIVn} /></span>
 <span class="text-sm text-gray-500"><RichText.Content value={attributes.contentWvb} /></span>
</span>
                    </span>
                </li>
                <li class="relative pb-10">
                    <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true"/> <span class="relative flex items-start group">
        <span class="h-9 flex items-center" aria-hidden="true">
          <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
            <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"/>
</span>
                    </span> <span class="ml-4 min-w-0 flex flex-col">
          <span class="text-xs font-semibold tracking-wide uppercase text-gray-500"><RichText.Content value={attributes.contentAwz} /></span>
 <span class="text-sm text-gray-500"><RichText.Content value={attributes.contentywQ} /></span>
</span>
                    </span>
                </li>
                <li class="relative"> <span class="relative flex items-start group">
        <span class="h-9 flex items-center" aria-hidden="true">
          <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
            <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"/>
</span>
                    </span> <span class="ml-4 min-w-0 flex flex-col">
          <span class="text-xs font-semibold tracking-wide uppercase text-gray-500"><RichText.Content value={attributes.contentAeB} /></span>
 <span class="text-sm text-gray-500"><RichText.Content value={attributes.contentyUb} /></span>
</span>
                    </span>
                </li>
            </ol>
        </nav>
    </div>
</div>
            );
            },
        });
        