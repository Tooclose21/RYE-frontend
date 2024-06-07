import axios from "axios";

const callUrl = `${process.env.REACT_APP_LOCAL_URL}/pic/get`


const   fetchPicture = (quantity) => {
    return axios.get(callUrl, {
        params: {
            quantity: quantity
        }
    })
}

export default fetchPicture