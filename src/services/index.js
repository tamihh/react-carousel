const API_KEY = '0cb719b5b111dd6f4bb84184aac3e560';
const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

export const getMovies = () => (
  fetch(API_URL).then(response => response.json())
);


