import axios from "axios";

const callUrl = `${process.env.REACT_APP_LOCAL_URL}/emotion/get`


const fetchEmotions = (quantity) => {
    return axios.get(callUrl, {
        params: {
            quantity: quantity
        }
    })
}

export default fetchEmotions