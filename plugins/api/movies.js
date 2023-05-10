const API_BASE_URL = "http://localhost:3001/";

export const getLatestMoviesPreview = async () => {
  try {
    const movies = await useFetch(`${API_BASE_URL}latestmoviespreview`);
    return movies.data._rawValue;
  } catch (error) {
    return error;
  }
};
export const getLatestMovies = async () => {
  try {
    const movies = await useFetch(`${API_BASE_URL}latestmovies`);
    return movies.data._rawValue;
  } catch (error) {
    return error;
  }
};

export const getTopranked = async () => {
  try {
    const movies = await useFetch(`${API_BASE_URL}topranked`);
    return movies.data._rawValue;
  } catch (error) {
    return error;
  }
};

export const getMovieGenres = async () => {
  try {
    const movies = await useFetch(`${API_BASE_URL}moviegenders`);
    return movies.data._rawValue;
  } catch (error) {
    return error;
  }
};

export const getMoviesByGenre = async (genre) => {
  try {
    const movies = await useFetch(`${API_BASE_URL}moviesbygender/${genre}`);
    return movies.data._rawValue;
  } catch (error) {
    return error;
  }
};
