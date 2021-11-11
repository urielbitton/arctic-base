import axios from "axios";

export const getOneMovie = (id, setState) => {
  const options = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: {r: 'json', i: id},
    headers: {
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
      'x-rapidapi-key': '8dfca300dbmshc9db1bd89959686p130e19jsneb01c198116e'
    }
  } 
  return axios.request(options).then(res => {
    setState(res.data)
  }).catch(err => {
    console.error(err)
  })
}

export const getMultipleMovies = (arrayOfIds, setResultsArr) => {
  arrayOfIds.forEach(el => {
    const options = {
      method: 'GET',
      url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
      params: {r: 'json', i: el.id},
      headers: {
        'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
        'x-rapidapi-key': '8dfca300dbmshc9db1bd89959686p130e19jsneb01c198116e'
      }
    } 
    axios.request(options).then(res => {
      setResultsArr(prev => [...prev, res.data])
    }).catch(err => {
      console.error(err)
    })
  })
}