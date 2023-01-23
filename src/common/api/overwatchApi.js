import axios from 'axios';

export default axios.create({
    baseURL: "https://overfast-api.tekrop.fr/heroes",
});