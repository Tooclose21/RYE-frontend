import axios from 'axios';

const url = `${process.env.REACT_APP_LOCAL_URL}/result/add`;

const saveResult = async (result) => {
    try {
        const response = await axios.post(url, result)
        return response.data;
    } catch (error) {
        return error
    }
}

export default saveResult;