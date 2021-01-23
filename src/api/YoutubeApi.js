import axios from "axios";

const KEY = 'AIzaSyB92NZ8bN-mJaH5lUEGuJXe19iyEPAYgTo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})