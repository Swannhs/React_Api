import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WcUfNCGYYnHbhuBHZimV65oZqyUZA2O83Fz9TvNT2n4'
    }
})
