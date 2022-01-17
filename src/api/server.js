import axios from 'axios';

export const url = 'http://localhost:3000/properties';

export const getProperties = async () => {

    return await axios.get(url)

        .then(response => {

            return response.data

        })

        .catch(error => {

            console.log(error)

        })

}