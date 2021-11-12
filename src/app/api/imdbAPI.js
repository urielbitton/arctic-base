import axios from "axios";

const basicHeaders = {
  'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
  'x-rapidapi-key': '8dfca300dbmshc9db1bd89959686p130e19jsneb01c198116e'
}
const superAPIHeaders = {
  'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
  'x-rapidapi-key': '8dfca300dbmshc9db1bd89959686p130e19jsneb01c198116e'
}
const altHeaders = {
  'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
  'x-rapidapi-key': '8dfca300dbmshc9db1bd89959686p130e19jsneb01c198116e'
}

export const getOneMovie = (id, setResult) => {
  const options = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: {r: 'json', i: id},
    headers: basicHeaders
  } 
  return axios.request(options).then(res => {
    setResult(res.data)
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
      headers: basicHeaders
    } 
    axios.request(options).then(res => {
      setResultsArr(prev => [...prev, res.data])
    }).catch(err => {
      console.error(err)
    })
  })
}

export const getAltMovie = (imdbID, setResult) => {
  var options = {
    method: 'GET',
    url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${imdbID}`,
    headers: altHeaders
  }
  axios.request(options).then(res => {
    setResult(res.data)
  }).catch(err => {
    console.error(err)
  })
}

export const getSupMoviesByGenre = (genre, setResults, limit='20') => {
  var options = {
    method: 'GET',
    url: `https://data-imdb1.p.rapidapi.com/movie/byGen/${genre}/`,
    params: {page_size: limit},
    headers: superAPIHeaders
  }
  axios.request(options).then(res => {
    setResults(res.data)
  }).catch(err => {
    console.error(err)
  })
}

export const getSupUpcomingMovies = (setResults, limit='20') => {
  var options = {
    method: 'GET',
    url: 'https://data-imdb1.p.rapidapi.com/movie/order/upcoming/',
    params: {page_size: limit},
    headers: superAPIHeaders
  };
  axios.request(options).then(res => {
    setResults(res.data)
  }).catch(err => {
    console.error(err)
  })
}

export const getSupNewMovies = (setResults, limit='20') => {
  var options = {
    method: 'GET',
    url: `https://data-imdb1.p.rapidapi.com/movie/byYear/${new Date().getFullYear()}/`,
    params: {page_size: '50'},
    headers: superAPIHeaders
  };
  axios.request(options).then(res => {
    setResults(res.data)
  }).catch(err => {
    console.error(err)
  })
}

export const getSupUpcomingSeries = (setResults, limit='20') => {
  var options = {
    method: 'GET',
    url: 'https://data-imdb1.p.rapidapi.com/series/order/upcoming/',
    params: {page_size: limit},
    headers: superAPIHeaders
  };
  axios.request(options).then(res => {
    setResults(res.data)
  }).catch(err => {
    console.error(err)
  })
}

export const getSupNewSeries = (setResults, limit='20') => {
  var options = {
    method: 'GET',
    url: `https://data-imdb1.p.rapidapi.com/series/byYear/${new Date().getFullYear()}/`,
    params: {page_size: '50'},
    headers: superAPIHeaders
  };
  axios.request(options).then(res => {
    setResults(res.data)
  }).catch(err => {
    console.error(err)
  })
}

export const getActorById = (actorId, setResult) => {
  var options = {
    method: 'GET',
    url: `https://data-imdb1.p.rapidapi.com/actor/id/${actorId}/`,
    headers: superAPIHeaders
  };
  axios.request(options).then(res => {
    setResult(res.data)
  }).catch(err => {
    console.error(err)
  })
}

export const getActorIdByName = (name, setResult) => {
  var options = {
    method: 'GET',
    url: `https://data-imdb1.p.rapidapi.com/actor/imdb_id_byName/${name}/`,
    headers: superAPIHeaders
  };
  axios.request(options).then(res => {
    setResult(res.data.results[0].imdb_id)
  }).catch(err => {
    console.error(err)
  })
}