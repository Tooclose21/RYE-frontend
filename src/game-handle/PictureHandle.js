import axios from "axios";

const callUrl = `${process.env.REACT_APP_LOCAL_URL}/mimic/rate`

// Converts image from WebCam to blob
const dataURLtoBlob = (dataURL) => {
    const byteString = atob(dataURL.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type: 'image/jpeg'});
};


const sendImage = async (image, expected_result) => {
    const formData = new FormData()
    formData.append("file", dataURLtoBlob(image), "image.jpeg")


    try {
        const response = await axios.post(callUrl, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        return response.data
    } catch (error) {
        return error
    }
}

export default sendImage