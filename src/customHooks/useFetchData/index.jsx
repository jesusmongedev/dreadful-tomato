import { useEffect, useState } from 'react'

const useFetchData = () => {
  // States to store Movies and Series from the API
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  // get all data
  useEffect(() => {
    const getMovies = async () => {
      await fetch('https://gitlab.com/-/snippets/2041384/raw/master/data.json')
        .then((res) => res.json())
        .then((data) => {
          let requestedData = data.entries

          function groupBy(list, keyGetter) {
            const map = new Map()
            console.log(map)
            list.forEach((item) => {
              const key = keyGetter(item)
              // console.log(key)
              if (!map.has(key)) {
                map.set(key, [item])
              } else {
                map.get(key).push(item)
              }
            })
            console.log(map)
            return map
          }

          const groupedByMovies = groupBy(
            requestedData,
            (movieData) => movieData.programType
          )

          const groupedBySeries = groupBy(
            requestedData,
            (serieData) => serieData.programType
          )

          setMovies(groupedByMovies.get('movie'))
          setSeries(groupedBySeries.get('series'))
        })
    }

    getMovies()
  }, [])

  //   Data returned
  return {
    movies,
    series,
  }
}

export default useFetchData
