import Ajax from '../utils/ajax';
import env from '../../environment';


const omdbUrl = `http://www.omdbapi.com/?apikey=${env.omdb.apiKey}`;

const getMovies = query => {
    const urlWithStringQuery = `${omdbUrl}&s=${query}`;
    return Ajax.get(urlWithStringQuery);
}

export default {
    getMovies,
}