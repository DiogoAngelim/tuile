
        
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
  const { Panel, PanelBody, PanelRow, TextareaControl } = wp.components;


        registerBlockType('wp/with-grouped-rows', {
            title: 'with grouped rows',
            icon: (<img src="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMf8bfsSIx/xt+xIAAAAAAEZP43fYkRk/jd9gJArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbAWArwb0psMG9KbASj/jb9iRGP+Nv2JAAAAAAAjJ/G77EiMn8bvsBgAFQOQ72m0htVJTe8SrLFIsT0bTSuRrk4Kl0bY658+07UIaTWtWjl9oFoFdqci+79g1/acU43VFVL8vwMD3Go10Gm0EtbVK5IYku5WpdeduX5Mw1bZqqanbFM1Ymtdm5iox+SX+Fe+3efNvaBaNYNf/UX1H6ylUqQNu/+C6Y2Tlja/P0N7XsnVeusR72oq0CIrVsqXXuLB7rUa6DTaCWtqlckMSXcrUuvO3L8mw1Uc1FTkqXPnut0sWmxe0lDSZtplpIZUjc9XIjlfZVS695BraaSatj9nlqZGP0qX3xrlet5bfDfL/Xe4g+jA+fw6pTahVaQ2kmc9YdLmbLwVMXdmnD7pYg3TIoPZLSalI6mSCpkidqLo3Pc58aItksi3xS/JBB7nUa+DTaRamqVyRo5rfhS63cqInmptHy+dtO6k9o46L3hlL29EkSSZI5rVXuy4ony+lj1OiUkWm+12pUVHmymdTRS9mr1cmSqqKvFe8QenABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGY/wCNv2JEY/42/YkRQAAAAAIyfxu+xIjJ/G77AYBHJ/hP3T1GT/CfunqVEgRyf4T909Rk/wAJ+6eoEgRyf4T909Rk/wAJ+6eoEgRyf4T909Rk/wAJ+6eoEuRq6jp8Go06Q1CyNRrke10cisc1yclRUNjJ/hP3T1GT/CfunqBqaZpVLpjZfd+0c+Z2Usssive9eXFVN0jk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJAjk/wAJ+6eoyf4T909QJx/xt+xIjH/G37EiKAAAAABGT+N32JEZP43fYCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMf8AG37EiMf8bfsSAAAAAABGT+N32JEZP43fYCQAAHN0XUJtQ9/7ZrG+7VklOzBFS7W2sq8efE6R56godd06rrEgZp0lNU1j6i75Xo9GuVOFkba9k+YCH2jigijbP7zVyz1M8UTYYERVVir8Nsvl372NhfaWh9xhqWRVMj55XQsp2xf1c23yarb8LW48TVodAq6euoZ3yQK2nqqqZyI5bqkt8bcOfHj/ANyr9A1CCdK2kkpVqoq+eojZIrsHRypZUVUS6L+FLwiyh9p2OhrqipjmVrK1KWnhbFaRXK1vwqi9977G+uuxpRtnSg1B0jpFi93SD+ojk5342t9b2OW3QdSdQV7Kpmm1MtXWJUOjkR/Zq3FExRbXaqW4Lx8yn/5c1ZtFTxe8RSsjqHyOpH1MvZoxWojW52yXFUvxTvHA7VFr9FWzUsUTZmuqkkwzZjZzFs5q8eDkL6XUE1LSn1mnNW7kekKyt4OVFVEWyLyVU2PJV2k1elez1LRwKxdU98e+l7BjlbZ6q1yKtvhRGu7/AJd57SgpI6Cgp6OH+OCNsbfwlhlXnE9q5lj0N7YY1bWNR1Ytl/oorms4ceHxutxvyNuH2gk7WsV9HNPGyrdT07KaJXPdg1M1cqra17p3cu81YfZWRkWtxvnYqViK2ksq/wBFuTnp3cPjdfhfkhF/s5qDdN0yBksE6wLI+qiklexkz3rfK7UutlVeCp39w4RuL7Qe8VelPomvfTVUdQ58astJlGifCiLyW90Iaf7VR1GjQ11VRVMck0qxRQsZksrrr+3jx4Jxva3Ep0T2bq9OdpHaSU6toVqc0YruKSKitxun043XcxT+z+p0tFRshlpHTadUvkp1crsZWPyuj+Hwr8XNL8hwN5/tPQMpGTuiqsnVPuqw9l/UZLZVRqt/Hdfmhu6XqkGqRSuhjmifDIscsUzMXsdZFsqfZUOOzQK580VXUy0/vLtSbWTNYrsGsaxWI1vDivLitu86unUEtJqWqVMjmKyrma9iNVboiMRvHh80HCuiACAAAAAAAAAAAAAAAAAAAAAAAAAAAOdX1ssFdFTsnpoGvjc9XzoqpdFRLJ8SfMk3UUZLDTOR1TNIzPKnZ8GN7X4rwT8k5qJJtSjqJGxviZE5mLkut1VFv5KZbSKzU/eG4NiSDskanBUXK/L5FFcWrU8szGIyZGSOVkcys+B6p3Iv4UjDrEEskbUhqGtkesbZHMRGq5L8L3+hTBp1W1tLSyPh92pZEe1zVXN1r4oqWsn14k2adM2ipYFdHlDU9q5brZUyVeHDnxHCL9Mrn1zZlfTyQ9nI5iZW42VU+fPhxJ1dcymkZF2Us0rkVyMibdUanepRDpqObUQVscUsD53TR8Vv8SqvFPpcoq9GZ28UtJBA5rI1j7KRzmoiXvdFT6qu44VsP1eD+kkMU86zR9oxImXW17d68DK6tAscDoY5p3TMzayNt3I3vVePD5EaLT301RBJaJrI6d0atjuiZK5F4X7ufeUU2nVtH2ElOsD5Wxuie17lRtlcrkVFt9Rwjc0uqdWac2odZVc59uFuCOVE8kQ0o9Qr2aZHqMzaeSFWo97GNc1zUXvRVVb2/BvaZSy0mntgmcx0iK9VVvJbuVf+5oRadqD9Pi0+odTMp2ojXujc5znIndxRES4G5NqsEMz2OZM5kao2SVrbsYq/NfyhJ2owtikerZLxzJArbJdXKqIluP1RfsaFToz5KqdzYqWSOd6PylV12crpZOC8vmhtP057tXbVI9vu/B7md6yIitRdl8kHAnHqsEk7Y0ZKjHvWNkyt+Bzk7kX8KU0+q/8ACxLLHJNPI6SzIW3XFrlS/wBO416PRHU08TexpnRRSK9sqq5X2uqoluV/rf8ABbDp1XSrDNAsD5WJIxzXuVGq1z8kstuacO4cC9+r06Np1jjnldUI7BrGcbttdFvyX0M/q0CwxvZHM98jnMSFrfjRU5oqd1jRWkrKaroEh7OSZEnfIrroxVcrVVL8bc+H2MyaLM9I5pEglnSWSR8bnOaxc7cEVOPCydw4G47V4EZA5kU8jp1c1sbWfEit5oqKvBUOgi3RFsqX7lOXS6bJDLSPxgYkSyOe2O9ru5Wvz8jqEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAADV1Sd9LptRPFbONiql0uhtGtqVO+r06enjVqPkYrUV3IDXfqTKd06zLJIjahIWtZHxRVaionPiSTVoPd3yOima9kiRLCrfjVy8UREv3oVyadM6odIjo7LWMn5r+1GoluXPgRqNOqH1M1RC+JH9vHNEjr2XFmKovy7y8IxFrCdtVdtFK1sbo2MiVln5Ovw52Nr9Qb7ukvutVkr8Oy7P4r72t9b2NNdPrZFrJJ2Ucjqh0a9k7JW2bdLXtdF+pD9KrPdmR5sc1syvWBZn44qlkblzWy8RwN+m1KCokjja2RrpEfZHpaytWzmr9eJlmowvggnRr+znk7Niqnfxsv2W3mhx56Gel06OBjmpWPqHOh7JFVER3BfsiI7v+R06minfSOpYFiZHGxnYKt8ke1bpf6cE8wJR6rTSIuGa/8AEe72t/q+f2txIpqsb3LGkM8TnMc6J0rMUfj8u/exRT6Q+CsgkbK1I44URU71lRFblsqmvT6LVMqIZZewyiY9rn9o9zpFc211unAcDapNVkkmpYZKd69rStmdIlrIq2uvPlxL6bVIKiaNjY5mJLfsnvZZsluPD8ceNiiPTp43UnGNzWUvu0yZKnDhxbw48u+wpqGsR1HHUug7Gj/arL5PVGq1Lp3cF+o4FtJrEFVJC1kNQxs6L2b3sRGuVEuqc+fPY1ZtZcje1R0ccStzbeJ8iqy9kctrI1Ftw5l8GnTR0umxOdGq0rrvsq2X4XJw4fU58lBPHG6mkSpRixdir4WNekjEVcefFq8bKOB001RrI8ZYXrUJIsXZR/ErnIl7py4WVF42JJq1KrYnvzjbI5zFc9LIxzebXfJeZqVOjOlSKZXMnnbI57+1uxr7tRtuHKyInz5B2jyS0LaN6QQwySOkmSG6rf8A0ol+fddeHLkOBtu1NiQRSspaqRJGq9EbHxRvzXj/AP0hLrNOxW4RTzI6FJ7xsvZi348V+hr1WnV9T2KzrTy4xKx7HPcjUdf96IiceHcTpdMnhjxc+NV9ybT8FX9yZceXLiOBazWKdzZHdlO1rYXTtc5lkkYnNW8ftztzMx6rFMitbFNE50ayRLKyySIidxrVtDMzT2rdruwoJIXIl1VXK1OWykoaKtn93fVLC1sELmswVbuVzbXW6cOHdxHAsj1draWB0kU0sroGTS9ky6MRU5r58Ddlq4IqNapz/wCijUcjk43ReVvucd+iSo2NUjppne7siekrnIjXNS10tzT6cDdnop5aJaNroWRNjZ2atRbo9q34p08EHAkmqwpFK+aKeFYkRVZIyzlReCWtzuvAwurwMgnkminidAjVfG9lnWVbIqceKEZqbUKunkbO+njeisdE1l3Ijmre6qtuduRTUadWVbaiSdYGTSMZGxrHKrURrslVVtz/AAOBa7W4WdojqSsR0SZSIsafC3qXjy8+CnSa5HNRzVuipdFNCooZZX6g5rmWqadImXVeCojuf0+JDdgYscEcbrXa1EW30QKmACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAc6j1F82qVdHKxrUiX+m5P9SWS9/tdNzonHqtKqJUnfBMyOZ07nsfx4McxGuRfrwv+ELgZpNaSVKuWVn9KOVrIUY1VdJfl979xe7WIGxZPina9JUiWJWfGjlS6cL95q1GiLI2VsfZo1HxPha5Vt8DbWdb/ALGYdKlbg9IqaFyVDJXNjc5fhai96814/JBwi9utQKtnU9UxGvSORzo0RI3KtkReP25X5lbdYSKarbURSuZDNisjGXaxtk4qv3vyJzadNJT1saOjvPUNlbdV4ImHPhz+FSqWg1BffoYnUyQ1j1VXOVcmIqIi8LcVsg4G1NqtPDM9islcyNUSSVrbsYq/NfynInHXslrZKVkMyuiWz34pgnC/O5zZtEcs83ZxU0kUrkdlKrsmcERUsnBeXzQ6lJTvgmqnuVqpNLm23cmKJx2HCtkAEAAAAAAAAAAAAAAAAAAAAAAAAAqqpHQ0k0rURXMY5yX5XRLlpVVRumpJomqiOexzUvyuqWLpl5HJ0nVJqzsXzV2mqj483wxX7RvC9v3Ly7+BF2vpPU0LKWKdkc82OcsVmyMst1av3sT07T66CCOlqYKBIUi7J0kTndovw2vxahVBpWqIunRTyUiwUMiKityyeiIqJ3cFsdecbXdnPv6pyU+uyX06PsZan3rtLytjRv7VVOCX7rcePLid84NPo9ZTQaYsb4HTUT5VciquLmvVeS2veyneNW/2X5Pz/ef8MAANCox/xt+xIjH/ABt+xIAAAAAAEZP43fYkRk/jd9gJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIx/xt+xIjH/ABt+xIAAAAAAEZP43fYkRk/jd9gGK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAI4r1u8hivW7yJACOK9bvIYr1u8iQAjivW7yGK9bvIkAIx/xt+xIjH/G37EgAAAAAARk/jd9iRGT+N32AkAAAVURURVTjyB5LTdN0/WV1ep1djZaiOslize7jTsb+3Ff9PDjdAPWg8ylRW1VczTdK1ZI4KeiZMlTIxsrp1VVRFVV4W+Hiqc7jQNdqtTr6RJ1ayObTPeHRoifvSTFVRedvUsHpgeN0vU9Z1V2kws1BsC1FE+eZ/YNcqqj0TgnJOZT71qmn6d7SVkeovlkp6rCNHxtVEX4OPL5La3IRK9wDx+p61q2hrqMU87K17KSOeFyQo3BXSYKlk5onMz+oe0EdJqKJ7w90EDaiGWembGrlRfjjsl0W6JwXmItevBxtH1KXVdSrJoZEXT4mRsiRET4nq3Ny358Ec1DmUFRqkOt643T9OhqmLVornPqezVF7NvC2K3EHrAfP9L1Sup9D0Sgo0mjdUrUvkfDCkr2o2R3BEXhzXip0o9R12rl0ikdN7jNUJUpO50CKqozHFyNW9lW/LlxURK9cDx0Oq6zWLplHHWxwzy1FTBPMkKKjuzvZyNXkvD/zkXVmralST1mle8I6tkngbRyrG1Pgk5ra1lxxeIr1YAIAAAAAAAAAAAAAAAAAAAAAAAAAAAA5dZTwVOuQR1ETJWJTvWz0ul8mmlJVy0Dquno83R+8RxR2TPs1cl3IiL8vl81LB6EwrkRURVRFXkl+ZxEqtVWmma2OZVZK20jompIrFTjZvJVQMrHOdRvWRKhzZJUcroUY9LMVbKncv2sIO4DhwVNblpsslYx7Kx13RpGiYpiq2Redk7zFHV13Z0NVPUpIyplWN0XZolv3WW/O/wAIg7oODp2o19TLTzqyZYZnqjmLCiMY3jZUdzXknM3tEfVT0EdTV1Haumaio1GI1G7CDoAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGrqdS+k06aeNEV7U+G/K6ra67gbQOTUyV1DA/Ksjmc/BrHOYjVYrnI29k5pxKqqsrKJKmF9R2rmMjkZKrERURX4qionAsHbBx9VrqmnlqWwSI3Cnje27UWzleqL5GZIqpmr0DH18j7skV3wNRHWVvC1u+9vwIOuDh09XXYUtVLUo+OapWFYuzREtk5EW/O/AhRajqFTLDMjJlimlVrmdiiNY26pdHc7pbiIV3zGSZK26XTjY5NHW1M81NSuenaxrJ70qInHHgn2uqopGqZUu1eqWlqewVtMxyrgjrrd1k49wg7IPPP1OuqMfd0laraaOVUihR+TnJey3XgnDuLX1OozrVOZP7v2FOyXs+zR3xK1VVFVe7gIV3AcmGerra5EjqexhSnjlVqMRVVXX4XXu4FUepVT442oqdrTwyvqUsnFzbtRPpdUVfwIO2Dysr2MdlI+ne5qxI50qKskmdlVzXX4Il14J8lNlK+rVYqWCSZUvKvaxxpI57Wvxbz4fdREr0IODUanXU1HS1EqNY+ZHROjkRG4v42f9uHFPqNSraul7RIaqSR9NE1Xo2nRWqvO717r/JBFrvA4VZWVyPr5oalI46VjHtjWNFyu26oq87GKysr6FlUx1U2V7YWSsesaJiqvxVPsIO65Uaiq5URE5qpk8/qklVDT1dJUVCVDX0qyo7BGq1UVEVOHdx8idZX1/vlU2lbKqU6tRrGwo5r1sirkvNOfcIV3QaWpVEsVPCkCoySeVkaOcl8L99jXnlraZjIFq45HzTtjbKrEyYioqrdOV+HD7kg6oOFLV10crqNKlFkbUxx9ssaXVr2qvFOV0t/sYdUajDHUSurEe2lqGxY9k1O0RVbzXuWzu63IsHeABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPO6vVL+pOlY2Z3uCNVuEblarlVFfdU4J8Hz+YwPRKqIl1WyIEVFRFRbovecSsnqatK9aeqbHBTxJZuCL2l2ZXVV5JZbcCls9alKqU9SkTKahjlRvZo7JbLw493AsHoHORrVc5URE4qq9xk8/UVNYynmbPMyZstC6dGrElmOS3BPmnHvvyLKmor0XUJYalscdGjXNj7NFR3wI5UVfkIldwGGrk1HfNLmSKAAAAAAAAAAAAAAAAAAAAAAAAAAAAa+of8uqv/sv/wBlLjFzBsGHOa1URzkRXLZLrzU81oVP7vR09WukU7MKfNKhst3u+H5W7/uVpJXTv0Wqq6uOVlROkiRtjRvZrivBF7+fG50ft/mzi+X/AH7VK9Qx7JGo6NzXNXkrVuhI8jROqppNCWOp7BsizorI42o34Vd3WtxTh58z1xr3dr4eZfdhjIADUqMf8bfsSIx/xt+xIAAAAAAEZP43fYkRk/jd9gJAAAcqu9ndJr6p9TU0qrJIiJIrJHMSRE5ZIiojvydUAc6u0LTK/sveKVP6TOzYsb3R2Z0/CqXb9ORiq0DSqv3ftqRv/DM7OJGOcyzen4VS6fReB0gBo0ekUFC+B1LT4LTxLDGublxYq3VOK8eKEJ9C0yokqpJaZVWsREntI5Efa1uCLa/BOKcTogDUqNMoqqeWaop2yPlh7B+SqqOjve1uXNefM14NGp9OgqF0qJjKmVqNzqHvkSyckVVVVt9EOmAOb7P6THomjw0EbkerLq99rZOVbqtjbp6OnppaiWCPF9Q/tJVuq5OsiX48uCJyLwBzH+z+lvooaRaZUip3OfFjI9rmK5VVbORcuN17y2n0fT6V1K6npkYtIj2w2cvw52y7+KrZOK3N4AaMWkUEM8U0cGMkUkkrFzctnSfvXn3/AP8AhrP0h8/tNHq1S+FWU0Sx07GsXL4uauXeyJ8zrgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1qqgpquRr52OVzUVqK2RzeC93BUCafSJSLSpA1IVW6tT5/O/O/1NkAaf6VRdisXZKqK9Hq5XuyyTkuV7+ZOKgpYezWOOyxuc9q5Kq5KllVVXmtvmbIA49Lozoq2OeT3ZEicrkWKJWuetlTjxsnPkh0G0VMyKGJsdmQOzjTJfhXjx81NgCjUj02jiqEnZFZ6KrkTJcWqvNUbeybF8EMdPAyGFuMbEs1L3shYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEZI2SxujkajmOSzmryVCQA049KomRyRpBk2VqNdm5XKqJyS6rwMs0yjZDLEkOTZktJm5XK5Puq3NsAaTdJoWtkRInL2iI16ukcqqiLdOKqXzUsM8sUkrFV8LsmORyoqL+P9i4Aa6UVM2KOJI/gik7RiZLwddVvuqkG6bRsqO3bDZ6OV6JkuKOXvRt7X/BtgDQp9ORJKyWqwe+rs16MuiI1EsifP8AJsspYGOVzWWV0aRrxX9qXsnmpcANKTSqKVsbXQqiRxpG3F7mrj8lVF4p9y5tHTt7XGJESViRvRFVEVqIqIn04KvIvAFMNLDA/KJmK4NjvdV+Ft7J5qUUNEsElTPMsbpqlyK/BLNRESyJx/O5ugDnN0pI3Ikc39FExSOSNr8W9KKqXt9OJsVFDTVDY0kjt2f7FY5WK37KljZAGq3TqNrWtSBuLY1iRLqqI1eaW+vz5lcmj0EvB8LlRWIxU7R3xInBL8eNvmpvADXdQ0z2ztdHdJ2o2T4l+JESyfbgVajp0dZDKiIjZZGNYrluqYo69rbm6ANJmlUTI5Y0hVWytwfk9yqrfldVuifYlUabR1MyyzQ3c5ER1nKiPtyuiLZfybYA1pKCllSZJIkd26osl1Xiqcvt+CKaZRpTvh7G7HuRzlc5VcqpyXK97/k2wBqx6dSRsa1sX7ZElurlVVcneq3uv5Jvoqd7JWOju2Z6SPTJeLktZf8A9ULwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqip4YmyNYyySuV77rfJV58y0AaL9HoHta10C2axGWSRyXanJF48fyXJQ0zWPYkfwviSFyZLxYiKiJ5qbAA15KGmkbZ8V07JYf3L+xbXTyQy6jp3Nnasd0qEtL8S/Fwt+OCdxeACIiIiJyQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIyMbLG6N6Xa9Fa5PmikgBoUmjUFHK2Snie1zEsl5nuREtbkq2Iw6FpkE7JoqbF8bs2fG6zV+iXsnPkdEGz4uv1ZI0v0mh7CCHsLMgcr4rPcitVVuvG9+83QDDOrOrzyAAIIx/xt+xIjH/ABt+xIAAAAAAGFS6KgAEGSIi9m7g7u+pYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK3vuuDf3L5AATRLIiGQAAAA//2Q==" />),
            category: 'common',
            attributes: {
  "contentoSG": {
    "type": "string",
    "default": "Users"
  },
  "contentgoB": {
    "type": "string",
    "default": "A list of all the users in your account including their name, title, email and role."
  },
  "contenthoo": {
    "type": "string",
    "default": "Add user"
  },
  "contentoTH": {
    "type": "string",
    "default": "Name"
  },
  "contenttMc": {
    "type": "string",
    "default": "Title"
  },
  "contentgOR": {
    "type": "string",
    "default": "Email"
  },
  "contentKFr": {
    "type": "string",
    "default": "Role"
  },
  "contentiUO": {
    "type": "string",
    "default": "Edit"
  },
  "contentXaW": {
    "type": "string",
    "default": "Edinburgh"
  },
  "contentNXy": {
    "type": "string",
    "default": "Lindsay Walton"
  },
  "contentkiI": {
    "type": "string",
    "default": "Front-end Developer"
  },
  "contentMDa": {
    "type": "string",
    "default": "lindsay.walton@example.com"
  },
  "contentBAm": {
    "type": "string",
    "default": "Member"
  },
  "contentFCA": {
    "type": "string",
    "default": "Edit"
  },
  "contentLew": {
    "type": "string",
    "default": ", Lindsay Walton"
  },
  "contentOhI": {
    "type": "string",
    "default": "Courtney Henry"
  },
  "contenthDQ": {
    "type": "string",
    "default": "Designer"
  },
  "contentGhN": {
    "type": "string",
    "default": "courtney.henry@example.com"
  },
  "contentaWA": {
    "type": "string",
    "default": "Admin"
  },
  "contentwHg": {
    "type": "string",
    "default": "Edit"
  },
  "contentyEu": {
    "type": "string",
    "default": ", Courtney Henry"
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
                     <h1 className="text-xl font-semibold text-gray-900"><RichText tagName="span" value={attributes.contentoSG} default="Users" onChange={ (newtext) =>  {
        setAttributes({ contentoSG: newtext });
      }}
    /></h1>

                    <p className="mt-2 text-sm text-gray-700">
                        <RichText tagName="span" value={attributes.contentgoB} default="A list of all the users in your account including their name, title, email and role." onChange={ (newtext) => { setAttributes({ contentgoB: newtext }); }} /></p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText tagName="span" value={attributes.contenthoo} default="Add user" onChange={ (newtext) => { setAttributes({ contenthoo: newtext }); }} /></button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full">
                                <thead className="bg-white">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            <RichText tagName="span" value={attributes.contentoTH} default="Name" onChange={ (newtext) => { setAttributes({ contentoTH: newtext }); }} /></th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contenttMc} default="Title" onChange={ (newtext) => { setAttributes({ contenttMc: newtext }); }} /></th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentgOR} default="Email" onChange={ (newtext) => { setAttributes({ contentgOR: newtext }); }} /></th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText tagName="span" value={attributes.contentKFr} default="Role" onChange={ (newtext) => { setAttributes({ contentKFr: newtext }); }} /></th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6"> <span className="sr-only"><RichText tagName="span" value={attributes.contentiUO} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentiUO: newtext });
      }}
    /></span>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    <tr className="border-t border-gray-200">
                                        <th colspan="5" scope="colgroup" className="bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 sm:px-6">
                                            <RichText tagName="span" value={attributes.contentXaW} default="Edinburgh" onChange={ (newtext) => { setAttributes({ contentXaW: newtext }); }} /></th>
                                    </tr>
                                    <tr className="border-t border-gray-300">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            <RichText tagName="span" value={attributes.contentNXy} default="Lindsay Walton" onChange={ (newtext) => { setAttributes({ contentNXy: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentkiI} default="Front-end Developer" onChange={ (newtext) => { setAttributes({ contentkiI: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentMDa} default="lindsay.walton@example.com" onChange={ (newtext) => { setAttributes({ contentMDa: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentBAm} default="Member" onChange={ (newtext) => { setAttributes({ contentBAm: newtext }); }} /></td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"> <span className="text-indigo-600 hover:text-indigo-900"><RichText tagName="span" value={attributes.contentFCA} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentFCA: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentLew} default=", Lindsay Walton" onChange={ (newtext) =>  {
        setAttributes({ contentLew: newtext });
      }}
    /></span></span>
                                        </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            <RichText tagName="span" value={attributes.contentOhI} default="Courtney Henry" onChange={ (newtext) => { setAttributes({ contentOhI: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contenthDQ} default="Designer" onChange={ (newtext) => { setAttributes({ contenthDQ: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentGhN} default="courtney.henry@example.com" onChange={ (newtext) => { setAttributes({ contentGhN: newtext }); }} /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText tagName="span" value={attributes.contentaWA} default="Admin" onChange={ (newtext) => { setAttributes({ contentaWA: newtext }); }} /></td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"> <span className="text-indigo-600 hover:text-indigo-900"><RichText tagName="span" value={attributes.contentwHg} default="Edit" onChange={ (newtext) =>  {
        setAttributes({ contentwHg: newtext });
      }}
    /><span className="sr-only"><RichText tagName="span" value={attributes.contentyEu} default=", Courtney Henry" onChange={ (newtext) =>  {
        setAttributes({ contentyEu: newtext });
      }}
    /></span></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                     <h1 class="text-xl font-semibold text-gray-900"><RichText.Content value={attributes.contentoSG} /></h1>

                    <p class="mt-2 text-sm text-gray-700">
                        <RichText.Content value={attributes.contentgoB} /></p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        <RichText.Content value={attributes.contenthoo} /></button>
                </div>
            </div>
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table class="min-w-full">
                                <thead class="bg-white">
                                    <tr>
                                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            <RichText.Content value={attributes.contentoTH} /></th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contenttMc} /></th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentgOR} /></th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <RichText.Content value={attributes.contentKFr} /></th>
                                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6"> <span class="sr-only"><RichText.Content value={attributes.contentiUO} /></span>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white">
                                    <tr class="border-t border-gray-200">
                                        <th colspan="5" scope="colgroup" class="bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 sm:px-6">
                                            <RichText.Content value={attributes.contentXaW} /></th>
                                    </tr>
                                    <tr class="border-t border-gray-300">
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            <RichText.Content value={attributes.contentNXy} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentkiI} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentMDa} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentBAm} /></td>
                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"> <span class="text-indigo-600 hover:text-indigo-900"><RichText.Content value={attributes.contentFCA} /><span class="sr-only"><RichText.Content value={attributes.contentLew} /></span></span>
                                        </td>
                                    </tr>
                                    <tr class="border-t border-gray-200">
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            <RichText.Content value={attributes.contentOhI} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contenthDQ} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentGhN} /></td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <RichText.Content value={attributes.contentaWA} /></td>
                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"> <span class="text-indigo-600 hover:text-indigo-900"><RichText.Content value={attributes.contentwHg} /><span class="sr-only"><RichText.Content value={attributes.contentyEu} /></span></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            );
            },
        });
        