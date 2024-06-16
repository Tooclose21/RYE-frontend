import axios, {AxiosError} from "axios";

export class RyeApi {
    client;

    constructor() {
        this.client = axios.create({
            baseURL: `${process.env.REACT_APP_LOCAL_URL}`
        })
    }

    async loginKid(username, password) {
        try {
            const response = await this.client.post("/kid/login",
                {login: username, password: password})
            this.client.defaults.headers.common['Authorization'] = `Bearer ${response.data}`

            return {
                success: true,
                data: response.data,
                status: response.status,
            }
        } catch (err) {
            return {
                success: false,
                data: null,
                statusCode: err.response?.status || 0
            }
        }
    }

    async fetchPictures(quantity) {
        try {
            const response = await this.client.get("/pic/get", {
                params: {
                    quantity: quantity
                }
            })

            return {
                success: true,
                data: response.data,
                status: response.status,
            }
        } catch (err) {
            return {
                success: false,
                data: null,
                statusCode: err.response?.status || 0
            }
        }
    }

    async fetchEmotions(quantity) {
        try {
            const response = await this.client.get("/emotion/get", {
                params: {
                    quantity: quantity
                }
            })

            return {
                success: true,
                data: response.data,
                status: response.status,
            }
        } catch (err) {
            return {
                success: false,
                data: null,
                statusCode: err.response?.status || 0
            }
        }
    }

    async sendImage(image, expected_result) {
        const formData = new FormData()
        formData.append("file", this.dataURLtoBlob(image), `${expected_result}.jpeg`)
        try {
            const response = await this.client.post("/aws/extractEmotion", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            return {
                success: true,
                data: response.data,
                statusCode: response.status
            }
        } catch (err) {
            return {
                success: false,
                data: null,
                statusCode: err.response?.status || 0
            }
        }
    }

    dataURLtoBlob(dataURL) {
        const byteString = atob(dataURL.split(',')[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], {type: 'image/jpeg'});
    };

    async saveResults(result) {
        try {
            const response = await this.client.post('/result/add', result)
            return {
                success: true,
                data: response.data,
                statusCode: response.status
            }
        } catch (err) {
            return {
                success: false,
                data: null,
                statusCode: err.response?.status || 0
            }
        }
    }

    async fetchPicturesAndAnswers(quantity) {
        try {
            const response = await this.client.get("/pic/get", {
                params: {
                    quantity: quantity
                }
            })

            const answ = await this.client.get("/emotion/getAnswers", {
                params: {
                    quantity: quantity
                }
            })

            return {
                success: true,
                data: {
                    pic: response.data, answ: answ.data
                },
                status: response.status
            }
        } catch
            (err) {
            return {
                success: false,
                data: null,
                statusCode: err.response?.status || 0
            }
        }
    }

    async registerGuardian(guardian) {
        try {
            const response = await this.client.post("/guardian/register", guardian)

            return {
                success: true,
                data: response.data,
                statusCode: response.status
            }
        } catch (err) {
            return {
                success: false,
                data: null,
                statusCode: err.response?.status || 0
            }
        }
    }

    async loginGuardian(credentials) {
        try {
            const response = await this.client.post("/guardian/login", credentials)

            this.client.defaults.headers.common['Authorization'] = `Bearer ${response.data}`
            return {
                success: true,
                data: response.data,
                statusCode: response.status
            }
        } catch (err) {
            return {
                success: false,
                data: null,
                statusCode: err.response?.status || 0
            }
        }
    }

    async fetchSubAccounts() {
        try {
            const response = await this.client.get('/guardian/kids');

            return {
                success: true,
                data: response.data,
                statusCode: response.status
            }
        } catch (err) {
            return {
                success: false,
                data: null,
                statusCode: err.response?.status || 0
            }
        }
    }

    async createChild(kid) {
        try {
            const response = await this.client.post("/kid/register", kid)

            console.log(response)
            const kids = await this.fetchSubAccounts()
            console.log(kids)

            return {
                success: true,
                data: kids.data,
                statusCode: response.status
            }
        } catch (err) {
            return {
                success: false,
                data: null,
                statusCode: err.response?.status || 0
            }
        }
    }

    async fetchStats() {
        try {
            const modes = ["MIMIC_FROM_PICTURE", "MIMIC_FROM_NAME", 'RECOGNIZE_FROM_PICTURE']
            const requests = {}
            modes.forEach(mode => {
                requests[mode] = this.client.get('/stats/getResultsByMode', {params: {mode: mode}})
            })
            const data = {}
            for (const mode of modes) {
                const response = await requests[mode]
                const partial = response.data

                const series = {}
                partial.forEach(item => {
                    if (!(item.date in series)) {
                        series[item.date] = []
                    }
                    series[item.date].push(item.result)
                })

                const mode_data = {}
                for (const [key, val] of Object.entries(series)) {
                    mode_data[key] = val.reduce((a, b) => a + b) / val.length
                }

                data[mode] = mode_data
            }

            return {
                success: true,
                data: data,
                statusCode: 200
            }

        } catch (err) {
            console.log(err)
            return {
                success: false,
                data: null,
                statusCode: err.response?.status || 0
            }
        }
    }
}