import axios from "axios";

export const getOneMovie = (id, setResult) => {
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

export const alternativeAPI = (imdbID, setResult) => {
  var options = {
    method: 'GET',
    url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${imdbID}`,
    headers: {
      'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
      'x-rapidapi-key': '8dfca300dbmshc9db1bd89959686p130e19jsneb01c198116e'
    }
  }
  axios.request(options).then(res => {
    setResult(res.data)
  }).catch(err => {
    console.error(err)
  })
}

export const supGetMoviesByGenre = (genre, setResults, limit='20') => {
  var options = {
    method: 'GET',
    url: `https://data-imdb1.p.rapidapi.com/movie/byGen/${genre}/`,
    params: {page_size: limit},
    headers: {
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key': '8dfca300dbmshc9db1bd89959686p130e19jsneb01c198116e'
    }
  }
  axios.request(options).then(res => {
    setResults(res.data)
  }).catch(err => {
    console.error(err)
  })
}

export const supGetUpcomingMovies = (setResults, limit='20') => {
  var options = {
    method: 'GET',
    url: 'https://data-imdb1.p.rapidapi.com/movie/order/upcoming/',
    params: {page_size: limit},
    headers: {
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key': '8dfca300dbmshc9db1bd89959686p130e19jsneb01c198116e'
    }
  };
  axios.request(options).then(res => {
    setResults(res.data)
  }).catch(err => {
    console.error(err)
  })
}

export const supGetNewMovies = (setResults, limit='20') => {
  var options = {
    method: 'GET',
    url: `https://data-imdb1.p.rapidapi.com/movie/byYear/${new Date().getFullYear()}/`,
    params: {page_size: '50'},
    headers: {
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key': '8dfca300dbmshc9db1bd89959686p130e19jsneb01c198116e'
    }
  };
  axios.request(options).then(res => {
    setResults(res.data)
  }).catch(err => {
    console.error(err)
  })
}